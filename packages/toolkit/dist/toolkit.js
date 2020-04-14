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
              // do not process other nodes then ELEMENT_NODE https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType also ignore SCRIPT and LINK tag
              if (val.nodeType !== 1 || val.nodeName === 'SCRIPT' || val.nodeName === 'LINK') {
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
              return undefined;
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
            const instanceObj = this.getInstance(instanceName, node);

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
           * @return {boolean}
           */


          getInstance(instanceName, node) {
            const typeArr = this.storage.instances[instanceName];
            let ret;

            if (!typeArr) {
              return undefined;
            }

            const el = node instanceof HTMLElement ? node : document.getElementById(node.toString());

            if (!el) {
              return undefined;
            }

            for (let key = 0, l = typeArr.length; key < l; key += 1) {
              // iterate storage and try to find instance
              if (typeArr[key].node === el) {
                ret = typeArr[key];
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
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FqYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RvbU11dGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hamF4L2Jhc2VBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL0RPTUV2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9kb21Ub29scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90b29scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNB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RUFBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcEN4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDRjtBQUNYO0FBQzRCO0FBQ1o7QUFDUjtBQUNzQjtBQUNaO0FBQzFDO0FBQ1AsSUFBSSx3REFBSTtBQUNSLElBQUksb0ZBQWtCO0FBQ3RCLElBQUksd0VBQVk7QUFDaEIsSUFBSSwyREFBTTtBQUNWLElBQUksc0ZBQW1CO0FBQ3ZCO0FBQ087QUFDUCxJQUFJLHFFQUFTO0FBQ2IsSUFBSSxtRUFBUTtBQUNaO0FBQ08sZUFBZSxDQUFDLDZFQUFjIiwiZmlsZSI6ImNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNmXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vRXZlbnRzJztcclxuZXhwb3J0IGNsYXNzIEFqYXgge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVxdWVzdHMgPSAwO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cyhbJ2JlZm9yZVNlbmQnLCAnbG9hZCddKTtcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VuZChvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gVE9ETyB3aHkgd2UgY2hlY2sgaGVyZSBpZiBkYXRhID09PSBudWxsIHRoZW4gcmVhc3NpZ24gdG8gbnVsbCBhZ2Fpbj9cclxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhID09PSBudWxsIHx8IG9wdGlvbnMuZGF0YSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5tZXRob2QpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgPyBPYmplY3QuYXNzaWduKG9wdGlvbnMuaGVhZGVycywgdGhpcy5oZWFkZXJzLCBvcHRpb25zLmhlYWRlcnMpIDogKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaGVhZGVycykpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xyXG4gICAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgICAgY29uc3QgY2FuY2VsU291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKCk7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAvLyBgdXJsYCBpcyB0aGUgc2VydmVyIFVSTCB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgdXJsOiBvcHRpb25zLnVybCxcclxuICAgICAgICAgICAgLy8gYG1ldGhvZGAgaXMgdGhlIHJlcXVlc3QgbWV0aG9kIHRvIGJlIHVzZWQgd2hlbiBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcclxuICAgICAgICAgICAgLy8gYGhlYWRlcnNgIGFyZSBjdXN0b20gaGVhZGVycyB0byBiZSBzZW50XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycyxcclxuICAgICAgICAgICAgLy8gYGRhdGFgIGlzIHRoZSBkYXRhIHRvIGJlIHNlbnQgYXMgdGhlIHJlcXVlc3QgYm9keVxyXG4gICAgICAgICAgICAvLyBPbmx5IGFwcGxpY2FibGUgZm9yIHJlcXVlc3QgbWV0aG9kcyAnUFVUJywgJ1BPU1QnLCBhbmQgJ1BBVENIJ1xyXG4gICAgICAgICAgICAvLyBXaGVuIG5vIGB0cmFuc2Zvcm1SZXF1ZXN0YCBpcyBzZXQsIG11c3QgYmUgb2Ygb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAgICAgICAgICAgIC8vIC0gc3RyaW5nLCBwbGFpbiBvYmplY3QsIEFycmF5QnVmZmVyLCBBcnJheUJ1ZmZlclZpZXcsIFVSTFNlYXJjaFBhcmFtc1xyXG4gICAgICAgICAgICAvLyAtIEJyb3dzZXIgb25seTogRm9ybURhdGEsIEZpbGUsIEJsb2JcclxuICAgICAgICAgICAgLy8gLSBOb2RlIG9ubHk6IFN0cmVhbSwgQnVmZmVyXHJcbiAgICAgICAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcclxuICAgICAgICAgICAgLy8gYG9uVXBsb2FkUHJvZ3Jlc3NgIGFsbG93cyBoYW5kbGluZyBvZiBwcm9ncmVzcyBldmVudHMgZm9yIHVwbG9hZHNcclxuICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKHByb2dyZXNzRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3MocHJvZ3Jlc3NFdmVudC5sb2FkZWQsIHByb2dyZXNzRXZlbnQudG90YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBgY2FuY2VsVG9rZW5gIHNwZWNpZmllcyBhIGNhbmNlbCB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNhbmNlbCB0aGUgcmVxdWVzdFxyXG4gICAgICAgICAgICAvLyAoc2VlIENhbmNlbGxhdGlvbiBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxzKVxyXG4gICAgICAgICAgICBjYW5jZWxUb2tlbjogY2FuY2VsU291cmNlLnRva2VuLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYW5jZWwgPSBjYW5jZWxTb3VyY2UuY2FuY2VsO1xyXG4gICAgICAgIGNvbnN0IHdyYXBFcnJvciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuaXNTRkFqYXhFcnJvciA9IHRydWU7IC8vIE1hcmtzIGVycm9yIHRoYXQgY2FuIGhhdmUgbm9ybWFsIGRhdGEgaW5zaWRlXHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYWpheFByb21pc2UgPSBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMudXJsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJyk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJlcXVlc3RzICs9IDE7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAucmVxdWVzdChjb25maWcpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJlcXVlc3RzIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDE5OSAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHsgLy8gMjAwLTI5OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzk5ICYmIHJlc3BvbnNlLnN0YXR1cyA8IDYwMCkgeyAvLyA0MDAtNTk5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh3cmFwRXJyb3IocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Vua25vd24gc3RhdHVzICVkLiBSZWplY3RpbmcnLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qod3JhcEVycm9yKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHdyYXBFcnJvcihyZXNwb25zZSkpOyAvLyByZWplY3Qgd2l0aCB0aGUgc3RhdHVzIHRleHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMudHJpZ2dlcignbG9hZCcsIG9wdGlvbnMpOyAvLyBmb3IgZXhhbXBsZSAtIHVzZWQgdG8gaGFuZGxlIGFjdGlvbnNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJlcXVlc3RzIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3Qod3JhcEVycm9yKGVycm9yLnJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIGFqYXhQcm9taXNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFqYXg7XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGEgYmFzZSBjb25zdHJ1Y3RvciAoY2xhc3MpIGZvciBhbnkgRE9NIGJhc2VkIGluc3RhbmNlLlxyXG4gKiBUaGlzIGNvbnN0cnVjdG9yIGp1c3QgZ3JhYiBhbGwgbm9kZSBhdHRyaWJ1dGVzIGFuZCBnZW5lcmF0ZXMgb3B0aW9ucy4gQWxsIHByb2Nlc3NlZCBvcHRpb25zIHN0b3JlZCBhdCB0aGlzLm9wdGlvbnNcclxuICogQGV4YW1wbGVcclxuICogV2UgaGF2ZSBodG1sIGxpa2UgdGhpczpcclxuICogPGRpdiBkYXRhLXRlc3Q9XCJ0ZXN0VmFsdWVcIiBkYXRhLXZhbHVlPVwidmFsdWUxMjNcIj4uLi4uLjwvZGl2PlxyXG4gKiB0aGlzLm9wdGlvbnMgd2lsbCBiZTpcclxuICoge1xyXG4gKiAgdGVzdDpcInRlc3RWYWx1ZVwiLFxyXG4gKiAgdmFsdWU6XCJ2YWx1ZVwiXHJcbiAqIH1cclxuICogTm90ZTogZGF0YS10ZXN0IGFuZCBkYXRhLXZhbHVlIHNob3VsZCBiZSBkZXNjcmliZWQgaW4gYXR0cmlidXRlc1RvR3JhYlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlRE9NQ29uc3RydWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBUaGlzIGlzIGEgb3B0aW9ucyB0byBnZW5lcmF0ZS5cclxuICAgICAgICAgICAqIFlvdSBzaG91bGQgcHJvdmlkZSBwcm9jZXNzb3Igb3IgdmFsdWUuXHJcbiAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtPYmplY3R9IHByb3BlcnR5S2V5IC0gb2JqZWN0IG9mIHByb3BlcnR5XHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gcHJvcGVydHlLZXkudmFsdWUgLSBkZWZhdWx0IHZhbHVlIHRvIHJldHVyblxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IFtwcm9wZXJ0eUtleS5kb21BdHRyXSAtIGRvbSBhdHRyaWJ1dGUgdG8gZ3JhYiBkYXRhXHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbcHJvcGVydHlLZXkucHJvY2Vzc29yXSAtICBwcm9jZXNzb3IgdG8gcHJvY2VzcyBkYXRhIGJlZm9yZSByZXR1cm5cclxuICAgICAgICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSAgLi4uIC0gQW5vdGhlciBvYmplY3Qgb2Ygb25lIHByb3BlcnR5XHJcbiAgICAgICAgICAgKiBAdHlwZSB7e319XHJcbiAgICAgICAgICAgKiAgQGV4YW1wbGVcclxuICAgICAgICAgICAqIFwic29tZUF0dHJpYnV0ZVwiOiB7Ly8ga2V5XHJcbiAgICAgICAgICAgKiAgICAgIHZhbHVlOiB0cnVlLCAvL2RlZmF1bHQgVmFsdWVcclxuICAgICAgICAgICAqICAgICAgZG9tQXR0cjogXCJkYXRhLXNvbWUtYXR0cmlidXRlXCIsIC8vIGF0dHJpYnV0ZSBmcm9tIG5vZGUgdG8gZ3JhYlxyXG4gICAgICAgICAgICogICAgICBwcm9jZXNzb3I6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7IC8vcHJvY2Vzc29yIHRvIHByb2Nlc3MgdmFsdWVzIGJlZm9yZSByZXR1cm5cclxuICAgICAgICAgICAqICAgICAgICAgIC8vc29tZSBjYWxjdWxhdGlvbnNcclxuICAgICAgICAgICAqICAgICAgcmV0dXJuIHNvbWVWYWx1ZTtcclxuICAgICAgICAgICAqICAgICAgfVxyXG4gICAgICAgICAgICogIH0sXHJcbiAgICAgICAgICAgKiAgXCJhbm90aGVyQXR0cmlidXRlXCI6ey4uLn0sXHJcbiAgICAgICAgICAgKiAgXCIuLi5cIlxyXG4gICAgICAgICAgICpcclxuICAgICAgICAgICAqICBAZXhhbXBsZVxyXG4gICAgICAgICAgICogIC8vcmV0dXJuIG5vZGUgYXMgdmFsdWVcclxuICAgICAgICAgICAqICBcImNvbnRleHRcIjoge1xyXG4gICAgICAgICAgICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsa2V5KSB7IC8vcHJvY2Vzc29yXHJcbiAgICAgICAgICAgKiAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAqICAgICAgfVxyXG4gICAgICAgICAgICogIH0sXHJcbiAgICAgICAgICAgKiAgXCJBbm90aGVyLWtleVwiOnsuLi59LFxyXG4gICAgICAgICAgICogIFwiLi4uXCJcclxuICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgKiAvL0dyYWIgYXR0cmlidXRlIFwiZGF0YS1hdHRyaWJ1dGVcIiBhcyBcIk15QXR0cmlidXRlXCIgaWYgYXR0cmlidXRlIG5vdCBwcm92aWRlZCByZXR1cm4gXCJEZWZhdWx0VmFsdWVcIlxyXG4gICAgICAgICAgICogLy8gRG9tIG5vZGUgPGRpdiBkYXRhLWF0dHJpYnV0ZT1cInNvbWVWYWx1ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICogXCJNeUF0dHJpYnV0ZVwiOiB7XHJcbiAgICAgICAgICAgKiAgICAgIHZhbHVlOiBcIkRlZmF1bHRWYWx1ZVwiLFxyXG4gICAgICAgICAgICogICAgICBkb21BdHRyOiBcImRhdGEtYXR0cmlidXRlXCJcclxuICAgICAgICAgICAqICB9XHJcbiAgICAgICAgICAgKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXHJcbiAgICAgICAgICAgKiAge1wiTXlBdHRyaWJ1dGVcIjpcInNvbWVWYWx1ZVwifVxyXG4gICAgICAgICAgICpcclxuICAgICAgICAgICAqICBAZXhhbXBsZVxyXG4gICAgICAgICAgICogLy9HcmFiIGF0dHJpYnV0ZSBcImRhdGEtYXR0cmlidXRlXCIgYXMgXCJNeUF0dHJpYnV0ZVwiIGFuZCByZXR1cm4gc29tZSB2YWx1ZSBpbnN0ZWFkXHJcbiAgICAgICAgICAgKiAvL0RvbSBub2RlICA8ZGl2IGRhdGEtYXR0cmlidXRlPVwic29tZVZhbHVlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgKiBcIk15QXR0cmlidXRlXCI6IHtcclxuICAgICAgICAgICAqICAgICAgZG9tQXR0cjogXCJkYXRhLWF0dHJpYnV0ZVwiLFxyXG4gICAgICAgICAgICogICAgICBwcm9jZXNzb3I6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XHJcbiAgICAgICAgICAgKiAgICAgICAgICByZXR1cm4gdmFsK1wiU29tZUNhbGN1bGF0aW9uXCI7XHJcbiAgICAgICAgICAgKiAgICAgIH1cclxuICAgICAgICAgICAqICB9XHJcbiAgICAgICAgICAgKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXHJcbiAgICAgICAgICAgKiAge1wiTXlBdHRyaWJ1dGVcIjpcInNvbWVWYWx1ZVNvbWVDYWxjdWxhdGlvblwifVxyXG4gICAgICAgICAgICpcclxuICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgKiAvL3JldHVybiBmdW5jdGlvbiBhcyB2YWx1ZVxyXG4gICAgICAgICAgICogcHJvY2Vzc0Fuc3dlcjoge1xyXG4gICAgICAgICAgICogICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgKiAgICAgICAgIHJldHVybiBcInNvbWVWYWxcIjtcclxuICAgICAgICAgICAqICAgICAgfVxyXG4gICAgICAgICAgICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxyXG4gICAgICAgICAgICogIHtcInByb2Nlc3NBbnN3ZXJcIjpmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XHJcbiAgICAgICAgICAgKiAgICAgIH1cclxuICAgICAgICAgICAqICAgfVxyXG4gICAgICAgICAgICpcclxuICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgKiAvL3JldHVybiBpbml0IHRpbWUgYXMgdmFsdWVcclxuICAgICAgICAgICAqIGluaXRUaW1lOiB7XHJcbiAgICAgICAgICAgKiAgICAgIFwicHJvY2Vzc29yXCI6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XHJcbiAgICAgICAgICAgKiAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWU7XHJcbiAgICAgICAgICAgKiAgICAgIH1cclxuICAgICAgICAgICAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcclxuICAgICAgICAgICAqICB7XCJpbml0VGltZVwiOjE0Mjk4MDg5Nzc0MDR9XHJcbiAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICogLy9yZXR1cm4gb3RoZXIgdmFsdWUgaW5zdGVhZCBvZiByZWFsIG9uZVxyXG4gICAgICAgICAgICogcHJvY2Vzc0Fuc3dlcjoge1xyXG4gICAgICAgICAgICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikge1xyXG4gICAgICAgICAgICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XHJcbiAgICAgICAgICAgKiAgICAgIH1cclxuICAgICAgICAgICAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcclxuICAgICAgICAgICAqICB7XCJwcm9jZXNzQW5zd2VyXCI6XCJzb21lVmFsXCJ9XHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9wdGlvbnNUb0dyYWIgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgKiBJbml0IG1ldGhvZC4gQ2FsbCBhZnRlciBjb25zdHJ1Y3QgaW5zdGFuY2VcclxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IHNmXHJcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cclxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XHJcbiAgICAgICAqL1xyXG4gICAgaW5pdChzZiwgbm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2YgPSBzZjtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5ncmFiT3B0aW9ucyhub2RlKSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICogR3JhYiBhbGwgb3B0aW9ucyB0aGF0IGRlc2NyaWJlZCBpbiBvcHRpb25zVG9HcmFiXHJcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIGRvbU5vZGVcclxuICAgICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICAgKi9cclxuICAgIGdyYWJPcHRpb25zKG5vZGUpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge307XHJcbiAgICAgICAgbGV0IGN1cnJlbnRPcHRpb25WYWx1ZTtcclxuICAgICAgICBsZXQgY3VycmVudE9wdGlvbjtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cclxuICAgICAgICBjb25zdCBvcHRpb25zVG9HcmFiID0gdGhpcy5vcHRpb25zVG9HcmFiIHx8IHRoaXMuX19wcm90b19fLm9wdGlvbnNUb0dyYWIgfHwge307IC8vIFRPRE86IGdldCByaWQgb2YgX19wcm90b19fLCByZXBsYWNlIHdpdGggc3RhdGljKD8pXHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBvcHRpb24gaW4gdGhpcy5vcHRpb25zVG9HcmFiKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9uc1RvR3JhYikuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb24gPSBvcHRpb25zVG9HcmFiW29wdGlvbl07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9uLnZhbHVlKSB7IC8vIHdlIGhhdmUgZGVmYXVsdCBvcHRpb24uIExldCdzIGdyYWIgaXQgZm9yIGZpcnN0XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBjdXJyZW50T3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV0gJiYgdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdW29wdGlvbl0pIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IHRoaXMuc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXVtvcHRpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50T3B0aW9uLmRvbUF0dHIgJiYgbm9kZS5oYXNBdHRyaWJ1dGUoY3VycmVudE9wdGlvbi5kb21BdHRyKSkgeyAvLyB3ZSBjYW4gZ3JhYiB0aGUgYXR0cmlidXRlIG9mIG5vZGVcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25WYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGN1cnJlbnRPcHRpb24uZG9tQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb24ucHJvY2Vzc29yKSB7IC8vIHdlIGhhdmUgcHJvY2Vzc29yLiBMZXQncyBleGVjdXRlIGl0XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBjdXJyZW50T3B0aW9uLnByb2Nlc3Nvci5jYWxsKHRoaXMsIG5vZGUsIGN1cnJlbnRPcHRpb25WYWx1ZSwgY3VycmVudE9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gY3VycmVudE9wdGlvblZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmFzZURPTUNvbnN0cnVjdG9yO1xyXG4iLCJleHBvcnQgY2xhc3MgRG9tTXV0YXRpb25zIHtcclxuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlc0NvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIgPSBpbnN0YW5jZXNDb250cm9sbGVyO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Eb21NdXRhdGUobXV0YXRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIGNvbmZpZyk7IC8vIHN0YXJ0IG9ic2VydmVyXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gZG9tIG11dGF0ZWQgdGhpcyBmdW5jdGlvbiBpZCBleGVjdXRlZC5cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG11dGF0aW9ucyBhcnJheSBvZiBtdXRhdGlvbnNcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIG9uRG9tTXV0YXRlKG11dGF0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0Q2xhc3NlcygpOyAvLyBnZXQgYWxsIHJlZ2lzdGVyZWQgY2xhc3Nlc1xyXG4gICAgICAgIGNvbnN0IGNsYXNzU2VsZWN0b3IgPSBgLiR7Y2xhc3NBcnJheS5qb2luKCcsLicpfWA7IC8vIGNvbnZlcnQgZm9yIHF1ZXJ5U2VsZWN0b3JBbGwoKVxyXG4gICAgICAgIGlmIChjbGFzc1NlbGVjdG9yLmxlbmd0aCA9PT0gMSkgeyAvLyBpZiBub3QgcmVnaXN0ZXJlZCBhbnkgaW5zdGFuY2VUeXBlc1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uQXR0cmlidXRlcyhtdXRhdGlvbiwgY2xhc3NBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjaGFyYWN0ZXJEYXRhJzpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QobXV0YXRpb24uYWRkZWROb2RlcywgJ2FkZEluc3RhbmNlJywgY2xhc3NTZWxlY3RvciwgY2xhc3NBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QobXV0YXRpb24ucmVtb3ZlZE5vZGVzLCAncmVtb3ZlSW5zdGFuY2UnLCBjbGFzc1NlbGVjdG9yLCBjbGFzc0FycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdyb25nLiBDb250YWN0IHRlY2ggc3VwcG9ydCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzTXV0YXRpb25BdHRyaWJ1dGVzKG11dGF0aW9uLCBjbGFzc0FycmF5KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gdGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSAobXV0YXRpb24ub2xkVmFsdWUpID8gbXV0YXRpb24ub2xkVmFsdWUuc3BsaXQoJyAnKSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IGFkZGVkQ2xhc3NlcyA9IGN1cnJlbnRDbGFzc2VzLmZpbHRlcigodmFsKSA9PiAob2xkQ2xhc3Nlcy5pbmRleE9mKHZhbCkgPT09IC0xKSk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZENsYXNzZXMgPSBvbGRDbGFzc2VzLmZpbHRlcigodmFsKSA9PiAoY3VycmVudENsYXNzZXMuaW5kZXhPZih2YWwpID09PSAtMSkpO1xyXG4gICAgICAgIGNvbnN0IGFkZGVkUmVnaXN0ZXJlZENsYXNzZXMgPSBhZGRlZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjbGFzc0FycmF5LmluZGV4T2YodmFsKSAhPT0gLTEpKTtcclxuICAgICAgICBjb25zdCByZW1vdmVkUmVnaXN0ZXJlZENsYXNzZXMgPSByZW1vdmVkQ2xhc3Nlcy5maWx0ZXIoKHZhbCkgPT4gKGNsYXNzQXJyYXkuaW5kZXhPZih2YWwpICE9PSAtMSkpO1xyXG4gICAgICAgIHJlbW92ZWRSZWdpc3RlcmVkQ2xhc3Nlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNDb250cm9sbGVyLnJlbW92ZUluc3RhbmNlKHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzKHZhbCksIHRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRkZWRSZWdpc3RlcmVkQ2xhc3Nlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNDb250cm9sbGVyLmFkZEluc3RhbmNlKHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzKHZhbCksIHRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3MgbXV0YXRpb24gb24gQ2hpbGRMaXN0XHJcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc0xpc3QgYXJyYXkgd2l0aCBub2Rlc1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvbiBhY3Rpb24gdG8gY2FsbCAoYWRkIG9yIHJlbW92ZSBub2RlcylcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc1NlbGVjdG9yIC0gc3RyaW5nIHNlbGVjdG9yIGZvciBxdWVyeVNlbGVjdG9yQWxsXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjbGFzc0FycmF5IC0gYXJyYXkgb2YgYWxsIHJlZ2lzdGVyZWQgY2xhc3Nlc1xyXG4gICAgICovXHJcbiAgICBwcm9jZXNzTXV0YXRpb25DaGlsZExpc3Qobm9kZXNMaXN0LCBhY3Rpb24sIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbnRlcm5hbCBmdW5jdGlvbiBmb3IgY2hlY2tpbmcgbm9kZSBjbGFzc1xyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlIGRvbSBub2RlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgY2hlY2tOb2RlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgY2xhc3NBcnJheS5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7IC8vIGlmIGNsYXNzIG1hdGNoIHRyeSB0byBhZGQgb3IgcmVtb3ZlIGluc3RhbmNlIGZvciB0aGlzIG5vZGVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXJbYWN0aW9uXSh0aGlzLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyhjbGFzc05hbWUpLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobm9kZXNMaXN0LCAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdCBwcm9jZXNzIG90aGVyIG5vZGVzIHRoZW4gRUxFTUVOVF9OT0RFIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlLm5vZGVUeXBlIGFsc28gaWdub3JlIFNDUklQVCBhbmQgTElOSyB0YWdcclxuICAgICAgICAgICAgaWYgKHZhbC5ub2RlVHlwZSAhPT0gMSB8fCB2YWwubm9kZU5hbWUgPT09ICdTQ1JJUFQnIHx8IHZhbC5ub2RlTmFtZSA9PT0gJ0xJTksnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hlY2tOb2RlKHZhbCk7IC8vIGNoZWNrIG11dGF0aW9uIG5vZGVcclxuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKHZhbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzU2VsZWN0b3IpLCBjaGVja05vZGUpOyAvLyBxdWVyeSBhbGwgbm9kZXMgd2l0aCByZXF1aXJlZCBjbGFzc2VzIGFuZCBjaGVjayBpdFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgdGhlIGRvbSBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIHN0b3BPYnNlcnZlKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERvbU11dGF0aW9ucztcclxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhbGxvd2VkRXZlbnRzKSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd2VkRXZlbnRzID0gYWxsb3dlZEV2ZW50cztcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7fTtcclxuICAgIH1cclxuICAgIG9uKGV2ZW50cywgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBldmVudEFyciA9IGV2ZW50cy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykuc3BsaXQoJyAnKTtcclxuICAgICAgICBldmVudEFyci5mb3JFYWNoKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93ZWRFdmVudHMgJiYgdGhpcy5hbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHMuIFRyeSB0byByZWdpc3RlciBldmVudCAlcywgYnV0IGV2ZW50IGlzIG5vdCBhbGxvd2VkJywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9yYWdlW2V2ZW50c10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtldmVudF0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgICAqL1xyXG4gICAgcmVnaXN0ZXJBY3Rpb24oZXZlbnRzLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50cywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgb2ZmKGV2ZW50cywgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBldmVudEFyciA9IGV2ZW50cy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykuc3BsaXQoJyAnKTtcclxuICAgICAgICBldmVudEFyci5mb3JFYWNoKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93ZWRFdmVudHMgJiYgdGhpcy5hbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdFdmVudHMuIFRyeSB0byBkZXJlZ2lzdGVyIGV2ZW50ICVzLCBidXQgZXZlbnQgaXMgbm90IGFsbG93ZWQnLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtldmVudF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtldmVudF0gPSB0aGlzLnN0b3JhZ2VbZXZlbnRdLmZpbHRlcigoY2IpID0+IGNiICE9PSBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHRyaWdnZXIoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dlZEV2ZW50cyAmJiB0aGlzLmFsbG93ZWRFdmVudHMuaW5kZXhPZihldmVudCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzLiBUcnkgdG8gdHJpZ2dlciBldmVudCAlcywgYnV0IGV2ZW50IGlzIG5vdCBhbGxvd2VkJywgZXZlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2VbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtldmVudF0uZm9yRWFjaCgoY2IpID0+IGNiKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAgICovXHJcbiAgICBwZXJmb3JtQWN0aW9uKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcihldmVudCwgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi9FdmVudHMnO1xyXG5leHBvcnQgY2xhc3MgSW5zdGFuY2VzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzcGlyYWwpIHtcclxuICAgICAgICB0aGlzLnNwaXJhbCA9IHNwaXJhbDtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlc0NvbnN0cnVjdG9yczoge1xyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3Nlczoge30sXHJcbiAgICAgICAgICAgICAgICBqc0NvbnN0cnVjdG9yczoge30sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkZG9uczoge30sXHJcbiAgICAgICAgICAgIGluc3RhbmNlczoge30sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHMoWydvblJlbW92ZUluc3RhbmNlJywgJ29uQWRkSW5zdGFuY2UnXSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICogUmVnaXN0ZXIgbmV3IGluc3RhbmNlIHR5cGVcclxuICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3JGdW5jdGlvbiAtIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIG9mIGluc3RhbmNlXHJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbY3NzQ2xhc3NOYW1lXSAtIGNzcyBjbGFzcyBuYW1lIG9mIGluc3RhbmNlLiBJZiBjbGFzcyBub3QgcHJvdmlkZWQgdGhhdCBpdCBjYW4ndCBiZSBhdXRvbWF0aWNhbGx5XHJcbiAgICAgICAqIGNvbnRyb2xsZWQgYnkgRG9tTXV0YXRpb24uIEJ1dCB5b3Ugc3RpbGwgY2FuIHVzZSBpdCBmcm9tIEpTLlxyXG4gICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpc1NraXBJbml0aWFsaXphdGlvbj1mYWxzZV0gIC0gc2tpcCBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24sIGp1c3QgYWRkaW5nLCBubyBpbml0IG5vZGVzLlxyXG4gICAgICAgKi9cclxuICAgIHJlZ2lzdGVySW5zdGFuY2VUeXBlKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGNzc0NsYXNzTmFtZSwgaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZU5hbWUgPSBjb25zdHJ1Y3RvckZ1bmN0aW9uLnNwaXJhbEZyYW1ld29ya05hbWUgfHwgY29uc3RydWN0b3JGdW5jdGlvbi5wcm90b3R5cGUubmFtZTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnN0YW5jZSBjb25zdHJ1Y3RvciBzaG91bGQgaGF2ZSBuYW1lIGluc2lkZSBpdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5qc0NvbnN0cnVjdG9yc1tpbnN0YW5jZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luc3RhbmNlIENvbnN0cnVjdG9yIGZvciB0eXBlIFxcJyVzXFwnIGFscmVhZHkgYWRkZWQuIFNraXBwaW5nJywgaW5zdGFuY2VOYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3NzQ2xhc3NOYW1lKSB7IC8vIGFkZCBsaW5rIChjc3NDbGFzc05hbWUtPmluc3RhbmNlTmFtZSlcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5jc3NDbGFzc2VzW2Nzc0NsYXNzTmFtZV0gPSBpbnN0YW5jZU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXSA9IGNvbnN0cnVjdG9yRnVuY3Rpb247XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KGNsYXNzTmFtZSkpe1xyXG4gICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJJbnN0YW5jZSBDb25zdHJ1Y3RvciBmb3IgdHlwZSAlcyBhbHJlYWR5IGFkZGVkLiBTa2lwcGluZ1wiLGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUpO1xyXG4gICAgICAgIC8vICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnNbY2xhc3NOYW1lXSA9IHsvL2luaXQgc3RvcmFnZSBmaWVsZHNcclxuICAgICAgICAvLyAgICBcInR5cGVOYW1lXCI6IGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUsXHJcbiAgICAgICAgLy8gICAgXCJjb25zdHJ1Y3RvclwiOiBjb25zdHJ1Y3RvckZ1bmN0aW9uXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0gPSBbXTtcclxuICAgICAgICBpZiAoIWlzU2tpcEluaXRpYWxpemF0aW9uICYmIGNzc0NsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY3NzQ2xhc3NOYW1lKTsgLy8gaW5pdCBhZGQgbm9kZXMgd2l0aCB0aGlzIGNsYXNzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgKiBPbGQgbWV0aG9kIHRvIHJlZ2lzdGVyIGluc3RhbmNlIHR5cGVcclxuICAgICAgICogQHBhcmFtIHsqfSBjbGFzc05hbWVcclxuICAgICAgICogQHBhcmFtIHsqfSBjb25zdHJ1Y3RvckZ1bmN0aW9uXHJcbiAgICAgICAqIEBwYXJhbSB7Kn0gaXNTa2lwSW5pdGlhbGl6YXRpb25cclxuICAgICAgICogQHJldHVybiB7Kn1cclxuICAgICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAgICovXHJcbiAgICBhZGRJbnN0YW5jZVR5cGUoY2xhc3NOYW1lLCBjb25zdHJ1Y3RvckZ1bmN0aW9uLCBpc1NraXBJbml0aWFsaXphdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignYWRkSW5zdGFuY2VUeXBlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgcmVnaXN0ZXJJbnN0YW5jZVR5cGUgaW5zdGVhZCcpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySW5zdGFuY2VUeXBlKGNvbnN0cnVjdG9yRnVuY3Rpb24sIGNsYXNzTmFtZSwgaXNTa2lwSW5pdGlhbGl6YXRpb24pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAqIEFkZCBpbnN0YW5jZVxyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxyXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSAtIGRvbSBub2RlXHJcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgZm9yIHNlbmQgdG8gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgICAqL1xyXG4gICAgYWRkSW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlLCBvcHRpb25zID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgSW5zdGFuY2VDb25zdHJ1Y3RvciA9IHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXTtcclxuICAgICAgICBjb25zdCBpc0FscmVhZHlBZGRlZCA9ICEhdGhpcy5nZXRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGUpO1xyXG4gICAgICAgIGlmICghSW5zdGFuY2VDb25zdHJ1Y3RvciB8fCBpc0FscmVhZHlBZGRlZCkgeyAvLyBpZiBub3QgZm91bmQgdGhpcyB0eXBlICBvciBhbHJlYWR5IGFkZGVkIC0gcmV0dXJuXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEluc3RhbmNlQ29uc3RydWN0b3IodGhpcy5zcGlyYWwsIG5vZGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXS5wdXNoKHtcclxuICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgaW5zdGFuY2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMudHJpZ2dlcignb25BZGRJbnN0YW5jZScsIHsgaW5zdGFuY2UsIHR5cGU6IGluc3RhbmNlTmFtZSB9KTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAgICogUmVtb3ZlIGluc3RhbmNlLlxyXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZSBjbGFzc1xyXG4gICAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5vZGUgLSBkb20gbm9kZSBJRFxyXG4gICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICAgKi9cclxuICAgIHJlbW92ZUluc3RhbmNlKGluc3RhbmNlTmFtZSwgbm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlT2JqID0gdGhpcy5nZXRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGUpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2VPYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zdGFuY2VPYmouaW5zdGFuY2UuZGllKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlT2JqLmluc3RhbmNlLmRpZSgpOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0uaW5kZXhPZihpbnN0YW5jZU9iaik7XHJcbiAgICAgICAgaWYgKGtleSAhPT0gLTEpIHsgLy8gcmVtb3ZlIGtleVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0uc3BsaWNlKGtleSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ29uUmVtb3ZlSW5zdGFuY2UnLCB7IGluc3RhbmNlOiBpbnN0YW5jZU9iaiwgdHlwZTogaW5zdGFuY2VOYW1lIH0pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5zdGFuY2UuIFJldHVybiBpbnN0YW5jZSBvYmplY3Qgb2YgdGhpcyBkb20gbm9kZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSAtIG5hbWUgb2YgaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbm9kZSAtIGRvbSBub2RlIG8gZG9tZSBub2RlIElEXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBnZXRJbnN0YW5jZShpbnN0YW5jZU5hbWUsIG5vZGUpIHtcclxuICAgICAgICBjb25zdCB0eXBlQXJyID0gdGhpcy5zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdO1xyXG4gICAgICAgIGxldCByZXQ7XHJcbiAgICAgICAgaWYgKCF0eXBlQXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVsID0gKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgPyBub2RlIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobm9kZS50b1N0cmluZygpKTtcclxuICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGtleSA9IDAsIGwgPSB0eXBlQXJyLmxlbmd0aDsga2V5IDwgbDsga2V5ICs9IDEpIHsgLy8gaXRlcmF0ZSBzdG9yYWdlIGFuZCB0cnkgdG8gZmluZCBpbnN0YW5jZVxyXG4gICAgICAgICAgICBpZiAodHlwZUFycltrZXldLm5vZGUgPT09IGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSB0eXBlQXJyW2tleV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5zdGFuY2VzLiBSZXR1cm4gYXJyYXkgb2YgaW5zdGFuY2VzIG9iamVjdHNcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgLSBuYW1lIG9mIGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHthcnJheXxib29sZWFufVxyXG4gICAgICovXHJcbiAgICBnZXRJbnN0YW5jZXMoaW5zdGFuY2VOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXSB8fCBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYWRkb24gZm9yIGluc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWRkb25cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpbnN0YW5jZU5hbWUgbmFtZSBvZiBpbnN0YW5jZSB0byByZWdpc3RlciBhZGRvblxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uVHlwZSB0eXBlIG9mIGFkZG9uIChtZXNzYWdlLGZpbGwsZXRjKVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFkZG9uTmFtZSBuYW1lIG9mIGFkZG9uIChzcGlyYWwsIGJvb3RzdHJhcCxldGMpXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyQWRkb24oYWRkb24sIGluc3RhbmNlTmFtZSwgYWRkb25UeXBlLCBhZGRvbk5hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV1bYWRkb25OYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgJXMgYWRkb24gdHlwZSAlcyBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIGluc3RhbmNlICVzISBTa2lwcGluZyByZWdpc3RyYXRpb24uJywgYWRkb25OYW1lLCBhZGRvblR5cGUsIGluc3RhbmNlTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV1bYWRkb25OYW1lXSA9IGFkZG9uO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgcmVnaXN0ZXJlZCBhZGRvblxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSBuYW1lIG9mIGluc3RhbmNlIHRvIHJlZ2lzdGVyIGFkZG9uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYWRkb25UeXBlIHR5cGUgb2YgYWRkb24gKG1lc3NhZ2UsZmlsbCxldGMpXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYWRkb25OYW1lIG5hbWUgb2YgYWRkb24gKHNwaXJhbCwgYm9vdHN0cmFwLGV0YylcclxuICAgICAqIEByZXR1cm4geyp9XHJcbiAgICAgKi9cclxuICAgIGdldEluc3RhbmNlQWRkb24oaW5zdGFuY2VOYW1lLCBhZGRvblR5cGUsIGFkZG9uTmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLnN0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXVxyXG4gICAgICAgICAgICB8fCAhdGhpcy5zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV1bYWRkb25OYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXVthZGRvbk5hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIHJlZ2lzdGVyZWQgY2xhc3Nlc1xyXG4gICAgICogQHJldHVybiB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGdldENsYXNzZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZvciBnaXZlbiBjc3NDbGFzcyByZXR1cm4gbmFtZSBvZiBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzXHJcbiAgICAgKiBAcmV0dXJuIHsqfVxyXG4gICAgICovXHJcbiAgICBnZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzKGNzc0NsYXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlc1tjc3NDbGFzc107XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5zdGFuY2VzQ29udHJvbGxlcjtcclxuIiwiZXhwb3J0IGNvbnN0IGF0dGFjaERlZmF1bHRBY3Rpb25zID0gKGFqYXhJbnN0YW5jZSwgZ2xvYmFsRXZlbnRzKSA9PiB7XHJcbiAgICBhamF4SW5zdGFuY2UuZXZlbnRzLm9uKCdsb2FkJywgKG9wdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBvcHRpb25zO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmICghZGF0YS5hY3Rpb24pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEuYWN0aW9uID09PSAnc3RyaW5nJykgeyAvLyBcImFjdGlvblwiOlwicmVsb2FkXCJcclxuICAgICAgICAgICAgZ2xvYmFsRXZlbnRzLnRyaWdnZXIoZGF0YS5hY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YS5hY3Rpb24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhLmFjdGlvbik7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IG5vdGlmaWNhdGlvbnNcclxuICAgICAgICAgICAgLy8gaWYgKGtleXMuaW5kZXhPZignZmxhc2gnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gICBjb25zdCB7IGZsYXNoIH0gPSBkYXRhLmFjdGlvbjtcclxuICAgICAgICAgICAgLy8gICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAvLyAgIGxldCBzZkZsYXNoTWVzc2FnZSA9IHt9O1xyXG4gICAgICAgICAgICAvLyAgIGlmICh0eXBlb2YgZGF0YS5hY3Rpb24uZmxhc2ggPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBzZkZsYXNoTWVzc2FnZSA9IGZsYXNoO1xyXG4gICAgICAgICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UudGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG4gICAgICAgICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICBzZkZsYXNoTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgLy8gICAgICAgbWVzc2FnZTogZmxhc2gsXHJcbiAgICAgICAgICAgIC8vICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAvLyAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3NmRmxhc2hNZXNzYWdlJywgSlNPTi5zdHJpbmdpZnkoc2ZGbGFzaE1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZiAoa2V5cy5pbmRleE9mKCdyZWRpcmVjdCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRXZlbnRzLnRyaWdnZXIoJ3JlZGlyZWN0JywgeyB1cmw6IGRhdGEuYWN0aW9uLnJlZGlyZWN0LCBvcHRpb25zIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgK2RhdGEuYWN0aW9uLmRlbGF5IHx8IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGtleXMuaW5kZXhPZignbmFtZScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRXZlbnRzLnRyaWdnZXIoZGF0YS5hY3Rpb24ubmFtZSwgZGF0YS5hY3Rpb24udXJsKTtcclxuICAgICAgICAgICAgICAgIH0sICtkYXRhLmFjdGlvbi5kZWxheSB8fCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQWN0aW9uIGZyb20gc2VydmVyLiBTb21ldGhpbmcgd3JvbmcuICcsIGRhdGEuYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHJlZ2lzdGVyQmFzZUV2ZW50cyA9IChldmVudHMpID0+IHtcclxuICAgIGV2ZW50cy5vbigncmVkaXJlY3QnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXZlbnQpID09PSAnW29iamVjdCBTdHJpbmddJyA/IGV2ZW50IDogZXZlbnQudXJsO1xyXG4gICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA2ODcwOTkvaG93LXRvLXRlc3QtaWYtYS11cmwtc3RyaW5nLWlzLWFic29sdXRlLW9yLXJlbGF0aXZlXHJcbiAgICAgICAgY29uc3QgaXNBYnNvbHV0ZSA9IC9eKD86W2Etel0rOik/XFwvXFwvL2kudGVzdCh1cmwpO1xyXG4gICAgICAgIGlmIChpc0Fic29sdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcclxuICAgICAgICAgICAgc2VsZi5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICAgICAgICAgICAgfHwgKGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfSR7d2luZG93LmxvY2F0aW9uLnBvcnQgPyBgOiR7d2luZG93LmxvY2F0aW9uLnBvcnR9YCA6ICcnfWApO1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXHJcbiAgICAgICAgICAgIHNlbGYubG9jYXRpb24uaHJlZiA9IG9yaWdpbiArICgodXJsLmNoYXJBdCgwKSA9PT0gJy8nKSA/IHVybCA6IChgLyR7dXJsfWApKTsgLy8gUmVsYXRpdmUgcGF0aFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZXZlbnRzLm9uKCdyZWxvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcbiAgICBldmVudHMub24oJ3JlZnJlc2gnLCAoKSA9PiB7XHJcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ3JlbG9hZCcpO1xyXG4gICAgfSk7XHJcbiAgICBldmVudHMub24oJ2Nsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcclxuICAgICAgICBzZWxmLmNsb3NlKCk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiLyoqXHJcbiAqIEhlbHBlciB0byBtYW5pcHVsYXRlIERPTSBFdmVudHMuIEl0J3MgYSBzaW1wbGUgd3JhcHBlciBhcm91bmQgXCJhZGRFdmVudExpc3RlbmVyXCIgYnV0IGl0J3Mgc3RvcmUgYWxsIGZ1bmN0aW9ucyBhbmQgYWxsb3cgdXMgdG8gcmVtb3ZlIGl0IGFsbC5cclxuICogSXQncyB2ZXJ5IGhlbHBmdWwgZm9yIGRpZSgpIG1ldGhvZCBvZiBpbnN0YW5jZXNcclxuICogQFRPRE8gdGhpcyBjbGFzcyBpcyB1c2VkIGluIG9uZSBwbGFjZSwgY29uc2lkZXIgZHJvcHBpbmcgaXRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRE9NRXZlbnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgICogSW50ZXJuYWwgc3RvcmFnZSBmb3IgZXZlbnRzXHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5LjxPYmplY3Q+fSBET01FdmVudHMgLSBkb20gZXZlbnRzIGFycmF5XHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge09iamVjdH0gRE9NRXZlbnRzLkRPTU5vZGUgLSAgIERPTSBub2RlXHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gRE9NRXZlbnRzLmV2ZW50VHlwZSAtICAgRXZlbnQgdHlwZVxyXG4gICAgICAgICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gRE9NRXZlbnRzLmV2ZW50RnVuY3Rpb24gLSAgIEZ1bmN0aW9uXHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IERPTUV2ZW50cy51c2VDYXB0dXJlPWZhbHNlIC0gICB1c2VDYXB0dXJlXHJcbiAgICAgICAgICAgKiBAcHJvcGVydHkge09iamVjdH0gLi4uIC0gICBhbm90aGVyIG9iamVjdFxyXG4gICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuRE9NRXZlbnRzU3RvcmFnZSA9IFtdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAqIEFkZCBldmVudChzKSB0byBub2RlKHMpLlxyXG4gICAgICAgKiBAcGFyYW0ge0FycmF5LjxPYmplY3Q+fE9iamVjdH0gZXZlbnRzIC0gZXZlbnQgYXJyYXkgb3IgZXZlbnQgaXRzZWxmXHJcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudHMuRE9NTm9kZSAtICAgRE9NIG5vZGVcclxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50cy5ldmVudFR5cGUgLSAgIEV2ZW50IHR5cGVcclxuICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXZlbnRzLmV2ZW50RnVuY3Rpb24gLSAgIEZ1bmN0aW9uXHJcbiAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2V2ZW50cy51c2VDYXB0dXJlPWZhbHNlXSAtICAgdXNlQ2FwdHVyZVxyXG4gICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgKiB2YXIgRE9NRXZlbnRzSW5zdGFuY2UgPSBuZXcgRE9NRXZlbnRzKCk7XHJcbiAgICAgICAqIHZhciBldmVudE9uZSA9IHtcclxuICAgICAgICogICAgICBET01Ob2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIiksXHJcbiAgICAgICAqICAgICAgZXZlbnRUeXBlOiBcImNsaWNrXCIsXHJcbiAgICAgICAqICAgICAgZXZlbnRGdW5jdGlvbjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coXCJIaSB0aGVyZS4gTmF0aXZlICBET00gZXZlbnRzIGlzOlwiLGUpO1xyXG4gICAgICAgKiAgICAgIH1cclxuICAgICAgICogfVxyXG4gICAgICAgKiAgdmFyIGV2ZW50VHdvID0ge1xyXG4gICAgICAgKiAgICAgIERPTU5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZTJcIiksXHJcbiAgICAgICAqICAgICAgZXZlbnRUeXBlOiBcIm1vdXNlZG93blwiLFxyXG4gICAgICAgKiAgICAgIGV2ZW50RnVuY3Rpb246IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGkgdGhlcmUuIG1vdXNlZG93biBldmVudC4gTmF0aXZlICBET00gZXZlbnRzIGlzOlwiLGUpO1xyXG4gICAgICAgKiAgICAgIH1cclxuICAgICAgICogfVxyXG4gICAgICAgKiAgRE9NRXZlbnRzSW5zdGFuY2UuYWRkKFtldmVudE9uZSxldmVudFR3b10pO1xyXG4gICAgICAgKi9cclxuICAgIGFkZChldmVudHMpIHtcclxuICAgICAgICBjb25zdCBldmVudEFycmF5ID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogW2V2ZW50c107XHJcbiAgICAgICAgZXZlbnRBcnJheS5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgdmFsLkRPTU5vZGUuYWRkRXZlbnRMaXN0ZW5lcih2YWwuZXZlbnRUeXBlLCB2YWwuZXZlbnRGdW5jdGlvbiwgISF2YWwudXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgICAgIHRoaXMuRE9NRXZlbnRzU3RvcmFnZS5wdXNoKHZhbCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbGwgZG9tIGV2ZW50cyByZWdpc3RlcmVkIHdpdGggdGhpcyBpbnN0YW5jZSAoYWRkZWQgYnkgbWV0aG9kIGFkZClcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvL2xvb2sgYXQgYWRkIG1ldGhvZCBhcyBmaXJzdCBwYXJ0IG9mIHRoaXMgY29kZVxyXG4gICAgICogRE9NRXZlbnRzSW5zdGFuY2UucmVtb3ZlQWxsKCk7XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUFsbCgpIHtcclxuICAgICAgICB0aGlzLkRPTUV2ZW50c1N0b3JhZ2UuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbC5ET01Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodmFsLmV2ZW50VHlwZSwgdmFsLmV2ZW50RnVuY3Rpb24sIHZhbC51c2VDYXB0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLkRPTUV2ZW50c1N0b3JhZ2UgPSBbXTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBET01FdmVudHM7XHJcbiIsImV4cG9ydCBjb25zdCBjbG9zZXN0ID0gKGVsLCBzZWxlY3RvcikgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0b3JzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gW3NlbGVjdG9yXSA6IHNlbGVjdG9yO1xyXG4gICAgbGV0IGtleTtcclxuICAgIGxldCBlbGVtID0gZWw7XHJcbiAgICBjb25zdCBsID0gc2VsZWN0b3JzLmxlbmd0aDtcclxuICAgIGNvbnN0IG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgd2hpbGUgKGVsZW0gJiYgZWxlbS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsOyBrZXkgKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlc1NlbGVjdG9yLmNhbGwoZWxlbSwgc2VsZWN0b3JzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB7IGNsb3Nlc3QgfTtcclxuIiwiLyoqXHJcbiAqIEBtb2R1bGUgdG9vbHNcclxuICogQG5hbWVzcGFjZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVLZXlQYXRoKHBhdGgsIG9iaiwgc2FmZSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyxuby1uZXN0ZWQtdGVybmFyeVxyXG4gICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+ICghc2FmZSA/IHByZXZbY3Vycl0gOiAocHJldiA/IHByZXZbY3Vycl0gOiB1bmRlZmluZWQpKSwgb2JqIHx8IHNlbGYpO1xyXG59XHJcbiIsImltcG9ydCB7IGF0dGFjaERlZmF1bHRBY3Rpb25zIH0gZnJvbSAnLi9jb3JlL2FqYXgvYmFzZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyByZWdpc3RlckJhc2VFdmVudHMgfSBmcm9tICcuL2NvcmUvZXZlbnRzL2Jhc2VFdmVudHMnO1xyXG5pbXBvcnQgeyBjb3JlLCB0b29scywgaGVscGVycyB9IGZyb20gJy4vc2YnO1xyXG5jb25zdCBvcHRpb25zID0geyBpbnN0YW5jZXM6IHt9IH07XHJcbmNvbnN0IHNmV3JhcHBlciA9IHtcclxuICAgIGNvcmUsXHJcbiAgICBoZWxwZXJzLFxyXG4gICAgdG9vbHMsXHJcbiAgICBvcHRpb25zLFxyXG59O1xyXG5zZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlciA9IG5ldyBjb3JlLkluc3RhbmNlc0NvbnRyb2xsZXIoc2ZXcmFwcGVyKTtcclxuc2ZXcmFwcGVyLmRvbU11dGF0aW9uID0gbmV3IGNvcmUuRG9tTXV0YXRpb25zKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcclxuLy8gRXZlbnRzIHN5c3RlbVxyXG5zZldyYXBwZXIuZXZlbnRzID0gbmV3IGNvcmUuRXZlbnRzKCk7XHJcbnJlZ2lzdGVyQmFzZUV2ZW50cyhzZldyYXBwZXIuZXZlbnRzKTtcclxuLy8gQUpBWFxyXG5zZldyYXBwZXIuYWpheCA9IG5ldyBjb3JlLkFqYXgod2luZG93ICYmIHdpbmRvdy5jc3JmVG9rZW4gPyB7XHJcbiAgICAvLyBUT0RPIG1vdmUgdG8gc3BpcmFsIGJpbmRpbmdzXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ1gtQ1NSRi1Ub2tlbic6IHdpbmRvdy5jc3JmVG9rZW4sXHJcbiAgICB9LFxyXG59IDogdW5kZWZpbmVkKTtcclxuLy8gQUNUSU9OU1xyXG5hdHRhY2hEZWZhdWx0QWN0aW9ucyhzZldyYXBwZXIuYWpheCwgc2ZXcmFwcGVyLmV2ZW50cyk7XHJcbi8vIEFQSVxyXG5zZldyYXBwZXIuY3JlYXRlTW9kdWxlUHJvdG90eXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoY29yZS5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlKTtcclxufTtcclxuc2ZXcmFwcGVyLnJlZ2lzdGVySW5zdGFuY2VUeXBlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIucmVnaXN0ZXJJbnN0YW5jZVR5cGUuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XHJcbnNmV3JhcHBlci5hZGRJbnN0YW5jZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLmFkZEluc3RhbmNlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xyXG5zZldyYXBwZXIucmVtb3ZlSW5zdGFuY2UgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5yZW1vdmVJbnN0YW5jZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcclxuc2ZXcmFwcGVyLmdldEluc3RhbmNlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2UuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XHJcbnNmV3JhcHBlci5nZXRJbnN0YW5jZXMgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZXMuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XHJcbnNmV3JhcHBlci5jbG9zZXN0ID0gaGVscGVycy5kb21Ub29scy5jbG9zZXN0O1xyXG5zZldyYXBwZXIucmVzb2x2ZUtleVBhdGggPSB0b29scy5yZXNvbHZlS2V5UGF0aDtcclxuZXhwb3J0IGRlZmF1bHQgc2ZXcmFwcGVyO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcclxuIiwiaW1wb3J0IERPTUV2ZW50cyBmcm9tICcuL2hlbHBlcnMvRE9NRXZlbnRzJztcclxuaW1wb3J0IGRvbVRvb2xzIGZyb20gJy4vaGVscGVycy9kb21Ub29scyc7XHJcbmltcG9ydCBBamF4IGZyb20gJy4vY29yZS9BamF4JztcclxuaW1wb3J0IEJhc2VET01Db25zdHJ1Y3RvciBmcm9tICcuL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yJztcclxuaW1wb3J0IERvbU11dGF0aW9ucyBmcm9tICcuL2NvcmUvRG9tTXV0YXRpb25zJztcclxuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi9jb3JlL0V2ZW50cyc7XHJcbmltcG9ydCBJbnN0YW5jZXNDb250cm9sbGVyIGZyb20gJy4vY29yZS9JbnN0YW5jZXNDb250cm9sbGVyJztcclxuaW1wb3J0IHsgcmVzb2x2ZUtleVBhdGggfSBmcm9tICcuL2hlbHBlcnMvdG9vbHMnO1xyXG5leHBvcnQgY29uc3QgY29yZSA9IHtcclxuICAgIEFqYXgsXHJcbiAgICBCYXNlRE9NQ29uc3RydWN0b3IsXHJcbiAgICBEb21NdXRhdGlvbnMsXHJcbiAgICBFdmVudHMsXHJcbiAgICBJbnN0YW5jZXNDb250cm9sbGVyLFxyXG59O1xyXG5leHBvcnQgY29uc3QgaGVscGVycyA9IHtcclxuICAgIERPTUV2ZW50cyxcclxuICAgIGRvbVRvb2xzLFxyXG59O1xyXG5leHBvcnQgY29uc3QgdG9vbHMgPSB7IHJlc29sdmVLZXlQYXRoIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=

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
      "./src/actionpanel/ActionPanel.ts":
      /*!****************************************!*\
        !*** ./src/actionpanel/ActionPanel.ts ***!
        \****************************************/

      /*! exports provided: ActionPanel, default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ActionPanel", function () {
          return ActionPanel;
        });
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts");
        /* harmony import */


        var _extractOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../extractOptions */
        "./src/extractOptions.ts");

        class ActionPanel extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
          constructor(ssf, node, options) {
            super();
            this.name = ActionPanel.spiralFrameworkName;
            this.optionsToGrab = {
              id: {
                value: ActionPanel.defaultOptions.id,
                domAttr: 'id'
              },
              type: {
                value: ActionPanel.defaultOptions.selectionType,
                domAttr: 'data-selection-type'
              },
              className: {
                value: ActionPanel.defaultOptions.className,
                domAttr: 'data-class'
              }
            };
            this.options = Object.assign({}, ActionPanel.defaultOptions);
            this.state = {
              hasSelection: false,
              selectedCount: 0,
              selectedItems: [],
              selectedKeys: new Set(),
              selectionType: this.options.selectionType
            };
            this.init(ssf, node, options);
            this.options = Object.assign(Object.assign(Object.assign({}, ActionPanel.defaultOptions), this.options), Object(_extractOptions__WEBPACK_IMPORTED_MODULE_2__["extractOptions"])(node));
            this.render();
          }

          reconfigure(options) {
            this.options = Object.assign(Object.assign({}, this.options), options);
            this.state = {
              hasSelection: false,
              selectedCount: 0,
              selectedItems: [],
              selectedKeys: new Set(),
              selectionType: this.options.selectionType
            };
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

          setSelection(selectedKeys, selectedItems) {
            this.state = Object.assign(Object.assign({}, this.state), {
              selectedKeys,
              selectedItems,
              selectedCount: selectedKeys.size,
              hasSelection: !!selectedKeys.size
            });
            this.render();
          }

          renderAs(el, definition) {
            if (typeof definition === 'string') {
              // eslint-disable-next-line no-param-reassign
              el.innerHTML = definition;
            } else if (typeof definition === 'function') {
              const rendered = definition(this.state);

              if (typeof rendered === 'string') {
                // eslint-disable-next-line no-param-reassign
                el.innerHTML = rendered;
              } else {
                el.appendChild(rendered);
              }
            } else {
              el.appendChild(definition);
            }
          }

          renderAction(actionId, action, options) {
            const el = document.createElement('div');

            if (options.actionClassName) {
              if (typeof options.actionClassName === 'string') {
                el.className = options.actionClassName;
              } else if (typeof options.actionClassName === 'function') {
                el.className = options.actionClassName(actionId, this.state);
              } else {
                el.className = options.actionClassName[actionId] || '';
              }
            }

            if (action.className) {
              if (typeof action.className === 'string') {
                el.classList.add(...action.className.split(' '));
              } else {
                el.classList.add(...action.className(this.state).split(' '));
              }
            }

            el.addEventListener('click', e => action.onClick(this.state, this, e));
            this.renderAs(el, action.renderAs);
            return el;
          }

          render() {
            if (!this.el) {
              this.el = document.createElement('div');
              this.node.appendChild(this.el);
            } else {
              this.el.innerHTML = ''; // TODO: dont rerender
            }

            const el = this.el;

            if (this.options.className) {
              el.className = '';

              if (typeof this.options.className === 'string') {
                el.classList.add(...this.options.className.split(' '));
              } else {
                el.classList.add(...this.options.className(this.state).split(' '));
              }
            }

            if (this.options.noSelection && !this.state.hasSelection) {
              if (typeof this.options.noSelection === 'string') {
                el.innerHTML = this.options.noSelection;
              } else {
                el.appendChild(this.options.noSelection);
              }

              return;
            }

            if (this.options.selectionLabel) {
              this.renderAs(el, this.options.selectionLabel);
            }

            Object.keys(this.options.actions).forEach(actionId => {
              el.appendChild(this.renderAction(actionId, this.options.actions[actionId], this.options));
            });
          }

        }

        ActionPanel.spiralFrameworkName = 'datagrid-actions';
        ActionPanel.defaultOptions = {
          id: '',
          lockType: 'none',
          actionClassName: 'btn',
          selectionType: _constants__WEBPACK_IMPORTED_MODULE_1__["SelectionType"].SINGLE,
          className: 'row no-gutters align-items-center',
          actions: {}
        };
        /* harmony default export */

        __webpack_exports__["default"] = ActionPanel;
        /***/
      },

      /***/
      "./src/constants.ts":
      /*!**************************!*\
        !*** ./src/constants.ts ***!
        \**************************/

      /*! exports provided: SortDirection, SelectionType, RequestMethod, PAGINATOR_CLASS_NAME, ACTION_PANEL_CLASS_NAME, CURSOR_ID_FIELD, LAST_ID_FIELD, pageParams, sortParams, DEFAULT_LIMIT, defaultGridMessages, defaultPaginatorMessages, PaginatorType, DATAGRID_CHECK_SELECT_ATTR, DATAGRID_CHECK_SELECT_ALL_ATTR */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SortDirection", function () {
          return SortDirection;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SelectionType", function () {
          return SelectionType;
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


        __webpack_require__.d(__webpack_exports__, "ACTION_PANEL_CLASS_NAME", function () {
          return ACTION_PANEL_CLASS_NAME;
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


        __webpack_require__.d(__webpack_exports__, "defaultGridMessages", function () {
          return defaultGridMessages;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultPaginatorMessages", function () {
          return defaultPaginatorMessages;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PaginatorType", function () {
          return PaginatorType;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DATAGRID_CHECK_SELECT_ATTR", function () {
          return DATAGRID_CHECK_SELECT_ATTR;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DATAGRID_CHECK_SELECT_ALL_ATTR", function () {
          return DATAGRID_CHECK_SELECT_ALL_ATTR;
        });

        var SortDirection;

        (function (SortDirection) {
          SortDirection["ASC"] = "asc";
          SortDirection["DESC"] = "desc";
        })(SortDirection || (SortDirection = {}));

        var SelectionType;

        (function (SelectionType) {
          SelectionType["SINGLE"] = "single";
          SelectionType["MULTIPLE"] = "multiple";
        })(SelectionType || (SelectionType = {}));

        var RequestMethod;

        (function (RequestMethod) {
          RequestMethod["GET"] = "GET";
          RequestMethod["POST"] = "POST";
          RequestMethod["DELETE"] = "DELETE";
          RequestMethod["PUT"] = "PUT";
          RequestMethod["PATCH"] = "PATCH";
        })(RequestMethod || (RequestMethod = {}));

        const PAGINATOR_CLASS_NAME = 'sf-js-datagrid-paginator';
        const ACTION_PANEL_CLASS_NAME = 'sf-js-datagrid-actionpanel';
        const CURSOR_ID_FIELD = 'cid';
        const LAST_ID_FIELD = 'lid';
        const pageParams = ['page', 'limit', CURSOR_ID_FIELD, LAST_ID_FIELD];
        const sortParams = ['sortBy', 'sortDir'];
        const DEFAULT_LIMIT = 25;
        const defaultGridMessages = {
          noData: 'No Data',
          noResults: 'No data matches your search criteria',
          error: 'Unknown error'
        };
        const defaultPaginatorMessages = {
          currentPage: 'Showing {from} to {to} of {total} entries',
          currentPageNoTotal: 'Showing {from} to {to}',
          error: 'Showing no entries',
          limitLabel: 'Show',
          nextPage: '»',
          prevPage: '«',
          ellipsis: '...'
        };
        var PaginatorType;

        (function (PaginatorType) {
          PaginatorType["pages"] = "pages";
          PaginatorType["infinite"] = "infinite";
        })(PaginatorType || (PaginatorType = {}));

        const DATAGRID_CHECK_SELECT_ATTR = 'data-datagrid-select';
        const DATAGRID_CHECK_SELECT_ALL_ATTR = 'data-datagrid-select-all';
        /***/
      },

      /***/
      "./src/datagrid/Datagrid.ts":
      /*!**********************************!*\
        !*** ./src/datagrid/Datagrid.ts ***!
        \**********************************/

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


        var _actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../actionpanel/ActionPanel */
        "./src/actionpanel/ActionPanel.ts");
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts");
        /* harmony import */


        var _extractOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../extractOptions */
        "./src/extractOptions.ts");
        /* harmony import */


        var _DatagridState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./DatagridState */
        "./src/datagrid/DatagridState.ts");
        /* harmony import */


        var _paginator_Paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../paginator/Paginator */
        "./src/paginator/Paginator.ts");
        /* harmony import */


        var _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../render/defaultRenderer */
        "./src/render/defaultRenderer.ts");
        /* harmony import */


        var _render_GridRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../render/GridRenderer */
        "./src/render/GridRenderer.ts");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../utils */
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
        };

        function makeGetUrl(url, data) {
          const result = {};

          if (data.fetchCount) {
            result.fetchCount = true;
          }

          Object.keys(data.filter).forEach(field => {
            result[`filter[${field}]`] = data.filter[field];
          });
          Object.keys(data.paginate).forEach(field => {
            result[`paginate[${field}]`] = data.paginate[field];
          });
          Object.keys(data.sort).forEach(field => {
            result[`sort[${field}]`] = data.sort[field];
          });
          return Object(query_string__WEBPACK_IMPORTED_MODULE_2__["stringifyUrl"])({
            url,
            query: result
          });
        }

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
            this.state = new _DatagridState__WEBPACK_IMPORTED_MODULE_6__["DatagridState"](this);
            this.capturedForms = {}; // TODO: type as sf.Form instance array

            this.capturedPaginators = []; // TODO: type as sf.Paginator instance array

            this.capturedActionPanels = []; // TODO: type as sf.Paginator instance array

            this.defaults = {
              page: 1,
              limit: _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_LIMIT"]
            };
            this.init(ssf, node, options);
            this.options = Object.assign(Object.assign(Object.assign({}, Datagrid.defaultOptions), this.options), Object(_extractOptions__WEBPACK_IMPORTED_MODULE_5__["extractOptions"])(node));
            assert__WEBPACK_IMPORTED_MODULE_1__["notEqual"](this.options.id, '', 'id should be not empty');
            assert__WEBPACK_IMPORTED_MODULE_1__["notEqual"](this.options.url, '', 'url should be not empty'); // Process options
            // TODO: we can override columns and sort options inside renderers but it might produce situation of triggering unexisting sort
            // Think about that, or ignore

            this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["normalizeColumns"])(this.options.columns, this.options.sortable); // Set default sort if present

            if (this.options.sort) {
              if (typeof this.options.sort === 'string') {
                this.defaults.sortBy = this.options.sort;
                this.defaults.sortDir = _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC;
              } else {
                this.defaults.sortBy = this.options.sort.field;
                this.defaults.sortDir = this.options.sort.direction || _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC;
              }

              this.state.setSort(this.defaults.sortBy, this.defaults.sortDir);
            }

            this.createRenderers();
            this.initFromUrl();
            this.captureForms();

            if (this.allFormsAttached()) {
              this.request();
            }
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
              }; // eslint-disable-next-line

              formInstance.options.jsonOnly = true;

              if (formInstance.getFormData) {
                const data = formInstance.getFormData();
                this.state.mergeDefaultData(data);
                this.state.setFormData(id, data);
              } // eslint-disable-next-line


              formInstance.options.beforeSubmitCallback = options => {
                this.resetPaginator();
                this.applyFormChange(id, options.data);
                this.request();
                return false;
              };

              const urlDataForForm = this.state.urlData ? Object.keys(this.state.urlData).filter(key => fields.indexOf(key) >= 0).reduce((map, key) => Object.assign(Object.assign({}, map), {
                [key]: this.state.urlData[key]
              }), {}) : undefined;

              if (urlDataForForm) {
                const formSpecificData = Object.keys(urlDataForForm).filter(k => fields.indexOf(k) >= 0).reduce((map, key) => Object.assign(Object.assign({}, map), {
                  [key]: urlDataForForm[key]
                }), {});
                formInstance.setFieldValues(formSpecificData);
                this.state.setFormData(id, formSpecificData);
              }

              this.options.captureForms = this.options.captureForms.filter(f => f !== formInstance.options.url);
              this.request();
            }
          }

          registerPaginatorInstance(formInstance) {
            if (formInstance.options && formInstance.options.id && this.options.captureForms.indexOf(formInstance.options.id) >= 0) {
              this.capturedPaginators.push(formInstance); // eslint-disable-next-line

              formInstance.options.willFetchCount = this.options.fetchCount; // eslint-disable-next-line

              formInstance.options.onPageChange = options => {
                this.state.updatePaginator(options);
                this.request();
                return false;
              };

              this.options.captureForms = this.options.captureForms.filter(f => f !== formInstance.options.id);
              this.request();
            }
          }

          registerActionPanelInstance(formInstance) {
            if (formInstance.options && formInstance.options.id && this.options.captureActionPanels && this.options.captureActionPanels.indexOf(formInstance.options.id) >= 0) {
              this.capturedActionPanels.push(formInstance);

              if (this.options.selectable) {
                formInstance.reconfigure({
                  selectionType: this.options.selectable.type
                });
                formInstance.setSelection(this.state.selection, this.state.selectedItems);
              }
            }
          }

          captureForms() {
            const forms = this.sf.getInstances('form') || [];
            forms.forEach(f => {
              this.registerFormInstance(f.instance);
            });
            const paginators = this.sf.getInstances(_paginator_Paginator__WEBPACK_IMPORTED_MODULE_7__["default"].spiralFrameworkName) || [];
            paginators.forEach(f => {
              this.registerPaginatorInstance(f.instance);
            });
            const actionPanels = this.sf.getInstances(_actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_3__["default"].spiralFrameworkName) || [];
            actionPanels.forEach(f => {
              this.registerActionPanelInstance(f.instance);
            });
            this.sf.instancesController.events.on('onAddInstance', ({
              instance,
              type
            }) => {
              if (type === 'form') {
                this.registerFormInstance(instance);
              }

              if (type === _paginator_Paginator__WEBPACK_IMPORTED_MODULE_7__["default"].spiralFrameworkName) {
                this.registerPaginatorInstance(instance);
              }

              if (type === _actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_3__["default"].spiralFrameworkName) {
                this.registerActionPanelInstance(instance);
              }
            });
          }
          /**
           * Sets sort for this field if not yet, or changes direction if already same
           * @param fieldId
           */


          triggerSort(fieldId) {
            if (this.state.sortBy === fieldId) {
              if (this.state.sortDir === _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC) {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].DESC);
              } else {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC);
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

          setAllPaginators(p) {
            this.capturedPaginators.forEach(f => {
              if (f.setParams) {
                f.setParams(p, this.usePrefix() ? this.getPrefix() : this.options.serialize);
              }
            });
          }

          resetPaginator() {
            // TODO: depending on paginator type perform different reset type
            this.state.resetFetchCount();
            this.state.updatePaginator({
              page: 1
            });
            this.setAllPaginators(this.state.paginate);
          }

          formRequest() {
            const request = {
              fetchCount: this.state.needFetchCount,
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

            if (typeof data.pagination.count !== 'undefined') {
              this.state.onCountFetched();
            }

            this.render();
            this.setAllPaginators(Object.assign(Object.assign({}, this.state.paginate), {
              error: false
            }));
          }

          beforeSubmit() {
            Object.keys(this.capturedForms).forEach(fKey => {
              const f = this.capturedForms[fKey].instance;

              if (f.removeMessages) {
                f.removeMessages();
              }
            });
          }

          handleError(response) {
            const {
              data,
              status,
              statusText
            } = this.processResponse(response);
            this.state.setError(data.error, data.errors, this.options.resetOnError);
            Object.keys(this.capturedForms).forEach(fKey => {
              const f = this.capturedForms[fKey].instance;

              if (f.processAnswer) {
                const id = f.options.url;

                const {
                  error
                } = data,
                      rest = __rest(data, ["error"]);

                const filteredData = id === this.options.errorMessageTarget ? Object.assign({}, data) : rest;
                f.processAnswer({
                  data: filteredData,
                  status,
                  statusText
                }, false); // false stands for 'dont display errors unrelated to form inputs'
              }
            });
            this.setAllPaginators({
              error: true
            });
            this.render(); // TODO: remove data and display error
            // TODO: send validation errors to other forms
          }

          request() {
            return __awaiter(this, void 0, void 0, function* () {
              if (!this.allFormsAttached()) {
                console.warn('Cant start new request, not all forms are yet attached', this.options.captureForms);
                return;
              }

              if (this.state.isLoading) {
                console.warn('Cant start new request, old one is running');
                return;
              }

              this.state.startLoading();
              this.beforeSubmit();
              this.lock();
              this.updateUrl();

              const isGet = this.options.method.toUpperCase() === _constants__WEBPACK_IMPORTED_MODULE_4__["RequestMethod"].GET;

              const data = this.formRequest();
              const request = this.sf.ajax.send({
                url: isGet ? makeGetUrl(this.options.url, data) : this.options.url,
                method: this.options.method,
                headers: this.options.headers,
                data: isGet ? undefined : data
              });

              try {
                const response = this.processResponse((yield request));
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
              this.grids.push(new _render_GridRenderer__WEBPACK_IMPORTED_MODULE_9__["GridRenderer"](Object.assign(Object.assign({}, renderOption), {
                ui: Object.assign(Object.assign({}, this.options.ui), renderOption.ui),
                columns: renderOption.columns && renderOption.columns.length ? renderOption.columns : this.options.columns,
                sortable: renderOption.sortable && renderOption.sortable.length ? renderOption.sortable : this.options.sortable,
                paginator: typeof renderOption.paginator === 'undefined' ? this.options.paginator : renderOption.paginator,
                dontRenderError: !!this.options.errorMessageTarget,
                selectable: renderOption.selectable || this.options.selectable,
                messages: Object.assign(Object.assign({}, this.options.messages), renderOption.messages),
                paginatorMessages: Object.assign(Object.assign({}, this.options.paginatorMessages), renderOption.paginatorMessages)
              }), this));
            });
          }

          render() {
            this.grids.forEach(grid => {
              grid.render(this.state);
            });
          }

          updateCheckboxes() {
            this.grids.forEach(grid => {
              grid.updateCheckboxes(this.state);
            });
            this.capturedActionPanels.forEach(a => {
              a.setSelection(this.state.selection, this.state.selectedItems);
            });
          }

          toggleSelectionAll(checked) {
            if (this.options.selectable) {
              if (checked) {
                this.state.selectAll();
              } else {
                this.state.resetSelection();
              }
            }

            this.updateCheckboxes();
          }

          toggleSelection(value, checked) {
            if (this.options.selectable) {
              if (this.options.selectable.type === _constants__WEBPACK_IMPORTED_MODULE_4__["SelectionType"].MULTIPLE) {
                if (checked) {
                  this.state.addToSelection(value);
                } else {
                  this.state.removeFromSelection(value);
                }
              } else if (checked) {
                this.state.selectSingle(value);
              }
            }

            this.updateCheckboxes();
          }

          serialize() {
            const custom = this.state.getFilter();
            const pagination = Object.keys(this.state.paginate).filter(k => _constants__WEBPACK_IMPORTED_MODULE_4__["pageParams"].indexOf(k) >= 0).reduce((map, key) => Object.assign(Object.assign({}, map), {
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

            const paginatorUpdate = {
              page: this.defaults.page,
              limit: this.defaults.limit
            };

            if (page) {
              paginatorUpdate.page = +page;
            }

            if (limit) {
              paginatorUpdate.limit = +limit;
            }

            if (cid) {
              paginatorUpdate.cid = cid;
            }

            if (lid) {
              paginatorUpdate.lid = lid;
            }

            this.state.updatePaginator(paginatorUpdate);

            const {
              sortBy,
              sortDir
            } = rest,
                  rest2 = __rest(rest, ["sortBy", "sortDir"]);

            if (sortBy) {
              this.state.setSort(sortBy, sortDir || _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC); // TODO: skip
            }

            [..._constants__WEBPACK_IMPORTED_MODULE_4__["pageParams"], ..._constants__WEBPACK_IMPORTED_MODULE_4__["sortParams"]].forEach(p => delete rest2[p]);
            this.state.urlData = rest2;
          }

          usePrefix() {
            return this.options.serialize && this.options.namespace;
          }

          getPrefix() {
            return this.usePrefix() ? `${this.options.namespace || ''}-` : '';
          }

          initFromUrl() {
            if (this.options.serialize) {
              if (window.location.search) {
                const urlData = this.getObjectFromUrl(this.getDefaults(), this.getPrefix());

                if (Object.keys(urlData).length) {
                  this.deserialize(urlData);
                }
              }
            }
          }

          updateUrl() {
            if (this.options.serialize) {
              const data = this.serialize();
              this.putObjectToUrl(data, this.getDefaults(), this.getPrefix());
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

            if (this.usePrefix()) {
              Object.keys(obj2).forEach(k => {
                if (k.indexOf(this.getPrefix()) === 0) {
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

          getDefaults() {
            return Object.assign(Object.assign({}, this.defaults), this.state.defaultData);
          }

          allFormsAttached() {
            return this.options.captureForms.length === 0;
          }

          applyFormChange(id, data) {
            this.capturedForms[id].fields = [...new Set([...Object.keys(data), ...this.capturedForms[id].fields])]; // Merge new fields if any

            this.state.setFormData(id, data); // set data for specific form

            Object.keys(this.capturedForms).filter(formId => formId !== id).forEach(formId => {
              const formInstance = this.capturedForms[formId];
              const {
                fields
              } = formInstance;
              const formSpecificData = Object.keys(data).filter(k => fields.indexOf(k) >= 0).reduce((map, key) => Object.assign(Object.assign({}, map), {
                [key]: data[key]
              }), {});
              formInstance.instance.setFieldValues(formSpecificData);
            });
          }

          processResponse(axiosResponse) {
            if (this.options.responseProcessor) {
              return this.options.responseProcessor(axiosResponse);
            }

            if (this.options.dataField) {
              const key = this.options.dataField;

              if (axiosResponse.data && axiosResponse.data[key]) {
                // A success answer it seems, put
                return Object.assign(Object.assign({}, axiosResponse), {
                  data: Object.assign(Object.assign({}, axiosResponse.data), {
                    data: axiosResponse.data[key]
                  })
                });
              }
            }

            return axiosResponse;
          }

        }

        Datagrid.spiralFrameworkName = 'datagrid';
        Datagrid.defaultOptions = _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_8__["defaultGridOptions"];
        /* harmony default export */

        __webpack_exports__["default"] = Datagrid;
        /***/
      },

      /***/
      "./src/datagrid/DatagridState.ts":
      /*!***************************************!*\
        !*** ./src/datagrid/DatagridState.ts ***!
        \***************************************/

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
        /*! ../constants */
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
              defaultData: {},
              fetchCount: false,
              sortDir: _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC,
              data: [],
              formData: {},
              selection: new Set()
            };
            this.state.fetchCount = this.parent.options.fetchCount;
          }

          isSelected(val) {
            return this.state.selection.has(String(val));
          }

          areAllSelected() {
            return this.data.reduce((hasIt, item) => hasIt && !!this.parent.options.selectable && this.isSelected(String(item[this.parent.options.selectable.id])), true);
          }

          get selection() {
            return this.state.selection;
          } // eslint-disable-next-line


          get isCustomSearch() {
            return !Object.keys(this.state.formData).reduce((isDefault, formKey) => {
              const formData = this.state.formData[formKey];
              const isFDefault = Object.keys(formData).reduce((isD, field) => {
                const fieldValue = formData[field];
                const defaultValue = this.state.defaultData[field];

                if (fieldValue && defaultValue) {
                  // eslint-disable-next-line eqeqeq
                  return isD && fieldValue == defaultValue;
                }

                if (!fieldValue && defaultValue || fieldValue && !defaultValue) {
                  return false;
                }

                return isD;
              }, true);
              return isDefault && isFDefault;
            }, true);
          }

          get selectedItems() {
            return this.data.filter(item => !!this.parent.options.selectable && this.isSelected(String(item[this.parent.options.selectable.id])));
          }

          get isLoading() {
            return this.state.loading;
          }

          startLoading() {
            this.state.loading = true;
          }

          get needFetchCount() {
            return this.state.fetchCount;
          }

          resetFetchCount() {
            this.state.fetchCount = this.parent.options.fetchCount;
          }

          onCountFetched() {
            this.state.fetchCount = false;
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

          addToSelection(value) {
            this.state.selection.add(String(value));
          }

          removeFromSelection(value) {
            this.state.selection.delete(String(value));
          }

          selectSingle(value) {
            this.state.selection.clear();
            this.state.selection.add(String(value));
          }

          resetSelection() {
            this.state.selection.clear();
          }

          selectAll() {
            if (this.parent.options.selectable) {
              this.state.selection = new Set(this.data.map(item => String(item[this.parent.options.selectable.id])));
            }
          }

          mergeDefaultData(data = {}) {
            this.state.defaultData = Object.assign(Object.assign({}, this.state.defaultData), data);
          }

          get defaultData() {
            return this.state.defaultData;
          }

        }
        /***/

      },

      /***/
      "./src/extractOptions.ts":
      /*!*******************************!*\
        !*** ./src/extractOptions.ts ***!
        \*******************************/

      /*! exports provided: extractOptions */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "extractOptions", function () {
          return extractOptions;
        });

        const extractOptions = node => {
          const additionalOptionsEl = node.querySelector('script[role="sf-options"]');

          if (additionalOptionsEl) {
            if (additionalOptionsEl.getAttribute('type') === 'text/javascript') {
              try {
                // eslint-disable-next-line
                const one = Function(`"use strict";return ${additionalOptionsEl.innerHTML.trim()}`); // console.log('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + '');

                const overrides = one()();
                return overrides;
              } catch (e) {
                console.error('Could not parse options inside script, ensure script inside is an anonymous function returning object');
              }
            } else {
              try {
                return JSON.parse(additionalOptionsEl.innerHTML.trim());
              } catch (e) {
                console.error('Could not parse options inside script, ensure script inside is a JSON');
              }
            }
          }

          return undefined;
        };
        /***/

      },

      /***/
      "./src/index.ts":
      /*!**********************!*\
        !*** ./src/index.ts ***!
        \**********************/

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


        var _actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./actionpanel/ActionPanel */
        "./src/actionpanel/ActionPanel.ts");
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./constants */
        "./src/constants.ts");
        /* harmony import */


        var _datagrid_Datagrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./datagrid/Datagrid */
        "./src/datagrid/Datagrid.ts");
        /* harmony import */


        var _paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./paginator/Paginator */
        "./src/paginator/Paginator.ts");

        _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_datagrid_Datagrid__WEBPACK_IMPORTED_MODULE_3__["default"], 'sf-js-datagrid');

        _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__["default"], _constants__WEBPACK_IMPORTED_MODULE_2__["PAGINATOR_CLASS_NAME"]);

        _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_1__["default"], _constants__WEBPACK_IMPORTED_MODULE_2__["ACTION_PANEL_CLASS_NAME"]);
        /* harmony default export */


        __webpack_exports__["default"] = _datagrid_Datagrid__WEBPACK_IMPORTED_MODULE_3__["default"]; // ES6 default export will not expose us as global

        /***/
      },

      /***/
      "./src/messages.ts":
      /*!*************************!*\
        !*** ./src/messages.ts ***!
        \*************************/

      /*! exports provided: Messages */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Messages", function () {
          return Messages;
        });

        class Messages {
          constructor(definitions, defaultDefinitions) {
            this.definitions = definitions;
            this.defaultDefinitions = defaultDefinitions;
          }

          getMessage(messageKey, values = {}) {
            return Object.keys(values).reduce((prev, key) => prev.split(`{${key}}`).join(typeof values[key] === 'undefined' ? '' : String(values[key])), this.definitions[messageKey] || this.defaultDefinitions[messageKey] || '');
          }

        }
        /***/

      },

      /***/
      "./src/paginator/Paginator.ts":
      /*!************************************!*\
        !*** ./src/paginator/Paginator.ts ***!
        \************************************/

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
        /*! ../constants */
        "./src/constants.ts");
        /* harmony import */


        var _extractOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../extractOptions */
        "./src/extractOptions.ts");
        /* harmony import */


        var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../messages */
        "./src/messages.ts");

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
              willFetchCount: {
                value: Paginator.defaultOptions.willFetchCount,
                domAttr: 'data-fetch-count'
              }
            };
            this.options = Object.assign({}, Paginator.defaultOptions);
            this.state = {
              error: false,
              limit: _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LIMIT"]
            };
            this.init(ssf, node, options);
            this.options = Object.assign(Object.assign(Object.assign({}, Paginator.defaultOptions), this.options), Object(_extractOptions__WEBPACK_IMPORTED_MODULE_3__["extractOptions"])(node));
            this.messages = new _messages__WEBPACK_IMPORTED_MODULE_4__["Messages"](this.options.messages || {}, _constants__WEBPACK_IMPORTED_MODULE_2__["defaultPaginatorMessages"]);
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
            return this.options.willFetchCount && typeof this.state.count !== 'undefined';
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
                    text: this.messages.getMessage('ellipsis'),
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
                    text: this.messages.getMessage('ellipsis'),
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
                counterDiv.innerHTML = this.messages.getMessage('currentPage', {
                  total: this.state.count,
                  page: this.state.page,
                  limit: this.state.limit,
                  from: (this.state.page - 1) * this.state.limit + 1,
                  to: this.state.page * this.state.limit
                });
              } else {
                counterDiv.innerHTML = this.messages.getMessage('currentPageNoTotal', {
                  total: this.state.count,
                  page: this.state.page,
                  limit: this.state.limit,
                  from: (this.state.page - 1) * this.state.limit + 1,
                  to: this.state.page * this.state.limit
                });
              }
            }

            if (this.state.error) {
              counterDiv.innerHTML = this.messages.getMessage('error', {
                total: this.state.count,
                page: this.state.page,
                limit: this.state.limit,
                from: (this.state.page - 1) * this.state.limit + 1,
                to: this.state.page * this.state.limit
              });
            }

            const limitDiv = document.createElement('div');
            limitDiv.className = 'col-4 col-md-2 col-lg-2';

            if (this.hasLimitOptions()) {
              limitDiv.innerHTML = `<div class="form-group row mb-0">
                    <label class="col-form-label-sm col-auto">${this.messages.getMessage('limitLabel')}</label>
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

              addLi(pageInfo.hasPrevious ? 'page-item previous' : 'page-item previous disabled', this.messages.getMessage('prevPage'), pageInfo.hasPrevious ? urlForPage(this.state.page - 1) : undefined, pageInfo.hasPrevious ? clickForPage(this.state.page - 1) : undefined);
              pageInfo.pages.forEach(p => {
                addLi(p.active ? 'page-item active' : 'page-item', p.text, p.page ? urlForPage(p.page) : undefined, p.page ? clickForPage(p.page) : undefined);
              });
              addLi(pageInfo.hasNext ? 'page-item next' : 'page-item next disabled', this.messages.getMessage('nextPage'), pageInfo.hasNext ? urlForPage(this.state.page + 1) : undefined, pageInfo.hasNext ? clickForPage(this.state.page + 1) : undefined);
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
              el === null || el === void 0 ? void 0 : el.classList.add('sf-paginator__error');
            } else {
              el === null || el === void 0 ? void 0 : el.classList.remove('sf-paginator__error');
            }
          }

        }

        Paginator.spiralFrameworkName = 'datagrid-paginator';
        Paginator.defaultOptions = {
          id: '',
          lockType: 'none',
          willFetchCount: true,
          serialize: true,
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["PaginatorType"].pages,
          className: 'row no-gutters align-items-center m-3',
          limitOptions: [10, 25, 50, 100]
        };
        /* harmony default export */

        __webpack_exports__["default"] = Paginator;
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


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @spiral-toolkit/core */
        "@spiral-toolkit/core");
        /* harmony import */


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../actionpanel/ActionPanel */
        "./src/actionpanel/ActionPanel.ts");
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts");
        /* harmony import */


        var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../messages */
        "./src/messages.ts");
        /* harmony import */


        var _paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../paginator/Paginator */
        "./src/paginator/Paginator.ts");
        /* harmony import */


        var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ../utils */
        "./src/utils.ts");
        /* harmony import */


        var _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./defaultBodyWrapper */
        "./src/render/defaultBodyWrapper.ts");
        /* harmony import */


        var _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./defaultFooterWrapper */
        "./src/render/defaultFooterWrapper.ts");
        /* harmony import */


        var _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./defaultHeaderWrapper */
        "./src/render/defaultHeaderWrapper.ts");
        /* harmony import */


        var _defaultRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./defaultRenderer */
        "./src/render/defaultRenderer.ts");
        /* harmony import */


        var _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./defaultRowWrapper */
        "./src/render/defaultRowWrapper.ts");
        /* harmony import */


        var _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ./defaultTableWrapper */
        "./src/render/defaultTableWrapper.ts");
        /* harmony import */


        var _normalizers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ./normalizers */
        "./src/render/normalizers.ts");

        let instanceCounter = 1;

        class GridRenderer {
          constructor(partialOptions, root) {
            this.root = root; // eslint-disable-next-line

            this.instance = instanceCounter++;
            this.options = Object.assign(Object.assign(Object.assign({}, _defaultRenderer__WEBPACK_IMPORTED_MODULE_9__["defaultRenderer"]), partialOptions), {
              ui: Object.assign(Object.assign({}, _defaultRenderer__WEBPACK_IMPORTED_MODULE_9__["defaultGridUiOptions"]), partialOptions.ui)
            });
            this.messages = new _messages__WEBPACK_IMPORTED_MODULE_3__["Messages"](this.options.messages || {}, _constants__WEBPACK_IMPORTED_MODULE_2__["defaultGridMessages"]);
            this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["normalizeColumns"])(this.options.columns, this.options.sortable);
            this.create();
          }

          create() {
            this.wrapper = document.createElement('div');
            this.wrapper.setAttribute('role', 'sf-datagrid-wrapper');
            this.wrapper.setAttribute('class', this.options.ui.wrapperClassName || '');
            this.root.node.innerHTML = '';
            this.root.node.appendChild(this.wrapper);

            if (this.options.actions) {
              this.createDefaultActions();
            }

            if (this.options.paginator) {
              this.createDefaultPaginator();
            }

            const tableRenderer = this.options.tableWrapper || _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_11__["defaultTableWrapper"];
            this.tableEl = tableRenderer(this.wrapper, this.options);
          }

          createDefaultPaginator() {
            const id = `${Date.now()}${this.instance}`;
            this.root.options.captureForms.push(id);
            this.paginatorEl = document.createElement('div');
            this.root.node.appendChild(this.paginatorEl);
            const paginator = new _paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__["default"](_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a, this.paginatorEl, Object.assign(Object.assign({}, _paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__["default"].defaultOptions), {
              id,
              messages: this.root.options.paginatorMessages
            }));
            this.root.registerPaginatorInstance(paginator);
          }

          createDefaultActions() {
            var _a;

            const id = `${Date.now()}${this.instance}`;
            this.actionPanelEl = document.createElement('div');
            this.root.node.appendChild(this.actionPanelEl);

            if (!this.root.options.captureActionPanels) {
              this.root.options.captureActionPanels = [];
            }

            this.root.options.captureActionPanels.push(id);
            const panel = new _actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_1__["default"](_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a, this.actionPanelEl, {
              id,
              className: state => state.hasSelection ? 'row no-gutters align-items-center px-3 py-2 border-bottom' : 'd-none',
              lockType: 'none',
              noSelection: document.createElement('div'),
              actionClassName: 'btn btn-sm',
              selectionType: ((_a = this.options.selectable) === null || _a === void 0 ? void 0 : _a.type) || _constants__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].SINGLE,
              actions: this.options.actions
            });
            this.root.registerActionPanelInstance(panel);
          } // eslint-disable-next-line class-methods-use-this


          applyAdditionalCellAttributes(el, column, options, state, index) {
            const cellMeta = {
              id: column.id,
              column,
              index,
              rowSelected: options.selectable ? state.isSelected(state.data[index][options.selectable.id]) : false,
              state,
              item: state.data[index]
            };

            if (options.ui.cellClassName) {
              if (typeof options.ui.cellClassName === 'function') {
                el.classList.add(...options.ui.cellClassName(cellMeta).split(' '));
              } else {
                const specific = options.ui.cellClassName[column.id];

                if (specific) {
                  if (typeof specific === 'string') {
                    el.classList.add(...specific.split(' '));
                  } else {
                    el.classList.add(...specific(cellMeta).split(' '));
                  }
                }
              }
            }

            if (options.ui.cellAttributes) {
              if (typeof options.ui.cellAttributes === 'function') {
                Object(_utils__WEBPACK_IMPORTED_MODULE_5__["applyAttrributes"])(el, options.ui.cellAttributes(cellMeta));
              } else {
                const specific = options.ui.cellAttributes[column.id];

                if (specific) {
                  if (typeof specific === 'function') {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["applyAttrributes"])(el, specific(cellMeta));
                  } else {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["applyAttrributes"])(el, specific);
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
              rowSelected: options.selectable ? state.areAllSelected() : false,
              state,
              item: null
            };

            if (options.ui.headerCellClassName) {
              if (typeof options.ui.headerCellClassName === 'function') {
                el.classList.add(...options.ui.headerCellClassName(cellMeta).split(' '));
              } else {
                const specific = options.ui.headerCellClassName[column.id];

                if (specific) {
                  if (typeof specific === 'string') {
                    el.classList.add(...specific.split(' '));
                  } else {
                    el.classList.add(...specific(cellMeta).split(' '));
                  }
                }
              }
            }

            if (options.ui.headerCellAttributes) {
              if (typeof options.ui.headerCellAttributes === 'function') {
                Object(_utils__WEBPACK_IMPORTED_MODULE_5__["applyAttrributes"])(el, options.ui.headerCellAttributes(cellMeta));
              } else {
                const specific = options.ui.headerCellAttributes[column.id];

                if (specific) {
                  if (typeof specific === 'function') {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["applyAttrributes"])(el, specific(cellMeta));
                  } else {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["applyAttrributes"])(el, specific);
                  }
                }
              }
            }
          }

          render(state) {
            // Render header
            const headerRenderer = this.options.headerWrapper || _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_8__["defaultHeaderWrapper"];

            if (this.headerEl) {
              this.tableEl.removeChild(this.headerEl.outer);
            }

            this.headerEl = headerRenderer(this.tableEl, this.options, state, this.messages);

            if (this.headerEl) {
              if (this.columnInfo.length) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                this.columnInfo.forEach((cI, index) => {
                  const headerCellRenderer = Object(_normalizers__WEBPACK_IMPORTED_MODULE_12__["normalizedHeaderCellRenderer"])((this.options.headerList || {})[cI.id]);
                  const node = headerCellRenderer.createEl();

                  if (node) {
                    const rendered = headerCellRenderer.render(cI, this.options, state);

                    if (rendered) {
                      if (typeof rendered === 'string') {
                        node.innerHTML = rendered;
                      } else {
                        node.appendChild(rendered);
                      }

                      this.applyAdditionalHeaderCellAttributes(node, cI, this.options, state);
                      this.headerEl.inner.appendChild(node);
                    }
                  }
                });
              }
            } // Render body


            if (this.bodyEl) {
              this.tableEl.removeChild(this.bodyEl);
            }

            const bodyRenderer = this.options.bodyWrapper || _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_6__["defaultBodyWrapper"];
            this.bodyEl = bodyRenderer(this.tableEl, this.options, state, this.messages);

            if (this.bodyEl) {
              this.tableEl.appendChild(this.bodyEl);
              const row = this.options.rowWrapper || _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_10__["defaultRowWrapper"];
              state.data.forEach((item, index) => {
                const rowEl = row(this.bodyEl, this.options, state, index);
                this.columnInfo.forEach(cI => {
                  const value = item[cI.id];
                  const rowCellRenderer = Object(_normalizers__WEBPACK_IMPORTED_MODULE_12__["normalizedCellRenderer"])((this.options.cells || {})[cI.id]);
                  const node = rowCellRenderer.createEl();

                  if (node) {
                    // If no node generated, skip it, that might be custom tr render or colspan
                    const rendered = rowCellRenderer.render(value, item, cI, this.options, index, state);

                    if (rendered) {
                      // If no content generated, skip it, that might be custom tr render or colspan
                      if (typeof rendered === 'string') {
                        node.innerHTML = rendered;
                      } else {
                        node.appendChild(rendered);
                      }

                      this.applyAdditionalCellAttributes(node, cI, this.options, state, index);
                      rowEl.appendChild(node);
                    }
                  }
                });
              });
            } // Render footer


            if (this.footerEl) {
              this.tableEl.removeChild(this.footerEl);
            }

            const footerRenderer = this.options.footerWrapper || _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_7__["defaultFooterWrapper"];
            this.footerEl = footerRenderer(this.tableEl, this.options, state, this.messages);

            if (this.footerEl) {
              this.tableEl.appendChild(this.footerEl); // We assume footer render handles all data so no additional renders here
            }
          }

          updateCheckboxes(state) {
            var _a, _b;

            if (this.root.options.selectable) {
              const headerEl = (_a = this.headerEl) === null || _a === void 0 ? void 0 : _a.outer.querySelector(`input[${_constants__WEBPACK_IMPORTED_MODULE_2__["DATAGRID_CHECK_SELECT_ALL_ATTR"]}]`);

              if (headerEl) {
                headerEl.checked = state.areAllSelected();
              }

              const checkboxes = (_b = this.bodyEl) === null || _b === void 0 ? void 0 : _b.querySelectorAll(`input[${_constants__WEBPACK_IMPORTED_MODULE_2__["DATAGRID_CHECK_SELECT_ATTR"]}]`);

              if (checkboxes) {
                checkboxes.forEach(checkbox => {
                  const el = checkbox;
                  el.checked = state.isSelected(el.value);
                });
              }
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

        const defaultBodyWrapper = (node, options, state, messages) => {
          const el = document.createElement('tbody');
          node.appendChild(el);

          if (state.hasError && !options.dontRenderError) {
            const errorTr = document.createElement('tr');
            const errorTd = document.createElement('td');
            errorTd.colSpan = options.columns.length + (options.selectable ? 1 : 0);
            errorTd.innerText = state.errorMessage || messages.getMessage('error', {});
            errorTd.classList.add('sf-table__error');
            errorTr.appendChild(errorTd);
            el.appendChild(errorTr);
          } else if (state.data.length === 0) {
            const emptyTr = document.createElement('tr');
            const emptyTd = document.createElement('td');
            emptyTd.colSpan = options.columns.length + (options.selectable ? 1 : 0);
            emptyTd.innerHTML = state.isCustomSearch ? messages.getMessage('noResults', {}) : messages.getMessage('noData', {});
            emptyTd.classList.add('sf-table__empty');
            emptyTr.appendChild(emptyTd);
            el.appendChild(emptyTr);
          }

          return el;
        };
        /***/

      },

      /***/
      "./src/render/defaultCellRenderer.ts":
      /*!*******************************************!*\
        !*** ./src/render/defaultCellRenderer.ts ***!
        \*******************************************/

      /*! exports provided: defaultCellElCreator, defaultCellRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultCellElCreator", function () {
          return defaultCellElCreator;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultCellRenderer", function () {
          return defaultCellRenderer;
        });

        const defaultCellElCreator = () => document.createElement('td');

        const defaultCellRenderer = {
          createEl: defaultCellElCreator,
          render: value => typeof value === 'undefined' ? '' : String(value)
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

      /*! exports provided: defaultHeaderCellElCreator, defaultHeaderCellRendererInner, defaultHeaderCellRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultHeaderCellElCreator", function () {
          return defaultHeaderCellElCreator;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultHeaderCellRendererInner", function () {
          return defaultHeaderCellRendererInner;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultHeaderCellRenderer", function () {
          return defaultHeaderCellRenderer;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts");

        const defaultHeaderCellElCreator = () => document.createElement('th');

        const defaultHeaderCellRendererInner = (column, options, state) => {
          const el = document.createElement('div');
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

          el.className = classes.join(' ');
          el.innerText = column.title;
          return el;
        };

        const defaultHeaderCellRenderer = {
          createEl: defaultHeaderCellElCreator,
          render: defaultHeaderCellRendererInner
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
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts"); // eslint-disable-next-line @typescript-eslint/no-unused-vars


        const defaultHeaderWrapper = (node, options, state) => {
          const el = document.createElement('thead');
          const tr = document.createElement('tr');

          if (options.selectable) {
            const td = document.createElement('th');
            td.classList.add('sf-table__select');

            if (options.selectable.type === _constants__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].MULTIPLE) {
              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_0__["DATAGRID_CHECK_SELECT_ALL_ATTR"], '');
              checkbox.addEventListener('change', () => {
                state.parent.toggleSelectionAll(checkbox.checked);
              });
              td.appendChild(checkbox);
            }

            tr.appendChild(td);
          }

          el.appendChild(tr);
          node.appendChild(el);
          return {
            outer: el,
            inner: tr
          };
        };
        /***/

      },

      /***/
      "./src/render/defaultRenderer.ts":
      /*!***************************************!*\
        !*** ./src/render/defaultRenderer.ts ***!
        \***************************************/

      /*! exports provided: defaultGridUiOptions, defaultRenderer, defaultGridOptions */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultGridUiOptions", function () {
          return defaultGridUiOptions;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultRenderer", function () {
          return defaultRenderer;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "defaultGridOptions", function () {
          return defaultGridOptions;
        });
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts");

        const defaultGridUiOptions = {
          wrapperClassName: 'table-responsive',
          tableClassName: 'table table-striped',
          cellClassName: {},
          rowClassName: '',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          cellAttributes: cellMeta => ({}),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          rowAttributes: rowMeta => ({})
        };
        const defaultRenderer = {
          columns: [],
          sortable: [],

          /**
           * Basic class/attribute properties
           */
          ui: defaultGridUiOptions
        };
        const defaultGridOptions = {
          id: '',
          lockType: 'default',
          resetOnError: false,
          fetchCount: true,
          captureForms: [],
          columns: [],
          headers: {},
          method: _constants__WEBPACK_IMPORTED_MODULE_0__["RequestMethod"].POST,
          sortable: [],
          url: '',
          serialize: true,
          paginator: true,
          ui: defaultGridUiOptions,
          renderers: defaultRenderer
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
        /* harmony import */


        var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../constants */
        "./src/constants.ts"); // eslint-disable-next-line @typescript-eslint/no-unused-vars


        const defaultRowWrapper = (node, options, state, index) => {
          const el = document.createElement('tr');
          node.appendChild(el);

          if (options.selectable) {
            const td = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_0__["DATAGRID_CHECK_SELECT_ATTR"], '');
            checkbox.type = options.selectable.type === _constants__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].MULTIPLE ? 'checkbox' : 'radio';
            checkbox.value = state.data[index][options.selectable.id];
            checkbox.checked = state.isSelected(checkbox.value);
            checkbox.addEventListener('change', () => {
              state.parent.toggleSelection(checkbox.value, checkbox.checked);
            });
            td.classList.add('sf-table__select');
            td.appendChild(checkbox);
            el.appendChild(td);
          }

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
      "./src/render/normalizers.ts":
      /*!***********************************!*\
        !*** ./src/render/normalizers.ts ***!
        \***********************************/

      /*! exports provided: isCellAdvanced, isHeaderCellAdvanced, normalizedCellRenderer, normalizedHeaderCellRenderer */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isCellAdvanced", function () {
          return isCellAdvanced;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isHeaderCellAdvanced", function () {
          return isHeaderCellAdvanced;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "normalizedCellRenderer", function () {
          return normalizedCellRenderer;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "normalizedHeaderCellRenderer", function () {
          return normalizedHeaderCellRenderer;
        });
        /* harmony import */


        var _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./defaultCellRenderer */
        "./src/render/defaultCellRenderer.ts");
        /* harmony import */


        var _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./defaultHeaderCellRenderer */
        "./src/render/defaultHeaderCellRenderer.ts");

        function isCellAdvanced(render) {
          return render.createEl !== undefined;
        }

        function isHeaderCellAdvanced(render) {
          return render.createEl !== undefined;
        }

        const normalizedCellRenderer = render => {
          if (!render) {
            return _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_0__["defaultCellRenderer"];
          }

          if (!isCellAdvanced(render)) {
            return {
              createEl: _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_0__["defaultCellElCreator"],
              render
            };
          }

          return render;
        };

        const normalizedHeaderCellRenderer = render => {
          if (!render) {
            return _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_1__["defaultHeaderCellRenderer"];
          }

          if (!isHeaderCellAdvanced(render)) {
            return {
              createEl: _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_1__["defaultHeaderCellElCreator"],
              render
            };
          }

          return render;
        };
        /***/

      },

      /***/
      "./src/utils.ts":
      /*!**********************!*\
        !*** ./src/utils.ts ***!
        \**********************/

      /*! exports provided: normalizeColumns, applyAttrributes, isString */

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
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "isString", function () {
          return isString;
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

        function isString(something) {
          return typeof something === 'string';
        }
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
             * If any input changes should trigger form submit
             * Value is debounce value
             */
          immediate: {
            domAttr: 'data-immediate',
            value: false,

            processor(node, val) {
              if (!val) return false;
              return +val;
            }

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

        Form.prototype.onDebouncedSubmit = function (e) {
          if (this.sf.getInstance('lock', this.node)) {
            // On lock we should'n do any actions
            e.preventDefault();
            e.stopPropagation();
            return false;
          }

          if (this.options.immediate) {
            clearTimeout(this._submitTimeout);
            this._submitTimeout = setTimeout(() => {
              this.onSubmit(e);
            }, this.options.immediate);
          }

          return true;
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
              if (el.type === 'checkbox' || el.type === 'radio') {
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

          return undefined;
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
          this.DOMEvents.add([{
            DOMNode: this.options.context,
            eventType: 'submit',
            eventFunction: e => {
              this.onSubmit(e);
            }
          }, {
            DOMNode: this.options.context,
            eventType: 'change',
            eventFunction: e => {
              this.onDebouncedSubmit(e);
            }
          }, {
            DOMNode: this.options.context,
            eventType: 'input',
            eventFunction: e => {
              this.onDebouncedSubmit(e);
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
                if (!result[keys]) {
                  result[keys] = [];
                }

                if (domNode.checked) {
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
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybU1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzP2YwZjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJGb3JtIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJqc29uT25seSIsIndpbmRvdyIsIkZvcm1EYXRhIiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJpZCIsInZhbHVlIiwiZG9tQXR0ciIsInVybCIsIm1ldGhvZCIsImltbWVkaWF0ZSIsInZhbCIsImxvY2tUeXBlIiwibWVzc2FnZXNUeXBlIiwibWVzc2FnZXMiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwidXNlQWpheCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiYWpheENhbGxiYWNrIiwiYmVmb3JlU3VibWl0Q2FsbGJhY2siLCJhZnRlclN1Ym1pdENhbGxiYWNrIiwiaGVhZGVycyIsIkFjY2VwdCIsImdsb2JhbCIsImluc3RhbmNlcyIsImZvcm0iLCJmb3JtTWVzc2FnZXMiLCJkZWZhdWx0cyIsIm9uRGVib3VuY2VkU3VibWl0IiwiZ2V0SW5zdGFuY2UiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNsZWFyVGltZW91dCIsIl9zdWJtaXRUaW1lb3V0Iiwic2V0VGltZW91dCIsIm9uU3VibWl0IiwicmVtb3ZlTWVzc2FnZXMiLCJkYXRhIiwiZ2V0Rm9ybURhdGEiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwidHJpZ2dlciIsInNlbmQiLCJsb2NrIiwiYWRkSW5zdGFuY2UiLCJ0eXBlIiwid2FybiIsIm9uUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInVubG9jayIsInJlbW92ZUluc3RhbmNlIiwic2hvd0Zvcm1NZXNzYWdlIiwic2hvd0ZpZWxkTWVzc2FnZSIsInNob3dGaWVsZHNNZXNzYWdlcyIsInNob3dNZXNzYWdlcyIsInJlbW92ZU1lc3NhZ2UiLCJwcm9jZXNzQW5zd2VyIiwiYW5zd2VyIiwic2hvd1Vua25vd24iLCJzZXRGaWVsZFZhbHVlcyIsInZhbHVlcyIsImVsIiwic2ZTZXRWYWx1ZSIsImNoZWNrZWQiLCJBcnJheSIsImlzQXJyYXkiLCJpbmRleE9mIiwiZW51bWVyYXRlRmllbGROYW1lcyIsImxvZyIsIm1hcCIsImdldEF0dHJpYnV0ZSIsIm9wdENhbGxiYWNrIiwiZm4iLCJldmFsIiwiY2FsbCIsInNlbmRPcHRpb25zIiwidGhhdCIsImFqYXgiLCJ0aGVuIiwiRm9ybVRvT2JqZWN0Iiwic2V0T3B0aW9ucyIsIm9wdCIsImFkZCIsIkRPTU5vZGUiLCJldmVudFR5cGUiLCJldmVudEZ1bmN0aW9uIiwiZGllIiwicmVtb3ZlQWxsIiwicmVxdWlyZSIsImRlZmF1bHQiLCJ0ZW1wbGF0ZSIsImNsb3NlIiwicGxhY2UiLCJsZXZlbHMiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJzZWxlY3RvciIsImZpZWxkIiwiZmllbGRFbGVtZW50IiwiZmllbGRUZW1wbGF0ZSIsImZpZWxkUGxhY2UiLCJmaWVsZENsYXNzZXMiLCJtZXNzYWdlIiwiZGVidWciLCJub3RpY2UiLCJkYW5nZXIiLCJjcml0aWNhbCIsImFsZXJ0IiwiZW1lcmdlbmN5IiwicHJlcGFyZU1lc3NhZ2VPYmplY3QiLCJ0ZXh0IiwibW9kdWxlIiwiZXhwb3J0cyIsImlzTXNnIiwia2V5cyIsImZvckVhY2giLCJlcnJvcnMiLCJ3YXJuaW5ncyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJfbWVzc2FnZXMiLCJtIiwiY2xvc2VIYW5kbGVyIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZmllbGRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzcGxpY2UiLCJwYXJlbnQiLCJ0cGwiLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJyZXBsYWNlIiwidHBsRWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm1zZ0VsIiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicHVzaCIsImlzQ29udGFpbmVyIiwiZG9tVG9vbHMiLCJjbG9zZXN0IiwiY3VycmVudE1zZ0VsIiwibmV4dFNpYmxpbmciLCJmaWVsZENsb3NlIiwibm90Rm91bmQiLCJtc2dPYmoiLCJjb250YWluZXIiLCJmb3JtUmVmIiwia2V5UmVnZXgiLCIkZm9ybSIsIiRmb3JtRWxlbWVudHMiLCJmb3JtT2JqIiwic2V0Rm9ybSIsInNldEZvcm1FbGVtZW50cyIsInNldEZvcm1PYmoiLCJnZXRFbGVtZW50QnlJZCIsImlzRG9tTm9kZSIsIm5vZGVUeXBlIiwiYXJyIiwiY2FsbGJhY2siLCJpIiwiYWRkQ2hpbGQiLCJyZXN1bHQiLCJkb21Ob2RlIiwibm9kZU5hbWUiLCJET01jaGlsZHMiLCJjaGlsZCIsInRlc3QiLCJkaXNhYmxlZCIsIm1hdGNoIiwicmVnaXN0ZXJJbnN0YW5jZVR5cGUiLCJmaW5kTm9kZXMiLCJuYW1lcyIsInByZWZpeCIsInBhcnRPZlNlbGVjdG9yIiwidG9TdHJpbmciLCJzZWwiLCJub2RlcyIsIm1heCIsIm9iaiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLCtHQUFzRDtBQUNo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RUFBaUJiLFFBQWpCLEVBQTJCYyxNQUEzQixDQUFUOztBQUNBLE1BQUk3QixRQUFRLENBQUNsSCxNQUFULEtBQW9CLENBQXhCLEVBQTJCLENBQ3pCO0FBQ0E7QUFDRDs7QUFDRCxTQUFPa0gsUUFBUDtBQUNELENBUkQ7O0FBVUExQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4SCxhQUFqQixDOzs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMsNkpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDRKQUE0RTs7QUFFOUc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLGtFIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyb290W1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiW2RhdGEtZm9ybS1tZXNzYWdlXSB+IFtkYXRhLWZvcm0taGludF0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlzLWludmFsaWRbZGF0YS1tZXNzYWdlLXBsYWNlaG9sZGVyXT4uaW52YWxpZC1mZWVkYmFjayxcXG4uaXMtaW52YWxpZFtkYXRhLWZpZWxkXT4uaW52YWxpZC1mZWVkYmFjayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIltkYXRhLWZvcm0tbWVzc2FnZV0gfiBbZGF0YS1mb3JtLWhpbnRdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pcy1pbnZhbGlkW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcl0+LmludmFsaWQtZmVlZGJhY2ssXFxuLmlzLWludmFsaWRbZGF0YS1maWVsZF0+LmludmFsaWQtZmVlZGJhY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgY29yZSBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XG5cbmltcG9ydCBGb3JtVG9PYmplY3QgZnJvbSAnLi9mb3JtVG9PYmplY3QnO1xuaW1wb3J0IGZvcm1NZXNzYWdlcyBmcm9tICcuL2Zvcm1NZXNzYWdlcyc7XG5pbXBvcnQgaXRlcmF0ZUlucHV0cyBmcm9tICcuL2l0ZXJhdGVJbnB1dHMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmxldCBpZENvdW50ZXIgPSAxO1xuXG5cbi8qKlxuICogU3BpcmFsIEZvcm1zXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICogQGNvbnN0cnVjdG9yIEZvcm1cbiAqIEBleHRlbmRzIEJhc2VET01Db25zdHJ1Y3RvclxuICovXG5jb25zdCBGb3JtID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuX2NvbnN0cnVjdChzZiwgbm9kZSwgb3B0aW9ucyk7XG59O1xuXG5cbi8qKlxuICogQGxlbmRzIHNmLkZvcm0ucHJvdG90eXBlXG4gKi9cbkZvcm0ucHJvdG90eXBlID0gY29yZS5jcmVhdGVNb2R1bGVQcm90b3R5cGUoKTtcblxuLyoqXG4gKiBOYW1lIHRvIHJlZ2lzdGVyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Gb3JtLnByb3RvdHlwZS5uYW1lID0gJ2Zvcm0nO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FsbCBvbiBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAcHJpdmF0ZVxuICovXG5Gb3JtLnByb3RvdHlwZS5fY29uc3RydWN0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzZiwgbm9kZSwgb3B0aW9ucyk7XG4gIHRoaXMub3B0aW9ucy5qc29uT25seSA9IHRoaXMub3B0aW9ucy5qc29uT25seSAmJiAhIXdpbmRvdy5Gb3JtRGF0YTtcbiAgdGhpcy5taXhNZXNzYWdlc09wdGlvbnMoKTtcbiAgLy8gdGhpcy5vcHRpb25zLmZpbGxGcm9tICYmIHRoaXMuZmlsbEZpZWxkc0Zyb20oKTsgLy8gaWQgcmVxdWlyZWQgdG8gZmlsbCBmb3JtXG5cbiAgLyoqXG4gICAgICogQGV4dGVuZHMgRE9NRXZlbnRzXG4gICAgICogQHR5cGUge0RPTUV2ZW50c31cbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqICovXG4gIHRoaXMuRE9NRXZlbnRzID0gbmV3IHRoaXMuc2YuaGVscGVycy5ET01FdmVudHMoKTtcbiAgdGhpcy5hZGRFdmVudHMoKTtcblxuICB0aGlzLmV2ZW50cyA9IG5ldyB0aGlzLnNmLmNvcmUuRXZlbnRzKFsnYmVmb3JlU2VuZCcsICdzdWNjZXNzJywgJ2Vycm9yJywgJ2Fsd2F5cyddKTtcbiAgY29yZS5pdGVyYXRlSW5wdXRzID0gaXRlcmF0ZUlucHV0cztcbn07XG5cbi8qKlxuICogQG92ZXJyaWRlXG4gKiBAaW5oZXJpdERvY1xuICogQGVudW0ge09iamVjdH1cbiAqIEBkZXByZWNhdGVkXG4gKi9cbkZvcm0ucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7XG4gIC8qKlxuICAgICAqIExpbmsgdG8gZm9ybVxuICAgICAqL1xuICBjb250ZXh0OiB7XG4gICAgcHJvY2Vzc29yKG5vZGUpIHsgLy8gUHJvY2Vzc29yXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBMaW5rIHRvICd0aGlzJ1xuICAgICAqL1xuICBzZWxmOiB7XG4gICAgcHJvY2Vzc29yKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgfSxcbiAgaWQ6IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICB2YWx1ZTogYGZvcm06JHtpZENvdW50ZXIrK31gLFxuICAgIGRvbUF0dHI6ICdpZCcsXG4gIH0sXG4gIC8qKlxuICAgICAqIFVSTCB0byBzZW5kIGZvcm0gKGlmIGFqYXggZm9ybSkgPGI+RGVmYXVsdDogXCIvXCI8L2I+XG4gICAgICovXG4gIHVybDoge1xuICAgIGRvbUF0dHI6ICdhY3Rpb24nLFxuICAgIHZhbHVlOiAnLycsXG4gIH0sXG4gIC8qKlxuICAgICAqIE1ldGhvZCB0byBzZW5kIHRvIHNlbmQgZm9ybSAoaWYgYWpheCBmb3JtKSA8Yj5EZWZhdWx0OiBcIlBPU1RcIjwvYj5cbiAgICAgKi9cbiAgbWV0aG9kOiB7XG4gICAgZG9tQXR0cjogJ21ldGhvZCcsXG4gICAgdmFsdWU6ICdQT1NUJyxcbiAgfSxcbiAgLyoqXG4gICAgICogSWYgYW55IGlucHV0IGNoYW5nZXMgc2hvdWxkIHRyaWdnZXIgZm9ybSBzdWJtaXRcbiAgICAgKiBWYWx1ZSBpcyBkZWJvdW5jZSB2YWx1ZVxuICAgICAqL1xuICBpbW1lZGlhdGU6IHtcbiAgICBkb21BdHRyOiAnZGF0YS1pbW1lZGlhdGUnLFxuICAgIHZhbHVlOiBmYWxzZSxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsKSB7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuICt2YWw7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogTG9jayB0eXBlIHdoZW4gZm9ybSBzZW5kaW5nIDxiPkRlZmF1bHQ6IFwiZGVmYXVsdFwiPC9iPiBAc2VlIHNmLmxvY2tcbiAgICAgKi9cbiAgbG9ja1R5cGU6IHtcbiAgICB2YWx1ZTogJ2RlZmF1bHQnLFxuICAgIGRvbUF0dHI6ICdkYXRhLWxvY2stdHlwZScsXG4gIH0sXG4gIC8qKlxuICAgICAqIEZvcmNlIHRvIG5vdCB1c2UgRm9ybURhdGEgZXZlbiBpZiBpdCdzIGF2YWlsYWJsZVxuICAgICAqL1xuICBqc29uT25seToge1xuICAgIHZhbHVlOiBmYWxzZSxcbiAgICBkb21BdHRyOiAnZGF0YS1qc29uLW9ubHknLFxuICB9LFxuICAvKipcbiAgICAgKlxuICAgICAqL1xuICBtZXNzYWdlc1R5cGU6IHtcbiAgICB2YWx1ZTogJ3NwaXJhbCcsXG4gICAgZG9tQXR0cjogJ2RhdGEtbWVzc2FnZXMtdHlwZScsXG4gIH0sXG4gIC8qKlxuICAgICAqIFBhc3MgY3VzdG9tIHRlbXBsYXRlIGZvciBmb3JtIG1lc3NhZ2VzXG4gICAgICovXG4gIG1lc3NhZ2VzOiB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRvbUF0dHI6ICdkYXRhLW1lc3NhZ2VzJyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsLCBzZWxmKSB7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKHZhbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtIEpTT04ucGFyc2UgZXJyb3I6ICcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzZWxmLnZhbHVlLCB2YWwpO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIFVzZSBhamF4IHRvIHN1Ym1pdCBmb3JtIDxiPkRlZmF1bHQ6IHRydWU8L2I+XG4gICAgICovXG4gIHVzZUFqYXg6IHsgLy8gQXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogdHJ1ZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLXVzZS1hamF4JyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsKSB7IC8vIHByb2Nlc3NvciB0byBwcm9jZXNzIGRhdGEgYmVmb3JlIHJldHVyblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgdmFsID0gKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkgPyB2YWwudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogQ2FsbGJhY2sgYWZ0ZXIgZm9ybSBzdWJtaXR0aW5nIDxiPkRlZmF1bHQ6IGZhbHNlPC9iPlxuICAgICAqIDxici8+XG4gICAgICogPGI+IEV4YW1wbGUgPC9iPlxuICAgICAqIGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgICAqICAvL29wdGlvbnMgY29udGFpbnMgYWxsIG9wdGlvbnMgYWZ0ZXIgc2VuZFxuICAgICAqIH1cbiAgICAgKi9cbiAgYWpheENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtY2FsbGJhY2snLFxuICB9LFxuICBiZWZvcmVTdWJtaXRDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWJlZm9yZS1zdWJtaXQnLFxuICB9LFxuICBhZnRlclN1Ym1pdENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtYWZ0ZXItc3VibWl0JyxcbiAgfSxcbiAgaGVhZGVyczogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiB7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1oZWFkZXJzJyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsLCBzZWxmKSB7XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09IG51bGwpIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybSBKU09OLnBhcnNlIGVycm9yOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZi52YWx1ZSwgdmFsKTtcbiAgICB9LFxuICB9LFxufTtcblxuRm9ybS5wcm90b3R5cGUubWl4TWVzc2FnZXNPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnbG9iYWwgPSB0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzLmZvcm07XG4gIHRoaXMub3B0aW9ucy5tZXNzYWdlcyA9IHtcbiAgICAuLi5mb3JtTWVzc2FnZXMuZGVmYXVsdHMsXG4gICAgLi4uZ2xvYmFsICYmIGdsb2JhbC5tZXNzYWdlcyAmJiBnbG9iYWwubWVzc2FnZXNbdGhpcy5vcHRpb25zLm1lc3NhZ2VzVHlwZV0sXG4gICAgLi4udGhpcy5vcHRpb25zLm1lc3NhZ2VzLFxuICB9O1xufTtcblxuRm9ybS5wcm90b3R5cGUub25EZWJvdW5jZWRTdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAodGhpcy5zZi5nZXRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICAvLyBPbiBsb2NrIHdlIHNob3VsZCduIGRvIGFueSBhY3Rpb25zXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5pbW1lZGlhdGUpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fc3VibWl0VGltZW91dCk7XG4gICAgdGhpcy5fc3VibWl0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vblN1Ym1pdChlKTtcbiAgICB9LCB0aGlzLm9wdGlvbnMuaW1tZWRpYXRlKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBDYWxsIG9uIGZvcm0gc3VibWl0XG4gKiBAcGFyYW0ge0V2ZW50fSBlIHN1Ym1pdCBldmVudFxuICovXG5Gb3JtLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICh0aGlzLnNmLmdldEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xuICAgIC8vIE9uIGxvY2sgd2Ugc2hvdWxkJ24gZG8gYW55IGFjdGlvbnNcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgdGhpcy5vcHRpb25zLmRhdGEgPSB0aGlzLmdldEZvcm1EYXRhKCk7XG5cbiAgLy8gV2UgY2FuIHNlbmQgZmlsZXMgb25seSB3aXRoIEZvcm1EYXRhXG4gIC8vIElmIGZvcm0gY29udGFpbiBmaWxlcyBhbmQgbm8gRm9ybURhdGEgdGhhbiBkaXNhYmxlIGFqYXhcbiAgaWYgKCF0aGlzLm9wdGlvbnMuanNvbk9ubHkgJiYgdGhpcy5vcHRpb25zLmNvbnRleHQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2ZpbGUnXVwiKS5sZW5ndGggIT09IDApIHtcbiAgICB0aGlzLm9wdGlvbnMudXNlQWpheCA9IGZhbHNlO1xuICB9XG4gIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ2JlZm9yZVNlbmQnLCB0aGlzLm9wdGlvbnMpO1xuICAvLyBzZi5ldmVudHMucGVyZm9ybUFjdGlvbihcImJlZm9yZVN1Ym1pdFwiLCB0aGlzLm9wdGlvbnMpO1xuICAvLyB0aGlzLmV2ZW50cy5wZXJmb3JtQWN0aW9uKFwiYmVmb3JlU3VibWl0XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy51c2VBamF4KSB7XG4gICAgdGhpcy5zZW5kKHRoaXMub3B0aW9ucyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBMb2NrZXIuIEFkZCBvciByZW1vdmUuXG4gKi9cbkZvcm0ucHJvdG90eXBlLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxvY2sgPSB0aGlzLnNmLmFkZEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlLCB7IHR5cGU6IHRoaXMub3B0aW9ucy5sb2NrVHlwZSB9KTtcbiAgaWYgKCFsb2NrKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byBhZGQgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBhbHJlYWR5IHN0YXJ0ZWRcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMub3B0aW9ucy5vblByb2dyZXNzID0gbG9jay5wcm9ncmVzcztcbn07XG5cbi8qKlxuICogTG9ja2VyLiBBZGQgb3IgcmVtb3ZlLlxuICovXG5Gb3JtLnByb3RvdHlwZS51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJZb3UgdHJ5IHRvIHJlbW92ZSAnbG9jaycgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBzdGFydGVkXCIpO1xuICB9XG59O1xuXG4vLyBGb3JtIG1lc3NhZ2VzXG5Gb3JtLnByb3RvdHlwZS5zaG93Rm9ybU1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMuc2hvd0Zvcm1NZXNzYWdlO1xuRm9ybS5wcm90b3R5cGUuc2hvd0ZpZWxkTWVzc2FnZSA9IGZvcm1NZXNzYWdlcy5zaG93RmllbGRNZXNzYWdlO1xuRm9ybS5wcm90b3R5cGUuc2hvd0ZpZWxkc01lc3NhZ2VzID0gZm9ybU1lc3NhZ2VzLnNob3dGaWVsZHNNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnNob3dNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5zaG93TWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5yZW1vdmVNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnJlbW92ZU1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMucmVtb3ZlTWVzc2FnZTtcblxuRm9ybS5wcm90b3R5cGUucHJvY2Vzc0Fuc3dlciA9IGZ1bmN0aW9uIChhbnN3ZXIsIHNob3dVbmtub3duID0gdHJ1ZSkge1xuICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzVHlwZSkge1xuICAgIHRoaXMuc2hvd01lc3NhZ2VzKGFuc3dlciwgc2hvd1Vua25vd24pO1xuICB9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5zZXRGaWVsZFZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgdGhpcy5zZi5pdGVyYXRlSW5wdXRzKHRoaXMubm9kZSwgdmFsdWVzLCAoZWwsIHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlbC5zZlNldFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5zZlNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBpZiAoIWVsLnZhbHVlKSB7IC8vIHNpbmdsZSBjaGVja2JveFxuICAgICAgICAgIGVsLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXEsbWF4LWxlblxuICAgICAgICAgIGVsLmNoZWNrZWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/ICh2YWx1ZS5pbmRleE9mKGVsLnZhbHVlKSA+PSAwKSA6IChlbC52YWx1ZSA9PSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7IC8vIFRPRE86IFRoYXQgd29udCB3b3JrIGZvciByYWRpb2dyb3VwcywgZXRjLlxuICAgIH1cbiAgfSk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5lbnVtZXJhdGVGaWVsZE5hbWVzID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyh0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsc2VsZWN0LHRleHRhcmVhJykpO1xuICByZXR1cm4gWy4uLnRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnKV0ubWFwKChlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKCduYW1lJykpOyAvLyBUT0RPOiBzdXBwb3J0IGN1c3RvbSBpbnB1dHMgdG9vXG59O1xuXG5Gb3JtLnByb3RvdHlwZS5vcHRDYWxsYmFjayA9IGZ1bmN0aW9uIChvcHRpb25zLCB0eXBlKSB7XG4gIGlmIChvcHRpb25zW3R5cGVdKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcbiAgICBjb25zdCBmbiA9IGV2YWwob3B0aW9uc1t0eXBlXSk7XG4gICAgaWYgKHR5cGVvZiAoZm4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogU2VuZCBmb3JtIHRvIHNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IHNlbmRPcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoc2VuZE9wdGlvbnMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG4gIGlmICh0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYmVmb3JlU3VibWl0Q2FsbGJhY2snKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5sb2NrKCk7XG4gIHRoaXMuc2YuYWpheC5zZW5kKHNlbmRPcHRpb25zKS50aGVuKFxuICAgIChhbnN3ZXIpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBzZW5kT3B0aW9ucyk7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICB0aGF0LmV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LFxuICApLnRoZW4oKGFuc3dlcikgPT4ge1xuICAgIHRoYXQubG9jayh0cnVlKTtcbiAgICB0aGF0LnByb2Nlc3NBbnN3ZXIoYW5zd2VyKTtcbiAgICB0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYWZ0ZXJTdWJtaXRDYWxsYmFjaycpO1xuICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Fsd2F5cycsIHNlbmRPcHRpb25zKTtcbiAgfSk7XG5cbiAgLy8gVG8gY2FuY2VsIHJlcXVlc3Q6XG4gIC8vIGlmICh0aGlzLnNmLmFqYXguY2FuY2VsKSB0aGlzLnNmLmFqYXguY2FuY2VsKCk7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkZvcm0ucHJvdG90eXBlLmdldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5qc29uT25seSkge1xuICAgIHJldHVybiBuZXcgRm9ybURhdGEodGhpcy5vcHRpb25zLmNvbnRleHQpO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKGBGb3JtIFxcYCR7dGhpcy5vcHRpb25zLmNvbnRleHR9XFxgIHdlcmUgcHJvY2Vzc2VkIHdpdGhvdXQgRm9ybURhdGEuYCk7XG4gIHJldHVybiBuZXcgRm9ybVRvT2JqZWN0KHRoaXMub3B0aW9ucy5jb250ZXh0KTtcbn07XG5cbi8qKlxuICogU2V0IG9wdGlvbnMgKG92ZXJ3cml0ZSBjdXJyZW50KVxuICogQHBhcmFtIHtPYmplY3R9IG9wdCBvcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0KSB7XG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHQpO1xufTtcblxuLyoqXG4gKiBBZGQgYWxsIGV2ZW50cyBmb3IgZm9ybXNcbiAqL1xuRm9ybS5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLkRPTUV2ZW50cy5hZGQoW1xuICAgIHtcbiAgICAgIERPTU5vZGU6IHRoaXMub3B0aW9ucy5jb250ZXh0LFxuICAgICAgZXZlbnRUeXBlOiAnc3VibWl0JyxcbiAgICAgIGV2ZW50RnVuY3Rpb246IChlKSA9PiB7XG4gICAgICAgIHRoaXMub25TdWJtaXQoZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgRE9NTm9kZTogdGhpcy5vcHRpb25zLmNvbnRleHQsXG4gICAgICBldmVudFR5cGU6ICdjaGFuZ2UnLFxuICAgICAgZXZlbnRGdW5jdGlvbjogKGUpID0+IHtcbiAgICAgICAgdGhpcy5vbkRlYm91bmNlZFN1Ym1pdChlKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBET01Ob2RlOiB0aGlzLm9wdGlvbnMuY29udGV4dCxcbiAgICAgIGV2ZW50VHlwZTogJ2lucHV0JyxcbiAgICAgIGV2ZW50RnVuY3Rpb246IChlKSA9PiB7XG4gICAgICAgIHRoaXMub25EZWJvdW5jZWRTdWJtaXQoZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0pO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgdmFyaWFibGVzIGFuZCBkaWVcbiAqL1xuRm9ybS5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLkRPTUV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgLy8gVE9ETyBkb24ndCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCdzIGFkZG9ucyBhbmQgcGx1Z2lucz9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJykuZGVmYXVsdDtcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIC8vIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImFsZXJ0IGZvcm0tbXNnICR7dHlwZX1cIj48YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlXCI+w5c8L2J1dHRvbj48cCBjbGFzcz1cIm1zZ1wiPiR7dGV4dH08L3A+PC9kaXY+JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtJHt0eXBlfSBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dcIiByb2xlPVwiYWxlcnRcIj4nXG4gICAgKyAnJHt0ZXh0fSdcbiAgICArICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4nXG4gICAgKyAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nXG4gICAgKyAnPC9idXR0b24+J1xuICAgICsgJzwvZGl2PicsXG4gIGNsb3NlOiAnLmNsb3NlJyxcbiAgcGxhY2U6ICdib3R0b20nLFxuICBsZXZlbHM6IHtcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsIGluZm86ICdpbmZvJywgd2FybmluZzogJ3dhcm5pbmcnLCBlcnJvcjogJ2RhbmdlcicsXG4gIH0sXG4gIHNlbGVjdG9yOiAnW2RhdGEtbWVzc2FnZV0nLFxuICBmaWVsZDogJ1tkYXRhLWZpZWxkXScsXG4gIGZpZWxkRWxlbWVudDogJ1tkYXRhLWlucHV0XScsXG4gIGZpZWxkVGVtcGxhdGU6ICc8ZGl2IGRhdGEtbWVzc2FnZSBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIiBkYXRhLWZvcm0tbWVzc2FnZT4ke3RleHR9PC9kaXY+JyxcbiAgZmllbGRQbGFjZTogJ2JvdHRvbScsXG4gIGZpZWxkQ2xhc3Nlczoge1xuICAgIHN1Y2Nlc3M6ICdpcy12YWxpZCcsIGluZm86ICdpcy12YWxpZCcsIHdhcm5pbmc6ICdpcy1pbnZhbGlkJywgZXJyb3I6ICdpcy1pbnZhbGlkJyxcbiAgfSxcbn07XG5cbi8vIE9mdGVuIHVzZWQgYWxpYXNcbmRlZmF1bHRzLmxldmVscy5tZXNzYWdlID0gZGVmYXVsdHMubGV2ZWxzLnN1Y2Nlc3M7XG5cbi8vIE90aGVyIGFsaWFzZXNcbi8vIFBTUi0zIHNldmVyaXR5IGxldmVscyBtYXBwaW5nIChkZWJ1ZywgaW5mbywgbm90aWNlLCB3YXJuaW5nLCBlcnJvciwgY3JpdGljYWwsIGFsZXJ0LCBlbWVyZ2VuY3kpXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGhwLWZpZy9maWctc3RhbmRhcmRzL2Jsb2IvbWFzdGVyL2FjY2VwdGVkL1BTUi0zLWxvZ2dlci1pbnRlcmZhY2UubWRcbmRlZmF1bHRzLmxldmVscy5kZWJ1ZyA9IGRlZmF1bHRzLmxldmVscy5zdWNjZXNzO1xuZGVmYXVsdHMubGV2ZWxzLmluZm8gPSBkZWZhdWx0cy5sZXZlbHMubm90aWNlID0gZGVmYXVsdHMubGV2ZWxzLmluZm87XG5kZWZhdWx0cy5sZXZlbHMuZGFuZ2VyID0gZGVmYXVsdHMubGV2ZWxzLmNyaXRpY2FsID0gZGVmYXVsdHMubGV2ZWxzLmFsZXJ0ID0gZGVmYXVsdHMubGV2ZWxzLmVtZXJnZW5jeSA9IGRlZmF1bHRzLmxldmVscy5lcnJvcjtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHByZXBhcmVNZXNzYWdlT2JqZWN0KG1lc3NhZ2UsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSAnb2JqZWN0Jykge1xuICAgIG1lc3NhZ2UgPSB7IHRleHQ6IG1lc3NhZ2UsIHR5cGUgfTtcbiAgfVxuICBtZXNzYWdlLnRleHQgPSBtZXNzYWdlLnRleHQgfHwgbWVzc2FnZS5tZXNzYWdlIHx8IG1lc3NhZ2U7XG4gIG1lc3NhZ2UudHlwZSA9IG1lc3NhZ2UudHlwZSB8fCB0eXBlO1xuICByZXR1cm4gbWVzc2FnZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmF1bHRzLFxuICBzaG93TWVzc2FnZXMoYW5zd2VyLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgICBpZiAoIWFuc3dlcikgcmV0dXJuO1xuXG4gICAgbGV0IGlzTXNnID0gZmFsc2U7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAoYW5zd2VyLmRhdGEpIHtcbiAgICAgIC8vIGZvciAoY29uc3QgdHlwZSBpbiB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzKS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGlmIChhbnN3ZXIuZGF0YVt0eXBlXSkge1xuICAgICAgICAgIHRoaXMuc2hvd0Zvcm1NZXNzYWdlKGFuc3dlci5kYXRhW3R5cGVdLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzW3R5cGVdKTtcbiAgICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYW5zd2VyLmRhdGEubWVzc2FnZXMpIHtcbiAgICAgICAgdGhpcy5zaG93RmllbGRzTWVzc2FnZXMoYW5zd2VyLmRhdGEubWVzc2FnZXMsICdzdWNjZXNzJywgc2hvd1Vua25vd24pO1xuICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoYW5zd2VyLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLmVycm9ycywgJ2Vycm9yJywgc2hvd1Vua25vd24pO1xuICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoYW5zd2VyLmRhdGEud2FybmluZ3MpIHtcbiAgICAgICAgdGhpcy5zaG93RmllbGRzTWVzc2FnZXMoYW5zd2VyLmRhdGEud2FybmluZ3MsICd3YXJuaW5nJywgc2hvd1Vua25vd24pO1xuICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc01zZykge1xuICAgICAgbGV0IGVycm9yO1xuICAgICAgaWYgKCFhbnN3ZXIuc3RhdHVzKSB7IC8vIE5ldHdvcmsuZXJyb3JcbiAgICAgICAgZXJyb3IgPSBhbnN3ZXI7XG4gICAgICB9IGVsc2UgaWYgKGFuc3dlci5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgZXJyb3IgPSBhbnN3ZXIuc3RhdHVzID8gYCR7YW5zd2VyLnN0YXR1c30gYCA6ICcnO1xuICAgICAgICBlcnJvciArPSBhbnN3ZXIuc3RhdHVzVGV4dCA/IGFuc3dlci5zdGF0dXNUZXh0IDogJyc7XG4gICAgICAgIGVycm9yICs9IGFuc3dlci5kYXRhICYmICFhbnN3ZXIuc3RhdHVzVGV4dCA/IGFuc3dlci5kYXRhIDogJyc7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IpIHRoaXMuc2hvd0Zvcm1NZXNzYWdlKGVycm9yLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzLmVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tZXNzYWdlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBpZiAobS5jbG9zZSkge1xuICAgICAgICBtLmNsb3NlSGFuZGxlciA9IHRoYXQucmVtb3ZlTWVzc2FnZS5iaW5kKHRoYXQsIG0pO1xuICAgICAgICBtLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbS5jbG9zZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZU1lc3NhZ2UobSwgZSkge1xuICAgIGlmIChtLmNsb3NlKSB7XG4gICAgICBtLmNsb3NlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbS5jbG9zZUhhbmRsZXIpO1xuICAgIH1cbiAgICBtLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobS5lbCk7XG4gICAgaWYgKG0uZmllbGQpIHtcbiAgICAgIGNvbnN0IGZpZWxkRWwgPSBtLmZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkRWxlbWVudCk7XG4gICAgICBpZiAoZmllbGRFbCkge1xuICAgICAgICBmaWVsZEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1ttLnR5cGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG0uZmllbGQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW20udHlwZV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZSkge1xuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VzLnNwbGljZSh0aGlzLl9tZXNzYWdlcy5pbmRleE9mKG0pLCAxKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlTWVzc2FnZXMoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX21lc3NhZ2VzKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIHRoYXQucmVtb3ZlTWVzc2FnZShtLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhhdC5fbWVzc2FnZXMgPSBbXTtcbiAgfSxcblxuICBzaG93Rm9ybU1lc3NhZ2UobWVzc2FnZSwgdHlwZSkge1xuICAgIGxldCBwYXJlbnQ7XG4gICAgbGV0IHRwbCA9IHRoaXMub3B0aW9ucy5tZXNzYWdlcy50ZW1wbGF0ZTtcblxuICAgIG1lc3NhZ2UgPSBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKTtcblxuICAgIC8vIGZvciAoY29uc3QgaXRlbSBpbiBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc093blByb3BlcnR5KGl0ZW0pKSByZXR1cm47XG4gICAgICB0cGwgPSB0cGwucmVwbGFjZShgXFwkeyR7aXRlbX19YCwgbWVzc2FnZVtpdGVtXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cGxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHBsRWxlbS5pbm5lckhUTUwgPSB0cGw7XG4gICAgY29uc3QgbXNnRWwgPSB0cGxFbGVtLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlID09PSAnYm90dG9tJykge1xuICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMubm9kZS5pbnNlcnRCZWZvcmUobXNnRWwsIHRoaXMubm9kZS5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZXMucHVzaCh7IGVsOiBtc2dFbCwgY2xvc2U6IG1zZ0VsLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmNsb3NlKSB9KTtcbiAgfSxcblxuICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpc0NvbnRhaW5lcl1cbiAgICAgKi9cbiAgc2hvd0ZpZWxkTWVzc2FnZShlbCwgbWVzc2FnZSwgdHlwZSwgaXNDb250YWluZXIpIHtcbiAgICBsZXQgZmllbGQgPSBpc0NvbnRhaW5lciA/IGVsIDogc2YuaGVscGVycy5kb21Ub29scy5jbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGQpO1xuICAgIGxldCB0cGwgPSB0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRUZW1wbGF0ZTtcblxuICAgIGlmICghZmllbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSk7XG5cbiAgICBjb25zdCBmaWVsZEVsID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRFbGVtZW50KTtcbiAgICBjb25zdCBjdXJyZW50TXNnRWwgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5zZWxlY3Rvcik7XG5cbiAgICBpZiAoZmllbGRFbCkge1xuICAgICAgZmllbGRFbC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbdHlwZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbdHlwZV0pO1xuICAgIH1cblxuICAgIC8vIGZvciAoY29uc3QgaXRlbSBpbiBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc093blByb3BlcnR5KGl0ZW0pKSByZXR1cm47XG4gICAgICB0cGwgPSB0cGwucmVwbGFjZShgXFwkeyR7aXRlbX19YCwgbWVzc2FnZVtpdGVtXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cGxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHBsRWxlbS5pbm5lckhUTUwgPSB0cGw7XG4gICAgY29uc3QgbXNnRWwgPSB0cGxFbGVtLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkUGxhY2UgPT09ICdib3R0b20nKSB7XG4gICAgICBpZiAoZmllbGRFbCkge1xuICAgICAgICBmaWVsZC5pbnNlcnRCZWZvcmUobXNnRWwsIGZpZWxkRWwubmV4dFNpYmxpbmcpO1xuICAgICAgfSBlbHNlIGlmICghY3VycmVudE1zZ0VsKSB7XG4gICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlID09PSAndG9wJykge1xuICAgICAgZmllbGQuaW5zZXJ0QmVmb3JlKG1zZ0VsLCBmaWVsZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlKTtcbiAgICAgIGZpZWxkLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tZXNzYWdlcy5wdXNoKHtcbiAgICAgIGVsOiBtc2dFbCxcbiAgICAgIGNsb3NlOiBtc2dFbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsb3NlKSxcbiAgICAgIGZpZWxkLFxuICAgICAgdHlwZSxcbiAgICB9KTtcbiAgfSxcblxuICBzaG93RmllbGRzTWVzc2FnZXMobWVzc2FnZXMsIHR5cGUsIHNob3dVbmtub3duID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IG5vdEZvdW5kID0gc2YuaXRlcmF0ZUlucHV0cyh0aGlzLm5vZGUsIG1lc3NhZ2VzLCAoZWwsIG1lc3NhZ2UpID0+IHtcbiAgICAgIHRoYXQuc2hvd0ZpZWxkTWVzc2FnZShlbCwgbWVzc2FnZSwgdHlwZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc2hvd1Vua25vd24pIHtcbiAgICAgIG5vdEZvdW5kLmZvckVhY2goKG1zZ09iaikgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhtc2dPYmopLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGF0Lm5vZGUucXVlcnlTZWxlY3RvcihgW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcj1cIiR7bmFtZX1cIl1gKTtcbiAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGNoZWNrIGNvbnRhaW5lci5kYXRhc2V0Lm1lc3NhZ2VWYXJpYW50PyB2YXJpYW50cyBhcmUgXCJmaWVsZFwiIGFuZCBcImZvcm1cIlxuICAgICAgICAgICAgdGhhdC5zaG93RmllbGRNZXNzYWdlKGNvbnRhaW5lciwgbXNnT2JqW25hbWVdLCB0eXBlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qXG4gKiBnaXRodWIuY29tL3NlcmJhbmdoaXRhL0Zvcm1Ub09iamVjdC5qcyAxLjAuMSAgKGMpIDIwMTMgU2VyYmFuIEdoaXRhIDxzZXJiYW5naGl0YUBnbWFpbC5jb20+XG4gKiBAbGljZW5jZSBNSVRcbiAqL1xuLy8gQ29uc3RydWN0b3IuXG5cbmNvbnN0IEZvcm1Ub09iamVjdCA9IGZ1bmN0aW9uIChmb3JtUmVmKSB7XG4gIGlmICghZm9ybVJlZikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuZm9ybVJlZiA9IGZvcm1SZWY7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB0aGlzLmtleVJlZ2V4ID0gL1teXFxbXFxdXSsvZztcbiAgdGhpcy4kZm9ybSA9IG51bGw7XG4gIHRoaXMuJGZvcm1FbGVtZW50cyA9IFtdO1xuICB0aGlzLmZvcm1PYmogPSB7fTtcblxuICBpZiAoIXRoaXMuc2V0Rm9ybSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICghdGhpcy5zZXRGb3JtRWxlbWVudHMoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnNldEZvcm1PYmooKTtcbn07XG5cbi8vIFNldCB0aGUgbWFpbiBmb3JtIG9iamVjdCB3ZSBhcmUgd29ya2luZyBvbi5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoICh0eXBlb2YgdGhpcy5mb3JtUmVmKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHRoaXMuJGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZvcm1SZWYpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHRoaXMuaXNEb21Ob2RlKHRoaXMuZm9ybVJlZikpIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9IHRoaXMuZm9ybVJlZjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgfVxuXG4gIHJldHVybiB0aGlzLiRmb3JtO1xufTtcblxuLy8gU2V0IHRoZSBlbGVtZW50cyB3ZSBuZWVkIHRvIHBhcnNlLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5zZXRGb3JtRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuJGZvcm1FbGVtZW50cyA9IHRoaXMuJGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgcmV0dXJuIHRoaXMuJGZvcm1FbGVtZW50cy5sZW5ndGg7XG59O1xuXG4vLyBDaGVjayB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUwgbm9kZS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuaXNEb21Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgcmV0dXJuIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiAnbm9kZVR5cGUnIGluIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8vIEl0ZXJhdGlvbiB0aHJvdWdoIGFycmF5cyBhbmQgb2JqZWN0cy4gQ29tcGF0aWJsZSB3aXRoIElFLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGFyciwgY2FsbGJhY2spIHtcbiAgaWYgKFtdLmZvckVhY2gpIHtcbiAgICBbXS5mb3JFYWNoLmNhbGwoYXJyLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbGV0IGk7XG4gIC8vIGZvciAoaSBpbiBhcnIpIHtcbiAgT2JqZWN0LmtleXMoYXJyKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgLy8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSBpbnN0ZWFkIG9mIGFyci5oYXNPd25Qcm9wZXJ0eSBmb3IgSUU4IGNvbXBhdGliaWxpdHkuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcnIsIGkpKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKGFyciwgYXJyW2ldKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gUmVjdXJzaXZlIG1ldGhvZCB0aGF0IGFkZHMga2V5cyBhbmQgdmFsdWVzIG9mIHRoZSBjb3JyZXNwb25kaW5nIGZpZWxkcy5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAocmVzdWx0LCBkb21Ob2RlLCBrZXlzLCB2YWx1ZSkge1xuICAvLyAjMSAtIFNpbmdsZSBkaW1lbnNpb25hbCBhcnJheS5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gV2UncmUgb25seSBpbnRlcmVzdGVkIGluIHRoZSByYWRpbyB0aGF0IGlzIGNoZWNrZWQuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgZG9tTm9kZS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICBpZiAoZG9tTm9kZS5jaGVja2VkKSB7XG4gICAgICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tib3hlcyBhcmUgYSBzcGVjaWFsIGNhc2UuIFdlIGhhdmUgdG8gZ3JhYiBlYWNoIGNoZWNrZWQgdmFsdWVzXG4gICAgLy8gYW5kIHB1dCB0aGVtIGludG8gYW4gYXJyYXkuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgZG9tTm9kZS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBpZiAodmFsdWUpIHsgLy8gTG9va3MgbGlrZSBjaGVja2JveCBhcnJheVxuICAgICAgICBpZiAoIXJlc3VsdFtrZXlzXSkge1xuICAgICAgICAgIHJlc3VsdFtrZXlzXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb21Ob2RlLmNoZWNrZWQpIHtcbiAgICAgICAgICByZXN1bHRba2V5c10ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXlzXSA9IGRvbU5vZGUuY2hlY2tlZCA/IDEgOiAwOyAvLyBTaW5nbGUgY2hlY2tib3hcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIE11bHRpcGxlIHNlbGVjdCBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgICAvLyBXZSBoYXZlIHRvIGdyYWIgZWFjaCBzZWxlY3RlZCBvcHRpb24gYW5kIHB1dCB0aGVtIGludG8gYW4gYXJyYXkuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBpZiAoZG9tTm9kZS50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgICByZXN1bHRba2V5c10gPSBbXTtcbiAgICAgICAgY29uc3QgRE9NY2hpbGRzID0gZG9tTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb25bc2VsZWN0ZWRdJyk7IC8vIFRPRE86IHRoYXQgd29udCB3b3JrXG4gICAgICAgIGlmIChET01jaGlsZHMpIHtcbiAgICAgICAgICB0aGlzLmZvckVhY2goRE9NY2hpbGRzLCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXlzXS5wdXNoKGNoaWxkLnZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0ZWQgPSBkb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbltzZWxlY3RlZF0nKTtcbiAgICAgICAgcmVzdWx0W2tleXNdID0gdmFsdWU7IC8vIHNlbGVjdC52YWx1ZSBpc24ndCBnZXR0aW5nIHByb3BlciB2YWx1ZSBmb3IgdmFsdWUtbGVzcyBvcHRpb25zXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2suIFRoZSBkZWZhdWx0IG9uZSB0byBvbmUgYXNzaWduLlxuICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gIzIgLSBNdWx0aSBkaW1lbnNpb25hbCBhcnJheS5cbiAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgIGlmICghcmVzdWx0W2tleXNbMF1dKSB7XG4gICAgICByZXN1bHRba2V5c1swXV0gPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENoaWxkKHJlc3VsdFtrZXlzWzBdXSwgZG9tTm9kZSwga2V5cy5zcGxpY2UoMSwga2V5cy5sZW5ndGgpLCB2YWx1ZSk7XG4gIH1cblxuLy8gcmV0dXJuIHJlc3VsdDsgLy8gP1xufTtcbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybU9iaiA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRlc3Q7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy4kZm9ybUVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gSWdub3JlIHRoZSBlbGVtZW50IGlmIHRoZSAnbmFtZScgYXR0cmlidXRlIGlzIGVtcHR5LlxuICAgIC8vIElnbm9yZSB0aGUgJ2Rpc2FibGVkJyBlbGVtZW50cy5cbiAgICBpZiAodGhpcy4kZm9ybUVsZW1lbnRzW2ldLm5hbWUgJiYgIXRoaXMuJGZvcm1FbGVtZW50c1tpXS5kaXNhYmxlZCkge1xuICAgICAgdGVzdCA9IHRoaXMuJGZvcm1FbGVtZW50c1tpXS5uYW1lLm1hdGNoKHRoaXMua2V5UmVnZXgpO1xuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmZvcm1PYmosIHRoaXMuJGZvcm1FbGVtZW50c1tpXSwgdGVzdCwgdGhpcy4kZm9ybUVsZW1lbnRzW2ldLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5mb3JtT2JqO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtVG9PYmplY3Q7XG4iLCJcbmNvbnN0IHNmID0gcmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2NvcmUnKS5kZWZhdWx0O1xuY29uc3QgRm9ybSA9IHJlcXVpcmUoJy4vRm9ybScpLmRlZmF1bHQ7XG5cbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKEZvcm0sICdqcy1zZi1mb3JtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybTsgLy8gRVM2IGRlZmF1bHQgZXhwb3J0IHdpbGwgbm90IGV4cG9zZSB1cyBhcyBnbG9iYWxcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLy8gUGx1Z2luIGluIGZvcm1NZXNzYWdlcyB0byBpdGVyYXRlIGZvcm0gaW5wdXRzXG5cbi8vIFRPRE8gY29tbWVudCBhbGwgb2YgdGhpc1xuLy8gVE9ETyBhc2sgQFN5c3RlcnIgdGhlIHJlYXNvbiBvZiB2YXJpYWJsZSAncHJlZml4J1xubGV0IG5vdEZvdW5kID0gW107XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJlZml4XVxuICovXG5mdW5jdGlvbiBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpIHtcbiAgLy8gZm9yIChjb25zdCBuYW1lIGluIG5hbWVzKSB7XG4gIE9iamVjdC5rZXlzKG5hbWVzKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghbmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0T2ZTZWxlY3RvciA9IChwcmVmaXgpID8gYCR7cHJlZml4fVske25hbWV9XWAgOiBuYW1lO1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmFtZXNbbmFtZV0pO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYFtuYW1lPScke3BhcnRPZlNlbGVjdG9yfSddYDtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgICAgZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzW25hbWVdLCBjYWxsYmFjaywgcGFydE9mU2VsZWN0b3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzpcbiAgICAgICAgbmFtZXNbbmFtZV0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAvLyBUT0RPIHJlZmFjdG9yIHRoaXMgc2hvdWxkIGNhbGwgcmVjdXJzaXZlXG4gICAgICAgICAgY29uc3Qgc2VsID0gYFtuYW1lPScke3BhcnRPZlNlbGVjdG9yfVtdJ11bdmFsdWU9JyR7ZWx9J11gO1xuICAgICAgICAgIGNvbnN0IG5vZGVzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XG4gICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbm90Rm91bmQucHVzaChzZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbm9kZXMubGVuZ3RoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGVzW2ldLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgb2JqW3BhcnRPZlNlbGVjdG9yXSA9IG5hbWVzW25hbWVdO1xuICAgICAgICAgIG5vdEZvdW5kLnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbm9kZXMubGVuZ3RoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgICAgICBjYWxsYmFjayhub2Rlc1tpXSwgbmFtZXNbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKCd1bmtub3duIHR5cGUgLScsIHR5cGUsICcgYW5kIG1lc3NhZ2UnLCBuYW1lc1tuYW1lXSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gbmFtZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ByZWZpeF1cbiAqIEByZXR1cm4ge1N0cmluZ1tdfVxuICovXG5jb25zdCBpdGVyYXRlSW5wdXRzID0gZnVuY3Rpb24gKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KSB7XG4gIG5vdEZvdW5kID0gW107XG4gIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCk7XG4gIGlmIChub3RGb3VuZC5sZW5ndGggIT09IDApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIC8vIGNvbnNvbGUubG9nKCdTb21lIGVsZW1lbnQgbm90IGZvdW5kIGluIGZvcm0nLCBub3RGb3VuZCk7XG4gIH1cbiAgcmV0dXJuIG5vdEZvdW5kO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRlSW5wdXRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8tdXJsJnNvdXJjZU1hcCEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX187Il0sInNvdXJjZVJvb3QiOiIifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL2Fzc2VydC9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3NwbGl0LW9uLWZpcnN0L2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9hY3Rpb25wYW5lbC9BY3Rpb25QYW5lbC50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9kYXRhZ3JpZC9EYXRhZ3JpZC50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvZGF0YWdyaWQvRGF0YWdyaWRTdGF0ZS50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvZXh0cmFjdE9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL2luZGV4LnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcGFnaW5hdG9yL1BhZ2luYXRvci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL0dyaWRSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL2RlZmF1bHRCb2R5V3JhcHBlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL2RlZmF1bHRDZWxsUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0Rm9vdGVyV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL2RlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL1NGRGF0YUdyaWQvc3JjL3JlbmRlci9kZWZhdWx0SGVhZGVyV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL2RlZmF1bHRSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL2RlZmF1bHRSb3dXcmFwcGVyLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy9yZW5kZXIvZGVmYXVsdFRhYmxlV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vU0ZEYXRhR3JpZC9zcmMvcmVuZGVyL25vcm1hbGl6ZXJzLnRzIiwid2VicGFjazovLy9TRkRhdGFHcmlkL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly8vd2VicGFjazovU0ZEYXRhR3JpZC9leHRlcm5hbCBcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvaW5wdXQuanMiXSwibmFtZXMiOlsiY29yZSIsInJlcXVpcmUiLCJkZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsInNmIiwiSW5wdXQiLCJpbnN0YW5jZXNDb250cm9sbGVyIiwicmVnaXN0ZXJJbnN0YW5jZVR5cGUiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJCYXNlRE9NQ29uc3RydWN0b3IiLCJuYW1lIiwiaW5pdCIsInRvb2xzIiwiZXh0ZW5kIiwiZWxzIiwicHJlZml4Iiwic2V0UHJlZml4IiwiYWRkUHJlZml4RXZlbnRMaXN0ZW5lcnMiLCJwYXR0ZXJuIiwic2V0dXBQYXR0ZXJuIiwiYWRkUGF0dGVybkV2ZW50TGlzdGVuZXJzIiwib3B0aW9uc1RvR3JhYiIsImRvbUF0dHIiLCJpc1ZhbGlkUGF0dGVybiIsInZhbHVlIiwibWF0Y2giLCJ0aGF0IiwiX2lucHV0S2V5UHJlc3MiLCJldmVudCIsImNoYXIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJrZXlDb2RlIiwicG9zaXRpb24iLCJnZXRDdXJzb3JQb3NpdGlvbiIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwib2Zmc2V0IiwiaSIsImZvcm1hdENoYXJhY3RlcnMiLCJpbmRleE9mIiwiZnV0dXJlVmFsdWUiLCJzdWJzdHJpbmciLCJwYXR0ZXJuV2l0aEVtcHR5Iiwic2V0Q3Vyc29yUG9zaXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiX2lucHV0Rm9jdXMiLCJzZXRUaW1lb3V0IiwicGF0dGVyblN0cmluZyIsInJlcGxhY2UiLCJfaW5wdXRLZXlEb3duIiwiY29uc29sZSIsImxvZyIsIl9pbnB1dEJsdXIiLCJkb2N1bWVudCIsInNlbGVjdGlvbiIsImZvY3VzIiwic2VsZWN0UmFuZ2UiLCJjcmVhdGVSYW5nZSIsIm1vdmVTdGFydCIsInRleHQiLCJzZWxlY3Rpb25TdGFydCIsImNyZWF0ZVRleHRSYW5nZSIsInJhbmdlIiwibW92ZSIsInNlbGVjdCIsInNlbGVjdGlvbkVuZCIsImdldEF0dHJpYnV0ZSIsInBsYWNlaG9sZGVyIiwiX2luaXRQYXR0ZXJuIiwiZm9ybWF0dGVkUGF0dGVyblN0ciIsImZvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHIiLCJSZWdFeHAiLCJiaW5kIiwiX2lucHV0S2V5dXAiLCJvbGRWYWx1ZSIsInJlbW92ZVBhdHRlcm5FdmVudExpc3RlbmVycyIsInJlbW92ZVByZWZpeEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsWUFDQSxrR0FEQSxLQUVBLEVBS0E7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBO0FBQ0E7QUFBQSxxQkFEQTs7QUFFQTtBQUFBLGtCQUZBOztBQUdBO0FBQUE7QUFDQTs7QUFKQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUE7OztBQUVBO0FBQUE7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixFQUF5QjtBQUM5QixTQUFLOEQsMEJBQUw7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQVBEOztBQVNBN0UsS0FBSyxDQUFDTSxTQUFOLENBQWdCVSxTQUFoQixHQUE0QixZQUFZO0FBQ3RDLE9BQUtGLEdBQUwsQ0FBU1gsSUFBVCxDQUFjcUIsS0FBZCxHQUF1QixHQUFFLEtBQUtwQixPQUFMLENBQWFXLE1BQU8sSUFBRyxLQUFLRCxHQUFMLENBQVNYLElBQVQsQ0FBY3FCLEtBQU0sRUFBcEU7QUFDRCxDQUZEIiwiZmlsZSI6InRvb2xraXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC90b29sa2l0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC90b29sa2l0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlNGVG9vbGtpdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHNwaXJhbC10b29sa2l0L2RhdGFncmlkXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9kYXRhZ3JpZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTRkRhdGFHcmlkXCJdID0gZmFjdG9yeShyb290W1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRva2VuID0gJyVbYS1mMC05XXsyfSc7XG52YXIgc2luZ2xlTWF0Y2hlciA9IG5ldyBSZWdFeHAodG9rZW4sICdnaScpO1xudmFyIG11bHRpTWF0Y2hlciA9IG5ldyBSZWdFeHAoJygnICsgdG9rZW4gKyAnKSsnLCAnZ2knKTtcblxuZnVuY3Rpb24gZGVjb2RlQ29tcG9uZW50cyhjb21wb25lbnRzLCBzcGxpdCkge1xuXHR0cnkge1xuXHRcdC8vIFRyeSB0byBkZWNvZGUgdGhlIGVudGlyZSBzdHJpbmcgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvbXBvbmVudHMuam9pbignJykpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBEbyBub3RoaW5nXG5cdH1cblxuXHRpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50cztcblx0fVxuXG5cdHNwbGl0ID0gc3BsaXQgfHwgMTtcblxuXHQvLyBTcGxpdCB0aGUgYXJyYXkgaW4gMiBwYXJ0c1xuXHR2YXIgbGVmdCA9IGNvbXBvbmVudHMuc2xpY2UoMCwgc3BsaXQpO1xuXHR2YXIgcmlnaHQgPSBjb21wb25lbnRzLnNsaWNlKHNwbGl0KTtcblxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFtdLCBkZWNvZGVDb21wb25lbnRzKGxlZnQpLCBkZWNvZGVDb21wb25lbnRzKHJpZ2h0KSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR2YXIgdG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5wdXQgPSBkZWNvZGVDb21wb25lbnRzKHRva2VucywgaSkuam9pbignJyk7XG5cblx0XHRcdHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxufVxuXG5mdW5jdGlvbiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoaW5wdXQpIHtcblx0Ly8gS2VlcCB0cmFjayBvZiBhbGwgdGhlIHJlcGxhY2VtZW50cyBhbmQgcHJlZmlsbCB0aGUgbWFwIHdpdGggdGhlIGBCT01gXG5cdHZhciByZXBsYWNlTWFwID0ge1xuXHRcdCclRkUlRkYnOiAnXFx1RkZGRFxcdUZGRkQnLFxuXHRcdCclRkYlRkUnOiAnXFx1RkZGRFxcdUZGRkQnXG5cdH07XG5cblx0dmFyIG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR3aGlsZSAobWF0Y2gpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gRGVjb2RlIGFzIGJpZyBjaHVua3MgYXMgcG9zc2libGVcblx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzBdKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBkZWNvZGUobWF0Y2hbMF0pO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9PSBtYXRjaFswXSkge1xuXHRcdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0fVxuXG5cdC8vIEFkZCBgJUMyYCBhdCB0aGUgZW5kIG9mIHRoZSBtYXAgdG8gbWFrZSBzdXJlIGl0IGRvZXMgbm90IHJlcGxhY2UgdGhlIGNvbWJpbmF0b3IgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZVxuXHRyZXBsYWNlTWFwWyclQzInXSA9ICdcXHVGRkZEJztcblxuXHR2YXIgZW50cmllcyA9IE9iamVjdC5rZXlzKHJlcGxhY2VNYXApO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFJlcGxhY2UgYWxsIGRlY29kZWQgY29tcG9uZW50c1xuXHRcdHZhciBrZXkgPSBlbnRyaWVzW2ldO1xuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgJ2cnKSwgcmVwbGFjZU1hcFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZW5jb2RlZFVSSSkge1xuXHRpZiAodHlwZW9mIGVuY29kZWRVUkkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYGVuY29kZWRVUklgIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AsIGdvdCBgJyArIHR5cGVvZiBlbmNvZGVkVVJJICsgJ2AnKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0ZW5jb2RlZFVSSSA9IGVuY29kZWRVUkkucmVwbGFjZSgvXFwrL2csICcgJyk7XG5cblx0XHQvLyBUcnkgdGhlIGJ1aWx0IGluIGRlY29kZXIgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBGYWxsYmFjayB0byBhIG1vcmUgYWR2YW5jZWQgZGVjb2RlclxuXHRcdHJldHVybiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIGNvbXBhcmUgYW5kIGlzQnVmZmVyIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvYmxvYi82ODBlOWU1ZTQ4OGYyMmFhYzI3NTk5YTU3ZGM4NDRhNjMxNTkyOGRkL2luZGV4LmpzXG4vLyBvcmlnaW5hbCBub3RpY2U6XG5cbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHggPSBhLmxlbmd0aDtcbiAgdmFyIHkgPSBiLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIHkgPSBiW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmICh5IDwgeCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuZnVuY3Rpb24gaXNCdWZmZXIoYikge1xuICBpZiAoZ2xvYmFsLkJ1ZmZlciAmJiB0eXBlb2YgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKGIpO1xuICB9XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpO1xufVxuXG4vLyBiYXNlZCBvbiBub2RlIGFzc2VydCwgb3JpZ2luYWwgbm90aWNlOlxuLy8gTkI6IFRoZSBVUkwgdG8gdGhlIENvbW1vbkpTIHNwZWMgaXMga2VwdCBqdXN0IGZvciB0cmFkaXRpb24uXG4vLyAgICAgbm9kZS1hc3NlcnQgaGFzIGV2b2x2ZWQgYSBsb3Qgc2luY2UgdGhlbiwgYm90aCBpbiBBUEkgYW5kIGJlaGF2aW9yLlxuXG4vLyBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Vbml0X1Rlc3RpbmcvMS4wXG4vL1xuLy8gVEhJUyBJUyBOT1QgVEVTVEVEIE5PUiBMSUtFTFkgVE8gV09SSyBPVVRTSURFIFY4IVxuLy9cbi8vIE9yaWdpbmFsbHkgZnJvbSBuYXJ3aGFsLmpzIChodHRwOi8vbmFyd2hhbGpzLm9yZylcbi8vIENvcHlyaWdodCAoYykgMjAwOSBUaG9tYXMgUm9iaW5zb24gPDI4MG5vcnRoLmNvbT5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsLycpO1xudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGZ1bmN0aW9uc0hhdmVOYW1lcyA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb28oKSB7fS5uYW1lID09PSAnZm9vJztcbn0oKSk7XG5mdW5jdGlvbiBwVG9TdHJpbmcgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc1ZpZXcoYXJyYnVmKSB7XG4gIGlmIChpc0J1ZmZlcihhcnJidWYpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZ2xvYmFsLkFycmF5QnVmZmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhhcnJidWYpO1xuICB9XG4gIGlmICghYXJyYnVmKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhcnJidWYgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhcnJidWYuYnVmZmVyICYmIGFycmJ1Zi5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbi8vIDEuIFRoZSBhc3NlcnQgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0aGF0IHRocm93XG4vLyBBc3NlcnRpb25FcnJvcidzIHdoZW4gcGFydGljdWxhciBjb25kaXRpb25zIGFyZSBub3QgbWV0LiBUaGVcbi8vIGFzc2VydCBtb2R1bGUgbXVzdCBjb25mb3JtIHRvIHRoZSBmb2xsb3dpbmcgaW50ZXJmYWNlLlxuXG52YXIgYXNzZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSBvaztcblxuLy8gMi4gVGhlIEFzc2VydGlvbkVycm9yIGlzIGRlZmluZWQgaW4gYXNzZXJ0LlxuLy8gbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7IG1lc3NhZ2U6IG1lc3NhZ2UsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pXG5cbnZhciByZWdleCA9IC9cXHMqZnVuY3Rpb25cXHMrKFteXFwoXFxzXSopXFxzKi87XG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL2Z1bmN0aW9uLnByb3RvdHlwZS5uYW1lL2Jsb2IvYWRlZWVlYzhiZmNjNjA2OGIxODdkN2Q5ZmIzZDViYjFkM2EzMDg5OS9pbXBsZW1lbnRhdGlvbi5qc1xuZnVuY3Rpb24gZ2V0TmFtZShmdW5jKSB7XG4gIGlmICghdXRpbC5pc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMpIHtcbiAgICByZXR1cm4gZnVuYy5uYW1lO1xuICB9XG4gIHZhciBzdHIgPSBmdW5jLnRvU3RyaW5nKCk7XG4gIHZhciBtYXRjaCA9IHN0ci5tYXRjaChyZWdleCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXTtcbn1cbmFzc2VydC5Bc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIEFzc2VydGlvbkVycm9yKG9wdGlvbnMpIHtcbiAgdGhpcy5uYW1lID0gJ0Fzc2VydGlvbkVycm9yJztcbiAgdGhpcy5hY3R1YWwgPSBvcHRpb25zLmFjdHVhbDtcbiAgdGhpcy5leHBlY3RlZCA9IG9wdGlvbnMuZXhwZWN0ZWQ7XG4gIHRoaXMub3BlcmF0b3IgPSBvcHRpb25zLm9wZXJhdG9yO1xuICBpZiAob3B0aW9ucy5tZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWVzc2FnZSA9IGdldE1lc3NhZ2UodGhpcyk7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gdHJ1ZTtcbiAgfVxuICB2YXIgc3RhY2tTdGFydEZ1bmN0aW9uID0gb3B0aW9ucy5zdGFja1N0YXJ0RnVuY3Rpb24gfHwgZmFpbDtcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBub24gdjggYnJvd3NlcnMgc28gd2UgY2FuIGhhdmUgYSBzdGFja3RyYWNlXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgIHZhciBvdXQgPSBlcnIuc3RhY2s7XG5cbiAgICAgIC8vIHRyeSB0byBzdHJpcCB1c2VsZXNzIGZyYW1lc1xuICAgICAgdmFyIGZuX25hbWUgPSBnZXROYW1lKHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gICAgICB2YXIgaWR4ID0gb3V0LmluZGV4T2YoJ1xcbicgKyBmbl9uYW1lKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAvLyBvbmNlIHdlIGhhdmUgbG9jYXRlZCB0aGUgZnVuY3Rpb24gZnJhbWVcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdHJpcCBvdXQgZXZlcnl0aGluZyBiZWZvcmUgaXQgKGFuZCBpdHMgbGluZSlcbiAgICAgICAgdmFyIG5leHRfbGluZSA9IG91dC5pbmRleE9mKCdcXG4nLCBpZHggKyAxKTtcbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZyhuZXh0X2xpbmUgKyAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFjayA9IG91dDtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGFzc2VydC5Bc3NlcnRpb25FcnJvciBpbnN0YW5jZW9mIEVycm9yXG51dGlsLmluaGVyaXRzKGFzc2VydC5Bc3NlcnRpb25FcnJvciwgRXJyb3IpO1xuXG5mdW5jdGlvbiB0cnVuY2F0ZShzLCBuKSB7XG4gIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPCBuID8gcyA6IHMuc2xpY2UoMCwgbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluc3BlY3Qoc29tZXRoaW5nKSB7XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMgfHwgIXV0aWwuaXNGdW5jdGlvbihzb21ldGhpbmcpKSB7XG4gICAgcmV0dXJuIHV0aWwuaW5zcGVjdChzb21ldGhpbmcpO1xuICB9XG4gIHZhciByYXduYW1lID0gZ2V0TmFtZShzb21ldGhpbmcpO1xuICB2YXIgbmFtZSA9IHJhd25hbWUgPyAnOiAnICsgcmF3bmFtZSA6ICcnO1xuICByZXR1cm4gJ1tGdW5jdGlvbicgKyAgbmFtZSArICddJztcbn1cbmZ1bmN0aW9uIGdldE1lc3NhZ2Uoc2VsZikge1xuICByZXR1cm4gdHJ1bmNhdGUoaW5zcGVjdChzZWxmLmFjdHVhbCksIDEyOCkgKyAnICcgK1xuICAgICAgICAgc2VsZi5vcGVyYXRvciArICcgJyArXG4gICAgICAgICB0cnVuY2F0ZShpbnNwZWN0KHNlbGYuZXhwZWN0ZWQpLCAxMjgpO1xufVxuXG4vLyBBdCBwcmVzZW50IG9ubHkgdGhlIHRocmVlIGtleXMgbWVudGlvbmVkIGFib3ZlIGFyZSB1c2VkIGFuZFxuLy8gdW5kZXJzdG9vZCBieSB0aGUgc3BlYy4gSW1wbGVtZW50YXRpb25zIG9yIHN1YiBtb2R1bGVzIGNhbiBwYXNzXG4vLyBvdGhlciBrZXlzIHRvIHRoZSBBc3NlcnRpb25FcnJvcidzIGNvbnN0cnVjdG9yIC0gdGhleSB3aWxsIGJlXG4vLyBpZ25vcmVkLlxuXG4vLyAzLiBBbGwgb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgbXVzdCB0aHJvdyBhbiBBc3NlcnRpb25FcnJvclxuLy8gd2hlbiBhIGNvcnJlc3BvbmRpbmcgY29uZGl0aW9uIGlzIG5vdCBtZXQsIHdpdGggYSBtZXNzYWdlIHRoYXRcbi8vIG1heSBiZSB1bmRlZmluZWQgaWYgbm90IHByb3ZpZGVkLiAgQWxsIGFzc2VydGlvbiBtZXRob2RzIHByb3ZpZGVcbi8vIGJvdGggdGhlIGFjdHVhbCBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRvIHRoZSBhc3NlcnRpb24gZXJyb3IgZm9yXG4vLyBkaXNwbGF5IHB1cnBvc2VzLlxuXG5mdW5jdGlvbiBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yLCBzdGFja1N0YXJ0RnVuY3Rpb24pIHtcbiAgdGhyb3cgbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgb3BlcmF0b3I6IG9wZXJhdG9yLFxuICAgIHN0YWNrU3RhcnRGdW5jdGlvbjogc3RhY2tTdGFydEZ1bmN0aW9uXG4gIH0pO1xufVxuXG4vLyBFWFRFTlNJT04hIGFsbG93cyBmb3Igd2VsbCBiZWhhdmVkIGVycm9ycyBkZWZpbmVkIGVsc2V3aGVyZS5cbmFzc2VydC5mYWlsID0gZmFpbDtcblxuLy8gNC4gUHVyZSBhc3NlcnRpb24gdGVzdHMgd2hldGhlciBhIHZhbHVlIGlzIHRydXRoeSwgYXMgZGV0ZXJtaW5lZFxuLy8gYnkgISFndWFyZC5cbi8vIGFzc2VydC5vayhndWFyZCwgbWVzc2FnZV9vcHQpO1xuLy8gVGhpcyBzdGF0ZW1lbnQgaXMgZXF1aXZhbGVudCB0byBhc3NlcnQuZXF1YWwodHJ1ZSwgISFndWFyZCxcbi8vIG1lc3NhZ2Vfb3B0KTsuIFRvIHRlc3Qgc3RyaWN0bHkgZm9yIHRoZSB2YWx1ZSB0cnVlLCB1c2Vcbi8vIGFzc2VydC5zdHJpY3RFcXVhbCh0cnVlLCBndWFyZCwgbWVzc2FnZV9vcHQpOy5cblxuZnVuY3Rpb24gb2sodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09JywgYXNzZXJ0Lm9rKTtcbn1cbmFzc2VydC5vayA9IG9rO1xuXG4vLyA1LiBUaGUgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHNoYWxsb3csIGNvZXJjaXZlIGVxdWFsaXR5IHdpdGhcbi8vID09LlxuLy8gYXNzZXJ0LmVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmVxdWFsID0gZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9IGV4cGVjdGVkKSBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5lcXVhbCk7XG59O1xuXG4vLyA2LiBUaGUgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igd2hldGhlciB0d28gb2JqZWN0cyBhcmUgbm90IGVxdWFsXG4vLyB3aXRoICE9IGFzc2VydC5ub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RFcXVhbCA9IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9JywgYXNzZXJ0Lm5vdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gNy4gVGhlIGVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBhIGRlZXAgZXF1YWxpdHkgcmVsYXRpb24uXG4vLyBhc3NlcnQuZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmRlZXBFcXVhbCA9IGZ1bmN0aW9uIGRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBmYWxzZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdkZWVwRXF1YWwnLCBhc3NlcnQuZGVlcEVxdWFsKTtcbiAgfVxufTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIGRlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBTdHJpY3RFcXVhbCcsIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHN0cmljdCwgbWVtb3MpIHtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAmJiBpc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gY29tcGFyZShhY3R1YWwsIGV4cGVjdGVkKSA9PT0gMDtcblxuICAvLyA3LjIuIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIERhdGUgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIERhdGUgb2JqZWN0IHRoYXQgcmVmZXJzIHRvIHRoZSBzYW1lIHRpbWUuXG4gIH0gZWxzZSBpZiAodXRpbC5pc0RhdGUoYWN0dWFsKSAmJiB1dGlsLmlzRGF0ZShleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMyBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIFJlZ0V4cCBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzb3VyY2UgYW5kXG4gIC8vIHByb3BlcnRpZXMgKGBnbG9iYWxgLCBgbXVsdGlsaW5lYCwgYGxhc3RJbmRleGAsIGBpZ25vcmVDYXNlYCkuXG4gIH0gZWxzZSBpZiAodXRpbC5pc1JlZ0V4cChhY3R1YWwpICYmIHV0aWwuaXNSZWdFeHAoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5zb3VyY2UgPT09IGV4cGVjdGVkLnNvdXJjZSAmJlxuICAgICAgICAgICBhY3R1YWwuZ2xvYmFsID09PSBleHBlY3RlZC5nbG9iYWwgJiZcbiAgICAgICAgICAgYWN0dWFsLm11bHRpbGluZSA9PT0gZXhwZWN0ZWQubXVsdGlsaW5lICYmXG4gICAgICAgICAgIGFjdHVhbC5sYXN0SW5kZXggPT09IGV4cGVjdGVkLmxhc3RJbmRleCAmJlxuICAgICAgICAgICBhY3R1YWwuaWdub3JlQ2FzZSA9PT0gZXhwZWN0ZWQuaWdub3JlQ2FzZTtcblxuICAvLyA3LjQuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoKGFjdHVhbCA9PT0gbnVsbCB8fCB0eXBlb2YgYWN0dWFsICE9PSAnb2JqZWN0JykgJiZcbiAgICAgICAgICAgICAoZXhwZWN0ZWQgPT09IG51bGwgfHwgdHlwZW9mIGV4cGVjdGVkICE9PSAnb2JqZWN0JykpIHtcbiAgICByZXR1cm4gc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyBJZiBib3RoIHZhbHVlcyBhcmUgaW5zdGFuY2VzIG9mIHR5cGVkIGFycmF5cywgd3JhcCB0aGVpciB1bmRlcmx5aW5nXG4gIC8vIEFycmF5QnVmZmVycyBpbiBhIEJ1ZmZlciBlYWNoIHRvIGluY3JlYXNlIHBlcmZvcm1hbmNlXG4gIC8vIFRoaXMgb3B0aW1pemF0aW9uIHJlcXVpcmVzIHRoZSBhcnJheXMgdG8gaGF2ZSB0aGUgc2FtZSB0eXBlIGFzIGNoZWNrZWQgYnlcbiAgLy8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAoYWthIHBUb1N0cmluZykuIE5ldmVyIHBlcmZvcm0gYmluYXJ5XG4gIC8vIGNvbXBhcmlzb25zIGZvciBGbG9hdCpBcnJheXMsIHRob3VnaCwgc2luY2UgZS5nLiArMCA9PT0gLTAgYnV0IHRoZWlyXG4gIC8vIGJpdCBwYXR0ZXJucyBhcmUgbm90IGlkZW50aWNhbC5cbiAgfSBlbHNlIGlmIChpc1ZpZXcoYWN0dWFsKSAmJiBpc1ZpZXcoZXhwZWN0ZWQpICYmXG4gICAgICAgICAgICAgcFRvU3RyaW5nKGFjdHVhbCkgPT09IHBUb1N0cmluZyhleHBlY3RlZCkgJiZcbiAgICAgICAgICAgICAhKGFjdHVhbCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fFxuICAgICAgICAgICAgICAgYWN0dWFsIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KSkge1xuICAgIHJldHVybiBjb21wYXJlKG5ldyBVaW50OEFycmF5KGFjdHVhbC5idWZmZXIpLFxuICAgICAgICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KGV4cGVjdGVkLmJ1ZmZlcikpID09PSAwO1xuXG4gIC8vIDcuNSBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAhPT0gaXNCdWZmZXIoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG1lbW9zID0gbWVtb3MgfHwge2FjdHVhbDogW10sIGV4cGVjdGVkOiBbXX07XG5cbiAgICB2YXIgYWN0dWFsSW5kZXggPSBtZW1vcy5hY3R1YWwuaW5kZXhPZihhY3R1YWwpO1xuICAgIGlmIChhY3R1YWxJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChhY3R1YWxJbmRleCA9PT0gbWVtb3MuZXhwZWN0ZWQuaW5kZXhPZihleHBlY3RlZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb3MuYWN0dWFsLnB1c2goYWN0dWFsKTtcbiAgICBtZW1vcy5leHBlY3RlZC5wdXNoKGV4cGVjdGVkKTtcblxuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBzdHJpY3QsIG1lbW9zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyhvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBzdHJpY3QsIGFjdHVhbFZpc2l0ZWRPYmplY3RzKSB7XG4gIGlmIChhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGlmIG9uZSBpcyBhIHByaW1pdGl2ZSwgdGhlIG90aGVyIG11c3QgYmUgc2FtZVxuICBpZiAodXRpbC5pc1ByaW1pdGl2ZShhKSB8fCB1dGlsLmlzUHJpbWl0aXZlKGIpKVxuICAgIHJldHVybiBhID09PSBiO1xuICBpZiAoc3RyaWN0ICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihhKSAhPT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgdmFyIGFJc0FyZ3MgPSBpc0FyZ3VtZW50cyhhKTtcbiAgdmFyIGJJc0FyZ3MgPSBpc0FyZ3VtZW50cyhiKTtcbiAgaWYgKChhSXNBcmdzICYmICFiSXNBcmdzKSB8fCAoIWFJc0FyZ3MgJiYgYklzQXJncykpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoYUlzQXJncykge1xuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIF9kZWVwRXF1YWwoYSwgYiwgc3RyaWN0KTtcbiAgfVxuICB2YXIga2EgPSBvYmplY3RLZXlzKGEpO1xuICB2YXIga2IgPSBvYmplY3RLZXlzKGIpO1xuICB2YXIga2V5LCBpO1xuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9PSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIV9kZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIHN0cmljdCwgYWN0dWFsVmlzaXRlZE9iamVjdHMpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyA4LiBUaGUgbm9uLWVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBmb3IgYW55IGRlZXAgaW5lcXVhbGl0eS5cbi8vIGFzc2VydC5ub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgZmFsc2UpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcEVxdWFsJywgYXNzZXJ0Lm5vdERlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmFzc2VydC5ub3REZWVwU3RyaWN0RXF1YWwgPSBub3REZWVwU3RyaWN0RXF1YWw7XG5mdW5jdGlvbiBub3REZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ25vdERlZXBTdHJpY3RFcXVhbCcsIG5vdERlZXBTdHJpY3RFcXVhbCk7XG4gIH1cbn1cblxuXG4vLyA5LiBUaGUgc3RyaWN0IGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzdHJpY3QgZXF1YWxpdHksIGFzIGRldGVybWluZWQgYnkgPT09LlxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsID0gZnVuY3Rpb24gc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09PScsIGFzc2VydC5zdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDEwLiBUaGUgc3RyaWN0IG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHN0cmljdCBpbmVxdWFsaXR5LCBhc1xuLy8gZGV0ZXJtaW5lZCBieSAhPT0uICBhc3NlcnQubm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90U3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT09JywgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkge1xuICBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV4cGVjdGVkKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiBleHBlY3RlZC50ZXN0KGFjdHVhbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWdub3JlLiAgVGhlIGluc3RhbmNlb2YgY2hlY2sgZG9lc24ndCB3b3JrIGZvciBhcnJvdyBmdW5jdGlvbnMuXG4gIH1cblxuICBpZiAoRXJyb3IuaXNQcm90b3R5cGVPZihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX3RyeUJsb2NrKGJsb2NrKSB7XG4gIHZhciBlcnJvcjtcbiAgdHJ5IHtcbiAgICBibG9jaygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSBlO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gX3Rocm93cyhzaG91bGRUaHJvdywgYmxvY2ssIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIHZhciBhY3R1YWw7XG5cbiAgaWYgKHR5cGVvZiBibG9jayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYmxvY2tcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwZWN0ZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgbWVzc2FnZSA9IGV4cGVjdGVkO1xuICAgIGV4cGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIGFjdHVhbCA9IF90cnlCbG9jayhibG9jayk7XG5cbiAgbWVzc2FnZSA9IChleHBlY3RlZCAmJiBleHBlY3RlZC5uYW1lID8gJyAoJyArIGV4cGVjdGVkLm5hbWUgKyAnKS4nIDogJy4nKSArXG4gICAgICAgICAgICAobWVzc2FnZSA/ICcgJyArIG1lc3NhZ2UgOiAnLicpO1xuXG4gIGlmIChzaG91bGRUaHJvdyAmJiAhYWN0dWFsKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnTWlzc2luZyBleHBlY3RlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICB2YXIgdXNlclByb3ZpZGVkTWVzc2FnZSA9IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJztcbiAgdmFyIGlzVW53YW50ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgdXRpbC5pc0Vycm9yKGFjdHVhbCk7XG4gIHZhciBpc1VuZXhwZWN0ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmICFleHBlY3RlZDtcblxuICBpZiAoKGlzVW53YW50ZWRFeGNlcHRpb24gJiZcbiAgICAgIHVzZXJQcm92aWRlZE1lc3NhZ2UgJiZcbiAgICAgIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fFxuICAgICAgaXNVbmV4cGVjdGVkRXhjZXB0aW9uKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnR290IHVud2FudGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIGlmICgoc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmIGV4cGVjdGVkICYmXG4gICAgICAhZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHx8ICghc2hvdWxkVGhyb3cgJiYgYWN0dWFsKSkge1xuICAgIHRocm93IGFjdHVhbDtcbiAgfVxufVxuXG4vLyAxMS4gRXhwZWN0ZWQgdG8gdGhyb3cgYW4gZXJyb3I6XG4vLyBhc3NlcnQudGhyb3dzKGJsb2NrLCBFcnJvcl9vcHQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnRocm93cyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9lcnJvciwgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzKHRydWUsIGJsb2NrLCBlcnJvciwgbWVzc2FnZSk7XG59O1xuXG4vLyBFWFRFTlNJT04hIFRoaXMgaXMgYW5ub3lpbmcgdG8gd3JpdGUgb3V0c2lkZSB0aGlzIG1vZHVsZS5cbmFzc2VydC5kb2VzTm90VGhyb3cgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cyhmYWxzZSwgYmxvY2ssIGVycm9yLCBtZXNzYWdlKTtcbn07XG5cbmFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24oZXJyKSB7IGlmIChlcnIpIHRocm93IGVycjsgfTtcblxuLy8gRXhwb3NlIGEgc3RyaWN0IG9ubHkgdmFyaWFudCBvZiBhc3NlcnRcbmZ1bmN0aW9uIHN0cmljdCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBzdHJpY3QpO1xufVxuYXNzZXJ0LnN0cmljdCA9IG9iamVjdEFzc2lnbihzdHJpY3QsIGFzc2VydCwge1xuICBlcXVhbDogYXNzZXJ0LnN0cmljdEVxdWFsLFxuICBkZWVwRXF1YWw6IGFzc2VydC5kZWVwU3RyaWN0RXF1YWwsXG4gIG5vdEVxdWFsOiBhc3NlcnQubm90U3RyaWN0RXF1YWwsXG4gIG5vdERlZXBFcXVhbDogYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbFxufSk7XG5hc3NlcnQuc3RyaWN0LnN0cmljdCA9IGFzc2VydC5zdHJpY3Q7XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xuY29uc3QgZGVjb2RlQ29tcG9uZW50ID0gcmVxdWlyZSgnZGVjb2RlLXVyaS1jb21wb25lbnQnKTtcbmNvbnN0IHNwbGl0T25GaXJzdCA9IHJlcXVpcmUoJ3NwbGl0LW9uLWZpcnN0Jyk7XG5cbmNvbnN0IGlzTnVsbE9yVW5kZWZpbmVkID0gdmFsdWUgPT4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpIHtcblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBpbmRleCA9IHJlc3VsdC5sZW5ndGg7XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1snLCBpbmRleCwgJ10nXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdC4uLnJlc3VsdCxcblx0XHRcdFx0XHRbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgZW5jb2RlKGluZGV4LCBvcHRpb25zKSwgJ109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJylcblx0XHRcdFx0XTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1tdJ10uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1tdPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdjb21tYSc6XG5cdFx0Y2FzZSAnc2VwYXJhdG9yJzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFtbZW5jb2RlKGtleSwgb3B0aW9ucyksICc9JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtbcmVzdWx0LCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpXTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgZW5jb2RlKGtleSwgb3B0aW9ucyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJz0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpIHtcblx0bGV0IHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdGlvbnMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFt2YWx1ZV07XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnY29tbWEnOlxuXHRcdGNhc2UgJ3NlcGFyYXRvcic6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlzQXJyYXkgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnNwbGl0KCcnKS5pbmRleE9mKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpID4gLTE7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gaXNBcnJheSA/IHZhbHVlLnNwbGl0KG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpLm1hcChpdGVtID0+IGRlY29kZShpdGVtLCBvcHRpb25zKSkgOiB2YWx1ZSA9PT0gbnVsbCA/IHZhbHVlIDogZGVjb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IG5ld1ZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3IodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUubGVuZ3RoICE9PSAxKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYXJyYXlGb3JtYXRTZXBhcmF0b3IgbXVzdCBiZSBzaW5nbGUgY2hhcmFjdGVyIHN0cmluZycpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmRlY29kZSkge1xuXHRcdHJldHVybiBkZWNvZGVDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSlcblx0XHRcdC5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYikpXG5cdFx0XHQubWFwKGtleSA9PiBpbnB1dFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFzaChpbnB1dCkge1xuXHRjb25zdCBoYXNoU3RhcnQgPSBpbnB1dC5pbmRleE9mKCcjJyk7XG5cdGlmIChoYXNoU3RhcnQgIT09IC0xKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgwLCBoYXNoU3RhcnQpO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXRIYXNoKHVybCkge1xuXHRsZXQgaGFzaCA9ICcnO1xuXHRjb25zdCBoYXNoU3RhcnQgPSB1cmwuaW5kZXhPZignIycpO1xuXHRpZiAoaGFzaFN0YXJ0ICE9PSAtMSkge1xuXHRcdGhhc2ggPSB1cmwuc2xpY2UoaGFzaFN0YXJ0KTtcblx0fVxuXG5cdHJldHVybiBoYXNoO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KGlucHV0KSB7XG5cdGlucHV0ID0gcmVtb3ZlSGFzaChpbnB1dCk7XG5cdGNvbnN0IHF1ZXJ5U3RhcnQgPSBpbnB1dC5pbmRleE9mKCc/Jyk7XG5cdGlmIChxdWVyeVN0YXJ0ID09PSAtMSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBpbnB1dC5zbGljZShxdWVyeVN0YXJ0ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMucGFyc2VOdW1iZXJzICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSkgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJykpIHtcblx0XHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5wYXJzZUJvb2xlYW5zICYmIHZhbHVlICE9PSBudWxsICYmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScgfHwgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJykpIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2UoaW5wdXQsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGRlY29kZTogdHJ1ZSxcblx0XHRzb3J0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJyxcblx0XHRwYXJzZU51bWJlcnM6IGZhbHNlLFxuXHRcdHBhcnNlQm9vbGVhbnM6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3Iob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHRjb25zdCByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGlucHV0ID0gaW5wdXQudHJpbSgpLnJlcGxhY2UoL15bPyMmXS8sICcnKTtcblxuXHRpZiAoIWlucHV0KSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGZvciAoY29uc3QgcGFyYW0gb2YgaW5wdXQuc3BsaXQoJyYnKSkge1xuXHRcdGxldCBba2V5LCB2YWx1ZV0gPSBzcGxpdE9uRmlyc3Qob3B0aW9ucy5kZWNvZGUgPyBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKSA6IHBhcmFtLCAnPScpO1xuXG5cdFx0Ly8gTWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG9wdGlvbnMuYXJyYXlGb3JtYXQgPT09ICdjb21tYScgPyB2YWx1ZSA6IGRlY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0Zm9ybWF0dGVyKGRlY29kZShrZXksIG9wdGlvbnMpLCB2YWx1ZSwgcmV0KTtcblx0fVxuXG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJldCkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG5cdFx0XHRcdHZhbHVlW2tdID0gcGFyc2VWYWx1ZSh2YWx1ZVtrXSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldFtrZXldID0gcGFyc2VWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0cmV0dXJuIChvcHRpb25zLnNvcnQgPT09IHRydWUgPyBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKSA6IE9iamVjdC5rZXlzKHJldCkuc29ydChvcHRpb25zLnNvcnQpKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gKG9iamVjdCwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIW9iamVjdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJ1xuXHR9LCBvcHRpb25zKTtcblxuXHR2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXG5cdGNvbnN0IHNob3VsZEZpbHRlciA9IGtleSA9PiAoXG5cdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0W2tleV0pKSB8fFxuXHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiBvYmplY3Rba2V5XSA9PT0gJycpXG5cdCk7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdGNvbnN0IG9iamVjdENvcHkgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0aWYgKCFzaG91bGRGaWx0ZXIoa2V5KSkge1xuXHRcdFx0b2JqZWN0Q29weVtrZXldID0gb2JqZWN0W2tleV07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdENvcHkpO1xuXG5cdGlmIChvcHRpb25zLnNvcnQgIT09IGZhbHNlKSB7XG5cdFx0a2V5cy5zb3J0KG9wdGlvbnMuc29ydCk7XG5cdH1cblxuXHRyZXR1cm4ga2V5cy5tYXAoa2V5ID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHQucmVkdWNlKGZvcm1hdHRlcihrZXkpLCBbXSlcblx0XHRcdFx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucykgKyAnPScgKyBlbmNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHR9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydHMucGFyc2VVcmwgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcblx0cmV0dXJuIHtcblx0XHR1cmw6IHJlbW92ZUhhc2goaW5wdXQpLnNwbGl0KCc/JylbMF0gfHwgJycsXG5cdFx0cXVlcnk6IHBhcnNlKGV4dHJhY3QoaW5wdXQpLCBvcHRpb25zKVxuXHR9O1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnlVcmwgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcblx0Y29uc3QgdXJsID0gcmVtb3ZlSGFzaChpbnB1dC51cmwpLnNwbGl0KCc/JylbMF0gfHwgJyc7XG5cdGNvbnN0IHF1ZXJ5RnJvbVVybCA9IGV4cG9ydHMuZXh0cmFjdChpbnB1dC51cmwpO1xuXHRjb25zdCBwYXJzZWRRdWVyeUZyb21VcmwgPSBleHBvcnRzLnBhcnNlKHF1ZXJ5RnJvbVVybCk7XG5cdGNvbnN0IGhhc2ggPSBnZXRIYXNoKGlucHV0LnVybCk7XG5cdGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbihwYXJzZWRRdWVyeUZyb21VcmwsIGlucHV0LnF1ZXJ5KTtcblx0bGV0IHF1ZXJ5U3RyaW5nID0gZXhwb3J0cy5zdHJpbmdpZnkocXVlcnksIG9wdGlvbnMpO1xuXHRpZiAocXVlcnlTdHJpbmcpIHtcblx0XHRxdWVyeVN0cmluZyA9IGA/JHtxdWVyeVN0cmluZ31gO1xuXHR9XG5cblx0cmV0dXJuIGAke3VybH0ke3F1ZXJ5U3RyaW5nfSR7aGFzaH1gO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoc3RyaW5nLCBzZXBhcmF0b3IpID0+IHtcblx0aWYgKCEodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIGFyZ3VtZW50cyB0byBiZSBvZiB0eXBlIGBzdHJpbmdgJyk7XG5cdH1cblxuXHRpZiAoc2VwYXJhdG9yID09PSAnJykge1xuXHRcdHJldHVybiBbc3RyaW5nXTtcblx0fVxuXG5cdGNvbnN0IHNlcGFyYXRvckluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc2VwYXJhdG9yKTtcblxuXHRpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuIFtzdHJpbmddO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRzdHJpbmcuc2xpY2UoMCwgc2VwYXJhdG9ySW5kZXgpLFxuXHRcdHN0cmluZy5zbGljZShzZXBhcmF0b3JJbmRleCArIHNlcGFyYXRvci5sZW5ndGgpXG5cdF07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCB4ID0+IGAlJHt4LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLCBudWxsLCByZXQpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQsIHJlaiwgY2IpIH0pO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNhbGxiYWNraWZpZWQsIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjYWxsYmFja2lmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKSk7XG4gIHJldHVybiBjYWxsYmFja2lmaWVkO1xufVxuZXhwb3J0cy5jYWxsYmFja2lmeSA9IGNhbGxiYWNraWZ5O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGV4dHJhY3RPcHRpb25zIH0gZnJvbSAnLi4vZXh0cmFjdE9wdGlvbnMnO1xyXG5leHBvcnQgY2xhc3MgQWN0aW9uUGFuZWwgZXh0ZW5kcyBzZi5jb3JlLkJhc2VET01Db25zdHJ1Y3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihzc2YsIG5vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IEFjdGlvblBhbmVsLnNwaXJhbEZyYW1ld29ya05hbWU7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zVG9HcmFiID0ge1xyXG4gICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IEFjdGlvblBhbmVsLmRlZmF1bHRPcHRpb25zLmlkLFxyXG4gICAgICAgICAgICAgICAgZG9tQXR0cjogJ2lkJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IEFjdGlvblBhbmVsLmRlZmF1bHRPcHRpb25zLnNlbGVjdGlvblR5cGUsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnZGF0YS1zZWxlY3Rpb24tdHlwZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZToge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IEFjdGlvblBhbmVsLmRlZmF1bHRPcHRpb25zLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLWNsYXNzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIEFjdGlvblBhbmVsLmRlZmF1bHRPcHRpb25zKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBoYXNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZENvdW50OiAwLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHNlbGVjdGlvblR5cGU6IHRoaXMub3B0aW9ucy5zZWxlY3Rpb25UeXBlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbml0KHNzZiwgbm9kZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIEFjdGlvblBhbmVsLmRlZmF1bHRPcHRpb25zKSwgdGhpcy5vcHRpb25zKSwgZXh0cmFjdE9wdGlvbnMobm9kZSkpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICByZWNvbmZpZ3VyZShvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBoYXNTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZENvdW50OiAwLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHNlbGVjdGlvblR5cGU6IHRoaXMub3B0aW9ucy5zZWxlY3Rpb25UeXBlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHVubG9jaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIHJlbW92ZSBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9ja1R5cGUgfHwgdGhpcy5vcHRpb25zLmxvY2tUeXBlID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XHJcbiAgICAgICAgaWYgKCFsb2NrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IHRyeSB0byBhZGQgXFwnbG9ja1xcJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0aW9uKHNlbGVjdGVkS2V5cywgc2VsZWN0ZWRJdGVtcykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCB7IHNlbGVjdGVkS2V5cyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcywgc2VsZWN0ZWRDb3VudDogc2VsZWN0ZWRLZXlzLnNpemUsIGhhc1NlbGVjdGlvbjogISFzZWxlY3RlZEtleXMuc2l6ZSB9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQXMoZWwsIGRlZmluaXRpb24pIHtcclxuICAgICAgICBpZiAodHlwZW9mIGRlZmluaXRpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBkZWZpbml0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IGRlZmluaXRpb24odGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVuZGVyZWQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHJlbmRlcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQocmVuZGVyZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkZWZpbml0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJBY3Rpb24oYWN0aW9uSWQsIGFjdGlvbiwgb3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYWN0aW9uQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hY3Rpb25DbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBvcHRpb25zLmFjdGlvbkNsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5hY3Rpb25DbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IG9wdGlvbnMuYWN0aW9uQ2xhc3NOYW1lKGFjdGlvbklkLCB0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IG9wdGlvbnMuYWN0aW9uQ2xhc3NOYW1lW2FjdGlvbklkXSB8fCAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0aW9uLmNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFjdGlvbi5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmFjdGlvbi5jbGFzc05hbWUuc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmFjdGlvbi5jbGFzc05hbWUodGhpcy5zdGF0ZSkuc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYWN0aW9uLm9uQ2xpY2sodGhpcy5zdGF0ZSwgdGhpcywgZSkpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQXMoZWwsIGFjdGlvbi5yZW5kZXJBcyk7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7IC8vIFRPRE86IGRvbnQgcmVyZW5kZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLnRoaXMub3B0aW9ucy5jbGFzc05hbWUuc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLnRoaXMub3B0aW9ucy5jbGFzc05hbWUodGhpcy5zdGF0ZSkuc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1NlbGVjdGlvbiAmJiAhdGhpcy5zdGF0ZS5oYXNTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMubm9TZWxlY3Rpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMubm9TZWxlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLm9wdGlvbnMubm9TZWxlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3Rpb25MYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckFzKGVsLCB0aGlzLm9wdGlvbnMuc2VsZWN0aW9uTGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMuYWN0aW9ucykuZm9yRWFjaCgoYWN0aW9uSWQpID0+IHtcclxuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJBY3Rpb24oYWN0aW9uSWQsIHRoaXMub3B0aW9ucy5hY3Rpb25zW2FjdGlvbklkXSwgdGhpcy5vcHRpb25zKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuQWN0aW9uUGFuZWwuc3BpcmFsRnJhbWV3b3JrTmFtZSA9ICdkYXRhZ3JpZC1hY3Rpb25zJztcclxuQWN0aW9uUGFuZWwuZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBpZDogJycsXHJcbiAgICBsb2NrVHlwZTogJ25vbmUnLFxyXG4gICAgYWN0aW9uQ2xhc3NOYW1lOiAnYnRuJyxcclxuICAgIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGUuU0lOR0xFLFxyXG4gICAgY2xhc3NOYW1lOiAncm93IG5vLWd1dHRlcnMgYWxpZ24taXRlbXMtY2VudGVyJyxcclxuICAgIGFjdGlvbnM6IHt9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25QYW5lbDtcclxuIiwiZXhwb3J0IHZhciBTb3J0RGlyZWN0aW9uO1xyXG4oZnVuY3Rpb24gKFNvcnREaXJlY3Rpb24pIHtcclxuICAgIFNvcnREaXJlY3Rpb25bXCJBU0NcIl0gPSBcImFzY1wiO1xyXG4gICAgU29ydERpcmVjdGlvbltcIkRFU0NcIl0gPSBcImRlc2NcIjtcclxufSkoU29ydERpcmVjdGlvbiB8fCAoU29ydERpcmVjdGlvbiA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgU2VsZWN0aW9uVHlwZTtcclxuKGZ1bmN0aW9uIChTZWxlY3Rpb25UeXBlKSB7XHJcbiAgICBTZWxlY3Rpb25UeXBlW1wiU0lOR0xFXCJdID0gXCJzaW5nbGVcIjtcclxuICAgIFNlbGVjdGlvblR5cGVbXCJNVUxUSVBMRVwiXSA9IFwibXVsdGlwbGVcIjtcclxufSkoU2VsZWN0aW9uVHlwZSB8fCAoU2VsZWN0aW9uVHlwZSA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgUmVxdWVzdE1ldGhvZDtcclxuKGZ1bmN0aW9uIChSZXF1ZXN0TWV0aG9kKSB7XHJcbiAgICBSZXF1ZXN0TWV0aG9kW1wiR0VUXCJdID0gXCJHRVRcIjtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJQT1NUXCJdID0gXCJQT1NUXCI7XHJcbiAgICBSZXF1ZXN0TWV0aG9kW1wiREVMRVRFXCJdID0gXCJERUxFVEVcIjtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJQVVRcIl0gPSBcIlBVVFwiO1xyXG4gICAgUmVxdWVzdE1ldGhvZFtcIlBBVENIXCJdID0gXCJQQVRDSFwiO1xyXG59KShSZXF1ZXN0TWV0aG9kIHx8IChSZXF1ZXN0TWV0aG9kID0ge30pKTtcclxuZXhwb3J0IGNvbnN0IFBBR0lOQVRPUl9DTEFTU19OQU1FID0gJ3NmLWpzLWRhdGFncmlkLXBhZ2luYXRvcic7XHJcbmV4cG9ydCBjb25zdCBBQ1RJT05fUEFORUxfQ0xBU1NfTkFNRSA9ICdzZi1qcy1kYXRhZ3JpZC1hY3Rpb25wYW5lbCc7XHJcbmV4cG9ydCBjb25zdCBDVVJTT1JfSURfRklFTEQgPSAnY2lkJztcclxuZXhwb3J0IGNvbnN0IExBU1RfSURfRklFTEQgPSAnbGlkJztcclxuZXhwb3J0IGNvbnN0IHBhZ2VQYXJhbXMgPSBbJ3BhZ2UnLCAnbGltaXQnLCBDVVJTT1JfSURfRklFTEQsIExBU1RfSURfRklFTERdO1xyXG5leHBvcnQgY29uc3Qgc29ydFBhcmFtcyA9IFsnc29ydEJ5JywgJ3NvcnREaXInXTtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTElNSVQgPSAyNTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRHcmlkTWVzc2FnZXMgPSB7XHJcbiAgICBub0RhdGE6ICdObyBEYXRhJyxcclxuICAgIG5vUmVzdWx0czogJ05vIGRhdGEgbWF0Y2hlcyB5b3VyIHNlYXJjaCBjcml0ZXJpYScsXHJcbiAgICBlcnJvcjogJ1Vua25vd24gZXJyb3InLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhZ2luYXRvck1lc3NhZ2VzID0ge1xyXG4gICAgY3VycmVudFBhZ2U6ICdTaG93aW5nIHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0gZW50cmllcycsXHJcbiAgICBjdXJyZW50UGFnZU5vVG90YWw6ICdTaG93aW5nIHtmcm9tfSB0byB7dG99JyxcclxuICAgIGVycm9yOiAnU2hvd2luZyBubyBlbnRyaWVzJyxcclxuICAgIGxpbWl0TGFiZWw6ICdTaG93JyxcclxuICAgIG5leHRQYWdlOiAnwrsnLFxyXG4gICAgcHJldlBhZ2U6ICfCqycsXHJcbiAgICBlbGxpcHNpczogJy4uLicsXHJcbn07XHJcbmV4cG9ydCB2YXIgUGFnaW5hdG9yVHlwZTtcclxuKGZ1bmN0aW9uIChQYWdpbmF0b3JUeXBlKSB7XHJcbiAgICBQYWdpbmF0b3JUeXBlW1wicGFnZXNcIl0gPSBcInBhZ2VzXCI7XHJcbiAgICBQYWdpbmF0b3JUeXBlW1wiaW5maW5pdGVcIl0gPSBcImluZmluaXRlXCI7XHJcbn0pKFBhZ2luYXRvclR5cGUgfHwgKFBhZ2luYXRvclR5cGUgPSB7fSkpO1xyXG5leHBvcnQgY29uc3QgREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FUVFIgPSAnZGF0YS1kYXRhZ3JpZC1zZWxlY3QnO1xyXG5leHBvcnQgY29uc3QgREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FMTF9BVFRSID0gJ2RhdGEtZGF0YWdyaWQtc2VsZWN0LWFsbCc7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbmltcG9ydCBzZiBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XHJcbmltcG9ydCAqIGFzIGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5pbXBvcnQgeyBwYXJzZSwgc3RyaW5naWZ5VXJsIH0gZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IEFjdGlvblBhbmVsIGZyb20gJy4uL2FjdGlvbnBhbmVsL0FjdGlvblBhbmVsJztcclxuaW1wb3J0IHsgREVGQVVMVF9MSU1JVCwgcGFnZVBhcmFtcywgUmVxdWVzdE1ldGhvZCwgU2VsZWN0aW9uVHlwZSwgU29ydERpcmVjdGlvbiwgc29ydFBhcmFtcywgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBleHRyYWN0T3B0aW9ucyB9IGZyb20gJy4uL2V4dHJhY3RPcHRpb25zJztcclxuaW1wb3J0IHsgRGF0YWdyaWRTdGF0ZSB9IGZyb20gJy4vRGF0YWdyaWRTdGF0ZSc7XHJcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi4vcGFnaW5hdG9yL1BhZ2luYXRvcic7XHJcbmltcG9ydCB7IGRlZmF1bHRHcmlkT3B0aW9ucyB9IGZyb20gJy4uL3JlbmRlci9kZWZhdWx0UmVuZGVyZXInO1xyXG5pbXBvcnQgeyBHcmlkUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXIvR3JpZFJlbmRlcmVyJztcclxuaW1wb3J0IHsgbm9ybWFsaXplQ29sdW1ucyB9IGZyb20gJy4uL3V0aWxzJztcclxuZnVuY3Rpb24gbWFrZUdldFVybCh1cmwsIGRhdGEpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKGRhdGEuZmV0Y2hDb3VudCkge1xyXG4gICAgICAgIHJlc3VsdC5mZXRjaENvdW50ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5rZXlzKGRhdGEuZmlsdGVyKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtgZmlsdGVyWyR7ZmllbGR9XWBdID0gZGF0YS5maWx0ZXJbZmllbGRdO1xyXG4gICAgfSk7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhLnBhZ2luYXRlKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtgcGFnaW5hdGVbJHtmaWVsZH1dYF0gPSBkYXRhLnBhZ2luYXRlW2ZpZWxkXTtcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmtleXMoZGF0YS5zb3J0KS5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtgc29ydFske2ZpZWxkfV1gXSA9IGRhdGEuc29ydFtmaWVsZF07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzdHJpbmdpZnlVcmwoeyB1cmwsIHF1ZXJ5OiByZXN1bHQgfSk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhdGFncmlkIGV4dGVuZHMgc2YuY29yZS5CYXNlRE9NQ29uc3RydWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc3NmLCBub2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBEYXRhZ3JpZC5zcGlyYWxGcmFtZXdvcmtOYW1lO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc1RvR3JhYiA9IHtcclxuICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBEYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucy5pZCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdpZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IERhdGFncmlkLmRlZmF1bHRPcHRpb25zLnVybCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLXVybCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBEYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5ncmlkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgRGF0YWdyaWRTdGF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkRm9ybXMgPSB7fTsgLy8gVE9ETzogdHlwZSBhcyBzZi5Gb3JtIGluc3RhbmNlIGFycmF5XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMgPSBbXTsgLy8gVE9ETzogdHlwZSBhcyBzZi5QYWdpbmF0b3IgaW5zdGFuY2UgYXJyYXlcclxuICAgICAgICB0aGlzLmNhcHR1cmVkQWN0aW9uUGFuZWxzID0gW107IC8vIFRPRE86IHR5cGUgYXMgc2YuUGFnaW5hdG9yIGluc3RhbmNlIGFycmF5XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgbGltaXQ6IERFRkFVTFRfTElNSVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluaXQoc3NmLCBub2RlLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgRGF0YWdyaWQuZGVmYXVsdE9wdGlvbnMpLCB0aGlzLm9wdGlvbnMpLCBleHRyYWN0T3B0aW9ucyhub2RlKSk7XHJcbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHRoaXMub3B0aW9ucy5pZCwgJycsICdpZCBzaG91bGQgYmUgbm90IGVtcHR5Jyk7XHJcbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHRoaXMub3B0aW9ucy51cmwsICcnLCAndXJsIHNob3VsZCBiZSBub3QgZW1wdHknKTtcclxuICAgICAgICAvLyBQcm9jZXNzIG9wdGlvbnNcclxuICAgICAgICAvLyBUT0RPOiB3ZSBjYW4gb3ZlcnJpZGUgY29sdW1ucyBhbmQgc29ydCBvcHRpb25zIGluc2lkZSByZW5kZXJlcnMgYnV0IGl0IG1pZ2h0IHByb2R1Y2Ugc2l0dWF0aW9uIG9mIHRyaWdnZXJpbmcgdW5leGlzdGluZyBzb3J0XHJcbiAgICAgICAgLy8gVGhpbmsgYWJvdXQgdGhhdCwgb3IgaWdub3JlXHJcbiAgICAgICAgdGhpcy5jb2x1bW5JbmZvID0gbm9ybWFsaXplQ29sdW1ucyh0aGlzLm9wdGlvbnMuY29sdW1ucywgdGhpcy5vcHRpb25zLnNvcnRhYmxlKTtcclxuICAgICAgICAvLyBTZXQgZGVmYXVsdCBzb3J0IGlmIHByZXNlbnRcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNvcnQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc29ydCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuc29ydEJ5ID0gdGhpcy5vcHRpb25zLnNvcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRzLnNvcnREaXIgPSBTb3J0RGlyZWN0aW9uLkFTQztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuc29ydEJ5ID0gdGhpcy5vcHRpb25zLnNvcnQuZmllbGQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRzLnNvcnREaXIgPSB0aGlzLm9wdGlvbnMuc29ydC5kaXJlY3Rpb24gfHwgU29ydERpcmVjdGlvbi5BU0M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTb3J0KHRoaXMuZGVmYXVsdHMuc29ydEJ5LCB0aGlzLmRlZmF1bHRzLnNvcnREaXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlcmVycygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEZyb21VcmwoKTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVGb3JtcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmFsbEZvcm1zQXR0YWNoZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckZvcm1JbnN0YW5jZShmb3JtSW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoZm9ybUluc3RhbmNlLm9wdGlvbnNcclxuICAgICAgICAgICAgJiYgZm9ybUluc3RhbmNlLm9wdGlvbnMuaWRcclxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVGb3Jtcy5pbmRleE9mKGZvcm1JbnN0YW5jZS5vcHRpb25zLnVybCkgPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBmb3JtSW5zdGFuY2Uub3B0aW9ucztcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gZm9ybUluc3RhbmNlLmVudW1lcmF0ZUZpZWxkTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zW2lkXSA9IHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBmb3JtSW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5qc29uT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChmb3JtSW5zdGFuY2UuZ2V0Rm9ybURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBmb3JtSW5zdGFuY2UuZ2V0Rm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVyZ2VEZWZhdWx0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0Rm9ybURhdGEoaWQsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5iZWZvcmVTdWJtaXRDYWxsYmFjayA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFnaW5hdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5Rm9ybUNoYW5nZShpZCwgb3B0aW9ucy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB1cmxEYXRhRm9yRm9ybSA9IHRoaXMuc3RhdGUudXJsRGF0YVxyXG4gICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnVybERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBmaWVsZHMuaW5kZXhPZihrZXkpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgobWFwLCBrZXkpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1hcCksIHsgW2tleV06IHRoaXMuc3RhdGUudXJsRGF0YVtrZXldIH0pKSwge30pXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKHVybERhdGFGb3JGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtU3BlY2lmaWNEYXRhID0gT2JqZWN0LmtleXModXJsRGF0YUZvckZvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaykgPT4gZmllbGRzLmluZGV4T2YoaykgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChtYXAsIGtleSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWFwKSwgeyBba2V5XTogdXJsRGF0YUZvckZvcm1ba2V5XSB9KSksIHt9KTtcclxuICAgICAgICAgICAgICAgIGZvcm1JbnN0YW5jZS5zZXRGaWVsZFZhbHVlcyhmb3JtU3BlY2lmaWNEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0Rm9ybURhdGEoaWQsIGZvcm1TcGVjaWZpY0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jYXB0dXJlRm9ybXMgPSB0aGlzLm9wdGlvbnMuY2FwdHVyZUZvcm1zLmZpbHRlcigoZikgPT4gZiAhPT0gZm9ybUluc3RhbmNlLm9wdGlvbnMudXJsKTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJQYWdpbmF0b3JJbnN0YW5jZShmb3JtSW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoZm9ybUluc3RhbmNlLm9wdGlvbnMgJiYgZm9ybUluc3RhbmNlLm9wdGlvbnMuaWQgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVGb3Jtcy5pbmRleE9mKGZvcm1JbnN0YW5jZS5vcHRpb25zLmlkKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZWRQYWdpbmF0b3JzLnB1c2goZm9ybUluc3RhbmNlKTtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIGZvcm1JbnN0YW5jZS5vcHRpb25zLndpbGxGZXRjaENvdW50ID0gdGhpcy5vcHRpb25zLmZldGNoQ291bnQ7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5vblBhZ2VDaGFuZ2UgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVQYWdpbmF0b3Iob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNhcHR1cmVGb3JtcyA9IHRoaXMub3B0aW9ucy5jYXB0dXJlRm9ybXMuZmlsdGVyKChmKSA9PiBmICE9PSBmb3JtSW5zdGFuY2Uub3B0aW9ucy5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQWN0aW9uUGFuZWxJbnN0YW5jZShmb3JtSW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoZm9ybUluc3RhbmNlLm9wdGlvbnNcclxuICAgICAgICAgICAgJiYgZm9ybUluc3RhbmNlLm9wdGlvbnMuaWRcclxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVBY3Rpb25QYW5lbHNcclxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVBY3Rpb25QYW5lbHMuaW5kZXhPZihmb3JtSW5zdGFuY2Uub3B0aW9ucy5pZCkgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVkQWN0aW9uUGFuZWxzLnB1c2goZm9ybUluc3RhbmNlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtSW5zdGFuY2UucmVjb25maWd1cmUoeyBzZWxlY3Rpb25UeXBlOiB0aGlzLm9wdGlvbnMuc2VsZWN0YWJsZS50eXBlIH0pO1xyXG4gICAgICAgICAgICAgICAgZm9ybUluc3RhbmNlLnNldFNlbGVjdGlvbih0aGlzLnN0YXRlLnNlbGVjdGlvbiwgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhcHR1cmVGb3JtcygpIHtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IHRoaXMuc2YuZ2V0SW5zdGFuY2VzKCdmb3JtJykgfHwgW107XHJcbiAgICAgICAgZm9ybXMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybUluc3RhbmNlKGYuaW5zdGFuY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRvcnMgPSB0aGlzLnNmLmdldEluc3RhbmNlcyhQYWdpbmF0b3Iuc3BpcmFsRnJhbWV3b3JrTmFtZSkgfHwgW107XHJcbiAgICAgICAgcGFnaW5hdG9ycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYWdpbmF0b3JJbnN0YW5jZShmLmluc3RhbmNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBhY3Rpb25QYW5lbHMgPSB0aGlzLnNmLmdldEluc3RhbmNlcyhBY3Rpb25QYW5lbC5zcGlyYWxGcmFtZXdvcmtOYW1lKSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25QYW5lbHMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWN0aW9uUGFuZWxJbnN0YW5jZShmLmluc3RhbmNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNmLmluc3RhbmNlc0NvbnRyb2xsZXIuZXZlbnRzLm9uKCdvbkFkZEluc3RhbmNlJywgKHsgaW5zdGFuY2UsIHR5cGUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Zvcm0nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gUGFnaW5hdG9yLnNwaXJhbEZyYW1ld29ya05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYWdpbmF0b3JJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IEFjdGlvblBhbmVsLnNwaXJhbEZyYW1ld29ya05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBY3Rpb25QYW5lbEluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHNvcnQgZm9yIHRoaXMgZmllbGQgaWYgbm90IHlldCwgb3IgY2hhbmdlcyBkaXJlY3Rpb24gaWYgYWxyZWFkeSBzYW1lXHJcbiAgICAgKiBAcGFyYW0gZmllbGRJZFxyXG4gICAgICovXHJcbiAgICB0cmlnZ2VyU29ydChmaWVsZElkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydEJ5ID09PSBmaWVsZElkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uQVNDKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQoZmllbGRJZCwgU29ydERpcmVjdGlvbi5ERVNDKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U29ydChmaWVsZElkLCBTb3J0RGlyZWN0aW9uLkFTQyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5jb2x1bW5JbmZvLmZpbmQoKGNJKSA9PiBjSS5pZCA9PT0gZmllbGRJZCk7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTb3J0KGZpZWxkLmlkLCBmaWVsZC5kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gc29ydCBieSB1bnNvcnRhYmxlIGZpZWxkICR7ZmllbGRJZH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0UGFnaW5hdG9yKCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KCk7XHJcbiAgICB9XHJcbiAgICBzZXRBbGxQYWdpbmF0b3JzKHApIHtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkUGFnaW5hdG9ycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmLnNldFBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgZi5zZXRQYXJhbXMocCwgdGhpcy51c2VQcmVmaXgoKSA/IHRoaXMuZ2V0UHJlZml4KCkgOiB0aGlzLm9wdGlvbnMuc2VyaWFsaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzZXRQYWdpbmF0b3IoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZGVwZW5kaW5nIG9uIHBhZ2luYXRvciB0eXBlIHBlcmZvcm0gZGlmZmVyZW50IHJlc2V0IHR5cGVcclxuICAgICAgICB0aGlzLnN0YXRlLnJlc2V0RmV0Y2hDb3VudCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlUGFnaW5hdG9yKHsgcGFnZTogMSB9KTtcclxuICAgICAgICB0aGlzLnNldEFsbFBhZ2luYXRvcnModGhpcy5zdGF0ZS5wYWdpbmF0ZSk7XHJcbiAgICB9XHJcbiAgICBmb3JtUmVxdWVzdCgpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBmZXRjaENvdW50OiB0aGlzLnN0YXRlLm5lZWRGZXRjaENvdW50LFxyXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZ2V0RmlsdGVyKCksXHJcbiAgICAgICAgICAgIHBhZ2luYXRlOiB0aGlzLnN0YXRlLnBhZ2luYXRlLFxyXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnN0YXRlLnNvcnRCeSA/IHsgW3RoaXMuc3RhdGUuc29ydEJ5XTogdGhpcy5zdGF0ZS5zb3J0RGlyIH0gOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIHJlbW92ZSBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNhcHR1cmVkRm9ybXMpLmZvckVhY2goKGZLZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuY2FwdHVyZWRGb3Jtc1tmS2V5XS5pbnN0YW5jZTtcclxuICAgICAgICAgICAgaWYgKGYudW5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLnVubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi51bmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYudW5sb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9ja1R5cGUgfHwgdGhpcy5vcHRpb25zLmxvY2tUeXBlID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XHJcbiAgICAgICAgaWYgKCFsb2NrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IHRyeSB0byBhZGQgXFwnbG9ja1xcJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jYXB0dXJlZEZvcm1zKS5mb3JFYWNoKChmS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmNhcHR1cmVkRm9ybXNbZktleV0uaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIGlmIChmLmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VjY2Vzcyh7IGRhdGEgfSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3VjY2VzcyhkYXRhLmRhdGEsIGRhdGEucGFnaW5hdGlvbik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnBhZ2luYXRpb24uY291bnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25Db3VudEZldGNoZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLnNldEFsbFBhZ2luYXRvcnMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnBhZ2luYXRlKSwgeyBlcnJvcjogZmFsc2UgfSkpO1xyXG4gICAgfVxyXG4gICAgYmVmb3JlU3VibWl0KCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2FwdHVyZWRGb3JtcykuZm9yRWFjaCgoZktleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5jYXB0dXJlZEZvcm1zW2ZLZXldLmluc3RhbmNlO1xyXG4gICAgICAgICAgICBpZiAoZi5yZW1vdmVNZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgZi5yZW1vdmVNZXNzYWdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFcnJvcihyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzLCBzdGF0dXNUZXh0IH0gPSB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRFcnJvcihkYXRhLmVycm9yLCBkYXRhLmVycm9ycywgdGhpcy5vcHRpb25zLnJlc2V0T25FcnJvcik7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jYXB0dXJlZEZvcm1zKS5mb3JFYWNoKChmS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmNhcHR1cmVkRm9ybXNbZktleV0uaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIGlmIChmLnByb2Nlc3NBbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZi5vcHRpb25zLnVybDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGRhdGEsIHJlc3QgPSBfX3Jlc3QoZGF0YSwgW1wiZXJyb3JcIl0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gaWQgPT09IHRoaXMub3B0aW9ucy5lcnJvck1lc3NhZ2VUYXJnZXQgPyBPYmplY3QuYXNzaWduKHt9LCBkYXRhKSA6IHJlc3Q7XHJcbiAgICAgICAgICAgICAgICBmLnByb2Nlc3NBbnN3ZXIoeyBkYXRhOiBmaWx0ZXJlZERhdGEsIHN0YXR1cywgc3RhdHVzVGV4dCB9LCBmYWxzZSk7IC8vIGZhbHNlIHN0YW5kcyBmb3IgJ2RvbnQgZGlzcGxheSBlcnJvcnMgdW5yZWxhdGVkIHRvIGZvcm0gaW5wdXRzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxQYWdpbmF0b3JzKHsgZXJyb3I6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgZGF0YSBhbmQgZGlzcGxheSBlcnJvclxyXG4gICAgICAgIC8vIFRPRE86IHNlbmQgdmFsaWRhdGlvbiBlcnJvcnMgdG8gb3RoZXIgZm9ybXNcclxuICAgIH1cclxuICAgIHJlcXVlc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbEZvcm1zQXR0YWNoZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDYW50IHN0YXJ0IG5ldyByZXF1ZXN0LCBub3QgYWxsIGZvcm1zIGFyZSB5ZXQgYXR0YWNoZWQnLCB0aGlzLm9wdGlvbnMuY2FwdHVyZUZvcm1zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FudCBzdGFydCBuZXcgcmVxdWVzdCwgb2xkIG9uZSBpcyBydW5uaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFydExvYWRpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5iZWZvcmVTdWJtaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NrKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXJsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzR2V0ID0gdGhpcy5vcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBSZXF1ZXN0TWV0aG9kLkdFVDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZm9ybVJlcXVlc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuc2YuYWpheC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIHVybDogaXNHZXQgPyBtYWtlR2V0VXJsKHRoaXMub3B0aW9ucy51cmwsIGRhdGEpIDogdGhpcy5vcHRpb25zLnVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5vcHRpb25zLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMub3B0aW9ucy5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaXNHZXQgPyB1bmRlZmluZWQgOiBkYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5wcm9jZXNzUmVzcG9uc2UoeWllbGQgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVN1Y2Nlc3MocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5pc1NGQWpheEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvcjogZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdG9wTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVSZW5kZXJlcnMoKSB7XHJcbiAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbCh0aGlzLmdyaWRzLCBbXSwgJ0dyaWRzIGFyZSBhbHJlYWR5IGluaXRpYWxpemVkJyk7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyTGlzdCA9IEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnJlbmRlcmVycykgPyB0aGlzLm9wdGlvbnMucmVuZGVyZXJzIDogW3RoaXMub3B0aW9ucy5yZW5kZXJlcnNdO1xyXG4gICAgICAgIHJlbmRlckxpc3QuZm9yRWFjaCgocmVuZGVyT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZHMucHVzaChuZXcgR3JpZFJlbmRlcmVyKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVuZGVyT3B0aW9uKSwgeyB1aTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMudWkpLCByZW5kZXJPcHRpb24udWkpLCBjb2x1bW5zOiAocmVuZGVyT3B0aW9uLmNvbHVtbnMgJiYgcmVuZGVyT3B0aW9uLmNvbHVtbnMubGVuZ3RoKSA/IHJlbmRlck9wdGlvbi5jb2x1bW5zIDogdGhpcy5vcHRpb25zLmNvbHVtbnMsIHNvcnRhYmxlOiAocmVuZGVyT3B0aW9uLnNvcnRhYmxlICYmIHJlbmRlck9wdGlvbi5zb3J0YWJsZS5sZW5ndGgpID8gcmVuZGVyT3B0aW9uLnNvcnRhYmxlIDogdGhpcy5vcHRpb25zLnNvcnRhYmxlLCBwYWdpbmF0b3I6IHR5cGVvZiByZW5kZXJPcHRpb24ucGFnaW5hdG9yID09PSAndW5kZWZpbmVkJyA/IHRoaXMub3B0aW9ucy5wYWdpbmF0b3IgOiByZW5kZXJPcHRpb24ucGFnaW5hdG9yLCBkb250UmVuZGVyRXJyb3I6ICEhdGhpcy5vcHRpb25zLmVycm9yTWVzc2FnZVRhcmdldCwgc2VsZWN0YWJsZTogcmVuZGVyT3B0aW9uLnNlbGVjdGFibGUgfHwgdGhpcy5vcHRpb25zLnNlbGVjdGFibGUsIG1lc3NhZ2VzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5tZXNzYWdlcyksIHJlbmRlck9wdGlvbi5tZXNzYWdlcyksIHBhZ2luYXRvck1lc3NhZ2VzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5wYWdpbmF0b3JNZXNzYWdlcyksIHJlbmRlck9wdGlvbi5wYWdpbmF0b3JNZXNzYWdlcykgfSksIHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcclxuICAgICAgICAgICAgZ3JpZC5yZW5kZXIodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDaGVja2JveGVzKCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xyXG4gICAgICAgICAgICBncmlkLnVwZGF0ZUNoZWNrYm94ZXModGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZEFjdGlvblBhbmVscy5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgICAgIGEuc2V0U2VsZWN0aW9uKHRoaXMuc3RhdGUuc2VsZWN0aW9uLCB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlU2VsZWN0aW9uQWxsKGNoZWNrZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGFibGUpIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0QWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlc2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGVja2JveGVzKCk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVTZWxlY3Rpb24odmFsdWUsIGNoZWNrZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGFibGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RhYmxlLnR5cGUgPT09IFNlbGVjdGlvblR5cGUuTVVMVElQTEUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZGRUb1NlbGVjdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlbW92ZUZyb21TZWxlY3Rpb24odmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0U2luZ2xlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94ZXMoKTtcclxuICAgIH1cclxuICAgIHNlcmlhbGl6ZSgpIHtcclxuICAgICAgICBjb25zdCBjdXN0b20gPSB0aGlzLnN0YXRlLmdldEZpbHRlcigpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLnBhZ2luYXRlKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChrKSA9PiBwYWdlUGFyYW1zLmluZGV4T2YoaykgPj0gMClcclxuICAgICAgICAgICAgLnJlZHVjZSgobWFwLCBrZXkpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1hcCksIHsgW2tleV06IHRoaXMuc3RhdGUucGFnaW5hdGVba2V5XSB9KSksIHt9KTtcclxuICAgICAgICBjb25zdCBzb3J0T3B0aW9ucyA9IHRoaXMuc3RhdGUuc29ydEJ5ID8geyBzb3J0Qnk6IHRoaXMuc3RhdGUuc29ydEJ5LCBzb3J0RGlyOiB0aGlzLnN0YXRlLnNvcnREaXIgfSA6IHt9O1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3VzdG9tKSwgcGFnaW5hdGlvbiksIHNvcnRPcHRpb25zKTtcclxuICAgIH1cclxuICAgIGRlc2VyaWFsaXplKHZhbHVlcykge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZSwgbGltaXQsIGNpZCwgbGlkIH0gPSB2YWx1ZXMsIHJlc3QgPSBfX3Jlc3QodmFsdWVzLCBbXCJwYWdlXCIsIFwibGltaXRcIiwgXCJjaWRcIiwgXCJsaWRcIl0pO1xyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRvclVwZGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5kZWZhdWx0cy5wYWdlLFxyXG4gICAgICAgICAgICBsaW1pdDogdGhpcy5kZWZhdWx0cy5saW1pdCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwYWdlKSB7XHJcbiAgICAgICAgICAgIHBhZ2luYXRvclVwZGF0ZS5wYWdlID0gK3BhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsaW1pdCkge1xyXG4gICAgICAgICAgICBwYWdpbmF0b3JVcGRhdGUubGltaXQgPSArbGltaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaWQpIHtcclxuICAgICAgICAgICAgcGFnaW5hdG9yVXBkYXRlLmNpZCA9IGNpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpZCkge1xyXG4gICAgICAgICAgICBwYWdpbmF0b3JVcGRhdGUubGlkID0gbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZVBhZ2luYXRvcihwYWdpbmF0b3JVcGRhdGUpO1xyXG4gICAgICAgIGNvbnN0IHsgc29ydEJ5LCBzb3J0RGlyIH0gPSByZXN0LCByZXN0MiA9IF9fcmVzdChyZXN0LCBbXCJzb3J0QnlcIiwgXCJzb3J0RGlyXCJdKTtcclxuICAgICAgICBpZiAoc29ydEJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U29ydChzb3J0QnksIHNvcnREaXIgfHwgU29ydERpcmVjdGlvbi5BU0MpOyAvLyBUT0RPOiBza2lwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFsuLi5wYWdlUGFyYW1zLCAuLi5zb3J0UGFyYW1zXS5mb3JFYWNoKChwKSA9PiBkZWxldGUgcmVzdDJbcF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXJsRGF0YSA9IHJlc3QyO1xyXG4gICAgfVxyXG4gICAgdXNlUHJlZml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VyaWFsaXplICYmIHRoaXMub3B0aW9ucy5uYW1lc3BhY2U7XHJcbiAgICB9XHJcbiAgICBnZXRQcmVmaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlUHJlZml4KCkgPyAoYCR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZSB8fCAnJ30tYCkgOiAnJztcclxuICAgIH1cclxuICAgIGluaXRGcm9tVXJsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWFsaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxEYXRhID0gdGhpcy5nZXRPYmplY3RGcm9tVXJsKHRoaXMuZ2V0RGVmYXVsdHMoKSwgdGhpcy5nZXRQcmVmaXgoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModXJsRGF0YSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlcmlhbGl6ZSh1cmxEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVVybCgpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5zZXJpYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRPYmplY3RUb1VybChkYXRhLCB0aGlzLmdldERlZmF1bHRzKCksIHRoaXMuZ2V0UHJlZml4KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXHJcbiAgICBnZXRPYmplY3RGcm9tVXJsKGRlZmF1bHRzLCBwcmVmaXggPSAnJykge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsIHsgcGFyc2VOdW1iZXJzOiB0cnVlLCBwYXJzZUJvb2xlYW5zOiB0cnVlIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChtYXAsIG9LKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcHJlZml4IHx8IG9LLmluZGV4T2YocHJlZml4KSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWFwKSwgeyBbb0suc3Vic3RyKHByZWZpeC5sZW5ndGgpXTogKHR5cGVvZiBvYmpbb0tdICE9PSAndW5kZWZpbmVkJykgPyBvYmpbb0tdIDogZGVmYXVsdHNbb0suc3Vic3RyKHByZWZpeC5sZW5ndGgpXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHV0T2JqZWN0VG9Vcmwob2JqMSwgZGVmYXVsdHMsIHByZWZpeCA9ICcnKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuaGlzdG9yeSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NhbnQgdXBkYXRlIFVSTCB3aXRob3V0IHJlbG9hZCwgc2tpcHBpbmcnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBxdWVyeVJhdyA9IE9iamVjdC5rZXlzKG9iajEpLnJlZHVjZSgobWFwLCBvSykgPT4ge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXHJcbiAgICAgICAgICAgIGlmIChvYmoxW29LXSAmJiBvYmoxW29LXSAhPSBkZWZhdWx0c1tvS10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1hcCksIHsgW2Ake3ByZWZpeH0ke29LfWBdOiBvYmoxW29LXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgICBsZXQgb2JqMiA9IHBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsIHsgcGFyc2VOdW1iZXJzOiB0cnVlLCBwYXJzZUJvb2xlYW5zOiB0cnVlIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnVzZVByZWZpeCgpKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrLmluZGV4T2YodGhpcy5nZXRQcmVmaXgoKSkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqMltrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYmoyID0ge307IC8vIElmIHRhYmxlIGlzIG5vdCB1c2luZyBwcmVmaXhlcywgYWxsIHBhcmFtcyBhcmUgdGhhdCB0YWJsZSBwYXJhbXNcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9iajIpLCBxdWVyeVJhdyk7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgc3RyaW5naWZ5VXJsKHtcclxuICAgICAgICAgICAgdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWAsXHJcbiAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGdldERlZmF1bHRzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdHMpLCB0aGlzLnN0YXRlLmRlZmF1bHREYXRhKTtcclxuICAgIH1cclxuICAgIGFsbEZvcm1zQXR0YWNoZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXB0dXJlRm9ybXMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgYXBwbHlGb3JtQ2hhbmdlKGlkLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zW2lkXS5maWVsZHMgPSBbLi4ubmV3IFNldChbLi4uT2JqZWN0LmtleXMoZGF0YSksIC4uLnRoaXMuY2FwdHVyZWRGb3Jtc1tpZF0uZmllbGRzXSldOyAvLyBNZXJnZSBuZXcgZmllbGRzIGlmIGFueVxyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0Rm9ybURhdGEoaWQsIGRhdGEpOyAvLyBzZXQgZGF0YSBmb3Igc3BlY2lmaWMgZm9ybVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2FwdHVyZWRGb3JtcykuZmlsdGVyKChmb3JtSWQpID0+IGZvcm1JZCAhPT0gaWQpLmZvckVhY2goKGZvcm1JZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtSW5zdGFuY2UgPSB0aGlzLmNhcHR1cmVkRm9ybXNbZm9ybUlkXTtcclxuICAgICAgICAgICAgY29uc3QgeyBmaWVsZHMgfSA9IGZvcm1JbnN0YW5jZTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybVNwZWNpZmljRGF0YSA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcigoaykgPT4gZmllbGRzLmluZGV4T2YoaykgPj0gMCkucmVkdWNlKChtYXAsIGtleSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWFwKSwgeyBba2V5XTogZGF0YVtrZXldIH0pKSwge30pO1xyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2UuaW5zdGFuY2Uuc2V0RmllbGRWYWx1ZXMoZm9ybVNwZWNpZmljRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzUmVzcG9uc2UoYXhpb3NSZXNwb25zZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVzcG9uc2VQcm9jZXNzb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZXNwb25zZVByb2Nlc3NvcihheGlvc1Jlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kYXRhRmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5vcHRpb25zLmRhdGFGaWVsZDtcclxuICAgICAgICAgICAgaWYgKGF4aW9zUmVzcG9uc2UuZGF0YSAmJiBheGlvc1Jlc3BvbnNlLmRhdGFba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQSBzdWNjZXNzIGFuc3dlciBpdCBzZWVtcywgcHV0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBheGlvc1Jlc3BvbnNlKSwgeyBkYXRhOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGF4aW9zUmVzcG9uc2UuZGF0YSksIHsgZGF0YTogYXhpb3NSZXNwb25zZS5kYXRhW2tleV0gfSkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zUmVzcG9uc2U7XHJcbiAgICB9XHJcbn1cclxuRGF0YWdyaWQuc3BpcmFsRnJhbWV3b3JrTmFtZSA9ICdkYXRhZ3JpZCc7XHJcbkRhdGFncmlkLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdEdyaWRPcHRpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBEYXRhZ3JpZDtcclxuIiwiaW1wb3J0IHsgREVGQVVMVF9MSU1JVCwgU29ydERpcmVjdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBjbGFzcyBEYXRhZ3JpZFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYWdpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBsaW1pdDogREVGQVVMVF9MSU1JVCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVmYXVsdERhdGE6IHt9LFxyXG4gICAgICAgICAgICBmZXRjaENvdW50OiBmYWxzZSxcclxuICAgICAgICAgICAgc29ydERpcjogU29ydERpcmVjdGlvbi5BU0MsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICBmb3JtRGF0YToge30sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbjogbmV3IFNldCgpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaENvdW50ID0gdGhpcy5wYXJlbnQub3B0aW9ucy5mZXRjaENvdW50O1xyXG4gICAgfVxyXG4gICAgaXNTZWxlY3RlZCh2YWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3Rpb24uaGFzKFN0cmluZyh2YWwpKTtcclxuICAgIH1cclxuICAgIGFyZUFsbFNlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEucmVkdWNlKChoYXNJdCwgaXRlbSkgPT4gaGFzSXRcclxuICAgICAgICAgICAgJiYgISF0aGlzLnBhcmVudC5vcHRpb25zLnNlbGVjdGFibGVcclxuICAgICAgICAgICAgJiYgdGhpcy5pc1NlbGVjdGVkKFN0cmluZyhpdGVtW3RoaXMucGFyZW50Lm9wdGlvbnMuc2VsZWN0YWJsZS5pZF0pKSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGlvbjtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgZ2V0IGlzQ3VzdG9tU2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5zdGF0ZS5mb3JtRGF0YSkucmVkdWNlKChpc0RlZmF1bHQsIGZvcm1LZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLnN0YXRlLmZvcm1EYXRhW2Zvcm1LZXldO1xyXG4gICAgICAgICAgICBjb25zdCBpc0ZEZWZhdWx0ID0gT2JqZWN0LmtleXMoZm9ybURhdGEpLnJlZHVjZSgoaXNELCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGZvcm1EYXRhW2ZpZWxkXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGFbZmllbGRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUgJiYgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0QgJiYgKGZpZWxkVmFsdWUgPT0gZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgoIWZpZWxkVmFsdWUgJiYgZGVmYXVsdFZhbHVlKSB8fCAoZmllbGRWYWx1ZSAmJiAhZGVmYXVsdFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0Q7XHJcbiAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXNEZWZhdWx0ICYmIGlzRkRlZmF1bHQ7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0ZWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpbHRlcigoaXRlbSkgPT4gISF0aGlzLnBhcmVudC5vcHRpb25zLnNlbGVjdGFibGUgJiYgdGhpcy5pc1NlbGVjdGVkKFN0cmluZyhpdGVtW3RoaXMucGFyZW50Lm9wdGlvbnMuc2VsZWN0YWJsZS5pZF0pKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNMb2FkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICB9XHJcbiAgICBzdGFydExvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGdldCBuZWVkRmV0Y2hDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5mZXRjaENvdW50O1xyXG4gICAgfVxyXG4gICAgcmVzZXRGZXRjaENvdW50KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hDb3VudCA9IHRoaXMucGFyZW50Lm9wdGlvbnMuZmV0Y2hDb3VudDtcclxuICAgIH1cclxuICAgIG9uQ291bnRGZXRjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hDb3VudCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc3RvcExvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXRhO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhZ2luYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBhZ2luYXRvcjtcclxuICAgIH1cclxuICAgIGdldCB1cmxEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnVybERhdGE7XHJcbiAgICB9XHJcbiAgICBzZXQgdXJsRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cmxEYXRhID0gZGF0YTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVBhZ2luYXRvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnBhZ2luYXRvciA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5wYWdpbmF0b3IpLCBwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXQgaGFzRXJyb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zdGF0ZS5lcnJvcjtcclxuICAgIH1cclxuICAgIGdldCBlcnJvck1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZXJyb3I7XHJcbiAgICB9XHJcbiAgICBnZXQgc29ydEJ5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNvcnRCeTtcclxuICAgIH1cclxuICAgIGdldCBzb3J0RGlyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNvcnREaXI7XHJcbiAgICB9XHJcbiAgICBzZXRTdWNjZXNzKGRhdGEsIHBhZ2luYXRpb24pIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0b3IocGFnaW5hdGlvbik7XHJcbiAgICB9XHJcbiAgICBzZXRFcnJvcihlcnJvciwgZXJyb3JzID0ge30sIHJlc2V0RGF0YSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHJlc2V0RGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3JzID0gZXJyb3JzO1xyXG4gICAgfVxyXG4gICAgc2V0U29ydChmaWVsZCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zb3J0QnkgPSBmaWVsZDtcclxuICAgICAgICB0aGlzLnN0YXRlLnNvcnREaXIgPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzZXRGb3JtRGF0YShmb3JtSWQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmZvcm1EYXRhW2Zvcm1JZF0gPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgZ2V0RmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1zID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5mb3JtRGF0YSkucmVkdWNlKChwcmV2LCBrZXkpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXYpLCB0aGlzLnN0YXRlLmZvcm1EYXRhW2tleV0pKSwge30pO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUudXJsRGF0YSksIGZvcm1zKTtcclxuICAgIH1cclxuICAgIGFkZFRvU2VsZWN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24uYWRkKFN0cmluZyh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRnJvbVNlbGVjdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLmRlbGV0ZShTdHJpbmcodmFsdWUpKTtcclxuICAgIH1cclxuICAgIHNlbGVjdFNpbmdsZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24uYWRkKFN0cmluZyh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb24uY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHNlbGVjdEFsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQub3B0aW9ucy5zZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uID0gbmV3IFNldCh0aGlzLmRhdGEubWFwKChpdGVtKSA9PiBTdHJpbmcoaXRlbVt0aGlzLnBhcmVudC5vcHRpb25zLnNlbGVjdGFibGUuaWRdKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1lcmdlRGVmYXVsdERhdGEoZGF0YSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kZWZhdWx0RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kZWZhdWx0RGF0YSksIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlZmF1bHREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBleHRyYWN0T3B0aW9ucyA9IChub2RlKSA9PiB7XHJcbiAgICBjb25zdCBhZGRpdGlvbmFsT3B0aW9uc0VsID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbcm9sZT1cInNmLW9wdGlvbnNcIl0nKTtcclxuICAgIGlmIChhZGRpdGlvbmFsT3B0aW9uc0VsKSB7XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxPcHRpb25zRWwuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9uZSA9IEZ1bmN0aW9uKGBcInVzZSBzdHJpY3RcIjtyZXR1cm4gJHthZGRpdGlvbmFsT3B0aW9uc0VsLmlubmVySFRNTC50cmltKCl9YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuICcgKyBhZGRpdGlvbmFsT3B0aW9uc0VsLmlubmVySFRNTC50cmltKCkgKyAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVycmlkZXMgPSBvbmUoKSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG92ZXJyaWRlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IHBhcnNlIG9wdGlvbnMgaW5zaWRlIHNjcmlwdCwgZW5zdXJlIHNjcmlwdCBpbnNpZGUgaXMgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIHJldHVybmluZyBvYmplY3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGFkZGl0aW9uYWxPcHRpb25zRWwuaW5uZXJIVE1MLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBwYXJzZSBvcHRpb25zIGluc2lkZSBzY3JpcHQsIGVuc3VyZSBzY3JpcHQgaW5zaWRlIGlzIGEgSlNPTicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuIiwiaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuaW1wb3J0IEFjdGlvblBhbmVsIGZyb20gJy4vYWN0aW9ucGFuZWwvQWN0aW9uUGFuZWwnO1xyXG5pbXBvcnQgeyBBQ1RJT05fUEFORUxfQ0xBU1NfTkFNRSwgUEFHSU5BVE9SX0NMQVNTX05BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBEYXRhR3JpZCBmcm9tICcuL2RhdGFncmlkL0RhdGFncmlkJztcclxuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL3BhZ2luYXRvci9QYWdpbmF0b3InO1xyXG5zZi5yZWdpc3Rlckluc3RhbmNlVHlwZShEYXRhR3JpZCwgJ3NmLWpzLWRhdGFncmlkJyk7XHJcbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKFBhZ2luYXRvciwgUEFHSU5BVE9SX0NMQVNTX05BTUUpO1xyXG5zZi5yZWdpc3Rlckluc3RhbmNlVHlwZShBY3Rpb25QYW5lbCwgQUNUSU9OX1BBTkVMX0NMQVNTX05BTUUpO1xyXG5leHBvcnQgZGVmYXVsdCBEYXRhR3JpZDsgLy8gRVM2IGRlZmF1bHQgZXhwb3J0IHdpbGwgbm90IGV4cG9zZSB1cyBhcyBnbG9iYWxcclxuIiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2VzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRlZmluaXRpb25zLCBkZWZhdWx0RGVmaW5pdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVmaW5pdGlvbnMgPSBkZWZhdWx0RGVmaW5pdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXRNZXNzYWdlKG1lc3NhZ2VLZXksIHZhbHVlcyA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdFxyXG4gICAgICAgICAgICAua2V5cyh2YWx1ZXMpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGtleSkgPT4gcHJldi5zcGxpdChgeyR7a2V5fX1gKS5qb2luKCh0eXBlb2YgdmFsdWVzW2tleV0gPT09ICd1bmRlZmluZWQnKSA/ICcnIDogU3RyaW5nKHZhbHVlc1trZXldKSksICh0aGlzLmRlZmluaXRpb25zW21lc3NhZ2VLZXldIHx8IHRoaXMuZGVmYXVsdERlZmluaXRpb25zW21lc3NhZ2VLZXldIHx8ICcnKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuaW1wb3J0IHsgc3RyaW5naWZ5VXJsIH0gZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IHsgREVGQVVMVF9MSU1JVCwgZGVmYXVsdFBhZ2luYXRvck1lc3NhZ2VzLCBQYWdpbmF0b3JUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZXh0cmFjdE9wdGlvbnMgfSBmcm9tICcuLi9leHRyYWN0T3B0aW9ucyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VzIH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xyXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yIGV4dGVuZHMgc2YuY29yZS5CYXNlRE9NQ29uc3RydWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc3NmLCBub2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBQYWdpbmF0b3Iuc3BpcmFsRnJhbWV3b3JrTmFtZTtcclxuICAgICAgICB0aGlzLm9wdGlvbnNUb0dyYWIgPSB7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zLmlkLFxyXG4gICAgICAgICAgICAgICAgZG9tQXR0cjogJ2lkJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucy50eXBlLFxyXG4gICAgICAgICAgICAgICAgZG9tQXR0cjogJ2RhdGEtdHlwZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpbGxGZXRjaENvdW50OiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zLndpbGxGZXRjaENvdW50LFxyXG4gICAgICAgICAgICAgICAgZG9tQXR0cjogJ2RhdGEtZmV0Y2gtY291bnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbWl0OiBERUZBVUxUX0xJTUlULFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbml0KHNzZiwgbm9kZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucyksIHRoaXMub3B0aW9ucyksIGV4dHJhY3RPcHRpb25zKG5vZGUpKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1lc3NhZ2VzKHRoaXMub3B0aW9ucy5tZXNzYWdlcyB8fCB7fSwgZGVmYXVsdFBhZ2luYXRvck1lc3NhZ2VzKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNmLnJlbW92ZUluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSB0cnkgdG8gcmVtb3ZlIFxcJ2xvY2tcXCcgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBzdGFydGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9jaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLnNmLmFkZEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlLCB7IHR5cGU6IHRoaXMub3B0aW9ucy5sb2NrVHlwZSB9KTtcclxuICAgICAgICBpZiAoIWxvY2spIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIGFkZCBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBhbHJlYWR5IHN0YXJ0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXMocGFyYW1zLCBzZXJpYWxpemUpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCBwYXJhbXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBoYXNQYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuc3RhdGUucGFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuc3RhdGUubGltaXQgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgfVxyXG4gICAgaGFzVG90YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53aWxsRmV0Y2hDb3VudCAmJiB0eXBlb2YgdGhpcy5zdGF0ZS5jb3VudCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcbiAgICBoYXNMaW1pdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMubGltaXRPcHRpb25zICE9PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuICAgIGdlbmVyYXRlUGFnZUxpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5kQ3VycmVudCA9IDE7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuc3RhdGUucGFnZTtcclxuICAgICAgICBjb25zdCBwYWdlc0NvdW50ID0gdGhpcy5oYXNUb3RhbCgpID8gTWF0aC5jZWlsKHRoaXMuc3RhdGUuY291bnQgLyB0aGlzLnN0YXRlLmxpbWl0KSA6IHBhZ2U7XHJcbiAgICAgICAgY29uc3QgaGFzTmV4dCA9IHRoaXMuaGFzVG90YWwoKSA/IChwYWdlIDwgcGFnZXNDb3VudCkgOiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gcGFnZSA+IDE7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJhbmdlID0gW01hdGgubWF4KHBhZ2UgLSBleHRlbmRDdXJyZW50LCAxKSwgTWF0aC5taW4ocGFnZSArIGV4dGVuZEN1cnJlbnQsIHBhZ2VzQ291bnQpXTtcclxuICAgICAgICBjb25zdCBzdGFydFJhbmdlID0gWzEsIE1hdGgubWluKGV4dGVuZEN1cnJlbnQgKyAxLCBwYWdlc0NvdW50KV07XHJcbiAgICAgICAgY29uc3QgZW5kUmFuZ2UgPSBbTWF0aC5tYXgocGFnZXNDb3VudCAtIGV4dGVuZEN1cnJlbnQsIDEpLCBwYWdlc0NvdW50XTtcclxuICAgICAgICBjb25zdCBwYWdlcyA9IFtdO1xyXG4gICAgICAgIGxldCBpID0gMTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGFnZTogaSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGAke2l9YCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcGFnZSA9PT0gaSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChpID49IHN0YXJ0UmFuZ2VbMV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIHJlYWNoZWQgbGFzdCBwYWdlIGZvciBzdGFydCByYW5nZVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgY3VycmVudFJhbmdlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcGFnZSBpcyBtb3JlIHRoYW4gMSBwYWdlIGZ1cnRoZXIgZnJvbSBuZXh0IHBhZ2UgaW4gcmFuZ2UsIGFkZCBlbGxpcHNpcyBhbmQganVtcFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMubWVzc2FnZXMuZ2V0TWVzc2FnZSgnZWxsaXBzaXMnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcclxuICAgICAgICAgICAgICAgICAgICBpID0gY3VycmVudFJhbmdlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpID49IGN1cnJlbnRSYW5nZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgcmVhY2hlZCBsYXN0IHBhZ2UgZm9yIGN1cnJlbnQgcGFnZSByYW5nZVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgZW5kUmFuZ2VbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBwYWdlIGlzIG1vcmUgdGhhbiAxIHBhZ2UgZnVydGhlciBmcm9tIG5leHQgcGFnZSBpbiByYW5nZSwgYWRkIGVsbGlwc2lzIGFuZCBqdW1wXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5tZXNzYWdlcy5nZXRNZXNzYWdlKCdlbGxpcHNpcycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBlbmRSYW5nZVswXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgfSB3aGlsZSAoaSA8PSBwYWdlc0NvdW50KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYWdlcyxcclxuICAgICAgICAgICAgaGFzTmV4dCxcclxuICAgICAgICAgICAgaGFzUHJldmlvdXMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldExpbWl0KGxpbWl0KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5saW1pdCA9IGxpbWl0O1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25QYWdlQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblBhZ2VDaGFuZ2UodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQYWdlKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25QYWdlQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblBhZ2VDaGFuZ2UodGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY291bnRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvdW50ZXJEaXYuY2xhc3NOYW1lID0gJ2NvbC0xMiBjb2wtbGctNCc7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzUGFnZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNUb3RhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyRGl2LmlubmVySFRNTCA9IHRoaXMubWVzc2FnZXMuZ2V0TWVzc2FnZSgnY3VycmVudFBhZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRoaXMuc3RhdGUuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLnN0YXRlLmxpbWl0LFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICh0aGlzLnN0YXRlLnBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUubGltaXQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiB0aGlzLnN0YXRlLnBhZ2UgKiB0aGlzLnN0YXRlLmxpbWl0LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyRGl2LmlubmVySFRNTCA9IHRoaXMubWVzc2FnZXMuZ2V0TWVzc2FnZSgnY3VycmVudFBhZ2VOb1RvdGFsJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiB0aGlzLnN0YXRlLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5zdGF0ZS5saW1pdCxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiAodGhpcy5zdGF0ZS5wYWdlIC0gMSkgKiB0aGlzLnN0YXRlLmxpbWl0ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogdGhpcy5zdGF0ZS5wYWdlICogdGhpcy5zdGF0ZS5saW1pdCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXJEaXYuaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlcy5nZXRNZXNzYWdlKCdlcnJvcicsIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsOiB0aGlzLnN0YXRlLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgcGFnZTogdGhpcy5zdGF0ZS5wYWdlLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuc3RhdGUubGltaXQsXHJcbiAgICAgICAgICAgICAgICBmcm9tOiAodGhpcy5zdGF0ZS5wYWdlIC0gMSkgKiB0aGlzLnN0YXRlLmxpbWl0ICsgMSxcclxuICAgICAgICAgICAgICAgIHRvOiB0aGlzLnN0YXRlLnBhZ2UgKiB0aGlzLnN0YXRlLmxpbWl0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGltaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaW1pdERpdi5jbGFzc05hbWUgPSAnY29sLTQgY29sLW1kLTIgY29sLWxnLTInO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0xpbWl0T3B0aW9ucygpKSB7XHJcbiAgICAgICAgICAgIGxpbWl0RGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3cgbWItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbC1zbSBjb2wtYXV0b1wiPiR7dGhpcy5tZXNzYWdlcy5nZXRNZXNzYWdlKCdsaW1pdExhYmVsJyl9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwibGltaXRcIiBjbGFzcz1cImN1c3RvbS1zZWxlY3QgY3VzdG9tLXNlbGVjdC1zbSBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGxpbWl0RGl2LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubGltaXRPcHRpb25zLmZvckVhY2goKG9wdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBgJHtvcHR9YDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBgJHtvcHR9YDtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQgPT09IHRoaXMuc3RhdGUubGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZWN0LnZhbHVlID0gYCR7dGhpcy5zdGF0ZS5saW1pdH1gO1xyXG4gICAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMaW1pdCgrc2VsZWN0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZXNEaXYuY2xhc3NOYW1lID0gJ2NvbC04IGNvbC1tZC0xMCBjb2wtbGctNic7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzUGFnZXMoKSkge1xyXG4gICAgICAgICAgICBwYWdlc0Rpdi5pbm5lckhUTUwgPSAnPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIGp1c3RpZnktY29udGVudC1lbmQgbWItMFwiPic7XHJcbiAgICAgICAgICAgIGNvbnN0IHVsID0gcGFnZXNEaXYucXVlcnlTZWxlY3RvcigndWwnKTtcclxuICAgICAgICAgICAgY29uc3QgcGFnZUluZm8gPSB0aGlzLmdlbmVyYXRlUGFnZUxpc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgYWRkTGkgPSAoY2xhc3NOYW1lLCB0ZXh0LCB1cmwsIG9uQ2xpY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHt1cmwgfHwgJyMnfVwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicGFnZS1saW5rXCI+JHt0ZXh0fTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB1cmxGb3JQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLnNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZ5VXJsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLm9wdGlvbnMuc2VyaWFsaXplID09PSB0cnVlID8gJ3BhZ2UnIDogYCR7dGhpcy5vcHRpb25zLnNlcmlhbGl6ZX1wYWdlYF06IHBhZ2UudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrRm9yUGFnZSA9IChwYWdlKSA9PiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdlKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBhZGRMaShwYWdlSW5mby5oYXNQcmV2aW91cyA/ICdwYWdlLWl0ZW0gcHJldmlvdXMnIDogJ3BhZ2UtaXRlbSBwcmV2aW91cyBkaXNhYmxlZCcsIHRoaXMubWVzc2FnZXMuZ2V0TWVzc2FnZSgncHJldlBhZ2UnKSwgcGFnZUluZm8uaGFzUHJldmlvdXMgPyB1cmxGb3JQYWdlKHRoaXMuc3RhdGUucGFnZSAtIDEpIDogdW5kZWZpbmVkLCBwYWdlSW5mby5oYXNQcmV2aW91cyA/IGNsaWNrRm9yUGFnZSh0aGlzLnN0YXRlLnBhZ2UgLSAxKSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIHBhZ2VJbmZvLnBhZ2VzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZExpKHAuYWN0aXZlID8gJ3BhZ2UtaXRlbSBhY3RpdmUnIDogJ3BhZ2UtaXRlbScsIHAudGV4dCwgcC5wYWdlID8gdXJsRm9yUGFnZShwLnBhZ2UpIDogdW5kZWZpbmVkLCBwLnBhZ2UgPyBjbGlja0ZvclBhZ2UocC5wYWdlKSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZGRMaShwYWdlSW5mby5oYXNOZXh0ID8gJ3BhZ2UtaXRlbSBuZXh0JyA6ICdwYWdlLWl0ZW0gbmV4dCBkaXNhYmxlZCcsIHRoaXMubWVzc2FnZXMuZ2V0TWVzc2FnZSgnbmV4dFBhZ2UnKSwgcGFnZUluZm8uaGFzTmV4dCA/IHVybEZvclBhZ2UodGhpcy5zdGF0ZS5wYWdlICsgMSkgOiB1bmRlZmluZWQsIHBhZ2VJbmZvLmhhc05leHQgPyBjbGlja0ZvclBhZ2UodGhpcy5zdGF0ZS5wYWdlICsgMSkgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnOyAvLyBUT0RPOiBkb250IHJlcmVuZGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XHJcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmNsYXNzTmFtZSB8fCAnJztcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChjb3VudGVyRGl2KTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChsaW1pdERpdik7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQocGFnZXNEaXYpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGVsID09PSBudWxsIHx8IGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbC5jbGFzc0xpc3QuYWRkKCdzZi1wYWdpbmF0b3JfX2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2YtcGFnaW5hdG9yX19lcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5QYWdpbmF0b3Iuc3BpcmFsRnJhbWV3b3JrTmFtZSA9ICdkYXRhZ3JpZC1wYWdpbmF0b3InO1xyXG5QYWdpbmF0b3IuZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBpZDogJycsXHJcbiAgICBsb2NrVHlwZTogJ25vbmUnLFxyXG4gICAgd2lsbEZldGNoQ291bnQ6IHRydWUsXHJcbiAgICBzZXJpYWxpemU6IHRydWUsXHJcbiAgICB0eXBlOiBQYWdpbmF0b3JUeXBlLnBhZ2VzLFxyXG4gICAgY2xhc3NOYW1lOiAncm93IG5vLWd1dHRlcnMgYWxpZ24taXRlbXMtY2VudGVyIG0tMycsXHJcbiAgICBsaW1pdE9wdGlvbnM6IFsxMCwgMjUsIDUwLCAxMDBdLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3I7XHJcbiIsImltcG9ydCBzZiBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XHJcbmltcG9ydCBBY3Rpb25QYW5lbCBmcm9tICcuLi9hY3Rpb25wYW5lbC9BY3Rpb25QYW5lbCc7XHJcbmltcG9ydCB7IERBVEFHUklEX0NIRUNLX1NFTEVDVF9BTExfQVRUUiwgREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FUVFIsIGRlZmF1bHRHcmlkTWVzc2FnZXMsIFNlbGVjdGlvblR5cGUsIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi4vcGFnaW5hdG9yL1BhZ2luYXRvcic7XHJcbmltcG9ydCB7IGFwcGx5QXR0cnJpYnV0ZXMsIG5vcm1hbGl6ZUNvbHVtbnMgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRCb2R5V3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdEJvZHlXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEZvb3RlcldyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRGb290ZXJXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEhlYWRlcldyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRIZWFkZXJXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEdyaWRVaU9wdGlvbnMsIGRlZmF1bHRSZW5kZXJlciB9IGZyb20gJy4vZGVmYXVsdFJlbmRlcmVyJztcclxuaW1wb3J0IHsgZGVmYXVsdFJvd1dyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRSb3dXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdFRhYmxlV3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdFRhYmxlV3JhcHBlcic7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZWRDZWxsUmVuZGVyZXIsIG5vcm1hbGl6ZWRIZWFkZXJDZWxsUmVuZGVyZXIgfSBmcm9tICcuL25vcm1hbGl6ZXJzJztcclxubGV0IGluc3RhbmNlQ291bnRlciA9IDE7XHJcbmV4cG9ydCBjbGFzcyBHcmlkUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IocGFydGlhbE9wdGlvbnMsIHJvb3QpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZUNvdW50ZXIrKztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFJlbmRlcmVyKSwgcGFydGlhbE9wdGlvbnMpLCB7IHVpOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRHcmlkVWlPcHRpb25zKSwgcGFydGlhbE9wdGlvbnMudWkpIH0pO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWVzc2FnZXModGhpcy5vcHRpb25zLm1lc3NhZ2VzIHx8IHt9LCBkZWZhdWx0R3JpZE1lc3NhZ2VzKTtcclxuICAgICAgICB0aGlzLmNvbHVtbkluZm8gPSBub3JtYWxpemVDb2x1bW5zKHRoaXMub3B0aW9ucy5jb2x1bW5zLCB0aGlzLm9wdGlvbnMuc29ydGFibGUpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdzZi1kYXRhZ3JpZC13cmFwcGVyJyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMudWkud3JhcHBlckNsYXNzTmFtZSB8fCAnJyk7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0QWN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhZ2luYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURlZmF1bHRQYWdpbmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFibGVSZW5kZXJlciA9IHRoaXMub3B0aW9ucy50YWJsZVdyYXBwZXIgfHwgZGVmYXVsdFRhYmxlV3JhcHBlcjtcclxuICAgICAgICB0aGlzLnRhYmxlRWwgPSB0YWJsZVJlbmRlcmVyKHRoaXMud3JhcHBlciwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZURlZmF1bHRQYWdpbmF0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBgJHtEYXRlLm5vdygpfSR7dGhpcy5pbnN0YW5jZX1gO1xyXG4gICAgICAgIHRoaXMucm9vdC5vcHRpb25zLmNhcHR1cmVGb3Jtcy5wdXNoKGlkKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRvckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5wYWdpbmF0b3JFbCk7XHJcbiAgICAgICAgY29uc3QgcGFnaW5hdG9yID0gbmV3IFBhZ2luYXRvcihzZiwgdGhpcy5wYWdpbmF0b3JFbCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBQYWdpbmF0b3IuZGVmYXVsdE9wdGlvbnMpLCB7IGlkLCBtZXNzYWdlczogdGhpcy5yb290Lm9wdGlvbnMucGFnaW5hdG9yTWVzc2FnZXMgfSkpO1xyXG4gICAgICAgIHRoaXMucm9vdC5yZWdpc3RlclBhZ2luYXRvckluc3RhbmNlKHBhZ2luYXRvcik7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVEZWZhdWx0QWN0aW9ucygpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgaWQgPSBgJHtEYXRlLm5vdygpfSR7dGhpcy5pbnN0YW5jZX1gO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUGFuZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMucm9vdC5ub2RlLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uUGFuZWxFbCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3Qub3B0aW9ucy5jYXB0dXJlQWN0aW9uUGFuZWxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5vcHRpb25zLmNhcHR1cmVBY3Rpb25QYW5lbHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm9wdGlvbnMuY2FwdHVyZUFjdGlvblBhbmVscy5wdXNoKGlkKTtcclxuICAgICAgICBjb25zdCBwYW5lbCA9IG5ldyBBY3Rpb25QYW5lbChzZiwgdGhpcy5hY3Rpb25QYW5lbEVsLCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IChzdGF0ZSkgPT4gKHN0YXRlLmhhc1NlbGVjdGlvbiA/ICdyb3cgbm8tZ3V0dGVycyBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1ib3R0b20nIDogJ2Qtbm9uZScpLFxyXG4gICAgICAgICAgICBsb2NrVHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICBub1NlbGVjdGlvbjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGFjdGlvbkNsYXNzTmFtZTogJ2J0biBidG4tc20nLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25UeXBlOiAoKF9hID0gdGhpcy5vcHRpb25zLnNlbGVjdGFibGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlKSB8fCBTZWxlY3Rpb25UeXBlLlNJTkdMRSxcclxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5vcHRpb25zLmFjdGlvbnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb290LnJlZ2lzdGVyQWN0aW9uUGFuZWxJbnN0YW5jZShwYW5lbCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xyXG4gICAgYXBwbHlBZGRpdGlvbmFsQ2VsbEF0dHJpYnV0ZXMoZWwsIGNvbHVtbiwgb3B0aW9ucywgc3RhdGUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY2VsbE1ldGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXHJcbiAgICAgICAgICAgIGNvbHVtbixcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkOiBvcHRpb25zLnNlbGVjdGFibGUgPyBzdGF0ZS5pc1NlbGVjdGVkKHN0YXRlLmRhdGFbaW5kZXhdW29wdGlvbnMuc2VsZWN0YWJsZS5pZF0pIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBpdGVtOiBzdGF0ZS5kYXRhW2luZGV4XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4ub3B0aW9ucy51aS5jZWxsQ2xhc3NOYW1lKGNlbGxNZXRhKS5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljID0gb3B0aW9ucy51aS5jZWxsQ2xhc3NOYW1lW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwZWNpZmljID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLnNwZWNpZmljLnNwbGl0KCcgJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5zcGVjaWZpYyhjZWxsTWV0YSkuc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51aS5jZWxsQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgb3B0aW9ucy51aS5jZWxsQXR0cmlidXRlcyhjZWxsTWV0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWMgPSBvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwZWNpZmljID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIHNwZWNpZmljKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBzcGVjaWZpYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuICAgIGFwcGx5QWRkaXRpb25hbEhlYWRlckNlbGxBdHRyaWJ1dGVzKGVsLCBjb2x1bW4sIG9wdGlvbnMsIHN0YXRlKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbE1ldGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXHJcbiAgICAgICAgICAgIGNvbHVtbixcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkOiBvcHRpb25zLnNlbGVjdGFibGUgPyBzdGF0ZS5hcmVBbGxTZWxlY3RlZCgpIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBpdGVtOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5vcHRpb25zLnVpLmhlYWRlckNlbGxDbGFzc05hbWUoY2VsbE1ldGEpLnNwbGl0KCcgJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWMgPSBvcHRpb25zLnVpLmhlYWRlckNlbGxDbGFzc05hbWVbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uc3BlY2lmaWMuc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLnNwZWNpZmljKGNlbGxNZXRhKS5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmhlYWRlckNlbGxBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBvcHRpb25zLnVpLmhlYWRlckNlbGxBdHRyaWJ1dGVzKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpYyA9IG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXNbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgc3BlY2lmaWMoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIHNwZWNpZmljKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoc3RhdGUpIHtcclxuICAgICAgICAvLyBSZW5kZXIgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyUmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMuaGVhZGVyV3JhcHBlciB8fCBkZWZhdWx0SGVhZGVyV3JhcHBlcjtcclxuICAgICAgICBpZiAodGhpcy5oZWFkZXJFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5oZWFkZXJFbC5vdXRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVhZGVyRWwgPSBoZWFkZXJSZW5kZXJlcih0aGlzLnRhYmxlRWwsIHRoaXMub3B0aW9ucywgc3RhdGUsIHRoaXMubWVzc2FnZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlckVsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbkluZm8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbkluZm8uZm9yRWFjaCgoY0ksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyQ2VsbFJlbmRlcmVyID0gbm9ybWFsaXplZEhlYWRlckNlbGxSZW5kZXJlcigodGhpcy5vcHRpb25zLmhlYWRlckxpc3QgfHwge30pW2NJLmlkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGhlYWRlckNlbGxSZW5kZXJlci5jcmVhdGVFbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkID0gaGVhZGVyQ2VsbFJlbmRlcmVyLnJlbmRlcihjSSwgdGhpcy5vcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZW5kZXJlZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IHJlbmRlcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QWRkaXRpb25hbEhlYWRlckNlbGxBdHRyaWJ1dGVzKG5vZGUsIGNJLCB0aGlzLm9wdGlvbnMsIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyRWwuaW5uZXIuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW5kZXIgYm9keVxyXG4gICAgICAgIGlmICh0aGlzLmJvZHlFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5ib2R5RWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBib2R5UmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMuYm9keVdyYXBwZXIgfHwgZGVmYXVsdEJvZHlXcmFwcGVyO1xyXG4gICAgICAgIHRoaXMuYm9keUVsID0gYm9keVJlbmRlcmVyKHRoaXMudGFibGVFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgdGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9keUVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5hcHBlbmRDaGlsZCh0aGlzLmJvZHlFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMub3B0aW9ucy5yb3dXcmFwcGVyIHx8IGRlZmF1bHRSb3dXcmFwcGVyO1xyXG4gICAgICAgICAgICBzdGF0ZS5kYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dFbCA9IHJvdyh0aGlzLmJvZHlFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5JbmZvLmZvckVhY2goKGNJKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtW2NJLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dDZWxsUmVuZGVyZXIgPSBub3JtYWxpemVkQ2VsbFJlbmRlcmVyKCh0aGlzLm9wdGlvbnMuY2VsbHMgfHwge30pW2NJLmlkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJvd0NlbGxSZW5kZXJlci5jcmVhdGVFbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7IC8vIElmIG5vIG5vZGUgZ2VuZXJhdGVkLCBza2lwIGl0LCB0aGF0IG1pZ2h0IGJlIGN1c3RvbSB0ciByZW5kZXIgb3IgY29sc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHJvd0NlbGxSZW5kZXJlci5yZW5kZXIodmFsdWUsIGl0ZW0sIGNJLCB0aGlzLm9wdGlvbnMsIGluZGV4LCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlZCkgeyAvLyBJZiBubyBjb250ZW50IGdlbmVyYXRlZCwgc2tpcCBpdCwgdGhhdCBtaWdodCBiZSBjdXN0b20gdHIgcmVuZGVyIG9yIGNvbHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVuZGVyZWQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSByZW5kZXJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQocmVuZGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUFkZGl0aW9uYWxDZWxsQXR0cmlidXRlcyhub2RlLCBjSSwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RWwuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbmRlciBmb290ZXJcclxuICAgICAgICBpZiAodGhpcy5mb290ZXJFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5mb290ZXJFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZvb3RlclJlbmRlcmVyID0gdGhpcy5vcHRpb25zLmZvb3RlcldyYXBwZXIgfHwgZGVmYXVsdEZvb3RlcldyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5mb290ZXJFbCA9IGZvb3RlclJlbmRlcmVyKHRoaXMudGFibGVFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgdGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9vdGVyRWwpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZUVsLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyRWwpO1xyXG4gICAgICAgICAgICAvLyBXZSBhc3N1bWUgZm9vdGVyIHJlbmRlciBoYW5kbGVzIGFsbCBkYXRhIHNvIG5vIGFkZGl0aW9uYWwgcmVuZGVycyBoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2hlY2tib3hlcyhzdGF0ZSkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgaWYgKHRoaXMucm9vdC5vcHRpb25zLnNlbGVjdGFibGUpIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyRWwgPSAoX2EgPSB0aGlzLmhlYWRlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3V0ZXIucXVlcnlTZWxlY3RvcihgaW5wdXRbJHtEQVRBR1JJRF9DSEVDS19TRUxFQ1RfQUxMX0FUVFJ9XWApO1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyRWwpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlckVsLmNoZWNrZWQgPSBzdGF0ZS5hcmVBbGxTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSAoX2IgPSB0aGlzLmJvZHlFbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0WyR7REFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FUVFJ9XWApO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gY2hlY2tib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHN0YXRlLmlzU2VsZWN0ZWQoZWwudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRCb2R5V3JhcHBlciA9IChub2RlLCBvcHRpb25zLCBzdGF0ZSwgbWVzc2FnZXMpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgaWYgKHN0YXRlLmhhc0Vycm9yICYmICFvcHRpb25zLmRvbnRSZW5kZXJFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yVHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGVycm9yVGQuY29sU3BhbiA9IG9wdGlvbnMuY29sdW1ucy5sZW5ndGggKyAob3B0aW9ucy5zZWxlY3RhYmxlID8gMSA6IDApO1xyXG4gICAgICAgIGVycm9yVGQuaW5uZXJUZXh0ID0gc3RhdGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VzLmdldE1lc3NhZ2UoJ2Vycm9yJywge30pO1xyXG4gICAgICAgIGVycm9yVGQuY2xhc3NMaXN0LmFkZCgnc2YtdGFibGVfX2Vycm9yJyk7XHJcbiAgICAgICAgZXJyb3JUci5hcHBlbmRDaGlsZChlcnJvclRkKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChlcnJvclRyKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXRlLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgZW1wdHlUZC5jb2xTcGFuID0gb3B0aW9ucy5jb2x1bW5zLmxlbmd0aCArIChvcHRpb25zLnNlbGVjdGFibGUgPyAxIDogMCk7XHJcbiAgICAgICAgZW1wdHlUZC5pbm5lckhUTUwgPSBzdGF0ZS5pc0N1c3RvbVNlYXJjaCA/IG1lc3NhZ2VzLmdldE1lc3NhZ2UoJ25vUmVzdWx0cycsIHt9KSA6IG1lc3NhZ2VzLmdldE1lc3NhZ2UoJ25vRGF0YScsIHt9KTtcclxuICAgICAgICBlbXB0eVRkLmNsYXNzTGlzdC5hZGQoJ3NmLXRhYmxlX19lbXB0eScpO1xyXG4gICAgICAgIGVtcHR5VHIuYXBwZW5kQ2hpbGQoZW1wdHlUZCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZW1wdHlUcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0Q2VsbEVsQ3JlYXRvciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2VsbFJlbmRlcmVyID0ge1xyXG4gICAgY3JlYXRlRWw6IGRlZmF1bHRDZWxsRWxDcmVhdG9yLFxyXG4gICAgcmVuZGVyOiAodmFsdWUpID0+ICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJycgOiBTdHJpbmcodmFsdWUpKSxcclxufTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEZvb3RlcldyYXBwZXIgPSAobm9kZSwgb3B0aW9ucywgc3RhdGUpID0+IHVuZGVmaW5lZDtcclxuIiwiaW1wb3J0IHsgU29ydERpcmVjdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVhZGVyQ2VsbEVsQ3JlYXRvciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVySW5uZXIgPSAoY29sdW1uLCBvcHRpb25zLCBzdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgIGlmIChjb2x1bW4uc29ydGFibGUpIHtcclxuICAgICAgICBjbGFzc2VzLnB1c2goJ3NmLXRhYmxlX19zb3J0Jyk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhcmVudC50cmlnZ2VyU29ydChjb2x1bW4uaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLnNvcnRCeSA9PT0gY29sdW1uLmlkKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uQVNDKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnc2YtdGFibGVfX3NvcnRfYXNjJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3NmLXRhYmxlX19zb3J0X2Rlc2MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IGNvbHVtbi50aXRsZTtcclxuICAgIHJldHVybiBlbDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXIgPSB7XHJcbiAgICBjcmVhdGVFbDogZGVmYXVsdEhlYWRlckNlbGxFbENyZWF0b3IsXHJcbiAgICByZW5kZXI6IGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXJJbm5lcixcclxufTtcclxuIiwiaW1wb3J0IHsgREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FMTF9BVFRSLCBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlYWRlcldyYXBwZXIgPSAobm9kZSwgb3B0aW9ucywgc3RhdGUpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIGlmIChvcHRpb25zLnNlbGVjdGFibGUpIHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgdGQuY2xhc3NMaXN0LmFkZCgnc2YtdGFibGVfX3NlbGVjdCcpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLnNlbGVjdGFibGUudHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5NVUxUSVBMRSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FMTF9BVFRSLCAnJyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnBhcmVudC50b2dnbGVTZWxlY3Rpb25BbGwoY2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0ZC5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH1cclxuICAgIGVsLmFwcGVuZENoaWxkKHRyKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgcmV0dXJuIHsgb3V0ZXI6IGVsLCBpbm5lcjogdHIgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdE1ldGhvZCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0R3JpZFVpT3B0aW9ucyA9IHtcclxuICAgIHdyYXBwZXJDbGFzc05hbWU6ICd0YWJsZS1yZXNwb25zaXZlJyxcclxuICAgIHRhYmxlQ2xhc3NOYW1lOiAndGFibGUgdGFibGUtc3RyaXBlZCcsXHJcbiAgICBjZWxsQ2xhc3NOYW1lOiB7fSxcclxuICAgIHJvd0NsYXNzTmFtZTogJycsXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICBjZWxsQXR0cmlidXRlczogKGNlbGxNZXRhKSA9PiAoe30pLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgcm93QXR0cmlidXRlczogKHJvd01ldGEpID0+ICh7fSksXHJcbn07XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVuZGVyZXIgPSB7XHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIHNvcnRhYmxlOiBbXSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzaWMgY2xhc3MvYXR0cmlidXRlIHByb3BlcnRpZXNcclxuICAgICAqL1xyXG4gICAgdWk6IGRlZmF1bHRHcmlkVWlPcHRpb25zLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEdyaWRPcHRpb25zID0ge1xyXG4gICAgaWQ6ICcnLFxyXG4gICAgbG9ja1R5cGU6ICdkZWZhdWx0JyxcclxuICAgIHJlc2V0T25FcnJvcjogZmFsc2UsXHJcbiAgICBmZXRjaENvdW50OiB0cnVlLFxyXG4gICAgY2FwdHVyZUZvcm1zOiBbXSxcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgaGVhZGVyczoge30sXHJcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUE9TVCxcclxuICAgIHNvcnRhYmxlOiBbXSxcclxuICAgIHVybDogJycsXHJcbiAgICBzZXJpYWxpemU6IHRydWUsXHJcbiAgICBwYWdpbmF0b3I6IHRydWUsXHJcbiAgICB1aTogZGVmYXVsdEdyaWRVaU9wdGlvbnMsXHJcbiAgICByZW5kZXJlcnM6IGRlZmF1bHRSZW5kZXJlcixcclxufTtcclxuIiwiaW1wb3J0IHsgREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FUVFIsIFNlbGVjdGlvblR5cGUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Um93V3JhcHBlciA9IChub2RlLCBvcHRpb25zLCBzdGF0ZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0YWJsZSkge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKERBVEFHUklEX0NIRUNLX1NFTEVDVF9BVFRSLCAnJyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IG9wdGlvbnMuc2VsZWN0YWJsZS50eXBlID09PSBTZWxlY3Rpb25UeXBlLk1VTFRJUExFID8gJ2NoZWNrYm94JyA6ICdyYWRpbyc7XHJcbiAgICAgICAgY2hlY2tib3gudmFsdWUgPSBzdGF0ZS5kYXRhW2luZGV4XVtvcHRpb25zLnNlbGVjdGFibGUuaWRdO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzdGF0ZS5pc1NlbGVjdGVkKGNoZWNrYm94LnZhbHVlKTtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhcmVudC50b2dnbGVTZWxlY3Rpb24oY2hlY2tib3gudmFsdWUsIGNoZWNrYm94LmNoZWNrZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoJ3NmLXRhYmxlX19zZWxlY3QnKTtcclxuICAgICAgICB0ZC5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdFRhYmxlV3JhcHBlciA9IChub2RlLCBvcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBvcHRpb25zLnVpLnRhYmxlQ2xhc3NOYW1lIHx8ICcnO1xyXG4gICAgbm9kZS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImltcG9ydCB7IGRlZmF1bHRDZWxsRWxDcmVhdG9yLCBkZWZhdWx0Q2VsbFJlbmRlcmVyIH0gZnJvbSAnLi9kZWZhdWx0Q2VsbFJlbmRlcmVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEhlYWRlckNlbGxFbENyZWF0b3IsIGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXIgfSBmcm9tICcuL2RlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXInO1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDZWxsQWR2YW5jZWQocmVuZGVyKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyLmNyZWF0ZUVsICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSGVhZGVyQ2VsbEFkdmFuY2VkKHJlbmRlcikge1xyXG4gICAgcmV0dXJuIHJlbmRlci5jcmVhdGVFbCAhPT0gdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVkQ2VsbFJlbmRlcmVyID0gKHJlbmRlcikgPT4ge1xyXG4gICAgaWYgKCFyZW5kZXIpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdENlbGxSZW5kZXJlcjtcclxuICAgIH1cclxuICAgIGlmICghaXNDZWxsQWR2YW5jZWQocmVuZGVyKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUVsOiBkZWZhdWx0Q2VsbEVsQ3JlYXRvcixcclxuICAgICAgICAgICAgcmVuZGVyLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplZEhlYWRlckNlbGxSZW5kZXJlciA9IChyZW5kZXIpID0+IHtcclxuICAgIGlmICghcmVuZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXI7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzSGVhZGVyQ2VsbEFkdmFuY2VkKHJlbmRlcikpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjcmVhdGVFbDogZGVmYXVsdEhlYWRlckNlbGxFbENyZWF0b3IsXHJcbiAgICAgICAgICAgIHJlbmRlcixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufTtcclxuIiwiaW1wb3J0IHsgU29ydERpcmVjdGlvbiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUNvbHVtbnMgPSAoY29sdW1ucywgc29ydGFibGVzKSA9PiB7XHJcbiAgICBjb25zdCBzTGlzdCA9IHNvcnRhYmxlcy5tYXAoKHMpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGZpZWxkOiBzLCBkaXJlY3Rpb246IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkO1xyXG4gICAgICAgIGxldCB0aXRsZTtcclxuICAgICAgICBsZXQgc29ydERpcjtcclxuICAgICAgICBsZXQgc29ydGFibGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIGMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlkID0gYztcclxuICAgICAgICAgICAgdGl0bGUgPSBjO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gU29ydERpcmVjdGlvbi5BU0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGMuaWQ7XHJcbiAgICAgICAgICAgIHRpdGxlID0gYy50aXRsZSB8fCBjLmlkO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gYy5zb3J0RGlyIHx8IFNvcnREaXJlY3Rpb24uQVNDO1xyXG4gICAgICAgICAgICBzb3J0YWJsZSA9ICEhYy5zb3J0RGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzb3J0ID0gc0xpc3QuZmluZCgocykgPT4gKHMuZmllbGQgPT09IGlkKSk7XHJcbiAgICAgICAgaWYgKHNvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc29ydC5kaXJlY3Rpb24gfHwgc29ydERpcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBzb3J0RGlyLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFwcGx5QXR0cnJpYnV0ZXMgPSAobm9kZSwgYXR0cnMpID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhzb21ldGhpbmcpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygc29tZXRoaW5nID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXzsiLCJjb25zdCBjb3JlID0gcmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2NvcmUnKS5kZWZhdWx0O1xuXG5yZXF1aXJlKCcuL2lucHV0Jyk7XG5cbnJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9sb2NrZXInKTtcbnJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9mb3JtJyk7XG5yZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvZGF0YWdyaWQnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmU7XG4iLCJcbmNvbnN0IHNmID0gcmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2NvcmUnKS5kZWZhdWx0O1xuY29uc3QgSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0JykuZGVmYXVsdDtcblxuc2YuaW5zdGFuY2VzQ29udHJvbGxlci5yZWdpc3Rlckluc3RhbmNlVHlwZShJbnB1dCwgJ3NmLWpzLWlucHV0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IElucHV0OyAvLyBFUzYgZGVmYXVsdCBleHBvcnQgd2lsbCBub3QgZXhwb3NlIHVzIGFzIGdsb2JhbFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuaW1wb3J0IGNvcmUgZnJvbSAnQHNwaXJhbC10b29sa2l0L2NvcmUnO1xuXG5jb25zdCBJbnB1dCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLl9jb25zdHJ1Y3Qoc2YsIG5vZGUsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBAbGVuZHMgc2YuRm9ybS5wcm90b3R5cGVcbiAqL1xuSW5wdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjb3JlLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cbi8qKlxuICogTmFtZSB0byByZWdpc3RlclxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuSW5wdXQucHJvdG90eXBlLm5hbWUgPSAnaW5wdXQnO1xuXG5JbnB1dC5wcm90b3R5cGUuX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLmluaXQoc2YsIG5vZGUsIG9wdGlvbnMpOyAvLyBjYWxsIHBhcmVudFxuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgLy8gaWYgd2UgcGFzcyBvcHRpb25zIGV4dGVuZCBhbGwgb3B0aW9ucyBieSBwYXNzZWQgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9IHNmLnRvb2xzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gRWxlbWVudHNcbiAgdGhpcy5lbHMgPSB7XG4gICAgbm9kZSxcbiAgfTtcblxuICBpZiAodGhpcy5vcHRpb25zLnByZWZpeCkge1xuICAgIHRoaXMuc2V0UHJlZml4KCk7XG4gICAgdGhpcy5hZGRQcmVmaXhFdmVudExpc3RlbmVycygpO1xuICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5wYXR0ZXJuKSB7XG4gICAgdGhpcy5zZXR1cFBhdHRlcm4oKTtcbiAgICB0aGlzLmFkZFBhdHRlcm5FdmVudExpc3RlbmVycygpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQG92ZXJyaWRlXG4gKiBAaW5oZXJpdERvY1xuICogQGVudW0ge3N0cmluZ31cbiAqL1xuSW5wdXQucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7XG4gIC8qKlxuICAgICAqICBQYXR0ZXJuIG9mIGlucHV0XG4gICAgICovXG4gIHBhdHRlcm46IHtcbiAgICBkb21BdHRyOiAnZGF0YS1wYXR0ZXJuJyxcbiAgfSxcbiAgLyoqXG4gICAgICogIFByZWZpeCBvZiAgaW5wdXRcbiAgICAgKi9cbiAgcHJlZml4OiB7XG4gICAgZG9tQXR0cjogJ2RhdGEtcHJlZml4JyxcbiAgfSxcbn07XG5cbi8qKlxuICogU2V0dXAgcGF0dGVyblxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbklucHV0LnByb3RvdHlwZS5pc1ZhbGlkUGF0dGVybiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWxzLm5vZGUudmFsdWUubWF0Y2godGhpcy5wYXR0ZXJuKTtcbn07XG5cbklucHV0LnByb3RvdHlwZS5hZGRQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIHRoaXMuX2lucHV0S2V5UHJlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGF0LmVscy5ub2RlO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhhdC5nZXRDdXJzb3JQb3NpdGlvbigpO1xuXG4gICAgaWYgKGNoYXIubGVuZ3RoID4gMCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBvZmZzZXQgPSAxO1xuICAgICAgZm9yIChsZXQgaSA9IHBvc2l0aW9uOyBpIDwgdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoYXQuZm9ybWF0Q2hhcmFjdGVycy5pbmRleE9mKHZhbHVlW2ldKSAhPT0gLTEpIHtcbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmdXR1cmVWYWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBwb3NpdGlvbiArIG9mZnNldCAtIDEpICsgY2hhciArIHZhbHVlLnN1YnN0cmluZyhwb3NpdGlvbiArIG9mZnNldCwgdmFsdWUubGVuZ3RoKTtcblxuICAgICAgaWYgKCFmdXR1cmVWYWx1ZS5tYXRjaCh0aGF0LnBhdHRlcm5XaXRoRW1wdHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuZWxzLm5vZGUudmFsdWUgPSBmdXR1cmVWYWx1ZTtcbiAgICAgIHRoYXQuc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb24gKyBvZmZzZXQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5faW5wdXRLZXlQcmVzcyk7XG5cbiAgdGhpcy5faW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGF0LmVscy5ub2RlLnZhbHVlID09PSAnJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9IHRoYXQucGF0dGVyblN0cmluZy5yZXBsYWNlKC9bXlxcLVxcKFxcKVxcW1xcXVxcOlxcLlxcLFxcJFxcJVxcQFxcIFxcL10vZywgJ18nKTtcbiAgICAgICAgdGhhdC5zZXRDdXJzb3JQb3NpdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfTtcbiAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2lucHV0Rm9jdXMpO1xuXG4gIHRoaXMuX2lucHV0S2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoYXQuZWxzLm5vZGU7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGF0LmdldEN1cnNvclBvc2l0aW9uKCk7XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0Nikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IHBvc2l0aW9uIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICBpZiAodGhhdC5mb3JtYXRDaGFyYWN0ZXJzLmluZGV4T2YodmFsdWVbaV0pICE9PSAtMSkge1xuICAgICAgICAgIG9mZnNldCAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZ1dHVyZVZhbHVlID0gYCR7dmFsdWUuc3Vic3RyaW5nKDAsIHBvc2l0aW9uICsgb2Zmc2V0IC0gMSl9XyR7dmFsdWUuc3Vic3RyaW5nKHBvc2l0aW9uICsgb2Zmc2V0LCB2YWx1ZS5sZW5ndGgpfWA7XG5cbiAgICAgIGlmICghZnV0dXJlVmFsdWUubWF0Y2godGhhdC5wYXR0ZXJuV2l0aEVtcHR5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhmdXR1cmVWYWx1ZSk7XG4gICAgICB0aGF0LmVscy5ub2RlLnZhbHVlID0gZnV0dXJlVmFsdWU7XG4gICAgICB0aGF0LnNldEN1cnNvclBvc2l0aW9uKHBvc2l0aW9uICsgb2Zmc2V0IC0gMSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBpZiAoY2hhci5tYXRjaCgvXFxXLykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9pbnB1dEtleURvd24pO1xuXG4gIHRoaXMuX2lucHV0Qmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoYXQuZWxzLm5vZGUudmFsdWUubWF0Y2godGhhdC5wYXR0ZXJuKSkge1xuICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfTtcbiAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faW5wdXRCbHVyKTtcbn07XG5cbklucHV0LnByb3RvdHlwZS5nZXRDdXJzb3JQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBvc2l0aW9uID0gMDtcblxuICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgdGhpcy5lbHMubm9kZS5mb2N1cygpO1xuXG4gICAgY29uc3Qgc2VsZWN0UmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcblxuICAgIHNlbGVjdFJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLXRoaXMuZWxzLm5vZGUudmFsdWUubGVuZ3RoKTtcblxuICAgIHBvc2l0aW9uID0gc2VsZWN0UmFuZ2UudGV4dC5sZW5ndGg7XG4gIH0gZWxzZSBpZiAodGhpcy5lbHMubm9kZS5zZWxlY3Rpb25TdGFydCB8fCB0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0ID09PSAnMCcpIHtcbiAgICBwb3NpdGlvbiA9IHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uU3RhcnQ7XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb247XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuc2V0Q3Vyc29yUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgaWYgKHRoaXMuZWxzLm5vZGUuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmVscy5ub2RlLmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgIHJhbmdlLm1vdmUoJ2NoYXJhY3RlcicsIHBvc2l0aW9uKTtcbiAgICByYW5nZS5zZWxlY3QoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0KSB7XG4gICAgdGhpcy5lbHMubm9kZS5mb2N1cygpO1xuICAgIHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLmVscy5ub2RlLnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZWxzLm5vZGUuZm9jdXMoKTtcbiAgfVxufTtcblxuSW5wdXQucHJvdG90eXBlLnNldHVwUGF0dGVybiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXRDaGFyYWN0ZXJzID0gdGhpcy5lbHMubm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybWF0LWNoYXJhY3RlcnMnKSB8fCAnLSgpW106LiwkJUAgLyc7XG4gIHRoaXMucGF0dGVyblN0cmluZyA9IHRoaXMub3B0aW9ucy5wYXR0ZXJuO1xuICB0aGlzLmVscy5ub2RlLnBsYWNlaG9sZGVyID0gdGhpcy5wYXR0ZXJuU3RyaW5nO1xuXG4gIGNvbnN0IF9pbml0UGF0dGVybiA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZm9ybWF0dGVkUGF0dGVyblN0ciA9ICcnO1xuICAgIGxldCBmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGF0dGVyblN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2hhciA9IHRoaXMucGF0dGVyblN0cmluZ1tpXTtcblxuICAgICAgaWYgKHRoaXMuZm9ybWF0Q2hhcmFjdGVycy5pbmRleE9mKGNoYXIpID49IDApIHtcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVyblN0ciArPSBjaGFyO1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyICs9IGNoYXI7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIubWF0Y2goL1swLTldLykpIHtcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVyblN0ciArPSAnWzAtOV0nO1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyICs9ICcoWzAtOV18XyknO1xuICAgICAgfSBlbHNlIGlmIChjaGFyLm1hdGNoKC9bYS16QS1aXS8pKSB7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5TdHIgKz0gJ1thLXpBLVpdJztcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciArPSAnKFthLXpBLVpdfF8pJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJyonKSB7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5TdHIgKz0gJ1swLTlhLXpBLVpdJztcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciArPSAnKFswLTlhLXpBLVpdfF8pJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtmb3JtYXR0ZWRQYXR0ZXJuU3RyfSRgLCAnZycpO1xuICAgIHRoaXMucGF0dGVybldpdGhFbXB0eSA9IG5ldyBSZWdFeHAoYF4ke2Zvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHJ9JGAsICdnJyk7XG4gIH0uYmluZCh0aGlzKTtcblxuICBfaW5pdFBhdHRlcm4oKTtcbn07XG5cblxuLyoqXG4gKiBBZGRzIHN0YXRpYyBldmVudHMgbGlzdGVuZXJzLlxuICovXG5JbnB1dC5wcm90b3R5cGUuYWRkUHJlZml4RXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIHRoaXMuX2lucHV0S2V5dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKTtcblxuICAgIGlmICh0aGF0LmVscy5ub2RlLnZhbHVlLmluZGV4T2Yob2xkVmFsdWUpICE9PSAwKSB7XG4gICAgICB0aGF0LmVscy5ub2RlLnZhbHVlID0gYCR7b2xkVmFsdWV9IGA7XG4gICAgfVxuICB9O1xuXG4gIGlmICh0aGlzLmVscy5ub2RlKSB7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2lucHV0S2V5dXApO1xuICB9XG59O1xuXG5JbnB1dC5wcm90b3R5cGUucmVtb3ZlUGF0dGVybkV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbHMubm9kZSkge1xuICAgIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLl9pbnB1dEtleVByZXNzKTtcbiAgICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faW5wdXRGb2N1cyk7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faW5wdXRLZXlEb3duKTtcbiAgICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9pbnB1dEJsdXIpO1xuICB9XG59O1xuXG5JbnB1dC5wcm90b3R5cGUucmVtb3ZlUHJlZml4RXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVscy5ub2RlKSB7XG4gICAgdGhpcy5lbHMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2lucHV0S2V5dXApO1xuICB9XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5vcHRpb25zLnBhdHRlcm4pIHtcbiAgICB0aGlzLnJlbW92ZVBhdHRlcm5FdmVudExpc3RlbmVycygpO1xuICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5wcmVmaXgpIHtcbiAgICB0aGlzLnJlbW92ZVByZWZpeEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbiAgZGVsZXRlIHRoaXM7XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuc2V0UHJlZml4ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVscy5ub2RlLnZhbHVlID0gYCR7dGhpcy5vcHRpb25zLnByZWZpeH0gJHt0aGlzLmVscy5ub2RlLnZhbHVlfWA7XG59O1xuXG5leHBvcnQgeyBJbnB1dCBhcyBkZWZhdWx0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sa2l0LmpzIiwic291cmNlUm9vdCI6IiJ9