(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@spiral-toolkit/toolkit", [], factory);
	else if(typeof exports === 'object')
		exports["@spiral-toolkit/toolkit"] = factory();
	else
		root["@spiral-toolkit/toolkit"] = factory();
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
      /*!*********************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/index.js ***!
        \*********************************************************************************/

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
      /*!********************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/adapters/xhr.js ***!
        \********************************************************************************************/

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

            request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true); // Set the request timeout in MS

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
              reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request)); // Clean up request

              request = null;
            }; // Add xsrf header
            // This is only done if running in a standard browser environment.
            // Specifically not if we're in a web worker, or react-native.


            if (utils.isStandardBrowserEnv()) {
              var cookies = __webpack_require__(
              /*! ./../helpers/cookies */
              "../../node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


              var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

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


            if (config.withCredentials) {
              request.withCredentials = true;
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
      /*!*************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/axios.js ***!
        \*************************************************************************************/

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
      /*!*********************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/cancel/Cancel.js ***!
        \*********************************************************************************************/

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
      /*!**************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/cancel/CancelToken.js ***!
        \**************************************************************************************************/

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
      /*!***********************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/cancel/isCancel.js ***!
        \***********************************************************************************************/

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
      /*!******************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/core/Axios.js ***!
        \******************************************************************************************/

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

          config = mergeConfig(this.defaults, config);
          config.method = config.method ? config.method.toLowerCase() : 'get'; // Hook up interceptors middleware

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
      /*!*******************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/core/InterceptorManager.js ***!
        \*******************************************************************************************************/

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
      "../../node_modules/axios/lib/core/createError.js":
      /*!************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/core/createError.js ***!
        \************************************************************************************************/

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
      /*!****************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/core/dispatchRequest.js ***!
        \****************************************************************************************************/

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

        var isAbsoluteURL = __webpack_require__(
        /*! ./../helpers/isAbsoluteURL */
        "../../node_modules/axios/lib/helpers/isAbsoluteURL.js");

        var combineURLs = __webpack_require__(
        /*! ./../helpers/combineURLs */
        "../../node_modules/axios/lib/helpers/combineURLs.js");
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
          throwIfCancellationRequested(config); // Support baseURL config

          if (config.baseURL && !isAbsoluteURL(config.url)) {
            config.url = combineURLs(config.baseURL, config.url);
          } // Ensure headers exist


          config.headers = config.headers || {}; // Transform request data

          config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

          config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
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
      /*!*************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/core/enhanceError.js ***!
        \*************************************************************************************************/

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
      /*!************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/core/mergeConfig.js ***!
        \************************************************************************************************/

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
          utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
            if (typeof config2[prop] !== 'undefined') {
              config[prop] = config2[prop];
            }
          });
          utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
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
          utils.forEach(['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'], function defaultToConfig2(prop) {
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
      /*!*******************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/core/settle.js ***!
        \*******************************************************************************************/

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
      /*!**************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/core/transformData.js ***!
        \**************************************************************************************************/

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
      /*!****************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/defaults.js ***!
        \****************************************************************************************/

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
            var adapter; // Only Node.JS has a process variable that is of [[Class]] process

            if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
              // For node use HTTP adapter
              adapter = __webpack_require__(
              /*! ./adapters/http */
              "../../node_modules/axios/lib/adapters/xhr.js");
            } else if (typeof XMLHttpRequest !== 'undefined') {
              // For browsers use XHR adapter
              adapter = __webpack_require__(
              /*! ./adapters/xhr */
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
      /*!********************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/bind.js ***!
        \********************************************************************************************/

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
      /*!************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/buildURL.js ***!
        \************************************************************************************************/

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
      /*!***************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/combineURLs.js ***!
        \***************************************************************************************************/

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
      /*!***********************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/cookies.js ***!
        \***********************************************************************************************/

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
      /*!*****************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
        \*****************************************************************************************************/

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
      /*!*******************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
        \*******************************************************************************************************/

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
      /*!***********************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
        \***********************************************************************************************************/

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
      /*!****************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/parseHeaders.js ***!
        \****************************************************************************************************/

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
      /*!**********************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/helpers/spread.js ***!
        \**********************************************************************************************/

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
      /*!*************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/lib/utils.js ***!
        \*************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var bind = __webpack_require__(
        /*! ./helpers/bind */
        "../../node_modules/axios/lib/helpers/bind.js");

        var isBuffer = __webpack_require__(
        /*! is-buffer */
        "../../node_modules/axios/node_modules/is-buffer/index.js");
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
         * Determine if a value is undefined
         *
         * @param {Object} val The value to test
         * @returns {boolean} True if the value is undefined, otherwise false
         */


        function isUndefined(val) {
          return typeof val === 'undefined';
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
      "../../node_modules/axios/node_modules/is-buffer/index.js":
      /*!********************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/axios/node_modules/is-buffer/index.js ***!
        \********************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        module.exports = function isBuffer(obj) {
          return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
        };
        /***/

      },

      /***/
      "../../node_modules/process/browser.js":
      /*!*************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/process/browser.js ***!
        \*************************************************************************************/

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
        /*! ../core/Events */
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
          const instanceName = constructorFunction.prototype.name;

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
        "./src/shim/Object.assign.js"); // if (typeof Promise !== 'function') {
        //   // eslint-disable-next-line no-unused-vars
        //   const { Promise } = require('es6-promise');
        // }


        if (!sfWrapper.hasOwnProperty('options')) sfWrapper.options = {
          instances: {}
        };
        if (!sfWrapper.options.hasOwnProperty('instances')) sfWrapper.options.instances = {}; // TODO delete this in future

        if (window && !window.hasOwnProperty('sf')) {
          // bind only if  window.sf is empty to avoid conflicts with other libs
          window.sf = sfWrapper;
        }

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
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5uYXNlbGV6bmlvdmEvUHJvamVjdHMvc3BpcmFsL3Rvb2xraXQvbm9kZV9tb2R1bGVzL2F4aW9zL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0RvbU11dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW5zdGFuY2VzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9hamF4L2Jhc2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL0RPTUV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9kb21Ub29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGltL09iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoaW0vY29uc29sZS5qcyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJFdmVudHMiLCJBamF4Iiwib3B0aW9ucyIsImN1cnJlbnRSZXF1ZXN0cyIsImV2ZW50cyIsImNhbmNlbCIsImhlYWRlcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJzZW5kIiwidGhhdCIsImRhdGEiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJDYW5jZWxUb2tlbiIsImNhbmNlbFNvdXJjZSIsInNvdXJjZSIsImNvbmZpZyIsInVybCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50Iiwib25Qcm9ncmVzcyIsImxvYWRlZCIsInRvdGFsIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImFqYXhQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwidHJpZ2dlciIsImNhdGNoIiwibW9kdWxlIiwiZXhwb3J0cyIsIkJhc2VET01Db25zdHJ1Y3RvciIsImluaXQiLCJzZiIsIm5vZGUiLCJncmFiT3B0aW9ucyIsIm9wdGlvbnNUb0dyYWIiLCJjdXJyZW50T3B0aW9uVmFsdWUiLCJjdXJyZW50T3B0aW9uIiwia2V5cyIsImZvckVhY2giLCJvcHRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwiaW5zdGFuY2VzIiwibmFtZSIsImF0dHJpYnV0ZXMiLCJkb21BdHRyIiwicHJvY2Vzc29yIiwiY2FsbCIsIkRvbU11dGF0aW9ucyIsImluc3RhbmNlc0NvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJjaGFyYWN0ZXJEYXRhT2xkVmFsdWUiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvbkRvbU11dGF0ZSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwibXV0YXRpb25zIiwiY2xhc3NBcnJheSIsImdldENsYXNzZXMiLCJjbGFzc1NlbGVjdG9yIiwiam9pbiIsImxlbmd0aCIsIm11dGF0aW9uIiwidHlwZSIsInByb2Nlc3NNdXRhdGlvbkF0dHJpYnV0ZXMiLCJwcm9jZXNzTXV0YXRpb25DaGlsZExpc3QiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiY3VycmVudENsYXNzZXMiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJzcGxpdCIsIm9sZENsYXNzZXMiLCJvbGRWYWx1ZSIsImFkZGVkQ2xhc3NlcyIsImZpbHRlciIsInZhbCIsImluZGV4T2YiLCJyZW1vdmVkQ2xhc3NlcyIsImFkZGVkUmVnaXN0ZXJlZENsYXNzZXMiLCJyZW1vdmVkUmVnaXN0ZXJlZENsYXNzZXMiLCJyZW1vdmVJbnN0YW5jZSIsImdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3MiLCJhZGRJbnN0YW5jZSIsIm5vZGVzTGlzdCIsImFjdGlvbiIsImNoZWNrTm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibm9kZVR5cGUiLCJub2RlTmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdG9wT2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJhbGxvd2VkRXZlbnRzIiwiX3N0b3JhZ2UiLCJfYWxsb3dlZEV2ZW50cyIsIm9uIiwiY2FsbGJhY2siLCJldmVudEFyciIsInJlcGxhY2UiLCJldmVudCIsIndhcm4iLCJwdXNoIiwicmVnaXN0ZXJBY3Rpb24iLCJvZmYiLCJhbGVydCIsIm4iLCJsIiwicGVyZm9ybUFjdGlvbiIsIkluc3RhbmNlc0NvbnRyb2xsZXIiLCJzcGlyYWwiLCJpbnN0YW5jZXNDb25zdHJ1Y3RvcnMiLCJjc3NDbGFzc2VzIiwianNDb25zdHJ1Y3RvcnMiLCJhZGRvbnMiLCJyZWdpc3Rlckluc3RhbmNlVHlwZSIsImNvbnN0cnVjdG9yRnVuY3Rpb24iLCJjc3NDbGFzc05hbWUiLCJpc1NraXBJbml0aWFsaXphdGlvbiIsImluc3RhbmNlTmFtZSIsIm5vZGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJtYXgiLCJhZGRJbnN0YW5jZVR5cGUiLCJJbnN0YW5jZUNvbnN0cnVjdG9yIiwiaXNBbHJlYWR5QWRkZWQiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlIiwiaW5zdGFuY2VPYmoiLCJkaWUiLCJrZXkiLCJzcGxpY2UiLCJpc1JldHVybk9iamVjdCIsInR5cGVBcnIiLCJyZXQiLCJIVE1MRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0SW5zdGFuY2VzIiwicmVnaXN0ZXJBZGRvbiIsImFkZG9uIiwiYWRkb25UeXBlIiwiYWRkb25OYW1lIiwiZ2V0SW5zdGFuY2VBZGRvbiIsImNzc0NsYXNzIiwiZ2V0SW5zdGFuY2VDb25zdHJ1Y3RvcnMiLCJhamF4Iiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwiZGVsYXkiLCJiYXNlRXZlbnRzIiwidG9TdHJpbmciLCJpc0Fic29sdXRlIiwidGVzdCIsInNlbGYiLCJsb2NhdGlvbiIsImhyZWYiLCJvcmlnaW4iLCJ3aW5kb3ciLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImNoYXJBdCIsInJlbG9hZCIsImNsb3NlIiwiRE9NRXZlbnRzIiwiX0RPTUV2ZW50c1N0b3JhZ2UiLCJhZGQiLCJldmVudEFycmF5IiwidXNlQ2FwdHVyZSIsIkRPTU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiZXZlbnRGdW5jdGlvbiIsInJlbW92ZSIsInJlbW92ZUFsbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0IiwiZWxlbSIsInNlbGVjdG9ycyIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsInBhcmVudE5vZGUiLCJjbG9zZXN0QnlDbGFzc05hbWUiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInRvb2xzIiwicmVzb2x2ZUtleVBhdGgiLCJwYXRoIiwib2JqIiwic2FmZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwic2ZXcmFwcGVyIiwiY29yZSIsImhlbHBlcnMiLCJkb21NdXRhdGlvbiIsImNzcmZUb2tlbiIsImNyZWF0ZU1vZHVsZVByb3RvdHlwZSIsImNyZWF0ZSIsImJpbmQiLCJkb21Ub29scyIsIlR5cGVFcnJvciIsIm91dHB1dCIsImluZGV4IiwibmV4dEtleSIsIm5vb3AiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixtQkFBTyxDQUFDLDBEQUFhLEU7Ozs7Ozs7Ozs7OztBQ0F6Qjs7QUFFYixZQUFZLG1CQUFPLENBQUMseURBQVk7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLHFFQUFrQjtBQUN2QyxlQUFlLG1CQUFPLENBQUMsK0VBQXVCO0FBQzlDLG1CQUFtQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN0RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBOEI7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMsNkVBQXFCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZFQUFzQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM3S2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHNEQUFTO0FBQzdCLFdBQVcsbUJBQU8sQ0FBQyxvRUFBZ0I7QUFDbkMsWUFBWSxtQkFBTyxDQUFDLGdFQUFjO0FBQ2xDLGtCQUFrQixtQkFBTyxDQUFDLDRFQUFvQjtBQUM5QyxlQUFlLG1CQUFPLENBQUMsNERBQVk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHNFQUFpQjtBQUN4QyxvQkFBb0IsbUJBQU8sQ0FBQyxnRkFBc0I7QUFDbEQsaUJBQWlCLG1CQUFPLENBQUMsMEVBQW1COztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyx3RUFBa0I7O0FBRXpDOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbEJhOztBQUViLGFBQWEsbUJBQU8sQ0FBQywrREFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeERhOztBQUViO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0phOztBQUViLFlBQVksbUJBQU8sQ0FBQyx5REFBWTtBQUNoQyxlQUFlLG1CQUFPLENBQUMsNkVBQXFCO0FBQzVDLHlCQUF5QixtQkFBTyxDQUFDLHFGQUFzQjtBQUN2RCxzQkFBc0IsbUJBQU8sQ0FBQywrRUFBbUI7QUFDakQsa0JBQWtCLG1CQUFPLENBQUMsdUVBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7O0FDckZhOztBQUViLFlBQVksbUJBQU8sQ0FBQyx5REFBWTs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ25EYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyx5RUFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHlEQUFZO0FBQ2hDLG9CQUFvQixtQkFBTyxDQUFDLDJFQUFpQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsMkVBQW9CO0FBQzNDLGVBQWUsbUJBQU8sQ0FBQyw2REFBYTtBQUNwQyxvQkFBb0IsbUJBQU8sQ0FBQyx5RkFBNEI7QUFDeEQsa0JBQWtCLG1CQUFPLENBQUMscUZBQTBCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDckZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsdURBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLHVFQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCYTs7QUFFYixZQUFZLG1CQUFPLENBQUMseURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLE1BQU07QUFDakIsV0FBVyxlQUFlO0FBQzFCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkEsK0NBQWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHNEQUFTO0FBQzdCLDBCQUEwQixtQkFBTyxDQUFDLGtHQUErQjs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxxRUFBaUI7QUFDdkMsR0FBRztBQUNIO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLG9FQUFnQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxZQUFZO0FBQ25CO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQ2pHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYixZQUFZLG1CQUFPLENBQUMseURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JhOztBQUViLFlBQVksbUJBQU8sQ0FBQyx5REFBWTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQyxTQUFTOztBQUVUO0FBQ0EsNERBQTRELHdCQUF3QjtBQUNwRjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQywrQkFBK0IsYUFBYSxFQUFFO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNwRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JhOztBQUViLFlBQVksbUJBQU8sQ0FBQyx5REFBWTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNuRWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHVEQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYixZQUFZLG1CQUFPLENBQUMseURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZUFBZTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsb0VBQWdCO0FBQ25DLGVBQWUsbUJBQU8sQ0FBQywyRUFBVzs7QUFFbEM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLEdBQUcsU0FBUztBQUM1QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0QsYUFBT0YsTUFBUDtBQUNELEtBcEJEO0FBcUJELEdBdEJBLEdBQUQ7QUF1QkQsQzs7Ozs7Ozs7Ozs7QUM3QkQ7O0FBQ0E7OztBQUdDLGFBQVk7QUFDWCxNQUFJdk4sTUFBSjs7QUFDQSxRQUFNME4sSUFBSSxHQUFHLFlBQVksQ0FDeEIsQ0FERDs7QUFFQSxRQUFNQyxPQUFPLEdBQUcsQ0FDZCxRQURjLEVBQ0osT0FESSxFQUNLLE9BREwsRUFDYyxPQURkLEVBQ3VCLEtBRHZCLEVBQzhCLFFBRDlCLEVBQ3dDLE9BRHhDLEVBRWQsV0FGYyxFQUVELE9BRkMsRUFFUSxnQkFGUixFQUUwQixVQUYxQixFQUVzQyxNQUZ0QyxFQUU4QyxLQUY5QyxFQUdkLGNBSGMsRUFHRSxTQUhGLEVBR2EsWUFIYixFQUcyQixPQUgzQixFQUdvQyxNQUhwQyxFQUc0QyxTQUg1QyxFQUlkLFdBSmMsRUFJRCxPQUpDLEVBSVEsTUFKUixDQUFoQjtBQU1BLE1BQUk7QUFBRXhKO0FBQUYsTUFBYXdKLE9BQWpCLENBVlcsQ0FXWDs7QUFDQSxRQUFNMU0sT0FBTyxHQUFJb0osTUFBTSxDQUFDcEosT0FBUCxHQUFpQm9KLE1BQU0sQ0FBQ3BKLE9BQVAsSUFBa0IsRUFBcEQsQ0FaVyxDQWNYOztBQUNBLFNBQU9rRCxNQUFNLEVBQWIsRUFBaUI7QUFDZm5FLFVBQU0sR0FBRzJOLE9BQU8sQ0FBQ3hKLE1BQUQsQ0FBaEIsQ0FEZSxDQUdmOztBQUNBLFFBQUksQ0FBQ2xELE9BQU8sQ0FBQ2pCLE1BQUQsQ0FBWixFQUFzQjtBQUNwQmlCLGFBQU8sQ0FBQ2pCLE1BQUQsQ0FBUCxHQUFrQjBOLElBQWxCO0FBQ0Q7QUFDRjtBQUNGLENBdkJBLEdBQUQsQyIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB1dGlscy5mb3JFYWNoKFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLFxuICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxuICAgICdzb2NrZXRQYXRoJ1xuICBdLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICAvLyBPbmx5IE5vZGUuSlMgaGFzIGEgcHJvY2VzcyB2YXJpYWJsZSB0aGF0IGlzIG9mIFtbQ2xhc3NdXSBwcm9jZXNzXG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxuLy8gdmFyIHRvb2xzID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdG9vbHNcIik7XG5jb25zdCBFdmVudHMgPSByZXF1aXJlKCcuLi9jb3JlL0V2ZW50cycpO1xuLy8gY29uc3QgTGlrZUZvcm1EYXRhID0gcmVxdWlyZSgnLi4vaGVscGVycy9MaWtlRm9ybURhdGEnKTtcblxuLyoqXG4gKiBUaGlzIGlzIGFuIEFqYXggdHJhbnNwb3J0LlxuICogU3VwcG9ydHMgIFhEb21haW5SZXF1ZXN0IGZvciBvbGQgSUVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5oZWFkZXJzXSBIZWFkZXJzIHRvIGFkZCB0byB0aGUgaW5zdGFuY2VcbiAqIEBmaXJlcyBiZWZvcmVTZW5kIGV2ZW50IHRoYXQgd2lsbCBiZSBwZXJmb3JtZWQgYmVmb3JlIHJlcXVlc3QgaXMgc2VuZC4gRXZlbnQgY2FsbGVkIHdpdGggb25lIHBhcmFtZXRlciBcIm9wdGlvbnNcIiwgdGhhdCBjb250YWlucyBhbGwgdmFyaWFibGVzIGZvciBBamF4XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQWpheCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHRoaXMuY3VycmVudFJlcXVlc3RzID0gMDtcbiAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRzKFsnYmVmb3JlU2VuZCcsICdsb2FkJ10pO1xuICB0aGlzLmNhbmNlbCA9IG51bGw7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIG9wdGlvbnMuaGVhZGVycyk7XG4gIH1cbn07XG5cbi8qKlxuICogRGVmYXVsdCBoZWFkZXJzLiBZb3UgY2FuIG92ZXJ3cml0ZSBpdC4gTG9vayBhdCB0aGUgZXZlbnQgYmVmb3JlU2VuZFxuICogUGxlYXNlIG5vdGUgdGhhdCBvbiBYRG9tYWluUmVxdWVzdCAgd2UgY2FuJ3Qgc2VuZCBhbnkgaGVhZGVycy5cbiAqIEB0eXBlIE9iamVjdFxuICovXG5BamF4LnByb3RvdHlwZS5oZWFkZXJzID0ge1xuICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG59O1xuXG4vKipcbiAqIFNlbmQgYWpheCByZXF1ZXN0IHRvIHNlcnZlclxuICogV2lsbCByZXR1cm4gcHJvbWlzZSBvciBhcnJheSB3aXRoIHByb21pc2UgYW5kIFhNTEh0dHBSZXF1ZXN0IDoge3dpbmRvdy5Qcm9taXNlfFt3aW5kb3cuUHJvbWlzZSxYTUxIdHRwUmVxdWVzdF19XG4gKiBAc2luY2UgMC40LjBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnVybCB1cmwgdG8gc2VuZCBkYXRhXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IFtvcHRpb25zLmRhdGFdIGRhdGEgdG8gc2VuZFxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1ldGhvZF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5oZWFkZXJzXSBoZWFkZXJzIHRvIGFkZCB0byB0aGUgcmVxdWVzdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMub25Qcm9ncmVzc10gY2FsbGJhY2sgZnVuY3Rpb24gb24gcHJvZ3Jlc3MuIFR3byBjYWxsYmFjayBvcHRpb25zOiBjdXJyZW50IGJ5dGVzIHNlbnQsdG90YWxCeXRlc1xuICogSWYgdHJlZSB0aGVuICBbd2luZG93LlByb21pc2UsIFhNTEh0dHBSZXF1ZXN0IF0gd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybiB7UHJvbWlzZXxBcnJheX1cbiAqL1xuQWpheC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIC8vIFRPRE8gd2h5IHdlIGNoZWNrIGhlcmUgaWYgZGF0YSA9PT0gbnVsbCB0aGVuIHJlYXNzaWduIHRvIG51bGwgYWdhaW4/XG4gIGlmIChvcHRpb25zLmRhdGEgPT09IG51bGwgfHwgb3B0aW9ucy5kYXRhID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy5kYXRhID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMuZGF0YSA9IG51bGw7XG4gIH1cbiAgaWYgKCFvcHRpb25zLm1ldGhvZCkge1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICB9XG5cbiAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzID8gT2JqZWN0LmFzc2lnbihvcHRpb25zLmhlYWRlcnMsIHRoaXMuaGVhZGVycywgb3B0aW9ucy5oZWFkZXJzKSA6ICh7IC4uLnRoaXMuaGVhZGVycyB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcbiAgY29uc3QgY2FuY2VsU291cmNlID0gQ2FuY2VsVG9rZW4uc291cmNlKCk7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIC8vIGB1cmxgIGlzIHRoZSBzZXJ2ZXIgVVJMIHRoYXQgd2lsbCBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICAgIHVybDogb3B0aW9ucy51cmwsXG5cbiAgICAvLyBgbWV0aG9kYCBpcyB0aGUgcmVxdWVzdCBtZXRob2QgdG8gYmUgdXNlZCB3aGVuIG1ha2luZyB0aGUgcmVxdWVzdFxuICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG5cbiAgICAvLyBgaGVhZGVyc2AgYXJlIGN1c3RvbSBoZWFkZXJzIHRvIGJlIHNlbnRcbiAgICBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsXG5cbiAgICAvLyBgZGF0YWAgaXMgdGhlIGRhdGEgdG8gYmUgc2VudCBhcyB0aGUgcmVxdWVzdCBib2R5XG4gICAgLy8gT25seSBhcHBsaWNhYmxlIGZvciByZXF1ZXN0IG1ldGhvZHMgJ1BVVCcsICdQT1NUJywgYW5kICdQQVRDSCdcbiAgICAvLyBXaGVuIG5vIGB0cmFuc2Zvcm1SZXF1ZXN0YCBpcyBzZXQsIG11c3QgYmUgb2Ygb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XG4gICAgLy8gLSBzdHJpbmcsIHBsYWluIG9iamVjdCwgQXJyYXlCdWZmZXIsIEFycmF5QnVmZmVyVmlldywgVVJMU2VhcmNoUGFyYW1zXG4gICAgLy8gLSBCcm93c2VyIG9ubHk6IEZvcm1EYXRhLCBGaWxlLCBCbG9iXG4gICAgLy8gLSBOb2RlIG9ubHk6IFN0cmVhbSwgQnVmZmVyXG4gICAgZGF0YTogb3B0aW9ucy5kYXRhLFxuXG4gICAgLy8gYG9uVXBsb2FkUHJvZ3Jlc3NgIGFsbG93cyBoYW5kbGluZyBvZiBwcm9ncmVzcyBldmVudHMgZm9yIHVwbG9hZHNcbiAgICBvblVwbG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudCkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMub25Qcm9ncmVzcykge1xuICAgICAgICBvcHRpb25zLm9uUHJvZ3Jlc3MocHJvZ3Jlc3NFdmVudC5sb2FkZWQsIHByb2dyZXNzRXZlbnQudG90YWwpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBgY2FuY2VsVG9rZW5gIHNwZWNpZmllcyBhIGNhbmNlbCB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNhbmNlbCB0aGUgcmVxdWVzdFxuICAgIC8vIChzZWUgQ2FuY2VsbGF0aW9uIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbHMpXG4gICAgY2FuY2VsVG9rZW46IGNhbmNlbFNvdXJjZS50b2tlbixcbiAgfTtcblxuICB0aGlzLmNhbmNlbCA9IGNhbmNlbFNvdXJjZS5jYW5jZWw7XG5cbiAgY29uc3QgYWpheFByb21pc2UgPSBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4geyAvLyBSZXR1cm4gYSBuZXcgcHJvbWlzZS5cbiAgICBpZiAoIW9wdGlvbnMudXJsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJyk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuICAgICAgcmVqZWN0KCdZb3Ugc2hvdWxkIHByb3ZpZGUgdXJsJyk7IC8vIFRPRE9cbiAgICB9XG4gICAgdGhhdC5jdXJyZW50UmVxdWVzdHMgKz0gMTtcbiAgICBheGlvc1xuICAgICAgLnJlcXVlc3QoY29uZmlnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoYXQuY3VycmVudFJlcXVlc3RzIC09IDE7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiAxOTkgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7IC8vIDIwMC0yOTlcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMzk5ICYmIHJlc3BvbnNlLnN0YXR1cyA8IDYwMCkgeyAvLyA0MDAtNTk5XG4gICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmtub3duIHN0YXR1cyAlZC4gUmVqZWN0aW5nJywgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7IC8vIHJlamVjdCB3aXRoIHRoZSBzdGF0dXMgdGV4dFxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgdGhhdC5ldmVudHMudHJpZ2dlcignbG9hZCcsIG9wdGlvbnMpOyAvLyBmb3IgZXhhbXBsZSAtIHVzZWQgdG8gaGFuZGxlIGFjdGlvbnNcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoYXQuY3VycmVudFJlcXVlc3RzIC09IDE7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSkpO1xuXG4gIHJldHVybiBhamF4UHJvbWlzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWpheDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqLyAvLyBUT0RPOiA/XG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogVGhpcyBhIGJhc2UgY29uc3RydWN0b3IgKGNsYXNzKSBmb3IgYW55IERPTSBiYXNlZCBpbnN0YW5jZS5cbiAqIFRoaXMgY29uc3RydWN0b3IganVzdCBncmFiIGFsbCBub2RlIGF0dHJpYnV0ZXMgYW5kIGdlbmVyYXRlcyBvcHRpb25zLiBBbGwgcHJvY2Vzc2VkIG9wdGlvbnMgc3RvcmVkIGF0IHRoaXMub3B0aW9uc1xuICogQGV4YW1wbGVcbiAqIFdlIGhhdmUgaHRtbCBsaWtlIHRoaXM6XG4gKiA8ZGl2IGRhdGEtdGVzdD1cInRlc3RWYWx1ZVwiIGRhdGEtdmFsdWU9XCJ2YWx1ZTEyM1wiPi4uLi4uPC9kaXY+XG4gKiB0aGlzLm9wdGlvbnMgd2lsbCBiZTpcbiAqIHtcbiAqICB0ZXN0OlwidGVzdFZhbHVlXCIsXG4gKiAgdmFsdWU6XCJ2YWx1ZVwiXG4gKiB9XG4gKiBOb3RlOiBkYXRhLXRlc3QgYW5kIGRhdGEtdmFsdWUgc2hvdWxkIGJlIGRlc2NyaWJlZCBpbiBhdHRyaWJ1dGVzVG9HcmFiXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQmFzZURPTUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xufTtcbi8qKlxuICogSW5pdCBtZXRob2QuIENhbGwgYWZ0ZXIgY29uc3RydWN0IGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICovXG5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgLy8gVE9ETyBkYXRhLXNwaXJhbC1KU09OXG4gIHRoaXMuc2YgPSBzZjtcbiAgdGhpcy5ub2RlID0gbm9kZTtcbiAgLy8gaWYgKHNmLm9wdGlvbnMgJiYgc2Yub3B0aW9ucy5pbnN0YW5jZXMgJiYgc2Yub3B0aW9ucy5pbnN0YW5jZXNbdGhpcy5uYW1lXSkge1xuICAvLyAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zIHx8IHt9LCBzZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdKTtcbiAgLy8gfVxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuZ3JhYk9wdGlvbnMobm9kZSksIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgb3B0aW9ucyB0byBnZW5lcmF0ZS5cbiAqIFlvdSBzaG91bGQgcHJvdmlkZSBwcm9jZXNzb3Igb3IgdmFsdWUuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtPYmplY3R9IHByb3BlcnR5S2V5IC0gb2JqZWN0IG9mIHByb3BlcnR5XG4gKiBAcHJvcGVydHkge1N0cmluZ30gcHJvcGVydHlLZXkudmFsdWUgLSBkZWZhdWx0IHZhbHVlIHRvIHJldHVyblxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtwcm9wZXJ0eUtleS5kb21BdHRyXSAtIGRvbSBhdHRyaWJ1dGUgdG8gZ3JhYiBkYXRhXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbcHJvcGVydHlLZXkucHJvY2Vzc29yXSAtICBwcm9jZXNzb3IgdG8gcHJvY2VzcyBkYXRhIGJlZm9yZSByZXR1cm5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSAgLi4uIC0gQW5vdGhlciBvYmplY3Qgb2Ygb25lIHByb3BlcnR5XG4gKiBAdHlwZSB7e319XG4gKiAgQGV4YW1wbGVcbiAqIFwic29tZUF0dHJpYnV0ZVwiOiB7Ly8ga2V5XG4gKiAgICAgIHZhbHVlOiB0cnVlLCAvL2RlZmF1bHQgVmFsdWVcbiAqICAgICAgZG9tQXR0cjogXCJkYXRhLXNvbWUtYXR0cmlidXRlXCIsIC8vIGF0dHJpYnV0ZSBmcm9tIG5vZGUgdG8gZ3JhYlxuICogICAgICBwcm9jZXNzb3I6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7IC8vcHJvY2Vzc29yIHRvIHByb2Nlc3MgdmFsdWVzIGJlZm9yZSByZXR1cm5cbiAqICAgICAgICAgIC8vc29tZSBjYWxjdWxhdGlvbnNcbiAqICAgICAgcmV0dXJuIHNvbWVWYWx1ZTtcbiAqICAgICAgfVxuICogIH0sXG4gKiAgXCJhbm90aGVyQXR0cmlidXRlXCI6ey4uLn0sXG4gKiAgXCIuLi5cIlxuICpcbiAqICBAZXhhbXBsZVxuICogIC8vcmV0dXJuIG5vZGUgYXMgdmFsdWVcbiAqICBcImNvbnRleHRcIjoge1xuICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsa2V5KSB7IC8vcHJvY2Vzc29yXG4gKiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAqICAgICAgfVxuICogIH0sXG4gKiAgXCJBbm90aGVyLWtleVwiOnsuLi59LFxuICogIFwiLi4uXCJcbiAqIEBleGFtcGxlXG4gKiAvL0dyYWIgYXR0cmlidXRlIFwiZGF0YS1hdHRyaWJ1dGVcIiBhcyBcIk15QXR0cmlidXRlXCIgaWYgYXR0cmlidXRlIG5vdCBwcm92aWRlZCByZXR1cm4gXCJEZWZhdWx0VmFsdWVcIlxuICogLy8gRG9tIG5vZGUgPGRpdiBkYXRhLWF0dHJpYnV0ZT1cInNvbWVWYWx1ZVwiPjwvZGl2PlxuICogXCJNeUF0dHJpYnV0ZVwiOiB7XG4gKiAgICAgIHZhbHVlOiBcIkRlZmF1bHRWYWx1ZVwiLFxuICogICAgICBkb21BdHRyOiBcImRhdGEtYXR0cmlidXRlXCJcbiAqICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wiTXlBdHRyaWJ1dGVcIjpcInNvbWVWYWx1ZVwifVxuICpcbiAqICBAZXhhbXBsZVxuICogLy9HcmFiIGF0dHJpYnV0ZSBcImRhdGEtYXR0cmlidXRlXCIgYXMgXCJNeUF0dHJpYnV0ZVwiIGFuZCByZXR1cm4gc29tZSB2YWx1ZSBpbnN0ZWFkXG4gKiAvL0RvbSBub2RlICA8ZGl2IGRhdGEtYXR0cmlidXRlPVwic29tZVZhbHVlXCI+PC9kaXY+XG4gKiBcIk15QXR0cmlidXRlXCI6IHtcbiAqICAgICAgZG9tQXR0cjogXCJkYXRhLWF0dHJpYnV0ZVwiLFxuICogICAgICBwcm9jZXNzb3I6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XG4gKiAgICAgICAgICByZXR1cm4gdmFsK1wiU29tZUNhbGN1bGF0aW9uXCI7XG4gKiAgICAgIH1cbiAqICB9XG4gKiAgLy9hZnRlciBwcm9jZXNzaW5nIHdlIHNob3VsZCBoYXZlXG4gKiAge1wiTXlBdHRyaWJ1dGVcIjpcInNvbWVWYWx1ZVNvbWVDYWxjdWxhdGlvblwifVxuICpcbiAqIEBleGFtcGxlXG4gKiAvL3JldHVybiBmdW5jdGlvbiBhcyB2YWx1ZVxuICogcHJvY2Vzc0Fuc3dlcjoge1xuICogICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gKiAgICAgICAgIHJldHVybiBcInNvbWVWYWxcIjtcbiAqICAgICAgfVxuICogIC8vYWZ0ZXIgcHJvY2Vzc2luZyB3ZSBzaG91bGQgaGF2ZVxuICogIHtcInByb2Nlc3NBbnN3ZXJcIjpmdW5jdGlvbiAob3B0aW9ucykge1xuICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XG4gKiAgICAgIH1cbiAqICAgfVxuICpcbiAqIEBleGFtcGxlXG4gKiAvL3JldHVybiBpbml0IHRpbWUgYXMgdmFsdWVcbiAqIGluaXRUaW1lOiB7XG4gKiAgICAgIFwicHJvY2Vzc29yXCI6IGZ1bmN0aW9uIChub2RlLHZhbCxzZWxmKSB7XG4gKiAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWU7XG4gKiAgICAgIH1cbiAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcbiAqICB7XCJpbml0VGltZVwiOjE0Mjk4MDg5Nzc0MDR9XG4gKiBAZXhhbXBsZVxuICogLy9yZXR1cm4gb3RoZXIgdmFsdWUgaW5zdGVhZCBvZiByZWFsIG9uZVxuICogcHJvY2Vzc0Fuc3dlcjoge1xuICogICAgICBcInByb2Nlc3NvclwiOiBmdW5jdGlvbiAobm9kZSx2YWwsc2VsZikge1xuICogICAgICAgICByZXR1cm4gXCJzb21lVmFsXCI7XG4gKiAgICAgIH1cbiAqICAvL2FmdGVyIHByb2Nlc3Npbmcgd2Ugc2hvdWxkIGhhdmVcbiAqICB7XCJwcm9jZXNzQW5zd2VyXCI6XCJzb21lVmFsXCJ9XG4gKi9cbkJhc2VET01Db25zdHJ1Y3Rvci5wcm90b3R5cGUub3B0aW9uc1RvR3JhYiA9IHt9O1xuXG4vKipcbiAqIEdyYWIgYWxsIG9wdGlvbnMgdGhhdCBkZXNjcmliZWQgaW4gb3B0aW9uc1RvR3JhYlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgZG9tTm9kZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5CYXNlRE9NQ29uc3RydWN0b3IucHJvdG90eXBlLmdyYWJPcHRpb25zID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICBsZXQgY3VycmVudE9wdGlvblZhbHVlO1xuICBsZXQgY3VycmVudE9wdGlvbjtcbiAgLy8gZm9yIChjb25zdCBvcHRpb24gaW4gdGhpcy5vcHRpb25zVG9HcmFiKSB7XG4gIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uc1RvR3JhYikuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgaWYgKHRoaXMub3B0aW9uc1RvR3JhYi5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7XG4gICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBudWxsO1xuICAgICAgaWYgKHRoaXMub3B0aW9uc1RvR3JhYi5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7IC8vIGlmIHRoaXMgaXMgb3duIG9wdGlvblxuICAgICAgICBjdXJyZW50T3B0aW9uID0gdGhpcy5vcHRpb25zVG9HcmFiW29wdGlvbl07XG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7IC8vIHdlIGhhdmUgZGVmYXVsdCBvcHRpb24uIExldCdzIGdyYWIgaXQgZm9yIGZpcnN0XG4gICAgICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gY3VycmVudE9wdGlvbi52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV0gJiYgdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlc1t0aGlzLm5hbWVdLmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSB0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzW3RoaXMubmFtZV1bb3B0aW9uXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50T3B0aW9uLmhhc093blByb3BlcnR5KCdkb21BdHRyJykgJiYgbm9kZS5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGN1cnJlbnRPcHRpb24uZG9tQXR0cikpIHsgLy8gd2UgY2FuIGdyYWIgdGhlIGF0dHJpYnV0ZSBvZiBub2RlXG4gICAgICAgICAgY3VycmVudE9wdGlvblZhbHVlID0gbm9kZS5hdHRyaWJ1dGVzW2N1cnJlbnRPcHRpb24uZG9tQXR0cl0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgncHJvY2Vzc29yJykpIHsgLy8gd2UgaGF2ZSBwcm9jZXNzb3IuIExldCdzIGV4ZWN1dGUgaXRcbiAgICAgICAgICBjdXJyZW50T3B0aW9uVmFsdWUgPSBjdXJyZW50T3B0aW9uLnByb2Nlc3Nvci5jYWxsKHRoaXMsIG5vZGUsIGN1cnJlbnRPcHRpb25WYWx1ZSwgY3VycmVudE9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudE9wdGlvblZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gY3VycmVudE9wdGlvblZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VET01Db25zdHJ1Y3RvcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBEb20gbXV0YXRpb24uIExpc3RlbmluZyB0byB0aGUgRE9NIGFuZCBhZGQgb3IgcmVtb3ZlIGluc3RhbmNlcyBiYXNlZCBvbiBjbGFzc2VzLlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlc0NvbnRyb2xsZXIgIHNwaXJhbCBpbnN0YW5jZXNDb250cm9sbGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW5zdGFuY2VzQ29udHJvbGxlci5nZXRDbGFzc2VzICBnZXQgYWxsIHJlZ2lzdGVyZWQgbW9kdWxlcyBjbGFzc2VzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW5zdGFuY2VzQ29udHJvbGxlci5hZGRJbnN0YW5jZSAgYWRkIGluc3RhbmNlIG1ldGhvZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGluc3RhbmNlc0NvbnRyb2xsZXIucmVtb3ZlSW5zdGFuY2UgIHJlbW92ZSBpbnN0YW5jZSBtZXRob2RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBEb21NdXRhdGlvbnMgPSBmdW5jdGlvbiAoaW5zdGFuY2VzQ29udHJvbGxlcikge1xuICBpZiAoIWluc3RhbmNlc0NvbnRyb2xsZXIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdZb3Ugc2hvdWxkIHByb3ZpZGUgaW5zdGFuY2VzQ29udHJvbGxlciAgZm9yIERPTSBNdXRhdGlvbi4gQmVjYXVzZSBET00gTXV0YXRpb24gIHNob3VsZCBrbm93biBhbGwgY2xhc3NlcyBhbmQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBjYWxsIERvbU11dGF0aW9ucyB3aXRoIG5ldyAgLSAnbmV3IERvbU11dGF0aW9ucygpJyBcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlciA9IGluc3RhbmNlc0NvbnRyb2xsZXI7XG4gIGNvbnN0IGNvbmZpZyA9IHsgLy8gY29uZmlnIGZvciBNdXRhdGlvbk9ic2VydmVyXG4gICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcbiAgfTtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHsgLy8gY2FsbCBmdW5jdGlvbiB3aGVuIGRvbSBtdXRhdGVkLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB0aGF0Lm9uRG9tTXV0YXRlLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH0pO1xuICB0aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIGNvbmZpZyk7Ly8gc3RhcnQgb2JzZXJ2ZXJcbn07XG5cbi8qKlxuICogV2hlbiBkb20gbXV0YXRlZCB0aGlzIGZ1bmN0aW9uIGlkIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtBcnJheX0gbXV0YXRpb25zIGFycmF5IG9mIG11dGF0aW9uc1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuRG9tTXV0YXRpb25zLnByb3RvdHlwZS5vbkRvbU11dGF0ZSA9IGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgY29uc3QgY2xhc3NBcnJheSA9IHRoaXMuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRDbGFzc2VzKCk7Ly8gZ2V0IGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcbiAgY29uc3QgY2xhc3NTZWxlY3RvciA9IGAuJHtjbGFzc0FycmF5LmpvaW4oJywuJyl9YDsvLyBjb252ZXJ0IGZvciBxdWVyeVNlbGVjdG9yQWxsKClcbiAgaWYgKGNsYXNzU2VsZWN0b3IubGVuZ3RoID09PSAxKSB7IC8vIGlmIG5vdCByZWdpc3RlcmVkIGFueSBpbnN0YW5jZVR5cGVzXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikgeyAvLyBsb29wIG92ZXIgbXV0YXRpb24gYXJyYXlcbiAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICB0aGlzLnByb2Nlc3NNdXRhdGlvbkF0dHJpYnV0ZXMobXV0YXRpb24sIGNsYXNzQXJyYXkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hhcmFjdGVyRGF0YSc6XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgIHRoaXMucHJvY2Vzc011dGF0aW9uQ2hpbGRMaXN0KG11dGF0aW9uLmFkZGVkTm9kZXMsICdhZGRJbnN0YW5jZScsIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpO1xuICAgICAgICB0aGlzLnByb2Nlc3NNdXRhdGlvbkNoaWxkTGlzdChtdXRhdGlvbi5yZW1vdmVkTm9kZXMsICdyZW1vdmVJbnN0YW5jZScsIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgd3JvbmcuIENvbnRhY3QgdGVjaCBzdXBwb3J0Jyk7XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbkRvbU11dGF0aW9ucy5wcm90b3R5cGUucHJvY2Vzc011dGF0aW9uQXR0cmlidXRlcyA9IGZ1bmN0aW9uIChtdXRhdGlvbiwgY2xhc3NBcnJheSkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgY29uc3QgY3VycmVudENsYXNzZXMgPSBtdXRhdGlvbi50YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gIGNvbnN0IG9sZENsYXNzZXMgPSAobXV0YXRpb24ub2xkVmFsdWUpID8gbXV0YXRpb24ub2xkVmFsdWUuc3BsaXQoJyAnKSA6IFtdO1xuICBjb25zdCBhZGRlZENsYXNzZXMgPSBjdXJyZW50Q2xhc3Nlcy5maWx0ZXIoKHZhbCkgPT4gKG9sZENsYXNzZXMuaW5kZXhPZih2YWwpID09PSAtMSkpO1xuICBjb25zdCByZW1vdmVkQ2xhc3NlcyA9IG9sZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKHZhbCkgPT09IC0xKSk7XG4gIGNvbnN0IGFkZGVkUmVnaXN0ZXJlZENsYXNzZXMgPSBhZGRlZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjbGFzc0FycmF5LmluZGV4T2YodmFsKSAhPT0gLTEpKTtcbiAgY29uc3QgcmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzID0gcmVtb3ZlZENsYXNzZXMuZmlsdGVyKCh2YWwpID0+IChjbGFzc0FycmF5LmluZGV4T2YodmFsKSAhPT0gLTEpKTtcbiAgcmVtb3ZlZFJlZ2lzdGVyZWRDbGFzc2VzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgIHRoYXQuaW5zdGFuY2VzQ29udHJvbGxlci5yZW1vdmVJbnN0YW5jZSh0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIuZ2V0SW5zdGFuY2VOYW1lQnlDc3NDbGFzcyh2YWwpLCBtdXRhdGlvbi50YXJnZXQpO1xuICB9KTtcbiAgYWRkZWRSZWdpc3RlcmVkQ2xhc3Nlcy5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICB0aGF0Lmluc3RhbmNlc0NvbnRyb2xsZXIuYWRkSW5zdGFuY2UodGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3ModmFsKSwgbXV0YXRpb24udGFyZ2V0KTtcbiAgfSk7XG59O1xuLyoqXG4gKiBQcm9jZXNzIG11dGF0aW9uIG9uIENoaWxkTGlzdFxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNMaXN0IGFycmF5IHdpdGggbm9kZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb24gYWN0aW9uIHRvIGNhbGwgKGFkZCBvciByZW1vdmUgbm9kZXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NTZWxlY3RvciAtIHN0cmluZyBzZWxlY3RvciBmb3IgcXVlcnlTZWxlY3RvckFsbFxuICogQHBhcmFtIHtBcnJheX0gY2xhc3NBcnJheSAtIGFycmF5IG9mIGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcbiAqL1xuRG9tTXV0YXRpb25zLnByb3RvdHlwZS5wcm9jZXNzTXV0YXRpb25DaGlsZExpc3QgPSBmdW5jdGlvbiAobm9kZXNMaXN0LCBhY3Rpb24sIGNsYXNzU2VsZWN0b3IsIGNsYXNzQXJyYXkpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgLyoqXG4gICAgICogSW50ZXJuYWwgZnVuY3Rpb24gZm9yIGNoZWNraW5nIG5vZGUgY2xhc3NcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSBkb20gbm9kZVxuICAgICAqL1xuICBmdW5jdGlvbiBjaGVja05vZGUobm9kZSkge1xuICAgIGNsYXNzQXJyYXkuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7IC8vIGxvb3Agb3ZlciByZWdpc3RlcmVkIGNsYXNzZXNcbiAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7IC8vIGlmIGNsYXNzIG1hdGNoIHRyeSB0byBhZGQgb3IgcmVtb3ZlIGluc3RhbmNlIGZvciB0aGlzIG5vZGVcbiAgICAgICAgdGhhdC5pbnN0YW5jZXNDb250cm9sbGVyW2FjdGlvbl0odGhhdC5pbnN0YW5jZXNDb250cm9sbGVyLmdldEluc3RhbmNlTmFtZUJ5Q3NzQ2xhc3MoY2xhc3NOYW1lKSwgbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBbXS5mb3JFYWNoLmNhbGwobm9kZXNMaXN0LCAodmFsKSA9PiB7IC8vIGxvb3Agb3ZlciBtdXRhdGlvbiBub2Rlc1xuICAgIGlmICh2YWwubm9kZVR5cGUgIT09IDEgfHwgdmFsLm5vZGVOYW1lID09PSAnU0NSSVBUJyB8fCB2YWwubm9kZU5hbWUgPT09ICdMSU5LJykgeyAvLyBkbyBub3QgcHJvY2VzcyBvdGhlciBub2RlcyB0aGVuIEVMRU1FTlRfTk9ERSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS5ub2RlVHlwZSBhbHNvIGlnbm9yZSBTQ1JJUFQgYW5kIExJTksgdGFnXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrTm9kZSh2YWwpOy8vIGNoZWNrIG11dGF0aW9uIG5vZGVcbiAgICBbXS5mb3JFYWNoLmNhbGwodmFsLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NTZWxlY3RvciksIGNoZWNrTm9kZSk7Ly8gcXVlcnkgYWxsIG5vZGVzIHdpdGggcmVxdWlyZWQgY2xhc3NlcyBhbmQgY2hlY2sgaXRcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFN0b3AgbGlzdGVuaW5nIHRoZSBkb20gY2hhbmdlc1xuICovXG5Eb21NdXRhdGlvbnMucHJvdG90eXBlLnN0b3BPYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRG9tTXV0YXRpb25zO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLyoqXG4gKiBFdmVudHMgc3lzdGVtLlxuICogQHBhcmFtIHtBcnJheX0gYWxsb3dlZEV2ZW50cyBhcnJheSBvZiBhbGxvd2VkIGV2ZW50cy5cbiAqIEBjb25zdHJ1Y3RzIEV2ZW50c1xuICogQGV4YW1wbGVcbiAqIC8vYWxsb3cgdG8gd29yayB3aXRoIGFsbCBldmVudHNcbiAqIHZhciBldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gKiBldmVudHMub24oXCJteUJlc3RFdmVudFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKiBAZXhhbXBsZVxuICogLy9BbGxvdyB0byBzZXJ2ZSBvbmx5IGxpbWl0ZWQgZXZlbnRzXG4gKiAgdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoW1wiYmVmb3JlU3VibWl0XCIsXCJvbkRhdGFSZWFkeVwiXSk7XG4gKiAgZXZlbnRzLm9uKFwibXlCZXN0RXZlbnRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pOy8vd2lsbCBub3Qgd29ya3NcbiAqICBldmVudHMub24oXCJiZWZvcmVTdWJtaXRcIixmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0pOy8vd2lsbCB3b3JrXG4gKi9cbmNvbnN0IEV2ZW50cyA9IGZ1bmN0aW9uIChhbGxvd2VkRXZlbnRzKSB7XG4gIHRoaXMuX3N0b3JhZ2UgPSB7fTtcbiAgdGhpcy5fYWxsb3dlZEV2ZW50cyA9IGFsbG93ZWRFdmVudHM7XG59O1xuXG4vKipcbiAqIEFkZCBldmVudChzKVxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50cyBldmVudCBvciBzcGFjZSBzZXBhcmF0ZWQgZXZlbnQgbGlzdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBleGFtcGxlXG4gKiB2YXIgZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICogZXZlbnRzLm9uKFwibXlCZXN0RXZlbnQgbXlCZXN0RXZlbnQyIG15QmVzdEV2ZW50M1wiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKiBldmVudHMub24oXCJteUJlc3RFdmVudFwiLGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSk7XG4gKi9cbkV2ZW50cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnRzLCBjYWxsYmFjaykge1xuICBjb25zdCBldmVudEFyciA9IGV2ZW50cy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykuc3BsaXQoJyAnKTtcbiAgZXZlbnRBcnIuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBldmVudCBub3QgaW5zaWRlIGFsbG93ZWQgZXZlbnRzXG4gICAgaWYgKHRoaXMuX2FsbG93ZWRFdmVudHMgJiYgdGhpcy5fYWxsb3dlZEV2ZW50cy5pbmRleE9mKGV2ZW50KSA9PT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybignRXZlbnRzLiBUcnkgdG8gcmVnaXN0ZXIgZXZlbnQgJXMsIGJ1dCBldmVudCBpcyBub3QgYWxsb3dlZCcsIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghdGhpcy5fc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShldmVudHMpKSB7XG4gICAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgfSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIEFkZCBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAqIEBkZXByZWNhdGVkICB1c2UgXCJvblwiIGluc3RlYWRcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS5yZWdpc3RlckFjdGlvbiA9IEV2ZW50cy5wcm90b3R5cGUub247XG5cblxuLyoqXG4gKiByZW1vdmUgZXZlbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuRXZlbnRzLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICBhbGVydCgnWW91IHRyeSB0byByZW1vdmUgYWN0aW9uLiBUaGlzIHBhcnQgaXMgaW5jb21wbGV0ZScpO1xuICAvLyBUT0RPXG59O1xuXG4vKipcbiAqIFRyaWdnZXIgZXZlbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgZXZlbnQgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrXG4gKiBAZXhhbXBsZVxuICogdmFyIGV2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAqIGV2ZW50cy5vbihcIm15QmVzdEV2ZW50XCIsZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZS5iZXN0S2V5KX0pO1xuICogZXZlbnRzLnRyaWdnZXIoXCJteUJlc3RFdmVudFwiLHtiZXN0S2V5OjQyfSk7IC8vd2lsbCBzaG93IGluIGxvZ1xuICovXG5FdmVudHMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQsIG9wdGlvbnMpIHtcbiAgLy8gZXZlbnQgbm90IGluc2lkZSBhbGxvd2VkIGV2ZW50c1xuICBpZiAodGhpcy5fYWxsb3dlZEV2ZW50cyAmJiB0aGlzLl9hbGxvd2VkRXZlbnRzLmluZGV4T2YoZXZlbnQpID09PSAtMSkge1xuICAgIGNvbnNvbGUud2FybignRXZlbnRzLiBUcnkgdG8gdHJpZ2dlciBldmVudCAlcywgYnV0IGV2ZW50IGlzIG5vdCBhbGxvd2VkJywgZXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmICh0aGlzLl9zdG9yYWdlLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgIGZvciAobGV0IG4gPSAwLCBsID0gdGhpcy5fc3RvcmFnZVtldmVudF0ubGVuZ3RoOyBuIDwgbDsgbiArPSAxKSB7XG4gICAgICB0aGlzLl9zdG9yYWdlW2V2ZW50XVtuXShvcHRpb25zKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUGVyZm9ybSBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYWN0aW9uUGFyYW1zXSBvYmplY3Qgd2l0aCBhbGwgYWN0aW9uIGRhdGEgZnJvbSBzZXJ2ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWpheCBvcHRpb25zXG4gKiBAZGVwcmVjYXRlZCB1c2UgXCJ0cmlnZ2VyXCIgaW5zdGVhZFxuICovXG5FdmVudHMucHJvdG90eXBlLnBlcmZvcm1BY3Rpb24gPSBFdmVudHMucHJvdG90eXBlLnRyaWdnZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovIC8vIFRPRE86ID9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIEluc3RhbmNlIGNvbnRyb2xsZXJcbiAqIEBwYXJhbSB7Kn0gc3BpcmFsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgSW5zdGFuY2VzQ29udHJvbGxlciA9IGZ1bmN0aW9uIChzcGlyYWwpIHtcbiAgdGhpcy5zcGlyYWwgPSBzcGlyYWw7XG4gIGlmICghdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2UgY2FsbCBJbnN0YW5jZXNDb250cm9sbGVyIHdpdGggbmV3ICAtICduZXcgSW5zdGFuY2VzQ29udHJvbGxlcigpJyBcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuX3N0b3JhZ2UgPSB7XG4gICAgaW5zdGFuY2VzQ29uc3RydWN0b3JzOiB7XG4gICAgICBjc3NDbGFzc2VzOiB7fSxcbiAgICAgIGpzQ29uc3RydWN0b3JzOiB7fSxcbiAgICB9LFxuICAgIGFkZG9uczoge30sXG4gICAgaW5zdGFuY2VzOiB7fSxcbiAgfTtcblxuICAvLyB0b2RvIGRlY2lkZSBpZiB3ZSBuZWVkIHRoaXNcbiAgLy8gW1wib25BZGRJbnN0YW5jZVwiLCBcIm9uUmVtb3ZlSW5zdGFuY2VcIl1cbiAgLy8gdGhpcy5ldmVudHMgPSBuZXcgc3BpcmFsLm1vZHVsZXMuY29yZS5FdmVudHMoKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgbmV3IGluc3RhbmNlIHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnN0cnVjdG9yRnVuY3Rpb24gLSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBvZiBpbnN0YW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IFtjc3NDbGFzc05hbWVdIC0gY3NzIGNsYXNzIG5hbWUgb2YgaW5zdGFuY2UuIElmIGNsYXNzIG5vdCBwcm92aWRlZCB0aGF0IGl0IGNhbid0IGJlIGF1dG9tYXRpY2FsbHlcbiAqIGNvbnRyb2xsZWQgYnkgRG9tTXV0YXRpb24uIEJ1dCB5b3Ugc3RpbGwgY2FuIHVzZSBpdCBmcm9tIEpTLlxuICogQHBhcmFtIHtCb29sZWFufSBbaXNTa2lwSW5pdGlhbGl6YXRpb249ZmFsc2VdICAtIHNraXAgY29tcG9uZW50IGluaXRpYWxpemF0aW9uLCBqdXN0IGFkZGluZywgbm8gaW5pdCBub2Rlcy5cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUucmVnaXN0ZXJJbnN0YW5jZVR5cGUgPSBmdW5jdGlvbiAoY29uc3RydWN0b3JGdW5jdGlvbiwgY3NzQ2xhc3NOYW1lLCBpc1NraXBJbml0aWFsaXphdGlvbikge1xuICBjb25zdCBpbnN0YW5jZU5hbWUgPSBjb25zdHJ1Y3RvckZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lO1xuXG4gIGlmICghaW5zdGFuY2VOYW1lKSB7XG4gICAgY29uc29sZS5lcnJvcignSW5zdGFuY2UgY29uc3RydWN0b3Igc2hvdWxkIGhhdmUgbmFtZSBpbnNpZGUgaXQnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmpzQ29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KGluc3RhbmNlTmFtZSkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSW5zdGFuY2UgQ29uc3RydWN0b3IgZm9yIHR5cGUgJyVzJyBhbHJlYWR5IGFkZGVkLiBTa2lwcGluZ1wiLCBpbnN0YW5jZU5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjc3NDbGFzc05hbWUpIHsgLy8gYWRkIGxpbmsgKGNzc0NsYXNzTmFtZS0+aW5zdGFuY2VOYW1lKVxuICAgIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmNzc0NsYXNzZXNbY3NzQ2xhc3NOYW1lXSA9IGluc3RhbmNlTmFtZTtcbiAgfVxuXG4gIHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzQ29uc3RydWN0b3JzLmpzQ29uc3RydWN0b3JzW2luc3RhbmNlTmFtZV0gPSBjb25zdHJ1Y3RvckZ1bmN0aW9uO1xuXG4gIC8vIGlmICh0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc05hbWUpKXtcbiAgLy8gICAgY29uc29sZS5lcnJvcihcIkluc3RhbmNlIENvbnN0cnVjdG9yIGZvciB0eXBlICVzIGFscmVhZHkgYWRkZWQuIFNraXBwaW5nXCIsY29uc3RydWN0b3JGdW5jdGlvbi5wcm90b3R5cGUubmFtZSk7XG4gIC8vICAgIHJldHVybjtcbiAgLy8gfVxuICAvLyB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9yc1tjbGFzc05hbWVdID0gey8vaW5pdCBzdG9yYWdlIGZpZWxkc1xuICAvLyAgICBcInR5cGVOYW1lXCI6IGNvbnN0cnVjdG9yRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUsXG4gIC8vICAgIFwiY29uc3RydWN0b3JcIjogY29uc3RydWN0b3JGdW5jdGlvblxuICAvLyB9O1xuICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdID0gW107XG4gIGlmICghaXNTa2lwSW5pdGlhbGl6YXRpb24pIHtcbiAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY3NzQ2xhc3NOYW1lKTsvLyBpbml0IGFkZCBub2RlcyB3aXRoIHRoaXMgY2xhc3NcbiAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbm9kZXMubGVuZ3RoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgIHRoaXMuYWRkSW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2Rlc1tpXSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIE9sZCBtZXRob2QgdG8gcmVnaXN0ZXIgaW5zdGFuY2UgdHlwZVxuICogQHBhcmFtIHsqfSBjbGFzc05hbWVcbiAqIEBwYXJhbSB7Kn0gY29uc3RydWN0b3JGdW5jdGlvblxuICogQHBhcmFtIHsqfSBpc1NraXBJbml0aWFsaXphdGlvblxuICogQHJldHVybiB7Kn1cbiAqIEBkZXByZWNhdGVkXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmFkZEluc3RhbmNlVHlwZSA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIGNvbnN0cnVjdG9yRnVuY3Rpb24sIGlzU2tpcEluaXRpYWxpemF0aW9uKSB7XG4gIGNvbnNvbGUud2FybignYWRkSW5zdGFuY2VUeXBlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgcmVnaXN0ZXJJbnN0YW5jZVR5cGUgaW5zdGVhZCcpO1xuICByZXR1cm4gdGhpcy5yZWdpc3Rlckluc3RhbmNlVHlwZShjb25zdHJ1Y3RvckZ1bmN0aW9uLCBpc1NraXBJbml0aWFsaXphdGlvbik7XG59O1xuXG5cbi8qKlxuICogQWRkIGluc3RhbmNlXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgLSBkb20gbm9kZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyBmb3Igc2VuZCB0byB0aGUgY29uc3RydWN0b3JcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmFkZEluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSwgbm9kZSwgb3B0aW9ucykge1xuICBjb25zdCBJbnN0YW5jZUNvbnN0cnVjdG9yID0gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuanNDb25zdHJ1Y3RvcnNbaW5zdGFuY2VOYW1lXTtcbiAgY29uc3QgaXNBbHJlYWR5QWRkZWQgPSB0aGlzLmdldEluc3RhbmNlKGluc3RhbmNlTmFtZSwgbm9kZSk7XG5cbiAgaWYgKCFJbnN0YW5jZUNvbnN0cnVjdG9yIHx8IGlzQWxyZWFkeUFkZGVkKSB7IC8vIGlmIG5vdCBmb3VuZCB0aGlzIHR5cGUgIG9yIGFscmVhZHkgYWRkZWQgLSByZXR1cm5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbnN0YW5jZUNvbnN0cnVjdG9yKHRoaXMuc3BpcmFsLCBub2RlLCBvcHRpb25zKTtcbiAgdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXS5wdXNoKHsgLy8gYWRkIG5ldyBpbnN0YW5jZSBvZiB0aGlzIHR5cGVcbiAgICBub2RlLFxuICAgIGluc3RhbmNlLFxuICB9KTtcblxuICAvLyB0aGlzLmV2ZW50cy50cmlnZ2VyKFwib25BZGRJbnN0YW5jZVwiLCBpbnN0YW5jZSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZSBjbGFzc1xuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBub2RlIC0gZG9tIG5vZGUgSURcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSwgbm9kZSkge1xuICBjb25zdCBpbnN0YW5jZU9iaiA9IHRoaXMuZ2V0SW5zdGFuY2UoaW5zdGFuY2VOYW1lLCBub2RlLCB0cnVlKTtcblxuICBpZiAoIWluc3RhbmNlT2JqKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGluc3RhbmNlT2JqLmluc3RhbmNlLmRpZSgpOy8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGNvbnN0IGtleSA9IHRoaXMuX3N0b3JhZ2UuaW5zdGFuY2VzW2luc3RhbmNlTmFtZV0uaW5kZXhPZihpbnN0YW5jZU9iaik7XG4gIGlmIChrZXkgIT09IC0xKSB7IC8vIHJlbW92ZSBrZXlcbiAgICB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdLnNwbGljZShrZXksIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgaW5zdGFuY2UuIFJldHVybiBpbnN0YW5jZSBvYmplY3Qgb2YgdGhpcyBkb20gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSAtIG5hbWUgb2YgaW5zdGFuY2VcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbm9kZSAtIGRvbSBub2RlIG8gZG9tZSBub2RlIElEXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1JldHVybk9iamVjdF0gLSByZXR1cm4gb2JqZWN0IG9yIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIChpbnN0YW5jZU5hbWUsIG5vZGUsIGlzUmV0dXJuT2JqZWN0KSB7XG4gIC8vIFRPRE8gaXNSZXR1cm5PYmplY3Qgbm90IG5lZWRlZC4gUmVmYWN0b3IgYW5kIHJlbW92ZVxuXG4gIGNvbnN0IHR5cGVBcnIgPSB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc1tpbnN0YW5jZU5hbWVdO1xuICBsZXQgcmV0ID0gZmFsc2U7XG4gIGlmICghdHlwZUFycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBub2RlID0gKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgPyBub2RlIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobm9kZSk7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBrZXkgPSAwLCBsID0gdHlwZUFyci5sZW5ndGg7IGtleSA8IGw7IGtleSArPSAxKSB7IC8vIGl0ZXJhdGUgc3RvcmFnZSBhbmQgdHJ5IHRvIGZpbmQgaW5zdGFuY2VcbiAgICBpZiAodHlwZUFycltrZXldLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgIHJldCA9IChpc1JldHVybk9iamVjdCkgPyB0eXBlQXJyW2tleV0gOiB0eXBlQXJyW2tleV0uaW5zdGFuY2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbi8qKlxuICogR2V0IGluc3RhbmNlcy4gUmV0dXJuIGFycmF5IG9mIGluc3RhbmNlcyBvYmplY3RzXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIC0gbmFtZSBvZiBpbnN0YW5jZVxuICogQHJldHVybiB7YXJyYXl8Ym9vbGVhbn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2VzID0gZnVuY3Rpb24gKGluc3RhbmNlTmFtZSkge1xuICByZXR1cm4gdGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNbaW5zdGFuY2VOYW1lXSB8fCBmYWxzZTtcbn07XG5cblxuLyoqXG4gKiBSZWdpc3RlciBhZGRvbiBmb3IgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhZGRvblxuICogQHBhcmFtIHtTdHJpbmd9IGluc3RhbmNlTmFtZSBuYW1lIG9mIGluc3RhbmNlIHRvIHJlZ2lzdGVyIGFkZG9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkb25UeXBlIHR5cGUgb2YgYWRkb24gKG1lc3NhZ2UsZmlsbCxldGMpXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkb25OYW1lIG5hbWUgb2YgYWRkb24gKHNwaXJhbCwgYm9vdHN0cmFwLGV0YylcbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUucmVnaXN0ZXJBZGRvbiA9IGZ1bmN0aW9uIChhZGRvbiwgaW5zdGFuY2VOYW1lLCBhZGRvblR5cGUsIGFkZG9uTmFtZSkge1xuICBpZiAoIXRoaXMuX3N0b3JhZ2UuYWRkb25zLmhhc093blByb3BlcnR5KGluc3RhbmNlTmFtZSkpIHtcbiAgICB0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdID0ge307XG4gIH1cbiAgaWYgKCF0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdLmhhc093blByb3BlcnR5KGFkZG9uVHlwZSkpIHtcbiAgICB0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV0gPSB7fTtcbiAgfVxuICBpZiAodGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdLmhhc093blByb3BlcnR5KGFkZG9uTmFtZSkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgJXMgYWRkb24gdHlwZSAlcyBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIGluc3RhbmNlICVzISBTa2lwcGluZyByZWdpc3RyYXRpb24uJywgYWRkb25OYW1lLCBhZGRvblR5cGUsIGluc3RhbmNlTmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuX3N0b3JhZ2UuYWRkb25zW2luc3RhbmNlTmFtZV1bYWRkb25UeXBlXVthZGRvbk5hbWVdID0gYWRkb247XG59O1xuXG4vKipcbiAqIEdldCByZWdpc3RlcmVkIGFkZG9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5zdGFuY2VOYW1lIG5hbWUgb2YgaW5zdGFuY2UgdG8gcmVnaXN0ZXIgYWRkb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRvblR5cGUgdHlwZSBvZiBhZGRvbiAobWVzc2FnZSxmaWxsLGV0YylcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRvbk5hbWUgbmFtZSBvZiBhZGRvbiAoc3BpcmFsLCBib290c3RyYXAsZXRjKVxuICogQHJldHVybiB7Kn1cbiAqL1xuSW5zdGFuY2VzQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0SW5zdGFuY2VBZGRvbiA9IGZ1bmN0aW9uIChpbnN0YW5jZU5hbWUsIGFkZG9uVHlwZSwgYWRkb25OYW1lKSB7XG4gIGlmICghdGhpcy5fc3RvcmFnZS5hZGRvbnMuaGFzT3duUHJvcGVydHkoaW5zdGFuY2VOYW1lKVxuICAgICAgICB8fCAhdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXS5oYXNPd25Qcm9wZXJ0eShhZGRvblR5cGUpXG4gICAgICAgIHx8ICF0aGlzLl9zdG9yYWdlLmFkZG9uc1tpbnN0YW5jZU5hbWVdW2FkZG9uVHlwZV0uaGFzT3duUHJvcGVydHkoYWRkb25OYW1lKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdGhpcy5fc3RvcmFnZS5hZGRvbnNbaW5zdGFuY2VOYW1lXVthZGRvblR5cGVdW2FkZG9uTmFtZV07XG59O1xuXG5cbi8qKlxuICogR2V0IGFsbCByZWdpc3RlcmVkIGNsYXNzZXNcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fc3RvcmFnZS5pbnN0YW5jZXNDb25zdHJ1Y3RvcnMuY3NzQ2xhc3Nlcyk7XG59O1xuXG4vKipcbiAqIEZvciBnaXZlbiBjc3NDbGFzcyByZXR1cm4gbmFtZSBvZiBpbnN0YW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzXG4gKiBAcmV0dXJuIHsqfVxuICovXG5JbnN0YW5jZXNDb250cm9sbGVyLnByb3RvdHlwZS5nZXRJbnN0YW5jZU5hbWVCeUNzc0NsYXNzID0gZnVuY3Rpb24gKGNzc0NsYXNzKSB7XG4gIHJldHVybiB0aGlzLl9zdG9yYWdlLmluc3RhbmNlc0NvbnN0cnVjdG9ycy5jc3NDbGFzc2VzW2Nzc0NsYXNzXTtcbn07XG5cbi8qKlxuICogR2V0IGNvbnN0cnVjdG9yIGJ5IG5hbWUgb3IgY2xhc3MgbmFtZVxuICogQHBhcmFtIHsqfSBuYW1lXG4gKi9cbkluc3RhbmNlc0NvbnRyb2xsZXIucHJvdG90eXBlLmdldEluc3RhbmNlQ29uc3RydWN0b3JzID0gZnVuY3Rpb24gKCkge1xuICAvLyBUT0RPXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluc3RhbmNlc0NvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qKlxuICogVGhpcyBwbHVnaW4gYWRkcyBhYmlsaXR5IHRvIHBlcmZvcm0gYWN0aW9ucyBmcm9tIHRoZSBzZXJ2ZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIFwiYWN0aW9uXCI6XCJyZWxvYWRcIlxuICogXCJhY3Rpb25cIjp7XCJyZWRpcmVjdFwiOlwiL2FjY291bnRcIn1cbiAqIFwiYWN0aW9uXCI6e1wicmVkaXJlY3RcIjpcIi9hY2NvdW50XCIsXCJkZWxheVwiOjMwMDB9XG4gKiBcImFjdGlvblwiOntcIm5hbWVcIjpcInJlZGlyZWN0XCIsXCJ1cmxcIjpcIi9hY2NvdW50XCIsXCJkZWxheVwiOjMwMDB9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNmKSB7XG4gIHNmLmFqYXguZXZlbnRzLm9uKCdsb2FkJywgKG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBvcHRpb25zO1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmRhdGEpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG4gICAgaWYgKCFkYXRhLmFjdGlvbikgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhLmFjdGlvbiA9PT0gJ3N0cmluZycpIHsgLy8gXCJhY3Rpb25cIjpcInJlbG9hZFwiXG4gICAgICBzZi5ldmVudHMudHJpZ2dlcihkYXRhLmFjdGlvbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5hY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YS5hY3Rpb24pO1xuICAgICAgLy8gVE9ETzogbm90aWZpY2F0aW9uc1xuICAgICAgLy8gaWYgKGtleXMuaW5kZXhPZignZmxhc2gnKSAhPT0gLTEpIHtcbiAgICAgIC8vICAgY29uc3QgeyBmbGFzaCB9ID0gZGF0YS5hY3Rpb247XG4gICAgICAvLyAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAvLyAgIGxldCBzZkZsYXNoTWVzc2FnZSA9IHt9O1xuXG4gICAgICAvLyAgIGlmICh0eXBlb2YgZGF0YS5hY3Rpb24uZmxhc2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UgPSBmbGFzaDtcbiAgICAgIC8vICAgICBzZkZsYXNoTWVzc2FnZS50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgc2ZGbGFzaE1lc3NhZ2UgPSB7XG4gICAgICAvLyAgICAgICBtZXNzYWdlOiBmbGFzaCxcbiAgICAgIC8vICAgICAgIHRpbWVzdGFtcCxcbiAgICAgIC8vICAgICB9O1xuICAgICAgLy8gICB9XG5cbiAgICAgIC8vICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2ZGbGFzaE1lc3NhZ2UnLCBKU09OLnN0cmluZ2lmeShzZkZsYXNoTWVzc2FnZSkpO1xuICAgICAgLy8gfVxuXG4gICAgICBpZiAoa2V5cy5pbmRleE9mKCdyZWRpcmVjdCcpICE9PSAtMSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZi5ldmVudHMudHJpZ2dlcigncmVkaXJlY3QnLCBkYXRhLmFjdGlvbi5yZWRpcmVjdCwgb3B0aW9ucyk7XG4gICAgICAgIH0sICtkYXRhLmFjdGlvbi5kZWxheSB8fCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5cy5pbmRleE9mKCduYW1lJykgIT09IC0xKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNmLmV2ZW50cy50cmlnZ2VyKGRhdGEuYWN0aW9uLm5hbWUsIGRhdGEuYWN0aW9uLnVybCk7XG4gICAgICAgIH0sICtkYXRhLmFjdGlvbi5kZWxheSB8fCAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignQWN0aW9uIGZyb20gc2VydmVyLiBTb21ldGhpbmcgd3JvbmcuICcsIGRhdGEuYWN0aW9uKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIChmdW5jdGlvbiAoc2ZGbGFzaE1lc3NhZ2UpIHtcbiAgLy8gICBpZiAoIXNmRmxhc2hNZXNzYWdlKSByZXR1cm47XG5cbiAgLy8gICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShzZkZsYXNoTWVzc2FnZSk7XG4gIC8vICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgLy8gICBsZXQgZmxhc2hDbGFzcztcblxuICAvLyAgIGlmICh0aW1lc3RhbXAgLSBtZXNzYWdlLnRpbWVzdGFtcCA+IDEwMDAwKSByZXR1cm47XG5cbiAgLy8gICBpZiAobWVzc2FnZS50eXBlID09PSAnZGVidWcnIHx8IG1lc3NhZ2UudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gIC8vICAgICBmbGFzaENsYXNzID0gJ2RlYnVnJztcbiAgLy8gICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2luZm8nIHx8ICFtZXNzYWdlLnR5cGUgfHwgbWVzc2FnZS50eXBlID09PSAnbm90aWNlJykge1xuICAvLyAgICAgZmxhc2hDbGFzcyA9ICdpbmZvJztcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgZmxhc2hDbGFzcyA9ICdkYW5nZXInO1xuICAvLyAgIH1cblxuICAvLyAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gICBjb25zdCBub2RlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIG5vZGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoLXdyYXBwZXInKTtcbiAgLy8gICBub2RlLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoJywgZmxhc2hDbGFzcyk7XG4gIC8vICAgbm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub2RlV3JhcHBlcik7XG4gIC8vICAgbm9kZVdyYXBwZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgLy8gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIG5vZGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgLy8gICB9LCAxKTtcblxuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgbm9kZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAvLyAgIH0sIG1lc3NhZ2UudGltZW91dCB8fCA1MDAwKTtcblxuICAvLyAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3NmRmxhc2hNZXNzYWdlJyk7XG4gIC8vIH0oc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2ZGbGFzaE1lc3NhZ2UnKSkpO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhc2VFdmVudHMoZXZlbnRzKSB7XG4gIGV2ZW50cy5vbigncmVkaXJlY3QnLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB1cmwgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXZlbnQpID09PSAnW29iamVjdCBTdHJpbmddJyA/IGV2ZW50IDogZXZlbnQudXJsO1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA2ODcwOTkvaG93LXRvLXRlc3QtaWYtYS11cmwtc3RyaW5nLWlzLWFic29sdXRlLW9yLXJlbGF0aXZlXG4gICAgY29uc3QgaXNBYnNvbHV0ZSA9IC9eKD86W2Etel0rOik/XFwvXFwvL2kudGVzdCh1cmwpO1xuICAgIGlmIChpc0Fic29sdXRlKSB7XG4gICAgICBzZWxmLmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgICAgICB8fCAoYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9JHt3aW5kb3cubG9jYXRpb24ucG9ydCA/IGA6JHt3aW5kb3cubG9jYXRpb24ucG9ydH1gIDogJyd9YCk7XG4gICAgICBzZWxmLmxvY2F0aW9uLmhyZWYgPSBvcmlnaW4gKyAoKHVybC5jaGFyQXQoMCkgPT09ICcvJykgPyB1cmwgOiAoYC8ke3VybH1gKSk7IC8vIFJlbGF0aXZlIHBhdGhcbiAgICB9XG4gIH0pO1xuXG4gIGV2ZW50cy5vbigncmVsb2FkJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbiAgZXZlbnRzLm9uKCdyZWZyZXNoJywgKCkgPT4ge1xuICAgIGV2ZW50cy50cmlnZ2VyKCdyZWxvYWQnKTtcbiAgfSk7XG5cbiAgZXZlbnRzLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICBzZWxmLmNsb3NlKCk7XG4gIH0pO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKipcbiAqIEhlbHBlciB0byBtYW5pcHVsYXRlIERPTSBFdmVudHMuIEl0J3MgYSBzaW1wbGUgd3JhcHBlciBhcm91bmQgXCJhZGRFdmVudExpc3RlbmVyXCIgYnV0IGl0J3Mgc3RvcmUgYWxsIGZ1bmN0aW9ucyBhbmQgYWxsb3cgdXMgdG8gcmVtb3ZlIGl0IGFsbC5cbiAqIEl0J3MgdmVyeSBoZWxwZnVsIGZvciBkaWUoKSBtZXRob2Qgb2YgaW5zdGFuY2VzXG4gKiBAVE9ETyBhZGQgdG8gbWFueSBub2Rlc1xuICogQFRPRE8gbmV3IG1ldGhvZCBsaWtlIGFkZEV2ZW50TGlzdGVuZXIgIERPTUV2ZW50cy5vbihub2RlKHMpLGV2ZW50LGNhbGxiYWNrLHVzZUNhcHR1cmUpO1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IERPTUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAgICogSW50ZXJuYWwgc3RvcmFnZSBmb3IgZXZlbnRzXG4gICAgICogQHByb3BlcnR5IHtBcnJheS48T2JqZWN0Pn0gRE9NRXZlbnRzIC0gZG9tIGV2ZW50cyBhcnJheVxuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBET01FdmVudHMuRE9NTm9kZSAtICAgRE9NIG5vZGVcbiAgICAgKiBAcHJvcGVydHkge1N0cmluZ30gRE9NRXZlbnRzLmV2ZW50VHlwZSAtICAgRXZlbnQgdHlwZVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IERPTUV2ZW50cy5ldmVudEZ1bmN0aW9uIC0gICBGdW5jdGlvblxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gRE9NRXZlbnRzLnVzZUNhcHR1cmU9ZmFsc2UgLSAgIHVzZUNhcHR1cmVcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gLi4uIC0gICBhbm90aGVyIG9iamVjdFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gIHRoaXMuX0RPTUV2ZW50c1N0b3JhZ2UgPSBbXTtcbn07XG4vKipcbiAqIEFkZCBldmVudChzKSB0byBub2RlKHMpLlxuICogQFRPRE8gYWRkIHRvIG1hbnkgbm9kZXNcbiAqIEBwYXJhbSB7QXJyYXkuPE9iamVjdD58T2JqZWN0fSBldmVudEFycmF5IC0gZXZlbnQgYXJyYXkgb3IgZXZlbnQgaXRzZWxmXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRBcnJheS5ET01Ob2RlIC0gICBET00gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50QXJyYXkuZXZlbnRUeXBlIC0gICBFdmVudCB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBldmVudEFycmF5LmV2ZW50RnVuY3Rpb24gLSAgIEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtldmVudEFycmF5LnVzZUNhcHR1cmU9ZmFsc2VdIC0gICB1c2VDYXB0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIERPTUV2ZW50c0luc3RhbmNlID0gbmV3IERPTUV2ZW50cygpO1xuICogdmFyIGV2ZW50T25lID0ge1xuICogICAgICBET01Ob2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIiksXG4gKiAgICAgIGV2ZW50VHlwZTogXCJjbGlja1wiLFxuICogICAgICBldmVudEZ1bmN0aW9uOiBmdW5jdGlvbiAoZSkge1xuICogICAgICAgICAgY29uc29sZS5sb2coXCJIaSB0aGVyZS4gTmF0aXZlICBET00gZXZlbnRzIGlzOlwiLGUpO1xuICogICAgICB9XG4gKiB9XG4gKiAgdmFyIGV2ZW50VHdvID0ge1xuICogICAgICBET01Ob2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGUyXCIpLFxuICogICAgICBldmVudFR5cGU6IFwibW91c2Vkb3duXCIsXG4gKiAgICAgIGV2ZW50RnVuY3Rpb246IGZ1bmN0aW9uIChlKSB7XG4gKiAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpIHRoZXJlLiBtb3VzZWRvd24gZXZlbnQuIE5hdGl2ZSAgRE9NIGV2ZW50cyBpczpcIixlKTtcbiAqICAgICAgfVxuICogfVxuICogIERPTUV2ZW50c0luc3RhbmNlLmFkZChbZXZlbnRPbmUsZXZlbnRUd29dKTtcbiAqL1xuRE9NRXZlbnRzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZXZlbnRBcnJheSkge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFtdKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIGV2ZW50QXJyYXkgPSBbZXZlbnRBcnJheV07XG4gIH1cbiAgZXZlbnRBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YWwudXNlQ2FwdHVyZSA9ICEhKHZhbC51c2VDYXB0dXJlKTtcbiAgICB2YWwuRE9NTm9kZS5hZGRFdmVudExpc3RlbmVyKHZhbC5ldmVudFR5cGUsIHZhbC5ldmVudEZ1bmN0aW9uLCB2YWwudXNlQ2FwdHVyZSk7XG4gICAgdGhpcy5fRE9NRXZlbnRzU3RvcmFnZS5wdXNoKHZhbCk7XG4gIH0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgZXZlbnRzXG4gKiBAcGFyYW0ge0FycmF5LjxPYmplY3Q+fSBldmVudEFycmF5IC0gZXZlbnQgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudEFycmF5LkRPTU5vZGUgLSAgIERPTSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRBcnJheS5ldmVudFR5cGUgLSAgIEV2ZW50IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV2ZW50QXJyYXkuZXZlbnRGdW5jdGlvbiAtICAgRnVuY3Rpb25cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2V2ZW50QXJyYXkudXNlQ2FwdHVyZT1mYWxzZV0gLSAgIHVzZUNhcHR1cmVcbiAqL1xuRE9NRXZlbnRzLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoLyogZXZlbnRBcnJheSAqLykge1xuICAvLyBUT0RPIElNUExFTUVOVFxuICAvLyBUT0RPINC90LUg0YPQstC10YDQtdC9INGH0YLQviDRjdGC0L7RgiDQvNC10YLQvtC0INC90LXQvtCx0YXQvtC00LjQvC4g0LXRgdC70Lgg0L3QsNC00L4g0YfQsNGB0YLQviDRg9Cx0LjRgNCw0YLRjCDQutCw0LrQuNC10YLQviDQvtCx0YDQsNCx0L7RgtGH0LjQutC4LCDRgtC+INC70YPRh9GI0LUg0L/QvtGB0YLQsNCy0LjRgtGMINC+0LHRgNCw0LHQvtGC0YfQutC4INC90LAg0YDQvtC00LjRgtC10LvRj1xuICBjb25zb2xlLndhcm4oJ1RPRE8gSU1QTEVNRU5UJyk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgZG9tIGV2ZW50cyByZWdpc3RlcmVkIHdpdGggdGhpcyBpbnN0YW5jZSAoYWRkZWQgYnkgbWV0aG9kIGFkZClcbiAqIEBleGFtcGxlXG4gKiAvL2xvb2sgYXQgYWRkIG1ldGhvZCBhcyBmaXJzdCBwYXJ0IG9mIHRoaXMgY29kZVxuICogRE9NRXZlbnRzSW5zdGFuY2UucmVtb3ZlQWxsKCk7XG4gKi9cbkRPTUV2ZW50cy5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9ET01FdmVudHNTdG9yYWdlLmZvckVhY2goKHZhbCkgPT4ge1xuICAgIHZhbC5ET01Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodmFsLmV2ZW50VHlwZSwgdmFsLmV2ZW50RnVuY3Rpb24sIHZhbC51c2VDYXB0dXJlKTtcbiAgfSk7XG4gIHRoaXMuX0RPTUV2ZW50c1N0b3JhZ2UgPSBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NRXZlbnRzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qKlxuIFRoaXMgaXMgYSBjb2xsZWN0aW9uIG9mIHVzZWZ1bCBET00gdG9vbHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAgICogRm91bmQgZmlyc3QgcGFyZW50IG5vZGUgd2l0aCBtYXRjaGVkIHNlbGVjdG9yKHMpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBkb20gbm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBzZWxlY3RvcnMgLSBzZWxlY3RvciBvciBhcnJheSBvZiBzZWxlY3RvcnNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fCBCb29sZWFufSAtIG5vZGUgb3IgZmFsc2VcbiAgICAgKi9cblxuICBjbG9zZXN0KGVsZW0sIHNlbGVjdG9ycykge1xuICAgIHNlbGVjdG9ycyA9ICh0eXBlb2Ygc2VsZWN0b3JzID09PSAnc3RyaW5nJykgPyBbc2VsZWN0b3JzXSA6IHNlbGVjdG9ycztcbiAgICBsZXQga2V5O1xuICAgIGNvbnN0IGwgPSBzZWxlY3RvcnMubGVuZ3RoO1xuICAgIGNvbnN0IG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgd2hpbGUgKGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGw7IGtleSArPSAxKSB7XG4gICAgICAgIGlmIChtYXRjaGVzU2VsZWN0b3IuY2FsbChlbGVtLCBzZWxlY3RvcnNba2V5XSkpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICAvKipcbiAgICAgKiBGb3VuZCBmaXJzdCBwYXJlbnQgbm9kZSB3aXRoIG1hdGNoZWQgY2xhc3NOYW1lKHMpLlxuICAgICAqIFRPRE8gV2h5IHRoaXM/IEJlY2F1c2Ugb2xkIElFLi4uLlxuICAgICAqIFRPRE8gSXQncyBub3QgZ29vZCwgYmVjYXVzZSBpdCdzIGEgY29weSBvZiBjbG9zZXN0IEBzZWUgY2xvc2VzdC4gUmVmYWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIGRvbSBub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGNsYXNzTmFtZSAtIGNsYXNzTmFtZSBvciBhcnJheSBvZiBjbGFzc05hbWVzXG4gICAgICogQHJldHVybnMge09iamVjdHwgQm9vbGVhbn0gLSBub2RlIG9yIGZhbHNlXG4gICAgICovXG5cbiAgY2xvc2VzdEJ5Q2xhc3NOYW1lKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGNsYXNzTmFtZSA9ICh0eXBlb2YgY2xhc3NOYW1lID09PSAnc3RyaW5nJykgPyBbY2xhc3NOYW1lXSA6IGNsYXNzTmFtZTtcbiAgICBsZXQga2V5O1xuICAgIGNvbnN0IGwgPSBjbGFzc05hbWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGtleSA9IDA7IGtleSA8IGw7IGtleSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYChcXFxcc3xeKSR7Y2xhc3NOYW1lW2tleV19KFxcXFxzfCQpYCk7XG4gICAgICAgIGlmIChlbGVtLmNsYXNzTmFtZS5tYXRjaChyZWcpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxuLyoqXG4gKiBAbW9kdWxlIHRvb2xzXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmNvbnN0IHRvb2xzID0ge1xuICByZXNvbHZlS2V5UGF0aChwYXRoLCBvYmosIHNhZmUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgocHJldiwgY3VycikgPT4gKCFzYWZlID8gcHJldltjdXJyXSA6IChwcmV2ID8gcHJldltjdXJyXSA6IHVuZGVmaW5lZCkpLCBvYmogfHwgc2VsZik7XG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvb2xzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgc3BpcmFsLXNwZWNpZmljIHNmIGJ1bmRsZVxuICogVE9ETzogVGhpcyB3cmFwcGluZyBsb29rcyB2ZXJ5IGZpc2h5LCB3aHkgd2UgbmVlZCBpdD8gTW92ZSB0byB0b29sa2l0IG1heSBiZT9cbiAqL1xuY29uc3Qgc2YgPSByZXF1aXJlKCcuL3NmJyk7XG5cbmNvbnN0IHNmV3JhcHBlciA9IHtcbiAgY29yZTogc2YuY29yZSxcbiAgaGVscGVyczogc2YuaGVscGVycyxcbiAgdG9vbHM6IHNmLnRvb2xzLFxufTtcblxuLy8gQWRkIGNvbnNvbGUgc2hpbSBmb3Igb2xkIElFXG5yZXF1aXJlKCcuL3NoaW0vY29uc29sZScpO1xucmVxdWlyZSgnLi9zaGltL09iamVjdC5hc3NpZ24nKTtcblxuLy8gaWYgKHR5cGVvZiBQcm9taXNlICE9PSAnZnVuY3Rpb24nKSB7XG4vLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gICBjb25zdCB7IFByb21pc2UgfSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJyk7XG4vLyB9XG5cbmlmICghc2ZXcmFwcGVyLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHNmV3JhcHBlci5vcHRpb25zID0geyBpbnN0YW5jZXM6IHt9IH07XG5pZiAoIXNmV3JhcHBlci5vcHRpb25zLmhhc093blByb3BlcnR5KCdpbnN0YW5jZXMnKSkgc2ZXcmFwcGVyLm9wdGlvbnMuaW5zdGFuY2VzID0ge307XG5cbi8vIFRPRE8gZGVsZXRlIHRoaXMgaW4gZnV0dXJlXG5pZiAod2luZG93ICYmICF3aW5kb3cuaGFzT3duUHJvcGVydHkoJ3NmJykpIHsgLy8gYmluZCBvbmx5IGlmICB3aW5kb3cuc2YgaXMgZW1wdHkgdG8gYXZvaWQgY29uZmxpY3RzIHdpdGggb3RoZXIgbGlic1xuICB3aW5kb3cuc2YgPSBzZldyYXBwZXI7XG59XG5cbnNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyID0gbmV3IHNmV3JhcHBlci5jb3JlLkluc3RhbmNlc0NvbnRyb2xsZXIoc2ZXcmFwcGVyKTtcbnNmV3JhcHBlci5kb21NdXRhdGlvbiA9IG5ldyBzZldyYXBwZXIuY29yZS5Eb21NdXRhdGlvbnMoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuXG4vLyBFdmVudHMgc3lzdGVtXG5zZldyYXBwZXIuZXZlbnRzID0gbmV3IHNmV3JhcHBlci5jb3JlLkV2ZW50cygpO1xucmVxdWlyZSgnLi9jb3JlL2V2ZW50cy9iYXNlRXZlbnRzLmpzJykoc2ZXcmFwcGVyLmV2ZW50cyk7XG5cbi8vIEFKQVhcbnNmV3JhcHBlci5hamF4ID0gbmV3IHNmV3JhcHBlci5jb3JlLkFqYXgod2luZG93ICYmIHdpbmRvdy5jc3JmVG9rZW4gPyB7XG4gIC8vIFRPRE8gbW92ZSB0byBzcGlyYWwgYmluZGluZ3NcbiAgaGVhZGVyczoge1xuICAgICdYLUNTUkYtVG9rZW4nOiB3aW5kb3cuY3NyZlRva2VuLFxuICB9LFxufSA6IG51bGwpO1xuXG4vLyBBQ1RJT05TXG5yZXF1aXJlKCcuL2NvcmUvYWpheC9iYXNlQWN0aW9ucy5qcycpKHNmV3JhcHBlcik7XG5cbi8vIEFQSVxuc2ZXcmFwcGVyLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoc2ZXcmFwcGVyLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG59O1xuXG5zZldyYXBwZXIucmVnaXN0ZXJJbnN0YW5jZVR5cGUgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5yZWdpc3Rlckluc3RhbmNlVHlwZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcbnNmV3JhcHBlci5hZGRJbnN0YW5jZSA9IHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyLmFkZEluc3RhbmNlLmJpbmQoc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIpO1xuc2ZXcmFwcGVyLnJlbW92ZUluc3RhbmNlID0gc2ZXcmFwcGVyLmluc3RhbmNlc0NvbnRyb2xsZXIucmVtb3ZlSW5zdGFuY2UuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5zZldyYXBwZXIuZ2V0SW5zdGFuY2UgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZS5iaW5kKHNmV3JhcHBlci5pbnN0YW5jZXNDb250cm9sbGVyKTtcbnNmV3JhcHBlci5nZXRJbnN0YW5jZXMgPSBzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlci5nZXRJbnN0YW5jZXMuYmluZChzZldyYXBwZXIuaW5zdGFuY2VzQ29udHJvbGxlcik7XG5cbnNmV3JhcHBlci5jbG9zZXN0ID0gc2YuaGVscGVycy5kb21Ub29scy5jbG9zZXN0O1xuc2ZXcmFwcGVyLnJlc29sdmVLZXlQYXRoID0gc2YudG9vbHMucmVzb2x2ZUtleVBhdGg7XG5cbm1vZHVsZS5leHBvcnRzID0gc2ZXcmFwcGVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cblxuY29uc3QgY29yZSA9IHtcbiAgQWpheDogcmVxdWlyZSgnLi9jb3JlL0FqYXgnKSxcbiAgQmFzZURPTUNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NvcmUvQmFzZURPTUNvbnN0cnVjdG9yJyksXG4gIERvbU11dGF0aW9uczogcmVxdWlyZSgnLi9jb3JlL0RvbU11dGF0aW9ucycpLFxuICBFdmVudHM6IHJlcXVpcmUoJy4vY29yZS9FdmVudHMnKSxcbiAgSW5zdGFuY2VzQ29udHJvbGxlcjogcmVxdWlyZSgnLi9jb3JlL0luc3RhbmNlc0NvbnRyb2xsZXInKSxcbn07XG5cbmNvbnN0IGhlbHBlcnMgPSB7XG4gIERPTUV2ZW50czogcmVxdWlyZSgnLi9oZWxwZXJzL0RPTUV2ZW50cycpLFxuICBkb21Ub29sczogcmVxdWlyZSgnLi9oZWxwZXJzL2RvbVRvb2xzJyksXG4gIC8vIExpa2VGb3JtRGF0YTogcmVxdWlyZSgnLi9oZWxwZXJzL0xpa2VGb3JtRGF0YScpLFxuICAvLyB0b29sczogcmVxdWlyZSgnLi9oZWxwZXJzL3Rvb2xzJyksXG59O1xuXG5jb25zdCBzZiA9IHtcbiAgY29yZSxcbiAgaGVscGVycyxcbiAgdG9vbHM6IHJlcXVpcmUoJy4vaGVscGVycy90b29scycpLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qKlxuICogT2JqZWN0LmFzc2lnbiBwb2x5ZmlsbFxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnblxuICovXG5pZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT09ICdmdW5jdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkIHx8IHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBzb3VyY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBmb3IgKGNvbnN0IG5leHRLZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKChuZXh0S2V5KSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgIG91dHB1dFtuZXh0S2V5XSA9IHNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuICB9KCkpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuLyoqXG4gKiBBdm9pZCBgY29uc29sZWAgZXJyb3JzIGluIGJyb3dzZXJzIHRoYXQgbGFjayBhIGNvbnNvbGUuXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIGxldCBtZXRob2Q7XG4gIGNvbnN0IG5vb3AgPSBmdW5jdGlvbiAoKSB7XG4gIH07XG4gIGNvbnN0IG1ldGhvZHMgPSBbXG4gICAgJ2Fzc2VydCcsICdjbGVhcicsICdjb3VudCcsICdkZWJ1ZycsICdkaXInLCAnZGlyeG1sJywgJ2Vycm9yJyxcbiAgICAnZXhjZXB0aW9uJywgJ2dyb3VwJywgJ2dyb3VwQ29sbGFwc2VkJywgJ2dyb3VwRW5kJywgJ2luZm8nLCAnbG9nJyxcbiAgICAnbWFya1RpbWVsaW5lJywgJ3Byb2ZpbGUnLCAncHJvZmlsZUVuZCcsICd0YWJsZScsICd0aW1lJywgJ3RpbWVFbmQnLFxuICAgICd0aW1lU3RhbXAnLCAndHJhY2UnLCAnd2FybicsXG4gIF07XG4gIGxldCB7IGxlbmd0aCB9ID0gbWV0aG9kcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuICBjb25zdCBjb25zb2xlID0gKHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF07XG5cbiAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXG4gICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IG5vb3A7XG4gICAgfVxuICB9XG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

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
      /*!*************************************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css ***!
        \*************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
        /*! ../../../node_modules/css-loader/dist/runtime/api.js */
        "../../node_modules/css-loader/dist/runtime/api.js")(true); // Module

        exports.push([module.i, "[data-form-message] ~ [data-form-hint] {\n  display: none;\n}\n\n.is-invalid[data-message-placeholder]>.invalid-feedback,\n.is-invalid[data-field]>.invalid-feedback {\n  display: block;\n}\n", "", {
          "version": 3,
          "sources": ["styles.css"],
          "names": [],
          "mappings": "AAAA;EACE,aAAa;AACf;;AAEA;;EAEE,cAAc;AAChB",
          "file": "styles.css",
          "sourcesContent": ["[data-form-message] ~ [data-form-hint] {\n  display: none;\n}\n\n.is-invalid[data-message-placeholder]>.invalid-feedback,\n.is-invalid[data-field]>.invalid-feedback {\n  display: block;\n}\n"]
        }]);
        /***/
      },

      /***/
      "../../node_modules/css-loader/dist/runtime/api.js":
      /*!*************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/css-loader/dist/runtime/api.js ***!
        \*************************************************************************************************/

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
                return "@media ".concat(item[2], "{").concat(content, "}");
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names


          list.i = function (modules, mediaQuery) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = modules[_i]; // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              // when a module is imported multiple times with different media queries.
              // I hope this will never occur (Hey this way we have smaller bundles)

              if (item[0] == null || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
                }

                list.push(item);
              }
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
              return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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
      /*!************************************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
        \************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var stylesInDom = {};

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

        function listToStyles(list, options) {
          var styles = [];
          var newStyles = {};

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {
              css: css,
              media: media,
              sourceMap: sourceMap
            };

            if (!newStyles[id]) {
              styles.push(newStyles[id] = {
                id: id,
                parts: [part]
              });
            } else {
              newStyles[id].parts.push(part);
            }
          }

          return styles;
        }

        function addStylesToDom(styles, options) {
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            var j = 0;

            if (domStyle) {
              domStyle.refs++;

              for (; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
              }

              for (; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j], options));
              }
            } else {
              var parts = [];

              for (; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], options));
              }

              stylesInDom[item.id] = {
                id: item.id,
                refs: 1,
                parts: parts
              };
            }
          }
        }

        function insertStyleElement(options) {
          var style = document.createElement('style');

          if (typeof options.attributes.nonce === 'undefined') {
            var nonce = true ? __webpack_require__.nc : undefined;

            if (nonce) {
              options.attributes.nonce = nonce;
            }
          }

          Object.keys(options.attributes).forEach(function (key) {
            style.setAttribute(key, options.attributes[key]);
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
          var css = remove ? '' : obj.css; // For old IE

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
          options = options || {};
          options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== 'boolean') {
            options.singleton = isOldIE();
          }

          var styles = listToStyles(list, options);
          addStylesToDom(styles, options);
          return function update(newList) {
            var mayRemove = [];

            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              if (domStyle) {
                domStyle.refs--;
                mayRemove.push(domStyle);
              }
            }

            if (newList) {
              var newStyles = listToStyles(newList, options);
              addStylesToDom(newStyles, options);
            }

            for (var _i = 0; _i < mayRemove.length; _i++) {
              var _domStyle = mayRemove[_i];

              if (_domStyle.refs === 0) {
                for (var j = 0; j < _domStyle.parts.length; j++) {
                  _domStyle.parts[j]();
                }

                delete stylesInDom[_domStyle.id];
              }
            }
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


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _formToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./formToObject */
        "./src/formToObject.js");
        /* harmony import */


        var _formToObject__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_formToObject__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _formMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./formMessages */
        "./src/formMessages.js");
        /* harmony import */


        var _formMessages__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_formMessages__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _iterateInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./iterateInputs */
        "./src/iterateInputs.js");
        /* harmony import */


        var _iterateInputs__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/
        __webpack_require__.n(_iterateInputs__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./styles.css */
        "./src/styles.css");
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/
        __webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
        /* eslint-disable no-console */

        /* eslint-disable func-names */

        /* eslint-disable no-param-reassign */

        /* eslint-disable no-underscore-dangle */

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

          if (!window.FormData && this.options.context.querySelectorAll("input[type='file']").length !== 0) {
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
         * @param {Boolean} [remove]
         */


        Form.prototype.lock = function (remove) {
          if (!this.options.lockType || this.options.lockType === 'none') {
            return;
          }

          if (remove) {
            if (!this.sf.removeInstance('lock', this.node)) {
              console.warn("You try to remove 'lock' instance, but it is not available or not started");
            }

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
        }; // Form messages


        Form.prototype.showFormMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFormMessage;
        Form.prototype.showFieldMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFieldMessage;
        Form.prototype.showFieldsMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showFieldsMessages;
        Form.prototype.showMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.showMessages;
        Form.prototype.removeMessages = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.removeMessages;
        Form.prototype.removeMessage = _formMessages__WEBPACK_IMPORTED_MODULE_2___default.a.removeMessage;

        Form.prototype.processAnswer = function (answer) {
          if (this.options.messagesType) {
            this.showMessages(answer);
          }
        };

        Form.prototype.optCallback = function (options, type) {
          if (options[type]) {
            // eslint-disable-next-line no-eval
            const fn = eval(options[type]);

            if (typeof fn === 'function') {
              fn.call(options);
            }
          }
        };
        /**
         * Send form to server
         * @param {Object} sendOptions
         */


        Form.prototype.send = function (sendOptions) {
          const that = this;
          this.lock();
          this.optCallback(sendOptions, 'beforeSubmitCallback');
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
          if (window.FormData) {
            return new FormData(this.options.context);
          }

          console.log(`Form \`${this.options.context}\` were processed without FormData.`);
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
      function (module, exports) {
        /* eslint-disable max-len */

        /* eslint-disable no-underscore-dangle */

        /* eslint-disable no-param-reassign */

        /* eslint-disable no-multi-assign */

        /* eslint-disable no-template-curly-in-string */
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

          showMessages(answer) {
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
                this.showFieldsMessages(answer.data.messages, 'success');
                isMsg = true;
              }

              if (answer.data.errors) {
                this.showFieldsMessages(answer.data.errors, 'error');
                isMsg = true;
              }

              if (answer.data.warnings) {
                this.showFieldsMessages(answer.data.warnings, 'warning');
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
            let field = isContainer ? el : window.sf.helpers.domTools.closest(el, this.options.messages.field);
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

          showFieldsMessages(messages, type) {
            const that = this;
            const notFound = window.sf.iterateInputs(this.node, messages, (el, message) => {
              that.showFieldMessage(el, message, type);
            });
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
              if (domNode.checked) {
                if (!result[keys]) {
                  result[keys] = [];
                }

                result[keys].push(value);
                return;
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
        var content = __webpack_require__(
        /*! !../../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./styles.css */
        "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};
        options.insert = "head";
        options.singleton = false;

        var update = __webpack_require__(
        /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
        "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }
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
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybVRvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlcmF0ZUlucHV0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz8wOGU4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIiXSwibmFtZXMiOlsiRm9ybSIsInNmIiwibm9kZSIsIm9wdGlvbnMiLCJfY29uc3RydWN0IiwicHJvdG90eXBlIiwiY29yZSIsImNyZWF0ZU1vZHVsZVByb3RvdHlwZSIsIm5hbWUiLCJpbml0IiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJ1cmwiLCJkb21BdHRyIiwidmFsdWUiLCJtZXRob2QiLCJsb2NrVHlwZSIsIm1lc3NhZ2VzVHlwZSIsIm1lc3NhZ2VzIiwidmFsIiwiSlNPTiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIk9iamVjdCIsImFzc2lnbiIsInVzZUFqYXgiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImFqYXhDYWxsYmFjayIsImJlZm9yZVN1Ym1pdENhbGxiYWNrIiwiYWZ0ZXJTdWJtaXRDYWxsYmFjayIsImhlYWRlcnMiLCJBY2NlcHQiLCJnbG9iYWwiLCJpbnN0YW5jZXMiLCJmb3JtIiwiZm9ybU1lc3NhZ2VzIiwiZGVmYXVsdHMiLCJvblN1Ym1pdCIsImdldEluc3RhbmNlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVNZXNzYWdlcyIsImRhdGEiLCJnZXRGb3JtRGF0YSIsIndpbmRvdyIsIkZvcm1EYXRhIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRyaWdnZXIiLCJzZW5kIiwibG9jayIsInJlbW92ZSIsInJlbW92ZUluc3RhbmNlIiwid2FybiIsImFkZEluc3RhbmNlIiwidHlwZSIsIm9uUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInNob3dGb3JtTWVzc2FnZSIsInNob3dGaWVsZE1lc3NhZ2UiLCJzaG93RmllbGRzTWVzc2FnZXMiLCJzaG93TWVzc2FnZXMiLCJyZW1vdmVNZXNzYWdlIiwicHJvY2Vzc0Fuc3dlciIsImFuc3dlciIsIm9wdENhbGxiYWNrIiwiZm4iLCJldmFsIiwiY2FsbCIsInNlbmRPcHRpb25zIiwidGhhdCIsImFqYXgiLCJ0aGVuIiwibG9nIiwiRm9ybVRvT2JqZWN0Iiwic2V0T3B0aW9ucyIsIm9wdCIsImFkZCIsIkRPTU5vZGUiLCJldmVudFR5cGUiLCJldmVudEZ1bmN0aW9uIiwiZGllIiwicmVtb3ZlQWxsIiwidGVtcGxhdGUiLCJjbG9zZSIsInBsYWNlIiwibGV2ZWxzIiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwic2VsZWN0b3IiLCJmaWVsZCIsImZpZWxkRWxlbWVudCIsImZpZWxkVGVtcGxhdGUiLCJmaWVsZFBsYWNlIiwiZmllbGRDbGFzc2VzIiwibWVzc2FnZSIsImRlYnVnIiwibm90aWNlIiwiZGFuZ2VyIiwiY3JpdGljYWwiLCJhbGVydCIsImVtZXJnZW5jeSIsInByZXBhcmVNZXNzYWdlT2JqZWN0IiwidGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc01zZyIsImtleXMiLCJmb3JFYWNoIiwiZXJyb3JzIiwid2FybmluZ3MiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiX21lc3NhZ2VzIiwibSIsImNsb3NlSGFuZGxlciIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZmllbGRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicGFyZW50IiwidHBsIiwiaXRlbSIsImhhc093blByb3BlcnR5IiwicmVwbGFjZSIsInRwbEVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJtc2dFbCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInB1c2giLCJpc0NvbnRhaW5lciIsImRvbVRvb2xzIiwiY2xvc2VzdCIsImN1cnJlbnRNc2dFbCIsIm5leHRTaWJsaW5nIiwiZmllbGRDbG9zZSIsIm5vdEZvdW5kIiwibXNnT2JqIiwiY29udGFpbmVyIiwiZm9ybVJlZiIsImtleVJlZ2V4IiwiJGZvcm0iLCIkZm9ybUVsZW1lbnRzIiwiZm9ybU9iaiIsInNldEZvcm0iLCJzZXRGb3JtRWxlbWVudHMiLCJzZXRGb3JtT2JqIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc0RvbU5vZGUiLCJub2RlVHlwZSIsImFyciIsImNhbGxiYWNrIiwiaSIsImFkZENoaWxkIiwicmVzdWx0IiwiZG9tTm9kZSIsIm5vZGVOYW1lIiwiY2hlY2tlZCIsIkRPTWNoaWxkcyIsImNoaWxkIiwidGVzdCIsImRpc2FibGVkIiwibWF0Y2giLCJyZXF1aXJlIiwiZGVmYXVsdCIsInJlZ2lzdGVySW5zdGFuY2VUeXBlIiwiZmluZE5vZGVzIiwibmFtZXMiLCJwcmVmaXgiLCJwYXJ0T2ZTZWxlY3RvciIsInRvU3RyaW5nIiwic2VsIiwibm9kZXMiLCJtYXgiLCJvYmoiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsK0dBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLDJDQUEyQyxrQkFBa0IsR0FBRyx5R0FBeUcsbUJBQW1CLEdBQUcsU0FBUyxpRUFBaUUsVUFBVSxNQUFNLE1BQU0sVUFBVSxzRkFBc0Ysa0JBQWtCLEdBQUcseUdBQXlHLG1CQUFtQixHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUNGbGlCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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M0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEcsYUFBakIsQzs7Ozs7Ozs7Ozs7QUNsRkEsY0FBYyxtQkFBTyxDQUFDLDRKQUE0RTs7QUFFbEc7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNkpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLGtFIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyb290W1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIltkYXRhLWZvcm0tbWVzc2FnZV0gfiBbZGF0YS1mb3JtLWhpbnRdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pcy1pbnZhbGlkW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcl0+LmludmFsaWQtZmVlZGJhY2ssXFxuLmlzLWludmFsaWRbZGF0YS1maWVsZF0+LmludmFsaWQtZmVlZGJhY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQlwiLFwiZmlsZVwiOlwic3R5bGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJbZGF0YS1mb3JtLW1lc3NhZ2VdIH4gW2RhdGEtZm9ybS1oaW50XSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaXMtaW52YWxpZFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXJdPi5pbnZhbGlkLWZlZWRiYWNrLFxcbi5pcy1pbnZhbGlkW2RhdGEtZmllbGRdPi5pbnZhbGlkLWZlZWRiYWNrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl19XSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgY29yZSBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XG5cbmltcG9ydCBGb3JtVG9PYmplY3QgZnJvbSAnLi9mb3JtVG9PYmplY3QnO1xuaW1wb3J0IGZvcm1NZXNzYWdlcyBmcm9tICcuL2Zvcm1NZXNzYWdlcyc7XG5pbXBvcnQgaXRlcmF0ZUlucHV0cyBmcm9tICcuL2l0ZXJhdGVJbnB1dHMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cblxuLyoqXG4gKiBTcGlyYWwgRm9ybXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAY29uc3RydWN0b3IgRm9ybVxuICogQGV4dGVuZHMgQmFzZURPTUNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEZvcm0gPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5fY29uc3RydWN0KHNmLCBub2RlLCBvcHRpb25zKTtcbn07XG5cblxuLyoqXG4gKiBAbGVuZHMgc2YuRm9ybS5wcm90b3R5cGVcbiAqL1xuRm9ybS5wcm90b3R5cGUgPSBjb3JlLmNyZWF0ZU1vZHVsZVByb3RvdHlwZSgpO1xuXG4vKipcbiAqIE5hbWUgdG8gcmVnaXN0ZXJcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbkZvcm0ucHJvdG90eXBlLm5hbWUgPSAnZm9ybSc7XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBjYWxsIG9uIG5ldyBpbnN0YW5jZSBpcyBjcmVhdGVkLlxuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAgRG9tTm9kZSBvZiBmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIHRvIG92ZXJyaWRlIGRlZmF1bHRcbiAqIEBwcml2YXRlXG4gKi9cbkZvcm0ucHJvdG90eXBlLl9jb25zdHJ1Y3QgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5pbml0KHNmLCBub2RlLCBvcHRpb25zKTtcbiAgdGhpcy5taXhNZXNzYWdlc09wdGlvbnMoKTtcbiAgLy8gdGhpcy5vcHRpb25zLmZpbGxGcm9tICYmIHRoaXMuZmlsbEZpZWxkc0Zyb20oKTsgLy8gaWQgcmVxdWlyZWQgdG8gZmlsbCBmb3JtXG5cbiAgLyoqXG4gICAgICogQGV4dGVuZHMgRE9NRXZlbnRzXG4gICAgICogQHR5cGUge0RPTUV2ZW50c31cbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqICovXG4gIHRoaXMuRE9NRXZlbnRzID0gbmV3IHRoaXMuc2YuaGVscGVycy5ET01FdmVudHMoKTtcbiAgdGhpcy5hZGRFdmVudHMoKTtcblxuICB0aGlzLmV2ZW50cyA9IG5ldyB0aGlzLnNmLmNvcmUuRXZlbnRzKFsnYmVmb3JlU2VuZCcsICdzdWNjZXNzJywgJ2Vycm9yJywgJ2Fsd2F5cyddKTtcbiAgY29yZS5pdGVyYXRlSW5wdXRzID0gaXRlcmF0ZUlucHV0cztcbn07XG5cbi8qKlxuICogQG92ZXJyaWRlXG4gKiBAaW5oZXJpdERvY1xuICogQGVudW0ge09iamVjdH1cbiAqIEBkZXByZWNhdGVkXG4gKi9cbkZvcm0ucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7XG4gIC8qKlxuICAgICAqIExpbmsgdG8gZm9ybVxuICAgICAqL1xuICBjb250ZXh0OiB7XG4gICAgcHJvY2Vzc29yKG5vZGUpIHsgLy8gUHJvY2Vzc29yXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBMaW5rIHRvICd0aGlzJ1xuICAgICAqL1xuICBzZWxmOiB7XG4gICAgcHJvY2Vzc29yKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogVVJMIHRvIHNlbmQgZm9ybSAoaWYgYWpheCBmb3JtKSA8Yj5EZWZhdWx0OiBcIi9cIjwvYj5cbiAgICAgKi9cbiAgdXJsOiB7XG4gICAgZG9tQXR0cjogJ2FjdGlvbicsXG4gICAgdmFsdWU6ICcvJyxcbiAgfSxcbiAgLyoqXG4gICAgICogTWV0aG9kIHRvIHNlbmQgdG8gc2VuZCBmb3JtIChpZiBhamF4IGZvcm0pIDxiPkRlZmF1bHQ6IFwiUE9TVFwiPC9iPlxuICAgICAqL1xuICBtZXRob2Q6IHtcbiAgICBkb21BdHRyOiAnbWV0aG9kJyxcbiAgICB2YWx1ZTogJ1BPU1QnLFxuICB9LFxuICAvKipcbiAgICAgKiBMb2NrIHR5cGUgd2hlbiBmb3JtIHNlbmRpbmcgPGI+RGVmYXVsdDogXCJkZWZhdWx0XCI8L2I+IEBzZWUgc2YubG9ja1xuICAgICAqL1xuICBsb2NrVHlwZToge1xuICAgIHZhbHVlOiAnZGVmYXVsdCcsXG4gICAgZG9tQXR0cjogJ2RhdGEtbG9jay10eXBlJyxcbiAgfSxcbiAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgbWVzc2FnZXNUeXBlOiB7XG4gICAgdmFsdWU6ICdzcGlyYWwnLFxuICAgIGRvbUF0dHI6ICdkYXRhLW1lc3NhZ2VzLXR5cGUnLFxuICB9LFxuICAvKipcbiAgICAgKiBQYXNzIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgZm9ybSBtZXNzYWdlc1xuICAgICAqL1xuICBtZXNzYWdlczoge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkb21BdHRyOiAnZGF0YS1tZXNzYWdlcycsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCwgc2VsZikge1xuICAgICAgaWYgKCF2YWwpIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybSBKU09OLnBhcnNlIGVycm9yOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZi52YWx1ZSwgdmFsKTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBVc2UgYWpheCB0byBzdWJtaXQgZm9ybSA8Yj5EZWZhdWx0OiB0cnVlPC9iPlxuICAgICAqL1xuICB1c2VBamF4OiB7IC8vIEF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IHRydWUsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS11c2UtYWpheCcsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCkgeyAvLyBwcm9jZXNzb3IgdG8gcHJvY2VzcyBkYXRhIGJlZm9yZSByZXR1cm5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHZhbCA9ICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpID8gdmFsLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHZhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIENhbGxiYWNrIGFmdGVyIGZvcm0gc3VibWl0dGluZyA8Yj5EZWZhdWx0OiBmYWxzZTwvYj5cbiAgICAgKiA8YnIvPlxuICAgICAqIDxiPiBFeGFtcGxlIDwvYj5cbiAgICAgKiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICAgKiAgLy9vcHRpb25zIGNvbnRhaW5zIGFsbCBvcHRpb25zIGFmdGVyIHNlbmRcbiAgICAgKiB9XG4gICAgICovXG4gIGFqYXhDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWNhbGxiYWNrJyxcbiAgfSxcbiAgYmVmb3JlU3VibWl0Q2FsbGJhY2s6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogZmFsc2UsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1iZWZvcmUtc3VibWl0JyxcbiAgfSxcbiAgYWZ0ZXJTdWJtaXRDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWFmdGVyLXN1Ym1pdCcsXG4gIH0sXG4gIGhlYWRlcnM6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtaGVhZGVycycsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCwgc2VsZikge1xuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UodmFsKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gSlNPTi5wYXJzZSBlcnJvcjogJywgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHNlbGYudmFsdWUsIHZhbCk7XG4gICAgfSxcbiAgfSxcbn07XG5cbkZvcm0ucHJvdG90eXBlLm1peE1lc3NhZ2VzT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsID0gdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlcy5mb3JtO1xuICB0aGlzLm9wdGlvbnMubWVzc2FnZXMgPSB7XG4gICAgLi4uZm9ybU1lc3NhZ2VzLmRlZmF1bHRzLFxuICAgIC4uLmdsb2JhbCAmJiBnbG9iYWwubWVzc2FnZXMgJiYgZ2xvYmFsLm1lc3NhZ2VzW3RoaXMub3B0aW9ucy5tZXNzYWdlc1R5cGVdLFxuICAgIC4uLnRoaXMub3B0aW9ucy5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbi8qKlxuICogQ2FsbCBvbiBmb3JtIHN1Ym1pdFxuICogQHBhcmFtIHtFdmVudH0gZSBzdWJtaXQgZXZlbnRcbiAqL1xuRm9ybS5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAodGhpcy5zZi5nZXRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICAvLyBPbiBsb2NrIHdlIHNob3VsZCduIGRvIGFueSBhY3Rpb25zXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5yZW1vdmVNZXNzYWdlcygpO1xuXG4gIHRoaXMub3B0aW9ucy5kYXRhID0gdGhpcy5nZXRGb3JtRGF0YSgpO1xuXG4gIC8vIFdlIGNhbiBzZW5kIGZpbGVzIG9ubHkgd2l0aCBGb3JtRGF0YVxuICAvLyBJZiBmb3JtIGNvbnRhaW4gZmlsZXMgYW5kIG5vIEZvcm1EYXRhIHRoYW4gZGlzYWJsZSBhamF4XG4gIGlmICghd2luZG93LkZvcm1EYXRhICYmIHRoaXMub3B0aW9ucy5jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdmaWxlJ11cIikubGVuZ3RoICE9PSAwKSB7XG4gICAgdGhpcy5vcHRpb25zLnVzZUFqYXggPSBmYWxzZTtcbiAgfVxuICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdiZWZvcmVTZW5kJywgdGhpcy5vcHRpb25zKTtcbiAgLy8gc2YuZXZlbnRzLnBlcmZvcm1BY3Rpb24oXCJiZWZvcmVTdWJtaXRcIiwgdGhpcy5vcHRpb25zKTtcbiAgLy8gdGhpcy5ldmVudHMucGVyZm9ybUFjdGlvbihcImJlZm9yZVN1Ym1pdFwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMudXNlQWpheCkge1xuICAgIHRoaXMuc2VuZCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogTG9ja2VyLiBBZGQgb3IgcmVtb3ZlLlxuICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlXVxuICovXG5Gb3JtLnByb3RvdHlwZS5sb2NrID0gZnVuY3Rpb24gKHJlbW92ZSkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocmVtb3ZlKSB7XG4gICAgaWYgKCF0aGlzLnNmLnJlbW92ZUluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xuICAgICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byByZW1vdmUgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxvY2sgPSB0aGlzLnNmLmFkZEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlLCB7IHR5cGU6IHRoaXMub3B0aW9ucy5sb2NrVHlwZSB9KTtcbiAgaWYgKCFsb2NrKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byBhZGQgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBhbHJlYWR5IHN0YXJ0ZWRcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMub3B0aW9ucy5vblByb2dyZXNzID0gbG9jay5wcm9ncmVzcztcbn07XG5cbi8vIEZvcm0gbWVzc2FnZXNcbkZvcm0ucHJvdG90eXBlLnNob3dGb3JtTWVzc2FnZSA9IGZvcm1NZXNzYWdlcy5zaG93Rm9ybU1lc3NhZ2U7XG5Gb3JtLnByb3RvdHlwZS5zaG93RmllbGRNZXNzYWdlID0gZm9ybU1lc3NhZ2VzLnNob3dGaWVsZE1lc3NhZ2U7XG5Gb3JtLnByb3RvdHlwZS5zaG93RmllbGRzTWVzc2FnZXMgPSBmb3JtTWVzc2FnZXMuc2hvd0ZpZWxkc01lc3NhZ2VzO1xuRm9ybS5wcm90b3R5cGUuc2hvd01lc3NhZ2VzID0gZm9ybU1lc3NhZ2VzLnNob3dNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnJlbW92ZU1lc3NhZ2VzID0gZm9ybU1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2VzO1xuRm9ybS5wcm90b3R5cGUucmVtb3ZlTWVzc2FnZSA9IGZvcm1NZXNzYWdlcy5yZW1vdmVNZXNzYWdlO1xuXG5Gb3JtLnByb3RvdHlwZS5wcm9jZXNzQW5zd2VyID0gZnVuY3Rpb24gKGFuc3dlcikge1xuICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzVHlwZSkge1xuICAgIHRoaXMuc2hvd01lc3NhZ2VzKGFuc3dlcik7XG4gIH1cbn07XG5cbkZvcm0ucHJvdG90eXBlLm9wdENhbGxiYWNrID0gZnVuY3Rpb24gKG9wdGlvbnMsIHR5cGUpIHtcbiAgaWYgKG9wdGlvbnNbdHlwZV0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuICAgIGNvbnN0IGZuID0gZXZhbChvcHRpb25zW3R5cGVdKTtcbiAgICBpZiAodHlwZW9mIChmbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZuLmNhbGwob3B0aW9ucyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNlbmQgZm9ybSB0byBzZXJ2ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZW5kT3B0aW9uc1xuICovXG5Gb3JtLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHNlbmRPcHRpb25zKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuICB0aGlzLmxvY2soKTtcbiAgdGhpcy5vcHRDYWxsYmFjayhzZW5kT3B0aW9ucywgJ2JlZm9yZVN1Ym1pdENhbGxiYWNrJyk7XG4gIHRoaXMuc2YuYWpheC5zZW5kKHNlbmRPcHRpb25zKS50aGVuKFxuICAgIChhbnN3ZXIpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBzZW5kT3B0aW9ucyk7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICB0aGF0LmV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LFxuICApLnRoZW4oKGFuc3dlcikgPT4ge1xuICAgIHRoYXQubG9jayh0cnVlKTtcbiAgICB0aGF0LnByb2Nlc3NBbnN3ZXIoYW5zd2VyKTtcbiAgICB0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYWZ0ZXJTdWJtaXRDYWxsYmFjaycpO1xuICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Fsd2F5cycsIHNlbmRPcHRpb25zKTtcbiAgfSk7XG5cbiAgLy8gVG8gY2FuY2VsIHJlcXVlc3Q6XG4gIC8vIGlmICh0aGlzLnNmLmFqYXguY2FuY2VsKSB0aGlzLnNmLmFqYXguY2FuY2VsKCk7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkZvcm0ucHJvdG90eXBlLmdldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAod2luZG93LkZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBGb3JtRGF0YSh0aGlzLm9wdGlvbnMuY29udGV4dCk7XG4gIH1cbiAgY29uc29sZS5sb2coYEZvcm0gXFxgJHt0aGlzLm9wdGlvbnMuY29udGV4dH1cXGAgd2VyZSBwcm9jZXNzZWQgd2l0aG91dCBGb3JtRGF0YS5gKTtcbiAgcmV0dXJuIG5ldyBGb3JtVG9PYmplY3QodGhpcy5vcHRpb25zLmNvbnRleHQpO1xufTtcblxuLyoqXG4gKiBTZXQgb3B0aW9ucyAob3ZlcndyaXRlIGN1cnJlbnQpXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0IG9wdGlvbnNcbiAqL1xuRm9ybS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHQpIHtcbiAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdCk7XG59O1xuXG4vKipcbiAqIEFkZCBhbGwgZXZlbnRzIGZvciBmb3Jtc1xuICovXG5Gb3JtLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuICB0aGlzLkRPTUV2ZW50cy5hZGQoW1xuICAgIHtcbiAgICAgIERPTU5vZGU6IHRoaXMub3B0aW9ucy5jb250ZXh0LFxuICAgICAgZXZlbnRUeXBlOiAnc3VibWl0JyxcbiAgICAgIGV2ZW50RnVuY3Rpb24oZSkge1xuICAgICAgICB0aGF0Lm9uU3VibWl0LmNhbGwodGhhdCwgZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0pO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgdmFyaWFibGVzIGFuZCBkaWVcbiAqL1xuRm9ybS5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLkRPTUV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgLy8gVE9ETyBkb24ndCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCdzIGFkZG9ucyBhbmQgcGx1Z2lucz9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAvLyB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJhbGVydCBmb3JtLW1zZyAke3R5cGV9XCI+PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiPsOXPC9idXR0b24+PHAgY2xhc3M9XCJtc2dcIj4ke3RleHR9PC9wPjwvZGl2PicsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dHlwZX0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93XCIgcm9sZT1cImFsZXJ0XCI+J1xuICAgICsgJyR7dGV4dH0nXG4gICAgKyAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+J1xuICAgICsgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+J1xuICAgICsgJzwvYnV0dG9uPidcbiAgICArICc8L2Rpdj4nLFxuICBjbG9zZTogJy5jbG9zZScsXG4gIHBsYWNlOiAnYm90dG9tJyxcbiAgbGV2ZWxzOiB7XG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLCBpbmZvOiAnaW5mbycsIHdhcm5pbmc6ICd3YXJuaW5nJywgZXJyb3I6ICdkYW5nZXInLFxuICB9LFxuICBzZWxlY3RvcjogJ1tkYXRhLW1lc3NhZ2VdJyxcbiAgZmllbGQ6ICdbZGF0YS1maWVsZF0nLFxuICBmaWVsZEVsZW1lbnQ6ICdbZGF0YS1pbnB1dF0nLFxuICBmaWVsZFRlbXBsYXRlOiAnPGRpdiBkYXRhLW1lc3NhZ2UgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCIgZGF0YS1mb3JtLW1lc3NhZ2U+JHt0ZXh0fTwvZGl2PicsXG4gIGZpZWxkUGxhY2U6ICdib3R0b20nLFxuICBmaWVsZENsYXNzZXM6IHtcbiAgICBzdWNjZXNzOiAnaXMtdmFsaWQnLCBpbmZvOiAnaXMtdmFsaWQnLCB3YXJuaW5nOiAnaXMtaW52YWxpZCcsIGVycm9yOiAnaXMtaW52YWxpZCcsXG4gIH0sXG59O1xuXG4vLyBPZnRlbiB1c2VkIGFsaWFzXG5kZWZhdWx0cy5sZXZlbHMubWVzc2FnZSA9IGRlZmF1bHRzLmxldmVscy5zdWNjZXNzO1xuXG4vLyBPdGhlciBhbGlhc2VzXG4vLyBQU1ItMyBzZXZlcml0eSBsZXZlbHMgbWFwcGluZyAoZGVidWcsIGluZm8sIG5vdGljZSwgd2FybmluZywgZXJyb3IsIGNyaXRpY2FsLCBhbGVydCwgZW1lcmdlbmN5KVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BocC1maWcvZmlnLXN0YW5kYXJkcy9ibG9iL21hc3Rlci9hY2NlcHRlZC9QU1ItMy1sb2dnZXItaW50ZXJmYWNlLm1kXG5kZWZhdWx0cy5sZXZlbHMuZGVidWcgPSBkZWZhdWx0cy5sZXZlbHMuc3VjY2VzcztcbmRlZmF1bHRzLmxldmVscy5pbmZvID0gZGVmYXVsdHMubGV2ZWxzLm5vdGljZSA9IGRlZmF1bHRzLmxldmVscy5pbmZvO1xuZGVmYXVsdHMubGV2ZWxzLmRhbmdlciA9IGRlZmF1bHRzLmxldmVscy5jcml0aWNhbCA9IGRlZmF1bHRzLmxldmVscy5hbGVydCA9IGRlZmF1bHRzLmxldmVscy5lbWVyZ2VuY3kgPSBkZWZhdWx0cy5sZXZlbHMuZXJyb3I7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gJ29iamVjdCcpIHtcbiAgICBtZXNzYWdlID0geyB0ZXh0OiBtZXNzYWdlLCB0eXBlIH07XG4gIH1cbiAgbWVzc2FnZS50ZXh0ID0gbWVzc2FnZS50ZXh0IHx8IG1lc3NhZ2UubWVzc2FnZSB8fCBtZXNzYWdlO1xuICBtZXNzYWdlLnR5cGUgPSBtZXNzYWdlLnR5cGUgfHwgdHlwZTtcbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0cyxcbiAgc2hvd01lc3NhZ2VzKGFuc3dlcikge1xuICAgIGlmICghYW5zd2VyKSByZXR1cm47XG5cbiAgICBsZXQgaXNNc2cgPSBmYWxzZTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgIGlmIChhbnN3ZXIuZGF0YSkge1xuICAgICAgLy8gZm9yIChjb25zdCB0eXBlIGluIHRoaXMub3B0aW9ucy5tZXNzYWdlcy5sZXZlbHMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5sZXZlbHMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgaWYgKGFuc3dlci5kYXRhW3R5cGVdKSB7XG4gICAgICAgICAgdGhpcy5zaG93Rm9ybU1lc3NhZ2UoYW5zd2VyLmRhdGFbdHlwZV0sIHRoaXMub3B0aW9ucy5tZXNzYWdlcy5sZXZlbHNbdHlwZV0pO1xuICAgICAgICAgIGlzTXNnID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhbnN3ZXIuZGF0YS5tZXNzYWdlcykge1xuICAgICAgICB0aGlzLnNob3dGaWVsZHNNZXNzYWdlcyhhbnN3ZXIuZGF0YS5tZXNzYWdlcywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLmVycm9ycykge1xuICAgICAgICB0aGlzLnNob3dGaWVsZHNNZXNzYWdlcyhhbnN3ZXIuZGF0YS5lcnJvcnMsICdlcnJvcicpO1xuICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoYW5zd2VyLmRhdGEud2FybmluZ3MpIHtcbiAgICAgICAgdGhpcy5zaG93RmllbGRzTWVzc2FnZXMoYW5zd2VyLmRhdGEud2FybmluZ3MsICd3YXJuaW5nJyk7XG4gICAgICAgIGlzTXNnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTXNnKSB7XG4gICAgICBsZXQgZXJyb3I7XG4gICAgICBpZiAoIWFuc3dlci5zdGF0dXMpIHsgLy8gTmV0d29yay5lcnJvclxuICAgICAgICBlcnJvciA9IGFuc3dlcjtcbiAgICAgIH0gZWxzZSBpZiAoYW5zd2VyLnN0YXR1cyA+IDMwMCkge1xuICAgICAgICBlcnJvciA9IGFuc3dlci5zdGF0dXMgPyBgJHthbnN3ZXIuc3RhdHVzfSBgIDogJyc7XG4gICAgICAgIGVycm9yICs9IGFuc3dlci5zdGF0dXNUZXh0ID8gYW5zd2VyLnN0YXR1c1RleHQgOiAnJztcbiAgICAgICAgZXJyb3IgKz0gYW5zd2VyLmRhdGEgJiYgIWFuc3dlci5zdGF0dXNUZXh0ID8gYW5zd2VyLmRhdGEgOiAnJztcbiAgICAgIH1cbiAgICAgIGlmIChlcnJvcikgdGhpcy5zaG93Rm9ybU1lc3NhZ2UoZXJyb3IsIHRoaXMub3B0aW9ucy5tZXNzYWdlcy5sZXZlbHMuZXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMuX21lc3NhZ2VzLmZvckVhY2goKG0pID0+IHtcbiAgICAgIGlmIChtLmNsb3NlKSB7XG4gICAgICAgIG0uY2xvc2VIYW5kbGVyID0gdGhhdC5yZW1vdmVNZXNzYWdlLmJpbmQodGhhdCwgbSk7XG4gICAgICAgIG0uY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtLmNsb3NlSGFuZGxlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVtb3ZlTWVzc2FnZShtLCBlKSB7XG4gICAgaWYgKG0uY2xvc2UpIHtcbiAgICAgIG0uY2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtLmNsb3NlSGFuZGxlcik7XG4gICAgfVxuICAgIG0uZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtLmVsKTtcbiAgICBpZiAobS5maWVsZCkge1xuICAgICAgY29uc3QgZmllbGRFbCA9IG0uZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRFbGVtZW50KTtcbiAgICAgIGlmIChmaWVsZEVsKSB7XG4gICAgICAgIGZpZWxkRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW20udHlwZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbS5maWVsZC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbbS50eXBlXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlKSB7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fbWVzc2FnZXMuc3BsaWNlKHRoaXMuX21lc3NhZ2VzLmluZGV4T2YobSksIDEpO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVNZXNzYWdlcygpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAodGhpcy5fbWVzc2FnZXMpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgdGhhdC5yZW1vdmVNZXNzYWdlKG0sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGF0Ll9tZXNzYWdlcyA9IFtdO1xuICB9LFxuXG4gIHNob3dGb3JtTWVzc2FnZShtZXNzYWdlLCB0eXBlKSB7XG4gICAgbGV0IHBhcmVudDtcbiAgICBsZXQgdHBsID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLnRlbXBsYXRlO1xuXG4gICAgbWVzc2FnZSA9IHByZXBhcmVNZXNzYWdlT2JqZWN0KG1lc3NhZ2UsIHR5cGUpO1xuXG4gICAgLy8gZm9yIChjb25zdCBpdGVtIGluIG1lc3NhZ2UpIHtcbiAgICBPYmplY3Qua2V5cyhtZXNzYWdlKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICBpZiAoIW1lc3NhZ2UuaGFzT3duUHJvcGVydHkoaXRlbSkpIHJldHVybjtcbiAgICAgIHRwbCA9IHRwbC5yZXBsYWNlKGBcXCR7JHtpdGVtfX1gLCBtZXNzYWdlW2l0ZW1dKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRwbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cGxFbGVtLmlubmVySFRNTCA9IHRwbDtcbiAgICBjb25zdCBtc2dFbCA9IHRwbEVsZW0uZmlyc3RDaGlsZDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UgPT09ICdib3R0b20nKSB7XG4gICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobXNnRWwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlID09PSAndG9wJykge1xuICAgICAgdGhpcy5ub2RlLmluc2VydEJlZm9yZShtc2dFbCwgdGhpcy5ub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSk7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobXNnRWwpO1xuICAgIH1cbiAgICB0aGlzLl9tZXNzYWdlcy5wdXNoKHsgZWw6IG1zZ0VsLCBjbG9zZTogbXNnRWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuY2xvc2UpIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzQ29udGFpbmVyXVxuICAgICAqL1xuICBzaG93RmllbGRNZXNzYWdlKGVsLCBtZXNzYWdlLCB0eXBlLCBpc0NvbnRhaW5lcikge1xuICAgIGxldCBmaWVsZCA9IGlzQ29udGFpbmVyID8gZWwgOiB3aW5kb3cuc2YuaGVscGVycy5kb21Ub29scy5jbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGQpO1xuICAgIGxldCB0cGwgPSB0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRUZW1wbGF0ZTtcblxuICAgIGlmICghZmllbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSk7XG5cbiAgICBjb25zdCBmaWVsZEVsID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRFbGVtZW50KTtcbiAgICBjb25zdCBjdXJyZW50TXNnRWwgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5zZWxlY3Rvcik7XG5cbiAgICBpZiAoZmllbGRFbCkge1xuICAgICAgZmllbGRFbC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbdHlwZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbdHlwZV0pO1xuICAgIH1cblxuICAgIC8vIGZvciAoY29uc3QgaXRlbSBpbiBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc093blByb3BlcnR5KGl0ZW0pKSByZXR1cm47XG4gICAgICB0cGwgPSB0cGwucmVwbGFjZShgXFwkeyR7aXRlbX19YCwgbWVzc2FnZVtpdGVtXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cGxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHBsRWxlbS5pbm5lckhUTUwgPSB0cGw7XG4gICAgY29uc3QgbXNnRWwgPSB0cGxFbGVtLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkUGxhY2UgPT09ICdib3R0b20nKSB7XG4gICAgICBpZiAoZmllbGRFbCkge1xuICAgICAgICBmaWVsZC5pbnNlcnRCZWZvcmUobXNnRWwsIGZpZWxkRWwubmV4dFNpYmxpbmcpO1xuICAgICAgfSBlbHNlIGlmICghY3VycmVudE1zZ0VsKSB7XG4gICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlID09PSAndG9wJykge1xuICAgICAgZmllbGQuaW5zZXJ0QmVmb3JlKG1zZ0VsLCBmaWVsZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlKTtcbiAgICAgIGZpZWxkLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tZXNzYWdlcy5wdXNoKHtcbiAgICAgIGVsOiBtc2dFbCxcbiAgICAgIGNsb3NlOiBtc2dFbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsb3NlKSxcbiAgICAgIGZpZWxkLFxuICAgICAgdHlwZSxcbiAgICB9KTtcbiAgfSxcblxuICBzaG93RmllbGRzTWVzc2FnZXMobWVzc2FnZXMsIHR5cGUpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBub3RGb3VuZCA9IHdpbmRvdy5zZi5pdGVyYXRlSW5wdXRzKHRoaXMubm9kZSwgbWVzc2FnZXMsIChlbCwgbWVzc2FnZSkgPT4ge1xuICAgICAgdGhhdC5zaG93RmllbGRNZXNzYWdlKGVsLCBtZXNzYWdlLCB0eXBlKTtcbiAgICB9KTtcblxuICAgIG5vdEZvdW5kLmZvckVhY2goKG1zZ09iaikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMobXNnT2JqKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoYXQubm9kZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZXNzYWdlLXBsYWNlaG9sZGVyPVwiJHtuYW1lfVwiXWApO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgLy8gVE9ETyBjaGVjayBjb250YWluZXIuZGF0YXNldC5tZXNzYWdlVmFyaWFudD8gdmFyaWFudHMgYXJlIFwiZmllbGRcIiBhbmQgXCJmb3JtXCJcbiAgICAgICAgICB0aGF0LnNob3dGaWVsZE1lc3NhZ2UoY29udGFpbmVyLCBtc2dPYmpbbmFtZV0sIHR5cGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKlxuICogZ2l0aHViLmNvbS9zZXJiYW5naGl0YS9Gb3JtVG9PYmplY3QuanMgMS4wLjEgIChjKSAyMDEzIFNlcmJhbiBHaGl0YSA8c2VyYmFuZ2hpdGFAZ21haWwuY29tPlxuICogQGxpY2VuY2UgTUlUXG4gKi9cbi8vIENvbnN0cnVjdG9yLlxuXG5jb25zdCBGb3JtVG9PYmplY3QgPSBmdW5jdGlvbiAoZm9ybVJlZikge1xuICBpZiAoIWZvcm1SZWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aGlzLmZvcm1SZWYgPSBmb3JtUmVmO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgdGhpcy5rZXlSZWdleCA9IC9bXlxcW1xcXV0rL2c7XG4gIHRoaXMuJGZvcm0gPSBudWxsO1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSBbXTtcbiAgdGhpcy5mb3JtT2JqID0ge307XG5cbiAgaWYgKCF0aGlzLnNldEZvcm0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIXRoaXMuc2V0Rm9ybUVsZW1lbnRzKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5zZXRGb3JtT2JqKCk7XG59O1xuXG4vLyBTZXQgdGhlIG1haW4gZm9ybSBvYmplY3Qgd2UgYXJlIHdvcmtpbmcgb24uXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIHN3aXRjaCAodHlwZW9mIHRoaXMuZm9ybVJlZikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICB0aGlzLiRmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5mb3JtUmVmKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh0aGlzLmlzRG9tTm9kZSh0aGlzLmZvcm1SZWYpKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLmZvcm1SZWY7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gdGhpcy4kZm9ybTtcbn07XG5cbi8vIFNldCB0aGUgZWxlbWVudHMgd2UgbmVlZCB0byBwYXJzZS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSB0aGlzLiRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gIHJldHVybiB0aGlzLiRmb3JtRWxlbWVudHMubGVuZ3RoO1xufTtcblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MIG5vZGUuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmlzRG9tTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHJldHVybiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgJ25vZGVUeXBlJyBpbiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vLyBJdGVyYXRpb24gdGhyb3VnaCBhcnJheXMgYW5kIG9iamVjdHMuIENvbXBhdGlibGUgd2l0aCBJRS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChhcnIsIGNhbGxiYWNrKSB7XG4gIGlmIChbXS5mb3JFYWNoKSB7XG4gICAgW10uZm9yRWFjaC5jYWxsKGFyciwgY2FsbGJhY2spO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGxldCBpO1xuICAvLyBmb3IgKGkgaW4gYXJyKSB7XG4gIE9iamVjdC5rZXlzKGFycikuZm9yRWFjaCgoaSkgPT4ge1xuICAgIC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgaW5zdGVhZCBvZiBhcnIuaGFzT3duUHJvcGVydHkgZm9yIElFOCBjb21wYXRpYmlsaXR5LlxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJyLCBpKSkge1xuICAgICAgY2FsbGJhY2suY2FsbChhcnIsIGFycltpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFJlY3Vyc2l2ZSBtZXRob2QgdGhhdCBhZGRzIGtleXMgYW5kIHZhbHVlcyBvZiB0aGUgY29ycmVzcG9uZGluZyBmaWVsZHMuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKHJlc3VsdCwgZG9tTm9kZSwga2V5cywgdmFsdWUpIHtcbiAgLy8gIzEgLSBTaW5nbGUgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgcmFkaW8gdGhhdCBpcyBjaGVja2VkLlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrYm94ZXMgYXJlIGEgc3BlY2lhbCBjYXNlLiBXZSBoYXZlIHRvIGdyYWIgZWFjaCBjaGVja2VkIHZhbHVlc1xuICAgIC8vIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICBpZiAoIXJlc3VsdFtrZXlzXSkge1xuICAgICAgICAgIHJlc3VsdFtrZXlzXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtrZXlzXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE11bHRpcGxlIHNlbGVjdCBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgICAvLyBXZSBoYXZlIHRvIGdyYWIgZWFjaCBzZWxlY3RlZCBvcHRpb24gYW5kIHB1dCB0aGVtIGludG8gYW4gYXJyYXkuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdTRUxFQ1QnICYmIGRvbU5vZGUudHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgIHJlc3VsdFtrZXlzXSA9IFtdO1xuICAgICAgY29uc3QgRE9NY2hpbGRzID0gZG9tTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb25bc2VsZWN0ZWRdJyk7XG4gICAgICBpZiAoRE9NY2hpbGRzKSB7XG4gICAgICAgIHRoaXMuZm9yRWFjaChET01jaGlsZHMsIChjaGlsZCkgPT4ge1xuICAgICAgICAgIHJlc3VsdFtrZXlzXS5wdXNoKGNoaWxkLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2suIFRoZSBkZWZhdWx0IG9uZSB0byBvbmUgYXNzaWduLlxuICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gIzIgLSBNdWx0aSBkaW1lbnNpb25hbCBhcnJheS5cbiAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgIGlmICghcmVzdWx0W2tleXNbMF1dKSB7XG4gICAgICByZXN1bHRba2V5c1swXV0gPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENoaWxkKHJlc3VsdFtrZXlzWzBdXSwgZG9tTm9kZSwga2V5cy5zcGxpY2UoMSwga2V5cy5sZW5ndGgpLCB2YWx1ZSk7XG4gIH1cblxuICAvLyByZXR1cm4gcmVzdWx0OyAvLyA/XG59O1xuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm1PYmogPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0ZXN0O1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuJGZvcm1FbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIElnbm9yZSB0aGUgZWxlbWVudCBpZiB0aGUgJ25hbWUnIGF0dHJpYnV0ZSBpcyBlbXB0eS5cbiAgICAvLyBJZ25vcmUgdGhlICdkaXNhYmxlZCcgZWxlbWVudHMuXG4gICAgaWYgKHRoaXMuJGZvcm1FbGVtZW50c1tpXS5uYW1lICYmICF0aGlzLiRmb3JtRWxlbWVudHNbaV0uZGlzYWJsZWQpIHtcbiAgICAgIHRlc3QgPSB0aGlzLiRmb3JtRWxlbWVudHNbaV0ubmFtZS5tYXRjaCh0aGlzLmtleVJlZ2V4KTtcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5mb3JtT2JqLCB0aGlzLiRmb3JtRWxlbWVudHNbaV0sIHRlc3QsIHRoaXMuJGZvcm1FbGVtZW50c1tpXS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZm9ybU9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybVRvT2JqZWN0O1xuIiwiXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5jb25zdCBGb3JtID0gcmVxdWlyZSgnLi9Gb3JtJykuZGVmYXVsdDtcblxuc2YucmVnaXN0ZXJJbnN0YW5jZVR5cGUoRm9ybSwgJ2pzLXNmLWZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtOyAvLyBFUzYgZGVmYXVsdCBleHBvcnQgd2lsbCBub3QgZXhwb3NlIHVzIGFzIGdsb2JhbFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vLyBQbHVnaW4gaW4gZm9ybU1lc3NhZ2VzIHRvIGl0ZXJhdGUgZm9ybSBpbnB1dHNcblxuLy8gVE9ETyBjb21tZW50IGFsbCBvZiB0aGlzXG4vLyBUT0RPIGFzayBAU3lzdGVyciB0aGUgcmVhc29uIG9mIHZhcmlhYmxlICdwcmVmaXgnXG5sZXQgbm90Rm91bmQgPSBbXTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtTdHJpbmd9IFtwcmVmaXhdXG4gKi9cbmZ1bmN0aW9uIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCkge1xuICAvLyBmb3IgKGNvbnN0IG5hbWUgaW4gbmFtZXMpIHtcbiAgT2JqZWN0LmtleXMobmFtZXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgaWYgKCFuYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRPZlNlbGVjdG9yID0gKHByZWZpeCkgPyBgJHtwcmVmaXh9WyR7bmFtZX1dYCA6IG5hbWU7XG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuYW1lc1tuYW1lXSk7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgW25hbWU9JyR7cGFydE9mU2VsZWN0b3J9J11gO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXNbbmFtZV0sIGNhbGxiYWNrLCBwYXJ0T2ZTZWxlY3Rvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnW29iamVjdCBBcnJheV0nOlxuICAgICAgICBuYW1lc1tuYW1lXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIC8vIFRPRE8gcmVmYWN0b3IgdGhpcyBzaG91bGQgY2FsbCByZWN1cnNpdmVcbiAgICAgICAgICBjb25zdCBzZWwgPSBgW25hbWU9JyR7cGFydE9mU2VsZWN0b3J9W10nXVt2YWx1ZT0nJHtlbH0nXWA7XG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBub3RGb3VuZC5wdXNoKHNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY2FsbGJhY2sobm9kZXNbaV0sIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgICBjb25zdCBub2RlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICBvYmpbcGFydE9mU2VsZWN0b3JdID0gbmFtZXNbbmFtZV07XG4gICAgICAgICAgbm90Rm91bmQucHVzaChvYmopO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGVzW2ldLCBuYW1lc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Vua25vd24gdHlwZSAtJywgdHlwZSwgJyBhbmQgbWVzc2FnZScsIG5hbWVzW25hbWVdKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJlZml4XVxuICogQHJldHVybiB7U3RyaW5nW119XG4gKi9cbmNvbnN0IGl0ZXJhdGVJbnB1dHMgPSBmdW5jdGlvbiAoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpIHtcbiAgbm90Rm91bmQgPSBbXTtcbiAgZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KTtcbiAgaWYgKG5vdEZvdW5kLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgLy8gY29uc29sZS5sb2coJ1NvbWUgZWxlbWVudCBub3QgZm91bmQgaW4gZm9ybScsIG5vdEZvdW5kKTtcbiAgfVxuICByZXR1cm4gbm90Rm91bmQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZXJhdGVJbnB1dHM7XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPy11cmwmc291cmNlTWFwIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9

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
      /*!*************************************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css ***!
        \*************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
        /*! ../../../node_modules/css-loader/dist/runtime/api.js */
        "../../node_modules/css-loader/dist/runtime/api.js")(true); // Module

        exports.push([module.i, ".locked .form-content {\n  pointer-events: none;\n  filter: blur(3px);\n  opacity: .7;\n}\n\n.locker {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  text-align: center;\n}\n", "", {
          "version": 3,
          "sources": ["styles.css"],
          "names": [],
          "mappings": "AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,UAAU;EACV,kBAAkB;AACpB",
          "file": "styles.css",
          "sourcesContent": [".locked .form-content {\n  pointer-events: none;\n  filter: blur(3px);\n  opacity: .7;\n}\n\n.locker {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  text-align: center;\n}\n"]
        }]);
        /***/
      },

      /***/
      "../../node_modules/css-loader/dist/runtime/api.js":
      /*!*************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/css-loader/dist/runtime/api.js ***!
        \*************************************************************************************************/

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
                return "@media ".concat(item[2], "{").concat(content, "}");
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names


          list.i = function (modules, mediaQuery) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = modules[_i]; // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              // when a module is imported multiple times with different media queries.
              // I hope this will never occur (Hey this way we have smaller bundles)

              if (item[0] == null || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
                }

                list.push(item);
              }
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
              return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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
      /*!************************************************************************************************************************!*\
        !*** /Users/annaselezniova/Projects/spiral/toolkit/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
        \************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        "use strict";

        var stylesInDom = {};

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

        function listToStyles(list, options) {
          var styles = [];
          var newStyles = {};

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = {
              css: css,
              media: media,
              sourceMap: sourceMap
            };

            if (!newStyles[id]) {
              styles.push(newStyles[id] = {
                id: id,
                parts: [part]
              });
            } else {
              newStyles[id].parts.push(part);
            }
          }

          return styles;
        }

        function addStylesToDom(styles, options) {
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            var j = 0;

            if (domStyle) {
              domStyle.refs++;

              for (; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
              }

              for (; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j], options));
              }
            } else {
              var parts = [];

              for (; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], options));
              }

              stylesInDom[item.id] = {
                id: item.id,
                refs: 1,
                parts: parts
              };
            }
          }
        }

        function insertStyleElement(options) {
          var style = document.createElement('style');

          if (typeof options.attributes.nonce === 'undefined') {
            var nonce = true ? __webpack_require__.nc : undefined;

            if (nonce) {
              options.attributes.nonce = nonce;
            }
          }

          Object.keys(options.attributes).forEach(function (key) {
            style.setAttribute(key, options.attributes[key]);
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
          var css = remove ? '' : obj.css; // For old IE

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
          options = options || {};
          options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page

          if (!options.singleton && typeof options.singleton !== 'boolean') {
            options.singleton = isOldIE();
          }

          var styles = listToStyles(list, options);
          addStylesToDom(styles, options);
          return function update(newList) {
            var mayRemove = [];

            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              if (domStyle) {
                domStyle.refs--;
                mayRemove.push(domStyle);
              }
            }

            if (newList) {
              var newStyles = listToStyles(newList, options);
              addStylesToDom(newStyles, options);
            }

            for (var _i = 0; _i < mayRemove.length; _i++) {
              var _domStyle = mayRemove[_i];

              if (_domStyle.refs === 0) {
                for (var j = 0; j < _domStyle.parts.length; j++) {
                  _domStyle.parts[j]();
                }

                delete stylesInDom[_domStyle.id];
              }
            }
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


        var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./styles.css */
        "./src/styles.css");
        /* harmony import */


        var _styles_css__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
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
        var content = __webpack_require__(
        /*! !../../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./styles.css */
        "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        var options = {};
        options.insert = "head";
        options.singleton = false;

        var update = __webpack_require__(
        /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
        "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }
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
}); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FubmFzZWxlem5pb3ZhL1Byb2plY3RzL3NwaXJhbC90b29sa2l0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbm5hc2VsZXpuaW92YS9Qcm9qZWN0cy9zcGlyYWwvdG9vbGtpdC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzA4ZTgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJMb2NrIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJwcm9ncmVzcyIsImFkZCIsInR5cGUiLCJjb250ZXh0IiwidHlwZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImh0bWwiLCJhcHBlbmRDaGlsZCIsImRpZSIsInJlbW92ZSIsInNmTG9jayIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVDaGlsZCIsInNwaW5uZXIiLCJjdXJyZW50IiwidG90YWwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImRlZmF1bHQiLCJyZXF1aXJlIiwicmVnaXN0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QUFWLEVBQWlCO0FBQ3ZCLFlBQU1wQixRQUFRLEdBQUcsS0FBS0csT0FBTCxDQUFha0Isc0JBQWIsQ0FBb0MsY0FBcEMsRUFBb0QsQ0FBcEQsQ0FBakI7QUFDQXJCLGNBQVEsQ0FBQ3NCLEtBQVQsQ0FBZUMsS0FBZixHQUF3QixHQUFFLE9BQU9KLE9BQU8sR0FBR0MsS0FBakIsQ0FBd0IsR0FBbEQ7QUFDRDs7QUFmTztBQVpXLENBQXZCLEMsQ0ErQkE7O0FBQ0E5QixJQUFJLENBQUNLLFNBQUwsQ0FBZVMsS0FBZixDQUFxQm9CLE9BQXJCLEdBQStCbEMsSUFBSSxDQUFDSyxTQUFMLENBQWVTLEtBQWYsQ0FBcUJjLE9BQXBEO0FBR2U1QixtRUFBZixFOzs7Ozs7Ozs7OztBQ2pIQSxNQUFNQyxFQUFFLEdBQUdrQyxtQkFBTyxDQUFDLGtEQUFELENBQWxCOztBQUNBLE1BQU1uQyxJQUFJLEdBQUdtQyxtQkFBTyxDQUFDLDZCQUFELENBQVAsQ0FBa0JELE9BQS9COztBQUVBakMsRUFBRSxDQUFDbUMsb0JBQUgsQ0FBd0JwQyxJQUF4QjtBQUVBcUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEMsSUFBakIsQyxDQUF1QixrRDs7Ozs7Ozs7Ozs7QUNOdkIsY0FBYyxtQkFBTyxDQUFDLDRKQUE0RTs7QUFFbEc7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNkpBQThFOztBQUVuRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLGtFIiwiZmlsZSI6ImxvY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHNwaXJhbC10b29sa2l0L2xvY2tlclwiLCBbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvbG9ja2VyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9sb2NrZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvY2tlZCAuZm9ybS1jb250ZW50IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxuICBvcGFjaXR5OiAuNztcXG59XFxuXFxuLmxvY2tlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixrQkFBa0I7QUFDcEJcIixcImZpbGVcIjpcInN0eWxlcy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvY2tlZCAuZm9ybS1jb250ZW50IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxuICBvcGFjaXR5OiAuNztcXG59XFxuXFxuLmxvY2tlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdfV0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgY29yZSBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbi8qKlxuICogU3BpcmFsIGxvY2sgZm9yIGZvcm1zXG4gKiBAY29uc3RydWN0b3IgTG9ja1xuICovXG5cbmNvbnN0IExvY2sgPSBmdW5jdGlvbiAoc2YsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdGhpcy5fY29uc3RydWN0KHNmLCBub2RlLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogQGxlbmRzIExvY2sucHJvdG90eXBlXG4gKi9cbkxvY2sucHJvdG90eXBlID0gY29yZS5jcmVhdGVNb2R1bGVQcm90b3R5cGUoKTtcblxuLyoqXG4gKiBOYW1lIG9mIG1vZHVsZVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuTG9jay5wcm90b3R5cGUubmFtZSA9ICdsb2NrJztcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGNhbGwgb24gbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICogQHByaXZhdGVcbiAqL1xuTG9jay5wcm90b3R5cGUuX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLmluaXQoc2YsIG5vZGUsIG9wdGlvbnMpO1xuICB0aGlzLnByb2dyZXNzID0gdGhpcy5hZGQodGhpcy5vcHRpb25zLnR5cGUsIHRoaXMubm9kZSk7XG59O1xuXG4vKipcbiAqIEFkZCBsb2NrXG4gKiBAcGFyYW0ge1N0cmluZ30gW3R5cGVdIHR5cGUgb2YgbG9jayBAc2VlIHNmLmxvY2sudHlwZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IGNvbnRleHQgdG8gYWRkIGxvY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufCp9XG4gKi9cbkxvY2sucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0eXBlLCBjb250ZXh0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKCF0aGlzLnR5cGVzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5jbGFzc0xpc3QuYWRkKHRoaXMudHlwZXNbdHlwZV0uY2xhc3NOYW1lIHx8ICdqcy1zZi1sb2NrJyk7XG4gIG5vZGUuY2xhc3NMaXN0LmFkZCgnbG9ja2VyJyk7XG4gIG5vZGUuaW5uZXJIVE1MID0gdGhpcy50eXBlc1t0eXBlXS5odG1sO1xuICBjb250ZXh0LmFwcGVuZENoaWxkKG5vZGUpO1xuICBjb250ZXh0LmNsYXNzTGlzdC5hZGQoJ2xvY2tlZCcpO1xuICByZXR1cm4gdGhpcy50eXBlc1t0eXBlXS5wcm9ncmVzcztcbn07XG4vKipcbiAqIENsZWFyIGFsbCB2YXJpYWJsZXMgYW5kIGRpZVxuICovXG5Mb2NrLnByb3RvdHlwZS5kaWUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVtb3ZlKCk7XG59O1xuLyoqXG4gKiBSZW1vdmUgbG9ja1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuTG9jay5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbG9ja2VkJyk7XG4gIGNvbnN0IHNmTG9jayA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtc2YtbG9jaycpOyAvLyBUT0RPIHRoaXMubG9ja05vZGUgP1xuICBpZiAoc2ZMb2NrKSB7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKHNmTG9jayk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuLyoqXG4gKiBPYmplY3Qgd2l0aCBsb2NrIHR5cGVzLlxuICogQGVudW0ge09iamVjdH1cbiAqL1xuTG9jay5wcm90b3R5cGUudHlwZXMgPSB7XG4gIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gIHNwaW5uZXI6IHtcbiAgICAvKipcbiAgICAgICAgICogSFRNTFxuICAgICAgICAgKiBAaW5uZXJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXG4gICAgICAgICAqL1xuICAgIGh0bWw6ICc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj48L2Rpdj4nLFxuICB9LFxuICBwcm9ncmVzczoge1xuICAgIC8qKlxuICAgICAgICAgKiBIVE1MXG4gICAgICAgICAqIEBpbm5lclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgaHRtbDogJzxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCIgcm9sZT1cInByb2dyZXNzYmFyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb24gdG8gY2hhbmdlIHN0eWxlcyB3aGlsZSBBSkFYIHByb2dyZXNzXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjdXJyZW50XG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbFxuICAgICAgICAgKi9cbiAgICBwcm9ncmVzcyhjdXJyZW50LCB0b3RhbCkge1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvZ3Jlc3MtYmFyJylbMF07XG4gICAgICBwcm9ncmVzcy5zdHlsZS53aWR0aCA9IGAkezEwMCAqIChjdXJyZW50IC8gdG90YWwpfSVgO1xuICAgIH0sXG4gIH0sXG59O1xuXG4vLyBXZSBoYXZlIHRvIGhhdmUgc29tZSBkZWZhdWx0IGxvY2tlciwgbGV0IGl0IGJlIHNwaW5uZXJcbkxvY2sucHJvdG90eXBlLnR5cGVzLmRlZmF1bHQgPSBMb2NrLnByb3RvdHlwZS50eXBlcy5zcGlubmVyO1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvY2s7XG4iLCJcbmNvbnN0IHNmID0gcmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2NvcmUnKTtcbmNvbnN0IExvY2sgPSByZXF1aXJlKCcuL0xvY2snKS5kZWZhdWx0O1xuXG5zZi5yZWdpc3Rlckluc3RhbmNlVHlwZShMb2NrKTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2NrOyAvLyBFUzYgZGVmYXVsdCBleHBvcnQgd2lsbCBub3QgZXhwb3NlIHVzIGFzIGdsb2JhbFxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8tdXJsJnNvdXJjZU1hcCEuL3N0eWxlcy5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @spiral-toolkit/core */ "../core/dist/core.js");

__webpack_require__(/*! ./input */ "./src/input/index.js");

__webpack_require__(/*! @spiral-toolkit/locker */ "../locker/dist/locker.js");

__webpack_require__(/*! @spiral-toolkit/form */ "../form/dist/form.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9pbnB1dC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic2YiLCJJbnB1dCIsImRlZmF1bHQiLCJpbnN0YW5jZXNDb250cm9sbGVyIiwicmVnaXN0ZXJJbnN0YW5jZVR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwibm9kZSIsIm9wdGlvbnMiLCJfY29uc3RydWN0IiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29yZSIsIkJhc2VET01Db25zdHJ1Y3RvciIsIm5hbWUiLCJpbml0IiwidG9vbHMiLCJleHRlbmQiLCJlbHMiLCJwcmVmaXgiLCJzZXRQcmVmaXgiLCJhZGRQcmVmaXhFdmVudExpc3RlbmVycyIsInBhdHRlcm4iLCJzZXR1cFBhdHRlcm4iLCJhZGRQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMiLCJvcHRpb25zVG9HcmFiIiwiZG9tQXR0ciIsImlzVmFsaWRQYXR0ZXJuIiwidmFsdWUiLCJtYXRjaCIsInRoYXQiLCJfaW5wdXRLZXlQcmVzcyIsImV2ZW50IiwiY2hhciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImtleUNvZGUiLCJwb3NpdGlvbiIsImdldEN1cnNvclBvc2l0aW9uIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJvZmZzZXQiLCJpIiwiZm9ybWF0Q2hhcmFjdGVycyIsImluZGV4T2YiLCJmdXR1cmVWYWx1ZSIsInN1YnN0cmluZyIsInBhdHRlcm5XaXRoRW1wdHkiLCJzZXRDdXJzb3JQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaW5wdXRGb2N1cyIsInNldFRpbWVvdXQiLCJwYXR0ZXJuU3RyaW5nIiwicmVwbGFjZSIsIl9pbnB1dEtleURvd24iLCJjb25zb2xlIiwibG9nIiwiX2lucHV0Qmx1ciIsImRvY3VtZW50Iiwic2VsZWN0aW9uIiwiZm9jdXMiLCJzZWxlY3RSYW5nZSIsImNyZWF0ZVJhbmdlIiwibW92ZVN0YXJ0IiwidGV4dCIsInNlbGVjdGlvblN0YXJ0IiwiY3JlYXRlVGV4dFJhbmdlIiwicmFuZ2UiLCJtb3ZlIiwic2VsZWN0Iiwic2VsZWN0aW9uRW5kIiwiZ2V0QXR0cmlidXRlIiwicGxhY2Vob2xkZXIiLCJfaW5pdFBhdHRlcm4iLCJmb3JtYXR0ZWRQYXR0ZXJuU3RyIiwiZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciIsIlJlZ0V4cCIsImJpbmQiLCJfaW5wdXRLZXl1cCIsIm9sZFZhbHVlIiwicmVtb3ZlUGF0dGVybkV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlUHJlZml4RXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGllIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUwsQ0FBU1osSUFBVCxDQUFjNEUsbUJBQWQsQ0FBa0MsT0FBbEMsRUFBMkMsS0FBS0osV0FBaEQ7QUFDRDtBQUNGLENBSkQ7O0FBTUE5RSxLQUFLLENBQUNTLFNBQU4sQ0FBZ0IwRSxHQUFoQixHQUFzQixZQUFZO0FBQ2hDLE1BQUksS0FBSzVFLE9BQUwsQ0FBYWUsT0FBakIsRUFBMEI7QUFDeEIsU0FBSzBELDJCQUFMO0FBQ0QsR0FGRCxNQUVPLElBQUksS0FBS3pFLE9BQUwsQ0FBYVksTUFBakIsRUFBeUI7QUFDOUIsU0FBSzhELDBCQUFMO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FQRDs7QUFTQWpGLEtBQUssQ0FBQ1MsU0FBTixDQUFnQlcsU0FBaEIsR0FBNEIsWUFBWTtBQUN0QyxPQUFLRixHQUFMLENBQVNaLElBQVQsQ0FBY3NCLEtBQWQsR0FBdUIsR0FBRSxLQUFLckIsT0FBTCxDQUFhWSxNQUFPLElBQUcsS0FBS0QsR0FBTCxDQUFTWixJQUFULENBQWNzQixLQUFNLEVBQXBFO0FBQ0QsQ0FGRCIsImZpbGUiOiJ0b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvdG9vbGtpdFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvdG9vbGtpdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAc3BpcmFsLXRvb2xraXQvdG9vbGtpdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5cbnJlcXVpcmUoJy4vaW5wdXQnKTtcblxucmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2xvY2tlcicpO1xucmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2Zvcm0nKTtcbiIsIlxuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpO1xuY29uc3QgSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0JykuZGVmYXVsdDtcblxuc2YuaW5zdGFuY2VzQ29udHJvbGxlci5yZWdpc3Rlckluc3RhbmNlVHlwZShJbnB1dCwgJ3NmLWpzLWlucHV0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IElucHV0OyAvLyBFUzYgZGVmYXVsdCBleHBvcnQgd2lsbCBub3QgZXhwb3NlIHVzIGFzIGdsb2JhbFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuaW1wb3J0IGNvcmUgZnJvbSAnQHNwaXJhbC10b29sa2l0L2NvcmUnO1xuXG5jb25zdCBJbnB1dCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLl9jb25zdHJ1Y3Qoc2YsIG5vZGUsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBAbGVuZHMgc2YuRm9ybS5wcm90b3R5cGVcbiAqL1xuSW5wdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjb3JlLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG5cbi8qKlxuICogTmFtZSB0byByZWdpc3RlclxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuSW5wdXQucHJvdG90eXBlLm5hbWUgPSAnaW5wdXQnO1xuXG5JbnB1dC5wcm90b3R5cGUuX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLmluaXQoc2YsIG5vZGUsIG9wdGlvbnMpOyAvLyBjYWxsIHBhcmVudFxuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgLy8gaWYgd2UgcGFzcyBvcHRpb25zIGV4dGVuZCBhbGwgb3B0aW9ucyBieSBwYXNzZWQgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9IHNmLnRvb2xzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gRWxlbWVudHNcbiAgdGhpcy5lbHMgPSB7XG4gICAgbm9kZSxcbiAgfTtcblxuICBpZiAodGhpcy5vcHRpb25zLnByZWZpeCkge1xuICAgIHRoaXMuc2V0UHJlZml4KCk7XG4gICAgdGhpcy5hZGRQcmVmaXhFdmVudExpc3RlbmVycygpO1xuICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5wYXR0ZXJuKSB7XG4gICAgdGhpcy5zZXR1cFBhdHRlcm4oKTtcbiAgICB0aGlzLmFkZFBhdHRlcm5FdmVudExpc3RlbmVycygpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQG92ZXJyaWRlXG4gKiBAaW5oZXJpdERvY1xuICogQGVudW0ge3N0cmluZ31cbiAqL1xuSW5wdXQucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7XG4gIC8qKlxuICAgICAqICBQYXR0ZXJuIG9mIGlucHV0XG4gICAgICovXG4gIHBhdHRlcm46IHtcbiAgICBkb21BdHRyOiAnZGF0YS1wYXR0ZXJuJyxcbiAgfSxcbiAgLyoqXG4gICAgICogIFByZWZpeCBvZiAgaW5wdXRcbiAgICAgKi9cbiAgcHJlZml4OiB7XG4gICAgZG9tQXR0cjogJ2RhdGEtcHJlZml4JyxcbiAgfSxcbn07XG5cbi8qKlxuICogU2V0dXAgcGF0dGVyblxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbklucHV0LnByb3RvdHlwZS5pc1ZhbGlkUGF0dGVybiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWxzLm5vZGUudmFsdWUubWF0Y2godGhpcy5wYXR0ZXJuKTtcbn07XG5cbklucHV0LnByb3RvdHlwZS5hZGRQYXR0ZXJuRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIHRoaXMuX2lucHV0S2V5UHJlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBjaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGF0LmVscy5ub2RlO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhhdC5nZXRDdXJzb3JQb3NpdGlvbigpO1xuXG4gICAgaWYgKGNoYXIubGVuZ3RoID4gMCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBvZmZzZXQgPSAxO1xuICAgICAgZm9yIChsZXQgaSA9IHBvc2l0aW9uOyBpIDwgdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoYXQuZm9ybWF0Q2hhcmFjdGVycy5pbmRleE9mKHZhbHVlW2ldKSAhPT0gLTEpIHtcbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBmdXR1cmVWYWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBwb3NpdGlvbiArIG9mZnNldCAtIDEpICsgY2hhciArIHZhbHVlLnN1YnN0cmluZyhwb3NpdGlvbiArIG9mZnNldCwgdmFsdWUubGVuZ3RoKTtcblxuICAgICAgaWYgKCFmdXR1cmVWYWx1ZS5tYXRjaCh0aGF0LnBhdHRlcm5XaXRoRW1wdHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuZWxzLm5vZGUudmFsdWUgPSBmdXR1cmVWYWx1ZTtcbiAgICAgIHRoYXQuc2V0Q3Vyc29yUG9zaXRpb24ocG9zaXRpb24gKyBvZmZzZXQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5faW5wdXRLZXlQcmVzcyk7XG5cbiAgdGhpcy5faW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGF0LmVscy5ub2RlLnZhbHVlID09PSAnJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9IHRoYXQucGF0dGVyblN0cmluZy5yZXBsYWNlKC9bXlxcLVxcKFxcKVxcW1xcXVxcOlxcLlxcLFxcJFxcJVxcQFxcIFxcL10vZywgJ18nKTtcbiAgICAgICAgdGhhdC5zZXRDdXJzb3JQb3NpdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfTtcbiAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2lucHV0Rm9jdXMpO1xuXG4gIHRoaXMuX2lucHV0S2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoYXQuZWxzLm5vZGU7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGF0LmdldEN1cnNvclBvc2l0aW9uKCk7XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0Nikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IHBvc2l0aW9uIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICBpZiAodGhhdC5mb3JtYXRDaGFyYWN0ZXJzLmluZGV4T2YodmFsdWVbaV0pICE9PSAtMSkge1xuICAgICAgICAgIG9mZnNldCAtPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZ1dHVyZVZhbHVlID0gYCR7dmFsdWUuc3Vic3RyaW5nKDAsIHBvc2l0aW9uICsgb2Zmc2V0IC0gMSl9XyR7dmFsdWUuc3Vic3RyaW5nKHBvc2l0aW9uICsgb2Zmc2V0LCB2YWx1ZS5sZW5ndGgpfWA7XG5cbiAgICAgIGlmICghZnV0dXJlVmFsdWUubWF0Y2godGhhdC5wYXR0ZXJuV2l0aEVtcHR5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhmdXR1cmVWYWx1ZSk7XG4gICAgICB0aGF0LmVscy5ub2RlLnZhbHVlID0gZnV0dXJlVmFsdWU7XG4gICAgICB0aGF0LnNldEN1cnNvclBvc2l0aW9uKHBvc2l0aW9uICsgb2Zmc2V0IC0gMSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBpZiAoY2hhci5tYXRjaCgvXFxXLykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9pbnB1dEtleURvd24pO1xuXG4gIHRoaXMuX2lucHV0Qmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoYXQuZWxzLm5vZGUudmFsdWUubWF0Y2godGhhdC5wYXR0ZXJuKSkge1xuICAgICAgdGhhdC5lbHMubm9kZS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfTtcbiAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faW5wdXRCbHVyKTtcbn07XG5cbklucHV0LnByb3RvdHlwZS5nZXRDdXJzb3JQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBvc2l0aW9uID0gMDtcblxuICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgdGhpcy5lbHMubm9kZS5mb2N1cygpO1xuXG4gICAgY29uc3Qgc2VsZWN0UmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcblxuICAgIHNlbGVjdFJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLXRoaXMuZWxzLm5vZGUudmFsdWUubGVuZ3RoKTtcblxuICAgIHBvc2l0aW9uID0gc2VsZWN0UmFuZ2UudGV4dC5sZW5ndGg7XG4gIH0gZWxzZSBpZiAodGhpcy5lbHMubm9kZS5zZWxlY3Rpb25TdGFydCB8fCB0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0ID09PSAnMCcpIHtcbiAgICBwb3NpdGlvbiA9IHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uU3RhcnQ7XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb247XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuc2V0Q3Vyc29yUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgaWYgKHRoaXMuZWxzLm5vZGUuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmVscy5ub2RlLmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgIHJhbmdlLm1vdmUoJ2NoYXJhY3RlcicsIHBvc2l0aW9uKTtcbiAgICByYW5nZS5zZWxlY3QoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmVscy5ub2RlLnNlbGVjdGlvblN0YXJ0KSB7XG4gICAgdGhpcy5lbHMubm9kZS5mb2N1cygpO1xuICAgIHRoaXMuZWxzLm5vZGUuc2VsZWN0aW9uU3RhcnQgPSBwb3NpdGlvbjtcbiAgICB0aGlzLmVscy5ub2RlLnNlbGVjdGlvbkVuZCA9IHBvc2l0aW9uO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZWxzLm5vZGUuZm9jdXMoKTtcbiAgfVxufTtcblxuSW5wdXQucHJvdG90eXBlLnNldHVwUGF0dGVybiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXRDaGFyYWN0ZXJzID0gdGhpcy5lbHMubm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybWF0LWNoYXJhY3RlcnMnKSB8fCAnLSgpW106LiwkJUAgLyc7XG4gIHRoaXMucGF0dGVyblN0cmluZyA9IHRoaXMub3B0aW9ucy5wYXR0ZXJuO1xuICB0aGlzLmVscy5ub2RlLnBsYWNlaG9sZGVyID0gdGhpcy5wYXR0ZXJuU3RyaW5nO1xuXG4gIGNvbnN0IF9pbml0UGF0dGVybiA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZm9ybWF0dGVkUGF0dGVyblN0ciA9ICcnO1xuICAgIGxldCBmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGF0dGVyblN0cmluZy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2hhciA9IHRoaXMucGF0dGVyblN0cmluZ1tpXTtcblxuICAgICAgaWYgKHRoaXMuZm9ybWF0Q2hhcmFjdGVycy5pbmRleE9mKGNoYXIpID49IDApIHtcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVyblN0ciArPSBjaGFyO1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyICs9IGNoYXI7XG4gICAgICB9IGVsc2UgaWYgKGNoYXIubWF0Y2goL1swLTldLykpIHtcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVyblN0ciArPSAnWzAtOV0nO1xuICAgICAgICBmb3JtYXR0ZWRQYXR0ZXJuV2l0aEVtcHR5U3RyICs9ICcoWzAtOV18XyknO1xuICAgICAgfSBlbHNlIGlmIChjaGFyLm1hdGNoKC9bYS16QS1aXS8pKSB7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5TdHIgKz0gJ1thLXpBLVpdJztcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciArPSAnKFthLXpBLVpdfF8pJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJyonKSB7XG4gICAgICAgIGZvcm1hdHRlZFBhdHRlcm5TdHIgKz0gJ1swLTlhLXpBLVpdJztcbiAgICAgICAgZm9ybWF0dGVkUGF0dGVybldpdGhFbXB0eVN0ciArPSAnKFswLTlhLXpBLVpdfF8pJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtmb3JtYXR0ZWRQYXR0ZXJuU3RyfSRgLCAnZycpO1xuICAgIHRoaXMucGF0dGVybldpdGhFbXB0eSA9IG5ldyBSZWdFeHAoYF4ke2Zvcm1hdHRlZFBhdHRlcm5XaXRoRW1wdHlTdHJ9JGAsICdnJyk7XG4gIH0uYmluZCh0aGlzKTtcblxuICBfaW5pdFBhdHRlcm4oKTtcbn07XG5cblxuLyoqXG4gKiBBZGRzIHN0YXRpYyBldmVudHMgbGlzdGVuZXJzLlxuICovXG5JbnB1dC5wcm90b3R5cGUuYWRkUHJlZml4RXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gIHRoaXMuX2lucHV0S2V5dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKTtcblxuICAgIGlmICh0aGF0LmVscy5ub2RlLnZhbHVlLmluZGV4T2Yob2xkVmFsdWUpICE9PSAwKSB7XG4gICAgICB0aGF0LmVscy5ub2RlLnZhbHVlID0gYCR7b2xkVmFsdWV9IGA7XG4gICAgfVxuICB9O1xuXG4gIGlmICh0aGlzLmVscy5ub2RlKSB7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2lucHV0S2V5dXApO1xuICB9XG59O1xuXG5JbnB1dC5wcm90b3R5cGUucmVtb3ZlUGF0dGVybkV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbHMubm9kZSkge1xuICAgIHRoaXMuZWxzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLl9pbnB1dEtleVByZXNzKTtcbiAgICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faW5wdXRGb2N1cyk7XG4gICAgdGhpcy5lbHMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faW5wdXRLZXlEb3duKTtcbiAgICB0aGlzLmVscy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9pbnB1dEJsdXIpO1xuICB9XG59O1xuXG5JbnB1dC5wcm90b3R5cGUucmVtb3ZlUHJlZml4RXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVscy5ub2RlKSB7XG4gICAgdGhpcy5lbHMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2lucHV0S2V5dXApO1xuICB9XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5vcHRpb25zLnBhdHRlcm4pIHtcbiAgICB0aGlzLnJlbW92ZVBhdHRlcm5FdmVudExpc3RlbmVycygpO1xuICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5wcmVmaXgpIHtcbiAgICB0aGlzLnJlbW92ZVByZWZpeEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbiAgZGVsZXRlIHRoaXM7XG59O1xuXG5JbnB1dC5wcm90b3R5cGUuc2V0UHJlZml4ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVscy5ub2RlLnZhbHVlID0gYCR7dGhpcy5vcHRpb25zLnByZWZpeH0gJHt0aGlzLmVscy5ub2RlLnZhbHVlfWA7XG59O1xuXG5leHBvcnQgeyBJbnB1dCBhcyBkZWZhdWx0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sa2l0LmpzIiwic291cmNlUm9vdCI6IiJ9