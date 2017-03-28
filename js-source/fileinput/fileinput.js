"use strict";

import sf from "sf-core";

var FileInput = function(sf, node, options) {
    this._construct(sf, node, options);
};

/**
 * @lends sf.Form.prototype
 */
FileInput.prototype = Object.create(sf.core.BaseDOMConstructor.prototype);

/**
 * Name to register
 * @type {string}
 */
FileInput.prototype.name = "fileInput";

FileInput.prototype._construct = function(sf, node, options) {
    this.init(sf, node, options); // call parent

    if (options) {
        // if we pass options extend all options by passed options
        this.options = sf.tools.extend(this.options, options);
    }


    // Elements
    this.els = {
        node: node
    };

    if (this.options.file) {
        this.addFileEventListeners();
    }
};

/**
 * @override
 * @inheritDoc
 * @enum {string}
 */
FileInput.prototype.optionsToGrab = {
    /**
     *  File input
     */
    "file": {
        "domAttr": "data-file"
    }
};

/**
 * Adds static events listeners.
 */
FileInput.prototype.addFileEventListeners = function() {
    var that = this;
    this._inputChange = function(e) {
        var label = that.els.node.nextElementSibling;
        var labelVal = label.innerHTML;

        var fileName = '';

        if (that.els.node.files && that.els.node.files.length > 1) {
            fileName = ( that.els.node.getAttribute('data-multiple-text') || '{count} files selected' ).replace('{count}', that.els.node.files.length);
        } else {
            fileName = e.target.value.split('\\').pop();
        }

        if (fileName) {
            label.querySelector('span').innerHTML = fileName;
        } else {
            label.innerHTML = labelVal;
        }
    };

    this._inputBlur = function() {
        that.els.node.classList.add('has-focus');
    };

    this._inputFocus = function() {
        that.els.node.classList.remove('has-focus');
    };

    if (this.els.node) {
        this.els.node.addEventListener('change', this._inputChange);
        this.els.node.addEventListener('blur', this._inputBlur);
        this.els.node.addEventListener('foxus', this._inputFocus);
    }
};

FileInput.prototype.removeFileEventListeners = function() {
    if (this.els.node) {
        this.els.node.removeEventListener('change', this._inputChange);
        this.els.node.removeEventListener('focus', this._inputFocus);
        this.els.node.removeEventListener('blur', this._inputBlur);
    }
};

FileInput.prototype.die = function() {
    if (this.options.file) {
        this.removeFileEventListeners();
    }
    delete this;
};

export {FileInput as default};
