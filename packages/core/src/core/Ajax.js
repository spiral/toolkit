"use strict";

// var tools = require("../helpers/tools");
var Events = require("../core/Events");
var LikeFormData = require("../helpers/LikeFormData");

/**
 * This is an Ajax transport.
 * Supports  XDomainRequest for old IE
 * @param {Object} [options]
 * @param {Object} [options.headers] Headers to add to the instance
 * @fires beforeSend event that will be performed before request is send. Event called with one parameter "options", that contains all variables for Ajax
 * @constructor
 */
var Ajax = function (options) {
    this.currentRequests = 0;
    this.events = new Events(["beforeSend", 'load']);

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
    'X-Requested-With': 'XMLHttpRequest'
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
 * @param {Function} [options.isReturnXHRToo===false] should method return array instead of Promise. Some times is needed to control ajax (abort, etc).
 * If tree then  [window.Promise, XMLHttpRequest ] will be returned
 * @return {Promise|Array}
 */
Ajax.prototype.send = function (options) {
    var that = this;

    // TODO why we check here if data === null then reassign to null again?
    if (options.data === null || options.data === void 0 || options.data === 'undefined') {
        options.data = null;
    }
    if (!options.method) {
        options.method = "POST";
    }

    options.headers = options.headers ? Object.assign(options.headers, this.headers, options.headers) : Object.assign({}, this.headers);
    var xhr;
    var ajaxPromise = new Promise(function (resolve, reject) {    // Return a new promise.
        if (!options.url) {
            console.error("You should provide url");
            reject("You should provide url");
        }
        that.currentRequests++;

        var oldIE = false;

        if ((typeof window !== 'undefined')
            && window.XDomainRequest && (window.XMLHttpRequest && new XMLHttpRequest().responseType === undefined)
            && (url.indexOf("http") === 0)) { // old IE CORS
            // TODO maybe we should use XDomainRequest only for cross domain requests? But  Spiral for now works great with XDomainRequest (based on IEJSON)
            xhr = new XDomainRequest();
            // @see http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
            oldIE = true;
            // @see http://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment

            xhr.onprogress = function (e) {
                // TODO adjust options
                options.onProgress && options.onProgress(e);
            };
        } else {
            xhr = new XMLHttpRequest();
            if (options.onProgress) {
                xhr.upload.addEventListener("progress", function (event) {
                    if (event.lengthComputable) {
                        options.onProgress(event.loaded, event.total);
                    }
                }, false);
            }
        }

        xhr.open(options.method, options.url);

        xhr.onload = function () { // On loaded
            that.currentRequests--;
            var ans = that._parseJSON(xhr);

            if (ans.status) {
                if (ans.status > 199 && ans.status < 300) {// 200-299
                    resolve(ans);
                } else if (ans.status > 399 && ans.status < 600) {// 400-599
                    reject(ans);
                } else {
                    console.error("unknown status %d. Rejecting", ans.status);
                    reject(ans);
                }
            } else if (oldIE) {
                resolve(ans); // OLD IE + downloading file is producing  no status.
            } else {
                reject(ans); // reject with the status text
            }
            options.response = ans;
            that.events.trigger("load", options); // for example - used to handle actions
        };

        xhr.onerror = function () {// Handle network errors
            that.currentRequests--;
            reject(Error("Network Error"), xhr);
        };

        that.events.trigger("beforeSend", options); // you can modify "options" object inside event (like adding you headers,data,etc)

        var dataToSend;
        if (options.data !== null) { // if data to send is not empty
            if (!oldIE) {
                if (options.data.toString().indexOf("FormData") !== -1) { // if form data
                    dataToSend = options.data;
                } else {
                    dataToSend = new LikeFormData(options.data);
                    options.headers["content-type"] = dataToSend.getContentTypeHeader();
                }
                that._setHeaders(xhr, options.headers);
            } else {
                dataToSend = "IEJSON" + JSON.stringify(options.data);
            }
        } else { // else send empty data
            dataToSend = null;
        }

//        if (!oldIE) {
//            //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//            dataToSend = new spiral.LikeFormData(data, xhr, oldIE);
//        } else {
//            if (data !==null && data !== void 0 && data !== 'undefined'){
//                dataToSend = "IEJSON"+JSON.stringify(data);
//            } else {
//                 dataToSend =data;
//            }
//
//        }


        try { // working around FF bug
            xhr.send(dataToSend);// Make the request
        } catch (e) {
            // console.error("error sending trying another method");
            xhr.send(dataToSend.toString());
        }

        return xhr;
    });

    if (options.isReturnXHRToo) { // return xhr too
        return [ajaxPromise, xhr];
    }
    return ajaxPromise;
};

/**
 * Iterate over headers object and call xhr.setRequestHeader
 * @param {XMLHttpRequest} xhr
 * @param {Object} headers object with headers to set
 */
Ajax.prototype._setHeaders = function (xhr, headers) {
    for(var header in headers) {
        if(headers.hasOwnProperty(header)) {
            xhr.setRequestHeader(header, headers[header]);
        }
    }
};

/**
 * Try to parse and normalize answer
 * @param {XHR} xhr
 * @return {*}
 * @private
 */
Ajax.prototype._parseJSON = function (xhr) {
    if (!xhr.response) {
        xhr.response = xhr.responseText;
    }

    var ret = {};
    var contentType = false;

    if (xhr.getResponseHeader) {
        contentType = xhr.getResponseHeader("Content-Type");
    }

    if (!contentType
        || contentType.toLowerCase() === 'application/json'
        || contentType.toLowerCase() === 'text/json'
        || contentType.toLowerCase() === 'inode/symlink') { // application/json or inode/symlink  (AmazonS3 bug? )
        try {
            ret = JSON.parse(xhr.response);
        } catch (e) {
            console.error("Not a JSON!", xhr.response);
            ret = {data: xhr.response};
        }
    } else {
        ret = {data: xhr.response};
    }

    if (!ret.status) {
        ret.status = xhr.status;
    }
    // Some servers can answer status in JSON as "HTTP/1.1 200 OK"  but we need a status number
    if (typeof ret.status === 'string' && ret.status.indexOf("HTTP/") === 0 && ret.status.match(/ (\d\d\d)/)) {
        ret.status = parseInt(ret.status.match(/ (\d\d\d)/)[1]);// TODO check this code
    }

    if (!ret.statusText) {
        ret.statusText = xhr.statusText;
    }
    if (xhr.status && xhr.status != ret.status) {
        console.warn("Status from request %d, but response contains status %d", xhr.status, ret.status);
    }

    return ret;
};

module.exports = Ajax;
