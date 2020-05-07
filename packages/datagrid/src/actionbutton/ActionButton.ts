import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';

const { handlebars } = sf.helpers;
const { ajax } = sf;

export interface IActionButtonOptions {
  data: { [key: string]: string },
  headers: { [key: string]: string },
  method: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT',
  url: string,
  template?: (data: any) => string,
  lockType: string,
  templateName?: string;
  refresh?: boolean;
  confirm?: {
    title: string,
    body: string,
    confirm?: string,
    cancel?: string,
  },
  toastError?: string;
  toastSuccess?: string;
  beforeSubmitCallback?: (sendData: any) => any;
  beforeSubmitCallbackName?: string;
  afterSubmitCallback?: (sendData: any) => any;
  afterSubmitCallbackName?: string;
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
    beforeSubmitCallback: undefined,
    afterSubmitCallback: undefined,
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
    beforeSubmitCallbackName: {
      value: ActionButton.defaultOptions.beforeSubmitCallbackName,
      domAttr: 'data-before-submit',
    },
    afterSubmitCallbackName: {
      value: ActionButton.defaultOptions.afterSubmitCallbackName,
      domAttr: 'data-after-submit',
    },
    headers: { // attribute of form
      value: ActionButton.defaultOptions.headers, // Default value
      domAttr: 'data-headers',
      processor(node: Element, val: any, self: { value: any }) {
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
      processor(node: Element, val: any, self: { value: any }) {
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
    confirm: { // attribute of form
      value: ActionButton.defaultOptions.confirm, // Default value
      domAttr: 'data-confirm',
      processor(node: Element, val: any, self: { value: any }) {
        if (typeof val === 'string') {
          try {
            return JSON.parse(val);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error('Confirm modal config JSON.parse error: ', e, val);
          }
        }
        return self.value;
      },
    },
    template: {
      value: ActionButton.defaultOptions.template,
      domAttr: 'data-template',
      processor(node: Element, val: any, self: { value: any }) {
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
    toastError: {
      value: ActionButton.defaultOptions.toastError,
      domAttr: 'data-toast-error',
    },
    toastSuccess: {
      value: ActionButton.defaultOptions.toastSuccess,
      domAttr: 'data-toast-success',
    },
    refresh: {
      value: ActionButton.defaultOptions.refresh,
      domAttr: 'data-refresh',
    },
  };

  options: IActionButtonOptions = { ...ActionButton.defaultOptions };

  state = {
    isLoading: false,
    error: undefined,
  };

  node!: Element;

  private toastErrorTemplate?: (data: any) => string;

  private toastSuccessTemplate?: (data: any) => string;

  private confirmTemplate?: {
    title: (data: any) => string,
    body: (data: any) => string,
    confirm: (data: any) => string,
    cancel: (data: any) => string,
  };

  /**
   *
   * @param ssf
   * @param node HTMLElement
   * @param options
   */
  constructor(ssf: ISpiralFramework, node: Element, options: Partial<IActionButtonOptions>) {
    super();

    this.init(ssf, node, options, ActionButton.defaultOptions);
    this.onClick = this.onClick.bind(this);
    (this.node as HTMLElement).addEventListener('click', this.onClick);
    setTimeout(() => {
      this.update();
    });
  }

  get afterSubmitCallback() {
    if (typeof this.options.afterSubmitCallback === 'function') {
      return this.options.afterSubmitCallback;
    }
    if (typeof this.options.afterSubmitCallbackName === 'string'
      && typeof (window as any)[this.options.afterSubmitCallbackName] === 'function'
    ) {
      return (window as any)[this.options.afterSubmitCallbackName];
    }
    return undefined;
  }

  get beforeSubmitCallback() {
    if (typeof this.options.beforeSubmitCallback === 'function') {
      return this.options.beforeSubmitCallback;
    }
    if (typeof this.options.beforeSubmitCallbackName === 'string'
      && typeof (window as any)[this.options.beforeSubmitCallbackName] === 'function'
    ) {
      return (window as any)[this.options.beforeSubmitCallbackName];
    }
    return undefined;
  }

  get shouldRefresh() {
    return !!this.options.refresh;
  }

  get toastError() {
    if (this.options.toastError) {
      if (!this.toastErrorTemplate) {
        this.toastErrorTemplate = handlebars.compile(this.options.toastError);
      }
      return this.toastErrorTemplate;
    }
    return undefined;
  }

  get toastSuccess() {
    if (this.options.toastSuccess) {
      if (!this.toastSuccessTemplate) {
        this.toastSuccessTemplate = handlebars.compile(this.options.toastSuccess);
      }
      return this.toastSuccessTemplate;
    }
    return undefined;
  }

  get confirm() {
    if (this.options.confirm) {
      if (!this.confirmTemplate) {
        this.confirmTemplate = {
          title: handlebars.compile(this.options.confirm.title),
          body: handlebars.compile(this.options.confirm.body),
          confirm: handlebars.compile(this.options.confirm.confirm || 'Confirm'),
          cancel: handlebars.compile(this.options.confirm.cancel || 'Cancel'),
        };
      }
      return this.confirmTemplate;
    }
    return undefined;
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

  processAnswer(answer: { data: any, status: number }) {
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
    const beforeSubmitCallback = async () => {
      if (this.confirm) {
        await new Promise((onConfirm, onCancel) => {
          document.dispatchEvent(
            new CustomEvent('sf:confirm',
              {
                detail: {
                  title: this.confirm!.title(sendOptions),
                  body: this.confirm!.body(sendOptions),
                  options: {
                    confirm: { label: this.confirm!.confirm(sendOptions) },
                    cancel: { label: this.confirm!.cancel(sendOptions) },
                  },
                  onConfirm,
                  onCancel,
                },
              }),
          );
        });
      }
      if (this.beforeSubmitCallback) {
        await this.beforeSubmitCallback(sendOptions);
      }
      return sendOptions;
    };

    try {
      await beforeSubmitCallback();
    } catch (e) {
      this.unlock();
      return;
    }
    ajax.send(sendOptions).then(
      (answer: { data: any, status: number }) => answer,
      (error: any) => error,
    ).then((answer) => {
      this.unlock();
      this.processAnswer(answer);

      const afterSubmitCallback = async () => {
        if (answer.status && answer.status < 400) {
          if (this.toastSuccess) {
            const message = answer?.data?.message || '';
            const event = new CustomEvent('sf:notification-show', {
              bubbles: true,
              detail: {
                message: this.toastSuccess({ ...answer.data, message }), type: 'success', position: 'tr', timeout: 2000,
              },
            });
            document.dispatchEvent(event);
          }
          if (this.shouldRefresh) {
            window.location.reload();
          }
        } else if (this.toastError) {
          const error = answer?.data?.error || '';
          const event = new CustomEvent('sf:notification-show', {
            bubbles: true,
            detail: {
              message: this.toastError({ ...answer.data, error }), type: 'danger', position: 'tr', timeout: 2000,
            },
          });
          document.dispatchEvent(event);
        }

        if (this.afterSubmitCallback) {
          return this.afterSubmitCallback(answer, this.state.error);
        }
        return answer;
      };
      return afterSubmitCallback();
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
