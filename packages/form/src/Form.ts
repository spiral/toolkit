/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import sf from '@spiral-toolkit/core';
import core, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';

import type { Events } from '@spiral-toolkit/core/dist/core/Events';
import type { DOMEvents } from '@spiral-toolkit/core/dist/helpers/DOMEvents';

import { formToObject } from './formToObject';
import { formMessagesDefaults, FreeformMessage, prepareMessageObject } from './formMessages';
import { iterateInputs } from './iterateInputs';

import './styles.css';


let idCounter = 1;

const {CUSTOM_INPUT_TARGET_ATTR} = core.constants;
const {isNodeInsideCustomSFInput} = core.tools;

export type IMessagesOptions = any;

export interface IFormOptions {
  id: string;
  url: string;
  data?: any;
  immediate?: number;
  lockType: string;
  headers: { [header: string]: string };
  messagesType: string;
  onProgress?: (total: number, progress: number) => any,
  messages?: IMessagesOptions;
  useAjax: boolean;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
  jsonOnly?: boolean;
}

export interface IMessage {
  el: HTMLElement,
  close: HTMLElement,
  field?: HTMLElement,
  type?: string,
  closeHandler?: (e: MouseEvent) => any,
}

export class Form extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'form';
  static readonly spiralFrameworkCss: string = 'js-sf-form';
  static registerInSf = () => {
    sf.registerInstanceType(Form, Form.spiralFrameworkCss);
  };
  static readonly defaultOptions: IFormOptions = {
    id: '',
    url: '/',
    useAjax: true,
    headers: {Accept: 'application/json'},
    method: 'POST',
    lockType: 'default',
    messagesType: 'spiral', // TODO: are there other ones?
  };

  public readonly name = Form.spiralFrameworkName;
  public defaultValues: any;
  public prevValues: any;
  public options: IFormOptions = {...Form.defaultOptions};
  public DOMEvents: DOMEvents;
  public events: Events;
  private submitTimeout?: NodeJS.Timeout;

  optionsToGrab: { [key: string]: IOptionToGrab } = {
    id: {
      value: Form.defaultOptions.id,
      domAttr: 'id',
    },
    url: {
      domAttr: 'action',
      value: Form.defaultOptions.url,
    },
    method: {
      domAttr: 'method',
      value: Form.defaultOptions.method,
    },
    /**
     * If any input changes should trigger form submit
     * Value is debounce value
     */
    immediate: {
      domAttr: 'data-immediate',
      value: Form.defaultOptions.immediate,
      processor(node: Element, val: any) {
        if (!val) return undefined;
        return +val;
      },
    },
    /**
     * Lock type when form sending <b>Default: "default"</b> @see sf.lock
     */
    lockType: {
      value: Form.defaultOptions.lockType,
      domAttr: 'data-lock-type',
    },
    /**
     * Force to not use FormData even if it's available
     */
    jsonOnly: {
      value: Form.defaultOptions.jsonOnly,
      domAttr: 'data-json-only',
    },
    /**
     *
     */
    messagesType: {
      value: Form.defaultOptions.messagesType,
      domAttr: 'data-messages-type',
    },
    /**
     * Pass custom template for form messages
     */
    messages: {
      value: Form.defaultOptions.messages,
      domAttr: 'data-messages',
      processor(node: Element, val: any, self: any) {
        if (!val) return this.value;
        if (typeof val === 'string') {
          try {
            val = JSON.parse(val);
          } catch (e) {
            console.error('Form JSON.parse error: ', e);
          }
        }
        return Object.assign(self.value || {}, val);
      },
    },
    /**
     * Use ajax to submit form <b>Default: true</b>
     */
    useAjax: { // Attribute of form
      value: Form.defaultOptions.useAjax, // Default value
      domAttr: 'data-use-ajax',
      processor(node: Element, val: any) { // processor to process data before return
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
      value: Form.defaultOptions.headers,
      domAttr: 'data-headers',
      processor(node: Element, val: any, self: any) {
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
  }

  constructor(ssf: ISpiralFramework, node: Element, options: Partial<IFormOptions>) {
    super();
    this.init(ssf, node, options, Form.defaultOptions);
    if (!this.options.id) {
      // eslint-disable-next-line no-plusplus
      this.options.id = `form:${idCounter++}`;
    }
    this.options.jsonOnly = !!this.options.jsonOnly && !!window.FormData;
    this.options.messages = {
      ...formMessagesDefaults,
      ...this.options.messages,
    }

    this.defaultValues = this.getFormData();
    this.prevValues = {};

    this.DOMEvents = new this.sf.helpers.DOMEvents();
    this.addEvents();
    this.events = new this.sf.core.Events(['beforeSend', 'success', 'error', 'always']);
  }


  public messages: Array<IMessage> = [];

  showMessages(answer: { data: any, status?: number, statusText?: string } | undefined, showUnknown: boolean = true) {
    if (!answer) return;

    let isMsg = false;
    const that = this;

    if (answer.data) {
      // for (const type in this.options.messages.levels) {
      Object.keys(this.options.messages.levels).forEach((type) => {
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
      if (!answer.status) { // Network.error
        error = answer;
      } else if (answer.status > 300) {
        error = answer.status ? `${answer.status} ` : '';
        error += answer.statusText ? answer.statusText : '';
        error += answer.data && !answer.statusText ? answer.data : '';
      }
      if (error) this.showFormMessage(error as any, this.options.messages.levels.error);
    }

    this.messages.forEach((m) => {
      if (m.close) {
        m.closeHandler = this.removeMessage.bind(this, m);
        m.close.addEventListener('click', m.closeHandler);
      }
    });
  };

  removeMessage(m: IMessage, e?: MouseEvent) {
    if (m.close && m.closeHandler) {
      m.close.removeEventListener('click', m.closeHandler);
    }
    m.el.parentNode?.removeChild(m.el);
    if (m.field && m.type) {
      const fieldEl = m.field.querySelector(this.options.messages.fieldElement);
      if (fieldEl) {
        fieldEl.classList.remove(this.options.messages.fieldClasses[m.type]);
      } else {
        m.field.classList.remove(this.options.messages.fieldClasses[m.type]);
      }
    }
    if (e) {
      if (e.preventDefault) e.preventDefault();
      this.messages.splice(this.messages.indexOf(m), 1);
    }
  };

  removeMessages() {
    if (this.messages) {
      this.messages.forEach((m) => {
        this.removeMessage(m);
      });
    }
    this.messages = [];
  };

  showFormMessage(rawMessage: FreeformMessage, type: string) {
    let parent;
    let tpl = this.options.messages.template;

    const message = prepareMessageObject(rawMessage, type);

    // for (const item in message) {
    Object.keys(message).forEach((item: string) => {
      tpl = tpl.replace(`\${${item}}`, (message as any)[item] || '');
    });

    const tplElem = document.createElement('div');
    tplElem.innerHTML = tpl;
    const msgEl: HTMLElement = tplElem.firstChild! as HTMLElement;
    if(!msgEl) {
      console.error('Form message template is invalid, should generate single HTMLElement', tpl);
      return;
    }

    if (this.options.messages.place === 'bottom') {
      this.node.appendChild(msgEl);
    } else if (this.options.messages.place === 'top') {
      this.node.insertBefore(msgEl, this.node.firstChild);
    } else {
      parent = document.querySelector(this.options.messages.place);
      parent.appendChild(msgEl);
    }
    this.messages.push({el: msgEl, close: msgEl.querySelector(this.options.messages.close), type});
  }

  /**
   * @param {HTMLElement} el
   * @param {String} message
   * @param {String} type
   * @param {Boolean} [isContainer]
   */
  showFieldMessage(el: HTMLElement, rawMessage: FreeformMessage, type: string, isContainer: boolean = false) {
    let field: HTMLElement = isContainer ? el : sf.helpers.domTools.closest(el, this.options.messages.field) as HTMLElement;
    let tpl = this.options.messages.fieldTemplate;

    if (!field) {
      return;
    }

    const message = prepareMessageObject(rawMessage, type);

    const fieldEl = field.querySelector(this.options.messages.fieldElement);
    const currentMsgEl = field.querySelector(this.options.messages.selector);

    if (fieldEl) {
      fieldEl.classList.add(this.options.messages.fieldClasses[type]);
    } else {
      field.classList.add(this.options.messages.fieldClasses[type]);
    }

    // for (const item in message) {
    Object.keys(message).forEach((item) => {
      // eslint-disable-next-line no-prototype-builtins
      if (!message.hasOwnProperty(item)) return;
      tpl = tpl.replace(`\${${item}}`, (message as any)[item] || '');
    });

    const tplElem = document.createElement('div');
    tplElem.innerHTML = tpl;
    const msgEl: HTMLElement = tplElem.firstChild! as HTMLElement;

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

    this.messages.push({
      el: msgEl,
      close: msgEl.querySelector(this.options.messages.fieldClose),
      field,
      type,
    });
  };

  showFieldsMessages(messages: {[messageKey: string]: any}, type: string, showUnknown = true) {
    const notFound = iterateInputs(this.node, messages, (el, message) => {
      this.showFieldMessage(el as HTMLElement, message, type);
    });

    if (showUnknown) {
      notFound.forEach((msgObj) => {
        Object.keys(msgObj).forEach((name) => {
          const container = this.node.querySelector(`[data-message-placeholder="${name}"]`);
          if (container) {
            // TODO check container.dataset.messageVariant? variants are "field" and "form"
            this.showFieldMessage(container as HTMLElement, msgObj[name], type, true);
          }
        });
      });
    }
  };

  onDebouncedSubmit(e: UIEvent) {
    if (this.options.immediate) {
      if (!this.options.jsonOnly) {
        console.error('Should not used immediate forms on non json forms');
        return false;
      }
      const el = e.target as Element;
      if (isNodeInsideCustomSFInput(el)) {
        // Don't parse inputs that are used as helpers
        return false;
      }
      if (el.getAttribute('name')) {
        const name = el.getAttribute('name')!;
        const data = this.getFormData();
        // eslint-disable-next-line eqeqeq
        if (this.prevValues[name] != (data as any)[name]) {
          this.prevValues[name] = (data as any)[name];
        } else {
          return false;
        }
      }
      if (this.sf.getInstance('lock', this.node)) {
        // On lock we should'n do any actions
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      if(this.submitTimeout) {
        clearTimeout(this.submitTimeout);
      }
      this.submitTimeout = setTimeout(() => {
        this.onSubmit(e);
      }, this.options.immediate);
    }

    return true;
  }

  onSubmit(e: UIEvent) {
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
    if (this.options.jsonOnly && this.node.querySelectorAll('input[type=\'file\']').length !== 0) {
      this.options.useAjax = false;
    }

    this.events.trigger('beforeSend', this.options);

    if (this.options.useAjax) {
      this.send(this.options);

      e.preventDefault();
      e.stopPropagation();
    }
  };

  lock() {
    if (!this.options.lockType || this.options.lockType === 'none') {
      return;
    }
    const lock = this.sf.addInstance('lock', this.node, {type: this.options.lockType});
    if (!lock) {
      console.warn('You try to add \'lock\' instance, but it is not available or already started');
      return;
    }
    this.options.onProgress = (lock as any).progress;
  }

  unlock() {
    if (!this.options.lockType || this.options.lockType === 'none') {
      return;
    }
    if (!this.sf.removeInstance('lock', this.node)) {
      console.warn('You try to remove \'lock\' instance, but it is not available or not started');
    }
  }

  processAnswer(answer: { data: any, status?: number, statusText?: string } | undefined, showUnknown = true) {
    if (this.options.messagesType) {
      this.showMessages(answer, showUnknown);
    }
  }

  setFieldValues(values: {[name: string]: any}) {
    iterateInputs(this.node, values, (rawEl, value) => {
      const el = (rawEl as HTMLInputElement & {sfSetValue?: Function});
      if (el.hasAttribute(CUSTOM_INPUT_TARGET_ATTR) && typeof el.sfSetValue === 'function') {
        el.sfSetValue(value);
      } else {
        if (el.type === 'checkbox' || el.type === 'radio') {
          if (!el.value) { // single checkbox
            el.checked = !!value;
          } else {
            // eslint-disable-next-line eqeqeq,max-len
            el.checked = Array.isArray(value) ? (value.indexOf(el.value) >= 0) : (el.value == value);
          }
        }
        el.value = value; // TODO: That wont work for radiogroups, etc.
      }
    });
  }

  enumerateFieldNames() {
    // console.log(this.node.querySelectorAll('input,select,textarea'));
    return Array.prototype.slice.call(this.node.querySelectorAll('input,select,textarea')).map((el) => el.getAttribute('name')); // TODO: support custom inputs too
  }

  optCallback(options: any, type: string) {
    if (options[type]) {
      // eslint-disable-next-line no-eval
      const fn = eval(options[type]);
      if (typeof (fn) === 'function') {
        return fn.call(this, options);
      }
    }
    return undefined;
  }

  send(sendOptions: {
    data?: any,
    method: 'GET' | 'POST' | 'PATCH' | 'get' | 'post' | 'patch' | 'PUT' | 'put' | 'DELETE' | 'delete',
    headers?: { [key: string]: string },
    url: string,
    onProgress?: (total: number, progress: number) => any,
    response?: any
  }) {
    if (this.optCallback(sendOptions, 'beforeSubmitCallback') === false) {
      return;
    }
    this.lock();
    this.sf.ajax.send(sendOptions).then(
      (answer) => {
        this.events.trigger('success', sendOptions);
        return answer;
      },
      (error) => {
        this.events.trigger('error', sendOptions);
        return error;
      },
    ).then((answer) => {
      this.unlock();
      this.processAnswer(answer);
      this.optCallback({...sendOptions, response: answer}, 'afterSubmitCallback');
      this.events.trigger('always', sendOptions);
    });

    // To cancel request:
    // if (this.sf.ajax.cancel) this.sf.ajax.cancel();
  }

  getFormData() {
    if (!this.options.jsonOnly) {
      // IE11 will try sending unnamed inputs and will ruin everything, so disable them
      this.node.querySelectorAll('input,textarea,select').forEach((input) => {
        if (!(input as HTMLInputElement).name) {
          if (!input.hasAttribute('disabled')) {
            input.setAttribute('data-sf-temp-disabled-old', 'yes');
            input.setAttribute('disabled', "disabled");
          }
        }
      });
      const result = new FormData(this.node as HTMLFormElement);
      // Recover inputs that were not intended to be disabled
      this.node.querySelectorAll('input,textarea,select').forEach((input) => {
        if (!(input as HTMLInputElement).name) {
          const shouldRemoveDisabled = input.getAttribute('data-sf-temp-disabled-old');
          if (shouldRemoveDisabled) {
            input.removeAttribute('disabled');
          }
          input.removeAttribute('data-sf-temp-disabled-old');
        }
      });
      return result;
    }
    return formToObject(this.node);
  }

  setOptions(opt: Partial<IFormOptions>) {
    this.options = {...this.options, ...opt};
  }

  addEvents() {
    this.DOMEvents.add([
      {
        DOMNode: this.node,
        eventType: 'submit',
        eventFunction: (e) => {
          this.onSubmit(e);
        },
      },
      {
        DOMNode: this.node,
        eventType: 'reset',
        eventFunction: (e) => {
          // setTimeout(() => {
          //   this.onSubmit(e);
          // });
        },
      },
      {
        DOMNode: this.node,
        eventType: 'change',
        eventFunction: (e) => {
          this.onDebouncedSubmit(e);
        },
      },
      {
        DOMNode: this.node,
        eventType: 'input',
        eventFunction: (e) => {
          this.onDebouncedSubmit(e);
        },
      },
    ]);
  }

  die() {
    this.DOMEvents.removeAll();
    // TODO don't we need to remove it's addons and plugins?
  }
}
