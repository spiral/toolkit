/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-template-curly-in-string */

const defaults = {
  // template: '<div class="alert form-msg ${type}"><button class="btn-close">×</button><p class="msg">${text}</p></div>',
  template: '<div class="alert alert-${type} alert-dismissible fade show" role="alert">'
    + '${text}'
    + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
    + '<span aria-hidden="true">&times;</span>'
    + '</button>'
    + '</div>',
  close: '.close',
  place: 'bottom',
  levels: {
    success: 'success', info: 'info', warning: 'warning', error: 'danger',
  },
  selector: '[data-message]',
  field: '[data-field]',
  fieldElement: '[data-input]',
  fieldTemplate: '<div data-message class="invalid-feedback" data-form-message>${text}</div>',
  fieldPlace: 'bottom',
  fieldClasses: {
    success: 'is-valid', info: 'is-valid', warning: 'is-invalid', error: 'is-invalid',
  },
};

// Often used alias
defaults.levels.message = defaults.levels.success;

// Other aliases
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
    message = { text: message, type };
  }
  message.text = message.text || message.message || message;
  message.type = message.type || type;
  return message;
}

module.exports = {
  defaults,
  showMessages(answer) {
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
        this.showFieldsMessages(answer.data.messages, 'success');
        isMsg = true;
      }
      if (answer.data.errors) {
        this.showFieldsMessages(answer.data.errors, 'error');
        isMsg = true;
      }
      if (answer.data.warnings) {
        this.showFieldsMessages(answer.data.warnings, 'warning');
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
      this.showFormMessage(error, this.options.messages.levels.error);
    }

    this._messages.forEach((m) => {
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
      this._messages.forEach((m) => {
        that.removeMessage(m, false);
      });
    }
    that._messages = [];
  },
  showFormMessage(message, type) {
    let parent;
    let tpl = this.options.messages.template;

    message = prepareMessageObject(message, type);

    // for (const item in message) {
    Object.keys(message).forEach((item) => {
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
    this._messages.push({ el: msgEl, close: msgEl.querySelector(this.options.messages.close) });
  },
  /**
     * @param {HTMLElement} el
     * @param {String} message
     * @param {String} type
     * @param {Boolean} [isContainer]
     */
  showFieldMessage(el, message, type, isContainer) {
    let field = isContainer ? el : window.sf.helpers.domTools.closest(el, this.options.messages.field);
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
    }

    // for (const item in message) {
    Object.keys(message).forEach((item) => {
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
      type,
    });
  },
  showFieldsMessages(messages, type) {
    const that = this;
    const notFound = window.sf.iterateInputs(this.node, messages, (el, message) => {
      that.showFieldMessage(el, message, type);
    });

    notFound.forEach((msgObj) => {
      Object.keys(msgObj).forEach((name) => {
        const container = that.node.querySelector(`[data-message-placeholder="${name}"]`);
        if (container) {
          // TODO check container.dataset.messageVariant? variants are "field" and "form"
          that.showFieldMessage(container, msgObj[name], type, true);
        }
      });
    });
  },
};
