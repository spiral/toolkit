/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import core from '@spiral-toolkit/core';

import FormToObject from './formToObject';
import formMessages from './formMessages';
import iterateInputs from './iterateInputs';

import './styles.css';

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
Form.prototype = core.createModulePrototype();

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
  this.mixMessagesOptions();
  // this.options.fillFrom && this.fillFieldsFrom(); // id required to fill form

  /**
     * @extends DOMEvents
     * @type {DOMEvents}
     * @inheritDoc
     * */
  this.DOMEvents = new this.sf.helpers.DOMEvents();
  this.addEvents();

  this.events = new this.sf.core.Events(['beforeSend', 'success', 'error', 'always']);
  core.iterateInputs = iterateInputs;
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
    processor(node) { // Processor
      return node;
    },
  },
  /**
     * Link to 'this'
     */
  self: {
    processor() {
      return this;
    },
  },
  id: {
    // eslint-disable-next-line no-plusplus
    value: `form:${idCounter++}`,
    domAttr: 'id',
  },
  /**
     * URL to send form (if ajax form) <b>Default: "/"</b>
     */
  url: {
    domAttr: 'action',
    value: '/',
  },
  /**
     * Method to send to send form (if ajax form) <b>Default: "POST"</b>
     */
  method: {
    domAttr: 'method',
    value: 'POST',
  },
  /**
     * Lock type when form sending <b>Default: "default"</b> @see sf.lock
     */
  lockType: {
    value: 'default',
    domAttr: 'data-lock-type',
  },
  /**
     * Force to not use FormData even if it's available
     */
  jsonOnly: {
    value: false,
    domAttr: 'data-json-only',
  },
  /**
     *
     */
  messagesType: {
    value: 'spiral',
    domAttr: 'data-messages-type',
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
    },
  },
  /**
     * Use ajax to submit form <b>Default: true</b>
     */
  useAjax: { // Attribute of form
    value: true, // Default value
    domAttr: 'data-use-ajax',
    processor(node, val) { // processor to process data before return
      if (typeof val === 'boolean') {
        return val;
      }
      val = (val !== undefined && val !== null) ? val.toLowerCase() : '';
      if (val === 'false') {
        val = false;
      } else if (val === 'true') {
        val = true;
      }
      return val;
    },
  },
  /**
     * Callback after form submitting <b>Default: false</b>
     * <br/>
     * <b> Example </b>
     * function(options){
     *  //options contains all options after send
     * }
     */
  ajaxCallback: { // attribute of form
    value: false, // Default value
    domAttr: 'data-callback',
  },
  beforeSubmitCallback: { // attribute of form
    value: false, // Default value
    domAttr: 'data-before-submit',
  },
  afterSubmitCallback: { // attribute of form
    value: false, // Default value
    domAttr: 'data-after-submit',
  },
  headers: { // attribute of form
    value: { Accept: 'application/json' }, // Default value
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
    },
  },
};

Form.prototype.mixMessagesOptions = function () {
  const global = this.sf.options.instances.form;
  this.options.messages = {
    ...formMessages.defaults,
    ...global && global.messages && global.messages[this.options.messagesType],
    ...this.options.messages,
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

  this.options.data = this.getFormData();

  // We can send files only with FormData
  // If form contain files and no FormData than disable ajax
  if (!this.options.jsonOnly && this.options.context.querySelectorAll("input[type='file']").length !== 0) {
    this.options.useAjax = false;
  }
  this.events.trigger('beforeSend', this.options);
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
 */
Form.prototype.lock = function () {
  if (!this.options.lockType || this.options.lockType === 'none') {
    return;
  }
  const lock = this.sf.addInstance('lock', this.node, { type: this.options.lockType });
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
};

// Form messages
Form.prototype.showFormMessage = formMessages.showFormMessage;
Form.prototype.showFieldMessage = formMessages.showFieldMessage;
Form.prototype.showFieldsMessages = formMessages.showFieldsMessages;
Form.prototype.showMessages = formMessages.showMessages;
Form.prototype.removeMessages = formMessages.removeMessages;
Form.prototype.removeMessage = formMessages.removeMessage;

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
  return [...this.node.querySelectorAll('input,select,textarea')].map((el) => el.getAttribute('name')); // TODO: support custom inputs too
};

Form.prototype.optCallback = function (options, type) {
  if (options[type]) {
    // eslint-disable-next-line no-eval
    const fn = eval(options[type]);
    if (typeof (fn) === 'function') {
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
  this.sf.ajax.send(sendOptions).then(
    (answer) => {
      that.events.trigger('success', sendOptions);
      return answer;
    },
    (error) => {
      that.events.trigger('error', sendOptions);
      return error;
    },
  ).then((answer) => {
    that.lock(true);
    that.processAnswer(answer);
    this.optCallback(sendOptions, 'afterSubmitCallback');
    that.events.trigger('always', sendOptions);
  });

  // To cancel request:
  // if (this.sf.ajax.cancel) this.sf.ajax.cancel();
};

/**
 * Serialize form
 * @return {Object}
 */
Form.prototype.getFormData = function () {
  if (!this.options.jsonOnly) {
    return new FormData(this.options.context);
  }
  // console.log(`Form \`${this.options.context}\` were processed without FormData.`);
  return new FormToObject(this.options.context);
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
  this.DOMEvents.add([
    {
      DOMNode: this.options.context,
      eventType: 'submit',
      eventFunction(e) {
        that.onSubmit.call(that, e);
      },
    },
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
