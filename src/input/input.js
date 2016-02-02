"use strict";

import sf from 'sf';//resolved in webpack's "externals"

var Input = function (sf, node, options) {
    this._construct(sf, node, options);
};

/**
 * @lends sf.Form.prototype
 */
Input.prototype = Object.create(sf.modules.core.BaseDOMConstructor.prototype);

/**
 * Name to register
 * @type {string}
 */
Input.prototype.name = "input";

Input.prototype._construct = function (sf, node, options) {

    this.init(sf, node, options);//call parent


    if (options) {//if we pass options extend all options by passed options
        this.options = sf.tools.extend(this.options, options);
    }

    node.value = this.options.prefix + " " + node.value;

    //elements
    this.els = {
        node: node
    };

    this.addEventListeners();
};


/**
 * @override
 * @inheritDoc
 * @enum {string}
 */
Input.prototype.optionsToGrab  = {
    /**
     *  Mask of input
     */
    "mask": {
        "domAttr": "data-mask"
    },
    /**
     *  Prefix of  input
     */
    "prefix": {
        "domAttr": "data-prefix"
    }

};


/**
 * Adds static events listeners.
 */
Input.prototype.addEventListeners = function () {
    var that = this;

    this._inputKeyup = function(){

        var oldValue = this.getAttribute('data-prefix');

        if( that.els.node.value.indexOf(oldValue) !== 0 ){
            that.els.node.value = oldValue + ' ';
        }
    };
    if (this.els.node) {
        this.els.node.addEventListener('keyup', this._inputKeyup);
    }
};

Input.prototype.removeEventListeners = function () {
    if (this.els.node) {
        this.els.node.removeEventListener('keyup', this._inputKeyup);
    }
};

Input.prototype.die = function () {
    this.removeEventListeners();
    delete this;
};

export { Input as default };


