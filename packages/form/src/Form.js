"use strict";

import sf from '@spiral-toolkit/core';

var formMessages = require("./formMessages");
var iterateInputs = require("./iterateInputs");
import FormToObject from './formToObject';

/**
 * Spiral Forms
 * @param {Object} sf
 * @param {Object} node  DomNode of form
 * @param {Object} [options] all options to override default
 * @constructor Form
 * @extends BaseDOMConstructor
 */
var Form = function (sf, node, options) {
    this._construct(sf, node, options);
};


/**
 * @lends sf.Form.prototype
 */
Form.prototype = sf.createModulePrototype();

/**
 * Name to register
 * @type {string}
 */
Form.prototype.name = "form";

/**
 * Function that call on new instance is created.
 * @param {Object} sf
 * @param {Object} node  DomNode of form
 * @param {Object} [options] all options to override default
 * @private
 */
Form.prototype._construct = function (sf, node, options) {
    this.init(sf, node, options);
    this.mixMessagesOptions();
    // this.options.fillFrom && this.fillFieldsFrom(); // id required to fill form

    /**
     * @extends DOMEvents
     * @type {DOMEvents}
     * @inheritDoc
     * */
    this.DOMEvents = new this.sf.helpers.DOMEvents();
    this.addEvents();

    this.events = new this.sf.core.Events(["beforeSend", "success", "error", "always"]);
    sf.iterateInputs = iterateInputs;
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
    "context": {
        processor: function (node, val) { // Processor
            return node;
        }
    },
    /**
     * Link to 'this'
     */
    "self": {
        processor: function (node, val) {
            return this;
        }
    },
    /**
     * URL to send form (if ajax form) <b>Default: "/"</b>
     */
    "url": {
        domAttr: "action",
        value: "/"
    },
    /**
     * Method to send to send form (if ajax form) <b>Default: "POST"</b>
     */
    "method": {
        domAttr: "method",
        value: "POST"
    },
    /**
     * Lock type when form sending <b>Default: "default"</b> @see sf.lock
     */
    "lockType": {
        value: "default",
        domAttr: "data-lockType"
    },
    /**
     *
     */
    "messagesType": {
        value: "spiral",
        domAttr: "data-messagesType"
    },
    /**
     * Pass custom template for form messages
     */
    "messages": {
        value: "",
        domAttr: "data-messages",
        processor: function (node, val, self) {
            if (!val) return this.value;
            if (typeof val == "string") {
                try {
                    val = JSON.parse(val);
                } catch (e) {
                    console.error("Form JSON.parse error: ", e);
                }
            }
            return Object.assign(self.value, val);
        }
    },
    /**
     * Use ajax to submit form <b>Default: true</b>
     */
    "useAjax": { // Attribute of form
        value: true, // Default value
        domAttr: "data-useAjax",
        processor: function (node, val) { // processor to process data before return
            if (typeof val === "boolean") {
                return val;
            }
            val = (val !== void 0 && val !== null) ? val.toLowerCase() : '';
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
    "ajaxCallback": { // attribute of form
        value: false, // Default value
        domAttr: "data-callback"
    },
    "beforeSubmitCallback": {// attribute of form
        value: false, // Default value
        domAttr: "data-before-submit"
    },
    "afterSubmitCallback": {// attribute of form
        value: false, // Default value
        domAttr: "data-after-submit"
    },
    "headers": {// attribute of form
        value: {"Accept": "application/json"}, // Default value
        domAttr: "data-headers",
        processor: function (node, val, self) {
            if (val === void 0 || val == null) return this.value;
            if (typeof val == "string") {
                try {
                    val = JSON.parse(val);
                } catch (e) {
                    console.error("Form JSON.parse error: ", e);
                }
            }
            return Object.assign(self.value, val);
        }
    }
};

Form.prototype.mixMessagesOptions = function () {
    var global = this.sf.options.instances.form;
    this.options.messages = Object.assign({},
        formMessages.defaults,
        global && global.messages && global.messages[this.options.messagesType],
        this.options.messages
    );
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

    this.options.data = this.getFormData();

    // We can send files only with FormData
    // If form contain files and no FormData than disable ajax
    if (!window.FormData && this.options.context.querySelectorAll("input[type='file']").length !== 0) {
        this.options.useAjax = false;
    }
    this.events.trigger("beforeSend", this.options);
    // sf.events.performAction("beforeSubmit", this.options);
    // this.events.performAction("beforeSubmit", this.options);

    if (this.options.useAjax) {
        this.send(this.options);

        e.preventDefault();
        e.stopPropagation();
    }
};

/**
 * Locker. Add or remove.
 * @param {Boolean} [remove]
 */
Form.prototype.lock = function (remove) {
    if (!this.options.lockType || this.options.lockType === 'none') {
        return;
    }
    if (remove) {
        if (!this.sf.removeInstance("lock", this.node)) {
            console.warn("You try to remove 'lock' instance, but it is not available or not started");
        }
    } else {
        if (!this.sf.addInstance("lock", this.node, {type: this.options.lockType})) {
            console.warn("You try to add 'lock' instance, but it is not available or already started");
        }
    }
};

// Form messages
Form.prototype.showFormMessage = formMessages.showFormMessage;
Form.prototype.showFieldMessage = formMessages.showFieldMessage;
Form.prototype.showFieldsMessages = formMessages.showFieldsMessages;
Form.prototype.showMessages = formMessages.showMessages;
Form.prototype.removeMessages = formMessages.removeMessages;
Form.prototype.removeMessage = formMessages.removeMessage;

Form.prototype.processAnswer = function (answer) {
    this.options.messagesType && this.showMessages(answer);
};

/**
 * Send form to server
 * @param {Object} sendOptions
 */
Form.prototype.send = function (sendOptions) {
    var that = this;
    this.lock();
    if (sendOptions.beforeSubmitCallback) {
        var fn = eval(sendOptions.beforeSubmitCallback);
        if (typeof(fn) === "function") {
            fn.call(sendOptions);
        }
    }
    this.sf.ajax.send(sendOptions).then(
        function (answer) {
            that.events.trigger("success", sendOptions);
            return answer;
        },
        function (error) {
            that.events.trigger("error", sendOptions);
            return error;
        }).then(function (answer) {
        that.lock(true);
        that.processAnswer(answer);
        that.events.trigger("always", sendOptions);
    });
};

/**
 * Serialize form
 * @return {Object}
 */
Form.prototype.getFormData = function () {
    if (!!window.FormData) {
        return new FormData(this.options.context);
    } else {
        console.log("Form `" + this.options.context + "` were processed without FormData.");
        return new FormToObject(this.options.context);
    }
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
    var that = this;
    this.DOMEvents.add([
        {
            DOMNode: this.options.context,
            eventType: "submit",
            eventFunction: function (e) {
                that.onSubmit.call(that, e);
            }
        }
    ]);
};

/**
 * Clear all variables and die
 */
Form.prototype.die = function () {
    this.DOMEvents.removeAll();
    // TODO don't we need to remove it's addons and plugins?
};

export default Form;
