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
exports.push([module.i, "[data-form-message] ~ [data-form-hint] {\n  display: none;\n}\n\n.is-invalid[data-message-placeholder]>.invalid-feedback,\n.is-invalid[data-field]>.invalid-feedback {\n  display: block;\n}\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;;EAEE,cAAc;AAChB","file":"styles.css","sourcesContent":["[data-form-message] ~ [data-form-hint] {\n  display: none;\n}\n\n.is-invalid[data-message-placeholder]>.invalid-feedback,\n.is-invalid[data-field]>.invalid-feedback {\n  display: block;\n}\n"]}]);
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
const sf = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core").default;

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const sf = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core").default;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybU1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzP2YwZjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJGb3JtIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJqc29uT25seSIsIndpbmRvdyIsIkZvcm1EYXRhIiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJpZCIsInZhbHVlIiwiZG9tQXR0ciIsInVybCIsIm1ldGhvZCIsImltbWVkaWF0ZSIsInZhbCIsImxvY2tUeXBlIiwibWVzc2FnZXNUeXBlIiwibWVzc2FnZXMiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwidXNlQWpheCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiYWpheENhbGxiYWNrIiwiYmVmb3JlU3VibWl0Q2FsbGJhY2siLCJhZnRlclN1Ym1pdENhbGxiYWNrIiwiaGVhZGVycyIsIkFjY2VwdCIsImdsb2JhbCIsImluc3RhbmNlcyIsImZvcm0iLCJmb3JtTWVzc2FnZXMiLCJkZWZhdWx0cyIsIm9uRGVib3VuY2VkU3VibWl0IiwiZ2V0SW5zdGFuY2UiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNsZWFyVGltZW91dCIsIl9zdWJtaXRUaW1lb3V0Iiwic2V0VGltZW91dCIsIm9uU3VibWl0IiwicmVtb3ZlTWVzc2FnZXMiLCJkYXRhIiwiZ2V0Rm9ybURhdGEiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwidHJpZ2dlciIsInNlbmQiLCJsb2NrIiwiYWRkSW5zdGFuY2UiLCJ0eXBlIiwid2FybiIsIm9uUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInVubG9jayIsInJlbW92ZUluc3RhbmNlIiwic2hvd0Zvcm1NZXNzYWdlIiwic2hvd0ZpZWxkTWVzc2FnZSIsInNob3dGaWVsZHNNZXNzYWdlcyIsInNob3dNZXNzYWdlcyIsInJlbW92ZU1lc3NhZ2UiLCJwcm9jZXNzQW5zd2VyIiwiYW5zd2VyIiwic2hvd1Vua25vd24iLCJzZXRGaWVsZFZhbHVlcyIsInZhbHVlcyIsImVsIiwic2ZTZXRWYWx1ZSIsImNoZWNrZWQiLCJBcnJheSIsImlzQXJyYXkiLCJpbmRleE9mIiwiZW51bWVyYXRlRmllbGROYW1lcyIsImxvZyIsIm1hcCIsImdldEF0dHJpYnV0ZSIsIm9wdENhbGxiYWNrIiwiZm4iLCJldmFsIiwiY2FsbCIsInNlbmRPcHRpb25zIiwidGhhdCIsImFqYXgiLCJ0aGVuIiwiRm9ybVRvT2JqZWN0Iiwic2V0T3B0aW9ucyIsIm9wdCIsImFkZCIsIkRPTU5vZGUiLCJldmVudFR5cGUiLCJldmVudEZ1bmN0aW9uIiwiZGllIiwicmVtb3ZlQWxsIiwicmVxdWlyZSIsImRlZmF1bHQiLCJ0ZW1wbGF0ZSIsImNsb3NlIiwicGxhY2UiLCJsZXZlbHMiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJzZWxlY3RvciIsImZpZWxkIiwiZmllbGRFbGVtZW50IiwiZmllbGRUZW1wbGF0ZSIsImZpZWxkUGxhY2UiLCJmaWVsZENsYXNzZXMiLCJtZXNzYWdlIiwiZGVidWciLCJub3RpY2UiLCJkYW5nZXIiLCJjcml0aWNhbCIsImFsZXJ0IiwiZW1lcmdlbmN5IiwicHJlcGFyZU1lc3NhZ2VPYmplY3QiLCJ0ZXh0IiwibW9kdWxlIiwiZXhwb3J0cyIsImlzTXNnIiwia2V5cyIsImZvckVhY2giLCJlcnJvcnMiLCJ3YXJuaW5ncyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJfbWVzc2FnZXMiLCJtIiwiY2xvc2VIYW5kbGVyIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZmllbGRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzcGxpY2UiLCJwYXJlbnQiLCJ0cGwiLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJyZXBsYWNlIiwidHBsRWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm1zZ0VsIiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicHVzaCIsImlzQ29udGFpbmVyIiwiZG9tVG9vbHMiLCJjbG9zZXN0IiwiY3VycmVudE1zZ0VsIiwibmV4dFNpYmxpbmciLCJmaWVsZENsb3NlIiwibm90Rm91bmQiLCJtc2dPYmoiLCJjb250YWluZXIiLCJmb3JtUmVmIiwia2V5UmVnZXgiLCIkZm9ybSIsIiRmb3JtRWxlbWVudHMiLCJmb3JtT2JqIiwic2V0Rm9ybSIsInNldEZvcm1FbGVtZW50cyIsInNldEZvcm1PYmoiLCJnZXRFbGVtZW50QnlJZCIsImlzRG9tTm9kZSIsIm5vZGVUeXBlIiwiYXJyIiwiY2FsbGJhY2siLCJpIiwiYWRkQ2hpbGQiLCJyZXN1bHQiLCJkb21Ob2RlIiwibm9kZU5hbWUiLCJET01jaGlsZHMiLCJjaGlsZCIsInRlc3QiLCJkaXNhYmxlZCIsIm1hdGNoIiwicmVnaXN0ZXJJbnN0YW5jZVR5cGUiLCJmaW5kTm9kZXMiLCJuYW1lcyIsInByZWZpeCIsInBhcnRPZlNlbGVjdG9yIiwidG9TdHJpbmciLCJzZWwiLCJub2RlcyIsIm1heCIsIm9iaiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLCtHQUFzRDtBQUNo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RUFBaUJiLFFBQWpCLEVBQTJCYyxNQUEzQixDQUFUOztBQUNBLE1BQUk3QixRQUFRLENBQUNsSCxNQUFULEtBQW9CLENBQXhCLEVBQTJCLENBQ3pCO0FBQ0E7QUFDRDs7QUFDRCxTQUFPa0gsUUFBUDtBQUNELENBUkQ7O0FBVUExQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4SCxhQUFqQixDOzs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMsNkpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDRKQUE0RTs7QUFFOUc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLGtFIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyb290W1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiW2RhdGEtZm9ybS1tZXNzYWdlXSB+IFtkYXRhLWZvcm0taGludF0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlzLWludmFsaWRbZGF0YS1tZXNzYWdlLXBsYWNlaG9sZGVyXT4uaW52YWxpZC1mZWVkYmFjayxcXG4uaXMtaW52YWxpZFtkYXRhLWZpZWxkXT4uaW52YWxpZC1mZWVkYmFjayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIltkYXRhLWZvcm0tbWVzc2FnZV0gfiBbZGF0YS1mb3JtLWhpbnRdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pcy1pbnZhbGlkW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcl0+LmludmFsaWQtZmVlZGJhY2ssXFxuLmlzLWludmFsaWRbZGF0YS1maWVsZF0+LmludmFsaWQtZmVlZGJhY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgY29yZSBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XG5cbmltcG9ydCBGb3JtVG9PYmplY3QgZnJvbSAnLi9mb3JtVG9PYmplY3QnO1xuaW1wb3J0IGZvcm1NZXNzYWdlcyBmcm9tICcuL2Zvcm1NZXNzYWdlcyc7XG5pbXBvcnQgaXRlcmF0ZUlucHV0cyBmcm9tICcuL2l0ZXJhdGVJbnB1dHMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmxldCBpZENvdW50ZXIgPSAxO1xuXG5cbi8qKlxuICogU3BpcmFsIEZvcm1zXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICogQGNvbnN0cnVjdG9yIEZvcm1cbiAqIEBleHRlbmRzIEJhc2VET01Db25zdHJ1Y3RvclxuICovXG5jb25zdCBGb3JtID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuX2NvbnN0cnVjdChzZiwgbm9kZSwgb3B0aW9ucyk7XG59O1xuXG5cbi8qKlxuICogQGxlbmRzIHNmLkZvcm0ucHJvdG90eXBlXG4gKi9cbkZvcm0ucHJvdG90eXBlID0gY29yZS5jcmVhdGVNb2R1bGVQcm90b3R5cGUoKTtcblxuLyoqXG4gKiBOYW1lIHRvIHJlZ2lzdGVyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Gb3JtLnByb3RvdHlwZS5uYW1lID0gJ2Zvcm0nO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FsbCBvbiBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAcHJpdmF0ZVxuICovXG5Gb3JtLnByb3RvdHlwZS5fY29uc3RydWN0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzZiwgbm9kZSwgb3B0aW9ucyk7XG4gIHRoaXMub3B0aW9ucy5qc29uT25seSA9IHRoaXMub3B0aW9ucy5qc29uT25seSAmJiAhIXdpbmRvdy5Gb3JtRGF0YTtcbiAgdGhpcy5taXhNZXNzYWdlc09wdGlvbnMoKTtcbiAgLy8gdGhpcy5vcHRpb25zLmZpbGxGcm9tICYmIHRoaXMuZmlsbEZpZWxkc0Zyb20oKTsgLy8gaWQgcmVxdWlyZWQgdG8gZmlsbCBmb3JtXG5cbiAgLyoqXG4gICAgICogQGV4dGVuZHMgRE9NRXZlbnRzXG4gICAgICogQHR5cGUge0RPTUV2ZW50c31cbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqICovXG4gIHRoaXMuRE9NRXZlbnRzID0gbmV3IHRoaXMuc2YuaGVscGVycy5ET01FdmVudHMoKTtcbiAgdGhpcy5hZGRFdmVudHMoKTtcblxuICB0aGlzLmV2ZW50cyA9IG5ldyB0aGlzLnNmLmNvcmUuRXZlbnRzKFsnYmVmb3JlU2VuZCcsICdzdWNjZXNzJywgJ2Vycm9yJywgJ2Fsd2F5cyddKTtcbiAgY29yZS5pdGVyYXRlSW5wdXRzID0gaXRlcmF0ZUlucHV0cztcbn07XG5cbi8qKlxuICogQG92ZXJyaWRlXG4gKiBAaW5oZXJpdERvY1xuICogQGVudW0ge09iamVjdH1cbiAqIEBkZXByZWNhdGVkXG4gKi9cbkZvcm0ucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7XG4gIC8qKlxuICAgICAqIExpbmsgdG8gZm9ybVxuICAgICAqL1xuICBjb250ZXh0OiB7XG4gICAgcHJvY2Vzc29yKG5vZGUpIHsgLy8gUHJvY2Vzc29yXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBMaW5rIHRvICd0aGlzJ1xuICAgICAqL1xuICBzZWxmOiB7XG4gICAgcHJvY2Vzc29yKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgfSxcbiAgaWQ6IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICB2YWx1ZTogYGZvcm06JHtpZENvdW50ZXIrK31gLFxuICAgIGRvbUF0dHI6ICdpZCcsXG4gIH0sXG4gIC8qKlxuICAgICAqIFVSTCB0byBzZW5kIGZvcm0gKGlmIGFqYXggZm9ybSkgPGI+RGVmYXVsdDogXCIvXCI8L2I+XG4gICAgICovXG4gIHVybDoge1xuICAgIGRvbUF0dHI6ICdhY3Rpb24nLFxuICAgIHZhbHVlOiAnLycsXG4gIH0sXG4gIC8qKlxuICAgICAqIE1ldGhvZCB0byBzZW5kIHRvIHNlbmQgZm9ybSAoaWYgYWpheCBmb3JtKSA8Yj5EZWZhdWx0OiBcIlBPU1RcIjwvYj5cbiAgICAgKi9cbiAgbWV0aG9kOiB7XG4gICAgZG9tQXR0cjogJ21ldGhvZCcsXG4gICAgdmFsdWU6ICdQT1NUJyxcbiAgfSxcbiAgLyoqXG4gICAgICogSWYgYW55IGlucHV0IGNoYW5nZXMgc2hvdWxkIHRyaWdnZXIgZm9ybSBzdWJtaXRcbiAgICAgKiBWYWx1ZSBpcyBkZWJvdW5jZSB2YWx1ZVxuICAgICAqL1xuICBpbW1lZGlhdGU6IHtcbiAgICBkb21BdHRyOiAnZGF0YS1pbW1lZGlhdGUnLFxuICAgIHZhbHVlOiBmYWxzZSxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsKSB7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuICt2YWw7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogTG9jayB0eXBlIHdoZW4gZm9ybSBzZW5kaW5nIDxiPkRlZmF1bHQ6IFwiZGVmYXVsdFwiPC9iPiBAc2VlIHNmLmxvY2tcbiAgICAgKi9cbiAgbG9ja1R5cGU6IHtcbiAgICB2YWx1ZTogJ2RlZmF1bHQnLFxuICAgIGRvbUF0dHI6ICdkYXRhLWxvY2stdHlwZScsXG4gIH0sXG4gIC8qKlxuICAgICAqIEZvcmNlIHRvIG5vdCB1c2UgRm9ybURhdGEgZXZlbiBpZiBpdCdzIGF2YWlsYWJsZVxuICAgICAqL1xuICBqc29uT25seToge1xuICAgIHZhbHVlOiBmYWxzZSxcbiAgICBkb21BdHRyOiAnZGF0YS1qc29uLW9ubHknLFxuICB9LFxuICAvKipcbiAgICAgKlxuICAgICAqL1xuICBtZXNzYWdlc1R5cGU6IHtcbiAgICB2YWx1ZTogJ3NwaXJhbCcsXG4gICAgZG9tQXR0cjogJ2RhdGEtbWVzc2FnZXMtdHlwZScsXG4gIH0sXG4gIC8qKlxuICAgICAqIFBhc3MgY3VzdG9tIHRlbXBsYXRlIGZvciBmb3JtIG1lc3NhZ2VzXG4gICAgICovXG4gIG1lc3NhZ2VzOiB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRvbUF0dHI6ICdkYXRhLW1lc3NhZ2VzJyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsLCBzZWxmKSB7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKHZhbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtIEpTT04ucGFyc2UgZXJyb3I6ICcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzZWxmLnZhbHVlLCB2YWwpO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIFVzZSBhamF4IHRvIHN1Ym1pdCBmb3JtIDxiPkRlZmF1bHQ6IHRydWU8L2I+XG4gICAgICovXG4gIHVzZUFqYXg6IHsgLy8gQXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogdHJ1ZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLXVzZS1hamF4JyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsKSB7IC8vIHByb2Nlc3NvciB0byBwcm9jZXNzIGRhdGEgYmVmb3JlIHJldHVyblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgdmFsID0gKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkgPyB2YWwudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogQ2FsbGJhY2sgYWZ0ZXIgZm9ybSBzdWJtaXR0aW5nIDxiPkRlZmF1bHQ6IGZhbHNlPC9iPlxuICAgICAqIDxici8+XG4gICAgICogPGI+IEV4YW1wbGUgPC9iPlxuICAgICAqIGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgICAqICAvL29wdGlvbnMgY29udGFpbnMgYWxsIG9wdGlvbnMgYWZ0ZXIgc2VuZFxuICAgICAqIH1cbiAgICAgKi9cbiAgYWpheENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtY2FsbGJhY2snLFxuICB9LFxuICBiZWZvcmVTdWJtaXRDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWJlZm9yZS1zdWJtaXQnLFxuICB9LFxuICBhZnRlclN1Ym1pdENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtYWZ0ZXItc3VibWl0JyxcbiAgfSxcbiAgaGVhZGVyczogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiB7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1oZWFkZXJzJyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsLCBzZWxmKSB7XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09IG51bGwpIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybSBKU09OLnBhcnNlIGVycm9yOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZi52YWx1ZSwgdmFsKTtcbiAgICB9LFxuICB9LFxufTtcblxuRm9ybS5wcm90b3R5cGUubWl4TWVzc2FnZXNPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnbG9iYWwgPSB0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzLmZvcm07XG4gIHRoaXMub3B0aW9ucy5tZXNzYWdlcyA9IHtcbiAgICAuLi5mb3JtTWVzc2FnZXMuZGVmYXVsdHMsXG4gICAgLi4uZ2xvYmFsICYmIGdsb2JhbC5tZXNzYWdlcyAmJiBnbG9iYWwubWVzc2FnZXNbdGhpcy5vcHRpb25zLm1lc3NhZ2VzVHlwZV0sXG4gICAgLi4udGhpcy5vcHRpb25zLm1lc3NhZ2VzLFxuICB9O1xufTtcblxuRm9ybS5wcm90b3R5cGUub25EZWJvdW5jZWRTdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAodGhpcy5zZi5nZXRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICAvLyBPbiBsb2NrIHdlIHNob3VsZCduIGRvIGFueSBhY3Rpb25zXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5pbW1lZGlhdGUpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fc3VibWl0VGltZW91dCk7XG4gICAgdGhpcy5fc3VibWl0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vblN1Ym1pdChlKTtcbiAgICB9LCB0aGlzLm9wdGlvbnMuaW1tZWRpYXRlKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBDYWxsIG9uIGZvcm0gc3VibWl0XG4gKiBAcGFyYW0ge0V2ZW50fSBlIHN1Ym1pdCBldmVudFxuICovXG5Gb3JtLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICh0aGlzLnNmLmdldEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xuICAgIC8vIE9uIGxvY2sgd2Ugc2hvdWxkJ24gZG8gYW55IGFjdGlvbnNcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgdGhpcy5vcHRpb25zLmRhdGEgPSB0aGlzLmdldEZvcm1EYXRhKCk7XG5cbiAgLy8gV2UgY2FuIHNlbmQgZmlsZXMgb25seSB3aXRoIEZvcm1EYXRhXG4gIC8vIElmIGZvcm0gY29udGFpbiBmaWxlcyBhbmQgbm8gRm9ybURhdGEgdGhhbiBkaXNhYmxlIGFqYXhcbiAgaWYgKCF0aGlzLm9wdGlvbnMuanNvbk9ubHkgJiYgdGhpcy5vcHRpb25zLmNvbnRleHQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2ZpbGUnXVwiKS5sZW5ndGggIT09IDApIHtcbiAgICB0aGlzLm9wdGlvbnMudXNlQWpheCA9IGZhbHNlO1xuICB9XG4gIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ2JlZm9yZVNlbmQnLCB0aGlzLm9wdGlvbnMpO1xuICAvLyBzZi5ldmVudHMucGVyZm9ybUFjdGlvbihcImJlZm9yZVN1Ym1pdFwiLCB0aGlzLm9wdGlvbnMpO1xuICAvLyB0aGlzLmV2ZW50cy5wZXJmb3JtQWN0aW9uKFwiYmVmb3JlU3VibWl0XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy51c2VBamF4KSB7XG4gICAgdGhpcy5zZW5kKHRoaXMub3B0aW9ucyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBMb2NrZXIuIEFkZCBvciByZW1vdmUuXG4gKi9cbkZvcm0ucHJvdG90eXBlLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxvY2sgPSB0aGlzLnNmLmFkZEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlLCB7IHR5cGU6IHRoaXMub3B0aW9ucy5sb2NrVHlwZSB9KTtcbiAgaWYgKCFsb2NrKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byBhZGQgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBhbHJlYWR5IHN0YXJ0ZWRcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMub3B0aW9ucy5vblByb2dyZXNzID0gbG9jay5wcm9ncmVzcztcbn07XG5cbi8qKlxuICogTG9ja2VyLiBBZGQgb3IgcmVtb3ZlLlxuICovXG5Gb3JtLnByb3RvdHlwZS51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJZb3UgdHJ5IHRvIHJlbW92ZSAnbG9jaycgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBzdGFydGVkXCIpO1xuICB9XG59O1xuXG4vLyBGb3JtIG1lc3NhZ2VzXG5Gb3JtLnByb3RvdHlwZS5zaG93Rm9ybU1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMuc2hvd0Zvcm1NZXNzYWdlO1xuRm9ybS5wcm90b3R5cGUuc2hvd0ZpZWxkTWVzc2FnZSA9IGZvcm1NZXNzYWdlcy5zaG93RmllbGRNZXNzYWdlO1xuRm9ybS5wcm90b3R5cGUuc2hvd0ZpZWxkc01lc3NhZ2VzID0gZm9ybU1lc3NhZ2VzLnNob3dGaWVsZHNNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnNob3dNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5zaG93TWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5yZW1vdmVNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnJlbW92ZU1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMucmVtb3ZlTWVzc2FnZTtcblxuRm9ybS5wcm90b3R5cGUucHJvY2Vzc0Fuc3dlciA9IGZ1bmN0aW9uIChhbnN3ZXIsIHNob3dVbmtub3duID0gdHJ1ZSkge1xuICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzVHlwZSkge1xuICAgIHRoaXMuc2hvd01lc3NhZ2VzKGFuc3dlciwgc2hvd1Vua25vd24pO1xuICB9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5zZXRGaWVsZFZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgdGhpcy5zZi5pdGVyYXRlSW5wdXRzKHRoaXMubm9kZSwgdmFsdWVzLCAoZWwsIHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlbC5zZlNldFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5zZlNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBpZiAoIWVsLnZhbHVlKSB7IC8vIHNpbmdsZSBjaGVja2JveFxuICAgICAgICAgIGVsLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXEsbWF4LWxlblxuICAgICAgICAgIGVsLmNoZWNrZWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/ICh2YWx1ZS5pbmRleE9mKGVsLnZhbHVlKSA+PSAwKSA6IChlbC52YWx1ZSA9PSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7IC8vIFRPRE86IFRoYXQgd29udCB3b3JrIGZvciByYWRpb2dyb3VwcywgZXRjLlxuICAgIH1cbiAgfSk7XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5lbnVtZXJhdGVGaWVsZE5hbWVzID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyh0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsc2VsZWN0LHRleHRhcmVhJykpO1xuICByZXR1cm4gWy4uLnRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnKV0ubWFwKChlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKCduYW1lJykpOyAvLyBUT0RPOiBzdXBwb3J0IGN1c3RvbSBpbnB1dHMgdG9vXG59O1xuXG5Gb3JtLnByb3RvdHlwZS5vcHRDYWxsYmFjayA9IGZ1bmN0aW9uIChvcHRpb25zLCB0eXBlKSB7XG4gIGlmIChvcHRpb25zW3R5cGVdKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcbiAgICBjb25zdCBmbiA9IGV2YWwob3B0aW9uc1t0eXBlXSk7XG4gICAgaWYgKHR5cGVvZiAoZm4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogU2VuZCBmb3JtIHRvIHNlcnZlclxuICogQHBhcmFtIHtPYmplY3R9IHNlbmRPcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoc2VuZE9wdGlvbnMpIHtcbiAgY29uc3QgdGhhdCA9IHRoaXM7XG4gIGlmICh0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYmVmb3JlU3VibWl0Q2FsbGJhY2snKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5sb2NrKCk7XG4gIHRoaXMuc2YuYWpheC5zZW5kKHNlbmRPcHRpb25zKS50aGVuKFxuICAgIChhbnN3ZXIpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBzZW5kT3B0aW9ucyk7XG4gICAgICByZXR1cm4gYW5zd2VyO1xuICAgIH0sXG4gICAgKGVycm9yKSA9PiB7XG4gICAgICB0aGF0LmV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LFxuICApLnRoZW4oKGFuc3dlcikgPT4ge1xuICAgIHRoYXQubG9jayh0cnVlKTtcbiAgICB0aGF0LnByb2Nlc3NBbnN3ZXIoYW5zd2VyKTtcbiAgICB0aGlzLm9wdENhbGxiYWNrKHNlbmRPcHRpb25zLCAnYWZ0ZXJTdWJtaXRDYWxsYmFjaycpO1xuICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Fsd2F5cycsIHNlbmRPcHRpb25zKTtcbiAgfSk7XG5cbiAgLy8gVG8gY2FuY2VsIHJlcXVlc3Q6XG4gIC8vIGlmICh0aGlzLnNmLmFqYXguY2FuY2VsKSB0aGlzLnNmLmFqYXguY2FuY2VsKCk7XG59O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSBmb3JtXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbkZvcm0ucHJvdG90eXBlLmdldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5qc29uT25seSkge1xuICAgIHJldHVybiBuZXcgRm9ybURhdGEodGhpcy5vcHRpb25zLmNvbnRleHQpO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKGBGb3JtIFxcYCR7dGhpcy5vcHRpb25zLmNvbnRleHR9XFxgIHdlcmUgcHJvY2Vzc2VkIHdpdGhvdXQgRm9ybURhdGEuYCk7XG4gIHJldHVybiBuZXcgRm9ybVRvT2JqZWN0KHRoaXMub3B0aW9ucy5jb250ZXh0KTtcbn07XG5cbi8qKlxuICogU2V0IG9wdGlvbnMgKG92ZXJ3cml0ZSBjdXJyZW50KVxuICogQHBhcmFtIHtPYmplY3R9IG9wdCBvcHRpb25zXG4gKi9cbkZvcm0ucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0KSB7XG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHQpO1xufTtcblxuLyoqXG4gKiBBZGQgYWxsIGV2ZW50cyBmb3IgZm9ybXNcbiAqL1xuRm9ybS5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLkRPTUV2ZW50cy5hZGQoW1xuICAgIHtcbiAgICAgIERPTU5vZGU6IHRoaXMub3B0aW9ucy5jb250ZXh0LFxuICAgICAgZXZlbnRUeXBlOiAnc3VibWl0JyxcbiAgICAgIGV2ZW50RnVuY3Rpb246IChlKSA9PiB7XG4gICAgICAgIHRoaXMub25TdWJtaXQoZSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgRE9NTm9kZTogdGhpcy5vcHRpb25zLmNvbnRleHQsXG4gICAgICBldmVudFR5cGU6ICdjaGFuZ2UnLFxuICAgICAgZXZlbnRGdW5jdGlvbjogKGUpID0+IHtcbiAgICAgICAgdGhpcy5vbkRlYm91bmNlZFN1Ym1pdChlKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBET01Ob2RlOiB0aGlzLm9wdGlvbnMuY29udGV4dCxcbiAgICAgIGV2ZW50VHlwZTogJ2lucHV0JyxcbiAgICAgIGV2ZW50RnVuY3Rpb246IChlKSA9PiB7XG4gICAgICAgIHRoaXMub25EZWJvdW5jZWRTdWJtaXQoZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0pO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgdmFyaWFibGVzIGFuZCBkaWVcbiAqL1xuRm9ybS5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLkRPTUV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgLy8gVE9ETyBkb24ndCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCdzIGFkZG9ucyBhbmQgcGx1Z2lucz9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJykuZGVmYXVsdDtcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIC8vIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImFsZXJ0IGZvcm0tbXNnICR7dHlwZX1cIj48YnV0dG9uIGNsYXNzPVwiYnRuLWNsb3NlXCI+w5c8L2J1dHRvbj48cCBjbGFzcz1cIm1zZ1wiPiR7dGV4dH08L3A+PC9kaXY+JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtJHt0eXBlfSBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dcIiByb2xlPVwiYWxlcnRcIj4nXG4gICAgKyAnJHt0ZXh0fSdcbiAgICArICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj4nXG4gICAgKyAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nXG4gICAgKyAnPC9idXR0b24+J1xuICAgICsgJzwvZGl2PicsXG4gIGNsb3NlOiAnLmNsb3NlJyxcbiAgcGxhY2U6ICdib3R0b20nLFxuICBsZXZlbHM6IHtcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsIGluZm86ICdpbmZvJywgd2FybmluZzogJ3dhcm5pbmcnLCBlcnJvcjogJ2RhbmdlcicsXG4gIH0sXG4gIHNlbGVjdG9yOiAnW2RhdGEtbWVzc2FnZV0nLFxuICBmaWVsZDogJ1tkYXRhLWZpZWxkXScsXG4gIGZpZWxkRWxlbWVudDogJ1tkYXRhLWlucHV0XScsXG4gIGZpZWxkVGVtcGxhdGU6ICc8ZGl2IGRhdGEtbWVzc2FnZSBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIiBkYXRhLWZvcm0tbWVzc2FnZT4ke3RleHR9PC9kaXY+JyxcbiAgZmllbGRQbGFjZTogJ2JvdHRvbScsXG4gIGZpZWxkQ2xhc3Nlczoge1xuICAgIHN1Y2Nlc3M6ICdpcy12YWxpZCcsIGluZm86ICdpcy12YWxpZCcsIHdhcm5pbmc6ICdpcy1pbnZhbGlkJywgZXJyb3I6ICdpcy1pbnZhbGlkJyxcbiAgfSxcbn07XG5cbi8vIE9mdGVuIHVzZWQgYWxpYXNcbmRlZmF1bHRzLmxldmVscy5tZXNzYWdlID0gZGVmYXVsdHMubGV2ZWxzLnN1Y2Nlc3M7XG5cbi8vIE90aGVyIGFsaWFzZXNcbi8vIFBTUi0zIHNldmVyaXR5IGxldmVscyBtYXBwaW5nIChkZWJ1ZywgaW5mbywgbm90aWNlLCB3YXJuaW5nLCBlcnJvciwgY3JpdGljYWwsIGFsZXJ0LCBlbWVyZ2VuY3kpXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGhwLWZpZy9maWctc3RhbmRhcmRzL2Jsb2IvbWFzdGVyL2FjY2VwdGVkL1BTUi0zLWxvZ2dlci1pbnRlcmZhY2UubWRcbmRlZmF1bHRzLmxldmVscy5kZWJ1ZyA9IGRlZmF1bHRzLmxldmVscy5zdWNjZXNzO1xuZGVmYXVsdHMubGV2ZWxzLmluZm8gPSBkZWZhdWx0cy5sZXZlbHMubm90aWNlID0gZGVmYXVsdHMubGV2ZWxzLmluZm87XG5kZWZhdWx0cy5sZXZlbHMuZGFuZ2VyID0gZGVmYXVsdHMubGV2ZWxzLmNyaXRpY2FsID0gZGVmYXVsdHMubGV2ZWxzLmFsZXJ0ID0gZGVmYXVsdHMubGV2ZWxzLmVtZXJnZW5jeSA9IGRlZmF1bHRzLmxldmVscy5lcnJvcjtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHByZXBhcmVNZXNzYWdlT2JqZWN0KG1lc3NhZ2UsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSAnb2JqZWN0Jykge1xuICAgIG1lc3NhZ2UgPSB7IHRleHQ6IG1lc3NhZ2UsIHR5cGUgfTtcbiAgfVxuICBtZXNzYWdlLnRleHQgPSBtZXNzYWdlLnRleHQgfHwgbWVzc2FnZS5tZXNzYWdlIHx8IG1lc3NhZ2U7XG4gIG1lc3NhZ2UudHlwZSA9IG1lc3NhZ2UudHlwZSB8fCB0eXBlO1xuICByZXR1cm4gbWVzc2FnZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmF1bHRzLFxuICBzaG93TWVzc2FnZXMoYW5zd2VyLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgICBpZiAoIWFuc3dlcikgcmV0dXJuO1xuXG4gICAgbGV0IGlzTXNnID0gZmFsc2U7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAoYW5zd2VyLmRhdGEpIHtcbiAgICAgIC8vIGZvciAoY29uc3QgdHlwZSBpbiB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzKS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGlmIChhbnN3ZXIuZGF0YVt0eXBlXSkge1xuICAgICAgICAgIHRoaXMuc2hvd0Zvcm1NZXNzYWdlKGFuc3dlci5kYXRhW3R5cGVdLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzW3R5cGVdKTtcbiAgICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYW5zd2VyLmRhdGEubWVzc2FnZXMpIHtcbiAgICAgICAgdGhpcy5zaG93RmllbGRzTWVzc2FnZXMoYW5zd2VyLmRhdGEubWVzc2FnZXMsICdzdWNjZXNzJywgc2hvd1Vua25vd24pO1xuICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoYW5zd2VyLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLmVycm9ycywgJ2Vycm9yJywgc2hvd1Vua25vd24pO1xuICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoYW5zd2VyLmRhdGEud2FybmluZ3MpIHtcbiAgICAgICAgdGhpcy5zaG93RmllbGRzTWVzc2FnZXMoYW5zd2VyLmRhdGEud2FybmluZ3MsICd3YXJuaW5nJywgc2hvd1Vua25vd24pO1xuICAgICAgICBpc01zZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc01zZykge1xuICAgICAgbGV0IGVycm9yO1xuICAgICAgaWYgKCFhbnN3ZXIuc3RhdHVzKSB7IC8vIE5ldHdvcmsuZXJyb3JcbiAgICAgICAgZXJyb3IgPSBhbnN3ZXI7XG4gICAgICB9IGVsc2UgaWYgKGFuc3dlci5zdGF0dXMgPiAzMDApIHtcbiAgICAgICAgZXJyb3IgPSBhbnN3ZXIuc3RhdHVzID8gYCR7YW5zd2VyLnN0YXR1c30gYCA6ICcnO1xuICAgICAgICBlcnJvciArPSBhbnN3ZXIuc3RhdHVzVGV4dCA/IGFuc3dlci5zdGF0dXNUZXh0IDogJyc7XG4gICAgICAgIGVycm9yICs9IGFuc3dlci5kYXRhICYmICFhbnN3ZXIuc3RhdHVzVGV4dCA/IGFuc3dlci5kYXRhIDogJyc7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IpIHRoaXMuc2hvd0Zvcm1NZXNzYWdlKGVycm9yLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMubGV2ZWxzLmVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tZXNzYWdlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICBpZiAobS5jbG9zZSkge1xuICAgICAgICBtLmNsb3NlSGFuZGxlciA9IHRoYXQucmVtb3ZlTWVzc2FnZS5iaW5kKHRoYXQsIG0pO1xuICAgICAgICBtLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbS5jbG9zZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZU1lc3NhZ2UobSwgZSkge1xuICAgIGlmIChtLmNsb3NlKSB7XG4gICAgICBtLmNsb3NlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbS5jbG9zZUhhbmRsZXIpO1xuICAgIH1cbiAgICBtLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobS5lbCk7XG4gICAgaWYgKG0uZmllbGQpIHtcbiAgICAgIGNvbnN0IGZpZWxkRWwgPSBtLmZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkRWxlbWVudCk7XG4gICAgICBpZiAoZmllbGRFbCkge1xuICAgICAgICBmaWVsZEVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1ttLnR5cGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG0uZmllbGQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW20udHlwZV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZSkge1xuICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VzLnNwbGljZSh0aGlzLl9tZXNzYWdlcy5pbmRleE9mKG0pLCAxKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVtb3ZlTWVzc2FnZXMoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX21lc3NhZ2VzKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlcy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIHRoYXQucmVtb3ZlTWVzc2FnZShtLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhhdC5fbWVzc2FnZXMgPSBbXTtcbiAgfSxcblxuICBzaG93Rm9ybU1lc3NhZ2UobWVzc2FnZSwgdHlwZSkge1xuICAgIGxldCBwYXJlbnQ7XG4gICAgbGV0IHRwbCA9IHRoaXMub3B0aW9ucy5tZXNzYWdlcy50ZW1wbGF0ZTtcblxuICAgIG1lc3NhZ2UgPSBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKTtcblxuICAgIC8vIGZvciAoY29uc3QgaXRlbSBpbiBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc093blByb3BlcnR5KGl0ZW0pKSByZXR1cm47XG4gICAgICB0cGwgPSB0cGwucmVwbGFjZShgXFwkeyR7aXRlbX19YCwgbWVzc2FnZVtpdGVtXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cGxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHBsRWxlbS5pbm5lckhUTUwgPSB0cGw7XG4gICAgY29uc3QgbXNnRWwgPSB0cGxFbGVtLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlID09PSAnYm90dG9tJykge1xuICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMubm9kZS5pbnNlcnRCZWZvcmUobXNnRWwsIHRoaXMubm9kZS5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZXMucHVzaCh7IGVsOiBtc2dFbCwgY2xvc2U6IG1zZ0VsLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmNsb3NlKSB9KTtcbiAgfSxcblxuICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpc0NvbnRhaW5lcl1cbiAgICAgKi9cbiAgc2hvd0ZpZWxkTWVzc2FnZShlbCwgbWVzc2FnZSwgdHlwZSwgaXNDb250YWluZXIpIHtcbiAgICBsZXQgZmllbGQgPSBpc0NvbnRhaW5lciA/IGVsIDogc2YuaGVscGVycy5kb21Ub29scy5jbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGQpO1xuICAgIGxldCB0cGwgPSB0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRUZW1wbGF0ZTtcblxuICAgIGlmICghZmllbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSk7XG5cbiAgICBjb25zdCBmaWVsZEVsID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRFbGVtZW50KTtcbiAgICBjb25zdCBjdXJyZW50TXNnRWwgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5zZWxlY3Rvcik7XG5cbiAgICBpZiAoZmllbGRFbCkge1xuICAgICAgZmllbGRFbC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbdHlwZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbdHlwZV0pO1xuICAgIH1cblxuICAgIC8vIGZvciAoY29uc3QgaXRlbSBpbiBtZXNzYWdlKSB7XG4gICAgT2JqZWN0LmtleXMobWVzc2FnZSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc093blByb3BlcnR5KGl0ZW0pKSByZXR1cm47XG4gICAgICB0cGwgPSB0cGwucmVwbGFjZShgXFwkeyR7aXRlbX19YCwgbWVzc2FnZVtpdGVtXSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0cGxFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHBsRWxlbS5pbm5lckhUTUwgPSB0cGw7XG4gICAgY29uc3QgbXNnRWwgPSB0cGxFbGVtLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkUGxhY2UgPT09ICdib3R0b20nKSB7XG4gICAgICBpZiAoZmllbGRFbCkge1xuICAgICAgICBmaWVsZC5pbnNlcnRCZWZvcmUobXNnRWwsIGZpZWxkRWwubmV4dFNpYmxpbmcpO1xuICAgICAgfSBlbHNlIGlmICghY3VycmVudE1zZ0VsKSB7XG4gICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlID09PSAndG9wJykge1xuICAgICAgZmllbGQuaW5zZXJ0QmVmb3JlKG1zZ0VsLCBmaWVsZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQgPSBmaWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlKTtcbiAgICAgIGZpZWxkLmFwcGVuZENoaWxkKG1zZ0VsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tZXNzYWdlcy5wdXNoKHtcbiAgICAgIGVsOiBtc2dFbCxcbiAgICAgIGNsb3NlOiBtc2dFbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsb3NlKSxcbiAgICAgIGZpZWxkLFxuICAgICAgdHlwZSxcbiAgICB9KTtcbiAgfSxcblxuICBzaG93RmllbGRzTWVzc2FnZXMobWVzc2FnZXMsIHR5cGUsIHNob3dVbmtub3duID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IG5vdEZvdW5kID0gc2YuaXRlcmF0ZUlucHV0cyh0aGlzLm5vZGUsIG1lc3NhZ2VzLCAoZWwsIG1lc3NhZ2UpID0+IHtcbiAgICAgIHRoYXQuc2hvd0ZpZWxkTWVzc2FnZShlbCwgbWVzc2FnZSwgdHlwZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc2hvd1Vua25vd24pIHtcbiAgICAgIG5vdEZvdW5kLmZvckVhY2goKG1zZ09iaikgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhtc2dPYmopLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGF0Lm5vZGUucXVlcnlTZWxlY3RvcihgW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcj1cIiR7bmFtZX1cIl1gKTtcbiAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGNoZWNrIGNvbnRhaW5lci5kYXRhc2V0Lm1lc3NhZ2VWYXJpYW50PyB2YXJpYW50cyBhcmUgXCJmaWVsZFwiIGFuZCBcImZvcm1cIlxuICAgICAgICAgICAgdGhhdC5zaG93RmllbGRNZXNzYWdlKGNvbnRhaW5lciwgbXNnT2JqW25hbWVdLCB0eXBlLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5cbi8qXG4gKiBnaXRodWIuY29tL3NlcmJhbmdoaXRhL0Zvcm1Ub09iamVjdC5qcyAxLjAuMSAgKGMpIDIwMTMgU2VyYmFuIEdoaXRhIDxzZXJiYW5naGl0YUBnbWFpbC5jb20+XG4gKiBAbGljZW5jZSBNSVRcbiAqL1xuLy8gQ29uc3RydWN0b3IuXG5cbmNvbnN0IEZvcm1Ub09iamVjdCA9IGZ1bmN0aW9uIChmb3JtUmVmKSB7XG4gIGlmICghZm9ybVJlZikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuZm9ybVJlZiA9IGZvcm1SZWY7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICB0aGlzLmtleVJlZ2V4ID0gL1teXFxbXFxdXSsvZztcbiAgdGhpcy4kZm9ybSA9IG51bGw7XG4gIHRoaXMuJGZvcm1FbGVtZW50cyA9IFtdO1xuICB0aGlzLmZvcm1PYmogPSB7fTtcblxuICBpZiAoIXRoaXMuc2V0Rm9ybSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICghdGhpcy5zZXRGb3JtRWxlbWVudHMoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLnNldEZvcm1PYmooKTtcbn07XG5cbi8vIFNldCB0aGUgbWFpbiBmb3JtIG9iamVjdCB3ZSBhcmUgd29ya2luZyBvbi5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoICh0eXBlb2YgdGhpcy5mb3JtUmVmKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHRoaXMuJGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZvcm1SZWYpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKHRoaXMuaXNEb21Ob2RlKHRoaXMuZm9ybVJlZikpIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9IHRoaXMuZm9ybVJlZjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgfVxuXG4gIHJldHVybiB0aGlzLiRmb3JtO1xufTtcblxuLy8gU2V0IHRoZSBlbGVtZW50cyB3ZSBuZWVkIHRvIHBhcnNlLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5zZXRGb3JtRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuJGZvcm1FbGVtZW50cyA9IHRoaXMuJGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgcmV0dXJuIHRoaXMuJGZvcm1FbGVtZW50cy5sZW5ndGg7XG59O1xuXG4vLyBDaGVjayB0byBzZWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUwgbm9kZS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuaXNEb21Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgcmV0dXJuIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiAnbm9kZVR5cGUnIGluIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8vIEl0ZXJhdGlvbiB0aHJvdWdoIGFycmF5cyBhbmQgb2JqZWN0cy4gQ29tcGF0aWJsZSB3aXRoIElFLlxuRm9ybVRvT2JqZWN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGFyciwgY2FsbGJhY2spIHtcbiAgaWYgKFtdLmZvckVhY2gpIHtcbiAgICBbXS5mb3JFYWNoLmNhbGwoYXJyLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbGV0IGk7XG4gIC8vIGZvciAoaSBpbiBhcnIpIHtcbiAgT2JqZWN0LmtleXMoYXJyKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgLy8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSBpbnN0ZWFkIG9mIGFyci5oYXNPd25Qcm9wZXJ0eSBmb3IgSUU4IGNvbXBhdGliaWxpdHkuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcnIsIGkpKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKGFyciwgYXJyW2ldKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gUmVjdXJzaXZlIG1ldGhvZCB0aGF0IGFkZHMga2V5cyBhbmQgdmFsdWVzIG9mIHRoZSBjb3JyZXNwb25kaW5nIGZpZWxkcy5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuYWRkQ2hpbGQgPSBmdW5jdGlvbiAocmVzdWx0LCBkb21Ob2RlLCBrZXlzLCB2YWx1ZSkge1xuICAvLyAjMSAtIFNpbmdsZSBkaW1lbnNpb25hbCBhcnJheS5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gV2UncmUgb25seSBpbnRlcmVzdGVkIGluIHRoZSByYWRpbyB0aGF0IGlzIGNoZWNrZWQuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgZG9tTm9kZS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICBpZiAoZG9tTm9kZS5jaGVja2VkKSB7XG4gICAgICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tib3hlcyBhcmUgYSBzcGVjaWFsIGNhc2UuIFdlIGhhdmUgdG8gZ3JhYiBlYWNoIGNoZWNrZWQgdmFsdWVzXG4gICAgLy8gYW5kIHB1dCB0aGVtIGludG8gYW4gYXJyYXkuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgZG9tTm9kZS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBpZiAodmFsdWUpIHsgLy8gTG9va3MgbGlrZSBjaGVja2JveCBhcnJheVxuICAgICAgICBpZiAoIXJlc3VsdFtrZXlzXSkge1xuICAgICAgICAgIHJlc3VsdFtrZXlzXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb21Ob2RlLmNoZWNrZWQpIHtcbiAgICAgICAgICByZXN1bHRba2V5c10ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXlzXSA9IGRvbU5vZGUuY2hlY2tlZCA/IDEgOiAwOyAvLyBTaW5nbGUgY2hlY2tib3hcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIE11bHRpcGxlIHNlbGVjdCBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgICAvLyBXZSBoYXZlIHRvIGdyYWIgZWFjaCBzZWxlY3RlZCBvcHRpb24gYW5kIHB1dCB0aGVtIGludG8gYW4gYXJyYXkuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBpZiAoZG9tTm9kZS50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xuICAgICAgICByZXN1bHRba2V5c10gPSBbXTtcbiAgICAgICAgY29uc3QgRE9NY2hpbGRzID0gZG9tTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb25bc2VsZWN0ZWRdJyk7IC8vIFRPRE86IHRoYXQgd29udCB3b3JrXG4gICAgICAgIGlmIChET01jaGlsZHMpIHtcbiAgICAgICAgICB0aGlzLmZvckVhY2goRE9NY2hpbGRzLCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXlzXS5wdXNoKGNoaWxkLnZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0ZWQgPSBkb21Ob2RlLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbltzZWxlY3RlZF0nKTtcbiAgICAgICAgcmVzdWx0W2tleXNdID0gdmFsdWU7IC8vIHNlbGVjdC52YWx1ZSBpc24ndCBnZXR0aW5nIHByb3BlciB2YWx1ZSBmb3IgdmFsdWUtbGVzcyBvcHRpb25zXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2suIFRoZSBkZWZhdWx0IG9uZSB0byBvbmUgYXNzaWduLlxuICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gIzIgLSBNdWx0aSBkaW1lbnNpb25hbCBhcnJheS5cbiAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgIGlmICghcmVzdWx0W2tleXNbMF1dKSB7XG4gICAgICByZXN1bHRba2V5c1swXV0gPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENoaWxkKHJlc3VsdFtrZXlzWzBdXSwgZG9tTm9kZSwga2V5cy5zcGxpY2UoMSwga2V5cy5sZW5ndGgpLCB2YWx1ZSk7XG4gIH1cblxuLy8gcmV0dXJuIHJlc3VsdDsgLy8gP1xufTtcbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybU9iaiA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRlc3Q7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy4kZm9ybUVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gSWdub3JlIHRoZSBlbGVtZW50IGlmIHRoZSAnbmFtZScgYXR0cmlidXRlIGlzIGVtcHR5LlxuICAgIC8vIElnbm9yZSB0aGUgJ2Rpc2FibGVkJyBlbGVtZW50cy5cbiAgICBpZiAodGhpcy4kZm9ybUVsZW1lbnRzW2ldLm5hbWUgJiYgIXRoaXMuJGZvcm1FbGVtZW50c1tpXS5kaXNhYmxlZCkge1xuICAgICAgdGVzdCA9IHRoaXMuJGZvcm1FbGVtZW50c1tpXS5uYW1lLm1hdGNoKHRoaXMua2V5UmVnZXgpO1xuICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmZvcm1PYmosIHRoaXMuJGZvcm1FbGVtZW50c1tpXSwgdGVzdCwgdGhpcy4kZm9ybUVsZW1lbnRzW2ldLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5mb3JtT2JqO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtVG9PYmplY3Q7XG4iLCJcbmNvbnN0IHNmID0gcmVxdWlyZSgnQHNwaXJhbC10b29sa2l0L2NvcmUnKS5kZWZhdWx0O1xuY29uc3QgRm9ybSA9IHJlcXVpcmUoJy4vRm9ybScpLmRlZmF1bHQ7XG5cbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKEZvcm0sICdqcy1zZi1mb3JtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybTsgLy8gRVM2IGRlZmF1bHQgZXhwb3J0IHdpbGwgbm90IGV4cG9zZSB1cyBhcyBnbG9iYWxcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cblxuLy8gUGx1Z2luIGluIGZvcm1NZXNzYWdlcyB0byBpdGVyYXRlIGZvcm0gaW5wdXRzXG5cbi8vIFRPRE8gY29tbWVudCBhbGwgb2YgdGhpc1xuLy8gVE9ETyBhc2sgQFN5c3RlcnIgdGhlIHJlYXNvbiBvZiB2YXJpYWJsZSAncHJlZml4J1xubGV0IG5vdEZvdW5kID0gW107XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJlZml4XVxuICovXG5mdW5jdGlvbiBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpIHtcbiAgLy8gZm9yIChjb25zdCBuYW1lIGluIG5hbWVzKSB7XG4gIE9iamVjdC5rZXlzKG5hbWVzKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghbmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJ0T2ZTZWxlY3RvciA9IChwcmVmaXgpID8gYCR7cHJlZml4fVske25hbWV9XWAgOiBuYW1lO1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmFtZXNbbmFtZV0pO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYFtuYW1lPScke3BhcnRPZlNlbGVjdG9yfSddYDtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgICAgZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzW25hbWVdLCBjYWxsYmFjaywgcGFydE9mU2VsZWN0b3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzpcbiAgICAgICAgbmFtZXNbbmFtZV0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAvLyBUT0RPIHJlZmFjdG9yIHRoaXMgc2hvdWxkIGNhbGwgcmVjdXJzaXZlXG4gICAgICAgICAgY29uc3Qgc2VsID0gYFtuYW1lPScke3BhcnRPZlNlbGVjdG9yfVtdJ11bdmFsdWU9JyR7ZWx9J11gO1xuICAgICAgICAgIGNvbnN0IG5vZGVzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbCk7XG4gICAgICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbm90Rm91bmQucHVzaChzZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbm9kZXMubGVuZ3RoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGVzW2ldLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgb2JqW3BhcnRPZlNlbGVjdG9yXSA9IG5hbWVzW25hbWVdO1xuICAgICAgICAgIG5vdEZvdW5kLnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gbm9kZXMubGVuZ3RoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgICAgICBjYWxsYmFjayhub2Rlc1tpXSwgbmFtZXNbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKCd1bmtub3duIHR5cGUgLScsIHR5cGUsICcgYW5kIG1lc3NhZ2UnLCBuYW1lc1tuYW1lXSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gbmFtZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ByZWZpeF1cbiAqIEByZXR1cm4ge1N0cmluZ1tdfVxuICovXG5jb25zdCBpdGVyYXRlSW5wdXRzID0gZnVuY3Rpb24gKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KSB7XG4gIG5vdEZvdW5kID0gW107XG4gIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCk7XG4gIGlmIChub3RGb3VuZC5sZW5ndGggIT09IDApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIC8vIGNvbnNvbGUubG9nKCdTb21lIGVsZW1lbnQgbm90IGZvdW5kIGluIGZvcm0nLCBub3RGb3VuZCk7XG4gIH1cbiAgcmV0dXJuIG5vdEZvdW5kO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpdGVyYXRlSW5wdXRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8tdXJsJnNvdXJjZU1hcCEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX187Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlUm9vdCI6IiJ9