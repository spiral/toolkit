/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */

import core, { ISpiralFramework } from '@spiral-toolkit/core';

const Input = function (ssf: ISpiralFramework, node: Element, options: any) {
  // @ts-ignore
  this._construct(sf, node, options);
};

/**
 * @lends sf.Form.prototype
 */
Input.prototype = Object.create(core.core.BaseDOMConstructor.prototype);

/**
 * Name to register
 * @type {string}
 */
Input.prototype.name = 'input';
// @ts-ignore
Input.prototype._construct = function (sf, node, options) {
  this.init(sf, node, options); // call parent

  if (options) {
    // if we pass options extend all options by passed options
    this.options = sf.tools.extend(this.options, options);
  }

  // Elements
  this.els = {
    node,
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
    domAttr: 'data-pattern',
  },
  /**
     *  Prefix of  input
     */
  prefix: {
    domAttr: 'data-prefix',
  },
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

  // @ts-ignore
  this._inputKeyPress = function (event) {
    const char = String.fromCharCode(event.keyCode);
    const { value } = that.els.node;
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

  // @ts-ignore
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
  // @ts-ignore
  this._inputKeyDown = function (event) {
    const char = String.fromCharCode(event.keyCode);
    const { value } = that.els.node;
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
    } if (char.match(/\W/)) {
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

  // @ts-ignore
  if (document.selection) {
    this.els.node.focus();
    // @ts-ignore
    const selectRange = document.selection.createRange();

    selectRange.moveStart('character', -this.els.node.value.length);

    position = selectRange.text.length;
  } else if (this.els.node.selectionStart || this.els.node.selectionStart === '0') {
    position = this.els.node.selectionStart;
  }

  return position;
};
// @ts-ignore
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

    // @ts-ignore
    for (let i = 0; i < this.patternString.length; i += 1) {
      // @ts-ignore
      const char = this.patternString[i];

      // @ts-ignore
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

    // @ts-ignore
    this.pattern = new RegExp(`^${formattedPatternStr}$`, 'g');
    // @ts-ignore
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
  // @ts-ignore
  delete this;
};

Input.prototype.setPrefix = function () {
  this.els.node.value = `${this.options.prefix} ${this.els.node.value}`;
};

export { Input as default };
