"use strict";

var defaults = {
    template: '<div class="alert form-msg ${type}"><button class="btn-close">×</button><p class="msg">${text}</p></div>',
    close: '.btn-close',
    place: 'bottom',
    levels: {
        success: "success", info: "info", warning: "warning", error: "error"
    },
    field: '.item-form',
    fieldTemplate: '<div class="alert form-msg ${type}"><p class="msg">${text}</p></div>',
    fieldClose: '.btn-close',
    fieldPlace: 'bottom',
    fieldPrefix: '' // For bootstrap: class="has-danger"
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
    if (Object.prototype.toString.call(message) !== "[object Object]") {
        message = {text: message, type: type};
    }
    message.text = message.text || message.message || message;
    message.type = message.type || type;
    return message;
}

module.exports = {
    defaults: defaults,
    showMessages: function (answer) {
        if (!answer) return;

        var isMsg = false;
        var that = this;

        for (var type in this.options.messages.levels) {
            if (answer[type]) {
                this.showFormMessage(answer[type], this.options.messages.levels[type]);
                isMsg = true;
            }
        }

        if (answer.messages) {
            this.showFieldsMessages(answer.messages, "success");
            isMsg = true;
        }
        if (answer.errors) {
            this.showFieldsMessages(answer.errors, "error");
            isMsg = true;
        }
        if (answer.warnings) {
            this.showFieldsMessages(answer.warnings, "warning");
            isMsg = true;
        }

        if (!isMsg && answer.status > 300) {
            var error = answer.status ? answer.status + " " : "";
            error += answer.statusText ? answer.statusText : "";
            error += answer.data && !answer.statusText ? answer.data : "";
            error += error.length === 0 ? answer : "";
            this.showFormMessage(error, "error");
        }

        this._messages.forEach(function (m) {
            if (m.close) {
                m.closeHandler = that.removeMessage.bind(that, m);
                m.close.addEventListener("click", m.closeHandler);
            }
        });
    },
    removeMessage: function (m, e) {
        m.close && m.close.removeEventListener("click", m.closeHandler);
        m.el.parentNode.removeChild(m.el);
        m.field && m.field.classList.remove(this.options.messages.fieldPrefix + m.type);
        if (e) {
            e.preventDefault && e.preventDefault();
            this._messages.splice(this._messages.indexOf(m), 1);
        }
    },
    removeMessages: function () {
        var that = this;
        if (this._messages) {
            this._messages.forEach(function (m) {
                that.removeMessage(m, false);
            });
        }
        that._messages = [];
    },
    showFormMessage: function (message, type) {
        var msgEl;
        var parent;
        var tpl = this.options.messages.template;
        var parser = new DOMParser();

        message = prepareMessageObject(message, type);

        for (var item in message) {
            if (!message.hasOwnProperty(item)) return;
            tpl = tpl.replace('${' + item + '}', message[item]);
        }

        msgEl = parser.parseFromString(tpl, "text/html").firstChild.lastChild.firstChild;

        if (this.options.messages.place === "bottom") {
            this.node.appendChild(msgEl);
        } else if (this.options.messages.place === "top") {
            this.node.insertBefore(msgEl, this.node.firstChild);
        } else {
            parent = document.querySelector(this.options.messages.place);
            parent.appendChild(msgEl);
        }
        this._messages.push({el: msgEl, close: msgEl.querySelector(this.options.messages.close)});
    },
    /**
     * @param {HTMLElement} el
     * @param {String} message
     * @param {String} type
     * @param {Boolean} [isContainer]
     */
    showFieldMessage: function (el, message, type, isContainer) {
        var field = isContainer ? el : sf.helpers.domTools.closest(el, this.options.messages.field);
        var msgEl;
        var tpl = this.options.messages.fieldTemplate;

        if (!field) return;

        var parser = new DOMParser();
        message = prepareMessageObject(message, type);

        field.classList.add(this.options.messages.fieldPrefix + type);

        for (var item in message) {
            if (!message.hasOwnProperty(item)) return;
            tpl = tpl.replace('${' + item + '}', message[item]);
        }

        msgEl = parser.parseFromString(tpl, "text/html").firstChild.lastChild.firstChild;

        if (this.options.messages.fieldPlace === "bottom") {
            field.appendChild(msgEl);
        } else if (this.options.messages.fieldPlace === "top") {
            field.insertBefore(msgEl, field.firstChild);
        } else {
            field = field.querySelector(this.options.messages.fieldPlace);
            field.appendChild(msgEl);
        }

        this._messages.push({
            el: msgEl,
            close: msgEl.querySelector(this.options.messages.fieldClose),
            field: field,
            type: type
        });
    },
    showFieldsMessages: function (messages, type) {
        var that = this;
        var notFound = sf.iterateInputs(this.node, messages, function (el, message) {
            that.showFieldMessage(el, message, type);
        });

        notFound.forEach(function (msgObj) {
            Object.keys(msgObj).forEach(function (name) {
                var container = that.node.querySelector('[data-message-placeholder="' + name + '"]');
                if (container) {
                    // TODO check container.dataset.messageVariant? variants are "field" and "form"
                    that.showFieldMessage(container, msgObj[name], type, true);
                }
            });
        });
    }
};
