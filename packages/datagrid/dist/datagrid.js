(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@spiral-toolkit/core"));
	else if(typeof define === 'function' && define.amd)
		define("@spiral-toolkit/datagrid", ["@spiral-toolkit/core"], factory);
	else if(typeof exports === 'object')
		exports["@spiral-toolkit/datagrid"] = factory(require("@spiral-toolkit/core"));
	else
		root["SFDataGrid"] = factory(root["@spiral-toolkit/core"]);
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

/***/ "../../node_modules/decode-uri-component/index.js":
/*!*************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/decode-uri-component/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
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
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
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
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "../../node_modules/node-libs-browser/node_modules/assert/assert.js":
/*!*******************************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/node-libs-browser/node_modules/assert/assert.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
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
}

// based on node assert, original notice:
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

var util = __webpack_require__(/*! util/ */ "../../node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
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
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
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
      var out = err.stack;

      // try to strip useless frames
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
};

// assert.AssertionError instanceof Error
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
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
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
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
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
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

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
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
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
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
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
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
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

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!******************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/object-assign/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
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

/***/ "../../node_modules/query-string/index.js":
/*!*****************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/query-string/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "../../node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "../../node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "../../node_modules/split-on-first/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
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
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
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
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
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
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
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

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
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

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

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
			return value
				.reduce(formatter(key), [])
				.join('&');
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


/***/ }),

/***/ "../../node_modules/split-on-first/index.js":
/*!*******************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/split-on-first/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "../../node_modules/strict-uri-encode/index.js":
/*!**********************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/strict-uri-encode/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "../../node_modules/util/node_modules/inherits/inherits_browser.js":
/*!******************************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
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
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/*!***************************************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/util/support/isBufferBrowser.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!********************************************************!*\
  !*** O:/Projects/SF/toolkit/node_modules/util/util.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
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

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
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
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
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
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
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
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
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
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
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
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
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

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
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
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
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
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
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
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
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
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
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
exports.inherits = __webpack_require__(/*! inherits */ "../../node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
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
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
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
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

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
  }

  // We DO NOT return the promise as it gives the user a false sense that
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
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/actionpanel/ActionPanel.ts":
/*!****************************************!*\
  !*** ./src/actionpanel/ActionPanel.ts ***!
  \****************************************/
/*! exports provided: ActionPanel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPanel", function() { return ActionPanel; });
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core");
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");


class ActionPanel extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
    constructor(ssf, node, options) {
        super();
        this.name = ActionPanel.spiralFrameworkName;
        this.optionsToGrab = {
            id: {
                value: ActionPanel.defaultOptions.id,
                domAttr: 'id',
            },
            type: {
                value: ActionPanel.defaultOptions.selectionType,
                domAttr: 'data-selection-type',
            },
            className: {
                value: ActionPanel.defaultOptions.className,
                domAttr: 'data-class',
            },
        };
        this.options = Object.assign({}, ActionPanel.defaultOptions);
        this.state = {
            hasSelection: false,
            selectedCount: 0,
            selectedItems: [],
            selectedKeys: new Set(),
            selectionType: this.options.selectionType,
        };
        this.init(ssf, node, options);
        this.options = Object.assign(Object.assign({}, ActionPanel.defaultOptions), this.options);
        const additionalOptionsEl = node.querySelector('script[role="sf-options"]');
        if (additionalOptionsEl) {
            try {
                // eslint-disable-next-line
                const one = Function(`"use strict";return ${additionalOptionsEl.innerHTML.trim()}`);
                const overrides = one()();
                this.options = Object.assign(Object.assign({}, this.options), overrides);
                console.log(overrides);
            }
            catch (e) {
                console.error('Could not parse options inside script, ensure script inside is an anonymous function returning IDataGridOptions object');
                throw e;
            }
        }
        this.render();
    }
    reconfigure(options) {
        this.options = Object.assign(Object.assign({}, this.options), options);
        this.state = {
            hasSelection: false,
            selectedCount: 0,
            selectedItems: [],
            selectedKeys: new Set(),
            selectionType: this.options.selectionType,
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
        const lock = this.sf.addInstance('lock', this.node, { type: this.options.lockType });
        if (!lock) {
            console.warn('You try to add \'lock\' instance, but it is not available or already started');
        }
    }
    setSelection(selectedKeys, selectedItems) {
        this.state = Object.assign(Object.assign({}, this.state), { selectedKeys,
            selectedItems, selectedCount: selectedKeys.size, hasSelection: !!selectedKeys.size });
        this.render();
    }
    renderAs(el, definition) {
        if (typeof definition === 'string') {
            // eslint-disable-next-line no-param-reassign
            el.innerHTML = definition;
        }
        else if (typeof definition === 'function') {
            const rendered = definition(this.state);
            if (typeof rendered === 'string') {
                // eslint-disable-next-line no-param-reassign
                el.innerHTML = rendered;
            }
            else {
                el.appendChild(rendered);
            }
        }
        else {
            el.appendChild(definition);
        }
    }
    renderAction(actionId, action, options) {
        const el = document.createElement('div');
        if (options.actionClassName) {
            if (typeof options.actionClassName === 'string') {
                el.className = options.actionClassName;
            }
            else if (typeof options.actionClassName === 'function') {
                el.className = options.actionClassName(actionId, this.state);
            }
            else {
                el.className = options.actionClassName[actionId] || '';
            }
        }
        if (action.className) {
            if (typeof action.className === 'string') {
                el.classList.add(...action.className.split(' '));
            }
            else {
                el.classList.add(...action.className(this.state).split(' '));
            }
        }
        el.addEventListener('click', (e) => action.onClick(this.state, this, e));
        this.renderAs(el, action.renderAs);
        return el;
    }
    render() {
        if (!this.el) {
            this.el = document.createElement('div');
            this.node.appendChild(this.el);
        }
        else {
            this.el.innerHTML = ''; // TODO: dont rerender
        }
        const el = this.el;
        if (this.options.className) {
            el.className = '';
            if (typeof this.options.className === 'string') {
                el.classList.add(...this.options.className.split(' '));
            }
            else {
                el.classList.add(...this.options.className(this.state).split(' '));
            }
        }
        if (this.options.noSelection && !this.state.hasSelection) {
            if (typeof this.options.noSelection === 'string') {
                el.innerHTML = this.options.noSelection;
            }
            else {
                el.appendChild(this.options.noSelection);
            }
            return;
        }
        if (this.options.selectionLabel) {
            this.renderAs(el, this.options.selectionLabel);
        }
        Object.keys(this.options.actions).forEach((actionId) => {
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
    actions: {},
};
/* harmony default export */ __webpack_exports__["default"] = (ActionPanel);


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: SortDirection, SelectionType, RequestMethod, PAGINATOR_CLASS_NAME, ACTION_PANEL_CLASS_NAME, CURSOR_ID_FIELD, LAST_ID_FIELD, pageParams, sortParams, DEFAULT_LIMIT, defaultGridMessages, PaginatorType, DATAGRID_CHECK_SELECT_ATTR, DATAGRID_CHECK_SELECT_ALL_ATTR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATOR_CLASS_NAME", function() { return PAGINATOR_CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_PANEL_CLASS_NAME", function() { return ACTION_PANEL_CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURSOR_ID_FIELD", function() { return CURSOR_ID_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_ID_FIELD", function() { return LAST_ID_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageParams", function() { return pageParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortParams", function() { return sortParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LIMIT", function() { return DEFAULT_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridMessages", function() { return defaultGridMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorType", function() { return PaginatorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAGRID_CHECK_SELECT_ATTR", function() { return DATAGRID_CHECK_SELECT_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAGRID_CHECK_SELECT_ALL_ATTR", function() { return DATAGRID_CHECK_SELECT_ALL_ATTR; });
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
    noData: "No Data",
    noResults: "No data matches your search criteria",
    error: "Unknown error"
};
var PaginatorType;
(function (PaginatorType) {
    PaginatorType["pages"] = "pages";
    PaginatorType["infinite"] = "infinite";
})(PaginatorType || (PaginatorType = {}));
const DATAGRID_CHECK_SELECT_ATTR = 'data-datagrid-select';
const DATAGRID_CHECK_SELECT_ALL_ATTR = 'data-datagrid-select-all';


/***/ }),

/***/ "./src/datagrid/Datagrid.ts":
/*!**********************************!*\
  !*** ./src/datagrid/Datagrid.ts ***!
  \**********************************/
/*! exports provided: Datagrid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datagrid", function() { return Datagrid; });
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core");
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "../../node_modules/node-libs-browser/node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "../../node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actionpanel/ActionPanel */ "./src/actionpanel/ActionPanel.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _DatagridState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DatagridState */ "./src/datagrid/DatagridState.ts");
/* harmony import */ var _paginator_Paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../paginator/Paginator */ "./src/paginator/Paginator.ts");
/* harmony import */ var _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../render/defaultRenderer */ "./src/render/defaultRenderer.ts");
/* harmony import */ var _render_GridRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../render/GridRenderer */ "./src/render/GridRenderer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










// import './styles.css';
class Datagrid extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
    constructor(ssf, node, options) {
        super();
        this.name = Datagrid.spiralFrameworkName;
        this.optionsToGrab = {
            id: {
                value: Datagrid.defaultOptions.id,
                domAttr: 'id',
            },
            url: {
                value: Datagrid.defaultOptions.url,
                domAttr: 'data-url',
            },
        };
        this.options = Object.assign({}, Datagrid.defaultOptions);
        this.grids = [];
        this.state = new _DatagridState__WEBPACK_IMPORTED_MODULE_5__["DatagridState"](this);
        this.capturedForms = {}; // TODO: type as sf.Form instance array
        this.capturedPaginators = []; // TODO: type as sf.Paginator instance array
        this.capturedActionPanels = []; // TODO: type as sf.Paginator instance array
        this.defaults = {
            page: 1,
            limit: _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_LIMIT"],
        };
        this.init(ssf, node, options);
        this.options = Object.assign(Object.assign({}, Datagrid.defaultOptions), this.options);
        const additionalOptionsEl = node.querySelector('script[role="sf-options"]');
        if (additionalOptionsEl) {
            try {
                // eslint-disable-next-line
                const one = Function(`"use strict";return ${additionalOptionsEl.innerHTML.trim()}`);
                // console.log('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + '');
                const overrides = one()();
                this.options = Object.assign(Object.assign({}, this.options), overrides);
            }
            catch (e) {
                console.error('Could not parse options inside script, ensure script inside is an anonymous function returning IDataGridOptions object');
                throw e;
            }
        }
        assert__WEBPACK_IMPORTED_MODULE_1__["notEqual"](this.options.id, '', 'id should be not empty');
        assert__WEBPACK_IMPORTED_MODULE_1__["notEqual"](this.options.url, '', 'url should be not empty');
        // Process options
        // TODO: we can override columns and sort options inside renderers but it might produce situation of triggering unexisting sort
        // Think about that, or ignore
        this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["normalizeColumns"])(this.options.columns, this.options.sortable);
        // Set default sort if present
        if (this.options.sort) {
            if (typeof this.options.sort === 'string') {
                this.defaults.sortBy = this.options.sort;
                this.defaults.sortDir = _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC;
            }
            else {
                this.defaults.sortBy = this.options.sort.field;
                this.defaults.sortDir = this.options.sort.direction || _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC;
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
            const { id } = formInstance.options;
            const fields = formInstance.enumerateFieldNames();
            this.capturedForms[id] = {
                instance: formInstance,
                fields,
            };
            const urlDataForForm = this.state.urlData ? Object.keys(this.state.urlData).filter((key) => fields.indexOf(key) >= 0).reduce((map, key) => (Object.assign(Object.assign({}, map), { [key]: this.state.urlData[key] })), {}) : undefined;
            if (urlDataForForm) {
                formInstance.setFieldValues(urlDataForForm);
            }
            // eslint-disable-next-line
            formInstance.options.jsonOnly = true;
            // eslint-disable-next-line
            formInstance.options.beforeSubmitCallback = (options) => {
                this.resetPaginator();
                this.state.setFormData(id, options.data);
                this.capturedForms[id].fields = [...new Set([...Object.keys(options.data), ...this.capturedForms[id].fields])]; // Merge new fields if any
                this.request();
                return false;
            };
        }
    }
    registerPaginatorInstance(formInstance) {
        if (formInstance.options && formInstance.options.id && this.options.captureForms.indexOf(formInstance.options.id) >= 0) {
            this.capturedPaginators.push(formInstance);
            // eslint-disable-next-line
            formInstance.options.willFetchCount = this.options.fetchCount;
            // eslint-disable-next-line
            formInstance.options.onPageChange = (options) => {
                this.state.updatePaginator(options);
                this.request();
                return false;
            };
        }
    }
    registerActionPanelInstance(formInstance) {
        if (formInstance.options
            && formInstance.options.id
            && this.options.captureActionPanels
            && this.options.captureActionPanels.indexOf(formInstance.options.id) >= 0) {
            this.capturedActionPanels.push(formInstance);
            if (this.options.selectable) {
                formInstance.reconfigure({ selectionType: this.options.selectable.type });
                formInstance.setSelection(this.state.selection, this.state.selectedItems);
            }
        }
    }
    captureForms() {
        const forms = this.sf.getInstances('form') || [];
        forms.forEach((f) => {
            this.registerFormInstance(f.instance);
        });
        const paginators = this.sf.getInstances(_paginator_Paginator__WEBPACK_IMPORTED_MODULE_6__["default"].spiralFrameworkName) || [];
        paginators.forEach((f) => {
            this.registerPaginatorInstance(f.instance);
        });
        const actionPanels = this.sf.getInstances(_actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_3__["default"].spiralFrameworkName) || [];
        actionPanels.forEach((f) => {
            this.registerActionPanelInstance(f.instance);
        });
        this.sf.instancesController.events.on('onAddInstance', ({ instance, type }) => {
            if (type === 'form') {
                this.registerFormInstance(instance);
            }
            if (type === _paginator_Paginator__WEBPACK_IMPORTED_MODULE_6__["default"].spiralFrameworkName) {
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
            }
            else {
                this.state.setSort(fieldId, _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC);
            }
        }
        else {
            const field = this.columnInfo.find((cI) => cI.id === fieldId);
            if (field) {
                this.state.setSort(field.id, field.direction);
            }
            else {
                console.warn(`Trying to sort by unsortable field ${fieldId}`);
            }
        }
        this.resetPaginator();
        this.request();
    }
    setAllPaginators(p) {
        this.capturedPaginators.forEach((f) => {
            if (f.setParams) {
                f.setParams(p, this.usePrefix() ? this.getPrefix() : this.options.serialize);
            }
        });
    }
    resetPaginator() {
        // TODO: depending on paginator type perform different reset type
        this.state.resetFetchCount();
        this.state.updatePaginator({ page: 1 });
        this.setAllPaginators(this.state.paginate);
    }
    formRequest() {
        const request = {
            fetchCount: this.state.needFetchCount,
            filter: this.state.getFilter(),
            paginate: this.state.paginate,
            sort: this.state.sortBy ? { [this.state.sortBy]: this.state.sortDir } : {},
        };
        return request;
    }
    unlock() {
        if (!this.sf.removeInstance('lock', this.node)) {
            console.warn('You try to remove \'lock\' instance, but it is not available or not started');
        }
        Object.keys(this.capturedForms).forEach((fKey) => {
            const f = this.capturedForms[fKey].instance;
            if (f.unlock) {
                f.unlock();
            }
        });
        this.capturedPaginators.forEach((f) => {
            if (f.unlock) {
                f.unlock();
            }
        });
    }
    lock() {
        if (!this.options.lockType || this.options.lockType === 'none') {
            return;
        }
        const lock = this.sf.addInstance('lock', this.node, { type: this.options.lockType });
        if (!lock) {
            console.warn('You try to add \'lock\' instance, but it is not available or already started');
            return;
        }
        Object.keys(this.capturedForms).forEach((fKey) => {
            const f = this.capturedForms[fKey].instance;
            if (f.lock) {
                f.lock();
            }
        });
        this.capturedPaginators.forEach((f) => {
            if (f.lock) {
                f.lock();
            }
        });
    }
    handleSuccess({ data }) {
        this.state.setSuccess(data.data, data.pagination);
        if (typeof data.pagination.count !== 'undefined') {
            this.state.onCountFetched();
        }
        this.render();
        this.setAllPaginators(Object.assign(Object.assign({}, this.state.paginate), { error: false }));
    }
    beforeSubmit() {
        Object.keys(this.capturedForms).forEach((fKey) => {
            const f = this.capturedForms[fKey].instance;
            if (f.removeMessages) {
                f.removeMessages();
            }
        });
    }
    handleError({ data, status, statusText }) {
        this.state.setError(data.error, data.errors, this.options.resetOnError);
        Object.keys(this.capturedForms).forEach((fKey) => {
            const f = this.capturedForms[fKey].instance;
            if (f.processAnswer) {
                const id = f.options.url;
                const { error } = data, rest = __rest(data, ["error"]);
                const filteredData = id === this.options.errorMessageTarget ? Object.assign({}, data) : rest;
                f.processAnswer({ data: filteredData, status, statusText }, false); // false stands for 'dont display errors unrelated to form inputs'
            }
        });
        this.setAllPaginators({ error: true });
        this.render();
        // TODO: remove data and display error
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
            const isGet = this.options.method === _constants__WEBPACK_IMPORTED_MODULE_4__["RequestMethod"].GET;
            const data = this.formRequest();
            const request = this.sf.ajax.send({
                url: isGet ? Object(query_string__WEBPACK_IMPORTED_MODULE_2__["stringifyUrl"])({ url: this.options.url, query: data }) : this.options.url,
                method: this.options.method,
                headers: this.options.headers,
                data: isGet ? undefined : data,
            });
            try {
                const response = yield request;
                this.handleSuccess(response);
            }
            catch (e) {
                if (e.isSFAjaxError) {
                    this.handleError(e);
                }
                else {
                    this.handleError({
                        data: {
                            error: e.toString(),
                            originalError: e,
                        },
                        status: 1000,
                        statusText: e.toString(),
                    });
                }
            }
            finally {
                this.unlock();
                this.state.stopLoading();
            }
        });
    }
    createRenderers() {
        assert__WEBPACK_IMPORTED_MODULE_1__["deepEqual"](this.grids, [], 'Grids are already initialized');
        const renderList = Array.isArray(this.options.renderers) ? this.options.renderers : [this.options.renderers];
        renderList.forEach((renderOption) => {
            this.grids.push(new _render_GridRenderer__WEBPACK_IMPORTED_MODULE_8__["GridRenderer"](Object.assign(Object.assign({}, renderOption), { ui: Object.assign(Object.assign({}, this.options.ui), renderOption.ui), columns: (renderOption.columns && renderOption.columns.length) ? renderOption.columns : this.options.columns, sortable: (renderOption.sortable && renderOption.sortable.length) ? renderOption.sortable : this.options.sortable, paginator: typeof renderOption.paginator === 'undefined' ? this.options.paginator : renderOption.paginator, dontRenderError: !!this.options.errorMessageTarget, selectable: renderOption.selectable || this.options.selectable }), this));
        });
    }
    render() {
        this.grids.forEach((grid) => {
            grid.render(this.state);
        });
    }
    updateCheckboxes() {
        this.grids.forEach((grid) => {
            grid.updateCheckboxes(this.state);
        });
        this.capturedActionPanels.forEach((a) => {
            a.setSelection(this.state.selection, this.state.selectedItems);
        });
    }
    toggleSelectionAll(checked) {
        if (this.options.selectable) {
            if (checked) {
                this.state.selectAll();
            }
            else {
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
                }
                else {
                    this.state.removeFromSelection(value);
                }
            }
            else if (checked) {
                this.state.selectSingle(value);
            }
        }
        this.updateCheckboxes();
    }
    serialize() {
        const custom = this.state.getFilter();
        const pagination = Object.keys(this.state.paginate)
            .filter((k) => _constants__WEBPACK_IMPORTED_MODULE_4__["pageParams"].indexOf(k) >= 0)
            .reduce((map, key) => (Object.assign(Object.assign({}, map), { [key]: this.state.paginate[key] })), {});
        const sortOptions = this.state.sortBy ? { sortBy: this.state.sortBy, sortDir: this.state.sortDir } : {};
        return Object.assign(Object.assign(Object.assign({}, custom), pagination), sortOptions);
    }
    deserialize(values) {
        const { page, limit, cid, lid } = values, rest = __rest(values, ["page", "limit", "cid", "lid"]);
        this.state.updatePaginator({
            page: +page, limit: +limit, cid, lid,
        }); // TODO: skip invalid page/limit values
        const { sortBy, sortDir } = rest, rest2 = __rest(rest, ["sortBy", "sortDir"]);
        if (sortBy) {
            this.state.setSort(sortBy, sortDir || _constants__WEBPACK_IMPORTED_MODULE_4__["SortDirection"].ASC); // TODO: skip
        }
        [..._constants__WEBPACK_IMPORTED_MODULE_4__["pageParams"], ..._constants__WEBPACK_IMPORTED_MODULE_4__["sortParams"]].forEach((p) => delete rest2[p]);
        this.state.urlData = rest2;
    }
    usePrefix() {
        return this.options.serialize && this.options.namespace;
    }
    getPrefix() {
        return this.usePrefix() ? (`${this.options.namespace || ''}-`) : '';
    }
    initFromUrl() {
        if (this.options.serialize) {
            if (window.location.search) {
                const urlData = this.getObjectFromUrl(this.defaults, this.getPrefix());
                if (Object.keys(urlData).length) {
                    this.deserialize(urlData);
                }
            }
        }
    }
    updateUrl() {
        if (this.options.serialize) {
            const data = this.serialize();
            this.putObjectToUrl(data, this.defaults, this.getPrefix());
        }
    }
    // eslint-disable-next-line class-methods-use-this
    getObjectFromUrl(defaults, prefix = '') {
        const obj = Object(query_string__WEBPACK_IMPORTED_MODULE_2__["parse"])(window.location.search, { parseNumbers: true, parseBooleans: true });
        const result = Object.keys(obj).reduce((map, oK) => {
            if (!prefix || oK.indexOf(prefix) === 0) {
                return Object.assign(Object.assign({}, map), { [oK.substr(prefix.length)]: (typeof obj[oK] !== 'undefined') ? obj[oK] : defaults[oK.substr(prefix.length)] });
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
                return Object.assign(Object.assign({}, map), { [`${prefix}${oK}`]: obj1[oK] });
            }
            return map;
        }, {});
        let obj2 = Object(query_string__WEBPACK_IMPORTED_MODULE_2__["parse"])(window.location.search, { parseNumbers: true, parseBooleans: true });
        if (this.usePrefix()) {
            Object.keys(obj2).forEach((k) => {
                if (k.indexOf(this.getPrefix()) === 0) {
                    delete obj2[k];
                }
            });
        }
        else {
            obj2 = {}; // If table is not using prefixes, all params are that table params
        }
        const query = Object.assign(Object.assign({}, obj2), queryRaw);
        window.history.pushState({}, document.title, Object(query_string__WEBPACK_IMPORTED_MODULE_2__["stringifyUrl"])({
            url: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
            query,
        }));
    }
}
Datagrid.spiralFrameworkName = 'datagrid';
Datagrid.defaultOptions = _render_defaultRenderer__WEBPACK_IMPORTED_MODULE_7__["defaultGridOptions"];
/* harmony default export */ __webpack_exports__["default"] = (Datagrid);


