import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';

const { handlebars } = sf.helpers;
const { ajax } = sf;

export interface IActionButtonOptions {
  data: {[key: string]: string},
  headers: {[key: string]: string},
  method: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT',
  url: string,
  template?: (data: any)=>string,
  lockType: string,
  templateName?: string;
  beforeSubmitCallback?: (sendData: any)=>any;
  afterSubmitCallback?: (sendData: any)=>any;
}

export class ActionButton extends sf.core.BaseDOMConstructor {
  static spiralFrameworkName: string = 'action';

  static spiralFrameworkCssClass: string = 'js-sf-action';

  static registerInSf = () => {
    sf.registerInstanceType(ActionButton, ActionButton.spiralFrameworkCssClass);
  };

  static defaultOptions: IActionButtonOptions = {
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

  optionsToGrab: { [option: string]: IOptionToGrab } = {
    /**
     * Lock type when form sending <b>Default: "default"</b> @see sf.lock
     */
    lockType: {
      value: ActionButton.defaultOptions.lockType,
      domAttr: 'data-lock-type',
    },
    url: {
      value: ActionButton.defaultOptions.url,
      domAttr: 'data-url',
    },
    method: {
      value: ActionButton.defaultOptions.method,
      domAttr: 'data-method',
    },
    beforeSubmitCallback: {
      value: ActionButton.defaultOptions.beforeSubmitCallback,
      domAttr: 'data-before-submit',
      processor(node: Element, val: any, self: {value: any}) {
        if (typeof val === 'string') {
          return (window as any)[val] || (() => undefined);
        }
        return self.value;
      },
    },
    afterSubmitCallback: {
      value: ActionButton.defaultOptions.afterSubmitCallback,
      domAttr: 'data-after-submit',
      processor(node: Element, val: any, self: {value: any}) {
        if (typeof val === 'string') {
          return (window as any) || (() => undefined);
        }
        return self.value;
      },
    },
    headers: { // attribute of form
      value: ActionButton.defaultOptions.headers, // Default value
      domAttr: 'data-headers',
      processor(node: Element, val: any, self: {value: any}) {
        if (typeof val === 'string') {
          try {
            return JSON.parse(val);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error('Headers JSON.parse error: ', e, val);
          }
        }
        return self.value;
      },
    },
    data: { // attribute of form
      value: ActionButton.defaultOptions.data, // Default value
      domAttr: 'data-data',
      processor(node: Element, val: any, self: {value: any}) {
        if (typeof val === 'string') {
          try {
            return JSON.parse(val);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error('Data JSON.parse error: ', e, val);
          }
        }
        return self.value;
      },
    },
    template: {
      value: ActionButton.defaultOptions.template,
      domAttr: 'data-template',
      processor(node: Element, val: any, self: {value: any}) {
        if (typeof val === 'string') {
          return handlebars.compile(val);
        }
        return self.value;
      },
    },
    templateName: {
      value: ActionButton.defaultOptions.templateName,
      domAttr: 'data-template-name',
    },
  };

  options: IActionButtonOptions = { ...ActionButton.defaultOptions };

  state = {
    isLoading: false,
    error: undefined,
  };

  node!: Element;

  /**
   *
   * @param ssf
   * @param node HTMLElement
   * @param options
   */
  constructor(ssf: ISpiralFramework, node: Element, options: Partial<IActionButtonOptions>) {
    super();
    if (ssf.getInstance(ActionButton.spiralFrameworkName, node)) {
      return;
    }
    this.init(ssf, node, options);
    this.onClick = this.onClick.bind(this);
    (this.node as HTMLElement).addEventListener('click', this.onClick);
    setTimeout(() => {
      this.update();
    });
  }

  update() {
    const template = this.options.template
      || (this.options.templateName && (window as any).SFTemplates && (window as any).SFTemplates[this.options.templateName]);
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

  processAnswer(answer: {data: any, status: number}) {
    const hasError = typeof answer.status === 'undefined' || answer.status >= 400 || (answer.data && (answer.data.error || answer.data.errors));
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
      (answer: {data: any, status: number}) => answer,
      (error: any) => error,
    ).then((answer) => {
      this.unlock();
      this.processAnswer(answer);
      if (typeof this.options.afterSubmitCallback === 'function') {
        return this.options.afterSubmitCallback(answer);
      }
      return answer;
    });
  }

  onClick(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    this.doAction();
  }

  die() {
    (this.node as HTMLElement).removeEventListener('click', this.onClick);
  }
}
