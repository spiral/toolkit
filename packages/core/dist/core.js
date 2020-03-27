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
  const ajaxPromise = new Promise((resolve, reject) => {
    // Return a new promise.
    if (!options.url) {
      console.error('You should provide url'); // eslint-disable-next-line prefer-promise-reject-errors

      reject('You should provide url'); // TODO
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
          reject(response);
        } else {
          console.error('unknown status %d. Rejecting', response.status);
          reject(response);
        }
      } else {
        reject(response); // reject with the status text
      }

      options.response = response;
      that.events.trigger('load', options); // for example - used to handle actions
    }).catch(error => {
      that.currentRequests -= 1;
      reject(error);
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
  }; // todo decide if we need this
  // ["onAddInstance", "onRemoveInstance"]
  // this.events = new spiral.modules.core.Events();
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
  }); // this.events.trigger("onAddInstance", instance);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RvbU11dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hamF4L2Jhc2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL0RPTUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9kb21Ub29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGltL09iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaW0vY29uc29sZS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJFdmVudHMiLCJBamF4Iiwib3B0aW9ucyIsImN1cnJlbnRSZXF1ZXN0cyIsImV2ZW50cyIsImNhbmNlbCIsImhlYWRlcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzZW5kIiwidGhhdCIsImRhdGEiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJDYW5jZWxUb2tlbiIsImNhbmNlbFNvdXJjZSIsInNvdXJjZSIsImNvbmZpZyIsInVybCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50Iiwib25Qcm9ncmVzcyIsImxvYWRlZCIsInRvdGFsIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImFqYXhQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwidHJpZ2dlciIsImNhdGNoIiwibW9kdWxlIiwiZXhwb3J0cyIsIkJhc2VET01Db25zdHJ1Y3RvciIsImluaXQiLCJzZiIsIm5vZGUiLCJncmFiT3B0aW9ucyIsIm9wdGlvbnNUb0dyYWIiLCJjdXJyZW50T3B0aW9uVmFsdWUiLCJjdXJyZW50T3B0aW9uIiwia2V5cyIsImZvckVhY2giLCJvcHRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwiaW5zdGFuY2VzIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJkb21BdHRyIiwicHJvY2Vzc29yIiwiY2FsbCIsIkRvbU11dGF0aW9ucyIsImluc3RhbmNlc0NvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJjaGFyYWN0ZXJEYXRhT2xkVmFsdWUiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvbkRvbU11dGF0ZSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwibXV0YXRpb25zIiwiY2xhc3NBcnJheSIsImdldENsYXNzZXMiLCJjbGFzc1NlbGVjdG9yIiwiam9pbiIsImxlbmd0aCIsIm11dGF0aW9uIiwidHlwZSIsInByb2Nlc3NNdXRhdGlvbkF0dHJpYnV0ZXMiLCJwcm9jZXNzTXV0YXRpb25DaGlsZExpc3QiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiY3VycmVudENsYXNzZXMiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzcGxpdCIsIm9sZENsYXNzZXMiLCJvbGRWYWx1ZSIsImFkZGVkQ2xhc3NlcyIsImZpbHRlciIsInZhbCIsImluZGV4T2YiLCJyZW1vdmVkQ2xhc3NlcyIsImFkZGVkUmVnaXN0ZXJlZENsYXNzZXMiLCJyZW1vdmVkUmVnaXN0ZXJlZENsYXNzZXMiLCJyZW1vdmVJbnN0YW5jZSIsImdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3MiLCJhZGRJbnN0YW5jZSIsIm5vZGVzTGlzdCIsImFjdGlvbiIsImNoZWNrTm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibm9kZVR5cGUiLCJub2RlTmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdG9wT2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJhbGxvd2VkRXZlbnRzIiwiX3N0b3JhZ2UiLCJfYWxsb3dlZEV2ZW50cyIsIm9uIiwiY2FsbGJhY2siLCJldmVudEFyciIsInJlcGxhY2UiLCJldmVudCIsIndhcm4iLCJwdXNoIiwicmVnaXN0ZXJBY3Rpb24iLCJvZmYiLCJhbGVydCIsIm4iLCJsIiwicGVyZm9ybUFjdGlvbiIsIkluc3RhbmNlc0NvbnRyb2xsZXIiLCJzcGlyYWwiLCJpbnN0YW5jZXNDb25zdHJ1Y3RvcnMiLCJjc3NDbGFzc2VzIiwianNDb25zdHJ1Y3RvcnMiLCJhZGRvbnMiLCJyZWdpc3Rlckluc3RhbmNlVHlwZSIsImNvbnN0cnVjdG9yRnVuY3Rpb24iLCJjc3NDbGFzc05hbWUiLCJpc1NraXBJbml0aWFsaXphdGlvbiIsImluc3RhbmNlTmFtZSIsInNwaXJhbEZyYW1ld29ya05hbWUiLCJub2RlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibWF4IiwiYWRkSW5zdGFuY2VUeXBlIiwiSW5zdGFuY2VDb25zdHJ1Y3RvciIsImlzQWxyZWFkeUFkZGVkIiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZSIsImluc3RhbmNlT2JqIiwiZGllIiwia2V5Iiwic3BsaWNlIiwiaXNSZXR1cm5PYmplY3QiLCJ0eXBlQXJyIiwicmV0IiwiSFRNTEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEluc3RhbmNlcyIsInJlZ2lzdGVyQWRkb24iLCJhZGRvbiIsImFkZG9uVHlwZSIsImFkZG9uTmFtZSIsImdldEluc3RhbmNlQWRkb24iLCJjc3NDbGFzcyIsImdldEluc3RhbmNlQ29uc3RydWN0b3JzIiwiYWpheCIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsImRlbGF5IiwiYmFzZUV2ZW50cyIsInRvU3RyaW5nIiwiaXNBYnNvbHV0ZSIsInRlc3QiLCJzZWxmIiwibG9jYXRpb24iLCJocmVmIiwib3JpZ2luIiwid2luZG93IiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJjaGFyQXQiLCJyZWxvYWQiLCJjbG9zZSIsIkRPTUV2ZW50cyIsIl9ET01FdmVudHNTdG9yYWdlIiwiYWRkIiwiZXZlbnRBcnJheSIsInVzZUNhcHR1cmUiLCJET01Ob2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsImV2ZW50RnVuY3Rpb24iLCJyZW1vdmUiLCJyZW1vdmVBbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xvc2VzdCIsImVsZW0iLCJzZWxlY3RvcnMiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJwYXJlbnROb2RlIiwiY2xvc2VzdEJ5Q2xhc3NOYW1lIiwicmVnIiwiUmVnRXhwIiwibWF0Y2giLCJ0b29scyIsInJlc29sdmVLZXlQYXRoIiwicGF0aCIsIm9iaiIsInNhZmUiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsInNmV3JhcHBlciIsImNvcmUiLCJoZWxwZXJzIiwiZG9tTXV0YXRpb24iLCJjc3JmVG9rZW4iLCJjcmVhdGVNb2R1bGVQcm90b3R5cGUiLCJjcmVhdGUiLCJiaW5kIiwiZG9tVG9vbHMiLCJUeXBlRXJyb3IiLCJvdXRwdXQiLCJpbmRleCIsIm5leHRLZXkiLCJub29wIiwibWV0aG9kcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQywwREFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHlEQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxx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RixNQUFheUosT0FBakIsQ0FWVyxDQVdYOztBQUNBLFFBQU0zTSxPQUFPLEdBQUlxSixNQUFNLENBQUNySixPQUFQLEdBQWlCcUosTUFBTSxDQUFDckosT0FBUCxJQUFrQixFQUFwRCxDQVpXLENBY1g7O0FBQ0EsU0FBT2tELE1BQU0sRUFBYixFQUFpQjtBQUNmbkUsVUFBTSxHQUFHNE4sT0FBTyxDQUFDekosTUFBRCxDQUFoQixDQURlLENBR2Y7O0FBQ0EsUUFBSSxDQUFDbEQsT0FBTyxDQUFDakIsTUFBRCxDQUFaLEVBQXNCO0FBQ3BCaUIsYUFBTyxDQUFDakIsTUFBRCxDQUFQLEdBQWtCMk4sSUFBbEI7QUFDRDtBQUNGO0FBQ0YsQ0F2QkEsR0FBRCxDIiwiZmlsZSI6ImNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNmXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuLy8gdmFyIHRvb2xzID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdG9vbHNcIik7XG5jb25zdCBFdmVudHMgPSByZXF1aXJlKCcuL0V2ZW50cycpO1xuLy8gY29uc3QgTGlrZUZvcm1EYXRhID0gcmVxdWlyZSgnLi4vaGVscGVycy9MaWtlRm9ybURhdGEnKTtcblxuLyoqXG4gKiBUaGlzIGlzIGFuIEFqYXggdHJhbnNwb3J0LlxuICogU3VwcG9ydHMgIFhEb21haW5SZXF1ZXN0IGZvciBvbGQgSUVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5oZWFkZXJzXSBIZWFkZXJzIHRvIGFkZCB0byB0aGUgaW5zdGFuY2VcbiAqIEBmaXJlcyBiZWZvcmVTZW5kIGV2ZW50IHRoYXQgd2lsbCBiZSBwZXJmb3JtZWQgYmVmb3JlIHJlcXVlc3QgaXMgc2VuZC4gRXZlbnQgY2FsbGVkIHdpdGggb25lIHBhcmFtZXRlciBcIm9wdGlvbnNcIiwgdGhhdCBjb250YWlucyBhbGwgdmFyaWFibGVzIGZvciBBamF4XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQWpheCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHRoaXMuY3VycmVudFJlcXVlc3RzID0gMDtcbiAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRzKFsnYmVmb3JlU2VuZCcsICdsb2FkJ10pO1xuICB0aGlzLmNhbmNlbCA9IG51bGw7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycyk7XG4gIH1cbn07XG5cbi8qKlxuICogRGVmYXVsdCBoZWFkZXJzLiBZb3UgY2FuIG92ZXJ3cml0ZSBpdC4gTG9vayBhdCB0aGUgZXZlbnQgYmVmb3JlU2VuZFxuICogUGxlYXNlIG5vdGUgdGhhdCBvbiBYRG9tYWluUmVxdWVzdCAgd2UgY2FuJ3Qgc2VuZCBhbnkgaGVhZGVycy5cbiAqIEB0eXBlIE9iamVjdFxuICovXG5BamF4LnByb3RvdHlwZS5oZWFkZXJzID0ge1xuICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG59O1xuXG4vKipcbiAqIFNlbmQgYWpheCByZXF1ZXN0IHRvIHNlcnZlclxuICogV2lsbCByZXR1cm4gcHJvbWlzZSBvciBhcnJheSB3aXRoIHByb21pc2UgYW5kIFhNTEh0dHBSZXF1ZXN0IDoge3dpbmRvdy5Qcm9taXNlfFt3aW5kb3cuUHJvbWlzZSxYTUxIdHRwUmVxdWVzdF19XG4gKiBAc2luY2UgMC40LjBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnVybCB1cmwgdG8gc2VuZCBkYXRhXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zLmRhdGFdIGRhdGEgdG8gc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1ldGhvZF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5oZWFkZXJzXSBoZWFkZXJzIHRvIGFkZCB0byB0aGUgcmVxdWVzdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25Qcm9ncmVzc10gY2FsbGJhY2sgZnVuY3Rpb24gb24gcHJvZ3Jlc3MuIFR3byBjYWxsYmFjayBvcHRpb25zOiBjdXJyZW50IGJ5dGVzIHNlbnQsdG90YWxCeXRlc1xuICogSWYgdHJlZSB0aGVuICBbd2luZG93LlByb21pc2UsIFhNTEh0dHBSZXF1ZXN0IF0gd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybiB7UHJvbWlzZXxBcnJheX1cbiAqL1xuQWpheC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIC8vIFRPRE8gd2h5IHdlIGNoZWNrIGhlcmUgaWYgZGF0YSA9PT0gbnVsbCB0aGVuIHJlYXNzaWduIHRvIG51bGwgYWdhaW4/XG4gIGlmIChvcHRpb25zLmRhdGEgPT09IG51bGwgfHwgb3B0aW9ucy5kYXRhID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5kYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMuZGF0YSA9IG51bGw7XG4gIH1cbiAgaWYgKCFvcHRpb25zLm1ldGhvZCkge1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICB9XG5cbiAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzID8gT2JqZWN0LmFzc2lnbihvcHRpb25zLmhlYWRlcnMsIHRoaXMuaGVhZGVycywgb3B0aW9ucy5oZWFkZXJzKSA6ICh7IC4uLnRoaXMuaGVhZGVycyB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcbiAgY29uc3QgY2FuY2VsU291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKCk7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIC8vIGB1cmxgIGlzIHRoZSBzZXJ2ZXIgVVJMIHRoYXQgd2lsbCBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICAgIHVybDogb3B0aW9ucy51cmwsXG5cbiAgICAvLyBgbWV0aG9kYCBpcyB0aGUgcmVxdWVzdCBtZXRob2QgdG8gYmUgdXNlZCB3aGVuIG1ha2luZyB0aGUgcmVxdWVzdFxuICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG5cbiAgICAvLyBgaGVhZGVyc2AgYXJlIGN1c3RvbSBoZWFkZXJzIHRvIGJlIHNlbnRcbiAgICBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsXG5cbiAgICAvLyBgZGF0YWAgaXMgdGhlIGRhdGEgdG8gYmUgc2VudCBhcyB0aGUgcmVxdWVzdCBib2R5XG4gICAgLy8gT25seSBhcHBsaWNhYmxlIGZvciByZXF1ZXN0IG1ldGhvZHMgJ1BVVCcsICdQT1NUJywgYW5kICdQQVRDSCdcbiAgICAvLyBXaGVuIG5vIGB0cmFuc2Zvcm1SZXF1ZXN0YCBpcyBzZXQsIG11c3QgYmUgb2Ygb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XG4gICAgLy8gLSBzdHJpbmcsIHBsYWluIG9iamVjdCwgQXJyYXlCdWZmZXIsIEFycmF5QnVmZmVyVmlldywgVVJMU2VhcmNoUGFyYW1zXG4gICAgLy8gLSBCcm93c2VyIG9ubHk6IEZvcm1EYXRhLCBGaWxlLCBCbG9iXG4gICAgLy8gLSBOb2RlIG9ubHk6IFN0cmVhbSwgQnVmZmVyXG4gICAgZGF0YTogb3B0aW9ucy5kYXRhLFxuXG4gICAgLy8gYG9uVXBsb2FkUHJvZ3Jlc3NgIGFsbG93cyBoYW5kbGluZyBvZiBwcm9ncmVzcyBldmVudHMgZm9yIHVwbG9hZHNcbiAgICBvblVwbG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudCkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMub25Qcm9ncmVzcykge1xuICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3MocHJvZ3Jlc3NFdmVudC5sb2FkZWQsIHByb2dyZXNzRXZlbnQudG90YWwpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBgY2FuY2VsVG9rZW5gIHNwZWNpZmllcyBhIGNhbmNlbCB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNhbmNlbCB0aGUgcmVxdWVzdFxuICAgIC8vIChzZWUgQ2FuY2VsbGF0aW9uIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbHMpXG4gICAgY2FuY2VsVG9rZW46IGNhbmNlbFNvdXJjZS50b2tlbixcbiAgfTtcblxuICB0aGlzLmNhbmNlbCA9IGNhbmNlbFNvdXJjZS5jYW5jZWw7XG5cbiAgY29uc3QgYWpheFByb21pc2UgPSBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4geyAvLyBSZXR1cm4gYSBuZXcgcHJvbWlzZS5cbiAgICBpZiAoIW9wdGlvbnMudXJsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJyk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgICAgcmVqZWN0KCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJyk7IC8vIFRPRE9cbiAgICB9XG4gICAgdGhhdC5jdXJyZW50UmVxdWVzdHMgKz0gMTtcbiAgICBheGlvc1xuICAgICAgLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoYXQuY3VycmVudFJlcXVlc3RzIC09IDE7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiAxOTkgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7IC8vIDIwMC0yOTlcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzk5ICYmIHJlc3BvbnNlLnN0YXR1cyA8IDYwMCkgeyAvLyA0MDAtNTk5XG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmtub3duIHN0YXR1cyAlZC4gUmVqZWN0aW5nJywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7IC8vIHJlamVjdCB3aXRoIHRoZSBzdGF0dXMgdGV4dFxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgdGhhdC5ldmVudHMudHJpZ2dlcignbG9hZCcsIG9wdGlvbnMpOyAvLyBmb3IgZXhhbXBsZSAtIHVzZWQgdG8gaGFuZGxlIGFjdGlvbnNcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoYXQuY3VycmVudFJlcXVlc3RzIC09IDE7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSkpO1xuXG4gIHJldHVybiBhamF4UHJvbWlzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWpheDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqLyAvLyBUT0RPOiA/XG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogVGhpcyBhIGJhc2UgY29uc3RydWN0b3IgKGNsYXNzKSBmb3IgYW55IERPTSBiYXNlZCBpbnN0YW5jZS5cbiAqIFRoaXMgY29uc3RydWN0b3IganVzdCBncmFiIGFsbCBub2RlIGF0dHJpYnV0ZXMgYW5kIGdlbmVyYXRlcyBvcHRpb25zLiBBbGwgcHJvY2Vzc2VkIG9wdGlvbnMgc3RvcmVkIGF0IHRoaXMub3B0aW9uc1xuICogQGV4YW1wbGVcbiAqIFdlIGhhdmUgaHRtbCBsaWtlIHRoaXM6XG4gKiA8ZGl2IGRhdGEtdGVzdD1cInRlc3RWYWx1ZVwiIGRhdGEtdmFsdWU9XCJ2YWx1ZTEyM1wiPi4uLi4uPC9kaXY+XG4gKiB0aGlzLm9wdGlvbnMgd2lsbCBiZTpcbiAqIHtcbiAqICB0ZXN0OlwidGVzdFZhbHVlXCIsXG4gKiAgdmFsdWU6XCJ2YWx1ZVwiXG4gKiB9XG4gKiBOb3RlOiBkYXRhLXRlc3QgYW5kIGRhdGEtdmFsdWUgc2hvdWxkIGJlIGRlc2NyaWJlZCBpbiBhdHRyaWJ1dGVzVG9HcmFiXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQmFzZURPTUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xufTtcbi8qKlxuICogSW5pdCBtZXRob2QuIENhbGwgYWZ0ZXIgY29uc3RydWN0IGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICovXG5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgLy8gVE9ETyBkYXRhLXNwaXJhbC1KU09OXG4gIHRoaXMuc2YgPSBzZjtcbiAgdGhpcy5ub2RlID0gbm9kZTtcbiAgLy8gaWYgKHNmLm9wdGlvbnMgJiYgc2Yub3B0aW9ucy5pbnN0YW5jZXMgJiYgc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXSkge1xuICAvLyAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zIHx8IHt9LCBzZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdKTtcbiAgLy8gfVxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuZ3JhYk9wdGlvbnMobm9kZSksIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgb3B0aW9ucyB0byBnZW5lcmF0ZS5cbiAqIFlvdSBzaG91bGQgcHJvdmlkZSBwcm9jZXNzb3Igb3IgdmFsdWUuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtPYmplY3R9IHByb3BlcnR5S2V5IC0gb2JqZWN0IG9mIHByb3BlcnR5XG4gKiBAcHJvcGVydHkge1N0cmluZ30gcHJvcGVydHlLZXkudmFsdWUgLSBkZWZhdWx0IHZhbHVlIHRvIHJldHVyblxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtwcm9wZXJ0eUtleS5kb21BdHRyXSAtIGRvbSBhdHRyaWJ1dGUgdG8gZ3JhYiBkYXRhXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbcHJvcGVydHlLZXkucHJvY2Vzc29yXSAtICBwcm9jZXNzb3IgdG8gcHJvY2VzcyBkYXRhIGJlZm9yZSByZXR1cm5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSAgLi4uIC0gQW5vdGhlciBvYmplY3Qgb2Ygb25lIHByb3BlcnR5XG4gKiBAdHlwZSB7e319XG4gKiAgQGV4YW1wbGVcbiAqIFwic29tZUF0dHJpYnV0ZVwiOiB7Ly8ga2V5XG4gKiAgICAgIHZhbHVlOiB0cnVlLCAvL2RlZmF1bHQgVmFsdWVcbiAqICAgICAgZG9tQXR0cjogXCJkYXRhLXNvbWUtYXR0cmlidXRlXCIsIC8vIGF0dHJpYnV0ZSBmcm9tIG5vZGUgdG8gZ3JhYlxuICogICAgICBwcm9jZXNzb3I6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7IC8vcHJvY2Vzc29yIHRvIHByb2Nlc3MgdmFsdWVzIGJlZm9yZSByZXR1cm5cbiAqICAgICAgICAgIC8vc29tZSBjYWxjdWxhdGlvbnNcbiAqICAgICAgcmV0dXJuIHNvbWVWYWx1ZTtcbiAqICAgICAgfVxuICogIH0sXG4gKiAgXCJhbm90aGVyQXR0cmlidXRlXCI6ey4uLn0sXG4gKiAgXCIuLi5cIlxuICpcbiAqICBAZXhhbXBsZVxuICogIC8vcmV0dXJuIG5vZGUgYXMgdmFsdWVcbiAqICBcImNvbnRleHRcIjoge1xuICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsa2V5KSB7IC8vcHJvY2Vzc29yXG4gKiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAqICAgICAgfVxuICogIH0sXG4gKiAgXCJBbm90aGVyLWtleVwiOnsuLi59LFxuICogIFwiLi4uXCJcbiAqIEBleGFtcGxlXG4gKiAvL0dyYWIgYXR0cmlidXRlIFwiZGF0YS1hdHRyaWJ1dGVcIiBhcyBcIk15QXR0cmlidXRlXCIgaWYgYXR0cmlidXRlIG5vdCBwcm92aWRlZCByZXR1cm4gXCJEZWZhdWx0VmFsdWVcIlxuICogLy8gRG9tIG5vZGUgPGRpdiBkYXRhLWF0dHJpYnV0ZT1cInNvbWVWYWx1ZVwiPjwvZGl2PlxuICogXCJNeUF0dHJpYnV0ZVwiOiB7XG4gKiAgICAgIHZhbHVlOiBcIkRlZmF1bHRWYWx1ZVwiLFxuICogICAgICBkb21BdHRyOiBcImRhdGEtYXR0cmlidXRlXCJcbiAqICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wiTXlBdHRyaWJ1dGVcIjpcInNvbWVWYWx1ZVwifVxuICpcbiAqICBAZXhhbXBsZVxuICogLy9HcmFiIGF0dHJpYnV0ZSBcImRhdGEtYXR0cmlidXRlXCIgYXMgXCJNeUF0dHJpYnV0ZVwiIGFuZCByZXR1cm4gc29tZSB2YWx1ZSBpbnN0ZWFkXG4gKiAvL0RvbSBub2RlICA8ZGl2IGRhdGEtYXR0cmlidXRlPVwic29tZVZhbHVlXCI+PC9kaXY+XG4gKiBcIk15QXR0cmlidXRlXCI6IHtcbiAqICAgICAgZG9tQXR0cjogXCJkYXRhLWF0dHJpYnV0ZVwiLFxuICogICAgICBwcm9jZXNzb3I6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XG4gKiAgICAgICAgICByZXR1cm4gdmFsK1wiU29tZUNhbGN1bGF0aW9uXCI7XG4gKiAgICAgIH1cbiAqICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wiTXlBdHRyaWJ1dGVcIjpcInNvbWVWYWx1ZVNvbWVDYWxjdWxhdGlvblwifVxuICpcbiAqIEBleGFtcGxlXG4gKiAvL3JldHVybiBmdW5jdGlvbiBhcyB2YWx1ZVxuICogcHJvY2Vzc0Fuc3dlcjoge1xuICogICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gKiAgICAgICAgIHJldHVybiBcInNvbWVWYWxcIjtcbiAqICAgICAgfVxuICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxuICogIHtcInByb2Nlc3NBbnN3ZXJcIjpmdW5jdGlvbiAob3B0aW9ucykge1xuICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XG4gKiAgICAgIH1cbiAqICAgfVxuICpcbiAqIEBleGFtcGxlXG4gKiAvL3JldHVybiBpbml0IHRpbWUgYXMgdmFsdWVcbiAqIGluaXRUaW1lOiB7XG4gKiAgICAgIFwicHJvY2Vzc29yXCI6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XG4gKiAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWU7XG4gKiAgICAgIH1cbiAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcbiAqICB7XCJpbml0VGltZVwiOjE0Mjk4MDg5Nzc0MDR9XG4gKiBAZXhhbXBsZVxuICogLy9yZXR1cm4gb3RoZXIgdmFsdWUgaW5zdGVhZCBvZiByZWFsIG9uZVxuICogcHJvY2Vzc0Fuc3dlcjoge1xuICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikge1xuICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XG4gKiAgICAgIH1cbiAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcbiAqICB7XCJwcm9jZXNzQW5zd2VyXCI6XCJzb21lVmFsXCJ9XG4gKi9cbkJhc2VET01Db25zdHJ1Y3Rvci5wcm90b3R5cGUub3B0aW9uc1RvR3JhYiA9IHt9O1xuXG4vKipcbiAqIEdyYWIgYWxsIG9wdGlvbnMgdGhhdCBkZXNjcmliZWQgaW4gb3B0aW9uc1RvR3JhYlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgZG9tTm9kZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlLmdyYWJPcHRpb25zID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICBsZXQgY3VycmVudE9wdGlvblZhbHVlO1xuICBsZXQgY3VycmVudE9wdGlvbjtcbiAgLy8gZm9yIChjb25zdCBvcHRpb24gaW4gdGhpcy5vcHRpb25zVG9HcmFiKSB7XG4gIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uc1RvR3JhYikuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgaWYgKHRoaXMub3B0aW9uc1RvR3JhYi5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7XG4gICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBudWxsO1xuICAgICAgaWYgKHRoaXMub3B0aW9uc1RvR3JhYi5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7IC8vIGlmIHRoaXMgaXMgb3duIG9wdGlvblxuICAgICAgICBjdXJyZW50T3B0aW9uID0gdGhpcy5vcHRpb25zVG9HcmFiW29wdGlvbl07XG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7IC8vIHdlIGhhdmUgZGVmYXVsdCBvcHRpb24uIExldCdzIGdyYWIgaXQgZm9yIGZpcnN0XG4gICAgICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gY3VycmVudE9wdGlvbi52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV0gJiYgdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdLmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSB0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV1bb3B0aW9uXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uLmhhc093blByb3BlcnR5KCdkb21BdHRyJykgJiYgbm9kZS5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGN1cnJlbnRPcHRpb24uZG9tQXR0cikpIHsgLy8gd2UgY2FuIGdyYWIgdGhlIGF0dHJpYnV0ZSBvZiBub2RlXG4gICAgICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gbm9kZS5hdHRyaWJ1dGVzW2N1cnJlbnRPcHRpb24uZG9tQXR0cl0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgncHJvY2Vzc29yJykpIHsgLy8gd2UgaGF2ZSBwcm9jZXNzb3IuIExldCdzIGV4ZWN1dGUgaXRcbiAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBjdXJyZW50T3B0aW9uLnByb2Nlc3Nvci5jYWxsKHRoaXMsIG5vZGUsIGN1cnJlbnRPcHRpb25WYWx1ZSwgY3VycmVudE9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE9wdGlvblZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gY3VycmVudE9wdGlvblZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VET01Db25zdHJ1Y3RvcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBEb20gbXV0YXRpb24uIExpc3RlbmluZyB0byB0aGUgRE9NIGFuZCBhZGQgb3IgcmVtb3ZlIGluc3RhbmNlcyBiYXNlZCBvbiBjbGFzc2VzLlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlc0NvbnRyb2xsZXIgIHNwaXJhbCBpbnN0YW5jZXNDb250cm9sbGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW5zdGFuY2VzQ29udHJvbGxlci5nZXRDbGFzc2VzICBnZXQgYWxsIHJlZ2lzdGVyZWQgbW9kdWxlcyBjbGFzc2VzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW5zdGFuY2VzQ29udHJvbGxlci5hZGRJbnN0YW5jZSAgYWRkIGluc3RhbmNlIG1ldGhvZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGluc3RhbmNlc0NvbnRyb2xsZXIucmVtb3ZlSW5zdGFuY2UgIHJlbW92ZSBpbnN0YW5jZSBtZXRob2RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBEb21NdXRhdGlvbnMgPSBmdW5jdGlvbiAoaW5zdGFuY2VzQ29udHJvbGxlcikge1xuICBpZiAoIWluc3RhbmNlc0NvbnRyb2xsZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgaW5zdGFuY2VzQ29udHJvbGxlciAgZm9yIERPTSBNdXRhdGlvbi4gQmVjYXVzZSBET00gTXV0YXRpb24gIHNob3VsZCBrbm93biBhbGwgY2xhc3NlcyBhbmQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBjYWxsIERvbU11dGF0aW9ucyB3aXRoIG5ldyAgLSAnbmV3IERvbU11dGF0aW9ucygpJyBcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlciA9IGluc3RhbmNlc0NvbnRyb2xsZXI7XG4gIGNvbnN0IGNvbmZpZyA9IHsgLy8gY29uZmlnIGZvciBNdXRhdGlvbk9ic2VydmVyXG4gICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcbiAgfTtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHsgLy8gY2FsbCBmdW5jdGlvbiB3aGVuIGRvbSBtdXRhdGVkLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB0aGF0Lm9uRG9tTXV0YXRlLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgfSk7XG4gIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwgY29uZmlnKTsvLyBzdGFydCBvYnNlcnZlclxufTtcblxuLyoqXG4gKiBXaGVuIGRvbSBtdXRhdGVkIHRoaXMgZnVuY3Rpb24gaWQgZXhlY3V0ZWQuXG4gKiBAcGFyYW0ge0FycmF5fSBtdXRhdGlvbnMgYXJyYXkgb2YgbXV0YXRpb25zXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5Eb21NdXRhdGlvbnMucHJvdG90eXBlLm9uRG9tTXV0YXRlID0gZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICBjb25zdCBjbGFzc0FycmF5ID0gdGhpcy5pbnN0YW5jZXNDb250cm9sbGVyLmdldENsYXNzZXMoKTsvLyBnZXQgYWxsIHJlZ2lzdGVyZWQgY2xhc3Nlc1xuICBjb25zdCBjbGFzc1NlbGVjdG9yID0gYC4ke2NsYXNzQXJyYXkuam9pbignLC4nKX1gOy8vIGNvbnZlcnQgZm9yIHF1ZXJ5U2VsZWN0b3JBbGwoKVxuICBpZiAoY2xhc3NTZWxlY3Rvci5sZW5ndGggPT09IDEpIHsgLy8gaWYgbm90IHJlZ2lzdGVyZWQgYW55IGluc3RhbmNlVHlwZXNcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbXV0YXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7IC8vIGxvb3Agb3ZlciBtdXRhdGlvbiBhcnJheVxuICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uQXR0cmlidXRlcyhtdXRhdGlvbiwgY2xhc3NBcnJheSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaGFyYWN0ZXJEYXRhJzpcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QobXV0YXRpb24uYWRkZWROb2RlcywgJ2FkZEluc3RhbmNlJywgY2xhc3NTZWxlY3RvciwgY2xhc3NBcnJheSk7XG4gICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uQ2hpbGRMaXN0KG11dGF0aW9uLnJlbW92ZWROb2RlcywgJ3JlbW92ZUluc3RhbmNlJywgY2xhc3NTZWxlY3RvciwgY2xhc3NBcnJheSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyB3cm9uZy4gQ29udGFjdCB0ZWNoIHN1cHBvcnQnKTtcbiAgICB9XG4gIH0sIHRoaXMpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuRG9tTXV0YXRpb25zLnByb3RvdHlwZS5wcm9jZXNzTXV0YXRpb25BdHRyaWJ1dGVzID0gZnVuY3Rpb24gKG11dGF0aW9uLCBjbGFzc0FycmF5KSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IG11dGF0aW9uLnRhcmdldC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgY29uc3Qgb2xkQ2xhc3NlcyA9IChtdXRhdGlvbi5vbGRWYWx1ZSkgPyBtdXRhdGlvbi5vbGRWYWx1ZS5zcGxpdCgnICcpIDogW107XG4gIGNvbnN0IGFkZGVkQ2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmZpbHRlcigodmFsKSA9PiAob2xkQ2xhc3Nlcy5pbmRleE9mKHZhbCkgPT09IC0xKSk7XG4gIGNvbnN0IHJlbW92ZWRDbGFzc2VzID0gb2xkQ2xhc3Nlcy5maWx0ZXIoKHZhbCkgPT4gKGN1cnJlbnRDbGFzc2VzLmluZGV4T2YodmFsKSA9PT0gLTEpKTtcbiAgY29uc3QgYWRkZWRSZWdpc3RlcmVkQ2xhc3NlcyA9IGFkZGVkQ2xhc3Nlcy5maWx0ZXIoKHZhbCkgPT4gKGNsYXNzQXJyYXkuaW5kZXhPZih2YWwpICE9PSAtMSkpO1xuICBjb25zdCByZW1vdmVkUmVnaXN0ZXJlZENsYXNzZXMgPSByZW1vdmVkQ2xhc3Nlcy5maWx0ZXIoKHZhbCkgPT4gKGNsYXNzQXJyYXkuaW5kZXhPZih2YWwpICE9PSAtMSkpO1xuICByZW1vdmVkUmVnaXN0ZXJlZENsYXNzZXMuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgdGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLnJlbW92ZUluc3RhbmNlKHRoYXQuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzKHZhbCksIG11dGF0aW9uLnRhcmdldCk7XG4gIH0pO1xuICBhZGRlZFJlZ2lzdGVyZWRDbGFzc2VzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgIHRoYXQuaW5zdGFuY2VzQ29udHJvbGxlci5hZGRJbnN0YW5jZSh0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyh2YWwpLCBtdXRhdGlvbi50YXJnZXQpO1xuICB9KTtcbn07XG4vKipcbiAqIFByb2Nlc3MgbXV0YXRpb24gb24gQ2hpbGRMaXN0XG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc0xpc3QgYXJyYXkgd2l0aCBub2Rlc1xuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvbiBhY3Rpb24gdG8gY2FsbCAoYWRkIG9yIHJlbW92ZSBub2RlcylcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1NlbGVjdG9yIC0gc3RyaW5nIHNlbGVjdG9yIGZvciBxdWVyeVNlbGVjdG9yQWxsXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc0FycmF5IC0gYXJyYXkgb2YgYWxsIHJlZ2lzdGVyZWQgY2xhc3Nlc1xuICovXG5Eb21NdXRhdGlvbnMucHJvdG90eXBlLnByb2Nlc3NNdXRhdGlvbkNoaWxkTGlzdCA9IGZ1bmN0aW9uIChub2Rlc0xpc3QsIGFjdGlvbiwgY2xhc3NTZWxlY3RvciwgY2xhc3NBcnJheSkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAvKipcbiAgICAgKiBJbnRlcm5hbCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgbm9kZSBjbGFzc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIGRvbSBub2RlXG4gICAgICovXG4gIGZ1bmN0aW9uIGNoZWNrTm9kZShub2RlKSB7XG4gICAgY2xhc3NBcnJheS5mb3JFYWNoKChjbGFzc05hbWUpID0+IHsgLy8gbG9vcCBvdmVyIHJlZ2lzdGVyZWQgY2xhc3Nlc1xuICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHsgLy8gaWYgY2xhc3MgbWF0Y2ggdHJ5IHRvIGFkZCBvciByZW1vdmUgaW5zdGFuY2UgZm9yIHRoaXMgbm9kZVxuICAgICAgICB0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXJbYWN0aW9uXSh0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyhjbGFzc05hbWUpLCBub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIFtdLmZvckVhY2guY2FsbChub2Rlc0xpc3QsICh2YWwpID0+IHsgLy8gbG9vcCBvdmVyIG11dGF0aW9uIG5vZGVzXG4gICAgaWYgKHZhbC5ub2RlVHlwZSAhPT0gMSB8fCB2YWwubm9kZU5hbWUgPT09ICdTQ1JJUFQnIHx8IHZhbC5ub2RlTmFtZSA9PT0gJ0xJTksnKSB7IC8vIGRvIG5vdCBwcm9jZXNzIG90aGVyIG5vZGVzIHRoZW4gRUxFTUVOVF9OT0RFIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlLm5vZGVUeXBlIGFsc28gaWdub3JlIFNDUklQVCBhbmQgTElOSyB0YWdcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2hlY2tOb2RlKHZhbCk7Ly8gY2hlY2sgbXV0YXRpb24gbm9kZVxuICAgIFtdLmZvckVhY2guY2FsbCh2YWwucXVlcnlTZWxlY3RvckFsbChjbGFzc1NlbGVjdG9yKSwgY2hlY2tOb2RlKTsvLyBxdWVyeSBhbGwgbm9kZXMgd2l0aCByZXF1aXJlZCBjbGFzc2VzIGFuZCBjaGVjayBpdFxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn07XG5cbi8qKlxuICogU3RvcCBsaXN0ZW5pbmcgdGhlIGRvbSBjaGFuZ2VzXG4gKi9cbkRvbU11dGF0aW9ucy5wcm90b3R5cGUuc3RvcE9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEb21NdXRhdGlvbnM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIEV2ZW50cyBzeXN0ZW0uXG4gKiBAcGFyYW0ge0FycmF5fSBhbGxvd2VkRXZlbnRzIGFycmF5IG9mIGFsbG93ZWQgZXZlbnRzLlxuICogQGNvbnN0cnVjdHMgRXZlbnRzXG4gKiBAZXhhbXBsZVxuICogLy9hbGxvdyB0byB3b3JrIHdpdGggYWxsIGV2ZW50c1xuICogdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAqIGV2ZW50cy5vbihcIm15QmVzdEV2ZW50XCIsZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9KTtcbiAqIEBleGFtcGxlXG4gKiAvL0FsbG93IHRvIHNlcnZlIG9ubHkgbGltaXRlZCBldmVudHNcbiAqICB2YXIgZXZlbnRzID0gbmV3IEV2ZW50cyhbXCJiZWZvcmVTdWJtaXRcIixcIm9uRGF0YVJlYWR5XCJdKTtcbiAqICBldmVudHMub24oXCJteUJlc3RFdmVudFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7Ly93aWxsIG5vdCB3b3Jrc1xuICogIGV2ZW50cy5vbihcImJlZm9yZVN1Ym1pdFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7Ly93aWxsIHdvcmtcbiAqL1xuY29uc3QgRXZlbnRzID0gZnVuY3Rpb24gKGFsbG93ZWRFdmVudHMpIHtcbiAgdGhpcy5fc3RvcmFnZSA9IHt9O1xuICB0aGlzLl9hbGxvd2VkRXZlbnRzID0gYWxsb3dlZEV2ZW50cztcbn07XG5cbi8qKlxuICogQWRkIGV2ZW50KHMpXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRzIGV2ZW50IG9yIHNwYWNlIHNlcGFyYXRlZCBldmVudCBsaXN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBjYWxsYmFjayBmdW5jdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gKiBldmVudHMub24oXCJteUJlc3RFdmVudCBteUJlc3RFdmVudDIgbXlCZXN0RXZlbnQzXCIsZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9KTtcbiAqIGV2ZW50cy5vbihcIm15QmVzdEV2ZW50XCIsZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9KTtcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudHMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGV2ZW50QXJyID0gZXZlbnRzLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS5zcGxpdCgnICcpO1xuICBldmVudEFyci5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIGV2ZW50IG5vdCBpbnNpZGUgYWxsb3dlZCBldmVudHNcbiAgICBpZiAodGhpcy5fYWxsb3dlZEV2ZW50cyAmJiB0aGlzLl9hbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xuICAgICAgY29uc29sZS53YXJuKCdFdmVudHMuIFRyeSB0byByZWdpc3RlciBldmVudCAlcywgYnV0IGV2ZW50IGlzIG5vdCBhbGxvd2VkJywgZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgaWYgKCF0aGlzLl9zdG9yYWdlLmhhc093blByb3BlcnR5KGV2ZW50cykpIHtcbiAgICAgIHRoaXMuX3N0b3JhZ2VbZXZlbnRdID0gW107XG4gICAgfVxuICAgIHRoaXMuX3N0b3JhZ2VbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICB9LCB0aGlzKTtcbn07XG5cbi8qKlxuICogQWRkIGFjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICogQGRlcHJlY2F0ZWQgIHVzZSBcIm9uXCIgaW5zdGVhZFxuICovXG5FdmVudHMucHJvdG90eXBlLnJlZ2lzdGVyQWN0aW9uID0gRXZlbnRzLnByb3RvdHlwZS5vbjtcblxuXG4vKipcbiAqIHJlbW92ZSBldmVudFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5FdmVudHMucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gIGFsZXJ0KCdZb3UgdHJ5IHRvIHJlbW92ZSBhY3Rpb24uIFRoaXMgcGFydCBpcyBpbmNvbXBsZXRlJyk7XG4gIC8vIFRPRE9cbn07XG5cbi8qKlxuICogVHJpZ2dlciBldmVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBldmVudCBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2tcbiAqIEBleGFtcGxlXG4gKiB2YXIgZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICogZXZlbnRzLm9uKFwibXlCZXN0RXZlbnRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlLmJlc3RLZXkpfSk7XG4gKiBldmVudHMudHJpZ2dlcihcIm15QmVzdEV2ZW50XCIse2Jlc3RLZXk6NDJ9KTsgLy93aWxsIHNob3cgaW4gbG9nXG4gKi9cbkV2ZW50cy5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgb3B0aW9ucykge1xuICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXG4gIGlmICh0aGlzLl9hbGxvd2VkRXZlbnRzICYmIHRoaXMuX2FsbG93ZWRFdmVudHMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKCdFdmVudHMuIFRyeSB0byB0cmlnZ2VyIGV2ZW50ICVzLCBidXQgZXZlbnQgaXMgbm90IGFsbG93ZWQnLCBldmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHRoaXMuX3N0b3JhZ2UuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgZm9yIChsZXQgbiA9IDAsIGwgPSB0aGlzLl9zdG9yYWdlW2V2ZW50XS5sZW5ndGg7IG4gPCBsOyBuICs9IDEpIHtcbiAgICAgIHRoaXMuX3N0b3JhZ2VbZXZlbnRdW25dKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBQZXJmb3JtIGFjdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IFthY3Rpb25QYXJhbXNdIG9iamVjdCB3aXRoIGFsbCBhY3Rpb24gZGF0YSBmcm9tIHNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhamF4IG9wdGlvbnNcbiAqIEBkZXByZWNhdGVkIHVzZSBcInRyaWdnZXJcIiBpbnN0ZWFkXG4gKi9cbkV2ZW50cy5wcm90b3R5cGUucGVyZm9ybUFjdGlvbiA9IEV2ZW50cy5wcm90b3R5cGUudHJpZ2dlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi8gLy8gVE9ETzogP1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogSW5zdGFuY2UgY29udHJvbGxlclxuICogQHBhcmFtIHsqfSBzcGlyYWxcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBJbnN0YW5jZXNDb250cm9sbGVyID0gZnVuY3Rpb24gKHNwaXJhbCkge1xuICB0aGlzLnNwaXJhbCA9IHNwaXJhbDtcbiAgaWYgKCF0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBjYWxsIEluc3RhbmNlc0NvbnRyb2xsZXIgd2l0aCBuZXcgIC0gJ25ldyBJbnN0YW5jZXNDb250cm9sbGVyKCknIFwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5fc3RvcmFnZSA9IHtcbiAgICBpbnN0YW5jZXNDb25zdHJ1Y3RvcnM6IHtcbiAgICAgIGNzc0NsYXNzZXM6IHt9LFxuICAgICAganNDb25zdHJ1Y3RvcnM6IHt9LFxuICAgIH0sXG4gICAgYWRkb25zOiB7fSxcbiAgICBpbnN0YW5jZXM6IHt9LFxuICB9O1xuXG4gIC8vIHRvZG8gZGVjaWRlIGlmIHdlIG5lZWQgdGhpc1xuICAvLyBbXCJvbkFkZEluc3RhbmNlXCIsIFwib25SZW1vdmVJbnN0YW5jZVwiXVxuICAvLyB0aGlzLmV2ZW50cyA9IG5ldyBzcGlyYWwubW9kdWxlcy5jb3JlLkV2ZW50cygpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBuZXcgaW5zdGFuY2UgdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3JGdW5jdGlvbiAtIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIGluc3RhbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gW2Nzc0NsYXNzTmFtZV0gLSBjc3MgY2xhc3MgbmFtZSBvZiBpbnN0YW5jZS4gSWYgY2xhc3Mgbm90IHByb3ZpZGVkIHRoYXQgaXQgY2FuJ3QgYmUgYXV0b21hdGljYWxseVxuICogY29udHJvbGxlZCBieSBEb21NdXRhdGlvbi4gQnV0IHlvdSBzdGlsbCBjYW4gdXNlIGl0IGZyb20gSlMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtpc1NraXBJbml0aWFsaXphdGlvbj1mYWxzZV0gIC0gc2tpcCBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24sIGp1c3QgYWRkaW5nLCBubyBpbml0IG5vZGVzLlxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5yZWdpc3Rlckluc3RhbmNlVHlwZSA9IGZ1bmN0aW9uIChjb25zdHJ1Y3RvckZ1bmN0aW9uLCBjc3NDbGFzc05hbWUsIGlzU2tpcEluaXRpYWxpemF0aW9uKSB7XG4gIGNvbnN0IGluc3RhbmNlTmFtZSA9IGNvbnN0cnVjdG9yRnVuY3Rpb24uc3BpcmFsRnJhbWV3b3JrTmFtZSB8fCBjb25zdHJ1Y3RvckZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lO1xuXG4gIGlmICghaW5zdGFuY2VOYW1lKSB7XG4gICAgY29uc29sZS5lcnJvcignSW5zdGFuY2UgY29uc3RydWN0b3Igc2hvdWxkIGhhdmUgbmFtZSBpbnNpZGUgaXQnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmpzQ29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KGluc3RhbmNlTmFtZSkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSW5zdGFuY2UgQ29uc3RydWN0b3IgZm9yIHR5cGUgJyVzJyBhbHJlYWR5IGFkZGVkLiBTa2lwcGluZ1wiLCBpbnN0YW5jZU5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjc3NDbGFzc05hbWUpIHsgLy8gYWRkIGxpbmsgKGNzc0NsYXNzTmFtZS0+aW5zdGFuY2VOYW1lKVxuICAgIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmNzc0NsYXNzZXNbY3NzQ2xhc3NOYW1lXSA9IGluc3RhbmNlTmFtZTtcbiAgfVxuXG4gIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmpzQ29uc3RydWN0b3JzW2luc3RhbmNlTmFtZV0gPSBjb25zdHJ1Y3RvckZ1bmN0aW9uO1xuXG4gIC8vIGlmICh0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc05hbWUpKXtcbiAgLy8gICAgY29uc29sZS5lcnJvcihcIkluc3RhbmNlIENvbnN0cnVjdG9yIGZvciB0eXBlICVzIGFscmVhZHkgYWRkZWQuIFNraXBwaW5nXCIsY29uc3RydWN0b3JGdW5jdGlvbi5wcm90b3R5cGUubmFtZSk7XG4gIC8vICAgIHJldHVybjtcbiAgLy8gfVxuICAvLyB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9yc1tjbGFzc05hbWVdID0gey8vaW5pdCBzdG9yYWdlIGZpZWxkc1xuICAvLyAgICBcInR5cGVOYW1lXCI6IGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUsXG4gIC8vICAgIFwiY29uc3RydWN0b3JcIjogY29uc3RydWN0b3JGdW5jdGlvblxuICAvLyB9O1xuICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdID0gW107XG4gIGlmICghaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcbiAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY3NzQ2xhc3NOYW1lKTsvLyBpbml0IGFkZCBub2RlcyB3aXRoIHRoaXMgY2xhc3NcbiAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbm9kZXMubGVuZ3RoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgIHRoaXMuYWRkSW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2Rlc1tpXSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIE9sZCBtZXRob2QgdG8gcmVnaXN0ZXIgaW5zdGFuY2UgdHlwZVxuICogQHBhcmFtIHsqfSBjbGFzc05hbWVcbiAqIEBwYXJhbSB7Kn0gY29uc3RydWN0b3JGdW5jdGlvblxuICogQHBhcmFtIHsqfSBpc1NraXBJbml0aWFsaXphdGlvblxuICogQHJldHVybiB7Kn1cbiAqIEBkZXByZWNhdGVkXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmFkZEluc3RhbmNlVHlwZSA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIGNvbnN0cnVjdG9yRnVuY3Rpb24sIGlzU2tpcEluaXRpYWxpemF0aW9uKSB7XG4gIGNvbnNvbGUud2FybignYWRkSW5zdGFuY2VUeXBlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgcmVnaXN0ZXJJbnN0YW5jZVR5cGUgaW5zdGVhZCcpO1xuICByZXR1cm4gdGhpcy5yZWdpc3Rlckluc3RhbmNlVHlwZShjb25zdHJ1Y3RvckZ1bmN0aW9uLCBpc1NraXBJbml0aWFsaXphdGlvbik7XG59O1xuXG5cbi8qKlxuICogQWRkIGluc3RhbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgLSBkb20gbm9kZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyBmb3Igc2VuZCB0byB0aGUgY29uc3RydWN0b3JcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmFkZEluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSwgbm9kZSwgb3B0aW9ucykge1xuICBjb25zdCBJbnN0YW5jZUNvbnN0cnVjdG9yID0gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXTtcbiAgY29uc3QgaXNBbHJlYWR5QWRkZWQgPSB0aGlzLmdldEluc3RhbmNlKGluc3RhbmNlTmFtZSwgbm9kZSk7XG5cbiAgaWYgKCFJbnN0YW5jZUNvbnN0cnVjdG9yIHx8IGlzQWxyZWFkeUFkZGVkKSB7IC8vIGlmIG5vdCBmb3VuZCB0aGlzIHR5cGUgIG9yIGFscmVhZHkgYWRkZWQgLSByZXR1cm5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZUNvbnN0cnVjdG9yKHRoaXMuc3BpcmFsLCBub2RlLCBvcHRpb25zKTtcbiAgdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXS5wdXNoKHsgLy8gYWRkIG5ldyBpbnN0YW5jZSBvZiB0aGlzIHR5cGVcbiAgICBub2RlLFxuICAgIGluc3RhbmNlLFxuICB9KTtcblxuICAvLyB0aGlzLmV2ZW50cy50cmlnZ2VyKFwib25BZGRJbnN0YW5jZVwiLCBpbnN0YW5jZSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZSBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBub2RlIC0gZG9tIG5vZGUgSURcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSwgbm9kZSkge1xuICBjb25zdCBpbnN0YW5jZU9iaiA9IHRoaXMuZ2V0SW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlLCB0cnVlKTtcblxuICBpZiAoIWluc3RhbmNlT2JqKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGluc3RhbmNlT2JqLmluc3RhbmNlLmRpZSgpOy8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGNvbnN0IGtleSA9IHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0uaW5kZXhPZihpbnN0YW5jZU9iaik7XG4gIGlmIChrZXkgIT09IC0xKSB7IC8vIHJlbW92ZSBrZXlcbiAgICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdLnNwbGljZShrZXksIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgaW5zdGFuY2UuIFJldHVybiBpbnN0YW5jZSBvYmplY3Qgb2YgdGhpcyBkb20gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSAtIG5hbWUgb2YgaW5zdGFuY2VcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbm9kZSAtIGRvbSBub2RlIG8gZG9tZSBub2RlIElEXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1JldHVybk9iamVjdF0gLSByZXR1cm4gb2JqZWN0IG9yIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIChpbnN0YW5jZU5hbWUsIG5vZGUsIGlzUmV0dXJuT2JqZWN0KSB7XG4gIC8vIFRPRE8gaXNSZXR1cm5PYmplY3Qgbm90IG5lZWRlZC4gUmVmYWN0b3IgYW5kIHJlbW92ZVxuXG4gIGNvbnN0IHR5cGVBcnIgPSB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdO1xuICBsZXQgcmV0ID0gZmFsc2U7XG4gIGlmICghdHlwZUFycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBub2RlID0gKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgPyBub2RlIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobm9kZSk7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBrZXkgPSAwLCBsID0gdHlwZUFyci5sZW5ndGg7IGtleSA8IGw7IGtleSArPSAxKSB7IC8vIGl0ZXJhdGUgc3RvcmFnZSBhbmQgdHJ5IHRvIGZpbmQgaW5zdGFuY2VcbiAgICBpZiAodHlwZUFycltrZXldLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgIHJldCA9IChpc1JldHVybk9iamVjdCkgPyB0eXBlQXJyW2tleV0gOiB0eXBlQXJyW2tleV0uaW5zdGFuY2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbi8qKlxuICogR2V0IGluc3RhbmNlcy4gUmV0dXJuIGFycmF5IG9mIGluc3RhbmNlcyBvYmplY3RzXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxuICogQHJldHVybiB7YXJyYXl8Ym9vbGVhbn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2VzID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSkge1xuICByZXR1cm4gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXSB8fCBmYWxzZTtcbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlciBhZGRvbiBmb3IgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhZGRvblxuICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSBuYW1lIG9mIGluc3RhbmNlIHRvIHJlZ2lzdGVyIGFkZG9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkb25UeXBlIHR5cGUgb2YgYWRkb24gKG1lc3NhZ2UsZmlsbCxldGMpXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkb25OYW1lIG5hbWUgb2YgYWRkb24gKHNwaXJhbCwgYm9vdHN0cmFwLGV0YylcbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUucmVnaXN0ZXJBZGRvbiA9IGZ1bmN0aW9uIChhZGRvbiwgaW5zdGFuY2VOYW1lLCBhZGRvblR5cGUsIGFkZG9uTmFtZSkge1xuICBpZiAoIXRoaXMuX3N0b3JhZ2UuYWRkb25zLmhhc093blByb3BlcnR5KGluc3RhbmNlTmFtZSkpIHtcbiAgICB0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdID0ge307XG4gIH1cbiAgaWYgKCF0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdLmhhc093blByb3BlcnR5KGFkZG9uVHlwZSkpIHtcbiAgICB0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV0gPSB7fTtcbiAgfVxuICBpZiAodGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdLmhhc093blByb3BlcnR5KGFkZG9uTmFtZSkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgJXMgYWRkb24gdHlwZSAlcyBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIGluc3RhbmNlICVzISBTa2lwcGluZyByZWdpc3RyYXRpb24uJywgYWRkb25OYW1lLCBhZGRvblR5cGUsIGluc3RhbmNlTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXVthZGRvbk5hbWVdID0gYWRkb247XG59O1xuXG4vKipcbiAqIEdldCByZWdpc3RlcmVkIGFkZG9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIG5hbWUgb2YgaW5zdGFuY2UgdG8gcmVnaXN0ZXIgYWRkb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRvblR5cGUgdHlwZSBvZiBhZGRvbiAobWVzc2FnZSxmaWxsLGV0YylcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRvbk5hbWUgbmFtZSBvZiBhZGRvbiAoc3BpcmFsLCBib290c3RyYXAsZXRjKVxuICogQHJldHVybiB7Kn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2VBZGRvbiA9IGZ1bmN0aW9uIChpbnN0YW5jZU5hbWUsIGFkZG9uVHlwZSwgYWRkb25OYW1lKSB7XG4gIGlmICghdGhpcy5fc3RvcmFnZS5hZGRvbnMuaGFzT3duUHJvcGVydHkoaW5zdGFuY2VOYW1lKVxuICAgICAgICB8fCAhdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXS5oYXNPd25Qcm9wZXJ0eShhZGRvblR5cGUpXG4gICAgICAgIHx8ICF0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV0uaGFzT3duUHJvcGVydHkoYWRkb25OYW1lKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdW2FkZG9uTmFtZV07XG59O1xuXG5cbi8qKlxuICogR2V0IGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlcyk7XG59O1xuXG4vKipcbiAqIEZvciBnaXZlbiBjc3NDbGFzcyByZXR1cm4gbmFtZSBvZiBpbnN0YW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzXG4gKiBAcmV0dXJuIHsqfVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzID0gZnVuY3Rpb24gKGNzc0NsYXNzKSB7XG4gIHJldHVybiB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5jc3NDbGFzc2VzW2Nzc0NsYXNzXTtcbn07XG5cbi8qKlxuICogR2V0IGNvbnN0cnVjdG9yIGJ5IG5hbWUgb3IgY2xhc3MgbmFtZVxuICogQHBhcmFtIHsqfSBuYW1lXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEluc3RhbmNlQ29uc3RydWN0b3JzID0gZnVuY3Rpb24gKCkge1xuICAvLyBUT0RPXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluc3RhbmNlc0NvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogVGhpcyBwbHVnaW4gYWRkcyBhYmlsaXR5IHRvIHBlcmZvcm0gYWN0aW9ucyBmcm9tIHRoZSBzZXJ2ZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIFwiYWN0aW9uXCI6XCJyZWxvYWRcIlxuICogXCJhY3Rpb25cIjp7XCJyZWRpcmVjdFwiOlwiL2FjY291bnRcIn1cbiAqIFwiYWN0aW9uXCI6e1wicmVkaXJlY3RcIjpcIi9hY2NvdW50XCIsXCJkZWxheVwiOjMwMDB9XG4gKiBcImFjdGlvblwiOntcIm5hbWVcIjpcInJlZGlyZWN0XCIsXCJ1cmxcIjpcIi9hY2NvdW50XCIsXCJkZWxheVwiOjMwMDB9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNmKSB7XG4gIHNmLmFqYXguZXZlbnRzLm9uKCdsb2FkJywgKG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBvcHRpb25zO1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmRhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG4gICAgaWYgKCFkYXRhLmFjdGlvbikgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhLmFjdGlvbiA9PT0gJ3N0cmluZycpIHsgLy8gXCJhY3Rpb25cIjpcInJlbG9hZFwiXG4gICAgICBzZi5ldmVudHMudHJpZ2dlcihkYXRhLmFjdGlvbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5hY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YS5hY3Rpb24pO1xuICAgICAgLy8gVE9ETzogbm90aWZpY2F0aW9uc1xuICAgICAgLy8gaWYgKGtleXMuaW5kZXhPZignZmxhc2gnKSAhPT0gLTEpIHtcbiAgICAgIC8vICAgY29uc3QgeyBmbGFzaCB9ID0gZGF0YS5hY3Rpb247XG4gICAgICAvLyAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAvLyAgIGxldCBzZkZsYXNoTWVzc2FnZSA9IHt9O1xuXG4gICAgICAvLyAgIGlmICh0eXBlb2YgZGF0YS5hY3Rpb24uZmxhc2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UgPSBmbGFzaDtcbiAgICAgIC8vICAgICBzZkZsYXNoTWVzc2FnZS50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UgPSB7XG4gICAgICAvLyAgICAgICBtZXNzYWdlOiBmbGFzaCxcbiAgICAgIC8vICAgICAgIHRpbWVzdGFtcCxcbiAgICAgIC8vICAgICB9O1xuICAgICAgLy8gICB9XG5cbiAgICAgIC8vICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2ZGbGFzaE1lc3NhZ2UnLCBKU09OLnN0cmluZ2lmeShzZkZsYXNoTWVzc2FnZSkpO1xuICAgICAgLy8gfVxuXG4gICAgICBpZiAoa2V5cy5pbmRleE9mKCdyZWRpcmVjdCcpICE9PSAtMSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZi5ldmVudHMudHJpZ2dlcigncmVkaXJlY3QnLCBkYXRhLmFjdGlvbi5yZWRpcmVjdCwgb3B0aW9ucyk7XG4gICAgICAgIH0sICtkYXRhLmFjdGlvbi5kZWxheSB8fCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5cy5pbmRleE9mKCduYW1lJykgIT09IC0xKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNmLmV2ZW50cy50cmlnZ2VyKGRhdGEuYWN0aW9uLm5hbWUsIGRhdGEuYWN0aW9uLnVybCk7XG4gICAgICAgIH0sICtkYXRhLmFjdGlvbi5kZWxheSB8fCAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignQWN0aW9uIGZyb20gc2VydmVyLiBTb21ldGhpbmcgd3JvbmcuICcsIGRhdGEuYWN0aW9uKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIChmdW5jdGlvbiAoc2ZGbGFzaE1lc3NhZ2UpIHtcbiAgLy8gICBpZiAoIXNmRmxhc2hNZXNzYWdlKSByZXR1cm47XG5cbiAgLy8gICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShzZkZsYXNoTWVzc2FnZSk7XG4gIC8vICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgLy8gICBsZXQgZmxhc2hDbGFzcztcblxuICAvLyAgIGlmICh0aW1lc3RhbXAgLSBtZXNzYWdlLnRpbWVzdGFtcCA+IDEwMDAwKSByZXR1cm47XG5cbiAgLy8gICBpZiAobWVzc2FnZS50eXBlID09PSAnZGVidWcnIHx8IG1lc3NhZ2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gIC8vICAgICBmbGFzaENsYXNzID0gJ2RlYnVnJztcbiAgLy8gICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2luZm8nIHx8ICFtZXNzYWdlLnR5cGUgfHwgbWVzc2FnZS50eXBlID09PSAnbm90aWNlJykge1xuICAvLyAgICAgZmxhc2hDbGFzcyA9ICdpbmZvJztcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgZmxhc2hDbGFzcyA9ICdkYW5nZXInO1xuICAvLyAgIH1cblxuICAvLyAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gICBjb25zdCBub2RlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIG5vZGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoLXdyYXBwZXInKTtcbiAgLy8gICBub2RlLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoJywgZmxhc2hDbGFzcyk7XG4gIC8vICAgbm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlV3JhcHBlcik7XG4gIC8vICAgbm9kZVdyYXBwZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIG5vZGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgLy8gICB9LCAxKTtcblxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgbm9kZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAvLyAgIH0sIG1lc3NhZ2UudGltZW91dCB8fCA1MDAwKTtcblxuICAvLyAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3NmRmxhc2hNZXNzYWdlJyk7XG4gIC8vIH0oc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2ZGbGFzaE1lc3NhZ2UnKSkpO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2VFdmVudHMoZXZlbnRzKSB7XG4gIGV2ZW50cy5vbigncmVkaXJlY3QnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB1cmwgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXZlbnQpID09PSAnW29iamVjdCBTdHJpbmddJyA/IGV2ZW50IDogZXZlbnQudXJsO1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA2ODcwOTkvaG93LXRvLXRlc3QtaWYtYS11cmwtc3RyaW5nLWlzLWFic29sdXRlLW9yLXJlbGF0aXZlXG4gICAgY29uc3QgaXNBYnNvbHV0ZSA9IC9eKD86W2Etel0rOik/XFwvXFwvL2kudGVzdCh1cmwpO1xuICAgIGlmIChpc0Fic29sdXRlKSB7XG4gICAgICBzZWxmLmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICB8fCAoYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9JHt3aW5kb3cubG9jYXRpb24ucG9ydCA/IGA6JHt3aW5kb3cubG9jYXRpb24ucG9ydH1gIDogJyd9YCk7XG4gICAgICBzZWxmLmxvY2F0aW9uLmhyZWYgPSBvcmlnaW4gKyAoKHVybC5jaGFyQXQoMCkgPT09ICcvJykgPyB1cmwgOiAoYC8ke3VybH1gKSk7IC8vIFJlbGF0aXZlIHBhdGhcbiAgICB9XG4gIH0pO1xuXG4gIGV2ZW50cy5vbigncmVsb2FkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbiAgZXZlbnRzLm9uKCdyZWZyZXNoJywgKCkgPT4ge1xuICAgIGV2ZW50cy50cmlnZ2VyKCdyZWxvYWQnKTtcbiAgfSk7XG5cbiAgZXZlbnRzLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICBzZWxmLmNsb3NlKCk7XG4gIH0pO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIEhlbHBlciB0byBtYW5pcHVsYXRlIERPTSBFdmVudHMuIEl0J3MgYSBzaW1wbGUgd3JhcHBlciBhcm91bmQgXCJhZGRFdmVudExpc3RlbmVyXCIgYnV0IGl0J3Mgc3RvcmUgYWxsIGZ1bmN0aW9ucyBhbmQgYWxsb3cgdXMgdG8gcmVtb3ZlIGl0IGFsbC5cbiAqIEl0J3MgdmVyeSBoZWxwZnVsIGZvciBkaWUoKSBtZXRob2Qgb2YgaW5zdGFuY2VzXG4gKiBAVE9ETyBhZGQgdG8gbWFueSBub2Rlc1xuICogQFRPRE8gbmV3IG1ldGhvZCBsaWtlIGFkZEV2ZW50TGlzdGVuZXIgIERPTUV2ZW50cy5vbihub2RlKHMpLGV2ZW50LGNhbGxiYWNrLHVzZUNhcHR1cmUpO1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IERPTUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAgICogSW50ZXJuYWwgc3RvcmFnZSBmb3IgZXZlbnRzXG4gICAgICogQHByb3BlcnR5IHtBcnJheS48T2JqZWN0Pn0gRE9NRXZlbnRzIC0gZG9tIGV2ZW50cyBhcnJheVxuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBET01FdmVudHMuRE9NTm9kZSAtICAgRE9NIG5vZGVcbiAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gRE9NRXZlbnRzLmV2ZW50VHlwZSAtICAgRXZlbnQgdHlwZVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IERPTUV2ZW50cy5ldmVudEZ1bmN0aW9uIC0gICBGdW5jdGlvblxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gRE9NRXZlbnRzLnVzZUNhcHR1cmU9ZmFsc2UgLSAgIHVzZUNhcHR1cmVcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gLi4uIC0gICBhbm90aGVyIG9iamVjdFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gIHRoaXMuX0RPTUV2ZW50c1N0b3JhZ2UgPSBbXTtcbn07XG4vKipcbiAqIEFkZCBldmVudChzKSB0byBub2RlKHMpLlxuICogQFRPRE8gYWRkIHRvIG1hbnkgbm9kZXNcbiAqIEBwYXJhbSB7QXJyYXkuPE9iamVjdD58T2JqZWN0fSBldmVudEFycmF5IC0gZXZlbnQgYXJyYXkgb3IgZXZlbnQgaXRzZWxmXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRBcnJheS5ET01Ob2RlIC0gICBET00gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50QXJyYXkuZXZlbnRUeXBlIC0gICBFdmVudCB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBldmVudEFycmF5LmV2ZW50RnVuY3Rpb24gLSAgIEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtldmVudEFycmF5LnVzZUNhcHR1cmU9ZmFsc2VdIC0gICB1c2VDYXB0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIERPTUV2ZW50c0luc3RhbmNlID0gbmV3IERPTUV2ZW50cygpO1xuICogdmFyIGV2ZW50T25lID0ge1xuICogICAgICBET01Ob2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIiksXG4gKiAgICAgIGV2ZW50VHlwZTogXCJjbGlja1wiLFxuICogICAgICBldmVudEZ1bmN0aW9uOiBmdW5jdGlvbiAoZSkge1xuICogICAgICAgICAgY29uc29sZS5sb2coXCJIaSB0aGVyZS4gTmF0aXZlICBET00gZXZlbnRzIGlzOlwiLGUpO1xuICogICAgICB9XG4gKiB9XG4gKiAgdmFyIGV2ZW50VHdvID0ge1xuICogICAgICBET01Ob2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGUyXCIpLFxuICogICAgICBldmVudFR5cGU6IFwibW91c2Vkb3duXCIsXG4gKiAgICAgIGV2ZW50RnVuY3Rpb246IGZ1bmN0aW9uIChlKSB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpIHRoZXJlLiBtb3VzZWRvd24gZXZlbnQuIE5hdGl2ZSAgRE9NIGV2ZW50cyBpczpcIixlKTtcbiAqICAgICAgfVxuICogfVxuICogIERPTUV2ZW50c0luc3RhbmNlLmFkZChbZXZlbnRPbmUsZXZlbnRUd29dKTtcbiAqL1xuRE9NRXZlbnRzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZXZlbnRBcnJheSkge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFtdKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGV2ZW50QXJyYXkgPSBbZXZlbnRBcnJheV07XG4gIH1cbiAgZXZlbnRBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YWwudXNlQ2FwdHVyZSA9ICEhKHZhbC51c2VDYXB0dXJlKTtcbiAgICB2YWwuRE9NTm9kZS5hZGRFdmVudExpc3RlbmVyKHZhbC5ldmVudFR5cGUsIHZhbC5ldmVudEZ1bmN0aW9uLCB2YWwudXNlQ2FwdHVyZSk7XG4gICAgdGhpcy5fRE9NRXZlbnRzU3RvcmFnZS5wdXNoKHZhbCk7XG4gIH0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgZXZlbnRzXG4gKiBAcGFyYW0ge0FycmF5LjxPYmplY3Q+fSBldmVudEFycmF5IC0gZXZlbnQgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudEFycmF5LkRPTU5vZGUgLSAgIERPTSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRBcnJheS5ldmVudFR5cGUgLSAgIEV2ZW50IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV2ZW50QXJyYXkuZXZlbnRGdW5jdGlvbiAtICAgRnVuY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2V2ZW50QXJyYXkudXNlQ2FwdHVyZT1mYWxzZV0gLSAgIHVzZUNhcHR1cmVcbiAqL1xuRE9NRXZlbnRzLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoLyogZXZlbnRBcnJheSAqLykge1xuICAvLyBUT0RPIElNUExFTUVOVFxuICAvLyBUT0RPINC90LUg0YPQstC10YDQtdC9INGH0YLQviDRjdGC0L7RgiDQvNC10YLQvtC0INC90LXQvtCx0YXQvtC00LjQvC4g0LXRgdC70Lgg0L3QsNC00L4g0YfQsNGB0YLQviDRg9Cx0LjRgNCw0YLRjCDQutCw0LrQuNC10YLQviDQvtCx0YDQsNCx0L7RgtGH0LjQutC4LCDRgtC+INC70YPRh9GI0LUg0L/QvtGB0YLQsNCy0LjRgtGMINC+0LHRgNCw0LHQvtGC0YfQutC4INC90LAg0YDQvtC00LjRgtC10LvRj1xuICBjb25zb2xlLndhcm4oJ1RPRE8gSU1QTEVNRU5UJyk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgZG9tIGV2ZW50cyByZWdpc3RlcmVkIHdpdGggdGhpcyBpbnN0YW5jZSAoYWRkZWQgYnkgbWV0aG9kIGFkZClcbiAqIEBleGFtcGxlXG4gKiAvL2xvb2sgYXQgYWRkIG1ldGhvZCBhcyBmaXJzdCBwYXJ0IG9mIHRoaXMgY29kZVxuICogRE9NRXZlbnRzSW5zdGFuY2UucmVtb3ZlQWxsKCk7XG4gKi9cbkRPTUV2ZW50cy5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9ET01FdmVudHNTdG9yYWdlLmZvckVhY2goKHZhbCkgPT4ge1xuICAgIHZhbC5ET01Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodmFsLmV2ZW50VHlwZSwgdmFsLmV2ZW50RnVuY3Rpb24sIHZhbC51c2VDYXB0dXJlKTtcbiAgfSk7XG4gIHRoaXMuX0RPTUV2ZW50c1N0b3JhZ2UgPSBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NRXZlbnRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qKlxuIFRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHVzZWZ1bCBET00gdG9vbHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAgICogRm91bmQgZmlyc3QgcGFyZW50IG5vZGUgd2l0aCBtYXRjaGVkIHNlbGVjdG9yKHMpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBkb20gbm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBzZWxlY3RvcnMgLSBzZWxlY3RvciBvciBhcnJheSBvZiBzZWxlY3RvcnNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fCBCb29sZWFufSAtIG5vZGUgb3IgZmFsc2VcbiAgICAgKi9cblxuICBjbG9zZXN0KGVsZW0sIHNlbGVjdG9ycykge1xuICAgIHNlbGVjdG9ycyA9ICh0eXBlb2Ygc2VsZWN0b3JzID09PSAnc3RyaW5nJykgPyBbc2VsZWN0b3JzXSA6IHNlbGVjdG9ycztcbiAgICBsZXQga2V5O1xuICAgIGNvbnN0IGwgPSBzZWxlY3RvcnMubGVuZ3RoO1xuICAgIGNvbnN0IG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgd2hpbGUgKGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGw7IGtleSArPSAxKSB7XG4gICAgICAgIGlmIChtYXRjaGVzU2VsZWN0b3IuY2FsbChlbGVtLCBzZWxlY3RvcnNba2V5XSkpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICAvKipcbiAgICAgKiBGb3VuZCBmaXJzdCBwYXJlbnQgbm9kZSB3aXRoIG1hdGNoZWQgY2xhc3NOYW1lKHMpLlxuICAgICAqIFRPRE8gV2h5IHRoaXM/IEJlY2F1c2Ugb2xkIElFLi4uLlxuICAgICAqIFRPRE8gSXQncyBub3QgZ29vZCwgYmVjYXVzZSBpdCdzIGEgY29weSBvZiBjbG9zZXN0IEBzZWUgY2xvc2VzdC4gUmVmYWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIGRvbSBub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGNsYXNzTmFtZSAtIGNsYXNzTmFtZSBvciBhcnJheSBvZiBjbGFzc05hbWVzXG4gICAgICogQHJldHVybnMge09iamVjdHwgQm9vbGVhbn0gLSBub2RlIG9yIGZhbHNlXG4gICAgICovXG5cbiAgY2xvc2VzdEJ5Q2xhc3NOYW1lKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGNsYXNzTmFtZSA9ICh0eXBlb2YgY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBbY2xhc3NOYW1lXSA6IGNsYXNzTmFtZTtcbiAgICBsZXQga2V5O1xuICAgIGNvbnN0IGwgPSBjbGFzc05hbWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGw7IGtleSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYChcXFxcc3xeKSR7Y2xhc3NOYW1lW2tleV19KFxcXFxzfCQpYCk7XG4gICAgICAgIGlmIChlbGVtLmNsYXNzTmFtZS5tYXRjaChyZWcpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxuLyoqXG4gKiBAbW9kdWxlIHRvb2xzXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmNvbnN0IHRvb2xzID0ge1xuICByZXNvbHZlS2V5UGF0aChwYXRoLCBvYmosIHNhZmUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgocHJldiwgY3VycikgPT4gKCFzYWZlID8gcHJldltjdXJyXSA6IChwcmV2ID8gcHJldltjdXJyXSA6IHVuZGVmaW5lZCkpLCBvYmogfHwgc2VsZik7XG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvb2xzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgc3BpcmFsLXNwZWNpZmljIHNmIGJ1bmRsZVxuICogVE9ETzogVGhpcyB3cmFwcGluZyBsb29rcyB2ZXJ5IGZpc2h5LCB3aHkgd2UgbmVlZCBpdD8gTW92ZSB0byB0b29sa2l0IG1heSBiZT9cbiAqL1xuY29uc3Qgc2YgPSByZXF1aXJlKCcuL3NmJyk7XG5cbmNvbnN0IHNmV3JhcHBlciA9IHtcbiAgY29yZTogc2YuY29yZSxcbiAgaGVscGVyczogc2YuaGVscGVycyxcbiAgdG9vbHM6IHNmLnRvb2xzLFxufTtcblxuLy8gQWRkIGNvbnNvbGUgc2hpbSBmb3Igb2xkIElFXG5yZXF1aXJlKCcuL3NoaW0vY29uc29sZScpO1xucmVxdWlyZSgnLi9zaGltL09iamVjdC5hc3NpZ24nKTtcblxuaWYgKCFzZldyYXBwZXIuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSkgc2ZXcmFwcGVyLm9wdGlvbnMgPSB7IGluc3RhbmNlczoge30gfTtcbmlmICghc2ZXcmFwcGVyLm9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2luc3RhbmNlcycpKSBzZldyYXBwZXIub3B0aW9ucy5pbnN0YW5jZXMgPSB7fTtcblxuc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIgPSBuZXcgc2ZXcmFwcGVyLmNvcmUuSW5zdGFuY2VzQ29udHJvbGxlcihzZldyYXBwZXIpO1xuc2ZXcmFwcGVyLmRvbU11dGF0aW9uID0gbmV3IHNmV3JhcHBlci5jb3JlLkRvbU11dGF0aW9ucyhzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5cbi8vIEV2ZW50cyBzeXN0ZW1cbnNmV3JhcHBlci5ldmVudHMgPSBuZXcgc2ZXcmFwcGVyLmNvcmUuRXZlbnRzKCk7XG5yZXF1aXJlKCcuL2NvcmUvZXZlbnRzL2Jhc2VFdmVudHMuanMnKShzZldyYXBwZXIuZXZlbnRzKTtcblxuLy8gQUpBWFxuc2ZXcmFwcGVyLmFqYXggPSBuZXcgc2ZXcmFwcGVyLmNvcmUuQWpheCh3aW5kb3cgJiYgd2luZG93LmNzcmZUb2tlbiA/IHtcbiAgLy8gVE9ETyBtb3ZlIHRvIHNwaXJhbCBiaW5kaW5nc1xuICBoZWFkZXJzOiB7XG4gICAgJ1gtQ1NSRi1Ub2tlbic6IHdpbmRvdy5jc3JmVG9rZW4sXG4gIH0sXG59IDogbnVsbCk7XG5cbi8vIEFDVElPTlNcbnJlcXVpcmUoJy4vY29yZS9hamF4L2Jhc2VBY3Rpb25zLmpzJykoc2ZXcmFwcGVyKTtcblxuLy8gQVBJXG5zZldyYXBwZXIuY3JlYXRlTW9kdWxlUHJvdG90eXBlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShzZldyYXBwZXIuY29yZS5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlKTtcbn07XG5cbnNmV3JhcHBlci5yZWdpc3Rlckluc3RhbmNlVHlwZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLnJlZ2lzdGVySW5zdGFuY2VUeXBlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuc2ZXcmFwcGVyLmFkZEluc3RhbmNlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIuYWRkSW5zdGFuY2UuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5zZldyYXBwZXIucmVtb3ZlSW5zdGFuY2UgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5yZW1vdmVJbnN0YW5jZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcbnNmV3JhcHBlci5nZXRJbnN0YW5jZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuc2ZXcmFwcGVyLmdldEluc3RhbmNlcyA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlcy5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcblxuc2ZXcmFwcGVyLmNsb3Nlc3QgPSBzZi5oZWxwZXJzLmRvbVRvb2xzLmNsb3Nlc3Q7XG5zZldyYXBwZXIucmVzb2x2ZUtleVBhdGggPSBzZi50b29scy5yZXNvbHZlS2V5UGF0aDtcblxubW9kdWxlLmV4cG9ydHMgPSBzZldyYXBwZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuXG5jb25zdCBjb3JlID0ge1xuICBBamF4OiByZXF1aXJlKCcuL2NvcmUvQWpheCcpLFxuICBCYXNlRE9NQ29uc3RydWN0b3I6IHJlcXVpcmUoJy4vY29yZS9CYXNlRE9NQ29uc3RydWN0b3InKSxcbiAgRG9tTXV0YXRpb25zOiByZXF1aXJlKCcuL2NvcmUvRG9tTXV0YXRpb25zJyksXG4gIEV2ZW50czogcmVxdWlyZSgnLi9jb3JlL0V2ZW50cycpLFxuICBJbnN0YW5jZXNDb250cm9sbGVyOiByZXF1aXJlKCcuL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlcicpLFxufTtcblxuY29uc3QgaGVscGVycyA9IHtcbiAgRE9NRXZlbnRzOiByZXF1aXJlKCcuL2hlbHBlcnMvRE9NRXZlbnRzJyksXG4gIGRvbVRvb2xzOiByZXF1aXJlKCcuL2hlbHBlcnMvZG9tVG9vbHMnKSxcbiAgLy8gTGlrZUZvcm1EYXRhOiByZXF1aXJlKCcuL2hlbHBlcnMvTGlrZUZvcm1EYXRhJyksXG4gIC8vIHRvb2xzOiByZXF1aXJlKCcuL2hlbHBlcnMvdG9vbHMnKSxcbn07XG5cbmNvbnN0IHNmID0ge1xuICBjb3JlLFxuICBoZWxwZXJzLFxuICB0b29sczogcmVxdWlyZSgnLi9oZWxwZXJzL3Rvb2xzJyksXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNmO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyoqXG4gKiBPYmplY3QuYXNzaWduIHBvbHlmaWxsXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG4gKi9cbmlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdXRwdXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgY29uc3Qgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIHNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgICAgIC8vIGZvciAoY29uc3QgbmV4dEtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goKG5leHRLZXkpID0+IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgb3V0cHV0W25leHRLZXldID0gc291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG4gIH0oKSk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKipcbiAqIEF2b2lkIGBjb25zb2xlYCBlcnJvcnMgaW4gYnJvd3NlcnMgdGhhdCBsYWNrIGEgY29uc29sZS5cbiAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgbGV0IG1ldGhvZDtcbiAgY29uc3Qgbm9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgY29uc3QgbWV0aG9kcyA9IFtcbiAgICAnYXNzZXJ0JywgJ2NsZWFyJywgJ2NvdW50JywgJ2RlYnVnJywgJ2RpcicsICdkaXJ4bWwnLCAnZXJyb3InLFxuICAgICdleGNlcHRpb24nLCAnZ3JvdXAnLCAnZ3JvdXBDb2xsYXBzZWQnLCAnZ3JvdXBFbmQnLCAnaW5mbycsICdsb2cnLFxuICAgICdtYXJrVGltZWxpbmUnLCAncHJvZmlsZScsICdwcm9maWxlRW5kJywgJ3RhYmxlJywgJ3RpbWUnLCAndGltZUVuZCcsXG4gICAgJ3RpbWVTdGFtcCcsICd0cmFjZScsICd3YXJuJyxcbiAgXTtcbiAgbGV0IHsgbGVuZ3RoIH0gPSBtZXRob2RzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbXVsdGktYXNzaWduXG4gIGNvbnN0IGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIG1ldGhvZCA9IG1ldGhvZHNbbGVuZ3RoXTtcblxuICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cbiAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcDtcbiAgICB9XG4gIH1cbn0oKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlUm9vdCI6IiJ9