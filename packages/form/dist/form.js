(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@spiral-toolkit/core"));
	else if(typeof define === 'function' && define.amd)
		define("@spiral-toolkit/form", ["@spiral-toolkit/core"], factory);
	else if(typeof exports === 'object')
		exports["@spiral-toolkit/form"] = factory(require("@spiral-toolkit/core"));
	else
		root["@spiral-toolkit/form"] = factory(root["@spiral-toolkit/core"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__) {
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

/***/ "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css":
/*!**************************************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "[data-form-message] ~ [data-form-hint] {\r\n  display: none;\r\n}\r\n\r\n.is-invalid[data-message-placeholder]>.invalid-feedback,\r\n.is-invalid[data-field]>.invalid-feedback {\r\n  display: block;\r\n}\r\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;;EAEE,cAAc;AAChB","file":"styles.css","sourcesContent":["[data-form-message] ~ [data-form-hint] {\r\n  display: none;\r\n}\r\n\r\n.is-invalid[data-message-placeholder]>.invalid-feedback,\r\n.is-invalid[data-field]>.invalid-feedback {\r\n  display: block;\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!**************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*************************************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

/***/ }),

/***/ "./src/Form.js":
/*!*********************!*\
  !*** ./src/Form.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core");
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formToObject */ "./src/formToObject.js");
/* harmony import */ var _formToObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formToObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formMessages */ "./src/formMessages.js");
/* harmony import */ var _formMessages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formMessages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iterateInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iterateInputs */ "./src/iterateInputs.js");
/* harmony import */ var _iterateInputs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iterateInputs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
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
      el.value = value; // TODO: That wont work for radiogroups, etc.
    }
  });
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

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/formMessages.js":
/*!*****************************!*\
  !*** ./src/formMessages.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable max-len */

/* eslint-disable no-underscore-dangle */

/* eslint-disable no-param-reassign */

/* eslint-disable no-multi-assign */

/* eslint-disable no-template-curly-in-string */
const sf = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core");

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

/***/ }),

/***/ "./src/formToObject.js":
/*!*****************************!*\
  !*** ./src/formToObject.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const sf = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core");

const Form = __webpack_require__(/*! ./Form */ "./src/Form.js").default;

sf.registerInstanceType(Form, 'js-sf-form');
module.exports = Form; // ES6 default export will not expose us as global

/***/ }),

