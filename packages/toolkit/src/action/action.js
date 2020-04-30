import sf from '@spiral-toolkit/core';

const { handlebars } = sf.helpers;
const { ajax } = sf;

export class Action extends sf.core.BaseDOMConstructor {
    static spiralFrameworkName = 'action';

    static spiralFrameworkCssClass = 'js-sf-action';

    name = Action.spiralFrameworkName;

    static defaultOptions = {
      data: {},
      headers: { Accept: 'application/json' },
      method: 'POST',
      url: '',
      template: undefined,
      templateName: undefined,
      lockType: 'default',
      beforeSubmitCallback: () => undefined,
      afterSubmitCallback: () => undefined,
    };

    optionsToGrab = {
      /**
         * Lock type when form sending <b>Default: "default"</b> @see sf.lock
         */
      lockType: {
        value: Action.defaultOptions.lockType,
        domAttr: 'data-lock-type',
      },
      url: {
        value: Action.defaultOptions.url,
        domAttr: 'data-url',
      },
      method: {
        value: Action.defaultOptions.method,
        domAttr: 'data-method',
      },
      beforeSubmitCallback: {
        value: Action.defaultOptions.beforeSubmitCallback,
        domAttr: 'data-before-submit',
        processor(node, val, self) {
          if (typeof val === 'string') {
            return window[val] || (() => undefined);
          }
          return self.value;
        },
      },
      afterSubmitCallback: {
        value: Action.defaultOptions.afterSubmitCallback,
        domAttr: 'data-after-submit',
        processor(node, val, self) {
          if (typeof val === 'string') {
            return window[val] || (() => undefined);
          }
          return self.value;
        },
      },
      headers: { // attribute of form
        value: Action.defaultOptions.headers, // Default value
        domAttr: 'data-headers',
        processor(node, val, self) {
          if (typeof val === 'string') {
            try {
              return JSON.parse(val);
            } catch (e) {
              console.error('Headers JSON.parse error: ', e, val);
            }
          }
          return self.value;
        },
      },
      data: { // attribute of form
        value: Action.defaultOptions.data, // Default value
        domAttr: 'data-data',
        processor(node, val, self) {
          if (typeof val === 'string') {
            try {
              return JSON.parse(val);
            } catch (e) {
              console.error('Data JSON.parse error: ', e, val);
            }
          }
          return self.value;
        },
      },
      template: {
        value: Action.defaultOptions.template,
        domAttr: 'data-template',
        processor(node, val, self) {
          if (typeof val === 'string') {
            return handlebars.compile(val);
          }
          return self.value;
        },
      },
      templateName: {
        value: Action.defaultOptions.templateName,
        domAttr: 'data-template-name',
      },
    };

    options = {
      data: {},
      headers: {},
      method: 'POST',
      url: '',
      template: undefined,
    };

    state = {
      isLoading: false,
      error: undefined,
    }

    /**
     *
     * @param ssf
     * @param node HTMLElement
     * @param options
     */
    constructor(ssf, node, options) {
      super();
      this.init(ssf, node, options);
      this.onClick = this.onClick.bind(this);
      this.node.addEventListener('click', this.onClick);
      setTimeout(() => {
        this.update();
      });
    }

    update() {
      const template = this.options.template || (this.options.templateName && window.SFTemplates && window.SFTemplates[this.options.templateName]);
      if (template) {
        this.node.innerHTML = template(this.state);
      }
    }

    lock() {
      if (!this.state.isLoading) {
        this.state.isLoading = true;
        this.update();
        if (!this.options.lockType || this.options.lockType === 'none') {
          return;
        }
        this.sf.addInstance('lock', this.node, { type: this.options.lockType });
      }
    }

    unlock() {
      if (this.state.isLoading) {
        this.state.isLoading = false;
        this.update();
        if (!this.options.lockType || this.options.lockType === 'none') {
          return;
        }
        this.sf.removeInstance('lock', this.node);
      }
    }

    processAnswer(answer) {
      const hasError = answer.status >= 400 || (answer.data && (answer.data.error || answer.data.errors));
      const errorMessage = hasError ? ((answer.data && answer.data.error) || 'Unknown Error') : undefined;
      this.state.error = errorMessage;
      this.update();
    }

    async doAction() {
      if (this.state.isLoading) {
        return;
      }
      this.lock();
      const sendOptions = {
        url: this.options.url,
        data: this.options.data,
        headers: this.options.headers,
        method: this.options.method,
      };
      if (typeof this.options.beforeSubmitCallback === 'function') {
        try {
          await this.options.beforeSubmitCallback(sendOptions);
        } catch (e) {
          this.unlock();
          return;
        }
      }
      ajax.send(sendOptions).then(
        (answer) => answer,
        (error) => error,
      ).then((answer) => {
        this.unlock();
        this.processAnswer(answer);
        if (typeof this.options.afterSubmitCallback === 'function') {
          return this.options.afterSubmitCallback(answer);
        }
        return answer;
      });
    }

    onClick(e) {
      if (e) {
        e.preventDefault();
      }
      this.doAction();
    }

    die() {
      this.node.removeEventListener('click', this.onClick);
    }
}

sf.registerInstanceType(Action, Action.spiralFrameworkCssClass);