/***/ }),

/***/ "./src/datagrid/DatagridState.ts":
/*!***************************************!*\
  !*** ./src/datagrid/DatagridState.ts ***!
  \***************************************/
/*! exports provided: DatagridState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatagridState", function() { return DatagridState; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

class DatagridState {
    constructor(parent) {
        this.parent = parent;
        this.state = {
            loading: false,
            paginator: {
                page: 1,
                limit: _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_LIMIT"],
            },
            fetchCount: false,
            sortDir: _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC,
            data: [],
            formData: {},
            selection: new Set(),
        };
        this.state.fetchCount = this.parent.options.fetchCount;
    }
    isSelected(val) {
        return this.state.selection.has(String(val));
    }
    areAllSelected() {
        return this.data.reduce((hasIt, item) => hasIt
            && !!this.parent.options.selectable
            && this.isSelected(String(item[this.parent.options.selectable.id])), true);
    }
    get selection() {
        return this.state.selection;
    }
    get isCustomSearch() {
        return false; // TODO: Detect when search is filled
    }
    get selectedItems() {
        return this.data.filter((item) => !!this.parent.options.selectable && this.isSelected(String(item[this.parent.options.selectable.id])));
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
        const forms = Object.keys(this.state.formData).reduce((prev, key) => (Object.assign(Object.assign({}, prev), this.state.formData[key])), {});
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
            this.state.selection = new Set(this.data.map((item) => String(item[this.parent.options.selectable.id])));
        }
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core");
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionpanel/ActionPanel */ "./src/actionpanel/ActionPanel.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _datagrid_Datagrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datagrid/Datagrid */ "./src/datagrid/Datagrid.ts");
/* harmony import */ var _paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginator/Paginator */ "./src/paginator/Paginator.ts");





_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_datagrid_Datagrid__WEBPACK_IMPORTED_MODULE_3__["default"], 'sf-js-datagrid');
_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_paginator_Paginator__WEBPACK_IMPORTED_MODULE_4__["default"], _constants__WEBPACK_IMPORTED_MODULE_2__["PAGINATOR_CLASS_NAME"]);
_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerInstanceType(_actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_1__["default"], _constants__WEBPACK_IMPORTED_MODULE_2__["ACTION_PANEL_CLASS_NAME"]);
/* harmony default export */ __webpack_exports__["default"] = (_datagrid_Datagrid__WEBPACK_IMPORTED_MODULE_3__["default"]); // ES6 default export will not expose us as global


/***/ }),

/***/ "./src/messages.ts":
/*!*************************!*\
  !*** ./src/messages.ts ***!
  \*************************/
/*! exports provided: Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
class Messages {
    constructor(definitions, defaultDefinitions) {
        this.definitions = definitions;
        this.defaultDefinitions = defaultDefinitions;
    }
    getMessage(messageKey, values) {
        return Object.keys(values).reduce((prev, key) => {
            return prev.split(`{{${key}}}`).join((typeof values[key] === 'undefined') ? '' : String(values[key]));
        }, (this.definitions[messageKey] || this.defaultDefinitions[messageKey] || ''));
    }
}


/***/ }),

/***/ "./src/paginator/Paginator.ts":
/*!************************************!*\
  !*** ./src/paginator/Paginator.ts ***!
  \************************************/
/*! exports provided: Paginator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core");
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "../../node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");



// import './styles.css';
class Paginator extends _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.core.BaseDOMConstructor {
    constructor(ssf, node, options) {
        super();
        this.name = Paginator.spiralFrameworkName;
        this.optionsToGrab = {
            id: {
                value: Paginator.defaultOptions.id,
                domAttr: 'id',
            },
            type: {
                value: Paginator.defaultOptions.type,
                domAttr: 'data-type',
            },
            willFetchCount: {
                value: Paginator.defaultOptions.willFetchCount,
                domAttr: 'data-fetch-count',
            },
        };
        this.options = Object.assign({}, Paginator.defaultOptions);
        this.state = {
            error: false,
            limit: _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LIMIT"],
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
        const lock = this.sf.addInstance('lock', this.node, { type: this.options.lockType });
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
        const hasNext = this.hasTotal() ? (page < pagesCount) : true;
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
                active: page === i,
            });
            if (i >= startRange[1]) {
                // we reached last page for start range
                if (i + 1 < currentRange[0]) {
                    // If page is more than 1 page further from next page in range, add ellipsis and jump
                    pages.push({
                        page: undefined,
                        text: '...',
                        active: false,
                    });
                    // eslint-disable-next-line prefer-destructuring
                    i = currentRange[0];
                    // eslint-disable-next-line no-continue
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
                        active: false,
                    });
                    // eslint-disable-next-line prefer-destructuring
                    i = endRange[0];
                    // eslint-disable-next-line no-continue
                    continue;
                }
            }
            i += 1;
        } while (i <= pagesCount);
        return {
            pages,
            hasNext,
            hasPrevious,
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
                counterDiv.innerHTML = `Showing ${(this.state.page - 1) * this.state.limit + 1} to ${this.state.page * this.state.limit}`
                    + ` of ${this.state.count} entries`;
            }
            else {
                counterDiv.innerHTML = `Showing ${(this.state.page - 1) * this.state.limit + 1} to ${this.state.page * this.state.limit} entries`;
            }
        }
        if (this.state.error) {
            counterDiv.innerHTML = 'Showing no entries';
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
            this.options.limitOptions.forEach((opt) => {
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
            const urlForPage = (page) => {
                if (!this.options.serialize) {
                    return undefined;
                }
                return Object(query_string__WEBPACK_IMPORTED_MODULE_1__["stringifyUrl"])({
                    url: window.location.href,
                    query: {
                        [this.options.serialize === true ? 'page' : `${this.options.serialize}page`]: page.toString(),
                    },
                });
            };
            const clickForPage = (page) => (e) => {
                this.setPage(page);
                e.preventDefault();
                return false;
            };
            addLi(pageInfo.hasPrevious ? 'page-item previous' : 'page-item previous disabled', '«', pageInfo.hasPrevious ? urlForPage(this.state.page - 1) : undefined, pageInfo.hasPrevious ? clickForPage(this.state.page - 1) : undefined);
            pageInfo.pages.forEach((p) => {
                addLi(p.active ? 'page-item active' : 'page-item', p.text, p.page ? urlForPage(p.page) : undefined, p.page ? clickForPage(p.page) : undefined);
            });
            addLi(pageInfo.hasNext ? 'page-item next' : 'page-item next disabled', '»', pageInfo.hasNext ? urlForPage(this.state.page + 1) : undefined, pageInfo.hasNext ? clickForPage(this.state.page + 1) : undefined);
        }
        if (!this.el) {
            this.el = document.createElement('div');
            this.node.appendChild(this.el);
        }
        else {
            this.el.innerHTML = ''; // TODO: dont rerender
        }
        const { el } = this;
        el.className = this.options.className || '';
        el.appendChild(counterDiv);
        el.appendChild(limitDiv);
        el.appendChild(pagesDiv);
        if (this.state.error) {
            el === null || el === void 0 ? void 0 : el.classList.add('sf-paginator__error');
        }
        else {
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
    limitOptions: [10, 25, 50, 100],
};
/* harmony default export */ __webpack_exports__["default"] = (Paginator);


/***/ }),

/***/ "./src/render/GridRenderer.ts":
/*!************************************!*\
  !*** ./src/render/GridRenderer.ts ***!
  \************************************/
/*! exports provided: GridRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRenderer", function() { return GridRenderer; });
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spiral-toolkit/core */ "@spiral-toolkit/core");
/* harmony import */ var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionpanel_ActionPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionpanel/ActionPanel */ "./src/actionpanel/ActionPanel.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages */ "./src/messages.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultBodyWrapper */ "./src/render/defaultBodyWrapper.ts");
/* harmony import */ var _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultFooterWrapper */ "./src/render/defaultFooterWrapper.ts");
/* harmony import */ var _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaultHeaderWrapper */ "./src/render/defaultHeaderWrapper.ts");
/* harmony import */ var _defaultRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./defaultRenderer */ "./src/render/defaultRenderer.ts");
/* harmony import */ var _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultRowWrapper */ "./src/render/defaultRowWrapper.ts");
/* harmony import */ var _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./defaultTableWrapper */ "./src/render/defaultTableWrapper.ts");
/* harmony import */ var _normalizers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./normalizers */ "./src/render/normalizers.ts");












let instanceCounter = 1;
class GridRenderer {
    constructor(partialOptions, root) {
        this.root = root;
        // eslint-disable-next-line
        this.instance = instanceCounter++;
        this.options = Object.assign(Object.assign(Object.assign({}, _defaultRenderer__WEBPACK_IMPORTED_MODULE_8__["defaultRenderer"]), partialOptions), { ui: Object.assign(Object.assign({}, _defaultRenderer__WEBPACK_IMPORTED_MODULE_8__["defaultGridUiOptions"]), partialOptions.ui) });
        this.messages = new _messages__WEBPACK_IMPORTED_MODULE_3__["Messages"](this.options.messages || {}, _constants__WEBPACK_IMPORTED_MODULE_2__["defaultGridMessages"]);
        this.columnInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["normalizeColumns"])(this.options.columns, this.options.sortable);
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
        const tableRenderer = this.options.tableWrapper || _defaultTableWrapper__WEBPACK_IMPORTED_MODULE_10__["defaultTableWrapper"];
        this.tableEl = tableRenderer(this.wrapper, this.options);
    }
    createDefaultPaginator() {
        const id = `${Date.now()}${this.instance}`;
        this.root.options.captureForms.push(id);
        this.paginatorEl = document.createElement('div');
        this.paginatorEl.className = _constants__WEBPACK_IMPORTED_MODULE_2__["PAGINATOR_CLASS_NAME"];
        this.paginatorEl.id = id;
        this.root.node.appendChild(this.paginatorEl);
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
            className: (state) => (state.hasSelection ? 'row no-gutters align-items-center px-3 py-2 border-bottom' : 'd-none'),
            lockType: 'none',
            noSelection: document.createElement('div'),
            actionClassName: 'btn btn-sm',
            selectionType: ((_a = this.options.selectable) === null || _a === void 0 ? void 0 : _a.type) || _constants__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].SINGLE,
            actions: this.options.actions,
        });
        this.root.registerActionPanelInstance(panel);
    }
    // eslint-disable-next-line class-methods-use-this
    applyAdditionalCellAttributes(el, column, options, state, index) {
        const cellMeta = {
            id: column.id,
            column,
            index,
            rowSelected: options.selectable ? state.isSelected(state.data[index][options.selectable.id]) : false,
            state,
            item: state.data[index],
        };
        if (options.ui.cellClassName) {
            if (typeof options.ui.cellClassName === 'function') {
                el.classList.add(...options.ui.cellClassName(cellMeta).split(' '));
            }
            else {
                const specific = options.ui.cellClassName[column.id];
                if (specific) {
                    if (typeof specific === 'string') {
                        el.classList.add(...specific.split(' '));
                    }
                    else {
                        el.classList.add(...specific(cellMeta).split(' '));
                    }
                }
            }
        }
        if (options.ui.cellAttributes) {
            if (typeof options.ui.cellAttributes === 'function') {
                Object(_utils__WEBPACK_IMPORTED_MODULE_4__["applyAttrributes"])(el, options.ui.cellAttributes(cellMeta));
            }
            else {
                const specific = options.ui.cellAttributes[column.id];
                if (specific) {
                    if (typeof specific === 'function') {
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["applyAttrributes"])(el, specific(cellMeta));
                    }
                    else {
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["applyAttrributes"])(el, specific);
                    }
                }
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    applyAdditionalHeaderCellAttributes(el, column, options, state) {
        const cellMeta = {
            id: column.id,
            column,
            index: 0,
            rowSelected: options.selectable ? state.areAllSelected() : false,
            state,
            item: null,
        };
        if (options.ui.headerCellClassName) {
            if (typeof options.ui.headerCellClassName === 'function') {
                el.classList.add(...options.ui.headerCellClassName(cellMeta).split(' '));
            }
            else {
                const specific = options.ui.headerCellClassName[column.id];
                if (specific) {
                    if (typeof specific === 'string') {
                        el.classList.add(...specific.split(' '));
                    }
                    else {
                        el.classList.add(...specific(cellMeta).split(' '));
                    }
                }
            }
        }
        if (options.ui.headerCellAttributes) {
            if (typeof options.ui.headerCellAttributes === 'function') {
                Object(_utils__WEBPACK_IMPORTED_MODULE_4__["applyAttrributes"])(el, options.ui.headerCellAttributes(cellMeta));
            }
            else {
                const specific = options.ui.headerCellAttributes[column.id];
                if (specific) {
                    if (typeof specific === 'function') {
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["applyAttrributes"])(el, specific(cellMeta));
                    }
                    else {
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["applyAttrributes"])(el, specific);
                    }
                }
            }
        }
    }
    render(state) {
        // Render header
        const headerRenderer = this.options.headerWrapper || _defaultHeaderWrapper__WEBPACK_IMPORTED_MODULE_7__["defaultHeaderWrapper"];
        if (this.headerEl) {
            this.tableEl.removeChild(this.headerEl.outer);
        }
        this.headerEl = headerRenderer(this.tableEl, this.options, state, this.messages);
        if (this.headerEl) {
            if (this.columnInfo.length) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                this.columnInfo.forEach((cI, index) => {
                    const headerCellRenderer = Object(_normalizers__WEBPACK_IMPORTED_MODULE_11__["normalizedHeaderCellRenderer"])((this.options.headerList || {})[cI.id]);
                    const node = headerCellRenderer.createEl();
                    if (node) {
                        const rendered = headerCellRenderer.render(cI, this.options, state);
                        if (rendered) {
                            if (typeof rendered === 'string') {
                                node.innerHTML = rendered;
                            }
                            else {
                                node.appendChild(rendered);
                            }
                            this.applyAdditionalHeaderCellAttributes(node, cI, this.options, state);
                            this.headerEl.inner.appendChild(node);
                        }
                    }
                });
            }
        }
        // Render body
        if (this.bodyEl) {
            this.tableEl.removeChild(this.bodyEl);
        }
        const bodyRenderer = this.options.bodyWrapper || _defaultBodyWrapper__WEBPACK_IMPORTED_MODULE_5__["defaultBodyWrapper"];
        this.bodyEl = bodyRenderer(this.tableEl, this.options, state, this.messages);
        if (this.bodyEl) {
            this.tableEl.appendChild(this.bodyEl);
            const row = this.options.rowWrapper || _defaultRowWrapper__WEBPACK_IMPORTED_MODULE_9__["defaultRowWrapper"];
            state.data.forEach((item, index) => {
                const rowEl = row(this.bodyEl, this.options, state, index);
                this.columnInfo.forEach((cI) => {
                    const value = item[cI.id];
                    const rowCellRenderer = Object(_normalizers__WEBPACK_IMPORTED_MODULE_11__["normalizedCellRenderer"])((this.options.cells || {})[cI.id]);
                    const node = rowCellRenderer.createEl();
                    if (node) { // If no node generated, skip it, that might be custom tr render or colspan
                        const rendered = rowCellRenderer.render(value, item, cI, this.options, index, state);
                        if (rendered) { // If no content generated, skip it, that might be custom tr render or colspan
                            if (typeof rendered === 'string') {
                                node.innerHTML = rendered;
                            }
                            else {
                                node.appendChild(rendered);
                            }
                            this.applyAdditionalCellAttributes(node, cI, this.options, state, index);
                            rowEl.appendChild(node);
                        }
                    }
                });
            });
        }
        // Render footer
        if (this.footerEl) {
            this.tableEl.removeChild(this.footerEl);
        }
        const footerRenderer = this.options.footerWrapper || _defaultFooterWrapper__WEBPACK_IMPORTED_MODULE_6__["defaultFooterWrapper"];
        this.footerEl = footerRenderer(this.tableEl, this.options, state, this.messages);
        if (this.footerEl) {
            this.tableEl.appendChild(this.footerEl);
            // We assume footer render handles all data so no additional renders here
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
                checkboxes.forEach((checkbox) => {
                    const el = checkbox;
                    el.checked = state.isSelected(el.value);
                });
            }
        }
    }
}


/***/ }),

/***/ "./src/render/defaultBodyWrapper.ts":
/*!******************************************!*\
  !*** ./src/render/defaultBodyWrapper.ts ***!
  \******************************************/
/*! exports provided: defaultBodyWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBodyWrapper", function() { return defaultBodyWrapper; });
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
    }
    else if (state.data.length === 0) {
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


/***/ }),

/***/ "./src/render/defaultCellRenderer.ts":
/*!*******************************************!*\
  !*** ./src/render/defaultCellRenderer.ts ***!
  \*******************************************/
/*! exports provided: defaultCellElCreator, defaultCellRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCellElCreator", function() { return defaultCellElCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCellRenderer", function() { return defaultCellRenderer; });
const defaultCellElCreator = () => document.createElement('td');
const defaultCellRenderer = {
    createEl: defaultCellElCreator,
    render: (value) => (typeof value === 'undefined' ? '' : String(value)),
};


/***/ }),

/***/ "./src/render/defaultFooterWrapper.ts":
/*!********************************************!*\
  !*** ./src/render/defaultFooterWrapper.ts ***!
  \********************************************/
/*! exports provided: defaultFooterWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFooterWrapper", function() { return defaultFooterWrapper; });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultFooterWrapper = (node, options, state) => undefined;


/***/ }),

/***/ "./src/render/defaultHeaderCellRenderer.ts":
/*!*************************************************!*\
  !*** ./src/render/defaultHeaderCellRenderer.ts ***!
  \*************************************************/
/*! exports provided: defaultHeaderCellElCreator, defaultHeaderCellRendererInner, defaultHeaderCellRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHeaderCellElCreator", function() { return defaultHeaderCellElCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHeaderCellRendererInner", function() { return defaultHeaderCellRendererInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHeaderCellRenderer", function() { return defaultHeaderCellRenderer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

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
        }
        else {
            classes.push('sf-table__sort_desc');
        }
    }
    el.className = classes.join(' ');
    el.innerText = column.title;
    return el;
};
const defaultHeaderCellRenderer = {
    createEl: defaultHeaderCellElCreator,
    render: defaultHeaderCellRendererInner,
};


/***/ }),

/***/ "./src/render/defaultHeaderWrapper.ts":
/*!********************************************!*\
  !*** ./src/render/defaultHeaderWrapper.ts ***!
  \********************************************/
/*! exports provided: defaultHeaderWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultHeaderWrapper", function() { return defaultHeaderWrapper; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    return { outer: el, inner: tr };
};


/***/ }),

/***/ "./src/render/defaultRenderer.ts":
/*!***************************************!*\
  !*** ./src/render/defaultRenderer.ts ***!
  \***************************************/
/*! exports provided: defaultGridUiOptions, defaultRenderer, defaultGridOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridUiOptions", function() { return defaultGridUiOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRenderer", function() { return defaultRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridOptions", function() { return defaultGridOptions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

const defaultGridUiOptions = {
    wrapperClassName: 'table-responsive',
    tableClassName: 'table table-striped',
    cellClassName: {},
    rowClassName: '',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cellAttributes: (cellMeta) => ({}),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rowAttributes: (rowMeta) => ({}),
};
const defaultRenderer = {
    columns: [],
    sortable: [],
    /**
     * Basic class/attribute properties
     */
    ui: defaultGridUiOptions,
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
    renderers: defaultRenderer,
};


/***/ }),

/***/ "./src/render/defaultRowWrapper.ts":
/*!*****************************************!*\
  !*** ./src/render/defaultRowWrapper.ts ***!
  \*****************************************/
/*! exports provided: defaultRowWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRowWrapper", function() { return defaultRowWrapper; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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


/***/ }),

/***/ "./src/render/defaultTableWrapper.ts":
/*!*******************************************!*\
  !*** ./src/render/defaultTableWrapper.ts ***!
  \*******************************************/
/*! exports provided: defaultTableWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTableWrapper", function() { return defaultTableWrapper; });
const defaultTableWrapper = (node, options) => {
    const el = document.createElement('table');
    el.className = options.ui.tableClassName || '';
    node.appendChild(el);
    return el;
};


/***/ }),

/***/ "./src/render/normalizers.ts":
/*!***********************************!*\
  !*** ./src/render/normalizers.ts ***!
  \***********************************/
/*! exports provided: isCellAdvanced, isHeaderCellAdvanced, normalizedCellRenderer, normalizedHeaderCellRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCellAdvanced", function() { return isCellAdvanced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHeaderCellAdvanced", function() { return isHeaderCellAdvanced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizedCellRenderer", function() { return normalizedCellRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizedHeaderCellRenderer", function() { return normalizedHeaderCellRenderer; });
/* harmony import */ var _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultCellRenderer */ "./src/render/defaultCellRenderer.ts");
/* harmony import */ var _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultHeaderCellRenderer */ "./src/render/defaultHeaderCellRenderer.ts");