/***/ "./src/iterateInputs.js":
/*!******************************!*\
  !*** ./src/iterateInputs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./styles.css */ "../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!./src/styles.css");

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

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "@spiral-toolkit/core":
/*!***************************************!*\
  !*** external "@spiral-toolkit/core" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__spiral_toolkit_core__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybU1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzP2YwZjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJGb3JtIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJqc29uT25seSIsIndpbmRvdyIsIkZvcm1EYXRhIiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJpZCIsInZhbHVlIiwiZG9tQXR0ciIsInVybCIsIm1ldGhvZCIsImxvY2tUeXBlIiwibWVzc2FnZXNUeXBlIiwibWVzc2FnZXMiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwidXNlQWpheCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiYWpheENhbGxiYWNrIiwiYmVmb3JlU3VibWl0Q2FsbGJhY2siLCJhZnRlclN1Ym1pdENhbGxiYWNrIiwiaGVhZGVycyIsIkFjY2VwdCIsImdsb2JhbCIsImluc3RhbmNlcyIsImZvcm0iLCJmb3JtTWVzc2FnZXMiLCJkZWZhdWx0cyIsIm9uU3VibWl0IiwiZ2V0SW5zdGFuY2UiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZU1lc3NhZ2VzIiwiZGF0YSIsImdldEZvcm1EYXRhIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRyaWdnZXIiLCJzZW5kIiwibG9jayIsImFkZEluc3RhbmNlIiwidHlwZSIsIndhcm4iLCJvblByb2dyZXNzIiwicHJvZ3Jlc3MiLCJ1bmxvY2siLCJyZW1vdmVJbnN0YW5jZSIsInNob3dGb3JtTWVzc2FnZSIsInNob3dGaWVsZE1lc3NhZ2UiLCJzaG93RmllbGRzTWVzc2FnZXMiLCJzaG93TWVzc2FnZXMiLCJyZW1vdmVNZXNzYWdlIiwicHJvY2Vzc0Fuc3dlciIsImFuc3dlciIsInNob3dVbmtub3duIiwic2V0RmllbGRWYWx1ZXMiLCJ2YWx1ZXMiLCJlbCIsInNmU2V0VmFsdWUiLCJvcHRDYWxsYmFjayIsImZuIiwiZXZhbCIsImNhbGwiLCJzZW5kT3B0aW9ucyIsInRoYXQiLCJhamF4IiwidGhlbiIsIkZvcm1Ub09iamVjdCIsInNldE9wdGlvbnMiLCJvcHQiLCJhZGQiLCJET01Ob2RlIiwiZXZlbnRUeXBlIiwiZXZlbnRGdW5jdGlvbiIsImRpZSIsInJlbW92ZUFsbCIsInJlcXVpcmUiLCJ0ZW1wbGF0ZSIsImNsb3NlIiwicGxhY2UiLCJsZXZlbHMiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJzZWxlY3RvciIsImZpZWxkIiwiZmllbGRFbGVtZW50IiwiZmllbGRUZW1wbGF0ZSIsImZpZWxkUGxhY2UiLCJmaWVsZENsYXNzZXMiLCJtZXNzYWdlIiwiZGVidWciLCJub3RpY2UiLCJkYW5nZXIiLCJjcml0aWNhbCIsImFsZXJ0IiwiZW1lcmdlbmN5IiwicHJlcGFyZU1lc3NhZ2VPYmplY3QiLCJ0ZXh0IiwibW9kdWxlIiwiZXhwb3J0cyIsImlzTXNnIiwia2V5cyIsImZvckVhY2giLCJlcnJvcnMiLCJ3YXJuaW5ncyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJfbWVzc2FnZXMiLCJtIiwiY2xvc2VIYW5kbGVyIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZmllbGRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzcGxpY2UiLCJpbmRleE9mIiwicGFyZW50IiwidHBsIiwiaXRlbSIsImhhc093blByb3BlcnR5IiwicmVwbGFjZSIsInRwbEVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJtc2dFbCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInB1c2giLCJpc0NvbnRhaW5lciIsImRvbVRvb2xzIiwiY2xvc2VzdCIsImN1cnJlbnRNc2dFbCIsIm5leHRTaWJsaW5nIiwiZmllbGRDbG9zZSIsIm5vdEZvdW5kIiwibXNnT2JqIiwiY29udGFpbmVyIiwiZm9ybVJlZiIsImtleVJlZ2V4IiwiJGZvcm0iLCIkZm9ybUVsZW1lbnRzIiwiZm9ybU9iaiIsInNldEZvcm0iLCJzZXRGb3JtRWxlbWVudHMiLCJzZXRGb3JtT2JqIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc0RvbU5vZGUiLCJub2RlVHlwZSIsImFyciIsImNhbGxiYWNrIiwiaSIsImFkZENoaWxkIiwicmVzdWx0IiwiZG9tTm9kZSIsIm5vZGVOYW1lIiwiY2hlY2tlZCIsIkRPTWNoaWxkcyIsImNoaWxkIiwidGVzdCIsImRpc2FibGVkIiwibWF0Y2giLCJkZWZhdWx0IiwicmVnaXN0ZXJJbnN0YW5jZVR5cGUiLCJmaW5kTm9kZXMiLCJuYW1lcyIsInByZWZpeCIsInBhcnRPZlNlbGVjdG9yIiwidG9TdHJpbmciLCJzZWwiLCJub2RlcyIsIm1heCIsIm9iaiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLCtHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLDJDQUEyQyxvQkFBb0IsS0FBSywrR0FBK0cscUJBQXFCLEtBQUssV0FBVyxpRUFBaUUsVUFBVSxNQUFNLE1BQU0sVUFBVSxzRkFBc0Ysb0JBQW9CLEtBQUssK0dBQStHLHFCQUFxQixLQUFLLE9BQU87QUFDL2tCO0FB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M0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUcsYUFBakIsQzs7Ozs7Ozs7Ozs7QUNsRkEsVUFBVSxtQkFBTyxDQUFDLDZKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyw0SkFBNEU7O0FBRTlHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxrRSIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiLCBbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIltkYXRhLWZvcm0tbWVzc2FnZV0gfiBbZGF0YS1mb3JtLWhpbnRdIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pcy1pbnZhbGlkW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcl0+LmludmFsaWQtZmVlZGJhY2ssXFxyXFxuLmlzLWludmFsaWRbZGF0YS1maWVsZF0+LmludmFsaWQtZmVlZGJhY2sge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQlwiLFwiZmlsZVwiOlwic3R5bGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJbZGF0YS1mb3JtLW1lc3NhZ2VdIH4gW2RhdGEtZm9ybS1oaW50XSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXMtaW52YWxpZFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXJdPi5pbnZhbGlkLWZlZWRiYWNrLFxcclxcbi5pcy1pbnZhbGlkW2RhdGEtZmllbGRdPi5pbnZhbGlkLWZlZWRiYWNrIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuaW1wb3J0IGNvcmUgZnJvbSAnQHNwaXJhbC10b29sa2l0L2NvcmUnO1xuXG5pbXBvcnQgRm9ybVRvT2JqZWN0IGZyb20gJy4vZm9ybVRvT2JqZWN0JztcbmltcG9ydCBmb3JtTWVzc2FnZXMgZnJvbSAnLi9mb3JtTWVzc2FnZXMnO1xuaW1wb3J0IGl0ZXJhdGVJbnB1dHMgZnJvbSAnLi9pdGVyYXRlSW5wdXRzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5sZXQgaWRDb3VudGVyID0gMTtcblxuXG4vKipcbiAqIFNwaXJhbCBGb3Jtc1xuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAgRG9tTm9kZSBvZiBmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIHRvIG92ZXJyaWRlIGRlZmF1bHRcbiAqIEBjb25zdHJ1Y3RvciBGb3JtXG4gKiBAZXh0ZW5kcyBCYXNlRE9NQ29uc3RydWN0b3JcbiAqL1xuY29uc3QgRm9ybSA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLl9jb25zdHJ1Y3Qoc2YsIG5vZGUsIG9wdGlvbnMpO1xufTtcblxuXG4vKipcbiAqIEBsZW5kcyBzZi5Gb3JtLnByb3RvdHlwZVxuICovXG5Gb3JtLnByb3RvdHlwZSA9IGNvcmUuY3JlYXRlTW9kdWxlUHJvdG90eXBlKCk7XG5cbi8qKlxuICogTmFtZSB0byByZWdpc3RlclxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuRm9ybS5wcm90b3R5cGUubmFtZSA9ICdmb3JtJztcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGNhbGwgb24gbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICogQHByaXZhdGVcbiAqL1xuRm9ybS5wcm90b3R5cGUuX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLmluaXQoc2YsIG5vZGUsIG9wdGlvbnMpO1xuICB0aGlzLm9wdGlvbnMuanNvbk9ubHkgPSB0aGlzLm9wdGlvbnMuanNvbk9ubHkgJiYgISF3aW5kb3cuRm9ybURhdGE7XG4gIHRoaXMubWl4TWVzc2FnZXNPcHRpb25zKCk7XG4gIC8vIHRoaXMub3B0aW9ucy5maWxsRnJvbSAmJiB0aGlzLmZpbGxGaWVsZHNGcm9tKCk7IC8vIGlkIHJlcXVpcmVkIHRvIGZpbGwgZm9ybVxuXG4gIC8qKlxuICAgICAqIEBleHRlbmRzIERPTUV2ZW50c1xuICAgICAqIEB0eXBlIHtET01FdmVudHN9XG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKiAqL1xuICB0aGlzLkRPTUV2ZW50cyA9IG5ldyB0aGlzLnNmLmhlbHBlcnMuRE9NRXZlbnRzKCk7XG4gIHRoaXMuYWRkRXZlbnRzKCk7XG5cbiAgdGhpcy5ldmVudHMgPSBuZXcgdGhpcy5zZi5jb3JlLkV2ZW50cyhbJ2JlZm9yZVNlbmQnLCAnc3VjY2VzcycsICdlcnJvcicsICdhbHdheXMnXSk7XG4gIGNvcmUuaXRlcmF0ZUlucHV0cyA9IGl0ZXJhdGVJbnB1dHM7XG59O1xuXG4vKipcbiAqIEBvdmVycmlkZVxuICogQGluaGVyaXREb2NcbiAqIEBlbnVtIHtPYmplY3R9XG4gKiBAZGVwcmVjYXRlZFxuICovXG5Gb3JtLnByb3RvdHlwZS5vcHRpb25zVG9HcmFiID0ge1xuICAvKipcbiAgICAgKiBMaW5rIHRvIGZvcm1cbiAgICAgKi9cbiAgY29udGV4dDoge1xuICAgIHByb2Nlc3Nvcihub2RlKSB7IC8vIFByb2Nlc3NvclxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogTGluayB0byAndGhpcydcbiAgICAgKi9cbiAgc2VsZjoge1xuICAgIHByb2Nlc3NvcigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gIH0sXG4gIGlkOiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgdmFsdWU6IGBmb3JtOiR7aWRDb3VudGVyKyt9YCxcbiAgICBkb21BdHRyOiAnaWQnLFxuICB9LFxuICAvKipcbiAgICAgKiBVUkwgdG8gc2VuZCBmb3JtIChpZiBhamF4IGZvcm0pIDxiPkRlZmF1bHQ6IFwiL1wiPC9iPlxuICAgICAqL1xuICB1cmw6IHtcbiAgICBkb21BdHRyOiAnYWN0aW9uJyxcbiAgICB2YWx1ZTogJy8nLFxuICB9LFxuICAvKipcbiAgICAgKiBNZXRob2QgdG8gc2VuZCB0byBzZW5kIGZvcm0gKGlmIGFqYXggZm9ybSkgPGI+RGVmYXVsdDogXCJQT1NUXCI8L2I+XG4gICAgICovXG4gIG1ldGhvZDoge1xuICAgIGRvbUF0dHI6ICdtZXRob2QnLFxuICAgIHZhbHVlOiAnUE9TVCcsXG4gIH0sXG4gIC8qKlxuICAgICAqIExvY2sgdHlwZSB3aGVuIGZvcm0gc2VuZGluZyA8Yj5EZWZhdWx0OiBcImRlZmF1bHRcIjwvYj4gQHNlZSBzZi5sb2NrXG4gICAgICovXG4gIGxvY2tUeXBlOiB7XG4gICAgdmFsdWU6ICdkZWZhdWx0JyxcbiAgICBkb21BdHRyOiAnZGF0YS1sb2NrLXR5cGUnLFxuICB9LFxuICAvKipcbiAgICAgKiBGb3JjZSB0byBub3QgdXNlIEZvcm1EYXRhIGV2ZW4gaWYgaXQncyBhdmFpbGFibGVcbiAgICAgKi9cbiAganNvbk9ubHk6IHtcbiAgICB2YWx1ZTogZmFsc2UsXG4gICAgZG9tQXR0cjogJ2RhdGEtanNvbi1vbmx5JyxcbiAgfSxcbiAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgbWVzc2FnZXNUeXBlOiB7XG4gICAgdmFsdWU6ICdzcGlyYWwnLFxuICAgIGRvbUF0dHI6ICdkYXRhLW1lc3NhZ2VzLXR5cGUnLFxuICB9LFxuICAvKipcbiAgICAgKiBQYXNzIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgZm9ybSBtZXNzYWdlc1xuICAgICAqL1xuICBtZXNzYWdlczoge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkb21BdHRyOiAnZGF0YS1tZXNzYWdlcycsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCwgc2VsZikge1xuICAgICAgaWYgKCF2YWwpIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybSBKU09OLnBhcnNlIGVycm9yOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZi52YWx1ZSwgdmFsKTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBVc2UgYWpheCB0byBzdWJtaXQgZm9ybSA8Yj5EZWZhdWx0OiB0cnVlPC9iPlxuICAgICAqL1xuICB1c2VBamF4OiB7IC8vIEF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IHRydWUsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS11c2UtYWpheCcsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCkgeyAvLyBwcm9jZXNzb3IgdG8gcHJvY2VzcyBkYXRhIGJlZm9yZSByZXR1cm5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHZhbCA9ICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpID8gdmFsLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHZhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIENhbGxiYWNrIGFmdGVyIGZvcm0gc3VibWl0dGluZyA8Yj5EZWZhdWx0OiBmYWxzZTwvYj5cbiAgICAgKiA8YnIvPlxuICAgICAqIDxiPiBFeGFtcGxlIDwvYj5cbiAgICAgKiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICAgKiAgLy9vcHRpb25zIGNvbnRhaW5zIGFsbCBvcHRpb25zIGFmdGVyIHNlbmRcbiAgICAgKiB9XG4gICAgICovXG4gIGFqYXhDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWNhbGxiYWNrJyxcbiAgfSxcbiAgYmVmb3JlU3VibWl0Q2FsbGJhY2s6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogZmFsc2UsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1iZWZvcmUtc3VibWl0JyxcbiAgfSxcbiAgYWZ0ZXJTdWJtaXRDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWFmdGVyLXN1Ym1pdCcsXG4gIH0sXG4gIGhlYWRlcnM6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtaGVhZGVycycsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCwgc2VsZikge1xuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UodmFsKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gSlNPTi5wYXJzZSBlcnJvcjogJywgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHNlbGYudmFsdWUsIHZhbCk7XG4gICAgfSxcbiAgfSxcbn07XG5cbkZvcm0ucHJvdG90eXBlLm1peE1lc3NhZ2VzT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsID0gdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlcy5mb3JtO1xuICB0aGlzLm9wdGlvbnMubWVzc2FnZXMgPSB7XG4gICAgLi4uZm9ybU1lc3NhZ2VzLmRlZmF1bHRzLFxuICAgIC4uLmdsb2JhbCAmJiBnbG9iYWwubWVzc2FnZXMgJiYgZ2xvYmFsLm1lc3NhZ2VzW3RoaXMub3B0aW9ucy5tZXNzYWdlc1R5cGVdLFxuICAgIC4uLnRoaXMub3B0aW9ucy5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbi8qKlxuICogQ2FsbCBvbiBmb3JtIHN1Ym1pdFxuICogQHBhcmFtIHtFdmVudH0gZSBzdWJtaXQgZXZlbnRcbiAqL1xuRm9ybS5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAodGhpcy5zZi5nZXRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICAvLyBPbiBsb2NrIHdlIHNob3VsZCduIGRvIGFueSBhY3Rpb25zXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5yZW1vdmVNZXNzYWdlcygpO1xuXG4gIHRoaXMub3B0aW9ucy5kYXRhID0gdGhpcy5nZXRGb3JtRGF0YSgpO1xuXG4gIC8vIFdlIGNhbiBzZW5kIGZpbGVzIG9ubHkgd2l0aCBGb3JtRGF0YVxuICAvLyBJZiBmb3JtIGNvbnRhaW4gZmlsZXMgYW5kIG5vIEZvcm1EYXRhIHRoYW4gZGlzYWJsZSBhamF4XG4gIGlmICghdGhpcy5vcHRpb25zLmpzb25Pbmx5ICYmIHRoaXMub3B0aW9ucy5jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdmaWxlJ11cIikubGVuZ3RoICE9PSAwKSB7XG4gICAgdGhpcy5vcHRpb25zLnVzZUFqYXggPSBmYWxzZTtcbiAgfVxuICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdiZWZvcmVTZW5kJywgdGhpcy5vcHRpb25zKTtcbiAgLy8gc2YuZXZlbnRzLnBlcmZvcm1BY3Rpb24oXCJiZWZvcmVTdWJtaXRcIiwgdGhpcy5vcHRpb25zKTtcbiAgLy8gdGhpcy5ldmVudHMucGVyZm9ybUFjdGlvbihcImJlZm9yZVN1Ym1pdFwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMudXNlQWpheCkge1xuICAgIHRoaXMuc2VuZCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogTG9ja2VyLiBBZGQgb3IgcmVtb3ZlLlxuICovXG5Gb3JtLnByb3RvdHlwZS5sb2NrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XG4gIGlmICghbG9jaykge1xuICAgIGNvbnNvbGUud2FybihcIllvdSB0cnkgdG8gYWRkICdsb2NrJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLm9wdGlvbnMub25Qcm9ncmVzcyA9IGxvY2sucHJvZ3Jlc3M7XG59O1xuXG4vKipcbiAqIExvY2tlci4gQWRkIG9yIHJlbW92ZS5cbiAqL1xuRm9ybS5wcm90b3R5cGUudW5sb2NrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXRoaXMuc2YucmVtb3ZlSW5zdGFuY2UoJ2xvY2snLCB0aGlzLm5vZGUpKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byByZW1vdmUgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZFwiKTtcbiAgfVxufTtcblxuLy8gRm9ybSBtZXNzYWdlc1xuRm9ybS5wcm90b3R5cGUuc2hvd0Zvcm1NZXNzYWdlID0gZm9ybU1lc3NhZ2VzLnNob3dGb3JtTWVzc2FnZTtcbkZvcm0ucHJvdG90eXBlLnNob3dGaWVsZE1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMuc2hvd0ZpZWxkTWVzc2FnZTtcbkZvcm0ucHJvdG90eXBlLnNob3dGaWVsZHNNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5zaG93RmllbGRzTWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5zaG93TWVzc2FnZXMgPSBmb3JtTWVzc2FnZXMuc2hvd01lc3NhZ2VzO1xuRm9ybS5wcm90b3R5cGUucmVtb3ZlTWVzc2FnZXMgPSBmb3JtTWVzc2FnZXMucmVtb3ZlTWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVNZXNzYWdlID0gZm9ybU1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2U7XG5cbkZvcm0ucHJvdG90eXBlLnByb2Nlc3NBbnN3ZXIgPSBmdW5jdGlvbiAoYW5zd2VyLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlc1R5cGUpIHtcbiAgICB0aGlzLnNob3dNZXNzYWdlcyhhbnN3ZXIsIHNob3dVbmtub3duKTtcbiAgfVxufTtcblxuRm9ybS5wcm90b3R5cGUuc2V0RmllbGRWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHRoaXMuc2YuaXRlcmF0ZUlucHV0cyh0aGlzLm5vZGUsIHZhbHVlcywgKGVsLCB2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZWwuc2ZTZXRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwuc2ZTZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7IC8vIFRPRE86IFRoYXQgd29udCB3b3JrIGZvciByYWRpb2dyb3VwcywgZXRjLlxuICAgIH1cbiAgfSk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5vcHRDYWxsYmFjayA9IGZ1bmN0aW9uIChvcHRpb25zLCB0eXBlKSB7XG4gIGlmIChvcHRpb25zW3R5cGVdKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcbiAgICBjb25zdCBmbiA9IGV2YWwob3B0aW9uc1t0eXBlXSk7XG4gICAgaWYgKHR5cGVvZiAoZm4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2VuZCBmb3JtIHRvIHNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IHNlbmRPcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoc2VuZE9wdGlvbnMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG4gIGlmICh0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYmVmb3JlU3VibWl0Q2FsbGJhY2snKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5sb2NrKCk7XG4gIHRoaXMuc2YuYWpheC5zZW5kKHNlbmRPcHRpb25zKS50aGVuKFxuICAgIChhbnN3ZXIpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBzZW5kT3B0aW9ucyk7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICB0aGF0LmV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LFxuICApLnRoZW4oKGFuc3dlcikgPT4ge1xuICAgIHRoYXQubG9jayh0cnVlKTtcbiAgICB0aGF0LnByb2Nlc3NBbnN3ZXIoYW5zd2VyKTtcbiAgICB0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYWZ0ZXJTdWJtaXRDYWxsYmFjaycpO1xuICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Fsd2F5cycsIHNlbmRPcHRpb25zKTtcbiAgfSk7XG5cbiAgLy8gVG8gY2FuY2VsIHJlcXVlc3Q6XG4gIC8vIGlmICh0aGlzLnNmLmFqYXguY2FuY2VsKSB0aGlzLnNmLmFqYXguY2FuY2VsKCk7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkZvcm0ucHJvdG90eXBlLmdldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5qc29uT25seSkge1xuICAgIHJldHVybiBuZXcgRm9ybURhdGEodGhpcy5vcHRpb25zLmNvbnRleHQpO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKGBGb3JtIFxcYCR7dGhpcy5vcHRpb25zLmNvbnRleHR9XFxgIHdlcmUgcHJvY2Vzc2VkIHdpdGhvdXQgRm9ybURhdGEuYCk7XG4gIHJldHVybiBuZXcgRm9ybVRvT2JqZWN0KHRoaXMub3B0aW9ucy5jb250ZXh0KTtcbn07XG5cbi8qKlxuICogU2V0IG9wdGlvbnMgKG92ZXJ3cml0ZSBjdXJyZW50KVxuICogQHBhcmFtIHtPYmplY3R9IG9wdCBvcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0KSB7XG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHQpO1xufTtcblxuLyoqXG4gKiBBZGQgYWxsIGV2ZW50cyBmb3IgZm9ybXNcbiAqL1xuRm9ybS5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgdGhpcy5ET01FdmVudHMuYWRkKFtcbiAgICB7XG4gICAgICBET01Ob2RlOiB0aGlzLm9wdGlvbnMuY29udGV4dCxcbiAgICAgIGV2ZW50VHlwZTogJ3N1Ym1pdCcsXG4gICAgICBldmVudEZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGhhdC5vblN1Ym1pdC5jYWxsKHRoYXQsIGUpO1xuICAgICAgfSxcbiAgICB9LFxuICBdKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHZhcmlhYmxlcyBhbmQgZGllXG4gKi9cbkZvcm0ucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5ET01FdmVudHMucmVtb3ZlQWxsKCk7XG4gIC8vIFRPRE8gZG9uJ3Qgd2UgbmVlZCB0byByZW1vdmUgaXQncyBhZGRvbnMgYW5kIHBsdWdpbnM/XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZyAqL1xuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpO1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgLy8gdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiYWxlcnQgZm9ybS1tc2cgJHt0eXBlfVwiPjxidXR0b24gY2xhc3M9XCJidG4tY2xvc2VcIj7DlzwvYnV0dG9uPjxwIGNsYXNzPVwibXNnXCI+JHt0ZXh0fTwvcD48L2Rpdj4nLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC0ke3R5cGV9IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd1wiIHJvbGU9XCJhbGVydFwiPidcbiAgICArICcke3RleHR9J1xuICAgICsgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPidcbiAgICArICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPidcbiAgICArICc8L2J1dHRvbj4nXG4gICAgKyAnPC9kaXY+JyxcbiAgY2xvc2U6ICcuY2xvc2UnLFxuICBwbGFjZTogJ2JvdHRvbScsXG4gIGxldmVsczoge1xuICAgIHN1Y2Nlc3M6ICdzdWNjZXNzJywgaW5mbzogJ2luZm8nLCB3YXJuaW5nOiAnd2FybmluZycsIGVycm9yOiAnZGFuZ2VyJyxcbiAgfSxcbiAgc2VsZWN0b3I6ICdbZGF0YS1tZXNzYWdlXScsXG4gIGZpZWxkOiAnW2RhdGEtZmllbGRdJyxcbiAgZmllbGRFbGVtZW50OiAnW2RhdGEtaW5wdXRdJyxcbiAgZmllbGRUZW1wbGF0ZTogJzxkaXYgZGF0YS1tZXNzYWdlIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiIGRhdGEtZm9ybS1tZXNzYWdlPiR7dGV4dH08L2Rpdj4nLFxuICBmaWVsZFBsYWNlOiAnYm90dG9tJyxcbiAgZmllbGRDbGFzc2VzOiB7XG4gICAgc3VjY2VzczogJ2lzLXZhbGlkJywgaW5mbzogJ2lzLXZhbGlkJywgd2FybmluZzogJ2lzLWludmFsaWQnLCBlcnJvcjogJ2lzLWludmFsaWQnLFxuICB9LFxufTtcblxuLy8gT2Z0ZW4gdXNlZCBhbGlhc1xuZGVmYXVsdHMubGV2ZWxzLm1lc3NhZ2UgPSBkZWZhdWx0cy5sZXZlbHMuc3VjY2VzcztcblxuLy8gT3RoZXIgYWxpYXNlc1xuLy8gUFNSLTMgc2V2ZXJpdHkgbGV2ZWxzIG1hcHBpbmcgKGRlYnVnLCBpbmZvLCBub3RpY2UsIHdhcm5pbmcsIGVycm9yLCBjcml0aWNhbCwgYWxlcnQsIGVtZXJnZW5jeSlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9waHAtZmlnL2ZpZy1zdGFuZGFyZHMvYmxvYi9tYXN0ZXIvYWNjZXB0ZWQvUFNSLTMtbG9nZ2VyLWludGVyZmFjZS5tZFxuZGVmYXVsdHMubGV2ZWxzLmRlYnVnID0gZGVmYXVsdHMubGV2ZWxzLnN1Y2Nlc3M7XG5kZWZhdWx0cy5sZXZlbHMuaW5mbyA9IGRlZmF1bHRzLmxldmVscy5ub3RpY2UgPSBkZWZhdWx0cy5sZXZlbHMuaW5mbztcbmRlZmF1bHRzLmxldmVscy5kYW5nZXIgPSBkZWZhdWx0cy5sZXZlbHMuY3JpdGljYWwgPSBkZWZhdWx0cy5sZXZlbHMuYWxlcnQgPSBkZWZhdWx0cy5sZXZlbHMuZW1lcmdlbmN5ID0gZGVmYXVsdHMubGV2ZWxzLmVycm9yO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSkge1xuICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09ICdvYmplY3QnKSB7XG4gICAgbWVzc2FnZSA9IHsgdGV4dDogbWVzc2FnZSwgdHlwZSB9O1xuICB9XG4gIG1lc3NhZ2UudGV4dCA9IG1lc3NhZ2UudGV4dCB8fCBtZXNzYWdlLm1lc3NhZ2UgfHwgbWVzc2FnZTtcbiAgbWVzc2FnZS50eXBlID0gbWVzc2FnZS50eXBlIHx8IHR5cGU7XG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdHMsXG4gIHNob3dNZXNzYWdlcyhhbnN3ZXIsIHNob3dVbmtub3duID0gdHJ1ZSkge1xuICAgIGlmICghYW5zd2VyKSByZXR1cm47XG5cbiAgICBsZXQgaXNNc2cgPSBmYWxzZTtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgIGlmIChhbnN3ZXIuZGF0YSkge1xuICAgICAgLy8gZm9yIChjb25zdCB0eXBlIGluIHRoaXMub3B0aW9ucy5tZXNzYWdlcy5sZXZlbHMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5sZXZlbHMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgaWYgKGFuc3dlci5kYXRhW3R5cGVdKSB7XG4gICAgICAgICAgdGhpcy5zaG93Rm9ybU1lc3NhZ2UoYW5zd2VyLmRhdGFbdHlwZV0sIHRoaXMub3B0aW9ucy5tZXNzYWdlcy5sZXZlbHNbdHlwZV0pO1xuICAgICAgICAgIGlzTXNnID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhbnN3ZXIuZGF0YS5tZXNzYWdlcykge1xuICAgICAgICB0aGlzLnNob3dGaWVsZHNNZXNzYWdlcyhhbnN3ZXIuZGF0YS5tZXNzYWdlcywgJ3N1Y2Nlc3MnLCBzaG93VW5rbm93bik7XG4gICAgICAgIGlzTXNnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhbnN3ZXIuZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgdGhpcy5zaG93RmllbGRzTWVzc2FnZXMoYW5zd2VyLmRhdGEuZXJyb3JzLCAnZXJyb3InLCBzaG93VW5rbm93bik7XG4gICAgICAgIGlzTXNnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhbnN3ZXIuZGF0YS53YXJuaW5ncykge1xuICAgICAgICB0aGlzLnNob3dGaWVsZHNNZXNzYWdlcyhhbnN3ZXIuZGF0YS53YXJuaW5ncywgJ3dhcm5pbmcnLCBzaG93VW5rbm93bik7XG4gICAgICAgIGlzTXNnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzTXNnKSB7XG4gICAgICBsZXQgZXJyb3I7XG4gICAgICBpZiAoIWFuc3dlci5zdGF0dXMpIHsgLy8gTmV0d29yay5lcnJvclxuICAgICAgICBlcnJvciA9IGFuc3dlcjtcbiAgICAgIH0gZWxzZSBpZiAoYW5zd2VyLnN0YXR1cyA+IDMwMCkge1xuICAgICAgICBlcnJvciA9IGFuc3dlci5zdGF0dXMgPyBgJHthbnN3ZXIuc3RhdHVzfSBgIDogJyc7XG4gICAgICAgIGVycm9yICs9IGFuc3dlci5zdGF0dXNUZXh0ID8gYW5zd2VyLnN0YXR1c1RleHQgOiAnJztcbiAgICAgICAgZXJyb3IgKz0gYW5zd2VyLmRhdGEgJiYgIWFuc3dlci5zdGF0dXNUZXh0ID8gYW5zd2VyLmRhdGEgOiAnJztcbiAgICAgIH1cbiAgICAgIGlmIChlcnJvcikgdGhpcy5zaG93Rm9ybU1lc3NhZ2UoZXJyb3IsIHRoaXMub3B0aW9ucy5tZXNzYWdlcy5sZXZlbHMuZXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMuX21lc3NhZ2VzLmZvckVhY2goKG0pID0+IHtcbiAgICAgIGlmIChtLmNsb3NlKSB7XG4gICAgICAgIG0uY2xvc2VIYW5kbGVyID0gdGhhdC5yZW1vdmVNZXNzYWdlLmJpbmQodGhhdCwgbSk7XG4gICAgICAgIG0uY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtLmNsb3NlSGFuZGxlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVtb3ZlTWVzc2FnZShtLCBlKSB7XG4gICAgaWYgKG0uY2xvc2UpIHtcbiAgICAgIG0uY2xvc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtLmNsb3NlSGFuZGxlcik7XG4gICAgfVxuICAgIG0uZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtLmVsKTtcbiAgICBpZiAobS5maWVsZCkge1xuICAgICAgY29uc3QgZmllbGRFbCA9IG0uZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRFbGVtZW50KTtcbiAgICAgIGlmIChmaWVsZEVsKSB7XG4gICAgICAgIGZpZWxkRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW20udHlwZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbS5maWVsZC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbbS50eXBlXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlKSB7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fbWVzc2FnZXMuc3BsaWNlKHRoaXMuX21lc3NhZ2VzLmluZGV4T2YobSksIDEpO1xuICAgIH1cbiAgfSxcblxuICByZW1vdmVNZXNzYWdlcygpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAodGhpcy5fbWVzc2FnZXMpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2VzLmZvckVhY2goKG0pID0+IHtcbiAgICAgICAgdGhhdC5yZW1vdmVNZXNzYWdlKG0sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGF0Ll9tZXNzYWdlcyA9IFtdO1xuICB9LFxuXG4gIHNob3dGb3JtTWVzc2FnZShtZXNzYWdlLCB0eXBlKSB7XG4gICAgbGV0IHBhcmVudDtcbiAgICBsZXQgdHBsID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLnRlbXBsYXRlO1xuXG4gICAgbWVzc2FnZSA9IHByZXBhcmVNZXNzYWdlT2JqZWN0KG1lc3NhZ2UsIHR5cGUpO1xuXG4gICAgLy8gZm9yIChjb25zdCBpdGVtIGluIG1lc3NhZ2UpIHtcbiAgICBPYmplY3Qua2V5cyhtZXNzYWdlKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICBpZiAoIW1lc3NhZ2UuaGFzT3duUHJvcGVydHkoaXRlbSkpIHJldHVybjtcbiAgICAgIHRwbCA9IHRwbC5yZXBsYWNlKGBcXCR7JHtpdGVtfX1gLCBtZXNzYWdlW2l0ZW1dKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRwbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cGxFbGVtLmlubmVySFRNTCA9IHRwbDtcbiAgICBjb25zdCBtc2dFbCA9IHRwbEVsZW0uZmlyc3RDaGlsZDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UgPT09ICdib3R0b20nKSB7XG4gICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobXNnRWwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlID09PSAndG9wJykge1xuICAgICAgdGhpcy5ub2RlLmluc2VydEJlZm9yZShtc2dFbCwgdGhpcy5ub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSk7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobXNnRWwpO1xuICAgIH1cbiAgICB0aGlzLl9tZXNzYWdlcy5wdXNoKHsgZWw6IG1zZ0VsLCBjbG9zZTogbXNnRWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuY2xvc2UpIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzQ29udGFpbmVyXVxuICAgICAqL1xuICBzaG93RmllbGRNZXNzYWdlKGVsLCBtZXNzYWdlLCB0eXBlLCBpc0NvbnRhaW5lcikge1xuICAgIGxldCBmaWVsZCA9IGlzQ29udGFpbmVyID8gZWwgOiBzZi5oZWxwZXJzLmRvbVRvb2xzLmNsb3Nlc3QoZWwsIHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZCk7XG4gICAgbGV0IHRwbCA9IHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFRlbXBsYXRlO1xuXG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKTtcblxuICAgIGNvbnN0IGZpZWxkRWwgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZEVsZW1lbnQpO1xuICAgIGNvbnN0IGN1cnJlbnRNc2dFbCA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnNlbGVjdG9yKTtcblxuICAgIGlmIChmaWVsZEVsKSB7XG4gICAgICBmaWVsZEVsLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1t0eXBlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1t0eXBlXSk7XG4gICAgfVxuXG4gICAgLy8gZm9yIChjb25zdCBpdGVtIGluIG1lc3NhZ2UpIHtcbiAgICBPYmplY3Qua2V5cyhtZXNzYWdlKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICBpZiAoIW1lc3NhZ2UuaGFzT3duUHJvcGVydHkoaXRlbSkpIHJldHVybjtcbiAgICAgIHRwbCA9IHRwbC5yZXBsYWNlKGBcXCR7JHtpdGVtfX1gLCBtZXNzYWdlW2l0ZW1dKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRwbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cGxFbGVtLmlubmVySFRNTCA9IHRwbDtcbiAgICBjb25zdCBtc2dFbCA9IHRwbEVsZW0uZmlyc3RDaGlsZDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIGlmIChmaWVsZEVsKSB7XG4gICAgICAgIGZpZWxkLmluc2VydEJlZm9yZShtc2dFbCwgZmllbGRFbC5uZXh0U2libGluZyk7XG4gICAgICB9IGVsc2UgaWYgKCFjdXJyZW50TXNnRWwpIHtcbiAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQobXNnRWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkUGxhY2UgPT09ICd0b3AnKSB7XG4gICAgICBmaWVsZC5pbnNlcnRCZWZvcmUobXNnRWwsIGZpZWxkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZCA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkUGxhY2UpO1xuICAgICAgZmllbGQuYXBwZW5kQ2hpbGQobXNnRWwpO1xuICAgIH1cblxuICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goe1xuICAgICAgZWw6IG1zZ0VsLFxuICAgICAgY2xvc2U6IG1zZ0VsLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xvc2UpLFxuICAgICAgZmllbGQsXG4gICAgICB0eXBlLFxuICAgIH0pO1xuICB9LFxuXG4gIHNob3dGaWVsZHNNZXNzYWdlcyhtZXNzYWdlcywgdHlwZSwgc2hvd1Vua25vd24gPSB0cnVlKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgY29uc3Qgbm90Rm91bmQgPSBzZi5pdGVyYXRlSW5wdXRzKHRoaXMubm9kZSwgbWVzc2FnZXMsIChlbCwgbWVzc2FnZSkgPT4ge1xuICAgICAgdGhhdC5zaG93RmllbGRNZXNzYWdlKGVsLCBtZXNzYWdlLCB0eXBlKTtcbiAgICB9KTtcblxuICAgIGlmIChzaG93VW5rbm93bikge1xuICAgICAgbm90Rm91bmQuZm9yRWFjaCgobXNnT2JqKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1zZ09iaikuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoYXQubm9kZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZXNzYWdlLXBsYWNlaG9sZGVyPVwiJHtuYW1lfVwiXWApO1xuICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gY2hlY2sgY29udGFpbmVyLmRhdGFzZXQubWVzc2FnZVZhcmlhbnQ/IHZhcmlhbnRzIGFyZSBcImZpZWxkXCIgYW5kIFwiZm9ybVwiXG4gICAgICAgICAgICB0aGF0LnNob3dGaWVsZE1lc3NhZ2UoY29udGFpbmVyLCBtc2dPYmpbbmFtZV0sIHR5cGUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLypcbiAqIGdpdGh1Yi5jb20vc2VyYmFuZ2hpdGEvRm9ybVRvT2JqZWN0LmpzIDEuMC4xICAoYykgMjAxMyBTZXJiYW4gR2hpdGEgPHNlcmJhbmdoaXRhQGdtYWlsLmNvbT5cbiAqIEBsaWNlbmNlIE1JVFxuICovXG4vLyBDb25zdHJ1Y3Rvci5cblxuY29uc3QgRm9ybVRvT2JqZWN0ID0gZnVuY3Rpb24gKGZvcm1SZWYpIHtcbiAgaWYgKCFmb3JtUmVmKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGhpcy5mb3JtUmVmID0gZm9ybVJlZjtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHRoaXMua2V5UmVnZXggPSAvW15cXFtcXF1dKy9nO1xuICB0aGlzLiRmb3JtID0gbnVsbDtcbiAgdGhpcy4kZm9ybUVsZW1lbnRzID0gW107XG4gIHRoaXMuZm9ybU9iaiA9IHt9O1xuXG4gIGlmICghdGhpcy5zZXRGb3JtKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCF0aGlzLnNldEZvcm1FbGVtZW50cygpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuc2V0Rm9ybU9iaigpO1xufTtcblxuLy8gU2V0IHRoZSBtYWluIGZvcm0gb2JqZWN0IHdlIGFyZSB3b3JraW5nIG9uLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5zZXRGb3JtID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKHR5cGVvZiB0aGlzLmZvcm1SZWYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgdGhpcy4kZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZm9ybVJlZik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAodGhpcy5pc0RvbU5vZGUodGhpcy5mb3JtUmVmKSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gdGhpcy5mb3JtUmVmO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICB9XG5cbiAgcmV0dXJuIHRoaXMuJGZvcm07XG59O1xuXG4vLyBTZXQgdGhlIGVsZW1lbnRzIHdlIG5lZWQgdG8gcGFyc2UuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm1FbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy4kZm9ybUVsZW1lbnRzID0gdGhpcy4kZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICByZXR1cm4gdGhpcy4kZm9ybUVsZW1lbnRzLmxlbmd0aDtcbn07XG5cbi8vIENoZWNrIHRvIHNlZSBpZiB0aGUgb2JqZWN0IGlzIGEgSFRNTCBub2RlLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5pc0RvbU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICByZXR1cm4gdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmICdub2RlVHlwZScgaW4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSAxO1xufTtcblxuLy8gSXRlcmF0aW9uIHRocm91Z2ggYXJyYXlzIGFuZCBvYmplY3RzLiBDb21wYXRpYmxlIHdpdGggSUUuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoYXJyLCBjYWxsYmFjaykge1xuICBpZiAoW10uZm9yRWFjaCkge1xuICAgIFtdLmZvckVhY2guY2FsbChhcnIsIGNhbGxiYWNrKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBsZXQgaTtcbiAgLy8gZm9yIChpIGluIGFycikge1xuICBPYmplY3Qua2V5cyhhcnIpLmZvckVhY2goKGkpID0+IHtcbiAgICAvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5IGluc3RlYWQgb2YgYXJyLmhhc093blByb3BlcnR5IGZvciBJRTggY29tcGF0aWJpbGl0eS5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyciwgaSkpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoYXJyLCBhcnJbaV0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBSZWN1cnNpdmUgbWV0aG9kIHRoYXQgYWRkcyBrZXlzIGFuZCB2YWx1ZXMgb2YgdGhlIGNvcnJlc3BvbmRpbmcgZmllbGRzLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChyZXN1bHQsIGRvbU5vZGUsIGtleXMsIHZhbHVlKSB7XG4gIC8vICMxIC0gU2luZ2xlIGRpbWVuc2lvbmFsIGFycmF5LlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBXZSdyZSBvbmx5IGludGVyZXN0ZWQgaW4gdGhlIHJhZGlvIHRoYXQgaXMgY2hlY2tlZC5cbiAgICBpZiAoZG9tTm9kZS5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBkb21Ob2RlLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIGlmIChkb21Ob2RlLmNoZWNrZWQpIHtcbiAgICAgICAgcmVzdWx0W2tleXNdID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDaGVja2JveGVzIGFyZSBhIHNwZWNpYWwgY2FzZS4gV2UgaGF2ZSB0byBncmFiIGVhY2ggY2hlY2tlZCB2YWx1ZXNcbiAgICAvLyBhbmQgcHV0IHRoZW0gaW50byBhbiBhcnJheS5cbiAgICBpZiAoZG9tTm9kZS5ub2RlTmFtZSA9PT0gJ0lOUFVUJyAmJiBkb21Ob2RlLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIGlmIChkb21Ob2RlLmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKCFyZXN1bHRba2V5c10pIHtcbiAgICAgICAgICByZXN1bHRba2V5c10gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRba2V5c10ucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBNdWx0aXBsZSBzZWxlY3QgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgLy8gV2UgaGF2ZSB0byBncmFiIGVhY2ggc2VsZWN0ZWQgb3B0aW9uIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnU0VMRUNUJyAmJiBkb21Ob2RlLnR5cGUgPT09ICdzZWxlY3QtbXVsdGlwbGUnKSB7XG4gICAgICByZXN1bHRba2V5c10gPSBbXTtcbiAgICAgIGNvbnN0IERPTWNoaWxkcyA9IGRvbU5vZGUucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uW3NlbGVjdGVkXScpO1xuICAgICAgaWYgKERPTWNoaWxkcykge1xuICAgICAgICB0aGlzLmZvckVhY2goRE9NY2hpbGRzLCAoY2hpbGQpID0+IHtcbiAgICAgICAgICByZXN1bHRba2V5c10ucHVzaChjaGlsZC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrLiBUaGUgZGVmYXVsdCBvbmUgdG8gb25lIGFzc2lnbi5cbiAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgfVxuXG4gIC8vICMyIC0gTXVsdGkgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoIXJlc3VsdFtrZXlzWzBdXSkge1xuICAgICAgcmVzdWx0W2tleXNbMF1dID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDaGlsZChyZXN1bHRba2V5c1swXV0sIGRvbU5vZGUsIGtleXMuc3BsaWNlKDEsIGtleXMubGVuZ3RoKSwgdmFsdWUpO1xuICB9XG5cbiAgLy8gcmV0dXJuIHJlc3VsdDsgLy8gP1xufTtcblxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5zZXRGb3JtT2JqID0gZnVuY3Rpb24gKCkge1xuICBsZXQgdGVzdDtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLiRmb3JtRWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyBJZ25vcmUgdGhlIGVsZW1lbnQgaWYgdGhlICduYW1lJyBhdHRyaWJ1dGUgaXMgZW1wdHkuXG4gICAgLy8gSWdub3JlIHRoZSAnZGlzYWJsZWQnIGVsZW1lbnRzLlxuICAgIGlmICh0aGlzLiRmb3JtRWxlbWVudHNbaV0ubmFtZSAmJiAhdGhpcy4kZm9ybUVsZW1lbnRzW2ldLmRpc2FibGVkKSB7XG4gICAgICB0ZXN0ID0gdGhpcy4kZm9ybUVsZW1lbnRzW2ldLm5hbWUubWF0Y2godGhpcy5rZXlSZWdleCk7XG4gICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZm9ybU9iaiwgdGhpcy4kZm9ybUVsZW1lbnRzW2ldLCB0ZXN0LCB0aGlzLiRmb3JtRWxlbWVudHNbaV0udmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmZvcm1PYmo7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1Ub09iamVjdDtcbiIsIlxuY29uc3Qgc2YgPSByZXF1aXJlKCdAc3BpcmFsLXRvb2xraXQvY29yZScpO1xuY29uc3QgRm9ybSA9IHJlcXVpcmUoJy4vRm9ybScpLmRlZmF1bHQ7XG5cbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKEZvcm0sICdqcy1zZi1mb3JtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybTsgLy8gRVM2IGRlZmF1bHQgZXhwb3J0IHdpbGwgbm90IGV4cG9zZSB1cyBhcyBnbG9iYWxcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLy8gUGx1Z2luIGluIGZvcm1NZXNzYWdlcyB0byBpdGVyYXRlIGZvcm0gaW5wdXRzXG5cbi8vIFRPRE8gY29tbWVudCBhbGwgb2YgdGhpc1xuLy8gVE9ETyBhc2sgQFN5c3RlcnIgdGhlIHJlYXNvbiBvZiB2YXJpYWJsZSAncHJlZml4J1xubGV0IG5vdEZvdW5kID0gW107XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJlZml4XVxuICovXG5mdW5jdGlvbiBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpIHtcbiAgLy8gZm9yIChjb25zdCBuYW1lIGluIG5hbWVzKSB7XG4gIE9iamVjdC5rZXlzKG5hbWVzKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghbmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0T2ZTZWxlY3RvciA9IChwcmVmaXgpID8gYCR7cHJlZml4fVske25hbWV9XWAgOiBuYW1lO1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmFtZXNbbmFtZV0pO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYFtuYW1lPScke3BhcnRPZlNlbGVjdG9yfSddYDtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgICAgZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzW25hbWVdLCBjYWxsYmFjaywgcGFydE9mU2VsZWN0b3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzpcbiAgICAgICAgbmFtZXNbbmFtZV0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAvLyBUT0RPIHJlZmFjdG9yIHRoaXMgc2hvdWxkIGNhbGwgcmVjdXJzaXZlXG4gICAgICAgICAgY29uc3Qgc2VsID0gYFtuYW1lPScke3BhcnRPZlNlbGVjdG9yfVtdJ11bdmFsdWU9JyR7ZWx9J11gO1xuICAgICAgICAgIGNvbnN0IG5vZGVzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XG4gICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbm90Rm91bmQucHVzaChzZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbm9kZXMubGVuZ3RoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGVzW2ldLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgb2JqW3BhcnRPZlNlbGVjdG9yXSA9IG5hbWVzW25hbWVdO1xuICAgICAgICAgIG5vdEZvdW5kLnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbm9kZXMubGVuZ3RoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgICAgICBjYWxsYmFjayhub2Rlc1tpXSwgbmFtZXNbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKCd1bmtub3duIHR5cGUgLScsIHR5cGUsICcgYW5kIG1lc3NhZ2UnLCBuYW1lc1tuYW1lXSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gbmFtZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ByZWZpeF1cbiAqIEByZXR1cm4ge1N0cmluZ1tdfVxuICovXG5jb25zdCBpdGVyYXRlSW5wdXRzID0gZnVuY3Rpb24gKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KSB7XG4gIG5vdEZvdW5kID0gW107XG4gIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCk7XG4gIGlmIChub3RGb3VuZC5sZW5ndGggIT09IDApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIC8vIGNvbnNvbGUubG9nKCdTb21lIGVsZW1lbnQgbm90IGZvdW5kIGluIGZvcm0nLCBub3RGb3VuZCk7XG4gIH1cbiAgcmV0dXJuIG5vdEZvdW5kO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRlSW5wdXRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8tdXJsJnNvdXJjZU1hcCEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX187Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlUm9vdCI6IiJ9