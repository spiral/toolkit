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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybU1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzP2YwZjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJGb3JtIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJqc29uT25seSIsIndpbmRvdyIsIkZvcm1EYXRhIiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJpZCIsInZhbHVlIiwiZG9tQXR0ciIsInVybCIsIm1ldGhvZCIsImxvY2tUeXBlIiwibWVzc2FnZXNUeXBlIiwibWVzc2FnZXMiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwidXNlQWpheCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiYWpheENhbGxiYWNrIiwiYmVmb3JlU3VibWl0Q2FsbGJhY2siLCJhZnRlclN1Ym1pdENhbGxiYWNrIiwiaGVhZGVycyIsIkFjY2VwdCIsImdsb2JhbCIsImluc3RhbmNlcyIsImZvcm0iLCJmb3JtTWVzc2FnZXMiLCJkZWZhdWx0cyIsIm9uU3VibWl0IiwiZ2V0SW5zdGFuY2UiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZU1lc3NhZ2VzIiwiZGF0YSIsImdldEZvcm1EYXRhIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRyaWdnZXIiLCJzZW5kIiwibG9jayIsImFkZEluc3RhbmNlIiwidHlwZSIsIndhcm4iLCJvblByb2dyZXNzIiwicHJvZ3Jlc3MiLCJ1bmxvY2siLCJyZW1vdmVJbnN0YW5jZSIsInNob3dGb3JtTWVzc2FnZSIsInNob3dGaWVsZE1lc3NhZ2UiLCJzaG93RmllbGRzTWVzc2FnZXMiLCJzaG93TWVzc2FnZXMiLCJyZW1vdmVNZXNzYWdlIiwicHJvY2Vzc0Fuc3dlciIsImFuc3dlciIsInNob3dVbmtub3duIiwic2V0RmllbGRWYWx1ZXMiLCJ2YWx1ZXMiLCJlbCIsInNmU2V0VmFsdWUiLCJjaGVja2VkIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsImVudW1lcmF0ZUZpZWxkTmFtZXMiLCJsb2ciLCJtYXAiLCJnZXRBdHRyaWJ1dGUiLCJvcHRDYWxsYmFjayIsImZuIiwiZXZhbCIsImNhbGwiLCJzZW5kT3B0aW9ucyIsInRoYXQiLCJhamF4IiwidGhlbiIsIkZvcm1Ub09iamVjdCIsInNldE9wdGlvbnMiLCJvcHQiLCJhZGQiLCJET01Ob2RlIiwiZXZlbnRUeXBlIiwiZXZlbnRGdW5jdGlvbiIsImRpZSIsInJlbW92ZUFsbCIsInJlcXVpcmUiLCJ0ZW1wbGF0ZSIsImNsb3NlIiwicGxhY2UiLCJsZXZlbHMiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJzZWxlY3RvciIsImZpZWxkIiwiZmllbGRFbGVtZW50IiwiZmllbGRUZW1wbGF0ZSIsImZpZWxkUGxhY2UiLCJmaWVsZENsYXNzZXMiLCJtZXNzYWdlIiwiZGVidWciLCJub3RpY2UiLCJkYW5nZXIiLCJjcml0aWNhbCIsImFsZXJ0IiwiZW1lcmdlbmN5IiwicHJlcGFyZU1lc3NhZ2VPYmplY3QiLCJ0ZXh0IiwibW9kdWxlIiwiZXhwb3J0cyIsImlzTXNnIiwia2V5cyIsImZvckVhY2giLCJlcnJvcnMiLCJ3YXJuaW5ncyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJfbWVzc2FnZXMiLCJtIiwiY2xvc2VIYW5kbGVyIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZmllbGRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzcGxpY2UiLCJwYXJlbnQiLCJ0cGwiLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJyZXBsYWNlIiwidHBsRWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm1zZ0VsIiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicHVzaCIsImlzQ29udGFpbmVyIiwiZG9tVG9vbHMiLCJjbG9zZXN0IiwiY3VycmVudE1zZ0VsIiwibmV4dFNpYmxpbmciLCJmaWVsZENsb3NlIiwibm90Rm91bmQiLCJtc2dPYmoiLCJjb250YWluZXIiLCJmb3JtUmVmIiwia2V5UmVnZXgiLCIkZm9ybSIsIiRmb3JtRWxlbWVudHMiLCJmb3JtT2JqIiwic2V0Rm9ybSIsInNldEZvcm1FbGVtZW50cyIsInNldEZvcm1PYmoiLCJnZXRFbGVtZW50QnlJZCIsImlzRG9tTm9kZSIsIm5vZGVUeXBlIiwiYXJyIiwiY2FsbGJhY2siLCJpIiwiYWRkQ2hpbGQiLCJyZXN1bHQiLCJkb21Ob2RlIiwibm9kZU5hbWUiLCJET01jaGlsZHMiLCJjaGlsZCIsInRlc3QiLCJkaXNhYmxlZCIsIm1hdGNoIiwiZGVmYXVsdCIsInJlZ2lzdGVySW5zdGFuY2VUeXBlIiwiZmluZE5vZGVzIiwibmFtZXMiLCJwcmVmaXgiLCJwYXJ0T2ZTZWxlY3RvciIsInRvU3RyaW5nIiwic2VsIiwibm9kZXMiLCJtYXgiLCJvYmoiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywrR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsa0JBQWtCLEdBQUcseUdBQXlHLG1CQUFtQixHQUFHLFNBQVMsaUVBQWlFLFVBQVUs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QUFDRCxDQVJEOztBQVVBMUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEgsYUFBakIsQzs7Ozs7Ozs7Ozs7QUNsRkEsVUFBVSxtQkFBTyxDQUFDLDZKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyw0SkFBNEU7O0FBRTlHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxrRSIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiLCBbXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAc3BpcmFsLXRvb2xraXQvZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fc3BpcmFsX3Rvb2xraXRfY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIltkYXRhLWZvcm0tbWVzc2FnZV0gfiBbZGF0YS1mb3JtLWhpbnRdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pcy1pbnZhbGlkW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcl0+LmludmFsaWQtZmVlZGJhY2ssXFxuLmlzLWludmFsaWRbZGF0YS1maWVsZF0+LmludmFsaWQtZmVlZGJhY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQlwiLFwiZmlsZVwiOlwic3R5bGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJbZGF0YS1mb3JtLW1lc3NhZ2VdIH4gW2RhdGEtZm9ybS1oaW50XSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaXMtaW52YWxpZFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXJdPi5pbnZhbGlkLWZlZWRiYWNrLFxcbi5pcy1pbnZhbGlkW2RhdGEtZmllbGRdPi5pbnZhbGlkLWZlZWRiYWNrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuaW1wb3J0IGNvcmUgZnJvbSAnQHNwaXJhbC10b29sa2l0L2NvcmUnO1xuXG5pbXBvcnQgRm9ybVRvT2JqZWN0IGZyb20gJy4vZm9ybVRvT2JqZWN0JztcbmltcG9ydCBmb3JtTWVzc2FnZXMgZnJvbSAnLi9mb3JtTWVzc2FnZXMnO1xuaW1wb3J0IGl0ZXJhdGVJbnB1dHMgZnJvbSAnLi9pdGVyYXRlSW5wdXRzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5sZXQgaWRDb3VudGVyID0gMTtcblxuXG4vKipcbiAqIFNwaXJhbCBGb3Jtc1xuICogQHBhcmFtIHtPYmplY3R9IHNmXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZSAgRG9tTm9kZSBvZiBmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGFsbCBvcHRpb25zIHRvIG92ZXJyaWRlIGRlZmF1bHRcbiAqIEBjb25zdHJ1Y3RvciBGb3JtXG4gKiBAZXh0ZW5kcyBCYXNlRE9NQ29uc3RydWN0b3JcbiAqL1xuY29uc3QgRm9ybSA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLl9jb25zdHJ1Y3Qoc2YsIG5vZGUsIG9wdGlvbnMpO1xufTtcblxuXG4vKipcbiAqIEBsZW5kcyBzZi5Gb3JtLnByb3RvdHlwZVxuICovXG5Gb3JtLnByb3RvdHlwZSA9IGNvcmUuY3JlYXRlTW9kdWxlUHJvdG90eXBlKCk7XG5cbi8qKlxuICogTmFtZSB0byByZWdpc3RlclxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuRm9ybS5wcm90b3R5cGUubmFtZSA9ICdmb3JtJztcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGNhbGwgb24gbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICogQHByaXZhdGVcbiAqL1xuRm9ybS5wcm90b3R5cGUuX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIChzZiwgbm9kZSwgb3B0aW9ucykge1xuICB0aGlzLmluaXQoc2YsIG5vZGUsIG9wdGlvbnMpO1xuICB0aGlzLm9wdGlvbnMuanNvbk9ubHkgPSB0aGlzLm9wdGlvbnMuanNvbk9ubHkgJiYgISF3aW5kb3cuRm9ybURhdGE7XG4gIHRoaXMubWl4TWVzc2FnZXNPcHRpb25zKCk7XG4gIC8vIHRoaXMub3B0aW9ucy5maWxsRnJvbSAmJiB0aGlzLmZpbGxGaWVsZHNGcm9tKCk7IC8vIGlkIHJlcXVpcmVkIHRvIGZpbGwgZm9ybVxuXG4gIC8qKlxuICAgICAqIEBleHRlbmRzIERPTUV2ZW50c1xuICAgICAqIEB0eXBlIHtET01FdmVudHN9XG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKiAqL1xuICB0aGlzLkRPTUV2ZW50cyA9IG5ldyB0aGlzLnNmLmhlbHBlcnMuRE9NRXZlbnRzKCk7XG4gIHRoaXMuYWRkRXZlbnRzKCk7XG5cbiAgdGhpcy5ldmVudHMgPSBuZXcgdGhpcy5zZi5jb3JlLkV2ZW50cyhbJ2JlZm9yZVNlbmQnLCAnc3VjY2VzcycsICdlcnJvcicsICdhbHdheXMnXSk7XG4gIGNvcmUuaXRlcmF0ZUlucHV0cyA9IGl0ZXJhdGVJbnB1dHM7XG59O1xuXG4vKipcbiAqIEBvdmVycmlkZVxuICogQGluaGVyaXREb2NcbiAqIEBlbnVtIHtPYmplY3R9XG4gKiBAZGVwcmVjYXRlZFxuICovXG5Gb3JtLnByb3RvdHlwZS5vcHRpb25zVG9HcmFiID0ge1xuICAvKipcbiAgICAgKiBMaW5rIHRvIGZvcm1cbiAgICAgKi9cbiAgY29udGV4dDoge1xuICAgIHByb2Nlc3Nvcihub2RlKSB7IC8vIFByb2Nlc3NvclxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogTGluayB0byAndGhpcydcbiAgICAgKi9cbiAgc2VsZjoge1xuICAgIHByb2Nlc3NvcigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gIH0sXG4gIGlkOiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgdmFsdWU6IGBmb3JtOiR7aWRDb3VudGVyKyt9YCxcbiAgICBkb21BdHRyOiAnaWQnLFxuICB9LFxuICAvKipcbiAgICAgKiBVUkwgdG8gc2VuZCBmb3JtIChpZiBhamF4IGZvcm0pIDxiPkRlZmF1bHQ6IFwiL1wiPC9iPlxuICAgICAqL1xuICB1cmw6IHtcbiAgICBkb21BdHRyOiAnYWN0aW9uJyxcbiAgICB2YWx1ZTogJy8nLFxuICB9LFxuICAvKipcbiAgICAgKiBNZXRob2QgdG8gc2VuZCB0byBzZW5kIGZvcm0gKGlmIGFqYXggZm9ybSkgPGI+RGVmYXVsdDogXCJQT1NUXCI8L2I+XG4gICAgICovXG4gIG1ldGhvZDoge1xuICAgIGRvbUF0dHI6ICdtZXRob2QnLFxuICAgIHZhbHVlOiAnUE9TVCcsXG4gIH0sXG4gIC8qKlxuICAgICAqIExvY2sgdHlwZSB3aGVuIGZvcm0gc2VuZGluZyA8Yj5EZWZhdWx0OiBcImRlZmF1bHRcIjwvYj4gQHNlZSBzZi5sb2NrXG4gICAgICovXG4gIGxvY2tUeXBlOiB7XG4gICAgdmFsdWU6ICdkZWZhdWx0JyxcbiAgICBkb21BdHRyOiAnZGF0YS1sb2NrLXR5cGUnLFxuICB9LFxuICAvKipcbiAgICAgKiBGb3JjZSB0byBub3QgdXNlIEZvcm1EYXRhIGV2ZW4gaWYgaXQncyBhdmFpbGFibGVcbiAgICAgKi9cbiAganNvbk9ubHk6IHtcbiAgICB2YWx1ZTogZmFsc2UsXG4gICAgZG9tQXR0cjogJ2RhdGEtanNvbi1vbmx5JyxcbiAgfSxcbiAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgbWVzc2FnZXNUeXBlOiB7XG4gICAgdmFsdWU6ICdzcGlyYWwnLFxuICAgIGRvbUF0dHI6ICdkYXRhLW1lc3NhZ2VzLXR5cGUnLFxuICB9LFxuICAvKipcbiAgICAgKiBQYXNzIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgZm9ybSBtZXNzYWdlc1xuICAgICAqL1xuICBtZXNzYWdlczoge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkb21BdHRyOiAnZGF0YS1tZXNzYWdlcycsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCwgc2VsZikge1xuICAgICAgaWYgKCF2YWwpIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybSBKU09OLnBhcnNlIGVycm9yOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZi52YWx1ZSwgdmFsKTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBVc2UgYWpheCB0byBzdWJtaXQgZm9ybSA8Yj5EZWZhdWx0OiB0cnVlPC9iPlxuICAgICAqL1xuICB1c2VBamF4OiB7IC8vIEF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IHRydWUsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS11c2UtYWpheCcsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCkgeyAvLyBwcm9jZXNzb3IgdG8gcHJvY2VzcyBkYXRhIGJlZm9yZSByZXR1cm5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHZhbCA9ICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpID8gdmFsLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHZhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIENhbGxiYWNrIGFmdGVyIGZvcm0gc3VibWl0dGluZyA8Yj5EZWZhdWx0OiBmYWxzZTwvYj5cbiAgICAgKiA8YnIvPlxuICAgICAqIDxiPiBFeGFtcGxlIDwvYj5cbiAgICAgKiBmdW5jdGlvbihvcHRpb25zKXtcbiAgICAgKiAgLy9vcHRpb25zIGNvbnRhaW5zIGFsbCBvcHRpb25zIGFmdGVyIHNlbmRcbiAgICAgKiB9XG4gICAgICovXG4gIGFqYXhDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWNhbGxiYWNrJyxcbiAgfSxcbiAgYmVmb3JlU3VibWl0Q2FsbGJhY2s6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogZmFsc2UsIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1iZWZvcmUtc3VibWl0JyxcbiAgfSxcbiAgYWZ0ZXJTdWJtaXRDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWFmdGVyLXN1Ym1pdCcsXG4gIH0sXG4gIGhlYWRlcnM6IHsgLy8gYXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtaGVhZGVycycsXG4gICAgcHJvY2Vzc29yKG5vZGUsIHZhbCwgc2VsZikge1xuICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UodmFsKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gSlNPTi5wYXJzZSBlcnJvcjogJywgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHNlbGYudmFsdWUsIHZhbCk7XG4gICAgfSxcbiAgfSxcbn07XG5cbkZvcm0ucHJvdG90eXBlLm1peE1lc3NhZ2VzT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsID0gdGhpcy5zZi5vcHRpb25zLmluc3RhbmNlcy5mb3JtO1xuICB0aGlzLm9wdGlvbnMubWVzc2FnZXMgPSB7XG4gICAgLi4uZm9ybU1lc3NhZ2VzLmRlZmF1bHRzLFxuICAgIC4uLmdsb2JhbCAmJiBnbG9iYWwubWVzc2FnZXMgJiYgZ2xvYmFsLm1lc3NhZ2VzW3RoaXMub3B0aW9ucy5tZXNzYWdlc1R5cGVdLFxuICAgIC4uLnRoaXMub3B0aW9ucy5tZXNzYWdlcyxcbiAgfTtcbn07XG5cbi8qKlxuICogQ2FsbCBvbiBmb3JtIHN1Ym1pdFxuICogQHBhcmFtIHtFdmVudH0gZSBzdWJtaXQgZXZlbnRcbiAqL1xuRm9ybS5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAodGhpcy5zZi5nZXRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICAvLyBPbiBsb2NrIHdlIHNob3VsZCduIGRvIGFueSBhY3Rpb25zXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5yZW1vdmVNZXNzYWdlcygpO1xuXG4gIHRoaXMub3B0aW9ucy5kYXRhID0gdGhpcy5nZXRGb3JtRGF0YSgpO1xuXG4gIC8vIFdlIGNhbiBzZW5kIGZpbGVzIG9ubHkgd2l0aCBGb3JtRGF0YVxuICAvLyBJZiBmb3JtIGNvbnRhaW4gZmlsZXMgYW5kIG5vIEZvcm1EYXRhIHRoYW4gZGlzYWJsZSBhamF4XG4gIGlmICghdGhpcy5vcHRpb25zLmpzb25Pbmx5ICYmIHRoaXMub3B0aW9ucy5jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdmaWxlJ11cIikubGVuZ3RoICE9PSAwKSB7XG4gICAgdGhpcy5vcHRpb25zLnVzZUFqYXggPSBmYWxzZTtcbiAgfVxuICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdiZWZvcmVTZW5kJywgdGhpcy5vcHRpb25zKTtcbiAgLy8gc2YuZXZlbnRzLnBlcmZvcm1BY3Rpb24oXCJiZWZvcmVTdWJtaXRcIiwgdGhpcy5vcHRpb25zKTtcbiAgLy8gdGhpcy5ldmVudHMucGVyZm9ybUFjdGlvbihcImJlZm9yZVN1Ym1pdFwiLCB0aGlzLm9wdGlvbnMpO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMudXNlQWpheCkge1xuICAgIHRoaXMuc2VuZCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogTG9ja2VyLiBBZGQgb3IgcmVtb3ZlLlxuICovXG5Gb3JtLnByb3RvdHlwZS5sb2NrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XG4gIGlmICghbG9jaykge1xuICAgIGNvbnNvbGUud2FybihcIllvdSB0cnkgdG8gYWRkICdsb2NrJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLm9wdGlvbnMub25Qcm9ncmVzcyA9IGxvY2sucHJvZ3Jlc3M7XG59O1xuXG4vKipcbiAqIExvY2tlci4gQWRkIG9yIHJlbW92ZS5cbiAqL1xuRm9ybS5wcm90b3R5cGUudW5sb2NrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXRoaXMuc2YucmVtb3ZlSW5zdGFuY2UoJ2xvY2snLCB0aGlzLm5vZGUpKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byByZW1vdmUgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZFwiKTtcbiAgfVxufTtcblxuLy8gRm9ybSBtZXNzYWdlc1xuRm9ybS5wcm90b3R5cGUuc2hvd0Zvcm1NZXNzYWdlID0gZm9ybU1lc3NhZ2VzLnNob3dGb3JtTWVzc2FnZTtcbkZvcm0ucHJvdG90eXBlLnNob3dGaWVsZE1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMuc2hvd0ZpZWxkTWVzc2FnZTtcbkZvcm0ucHJvdG90eXBlLnNob3dGaWVsZHNNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5zaG93RmllbGRzTWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5zaG93TWVzc2FnZXMgPSBmb3JtTWVzc2FnZXMuc2hvd01lc3NhZ2VzO1xuRm9ybS5wcm90b3R5cGUucmVtb3ZlTWVzc2FnZXMgPSBmb3JtTWVzc2FnZXMucmVtb3ZlTWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVNZXNzYWdlID0gZm9ybU1lc3NhZ2VzLnJlbW92ZU1lc3NhZ2U7XG5cbkZvcm0ucHJvdG90eXBlLnByb2Nlc3NBbnN3ZXIgPSBmdW5jdGlvbiAoYW5zd2VyLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlc1R5cGUpIHtcbiAgICB0aGlzLnNob3dNZXNzYWdlcyhhbnN3ZXIsIHNob3dVbmtub3duKTtcbiAgfVxufTtcblxuRm9ybS5wcm90b3R5cGUuc2V0RmllbGRWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHRoaXMuc2YuaXRlcmF0ZUlucHV0cyh0aGlzLm5vZGUsIHZhbHVlcywgKGVsLCB2YWx1ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZWwuc2ZTZXRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwuc2ZTZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGlmICghZWwudmFsdWUpIHsgLy8gc2luZ2xlIGNoZWNrYm94XG4gICAgICAgICAgZWwuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcSxtYXgtbGVuXG4gICAgICAgICAgZWwuY2hlY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gKHZhbHVlLmluZGV4T2YoZWwudmFsdWUpID49IDApIDogKGVsLnZhbHVlID09IHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwudmFsdWUgPSB2YWx1ZTsgLy8gVE9ETzogVGhhdCB3b250IHdvcmsgZm9yIHJhZGlvZ3JvdXBzLCBldGMuXG4gICAgfVxuICB9KTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmVudW1lcmF0ZUZpZWxkTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnKSk7XG4gIHJldHVybiBbLi4udGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScpXS5tYXAoKGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7IC8vIFRPRE86IHN1cHBvcnQgY3VzdG9tIGlucHV0cyB0b29cbn07XG5cbkZvcm0ucHJvdG90eXBlLm9wdENhbGxiYWNrID0gZnVuY3Rpb24gKG9wdGlvbnMsIHR5cGUpIHtcbiAgaWYgKG9wdGlvbnNbdHlwZV0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuICAgIGNvbnN0IGZuID0gZXZhbChvcHRpb25zW3R5cGVdKTtcbiAgICBpZiAodHlwZW9mIChmbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZW5kIGZvcm0gdG8gc2VydmVyXG4gKiBAcGFyYW0ge09iamVjdH0gc2VuZE9wdGlvbnNcbiAqL1xuRm9ybS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kT3B0aW9ucykge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgaWYgKHRoaXMub3B0Q2FsbGJhY2soc2VuZE9wdGlvbnMsICdiZWZvcmVTdWJtaXRDYWxsYmFjaycpID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmxvY2soKTtcbiAgdGhpcy5zZi5hamF4LnNlbmQoc2VuZE9wdGlvbnMpLnRoZW4oXG4gICAgKGFuc3dlcikgPT4ge1xuICAgICAgdGhhdC5ldmVudHMudHJpZ2dlcignc3VjY2VzcycsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfSxcbiAgICAoZXJyb3IpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgc2VuZE9wdGlvbnMpO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0sXG4gICkudGhlbigoYW5zd2VyKSA9PiB7XG4gICAgdGhhdC5sb2NrKHRydWUpO1xuICAgIHRoYXQucHJvY2Vzc0Fuc3dlcihhbnN3ZXIpO1xuICAgIHRoaXMub3B0Q2FsbGJhY2soc2VuZE9wdGlvbnMsICdhZnRlclN1Ym1pdENhbGxiYWNrJyk7XG4gICAgdGhhdC5ldmVudHMudHJpZ2dlcignYWx3YXlzJywgc2VuZE9wdGlvbnMpO1xuICB9KTtcblxuICAvLyBUbyBjYW5jZWwgcmVxdWVzdDpcbiAgLy8gaWYgKHRoaXMuc2YuYWpheC5jYW5jZWwpIHRoaXMuc2YuYWpheC5jYW5jZWwoKTtcbn07XG5cbi8qKlxuICogU2VyaWFsaXplIGZvcm1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuRm9ybS5wcm90b3R5cGUuZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmpzb25Pbmx5KSB7XG4gICAgcmV0dXJuIG5ldyBGb3JtRGF0YSh0aGlzLm9wdGlvbnMuY29udGV4dCk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coYEZvcm0gXFxgJHt0aGlzLm9wdGlvbnMuY29udGV4dH1cXGAgd2VyZSBwcm9jZXNzZWQgd2l0aG91dCBGb3JtRGF0YS5gKTtcbiAgcmV0dXJuIG5ldyBGb3JtVG9PYmplY3QodGhpcy5vcHRpb25zLmNvbnRleHQpO1xufTtcblxuLyoqXG4gKiBTZXQgb3B0aW9ucyAob3ZlcndyaXRlIGN1cnJlbnQpXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0IG9wdGlvbnNcbiAqL1xuRm9ybS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHQpIHtcbiAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdCk7XG59O1xuXG4vKipcbiAqIEFkZCBhbGwgZXZlbnRzIGZvciBmb3Jtc1xuICovXG5Gb3JtLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuICB0aGlzLkRPTUV2ZW50cy5hZGQoW1xuICAgIHtcbiAgICAgIERPTU5vZGU6IHRoaXMub3B0aW9ucy5jb250ZXh0LFxuICAgICAgZXZlbnRUeXBlOiAnc3VibWl0JyxcbiAgICAgIGV2ZW50RnVuY3Rpb24oZSkge1xuICAgICAgICB0aGF0Lm9uU3VibWl0LmNhbGwodGhhdCwgZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0pO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgdmFyaWFibGVzIGFuZCBkaWVcbiAqL1xuRm9ybS5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLkRPTUV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgLy8gVE9ETyBkb24ndCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCdzIGFkZG9ucyBhbmQgcGx1Z2lucz9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAvLyB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJhbGVydCBmb3JtLW1zZyAke3R5cGV9XCI+PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiPsOXPC9idXR0b24+PHAgY2xhc3M9XCJtc2dcIj4ke3RleHR9PC9wPjwvZGl2PicsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dHlwZX0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93XCIgcm9sZT1cImFsZXJ0XCI+J1xuICAgICsgJyR7dGV4dH0nXG4gICAgKyAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+J1xuICAgICsgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+J1xuICAgICsgJzwvYnV0dG9uPidcbiAgICArICc8L2Rpdj4nLFxuICBjbG9zZTogJy5jbG9zZScsXG4gIHBsYWNlOiAnYm90dG9tJyxcbiAgbGV2ZWxzOiB7XG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLCBpbmZvOiAnaW5mbycsIHdhcm5pbmc6ICd3YXJuaW5nJywgZXJyb3I6ICdkYW5nZXInLFxuICB9LFxuICBzZWxlY3RvcjogJ1tkYXRhLW1lc3NhZ2VdJyxcbiAgZmllbGQ6ICdbZGF0YS1maWVsZF0nLFxuICBmaWVsZEVsZW1lbnQ6ICdbZGF0YS1pbnB1dF0nLFxuICBmaWVsZFRlbXBsYXRlOiAnPGRpdiBkYXRhLW1lc3NhZ2UgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCIgZGF0YS1mb3JtLW1lc3NhZ2U+JHt0ZXh0fTwvZGl2PicsXG4gIGZpZWxkUGxhY2U6ICdib3R0b20nLFxuICBmaWVsZENsYXNzZXM6IHtcbiAgICBzdWNjZXNzOiAnaXMtdmFsaWQnLCBpbmZvOiAnaXMtdmFsaWQnLCB3YXJuaW5nOiAnaXMtaW52YWxpZCcsIGVycm9yOiAnaXMtaW52YWxpZCcsXG4gIH0sXG59O1xuXG4vLyBPZnRlbiB1c2VkIGFsaWFzXG5kZWZhdWx0cy5sZXZlbHMubWVzc2FnZSA9IGRlZmF1bHRzLmxldmVscy5zdWNjZXNzO1xuXG4vLyBPdGhlciBhbGlhc2VzXG4vLyBQU1ItMyBzZXZlcml0eSBsZXZlbHMgbWFwcGluZyAoZGVidWcsIGluZm8sIG5vdGljZSwgd2FybmluZywgZXJyb3IsIGNyaXRpY2FsLCBhbGVydCwgZW1lcmdlbmN5KVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BocC1maWcvZmlnLXN0YW5kYXJkcy9ibG9iL21hc3Rlci9hY2NlcHRlZC9QU1ItMy1sb2dnZXItaW50ZXJmYWNlLm1kXG5kZWZhdWx0cy5sZXZlbHMuZGVidWcgPSBkZWZhdWx0cy5sZXZlbHMuc3VjY2VzcztcbmRlZmF1bHRzLmxldmVscy5pbmZvID0gZGVmYXVsdHMubGV2ZWxzLm5vdGljZSA9IGRlZmF1bHRzLmxldmVscy5pbmZvO1xuZGVmYXVsdHMubGV2ZWxzLmRhbmdlciA9IGRlZmF1bHRzLmxldmVscy5jcml0aWNhbCA9IGRlZmF1bHRzLmxldmVscy5hbGVydCA9IGRlZmF1bHRzLmxldmVscy5lbWVyZ2VuY3kgPSBkZWZhdWx0cy5sZXZlbHMuZXJyb3I7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gJ29iamVjdCcpIHtcbiAgICBtZXNzYWdlID0geyB0ZXh0OiBtZXNzYWdlLCB0eXBlIH07XG4gIH1cbiAgbWVzc2FnZS50ZXh0ID0gbWVzc2FnZS50ZXh0IHx8IG1lc3NhZ2UubWVzc2FnZSB8fCBtZXNzYWdlO1xuICBtZXNzYWdlLnR5cGUgPSBtZXNzYWdlLnR5cGUgfHwgdHlwZTtcbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0cyxcbiAgc2hvd01lc3NhZ2VzKGFuc3dlciwgc2hvd1Vua25vd24gPSB0cnVlKSB7XG4gICAgaWYgKCFhbnN3ZXIpIHJldHVybjtcblxuICAgIGxldCBpc01zZyA9IGZhbHNlO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgaWYgKGFuc3dlci5kYXRhKSB7XG4gICAgICAvLyBmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscykge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscykuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBpZiAoYW5zd2VyLmRhdGFbdHlwZV0pIHtcbiAgICAgICAgICB0aGlzLnNob3dGb3JtTWVzc2FnZShhbnN3ZXIuZGF0YVt0eXBlXSwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVsc1t0eXBlXSk7XG4gICAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFuc3dlci5kYXRhLm1lc3NhZ2VzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLm1lc3NhZ2VzLCAnc3VjY2VzcycsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLmVycm9ycykge1xuICAgICAgICB0aGlzLnNob3dGaWVsZHNNZXNzYWdlcyhhbnN3ZXIuZGF0YS5lcnJvcnMsICdlcnJvcicsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLndhcm5pbmdzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLndhcm5pbmdzLCAnd2FybmluZycsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNNc2cpIHtcbiAgICAgIGxldCBlcnJvcjtcbiAgICAgIGlmICghYW5zd2VyLnN0YXR1cykgeyAvLyBOZXR3b3JrLmVycm9yXG4gICAgICAgIGVycm9yID0gYW5zd2VyO1xuICAgICAgfSBlbHNlIGlmIChhbnN3ZXIuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIGVycm9yID0gYW5zd2VyLnN0YXR1cyA/IGAke2Fuc3dlci5zdGF0dXN9IGAgOiAnJztcbiAgICAgICAgZXJyb3IgKz0gYW5zd2VyLnN0YXR1c1RleHQgPyBhbnN3ZXIuc3RhdHVzVGV4dCA6ICcnO1xuICAgICAgICBlcnJvciArPSBhbnN3ZXIuZGF0YSAmJiAhYW5zd2VyLnN0YXR1c1RleHQgPyBhbnN3ZXIuZGF0YSA6ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGVycm9yKSB0aGlzLnNob3dGb3JtTWVzc2FnZShlcnJvciwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscy5lcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKG0uY2xvc2UpIHtcbiAgICAgICAgbS5jbG9zZUhhbmRsZXIgPSB0aGF0LnJlbW92ZU1lc3NhZ2UuYmluZCh0aGF0LCBtKTtcbiAgICAgICAgbS5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG0uY2xvc2VIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVNZXNzYWdlKG0sIGUpIHtcbiAgICBpZiAobS5jbG9zZSkge1xuICAgICAgbS5jbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG0uY2xvc2VIYW5kbGVyKTtcbiAgICB9XG4gICAgbS5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0uZWwpO1xuICAgIGlmIChtLmZpZWxkKSB7XG4gICAgICBjb25zdCBmaWVsZEVsID0gbS5maWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZEVsZW1lbnQpO1xuICAgICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgICAgZmllbGRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbbS50eXBlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtLmZpZWxkLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1ttLnR5cGVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9tZXNzYWdlcy5zcGxpY2UodGhpcy5fbWVzc2FnZXMuaW5kZXhPZihtKSwgMSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZU1lc3NhZ2VzKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9tZXNzYWdlcykge1xuICAgICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICB0aGF0LnJlbW92ZU1lc3NhZ2UobSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoYXQuX21lc3NhZ2VzID0gW107XG4gIH0sXG5cbiAgc2hvd0Zvcm1NZXNzYWdlKG1lc3NhZ2UsIHR5cGUpIHtcbiAgICBsZXQgcGFyZW50O1xuICAgIGxldCB0cGwgPSB0aGlzLm9wdGlvbnMubWVzc2FnZXMudGVtcGxhdGU7XG5cbiAgICBtZXNzYWdlID0gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSk7XG5cbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVzc2FnZSkge1xuICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkgcmV0dXJuO1xuICAgICAgdHBsID0gdHBsLnJlcGxhY2UoYFxcJHske2l0ZW19fWAsIG1lc3NhZ2VbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHBsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwbEVsZW0uaW5uZXJIVE1MID0gdHBsO1xuICAgIGNvbnN0IG1zZ0VsID0gdHBsRWxlbS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UgPT09ICd0b3AnKSB7XG4gICAgICB0aGlzLm5vZGUuaW5zZXJ0QmVmb3JlKG1zZ0VsLCB0aGlzLm5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goeyBlbDogbXNnRWwsIGNsb3NlOiBtc2dFbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5jbG9zZSkgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaXNDb250YWluZXJdXG4gICAgICovXG4gIHNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUsIGlzQ29udGFpbmVyKSB7XG4gICAgbGV0IGZpZWxkID0gaXNDb250YWluZXIgPyBlbCA6IHNmLmhlbHBlcnMuZG9tVG9vbHMuY2xvc2VzdChlbCwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkKTtcbiAgICBsZXQgdHBsID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkVGVtcGxhdGU7XG5cbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZSA9IHByZXBhcmVNZXNzYWdlT2JqZWN0KG1lc3NhZ2UsIHR5cGUpO1xuXG4gICAgY29uc3QgZmllbGRFbCA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkRWxlbWVudCk7XG4gICAgY29uc3QgY3VycmVudE1zZ0VsID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuc2VsZWN0b3IpO1xuXG4gICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgIGZpZWxkRWwuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW3R5cGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW3R5cGVdKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVzc2FnZSkge1xuICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkgcmV0dXJuO1xuICAgICAgdHBsID0gdHBsLnJlcGxhY2UoYFxcJHske2l0ZW19fWAsIG1lc3NhZ2VbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHBsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwbEVsZW0uaW5uZXJIVE1MID0gdHBsO1xuICAgIGNvbnN0IG1zZ0VsID0gdHBsRWxlbS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlID09PSAnYm90dG9tJykge1xuICAgICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgICAgZmllbGQuaW5zZXJ0QmVmb3JlKG1zZ0VsLCBmaWVsZEVsLm5leHRTaWJsaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAoIWN1cnJlbnRNc2dFbCkge1xuICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSA9PT0gJ3RvcCcpIHtcbiAgICAgIGZpZWxkLmluc2VydEJlZm9yZShtc2dFbCwgZmllbGQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSk7XG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMucHVzaCh7XG4gICAgICBlbDogbXNnRWwsXG4gICAgICBjbG9zZTogbXNnRWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbG9zZSksXG4gICAgICBmaWVsZCxcbiAgICAgIHR5cGUsXG4gICAgfSk7XG4gIH0sXG5cbiAgc2hvd0ZpZWxkc01lc3NhZ2VzKG1lc3NhZ2VzLCB0eXBlLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBub3RGb3VuZCA9IHNmLml0ZXJhdGVJbnB1dHModGhpcy5ub2RlLCBtZXNzYWdlcywgKGVsLCBtZXNzYWdlKSA9PiB7XG4gICAgICB0aGF0LnNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHNob3dVbmtub3duKSB7XG4gICAgICBub3RGb3VuZC5mb3JFYWNoKChtc2dPYmopID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMobXNnT2JqKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhhdC5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXI9XCIke25hbWV9XCJdYCk7XG4gICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgLy8gVE9ETyBjaGVjayBjb250YWluZXIuZGF0YXNldC5tZXNzYWdlVmFyaWFudD8gdmFyaWFudHMgYXJlIFwiZmllbGRcIiBhbmQgXCJmb3JtXCJcbiAgICAgICAgICAgIHRoYXQuc2hvd0ZpZWxkTWVzc2FnZShjb250YWluZXIsIG1zZ09ialtuYW1lXSwgdHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKlxuICogZ2l0aHViLmNvbS9zZXJiYW5naGl0YS9Gb3JtVG9PYmplY3QuanMgMS4wLjEgIChjKSAyMDEzIFNlcmJhbiBHaGl0YSA8c2VyYmFuZ2hpdGFAZ21haWwuY29tPlxuICogQGxpY2VuY2UgTUlUXG4gKi9cbi8vIENvbnN0cnVjdG9yLlxuXG5jb25zdCBGb3JtVG9PYmplY3QgPSBmdW5jdGlvbiAoZm9ybVJlZikge1xuICBpZiAoIWZvcm1SZWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aGlzLmZvcm1SZWYgPSBmb3JtUmVmO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgdGhpcy5rZXlSZWdleCA9IC9bXlxcW1xcXV0rL2c7XG4gIHRoaXMuJGZvcm0gPSBudWxsO1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSBbXTtcbiAgdGhpcy5mb3JtT2JqID0ge307XG5cbiAgaWYgKCF0aGlzLnNldEZvcm0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIXRoaXMuc2V0Rm9ybUVsZW1lbnRzKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5zZXRGb3JtT2JqKCk7XG59O1xuXG4vLyBTZXQgdGhlIG1haW4gZm9ybSBvYmplY3Qgd2UgYXJlIHdvcmtpbmcgb24uXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIHN3aXRjaCAodHlwZW9mIHRoaXMuZm9ybVJlZikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICB0aGlzLiRmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5mb3JtUmVmKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh0aGlzLmlzRG9tTm9kZSh0aGlzLmZvcm1SZWYpKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLmZvcm1SZWY7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gdGhpcy4kZm9ybTtcbn07XG5cbi8vIFNldCB0aGUgZWxlbWVudHMgd2UgbmVlZCB0byBwYXJzZS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSB0aGlzLiRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gIHJldHVybiB0aGlzLiRmb3JtRWxlbWVudHMubGVuZ3RoO1xufTtcblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MIG5vZGUuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmlzRG9tTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHJldHVybiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgJ25vZGVUeXBlJyBpbiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vLyBJdGVyYXRpb24gdGhyb3VnaCBhcnJheXMgYW5kIG9iamVjdHMuIENvbXBhdGlibGUgd2l0aCBJRS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChhcnIsIGNhbGxiYWNrKSB7XG4gIGlmIChbXS5mb3JFYWNoKSB7XG4gICAgW10uZm9yRWFjaC5jYWxsKGFyciwgY2FsbGJhY2spO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGxldCBpO1xuICAvLyBmb3IgKGkgaW4gYXJyKSB7XG4gIE9iamVjdC5rZXlzKGFycikuZm9yRWFjaCgoaSkgPT4ge1xuICAgIC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgaW5zdGVhZCBvZiBhcnIuaGFzT3duUHJvcGVydHkgZm9yIElFOCBjb21wYXRpYmlsaXR5LlxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJyLCBpKSkge1xuICAgICAgY2FsbGJhY2suY2FsbChhcnIsIGFycltpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFJlY3Vyc2l2ZSBtZXRob2QgdGhhdCBhZGRzIGtleXMgYW5kIHZhbHVlcyBvZiB0aGUgY29ycmVzcG9uZGluZyBmaWVsZHMuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKHJlc3VsdCwgZG9tTm9kZSwga2V5cywgdmFsdWUpIHtcbiAgLy8gIzEgLSBTaW5nbGUgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgcmFkaW8gdGhhdCBpcyBjaGVja2VkLlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrYm94ZXMgYXJlIGEgc3BlY2lhbCBjYXNlLiBXZSBoYXZlIHRvIGdyYWIgZWFjaCBjaGVja2VkIHZhbHVlc1xuICAgIC8vIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgaWYgKHZhbHVlKSB7IC8vIExvb2tzIGxpa2UgY2hlY2tib3ggYXJyYXlcbiAgICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICAgIGlmICghcmVzdWx0W2tleXNdKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5c10gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0W2tleXNdLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5c10gPSBkb21Ob2RlLmNoZWNrZWQgPyAxIDogMDsgLy8gU2luZ2xlIGNoZWNrYm94XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBNdWx0aXBsZSBzZWxlY3QgaXMgYSBzcGVjaWFsIGNhc2UuXG4gICAgLy8gV2UgaGF2ZSB0byBncmFiIGVhY2ggc2VsZWN0ZWQgb3B0aW9uIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgaWYgKGRvbU5vZGUudHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgICAgcmVzdWx0W2tleXNdID0gW107XG4gICAgICAgIGNvbnN0IERPTWNoaWxkcyA9IGRvbU5vZGUucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uW3NlbGVjdGVkXScpOyAvLyBUT0RPOiB0aGF0IHdvbnQgd29ya1xuICAgICAgICBpZiAoRE9NY2hpbGRzKSB7XG4gICAgICAgICAgdGhpcy5mb3JFYWNoKERPTWNoaWxkcywgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICByZXN1bHRba2V5c10ucHVzaChjaGlsZC52YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGVkID0gZG9tTm9kZS5xdWVyeVNlbGVjdG9yKCdvcHRpb25bc2VsZWN0ZWRdJyk7XG4gICAgICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlOyAvLyBzZWxlY3QudmFsdWUgaXNuJ3QgZ2V0dGluZyBwcm9wZXIgdmFsdWUgZm9yIHZhbHVlLWxlc3Mgb3B0aW9uc1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrLiBUaGUgZGVmYXVsdCBvbmUgdG8gb25lIGFzc2lnbi5cbiAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgfVxuXG4gIC8vICMyIC0gTXVsdGkgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoIXJlc3VsdFtrZXlzWzBdXSkge1xuICAgICAgcmVzdWx0W2tleXNbMF1dID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDaGlsZChyZXN1bHRba2V5c1swXV0sIGRvbU5vZGUsIGtleXMuc3BsaWNlKDEsIGtleXMubGVuZ3RoKSwgdmFsdWUpO1xuICB9XG5cbi8vIHJldHVybiByZXN1bHQ7IC8vID9cbn07XG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm1PYmogPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0ZXN0O1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuJGZvcm1FbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIElnbm9yZSB0aGUgZWxlbWVudCBpZiB0aGUgJ25hbWUnIGF0dHJpYnV0ZSBpcyBlbXB0eS5cbiAgICAvLyBJZ25vcmUgdGhlICdkaXNhYmxlZCcgZWxlbWVudHMuXG4gICAgaWYgKHRoaXMuJGZvcm1FbGVtZW50c1tpXS5uYW1lICYmICF0aGlzLiRmb3JtRWxlbWVudHNbaV0uZGlzYWJsZWQpIHtcbiAgICAgIHRlc3QgPSB0aGlzLiRmb3JtRWxlbWVudHNbaV0ubmFtZS5tYXRjaCh0aGlzLmtleVJlZ2V4KTtcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5mb3JtT2JqLCB0aGlzLiRmb3JtRWxlbWVudHNbaV0sIHRlc3QsIHRoaXMuJGZvcm1FbGVtZW50c1tpXS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZm9ybU9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybVRvT2JqZWN0O1xuIiwiXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5jb25zdCBGb3JtID0gcmVxdWlyZSgnLi9Gb3JtJykuZGVmYXVsdDtcblxuc2YucmVnaXN0ZXJJbnN0YW5jZVR5cGUoRm9ybSwgJ2pzLXNmLWZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtOyAvLyBFUzYgZGVmYXVsdCBleHBvcnQgd2lsbCBub3QgZXhwb3NlIHVzIGFzIGdsb2JhbFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vLyBQbHVnaW4gaW4gZm9ybU1lc3NhZ2VzIHRvIGl0ZXJhdGUgZm9ybSBpbnB1dHNcblxuLy8gVE9ETyBjb21tZW50IGFsbCBvZiB0aGlzXG4vLyBUT0RPIGFzayBAU3lzdGVyciB0aGUgcmVhc29uIG9mIHZhcmlhYmxlICdwcmVmaXgnXG5sZXQgbm90Rm91bmQgPSBbXTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtTdHJpbmd9IFtwcmVmaXhdXG4gKi9cbmZ1bmN0aW9uIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCkge1xuICAvLyBmb3IgKGNvbnN0IG5hbWUgaW4gbmFtZXMpIHtcbiAgT2JqZWN0LmtleXMobmFtZXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgaWYgKCFuYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRPZlNlbGVjdG9yID0gKHByZWZpeCkgPyBgJHtwcmVmaXh9WyR7bmFtZX1dYCA6IG5hbWU7XG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuYW1lc1tuYW1lXSk7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgW25hbWU9JyR7cGFydE9mU2VsZWN0b3J9J11gO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXNbbmFtZV0sIGNhbGxiYWNrLCBwYXJ0T2ZTZWxlY3Rvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnW29iamVjdCBBcnJheV0nOlxuICAgICAgICBuYW1lc1tuYW1lXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIC8vIFRPRE8gcmVmYWN0b3IgdGhpcyBzaG91bGQgY2FsbCByZWN1cnNpdmVcbiAgICAgICAgICBjb25zdCBzZWwgPSBgW25hbWU9JyR7cGFydE9mU2VsZWN0b3J9W10nXVt2YWx1ZT0nJHtlbH0nXWA7XG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBub3RGb3VuZC5wdXNoKHNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY2FsbGJhY2sobm9kZXNbaV0sIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgICBjb25zdCBub2RlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICBvYmpbcGFydE9mU2VsZWN0b3JdID0gbmFtZXNbbmFtZV07XG4gICAgICAgICAgbm90Rm91bmQucHVzaChvYmopO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGVzW2ldLCBuYW1lc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Vua25vd24gdHlwZSAtJywgdHlwZSwgJyBhbmQgbWVzc2FnZScsIG5hbWVzW25hbWVdKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJlZml4XVxuICogQHJldHVybiB7U3RyaW5nW119XG4gKi9cbmNvbnN0IGl0ZXJhdGVJbnB1dHMgPSBmdW5jdGlvbiAoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpIHtcbiAgbm90Rm91bmQgPSBbXTtcbiAgZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KTtcbiAgaWYgKG5vdEZvdW5kLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgLy8gY29uc29sZS5sb2coJ1NvbWUgZWxlbWVudCBub3QgZm91bmQgaW4gZm9ybScsIG5vdEZvdW5kKTtcbiAgfVxuICByZXR1cm4gbm90Rm91bmQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZXJhdGVJbnB1dHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPy11cmwmc291cmNlTWFwIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlUm9vdCI6IiJ9