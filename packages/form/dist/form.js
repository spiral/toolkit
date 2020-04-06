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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybU1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRlSW5wdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzP2YwZjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIiJdLCJuYW1lcyI6WyJpZENvdW50ZXIiLCJGb3JtIiwic2YiLCJub2RlIiwib3B0aW9ucyIsIl9jb25zdHJ1Y3QiLCJwcm90b3R5cGUiLCJjb3JlIiwiY3JlYXRlTW9kdWxlUHJvdG90eXBlIiwibmFtZSIsImluaXQiLCJqc29uT25seSIsIndpbmRvdyIsIkZvcm1EYXRhIiwibWl4TWVzc2FnZXNPcHRpb25zIiwiRE9NRXZlbnRzIiwiaGVscGVycyIsImFkZEV2ZW50cyIsImV2ZW50cyIsIkV2ZW50cyIsIml0ZXJhdGVJbnB1dHMiLCJvcHRpb25zVG9HcmFiIiwiY29udGV4dCIsInByb2Nlc3NvciIsInNlbGYiLCJpZCIsInZhbHVlIiwiZG9tQXR0ciIsInVybCIsIm1ldGhvZCIsImxvY2tUeXBlIiwibWVzc2FnZXNUeXBlIiwibWVzc2FnZXMiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwidXNlQWpheCIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiYWpheENhbGxiYWNrIiwiYmVmb3JlU3VibWl0Q2FsbGJhY2siLCJhZnRlclN1Ym1pdENhbGxiYWNrIiwiaGVhZGVycyIsIkFjY2VwdCIsImdsb2JhbCIsImluc3RhbmNlcyIsImZvcm0iLCJmb3JtTWVzc2FnZXMiLCJkZWZhdWx0cyIsIm9uU3VibWl0IiwiZ2V0SW5zdGFuY2UiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZU1lc3NhZ2VzIiwiZGF0YSIsImdldEZvcm1EYXRhIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInRyaWdnZXIiLCJzZW5kIiwibG9jayIsImFkZEluc3RhbmNlIiwidHlwZSIsIndhcm4iLCJvblByb2dyZXNzIiwicHJvZ3Jlc3MiLCJ1bmxvY2siLCJyZW1vdmVJbnN0YW5jZSIsInNob3dGb3JtTWVzc2FnZSIsInNob3dGaWVsZE1lc3NhZ2UiLCJzaG93RmllbGRzTWVzc2FnZXMiLCJzaG93TWVzc2FnZXMiLCJyZW1vdmVNZXNzYWdlIiwicHJvY2Vzc0Fuc3dlciIsImFuc3dlciIsInNob3dVbmtub3duIiwic2V0RmllbGRWYWx1ZXMiLCJ2YWx1ZXMiLCJlbCIsInNmU2V0VmFsdWUiLCJlbnVtZXJhdGVGaWVsZE5hbWVzIiwibG9nIiwibWFwIiwiZ2V0QXR0cmlidXRlIiwib3B0Q2FsbGJhY2siLCJmbiIsImV2YWwiLCJjYWxsIiwic2VuZE9wdGlvbnMiLCJ0aGF0IiwiYWpheCIsInRoZW4iLCJGb3JtVG9PYmplY3QiLCJzZXRPcHRpb25zIiwib3B0IiwiYWRkIiwiRE9NTm9kZSIsImV2ZW50VHlwZSIsImV2ZW50RnVuY3Rpb24iLCJkaWUiLCJyZW1vdmVBbGwiLCJyZXF1aXJlIiwidGVtcGxhdGUiLCJjbG9zZSIsInBsYWNlIiwibGV2ZWxzIiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwic2VsZWN0b3IiLCJmaWVsZCIsImZpZWxkRWxlbWVudCIsImZpZWxkVGVtcGxhdGUiLCJmaWVsZFBsYWNlIiwiZmllbGRDbGFzc2VzIiwibWVzc2FnZSIsImRlYnVnIiwibm90aWNlIiwiZGFuZ2VyIiwiY3JpdGljYWwiLCJhbGVydCIsImVtZXJnZW5jeSIsInByZXBhcmVNZXNzYWdlT2JqZWN0IiwidGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc01zZyIsImtleXMiLCJmb3JFYWNoIiwiZXJyb3JzIiwid2FybmluZ3MiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiX21lc3NhZ2VzIiwibSIsImNsb3NlSGFuZGxlciIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZpZWxkRWwiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3BsaWNlIiwiaW5kZXhPZiIsInBhcmVudCIsInRwbCIsIml0ZW0iLCJoYXNPd25Qcm9wZXJ0eSIsInJlcGxhY2UiLCJ0cGxFbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwibXNnRWwiLCJmaXJzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJwdXNoIiwiaXNDb250YWluZXIiLCJkb21Ub29scyIsImNsb3Nlc3QiLCJjdXJyZW50TXNnRWwiLCJuZXh0U2libGluZyIsImZpZWxkQ2xvc2UiLCJub3RGb3VuZCIsIm1zZ09iaiIsImNvbnRhaW5lciIsImZvcm1SZWYiLCJrZXlSZWdleCIsIiRmb3JtIiwiJGZvcm1FbGVtZW50cyIsImZvcm1PYmoiLCJzZXRGb3JtIiwic2V0Rm9ybUVsZW1lbnRzIiwic2V0Rm9ybU9iaiIsImdldEVsZW1lbnRCeUlkIiwiaXNEb21Ob2RlIiwibm9kZVR5cGUiLCJhcnIiLCJjYWxsYmFjayIsImkiLCJhZGRDaGlsZCIsInJlc3VsdCIsImRvbU5vZGUiLCJub2RlTmFtZSIsImNoZWNrZWQiLCJET01jaGlsZHMiLCJjaGlsZCIsInRlc3QiLCJkaXNhYmxlZCIsIm1hdGNoIiwiZGVmYXVsdCIsInJlZ2lzdGVySW5zdGFuY2VUeXBlIiwiZmluZE5vZGVzIiwibmFtZXMiLCJwcmVmaXgiLCJwYXJ0T2ZTZWxlY3RvciIsInRvU3RyaW5nIiwic2VsIiwibm9kZXMiLCJtYXgiLCJvYmoiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywrR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUywyQ0FBMkMsa0JBQWtCLEdBQUcseUdBQXlHLG1CQUFtQixHQUFHLFNBQVMsaUVBQWlFLFVBQVUsTUFBTSxNQUFNLFVBQVUsc0ZB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c0R1SSxLQUFLLENBQUNqTSxJQUFELENBQTNEO0FBaENKO0FBa0NELEdBNUNEO0FBNkNEO0FBRUQ7Ozs7Ozs7OztBQU9BLE1BQU1XLGFBQWEsR0FBRyxVQUFVRSxPQUFWLEVBQW1Cb0wsS0FBbkIsRUFBMEJmLFFBQTFCLEVBQW9DZ0IsTUFBcEMsRUFBNEM7QUFDaEUvQixVQUFRLEdBQUcsRUFBWDtBQUNBNkIsV0FBUyxDQUFDbkwsT0FBRCxFQUFVb0wsS0FBVixFQUFpQmYsUUFBakIsRUFBMkJnQixNQUEzQixDQUFUOztBQUNBLE1BQUkvQixRQUFRLENBQUM5RyxNQUFULEtBQW9CLENBQXhCLEVBQTJCLENBQ3pCO0FBQ0E7QUFDRDs7QUFDRCxTQUFPOEcsUUFBUDtBQUNELENBUkQ7O0FBVUEzQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI5RyxhQUFqQixDOzs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMsNkpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDRKQUE0RTs7QUFFOUc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLGtFIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3BpcmFsLXRvb2xraXQvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHNwaXJhbC10b29sa2l0L2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBzcGlyYWwtdG9vbGtpdC9mb3JtXCJdID0gZmFjdG9yeShyb290W1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiW2RhdGEtZm9ybS1tZXNzYWdlXSB+IFtkYXRhLWZvcm0taGludF0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlzLWludmFsaWRbZGF0YS1tZXNzYWdlLXBsYWNlaG9sZGVyXT4uaW52YWxpZC1mZWVkYmFjayxcXG4uaXMtaW52YWxpZFtkYXRhLWZpZWxkXT4uaW52YWxpZC1mZWVkYmFjayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIltkYXRhLWZvcm0tbWVzc2FnZV0gfiBbZGF0YS1mb3JtLWhpbnRdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pcy1pbnZhbGlkW2RhdGEtbWVzc2FnZS1wbGFjZWhvbGRlcl0+LmludmFsaWQtZmVlZGJhY2ssXFxuLmlzLWludmFsaWRbZGF0YS1maWVsZF0+LmludmFsaWQtZmVlZGJhY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgY29yZSBmcm9tICdAc3BpcmFsLXRvb2xraXQvY29yZSc7XG5cbmltcG9ydCBGb3JtVG9PYmplY3QgZnJvbSAnLi9mb3JtVG9PYmplY3QnO1xuaW1wb3J0IGZvcm1NZXNzYWdlcyBmcm9tICcuL2Zvcm1NZXNzYWdlcyc7XG5pbXBvcnQgaXRlcmF0ZUlucHV0cyBmcm9tICcuL2l0ZXJhdGVJbnB1dHMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmxldCBpZENvdW50ZXIgPSAxO1xuXG5cbi8qKlxuICogU3BpcmFsIEZvcm1zXG4gKiBAcGFyYW0ge09iamVjdH0gc2ZcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlICBEb21Ob2RlIG9mIGZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gYWxsIG9wdGlvbnMgdG8gb3ZlcnJpZGUgZGVmYXVsdFxuICogQGNvbnN0cnVjdG9yIEZvcm1cbiAqIEBleHRlbmRzIEJhc2VET01Db25zdHJ1Y3RvclxuICovXG5jb25zdCBGb3JtID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuX2NvbnN0cnVjdChzZiwgbm9kZSwgb3B0aW9ucyk7XG59O1xuXG5cbi8qKlxuICogQGxlbmRzIHNmLkZvcm0ucHJvdG90eXBlXG4gKi9cbkZvcm0ucHJvdG90eXBlID0gY29yZS5jcmVhdGVNb2R1bGVQcm90b3R5cGUoKTtcblxuLyoqXG4gKiBOYW1lIHRvIHJlZ2lzdGVyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5Gb3JtLnByb3RvdHlwZS5uYW1lID0gJ2Zvcm0nO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FsbCBvbiBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGUgIERvbU5vZGUgb2YgZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBhbGwgb3B0aW9ucyB0byBvdmVycmlkZSBkZWZhdWx0XG4gKiBAcHJpdmF0ZVxuICovXG5Gb3JtLnByb3RvdHlwZS5fY29uc3RydWN0ID0gZnVuY3Rpb24gKHNmLCBub2RlLCBvcHRpb25zKSB7XG4gIHRoaXMuaW5pdChzZiwgbm9kZSwgb3B0aW9ucyk7XG4gIHRoaXMub3B0aW9ucy5qc29uT25seSA9IHRoaXMub3B0aW9ucy5qc29uT25seSAmJiAhIXdpbmRvdy5Gb3JtRGF0YTtcbiAgdGhpcy5taXhNZXNzYWdlc09wdGlvbnMoKTtcbiAgLy8gdGhpcy5vcHRpb25zLmZpbGxGcm9tICYmIHRoaXMuZmlsbEZpZWxkc0Zyb20oKTsgLy8gaWQgcmVxdWlyZWQgdG8gZmlsbCBmb3JtXG5cbiAgLyoqXG4gICAgICogQGV4dGVuZHMgRE9NRXZlbnRzXG4gICAgICogQHR5cGUge0RPTUV2ZW50c31cbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqICovXG4gIHRoaXMuRE9NRXZlbnRzID0gbmV3IHRoaXMuc2YuaGVscGVycy5ET01FdmVudHMoKTtcbiAgdGhpcy5hZGRFdmVudHMoKTtcblxuICB0aGlzLmV2ZW50cyA9IG5ldyB0aGlzLnNmLmNvcmUuRXZlbnRzKFsnYmVmb3JlU2VuZCcsICdzdWNjZXNzJywgJ2Vycm9yJywgJ2Fsd2F5cyddKTtcbiAgY29yZS5pdGVyYXRlSW5wdXRzID0gaXRlcmF0ZUlucHV0cztcbn07XG5cbi8qKlxuICogQG92ZXJyaWRlXG4gKiBAaW5oZXJpdERvY1xuICogQGVudW0ge09iamVjdH1cbiAqIEBkZXByZWNhdGVkXG4gKi9cbkZvcm0ucHJvdG90eXBlLm9wdGlvbnNUb0dyYWIgPSB7XG4gIC8qKlxuICAgICAqIExpbmsgdG8gZm9ybVxuICAgICAqL1xuICBjb250ZXh0OiB7XG4gICAgcHJvY2Vzc29yKG5vZGUpIHsgLy8gUHJvY2Vzc29yXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICAgKiBMaW5rIHRvICd0aGlzJ1xuICAgICAqL1xuICBzZWxmOiB7XG4gICAgcHJvY2Vzc29yKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgfSxcbiAgaWQ6IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICB2YWx1ZTogYGZvcm06JHtpZENvdW50ZXIrK31gLFxuICAgIGRvbUF0dHI6ICdpZCcsXG4gIH0sXG4gIC8qKlxuICAgICAqIFVSTCB0byBzZW5kIGZvcm0gKGlmIGFqYXggZm9ybSkgPGI+RGVmYXVsdDogXCIvXCI8L2I+XG4gICAgICovXG4gIHVybDoge1xuICAgIGRvbUF0dHI6ICdhY3Rpb24nLFxuICAgIHZhbHVlOiAnLycsXG4gIH0sXG4gIC8qKlxuICAgICAqIE1ldGhvZCB0byBzZW5kIHRvIHNlbmQgZm9ybSAoaWYgYWpheCBmb3JtKSA8Yj5EZWZhdWx0OiBcIlBPU1RcIjwvYj5cbiAgICAgKi9cbiAgbWV0aG9kOiB7XG4gICAgZG9tQXR0cjogJ21ldGhvZCcsXG4gICAgdmFsdWU6ICdQT1NUJyxcbiAgfSxcbiAgLyoqXG4gICAgICogTG9jayB0eXBlIHdoZW4gZm9ybSBzZW5kaW5nIDxiPkRlZmF1bHQ6IFwiZGVmYXVsdFwiPC9iPiBAc2VlIHNmLmxvY2tcbiAgICAgKi9cbiAgbG9ja1R5cGU6IHtcbiAgICB2YWx1ZTogJ2RlZmF1bHQnLFxuICAgIGRvbUF0dHI6ICdkYXRhLWxvY2stdHlwZScsXG4gIH0sXG4gIC8qKlxuICAgICAqIEZvcmNlIHRvIG5vdCB1c2UgRm9ybURhdGEgZXZlbiBpZiBpdCdzIGF2YWlsYWJsZVxuICAgICAqL1xuICBqc29uT25seToge1xuICAgIHZhbHVlOiBmYWxzZSxcbiAgICBkb21BdHRyOiAnZGF0YS1qc29uLW9ubHknLFxuICB9LFxuICAvKipcbiAgICAgKlxuICAgICAqL1xuICBtZXNzYWdlc1R5cGU6IHtcbiAgICB2YWx1ZTogJ3NwaXJhbCcsXG4gICAgZG9tQXR0cjogJ2RhdGEtbWVzc2FnZXMtdHlwZScsXG4gIH0sXG4gIC8qKlxuICAgICAqIFBhc3MgY3VzdG9tIHRlbXBsYXRlIGZvciBmb3JtIG1lc3NhZ2VzXG4gICAgICovXG4gIG1lc3NhZ2VzOiB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRvbUF0dHI6ICdkYXRhLW1lc3NhZ2VzJyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsLCBzZWxmKSB7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKHZhbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtIEpTT04ucGFyc2UgZXJyb3I6ICcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzZWxmLnZhbHVlLCB2YWwpO1xuICAgIH0sXG4gIH0sXG4gIC8qKlxuICAgICAqIFVzZSBhamF4IHRvIHN1Ym1pdCBmb3JtIDxiPkRlZmF1bHQ6IHRydWU8L2I+XG4gICAgICovXG4gIHVzZUFqYXg6IHsgLy8gQXR0cmlidXRlIG9mIGZvcm1cbiAgICB2YWx1ZTogdHJ1ZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLXVzZS1hamF4JyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsKSB7IC8vIHByb2Nlc3NvciB0byBwcm9jZXNzIGRhdGEgYmVmb3JlIHJldHVyblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgdmFsID0gKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkgPyB2YWwudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcbiAgfSxcbiAgLyoqXG4gICAgICogQ2FsbGJhY2sgYWZ0ZXIgZm9ybSBzdWJtaXR0aW5nIDxiPkRlZmF1bHQ6IGZhbHNlPC9iPlxuICAgICAqIDxici8+XG4gICAgICogPGI+IEV4YW1wbGUgPC9iPlxuICAgICAqIGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgICAqICAvL29wdGlvbnMgY29udGFpbnMgYWxsIG9wdGlvbnMgYWZ0ZXIgc2VuZFxuICAgICAqIH1cbiAgICAgKi9cbiAgYWpheENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtY2FsbGJhY2snLFxuICB9LFxuICBiZWZvcmVTdWJtaXRDYWxsYmFjazogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiBmYWxzZSwgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIGRvbUF0dHI6ICdkYXRhLWJlZm9yZS1zdWJtaXQnLFxuICB9LFxuICBhZnRlclN1Ym1pdENhbGxiYWNrOiB7IC8vIGF0dHJpYnV0ZSBvZiBmb3JtXG4gICAgdmFsdWU6IGZhbHNlLCAvLyBEZWZhdWx0IHZhbHVlXG4gICAgZG9tQXR0cjogJ2RhdGEtYWZ0ZXItc3VibWl0JyxcbiAgfSxcbiAgaGVhZGVyczogeyAvLyBhdHRyaWJ1dGUgb2YgZm9ybVxuICAgIHZhbHVlOiB7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIC8vIERlZmF1bHQgdmFsdWVcbiAgICBkb21BdHRyOiAnZGF0YS1oZWFkZXJzJyxcbiAgICBwcm9jZXNzb3Iobm9kZSwgdmFsLCBzZWxmKSB7XG4gICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09IG51bGwpIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybSBKU09OLnBhcnNlIGVycm9yOiAnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZi52YWx1ZSwgdmFsKTtcbiAgICB9LFxuICB9LFxufTtcblxuRm9ybS5wcm90b3R5cGUubWl4TWVzc2FnZXNPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnbG9iYWwgPSB0aGlzLnNmLm9wdGlvbnMuaW5zdGFuY2VzLmZvcm07XG4gIHRoaXMub3B0aW9ucy5tZXNzYWdlcyA9IHtcbiAgICAuLi5mb3JtTWVzc2FnZXMuZGVmYXVsdHMsXG4gICAgLi4uZ2xvYmFsICYmIGdsb2JhbC5tZXNzYWdlcyAmJiBnbG9iYWwubWVzc2FnZXNbdGhpcy5vcHRpb25zLm1lc3NhZ2VzVHlwZV0sXG4gICAgLi4udGhpcy5vcHRpb25zLm1lc3NhZ2VzLFxuICB9O1xufTtcblxuLyoqXG4gKiBDYWxsIG9uIGZvcm0gc3VibWl0XG4gKiBAcGFyYW0ge0V2ZW50fSBlIHN1Ym1pdCBldmVudFxuICovXG5Gb3JtLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICh0aGlzLnNmLmdldEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xuICAgIC8vIE9uIGxvY2sgd2Ugc2hvdWxkJ24gZG8gYW55IGFjdGlvbnNcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgdGhpcy5vcHRpb25zLmRhdGEgPSB0aGlzLmdldEZvcm1EYXRhKCk7XG5cbiAgLy8gV2UgY2FuIHNlbmQgZmlsZXMgb25seSB3aXRoIEZvcm1EYXRhXG4gIC8vIElmIGZvcm0gY29udGFpbiBmaWxlcyBhbmQgbm8gRm9ybURhdGEgdGhhbiBkaXNhYmxlIGFqYXhcbiAgaWYgKCF0aGlzLm9wdGlvbnMuanNvbk9ubHkgJiYgdGhpcy5vcHRpb25zLmNvbnRleHQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2ZpbGUnXVwiKS5sZW5ndGggIT09IDApIHtcbiAgICB0aGlzLm9wdGlvbnMudXNlQWpheCA9IGZhbHNlO1xuICB9XG4gIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ2JlZm9yZVNlbmQnLCB0aGlzLm9wdGlvbnMpO1xuICAvLyBzZi5ldmVudHMucGVyZm9ybUFjdGlvbihcImJlZm9yZVN1Ym1pdFwiLCB0aGlzLm9wdGlvbnMpO1xuICAvLyB0aGlzLmV2ZW50cy5wZXJmb3JtQWN0aW9uKFwiYmVmb3JlU3VibWl0XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy51c2VBamF4KSB7XG4gICAgdGhpcy5zZW5kKHRoaXMub3B0aW9ucyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBMb2NrZXIuIEFkZCBvciByZW1vdmUuXG4gKi9cbkZvcm0ucHJvdG90eXBlLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGxvY2sgPSB0aGlzLnNmLmFkZEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlLCB7IHR5cGU6IHRoaXMub3B0aW9ucy5sb2NrVHlwZSB9KTtcbiAgaWYgKCFsb2NrKSB7XG4gICAgY29uc29sZS53YXJuKFwiWW91IHRyeSB0byBhZGQgJ2xvY2snIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBhbHJlYWR5IHN0YXJ0ZWRcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMub3B0aW9ucy5vblByb2dyZXNzID0gbG9jay5wcm9ncmVzcztcbn07XG5cbi8qKlxuICogTG9ja2VyLiBBZGQgb3IgcmVtb3ZlLlxuICovXG5Gb3JtLnByb3RvdHlwZS51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJZb3UgdHJ5IHRvIHJlbW92ZSAnbG9jaycgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBzdGFydGVkXCIpO1xuICB9XG59O1xuXG4vLyBGb3JtIG1lc3NhZ2VzXG5Gb3JtLnByb3RvdHlwZS5zaG93Rm9ybU1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMuc2hvd0Zvcm1NZXNzYWdlO1xuRm9ybS5wcm90b3R5cGUuc2hvd0ZpZWxkTWVzc2FnZSA9IGZvcm1NZXNzYWdlcy5zaG93RmllbGRNZXNzYWdlO1xuRm9ybS5wcm90b3R5cGUuc2hvd0ZpZWxkc01lc3NhZ2VzID0gZm9ybU1lc3NhZ2VzLnNob3dGaWVsZHNNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnNob3dNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5zaG93TWVzc2FnZXM7XG5Gb3JtLnByb3RvdHlwZS5yZW1vdmVNZXNzYWdlcyA9IGZvcm1NZXNzYWdlcy5yZW1vdmVNZXNzYWdlcztcbkZvcm0ucHJvdG90eXBlLnJlbW92ZU1lc3NhZ2UgPSBmb3JtTWVzc2FnZXMucmVtb3ZlTWVzc2FnZTtcblxuRm9ybS5wcm90b3R5cGUucHJvY2Vzc0Fuc3dlciA9IGZ1bmN0aW9uIChhbnN3ZXIsIHNob3dVbmtub3duID0gdHJ1ZSkge1xuICBpZiAodGhpcy5vcHRpb25zLm1lc3NhZ2VzVHlwZSkge1xuICAgIHRoaXMuc2hvd01lc3NhZ2VzKGFuc3dlciwgc2hvd1Vua25vd24pO1xuICB9XG59O1xuXG5Gb3JtLnByb3RvdHlwZS5zZXRGaWVsZFZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgdGhpcy5zZi5pdGVyYXRlSW5wdXRzKHRoaXMubm9kZSwgdmFsdWVzLCAoZWwsIHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlbC5zZlNldFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5zZlNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTsgLy8gVE9ETzogVGhhdCB3b250IHdvcmsgZm9yIHJhZGlvZ3JvdXBzLCBldGMuXG4gICAgfVxuICB9KTtcbn07XG5cbkZvcm0ucHJvdG90eXBlLmVudW1lcmF0ZUZpZWxkTmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnKSk7XG4gIHJldHVybiBbLi4udGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScpXS5tYXAoKGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSk7IC8vIFRPRE86IHN1cHBvcnQgY3VzdG9tIGlucHV0cyB0b29cbn07XG5cbkZvcm0ucHJvdG90eXBlLm9wdENhbGxiYWNrID0gZnVuY3Rpb24gKG9wdGlvbnMsIHR5cGUpIHtcbiAgaWYgKG9wdGlvbnNbdHlwZV0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuICAgIGNvbnN0IGZuID0gZXZhbChvcHRpb25zW3R5cGVdKTtcbiAgICBpZiAodHlwZW9mIChmbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZW5kIGZvcm0gdG8gc2VydmVyXG4gKiBAcGFyYW0ge09iamVjdH0gc2VuZE9wdGlvbnNcbiAqL1xuRm9ybS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kT3B0aW9ucykge1xuICBjb25zdCB0aGF0ID0gdGhpcztcbiAgaWYgKHRoaXMub3B0Q2FsbGJhY2soc2VuZE9wdGlvbnMsICdiZWZvcmVTdWJtaXRDYWxsYmFjaycpID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmxvY2soKTtcbiAgdGhpcy5zZi5hamF4LnNlbmQoc2VuZE9wdGlvbnMpLnRoZW4oXG4gICAgKGFuc3dlcikgPT4ge1xuICAgICAgdGhhdC5ldmVudHMudHJpZ2dlcignc3VjY2VzcycsIHNlbmRPcHRpb25zKTtcbiAgICAgIHJldHVybiBhbnN3ZXI7XG4gICAgfSxcbiAgICAoZXJyb3IpID0+IHtcbiAgICAgIHRoYXQuZXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgc2VuZE9wdGlvbnMpO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0sXG4gICkudGhlbigoYW5zd2VyKSA9PiB7XG4gICAgdGhhdC5sb2NrKHRydWUpO1xuICAgIHRoYXQucHJvY2Vzc0Fuc3dlcihhbnN3ZXIpO1xuICAgIHRoaXMub3B0Q2FsbGJhY2soc2VuZE9wdGlvbnMsICdhZnRlclN1Ym1pdENhbGxiYWNrJyk7XG4gICAgdGhhdC5ldmVudHMudHJpZ2dlcignYWx3YXlzJywgc2VuZE9wdGlvbnMpO1xuICB9KTtcblxuICAvLyBUbyBjYW5jZWwgcmVxdWVzdDpcbiAgLy8gaWYgKHRoaXMuc2YuYWpheC5jYW5jZWwpIHRoaXMuc2YuYWpheC5jYW5jZWwoKTtcbn07XG5cbi8qKlxuICogU2VyaWFsaXplIGZvcm1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuRm9ybS5wcm90b3R5cGUuZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5vcHRpb25zLmpzb25Pbmx5KSB7XG4gICAgcmV0dXJuIG5ldyBGb3JtRGF0YSh0aGlzLm9wdGlvbnMuY29udGV4dCk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coYEZvcm0gXFxgJHt0aGlzLm9wdGlvbnMuY29udGV4dH1cXGAgd2VyZSBwcm9jZXNzZWQgd2l0aG91dCBGb3JtRGF0YS5gKTtcbiAgcmV0dXJuIG5ldyBGb3JtVG9PYmplY3QodGhpcy5vcHRpb25zLmNvbnRleHQpO1xufTtcblxuLyoqXG4gKiBTZXQgb3B0aW9ucyAob3ZlcndyaXRlIGN1cnJlbnQpXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0IG9wdGlvbnNcbiAqL1xuRm9ybS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHQpIHtcbiAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdCk7XG59O1xuXG4vKipcbiAqIEFkZCBhbGwgZXZlbnRzIGZvciBmb3Jtc1xuICovXG5Gb3JtLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRoYXQgPSB0aGlzO1xuICB0aGlzLkRPTUV2ZW50cy5hZGQoW1xuICAgIHtcbiAgICAgIERPTU5vZGU6IHRoaXMub3B0aW9ucy5jb250ZXh0LFxuICAgICAgZXZlbnRUeXBlOiAnc3VibWl0JyxcbiAgICAgIGV2ZW50RnVuY3Rpb24oZSkge1xuICAgICAgICB0aGF0Lm9uU3VibWl0LmNhbGwodGhhdCwgZSk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0pO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgdmFyaWFibGVzIGFuZCBkaWVcbiAqL1xuRm9ybS5wcm90b3R5cGUuZGllID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLkRPTUV2ZW50cy5yZW1vdmVBbGwoKTtcbiAgLy8gVE9ETyBkb24ndCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCdzIGFkZG9ucyBhbmQgcGx1Z2lucz9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAvLyB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJhbGVydCBmb3JtLW1zZyAke3R5cGV9XCI+PGJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiPsOXPC9idXR0b24+PHAgY2xhc3M9XCJtc2dcIj4ke3RleHR9PC9wPjwvZGl2PicsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dHlwZX0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93XCIgcm9sZT1cImFsZXJ0XCI+J1xuICAgICsgJyR7dGV4dH0nXG4gICAgKyAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+J1xuICAgICsgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+J1xuICAgICsgJzwvYnV0dG9uPidcbiAgICArICc8L2Rpdj4nLFxuICBjbG9zZTogJy5jbG9zZScsXG4gIHBsYWNlOiAnYm90dG9tJyxcbiAgbGV2ZWxzOiB7XG4gICAgc3VjY2VzczogJ3N1Y2Nlc3MnLCBpbmZvOiAnaW5mbycsIHdhcm5pbmc6ICd3YXJuaW5nJywgZXJyb3I6ICdkYW5nZXInLFxuICB9LFxuICBzZWxlY3RvcjogJ1tkYXRhLW1lc3NhZ2VdJyxcbiAgZmllbGQ6ICdbZGF0YS1maWVsZF0nLFxuICBmaWVsZEVsZW1lbnQ6ICdbZGF0YS1pbnB1dF0nLFxuICBmaWVsZFRlbXBsYXRlOiAnPGRpdiBkYXRhLW1lc3NhZ2UgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCIgZGF0YS1mb3JtLW1lc3NhZ2U+JHt0ZXh0fTwvZGl2PicsXG4gIGZpZWxkUGxhY2U6ICdib3R0b20nLFxuICBmaWVsZENsYXNzZXM6IHtcbiAgICBzdWNjZXNzOiAnaXMtdmFsaWQnLCBpbmZvOiAnaXMtdmFsaWQnLCB3YXJuaW5nOiAnaXMtaW52YWxpZCcsIGVycm9yOiAnaXMtaW52YWxpZCcsXG4gIH0sXG59O1xuXG4vLyBPZnRlbiB1c2VkIGFsaWFzXG5kZWZhdWx0cy5sZXZlbHMubWVzc2FnZSA9IGRlZmF1bHRzLmxldmVscy5zdWNjZXNzO1xuXG4vLyBPdGhlciBhbGlhc2VzXG4vLyBQU1ItMyBzZXZlcml0eSBsZXZlbHMgbWFwcGluZyAoZGVidWcsIGluZm8sIG5vdGljZSwgd2FybmluZywgZXJyb3IsIGNyaXRpY2FsLCBhbGVydCwgZW1lcmdlbmN5KVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BocC1maWcvZmlnLXN0YW5kYXJkcy9ibG9iL21hc3Rlci9hY2NlcHRlZC9QU1ItMy1sb2dnZXItaW50ZXJmYWNlLm1kXG5kZWZhdWx0cy5sZXZlbHMuZGVidWcgPSBkZWZhdWx0cy5sZXZlbHMuc3VjY2VzcztcbmRlZmF1bHRzLmxldmVscy5pbmZvID0gZGVmYXVsdHMubGV2ZWxzLm5vdGljZSA9IGRlZmF1bHRzLmxldmVscy5pbmZvO1xuZGVmYXVsdHMubGV2ZWxzLmRhbmdlciA9IGRlZmF1bHRzLmxldmVscy5jcml0aWNhbCA9IGRlZmF1bHRzLmxldmVscy5hbGVydCA9IGRlZmF1bHRzLmxldmVscy5lbWVyZ2VuY3kgPSBkZWZhdWx0cy5sZXZlbHMuZXJyb3I7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBwcmVwYXJlTWVzc2FnZU9iamVjdChtZXNzYWdlLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gJ29iamVjdCcpIHtcbiAgICBtZXNzYWdlID0geyB0ZXh0OiBtZXNzYWdlLCB0eXBlIH07XG4gIH1cbiAgbWVzc2FnZS50ZXh0ID0gbWVzc2FnZS50ZXh0IHx8IG1lc3NhZ2UubWVzc2FnZSB8fCBtZXNzYWdlO1xuICBtZXNzYWdlLnR5cGUgPSBtZXNzYWdlLnR5cGUgfHwgdHlwZTtcbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0cyxcbiAgc2hvd01lc3NhZ2VzKGFuc3dlciwgc2hvd1Vua25vd24gPSB0cnVlKSB7XG4gICAgaWYgKCFhbnN3ZXIpIHJldHVybjtcblxuICAgIGxldCBpc01zZyA9IGZhbHNlO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgaWYgKGFuc3dlci5kYXRhKSB7XG4gICAgICAvLyBmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscykge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscykuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBpZiAoYW5zd2VyLmRhdGFbdHlwZV0pIHtcbiAgICAgICAgICB0aGlzLnNob3dGb3JtTWVzc2FnZShhbnN3ZXIuZGF0YVt0eXBlXSwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVsc1t0eXBlXSk7XG4gICAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFuc3dlci5kYXRhLm1lc3NhZ2VzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLm1lc3NhZ2VzLCAnc3VjY2VzcycsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLmVycm9ycykge1xuICAgICAgICB0aGlzLnNob3dGaWVsZHNNZXNzYWdlcyhhbnN3ZXIuZGF0YS5lcnJvcnMsICdlcnJvcicsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuc3dlci5kYXRhLndhcm5pbmdzKSB7XG4gICAgICAgIHRoaXMuc2hvd0ZpZWxkc01lc3NhZ2VzKGFuc3dlci5kYXRhLndhcm5pbmdzLCAnd2FybmluZycsIHNob3dVbmtub3duKTtcbiAgICAgICAgaXNNc2cgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNNc2cpIHtcbiAgICAgIGxldCBlcnJvcjtcbiAgICAgIGlmICghYW5zd2VyLnN0YXR1cykgeyAvLyBOZXR3b3JrLmVycm9yXG4gICAgICAgIGVycm9yID0gYW5zd2VyO1xuICAgICAgfSBlbHNlIGlmIChhbnN3ZXIuc3RhdHVzID4gMzAwKSB7XG4gICAgICAgIGVycm9yID0gYW5zd2VyLnN0YXR1cyA/IGAke2Fuc3dlci5zdGF0dXN9IGAgOiAnJztcbiAgICAgICAgZXJyb3IgKz0gYW5zd2VyLnN0YXR1c1RleHQgPyBhbnN3ZXIuc3RhdHVzVGV4dCA6ICcnO1xuICAgICAgICBlcnJvciArPSBhbnN3ZXIuZGF0YSAmJiAhYW5zd2VyLnN0YXR1c1RleHQgPyBhbnN3ZXIuZGF0YSA6ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGVycm9yKSB0aGlzLnNob3dGb3JtTWVzc2FnZShlcnJvciwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmxldmVscy5lcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgaWYgKG0uY2xvc2UpIHtcbiAgICAgICAgbS5jbG9zZUhhbmRsZXIgPSB0aGF0LnJlbW92ZU1lc3NhZ2UuYmluZCh0aGF0LCBtKTtcbiAgICAgICAgbS5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG0uY2xvc2VIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICByZW1vdmVNZXNzYWdlKG0sIGUpIHtcbiAgICBpZiAobS5jbG9zZSkge1xuICAgICAgbS5jbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG0uY2xvc2VIYW5kbGVyKTtcbiAgICB9XG4gICAgbS5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0uZWwpO1xuICAgIGlmIChtLmZpZWxkKSB7XG4gICAgICBjb25zdCBmaWVsZEVsID0gbS5maWVsZC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZEVsZW1lbnQpO1xuICAgICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgICAgZmllbGRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZENsYXNzZXNbbS50eXBlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtLmZpZWxkLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkQ2xhc3Nlc1ttLnR5cGVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9tZXNzYWdlcy5zcGxpY2UodGhpcy5fbWVzc2FnZXMuaW5kZXhPZihtKSwgMSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZU1lc3NhZ2VzKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9tZXNzYWdlcykge1xuICAgICAgdGhpcy5fbWVzc2FnZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICB0aGF0LnJlbW92ZU1lc3NhZ2UobSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoYXQuX21lc3NhZ2VzID0gW107XG4gIH0sXG5cbiAgc2hvd0Zvcm1NZXNzYWdlKG1lc3NhZ2UsIHR5cGUpIHtcbiAgICBsZXQgcGFyZW50O1xuICAgIGxldCB0cGwgPSB0aGlzLm9wdGlvbnMubWVzc2FnZXMudGVtcGxhdGU7XG5cbiAgICBtZXNzYWdlID0gcHJlcGFyZU1lc3NhZ2VPYmplY3QobWVzc2FnZSwgdHlwZSk7XG5cbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVzc2FnZSkge1xuICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkgcmV0dXJuO1xuICAgICAgdHBsID0gdHBsLnJlcGxhY2UoYFxcJHske2l0ZW19fWAsIG1lc3NhZ2VbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHBsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwbEVsZW0uaW5uZXJIVE1MID0gdHBsO1xuICAgIGNvbnN0IG1zZ0VsID0gdHBsRWxlbS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5wbGFjZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMucGxhY2UgPT09ICd0b3AnKSB7XG4gICAgICB0aGlzLm5vZGUuaW5zZXJ0QmVmb3JlKG1zZ0VsLCB0aGlzLm5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLnBsYWNlKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2VzLnB1c2goeyBlbDogbXNnRWwsIGNsb3NlOiBtc2dFbC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5jbG9zZSkgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaXNDb250YWluZXJdXG4gICAgICovXG4gIHNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUsIGlzQ29udGFpbmVyKSB7XG4gICAgbGV0IGZpZWxkID0gaXNDb250YWluZXIgPyBlbCA6IHNmLmhlbHBlcnMuZG9tVG9vbHMuY2xvc2VzdChlbCwgdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkKTtcbiAgICBsZXQgdHBsID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkVGVtcGxhdGU7XG5cbiAgICBpZiAoIWZpZWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVzc2FnZSA9IHByZXBhcmVNZXNzYWdlT2JqZWN0KG1lc3NhZ2UsIHR5cGUpO1xuXG4gICAgY29uc3QgZmllbGRFbCA9IGZpZWxkLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lc3NhZ2VzLmZpZWxkRWxlbWVudCk7XG4gICAgY29uc3QgY3VycmVudE1zZ0VsID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuc2VsZWN0b3IpO1xuXG4gICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgIGZpZWxkRWwuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW3R5cGVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbGFzc2VzW3R5cGVdKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gaW4gbWVzc2FnZSkge1xuICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghbWVzc2FnZS5oYXNPd25Qcm9wZXJ0eShpdGVtKSkgcmV0dXJuO1xuICAgICAgdHBsID0gdHBsLnJlcGxhY2UoYFxcJHske2l0ZW19fWAsIG1lc3NhZ2VbaXRlbV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdHBsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRwbEVsZW0uaW5uZXJIVE1MID0gdHBsO1xuICAgIGNvbnN0IG1zZ0VsID0gdHBsRWxlbS5maXJzdENoaWxkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZXNzYWdlcy5maWVsZFBsYWNlID09PSAnYm90dG9tJykge1xuICAgICAgaWYgKGZpZWxkRWwpIHtcbiAgICAgICAgZmllbGQuaW5zZXJ0QmVmb3JlKG1zZ0VsLCBmaWVsZEVsLm5leHRTaWJsaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAoIWN1cnJlbnRNc2dFbCkge1xuICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSA9PT0gJ3RvcCcpIHtcbiAgICAgIGZpZWxkLmluc2VydEJlZm9yZShtc2dFbCwgZmllbGQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkID0gZmllbGQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRQbGFjZSk7XG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZChtc2dFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVzc2FnZXMucHVzaCh7XG4gICAgICBlbDogbXNnRWwsXG4gICAgICBjbG9zZTogbXNnRWwucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMubWVzc2FnZXMuZmllbGRDbG9zZSksXG4gICAgICBmaWVsZCxcbiAgICAgIHR5cGUsXG4gICAgfSk7XG4gIH0sXG5cbiAgc2hvd0ZpZWxkc01lc3NhZ2VzKG1lc3NhZ2VzLCB0eXBlLCBzaG93VW5rbm93biA9IHRydWUpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBub3RGb3VuZCA9IHNmLml0ZXJhdGVJbnB1dHModGhpcy5ub2RlLCBtZXNzYWdlcywgKGVsLCBtZXNzYWdlKSA9PiB7XG4gICAgICB0aGF0LnNob3dGaWVsZE1lc3NhZ2UoZWwsIG1lc3NhZ2UsIHR5cGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHNob3dVbmtub3duKSB7XG4gICAgICBub3RGb3VuZC5mb3JFYWNoKChtc2dPYmopID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMobXNnT2JqKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhhdC5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2UtcGxhY2Vob2xkZXI9XCIke25hbWV9XCJdYCk7XG4gICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgLy8gVE9ETyBjaGVjayBjb250YWluZXIuZGF0YXNldC5tZXNzYWdlVmFyaWFudD8gdmFyaWFudHMgYXJlIFwiZmllbGRcIiBhbmQgXCJmb3JtXCJcbiAgICAgICAgICAgIHRoYXQuc2hvd0ZpZWxkTWVzc2FnZShjb250YWluZXIsIG1zZ09ialtuYW1lXSwgdHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vKlxuICogZ2l0aHViLmNvbS9zZXJiYW5naGl0YS9Gb3JtVG9PYmplY3QuanMgMS4wLjEgIChjKSAyMDEzIFNlcmJhbiBHaGl0YSA8c2VyYmFuZ2hpdGFAZ21haWwuY29tPlxuICogQGxpY2VuY2UgTUlUXG4gKi9cbi8vIENvbnN0cnVjdG9yLlxuXG5jb25zdCBGb3JtVG9PYmplY3QgPSBmdW5jdGlvbiAoZm9ybVJlZikge1xuICBpZiAoIWZvcm1SZWYpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aGlzLmZvcm1SZWYgPSBmb3JtUmVmO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgdGhpcy5rZXlSZWdleCA9IC9bXlxcW1xcXV0rL2c7XG4gIHRoaXMuJGZvcm0gPSBudWxsO1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSBbXTtcbiAgdGhpcy5mb3JtT2JqID0ge307XG5cbiAgaWYgKCF0aGlzLnNldEZvcm0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIXRoaXMuc2V0Rm9ybUVsZW1lbnRzKCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5zZXRGb3JtT2JqKCk7XG59O1xuXG4vLyBTZXQgdGhlIG1haW4gZm9ybSBvYmplY3Qgd2UgYXJlIHdvcmtpbmcgb24uXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIHN3aXRjaCAodHlwZW9mIHRoaXMuZm9ybVJlZikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICB0aGlzLiRmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5mb3JtUmVmKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh0aGlzLmlzRG9tTm9kZSh0aGlzLmZvcm1SZWYpKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSB0aGlzLmZvcm1SZWY7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gdGhpcy4kZm9ybTtcbn07XG5cbi8vIFNldCB0aGUgZWxlbWVudHMgd2UgbmVlZCB0byBwYXJzZS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuc2V0Rm9ybUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLiRmb3JtRWxlbWVudHMgPSB0aGlzLiRmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gIHJldHVybiB0aGlzLiRmb3JtRWxlbWVudHMubGVuZ3RoO1xufTtcblxuLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MIG5vZGUuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmlzRG9tTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHJldHVybiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgJ25vZGVUeXBlJyBpbiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vLyBJdGVyYXRpb24gdGhyb3VnaCBhcnJheXMgYW5kIG9iamVjdHMuIENvbXBhdGlibGUgd2l0aCBJRS5cbkZvcm1Ub09iamVjdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChhcnIsIGNhbGxiYWNrKSB7XG4gIGlmIChbXS5mb3JFYWNoKSB7XG4gICAgW10uZm9yRWFjaC5jYWxsKGFyciwgY2FsbGJhY2spO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGxldCBpO1xuICAvLyBmb3IgKGkgaW4gYXJyKSB7XG4gIE9iamVjdC5rZXlzKGFycikuZm9yRWFjaCgoaSkgPT4ge1xuICAgIC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgaW5zdGVhZCBvZiBhcnIuaGFzT3duUHJvcGVydHkgZm9yIElFOCBjb21wYXRpYmlsaXR5LlxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJyLCBpKSkge1xuICAgICAgY2FsbGJhY2suY2FsbChhcnIsIGFycltpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIFJlY3Vyc2l2ZSBtZXRob2QgdGhhdCBhZGRzIGtleXMgYW5kIHZhbHVlcyBvZiB0aGUgY29ycmVzcG9uZGluZyBmaWVsZHMuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKHJlc3VsdCwgZG9tTm9kZSwga2V5cywgdmFsdWUpIHtcbiAgLy8gIzEgLSBTaW5nbGUgZGltZW5zaW9uYWwgYXJyYXkuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFdlJ3JlIG9ubHkgaW50ZXJlc3RlZCBpbiB0aGUgcmFkaW8gdGhhdCBpcyBjaGVja2VkLlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICByZXN1bHRba2V5c10gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrYm94ZXMgYXJlIGEgc3BlY2lhbCBjYXNlLiBXZSBoYXZlIHRvIGdyYWIgZWFjaCBjaGVja2VkIHZhbHVlc1xuICAgIC8vIGFuZCBwdXQgdGhlbSBpbnRvIGFuIGFycmF5LlxuICAgIGlmIChkb21Ob2RlLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGRvbU5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgaWYgKGRvbU5vZGUuY2hlY2tlZCkge1xuICAgICAgICBpZiAoIXJlc3VsdFtrZXlzXSkge1xuICAgICAgICAgIHJlc3VsdFtrZXlzXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtrZXlzXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE11bHRpcGxlIHNlbGVjdCBpcyBhIHNwZWNpYWwgY2FzZS5cbiAgICAvLyBXZSBoYXZlIHRvIGdyYWIgZWFjaCBzZWxlY3RlZCBvcHRpb24gYW5kIHB1dCB0aGVtIGludG8gYW4gYXJyYXkuXG4gICAgaWYgKGRvbU5vZGUubm9kZU5hbWUgPT09ICdTRUxFQ1QnICYmIGRvbU5vZGUudHlwZSA9PT0gJ3NlbGVjdC1tdWx0aXBsZScpIHtcbiAgICAgIHJlc3VsdFtrZXlzXSA9IFtdO1xuICAgICAgY29uc3QgRE9NY2hpbGRzID0gZG9tTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb25bc2VsZWN0ZWRdJyk7XG4gICAgICBpZiAoRE9NY2hpbGRzKSB7XG4gICAgICAgIHRoaXMuZm9yRWFjaChET01jaGlsZHMsIChjaGlsZCkgPT4ge1xuICAgICAgICAgIHJlc3VsdFtrZXlzXS5wdXNoKGNoaWxkLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2suIFRoZSBkZWZhdWx0IG9uZSB0byBvbmUgYXNzaWduLlxuICAgIHJlc3VsdFtrZXlzXSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gIzIgLSBNdWx0aSBkaW1lbnNpb25hbCBhcnJheS5cbiAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgIGlmICghcmVzdWx0W2tleXNbMF1dKSB7XG4gICAgICByZXN1bHRba2V5c1swXV0gPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENoaWxkKHJlc3VsdFtrZXlzWzBdXSwgZG9tTm9kZSwga2V5cy5zcGxpY2UoMSwga2V5cy5sZW5ndGgpLCB2YWx1ZSk7XG4gIH1cblxuICAvLyByZXR1cm4gcmVzdWx0OyAvLyA/XG59O1xuXG5Gb3JtVG9PYmplY3QucHJvdG90eXBlLnNldEZvcm1PYmogPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0ZXN0O1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuJGZvcm1FbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIElnbm9yZSB0aGUgZWxlbWVudCBpZiB0aGUgJ25hbWUnIGF0dHJpYnV0ZSBpcyBlbXB0eS5cbiAgICAvLyBJZ25vcmUgdGhlICdkaXNhYmxlZCcgZWxlbWVudHMuXG4gICAgaWYgKHRoaXMuJGZvcm1FbGVtZW50c1tpXS5uYW1lICYmICF0aGlzLiRmb3JtRWxlbWVudHNbaV0uZGlzYWJsZWQpIHtcbiAgICAgIHRlc3QgPSB0aGlzLiRmb3JtRWxlbWVudHNbaV0ubmFtZS5tYXRjaCh0aGlzLmtleVJlZ2V4KTtcbiAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5mb3JtT2JqLCB0aGlzLiRmb3JtRWxlbWVudHNbaV0sIHRlc3QsIHRoaXMuJGZvcm1FbGVtZW50c1tpXS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZm9ybU9iajtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybVRvT2JqZWN0O1xuIiwiXG5jb25zdCBzZiA9IHJlcXVpcmUoJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJyk7XG5jb25zdCBGb3JtID0gcmVxdWlyZSgnLi9Gb3JtJykuZGVmYXVsdDtcblxuc2YucmVnaXN0ZXJJbnN0YW5jZVR5cGUoRm9ybSwgJ2pzLXNmLWZvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtOyAvLyBFUzYgZGVmYXVsdCBleHBvcnQgd2lsbCBub3QgZXhwb3NlIHVzIGFzIGdsb2JhbFxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuXG4vLyBQbHVnaW4gaW4gZm9ybU1lc3NhZ2VzIHRvIGl0ZXJhdGUgZm9ybSBpbnB1dHNcblxuLy8gVE9ETyBjb21tZW50IGFsbCBvZiB0aGlzXG4vLyBUT0RPIGFzayBAU3lzdGVyciB0aGUgcmVhc29uIG9mIHZhcmlhYmxlICdwcmVmaXgnXG5sZXQgbm90Rm91bmQgPSBbXTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG5hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtTdHJpbmd9IFtwcmVmaXhdXG4gKi9cbmZ1bmN0aW9uIGZpbmROb2Rlcyhjb250ZXh0LCBuYW1lcywgY2FsbGJhY2ssIHByZWZpeCkge1xuICAvLyBmb3IgKGNvbnN0IG5hbWUgaW4gbmFtZXMpIHtcbiAgT2JqZWN0LmtleXMobmFtZXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgaWYgKCFuYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRPZlNlbGVjdG9yID0gKHByZWZpeCkgPyBgJHtwcmVmaXh9WyR7bmFtZX1dYCA6IG5hbWU7XG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuYW1lc1tuYW1lXSk7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgW25hbWU9JyR7cGFydE9mU2VsZWN0b3J9J11gO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICBmaW5kTm9kZXMoY29udGV4dCwgbmFtZXNbbmFtZV0sIGNhbGxiYWNrLCBwYXJ0T2ZTZWxlY3Rvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnW29iamVjdCBBcnJheV0nOlxuICAgICAgICBuYW1lc1tuYW1lXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIC8vIFRPRE8gcmVmYWN0b3IgdGhpcyBzaG91bGQgY2FsbCByZWN1cnNpdmVcbiAgICAgICAgICBjb25zdCBzZWwgPSBgW25hbWU9JyR7cGFydE9mU2VsZWN0b3J9W10nXVt2YWx1ZT0nJHtlbH0nXWA7XG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcbiAgICAgICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBub3RGb3VuZC5wdXNoKHNlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY2FsbGJhY2sobm9kZXNbaV0sIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgICBjb25zdCBub2RlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICBvYmpbcGFydE9mU2VsZWN0b3JdID0gbmFtZXNbbmFtZV07XG4gICAgICAgICAgbm90Rm91bmQucHVzaChvYmopO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBub2Rlcy5sZW5ndGg7IGkgPCBtYXg7IGkgKz0gMSkge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGVzW2ldLCBuYW1lc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Vua25vd24gdHlwZSAtJywgdHlwZSwgJyBhbmQgbWVzc2FnZScsIG5hbWVzW25hbWVdKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBuYW1lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJlZml4XVxuICogQHJldHVybiB7U3RyaW5nW119XG4gKi9cbmNvbnN0IGl0ZXJhdGVJbnB1dHMgPSBmdW5jdGlvbiAoY29udGV4dCwgbmFtZXMsIGNhbGxiYWNrLCBwcmVmaXgpIHtcbiAgbm90Rm91bmQgPSBbXTtcbiAgZmluZE5vZGVzKGNvbnRleHQsIG5hbWVzLCBjYWxsYmFjaywgcHJlZml4KTtcbiAgaWYgKG5vdEZvdW5kLmxlbmd0aCAhPT0gMCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgLy8gY29uc29sZS5sb2coJ1NvbWUgZWxlbWVudCBub3QgZm91bmQgaW4gZm9ybScsIG5vdEZvdW5kKTtcbiAgfVxuICByZXR1cm4gbm90Rm91bmQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZXJhdGVJbnB1dHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPy11cmwmc291cmNlTWFwIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlUm9vdCI6IiJ9