(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@spiral-toolkit/core", [], factory);
	else if(typeof exports === 'object')
		exports["@spiral-toolkit/core"] = factory();
	else
		root["sf"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/axios/index.js":
/*!**********************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "../../node_modules/axios/lib/axios.js");

/***/ }),

/***/ "../../node_modules/axios/lib/adapters/xhr.js":
/*!*********************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/adapters/xhr.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "../../node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "../../node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "../../node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "../../node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "../../node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "../../node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "../../node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "../../node_modules/axios/lib/axios.js":
/*!**************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/axios.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../../node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "../../node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "../../node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "../../node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "../../node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "../../node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "../../node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "../../node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "../../node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "../../node_modules/axios/lib/cancel/Cancel.js":
/*!**********************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/Cancel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "../../node_modules/axios/lib/cancel/CancelToken.js":
/*!***************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/CancelToken.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "../../node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "../../node_modules/axios/lib/cancel/isCancel.js":
/*!************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/isCancel.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "../../node_modules/axios/lib/core/Axios.js":
/*!*******************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/Axios.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "../../node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "../../node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "../../node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "../../node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "../../node_modules/axios/lib/core/InterceptorManager.js":
/*!********************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/InterceptorManager.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "../../node_modules/axios/lib/core/buildFullPath.js":
/*!***************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/buildFullPath.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "../../node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "../../node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "../../node_modules/axios/lib/core/createError.js":
/*!*************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/createError.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "../../node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "../../node_modules/axios/lib/core/dispatchRequest.js":
/*!*****************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "../../node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "../../node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "../../node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "../../node_modules/axios/lib/core/enhanceError.js":
/*!**************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/enhanceError.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "../../node_modules/axios/lib/core/mergeConfig.js":
/*!*************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/mergeConfig.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "../../node_modules/axios/lib/core/settle.js":
/*!********************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/settle.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "../../node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "../../node_modules/axios/lib/core/transformData.js":
/*!***************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/transformData.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "../../node_modules/axios/lib/defaults.js":
/*!*****************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/defaults.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "../../node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "../../node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "../../node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "../../node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/bind.js":
/*!*********************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/bind.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/buildURL.js":
/*!*************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/buildURL.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/combineURLs.js":
/*!****************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/combineURLs.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/cookies.js":
/*!************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/cookies.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!******************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!********************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!************************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../../node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/parseHeaders.js":
/*!*****************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../../node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/spread.js":
/*!***********************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/spread.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "../../node_modules/axios/lib/utils.js":
/*!**************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/axios/lib/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "../../node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/process/browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/core/Ajax.js":
/*!**************************!*\
  !*** ./src/core/Ajax.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-console */

/* eslint-disable no-param-reassign */

/* eslint-disable max-len */

/* eslint-disable func-names */
const axios = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js"); // var tools = require("../helpers/tools");


const Events = __webpack_require__(/*! ./Events */ "./src/core/Events.js"); // const LikeFormData = require('../helpers/LikeFormData');

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
 * If tree then  [window.Promise, XMLHttpRequest ] will be returned
 * @return {Promise|Array}
 */

Ajax.prototype.send = function (options) {
  const that = this; // TODO why we check here if data === null then reassign to null again?

  if (options.data === null || options.data === undefined || options.data === 'undefined') {
    options.data = null;
  }

  if (!options.method) {
    options.method = 'POST';
  }

  options.headers = options.headers ? Object.assign(options.headers, this.headers, options.headers) : { ...this.headers
  }; // eslint-disable-next-line prefer-destructuring

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
    onUploadProgress: progressEvent => {
      if (options.onProgress) {
        options.onProgress(progressEvent.loaded, progressEvent.total);
      }
    },
    // `cancelToken` specifies a cancel token that can be used to cancel the request
    // (see Cancellation section below for details)
    cancelToken: cancelSource.token
  };
  this.cancel = cancelSource.cancel;

  const wrapError = e => {
    e.isSFAjaxError = true; // Marks error that can have normal data inside

    return e;
  };

  const ajaxPromise = new Promise((resolve, reject) => {
    // Return a new promise.
    if (!options.url) {
      console.error('You should provide url');
      reject(new Error('You should provide url'));
    }

    that.currentRequests += 1;
    axios.request(config).then(response => {
      that.currentRequests -= 1;

      if (response.status) {
        if (response.status > 199 && response.status < 300) {
          // 200-299
          resolve(response);
        } else if (response.status > 399 && response.status < 600) {
          // 400-599
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
    }).catch(error => {
      that.currentRequests -= 1;

      if (error.response) {
        reject(wrapError(error.response));
      } else {
        reject(error);
      }
    });
  });
  return ajaxPromise;
};

module.exports = Ajax;

/***/ }),

/***/ "./src/core/BaseDOMConstructor.js":
/*!****************************************!*\
  !*** ./src/core/BaseDOMConstructor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-prototype-builtins */
// TODO: ?

/* eslint-disable max-len */

/* eslint-disable func-names */

/**
 * This a base constructor (class) for any DOM based instance.
 * This constructor just grab all node attributes and generates options. All processed options stored at this.options
 * @example
 * We have html like this:
 * <div data-test="testValue" data-value="value123">.....</div>
 * this.options will be:
 * {
 *  test:"testValue",
 *  value:"value"
 * }
 * Note: data-test and data-value should be described in attributesToGrab
 * @constructor
 */
const BaseDOMConstructor = function () {};
/**
 * Init method. Call after construct instance
 * @param {Object} sf
 * @param {Object} node  DomNode of form
 * @param {Object} [options] all options to override default
 */


BaseDOMConstructor.prototype.init = function (sf, node, options) {
  // TODO data-spiral-JSON
  this.sf = sf;
  this.node = node; // if (sf.options && sf.options.instances && sf.options.instances[this.name]) {
  //    options = Object.assign(options || {}, sf.options.instances[this.name]);
  // }

  this.options = Object.assign(this.grabOptions(node), options);
};
/**
 * This is a options to generate.
 * You should provide processor or value.
 * @type {Object}
 * @property {Object} propertyKey - object of property
 * @property {String} propertyKey.value - default value to return
 * @property {String} [propertyKey.domAttr] - dom attribute to grab data
 * @property {Function} [propertyKey.processor] -  processor to process data before return
 * @property {Object}  ... - Another object of one property
 * @type {{}}
 *  @example
 * "someAttribute": {// key
 *      value: true, //default Value
 *      domAttr: "data-some-attribute", // attribute from node to grab
 *      processor: function (node,val,self) { //processor to process values before return
 *          //some calculations
 *      return someValue;
 *      }
 *  },
 *  "anotherAttribute":{...},
 *  "..."
 *
 *  @example
 *  //return node as value
 *  "context": {
 *      "processor": function (node,val,key) { //processor
 *          return node;
 *      }
 *  },
 *  "Another-key":{...},
 *  "..."
 * @example
 * //Grab attribute "data-attribute" as "MyAttribute" if attribute not provided return "DefaultValue"
 * // Dom node <div data-attribute="someValue"></div>
 * "MyAttribute": {
 *      value: "DefaultValue",
 *      domAttr: "data-attribute"
 *  }
 *  //after processing we should have
 *  {"MyAttribute":"someValue"}
 *
 *  @example
 * //Grab attribute "data-attribute" as "MyAttribute" and return some value instead
 * //Dom node  <div data-attribute="someValue"></div>
 * "MyAttribute": {
 *      domAttr: "data-attribute",
 *      processor: function (node,val,self) {
 *          return val+"SomeCalculation";
 *      }
 *  }
 *  //after processing we should have
 *  {"MyAttribute":"someValueSomeCalculation"}
 *
 * @example
 * //return function as value
 * processAnswer: {
 *      "value": function (options) {
 *         return "someVal";
 *      }
 *  //after processing we should have
 *  {"processAnswer":function (options) {
 *         return "someVal";
 *      }
 *   }
 *
 * @example
 * //return init time as value
 * initTime: {
 *      "processor": function (node,val,self) {
 *         return new Date().getTime;
 *      }
 *  //after processing we should have
 *  {"initTime":1429808977404}
 * @example
 * //return other value instead of real one
 * processAnswer: {
 *      "processor": function (node,val,self) {
 *         return "someVal";
 *      }
 *  //after processing we should have
 *  {"processAnswer":"someVal"}
 */


BaseDOMConstructor.prototype.optionsToGrab = {};
/**
 * Grab all options that described in optionsToGrab
 * @param {Object} node domNode
 * @return {Object}
 */

BaseDOMConstructor.prototype.grabOptions = function (node) {
  const options = {};
  let currentOptionValue;
  let currentOption; // for (const option in this.optionsToGrab) {

  Object.keys(this.optionsToGrab).forEach(option => {
    if (this.optionsToGrab.hasOwnProperty(option)) {
      currentOptionValue = null;

      if (this.optionsToGrab.hasOwnProperty(option)) {
        // if this is own option
        currentOption = this.optionsToGrab[option];

        if (currentOption.hasOwnProperty('value')) {
          // we have default option. Let's grab it for first
          currentOptionValue = currentOption.value;
        }

        if (this.sf.options.instances[this.name] && this.sf.options.instances[this.name].hasOwnProperty(option)) {
          currentOptionValue = this.sf.options.instances[this.name][option];
        }

        if (currentOption.hasOwnProperty('domAttr') && node.attributes.hasOwnProperty(currentOption.domAttr)) {
          // we can grab the attribute of node
          currentOptionValue = node.attributes[currentOption.domAttr].value;
        }

        if (currentOption.hasOwnProperty('processor')) {
          // we have processor. Let's execute it
          currentOptionValue = currentOption.processor.call(this, node, currentOptionValue, currentOption);
        }

        if (currentOptionValue !== null) {
          options[option] = currentOptionValue;
        }
      }
    }
  });
  return options;
};

module.exports = BaseDOMConstructor;

/***/ }),

/***/ "./src/core/DomMutations.js":
/*!**********************************!*\
  !*** ./src/core/DomMutations.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable max-len */

/* eslint-disable no-console */

/* eslint-disable func-names */

/**
 * Dom mutation. Listening to the DOM and add or remove instances based on classes.
 * @param {Object} instancesController  spiral instancesController.
 * @param {Function} instancesController.getClasses  get all registered modules classes.
 * @param {Function} instancesController.addInstance  add instance method.
 * @param {Function} instancesController.removeInstance  remove instance method
 * @constructor
 */
const DomMutations = function (instancesController) {
  if (!instancesController) {
    console.error('You should provide instancesController  for DOM Mutation. Because DOM Mutation  should known all classes and');
    return;
  }

  if (!this.constructor) {
    console.error("Please call DomMutations with new  - 'new DomMutations()' ");
    return;
  }

  this.instancesController = instancesController;
  const config = {
    // config for MutationObserver
    attributes: true,
    childList: true,
    characterData: true,
    characterDataOldValue: true,
    subtree: true,
    attributeOldValue: true,
    attributeFilter: ['class']
  };
  const that = this;
  this.observer = new MutationObserver(function () {
    // call function when dom mutated.
    // eslint-disable-next-line
    that.onDomMutate.apply(that, arguments);
  });
  this.observer.observe(document, config); // start observer
};
/**
 * When dom mutated this function id executed.
 * @param {Array} mutations array of mutations
 * @return {boolean}
 */


DomMutations.prototype.onDomMutate = function (mutations) {
  const classArray = this.instancesController.getClasses(); // get all registered classes

  const classSelector = `.${classArray.join(',.')}`; // convert for querySelectorAll()

  if (classSelector.length === 1) {
    // if not registered any instanceTypes
    return false;
  }

  mutations.forEach(function (mutation) {
    // loop over mutation array
    switch (mutation.type) {
      case 'attributes':
        this.processMutationAttributes(mutation, classArray);
        break;

      case 'characterData':
        break;

      case 'childList':
        this.processMutationChildList(mutation.addedNodes, 'addInstance', classSelector, classArray);
        this.processMutationChildList(mutation.removedNodes, 'removeInstance', classSelector, classArray);
        break;

      case 'default':
      default:
        console.error('Something wrong. Contact tech support');
    }
  }, this);
  return true;
};

DomMutations.prototype.processMutationAttributes = function (mutation, classArray) {
  const that = this;
  const currentClasses = mutation.target.className.split(' ');
  const oldClasses = mutation.oldValue ? mutation.oldValue.split(' ') : [];
  const addedClasses = currentClasses.filter(val => oldClasses.indexOf(val) === -1);
  const removedClasses = oldClasses.filter(val => currentClasses.indexOf(val) === -1);
  const addedRegisteredClasses = addedClasses.filter(val => classArray.indexOf(val) !== -1);
  const removedRegisteredClasses = removedClasses.filter(val => classArray.indexOf(val) !== -1);
  removedRegisteredClasses.forEach(val => {
    that.instancesController.removeInstance(that.instancesController.getInstanceNameByCssClass(val), mutation.target);
  });
  addedRegisteredClasses.forEach(val => {
    that.instancesController.addInstance(that.instancesController.getInstanceNameByCssClass(val), mutation.target);
  });
};
/**
 * Process mutation on ChildList
 * @param {NodeList} nodesList array with nodes
 * @param {String} action action to call (add or remove nodes)
 * @param {String} classSelector - string selector for querySelectorAll
 * @param {Array} classArray - array of all registered classes
 */


DomMutations.prototype.processMutationChildList = function (nodesList, action, classSelector, classArray) {
  const that = this;
  /**
     * Internal function for checking node class
     * @param {Object} node dom node
     */

  function checkNode(node) {
    classArray.forEach(className => {
      // loop over registered classes
      if (node.classList.contains(className)) {
        // if class match try to add or remove instance for this node
        that.instancesController[action](that.instancesController.getInstanceNameByCssClass(className), node);
      }
    });
  }

  [].forEach.call(nodesList, val => {
    // loop over mutation nodes
    if (val.nodeType !== 1 || val.nodeName === 'SCRIPT' || val.nodeName === 'LINK') {
      // do not process other nodes then ELEMENT_NODE https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType also ignore SCRIPT and LINK tag
      return false;
    }

    checkNode(val); // check mutation node

    [].forEach.call(val.querySelectorAll(classSelector), checkNode); // query all nodes with required classes and check it

    return true;
  });
};
/**
 * Stop listening the dom changes
 */


DomMutations.prototype.stopObserve = function () {
  this.observer.disconnect();
};

module.exports = DomMutations;

/***/ }),

/***/ "./src/core/Events.js":
/*!****************************!*\
  !*** ./src/core/Events.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-console */

/* eslint-disable no-underscore-dangle */

/* eslint-disable func-names */

/**
 * Events system.
 * @param {Array} allowedEvents array of allowed events.
 * @constructs Events
 * @example
 * //allow to work with all events
 * var events = new Events();
 * events.on("myBestEvent",function(e){console.log(e)});
 * @example
 * //Allow to serve only limited events
 *  var events = new Events(["beforeSubmit","onDataReady"]);
 *  events.on("myBestEvent",function(e){console.log(e)});//will not works
 *  events.on("beforeSubmit",function(e){console.log(e)});//will work
 */
