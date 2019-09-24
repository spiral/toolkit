/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */

import core from '@spiral-toolkit/core';
import './styles.css';

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
Lock.prototype = core.createModulePrototype();

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
  this.add(this.options.type, this.node);
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
  node.classList.add(this.types[type].className || 'locker');
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
    html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
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
    },
  },
};

// We have to have some default locker, let it be spinner
Lock.prototype.types.default = Lock.prototype.types.spinner;


export default Lock;
