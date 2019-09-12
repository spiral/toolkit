"use strict";
import sf from '@spiral-toolkit/core';

/**
 * Spiral lock for forms
 * @constructor Lock
 */

var Lock = function (sf, node, options) {
    this._construct(sf, node, options);
};

/**
 * @lends Lock.prototype
 */
Lock.prototype = sf.createModulePrototype();

/**
 * Name of module
 * @type {string}
 */
Lock.prototype.name = "lock";

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
    if (!this.types.hasOwnProperty(type)) {
        return false;
    }
    var node = document.createElement("div");
    node.className = this.types[type].className || 'js-sf-lock';
    node.innerHTML = this.types[type].html;
    context.appendChild(node);
    context.classList.add("locked");
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
    this.node.classList.remove("locked");
    var sfLock = this.node.querySelector(".js-sf-lock"); // TODO this.lockNode ?
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
        html: '<div class="sf-spinner"></div>'
    },
    progress: {
        /**
         * HTML
         * @inner
         * @type String
         */
        html: '<div class="sf-progress"><div class="progress-line"></div></div>',
        /**
         * Function to change styles while AJAX progress
         * @param {Number} current
         * @param {Number} total
         */
        progress: function (current, total) {
            var progress = this.context.getElementsByClassName("progress-line")[0];
            progress.style.width = 100 * (current / total) + "%";
        }
    }
};

// We have to have some default locker, let it be spinner
Lock.prototype.types.default = Lock.prototype.types.spinner;


export default Lock;