const Events = function (allowedEvents) {
  this._storage = {};
  this._allowedEvents = allowedEvents;
};
/**
 * Add event(s)
 * @param {String} events event or space separated event list
 * @param {Function} callback callback function
 * @example
 * var events = new Events();
 * events.on("myBestEvent myBestEvent2 myBestEvent3",function(e){console.log(e)});
 * events.on("myBestEvent",function(e){console.log(e)});
 */


Events.prototype.on = function (events, callback) {
  const eventArr = events.replace(/\s{2,}/g, ' ').split(' ');
  eventArr.forEach(function (event) {
    // event not inside allowed events
    if (this._allowedEvents && this._allowedEvents.indexOf(event) === -1) {
      console.warn('Events. Try to register event %s, but event is not allowed', event);
      return;
    } // eslint-disable-next-line no-prototype-builtins


    if (!this._storage.hasOwnProperty(events)) {
      this._storage[event] = [];
    }

    this._storage[event].push(callback);
  }, this);
};
/**
 * Add action
 * @param {String} action
 * @param {Function} func
 * @deprecated  use "on" instead
 */


Events.prototype.registerAction = Events.prototype.on;
/**
 * remove event
 * @param {String} event
 * @param {Function} callback
 */

Events.prototype.off = function () {
  // eslint-disable-next-line no-alert
  alert('You try to remove action. This part is incomplete'); // TODO
};
/**
 * Trigger event.
 * @param {String} event event name
 * @param {Object} [options] options to pass to the callback
 * @example
 * var events = new Events();
 * events.on("myBestEvent",function(e){console.log(e.bestKey)});
 * events.trigger("myBestEvent",{bestKey:42}); //will show in log
 */


Events.prototype.trigger = function (event, options) {
  // event not inside allowed events
  if (this._allowedEvents && this._allowedEvents.indexOf(event) === -1) {
    console.warn('Events. Try to trigger event %s, but event is not allowed', event);
    return;
  } // eslint-disable-next-line no-prototype-builtins


  if (this._storage.hasOwnProperty(event)) {
    for (let n = 0, l = this._storage[event].length; n < l; n += 1) {
      this._storage[event][n](options);
    }
  }
};
/**
 * Perform action
 * @param {String} action
 * @param {Object} [actionParams] object with all action data from server
 * @param {Object} [options] ajax options
 * @deprecated use "trigger" instead
 */


Events.prototype.performAction = Events.prototype.trigger;
module.exports = Events;

/***/ }),

/***/ "./src/core/InstancesController.js":
/*!*****************************************!*\
  !*** ./src/core/InstancesController.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-prototype-builtins */
// TODO: ?

/* eslint-disable no-param-reassign */

/* eslint-disable max-len */

/* eslint-disable no-underscore-dangle */

/* eslint-disable no-console */

/* eslint-disable func-names */

/**
 * Instance controller
 * @param {*} spiral
 * @constructor
 */
const InstancesController = function (spiral) {
  this.spiral = spiral;

  if (!this.constructor) {
    console.error("Please call InstancesController with new  - 'new InstancesController()' ");
    return;
  }

  this._storage = {
    instancesConstructors: {
      cssClasses: {},
      jsConstructors: {}
    },
    addons: {},
    instances: {}
  };
  this.events = new spiral.core.Events(['onRemoveInstance', 'onAddInstance']);
};
/**
 * Register new instance type
 * @param {Function} constructorFunction - constructor function of instance
 * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
 * controlled by DomMutation. But you still can use it from JS.
 * @param {Boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
 */


InstancesController.prototype.registerInstanceType = function (constructorFunction, cssClassName, isSkipInitialization) {
  const instanceName = constructorFunction.spiralFrameworkName || constructorFunction.prototype.name;

  if (!instanceName) {
    console.error('Instance constructor should have name inside it');
  } // eslint-disable-next-line no-prototype-builtins


  if (this._storage.instancesConstructors.jsConstructors.hasOwnProperty(instanceName)) {
    console.error("Instance Constructor for type '%s' already added. Skipping", instanceName);
    return;
  }

  if (cssClassName) {
    // add link (cssClassName->instanceName)
    this._storage.instancesConstructors.cssClasses[cssClassName] = instanceName;
  }

  this._storage.instancesConstructors.jsConstructors[instanceName] = constructorFunction; // if (this._storage.instancesConstructors.hasOwnProperty(className)){
  //    console.error("Instance Constructor for type %s already added. Skipping",constructorFunction.prototype.name);
  //    return;
  // }
  // this._storage.instancesConstructors[className] = {//init storage fields
  //    "typeName": constructorFunction.prototype.name,
  //    "constructor": constructorFunction
  // };

  this._storage.instances[instanceName] = [];

  if (!isSkipInitialization) {
    const nodes = document.getElementsByClassName(cssClassName); // init add nodes with this class

    for (let i = 0, max = nodes.length; i < max; i += 1) {
      this.addInstance(instanceName, nodes[i]);
    }
  }
};
/**
 * Old method to register instance type
 * @param {*} className
 * @param {*} constructorFunction
 * @param {*} isSkipInitialization
 * @return {*}
 * @deprecated
 */


InstancesController.prototype.addInstanceType = function (className, constructorFunction, isSkipInitialization) {
  console.warn('addInstanceType is deprecated. Please use registerInstanceType instead');
  return this.registerInstanceType(constructorFunction, isSkipInitialization);
};
/**
 * Add instance
 * @param {String} instanceName - name of instance
 * @param {Object} node - dom node
 * @param {Object} [options] all options for send to the constructor
 * @return {boolean}
 */


InstancesController.prototype.addInstance = function (instanceName, node, options) {
  const InstanceConstructor = this._storage.instancesConstructors.jsConstructors[instanceName];
  const isAlreadyAdded = this.getInstance(instanceName, node);

  if (!InstanceConstructor || isAlreadyAdded) {
    // if not found this type  or already added - return
    return false;
  }

  const instance = new InstanceConstructor(this.spiral, node, options);

  this._storage.instances[instanceName].push({
    // add new instance of this type
    node,
    instance
  });

  this.events.trigger('onAddInstance', {
    instance,
    type: instanceName
  });
  return instance;
};
/**
 * Remove instance.
 * @param {String} instanceName - name of instance class
 * @param {Object|String} node - dom node ID
 * @return {boolean}
 */


InstancesController.prototype.removeInstance = function (instanceName, node) {
  const instanceObj = this.getInstance(instanceName, node, true);

  if (!instanceObj) {
    return false;
  }

  instanceObj.instance.die(); // avoid memory leak

  const key = this._storage.instances[instanceName].indexOf(instanceObj);

  if (key !== -1) {
    // remove key
    this._storage.instances[instanceName].splice(key, 1);
  }

  this.events.trigger('onRemoveInstance', {
    instance: instanceObj,
    type: instanceName
  });
  return true;
};
/**
 * Get instance. Return instance object of this dom node
 * @param {String} instanceName - name of instance
 * @param {Object|String} node - dom node o dome node ID
 * @param {boolean} [isReturnObject] - return object or instance
 * @return {boolean}
 */


InstancesController.prototype.getInstance = function (instanceName, node, isReturnObject) {
  // TODO isReturnObject not needed. Refactor and remove
  const typeArr = this._storage.instances[instanceName];
  let ret = false;

  if (!typeArr) {
    return false;
  }

  node = node instanceof HTMLElement ? node : document.getElementById(node);

  if (!node) {
    return false;
  }

  for (let key = 0, l = typeArr.length; key < l; key += 1) {
    // iterate storage and try to find instance
    if (typeArr[key].node === node) {
      ret = isReturnObject ? typeArr[key] : typeArr[key].instance;
      break;
    }
  }

  return ret;
};
/**
 * Get instances. Return array of instances objects
 * @param {String} instanceName - name of instance
 * @return {array|boolean}
 */


InstancesController.prototype.getInstances = function (instanceName) {
  return this._storage.instances[instanceName] || false;
};
/**
 * Register addon for instance
 * @param {Function|Object} addon
 * @param {String} instanceName name of instance to register addon
 * @param {String} addonType type of addon (message,fill,etc)
 * @param {String} addonName name of addon (spiral, bootstrap,etc)
 */


InstancesController.prototype.registerAddon = function (addon, instanceName, addonType, addonName) {
  if (!this._storage.addons.hasOwnProperty(instanceName)) {
    this._storage.addons[instanceName] = {};
  }

  if (!this._storage.addons[instanceName].hasOwnProperty(addonType)) {
    this._storage.addons[instanceName][addonType] = {};
  }

  if (this._storage.addons[instanceName][addonType].hasOwnProperty(addonName)) {
    console.error('The %s addon type %s already registered for instance %s! Skipping registration.', addonName, addonType, instanceName);
    return;
  }

  this._storage.addons[instanceName][addonType][addonName] = addon;
};
/**
 * Get registered addon
 * @param {String} instanceName name of instance to register addon
 * @param {String} addonType type of addon (message,fill,etc)
 * @param {String} addonName name of addon (spiral, bootstrap,etc)
 * @return {*}
 */


InstancesController.prototype.getInstanceAddon = function (instanceName, addonType, addonName) {
  if (!this._storage.addons.hasOwnProperty(instanceName) || !this._storage.addons[instanceName].hasOwnProperty(addonType) || !this._storage.addons[instanceName][addonType].hasOwnProperty(addonName)) {
    return false;
  }

  return this._storage.addons[instanceName][addonType][addonName];
};
/**
 * Get all registered classes
 * @return {Array}
 */


InstancesController.prototype.getClasses = function () {
  return Object.keys(this._storage.instancesConstructors.cssClasses);
};
/**
 * For given cssClass return name of instance
 * @param {String} cssClass
 * @return {*}
 */


InstancesController.prototype.getInstanceNameByCssClass = function (cssClass) {
  return this._storage.instancesConstructors.cssClasses[cssClass];
};
/**
 * Get constructor by name or class name
 * @param {*} name
 */


InstancesController.prototype.getInstanceConstructors = function () {// TODO
};

module.exports = InstancesController;

/***/ }),

/***/ "./src/core/ajax/baseActions.js":
/*!**************************************!*\
  !*** ./src/core/ajax/baseActions.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable max-len */

/* eslint-disable no-console */

/* eslint-disable func-names */

/**
 * This plugin adds ability to perform actions from the server.
 * @param {Object} sf
 * "action":"reload"
 * "action":{"redirect":"/account"}
 * "action":{"redirect":"/account","delay":3000}
 * "action":{"name":"redirect","url":"/account","delay":3000}
 */
module.exports = function (sf) {
  sf.ajax.events.on('load', options => {
    const {
      response
    } = options;
    if (!response || !response.data) return;
    const {
      data
    } = response;
    if (!data.action) return;

    if (typeof data.action === 'string') {
      // "action":"reload"
      sf.events.trigger(data.action);
    } else if (typeof data.action === 'object') {
      const keys = Object.keys(data.action); // TODO: notifications
      // if (keys.indexOf('flash') !== -1) {
      //   const { flash } = data.action;
      //   const timestamp = Date.now();
      //   let sfFlashMessage = {};
      //   if (typeof data.action.flash === 'object') {
      //     sfFlashMessage = flash;
      //     sfFlashMessage.timestamp = timestamp;
      //   } else {
      //     sfFlashMessage = {
      //       message: flash,
      //       timestamp,
      //     };
      //   }
      //   sessionStorage.setItem('sfFlashMessage', JSON.stringify(sfFlashMessage));
      // }

      if (keys.indexOf('redirect') !== -1) {
        setTimeout(() => {
          sf.events.trigger('redirect', data.action.redirect, options);
        }, +data.action.delay || 0);
      } else if (keys.indexOf('name') !== -1) {
        setTimeout(() => {
          sf.events.trigger(data.action.name, data.action.url);
        }, +data.action.delay || 0);
      }
    } else {
      console.error('Action from server. Something wrong. ', data.action);
    }
  }); // (function (sfFlashMessage) {
  //   if (!sfFlashMessage) return;
  //   const message = JSON.parse(sfFlashMessage);
  //   const timestamp = Date.now();
  //   let flashClass;
  //   if (timestamp - message.timestamp > 10000) return;
  //   if (message.type === 'debug' || message.type === 'success') {
  //     flashClass = 'debug';
  //   } else if (message.type === 'info' || !message.type || message.type === 'notice') {
  //     flashClass = 'info';
  //   } else {
  //     flashClass = 'danger';
  //   }
  //   const node = document.createElement('div');
  //   const nodeWrapper = document.createElement('div');
  //   nodeWrapper.classList.add('flash-wrapper');
  //   node.classList.add('flash', flashClass);
  //   node.innerHTML = message.message;
  //   document.body.appendChild(nodeWrapper);
  //   nodeWrapper.appendChild(node);
  //   setTimeout(() => {
  //     nodeWrapper.classList.add('show');
  //   }, 1);
  //   setTimeout(() => {
  //     nodeWrapper.classList.remove('show');
  //   }, message.timeout || 5000);
  //   sessionStorage.removeItem('sfFlashMessage');
  // }(sessionStorage.getItem('sfFlashMessage')));
};

/***/ }),

/***/ "./src/core/events/baseEvents.js":
/*!***************************************!*\
  !*** ./src/core/events/baseEvents.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-restricted-globals */
