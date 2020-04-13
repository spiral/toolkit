/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable max-len */

/**
 * This object try to be easy as FormData.
 * Please note this is not(!) a shim for Form data, because it's impossible (you should set headers for Ajax by hands)
 * It take object and can convert it string like FormData do. Then you can send this string by Ajax or do some other staff.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/FormData
 * @param {Object} [data] object with data (supports nested objects)
 * @param {String} [boundary] boundary  for Form Data
 * @constructor
 * @example
 * var formData = new LikeFormData({testKey:"testValue"},"testBoundary");
 * formData.toString();
 * // Returns:
 * //"--testBoundary
 * //Content-Disposition: form-data; name=testKey
 * //
 * // testValue
 * //--testBoundary--
 * //"
 *
 * @example
 * var formData = new LikeFormData({testKey:"testValue"});
 * formData.toString();
 * // Returns:
 * //"--SpiralFormData-4935309085994959
 * //Content-Disposition: form-data; name=testKey
 * //
 * // testValue
 * //--SpiralFormData-4935309085994959--
 * //"
 *
 * @example
 * var formData = new LikeFormData({testKey:"testValue"});
 * formData.append("key2","val2");
 * formData.toString();
 * // Returns:
 * //--SpiralFormData-988681384595111
 * //Content-Disposition: form-data; name=testKey
 * //
 * //testValue
 * //--SpiralFormData-988681384595111
 * //Content-Disposition: form-data; name=key2
 * //
 * //val2
 * //--SpiralFormData-988681384595111--
 * //"
 * @deprecated
 */
const LikeFormData = function (data, boundary) {
  this.data = {};
  if (data) {
    if (Object.prototype.toString.call(data) !== '[object Object]') { // non object/ Alert developer
      console.warn("LikeFormData can't accept non Object. Please reefer to documentation. Problem parameter is:", data);
    } else {
      this.data = data;
    }
  }
  this.boundary = (boundary) || (`SpiralFormData-${Math.random().toString().substr(2)}`);


  // if (!isOldIE) {
  //    this.boundary = "SpiralAjax-" + Math.random().toString().substr(2);
  //    //xhr.setRequestHeader("content-type", "multipart/form-data; charset=utf-8; boundary=" + this.boundary);
  // } else {
  //    this.boundary = "SpiralAjax-oldIE9876gsloiHGldowu";
  // }
};

/**
 * Append data to storage. Like standart FormData do.
 * @param {String} key
 * @param {String} val
 * @example
 * var formData = new FormData();
 * formData.append("key2","val2");
 */
LikeFormData.prototype.append = function (key, val) {
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData
  // TODO ***Appends a new value**** onto an existing key inside a FormData object, or adds the key if it does not already exist.
  this.data[key] = val;
};

/**
 * convert to string
 * @example
 * var formData = new LikeFormData({testKey:"testValue"});
 * formData.toString();
 * // Returns:
 * //"--SpiralFormData-4935309085994959
 * //Content-Disposition: form-data; name=testKey
 * //
 * // testValue
 * //--SpiralFormData-4935309085994959--
 * //"
 * @return {string}
 */
LikeFormData.prototype.toString = function () {
  let retString = '';
  const { boundary } = this;
  const iterate = function (data, partOfKey) {
    // for (const key in data) {
    Object.keys(data).forEach((key) => {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(key) && (typeof data[key] !== 'undefined')) {
        if (typeof data[key] === 'object') {
          iterate(data[key], ((partOfKey.length === 0) ? key : (`${partOfKey}[${key}]`)));
        } else {
          retString += `--${boundary
          }\r\nContent-Disposition: form-data; name=${(partOfKey.length === 0) ? key : (`${partOfKey}[${key}]`)
          }\r\n\r\n${data[key]}\r\n`;
        }
      }
    });
  };
  if (typeof this.data !== 'object') {
    this.data = {
      data: this.data,
    };
  }
  iterate(this.data, '');

  retString += `--${this.boundary}--\r\n`;
  return retString;
};

/**
 * The delete() method of the FormData interface deletes a key/value pair from a FormData object.
 * @param {string} key
 * @return {*}
 */
LikeFormData.prototype.delete = function (key) {
  return delete (this.data[key]);
};

/**
 *The get() method of the FormData interface returns the first value associated with a given key from within a FormData object.
 * @param {string} key
 * @return {*}
 */
LikeFormData.prototype.get = function (key) {
  return this.data[key];
};

/**
 * The getAll() method of the FormData interface returns the first value associated with a given key from within a FormData object.
 * @return {*}
 */
LikeFormData.prototype.getAll = function () {
  return this.data;
};

/**
 * The has() method of the FormData interface returns a boolean stating whether a FormData object contains a certain key/value pair.
 * @param {string} key
 * @return {*}
 */
LikeFormData.prototype.has = function (key) {
  // eslint-disable-next-line no-prototype-builtins
  return this.data.hasOwnProperty(key);
};

/**
 * The difference between set() and FormData.append is that if the specified header does already exist, set() will
 * overwrite the existing value with the new one, whereas FormData.append will append the new value onto the end of the
 * set of values.
 * @param {string} key
 * @param {*} val
 */
LikeFormData.prototype.set = function (key, val) {
  this.data[key] = val;
};

/**
 * Get content header to set for Ajax. Not a part of standart FormData object. But for sending Like FormData over Ajax you should know header.
 * @return {string}
 * @example
 * var formData = new LikeFormData();
 * formData.getContentTypeHeader(); //return "multipart/form-data; charset=utf-8; boundary=SpiralFormData-988681384595111"
 * @example
 * var formData = new LikeFormData({key:"val2"},"testBoundary");
 * formData.getContentTypeHeader(); //return "multipart/form-data; charset=utf-8; boundary=testBoundary"
 */
LikeFormData.prototype.getContentTypeHeader = function () {
  return `multipart/form-data; charset=utf-8; boundary=${this.boundary}`;
};

module.exports = LikeFormData;
