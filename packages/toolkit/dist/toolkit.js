(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@spiral-toolkit/toolkit", [], factory);
	else if(typeof exports === 'object')
		exports["@spiral-toolkit/toolkit"] = factory();
	else
		root["SFToolkit"] = factory();
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

/***/ "../core/dist/core.js":
/*!****************************!*\
  !*** ../core/dist/core.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../node_modules/axios/index.js":
      /*!**********************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/index.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./lib/axios */
        "../../node_modules/axios/lib/axios.js");
        /***/
      },

      /***/
      "../../node_modules/axios/lib/adapters/xhr.js":
      /*!*********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/adapters/xhr.js ***!
        \*********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        var settle = __webpack_require__(
        /*! ./../core/settle */
        "../../node_modules/axios/lib/core/settle.js");

        var buildURL = __webpack_require__(
        /*! ./../helpers/buildURL */
        "../../node_modules/axios/lib/helpers/buildURL.js");

        var buildFullPath = __webpack_require__(
        /*! ../core/buildFullPath */
        "../../node_modules/axios/lib/core/buildFullPath.js");

        var parseHeaders = __webpack_require__(
        /*! ./../helpers/parseHeaders */
        "../../node_modules/axios/lib/helpers/parseHeaders.js");

        var isURLSameOrigin = __webpack_require__(
        /*! ./../helpers/isURLSameOrigin */
        "../../node_modules/axios/lib/helpers/isURLSameOrigin.js");

        var createError = __webpack_require__(
        /*! ../core/createError */
        "../../node_modules/axios/lib/core/createError.js");

        module.exports = function xhrAdapter(config) {
          return new Promise(function dispatchXhrRequest(resolve, reject) {
            var requestData = config.data;
            var requestHeaders = config.headers;

            if (utils.isFormData(requestData)) {
              delete requestHeaders['Content-Type']; // Let the browser set it
            }

            var request = new XMLHttpRequest(); // HTTP basic authentication

            if (config.auth) {
              var username = config.auth.username || '';
              var password = config.auth.password || '';
              requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
            }

            var fullPath = buildFullPath(config.baseURL, config.url);
            request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

            request.timeout = config.timeout; // Listen for ready state

            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              } // The request errored out and we didn't get a response, this will be
              // handled by onerror instead
              // With one exception: request that using file: protocol, most browsers
              // will return status as 0 even though it's a successful request


              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
              } // Prepare the response


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
              settle(resolve, reject, response); // Clean up request

              request = null;
            }; // Handle browser request cancellation (as opposed to a manual cancellation)


            request.onabort = function handleAbort() {
              if (!request) {
                return;
              }

              reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

              request = null;
            }; // Handle low level network errors


            request.onerror = function handleError() {
              // Real errors are hidden from us by the browser
              // onerror should only fire if it's a network error
              reject(createError('Network Error', config, null, request)); // Clean up request

              request = null;
            }; // Handle timeout


            request.ontimeout = function handleTimeout() {
              var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

              if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
              }

              reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

              request = null;
            }; // Add xsrf header
            // This is only done if running in a standard browser environment.
            // Specifically not if we're in a web worker, or react-native.


            if (utils.isStandardBrowserEnv()) {
              var cookies = __webpack_require__(
              /*! ./../helpers/cookies */
              "../../node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


              var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

              if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
              }
            } // Add headers to the request


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
            } // Add withCredentials to request if needed


            if (!utils.isUndefined(config.withCredentials)) {
              request.withCredentials = !!config.withCredentials;
            } // Add responseType to request if needed


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
            } // Handle progress if needed


            if (typeof config.onDownloadProgress === 'function') {
              request.addEventListener('progress', config.onDownloadProgress);
            } // Not all browsers support upload events


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
                reject(cancel); // Clean up request

                request = null;
              });
            }

            if (requestData === undefined) {
              requestData = null;
            } // Send the request


            request.send(requestData);
          });
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/axios.js":
      /*!**************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/axios.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./utils */
        "../../node_modules/axios/lib/utils.js");

        var bind = __webpack_require__(
        /*! ./helpers/bind */
        "../../node_modules/axios/lib/helpers/bind.js");

        var Axios = __webpack_require__(
        /*! ./core/Axios */
        "../../node_modules/axios/lib/core/Axios.js");

        var mergeConfig = __webpack_require__(
        /*! ./core/mergeConfig */
        "../../node_modules/axios/lib/core/mergeConfig.js");

        var defaults = __webpack_require__(
        /*! ./defaults */
        "../../node_modules/axios/lib/defaults.js");
        /**
         * Create an instance of Axios
         *
         * @param {Object} defaultConfig The default config for the instance
         * @return {Axios} A new instance of Axios
         */


        function createInstance(defaultConfig) {
          var context = new Axios(defaultConfig);
          var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

          utils.extend(instance, Axios.prototype, context); // Copy context to instance

          utils.extend(instance, context);
          return instance;
        } // Create the default instance to be exported


        var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

        axios.Axios = Axios; // Factory for creating new instances

        axios.create = function create(instanceConfig) {
          return createInstance(mergeConfig(axios.defaults, instanceConfig));
        }; // Expose Cancel & CancelToken


        axios.Cancel = __webpack_require__(
        /*! ./cancel/Cancel */
        "../../node_modules/axios/lib/cancel/Cancel.js");
        axios.CancelToken = __webpack_require__(
        /*! ./cancel/CancelToken */
        "../../node_modules/axios/lib/cancel/CancelToken.js");
        axios.isCancel = __webpack_require__(
        /*! ./cancel/isCancel */
        "../../node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

        axios.all = function all(promises) {
          return Promise.all(promises);
        };

        axios.spread = __webpack_require__(
        /*! ./helpers/spread */
        "../../node_modules/axios/lib/helpers/spread.js");
        module.exports = axios; // Allow use of default import syntax in TypeScript

        module.exports.default = axios;
        /***/
      },

      /***/
      "../../node_modules/axios/lib/cancel/Cancel.js":
      /*!**********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/Cancel.js ***!
        \**********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
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
        /***/
      },

      /***/
      "../../node_modules/axios/lib/cancel/CancelToken.js":
      /*!***************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/CancelToken.js ***!
        \***************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var Cancel = __webpack_require__(
        /*! ./Cancel */
        "../../node_modules/axios/lib/cancel/Cancel.js");
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
        /***/
      },

      /***/
      "../../node_modules/axios/lib/cancel/isCancel.js":
      /*!************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/cancel/isCancel.js ***!
        \************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        module.exports = function isCancel(value) {
          return !!(value && value.__CANCEL__);
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/Axios.js":
      /*!*******************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/Axios.js ***!
        \*******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        var buildURL = __webpack_require__(
        /*! ../helpers/buildURL */
        "../../node_modules/axios/lib/helpers/buildURL.js");

        var InterceptorManager = __webpack_require__(
        /*! ./InterceptorManager */
        "../../node_modules/axios/lib/core/InterceptorManager.js");

        var dispatchRequest = __webpack_require__(
        /*! ./dispatchRequest */
        "../../node_modules/axios/lib/core/dispatchRequest.js");

        var mergeConfig = __webpack_require__(
        /*! ./mergeConfig */
        "../../node_modules/axios/lib/core/mergeConfig.js");
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

          config = mergeConfig(this.defaults, config); // Set config.method

          if (config.method) {
            config.method = config.method.toLowerCase();
          } else if (this.defaults.method) {
            config.method = this.defaults.method.toLowerCase();
          } else {
            config.method = 'get';
          } // Hook up interceptors middleware


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
        }; // Provide aliases for supported request methods


        utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, config) {
            return this.request(utils.merge(config || {}, {
              method: method,
              url: url
            }));
          };
        });
        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
          /*eslint func-names:0*/
          Axios.prototype[method] = function (url, data, config) {
            return this.request(utils.merge(config || {}, {
              method: method,
              url: url,
              data: data
            }));
          };
        });
        module.exports = Axios;
        /***/
      },

      /***/
      "../../node_modules/axios/lib/core/InterceptorManager.js":
      /*!********************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/InterceptorManager.js ***!
        \********************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

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
        /***/
      },

      /***/
      "../../node_modules/axios/lib/core/buildFullPath.js":
      /*!***************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/buildFullPath.js ***!
        \***************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var isAbsoluteURL = __webpack_require__(
        /*! ../helpers/isAbsoluteURL */
        "../../node_modules/axios/lib/helpers/isAbsoluteURL.js");

        var combineURLs = __webpack_require__(
        /*! ../helpers/combineURLs */
        "../../node_modules/axios/lib/helpers/combineURLs.js");
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/createError.js":
      /*!*************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/createError.js ***!
        \*************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var enhanceError = __webpack_require__(
        /*! ./enhanceError */
        "../../node_modules/axios/lib/core/enhanceError.js");
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/dispatchRequest.js":
      /*!*****************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/dispatchRequest.js ***!
        \*****************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        var transformData = __webpack_require__(
        /*! ./transformData */
        "../../node_modules/axios/lib/core/transformData.js");

        var isCancel = __webpack_require__(
        /*! ../cancel/isCancel */
        "../../node_modules/axios/lib/cancel/isCancel.js");

        var defaults = __webpack_require__(
        /*! ../defaults */
        "../../node_modules/axios/lib/defaults.js");
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
          throwIfCancellationRequested(config); // Ensure headers exist

          config.headers = config.headers || {}; // Transform request data

          config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

          config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
          utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
            delete config.headers[method];
          });
          var adapter = config.adapter || defaults.adapter;
          return adapter(config).then(function onAdapterResolution(response) {
            throwIfCancellationRequested(config); // Transform response data

            response.data = transformData(response.data, response.headers, config.transformResponse);
            return response;
          }, function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config); // Transform response data

              if (reason && reason.response) {
                reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
              }
            }

            return Promise.reject(reason);
          });
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/enhanceError.js":
      /*!**************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/enhanceError.js ***!
        \**************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
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

          error.toJSON = function () {
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/mergeConfig.js":
      /*!*************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/mergeConfig.js ***!
        \*************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ../utils */
        "../../node_modules/axios/lib/utils.js");
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
          var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
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
          var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
          var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/settle.js":
      /*!********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/settle.js ***!
        \********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var createError = __webpack_require__(
        /*! ./createError */
        "../../node_modules/axios/lib/core/createError.js");
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
            reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
          }
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/core/transformData.js":
      /*!***************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/core/transformData.js ***!
        \***************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/defaults.js":
      /*!*****************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/defaults.js ***!
        \*****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */

        (function (process) {
          var utils = __webpack_require__(
          /*! ./utils */
          "../../node_modules/axios/lib/utils.js");

          var normalizeHeaderName = __webpack_require__(
          /*! ./helpers/normalizeHeaderName */
          "../../node_modules/axios/lib/helpers/normalizeHeaderName.js");

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
              adapter = __webpack_require__(
              /*! ./adapters/xhr */
              "../../node_modules/axios/lib/adapters/xhr.js");
            } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
              // For node use HTTP adapter
              adapter = __webpack_require__(
              /*! ./adapters/http */
              "../../node_modules/axios/lib/adapters/xhr.js");
            }

            return adapter;
          }

          var defaults = {
            adapter: getDefaultAdapter(),
            transformRequest: [function transformRequest(data, headers) {
              normalizeHeaderName(headers, 'Accept');
              normalizeHeaderName(headers, 'Content-Type');

              if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
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
                } catch (e) {
                  /* Ignore */
                }
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
          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__(
        /*! ./../../process/browser.js */
        "../../node_modules/process/browser.js"));
        /***/
      },

      /***/
      "../../node_modules/axios/lib/helpers/bind.js":
      /*!*********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/bind.js ***!
        \*********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/buildURL.js":
      /*!*************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/buildURL.js ***!
        \*************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        function encode(val) {
          return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/combineURLs.js":
      /*!****************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/combineURLs.js ***!
        \****************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * Creates a new URL by combining the specified URLs
         *
         * @param {string} baseURL The base URL
         * @param {string} relativeURL The relative URL
         * @returns {string} The combined URL
         */

        module.exports = function combineURLs(baseURL, relativeURL) {
          return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/cookies.js":
      /*!************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/cookies.js ***!
        \************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
        function standardBrowserEnv() {
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
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        }() : // Non standard browser env (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() {
              return null;
            },
            remove: function remove() {}
          };
        }();
        /***/
      },

      /***/
      "../../node_modules/axios/lib/helpers/isAbsoluteURL.js":
      /*!******************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
        \******************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/isURLSameOrigin.js":
      /*!********************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
        \********************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js");

        module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
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

            urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
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
            var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }() : // Non standard browser envs (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        }();
        /***/
      },

      /***/
      "../../node_modules/axios/lib/helpers/normalizeHeaderName.js":
      /*!************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
        \************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ../utils */
        "../../node_modules/axios/lib/utils.js");

        module.exports = function normalizeHeaderName(headers, normalizedName) {
          utils.forEach(headers, function processHeader(value, name) {
            if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
              headers[normalizedName] = value;
              delete headers[name];
            }
          });
        };
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/parseHeaders.js":
      /*!*****************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/parseHeaders.js ***!
        \*****************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(
        /*! ./../utils */
        "../../node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
        // c.f. https://nodejs.org/api/http.html#http_message_headers


        var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
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

          if (!headers) {
            return parsed;
          }

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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/helpers/spread.js":
      /*!***********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/helpers/spread.js ***!
        \***********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
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
        /***/

      },

      /***/
      "../../node_modules/axios/lib/utils.js":
      /*!**************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/axios/lib/utils.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var bind = __webpack_require__(
        /*! ./helpers/bind */
        "../../node_modules/axios/lib/helpers/bind.js");
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
          return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
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
          return typeof FormData !== 'undefined' && val instanceof FormData;
        }
        /**
         * Determine if a value is a view on an ArrayBuffer
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
         */


        function isArrayBufferView(val) {
          var result;

          if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
            result = ArrayBuffer.isView(val);
          } else {
            result = val && val.buffer && val.buffer instanceof ArrayBuffer;
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
          if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
            return false;
          }

          return typeof window !== 'undefined' && typeof document !== 'undefined';
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
          } // Force an array if not already something iterable


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


        function merge()
        /* obj1, obj2, obj3, ... */
        {
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


        function deepMerge()
        /* obj1, obj2, obj3, ... */
        {
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
        /***/
      },

      /***/
      "../../node_modules/process/browser.js":
      /*!**************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/process/browser.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        // shim for using process in browser
        var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
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
        })();

        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          } // if setTimeout wasn't available but was latter defined


          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }

          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }

        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          } // if clearTimeout wasn't available but was latter defined


          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }

          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
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

          while (len) {
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
        }; // v8 likes predictible objects


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

        process.listeners = function (name) {
          return [];
        };

        process.binding = function (name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function () {
          return '/';
        };

        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported');
        };

        process.umask = function () {
          return 0;
        };
        /***/

      },

      /***/
      "./src/core/Ajax.js":
      /*!**************************!*\
        !*** ./src/core/Ajax.js ***!
        \**************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* eslint-disable no-console */

        /* eslint-disable no-param-reassign */

        /* eslint-disable max-len */

        /* eslint-disable func-names */
        const axios = __webpack_require__(
        /*! axios */
        "../../node_modules/axios/index.js"); // var tools = require("../helpers/tools");


        const Events = __webpack_require__(
        /*! ./Events */
        "./src/core/Events.js"); // const LikeFormData = require('../helpers/LikeFormData');

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
        /***/
      },

      /***/
      "./src/core/BaseDOMConstructor.js":
      /*!****************************************!*\
        !*** ./src/core/BaseDOMConstructor.js ***!
        \****************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/
      },

      /***/
      "./src/core/DomMutations.js":
      /*!**********************************!*\
        !*** ./src/core/DomMutations.js ***!
        \**********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/
      },

      /***/
      "./src/core/Events.js":
      /*!****************************!*\
        !*** ./src/core/Events.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/
      },

      /***/
      "./src/core/InstancesController.js":
      /*!*****************************************!*\
        !*** ./src/core/InstancesController.js ***!
        \*****************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/
      },

      /***/
      "./src/core/ajax/baseActions.js":
      /*!**************************************!*\
        !*** ./src/core/ajax/baseActions.js ***!
        \**************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/

      },

      /***/
      "./src/core/events/baseEvents.js":
      /*!***************************************!*\
        !*** ./src/core/events/baseEvents.js ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/

      },

      /***/
      "./src/helpers/DOMEvents.js":
      /*!**********************************!*\
        !*** ./src/helpers/DOMEvents.js ***!
        \**********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/
      },

      /***/
      "./src/helpers/domTools.js":
      /*!*********************************!*\
        !*** ./src/helpers/domTools.js ***!
        \*********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/
      },

      /***/
      "./src/helpers/tools.js":
      /*!******************************!*\
        !*** ./src/helpers/tools.js ***!
        \******************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* eslint-disable global-require */

        /* eslint-disable func-names */

        /* eslint-disable max-len */

        /* eslint-disable no-prototype-builtins */

        /**
         * Provides a spiral-specific sf bundle
         * TODO: This wrapping looks very fishy, why we need it? Move to toolkit may be?
         */
        const sf = __webpack_require__(
        /*! ./sf */
        "./src/sf.js");

        const sfWrapper = {
          core: sf.core,
          helpers: sf.helpers,
          tools: sf.tools
        }; // Add console shim for old IE

        __webpack_require__(
        /*! ./shim/console */
        "./src/shim/console.js");

        __webpack_require__(
        /*! ./shim/Object.assign */
        "./src/shim/Object.assign.js");

        if (!sfWrapper.hasOwnProperty('options')) sfWrapper.options = {
          instances: {}
        };
        if (!sfWrapper.options.hasOwnProperty('instances')) sfWrapper.options.instances = {};
        sfWrapper.instancesController = new sfWrapper.core.InstancesController(sfWrapper);
        sfWrapper.domMutation = new sfWrapper.core.DomMutations(sfWrapper.instancesController); // Events system

        sfWrapper.events = new sfWrapper.core.Events();

        __webpack_require__(
        /*! ./core/events/baseEvents.js */
        "./src/core/events/baseEvents.js")(sfWrapper.events); // AJAX


        sfWrapper.ajax = new sfWrapper.core.Ajax(window && window.csrfToken ? {
          // TODO move to spiral bindings
          headers: {
            'X-CSRF-Token': window.csrfToken
          }
        } : null); // ACTIONS

        __webpack_require__(
        /*! ./core/ajax/baseActions.js */
        "./src/core/ajax/baseActions.js")(sfWrapper); // API


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
        /***/
      },

      /***/
      "./src/sf.js":
      /*!*******************!*\
        !*** ./src/sf.js ***!
        \*******************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* eslint-disable global-require */
        const core = {
          Ajax: __webpack_require__(
          /*! ./core/Ajax */
          "./src/core/Ajax.js"),
          BaseDOMConstructor: __webpack_require__(
          /*! ./core/BaseDOMConstructor */
          "./src/core/BaseDOMConstructor.js"),
          DomMutations: __webpack_require__(
          /*! ./core/DomMutations */
          "./src/core/DomMutations.js"),
          Events: __webpack_require__(
          /*! ./core/Events */
          "./src/core/Events.js"),
          InstancesController: __webpack_require__(
          /*! ./core/InstancesController */
          "./src/core/InstancesController.js")
        };
        const helpers = {
          DOMEvents: __webpack_require__(
          /*! ./helpers/DOMEvents */
          "./src/helpers/DOMEvents.js"),
          domTools: __webpack_require__(
          /*! ./helpers/domTools */
          "./src/helpers/domTools.js") // LikeFormData: require('./helpers/LikeFormData'),
          // tools: require('./helpers/tools'),

        };
        const sf = {
          core,
          helpers,
          tools: __webpack_require__(
          /*! ./helpers/tools */
          "./src/helpers/tools.js")
        };
        module.exports = sf;
        /***/
      },

      /***/
      "./src/shim/Object.assign.js":
      /*!***********************************!*\
        !*** ./src/shim/Object.assign.js ***!
        \***********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/

      },

      /***/
      "./src/shim/console.js":
      /*!*****************************!*\
        !*** ./src/shim/console.js ***!
        \*****************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
        /***/

      },

      /***/
      0:
      /*!****************************!*\
        !*** multi ./src/index.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index.js */
        "./src/index.js");
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RvbU11dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hamF4L2Jhc2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL0RPTUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9kb21Ub29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGltL09iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaW0vY29uc29sZS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJFdmVudHMiLCJBamF4Iiwib3B0aW9ucyIsImN1cnJlbnRSZXF1ZXN0cyIsImV2ZW50cyIsImNhbmNlbCIsImhlYWRlcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzZW5kIiwidGhhdCIsImRhdGEiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJDYW5jZWxUb2tlbiIsImNhbmNlbFNvdXJjZSIsInNvdXJjZSIsImNvbmZpZyIsInVybCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50Iiwib25Qcm9ncmVzcyIsImxvYWRlZCIsInRvdGFsIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsIndyYXBFcnJvciIsImUiLCJpc1NGQWpheEVycm9yIiwiYWpheFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInRyaWdnZXIiLCJjYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJCYXNlRE9NQ29uc3RydWN0b3IiLCJpbml0Iiwic2YiLCJub2RlIiwiZ3JhYk9wdGlvbnMiLCJvcHRpb25zVG9HcmFiIiwiY3VycmVudE9wdGlvblZhbHVlIiwiY3VycmVudE9wdGlvbiIsImtleXMiLCJmb3JFYWNoIiwib3B0aW9uIiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSIsImluc3RhbmNlcyIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiZG9tQXR0ciIsInByb2Nlc3NvciIsImNhbGwiLCJEb21NdXRhdGlvbnMiLCJpbnN0YW5jZXNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwic3VidHJlZSIsImF0dHJpYnV0ZU9sZFZhbHVlIiwiYXR0cmlidXRlRmlsdGVyIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25Eb21NdXRhdGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9ic2VydmUiLCJkb2N1bWVudCIsIm11dGF0aW9ucyIsImNsYXNzQXJyYXkiLCJnZXRDbGFzc2VzIiwiY2xhc3NTZWxlY3RvciIsImpvaW4iLCJsZW5ndGgiLCJtdXRhdGlvbiIsInR5cGUiLCJwcm9jZXNzTXV0YXRpb25BdHRyaWJ1dGVzIiwicHJvY2Vzc011dGF0aW9uQ2hpbGRMaXN0IiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImN1cnJlbnRDbGFzc2VzIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwic3BsaXQiLCJvbGRDbGFzc2VzIiwib2xkVmFsdWUiLCJhZGRlZENsYXNzZXMiLCJmaWx0ZXIiLCJ2YWwiLCJpbmRleE9mIiwicmVtb3ZlZENsYXNzZXMiLCJhZGRlZFJlZ2lzdGVyZWRDbGFzc2VzIiwicmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzIiwicmVtb3ZlSW5zdGFuY2UiLCJnZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzIiwiYWRkSW5zdGFuY2UiLCJub2Rlc0xpc3QiLCJhY3Rpb24iLCJjaGVja05vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5vZGVUeXBlIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RvcE9ic2VydmUiLCJkaXNjb25uZWN0IiwiYWxsb3dlZEV2ZW50cyIsIl9zdG9yYWdlIiwiX2FsbG93ZWRFdmVudHMiLCJvbiIsImNhbGxiYWNrIiwiZXZlbnRBcnIiLCJyZXBsYWNlIiwiZXZlbnQiLCJ3YXJuIiwicHVzaCIsInJlZ2lzdGVyQWN0aW9uIiwib2ZmIiwiYWxlcnQiLCJuIiwibCIsInBlcmZvcm1BY3Rpb24iLCJJbnN0YW5jZXNDb250cm9sbGVyIiwic3BpcmFsIiwiaW5zdGFuY2VzQ29uc3RydWN0b3JzIiwiY3NzQ2xhc3NlcyIsImpzQ29uc3RydWN0b3JzIiwiYWRkb25zIiwiY29yZSIsInJlZ2lzdGVySW5zdGFuY2VUeXBlIiwiY29uc3RydWN0b3JGdW5jdGlvbiIsImNzc0NsYXNzTmFtZSIsImlzU2tpcEluaXRpYWxpemF0aW9uIiwiaW5zdGFuY2VOYW1lIiwic3BpcmFsRnJhbWV3b3JrTmFtZSIsIm5vZGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJtYXgiLCJhZGRJbnN0YW5jZVR5cGUiLCJJbnN0YW5jZUNvbnN0cnVjdG9yIiwiaXNBbHJlYWR5QWRkZWQiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiaW5zdGFuY2VPYmoiLCJkaWUiLCJrZXkiLCJzcGxpY2UiLCJpc1JldHVybk9iamVjdCIsInR5cGVBcnIiLCJyZXQiLCJIVE1MRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0SW5zdGFuY2VzIiwicmVnaXN0ZXJBZGRvbiIsImFkZG9uIiwiYWRkb25UeXBlIiwiYWRkb25OYW1lIiwiZ2V0SW5zdGFuY2VBZGRvbiIsImNzc0NsYXNzIiwiZ2V0SW5zdGFuY2VDb25zdHJ1Y3RvcnMiLCJhamF4Iiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwiZGVsYXkiLCJiYXNlRXZlbnRzIiwidG9TdHJpbmciLCJpc0Fic29sdXRlIiwidGVzdCIsInNlbGYiLCJsb2NhdGlvbiIsImhyZWYiLCJvcmlnaW4iLCJ3aW5kb3ciLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImNoYXJBdCIsInJlbG9hZCIsImNsb3NlIiwiRE9NRXZlbnRzIiwiX0RPTUV2ZW50c1N0b3JhZ2UiLCJhZGQiLCJldmVudEFycmF5IiwidXNlQ2FwdHVyZSIsIkRPTU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiZXZlbnRGdW5jdGlvbiIsInJlbW92ZSIsInJlbW92ZUFsbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0IiwiZWxlbSIsInNlbGVjdG9ycyIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsInBhcmVudE5vZGUiLCJjbG9zZXN0QnlDbGFzc05hbWUiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInRvb2xzIiwicmVzb2x2ZUtleVBhdGgiLCJwYXRoIiwib2JqIiwic2FmZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwic2ZXcmFwcGVyIiwiaGVscGVycyIsImRvbU11dGF0aW9uIiwiY3NyZlRva2VuIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwiY3JlYXRlIiwiYmluZCIsImRvbVRvb2xzIiwiVHlwZUVycm9yIiwib3V0cHV0IiwiaW5kZXgiLCJuZXh0S2V5Iiwibm9vcCIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsMERBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDOztBQUNBOztBQUNBOztBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXJCLEMsQ0FFQTs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLHNDQUFELENBQXRCLEMsQ0FDQTs7QUFFQTs7Ozs7Ozs7OztBQVFBLE1BQU1FLElBQUksR0FBRyxVQUFVQyxPQUFWLEVB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cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzZlwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCdcbiAgXTtcblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzIpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbi8vIHZhciB0b29scyA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3Rvb2xzXCIpO1xuY29uc3QgRXZlbnRzID0gcmVxdWlyZSgnLi9FdmVudHMnKTtcbi8vIGNvbnN0IExpa2VGb3JtRGF0YSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvTGlrZUZvcm1EYXRhJyk7XG5cbi8qKlxuICogVGhpcyBpcyBhbiBBamF4IHRyYW5zcG9ydC5cbiAqIFN1cHBvcnRzICBYRG9tYWluUmVxdWVzdCBmb3Igb2xkIElFXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuaGVhZGVyc10gSGVhZGVycyB0byBhZGQgdG8gdGhlIGluc3RhbmNlXG4gKiBAZmlyZXMgYmVmb3JlU2VuZCBldmVudCB0aGF0IHdpbGwgYmUgcGVyZm9ybWVkIGJlZm9yZSByZXF1ZXN0IGlzIHNlbmQuIEV2ZW50IGNhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIgXCJvcHRpb25zXCIsIHRoYXQgY29udGFpbnMgYWxsIHZhcmlhYmxlcyBmb3IgQWpheFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEFqYXggPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB0aGlzLmN1cnJlbnRSZXF1ZXN0cyA9IDA7XG4gIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cyhbJ2JlZm9yZVNlbmQnLCAnbG9hZCddKTtcbiAgdGhpcy5jYW5jZWwgPSBudWxsO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycykge1xuICAgIHRoaXMuaGVhZGVycyA9IE9iamVjdC5hc3NpZ24odGhpcy5oZWFkZXJzLCBvcHRpb25zLmhlYWRlcnMpO1xuICB9XG59O1xuXG4vKipcbiAqIERlZmF1bHQgaGVhZGVycy4gWW91IGNhbiBvdmVyd3JpdGUgaXQuIExvb2sgYXQgdGhlIGV2ZW50IGJlZm9yZVNlbmRcbiAqIFBsZWFzZSBub3RlIHRoYXQgb24gWERvbWFpblJlcXVlc3QgIHdlIGNhbid0IHNlbmQgYW55IGhlYWRlcnMuXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuQWpheC5wcm90b3R5cGUuaGVhZGVycyA9IHtcbiAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxufTtcblxuLyoqXG4gKiBTZW5kIGFqYXggcmVxdWVzdCB0byBzZXJ2ZXJcbiAqIFdpbGwgcmV0dXJuIHByb21pc2Ugb3IgYXJyYXkgd2l0aCBwcm9taXNlIGFuZCBYTUxIdHRwUmVxdWVzdCA6IHt3aW5kb3cuUHJvbWlzZXxbd2luZG93LlByb21pc2UsWE1MSHR0cFJlcXVlc3RdfVxuICogQHNpbmNlIDAuNC4wXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy51cmwgdXJsIHRvIHNlbmQgZGF0YVxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbb3B0aW9ucy5kYXRhXSBkYXRhIHRvIHNlbmRcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5tZXRob2RdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuaGVhZGVyc10gaGVhZGVycyB0byBhZGQgdG8gdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLm9uUHJvZ3Jlc3NdIGNhbGxiYWNrIGZ1bmN0aW9uIG9uIHByb2dyZXNzLiBUd28gY2FsbGJhY2sgb3B0aW9uczogY3VycmVudCBieXRlcyBzZW50LHRvdGFsQnl0ZXNcbiAqIElmIHRyZWUgdGhlbiAgW3dpbmRvdy5Qcm9taXNlLCBYTUxIdHRwUmVxdWVzdCBdIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm4ge1Byb21pc2V8QXJyYXl9XG4gKi9cbkFqYXgucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAvLyBUT0RPIHdoeSB3ZSBjaGVjayBoZXJlIGlmIGRhdGEgPT09IG51bGwgdGhlbiByZWFzc2lnbiB0byBudWxsIGFnYWluP1xuICBpZiAob3B0aW9ucy5kYXRhID09PSBudWxsIHx8IG9wdGlvbnMuZGF0YSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zLmRhdGEgPSBudWxsO1xuICB9XG4gIGlmICghb3B0aW9ucy5tZXRob2QpIHtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcbiAgfVxuXG4gIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyA/IE9iamVjdC5hc3NpZ24ob3B0aW9ucy5oZWFkZXJzLCB0aGlzLmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycykgOiAoeyAuLi50aGlzLmhlYWRlcnMgfSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XG4gIGNvbnN0IGNhbmNlbFNvdXJjZSA9IENhbmNlbFRva2VuLnNvdXJjZSgpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAvLyBgdXJsYCBpcyB0aGUgc2VydmVyIFVSTCB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAgICB1cmw6IG9wdGlvbnMudXJsLFxuXG4gICAgLy8gYG1ldGhvZGAgaXMgdGhlIHJlcXVlc3QgbWV0aG9kIHRvIGJlIHVzZWQgd2hlbiBtYWtpbmcgdGhlIHJlcXVlc3RcbiAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuXG4gICAgLy8gYGhlYWRlcnNgIGFyZSBjdXN0b20gaGVhZGVycyB0byBiZSBzZW50XG4gICAgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLFxuXG4gICAgLy8gYGRhdGFgIGlzIHRoZSBkYXRhIHRvIGJlIHNlbnQgYXMgdGhlIHJlcXVlc3QgYm9keVxuICAgIC8vIE9ubHkgYXBwbGljYWJsZSBmb3IgcmVxdWVzdCBtZXRob2RzICdQVVQnLCAnUE9TVCcsIGFuZCAnUEFUQ0gnXG4gICAgLy8gV2hlbiBubyBgdHJhbnNmb3JtUmVxdWVzdGAgaXMgc2V0LCBtdXN0IGJlIG9mIG9uZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICAgIC8vIC0gc3RyaW5nLCBwbGFpbiBvYmplY3QsIEFycmF5QnVmZmVyLCBBcnJheUJ1ZmZlclZpZXcsIFVSTFNlYXJjaFBhcmFtc1xuICAgIC8vIC0gQnJvd3NlciBvbmx5OiBGb3JtRGF0YSwgRmlsZSwgQmxvYlxuICAgIC8vIC0gTm9kZSBvbmx5OiBTdHJlYW0sIEJ1ZmZlclxuICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcblxuICAgIC8vIGBvblVwbG9hZFByb2dyZXNzYCBhbGxvd3MgaGFuZGxpbmcgb2YgcHJvZ3Jlc3MgZXZlbnRzIGZvciB1cGxvYWRzXG4gICAgb25VcGxvYWRQcm9ncmVzczogKHByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLm9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgb3B0aW9ucy5vblByb2dyZXNzKHByb2dyZXNzRXZlbnQubG9hZGVkLCBwcm9ncmVzc0V2ZW50LnRvdGFsKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gYGNhbmNlbFRva2VuYCBzcGVjaWZpZXMgYSBjYW5jZWwgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBjYW5jZWwgdGhlIHJlcXVlc3RcbiAgICAvLyAoc2VlIENhbmNlbGxhdGlvbiBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxzKVxuICAgIGNhbmNlbFRva2VuOiBjYW5jZWxTb3VyY2UudG9rZW4sXG4gIH07XG5cbiAgdGhpcy5jYW5jZWwgPSBjYW5jZWxTb3VyY2UuY2FuY2VsO1xuXG4gIGNvbnN0IHdyYXBFcnJvciA9IChlKSA9PiB7XG4gICAgZS5pc1NGQWpheEVycm9yID0gdHJ1ZTsgLy8gTWFya3MgZXJyb3IgdGhhdCBjYW4gaGF2ZSBub3JtYWwgZGF0YSBpbnNpZGVcbiAgICByZXR1cm4gZTtcbiAgfTtcblxuICBjb25zdCBhamF4UHJvbWlzZSA9IG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IC8vIFJldHVybiBhIG5ldyBwcm9taXNlLlxuICAgIGlmICghb3B0aW9ucy51cmwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBzaG91bGQgcHJvdmlkZSB1cmwnKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1lvdSBzaG91bGQgcHJvdmlkZSB1cmwnKSk7XG4gICAgfVxuICAgIHRoYXQuY3VycmVudFJlcXVlc3RzICs9IDE7XG4gICAgYXhpb3NcbiAgICAgIC5yZXF1ZXN0KGNvbmZpZylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGF0LmN1cnJlbnRSZXF1ZXN0cyAtPSAxO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMTk5ICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkgeyAvLyAyMDAtMjk5XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDM5OSAmJiByZXNwb25zZS5zdGF0dXMgPCA2MDApIHsgLy8gNDAwLTU5OVxuICAgICAgICAgICAgcmVqZWN0KHdyYXBFcnJvcihyZXNwb25zZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmtub3duIHN0YXR1cyAlZC4gUmVqZWN0aW5nJywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgIHJlamVjdCh3cmFwRXJyb3IocmVzcG9uc2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHdyYXBFcnJvcihyZXNwb25zZSkpOyAvLyByZWplY3Qgd2l0aCB0aGUgc3RhdHVzIHRleHRcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2xvYWQnLCBvcHRpb25zKTsgLy8gZm9yIGV4YW1wbGUgLSB1c2VkIHRvIGhhbmRsZSBhY3Rpb25zXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGF0LmN1cnJlbnRSZXF1ZXN0cyAtPSAxO1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICByZWplY3Qod3JhcEVycm9yKGVycm9yLnJlc3BvbnNlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0pKTtcblxuICByZXR1cm4gYWpheFByb21pc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFqYXg7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi8gLy8gVE9ETzogP1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIFRoaXMgYSBiYXNlIGNvbnN0cnVjdG9yIChjbGFzcykgZm9yIGFueSBET00gYmFzZWQgaW5zdGFuY2UuXG4gKiBUaGlzIGNvbnN0cnVjdG9yIGp1c3QgZ3JhYiBhbGwgbm9kZSBhdHRyaWJ1dGVzIGFuZCBnZW5lcmF0ZXMgb3B0aW9ucy4gQWxsIHByb2Nlc3NlZCBvcHRpb25zIHN0b3JlZCBhdCB0aGlzLm9wdGlvbnNcbiAqIEBleGFtcGxlXG4gKiBXZSBoYXZlIGh0bWwgbGlrZSB0aGlzOlxuICogPGRpdiBkYXRhLXRlc3Q9XCJ0ZXN0VmFsdWVcIiBkYXRhLXZhbHVlPVwidmFsdWUxMjNcIj4uLi4uLjwvZGl2PlxuICogdGhpcy5vcHRpb25zIHdpbGwgYmU6XG4gKiB7XG4gKiAgdGVzdDpcInRlc3RWYWx1ZVwiLFxuICogIHZhbHVlOlwidmFsdWVcIlxuICogfVxuICogTm90ZTogZGF0YS10ZXN0IGFuZCBkYXRhLXZhbHVlIHNob3VsZCBiZSBkZXNjcmliZWQgaW4gYXR0cmlidXRlc1RvR3JhYlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEJhc2VET01Db25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHtcbn07XG4vKipcbiAqIEluaXQgbWV0aG9kLiBDYWxsIGFmdGVyIGNvbnN0cnVjdCBpbnN0YW5jZVxuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAgRG9tTm9kZSBvZiBmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIHRvIG92ZXJyaWRlIGRlZmF1bHRcbiAqL1xuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIC8vIFRPRE8gZGF0YS1zcGlyYWwtSlNPTlxuICB0aGlzLnNmID0gc2Y7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIC8vIGlmIChzZi5vcHRpb25zICYmIHNmLm9wdGlvbnMuaW5zdGFuY2VzICYmIHNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV0pIHtcbiAgLy8gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucyB8fCB7fSwgc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXSk7XG4gIC8vIH1cbiAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLmdyYWJPcHRpb25zKG5vZGUpLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBhIG9wdGlvbnMgdG8gZ2VuZXJhdGUuXG4gKiBZb3Ugc2hvdWxkIHByb3ZpZGUgcHJvY2Vzc29yIG9yIHZhbHVlLlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwcm9wZXJ0eUtleSAtIG9iamVjdCBvZiBwcm9wZXJ0eVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHByb3BlcnR5S2V5LnZhbHVlIC0gZGVmYXVsdCB2YWx1ZSB0byByZXR1cm5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbcHJvcGVydHlLZXkuZG9tQXR0cl0gLSBkb20gYXR0cmlidXRlIHRvIGdyYWIgZGF0YVxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gW3Byb3BlcnR5S2V5LnByb2Nlc3Nvcl0gLSAgcHJvY2Vzc29yIHRvIHByb2Nlc3MgZGF0YSBiZWZvcmUgcmV0dXJuXG4gKiBAcHJvcGVydHkge09iamVjdH0gIC4uLiAtIEFub3RoZXIgb2JqZWN0IG9mIG9uZSBwcm9wZXJ0eVxuICogQHR5cGUge3t9fVxuICogIEBleGFtcGxlXG4gKiBcInNvbWVBdHRyaWJ1dGVcIjogey8vIGtleVxuICogICAgICB2YWx1ZTogdHJ1ZSwgLy9kZWZhdWx0IFZhbHVlXG4gKiAgICAgIGRvbUF0dHI6IFwiZGF0YS1zb21lLWF0dHJpYnV0ZVwiLCAvLyBhdHRyaWJ1dGUgZnJvbSBub2RlIHRvIGdyYWJcbiAqICAgICAgcHJvY2Vzc29yOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikgeyAvL3Byb2Nlc3NvciB0byBwcm9jZXNzIHZhbHVlcyBiZWZvcmUgcmV0dXJuXG4gKiAgICAgICAgICAvL3NvbWUgY2FsY3VsYXRpb25zXG4gKiAgICAgIHJldHVybiBzb21lVmFsdWU7XG4gKiAgICAgIH1cbiAqICB9LFxuICogIFwiYW5vdGhlckF0dHJpYnV0ZVwiOnsuLi59LFxuICogIFwiLi4uXCJcbiAqXG4gKiAgQGV4YW1wbGVcbiAqICAvL3JldHVybiBub2RlIGFzIHZhbHVlXG4gKiAgXCJjb250ZXh0XCI6IHtcbiAqICAgICAgXCJwcm9jZXNzb3JcIjogZnVuY3Rpb24gKG5vZGUsdmFsLGtleSkgeyAvL3Byb2Nlc3NvclxuICogICAgICAgICAgcmV0dXJuIG5vZGU7XG4gKiAgICAgIH1cbiAqICB9LFxuICogIFwiQW5vdGhlci1rZXlcIjp7Li4ufSxcbiAqICBcIi4uLlwiXG4gKiBAZXhhbXBsZVxuICogLy9HcmFiIGF0dHJpYnV0ZSBcImRhdGEtYXR0cmlidXRlXCIgYXMgXCJNeUF0dHJpYnV0ZVwiIGlmIGF0dHJpYnV0ZSBub3QgcHJvdmlkZWQgcmV0dXJuIFwiRGVmYXVsdFZhbHVlXCJcbiAqIC8vIERvbSBub2RlIDxkaXYgZGF0YS1hdHRyaWJ1dGU9XCJzb21lVmFsdWVcIj48L2Rpdj5cbiAqIFwiTXlBdHRyaWJ1dGVcIjoge1xuICogICAgICB2YWx1ZTogXCJEZWZhdWx0VmFsdWVcIixcbiAqICAgICAgZG9tQXR0cjogXCJkYXRhLWF0dHJpYnV0ZVwiXG4gKiAgfVxuICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxuICogIHtcIk15QXR0cmlidXRlXCI6XCJzb21lVmFsdWVcIn1cbiAqXG4gKiAgQGV4YW1wbGVcbiAqIC8vR3JhYiBhdHRyaWJ1dGUgXCJkYXRhLWF0dHJpYnV0ZVwiIGFzIFwiTXlBdHRyaWJ1dGVcIiBhbmQgcmV0dXJuIHNvbWUgdmFsdWUgaW5zdGVhZFxuICogLy9Eb20gbm9kZSAgPGRpdiBkYXRhLWF0dHJpYnV0ZT1cInNvbWVWYWx1ZVwiPjwvZGl2PlxuICogXCJNeUF0dHJpYnV0ZVwiOiB7XG4gKiAgICAgIGRvbUF0dHI6IFwiZGF0YS1hdHRyaWJ1dGVcIixcbiAqICAgICAgcHJvY2Vzc29yOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikge1xuICogICAgICAgICAgcmV0dXJuIHZhbCtcIlNvbWVDYWxjdWxhdGlvblwiO1xuICogICAgICB9XG4gKiAgfVxuICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxuICogIHtcIk15QXR0cmlidXRlXCI6XCJzb21lVmFsdWVTb21lQ2FsY3VsYXRpb25cIn1cbiAqXG4gKiBAZXhhbXBsZVxuICogLy9yZXR1cm4gZnVuY3Rpb24gYXMgdmFsdWVcbiAqIHByb2Nlc3NBbnN3ZXI6IHtcbiAqICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XG4gKiAgICAgIH1cbiAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcbiAqICB7XCJwcm9jZXNzQW5zd2VyXCI6ZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAqICAgICAgICAgcmV0dXJuIFwic29tZVZhbFwiO1xuICogICAgICB9XG4gKiAgIH1cbiAqXG4gKiBAZXhhbXBsZVxuICogLy9yZXR1cm4gaW5pdCB0aW1lIGFzIHZhbHVlXG4gKiBpbml0VGltZToge1xuICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikge1xuICogICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lO1xuICogICAgICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wiaW5pdFRpbWVcIjoxNDI5ODA4OTc3NDA0fVxuICogQGV4YW1wbGVcbiAqIC8vcmV0dXJuIG90aGVyIHZhbHVlIGluc3RlYWQgb2YgcmVhbCBvbmVcbiAqIHByb2Nlc3NBbnN3ZXI6IHtcbiAqICAgICAgXCJwcm9jZXNzb3JcIjogZnVuY3Rpb24gKG5vZGUsdmFsLHNlbGYpIHtcbiAqICAgICAgICAgcmV0dXJuIFwic29tZVZhbFwiO1xuICogICAgICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wicHJvY2Vzc0Fuc3dlclwiOlwic29tZVZhbFwifVxuICovXG5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7fTtcblxuLyoqXG4gKiBHcmFiIGFsbCBvcHRpb25zIHRoYXQgZGVzY3JpYmVkIGluIG9wdGlvbnNUb0dyYWJcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIGRvbU5vZGVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZS5ncmFiT3B0aW9ucyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgbGV0IGN1cnJlbnRPcHRpb25WYWx1ZTtcbiAgbGV0IGN1cnJlbnRPcHRpb247XG4gIC8vIGZvciAoY29uc3Qgb3B0aW9uIGluIHRoaXMub3B0aW9uc1RvR3JhYikge1xuICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnNUb0dyYWIpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGlmICh0aGlzLm9wdGlvbnNUb0dyYWIuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnNUb0dyYWIuaGFzT3duUHJvcGVydHkob3B0aW9uKSkgeyAvLyBpZiB0aGlzIGlzIG93biBvcHRpb25cbiAgICAgICAgY3VycmVudE9wdGlvbiA9IHRoaXMub3B0aW9uc1RvR3JhYltvcHRpb25dO1xuICAgICAgICBpZiAoY3VycmVudE9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkgeyAvLyB3ZSBoYXZlIGRlZmF1bHQgb3B0aW9uLiBMZXQncyBncmFiIGl0IGZvciBmaXJzdFxuICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IGN1cnJlbnRPcHRpb24udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdICYmIHRoaXMuc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXS5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7XG4gICAgICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdW29wdGlvbl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgnZG9tQXR0cicpICYmIG5vZGUuYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShjdXJyZW50T3B0aW9uLmRvbUF0dHIpKSB7IC8vIHdlIGNhbiBncmFiIHRoZSBhdHRyaWJ1dGUgb2Ygbm9kZVxuICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IG5vZGUuYXR0cmlidXRlc1tjdXJyZW50T3B0aW9uLmRvbUF0dHJdLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb24uaGFzT3duUHJvcGVydHkoJ3Byb2Nlc3NvcicpKSB7IC8vIHdlIGhhdmUgcHJvY2Vzc29yLiBMZXQncyBleGVjdXRlIGl0XG4gICAgICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gY3VycmVudE9wdGlvbi5wcm9jZXNzb3IuY2FsbCh0aGlzLCBub2RlLCBjdXJyZW50T3B0aW9uVmFsdWUsIGN1cnJlbnRPcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IGN1cnJlbnRPcHRpb25WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcHRpb25zO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlRE9NQ29uc3RydWN0b3I7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogRG9tIG11dGF0aW9uLiBMaXN0ZW5pbmcgdG8gdGhlIERPTSBhbmQgYWRkIG9yIHJlbW92ZSBpbnN0YW5jZXMgYmFzZWQgb24gY2xhc3Nlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZXNDb250cm9sbGVyICBzcGlyYWwgaW5zdGFuY2VzQ29udHJvbGxlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0Q2xhc3NlcyAgZ2V0IGFsbCByZWdpc3RlcmVkIG1vZHVsZXMgY2xhc3Nlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGluc3RhbmNlc0NvbnRyb2xsZXIuYWRkSW5zdGFuY2UgIGFkZCBpbnN0YW5jZSBtZXRob2QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnN0YW5jZXNDb250cm9sbGVyLnJlbW92ZUluc3RhbmNlICByZW1vdmUgaW5zdGFuY2UgbWV0aG9kXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgRG9tTXV0YXRpb25zID0gZnVuY3Rpb24gKGluc3RhbmNlc0NvbnRyb2xsZXIpIHtcbiAgaWYgKCFpbnN0YW5jZXNDb250cm9sbGVyKSB7XG4gICAgY29uc29sZS5lcnJvcignWW91IHNob3VsZCBwcm92aWRlIGluc3RhbmNlc0NvbnRyb2xsZXIgIGZvciBET00gTXV0YXRpb24uIEJlY2F1c2UgRE9NIE11dGF0aW9uICBzaG91bGQga25vd24gYWxsIGNsYXNzZXMgYW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgY2FsbCBEb21NdXRhdGlvbnMgd2l0aCBuZXcgIC0gJ25ldyBEb21NdXRhdGlvbnMoKScgXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIgPSBpbnN0YW5jZXNDb250cm9sbGVyO1xuICBjb25zdCBjb25maWcgPSB7IC8vIGNvbmZpZyBmb3IgTXV0YXRpb25PYnNlcnZlclxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWUsXG4gICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10sXG4gIH07XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IC8vIGNhbGwgZnVuY3Rpb24gd2hlbiBkb20gbXV0YXRlZC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdGhhdC5vbkRvbU11dGF0ZS5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xyXG4gIH0pO1xuICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIGNvbmZpZyk7Ly8gc3RhcnQgb2JzZXJ2ZXJcbn07XG5cbi8qKlxuICogV2hlbiBkb20gbXV0YXRlZCB0aGlzIGZ1bmN0aW9uIGlkIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtBcnJheX0gbXV0YXRpb25zIGFycmF5IG9mIG11dGF0aW9uc1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuRG9tTXV0YXRpb25zLnByb3RvdHlwZS5vbkRvbU11dGF0ZSA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgY29uc3QgY2xhc3NBcnJheSA9IHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRDbGFzc2VzKCk7Ly8gZ2V0IGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcbiAgY29uc3QgY2xhc3NTZWxlY3RvciA9IGAuJHtjbGFzc0FycmF5LmpvaW4oJywuJyl9YDsvLyBjb252ZXJ0IGZvciBxdWVyeVNlbGVjdG9yQWxsKClcbiAgaWYgKGNsYXNzU2VsZWN0b3IubGVuZ3RoID09PSAxKSB7IC8vIGlmIG5vdCByZWdpc3RlcmVkIGFueSBpbnN0YW5jZVR5cGVzXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikgeyAvLyBsb29wIG92ZXIgbXV0YXRpb24gYXJyYXlcbiAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICB0aGlzLnByb2Nlc3NNdXRhdGlvbkF0dHJpYnV0ZXMobXV0YXRpb24sIGNsYXNzQXJyYXkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hhcmFjdGVyRGF0YSc6XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uQ2hpbGRMaXN0KG11dGF0aW9uLmFkZGVkTm9kZXMsICdhZGRJbnN0YW5jZScsIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpO1xuICAgICAgICB0aGlzLnByb2Nlc3NNdXRhdGlvbkNoaWxkTGlzdChtdXRhdGlvbi5yZW1vdmVkTm9kZXMsICdyZW1vdmVJbnN0YW5jZScsIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgd3JvbmcuIENvbnRhY3QgdGVjaCBzdXBwb3J0Jyk7XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbkRvbU11dGF0aW9ucy5wcm90b3R5cGUucHJvY2Vzc011dGF0aW9uQXR0cmlidXRlcyA9IGZ1bmN0aW9uIChtdXRhdGlvbiwgY2xhc3NBcnJheSkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgY29uc3QgY3VycmVudENsYXNzZXMgPSBtdXRhdGlvbi50YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gIGNvbnN0IG9sZENsYXNzZXMgPSAobXV0YXRpb24ub2xkVmFsdWUpID8gbXV0YXRpb24ub2xkVmFsdWUuc3BsaXQoJyAnKSA6IFtdO1xuICBjb25zdCBhZGRlZENsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5maWx0ZXIoKHZhbCkgPT4gKG9sZENsYXNzZXMuaW5kZXhPZih2YWwpID09PSAtMSkpO1xuICBjb25zdCByZW1vdmVkQ2xhc3NlcyA9IG9sZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKHZhbCkgPT09IC0xKSk7XG4gIGNvbnN0IGFkZGVkUmVnaXN0ZXJlZENsYXNzZXMgPSBhZGRlZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjbGFzc0FycmF5LmluZGV4T2YodmFsKSAhPT0gLTEpKTtcbiAgY29uc3QgcmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzID0gcmVtb3ZlZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjbGFzc0FycmF5LmluZGV4T2YodmFsKSAhPT0gLTEpKTtcbiAgcmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgIHRoYXQuaW5zdGFuY2VzQ29udHJvbGxlci5yZW1vdmVJbnN0YW5jZSh0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyh2YWwpLCBtdXRhdGlvbi50YXJnZXQpO1xuICB9KTtcbiAgYWRkZWRSZWdpc3RlcmVkQ2xhc3Nlcy5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICB0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIuYWRkSW5zdGFuY2UodGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3ModmFsKSwgbXV0YXRpb24udGFyZ2V0KTtcbiAgfSk7XG59O1xuLyoqXG4gKiBQcm9jZXNzIG11dGF0aW9uIG9uIENoaWxkTGlzdFxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNMaXN0IGFycmF5IHdpdGggbm9kZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb24gYWN0aW9uIHRvIGNhbGwgKGFkZCBvciByZW1vdmUgbm9kZXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NTZWxlY3RvciAtIHN0cmluZyBzZWxlY3RvciBmb3IgcXVlcnlTZWxlY3RvckFsbFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NBcnJheSAtIGFycmF5IG9mIGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcbiAqL1xuRG9tTXV0YXRpb25zLnByb3RvdHlwZS5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QgPSBmdW5jdGlvbiAobm9kZXNMaXN0LCBhY3Rpb24sIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNoZWNraW5nIG5vZGUgY2xhc3NcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSBkb20gbm9kZVxuICAgICAqL1xuICBmdW5jdGlvbiBjaGVja05vZGUobm9kZSkge1xuICAgIGNsYXNzQXJyYXkuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7IC8vIGxvb3Agb3ZlciByZWdpc3RlcmVkIGNsYXNzZXNcbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7IC8vIGlmIGNsYXNzIG1hdGNoIHRyeSB0byBhZGQgb3IgcmVtb3ZlIGluc3RhbmNlIGZvciB0aGlzIG5vZGVcbiAgICAgICAgdGhhdC5pbnN0YW5jZXNDb250cm9sbGVyW2FjdGlvbl0odGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3MoY2xhc3NOYW1lKSwgbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBbXS5mb3JFYWNoLmNhbGwobm9kZXNMaXN0LCAodmFsKSA9PiB7IC8vIGxvb3Agb3ZlciBtdXRhdGlvbiBub2Rlc1xuICAgIGlmICh2YWwubm9kZVR5cGUgIT09IDEgfHwgdmFsLm5vZGVOYW1lID09PSAnU0NSSVBUJyB8fCB2YWwubm9kZU5hbWUgPT09ICdMSU5LJykgeyAvLyBkbyBub3QgcHJvY2VzcyBvdGhlciBub2RlcyB0aGVuIEVMRU1FTlRfTk9ERSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS5ub2RlVHlwZSBhbHNvIGlnbm9yZSBTQ1JJUFQgYW5kIExJTksgdGFnXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrTm9kZSh2YWwpOy8vIGNoZWNrIG11dGF0aW9uIG5vZGVcbiAgICBbXS5mb3JFYWNoLmNhbGwodmFsLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NTZWxlY3RvciksIGNoZWNrTm9kZSk7Ly8gcXVlcnkgYWxsIG5vZGVzIHdpdGggcmVxdWlyZWQgY2xhc3NlcyBhbmQgY2hlY2sgaXRcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFN0b3AgbGlzdGVuaW5nIHRoZSBkb20gY2hhbmdlc1xuICovXG5Eb21NdXRhdGlvbnMucHJvdG90eXBlLnN0b3BPYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG9tTXV0YXRpb25zO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBFdmVudHMgc3lzdGVtLlxuICogQHBhcmFtIHtBcnJheX0gYWxsb3dlZEV2ZW50cyBhcnJheSBvZiBhbGxvd2VkIGV2ZW50cy5cbiAqIEBjb25zdHJ1Y3RzIEV2ZW50c1xuICogQGV4YW1wbGVcbiAqIC8vYWxsb3cgdG8gd29yayB3aXRoIGFsbCBldmVudHNcbiAqIHZhciBldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gKiBldmVudHMub24oXCJteUJlc3RFdmVudFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKiBAZXhhbXBsZVxuICogLy9BbGxvdyB0byBzZXJ2ZSBvbmx5IGxpbWl0ZWQgZXZlbnRzXG4gKiAgdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoW1wiYmVmb3JlU3VibWl0XCIsXCJvbkRhdGFSZWFkeVwiXSk7XG4gKiAgZXZlbnRzLm9uKFwibXlCZXN0RXZlbnRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pOy8vd2lsbCBub3Qgd29ya3NcbiAqICBldmVudHMub24oXCJiZWZvcmVTdWJtaXRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pOy8vd2lsbCB3b3JrXG4gKi9cbmNvbnN0IEV2ZW50cyA9IGZ1bmN0aW9uIChhbGxvd2VkRXZlbnRzKSB7XG4gIHRoaXMuX3N0b3JhZ2UgPSB7fTtcbiAgdGhpcy5fYWxsb3dlZEV2ZW50cyA9IGFsbG93ZWRFdmVudHM7XG59O1xuXG4vKipcbiAqIEFkZCBldmVudChzKVxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50cyBldmVudCBvciBzcGFjZSBzZXBhcmF0ZWQgZXZlbnQgbGlzdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICogZXZlbnRzLm9uKFwibXlCZXN0RXZlbnQgbXlCZXN0RXZlbnQyIG15QmVzdEV2ZW50M1wiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKiBldmVudHMub24oXCJteUJlc3RFdmVudFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKi9cbkV2ZW50cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnRzLCBjYWxsYmFjaykge1xuICBjb25zdCBldmVudEFyciA9IGV2ZW50cy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykuc3BsaXQoJyAnKTtcbiAgZXZlbnRBcnIuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXG4gICAgaWYgKHRoaXMuX2FsbG93ZWRFdmVudHMgJiYgdGhpcy5fYWxsb3dlZEV2ZW50cy5pbmRleE9mKGV2ZW50KSA9PT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybignRXZlbnRzLiBUcnkgdG8gcmVnaXN0ZXIgZXZlbnQgJXMsIGJ1dCBldmVudCBpcyBub3QgYWxsb3dlZCcsIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghdGhpcy5fc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShldmVudHMpKSB7XG4gICAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgfSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIEFkZCBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAqIEBkZXByZWNhdGVkICB1c2UgXCJvblwiIGluc3RlYWRcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS5yZWdpc3RlckFjdGlvbiA9IEV2ZW50cy5wcm90b3R5cGUub247XG5cblxuLyoqXG4gKiByZW1vdmUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICBhbGVydCgnWW91IHRyeSB0byByZW1vdmUgYWN0aW9uLiBUaGlzIHBhcnQgaXMgaW5jb21wbGV0ZScpO1xuICAvLyBUT0RPXG59O1xuXG4vKipcbiAqIFRyaWdnZXIgZXZlbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgZXZlbnQgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrXG4gKiBAZXhhbXBsZVxuICogdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAqIGV2ZW50cy5vbihcIm15QmVzdEV2ZW50XCIsZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZS5iZXN0S2V5KX0pO1xuICogZXZlbnRzLnRyaWdnZXIoXCJteUJlc3RFdmVudFwiLHtiZXN0S2V5OjQyfSk7IC8vd2lsbCBzaG93IGluIGxvZ1xuICovXG5FdmVudHMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQsIG9wdGlvbnMpIHtcbiAgLy8gZXZlbnQgbm90IGluc2lkZSBhbGxvd2VkIGV2ZW50c1xuICBpZiAodGhpcy5fYWxsb3dlZEV2ZW50cyAmJiB0aGlzLl9hbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xuICAgIGNvbnNvbGUud2FybignRXZlbnRzLiBUcnkgdG8gdHJpZ2dlciBldmVudCAlcywgYnV0IGV2ZW50IGlzIG5vdCBhbGxvd2VkJywgZXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmICh0aGlzLl9zdG9yYWdlLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgIGZvciAobGV0IG4gPSAwLCBsID0gdGhpcy5fc3RvcmFnZVtldmVudF0ubGVuZ3RoOyBuIDwgbDsgbiArPSAxKSB7XG4gICAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XVtuXShvcHRpb25zKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUGVyZm9ybSBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYWN0aW9uUGFyYW1zXSBvYmplY3Qgd2l0aCBhbGwgYWN0aW9uIGRhdGEgZnJvbSBzZXJ2ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWpheCBvcHRpb25zXG4gKiBAZGVwcmVjYXRlZCB1c2UgXCJ0cmlnZ2VyXCIgaW5zdGVhZFxuICovXG5FdmVudHMucHJvdG90eXBlLnBlcmZvcm1BY3Rpb24gPSBFdmVudHMucHJvdG90eXBlLnRyaWdnZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovIC8vIFRPRE86ID9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIEluc3RhbmNlIGNvbnRyb2xsZXJcbiAqIEBwYXJhbSB7Kn0gc3BpcmFsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgSW5zdGFuY2VzQ29udHJvbGxlciA9IGZ1bmN0aW9uIChzcGlyYWwpIHtcbiAgdGhpcy5zcGlyYWwgPSBzcGlyYWw7XG4gIGlmICghdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgY2FsbCBJbnN0YW5jZXNDb250cm9sbGVyIHdpdGggbmV3ICAtICduZXcgSW5zdGFuY2VzQ29udHJvbGxlcigpJyBcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuX3N0b3JhZ2UgPSB7XG4gICAgaW5zdGFuY2VzQ29uc3RydWN0b3JzOiB7XG4gICAgICBjc3NDbGFzc2VzOiB7fSxcbiAgICAgIGpzQ29uc3RydWN0b3JzOiB7fSxcbiAgICB9LFxuICAgIGFkZG9uczoge30sXG4gICAgaW5zdGFuY2VzOiB7fSxcbiAgfTtcblxuICB0aGlzLmV2ZW50cyA9IG5ldyBzcGlyYWwuY29yZS5FdmVudHMoWydvblJlbW92ZUluc3RhbmNlJywgJ29uQWRkSW5zdGFuY2UnXSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIG5ldyBpbnN0YW5jZSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvckZ1bmN0aW9uIC0gY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBbY3NzQ2xhc3NOYW1lXSAtIGNzcyBjbGFzcyBuYW1lIG9mIGluc3RhbmNlLiBJZiBjbGFzcyBub3QgcHJvdmlkZWQgdGhhdCBpdCBjYW4ndCBiZSBhdXRvbWF0aWNhbGx5XG4gKiBjb250cm9sbGVkIGJ5IERvbU11dGF0aW9uLiBCdXQgeW91IHN0aWxsIGNhbiB1c2UgaXQgZnJvbSBKUy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzU2tpcEluaXRpYWxpemF0aW9uPWZhbHNlXSAgLSBza2lwIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiwganVzdCBhZGRpbmcsIG5vIGluaXQgbm9kZXMuXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlZ2lzdGVySW5zdGFuY2VUeXBlID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGNzc0NsYXNzTmFtZSwgaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcbiAgY29uc3QgaW5zdGFuY2VOYW1lID0gY29uc3RydWN0b3JGdW5jdGlvbi5zcGlyYWxGcmFtZXdvcmtOYW1lIHx8IGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWU7XG5cbiAgaWYgKCFpbnN0YW5jZU5hbWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbnN0YW5jZSBjb25zdHJ1Y3RvciBzaG91bGQgaGF2ZSBuYW1lIGluc2lkZSBpdCcpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAodGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnMuaGFzT3duUHJvcGVydHkoaW5zdGFuY2VOYW1lKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnN0YW5jZSBDb25zdHJ1Y3RvciBmb3IgdHlwZSAnJXMnIGFscmVhZHkgYWRkZWQuIFNraXBwaW5nXCIsIGluc3RhbmNlTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNzc0NsYXNzTmFtZSkgeyAvLyBhZGQgbGluayAoY3NzQ2xhc3NOYW1lLT5pbnN0YW5jZU5hbWUpXG4gICAgdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlc1tjc3NDbGFzc05hbWVdID0gaW5zdGFuY2VOYW1lO1xuICB9XG5cbiAgdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXSA9IGNvbnN0cnVjdG9yRnVuY3Rpb247XG5cbiAgLy8gaWYgKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KGNsYXNzTmFtZSkpe1xuICAvLyAgICBjb25zb2xlLmVycm9yKFwiSW5zdGFuY2UgQ29uc3RydWN0b3IgZm9yIHR5cGUgJXMgYWxyZWFkeSBhZGRlZC4gU2tpcHBpbmdcIixjb25zdHJ1Y3RvckZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lKTtcbiAgLy8gICAgcmV0dXJuO1xuICAvLyB9XG4gIC8vIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzW2NsYXNzTmFtZV0gPSB7Ly9pbml0IHN0b3JhZ2UgZmllbGRzXG4gIC8vICAgIFwidHlwZU5hbWVcIjogY29uc3RydWN0b3JGdW5jdGlvbi5wcm90b3R5cGUubmFtZSxcbiAgLy8gICAgXCJjb25zdHJ1Y3RvclwiOiBjb25zdHJ1Y3RvckZ1bmN0aW9uXG4gIC8vIH07XG4gIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0gPSBbXTtcbiAgaWYgKCFpc1NraXBJbml0aWFsaXphdGlvbikge1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjc3NDbGFzc05hbWUpOy8vIGluaXQgYWRkIG5vZGVzIHdpdGggdGhpcyBjbGFzc1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5hZGRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGVzW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogT2xkIG1ldGhvZCB0byByZWdpc3RlciBpbnN0YW5jZSB0eXBlXG4gKiBAcGFyYW0geyp9IGNsYXNzTmFtZVxuICogQHBhcmFtIHsqfSBjb25zdHJ1Y3RvckZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IGlzU2tpcEluaXRpYWxpemF0aW9uXG4gKiBAcmV0dXJuIHsqfVxuICogQGRlcHJlY2F0ZWRcbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuYWRkSW5zdGFuY2VUeXBlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgY29uc3RydWN0b3JGdW5jdGlvbiwgaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcbiAgY29uc29sZS53YXJuKCdhZGRJbnN0YW5jZVR5cGUgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSByZWdpc3Rlckluc3RhbmNlVHlwZSBpbnN0ZWFkJyk7XG4gIHJldHVybiB0aGlzLnJlZ2lzdGVySW5zdGFuY2VUeXBlKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGlzU2tpcEluaXRpYWxpemF0aW9uKTtcbn07XG5cblxuLyoqXG4gKiBBZGQgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAtIGRvbSBub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIGZvciBzZW5kIHRvIHRoZSBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lLCBub2RlLCBvcHRpb25zKSB7XG4gIGNvbnN0IEluc3RhbmNlQ29uc3RydWN0b3IgPSB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5qc0NvbnN0cnVjdG9yc1tpbnN0YW5jZU5hbWVdO1xuICBjb25zdCBpc0FscmVhZHlBZGRlZCA9IHRoaXMuZ2V0SW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlKTtcblxuICBpZiAoIUluc3RhbmNlQ29uc3RydWN0b3IgfHwgaXNBbHJlYWR5QWRkZWQpIHsgLy8gaWYgbm90IGZvdW5kIHRoaXMgdHlwZSAgb3IgYWxyZWFkeSBhZGRlZCAtIHJldHVyblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IEluc3RhbmNlQ29uc3RydWN0b3IodGhpcy5zcGlyYWwsIG5vZGUsIG9wdGlvbnMpO1xuICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdLnB1c2goeyAvLyBhZGQgbmV3IGluc3RhbmNlIG9mIHRoaXMgdHlwZVxuICAgIG5vZGUsXG4gICAgaW5zdGFuY2UsXG4gIH0pO1xuXG4gIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ29uQWRkSW5zdGFuY2UnLCB7IGluc3RhbmNlLCB0eXBlOiBpbnN0YW5jZU5hbWUgfSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZSBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBub2RlIC0gZG9tIG5vZGUgSURcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSwgbm9kZSkge1xuICBjb25zdCBpbnN0YW5jZU9iaiA9IHRoaXMuZ2V0SW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlLCB0cnVlKTtcblxuICBpZiAoIWluc3RhbmNlT2JqKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGluc3RhbmNlT2JqLmluc3RhbmNlLmRpZSgpOy8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGNvbnN0IGtleSA9IHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0uaW5kZXhPZihpbnN0YW5jZU9iaik7XG4gIGlmIChrZXkgIT09IC0xKSB7IC8vIHJlbW92ZSBrZXlcbiAgICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdLnNwbGljZShrZXksIDEpO1xuICB9XG4gIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ29uUmVtb3ZlSW5zdGFuY2UnLCB7IGluc3RhbmNlOiBpbnN0YW5jZU9iaiwgdHlwZTogaW5zdGFuY2VOYW1lIH0pO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogR2V0IGluc3RhbmNlLiBSZXR1cm4gaW5zdGFuY2Ugb2JqZWN0IG9mIHRoaXMgZG9tIG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5vZGUgLSBkb20gbm9kZSBvIGRvbWUgbm9kZSBJRFxuICogQHBhcmFtIHtib29sZWFufSBbaXNSZXR1cm5PYmplY3RdIC0gcmV0dXJuIG9iamVjdCBvciBpbnN0YW5jZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lLCBub2RlLCBpc1JldHVybk9iamVjdCkge1xuICAvLyBUT0RPIGlzUmV0dXJuT2JqZWN0IG5vdCBuZWVkZWQuIFJlZmFjdG9yIGFuZCByZW1vdmVcblxuICBjb25zdCB0eXBlQXJyID0gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXTtcbiAgbGV0IHJldCA9IGZhbHNlO1xuICBpZiAoIXR5cGVBcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbm9kZSA9IChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpID8gbm9kZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5vZGUpO1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQga2V5ID0gMCwgbCA9IHR5cGVBcnIubGVuZ3RoOyBrZXkgPCBsOyBrZXkgKz0gMSkgeyAvLyBpdGVyYXRlIHN0b3JhZ2UgYW5kIHRyeSB0byBmaW5kIGluc3RhbmNlXG4gICAgaWYgKHR5cGVBcnJba2V5XS5ub2RlID09PSBub2RlKSB7XG4gICAgICByZXQgPSAoaXNSZXR1cm5PYmplY3QpID8gdHlwZUFycltrZXldIDogdHlwZUFycltrZXldLmluc3RhbmNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG4vKipcbiAqIEdldCBpbnN0YW5jZXMuIFJldHVybiBhcnJheSBvZiBpbnN0YW5jZXMgb2JqZWN0c1xuICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSAtIG5hbWUgb2YgaW5zdGFuY2VcbiAqIEByZXR1cm4ge2FycmF5fGJvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEluc3RhbmNlcyA9IGZ1bmN0aW9uIChpbnN0YW5jZU5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0gfHwgZmFsc2U7XG59O1xuXG5cbi8qKlxuICogUmVnaXN0ZXIgYWRkb24gZm9yIGluc3RhbmNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWRkb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgbmFtZSBvZiBpbnN0YW5jZSB0byByZWdpc3RlciBhZGRvblxuICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uVHlwZSB0eXBlIG9mIGFkZG9uIChtZXNzYWdlLGZpbGwsZXRjKVxuICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uTmFtZSBuYW1lIG9mIGFkZG9uIChzcGlyYWwsIGJvb3RzdHJhcCxldGMpXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlZ2lzdGVyQWRkb24gPSBmdW5jdGlvbiAoYWRkb24sIGluc3RhbmNlTmFtZSwgYWRkb25UeXBlLCBhZGRvbk5hbWUpIHtcbiAgaWYgKCF0aGlzLl9zdG9yYWdlLmFkZG9ucy5oYXNPd25Qcm9wZXJ0eShpbnN0YW5jZU5hbWUpKSB7XG4gICAgdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXSA9IHt9O1xuICB9XG4gIGlmICghdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXS5oYXNPd25Qcm9wZXJ0eShhZGRvblR5cGUpKSB7XG4gICAgdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdID0ge307XG4gIH1cbiAgaWYgKHRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXS5oYXNPd25Qcm9wZXJ0eShhZGRvbk5hbWUpKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlICVzIGFkZG9uIHR5cGUgJXMgYWxyZWFkeSByZWdpc3RlcmVkIGZvciBpbnN0YW5jZSAlcyEgU2tpcHBpbmcgcmVnaXN0cmF0aW9uLicsIGFkZG9uTmFtZSwgYWRkb25UeXBlLCBpbnN0YW5jZU5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV1bYWRkb25OYW1lXSA9IGFkZG9uO1xufTtcblxuLyoqXG4gKiBHZXQgcmVnaXN0ZXJlZCBhZGRvblxuICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSBuYW1lIG9mIGluc3RhbmNlIHRvIHJlZ2lzdGVyIGFkZG9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkb25UeXBlIHR5cGUgb2YgYWRkb24gKG1lc3NhZ2UsZmlsbCxldGMpXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkb25OYW1lIG5hbWUgb2YgYWRkb24gKHNwaXJhbCwgYm9vdHN0cmFwLGV0YylcbiAqIEByZXR1cm4geyp9XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEluc3RhbmNlQWRkb24gPSBmdW5jdGlvbiAoaW5zdGFuY2VOYW1lLCBhZGRvblR5cGUsIGFkZG9uTmFtZSkge1xuICBpZiAoIXRoaXMuX3N0b3JhZ2UuYWRkb25zLmhhc093blByb3BlcnR5KGluc3RhbmNlTmFtZSlcbiAgICAgICAgfHwgIXRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV0uaGFzT3duUHJvcGVydHkoYWRkb25UeXBlKVxuICAgICAgICB8fCAhdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdLmhhc093blByb3BlcnR5KGFkZG9uTmFtZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXVthZGRvbk5hbWVdO1xufTtcblxuXG4vKipcbiAqIEdldCBhbGwgcmVnaXN0ZXJlZCBjbGFzc2VzXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0Q2xhc3NlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmNzc0NsYXNzZXMpO1xufTtcblxuLyoqXG4gKiBGb3IgZ2l2ZW4gY3NzQ2xhc3MgcmV0dXJuIG5hbWUgb2YgaW5zdGFuY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBjc3NDbGFzc1xuICogQHJldHVybiB7Kn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyA9IGZ1bmN0aW9uIChjc3NDbGFzcykge1xuICByZXR1cm4gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlc1tjc3NDbGFzc107XG59O1xuXG4vKipcbiAqIEdldCBjb25zdHJ1Y3RvciBieSBuYW1lIG9yIGNsYXNzIG5hbWVcbiAqIEBwYXJhbSB7Kn0gbmFtZVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZUNvbnN0cnVjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVE9ET1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnN0YW5jZXNDb250cm9sbGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIFRoaXMgcGx1Z2luIGFkZHMgYWJpbGl0eSB0byBwZXJmb3JtIGFjdGlvbnMgZnJvbSB0aGUgc2VydmVyLlxuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBcImFjdGlvblwiOlwicmVsb2FkXCJcbiAqIFwiYWN0aW9uXCI6e1wicmVkaXJlY3RcIjpcIi9hY2NvdW50XCJ9XG4gKiBcImFjdGlvblwiOntcInJlZGlyZWN0XCI6XCIvYWNjb3VudFwiLFwiZGVsYXlcIjozMDAwfVxuICogXCJhY3Rpb25cIjp7XCJuYW1lXCI6XCJyZWRpcmVjdFwiLFwidXJsXCI6XCIvYWNjb3VudFwiLFwiZGVsYXlcIjozMDAwfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZikge1xuICBzZi5hamF4LmV2ZW50cy5vbignbG9hZCcsIChvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgeyByZXNwb25zZSB9ID0gb3B0aW9ucztcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5kYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgIGlmICghZGF0YS5hY3Rpb24pIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgZGF0YS5hY3Rpb24gPT09ICdzdHJpbmcnKSB7IC8vIFwiYWN0aW9uXCI6XCJyZWxvYWRcIlxuICAgICAgc2YuZXZlbnRzLnRyaWdnZXIoZGF0YS5hY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEuYWN0aW9uKTtcbiAgICAgIC8vIFRPRE86IG5vdGlmaWNhdGlvbnNcbiAgICAgIC8vIGlmIChrZXlzLmluZGV4T2YoJ2ZsYXNoJykgIT09IC0xKSB7XG4gICAgICAvLyAgIGNvbnN0IHsgZmxhc2ggfSA9IGRhdGEuYWN0aW9uO1xuICAgICAgLy8gICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgLy8gICBsZXQgc2ZGbGFzaE1lc3NhZ2UgPSB7fTtcblxuICAgICAgLy8gICBpZiAodHlwZW9mIGRhdGEuYWN0aW9uLmZsYXNoID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gICAgIHNmRmxhc2hNZXNzYWdlID0gZmxhc2g7XG4gICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UudGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIHNmRmxhc2hNZXNzYWdlID0ge1xuICAgICAgLy8gICAgICAgbWVzc2FnZTogZmxhc2gsXG4gICAgICAvLyAgICAgICB0aW1lc3RhbXAsXG4gICAgICAvLyAgICAgfTtcbiAgICAgIC8vICAgfVxuXG4gICAgICAvLyAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NmRmxhc2hNZXNzYWdlJywgSlNPTi5zdHJpbmdpZnkoc2ZGbGFzaE1lc3NhZ2UpKTtcbiAgICAgIC8vIH1cblxuICAgICAgaWYgKGtleXMuaW5kZXhPZigncmVkaXJlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2YuZXZlbnRzLnRyaWdnZXIoJ3JlZGlyZWN0JywgZGF0YS5hY3Rpb24ucmVkaXJlY3QsIG9wdGlvbnMpO1xuICAgICAgICB9LCArZGF0YS5hY3Rpb24uZGVsYXkgfHwgMCk7XG4gICAgICB9IGVsc2UgaWYgKGtleXMuaW5kZXhPZignbmFtZScpICE9PSAtMSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZi5ldmVudHMudHJpZ2dlcihkYXRhLmFjdGlvbi5uYW1lLCBkYXRhLmFjdGlvbi51cmwpO1xuICAgICAgICB9LCArZGF0YS5hY3Rpb24uZGVsYXkgfHwgMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FjdGlvbiBmcm9tIHNlcnZlci4gU29tZXRoaW5nIHdyb25nLiAnLCBkYXRhLmFjdGlvbik7XG4gICAgfVxuICB9KTtcblxuICAvLyAoZnVuY3Rpb24gKHNmRmxhc2hNZXNzYWdlKSB7XG4gIC8vICAgaWYgKCFzZkZsYXNoTWVzc2FnZSkgcmV0dXJuO1xuXG4gIC8vICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2Uoc2ZGbGFzaE1lc3NhZ2UpO1xuICAvLyAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gIC8vICAgbGV0IGZsYXNoQ2xhc3M7XG5cbiAgLy8gICBpZiAodGltZXN0YW1wIC0gbWVzc2FnZS50aW1lc3RhbXAgPiAxMDAwMCkgcmV0dXJuO1xuXG4gIC8vICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2RlYnVnJyB8fCBtZXNzYWdlLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAvLyAgICAgZmxhc2hDbGFzcyA9ICdkZWJ1Zyc7XG4gIC8vICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdpbmZvJyB8fCAhbWVzc2FnZS50eXBlIHx8IG1lc3NhZ2UudHlwZSA9PT0gJ25vdGljZScpIHtcbiAgLy8gICAgIGZsYXNoQ2xhc3MgPSAnaW5mbyc7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGZsYXNoQ2xhc3MgPSAnZGFuZ2VyJztcbiAgLy8gICB9XG5cbiAgLy8gICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vICAgY29uc3Qgbm9kZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gICBub2RlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmbGFzaC13cmFwcGVyJyk7XG4gIC8vICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdmbGFzaCcsIGZsYXNoQ2xhc3MpO1xuICAvLyAgIG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZS5tZXNzYWdlO1xuICAvLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZVdyYXBwZXIpO1xuICAvLyAgIG5vZGVXcmFwcGVyLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICBub2RlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIC8vICAgfSwgMSk7XG5cbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIG5vZGVXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgLy8gICB9LCBtZXNzYWdlLnRpbWVvdXQgfHwgNTAwMCk7XG5cbiAgLy8gICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzZkZsYXNoTWVzc2FnZScpO1xuICAvLyB9KHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3NmRmxhc2hNZXNzYWdlJykpKTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXNlRXZlbnRzKGV2ZW50cykge1xuICBldmVudHMub24oJ3JlZGlyZWN0JywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdXJsID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV2ZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScgPyBldmVudCA6IGV2ZW50LnVybDtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNjg3MDk5L2hvdy10by10ZXN0LWlmLWEtdXJsLXN0cmluZy1pcy1hYnNvbHV0ZS1vci1yZWxhdGl2ZVxuICAgIGNvbnN0IGlzQWJzb2x1dGUgPSAvXig/OlthLXpdKzopP1xcL1xcLy9pLnRlc3QodXJsKTtcbiAgICBpZiAoaXNBYnNvbHV0ZSkge1xuICAgICAgc2VsZi5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgICAgfHwgKGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfSR7d2luZG93LmxvY2F0aW9uLnBvcnQgPyBgOiR7d2luZG93LmxvY2F0aW9uLnBvcnR9YCA6ICcnfWApO1xuICAgICAgc2VsZi5sb2NhdGlvbi5ocmVmID0gb3JpZ2luICsgKCh1cmwuY2hhckF0KDApID09PSAnLycpID8gdXJsIDogKGAvJHt1cmx9YCkpOyAvLyBSZWxhdGl2ZSBwYXRoXG4gICAgfVxuICB9KTtcblxuICBldmVudHMub24oJ3JlbG9hZCcsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGV2ZW50cy5vbigncmVmcmVzaCcsICgpID0+IHtcbiAgICBldmVudHMudHJpZ2dlcigncmVsb2FkJyk7XG4gIH0pO1xuXG4gIGV2ZW50cy5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgc2VsZi5jbG9zZSgpO1xuICB9KTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFuaXB1bGF0ZSBET00gRXZlbnRzLiBJdCdzIGEgc2ltcGxlIHdyYXBwZXIgYXJvdW5kIFwiYWRkRXZlbnRMaXN0ZW5lclwiIGJ1dCBpdCdzIHN0b3JlIGFsbCBmdW5jdGlvbnMgYW5kIGFsbG93IHVzIHRvIHJlbW92ZSBpdCBhbGwuXG4gKiBJdCdzIHZlcnkgaGVscGZ1bCBmb3IgZGllKCkgbWV0aG9kIG9mIGluc3RhbmNlc1xuICogQFRPRE8gYWRkIHRvIG1hbnkgbm9kZXNcbiAqIEBUT0RPIG5ldyBtZXRob2QgbGlrZSBhZGRFdmVudExpc3RlbmVyICBET01FdmVudHMub24obm9kZShzKSxldmVudCxjYWxsYmFjayx1c2VDYXB0dXJlKTtcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBET01FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgICAqIEludGVybmFsIHN0b3JhZ2UgZm9yIGV2ZW50c1xuICAgICAqIEBwcm9wZXJ0eSB7QXJyYXkuPE9iamVjdD59IERPTUV2ZW50cyAtIGRvbSBldmVudHMgYXJyYXlcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gRE9NRXZlbnRzLkRPTU5vZGUgLSAgIERPTSBub2RlXG4gICAgICogQHByb3BlcnR5IHtTdHJpbmd9IERPTUV2ZW50cy5ldmVudFR5cGUgLSAgIEV2ZW50IHR5cGVcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBET01FdmVudHMuZXZlbnRGdW5jdGlvbiAtICAgRnVuY3Rpb25cbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IERPTUV2ZW50cy51c2VDYXB0dXJlPWZhbHNlIC0gICB1c2VDYXB0dXJlXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IC4uLiAtICAgYW5vdGhlciBvYmplY3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICB0aGlzLl9ET01FdmVudHNTdG9yYWdlID0gW107XG59O1xuLyoqXG4gKiBBZGQgZXZlbnQocykgdG8gbm9kZShzKS5cbiAqIEBUT0RPIGFkZCB0byBtYW55IG5vZGVzXG4gKiBAcGFyYW0ge0FycmF5LjxPYmplY3Q+fE9iamVjdH0gZXZlbnRBcnJheSAtIGV2ZW50IGFycmF5IG9yIGV2ZW50IGl0c2VsZlxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50QXJyYXkuRE9NTm9kZSAtICAgRE9NIG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudEFycmF5LmV2ZW50VHlwZSAtICAgRXZlbnQgdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXZlbnRBcnJheS5ldmVudEZ1bmN0aW9uIC0gICBGdW5jdGlvblxuICogQHBhcmFtIHtCb29sZWFufSBbZXZlbnRBcnJheS51c2VDYXB0dXJlPWZhbHNlXSAtICAgdXNlQ2FwdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBET01FdmVudHNJbnN0YW5jZSA9IG5ldyBET01FdmVudHMoKTtcbiAqIHZhciBldmVudE9uZSA9IHtcbiAqICAgICAgRE9NTm9kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpLFxuICogICAgICBldmVudFR5cGU6IFwiY2xpY2tcIixcbiAqICAgICAgZXZlbnRGdW5jdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGkgdGhlcmUuIE5hdGl2ZSAgRE9NIGV2ZW50cyBpczpcIixlKTtcbiAqICAgICAgfVxuICogfVxuICogIHZhciBldmVudFR3byA9IHtcbiAqICAgICAgRE9NTm9kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlMlwiKSxcbiAqICAgICAgZXZlbnRUeXBlOiBcIm1vdXNlZG93blwiLFxuICogICAgICBldmVudEZ1bmN0aW9uOiBmdW5jdGlvbiAoZSkge1xuICogICAgICAgICAgY29uc29sZS5sb2coXCJIaSB0aGVyZS4gbW91c2Vkb3duIGV2ZW50LiBOYXRpdmUgIERPTSBldmVudHMgaXM6XCIsZSk7XG4gKiAgICAgIH1cbiAqIH1cbiAqICBET01FdmVudHNJbnN0YW5jZS5hZGQoW2V2ZW50T25lLGV2ZW50VHdvXSk7XG4gKi9cbkRPTUV2ZW50cy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGV2ZW50QXJyYXkpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChbXSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICBldmVudEFycmF5ID0gW2V2ZW50QXJyYXldO1xuICB9XG4gIGV2ZW50QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFsLnVzZUNhcHR1cmUgPSAhISh2YWwudXNlQ2FwdHVyZSk7XG4gICAgdmFsLkRPTU5vZGUuYWRkRXZlbnRMaXN0ZW5lcih2YWwuZXZlbnRUeXBlLCB2YWwuZXZlbnRGdW5jdGlvbiwgdmFsLnVzZUNhcHR1cmUpO1xuICAgIHRoaXMuX0RPTUV2ZW50c1N0b3JhZ2UucHVzaCh2YWwpO1xuICB9LCB0aGlzKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50c1xuICogQHBhcmFtIHtBcnJheS48T2JqZWN0Pn0gZXZlbnRBcnJheSAtIGV2ZW50IGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRBcnJheS5ET01Ob2RlIC0gICBET00gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50QXJyYXkuZXZlbnRUeXBlIC0gICBFdmVudCB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBldmVudEFycmF5LmV2ZW50RnVuY3Rpb24gLSAgIEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtldmVudEFycmF5LnVzZUNhcHR1cmU9ZmFsc2VdIC0gICB1c2VDYXB0dXJlXG4gKi9cbkRPTUV2ZW50cy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKC8qIGV2ZW50QXJyYXkgKi8pIHtcbiAgLy8gVE9ETyBJTVBMRU1FTlRcbiAgLy8gVE9ETyDQvdC1INGD0LLQtdGA0LXQvSDRh9GC0L4g0Y3RgtC+0YIg0LzQtdGC0L7QtCDQvdC10L7QsdGF0L7QtNC40LwuINC10YHQu9C4INC90LDQtNC+INGH0LDRgdGC0L4g0YPQsdC40YDQsNGC0Ywg0LrQsNC60LjQtdGC0L4g0L7QsdGA0LDQsdC+0YLRh9C40LrQuCwg0YLQviDQu9GD0YfRiNC1INC/0L7RgdGC0LDQstC40YLRjCDQvtCx0YDQsNCx0L7RgtGH0LrQuCDQvdCwINGA0L7QtNC40YLQtdC70Y9cbiAgY29uc29sZS53YXJuKCdUT0RPIElNUExFTUVOVCcpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGRvbSBldmVudHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgaW5zdGFuY2UgKGFkZGVkIGJ5IG1ldGhvZCBhZGQpXG4gKiBAZXhhbXBsZVxuICogLy9sb29rIGF0IGFkZCBtZXRob2QgYXMgZmlyc3QgcGFydCBvZiB0aGlzIGNvZGVcbiAqIERPTUV2ZW50c0luc3RhbmNlLnJlbW92ZUFsbCgpO1xuICovXG5ET01FdmVudHMucHJvdG90eXBlLnJlbW92ZUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fRE9NRXZlbnRzU3RvcmFnZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICB2YWwuRE9NTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHZhbC5ldmVudFR5cGUsIHZhbC5ldmVudEZ1bmN0aW9uLCB2YWwudXNlQ2FwdHVyZSk7XG4gIH0pO1xuICB0aGlzLl9ET01FdmVudHNTdG9yYWdlID0gW107XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTUV2ZW50cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKipcbiBUaGlzIGlzIGEgY29sbGVjdGlvbiBvZiB1c2VmdWwgRE9NIHRvb2xzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgICAqIEZvdW5kIGZpcnN0IHBhcmVudCBub2RlIHdpdGggbWF0Y2hlZCBzZWxlY3RvcihzKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0gZG9tIG5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gc2VsZWN0b3JzIC0gc2VsZWN0b3Igb3IgYXJyYXkgb2Ygc2VsZWN0b3JzXG4gICAgICogQHJldHVybnMge09iamVjdHwgQm9vbGVhbn0gLSBub2RlIG9yIGZhbHNlXG4gICAgICovXG5cbiAgY2xvc2VzdChlbGVtLCBzZWxlY3RvcnMpIHtcbiAgICBzZWxlY3RvcnMgPSAodHlwZW9mIHNlbGVjdG9ycyA9PT0gJ3N0cmluZycpID8gW3NlbGVjdG9yc10gOiBzZWxlY3RvcnM7XG4gICAgbGV0IGtleTtcbiAgICBjb25zdCBsID0gc2VsZWN0b3JzLmxlbmd0aDtcbiAgICBjb25zdCBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtLm1hdGNoZXMgfHwgZWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIHdoaWxlIChlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsOyBrZXkgKz0gMSkge1xuICAgICAgICBpZiAobWF0Y2hlc1NlbGVjdG9yLmNhbGwoZWxlbSwgc2VsZWN0b3JzW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgLyoqXG4gICAgICogRm91bmQgZmlyc3QgcGFyZW50IG5vZGUgd2l0aCBtYXRjaGVkIGNsYXNzTmFtZShzKS5cbiAgICAgKiBUT0RPIFdoeSB0aGlzPyBCZWNhdXNlIG9sZCBJRS4uLi5cbiAgICAgKiBUT0RPIEl0J3Mgbm90IGdvb2QsIGJlY2F1c2UgaXQncyBhIGNvcHkgb2YgY2xvc2VzdCBAc2VlIGNsb3Nlc3QuIFJlZmFjdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBkb20gbm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBjbGFzc05hbWUgLSBjbGFzc05hbWUgb3IgYXJyYXkgb2YgY2xhc3NOYW1lc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8IEJvb2xlYW59IC0gbm9kZSBvciBmYWxzZVxuICAgICAqL1xuXG4gIGNsb3Nlc3RCeUNsYXNzTmFtZShlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWUgPSAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpID8gW2NsYXNzTmFtZV0gOiBjbGFzc05hbWU7XG4gICAgbGV0IGtleTtcbiAgICBjb25zdCBsID0gY2xhc3NOYW1lLmxlbmd0aDtcblxuICAgIHdoaWxlIChlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsOyBrZXkgKz0gMSkge1xuICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGAoXFxcXHN8Xikke2NsYXNzTmFtZVtrZXldfShcXFxcc3wkKWApO1xuICAgICAgICBpZiAoZWxlbS5jbGFzc05hbWUubWF0Y2gocmVnKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbi8qKlxuICogQG1vZHVsZSB0b29sc1xuICogQG5hbWVzcGFjZVxuICovXG5jb25zdCB0b29scyA9IHtcbiAgcmVzb2x2ZUtleVBhdGgocGF0aCwgb2JqLCBzYWZlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+ICghc2FmZSA/IHByZXZbY3Vycl0gOiAocHJldiA/IHByZXZbY3Vycl0gOiB1bmRlZmluZWQpKSwgb2JqIHx8IHNlbGYpO1xuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0b29scztcbiIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhIHNwaXJhbC1zcGVjaWZpYyBzZiBidW5kbGVcbiAqIFRPRE86IFRoaXMgd3JhcHBpbmcgbG9va3MgdmVyeSBmaXNoeSwgd2h5IHdlIG5lZWQgaXQ/IE1vdmUgdG8gdG9vbGtpdCBtYXkgYmU/XG4gKi9cbmNvbnN0IHNmID0gcmVxdWlyZSgnLi9zZicpO1xuXG5jb25zdCBzZldyYXBwZXIgPSB7XG4gIGNvcmU6IHNmLmNvcmUsXG4gIGhlbHBlcnM6IHNmLmhlbHBlcnMsXG4gIHRvb2xzOiBzZi50b29scyxcbn07XG5cbi8vIEFkZCBjb25zb2xlIHNoaW0gZm9yIG9sZCBJRVxucmVxdWlyZSgnLi9zaGltL2NvbnNvbGUnKTtcbnJlcXVpcmUoJy4vc2hpbS9PYmplY3QuYXNzaWduJyk7XG5cbmlmICghc2ZXcmFwcGVyLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHNmV3JhcHBlci5vcHRpb25zID0geyBpbnN0YW5jZXM6IHt9IH07XG5pZiAoIXNmV3JhcHBlci5vcHRpb25zLmhhc093blByb3BlcnR5KCdpbnN0YW5jZXMnKSkgc2ZXcmFwcGVyLm9wdGlvbnMuaW5zdGFuY2VzID0ge307XG5cbnNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyID0gbmV3IHNmV3JhcHBlci5jb3JlLkluc3RhbmNlc0NvbnRyb2xsZXIoc2ZXcmFwcGVyKTtcbnNmV3JhcHBlci5kb21NdXRhdGlvbiA9IG5ldyBzZldyYXBwZXIuY29yZS5Eb21NdXRhdGlvbnMoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuXG4vLyBFdmVudHMgc3lzdGVtXG5zZldyYXBwZXIuZXZlbnRzID0gbmV3IHNmV3JhcHBlci5jb3JlLkV2ZW50cygpO1xucmVxdWlyZSgnLi9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLmpzJykoc2ZXcmFwcGVyLmV2ZW50cyk7XG5cbi8vIEFKQVhcbnNmV3JhcHBlci5hamF4ID0gbmV3IHNmV3JhcHBlci5jb3JlLkFqYXgod2luZG93ICYmIHdpbmRvdy5jc3JmVG9rZW4gPyB7XG4gIC8vIFRPRE8gbW92ZSB0byBzcGlyYWwgYmluZGluZ3NcbiAgaGVhZGVyczoge1xuICAgICdYLUNTUkYtVG9rZW4nOiB3aW5kb3cuY3NyZlRva2VuLFxuICB9LFxufSA6IG51bGwpO1xuXG4vLyBBQ1RJT05TXG5yZXF1aXJlKCcuL2NvcmUvYWpheC9iYXNlQWN0aW9ucy5qcycpKHNmV3JhcHBlcik7XG5cbi8vIEFQSVxuc2ZXcmFwcGVyLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoc2ZXcmFwcGVyLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG59O1xuXG5zZldyYXBwZXIucmVnaXN0ZXJJbnN0YW5jZVR5cGUgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5yZWdpc3Rlckluc3RhbmNlVHlwZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcbnNmV3JhcHBlci5hZGRJbnN0YW5jZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLmFkZEluc3RhbmNlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuc2ZXcmFwcGVyLnJlbW92ZUluc3RhbmNlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIucmVtb3ZlSW5zdGFuY2UuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5zZldyYXBwZXIuZ2V0SW5zdGFuY2UgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcbnNmV3JhcHBlci5nZXRJbnN0YW5jZXMgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZXMuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5cbnNmV3JhcHBlci5jbG9zZXN0ID0gc2YuaGVscGVycy5kb21Ub29scy5jbG9zZXN0O1xuc2ZXcmFwcGVyLnJlc29sdmVLZXlQYXRoID0gc2YudG9vbHMucmVzb2x2ZUtleVBhdGg7XG5cbm1vZHVsZS5leHBvcnRzID0gc2ZXcmFwcGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cblxuY29uc3QgY29yZSA9IHtcbiAgQWpheDogcmVxdWlyZSgnLi9jb3JlL0FqYXgnKSxcbiAgQmFzZURPTUNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yJyksXG4gIERvbU11dGF0aW9uczogcmVxdWlyZSgnLi9jb3JlL0RvbU11dGF0aW9ucycpLFxuICBFdmVudHM6IHJlcXVpcmUoJy4vY29yZS9FdmVudHMnKSxcbiAgSW5zdGFuY2VzQ29udHJvbGxlcjogcmVxdWlyZSgnLi9jb3JlL0luc3RhbmNlc0NvbnRyb2xsZXInKSxcbn07XG5cbmNvbnN0IGhlbHBlcnMgPSB7XG4gIERPTUV2ZW50czogcmVxdWlyZSgnLi9oZWxwZXJzL0RPTUV2ZW50cycpLFxuICBkb21Ub29sczogcmVxdWlyZSgnLi9oZWxwZXJzL2RvbVRvb2xzJyksXG4gIC8vIExpa2VGb3JtRGF0YTogcmVxdWlyZSgnLi9oZWxwZXJzL0xpa2VGb3JtRGF0YScpLFxuICAvLyB0b29sczogcmVxdWlyZSgnLi9oZWxwZXJzL3Rvb2xzJyksXG59O1xuXG5jb25zdCBzZiA9IHtcbiAgY29yZSxcbiAgaGVscGVycyxcbiAgdG9vbHM6IHJlcXVpcmUoJy4vaGVscGVycy90b29scycpLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qKlxuICogT2JqZWN0LmFzc2lnbiBwb2x5ZmlsbFxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnblxuICovXG5pZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT09ICdmdW5jdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkIHx8IHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBzb3VyY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBmb3IgKGNvbnN0IG5leHRLZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChuZXh0S2V5KSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtuZXh0S2V5XSA9IHNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuICB9KCkpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyoqXG4gKiBBdm9pZCBgY29uc29sZWAgZXJyb3JzIGluIGJyb3dzZXJzIHRoYXQgbGFjayBhIGNvbnNvbGUuXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIGxldCBtZXRob2Q7XG4gIGNvbnN0IG5vb3AgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGNvbnN0IG1ldGhvZHMgPSBbXG4gICAgJ2Fzc2VydCcsICdjbGVhcicsICdjb3VudCcsICdkZWJ1ZycsICdkaXInLCAnZGlyeG1sJywgJ2Vycm9yJyxcbiAgICAnZXhjZXB0aW9uJywgJ2dyb3VwJywgJ2dyb3VwQ29sbGFwc2VkJywgJ2dyb3VwRW5kJywgJ2luZm8nLCAnbG9nJyxcbiAgICAnbWFya1RpbWVsaW5lJywgJ3Byb2ZpbGUnLCAncHJvZmlsZUVuZCcsICd0YWJsZScsICd0aW1lJywgJ3RpbWVFbmQnLFxuICAgICd0aW1lU3RhbXAnLCAndHJhY2UnLCAnd2FybicsXG4gIF07XG4gIGxldCB7IGxlbmd0aCB9ID0gbWV0aG9kcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICBjb25zdCBjb25zb2xlID0gKHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF07XG5cbiAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXG4gICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IG5vb3A7XG4gICAgfVxuICB9XG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "../datagrid/dist/datagrid.js":
/*!************************************!*\
  !*** ../datagrid/dist/datagrid.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js"));else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../node_modules/decode-uri-component/index.js":
      /*!*************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/decode-uri-component/index.js ***!
        \*************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var token = '%[a-f0-9]{2}';
        var singleMatcher = new RegExp(token, 'gi');
        var multiMatcher = new RegExp('(' + token + ')+', 'gi');

        function decodeComponents(components, split) {
          try {
            // Try to decode the entire string first
            return decodeURIComponent(components.join(''));
          } catch (err) {// Do nothing
          }

          if (components.length === 1) {
            return components;
          }

          split = split || 1; // Split the array in 2 parts

          var left = components.slice(0, split);
          var right = components.slice(split);
          return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
        }

        function decode(input) {
          try {
            return decodeURIComponent(input);
          } catch (err) {
            var tokens = input.match(singleMatcher);

            for (var i = 1; i < tokens.length; i++) {
              input = decodeComponents(tokens, i).join('');
              tokens = input.match(singleMatcher);
            }

            return input;
          }
        }

        function customDecodeURIComponent(input) {
          // Keep track of all the replacements and prefill the map with the `BOM`
          var replaceMap = {
            '%FE%FF': '\uFFFD\uFFFD',
            '%FF%FE': '\uFFFD\uFFFD'
          };
          var match = multiMatcher.exec(input);

          while (match) {
            try {
              // Decode as big chunks as possible
              replaceMap[match[0]] = decodeURIComponent(match[0]);
            } catch (err) {
              var result = decode(match[0]);

              if (result !== match[0]) {
                replaceMap[match[0]] = result;
              }
            }

            match = multiMatcher.exec(input);
          } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else


          replaceMap['%C2'] = '\uFFFD';
          var entries = Object.keys(replaceMap);

          for (var i = 0; i < entries.length; i++) {
            // Replace all decoded components
            var key = entries[i];
            input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
          }

          return input;
        }

        module.exports = function (encodedURI) {
          if (typeof encodedURI !== 'string') {
            throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
          }

          try {
            encodedURI = encodedURI.replace(/\+/g, ' '); // Try the built in decoder first

            return decodeURIComponent(encodedURI);
          } catch (err) {
            // Fallback to a more advanced decoder
            return customDecodeURIComponent(encodedURI);
          }
        };
        /***/

      },

      /***/
      "../../node_modules/node-libs-browser/node_modules/assert/assert.js":
      /*!*******************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/node-libs-browser/node_modules/assert/assert.js ***!
        \*******************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */

        (function (global) {
          var objectAssign = __webpack_require__(
          /*! object-assign */
          "../../node_modules/object-assign/index.js"); // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
          // original notice:

          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
           * @license  MIT
           */


          function compare(a, b) {
            if (a === b) {
              return 0;
            }

            var x = a.length;
            var y = b.length;

            for (var i = 0, len = Math.min(x, y); i < len; ++i) {
              if (a[i] !== b[i]) {
                x = a[i];
                y = b[i];
                break;
              }
            }

            if (x < y) {
              return -1;
            }

            if (y < x) {
              return 1;
            }

            return 0;
          }

          function isBuffer(b) {
            if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
              return global.Buffer.isBuffer(b);
            }

            return !!(b != null && b._isBuffer);
          } // based on node assert, original notice:
          // NB: The URL to the CommonJS spec is kept just for tradition.
          //     node-assert has evolved a lot since then, both in API and behavior.
          // http://wiki.commonjs.org/wiki/Unit_Testing/1.0
          //
          // THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
          //
          // Originally from narwhal.js (http://narwhaljs.org)
          // Copyright (c) 2009 Thomas Robinson <280north.com>
          //
          // Permission is hereby granted, free of charge, to any person obtaining a copy
          // of this software and associated documentation files (the 'Software'), to
          // deal in the Software without restriction, including without limitation the
          // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
          // sell copies of the Software, and to permit persons to whom the Software is
          // furnished to do so, subject to the following conditions:
          //
          // The above copyright notice and this permission notice shall be included in
          // all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
          // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


          var util = __webpack_require__(
          /*! util/ */
          "../../node_modules/util/util.js");

          var hasOwn = Object.prototype.hasOwnProperty;
          var pSlice = Array.prototype.slice;

          var functionsHaveNames = function () {
            return function foo() {}.name === 'foo';
          }();

          function pToString(obj) {
            return Object.prototype.toString.call(obj);
          }

          function isView(arrbuf) {
            if (isBuffer(arrbuf)) {
              return false;
            }

            if (typeof global.ArrayBuffer !== 'function') {
              return false;
            }

            if (typeof ArrayBuffer.isView === 'function') {
              return ArrayBuffer.isView(arrbuf);
            }

            if (!arrbuf) {
              return false;
            }

            if (arrbuf instanceof DataView) {
              return true;
            }

            if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
              return true;
            }

            return false;
          } // 1. The assert module provides functions that throw
          // AssertionError's when particular conditions are not met. The
          // assert module must conform to the following interface.


          var assert = module.exports = ok; // 2. The AssertionError is defined in assert.
          // new assert.AssertionError({ message: message,
          //                             actual: actual,
          //                             expected: expected })

          var regex = /\s*function\s+([^\(\s]*)\s*/; // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js

          function getName(func) {
            if (!util.isFunction(func)) {
              return;
            }

            if (functionsHaveNames) {
              return func.name;
            }

            var str = func.toString();
            var match = str.match(regex);
            return match && match[1];
          }

          assert.AssertionError = function AssertionError(options) {
            this.name = 'AssertionError';
            this.actual = options.actual;
            this.expected = options.expected;
            this.operator = options.operator;

            if (options.message) {
              this.message = options.message;
              this.generatedMessage = false;
            } else {
              this.message = getMessage(this);
              this.generatedMessage = true;
            }

            var stackStartFunction = options.stackStartFunction || fail;

            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, stackStartFunction);
            } else {
              // non v8 browsers so we can have a stacktrace
              var err = new Error();

              if (err.stack) {
                var out = err.stack; // try to strip useless frames

                var fn_name = getName(stackStartFunction);
                var idx = out.indexOf('\n' + fn_name);

                if (idx >= 0) {
                  // once we have located the function frame
                  // we need to strip out everything before it (and its line)
                  var next_line = out.indexOf('\n', idx + 1);
                  out = out.substring(next_line + 1);
                }

                this.stack = out;
              }
            }
          }; // assert.AssertionError instanceof Error


          util.inherits(assert.AssertionError, Error);

          function truncate(s, n) {
            if (typeof s === 'string') {
              return s.length < n ? s : s.slice(0, n);
            } else {
              return s;
            }
          }

          function inspect(something) {
            if (functionsHaveNames || !util.isFunction(something)) {
              return util.inspect(something);
            }

            var rawname = getName(something);
            var name = rawname ? ': ' + rawname : '';
            return '[Function' + name + ']';
          }

          function getMessage(self) {
            return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
          } // At present only the three keys mentioned above are used and
          // understood by the spec. Implementations or sub modules can pass
          // other keys to the AssertionError's constructor - they will be
          // ignored.
          // 3. All of the following functions must throw an AssertionError
          // when a corresponding condition is not met, with a message that
          // may be undefined if not provided.  All assertion methods provide
          // both the actual and expected values to the assertion error for
          // display purposes.


          function fail(actual, expected, message, operator, stackStartFunction) {
            throw new assert.AssertionError({
              message: message,
              actual: actual,
              expected: expected,
              operator: operator,
              stackStartFunction: stackStartFunction
            });
          } // EXTENSION! allows for well behaved errors defined elsewhere.


          assert.fail = fail; // 4. Pure assertion tests whether a value is truthy, as determined
          // by !!guard.
          // assert.ok(guard, message_opt);
          // This statement is equivalent to assert.equal(true, !!guard,
          // message_opt);. To test strictly for the value true, use
          // assert.strictEqual(true, guard, message_opt);.

          function ok(value, message) {
            if (!value) fail(value, true, message, '==', assert.ok);
          }

          assert.ok = ok; // 5. The equality assertion tests shallow, coercive equality with
          // ==.
          // assert.equal(actual, expected, message_opt);

          assert.equal = function equal(actual, expected, message) {
            if (actual != expected) fail(actual, expected, message, '==', assert.equal);
          }; // 6. The non-equality assertion tests for whether two objects are not equal
          // with != assert.notEqual(actual, expected, message_opt);


          assert.notEqual = function notEqual(actual, expected, message) {
            if (actual == expected) {
              fail(actual, expected, message, '!=', assert.notEqual);
            }
          }; // 7. The equivalence assertion tests a deep equality relation.
          // assert.deepEqual(actual, expected, message_opt);


          assert.deepEqual = function deepEqual(actual, expected, message) {
            if (!_deepEqual(actual, expected, false)) {
              fail(actual, expected, message, 'deepEqual', assert.deepEqual);
            }
          };

          assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
            if (!_deepEqual(actual, expected, true)) {
              fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
            }
          };

          function _deepEqual(actual, expected, strict, memos) {
            // 7.1. All identical values are equivalent, as determined by ===.
            if (actual === expected) {
              return true;
            } else if (isBuffer(actual) && isBuffer(expected)) {
              return compare(actual, expected) === 0; // 7.2. If the expected value is a Date object, the actual value is
              // equivalent if it is also a Date object that refers to the same time.
            } else if (util.isDate(actual) && util.isDate(expected)) {
              return actual.getTime() === expected.getTime(); // 7.3 If the expected value is a RegExp object, the actual value is
              // equivalent if it is also a RegExp object with the same source and
              // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
            } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
              return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase; // 7.4. Other pairs that do not both pass typeof value == 'object',
              // equivalence is determined by ==.
            } else if ((actual === null || typeof actual !== 'object') && (expected === null || typeof expected !== 'object')) {
              return strict ? actual === expected : actual == expected; // If both values are instances of typed arrays, wrap their underlying
              // ArrayBuffers in a Buffer each to increase performance
              // This optimization requires the arrays to have the same type as checked by
              // Object.prototype.toString (aka pToString). Never perform binary
              // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
              // bit patterns are not identical.
            } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
              return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0; // 7.5 For all other Object pairs, including Array objects, equivalence is
              // determined by having the same number of owned properties (as verified
              // with Object.prototype.hasOwnProperty.call), the same set of keys
              // (although not necessarily the same order), equivalent values for every
              // corresponding key, and an identical 'prototype' property. Note: this
              // accounts for both named and indexed properties on Arrays.
            } else if (isBuffer(actual) !== isBuffer(expected)) {
              return false;
            } else {
              memos = memos || {
                actual: [],
                expected: []
              };
              var actualIndex = memos.actual.indexOf(actual);

              if (actualIndex !== -1) {
                if (actualIndex === memos.expected.indexOf(expected)) {
                  return true;
                }
              }

              memos.actual.push(actual);
              memos.expected.push(expected);
              return objEquiv(actual, expected, strict, memos);
            }
          }

          function isArguments(object) {
            return Object.prototype.toString.call(object) == '[object Arguments]';
          }

          function objEquiv(a, b, strict, actualVisitedObjects) {
            if (a === null || a === undefined || b === null || b === undefined) return false; // if one is a primitive, the other must be same

            if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
            if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
            var aIsArgs = isArguments(a);
            var bIsArgs = isArguments(b);
            if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;

            if (aIsArgs) {
              a = pSlice.call(a);
              b = pSlice.call(b);
              return _deepEqual(a, b, strict);
            }

            var ka = objectKeys(a);
            var kb = objectKeys(b);
            var key, i; // having the same number of owned properties (keys incorporates
            // hasOwnProperty)

            if (ka.length !== kb.length) return false; //the same set of keys (although not necessarily the same order),

            ka.sort();
            kb.sort(); //~~~cheap key test

            for (i = ka.length - 1; i >= 0; i--) {
              if (ka[i] !== kb[i]) return false;
            } //equivalent values for every corresponding key, and
            //~~~possibly expensive deep test


            for (i = ka.length - 1; i >= 0; i--) {
              key = ka[i];
              if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
            }

            return true;
          } // 8. The non-equivalence assertion tests for any deep inequality.
          // assert.notDeepEqual(actual, expected, message_opt);


          assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
            if (_deepEqual(actual, expected, false)) {
              fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
            }
          };

          assert.notDeepStrictEqual = notDeepStrictEqual;

          function notDeepStrictEqual(actual, expected, message) {
            if (_deepEqual(actual, expected, true)) {
              fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
            }
          } // 9. The strict equality assertion tests strict equality, as determined by ===.
          // assert.strictEqual(actual, expected, message_opt);


          assert.strictEqual = function strictEqual(actual, expected, message) {
            if (actual !== expected) {
              fail(actual, expected, message, '===', assert.strictEqual);
            }
          }; // 10. The strict non-equality assertion tests for strict inequality, as
          // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);


          assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
            if (actual === expected) {
              fail(actual, expected, message, '!==', assert.notStrictEqual);
            }
          };

          function expectedException(actual, expected) {
            if (!actual || !expected) {
              return false;
            }

            if (Object.prototype.toString.call(expected) == '[object RegExp]') {
              return expected.test(actual);
            }

            try {
              if (actual instanceof expected) {
                return true;
              }
            } catch (e) {// Ignore.  The instanceof check doesn't work for arrow functions.
            }

            if (Error.isPrototypeOf(expected)) {
              return false;
            }

            return expected.call({}, actual) === true;
          }

          function _tryBlock(block) {
            var error;

            try {
              block();
            } catch (e) {
              error = e;
            }

            return error;
          }

          function _throws(shouldThrow, block, expected, message) {
            var actual;

            if (typeof block !== 'function') {
              throw new TypeError('"block" argument must be a function');
            }

            if (typeof expected === 'string') {
              message = expected;
              expected = null;
            }

            actual = _tryBlock(block);
            message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

            if (shouldThrow && !actual) {
              fail(actual, expected, 'Missing expected exception' + message);
            }

            var userProvidedMessage = typeof message === 'string';
            var isUnwantedException = !shouldThrow && util.isError(actual);
            var isUnexpectedException = !shouldThrow && actual && !expected;

            if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
              fail(actual, expected, 'Got unwanted exception' + message);
            }

            if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
              throw actual;
            }
          } // 11. Expected to throw an error:
          // assert.throws(block, Error_opt, message_opt);


          assert.throws = function (block,
          /*optional*/
          error,
          /*optional*/
          message) {
            _throws(true, block, error, message);
          }; // EXTENSION! This is annoying to write outside this module.


          assert.doesNotThrow = function (block,
          /*optional*/
          error,
          /*optional*/
          message) {
            _throws(false, block, error, message);
          };

          assert.ifError = function (err) {
            if (err) throw err;
          }; // Expose a strict only variant of assert


          function strict(value, message) {
            if (!value) fail(value, true, message, '==', strict);
          }

          assert.strict = objectAssign(strict, assert, {
            equal: assert.strictEqual,
            deepEqual: assert.deepStrictEqual,
            notEqual: assert.notStrictEqual,
            notDeepEqual: assert.notDeepStrictEqual
          });
          assert.strict.strict = assert.strict;

          var objectKeys = Object.keys || function (obj) {
            var keys = [];

            for (var key in obj) {
              if (hasOwn.call(obj, key)) keys.push(key);
            }

            return keys;
          };
          /* WEBPACK VAR INJECTION */

        }).call(this, __webpack_require__(
        /*! ./../../../webpack/buildin/global.js */
        "../../node_modules/webpack/buildin/global.js"));
        /***/
      },

      /***/
      "../../node_modules/object-assign/index.js":
      /*!******************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/object-assign/index.js ***!
        \******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */

        /* eslint-disable no-unused-vars */

        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;

        function toObject(val) {
          if (val === null || val === undefined) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
          }

          return Object(val);
        }

        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            } // Detect buggy property enumeration order in older V8 versions.
            // https://bugs.chromium.org/p/v8/issues/detail?id=4118


            var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

            test1[5] = 'de';

            if (Object.getOwnPropertyNames(test1)[0] === '5') {
              return false;
            } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


            var test2 = {};

            for (var i = 0; i < 10; i++) {
              test2['_' + String.fromCharCode(i)] = i;
            }

            var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
              return test2[n];
            });

            if (order2.join('') !== '0123456789') {
              return false;
            } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


            var test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
              test3[letter] = letter;
            });

            if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
              return false;
            }

            return true;
          } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false;
          }
        }

        module.exports = shouldUseNative() ? Object.assign : function (target, source) {
          var from;
          var to = toObject(target);
          var symbols;

          for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);

            for (var key in from) {
              if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
              }
            }

            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);

              for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                  to[symbols[i]] = from[symbols[i]];
                }
              }
            }
          }

          return to;
        };
        /***/
      },

      /***/
      "../../node_modules/process/browser.js":
      /*!**************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/process/browser.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        // shim for using process in browser
        var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
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
        })();

        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          } // if setTimeout wasn't available but was latter defined


          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }

          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }

        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          } // if clearTimeout wasn't available but was latter defined


          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }

          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
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

          while (len) {
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
        }; // v8 likes predictible objects


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

        process.listeners = function (name) {
          return [];
        };

        process.binding = function (name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function () {
          return '/';
        };

        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported');
        };

        process.umask = function () {
          return 0;
        };
        /***/

      },

      /***/
      "../../node_modules/query-string/index.js":
      /*!*****************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/query-string/index.js ***!
        \*****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        const strictUriEncode = __webpack_require__(
        /*! strict-uri-encode */
        "../../node_modules/strict-uri-encode/index.js");

        const decodeComponent = __webpack_require__(
        /*! decode-uri-component */
        "../../node_modules/decode-uri-component/index.js");

        const splitOnFirst = __webpack_require__(
        /*! split-on-first */
        "../../node_modules/split-on-first/index.js");

        const isNullOrUndefined = value => value === null || value === undefined;

        function encoderForArrayFormat(options) {
          switch (options.arrayFormat) {
            case 'index':
              return key => (result, value) => {
                const index = result.length;

                if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                  return result;
                }

                if (value === null) {
                  return [...result, [encode(key, options), '[', index, ']'].join('')];
                }

                return [...result, [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')];
              };

            case 'bracket':
              return key => (result, value) => {
                if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                  return result;
                }

                if (value === null) {
                  return [...result, [encode(key, options), '[]'].join('')];
                }

                return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
              };

            case 'comma':
            case 'separator':
              return key => (result, value) => {
                if (value === null || value === undefined || value.length === 0) {
                  return result;
                }

                if (result.length === 0) {
                  return [[encode(key, options), '=', encode(value, options)].join('')];
                }

                return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
              };

            default:
              return key => (result, value) => {
                if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
                  return result;
                }

                if (value === null) {
                  return [...result, encode(key, options)];
                }

                return [...result, [encode(key, options), '=', encode(value, options)].join('')];
              };
          }
        }

        function parserForArrayFormat(options) {
          let result;

          switch (options.arrayFormat) {
            case 'index':
              return (key, value, accumulator) => {
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, '');

                if (!result) {
                  accumulator[key] = value;
                  return;
                }

                if (accumulator[key] === undefined) {
                  accumulator[key] = {};
                }

                accumulator[key][result[1]] = value;
              };

            case 'bracket':
              return (key, value, accumulator) => {
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, '');

                if (!result) {
                  accumulator[key] = value;
                  return;
                }

                if (accumulator[key] === undefined) {
                  accumulator[key] = [value];
                  return;
                }

                accumulator[key] = [].concat(accumulator[key], value);
              };

            case 'comma':
            case 'separator':
              return (key, value, accumulator) => {
                const isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
                const newValue = isArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
                accumulator[key] = newValue;
              };

            default:
              return (key, value, accumulator) => {
                if (accumulator[key] === undefined) {
                  accumulator[key] = value;
                  return;
                }

                accumulator[key] = [].concat(accumulator[key], value);
              };
          }
        }

        function validateArrayFormatSeparator(value) {
          if (typeof value !== 'string' || value.length !== 1) {
            throw new TypeError('arrayFormatSeparator must be single character string');
          }
        }

        function encode(value, options) {
          if (options.encode) {
            return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
          }

          return value;
        }

        function decode(value, options) {
          if (options.decode) {
            return decodeComponent(value);
          }

          return value;
        }

        function keysSorter(input) {
          if (Array.isArray(input)) {
            return input.sort();
          }

          if (typeof input === 'object') {
            return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map(key => input[key]);
          }

          return input;
        }

        function removeHash(input) {
          const hashStart = input.indexOf('#');

          if (hashStart !== -1) {
            input = input.slice(0, hashStart);
          }

          return input;
        }

        function getHash(url) {
          let hash = '';
          const hashStart = url.indexOf('#');

          if (hashStart !== -1) {
            hash = url.slice(hashStart);
          }

          return hash;
        }

        function extract(input) {
          input = removeHash(input);
          const queryStart = input.indexOf('?');

          if (queryStart === -1) {
            return '';
          }

          return input.slice(queryStart + 1);
        }

        function parseValue(value, options) {
          if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
            value = Number(value);
          } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
            value = value.toLowerCase() === 'true';
          }

          return value;
        }

        function parse(input, options) {
          options = Object.assign({
            decode: true,
            sort: true,
            arrayFormat: 'none',
            arrayFormatSeparator: ',',
            parseNumbers: false,
            parseBooleans: false
          }, options);
          validateArrayFormatSeparator(options.arrayFormatSeparator);
          const formatter = parserForArrayFormat(options); // Create an object with no prototype

          const ret = Object.create(null);

          if (typeof input !== 'string') {
            return ret;
          }

          input = input.trim().replace(/^[?#&]/, '');

          if (!input) {
            return ret;
          }

          for (const param of input.split('&')) {
            let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='); // Missing `=` should be `null`:
            // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

            value = value === undefined ? null : options.arrayFormat === 'comma' ? value : decode(value, options);
            formatter(decode(key, options), value, ret);
          }

          for (const key of Object.keys(ret)) {
            const value = ret[key];

            if (typeof value === 'object' && value !== null) {
              for (const k of Object.keys(value)) {
                value[k] = parseValue(value[k], options);
              }
            } else {
              ret[key] = parseValue(value, options);
            }
          }

          if (options.sort === false) {
            return ret;
          }

          return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
            const value = ret[key];

            if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
              // Sort object keys, not values
              result[key] = keysSorter(value);
            } else {
              result[key] = value;
            }

            return result;
          }, Object.create(null));
        }

        exports.extract = extract;
        exports.parse = parse;

        exports.stringify = (object, options) => {
          if (!object) {
            return '';
          }

          options = Object.assign({
            encode: true,
            strict: true,
            arrayFormat: 'none',
            arrayFormatSeparator: ','
          }, options);
          validateArrayFormatSeparator(options.arrayFormatSeparator);

          const shouldFilter = key => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';

          const formatter = encoderForArrayFormat(options);
          const objectCopy = {};

          for (const key of Object.keys(object)) {
            if (!shouldFilter(key)) {
              objectCopy[key] = object[key];
            }
          }

          const keys = Object.keys(objectCopy);

          if (options.sort !== false) {
            keys.sort(options.sort);
          }

          return keys.map(key => {
            const value = object[key];

            if (value === undefined) {
              return '';
            }

            if (value === null) {
              return encode(key, options);
            }

            if (Array.isArray(value)) {
              return value.reduce(formatter(key), []).join('&');
            }

            return encode(key, options) + '=' + encode(value, options);
          }).filter(x => x.length > 0).join('&');
        };

        exports.parseUrl = (input, options) => {
          return {
            url: removeHash(input).split('?')[0] || '',
            query: parse(extract(input), options)
          };
        };

        exports.stringifyUrl = (input, options) => {
          const url = removeHash(input.url).split('?')[0] || '';
          const queryFromUrl = exports.extract(input.url);
          const parsedQueryFromUrl = exports.parse(queryFromUrl);
          const hash = getHash(input.url);
          const query = Object.assign(parsedQueryFromUrl, input.query);
          let queryString = exports.stringify(query, options);

          if (queryString) {
            queryString = `?${queryString}`;
          }

          return `${url}${queryString}${hash}`;
        };
        /***/

      },

      /***/
      "../../node_modules/split-on-first/index.js":
      /*!*******************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/split-on-first/index.js ***!
        \*******************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        module.exports = (string, separator) => {
          if (!(typeof string === 'string' && typeof separator === 'string')) {
            throw new TypeError('Expected the arguments to be of type `string`');
          }

          if (separator === '') {
            return [string];
          }

          const separatorIndex = string.indexOf(separator);

          if (separatorIndex === -1) {
            return [string];
          }

          return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
        };
        /***/

      },

      /***/
      "../../node_modules/strict-uri-encode/index.js":
      /*!**********************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/strict-uri-encode/index.js ***!
        \**********************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
        /***/

      },

      /***/
      "../../node_modules/util/node_modules/inherits/inherits_browser.js":
      /*!******************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/util/node_modules/inherits/inherits_browser.js ***!
        \******************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        if (typeof Object.create === 'function') {
          // implementation from standard node.js 'util' module
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          };
        } else {
          // old school shim for old browsers
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;

            var TempCtor = function () {};

            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          };
        }
        /***/

      },

      /***/
      "../../node_modules/util/support/isBufferBrowser.js":
      /*!***************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/util/support/isBufferBrowser.js ***!
        \***************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = function isBuffer(arg) {
          return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
        };
        /***/

      },

      /***/
      "../../node_modules/util/util.js":
      /*!********************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/util/util.js ***!
        \********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (process) {
          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.
          var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
            var keys = Object.keys(obj);
            var descriptors = {};

            for (var i = 0; i < keys.length; i++) {
              descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
            }

            return descriptors;
          };

          var formatRegExp = /%[sdj%]/g;

          exports.format = function (f) {
            if (!isString(f)) {
              var objects = [];

              for (var i = 0; i < arguments.length; i++) {
                objects.push(inspect(arguments[i]));
              }

              return objects.join(' ');
            }

            var i = 1;
            var args = arguments;
            var len = args.length;
            var str = String(f).replace(formatRegExp, function (x) {
              if (x === '%%') return '%';
              if (i >= len) return x;

              switch (x) {
                case '%s':
                  return String(args[i++]);

                case '%d':
                  return Number(args[i++]);

                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }

                default:
                  return x;
              }
            });

            for (var x = args[i]; i < len; x = args[++i]) {
              if (isNull(x) || !isObject(x)) {
                str += ' ' + x;
              } else {
                str += ' ' + inspect(x);
              }
            }

            return str;
          }; // Mark that a method should not be used.
          // Returns a modified function which warns once by default.
          // If --no-deprecation is set, then it is a no-op.


          exports.deprecate = function (fn, msg) {
            if (typeof process !== 'undefined' && process.noDeprecation === true) {
              return fn;
            } // Allow for deprecating things in the process of starting up.


            if (typeof process === 'undefined') {
              return function () {
                return exports.deprecate(fn, msg).apply(this, arguments);
              };
            }

            var warned = false;

            function deprecated() {
              if (!warned) {
                if (process.throwDeprecation) {
                  throw new Error(msg);
                } else if (process.traceDeprecation) {
                  console.trace(msg);
                } else {
                  console.error(msg);
                }

                warned = true;
              }

              return fn.apply(this, arguments);
            }

            return deprecated;
          };

          var debugs = {};
          var debugEnviron;

          exports.debuglog = function (set) {
            if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
            set = set.toUpperCase();

            if (!debugs[set]) {
              if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
                var pid = process.pid;

                debugs[set] = function () {
                  var msg = exports.format.apply(exports, arguments);
                  console.error('%s %d: %s', set, pid, msg);
                };
              } else {
                debugs[set] = function () {};
              }
            }

            return debugs[set];
          };
          /**
           * Echos the value of a value. Trys to print the value out
           * in the best way possible given the different types.
           *
           * @param {Object} obj The object to print out.
           * @param {Object} opts Optional options object that alters the output.
           */

          /* legacy: obj, showHidden, depth, colors*/


          function inspect(obj, opts) {
            // default options
            var ctx = {
              seen: [],
              stylize: stylizeNoColor
            }; // legacy...

            if (arguments.length >= 3) ctx.depth = arguments[2];
            if (arguments.length >= 4) ctx.colors = arguments[3];

            if (isBoolean(opts)) {
              // legacy...
              ctx.showHidden = opts;
            } else if (opts) {
              // got an "options" object
              exports._extend(ctx, opts);
            } // set default options


            if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
            if (isUndefined(ctx.depth)) ctx.depth = 2;
            if (isUndefined(ctx.colors)) ctx.colors = false;
            if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
            if (ctx.colors) ctx.stylize = stylizeWithColor;
            return formatValue(ctx, obj, ctx.depth);
          }

          exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

          inspect.colors = {
            'bold': [1, 22],
            'italic': [3, 23],
            'underline': [4, 24],
            'inverse': [7, 27],
            'white': [37, 39],
            'grey': [90, 39],
            'black': [30, 39],
            'blue': [34, 39],
            'cyan': [36, 39],
            'green': [32, 39],
            'magenta': [35, 39],
            'red': [31, 39],
            'yellow': [33, 39]
          }; // Don't use 'blue' not visible on cmd.exe

          inspect.styles = {
            'special': 'cyan',
            'number': 'yellow',
            'boolean': 'yellow',
            'undefined': 'grey',
            'null': 'bold',
            'string': 'green',
            'date': 'magenta',
            // "name": intentionally not styling
            'regexp': 'red'
          };

          function stylizeWithColor(str, styleType) {
            var style = inspect.styles[styleType];

            if (style) {
              return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
            } else {
              return str;
            }
          }

          function stylizeNoColor(str, styleType) {
            return str;
          }

          function arrayToHash(array) {
            var hash = {};
            array.forEach(function (val, idx) {
              hash[val] = true;
            });
            return hash;
          }

          function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
            value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
            !(value.constructor && value.constructor.prototype === value)) {
              var ret = value.inspect(recurseTimes, ctx);

              if (!isString(ret)) {
                ret = formatValue(ctx, ret, recurseTimes);
              }

              return ret;
            } // Primitive types cannot have properties


            var primitive = formatPrimitive(ctx, value);

            if (primitive) {
              return primitive;
            } // Look up the keys of the object.


            var keys = Object.keys(value);
            var visibleKeys = arrayToHash(keys);

            if (ctx.showHidden) {
              keys = Object.getOwnPropertyNames(value);
            } // IE doesn't make error fields non-enumerable
            // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


            if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
              return formatError(value);
            } // Some type of object without properties can be shortcutted.


            if (keys.length === 0) {
              if (isFunction(value)) {
                var name = value.name ? ': ' + value.name : '';
                return ctx.stylize('[Function' + name + ']', 'special');
              }

              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              }

              if (isDate(value)) {
                return ctx.stylize(Date.prototype.toString.call(value), 'date');
              }

              if (isError(value)) {
                return formatError(value);
              }
            }

            var base = '',
                array = false,
                braces = ['{', '}']; // Make Array say that they are Array

            if (isArray(value)) {
              array = true;
              braces = ['[', ']'];
            } // Make functions say that they are functions


            if (isFunction(value)) {
              var n = value.name ? ': ' + value.name : '';
              base = ' [Function' + n + ']';
            } // Make RegExps say that they are RegExps


            if (isRegExp(value)) {
              base = ' ' + RegExp.prototype.toString.call(value);
            } // Make dates with properties first say the date


            if (isDate(value)) {
              base = ' ' + Date.prototype.toUTCString.call(value);
            } // Make error with message first say the error


            if (isError(value)) {
              base = ' ' + formatError(value);
            }

            if (keys.length === 0 && (!array || value.length == 0)) {
              return braces[0] + base + braces[1];
            }

            if (recurseTimes < 0) {
              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              } else {
                return ctx.stylize('[Object]', 'special');
              }
            }

            ctx.seen.push(value);
            var output;

            if (array) {
              output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
              output = keys.map(function (key) {
                return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
              });
            }

            ctx.seen.pop();
            return reduceToSingleString(output, base, braces);
          }

          function formatPrimitive(ctx, value) {
            if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

            if (isString(value)) {
              var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
              return ctx.stylize(simple, 'string');
            }

            if (isNumber(value)) return ctx.stylize('' + value, 'number');
            if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

            if (isNull(value)) return ctx.stylize('null', 'null');
          }

          function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
          }

          function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];

            for (var i = 0, l = value.length; i < l; ++i) {
              if (hasOwnProperty(value, String(i))) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
              } else {
                output.push('');
              }
            }

            keys.forEach(function (key) {
              if (!key.match(/^\d+$/)) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
              }
            });
            return output;
          }

          function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str, desc;
            desc = Object.getOwnPropertyDescriptor(value, key) || {
              value: value[key]
            };

            if (desc.get) {
              if (desc.set) {
                str = ctx.stylize('[Getter/Setter]', 'special');
              } else {
                str = ctx.stylize('[Getter]', 'special');
              }
            } else {
              if (desc.set) {
                str = ctx.stylize('[Setter]', 'special');
              }
            }

            if (!hasOwnProperty(visibleKeys, key)) {
              name = '[' + key + ']';
            }

            if (!str) {
              if (ctx.seen.indexOf(desc.value) < 0) {
                if (isNull(recurseTimes)) {
                  str = formatValue(ctx, desc.value, null);
                } else {
                  str = formatValue(ctx, desc.value, recurseTimes - 1);
                }

                if (str.indexOf('\n') > -1) {
                  if (array) {
                    str = str.split('\n').map(function (line) {
                      return '  ' + line;
                    }).join('\n').substr(2);
                  } else {
                    str = '\n' + str.split('\n').map(function (line) {
                      return '   ' + line;
                    }).join('\n');
                  }
                }
              } else {
                str = ctx.stylize('[Circular]', 'special');
              }
            }

            if (isUndefined(name)) {
              if (array && key.match(/^\d+$/)) {
                return str;
              }

              name = JSON.stringify('' + key);

              if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                name = name.substr(1, name.length - 2);
                name = ctx.stylize(name, 'name');
              } else {
                name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                name = ctx.stylize(name, 'string');
              }
            }

            return name + ': ' + str;
          }

          function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function (prev, cur) {
              numLinesEst++;
              if (cur.indexOf('\n') >= 0) numLinesEst++;
              return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
            }, 0);

            if (length > 60) {
              return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
            }

            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
          } // NOTE: These type checking functions intentionally don't use `instanceof`
          // because it is fragile and can be easily faked with `Object.create()`.


          function isArray(ar) {
            return Array.isArray(ar);
          }

          exports.isArray = isArray;

          function isBoolean(arg) {
            return typeof arg === 'boolean';
          }

          exports.isBoolean = isBoolean;

          function isNull(arg) {
            return arg === null;
          }

          exports.isNull = isNull;

          function isNullOrUndefined(arg) {
            return arg == null;
          }

          exports.isNullOrUndefined = isNullOrUndefined;

          function isNumber(arg) {
            return typeof arg === 'number';
          }

          exports.isNumber = isNumber;

          function isString(arg) {
            return typeof arg === 'string';
          }

          exports.isString = isString;

          function isSymbol(arg) {
            return typeof arg === 'symbol';
          }

          exports.isSymbol = isSymbol;

          function isUndefined(arg) {
            return arg === void 0;
          }

          exports.isUndefined = isUndefined;

          function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
          }

          exports.isRegExp = isRegExp;

          function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
          }

          exports.isObject = isObject;

          function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
          }

          exports.isDate = isDate;

          function isError(e) {
            return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
          }

          exports.isError = isError;

          function isFunction(arg) {
            return typeof arg === 'function';
          }

          exports.isFunction = isFunction;

          function isPrimitive(arg) {
            return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
            typeof arg === 'undefined';
          }

          exports.isPrimitive = isPrimitive;
          exports.isBuffer = __webpack_require__(
          /*! ./support/isBuffer */
          "../../node_modules/util/support/isBufferBrowser.js");

          function objectToString(o) {
            return Object.prototype.toString.call(o);
          }

          function pad(n) {
            return n < 10 ? '0' + n.toString(10) : n.toString(10);
          }

          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

          function timestamp() {
            var d = new Date();
            var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
            return [d.getDate(), months[d.getMonth()], time].join(' ');
          } // log is just a thin wrapper to console.log that prepends a timestamp


          exports.log = function () {
            console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
          };
          /**
           * Inherit the prototype methods from one constructor into another.
           *
           * The Function.prototype.inherits from lang.js rewritten as a standalone
           * function (not on Function.prototype). NOTE: If this file is to be loaded
           * during bootstrapping this function needs to be rewritten using some native
           * functions as prototype setup using normal JavaScript does not work as
           * expected during bootstrapping (see mirror.js in r114903).
           *
           * @param {function} ctor Constructor function which needs to inherit the
           *     prototype.
           * @param {function} superCtor Constructor function to inherit prototype from.
           */


          exports.inherits = __webpack_require__(
          /*! inherits */
          "../../node_modules/util/node_modules/inherits/inherits_browser.js");

          exports._extend = function (origin, add) {
            // Don't do anything if add isn't an object
            if (!add || !isObject(add)) return origin;
            var keys = Object.keys(add);
            var i = keys.length;

            while (i--) {
              origin[keys[i]] = add[keys[i]];
            }

            return origin;
          };

          function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          }

          var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

          exports.promisify = function promisify(original) {
            if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

            if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
              var fn = original[kCustomPromisifiedSymbol];

              if (typeof fn !== 'function') {
                throw new TypeError('The "util.promisify.custom" argument must be of type Function');
              }

              Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                value: fn,
                enumerable: false,
                writable: false,
                configurable: true
              });
              return fn;
            }

            function fn() {
              var promiseResolve, promiseReject;
              var promise = new Promise(function (resolve, reject) {
                promiseResolve = resolve;
                promiseReject = reject;
              });
              var args = [];

              for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
              }

              args.push(function (err, value) {
                if (err) {
                  promiseReject(err);
                } else {
                  promiseResolve(value);
                }
              });

              try {
                original.apply(this, args);
              } catch (err) {
                promiseReject(err);
              }

              return promise;
            }

            Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
            if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn,
              enumerable: false,
              writable: false,
              configurable: true
            });
            return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
          };

          exports.promisify.custom = kCustomPromisifiedSymbol;

          function callbackifyOnRejected(reason, cb) {
            // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
            // Because `null` is a special error value in callbacks which means "no error
            // occurred", we error-wrap so the callback consumer can distinguish between
            // "the promise rejected with null" or "the promise fulfilled with undefined".
            if (!reason) {
              var newReason = new Error('Promise was rejected with a falsy value');
              newReason.reason = reason;
              reason = newReason;
            }

            return cb(reason);
          }

          function callbackify(original) {
            if (typeof original !== 'function') {
              throw new TypeError('The "original" argument must be of type Function');
            } // We DO NOT return the promise as it gives the user a false sense that
            // the promise is actually somehow related to the callback's execution
            // and that the callback throwing will reject the promise.


            function callbackified() {
              var args = [];

              for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
              }

              var maybeCb = args.pop();

              if (typeof maybeCb !== 'function') {
                throw new TypeError('The last argument must be of type Function');
              }

              var self = this;

              var cb = function () {
                return maybeCb.apply(self, arguments);
              }; // In true node style we process the callback on `nextTick` with all the
              // implications (stack, `uncaughtException`, `async_hooks`)


              original.apply(this, args).then(function (ret) {
                process.nextTick(cb, null, ret);
              }, function (rej) {
                process.nextTick(callbackifyOnRejected, rej, cb);
              });
            }

            Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
            Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
            return callbackified;
          }

          exports.callbackify = callbackify;
          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__(
        /*! ./../process/browser.js */
        "../../node_modules/process/browser.js"));
        /***/
      },

      /***/
      "../../node_modules/webpack/buildin/global.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        var g; // This works in non-strict mode

        g = function () {
          return this;
        }();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        } // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}


        module.exports = g;
        /***/
      },

      /***/
      "./src/Datagrid.ts":
      /*!*************************!*\
        !*** ./src/Datagrid.ts ***!
        \*************************/

      /*! exports provided: Datagrid, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Datagrid", function () {
          return Datagrid;
        });
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! assert */
        "../../node_modules/node-libs-browser/node_modules/assert/assert.js");
        /* harmony import */


        var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");
        /* harmony import */


        var _DatagridState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./DatagridState */
        "./src/DatagridState.ts");
        /* harmony import */


        var _Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./Paginator */
        "./src/Paginator.ts");
        /* harmony import */


        var _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./render/defaultRenderer */
        "./src/render/defaultRenderer.ts");
        /* harmony import */


        var _render_GridRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./render/GridRenderer */
        "./src/render/GridRenderer.ts");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./utils */
        "./src/utils.ts");
        /* harmony import */


        var query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! query-string */
        "../../node_modules/query-string/index.js");
        /* harmony import */


        var query_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_8__);

        var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }

          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }; // import './styles.css';


        class Datagrid extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
          constructor(sf, node, options) {
            super();
            this.optionsToGrab = {
              id: {
                value: Datagrid.defaultOptions.id,
                domAttr: 'id'
              },
              url: {
                value: Datagrid.defaultOptions.url,
                domAttr: 'data-url'
              }
            };
            this.options = Object.assign({}, Datagrid.defaultOptions);
            this.grids = [];
            this.state = new _DatagridState__WEBPACK_IMPORTED_MODULE_3__["DatagridState"](this);
            this.capturedForms = {}; // TODO: type as sf.Form instance array

            this.capturedPaginators = []; // TODO: type as sf.Paginator instance array

            this.defaults = {
              page: 1,
              limit: _DatagridState__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_LIMIT"]
            };
            this.init(sf, node, options);
            this.options = Object.assign(Object.assign({}, Datagrid.defaultOptions), this.options);
            const additionalOptionsEl = node.querySelector('script[role="sf-options"]');

            if (additionalOptionsEl) {
              try {
                const one = Function('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + ''); // console.log('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + '');

                const overrides = one()();
                this.options = Object.assign(Object.assign({}, this.options), overrides);
              } catch (e) {
                console.error('Could not parse options inside script, ensure script inside is an anonymous function returning IDataGridOptions object');
                throw e;
              }
            }

            assert__WEBPACK_IMPORTED_MODULE_1__["notEqual"](this.options.id, '', 'id should be not empty');
            assert__WEBPACK_IMPORTED_MODULE_1__["notEqual"](this.options.url, '', 'url should be not empty'); // Process options
            // TODO: we can override columns and sort options inside renderers but it might produce situation of triggering unexisting sort
            // Think about that, or ignore

            this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["normalizeColumns"])(this.options.columns, this.options.sortable); // Set default sort if present

            if (this.options.sort) {
              if (typeof this.options.sort === 'string') {
                this.defaults.sortBy = this.options.sort;
                this.defaults.sortDir = _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC;
              } else {
                this.defaults.sortBy = this.options.sort.field;
                this.defaults.sortDir = this.options.sort.direction || _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC;
              }

              this.state.setSort(this.defaults.sortBy, this.defaults.sortDir);
            }

            this.createRenderers();
            this.initFromUrl();
            this.captureForms();
            this.request();
          }

          registerFormInstance(formInstance) {
            if (formInstance.options && formInstance.options.id && this.options.captureForms.indexOf(formInstance.options.url) >= 0) {
              const id = formInstance.options.id;
              const fields = formInstance.enumerateFieldNames();
              this.capturedForms[id] = {
                instance: formInstance,
                fields
              };
              const urlDataForForm = this.state.urlData ? Object.keys(this.state.urlData).filter(key => fields.indexOf(key) >= 0).reduce((map, key) => Object.assign(Object.assign({}, map), {
                [key]: this.state.urlData[key]
              }), {}) : undefined;

              if (urlDataForForm) {
                formInstance.setFieldValues(urlDataForForm);
              }

              formInstance.options.jsonOnly = true;

              formInstance.options.beforeSubmitCallback = options => {
                this.resetPaginator();
                this.state.setFormData(id, options.data);
                this.capturedForms[id].fields = [...new Set([...Object.keys(options.data), ...this.capturedForms[id].fields])]; // Merge new fields if any

                this.request(); // TODO: better way

                return false;
              };
            }
          }

          registerPaginatorInstance(formInstance) {
            if (formInstance.options && formInstance.options.id && this.options.captureForms.indexOf(formInstance.options.id) >= 0) {
              this.capturedPaginators.push(formInstance);

              formInstance.options.onPageChange = options => {
                this.state.updatePaginator(options);
                this.request(); // TODO: better way

                return false;
              };
            }
          }

          captureForms() {
            const forms = this.sf.getInstances('form') || [];
            forms.forEach(f => {
              this.registerFormInstance(f.instance);
            });
            const paginators = this.sf.getInstances(_Paginator__WEBPACK_IMPORTED_MODULE_4__["default"].spiralFrameworkName) || [];
            paginators.forEach(f => {
              this.registerFormInstance(f.instance);
            });
            this.sf.instancesController.events.on('onAddInstance', ({
              instance,
              type
            }) => {
              if (type === 'form') {
                this.registerFormInstance(instance);
              }

              if (type === _Paginator__WEBPACK_IMPORTED_MODULE_4__["default"].spiralFrameworkName) {
                this.registerPaginatorInstance(instance);
              }
            });
          }
          /**
           * Sets sort for this field if not yet, or changes direction if already same
           * @param fieldId
           */


          triggerSort(fieldId) {
            if (this.state.sortBy === fieldId) {
              if (this.state.sortDir === _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC) {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].DESC);
              } else {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC);
              }
            } else {
              const field = this.columnInfo.find(cI => cI.id === fieldId);

              if (field) {
                this.state.setSort(field.id, field.direction);
              } else {
                console.warn(`Trying to sort by unsortable field ${fieldId}`);
              }
            }

            this.resetPaginator();
            this.request();
          }

          resetPaginator() {
            // TODO: depending on paginator type perform different reset type
            this.state.updatePaginator({
              page: 1
            });
            this.capturedPaginators.forEach(f => {
              if (f.setParams) {
                f.setParams(this.state.paginate);
              }
            });
          }

          formRequest() {
            const request = {
              fetchCount: true,
              filter: this.state.getFilter(),
              paginate: this.state.paginate,
              sort: this.state.sortBy ? {
                [this.state.sortBy]: this.state.sortDir
              } : {}
            };
            return request;
          }

          unlock() {
            if (!this.sf.removeInstance('lock', this.node)) {
              console.warn('You try to remove \'lock\' instance, but it is not available or not started');
            }

            Object.keys(this.capturedForms).forEach(fKey => {
              const f = this.capturedForms[fKey].instance;

              if (f.unlock) {
                f.unlock();
              }
            });
            this.capturedPaginators.forEach(f => {
              if (f.unlock) {
                f.unlock();
              }
            });
            return;
          }

          lock() {
            if (!this.options.lockType || this.options.lockType === 'none') {
              return;
            }

            const lock = this.sf.addInstance('lock', this.node, {
              type: this.options.lockType
            });

            if (!lock) {
              console.warn('You try to add \'lock\' instance, but it is not available or already started');
              return;
            }

            Object.keys(this.capturedForms).forEach(fKey => {
              const f = this.capturedForms[fKey].instance;

              if (f.lock) {
                f.lock();
              }
            });
            this.capturedPaginators.forEach(f => {
              if (f.lock) {
                f.lock();
              }
            });
          }

          handleSuccess({
            data
          }) {
            this.state.setSuccess(data.data, data.pagination);
            this.render();
            this.capturedPaginators.forEach(f => {
              if (f.setParams) {
                f.setParams(this.state.paginate);
              }
            });
          }

          beforeSubmit() {
            Object.keys(this.capturedForms).forEach(fKey => {
              const f = this.capturedForms[fKey].instance;

              if (f.removeMessages) {
                f.removeMessages();
              }
            });
          }

          handleError({
            data,
            status,
            statusText
          }) {
            this.state.setError(data.error, data.errors, this.options.resetOnError);
            Object.keys(this.capturedForms).forEach(fKey => {
              const f = this.capturedForms[fKey].instance;

              if (f.processAnswer) {
                f.processAnswer({
                  data,
                  status,
                  statusText
                }, false); // false stands for 'dont display errors unrelated to form inputs'
              }
            });
            this.capturedPaginators.forEach(f => {
              if (f.processAnswer) {
                f.processAnswer({
                  data,
                  status,
                  statusText
                }); // TODO: might be different API
              }
            });
            this.render(); // TODO: remove data and display error
            // TODO: send validation errors to other forms
          }

          request() {
            return __awaiter(this, void 0, void 0, function* () {
              if (this.state.isLoading) {
                console.warn('Cant start new request');
                return;
              }

              this.state.startLoading();
              this.beforeSubmit();
              this.lock();
              this.updateUrl();
              const data = this.formRequest();
              const request = this.sf.ajax.send({
                url: this.options.url,
                method: this.options.method,
                headers: this.options.headers,
                data
              });

              try {
                const response = yield request;
                this.handleSuccess(response);
              } catch (e) {
                if (e.isSFAjaxError) {
                  this.handleError(e);
                } else {
                  this.handleError({
                    data: {
                      error: e.toString(),
                      originalError: e
                    },
                    status: 1000,
                    statusText: e.toString()
                  });
                }
              } finally {
                this.unlock();
                this.state.stopLoading();
              }
            });
          }

          createRenderers() {
            assert__WEBPACK_IMPORTED_MODULE_1__["deepEqual"](this.grids, [], 'Grids are already initialized');
            const renderList = Array.isArray(this.options.renderers) ? this.options.renderers : [this.options.renderers];
            renderList.forEach(renderOption => {
              this.grids.push(new _render_GridRenderer__WEBPACK_IMPORTED_MODULE_6__["GridRenderer"](Object.assign(Object.assign({}, renderOption), {
                columns: renderOption.columns && renderOption.columns.length ? renderOption.columns : this.options.columns,
                sortable: renderOption.sortable && renderOption.sortable.length ? renderOption.sortable : this.options.sortable
              }), this));
            });
          }

          render() {
            this.grids.forEach(grid => {
              grid.render(this.state);
            });
          }

          serialize() {
            const custom = this.state.getFilter();
            const pagination = this.state.paginate;
            const sortOptions = this.state.sortBy ? {
              sortBy: this.state.sortBy,
              sortDir: this.state.sortDir
            } : {};
            return Object.assign(Object.assign(Object.assign({}, custom), pagination), sortOptions);
          }

          deserialize(values) {
            const {
              page,
              limit,
              cid,
              lid
            } = values;
            this.state.updatePaginator({
              page: +page,
              limit: +limit,
              cid,
              lid
            }); // TODO: skip invalid page/limit values

            const {
              sortBy,
              sortDir
            } = values;

            if (sortBy) {
              this.state.setSort(sortBy, sortDir || _constants__WEBPACK_IMPORTED_MODULE_2__["SortDirection"].ASC); // TODO: skip
            }

            [..._constants__WEBPACK_IMPORTED_MODULE_2__["pageParams"], ..._constants__WEBPACK_IMPORTED_MODULE_2__["sortParams"]].forEach(p => delete values[p]);
            this.state.urlData = values;
          }

          initFromUrl() {
            if (this.options.serialize) {
              if (window.location.search) {
                const urlData = this.getObjectFromUrl(this.defaults, typeof this.options.serialize === 'string' ? this.options.serialize : '');

                if (Object.keys(urlData).length) {
                  this.deserialize(urlData);
                }
              }
            }
          }

          updateUrl() {
            if (this.options.serialize) {
              const data = this.serialize();
              this.putObjectToUrl(data, this.defaults, typeof this.options.serialize === 'string' ? this.options.serialize : '');
            }
          }

          getObjectFromUrl(defaults, prefix = '') {
            const obj = Object(query_string__WEBPACK_IMPORTED_MODULE_8__["parse"])(window.location.search, {
              parseNumbers: true,
              parseBooleans: true
            });
            const result = Object.keys(obj).reduce((map, oK) => {
              if (!prefix || oK.indexOf(prefix) === 0) {
                return Object.assign(Object.assign({}, map), {
                  [oK.substr(prefix.length)]: typeof obj[oK] !== 'undefined' ? obj[oK] : defaults[oK.substr(prefix.length)]
                });
              }

              return map;
            }, {});
            return result;
          }

          putObjectToUrl(obj, defaults, prefix = '') {
            if (!window.history) {
              console.warn('Cant update URL without reload, skipping');
              return;
            }

            const query = Object.keys(obj).reduce((map, oK) => {
              if (obj[oK] && obj[oK] != defaults[oK]) {
                return Object.assign(Object.assign({}, map), {
                  [`${prefix}${oK}`]: obj[oK]
                });
              }

              return map;
            }, {});
            history.pushState({}, document.title, Object(query_string__WEBPACK_IMPORTED_MODULE_8__["stringifyUrl"])({
              url: window.location.protocol + "//" + window.location.host + window.location.pathname,
              query
            })); // TODO: merge with existing?
          }

        }

        Datagrid.spiralFrameworkName = 'datagrid';
        Datagrid.defaultOptions = {
          id: '',
          lockType: 'default',
          resetOnError: false,
          captureForms: [],
          columns: [],
          headers: {},
          method: _constants__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].POST,
          sortable: [],
          url: '',
          serialize: true,
          ui: {
            cellAttributes: {},
            rowAttributes: {},
            rowClassName: '',
            cellClassName: {},
            tableClassName: 'table table-stripped',
            wrapperClassName: 'table-responsive'
          },
          renderers: _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_5__["defaultRenderer"]
        };
        /* harmony default export */

        __webpack_exports__["default"] = Datagrid;
        /***/
      },

      /***/
      "./src/DatagridState.ts":
      /*!******************************!*\
        !*** ./src/DatagridState.ts ***!
        \******************************/

      /*! exports provided: DEFAULT_LIMIT, DatagridState */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DEFAULT_LIMIT", function () {
          return DEFAULT_LIMIT;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DatagridState", function () {
          return DatagridState;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");

        const DEFAULT_LIMIT = 25;

        class DatagridState {
          constructor(parent) {
            this.parent = parent;
            this.state = {
              loading: false,
              paginator: {
                page: 1,
                limit: DEFAULT_LIMIT
              },
              sortDir: _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC,
              data: [],
              formData: {}
            };
          }

          get isLoading() {
            return this.state.loading;
          }

          startLoading() {
            this.state.loading = true;
          }

          stopLoading() {
            this.state.loading = false;
          }

          get data() {
            return this.state.data;
          }

          get paginate() {
            return this.state.paginator;
          }

          get urlData() {
            return this.state.urlData;
          }

          set urlData(data) {
            this.state.urlData = data;
          }

          updatePaginator(params) {
            this.state.paginator = Object.assign(Object.assign({}, this.state.paginator), params);
          }

          set data(data) {
            this.state.data = data;
          }

          get hasError() {
            return !!this.state.error;
          }

          get errorMessage() {
            return this.state.error;
          }

          get sortBy() {
            return this.state.sortBy;
          }

          get sortDir() {
            return this.state.sortDir;
          }

          setSuccess(data, pagination) {
            this.data = data;
            this.state.error = undefined;
            this.state.errors = undefined;
            this.updatePaginator(pagination);
          }

          setError(error, errors = {}, resetData = false) {
            if (resetData) {
              this.data = [];
            }

            this.state.error = error;
            this.state.errors = errors;
          }

          setSort(field, direction) {
            this.state.sortBy = field;
            this.state.sortDir = direction;
          }

          setFormData(formId, data) {
            this.state.formData[formId] = data;
          }

          getFilter() {
            const forms = Object.keys(this.state.formData).reduce((prev, key) => {
              return Object.assign(Object.assign({}, prev), this.state.formData[key]);
            }, {});
            return Object.assign(Object.assign({}, this.state.urlData), forms);
          }

        }
        /***/

      },

      /***/
      "./src/Paginator.ts":
      /*!**************************!*\
        !*** ./src/Paginator.ts ***!
        \**************************/

      /*! exports provided: PaginatorType, Paginator, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PaginatorType", function () {
          return PaginatorType;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Paginator", function () {
          return Paginator;
        });
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _DatagridState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./DatagridState */
        "./src/DatagridState.ts"); // import * as assert from 'assert';
        // import './styles.css';


        var PaginatorType;

        (function (PaginatorType) {
          PaginatorType["pages"] = "pages";
          PaginatorType["infinite"] = "infinite";
        })(PaginatorType || (PaginatorType = {}));

        class Paginator extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
          constructor(sf, node, options) {
            super();
            this.optionsToGrab = {
              id: {
                value: Paginator.defaultOptions.id,
                domAttr: 'id'
              },
              type: {
                value: Paginator.defaultOptions.type,
                domAttr: 'data-type'
              },
              fetchCount: {
                value: Paginator.defaultOptions.fetchCount,
                domAttr: 'data-fetch-count'
              },
              fetchCountOnce: {
                value: Paginator.defaultOptions.fetchCountOnce,
                domAttr: 'data-fetch-count-once'
              }
            };
            this.options = Object.assign({}, Paginator.defaultOptions);
            this.state = {
              fetching: false,
              limit: _DatagridState__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LIMIT"]
            };
            this.init(sf, node, options);
            this.options = Object.assign(Object.assign({}, Paginator.defaultOptions), this.options);
            this.render();
          }

          unlock() {
            if (!this.options.lockType || this.options.lockType === 'none') {
              return;
            }

            if (!this.sf.removeInstance('lock', this.node)) {
              console.warn('You try to remove \'lock\' instance, but it is not available or not started');
            }

            return;
          }

          lock() {
            if (!this.options.lockType || this.options.lockType === 'none') {
              return;
            }

            const lock = this.sf.addInstance('lock', this.node, {
              type: this.options.lockType
            });

            if (!lock) {
              console.warn('You try to add \'lock\' instance, but it is not available or already started');
              return;
            }
          }

          setParams(params) {
            this.state = Object.assign(Object.assign({}, this.state), params);
            this.render();
          }

          hasPages() {
            return typeof this.state.page !== 'undefined' && typeof this.state.limit !== 'undefined';
          }

          hasTotal() {
            return typeof this.state.count !== 'undefined';
          }

          hasLimitOptions() {
            return typeof this.options.limitOptions !== 'undefined';
          }

          generatePageList() {
            const extendCurrent = 1;
            const page = this.state.page;
            const pagesCount = this.hasTotal() ? Math.ceil(this.state.count / this.state.limit) : page;
            const hasNext = this.hasTotal() ? page < pagesCount : true;
            const hasPrevious = page > 1;
            const currentRange = [Math.max(page - extendCurrent, 1), Math.min(page + extendCurrent, pagesCount)];
            const startRange = [1, Math.min(extendCurrent + 1, pagesCount)];
            const endRange = [Math.max(pagesCount - extendCurrent, 1), pagesCount];
            const pages = [];
            let i = 1;

            do {
              pages.push({
                page: i,
                text: `${i}`,
                active: page === i
              });

              if (i >= startRange[1]) {
                // we reached last page for start range
                if (i + 1 < currentRange[0]) {
                  // If page is more than 1 page further from next page in range, add ellipsis and jump
                  pages.push({
                    page: undefined,
                    text: `...`,
                    active: false
                  }); // eslint-disable-next-line prefer-destructuring

                  i = currentRange[0]; // eslint-disable-next-line no-continue

                  continue;
                }
              }

              if (i >= currentRange[1]) {
                // we reached last page for current page range
                if (i + 1 < endRange[0]) {
                  // If page is more than 1 page further from next page in range, add ellipsis and jump
                  pages.push({
                    page: undefined,
                    text: `...`,
                    active: false
                  }); // eslint-disable-next-line prefer-destructuring

                  i = endRange[0]; // eslint-disable-next-line no-continue

                  continue;
                }
              }

              i += 1;
            } while (i <= pagesCount);

            return {
              pages,
              hasNext,
              hasPrevious
            };
          }

          setLimit(limit) {
            this.state.limit = limit;
            this.options.onPageChange ? this.options.onPageChange(this.state) : 1;
            this.render();
          }

          setPage(page) {
            this.state.page = page;
            this.options.onPageChange ? this.options.onPageChange(this.state) : 1;
            this.render();
          }

          render() {
            const counterDiv = document.createElement('div');
            counterDiv.className = 'col-12 col-lg-4';

            if (this.hasPages()) {
              if (this.hasTotal()) {
                counterDiv.innerHTML = `Showing ${(this.state.page - 1) * this.state.limit + 1} to ${this.state.page * this.state.limit} of ${this.state.count} entries`;
              } else {
                counterDiv.innerHTML = `Showing ${(this.state.page - 1) * this.state.limit + 1} to ${this.state.page * this.state.limit} entries`;
              }
            }

            const limitDiv = document.createElement('div');
            limitDiv.className = 'col-4 col-md-2 col-lg-2';

            if (this.hasLimitOptions()) {
              limitDiv.innerHTML = `<div class="form-group row mb-0">
                    <label class="col-form-label-sm col-auto">Show</label>
                    <select name="limit" class="custom-select custom-select-sm col-6">
                    </select>
                  </div>`;
              const select = limitDiv.querySelector('select');
              this.options.limitOptions.forEach(opt => {
                const option = document.createElement('option');
                option.value = `${opt}`;
                option.innerHTML = `${opt}`;

                if (opt === this.state.limit) {
                  option.setAttribute('checked', 'checked');
                }

                select.appendChild(option);
              });
              select.value = `${this.state.limit}`;
              select.addEventListener('change', e => {
                this.setLimit(+select.value);
              });
            } else {}

            const pagesDiv = document.createElement('div');
            pagesDiv.className = 'col-8 col-md-10 col-lg-6';

            if (this.hasPages()) {
              pagesDiv.innerHTML = `<ul class="pagination pagination-sm justify-content-end mb-0">`;
              const ul = pagesDiv.querySelector('ul');
              const pageInfo = this.generatePageList();
              {
                const li = document.createElement('li');
                li.className = pageInfo.hasPrevious ? 'page-item previous' : 'page-item previous disabled';

                if (pageInfo.hasPrevious) {
                  li.addEventListener('click', () => this.setPage(this.state.page - 1));
                }

                li.innerHTML = `<a href="#" tabindex="0" class="page-link">«</a>`;
                ul.appendChild(li);
              }
              pageInfo.pages.forEach(p => {
                const li = document.createElement('li');
                li.className = p.active ? 'page-item active' : 'page-item';

                if (p.page) {
                  li.addEventListener('click', () => this.setPage(p.page));
                  li.innerHTML = `<a href="#" tabindex="0" class="page-link">${p.text}</a>`;
                } else {
                  li.innerHTML = `<a tabindex="0" class="page-link">${p.text}</a>`;
                }

                ul.appendChild(li);
              });
              {
                const li = document.createElement('li');
                li.className = pageInfo.hasNext ? 'page-item next' : 'page-item next disabled';

                if (pageInfo.hasNext) {
                  li.addEventListener('click', () => this.setPage(this.state.page + 1));
                }

                li.innerHTML = `<a href="#" tabindex="0" class="page-link">»</a>`;
                ul.appendChild(li);
              }
            }

            if (!this.el) {
              this.el = document.createElement('div');
              this.node.appendChild(this.el);
            } else {
              this.el.innerHTML = ''; // TODO: dont rerender
            }

            const el = this.el;
            el.className = this.options.className || '';
            el.appendChild(counterDiv);
            el.appendChild(limitDiv);
            el.appendChild(pagesDiv);
          }

        }

        Paginator.spiralFrameworkName = 'datagrid-paginator';
        Paginator.defaultOptions = {
          id: '',
          lockType: 'none',
          fetchCount: true,
          fetchCountOnce: true,
          type: PaginatorType.pages,
          className: 'row no-gutters align-items-center m-3',
          limitOptions: [10, 25, 50, 100]
        };
        /* harmony default export */

        __webpack_exports__["default"] = Paginator;
        /***/
      },

      /***/
      "./src/constants.ts":
      /*!**************************!*\
        !*** ./src/constants.ts ***!
        \**************************/

      /*! exports provided: SortDirection, RequestMethod, CURSOR_ID_FIELD, LAST_ID_FIELD, pageParams, sortParams */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SortDirection", function () {
          return SortDirection;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "RequestMethod", function () {
          return RequestMethod;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "CURSOR_ID_FIELD", function () {
          return CURSOR_ID_FIELD;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "LAST_ID_FIELD", function () {
          return LAST_ID_FIELD;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "pageParams", function () {
          return pageParams;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "sortParams", function () {
          return sortParams;
        });

        var SortDirection;

        (function (SortDirection) {
          SortDirection["ASC"] = "asc";
          SortDirection["DESC"] = "desc";
        })(SortDirection || (SortDirection = {}));

        var RequestMethod;

        (function (RequestMethod) {
          RequestMethod["GET"] = "GET";
          RequestMethod["POST"] = "POST";
          RequestMethod["DELETE"] = "DELETE";
          RequestMethod["PUT"] = "PUT";
          RequestMethod["PATCH"] = "PATCH";
        })(RequestMethod || (RequestMethod = {}));

        const CURSOR_ID_FIELD = 'cid';
        const LAST_ID_FIELD = 'lid';
        const pageParams = ['page', 'limit', CURSOR_ID_FIELD, LAST_ID_FIELD];
        const sortParams = ['sortBy', 'sortDir'];
        /***/
      },

      /***/
      "./src/index.ts":
      /*!**********************!*\
        !*** ./src/index.ts ***!
        \**********************/

      /*! exports provided: renders, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "renders", function () {
          return renders;
        });
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _Datagrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./Datagrid */
        "./src/Datagrid.ts");
        /* harmony import */


        var _Paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./Paginator */
        "./src/Paginator.ts");
        /* harmony import */


        var _render_premade_simpleCellFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./render/premade/simpleCellFormatter */
        "./src/render/premade/simpleCellFormatter.ts");

        const renders = {
          simpleCellFormatter: _render_premade_simpleCellFormatter__WEBPACK_IMPORTED_MODULE_3__["simpleCellFormatter"]
        };
        window.SFDatagridTools = renders; // TODO: How to export that properly?

        _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_Datagrid__WEBPACK_IMPORTED_MODULE_1__["default"], 'sf-js-datagrid');

        _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_Paginator__WEBPACK_IMPORTED_MODULE_2__["default"], 'sf-js-datagrid-paginator');
        /* harmony default export */


        __webpack_exports__["default"] = _Datagrid__WEBPACK_IMPORTED_MODULE_1__["default"]; // ES6 default export will not expose us as global

        /***/
      },

      /***/
      "./src/render/GridRenderer.ts":
      /*!************************************!*\
        !*** ./src/render/GridRenderer.ts ***!
        \************************************/

      /*! exports provided: GridRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "GridRenderer", function () {
          return GridRenderer;
        });
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.ts");
        /* harmony import */


        var _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./defaultBodyWrapper */
        "./src/render/defaultBodyWrapper.ts");
        /* harmony import */


        var _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./defaultFooterWrapper */
        "./src/render/defaultFooterWrapper.ts");
        /* harmony import */


        var _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./defaultHeaderCellRenderer */
        "./src/render/defaultHeaderCellRenderer.ts");
        /* harmony import */


        var _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./defaultHeaderWrapper */
        "./src/render/defaultHeaderWrapper.ts");
        /* harmony import */


        var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./defaultRowRenderer */
        "./src/render/defaultRowRenderer.ts");
        /* harmony import */


        var _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./defaultRowWrapper */
        "./src/render/defaultRowWrapper.ts");
        /* harmony import */


        var _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./defaultTableWrapper */
        "./src/render/defaultTableWrapper.ts");

        class GridRenderer {
          constructor(options, root) {
            this.options = options;
            this.root = root;
            this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeColumns"])(this.options.columns, this.options.sortable);
            console.log(this.columnInfo);
            this.create();
          }

          create() {
            this.wrapper = document.createElement('div');
            this.wrapper.setAttribute('role', 'sf-datagrid-wrapper');
            this.wrapper.setAttribute('class', this.options.ui.wrapperClassName || '');
            this.root.node.innerHTML = '';
            this.root.node.appendChild(this.wrapper);
            const tableRenderer = this.options.tableWrapper || _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_7__["defaultTableWrapper"];
            this.tableEl = tableRenderer(this.wrapper, this.options);
          }

          applyAdditionalCellAttributes(el, column, options, state, index) {
            const cellMeta = {
              id: column.id,
              column: column,
              index,
              // rowSelected: (state as any).isSelected(index),
              rowSelected: false,
              state: state,
              item: state.data[index]
            };

            if (options.ui.cellClassName) {
              if (typeof options.ui.cellClassName === 'function') {
                el.classList.add(options.ui.cellClassName(cellMeta));
              } else {
                const specific = options.ui.cellClassName[column.id];

                if (specific) {
                  if (typeof specific === 'string') {
                    el.classList.add(specific);
                  } else {
                    el.classList.add(specific(cellMeta));
                  }
                }
              }
            }

            if (options.ui.cellAttributes) {
              if (typeof options.ui.cellAttributes === 'function') {
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, options.ui.cellAttributes(cellMeta));
              } else {
                const specific = options.ui.cellAttributes[column.id];

                if (specific) {
                  if (typeof specific === 'function') {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, specific(cellMeta));
                  } else {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, specific);
                  }
                }
              }
            }
          }

          applyAdditionalHeaderCellAttributes(el, column, options, state) {
            const cellMeta = {
              id: column.id,
              column: column,
              index: 0,
              rowSelected: false,
              state: state,
              item: null
            };

            if (options.ui.headerCellClassName) {
              if (typeof options.ui.headerCellClassName === 'function') {
                el.classList.add(options.ui.headerCellClassName(cellMeta));
              } else {
                const specific = options.ui.headerCellClassName[column.id];

                if (specific) {
                  if (typeof specific === 'string') {
                    el.classList.add(specific);
                  } else {
                    el.classList.add(specific(cellMeta));
                  }
                }
              }
            }

            if (options.ui.headerCellAttributes) {
              if (typeof options.ui.headerCellAttributes === 'function') {
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, options.ui.headerCellAttributes(cellMeta));
              } else {
                const specific = options.ui.headerCellAttributes[column.id];

                if (specific) {
                  if (typeof specific === 'function') {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, specific(cellMeta));
                  } else {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["applyAttrributes"])(el, specific);
                  }
                }
              }
            }
          }

          render(state) {
            // Render header
            const headerRenderer = this.options.headerWrapper || _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_4__["defaultHeaderWrapper"];

            if (this.headerEl) {
              this.tableEl.removeChild(this.headerEl);
            }

            this.headerEl = headerRenderer(this.tableEl, this.options, state);

            if (this.headerEl) {
              this.tableEl.appendChild(this.headerEl);

              if (this.columnInfo.length) {
                this.columnInfo.forEach((cI, index) => {
                  const headerCellRenderer = (this.options.headerList || {})[cI.id] || _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_3__["defaultHeaderCellRenderer"];
                  const node = headerCellRenderer(cI, this.options, state);
                  this.applyAdditionalHeaderCellAttributes(node, cI, this.options, state);
                  this.headerEl.appendChild(node);
                });
              }
            } // Render body


            if (this.bodyEl) {
              this.tableEl.removeChild(this.bodyEl);
            }

            const bodyRenderer = this.options.bodyWrapper || _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_1__["defaultBodyWrapper"];
            this.bodyEl = bodyRenderer(this.tableEl, this.options, state);

            if (this.bodyEl) {
              this.tableEl.appendChild(this.bodyEl);
              const row = this.options.rowWrapper || _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_6__["defaultRowWrapper"];
              state.data.forEach((item, index) => {
                const el = row(this.bodyEl, this.options, state, index);
                this.columnInfo.forEach(cI => {
                  const rowCellRenderer = (this.options.cells || {})[cI.id] || _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_5__["defaultRowCellRenderer"];
                  const node = rowCellRenderer(cI, this.options, state, index);
                  this.applyAdditionalCellAttributes(node, cI, this.options, state, index);
                  el.appendChild(node);
                });
              });
            } // Render footer


            if (this.footerEl) {
              this.tableEl.removeChild(this.footerEl);
            }

            const footerRenderer = this.options.footerWrapper || _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_2__["defaultFooterWrapper"];
            this.footerEl = footerRenderer(this.tableEl, this.options, state);

            if (this.footerEl) {
              this.tableEl.appendChild(this.footerEl); // We assume footer render handles all data so no additional renders here
            }
          }

        }
        /***/

      },

      /***/
      "./src/render/defaultBodyWrapper.ts":
      /*!******************************************!*\
        !*** ./src/render/defaultBodyWrapper.ts ***!
        \******************************************/

      /*! exports provided: defaultBodyWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultBodyWrapper", function () {
          return defaultBodyWrapper;
        });

        const defaultBodyWrapper = (node, options, state) => {
          const el = document.createElement('tbody');
          node.appendChild(el);

          if (state.hasError) {
            const errorTr = document.createElement('tr');
            const errorTd = document.createElement('td');
            errorTd.colSpan = options.columns.length;
            errorTd.innerText = state.errorMessage || 'Unknown Error';
            errorTd.classList.add('sf-table__error');
            errorTr.appendChild(errorTd);
            el.appendChild(errorTr);
          } else if (state.data.length === 0) {
            const emptyTr = document.createElement('tr');
            const emptyTd = document.createElement('td');
            emptyTd.colSpan = options.columns.length;
            emptyTd.innerHTML = 'No Data';
            emptyTd.classList.add('sf-table__empty');
            emptyTr.appendChild(emptyTd);
            el.appendChild(emptyTr);
          }

          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultFooterWrapper.ts":
      /*!********************************************!*\
        !*** ./src/render/defaultFooterWrapper.ts ***!
        \********************************************/

      /*! exports provided: defaultFooterWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultFooterWrapper", function () {
          return defaultFooterWrapper;
        });

        const defaultFooterWrapper = (node, options, state) => {
          return undefined;
        };
        /***/

      },

      /***/
      "./src/render/defaultHeaderCellRenderer.ts":
      /*!*************************************************!*\
        !*** ./src/render/defaultHeaderCellRenderer.ts ***!
        \*************************************************/

      /*! exports provided: defaultHeaderCellRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultHeaderCellRenderer", function () {
          return defaultHeaderCellRenderer;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts");

        const defaultHeaderCellRenderer = (column, options, state) => {
          const el = document.createElement('th');
          const classes = [];

          if (column.sortable) {
            classes.push('sf-table__sort');
            el.addEventListener('click', () => {
              state.parent.triggerSort(column.id);
            });
          }

          if (state.sortBy === column.id) {
            if (state.sortDir === _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC) {
              classes.push('sf-table__sort_asc');
            } else {
              classes.push('sf-table__sort_desc');
            }
          }

          el.innerHTML = `<div class="${classes.join(' ')}">${column.title}</div>`;
          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultHeaderWrapper.ts":
      /*!********************************************!*\
        !*** ./src/render/defaultHeaderWrapper.ts ***!
        \********************************************/

      /*! exports provided: defaultHeaderWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultHeaderWrapper", function () {
          return defaultHeaderWrapper;
        });

        const defaultHeaderWrapper = (node, options, state) => {
          const el = document.createElement('thead');
          node.appendChild(el);
          const tr = document.createElement('tr');
          el.appendChild(tr);
          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultRenderer.ts":
      /*!***************************************!*\
        !*** ./src/render/defaultRenderer.ts ***!
        \***************************************/

      /*! exports provided: defaultRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultRenderer", function () {
          return defaultRenderer;
        });

        const defaultRenderer = {
          columns: [],
          sortable: [],

          /**
           * Basic class/attribute properties
           */
          ui: {
            wrapperClassName: 'table-responsive',
            tableClassName: 'table table-striped',
            cellClassName: {},
            rowClassName: '',
            cellAttributes: cellMeta => {
              return {};
            },
            rowAttributes: rowlMeta => {
              return {};
            }
          }
        };
        /***/
      },

      /***/
      "./src/render/defaultRowRenderer.ts":
      /*!******************************************!*\
        !*** ./src/render/defaultRowRenderer.ts ***!
        \******************************************/

      /*! exports provided: defaultRowCellRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultRowCellRenderer", function () {
          return defaultRowCellRenderer;
        });

        const defaultRowCellRenderer = (column, options, state, index) => {
          const el = document.createElement('td');
          el.innerText = state.data[index][column.id];
          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultRowWrapper.ts":
      /*!*****************************************!*\
        !*** ./src/render/defaultRowWrapper.ts ***!
        \*****************************************/

      /*! exports provided: defaultRowWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultRowWrapper", function () {
          return defaultRowWrapper;
        });

        const defaultRowWrapper = (node, options, state, index) => {
          const el = document.createElement('tr');
          node.appendChild(el);
          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultTableWrapper.ts":
      /*!*******************************************!*\
        !*** ./src/render/defaultTableWrapper.ts ***!
        \*******************************************/

      /*! exports provided: defaultTableWrapper */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultTableWrapper", function () {
          return defaultTableWrapper;
        });

        const defaultTableWrapper = (node, options) => {
          const el = document.createElement('table');
          el.className = options.ui.tableClassName || '';
          node.appendChild(el);
          return el;
        };
        /***/

      },

      /***/
      "./src/render/premade/simpleCellFormatter.ts":
      /*!***************************************************!*\
        !*** ./src/render/premade/simpleCellFormatter.ts ***!
        \***************************************************/

      /*! exports provided: simpleCellFormatter */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "simpleCellFormatter", function () {
          return simpleCellFormatter;
        });

        const simpleCellFormatter = (formatFunction = v => v ? v.toString() : '', tagName = 'td') => {
          const renderer = (column, options, state, index) => {
            const el = document.createElement(tagName);
            el.innerHTML = formatFunction(state.data[index][column.id], state.data[index]);
            return el;
          };

          return renderer;
        };
        /***/

      },

      /***/
      "./src/utils.ts":
      /*!**********************!*\
        !*** ./src/utils.ts ***!
        \**********************/

      /*! exports provided: normalizeColumns, applyAttrributes */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "normalizeColumns", function () {
          return normalizeColumns;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "applyAttrributes", function () {
          return applyAttrributes;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");

        const normalizeColumns = (columns, sortable) => {
          const sList = sortable.map(s => {
            if (typeof s === 'string') {
              return {
                field: s,
                direction: undefined
              };
            }

            return s;
          });
          return columns.map(c => {
            let id;
            let title;
            let sortDir;
            let sortable = false;

            if (typeof c === 'string') {
              id = c;
              title = c;
              sortDir = _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC;
            } else {
              id = c.id;
              title = c.title || c.id;
              sortDir = c.sortDir || _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC;
              sortable = !!c.sortDir;
            }

            const sort = sList.find(s => s.field === id);

            if (sort) {
              return {
                id,
                title,
                sortable: true,
                direction: sort.direction || sortDir
              };
            }

            return {
              id,
              title,
              sortable,
              direction: sortDir
            };
          });
        };

        const applyAttrributes = (node, attrs) => {
          Object.keys(attrs).forEach(name => {
            node.setAttribute(name, attrs[name]);
          });
        };
        /***/

      },

      /***/
      0:
      /*!****************************!*\
        !*** multi ./src/index.ts ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index.ts */
        "./src/index.ts");
        /***/
      },

      /***/
      "@spiral-toolkit/core":
      /*!***************************************!*\
        !*** external "@spiral-toolkit/core" ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__;
        /***/
      }
      /******/

    })
  );
});

/***/ }),

/***/ "../form/dist/form.js":
/*!****************************!*\
  !*** ../form/dist/form.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js"));else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css":
      /*!**************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css ***!
        \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        // Imports
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
        /*! ../../../node_modules/css-loader/dist/runtime/api.js */
        "../../node_modules/css-loader/dist/runtime/api.js");

        exports = ___CSS_LOADER_API_IMPORT___(true); // Module

        exports.push([module.i, "[data-form-message] ~ [data-form-hint] {\n  display: none;\n}\n\n.is-invalid[data-message-placeholder]>.invalid-feedback,\n.is-invalid[data-field]>.invalid-feedback {\n  display: block;\n}\n", "", {
          "version": 3,
          "sources": ["styles.css"],
          "names": [],
          "mappings": "AAAA;EACE,aAAa;AACf;;AAEA;;EAEE,cAAc;AAChB",
          "file": "styles.css",
          "sourcesContent": ["[data-form-message] ~ [data-form-hint] {\n  display: none;\n}\n\n.is-invalid[data-message-placeholder]>.invalid-feedback,\n.is-invalid[data-field]>.invalid-feedback {\n  display: block;\n}\n"]
        }]); // Exports

        module.exports = exports;
        /***/
      },

      /***/
      "../../node_modules/css-loader/dist/runtime/api.js":
      /*!**************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/runtime/api.js ***!
        \**************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /*
          MIT License http://www.opensource.org/licenses/mit-license.php
          Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names

        module.exports = function (useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names


          list.i = function (modules, mediaQuery, dedupe) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];

                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);

              if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
              }

              if (mediaQuery) {
                if (!item[2]) {
                  item[2] = mediaQuery;
                } else {
                  item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
          }

          return [content].join('\n');
        } // Adapted from convert-source-map (MIT)


        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
          return "/*# ".concat(data, " */");
        }
        /***/

      },

      /***/
      "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!*************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
        \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var isOldIE = function isOldIE() {
          var memo;
          return function memorize() {
            if (typeof memo === 'undefined') {
              // Test for IE <= 9 as proposed by Browserhacks
              // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
              // Tests for existence of standard globals is to allow style-loader
              // to operate correctly into non-standard environments
              // @see https://github.com/webpack-contrib/style-loader/issues/177
              memo = Boolean(window && document && document.all && !window.atob);
            }

            return memo;
          };
        }();

        var getTarget = function getTarget() {
          var memo = {};
          return function memorize(target) {
            if (typeof memo[target] === 'undefined') {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  // istanbul ignore next
                  styleTarget = null;
                }
              }

              memo[target] = styleTarget;
            }

            return memo[target];
          };
        }();

        var stylesInDom = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDom.length; i++) {
            if (stylesInDom[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var index = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3]
            };

            if (index !== -1) {
              stylesInDom[index].references++;
              stylesInDom[index].updater(obj);
            } else {
              stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function insertStyleElement(options) {
          var style = document.createElement('style');
          var attributes = options.attributes || {};

          if (typeof attributes.nonce === 'undefined') {
            var nonce = true ? __webpack_require__.nc : undefined;

            if (nonce) {
              attributes.nonce = nonce;
            }
          }

          Object.keys(attributes).forEach(function (key) {
            style.setAttribute(key, attributes[key]);
          });

          if (typeof options.insert === 'function') {
            options.insert(style);
          } else {
            var target = getTarget(options.insert || 'head');

            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            }

            target.appendChild(style);
          }

          return style;
        }

        function removeStyleElement(style) {
          // istanbul ignore if
          if (style.parentNode === null) {
            return false;
          }

          style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */


        var replaceText = function replaceText() {
          var textStore = [];
          return function replace(index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
          };
        }();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) {
              style.removeChild(childNodes[index]);
            }

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, options, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;

          if (media) {
            style.setAttribute('media', media);
          } else {
            style.removeAttribute('media');
          }

          if (sourceMap && btoa) {
            css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
          } // For old IE

          /* istanbul ignore if  */


          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        var singleton = null;
        var singletonCounter = 0;

        function addStyle(obj, options) {
          var style;
          var update;
          var remove;

          if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = insertStyleElement(options));
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else {
            style = insertStyleElement(options);
            update = applyToTag.bind(null, style, options);

            remove = function remove() {
              removeStyleElement(style);
            };
          }

          update(obj);
          return function updateStyle(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
              }

              update(obj = newObj);
            } else {
              remove();
            }
          };
        }

        module.exports = function (list, options) {
          options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== 'boolean') {
            options.singleton = isOldIE();
          }

          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            if (Object.prototype.toString.call(newList) !== '[object Array]') {
              return;
            }

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDom[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDom[_index].references === 0) {
                stylesInDom[_index].updater();

                stylesInDom.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };
        /***/

      },

      /***/
      "./src/Form.js":
      /*!*********************!*\
        !*** ./src/Form.js ***!
        \*********************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _formToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./formToObject */
        "./src/formToObject.js");
        /* harmony import */


        var _formToObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formToObject__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _formMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./formMessages */
        "./src/formMessages.js");
        /* harmony import */


        var _formMessages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formMessages__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _iterateInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./iterateInputs */
        "./src/iterateInputs.js");
        /* harmony import */


        var _iterateInputs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iterateInputs__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./styles.css */
        "./src/styles.css");
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
        /* eslint-disable no-console */

        /* eslint-disable func-names */

        /* eslint-disable no-param-reassign */

        /* eslint-disable no-underscore-dangle */


        let idCounter = 1;
        /**
         * Spiral Forms
         * @param {Object} sf
         * @param {Object} node  DomNode of form
         * @param {Object} [options] all options to override default
         * @constructor Form
         * @extends BaseDOMConstructor
         */

        const Form = function (sf, node, options) {
          this._construct(sf, node, options);
        };
        /**
         * @lends sf.Form.prototype
         */


        Form.prototype = _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.createModulePrototype();
        /**
         * Name to register
         * @type {string}
         */

        Form.prototype.name = 'form';
        /**
         * Function that call on new instance is created.
         * @param {Object} sf
         * @param {Object} node  DomNode of form
         * @param {Object} [options] all options to override default
         * @private
         */

        Form.prototype._construct = function (sf, node, options) {
          this.init(sf, node, options);
          this.options.jsonOnly = this.options.jsonOnly && !!window.FormData;
          this.mixMessagesOptions(); // this.options.fillFrom && this.fillFieldsFrom(); // id required to fill form

          /**
             * @extends DOMEvents
             * @type {DOMEvents}
             * @inheritDoc
             * */

          this.DOMEvents = new this.sf.helpers.DOMEvents();
          this.addEvents();
          this.events = new this.sf.core.Events(['beforeSend', 'success', 'error', 'always']);
          _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.iterateInputs = _iterateInputs__WEBPACK_IMPORTED_MODULE_3___default.a;
        };
        /**
         * @override
         * @inheritDoc
         * @enum {Object}
         * @deprecated
         */


        Form.prototype.optionsToGrab = {
          /**
             * Link to form
             */
          context: {
            processor(node) {
              // Processor
              return node;
            }

          },

          /**
             * Link to 'this'
             */
          self: {
            processor() {
              return this;
            }

          },
          id: {
            // eslint-disable-next-line no-plusplus
            value: `form:${idCounter++}`,
            domAttr: 'id'
          },

          /**
             * URL to send form (if ajax form) <b>Default: "/"</b>
             */
          url: {
            domAttr: 'action',
            value: '/'
          },

          /**
             * Method to send to send form (if ajax form) <b>Default: "POST"</b>
             */
          method: {
            domAttr: 'method',
            value: 'POST'
          },

          /**
             * Lock type when form sending <b>Default: "default"</b> @see sf.lock
             */
          lockType: {
            value: 'default',
            domAttr: 'data-lock-type'
          },

          /**
             * Force to not use FormData even if it's available
             */
          jsonOnly: {
            value: false,
            domAttr: 'data-json-only'
          },

          /**
             *
             */
          messagesType: {
            value: 'spiral',
            domAttr: 'data-messages-type'
          },

          /**
             * Pass custom template for form messages
             */
          messages: {
            value: '',
            domAttr: 'data-messages',

            processor(node, val, self) {
              if (!val) return this.value;

              if (typeof val === 'string') {
                try {
                  val = JSON.parse(val);
                } catch (e) {
                  console.error('Form JSON.parse error: ', e);
                }
              }

              return Object.assign(self.value, val);
            }

          },

          /**
             * Use ajax to submit form <b>Default: true</b>
             */
          useAjax: {
            // Attribute of form
            value: true,
            // Default value
            domAttr: 'data-use-ajax',

            processor(node, val) {
              // processor to process data before return
              if (typeof val === 'boolean') {
                return val;
              }

              val = val !== undefined && val !== null ? val.toLowerCase() : '';

              if (val === 'false') {
                val = false;
              } else if (val === 'true') {
                val = true;
              }

              return val;
            }

          },

          /**
             * Callback after form submitting <b>Default: false</b>
             * <br/>
             * <b> Example </b>
             * function(options){
             *  //options contains all options after send
             * }
             */
          ajaxCallback: {
            // attribute of form
            value: false,
            // Default value
            domAttr: 'data-callback'
          },
          beforeSubmitCallback: {
            // attribute of form
            value: false,
            // Default value
            domAttr: 'data-before-submit'
          },
          afterSubmitCallback: {
            // attribute of form
            value: false,
            // Default value
            domAttr: 'data-after-submit'
          },
          headers: {
            // attribute of form
            value: {
              Accept: 'application/json'
            },
            // Default value
            domAttr: 'data-headers',

            processor(node, val, self) {
              if (val === undefined || val == null) return this.value;

              if (typeof val === 'string') {
                try {
                  val = JSON.parse(val);
                } catch (e) {
                  console.error('Form JSON.parse error: ', e);
                }
              }

              return Object.assign(self.value, val);
            }

          }
        };

        Form.prototype.mixMessagesOptions = function () {
          const global = this.sf.options.instances.form;
          this.options.messages = { ..._formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.defaults,
            ...(global && global.messages && global.messages[this.options.messagesType]),
            ...this.options.messages
          };
        };
        /**
         * Call on form submit
         * @param {Event} e submit event
         */


        Form.prototype.onSubmit = function (e) {
          if (this.sf.getInstance('lock', this.node)) {
            // On lock we should'n do any actions
            e.preventDefault();
            e.stopPropagation();
            return;
          }

          this.removeMessages();
          this.options.data = this.getFormData(); // We can send files only with FormData
          // If form contain files and no FormData than disable ajax

          if (!this.options.jsonOnly && this.options.context.querySelectorAll("input[type='file']").length !== 0) {
            this.options.useAjax = false;
          }

          this.events.trigger('beforeSend', this.options); // sf.events.performAction("beforeSubmit", this.options);
          // this.events.performAction("beforeSubmit", this.options);

          if (this.options.useAjax) {
            this.send(this.options);
            e.preventDefault();
            e.stopPropagation();
          }
        };
        /**
         * Locker. Add or remove.
         */


        Form.prototype.lock = function () {
          if (!this.options.lockType || this.options.lockType === 'none') {
            return;
          }

          const lock = this.sf.addInstance('lock', this.node, {
            type: this.options.lockType
          });

          if (!lock) {
            console.warn("You try to add 'lock' instance, but it is not available or already started");
            return;
          }

          this.options.onProgress = lock.progress;
        };
        /**
         * Locker. Add or remove.
         */


        Form.prototype.unlock = function () {
          if (!this.options.lockType || this.options.lockType === 'none') {
            return;
          }

          if (!this.sf.removeInstance('lock', this.node)) {
            console.warn("You try to remove 'lock' instance, but it is not available or not started");
          }
        }; // Form messages


        Form.prototype.showFormMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFormMessage;
        Form.prototype.showFieldMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFieldMessage;
        Form.prototype.showFieldsMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFieldsMessages;
        Form.prototype.showMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showMessages;
        Form.prototype.removeMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.removeMessages;
        Form.prototype.removeMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.removeMessage;

        Form.prototype.processAnswer = function (answer, showUnknown = true) {
          if (this.options.messagesType) {
            this.showMessages(answer, showUnknown);
          }
        };

        Form.prototype.setFieldValues = function (values) {
          this.sf.iterateInputs(this.node, values, (el, value) => {
            if (typeof el.sfSetValue === 'function') {
              el.sfSetValue(value);
            } else {
              if (el.type === 'checkbox') {
                if (!el.value) {
                  // single checkbox
                  el.checked = !!value;
                } else {
                  // eslint-disable-next-line eqeqeq,max-len
                  el.checked = Array.isArray(value) ? value.indexOf(el.value) >= 0 : el.value == value;
                }
              }

              el.value = value; // TODO: That wont work for radiogroups, etc.
            }
          });
        };

        Form.prototype.enumerateFieldNames = function () {
          console.log(this.node.querySelectorAll('input,select,textarea'));
          return [...this.node.querySelectorAll('input,select,textarea')].map(el => el.getAttribute('name')); // TODO: support custom inputs too
        };

        Form.prototype.optCallback = function (options, type) {
          if (options[type]) {
            // eslint-disable-next-line no-eval
            const fn = eval(options[type]);

            if (typeof fn === 'function') {
              return fn.call(this, options);
            }
          }
        };
        /**
         * Send form to server
         * @param {Object} sendOptions
         */


        Form.prototype.send = function (sendOptions) {
          const that = this;

          if (this.optCallback(sendOptions, 'beforeSubmitCallback') === false) {
            return;
          }

          this.lock();
          this.sf.ajax.send(sendOptions).then(answer => {
            that.events.trigger('success', sendOptions);
            return answer;
          }, error => {
            that.events.trigger('error', sendOptions);
            return error;
          }).then(answer => {
            that.lock(true);
            that.processAnswer(answer);
            this.optCallback(sendOptions, 'afterSubmitCallback');
            that.events.trigger('always', sendOptions);
          }); // To cancel request:
          // if (this.sf.ajax.cancel) this.sf.ajax.cancel();
        };
        /**
         * Serialize form
         * @return {Object}
         */


        Form.prototype.getFormData = function () {
          if (!this.options.jsonOnly) {
            return new FormData(this.options.context);
          } // console.log(`Form \`${this.options.context}\` were processed without FormData.`);


          return new _formToObject__WEBPACK_IMPORTED_MODULE_1___default.a(this.options.context);
        };
        /**
         * Set options (overwrite current)
         * @param {Object} opt options
         */


        Form.prototype.setOptions = function (opt) {
          this.options = Object.assign(this.options, opt);
        };
        /**
         * Add all events for forms
         */


        Form.prototype.addEvents = function () {
          const that = this;
          this.DOMEvents.add([{
            DOMNode: this.options.context,
            eventType: 'submit',

            eventFunction(e) {
              that.onSubmit.call(that, e);
            }

          }]);
        };
        /**
         * Clear all variables and die
         */


        Form.prototype.die = function () {
          this.DOMEvents.removeAll(); // TODO don't we need to remove it's addons and plugins?
        };
        /* harmony default export */


        __webpack_exports__["default"] = Form;
        /***/
      },

      /***/
      "./src/formMessages.js":
      /*!*****************************!*\
        !*** ./src/formMessages.js ***!
        \*****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        /* eslint-disable max-len */

        /* eslint-disable no-underscore-dangle */

        /* eslint-disable no-param-reassign */

        /* eslint-disable no-multi-assign */

        /* eslint-disable no-template-curly-in-string */
        const sf = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");

        const defaults = {
          // template: '<div class="alert form-msg ${type}"><button class="btn-close">×</button><p class="msg">${text}</p></div>',
          template: '<div class="alert alert-${type} alert-dismissible fade show" role="alert">' + '${text}' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + '<span aria-hidden="true">&times;</span>' + '</button>' + '</div>',
          close: '.close',
          place: 'bottom',
          levels: {
            success: 'success',
            info: 'info',
            warning: 'warning',
            error: 'danger'
          },
          selector: '[data-message]',
          field: '[data-field]',
          fieldElement: '[data-input]',
          fieldTemplate: '<div data-message class="invalid-feedback" data-form-message>${text}</div>',
          fieldPlace: 'bottom',
          fieldClasses: {
            success: 'is-valid',
            info: 'is-valid',
            warning: 'is-invalid',
            error: 'is-invalid'
          }
        }; // Often used alias

        defaults.levels.message = defaults.levels.success; // Other aliases
        // PSR-3 severity levels mapping (debug, info, notice, warning, error, critical, alert, emergency)
        // https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-3-logger-interface.md

        defaults.levels.debug = defaults.levels.success;
        defaults.levels.info = defaults.levels.notice = defaults.levels.info;
        defaults.levels.danger = defaults.levels.critical = defaults.levels.alert = defaults.levels.emergency = defaults.levels.error;
        /**
         * @param {Object|String} message
         * @param {String} type
         * @return {Object}
         */

        function prepareMessageObject(message, type) {
          if (typeof message !== 'object') {
            message = {
              text: message,
              type
            };
          }

          message.text = message.text || message.message || message;
          message.type = message.type || type;
          return message;
        }

        module.exports = {
          defaults,

          showMessages(answer, showUnknown = true) {
            if (!answer) return;
            let isMsg = false;
            const that = this;

            if (answer.data) {
              // for (const type in this.options.messages.levels) {
              Object.keys(this.options.messages.levels).forEach(type => {
                if (answer.data[type]) {
                  this.showFormMessage(answer.data[type], this.options.messages.levels[type]);
                  isMsg = true;
                }
              });

              if (answer.data.messages) {
                this.showFieldsMessages(answer.data.messages, 'success', showUnknown);
                isMsg = true;
              }

              if (answer.data.errors) {
                this.showFieldsMessages(answer.data.errors, 'error', showUnknown);
                isMsg = true;
              }

              if (answer.data.warnings) {
                this.showFieldsMessages(answer.data.warnings, 'warning', showUnknown);
                isMsg = true;
              }
            }

            if (!isMsg) {
              let error;

              if (!answer.status) {
                // Network.error
                error = answer;
              } else if (answer.status > 300) {
                error = answer.status ? `${answer.status} ` : '';
                error += answer.statusText ? answer.statusText : '';
                error += answer.data && !answer.statusText ? answer.data : '';
              }

              if (error) this.showFormMessage(error, this.options.messages.levels.error);
            }

            this._messages.forEach(m => {
              if (m.close) {
                m.closeHandler = that.removeMessage.bind(that, m);
                m.close.addEventListener('click', m.closeHandler);
              }
            });
          },

          removeMessage(m, e) {
            if (m.close) {
              m.close.removeEventListener('click', m.closeHandler);
            }

            m.el.parentNode.removeChild(m.el);

            if (m.field) {
              const fieldEl = m.field.querySelector(this.options.messages.fieldElement);

              if (fieldEl) {
                fieldEl.classList.remove(this.options.messages.fieldClasses[m.type]);
              } else {
                m.field.classList.remove(this.options.messages.fieldClasses[m.type]);
              }
            }

            if (e) {
              if (e.preventDefault) e.preventDefault();

              this._messages.splice(this._messages.indexOf(m), 1);
            }
          },

          removeMessages() {
            const that = this;

            if (this._messages) {
              this._messages.forEach(m => {
                that.removeMessage(m, false);
              });
            }

            that._messages = [];
          },

          showFormMessage(message, type) {
            let parent;
            let tpl = this.options.messages.template;
            message = prepareMessageObject(message, type); // for (const item in message) {

            Object.keys(message).forEach(item => {
              // eslint-disable-next-line no-prototype-builtins
              if (!message.hasOwnProperty(item)) return;
              tpl = tpl.replace(`\${${item}}`, message[item]);
            });
            const tplElem = document.createElement('div');
            tplElem.innerHTML = tpl;
            const msgEl = tplElem.firstChild;

            if (this.options.messages.place === 'bottom') {
              this.node.appendChild(msgEl);
            } else if (this.options.messages.place === 'top') {
              this.node.insertBefore(msgEl, this.node.firstChild);
            } else {
              parent = document.querySelector(this.options.messages.place);
              parent.appendChild(msgEl);
            }

            this._messages.push({
              el: msgEl,
              close: msgEl.querySelector(this.options.messages.close)
            });
          },

          /**
             * @param {HTMLElement} el
             * @param {String} message
             * @param {String} type
             * @param {Boolean} [isContainer]
             */
          showFieldMessage(el, message, type, isContainer) {
            let field = isContainer ? el : sf.helpers.domTools.closest(el, this.options.messages.field);
            let tpl = this.options.messages.fieldTemplate;

            if (!field) {
              return;
            }

            message = prepareMessageObject(message, type);
            const fieldEl = field.querySelector(this.options.messages.fieldElement);
            const currentMsgEl = field.querySelector(this.options.messages.selector);

            if (fieldEl) {
              fieldEl.classList.add(this.options.messages.fieldClasses[type]);
            } else {
              field.classList.add(this.options.messages.fieldClasses[type]);
            } // for (const item in message) {


            Object.keys(message).forEach(item => {
              // eslint-disable-next-line no-prototype-builtins
              if (!message.hasOwnProperty(item)) return;
              tpl = tpl.replace(`\${${item}}`, message[item]);
            });
            const tplElem = document.createElement('div');
            tplElem.innerHTML = tpl;
            const msgEl = tplElem.firstChild;

            if (this.options.messages.fieldPlace === 'bottom') {
              if (fieldEl) {
                field.insertBefore(msgEl, fieldEl.nextSibling);
              } else if (!currentMsgEl) {
                field.appendChild(msgEl);
              }
            } else if (this.options.messages.fieldPlace === 'top') {
              field.insertBefore(msgEl, field.firstChild);
            } else {
              field = field.querySelector(this.options.messages.fieldPlace);
              field.appendChild(msgEl);
            }

            this._messages.push({
              el: msgEl,
              close: msgEl.querySelector(this.options.messages.fieldClose),
              field,
              type
            });
          },

          showFieldsMessages(messages, type, showUnknown = true) {
            const that = this;
            const notFound = sf.iterateInputs(this.node, messages, (el, message) => {
              that.showFieldMessage(el, message, type);
            });

            if (showUnknown) {
              notFound.forEach(msgObj => {
                Object.keys(msgObj).forEach(name => {
                  const container = that.node.querySelector(`[data-message-placeholder="${name}"]`);

                  if (container) {
                    // TODO check container.dataset.messageVariant? variants are "field" and "form"
                    that.showFieldMessage(container, msgObj[name], type, true);
                  }
                });
              });
            }
          }

        };
        /***/
      },

      /***/
      "./src/formToObject.js":
      /*!*****************************!*\
        !*** ./src/formToObject.js ***!
        \*****************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-param-reassign */

        /* eslint-disable func-names */

        /*
         * github.com/serbanghita/FormToObject.js 1.0.1  (c) 2013 Serban Ghita <serbanghita@gmail.com>
         * @licence MIT
         */
        // Constructor.
        const FormToObject = function (formRef) {
          if (!formRef) {
            return false;
          }

          this.formRef = formRef; // eslint-disable-next-line no-useless-escape

          this.keyRegex = /[^\[\]]+/g;
          this.$form = null;
          this.$formElements = [];
          this.formObj = {};

          if (!this.setForm()) {
            return false;
          }

          if (!this.setFormElements()) {
            return false;
          }

          return this.setFormObj();
        }; // Set the main form object we are working on.


        FormToObject.prototype.setForm = function () {
          switch (typeof this.formRef) {
            case 'string':
              this.$form = document.getElementById(this.formRef);
              break;

            case 'object':
              if (this.isDomNode(this.formRef)) {
                this.$form = this.formRef;
              }

              break;

            default:
          }

          return this.$form;
        }; // Set the elements we need to parse.


        FormToObject.prototype.setFormElements = function () {
          this.$formElements = this.$form.querySelectorAll('input, textarea, select');
          return this.$formElements.length;
        }; // Check to see if the object is a HTML node.


        FormToObject.prototype.isDomNode = function (node) {
          return typeof node === 'object' && 'nodeType' in node && node.nodeType === 1;
        }; // Iteration through arrays and objects. Compatible with IE.


        FormToObject.prototype.forEach = function (arr, callback) {
          if ([].forEach) {
            [].forEach.call(arr, callback);
            return;
          } // let i;
          // for (i in arr) {


          Object.keys(arr).forEach(i => {
            // Object.prototype.hasOwnProperty instead of arr.hasOwnProperty for IE8 compatibility.
            if (Object.prototype.hasOwnProperty.call(arr, i)) {
              callback.call(arr, arr[i]);
            }
          });
        }; // Recursive method that adds keys and values of the corresponding fields.


        FormToObject.prototype.addChild = function (result, domNode, keys, value) {
          // #1 - Single dimensional array.
          if (keys.length === 1) {
            // We're only interested in the radio that is checked.
            if (domNode.nodeName === 'INPUT' && domNode.type === 'radio') {
              if (domNode.checked) {
                result[keys] = value;
                return;
              }

              return;
            } // Checkboxes are a special case. We have to grab each checked values
            // and put them into an array.


            if (domNode.nodeName === 'INPUT' && domNode.type === 'checkbox') {
              if (value) {
                // Looks like checkbox array
                if (domNode.checked) {
                  if (!result[keys]) {
                    result[keys] = [];
                  }

                  result[keys].push(value);
                }
              } else {
                result[keys] = domNode.checked ? 1 : 0; // Single checkbox
              }

              return;
            } // Multiple select is a special case.
            // We have to grab each selected option and put them into an array.


            if (domNode.nodeName === 'SELECT' && domNode.type === 'select-multiple') {
              result[keys] = [];
              const DOMchilds = domNode.querySelectorAll('option[selected]');

              if (DOMchilds) {
                this.forEach(DOMchilds, child => {
                  result[keys].push(child.value);
                });
              }

              return;
            } // Fallback. The default one to one assign.


            result[keys] = value;
          } // #2 - Multi dimensional array.


          if (keys.length > 1) {
            if (!result[keys[0]]) {
              result[keys[0]] = {};
            }

            this.addChild(result[keys[0]], domNode, keys.splice(1, keys.length), value);
          } // return result; // ?

        };

        FormToObject.prototype.setFormObj = function () {
          let test;
          let i = 0;

          for (i = 0; i < this.$formElements.length; i += 1) {
            // Ignore the element if the 'name' attribute is empty.
            // Ignore the 'disabled' elements.
            if (this.$formElements[i].name && !this.$formElements[i].disabled) {
              test = this.$formElements[i].name.match(this.keyRegex);
              this.addChild(this.formObj, this.$formElements[i], test, this.$formElements[i].value);
            }
          }

          return this.formObj;
        };

        module.exports = FormToObject;
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        const sf = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");

        const Form = __webpack_require__(
        /*! ./Form */
        "./src/Form.js").default;

        sf.registerInstanceType(Form, 'js-sf-form');
        module.exports = Form; // ES6 default export will not expose us as global

        /***/
      },

      /***/
      "./src/iterateInputs.js":
      /*!******************************!*\
        !*** ./src/iterateInputs.js ***!
        \******************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /* eslint-disable no-console */

        /* eslint-disable func-names */
        // Plugin in formMessages to iterate form inputs
        // TODO comment all of this
        // TODO ask @Systerr the reason of variable 'prefix'
        let notFound = [];
        /**
         *
         * @param {HTMLElement} context
         * @param {Object} names
         * @param {Function} callback
         * @param {String} [prefix]
         */

        function findNodes(context, names, callback, prefix) {
          // for (const name in names) {
          Object.keys(names).forEach(name => {
            // eslint-disable-next-line no-prototype-builtins
            if (!names.hasOwnProperty(name)) {
              return;
            }

            const partOfSelector = prefix ? `${prefix}[${name}]` : name;
            const type = Object.prototype.toString.call(names[name]);
            const selector = `[name='${partOfSelector}']`;

            switch (type) {
              case '[object Object]':
                findNodes(context, names[name], callback, partOfSelector);
                break;

              case '[object Array]':
                names[name].forEach(el => {
                  // TODO refactor this should call recursive
                  const sel = `[name='${partOfSelector}[]'][value='${el}']`;
                  const nodes = context.querySelectorAll(sel);

                  if (nodes.length === 0) {
                    notFound.push(sel);
                  }

                  for (let i = 0, max = nodes.length; i < max; i += 1) {
                    callback(nodes[i], true);
                  }
                });
                break;

              case '[object String]':
              case '[object Number]':
                // eslint-disable-next-line no-case-declarations
                const nodes = context.querySelectorAll(selector);

                if (nodes.length === 0) {
                  const obj = {};
                  obj[partOfSelector] = names[name];
                  notFound.push(obj);
                }

                for (let i = 0, max = nodes.length; i < max; i += 1) {
                  callback(nodes[i], names[name]);
                }

                break;

              default:
                console.error('unknown type -', type, ' and message', names[name]);
            }
          });
        }
        /**
         * @param {HTMLElement} context
         * @param {Object} names
         * @param {Function} callback
         * @param {String} [prefix]
         * @return {String[]}
         */


        const iterateInputs = function (context, names, callback, prefix) {
          notFound = [];
          findNodes(context, names, callback, prefix);

          if (notFound.length !== 0) {// eslint-disable-next-line no-console
            // console.log('Some element not found in form', notFound);
          }

          return notFound;
        };

        module.exports = iterateInputs;
        /***/
      },

      /***/
      "./src/styles.css":
      /*!************************!*\
        !*** ./src/styles.css ***!
        \************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
        /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
        "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

        var content = __webpack_require__(
        /*! !../../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./styles.css */
        "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css");

        content = content.__esModule ? content.default : content;

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};
        options.insert = "head";
        options.singleton = false;
        var update = api(content, options);
        var exported = content.locals ? content.locals : {};
        module.exports = exported;
        /***/
      },

      /***/
      0:
      /*!****************************!*\
        !*** multi ./src/index.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index.js */
        "./src/index.js");
        /***/
      },

      /***/
      "@spiral-toolkit/core":
      /*!***************************************!*\
        !*** external "@spiral-toolkit/core" ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__;
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybU1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzP2YwZjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJGb3JtIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJqc29uT25seSIsIndpbmRvdyIsIkZvcm1EYXRhIiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJpZCIsInZhbHVlIiwiZG9tQXR0ciIsInVybCIsIm1ldGhvZCIsImxvY2tUeXBlIiwibWVzc2FnZXNUeXBlIiwibWVzc2FnZXMiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwidXNlQWpheCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiYWpheENhbGxiYWNrIiwiYmVmb3JlU3VibWl0Q2FsbGJhY2siLCJhZnRlclN1Ym1pdENhbGxiYWNrIiwiaGVhZGVycyIsIkFjY2VwdCIsImdsb2JhbCIsImluc3RhbmNlcyIsImZvcm0iLCJmb3JtTWVzc2FnZXMiLCJkZWZhdWx0cyIsIm9uU3VibWl0IiwiZ2V0SW5zdGFuY2UiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZU1lc3NhZ2VzIiwiZGF0YSIsImdldEZvcm1EYXRhIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRyaWdnZXIiLCJzZW5kIiwibG9jayIsImFkZEluc3RhbmNlIiwidHlwZSIsIndhcm4iLCJvblByb2dyZXNzIiwicHJvZ3Jlc3MiLCJ1bmxvY2siLCJyZW1vdmVJbnN0YW5jZSIsInNob3dGb3JtTWVzc2FnZSIsInNob3dGaWVsZE1lc3NhZ2UiLCJzaG93RmllbGRzTWVzc2FnZXMiLCJzaG93TWVzc2FnZXMiLCJyZW1vdmVNZXNzYWdlIiwicHJvY2Vzc0Fuc3dlciIsImFuc3dlciIsInNob3dVbmtub3duIiwic2V0RmllbGRWYWx1ZXMiLCJ2YWx1ZXMiLCJlbCIsInNmU2V0VmFsdWUiLCJjaGVja2VkIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsImVudW1lcmF0ZUZpZWxkTmFtZXMiLCJsb2ciLCJtYXAiLCJnZXRBdHRyaWJ1dGUiLCJvcHRDYWxsYmFjayIsImZuIiwiZXZhbCIsImNhbGwiLCJzZW5kT3B0aW9ucyIsInRoYXQiLCJhamF4IiwidGhlbiIsIkZvcm1Ub09iamVjdCIsInNldE9wdGlvbnMiLCJvcHQiLCJhZGQiLCJET01Ob2RlIiwiZXZlbnRUeXBlIiwiZXZlbnRGdW5jdGlvbiIsImRpZSIsInJlbW92ZUFsbCIsInJlcXVpcmUiLCJ0ZW1wbGF0ZSIsImNsb3NlIiwicGxhY2UiLCJsZXZlbHMiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJzZWxlY3RvciIsImZpZWxkIiwiZmllbGRFbGVtZW50IiwiZmllbGRUZW1wbGF0ZSIsImZpZWxkUGxhY2UiLCJmaWVsZENsYXNzZXMiLCJtZXNzYWdlIiwiZGVidWciLCJub3RpY2UiLCJkYW5nZXIiLCJjcml0aWNhbCIsImFsZXJ0IiwiZW1lcmdlbmN5IiwicHJlcGFyZU1lc3NhZ2VPYmplY3QiLCJ0ZXh0IiwibW9kdWxlIiwiZXhwb3J0cyIsImlzTXNnIiwia2V5cyIsImZvckVhY2giLCJlcnJvcnMiLCJ3YXJuaW5ncyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJfbWVzc2FnZXMiLCJtIiwiY2xvc2VIYW5kbGVyIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZmllbGRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzcGxpY2UiLCJwYXJlbnQiLCJ0cGwiLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJyZXBsYWNlIiwidHBsRWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm1zZ0VsIiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicHVzaCIsImlzQ29udGFpbmVyIiwiZG9tVG9vbHMiLCJjbG9zZXN0IiwiY3VycmVudE1zZ0VsIiwibmV4dFNpYmxpbmciLCJmaWVsZENsb3NlIiwibm90Rm91bmQiLCJtc2dPYmoiLCJjb250YWluZXIiLCJmb3JtUmVmIiwia2V5UmVnZXgiLCIkZm9ybSIsIiRmb3JtRWxlbWVudHMiLCJmb3JtT2JqIiwic2V0Rm9ybSIsInNldEZvcm1FbGVtZW50cyIsInNldEZvcm1PYmoiLCJnZXRFbGVtZW50QnlJZCIsImlzRG9tTm9kZSIsIm5vZGVUeXBlIiwiYXJyIiwiY2FsbGJhY2siLCJpIiwiYWRkQ2hpbGQiLCJyZXN1bHQiLCJkb21Ob2RlIiwibm9kZU5hbWUiLCJET01jaGlsZHMiLCJjaGlsZCIsInRlc3QiLCJkaXNhYmxlZCIsIm1hdGNoIiwiZGVmYXVsdCIsInJlZ2lzdGVySW5zdGFuY2VUeXBlIiwiZmluZE5vZGVzIiwibmFtZXMiLCJwcmVmaXgiLCJwYXJ0T2ZTZWxlY3RvciIsInRvU3RyaW5nIiwic2VsIiwibm9kZXMiLCJtYXgiLCJvYmoiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywrR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsa0JBQWtCLEdBQUcseUdBQXlHLG1CQUFtQixHQUFHLFNBQVMsaUVBQWlFLFVBQVUs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bUJBQU8sQ0FBQyw0SkFBNEU7O0FBRTlHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxrRSIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiLCBbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIltkYXRhLWZvcm0tbWVzc2FnZV0gfiBbZGF0YS1mb3JtLWhpbnRdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pcy1pbnZhbGlkW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcl0+LmludmFsaWQtZmVlZGJhY2ssXFxuLmlzLWludmFsaWRbZGF0YS1maWVsZF0+LmludmFsaWQtZmVlZGJhY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQlwiLFwiZmlsZVwiOlwic3R5bGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJbZGF0YS1mb3JtLW1lc3NhZ2VdIH4gW2RhdGEtZm9ybS1oaW50XSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaXMtaW52YWxpZFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXJdPi5pbnZhbGlkLWZlZWRiYWNrLFxcbi5pcy1pbnZhbGlkW2RhdGEtZmllbGRdPi5pbnZhbGlkLWZlZWRiYWNrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuaW1wb3J0IGNvcmUgZnJvbSAnQHNwaXJhbC10b29sa2l0L2NvcmUnO1xuXG5pbXBvcnQgRm9ybVRvT2JqZWN0IGZyb20gJy4vZm9ybVRvT2JqZWN0JztcbmltcG9ydCBmb3JtTWVzc2FnZXMgZnJvbSAnLi9mb3JtTWVzc2FnZXMnO1xuaW1wb3J0IGl0ZXJhdGVJbnB1dHMgZnJvbSAnLi9pdGVyYXRlSW5wdXRzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5sZXQgaWRDb3VudGVyID0gMTtcblxuXG4vKipcbiAqIFNwaXJhbCBGb3Jtc1xuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAgRG9tTm9kZSBvZiBmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIHRvIG92ZXJyaWRlIGRlZmF1bHRcbiAqIEBjb25zdHJ1Y3RvciBGb3JtXG4gKiBAZXh0ZW5kcyBCYXNlRE9NQ29uc3RydWN0b3JcbiAqL1xuY29uc3QgRm9ybSA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLl9jb25zdHJ1Y3Qoc2YsIG5vZGUsIG9wdGlvbnMpO1xufTtcblxuXG4vKipcbiAqIEBsZW5kcyBzZi5Gb3JtLnByb3RvdHlwZVxuICovXG5Gb3JtLnByb3RvdHlwZSA9IGNvcmUuY3JlYXRlTW9kdWxlUHJvdG90eXBlKCk7XG5cbi8qKlxuICogTmFtZSB0byByZWdpc3RlclxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuRm9ybS5wcm90b3R5cGUubmFtZSA9ICdmb3JtJztcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGNhbGwgb24gbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICogQHByaXZhdGVcbiAqL1xuRm9ybS5wcm90b3R5cGUuX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLmluaXQoc2YsIG5vZGUsIG9wdGlvbnMpO1xuICB0aGlzLm9wdGlvbnMuanNvbk9ubHkgPSB0aGlzLm9wdGlvbnMuanNvbk9ubHkgJiYgISF3aW5kb3cuRm9ybURhdGE7XG4gIHRoaXMubWl4TWVzc2FnZXNPcHRpb25zKCk7XG4gIC8vIHRoaXMub3B0aW9ucy5maWxsRnJvbSAmJiB0aGlzLmZpbGxGaWVsZHNGcm9tKCk7IC8vIGlkIHJlcXVpcmVkIHRvIGZpbGwgZm9ybVxuXG4gIC8qKlxuICAgICAqIEBleHRlbmRzIERPTUV2ZW50c1xuICAgICAqIEB0eXBlIHtET01FdmVudHN9XG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKiAqL1xuICB0aGlzLkRPTUV2ZW50cyA9IG5ldyB0aGlzLnNmLmhlbHBlcnMuRE9NRXZlbnRzKCk7XG4gIHRoaXMuYWRkRXZlbnRzKCk7XG5cbiAgdGhpcy5ldmVudHMgPSBuZXcgdGhpcy5zZi5jb3JlLkV2ZW50cyhbJ2JlZm9yZVNlbmQnLCAnc3VjY2VzcycsICdlcnJvcicsICdhbHdheXMnXSk7XG4gIGNvcmUuaXRlcmF0ZUlucHV0cyA9IGl0ZXJhdGVJbnB1dHM7XG59O1xuXG4vKipcbiAqIEBvdmVycmlkZVxuICogQGluaGVyaXREb2NcbiAqIEBlbnVtIHtPYmplY3R9XG4gKiBAZGVwcmVjYXRlZFxuICovXG5Gb3JtLnByb3RvdHlwZS5vcHRpb25zVG9HcmFiID0ge1xuICAvKipcbiAgICAgKiBMaW5rIHRvIGZvcm1cbiAgICAgKi9cbiAgY29udGV4dDoge1xuICAgIHByb2Nlc3Nvcihub2RlKSB7IC8vIFByb2Nlc3NvclxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogTGluayB0byAndGhpcydcbiAgICAgKi9cbiAgc2VsZjoge1xuICAgIHByb2Nlc3NvcigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gIH0sXG4gIGlkOiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgdmFsdWU6IGBmb3JtOiR7aWRDb3VudGVyKyt9YCxcbiAgICBkb21BdHRyOiAnaWQnLFxuICB9LFxuICAvKipcbiAgICAgKiBVUkwgdG8gc2VuZCBmb3JtIChpZiBhamF4IGZvcm0pIDxiPkRlZmF1bHQ6IFwiL1wiPC9iPlxuICAgICAqL1xuICB1cmw6IHtcbiAgICBkb21BdHRyOiAnYWN0aW9uJyxcbiAgICB2YWx1ZTogJy8nLFxuICB9LFxuICAvKipcbiAgICAgKiBNZXRob2QgdG8gc2VuZCB0byBzZW5kIGZvcm0gKGlmIGFqYXggZm9ybSkgPGI+RGVmYXVsdDogXCJQT1NUXCI8L2I+XG4gICAgICovXG4gIG1ldGhvZDoge1xuICAgIGRvbUF0dHI6ICdtZXRob2QnLFxuICAgIHZhbHVlOiAnUE9TVCcsXG4gIH0sXG4gIC8qKlxuICAgICAqIExvY2sgdHlwZSB3aGVuIGZvcm0gc2VuZGluZyA8Yj5EZWZhdWx0OiBcImRlZmF1bHRcIjwvYj4gQHNlZSBzZi5sb2NrXG4gICAgICovXG4gIGxvY2tUeXBlOiB7XG4gICAgdmFsdWU6ICdkZWZhdWx0JyxcbiAgICBkb21BdHRyOiAnZGF0YS1sb2NrLXR5cGUnLFxuICB9LFxuICAvKipcbiAgICAgKiBGb3JjZSB0byBub3QgdXNlIEZvcm1EYXRhIGV2ZW4gaWYgaXQncyBhdmFpbGFibGVcbiAgICAgKi9cbiAganNvbk9ubHk6IHtcbiAgICB2YWx1ZTogZmFsc2UsXG4gICAgZG9tQXR0cjogJ2RhdGEtanNvbi1vbmx5JyxcbiAgfSxcbiAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgbWVzc2FnZXNUeXBlOiB7XG4gICAgdmFsdWU6ICdzcGlyYWwnLFxuICAgIGRvbUF0dHI6ICdkYXRhLW1lc3NhZ2VzLXR5cGUnLFxuICB9LFxuICAvKipcbiAgICAgKiBQYXNzIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgZm9ybSBtZXNzYWdlc1xuICAgICAqL1xuICBtZXNzYWdlczoge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkb21BdHRyOiAnZGF0YS1tZXNzYWdlcycsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCwgc2VsZikge1xuICAgICAgaWYgKCF2YWwpIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybSBKU09OLnBhcnNlIGVycm9yOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZi52YWx1ZSwgdmFsKTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBVc2UgYWpheCB0byBzdWJtaXQgZm9ybSA8Yj5EZWZhdWx0OiB0cnVlPC9iPlxuICAgICAqL1xuICB1c2VBamF4OiB7IC8vIEF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IHRydWUsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS11c2UtYWpheCcsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCkgeyAvLyBwcm9jZXNzb3IgdG8gcHJvY2VzcyBkYXRhIGJlZm9yZSByZXR1cm5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHZhbCA9ICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpID8gdmFsLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHZhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIENhbGxiYWNrIGFmdGVyIGZvcm0gc3VibWl0dGluZyA8Yj5EZWZhdWx0OiBmYWxzZTwvYj5cbiAgICAgKiA8YnIvPlxuICAgICAqIDxiPiBFeGFtcGxlIDwvYj5cbiAgICAgKiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICAgKiAgLy9vcHRpb25zIGNvbnRhaW5zIGFsbCBvcHRpb25zIGFmdGVyIHNlbmRcbiAgICAgKiB9XG4gICAgICovXG4gIGFqYXhDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWNhbGxiYWNrJyxcbiAgfSxcbiAgYmVmb3JlU3VibWl0Q2FsbGJhY2s6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogZmFsc2UsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1iZWZvcmUtc3VibWl0JyxcbiAgfSxcbiAgYWZ0ZXJTdWJtaXRDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWFmdGVyLXN1Ym1pdCcsXG4gIH0sXG4gIGhlYWRlcnM6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtaGVhZGVycycsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCwgc2VsZikge1xuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UodmFsKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gSlNPTi5wYXJzZSBlcnJvcjogJywgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHNlbGYudmFsdWUsIHZhbCk7XG4gICAgfSxcbiAgfSxcbn07XG5cbkZvcm0ucHJvdG90eXBlLm1peE1lc3NhZ2VzT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsID0gdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlcy5mb3JtO1xuICB0aGlzLm9wdGlvbnMubWVzc2FnZXMgPSB7XG4gICAgLi4uZm9ybU1lc3NhZ2VzLmRlZmF1bHRzLFxuICAgIC4uLmdsb2JhbCAmJiBnbG9iYWwubWVzc2FnZXMgJiYgZ2xvYmFsLm1lc3NhZ2VzW3RoaXMub3B0aW9ucy5tZXNzYWdlc1R5cGVdLFxuICAgIC4uLnRoaXMub3B0aW9ucy5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbi8qKlxuICogQ2FsbCBvbiBmb3JtIHN1Ym1pdFxuICogQHBhcmFtIHtFdmVudH0gZSBzdWJtaXQgZXZlbnRcbiAqL1xuRm9ybS5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAodGhpcy5zZi5nZXRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICAvLyBPbiBsb2NrIHdlIHNob3VsZCduIGRvIGFueSBhY3Rpb25zXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5yZW1vdmVNZXNzYWdlcygpO1xuXG4gIHRoaXMub3B0aW9ucy5kYXRhID0gdGhpcy5nZXRGb3JtRGF0YSgpO1xuXG4gIC8vIFdlIGNhbiBzZW5kIGZpbGVzIG9ubHkgd2l0aCBGb3JtRGF0YVxuICAvLyBJZiBmb3JtIGNvbnRhaW4gZmlsZXMgYW5kIG5vIEZvcm1EYXRhIHRoYW4gZGlzYWJsZSBhamF4XG4gIGlmICghdGhpcy5vcHRpb25zLmpzb25Pbmx5ICYmIHRoaXMub3B0aW9ucy5jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdmaWxlJ11cIikubGVuZ3RoICE9PSAwKSB7XG4gICAgdGhpcy5vcHRpb25zLnVzZUFqYXggPSBmYWxzZTtcbiAgfVxuICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdiZWZvcmVTZW5kJywgdGhpcy5vcHRpb25zKTtcbiAgLy8gc2YuZXZlbnRzLnBlcmZvcm1BY3Rpb24oXCJiZWZvcmVTdWJtaXRcIiwgdGhpcy5vcHRpb25zKTtcbiAgLy8gdGhpcy5ldmVudHMucGVyZm9ybUFjdGlvbihcImJlZm9yZVN1Ym1pdFwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMudXNlQWpheCkge1xuICAgIHRoaXMuc2VuZCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogTG9ja2VyLiBBZGQgb3IgcmVtb3ZlLlxuICovXG5Gb3JtLnByb3RvdHlwZS5sb2NrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XG4gIGlmICghbG9jaykge1xuICAgIGNvbnNvbGUud2FybihcIllvdSB0cnkgdG8gYWRkICdsb2NrJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLm9wdGlvbnMub25Qcm9ncmVzcyA9IGxvY2sucHJvZ3Jlc3M7XG59O1xuXG4vKipcbiAqIExvY2tlci4gQWRkIG9yIHJlbW92ZS5cbiAqL1xuRm9ybS5wcm90b3R5cGUudW5sb2NrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXRoaXMuc2YucmVtb3ZlSW5zdGFuY2UoJ2xvY2snLCB0aGlzLm5vZGUpKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byByZW1vdmUgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZFwiKTtcbiAgfVxufTtcblxuLy8gRm9ybSBtZXNzYWdlc1xuRm9ybS5wcm90b3R5cGUuc2hvd0Zvcm1NZXNzYWdlID0gZm9ybU1lc3NhZ2VzLnNob3dGb3JtTWVzc2FnZTtcbkZvcm0ucHJvdG90eXBlLnNob3dGaWVsZE1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMuc2hvd0ZpZWxkTWVzc2FnZTtcbkZvcm0ucHJvdG90eXBlLnNob3dGaWVsZHNNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5zaG93RmllbGRzTWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5zaG93TWVzc2FnZXMgPSBmb3JtTWVzc2FnZXMuc2hvd01lc3NhZ2VzO1xuRm9ybS5wcm90b3R5cGUucmVtb3ZlTWVzc2FnZXMgPSBmb3JtTWVzc2FnZXMucmVtb3ZlTWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVNZXNzYWdlID0gZm9ybU1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2U7XG5cbkZvcm0ucHJvdG90eXBlLnByb2Nlc3NBbnN3ZXIgPSBmdW5jdGlvbiAoYW5zd2VyLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlc1R5cGUpIHtcbiAgICB0aGlzLnNob3dNZXNzYWdlcyhhbnN3ZXIsIHNob3dVbmtub3duKTtcbiAgfVxufTtcblxuRm9ybS5wcm90b3R5cGUuc2V0RmllbGRWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHRoaXMuc2YuaXRlcmF0ZUlucHV0cyh0aGlzLm5vZGUsIHZhbHVlcywgKGVsLCB2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZWwuc2ZTZXRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwuc2ZTZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGlmICghZWwudmFsdWUpIHsgLy8gc2luZ2xlIGNoZWNrYm94XG4gICAgICAgICAgZWwuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcSxtYXgtbGVuXG4gICAgICAgICAgZWwuY2hlY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gKHZhbHVlLmluZGV4T2YoZWwudmFsdWUpID49IDApIDogKGVsLnZhbHVlID09IHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwudmFsdWUgPSB2YWx1ZTsgLy8gVE9ETzogVGhhdCB3b250IHdvcmsgZm9yIHJhZGlvZ3JvdXBzLCBldGMuXG4gICAgfVxuICB9KTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmVudW1lcmF0ZUZpZWxkTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnKSk7XG4gIHJldHVybiBbLi4udGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScpXS5tYXAoKGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7IC8vIFRPRE86IHN1cHBvcnQgY3VzdG9tIGlucHV0cyB0b29cbn07XG5cbkZvcm0ucHJvdG90eXBlLm9wdENhbGxiYWNrID0gZnVuY3Rpb24gKG9wdGlvbnMsIHR5cGUpIHtcbiAgaWYgKG9wdGlvbnNbdHlwZV0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuICAgIGNvbnN0IGZuID0gZXZhbChvcHRpb25zW3R5cGVdKTtcbiAgICBpZiAodHlwZW9mIChmbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZW5kIGZvcm0gdG8gc2VydmVyXG4gKiBAcGFyYW0ge09iamVjdH0gc2VuZE9wdGlvbnNcbiAqL1xuRm9ybS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kT3B0aW9ucykge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgaWYgKHRoaXMub3B0Q2FsbGJhY2soc2VuZE9wdGlvbnMsICdiZWZvcmVTdWJtaXRDYWxsYmFjaycpID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmxvY2soKTtcbiAgdGhpcy5zZi5hamF4LnNlbmQoc2VuZE9wdGlvbnMpLnRoZW4oXG4gICAgKGFuc3dlcikgPT4ge1xuICAgICAgdGhhdC5ldmVudHMudHJpZ2dlcignc3VjY2VzcycsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfSxcbiAgICAoZXJyb3IpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgc2VuZE9wdGlvbnMpO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0sXG4gICkudGhlbigoYW5zd2VyKSA9PiB7XG4gICAgdGhhdC5sb2NrKHRydWUpO1xuICAgIHRoYXQucHJvY2Vzc0Fuc3dlcihhbnN3ZXIpO1xuICAgIHRoaXMub3B0Q2FsbGJhY2soc2VuZE9wdGlvbnMsICdhZnRlclN1Ym1pdENhbGxiYWNrJyk7XG4gICAgdGhhdC5ldmVudHMudHJpZ2dlcignYWx3YXlzJywgc2VuZE9wdGlvbnMpO1xuICB9KTtcblxuICAvLyBUbyBjYW5jZWwgcmVxdWVzdDpcbiAgLy8gaWYgKHRoaXMuc2YuYWpheC5jYW5jZWwpIHRoaXMuc2YuYWpheC5jYW5jZWwoKTtcbn07XG5cbi8qKlxuICogU2VyaWFsaXplIGZvcm1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuRm9ybS5wcm90b3R5cGUuZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmpzb25Pbmx5KSB7XG4gICAgcmV0dXJuIG5ldyBGb3JtRGF0YSh0aGlzLm9wdGlvbnMuY29udGV4dCk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coYEZvcm0gXFxgJHt0aGlzLm9wdGlvbnMuY29udGV4dH1cXGAgd2VyZSBwcm9jZXNzZWQgd2l0aG91dCBGb3JtRGF0YS5gKTtcbiAgcmV0dXJuIG5ldyBGb3JtVG9PYmplY3QodGhpcy5vcHRpb25zLmNvbnRleHQpO1xufTtcblxuLyoqXG4gKiBTZXQgb3B0aW9ucyAob3ZlcndyaXRlIGN1cnJlbnQpXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0IG9wdGlvbnNcbiAqL1xuRm9ybS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHQpIHtcbiAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdCk7XG59O1xuXG4vKipcbiAqIEFkZCBhbGwgZXZlbnRzIGZvciBmb3Jtc1xuICovXG5Gb3JtLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuICB0aGlzLkRPTUV2ZW50cy5hZGQoW1xuICAgIHtcbiAgICAgIERPTU5vZGU6IHRoaXMub3B0aW9ucy5jb250ZXh0LFxuICAgICAgZXZlbnRUeXBlOiAnc3VibWl0JyxcbiAgICAgIGV2ZW50RnVuY3Rpb24oZSkge1xuICAgICAgICB0aGF0Lm9uU3VibWl0LmNhbGwodGhhdCwgZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0pO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgdmFyaWFibGVzIGFuZCBkaWVcbiAqL1xuRm9ybS5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLkRPTUV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgLy8gVE9ETyBkb24ndCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCdzIGFkZG9ucyBhbmQgcGx1Z2lucz9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAvLyB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJhbGVydCBmb3JtLW1zZyAke3R5cGV9XCI+PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiPsOXPC9idXR0b24+PHAgY2xhc3M9XCJtc2dcIj4ke3RleHR9PC9wPjwvZGl2PicsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dHlwZX0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93XCIgcm9sZT1cImFsZXJ0XCI+J1xuICAgICsgJyR7dGV4dH0nXG4gICAgKyAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+J1xuICAgICsgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+J1xuICAgICsgJzwvYnV0dG9uPidcbiAgICArICc8L2Rpdj4nLFxuICBjbG9zZTogJy5jbG9zZScsXG4gIHBsYWNlOiAnYm90dG9tJyxcbiAgbGV2ZWxzOiB7XG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLCBpbmZvOiAnaW5mbycsIHdhcm5pbmc6ICd3YXJuaW5nJywgZXJyb3I6ICdkYW5nZXInLFxuICB9LFxuICBzZWxlY3RvcjogJ1tkYXRhLW1lc3NhZ2VdJyxcbiAgZmllbGQ6ICdbZGF0YS1maWVsZF0nLFxuICBmaWVsZEVsZW1lbnQ6ICdbZGF0YS1pbnB1dF0nLFxuICBmaWVsZFRlbXBsYXRlOiAnPGRpdiBkYXRhLW1lc3NhZ2UgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCIgZGF0YS1mb3JtLW1lc3NhZ2U+JHt0ZXh0fTwvZGl2PicsXG4gIGZpZWxkUGxhY2U6ICdib3R0b20nLFxuICBmaWVsZENsYXNzZXM6IHtcbiAgICBzdWNjZXNzOiAnaXMtdmFsaWQnLCBpbmZvOiAnaXMtdmFsaWQnLCB3YXJuaW5nOiAnaXMtaW52YWxpZCcsIGVycm9yOiAnaXMtaW52YWxpZCcsXG4gIH0sXG59O1xuXG4vLyBPZnRlbiB1c2VkIGFsaWFzXG5kZWZhdWx0cy5sZXZlbHMubWVzc2FnZSA9IGRlZmF1bHRzLmxldmVscy5zdWNjZXNzO1xuXG4vLyBPdGhlciBhbGlhc2VzXG4vLyBQU1ItMyBzZXZlcml0eSBsZXZlbHMgbWFwcGluZyAoZGVidWcsIGluZm8sIG5vdGljZSwgd2FybmluZywgZXJyb3IsIGNyaXRpY2FsLCBhbGVydCwgZW1lcmdlbmN5KVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BocC1maWcvZmlnLXN0YW5kYXJkcy9ibG9iL21hc3Rlci9hY2NlcHRlZC9QU1ItMy1sb2dnZXItaW50ZXJmYWNlLm1kXG5kZWZhdWx0cy5sZXZlbHMuZGVidWcgPSBkZWZhdWx0cy5sZXZlbHMuc3VjY2VzcztcbmRlZmF1bHRzLmxldmVscy5pbmZvID0gZGVmYXVsdHMubGV2ZWxzLm5vdGljZSA9IGRlZmF1bHRzLmxldmVscy5pbmZvO1xuZGVmYXVsdHMubGV2ZWxzLmRhbmdlciA9IGRlZmF1bHRzLmxldmVscy5jcml0aWNhbCA9IGRlZmF1bHRzLmxldmVscy5hbGVydCA9IGRlZmF1bHRzLmxldmVscy5lbWVyZ2VuY3kgPSBkZWZhdWx0cy5sZXZlbHMuZXJyb3I7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gJ29iamVjdCcpIHtcbiAgICBtZXNzYWdlID0geyB0ZXh0OiBtZXNzYWdlLCB0eXBlIH07XG4gIH1cbiAgbWVzc2FnZS50ZXh0ID0gbWVzc2FnZS50ZXh0IHx8IG1lc3NhZ2UubWVzc2FnZSB8fCBtZXNzYWdlO1xuICBtZXNzYWdlLnR5cGUgPSBtZXNzYWdlLnR5cGUgfHwgdHlwZTtcbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0cyxcbiAgc2hvd01lc3NhZ2VzKGFuc3dlciwgc2hvd1Vua25vd24gPSB0cnVlKSB7XG4gICAgaWYgKCFhbnN3ZXIpIHJldHVybjtcblxuICAgIGxldCBpc01zZyA9IGZhbHNlO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgaWYgKGFuc3dlci5kYXRhKSB7XG4gICAgICAvLyBmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscykge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscykuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBpZiAoYW5zd2VyLmRhdGFbdHlwZV0pIHtcbiAgICAgICAgICB0aGlzLnNob3dGb3JtTWVzc2FnZShhbnN3ZXIuZGF0YVt0eXBlXSwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVsc1t0eXBlXSk7XG4gICAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFuc3dlci5kYXRhLm1lc3NhZ2VzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLm1lc3NhZ2VzLCAnc3VjY2VzcycsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLmVycm9ycykge1xuICAgICAgICB0aGlzLnNob3dGaWVsZHNNZXNzYWdlcyhhbnN3ZXIuZGF0YS5lcnJvcnMsICdlcnJvcicsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLndhcm5pbmdzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLndhcm5pbmdzLCAnd2FybmluZycsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNNc2cpIHtcbiAgICAgIGxldCBlcnJvcjtcbiAgICAgIGlmICghYW5zd2VyLnN0YXR1cykgeyAvLyBOZXR3b3JrLmVycm9yXG4gICAgICAgIGVycm9yID0gYW5zd2VyO1xuICAgICAgfSBlbHNlIGlmIChhbnN3ZXIuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIGVycm9yID0gYW5zd2VyLnN0YXR1cyA/IGAke2Fuc3dlci5zdGF0dXN9IGAgOiAnJztcbiAgICAgICAgZXJyb3IgKz0gYW5zd2VyLnN0YXR1c1RleHQgPyBhbnN3ZXIuc3RhdHVzVGV4dCA6ICcnO1xuICAgICAgICBlcnJvciArPSBhbnN3ZXIuZGF0YSAmJiAhYW5zd2VyLnN0YXR1c1RleHQgPyBhbnN3ZXIuZGF0YSA6ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGVycm9yKSB0aGlzLnNob3dGb3JtTWVzc2FnZShlcnJvciwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscy5lcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKG0uY2xvc2UpIHtcbiAgICAgICAgbS5jbG9zZUhhbmRsZXIgPSB0aGF0LnJlbW92ZU1lc3NhZ2UuYmluZCh0aGF0LCBtKTtcbiAgICAgICAgbS5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG0uY2xvc2VIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVNZXNzYWdlKG0sIGUpIHtcbiAgICBpZiAobS5jbG9zZSkge1xuICAgICAgbS5jbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG0uY2xvc2VIYW5kbGVyKTtcbiAgICB9XG4gICAgbS5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0uZWwpO1xuICAgIGlmIChtLmZpZWxkKSB7XG4gICAgICBjb25zdCBmaWVsZEVsID0gbS5maWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZEVsZW1lbnQpO1xuICAgICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgICAgZmllbGRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbbS50eXBlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtLmZpZWxkLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1ttLnR5cGVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9tZXNzYWdlcy5zcGxpY2UodGhpcy5fbWVzc2FnZXMuaW5kZXhPZihtKSwgMSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZU1lc3NhZ2VzKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9tZXNzYWdlcykge1xuICAgICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICB0aGF0LnJlbW92ZU1lc3NhZ2UobSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoYXQuX21lc3NhZ2VzID0gW107XG4gIH0sXG5cbiAgc2hvd0Zvcm1NZXNzYWdlKG1lc3NhZ2UsIHR5cGUpIHtcbiAgICBsZXQgcGFyZW50O1xuICAgIGxldCB0cGwgPSB0aGlzLm9wdGlvbnMubWVzc2FnZXMudGVtcGxhdGU7XG5cbiAgICBtZXNzYWdlID0gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSk7XG5cbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVzc2FnZSkge1xuICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkgcmV0dXJuO1xuICAgICAgdHBsID0gdHBsLnJlcGxhY2UoYFxcJHske2l0ZW19fWAsIG1lc3NhZ2VbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHBsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwbEVsZW0uaW5uZXJIVE1MID0gdHBsO1xuICAgIGNvbnN0IG1zZ0VsID0gdHBsRWxlbS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UgPT09ICd0b3AnKSB7XG4gICAgICB0aGlzLm5vZGUuaW5zZXJ0QmVmb3JlKG1zZ0VsLCB0aGlzLm5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goeyBlbDogbXNnRWwsIGNsb3NlOiBtc2dFbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5jbG9zZSkgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaXNDb250YWluZXJdXG4gICAgICovXG4gIHNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUsIGlzQ29udGFpbmVyKSB7XG4gICAgbGV0IGZpZWxkID0gaXNDb250YWluZXIgPyBlbCA6IHNmLmhlbHBlcnMuZG9tVG9vbHMuY2xvc2VzdChlbCwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkKTtcbiAgICBsZXQgdHBsID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkVGVtcGxhdGU7XG5cbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZSA9IHByZXBhcmVNZXNzYWdlT2JqZWN0KG1lc3NhZ2UsIHR5cGUpO1xuXG4gICAgY29uc3QgZmllbGRFbCA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkRWxlbWVudCk7XG4gICAgY29uc3QgY3VycmVudE1zZ0VsID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuc2VsZWN0b3IpO1xuXG4gICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgIGZpZWxkRWwuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW3R5cGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW3R5cGVdKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVzc2FnZSkge1xuICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkgcmV0dXJuO1xuICAgICAgdHBsID0gdHBsLnJlcGxhY2UoYFxcJHske2l0ZW19fWAsIG1lc3NhZ2VbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHBsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwbEVsZW0uaW5uZXJIVE1MID0gdHBsO1xuICAgIGNvbnN0IG1zZ0VsID0gdHBsRWxlbS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlID09PSAnYm90dG9tJykge1xuICAgICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgICAgZmllbGQuaW5zZXJ0QmVmb3JlKG1zZ0VsLCBmaWVsZEVsLm5leHRTaWJsaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAoIWN1cnJlbnRNc2dFbCkge1xuICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSA9PT0gJ3RvcCcpIHtcbiAgICAgIGZpZWxkLmluc2VydEJlZm9yZShtc2dFbCwgZmllbGQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSk7XG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMucHVzaCh7XG4gICAgICBlbDogbXNnRWwsXG4gICAgICBjbG9zZTogbXNnRWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbG9zZSksXG4gICAgICBmaWVsZCxcbiAgICAgIHR5cGUsXG4gICAgfSk7XG4gIH0sXG5cbiAgc2hvd0ZpZWxkc01lc3NhZ2VzKG1lc3NhZ2VzLCB0eXBlLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBub3RGb3VuZCA9IHNmLml0ZXJhdGVJbnB1dHModGhpcy5ub2RlLCBtZXNzYWdlcywgKGVsLCBtZXNzYWdlKSA9PiB7XG4gICAgICB0aGF0LnNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHNob3dVbmtub3duKSB7XG4gICAgICBub3RGb3VuZC5mb3JFYWNoKChtc2dPYmopID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMobXNnT2JqKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhhdC5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXI9XCIke25hbWV9XCJdYCk7XG4gICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgLy8gVE9ETyBjaGVjayBjb250YWluZXIuZGF0YXNldC5tZXNzYWdlVmFyaWFudD8gdmFyaWFudHMgYXJlIFwiZmllbGRcIiBhbmQgXCJmb3JtXCJcbiAgICAgICAgICAgIHRoYXQuc2hvd0ZpZWxkTWVzc2FnZShjb250YWluZXIsIG1zZ09ialtuYW1lXSwgdHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKlxuICogZ2l0aHViLmNvbS9zZXJiYW5naGl0YS9Gb3JtVG9PYmplY3QuanMgMS4wLjEgIChjKSAyMDEzIFNlcmJhbiBHaGl0YSA8c2VyYmFuZ2hpdGFAZ21haWwuY29tPlxuICogQGxpY2VuY2UgTUlUXG4gKi9cbi8vIENvbnN0cnVjdG9yLlxuXG5jb25zdCBGb3JtVG9PYmplY3QgPSBmdW5jdGlvbiAoZm9ybVJlZikge1xuICBpZiAoIWZvcm1SZWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aGlzLmZvcm1SZWYgPSBmb3JtUmVmO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgdGhpcy5rZXlSZWdleCA9IC9bXlxcW1xcXV0rL2c7XG4gIHRoaXMuJGZvcm0gPSBudWxsO1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSBbXTtcbiAgdGhpcy5mb3JtT2JqID0ge307XG5cbiAgaWYgKCF0aGlzLnNldEZvcm0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIXRoaXMuc2V0Rm9ybUVsZW1lbnRzKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5zZXRGb3JtT2JqKCk7XG59O1xuXG4vLyBTZXQgdGhlIG1haW4gZm9ybSBvYmplY3Qgd2UgYXJlIHdvcmtpbmcgb24uXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIHN3aXRjaCAodHlwZW9mIHRoaXMuZm9ybVJlZikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICB0aGlzLiRmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5mb3JtUmVmKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh0aGlzLmlzRG9tTm9kZSh0aGlzLmZvcm1SZWYpKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLmZvcm1SZWY7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gdGhpcy4kZm9ybTtcbn07XG5cbi8vIFNldCB0aGUgZWxlbWVudHMgd2UgbmVlZCB0byBwYXJzZS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSB0aGlzLiRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gIHJldHVybiB0aGlzLiRmb3JtRWxlbWVudHMubGVuZ3RoO1xufTtcblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MIG5vZGUuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmlzRG9tTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHJldHVybiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgJ25vZGVUeXBlJyBpbiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vLyBJdGVyYXRpb24gdGhyb3VnaCBhcnJheXMgYW5kIG9iamVjdHMuIENvbXBhdGlibGUgd2l0aCBJRS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChhcnIsIGNhbGxiYWNrKSB7XG4gIGlmIChbXS5mb3JFYWNoKSB7XG4gICAgW10uZm9yRWFjaC5jYWxsKGFyciwgY2FsbGJhY2spO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGxldCBpO1xuICAvLyBmb3IgKGkgaW4gYXJyKSB7XG4gIE9iamVjdC5rZXlzKGFycikuZm9yRWFjaCgoaSkgPT4ge1xuICAgIC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgaW5zdGVhZCBvZiBhcnIuaGFzT3duUHJvcGVydHkgZm9yIElFOCBjb21wYXRpYmlsaXR5LlxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJyLCBpKSkge1xuICAgICAgY2FsbGJhY2suY2FsbChhcnIsIGFycltpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFJlY3Vyc2l2ZSBtZXRob2QgdGhhdCBhZGRzIGtleXMgYW5kIHZhbHVlcyBvZiB0aGUgY29ycmVzcG9uZGluZyBmaWVsZHMuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKHJlc3VsdCwgZG9tTm9kZSwga2V5cywgdmFsdWUpIHtcbiAgLy8gIzEgLSBTaW5nbGUgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgcmFkaW8gdGhhdCBpcyBjaGVja2VkLlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrYm94ZXMgYXJlIGEgc3BlY2lhbCBjYXNlLiBXZSBoYXZlIHRvIGdyYWIgZWFjaCBjaGVja2VkIHZhbHVlc1xuICAgIC8vIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgaWYgKHZhbHVlKSB7IC8vIExvb2tzIGxpa2UgY2hlY2tib3ggYXJyYXlcbiAgICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICAgIGlmICghcmVzdWx0W2tleXNdKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5c10gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0W2tleXNdLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5c10gPSBkb21Ob2RlLmNoZWNrZWQgPyAxIDogMDsgLy8gU2luZ2xlIGNoZWNrYm94XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBNdWx0aXBsZSBzZWxlY3QgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgLy8gV2UgaGF2ZSB0byBncmFiIGVhY2ggc2VsZWN0ZWQgb3B0aW9uIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnU0VMRUNUJyAmJiBkb21Ob2RlLnR5cGUgPT09ICdzZWxlY3QtbXVsdGlwbGUnKSB7XG4gICAgICByZXN1bHRba2V5c10gPSBbXTtcbiAgICAgIGNvbnN0IERPTWNoaWxkcyA9IGRvbU5vZGUucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uW3NlbGVjdGVkXScpO1xuICAgICAgaWYgKERPTWNoaWxkcykge1xuICAgICAgICB0aGlzLmZvckVhY2goRE9NY2hpbGRzLCAoY2hpbGQpID0+IHtcbiAgICAgICAgICByZXN1bHRba2V5c10ucHVzaChjaGlsZC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrLiBUaGUgZGVmYXVsdCBvbmUgdG8gb25lIGFzc2lnbi5cbiAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgfVxuXG4gIC8vICMyIC0gTXVsdGkgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoIXJlc3VsdFtrZXlzWzBdXSkge1xuICAgICAgcmVzdWx0W2tleXNbMF1dID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDaGlsZChyZXN1bHRba2V5c1swXV0sIGRvbU5vZGUsIGtleXMuc3BsaWNlKDEsIGtleXMubGVuZ3RoKSwgdmFsdWUpO1xuICB9XG5cbi8vIHJldHVybiByZXN1bHQ7IC8vID9cbn07XG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm1PYmogPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0ZXN0O1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuJGZvcm1FbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIElnbm9yZSB0aGUgZWxlbWVudCBpZiB0aGUgJ25hbWUnIGF0dHJpYnV0ZSBpcyBlbXB0eS5cbiAgICAvLyBJZ25vcmUgdGhlICdkaXNhYmxlZCcgZWxlbWVudHMuXG4gICAgaWYgKHRoaXMuJGZvcm1FbGVtZW50c1tpXS5uYW1lICYmICF0aGlzLiRmb3JtRWxlbWVudHNbaV0uZGlzYWJsZWQpIHtcbiAgICAgIHRlc3QgPSB0aGlzLiRmb3JtRWxlbWVudHNbaV0ubmFtZS5tYXRjaCh0aGlzLmtleVJlZ2V4KTtcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5mb3JtT2JqLCB0aGlzLiRmb3JtRWxlbWVudHNbaV0sIHRlc3QsIHRoaXMuJGZvcm1FbGVtZW50c1tpXS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZm9ybU9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybVRvT2JqZWN0O1xuIiwiXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5jb25zdCBGb3JtID0gcmVxdWlyZSgnLi9Gb3JtJykuZGVmYXVsdDtcblxuc2YucmVnaXN0ZXJJbnN0YW5jZVR5cGUoRm9ybSwgJ2pzLXNmLWZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtOyAvLyBFUzYgZGVmYXVsdCBleHBvcnQgd2lsbCBub3QgZXhwb3NlIHVzIGFzIGdsb2JhbFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vLyBQbHVnaW4gaW4gZm9ybU1lc3NhZ2VzIHRvIGl0ZXJhdGUgZm9ybSBpbnB1dHNcblxuLy8gVE9ETyBjb21tZW50IGFsbCBvZiB0aGlzXG4vLyBUT0RPIGFzayBAU3lzdGVyciB0aGUgcmVhc29uIG9mIHZhcmlhYmxlICdwcmVmaXgnXG5sZXQgbm90Rm91bmQgPSBbXTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtTdHJpbmd9IFtwcmVmaXhdXG4gKi9cbmZ1bmN0aW9uIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCkge1xuICAvLyBmb3IgKGNvbnN0IG5hbWUgaW4gbmFtZXMpIHtcbiAgT2JqZWN0LmtleXMobmFtZXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgaWYgKCFuYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRPZlNlbGVjdG9yID0gKHByZWZpeCkgPyBgJHtwcmVmaXh9WyR7bmFtZX1dYCA6IG5hbWU7XG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuYW1lc1tuYW1lXSk7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgW25hbWU9JyR7cGFydE9mU2VsZWN0b3J9J11gO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXNbbmFtZV0sIGNhbGxiYWNrLCBwYXJ0T2ZTZWxlY3Rvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnW29iamVjdCBBcnJheV0nOlxuICAgICAgICBuYW1lc1tuYW1lXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIC8vIFRPRE8gcmVmYWN0b3IgdGhpcyBzaG91bGQgY2FsbCByZWN1cnNpdmVcbiAgICAgICAgICBjb25zdCBzZWwgPSBgW25hbWU9JyR7cGFydE9mU2VsZWN0b3J9W10nXVt2YWx1ZT0nJHtlbH0nXWA7XG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBub3RGb3VuZC5wdXNoKHNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY2FsbGJhY2sobm9kZXNbaV0sIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgICBjb25zdCBub2RlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICBvYmpbcGFydE9mU2VsZWN0b3JdID0gbmFtZXNbbmFtZV07XG4gICAgICAgICAgbm90Rm91bmQucHVzaChvYmopO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGVzW2ldLCBuYW1lc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Vua25vd24gdHlwZSAtJywgdHlwZSwgJyBhbmQgbWVzc2FnZScsIG5hbWVzW25hbWVdKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJlZml4XVxuICogQHJldHVybiB7U3RyaW5nW119XG4gKi9cbmNvbnN0IGl0ZXJhdGVJbnB1dHMgPSBmdW5jdGlvbiAoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpIHtcbiAgbm90Rm91bmQgPSBbXTtcbiAgZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KTtcbiAgaWYgKG5vdEZvdW5kLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgLy8gY29uc29sZS5sb2coJ1NvbWUgZWxlbWVudCBub3QgZm91bmQgaW4gZm9ybScsIG5vdEZvdW5kKTtcbiAgfVxuICByZXR1cm4gbm90Rm91bmQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZXJhdGVJbnB1dHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPy11cmwmc291cmNlTWFwIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "../locker/dist/locker.js":
/*!********************************!*\
  !*** ../locker/dist/locker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js"));else {}
})(window, function (__WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css":
      /*!**************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css ***!
        \**************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        // Imports
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
        /*! ../../../node_modules/css-loader/dist/runtime/api.js */
        "../../node_modules/css-loader/dist/runtime/api.js");

        exports = ___CSS_LOADER_API_IMPORT___(true); // Module

        exports.push([module.i, ".locked .form-content {\n  pointer-events: none;\n  filter: blur(3px);\n  opacity: .7;\n}\n\n.locker {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  text-align: center;\n}\n", "", {
          "version": 3,
          "sources": ["styles.css"],
          "names": [],
          "mappings": "AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,UAAU;EACV,kBAAkB;AACpB",
          "file": "styles.css",
          "sourcesContent": [".locked .form-content {\n  pointer-events: none;\n  filter: blur(3px);\n  opacity: .7;\n}\n\n.locker {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  text-align: center;\n}\n"]
        }]); // Exports

        module.exports = exports;
        /***/
      },

      /***/
      "../../node_modules/css-loader/dist/runtime/api.js":
      /*!**************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/runtime/api.js ***!
        \**************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";
        /*
          MIT License http://www.opensource.org/licenses/mit-license.php
          Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names

        module.exports = function (useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names


          list.i = function (modules, mediaQuery, dedupe) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];

                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);

              if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
              }

              if (mediaQuery) {
                if (!item[2]) {
                  item[2] = mediaQuery;
                } else {
                  item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
          }

          return [content].join('\n');
        } // Adapted from convert-source-map (MIT)


        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
          return "/*# ".concat(data, " */");
        }
        /***/

      },

      /***/
      "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!*************************************************************************************************!*\
        !*** O:/Projects/SF/toolkit/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
        \*************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var isOldIE = function isOldIE() {
          var memo;
          return function memorize() {
            if (typeof memo === 'undefined') {
              // Test for IE <= 9 as proposed by Browserhacks
              // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
              // Tests for existence of standard globals is to allow style-loader
              // to operate correctly into non-standard environments
              // @see https://github.com/webpack-contrib/style-loader/issues/177
              memo = Boolean(window && document && document.all && !window.atob);
            }

            return memo;
          };
        }();

        var getTarget = function getTarget() {
          var memo = {};
          return function memorize(target) {
            if (typeof memo[target] === 'undefined') {
              var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  // istanbul ignore next
                  styleTarget = null;
                }
              }

              memo[target] = styleTarget;
            }

            return memo[target];
          };
        }();

        var stylesInDom = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDom.length; i++) {
            if (stylesInDom[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var index = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3]
            };

            if (index !== -1) {
              stylesInDom[index].references++;
              stylesInDom[index].updater(obj);
            } else {
              stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function insertStyleElement(options) {
          var style = document.createElement('style');
          var attributes = options.attributes || {};

          if (typeof attributes.nonce === 'undefined') {
            var nonce = true ? __webpack_require__.nc : undefined;

            if (nonce) {
              attributes.nonce = nonce;
            }
          }

          Object.keys(attributes).forEach(function (key) {
            style.setAttribute(key, attributes[key]);
          });

          if (typeof options.insert === 'function') {
            options.insert(style);
          } else {
            var target = getTarget(options.insert || 'head');

            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            }

            target.appendChild(style);
          }

          return style;
        }

        function removeStyleElement(style) {
          // istanbul ignore if
          if (style.parentNode === null) {
            return false;
          }

          style.parentNode.removeChild(style);
        }
        /* istanbul ignore next  */


        var replaceText = function replaceText() {
          var textStore = [];
          return function replace(index, replacement) {
            textStore[index] = replacement;
            return textStore.filter(Boolean).join('\n');
          };
        }();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

          /* istanbul ignore if  */

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) {
              style.removeChild(childNodes[index]);
            }

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, options, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;

          if (media) {
            style.setAttribute('media', media);
          } else {
            style.removeAttribute('media');
          }

          if (sourceMap && btoa) {
            css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
          } // For old IE

          /* istanbul ignore if  */


          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        var singleton = null;
        var singletonCounter = 0;

        function addStyle(obj, options) {
          var style;
          var update;
          var remove;

          if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = insertStyleElement(options));
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else {
            style = insertStyleElement(options);
            update = applyToTag.bind(null, style, options);

            remove = function remove() {
              removeStyleElement(style);
            };
          }

          update(obj);
          return function updateStyle(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
              }

              update(obj = newObj);
            } else {
              remove();
            }
          };
        }

        module.exports = function (list, options) {
          options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== 'boolean') {
            options.singleton = isOldIE();
          }

          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            if (Object.prototype.toString.call(newList) !== '[object Array]') {
              return;
            }

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDom[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDom[_index].references === 0) {
                stylesInDom[_index].updater();

                stylesInDom.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };
        /***/

      },

      /***/
      "./src/Lock.js":
      /*!*********************!*\
        !*** ./src/Lock.js ***!
        \*********************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./styles.css */
        "./src/styles.css");
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
        /* eslint-disable func-names */

        /* eslint-disable no-underscore-dangle */

        /**
         * Spiral lock for forms
         * @constructor Lock
         */


        const Lock = function (sf, node, options) {
          this._construct(sf, node, options);
        };
        /**
         * @lends Lock.prototype
         */


        Lock.prototype = _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.createModulePrototype();
        /**
         * Name of module
         * @type {string}
         */

        Lock.prototype.name = 'lock';
        /**
         * Function that call on new instance is created.
         * @param {Object} sf
         * @param {Object} node  DomNode of form
         * @param {Object} [options] all options to override default
         * @private
         */

        Lock.prototype._construct = function (sf, node, options) {
          this.init(sf, node, options);
          this.progress = this.add(this.options.type, this.node);
        };
        /**
         * Add lock
         * @param {String} [type] type of lock @see sf.lock.types
         * @param {Object} context context to add lock
         * @return {Function|*}
         */


        Lock.prototype.add = function (type, context) {
          // eslint-disable-next-line no-prototype-builtins
          if (!this.types.hasOwnProperty(type)) {
            return false;
          }

          const node = document.createElement('div');
          node.classList.add(this.types[type].className || 'js-sf-lock');
          node.classList.add('locker');
          node.innerHTML = this.types[type].html;
          context.appendChild(node);
          context.classList.add('locked');
          return this.types[type].progress;
        };
        /**
         * Clear all variables and die
         */


        Lock.prototype.die = function () {
          this.remove();
        };
        /**
         * Remove lock
         * @return {boolean}
         */


        Lock.prototype.remove = function () {
          this.node.classList.remove('locked');
          const sfLock = this.node.querySelector('.js-sf-lock'); // TODO this.lockNode ?

          if (sfLock) {
            this.node.removeChild(sfLock);
          }

          return true;
        };
        /**
         * Object with lock types.
         * @enum {Object}
         */


        Lock.prototype.types = {
          /**
             * @type {Object}
             */
          spinner: {
            /**
                 * HTML
                 * @inner
                 * @type String
                 */
            html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
          },
          progress: {
            /**
                 * HTML
                 * @inner
                 * @type String
                 */
            html: '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"></div></div>',

            /**
                 * Function to change styles while AJAX progress
                 * @param {Number} current
                 * @param {Number} total
                 */
            progress(current, total) {
              const progress = this.context.getElementsByClassName('progress-bar')[0];
              progress.style.width = `${100 * (current / total)}%`;
            }

          }
        }; // We have to have some default locker, let it be spinner

        Lock.prototype.types.default = Lock.prototype.types.spinner;
        /* harmony default export */

        __webpack_exports__["default"] = Lock;
        /***/
      },

      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        const sf = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");

        const Lock = __webpack_require__(
        /*! ./Lock */
        "./src/Lock.js").default;

        sf.registerInstanceType(Lock);
        module.exports = Lock; // ES6 default export will not expose us as global

        /***/
      },

      /***/
      "./src/styles.css":
      /*!************************!*\
        !*** ./src/styles.css ***!
        \************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
        /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
        "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

        var content = __webpack_require__(
        /*! !../../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./styles.css */
        "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css");

        content = content.__esModule ? content.default : content;

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};
        options.insert = "head";
        options.singleton = false;
        var update = api(content, options);
        var exported = content.locals ? content.locals : {};
        module.exports = exported;
        /***/
      },

      /***/
      0:
      /*!****************************!*\
        !*** multi ./src/index.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/index.js */
        "./src/index.js");
        /***/
      },

      /***/
      "@spiral-toolkit/core":
      /*!***************************************!*\
        !*** external "@spiral-toolkit/core" ***!
        \***************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__;
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/ZjBmOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiIl0sIm5hbWVzIjpbIkxvY2siLCJzZiIsIm5vZGUiLCJvcHRpb25zIiwiX2NvbnN0cnVjdCIsInByb3RvdHlwZSIsImNvcmUiLCJjcmVhdGVNb2R1bGVQcm90b3R5cGUiLCJuYW1lIiwiaW5pdCIsInByb2dyZXNzIiwiYWRkIiwidHlwZSIsImNvbnRleHQiLCJ0eXBlcyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiaHRtbCIsImFwcGVuZENoaWxkIiwiZGllIiwicmVtb3ZlIiwic2ZMb2NrIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUNoaWxkIiwic3Bpbm5lciIsImN1cnJlbnQiLCJ0b3RhbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiZGVmYXVsdCIsInJlcXVpcmUiLCJyZWdpc3Rlckluc3RhbmNlVHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3Mi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d0IsR0FBRSxPQUFPSixPQUFPLEdBQUdDLEtBQWpCLENBQXdCLEdBQWxEO0FBQ0Q7O0FBZk87QUFaVyxDQUF2QixDLENBK0JBOztBQUNBOUIsSUFBSSxDQUFDSyxTQUFMLENBQWVTLEtBQWYsQ0FBcUJvQixPQUFyQixHQUErQmxDLElBQUksQ0FBQ0ssU0FBTCxDQUFlUyxLQUFmLENBQXFCYyxPQUFwRDtBQUdlNUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqSEEsTUFBTUMsRUFBRSxHQUFHa0MsbUJBQU8sQ0FBQyxrREFBRCxDQUFsQjs7QUFDQSxNQUFNbkMsSUFBSSxHQUFHbUMsbUJBQU8sQ0FBQyw2QkFBRCxDQUFQLENBQWtCRCxPQUEvQjs7QUFFQWpDLEVBQUUsQ0FBQ21DLG9CQUFILENBQXdCcEMsSUFBeEI7QUFFQXFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRDLElBQWpCLEMsQ0FBdUIsa0Q7Ozs7Ozs7Ozs7O0FDTnZCLFVBQVUsbUJBQU8sQ0FBQyw2SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsNEpBQTRFOztBQUU5Rzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsa0UiLCJmaWxlIjoibG9ja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvbG9ja2VyXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9sb2NrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQHNwaXJhbC10b29sa2l0L2xvY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sb2NrZWQgLmZvcm0tY29udGVudCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgb3BhY2l0eTogLjc7XFxufVxcblxcbi5sb2NrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2NrZWQgLmZvcm0tY29udGVudCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgb3BhY2l0eTogLjc7XFxufVxcblxcbi5sb2NrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmltcG9ydCBjb3JlIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLyoqXG4gKiBTcGlyYWwgbG9jayBmb3IgZm9ybXNcbiAqIEBjb25zdHJ1Y3RvciBMb2NrXG4gKi9cblxuY29uc3QgTG9jayA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLl9jb25zdHJ1Y3Qoc2YsIG5vZGUsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBAbGVuZHMgTG9jay5wcm90b3R5cGVcbiAqL1xuTG9jay5wcm90b3R5cGUgPSBjb3JlLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSgpO1xuXG4vKipcbiAqIE5hbWUgb2YgbW9kdWxlXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Mb2NrLnByb3RvdHlwZS5uYW1lID0gJ2xvY2snO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FsbCBvbiBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAcHJpdmF0ZVxuICovXG5Mb2NrLnByb3RvdHlwZS5fY29uc3RydWN0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzZiwgbm9kZSwgb3B0aW9ucyk7XG4gIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmFkZCh0aGlzLm9wdGlvbnMudHlwZSwgdGhpcy5ub2RlKTtcbn07XG5cbi8qKlxuICogQWRkIGxvY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbdHlwZV0gdHlwZSBvZiBsb2NrIEBzZWUgc2YubG9jay50eXBlc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgY29udGV4dCB0byBhZGQgbG9ja1xuICogQHJldHVybiB7RnVuY3Rpb258Kn1cbiAqL1xuTG9jay5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHR5cGUsIGNvbnRleHQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAoIXRoaXMudHlwZXMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTGlzdC5hZGQodGhpcy50eXBlc1t0eXBlXS5jbGFzc05hbWUgfHwgJ2pzLXNmLWxvY2snKTtcbiAgbm9kZS5jbGFzc0xpc3QuYWRkKCdsb2NrZXInKTtcbiAgbm9kZS5pbm5lckhUTUwgPSB0aGlzLnR5cGVzW3R5cGVdLmh0bWw7XG4gIGNvbnRleHQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIGNvbnRleHQuY2xhc3NMaXN0LmFkZCgnbG9ja2VkJyk7XG4gIHJldHVybiB0aGlzLnR5cGVzW3R5cGVdLnByb2dyZXNzO1xufTtcbi8qKlxuICogQ2xlYXIgYWxsIHZhcmlhYmxlcyBhbmQgZGllXG4gKi9cbkxvY2sucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZW1vdmUoKTtcbn07XG4vKipcbiAqIFJlbW92ZSBsb2NrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5Mb2NrLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrZWQnKTtcbiAgY29uc3Qgc2ZMb2NrID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZi1sb2NrJyk7IC8vIFRPRE8gdGhpcy5sb2NrTm9kZSA/XG4gIGlmIChzZkxvY2spIHtcbiAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoc2ZMb2NrKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcbiAqIE9iamVjdCB3aXRoIGxvY2sgdHlwZXMuXG4gKiBAZW51bSB7T2JqZWN0fVxuICovXG5Mb2NrLnByb3RvdHlwZS50eXBlcyA9IHtcbiAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgc3Bpbm5lcjoge1xuICAgIC8qKlxuICAgICAgICAgKiBIVE1MXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgaHRtbDogJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPjwvZGl2PicsXG4gIH0sXG4gIHByb2dyZXNzOiB7XG4gICAgLyoqXG4gICAgICAgICAqIEhUTUxcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICBodG1sOiAnPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+PGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbiB0byBjaGFuZ2Ugc3R5bGVzIHdoaWxlIEFKQVggcHJvZ3Jlc3NcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGN1cnJlbnRcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsXG4gICAgICAgICAqL1xuICAgIHByb2dyZXNzKGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9ncmVzcy1iYXInKVswXTtcbiAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7MTAwICogKGN1cnJlbnQgLyB0b3RhbCl9JWA7XG4gICAgfSxcbiAgfSxcbn07XG5cbi8vIFdlIGhhdmUgdG8gaGF2ZSBzb21lIGRlZmF1bHQgbG9ja2VyLCBsZXQgaXQgYmUgc3Bpbm5lclxuTG9jay5wcm90b3R5cGUudHlwZXMuZGVmYXVsdCA9IExvY2sucHJvdG90eXBlLnR5cGVzLnNwaW5uZXI7XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9jaztcbiIsIlxuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpO1xuY29uc3QgTG9jayA9IHJlcXVpcmUoJy4vTG9jaycpLmRlZmF1bHQ7XG5cbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKExvY2spO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvY2s7IC8vIEVTNiBkZWZhdWx0IGV4cG9ydCB3aWxsIG5vdCBleHBvc2UgdXMgYXMgZ2xvYmFsXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPy11cmwmc291cmNlTWFwIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const core = __webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js");

__webpack_require__(/*! ./input */ "./src/input/index.js");

__webpack_require__(/*! @spiral-toolkit/locker */ "../locker/dist/locker.js");

__webpack_require__(/*! @spiral-toolkit/form */ "../form/dist/form.js");

__webpack_require__(/*! @spiral-toolkit/datagrid */ "../datagrid/dist/datagrid.js");

module.exports = core;

/***/ }),

/***/ "./src/input/index.js":
/*!****************************!*\
  !*** ./src/input/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const sf = __webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js");

const Input = __webpack_require__(/*! ./input */ "./src/input/input.js").default;

sf.instancesController.registerInstanceType(Input, 'sf-js-input');
module.exports = Input; // ES6 default export will not expose us as global

/***/ }),

/***/ "./src/input/input.js":
/*!****************************!*\
  !*** ./src/input/input.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js");
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-console */

/* eslint-disable max-len */

/* eslint-disable no-underscore-dangle */

/* eslint-disable func-names */


const Input = function (sf, node, options) {
  this._construct(sf, node, options);
};
/**
 * @lends sf.Form.prototype
 */


Input.prototype = Object.create(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor.prototype);
/**
 * Name to register
 * @type {string}
 */

Input.prototype.name = 'input';

Input.prototype._construct = function (sf, node, options) {
  this.init(sf, node, options); // call parent

  if (options) {
    // if we pass options extend all options by passed options
    this.options = sf.tools.extend(this.options, options);
  } // Elements


  this.els = {
    node
  };

  if (this.options.prefix) {
    this.setPrefix();
    this.addPrefixEventListeners();
  } else if (this.options.pattern) {
    this.setupPattern();
    this.addPatternEventListeners();
  }
};
/**
 * @override
 * @inheritDoc
 * @enum {string}
 */


Input.prototype.optionsToGrab = {
  /**
     *  Pattern of input
     */
  pattern: {
    domAttr: 'data-pattern'
  },

  /**
     *  Prefix of  input
     */
  prefix: {
    domAttr: 'data-prefix'
  }
};
/**
 * Setup pattern
 * @return {HTMLElement}
 */

Input.prototype.isValidPattern = function () {
  return this.els.node.value.match(this.pattern);
};

Input.prototype.addPatternEventListeners = function () {
  const that = this;

  this._inputKeyPress = function (event) {
    const char = String.fromCharCode(event.keyCode);
    const {
      value
    } = that.els.node;
    const position = that.getCursorPosition();

    if (char.length > 0) {
      event.preventDefault();
      let offset = 1;

      for (let i = position; i < value.length; i += 1) {
        if (that.formatCharacters.indexOf(value[i]) !== -1) {
          offset += 1;
        } else {
          break;
        }
      }

      const futureValue = value.substring(0, position + offset - 1) + char + value.substring(position + offset, value.length);

      if (!futureValue.match(that.patternWithEmpty)) {
        return false;
      }

      that.els.node.value = futureValue;
      that.setCursorPosition(position + offset);
      return false;
    }

    return true;
  };

  this.els.node.addEventListener('keypress', this._inputKeyPress);

  this._inputFocus = function (event) {
    event.preventDefault();
    setTimeout(() => {
      if (that.els.node.value === '') {
        // eslint-disable-next-line no-useless-escape
        that.els.node.value = that.patternString.replace(/[^\-\(\)\[\]\:\.\,\$\%\@\ \/]/g, '_');
        that.setCursorPosition(0);
      }
    }, 0);
  };

  this.els.node.addEventListener('focus', this._inputFocus);

  this._inputKeyDown = function (event) {
    const char = String.fromCharCode(event.keyCode);
    const {
      value
    } = that.els.node;
    const position = that.getCursorPosition();

    if (event.keyCode === 8 || event.keyCode === 46) {
      event.preventDefault();
      let offset = 0;

      for (let i = position - 1; i > 0; i -= 1) {
        if (that.formatCharacters.indexOf(value[i]) !== -1) {
          offset -= 1;
        } else {
          break;
        }
      }

      const futureValue = `${value.substring(0, position + offset - 1)}_${value.substring(position + offset, value.length)}`;

      if (!futureValue.match(that.patternWithEmpty)) {
        return false;
      }

      console.log(futureValue);
      that.els.node.value = futureValue;
      that.setCursorPosition(position + offset - 1);
      return false;
    }

    if (char.match(/\W/)) {
      return false;
    }

    return true;
  };

  this.els.node.addEventListener('keydown', this._inputKeyDown);

  this._inputBlur = function () {
    if (!that.els.node.value.match(that.pattern)) {
      that.els.node.value = '';
    }
  };

  this.els.node.addEventListener('blur', this._inputBlur);
};

Input.prototype.getCursorPosition = function () {
  let position = 0;

  if (document.selection) {
    this.els.node.focus();
    const selectRange = document.selection.createRange();
    selectRange.moveStart('character', -this.els.node.value.length);
    position = selectRange.text.length;
  } else if (this.els.node.selectionStart || this.els.node.selectionStart === '0') {
    position = this.els.node.selectionStart;
  }

  return position;
};

Input.prototype.setCursorPosition = function (position) {
  if (this.els.node.createTextRange) {
    const range = this.els.node.createTextRange();
    range.move('character', position);
    range.select();
  } else if (this.els.node.selectionStart) {
    this.els.node.focus();
    this.els.node.selectionStart = position;
    this.els.node.selectionEnd = position;
  } else {
    this.els.node.focus();
  }
};

Input.prototype.setupPattern = function () {
  this.formatCharacters = this.els.node.getAttribute('data-format-characters') || '-()[]:.,$%@ /';
  this.patternString = this.options.pattern;
  this.els.node.placeholder = this.patternString;

  const _initPattern = function () {
    let formattedPatternStr = '';
    let formattedPatternWithEmptyStr = '';

    for (let i = 0; i < this.patternString.length; i += 1) {
      const char = this.patternString[i];

      if (this.formatCharacters.indexOf(char) >= 0) {
        formattedPatternStr += char;
        formattedPatternWithEmptyStr += char;
      } else if (char.match(/[0-9]/)) {
        formattedPatternStr += '[0-9]';
        formattedPatternWithEmptyStr += '([0-9]|_)';
      } else if (char.match(/[a-zA-Z]/)) {
        formattedPatternStr += '[a-zA-Z]';
        formattedPatternWithEmptyStr += '([a-zA-Z]|_)';
      } else if (char === '*') {
        formattedPatternStr += '[0-9a-zA-Z]';
        formattedPatternWithEmptyStr += '([0-9a-zA-Z]|_)';
      }
    }

    this.pattern = new RegExp(`^${formattedPatternStr}$`, 'g');
    this.patternWithEmpty = new RegExp(`^${formattedPatternWithEmptyStr}$`, 'g');
  }.bind(this);

  _initPattern();
};
/**
 * Adds static events listeners.
 */


Input.prototype.addPrefixEventListeners = function () {
  const that = this;

  this._inputKeyup = function () {
    const oldValue = this.getAttribute('data-prefix');

    if (that.els.node.value.indexOf(oldValue) !== 0) {
      that.els.node.value = `${oldValue} `;
    }
  };

  if (this.els.node) {
    this.els.node.addEventListener('keyup', this._inputKeyup);
  }
};

Input.prototype.removePatternEventListeners = function () {
  if (this.els.node) {
    this.els.node.addEventListener('keypress', this._inputKeyPress);
    this.els.node.addEventListener('focus', this._inputFocus);
    this.els.node.addEventListener('keydown', this._inputKeyDown);
    this.els.node.addEventListener('blur', this._inputBlur);
  }
};

Input.prototype.removePrefixEventListeners = function () {
  if (this.els.node) {
    this.els.node.removeEventListener('keyup', this._inputKeyup);
  }
};

Input.prototype.die = function () {
  if (this.options.pattern) {
    this.removePatternEventListeners();
  } else if (this.options.prefix) {
    this.removePrefixEventListeners();
  }

  delete this;
};

Input.prototype.setPrefix = function () {
  this.els.node.value = `${this.options.prefix} ${this.els.node.value}`;
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL2Fzc2VydC9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3NwbGl0LW9uLWZpcnN0L2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9EYXRhZ3JpZC50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvRGF0YWdyaWRTdGF0ZS50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvUGFnaW5hdG9yLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvR3JpZFJlbmRlcmVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEJvZHlXcmFwcGVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEZvb3RlcldyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEhlYWRlcldyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0Um93UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0Um93V3JhcHBlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL2RlZmF1bHRUYWJsZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9wcmVtYWRlL3NpbXBsZUNlbGxGb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrOi9TRkRhdGFHcmlkL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbnB1dC5qcyJdLCJuYW1lcyI6WyJjb3JlIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZiIsIklucHV0IiwiZGVmYXVsdCIsImluc3RhbmNlc0NvbnRyb2xsZXIiLCJyZWdpc3Rlckluc3RhbmNlVHlwZSIsIm5vZGUiLCJvcHRpb25zIiwiX2NvbnN0cnVjdCIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsIkJhc2VET01Db25zdHJ1Y3RvciIsIm5hbWUiLCJpbml0IiwidG9vbHMiLCJleHRlbmQiLCJlbHMiLCJwcmVmaXgiLCJzZXRQcmVmaXgiLCJhZGRQcmVmaXhFdmVudExpc3RlbmVycyIsInBhdHRlcm4iLCJzZXR1cFBhdHRlcm4iLCJhZGRQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMiLCJvcHRpb25zVG9HcmFiIiwiZG9tQXR0ciIsImlzVmFsaWRQYXR0ZXJuIiwidmFsdWUiLCJtYXRjaCIsInRoYXQiLCJfaW5wdXRLZXlQcmVzcyIsImV2ZW50IiwiY2hhciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImtleUNvZGUiLCJwb3NpdGlvbiIsImdldEN1cnNvclBvc2l0aW9uIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJpIiwiZm9ybWF0Q2hhcmFjdGVycyIsImluZGV4T2YiLCJmdXR1cmVWYWx1ZSIsInN1YnN0cmluZyIsInBhdHRlcm5XaXRoRW1wdHkiLCJzZXRDdXJzb3JQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaW5wdXRGb2N1cyIsInNldFRpbWVvdXQiLCJwYXR0ZXJuU3RyaW5nIiwicmVwbGFjZSIsIl9pbnB1dEtleURvd24iLCJjb25zb2xlIiwibG9nIiwiX2lucHV0Qmx1ciIsImRvY3VtZW50Iiwic2VsZWN0aW9uIiwiZm9jdXMiLCJzZWxlY3RSYW5nZSIsImNyZWF0ZVJhbmdlIiwibW92ZVN0YXJ0IiwidGV4dCIsInNlbGVjdGlvblN0YXJ0IiwiY3JlYXRlVGV4dFJhbmdlIiwicmFuZ2UiLCJtb3ZlIiwic2VsZWN0Iiwic2VsZWN0aW9uRW5kIiwiZ2V0QXR0cmlidXRlIiwicGxhY2Vob2xkZXIiLCJfaW5pdFBhdHRlcm4iLCJmb3JtYXR0ZWRQYXR0ZXJuU3RyIiwiZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciIsIlJlZ0V4cCIsImJpbmQiLCJfaW5wdXRLZXl1cCIsIm9sZFZhbHVlIiwicmVtb3ZlUGF0dGVybkV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlUHJlZml4RXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGllIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLFlBQ0Esa0dBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztB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QUNBLGtDQURBLElBRUEsdUNBSEEsRUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUNBLFNBREEsRUFFQSwwRkFGQTtBQUlBLGVBbkJBOztBQXFCQTtBQUNBO0FBQ0Esb0JBQ0EsdUJBQ0Esa0NBREEsSUFFQSx1Q0FIQSxFQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQWRBOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFWQTs7QUFZQTtBQUNBO0FBQ0Esb0JBQ0EsdUJBQ0Esa0NBREEsSUFFQSx1Q0FIQSxFQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQWRBO0FBdkRBO0FBdUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQWZBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBZkE7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFQQTtBQTlDQTtBQXVEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUNBLElBREEsQ0FDQSwrQkFEQSxFQUVBLEdBRkEsQ0FFQSxpQkFGQTtBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNFLFdBRkYsTUFFRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSxzQkFGQTtBQUdBLCtCQUhBO0FBSUEscUNBSkE7QUFLQSwrQkFMQTtBQU1BO0FBTkEsYUFPRSxPQVBGO0FBU0E7QUFFQSwwREFaQSxDQWNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxR0FEQSxDQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxhQUpILE1BSUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0csYUFISCxNQUdHO0FBQ0g7QUFDQTs7QUFFQTtBQUNFLFdBVkYsRUFVRSxtQkFWRjtBQVdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBLHdCQUZBO0FBR0EsK0JBSEE7QUFJQTtBQUpBLGFBS0UsT0FMRjtBQU9BOztBQUVBLHNDQUNBLHNEQUNBLDZDQUZBOztBQUtBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQ0EsTUFEQSxDQUNBLGNBREEsRUFDQSxFQURBLEVBRUEsSUFGQSxDQUVBLEdBRkE7QUFHQTs7QUFFQTtBQUNFLFdBbEJGLEVBa0JFLE1BbEJGLENBa0JFLGlCQWxCRixFQWtCRSxJQWxCRixDQWtCRSxHQWxCRjtBQW1CQSxTQXREQTs7QUF3REE7QUFDQTtBQUNBLHNEQURBO0FBRUE7QUFGQTtBQUlBLFNBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSw4QkFBb0IsV0FBWSxFQUFoQztBQUNBOztBQUVBLG9CQUFXLEdBQUksR0FBRSxXQUFZLEdBQUUsSUFBSyxFQUFwQztBQUNBLFNBWkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQ0EsK0JBREEsRUFFQSwrQ0FGQTtBQUlBLFNBbkJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLHFGQUE2RSwwQ0FBMkMsRUFBeEg7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsaUNBRkE7QUFHQSw4QkFIQTtBQUlBO0FBSkE7QUFEQTtBQVFBLFdBVkE7QUFXQyxTQWJELE1BYUM7QUFDRDtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FOQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQSxtREFDQSw4QkFEQSxJQUVBLDhCQUZBLElBR0EsbUNBSEE7U0FEQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSw4RUFDQTtBQUNBO0FBQ0E7O0FBQ0EsNEJBQW1CLGVBQW5CLEVBQW9DLEdBQXBDLEVBQW9DO0FBQ3BDO0FBQ0E7O0FBQ0E7QUFDQSxXQVJBOztBQVVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQSw4QkFBbUIsb0JBQW5CLEVBQXlDLEdBQXpDLEVBQXlDO0FBQ3pDO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ1MsbUJBRlQsQ0FFUztBQUNUO0FBQ0E7O0FBQ0E7QUFDQTtBQVZBO0FBWUcsYUFmSDs7QUFnQkEsa0NBQXVCLE9BQXZCLEVBQWdDLGFBQWhDLEVBQWdDO0FBQ2hDO0FBQ0E7QUFDSyxlQUZMLE1BRUs7QUFDTDtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxXQXBDQSxDQWhDQSxDQXVFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsQ0FLQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFGQTtBQUdBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBRlAsTUFFTztBQUNQO0FBQ08saUJBRkEsTUFFQTtBQUNQO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0E1QkE7O0FBK0JBO0FBQ0E7O0FBQ0E7QUFDQSwyQ0FDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFIQTtBQUlLLGVBTkwsTUFNSztBQUNMO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFdBaEJBO0FBbUJBOzs7Ozs7OztBQU9BOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBRkEsY0FGQSxDQU1BOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0csYUFISCxNQUdHO0FBQ0g7QUFDQTtBQUNBLGFBZkEsQ0FnQkE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLG9DQTlKQSxDQWlLQTs7QUFDQTtBQUNBLDJCQURBO0FBRUEsNkJBRkE7QUFHQSxnQ0FIQTtBQUlBLDhCQUpBO0FBS0EsNkJBTEE7QUFNQSw0QkFOQTtBQU9BLDZCQVBBO0FBUUEsNEJBUkE7QUFTQSw0QkFUQTtBQVVBLDZCQVZBO0FBV0EsK0JBWEE7QUFZQSwyQkFaQTtBQWFBO0FBYkEsWUFsS0EsQ0FrTEE7O0FBQ0E7QUFDQSw2QkFEQTtBQUVBLDhCQUZBO0FBR0EsK0JBSEE7QUFJQSwrQkFKQTtBQUtBLDBCQUxBO0FBTUEsNkJBTkE7QUFPQSw2QkFQQTtBQVFBO0FBQ0E7QUFUQTs7QUFhQTtBQUNBOztBQUVBO0FBQ0Esd0VBQ0EsU0FEQSxHQUNBLHdCQURBLEdBQ0EsR0FEQTtBQUVHLGFBSEgsTUFHRztBQUNIO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDRyxhQUZIO0FBSUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxQ0FDQSxLQURBLElBRUEseUJBRkEsSUFHQTtBQUNBLDZDQUpBLElBS0E7QUFDQSx5RUFOQSxFQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsYUFmQSxDQWlCQTs7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLGFBckJBLENBdUJBOzs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQTdCQSxDQStCQTtBQUNBOzs7QUFDQSxtQ0FDQSxnRUFEQSxHQUNBO0FBQ0E7QUFDQSxhQXBDQSxDQXNDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQSwrQkFBNEMsR0FBNUMsRUF2REEsQ0F5REE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUE3REEsQ0ErREE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBbkVBLENBcUVBOzs7QUFDQTtBQUNBO0FBQ0EsYUF4RUEsQ0EwRUE7OztBQUNBO0FBQ0E7QUFDQSxhQTdFQSxDQStFQTs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDSyxlQUZMLE1BRUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0csYUFGSCxNQUVHO0FBQ0g7QUFDQTtBQUNLLGVBRkw7QUFHQTs7QUFFQTtBQUVBO0FBQ0E7O0FBR0E7QUFDQSxvQ0FDQTs7QUFDQTtBQUNBLDhFQUNBLE9BREEsQ0FDQSxJQURBLEVBQ0EsS0FEQSxFQUVBLE9BRkEsQ0FFQSxNQUZBLEVBRUEsR0FGQSxJQUVBLElBRkE7QUFHQTtBQUNBOztBQUNBLGlDQUNBO0FBQ0Esa0NBQ0EsMENBWkEsQ0FhQTs7QUFDQSwrQkFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUNBLDhDQUFtQyxLQUFuQyxFQUEwQyxHQUExQyxFQUEwQztBQUMxQztBQUNBLGtGQUNBLFNBREEsRUFDQSxJQURBO0FBRUssZUFITCxNQUdLO0FBQ0w7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxrRkFDQSxHQURBLEVBQ0EsSUFEQTtBQUVBO0FBQ0csYUFMSDtBQU1BO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQXlEO0FBQXpEOztBQUNBO0FBQ0E7QUFDQTtBQUNLLGVBRkwsTUFFSztBQUNMO0FBQ0E7QUFDRyxhQU5ILE1BTUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxpQkFGUCxNQUVPO0FBQ1A7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNXLHFCQUZYLEVBRVcsSUFGWCxDQUVXLElBRlgsRUFFVyxNQUZYLENBRVcsQ0FGWDtBQUdTLG1CQUpULE1BSVM7QUFDVDtBQUNBO0FBQ1cscUJBRlgsRUFFVyxJQUZYLENBRVcsSUFGWDtBQUdBO0FBQ0E7QUFDSyxlQWpCTCxNQWlCSztBQUNMO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDSyxlQUhMLE1BR0s7QUFDTCxpREFDQSxPQURBLENBQ0EsTUFEQSxFQUNBLEdBREEsRUFFQSxPQUZBLENBRUEsVUFGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxhQUpILEVBSUcsQ0FKSDs7QUFNQTtBQUNBLGtDQUNBLCtCQURBLElBRUEsR0FGQSxHQUdBLG9CQUhBLEdBSUEsR0FKQSxHQUtBLFNBTEE7QUFNQTs7QUFFQTtBQUNBLFdBdGNBLENBeWNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQSxtQ0FDQSw0REFEQTtBQUVBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLG1DQUNBLHdCQURBLElBRUEsdUJBRkEsSUFHQSx1QkFIQSxJQUlBLHVCQUpBLElBSUE7QUFDQSxzQ0FMQTtBQU1BOztBQUNBO0FBRUEsNkJBQW1CLG1CQUFPO0FBQUM7QUFBQSw4REFBRCxDQUExQjs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUdBLHVGQUNBLEtBREEsRUFDQSxLQURBLEVBQ0EsS0FEQSxFQW5pQkEsQ0FzaUJBOztBQUNBO0FBQ0E7QUFDQSwyQ0FDQSxtQkFEQSxFQUVBLG1CQUZBLEVBRUEsSUFGQSxDQUVBLEdBRkE7QUFHQTtBQUNBLFdBN2lCQSxDQWdqQkE7OztBQUNBO0FBQ0E7QUFDQSxXQUZBO0FBS0E7Ozs7Ozs7Ozs7Ozs7OztBQWFBLDZCQUFtQixtQkFBTztBQUFDO0FBQUEsNkVBQUQsQ0FBMUI7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxXQVZBOztBQVlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdEQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EseUJBREE7QUFDQSxpQ0FEQTtBQUNBLCtCQURBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNLLGVBSEw7QUFLQTs7QUFDQSw4QkFBbUIsb0JBQW5CLEVBQXlDLEdBQXpDLEVBQXlDO0FBQ3pDO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBRlAsTUFFTztBQUNQO0FBQ0E7QUFDSyxlQU5MOztBQVFBO0FBQ0E7QUFDSyxlQUZMLENBRUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBLHVCQURBO0FBQ0EsK0JBREE7QUFDQSw2QkFEQTtBQUNBO0FBREE7QUFHQSwyQ0FDQSxFQURBLEVBRUEsbUNBRkE7QUFJQSxXQXBEQTs7QUFzREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLENBS0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOztBQUNBLDhCQUFtQixvQkFBbkIsRUFBeUMsR0FBekMsRUFBeUM7QUFDekM7QUFDQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLGVBRkEsQ0FYQSxDQWNBO0FBQ0E7OztBQUNBLHlDQUNBLElBREEsQ0FDQTtBQUEyQjtBQUFrQyxlQUQ3RCxFQUVBO0FBQTJCO0FBQW1ELGVBRjlFO0FBR0E7O0FBRUE7QUFDQSxtREFDQSxtQ0FEQTtBQUVBO0FBQ0E7O0FBQ0E7O1NBOXJCQSxFLElBQUEsQyxJQUFBLEU7O2dEQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FBLGMsQ0FFQTs7QUFDQTtBQUNBO0FBQ0MsU0FGRDs7QUFJQTtBQUNBO0FBQ0E7QUFDQyxTQUhELENBR0M7QUFDRDtBQUNBO0FBQ0EsUyxDQUVBO0FBQ0E7QUFDQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBOztBQUFBLHdCQUFpQixTQUFJLElBQUksU0FBSSxVQUE3QixJQUE2QjtBQUM3QjtBQUEyQjtBQUErRDtBQUFrQixhQUFqRjtBQUFtRjs7QUFDOUc7QUFDQTtBQUFtQztBQUFNO0FBQStCLGVBQXJDLENBQXFDO0FBQVk7QUFBYTtBQUFBOztBQUNqRztBQUFrQztBQUFNO0FBQW1DLGVBQXpDLENBQXlDO0FBQVk7QUFBYTtBQUFBOztBQUNwRztBQUErQjtBQUFxRjs7QUFDcEg7QUFDSyxXQUxMO0FBTUEsU0FSQSxDLENBa0JBOzs7QUFDTywrQkFBdUIsNERBQUUsSUFBRixDQUFFLGtCQUF6QixDQUF5QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQURBO0FBRUE7QUFGQSxlQURBO0FBS0E7QUFDQSxrREFEQTtBQUVBO0FBRkE7QUFMQTtBQVVBLDZDQUF1Qyx1QkFBdkM7QUFDQTtBQUNBLDZCQUF5Qiw0REFBekIsQ0FBc0MsSUFBdEM7QUFDQSxvQ0FmQSxDQWVnQzs7QUFDaEMseUNBaEJBLENBZ0JxQzs7QUFDckM7QUFDQSxxQkFEQTtBQUVBLHFCQUFtQjtBQUZuQjtBQUlBO0FBQ0EsMkRBQXFELHVCQUFyRCxHQUFxRCxZQUFyRDtBQUNBOztBQUNBO0FBQ0E7QUFDQSw4REFBbUQsb0NBQW5ELEdBQW1ELEVBQW5ELEVBREEsQ0FFQTs7QUFDQTtBQUNBLCtEQUE2RCxZQUE3RCxHQUE2RCxTQUE3RDtBQUNBLGVBTEEsQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNRLDREQUFlLGVBQWYsRUFBZSxFQUFmLEVBQWUsd0JBQWY7QUFDQSw0REFBZSxnQkFBZixFQUFlLEVBQWYsRUFBZSx5QkFBZixFQXJDUixDQXNDQTtBQUNBO0FBQ0E7O0FBQ0EsOEJBQTBCLGdFQUFnQixvQkFBaEIsRUFBZ0IscUJBQWhCLENBQTFCLENBekNBLENBMENBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx5REFBYSxHQUFyRDtBQUNBLGVBSEEsTUFJQTtBQUNBO0FBQ0EsdUVBQXVFLHlEQUFhLEdBQXBGO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBO0FBRkE7QUFJQSx1TEFBc0wsR0FBdEwsR0FBc0w7QUFBUztBQUFULGVBQXRMLEdBQWdPLEVBQWhPLElBQXNPLFNBQXRPOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrSEFIQSxDQUcrSDs7QUFDL0gsK0JBSkEsQ0FJK0I7O0FBQy9CO0FBQ0EsZUFOQTtBQU9BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSwrQkFGQSxDQUUrQjs7QUFDL0I7QUFDQSxlQUpBO0FBS0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNTLGFBRlQ7QUFHQSxvREFBZ0QsbURBQVMsbUJBQXpELEtBQXlELEVBQXpEO0FBQ0E7QUFDQTtBQUNTLGFBRlQ7QUFHQTtBQUFpRSxzQkFBakU7QUFBaUU7QUFBakUsa0JBQWtGO0FBQ2xGO0FBQ0E7QUFDQTs7QUFDQSwyQkFBeUIsbURBQVMsbUJBQWxDLEVBQWtDO0FBQ2xDO0FBQ0E7QUFDUyxhQVBUO0FBUUE7QUFDQTs7Ozs7O0FBSUE7QUFDQTtBQUNBLHlDQUF1Qyx5REFBYSxHQUFwRCxFQUFvRDtBQUNwRCw0Q0FBNEMseURBQWEsSUFBekQ7QUFDQSxlQUZBLE1BR0E7QUFDQSw0Q0FBNEMseURBQWEsR0FBekQ7QUFDQTtBQUNBLGFBUEEsTUFRQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxlQUZBLE1BR0E7QUFDQSxtRUFBbUUsT0FBUSxFQUEzRTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFvQztBQUFwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1MsYUFKVDtBQUtBOztBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDRDQUZBO0FBR0EsMkNBSEE7QUFJQTtBQUF1QztBQUF2QyxrQkFBaUY7QUFKakY7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ1MsYUFMVDtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ1MsYUFKVDtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBNkQ7QUFBN0Q7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDUyxhQUxUO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDUyxhQUpUO0FBS0E7O0FBQ0E7QUFBbUI7QUFBbkIsYUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1MsYUFKVDtBQUtBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDUyxhQUxUO0FBTUE7O0FBQ0E7QUFBaUIsZ0JBQWpCO0FBQWlCLGtCQUFqQjtBQUFpQjtBQUFqQixhQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFpQyxzQkFBakM7QUFBaUMsd0JBQWpDO0FBQWlDO0FBQWpDLG1CQUE0RCxLQUE1RCxFQURBLENBQ3FFO0FBQ3JFO0FBQ1MsYUFMVDtBQU1BO0FBQ0E7QUFDQTtBQUFpQyxzQkFBakM7QUFBaUMsd0JBQWpDO0FBQWlDO0FBQWpDLG1CQURBLENBQzhEO0FBQzlEO0FBQ1MsYUFKVDtBQUtBLDBCQWI0QyxDQWM1QztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsMkNBRkE7QUFHQSw2Q0FIQTtBQUlBO0FBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsZUFIQSxDQUlBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBLE1BR0E7QUFDQTtBQUNBO0FBQ0EseUNBREE7QUFFQTtBQUZBLHFCQURBO0FBS0EsZ0NBTEE7QUFNQTtBQU5BO0FBUUE7QUFDQSxlQWxCQSxTQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNTLGFBdkNUO0FBd0NBOztBQUNBO0FBQ1EsNkRBQWdCLFVBQWhCLEVBQWdCLEVBQWhCLEVBQWdCLCtCQUFoQjtBQUNSO0FBQ0E7QUFDQSxrQ0FBZ0MsaUVBQWhDLENBQTRDLGdDQUErQixZQUEvQixHQUErQjtBQUFrQiwwSEFBbEI7QUFBa0I7QUFBbEIsZUFBL0IsQ0FBNUMsRUFBK1QsSUFBL1Q7QUFDUyxhQUZUO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ1MsYUFGVDtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQWlELHVDQUFqRDtBQUFpRDtBQUFqRCxnQkFBMEcsRUFBMUc7QUFDQSxpRUFBMkQsTUFBM0QsR0FBMkQsVUFBM0QsR0FBMkQsV0FBM0Q7QUFDQTs7QUFDQTtBQUNBO0FBQWUsa0JBQWY7QUFBZSxtQkFBZjtBQUFlLGlCQUFmO0FBQWU7QUFBZixnQkFBdUMsTUFBdkM7QUFDQTtBQUFvQyx5QkFBcEM7QUFBb0MsMkJBQXBDO0FBQW9DLGlCQUFwQztBQUFvQztBQUFwQyxlQUZBLENBRTZFOztBQUM3RTtBQUFlLG9CQUFmO0FBQWU7QUFBZixnQkFBaUMsTUFBakM7O0FBQ0E7QUFDQSxvREFBa0QseURBQWEsR0FBL0QsRUFEQSxDQUNxRTtBQUNyRTs7QUFDQSxnQkFBWSxxREFBWixFQUFzQixHQUFLLHFEQUEzQixFQUFxQyxPQUFyQyxDQUFxQyxxQkFBckM7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSx3QkFBb0IsMkRBQUssc0JBQUwsRUFBSztBQUEwQixnQ0FBMUI7QUFBMEI7QUFBMUIsYUFBTCxDQUFwQjtBQUNBO0FBQ0E7QUFDQSx1REFBcUQsR0FBckQsR0FBcUQ7QUFBUztBQUFULGlCQUFyRDtBQUNBOztBQUNBO0FBQ1MsYUFMVCxFQUtTLEVBTFQ7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHVEQUFxRCxHQUFyRCxHQUFxRDtBQUFTLHNCQUFLLE1BQU8sR0FBRSxFQUFHLEVBQWpCLEdBQWlCO0FBQTFCLGlCQUFyRDtBQUNBOztBQUNBO0FBQ1MsYUFMVCxFQUtTLEVBTFQ7QUFNQSxrQ0FBNEIsY0FBNUIsRUFBOEMsa0VBQVk7QUFBRSxvR0FBRjtBQUFFO0FBQUYsYUFBWixDQUE5QyxFQVhBLENBVytKO0FBQy9KOztBQTdVZ0M7O0FBK1VoQztBQUNBO0FBQ0EsZ0JBREE7QUFFQSw2QkFGQTtBQUdBLDZCQUhBO0FBSUEsMEJBSkE7QUFLQSxxQkFMQTtBQU1BLHFCQU5BO0FBT0Esa0JBQVkseURBQWEsSUFQekI7QUFRQSxzQkFSQTtBQVNBLGlCQVRBO0FBVUEseUJBVkE7QUFXQTtBQUNBLDhCQURBO0FBRUEsNkJBRkE7QUFHQSw0QkFIQTtBQUlBLDZCQUpBO0FBS0Esa0RBTEE7QUFNQTtBQU5BLFdBWEE7QUFtQkEscUJBQWU7QUFuQmY7QUFxQmU7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WGY7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7O0FBQ087O0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBQ0EsdUJBREE7QUFFQTtBQUZBLGVBRkE7QUFNQSx1QkFBcUIseURBQWEsR0FObEM7QUFPQSxzQkFQQTtBQVFBO0FBUkE7QUFVQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxtRUFBNkQsb0JBQTdELEdBQTZELE1BQTdEO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsdUNBQStCLGlCQUEvQixFQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EscURBQWlELElBQWpELEdBQWlELHdCQUFqRDtBQUNTLGFBRlQsRUFFUyxFQUZUO0FBR0EsbURBQTZDLGtCQUE3QyxHQUE2QyxLQUE3QztBQUNBOztBQTlFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUEsa0MsQ0FDQTtBQUVBOzs7QUFDTzs7QUFDUDtBQUNBO0FBQ0E7QUFDQyxTQUhELEVBR0MscUNBSEQ7O0FBSU8sZ0NBQXdCLDREQUFFLElBQUYsQ0FBRSxrQkFBMUIsQ0FBMEI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFEQTtBQUVBO0FBRkEsZUFEQTtBQUtBO0FBQ0Esb0RBREE7QUFFQTtBQUZBLGVBTEE7QUFTQTtBQUNBLDBEQURBO0FBRUE7QUFGQSxlQVRBO0FBYUE7QUFDQSw4REFEQTtBQUVBO0FBRkE7QUFiQTtBQWtCQSw2Q0FBdUMsd0JBQXZDO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHFCQUFtQjtBQUZuQjtBQUlBO0FBQ0EsMkRBQXFELHdCQUFyRCxHQUFxRCxZQUFyRDtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBNkQ7QUFBN0Q7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLHlEQUFtRCxVQUFuRCxHQUFtRCxNQUFuRDtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSx5QkFBeUIsQ0FBRSxFQUYzQjtBQUdBO0FBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUEsK0JBRkE7QUFHQTtBQUhBLHFCQUZBLENBT0E7O0FBQ0Esc0NBUkEsQ0FTQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUEsK0JBRkE7QUFHQTtBQUhBLHFCQUZBLENBT0E7O0FBQ0Esa0NBUkEsQ0FTQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDUyxhQXJDVCxRQXFDUyxlQXJDVDs7QUFzQ0E7QUFDQSxtQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQTtBQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0Q0FBNkMsT0FBTSxrQ0FBbUMsT0FBTSxnQkFBaUIsVUFBL0o7QUFDQSxlQUZBLE1BR0E7QUFDQSxrREFBa0QsNENBQTZDLE9BQU0sa0NBQW1DLFVBQXhJO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7Ozs7eUJBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBSSxFQUF0QztBQUNBLHNDQUFzQyxHQUFJLEVBQTFDOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNhLGVBUmI7QUFTQSxnQ0FBOEIsZ0JBQWlCLEVBQS9DO0FBQ0E7QUFDQTtBQUNhLGVBRmI7QUFHQSxhQXBCQSxNQXFCQSxDQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsK0VBQWlGLE1BQU8sTUFBeEY7QUFDQSxpQkFIQSxNQUlBO0FBQ0Esc0VBQXdFLE1BQU8sTUFBL0U7QUFDQTs7QUFDQTtBQUNhLGVBWGI7QUFZQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFJQTtBQUNBLHFDQURBLENBQ21DO0FBQ25DOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwTmlDOztBQXNOakM7QUFDQTtBQUNBLGdCQURBO0FBRUEsMEJBRkE7QUFHQSwwQkFIQTtBQUlBLDhCQUpBO0FBS0EsbUNBTEE7QUFNQSw0REFOQTtBQU9BO0FBUEE7QUFTZTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pPZjtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFBTzs7QUFDUDtBQUNBO0FBQ0E7QUFDQyxTQUhELEVBR0MscUNBSEQ7O0FBSU87O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsU0FORCxFQU1DLHFDQU5EOztBQU9PO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJQO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7O0FBSU87QUFDSDtBQURHO0FBR1AseUMsQ0FBaUM7O0FBQ2pDLG9FQUFFLG9CQUFGLENBQXdCLGlEQUF4QixFQUFnQyxnQkFBaEM7O0FBQ0Esb0VBQUUsb0JBQUYsQ0FBd0Isa0RBQXhCLEVBQWlDLDBCQUFqQztBQUNlOzs7QUFBQSwyRixDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z4QjtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFRTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDhCQUEwQixnRUFBZ0Isb0JBQWhCLEVBQWdCLHFCQUFoQixDQUExQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBMkQsd0VBQTNEO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSw0QkFGQTtBQUdBLG1CQUhBO0FBSUE7QUFDQSxnQ0FMQTtBQU1BLDBCQU5BO0FBT0E7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQSxlQUZBLE1BR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ2dCLGdGQUFnQixFQUFoQixFQUFnQixtQ0FBaEI7QUFDaEIsZUFGQSxNQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUN3QixvRkFBZ0IsRUFBaEIsRUFBZ0Isa0JBQWhCO0FBQ3hCLG1CQUZBLE1BR0E7QUFDd0Isb0ZBQWdCLEVBQWhCLEVBQWdCLFFBQWhCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsNEJBRkE7QUFHQSxzQkFIQTtBQUlBLGdDQUpBO0FBS0EsMEJBTEE7QUFNQTtBQU5BOztBQVFBO0FBQ0E7QUFDQTtBQUNBLGVBRkEsTUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDZ0IsZ0ZBQWdCLEVBQWhCLEVBQWdCLHlDQUFoQjtBQUNoQixlQUZBLE1BR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ3dCLG9GQUFnQixFQUFoQixFQUFnQixrQkFBaEI7QUFDeEIsbUJBRkEsTUFHQTtBQUN3QixvRkFBZ0IsRUFBaEIsRUFBZ0IsUUFBaEI7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsaUVBQTZELDBFQUE3RDs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLEtBQTdFLEtBQXlGLG9GQUF6RjtBQUNBO0FBQ0E7QUFDQTtBQUNpQixpQkFMakI7QUFNQTtBQUNBLGFBakJBLENBa0JBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsNkRBQXlELHNFQUF6RDtBQUNBOztBQUNBO0FBQ0E7QUFDQSxxREFBbUQsb0VBQW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLEtBQXJFLEtBQWlGLDBFQUFqRjtBQUNBO0FBQ0E7QUFDQTtBQUNpQixpQkFMakI7QUFNYSxlQVJiO0FBU0EsYUFwQ0EsQ0FxQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxpRUFBNkQsMEVBQTdEO0FBQ0E7O0FBQ0E7QUFDQSxzREFEQSxDQUVBO0FBQ0E7QUFDQTs7QUFySk87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7QUFBQTs7O0FBQUE7QUFBQTtBQUFBOztBQUFPO0FBQ1A7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FSQSxNQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFNBdEJPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFBTztBQUNQO0FBQ0EsU0FGTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBOztBQUNPO0FBQ1A7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNTLGFBRlQ7QUFHQTs7QUFDQTtBQUNBLGtDQUE4Qix5REFBYSxHQUEzQyxFQUEyQztBQUMzQztBQUNBLGFBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSx3Q0FBa0MsaUJBQWtCLEtBQUksWUFBYSxRQUFyRTtBQUNBO0FBQ0EsU0FuQk87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFBQTs7O0FBQUE7QUFBQTtBQUFBOztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTk87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTs7O0FBQUE7QUFBQTtBQUFBOztBQUFPO0FBQ1AscUJBRE87QUFFUCxzQkFGTzs7QUFHUDs7O0FBR0E7QUFDQSxnREFEQTtBQUVBLGlEQUZBO0FBR0EsNkJBSEE7QUFJQSw0QkFKQTtBQUtBO0FBQ0E7QUFDUyxhQVBUO0FBUUE7QUFDQTtBQUNBO0FBVkE7QUFOTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBSk87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTs7O0FBQUE7QUFBQTtBQUFBOztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FKTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTs7O0FBQUE7QUFBQTtBQUFBOztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBOztBQUtBO0FBQ0EsU0FQTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUFBOzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUFBO0FBQUE7QUFBQTs7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUFvQix3QkFBcEI7QUFBb0I7QUFBcEI7QUFDQTs7QUFDQTtBQUNLLFdBTEw7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFzQix5REFBYSxHQUFuQztBQUNBLGFBSkEsTUFLQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBbUMseURBQWEsR0FBaEQ7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBO0FBR0EsOEJBSEE7QUFJQTtBQUpBO0FBTUE7O0FBQ0E7QUFDQSxnQkFEQTtBQUVBLG1CQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUpBO0FBTUssV0EvQkw7QUFnQ0EsU0F2Q087O0FBd0NBO0FBQ1A7QUFDQTtBQUNLLFdBRkw7QUFHQSxTQUpPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNQOzs7Ozs7QTdCVUE7Q0FWQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QjtBQUNqQixTQUFLVyxHQUFMLENBQVNYLElBQVQsQ0FBYzJFLG1CQUFkLENBQWtDLE9BQWxDLEVBQTJDLEtBQUtKLFdBQWhEO0FBQ0Q7QUFDRixDQUpEOztBQU1BM0UsS0FBSyxDQUFDTyxTQUFOLENBQWdCeUUsR0FBaEIsR0FBc0IsWUFBWTtBQUNoQyxNQUFJLEtBQUszRSxPQUFMLENBQWFjLE9BQWpCLEVBQTBCO0FBQ3hCLFNBQUswRCwyQkFBTDtBQUNELEdBRkQsTUFFTyxJQUFJLEtBQUt4RSxPQUFMLENBQWFXLE1BQWpCLEVBQXlCO0FBQzlCLFNBQUs4RCwwQkFBTDtBQUNEOztBQUNELFNBQU8sSUFBUDtBQUNELENBUEQ7O0FBU0E5RSxLQUFLLENBQUNPLFNBQU4sQ0FBZ0JVLFNBQWhCLEdBQTRCLFlBQVk7QUFDdEMsT0FBS0YsR0FBTCxDQUFTWCxJQUFULENBQWNxQixLQUFkLEdBQXVCLEdBQUUsS0FBS3BCLE9BQUwsQ0FBYVcsTUFBTyxJQUFHLEtBQUtELEdBQUwsQ0FBU1gsSUFBVCxDQUFjcUIsS0FBTSxFQUFwRTtBQUNELENBRkQiLCJmaWxlIjoidG9vbGtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHNwaXJhbC10b29sa2l0L3Rvb2xraXRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHNwaXJhbC10b29sa2l0L3Rvb2xraXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU0ZUb29sa2l0XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvZGF0YWdyaWRcIiwgW1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHNwaXJhbC10b29sa2l0L2RhdGFncmlkXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNGRGF0YUdyaWRcIl0gPSBmYWN0b3J5KHJvb3RbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9rZW4gPSAnJVthLWYwLTldezJ9JztcbnZhciBzaW5nbGVNYXRjaGVyID0gbmV3IFJlZ0V4cCh0b2tlbiwgJ2dpJyk7XG52YXIgbXVsdGlNYXRjaGVyID0gbmV3IFJlZ0V4cCgnKCcgKyB0b2tlbiArICcpKycsICdnaScpO1xuXG5mdW5jdGlvbiBkZWNvZGVDb21wb25lbnRzKGNvbXBvbmVudHMsIHNwbGl0KSB7XG5cdHRyeSB7XG5cdFx0Ly8gVHJ5IHRvIGRlY29kZSB0aGUgZW50aXJlIHN0cmluZyBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29tcG9uZW50cy5qb2luKCcnKSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIERvIG5vdGhpbmdcblx0fVxuXG5cdGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBjb21wb25lbnRzO1xuXHR9XG5cblx0c3BsaXQgPSBzcGxpdCB8fCAxO1xuXG5cdC8vIFNwbGl0IHRoZSBhcnJheSBpbiAyIHBhcnRzXG5cdHZhciBsZWZ0ID0gY29tcG9uZW50cy5zbGljZSgwLCBzcGxpdCk7XG5cdHZhciByaWdodCA9IGNvbXBvbmVudHMuc2xpY2Uoc3BsaXQpO1xuXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmNhbGwoW10sIGRlY29kZUNvbXBvbmVudHMobGVmdCksIGRlY29kZUNvbXBvbmVudHMocmlnaHQpKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHZhciB0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbnB1dCA9IGRlY29kZUNvbXBvbmVudHModG9rZW5zLCBpKS5qb2luKCcnKTtcblxuXHRcdFx0dG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChpbnB1dCkge1xuXHQvLyBLZWVwIHRyYWNrIG9mIGFsbCB0aGUgcmVwbGFjZW1lbnRzIGFuZCBwcmVmaWxsIHRoZSBtYXAgd2l0aCB0aGUgYEJPTWBcblx0dmFyIHJlcGxhY2VNYXAgPSB7XG5cdFx0JyVGRSVGRic6ICdcXHVGRkZEXFx1RkZGRCcsXG5cdFx0JyVGRiVGRSc6ICdcXHVGRkZEXFx1RkZGRCdcblx0fTtcblxuXHR2YXIgbWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdHdoaWxlIChtYXRjaCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBEZWNvZGUgYXMgYmlnIGNodW5rcyBhcyBwb3NzaWJsZVxuXHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMF0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGRlY29kZShtYXRjaFswXSk7XG5cblx0XHRcdGlmIChyZXN1bHQgIT09IG1hdGNoWzBdKSB7XG5cdFx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR9XG5cblx0Ly8gQWRkIGAlQzJgIGF0IHRoZSBlbmQgb2YgdGhlIG1hcCB0byBtYWtlIHN1cmUgaXQgZG9lcyBub3QgcmVwbGFjZSB0aGUgY29tYmluYXRvciBiZWZvcmUgZXZlcnl0aGluZyBlbHNlXG5cdHJlcGxhY2VNYXBbJyVDMiddID0gJ1xcdUZGRkQnO1xuXG5cdHZhciBlbnRyaWVzID0gT2JqZWN0LmtleXMocmVwbGFjZU1hcCk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gUmVwbGFjZSBhbGwgZGVjb2RlZCBjb21wb25lbnRzXG5cdFx0dmFyIGtleSA9IGVudHJpZXNbaV07XG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKG5ldyBSZWdFeHAoa2V5LCAnZycpLCByZXBsYWNlTWFwW2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbmNvZGVkVVJJKSB7XG5cdGlmICh0eXBlb2YgZW5jb2RlZFVSSSAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgZW5jb2RlZFVSSWAgdG8gYmUgb2YgdHlwZSBgc3RyaW5nYCwgZ290IGAnICsgdHlwZW9mIGVuY29kZWRVUkkgKyAnYCcpO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRlbmNvZGVkVVJJID0gZW5jb2RlZFVSSS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcblxuXHRcdC8vIFRyeSB0aGUgYnVpbHQgaW4gZGVjb2RlciBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIEZhbGxiYWNrIHRvIGEgbW9yZSBhZHZhbmNlZCBkZWNvZGVyXG5cdFx0cmV0dXJuIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gY29tcGFyZSBhbmQgaXNCdWZmZXIgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9ibG9iLzY4MGU5ZTVlNDg4ZjIyYWFjMjc1OTlhNTdkYzg0NGE2MzE1OTI4ZGQvaW5kZXguanNcbi8vIG9yaWdpbmFsIG5vdGljZTpcblxuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgeCA9IGEubGVuZ3RoO1xuICB2YXIgeSA9IGIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldO1xuICAgICAgeSA9IGJbaV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKHkgPCB4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBpc0J1ZmZlcihiKSB7XG4gIGlmIChnbG9iYWwuQnVmZmVyICYmIHR5cGVvZiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIoYik7XG4gIH1cbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcik7XG59XG5cbi8vIGJhc2VkIG9uIG5vZGUgYXNzZXJ0LCBvcmlnaW5hbCBub3RpY2U6XG4vLyBOQjogVGhlIFVSTCB0byB0aGUgQ29tbW9uSlMgc3BlYyBpcyBrZXB0IGp1c3QgZm9yIHRyYWRpdGlvbi5cbi8vICAgICBub2RlLWFzc2VydCBoYXMgZXZvbHZlZCBhIGxvdCBzaW5jZSB0aGVuLCBib3RoIGluIEFQSSBhbmQgYmVoYXZpb3IuXG5cbi8vIGh0dHA6Ly93aWtpLmNvbW1vbmpzLm9yZy93aWtpL1VuaXRfVGVzdGluZy8xLjBcbi8vXG4vLyBUSElTIElTIE5PVCBURVNURUQgTk9SIExJS0VMWSBUTyBXT1JLIE9VVFNJREUgVjghXG4vL1xuLy8gT3JpZ2luYWxseSBmcm9tIG5hcndoYWwuanMgKGh0dHA6Ly9uYXJ3aGFsanMub3JnKVxuLy8gQ29weXJpZ2h0IChjKSAyMDA5IFRob21hcyBSb2JpbnNvbiA8Mjgwbm9ydGguY29tPlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlICdTb2Z0d2FyZScpLCB0b1xuLy8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbi8vIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuLy8gc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU5cbi8vIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbi8vIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwvJyk7XG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgZnVuY3Rpb25zSGF2ZU5hbWVzID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbygpIHt9Lm5hbWUgPT09ICdmb28nO1xufSgpKTtcbmZ1bmN0aW9uIHBUb1N0cmluZyAob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cbmZ1bmN0aW9uIGlzVmlldyhhcnJidWYpIHtcbiAgaWYgKGlzQnVmZmVyKGFycmJ1ZikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBnbG9iYWwuQXJyYXlCdWZmZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGFycmJ1Zik7XG4gIH1cbiAgaWYgKCFhcnJidWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGFycmJ1ZiBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGFycmJ1Zi5idWZmZXIgJiYgYXJyYnVmLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuLy8gMS4gVGhlIGFzc2VydCBtb2R1bGUgcHJvdmlkZXMgZnVuY3Rpb25zIHRoYXQgdGhyb3dcbi8vIEFzc2VydGlvbkVycm9yJ3Mgd2hlbiBwYXJ0aWN1bGFyIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQuIFRoZVxuLy8gYXNzZXJ0IG1vZHVsZSBtdXN0IGNvbmZvcm0gdG8gdGhlIGZvbGxvd2luZyBpbnRlcmZhY2UuXG5cbnZhciBhc3NlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IG9rO1xuXG4vLyAyLiBUaGUgQXNzZXJ0aW9uRXJyb3IgaXMgZGVmaW5lZCBpbiBhc3NlcnQuXG4vLyBuZXcgYXNzZXJ0LkFzc2VydGlvbkVycm9yKHsgbWVzc2FnZTogbWVzc2FnZSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IGFjdHVhbCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWQgfSlcblxudmFyIHJlZ2V4ID0gL1xccypmdW5jdGlvblxccysoW15cXChcXHNdKilcXHMqLztcbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvZnVuY3Rpb24ucHJvdG90eXBlLm5hbWUvYmxvYi9hZGVlZWVjOGJmY2M2MDY4YjE4N2Q3ZDlmYjNkNWJiMWQzYTMwODk5L2ltcGxlbWVudGF0aW9uLmpzXG5mdW5jdGlvbiBnZXROYW1lKGZ1bmMpIHtcbiAgaWYgKCF1dGlsLmlzRnVuY3Rpb24oZnVuYykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGZ1bmN0aW9uc0hhdmVOYW1lcykge1xuICAgIHJldHVybiBmdW5jLm5hbWU7XG4gIH1cbiAgdmFyIHN0ciA9IGZ1bmMudG9TdHJpbmcoKTtcbiAgdmFyIG1hdGNoID0gc3RyLm1hdGNoKHJlZ2V4KTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdO1xufVxuYXNzZXJ0LkFzc2VydGlvbkVycm9yID0gZnVuY3Rpb24gQXNzZXJ0aW9uRXJyb3Iob3B0aW9ucykge1xuICB0aGlzLm5hbWUgPSAnQXNzZXJ0aW9uRXJyb3InO1xuICB0aGlzLmFjdHVhbCA9IG9wdGlvbnMuYWN0dWFsO1xuICB0aGlzLmV4cGVjdGVkID0gb3B0aW9ucy5leHBlY3RlZDtcbiAgdGhpcy5vcGVyYXRvciA9IG9wdGlvbnMub3BlcmF0b3I7XG4gIGlmIChvcHRpb25zLm1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2U7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tZXNzYWdlID0gZ2V0TWVzc2FnZSh0aGlzKTtcbiAgICB0aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSB0cnVlO1xuICB9XG4gIHZhciBzdGFja1N0YXJ0RnVuY3Rpb24gPSBvcHRpb25zLnN0YWNrU3RhcnRGdW5jdGlvbiB8fCBmYWlsO1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBzdGFja1N0YXJ0RnVuY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIC8vIG5vbiB2OCBicm93c2VycyBzbyB3ZSBjYW4gaGF2ZSBhIHN0YWNrdHJhY2VcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCk7XG4gICAgaWYgKGVyci5zdGFjaykge1xuICAgICAgdmFyIG91dCA9IGVyci5zdGFjaztcblxuICAgICAgLy8gdHJ5IHRvIHN0cmlwIHVzZWxlc3MgZnJhbWVzXG4gICAgICB2YXIgZm5fbmFtZSA9IGdldE5hbWUoc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgICAgIHZhciBpZHggPSBvdXQuaW5kZXhPZignXFxuJyArIGZuX25hbWUpO1xuICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgIC8vIG9uY2Ugd2UgaGF2ZSBsb2NhdGVkIHRoZSBmdW5jdGlvbiBmcmFtZVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHN0cmlwIG91dCBldmVyeXRoaW5nIGJlZm9yZSBpdCAoYW5kIGl0cyBsaW5lKVxuICAgICAgICB2YXIgbmV4dF9saW5lID0gb3V0LmluZGV4T2YoJ1xcbicsIGlkeCArIDEpO1xuICAgICAgICBvdXQgPSBvdXQuc3Vic3RyaW5nKG5leHRfbGluZSArIDEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YWNrID0gb3V0O1xuICAgIH1cbiAgfVxufTtcblxuLy8gYXNzZXJ0LkFzc2VydGlvbkVycm9yIGluc3RhbmNlb2YgRXJyb3JcbnV0aWwuaW5oZXJpdHMoYXNzZXJ0LkFzc2VydGlvbkVycm9yLCBFcnJvcik7XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHMsIG4pIHtcbiAgaWYgKHR5cGVvZiBzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzLmxlbmd0aCA8IG4gPyBzIDogcy5zbGljZSgwLCBuKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcztcbiAgfVxufVxuZnVuY3Rpb24gaW5zcGVjdChzb21ldGhpbmcpIHtcbiAgaWYgKGZ1bmN0aW9uc0hhdmVOYW1lcyB8fCAhdXRpbC5pc0Z1bmN0aW9uKHNvbWV0aGluZykpIHtcbiAgICByZXR1cm4gdXRpbC5pbnNwZWN0KHNvbWV0aGluZyk7XG4gIH1cbiAgdmFyIHJhd25hbWUgPSBnZXROYW1lKHNvbWV0aGluZyk7XG4gIHZhciBuYW1lID0gcmF3bmFtZSA/ICc6ICcgKyByYXduYW1lIDogJyc7XG4gIHJldHVybiAnW0Z1bmN0aW9uJyArICBuYW1lICsgJ10nO1xufVxuZnVuY3Rpb24gZ2V0TWVzc2FnZShzZWxmKSB7XG4gIHJldHVybiB0cnVuY2F0ZShpbnNwZWN0KHNlbGYuYWN0dWFsKSwgMTI4KSArICcgJyArXG4gICAgICAgICBzZWxmLm9wZXJhdG9yICsgJyAnICtcbiAgICAgICAgIHRydW5jYXRlKGluc3BlY3Qoc2VsZi5leHBlY3RlZCksIDEyOCk7XG59XG5cbi8vIEF0IHByZXNlbnQgb25seSB0aGUgdGhyZWUga2V5cyBtZW50aW9uZWQgYWJvdmUgYXJlIHVzZWQgYW5kXG4vLyB1bmRlcnN0b29kIGJ5IHRoZSBzcGVjLiBJbXBsZW1lbnRhdGlvbnMgb3Igc3ViIG1vZHVsZXMgY2FuIHBhc3Ncbi8vIG90aGVyIGtleXMgdG8gdGhlIEFzc2VydGlvbkVycm9yJ3MgY29uc3RydWN0b3IgLSB0aGV5IHdpbGwgYmVcbi8vIGlnbm9yZWQuXG5cbi8vIDMuIEFsbCBvZiB0aGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBtdXN0IHRocm93IGFuIEFzc2VydGlvbkVycm9yXG4vLyB3aGVuIGEgY29ycmVzcG9uZGluZyBjb25kaXRpb24gaXMgbm90IG1ldCwgd2l0aCBhIG1lc3NhZ2UgdGhhdFxuLy8gbWF5IGJlIHVuZGVmaW5lZCBpZiBub3QgcHJvdmlkZWQuICBBbGwgYXNzZXJ0aW9uIG1ldGhvZHMgcHJvdmlkZVxuLy8gYm90aCB0aGUgYWN0dWFsIGFuZCBleHBlY3RlZCB2YWx1ZXMgdG8gdGhlIGFzc2VydGlvbiBlcnJvciBmb3Jcbi8vIGRpc3BsYXkgcHVycG9zZXMuXG5cbmZ1bmN0aW9uIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgb3BlcmF0b3IsIHN0YWNrU3RhcnRGdW5jdGlvbikge1xuICB0aHJvdyBuZXcgYXNzZXJ0LkFzc2VydGlvbkVycm9yKHtcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgIGFjdHVhbDogYWN0dWFsLFxuICAgIGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgICBvcGVyYXRvcjogb3BlcmF0b3IsXG4gICAgc3RhY2tTdGFydEZ1bmN0aW9uOiBzdGFja1N0YXJ0RnVuY3Rpb25cbiAgfSk7XG59XG5cbi8vIEVYVEVOU0lPTiEgYWxsb3dzIGZvciB3ZWxsIGJlaGF2ZWQgZXJyb3JzIGRlZmluZWQgZWxzZXdoZXJlLlxuYXNzZXJ0LmZhaWwgPSBmYWlsO1xuXG4vLyA0LiBQdXJlIGFzc2VydGlvbiB0ZXN0cyB3aGV0aGVyIGEgdmFsdWUgaXMgdHJ1dGh5LCBhcyBkZXRlcm1pbmVkXG4vLyBieSAhIWd1YXJkLlxuLy8gYXNzZXJ0Lm9rKGd1YXJkLCBtZXNzYWdlX29wdCk7XG4vLyBUaGlzIHN0YXRlbWVudCBpcyBlcXVpdmFsZW50IHRvIGFzc2VydC5lcXVhbCh0cnVlLCAhIWd1YXJkLFxuLy8gbWVzc2FnZV9vcHQpOy4gVG8gdGVzdCBzdHJpY3RseSBmb3IgdGhlIHZhbHVlIHRydWUsIHVzZVxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHRydWUsIGd1YXJkLCBtZXNzYWdlX29wdCk7LlxuXG5mdW5jdGlvbiBvayh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBhc3NlcnQub2spO1xufVxuYXNzZXJ0Lm9rID0gb2s7XG5cbi8vIDUuIFRoZSBlcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgc2hhbGxvdywgY29lcmNpdmUgZXF1YWxpdHkgd2l0aFxuLy8gPT0uXG4vLyBhc3NlcnQuZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgIT0gZXhwZWN0ZWQpIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09JywgYXNzZXJ0LmVxdWFsKTtcbn07XG5cbi8vIDYuIFRoZSBub24tZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIGZvciB3aGV0aGVyIHR3byBvYmplY3RzIGFyZSBub3QgZXF1YWxcbi8vIHdpdGggIT0gYXNzZXJ0Lm5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdEVxdWFsID0gZnVuY3Rpb24gbm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsID09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT0nLCBhc3NlcnQubm90RXF1YWwpO1xuICB9XG59O1xuXG4vLyA3LiBUaGUgZXF1aXZhbGVuY2UgYXNzZXJ0aW9uIHRlc3RzIGEgZGVlcCBlcXVhbGl0eSByZWxhdGlvbi5cbi8vIGFzc2VydC5kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuZGVlcEVxdWFsID0gZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIGZhbHNlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBFcXVhbCcsIGFzc2VydC5kZWVwRXF1YWwpO1xuICB9XG59O1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsID0gZnVuY3Rpb24gZGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHRydWUpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnZGVlcFN0cmljdEVxdWFsJywgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgc3RyaWN0LCBtZW1vcykge1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihhY3R1YWwpICYmIGlzQnVmZmVyKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBjb21wYXJlKGFjdHVhbCwgZXhwZWN0ZWQpID09PSAwO1xuXG4gIC8vIDcuMi4gSWYgdGhlIGV4cGVjdGVkIHZhbHVlIGlzIGEgRGF0ZSBvYmplY3QsIHRoZSBhY3R1YWwgdmFsdWUgaXNcbiAgLy8gZXF1aXZhbGVudCBpZiBpdCBpcyBhbHNvIGEgRGF0ZSBvYmplY3QgdGhhdCByZWZlcnMgdG8gdGhlIHNhbWUgdGltZS5cbiAgfSBlbHNlIGlmICh1dGlsLmlzRGF0ZShhY3R1YWwpICYmIHV0aWwuaXNEYXRlKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIHRoZSBhY3R1YWwgdmFsdWUgaXNcbiAgLy8gZXF1aXZhbGVudCBpZiBpdCBpcyBhbHNvIGEgUmVnRXhwIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNvdXJjZSBhbmRcbiAgLy8gcHJvcGVydGllcyAoYGdsb2JhbGAsIGBtdWx0aWxpbmVgLCBgbGFzdEluZGV4YCwgYGlnbm9yZUNhc2VgKS5cbiAgfSBlbHNlIGlmICh1dGlsLmlzUmVnRXhwKGFjdHVhbCkgJiYgdXRpbC5pc1JlZ0V4cChleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLnNvdXJjZSA9PT0gZXhwZWN0ZWQuc291cmNlICYmXG4gICAgICAgICAgIGFjdHVhbC5nbG9iYWwgPT09IGV4cGVjdGVkLmdsb2JhbCAmJlxuICAgICAgICAgICBhY3R1YWwubXVsdGlsaW5lID09PSBleHBlY3RlZC5tdWx0aWxpbmUgJiZcbiAgICAgICAgICAgYWN0dWFsLmxhc3RJbmRleCA9PT0gZXhwZWN0ZWQubGFzdEluZGV4ICYmXG4gICAgICAgICAgIGFjdHVhbC5pZ25vcmVDYXNlID09PSBleHBlY3RlZC5pZ25vcmVDYXNlO1xuXG4gIC8vIDcuNC4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICgoYWN0dWFsID09PSBudWxsIHx8IHR5cGVvZiBhY3R1YWwgIT09ICdvYmplY3QnKSAmJlxuICAgICAgICAgICAgIChleHBlY3RlZCA9PT0gbnVsbCB8fCB0eXBlb2YgZXhwZWN0ZWQgIT09ICdvYmplY3QnKSkge1xuICAgIHJldHVybiBzdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIElmIGJvdGggdmFsdWVzIGFyZSBpbnN0YW5jZXMgb2YgdHlwZWQgYXJyYXlzLCB3cmFwIHRoZWlyIHVuZGVybHlpbmdcbiAgLy8gQXJyYXlCdWZmZXJzIGluIGEgQnVmZmVyIGVhY2ggdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgLy8gVGhpcyBvcHRpbWl6YXRpb24gcmVxdWlyZXMgdGhlIGFycmF5cyB0byBoYXZlIHRoZSBzYW1lIHR5cGUgYXMgY2hlY2tlZCBieVxuICAvLyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIChha2EgcFRvU3RyaW5nKS4gTmV2ZXIgcGVyZm9ybSBiaW5hcnlcbiAgLy8gY29tcGFyaXNvbnMgZm9yIEZsb2F0KkFycmF5cywgdGhvdWdoLCBzaW5jZSBlLmcuICswID09PSAtMCBidXQgdGhlaXJcbiAgLy8gYml0IHBhdHRlcm5zIGFyZSBub3QgaWRlbnRpY2FsLlxuICB9IGVsc2UgaWYgKGlzVmlldyhhY3R1YWwpICYmIGlzVmlldyhleHBlY3RlZCkgJiZcbiAgICAgICAgICAgICBwVG9TdHJpbmcoYWN0dWFsKSA9PT0gcFRvU3RyaW5nKGV4cGVjdGVkKSAmJlxuICAgICAgICAgICAgICEoYWN0dWFsIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5IHx8XG4gICAgICAgICAgICAgICBhY3R1YWwgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXkpKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUobmV3IFVpbnQ4QXJyYXkoYWN0dWFsLmJ1ZmZlciksXG4gICAgICAgICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkoZXhwZWN0ZWQuYnVmZmVyKSkgPT09IDA7XG5cbiAgLy8gNy41IEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihhY3R1YWwpICE9PSBpc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgbWVtb3MgPSBtZW1vcyB8fCB7YWN0dWFsOiBbXSwgZXhwZWN0ZWQ6IFtdfTtcblxuICAgIHZhciBhY3R1YWxJbmRleCA9IG1lbW9zLmFjdHVhbC5pbmRleE9mKGFjdHVhbCk7XG4gICAgaWYgKGFjdHVhbEluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKGFjdHVhbEluZGV4ID09PSBtZW1vcy5leHBlY3RlZC5pbmRleE9mKGV4cGVjdGVkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vcy5hY3R1YWwucHVzaChhY3R1YWwpO1xuICAgIG1lbW9zLmV4cGVjdGVkLnB1c2goZXhwZWN0ZWQpO1xuXG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIHN0cmljdCwgbWVtb3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIHN0cmljdCwgYWN0dWFsVmlzaXRlZE9iamVjdHMpIHtcbiAgaWYgKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IG51bGwgfHwgYiA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gaWYgb25lIGlzIGEgcHJpbWl0aXZlLCB0aGUgb3RoZXIgbXVzdCBiZSBzYW1lXG4gIGlmICh1dGlsLmlzUHJpbWl0aXZlKGEpIHx8IHV0aWwuaXNQcmltaXRpdmUoYikpXG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIGlmIChzdHJpY3QgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGEpICE9PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICB2YXIgYUlzQXJncyA9IGlzQXJndW1lbnRzKGEpO1xuICB2YXIgYklzQXJncyA9IGlzQXJndW1lbnRzKGIpO1xuICBpZiAoKGFJc0FyZ3MgJiYgIWJJc0FyZ3MpIHx8ICghYUlzQXJncyAmJiBiSXNBcmdzKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmIChhSXNBcmdzKSB7XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gX2RlZXBFcXVhbChhLCBiLCBzdHJpY3QpO1xuICB9XG4gIHZhciBrYSA9IG9iamVjdEtleXMoYSk7XG4gIHZhciBrYiA9IG9iamVjdEtleXMoYik7XG4gIHZhciBrZXksIGk7XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT09IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9PSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghX2RlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgc3RyaWN0LCBhY3R1YWxWaXNpdGVkT2JqZWN0cykpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIDguIFRoZSBub24tZXF1aXZhbGVuY2UgYXNzZXJ0aW9uIHRlc3RzIGZvciBhbnkgZGVlcCBpbmVxdWFsaXR5LlxuLy8gYXNzZXJ0Lm5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3REZWVwRXF1YWwgPSBmdW5jdGlvbiBub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBmYWxzZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdub3REZWVwRXF1YWwnLCBhc3NlcnQubm90RGVlcEVxdWFsKTtcbiAgfVxufTtcblxuYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbCA9IG5vdERlZXBTdHJpY3RFcXVhbDtcbmZ1bmN0aW9uIG5vdERlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHRydWUpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcFN0cmljdEVxdWFsJywgbm90RGVlcFN0cmljdEVxdWFsKTtcbiAgfVxufVxuXG5cbi8vIDkuIFRoZSBzdHJpY3QgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHN0cmljdCBlcXVhbGl0eSwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBzdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgIT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnPT09JywgYXNzZXJ0LnN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gMTAuIFRoZSBzdHJpY3Qgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igc3RyaWN0IGluZXF1YWxpdHksIGFzXG4vLyBkZXRlcm1pbmVkIGJ5ICE9PS4gIGFzc2VydC5ub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIG5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICchPT0nLCBhc3NlcnQubm90U3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSB7XG4gIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXhwZWN0ZWQpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgcmV0dXJuIGV4cGVjdGVkLnRlc3QoYWN0dWFsKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJZ25vcmUuICBUaGUgaW5zdGFuY2VvZiBjaGVjayBkb2Vzbid0IHdvcmsgZm9yIGFycm93IGZ1bmN0aW9ucy5cbiAgfVxuXG4gIGlmIChFcnJvci5pc1Byb3RvdHlwZU9mKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBleHBlY3RlZC5jYWxsKHt9LCBhY3R1YWwpID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiBfdHJ5QmxvY2soYmxvY2spIHtcbiAgdmFyIGVycm9yO1xuICB0cnkge1xuICAgIGJsb2NrKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlcnJvciA9IGU7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBfdGhyb3dzKHNob3VsZFRocm93LCBibG9jaywgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGFjdHVhbDtcblxuICBpZiAodHlwZW9mIGJsb2NrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJibG9ja1wiIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBlY3RlZCA9PT0gJ3N0cmluZycpIHtcbiAgICBtZXNzYWdlID0gZXhwZWN0ZWQ7XG4gICAgZXhwZWN0ZWQgPSBudWxsO1xuICB9XG5cbiAgYWN0dWFsID0gX3RyeUJsb2NrKGJsb2NrKTtcblxuICBtZXNzYWdlID0gKGV4cGVjdGVkICYmIGV4cGVjdGVkLm5hbWUgPyAnICgnICsgZXhwZWN0ZWQubmFtZSArICcpLicgOiAnLicpICtcbiAgICAgICAgICAgIChtZXNzYWdlID8gJyAnICsgbWVzc2FnZSA6ICcuJyk7XG5cbiAgaWYgKHNob3VsZFRocm93ICYmICFhY3R1YWwpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsICdNaXNzaW5nIGV4cGVjdGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIHZhciB1c2VyUHJvdmlkZWRNZXNzYWdlID0gdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnO1xuICB2YXIgaXNVbndhbnRlZEV4Y2VwdGlvbiA9ICFzaG91bGRUaHJvdyAmJiB1dGlsLmlzRXJyb3IoYWN0dWFsKTtcbiAgdmFyIGlzVW5leHBlY3RlZEV4Y2VwdGlvbiA9ICFzaG91bGRUaHJvdyAmJiBhY3R1YWwgJiYgIWV4cGVjdGVkO1xuXG4gIGlmICgoaXNVbndhbnRlZEV4Y2VwdGlvbiAmJlxuICAgICAgdXNlclByb3ZpZGVkTWVzc2FnZSAmJlxuICAgICAgZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHx8XG4gICAgICBpc1VuZXhwZWN0ZWRFeGNlcHRpb24pIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsICdHb3QgdW53YW50ZWQgZXhjZXB0aW9uJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgaWYgKChzaG91bGRUaHJvdyAmJiBhY3R1YWwgJiYgZXhwZWN0ZWQgJiZcbiAgICAgICFleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSkgfHwgKCFzaG91bGRUaHJvdyAmJiBhY3R1YWwpKSB7XG4gICAgdGhyb3cgYWN0dWFsO1xuICB9XG59XG5cbi8vIDExLiBFeHBlY3RlZCB0byB0aHJvdyBhbiBlcnJvcjpcbi8vIGFzc2VydC50aHJvd3MoYmxvY2ssIEVycm9yX29wdCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQudGhyb3dzID0gZnVuY3Rpb24oYmxvY2ssIC8qb3B0aW9uYWwqL2Vycm9yLCAvKm9wdGlvbmFsKi9tZXNzYWdlKSB7XG4gIF90aHJvd3ModHJ1ZSwgYmxvY2ssIGVycm9yLCBtZXNzYWdlKTtcbn07XG5cbi8vIEVYVEVOU0lPTiEgVGhpcyBpcyBhbm5veWluZyB0byB3cml0ZSBvdXRzaWRlIHRoaXMgbW9kdWxlLlxuYXNzZXJ0LmRvZXNOb3RUaHJvdyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9lcnJvciwgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzKGZhbHNlLCBibG9jaywgZXJyb3IsIG1lc3NhZ2UpO1xufTtcblxuYXNzZXJ0LmlmRXJyb3IgPSBmdW5jdGlvbihlcnIpIHsgaWYgKGVycikgdGhyb3cgZXJyOyB9O1xuXG4vLyBFeHBvc2UgYSBzdHJpY3Qgb25seSB2YXJpYW50IG9mIGFzc2VydFxuZnVuY3Rpb24gc3RyaWN0KHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICghdmFsdWUpIGZhaWwodmFsdWUsIHRydWUsIG1lc3NhZ2UsICc9PScsIHN0cmljdCk7XG59XG5hc3NlcnQuc3RyaWN0ID0gb2JqZWN0QXNzaWduKHN0cmljdCwgYXNzZXJ0LCB7XG4gIGVxdWFsOiBhc3NlcnQuc3RyaWN0RXF1YWwsXG4gIGRlZXBFcXVhbDogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCxcbiAgbm90RXF1YWw6IGFzc2VydC5ub3RTdHJpY3RFcXVhbCxcbiAgbm90RGVlcEVxdWFsOiBhc3NlcnQubm90RGVlcFN0cmljdEVxdWFsXG59KTtcbmFzc2VydC5zdHJpY3Quc3RyaWN0ID0gYXNzZXJ0LnN0cmljdDtcblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG5jb25zdCBkZWNvZGVDb21wb25lbnQgPSByZXF1aXJlKCdkZWNvZGUtdXJpLWNvbXBvbmVudCcpO1xuY29uc3Qgc3BsaXRPbkZpcnN0ID0gcmVxdWlyZSgnc3BsaXQtb24tZmlyc3QnKTtcblxuY29uc3QgaXNOdWxsT3JVbmRlZmluZWQgPSB2YWx1ZSA9PiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRzd2l0Y2ggKG9wdGlvbnMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gcmVzdWx0Lmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGluZGV4LCAnXSddLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0Li4ucmVzdWx0LFxuXHRcdFx0XHRcdFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1snLCBlbmNvZGUoaW5kZXgsIG9wdGlvbnMpLCAnXT0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKVxuXHRcdFx0XHRdO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW10nXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbW1hJzpcblx0XHRjYXNlICdzZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gW1tlbmNvZGUoa2V5LCBvcHRpb25zKSwgJz0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW1tyZXN1bHQsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4ob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcildO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBlbmNvZGUoa2V5LCBvcHRpb25zKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gL1xcWyhcXGQqKVxcXSQvLmV4ZWMoa2V5KTtcblxuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkKlxcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV1bcmVzdWx0WzFdXSA9IHZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvKFxcW1xcXSkkLy5leGVjKGtleSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW3ZhbHVlXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdjb21tYSc6XG5cdFx0Y2FzZSAnc2VwYXJhdG9yJzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0Y29uc3QgaXNBcnJheSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3BsaXQoJycpLmluZGV4T2Yob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcikgPiAtMTtcblx0XHRcdFx0Y29uc3QgbmV3VmFsdWUgPSBpc0FycmF5ID8gdmFsdWUuc3BsaXQob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcikubWFwKGl0ZW0gPT4gZGVjb2RlKGl0ZW0sIG9wdGlvbnMpKSA6IHZhbHVlID09PSBudWxsID8gdmFsdWUgOiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gbmV3VmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcih2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCB2YWx1ZS5sZW5ndGggIT09IDEpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdhcnJheUZvcm1hdFNlcGFyYXRvciBtdXN0IGJlIHNpbmdsZSBjaGFyYWN0ZXIgc3RyaW5nJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmVuY29kZSkge1xuXHRcdHJldHVybiBvcHRpb25zLnN0cmljdCA/IHN0cmljdFVyaUVuY29kZSh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZGVjb2RlKSB7XG5cdFx0cmV0dXJuIGRlY29kZUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleXNTb3J0ZXIoaW5wdXQpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGtleXNTb3J0ZXIoT2JqZWN0LmtleXMoaW5wdXQpKVxuXHRcdFx0LnNvcnQoKGEsIGIpID0+IE51bWJlcihhKSAtIE51bWJlcihiKSlcblx0XHRcdC5tYXAoa2V5ID0+IGlucHV0W2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiByZW1vdmVIYXNoKGlucHV0KSB7XG5cdGNvbnN0IGhhc2hTdGFydCA9IGlucHV0LmluZGV4T2YoJyMnKTtcblx0aWYgKGhhc2hTdGFydCAhPT0gLTEpIHtcblx0XHRpbnB1dCA9IGlucHV0LnNsaWNlKDAsIGhhc2hTdGFydCk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGdldEhhc2godXJsKSB7XG5cdGxldCBoYXNoID0gJyc7XG5cdGNvbnN0IGhhc2hTdGFydCA9IHVybC5pbmRleE9mKCcjJyk7XG5cdGlmIChoYXNoU3RhcnQgIT09IC0xKSB7XG5cdFx0aGFzaCA9IHVybC5zbGljZShoYXNoU3RhcnQpO1xuXHR9XG5cblx0cmV0dXJuIGhhc2g7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3QoaW5wdXQpIHtcblx0aW5wdXQgPSByZW1vdmVIYXNoKGlucHV0KTtcblx0Y29uc3QgcXVlcnlTdGFydCA9IGlucHV0LmluZGV4T2YoJz8nKTtcblx0aWYgKHF1ZXJ5U3RhcnQgPT09IC0xKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0LnNsaWNlKHF1ZXJ5U3RhcnQgKyAxKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5wYXJzZU51bWJlcnMgJiYgIU51bWJlci5pc05hTihOdW1iZXIodmFsdWUpKSAmJiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgIT09ICcnKSkge1xuXHRcdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLnBhcnNlQm9vbGVhbnMgJiYgdmFsdWUgIT09IG51bGwgJiYgKHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyB8fCB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnKSkge1xuXHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0ZGVjb2RlOiB0cnVlLFxuXHRcdHNvcnQ6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJyxcblx0XHRhcnJheUZvcm1hdFNlcGFyYXRvcjogJywnLFxuXHRcdHBhcnNlTnVtYmVyczogZmFsc2UsXG5cdFx0cGFyc2VCb29sZWFuczogZmFsc2Vcblx0fSwgb3B0aW9ucyk7XG5cblx0dmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblxuXHRjb25zdCBmb3JtYXR0ZXIgPSBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKTtcblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggbm8gcHJvdG90eXBlXG5cdGNvbnN0IHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0aW5wdXQgPSBpbnB1dC50cmltKCkucmVwbGFjZSgvXls/IyZdLywgJycpO1xuXG5cdGlmICghaW5wdXQpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwYXJhbSBvZiBpbnB1dC5zcGxpdCgnJicpKSB7XG5cdFx0bGV0IFtrZXksIHZhbHVlXSA9IHNwbGl0T25GaXJzdChvcHRpb25zLmRlY29kZSA/IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpIDogcGFyYW0sICc9Jyk7XG5cblx0XHQvLyBNaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogb3B0aW9ucy5hcnJheUZvcm1hdCA9PT0gJ2NvbW1hJyA/IHZhbHVlIDogZGVjb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0XHRmb3JtYXR0ZXIoZGVjb2RlKGtleSwgb3B0aW9ucyksIHZhbHVlLCByZXQpO1xuXHR9XG5cblx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocmV0KSkge1xuXHRcdGNvbnN0IHZhbHVlID0gcmV0W2tleV07XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRcdGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcblx0XHRcdFx0dmFsdWVba10gPSBwYXJzZVZhbHVlKHZhbHVlW2tdLCBvcHRpb25zKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0W2tleV0gPSBwYXJzZVZhbHVlKHZhbHVlLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zb3J0ID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRyZXR1cm4gKG9wdGlvbnMuc29ydCA9PT0gdHJ1ZSA/IE9iamVjdC5rZXlzKHJldCkuc29ydCgpIDogT2JqZWN0LmtleXMocmV0KS5zb3J0KG9wdGlvbnMuc29ydCkpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmIChCb29sZWFuKHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Ly8gU29ydCBvYmplY3Qga2V5cywgbm90IHZhbHVlc1xuXHRcdFx0cmVzdWx0W2tleV0gPSBrZXlzU29ydGVyKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0W2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZXh0cmFjdDtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSAob2JqZWN0LCBvcHRpb25zKSA9PiB7XG5cdGlmICghb2JqZWN0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJyxcblx0XHRhcnJheUZvcm1hdFNlcGFyYXRvcjogJywnXG5cdH0sIG9wdGlvbnMpO1xuXG5cdHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3Iob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cblx0Y29uc3Qgc2hvdWxkRmlsdGVyID0ga2V5ID0+IChcblx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiBpc051bGxPclVuZGVmaW5lZChvYmplY3Rba2V5XSkpIHx8XG5cdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIG9iamVjdFtrZXldID09PSAnJylcblx0KTtcblxuXHRjb25zdCBmb3JtYXR0ZXIgPSBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Y29uc3Qgb2JqZWN0Q29weSA9IHt9O1xuXG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcblx0XHRpZiAoIXNob3VsZEZpbHRlcihrZXkpKSB7XG5cdFx0XHRvYmplY3RDb3B5W2tleV0gPSBvYmplY3Rba2V5XTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0Q29weSk7XG5cblx0aWYgKG9wdGlvbnMuc29ydCAhPT0gZmFsc2UpIHtcblx0XHRrZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcblx0fVxuXG5cdHJldHVybiBrZXlzLm1hcChrZXkgPT4ge1xuXHRcdGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XG5cblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdC5yZWR1Y2UoZm9ybWF0dGVyKGtleSksIFtdKVxuXHRcdFx0XHQuam9pbignJicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKSArICc9JyArIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdH0pLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCkuam9pbignJicpO1xufTtcblxuZXhwb3J0cy5wYXJzZVVybCA9IChpbnB1dCwgb3B0aW9ucykgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHVybDogcmVtb3ZlSGFzaChpbnB1dCkuc3BsaXQoJz8nKVswXSB8fCAnJyxcblx0XHRxdWVyeTogcGFyc2UoZXh0cmFjdChpbnB1dCksIG9wdGlvbnMpXG5cdH07XG59O1xuXG5leHBvcnRzLnN0cmluZ2lmeVVybCA9IChpbnB1dCwgb3B0aW9ucykgPT4ge1xuXHRjb25zdCB1cmwgPSByZW1vdmVIYXNoKGlucHV0LnVybCkuc3BsaXQoJz8nKVswXSB8fCAnJztcblx0Y29uc3QgcXVlcnlGcm9tVXJsID0gZXhwb3J0cy5leHRyYWN0KGlucHV0LnVybCk7XG5cdGNvbnN0IHBhcnNlZFF1ZXJ5RnJvbVVybCA9IGV4cG9ydHMucGFyc2UocXVlcnlGcm9tVXJsKTtcblx0Y29uc3QgaGFzaCA9IGdldEhhc2goaW5wdXQudXJsKTtcblx0Y29uc3QgcXVlcnkgPSBPYmplY3QuYXNzaWduKHBhcnNlZFF1ZXJ5RnJvbVVybCwgaW5wdXQucXVlcnkpO1xuXHRsZXQgcXVlcnlTdHJpbmcgPSBleHBvcnRzLnN0cmluZ2lmeShxdWVyeSwgb3B0aW9ucyk7XG5cdGlmIChxdWVyeVN0cmluZykge1xuXHRcdHF1ZXJ5U3RyaW5nID0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7dXJsfSR7cXVlcnlTdHJpbmd9JHtoYXNofWA7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChzdHJpbmcsIHNlcGFyYXRvcikgPT4ge1xuXHRpZiAoISh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgYXJndW1lbnRzIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AnKTtcblx0fVxuXG5cdGlmIChzZXBhcmF0b3IgPT09ICcnKSB7XG5cdFx0cmV0dXJuIFtzdHJpbmddO1xuXHR9XG5cblx0Y29uc3Qgc2VwYXJhdG9ySW5kZXggPSBzdHJpbmcuaW5kZXhPZihzZXBhcmF0b3IpO1xuXG5cdGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gW3N0cmluZ107XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdHN0cmluZy5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCksXG5cdFx0c3RyaW5nLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgc2VwYXJhdG9yLmxlbmd0aClcblx0XTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIHggPT4gYCUke3guY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gKTtcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCBzZiBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XHJcbmltcG9ydCAqIGFzIGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5pbXBvcnQgeyBwYWdlUGFyYW1zLCBSZXF1ZXN0TWV0aG9kLCBTb3J0RGlyZWN0aW9uLCBzb3J0UGFyYW1zIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEYXRhZ3JpZFN0YXRlLCBERUZBVUxUX0xJTUlUIH0gZnJvbSAnLi9EYXRhZ3JpZFN0YXRlJztcclxuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcic7XHJcbmltcG9ydCB7IGRlZmF1bHRSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyL2RlZmF1bHRSZW5kZXJlcic7XHJcbmltcG9ydCB7IEdyaWRSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyL0dyaWRSZW5kZXJlcic7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUNvbHVtbnMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgcGFyc2UsIHN0cmluZ2lmeVVybCB9IGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbi8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuZXhwb3J0IGNsYXNzIERhdGFncmlkIGV4dGVuZHMgc2YuY29yZS5CYXNlRE9NQ29uc3RydWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc2YsIG5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc1RvR3JhYiA9IHtcclxuICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBEYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucy5pZCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdpZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IERhdGFncmlkLmRlZmF1bHRPcHRpb25zLnVybCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLXVybCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERhdGFncmlkLmRlZmF1bHRPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmdyaWRzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBEYXRhZ3JpZFN0YXRlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZWRGb3JtcyA9IHt9OyAvLyBUT0RPOiB0eXBlIGFzIHNmLkZvcm0gaW5zdGFuY2UgYXJyYXlcclxuICAgICAgICB0aGlzLmNhcHR1cmVkUGFnaW5hdG9ycyA9IFtdOyAvLyBUT0RPOiB0eXBlIGFzIHNmLlBhZ2luYXRvciBpbnN0YW5jZSBhcnJheVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgIGxpbWl0OiBERUZBVUxUX0xJTUlULFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbml0KHNmLCBub2RlLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIERhdGFncmlkLmRlZmF1bHRPcHRpb25zKSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsT3B0aW9uc0VsID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbcm9sZT1cInNmLW9wdGlvbnNcIl0nKTtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbE9wdGlvbnNFbCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25lID0gRnVuY3Rpb24oJ1widXNlIHN0cmljdFwiO3JldHVybiAnICsgYWRkaXRpb25hbE9wdGlvbnNFbC5pbm5lckhUTUwudHJpbSgpICsgJycpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1widXNlIHN0cmljdFwiO3JldHVybiAnICsgYWRkaXRpb25hbE9wdGlvbnNFbC5pbm5lckhUTUwudHJpbSgpICsgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGVzID0gb25lKCkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3ZlcnJpZGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IHBhcnNlIG9wdGlvbnMgaW5zaWRlIHNjcmlwdCwgZW5zdXJlIHNjcmlwdCBpbnNpZGUgaXMgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIHJldHVybmluZyBJRGF0YUdyaWRPcHRpb25zIG9iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3NlcnQubm90RXF1YWwodGhpcy5vcHRpb25zLmlkLCAnJywgJ2lkIHNob3VsZCBiZSBub3QgZW1wdHknKTtcclxuICAgICAgICBhc3NlcnQubm90RXF1YWwodGhpcy5vcHRpb25zLnVybCwgJycsICd1cmwgc2hvdWxkIGJlIG5vdCBlbXB0eScpO1xyXG4gICAgICAgIC8vIFByb2Nlc3Mgb3B0aW9uc1xyXG4gICAgICAgIC8vIFRPRE86IHdlIGNhbiBvdmVycmlkZSBjb2x1bW5zIGFuZCBzb3J0IG9wdGlvbnMgaW5zaWRlIHJlbmRlcmVycyBidXQgaXQgbWlnaHQgcHJvZHVjZSBzaXR1YXRpb24gb2YgdHJpZ2dlcmluZyB1bmV4aXN0aW5nIHNvcnRcclxuICAgICAgICAvLyBUaGluayBhYm91dCB0aGF0LCBvciBpZ25vcmVcclxuICAgICAgICB0aGlzLmNvbHVtbkluZm8gPSBub3JtYWxpemVDb2x1bW5zKHRoaXMub3B0aW9ucy5jb2x1bW5zLCB0aGlzLm9wdGlvbnMuc29ydGFibGUpO1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHNvcnQgaWYgcHJlc2VudFxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zb3J0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0cy5zb3J0QnkgPSB0aGlzLm9wdGlvbnMuc29ydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuc29ydERpciA9IFNvcnREaXJlY3Rpb24uQVNDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0cy5zb3J0QnkgPSB0aGlzLm9wdGlvbnMuc29ydC5maWVsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuc29ydERpciA9IHRoaXMub3B0aW9ucy5zb3J0LmRpcmVjdGlvbiB8fCBTb3J0RGlyZWN0aW9uLkFTQztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQodGhpcy5kZWZhdWx0cy5zb3J0QnksIHRoaXMuZGVmYXVsdHMuc29ydERpcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZXJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RnJvbVVybCgpO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZUZvcm1zKCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KCk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckZvcm1JbnN0YW5jZShmb3JtSW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoZm9ybUluc3RhbmNlLm9wdGlvbnMgJiYgZm9ybUluc3RhbmNlLm9wdGlvbnMuaWQgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVGb3Jtcy5pbmRleE9mKGZvcm1JbnN0YW5jZS5vcHRpb25zLnVybCkgPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGZvcm1JbnN0YW5jZS5vcHRpb25zLmlkO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBmb3JtSW5zdGFuY2UuZW51bWVyYXRlRmllbGROYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVkRm9ybXNbaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IGZvcm1JbnN0YW5jZSxcclxuICAgICAgICAgICAgICAgIGZpZWxkcyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgdXJsRGF0YUZvckZvcm0gPSB0aGlzLnN0YXRlLnVybERhdGEgPyBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnVybERhdGEpLmZpbHRlcigoa2V5KSA9PiBmaWVsZHMuaW5kZXhPZihrZXkpID49IDApLnJlZHVjZSgobWFwLCBrZXkpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1hcCksIHsgW2tleV06IHRoaXMuc3RhdGUudXJsRGF0YVtrZXldIH0pKSwge30pIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAodXJsRGF0YUZvckZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGZvcm1JbnN0YW5jZS5zZXRGaWVsZFZhbHVlcyh1cmxEYXRhRm9yRm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9ybUluc3RhbmNlLm9wdGlvbnMuanNvbk9ubHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5iZWZvcmVTdWJtaXRDYWxsYmFjayA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFnaW5hdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldEZvcm1EYXRhKGlkLCBvcHRpb25zLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zW2lkXS5maWVsZHMgPSBbLi4ubmV3IFNldChbLi4uT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKSwgLi4udGhpcy5jYXB0dXJlZEZvcm1zW2lkXS5maWVsZHNdKV07IC8vIE1lcmdlIG5ldyBmaWVsZHMgaWYgYW55XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QoKTsgLy8gVE9ETzogYmV0dGVyIHdheVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyUGFnaW5hdG9ySW5zdGFuY2UoZm9ybUluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKGZvcm1JbnN0YW5jZS5vcHRpb25zICYmIGZvcm1JbnN0YW5jZS5vcHRpb25zLmlkICYmIHRoaXMub3B0aW9ucy5jYXB0dXJlRm9ybXMuaW5kZXhPZihmb3JtSW5zdGFuY2Uub3B0aW9ucy5pZCkgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVkUGFnaW5hdG9ycy5wdXNoKGZvcm1JbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIGZvcm1JbnN0YW5jZS5vcHRpb25zLm9uUGFnZUNoYW5nZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZVBhZ2luYXRvcihvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdCgpOyAvLyBUT0RPOiBiZXR0ZXIgd2F5XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FwdHVyZUZvcm1zKCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1zID0gdGhpcy5zZi5nZXRJbnN0YW5jZXMoJ2Zvcm0nKSB8fCBbXTtcclxuICAgICAgICBmb3Jtcy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3JtSW5zdGFuY2UoZi5pbnN0YW5jZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGFnaW5hdG9ycyA9IHRoaXMuc2YuZ2V0SW5zdGFuY2VzKFBhZ2luYXRvci5zcGlyYWxGcmFtZXdvcmtOYW1lKSB8fCBbXTtcclxuICAgICAgICBwYWdpbmF0b3JzLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckZvcm1JbnN0YW5jZShmLmluc3RhbmNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNmLmluc3RhbmNlc0NvbnRyb2xsZXIuZXZlbnRzLm9uKCdvbkFkZEluc3RhbmNlJywgKHsgaW5zdGFuY2UsIHR5cGUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Zvcm0nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gUGFnaW5hdG9yLnNwaXJhbEZyYW1ld29ya05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYWdpbmF0b3JJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBzb3J0IGZvciB0aGlzIGZpZWxkIGlmIG5vdCB5ZXQsIG9yIGNoYW5nZXMgZGlyZWN0aW9uIGlmIGFscmVhZHkgc2FtZVxyXG4gICAgICogQHBhcmFtIGZpZWxkSWRcclxuICAgICAqL1xyXG4gICAgdHJpZ2dlclNvcnQoZmllbGRJZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRCeSA9PT0gZmllbGRJZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0RGlyID09PSBTb3J0RGlyZWN0aW9uLkFTQykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTb3J0KGZpZWxkSWQsIFNvcnREaXJlY3Rpb24uREVTQyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQoZmllbGRJZCwgU29ydERpcmVjdGlvbi5BU0MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29sdW1uSW5mby5maW5kKGNJID0+IGNJLmlkID09PSBmaWVsZElkKTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQoZmllbGQuaWQsIGZpZWxkLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRyeWluZyB0byBzb3J0IGJ5IHVuc29ydGFibGUgZmllbGQgJHtmaWVsZElkfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXRQYWdpbmF0b3IoKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3QoKTtcclxuICAgIH1cclxuICAgIHJlc2V0UGFnaW5hdG9yKCkge1xyXG4gICAgICAgIC8vIFRPRE86IGRlcGVuZGluZyBvbiBwYWdpbmF0b3IgdHlwZSBwZXJmb3JtIGRpZmZlcmVudCByZXNldCB0eXBlXHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVQYWdpbmF0b3IoeyBwYWdlOiAxIH0pO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZWRQYWdpbmF0b3JzLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGYuc2V0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBmLnNldFBhcmFtcyh0aGlzLnN0YXRlLnBhZ2luYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZm9ybVJlcXVlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgZmV0Y2hDb3VudDogdHJ1ZSxcclxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLnN0YXRlLmdldEZpbHRlcigpLFxyXG4gICAgICAgICAgICBwYWdpbmF0ZTogdGhpcy5zdGF0ZS5wYWdpbmF0ZSxcclxuICAgICAgICAgICAgc29ydDogdGhpcy5zdGF0ZS5zb3J0QnkgPyB7IFt0aGlzLnN0YXRlLnNvcnRCeV06IHRoaXMuc3RhdGUuc29ydERpciB9IDoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIHJlbW92ZSBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNhcHR1cmVkRm9ybXMpLmZvckVhY2goKGZLZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuY2FwdHVyZWRGb3Jtc1tmS2V5XS5pbnN0YW5jZTtcclxuICAgICAgICAgICAgaWYgKGYudW5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLnVubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi51bmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYudW5sb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbG9jayA9IHRoaXMuc2YuYWRkSW5zdGFuY2UoJ2xvY2snLCB0aGlzLm5vZGUsIHsgdHlwZTogdGhpcy5vcHRpb25zLmxvY2tUeXBlIH0pO1xyXG4gICAgICAgIGlmICghbG9jaykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSB0cnkgdG8gYWRkIFxcJ2xvY2tcXCcgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIGFscmVhZHkgc3RhcnRlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2FwdHVyZWRGb3JtcykuZm9yRWFjaCgoZktleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5jYXB0dXJlZEZvcm1zW2ZLZXldLmluc3RhbmNlO1xyXG4gICAgICAgICAgICBpZiAoZi5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZWRQYWdpbmF0b3JzLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGYubG9jaykge1xyXG4gICAgICAgICAgICAgICAgZi5sb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVN1Y2Nlc3MoeyBkYXRhIH0pIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldFN1Y2Nlc3MoZGF0YS5kYXRhLCBkYXRhLnBhZ2luYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi5zZXRQYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGYuc2V0UGFyYW1zKHRoaXMuc3RhdGUucGFnaW5hdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBiZWZvcmVTdWJtaXQoKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jYXB0dXJlZEZvcm1zKS5mb3JFYWNoKChmS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmNhcHR1cmVkRm9ybXNbZktleV0uaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIGlmIChmLnJlbW92ZU1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmLnJlbW92ZU1lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUVycm9yKHsgZGF0YSwgc3RhdHVzLCBzdGF0dXNUZXh0IH0pIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldEVycm9yKGRhdGEuZXJyb3IsIGRhdGEuZXJyb3JzLCB0aGlzLm9wdGlvbnMucmVzZXRPbkVycm9yKTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNhcHR1cmVkRm9ybXMpLmZvckVhY2goKGZLZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuY2FwdHVyZWRGb3Jtc1tmS2V5XS5pbnN0YW5jZTtcclxuICAgICAgICAgICAgaWYgKGYucHJvY2Vzc0Fuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgZi5wcm9jZXNzQW5zd2VyKHsgZGF0YSwgc3RhdHVzLCBzdGF0dXNUZXh0IH0sIGZhbHNlKTsgLy8gZmFsc2Ugc3RhbmRzIGZvciAnZG9udCBkaXNwbGF5IGVycm9ycyB1bnJlbGF0ZWQgdG8gZm9ybSBpbnB1dHMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkUGFnaW5hdG9ycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmLnByb2Nlc3NBbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgIGYucHJvY2Vzc0Fuc3dlcih7IGRhdGEsIHN0YXR1cywgc3RhdHVzVGV4dCB9KTsgLy8gVE9ETzogbWlnaHQgYmUgZGlmZmVyZW50IEFQSVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgZGF0YSBhbmQgZGlzcGxheSBlcnJvclxyXG4gICAgICAgIC8vIFRPRE86IHNlbmQgdmFsaWRhdGlvbiBlcnJvcnMgdG8gb3RoZXIgZm9ybXNcclxuICAgIH1cclxuICAgIHJlcXVlc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NhbnQgc3RhcnQgbmV3IHJlcXVlc3QnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0TG9hZGluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2soKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVVcmwoKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZm9ybVJlcXVlc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuc2YuYWpheC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5vcHRpb25zLnVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5vcHRpb25zLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMub3B0aW9ucy5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHJlcXVlc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5pc1NGQWpheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvcjogZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdG9wTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVSZW5kZXJlcnMoKSB7XHJcbiAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbCh0aGlzLmdyaWRzLCBbXSwgJ0dyaWRzIGFyZSBhbHJlYWR5IGluaXRpYWxpemVkJyk7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyTGlzdCA9IEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnJlbmRlcmVycykgPyB0aGlzLm9wdGlvbnMucmVuZGVyZXJzIDogW3RoaXMub3B0aW9ucy5yZW5kZXJlcnNdO1xyXG4gICAgICAgIHJlbmRlckxpc3QuZm9yRWFjaCgocmVuZGVyT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZHMucHVzaChuZXcgR3JpZFJlbmRlcmVyKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVuZGVyT3B0aW9uKSwgeyBjb2x1bW5zOiAocmVuZGVyT3B0aW9uLmNvbHVtbnMgJiYgcmVuZGVyT3B0aW9uLmNvbHVtbnMubGVuZ3RoKSA/IHJlbmRlck9wdGlvbi5jb2x1bW5zIDogdGhpcy5vcHRpb25zLmNvbHVtbnMsIHNvcnRhYmxlOiAocmVuZGVyT3B0aW9uLnNvcnRhYmxlICYmIHJlbmRlck9wdGlvbi5zb3J0YWJsZS5sZW5ndGgpID8gcmVuZGVyT3B0aW9uLnNvcnRhYmxlIDogdGhpcy5vcHRpb25zLnNvcnRhYmxlIH0pLCB0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XHJcbiAgICAgICAgICAgIGdyaWQucmVuZGVyKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VyaWFsaXplKCkge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbSA9IHRoaXMuc3RhdGUuZ2V0RmlsdGVyKCk7XHJcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMuc3RhdGUucGFnaW5hdGU7XHJcbiAgICAgICAgY29uc3Qgc29ydE9wdGlvbnMgPSB0aGlzLnN0YXRlLnNvcnRCeSA/IHsgc29ydEJ5OiB0aGlzLnN0YXRlLnNvcnRCeSwgc29ydERpcjogdGhpcy5zdGF0ZS5zb3J0RGlyIH0gOiB7fTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbSksIHBhZ2luYXRpb24pLCBzb3J0T3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBkZXNlcmlhbGl6ZSh2YWx1ZXMpIHtcclxuICAgICAgICBjb25zdCB7IHBhZ2UsIGxpbWl0LCBjaWQsIGxpZCB9ID0gdmFsdWVzO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlUGFnaW5hdG9yKHsgcGFnZTogK3BhZ2UsIGxpbWl0OiArbGltaXQsIGNpZCwgbGlkIH0pOyAvLyBUT0RPOiBza2lwIGludmFsaWQgcGFnZS9saW1pdCB2YWx1ZXNcclxuICAgICAgICBjb25zdCB7IHNvcnRCeSwgc29ydERpciB9ID0gdmFsdWVzO1xyXG4gICAgICAgIGlmIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTb3J0KHNvcnRCeSwgc29ydERpciB8fCBTb3J0RGlyZWN0aW9uLkFTQyk7IC8vIFRPRE86IHNraXBcclxuICAgICAgICB9XHJcbiAgICAgICAgWy4uLnBhZ2VQYXJhbXMsIC4uLnNvcnRQYXJhbXNdLmZvckVhY2goKHApID0+IGRlbGV0ZSB2YWx1ZXNbcF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXJsRGF0YSA9IHZhbHVlcztcclxuICAgIH1cclxuICAgIGluaXRGcm9tVXJsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWFsaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxEYXRhID0gdGhpcy5nZXRPYmplY3RGcm9tVXJsKHRoaXMuZGVmYXVsdHMsIHR5cGVvZiB0aGlzLm9wdGlvbnMuc2VyaWFsaXplID09PSAnc3RyaW5nJyA/IHRoaXMub3B0aW9ucy5zZXJpYWxpemUgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXJsRGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlcmlhbGl6ZSh1cmxEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVVybCgpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5zZXJpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRPYmplY3RUb1VybChkYXRhLCB0aGlzLmRlZmF1bHRzLCB0eXBlb2YgdGhpcy5vcHRpb25zLnNlcmlhbGl6ZSA9PT0gJ3N0cmluZycgPyB0aGlzLm9wdGlvbnMuc2VyaWFsaXplIDogJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE9iamVjdEZyb21VcmwoZGVmYXVsdHMsIHByZWZpeCA9ICcnKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gcGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCwgeyBwYXJzZU51bWJlcnM6IHRydWUsIHBhcnNlQm9vbGVhbnM6IHRydWUgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKG1hcCwgb0spID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcmVmaXggfHwgb0suaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXApLCB7IFtvSy5zdWJzdHIocHJlZml4Lmxlbmd0aCldOiAodHlwZW9mIG9ialtvS10gIT09ICd1bmRlZmluZWQnKSA/IG9ialtvS10gOiBkZWZhdWx0c1tvSy5zdWJzdHIocHJlZml4Lmxlbmd0aCldIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwdXRPYmplY3RUb1VybChvYmosIGRlZmF1bHRzLCBwcmVmaXggPSAnJykge1xyXG4gICAgICAgIGlmICghd2luZG93Lmhpc3RvcnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDYW50IHVwZGF0ZSBVUkwgd2l0aG91dCByZWxvYWQsIHNraXBwaW5nJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgobWFwLCBvSykgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqW29LXSAmJiBvYmpbb0tdICE9IGRlZmF1bHRzW29LXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWFwKSwgeyBbYCR7cHJlZml4fSR7b0t9YF06IG9ialtvS10gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBzdHJpbmdpZnlVcmwoeyB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCBxdWVyeSB9KSk7IC8vIFRPRE86IG1lcmdlIHdpdGggZXhpc3Rpbmc/XHJcbiAgICB9XHJcbn1cclxuRGF0YWdyaWQuc3BpcmFsRnJhbWV3b3JrTmFtZSA9ICdkYXRhZ3JpZCc7XHJcbkRhdGFncmlkLmRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgaWQ6ICcnLFxyXG4gICAgbG9ja1R5cGU6ICdkZWZhdWx0JyxcclxuICAgIHJlc2V0T25FcnJvcjogZmFsc2UsXHJcbiAgICBjYXB0dXJlRm9ybXM6IFtdLFxyXG4gICAgY29sdW1uczogW10sXHJcbiAgICBoZWFkZXJzOiB7fSxcclxuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QT1NULFxyXG4gICAgc29ydGFibGU6IFtdLFxyXG4gICAgdXJsOiAnJyxcclxuICAgIHNlcmlhbGl6ZTogdHJ1ZSxcclxuICAgIHVpOiB7XHJcbiAgICAgICAgY2VsbEF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgIHJvd0F0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgIHJvd0NsYXNzTmFtZTogJycsXHJcbiAgICAgICAgY2VsbENsYXNzTmFtZToge30sXHJcbiAgICAgICAgdGFibGVDbGFzc05hbWU6ICd0YWJsZSB0YWJsZS1zdHJpcHBlZCcsXHJcbiAgICAgICAgd3JhcHBlckNsYXNzTmFtZTogJ3RhYmxlLXJlc3BvbnNpdmUnXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyZXJzOiBkZWZhdWx0UmVuZGVyZXIsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERhdGFncmlkO1xyXG4iLCJpbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MSU1JVCA9IDI1O1xyXG5leHBvcnQgY2xhc3MgRGF0YWdyaWRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IERFRkFVTFRfTElNSVQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNvcnREaXI6IFNvcnREaXJlY3Rpb24uQVNDLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgZm9ybURhdGE6IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZXQgaXNMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICB9XHJcbiAgICBzdGFydExvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHN0b3BMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF0YTtcclxuICAgIH1cclxuICAgIGdldCBwYWdpbmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYWdpbmF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgdXJsRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS51cmxEYXRhO1xyXG4gICAgfVxyXG4gICAgc2V0IHVybERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXJsRGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVQYWdpbmF0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYWdpbmF0b3IgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUucGFnaW5hdG9yKSwgcGFyYW1zKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc0Vycm9yKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuc3RhdGUuZXJyb3I7XHJcbiAgICB9XHJcbiAgICBnZXQgZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmVycm9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvcnRCeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0Qnk7XHJcbiAgICB9XHJcbiAgICBnZXQgc29ydERpcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0RGlyO1xyXG4gICAgfVxyXG4gICAgc2V0U3VjY2VzcyhkYXRhLCBwYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdG9yKHBhZ2luYXRpb24pO1xyXG4gICAgfVxyXG4gICAgc2V0RXJyb3IoZXJyb3IsIGVycm9ycyA9IHt9LCByZXNldERhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChyZXNldERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICB0aGlzLnN0YXRlLmVycm9ycyA9IGVycm9ycztcclxuICAgIH1cclxuICAgIHNldFNvcnQoZmllbGQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc29ydEJ5ID0gZmllbGQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zb3J0RGlyID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0Rm9ybURhdGEoZm9ybUlkLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb3JtRGF0YVtmb3JtSWRdID0gZGF0YTtcclxuICAgIH1cclxuICAgIGdldEZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZm9ybURhdGEpLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXYpLCB0aGlzLnN0YXRlLmZvcm1EYXRhW2tleV0pO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnVybERhdGEpLCBmb3Jtcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuLy8gaW1wb3J0ICogYXMgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XHJcbmltcG9ydCB7IERFRkFVTFRfTElNSVQgfSBmcm9tICcuL0RhdGFncmlkU3RhdGUnO1xyXG4vLyBpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmV4cG9ydCB2YXIgUGFnaW5hdG9yVHlwZTtcclxuKGZ1bmN0aW9uIChQYWdpbmF0b3JUeXBlKSB7XHJcbiAgICBQYWdpbmF0b3JUeXBlW1wicGFnZXNcIl0gPSBcInBhZ2VzXCI7XHJcbiAgICBQYWdpbmF0b3JUeXBlW1wiaW5maW5pdGVcIl0gPSBcImluZmluaXRlXCI7XHJcbn0pKFBhZ2luYXRvclR5cGUgfHwgKFBhZ2luYXRvclR5cGUgPSB7fSkpO1xyXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yIGV4dGVuZHMgc2YuY29yZS5CYXNlRE9NQ29uc3RydWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc2YsIG5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc1RvR3JhYiA9IHtcclxuICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBQYWdpbmF0b3IuZGVmYXVsdE9wdGlvbnMuaWQsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnaWQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zLnR5cGUsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnZGF0YS10eXBlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmV0Y2hDb3VudDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucy5mZXRjaENvdW50LFxyXG4gICAgICAgICAgICAgICAgZG9tQXR0cjogJ2RhdGEtZmV0Y2gtY291bnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmZXRjaENvdW50T25jZToge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucy5mZXRjaENvdW50T25jZSxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLWZldGNoLWNvdW50LW9uY2UnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBQYWdpbmF0b3IuZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbGltaXQ6IERFRkFVTFRfTElNSVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluaXQoc2YsIG5vZGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zKSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNmLnJlbW92ZUluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSB0cnkgdG8gcmVtb3ZlIFxcJ2xvY2tcXCcgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBzdGFydGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxvY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9ja1R5cGUgfHwgdGhpcy5vcHRpb25zLmxvY2tUeXBlID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XHJcbiAgICAgICAgaWYgKCFsb2NrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IHRyeSB0byBhZGQgXFwnbG9ja1xcJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXMocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSksIHBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIGhhc1BhZ2VzKCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5zdGF0ZS5wYWdlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5zdGF0ZS5saW1pdCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcbiAgICBoYXNUb3RhbCgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuc3RhdGUuY291bnQgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgfVxyXG4gICAgaGFzTGltaXRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5vcHRpb25zLmxpbWl0T3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVBhZ2VMaXN0KCkge1xyXG4gICAgICAgIGNvbnN0IGV4dGVuZEN1cnJlbnQgPSAxO1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnN0YXRlLnBhZ2U7XHJcbiAgICAgICAgY29uc3QgcGFnZXNDb3VudCA9IHRoaXMuaGFzVG90YWwoKSA/IE1hdGguY2VpbCh0aGlzLnN0YXRlLmNvdW50IC8gdGhpcy5zdGF0ZS5saW1pdCkgOiBwYWdlO1xyXG4gICAgICAgIGNvbnN0IGhhc05leHQgPSB0aGlzLmhhc1RvdGFsKCkgPyAocGFnZSA8IHBhZ2VzQ291bnQpIDogdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYXNQcmV2aW91cyA9IHBhZ2UgPiAxO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSYW5nZSA9IFtNYXRoLm1heChwYWdlIC0gZXh0ZW5kQ3VycmVudCwgMSksIE1hdGgubWluKHBhZ2UgKyBleHRlbmRDdXJyZW50LCBwYWdlc0NvdW50KV07XHJcbiAgICAgICAgY29uc3Qgc3RhcnRSYW5nZSA9IFsxLCBNYXRoLm1pbihleHRlbmRDdXJyZW50ICsgMSwgcGFnZXNDb3VudCldO1xyXG4gICAgICAgIGNvbnN0IGVuZFJhbmdlID0gW01hdGgubWF4KHBhZ2VzQ291bnQgLSBleHRlbmRDdXJyZW50LCAxKSwgcGFnZXNDb3VudF07XHJcbiAgICAgICAgY29uc3QgcGFnZXMgPSBbXTtcclxuICAgICAgICBsZXQgaSA9IDE7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBwYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhZ2U6IGksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHtpfWAsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHBhZ2UgPT09IGksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBzdGFydFJhbmdlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSByZWFjaGVkIGxhc3QgcGFnZSBmb3Igc3RhcnQgcmFuZ2VcclxuICAgICAgICAgICAgICAgIGlmIChpICsgMSA8IGN1cnJlbnRSYW5nZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHBhZ2UgaXMgbW9yZSB0aGFuIDEgcGFnZSBmdXJ0aGVyIGZyb20gbmV4dCBwYWdlIGluIHJhbmdlLCBhZGQgZWxsaXBzaXMgYW5kIGp1bXBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgLi4uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcclxuICAgICAgICAgICAgICAgICAgICBpID0gY3VycmVudFJhbmdlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpID49IGN1cnJlbnRSYW5nZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgcmVhY2hlZCBsYXN0IHBhZ2UgZm9yIGN1cnJlbnQgcGFnZSByYW5nZVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgZW5kUmFuZ2VbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBwYWdlIGlzIG1vcmUgdGhhbiAxIHBhZ2UgZnVydGhlciBmcm9tIG5leHQgcGFnZSBpbiByYW5nZSwgYWRkIGVsbGlwc2lzIGFuZCBqdW1wXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYC4uLmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IGVuZFJhbmdlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkgKz0gMTtcclxuICAgICAgICB9IHdoaWxlIChpIDw9IHBhZ2VzQ291bnQpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhZ2VzLFxyXG4gICAgICAgICAgICBoYXNOZXh0LFxyXG4gICAgICAgICAgICBoYXNQcmV2aW91cyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0TGltaXQobGltaXQpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmxpbWl0ID0gbGltaXQ7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUGFnZUNoYW5nZSA/IHRoaXMub3B0aW9ucy5vblBhZ2VDaGFuZ2UodGhpcy5zdGF0ZSkgOiAxO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQYWdlKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5vblBhZ2VDaGFuZ2UgPyB0aGlzLm9wdGlvbnMub25QYWdlQ2hhbmdlKHRoaXMuc3RhdGUpIDogMTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb3VudGVyRGl2LmNsYXNzTmFtZSA9ICdjb2wtMTIgY29sLWxnLTQnO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1BhZ2VzKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzVG90YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlckRpdi5pbm5lckhUTUwgPSBgU2hvd2luZyAkeyh0aGlzLnN0YXRlLnBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUubGltaXQgKyAxfSB0byAke3RoaXMuc3RhdGUucGFnZSAqIHRoaXMuc3RhdGUubGltaXR9IG9mICR7dGhpcy5zdGF0ZS5jb3VudH0gZW50cmllc2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyRGl2LmlubmVySFRNTCA9IGBTaG93aW5nICR7KHRoaXMuc3RhdGUucGFnZSAtIDEpICogdGhpcy5zdGF0ZS5saW1pdCArIDF9IHRvICR7dGhpcy5zdGF0ZS5wYWdlICogdGhpcy5zdGF0ZS5saW1pdH0gZW50cmllc2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGltaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaW1pdERpdi5jbGFzc05hbWUgPSAnY29sLTQgY29sLW1kLTIgY29sLWxnLTInO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0xpbWl0T3B0aW9ucygpKSB7XHJcbiAgICAgICAgICAgIGxpbWl0RGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbC1zbSBjb2wtYXV0b1wiPlNob3c8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJsaW1pdFwiIGNsYXNzPVwiY3VzdG9tLXNlbGVjdCBjdXN0b20tc2VsZWN0LXNtIGNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gbGltaXREaXYucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5saW1pdE9wdGlvbnMuZm9yRWFjaCgob3B0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGAke29wdH1gO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IGAke29wdH1gO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdCA9PT0gdGhpcy5zdGF0ZS5saW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxlY3QudmFsdWUgPSBgJHt0aGlzLnN0YXRlLmxpbWl0fWA7XHJcbiAgICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMaW1pdCgrc2VsZWN0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBhZ2VzRGl2LmNsYXNzTmFtZSA9ICdjb2wtOCBjb2wtbWQtMTAgY29sLWxnLTYnO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1BhZ2VzKCkpIHtcclxuICAgICAgICAgICAgcGFnZXNEaXYuaW5uZXJIVE1MID0gYDx1bCBjbGFzcz1cInBhZ2luYXRpb24gcGFnaW5hdGlvbi1zbSBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTBcIj5gO1xyXG4gICAgICAgICAgICBjb25zdCB1bCA9IHBhZ2VzRGl2LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5nZW5lcmF0ZVBhZ2VMaXN0KCk7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IHBhZ2VJbmZvLmhhc1ByZXZpb3VzID8gJ3BhZ2UtaXRlbSBwcmV2aW91cycgOiAncGFnZS1pdGVtIHByZXZpb3VzIGRpc2FibGVkJztcclxuICAgICAgICAgICAgICAgIGlmIChwYWdlSW5mby5oYXNQcmV2aW91cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRQYWdlKHRoaXMuc3RhdGUucGFnZSAtIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicGFnZS1saW5rXCI+wqs8L2E+YDtcclxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYWdlSW5mby5wYWdlcy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgICBsaS5jbGFzc05hbWUgPSBwLmFjdGl2ZSA/ICdwYWdlLWl0ZW0gYWN0aXZlJyA6ICdwYWdlLWl0ZW0nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHAucGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRQYWdlKHAucGFnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiI1wiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicGFnZS1saW5rXCI+JHtwLnRleHR9PC9hPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgPGEgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj4ke3AudGV4dH08L2E+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IHBhZ2VJbmZvLmhhc05leHQgPyAncGFnZS1pdGVtIG5leHQnIDogJ3BhZ2UtaXRlbSBuZXh0IGRpc2FibGVkJztcclxuICAgICAgICAgICAgICAgIGlmIChwYWdlSW5mby5oYXNOZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNldFBhZ2UodGhpcy5zdGF0ZS5wYWdlICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIjXCIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj7CuzwvYT5gO1xyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7IC8vIFRPRE86IGRvbnQgcmVyZW5kZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy5jbGFzc05hbWUgfHwgJyc7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY291bnRlckRpdik7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQobGltaXREaXYpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHBhZ2VzRGl2KTtcclxuICAgIH1cclxufVxyXG5QYWdpbmF0b3Iuc3BpcmFsRnJhbWV3b3JrTmFtZSA9ICdkYXRhZ3JpZC1wYWdpbmF0b3InO1xyXG5QYWdpbmF0b3IuZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBpZDogJycsXHJcbiAgICBsb2NrVHlwZTogJ25vbmUnLFxyXG4gICAgZmV0Y2hDb3VudDogdHJ1ZSxcclxuICAgIGZldGNoQ291bnRPbmNlOiB0cnVlLFxyXG4gICAgdHlwZTogUGFnaW5hdG9yVHlwZS5wYWdlcyxcclxuICAgIGNsYXNzTmFtZTogJ3JvdyBuby1ndXR0ZXJzIGFsaWduLWl0ZW1zLWNlbnRlciBtLTMnLFxyXG4gICAgbGltaXRPcHRpb25zOiBbMTAsIDI1LCA1MCwgMTAwXSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yO1xyXG4iLCJleHBvcnQgdmFyIFNvcnREaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoU29ydERpcmVjdGlvbikge1xyXG4gICAgU29ydERpcmVjdGlvbltcIkFTQ1wiXSA9IFwiYXNjXCI7XHJcbiAgICBTb3J0RGlyZWN0aW9uW1wiREVTQ1wiXSA9IFwiZGVzY1wiO1xyXG59KShTb3J0RGlyZWN0aW9uIHx8IChTb3J0RGlyZWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBSZXF1ZXN0TWV0aG9kO1xyXG4oZnVuY3Rpb24gKFJlcXVlc3RNZXRob2QpIHtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJHRVRcIl0gPSBcIkdFVFwiO1xyXG4gICAgUmVxdWVzdE1ldGhvZFtcIlBPU1RcIl0gPSBcIlBPU1RcIjtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJERUxFVEVcIl0gPSBcIkRFTEVURVwiO1xyXG4gICAgUmVxdWVzdE1ldGhvZFtcIlBVVFwiXSA9IFwiUFVUXCI7XHJcbiAgICBSZXF1ZXN0TWV0aG9kW1wiUEFUQ0hcIl0gPSBcIlBBVENIXCI7XHJcbn0pKFJlcXVlc3RNZXRob2QgfHwgKFJlcXVlc3RNZXRob2QgPSB7fSkpO1xyXG5leHBvcnQgY29uc3QgQ1VSU09SX0lEX0ZJRUxEID0gJ2NpZCc7XHJcbmV4cG9ydCBjb25zdCBMQVNUX0lEX0ZJRUxEID0gJ2xpZCc7XHJcbmV4cG9ydCBjb25zdCBwYWdlUGFyYW1zID0gWydwYWdlJywgJ2xpbWl0JywgQ1VSU09SX0lEX0ZJRUxELCBMQVNUX0lEX0ZJRUxEXTtcclxuZXhwb3J0IGNvbnN0IHNvcnRQYXJhbXMgPSBbJ3NvcnRCeScsICdzb3J0RGlyJ107XHJcbiIsImltcG9ydCBzZiBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XHJcbmltcG9ydCBEYXRhR3JpZCBmcm9tICcuL0RhdGFncmlkJztcclxuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcic7XHJcbmltcG9ydCB7IHNpbXBsZUNlbGxGb3JtYXR0ZXIgfSBmcm9tICcuL3JlbmRlci9wcmVtYWRlL3NpbXBsZUNlbGxGb3JtYXR0ZXInO1xyXG5leHBvcnQgY29uc3QgcmVuZGVycyA9IHtcclxuICAgIHNpbXBsZUNlbGxGb3JtYXR0ZXIsXHJcbn07XHJcbndpbmRvdy5TRkRhdGFncmlkVG9vbHMgPSByZW5kZXJzOyAvLyBUT0RPOiBIb3cgdG8gZXhwb3J0IHRoYXQgcHJvcGVybHk/XHJcbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKERhdGFHcmlkLCAnc2YtanMtZGF0YWdyaWQnKTtcclxuc2YucmVnaXN0ZXJJbnN0YW5jZVR5cGUoUGFnaW5hdG9yLCAnc2YtanMtZGF0YWdyaWQtcGFnaW5hdG9yJyk7XHJcbmV4cG9ydCBkZWZhdWx0IERhdGFHcmlkOyAvLyBFUzYgZGVmYXVsdCBleHBvcnQgd2lsbCBub3QgZXhwb3NlIHVzIGFzIGdsb2JhbFxyXG4iLCJpbXBvcnQgeyBhcHBseUF0dHJyaWJ1dGVzLCBub3JtYWxpemVDb2x1bW5zIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0Qm9keVdyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRCb2R5V3JhcHBlcic7XHJcbmltcG9ydCB7IGRlZmF1bHRGb290ZXJXcmFwcGVyIH0gZnJvbSAnLi9kZWZhdWx0Rm9vdGVyV3JhcHBlcic7XHJcbmltcG9ydCB7IGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXIgfSBmcm9tICcuL2RlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBkZWZhdWx0SGVhZGVyV3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdEhlYWRlcldyYXBwZXInO1xyXG5pbXBvcnQgeyBkZWZhdWx0Um93Q2VsbFJlbmRlcmVyIH0gZnJvbSAnLi9kZWZhdWx0Um93UmVuZGVyZXInO1xyXG5pbXBvcnQgeyBkZWZhdWx0Um93V3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdFJvd1dyYXBwZXInO1xyXG5pbXBvcnQgeyBkZWZhdWx0VGFibGVXcmFwcGVyIH0gZnJvbSAnLi9kZWZhdWx0VGFibGVXcmFwcGVyJztcclxuZXhwb3J0IGNsYXNzIEdyaWRSZW5kZXJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCByb290KSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgICAgIHRoaXMuY29sdW1uSW5mbyA9IG5vcm1hbGl6ZUNvbHVtbnModGhpcy5vcHRpb25zLmNvbHVtbnMsIHRoaXMub3B0aW9ucy5zb3J0YWJsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2x1bW5JbmZvKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc2YtZGF0YWdyaWQtd3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5vcHRpb25zLnVpLndyYXBwZXJDbGFzc05hbWUgfHwgJycpO1xyXG4gICAgICAgIHRoaXMucm9vdC5ub2RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMucm9vdC5ub2RlLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XHJcbiAgICAgICAgY29uc3QgdGFibGVSZW5kZXJlciA9IHRoaXMub3B0aW9ucy50YWJsZVdyYXBwZXIgfHwgZGVmYXVsdFRhYmxlV3JhcHBlcjtcclxuICAgICAgICB0aGlzLnRhYmxlRWwgPSB0YWJsZVJlbmRlcmVyKHRoaXMud3JhcHBlciwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICAgIGFwcGx5QWRkaXRpb25hbENlbGxBdHRyaWJ1dGVzKGVsLCBjb2x1bW4sIG9wdGlvbnMsIHN0YXRlLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNlbGxNZXRhID0ge1xyXG4gICAgICAgICAgICBpZDogY29sdW1uLmlkLFxyXG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIC8vIHJvd1NlbGVjdGVkOiAoc3RhdGUgYXMgYW55KS5pc1NlbGVjdGVkKGluZGV4KSxcclxuICAgICAgICAgICAgcm93U2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXHJcbiAgICAgICAgICAgIGl0ZW06IHN0YXRlLmRhdGFbaW5kZXhdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudWkuY2VsbENsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudWkuY2VsbENsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljID0gb3B0aW9ucy51aS5jZWxsQ2xhc3NOYW1lW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwZWNpZmljID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHNwZWNpZmljKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoc3BlY2lmaWMoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudWkuY2VsbEF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpYyA9IG9wdGlvbnMudWkuY2VsbEF0dHJpYnV0ZXNbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgc3BlY2lmaWMoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIHNwZWNpZmljKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHBseUFkZGl0aW9uYWxIZWFkZXJDZWxsQXR0cmlidXRlcyhlbCwgY29sdW1uLCBvcHRpb25zLCBzdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGNlbGxNZXRhID0ge1xyXG4gICAgICAgICAgICBpZDogY29sdW1uLmlkLFxyXG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxyXG4gICAgICAgICAgICBpdGVtOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChvcHRpb25zLnVpLmhlYWRlckNlbGxDbGFzc05hbWUoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljID0gb3B0aW9ucy51aS5oZWFkZXJDZWxsQ2xhc3NOYW1lW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwZWNpZmljID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHNwZWNpZmljKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoc3BlY2lmaWMoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmhlYWRlckNlbGxBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBvcHRpb25zLnVpLmhlYWRlckNlbGxBdHRyaWJ1dGVzKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpYyA9IG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXNbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgc3BlY2lmaWMoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIHNwZWNpZmljKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoc3RhdGUpIHtcclxuICAgICAgICAvLyBSZW5kZXIgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyUmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMuaGVhZGVyV3JhcHBlciB8fCBkZWZhdWx0SGVhZGVyV3JhcHBlcjtcclxuICAgICAgICBpZiAodGhpcy5oZWFkZXJFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5oZWFkZXJFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVhZGVyRWwgPSBoZWFkZXJSZW5kZXJlcih0aGlzLnRhYmxlRWwsIHRoaXMub3B0aW9ucywgc3RhdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlckVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlckVsKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uSW5mby5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uSW5mby5mb3JFYWNoKChjSSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJDZWxsUmVuZGVyZXIgPSAodGhpcy5vcHRpb25zLmhlYWRlckxpc3QgfHwge30pW2NJLmlkXSB8fCBkZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBoZWFkZXJDZWxsUmVuZGVyZXIoY0ksIHRoaXMub3B0aW9ucywgc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlBZGRpdGlvbmFsSGVhZGVyQ2VsbEF0dHJpYnV0ZXMobm9kZSwgY0ksIHRoaXMub3B0aW9ucywgc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW5kZXIgYm9keVxyXG4gICAgICAgIGlmICh0aGlzLmJvZHlFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5ib2R5RWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBib2R5UmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMuYm9keVdyYXBwZXIgfHwgZGVmYXVsdEJvZHlXcmFwcGVyO1xyXG4gICAgICAgIHRoaXMuYm9keUVsID0gYm9keVJlbmRlcmVyKHRoaXMudGFibGVFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9keUVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5hcHBlbmRDaGlsZCh0aGlzLmJvZHlFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMub3B0aW9ucy5yb3dXcmFwcGVyIHx8IGRlZmF1bHRSb3dXcmFwcGVyO1xyXG4gICAgICAgICAgICBzdGF0ZS5kYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHJvdyh0aGlzLmJvZHlFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5JbmZvLmZvckVhY2goKGNJKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93Q2VsbFJlbmRlcmVyID0gKHRoaXMub3B0aW9ucy5jZWxscyB8fCB7fSlbY0kuaWRdIHx8IGRlZmF1bHRSb3dDZWxsUmVuZGVyZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJvd0NlbGxSZW5kZXJlcihjSSwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlBZGRpdGlvbmFsQ2VsbEF0dHJpYnV0ZXMobm9kZSwgY0ksIHRoaXMub3B0aW9ucywgc3RhdGUsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVuZGVyIGZvb3RlclxyXG4gICAgICAgIGlmICh0aGlzLmZvb3RlckVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5yZW1vdmVDaGlsZCh0aGlzLmZvb3RlckVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZm9vdGVyUmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMuZm9vdGVyV3JhcHBlciB8fCBkZWZhdWx0Rm9vdGVyV3JhcHBlcjtcclxuICAgICAgICB0aGlzLmZvb3RlckVsID0gZm9vdGVyUmVuZGVyZXIodGhpcy50YWJsZUVsLCB0aGlzLm9wdGlvbnMsIHN0YXRlKTtcclxuICAgICAgICBpZiAodGhpcy5mb290ZXJFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwuYXBwZW5kQ2hpbGQodGhpcy5mb290ZXJFbCk7XHJcbiAgICAgICAgICAgIC8vIFdlIGFzc3VtZSBmb290ZXIgcmVuZGVyIGhhbmRsZXMgYWxsIGRhdGEgc28gbm8gYWRkaXRpb25hbCByZW5kZXJzIGhlcmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRCb2R5V3JhcHBlciA9IChub2RlLCBvcHRpb25zLCBzdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gICAgbm9kZS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICBpZiAoc3RhdGUuaGFzRXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvclRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBjb25zdCBlcnJvclRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBlcnJvclRkLmNvbFNwYW4gPSBvcHRpb25zLmNvbHVtbnMubGVuZ3RoO1xyXG4gICAgICAgIGVycm9yVGQuaW5uZXJUZXh0ID0gc3RhdGUuZXJyb3JNZXNzYWdlIHx8ICdVbmtub3duIEVycm9yJztcclxuICAgICAgICBlcnJvclRkLmNsYXNzTGlzdC5hZGQoJ3NmLXRhYmxlX19lcnJvcicpO1xyXG4gICAgICAgIGVycm9yVHIuYXBwZW5kQ2hpbGQoZXJyb3JUZCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZXJyb3JUcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGF0ZS5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5VHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5VGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGVtcHR5VGQuY29sU3BhbiA9IG9wdGlvbnMuY29sdW1ucy5sZW5ndGg7XHJcbiAgICAgICAgZW1wdHlUZC5pbm5lckhUTUwgPSAnTm8gRGF0YSc7XHJcbiAgICAgICAgZW1wdHlUZC5jbGFzc0xpc3QuYWRkKCdzZi10YWJsZV9fZW1wdHknKTtcclxuICAgICAgICBlbXB0eVRyLmFwcGVuZENoaWxkKGVtcHR5VGQpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGVtcHR5VHIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdEZvb3RlcldyYXBwZXIgPSAobm9kZSwgb3B0aW9ucywgc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn07XHJcbiIsImltcG9ydCB7IFNvcnREaXJlY3Rpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlYWRlckNlbGxSZW5kZXJlciA9IChjb2x1bW4sIG9wdGlvbnMsIHN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gW107XHJcbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdzZi10YWJsZV9fc29ydCcpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wYXJlbnQudHJpZ2dlclNvcnQoY29sdW1uLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS5zb3J0QnkgPT09IGNvbHVtbi5pZCkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5zb3J0RGlyID09PSBTb3J0RGlyZWN0aW9uLkFTQykge1xyXG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3NmLXRhYmxlX19zb3J0X2FzYycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdzZi10YWJsZV9fc29ydF9kZXNjJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCIke2NsYXNzZXMuam9pbignICcpfVwiPiR7Y29sdW1uLnRpdGxlfTwvZGl2PmA7XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0SGVhZGVyV3JhcHBlciA9IChub2RlLCBvcHRpb25zLCBzdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgbm9kZS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBlbC5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0UmVuZGVyZXIgPSB7XHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIHNvcnRhYmxlOiBbXSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzaWMgY2xhc3MvYXR0cmlidXRlIHByb3BlcnRpZXNcclxuICAgICAqL1xyXG4gICAgdWk6IHtcclxuICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lOiAndGFibGUtcmVzcG9uc2l2ZScsXHJcbiAgICAgICAgdGFibGVDbGFzc05hbWU6ICd0YWJsZSB0YWJsZS1zdHJpcGVkJyxcclxuICAgICAgICBjZWxsQ2xhc3NOYW1lOiB7fSxcclxuICAgICAgICByb3dDbGFzc05hbWU6ICcnLFxyXG4gICAgICAgIGNlbGxBdHRyaWJ1dGVzOiBjZWxsTWV0YSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvd0F0dHJpYnV0ZXM6IHJvd2xNZXRhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0Um93Q2VsbFJlbmRlcmVyID0gKGNvbHVtbiwgb3B0aW9ucywgc3RhdGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSBzdGF0ZS5kYXRhW2luZGV4XVtjb2x1bW4uaWRdO1xyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdFJvd1dyYXBwZXIgPSAobm9kZSwgb3B0aW9ucywgc3RhdGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIHJldHVybiBlbDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRUYWJsZVdyYXBwZXIgPSAobm9kZSwgb3B0aW9ucykgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gb3B0aW9ucy51aS50YWJsZUNsYXNzTmFtZSB8fCAnJztcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgc2ltcGxlQ2VsbEZvcm1hdHRlciA9IChmb3JtYXRGdW5jdGlvbiA9ICh2KSA9PiAodiA/IHYudG9TdHJpbmcoKSA6ICcnKSwgdGFnTmFtZSA9ICd0ZCcpID0+IHtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gKGNvbHVtbiwgb3B0aW9ucywgc3RhdGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGZvcm1hdEZ1bmN0aW9uKHN0YXRlLmRhdGFbaW5kZXhdW2NvbHVtbi5pZF0sIHN0YXRlLmRhdGFbaW5kZXhdKTtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHJlbmRlcmVyO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplQ29sdW1ucyA9IChjb2x1bW5zLCBzb3J0YWJsZSkgPT4ge1xyXG4gICAgY29uc3Qgc0xpc3QgPSBzb3J0YWJsZS5tYXAoKHMpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGZpZWxkOiBzLCBkaXJlY3Rpb246IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkO1xyXG4gICAgICAgIGxldCB0aXRsZTtcclxuICAgICAgICBsZXQgc29ydERpcjtcclxuICAgICAgICBsZXQgc29ydGFibGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIGMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlkID0gYztcclxuICAgICAgICAgICAgdGl0bGUgPSBjO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gU29ydERpcmVjdGlvbi5BU0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGMuaWQ7XHJcbiAgICAgICAgICAgIHRpdGxlID0gYy50aXRsZSB8fCBjLmlkO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gYy5zb3J0RGlyIHx8IFNvcnREaXJlY3Rpb24uQVNDO1xyXG4gICAgICAgICAgICBzb3J0YWJsZSA9ICEhYy5zb3J0RGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzb3J0ID0gc0xpc3QuZmluZCgocykgPT4gKHMuZmllbGQgPT09IGlkKSk7XHJcbiAgICAgICAgaWYgKHNvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc29ydC5kaXJlY3Rpb24gfHwgc29ydERpcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBzb3J0RGlyLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFwcGx5QXR0cnJpYnV0ZXMgPSAobm9kZSwgYXR0cnMpID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fOyIsImNvbnN0IGNvcmUgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpO1xuXG5yZXF1aXJlKCcuL2lucHV0Jyk7XG5cbnJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9sb2NrZXInKTtcbnJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9mb3JtJyk7XG5yZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvZGF0YWdyaWQnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmU7XG4iLCJcbmNvbnN0IHNmID0gcmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2NvcmUnKTtcbmNvbnN0IElucHV0ID0gcmVxdWlyZSgnLi9pbnB1dCcpLmRlZmF1bHQ7XG5cbnNmLmluc3RhbmNlc0NvbnRyb2xsZXIucmVnaXN0ZXJJbnN0YW5jZVR5cGUoSW5wdXQsICdzZi1qcy1pbnB1dCcpO1xubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDsgLy8gRVM2IGRlZmF1bHQgZXhwb3J0IHdpbGwgbm90IGV4cG9zZSB1cyBhcyBnbG9iYWxcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbmltcG9ydCBjb3JlIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcblxuY29uc3QgSW5wdXQgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5fY29uc3RydWN0KHNmLCBub2RlLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogQGxlbmRzIHNmLkZvcm0ucHJvdG90eXBlXG4gKi9cbklucHV0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY29yZS5jb3JlLkJhc2VET01Db25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG4vKipcbiAqIE5hbWUgdG8gcmVnaXN0ZXJcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbklucHV0LnByb3RvdHlwZS5uYW1lID0gJ2lucHV0JztcblxuSW5wdXQucHJvdG90eXBlLl9jb25zdHJ1Y3QgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5pbml0KHNmLCBub2RlLCBvcHRpb25zKTsgLy8gY2FsbCBwYXJlbnRcblxuICBpZiAob3B0aW9ucykge1xuICAgIC8vIGlmIHdlIHBhc3Mgb3B0aW9ucyBleHRlbmQgYWxsIG9wdGlvbnMgYnkgcGFzc2VkIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMgPSBzZi50b29scy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIEVsZW1lbnRzXG4gIHRoaXMuZWxzID0ge1xuICAgIG5vZGUsXG4gIH07XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5wcmVmaXgpIHtcbiAgICB0aGlzLnNldFByZWZpeCgpO1xuICAgIHRoaXMuYWRkUHJlZml4RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucGF0dGVybikge1xuICAgIHRoaXMuc2V0dXBQYXR0ZXJuKCk7XG4gICAgdGhpcy5hZGRQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIEBvdmVycmlkZVxuICogQGluaGVyaXREb2NcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbklucHV0LnByb3RvdHlwZS5vcHRpb25zVG9HcmFiID0ge1xuICAvKipcbiAgICAgKiAgUGF0dGVybiBvZiBpbnB1dFxuICAgICAqL1xuICBwYXR0ZXJuOiB7XG4gICAgZG9tQXR0cjogJ2RhdGEtcGF0dGVybicsXG4gIH0sXG4gIC8qKlxuICAgICAqICBQcmVmaXggb2YgIGlucHV0XG4gICAgICovXG4gIHByZWZpeDoge1xuICAgIGRvbUF0dHI6ICdkYXRhLXByZWZpeCcsXG4gIH0sXG59O1xuXG4vKipcbiAqIFNldHVwIHBhdHRlcm5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5JbnB1dC5wcm90b3R5cGUuaXNWYWxpZFBhdHRlcm4gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVscy5ub2RlLnZhbHVlLm1hdGNoKHRoaXMucGF0dGVybik7XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuYWRkUGF0dGVybkV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcblxuICB0aGlzLl9pbnB1dEtleVByZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhhdC5lbHMubm9kZTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoYXQuZ2V0Q3Vyc29yUG9zaXRpb24oKTtcblxuICAgIGlmIChjaGFyLmxlbmd0aCA+IDApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb2Zmc2V0ID0gMTtcbiAgICAgIGZvciAobGV0IGkgPSBwb3NpdGlvbjsgaSA8IHZhbHVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGF0LmZvcm1hdENoYXJhY3RlcnMuaW5kZXhPZih2YWx1ZVtpXSkgIT09IC0xKSB7XG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZnV0dXJlVmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgcG9zaXRpb24gKyBvZmZzZXQgLSAxKSArIGNoYXIgKyB2YWx1ZS5zdWJzdHJpbmcocG9zaXRpb24gKyBvZmZzZXQsIHZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIGlmICghZnV0dXJlVmFsdWUubWF0Y2godGhhdC5wYXR0ZXJuV2l0aEVtcHR5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGF0LmVscy5ub2RlLnZhbHVlID0gZnV0dXJlVmFsdWU7XG4gICAgICB0aGF0LnNldEN1cnNvclBvc2l0aW9uKHBvc2l0aW9uICsgb2Zmc2V0KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuX2lucHV0S2V5UHJlc3MpO1xuXG4gIHRoaXMuX2lucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhhdC5lbHMubm9kZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgICAgIHRoYXQuZWxzLm5vZGUudmFsdWUgPSB0aGF0LnBhdHRlcm5TdHJpbmcucmVwbGFjZSgvW15cXC1cXChcXClcXFtcXF1cXDpcXC5cXCxcXCRcXCVcXEBcXCBcXC9dL2csICdfJyk7XG4gICAgICAgIHRoYXQuc2V0Q3Vyc29yUG9zaXRpb24oMCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH07XG4gIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9pbnB1dEZvY3VzKTtcblxuICB0aGlzLl9pbnB1dEtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGF0LmVscy5ub2RlO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhhdC5nZXRDdXJzb3JQb3NpdGlvbigpO1xuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDggfHwgZXZlbnQua2V5Q29kZSA9PT0gNDYpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSBwb3NpdGlvbiAtIDE7IGkgPiAwOyBpIC09IDEpIHtcbiAgICAgICAgaWYgKHRoYXQuZm9ybWF0Q2hhcmFjdGVycy5pbmRleE9mKHZhbHVlW2ldKSAhPT0gLTEpIHtcbiAgICAgICAgICBvZmZzZXQgLT0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmdXR1cmVWYWx1ZSA9IGAke3ZhbHVlLnN1YnN0cmluZygwLCBwb3NpdGlvbiArIG9mZnNldCAtIDEpfV8ke3ZhbHVlLnN1YnN0cmluZyhwb3NpdGlvbiArIG9mZnNldCwgdmFsdWUubGVuZ3RoKX1gO1xuXG4gICAgICBpZiAoIWZ1dHVyZVZhbHVlLm1hdGNoKHRoYXQucGF0dGVybldpdGhFbXB0eSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coZnV0dXJlVmFsdWUpO1xuICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9IGZ1dHVyZVZhbHVlO1xuICAgICAgdGhhdC5zZXRDdXJzb3JQb3NpdGlvbihwb3NpdGlvbiArIG9mZnNldCAtIDEpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gaWYgKGNoYXIubWF0Y2goL1xcVy8pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faW5wdXRLZXlEb3duKTtcblxuICB0aGlzLl9pbnB1dEJsdXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGF0LmVscy5ub2RlLnZhbHVlLm1hdGNoKHRoYXQucGF0dGVybikpIHtcbiAgICAgIHRoYXQuZWxzLm5vZGUudmFsdWUgPSAnJztcbiAgICB9XG4gIH07XG4gIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2lucHV0Qmx1cik7XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuZ2V0Q3Vyc29yUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwb3NpdGlvbiA9IDA7XG5cbiAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgIHRoaXMuZWxzLm5vZGUuZm9jdXMoKTtcblxuICAgIGNvbnN0IHNlbGVjdFJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG5cbiAgICBzZWxlY3RSYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIC10aGlzLmVscy5ub2RlLnZhbHVlLmxlbmd0aCk7XG5cbiAgICBwb3NpdGlvbiA9IHNlbGVjdFJhbmdlLnRleHQubGVuZ3RoO1xuICB9IGVsc2UgaWYgKHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uU3RhcnQgfHwgdGhpcy5lbHMubm9kZS5zZWxlY3Rpb25TdGFydCA9PT0gJzAnKSB7XG4gICAgcG9zaXRpb24gPSB0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0O1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufTtcblxuSW5wdXQucHJvdG90eXBlLnNldEN1cnNvclBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gIGlmICh0aGlzLmVscy5ub2RlLmNyZWF0ZVRleHRSYW5nZSkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5lbHMubm9kZS5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICByYW5nZS5tb3ZlKCdjaGFyYWN0ZXInLCBwb3NpdGlvbik7XG4gICAgcmFuZ2Uuc2VsZWN0KCk7XG4gIH0gZWxzZSBpZiAodGhpcy5lbHMubm9kZS5zZWxlY3Rpb25TdGFydCkge1xuICAgIHRoaXMuZWxzLm5vZGUuZm9jdXMoKTtcbiAgICB0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gICAgdGhpcy5lbHMubm9kZS5zZWxlY3Rpb25FbmQgPSBwb3NpdGlvbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVscy5ub2RlLmZvY3VzKCk7XG4gIH1cbn07XG5cbklucHV0LnByb3RvdHlwZS5zZXR1cFBhdHRlcm4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0Q2hhcmFjdGVycyA9IHRoaXMuZWxzLm5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZvcm1hdC1jaGFyYWN0ZXJzJykgfHwgJy0oKVtdOi4sJCVAIC8nO1xuICB0aGlzLnBhdHRlcm5TdHJpbmcgPSB0aGlzLm9wdGlvbnMucGF0dGVybjtcbiAgdGhpcy5lbHMubm9kZS5wbGFjZWhvbGRlciA9IHRoaXMucGF0dGVyblN0cmluZztcblxuICBjb25zdCBfaW5pdFBhdHRlcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGZvcm1hdHRlZFBhdHRlcm5TdHIgPSAnJztcbiAgICBsZXQgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdHRlcm5TdHJpbmcubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLnBhdHRlcm5TdHJpbmdbaV07XG5cbiAgICAgIGlmICh0aGlzLmZvcm1hdENoYXJhY3RlcnMuaW5kZXhPZihjaGFyKSA+PSAwKSB7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5TdHIgKz0gY2hhcjtcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciArPSBjaGFyO1xuICAgICAgfSBlbHNlIGlmIChjaGFyLm1hdGNoKC9bMC05XS8pKSB7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5TdHIgKz0gJ1swLTldJztcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciArPSAnKFswLTldfF8pJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhci5tYXRjaCgvW2EtekEtWl0vKSkge1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuU3RyICs9ICdbYS16QS1aXSc7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHIgKz0gJyhbYS16QS1aXXxfKSc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIgPT09ICcqJykge1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuU3RyICs9ICdbMC05YS16QS1aXSc7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHIgKz0gJyhbMC05YS16QS1aXXxfKSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7Zm9ybWF0dGVkUGF0dGVyblN0cn0kYCwgJ2cnKTtcbiAgICB0aGlzLnBhdHRlcm5XaXRoRW1wdHkgPSBuZXcgUmVnRXhwKGBeJHtmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyfSRgLCAnZycpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgX2luaXRQYXR0ZXJuKCk7XG59O1xuXG5cbi8qKlxuICogQWRkcyBzdGF0aWMgZXZlbnRzIGxpc3RlbmVycy5cbiAqL1xuSW5wdXQucHJvdG90eXBlLmFkZFByZWZpeEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcblxuICB0aGlzLl9pbnB1dEtleXVwID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG5cbiAgICBpZiAodGhhdC5lbHMubm9kZS52YWx1ZS5pbmRleE9mKG9sZFZhbHVlKSAhPT0gMCkge1xuICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9IGAke29sZFZhbHVlfSBgO1xuICAgIH1cbiAgfTtcblxuICBpZiAodGhpcy5lbHMubm9kZSkge1xuICAgIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9pbnB1dEtleXVwKTtcbiAgfVxufTtcblxuSW5wdXQucHJvdG90eXBlLnJlbW92ZVBhdHRlcm5FdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZWxzLm5vZGUpIHtcbiAgICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5faW5wdXRLZXlQcmVzcyk7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2lucHV0Rm9jdXMpO1xuICAgIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2lucHV0S2V5RG93bik7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faW5wdXRCbHVyKTtcbiAgfVxufTtcblxuSW5wdXQucHJvdG90eXBlLnJlbW92ZVByZWZpeEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbHMubm9kZSkge1xuICAgIHRoaXMuZWxzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9pbnB1dEtleXVwKTtcbiAgfVxufTtcblxuSW5wdXQucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5wYXR0ZXJuKSB7XG4gICAgdGhpcy5yZW1vdmVQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucHJlZml4KSB7XG4gICAgdGhpcy5yZW1vdmVQcmVmaXhFdmVudExpc3RlbmVycygpO1xuICB9XG4gIGRlbGV0ZSB0aGlzO1xufTtcblxuSW5wdXQucHJvdG90eXBlLnNldFByZWZpeCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbHMubm9kZS52YWx1ZSA9IGAke3RoaXMub3B0aW9ucy5wcmVmaXh9ICR7dGhpcy5lbHMubm9kZS52YWx1ZX1gO1xufTtcblxuZXhwb3J0IHsgSW5wdXQgYXMgZGVmYXVsdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sa2l0LmpzIiwic291cmNlUm9vdCI6IiJ9