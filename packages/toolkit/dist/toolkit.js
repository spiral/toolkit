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
      "./src/core/Ajax.ts":
      /*!**************************!*\
        !*** ./src/core/Ajax.ts ***!
        \**************************/

      /*! exports provided: Ajax, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Ajax", function () {
          return Ajax;
        });
        /* harmony import */


        var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! axios */
        "../../node_modules/axios/index.js");
        /* harmony import */


        var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./Events */
        "./src/core/Events.ts");

        class Ajax {
          constructor(options) {
            this.headers = {
              'X-Requested-With': 'XMLHttpRequest'
            };
            this.currentRequests = 0;
            this.events = new _Events__WEBPACK_IMPORTED_MODULE_1__["Events"](['beforeSend', 'load']);

            if (options && options.headers) {
              Object.assign(this.headers, options.headers);
            }
          }

          send(options) {
            // TODO why we check here if data === null then reassign to null again?
            if (options.data === null || options.data === undefined || options.data === 'undefined') {
              // eslint-disable-next-line no-param-reassign
              options.data = null;
            }

            if (!options.method) {
              // eslint-disable-next-line no-param-reassign
              options.method = 'POST';
            } // eslint-disable-next-line no-param-reassign


            options.headers = options.headers ? Object.assign(options.headers, this.headers, options.headers) : Object.assign({}, this.headers); // eslint-disable-next-line prefer-destructuring

            const CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken;
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
              if (!options.url) {
                console.error('You should provide url');
                reject(new Error('You should provide url'));
              }

              this.currentRequests += 1;
              axios__WEBPACK_IMPORTED_MODULE_0___default.a.request(config).then(response => {
                this.currentRequests -= 1;

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
                } // eslint-disable-next-line no-param-reassign


                options.response = response;
                this.events.trigger('load', options); // for example - used to handle actions
              }).catch(error => {
                this.currentRequests -= 1;

                if (error.response) {
                  reject(wrapError(error.response));
                } else {
                  reject(error);
                }
              });
            });
            return ajaxPromise;
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = Ajax;
        /***/
      },

      /***/
      "./src/core/BaseDOMConstructor.ts":
      /*!****************************************!*\
        !*** ./src/core/BaseDOMConstructor.ts ***!
        \****************************************/

      /*! exports provided: BaseDOMConstructor, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "BaseDOMConstructor", function () {
          return BaseDOMConstructor;
        });
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


        class BaseDOMConstructor {
          constructor() {
            this.name = '';
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

            this.optionsToGrab = {};
          }
          /**
             * Init method. Call after construct instance
             * @param {Object} sf
             * @param {Object} node  DomNode of form
             * @param {Object} [options] all options to override default
             */


          init(sf, node, options) {
            this.sf = sf;
            this.node = node;
            this.options = Object.assign(this.grabOptions(node), options);
          }
          /**
             * Grab all options that described in optionsToGrab
             * @param {Object} node domNode
             * @return {Object}
             */


          grabOptions(node) {
            const options = {};
            let currentOptionValue;
            let currentOption; // eslint-disable-next-line no-proto

            const optionsToGrab = this.optionsToGrab || this.__proto__.optionsToGrab || {}; // TODO: get rid of __proto__, replace with static(?)
            // for (const option in this.optionsToGrab) {

            Object.keys(optionsToGrab).forEach(option => {
              currentOptionValue = null;
              currentOption = optionsToGrab[option];

              if (currentOption.value) {
                // we have default option. Let's grab it for first
                currentOptionValue = currentOption.value;
              }

              if (this.sf.options.instances[this.name] && this.sf.options.instances[this.name][option]) {
                currentOptionValue = this.sf.options.instances[this.name][option];
              }

              if (currentOption.domAttr && node.hasAttribute(currentOption.domAttr)) {
                // we can grab the attribute of node
                currentOptionValue = node.getAttribute(currentOption.domAttr);
              }

              if (currentOption.processor) {
                // we have processor. Let's execute it
                currentOptionValue = currentOption.processor.call(this, node, currentOptionValue, currentOption);
              }

              if (currentOptionValue !== null) {
                options[option] = currentOptionValue;
              }
            });
            return options;
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = BaseDOMConstructor;
        /***/
      },

      /***/
      "./src/core/DomMutations.ts":
      /*!**********************************!*\
        !*** ./src/core/DomMutations.ts ***!
        \**********************************/

      /*! exports provided: DomMutations, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DomMutations", function () {
          return DomMutations;
        });

        class DomMutations {
          constructor(instancesController) {
            this.instancesController = instancesController;
            const config = {
              attributes: true,
              childList: true,
              characterData: true,
              characterDataOldValue: true,
              subtree: true,
              attributeOldValue: true,
              attributeFilter: ['class']
            };
            this.observer = new MutationObserver(mutations => {
              this.onDomMutate(mutations);
            });
            this.observer.observe(document, config); // start observer
          }
          /**
           * When dom mutated this function id executed.
           * @param {Array} mutations array of mutations
           * @return {boolean}
           */


          onDomMutate(mutations) {
            const classArray = this.instancesController.getClasses(); // get all registered classes

            const classSelector = `.${classArray.join(',.')}`; // convert for querySelectorAll()

            if (classSelector.length === 1) {
              // if not registered any instanceTypes
              return false;
            }

            mutations.forEach(mutation => {
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

                default:
                  console.error('Something wrong. Contact tech support');
              }
            }, this);
            return true;
          }

          processMutationAttributes(mutation, classArray) {
            const target = mutation.target;
            const currentClasses = target.className.split(' ');
            const oldClasses = mutation.oldValue ? mutation.oldValue.split(' ') : [];
            const addedClasses = currentClasses.filter(val => oldClasses.indexOf(val) === -1);
            const removedClasses = oldClasses.filter(val => currentClasses.indexOf(val) === -1);
            const addedRegisteredClasses = addedClasses.filter(val => classArray.indexOf(val) !== -1);
            const removedRegisteredClasses = removedClasses.filter(val => classArray.indexOf(val) !== -1);
            removedRegisteredClasses.forEach(val => {
              this.instancesController.removeInstance(this.instancesController.getInstanceNameByCssClass(val), target);
            });
            addedRegisteredClasses.forEach(val => {
              this.instancesController.addInstance(this.instancesController.getInstanceNameByCssClass(val), target);
            });
          }

          /**
           * Process mutation on ChildList
           * @param {NodeList} nodesList array with nodes
           * @param {String} action action to call (add or remove nodes)
           * @param {String} classSelector - string selector for querySelectorAll
           * @param {Array} classArray - array of all registered classes
           */
          processMutationChildList(nodesList, action, classSelector, classArray) {
            /**
             * Internal function for checking node class
             * @param {Object} node dom node
             */
            const checkNode = node => {
              classArray.forEach(className => {
                if (node.classList.contains(className)) {
                  // if class match try to add or remove instance for this node
                  this.instancesController[action](this.instancesController.getInstanceNameByCssClass(className), node);
                }
              });
            };

            [].forEach.call(nodesList, val => {
              if (val.nodeType !== 1 || val.nodeName === 'SCRIPT' || val.nodeName === 'LINK') {
                // do not process other nodes then ELEMENT_NODE https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType also ignore SCRIPT and LINK tag
                return false;
              }

              checkNode(val); // check mutation node

              [].forEach.call(val.querySelectorAll(classSelector), checkNode); // query all nodes with required classes and check it

              return true;
            });
          }

          /**
           * Stop listening the dom changes
           */
          stopObserve() {
            this.observer.disconnect();
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = DomMutations;
        /***/
      },

      /***/
      "./src/core/Events.ts":
      /*!****************************!*\
        !*** ./src/core/Events.ts ***!
        \****************************/

      /*! exports provided: Events */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Events", function () {
          return Events;
        });

        class Events {
          constructor(allowedEvents) {
            this.allowedEvents = allowedEvents;
            this.storage = {};
          }

          on(events, callback) {
            const eventArr = events.replace(/\s{2,}/g, ' ').split(' ');
            eventArr.forEach(event => {
              // event not inside allowed events
              if (this.allowedEvents && this.allowedEvents.indexOf(event) === -1) {
                console.warn('Events. Try to register event %s, but event is not allowed', event);
                return;
              }

              if (!this.storage[events]) {
                this.storage[event] = [];
              }

              this.storage[event].push(callback);
            });
          }
          /**
             * @deprecated
             */


          registerAction(events, callback) {
            return this.on(events, callback);
          }

          off(events, callback) {
            const eventArr = events.replace(/\s{2,}/g, ' ').split(' ');
            eventArr.forEach(event => {
              // event not inside allowed events
              if (this.allowedEvents && this.allowedEvents.indexOf(event) === -1) {
                console.warn('Events. Try to deregister event %s, but event is not allowed', event);
                return;
              }

              if (this.storage[event]) {
                this.storage[event] = this.storage[event].filter(cb => cb !== callback);
              }
            });
          }

          trigger(event, data) {
            // event not inside allowed events
            if (this.allowedEvents && this.allowedEvents.indexOf(event) === -1) {
              console.warn('Events. Try to trigger event %s, but event is not allowed', event);
              return;
            }

            if (this.storage[event]) {
              this.storage[event].forEach(cb => cb(data));
            }
          }
          /**
             * @deprecated
             */


          performAction(event, data) {
            return this.trigger(event, data);
          }

        }
        /***/

      },

      /***/
      "./src/core/InstancesController.ts":
      /*!*****************************************!*\
        !*** ./src/core/InstancesController.ts ***!
        \*****************************************/

      /*! exports provided: InstancesController, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "InstancesController", function () {
          return InstancesController;
        });
        /* harmony import */


        var _Events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./Events */
        "./src/core/Events.ts");

        class InstancesController {
          constructor(spiral) {
            this.spiral = spiral;
            this.storage = {
              instancesConstructors: {
                cssClasses: {},
                jsConstructors: {}
              },
              addons: {},
              instances: {}
            };
            this.events = new _Events__WEBPACK_IMPORTED_MODULE_0__["Events"](['onRemoveInstance', 'onAddInstance']);
          }
          /**
             * Register new instance type
             * @param {Function} constructorFunction - constructor function of instance
             * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
             * controlled by DomMutation. But you still can use it from JS.
             * @param {Boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
             */


          registerInstanceType(constructorFunction, cssClassName, isSkipInitialization) {
            const instanceName = constructorFunction.spiralFrameworkName || constructorFunction.prototype.name;

            if (!instanceName) {
              console.error('Instance constructor should have name inside it');
            }

            if (this.storage.instancesConstructors.jsConstructors[instanceName]) {
              console.error('Instance Constructor for type \'%s\' already added. Skipping', instanceName);
              return;
            }

            if (cssClassName) {
              // add link (cssClassName->instanceName)
              this.storage.instancesConstructors.cssClasses[cssClassName] = instanceName;
            }

            this.storage.instancesConstructors.jsConstructors[instanceName] = constructorFunction; // if (this._storage.instancesConstructors.hasOwnProperty(className)){
            //    console.error("Instance Constructor for type %s already added. Skipping",constructorFunction.prototype.name);
            //    return;
            // }
            // this._storage.instancesConstructors[className] = {//init storage fields
            //    "typeName": constructorFunction.prototype.name,
            //    "constructor": constructorFunction
            // };

            this.storage.instances[instanceName] = [];

            if (!isSkipInitialization && cssClassName) {
              const nodes = document.getElementsByClassName(cssClassName); // init add nodes with this class

              for (let i = 0, max = nodes.length; i < max; i += 1) {
                this.addInstance(instanceName, nodes[i]);
              }
            }
          }
          /**
             * Old method to register instance type
             * @param {*} className
             * @param {*} constructorFunction
             * @param {*} isSkipInitialization
             * @return {*}
             * @deprecated
             */


          addInstanceType(className, constructorFunction, isSkipInitialization) {
            console.warn('addInstanceType is deprecated. Please use registerInstanceType instead');
            return this.registerInstanceType(constructorFunction, className, isSkipInitialization);
          }
          /**
             * Add instance
             * @param {String} instanceName - name of instance
             * @param {Object} node - dom node
             * @param {Object} [options] all options for send to the constructor
             * @return {boolean}
             */


          addInstance(instanceName, node, options = undefined) {
            const InstanceConstructor = this.storage.instancesConstructors.jsConstructors[instanceName];
            const isAlreadyAdded = !!this.getInstance(instanceName, node);

            if (!InstanceConstructor || isAlreadyAdded) {
              // if not found this type  or already added - return
              return false;
            }

            const instance = new InstanceConstructor(this.spiral, node, options);
            this.storage.instances[instanceName].push({
              node,
              instance
            });
            this.events.trigger('onAddInstance', {
              instance,
              type: instanceName
            });
            return instance;
          }
          /**
             * Remove instance.
             * @param {String} instanceName - name of instance class
             * @param {Object|String} node - dom node ID
             * @return {boolean}
             */


          removeInstance(instanceName, node) {
            const instanceObj = this.getInstance(instanceName, node, true);

            if (!instanceObj) {
              return false;
            }

            if (instanceObj.instance.die) {
              instanceObj.instance.die(); // avoid memory leak
            }

            const key = this.storage.instances[instanceName].indexOf(instanceObj);

            if (key !== -1) {
              // remove key
              this.storage.instances[instanceName].splice(key, 1);
            }

            this.events.trigger('onRemoveInstance', {
              instance: instanceObj,
              type: instanceName
            });
            return true;
          }
          /**
           * Get instance. Return instance object of this dom node
           * @param {String} instanceName - name of instance
           * @param {Object|String} node - dom node o dome node ID
           * @param {boolean} [isReturnObject] - return object or instance
           * @return {boolean}
           */


          getInstance(instanceName, node, isReturnObject) {
            const typeArr = this.storage.instances[instanceName];
            let ret = false;

            if (!typeArr) {
              return false;
            }

            const el = node instanceof HTMLElement ? node : document.getElementById(node.toString());

            if (!el) {
              return false;
            }

            for (let key = 0, l = typeArr.length; key < l; key += 1) {
              // iterate storage and try to find instance
              if (typeArr[key].node === el) {
                ret = isReturnObject ? typeArr[key] : typeArr[key].instance;
                break;
              }
            }

            return ret;
          }
          /**
           * Get instances. Return array of instances objects
           * @param {String} instanceName - name of instance
           * @return {array|boolean}
           */


          getInstances(instanceName) {
            return this.storage.instances[instanceName] || false;
          }
          /**
           * Register addon for instance
           * @param {Function|Object} addon
           * @param {String} instanceName name of instance to register addon
           * @param {String} addonType type of addon (message,fill,etc)
           * @param {String} addonName name of addon (spiral, bootstrap,etc)
           */


          registerAddon(addon, instanceName, addonType, addonName) {
            if (!this.storage.addons[instanceName]) {
              this.storage.addons[instanceName] = {};
            }

            if (!this.storage.addons[instanceName][addonType]) {
              this.storage.addons[instanceName][addonType] = {};
            }

            if (this.storage.addons[instanceName][addonType][addonName]) {
              console.error('The %s addon type %s already registered for instance %s! Skipping registration.', addonName, addonType, instanceName);
              return;
            }

            this.storage.addons[instanceName][addonType][addonName] = addon;
          }
          /**
           * Get registered addon
           * @param {String} instanceName name of instance to register addon
           * @param {String} addonType type of addon (message,fill,etc)
           * @param {String} addonName name of addon (spiral, bootstrap,etc)
           * @return {*}
           */


          getInstanceAddon(instanceName, addonType, addonName) {
            if (!this.storage.addons[instanceName] || !this.storage.addons[instanceName][addonType] || !this.storage.addons[instanceName][addonType][addonName]) {
              return false;
            }

            return this.storage.addons[instanceName][addonType][addonName];
          }
          /**
           * Get all registered classes
           * @return {Array}
           */


          getClasses() {
            return Object.keys(this.storage.instancesConstructors.cssClasses);
          }
          /**
           * For given cssClass return name of instance
           * @param {String} cssClass
           * @return {*}
           */


          getInstanceNameByCssClass(cssClass) {
            return this.storage.instancesConstructors.cssClasses[cssClass];
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = InstancesController;
        /***/
      },

      /***/
      "./src/core/ajax/baseActions.ts":
      /*!**************************************!*\
        !*** ./src/core/ajax/baseActions.ts ***!
        \**************************************/

      /*! exports provided: attachDefaultActions */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "attachDefaultActions", function () {
          return attachDefaultActions;
        });

        const attachDefaultActions = (ajaxInstance, globalEvents) => {
          ajaxInstance.events.on('load', options => {
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
              globalEvents.trigger(data.action);
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
                  globalEvents.trigger('redirect', {
                    url: data.action.redirect,
                    options
                  });
                }, +data.action.delay || 0);
              } else if (keys.indexOf('name') !== -1) {
                setTimeout(() => {
                  globalEvents.trigger(data.action.name, data.action.url);
                }, +data.action.delay || 0);
              }
            } else {
              console.error('Action from server. Something wrong. ', data.action);
            }
          });
        };
        /***/

      },

      /***/
      "./src/core/events/baseEvents.ts":
      /*!***************************************!*\
        !*** ./src/core/events/baseEvents.ts ***!
        \***************************************/

      /*! exports provided: registerBaseEvents */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "registerBaseEvents", function () {
          return registerBaseEvents;
        });

        const registerBaseEvents = events => {
          events.on('redirect', event => {
            const url = Object.prototype.toString.call(event) === '[object String]' ? event : event.url; // http://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative

            const isAbsolute = /^(?:[a-z]+:)?\/\//i.test(url);

            if (isAbsolute) {
              // eslint-disable-next-line no-restricted-globals
              self.location.href = url;
            } else {
              const origin = window.location.origin || `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`; // eslint-disable-next-line no-restricted-globals

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
            // eslint-disable-next-line no-restricted-globals
            self.close();
          });
        };
        /***/

      },

      /***/
      "./src/helpers/DOMEvents.ts":
      /*!**********************************!*\
        !*** ./src/helpers/DOMEvents.ts ***!
        \**********************************/

      /*! exports provided: DOMEvents, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DOMEvents", function () {
          return DOMEvents;
        });
        /**
         * Helper to manipulate DOM Events. It's a simple wrapper around "addEventListener" but it's store all functions and allow us to remove it all.
         * It's very helpful for die() method of instances
         * @TODO this class is used in one place, consider dropping it
         * @constructor
         */


        class DOMEvents {
          constructor() {
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
            this.DOMEventsStorage = [];
          }
          /**
             * Add event(s) to node(s).
             * @param {Array.<Object>|Object} events - event array or event itself
             * @param {Object} events.DOMNode -   DOM node
             * @param {String} events.eventType -   Event type
             * @param {Function} events.eventFunction -   Function
             * @param {Boolean} [events.useCapture=false] -   useCapture
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


          add(events) {
            const eventArray = Array.isArray(events) ? events : [events];
            eventArray.forEach(val => {
              val.DOMNode.addEventListener(val.eventType, val.eventFunction, !!val.useCapture);
              this.DOMEventsStorage.push(val);
            }, this);
          }
          /**
           * Remove all dom events registered with this instance (added by method add)
           * @example
           * //look at add method as first part of this code
           * DOMEventsInstance.removeAll();
           */


          removeAll() {
            this.DOMEventsStorage.forEach(val => {
              val.DOMNode.removeEventListener(val.eventType, val.eventFunction, val.useCapture);
            });
            this.DOMEventsStorage = [];
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = DOMEvents;
        /***/
      },

      /***/
      "./src/helpers/domTools.ts":
      /*!*********************************!*\
        !*** ./src/helpers/domTools.ts ***!
        \*********************************/

      /*! exports provided: closest, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "closest", function () {
          return closest;
        });

        const closest = (el, selector) => {
          const selectors = typeof selector === 'string' ? [selector] : selector;
          let key;
          let elem = el;
          const l = selectors.length;
          const matchesSelector = elem.matches || elem.msMatchesSelector;

          while (elem && elem.parentElement) {
            for (key = 0; key < l; key += 1) {
              if (matchesSelector.call(elem, selectors[key])) {
                return elem;
              }
            }

            elem = elem.parentElement;
          }

          return false;
        };
        /* harmony default export */


        __webpack_exports__["default"] = {
          closest
        };
        /***/
      },

      /***/
      "./src/helpers/tools.ts":
      /*!******************************!*\
        !*** ./src/helpers/tools.ts ***!
        \******************************/

      /*! exports provided: resolveKeyPath */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "resolveKeyPath", function () {
          return resolveKeyPath;
        });
        /**
         * @module tools
         * @namespace
         */


        function resolveKeyPath(path, obj, safe) {
          // eslint-disable-next-line no-restricted-globals,no-nested-ternary
          return path.split('.').reduce((prev, curr) => !safe ? prev[curr] : prev ? prev[curr] : undefined, obj || self);
        }
        /***/

      },

      /***/
      "./src/index.ts":
      /*!**********************!*\
        !*** ./src/index.ts ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _core_ajax_baseActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./core/ajax/baseActions */
        "./src/core/ajax/baseActions.ts");
        /* harmony import */


        var _core_events_baseEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./core/events/baseEvents */
        "./src/core/events/baseEvents.ts");
        /* harmony import */


        var _sf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./sf */
        "./src/sf.ts");
        /* harmony import */


        var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./types */
        "./src/types.ts");
        /* harmony import */


        var _types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony reexport (unknown) */


        for (var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_3__) if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
          __webpack_require__.d(__webpack_exports__, key, function () {
            return _types__WEBPACK_IMPORTED_MODULE_3__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);

        const options = {
          instances: {}
        };
        const sfWrapper = {
          core: _sf__WEBPACK_IMPORTED_MODULE_2__["core"],
          helpers: _sf__WEBPACK_IMPORTED_MODULE_2__["helpers"],
          tools: _sf__WEBPACK_IMPORTED_MODULE_2__["tools"],
          options
        };
        sfWrapper.instancesController = new _sf__WEBPACK_IMPORTED_MODULE_2__["core"].InstancesController(sfWrapper);
        sfWrapper.domMutation = new _sf__WEBPACK_IMPORTED_MODULE_2__["core"].DomMutations(sfWrapper.instancesController); // Events system

        sfWrapper.events = new _sf__WEBPACK_IMPORTED_MODULE_2__["core"].Events();
        Object(_core_events_baseEvents__WEBPACK_IMPORTED_MODULE_1__["registerBaseEvents"])(sfWrapper.events); // AJAX

        sfWrapper.ajax = new _sf__WEBPACK_IMPORTED_MODULE_2__["core"].Ajax(window && window.csrfToken ? {
          // TODO move to spiral bindings
          headers: {
            'X-CSRF-Token': window.csrfToken
          }
        } : undefined); // ACTIONS

        Object(_core_ajax_baseActions__WEBPACK_IMPORTED_MODULE_0__["attachDefaultActions"])(sfWrapper.ajax, sfWrapper.events); // API

        sfWrapper.createModulePrototype = function () {
          return Object.create(_sf__WEBPACK_IMPORTED_MODULE_2__["core"].BaseDOMConstructor.prototype);
        };

        sfWrapper.registerInstanceType = sfWrapper.instancesController.registerInstanceType.bind(sfWrapper.instancesController);
        sfWrapper.addInstance = sfWrapper.instancesController.addInstance.bind(sfWrapper.instancesController);
        sfWrapper.removeInstance = sfWrapper.instancesController.removeInstance.bind(sfWrapper.instancesController);
        sfWrapper.getInstance = sfWrapper.instancesController.getInstance.bind(sfWrapper.instancesController);
        sfWrapper.getInstances = sfWrapper.instancesController.getInstances.bind(sfWrapper.instancesController);
        sfWrapper.closest = _sf__WEBPACK_IMPORTED_MODULE_2__["helpers"].domTools.closest;
        sfWrapper.resolveKeyPath = _sf__WEBPACK_IMPORTED_MODULE_2__["tools"].resolveKeyPath;
        /* harmony default export */

        __webpack_exports__["default"] = sfWrapper;
        /***/
      },

      /***/
      "./src/sf.ts":
      /*!*******************!*\
        !*** ./src/sf.ts ***!
        \*******************/

      /*! exports provided: core, helpers, tools */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "core", function () {
          return core;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "helpers", function () {
          return helpers;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "tools", function () {
          return tools;
        });
        /* harmony import */


        var _helpers_DOMEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./helpers/DOMEvents */
        "./src/helpers/DOMEvents.ts");
        /* harmony import */


        var _helpers_domTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./helpers/domTools */
        "./src/helpers/domTools.ts");
        /* harmony import */


        var _core_Ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./core/Ajax */
        "./src/core/Ajax.ts");
        /* harmony import */


        var _core_BaseDOMConstructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./core/BaseDOMConstructor */
        "./src/core/BaseDOMConstructor.ts");
        /* harmony import */


        var _core_DomMutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./core/DomMutations */
        "./src/core/DomMutations.ts");
        /* harmony import */


        var _core_Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./core/Events */
        "./src/core/Events.ts");
        /* harmony import */


        var _core_InstancesController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./core/InstancesController */
        "./src/core/InstancesController.ts");
        /* harmony import */


        var _helpers_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./helpers/tools */
        "./src/helpers/tools.ts");

        const core = {
          Ajax: _core_Ajax__WEBPACK_IMPORTED_MODULE_2__["default"],
          BaseDOMConstructor: _core_BaseDOMConstructor__WEBPACK_IMPORTED_MODULE_3__["default"],
          DomMutations: _core_DomMutations__WEBPACK_IMPORTED_MODULE_4__["default"],
          Events: _core_Events__WEBPACK_IMPORTED_MODULE_5__["Events"],
          InstancesController: _core_InstancesController__WEBPACK_IMPORTED_MODULE_6__["default"]
        };
        const helpers = {
          DOMEvents: _helpers_DOMEvents__WEBPACK_IMPORTED_MODULE_0__["default"],
          domTools: _helpers_domTools__WEBPACK_IMPORTED_MODULE_1__["default"]
        };
        const tools = {
          resolveKeyPath: _helpers_tools__WEBPACK_IMPORTED_MODULE_7__["resolveKeyPath"]
        };
        /***/
      },

      /***/
      "./src/types.ts":
      /*!**********************!*\
        !*** ./src/types.ts ***!
        \**********************/

      /*! no static exports found */

      /***/
      function (module, exports) {
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
      }
      /******/

    })
  );
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FqYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RvbU11dGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hamF4L2Jhc2VBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL0RPTUV2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9kb21Ub29scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90b29scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsMERBQWEsRTs7Ozs7Ozs7Ozs7O0FDQXpCOztBQUViLFlBQVksbUJBQU8sQ0FBQyx5REFBWTtBQUNoQyxhQUFhLG1CQUFPLENBQUMscUVBQWtCO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQywrRUFBdUI7QUFDOUMsb0JBQW9CLG1CQUFPLENBQUMsaUZBQXVCO0FBQ25ELG1CQUFtQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN0RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBOEI7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMsNkVBQXFCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBc0I7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbkxhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxzREFBUztBQUM3QixXQUFXLG1CQUFPLENBQUMsb0VBQWdCO0FBQ25DLFlBQVksbUJBQU8sQ0FBQyxnRUFBYztBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyw0RUFBb0I7QUFDOUMsZUFBZSxtQkFBTyxDQUFDLDREQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxzRUFBaUI7QUFDeEMsb0JBQW9CLG1CQUFPLENBQUMsZ0ZBQXNCO0FBQ2xELGlCQUFpQixtQkFBTyxDQUFDLDBFQUFtQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsd0VBQWtCOztBQUV6Qzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsK0RBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hEYTs7QUFFYjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKYTs7QUFFYixZQUFZLG1CQUFPLENBQUMseURBQVk7QUFDaEMsZUFBZSxtQkFBTyxDQUFDLDZFQUFxQjtBQUM1Qyx5QkFBeUIsbUJBQU8sQ0FBQyxxRkFBc0I7QUFDdkQsc0JBQXNCLG1CQUFPLENBQUMsK0VBQW1CO0FBQ2pELGtCQUFrQixtQkFBTyxDQUFDLHVFQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHlEQUFZOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkRhOztBQUViLG9CQUFvQixtQkFBTyxDQUFDLHVGQUEwQjtBQUN0RCxrQkFBa0IsbUJBQU8sQ0FBQyxtRkFBd0I7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyx5RUFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHlEQUFZO0FBQ2hDLG9CQUFvQixtQkFBTyxDQUFDLDJFQUFpQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsMkVBQW9CO0FBQzNDLGVBQWUsbUJBQU8sQ0FBQyw2REFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzlFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHVEQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RWE7O0FBRWIsa0JBQWtCLG1CQUFPLENBQUMsdUVBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJhOztBQUViLFlBQVksbUJBQU8sQ0FBQyx5REFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGVBQWU7QUFDMUIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CQSwrQ0FBYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsc0RBQVM7QUFDN0IsMEJBQTBCLG1CQUFPLENBQUMsa0dBQStCOztBQUVqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxvRUFBZ0I7QUFDdEMsR0FBRztBQUNIO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHFFQUFpQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxZQUFZO0FBQ25CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQ2hHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYixZQUFZLG1CQUFPLENBQUMseURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JhOztBQUViLFlBQVksbUJBQU8sQ0FBQyx5REFBWTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQyxTQUFTOztBQUVUO0FBQ0EsNERBQTRELHdCQUF3QjtBQUNwRjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQywrQkFBK0IsYUFBYSxFQUFFO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNwRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JhOztBQUViLFlBQVksbUJBQU8sQ0FBQyx5REFBWTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNuRWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHVEQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYixZQUFZLG1CQUFPLENBQUMseURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZUFBZTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsb0VBQWdCOztBQUVuQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLEdBQUcsU0FBUztBQUM1QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZWQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ1E7QUFDM0I7QUFDUDtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLDBCQUEwQiw4Q0FBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNkg7QUFDN0g7QUFDQSw0QkFBNEIsNENBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNENBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ2UsbUVBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pHcEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLE9BQU87QUFDL0Isd0JBQXdCLFNBQVM7QUFDakMsd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixrQ0FBa0MsSUFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDZSxpRkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xKbEM7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRSxrQ0FBa0Msc0JBQXNCLEVBQUU7QUFDMUQseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsNEVBQTRFO0FBQzVFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7OztBQ25HNUI7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxHQUFHO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsR0FBRztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFrQztBQUMzQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGtDQUFrQztBQUNsQyxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QjtBQUNBLDBCQUEwQiw4Q0FBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQixpQkFBaUIsT0FBTztBQUN4QjtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEUsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUU7QUFDbkIsaUJBQWlCLEVBQUU7QUFDbkIsaUJBQWlCLEVBQUU7QUFDbkIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsT0FBTztBQUN4QixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDhDQUE4QywrQkFBK0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsY0FBYztBQUMvQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaURBQWlELDRDQUE0QztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGNBQWM7QUFDN0IsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMsWUFBWTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2Usa0ZBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM1TG5DO0FBQUE7QUFBTztBQUNQO0FBQ0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxxQ0FBcUM7QUFDM0YsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCLElBQUkseUJBQXlCLEVBQUUsMkJBQTJCLHFCQUFxQixPQUFPO0FBQ3RJO0FBQ0EsZ0ZBQWdGLElBQUksSUFBSTtBQUN4RjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDLHdCQUF3QixPQUFPO0FBQy9CLHdCQUF3QixPQUFPO0FBQy9CLHdCQUF3QixTQUFTO0FBQ2pDLHdCQUF3QixRQUFRO0FBQ2hDLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkMsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakV6QjtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsZ0VBQUMsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaEIzQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQ0Q7QUFDbEI7QUFDNUMsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQSxJQUFJLDhDQUFJO0FBQ1IsSUFBSSxvREFBTztBQUNYLElBQUksZ0RBQUs7QUFDVDtBQUNBO0FBQ0Esb0NBQW9DLHdDQUFJO0FBQ3hDLDRCQUE0Qix3Q0FBSTtBQUNoQztBQUNBLHVCQUF1Qix3Q0FBSTtBQUMzQixrRkFBa0I7QUFDbEI7QUFDQSxxQkFBcUIsd0NBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLG1GQUFvQjtBQUNwQjtBQUNBO0FBQ0EseUJBQXlCLHdDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBTztBQUMzQiwyQkFBMkIseUNBQUs7QUFDakIsd0VBQVMsRUFBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcEN4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDRjtBQUNYO0FBQzRCO0FBQ1o7QUFDUjtBQUNzQjtBQUNaO0FBQzFDO0FBQ1AsSUFBSSx3REFBSTtBQUNSLElBQUksb0ZBQWtCO0FBQ3RCLElBQUksd0VBQVk7QUFDaEIsSUFBSSwyREFBTTtBQUNWLElBQUksc0ZBQW1CO0FBQ3ZCO0FBQ087QUFDUCxJQUFJLHFFQUFTO0FBQ2IsSUFBSSxtRUFBUTtBQUNaO0FBQ08sZUFBZSxDQUFDLDZFQUFjIiwiZmlsZSI6ImNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNmXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vRXZlbnRzJztcclxuZXhwb3J0IGNsYXNzIEFqYXgge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVxdWVzdHMgPSAwO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cyhbJ2JlZm9yZVNlbmQnLCAnbG9hZCddKTtcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VuZChvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gVE9ETyB3aHkgd2UgY2hlY2sgaGVyZSBpZiBkYXRhID09PSBudWxsIHRoZW4gcmVhc3NpZ24gdG8gbnVsbCBhZ2Fpbj9cclxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhID09PSBudWxsIHx8IG9wdGlvbnMuZGF0YSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5tZXRob2QpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgPyBPYmplY3QuYXNzaWduKG9wdGlvbnMuaGVhZGVycywgdGhpcy5oZWFkZXJzLCBvcHRpb25zLmhlYWRlcnMpIDogKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaGVhZGVycykpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xyXG4gICAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgICAgY29uc3QgY2FuY2VsU291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAvLyBgdXJsYCBpcyB0aGUgc2VydmVyIFVSTCB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgdXJsOiBvcHRpb25zLnVybCxcclxuICAgICAgICAgICAgLy8gYG1ldGhvZGAgaXMgdGhlIHJlcXVlc3QgbWV0aG9kIHRvIGJlIHVzZWQgd2hlbiBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcclxuICAgICAgICAgICAgLy8gYGhlYWRlcnNgIGFyZSBjdXN0b20gaGVhZGVycyB0byBiZSBzZW50XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycyxcclxuICAgICAgICAgICAgLy8gYGRhdGFgIGlzIHRoZSBkYXRhIHRvIGJlIHNlbnQgYXMgdGhlIHJlcXVlc3QgYm9keVxyXG4gICAgICAgICAgICAvLyBPbmx5IGFwcGxpY2FibGUgZm9yIHJlcXVlc3QgbWV0aG9kcyAnUFVUJywgJ1BPU1QnLCBhbmQgJ1BBVENIJ1xyXG4gICAgICAgICAgICAvLyBXaGVuIG5vIGB0cmFuc2Zvcm1SZXF1ZXN0YCBpcyBzZXQsIG11c3QgYmUgb2Ygb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAgICAgICAgICAgIC8vIC0gc3RyaW5nLCBwbGFpbiBvYmplY3QsIEFycmF5QnVmZmVyLCBBcnJheUJ1ZmZlclZpZXcsIFVSTFNlYXJjaFBhcmFtc1xyXG4gICAgICAgICAgICAvLyAtIEJyb3dzZXIgb25seTogRm9ybURhdGEsIEZpbGUsIEJsb2JcclxuICAgICAgICAgICAgLy8gLSBOb2RlIG9ubHk6IFN0cmVhbSwgQnVmZmVyXHJcbiAgICAgICAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcclxuICAgICAgICAgICAgLy8gYG9uVXBsb2FkUHJvZ3Jlc3NgIGFsbG93cyBoYW5kbGluZyBvZiBwcm9ncmVzcyBldmVudHMgZm9yIHVwbG9hZHNcclxuICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHByb2dyZXNzRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3MocHJvZ3Jlc3NFdmVudC5sb2FkZWQsIHByb2dyZXNzRXZlbnQudG90YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBgY2FuY2VsVG9rZW5gIHNwZWNpZmllcyBhIGNhbmNlbCB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNhbmNlbCB0aGUgcmVxdWVzdFxyXG4gICAgICAgICAgICAvLyAoc2VlIENhbmNlbGxhdGlvbiBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxzKVxyXG4gICAgICAgICAgICBjYW5jZWxUb2tlbjogY2FuY2VsU291cmNlLnRva2VuLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYW5jZWwgPSBjYW5jZWxTb3VyY2UuY2FuY2VsO1xyXG4gICAgICAgIGNvbnN0IHdyYXBFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuaXNTRkFqYXhFcnJvciA9IHRydWU7IC8vIE1hcmtzIGVycm9yIHRoYXQgY2FuIGhhdmUgbm9ybWFsIGRhdGEgaW5zaWRlXHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYWpheFByb21pc2UgPSBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMudXJsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJyk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJlcXVlc3RzICs9IDE7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAucmVxdWVzdChjb25maWcpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJlcXVlc3RzIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDE5OSAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHsgLy8gMjAwLTI5OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzk5ICYmIHJlc3BvbnNlLnN0YXR1cyA8IDYwMCkgeyAvLyA0MDAtNTk5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh3cmFwRXJyb3IocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Vua25vd24gc3RhdHVzICVkLiBSZWplY3RpbmcnLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qod3JhcEVycm9yKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHdyYXBFcnJvcihyZXNwb25zZSkpOyAvLyByZWplY3Qgd2l0aCB0aGUgc3RhdHVzIHRleHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMudHJpZ2dlcignbG9hZCcsIG9wdGlvbnMpOyAvLyBmb3IgZXhhbXBsZSAtIHVzZWQgdG8gaGFuZGxlIGFjdGlvbnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJlcXVlc3RzIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qod3JhcEVycm9yKGVycm9yLnJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIGFqYXhQcm9taXNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFqYXg7XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGEgYmFzZSBjb25zdHJ1Y3RvciAoY2xhc3MpIGZvciBhbnkgRE9NIGJhc2VkIGluc3RhbmNlLlxyXG4gKiBUaGlzIGNvbnN0cnVjdG9yIGp1c3QgZ3JhYiBhbGwgbm9kZSBhdHRyaWJ1dGVzIGFuZCBnZW5lcmF0ZXMgb3B0aW9ucy4gQWxsIHByb2Nlc3NlZCBvcHRpb25zIHN0b3JlZCBhdCB0aGlzLm9wdGlvbnNcclxuICogQGV4YW1wbGVcclxuICogV2UgaGF2ZSBodG1sIGxpa2UgdGhpczpcclxuICogPGRpdiBkYXRhLXRlc3Q9XCJ0ZXN0VmFsdWVcIiBkYXRhLXZhbHVlPVwidmFsdWUxMjNcIj4uLi4uLjwvZGl2PlxyXG4gKiB0aGlzLm9wdGlvbnMgd2lsbCBiZTpcclxuICoge1xyXG4gKiAgdGVzdDpcInRlc3RWYWx1ZVwiLFxyXG4gKiAgdmFsdWU6XCJ2YWx1ZVwiXHJcbiAqIH1cclxuICogTm90ZTogZGF0YS10ZXN0IGFuZCBkYXRhLXZhbHVlIHNob3VsZCBiZSBkZXNjcmliZWQgaW4gYXR0cmlidXRlc1RvR3JhYlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlRE9NQ29uc3RydWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBUaGlzIGlzIGEgb3B0aW9ucyB0byBnZW5lcmF0ZS5cclxuICAgICAgICAgICAqIFlvdSBzaG91bGQgcHJvdmlkZSBwcm9jZXNzb3Igb3IgdmFsdWUuXHJcbiAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtPYmplY3R9IHByb3BlcnR5S2V5IC0gb2JqZWN0IG9mIHByb3BlcnR5XHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gcHJvcGVydHlLZXkudmFsdWUgLSBkZWZhdWx0IHZhbHVlIHRvIHJldHVyblxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IFtwcm9wZXJ0eUtleS5kb21BdHRyXSAtIGRvbSBhdHRyaWJ1dGUgdG8gZ3JhYiBkYXRhXHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbcHJvcGVydHlLZXkucHJvY2Vzc29yXSAtICBwcm9jZXNzb3IgdG8gcHJvY2VzcyBkYXRhIGJlZm9yZSByZXR1cm5cclxuICAgICAgICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSAgLi4uIC0gQW5vdGhlciBvYmplY3Qgb2Ygb25lIHByb3BlcnR5XHJcbiAgICAgICAgICAgKiBAdHlwZSB7e319XHJcbiAgICAgICAgICAgKiAgQGV4YW1wbGVcclxuICAgICAgICAgICAqIFwic29tZUF0dHJpYnV0ZVwiOiB7Ly8ga2V5XHJcbiAgICAgICAgICAgKiAgICAgIHZhbHVlOiB0cnVlLCAvL2RlZmF1bHQgVmFsdWVcclxuICAgICAgICAgICAqICAgICAgZG9tQXR0cjogXCJkYXRhLXNvbWUtYXR0cmlidXRlXCIsIC8vIGF0dHJpYnV0ZSBmcm9tIG5vZGUgdG8gZ3JhYlxyXG4gICAgICAgICAgICogICAgICBwcm9jZXNzb3I6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7IC8vcHJvY2Vzc29yIHRvIHByb2Nlc3MgdmFsdWVzIGJlZm9yZSByZXR1cm5cclxuICAgICAgICAgICAqICAgICAgICAgIC8vc29tZSBjYWxjdWxhdGlvbnNcclxuICAgICAgICAgICAqICAgICAgcmV0dXJuIHNvbWVWYWx1ZTtcclxuICAgICAgICAgICAqICAgICAgfVxyXG4gICAgICAgICAgICogIH0sXHJcbiAgICAgICAgICAgKiAgXCJhbm90aGVyQXR0cmlidXRlXCI6ey4uLn0sXHJcbiAgICAgICAgICAgKiAgXCIuLi5cIlxyXG4gICAgICAgICAgICpcclxuICAgICAgICAgICAqICBAZXhhbXBsZVxyXG4gICAgICAgICAgICogIC8vcmV0dXJuIG5vZGUgYXMgdmFsdWVcclxuICAgICAgICAgICAqICBcImNvbnRleHRcIjoge1xyXG4gICAgICAgICAgICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsa2V5KSB7IC8vcHJvY2Vzc29yXHJcbiAgICAgICAgICAgKiAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAqICAgICAgfVxyXG4gICAgICAgICAgICogIH0sXHJcbiAgICAgICAgICAgKiAgXCJBbm90aGVyLWtleVwiOnsuLi59LFxyXG4gICAgICAgICAgICogIFwiLi4uXCJcclxuICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgKiAvL0dyYWIgYXR0cmlidXRlIFwiZGF0YS1hdHRyaWJ1dGVcIiBhcyBcIk15QXR0cmlidXRlXCIgaWYgYXR0cmlidXRlIG5vdCBwcm92aWRlZCByZXR1cm4gXCJEZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICogLy8gRG9tIG5vZGUgPGRpdiBkYXRhLWF0dHJpYnV0ZT1cInNvbWVWYWx1ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICogXCJNeUF0dHJpYnV0ZVwiOiB7XHJcbiAgICAgICAgICAgKiAgICAgIHZhbHVlOiBcIkRlZmF1bHRWYWx1ZVwiLFxyXG4gICAgICAgICAgICogICAgICBkb21BdHRyOiBcImRhdGEtYXR0cmlidXRlXCJcclxuICAgICAgICAgICAqICB9XHJcbiAgICAgICAgICAgKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXHJcbiAgICAgICAgICAgKiAge1wiTXlBdHRyaWJ1dGVcIjpcInNvbWVWYWx1ZVwifVxyXG4gICAgICAgICAgICpcclxuICAgICAgICAgICAqICBAZXhhbXBsZVxyXG4gICAgICAgICAgICogLy9HcmFiIGF0dHJpYnV0ZSBcImRhdGEtYXR0cmlidXRlXCIgYXMgXCJNeUF0dHJpYnV0ZVwiIGFuZCByZXR1cm4gc29tZSB2YWx1ZSBpbnN0ZWFkXHJcbiAgICAgICAgICAgKiAvL0RvbSBub2RlICA8ZGl2IGRhdGEtYXR0cmlidXRlPVwic29tZVZhbHVlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgKiBcIk15QXR0cmlidXRlXCI6IHtcclxuICAgICAgICAgICAqICAgICAgZG9tQXR0cjogXCJkYXRhLWF0dHJpYnV0ZVwiLFxyXG4gICAgICAgICAgICogICAgICBwcm9jZXNzb3I6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XHJcbiAgICAgICAgICAgKiAgICAgICAgICByZXR1cm4gdmFsK1wiU29tZUNhbGN1bGF0aW9uXCI7XHJcbiAgICAgICAgICAgKiAgICAgIH1cclxuICAgICAgICAgICAqICB9XHJcbiAgICAgICAgICAgKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXHJcbiAgICAgICAgICAgKiAge1wiTXlBdHRyaWJ1dGVcIjpcInNvbWVWYWx1ZVNvbWVDYWxjdWxhdGlvblwifVxyXG4gICAgICAgICAgICpcclxuICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgKiAvL3JldHVybiBmdW5jdGlvbiBhcyB2YWx1ZVxyXG4gICAgICAgICAgICogcHJvY2Vzc0Fuc3dlcjoge1xyXG4gICAgICAgICAgICogICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgKiAgICAgICAgIHJldHVybiBcInNvbWVWYWxcIjtcclxuICAgICAgICAgICAqICAgICAgfVxyXG4gICAgICAgICAgICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxyXG4gICAgICAgICAgICogIHtcInByb2Nlc3NBbnN3ZXJcIjpmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XHJcbiAgICAgICAgICAgKiAgICAgIH1cclxuICAgICAgICAgICAqICAgfVxyXG4gICAgICAgICAgICpcclxuICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgKiAvL3JldHVybiBpbml0IHRpbWUgYXMgdmFsdWVcclxuICAgICAgICAgICAqIGluaXRUaW1lOiB7XHJcbiAgICAgICAgICAgKiAgICAgIFwicHJvY2Vzc29yXCI6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XHJcbiAgICAgICAgICAgKiAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWU7XHJcbiAgICAgICAgICAgKiAgICAgIH1cclxuICAgICAgICAgICAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcclxuICAgICAgICAgICAqICB7XCJpbml0VGltZVwiOjE0Mjk4MDg5Nzc0MDR9XHJcbiAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICogLy9yZXR1cm4gb3RoZXIgdmFsdWUgaW5zdGVhZCBvZiByZWFsIG9uZVxyXG4gICAgICAgICAgICogcHJvY2Vzc0Fuc3dlcjoge1xyXG4gICAgICAgICAgICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikge1xyXG4gICAgICAgICAgICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XHJcbiAgICAgICAgICAgKiAgICAgIH1cclxuICAgICAgICAgICAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcclxuICAgICAgICAgICAqICB7XCJwcm9jZXNzQW5zd2VyXCI6XCJzb21lVmFsXCJ9XHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9wdGlvbnNUb0dyYWIgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgKiBJbml0IG1ldGhvZC4gQ2FsbCBhZnRlciBjb25zdHJ1Y3QgaW5zdGFuY2VcclxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IHNmXHJcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cclxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XHJcbiAgICAgICAqL1xyXG4gICAgaW5pdChzZiwgbm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2YgPSBzZjtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5ncmFiT3B0aW9ucyhub2RlKSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICogR3JhYiBhbGwgb3B0aW9ucyB0aGF0IGRlc2NyaWJlZCBpbiBvcHRpb25zVG9HcmFiXHJcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIGRvbU5vZGVcclxuICAgICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICAgKi9cclxuICAgIGdyYWJPcHRpb25zKG5vZGUpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge307XHJcbiAgICAgICAgbGV0IGN1cnJlbnRPcHRpb25WYWx1ZTtcclxuICAgICAgICBsZXQgY3VycmVudE9wdGlvbjtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cclxuICAgICAgICBjb25zdCBvcHRpb25zVG9HcmFiID0gdGhpcy5vcHRpb25zVG9HcmFiIHx8IHRoaXMuX19wcm90b19fLm9wdGlvbnNUb0dyYWIgfHwge307IC8vIFRPRE86IGdldCByaWQgb2YgX19wcm90b19fLCByZXBsYWNlIHdpdGggc3RhdGljKD8pXHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBvcHRpb24gaW4gdGhpcy5vcHRpb25zVG9HcmFiKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9uc1RvR3JhYikuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb24gPSBvcHRpb25zVG9HcmFiW29wdGlvbl07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9uLnZhbHVlKSB7IC8vIHdlIGhhdmUgZGVmYXVsdCBvcHRpb24uIExldCdzIGdyYWIgaXQgZm9yIGZpcnN0XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBjdXJyZW50T3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV0gJiYgdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdW29wdGlvbl0pIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IHRoaXMuc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXVtvcHRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9uLmRvbUF0dHIgJiYgbm9kZS5oYXNBdHRyaWJ1dGUoY3VycmVudE9wdGlvbi5kb21BdHRyKSkgeyAvLyB3ZSBjYW4gZ3JhYiB0aGUgYXR0cmlidXRlIG9mIG5vZGVcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGN1cnJlbnRPcHRpb24uZG9tQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb24ucHJvY2Vzc29yKSB7IC8vIHdlIGhhdmUgcHJvY2Vzc29yLiBMZXQncyBleGVjdXRlIGl0XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBjdXJyZW50T3B0aW9uLnByb2Nlc3Nvci5jYWxsKHRoaXMsIG5vZGUsIGN1cnJlbnRPcHRpb25WYWx1ZSwgY3VycmVudE9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gY3VycmVudE9wdGlvblZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFzZURPTUNvbnN0cnVjdG9yO1xyXG4iLCJleHBvcnQgY2xhc3MgRG9tTXV0YXRpb25zIHtcclxuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlc0NvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIgPSBpbnN0YW5jZXNDb250cm9sbGVyO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Eb21NdXRhdGUobXV0YXRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIGNvbmZpZyk7IC8vIHN0YXJ0IG9ic2VydmVyXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gZG9tIG11dGF0ZWQgdGhpcyBmdW5jdGlvbiBpZCBleGVjdXRlZC5cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG11dGF0aW9ucyBhcnJheSBvZiBtdXRhdGlvbnNcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIG9uRG9tTXV0YXRlKG11dGF0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0Q2xhc3NlcygpOyAvLyBnZXQgYWxsIHJlZ2lzdGVyZWQgY2xhc3Nlc1xyXG4gICAgICAgIGNvbnN0IGNsYXNzU2VsZWN0b3IgPSBgLiR7Y2xhc3NBcnJheS5qb2luKCcsLicpfWA7IC8vIGNvbnZlcnQgZm9yIHF1ZXJ5U2VsZWN0b3JBbGwoKVxyXG4gICAgICAgIGlmIChjbGFzc1NlbGVjdG9yLmxlbmd0aCA9PT0gMSkgeyAvLyBpZiBub3QgcmVnaXN0ZXJlZCBhbnkgaW5zdGFuY2VUeXBlc1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uQXR0cmlidXRlcyhtdXRhdGlvbiwgY2xhc3NBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjaGFyYWN0ZXJEYXRhJzpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QobXV0YXRpb24uYWRkZWROb2RlcywgJ2FkZEluc3RhbmNlJywgY2xhc3NTZWxlY3RvciwgY2xhc3NBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QobXV0YXRpb24ucmVtb3ZlZE5vZGVzLCAncmVtb3ZlSW5zdGFuY2UnLCBjbGFzc1NlbGVjdG9yLCBjbGFzc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdyb25nLiBDb250YWN0IHRlY2ggc3VwcG9ydCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBwcm9jZXNzTXV0YXRpb25BdHRyaWJ1dGVzKG11dGF0aW9uLCBjbGFzc0FycmF5KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gdGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSAobXV0YXRpb24ub2xkVmFsdWUpID8gbXV0YXRpb24ub2xkVmFsdWUuc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IGFkZGVkQ2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmZpbHRlcigodmFsKSA9PiAob2xkQ2xhc3Nlcy5pbmRleE9mKHZhbCkgPT09IC0xKSk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZENsYXNzZXMgPSBvbGRDbGFzc2VzLmZpbHRlcigodmFsKSA9PiAoY3VycmVudENsYXNzZXMuaW5kZXhPZih2YWwpID09PSAtMSkpO1xyXG4gICAgICAgIGNvbnN0IGFkZGVkUmVnaXN0ZXJlZENsYXNzZXMgPSBhZGRlZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjbGFzc0FycmF5LmluZGV4T2YodmFsKSAhPT0gLTEpKTtcclxuICAgICAgICBjb25zdCByZW1vdmVkUmVnaXN0ZXJlZENsYXNzZXMgPSByZW1vdmVkQ2xhc3Nlcy5maWx0ZXIoKHZhbCkgPT4gKGNsYXNzQXJyYXkuaW5kZXhPZih2YWwpICE9PSAtMSkpO1xyXG4gICAgICAgIHJlbW92ZWRSZWdpc3RlcmVkQ2xhc3Nlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNDb250cm9sbGVyLnJlbW92ZUluc3RhbmNlKHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzKHZhbCksIHRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRkZWRSZWdpc3RlcmVkQ2xhc3Nlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNDb250cm9sbGVyLmFkZEluc3RhbmNlKHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzKHZhbCksIHRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3MgbXV0YXRpb24gb24gQ2hpbGRMaXN0XHJcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc0xpc3QgYXJyYXkgd2l0aCBub2Rlc1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvbiBhY3Rpb24gdG8gY2FsbCAoYWRkIG9yIHJlbW92ZSBub2RlcylcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1NlbGVjdG9yIC0gc3RyaW5nIHNlbGVjdG9yIGZvciBxdWVyeVNlbGVjdG9yQWxsXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjbGFzc0FycmF5IC0gYXJyYXkgb2YgYWxsIHJlZ2lzdGVyZWQgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBwcm9jZXNzTXV0YXRpb25DaGlsZExpc3Qobm9kZXNMaXN0LCBhY3Rpb24sIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnRlcm5hbCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgbm9kZSBjbGFzc1xyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIGRvbSBub2RlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgY2hlY2tOb2RlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgY2xhc3NBcnJheS5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7IC8vIGlmIGNsYXNzIG1hdGNoIHRyeSB0byBhZGQgb3IgcmVtb3ZlIGluc3RhbmNlIGZvciB0aGlzIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXJbYWN0aW9uXSh0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyhjbGFzc05hbWUpLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNMaXN0LCAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWwubm9kZVR5cGUgIT09IDEgfHwgdmFsLm5vZGVOYW1lID09PSAnU0NSSVBUJyB8fCB2YWwubm9kZU5hbWUgPT09ICdMSU5LJykgeyAvLyBkbyBub3QgcHJvY2VzcyBvdGhlciBub2RlcyB0aGVuIEVMRU1FTlRfTk9ERSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS5ub2RlVHlwZSBhbHNvIGlnbm9yZSBTQ1JJUFQgYW5kIExJTksgdGFnXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hlY2tOb2RlKHZhbCk7IC8vIGNoZWNrIG11dGF0aW9uIG5vZGVcclxuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHZhbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzU2VsZWN0b3IpLCBjaGVja05vZGUpOyAvLyBxdWVyeSBhbGwgbm9kZXMgd2l0aCByZXF1aXJlZCBjbGFzc2VzIGFuZCBjaGVjayBpdFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgdGhlIGRvbSBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIHN0b3BPYnNlcnZlKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERvbU11dGF0aW9ucztcclxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhbGxvd2VkRXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd2VkRXZlbnRzID0gYWxsb3dlZEV2ZW50cztcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7fTtcclxuICAgIH1cclxuICAgIG9uKGV2ZW50cywgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBldmVudEFyciA9IGV2ZW50cy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykuc3BsaXQoJyAnKTtcclxuICAgICAgICBldmVudEFyci5mb3JFYWNoKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93ZWRFdmVudHMgJiYgdGhpcy5hbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHMuIFRyeSB0byByZWdpc3RlciBldmVudCAlcywgYnV0IGV2ZW50IGlzIG5vdCBhbGxvd2VkJywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9yYWdlW2V2ZW50c10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtldmVudF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgICAqL1xyXG4gICAgcmVnaXN0ZXJBY3Rpb24oZXZlbnRzLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50cywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgb2ZmKGV2ZW50cywgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBldmVudEFyciA9IGV2ZW50cy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykuc3BsaXQoJyAnKTtcclxuICAgICAgICBldmVudEFyci5mb3JFYWNoKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93ZWRFdmVudHMgJiYgdGhpcy5hbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHMuIFRyeSB0byBkZXJlZ2lzdGVyIGV2ZW50ICVzLCBidXQgZXZlbnQgaXMgbm90IGFsbG93ZWQnLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtldmVudF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtldmVudF0gPSB0aGlzLnN0b3JhZ2VbZXZlbnRdLmZpbHRlcigoY2IpID0+IGNiICE9PSBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHRyaWdnZXIoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dlZEV2ZW50cyAmJiB0aGlzLmFsbG93ZWRFdmVudHMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzLiBUcnkgdG8gdHJpZ2dlciBldmVudCAlcywgYnV0IGV2ZW50IGlzIG5vdCBhbGxvd2VkJywgZXZlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtldmVudF0uZm9yRWFjaCgoY2IpID0+IGNiKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAgICovXHJcbiAgICBwZXJmb3JtQWN0aW9uKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcihldmVudCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi9FdmVudHMnO1xyXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzcGlyYWwpIHtcclxuICAgICAgICB0aGlzLnNwaXJhbCA9IHNwaXJhbDtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlc0NvbnN0cnVjdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3Nlczoge30sXHJcbiAgICAgICAgICAgICAgICBqc0NvbnN0cnVjdG9yczoge30sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkZG9uczoge30sXHJcbiAgICAgICAgICAgIGluc3RhbmNlczoge30sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHMoWydvblJlbW92ZUluc3RhbmNlJywgJ29uQWRkSW5zdGFuY2UnXSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICogUmVnaXN0ZXIgbmV3IGluc3RhbmNlIHR5cGVcclxuICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3JGdW5jdGlvbiAtIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIGluc3RhbmNlXHJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbY3NzQ2xhc3NOYW1lXSAtIGNzcyBjbGFzcyBuYW1lIG9mIGluc3RhbmNlLiBJZiBjbGFzcyBub3QgcHJvdmlkZWQgdGhhdCBpdCBjYW4ndCBiZSBhdXRvbWF0aWNhbGx5XHJcbiAgICAgICAqIGNvbnRyb2xsZWQgYnkgRG9tTXV0YXRpb24uIEJ1dCB5b3Ugc3RpbGwgY2FuIHVzZSBpdCBmcm9tIEpTLlxyXG4gICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpc1NraXBJbml0aWFsaXphdGlvbj1mYWxzZV0gIC0gc2tpcCBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24sIGp1c3QgYWRkaW5nLCBubyBpbml0IG5vZGVzLlxyXG4gICAgICAgKi9cclxuICAgIHJlZ2lzdGVySW5zdGFuY2VUeXBlKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGNzc0NsYXNzTmFtZSwgaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZU5hbWUgPSBjb25zdHJ1Y3RvckZ1bmN0aW9uLnNwaXJhbEZyYW1ld29ya05hbWUgfHwgY29uc3RydWN0b3JGdW5jdGlvbi5wcm90b3R5cGUubmFtZTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnN0YW5jZSBjb25zdHJ1Y3RvciBzaG91bGQgaGF2ZSBuYW1lIGluc2lkZSBpdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5qc0NvbnN0cnVjdG9yc1tpbnN0YW5jZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luc3RhbmNlIENvbnN0cnVjdG9yIGZvciB0eXBlIFxcJyVzXFwnIGFscmVhZHkgYWRkZWQuIFNraXBwaW5nJywgaW5zdGFuY2VOYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3NzQ2xhc3NOYW1lKSB7IC8vIGFkZCBsaW5rIChjc3NDbGFzc05hbWUtPmluc3RhbmNlTmFtZSlcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5jc3NDbGFzc2VzW2Nzc0NsYXNzTmFtZV0gPSBpbnN0YW5jZU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXSA9IGNvbnN0cnVjdG9yRnVuY3Rpb247XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KGNsYXNzTmFtZSkpe1xyXG4gICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJJbnN0YW5jZSBDb25zdHJ1Y3RvciBmb3IgdHlwZSAlcyBhbHJlYWR5IGFkZGVkLiBTa2lwcGluZ1wiLGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUpO1xyXG4gICAgICAgIC8vICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnNbY2xhc3NOYW1lXSA9IHsvL2luaXQgc3RvcmFnZSBmaWVsZHNcclxuICAgICAgICAvLyAgICBcInR5cGVOYW1lXCI6IGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUsXHJcbiAgICAgICAgLy8gICAgXCJjb25zdHJ1Y3RvclwiOiBjb25zdHJ1Y3RvckZ1bmN0aW9uXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0gPSBbXTtcclxuICAgICAgICBpZiAoIWlzU2tpcEluaXRpYWxpemF0aW9uICYmIGNzc0NsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY3NzQ2xhc3NOYW1lKTsgLy8gaW5pdCBhZGQgbm9kZXMgd2l0aCB0aGlzIGNsYXNzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgKiBPbGQgbWV0aG9kIHRvIHJlZ2lzdGVyIGluc3RhbmNlIHR5cGVcclxuICAgICAgICogQHBhcmFtIHsqfSBjbGFzc05hbWVcclxuICAgICAgICogQHBhcmFtIHsqfSBjb25zdHJ1Y3RvckZ1bmN0aW9uXHJcbiAgICAgICAqIEBwYXJhbSB7Kn0gaXNTa2lwSW5pdGlhbGl6YXRpb25cclxuICAgICAgICogQHJldHVybiB7Kn1cclxuICAgICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAgICovXHJcbiAgICBhZGRJbnN0YW5jZVR5cGUoY2xhc3NOYW1lLCBjb25zdHJ1Y3RvckZ1bmN0aW9uLCBpc1NraXBJbml0aWFsaXphdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignYWRkSW5zdGFuY2VUeXBlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgcmVnaXN0ZXJJbnN0YW5jZVR5cGUgaW5zdGVhZCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySW5zdGFuY2VUeXBlKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGNsYXNzTmFtZSwgaXNTa2lwSW5pdGlhbGl6YXRpb24pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAqIEFkZCBpbnN0YW5jZVxyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxyXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSAtIGRvbSBub2RlXHJcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgZm9yIHNlbmQgdG8gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgICAqL1xyXG4gICAgYWRkSW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlLCBvcHRpb25zID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgSW5zdGFuY2VDb25zdHJ1Y3RvciA9IHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXTtcclxuICAgICAgICBjb25zdCBpc0FscmVhZHlBZGRlZCA9ICEhdGhpcy5nZXRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGUpO1xyXG4gICAgICAgIGlmICghSW5zdGFuY2VDb25zdHJ1Y3RvciB8fCBpc0FscmVhZHlBZGRlZCkgeyAvLyBpZiBub3QgZm91bmQgdGhpcyB0eXBlICBvciBhbHJlYWR5IGFkZGVkIC0gcmV0dXJuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW5zdGFuY2VDb25zdHJ1Y3Rvcih0aGlzLnNwaXJhbCwgbm9kZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdLnB1c2goe1xyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICBpbnN0YW5jZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdvbkFkZEluc3RhbmNlJywgeyBpbnN0YW5jZSwgdHlwZTogaW5zdGFuY2VOYW1lIH0pO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgKiBSZW1vdmUgaW5zdGFuY2UuXHJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlIGNsYXNzXHJcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbm9kZSAtIGRvbSBub2RlIElEXHJcbiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgICAqL1xyXG4gICAgcmVtb3ZlSW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlKSB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2VPYmogPSB0aGlzLmdldEluc3RhbmNlKGluc3RhbmNlTmFtZSwgbm9kZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZU9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnN0YW5jZU9iai5pbnN0YW5jZS5kaWUpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VPYmouaW5zdGFuY2UuZGllKCk7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXS5pbmRleE9mKGluc3RhbmNlT2JqKTtcclxuICAgICAgICBpZiAoa2V5ICE9PSAtMSkgeyAvLyByZW1vdmUga2V5XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXS5zcGxpY2Uoa2V5LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudHMudHJpZ2dlcignb25SZW1vdmVJbnN0YW5jZScsIHsgaW5zdGFuY2U6IGluc3RhbmNlT2JqLCB0eXBlOiBpbnN0YW5jZU5hbWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBpbnN0YW5jZS4gUmV0dXJuIGluc3RhbmNlIG9iamVjdCBvZiB0aGlzIGRvbSBub2RlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBub2RlIC0gZG9tIG5vZGUgbyBkb21lIG5vZGUgSURcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzUmV0dXJuT2JqZWN0XSAtIHJldHVybiBvYmplY3Qgb3IgaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGdldEluc3RhbmNlKGluc3RhbmNlTmFtZSwgbm9kZSwgaXNSZXR1cm5PYmplY3QpIHtcclxuICAgICAgICBjb25zdCB0eXBlQXJyID0gdGhpcy5zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdO1xyXG4gICAgICAgIGxldCByZXQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXR5cGVBcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlbCA9IChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpID8gbm9kZSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5vZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGtleSA9IDAsIGwgPSB0eXBlQXJyLmxlbmd0aDsga2V5IDwgbDsga2V5ICs9IDEpIHsgLy8gaXRlcmF0ZSBzdG9yYWdlIGFuZCB0cnkgdG8gZmluZCBpbnN0YW5jZVxyXG4gICAgICAgICAgICBpZiAodHlwZUFycltrZXldLm5vZGUgPT09IGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSAoaXNSZXR1cm5PYmplY3QpID8gdHlwZUFycltrZXldIDogdHlwZUFycltrZXldLmluc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGluc3RhbmNlcy4gUmV0dXJuIGFycmF5IG9mIGluc3RhbmNlcyBvYmplY3RzXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7YXJyYXl8Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZ2V0SW5zdGFuY2VzKGluc3RhbmNlTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0gfHwgZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGFkZG9uIGZvciBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFkZG9uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIG5hbWUgb2YgaW5zdGFuY2UgdG8gcmVnaXN0ZXIgYWRkb25cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhZGRvblR5cGUgdHlwZSBvZiBhZGRvbiAobWVzc2FnZSxmaWxsLGV0YylcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhZGRvbk5hbWUgbmFtZSBvZiBhZGRvbiAoc3BpcmFsLCBib290c3RyYXAsZXRjKVxyXG4gICAgICovXHJcbiAgICByZWdpc3RlckFkZG9uKGFkZG9uLCBpbnN0YW5jZU5hbWUsIGFkZG9uVHlwZSwgYWRkb25OYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdW2FkZG9uTmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlICVzIGFkZG9uIHR5cGUgJXMgYWxyZWFkeSByZWdpc3RlcmVkIGZvciBpbnN0YW5jZSAlcyEgU2tpcHBpbmcgcmVnaXN0cmF0aW9uLicsIGFkZG9uTmFtZSwgYWRkb25UeXBlLCBpbnN0YW5jZU5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdW2FkZG9uTmFtZV0gPSBhZGRvbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHJlZ2lzdGVyZWQgYWRkb25cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgbmFtZSBvZiBpbnN0YW5jZSB0byByZWdpc3RlciBhZGRvblxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uVHlwZSB0eXBlIG9mIGFkZG9uIChtZXNzYWdlLGZpbGwsZXRjKVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uTmFtZSBuYW1lIG9mIGFkZG9uIChzcGlyYWwsIGJvb3RzdHJhcCxldGMpXHJcbiAgICAgKiBAcmV0dXJuIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRJbnN0YW5jZUFkZG9uKGluc3RhbmNlTmFtZSwgYWRkb25UeXBlLCBhZGRvbk5hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVxyXG4gICAgICAgICAgICB8fCAhdGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV1cclxuICAgICAgICAgICAgfHwgIXRoaXMuc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdW2FkZG9uTmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV1bYWRkb25OYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcclxuICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICovXHJcbiAgICBnZXRDbGFzc2VzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmNzc0NsYXNzZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgZ2l2ZW4gY3NzQ2xhc3MgcmV0dXJuIG5hbWUgb2YgaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjc3NDbGFzc1xyXG4gICAgICogQHJldHVybiB7Kn1cclxuICAgICAqL1xyXG4gICAgZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyhjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmNzc0NsYXNzZXNbY3NzQ2xhc3NdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluc3RhbmNlc0NvbnRyb2xsZXI7XHJcbiIsImV4cG9ydCBjb25zdCBhdHRhY2hEZWZhdWx0QWN0aW9ucyA9IChhamF4SW5zdGFuY2UsIGdsb2JhbEV2ZW50cykgPT4ge1xyXG4gICAgYWpheEluc3RhbmNlLmV2ZW50cy5vbignbG9hZCcsIChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gb3B0aW9ucztcclxuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICBpZiAoIWRhdGEuYWN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmFjdGlvbiA9PT0gJ3N0cmluZycpIHsgLy8gXCJhY3Rpb25cIjpcInJlbG9hZFwiXHJcbiAgICAgICAgICAgIGdsb2JhbEV2ZW50cy50cmlnZ2VyKGRhdGEuYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEuYWN0aW9uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YS5hY3Rpb24pO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBub3RpZmljYXRpb25zXHJcbiAgICAgICAgICAgIC8vIGlmIChrZXlzLmluZGV4T2YoJ2ZsYXNoJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc3QgeyBmbGFzaCB9ID0gZGF0YS5hY3Rpb247XHJcbiAgICAgICAgICAgIC8vICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgLy8gICBsZXQgc2ZGbGFzaE1lc3NhZ2UgPSB7fTtcclxuICAgICAgICAgICAgLy8gICBpZiAodHlwZW9mIGRhdGEuYWN0aW9uLmZsYXNoID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UgPSBmbGFzaDtcclxuICAgICAgICAgICAgLy8gICAgIHNmRmxhc2hNZXNzYWdlLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgIG1lc3NhZ2U6IGZsYXNoLFxyXG4gICAgICAgICAgICAvLyAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgLy8gICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZkZsYXNoTWVzc2FnZScsIEpTT04uc3RyaW5naWZ5KHNmRmxhc2hNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKGtleXMuaW5kZXhPZigncmVkaXJlY3QnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEV2ZW50cy50cmlnZ2VyKCdyZWRpcmVjdCcsIHsgdXJsOiBkYXRhLmFjdGlvbi5yZWRpcmVjdCwgb3B0aW9ucyB9KTtcclxuICAgICAgICAgICAgICAgIH0sICtkYXRhLmFjdGlvbi5kZWxheSB8fCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChrZXlzLmluZGV4T2YoJ25hbWUnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEV2ZW50cy50cmlnZ2VyKGRhdGEuYWN0aW9uLm5hbWUsIGRhdGEuYWN0aW9uLnVybCk7XHJcbiAgICAgICAgICAgICAgICB9LCArZGF0YS5hY3Rpb24uZGVsYXkgfHwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FjdGlvbiBmcm9tIHNlcnZlci4gU29tZXRoaW5nIHdyb25nLiAnLCBkYXRhLmFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCByZWdpc3RlckJhc2VFdmVudHMgPSAoZXZlbnRzKSA9PiB7XHJcbiAgICBldmVudHMub24oJ3JlZGlyZWN0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV2ZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScgPyBldmVudCA6IGV2ZW50LnVybDtcclxuICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNjg3MDk5L2hvdy10by10ZXN0LWlmLWEtdXJsLXN0cmluZy1pcy1hYnNvbHV0ZS1vci1yZWxhdGl2ZVxyXG4gICAgICAgIGNvbnN0IGlzQWJzb2x1dGUgPSAvXig/OlthLXpdKzopP1xcL1xcLy9pLnRlc3QodXJsKTtcclxuICAgICAgICBpZiAoaXNBYnNvbHV0ZSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXHJcbiAgICAgICAgICAgIHNlbGYubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICAgICAgICAgICAgICAgIHx8IChgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5wb3J0ID8gYDoke3dpbmRvdy5sb2NhdGlvbi5wb3J0fWAgOiAnJ31gKTtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xyXG4gICAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhyZWYgPSBvcmlnaW4gKyAoKHVybC5jaGFyQXQoMCkgPT09ICcvJykgPyB1cmwgOiAoYC8ke3VybH1gKSk7IC8vIFJlbGF0aXZlIHBhdGhcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGV2ZW50cy5vbigncmVsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0pO1xyXG4gICAgZXZlbnRzLm9uKCdyZWZyZXNoJywgKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdyZWxvYWQnKTtcclxuICAgIH0pO1xyXG4gICAgZXZlbnRzLm9uKCdjbG9zZScsICgpID0+IHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXHJcbiAgICAgICAgc2VsZi5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBIZWxwZXIgdG8gbWFuaXB1bGF0ZSBET00gRXZlbnRzLiBJdCdzIGEgc2ltcGxlIHdyYXBwZXIgYXJvdW5kIFwiYWRkRXZlbnRMaXN0ZW5lclwiIGJ1dCBpdCdzIHN0b3JlIGFsbCBmdW5jdGlvbnMgYW5kIGFsbG93IHVzIHRvIHJlbW92ZSBpdCBhbGwuXHJcbiAqIEl0J3MgdmVyeSBoZWxwZnVsIGZvciBkaWUoKSBtZXRob2Qgb2YgaW5zdGFuY2VzXHJcbiAqIEBUT0RPIHRoaXMgY2xhc3MgaXMgdXNlZCBpbiBvbmUgcGxhY2UsIGNvbnNpZGVyIGRyb3BwaW5nIGl0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERPTUV2ZW50cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAqIEludGVybmFsIHN0b3JhZ2UgZm9yIGV2ZW50c1xyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtBcnJheS48T2JqZWN0Pn0gRE9NRXZlbnRzIC0gZG9tIGV2ZW50cyBhcnJheVxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtPYmplY3R9IERPTUV2ZW50cy5ET01Ob2RlIC0gICBET00gbm9kZVxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IERPTUV2ZW50cy5ldmVudFR5cGUgLSAgIEV2ZW50IHR5cGVcclxuICAgICAgICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IERPTUV2ZW50cy5ldmVudEZ1bmN0aW9uIC0gICBGdW5jdGlvblxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtCb29sZWFufSBET01FdmVudHMudXNlQ2FwdHVyZT1mYWxzZSAtICAgdXNlQ2FwdHVyZVxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtPYmplY3R9IC4uLiAtICAgYW5vdGhlciBvYmplY3RcclxuICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkRPTUV2ZW50c1N0b3JhZ2UgPSBbXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgKiBBZGQgZXZlbnQocykgdG8gbm9kZShzKS5cclxuICAgICAgICogQHBhcmFtIHtBcnJheS48T2JqZWN0PnxPYmplY3R9IGV2ZW50cyAtIGV2ZW50IGFycmF5IG9yIGV2ZW50IGl0c2VsZlxyXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRzLkRPTU5vZGUgLSAgIERPTSBub2RlXHJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudHMuZXZlbnRUeXBlIC0gICBFdmVudCB0eXBlXHJcbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGV2ZW50cy5ldmVudEZ1bmN0aW9uIC0gICBGdW5jdGlvblxyXG4gICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtldmVudHMudXNlQ2FwdHVyZT1mYWxzZV0gLSAgIHVzZUNhcHR1cmVcclxuICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICogdmFyIERPTUV2ZW50c0luc3RhbmNlID0gbmV3IERPTUV2ZW50cygpO1xyXG4gICAgICAgKiB2YXIgZXZlbnRPbmUgPSB7XHJcbiAgICAgICAqICAgICAgRE9NTm9kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpLFxyXG4gICAgICAgKiAgICAgIGV2ZW50VHlwZTogXCJjbGlja1wiLFxyXG4gICAgICAgKiAgICAgIGV2ZW50RnVuY3Rpb246IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGkgdGhlcmUuIE5hdGl2ZSAgRE9NIGV2ZW50cyBpczpcIixlKTtcclxuICAgICAgICogICAgICB9XHJcbiAgICAgICAqIH1cclxuICAgICAgICogIHZhciBldmVudFR3byA9IHtcclxuICAgICAgICogICAgICBET01Ob2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGUyXCIpLFxyXG4gICAgICAgKiAgICAgIGV2ZW50VHlwZTogXCJtb3VzZWRvd25cIixcclxuICAgICAgICogICAgICBldmVudEZ1bmN0aW9uOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpIHRoZXJlLiBtb3VzZWRvd24gZXZlbnQuIE5hdGl2ZSAgRE9NIGV2ZW50cyBpczpcIixlKTtcclxuICAgICAgICogICAgICB9XHJcbiAgICAgICAqIH1cclxuICAgICAgICogIERPTUV2ZW50c0luc3RhbmNlLmFkZChbZXZlbnRPbmUsZXZlbnRUd29dKTtcclxuICAgICAgICovXHJcbiAgICBhZGQoZXZlbnRzKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IFtldmVudHNdO1xyXG4gICAgICAgIGV2ZW50QXJyYXkuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbC5ET01Ob2RlLmFkZEV2ZW50TGlzdGVuZXIodmFsLmV2ZW50VHlwZSwgdmFsLmV2ZW50RnVuY3Rpb24sICEhdmFsLnVzZUNhcHR1cmUpO1xyXG4gICAgICAgICAgICB0aGlzLkRPTUV2ZW50c1N0b3JhZ2UucHVzaCh2YWwpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYWxsIGRvbSBldmVudHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgaW5zdGFuY2UgKGFkZGVkIGJ5IG1ldGhvZCBhZGQpXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy9sb29rIGF0IGFkZCBtZXRob2QgYXMgZmlyc3QgcGFydCBvZiB0aGlzIGNvZGVcclxuICAgICAqIERPTUV2ZW50c0luc3RhbmNlLnJlbW92ZUFsbCgpO1xyXG4gICAgICovXHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5ET01FdmVudHNTdG9yYWdlLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICB2YWwuRE9NTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHZhbC5ldmVudFR5cGUsIHZhbC5ldmVudEZ1bmN0aW9uLCB2YWwudXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ET01FdmVudHNTdG9yYWdlID0gW107XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRE9NRXZlbnRzO1xyXG4iLCJleHBvcnQgY29uc3QgY2xvc2VzdCA9IChlbCwgc2VsZWN0b3IpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdG9ycyA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcclxuICAgIGxldCBrZXk7XHJcbiAgICBsZXQgZWxlbSA9IGVsO1xyXG4gICAgY29uc3QgbCA9IHNlbGVjdG9ycy5sZW5ndGg7XHJcbiAgICBjb25zdCBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtLm1hdGNoZXMgfHwgZWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcclxuICAgIHdoaWxlIChlbGVtICYmIGVsZW0ucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIGZvciAoa2V5ID0gMDsga2V5IDwgbDsga2V5ICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXNTZWxlY3Rvci5jYWxsKGVsZW0sIHNlbGVjdG9yc1trZXldKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgeyBjbG9zZXN0IH07XHJcbiIsIi8qKlxyXG4gKiBAbW9kdWxlIHRvb2xzXHJcbiAqIEBuYW1lc3BhY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlS2V5UGF0aChwYXRoLCBvYmosIHNhZmUpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMsbm8tbmVzdGVkLXRlcm5hcnlcclxuICAgIHJldHVybiBwYXRoLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyKSA9PiAoIXNhZmUgPyBwcmV2W2N1cnJdIDogKHByZXYgPyBwcmV2W2N1cnJdIDogdW5kZWZpbmVkKSksIG9iaiB8fCBzZWxmKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhdHRhY2hEZWZhdWx0QWN0aW9ucyB9IGZyb20gJy4vY29yZS9hamF4L2Jhc2VBY3Rpb25zJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJCYXNlRXZlbnRzIH0gZnJvbSAnLi9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzJztcclxuaW1wb3J0IHsgY29yZSwgdG9vbHMsIGhlbHBlcnMgfSBmcm9tICcuL3NmJztcclxuY29uc3Qgb3B0aW9ucyA9IHsgaW5zdGFuY2VzOiB7fSB9O1xyXG5jb25zdCBzZldyYXBwZXIgPSB7XHJcbiAgICBjb3JlLFxyXG4gICAgaGVscGVycyxcclxuICAgIHRvb2xzLFxyXG4gICAgb3B0aW9ucyxcclxufTtcclxuc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIgPSBuZXcgY29yZS5JbnN0YW5jZXNDb250cm9sbGVyKHNmV3JhcHBlcik7XHJcbnNmV3JhcHBlci5kb21NdXRhdGlvbiA9IG5ldyBjb3JlLkRvbU11dGF0aW9ucyhzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XHJcbi8vIEV2ZW50cyBzeXN0ZW1cclxuc2ZXcmFwcGVyLmV2ZW50cyA9IG5ldyBjb3JlLkV2ZW50cygpO1xyXG5yZWdpc3RlckJhc2VFdmVudHMoc2ZXcmFwcGVyLmV2ZW50cyk7XHJcbi8vIEFKQVhcclxuc2ZXcmFwcGVyLmFqYXggPSBuZXcgY29yZS5BamF4KHdpbmRvdyAmJiB3aW5kb3cuY3NyZlRva2VuID8ge1xyXG4gICAgLy8gVE9ETyBtb3ZlIHRvIHNwaXJhbCBiaW5kaW5nc1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYLUNTUkYtVG9rZW4nOiB3aW5kb3cuY3NyZlRva2VuLFxyXG4gICAgfSxcclxufSA6IHVuZGVmaW5lZCk7XHJcbi8vIEFDVElPTlNcclxuYXR0YWNoRGVmYXVsdEFjdGlvbnMoc2ZXcmFwcGVyLmFqYXgsIHNmV3JhcHBlci5ldmVudHMpO1xyXG4vLyBBUElcclxuc2ZXcmFwcGVyLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKGNvcmUuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XHJcbn07XHJcbnNmV3JhcHBlci5yZWdpc3Rlckluc3RhbmNlVHlwZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLnJlZ2lzdGVySW5zdGFuY2VUeXBlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xyXG5zZldyYXBwZXIuYWRkSW5zdGFuY2UgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5hZGRJbnN0YW5jZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcclxuc2ZXcmFwcGVyLnJlbW92ZUluc3RhbmNlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIucmVtb3ZlSW5zdGFuY2UuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XHJcbnNmV3JhcHBlci5nZXRJbnN0YW5jZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xyXG5zZldyYXBwZXIuZ2V0SW5zdGFuY2VzID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VzLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xyXG5zZldyYXBwZXIuY2xvc2VzdCA9IGhlbHBlcnMuZG9tVG9vbHMuY2xvc2VzdDtcclxuc2ZXcmFwcGVyLnJlc29sdmVLZXlQYXRoID0gdG9vbHMucmVzb2x2ZUtleVBhdGg7XHJcbmV4cG9ydCBkZWZhdWx0IHNmV3JhcHBlcjtcclxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XHJcbiIsImltcG9ydCBET01FdmVudHMgZnJvbSAnLi9oZWxwZXJzL0RPTUV2ZW50cyc7XHJcbmltcG9ydCBkb21Ub29scyBmcm9tICcuL2hlbHBlcnMvZG9tVG9vbHMnO1xyXG5pbXBvcnQgQWpheCBmcm9tICcuL2NvcmUvQWpheCc7XHJcbmltcG9ydCBCYXNlRE9NQ29uc3RydWN0b3IgZnJvbSAnLi9jb3JlL0Jhc2VET01Db25zdHJ1Y3Rvcic7XHJcbmltcG9ydCBEb21NdXRhdGlvbnMgZnJvbSAnLi9jb3JlL0RvbU11dGF0aW9ucyc7XHJcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vY29yZS9FdmVudHMnO1xyXG5pbXBvcnQgSW5zdGFuY2VzQ29udHJvbGxlciBmcm9tICcuL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IHJlc29sdmVLZXlQYXRoIH0gZnJvbSAnLi9oZWxwZXJzL3Rvb2xzJztcclxuZXhwb3J0IGNvbnN0IGNvcmUgPSB7XHJcbiAgICBBamF4LFxyXG4gICAgQmFzZURPTUNvbnN0cnVjdG9yLFxyXG4gICAgRG9tTXV0YXRpb25zLFxyXG4gICAgRXZlbnRzLFxyXG4gICAgSW5zdGFuY2VzQ29udHJvbGxlcixcclxufTtcclxuZXhwb3J0IGNvbnN0IGhlbHBlcnMgPSB7XHJcbiAgICBET01FdmVudHMsXHJcbiAgICBkb21Ub29scyxcclxufTtcclxuZXhwb3J0IGNvbnN0IHRvb2xzID0geyByZXNvbHZlS2V5UGF0aCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9

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


        var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! query-string */
        "../../node_modules/query-string/index.js");
        /* harmony import */


        var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");
        /* harmony import */


        var _DatagridState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./DatagridState */
        "./src/DatagridState.ts");
        /* harmony import */


        var _Paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./Paginator */
        "./src/Paginator.ts");
        /* harmony import */


        var _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./render/defaultRenderer */
        "./src/render/defaultRenderer.ts");
        /* harmony import */


        var _render_GridRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./render/GridRenderer */
        "./src/render/GridRenderer.ts");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./utils */
        "./src/utils.ts");

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
        };

        var __rest = undefined && undefined.__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        }; // import './styles.css';


        class Datagrid extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
          constructor(ssf, node, options) {
            super();
            this.name = Datagrid.spiralFrameworkName;
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
            this.state = new _DatagridState__WEBPACK_IMPORTED_MODULE_4__["DatagridState"](this);
            this.capturedForms = {}; // TODO: type as sf.Form instance array

            this.capturedPaginators = []; // TODO: type as sf.Paginator instance array

            this.defaults = {
              page: 1,
              limit: _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_LIMIT"]
            };
            this.init(ssf, node, options);
            this.options = Object.assign(Object.assign({}, Datagrid.defaultOptions), this.options);
            const additionalOptionsEl = node.querySelector('script[role="sf-options"]');

            if (additionalOptionsEl) {
              try {
                // eslint-disable-next-line
                const one = Function(`"use strict";return ${additionalOptionsEl.innerHTML.trim()}`); // console.log('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + '');

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

            this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["normalizeColumns"])(this.options.columns, this.options.sortable); // Set default sort if present

            if (this.options.sort) {
              if (typeof this.options.sort === 'string') {
                this.defaults.sortBy = this.options.sort;
                this.defaults.sortDir = _constants__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].ASC;
              } else {
                this.defaults.sortBy = this.options.sort.field;
                this.defaults.sortDir = this.options.sort.direction || _constants__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].ASC;
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
              const {
                id
              } = formInstance.options;
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
              } // eslint-disable-next-line


              formInstance.options.jsonOnly = true; // eslint-disable-next-line

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
              this.capturedPaginators.push(formInstance); // eslint-disable-next-line

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
            const paginators = this.sf.getInstances(_Paginator__WEBPACK_IMPORTED_MODULE_5__["default"].spiralFrameworkName) || [];
            paginators.forEach(f => {
              this.registerPaginatorInstance(f.instance);
            });
            this.sf.instancesController.events.on('onAddInstance', ({
              instance,
              type
            }) => {
              if (type === 'form') {
                this.registerFormInstance(instance);
              }

              if (type === _Paginator__WEBPACK_IMPORTED_MODULE_5__["default"].spiralFrameworkName) {
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
              if (this.state.sortDir === _constants__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].ASC) {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].DESC);
              } else {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].ASC);
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
                f.setParams(this.state.paginate, this.options.serialize);
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
                f.setParams(Object.assign(Object.assign({}, this.state.paginate), {
                  error: false
                }), this.options.serialize);
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
              if (f.setParams) {
                f.setParams({
                  error: true
                }, this.options.serialize);
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
              const isGet = this.options.method === _constants__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].GET;
              const data = this.formRequest();
              const request = this.sf.ajax.send({
                url: isGet ? Object(query_string__WEBPACK_IMPORTED_MODULE_2__["stringifyUrl"])({
                  url: this.options.url,
                  query: data
                }) : this.options.url,
                method: this.options.method,
                headers: this.options.headers,
                data: isGet ? undefined : data
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
              this.grids.push(new _render_GridRenderer__WEBPACK_IMPORTED_MODULE_7__["GridRenderer"](Object.assign(Object.assign({}, renderOption), {
                columns: renderOption.columns && renderOption.columns.length ? renderOption.columns : this.options.columns,
                sortable: renderOption.sortable && renderOption.sortable.length ? renderOption.sortable : this.options.sortable,
                paginator: typeof renderOption.paginator === 'undefined' ? this.options.paginator : renderOption.paginator
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
            const pagination = Object.keys(this.state.paginate).filter(k => _constants__WEBPACK_IMPORTED_MODULE_3__["pageParams"].indexOf(k) >= 0).reduce((map, key) => Object.assign(Object.assign({}, map), {
              [key]: this.state.paginate[key]
            }), {});
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
            } = values,
                  rest = __rest(values, ["page", "limit", "cid", "lid"]);

            this.state.updatePaginator({
              page: +page,
              limit: +limit,
              cid,
              lid
            }); // TODO: skip invalid page/limit values

            const {
              sortBy,
              sortDir
            } = rest,
                  rest2 = __rest(rest, ["sortBy", "sortDir"]);

            if (sortBy) {
              this.state.setSort(sortBy, sortDir || _constants__WEBPACK_IMPORTED_MODULE_3__["SortDirection"].ASC); // TODO: skip
            }

            [..._constants__WEBPACK_IMPORTED_MODULE_3__["pageParams"], ..._constants__WEBPACK_IMPORTED_MODULE_3__["sortParams"]].forEach(p => delete rest2[p]);
            this.state.urlData = rest2;
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
          } // eslint-disable-next-line class-methods-use-this


          getObjectFromUrl(defaults, prefix = '') {
            const obj = Object(query_string__WEBPACK_IMPORTED_MODULE_2__["parse"])(window.location.search, {
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

          putObjectToUrl(obj1, defaults, prefix = '') {
            if (!window.history) {
              console.warn('Cant update URL without reload, skipping');
              return;
            }

            const queryRaw = Object.keys(obj1).reduce((map, oK) => {
              // eslint-disable-next-line eqeqeq
              if (obj1[oK] && obj1[oK] != defaults[oK]) {
                return Object.assign(Object.assign({}, map), {
                  [`${prefix}${oK}`]: obj1[oK]
                });
              }

              return map;
            }, {});
            let obj2 = Object(query_string__WEBPACK_IMPORTED_MODULE_2__["parse"])(window.location.search, {
              parseNumbers: true,
              parseBooleans: true
            });

            if (typeof this.options.serialize === 'string') {
              Object.keys(k => {
                if (k.indexOf(this.options.serialize.toString()) === 0) {
                  delete obj2[k];
                }
              });
            } else {
              obj2 = {}; // If table is not using prefixes, all params are that table params
            }

            const query = Object.assign(Object.assign({}, obj2), queryRaw);
            window.history.pushState({}, document.title, Object(query_string__WEBPACK_IMPORTED_MODULE_2__["stringifyUrl"])({
              url: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
              query
            }));
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
          method: _constants__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].POST,
          sortable: [],
          url: '',
          serialize: true,
          paginator: true,
          ui: {
            cellAttributes: {},
            rowAttributes: {},
            rowClassName: '',
            cellClassName: {},
            tableClassName: 'table table-stripped',
            wrapperClassName: 'table-responsive'
          },
          renderers: _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_6__["defaultRenderer"]
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

      /*! exports provided: DatagridState */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DatagridState", function () {
          return DatagridState;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");

        class DatagridState {
          constructor(parent) {
            this.parent = parent;
            this.state = {
              loading: false,
              paginator: {
                page: 1,
                limit: _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_LIMIT"]
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
            const forms = Object.keys(this.state.formData).reduce((prev, key) => Object.assign(Object.assign({}, prev), this.state.formData[key]), {});
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

      /*! exports provided: Paginator, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
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


        var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! query-string */
        "../../node_modules/query-string/index.js");
        /* harmony import */


        var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts"); // import './styles.css';


        class Paginator extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
          constructor(ssf, node, options) {
            super();
            this.name = Paginator.spiralFrameworkName;
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
              error: false,
              limit: _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LIMIT"]
            };
            this.init(ssf, node, options);
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
            }
          }

          setParams(params, serialize) {
            this.options.serialize = serialize;
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
                    text: '...',
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
                    text: '...',
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

            if (this.options.onPageChange) {
              this.options.onPageChange(this.state);
            }

            this.render();
          }

          setPage(page) {
            this.state.page = page;

            if (this.options.onPageChange) {
              this.options.onPageChange(this.state);
            }

            this.render();
          }

          render() {
            const counterDiv = document.createElement('div');
            counterDiv.className = 'col-12 col-lg-4';

            if (this.hasPages()) {
              if (this.hasTotal()) {
                counterDiv.innerHTML = `Showing ${(this.state.page - 1) * this.state.limit + 1} to ${this.state.page * this.state.limit}` + ` of ${this.state.count} entries`;
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
              select.addEventListener('change', () => {
                this.setLimit(+select.value);
              });
            }

            const pagesDiv = document.createElement('div');
            pagesDiv.className = 'col-8 col-md-10 col-lg-6';

            if (this.hasPages()) {
              pagesDiv.innerHTML = '<ul class="pagination pagination-sm justify-content-end mb-0">';
              const ul = pagesDiv.querySelector('ul');
              const pageInfo = this.generatePageList();

              const addLi = (className, text, url, onClick) => {
                const li = document.createElement('li');
                li.className = className;

                if (onClick) {
                  li.addEventListener('click', onClick);
                }

                li.innerHTML = `<a href="${url || '#'}" tabindex="0" class="page-link">${text}</a>`;
                ul.appendChild(li);
              };

              const urlForPage = page => {
                if (!this.options.serialize) {
                  return undefined;
                }

                return Object(query_string__WEBPACK_IMPORTED_MODULE_1__["stringifyUrl"])({
                  url: window.location.href,
                  query: {
                    [this.options.serialize === true ? 'page' : `${this.options.serialize}page`]: page.toString()
                  }
                });
              };

              const clickForPage = page => e => {
                this.setPage(page);
                e.preventDefault();
                return false;
              };

              addLi(pageInfo.hasPrevious ? 'page-item previous' : 'page-item previous disabled', '«', pageInfo.hasPrevious ? urlForPage(this.state.page - 1) : undefined, pageInfo.hasPrevious ? clickForPage(this.state.page - 1) : undefined);
              pageInfo.pages.forEach(p => {
                addLi(p.active ? 'page-item active' : 'page-item', p.text, p.page ? urlForPage(p.page) : undefined, p.page ? clickForPage(p.page) : undefined);
              });
              addLi(pageInfo.hasNext ? 'page-item next' : 'page-item next disabled', '»', pageInfo.hasNext ? urlForPage(this.state.page + 1) : undefined, pageInfo.hasNext ? clickForPage(this.state.page + 1) : undefined);
            }

            if (!this.el) {
              this.el = document.createElement('div');
              this.node.appendChild(this.el);
            } else {
              this.el.innerHTML = ''; // TODO: dont rerender
            }

            const {
              el
            } = this;
            el.className = this.options.className || '';
            el.appendChild(counterDiv);
            el.appendChild(limitDiv);
            el.appendChild(pagesDiv);

            if (this.state.error) {
              el.style.opacity = '0'; // TODO: Better way?
            } else {
              el.style.opacity = '';
            }
          }

        }

        Paginator.spiralFrameworkName = 'datagrid-paginator';
        Paginator.defaultOptions = {
          id: '',
          lockType: 'none',
          fetchCount: true,
          serialize: true,
          fetchCountOnce: true,
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["PaginatorType"].pages,
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

      /*! exports provided: SortDirection, RequestMethod, PAGINATOR_CLASS_NAME, CURSOR_ID_FIELD, LAST_ID_FIELD, pageParams, sortParams, DEFAULT_LIMIT, PaginatorType */

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


        __webpack_require__.d(__webpack_exports__, "PAGINATOR_CLASS_NAME", function () {
          return PAGINATOR_CLASS_NAME;
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
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DEFAULT_LIMIT", function () {
          return DEFAULT_LIMIT;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PaginatorType", function () {
          return PaginatorType;
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

        const PAGINATOR_CLASS_NAME = 'sf-js-datagrid-paginator';
        const CURSOR_ID_FIELD = 'cid';
        const LAST_ID_FIELD = 'lid';
        const pageParams = ['page', 'limit', CURSOR_ID_FIELD, LAST_ID_FIELD];
        const sortParams = ['sortBy', 'sortDir'];
        const DEFAULT_LIMIT = 25;
        var PaginatorType;

        (function (PaginatorType) {
          PaginatorType["pages"] = "pages";
          PaginatorType["infinite"] = "infinite";
        })(PaginatorType || (PaginatorType = {}));
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


        var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");
        /* harmony import */


        var _Datagrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./Datagrid */
        "./src/Datagrid.ts");
        /* harmony import */


        var _Paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./Paginator */
        "./src/Paginator.ts");
        /* harmony import */


        var _render_premade_simpleCellFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./render/premade/simpleCellFormatter */
        "./src/render/premade/simpleCellFormatter.ts");

        const renders = {
          simpleCellFormatter: _render_premade_simpleCellFormatter__WEBPACK_IMPORTED_MODULE_4__["simpleCellFormatter"]
        };
        window.SFDatagridTools = renders; // TODO: How to export that properly?

        _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_Datagrid__WEBPACK_IMPORTED_MODULE_2__["default"], 'sf-js-datagrid'); // TODO: Type instance


        _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_Paginator__WEBPACK_IMPORTED_MODULE_3__["default"], _constants__WEBPACK_IMPORTED_MODULE_1__["PAGINATOR_CLASS_NAME"]); // TODO: Type instance

        /* harmony default export */


        __webpack_exports__["default"] = _Datagrid__WEBPACK_IMPORTED_MODULE_2__["default"]; // ES6 default export will not expose us as global

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


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.ts");
        /* harmony import */


        var _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./defaultBodyWrapper */
        "./src/render/defaultBodyWrapper.ts");
        /* harmony import */


        var _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./defaultFooterWrapper */
        "./src/render/defaultFooterWrapper.ts");
        /* harmony import */


        var _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./defaultHeaderCellRenderer */
        "./src/render/defaultHeaderCellRenderer.ts");
        /* harmony import */


        var _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./defaultHeaderWrapper */
        "./src/render/defaultHeaderWrapper.ts");
        /* harmony import */


        var _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./defaultRowRenderer */
        "./src/render/defaultRowRenderer.ts");
        /* harmony import */


        var _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./defaultRowWrapper */
        "./src/render/defaultRowWrapper.ts");
        /* harmony import */


        var _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./defaultTableWrapper */
        "./src/render/defaultTableWrapper.ts");

        let instanceCounter = 1;

        class GridRenderer {
          constructor(options, root) {
            this.options = options;
            this.root = root; // eslint-disable-next-line

            this.instance = instanceCounter++;
            this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["normalizeColumns"])(this.options.columns, this.options.sortable);
            this.create();
          }

          create() {
            this.wrapper = document.createElement('div');
            this.wrapper.setAttribute('role', 'sf-datagrid-wrapper');
            this.wrapper.setAttribute('class', this.options.ui.wrapperClassName || '');
            this.root.node.innerHTML = '';
            this.root.node.appendChild(this.wrapper);

            if (this.options.paginator) {
              this.createDefaultPaginator();
            }

            const tableRenderer = this.options.tableWrapper || _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_8__["defaultTableWrapper"];
            this.tableEl = tableRenderer(this.wrapper, this.options);
          }

          createDefaultPaginator() {
            const id = `${Date.now()}${this.instance}`;
            this.root.options.captureForms.push(id);
            this.paginatorEl = document.createElement('div');
            this.paginatorEl.className = _constants__WEBPACK_IMPORTED_MODULE_0__["PAGINATOR_CLASS_NAME"];
            this.paginatorEl.id = id;
            this.root.node.appendChild(this.paginatorEl);
          } // eslint-disable-next-line class-methods-use-this


          applyAdditionalCellAttributes(el, column, options, state, index) {
            const cellMeta = {
              id: column.id,
              column,
              index,
              // rowSelected: (state as any).isSelected(index),
              rowSelected: false,
              state,
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
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, options.ui.cellAttributes(cellMeta));
              } else {
                const specific = options.ui.cellAttributes[column.id];

                if (specific) {
                  if (typeof specific === 'function') {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, specific(cellMeta));
                  } else {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, specific);
                  }
                }
              }
            }
          } // eslint-disable-next-line class-methods-use-this


          applyAdditionalHeaderCellAttributes(el, column, options, state) {
            const cellMeta = {
              id: column.id,
              column,
              index: 0,
              rowSelected: false,
              state,
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
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, options.ui.headerCellAttributes(cellMeta));
              } else {
                const specific = options.ui.headerCellAttributes[column.id];

                if (specific) {
                  if (typeof specific === 'function') {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, specific(cellMeta));
                  } else {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["applyAttrributes"])(el, specific);
                  }
                }
              }
            }
          }

          render(state) {
            // Render header
            const headerRenderer = this.options.headerWrapper || _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_5__["defaultHeaderWrapper"];

            if (this.headerEl) {
              this.tableEl.removeChild(this.headerEl);
            }

            this.headerEl = headerRenderer(this.tableEl, this.options, state);

            if (this.headerEl) {
              this.tableEl.appendChild(this.headerEl);

              if (this.columnInfo.length) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                this.columnInfo.forEach((cI, index) => {
                  const headerCellRenderer = (this.options.headerList || {})[cI.id] || _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_4__["defaultHeaderCellRenderer"];
                  const node = headerCellRenderer(cI, this.options, state);
                  this.applyAdditionalHeaderCellAttributes(node, cI, this.options, state);
                  this.headerEl.appendChild(node);
                });
              }
            } // Render body


            if (this.bodyEl) {
              this.tableEl.removeChild(this.bodyEl);
            }

            const bodyRenderer = this.options.bodyWrapper || _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_2__["defaultBodyWrapper"];
            this.bodyEl = bodyRenderer(this.tableEl, this.options, state);

            if (this.bodyEl) {
              this.tableEl.appendChild(this.bodyEl);
              const row = this.options.rowWrapper || _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_7__["defaultRowWrapper"];
              state.data.forEach((item, index) => {
                const el = row(this.bodyEl, this.options, state, index);
                this.columnInfo.forEach(cI => {
                  const rowCellRenderer = (this.options.cells || {})[cI.id] || _defaultRowRenderer__WEBPACK_IMPORTED_MODULE_6__["defaultRowCellRenderer"];
                  const node = rowCellRenderer(cI, this.options, state, index);
                  this.applyAdditionalCellAttributes(node, cI, this.options, state, index);
                  el.appendChild(node);
                });
              });
            } // Render footer


            if (this.footerEl) {
              this.tableEl.removeChild(this.footerEl);
            }

            const footerRenderer = this.options.footerWrapper || _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_3__["defaultFooterWrapper"];
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
        }); // eslint-disable-next-line @typescript-eslint/no-unused-vars


        const defaultFooterWrapper = (node, options, state) => undefined;
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
        }); // eslint-disable-next-line @typescript-eslint/no-unused-vars


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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            cellAttributes: cellMeta => ({}),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            rowAttributes: rowMeta => ({})
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
        }); // eslint-disable-next-line @typescript-eslint/no-unused-vars


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

        const normalizeColumns = (columns, sortables) => {
          const sList = sortables.map(s => {
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
        "@spiral-toolkit/core").default;

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


            if (domNode.nodeName === 'SELECT') {
              if (domNode.type === 'select-multiple') {
                result[keys] = [];
                const DOMchilds = domNode.querySelectorAll('option[selected]'); // TODO: that wont work

                if (DOMchilds) {
                  this.forEach(DOMchilds, child => {
                    result[keys].push(child.value);
                  });
                }
              } else {
                // const selected = domNode.querySelector('option[selected]');
                result[keys] = value; // select.value isn't getting proper value for value-less options
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
        "@spiral-toolkit/core").default;

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
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybU1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzP2YwZjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJGb3JtIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJqc29uT25seSIsIndpbmRvdyIsIkZvcm1EYXRhIiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJpZCIsInZhbHVlIiwiZG9tQXR0ciIsInVybCIsIm1ldGhvZCIsImxvY2tUeXBlIiwibWVzc2FnZXNUeXBlIiwibWVzc2FnZXMiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwidXNlQWpheCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiYWpheENhbGxiYWNrIiwiYmVmb3JlU3VibWl0Q2FsbGJhY2siLCJhZnRlclN1Ym1pdENhbGxiYWNrIiwiaGVhZGVycyIsIkFjY2VwdCIsImdsb2JhbCIsImluc3RhbmNlcyIsImZvcm0iLCJmb3JtTWVzc2FnZXMiLCJkZWZhdWx0cyIsIm9uU3VibWl0IiwiZ2V0SW5zdGFuY2UiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZU1lc3NhZ2VzIiwiZGF0YSIsImdldEZvcm1EYXRhIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRyaWdnZXIiLCJzZW5kIiwibG9jayIsImFkZEluc3RhbmNlIiwidHlwZSIsIndhcm4iLCJvblByb2dyZXNzIiwicHJvZ3Jlc3MiLCJ1bmxvY2siLCJyZW1vdmVJbnN0YW5jZSIsInNob3dGb3JtTWVzc2FnZSIsInNob3dGaWVsZE1lc3NhZ2UiLCJzaG93RmllbGRzTWVzc2FnZXMiLCJzaG93TWVzc2FnZXMiLCJyZW1vdmVNZXNzYWdlIiwicHJvY2Vzc0Fuc3dlciIsImFuc3dlciIsInNob3dVbmtub3duIiwic2V0RmllbGRWYWx1ZXMiLCJ2YWx1ZXMiLCJlbCIsInNmU2V0VmFsdWUiLCJjaGVja2VkIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsImVudW1lcmF0ZUZpZWxkTmFtZXMiLCJsb2ciLCJtYXAiLCJnZXRBdHRyaWJ1dGUiLCJvcHRDYWxsYmFjayIsImZuIiwiZXZhbCIsImNhbGwiLCJzZW5kT3B0aW9ucyIsInRoYXQiLCJhamF4IiwidGhlbiIsIkZvcm1Ub09iamVjdCIsInNldE9wdGlvbnMiLCJvcHQiLCJhZGQiLCJET01Ob2RlIiwiZXZlbnRUeXBlIiwiZXZlbnRGdW5jdGlvbiIsImRpZSIsInJlbW92ZUFsbCIsInJlcXVpcmUiLCJkZWZhdWx0IiwidGVtcGxhdGUiLCJjbG9zZSIsInBsYWNlIiwibGV2ZWxzIiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwic2VsZWN0b3IiLCJmaWVsZCIsImZpZWxkRWxlbWVudCIsImZpZWxkVGVtcGxhdGUiLCJmaWVsZFBsYWNlIiwiZmllbGRDbGFzc2VzIiwibWVzc2FnZSIsImRlYnVnIiwibm90aWNlIiwiZGFuZ2VyIiwiY3JpdGljYWwiLCJhbGVydCIsImVtZXJnZW5jeSIsInByZXBhcmVNZXNzYWdlT2JqZWN0IiwidGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc01zZyIsImtleXMiLCJmb3JFYWNoIiwiZXJyb3JzIiwid2FybmluZ3MiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiX21lc3NhZ2VzIiwibSIsImNsb3NlSGFuZGxlciIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZpZWxkRWwiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3BsaWNlIiwicGFyZW50IiwidHBsIiwiaXRlbSIsImhhc093blByb3BlcnR5IiwicmVwbGFjZSIsInRwbEVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJtc2dFbCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInB1c2giLCJpc0NvbnRhaW5lciIsImRvbVRvb2xzIiwiY2xvc2VzdCIsImN1cnJlbnRNc2dFbCIsIm5leHRTaWJsaW5nIiwiZmllbGRDbG9zZSIsIm5vdEZvdW5kIiwibXNnT2JqIiwiY29udGFpbmVyIiwiZm9ybVJlZiIsImtleVJlZ2V4IiwiJGZvcm0iLCIkZm9ybUVsZW1lbnRzIiwiZm9ybU9iaiIsInNldEZvcm0iLCJzZXRGb3JtRWxlbWVudHMiLCJzZXRGb3JtT2JqIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc0RvbU5vZGUiLCJub2RlVHlwZSIsImFyciIsImNhbGxiYWNrIiwiaSIsImFkZENoaWxkIiwicmVzdWx0IiwiZG9tTm9kZSIsIm5vZGVOYW1lIiwiRE9NY2hpbGRzIiwiY2hpbGQiLCJ0ZXN0IiwiZGlzYWJsZWQiLCJtYXRjaCIsInJlZ2lzdGVySW5zdGFuY2VUeXBlIiwiZmluZE5vZGVzIiwibmFtZXMiLCJwcmVmaXgiLCJwYXJ0T2ZTZWxlY3RvciIsInRvU3RyaW5nIiwic2VsIiwibm9kZXMiLCJtYXgiLCJvYmoiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywrR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsa0JBQWtCLEdBQUcseUdBQXlHLG1CQUFtQixHQUFHLFNBQVMsaUVBQWlFLFVBQVUs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QUNEOztBQUNELFNBQU9rSCxRQUFQO0FBQ0QsQ0FSRDs7QUFVQTFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5ILGFBQWpCLEM7Ozs7Ozs7Ozs7O0FDbEZBLFVBQVUsbUJBQU8sQ0FBQyw2SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsNEpBQTRFOztBQUU5Rzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsa0UiLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHNwaXJhbC10b29sa2l0L2Zvcm1cIiwgW1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHNwaXJhbC10b29sa2l0L2Zvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQHNwaXJhbC10b29sa2l0L2Zvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJbZGF0YS1mb3JtLW1lc3NhZ2VdIH4gW2RhdGEtZm9ybS1oaW50XSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaXMtaW52YWxpZFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXJdPi5pbnZhbGlkLWZlZWRiYWNrLFxcbi5pcy1pbnZhbGlkW2RhdGEtZmllbGRdPi5pbnZhbGlkLWZlZWRiYWNrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGNBQWM7QUFDaEJcIixcImZpbGVcIjpcInN0eWxlcy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiW2RhdGEtZm9ybS1tZXNzYWdlXSB+IFtkYXRhLWZvcm0taGludF0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlzLWludmFsaWRbZGF0YS1tZXNzYWdlLXBsYWNlaG9sZGVyXT4uaW52YWxpZC1mZWVkYmFjayxcXG4uaXMtaW52YWxpZFtkYXRhLWZpZWxkXT4uaW52YWxpZC1mZWVkYmFjayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmltcG9ydCBjb3JlIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcblxuaW1wb3J0IEZvcm1Ub09iamVjdCBmcm9tICcuL2Zvcm1Ub09iamVjdCc7XG5pbXBvcnQgZm9ybU1lc3NhZ2VzIGZyb20gJy4vZm9ybU1lc3NhZ2VzJztcbmltcG9ydCBpdGVyYXRlSW5wdXRzIGZyb20gJy4vaXRlcmF0ZUlucHV0cyc7XG5cbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxubGV0IGlkQ291bnRlciA9IDE7XG5cblxuLyoqXG4gKiBTcGlyYWwgRm9ybXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAY29uc3RydWN0b3IgRm9ybVxuICogQGV4dGVuZHMgQmFzZURPTUNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEZvcm0gPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5fY29uc3RydWN0KHNmLCBub2RlLCBvcHRpb25zKTtcbn07XG5cblxuLyoqXG4gKiBAbGVuZHMgc2YuRm9ybS5wcm90b3R5cGVcbiAqL1xuRm9ybS5wcm90b3R5cGUgPSBjb3JlLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSgpO1xuXG4vKipcbiAqIE5hbWUgdG8gcmVnaXN0ZXJcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbkZvcm0ucHJvdG90eXBlLm5hbWUgPSAnZm9ybSc7XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBjYWxsIG9uIG5ldyBpbnN0YW5jZSBpcyBjcmVhdGVkLlxuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAgRG9tTm9kZSBvZiBmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIHRvIG92ZXJyaWRlIGRlZmF1bHRcbiAqIEBwcml2YXRlXG4gKi9cbkZvcm0ucHJvdG90eXBlLl9jb25zdHJ1Y3QgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5pbml0KHNmLCBub2RlLCBvcHRpb25zKTtcbiAgdGhpcy5vcHRpb25zLmpzb25Pbmx5ID0gdGhpcy5vcHRpb25zLmpzb25Pbmx5ICYmICEhd2luZG93LkZvcm1EYXRhO1xuICB0aGlzLm1peE1lc3NhZ2VzT3B0aW9ucygpO1xuICAvLyB0aGlzLm9wdGlvbnMuZmlsbEZyb20gJiYgdGhpcy5maWxsRmllbGRzRnJvbSgpOyAvLyBpZCByZXF1aXJlZCB0byBmaWxsIGZvcm1cblxuICAvKipcbiAgICAgKiBAZXh0ZW5kcyBET01FdmVudHNcbiAgICAgKiBAdHlwZSB7RE9NRXZlbnRzfVxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICogKi9cbiAgdGhpcy5ET01FdmVudHMgPSBuZXcgdGhpcy5zZi5oZWxwZXJzLkRPTUV2ZW50cygpO1xuICB0aGlzLmFkZEV2ZW50cygpO1xuXG4gIHRoaXMuZXZlbnRzID0gbmV3IHRoaXMuc2YuY29yZS5FdmVudHMoWydiZWZvcmVTZW5kJywgJ3N1Y2Nlc3MnLCAnZXJyb3InLCAnYWx3YXlzJ10pO1xuICBjb3JlLml0ZXJhdGVJbnB1dHMgPSBpdGVyYXRlSW5wdXRzO1xufTtcblxuLyoqXG4gKiBAb3ZlcnJpZGVcbiAqIEBpbmhlcml0RG9jXG4gKiBAZW51bSB7T2JqZWN0fVxuICogQGRlcHJlY2F0ZWRcbiAqL1xuRm9ybS5wcm90b3R5cGUub3B0aW9uc1RvR3JhYiA9IHtcbiAgLyoqXG4gICAgICogTGluayB0byBmb3JtXG4gICAgICovXG4gIGNvbnRleHQ6IHtcbiAgICBwcm9jZXNzb3Iobm9kZSkgeyAvLyBQcm9jZXNzb3JcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIExpbmsgdG8gJ3RoaXMnXG4gICAgICovXG4gIHNlbGY6IHtcbiAgICBwcm9jZXNzb3IoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICB9LFxuICBpZDoge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgIHZhbHVlOiBgZm9ybToke2lkQ291bnRlcisrfWAsXG4gICAgZG9tQXR0cjogJ2lkJyxcbiAgfSxcbiAgLyoqXG4gICAgICogVVJMIHRvIHNlbmQgZm9ybSAoaWYgYWpheCBmb3JtKSA8Yj5EZWZhdWx0OiBcIi9cIjwvYj5cbiAgICAgKi9cbiAgdXJsOiB7XG4gICAgZG9tQXR0cjogJ2FjdGlvbicsXG4gICAgdmFsdWU6ICcvJyxcbiAgfSxcbiAgLyoqXG4gICAgICogTWV0aG9kIHRvIHNlbmQgdG8gc2VuZCBmb3JtIChpZiBhamF4IGZvcm0pIDxiPkRlZmF1bHQ6IFwiUE9TVFwiPC9iPlxuICAgICAqL1xuICBtZXRob2Q6IHtcbiAgICBkb21BdHRyOiAnbWV0aG9kJyxcbiAgICB2YWx1ZTogJ1BPU1QnLFxuICB9LFxuICAvKipcbiAgICAgKiBMb2NrIHR5cGUgd2hlbiBmb3JtIHNlbmRpbmcgPGI+RGVmYXVsdDogXCJkZWZhdWx0XCI8L2I+IEBzZWUgc2YubG9ja1xuICAgICAqL1xuICBsb2NrVHlwZToge1xuICAgIHZhbHVlOiAnZGVmYXVsdCcsXG4gICAgZG9tQXR0cjogJ2RhdGEtbG9jay10eXBlJyxcbiAgfSxcbiAgLyoqXG4gICAgICogRm9yY2UgdG8gbm90IHVzZSBGb3JtRGF0YSBldmVuIGlmIGl0J3MgYXZhaWxhYmxlXG4gICAgICovXG4gIGpzb25Pbmx5OiB7XG4gICAgdmFsdWU6IGZhbHNlLFxuICAgIGRvbUF0dHI6ICdkYXRhLWpzb24tb25seScsXG4gIH0sXG4gIC8qKlxuICAgICAqXG4gICAgICovXG4gIG1lc3NhZ2VzVHlwZToge1xuICAgIHZhbHVlOiAnc3BpcmFsJyxcbiAgICBkb21BdHRyOiAnZGF0YS1tZXNzYWdlcy10eXBlJyxcbiAgfSxcbiAgLyoqXG4gICAgICogUGFzcyBjdXN0b20gdGVtcGxhdGUgZm9yIGZvcm0gbWVzc2FnZXNcbiAgICAgKi9cbiAgbWVzc2FnZXM6IHtcbiAgICB2YWx1ZTogJycsXG4gICAgZG9tQXR0cjogJ2RhdGEtbWVzc2FnZXMnLFxuICAgIHByb2Nlc3Nvcihub2RlLCB2YWwsIHNlbGYpIHtcbiAgICAgIGlmICghdmFsKSByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UodmFsKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gSlNPTi5wYXJzZSBlcnJvcjogJywgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHNlbGYudmFsdWUsIHZhbCk7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogVXNlIGFqYXggdG8gc3VibWl0IGZvcm0gPGI+RGVmYXVsdDogdHJ1ZTwvYj5cbiAgICAgKi9cbiAgdXNlQWpheDogeyAvLyBBdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiB0cnVlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtdXNlLWFqYXgnLFxuICAgIHByb2Nlc3Nvcihub2RlLCB2YWwpIHsgLy8gcHJvY2Vzc29yIHRvIHByb2Nlc3MgZGF0YSBiZWZvcmUgcmV0dXJuXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgICB2YWwgPSAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsKSA/IHZhbC50b0xvd2VyQ2FzZSgpIDogJyc7XG4gICAgICBpZiAodmFsID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHZhbCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBDYWxsYmFjayBhZnRlciBmb3JtIHN1Ym1pdHRpbmcgPGI+RGVmYXVsdDogZmFsc2U8L2I+XG4gICAgICogPGJyLz5cbiAgICAgKiA8Yj4gRXhhbXBsZSA8L2I+XG4gICAgICogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgICogIC8vb3B0aW9ucyBjb250YWlucyBhbGwgb3B0aW9ucyBhZnRlciBzZW5kXG4gICAgICogfVxuICAgICAqL1xuICBhamF4Q2FsbGJhY2s6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogZmFsc2UsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1jYWxsYmFjaycsXG4gIH0sXG4gIGJlZm9yZVN1Ym1pdENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtYmVmb3JlLXN1Ym1pdCcsXG4gIH0sXG4gIGFmdGVyU3VibWl0Q2FsbGJhY2s6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogZmFsc2UsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1hZnRlci1zdWJtaXQnLFxuICB9LFxuICBoZWFkZXJzOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWhlYWRlcnMnLFxuICAgIHByb2Nlc3Nvcihub2RlLCB2YWwsIHNlbGYpIHtcbiAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKHZhbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtIEpTT04ucGFyc2UgZXJyb3I6ICcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzZWxmLnZhbHVlLCB2YWwpO1xuICAgIH0sXG4gIH0sXG59O1xuXG5Gb3JtLnByb3RvdHlwZS5taXhNZXNzYWdlc09wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdsb2JhbCA9IHRoaXMuc2Yub3B0aW9ucy5pbnN0YW5jZXMuZm9ybTtcbiAgdGhpcy5vcHRpb25zLm1lc3NhZ2VzID0ge1xuICAgIC4uLmZvcm1NZXNzYWdlcy5kZWZhdWx0cyxcbiAgICAuLi5nbG9iYWwgJiYgZ2xvYmFsLm1lc3NhZ2VzICYmIGdsb2JhbC5tZXNzYWdlc1t0aGlzLm9wdGlvbnMubWVzc2FnZXNUeXBlXSxcbiAgICAuLi50aGlzLm9wdGlvbnMubWVzc2FnZXMsXG4gIH07XG59O1xuXG4vKipcbiAqIENhbGwgb24gZm9ybSBzdWJtaXRcbiAqIEBwYXJhbSB7RXZlbnR9IGUgc3VibWl0IGV2ZW50XG4gKi9cbkZvcm0ucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgaWYgKHRoaXMuc2YuZ2V0SW5zdGFuY2UoJ2xvY2snLCB0aGlzLm5vZGUpKSB7XG4gICAgLy8gT24gbG9jayB3ZSBzaG91bGQnbiBkbyBhbnkgYWN0aW9uc1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMucmVtb3ZlTWVzc2FnZXMoKTtcblxuICB0aGlzLm9wdGlvbnMuZGF0YSA9IHRoaXMuZ2V0Rm9ybURhdGEoKTtcblxuICAvLyBXZSBjYW4gc2VuZCBmaWxlcyBvbmx5IHdpdGggRm9ybURhdGFcbiAgLy8gSWYgZm9ybSBjb250YWluIGZpbGVzIGFuZCBubyBGb3JtRGF0YSB0aGFuIGRpc2FibGUgYWpheFxuICBpZiAoIXRoaXMub3B0aW9ucy5qc29uT25seSAmJiB0aGlzLm9wdGlvbnMuY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nZmlsZSddXCIpLmxlbmd0aCAhPT0gMCkge1xuICAgIHRoaXMub3B0aW9ucy51c2VBamF4ID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5ldmVudHMudHJpZ2dlcignYmVmb3JlU2VuZCcsIHRoaXMub3B0aW9ucyk7XG4gIC8vIHNmLmV2ZW50cy5wZXJmb3JtQWN0aW9uKFwiYmVmb3JlU3VibWl0XCIsIHRoaXMub3B0aW9ucyk7XG4gIC8vIHRoaXMuZXZlbnRzLnBlcmZvcm1BY3Rpb24oXCJiZWZvcmVTdWJtaXRcIiwgdGhpcy5vcHRpb25zKTtcblxuICBpZiAodGhpcy5vcHRpb25zLnVzZUFqYXgpIHtcbiAgICB0aGlzLnNlbmQodGhpcy5vcHRpb25zKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59O1xuXG4vKipcbiAqIExvY2tlci4gQWRkIG9yIHJlbW92ZS5cbiAqL1xuRm9ybS5wcm90b3R5cGUubG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLm9wdGlvbnMubG9ja1R5cGUgfHwgdGhpcy5vcHRpb25zLmxvY2tUeXBlID09PSAnbm9uZScpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbG9jayA9IHRoaXMuc2YuYWRkSW5zdGFuY2UoJ2xvY2snLCB0aGlzLm5vZGUsIHsgdHlwZTogdGhpcy5vcHRpb25zLmxvY2tUeXBlIH0pO1xuICBpZiAoIWxvY2spIHtcbiAgICBjb25zb2xlLndhcm4oXCJZb3UgdHJ5IHRvIGFkZCAnbG9jaycgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIGFscmVhZHkgc3RhcnRlZFwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5vcHRpb25zLm9uUHJvZ3Jlc3MgPSBsb2NrLnByb2dyZXNzO1xufTtcblxuLyoqXG4gKiBMb2NrZXIuIEFkZCBvciByZW1vdmUuXG4gKi9cbkZvcm0ucHJvdG90eXBlLnVubG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLm9wdGlvbnMubG9ja1R5cGUgfHwgdGhpcy5vcHRpb25zLmxvY2tUeXBlID09PSAnbm9uZScpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF0aGlzLnNmLnJlbW92ZUluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xuICAgIGNvbnNvbGUud2FybihcIllvdSB0cnkgdG8gcmVtb3ZlICdsb2NrJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3Igbm90IHN0YXJ0ZWRcIik7XG4gIH1cbn07XG5cbi8vIEZvcm0gbWVzc2FnZXNcbkZvcm0ucHJvdG90eXBlLnNob3dGb3JtTWVzc2FnZSA9IGZvcm1NZXNzYWdlcy5zaG93Rm9ybU1lc3NhZ2U7XG5Gb3JtLnByb3RvdHlwZS5zaG93RmllbGRNZXNzYWdlID0gZm9ybU1lc3NhZ2VzLnNob3dGaWVsZE1lc3NhZ2U7XG5Gb3JtLnByb3RvdHlwZS5zaG93RmllbGRzTWVzc2FnZXMgPSBmb3JtTWVzc2FnZXMuc2hvd0ZpZWxkc01lc3NhZ2VzO1xuRm9ybS5wcm90b3R5cGUuc2hvd01lc3NhZ2VzID0gZm9ybU1lc3NhZ2VzLnNob3dNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnJlbW92ZU1lc3NhZ2VzID0gZm9ybU1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2VzO1xuRm9ybS5wcm90b3R5cGUucmVtb3ZlTWVzc2FnZSA9IGZvcm1NZXNzYWdlcy5yZW1vdmVNZXNzYWdlO1xuXG5Gb3JtLnByb3RvdHlwZS5wcm9jZXNzQW5zd2VyID0gZnVuY3Rpb24gKGFuc3dlciwgc2hvd1Vua25vd24gPSB0cnVlKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXNUeXBlKSB7XG4gICAgdGhpcy5zaG93TWVzc2FnZXMoYW5zd2VyLCBzaG93VW5rbm93bik7XG4gIH1cbn07XG5cbkZvcm0ucHJvdG90eXBlLnNldEZpZWxkVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICB0aGlzLnNmLml0ZXJhdGVJbnB1dHModGhpcy5ub2RlLCB2YWx1ZXMsIChlbCwgdmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIGVsLnNmU2V0VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVsLnNmU2V0VmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWwudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpZiAoIWVsLnZhbHVlKSB7IC8vIHNpbmdsZSBjaGVja2JveFxuICAgICAgICAgIGVsLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXEsbWF4LWxlblxuICAgICAgICAgIGVsLmNoZWNrZWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/ICh2YWx1ZS5pbmRleE9mKGVsLnZhbHVlKSA+PSAwKSA6IChlbC52YWx1ZSA9PSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7IC8vIFRPRE86IFRoYXQgd29udCB3b3JrIGZvciByYWRpb2dyb3VwcywgZXRjLlxuICAgIH1cbiAgfSk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5lbnVtZXJhdGVGaWVsZE5hbWVzID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyh0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsc2VsZWN0LHRleHRhcmVhJykpO1xuICByZXR1cm4gWy4uLnRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnKV0ubWFwKChlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKCduYW1lJykpOyAvLyBUT0RPOiBzdXBwb3J0IGN1c3RvbSBpbnB1dHMgdG9vXG59O1xuXG5Gb3JtLnByb3RvdHlwZS5vcHRDYWxsYmFjayA9IGZ1bmN0aW9uIChvcHRpb25zLCB0eXBlKSB7XG4gIGlmIChvcHRpb25zW3R5cGVdKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcbiAgICBjb25zdCBmbiA9IGV2YWwob3B0aW9uc1t0eXBlXSk7XG4gICAgaWYgKHR5cGVvZiAoZm4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2VuZCBmb3JtIHRvIHNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IHNlbmRPcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoc2VuZE9wdGlvbnMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG4gIGlmICh0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYmVmb3JlU3VibWl0Q2FsbGJhY2snKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5sb2NrKCk7XG4gIHRoaXMuc2YuYWpheC5zZW5kKHNlbmRPcHRpb25zKS50aGVuKFxuICAgIChhbnN3ZXIpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBzZW5kT3B0aW9ucyk7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICB0aGF0LmV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LFxuICApLnRoZW4oKGFuc3dlcikgPT4ge1xuICAgIHRoYXQubG9jayh0cnVlKTtcbiAgICB0aGF0LnByb2Nlc3NBbnN3ZXIoYW5zd2VyKTtcbiAgICB0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYWZ0ZXJTdWJtaXRDYWxsYmFjaycpO1xuICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Fsd2F5cycsIHNlbmRPcHRpb25zKTtcbiAgfSk7XG5cbiAgLy8gVG8gY2FuY2VsIHJlcXVlc3Q6XG4gIC8vIGlmICh0aGlzLnNmLmFqYXguY2FuY2VsKSB0aGlzLnNmLmFqYXguY2FuY2VsKCk7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkZvcm0ucHJvdG90eXBlLmdldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5qc29uT25seSkge1xuICAgIHJldHVybiBuZXcgRm9ybURhdGEodGhpcy5vcHRpb25zLmNvbnRleHQpO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKGBGb3JtIFxcYCR7dGhpcy5vcHRpb25zLmNvbnRleHR9XFxgIHdlcmUgcHJvY2Vzc2VkIHdpdGhvdXQgRm9ybURhdGEuYCk7XG4gIHJldHVybiBuZXcgRm9ybVRvT2JqZWN0KHRoaXMub3B0aW9ucy5jb250ZXh0KTtcbn07XG5cbi8qKlxuICogU2V0IG9wdGlvbnMgKG92ZXJ3cml0ZSBjdXJyZW50KVxuICogQHBhcmFtIHtPYmplY3R9IG9wdCBvcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0KSB7XG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHQpO1xufTtcblxuLyoqXG4gKiBBZGQgYWxsIGV2ZW50cyBmb3IgZm9ybXNcbiAqL1xuRm9ybS5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgdGhpcy5ET01FdmVudHMuYWRkKFtcbiAgICB7XG4gICAgICBET01Ob2RlOiB0aGlzLm9wdGlvbnMuY29udGV4dCxcbiAgICAgIGV2ZW50VHlwZTogJ3N1Ym1pdCcsXG4gICAgICBldmVudEZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGhhdC5vblN1Ym1pdC5jYWxsKHRoYXQsIGUpO1xuICAgICAgfSxcbiAgICB9LFxuICBdKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHZhcmlhYmxlcyBhbmQgZGllXG4gKi9cbkZvcm0ucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5ET01FdmVudHMucmVtb3ZlQWxsKCk7XG4gIC8vIFRPRE8gZG9uJ3Qgd2UgbmVlZCB0byByZW1vdmUgaXQncyBhZGRvbnMgYW5kIHBsdWdpbnM/XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZyAqL1xuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpLmRlZmF1bHQ7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAvLyB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJhbGVydCBmb3JtLW1zZyAke3R5cGV9XCI+PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiPsOXPC9idXR0b24+PHAgY2xhc3M9XCJtc2dcIj4ke3RleHR9PC9wPjwvZGl2PicsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dHlwZX0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93XCIgcm9sZT1cImFsZXJ0XCI+J1xuICAgICsgJyR7dGV4dH0nXG4gICAgKyAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+J1xuICAgICsgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+J1xuICAgICsgJzwvYnV0dG9uPidcbiAgICArICc8L2Rpdj4nLFxuICBjbG9zZTogJy5jbG9zZScsXG4gIHBsYWNlOiAnYm90dG9tJyxcbiAgbGV2ZWxzOiB7XG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLCBpbmZvOiAnaW5mbycsIHdhcm5pbmc6ICd3YXJuaW5nJywgZXJyb3I6ICdkYW5nZXInLFxuICB9LFxuICBzZWxlY3RvcjogJ1tkYXRhLW1lc3NhZ2VdJyxcbiAgZmllbGQ6ICdbZGF0YS1maWVsZF0nLFxuICBmaWVsZEVsZW1lbnQ6ICdbZGF0YS1pbnB1dF0nLFxuICBmaWVsZFRlbXBsYXRlOiAnPGRpdiBkYXRhLW1lc3NhZ2UgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCIgZGF0YS1mb3JtLW1lc3NhZ2U+JHt0ZXh0fTwvZGl2PicsXG4gIGZpZWxkUGxhY2U6ICdib3R0b20nLFxuICBmaWVsZENsYXNzZXM6IHtcbiAgICBzdWNjZXNzOiAnaXMtdmFsaWQnLCBpbmZvOiAnaXMtdmFsaWQnLCB3YXJuaW5nOiAnaXMtaW52YWxpZCcsIGVycm9yOiAnaXMtaW52YWxpZCcsXG4gIH0sXG59O1xuXG4vLyBPZnRlbiB1c2VkIGFsaWFzXG5kZWZhdWx0cy5sZXZlbHMubWVzc2FnZSA9IGRlZmF1bHRzLmxldmVscy5zdWNjZXNzO1xuXG4vLyBPdGhlciBhbGlhc2VzXG4vLyBQU1ItMyBzZXZlcml0eSBsZXZlbHMgbWFwcGluZyAoZGVidWcsIGluZm8sIG5vdGljZSwgd2FybmluZywgZXJyb3IsIGNyaXRpY2FsLCBhbGVydCwgZW1lcmdlbmN5KVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BocC1maWcvZmlnLXN0YW5kYXJkcy9ibG9iL21hc3Rlci9hY2NlcHRlZC9QU1ItMy1sb2dnZXItaW50ZXJmYWNlLm1kXG5kZWZhdWx0cy5sZXZlbHMuZGVidWcgPSBkZWZhdWx0cy5sZXZlbHMuc3VjY2VzcztcbmRlZmF1bHRzLmxldmVscy5pbmZvID0gZGVmYXVsdHMubGV2ZWxzLm5vdGljZSA9IGRlZmF1bHRzLmxldmVscy5pbmZvO1xuZGVmYXVsdHMubGV2ZWxzLmRhbmdlciA9IGRlZmF1bHRzLmxldmVscy5jcml0aWNhbCA9IGRlZmF1bHRzLmxldmVscy5hbGVydCA9IGRlZmF1bHRzLmxldmVscy5lbWVyZ2VuY3kgPSBkZWZhdWx0cy5sZXZlbHMuZXJyb3I7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gJ29iamVjdCcpIHtcbiAgICBtZXNzYWdlID0geyB0ZXh0OiBtZXNzYWdlLCB0eXBlIH07XG4gIH1cbiAgbWVzc2FnZS50ZXh0ID0gbWVzc2FnZS50ZXh0IHx8IG1lc3NhZ2UubWVzc2FnZSB8fCBtZXNzYWdlO1xuICBtZXNzYWdlLnR5cGUgPSBtZXNzYWdlLnR5cGUgfHwgdHlwZTtcbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0cyxcbiAgc2hvd01lc3NhZ2VzKGFuc3dlciwgc2hvd1Vua25vd24gPSB0cnVlKSB7XG4gICAgaWYgKCFhbnN3ZXIpIHJldHVybjtcblxuICAgIGxldCBpc01zZyA9IGZhbHNlO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgaWYgKGFuc3dlci5kYXRhKSB7XG4gICAgICAvLyBmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscykge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscykuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBpZiAoYW5zd2VyLmRhdGFbdHlwZV0pIHtcbiAgICAgICAgICB0aGlzLnNob3dGb3JtTWVzc2FnZShhbnN3ZXIuZGF0YVt0eXBlXSwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVsc1t0eXBlXSk7XG4gICAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFuc3dlci5kYXRhLm1lc3NhZ2VzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLm1lc3NhZ2VzLCAnc3VjY2VzcycsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLmVycm9ycykge1xuICAgICAgICB0aGlzLnNob3dGaWVsZHNNZXNzYWdlcyhhbnN3ZXIuZGF0YS5lcnJvcnMsICdlcnJvcicsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLndhcm5pbmdzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLndhcm5pbmdzLCAnd2FybmluZycsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNNc2cpIHtcbiAgICAgIGxldCBlcnJvcjtcbiAgICAgIGlmICghYW5zd2VyLnN0YXR1cykgeyAvLyBOZXR3b3JrLmVycm9yXG4gICAgICAgIGVycm9yID0gYW5zd2VyO1xuICAgICAgfSBlbHNlIGlmIChhbnN3ZXIuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIGVycm9yID0gYW5zd2VyLnN0YXR1cyA/IGAke2Fuc3dlci5zdGF0dXN9IGAgOiAnJztcbiAgICAgICAgZXJyb3IgKz0gYW5zd2VyLnN0YXR1c1RleHQgPyBhbnN3ZXIuc3RhdHVzVGV4dCA6ICcnO1xuICAgICAgICBlcnJvciArPSBhbnN3ZXIuZGF0YSAmJiAhYW5zd2VyLnN0YXR1c1RleHQgPyBhbnN3ZXIuZGF0YSA6ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGVycm9yKSB0aGlzLnNob3dGb3JtTWVzc2FnZShlcnJvciwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscy5lcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKG0uY2xvc2UpIHtcbiAgICAgICAgbS5jbG9zZUhhbmRsZXIgPSB0aGF0LnJlbW92ZU1lc3NhZ2UuYmluZCh0aGF0LCBtKTtcbiAgICAgICAgbS5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG0uY2xvc2VIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVNZXNzYWdlKG0sIGUpIHtcbiAgICBpZiAobS5jbG9zZSkge1xuICAgICAgbS5jbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG0uY2xvc2VIYW5kbGVyKTtcbiAgICB9XG4gICAgbS5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0uZWwpO1xuICAgIGlmIChtLmZpZWxkKSB7XG4gICAgICBjb25zdCBmaWVsZEVsID0gbS5maWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZEVsZW1lbnQpO1xuICAgICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgICAgZmllbGRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbbS50eXBlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtLmZpZWxkLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1ttLnR5cGVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9tZXNzYWdlcy5zcGxpY2UodGhpcy5fbWVzc2FnZXMuaW5kZXhPZihtKSwgMSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZU1lc3NhZ2VzKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9tZXNzYWdlcykge1xuICAgICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICB0aGF0LnJlbW92ZU1lc3NhZ2UobSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoYXQuX21lc3NhZ2VzID0gW107XG4gIH0sXG5cbiAgc2hvd0Zvcm1NZXNzYWdlKG1lc3NhZ2UsIHR5cGUpIHtcbiAgICBsZXQgcGFyZW50O1xuICAgIGxldCB0cGwgPSB0aGlzLm9wdGlvbnMubWVzc2FnZXMudGVtcGxhdGU7XG5cbiAgICBtZXNzYWdlID0gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSk7XG5cbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVzc2FnZSkge1xuICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkgcmV0dXJuO1xuICAgICAgdHBsID0gdHBsLnJlcGxhY2UoYFxcJHske2l0ZW19fWAsIG1lc3NhZ2VbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHBsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwbEVsZW0uaW5uZXJIVE1MID0gdHBsO1xuICAgIGNvbnN0IG1zZ0VsID0gdHBsRWxlbS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UgPT09ICd0b3AnKSB7XG4gICAgICB0aGlzLm5vZGUuaW5zZXJ0QmVmb3JlKG1zZ0VsLCB0aGlzLm5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goeyBlbDogbXNnRWwsIGNsb3NlOiBtc2dFbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5jbG9zZSkgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaXNDb250YWluZXJdXG4gICAgICovXG4gIHNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUsIGlzQ29udGFpbmVyKSB7XG4gICAgbGV0IGZpZWxkID0gaXNDb250YWluZXIgPyBlbCA6IHNmLmhlbHBlcnMuZG9tVG9vbHMuY2xvc2VzdChlbCwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkKTtcbiAgICBsZXQgdHBsID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkVGVtcGxhdGU7XG5cbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZSA9IHByZXBhcmVNZXNzYWdlT2JqZWN0KG1lc3NhZ2UsIHR5cGUpO1xuXG4gICAgY29uc3QgZmllbGRFbCA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkRWxlbWVudCk7XG4gICAgY29uc3QgY3VycmVudE1zZ0VsID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuc2VsZWN0b3IpO1xuXG4gICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgIGZpZWxkRWwuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW3R5cGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW3R5cGVdKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVzc2FnZSkge1xuICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkgcmV0dXJuO1xuICAgICAgdHBsID0gdHBsLnJlcGxhY2UoYFxcJHske2l0ZW19fWAsIG1lc3NhZ2VbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHBsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwbEVsZW0uaW5uZXJIVE1MID0gdHBsO1xuICAgIGNvbnN0IG1zZ0VsID0gdHBsRWxlbS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlID09PSAnYm90dG9tJykge1xuICAgICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgICAgZmllbGQuaW5zZXJ0QmVmb3JlKG1zZ0VsLCBmaWVsZEVsLm5leHRTaWJsaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAoIWN1cnJlbnRNc2dFbCkge1xuICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSA9PT0gJ3RvcCcpIHtcbiAgICAgIGZpZWxkLmluc2VydEJlZm9yZShtc2dFbCwgZmllbGQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSk7XG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMucHVzaCh7XG4gICAgICBlbDogbXNnRWwsXG4gICAgICBjbG9zZTogbXNnRWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbG9zZSksXG4gICAgICBmaWVsZCxcbiAgICAgIHR5cGUsXG4gICAgfSk7XG4gIH0sXG5cbiAgc2hvd0ZpZWxkc01lc3NhZ2VzKG1lc3NhZ2VzLCB0eXBlLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBub3RGb3VuZCA9IHNmLml0ZXJhdGVJbnB1dHModGhpcy5ub2RlLCBtZXNzYWdlcywgKGVsLCBtZXNzYWdlKSA9PiB7XG4gICAgICB0aGF0LnNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHNob3dVbmtub3duKSB7XG4gICAgICBub3RGb3VuZC5mb3JFYWNoKChtc2dPYmopID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMobXNnT2JqKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhhdC5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXI9XCIke25hbWV9XCJdYCk7XG4gICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgLy8gVE9ETyBjaGVjayBjb250YWluZXIuZGF0YXNldC5tZXNzYWdlVmFyaWFudD8gdmFyaWFudHMgYXJlIFwiZmllbGRcIiBhbmQgXCJmb3JtXCJcbiAgICAgICAgICAgIHRoYXQuc2hvd0ZpZWxkTWVzc2FnZShjb250YWluZXIsIG1zZ09ialtuYW1lXSwgdHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKlxuICogZ2l0aHViLmNvbS9zZXJiYW5naGl0YS9Gb3JtVG9PYmplY3QuanMgMS4wLjEgIChjKSAyMDEzIFNlcmJhbiBHaGl0YSA8c2VyYmFuZ2hpdGFAZ21haWwuY29tPlxuICogQGxpY2VuY2UgTUlUXG4gKi9cbi8vIENvbnN0cnVjdG9yLlxuXG5jb25zdCBGb3JtVG9PYmplY3QgPSBmdW5jdGlvbiAoZm9ybVJlZikge1xuICBpZiAoIWZvcm1SZWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aGlzLmZvcm1SZWYgPSBmb3JtUmVmO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgdGhpcy5rZXlSZWdleCA9IC9bXlxcW1xcXV0rL2c7XG4gIHRoaXMuJGZvcm0gPSBudWxsO1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSBbXTtcbiAgdGhpcy5mb3JtT2JqID0ge307XG5cbiAgaWYgKCF0aGlzLnNldEZvcm0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIXRoaXMuc2V0Rm9ybUVsZW1lbnRzKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5zZXRGb3JtT2JqKCk7XG59O1xuXG4vLyBTZXQgdGhlIG1haW4gZm9ybSBvYmplY3Qgd2UgYXJlIHdvcmtpbmcgb24uXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIHN3aXRjaCAodHlwZW9mIHRoaXMuZm9ybVJlZikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICB0aGlzLiRmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5mb3JtUmVmKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh0aGlzLmlzRG9tTm9kZSh0aGlzLmZvcm1SZWYpKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLmZvcm1SZWY7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gdGhpcy4kZm9ybTtcbn07XG5cbi8vIFNldCB0aGUgZWxlbWVudHMgd2UgbmVlZCB0byBwYXJzZS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSB0aGlzLiRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gIHJldHVybiB0aGlzLiRmb3JtRWxlbWVudHMubGVuZ3RoO1xufTtcblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MIG5vZGUuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmlzRG9tTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHJldHVybiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgJ25vZGVUeXBlJyBpbiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vLyBJdGVyYXRpb24gdGhyb3VnaCBhcnJheXMgYW5kIG9iamVjdHMuIENvbXBhdGlibGUgd2l0aCBJRS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChhcnIsIGNhbGxiYWNrKSB7XG4gIGlmIChbXS5mb3JFYWNoKSB7XG4gICAgW10uZm9yRWFjaC5jYWxsKGFyciwgY2FsbGJhY2spO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGxldCBpO1xuICAvLyBmb3IgKGkgaW4gYXJyKSB7XG4gIE9iamVjdC5rZXlzKGFycikuZm9yRWFjaCgoaSkgPT4ge1xuICAgIC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgaW5zdGVhZCBvZiBhcnIuaGFzT3duUHJvcGVydHkgZm9yIElFOCBjb21wYXRpYmlsaXR5LlxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJyLCBpKSkge1xuICAgICAgY2FsbGJhY2suY2FsbChhcnIsIGFycltpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFJlY3Vyc2l2ZSBtZXRob2QgdGhhdCBhZGRzIGtleXMgYW5kIHZhbHVlcyBvZiB0aGUgY29ycmVzcG9uZGluZyBmaWVsZHMuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKHJlc3VsdCwgZG9tTm9kZSwga2V5cywgdmFsdWUpIHtcbiAgLy8gIzEgLSBTaW5nbGUgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgcmFkaW8gdGhhdCBpcyBjaGVja2VkLlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrYm94ZXMgYXJlIGEgc3BlY2lhbCBjYXNlLiBXZSBoYXZlIHRvIGdyYWIgZWFjaCBjaGVja2VkIHZhbHVlc1xuICAgIC8vIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgaWYgKHZhbHVlKSB7IC8vIExvb2tzIGxpa2UgY2hlY2tib3ggYXJyYXlcbiAgICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICAgIGlmICghcmVzdWx0W2tleXNdKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5c10gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0W2tleXNdLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5c10gPSBkb21Ob2RlLmNoZWNrZWQgPyAxIDogMDsgLy8gU2luZ2xlIGNoZWNrYm94XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBNdWx0aXBsZSBzZWxlY3QgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgLy8gV2UgaGF2ZSB0byBncmFiIGVhY2ggc2VsZWN0ZWQgb3B0aW9uIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgaWYgKGRvbU5vZGUudHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgICAgcmVzdWx0W2tleXNdID0gW107XG4gICAgICAgIGNvbnN0IERPTWNoaWxkcyA9IGRvbU5vZGUucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uW3NlbGVjdGVkXScpOyAvLyBUT0RPOiB0aGF0IHdvbnQgd29ya1xuICAgICAgICBpZiAoRE9NY2hpbGRzKSB7XG4gICAgICAgICAgdGhpcy5mb3JFYWNoKERPTWNoaWxkcywgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICByZXN1bHRba2V5c10ucHVzaChjaGlsZC52YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGVkID0gZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCdvcHRpb25bc2VsZWN0ZWRdJyk7XG4gICAgICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlOyAvLyBzZWxlY3QudmFsdWUgaXNuJ3QgZ2V0dGluZyBwcm9wZXIgdmFsdWUgZm9yIHZhbHVlLWxlc3Mgb3B0aW9uc1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrLiBUaGUgZGVmYXVsdCBvbmUgdG8gb25lIGFzc2lnbi5cbiAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgfVxuXG4gIC8vICMyIC0gTXVsdGkgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoIXJlc3VsdFtrZXlzWzBdXSkge1xuICAgICAgcmVzdWx0W2tleXNbMF1dID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDaGlsZChyZXN1bHRba2V5c1swXV0sIGRvbU5vZGUsIGtleXMuc3BsaWNlKDEsIGtleXMubGVuZ3RoKSwgdmFsdWUpO1xuICB9XG5cbi8vIHJldHVybiByZXN1bHQ7IC8vID9cbn07XG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm1PYmogPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0ZXN0O1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuJGZvcm1FbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIElnbm9yZSB0aGUgZWxlbWVudCBpZiB0aGUgJ25hbWUnIGF0dHJpYnV0ZSBpcyBlbXB0eS5cbiAgICAvLyBJZ25vcmUgdGhlICdkaXNhYmxlZCcgZWxlbWVudHMuXG4gICAgaWYgKHRoaXMuJGZvcm1FbGVtZW50c1tpXS5uYW1lICYmICF0aGlzLiRmb3JtRWxlbWVudHNbaV0uZGlzYWJsZWQpIHtcbiAgICAgIHRlc3QgPSB0aGlzLiRmb3JtRWxlbWVudHNbaV0ubmFtZS5tYXRjaCh0aGlzLmtleVJlZ2V4KTtcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5mb3JtT2JqLCB0aGlzLiRmb3JtRWxlbWVudHNbaV0sIHRlc3QsIHRoaXMuJGZvcm1FbGVtZW50c1tpXS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZm9ybU9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybVRvT2JqZWN0O1xuIiwiXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJykuZGVmYXVsdDtcbmNvbnN0IEZvcm0gPSByZXF1aXJlKCcuL0Zvcm0nKS5kZWZhdWx0O1xuXG5zZi5yZWdpc3Rlckluc3RhbmNlVHlwZShGb3JtLCAnanMtc2YtZm9ybScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm07IC8vIEVTNiBkZWZhdWx0IGV4cG9ydCB3aWxsIG5vdCBleHBvc2UgdXMgYXMgZ2xvYmFsXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8vIFBsdWdpbiBpbiBmb3JtTWVzc2FnZXMgdG8gaXRlcmF0ZSBmb3JtIGlucHV0c1xuXG4vLyBUT0RPIGNvbW1lbnQgYWxsIG9mIHRoaXNcbi8vIFRPRE8gYXNrIEBTeXN0ZXJyIHRoZSByZWFzb24gb2YgdmFyaWFibGUgJ3ByZWZpeCdcbmxldCBub3RGb3VuZCA9IFtdO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gbmFtZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ByZWZpeF1cbiAqL1xuZnVuY3Rpb24gZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KSB7XG4gIC8vIGZvciAoY29uc3QgbmFtZSBpbiBuYW1lcykge1xuICBPYmplY3Qua2V5cyhuYW1lcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICBpZiAoIW5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFydE9mU2VsZWN0b3IgPSAocHJlZml4KSA/IGAke3ByZWZpeH1bJHtuYW1lfV1gIDogbmFtZTtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5hbWVzW25hbWVdKTtcbiAgICBjb25zdCBzZWxlY3RvciA9IGBbbmFtZT0nJHtwYXJ0T2ZTZWxlY3Rvcn0nXWA7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ1tvYmplY3QgT2JqZWN0XSc6XG4gICAgICAgIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lc1tuYW1lXSwgY2FsbGJhY2ssIHBhcnRPZlNlbGVjdG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6XG4gICAgICAgIG5hbWVzW25hbWVdLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgLy8gVE9ETyByZWZhY3RvciB0aGlzIHNob3VsZCBjYWxsIHJlY3Vyc2l2ZVxuICAgICAgICAgIGNvbnN0IHNlbCA9IGBbbmFtZT0nJHtwYXJ0T2ZTZWxlY3Rvcn1bXSddW3ZhbHVlPScke2VsfSddYDtcbiAgICAgICAgICBjb25zdCBub2RlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xuICAgICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG5vdEZvdW5kLnB1c2goc2VsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IG5vZGVzLmxlbmd0aDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhub2Rlc1tpXSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgY2FzZSAnW29iamVjdCBOdW1iZXJdJzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNhc2UtZGVjbGFyYXRpb25zXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgIG9ialtwYXJ0T2ZTZWxlY3Rvcl0gPSBuYW1lc1tuYW1lXTtcbiAgICAgICAgICBub3RGb3VuZC5wdXNoKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IG5vZGVzLmxlbmd0aDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZXNbaV0sIG5hbWVzW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcigndW5rbm93biB0eXBlIC0nLCB0eXBlLCAnIGFuZCBtZXNzYWdlJywgbmFtZXNbbmFtZV0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtTdHJpbmd9IFtwcmVmaXhdXG4gKiBAcmV0dXJuIHtTdHJpbmdbXX1cbiAqL1xuY29uc3QgaXRlcmF0ZUlucHV0cyA9IGZ1bmN0aW9uIChjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCkge1xuICBub3RGb3VuZCA9IFtdO1xuICBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpO1xuICBpZiAobm90Rm91bmQubGVuZ3RoICE9PSAwKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAvLyBjb25zb2xlLmxvZygnU29tZSBlbGVtZW50IG5vdCBmb3VuZCBpbiBmb3JtJywgbm90Rm91bmQpO1xuICB9XG4gIHJldHVybiBub3RGb3VuZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXRlcmF0ZUlucHV0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/LXVybCZzb3VyY2VNYXAhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=

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
        "@spiral-toolkit/core").default;

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
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/ZjBmOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiIl0sIm5hbWVzIjpbIkxvY2siLCJzZiIsIm5vZGUiLCJvcHRpb25zIiwiX2NvbnN0cnVjdCIsInByb3RvdHlwZSIsImNvcmUiLCJjcmVhdGVNb2R1bGVQcm90b3R5cGUiLCJuYW1lIiwiaW5pdCIsInByb2dyZXNzIiwiYWRkIiwidHlwZSIsImNvbnRleHQiLCJ0eXBlcyIsImhhc093blByb3BlcnR5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiaHRtbCIsImFwcGVuZENoaWxkIiwiZGllIiwicmVtb3ZlIiwic2ZMb2NrIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUNoaWxkIiwic3Bpbm5lciIsImN1cnJlbnQiLCJ0b3RhbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiZGVmYXVsdCIsInJlcXVpcmUiLCJyZWdpc3Rlckluc3RhbmNlVHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3Mi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d0IsR0FBRSxPQUFPSixPQUFPLEdBQUdDLEtBQWpCLENBQXdCLEdBQWxEO0FBQ0Q7O0FBZk87QUFaVyxDQUF2QixDLENBK0JBOztBQUNBOUIsSUFBSSxDQUFDSyxTQUFMLENBQWVTLEtBQWYsQ0FBcUJvQixPQUFyQixHQUErQmxDLElBQUksQ0FBQ0ssU0FBTCxDQUFlUyxLQUFmLENBQXFCYyxPQUFwRDtBQUdlNUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqSEEsTUFBTUMsRUFBRSxHQUFHa0MsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWdDRCxPQUEzQzs7QUFDQSxNQUFNbEMsSUFBSSxHQUFHbUMsbUJBQU8sQ0FBQyw2QkFBRCxDQUFQLENBQWtCRCxPQUEvQjs7QUFFQWpDLEVBQUUsQ0FBQ21DLG9CQUFILENBQXdCcEMsSUFBeEI7QUFFQXFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRDLElBQWpCLEMsQ0FBdUIsa0Q7Ozs7Ozs7Ozs7O0FDTnZCLFVBQVUsbUJBQU8sQ0FBQyw2SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsNEpBQTRFOztBQUU5Rzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsa0UiLCJmaWxlIjoibG9ja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvbG9ja2VyXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9sb2NrZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQHNwaXJhbC10b29sa2l0L2xvY2tlclwiXSA9IGZhY3Rvcnkocm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sb2NrZWQgLmZvcm0tY29udGVudCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgb3BhY2l0eTogLjc7XFxufVxcblxcbi5sb2NrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2NrZWQgLmZvcm0tY29udGVudCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgb3BhY2l0eTogLjc7XFxufVxcblxcbi5sb2NrZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmltcG9ydCBjb3JlIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLyoqXG4gKiBTcGlyYWwgbG9jayBmb3IgZm9ybXNcbiAqIEBjb25zdHJ1Y3RvciBMb2NrXG4gKi9cblxuY29uc3QgTG9jayA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLl9jb25zdHJ1Y3Qoc2YsIG5vZGUsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBAbGVuZHMgTG9jay5wcm90b3R5cGVcbiAqL1xuTG9jay5wcm90b3R5cGUgPSBjb3JlLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSgpO1xuXG4vKipcbiAqIE5hbWUgb2YgbW9kdWxlXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Mb2NrLnByb3RvdHlwZS5uYW1lID0gJ2xvY2snO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FsbCBvbiBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAcHJpdmF0ZVxuICovXG5Mb2NrLnByb3RvdHlwZS5fY29uc3RydWN0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzZiwgbm9kZSwgb3B0aW9ucyk7XG4gIHRoaXMucHJvZ3Jlc3MgPSB0aGlzLmFkZCh0aGlzLm9wdGlvbnMudHlwZSwgdGhpcy5ub2RlKTtcbn07XG5cbi8qKlxuICogQWRkIGxvY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbdHlwZV0gdHlwZSBvZiBsb2NrIEBzZWUgc2YubG9jay50eXBlc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgY29udGV4dCB0byBhZGQgbG9ja1xuICogQHJldHVybiB7RnVuY3Rpb258Kn1cbiAqL1xuTG9jay5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHR5cGUsIGNvbnRleHQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAoIXRoaXMudHlwZXMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmNsYXNzTGlzdC5hZGQodGhpcy50eXBlc1t0eXBlXS5jbGFzc05hbWUgfHwgJ2pzLXNmLWxvY2snKTtcbiAgbm9kZS5jbGFzc0xpc3QuYWRkKCdsb2NrZXInKTtcbiAgbm9kZS5pbm5lckhUTUwgPSB0aGlzLnR5cGVzW3R5cGVdLmh0bWw7XG4gIGNvbnRleHQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIGNvbnRleHQuY2xhc3NMaXN0LmFkZCgnbG9ja2VkJyk7XG4gIHJldHVybiB0aGlzLnR5cGVzW3R5cGVdLnByb2dyZXNzO1xufTtcbi8qKlxuICogQ2xlYXIgYWxsIHZhcmlhYmxlcyBhbmQgZGllXG4gKi9cbkxvY2sucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZW1vdmUoKTtcbn07XG4vKipcbiAqIFJlbW92ZSBsb2NrXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5Mb2NrLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrZWQnKTtcbiAgY29uc3Qgc2ZMb2NrID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZi1sb2NrJyk7IC8vIFRPRE8gdGhpcy5sb2NrTm9kZSA/XG4gIGlmIChzZkxvY2spIHtcbiAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoc2ZMb2NrKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcbiAqIE9iamVjdCB3aXRoIGxvY2sgdHlwZXMuXG4gKiBAZW51bSB7T2JqZWN0fVxuICovXG5Mb2NrLnByb3RvdHlwZS50eXBlcyA9IHtcbiAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgc3Bpbm5lcjoge1xuICAgIC8qKlxuICAgICAgICAgKiBIVE1MXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgaHRtbDogJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj48c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPjwvZGl2PicsXG4gIH0sXG4gIHByb2dyZXNzOiB7XG4gICAgLyoqXG4gICAgICAgICAqIEhUTUxcbiAgICAgICAgICogQGlubmVyXG4gICAgICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICBodG1sOiAnPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+PGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbiB0byBjaGFuZ2Ugc3R5bGVzIHdoaWxlIEFKQVggcHJvZ3Jlc3NcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGN1cnJlbnRcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsXG4gICAgICAgICAqL1xuICAgIHByb2dyZXNzKGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9ncmVzcy1iYXInKVswXTtcbiAgICAgIHByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7MTAwICogKGN1cnJlbnQgLyB0b3RhbCl9JWA7XG4gICAgfSxcbiAgfSxcbn07XG5cbi8vIFdlIGhhdmUgdG8gaGF2ZSBzb21lIGRlZmF1bHQgbG9ja2VyLCBsZXQgaXQgYmUgc3Bpbm5lclxuTG9jay5wcm90b3R5cGUudHlwZXMuZGVmYXVsdCA9IExvY2sucHJvdG90eXBlLnR5cGVzLnNwaW5uZXI7XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9jaztcbiIsIlxuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpLmRlZmF1bHQ7XG5jb25zdCBMb2NrID0gcmVxdWlyZSgnLi9Mb2NrJykuZGVmYXVsdDtcblxuc2YucmVnaXN0ZXJJbnN0YW5jZVR5cGUoTG9jayk7XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jazsgLy8gRVM2IGRlZmF1bHQgZXhwb3J0IHdpbGwgbm90IGV4cG9zZSB1cyBhcyBnbG9iYWxcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/LXVybCZzb3VyY2VNYXAhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const core = __webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js").default;

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

const sf = __webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js").default;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL2Fzc2VydC9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3NwbGl0LW9uLWZpcnN0L2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9EYXRhZ3JpZC50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvRGF0YWdyaWRTdGF0ZS50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvUGFnaW5hdG9yLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvR3JpZFJlbmRlcmVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEJvZHlXcmFwcGVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEZvb3RlcldyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdEhlYWRlcldyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0Um93UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0Um93V3JhcHBlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL2RlZmF1bHRUYWJsZVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9wcmVtYWRlL3NpbXBsZUNlbGxGb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3V0aWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrOi9TRkRhdGFHcmlkL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbnB1dC5qcyJdLCJuYW1lcyI6WyJjb3JlIiwicmVxdWlyZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwic2YiLCJJbnB1dCIsImluc3RhbmNlc0NvbnRyb2xsZXIiLCJyZWdpc3Rlckluc3RhbmNlVHlwZSIsIm5vZGUiLCJvcHRpb25zIiwiX2NvbnN0cnVjdCIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsIkJhc2VET01Db25zdHJ1Y3RvciIsIm5hbWUiLCJpbml0IiwidG9vbHMiLCJleHRlbmQiLCJlbHMiLCJwcmVmaXgiLCJzZXRQcmVmaXgiLCJhZGRQcmVmaXhFdmVudExpc3RlbmVycyIsInBhdHRlcm4iLCJzZXR1cFBhdHRlcm4iLCJhZGRQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMiLCJvcHRpb25zVG9HcmFiIiwiZG9tQXR0ciIsImlzVmFsaWRQYXR0ZXJuIiwidmFsdWUiLCJtYXRjaCIsInRoYXQiLCJfaW5wdXRLZXlQcmVzcyIsImV2ZW50IiwiY2hhciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImtleUNvZGUiLCJwb3NpdGlvbiIsImdldEN1cnNvclBvc2l0aW9uIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJpIiwiZm9ybWF0Q2hhcmFjdGVycyIsImluZGV4T2YiLCJmdXR1cmVWYWx1ZSIsInN1YnN0cmluZyIsInBhdHRlcm5XaXRoRW1wdHkiLCJzZXRDdXJzb3JQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaW5wdXRGb2N1cyIsInNldFRpbWVvdXQiLCJwYXR0ZXJuU3RyaW5nIiwicmVwbGFjZSIsIl9pbnB1dEtleURvd24iLCJjb25zb2xlIiwibG9nIiwiX2lucHV0Qmx1ciIsImRvY3VtZW50Iiwic2VsZWN0aW9uIiwiZm9jdXMiLCJzZWxlY3RSYW5nZSIsImNyZWF0ZVJhbmdlIiwibW92ZVN0YXJ0IiwidGV4dCIsInNlbGVjdGlvblN0YXJ0IiwiY3JlYXRlVGV4dFJhbmdlIiwicmFuZ2UiLCJtb3ZlIiwic2VsZWN0Iiwic2VsZWN0aW9uRW5kIiwiZ2V0QXR0cmlidXRlIiwicGxhY2Vob2xkZXIiLCJfaW5pdFBhdHRlcm4iLCJmb3JtYXR0ZWRQYXR0ZXJuU3RyIiwiZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciIsIlJlZ0V4cCIsImJpbmQiLCJfaW5wdXRLZXl1cCIsIm9sZFZhbHVlIiwicmVtb3ZlUGF0dGVybkV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlUHJlZml4RXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGllIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLFlBQ0Esa0dBREEsS0FFQSxFQUtBO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQztBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQTtBQUNBO0FBQUEscUJBREE7O0FBRUE7QUFBQSxrQkFGQTs7QUFHQTtBQUFBO0FBQ0E7O0FBSkE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMEMsNEJBQTFDO0FBQTBDO0FBQTFDO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBd0Q7QUFBeEQ7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQWlEO0FBQWpEO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7OztBQUFBO0FBQXlDLDBCQUF6QztBQUF5QztBQUF6QztBQUNBOztBQUFBO0FBQWdIO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJO0FBQ0E7O0FBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBMkI7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBO0FBQWlDO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUE7QUFBc0Q7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsV0FIRixDQUdFLGFBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBWkEsQ0FjQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDRSxXQUZGLENBRUU7QUFDRjs7QUFFQSw0QkFBaUIsaUJBQWpCLEVBQW9DLEdBQXBDLEVBQW9DO0FBQ3BDO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQTtBQUZBO0FBS0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxhQUhILENBR0c7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBckJBLENBdUJBOzs7QUFDQTtBQUVBOztBQUVBLDBCQUFnQixrQkFBaEIsRUFBb0MsR0FBcEMsRUFBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQURBLENBR0E7O0FBQ0E7QUFDRSxXQUxGLENBS0U7QUFDRjtBQUNBO0FBQ0E7QUFDQSxTQWRBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBOztBQUFBO0FBRUEsNkJBQW1CLG1CQUFPO0FBQUM7QUFBQSxxREFBRCxDQUExQixDQUZBLENBSUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtEQUF1QyxPQUF2QyxFQUFnRCxHQUFoRCxFQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0ExQ0EsQ0E0Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEscUJBQVcsbUJBQU87QUFBQztBQUFBLDJDQUFELENBQWxCOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxtQ0FBMEIsQ0FBMUIsQ0FBMEIsSUFBMUIsS0FBMEIsS0FBMUI7QUFDQyxXQUZEOztBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FyR0EsQ0FzR0E7QUFDQTtBQUNBOzs7QUFFQSwyQ0ExR0EsQ0E0R0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBakhBLENBa0hBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNHLGFBSEgsTUFHRztBQUNIO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0csYUFGSCxNQUVHO0FBQ0g7QUFDQTs7QUFDQTtBQUNBLG9DQURBLENBR0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FsQ0EsQ0E5SEEsQ0FrS0E7OztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNHLGFBRkgsTUFFRztBQUNIO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLCtEQUNBLGFBREEsR0FDQSxHQURBLEdBRUEscUNBRkE7QUFHQSxXQXhMQSxDQTBMQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDRCQUZBO0FBR0EsZ0NBSEE7QUFJQSxnQ0FKQTtBQUtBO0FBTEE7QUFPQSxXQTdNQSxDQStNQTs7O0FBQ0EsNkJBaE5BLENBa05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EseUJBNU5BLENBOE5BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FGQSxDQWxPQSxDQXNPQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSkEsQ0F6T0EsQ0ErT0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNHLGFBRkgsTUFFRztBQUNILHFEQURHLENBR0g7QUFDQTtBQUNHLGFBTEEsTUFLQTtBQUNILDZEQURHLENBR0g7QUFDQTtBQUNBO0FBQ0csYUFOQSxNQU1BO0FBQ0gsMERBQ0EsaUNBREEsSUFFQSx1Q0FGQSxJQUdBLHVDQUhBLElBSUEseUNBSkEsQ0FERyxDQU9IO0FBQ0E7QUFDRyxhQVRBLE1BU0Esd0RBQ0gsaURBREcsR0FDSDtBQUNBLHVFQURBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0csYUFWQSxNQVVBLDBDQUNILHlDQURHLElBRUgsb0NBQ0EsOEJBREEsQ0FGRyxFQUdIO0FBQ0EsNERBQ0EsK0JBREEsTUFDQSxDQURBLENBREEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxhQWJBLE1BYUE7QUFDSDtBQUNHLGFBRkEsTUFFQTtBQUNIO0FBQXNCLDBCQUF0QjtBQUFzQjtBQUF0QjtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRkFDQSxhQUZBLENBR0E7O0FBQ0EsNERBQ0E7QUFDQSxpRkFDQTtBQUNBO0FBQ0E7QUFDQSw0REFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSx1QkFuQkEsQ0FvQkE7QUFDQTs7QUFDQSx5Q0FDQSxhQXZCQSxDQXdCQTs7QUFDQTtBQUNBLHNCQTFCQSxDQTJCQTs7QUFDQSxvQ0FBeUIsTUFBekIsRUFBaUMsR0FBakMsRUFBaUM7QUFDakMsbUNBQ0E7QUFDQSxhQS9CQSxDQWdDQTtBQUNBOzs7QUFDQSxvQ0FBeUIsTUFBekIsRUFBaUMsR0FBakMsRUFBaUM7QUFDakM7QUFDQSw2RUFDQTtBQUNBOztBQUNBO0FBQ0EsV0E1V0EsQ0E4V0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBOztBQU1BOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0E1WEEsQ0ErWEE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBLENBbFlBLENBd1lBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDRyxhQUpILENBSUcsV0FDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBeUIsTUFBekIsTUFBeUIsSUFBekI7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDRyxhQUZILENBRUc7QUFDSDtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSx5RkFDQSw2QkFEQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUNBLG1CQURBLElBRUEsbUNBRkEsSUFHQSxxQkFIQSxFQUdBO0FBQ0E7QUFDQTs7QUFFQSxxREFDQSxvQ0FEQSxJQUNBLHNCQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsV0F2ZEEsQ0F5ZEE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsV0FGQSxDQTVkQSxDQWdlQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsV0FGQTs7QUFJQTtBQUFnQztBQUFvQixXQUFwRCxDQXJlQSxDQXVlQTs7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EscUNBREE7QUFFQSw2Q0FGQTtBQUdBLDJDQUhBO0FBSUE7QUFKQTtBQU1BOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FOQTs7O1NBbmZBLEUsSUFBQSxDLElBQUEsRTs7dURBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsQ0FLQTtBQUVBOzs7QUFDQSwwQ0FSQSxDQVFnQzs7QUFDaEM7O0FBQ0E7QUFDQTtBQUNBLGFBWkEsQ0FjQTs7O0FBQ0E7O0FBQ0EsNEJBQWlCLE1BQWpCLEVBQXlCLEdBQXpCLEVBQXlCO0FBQ3pCO0FBQ0E7O0FBQ0E7QUFDQTtBQUNHLGFBRkg7O0FBR0E7QUFDQTtBQUNBLGFBeEJBLENBMEJBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDRyxhQUZIOztBQUdBLDhDQUFrQyxLQUFsQyxHQUFrQyxJQUFsQyxDQUFrQyxFQUFsQyxNQUNBLHNCQURBLEVBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0UsV0FyQ0YsQ0FxQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBZ0Isb0JBQWhCLEVBQXNDLEdBQXRDLEVBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQSw4QkFBa0Isa0JBQWxCLEVBQXNDLEdBQXRDLEVBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBekJBOzs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBLDBDLENBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1MsYUFGVCxNQUVTO0FBQ1Q7QUFDQTtBQUNLLFdBTkwsQ0FNSztBQUNMO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ1MsYUFGVCxNQUVTO0FBQ1Q7QUFDQTtBQUNLLFdBTkwsQ0FNSztBQUNMO0FBQ0E7QUFDQyxTQW5CRDs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBLENBS0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNLLFdBSEwsQ0FHSztBQUNMO0FBQ0E7QUFDQTtBQUNTLGFBSFQsQ0FHUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBLENBS0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNLLFdBSEwsQ0FHSztBQUNMO0FBQ0E7QUFDQTtBQUNTLGFBSFQsQ0FHUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0ssV0FGTCxNQUVLO0FBQ0w7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQSw0QkFBdUIsb0JBQXZCLEVBQTZDLEdBQTdDLEVBQTZDO0FBQzdDO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVhBLEMsQ0FhQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFNBRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QixDQUFxQjs7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQXFDO0FBQUEsU0FBckM7O0FBRUE7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFBMkI7QUFBQSxTQUEzQjs7QUFDQTtBQUNBO0FBQ0EsU0FGQTs7QUFHQTtBQUE0QjtBQUFVLFNBQXRDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMQSxnQ0FBd0IsbUJBQU87QUFBQztBQUFBLHVEQUFELENBQS9COztBQUNBLGdDQUF3QixtQkFBTztBQUFDO0FBQUEsMERBQUQsQ0FBL0I7O0FBQ0EsNkJBQXFCLG1CQUFPO0FBQUM7QUFBQSxvREFBRCxDQUE1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUNBLHVCQUNBLGtDQURBLElBRUEsdUNBSEEsRUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUNBLFNBREEsRUFFQSwwRkFGQTtBQUlBLGVBbkJBOztBQXFCQTtBQUNBO0FBQ0Esb0JBQ0EsdUJBQ0Esa0NBREEsSUFFQSx1Q0FIQSxFQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQWRBOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFWQTs7QUFZQTtBQUNBO0FBQ0Esb0JBQ0EsdUJBQ0Esa0NBREEsSUFFQSx1Q0FIQSxFQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQWRBO0FBdkRBO0FBdUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQWZBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBZkE7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFQQTtBQTlDQTtBQXVEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUNBLElBREEsQ0FDQSwrQkFEQSxFQUVBLEdBRkEsQ0FFQSxpQkFGQTtBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNFLFdBRkYsTUFFRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSxzQkFGQTtBQUdBLCtCQUhBO0FBSUEscUNBSkE7QUFLQSwrQkFMQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUtRLFVBQTVDO0FBQ0Q7QUFDRixDQVBEOztBQVNBckQsS0FBSyxDQUFDTSxTQUFOLENBQWdCdUUsMEJBQWhCLEdBQTZDLFlBQVk7QUFDdkQsTUFBSSxLQUFLL0QsR0FBTCxDQUFTWCxJQUFiLEVBQW1CO0FBQ2pCLFNBQUtXLEdBQUwsQ0FBU1gsSUFBVCxDQUFjMkUsbUJBQWQsQ0FBa0MsT0FBbEMsRUFBMkMsS0FBS0osV0FBaEQ7QUFDRDtBQUNGLENBSkQ7O0FBTUExRSxLQUFLLENBQUNNLFNBQU4sQ0FBZ0J5RSxHQUFoQixHQUFzQixZQUFZO0FBQ2hDLE1BQUksS0FBSzNFLE9BQUwsQ0FBYWMsT0FBakIsRUFBMEI7QUFDeEIsU0FBSzBELDJCQUFMO0FBQ0QsR0FGRCxNQUVPLElBQUksS0FBS3hFLE9BQUwsQ0FBYVcsTUFBakIsRUFBeUI7QUFDOUIsU0FBSzhELDBCQUFMO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FQRDs7QUFTQTdFLEtBQUssQ0FBQ00sU0FBTixDQUFnQlUsU0FBaEIsR0FBNEIsWUFBWTtBQUN0QyxPQUFLRixHQUFMLENBQVNYLElBQVQsQ0FBY3FCLEtBQWQsR0FBdUIsR0FBRSxLQUFLcEIsT0FBTCxDQUFhVyxNQUFPLElBQUcsS0FBS0QsR0FBTCxDQUFTWCxJQUFULENBQWNxQixLQUFNLEVBQXBFO0FBQ0QsQ0FGRCIsImZpbGUiOiJ0b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvdG9vbGtpdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvdG9vbGtpdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTRlRvb2xraXRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9kYXRhZ3JpZFwiLCBbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvZGF0YWdyaWRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU0ZEYXRhR3JpZFwiXSA9IGZhY3Rvcnkocm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b2tlbiA9ICclW2EtZjAtOV17Mn0nO1xudmFyIHNpbmdsZU1hdGNoZXIgPSBuZXcgUmVnRXhwKHRva2VuLCAnZ2knKTtcbnZhciBtdWx0aU1hdGNoZXIgPSBuZXcgUmVnRXhwKCcoJyArIHRva2VuICsgJykrJywgJ2dpJyk7XG5cbmZ1bmN0aW9uIGRlY29kZUNvbXBvbmVudHMoY29tcG9uZW50cywgc3BsaXQpIHtcblx0dHJ5IHtcblx0XHQvLyBUcnkgdG8gZGVjb2RlIHRoZSBlbnRpcmUgc3RyaW5nIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb21wb25lbnRzLmpvaW4oJycpKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRG8gbm90aGluZ1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudHM7XG5cdH1cblxuXHRzcGxpdCA9IHNwbGl0IHx8IDE7XG5cblx0Ly8gU3BsaXQgdGhlIGFycmF5IGluIDIgcGFydHNcblx0dmFyIGxlZnQgPSBjb21wb25lbnRzLnNsaWNlKDAsIHNwbGl0KTtcblx0dmFyIHJpZ2h0ID0gY29tcG9uZW50cy5zbGljZShzcGxpdCk7XG5cblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChbXSwgZGVjb2RlQ29tcG9uZW50cyhsZWZ0KSwgZGVjb2RlQ29tcG9uZW50cyhyaWdodCkpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0dmFyIHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlucHV0ID0gZGVjb2RlQ29tcG9uZW50cyh0b2tlbnMsIGkpLmpvaW4oJycpO1xuXG5cdFx0XHR0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KSB7XG5cdC8vIEtlZXAgdHJhY2sgb2YgYWxsIHRoZSByZXBsYWNlbWVudHMgYW5kIHByZWZpbGwgdGhlIG1hcCB3aXRoIHRoZSBgQk9NYFxuXHR2YXIgcmVwbGFjZU1hcCA9IHtcblx0XHQnJUZFJUZGJzogJ1xcdUZGRkRcXHVGRkZEJyxcblx0XHQnJUZGJUZFJzogJ1xcdUZGRkRcXHVGRkZEJ1xuXHR9O1xuXG5cdHZhciBtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0d2hpbGUgKG1hdGNoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIERlY29kZSBhcyBiaWcgY2h1bmtzIGFzIHBvc3NpYmxlXG5cdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFswXSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gZGVjb2RlKG1hdGNoWzBdKTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gbWF0Y2hbMF0pIHtcblx0XHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdH1cblxuXHQvLyBBZGQgYCVDMmAgYXQgdGhlIGVuZCBvZiB0aGUgbWFwIHRvIG1ha2Ugc3VyZSBpdCBkb2VzIG5vdCByZXBsYWNlIHRoZSBjb21iaW5hdG9yIGJlZm9yZSBldmVyeXRoaW5nIGVsc2Vcblx0cmVwbGFjZU1hcFsnJUMyJ10gPSAnXFx1RkZGRCc7XG5cblx0dmFyIGVudHJpZXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlTWFwKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBSZXBsYWNlIGFsbCBkZWNvZGVkIGNvbXBvbmVudHNcblx0XHR2YXIga2V5ID0gZW50cmllc1tpXTtcblx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UobmV3IFJlZ0V4cChrZXksICdnJyksIHJlcGxhY2VNYXBba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVuY29kZWRVUkkpIHtcblx0aWYgKHR5cGVvZiBlbmNvZGVkVVJJICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGBlbmNvZGVkVVJJYCB0byBiZSBvZiB0eXBlIGBzdHJpbmdgLCBnb3QgYCcgKyB0eXBlb2YgZW5jb2RlZFVSSSArICdgJyk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGVuY29kZWRVUkkgPSBlbmNvZGVkVVJJLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuXG5cdFx0Ly8gVHJ5IHRoZSBidWlsdCBpbiBkZWNvZGVyIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRmFsbGJhY2sgdG8gYSBtb3JlIGFkdmFuY2VkIGRlY29kZXJcblx0XHRyZXR1cm4gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBjb21wYXJlIGFuZCBpc0J1ZmZlciB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2Jsb2IvNjgwZTllNWU0ODhmMjJhYWMyNzU5OWE1N2RjODQ0YTYzMTU5MjhkZC9pbmRleC5qc1xuLy8gb3JpZ2luYWwgbm90aWNlOlxuXG4vKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciB4ID0gYS5sZW5ndGg7XG4gIHZhciB5ID0gYi5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV07XG4gICAgICB5ID0gYltpXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoeSA8IHgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGlzQnVmZmVyKGIpIHtcbiAgaWYgKGdsb2JhbC5CdWZmZXIgJiYgdHlwZW9mIGdsb2JhbC5CdWZmZXIuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlcihiKTtcbiAgfVxuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKTtcbn1cblxuLy8gYmFzZWQgb24gbm9kZSBhc3NlcnQsIG9yaWdpbmFsIG5vdGljZTpcbi8vIE5COiBUaGUgVVJMIHRvIHRoZSBDb21tb25KUyBzcGVjIGlzIGtlcHQganVzdCBmb3IgdHJhZGl0aW9uLlxuLy8gICAgIG5vZGUtYXNzZXJ0IGhhcyBldm9sdmVkIGEgbG90IHNpbmNlIHRoZW4sIGJvdGggaW4gQVBJIGFuZCBiZWhhdmlvci5cblxuLy8gaHR0cDovL3dpa2kuY29tbW9uanMub3JnL3dpa2kvVW5pdF9UZXN0aW5nLzEuMFxuLy9cbi8vIFRISVMgSVMgTk9UIFRFU1RFRCBOT1IgTElLRUxZIFRPIFdPUksgT1VUU0lERSBWOCFcbi8vXG4vLyBPcmlnaW5hbGx5IGZyb20gbmFyd2hhbC5qcyAoaHR0cDovL25hcndoYWxqcy5vcmcpXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDkgVGhvbWFzIFJvYmluc29uIDwyODBub3J0aC5jb20+XG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvXG4vLyBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuLy8gcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4vLyBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTlxuLy8gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuLy8gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbC8nKTtcbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBmdW5jdGlvbnNIYXZlTmFtZXMgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZm9vKCkge30ubmFtZSA9PT0gJ2Zvbyc7XG59KCkpO1xuZnVuY3Rpb24gcFRvU3RyaW5nIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuZnVuY3Rpb24gaXNWaWV3KGFycmJ1Zikge1xuICBpZiAoaXNCdWZmZXIoYXJyYnVmKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIGdsb2JhbC5BcnJheUJ1ZmZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJyYnVmKTtcbiAgfVxuICBpZiAoIWFycmJ1Zikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoYXJyYnVmIGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYXJyYnVmLmJ1ZmZlciAmJiBhcnJidWYuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4vLyAxLiBUaGUgYXNzZXJ0IG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbnMgdGhhdCB0aHJvd1xuLy8gQXNzZXJ0aW9uRXJyb3IncyB3aGVuIHBhcnRpY3VsYXIgY29uZGl0aW9ucyBhcmUgbm90IG1ldC4gVGhlXG4vLyBhc3NlcnQgbW9kdWxlIG11c3QgY29uZm9ybSB0byB0aGUgZm9sbG93aW5nIGludGVyZmFjZS5cblxudmFyIGFzc2VydCA9IG1vZHVsZS5leHBvcnRzID0gb2s7XG5cbi8vIDIuIFRoZSBBc3NlcnRpb25FcnJvciBpcyBkZWZpbmVkIGluIGFzc2VydC5cbi8vIG5ldyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IoeyBtZXNzYWdlOiBtZXNzYWdlLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogYWN0dWFsLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBleHBlY3RlZCB9KVxuXG52YXIgcmVnZXggPSAvXFxzKmZ1bmN0aW9uXFxzKyhbXlxcKFxcc10qKVxccyovO1xuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9mdW5jdGlvbi5wcm90b3R5cGUubmFtZS9ibG9iL2FkZWVlZWM4YmZjYzYwNjhiMTg3ZDdkOWZiM2Q1YmIxZDNhMzA4OTkvaW1wbGVtZW50YXRpb24uanNcbmZ1bmN0aW9uIGdldE5hbWUoZnVuYykge1xuICBpZiAoIXV0aWwuaXNGdW5jdGlvbihmdW5jKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzKSB7XG4gICAgcmV0dXJuIGZ1bmMubmFtZTtcbiAgfVxuICB2YXIgc3RyID0gZnVuYy50b1N0cmluZygpO1xuICB2YXIgbWF0Y2ggPSBzdHIubWF0Y2gocmVnZXgpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV07XG59XG5hc3NlcnQuQXNzZXJ0aW9uRXJyb3IgPSBmdW5jdGlvbiBBc3NlcnRpb25FcnJvcihvcHRpb25zKSB7XG4gIHRoaXMubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG4gIHRoaXMuYWN0dWFsID0gb3B0aW9ucy5hY3R1YWw7XG4gIHRoaXMuZXhwZWN0ZWQgPSBvcHRpb25zLmV4cGVjdGVkO1xuICB0aGlzLm9wZXJhdG9yID0gb3B0aW9ucy5vcGVyYXRvcjtcbiAgaWYgKG9wdGlvbnMubWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG9wdGlvbnMubWVzc2FnZTtcbiAgICB0aGlzLmdlbmVyYXRlZE1lc3NhZ2UgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBnZXRNZXNzYWdlKHRoaXMpO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IHRydWU7XG4gIH1cbiAgdmFyIHN0YWNrU3RhcnRGdW5jdGlvbiA9IG9wdGlvbnMuc3RhY2tTdGFydEZ1bmN0aW9uIHx8IGZhaWw7XG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gbm9uIHY4IGJyb3dzZXJzIHNvIHdlIGNhbiBoYXZlIGEgc3RhY2t0cmFjZVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcbiAgICBpZiAoZXJyLnN0YWNrKSB7XG4gICAgICB2YXIgb3V0ID0gZXJyLnN0YWNrO1xuXG4gICAgICAvLyB0cnkgdG8gc3RyaXAgdXNlbGVzcyBmcmFtZXNcbiAgICAgIHZhciBmbl9uYW1lID0gZ2V0TmFtZShzdGFja1N0YXJ0RnVuY3Rpb24pO1xuICAgICAgdmFyIGlkeCA9IG91dC5pbmRleE9mKCdcXG4nICsgZm5fbmFtZSk7XG4gICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgLy8gb25jZSB3ZSBoYXZlIGxvY2F0ZWQgdGhlIGZ1bmN0aW9uIGZyYW1lXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gc3RyaXAgb3V0IGV2ZXJ5dGhpbmcgYmVmb3JlIGl0IChhbmQgaXRzIGxpbmUpXG4gICAgICAgIHZhciBuZXh0X2xpbmUgPSBvdXQuaW5kZXhPZignXFxuJywgaWR4ICsgMSk7XG4gICAgICAgIG91dCA9IG91dC5zdWJzdHJpbmcobmV4dF9saW5lICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhY2sgPSBvdXQ7XG4gICAgfVxuICB9XG59O1xuXG4vLyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3IgaW5zdGFuY2VvZiBFcnJvclxudXRpbC5pbmhlcml0cyhhc3NlcnQuQXNzZXJ0aW9uRXJyb3IsIEVycm9yKTtcblxuZnVuY3Rpb24gdHJ1bmNhdGUocywgbikge1xuICBpZiAodHlwZW9mIHMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHMubGVuZ3RoIDwgbiA/IHMgOiBzLnNsaWNlKDAsIG4pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzO1xuICB9XG59XG5mdW5jdGlvbiBpbnNwZWN0KHNvbWV0aGluZykge1xuICBpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzIHx8ICF1dGlsLmlzRnVuY3Rpb24oc29tZXRoaW5nKSkge1xuICAgIHJldHVybiB1dGlsLmluc3BlY3Qoc29tZXRoaW5nKTtcbiAgfVxuICB2YXIgcmF3bmFtZSA9IGdldE5hbWUoc29tZXRoaW5nKTtcbiAgdmFyIG5hbWUgPSByYXduYW1lID8gJzogJyArIHJhd25hbWUgOiAnJztcbiAgcmV0dXJuICdbRnVuY3Rpb24nICsgIG5hbWUgKyAnXSc7XG59XG5mdW5jdGlvbiBnZXRNZXNzYWdlKHNlbGYpIHtcbiAgcmV0dXJuIHRydW5jYXRlKGluc3BlY3Qoc2VsZi5hY3R1YWwpLCAxMjgpICsgJyAnICtcbiAgICAgICAgIHNlbGYub3BlcmF0b3IgKyAnICcgK1xuICAgICAgICAgdHJ1bmNhdGUoaW5zcGVjdChzZWxmLmV4cGVjdGVkKSwgMTI4KTtcbn1cblxuLy8gQXQgcHJlc2VudCBvbmx5IHRoZSB0aHJlZSBrZXlzIG1lbnRpb25lZCBhYm92ZSBhcmUgdXNlZCBhbmRcbi8vIHVuZGVyc3Rvb2QgYnkgdGhlIHNwZWMuIEltcGxlbWVudGF0aW9ucyBvciBzdWIgbW9kdWxlcyBjYW4gcGFzc1xuLy8gb3RoZXIga2V5cyB0byB0aGUgQXNzZXJ0aW9uRXJyb3IncyBjb25zdHJ1Y3RvciAtIHRoZXkgd2lsbCBiZVxuLy8gaWdub3JlZC5cblxuLy8gMy4gQWxsIG9mIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIG11c3QgdGhyb3cgYW4gQXNzZXJ0aW9uRXJyb3Jcbi8vIHdoZW4gYSBjb3JyZXNwb25kaW5nIGNvbmRpdGlvbiBpcyBub3QgbWV0LCB3aXRoIGEgbWVzc2FnZSB0aGF0XG4vLyBtYXkgYmUgdW5kZWZpbmVkIGlmIG5vdCBwcm92aWRlZC4gIEFsbCBhc3NlcnRpb24gbWV0aG9kcyBwcm92aWRlXG4vLyBib3RoIHRoZSBhY3R1YWwgYW5kIGV4cGVjdGVkIHZhbHVlcyB0byB0aGUgYXNzZXJ0aW9uIGVycm9yIGZvclxuLy8gZGlzcGxheSBwdXJwb3Nlcy5cblxuZnVuY3Rpb24gZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBvcGVyYXRvciwgc3RhY2tTdGFydEZ1bmN0aW9uKSB7XG4gIHRocm93IG5ldyBhc3NlcnQuQXNzZXJ0aW9uRXJyb3Ioe1xuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgYWN0dWFsOiBhY3R1YWwsXG4gICAgZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICAgIG9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICBzdGFja1N0YXJ0RnVuY3Rpb246IHN0YWNrU3RhcnRGdW5jdGlvblxuICB9KTtcbn1cblxuLy8gRVhURU5TSU9OISBhbGxvd3MgZm9yIHdlbGwgYmVoYXZlZCBlcnJvcnMgZGVmaW5lZCBlbHNld2hlcmUuXG5hc3NlcnQuZmFpbCA9IGZhaWw7XG5cbi8vIDQuIFB1cmUgYXNzZXJ0aW9uIHRlc3RzIHdoZXRoZXIgYSB2YWx1ZSBpcyB0cnV0aHksIGFzIGRldGVybWluZWRcbi8vIGJ5ICEhZ3VhcmQuXG4vLyBhc3NlcnQub2soZ3VhcmQsIG1lc3NhZ2Vfb3B0KTtcbi8vIFRoaXMgc3RhdGVtZW50IGlzIGVxdWl2YWxlbnQgdG8gYXNzZXJ0LmVxdWFsKHRydWUsICEhZ3VhcmQsXG4vLyBtZXNzYWdlX29wdCk7LiBUbyB0ZXN0IHN0cmljdGx5IGZvciB0aGUgdmFsdWUgdHJ1ZSwgdXNlXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwodHJ1ZSwgZ3VhcmQsIG1lc3NhZ2Vfb3B0KTsuXG5cbmZ1bmN0aW9uIG9rKHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICghdmFsdWUpIGZhaWwodmFsdWUsIHRydWUsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5vayk7XG59XG5hc3NlcnQub2sgPSBvaztcblxuLy8gNS4gVGhlIGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzaGFsbG93LCBjb2VyY2l2ZSBlcXVhbGl0eSB3aXRoXG4vLyA9PS5cbi8vIGFzc2VydC5lcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5lcXVhbCA9IGZ1bmN0aW9uIGVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCAhPSBleHBlY3RlZCkgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnPT0nLCBhc3NlcnQuZXF1YWwpO1xufTtcblxuLy8gNi4gVGhlIG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHdoZXRoZXIgdHdvIG9iamVjdHMgYXJlIG5vdCBlcXVhbFxuLy8gd2l0aCAhPSBhc3NlcnQubm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RXF1YWwgPSBmdW5jdGlvbiBub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICchPScsIGFzc2VydC5ub3RFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDcuIFRoZSBlcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgYSBkZWVwIGVxdWFsaXR5IHJlbGF0aW9uLlxuLy8gYXNzZXJ0LmRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5kZWVwRXF1YWwgPSBmdW5jdGlvbiBkZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoIV9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgZmFsc2UpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnZGVlcEVxdWFsJywgYXNzZXJ0LmRlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBkZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoIV9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgdHJ1ZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdkZWVwU3RyaWN0RXF1YWwnLCBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBzdHJpY3QsIG1lbW9zKSB7XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGFjdHVhbCkgJiYgaXNCdWZmZXIoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYWN0dWFsLCBleHBlY3RlZCkgPT09IDA7XG5cbiAgLy8gNy4yLiBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBEYXRlIG9iamVjdCwgdGhlIGFjdHVhbCB2YWx1ZSBpc1xuICAvLyBlcXVpdmFsZW50IGlmIGl0IGlzIGFsc28gYSBEYXRlIG9iamVjdCB0aGF0IHJlZmVycyB0byB0aGUgc2FtZSB0aW1lLlxuICB9IGVsc2UgaWYgKHV0aWwuaXNEYXRlKGFjdHVhbCkgJiYgdXRpbC5pc0RhdGUoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMgSWYgdGhlIGV4cGVjdGVkIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgdGhlIGFjdHVhbCB2YWx1ZSBpc1xuICAvLyBlcXVpdmFsZW50IGlmIGl0IGlzIGFsc28gYSBSZWdFeHAgb2JqZWN0IHdpdGggdGhlIHNhbWUgc291cmNlIGFuZFxuICAvLyBwcm9wZXJ0aWVzIChgZ2xvYmFsYCwgYG11bHRpbGluZWAsIGBsYXN0SW5kZXhgLCBgaWdub3JlQ2FzZWApLlxuICB9IGVsc2UgaWYgKHV0aWwuaXNSZWdFeHAoYWN0dWFsKSAmJiB1dGlsLmlzUmVnRXhwKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBhY3R1YWwuc291cmNlID09PSBleHBlY3RlZC5zb3VyY2UgJiZcbiAgICAgICAgICAgYWN0dWFsLmdsb2JhbCA9PT0gZXhwZWN0ZWQuZ2xvYmFsICYmXG4gICAgICAgICAgIGFjdHVhbC5tdWx0aWxpbmUgPT09IGV4cGVjdGVkLm11bHRpbGluZSAmJlxuICAgICAgICAgICBhY3R1YWwubGFzdEluZGV4ID09PSBleHBlY3RlZC5sYXN0SW5kZXggJiZcbiAgICAgICAgICAgYWN0dWFsLmlnbm9yZUNhc2UgPT09IGV4cGVjdGVkLmlnbm9yZUNhc2U7XG5cbiAgLy8gNy40LiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKChhY3R1YWwgPT09IG51bGwgfHwgdHlwZW9mIGFjdHVhbCAhPT0gJ29iamVjdCcpICYmXG4gICAgICAgICAgICAgKGV4cGVjdGVkID09PSBudWxsIHx8IHR5cGVvZiBleHBlY3RlZCAhPT0gJ29iamVjdCcpKSB7XG4gICAgcmV0dXJuIHN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gSWYgYm90aCB2YWx1ZXMgYXJlIGluc3RhbmNlcyBvZiB0eXBlZCBhcnJheXMsIHdyYXAgdGhlaXIgdW5kZXJseWluZ1xuICAvLyBBcnJheUJ1ZmZlcnMgaW4gYSBCdWZmZXIgZWFjaCB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZVxuICAvLyBUaGlzIG9wdGltaXphdGlvbiByZXF1aXJlcyB0aGUgYXJyYXlzIHRvIGhhdmUgdGhlIHNhbWUgdHlwZSBhcyBjaGVja2VkIGJ5XG4gIC8vIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgKGFrYSBwVG9TdHJpbmcpLiBOZXZlciBwZXJmb3JtIGJpbmFyeVxuICAvLyBjb21wYXJpc29ucyBmb3IgRmxvYXQqQXJyYXlzLCB0aG91Z2gsIHNpbmNlIGUuZy4gKzAgPT09IC0wIGJ1dCB0aGVpclxuICAvLyBiaXQgcGF0dGVybnMgYXJlIG5vdCBpZGVudGljYWwuXG4gIH0gZWxzZSBpZiAoaXNWaWV3KGFjdHVhbCkgJiYgaXNWaWV3KGV4cGVjdGVkKSAmJlxuICAgICAgICAgICAgIHBUb1N0cmluZyhhY3R1YWwpID09PSBwVG9TdHJpbmcoZXhwZWN0ZWQpICYmXG4gICAgICAgICAgICAgIShhY3R1YWwgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHxcbiAgICAgICAgICAgICAgIGFjdHVhbCBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheSkpIHtcbiAgICByZXR1cm4gY29tcGFyZShuZXcgVWludDhBcnJheShhY3R1YWwuYnVmZmVyKSxcbiAgICAgICAgICAgICAgICAgICBuZXcgVWludDhBcnJheShleHBlY3RlZC5idWZmZXIpKSA9PT0gMDtcblxuICAvLyA3LjUgRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2UgaWYgKGlzQnVmZmVyKGFjdHVhbCkgIT09IGlzQnVmZmVyKGV4cGVjdGVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBtZW1vcyA9IG1lbW9zIHx8IHthY3R1YWw6IFtdLCBleHBlY3RlZDogW119O1xuXG4gICAgdmFyIGFjdHVhbEluZGV4ID0gbWVtb3MuYWN0dWFsLmluZGV4T2YoYWN0dWFsKTtcbiAgICBpZiAoYWN0dWFsSW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAoYWN0dWFsSW5kZXggPT09IG1lbW9zLmV4cGVjdGVkLmluZGV4T2YoZXhwZWN0ZWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9zLmFjdHVhbC5wdXNoKGFjdHVhbCk7XG4gICAgbWVtb3MuZXhwZWN0ZWQucHVzaChleHBlY3RlZCk7XG5cbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgc3RyaWN0LCBtZW1vcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNBcmd1bWVudHMob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgc3RyaWN0LCBhY3R1YWxWaXNpdGVkT2JqZWN0cykge1xuICBpZiAoYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gbnVsbCB8fCBiID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBpZiBvbmUgaXMgYSBwcmltaXRpdmUsIHRoZSBvdGhlciBtdXN0IGJlIHNhbWVcbiAgaWYgKHV0aWwuaXNQcmltaXRpdmUoYSkgfHwgdXRpbC5pc1ByaW1pdGl2ZShiKSlcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgaWYgKHN0cmljdCAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYSkgIT09IE9iamVjdC5nZXRQcm90b3R5cGVPZihiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIHZhciBhSXNBcmdzID0gaXNBcmd1bWVudHMoYSk7XG4gIHZhciBiSXNBcmdzID0gaXNBcmd1bWVudHMoYik7XG4gIGlmICgoYUlzQXJncyAmJiAhYklzQXJncykgfHwgKCFhSXNBcmdzICYmIGJJc0FyZ3MpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGFJc0FyZ3MpIHtcbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBfZGVlcEVxdWFsKGEsIGIsIHN0cmljdCk7XG4gIH1cbiAgdmFyIGthID0gb2JqZWN0S2V5cyhhKTtcbiAgdmFyIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgdmFyIGtleSwgaTtcbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT09IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFfZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBzdHJpY3QsIGFjdHVhbFZpc2l0ZWRPYmplY3RzKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gOC4gVGhlIG5vbi1lcXVpdmFsZW5jZSBhc3NlcnRpb24gdGVzdHMgZm9yIGFueSBkZWVwIGluZXF1YWxpdHkuXG4vLyBhc3NlcnQubm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdERlZXBFcXVhbCA9IGZ1bmN0aW9uIG5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIGZhbHNlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ25vdERlZXBFcXVhbCcsIGFzc2VydC5ub3REZWVwRXF1YWwpO1xuICB9XG59O1xuXG5hc3NlcnQubm90RGVlcFN0cmljdEVxdWFsID0gbm90RGVlcFN0cmljdEVxdWFsO1xuZnVuY3Rpb24gbm90RGVlcFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgdHJ1ZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdub3REZWVwU3RyaWN0RXF1YWwnLCBub3REZWVwU3RyaWN0RXF1YWwpO1xuICB9XG59XG5cblxuLy8gOS4gVGhlIHN0cmljdCBlcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgc3RyaWN0IGVxdWFsaXR5LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbi8vIGFzc2VydC5zdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIHN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCAhPT0gZXhwZWN0ZWQpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PT0nLCBhc3NlcnQuc3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG4vLyAxMC4gVGhlIHN0cmljdCBub24tZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIGZvciBzdHJpY3QgaW5lcXVhbGl0eSwgYXNcbi8vIGRldGVybWluZWQgYnkgIT09LiAgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0Lm5vdFN0cmljdEVxdWFsID0gZnVuY3Rpb24gbm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9PScsIGFzc2VydC5ub3RTdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpIHtcbiAgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChleHBlY3RlZCkgPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICByZXR1cm4gZXhwZWN0ZWQudGVzdChhY3R1YWwpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAoYWN0dWFsIGluc3RhbmNlb2YgZXhwZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElnbm9yZS4gIFRoZSBpbnN0YW5jZW9mIGNoZWNrIGRvZXNuJ3Qgd29yayBmb3IgYXJyb3cgZnVuY3Rpb25zLlxuICB9XG5cbiAgaWYgKEVycm9yLmlzUHJvdG90eXBlT2YoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGV4cGVjdGVkLmNhbGwoe30sIGFjdHVhbCkgPT09IHRydWU7XG59XG5cbmZ1bmN0aW9uIF90cnlCbG9jayhibG9jaykge1xuICB2YXIgZXJyb3I7XG4gIHRyeSB7XG4gICAgYmxvY2soKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVycm9yID0gZTtcbiAgfVxuICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIF90aHJvd3Moc2hvdWxkVGhyb3csIGJsb2NrLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICB2YXIgYWN0dWFsO1xuXG4gIGlmICh0eXBlb2YgYmxvY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJsb2NrXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cGVjdGVkID09PSAnc3RyaW5nJykge1xuICAgIG1lc3NhZ2UgPSBleHBlY3RlZDtcbiAgICBleHBlY3RlZCA9IG51bGw7XG4gIH1cblxuICBhY3R1YWwgPSBfdHJ5QmxvY2soYmxvY2spO1xuXG4gIG1lc3NhZ2UgPSAoZXhwZWN0ZWQgJiYgZXhwZWN0ZWQubmFtZSA/ICcgKCcgKyBleHBlY3RlZC5uYW1lICsgJykuJyA6ICcuJykgK1xuICAgICAgICAgICAgKG1lc3NhZ2UgPyAnICcgKyBtZXNzYWdlIDogJy4nKTtcblxuICBpZiAoc2hvdWxkVGhyb3cgJiYgIWFjdHVhbCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgJ01pc3NpbmcgZXhwZWN0ZWQgZXhjZXB0aW9uJyArIG1lc3NhZ2UpO1xuICB9XG5cbiAgdmFyIHVzZXJQcm92aWRlZE1lc3NhZ2UgPSB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZyc7XG4gIHZhciBpc1Vud2FudGVkRXhjZXB0aW9uID0gIXNob3VsZFRocm93ICYmIHV0aWwuaXNFcnJvcihhY3R1YWwpO1xuICB2YXIgaXNVbmV4cGVjdGVkRXhjZXB0aW9uID0gIXNob3VsZFRocm93ICYmIGFjdHVhbCAmJiAhZXhwZWN0ZWQ7XG5cbiAgaWYgKChpc1Vud2FudGVkRXhjZXB0aW9uICYmXG4gICAgICB1c2VyUHJvdmlkZWRNZXNzYWdlICYmXG4gICAgICBleHBlY3RlZEV4Y2VwdGlvbihhY3R1YWwsIGV4cGVjdGVkKSkgfHxcbiAgICAgIGlzVW5leHBlY3RlZEV4Y2VwdGlvbikge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgJ0dvdCB1bndhbnRlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICBpZiAoKHNob3VsZFRocm93ICYmIGFjdHVhbCAmJiBleHBlY3RlZCAmJlxuICAgICAgIWV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fCAoIXNob3VsZFRocm93ICYmIGFjdHVhbCkpIHtcbiAgICB0aHJvdyBhY3R1YWw7XG4gIH1cbn1cblxuLy8gMTEuIEV4cGVjdGVkIHRvIHRocm93IGFuIGVycm9yOlxuLy8gYXNzZXJ0LnRocm93cyhibG9jaywgRXJyb3Jfb3B0LCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC50aHJvd3MgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cyh0cnVlLCBibG9jaywgZXJyb3IsIG1lc3NhZ2UpO1xufTtcblxuLy8gRVhURU5TSU9OISBUaGlzIGlzIGFubm95aW5nIHRvIHdyaXRlIG91dHNpZGUgdGhpcyBtb2R1bGUuXG5hc3NlcnQuZG9lc05vdFRocm93ID0gZnVuY3Rpb24oYmxvY2ssIC8qb3B0aW9uYWwqL2Vycm9yLCAvKm9wdGlvbmFsKi9tZXNzYWdlKSB7XG4gIF90aHJvd3MoZmFsc2UsIGJsb2NrLCBlcnJvciwgbWVzc2FnZSk7XG59O1xuXG5hc3NlcnQuaWZFcnJvciA9IGZ1bmN0aW9uKGVycikgeyBpZiAoZXJyKSB0aHJvdyBlcnI7IH07XG5cbi8vIEV4cG9zZSBhIHN0cmljdCBvbmx5IHZhcmlhbnQgb2YgYXNzZXJ0XG5mdW5jdGlvbiBzdHJpY3QodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09Jywgc3RyaWN0KTtcbn1cbmFzc2VydC5zdHJpY3QgPSBvYmplY3RBc3NpZ24oc3RyaWN0LCBhc3NlcnQsIHtcbiAgZXF1YWw6IGFzc2VydC5zdHJpY3RFcXVhbCxcbiAgZGVlcEVxdWFsOiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsLFxuICBub3RFcXVhbDogYXNzZXJ0Lm5vdFN0cmljdEVxdWFsLFxuICBub3REZWVwRXF1YWw6IGFzc2VydC5ub3REZWVwU3RyaWN0RXF1YWxcbn0pO1xuYXNzZXJ0LnN0cmljdC5zdHJpY3QgPSBhc3NlcnQuc3RyaWN0O1xuXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXNPd24uY2FsbChvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbmNvbnN0IGRlY29kZUNvbXBvbmVudCA9IHJlcXVpcmUoJ2RlY29kZS11cmktY29tcG9uZW50Jyk7XG5jb25zdCBzcGxpdE9uRmlyc3QgPSByZXF1aXJlKCdzcGxpdC1vbi1maXJzdCcpO1xuXG5jb25zdCBpc051bGxPclVuZGVmaW5lZCA9IHZhbHVlID0+IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0Y29uc3QgaW5kZXggPSByZXN1bHQubGVuZ3RoO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgaW5kZXgsICddJ10uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHQuLi5yZXN1bHQsXG5cdFx0XHRcdFx0W2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGVuY29kZShpbmRleCwgb3B0aW9ucyksICddPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXG5cdFx0XHRcdF07XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXSddLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXT0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnY29tbWEnOlxuXHRcdGNhc2UgJ3NlcGFyYXRvcic6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBbW2VuY29kZShrZXksIG9wdGlvbnMpLCAnPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbW3Jlc3VsdCwgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKV07XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIGVuY29kZShrZXksIG9wdGlvbnMpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICc9JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvXFxbKFxcZCopXFxdJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXGQqXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XVtyZXN1bHRbMV1dID0gdmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdHJlc3VsdCA9IC8oXFxbXFxdKSQvLmV4ZWMoa2V5KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbdmFsdWVdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbW1hJzpcblx0XHRjYXNlICdzZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0FycmF5ID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5zcGxpdCgnJykuaW5kZXhPZihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKSA+IC0xO1xuXHRcdFx0XHRjb25zdCBuZXdWYWx1ZSA9IGlzQXJyYXkgPyB2YWx1ZS5zcGxpdChvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKS5tYXAoaXRlbSA9PiBkZWNvZGUoaXRlbSwgb3B0aW9ucykpIDogdmFsdWUgPT09IG51bGwgPyB2YWx1ZSA6IGRlY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBuZXdWYWx1ZTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IHZhbHVlLmxlbmd0aCAhPT0gMSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2FycmF5Rm9ybWF0U2VwYXJhdG9yIG11c3QgYmUgc2luZ2xlIGNoYXJhY3RlciBzdHJpbmcnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5kZWNvZGUpIHtcblx0XHRyZXR1cm4gZGVjb2RlQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24ga2V5c1NvcnRlcihpbnB1dCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQuc29ydCgpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ga2V5c1NvcnRlcihPYmplY3Qua2V5cyhpbnB1dCkpXG5cdFx0XHQuc29ydCgoYSwgYikgPT4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpKVxuXHRcdFx0Lm1hcChrZXkgPT4gaW5wdXRba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhc2goaW5wdXQpIHtcblx0Y29uc3QgaGFzaFN0YXJ0ID0gaW5wdXQuaW5kZXhPZignIycpO1xuXHRpZiAoaGFzaFN0YXJ0ICE9PSAtMSkge1xuXHRcdGlucHV0ID0gaW5wdXQuc2xpY2UoMCwgaGFzaFN0YXJ0KTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCh1cmwpIHtcblx0bGV0IGhhc2ggPSAnJztcblx0Y29uc3QgaGFzaFN0YXJ0ID0gdXJsLmluZGV4T2YoJyMnKTtcblx0aWYgKGhhc2hTdGFydCAhPT0gLTEpIHtcblx0XHRoYXNoID0gdXJsLnNsaWNlKGhhc2hTdGFydCk7XG5cdH1cblxuXHRyZXR1cm4gaGFzaDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdChpbnB1dCkge1xuXHRpbnB1dCA9IHJlbW92ZUhhc2goaW5wdXQpO1xuXHRjb25zdCBxdWVyeVN0YXJ0ID0gaW5wdXQuaW5kZXhPZignPycpO1xuXHRpZiAocXVlcnlTdGFydCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQuc2xpY2UocXVlcnlTdGFydCArIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLnBhcnNlTnVtYmVycyAmJiAhTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpICYmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSAhPT0gJycpKSB7XG5cdFx0dmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMucGFyc2VCb29sZWFucyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAodmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnIHx8IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZScpKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKGlucHV0LCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRkZWNvZGU6IHRydWUsXG5cdFx0c29ydDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnLFxuXHRcdGFycmF5Rm9ybWF0U2VwYXJhdG9yOiAnLCcsXG5cdFx0cGFyc2VOdW1iZXJzOiBmYWxzZSxcblx0XHRwYXJzZUJvb2xlYW5zOiBmYWxzZVxuXHR9LCBvcHRpb25zKTtcblxuXHR2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXG5cdGNvbnN0IGZvcm1hdHRlciA9IHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBubyBwcm90b3R5cGVcblx0Y29uc3QgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRpbnB1dCA9IGlucHV0LnRyaW0oKS5yZXBsYWNlKC9eWz8jJl0vLCAnJyk7XG5cblx0aWYgKCFpbnB1dCkge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHBhcmFtIG9mIGlucHV0LnNwbGl0KCcmJykpIHtcblx0XHRsZXQgW2tleSwgdmFsdWVdID0gc3BsaXRPbkZpcnN0KG9wdGlvbnMuZGVjb2RlID8gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykgOiBwYXJhbSwgJz0nKTtcblxuXHRcdC8vIE1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0Ly8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuXHRcdHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBvcHRpb25zLmFycmF5Rm9ybWF0ID09PSAnY29tbWEnID8gdmFsdWUgOiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdGZvcm1hdHRlcihkZWNvZGUoa2V5LCBvcHRpb25zKSwgdmFsdWUsIHJldCk7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhyZXQpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuXHRcdFx0XHR2YWx1ZVtrXSA9IHBhcnNlVmFsdWUodmFsdWVba10sIG9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXRba2V5XSA9IHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNvcnQgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHJldHVybiAob3B0aW9ucy5zb3J0ID09PSB0cnVlID8gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkgOiBPYmplY3Qua2V5cyhyZXQpLnNvcnQob3B0aW9ucy5zb3J0KSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuXHRcdGNvbnN0IHZhbHVlID0gcmV0W2tleV07XG5cdFx0aWYgKEJvb2xlYW4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHQvLyBTb3J0IG9iamVjdCBrZXlzLCBub3QgdmFsdWVzXG5cdFx0XHRyZXN1bHRba2V5XSA9IGtleXNTb3J0ZXIodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuXG5leHBvcnRzLmV4dHJhY3QgPSBleHRyYWN0O1xuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuXG5leHBvcnRzLnN0cmluZ2lmeSA9IChvYmplY3QsIG9wdGlvbnMpID0+IHtcblx0aWYgKCFvYmplY3QpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnLFxuXHRcdGFycmF5Rm9ybWF0U2VwYXJhdG9yOiAnLCdcblx0fSwgb3B0aW9ucyk7XG5cblx0dmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblxuXHRjb25zdCBzaG91bGRGaWx0ZXIgPSBrZXkgPT4gKFxuXHRcdChvcHRpb25zLnNraXBOdWxsICYmIGlzTnVsbE9yVW5kZWZpbmVkKG9iamVjdFtrZXldKSkgfHxcblx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgb2JqZWN0W2tleV0gPT09ICcnKVxuXHQpO1xuXG5cdGNvbnN0IGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKTtcblxuXHRjb25zdCBvYmplY3RDb3B5ID0ge307XG5cblx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdGlmICghc2hvdWxkRmlsdGVyKGtleSkpIHtcblx0XHRcdG9iamVjdENvcHlba2V5XSA9IG9iamVjdFtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3RDb3B5KTtcblxuXHRpZiAob3B0aW9ucy5zb3J0ICE9PSBmYWxzZSkge1xuXHRcdGtleXMuc29ydChvcHRpb25zLnNvcnQpO1xuXHR9XG5cblx0cmV0dXJuIGtleXMubWFwKGtleSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0LnJlZHVjZShmb3JtYXR0ZXIoa2V5KSwgW10pXG5cdFx0XHRcdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdGlvbnMpICsgJz0nICsgZW5jb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0fSkuZmlsdGVyKHggPT4geC5sZW5ndGggPiAwKS5qb2luKCcmJyk7XG59O1xuXG5leHBvcnRzLnBhcnNlVXJsID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dXJsOiByZW1vdmVIYXNoKGlucHV0KS5zcGxpdCgnPycpWzBdIHx8ICcnLFxuXHRcdHF1ZXJ5OiBwYXJzZShleHRyYWN0KGlucHV0KSwgb3B0aW9ucylcblx0fTtcbn07XG5cbmV4cG9ydHMuc3RyaW5naWZ5VXJsID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IHVybCA9IHJlbW92ZUhhc2goaW5wdXQudXJsKS5zcGxpdCgnPycpWzBdIHx8ICcnO1xuXHRjb25zdCBxdWVyeUZyb21VcmwgPSBleHBvcnRzLmV4dHJhY3QoaW5wdXQudXJsKTtcblx0Y29uc3QgcGFyc2VkUXVlcnlGcm9tVXJsID0gZXhwb3J0cy5wYXJzZShxdWVyeUZyb21VcmwpO1xuXHRjb25zdCBoYXNoID0gZ2V0SGFzaChpbnB1dC51cmwpO1xuXHRjb25zdCBxdWVyeSA9IE9iamVjdC5hc3NpZ24ocGFyc2VkUXVlcnlGcm9tVXJsLCBpbnB1dC5xdWVyeSk7XG5cdGxldCBxdWVyeVN0cmluZyA9IGV4cG9ydHMuc3RyaW5naWZ5KHF1ZXJ5LCBvcHRpb25zKTtcblx0aWYgKHF1ZXJ5U3RyaW5nKSB7XG5cdFx0cXVlcnlTdHJpbmcgPSBgPyR7cXVlcnlTdHJpbmd9YDtcblx0fVxuXG5cdHJldHVybiBgJHt1cmx9JHtxdWVyeVN0cmluZ30ke2hhc2h9YDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKHN0cmluZywgc2VwYXJhdG9yKSA9PiB7XG5cdGlmICghKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBzZXBhcmF0b3IgPT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBhcmd1bWVudHMgdG8gYmUgb2YgdHlwZSBgc3RyaW5nYCcpO1xuXHR9XG5cblx0aWYgKHNlcGFyYXRvciA9PT0gJycpIHtcblx0XHRyZXR1cm4gW3N0cmluZ107XG5cdH1cblxuXHRjb25zdCBzZXBhcmF0b3JJbmRleCA9IHN0cmluZy5pbmRleE9mKHNlcGFyYXRvcik7XG5cblx0aWYgKHNlcGFyYXRvckluZGV4ID09PSAtMSkge1xuXHRcdHJldHVybiBbc3RyaW5nXTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0c3RyaW5nLnNsaWNlKDAsIHNlcGFyYXRvckluZGV4KSxcblx0XHRzdHJpbmcuc2xpY2Uoc2VwYXJhdG9ySW5kZXggKyBzZXBhcmF0b3IubGVuZ3RoKVxuXHRdO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gc3RyID0+IGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgeCA9PiBgJSR7eC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfWApO1xuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHxcbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZXNjcmlwdG9yc1trZXlzW2ldXSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXlzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2NyaXB0b3JzO1xuICB9O1xuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbnZhciBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyA/IFN5bWJvbCgndXRpbC5wcm9taXNpZnkuY3VzdG9tJykgOiB1bmRlZmluZWQ7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sICYmIG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF0pIHtcbiAgICB2YXIgZm4gPSBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcInV0aWwucHJvbWlzaWZ5LmN1c3RvbVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBmdW5jdGlvbiBmbigpIHtcbiAgICB2YXIgcHJvbWlzZVJlc29sdmUsIHByb21pc2VSZWplY3Q7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBwcm9taXNlUmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCB2YWx1ZSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBwcm9taXNlUmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZm4sIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgdmFsdWU6IGZuLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBmbixcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKVxuICApO1xufVxuXG5leHBvcnRzLnByb21pc2lmeS5jdXN0b20gPSBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xcblxuZnVuY3Rpb24gY2FsbGJhY2tpZnlPblJlamVjdGVkKHJlYXNvbiwgY2IpIHtcbiAgLy8gYCFyZWFzb25gIGd1YXJkIGluc3BpcmVkIGJ5IGJsdWViaXJkIChSZWY6IGh0dHBzOi8vZ29vLmdsL3Q1SVM2TSkuXG4gIC8vIEJlY2F1c2UgYG51bGxgIGlzIGEgc3BlY2lhbCBlcnJvciB2YWx1ZSBpbiBjYWxsYmFja3Mgd2hpY2ggbWVhbnMgXCJubyBlcnJvclxuICAvLyBvY2N1cnJlZFwiLCB3ZSBlcnJvci13cmFwIHNvIHRoZSBjYWxsYmFjayBjb25zdW1lciBjYW4gZGlzdGluZ3Vpc2ggYmV0d2VlblxuICAvLyBcInRoZSBwcm9taXNlIHJlamVjdGVkIHdpdGggbnVsbFwiIG9yIFwidGhlIHByb21pc2UgZnVsZmlsbGVkIHdpdGggdW5kZWZpbmVkXCIuXG4gIGlmICghcmVhc29uKSB7XG4gICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcignUHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIGZhbHN5IHZhbHVlJyk7XG4gICAgbmV3UmVhc29uLnJlYXNvbiA9IHJlYXNvbjtcbiAgICByZWFzb24gPSBuZXdSZWFzb247XG4gIH1cbiAgcmV0dXJuIGNiKHJlYXNvbik7XG59XG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5KG9yaWdpbmFsKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gV2UgRE8gTk9UIHJldHVybiB0aGUgcHJvbWlzZSBhcyBpdCBnaXZlcyB0aGUgdXNlciBhIGZhbHNlIHNlbnNlIHRoYXRcbiAgLy8gdGhlIHByb21pc2UgaXMgYWN0dWFsbHkgc29tZWhvdyByZWxhdGVkIHRvIHRoZSBjYWxsYmFjaydzIGV4ZWN1dGlvblxuICAvLyBhbmQgdGhhdCB0aGUgY2FsbGJhY2sgdGhyb3dpbmcgd2lsbCByZWplY3QgdGhlIHByb21pc2UuXG4gIGZ1bmN0aW9uIGNhbGxiYWNraWZpZWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG1heWJlQ2IgPSBhcmdzLnBvcCgpO1xuICAgIGlmICh0eXBlb2YgbWF5YmVDYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxhc3QgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBtYXliZUNiLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBJbiB0cnVlIG5vZGUgc3R5bGUgd2UgcHJvY2VzcyB0aGUgY2FsbGJhY2sgb24gYG5leHRUaWNrYCB3aXRoIGFsbCB0aGVcbiAgICAvLyBpbXBsaWNhdGlvbnMgKHN0YWNrLCBgdW5jYXVnaHRFeGNlcHRpb25gLCBgYXN5bmNfaG9va3NgKVxuICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXQpIHsgcHJvY2Vzcy5uZXh0VGljayhjYiwgbnVsbCwgcmV0KSB9LFxuICAgICAgICAgICAgZnVuY3Rpb24ocmVqKSB7IHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2tpZnlPblJlamVjdGVkLCByZWosIGNiKSB9KTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYWxsYmFja2lmaWVkLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2FsbGJhY2tpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbCkpO1xuICByZXR1cm4gY2FsbGJhY2tpZmllZDtcbn1cbmV4cG9ydHMuY2FsbGJhY2tpZnkgPSBjYWxsYmFja2lmeTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbmltcG9ydCBzZiBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XHJcbmltcG9ydCAqIGFzIGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5pbXBvcnQgeyBwYXJzZSwgc3RyaW5naWZ5VXJsIH0gZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IHsgREVGQVVMVF9MSU1JVCwgcGFnZVBhcmFtcywgUmVxdWVzdE1ldGhvZCwgU29ydERpcmVjdGlvbiwgc29ydFBhcmFtcywgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERhdGFncmlkU3RhdGUgfSBmcm9tICcuL0RhdGFncmlkU3RhdGUnO1xyXG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4vUGFnaW5hdG9yJztcclxuaW1wb3J0IHsgZGVmYXVsdFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXIvZGVmYXVsdFJlbmRlcmVyJztcclxuaW1wb3J0IHsgR3JpZFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXIvR3JpZFJlbmRlcmVyJztcclxuaW1wb3J0IHsgbm9ybWFsaXplQ29sdW1ucyB9IGZyb20gJy4vdXRpbHMnO1xyXG4vLyBpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmV4cG9ydCBjbGFzcyBEYXRhZ3JpZCBleHRlbmRzIHNmLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNzZiwgbm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gRGF0YWdyaWQuc3BpcmFsRnJhbWV3b3JrTmFtZTtcclxuICAgICAgICB0aGlzLm9wdGlvbnNUb0dyYWIgPSB7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogRGF0YWdyaWQuZGVmYXVsdE9wdGlvbnMuaWQsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnaWQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBEYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucy51cmwsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnZGF0YS11cmwnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgRGF0YWdyaWQuZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZ3JpZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IERhdGFncmlkU3RhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zID0ge307IC8vIFRPRE86IHR5cGUgYXMgc2YuRm9ybSBpbnN0YW5jZSBhcnJheVxyXG4gICAgICAgIHRoaXMuY2FwdHVyZWRQYWdpbmF0b3JzID0gW107IC8vIFRPRE86IHR5cGUgYXMgc2YuUGFnaW5hdG9yIGluc3RhbmNlIGFycmF5XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgbGltaXQ6IERFRkFVTFRfTElNSVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluaXQoc3NmLCBub2RlLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIERhdGFncmlkLmRlZmF1bHRPcHRpb25zKSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsT3B0aW9uc0VsID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbcm9sZT1cInNmLW9wdGlvbnNcIl0nKTtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbE9wdGlvbnNFbCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbmUgPSBGdW5jdGlvbihgXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuICR7YWRkaXRpb25hbE9wdGlvbnNFbC5pbm5lckhUTUwudHJpbSgpfWApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1widXNlIHN0cmljdFwiO3JldHVybiAnICsgYWRkaXRpb25hbE9wdGlvbnNFbC5pbm5lckhUTUwudHJpbSgpICsgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGVzID0gb25lKCkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3ZlcnJpZGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IHBhcnNlIG9wdGlvbnMgaW5zaWRlIHNjcmlwdCwgZW5zdXJlIHNjcmlwdCBpbnNpZGUgaXMgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIHJldHVybmluZyBJRGF0YUdyaWRPcHRpb25zIG9iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3NlcnQubm90RXF1YWwodGhpcy5vcHRpb25zLmlkLCAnJywgJ2lkIHNob3VsZCBiZSBub3QgZW1wdHknKTtcclxuICAgICAgICBhc3NlcnQubm90RXF1YWwodGhpcy5vcHRpb25zLnVybCwgJycsICd1cmwgc2hvdWxkIGJlIG5vdCBlbXB0eScpO1xyXG4gICAgICAgIC8vIFByb2Nlc3Mgb3B0aW9uc1xyXG4gICAgICAgIC8vIFRPRE86IHdlIGNhbiBvdmVycmlkZSBjb2x1bW5zIGFuZCBzb3J0IG9wdGlvbnMgaW5zaWRlIHJlbmRlcmVycyBidXQgaXQgbWlnaHQgcHJvZHVjZSBzaXR1YXRpb24gb2YgdHJpZ2dlcmluZyB1bmV4aXN0aW5nIHNvcnRcclxuICAgICAgICAvLyBUaGluayBhYm91dCB0aGF0LCBvciBpZ25vcmVcclxuICAgICAgICB0aGlzLmNvbHVtbkluZm8gPSBub3JtYWxpemVDb2x1bW5zKHRoaXMub3B0aW9ucy5jb2x1bW5zLCB0aGlzLm9wdGlvbnMuc29ydGFibGUpO1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHNvcnQgaWYgcHJlc2VudFxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zb3J0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0cy5zb3J0QnkgPSB0aGlzLm9wdGlvbnMuc29ydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuc29ydERpciA9IFNvcnREaXJlY3Rpb24uQVNDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0cy5zb3J0QnkgPSB0aGlzLm9wdGlvbnMuc29ydC5maWVsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuc29ydERpciA9IHRoaXMub3B0aW9ucy5zb3J0LmRpcmVjdGlvbiB8fCBTb3J0RGlyZWN0aW9uLkFTQztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQodGhpcy5kZWZhdWx0cy5zb3J0QnksIHRoaXMuZGVmYXVsdHMuc29ydERpcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZXJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RnJvbVVybCgpO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZUZvcm1zKCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KCk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckZvcm1JbnN0YW5jZShmb3JtSW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoZm9ybUluc3RhbmNlLm9wdGlvbnMgJiYgZm9ybUluc3RhbmNlLm9wdGlvbnMuaWQgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVGb3Jtcy5pbmRleE9mKGZvcm1JbnN0YW5jZS5vcHRpb25zLnVybCkgPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBmb3JtSW5zdGFuY2Uub3B0aW9ucztcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gZm9ybUluc3RhbmNlLmVudW1lcmF0ZUZpZWxkTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zW2lkXSA9IHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBmb3JtSW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHVybERhdGFGb3JGb3JtID0gdGhpcy5zdGF0ZS51cmxEYXRhID8gT2JqZWN0LmtleXModGhpcy5zdGF0ZS51cmxEYXRhKS5maWx0ZXIoKGtleSkgPT4gZmllbGRzLmluZGV4T2Yoa2V5KSA+PSAwKS5yZWR1Y2UoKG1hcCwga2V5KSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXApLCB7IFtrZXldOiB0aGlzLnN0YXRlLnVybERhdGFba2V5XSB9KSksIHt9KSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKHVybERhdGFGb3JGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtSW5zdGFuY2Uuc2V0RmllbGRWYWx1ZXModXJsRGF0YUZvckZvcm0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5qc29uT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5iZWZvcmVTdWJtaXRDYWxsYmFjayA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFnaW5hdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldEZvcm1EYXRhKGlkLCBvcHRpb25zLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zW2lkXS5maWVsZHMgPSBbLi4ubmV3IFNldChbLi4uT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKSwgLi4udGhpcy5jYXB0dXJlZEZvcm1zW2lkXS5maWVsZHNdKV07IC8vIE1lcmdlIG5ldyBmaWVsZHMgaWYgYW55XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QoKTsgLy8gVE9ETzogYmV0dGVyIHdheVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyUGFnaW5hdG9ySW5zdGFuY2UoZm9ybUluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKGZvcm1JbnN0YW5jZS5vcHRpb25zICYmIGZvcm1JbnN0YW5jZS5vcHRpb25zLmlkICYmIHRoaXMub3B0aW9ucy5jYXB0dXJlRm9ybXMuaW5kZXhPZihmb3JtSW5zdGFuY2Uub3B0aW9ucy5pZCkgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVkUGFnaW5hdG9ycy5wdXNoKGZvcm1JbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5vblBhZ2VDaGFuZ2UgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVQYWdpbmF0b3Iob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QoKTsgLy8gVE9ETzogYmV0dGVyIHdheVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhcHR1cmVGb3JtcygpIHtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IHRoaXMuc2YuZ2V0SW5zdGFuY2VzKCdmb3JtJykgfHwgW107XHJcbiAgICAgICAgZm9ybXMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybUluc3RhbmNlKGYuaW5zdGFuY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRvcnMgPSB0aGlzLnNmLmdldEluc3RhbmNlcyhQYWdpbmF0b3Iuc3BpcmFsRnJhbWV3b3JrTmFtZSkgfHwgW107XHJcbiAgICAgICAgcGFnaW5hdG9ycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYWdpbmF0b3JJbnN0YW5jZShmLmluc3RhbmNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNmLmluc3RhbmNlc0NvbnRyb2xsZXIuZXZlbnRzLm9uKCdvbkFkZEluc3RhbmNlJywgKHsgaW5zdGFuY2UsIHR5cGUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Zvcm0nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gUGFnaW5hdG9yLnNwaXJhbEZyYW1ld29ya05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYWdpbmF0b3JJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBzb3J0IGZvciB0aGlzIGZpZWxkIGlmIG5vdCB5ZXQsIG9yIGNoYW5nZXMgZGlyZWN0aW9uIGlmIGFscmVhZHkgc2FtZVxyXG4gICAgICogQHBhcmFtIGZpZWxkSWRcclxuICAgICAqL1xyXG4gICAgdHJpZ2dlclNvcnQoZmllbGRJZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnRCeSA9PT0gZmllbGRJZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zb3J0RGlyID09PSBTb3J0RGlyZWN0aW9uLkFTQykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTb3J0KGZpZWxkSWQsIFNvcnREaXJlY3Rpb24uREVTQyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQoZmllbGRJZCwgU29ydERpcmVjdGlvbi5BU0MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29sdW1uSW5mby5maW5kKChjSSkgPT4gY0kuaWQgPT09IGZpZWxkSWQpO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U29ydChmaWVsZC5pZCwgZmllbGQuZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIHNvcnQgYnkgdW5zb3J0YWJsZSBmaWVsZCAke2ZpZWxkSWR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldFBhZ2luYXRvcigpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdCgpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRQYWdpbmF0b3IoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZGVwZW5kaW5nIG9uIHBhZ2luYXRvciB0eXBlIHBlcmZvcm0gZGlmZmVyZW50IHJlc2V0IHR5cGVcclxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZVBhZ2luYXRvcih7IHBhZ2U6IDEgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi5zZXRQYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGYuc2V0UGFyYW1zKHRoaXMuc3RhdGUucGFnaW5hdGUsIHRoaXMub3B0aW9ucy5zZXJpYWxpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmb3JtUmVxdWVzdCgpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBmZXRjaENvdW50OiB0cnVlLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZ2V0RmlsdGVyKCksXHJcbiAgICAgICAgICAgIHBhZ2luYXRlOiB0aGlzLnN0YXRlLnBhZ2luYXRlLFxyXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnN0YXRlLnNvcnRCeSA/IHsgW3RoaXMuc3RhdGUuc29ydEJ5XTogdGhpcy5zdGF0ZS5zb3J0RGlyIH0gOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIHJlbW92ZSBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNhcHR1cmVkRm9ybXMpLmZvckVhY2goKGZLZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuY2FwdHVyZWRGb3Jtc1tmS2V5XS5pbnN0YW5jZTtcclxuICAgICAgICAgICAgaWYgKGYudW5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLnVubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi51bmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYudW5sb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9ja1R5cGUgfHwgdGhpcy5vcHRpb25zLmxvY2tUeXBlID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XHJcbiAgICAgICAgaWYgKCFsb2NrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IHRyeSB0byBhZGQgXFwnbG9ja1xcJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jYXB0dXJlZEZvcm1zKS5mb3JFYWNoKChmS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmNhcHR1cmVkRm9ybXNbZktleV0uaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIGlmIChmLmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VjY2Vzcyh7IGRhdGEgfSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3VjY2VzcyhkYXRhLmRhdGEsIGRhdGEucGFnaW5hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkUGFnaW5hdG9ycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmLnNldFBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgZi5zZXRQYXJhbXMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnBhZ2luYXRlKSwgeyBlcnJvcjogZmFsc2UgfSksIHRoaXMub3B0aW9ucy5zZXJpYWxpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBiZWZvcmVTdWJtaXQoKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jYXB0dXJlZEZvcm1zKS5mb3JFYWNoKChmS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmNhcHR1cmVkRm9ybXNbZktleV0uaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIGlmIChmLnJlbW92ZU1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmLnJlbW92ZU1lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUVycm9yKHsgZGF0YSwgc3RhdHVzLCBzdGF0dXNUZXh0IH0pIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNldEVycm9yKGRhdGEuZXJyb3IsIGRhdGEuZXJyb3JzLCB0aGlzLm9wdGlvbnMucmVzZXRPbkVycm9yKTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNhcHR1cmVkRm9ybXMpLmZvckVhY2goKGZLZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuY2FwdHVyZWRGb3Jtc1tmS2V5XS5pbnN0YW5jZTtcclxuICAgICAgICAgICAgaWYgKGYucHJvY2Vzc0Fuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgZi5wcm9jZXNzQW5zd2VyKHsgZGF0YSwgc3RhdHVzLCBzdGF0dXNUZXh0IH0sIGZhbHNlKTsgLy8gZmFsc2Ugc3RhbmRzIGZvciAnZG9udCBkaXNwbGF5IGVycm9ycyB1bnJlbGF0ZWQgdG8gZm9ybSBpbnB1dHMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkUGFnaW5hdG9ycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmLnNldFBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgZi5zZXRQYXJhbXMoeyBlcnJvcjogdHJ1ZSB9LCB0aGlzLm9wdGlvbnMuc2VyaWFsaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGRhdGEgYW5kIGRpc3BsYXkgZXJyb3JcclxuICAgICAgICAvLyBUT0RPOiBzZW5kIHZhbGlkYXRpb24gZXJyb3JzIHRvIG90aGVyIGZvcm1zXHJcbiAgICB9XHJcbiAgICByZXF1ZXN0KCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDYW50IHN0YXJ0IG5ldyByZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydExvYWRpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5iZWZvcmVTdWJtaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NrKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXJsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzR2V0ID0gdGhpcy5vcHRpb25zLm1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5HRVQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZvcm1SZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLnNmLmFqYXguc2VuZCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGlzR2V0ID8gc3RyaW5naWZ5VXJsKHsgdXJsOiB0aGlzLm9wdGlvbnMudXJsLCBxdWVyeTogZGF0YSB9KSA6IHRoaXMub3B0aW9ucy51cmwsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMub3B0aW9ucy5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLm9wdGlvbnMuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGlzR2V0ID8gdW5kZWZpbmVkIDogZGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHJlcXVlc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5pc1NGQWpheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvcjogZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdG9wTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVSZW5kZXJlcnMoKSB7XHJcbiAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbCh0aGlzLmdyaWRzLCBbXSwgJ0dyaWRzIGFyZSBhbHJlYWR5IGluaXRpYWxpemVkJyk7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyTGlzdCA9IEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnJlbmRlcmVycykgPyB0aGlzLm9wdGlvbnMucmVuZGVyZXJzIDogW3RoaXMub3B0aW9ucy5yZW5kZXJlcnNdO1xyXG4gICAgICAgIHJlbmRlckxpc3QuZm9yRWFjaCgocmVuZGVyT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZHMucHVzaChuZXcgR3JpZFJlbmRlcmVyKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVuZGVyT3B0aW9uKSwgeyBjb2x1bW5zOiAocmVuZGVyT3B0aW9uLmNvbHVtbnMgJiYgcmVuZGVyT3B0aW9uLmNvbHVtbnMubGVuZ3RoKSA/IHJlbmRlck9wdGlvbi5jb2x1bW5zIDogdGhpcy5vcHRpb25zLmNvbHVtbnMsIHNvcnRhYmxlOiAocmVuZGVyT3B0aW9uLnNvcnRhYmxlICYmIHJlbmRlck9wdGlvbi5zb3J0YWJsZS5sZW5ndGgpID8gcmVuZGVyT3B0aW9uLnNvcnRhYmxlIDogdGhpcy5vcHRpb25zLnNvcnRhYmxlLCBwYWdpbmF0b3I6IHR5cGVvZiByZW5kZXJPcHRpb24ucGFnaW5hdG9yID09PSAndW5kZWZpbmVkJyA/IHRoaXMub3B0aW9ucy5wYWdpbmF0b3IgOiByZW5kZXJPcHRpb24ucGFnaW5hdG9yIH0pLCB0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XHJcbiAgICAgICAgICAgIGdyaWQucmVuZGVyKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VyaWFsaXplKCkge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbSA9IHRoaXMuc3RhdGUuZ2V0RmlsdGVyKCk7XHJcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUucGFnaW5hdGUpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGspID0+IHBhZ2VQYXJhbXMuaW5kZXhPZihrKSA+PSAwKVxyXG4gICAgICAgICAgICAucmVkdWNlKChtYXAsIGtleSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWFwKSwgeyBba2V5XTogdGhpcy5zdGF0ZS5wYWdpbmF0ZVtrZXldIH0pKSwge30pO1xyXG4gICAgICAgIGNvbnN0IHNvcnRPcHRpb25zID0gdGhpcy5zdGF0ZS5zb3J0QnkgPyB7IHNvcnRCeTogdGhpcy5zdGF0ZS5zb3J0QnksIHNvcnREaXI6IHRoaXMuc3RhdGUuc29ydERpciB9IDoge307XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXN0b20pLCBwYWdpbmF0aW9uKSwgc29ydE9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZGVzZXJpYWxpemUodmFsdWVzKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlLCBsaW1pdCwgY2lkLCBsaWQgfSA9IHZhbHVlcywgcmVzdCA9IF9fcmVzdCh2YWx1ZXMsIFtcInBhZ2VcIiwgXCJsaW1pdFwiLCBcImNpZFwiLCBcImxpZFwiXSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVQYWdpbmF0b3Ioe1xyXG4gICAgICAgICAgICBwYWdlOiArcGFnZSwgbGltaXQ6ICtsaW1pdCwgY2lkLCBsaWQsXHJcbiAgICAgICAgfSk7IC8vIFRPRE86IHNraXAgaW52YWxpZCBwYWdlL2xpbWl0IHZhbHVlc1xyXG4gICAgICAgIGNvbnN0IHsgc29ydEJ5LCBzb3J0RGlyIH0gPSByZXN0LCByZXN0MiA9IF9fcmVzdChyZXN0LCBbXCJzb3J0QnlcIiwgXCJzb3J0RGlyXCJdKTtcclxuICAgICAgICBpZiAoc29ydEJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U29ydChzb3J0QnksIHNvcnREaXIgfHwgU29ydERpcmVjdGlvbi5BU0MpOyAvLyBUT0RPOiBza2lwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFsuLi5wYWdlUGFyYW1zLCAuLi5zb3J0UGFyYW1zXS5mb3JFYWNoKChwKSA9PiBkZWxldGUgcmVzdDJbcF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXJsRGF0YSA9IHJlc3QyO1xyXG4gICAgfVxyXG4gICAgaW5pdEZyb21VcmwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZXJpYWxpemUpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybERhdGEgPSB0aGlzLmdldE9iamVjdEZyb21VcmwodGhpcy5kZWZhdWx0cywgdHlwZW9mIHRoaXMub3B0aW9ucy5zZXJpYWxpemUgPT09ICdzdHJpbmcnID8gdGhpcy5vcHRpb25zLnNlcmlhbGl6ZSA6ICcnKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1cmxEYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VyaWFsaXplKHVybERhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlVXJsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWFsaXplKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNlcmlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnB1dE9iamVjdFRvVXJsKGRhdGEsIHRoaXMuZGVmYXVsdHMsIHR5cGVvZiB0aGlzLm9wdGlvbnMuc2VyaWFsaXplID09PSAnc3RyaW5nJyA/IHRoaXMub3B0aW9ucy5zZXJpYWxpemUgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuICAgIGdldE9iamVjdEZyb21VcmwoZGVmYXVsdHMsIHByZWZpeCA9ICcnKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gcGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCwgeyBwYXJzZU51bWJlcnM6IHRydWUsIHBhcnNlQm9vbGVhbnM6IHRydWUgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKG1hcCwgb0spID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcmVmaXggfHwgb0suaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXApLCB7IFtvSy5zdWJzdHIocHJlZml4Lmxlbmd0aCldOiAodHlwZW9mIG9ialtvS10gIT09ICd1bmRlZmluZWQnKSA/IG9ialtvS10gOiBkZWZhdWx0c1tvSy5zdWJzdHIocHJlZml4Lmxlbmd0aCldIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwdXRPYmplY3RUb1VybChvYmoxLCBkZWZhdWx0cywgcHJlZml4ID0gJycpIHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5oaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FudCB1cGRhdGUgVVJMIHdpdGhvdXQgcmVsb2FkLCBza2lwcGluZycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UmF3ID0gT2JqZWN0LmtleXMob2JqMSkucmVkdWNlKChtYXAsIG9LKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcclxuICAgICAgICAgICAgaWYgKG9iajFbb0tdICYmIG9iajFbb0tdICE9IGRlZmF1bHRzW29LXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWFwKSwgeyBbYCR7cHJlZml4fSR7b0t9YF06IG9iajFbb0tdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICAgIGxldCBvYmoyID0gcGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCwgeyBwYXJzZU51bWJlcnM6IHRydWUsIHBhcnNlQm9vbGVhbnM6IHRydWUgfSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2VyaWFsaXplID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cygoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGsuaW5kZXhPZih0aGlzLm9wdGlvbnMuc2VyaWFsaXplLnRvU3RyaW5nKCkpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9iajJba107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JqMiA9IHt9OyAvLyBJZiB0YWJsZSBpcyBub3QgdXNpbmcgcHJlZml4ZXMsIGFsbCBwYXJhbXMgYXJlIHRoYXQgdGFibGUgcGFyYW1zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvYmoyKSwgcXVlcnlSYXcpO1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHN0cmluZ2lmeVVybCh7XHJcbiAgICAgICAgICAgIHVybDogYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gLFxyXG4gICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuRGF0YWdyaWQuc3BpcmFsRnJhbWV3b3JrTmFtZSA9ICdkYXRhZ3JpZCc7XHJcbkRhdGFncmlkLmRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgaWQ6ICcnLFxyXG4gICAgbG9ja1R5cGU6ICdkZWZhdWx0JyxcclxuICAgIHJlc2V0T25FcnJvcjogZmFsc2UsXHJcbiAgICBjYXB0dXJlRm9ybXM6IFtdLFxyXG4gICAgY29sdW1uczogW10sXHJcbiAgICBoZWFkZXJzOiB7fSxcclxuICAgIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QT1NULFxyXG4gICAgc29ydGFibGU6IFtdLFxyXG4gICAgdXJsOiAnJyxcclxuICAgIHNlcmlhbGl6ZTogdHJ1ZSxcclxuICAgIHBhZ2luYXRvcjogdHJ1ZSxcclxuICAgIHVpOiB7XHJcbiAgICAgICAgY2VsbEF0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgIHJvd0F0dHJpYnV0ZXM6IHt9LFxyXG4gICAgICAgIHJvd0NsYXNzTmFtZTogJycsXHJcbiAgICAgICAgY2VsbENsYXNzTmFtZToge30sXHJcbiAgICAgICAgdGFibGVDbGFzc05hbWU6ICd0YWJsZSB0YWJsZS1zdHJpcHBlZCcsXHJcbiAgICAgICAgd3JhcHBlckNsYXNzTmFtZTogJ3RhYmxlLXJlc3BvbnNpdmUnLFxyXG4gICAgfSxcclxuICAgIHJlbmRlcmVyczogZGVmYXVsdFJlbmRlcmVyLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEYXRhZ3JpZDtcclxuIiwiaW1wb3J0IHsgREVGQVVMVF9MSU1JVCwgU29ydERpcmVjdGlvbiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0IGNsYXNzIERhdGFncmlkU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhZ2luYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiBERUZBVUxUX0xJTUlULFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzb3J0RGlyOiBTb3J0RGlyZWN0aW9uLkFTQyxcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGZvcm1EYXRhOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nO1xyXG4gICAgfVxyXG4gICAgc3RhcnRMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzdG9wTG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgcGFnaW5hdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGFnaW5hdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IHVybERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudXJsRGF0YTtcclxuICAgIH1cclxuICAgIHNldCB1cmxEYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnVybERhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlUGFnaW5hdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUucGFnaW5hdG9yID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnBhZ2luYXRvciksIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBzZXQgZGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuICAgIGdldCBoYXNFcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLnN0YXRlLmVycm9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVycm9yTWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5lcnJvcjtcclxuICAgIH1cclxuICAgIGdldCBzb3J0QnkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydEJ5O1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvcnREaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc29ydERpcjtcclxuICAgIH1cclxuICAgIHNldFN1Y2Nlc3MoZGF0YSwgcGFnaW5hdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnN0YXRlLmVycm9ycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRvcihwYWdpbmF0aW9uKTtcclxuICAgIH1cclxuICAgIHNldEVycm9yKGVycm9yLCBlcnJvcnMgPSB7fSwgcmVzZXREYXRhID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAocmVzZXREYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB9XHJcbiAgICBzZXRTb3J0KGZpZWxkLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNvcnRCeSA9IGZpZWxkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc29ydERpciA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuICAgIHNldEZvcm1EYXRhKGZvcm1JZCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZm9ybURhdGFbZm9ybUlkXSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXRGaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmZvcm1EYXRhKS5yZWR1Y2UoKHByZXYsIGtleSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldiksIHRoaXMuc3RhdGUuZm9ybURhdGFba2V5XSkpLCB7fSk7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS51cmxEYXRhKSwgZm9ybXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBzZiBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XHJcbmltcG9ydCB7IHN0cmluZ2lmeVVybCB9IGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCB7IERFRkFVTFRfTElNSVQsIFBhZ2luYXRvclR5cGUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbi8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvciBleHRlbmRzIHNmLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNzZiwgbm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gUGFnaW5hdG9yLnNwaXJhbEZyYW1ld29ya05hbWU7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zVG9HcmFiID0ge1xyXG4gICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucy5pZCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdpZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBQYWdpbmF0b3IuZGVmYXVsdE9wdGlvbnMudHlwZSxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLXR5cGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmZXRjaENvdW50OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zLmZldGNoQ291bnQsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnZGF0YS1mZXRjaC1jb3VudCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoQ291bnRPbmNlOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zLmZldGNoQ291bnRPbmNlLFxyXG4gICAgICAgICAgICAgICAgZG9tQXR0cjogJ2RhdGEtZmV0Y2gtY291bnQtb25jZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBQYWdpbmF0b3IuZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgbGltaXQ6IERFRkFVTFRfTElNSVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluaXQoc3NmLCBub2RlLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucyksIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHVubG9jaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIHJlbW92ZSBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9ja1R5cGUgfHwgdGhpcy5vcHRpb25zLmxvY2tUeXBlID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XHJcbiAgICAgICAgaWYgKCFsb2NrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IHRyeSB0byBhZGQgXFwnbG9ja1xcJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0UGFyYW1zKHBhcmFtcywgc2VyaWFsaXplKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSwgcGFyYW1zKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgaGFzUGFnZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnN0YXRlLnBhZ2UgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLnN0YXRlLmxpbWl0ICE9PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuICAgIGhhc1RvdGFsKCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5zdGF0ZS5jb3VudCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcbiAgICBoYXNMaW1pdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMubGltaXRPcHRpb25zICE9PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuICAgIGdlbmVyYXRlUGFnZUxpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5kQ3VycmVudCA9IDE7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuc3RhdGUucGFnZTtcclxuICAgICAgICBjb25zdCBwYWdlc0NvdW50ID0gdGhpcy5oYXNUb3RhbCgpID8gTWF0aC5jZWlsKHRoaXMuc3RhdGUuY291bnQgLyB0aGlzLnN0YXRlLmxpbWl0KSA6IHBhZ2U7XHJcbiAgICAgICAgY29uc3QgaGFzTmV4dCA9IHRoaXMuaGFzVG90YWwoKSA/IChwYWdlIDwgcGFnZXNDb3VudCkgOiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gcGFnZSA+IDE7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJhbmdlID0gW01hdGgubWF4KHBhZ2UgLSBleHRlbmRDdXJyZW50LCAxKSwgTWF0aC5taW4ocGFnZSArIGV4dGVuZEN1cnJlbnQsIHBhZ2VzQ291bnQpXTtcclxuICAgICAgICBjb25zdCBzdGFydFJhbmdlID0gWzEsIE1hdGgubWluKGV4dGVuZEN1cnJlbnQgKyAxLCBwYWdlc0NvdW50KV07XHJcbiAgICAgICAgY29uc3QgZW5kUmFuZ2UgPSBbTWF0aC5tYXgocGFnZXNDb3VudCAtIGV4dGVuZEN1cnJlbnQsIDEpLCBwYWdlc0NvdW50XTtcclxuICAgICAgICBjb25zdCBwYWdlcyA9IFtdO1xyXG4gICAgICAgIGxldCBpID0gMTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGFnZTogaSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGAke2l9YCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcGFnZSA9PT0gaSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChpID49IHN0YXJ0UmFuZ2VbMV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIHJlYWNoZWQgbGFzdCBwYWdlIGZvciBzdGFydCByYW5nZVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgY3VycmVudFJhbmdlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcGFnZSBpcyBtb3JlIHRoYW4gMSBwYWdlIGZ1cnRoZXIgZnJvbSBuZXh0IHBhZ2UgaW4gcmFuZ2UsIGFkZCBlbGxpcHNpcyBhbmQganVtcFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBjdXJyZW50UmFuZ2VbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPj0gY3VycmVudFJhbmdlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSByZWFjaGVkIGxhc3QgcGFnZSBmb3IgY3VycmVudCBwYWdlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICBpZiAoaSArIDEgPCBlbmRSYW5nZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHBhZ2UgaXMgbW9yZSB0aGFuIDEgcGFnZSBmdXJ0aGVyIGZyb20gbmV4dCBwYWdlIGluIHJhbmdlLCBhZGQgZWxsaXBzaXMgYW5kIGp1bXBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcclxuICAgICAgICAgICAgICAgICAgICBpID0gZW5kUmFuZ2VbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgIH0gd2hpbGUgKGkgPD0gcGFnZXNDb3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFnZXMsXHJcbiAgICAgICAgICAgIGhhc05leHQsXHJcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRMaW1pdChsaW1pdCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubGltaXQgPSBsaW1pdDtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uUGFnZUNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25QYWdlQ2hhbmdlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgc2V0UGFnZShwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYWdlID0gcGFnZTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uUGFnZUNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25QYWdlQ2hhbmdlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb3VudGVyRGl2LmNsYXNzTmFtZSA9ICdjb2wtMTIgY29sLWxnLTQnO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1BhZ2VzKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzVG90YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlckRpdi5pbm5lckhUTUwgPSBgU2hvd2luZyAkeyh0aGlzLnN0YXRlLnBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUubGltaXQgKyAxfSB0byAke3RoaXMuc3RhdGUucGFnZSAqIHRoaXMuc3RhdGUubGltaXR9YFxyXG4gICAgICAgICAgICAgICAgICAgICsgYCBvZiAke3RoaXMuc3RhdGUuY291bnR9IGVudHJpZXNgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnRlckRpdi5pbm5lckhUTUwgPSBgU2hvd2luZyAkeyh0aGlzLnN0YXRlLnBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUubGltaXQgKyAxfSB0byAke3RoaXMuc3RhdGUucGFnZSAqIHRoaXMuc3RhdGUubGltaXR9IGVudHJpZXNgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpbWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGltaXREaXYuY2xhc3NOYW1lID0gJ2NvbC00IGNvbC1tZC0yIGNvbC1sZy0yJztcclxuICAgICAgICBpZiAodGhpcy5oYXNMaW1pdE9wdGlvbnMoKSkge1xyXG4gICAgICAgICAgICBsaW1pdERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwtc20gY29sLWF1dG9cIj5TaG93PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwibGltaXRcIiBjbGFzcz1cImN1c3RvbS1zZWxlY3QgY3VzdG9tLXNlbGVjdC1zbSBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGxpbWl0RGl2LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubGltaXRPcHRpb25zLmZvckVhY2goKG9wdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBgJHtvcHR9YDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBgJHtvcHR9YDtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQgPT09IHRoaXMuc3RhdGUubGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZWN0LnZhbHVlID0gYCR7dGhpcy5zdGF0ZS5saW1pdH1gO1xyXG4gICAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMaW1pdCgrc2VsZWN0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZXNEaXYuY2xhc3NOYW1lID0gJ2NvbC04IGNvbC1tZC0xMCBjb2wtbGctNic7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzUGFnZXMoKSkge1xyXG4gICAgICAgICAgICBwYWdlc0Rpdi5pbm5lckhUTUwgPSAnPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIGp1c3RpZnktY29udGVudC1lbmQgbWItMFwiPic7XHJcbiAgICAgICAgICAgIGNvbnN0IHVsID0gcGFnZXNEaXYucXVlcnlTZWxlY3RvcigndWwnKTtcclxuICAgICAgICAgICAgY29uc3QgcGFnZUluZm8gPSB0aGlzLmdlbmVyYXRlUGFnZUxpc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgYWRkTGkgPSAoY2xhc3NOYW1lLCB0ZXh0LCB1cmwsIG9uQ2xpY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHt1cmwgfHwgJyMnfVwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicGFnZS1saW5rXCI+JHt0ZXh0fTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB1cmxGb3JQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLnNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZ5VXJsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLm9wdGlvbnMuc2VyaWFsaXplID09PSB0cnVlID8gJ3BhZ2UnIDogYCR7dGhpcy5vcHRpb25zLnNlcmlhbGl6ZX1wYWdlYF06IHBhZ2UudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrRm9yUGFnZSA9IChwYWdlKSA9PiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdlKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBhZGRMaShwYWdlSW5mby5oYXNQcmV2aW91cyA/ICdwYWdlLWl0ZW0gcHJldmlvdXMnIDogJ3BhZ2UtaXRlbSBwcmV2aW91cyBkaXNhYmxlZCcsICfCqycsIHBhZ2VJbmZvLmhhc1ByZXZpb3VzID8gdXJsRm9yUGFnZSh0aGlzLnN0YXRlLnBhZ2UgLSAxKSA6IHVuZGVmaW5lZCwgcGFnZUluZm8uaGFzUHJldmlvdXMgPyBjbGlja0ZvclBhZ2UodGhpcy5zdGF0ZS5wYWdlIC0gMSkgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBwYWdlSW5mby5wYWdlcy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRMaShwLmFjdGl2ZSA/ICdwYWdlLWl0ZW0gYWN0aXZlJyA6ICdwYWdlLWl0ZW0nLCBwLnRleHQsIHAucGFnZSA/IHVybEZvclBhZ2UocC5wYWdlKSA6IHVuZGVmaW5lZCwgcC5wYWdlID8gY2xpY2tGb3JQYWdlKHAucGFnZSkgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRkTGkocGFnZUluZm8uaGFzTmV4dCA/ICdwYWdlLWl0ZW0gbmV4dCcgOiAncGFnZS1pdGVtIG5leHQgZGlzYWJsZWQnLCAnwrsnLCBwYWdlSW5mby5oYXNOZXh0ID8gdXJsRm9yUGFnZSh0aGlzLnN0YXRlLnBhZ2UgKyAxKSA6IHVuZGVmaW5lZCwgcGFnZUluZm8uaGFzTmV4dCA/IGNsaWNrRm9yUGFnZSh0aGlzLnN0YXRlLnBhZ2UgKyAxKSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7IC8vIFRPRE86IGRvbnQgcmVyZW5kZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBlbCB9ID0gdGhpcztcclxuICAgICAgICBlbC5jbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lIHx8ICcnO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGNvdW50ZXJEaXYpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGxpbWl0RGl2KTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChwYWdlc0Rpdik7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9ICcwJzsgLy8gVE9ETzogQmV0dGVyIHdheT9cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuUGFnaW5hdG9yLnNwaXJhbEZyYW1ld29ya05hbWUgPSAnZGF0YWdyaWQtcGFnaW5hdG9yJztcclxuUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgaWQ6ICcnLFxyXG4gICAgbG9ja1R5cGU6ICdub25lJyxcclxuICAgIGZldGNoQ291bnQ6IHRydWUsXHJcbiAgICBzZXJpYWxpemU6IHRydWUsXHJcbiAgICBmZXRjaENvdW50T25jZTogdHJ1ZSxcclxuICAgIHR5cGU6IFBhZ2luYXRvclR5cGUucGFnZXMsXHJcbiAgICBjbGFzc05hbWU6ICdyb3cgbm8tZ3V0dGVycyBhbGlnbi1pdGVtcy1jZW50ZXIgbS0zJyxcclxuICAgIGxpbWl0T3B0aW9uczogWzEwLCAyNSwgNTAsIDEwMF0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvcjtcclxuIiwiZXhwb3J0IHZhciBTb3J0RGlyZWN0aW9uO1xyXG4oZnVuY3Rpb24gKFNvcnREaXJlY3Rpb24pIHtcclxuICAgIFNvcnREaXJlY3Rpb25bXCJBU0NcIl0gPSBcImFzY1wiO1xyXG4gICAgU29ydERpcmVjdGlvbltcIkRFU0NcIl0gPSBcImRlc2NcIjtcclxufSkoU29ydERpcmVjdGlvbiB8fCAoU29ydERpcmVjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgUmVxdWVzdE1ldGhvZDtcclxuKGZ1bmN0aW9uIChSZXF1ZXN0TWV0aG9kKSB7XHJcbiAgICBSZXF1ZXN0TWV0aG9kW1wiR0VUXCJdID0gXCJHRVRcIjtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJQT1NUXCJdID0gXCJQT1NUXCI7XHJcbiAgICBSZXF1ZXN0TWV0aG9kW1wiREVMRVRFXCJdID0gXCJERUxFVEVcIjtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJQVVRcIl0gPSBcIlBVVFwiO1xyXG4gICAgUmVxdWVzdE1ldGhvZFtcIlBBVENIXCJdID0gXCJQQVRDSFwiO1xyXG59KShSZXF1ZXN0TWV0aG9kIHx8IChSZXF1ZXN0TWV0aG9kID0ge30pKTtcclxuZXhwb3J0IGNvbnN0IFBBR0lOQVRPUl9DTEFTU19OQU1FID0gJ3NmLWpzLWRhdGFncmlkLXBhZ2luYXRvcic7XHJcbmV4cG9ydCBjb25zdCBDVVJTT1JfSURfRklFTEQgPSAnY2lkJztcclxuZXhwb3J0IGNvbnN0IExBU1RfSURfRklFTEQgPSAnbGlkJztcclxuZXhwb3J0IGNvbnN0IHBhZ2VQYXJhbXMgPSBbJ3BhZ2UnLCAnbGltaXQnLCBDVVJTT1JfSURfRklFTEQsIExBU1RfSURfRklFTERdO1xyXG5leHBvcnQgY29uc3Qgc29ydFBhcmFtcyA9IFsnc29ydEJ5JywgJ3NvcnREaXInXTtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTElNSVQgPSAyNTtcclxuZXhwb3J0IHZhciBQYWdpbmF0b3JUeXBlO1xyXG4oZnVuY3Rpb24gKFBhZ2luYXRvclR5cGUpIHtcclxuICAgIFBhZ2luYXRvclR5cGVbXCJwYWdlc1wiXSA9IFwicGFnZXNcIjtcclxuICAgIFBhZ2luYXRvclR5cGVbXCJpbmZpbml0ZVwiXSA9IFwiaW5maW5pdGVcIjtcclxufSkoUGFnaW5hdG9yVHlwZSB8fCAoUGFnaW5hdG9yVHlwZSA9IHt9KSk7XHJcbiIsImltcG9ydCBzZiBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XHJcbmltcG9ydCB7IFBBR0lOQVRPUl9DTEFTU19OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgRGF0YUdyaWQgZnJvbSAnLi9EYXRhZ3JpZCc7XHJcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi9QYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBzaW1wbGVDZWxsRm9ybWF0dGVyIH0gZnJvbSAnLi9yZW5kZXIvcHJlbWFkZS9zaW1wbGVDZWxsRm9ybWF0dGVyJztcclxuZXhwb3J0IGNvbnN0IHJlbmRlcnMgPSB7XHJcbiAgICBzaW1wbGVDZWxsRm9ybWF0dGVyLFxyXG59O1xyXG53aW5kb3cuU0ZEYXRhZ3JpZFRvb2xzID0gcmVuZGVyczsgLy8gVE9ETzogSG93IHRvIGV4cG9ydCB0aGF0IHByb3Blcmx5P1xyXG5zZi5yZWdpc3Rlckluc3RhbmNlVHlwZShEYXRhR3JpZCwgJ3NmLWpzLWRhdGFncmlkJyk7IC8vIFRPRE86IFR5cGUgaW5zdGFuY2Vcclxuc2YucmVnaXN0ZXJJbnN0YW5jZVR5cGUoUGFnaW5hdG9yLCBQQUdJTkFUT1JfQ0xBU1NfTkFNRSk7IC8vIFRPRE86IFR5cGUgaW5zdGFuY2VcclxuZXhwb3J0IGRlZmF1bHQgRGF0YUdyaWQ7IC8vIEVTNiBkZWZhdWx0IGV4cG9ydCB3aWxsIG5vdCBleHBvc2UgdXMgYXMgZ2xvYmFsXHJcbiIsImltcG9ydCB7IFBBR0lOQVRPUl9DTEFTU19OQU1FIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYXBwbHlBdHRycmlidXRlcywgbm9ybWFsaXplQ29sdW1ucyB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgZGVmYXVsdEJvZHlXcmFwcGVyIH0gZnJvbSAnLi9kZWZhdWx0Qm9keVdyYXBwZXInO1xyXG5pbXBvcnQgeyBkZWZhdWx0Rm9vdGVyV3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdEZvb3RlcldyYXBwZXInO1xyXG5pbXBvcnQgeyBkZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyIH0gZnJvbSAnLi9kZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEhlYWRlcldyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRIZWFkZXJXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdFJvd0NlbGxSZW5kZXJlciB9IGZyb20gJy4vZGVmYXVsdFJvd1JlbmRlcmVyJztcclxuaW1wb3J0IHsgZGVmYXVsdFJvd1dyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRSb3dXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdFRhYmxlV3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdFRhYmxlV3JhcHBlcic7XHJcbmxldCBpbnN0YW5jZUNvdW50ZXIgPSAxO1xyXG5leHBvcnQgY2xhc3MgR3JpZFJlbmRlcmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHJvb3QpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlQ291bnRlcisrO1xyXG4gICAgICAgIHRoaXMuY29sdW1uSW5mbyA9IG5vcm1hbGl6ZUNvbHVtbnModGhpcy5vcHRpb25zLmNvbHVtbnMsIHRoaXMub3B0aW9ucy5zb3J0YWJsZSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3NmLWRhdGFncmlkLXdyYXBwZXInKTtcclxuICAgICAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMub3B0aW9ucy51aS53cmFwcGVyQ2xhc3NOYW1lIHx8ICcnKTtcclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFnaW5hdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGVmYXVsdFBhZ2luYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0YWJsZVJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnRhYmxlV3JhcHBlciB8fCBkZWZhdWx0VGFibGVXcmFwcGVyO1xyXG4gICAgICAgIHRoaXMudGFibGVFbCA9IHRhYmxlUmVuZGVyZXIodGhpcy53cmFwcGVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRGVmYXVsdFBhZ2luYXRvcigpIHtcclxuICAgICAgICBjb25zdCBpZCA9IGAke0RhdGUubm93KCl9JHt0aGlzLmluc3RhbmNlfWA7XHJcbiAgICAgICAgdGhpcy5yb290Lm9wdGlvbnMuY2FwdHVyZUZvcm1zLnB1c2goaWQpO1xyXG4gICAgICAgIHRoaXMucGFnaW5hdG9yRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRvckVsLmNsYXNzTmFtZSA9IFBBR0lOQVRPUl9DTEFTU19OQU1FO1xyXG4gICAgICAgIHRoaXMucGFnaW5hdG9yRWwuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnJvb3Qubm9kZS5hcHBlbmRDaGlsZCh0aGlzLnBhZ2luYXRvckVsKTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXHJcbiAgICBhcHBseUFkZGl0aW9uYWxDZWxsQXR0cmlidXRlcyhlbCwgY29sdW1uLCBvcHRpb25zLCBzdGF0ZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjZWxsTWV0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGNvbHVtbi5pZCxcclxuICAgICAgICAgICAgY29sdW1uLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgLy8gcm93U2VsZWN0ZWQ6IChzdGF0ZSBhcyBhbnkpLmlzU2VsZWN0ZWQoaW5kZXgpLFxyXG4gICAgICAgICAgICByb3dTZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBpdGVtOiBzdGF0ZS5kYXRhW2luZGV4XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQob3B0aW9ucy51aS5jZWxsQ2xhc3NOYW1lKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpYyA9IG9wdGlvbnMudWkuY2VsbENsYXNzTmFtZVtjb2x1bW4uaWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwZWNpZmljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpYyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChzcGVjaWZpYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKHNwZWNpZmljKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51aS5jZWxsQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgb3B0aW9ucy51aS5jZWxsQXR0cmlidXRlcyhjZWxsTWV0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWMgPSBvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwZWNpZmljID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIHNwZWNpZmljKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBzcGVjaWZpYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuICAgIGFwcGx5QWRkaXRpb25hbEhlYWRlckNlbGxBdHRyaWJ1dGVzKGVsLCBjb2x1bW4sIG9wdGlvbnMsIHN0YXRlKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbE1ldGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXHJcbiAgICAgICAgICAgIGNvbHVtbixcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgIGl0ZW06IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucy51aS5oZWFkZXJDZWxsQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51aS5oZWFkZXJDZWxsQ2xhc3NOYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZShjZWxsTWV0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWMgPSBvcHRpb25zLnVpLmhlYWRlckNlbGxDbGFzc05hbWVbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoc3BlY2lmaWMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChzcGVjaWZpYyhjZWxsTWV0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy51aS5oZWFkZXJDZWxsQXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXMoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljID0gb3B0aW9ucy51aS5oZWFkZXJDZWxsQXR0cmlidXRlc1tjb2x1bW4uaWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwZWNpZmljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGVjaWZpYyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBzcGVjaWZpYyhjZWxsTWV0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgc3BlY2lmaWMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcihzdGF0ZSkge1xyXG4gICAgICAgIC8vIFJlbmRlciBoZWFkZXJcclxuICAgICAgICBjb25zdCBoZWFkZXJSZW5kZXJlciA9IHRoaXMub3B0aW9ucy5oZWFkZXJXcmFwcGVyIHx8IGRlZmF1bHRIZWFkZXJXcmFwcGVyO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlckVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5yZW1vdmVDaGlsZCh0aGlzLmhlYWRlckVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oZWFkZXJFbCA9IGhlYWRlclJlbmRlcmVyKHRoaXMudGFibGVFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyRWwpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZUVsLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyRWwpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2x1bW5JbmZvLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5JbmZvLmZvckVhY2goKGNJLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckNlbGxSZW5kZXJlciA9ICh0aGlzLm9wdGlvbnMuaGVhZGVyTGlzdCB8fCB7fSlbY0kuaWRdIHx8IGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGhlYWRlckNlbGxSZW5kZXJlcihjSSwgdGhpcy5vcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUFkZGl0aW9uYWxIZWFkZXJDZWxsQXR0cmlidXRlcyhub2RlLCBjSSwgdGhpcy5vcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbmRlciBib2R5XHJcbiAgICAgICAgaWYgKHRoaXMuYm9keUVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5yZW1vdmVDaGlsZCh0aGlzLmJvZHlFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJvZHlSZW5kZXJlciA9IHRoaXMub3B0aW9ucy5ib2R5V3JhcHBlciB8fCBkZWZhdWx0Qm9keVdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5ib2R5RWwgPSBib2R5UmVuZGVyZXIodGhpcy50YWJsZUVsLCB0aGlzLm9wdGlvbnMsIHN0YXRlKTtcclxuICAgICAgICBpZiAodGhpcy5ib2R5RWwpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZUVsLmFwcGVuZENoaWxkKHRoaXMuYm9keUVsKTtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5vcHRpb25zLnJvd1dyYXBwZXIgfHwgZGVmYXVsdFJvd1dyYXBwZXI7XHJcbiAgICAgICAgICAgIHN0YXRlLmRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gcm93KHRoaXMuYm9keUVsLCB0aGlzLm9wdGlvbnMsIHN0YXRlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbkluZm8uZm9yRWFjaCgoY0kpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dDZWxsUmVuZGVyZXIgPSAodGhpcy5vcHRpb25zLmNlbGxzIHx8IHt9KVtjSS5pZF0gfHwgZGVmYXVsdFJvd0NlbGxSZW5kZXJlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gcm93Q2VsbFJlbmRlcmVyKGNJLCB0aGlzLm9wdGlvbnMsIHN0YXRlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUFkZGl0aW9uYWxDZWxsQXR0cmlidXRlcyhub2RlLCBjSSwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW5kZXIgZm9vdGVyXHJcbiAgICAgICAgaWYgKHRoaXMuZm9vdGVyRWwpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZUVsLnJlbW92ZUNoaWxkKHRoaXMuZm9vdGVyRWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmb290ZXJSZW5kZXJlciA9IHRoaXMub3B0aW9ucy5mb290ZXJXcmFwcGVyIHx8IGRlZmF1bHRGb290ZXJXcmFwcGVyO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyRWwgPSBmb290ZXJSZW5kZXJlcih0aGlzLnRhYmxlRWwsIHRoaXMub3B0aW9ucywgc3RhdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmZvb3RlckVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5hcHBlbmRDaGlsZCh0aGlzLmZvb3RlckVsKTtcclxuICAgICAgICAgICAgLy8gV2UgYXNzdW1lIGZvb3RlciByZW5kZXIgaGFuZGxlcyBhbGwgZGF0YSBzbyBubyBhZGRpdGlvbmFsIHJlbmRlcnMgaGVyZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdEJvZHlXcmFwcGVyID0gKG5vZGUsIG9wdGlvbnMsIHN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGlmIChzdGF0ZS5oYXNFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yVHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGVycm9yVGQuY29sU3BhbiA9IG9wdGlvbnMuY29sdW1ucy5sZW5ndGg7XHJcbiAgICAgICAgZXJyb3JUZC5pbm5lclRleHQgPSBzdGF0ZS5lcnJvck1lc3NhZ2UgfHwgJ1Vua25vd24gRXJyb3InO1xyXG4gICAgICAgIGVycm9yVGQuY2xhc3NMaXN0LmFkZCgnc2YtdGFibGVfX2Vycm9yJyk7XHJcbiAgICAgICAgZXJyb3JUci5hcHBlbmRDaGlsZChlcnJvclRkKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChlcnJvclRyKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXRlLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgZW1wdHlUZC5jb2xTcGFuID0gb3B0aW9ucy5jb2x1bW5zLmxlbmd0aDtcclxuICAgICAgICBlbXB0eVRkLmlubmVySFRNTCA9ICdObyBEYXRhJztcclxuICAgICAgICBlbXB0eVRkLmNsYXNzTGlzdC5hZGQoJ3NmLXRhYmxlX19lbXB0eScpO1xyXG4gICAgICAgIGVtcHR5VHIuYXBwZW5kQ2hpbGQoZW1wdHlUZCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZW1wdHlUcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRGb290ZXJXcmFwcGVyID0gKG5vZGUsIG9wdGlvbnMsIHN0YXRlKSA9PiB1bmRlZmluZWQ7XHJcbiIsImltcG9ydCB7IFNvcnREaXJlY3Rpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlYWRlckNlbGxSZW5kZXJlciA9IChjb2x1bW4sIG9wdGlvbnMsIHN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gW107XHJcbiAgICBpZiAoY29sdW1uLnNvcnRhYmxlKSB7XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdzZi10YWJsZV9fc29ydCcpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wYXJlbnQudHJpZ2dlclNvcnQoY29sdW1uLmlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChzdGF0ZS5zb3J0QnkgPT09IGNvbHVtbi5pZCkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5zb3J0RGlyID09PSBTb3J0RGlyZWN0aW9uLkFTQykge1xyXG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3NmLXRhYmxlX19zb3J0X2FzYycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdzZi10YWJsZV9fc29ydF9kZXNjJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCIke2NsYXNzZXMuam9pbignICcpfVwiPiR7Y29sdW1uLnRpdGxlfTwvZGl2PmA7XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIZWFkZXJXcmFwcGVyID0gKG5vZGUsIG9wdGlvbnMsIHN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIGVsLmFwcGVuZENoaWxkKHRyKTtcclxuICAgIHJldHVybiBlbDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRSZW5kZXJlciA9IHtcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgc29ydGFibGU6IFtdLFxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNpYyBjbGFzcy9hdHRyaWJ1dGUgcHJvcGVydGllc1xyXG4gICAgICovXHJcbiAgICB1aToge1xyXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU6ICd0YWJsZS1yZXNwb25zaXZlJyxcclxuICAgICAgICB0YWJsZUNsYXNzTmFtZTogJ3RhYmxlIHRhYmxlLXN0cmlwZWQnLFxyXG4gICAgICAgIGNlbGxDbGFzc05hbWU6IHt9LFxyXG4gICAgICAgIHJvd0NsYXNzTmFtZTogJycsXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgICAgIGNlbGxBdHRyaWJ1dGVzOiAoY2VsbE1ldGEpID0+ICh7fSksXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgICAgIHJvd0F0dHJpYnV0ZXM6IChyb3dNZXRhKSA9PiAoe30pLFxyXG4gICAgfSxcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRSb3dDZWxsUmVuZGVyZXIgPSAoY29sdW1uLCBvcHRpb25zLCBzdGF0ZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IHN0YXRlLmRhdGFbaW5kZXhdW2NvbHVtbi5pZF07XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRSb3dXcmFwcGVyID0gKG5vZGUsIG9wdGlvbnMsIHN0YXRlLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgbm9kZS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0VGFibGVXcmFwcGVyID0gKG5vZGUsIG9wdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgIGVsLmNsYXNzTmFtZSA9IG9wdGlvbnMudWkudGFibGVDbGFzc05hbWUgfHwgJyc7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIHJldHVybiBlbDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHNpbXBsZUNlbGxGb3JtYXR0ZXIgPSAoZm9ybWF0RnVuY3Rpb24gPSAodikgPT4gKHYgPyB2LnRvU3RyaW5nKCkgOiAnJyksIHRhZ05hbWUgPSAndGQnKSA9PiB7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IChjb2x1bW4sIG9wdGlvbnMsIHN0YXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICBlbC5pbm5lckhUTUwgPSBmb3JtYXRGdW5jdGlvbihzdGF0ZS5kYXRhW2luZGV4XVtjb2x1bW4uaWRdLCBzdGF0ZS5kYXRhW2luZGV4XSk7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiByZW5kZXJlcjtcclxufTtcclxuIiwiaW1wb3J0IHsgU29ydERpcmVjdGlvbiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUNvbHVtbnMgPSAoY29sdW1ucywgc29ydGFibGVzKSA9PiB7XHJcbiAgICBjb25zdCBzTGlzdCA9IHNvcnRhYmxlcy5tYXAoKHMpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGZpZWxkOiBzLCBkaXJlY3Rpb246IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkO1xyXG4gICAgICAgIGxldCB0aXRsZTtcclxuICAgICAgICBsZXQgc29ydERpcjtcclxuICAgICAgICBsZXQgc29ydGFibGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIGMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlkID0gYztcclxuICAgICAgICAgICAgdGl0bGUgPSBjO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gU29ydERpcmVjdGlvbi5BU0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGMuaWQ7XHJcbiAgICAgICAgICAgIHRpdGxlID0gYy50aXRsZSB8fCBjLmlkO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gYy5zb3J0RGlyIHx8IFNvcnREaXJlY3Rpb24uQVNDO1xyXG4gICAgICAgICAgICBzb3J0YWJsZSA9ICEhYy5zb3J0RGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzb3J0ID0gc0xpc3QuZmluZCgocykgPT4gKHMuZmllbGQgPT09IGlkKSk7XHJcbiAgICAgICAgaWYgKHNvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc29ydC5kaXJlY3Rpb24gfHwgc29ydERpcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBzb3J0RGlyLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFwcGx5QXR0cnJpYnV0ZXMgPSAobm9kZSwgYXR0cnMpID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fOyIsImNvbnN0IGNvcmUgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpLmRlZmF1bHQ7XG5cbnJlcXVpcmUoJy4vaW5wdXQnKTtcblxucmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2xvY2tlcicpO1xucmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2Zvcm0nKTtcbnJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9kYXRhZ3JpZCcpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gY29yZTtcbiIsIlxuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpLmRlZmF1bHQ7XG5jb25zdCBJbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQnKS5kZWZhdWx0O1xuXG5zZi5pbnN0YW5jZXNDb250cm9sbGVyLnJlZ2lzdGVySW5zdGFuY2VUeXBlKElucHV0LCAnc2YtanMtaW5wdXQnKTtcbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7IC8vIEVTNiBkZWZhdWx0IGV4cG9ydCB3aWxsIG5vdCBleHBvc2UgdXMgYXMgZ2xvYmFsXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG5pbXBvcnQgY29yZSBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XG5cbmNvbnN0IElucHV0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuX2NvbnN0cnVjdChzZiwgbm9kZSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEBsZW5kcyBzZi5Gb3JtLnByb3RvdHlwZVxuICovXG5JbnB1dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNvcmUuY29yZS5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlKTtcblxuLyoqXG4gKiBOYW1lIHRvIHJlZ2lzdGVyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5JbnB1dC5wcm90b3R5cGUubmFtZSA9ICdpbnB1dCc7XG5cbklucHV0LnByb3RvdHlwZS5fY29uc3RydWN0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzZiwgbm9kZSwgb3B0aW9ucyk7IC8vIGNhbGwgcGFyZW50XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICAvLyBpZiB3ZSBwYXNzIG9wdGlvbnMgZXh0ZW5kIGFsbCBvcHRpb25zIGJ5IHBhc3NlZCBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zID0gc2YudG9vbHMuZXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBFbGVtZW50c1xuICB0aGlzLmVscyA9IHtcbiAgICBub2RlLFxuICB9O1xuXG4gIGlmICh0aGlzLm9wdGlvbnMucHJlZml4KSB7XG4gICAgdGhpcy5zZXRQcmVmaXgoKTtcbiAgICB0aGlzLmFkZFByZWZpeEV2ZW50TGlzdGVuZXJzKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnBhdHRlcm4pIHtcbiAgICB0aGlzLnNldHVwUGF0dGVybigpO1xuICAgIHRoaXMuYWRkUGF0dGVybkV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAb3ZlcnJpZGVcbiAqIEBpbmhlcml0RG9jXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5JbnB1dC5wcm90b3R5cGUub3B0aW9uc1RvR3JhYiA9IHtcbiAgLyoqXG4gICAgICogIFBhdHRlcm4gb2YgaW5wdXRcbiAgICAgKi9cbiAgcGF0dGVybjoge1xuICAgIGRvbUF0dHI6ICdkYXRhLXBhdHRlcm4nLFxuICB9LFxuICAvKipcbiAgICAgKiAgUHJlZml4IG9mICBpbnB1dFxuICAgICAqL1xuICBwcmVmaXg6IHtcbiAgICBkb21BdHRyOiAnZGF0YS1wcmVmaXgnLFxuICB9LFxufTtcblxuLyoqXG4gKiBTZXR1cCBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuSW5wdXQucHJvdG90eXBlLmlzVmFsaWRQYXR0ZXJuID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5lbHMubm9kZS52YWx1ZS5tYXRjaCh0aGlzLnBhdHRlcm4pO1xufTtcblxuSW5wdXQucHJvdG90eXBlLmFkZFBhdHRlcm5FdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgdGhpcy5faW5wdXRLZXlQcmVzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoYXQuZWxzLm5vZGU7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGF0LmdldEN1cnNvclBvc2l0aW9uKCk7XG5cbiAgICBpZiAoY2hhci5sZW5ndGggPiAwKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IG9mZnNldCA9IDE7XG4gICAgICBmb3IgKGxldCBpID0gcG9zaXRpb247IGkgPCB2YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhhdC5mb3JtYXRDaGFyYWN0ZXJzLmluZGV4T2YodmFsdWVbaV0pICE9PSAtMSkge1xuICAgICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZ1dHVyZVZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHBvc2l0aW9uICsgb2Zmc2V0IC0gMSkgKyBjaGFyICsgdmFsdWUuc3Vic3RyaW5nKHBvc2l0aW9uICsgb2Zmc2V0LCB2YWx1ZS5sZW5ndGgpO1xuXG4gICAgICBpZiAoIWZ1dHVyZVZhbHVlLm1hdGNoKHRoYXQucGF0dGVybldpdGhFbXB0eSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9IGZ1dHVyZVZhbHVlO1xuICAgICAgdGhhdC5zZXRDdXJzb3JQb3NpdGlvbihwb3NpdGlvbiArIG9mZnNldCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLl9pbnB1dEtleVByZXNzKTtcblxuICB0aGlzLl9pbnB1dEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoYXQuZWxzLm5vZGUudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgICB0aGF0LmVscy5ub2RlLnZhbHVlID0gdGhhdC5wYXR0ZXJuU3RyaW5nLnJlcGxhY2UoL1teXFwtXFwoXFwpXFxbXFxdXFw6XFwuXFwsXFwkXFwlXFxAXFwgXFwvXS9nLCAnXycpO1xuICAgICAgICB0aGF0LnNldEN1cnNvclBvc2l0aW9uKDApO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9O1xuICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faW5wdXRGb2N1cyk7XG5cbiAgdGhpcy5faW5wdXRLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgY2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhhdC5lbHMubm9kZTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoYXQuZ2V0Q3Vyc29yUG9zaXRpb24oKTtcblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gcG9zaXRpb24gLSAxOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgIGlmICh0aGF0LmZvcm1hdENoYXJhY3RlcnMuaW5kZXhPZih2YWx1ZVtpXSkgIT09IC0xKSB7XG4gICAgICAgICAgb2Zmc2V0IC09IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZnV0dXJlVmFsdWUgPSBgJHt2YWx1ZS5zdWJzdHJpbmcoMCwgcG9zaXRpb24gKyBvZmZzZXQgLSAxKX1fJHt2YWx1ZS5zdWJzdHJpbmcocG9zaXRpb24gKyBvZmZzZXQsIHZhbHVlLmxlbmd0aCl9YDtcblxuICAgICAgaWYgKCFmdXR1cmVWYWx1ZS5tYXRjaCh0aGF0LnBhdHRlcm5XaXRoRW1wdHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGZ1dHVyZVZhbHVlKTtcbiAgICAgIHRoYXQuZWxzLm5vZGUudmFsdWUgPSBmdXR1cmVWYWx1ZTtcbiAgICAgIHRoYXQuc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb24gKyBvZmZzZXQgLSAxKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGlmIChjaGFyLm1hdGNoKC9cXFcvKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2lucHV0S2V5RG93bik7XG5cbiAgdGhpcy5faW5wdXRCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhhdC5lbHMubm9kZS52YWx1ZS5tYXRjaCh0aGF0LnBhdHRlcm4pKSB7XG4gICAgICB0aGF0LmVscy5ub2RlLnZhbHVlID0gJyc7XG4gICAgfVxuICB9O1xuICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9pbnB1dEJsdXIpO1xufTtcblxuSW5wdXQucHJvdG90eXBlLmdldEN1cnNvclBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICBsZXQgcG9zaXRpb24gPSAwO1xuXG4gIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICB0aGlzLmVscy5ub2RlLmZvY3VzKCk7XG5cbiAgICBjb25zdCBzZWxlY3RSYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuXG4gICAgc2VsZWN0UmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtdGhpcy5lbHMubm9kZS52YWx1ZS5sZW5ndGgpO1xuXG4gICAgcG9zaXRpb24gPSBzZWxlY3RSYW5nZS50ZXh0Lmxlbmd0aDtcbiAgfSBlbHNlIGlmICh0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0IHx8IHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uU3RhcnQgPT09ICcwJykge1xuICAgIHBvc2l0aW9uID0gdGhpcy5lbHMubm9kZS5zZWxlY3Rpb25TdGFydDtcbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbjtcbn07XG5cbklucHV0LnByb3RvdHlwZS5zZXRDdXJzb3JQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICBpZiAodGhpcy5lbHMubm9kZS5jcmVhdGVUZXh0UmFuZ2UpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuZWxzLm5vZGUuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgcmFuZ2UubW92ZSgnY2hhcmFjdGVyJywgcG9zaXRpb24pO1xuICAgIHJhbmdlLnNlbGVjdCgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uU3RhcnQpIHtcbiAgICB0aGlzLmVscy5ub2RlLmZvY3VzKCk7XG4gICAgdGhpcy5lbHMubm9kZS5zZWxlY3Rpb25TdGFydCA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lbHMubm9kZS5mb2N1cygpO1xuICB9XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuc2V0dXBQYXR0ZXJuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdENoYXJhY3RlcnMgPSB0aGlzLmVscy5ub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mb3JtYXQtY2hhcmFjdGVycycpIHx8ICctKClbXTouLCQlQCAvJztcbiAgdGhpcy5wYXR0ZXJuU3RyaW5nID0gdGhpcy5vcHRpb25zLnBhdHRlcm47XG4gIHRoaXMuZWxzLm5vZGUucGxhY2Vob2xkZXIgPSB0aGlzLnBhdHRlcm5TdHJpbmc7XG5cbiAgY29uc3QgX2luaXRQYXR0ZXJuID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBmb3JtYXR0ZWRQYXR0ZXJuU3RyID0gJyc7XG4gICAgbGV0IGZvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHIgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXR0ZXJuU3RyaW5nLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjaGFyID0gdGhpcy5wYXR0ZXJuU3RyaW5nW2ldO1xuXG4gICAgICBpZiAodGhpcy5mb3JtYXRDaGFyYWN0ZXJzLmluZGV4T2YoY2hhcikgPj0gMCkge1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuU3RyICs9IGNoYXI7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHIgKz0gY2hhcjtcbiAgICAgIH0gZWxzZSBpZiAoY2hhci5tYXRjaCgvWzAtOV0vKSkge1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuU3RyICs9ICdbMC05XSc7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHIgKz0gJyhbMC05XXxfKSc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIubWF0Y2goL1thLXpBLVpdLykpIHtcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVyblN0ciArPSAnW2EtekEtWl0nO1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyICs9ICcoW2EtekEtWl18XyknO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSAnKicpIHtcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVyblN0ciArPSAnWzAtOWEtekEtWl0nO1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyICs9ICcoWzAtOWEtekEtWl18XyknO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGF0dGVybiA9IG5ldyBSZWdFeHAoYF4ke2Zvcm1hdHRlZFBhdHRlcm5TdHJ9JGAsICdnJyk7XG4gICAgdGhpcy5wYXR0ZXJuV2l0aEVtcHR5ID0gbmV3IFJlZ0V4cChgXiR7Zm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0cn0kYCwgJ2cnKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIF9pbml0UGF0dGVybigpO1xufTtcblxuXG4vKipcbiAqIEFkZHMgc3RhdGljIGV2ZW50cyBsaXN0ZW5lcnMuXG4gKi9cbklucHV0LnByb3RvdHlwZS5hZGRQcmVmaXhFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgdGhpcy5faW5wdXRLZXl1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXByZWZpeCcpO1xuXG4gICAgaWYgKHRoYXQuZWxzLm5vZGUudmFsdWUuaW5kZXhPZihvbGRWYWx1ZSkgIT09IDApIHtcbiAgICAgIHRoYXQuZWxzLm5vZGUudmFsdWUgPSBgJHtvbGRWYWx1ZX0gYDtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHRoaXMuZWxzLm5vZGUpIHtcbiAgICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faW5wdXRLZXl1cCk7XG4gIH1cbn07XG5cbklucHV0LnByb3RvdHlwZS5yZW1vdmVQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVscy5ub2RlKSB7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuX2lucHV0S2V5UHJlc3MpO1xuICAgIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9pbnB1dEZvY3VzKTtcbiAgICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9pbnB1dEtleURvd24pO1xuICAgIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2lucHV0Qmx1cik7XG4gIH1cbn07XG5cbklucHV0LnByb3RvdHlwZS5yZW1vdmVQcmVmaXhFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZWxzLm5vZGUpIHtcbiAgICB0aGlzLmVscy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faW5wdXRLZXl1cCk7XG4gIH1cbn07XG5cbklucHV0LnByb3RvdHlwZS5kaWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMucGF0dGVybikge1xuICAgIHRoaXMucmVtb3ZlUGF0dGVybkV2ZW50TGlzdGVuZXJzKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnByZWZpeCkge1xuICAgIHRoaXMucmVtb3ZlUHJlZml4RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuICBkZWxldGUgdGhpcztcbn07XG5cbklucHV0LnByb3RvdHlwZS5zZXRQcmVmaXggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZWxzLm5vZGUudmFsdWUgPSBgJHt0aGlzLm9wdGlvbnMucHJlZml4fSAke3RoaXMuZWxzLm5vZGUudmFsdWV9YDtcbn07XG5cbmV4cG9ydCB7IElucHV0IGFzIGRlZmF1bHQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sa2l0LmpzIiwic291cmNlUm9vdCI6IiJ9