module.exports = function baseEvents(events) {
  events.on('redirect', event => {
    const url = Object.prototype.toString.call(event) === '[object String]' ? event : event.url; // http://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative

    const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(url);

    if (isAbsolute) {
      self.location.href = url;
    } else {
      const origin = window.location.origin || `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
      self.location.href = origin + (url.charAt(0) === '/' ? url : `/${url}`); // Relative path
    }
  });
  events.on('reload', () => {
    window.location.reload();
  });
  events.on('refresh', () => {
    events.trigger('reload');
  });
  events.on('close', () => {
    self.close();
  });
};

/***/ }),

/***/ "./src/helpers/DOMEvents.js":
/*!**********************************!*\
  !*** ./src/helpers/DOMEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-param-reassign */

/* eslint-disable no-console */

/* eslint-disable max-len */

/* eslint-disable no-underscore-dangle */

/* eslint-disable func-names */

/**
 * Helper to manipulate DOM Events. It's a simple wrapper around "addEventListener" but it's store all functions and allow us to remove it all.
 * It's very helpful for die() method of instances
 * @TODO add to many nodes
 * @TODO new method like addEventListener  DOMEvents.on(node(s),event,callback,useCapture);
 * @constructor
 */
const DOMEvents = function () {
  /**
     * Internal storage for events
     * @property {Array.<Object>} DOMEvents - dom events array
     * @property {Object} DOMEvents.DOMNode -   DOM node
     * @property {String} DOMEvents.eventType -   Event type
     * @property {Function} DOMEvents.eventFunction -   Function
     * @property {Boolean} DOMEvents.useCapture=false -   useCapture
     * @property {Object} ... -   another object
     * @private
     */
  this._DOMEventsStorage = [];
};
/**
 * Add event(s) to node(s).
 * @TODO add to many nodes
 * @param {Array.<Object>|Object} eventArray - event array or event itself
 * @param {Object} eventArray.DOMNode -   DOM node
 * @param {String} eventArray.eventType -   Event type
 * @param {Function} eventArray.eventFunction -   Function
 * @param {Boolean} [eventArray.useCapture=false] -   useCapture
 * @example
 * var DOMEventsInstance = new DOMEvents();
 * var eventOne = {
 *      DOMNode: document.getElementById("example"),
 *      eventType: "click",
 *      eventFunction: function (e) {
 *          console.log("Hi there. Native  DOM events is:",e);
 *      }
 * }
 *  var eventTwo = {
 *      DOMNode: document.getElementById("example2"),
 *      eventType: "mousedown",
 *      eventFunction: function (e) {
 *          console.log("Hi there. mousedown event. Native  DOM events is:",e);
 *      }
 * }
 *  DOMEventsInstance.add([eventOne,eventTwo]);
 */


DOMEvents.prototype.add = function (eventArray) {
  if (Object.prototype.toString.call([]) !== '[object Array]') {
    eventArray = [eventArray];
  }

  eventArray.forEach(function (val) {
    val.useCapture = !!val.useCapture;
    val.DOMNode.addEventListener(val.eventType, val.eventFunction, val.useCapture);

    this._DOMEventsStorage.push(val);
  }, this);
};
/**
 * Remove events
 * @param {Array.<Object>} eventArray - event array
 * @param {Object} eventArray.DOMNode -   DOM node
 * @param {String} eventArray.eventType -   Event type
 * @param {Function} eventArray.eventFunction -   Function
 * @param {Boolean} [eventArray.useCapture=false] -   useCapture
 */


DOMEvents.prototype.remove = function ()
/* eventArray */
{
  // TODO IMPLEMENT
  // TODO не уверен что этот метод необходим. если надо часто убирать какието обработчики, то лучше поставить обработчки на родителя
  console.warn('TODO IMPLEMENT');
};
/**
 * Remove all dom events registered with this instance (added by method add)
 * @example
 * //look at add method as first part of this code
 * DOMEventsInstance.removeAll();
 */


DOMEvents.prototype.removeAll = function () {
  this._DOMEventsStorage.forEach(val => {
    val.DOMNode.removeEventListener(val.eventType, val.eventFunction, val.useCapture);
  });

  this._DOMEventsStorage = [];
};

module.exports = DOMEvents;

/***/ }),

/***/ "./src/helpers/domTools.js":
/*!*********************************!*\
  !*** ./src/helpers/domTools.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable max-len */

/* eslint-disable no-param-reassign */

/**
 This is a collection of useful DOM tools.
 */
module.exports = {
  /**
     * Found first parent node with matched selector(s)
     * @param {Object} elem - dom node
     * @param {String|Array} selectors - selector or array of selectors
     * @returns {Object| Boolean} - node or false
     */
  closest(elem, selectors) {
    selectors = typeof selectors === 'string' ? [selectors] : selectors;
    let key;
    const l = selectors.length;
    const matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

    while (elem && elem.parentNode) {
      for (key = 0; key < l; key += 1) {
        if (matchesSelector.call(elem, selectors[key])) {
          return elem;
        }
      }

      elem = elem.parentNode;
    }

    return false;
  },

  /**
     * Found first parent node with matched className(s).
     * TODO Why this? Because old IE....
     * TODO It's not good, because it's a copy of closest @see closest. Refactor
     * @param {Object} elem - dom node
     * @param {String|Array} className - className or array of classNames
     * @returns {Object| Boolean} - node or false
     */
  closestByClassName(elem, className) {
    className = typeof className === 'string' ? [className] : className;
    let key;
    const l = className.length;

    while (elem && elem.parentNode) {
      for (key = 0; key < l; key += 1) {
        const reg = new RegExp(`(\\s|^)${className[key]}(\\s|$)`);

        if (elem.className.match(reg)) {
          return elem;
        }
      }

      elem = elem.parentNode;
    }

    return false;
  }

};

/***/ }),

/***/ "./src/helpers/tools.js":
/*!******************************!*\
  !*** ./src/helpers/tools.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-restricted-globals */

/**
 * @module tools
 * @namespace
 */
const tools = {
  resolveKeyPath(path, obj, safe) {
    // eslint-disable-next-line no-nested-ternary
    return path.split('.').reduce((prev, curr) => !safe ? prev[curr] : prev ? prev[curr] : undefined, obj || self);
  }

};
module.exports = tools;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable global-require */

/* eslint-disable func-names */

/* eslint-disable max-len */

/* eslint-disable no-prototype-builtins */

/**
 * Provides a spiral-specific sf bundle
 * TODO: This wrapping looks very fishy, why we need it? Move to toolkit may be?
 */
const sf = __webpack_require__(/*! ./sf */ "./src/sf.js");

const sfWrapper = {
  core: sf.core,
  helpers: sf.helpers,
  tools: sf.tools
}; // Add console shim for old IE

__webpack_require__(/*! ./shim/console */ "./src/shim/console.js");

__webpack_require__(/*! ./shim/Object.assign */ "./src/shim/Object.assign.js");

if (!sfWrapper.hasOwnProperty('options')) sfWrapper.options = {
  instances: {}
};
if (!sfWrapper.options.hasOwnProperty('instances')) sfWrapper.options.instances = {};
sfWrapper.instancesController = new sfWrapper.core.InstancesController(sfWrapper);
sfWrapper.domMutation = new sfWrapper.core.DomMutations(sfWrapper.instancesController); // Events system

sfWrapper.events = new sfWrapper.core.Events();

__webpack_require__(/*! ./core/events/baseEvents.js */ "./src/core/events/baseEvents.js")(sfWrapper.events); // AJAX


sfWrapper.ajax = new sfWrapper.core.Ajax(window && window.csrfToken ? {
  // TODO move to spiral bindings
  headers: {
    'X-CSRF-Token': window.csrfToken
  }
} : null); // ACTIONS

__webpack_require__(/*! ./core/ajax/baseActions.js */ "./src/core/ajax/baseActions.js")(sfWrapper); // API


sfWrapper.createModulePrototype = function () {
  return Object.create(sfWrapper.core.BaseDOMConstructor.prototype);
};

sfWrapper.registerInstanceType = sfWrapper.instancesController.registerInstanceType.bind(sfWrapper.instancesController);
sfWrapper.addInstance = sfWrapper.instancesController.addInstance.bind(sfWrapper.instancesController);
sfWrapper.removeInstance = sfWrapper.instancesController.removeInstance.bind(sfWrapper.instancesController);
sfWrapper.getInstance = sfWrapper.instancesController.getInstance.bind(sfWrapper.instancesController);
sfWrapper.getInstances = sfWrapper.instancesController.getInstances.bind(sfWrapper.instancesController);
sfWrapper.closest = sf.helpers.domTools.closest;
sfWrapper.resolveKeyPath = sf.tools.resolveKeyPath;
module.exports = sfWrapper;

/***/ }),

/***/ "./src/sf.js":
/*!*******************!*\
  !*** ./src/sf.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable global-require */
const core = {
  Ajax: __webpack_require__(/*! ./core/Ajax */ "./src/core/Ajax.js"),
  BaseDOMConstructor: __webpack_require__(/*! ./core/BaseDOMConstructor */ "./src/core/BaseDOMConstructor.js"),
  DomMutations: __webpack_require__(/*! ./core/DomMutations */ "./src/core/DomMutations.js"),
  Events: __webpack_require__(/*! ./core/Events */ "./src/core/Events.js"),
  InstancesController: __webpack_require__(/*! ./core/InstancesController */ "./src/core/InstancesController.js")
};
const helpers = {
  DOMEvents: __webpack_require__(/*! ./helpers/DOMEvents */ "./src/helpers/DOMEvents.js"),
  domTools: __webpack_require__(/*! ./helpers/domTools */ "./src/helpers/domTools.js") // LikeFormData: require('./helpers/LikeFormData'),
  // tools: require('./helpers/tools'),

};
const sf = {
  core,
  helpers,
  tools: __webpack_require__(/*! ./helpers/tools */ "./src/helpers/tools.js")
};
module.exports = sf;

/***/ }),

/***/ "./src/shim/Object.assign.js":
/*!***********************************!*\
  !*** ./src/shim/Object.assign.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable func-names */

/**
 * Object.assign polyfill
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
if (typeof Object.assign !== 'function') {
  (function () {
    Object.assign = function (target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      const output = Object(target);

      for (let index = 1; index < arguments.length; index += 1) {
        // eslint-disable-next-line prefer-rest-params
        const source = arguments[index];

        if (source !== undefined && source !== null) {
          // for (const nextKey in source) {
          Object.keys(source).forEach(nextKey => {
            // eslint-disable-next-line no-prototype-builtins
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          });
        }
      }

      return output;
    };
  })();
}

/***/ }),

/***/ "./src/shim/console.js":
/*!*****************************!*\
  !*** ./src/shim/console.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable func-names */

/**
 * Avoid `console` errors in browsers that lack a console.
 */
(function () {
  let method;

  const noop = function () {};

  const methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
  let {
    length
  } = methods; // eslint-disable-next-line no-multi-assign

  const console = window.console = window.console || {}; // eslint-disable-next-line no-plusplus

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RvbU11dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hamF4L2Jhc2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL0RPTUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9kb21Ub29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGltL09iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaW0vY29uc29sZS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJFdmVudHMiLCJBamF4Iiwib3B0aW9ucyIsImN1cnJlbnRSZXF1ZXN0cyIsImV2ZW50cyIsImNhbmNlbCIsImhlYWRlcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzZW5kIiwidGhhdCIsImRhdGEiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJDYW5jZWxUb2tlbiIsImNhbmNlbFNvdXJjZSIsInNvdXJjZSIsImNvbmZpZyIsInVybCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50Iiwib25Qcm9ncmVzcyIsImxvYWRlZCIsInRvdGFsIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsIndyYXBFcnJvciIsImUiLCJpc1NGQWpheEVycm9yIiwiYWpheFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInRyaWdnZXIiLCJjYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJCYXNlRE9NQ29uc3RydWN0b3IiLCJpbml0Iiwic2YiLCJub2RlIiwiZ3JhYk9wdGlvbnMiLCJvcHRpb25zVG9HcmFiIiwiY3VycmVudE9wdGlvblZhbHVlIiwiY3VycmVudE9wdGlvbiIsImtleXMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSIsImluc3RhbmNlcyIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiZG9tQXR0ciIsInByb2Nlc3NvciIsImNhbGwiLCJEb21NdXRhdGlvbnMiLCJpbnN0YW5jZXNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwic3VidHJlZSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25Eb21NdXRhdGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9ic2VydmUiLCJkb2N1bWVudCIsIm11dGF0aW9ucyIsImNsYXNzQXJyYXkiLCJnZXRDbGFzc2VzIiwiY2xhc3NTZWxlY3RvciIsImpvaW4iLCJsZW5ndGgiLCJtdXRhdGlvbiIsInR5cGUiLCJwcm9jZXNzTXV0YXRpb25BdHRyaWJ1dGVzIiwicHJvY2Vzc011dGF0aW9uQ2hpbGRMaXN0IiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImN1cnJlbnRDbGFzc2VzIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic3BsaXQiLCJvbGRDbGFzc2VzIiwib2xkVmFsdWUiLCJhZGRlZENsYXNzZXMiLCJmaWx0ZXIiLCJ2YWwiLCJpbmRleE9mIiwicmVtb3ZlZENsYXNzZXMiLCJhZGRlZFJlZ2lzdGVyZWRDbGFzc2VzIiwicmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzIiwicmVtb3ZlSW5zdGFuY2UiLCJnZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzIiwiYWRkSW5zdGFuY2UiLCJub2Rlc0xpc3QiLCJhY3Rpb24iLCJjaGVja05vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5vZGVUeXBlIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RvcE9ic2VydmUiLCJkaXNjb25uZWN0IiwiYWxsb3dlZEV2ZW50cyIsIl9zdG9yYWdlIiwiX2FsbG93ZWRFdmVudHMiLCJvbiIsImNhbGxiYWNrIiwiZXZlbnRBcnIiLCJyZXBsYWNlIiwiZXZlbnQiLCJ3YXJuIiwicHVzaCIsInJlZ2lzdGVyQWN0aW9uIiwib2ZmIiwiYWxlcnQiLCJuIiwibCIsInBlcmZvcm1BY3Rpb24iLCJJbnN0YW5jZXNDb250cm9sbGVyIiwic3BpcmFsIiwiaW5zdGFuY2VzQ29uc3RydWN0b3JzIiwiY3NzQ2xhc3NlcyIsImpzQ29uc3RydWN0b3JzIiwiYWRkb25zIiwiY29yZSIsInJlZ2lzdGVySW5zdGFuY2VUeXBlIiwiY29uc3RydWN0b3JGdW5jdGlvbiIsImNzc0NsYXNzTmFtZSIsImlzU2tpcEluaXRpYWxpemF0aW9uIiwiaW5zdGFuY2VOYW1lIiwic3BpcmFsRnJhbWV3b3JrTmFtZSIsIm5vZGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJtYXgiLCJhZGRJbnN0YW5jZVR5cGUiLCJJbnN0YW5jZUNvbnN0cnVjdG9yIiwiaXNBbHJlYWR5QWRkZWQiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiaW5zdGFuY2VPYmoiLCJkaWUiLCJrZXkiLCJzcGxpY2UiLCJpc1JldHVybk9iamVjdCIsInR5cGVBcnIiLCJyZXQiLCJIVE1MRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0SW5zdGFuY2VzIiwicmVnaXN0ZXJBZGRvbiIsImFkZG9uIiwiYWRkb25UeXBlIiwiYWRkb25OYW1lIiwiZ2V0SW5zdGFuY2VBZGRvbiIsImNzc0NsYXNzIiwiZ2V0SW5zdGFuY2VDb25zdHJ1Y3RvcnMiLCJhamF4Iiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwiZGVsYXkiLCJiYXNlRXZlbnRzIiwidG9TdHJpbmciLCJpc0Fic29sdXRlIiwidGVzdCIsInNlbGYiLCJsb2NhdGlvbiIsImhyZWYiLCJvcmlnaW4iLCJ3aW5kb3ciLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImNoYXJBdCIsInJlbG9hZCIsImNsb3NlIiwiRE9NRXZlbnRzIiwiX0RPTUV2ZW50c1N0b3JhZ2UiLCJhZGQiLCJldmVudEFycmF5IiwidXNlQ2FwdHVyZSIsIkRPTU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiZXZlbnRGdW5jdGlvbiIsInJlbW92ZSIsInJlbW92ZUFsbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0IiwiZWxlbSIsInNlbGVjdG9ycyIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsInBhcmVudE5vZGUiLCJjbG9zZXN0QnlDbGFzc05hbWUiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInRvb2xzIiwicmVzb2x2ZUtleVBhdGgiLCJwYXRoIiwib2JqIiwic2FmZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwic2ZXcmFwcGVyIiwiaGVscGVycyIsImRvbU11dGF0aW9uIiwiY3NyZlRva2VuIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwiY3JlYXRlIiwiYmluZCIsImRvbVRvb2xzIiwiVHlwZUVycm9yIiwib3V0cHV0IiwiaW5kZXgiLCJuZXh0S2V5Iiwibm9vcCIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsMERBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDOztBQUNBOztBQUNBOztBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXJCLEMsQ0FFQTs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLHNDQUFELENBQXRCLEMsQ0FDQTs7QUFFQTs7Ozs7Ozs7OztBQVFBLE1BQU1FLElBQUksR0FBRyxVQUFVQyxPQUFWLEVB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cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzZlwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCdcbiAgXTtcblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzIpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbi8vIHZhciB0b29scyA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3Rvb2xzXCIpO1xuY29uc3QgRXZlbnRzID0gcmVxdWlyZSgnLi9FdmVudHMnKTtcbi8vIGNvbnN0IExpa2VGb3JtRGF0YSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvTGlrZUZvcm1EYXRhJyk7XG5cbi8qKlxuICogVGhpcyBpcyBhbiBBamF4IHRyYW5zcG9ydC5cbiAqIFN1cHBvcnRzICBYRG9tYWluUmVxdWVzdCBmb3Igb2xkIElFXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuaGVhZGVyc10gSGVhZGVycyB0byBhZGQgdG8gdGhlIGluc3RhbmNlXG4gKiBAZmlyZXMgYmVmb3JlU2VuZCBldmVudCB0aGF0IHdpbGwgYmUgcGVyZm9ybWVkIGJlZm9yZSByZXF1ZXN0IGlzIHNlbmQuIEV2ZW50IGNhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIgXCJvcHRpb25zXCIsIHRoYXQgY29udGFpbnMgYWxsIHZhcmlhYmxlcyBmb3IgQWpheFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEFqYXggPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB0aGlzLmN1cnJlbnRSZXF1ZXN0cyA9IDA7XG4gIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cyhbJ2JlZm9yZVNlbmQnLCAnbG9hZCddKTtcbiAgdGhpcy5jYW5jZWwgPSBudWxsO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycykge1xuICAgIHRoaXMuaGVhZGVycyA9IE9iamVjdC5hc3NpZ24odGhpcy5oZWFkZXJzLCBvcHRpb25zLmhlYWRlcnMpO1xuICB9XG59O1xuXG4vKipcbiAqIERlZmF1bHQgaGVhZGVycy4gWW91IGNhbiBvdmVyd3JpdGUgaXQuIExvb2sgYXQgdGhlIGV2ZW50IGJlZm9yZVNlbmRcbiAqIFBsZWFzZSBub3RlIHRoYXQgb24gWERvbWFpblJlcXVlc3QgIHdlIGNhbid0IHNlbmQgYW55IGhlYWRlcnMuXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuQWpheC5wcm90b3R5cGUuaGVhZGVycyA9IHtcbiAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxufTtcblxuLyoqXG4gKiBTZW5kIGFqYXggcmVxdWVzdCB0byBzZXJ2ZXJcbiAqIFdpbGwgcmV0dXJuIHByb21pc2Ugb3IgYXJyYXkgd2l0aCBwcm9taXNlIGFuZCBYTUxIdHRwUmVxdWVzdCA6IHt3aW5kb3cuUHJvbWlzZXxbd2luZG93LlByb21pc2UsWE1MSHR0cFJlcXVlc3RdfVxuICogQHNpbmNlIDAuNC4wXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy51cmwgdXJsIHRvIHNlbmQgZGF0YVxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbb3B0aW9ucy5kYXRhXSBkYXRhIHRvIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5tZXRob2RdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuaGVhZGVyc10gaGVhZGVycyB0byBhZGQgdG8gdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uUHJvZ3Jlc3NdIGNhbGxiYWNrIGZ1bmN0aW9uIG9uIHByb2dyZXNzLiBUd28gY2FsbGJhY2sgb3B0aW9uczogY3VycmVudCBieXRlcyBzZW50LHRvdGFsQnl0ZXNcbiAqIElmIHRyZWUgdGhlbiAgW3dpbmRvdy5Qcm9taXNlLCBYTUxIdHRwUmVxdWVzdCBdIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm4ge1Byb21pc2V8QXJyYXl9XG4gKi9cbkFqYXgucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAvLyBUT0RPIHdoeSB3ZSBjaGVjayBoZXJlIGlmIGRhdGEgPT09IG51bGwgdGhlbiByZWFzc2lnbiB0byBudWxsIGFnYWluP1xuICBpZiAob3B0aW9ucy5kYXRhID09PSBudWxsIHx8IG9wdGlvbnMuZGF0YSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zLmRhdGEgPSBudWxsO1xuICB9XG4gIGlmICghb3B0aW9ucy5tZXRob2QpIHtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgfVxuXG4gIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyA/IE9iamVjdC5hc3NpZ24ob3B0aW9ucy5oZWFkZXJzLCB0aGlzLmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycykgOiAoeyAuLi50aGlzLmhlYWRlcnMgfSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XG4gIGNvbnN0IGNhbmNlbFNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAvLyBgdXJsYCBpcyB0aGUgc2VydmVyIFVSTCB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAgICB1cmw6IG9wdGlvbnMudXJsLFxuXG4gICAgLy8gYG1ldGhvZGAgaXMgdGhlIHJlcXVlc3QgbWV0aG9kIHRvIGJlIHVzZWQgd2hlbiBtYWtpbmcgdGhlIHJlcXVlc3RcbiAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuXG4gICAgLy8gYGhlYWRlcnNgIGFyZSBjdXN0b20gaGVhZGVycyB0byBiZSBzZW50XG4gICAgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLFxuXG4gICAgLy8gYGRhdGFgIGlzIHRoZSBkYXRhIHRvIGJlIHNlbnQgYXMgdGhlIHJlcXVlc3QgYm9keVxuICAgIC8vIE9ubHkgYXBwbGljYWJsZSBmb3IgcmVxdWVzdCBtZXRob2RzICdQVVQnLCAnUE9TVCcsIGFuZCAnUEFUQ0gnXG4gICAgLy8gV2hlbiBubyBgdHJhbnNmb3JtUmVxdWVzdGAgaXMgc2V0LCBtdXN0IGJlIG9mIG9uZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICAgIC8vIC0gc3RyaW5nLCBwbGFpbiBvYmplY3QsIEFycmF5QnVmZmVyLCBBcnJheUJ1ZmZlclZpZXcsIFVSTFNlYXJjaFBhcmFtc1xuICAgIC8vIC0gQnJvd3NlciBvbmx5OiBGb3JtRGF0YSwgRmlsZSwgQmxvYlxuICAgIC8vIC0gTm9kZSBvbmx5OiBTdHJlYW0sIEJ1ZmZlclxuICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcblxuICAgIC8vIGBvblVwbG9hZFByb2dyZXNzYCBhbGxvd3MgaGFuZGxpbmcgb2YgcHJvZ3Jlc3MgZXZlbnRzIGZvciB1cGxvYWRzXG4gICAgb25VcGxvYWRQcm9ncmVzczogKHByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLm9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHByb2dyZXNzRXZlbnQubG9hZGVkLCBwcm9ncmVzc0V2ZW50LnRvdGFsKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gYGNhbmNlbFRva2VuYCBzcGVjaWZpZXMgYSBjYW5jZWwgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBjYW5jZWwgdGhlIHJlcXVlc3RcbiAgICAvLyAoc2VlIENhbmNlbGxhdGlvbiBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxzKVxuICAgIGNhbmNlbFRva2VuOiBjYW5jZWxTb3VyY2UudG9rZW4sXG4gIH07XG5cbiAgdGhpcy5jYW5jZWwgPSBjYW5jZWxTb3VyY2UuY2FuY2VsO1xuXG4gIGNvbnN0IHdyYXBFcnJvciA9IChlKSA9PiB7XG4gICAgZS5pc1NGQWpheEVycm9yID0gdHJ1ZTsgLy8gTWFya3MgZXJyb3IgdGhhdCBjYW4gaGF2ZSBub3JtYWwgZGF0YSBpbnNpZGVcbiAgICByZXR1cm4gZTtcbiAgfTtcblxuICBjb25zdCBhamF4UHJvbWlzZSA9IG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IC8vIFJldHVybiBhIG5ldyBwcm9taXNlLlxuICAgIGlmICghb3B0aW9ucy51cmwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBzaG91bGQgcHJvdmlkZSB1cmwnKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1lvdSBzaG91bGQgcHJvdmlkZSB1cmwnKSk7XG4gICAgfVxuICAgIHRoYXQuY3VycmVudFJlcXVlc3RzICs9IDE7XG4gICAgYXhpb3NcbiAgICAgIC5yZXF1ZXN0KGNvbmZpZylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGF0LmN1cnJlbnRSZXF1ZXN0cyAtPSAxO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMTk5ICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkgeyAvLyAyMDAtMjk5XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDM5OSAmJiByZXNwb25zZS5zdGF0dXMgPCA2MDApIHsgLy8gNDAwLTU5OVxuICAgICAgICAgICAgcmVqZWN0KHdyYXBFcnJvcihyZXNwb25zZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmtub3duIHN0YXR1cyAlZC4gUmVqZWN0aW5nJywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgIHJlamVjdCh3cmFwRXJyb3IocmVzcG9uc2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHdyYXBFcnJvcihyZXNwb25zZSkpOyAvLyByZWplY3Qgd2l0aCB0aGUgc3RhdHVzIHRleHRcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2xvYWQnLCBvcHRpb25zKTsgLy8gZm9yIGV4YW1wbGUgLSB1c2VkIHRvIGhhbmRsZSBhY3Rpb25zXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGF0LmN1cnJlbnRSZXF1ZXN0cyAtPSAxO1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICByZWplY3Qod3JhcEVycm9yKGVycm9yLnJlc3BvbnNlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pKTtcblxuICByZXR1cm4gYWpheFByb21pc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFqYXg7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi8gLy8gVE9ETzogP1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIFRoaXMgYSBiYXNlIGNvbnN0cnVjdG9yIChjbGFzcykgZm9yIGFueSBET00gYmFzZWQgaW5zdGFuY2UuXG4gKiBUaGlzIGNvbnN0cnVjdG9yIGp1c3QgZ3JhYiBhbGwgbm9kZSBhdHRyaWJ1dGVzIGFuZCBnZW5lcmF0ZXMgb3B0aW9ucy4gQWxsIHByb2Nlc3NlZCBvcHRpb25zIHN0b3JlZCBhdCB0aGlzLm9wdGlvbnNcbiAqIEBleGFtcGxlXG4gKiBXZSBoYXZlIGh0bWwgbGlrZSB0aGlzOlxuICogPGRpdiBkYXRhLXRlc3Q9XCJ0ZXN0VmFsdWVcIiBkYXRhLXZhbHVlPVwidmFsdWUxMjNcIj4uLi4uLjwvZGl2PlxuICogdGhpcy5vcHRpb25zIHdpbGwgYmU6XG4gKiB7XG4gKiAgdGVzdDpcInRlc3RWYWx1ZVwiLFxuICogIHZhbHVlOlwidmFsdWVcIlxuICogfVxuICogTm90ZTogZGF0YS10ZXN0IGFuZCBkYXRhLXZhbHVlIHNob3VsZCBiZSBkZXNjcmliZWQgaW4gYXR0cmlidXRlc1RvR3JhYlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEJhc2VET01Db25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHtcbn07XG4vKipcbiAqIEluaXQgbWV0aG9kLiBDYWxsIGFmdGVyIGNvbnN0cnVjdCBpbnN0YW5jZVxuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAgRG9tTm9kZSBvZiBmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIHRvIG92ZXJyaWRlIGRlZmF1bHRcbiAqL1xuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIC8vIFRPRE8gZGF0YS1zcGlyYWwtSlNPTlxuICB0aGlzLnNmID0gc2Y7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIC8vIGlmIChzZi5vcHRpb25zICYmIHNmLm9wdGlvbnMuaW5zdGFuY2VzICYmIHNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV0pIHtcbiAgLy8gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucyB8fCB7fSwgc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXSk7XG4gIC8vIH1cbiAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLmdyYWJPcHRpb25zKG5vZGUpLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBhIG9wdGlvbnMgdG8gZ2VuZXJhdGUuXG4gKiBZb3Ugc2hvdWxkIHByb3ZpZGUgcHJvY2Vzc29yIG9yIHZhbHVlLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwcm9wZXJ0eUtleSAtIG9iamVjdCBvZiBwcm9wZXJ0eVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHByb3BlcnR5S2V5LnZhbHVlIC0gZGVmYXVsdCB2YWx1ZSB0byByZXR1cm5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcHJvcGVydHlLZXkuZG9tQXR0cl0gLSBkb20gYXR0cmlidXRlIHRvIGdyYWIgZGF0YVxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gW3Byb3BlcnR5S2V5LnByb2Nlc3Nvcl0gLSAgcHJvY2Vzc29yIHRvIHByb2Nlc3MgZGF0YSBiZWZvcmUgcmV0dXJuXG4gKiBAcHJvcGVydHkge09iamVjdH0gIC4uLiAtIEFub3RoZXIgb2JqZWN0IG9mIG9uZSBwcm9wZXJ0eVxuICogQHR5cGUge3t9fVxuICogIEBleGFtcGxlXG4gKiBcInNvbWVBdHRyaWJ1dGVcIjogey8vIGtleVxuICogICAgICB2YWx1ZTogdHJ1ZSwgLy9kZWZhdWx0IFZhbHVlXG4gKiAgICAgIGRvbUF0dHI6IFwiZGF0YS1zb21lLWF0dHJpYnV0ZVwiLCAvLyBhdHRyaWJ1dGUgZnJvbSBub2RlIHRvIGdyYWJcbiAqICAgICAgcHJvY2Vzc29yOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikgeyAvL3Byb2Nlc3NvciB0byBwcm9jZXNzIHZhbHVlcyBiZWZvcmUgcmV0dXJuXG4gKiAgICAgICAgICAvL3NvbWUgY2FsY3VsYXRpb25zXG4gKiAgICAgIHJldHVybiBzb21lVmFsdWU7XG4gKiAgICAgIH1cbiAqICB9LFxuICogIFwiYW5vdGhlckF0dHJpYnV0ZVwiOnsuLi59LFxuICogIFwiLi4uXCJcbiAqXG4gKiAgQGV4YW1wbGVcbiAqICAvL3JldHVybiBub2RlIGFzIHZhbHVlXG4gKiAgXCJjb250ZXh0XCI6IHtcbiAqICAgICAgXCJwcm9jZXNzb3JcIjogZnVuY3Rpb24gKG5vZGUsdmFsLGtleSkgeyAvL3Byb2Nlc3NvclxuICogICAgICAgICAgcmV0dXJuIG5vZGU7XG4gKiAgICAgIH1cbiAqICB9LFxuICogIFwiQW5vdGhlci1rZXlcIjp7Li4ufSxcbiAqICBcIi4uLlwiXG4gKiBAZXhhbXBsZVxuICogLy9HcmFiIGF0dHJpYnV0ZSBcImRhdGEtYXR0cmlidXRlXCIgYXMgXCJNeUF0dHJpYnV0ZVwiIGlmIGF0dHJpYnV0ZSBub3QgcHJvdmlkZWQgcmV0dXJuIFwiRGVmYXVsdFZhbHVlXCJcbiAqIC8vIERvbSBub2RlIDxkaXYgZGF0YS1hdHRyaWJ1dGU9XCJzb21lVmFsdWVcIj48L2Rpdj5cbiAqIFwiTXlBdHRyaWJ1dGVcIjoge1xuICogICAgICB2YWx1ZTogXCJEZWZhdWx0VmFsdWVcIixcbiAqICAgICAgZG9tQXR0cjogXCJkYXRhLWF0dHJpYnV0ZVwiXG4gKiAgfVxuICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxuICogIHtcIk15QXR0cmlidXRlXCI6XCJzb21lVmFsdWVcIn1cbiAqXG4gKiAgQGV4YW1wbGVcbiAqIC8vR3JhYiBhdHRyaWJ1dGUgXCJkYXRhLWF0dHJpYnV0ZVwiIGFzIFwiTXlBdHRyaWJ1dGVcIiBhbmQgcmV0dXJuIHNvbWUgdmFsdWUgaW5zdGVhZFxuICogLy9Eb20gbm9kZSAgPGRpdiBkYXRhLWF0dHJpYnV0ZT1cInNvbWVWYWx1ZVwiPjwvZGl2PlxuICogXCJNeUF0dHJpYnV0ZVwiOiB7XG4gKiAgICAgIGRvbUF0dHI6IFwiZGF0YS1hdHRyaWJ1dGVcIixcbiAqICAgICAgcHJvY2Vzc29yOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikge1xuICogICAgICAgICAgcmV0dXJuIHZhbCtcIlNvbWVDYWxjdWxhdGlvblwiO1xuICogICAgICB9XG4gKiAgfVxuICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxuICogIHtcIk15QXR0cmlidXRlXCI6XCJzb21lVmFsdWVTb21lQ2FsY3VsYXRpb25cIn1cbiAqXG4gKiBAZXhhbXBsZVxuICogLy9yZXR1cm4gZnVuY3Rpb24gYXMgdmFsdWVcbiAqIHByb2Nlc3NBbnN3ZXI6IHtcbiAqICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XG4gKiAgICAgIH1cbiAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcbiAqICB7XCJwcm9jZXNzQW5zd2VyXCI6ZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAqICAgICAgICAgcmV0dXJuIFwic29tZVZhbFwiO1xuICogICAgICB9XG4gKiAgIH1cbiAqXG4gKiBAZXhhbXBsZVxuICogLy9yZXR1cm4gaW5pdCB0aW1lIGFzIHZhbHVlXG4gKiBpbml0VGltZToge1xuICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikge1xuICogICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lO1xuICogICAgICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wiaW5pdFRpbWVcIjoxNDI5ODA4OTc3NDA0fVxuICogQGV4YW1wbGVcbiAqIC8vcmV0dXJuIG90aGVyIHZhbHVlIGluc3RlYWQgb2YgcmVhbCBvbmVcbiAqIHByb2Nlc3NBbnN3ZXI6IHtcbiAqICAgICAgXCJwcm9jZXNzb3JcIjogZnVuY3Rpb24gKG5vZGUsdmFsLHNlbGYpIHtcbiAqICAgICAgICAgcmV0dXJuIFwic29tZVZhbFwiO1xuICogICAgICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wicHJvY2Vzc0Fuc3dlclwiOlwic29tZVZhbFwifVxuICovXG5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7fTtcblxuLyoqXG4gKiBHcmFiIGFsbCBvcHRpb25zIHRoYXQgZGVzY3JpYmVkIGluIG9wdGlvbnNUb0dyYWJcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIGRvbU5vZGVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZS5ncmFiT3B0aW9ucyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgbGV0IGN1cnJlbnRPcHRpb25WYWx1ZTtcbiAgbGV0IGN1cnJlbnRPcHRpb247XG4gIC8vIGZvciAoY29uc3Qgb3B0aW9uIGluIHRoaXMub3B0aW9uc1RvR3JhYikge1xuICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnNUb0dyYWIpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGlmICh0aGlzLm9wdGlvbnNUb0dyYWIuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNUb0dyYWIuaGFzT3duUHJvcGVydHkob3B0aW9uKSkgeyAvLyBpZiB0aGlzIGlzIG93biBvcHRpb25cbiAgICAgICAgY3VycmVudE9wdGlvbiA9IHRoaXMub3B0aW9uc1RvR3JhYltvcHRpb25dO1xuICAgICAgICBpZiAoY3VycmVudE9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkgeyAvLyB3ZSBoYXZlIGRlZmF1bHQgb3B0aW9uLiBMZXQncyBncmFiIGl0IGZvciBmaXJzdFxuICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IGN1cnJlbnRPcHRpb24udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdICYmIHRoaXMuc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXS5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdW29wdGlvbl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgnZG9tQXR0cicpICYmIG5vZGUuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50T3B0aW9uLmRvbUF0dHIpKSB7IC8vIHdlIGNhbiBncmFiIHRoZSBhdHRyaWJ1dGUgb2Ygbm9kZVxuICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IG5vZGUuYXR0cmlidXRlc1tjdXJyZW50T3B0aW9uLmRvbUF0dHJdLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb24uaGFzT3duUHJvcGVydHkoJ3Byb2Nlc3NvcicpKSB7IC8vIHdlIGhhdmUgcHJvY2Vzc29yLiBMZXQncyBleGVjdXRlIGl0XG4gICAgICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gY3VycmVudE9wdGlvbi5wcm9jZXNzb3IuY2FsbCh0aGlzLCBub2RlLCBjdXJyZW50T3B0aW9uVmFsdWUsIGN1cnJlbnRPcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IGN1cnJlbnRPcHRpb25WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcHRpb25zO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlRE9NQ29uc3RydWN0b3I7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogRG9tIG11dGF0aW9uLiBMaXN0ZW5pbmcgdG8gdGhlIERPTSBhbmQgYWRkIG9yIHJlbW92ZSBpbnN0YW5jZXMgYmFzZWQgb24gY2xhc3Nlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZXNDb250cm9sbGVyICBzcGlyYWwgaW5zdGFuY2VzQ29udHJvbGxlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0Q2xhc3NlcyAgZ2V0IGFsbCByZWdpc3RlcmVkIG1vZHVsZXMgY2xhc3Nlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGluc3RhbmNlc0NvbnRyb2xsZXIuYWRkSW5zdGFuY2UgIGFkZCBpbnN0YW5jZSBtZXRob2QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnN0YW5jZXNDb250cm9sbGVyLnJlbW92ZUluc3RhbmNlICByZW1vdmUgaW5zdGFuY2UgbWV0aG9kXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgRG9tTXV0YXRpb25zID0gZnVuY3Rpb24gKGluc3RhbmNlc0NvbnRyb2xsZXIpIHtcbiAgaWYgKCFpbnN0YW5jZXNDb250cm9sbGVyKSB7XG4gICAgY29uc29sZS5lcnJvcignWW91IHNob3VsZCBwcm92aWRlIGluc3RhbmNlc0NvbnRyb2xsZXIgIGZvciBET00gTXV0YXRpb24uIEJlY2F1c2UgRE9NIE11dGF0aW9uICBzaG91bGQga25vd24gYWxsIGNsYXNzZXMgYW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgY2FsbCBEb21NdXRhdGlvbnMgd2l0aCBuZXcgIC0gJ25ldyBEb21NdXRhdGlvbnMoKScgXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIgPSBpbnN0YW5jZXNDb250cm9sbGVyO1xuICBjb25zdCBjb25maWcgPSB7IC8vIGNvbmZpZyBmb3IgTXV0YXRpb25PYnNlcnZlclxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWUsXG4gICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10sXG4gIH07XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IC8vIGNhbGwgZnVuY3Rpb24gd2hlbiBkb20gbXV0YXRlZC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdGhhdC5vbkRvbU11dGF0ZS5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xyXG4gIH0pO1xuICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIGNvbmZpZyk7Ly8gc3RhcnQgb2JzZXJ2ZXJcbn07XG5cbi8qKlxuICogV2hlbiBkb20gbXV0YXRlZCB0aGlzIGZ1bmN0aW9uIGlkIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtBcnJheX0gbXV0YXRpb25zIGFycmF5IG9mIG11dGF0aW9uc1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuRG9tTXV0YXRpb25zLnByb3RvdHlwZS5vbkRvbU11dGF0ZSA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgY29uc3QgY2xhc3NBcnJheSA9IHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRDbGFzc2VzKCk7Ly8gZ2V0IGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcbiAgY29uc3QgY2xhc3NTZWxlY3RvciA9IGAuJHtjbGFzc0FycmF5LmpvaW4oJywuJyl9YDsvLyBjb252ZXJ0IGZvciBxdWVyeVNlbGVjdG9yQWxsKClcbiAgaWYgKGNsYXNzU2VsZWN0b3IubGVuZ3RoID09PSAxKSB7IC8vIGlmIG5vdCByZWdpc3RlcmVkIGFueSBpbnN0YW5jZVR5cGVzXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikgeyAvLyBsb29wIG92ZXIgbXV0YXRpb24gYXJyYXlcbiAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICB0aGlzLnByb2Nlc3NNdXRhdGlvbkF0dHJpYnV0ZXMobXV0YXRpb24sIGNsYXNzQXJyYXkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hhcmFjdGVyRGF0YSc6XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uQ2hpbGRMaXN0KG11dGF0aW9uLmFkZGVkTm9kZXMsICdhZGRJbnN0YW5jZScsIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpO1xuICAgICAgICB0aGlzLnByb2Nlc3NNdXRhdGlvbkNoaWxkTGlzdChtdXRhdGlvbi5yZW1vdmVkTm9kZXMsICdyZW1vdmVJbnN0YW5jZScsIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgd3JvbmcuIENvbnRhY3QgdGVjaCBzdXBwb3J0Jyk7XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbkRvbU11dGF0aW9ucy5wcm90b3R5cGUucHJvY2Vzc011dGF0aW9uQXR0cmlidXRlcyA9IGZ1bmN0aW9uIChtdXRhdGlvbiwgY2xhc3NBcnJheSkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgY29uc3QgY3VycmVudENsYXNzZXMgPSBtdXRhdGlvbi50YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gIGNvbnN0IG9sZENsYXNzZXMgPSAobXV0YXRpb24ub2xkVmFsdWUpID8gbXV0YXRpb24ub2xkVmFsdWUuc3BsaXQoJyAnKSA6IFtdO1xuICBjb25zdCBhZGRlZENsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5maWx0ZXIoKHZhbCkgPT4gKG9sZENsYXNzZXMuaW5kZXhPZih2YWwpID09PSAtMSkpO1xuICBjb25zdCByZW1vdmVkQ2xhc3NlcyA9IG9sZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKHZhbCkgPT09IC0xKSk7XG4gIGNvbnN0IGFkZGVkUmVnaXN0ZXJlZENsYXNzZXMgPSBhZGRlZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjbGFzc0FycmF5LmluZGV4T2YodmFsKSAhPT0gLTEpKTtcbiAgY29uc3QgcmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzID0gcmVtb3ZlZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjbGFzc0FycmF5LmluZGV4T2YodmFsKSAhPT0gLTEpKTtcbiAgcmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgIHRoYXQuaW5zdGFuY2VzQ29udHJvbGxlci5yZW1vdmVJbnN0YW5jZSh0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyh2YWwpLCBtdXRhdGlvbi50YXJnZXQpO1xuICB9KTtcbiAgYWRkZWRSZWdpc3RlcmVkQ2xhc3Nlcy5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICB0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIuYWRkSW5zdGFuY2UodGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3ModmFsKSwgbXV0YXRpb24udGFyZ2V0KTtcbiAgfSk7XG59O1xuLyoqXG4gKiBQcm9jZXNzIG11dGF0aW9uIG9uIENoaWxkTGlzdFxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNMaXN0IGFycmF5IHdpdGggbm9kZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb24gYWN0aW9uIHRvIGNhbGwgKGFkZCBvciByZW1vdmUgbm9kZXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NTZWxlY3RvciAtIHN0cmluZyBzZWxlY3RvciBmb3IgcXVlcnlTZWxlY3RvckFsbFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NBcnJheSAtIGFycmF5IG9mIGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcbiAqL1xuRG9tTXV0YXRpb25zLnByb3RvdHlwZS5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QgPSBmdW5jdGlvbiAobm9kZXNMaXN0LCBhY3Rpb24sIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNoZWNraW5nIG5vZGUgY2xhc3NcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSBkb20gbm9kZVxuICAgICAqL1xuICBmdW5jdGlvbiBjaGVja05vZGUobm9kZSkge1xuICAgIGNsYXNzQXJyYXkuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7IC8vIGxvb3Agb3ZlciByZWdpc3RlcmVkIGNsYXNzZXNcbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7IC8vIGlmIGNsYXNzIG1hdGNoIHRyeSB0byBhZGQgb3IgcmVtb3ZlIGluc3RhbmNlIGZvciB0aGlzIG5vZGVcbiAgICAgICAgdGhhdC5pbnN0YW5jZXNDb250cm9sbGVyW2FjdGlvbl0odGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3MoY2xhc3NOYW1lKSwgbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBbXS5mb3JFYWNoLmNhbGwobm9kZXNMaXN0LCAodmFsKSA9PiB7IC8vIGxvb3Agb3ZlciBtdXRhdGlvbiBub2Rlc1xuICAgIGlmICh2YWwubm9kZVR5cGUgIT09IDEgfHwgdmFsLm5vZGVOYW1lID09PSAnU0NSSVBUJyB8fCB2YWwubm9kZU5hbWUgPT09ICdMSU5LJykgeyAvLyBkbyBub3QgcHJvY2VzcyBvdGhlciBub2RlcyB0aGVuIEVMRU1FTlRfTk9ERSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS5ub2RlVHlwZSBhbHNvIGlnbm9yZSBTQ1JJUFQgYW5kIExJTksgdGFnXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrTm9kZSh2YWwpOy8vIGNoZWNrIG11dGF0aW9uIG5vZGVcbiAgICBbXS5mb3JFYWNoLmNhbGwodmFsLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NTZWxlY3RvciksIGNoZWNrTm9kZSk7Ly8gcXVlcnkgYWxsIG5vZGVzIHdpdGggcmVxdWlyZWQgY2xhc3NlcyBhbmQgY2hlY2sgaXRcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFN0b3AgbGlzdGVuaW5nIHRoZSBkb20gY2hhbmdlc1xuICovXG5Eb21NdXRhdGlvbnMucHJvdG90eXBlLnN0b3BPYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG9tTXV0YXRpb25zO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBFdmVudHMgc3lzdGVtLlxuICogQHBhcmFtIHtBcnJheX0gYWxsb3dlZEV2ZW50cyBhcnJheSBvZiBhbGxvd2VkIGV2ZW50cy5cbiAqIEBjb25zdHJ1Y3RzIEV2ZW50c1xuICogQGV4YW1wbGVcbiAqIC8vYWxsb3cgdG8gd29yayB3aXRoIGFsbCBldmVudHNcbiAqIHZhciBldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gKiBldmVudHMub24oXCJteUJlc3RFdmVudFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKiBAZXhhbXBsZVxuICogLy9BbGxvdyB0byBzZXJ2ZSBvbmx5IGxpbWl0ZWQgZXZlbnRzXG4gKiAgdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoW1wiYmVmb3JlU3VibWl0XCIsXCJvbkRhdGFSZWFkeVwiXSk7XG4gKiAgZXZlbnRzLm9uKFwibXlCZXN0RXZlbnRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pOy8vd2lsbCBub3Qgd29ya3NcbiAqICBldmVudHMub24oXCJiZWZvcmVTdWJtaXRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pOy8vd2lsbCB3b3JrXG4gKi9cbmNvbnN0IEV2ZW50cyA9IGZ1bmN0aW9uIChhbGxvd2VkRXZlbnRzKSB7XG4gIHRoaXMuX3N0b3JhZ2UgPSB7fTtcbiAgdGhpcy5fYWxsb3dlZEV2ZW50cyA9IGFsbG93ZWRFdmVudHM7XG59O1xuXG4vKipcbiAqIEFkZCBldmVudChzKVxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50cyBldmVudCBvciBzcGFjZSBzZXBhcmF0ZWQgZXZlbnQgbGlzdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICogZXZlbnRzLm9uKFwibXlCZXN0RXZlbnQgbXlCZXN0RXZlbnQyIG15QmVzdEV2ZW50M1wiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKiBldmVudHMub24oXCJteUJlc3RFdmVudFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKi9cbkV2ZW50cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnRzLCBjYWxsYmFjaykge1xuICBjb25zdCBldmVudEFyciA9IGV2ZW50cy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykuc3BsaXQoJyAnKTtcbiAgZXZlbnRBcnIuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXG4gICAgaWYgKHRoaXMuX2FsbG93ZWRFdmVudHMgJiYgdGhpcy5fYWxsb3dlZEV2ZW50cy5pbmRleE9mKGV2ZW50KSA9PT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybignRXZlbnRzLiBUcnkgdG8gcmVnaXN0ZXIgZXZlbnQgJXMsIGJ1dCBldmVudCBpcyBub3QgYWxsb3dlZCcsIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghdGhpcy5fc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShldmVudHMpKSB7XG4gICAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgfSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIEFkZCBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAqIEBkZXByZWNhdGVkICB1c2UgXCJvblwiIGluc3RlYWRcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS5yZWdpc3RlckFjdGlvbiA9IEV2ZW50cy5wcm90b3R5cGUub247XG5cblxuLyoqXG4gKiByZW1vdmUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICBhbGVydCgnWW91IHRyeSB0byByZW1vdmUgYWN0aW9uLiBUaGlzIHBhcnQgaXMgaW5jb21wbGV0ZScpO1xuICAvLyBUT0RPXG59O1xuXG4vKipcbiAqIFRyaWdnZXIgZXZlbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgZXZlbnQgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrXG4gKiBAZXhhbXBsZVxuICogdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAqIGV2ZW50cy5vbihcIm15QmVzdEV2ZW50XCIsZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZS5iZXN0S2V5KX0pO1xuICogZXZlbnRzLnRyaWdnZXIoXCJteUJlc3RFdmVudFwiLHtiZXN0S2V5OjQyfSk7IC8vd2lsbCBzaG93IGluIGxvZ1xuICovXG5FdmVudHMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQsIG9wdGlvbnMpIHtcbiAgLy8gZXZlbnQgbm90IGluc2lkZSBhbGxvd2VkIGV2ZW50c1xuICBpZiAodGhpcy5fYWxsb3dlZEV2ZW50cyAmJiB0aGlzLl9hbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xuICAgIGNvbnNvbGUud2FybignRXZlbnRzLiBUcnkgdG8gdHJpZ2dlciBldmVudCAlcywgYnV0IGV2ZW50IGlzIG5vdCBhbGxvd2VkJywgZXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmICh0aGlzLl9zdG9yYWdlLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgIGZvciAobGV0IG4gPSAwLCBsID0gdGhpcy5fc3RvcmFnZVtldmVudF0ubGVuZ3RoOyBuIDwgbDsgbiArPSAxKSB7XG4gICAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XVtuXShvcHRpb25zKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUGVyZm9ybSBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYWN0aW9uUGFyYW1zXSBvYmplY3Qgd2l0aCBhbGwgYWN0aW9uIGRhdGEgZnJvbSBzZXJ2ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWpheCBvcHRpb25zXG4gKiBAZGVwcmVjYXRlZCB1c2UgXCJ0cmlnZ2VyXCIgaW5zdGVhZFxuICovXG5FdmVudHMucHJvdG90eXBlLnBlcmZvcm1BY3Rpb24gPSBFdmVudHMucHJvdG90eXBlLnRyaWdnZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovIC8vIFRPRE86ID9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIEluc3RhbmNlIGNvbnRyb2xsZXJcbiAqIEBwYXJhbSB7Kn0gc3BpcmFsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgSW5zdGFuY2VzQ29udHJvbGxlciA9IGZ1bmN0aW9uIChzcGlyYWwpIHtcbiAgdGhpcy5zcGlyYWwgPSBzcGlyYWw7XG4gIGlmICghdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgY2FsbCBJbnN0YW5jZXNDb250cm9sbGVyIHdpdGggbmV3ICAtICduZXcgSW5zdGFuY2VzQ29udHJvbGxlcigpJyBcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuX3N0b3JhZ2UgPSB7XG4gICAgaW5zdGFuY2VzQ29uc3RydWN0b3JzOiB7XG4gICAgICBjc3NDbGFzc2VzOiB7fSxcbiAgICAgIGpzQ29uc3RydWN0b3JzOiB7fSxcbiAgICB9LFxuICAgIGFkZG9uczoge30sXG4gICAgaW5zdGFuY2VzOiB7fSxcbiAgfTtcblxuICB0aGlzLmV2ZW50cyA9IG5ldyBzcGlyYWwuY29yZS5FdmVudHMoWydvblJlbW92ZUluc3RhbmNlJywgJ29uQWRkSW5zdGFuY2UnXSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIG5ldyBpbnN0YW5jZSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvckZ1bmN0aW9uIC0gY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBbY3NzQ2xhc3NOYW1lXSAtIGNzcyBjbGFzcyBuYW1lIG9mIGluc3RhbmNlLiBJZiBjbGFzcyBub3QgcHJvdmlkZWQgdGhhdCBpdCBjYW4ndCBiZSBhdXRvbWF0aWNhbGx5XG4gKiBjb250cm9sbGVkIGJ5IERvbU11dGF0aW9uLiBCdXQgeW91IHN0aWxsIGNhbiB1c2UgaXQgZnJvbSBKUy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzU2tpcEluaXRpYWxpemF0aW9uPWZhbHNlXSAgLSBza2lwIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiwganVzdCBhZGRpbmcsIG5vIGluaXQgbm9kZXMuXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlZ2lzdGVySW5zdGFuY2VUeXBlID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGNzc0NsYXNzTmFtZSwgaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcbiAgY29uc3QgaW5zdGFuY2VOYW1lID0gY29uc3RydWN0b3JGdW5jdGlvbi5zcGlyYWxGcmFtZXdvcmtOYW1lIHx8IGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWU7XG5cbiAgaWYgKCFpbnN0YW5jZU5hbWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbnN0YW5jZSBjb25zdHJ1Y3RvciBzaG91bGQgaGF2ZSBuYW1lIGluc2lkZSBpdCcpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAodGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnMuaGFzT3duUHJvcGVydHkoaW5zdGFuY2VOYW1lKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnN0YW5jZSBDb25zdHJ1Y3RvciBmb3IgdHlwZSAnJXMnIGFscmVhZHkgYWRkZWQuIFNraXBwaW5nXCIsIGluc3RhbmNlTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNzc0NsYXNzTmFtZSkgeyAvLyBhZGQgbGluayAoY3NzQ2xhc3NOYW1lLT5pbnN0YW5jZU5hbWUpXG4gICAgdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlc1tjc3NDbGFzc05hbWVdID0gaW5zdGFuY2VOYW1lO1xuICB9XG5cbiAgdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXSA9IGNvbnN0cnVjdG9yRnVuY3Rpb247XG5cbiAgLy8gaWYgKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KGNsYXNzTmFtZSkpe1xuICAvLyAgICBjb25zb2xlLmVycm9yKFwiSW5zdGFuY2UgQ29uc3RydWN0b3IgZm9yIHR5cGUgJXMgYWxyZWFkeSBhZGRlZC4gU2tpcHBpbmdcIixjb25zdHJ1Y3RvckZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lKTtcbiAgLy8gICAgcmV0dXJuO1xuICAvLyB9XG4gIC8vIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzW2NsYXNzTmFtZV0gPSB7Ly9pbml0IHN0b3JhZ2UgZmllbGRzXG4gIC8vICAgIFwidHlwZU5hbWVcIjogY29uc3RydWN0b3JGdW5jdGlvbi5wcm90b3R5cGUubmFtZSxcbiAgLy8gICAgXCJjb25zdHJ1Y3RvclwiOiBjb25zdHJ1Y3RvckZ1bmN0aW9uXG4gIC8vIH07XG4gIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0gPSBbXTtcbiAgaWYgKCFpc1NraXBJbml0aWFsaXphdGlvbikge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjc3NDbGFzc05hbWUpOy8vIGluaXQgYWRkIG5vZGVzIHdpdGggdGhpcyBjbGFzc1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5hZGRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGVzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogT2xkIG1ldGhvZCB0byByZWdpc3RlciBpbnN0YW5jZSB0eXBlXG4gKiBAcGFyYW0geyp9IGNsYXNzTmFtZVxuICogQHBhcmFtIHsqfSBjb25zdHJ1Y3RvckZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IGlzU2tpcEluaXRpYWxpemF0aW9uXG4gKiBAcmV0dXJuIHsqfVxuICogQGRlcHJlY2F0ZWRcbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuYWRkSW5zdGFuY2VUeXBlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgY29uc3RydWN0b3JGdW5jdGlvbiwgaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcbiAgY29uc29sZS53YXJuKCdhZGRJbnN0YW5jZVR5cGUgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSByZWdpc3Rlckluc3RhbmNlVHlwZSBpbnN0ZWFkJyk7XG4gIHJldHVybiB0aGlzLnJlZ2lzdGVySW5zdGFuY2VUeXBlKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGlzU2tpcEluaXRpYWxpemF0aW9uKTtcbn07XG5cblxuLyoqXG4gKiBBZGQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAtIGRvbSBub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIGZvciBzZW5kIHRvIHRoZSBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lLCBub2RlLCBvcHRpb25zKSB7XG4gIGNvbnN0IEluc3RhbmNlQ29uc3RydWN0b3IgPSB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5qc0NvbnN0cnVjdG9yc1tpbnN0YW5jZU5hbWVdO1xuICBjb25zdCBpc0FscmVhZHlBZGRlZCA9IHRoaXMuZ2V0SW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlKTtcblxuICBpZiAoIUluc3RhbmNlQ29uc3RydWN0b3IgfHwgaXNBbHJlYWR5QWRkZWQpIHsgLy8gaWYgbm90IGZvdW5kIHRoaXMgdHlwZSAgb3IgYWxyZWFkeSBhZGRlZCAtIHJldHVyblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IEluc3RhbmNlQ29uc3RydWN0b3IodGhpcy5zcGlyYWwsIG5vZGUsIG9wdGlvbnMpO1xuICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdLnB1c2goeyAvLyBhZGQgbmV3IGluc3RhbmNlIG9mIHRoaXMgdHlwZVxuICAgIG5vZGUsXG4gICAgaW5zdGFuY2UsXG4gIH0pO1xuXG4gIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ29uQWRkSW5zdGFuY2UnLCB7IGluc3RhbmNlLCB0eXBlOiBpbnN0YW5jZU5hbWUgfSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZSBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBub2RlIC0gZG9tIG5vZGUgSURcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSwgbm9kZSkge1xuICBjb25zdCBpbnN0YW5jZU9iaiA9IHRoaXMuZ2V0SW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlLCB0cnVlKTtcblxuICBpZiAoIWluc3RhbmNlT2JqKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGluc3RhbmNlT2JqLmluc3RhbmNlLmRpZSgpOy8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGNvbnN0IGtleSA9IHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0uaW5kZXhPZihpbnN0YW5jZU9iaik7XG4gIGlmIChrZXkgIT09IC0xKSB7IC8vIHJlbW92ZSBrZXlcbiAgICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdLnNwbGljZShrZXksIDEpO1xuICB9XG4gIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ29uUmVtb3ZlSW5zdGFuY2UnLCB7IGluc3RhbmNlOiBpbnN0YW5jZU9iaiwgdHlwZTogaW5zdGFuY2VOYW1lIH0pO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogR2V0IGluc3RhbmNlLiBSZXR1cm4gaW5zdGFuY2Ugb2JqZWN0IG9mIHRoaXMgZG9tIG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5vZGUgLSBkb20gbm9kZSBvIGRvbWUgbm9kZSBJRFxuICogQHBhcmFtIHtib29sZWFufSBbaXNSZXR1cm5PYmplY3RdIC0gcmV0dXJuIG9iamVjdCBvciBpbnN0YW5jZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lLCBub2RlLCBpc1JldHVybk9iamVjdCkge1xuICAvLyBUT0RPIGlzUmV0dXJuT2JqZWN0IG5vdCBuZWVkZWQuIFJlZmFjdG9yIGFuZCByZW1vdmVcblxuICBjb25zdCB0eXBlQXJyID0gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXTtcbiAgbGV0IHJldCA9IGZhbHNlO1xuICBpZiAoIXR5cGVBcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbm9kZSA9IChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpID8gbm9kZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5vZGUpO1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQga2V5ID0gMCwgbCA9IHR5cGVBcnIubGVuZ3RoOyBrZXkgPCBsOyBrZXkgKz0gMSkgeyAvLyBpdGVyYXRlIHN0b3JhZ2UgYW5kIHRyeSB0byBmaW5kIGluc3RhbmNlXG4gICAgaWYgKHR5cGVBcnJba2V5XS5ub2RlID09PSBub2RlKSB7XG4gICAgICByZXQgPSAoaXNSZXR1cm5PYmplY3QpID8gdHlwZUFycltrZXldIDogdHlwZUFycltrZXldLmluc3RhbmNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG4vKipcbiAqIEdldCBpbnN0YW5jZXMuIFJldHVybiBhcnJheSBvZiBpbnN0YW5jZXMgb2JqZWN0c1xuICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSAtIG5hbWUgb2YgaW5zdGFuY2VcbiAqIEByZXR1cm4ge2FycmF5fGJvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEluc3RhbmNlcyA9IGZ1bmN0aW9uIChpbnN0YW5jZU5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0gfHwgZmFsc2U7XG59O1xuXG5cbi8qKlxuICogUmVnaXN0ZXIgYWRkb24gZm9yIGluc3RhbmNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWRkb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgbmFtZSBvZiBpbnN0YW5jZSB0byByZWdpc3RlciBhZGRvblxuICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uVHlwZSB0eXBlIG9mIGFkZG9uIChtZXNzYWdlLGZpbGwsZXRjKVxuICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uTmFtZSBuYW1lIG9mIGFkZG9uIChzcGlyYWwsIGJvb3RzdHJhcCxldGMpXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlZ2lzdGVyQWRkb24gPSBmdW5jdGlvbiAoYWRkb24sIGluc3RhbmNlTmFtZSwgYWRkb25UeXBlLCBhZGRvbk5hbWUpIHtcbiAgaWYgKCF0aGlzLl9zdG9yYWdlLmFkZG9ucy5oYXNPd25Qcm9wZXJ0eShpbnN0YW5jZU5hbWUpKSB7XG4gICAgdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXSA9IHt9O1xuICB9XG4gIGlmICghdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXS5oYXNPd25Qcm9wZXJ0eShhZGRvblR5cGUpKSB7XG4gICAgdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdID0ge307XG4gIH1cbiAgaWYgKHRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXS5oYXNPd25Qcm9wZXJ0eShhZGRvbk5hbWUpKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlICVzIGFkZG9uIHR5cGUgJXMgYWxyZWFkeSByZWdpc3RlcmVkIGZvciBpbnN0YW5jZSAlcyEgU2tpcHBpbmcgcmVnaXN0cmF0aW9uLicsIGFkZG9uTmFtZSwgYWRkb25UeXBlLCBpbnN0YW5jZU5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV1bYWRkb25OYW1lXSA9IGFkZG9uO1xufTtcblxuLyoqXG4gKiBHZXQgcmVnaXN0ZXJlZCBhZGRvblxuICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSBuYW1lIG9mIGluc3RhbmNlIHRvIHJlZ2lzdGVyIGFkZG9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkb25UeXBlIHR5cGUgb2YgYWRkb24gKG1lc3NhZ2UsZmlsbCxldGMpXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkb25OYW1lIG5hbWUgb2YgYWRkb24gKHNwaXJhbCwgYm9vdHN0cmFwLGV0YylcbiAqIEByZXR1cm4geyp9XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEluc3RhbmNlQWRkb24gPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lLCBhZGRvblR5cGUsIGFkZG9uTmFtZSkge1xuICBpZiAoIXRoaXMuX3N0b3JhZ2UuYWRkb25zLmhhc093blByb3BlcnR5KGluc3RhbmNlTmFtZSlcbiAgICAgICAgfHwgIXRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV0uaGFzT3duUHJvcGVydHkoYWRkb25UeXBlKVxuICAgICAgICB8fCAhdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdLmhhc093blByb3BlcnR5KGFkZG9uTmFtZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXVthZGRvbk5hbWVdO1xufTtcblxuXG4vKipcbiAqIEdldCBhbGwgcmVnaXN0ZXJlZCBjbGFzc2VzXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q2xhc3NlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmNzc0NsYXNzZXMpO1xufTtcblxuLyoqXG4gKiBGb3IgZ2l2ZW4gY3NzQ2xhc3MgcmV0dXJuIG5hbWUgb2YgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBjc3NDbGFzc1xuICogQHJldHVybiB7Kn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyA9IGZ1bmN0aW9uIChjc3NDbGFzcykge1xuICByZXR1cm4gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlc1tjc3NDbGFzc107XG59O1xuXG4vKipcbiAqIEdldCBjb25zdHJ1Y3RvciBieSBuYW1lIG9yIGNsYXNzIG5hbWVcbiAqIEBwYXJhbSB7Kn0gbmFtZVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZUNvbnN0cnVjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVE9ET1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnN0YW5jZXNDb250cm9sbGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIFRoaXMgcGx1Z2luIGFkZHMgYWJpbGl0eSB0byBwZXJmb3JtIGFjdGlvbnMgZnJvbSB0aGUgc2VydmVyLlxuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBcImFjdGlvblwiOlwicmVsb2FkXCJcbiAqIFwiYWN0aW9uXCI6e1wicmVkaXJlY3RcIjpcIi9hY2NvdW50XCJ9XG4gKiBcImFjdGlvblwiOntcInJlZGlyZWN0XCI6XCIvYWNjb3VudFwiLFwiZGVsYXlcIjozMDAwfVxuICogXCJhY3Rpb25cIjp7XCJuYW1lXCI6XCJyZWRpcmVjdFwiLFwidXJsXCI6XCIvYWNjb3VudFwiLFwiZGVsYXlcIjozMDAwfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZikge1xuICBzZi5hamF4LmV2ZW50cy5vbignbG9hZCcsIChvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgeyByZXNwb25zZSB9ID0gb3B0aW9ucztcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5kYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgIGlmICghZGF0YS5hY3Rpb24pIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgZGF0YS5hY3Rpb24gPT09ICdzdHJpbmcnKSB7IC8vIFwiYWN0aW9uXCI6XCJyZWxvYWRcIlxuICAgICAgc2YuZXZlbnRzLnRyaWdnZXIoZGF0YS5hY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEuYWN0aW9uKTtcbiAgICAgIC8vIFRPRE86IG5vdGlmaWNhdGlvbnNcbiAgICAgIC8vIGlmIChrZXlzLmluZGV4T2YoJ2ZsYXNoJykgIT09IC0xKSB7XG4gICAgICAvLyAgIGNvbnN0IHsgZmxhc2ggfSA9IGRhdGEuYWN0aW9uO1xuICAgICAgLy8gICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgLy8gICBsZXQgc2ZGbGFzaE1lc3NhZ2UgPSB7fTtcblxuICAgICAgLy8gICBpZiAodHlwZW9mIGRhdGEuYWN0aW9uLmZsYXNoID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gICAgIHNmRmxhc2hNZXNzYWdlID0gZmxhc2g7XG4gICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UudGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIHNmRmxhc2hNZXNzYWdlID0ge1xuICAgICAgLy8gICAgICAgbWVzc2FnZTogZmxhc2gsXG4gICAgICAvLyAgICAgICB0aW1lc3RhbXAsXG4gICAgICAvLyAgICAgfTtcbiAgICAgIC8vICAgfVxuXG4gICAgICAvLyAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NmRmxhc2hNZXNzYWdlJywgSlNPTi5zdHJpbmdpZnkoc2ZGbGFzaE1lc3NhZ2UpKTtcbiAgICAgIC8vIH1cblxuICAgICAgaWYgKGtleXMuaW5kZXhPZigncmVkaXJlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2YuZXZlbnRzLnRyaWdnZXIoJ3JlZGlyZWN0JywgZGF0YS5hY3Rpb24ucmVkaXJlY3QsIG9wdGlvbnMpO1xuICAgICAgICB9LCArZGF0YS5hY3Rpb24uZGVsYXkgfHwgMCk7XG4gICAgICB9IGVsc2UgaWYgKGtleXMuaW5kZXhPZignbmFtZScpICE9PSAtMSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZi5ldmVudHMudHJpZ2dlcihkYXRhLmFjdGlvbi5uYW1lLCBkYXRhLmFjdGlvbi51cmwpO1xuICAgICAgICB9LCArZGF0YS5hY3Rpb24uZGVsYXkgfHwgMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FjdGlvbiBmcm9tIHNlcnZlci4gU29tZXRoaW5nIHdyb25nLiAnLCBkYXRhLmFjdGlvbik7XG4gICAgfVxuICB9KTtcblxuICAvLyAoZnVuY3Rpb24gKHNmRmxhc2hNZXNzYWdlKSB7XG4gIC8vICAgaWYgKCFzZkZsYXNoTWVzc2FnZSkgcmV0dXJuO1xuXG4gIC8vICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2Uoc2ZGbGFzaE1lc3NhZ2UpO1xuICAvLyAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gIC8vICAgbGV0IGZsYXNoQ2xhc3M7XG5cbiAgLy8gICBpZiAodGltZXN0YW1wIC0gbWVzc2FnZS50aW1lc3RhbXAgPiAxMDAwMCkgcmV0dXJuO1xuXG4gIC8vICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2RlYnVnJyB8fCBtZXNzYWdlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAvLyAgICAgZmxhc2hDbGFzcyA9ICdkZWJ1Zyc7XG4gIC8vICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdpbmZvJyB8fCAhbWVzc2FnZS50eXBlIHx8IG1lc3NhZ2UudHlwZSA9PT0gJ25vdGljZScpIHtcbiAgLy8gICAgIGZsYXNoQ2xhc3MgPSAnaW5mbyc7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGZsYXNoQ2xhc3MgPSAnZGFuZ2VyJztcbiAgLy8gICB9XG5cbiAgLy8gICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgY29uc3Qgbm9kZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gICBub2RlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmbGFzaC13cmFwcGVyJyk7XG4gIC8vICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdmbGFzaCcsIGZsYXNoQ2xhc3MpO1xuICAvLyAgIG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZS5tZXNzYWdlO1xuICAvLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZVdyYXBwZXIpO1xuICAvLyAgIG5vZGVXcmFwcGVyLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICBub2RlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIC8vICAgfSwgMSk7XG5cbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIG5vZGVXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgLy8gICB9LCBtZXNzYWdlLnRpbWVvdXQgfHwgNTAwMCk7XG5cbiAgLy8gICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzZkZsYXNoTWVzc2FnZScpO1xuICAvLyB9KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3NmRmxhc2hNZXNzYWdlJykpKTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlRXZlbnRzKGV2ZW50cykge1xuICBldmVudHMub24oJ3JlZGlyZWN0JywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdXJsID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV2ZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScgPyBldmVudCA6IGV2ZW50LnVybDtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNjg3MDk5L2hvdy10by10ZXN0LWlmLWEtdXJsLXN0cmluZy1pcy1hYnNvbHV0ZS1vci1yZWxhdGl2ZVxuICAgIGNvbnN0IGlzQWJzb2x1dGUgPSAvXig/OlthLXpdKzopP1xcL1xcLy9pLnRlc3QodXJsKTtcbiAgICBpZiAoaXNBYnNvbHV0ZSkge1xuICAgICAgc2VsZi5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgfHwgKGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfSR7d2luZG93LmxvY2F0aW9uLnBvcnQgPyBgOiR7d2luZG93LmxvY2F0aW9uLnBvcnR9YCA6ICcnfWApO1xuICAgICAgc2VsZi5sb2NhdGlvbi5ocmVmID0gb3JpZ2luICsgKCh1cmwuY2hhckF0KDApID09PSAnLycpID8gdXJsIDogKGAvJHt1cmx9YCkpOyAvLyBSZWxhdGl2ZSBwYXRoXG4gICAgfVxuICB9KTtcblxuICBldmVudHMub24oJ3JlbG9hZCcsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGV2ZW50cy5vbigncmVmcmVzaCcsICgpID0+IHtcbiAgICBldmVudHMudHJpZ2dlcigncmVsb2FkJyk7XG4gIH0pO1xuXG4gIGV2ZW50cy5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgc2VsZi5jbG9zZSgpO1xuICB9KTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFuaXB1bGF0ZSBET00gRXZlbnRzLiBJdCdzIGEgc2ltcGxlIHdyYXBwZXIgYXJvdW5kIFwiYWRkRXZlbnRMaXN0ZW5lclwiIGJ1dCBpdCdzIHN0b3JlIGFsbCBmdW5jdGlvbnMgYW5kIGFsbG93IHVzIHRvIHJlbW92ZSBpdCBhbGwuXG4gKiBJdCdzIHZlcnkgaGVscGZ1bCBmb3IgZGllKCkgbWV0aG9kIG9mIGluc3RhbmNlc1xuICogQFRPRE8gYWRkIHRvIG1hbnkgbm9kZXNcbiAqIEBUT0RPIG5ldyBtZXRob2QgbGlrZSBhZGRFdmVudExpc3RlbmVyICBET01FdmVudHMub24obm9kZShzKSxldmVudCxjYWxsYmFjayx1c2VDYXB0dXJlKTtcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBET01FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgICAqIEludGVybmFsIHN0b3JhZ2UgZm9yIGV2ZW50c1xuICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPE9iamVjdD59IERPTUV2ZW50cyAtIGRvbSBldmVudHMgYXJyYXlcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gRE9NRXZlbnRzLkRPTU5vZGUgLSAgIERPTSBub2RlXG4gICAgICogQHByb3BlcnR5IHtTdHJpbmd9IERPTUV2ZW50cy5ldmVudFR5cGUgLSAgIEV2ZW50IHR5cGVcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBET01FdmVudHMuZXZlbnRGdW5jdGlvbiAtICAgRnVuY3Rpb25cbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IERPTUV2ZW50cy51c2VDYXB0dXJlPWZhbHNlIC0gICB1c2VDYXB0dXJlXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IC4uLiAtICAgYW5vdGhlciBvYmplY3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICB0aGlzLl9ET01FdmVudHNTdG9yYWdlID0gW107XG59O1xuLyoqXG4gKiBBZGQgZXZlbnQocykgdG8gbm9kZShzKS5cbiAqIEBUT0RPIGFkZCB0byBtYW55IG5vZGVzXG4gKiBAcGFyYW0ge0FycmF5LjxPYmplY3Q+fE9iamVjdH0gZXZlbnRBcnJheSAtIGV2ZW50IGFycmF5IG9yIGV2ZW50IGl0c2VsZlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50QXJyYXkuRE9NTm9kZSAtICAgRE9NIG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudEFycmF5LmV2ZW50VHlwZSAtICAgRXZlbnQgdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXZlbnRBcnJheS5ldmVudEZ1bmN0aW9uIC0gICBGdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBbZXZlbnRBcnJheS51c2VDYXB0dXJlPWZhbHNlXSAtICAgdXNlQ2FwdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBET01FdmVudHNJbnN0YW5jZSA9IG5ldyBET01FdmVudHMoKTtcbiAqIHZhciBldmVudE9uZSA9IHtcbiAqICAgICAgRE9NTm9kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpLFxuICogICAgICBldmVudFR5cGU6IFwiY2xpY2tcIixcbiAqICAgICAgZXZlbnRGdW5jdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGkgdGhlcmUuIE5hdGl2ZSAgRE9NIGV2ZW50cyBpczpcIixlKTtcbiAqICAgICAgfVxuICogfVxuICogIHZhciBldmVudFR3byA9IHtcbiAqICAgICAgRE9NTm9kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlMlwiKSxcbiAqICAgICAgZXZlbnRUeXBlOiBcIm1vdXNlZG93blwiLFxuICogICAgICBldmVudEZ1bmN0aW9uOiBmdW5jdGlvbiAoZSkge1xuICogICAgICAgICAgY29uc29sZS5sb2coXCJIaSB0aGVyZS4gbW91c2Vkb3duIGV2ZW50LiBOYXRpdmUgIERPTSBldmVudHMgaXM6XCIsZSk7XG4gKiAgICAgIH1cbiAqIH1cbiAqICBET01FdmVudHNJbnN0YW5jZS5hZGQoW2V2ZW50T25lLGV2ZW50VHdvXSk7XG4gKi9cbkRPTUV2ZW50cy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGV2ZW50QXJyYXkpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChbXSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBldmVudEFycmF5ID0gW2V2ZW50QXJyYXldO1xuICB9XG4gIGV2ZW50QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFsLnVzZUNhcHR1cmUgPSAhISh2YWwudXNlQ2FwdHVyZSk7XG4gICAgdmFsLkRPTU5vZGUuYWRkRXZlbnRMaXN0ZW5lcih2YWwuZXZlbnRUeXBlLCB2YWwuZXZlbnRGdW5jdGlvbiwgdmFsLnVzZUNhcHR1cmUpO1xuICAgIHRoaXMuX0RPTUV2ZW50c1N0b3JhZ2UucHVzaCh2YWwpO1xuICB9LCB0aGlzKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50c1xuICogQHBhcmFtIHtBcnJheS48T2JqZWN0Pn0gZXZlbnRBcnJheSAtIGV2ZW50IGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRBcnJheS5ET01Ob2RlIC0gICBET00gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50QXJyYXkuZXZlbnRUeXBlIC0gICBFdmVudCB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBldmVudEFycmF5LmV2ZW50RnVuY3Rpb24gLSAgIEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtldmVudEFycmF5LnVzZUNhcHR1cmU9ZmFsc2VdIC0gICB1c2VDYXB0dXJlXG4gKi9cbkRPTUV2ZW50cy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKC8qIGV2ZW50QXJyYXkgKi8pIHtcbiAgLy8gVE9ETyBJTVBMRU1FTlRcbiAgLy8gVE9ETyDQvdC1INGD0LLQtdGA0LXQvSDRh9GC0L4g0Y3RgtC+0YIg0LzQtdGC0L7QtCDQvdC10L7QsdGF0L7QtNC40LwuINC10YHQu9C4INC90LDQtNC+INGH0LDRgdGC0L4g0YPQsdC40YDQsNGC0Ywg0LrQsNC60LjQtdGC0L4g0L7QsdGA0LDQsdC+0YLRh9C40LrQuCwg0YLQviDQu9GD0YfRiNC1INC/0L7RgdGC0LDQstC40YLRjCDQvtCx0YDQsNCx0L7RgtGH0LrQuCDQvdCwINGA0L7QtNC40YLQtdC70Y9cbiAgY29uc29sZS53YXJuKCdUT0RPIElNUExFTUVOVCcpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGRvbSBldmVudHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgaW5zdGFuY2UgKGFkZGVkIGJ5IG1ldGhvZCBhZGQpXG4gKiBAZXhhbXBsZVxuICogLy9sb29rIGF0IGFkZCBtZXRob2QgYXMgZmlyc3QgcGFydCBvZiB0aGlzIGNvZGVcbiAqIERPTUV2ZW50c0luc3RhbmNlLnJlbW92ZUFsbCgpO1xuICovXG5ET01FdmVudHMucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fRE9NRXZlbnRzU3RvcmFnZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICB2YWwuRE9NTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHZhbC5ldmVudFR5cGUsIHZhbC5ldmVudEZ1bmN0aW9uLCB2YWwudXNlQ2FwdHVyZSk7XG4gIH0pO1xuICB0aGlzLl9ET01FdmVudHNTdG9yYWdlID0gW107XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTUV2ZW50cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKipcbiBUaGlzIGlzIGEgY29sbGVjdGlvbiBvZiB1c2VmdWwgRE9NIHRvb2xzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgICAqIEZvdW5kIGZpcnN0IHBhcmVudCBub2RlIHdpdGggbWF0Y2hlZCBzZWxlY3RvcihzKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0gZG9tIG5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gc2VsZWN0b3JzIC0gc2VsZWN0b3Igb3IgYXJyYXkgb2Ygc2VsZWN0b3JzXG4gICAgICogQHJldHVybnMge09iamVjdHwgQm9vbGVhbn0gLSBub2RlIG9yIGZhbHNlXG4gICAgICovXG5cbiAgY2xvc2VzdChlbGVtLCBzZWxlY3RvcnMpIHtcbiAgICBzZWxlY3RvcnMgPSAodHlwZW9mIHNlbGVjdG9ycyA9PT0gJ3N0cmluZycpID8gW3NlbGVjdG9yc10gOiBzZWxlY3RvcnM7XG4gICAgbGV0IGtleTtcbiAgICBjb25zdCBsID0gc2VsZWN0b3JzLmxlbmd0aDtcbiAgICBjb25zdCBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtLm1hdGNoZXMgfHwgZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIHdoaWxlIChlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsOyBrZXkgKz0gMSkge1xuICAgICAgICBpZiAobWF0Y2hlc1NlbGVjdG9yLmNhbGwoZWxlbSwgc2VsZWN0b3JzW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgLyoqXG4gICAgICogRm91bmQgZmlyc3QgcGFyZW50IG5vZGUgd2l0aCBtYXRjaGVkIGNsYXNzTmFtZShzKS5cbiAgICAgKiBUT0RPIFdoeSB0aGlzPyBCZWNhdXNlIG9sZCBJRS4uLi5cbiAgICAgKiBUT0RPIEl0J3Mgbm90IGdvb2QsIGJlY2F1c2UgaXQncyBhIGNvcHkgb2YgY2xvc2VzdCBAc2VlIGNsb3Nlc3QuIFJlZmFjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBkb20gbm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBjbGFzc05hbWUgLSBjbGFzc05hbWUgb3IgYXJyYXkgb2YgY2xhc3NOYW1lc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8IEJvb2xlYW59IC0gbm9kZSBvciBmYWxzZVxuICAgICAqL1xuXG4gIGNsb3Nlc3RCeUNsYXNzTmFtZShlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWUgPSAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpID8gW2NsYXNzTmFtZV0gOiBjbGFzc05hbWU7XG4gICAgbGV0IGtleTtcbiAgICBjb25zdCBsID0gY2xhc3NOYW1lLmxlbmd0aDtcblxuICAgIHdoaWxlIChlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsOyBrZXkgKz0gMSkge1xuICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGAoXFxcXHN8Xikke2NsYXNzTmFtZVtrZXldfShcXFxcc3wkKWApO1xuICAgICAgICBpZiAoZWxlbS5jbGFzc05hbWUubWF0Y2gocmVnKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbi8qKlxuICogQG1vZHVsZSB0b29sc1xuICogQG5hbWVzcGFjZVxuICovXG5jb25zdCB0b29scyA9IHtcbiAgcmVzb2x2ZUtleVBhdGgocGF0aCwgb2JqLCBzYWZlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+ICghc2FmZSA/IHByZXZbY3Vycl0gOiAocHJldiA/IHByZXZbY3Vycl0gOiB1bmRlZmluZWQpKSwgb2JqIHx8IHNlbGYpO1xuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0b29scztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhIHNwaXJhbC1zcGVjaWZpYyBzZiBidW5kbGVcbiAqIFRPRE86IFRoaXMgd3JhcHBpbmcgbG9va3MgdmVyeSBmaXNoeSwgd2h5IHdlIG5lZWQgaXQ/IE1vdmUgdG8gdG9vbGtpdCBtYXkgYmU/XG4gKi9cbmNvbnN0IHNmID0gcmVxdWlyZSgnLi9zZicpO1xuXG5jb25zdCBzZldyYXBwZXIgPSB7XG4gIGNvcmU6IHNmLmNvcmUsXG4gIGhlbHBlcnM6IHNmLmhlbHBlcnMsXG4gIHRvb2xzOiBzZi50b29scyxcbn07XG5cbi8vIEFkZCBjb25zb2xlIHNoaW0gZm9yIG9sZCBJRVxucmVxdWlyZSgnLi9zaGltL2NvbnNvbGUnKTtcbnJlcXVpcmUoJy4vc2hpbS9PYmplY3QuYXNzaWduJyk7XG5cbmlmICghc2ZXcmFwcGVyLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHNmV3JhcHBlci5vcHRpb25zID0geyBpbnN0YW5jZXM6IHt9IH07XG5pZiAoIXNmV3JhcHBlci5vcHRpb25zLmhhc093blByb3BlcnR5KCdpbnN0YW5jZXMnKSkgc2ZXcmFwcGVyLm9wdGlvbnMuaW5zdGFuY2VzID0ge307XG5cbnNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyID0gbmV3IHNmV3JhcHBlci5jb3JlLkluc3RhbmNlc0NvbnRyb2xsZXIoc2ZXcmFwcGVyKTtcbnNmV3JhcHBlci5kb21NdXRhdGlvbiA9IG5ldyBzZldyYXBwZXIuY29yZS5Eb21NdXRhdGlvbnMoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuXG4vLyBFdmVudHMgc3lzdGVtXG5zZldyYXBwZXIuZXZlbnRzID0gbmV3IHNmV3JhcHBlci5jb3JlLkV2ZW50cygpO1xucmVxdWlyZSgnLi9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLmpzJykoc2ZXcmFwcGVyLmV2ZW50cyk7XG5cbi8vIEFKQVhcbnNmV3JhcHBlci5hamF4ID0gbmV3IHNmV3JhcHBlci5jb3JlLkFqYXgod2luZG93ICYmIHdpbmRvdy5jc3JmVG9rZW4gPyB7XG4gIC8vIFRPRE8gbW92ZSB0byBzcGlyYWwgYmluZGluZ3NcbiAgaGVhZGVyczoge1xuICAgICdYLUNTUkYtVG9rZW4nOiB3aW5kb3cuY3NyZlRva2VuLFxuICB9LFxufSA6IG51bGwpO1xuXG4vLyBBQ1RJT05TXG5yZXF1aXJlKCcuL2NvcmUvYWpheC9iYXNlQWN0aW9ucy5qcycpKHNmV3JhcHBlcik7XG5cbi8vIEFQSVxuc2ZXcmFwcGVyLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoc2ZXcmFwcGVyLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG59O1xuXG5zZldyYXBwZXIucmVnaXN0ZXJJbnN0YW5jZVR5cGUgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5yZWdpc3Rlckluc3RhbmNlVHlwZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcbnNmV3JhcHBlci5hZGRJbnN0YW5jZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLmFkZEluc3RhbmNlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuc2ZXcmFwcGVyLnJlbW92ZUluc3RhbmNlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIucmVtb3ZlSW5zdGFuY2UuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5zZldyYXBwZXIuZ2V0SW5zdGFuY2UgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcbnNmV3JhcHBlci5nZXRJbnN0YW5jZXMgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZXMuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5cbnNmV3JhcHBlci5jbG9zZXN0ID0gc2YuaGVscGVycy5kb21Ub29scy5jbG9zZXN0O1xuc2ZXcmFwcGVyLnJlc29sdmVLZXlQYXRoID0gc2YudG9vbHMucmVzb2x2ZUtleVBhdGg7XG5cbm1vZHVsZS5leHBvcnRzID0gc2ZXcmFwcGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cblxuY29uc3QgY29yZSA9IHtcbiAgQWpheDogcmVxdWlyZSgnLi9jb3JlL0FqYXgnKSxcbiAgQmFzZURPTUNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yJyksXG4gIERvbU11dGF0aW9uczogcmVxdWlyZSgnLi9jb3JlL0RvbU11dGF0aW9ucycpLFxuICBFdmVudHM6IHJlcXVpcmUoJy4vY29yZS9FdmVudHMnKSxcbiAgSW5zdGFuY2VzQ29udHJvbGxlcjogcmVxdWlyZSgnLi9jb3JlL0luc3RhbmNlc0NvbnRyb2xsZXInKSxcbn07XG5cbmNvbnN0IGhlbHBlcnMgPSB7XG4gIERPTUV2ZW50czogcmVxdWlyZSgnLi9oZWxwZXJzL0RPTUV2ZW50cycpLFxuICBkb21Ub29sczogcmVxdWlyZSgnLi9oZWxwZXJzL2RvbVRvb2xzJyksXG4gIC8vIExpa2VGb3JtRGF0YTogcmVxdWlyZSgnLi9oZWxwZXJzL0xpa2VGb3JtRGF0YScpLFxuICAvLyB0b29sczogcmVxdWlyZSgnLi9oZWxwZXJzL3Rvb2xzJyksXG59O1xuXG5jb25zdCBzZiA9IHtcbiAgY29yZSxcbiAgaGVscGVycyxcbiAgdG9vbHM6IHJlcXVpcmUoJy4vaGVscGVycy90b29scycpLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qKlxuICogT2JqZWN0LmFzc2lnbiBwb2x5ZmlsbFxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnblxuICovXG5pZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT09ICdmdW5jdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkIHx8IHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBzb3VyY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBmb3IgKGNvbnN0IG5leHRLZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChuZXh0S2V5KSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtuZXh0S2V5XSA9IHNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuICB9KCkpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyoqXG4gKiBBdm9pZCBgY29uc29sZWAgZXJyb3JzIGluIGJyb3dzZXJzIHRoYXQgbGFjayBhIGNvbnNvbGUuXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIGxldCBtZXRob2Q7XG4gIGNvbnN0IG5vb3AgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGNvbnN0IG1ldGhvZHMgPSBbXG4gICAgJ2Fzc2VydCcsICdjbGVhcicsICdjb3VudCcsICdkZWJ1ZycsICdkaXInLCAnZGlyeG1sJywgJ2Vycm9yJyxcbiAgICAnZXhjZXB0aW9uJywgJ2dyb3VwJywgJ2dyb3VwQ29sbGFwc2VkJywgJ2dyb3VwRW5kJywgJ2luZm8nLCAnbG9nJyxcbiAgICAnbWFya1RpbWVsaW5lJywgJ3Byb2ZpbGUnLCAncHJvZmlsZUVuZCcsICd0YWJsZScsICd0aW1lJywgJ3RpbWVFbmQnLFxuICAgICd0aW1lU3RhbXAnLCAndHJhY2UnLCAnd2FybicsXG4gIF07XG4gIGxldCB7IGxlbmd0aCB9ID0gbWV0aG9kcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICBjb25zdCBjb25zb2xlID0gKHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF07XG5cbiAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXG4gICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IG5vb3A7XG4gICAgfVxuICB9XG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlUm9vdCI6IiJ9