function isCellAdvanced(render) {
    return render.createEl !== undefined;
}
function isHeaderCellAdvanced(render) {
    return render.createEl !== undefined;
}
const normalizedCellRenderer = (render) => {
    if (!render) {
        return _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_0__["defaultCellRenderer"];
    }
    if (!isCellAdvanced(render)) {
        return {
            createEl: _defaultCellRenderer__WEBPACK_IMPORTED_MODULE_0__["defaultCellElCreator"],
            render,
        };
    }
    return render;
};
const normalizedHeaderCellRenderer = (render) => {
    if (!render) {
        return _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_1__["defaultHeaderCellRenderer"];
    }
    if (!isHeaderCellAdvanced(render)) {
        return {
            createEl: _defaultHeaderCellRenderer__WEBPACK_IMPORTED_MODULE_1__["defaultHeaderCellElCreator"],
            render,
        };
    }
    return render;
};


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: normalizeColumns, applyAttrributes, isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeColumns", function() { return normalizeColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAttrributes", function() { return applyAttrributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");

const normalizeColumns = (columns, sortables) => {
    const sList = sortables.map((s) => {
        if (typeof s === 'string') {
            return { field: s, direction: undefined };
        }
        return s;
    });
    return columns.map((c) => {
        let id;
        let title;
        let sortDir;
        let sortable = false;
        if (typeof c === 'string') {
            id = c;
            title = c;
            sortDir = _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC;
        }
        else {
            id = c.id;
            title = c.title || c.id;
            sortDir = c.sortDir || _constants__WEBPACK_IMPORTED_MODULE_0__["SortDirection"].ASC;
            sortable = !!c.sortDir;
        }
        const sort = sList.find((s) => (s.field === id));
        if (sort) {
            return {
                id,
                title,
                sortable: true,
                direction: sort.direction || sortDir,
            };
        }
        return {
            id,
            title,
            sortable,
            direction: sortDir,
        };
    });
};
const applyAttrributes = (node, attrs) => {
    Object.keys(attrs).forEach((name) => {
        node.setAttribute(name, attrs[name]);
    });
};
function isString(something) {
    return typeof something === 'string';
}


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TRkRhdGFHcmlkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9ub2RlX21vZHVsZXMvYXNzZXJ0L2Fzc2VydC5qcyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy9zcGxpdC1vbi1maXJzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovL1NGRGF0YUdyaWQvTzovUHJvamVjdHMvU0YvdG9vbGtpdC9ub2RlX21vZHVsZXMvdXRpbC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkL086L1Byb2plY3RzL1NGL3Rvb2xraXQvbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC9POi9Qcm9qZWN0cy9TRi90b29sa2l0L25vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC8uL3NyYy9hY3Rpb25wYW5lbC9BY3Rpb25QYW5lbC50cyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkLy4vc3JjL2RhdGFncmlkL0RhdGFncmlkLnRzIiwid2VicGFjazovL1NGRGF0YUdyaWQvLi9zcmMvZGF0YWdyaWQvRGF0YWdyaWRTdGF0ZS50cyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL1NGRGF0YUdyaWQvLi9zcmMvbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC8uL3NyYy9wYWdpbmF0b3IvUGFnaW5hdG9yLnRzIiwid2VicGFjazovL1NGRGF0YUdyaWQvLi9zcmMvcmVuZGVyL0dyaWRSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkLy4vc3JjL3JlbmRlci9kZWZhdWx0Qm9keVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC8uL3NyYy9yZW5kZXIvZGVmYXVsdENlbGxSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkLy4vc3JjL3JlbmRlci9kZWZhdWx0Rm9vdGVyV3JhcHBlci50cyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkLy4vc3JjL3JlbmRlci9kZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVyLnRzIiwid2VicGFjazovL1NGRGF0YUdyaWQvLi9zcmMvcmVuZGVyL2RlZmF1bHRIZWFkZXJXcmFwcGVyLnRzIiwid2VicGFjazovL1NGRGF0YUdyaWQvLi9zcmMvcmVuZGVyL2RlZmF1bHRSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkLy4vc3JjL3JlbmRlci9kZWZhdWx0Um93V3JhcHBlci50cyIsIndlYnBhY2s6Ly9TRkRhdGFHcmlkLy4vc3JjL3JlbmRlci9kZWZhdWx0VGFibGVXcmFwcGVyLnRzIiwid2VicGFjazovL1NGRGF0YUdyaWQvLi9zcmMvcmVuZGVyL25vcm1hbGl6ZXJzLnRzIiwid2VicGFjazovL1NGRGF0YUdyaWQvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vU0ZEYXRhR3JpZC9leHRlcm5hbCBcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYix1QkFBdUIsRUFBRTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0ZBLDhDQUFhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLGdFQUFlOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLDhDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLDhFQUFvQjs7QUFFL0M7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztB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QUNBLHNCQUFzQix5RUFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxlQUFlLG9GQUF5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUZBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNyQztBQUNQO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdEQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQSxrRSIsImZpbGUiOiJkYXRhZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHNwaXJhbC10b29sa2l0L2RhdGFncmlkXCIsIFtcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBzcGlyYWwtdG9vbGtpdC9kYXRhZ3JpZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBzcGlyYWwtdG9vbGtpdC9jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTRkRhdGFHcmlkXCJdID0gZmFjdG9yeShyb290W1wiQHNwaXJhbC10b29sa2l0L2NvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19zcGlyYWxfdG9vbGtpdF9jb3JlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRva2VuID0gJyVbYS1mMC05XXsyfSc7XG52YXIgc2luZ2xlTWF0Y2hlciA9IG5ldyBSZWdFeHAodG9rZW4sICdnaScpO1xudmFyIG11bHRpTWF0Y2hlciA9IG5ldyBSZWdFeHAoJygnICsgdG9rZW4gKyAnKSsnLCAnZ2knKTtcblxuZnVuY3Rpb24gZGVjb2RlQ29tcG9uZW50cyhjb21wb25lbnRzLCBzcGxpdCkge1xuXHR0cnkge1xuXHRcdC8vIFRyeSB0byBkZWNvZGUgdGhlIGVudGlyZSBzdHJpbmcgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvbXBvbmVudHMuam9pbignJykpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBEbyBub3RoaW5nXG5cdH1cblxuXHRpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50cztcblx0fVxuXG5cdHNwbGl0ID0gc3BsaXQgfHwgMTtcblxuXHQvLyBTcGxpdCB0aGUgYXJyYXkgaW4gMiBwYXJ0c1xuXHR2YXIgbGVmdCA9IGNvbXBvbmVudHMuc2xpY2UoMCwgc3BsaXQpO1xuXHR2YXIgcmlnaHQgPSBjb21wb25lbnRzLnNsaWNlKHNwbGl0KTtcblxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFtdLCBkZWNvZGVDb21wb25lbnRzKGxlZnQpLCBkZWNvZGVDb21wb25lbnRzKHJpZ2h0KSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR2YXIgdG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5wdXQgPSBkZWNvZGVDb21wb25lbnRzKHRva2VucywgaSkuam9pbignJyk7XG5cblx0XHRcdHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxufVxuXG5mdW5jdGlvbiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoaW5wdXQpIHtcblx0Ly8gS2VlcCB0cmFjayBvZiBhbGwgdGhlIHJlcGxhY2VtZW50cyBhbmQgcHJlZmlsbCB0aGUgbWFwIHdpdGggdGhlIGBCT01gXG5cdHZhciByZXBsYWNlTWFwID0ge1xuXHRcdCclRkUlRkYnOiAnXFx1RkZGRFxcdUZGRkQnLFxuXHRcdCclRkYlRkUnOiAnXFx1RkZGRFxcdUZGRkQnXG5cdH07XG5cblx0dmFyIG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR3aGlsZSAobWF0Y2gpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gRGVjb2RlIGFzIGJpZyBjaHVua3MgYXMgcG9zc2libGVcblx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzBdKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBkZWNvZGUobWF0Y2hbMF0pO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9PSBtYXRjaFswXSkge1xuXHRcdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0fVxuXG5cdC8vIEFkZCBgJUMyYCBhdCB0aGUgZW5kIG9mIHRoZSBtYXAgdG8gbWFrZSBzdXJlIGl0IGRvZXMgbm90IHJlcGxhY2UgdGhlIGNvbWJpbmF0b3IgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZVxuXHRyZXBsYWNlTWFwWyclQzInXSA9ICdcXHVGRkZEJztcblxuXHR2YXIgZW50cmllcyA9IE9iamVjdC5rZXlzKHJlcGxhY2VNYXApO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFJlcGxhY2UgYWxsIGRlY29kZWQgY29tcG9uZW50c1xuXHRcdHZhciBrZXkgPSBlbnRyaWVzW2ldO1xuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgJ2cnKSwgcmVwbGFjZU1hcFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZW5jb2RlZFVSSSkge1xuXHRpZiAodHlwZW9mIGVuY29kZWRVUkkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYGVuY29kZWRVUklgIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AsIGdvdCBgJyArIHR5cGVvZiBlbmNvZGVkVVJJICsgJ2AnKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0ZW5jb2RlZFVSSSA9IGVuY29kZWRVUkkucmVwbGFjZSgvXFwrL2csICcgJyk7XG5cblx0XHQvLyBUcnkgdGhlIGJ1aWx0IGluIGRlY29kZXIgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBGYWxsYmFjayB0byBhIG1vcmUgYWR2YW5jZWQgZGVjb2RlclxuXHRcdHJldHVybiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIGNvbXBhcmUgYW5kIGlzQnVmZmVyIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvYmxvYi82ODBlOWU1ZTQ4OGYyMmFhYzI3NTk5YTU3ZGM4NDRhNjMxNTkyOGRkL2luZGV4LmpzXG4vLyBvcmlnaW5hbCBub3RpY2U6XG5cbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHggPSBhLmxlbmd0aDtcbiAgdmFyIHkgPSBiLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXTtcbiAgICAgIHkgPSBiW2ldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmICh5IDwgeCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuZnVuY3Rpb24gaXNCdWZmZXIoYikge1xuICBpZiAoZ2xvYmFsLkJ1ZmZlciAmJiB0eXBlb2YgZ2xvYmFsLkJ1ZmZlci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnbG9iYWwuQnVmZmVyLmlzQnVmZmVyKGIpO1xuICB9XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpO1xufVxuXG4vLyBiYXNlZCBvbiBub2RlIGFzc2VydCwgb3JpZ2luYWwgbm90aWNlOlxuLy8gTkI6IFRoZSBVUkwgdG8gdGhlIENvbW1vbkpTIHNwZWMgaXMga2VwdCBqdXN0IGZvciB0cmFkaXRpb24uXG4vLyAgICAgbm9kZS1hc3NlcnQgaGFzIGV2b2x2ZWQgYSBsb3Qgc2luY2UgdGhlbiwgYm90aCBpbiBBUEkgYW5kIGJlaGF2aW9yLlxuXG4vLyBodHRwOi8vd2lraS5jb21tb25qcy5vcmcvd2lraS9Vbml0X1Rlc3RpbmcvMS4wXG4vL1xuLy8gVEhJUyBJUyBOT1QgVEVTVEVEIE5PUiBMSUtFTFkgVE8gV09SSyBPVVRTSURFIFY4IVxuLy9cbi8vIE9yaWdpbmFsbHkgZnJvbSBuYXJ3aGFsLmpzIChodHRwOi8vbmFyd2hhbGpzLm9yZylcbi8vIENvcHlyaWdodCAoYykgMjAwOSBUaG9tYXMgUm9iaW5zb24gPDI4MG5vcnRoLmNvbT5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4vLyBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsLycpO1xudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGZ1bmN0aW9uc0hhdmVOYW1lcyA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb28oKSB7fS5uYW1lID09PSAnZm9vJztcbn0oKSk7XG5mdW5jdGlvbiBwVG9TdHJpbmcgKG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc1ZpZXcoYXJyYnVmKSB7XG4gIGlmIChpc0J1ZmZlcihhcnJidWYpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgZ2xvYmFsLkFycmF5QnVmZmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhhcnJidWYpO1xuICB9XG4gIGlmICghYXJyYnVmKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhcnJidWYgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhcnJidWYuYnVmZmVyICYmIGFycmJ1Zi5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbi8vIDEuIFRoZSBhc3NlcnQgbW9kdWxlIHByb3ZpZGVzIGZ1bmN0aW9ucyB0aGF0IHRocm93XG4vLyBBc3NlcnRpb25FcnJvcidzIHdoZW4gcGFydGljdWxhciBjb25kaXRpb25zIGFyZSBub3QgbWV0LiBUaGVcbi8vIGFzc2VydCBtb2R1bGUgbXVzdCBjb25mb3JtIHRvIHRoZSBmb2xsb3dpbmcgaW50ZXJmYWNlLlxuXG52YXIgYXNzZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSBvaztcblxuLy8gMi4gVGhlIEFzc2VydGlvbkVycm9yIGlzIGRlZmluZWQgaW4gYXNzZXJ0LlxuLy8gbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7IG1lc3NhZ2U6IG1lc3NhZ2UsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBhY3R1YWwsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IGV4cGVjdGVkIH0pXG5cbnZhciByZWdleCA9IC9cXHMqZnVuY3Rpb25cXHMrKFteXFwoXFxzXSopXFxzKi87XG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL2Z1bmN0aW9uLnByb3RvdHlwZS5uYW1lL2Jsb2IvYWRlZWVlYzhiZmNjNjA2OGIxODdkN2Q5ZmIzZDViYjFkM2EzMDg5OS9pbXBsZW1lbnRhdGlvbi5qc1xuZnVuY3Rpb24gZ2V0TmFtZShmdW5jKSB7XG4gIGlmICghdXRpbC5pc0Z1bmN0aW9uKGZ1bmMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMpIHtcbiAgICByZXR1cm4gZnVuYy5uYW1lO1xuICB9XG4gIHZhciBzdHIgPSBmdW5jLnRvU3RyaW5nKCk7XG4gIHZhciBtYXRjaCA9IHN0ci5tYXRjaChyZWdleCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXTtcbn1cbmFzc2VydC5Bc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIEFzc2VydGlvbkVycm9yKG9wdGlvbnMpIHtcbiAgdGhpcy5uYW1lID0gJ0Fzc2VydGlvbkVycm9yJztcbiAgdGhpcy5hY3R1YWwgPSBvcHRpb25zLmFjdHVhbDtcbiAgdGhpcy5leHBlY3RlZCA9IG9wdGlvbnMuZXhwZWN0ZWQ7XG4gIHRoaXMub3BlcmF0b3IgPSBvcHRpb25zLm9wZXJhdG9yO1xuICBpZiAob3B0aW9ucy5tZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xuICAgIHRoaXMuZ2VuZXJhdGVkTWVzc2FnZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWVzc2FnZSA9IGdldE1lc3NhZ2UodGhpcyk7XG4gICAgdGhpcy5nZW5lcmF0ZWRNZXNzYWdlID0gdHJ1ZTtcbiAgfVxuICB2YXIgc3RhY2tTdGFydEZ1bmN0aW9uID0gb3B0aW9ucy5zdGFja1N0YXJ0RnVuY3Rpb24gfHwgZmFpbDtcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgc3RhY2tTdGFydEZ1bmN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBub24gdjggYnJvd3NlcnMgc28gd2UgY2FuIGhhdmUgYSBzdGFja3RyYWNlXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuICAgIGlmIChlcnIuc3RhY2spIHtcbiAgICAgIHZhciBvdXQgPSBlcnIuc3RhY2s7XG5cbiAgICAgIC8vIHRyeSB0byBzdHJpcCB1c2VsZXNzIGZyYW1lc1xuICAgICAgdmFyIGZuX25hbWUgPSBnZXROYW1lKHN0YWNrU3RhcnRGdW5jdGlvbik7XG4gICAgICB2YXIgaWR4ID0gb3V0LmluZGV4T2YoJ1xcbicgKyBmbl9uYW1lKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAvLyBvbmNlIHdlIGhhdmUgbG9jYXRlZCB0aGUgZnVuY3Rpb24gZnJhbWVcbiAgICAgICAgLy8gd2UgbmVlZCB0byBzdHJpcCBvdXQgZXZlcnl0aGluZyBiZWZvcmUgaXQgKGFuZCBpdHMgbGluZSlcbiAgICAgICAgdmFyIG5leHRfbGluZSA9IG91dC5pbmRleE9mKCdcXG4nLCBpZHggKyAxKTtcbiAgICAgICAgb3V0ID0gb3V0LnN1YnN0cmluZyhuZXh0X2xpbmUgKyAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFjayA9IG91dDtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGFzc2VydC5Bc3NlcnRpb25FcnJvciBpbnN0YW5jZW9mIEVycm9yXG51dGlsLmluaGVyaXRzKGFzc2VydC5Bc3NlcnRpb25FcnJvciwgRXJyb3IpO1xuXG5mdW5jdGlvbiB0cnVuY2F0ZShzLCBuKSB7XG4gIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPCBuID8gcyA6IHMuc2xpY2UoMCwgbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluc3BlY3Qoc29tZXRoaW5nKSB7XG4gIGlmIChmdW5jdGlvbnNIYXZlTmFtZXMgfHwgIXV0aWwuaXNGdW5jdGlvbihzb21ldGhpbmcpKSB7XG4gICAgcmV0dXJuIHV0aWwuaW5zcGVjdChzb21ldGhpbmcpO1xuICB9XG4gIHZhciByYXduYW1lID0gZ2V0TmFtZShzb21ldGhpbmcpO1xuICB2YXIgbmFtZSA9IHJhd25hbWUgPyAnOiAnICsgcmF3bmFtZSA6ICcnO1xuICByZXR1cm4gJ1tGdW5jdGlvbicgKyAgbmFtZSArICddJztcbn1cbmZ1bmN0aW9uIGdldE1lc3NhZ2Uoc2VsZikge1xuICByZXR1cm4gdHJ1bmNhdGUoaW5zcGVjdChzZWxmLmFjdHVhbCksIDEyOCkgKyAnICcgK1xuICAgICAgICAgc2VsZi5vcGVyYXRvciArICcgJyArXG4gICAgICAgICB0cnVuY2F0ZShpbnNwZWN0KHNlbGYuZXhwZWN0ZWQpLCAxMjgpO1xufVxuXG4vLyBBdCBwcmVzZW50IG9ubHkgdGhlIHRocmVlIGtleXMgbWVudGlvbmVkIGFib3ZlIGFyZSB1c2VkIGFuZFxuLy8gdW5kZXJzdG9vZCBieSB0aGUgc3BlYy4gSW1wbGVtZW50YXRpb25zIG9yIHN1YiBtb2R1bGVzIGNhbiBwYXNzXG4vLyBvdGhlciBrZXlzIHRvIHRoZSBBc3NlcnRpb25FcnJvcidzIGNvbnN0cnVjdG9yIC0gdGhleSB3aWxsIGJlXG4vLyBpZ25vcmVkLlxuXG4vLyAzLiBBbGwgb2YgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgbXVzdCB0aHJvdyBhbiBBc3NlcnRpb25FcnJvclxuLy8gd2hlbiBhIGNvcnJlc3BvbmRpbmcgY29uZGl0aW9uIGlzIG5vdCBtZXQsIHdpdGggYSBtZXNzYWdlIHRoYXRcbi8vIG1heSBiZSB1bmRlZmluZWQgaWYgbm90IHByb3ZpZGVkLiAgQWxsIGFzc2VydGlvbiBtZXRob2RzIHByb3ZpZGVcbi8vIGJvdGggdGhlIGFjdHVhbCBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRvIHRoZSBhc3NlcnRpb24gZXJyb3IgZm9yXG4vLyBkaXNwbGF5IHB1cnBvc2VzLlxuXG5mdW5jdGlvbiBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG9wZXJhdG9yLCBzdGFja1N0YXJ0RnVuY3Rpb24pIHtcbiAgdGhyb3cgbmV3IGFzc2VydC5Bc3NlcnRpb25FcnJvcih7XG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBhY3R1YWw6IGFjdHVhbCxcbiAgICBleHBlY3RlZDogZXhwZWN0ZWQsXG4gICAgb3BlcmF0b3I6IG9wZXJhdG9yLFxuICAgIHN0YWNrU3RhcnRGdW5jdGlvbjogc3RhY2tTdGFydEZ1bmN0aW9uXG4gIH0pO1xufVxuXG4vLyBFWFRFTlNJT04hIGFsbG93cyBmb3Igd2VsbCBiZWhhdmVkIGVycm9ycyBkZWZpbmVkIGVsc2V3aGVyZS5cbmFzc2VydC5mYWlsID0gZmFpbDtcblxuLy8gNC4gUHVyZSBhc3NlcnRpb24gdGVzdHMgd2hldGhlciBhIHZhbHVlIGlzIHRydXRoeSwgYXMgZGV0ZXJtaW5lZFxuLy8gYnkgISFndWFyZC5cbi8vIGFzc2VydC5vayhndWFyZCwgbWVzc2FnZV9vcHQpO1xuLy8gVGhpcyBzdGF0ZW1lbnQgaXMgZXF1aXZhbGVudCB0byBhc3NlcnQuZXF1YWwodHJ1ZSwgISFndWFyZCxcbi8vIG1lc3NhZ2Vfb3B0KTsuIFRvIHRlc3Qgc3RyaWN0bHkgZm9yIHRoZSB2YWx1ZSB0cnVlLCB1c2Vcbi8vIGFzc2VydC5zdHJpY3RFcXVhbCh0cnVlLCBndWFyZCwgbWVzc2FnZV9vcHQpOy5cblxuZnVuY3Rpb24gb2sodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF2YWx1ZSkgZmFpbCh2YWx1ZSwgdHJ1ZSwgbWVzc2FnZSwgJz09JywgYXNzZXJ0Lm9rKTtcbn1cbmFzc2VydC5vayA9IG9rO1xuXG4vLyA1LiBUaGUgZXF1YWxpdHkgYXNzZXJ0aW9uIHRlc3RzIHNoYWxsb3csIGNvZXJjaXZlIGVxdWFsaXR5IHdpdGhcbi8vID09LlxuLy8gYXNzZXJ0LmVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmVxdWFsID0gZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9IGV4cGVjdGVkKSBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICc9PScsIGFzc2VydC5lcXVhbCk7XG59O1xuXG4vLyA2LiBUaGUgbm9uLWVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBmb3Igd2hldGhlciB0d28gb2JqZWN0cyBhcmUgbm90IGVxdWFsXG4vLyB3aXRoICE9IGFzc2VydC5ub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlX29wdCk7XG5cbmFzc2VydC5ub3RFcXVhbCA9IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGFjdHVhbCA9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJyE9JywgYXNzZXJ0Lm5vdEVxdWFsKTtcbiAgfVxufTtcblxuLy8gNy4gVGhlIGVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBhIGRlZXAgZXF1YWxpdHkgcmVsYXRpb24uXG4vLyBhc3NlcnQuZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LmRlZXBFcXVhbCA9IGZ1bmN0aW9uIGRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBmYWxzZSkpIHtcbiAgICBmYWlsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsICdkZWVwRXF1YWwnLCBhc3NlcnQuZGVlcEVxdWFsKTtcbiAgfVxufTtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbCA9IGZ1bmN0aW9uIGRlZXBTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmICghX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ2RlZXBTdHJpY3RFcXVhbCcsIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIHN0cmljdCwgbWVtb3MpIHtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAmJiBpc0J1ZmZlcihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gY29tcGFyZShhY3R1YWwsIGV4cGVjdGVkKSA9PT0gMDtcblxuICAvLyA3LjIuIElmIHRoZSBleHBlY3RlZCB2YWx1ZSBpcyBhIERhdGUgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIERhdGUgb2JqZWN0IHRoYXQgcmVmZXJzIHRvIHRoZSBzYW1lIHRpbWUuXG4gIH0gZWxzZSBpZiAodXRpbC5pc0RhdGUoYWN0dWFsKSAmJiB1dGlsLmlzRGF0ZShleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMyBJZiB0aGUgZXhwZWN0ZWQgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCB0aGUgYWN0dWFsIHZhbHVlIGlzXG4gIC8vIGVxdWl2YWxlbnQgaWYgaXQgaXMgYWxzbyBhIFJlZ0V4cCBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzb3VyY2UgYW5kXG4gIC8vIHByb3BlcnRpZXMgKGBnbG9iYWxgLCBgbXVsdGlsaW5lYCwgYGxhc3RJbmRleGAsIGBpZ25vcmVDYXNlYCkuXG4gIH0gZWxzZSBpZiAodXRpbC5pc1JlZ0V4cChhY3R1YWwpICYmIHV0aWwuaXNSZWdFeHAoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5zb3VyY2UgPT09IGV4cGVjdGVkLnNvdXJjZSAmJlxuICAgICAgICAgICBhY3R1YWwuZ2xvYmFsID09PSBleHBlY3RlZC5nbG9iYWwgJiZcbiAgICAgICAgICAgYWN0dWFsLm11bHRpbGluZSA9PT0gZXhwZWN0ZWQubXVsdGlsaW5lICYmXG4gICAgICAgICAgIGFjdHVhbC5sYXN0SW5kZXggPT09IGV4cGVjdGVkLmxhc3RJbmRleCAmJlxuICAgICAgICAgICBhY3R1YWwuaWdub3JlQ2FzZSA9PT0gZXhwZWN0ZWQuaWdub3JlQ2FzZTtcblxuICAvLyA3LjQuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoKGFjdHVhbCA9PT0gbnVsbCB8fCB0eXBlb2YgYWN0dWFsICE9PSAnb2JqZWN0JykgJiZcbiAgICAgICAgICAgICAoZXhwZWN0ZWQgPT09IG51bGwgfHwgdHlwZW9mIGV4cGVjdGVkICE9PSAnb2JqZWN0JykpIHtcbiAgICByZXR1cm4gc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyBJZiBib3RoIHZhbHVlcyBhcmUgaW5zdGFuY2VzIG9mIHR5cGVkIGFycmF5cywgd3JhcCB0aGVpciB1bmRlcmx5aW5nXG4gIC8vIEFycmF5QnVmZmVycyBpbiBhIEJ1ZmZlciBlYWNoIHRvIGluY3JlYXNlIHBlcmZvcm1hbmNlXG4gIC8vIFRoaXMgb3B0aW1pemF0aW9uIHJlcXVpcmVzIHRoZSBhcnJheXMgdG8gaGF2ZSB0aGUgc2FtZSB0eXBlIGFzIGNoZWNrZWQgYnlcbiAgLy8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAoYWthIHBUb1N0cmluZykuIE5ldmVyIHBlcmZvcm0gYmluYXJ5XG4gIC8vIGNvbXBhcmlzb25zIGZvciBGbG9hdCpBcnJheXMsIHRob3VnaCwgc2luY2UgZS5nLiArMCA9PT0gLTAgYnV0IHRoZWlyXG4gIC8vIGJpdCBwYXR0ZXJucyBhcmUgbm90IGlkZW50aWNhbC5cbiAgfSBlbHNlIGlmIChpc1ZpZXcoYWN0dWFsKSAmJiBpc1ZpZXcoZXhwZWN0ZWQpICYmXG4gICAgICAgICAgICAgcFRvU3RyaW5nKGFjdHVhbCkgPT09IHBUb1N0cmluZyhleHBlY3RlZCkgJiZcbiAgICAgICAgICAgICAhKGFjdHVhbCBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fFxuICAgICAgICAgICAgICAgYWN0dWFsIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KSkge1xuICAgIHJldHVybiBjb21wYXJlKG5ldyBVaW50OEFycmF5KGFjdHVhbC5idWZmZXIpLFxuICAgICAgICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KGV4cGVjdGVkLmJ1ZmZlcikpID09PSAwO1xuXG4gIC8vIDcuNSBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYWN0dWFsKSAhPT0gaXNCdWZmZXIoZXhwZWN0ZWQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG1lbW9zID0gbWVtb3MgfHwge2FjdHVhbDogW10sIGV4cGVjdGVkOiBbXX07XG5cbiAgICB2YXIgYWN0dWFsSW5kZXggPSBtZW1vcy5hY3R1YWwuaW5kZXhPZihhY3R1YWwpO1xuICAgIGlmIChhY3R1YWxJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmIChhY3R1YWxJbmRleCA9PT0gbWVtb3MuZXhwZWN0ZWQuaW5kZXhPZihleHBlY3RlZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb3MuYWN0dWFsLnB1c2goYWN0dWFsKTtcbiAgICBtZW1vcy5leHBlY3RlZC5wdXNoKGV4cGVjdGVkKTtcblxuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBzdHJpY3QsIG1lbW9zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyhvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBzdHJpY3QsIGFjdHVhbFZpc2l0ZWRPYmplY3RzKSB7XG4gIGlmIChhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSBudWxsIHx8IGIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGlmIG9uZSBpcyBhIHByaW1pdGl2ZSwgdGhlIG90aGVyIG11c3QgYmUgc2FtZVxuICBpZiAodXRpbC5pc1ByaW1pdGl2ZShhKSB8fCB1dGlsLmlzUHJpbWl0aXZlKGIpKVxuICAgIHJldHVybiBhID09PSBiO1xuICBpZiAoc3RyaWN0ICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihhKSAhPT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgdmFyIGFJc0FyZ3MgPSBpc0FyZ3VtZW50cyhhKTtcbiAgdmFyIGJJc0FyZ3MgPSBpc0FyZ3VtZW50cyhiKTtcbiAgaWYgKChhSXNBcmdzICYmICFiSXNBcmdzKSB8fCAoIWFJc0FyZ3MgJiYgYklzQXJncykpXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoYUlzQXJncykge1xuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIF9kZWVwRXF1YWwoYSwgYiwgc3RyaWN0KTtcbiAgfVxuICB2YXIga2EgPSBvYmplY3RLZXlzKGEpO1xuICB2YXIga2IgPSBvYmplY3RLZXlzKGIpO1xuICB2YXIga2V5LCBpO1xuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9PSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIV9kZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIHN0cmljdCwgYWN0dWFsVmlzaXRlZE9iamVjdHMpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyA4LiBUaGUgbm9uLWVxdWl2YWxlbmNlIGFzc2VydGlvbiB0ZXN0cyBmb3IgYW55IGRlZXAgaW5lcXVhbGl0eS5cbi8vIGFzc2VydC5ub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgaWYgKF9kZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgZmFsc2UpKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnbm90RGVlcEVxdWFsJywgYXNzZXJ0Lm5vdERlZXBFcXVhbCk7XG4gIH1cbn07XG5cbmFzc2VydC5ub3REZWVwU3RyaWN0RXF1YWwgPSBub3REZWVwU3RyaWN0RXF1YWw7XG5mdW5jdGlvbiBub3REZWVwU3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoX2RlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCB0cnVlKSkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJ25vdERlZXBTdHJpY3RFcXVhbCcsIG5vdERlZXBTdHJpY3RFcXVhbCk7XG4gIH1cbn1cblxuXG4vLyA5LiBUaGUgc3RyaWN0IGVxdWFsaXR5IGFzc2VydGlvbiB0ZXN0cyBzdHJpY3QgZXF1YWxpdHksIGFzIGRldGVybWluZWQgYnkgPT09LlxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsID0gZnVuY3Rpb24gc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgIGZhaWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgJz09PScsIGFzc2VydC5zdHJpY3RFcXVhbCk7XG4gIH1cbn07XG5cbi8vIDEwLiBUaGUgc3RyaWN0IG5vbi1lcXVhbGl0eSBhc3NlcnRpb24gdGVzdHMgZm9yIHN0cmljdCBpbmVxdWFsaXR5LCBhc1xuLy8gZGV0ZXJtaW5lZCBieSAhPT0uICBhc3NlcnQubm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZV9vcHQpO1xuXG5hc3NlcnQubm90U3RyaWN0RXF1YWwgPSBmdW5jdGlvbiBub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCAnIT09JywgYXNzZXJ0Lm5vdFN0cmljdEVxdWFsKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkge1xuICBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV4cGVjdGVkKSA9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIHJldHVybiBleHBlY3RlZC50ZXN0KGFjdHVhbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWdub3JlLiAgVGhlIGluc3RhbmNlb2YgY2hlY2sgZG9lc24ndCB3b3JrIGZvciBhcnJvdyBmdW5jdGlvbnMuXG4gIH1cblxuICBpZiAoRXJyb3IuaXNQcm90b3R5cGVPZihleHBlY3RlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX3RyeUJsb2NrKGJsb2NrKSB7XG4gIHZhciBlcnJvcjtcbiAgdHJ5IHtcbiAgICBibG9jaygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSBlO1xuICB9XG4gIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gX3Rocm93cyhzaG91bGRUaHJvdywgYmxvY2ssIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIHZhciBhY3R1YWw7XG5cbiAgaWYgKHR5cGVvZiBibG9jayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYmxvY2tcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwZWN0ZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgbWVzc2FnZSA9IGV4cGVjdGVkO1xuICAgIGV4cGVjdGVkID0gbnVsbDtcbiAgfVxuXG4gIGFjdHVhbCA9IF90cnlCbG9jayhibG9jayk7XG5cbiAgbWVzc2FnZSA9IChleHBlY3RlZCAmJiBleHBlY3RlZC5uYW1lID8gJyAoJyArIGV4cGVjdGVkLm5hbWUgKyAnKS4nIDogJy4nKSArXG4gICAgICAgICAgICAobWVzc2FnZSA/ICcgJyArIG1lc3NhZ2UgOiAnLicpO1xuXG4gIGlmIChzaG91bGRUaHJvdyAmJiAhYWN0dWFsKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnTWlzc2luZyBleHBlY3RlZCBleGNlcHRpb24nICsgbWVzc2FnZSk7XG4gIH1cblxuICB2YXIgdXNlclByb3ZpZGVkTWVzc2FnZSA9IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJztcbiAgdmFyIGlzVW53YW50ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgdXRpbC5pc0Vycm9yKGFjdHVhbCk7XG4gIHZhciBpc1VuZXhwZWN0ZWRFeGNlcHRpb24gPSAhc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmICFleHBlY3RlZDtcblxuICBpZiAoKGlzVW53YW50ZWRFeGNlcHRpb24gJiZcbiAgICAgIHVzZXJQcm92aWRlZE1lc3NhZ2UgJiZcbiAgICAgIGV4cGVjdGVkRXhjZXB0aW9uKGFjdHVhbCwgZXhwZWN0ZWQpKSB8fFxuICAgICAgaXNVbmV4cGVjdGVkRXhjZXB0aW9uKSB7XG4gICAgZmFpbChhY3R1YWwsIGV4cGVjdGVkLCAnR290IHVud2FudGVkIGV4Y2VwdGlvbicgKyBtZXNzYWdlKTtcbiAgfVxuXG4gIGlmICgoc2hvdWxkVGhyb3cgJiYgYWN0dWFsICYmIGV4cGVjdGVkICYmXG4gICAgICAhZXhwZWN0ZWRFeGNlcHRpb24oYWN0dWFsLCBleHBlY3RlZCkpIHx8ICghc2hvdWxkVGhyb3cgJiYgYWN0dWFsKSkge1xuICAgIHRocm93IGFjdHVhbDtcbiAgfVxufVxuXG4vLyAxMS4gRXhwZWN0ZWQgdG8gdGhyb3cgYW4gZXJyb3I6XG4vLyBhc3NlcnQudGhyb3dzKGJsb2NrLCBFcnJvcl9vcHQsIG1lc3NhZ2Vfb3B0KTtcblxuYXNzZXJ0LnRocm93cyA9IGZ1bmN0aW9uKGJsb2NrLCAvKm9wdGlvbmFsKi9lcnJvciwgLypvcHRpb25hbCovbWVzc2FnZSkge1xuICBfdGhyb3dzKHRydWUsIGJsb2NrLCBlcnJvciwgbWVzc2FnZSk7XG59O1xuXG4vLyBFWFRFTlNJT04hIFRoaXMgaXMgYW5ub3lpbmcgdG8gd3JpdGUgb3V0c2lkZSB0aGlzIG1vZHVsZS5cbmFzc2VydC5kb2VzTm90VGhyb3cgPSBmdW5jdGlvbihibG9jaywgLypvcHRpb25hbCovZXJyb3IsIC8qb3B0aW9uYWwqL21lc3NhZ2UpIHtcbiAgX3Rocm93cyhmYWxzZSwgYmxvY2ssIGVycm9yLCBtZXNzYWdlKTtcbn07XG5cbmFzc2VydC5pZkVycm9yID0gZnVuY3Rpb24oZXJyKSB7IGlmIChlcnIpIHRocm93IGVycjsgfTtcblxuLy8gRXhwb3NlIGEgc3RyaWN0IG9ubHkgdmFyaWFudCBvZiBhc3NlcnRcbmZ1bmN0aW9uIHN0cmljdCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSBmYWlsKHZhbHVlLCB0cnVlLCBtZXNzYWdlLCAnPT0nLCBzdHJpY3QpO1xufVxuYXNzZXJ0LnN0cmljdCA9IG9iamVjdEFzc2lnbihzdHJpY3QsIGFzc2VydCwge1xuICBlcXVhbDogYXNzZXJ0LnN0cmljdEVxdWFsLFxuICBkZWVwRXF1YWw6IGFzc2VydC5kZWVwU3RyaWN0RXF1YWwsXG4gIG5vdEVxdWFsOiBhc3NlcnQubm90U3RyaWN0RXF1YWwsXG4gIG5vdERlZXBFcXVhbDogYXNzZXJ0Lm5vdERlZXBTdHJpY3RFcXVhbFxufSk7XG5hc3NlcnQuc3RyaWN0LnN0cmljdCA9IGFzc2VydC5zdHJpY3Q7XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xuY29uc3QgZGVjb2RlQ29tcG9uZW50ID0gcmVxdWlyZSgnZGVjb2RlLXVyaS1jb21wb25lbnQnKTtcbmNvbnN0IHNwbGl0T25GaXJzdCA9IHJlcXVpcmUoJ3NwbGl0LW9uLWZpcnN0Jyk7XG5cbmNvbnN0IGlzTnVsbE9yVW5kZWZpbmVkID0gdmFsdWUgPT4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpIHtcblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBpbmRleCA9IHJlc3VsdC5sZW5ndGg7XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1snLCBpbmRleCwgJ10nXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdC4uLnJlc3VsdCxcblx0XHRcdFx0XHRbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgZW5jb2RlKGluZGV4LCBvcHRpb25zKSwgJ109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJylcblx0XHRcdFx0XTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1tdJ10uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1tdPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdjb21tYSc6XG5cdFx0Y2FzZSAnc2VwYXJhdG9yJzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFtbZW5jb2RlKGtleSwgb3B0aW9ucyksICc9JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtbcmVzdWx0LCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpXTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgZW5jb2RlKGtleSwgb3B0aW9ucyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJz0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpIHtcblx0bGV0IHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdGlvbnMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFt2YWx1ZV07XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnY29tbWEnOlxuXHRcdGNhc2UgJ3NlcGFyYXRvcic6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlzQXJyYXkgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnNwbGl0KCcnKS5pbmRleE9mKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpID4gLTE7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gaXNBcnJheSA/IHZhbHVlLnNwbGl0KG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpLm1hcChpdGVtID0+IGRlY29kZShpdGVtLCBvcHRpb25zKSkgOiB2YWx1ZSA9PT0gbnVsbCA/IHZhbHVlIDogZGVjb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IG5ld1ZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3IodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUubGVuZ3RoICE9PSAxKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYXJyYXlGb3JtYXRTZXBhcmF0b3IgbXVzdCBiZSBzaW5nbGUgY2hhcmFjdGVyIHN0cmluZycpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmRlY29kZSkge1xuXHRcdHJldHVybiBkZWNvZGVDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSlcblx0XHRcdC5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYikpXG5cdFx0XHQubWFwKGtleSA9PiBpbnB1dFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFzaChpbnB1dCkge1xuXHRjb25zdCBoYXNoU3RhcnQgPSBpbnB1dC5pbmRleE9mKCcjJyk7XG5cdGlmIChoYXNoU3RhcnQgIT09IC0xKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgwLCBoYXNoU3RhcnQpO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXRIYXNoKHVybCkge1xuXHRsZXQgaGFzaCA9ICcnO1xuXHRjb25zdCBoYXNoU3RhcnQgPSB1cmwuaW5kZXhPZignIycpO1xuXHRpZiAoaGFzaFN0YXJ0ICE9PSAtMSkge1xuXHRcdGhhc2ggPSB1cmwuc2xpY2UoaGFzaFN0YXJ0KTtcblx0fVxuXG5cdHJldHVybiBoYXNoO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KGlucHV0KSB7XG5cdGlucHV0ID0gcmVtb3ZlSGFzaChpbnB1dCk7XG5cdGNvbnN0IHF1ZXJ5U3RhcnQgPSBpbnB1dC5pbmRleE9mKCc/Jyk7XG5cdGlmIChxdWVyeVN0YXJ0ID09PSAtMSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBpbnB1dC5zbGljZShxdWVyeVN0YXJ0ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMucGFyc2VOdW1iZXJzICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSkgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJykpIHtcblx0XHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5wYXJzZUJvb2xlYW5zICYmIHZhbHVlICE9PSBudWxsICYmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScgfHwgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJykpIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2UoaW5wdXQsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGRlY29kZTogdHJ1ZSxcblx0XHRzb3J0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJyxcblx0XHRwYXJzZU51bWJlcnM6IGZhbHNlLFxuXHRcdHBhcnNlQm9vbGVhbnM6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3Iob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHRjb25zdCByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGlucHV0ID0gaW5wdXQudHJpbSgpLnJlcGxhY2UoL15bPyMmXS8sICcnKTtcblxuXHRpZiAoIWlucHV0KSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGZvciAoY29uc3QgcGFyYW0gb2YgaW5wdXQuc3BsaXQoJyYnKSkge1xuXHRcdGxldCBba2V5LCB2YWx1ZV0gPSBzcGxpdE9uRmlyc3Qob3B0aW9ucy5kZWNvZGUgPyBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKSA6IHBhcmFtLCAnPScpO1xuXG5cdFx0Ly8gTWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG9wdGlvbnMuYXJyYXlGb3JtYXQgPT09ICdjb21tYScgPyB2YWx1ZSA6IGRlY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0Zm9ybWF0dGVyKGRlY29kZShrZXksIG9wdGlvbnMpLCB2YWx1ZSwgcmV0KTtcblx0fVxuXG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJldCkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG5cdFx0XHRcdHZhbHVlW2tdID0gcGFyc2VWYWx1ZSh2YWx1ZVtrXSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldFtrZXldID0gcGFyc2VWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0cmV0dXJuIChvcHRpb25zLnNvcnQgPT09IHRydWUgPyBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKSA6IE9iamVjdC5rZXlzKHJldCkuc29ydChvcHRpb25zLnNvcnQpKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gKG9iamVjdCwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIW9iamVjdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJ1xuXHR9LCBvcHRpb25zKTtcblxuXHR2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXG5cdGNvbnN0IHNob3VsZEZpbHRlciA9IGtleSA9PiAoXG5cdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0W2tleV0pKSB8fFxuXHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiBvYmplY3Rba2V5XSA9PT0gJycpXG5cdCk7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdGNvbnN0IG9iamVjdENvcHkgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0aWYgKCFzaG91bGRGaWx0ZXIoa2V5KSkge1xuXHRcdFx0b2JqZWN0Q29weVtrZXldID0gb2JqZWN0W2tleV07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdENvcHkpO1xuXG5cdGlmIChvcHRpb25zLnNvcnQgIT09IGZhbHNlKSB7XG5cdFx0a2V5cy5zb3J0KG9wdGlvbnMuc29ydCk7XG5cdH1cblxuXHRyZXR1cm4ga2V5cy5tYXAoa2V5ID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHQucmVkdWNlKGZvcm1hdHRlcihrZXkpLCBbXSlcblx0XHRcdFx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucykgKyAnPScgKyBlbmNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHR9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydHMucGFyc2VVcmwgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcblx0cmV0dXJuIHtcblx0XHR1cmw6IHJlbW92ZUhhc2goaW5wdXQpLnNwbGl0KCc/JylbMF0gfHwgJycsXG5cdFx0cXVlcnk6IHBhcnNlKGV4dHJhY3QoaW5wdXQpLCBvcHRpb25zKVxuXHR9O1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnlVcmwgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcblx0Y29uc3QgdXJsID0gcmVtb3ZlSGFzaChpbnB1dC51cmwpLnNwbGl0KCc/JylbMF0gfHwgJyc7XG5cdGNvbnN0IHF1ZXJ5RnJvbVVybCA9IGV4cG9ydHMuZXh0cmFjdChpbnB1dC51cmwpO1xuXHRjb25zdCBwYXJzZWRRdWVyeUZyb21VcmwgPSBleHBvcnRzLnBhcnNlKHF1ZXJ5RnJvbVVybCk7XG5cdGNvbnN0IGhhc2ggPSBnZXRIYXNoKGlucHV0LnVybCk7XG5cdGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbihwYXJzZWRRdWVyeUZyb21VcmwsIGlucHV0LnF1ZXJ5KTtcblx0bGV0IHF1ZXJ5U3RyaW5nID0gZXhwb3J0cy5zdHJpbmdpZnkocXVlcnksIG9wdGlvbnMpO1xuXHRpZiAocXVlcnlTdHJpbmcpIHtcblx0XHRxdWVyeVN0cmluZyA9IGA/JHtxdWVyeVN0cmluZ31gO1xuXHR9XG5cblx0cmV0dXJuIGAke3VybH0ke3F1ZXJ5U3RyaW5nfSR7aGFzaH1gO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoc3RyaW5nLCBzZXBhcmF0b3IpID0+IHtcblx0aWYgKCEodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIGFyZ3VtZW50cyB0byBiZSBvZiB0eXBlIGBzdHJpbmdgJyk7XG5cdH1cblxuXHRpZiAoc2VwYXJhdG9yID09PSAnJykge1xuXHRcdHJldHVybiBbc3RyaW5nXTtcblx0fVxuXG5cdGNvbnN0IHNlcGFyYXRvckluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc2VwYXJhdG9yKTtcblxuXHRpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuIFtzdHJpbmddO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRzdHJpbmcuc2xpY2UoMCwgc2VwYXJhdG9ySW5kZXgpLFxuXHRcdHN0cmluZy5zbGljZShzZXBhcmF0b3JJbmRleCArIHNlcGFyYXRvci5sZW5ndGgpXG5cdF07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCB4ID0+IGAlJHt4LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlc2NyaXB0b3JzW2tleXNbaV1dID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH07XG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxudmFyIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sKCd1dGlsLnByb21pc2lmeS5jdXN0b20nKSA6IHVuZGVmaW5lZDtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJvcmlnaW5hbFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuXG4gIGlmIChrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wgJiYgb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXSkge1xuICAgIHZhciBmbiA9IG9yaWdpbmFsW2tDdXN0b21Qcm9taXNpZmllZFN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwidXRpbC5wcm9taXNpZnkuY3VzdG9tXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sLCB7XG4gICAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZuKCkge1xuICAgIHZhciBwcm9taXNlUmVzb2x2ZSwgcHJvbWlzZVJlamVjdDtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2VSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHByb21pc2VSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIsIHZhbHVlKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHByb21pc2VSZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihmbiwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICB2YWx1ZTogZm4sIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIGZuLFxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpXG4gICk7XG59XG5cbmV4cG9ydHMucHJvbWlzaWZ5LmN1c3RvbSA9IGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbFxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeU9uUmVqZWN0ZWQocmVhc29uLCBjYikge1xuICAvLyBgIXJlYXNvbmAgZ3VhcmQgaW5zcGlyZWQgYnkgYmx1ZWJpcmQgKFJlZjogaHR0cHM6Ly9nb28uZ2wvdDVJUzZNKS5cbiAgLy8gQmVjYXVzZSBgbnVsbGAgaXMgYSBzcGVjaWFsIGVycm9yIHZhbHVlIGluIGNhbGxiYWNrcyB3aGljaCBtZWFucyBcIm5vIGVycm9yXG4gIC8vIG9jY3VycmVkXCIsIHdlIGVycm9yLXdyYXAgc28gdGhlIGNhbGxiYWNrIGNvbnN1bWVyIGNhbiBkaXN0aW5ndWlzaCBiZXR3ZWVuXG4gIC8vIFwidGhlIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBudWxsXCIgb3IgXCJ0aGUgcHJvbWlzZSBmdWxmaWxsZWQgd2l0aCB1bmRlZmluZWRcIi5cbiAgaWYgKCFyZWFzb24pIHtcbiAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKCdQcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgZmFsc3kgdmFsdWUnKTtcbiAgICBuZXdSZWFzb24ucmVhc29uID0gcmVhc29uO1xuICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgfVxuICByZXR1cm4gY2IocmVhc29uKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tpZnkob3JpZ2luYWwpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG4gIH1cblxuICAvLyBXZSBETyBOT1QgcmV0dXJuIHRoZSBwcm9taXNlIGFzIGl0IGdpdmVzIHRoZSB1c2VyIGEgZmFsc2Ugc2Vuc2UgdGhhdFxuICAvLyB0aGUgcHJvbWlzZSBpcyBhY3R1YWxseSBzb21laG93IHJlbGF0ZWQgdG8gdGhlIGNhbGxiYWNrJ3MgZXhlY3V0aW9uXG4gIC8vIGFuZCB0aGF0IHRoZSBjYWxsYmFjayB0aHJvd2luZyB3aWxsIHJlamVjdCB0aGUgcHJvbWlzZS5cbiAgZnVuY3Rpb24gY2FsbGJhY2tpZmllZCgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVDYiA9IGFyZ3MucG9wKCk7XG4gICAgaWYgKHR5cGVvZiBtYXliZUNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGFzdCBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG1heWJlQ2IuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIEluIHRydWUgbm9kZSBzdHlsZSB3ZSBwcm9jZXNzIHRoZSBjYWxsYmFjayBvbiBgbmV4dFRpY2tgIHdpdGggYWxsIHRoZVxuICAgIC8vIGltcGxpY2F0aW9ucyAoc3RhY2ssIGB1bmNhdWdodEV4Y2VwdGlvbmAsIGBhc3luY19ob29rc2ApXG4gICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJldCkgeyBwcm9jZXNzLm5leHRUaWNrKGNiLCBudWxsLCByZXQpIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihyZWopIHsgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFja2lmeU9uUmVqZWN0ZWQsIHJlaiwgY2IpIH0pO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNhbGxiYWNraWZpZWQsIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcmlnaW5hbCkpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjYWxsYmFja2lmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9yaWdpbmFsKSk7XG4gIHJldHVybiBjYWxsYmFja2lmaWVkO1xufVxuZXhwb3J0cy5jYWxsYmFja2lmeSA9IGNhbGxiYWNraWZ5O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25QYW5lbCBleHRlbmRzIHNmLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNzZiwgbm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gQWN0aW9uUGFuZWwuc3BpcmFsRnJhbWV3b3JrTmFtZTtcclxuICAgICAgICB0aGlzLm9wdGlvbnNUb0dyYWIgPSB7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogQWN0aW9uUGFuZWwuZGVmYXVsdE9wdGlvbnMuaWQsXHJcbiAgICAgICAgICAgICAgICBkb21BdHRyOiAnaWQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogQWN0aW9uUGFuZWwuZGVmYXVsdE9wdGlvbnMuc2VsZWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLXNlbGVjdGlvbi10eXBlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogQWN0aW9uUGFuZWwuZGVmYXVsdE9wdGlvbnMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgZG9tQXR0cjogJ2RhdGEtY2xhc3MnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgQWN0aW9uUGFuZWwuZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGhhc1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEtleXM6IG5ldyBTZXQoKSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uVHlwZTogdGhpcy5vcHRpb25zLnNlbGVjdGlvblR5cGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluaXQoc3NmLCBub2RlLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIEFjdGlvblBhbmVsLmRlZmF1bHRPcHRpb25zKSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsT3B0aW9uc0VsID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbcm9sZT1cInNmLW9wdGlvbnNcIl0nKTtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbE9wdGlvbnNFbCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbmUgPSBGdW5jdGlvbihgXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuICR7YWRkaXRpb25hbE9wdGlvbnNFbC5pbm5lckhUTUwudHJpbSgpfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGVzID0gb25lKCkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3ZlcnJpZGVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG92ZXJyaWRlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBwYXJzZSBvcHRpb25zIGluc2lkZSBzY3JpcHQsIGVuc3VyZSBzY3JpcHQgaW5zaWRlIGlzIGFuIGFub255bW91cyBmdW5jdGlvbiByZXR1cm5pbmcgSURhdGFHcmlkT3B0aW9ucyBvYmplY3QnKTtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHJlY29uZmlndXJlKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGhhc1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEtleXM6IG5ldyBTZXQoKSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uVHlwZTogdGhpcy5vcHRpb25zLnNlbGVjdGlvblR5cGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNmLnJlbW92ZUluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSB0cnkgdG8gcmVtb3ZlIFxcJ2xvY2tcXCcgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBzdGFydGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9jaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLnNmLmFkZEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlLCB7IHR5cGU6IHRoaXMub3B0aW9ucy5sb2NrVHlwZSB9KTtcclxuICAgICAgICBpZiAoIWxvY2spIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIGFkZCBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBhbHJlYWR5IHN0YXJ0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRTZWxlY3Rpb24oc2VsZWN0ZWRLZXlzLCBzZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSksIHsgc2VsZWN0ZWRLZXlzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLCBzZWxlY3RlZENvdW50OiBzZWxlY3RlZEtleXMuc2l6ZSwgaGFzU2VsZWN0aW9uOiAhIXNlbGVjdGVkS2V5cy5zaXplIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJBcyhlbCwgZGVmaW5pdGlvbikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGRlZmluaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkID0gZGVmaW5pdGlvbih0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZW5kZXJlZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gcmVuZGVyZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChyZW5kZXJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRlZmluaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlckFjdGlvbihhY3Rpb25JZCwgYWN0aW9uLCBvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5hY3Rpb25DbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFjdGlvbkNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IG9wdGlvbnMuYWN0aW9uQ2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmFjdGlvbkNsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gb3B0aW9ucy5hY3Rpb25DbGFzc05hbWUoYWN0aW9uSWQsIHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gb3B0aW9ucy5hY3Rpb25DbGFzc05hbWVbYWN0aW9uSWRdIHx8ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3Rpb24uY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aW9uLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uYWN0aW9uLmNsYXNzTmFtZS5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uYWN0aW9uLmNsYXNzTmFtZSh0aGlzLnN0YXRlKS5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBhY3Rpb24ub25DbGljayh0aGlzLnN0YXRlLCB0aGlzLCBlKSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJBcyhlbCwgYWN0aW9uLnJlbmRlckFzKTtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJzsgLy8gVE9ETzogZG9udCByZXJlbmRlclxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWw7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5vcHRpb25zLmNsYXNzTmFtZS5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4udGhpcy5vcHRpb25zLmNsYXNzTmFtZSh0aGlzLnN0YXRlKS5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vU2VsZWN0aW9uICYmICF0aGlzLnN0YXRlLmhhc1NlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5ub1NlbGVjdGlvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5ub1NlbGVjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKHRoaXMub3B0aW9ucy5ub1NlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGlvbkxhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQXMoZWwsIHRoaXMub3B0aW9ucy5zZWxlY3Rpb25MYWJlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5hY3Rpb25zKS5mb3JFYWNoKChhY3Rpb25JZCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckFjdGlvbihhY3Rpb25JZCwgdGhpcy5vcHRpb25zLmFjdGlvbnNbYWN0aW9uSWRdLCB0aGlzLm9wdGlvbnMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5BY3Rpb25QYW5lbC5zcGlyYWxGcmFtZXdvcmtOYW1lID0gJ2RhdGFncmlkLWFjdGlvbnMnO1xyXG5BY3Rpb25QYW5lbC5kZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGlkOiAnJyxcclxuICAgIGxvY2tUeXBlOiAnbm9uZScsXHJcbiAgICBhY3Rpb25DbGFzc05hbWU6ICdidG4nLFxyXG4gICAgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZS5TSU5HTEUsXHJcbiAgICBjbGFzc05hbWU6ICdyb3cgbm8tZ3V0dGVycyBhbGlnbi1pdGVtcy1jZW50ZXInLFxyXG4gICAgYWN0aW9uczoge30sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvblBhbmVsO1xyXG4iLCJleHBvcnQgdmFyIFNvcnREaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoU29ydERpcmVjdGlvbikge1xyXG4gICAgU29ydERpcmVjdGlvbltcIkFTQ1wiXSA9IFwiYXNjXCI7XHJcbiAgICBTb3J0RGlyZWN0aW9uW1wiREVTQ1wiXSA9IFwiZGVzY1wiO1xyXG59KShTb3J0RGlyZWN0aW9uIHx8IChTb3J0RGlyZWN0aW9uID0ge30pKTtcclxuZXhwb3J0IHZhciBTZWxlY3Rpb25UeXBlO1xyXG4oZnVuY3Rpb24gKFNlbGVjdGlvblR5cGUpIHtcclxuICAgIFNlbGVjdGlvblR5cGVbXCJTSU5HTEVcIl0gPSBcInNpbmdsZVwiO1xyXG4gICAgU2VsZWN0aW9uVHlwZVtcIk1VTFRJUExFXCJdID0gXCJtdWx0aXBsZVwiO1xyXG59KShTZWxlY3Rpb25UeXBlIHx8IChTZWxlY3Rpb25UeXBlID0ge30pKTtcclxuZXhwb3J0IHZhciBSZXF1ZXN0TWV0aG9kO1xyXG4oZnVuY3Rpb24gKFJlcXVlc3RNZXRob2QpIHtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJHRVRcIl0gPSBcIkdFVFwiO1xyXG4gICAgUmVxdWVzdE1ldGhvZFtcIlBPU1RcIl0gPSBcIlBPU1RcIjtcclxuICAgIFJlcXVlc3RNZXRob2RbXCJERUxFVEVcIl0gPSBcIkRFTEVURVwiO1xyXG4gICAgUmVxdWVzdE1ldGhvZFtcIlBVVFwiXSA9IFwiUFVUXCI7XHJcbiAgICBSZXF1ZXN0TWV0aG9kW1wiUEFUQ0hcIl0gPSBcIlBBVENIXCI7XHJcbn0pKFJlcXVlc3RNZXRob2QgfHwgKFJlcXVlc3RNZXRob2QgPSB7fSkpO1xyXG5leHBvcnQgY29uc3QgUEFHSU5BVE9SX0NMQVNTX05BTUUgPSAnc2YtanMtZGF0YWdyaWQtcGFnaW5hdG9yJztcclxuZXhwb3J0IGNvbnN0IEFDVElPTl9QQU5FTF9DTEFTU19OQU1FID0gJ3NmLWpzLWRhdGFncmlkLWFjdGlvbnBhbmVsJztcclxuZXhwb3J0IGNvbnN0IENVUlNPUl9JRF9GSUVMRCA9ICdjaWQnO1xyXG5leHBvcnQgY29uc3QgTEFTVF9JRF9GSUVMRCA9ICdsaWQnO1xyXG5leHBvcnQgY29uc3QgcGFnZVBhcmFtcyA9IFsncGFnZScsICdsaW1pdCcsIENVUlNPUl9JRF9GSUVMRCwgTEFTVF9JRF9GSUVMRF07XHJcbmV4cG9ydCBjb25zdCBzb3J0UGFyYW1zID0gWydzb3J0QnknLCAnc29ydERpciddO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MSU1JVCA9IDI1O1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEdyaWRNZXNzYWdlcyA9IHtcclxuICAgIG5vRGF0YTogXCJObyBEYXRhXCIsXHJcbiAgICBub1Jlc3VsdHM6IFwiTm8gZGF0YSBtYXRjaGVzIHlvdXIgc2VhcmNoIGNyaXRlcmlhXCIsXHJcbiAgICBlcnJvcjogXCJVbmtub3duIGVycm9yXCJcclxufTtcclxuZXhwb3J0IHZhciBQYWdpbmF0b3JUeXBlO1xyXG4oZnVuY3Rpb24gKFBhZ2luYXRvclR5cGUpIHtcclxuICAgIFBhZ2luYXRvclR5cGVbXCJwYWdlc1wiXSA9IFwicGFnZXNcIjtcclxuICAgIFBhZ2luYXRvclR5cGVbXCJpbmZpbml0ZVwiXSA9IFwiaW5maW5pdGVcIjtcclxufSkoUGFnaW5hdG9yVHlwZSB8fCAoUGFnaW5hdG9yVHlwZSA9IHt9KSk7XHJcbmV4cG9ydCBjb25zdCBEQVRBR1JJRF9DSEVDS19TRUxFQ1RfQVRUUiA9ICdkYXRhLWRhdGFncmlkLXNlbGVjdCc7XHJcbmV4cG9ydCBjb25zdCBEQVRBR1JJRF9DSEVDS19TRUxFQ1RfQUxMX0FUVFIgPSAnZGF0YS1kYXRhZ3JpZC1zZWxlY3QtYWxsJztcclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuaW1wb3J0ICogYXMgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XHJcbmltcG9ydCB7IHBhcnNlLCBzdHJpbmdpZnlVcmwgfSBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgQWN0aW9uUGFuZWwgZnJvbSAnLi4vYWN0aW9ucGFuZWwvQWN0aW9uUGFuZWwnO1xyXG5pbXBvcnQgeyBERUZBVUxUX0xJTUlULCBwYWdlUGFyYW1zLCBSZXF1ZXN0TWV0aG9kLCBTZWxlY3Rpb25UeXBlLCBTb3J0RGlyZWN0aW9uLCBzb3J0UGFyYW1zLCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERhdGFncmlkU3RhdGUgfSBmcm9tICcuL0RhdGFncmlkU3RhdGUnO1xyXG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uL3BhZ2luYXRvci9QYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBkZWZhdWx0R3JpZE9wdGlvbnMgfSBmcm9tICcuLi9yZW5kZXIvZGVmYXVsdFJlbmRlcmVyJztcclxuaW1wb3J0IHsgR3JpZFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyL0dyaWRSZW5kZXJlcic7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUNvbHVtbnMgfSBmcm9tICcuLi91dGlscyc7XHJcbi8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuZXhwb3J0IGNsYXNzIERhdGFncmlkIGV4dGVuZHMgc2YuY29yZS5CYXNlRE9NQ29uc3RydWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc3NmLCBub2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBEYXRhZ3JpZC5zcGlyYWxGcmFtZXdvcmtOYW1lO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc1RvR3JhYiA9IHtcclxuICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBEYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucy5pZCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdpZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IERhdGFncmlkLmRlZmF1bHRPcHRpb25zLnVybCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLXVybCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBEYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5ncmlkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgRGF0YWdyaWRTdGF0ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkRm9ybXMgPSB7fTsgLy8gVE9ETzogdHlwZSBhcyBzZi5Gb3JtIGluc3RhbmNlIGFycmF5XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMgPSBbXTsgLy8gVE9ETzogdHlwZSBhcyBzZi5QYWdpbmF0b3IgaW5zdGFuY2UgYXJyYXlcclxuICAgICAgICB0aGlzLmNhcHR1cmVkQWN0aW9uUGFuZWxzID0gW107IC8vIFRPRE86IHR5cGUgYXMgc2YuUGFnaW5hdG9yIGluc3RhbmNlIGFycmF5XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgbGltaXQ6IERFRkFVTFRfTElNSVQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluaXQoc3NmLCBub2RlLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIERhdGFncmlkLmRlZmF1bHRPcHRpb25zKSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsT3B0aW9uc0VsID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbcm9sZT1cInNmLW9wdGlvbnNcIl0nKTtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbE9wdGlvbnNFbCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbmUgPSBGdW5jdGlvbihgXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuICR7YWRkaXRpb25hbE9wdGlvbnNFbC5pbm5lckhUTUwudHJpbSgpfWApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1widXNlIHN0cmljdFwiO3JldHVybiAnICsgYWRkaXRpb25hbE9wdGlvbnNFbC5pbm5lckhUTUwudHJpbSgpICsgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGVzID0gb25lKCkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3ZlcnJpZGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IHBhcnNlIG9wdGlvbnMgaW5zaWRlIHNjcmlwdCwgZW5zdXJlIHNjcmlwdCBpbnNpZGUgaXMgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIHJldHVybmluZyBJRGF0YUdyaWRPcHRpb25zIG9iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3NlcnQubm90RXF1YWwodGhpcy5vcHRpb25zLmlkLCAnJywgJ2lkIHNob3VsZCBiZSBub3QgZW1wdHknKTtcclxuICAgICAgICBhc3NlcnQubm90RXF1YWwodGhpcy5vcHRpb25zLnVybCwgJycsICd1cmwgc2hvdWxkIGJlIG5vdCBlbXB0eScpO1xyXG4gICAgICAgIC8vIFByb2Nlc3Mgb3B0aW9uc1xyXG4gICAgICAgIC8vIFRPRE86IHdlIGNhbiBvdmVycmlkZSBjb2x1bW5zIGFuZCBzb3J0IG9wdGlvbnMgaW5zaWRlIHJlbmRlcmVycyBidXQgaXQgbWlnaHQgcHJvZHVjZSBzaXR1YXRpb24gb2YgdHJpZ2dlcmluZyB1bmV4aXN0aW5nIHNvcnRcclxuICAgICAgICAvLyBUaGluayBhYm91dCB0aGF0LCBvciBpZ25vcmVcclxuICAgICAgICB0aGlzLmNvbHVtbkluZm8gPSBub3JtYWxpemVDb2x1bW5zKHRoaXMub3B0aW9ucy5jb2x1bW5zLCB0aGlzLm9wdGlvbnMuc29ydGFibGUpO1xyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHNvcnQgaWYgcHJlc2VudFxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zb3J0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0cy5zb3J0QnkgPSB0aGlzLm9wdGlvbnMuc29ydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuc29ydERpciA9IFNvcnREaXJlY3Rpb24uQVNDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0cy5zb3J0QnkgPSB0aGlzLm9wdGlvbnMuc29ydC5maWVsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHMuc29ydERpciA9IHRoaXMub3B0aW9ucy5zb3J0LmRpcmVjdGlvbiB8fCBTb3J0RGlyZWN0aW9uLkFTQztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQodGhpcy5kZWZhdWx0cy5zb3J0QnksIHRoaXMuZGVmYXVsdHMuc29ydERpcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyZXJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RnJvbVVybCgpO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZUZvcm1zKCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KCk7XHJcbiAgICB9XHJcbiAgICByZWdpc3RlckZvcm1JbnN0YW5jZShmb3JtSW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoZm9ybUluc3RhbmNlLm9wdGlvbnMgJiYgZm9ybUluc3RhbmNlLm9wdGlvbnMuaWQgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVGb3Jtcy5pbmRleE9mKGZvcm1JbnN0YW5jZS5vcHRpb25zLnVybCkgPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBmb3JtSW5zdGFuY2Uub3B0aW9ucztcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gZm9ybUluc3RhbmNlLmVudW1lcmF0ZUZpZWxkTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zW2lkXSA9IHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBmb3JtSW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHVybERhdGFGb3JGb3JtID0gdGhpcy5zdGF0ZS51cmxEYXRhID8gT2JqZWN0LmtleXModGhpcy5zdGF0ZS51cmxEYXRhKS5maWx0ZXIoKGtleSkgPT4gZmllbGRzLmluZGV4T2Yoa2V5KSA+PSAwKS5yZWR1Y2UoKG1hcCwga2V5KSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXApLCB7IFtrZXldOiB0aGlzLnN0YXRlLnVybERhdGFba2V5XSB9KSksIHt9KSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKHVybERhdGFGb3JGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtSW5zdGFuY2Uuc2V0RmllbGRWYWx1ZXModXJsRGF0YUZvckZvcm0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5qc29uT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBmb3JtSW5zdGFuY2Uub3B0aW9ucy5iZWZvcmVTdWJtaXRDYWxsYmFjayA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFnaW5hdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldEZvcm1EYXRhKGlkLCBvcHRpb25zLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlZEZvcm1zW2lkXS5maWVsZHMgPSBbLi4ubmV3IFNldChbLi4uT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKSwgLi4udGhpcy5jYXB0dXJlZEZvcm1zW2lkXS5maWVsZHNdKV07IC8vIE1lcmdlIG5ldyBmaWVsZHMgaWYgYW55XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWdpc3RlclBhZ2luYXRvckluc3RhbmNlKGZvcm1JbnN0YW5jZSkge1xyXG4gICAgICAgIGlmIChmb3JtSW5zdGFuY2Uub3B0aW9ucyAmJiBmb3JtSW5zdGFuY2Uub3B0aW9ucy5pZCAmJiB0aGlzLm9wdGlvbnMuY2FwdHVyZUZvcm1zLmluZGV4T2YoZm9ybUluc3RhbmNlLm9wdGlvbnMuaWQpID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMucHVzaChmb3JtSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgZm9ybUluc3RhbmNlLm9wdGlvbnMud2lsbEZldGNoQ291bnQgPSB0aGlzLm9wdGlvbnMuZmV0Y2hDb3VudDtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIGZvcm1JbnN0YW5jZS5vcHRpb25zLm9uUGFnZUNoYW5nZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnVwZGF0ZVBhZ2luYXRvcihvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlZ2lzdGVyQWN0aW9uUGFuZWxJbnN0YW5jZShmb3JtSW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAoZm9ybUluc3RhbmNlLm9wdGlvbnNcclxuICAgICAgICAgICAgJiYgZm9ybUluc3RhbmNlLm9wdGlvbnMuaWRcclxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVBY3Rpb25QYW5lbHNcclxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmNhcHR1cmVBY3Rpb25QYW5lbHMuaW5kZXhPZihmb3JtSW5zdGFuY2Uub3B0aW9ucy5pZCkgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVkQWN0aW9uUGFuZWxzLnB1c2goZm9ybUluc3RhbmNlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtSW5zdGFuY2UucmVjb25maWd1cmUoeyBzZWxlY3Rpb25UeXBlOiB0aGlzLm9wdGlvbnMuc2VsZWN0YWJsZS50eXBlIH0pO1xyXG4gICAgICAgICAgICAgICAgZm9ybUluc3RhbmNlLnNldFNlbGVjdGlvbih0aGlzLnN0YXRlLnNlbGVjdGlvbiwgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhcHR1cmVGb3JtcygpIHtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IHRoaXMuc2YuZ2V0SW5zdGFuY2VzKCdmb3JtJykgfHwgW107XHJcbiAgICAgICAgZm9ybXMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybUluc3RhbmNlKGYuaW5zdGFuY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhZ2luYXRvcnMgPSB0aGlzLnNmLmdldEluc3RhbmNlcyhQYWdpbmF0b3Iuc3BpcmFsRnJhbWV3b3JrTmFtZSkgfHwgW107XHJcbiAgICAgICAgcGFnaW5hdG9ycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYWdpbmF0b3JJbnN0YW5jZShmLmluc3RhbmNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBhY3Rpb25QYW5lbHMgPSB0aGlzLnNmLmdldEluc3RhbmNlcyhBY3Rpb25QYW5lbC5zcGlyYWxGcmFtZXdvcmtOYW1lKSB8fCBbXTtcclxuICAgICAgICBhY3Rpb25QYW5lbHMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWN0aW9uUGFuZWxJbnN0YW5jZShmLmluc3RhbmNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNmLmluc3RhbmNlc0NvbnRyb2xsZXIuZXZlbnRzLm9uKCdvbkFkZEluc3RhbmNlJywgKHsgaW5zdGFuY2UsIHR5cGUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Zvcm0nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gUGFnaW5hdG9yLnNwaXJhbEZyYW1ld29ya05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYWdpbmF0b3JJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IEFjdGlvblBhbmVsLnNwaXJhbEZyYW1ld29ya05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBY3Rpb25QYW5lbEluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHNvcnQgZm9yIHRoaXMgZmllbGQgaWYgbm90IHlldCwgb3IgY2hhbmdlcyBkaXJlY3Rpb24gaWYgYWxyZWFkeSBzYW1lXHJcbiAgICAgKiBAcGFyYW0gZmllbGRJZFxyXG4gICAgICovXHJcbiAgICB0cmlnZ2VyU29ydChmaWVsZElkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc29ydEJ5ID09PSBmaWVsZElkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uQVNDKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNldFNvcnQoZmllbGRJZCwgU29ydERpcmVjdGlvbi5ERVNDKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U29ydChmaWVsZElkLCBTb3J0RGlyZWN0aW9uLkFTQyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5jb2x1bW5JbmZvLmZpbmQoKGNJKSA9PiBjSS5pZCA9PT0gZmllbGRJZCk7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXRTb3J0KGZpZWxkLmlkLCBmaWVsZC5kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUcnlpbmcgdG8gc29ydCBieSB1bnNvcnRhYmxlIGZpZWxkICR7ZmllbGRJZH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0UGFnaW5hdG9yKCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0KCk7XHJcbiAgICB9XHJcbiAgICBzZXRBbGxQYWdpbmF0b3JzKHApIHtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkUGFnaW5hdG9ycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmLnNldFBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgZi5zZXRQYXJhbXMocCwgdGhpcy51c2VQcmVmaXgoKSA/IHRoaXMuZ2V0UHJlZml4KCkgOiB0aGlzLm9wdGlvbnMuc2VyaWFsaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzZXRQYWdpbmF0b3IoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogZGVwZW5kaW5nIG9uIHBhZ2luYXRvciB0eXBlIHBlcmZvcm0gZGlmZmVyZW50IHJlc2V0IHR5cGVcclxuICAgICAgICB0aGlzLnN0YXRlLnJlc2V0RmV0Y2hDb3VudCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXBkYXRlUGFnaW5hdG9yKHsgcGFnZTogMSB9KTtcclxuICAgICAgICB0aGlzLnNldEFsbFBhZ2luYXRvcnModGhpcy5zdGF0ZS5wYWdpbmF0ZSk7XHJcbiAgICB9XHJcbiAgICBmb3JtUmVxdWVzdCgpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBmZXRjaENvdW50OiB0aGlzLnN0YXRlLm5lZWRGZXRjaENvdW50LFxyXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuc3RhdGUuZ2V0RmlsdGVyKCksXHJcbiAgICAgICAgICAgIHBhZ2luYXRlOiB0aGlzLnN0YXRlLnBhZ2luYXRlLFxyXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnN0YXRlLnNvcnRCeSA/IHsgW3RoaXMuc3RhdGUuc29ydEJ5XTogdGhpcy5zdGF0ZS5zb3J0RGlyIH0gOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZi5yZW1vdmVJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIHJlbW92ZSBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBub3Qgc3RhcnRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNhcHR1cmVkRm9ybXMpLmZvckVhY2goKGZLZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuY2FwdHVyZWRGb3Jtc1tmS2V5XS5pbnN0YW5jZTtcclxuICAgICAgICAgICAgaWYgKGYudW5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLnVubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi51bmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYudW5sb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9ja1R5cGUgfHwgdGhpcy5vcHRpb25zLmxvY2tUeXBlID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5zZi5hZGRJbnN0YW5jZSgnbG9jaycsIHRoaXMubm9kZSwgeyB0eXBlOiB0aGlzLm9wdGlvbnMubG9ja1R5cGUgfSk7XHJcbiAgICAgICAgaWYgKCFsb2NrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignWW91IHRyeSB0byBhZGQgXFwnbG9ja1xcJyBpbnN0YW5jZSwgYnV0IGl0IGlzIG5vdCBhdmFpbGFibGUgb3IgYWxyZWFkeSBzdGFydGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jYXB0dXJlZEZvcm1zKS5mb3JFYWNoKChmS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmNhcHR1cmVkRm9ybXNbZktleV0uaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIGlmIChmLmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGYubG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlZFBhZ2luYXRvcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZi5sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICBmLmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VjY2Vzcyh7IGRhdGEgfSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2V0U3VjY2VzcyhkYXRhLmRhdGEsIGRhdGEucGFnaW5hdGlvbik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnBhZ2luYXRpb24uY291bnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25Db3VudEZldGNoZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLnNldEFsbFBhZ2luYXRvcnMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnBhZ2luYXRlKSwgeyBlcnJvcjogZmFsc2UgfSkpO1xyXG4gICAgfVxyXG4gICAgYmVmb3JlU3VibWl0KCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2FwdHVyZWRGb3JtcykuZm9yRWFjaCgoZktleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5jYXB0dXJlZEZvcm1zW2ZLZXldLmluc3RhbmNlO1xyXG4gICAgICAgICAgICBpZiAoZi5yZW1vdmVNZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgZi5yZW1vdmVNZXNzYWdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFcnJvcih7IGRhdGEsIHN0YXR1cywgc3RhdHVzVGV4dCB9KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXRFcnJvcihkYXRhLmVycm9yLCBkYXRhLmVycm9ycywgdGhpcy5vcHRpb25zLnJlc2V0T25FcnJvcik7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jYXB0dXJlZEZvcm1zKS5mb3JFYWNoKChmS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSB0aGlzLmNhcHR1cmVkRm9ybXNbZktleV0uaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIGlmIChmLnByb2Nlc3NBbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZi5vcHRpb25zLnVybDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGRhdGEsIHJlc3QgPSBfX3Jlc3QoZGF0YSwgW1wiZXJyb3JcIl0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gaWQgPT09IHRoaXMub3B0aW9ucy5lcnJvck1lc3NhZ2VUYXJnZXQgPyBPYmplY3QuYXNzaWduKHt9LCBkYXRhKSA6IHJlc3Q7XHJcbiAgICAgICAgICAgICAgICBmLnByb2Nlc3NBbnN3ZXIoeyBkYXRhOiBmaWx0ZXJlZERhdGEsIHN0YXR1cywgc3RhdHVzVGV4dCB9LCBmYWxzZSk7IC8vIGZhbHNlIHN0YW5kcyBmb3IgJ2RvbnQgZGlzcGxheSBlcnJvcnMgdW5yZWxhdGVkIHRvIGZvcm0gaW5wdXRzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbGxQYWdpbmF0b3JzKHsgZXJyb3I6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgZGF0YSBhbmQgZGlzcGxheSBlcnJvclxyXG4gICAgICAgIC8vIFRPRE86IHNlbmQgdmFsaWRhdGlvbiBlcnJvcnMgdG8gb3RoZXIgZm9ybXNcclxuICAgIH1cclxuICAgIHJlcXVlc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NhbnQgc3RhcnQgbmV3IHJlcXVlc3QnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0TG9hZGluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZVN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2soKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVVcmwoKTtcclxuICAgICAgICAgICAgY29uc3QgaXNHZXQgPSB0aGlzLm9wdGlvbnMubWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdFVDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZm9ybVJlcXVlc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuc2YuYWpheC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIHVybDogaXNHZXQgPyBzdHJpbmdpZnlVcmwoeyB1cmw6IHRoaXMub3B0aW9ucy51cmwsIHF1ZXJ5OiBkYXRhIH0pIDogdGhpcy5vcHRpb25zLnVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5vcHRpb25zLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMub3B0aW9ucy5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaXNHZXQgPyB1bmRlZmluZWQgOiBkYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgcmVxdWVzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VjY2VzcyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmlzU0ZBamF4RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVycm9yOiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IGUudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0b3BMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVJlbmRlcmVycygpIHtcclxuICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKHRoaXMuZ3JpZHMsIFtdLCAnR3JpZHMgYXJlIGFscmVhZHkgaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICBjb25zdCByZW5kZXJMaXN0ID0gQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMucmVuZGVyZXJzKSA/IHRoaXMub3B0aW9ucy5yZW5kZXJlcnMgOiBbdGhpcy5vcHRpb25zLnJlbmRlcmVyc107XHJcbiAgICAgICAgcmVuZGVyTGlzdC5mb3JFYWNoKChyZW5kZXJPcHRpb24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkcy5wdXNoKG5ldyBHcmlkUmVuZGVyZXIoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZW5kZXJPcHRpb24pLCB7IHVpOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucy51aSksIHJlbmRlck9wdGlvbi51aSksIGNvbHVtbnM6IChyZW5kZXJPcHRpb24uY29sdW1ucyAmJiByZW5kZXJPcHRpb24uY29sdW1ucy5sZW5ndGgpID8gcmVuZGVyT3B0aW9uLmNvbHVtbnMgOiB0aGlzLm9wdGlvbnMuY29sdW1ucywgc29ydGFibGU6IChyZW5kZXJPcHRpb24uc29ydGFibGUgJiYgcmVuZGVyT3B0aW9uLnNvcnRhYmxlLmxlbmd0aCkgPyByZW5kZXJPcHRpb24uc29ydGFibGUgOiB0aGlzLm9wdGlvbnMuc29ydGFibGUsIHBhZ2luYXRvcjogdHlwZW9mIHJlbmRlck9wdGlvbi5wYWdpbmF0b3IgPT09ICd1bmRlZmluZWQnID8gdGhpcy5vcHRpb25zLnBhZ2luYXRvciA6IHJlbmRlck9wdGlvbi5wYWdpbmF0b3IsIGRvbnRSZW5kZXJFcnJvcjogISF0aGlzLm9wdGlvbnMuZXJyb3JNZXNzYWdlVGFyZ2V0LCBzZWxlY3RhYmxlOiByZW5kZXJPcHRpb24uc2VsZWN0YWJsZSB8fCB0aGlzLm9wdGlvbnMuc2VsZWN0YWJsZSB9KSwgdGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xyXG4gICAgICAgICAgICBncmlkLnJlbmRlcih0aGlzLnN0YXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUNoZWNrYm94ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XHJcbiAgICAgICAgICAgIGdyaWQudXBkYXRlQ2hlY2tib3hlcyh0aGlzLnN0YXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVkQWN0aW9uUGFuZWxzLmZvckVhY2goKGEpID0+IHtcclxuICAgICAgICAgICAgYS5zZXRTZWxlY3Rpb24odGhpcy5zdGF0ZS5zZWxlY3Rpb24sIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVTZWxlY3Rpb25BbGwoY2hlY2tlZCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0YWJsZSkge1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RBbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVzZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUNoZWNrYm94ZXMoKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZVNlbGVjdGlvbih2YWx1ZSwgY2hlY2tlZCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0YWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGFibGUudHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5NVUxUSVBMRSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFkZFRvU2VsZWN0aW9uKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVtb3ZlRnJvbVNlbGVjdGlvbih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RTaW5nbGUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hlcygpO1xyXG4gICAgfVxyXG4gICAgc2VyaWFsaXplKCkge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbSA9IHRoaXMuc3RhdGUuZ2V0RmlsdGVyKCk7XHJcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUucGFnaW5hdGUpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKGspID0+IHBhZ2VQYXJhbXMuaW5kZXhPZihrKSA+PSAwKVxyXG4gICAgICAgICAgICAucmVkdWNlKChtYXAsIGtleSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWFwKSwgeyBba2V5XTogdGhpcy5zdGF0ZS5wYWdpbmF0ZVtrZXldIH0pKSwge30pO1xyXG4gICAgICAgIGNvbnN0IHNvcnRPcHRpb25zID0gdGhpcy5zdGF0ZS5zb3J0QnkgPyB7IHNvcnRCeTogdGhpcy5zdGF0ZS5zb3J0QnksIHNvcnREaXI6IHRoaXMuc3RhdGUuc29ydERpciB9IDoge307XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjdXN0b20pLCBwYWdpbmF0aW9uKSwgc29ydE9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZGVzZXJpYWxpemUodmFsdWVzKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlLCBsaW1pdCwgY2lkLCBsaWQgfSA9IHZhbHVlcywgcmVzdCA9IF9fcmVzdCh2YWx1ZXMsIFtcInBhZ2VcIiwgXCJsaW1pdFwiLCBcImNpZFwiLCBcImxpZFwiXSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS51cGRhdGVQYWdpbmF0b3Ioe1xyXG4gICAgICAgICAgICBwYWdlOiArcGFnZSwgbGltaXQ6ICtsaW1pdCwgY2lkLCBsaWQsXHJcbiAgICAgICAgfSk7IC8vIFRPRE86IHNraXAgaW52YWxpZCBwYWdlL2xpbWl0IHZhbHVlc1xyXG4gICAgICAgIGNvbnN0IHsgc29ydEJ5LCBzb3J0RGlyIH0gPSByZXN0LCByZXN0MiA9IF9fcmVzdChyZXN0LCBbXCJzb3J0QnlcIiwgXCJzb3J0RGlyXCJdKTtcclxuICAgICAgICBpZiAoc29ydEJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0U29ydChzb3J0QnksIHNvcnREaXIgfHwgU29ydERpcmVjdGlvbi5BU0MpOyAvLyBUT0RPOiBza2lwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFsuLi5wYWdlUGFyYW1zLCAuLi5zb3J0UGFyYW1zXS5mb3JFYWNoKChwKSA9PiBkZWxldGUgcmVzdDJbcF0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXJsRGF0YSA9IHJlc3QyO1xyXG4gICAgfVxyXG4gICAgdXNlUHJlZml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VyaWFsaXplICYmIHRoaXMub3B0aW9ucy5uYW1lc3BhY2U7XHJcbiAgICB9XHJcbiAgICBnZXRQcmVmaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlUHJlZml4KCkgPyAoYCR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZSB8fCAnJ30tYCkgOiAnJztcclxuICAgIH1cclxuICAgIGluaXRGcm9tVXJsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VyaWFsaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxEYXRhID0gdGhpcy5nZXRPYmplY3RGcm9tVXJsKHRoaXMuZGVmYXVsdHMsIHRoaXMuZ2V0UHJlZml4KCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVybERhdGEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZXJpYWxpemUodXJsRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVVcmwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZXJpYWxpemUpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc2VyaWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0T2JqZWN0VG9VcmwoZGF0YSwgdGhpcy5kZWZhdWx0cywgdGhpcy5nZXRQcmVmaXgoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuICAgIGdldE9iamVjdEZyb21VcmwoZGVmYXVsdHMsIHByZWZpeCA9ICcnKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gcGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCwgeyBwYXJzZU51bWJlcnM6IHRydWUsIHBhcnNlQm9vbGVhbnM6IHRydWUgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKG1hcCwgb0spID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcmVmaXggfHwgb0suaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtYXApLCB7IFtvSy5zdWJzdHIocHJlZml4Lmxlbmd0aCldOiAodHlwZW9mIG9ialtvS10gIT09ICd1bmRlZmluZWQnKSA/IG9ialtvS10gOiBkZWZhdWx0c1tvSy5zdWJzdHIocHJlZml4Lmxlbmd0aCldIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwdXRPYmplY3RUb1VybChvYmoxLCBkZWZhdWx0cywgcHJlZml4ID0gJycpIHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5oaXN0b3J5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2FudCB1cGRhdGUgVVJMIHdpdGhvdXQgcmVsb2FkLCBza2lwcGluZycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UmF3ID0gT2JqZWN0LmtleXMob2JqMSkucmVkdWNlKChtYXAsIG9LKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcclxuICAgICAgICAgICAgaWYgKG9iajFbb0tdICYmIG9iajFbb0tdICE9IGRlZmF1bHRzW29LXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWFwKSwgeyBbYCR7cHJlZml4fSR7b0t9YF06IG9iajFbb0tdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICAgIGxldCBvYmoyID0gcGFyc2Uod2luZG93LmxvY2F0aW9uLnNlYXJjaCwgeyBwYXJzZU51bWJlcnM6IHRydWUsIHBhcnNlQm9vbGVhbnM6IHRydWUgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMudXNlUHJlZml4KCkpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGsuaW5kZXhPZih0aGlzLmdldFByZWZpeCgpKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmoyW2tdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9iajIgPSB7fTsgLy8gSWYgdGFibGUgaXMgbm90IHVzaW5nIHByZWZpeGVzLCBhbGwgcGFyYW1zIGFyZSB0aGF0IHRhYmxlIHBhcmFtc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBxdWVyeSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2JqMiksIHF1ZXJ5UmF3KTtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBzdHJpbmdpZnlVcmwoe1xyXG4gICAgICAgICAgICB1cmw6IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YCxcclxuICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59XHJcbkRhdGFncmlkLnNwaXJhbEZyYW1ld29ya05hbWUgPSAnZGF0YWdyaWQnO1xyXG5EYXRhZ3JpZC5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRHcmlkT3B0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgRGF0YWdyaWQ7XHJcbiIsImltcG9ydCB7IERFRkFVTFRfTElNSVQsIFNvcnREaXJlY3Rpb24gfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5leHBvcnQgY2xhc3MgRGF0YWdyaWRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IERFRkFVTFRfTElNSVQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoQ291bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzb3J0RGlyOiBTb3J0RGlyZWN0aW9uLkFTQyxcclxuICAgICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICAgIGZvcm1EYXRhOiB7fSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uOiBuZXcgU2V0KCksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlLmZldGNoQ291bnQgPSB0aGlzLnBhcmVudC5vcHRpb25zLmZldGNoQ291bnQ7XHJcbiAgICB9XHJcbiAgICBpc1NlbGVjdGVkKHZhbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGlvbi5oYXMoU3RyaW5nKHZhbCkpO1xyXG4gICAgfVxyXG4gICAgYXJlQWxsU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5yZWR1Y2UoKGhhc0l0LCBpdGVtKSA9PiBoYXNJdFxyXG4gICAgICAgICAgICAmJiAhIXRoaXMucGFyZW50Lm9wdGlvbnMuc2VsZWN0YWJsZVxyXG4gICAgICAgICAgICAmJiB0aGlzLmlzU2VsZWN0ZWQoU3RyaW5nKGl0ZW1bdGhpcy5wYXJlbnQub3B0aW9ucy5zZWxlY3RhYmxlLmlkXSkpLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGdldCBzZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzQ3VzdG9tU2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gVE9ETzogRGV0ZWN0IHdoZW4gc2VhcmNoIGlzIGZpbGxlZFxyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maWx0ZXIoKGl0ZW0pID0+ICEhdGhpcy5wYXJlbnQub3B0aW9ucy5zZWxlY3RhYmxlICYmIHRoaXMuaXNTZWxlY3RlZChTdHJpbmcoaXRlbVt0aGlzLnBhcmVudC5vcHRpb25zLnNlbGVjdGFibGUuaWRdKSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzTG9hZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nO1xyXG4gICAgfVxyXG4gICAgc3RhcnRMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBnZXQgbmVlZEZldGNoQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZmV0Y2hDb3VudDtcclxuICAgIH1cclxuICAgIHJlc2V0RmV0Y2hDb3VudCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmZldGNoQ291bnQgPSB0aGlzLnBhcmVudC5vcHRpb25zLmZldGNoQ291bnQ7XHJcbiAgICB9XHJcbiAgICBvbkNvdW50RmV0Y2hlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmZldGNoQ291bnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHN0b3BMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF0YTtcclxuICAgIH1cclxuICAgIGdldCBwYWdpbmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wYWdpbmF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgdXJsRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS51cmxEYXRhO1xyXG4gICAgfVxyXG4gICAgc2V0IHVybERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudXJsRGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVQYWdpbmF0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYWdpbmF0b3IgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUucGFnaW5hdG9yKSwgcGFyYW1zKTtcclxuICAgIH1cclxuICAgIHNldCBkYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhhc0Vycm9yKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuc3RhdGUuZXJyb3I7XHJcbiAgICB9XHJcbiAgICBnZXQgZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmVycm9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvcnRCeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0Qnk7XHJcbiAgICB9XHJcbiAgICBnZXQgc29ydERpcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zb3J0RGlyO1xyXG4gICAgfVxyXG4gICAgc2V0U3VjY2VzcyhkYXRhLCBwYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdG9yKHBhZ2luYXRpb24pO1xyXG4gICAgfVxyXG4gICAgc2V0RXJyb3IoZXJyb3IsIGVycm9ycyA9IHt9LCByZXNldERhdGEgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChyZXNldERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICB0aGlzLnN0YXRlLmVycm9ycyA9IGVycm9ycztcclxuICAgIH1cclxuICAgIHNldFNvcnQoZmllbGQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc29ydEJ5ID0gZmllbGQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5zb3J0RGlyID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0Rm9ybURhdGEoZm9ybUlkLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mb3JtRGF0YVtmb3JtSWRdID0gZGF0YTtcclxuICAgIH1cclxuICAgIGdldEZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZm9ybURhdGEpLnJlZHVjZSgocHJldiwga2V5KSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcmV2KSwgdGhpcy5zdGF0ZS5mb3JtRGF0YVtrZXldKSksIHt9KTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLnVybERhdGEpLCBmb3Jtcyk7XHJcbiAgICB9XHJcbiAgICBhZGRUb1NlbGVjdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLmFkZChTdHJpbmcodmFsdWUpKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUZyb21TZWxlY3Rpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5kZWxldGUoU3RyaW5nKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RTaW5nbGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbi5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLmFkZChTdHJpbmcodmFsdWUpKTtcclxuICAgIH1cclxuICAgIHJlc2V0U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0aW9uLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RBbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Lm9wdGlvbnMuc2VsZWN0YWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbiA9IG5ldyBTZXQodGhpcy5kYXRhLm1hcCgoaXRlbSkgPT4gU3RyaW5nKGl0ZW1bdGhpcy5wYXJlbnQub3B0aW9ucy5zZWxlY3RhYmxlLmlkXSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuaW1wb3J0IEFjdGlvblBhbmVsIGZyb20gJy4vYWN0aW9ucGFuZWwvQWN0aW9uUGFuZWwnO1xyXG5pbXBvcnQgeyBBQ1RJT05fUEFORUxfQ0xBU1NfTkFNRSwgUEFHSU5BVE9SX0NMQVNTX05BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBEYXRhR3JpZCBmcm9tICcuL2RhdGFncmlkL0RhdGFncmlkJztcclxuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL3BhZ2luYXRvci9QYWdpbmF0b3InO1xyXG5zZi5yZWdpc3Rlckluc3RhbmNlVHlwZShEYXRhR3JpZCwgJ3NmLWpzLWRhdGFncmlkJyk7XHJcbnNmLnJlZ2lzdGVySW5zdGFuY2VUeXBlKFBhZ2luYXRvciwgUEFHSU5BVE9SX0NMQVNTX05BTUUpO1xyXG5zZi5yZWdpc3Rlckluc3RhbmNlVHlwZShBY3Rpb25QYW5lbCwgQUNUSU9OX1BBTkVMX0NMQVNTX05BTUUpO1xyXG5leHBvcnQgZGVmYXVsdCBEYXRhR3JpZDsgLy8gRVM2IGRlZmF1bHQgZXhwb3J0IHdpbGwgbm90IGV4cG9zZSB1cyBhcyBnbG9iYWxcclxuIiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2VzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRlZmluaXRpb25zLCBkZWZhdWx0RGVmaW5pdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0RGVmaW5pdGlvbnMgPSBkZWZhdWx0RGVmaW5pdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXRNZXNzYWdlKG1lc3NhZ2VLZXksIHZhbHVlcykge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZXMpLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2LnNwbGl0KGB7eyR7a2V5fX19YCkuam9pbigodHlwZW9mIHZhbHVlc1trZXldID09PSAndW5kZWZpbmVkJykgPyAnJyA6IFN0cmluZyh2YWx1ZXNba2V5XSkpO1xyXG4gICAgICAgIH0sICh0aGlzLmRlZmluaXRpb25zW21lc3NhZ2VLZXldIHx8IHRoaXMuZGVmYXVsdERlZmluaXRpb25zW21lc3NhZ2VLZXldIHx8ICcnKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuaW1wb3J0IHsgc3RyaW5naWZ5VXJsIH0gZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IHsgREVGQVVMVF9MSU1JVCwgUGFnaW5hdG9yVHlwZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbi8vIGltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvciBleHRlbmRzIHNmLmNvcmUuQmFzZURPTUNvbnN0cnVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNzZiwgbm9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gUGFnaW5hdG9yLnNwaXJhbEZyYW1ld29ya05hbWU7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zVG9HcmFiID0ge1xyXG4gICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucy5pZCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdpZCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBQYWdpbmF0b3IuZGVmYXVsdE9wdGlvbnMudHlwZSxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLXR5cGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aWxsRmV0Y2hDb3VudDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucy53aWxsRmV0Y2hDb3VudCxcclxuICAgICAgICAgICAgICAgIGRvbUF0dHI6ICdkYXRhLWZldGNoLWNvdW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIFBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaW1pdDogREVGQVVMVF9MSU1JVCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5pdChzc2YsIG5vZGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUGFnaW5hdG9yLmRlZmF1bHRPcHRpb25zKSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvY2tUeXBlIHx8IHRoaXMub3B0aW9ucy5sb2NrVHlwZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNmLnJlbW92ZUluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSB0cnkgdG8gcmVtb3ZlIFxcJ2xvY2tcXCcgaW5zdGFuY2UsIGJ1dCBpdCBpcyBub3QgYXZhaWxhYmxlIG9yIG5vdCBzdGFydGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9jaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5sb2NrVHlwZSB8fCB0aGlzLm9wdGlvbnMubG9ja1R5cGUgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLnNmLmFkZEluc3RhbmNlKCdsb2NrJywgdGhpcy5ub2RlLCB7IHR5cGU6IHRoaXMub3B0aW9ucy5sb2NrVHlwZSB9KTtcclxuICAgICAgICBpZiAoIWxvY2spIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdZb3UgdHJ5IHRvIGFkZCBcXCdsb2NrXFwnIGluc3RhbmNlLCBidXQgaXQgaXMgbm90IGF2YWlsYWJsZSBvciBhbHJlYWR5IHN0YXJ0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXMocGFyYW1zLCBzZXJpYWxpemUpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCBwYXJhbXMpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBoYXNQYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuc3RhdGUucGFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuc3RhdGUubGltaXQgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgfVxyXG4gICAgaGFzVG90YWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53aWxsRmV0Y2hDb3VudCAmJiB0eXBlb2YgdGhpcy5zdGF0ZS5jb3VudCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcbiAgICBoYXNMaW1pdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMubGltaXRPcHRpb25zICE9PSAndW5kZWZpbmVkJztcclxuICAgIH1cclxuICAgIGdlbmVyYXRlUGFnZUxpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5kQ3VycmVudCA9IDE7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuc3RhdGUucGFnZTtcclxuICAgICAgICBjb25zdCBwYWdlc0NvdW50ID0gdGhpcy5oYXNUb3RhbCgpID8gTWF0aC5jZWlsKHRoaXMuc3RhdGUuY291bnQgLyB0aGlzLnN0YXRlLmxpbWl0KSA6IHBhZ2U7XHJcbiAgICAgICAgY29uc3QgaGFzTmV4dCA9IHRoaXMuaGFzVG90YWwoKSA/IChwYWdlIDwgcGFnZXNDb3VudCkgOiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gcGFnZSA+IDE7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJhbmdlID0gW01hdGgubWF4KHBhZ2UgLSBleHRlbmRDdXJyZW50LCAxKSwgTWF0aC5taW4ocGFnZSArIGV4dGVuZEN1cnJlbnQsIHBhZ2VzQ291bnQpXTtcclxuICAgICAgICBjb25zdCBzdGFydFJhbmdlID0gWzEsIE1hdGgubWluKGV4dGVuZEN1cnJlbnQgKyAxLCBwYWdlc0NvdW50KV07XHJcbiAgICAgICAgY29uc3QgZW5kUmFuZ2UgPSBbTWF0aC5tYXgocGFnZXNDb3VudCAtIGV4dGVuZEN1cnJlbnQsIDEpLCBwYWdlc0NvdW50XTtcclxuICAgICAgICBjb25zdCBwYWdlcyA9IFtdO1xyXG4gICAgICAgIGxldCBpID0gMTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGFnZTogaSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGAke2l9YCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogcGFnZSA9PT0gaSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChpID49IHN0YXJ0UmFuZ2VbMV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIHJlYWNoZWQgbGFzdCBwYWdlIGZvciBzdGFydCByYW5nZVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgY3VycmVudFJhbmdlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcGFnZSBpcyBtb3JlIHRoYW4gMSBwYWdlIGZ1cnRoZXIgZnJvbSBuZXh0IHBhZ2UgaW4gcmFuZ2UsIGFkZCBlbGxpcHNpcyBhbmQganVtcFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcuLi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBjdXJyZW50UmFuZ2VbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPj0gY3VycmVudFJhbmdlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSByZWFjaGVkIGxhc3QgcGFnZSBmb3IgY3VycmVudCBwYWdlIHJhbmdlXHJcbiAgICAgICAgICAgICAgICBpZiAoaSArIDEgPCBlbmRSYW5nZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHBhZ2UgaXMgbW9yZSB0aGFuIDEgcGFnZSBmdXJ0aGVyIGZyb20gbmV4dCBwYWdlIGluIHJhbmdlLCBhZGQgZWxsaXBzaXMgYW5kIGp1bXBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcclxuICAgICAgICAgICAgICAgICAgICBpID0gZW5kUmFuZ2VbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgIH0gd2hpbGUgKGkgPD0gcGFnZXNDb3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFnZXMsXHJcbiAgICAgICAgICAgIGhhc05leHQsXHJcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRMaW1pdChsaW1pdCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUubGltaXQgPSBsaW1pdDtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uUGFnZUNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25QYWdlQ2hhbmdlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgc2V0UGFnZShwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wYWdlID0gcGFnZTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uUGFnZUNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25QYWdlQ2hhbmdlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb3VudGVyRGl2LmNsYXNzTmFtZSA9ICdjb2wtMTIgY29sLWxnLTQnO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1BhZ2VzKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzVG90YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlckRpdi5pbm5lckhUTUwgPSBgU2hvd2luZyAkeyh0aGlzLnN0YXRlLnBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUubGltaXQgKyAxfSB0byAke3RoaXMuc3RhdGUucGFnZSAqIHRoaXMuc3RhdGUubGltaXR9YFxyXG4gICAgICAgICAgICAgICAgICAgICsgYCBvZiAke3RoaXMuc3RhdGUuY291bnR9IGVudHJpZXNgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnRlckRpdi5pbm5lckhUTUwgPSBgU2hvd2luZyAkeyh0aGlzLnN0YXRlLnBhZ2UgLSAxKSAqIHRoaXMuc3RhdGUubGltaXQgKyAxfSB0byAke3RoaXMuc3RhdGUucGFnZSAqIHRoaXMuc3RhdGUubGltaXR9IGVudHJpZXNgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXJEaXYuaW5uZXJIVE1MID0gJ1Nob3dpbmcgbm8gZW50cmllcyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpbWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGltaXREaXYuY2xhc3NOYW1lID0gJ2NvbC00IGNvbC1tZC0yIGNvbC1sZy0yJztcclxuICAgICAgICBpZiAodGhpcy5oYXNMaW1pdE9wdGlvbnMoKSkge1xyXG4gICAgICAgICAgICBsaW1pdERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwtc20gY29sLWF1dG9cIj5TaG93PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwibGltaXRcIiBjbGFzcz1cImN1c3RvbS1zZWxlY3QgY3VzdG9tLXNlbGVjdC1zbSBjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGxpbWl0RGl2LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubGltaXRPcHRpb25zLmZvckVhY2goKG9wdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBgJHtvcHR9YDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBgJHtvcHR9YDtcclxuICAgICAgICAgICAgICAgIGlmIChvcHQgPT09IHRoaXMuc3RhdGUubGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2VsZWN0LnZhbHVlID0gYCR7dGhpcy5zdGF0ZS5saW1pdH1gO1xyXG4gICAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMaW1pdCgrc2VsZWN0LnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhZ2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZXNEaXYuY2xhc3NOYW1lID0gJ2NvbC04IGNvbC1tZC0xMCBjb2wtbGctNic7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzUGFnZXMoKSkge1xyXG4gICAgICAgICAgICBwYWdlc0Rpdi5pbm5lckhUTUwgPSAnPHVsIGNsYXNzPVwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLXNtIGp1c3RpZnktY29udGVudC1lbmQgbWItMFwiPic7XHJcbiAgICAgICAgICAgIGNvbnN0IHVsID0gcGFnZXNEaXYucXVlcnlTZWxlY3RvcigndWwnKTtcclxuICAgICAgICAgICAgY29uc3QgcGFnZUluZm8gPSB0aGlzLmdlbmVyYXRlUGFnZUxpc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgYWRkTGkgPSAoY2xhc3NOYW1lLCB0ZXh0LCB1cmwsIG9uQ2xpY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8YSBocmVmPVwiJHt1cmwgfHwgJyMnfVwiIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicGFnZS1saW5rXCI+JHt0ZXh0fTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB1cmxGb3JQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLnNlcmlhbGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5naWZ5VXJsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLm9wdGlvbnMuc2VyaWFsaXplID09PSB0cnVlID8gJ3BhZ2UnIDogYCR7dGhpcy5vcHRpb25zLnNlcmlhbGl6ZX1wYWdlYF06IHBhZ2UudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrRm9yUGFnZSA9IChwYWdlKSA9PiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdlKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBhZGRMaShwYWdlSW5mby5oYXNQcmV2aW91cyA/ICdwYWdlLWl0ZW0gcHJldmlvdXMnIDogJ3BhZ2UtaXRlbSBwcmV2aW91cyBkaXNhYmxlZCcsICfCqycsIHBhZ2VJbmZvLmhhc1ByZXZpb3VzID8gdXJsRm9yUGFnZSh0aGlzLnN0YXRlLnBhZ2UgLSAxKSA6IHVuZGVmaW5lZCwgcGFnZUluZm8uaGFzUHJldmlvdXMgPyBjbGlja0ZvclBhZ2UodGhpcy5zdGF0ZS5wYWdlIC0gMSkgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBwYWdlSW5mby5wYWdlcy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRMaShwLmFjdGl2ZSA/ICdwYWdlLWl0ZW0gYWN0aXZlJyA6ICdwYWdlLWl0ZW0nLCBwLnRleHQsIHAucGFnZSA/IHVybEZvclBhZ2UocC5wYWdlKSA6IHVuZGVmaW5lZCwgcC5wYWdlID8gY2xpY2tGb3JQYWdlKHAucGFnZSkgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRkTGkocGFnZUluZm8uaGFzTmV4dCA/ICdwYWdlLWl0ZW0gbmV4dCcgOiAncGFnZS1pdGVtIG5leHQgZGlzYWJsZWQnLCAnwrsnLCBwYWdlSW5mby5oYXNOZXh0ID8gdXJsRm9yUGFnZSh0aGlzLnN0YXRlLnBhZ2UgKyAxKSA6IHVuZGVmaW5lZCwgcGFnZUluZm8uaGFzTmV4dCA/IGNsaWNrRm9yUGFnZSh0aGlzLnN0YXRlLnBhZ2UgKyAxKSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7IC8vIFRPRE86IGRvbnQgcmVyZW5kZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBlbCB9ID0gdGhpcztcclxuICAgICAgICBlbC5jbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lIHx8ICcnO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGNvdW50ZXJEaXYpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGxpbWl0RGl2KTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChwYWdlc0Rpdik7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLmNsYXNzTGlzdC5hZGQoJ3NmLXBhZ2luYXRvcl9fZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsID09PSBudWxsIHx8IGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzZi1wYWdpbmF0b3JfX2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblBhZ2luYXRvci5zcGlyYWxGcmFtZXdvcmtOYW1lID0gJ2RhdGFncmlkLXBhZ2luYXRvcic7XHJcblBhZ2luYXRvci5kZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGlkOiAnJyxcclxuICAgIGxvY2tUeXBlOiAnbm9uZScsXHJcbiAgICB3aWxsRmV0Y2hDb3VudDogdHJ1ZSxcclxuICAgIHNlcmlhbGl6ZTogdHJ1ZSxcclxuICAgIHR5cGU6IFBhZ2luYXRvclR5cGUucGFnZXMsXHJcbiAgICBjbGFzc05hbWU6ICdyb3cgbm8tZ3V0dGVycyBhbGlnbi1pdGVtcy1jZW50ZXIgbS0zJyxcclxuICAgIGxpbWl0T3B0aW9uczogWzEwLCAyNSwgNTAsIDEwMF0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvcjtcclxuIiwiaW1wb3J0IHNmIGZyb20gJ0BzcGlyYWwtdG9vbGtpdC9jb3JlJztcclxuaW1wb3J0IEFjdGlvblBhbmVsIGZyb20gJy4uL2FjdGlvbnBhbmVsL0FjdGlvblBhbmVsJztcclxuaW1wb3J0IHsgREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FMTF9BVFRSLCBEQVRBR1JJRF9DSEVDS19TRUxFQ1RfQVRUUiwgZGVmYXVsdEdyaWRNZXNzYWdlcywgUEFHSU5BVE9SX0NMQVNTX05BTUUsIFNlbGVjdGlvblR5cGUsIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IGFwcGx5QXR0cnJpYnV0ZXMsIG5vcm1hbGl6ZUNvbHVtbnMgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRCb2R5V3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdEJvZHlXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEZvb3RlcldyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRGb290ZXJXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEhlYWRlcldyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRIZWFkZXJXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEdyaWRVaU9wdGlvbnMsIGRlZmF1bHRSZW5kZXJlciB9IGZyb20gJy4vZGVmYXVsdFJlbmRlcmVyJztcclxuaW1wb3J0IHsgZGVmYXVsdFJvd1dyYXBwZXIgfSBmcm9tICcuL2RlZmF1bHRSb3dXcmFwcGVyJztcclxuaW1wb3J0IHsgZGVmYXVsdFRhYmxlV3JhcHBlciB9IGZyb20gJy4vZGVmYXVsdFRhYmxlV3JhcHBlcic7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZWRDZWxsUmVuZGVyZXIsIG5vcm1hbGl6ZWRIZWFkZXJDZWxsUmVuZGVyZXIgfSBmcm9tICcuL25vcm1hbGl6ZXJzJztcclxubGV0IGluc3RhbmNlQ291bnRlciA9IDE7XHJcbmV4cG9ydCBjbGFzcyBHcmlkUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IocGFydGlhbE9wdGlvbnMsIHJvb3QpIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZUNvdW50ZXIrKztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFJlbmRlcmVyKSwgcGFydGlhbE9wdGlvbnMpLCB7IHVpOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRHcmlkVWlPcHRpb25zKSwgcGFydGlhbE9wdGlvbnMudWkpIH0pO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWVzc2FnZXModGhpcy5vcHRpb25zLm1lc3NhZ2VzIHx8IHt9LCBkZWZhdWx0R3JpZE1lc3NhZ2VzKTtcclxuICAgICAgICB0aGlzLmNvbHVtbkluZm8gPSBub3JtYWxpemVDb2x1bW5zKHRoaXMub3B0aW9ucy5jb2x1bW5zLCB0aGlzLm9wdGlvbnMuc29ydGFibGUpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdzZi1kYXRhZ3JpZC13cmFwcGVyJyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLm9wdGlvbnMudWkud3JhcHBlckNsYXNzTmFtZSB8fCAnJyk7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0QWN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhZ2luYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURlZmF1bHRQYWdpbmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFibGVSZW5kZXJlciA9IHRoaXMub3B0aW9ucy50YWJsZVdyYXBwZXIgfHwgZGVmYXVsdFRhYmxlV3JhcHBlcjtcclxuICAgICAgICB0aGlzLnRhYmxlRWwgPSB0YWJsZVJlbmRlcmVyKHRoaXMud3JhcHBlciwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZURlZmF1bHRQYWdpbmF0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBgJHtEYXRlLm5vdygpfSR7dGhpcy5pbnN0YW5jZX1gO1xyXG4gICAgICAgIHRoaXMucm9vdC5vcHRpb25zLmNhcHR1cmVGb3Jtcy5wdXNoKGlkKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRvckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0b3JFbC5jbGFzc05hbWUgPSBQQUdJTkFUT1JfQ0xBU1NfTkFNRTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRvckVsLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5yb290Lm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5wYWdpbmF0b3JFbCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVEZWZhdWx0QWN0aW9ucygpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgaWQgPSBgJHtEYXRlLm5vdygpfSR7dGhpcy5pbnN0YW5jZX1gO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUGFuZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMucm9vdC5ub2RlLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uUGFuZWxFbCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3Qub3B0aW9ucy5jYXB0dXJlQWN0aW9uUGFuZWxzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdC5vcHRpb25zLmNhcHR1cmVBY3Rpb25QYW5lbHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290Lm9wdGlvbnMuY2FwdHVyZUFjdGlvblBhbmVscy5wdXNoKGlkKTtcclxuICAgICAgICBjb25zdCBwYW5lbCA9IG5ldyBBY3Rpb25QYW5lbChzZiwgdGhpcy5hY3Rpb25QYW5lbEVsLCB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IChzdGF0ZSkgPT4gKHN0YXRlLmhhc1NlbGVjdGlvbiA/ICdyb3cgbm8tZ3V0dGVycyBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlci1ib3R0b20nIDogJ2Qtbm9uZScpLFxyXG4gICAgICAgICAgICBsb2NrVHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICBub1NlbGVjdGlvbjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgIGFjdGlvbkNsYXNzTmFtZTogJ2J0biBidG4tc20nLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25UeXBlOiAoKF9hID0gdGhpcy5vcHRpb25zLnNlbGVjdGFibGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlKSB8fCBTZWxlY3Rpb25UeXBlLlNJTkdMRSxcclxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5vcHRpb25zLmFjdGlvbnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yb290LnJlZ2lzdGVyQWN0aW9uUGFuZWxJbnN0YW5jZShwYW5lbCk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xyXG4gICAgYXBwbHlBZGRpdGlvbmFsQ2VsbEF0dHJpYnV0ZXMoZWwsIGNvbHVtbiwgb3B0aW9ucywgc3RhdGUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY2VsbE1ldGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXHJcbiAgICAgICAgICAgIGNvbHVtbixcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkOiBvcHRpb25zLnNlbGVjdGFibGUgPyBzdGF0ZS5pc1NlbGVjdGVkKHN0YXRlLmRhdGFbaW5kZXhdW29wdGlvbnMuc2VsZWN0YWJsZS5pZF0pIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBpdGVtOiBzdGF0ZS5kYXRhW2luZGV4XSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmNlbGxDbGFzc05hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4ub3B0aW9ucy51aS5jZWxsQ2xhc3NOYW1lKGNlbGxNZXRhKS5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWNpZmljID0gb3B0aW9ucy51aS5jZWxsQ2xhc3NOYW1lW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwZWNpZmljID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLnNwZWNpZmljLnNwbGl0KCcgJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5zcGVjaWZpYyhjZWxsTWV0YSkuc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51aS5jZWxsQXR0cmlidXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgb3B0aW9ucy51aS5jZWxsQXR0cmlidXRlcyhjZWxsTWV0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWMgPSBvcHRpb25zLnVpLmNlbGxBdHRyaWJ1dGVzW2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwZWNpZmljID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIHNwZWNpZmljKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBzcGVjaWZpYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuICAgIGFwcGx5QWRkaXRpb25hbEhlYWRlckNlbGxBdHRyaWJ1dGVzKGVsLCBjb2x1bW4sIG9wdGlvbnMsIHN0YXRlKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbE1ldGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBjb2x1bW4uaWQsXHJcbiAgICAgICAgICAgIGNvbHVtbixcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkOiBvcHRpb25zLnNlbGVjdGFibGUgPyBzdGF0ZS5hcmVBbGxTZWxlY3RlZCgpIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBpdGVtOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudWkuaGVhZGVyQ2VsbENsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5vcHRpb25zLnVpLmhlYWRlckNlbGxDbGFzc05hbWUoY2VsbE1ldGEpLnNwbGl0KCcgJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWMgPSBvcHRpb25zLnVpLmhlYWRlckNlbGxDbGFzc05hbWVbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uc3BlY2lmaWMuc3BsaXQoJyAnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLnNwZWNpZmljKGNlbGxNZXRhKS5zcGxpdCgnICcpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVpLmhlYWRlckNlbGxBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBseUF0dHJyaWJ1dGVzKGVsLCBvcHRpb25zLnVpLmhlYWRlckNlbGxBdHRyaWJ1dGVzKGNlbGxNZXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjaWZpYyA9IG9wdGlvbnMudWkuaGVhZGVyQ2VsbEF0dHJpYnV0ZXNbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVjaWZpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BlY2lmaWMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlBdHRycmlidXRlcyhlbCwgc3BlY2lmaWMoY2VsbE1ldGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5QXR0cnJpYnV0ZXMoZWwsIHNwZWNpZmljKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoc3RhdGUpIHtcclxuICAgICAgICAvLyBSZW5kZXIgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyUmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMuaGVhZGVyV3JhcHBlciB8fCBkZWZhdWx0SGVhZGVyV3JhcHBlcjtcclxuICAgICAgICBpZiAodGhpcy5oZWFkZXJFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5oZWFkZXJFbC5vdXRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVhZGVyRWwgPSBoZWFkZXJSZW5kZXJlcih0aGlzLnRhYmxlRWwsIHRoaXMub3B0aW9ucywgc3RhdGUsIHRoaXMubWVzc2FnZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlckVsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbkluZm8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbkluZm8uZm9yRWFjaCgoY0ksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyQ2VsbFJlbmRlcmVyID0gbm9ybWFsaXplZEhlYWRlckNlbGxSZW5kZXJlcigodGhpcy5vcHRpb25zLmhlYWRlckxpc3QgfHwge30pW2NJLmlkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGhlYWRlckNlbGxSZW5kZXJlci5jcmVhdGVFbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkID0gaGVhZGVyQ2VsbFJlbmRlcmVyLnJlbmRlcihjSSwgdGhpcy5vcHRpb25zLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZW5kZXJlZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IHJlbmRlcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5QWRkaXRpb25hbEhlYWRlckNlbGxBdHRyaWJ1dGVzKG5vZGUsIGNJLCB0aGlzLm9wdGlvbnMsIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyRWwuaW5uZXIuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW5kZXIgYm9keVxyXG4gICAgICAgIGlmICh0aGlzLmJvZHlFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5ib2R5RWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBib2R5UmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMuYm9keVdyYXBwZXIgfHwgZGVmYXVsdEJvZHlXcmFwcGVyO1xyXG4gICAgICAgIHRoaXMuYm9keUVsID0gYm9keVJlbmRlcmVyKHRoaXMudGFibGVFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgdGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9keUVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVFbC5hcHBlbmRDaGlsZCh0aGlzLmJvZHlFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMub3B0aW9ucy5yb3dXcmFwcGVyIHx8IGRlZmF1bHRSb3dXcmFwcGVyO1xyXG4gICAgICAgICAgICBzdGF0ZS5kYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dFbCA9IHJvdyh0aGlzLmJvZHlFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5JbmZvLmZvckVhY2goKGNJKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtW2NJLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dDZWxsUmVuZGVyZXIgPSBub3JtYWxpemVkQ2VsbFJlbmRlcmVyKCh0aGlzLm9wdGlvbnMuY2VsbHMgfHwge30pW2NJLmlkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJvd0NlbGxSZW5kZXJlci5jcmVhdGVFbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7IC8vIElmIG5vIG5vZGUgZ2VuZXJhdGVkLCBza2lwIGl0LCB0aGF0IG1pZ2h0IGJlIGN1c3RvbSB0ciByZW5kZXIgb3IgY29sc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZCA9IHJvd0NlbGxSZW5kZXJlci5yZW5kZXIodmFsdWUsIGl0ZW0sIGNJLCB0aGlzLm9wdGlvbnMsIGluZGV4LCBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5kZXJlZCkgeyAvLyBJZiBubyBjb250ZW50IGdlbmVyYXRlZCwgc2tpcCBpdCwgdGhhdCBtaWdodCBiZSBjdXN0b20gdHIgcmVuZGVyIG9yIGNvbHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVuZGVyZWQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSByZW5kZXJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQocmVuZGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUFkZGl0aW9uYWxDZWxsQXR0cmlidXRlcyhub2RlLCBjSSwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RWwuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbmRlciBmb290ZXJcclxuICAgICAgICBpZiAodGhpcy5mb290ZXJFbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlRWwucmVtb3ZlQ2hpbGQodGhpcy5mb290ZXJFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZvb3RlclJlbmRlcmVyID0gdGhpcy5vcHRpb25zLmZvb3RlcldyYXBwZXIgfHwgZGVmYXVsdEZvb3RlcldyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5mb290ZXJFbCA9IGZvb3RlclJlbmRlcmVyKHRoaXMudGFibGVFbCwgdGhpcy5vcHRpb25zLCBzdGF0ZSwgdGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9vdGVyRWwpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZUVsLmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyRWwpO1xyXG4gICAgICAgICAgICAvLyBXZSBhc3N1bWUgZm9vdGVyIHJlbmRlciBoYW5kbGVzIGFsbCBkYXRhIHNvIG5vIGFkZGl0aW9uYWwgcmVuZGVycyBoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2hlY2tib3hlcyhzdGF0ZSkge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgaWYgKHRoaXMucm9vdC5vcHRpb25zLnNlbGVjdGFibGUpIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyRWwgPSAoX2EgPSB0aGlzLmhlYWRlckVsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3V0ZXIucXVlcnlTZWxlY3RvcihgaW5wdXRbJHtEQVRBR1JJRF9DSEVDS19TRUxFQ1RfQUxMX0FUVFJ9XWApO1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyRWwpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlckVsLmNoZWNrZWQgPSBzdGF0ZS5hcmVBbGxTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSAoX2IgPSB0aGlzLmJvZHlFbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0WyR7REFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FUVFJ9XWApO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3hlcykge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gY2hlY2tib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHN0YXRlLmlzU2VsZWN0ZWQoZWwudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRCb2R5V3JhcHBlciA9IChub2RlLCBvcHRpb25zLCBzdGF0ZSwgbWVzc2FnZXMpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgaWYgKHN0YXRlLmhhc0Vycm9yICYmICFvcHRpb25zLmRvbnRSZW5kZXJFcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yVHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGVycm9yVGQuY29sU3BhbiA9IG9wdGlvbnMuY29sdW1ucy5sZW5ndGggKyAob3B0aW9ucy5zZWxlY3RhYmxlID8gMSA6IDApO1xyXG4gICAgICAgIGVycm9yVGQuaW5uZXJUZXh0ID0gc3RhdGUuZXJyb3JNZXNzYWdlIHx8IG1lc3NhZ2VzLmdldE1lc3NhZ2UoJ2Vycm9yJywge30pO1xyXG4gICAgICAgIGVycm9yVGQuY2xhc3NMaXN0LmFkZCgnc2YtdGFibGVfX2Vycm9yJyk7XHJcbiAgICAgICAgZXJyb3JUci5hcHBlbmRDaGlsZChlcnJvclRkKTtcclxuICAgICAgICBlbC5hcHBlbmRDaGlsZChlcnJvclRyKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXRlLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgY29uc3QgZW1wdHlUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgZW1wdHlUZC5jb2xTcGFuID0gb3B0aW9ucy5jb2x1bW5zLmxlbmd0aCArIChvcHRpb25zLnNlbGVjdGFibGUgPyAxIDogMCk7XHJcbiAgICAgICAgZW1wdHlUZC5pbm5lckhUTUwgPSBzdGF0ZS5pc0N1c3RvbVNlYXJjaCA/IG1lc3NhZ2VzLmdldE1lc3NhZ2UoJ25vUmVzdWx0cycsIHt9KSA6IG1lc3NhZ2VzLmdldE1lc3NhZ2UoJ25vRGF0YScsIHt9KTtcclxuICAgICAgICBlbXB0eVRkLmNsYXNzTGlzdC5hZGQoJ3NmLXRhYmxlX19lbXB0eScpO1xyXG4gICAgICAgIGVtcHR5VHIuYXBwZW5kQ2hpbGQoZW1wdHlUZCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZW1wdHlUcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0Q2VsbEVsQ3JlYXRvciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q2VsbFJlbmRlcmVyID0ge1xyXG4gICAgY3JlYXRlRWw6IGRlZmF1bHRDZWxsRWxDcmVhdG9yLFxyXG4gICAgcmVuZGVyOiAodmFsdWUpID0+ICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJycgOiBTdHJpbmcodmFsdWUpKSxcclxufTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEZvb3RlcldyYXBwZXIgPSAobm9kZSwgb3B0aW9ucywgc3RhdGUpID0+IHVuZGVmaW5lZDtcclxuIiwiaW1wb3J0IHsgU29ydERpcmVjdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVhZGVyQ2VsbEVsQ3JlYXRvciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVhZGVyQ2VsbFJlbmRlcmVySW5uZXIgPSAoY29sdW1uLCBvcHRpb25zLCBzdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgIGlmIChjb2x1bW4uc29ydGFibGUpIHtcclxuICAgICAgICBjbGFzc2VzLnB1c2goJ3NmLXRhYmxlX19zb3J0Jyk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhcmVudC50cmlnZ2VyU29ydChjb2x1bW4uaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlLnNvcnRCeSA9PT0gY29sdW1uLmlkKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLnNvcnREaXIgPT09IFNvcnREaXJlY3Rpb24uQVNDKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnc2YtdGFibGVfX3NvcnRfYXNjJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3NmLXRhYmxlX19zb3J0X2Rlc2MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IGNvbHVtbi50aXRsZTtcclxuICAgIHJldHVybiBlbDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXIgPSB7XHJcbiAgICBjcmVhdGVFbDogZGVmYXVsdEhlYWRlckNlbGxFbENyZWF0b3IsXHJcbiAgICByZW5kZXI6IGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXJJbm5lcixcclxufTtcclxuIiwiaW1wb3J0IHsgREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FMTF9BVFRSLCBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlYWRlcldyYXBwZXIgPSAobm9kZSwgb3B0aW9ucywgc3RhdGUpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIGlmIChvcHRpb25zLnNlbGVjdGFibGUpIHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgdGQuY2xhc3NMaXN0LmFkZCgnc2YtdGFibGVfX3NlbGVjdCcpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLnNlbGVjdGFibGUudHlwZSA9PT0gU2VsZWN0aW9uVHlwZS5NVUxUSVBMRSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FMTF9BVFRSLCAnJyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnBhcmVudC50b2dnbGVTZWxlY3Rpb25BbGwoY2hlY2tib3guY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0ZC5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH1cclxuICAgIGVsLmFwcGVuZENoaWxkKHRyKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgcmV0dXJuIHsgb3V0ZXI6IGVsLCBpbm5lcjogdHIgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdE1ldGhvZCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0R3JpZFVpT3B0aW9ucyA9IHtcclxuICAgIHdyYXBwZXJDbGFzc05hbWU6ICd0YWJsZS1yZXNwb25zaXZlJyxcclxuICAgIHRhYmxlQ2xhc3NOYW1lOiAndGFibGUgdGFibGUtc3RyaXBlZCcsXHJcbiAgICBjZWxsQ2xhc3NOYW1lOiB7fSxcclxuICAgIHJvd0NsYXNzTmFtZTogJycsXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICBjZWxsQXR0cmlidXRlczogKGNlbGxNZXRhKSA9PiAoe30pLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgcm93QXR0cmlidXRlczogKHJvd01ldGEpID0+ICh7fSksXHJcbn07XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVuZGVyZXIgPSB7XHJcbiAgICBjb2x1bW5zOiBbXSxcclxuICAgIHNvcnRhYmxlOiBbXSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzaWMgY2xhc3MvYXR0cmlidXRlIHByb3BlcnRpZXNcclxuICAgICAqL1xyXG4gICAgdWk6IGRlZmF1bHRHcmlkVWlPcHRpb25zLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEdyaWRPcHRpb25zID0ge1xyXG4gICAgaWQ6ICcnLFxyXG4gICAgbG9ja1R5cGU6ICdkZWZhdWx0JyxcclxuICAgIHJlc2V0T25FcnJvcjogZmFsc2UsXHJcbiAgICBmZXRjaENvdW50OiB0cnVlLFxyXG4gICAgY2FwdHVyZUZvcm1zOiBbXSxcclxuICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgaGVhZGVyczoge30sXHJcbiAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUE9TVCxcclxuICAgIHNvcnRhYmxlOiBbXSxcclxuICAgIHVybDogJycsXHJcbiAgICBzZXJpYWxpemU6IHRydWUsXHJcbiAgICBwYWdpbmF0b3I6IHRydWUsXHJcbiAgICB1aTogZGVmYXVsdEdyaWRVaU9wdGlvbnMsXHJcbiAgICByZW5kZXJlcnM6IGRlZmF1bHRSZW5kZXJlcixcclxufTtcclxuIiwiaW1wb3J0IHsgREFUQUdSSURfQ0hFQ0tfU0VMRUNUX0FUVFIsIFNlbGVjdGlvblR5cGUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Um93V3JhcHBlciA9IChub2RlLCBvcHRpb25zLCBzdGF0ZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIG5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0YWJsZSkge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKERBVEFHUklEX0NIRUNLX1NFTEVDVF9BVFRSLCAnJyk7XHJcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IG9wdGlvbnMuc2VsZWN0YWJsZS50eXBlID09PSBTZWxlY3Rpb25UeXBlLk1VTFRJUExFID8gJ2NoZWNrYm94JyA6ICdyYWRpbyc7XHJcbiAgICAgICAgY2hlY2tib3gudmFsdWUgPSBzdGF0ZS5kYXRhW2luZGV4XVtvcHRpb25zLnNlbGVjdGFibGUuaWRdO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzdGF0ZS5pc1NlbGVjdGVkKGNoZWNrYm94LnZhbHVlKTtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhcmVudC50b2dnbGVTZWxlY3Rpb24oY2hlY2tib3gudmFsdWUsIGNoZWNrYm94LmNoZWNrZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoJ3NmLXRhYmxlX19zZWxlY3QnKTtcclxuICAgICAgICB0ZC5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdFRhYmxlV3JhcHBlciA9IChub2RlLCBvcHRpb25zKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBvcHRpb25zLnVpLnRhYmxlQ2xhc3NOYW1lIHx8ICcnO1xyXG4gICAgbm9kZS5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICByZXR1cm4gZWw7XHJcbn07XHJcbiIsImltcG9ydCB7IGRlZmF1bHRDZWxsRWxDcmVhdG9yLCBkZWZhdWx0Q2VsbFJlbmRlcmVyIH0gZnJvbSAnLi9kZWZhdWx0Q2VsbFJlbmRlcmVyJztcclxuaW1wb3J0IHsgZGVmYXVsdEhlYWRlckNlbGxFbENyZWF0b3IsIGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXIgfSBmcm9tICcuL2RlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXInO1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDZWxsQWR2YW5jZWQocmVuZGVyKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyLmNyZWF0ZUVsICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSGVhZGVyQ2VsbEFkdmFuY2VkKHJlbmRlcikge1xyXG4gICAgcmV0dXJuIHJlbmRlci5jcmVhdGVFbCAhPT0gdW5kZWZpbmVkO1xyXG59XHJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVkQ2VsbFJlbmRlcmVyID0gKHJlbmRlcikgPT4ge1xyXG4gICAgaWYgKCFyZW5kZXIpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdENlbGxSZW5kZXJlcjtcclxuICAgIH1cclxuICAgIGlmICghaXNDZWxsQWR2YW5jZWQocmVuZGVyKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUVsOiBkZWZhdWx0Q2VsbEVsQ3JlYXRvcixcclxuICAgICAgICAgICAgcmVuZGVyLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplZEhlYWRlckNlbGxSZW5kZXJlciA9IChyZW5kZXIpID0+IHtcclxuICAgIGlmICghcmVuZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRIZWFkZXJDZWxsUmVuZGVyZXI7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzSGVhZGVyQ2VsbEFkdmFuY2VkKHJlbmRlcikpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjcmVhdGVFbDogZGVmYXVsdEhlYWRlckNlbGxFbENyZWF0b3IsXHJcbiAgICAgICAgICAgIHJlbmRlcixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufTtcclxuIiwiaW1wb3J0IHsgU29ydERpcmVjdGlvbiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUNvbHVtbnMgPSAoY29sdW1ucywgc29ydGFibGVzKSA9PiB7XHJcbiAgICBjb25zdCBzTGlzdCA9IHNvcnRhYmxlcy5tYXAoKHMpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGZpZWxkOiBzLCBkaXJlY3Rpb246IHVuZGVmaW5lZCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKChjKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkO1xyXG4gICAgICAgIGxldCB0aXRsZTtcclxuICAgICAgICBsZXQgc29ydERpcjtcclxuICAgICAgICBsZXQgc29ydGFibGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIGMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGlkID0gYztcclxuICAgICAgICAgICAgdGl0bGUgPSBjO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gU29ydERpcmVjdGlvbi5BU0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZCA9IGMuaWQ7XHJcbiAgICAgICAgICAgIHRpdGxlID0gYy50aXRsZSB8fCBjLmlkO1xyXG4gICAgICAgICAgICBzb3J0RGlyID0gYy5zb3J0RGlyIHx8IFNvcnREaXJlY3Rpb24uQVNDO1xyXG4gICAgICAgICAgICBzb3J0YWJsZSA9ICEhYy5zb3J0RGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzb3J0ID0gc0xpc3QuZmluZCgocykgPT4gKHMuZmllbGQgPT09IGlkKSk7XHJcbiAgICAgICAgaWYgKHNvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc29ydC5kaXJlY3Rpb24gfHwgc29ydERpcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBzb3J0YWJsZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBzb3J0RGlyLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFwcGx5QXR0cnJpYnV0ZXMgPSAobm9kZSwgYXR0cnMpID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhzb21ldGhpbmcpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygc29tZXRoaW5nID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3NwaXJhbF90b29sa2l0X2NvcmVfXzsiXSwic291cmNlUm9vdCI6IiJ9