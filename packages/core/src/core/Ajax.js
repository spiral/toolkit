/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable func-names */

const axios = require('axios');

// var tools = require("../helpers/tools");
const Events = require('./Events');
// const LikeFormData = require('../helpers/LikeFormData');

/**
 * This is an Ajax transport.
 * Supports  XDomainRequest for old IE
 * @param {Object} [options]
 * @param {Object} [options.headers] Headers to add to the instance
 * @fires beforeSend event that will be performed before request is send. Event called with one parameter "options", that contains all variables for Ajax
 * @constructor
 */
const Ajax = function (options) {
  this.currentRequests = 0;
  this.events = new Events(['beforeSend', 'load']);
  this.cancel = null;

  if (options && options.headers) {
    this.headers = Object.assign(this.headers, options.headers);
  }
};

/**
 * Default headers. You can overwrite it. Look at the event beforeSend
 * Please note that on XDomainRequest  we can't send any headers.
 * @type Object
 */
Ajax.prototype.headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

/**
 * Send ajax request to server
 * Will return promise or array with promise and XMLHttpRequest : {window.Promise|[window.Promise,XMLHttpRequest]}
 * @since 0.4.0
 * @param {Object} options object with options
 * @param {String} options.url url to send data
 * @param {Object|String} [options.data] data to send
 * @param {String} [options.method]
 * @param {Object} [options.headers] headers to add to the request
 * @param {Function} [options.onProgress] callback function on progress. Two callback options: current bytes sent,totalBytes
 * If tree then  [window.Promise, XMLHttpRequest ] will be returned
 * @return {Promise|Array}
 */
Ajax.prototype.send = function (options) {
  const that = this;

  // TODO why we check here if data === null then reassign to null again?
  if (options.data === null || options.data === undefined || options.data === 'undefined') {
    options.data = null;
  }
  if (!options.method) {
    options.method = 'POST';
  }

  options.headers = options.headers ? Object.assign(options.headers, this.headers, options.headers) : ({ ...this.headers });

  // eslint-disable-next-line prefer-destructuring
  const CancelToken = axios.CancelToken;
  const cancelSource = CancelToken.source();

  const config = {
    // `url` is the server URL that will be used for the request
    url: options.url,

    // `method` is the request method to be used when making the request
    method: options.method,

    // `headers` are custom headers to be sent
    headers: options.headers,

    // `data` is the data to be sent as the request body
    // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
    // When no `transformRequest` is set, must be of one of the following types:
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream, Buffer
    data: options.data,

    // `onUploadProgress` allows handling of progress events for uploads
    onUploadProgress: (progressEvent) => {
      if (options.onProgress) {
        options.onProgress(progressEvent.loaded, progressEvent.total);
      }
    },

    // `cancelToken` specifies a cancel token that can be used to cancel the request
    // (see Cancellation section below for details)
    cancelToken: cancelSource.token,
  };

  this.cancel = cancelSource.cancel;

  const wrapError = (e) => {
    e.isSFAjaxError = true; // Marks error that can have normal data inside
    return e;
  };

  const ajaxPromise = new Promise(((resolve, reject) => { // Return a new promise.
    if (!options.url) {
      console.error('You should provide url');
      reject(new Error('You should provide url'));
    }
    that.currentRequests += 1;
    axios
      .request(config)
      .then((response) => {
        that.currentRequests -= 1;

        if (response.status) {
          if (response.status > 199 && response.status < 300) { // 200-299
            resolve(response);
          } else if (response.status > 399 && response.status < 600) { // 400-599
            reject(wrapError(response));
          } else {
            console.error('unknown status %d. Rejecting', response.status);
            reject(wrapError(response));
          }
        } else {
          reject(wrapError(response)); // reject with the status text
        }
        options.response = response;
        that.events.trigger('load', options); // for example - used to handle actions
      })
      .catch((error) => {
        that.currentRequests -= 1;
        if (error.response) {
          reject(wrapError(error.response));
        } else {
          reject(error);
        }
      });
  }));

  return ajaxPromise;
};

module.exports = Ajax;
