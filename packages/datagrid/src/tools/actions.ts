import sf from '@spiral-toolkit/core';
import { ActionButton } from '../actionbutton/ActionButton';
import { DatagridState } from '../datagrid/DatagridState';

const { handlebars } = sf.helpers;

export interface IActionDeclaration {
  type: 'href' | 'action';
  template?: string;
  label?: string;
  icon?: string;
  target?: string;
  url: string;
  data?: {} | string;
  method?: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT';
  condition?: string;
  refresh?: boolean,
  confirm?: {
    title: string,
    body: string,
    confirm?: string,
    confirmKind?: string,
    cancel?: string,
    cancelKind?: string,
  },
  toastSuccess?: string,
  toastError?: string,
}

export interface IActionDeclarationCompiled {
  template: (item: any) => string;
  url: (item: any) => string;
  data: (item: any) => any;
  method?: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT';
  type: 'href' | 'action';
  target?: string;
  condition: (item: any) => boolean;
  confirm?: {
    title: (item: any) => string,
    body: (item: any) => string,
    confirm: (item: any) => string,
    confirmKind: (item: any) => string,
    cancel: (item: any) => string,
    cancelKind: (item: any) => string,
  },
  toastSuccess?: (item: any) => string,
  toastError?: (item: any) => string,
  refresh: boolean,
}

export interface IActionDropdownDeclatations {
  kind: string;
  size: string;
  className: string;
  template?: string;
  label?: string;
  icon?: string;
  actions: IActionDeclaration[];
}

export const compileAction = (declaration: IActionDeclaration) => {
  const template = declaration.template
    ? handlebars.compile(declaration.template)
    : handlebars.compile(`${declaration.icon
      ? `<i class="fas fw fa-${declaration.icon}"></i>`
      : ''}${(declaration.label && declaration.icon) ? '&nbsp;&nbsp;&nbsp;' : ''}${declaration.label || ''}`);
  const url = handlebars.compile(declaration.url);
  const dataTemplate = (typeof declaration.data === 'string') ? handlebars.compile(declaration.data) : undefined;
  const data = (typeof declaration.data === 'string') ? (
    (item: any) => JSON.parse(dataTemplate!(item))
  ) : (() => (declaration.data || {}));
  const { type, method } = declaration;
  let conditionTemplate = (typeof declaration.condition === 'string') ? handlebars.compile(declaration.condition) : undefined;
  if (declaration.condition === 'string') {
    if (declaration.condition.indexOf('{{') === -1) { // Template is not really a template
      conditionTemplate = handlebars.compile(`{{#if ${declaration.condition}}}TRUE{{/if}}`);
    }
  }
  const condition = conditionTemplate ? ((item: any) => !!conditionTemplate(item)) : () => true;
  let confirm;

  if (declaration.confirm) {
    confirm = {
      title: handlebars.compile(declaration.confirm.title),
      body: handlebars.compile(declaration.confirm.body),
      confirm: handlebars.compile(declaration.confirm.confirm || 'Confirm'),
      confirmKind: handlebars.compile(declaration.confirm.confirmKind || 'primary'),
      cancel: handlebars.compile(declaration.confirm.cancel || 'Cancel'),
      cancelKind: handlebars.compile(declaration.confirm.cancelKind || 'secondary'),
    };
  }

  const toastSuccess = declaration.toastSuccess ? handlebars.compile(declaration.toastSuccess) : undefined;
  const toastError = declaration.toastError ? handlebars.compile(declaration.toastError) : undefined;

  return {
    template,
    url,
    data,
    type,
    method,
    confirm,
    refresh: !!declaration.refresh,
    target: declaration.target,
    condition,
    toastSuccess,
    toastError,
  };
};

export const actionsHelper = (actionsDeclaration: IActionDropdownDeclatations) => {
  const template = actionsDeclaration.template
    ? handlebars.compile(actionsDeclaration.template)
    : handlebars.compile(`${actionsDeclaration.icon
      ? `<i class="fas fa-${actionsDeclaration.icon}"></i>`
      : ''}${(actionsDeclaration.label && actionsDeclaration.icon) ? '&nbsp;&nbsp;&nbsp;' : ''}${actionsDeclaration.label || ''}`);

  const actions: IActionDeclarationCompiled[] = actionsDeclaration.actions.map((ad) => compileAction(ad));

  return ((value: string, item: any, col: any, opts: any, index: number, state: DatagridState) => {
    const dropdownDiv = document.createElement('div');
    dropdownDiv.className = 'dropdown';
    if (actionsDeclaration.className) {
      dropdownDiv.classList.add(...actionsDeclaration.className.split(' '));
    }
    dropdownDiv.setAttribute('data-sf', 'dropdown');

    const dropdownButton = document.createElement('button');
    dropdownButton.className = 'btn dropdown-toggle';
    dropdownButton.classList.add(`btn-${actionsDeclaration.kind || 'secondary'}`);
    dropdownButton.classList.add(`btn-${actionsDeclaration.size || 'sm'}`);
    dropdownButton.setAttribute('data-sf', 'dropdown-toggle');
    dropdownButton.setAttribute('type', 'button');
    dropdownButton.setAttribute('data-toggle', 'dropdown');
    dropdownButton.setAttribute('aria-haspopup', 'true');
    dropdownButton.setAttribute('aria-expanded', 'false');
    dropdownButton.innerHTML = template((item));

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    dropdownMenu.setAttribute('data-sf', 'dropdown-menu');
    dropdownMenu.setAttribute('data-sf-use-portal', 'true');

    dropdownDiv.appendChild(dropdownButton);
    dropdownDiv.appendChild(dropdownMenu);

    let hasItems = false;
    const dropdown = (window as any).SFKeeper.Dropdown.init(dropdownDiv);

    actions.forEach((action) => {
      if (action.condition(item)) {
        hasItems = true;
        const link = document.createElement('a');
        link.setAttribute('href', action.url(item));
        link.className = 'dropdown-item';

        if (action.type === 'href') {
          link.setAttribute('target', action.target || '_blank');
          link.innerHTML = action.template(item);
        } else {
          link.setAttribute('href', '');
          link.setAttribute('data-href', action.url(item));

          const beforeSubmitCallback = async (data: any) => {
            dropdown.hide();
            if (action.confirm) {
              await new Promise((onConfirm, onCancel) => {
                document.dispatchEvent(
                  new CustomEvent('sf:confirm',
                    {
                      detail: {
                        title: action.confirm!.title(item),
                        body: action.confirm!.body(item),
                        options: {
                          confirm: { label: action.confirm!.confirm(item), kind: action.confirm!.confirmKind(item) },
                          cancel: { label: action.confirm!.cancel(item), kind: action.confirm!.cancelKind(item) },
                        },
                        onConfirm,
                        onCancel,
                      },
                    }),
                );
              });
              return data;
            }
            return data;
          };

          const afterSubmitCallback = async (data: any) => {
            if (data.status && data.status < 400) {
              if (action.toastSuccess) {
                const message = data?.data?.message || '';
                const event = new CustomEvent('sf:notification-show', {
                  bubbles: true,
                  detail: {
                    message: action.toastSuccess({ message, ...item }), type: 'success', position: 'tr', timeout: 2000,
                  },
                });
                document.dispatchEvent(event);
              }
              if (action.refresh) {
                state.parent.request();
              }
            } else if (action.toastError) {
              const error = data?.data?.error || '';
              const event = new CustomEvent('sf:notification-show', {
                bubbles: true,
                detail: {
                  message: action.toastError({ error, ...item }), type: 'danger', position: 'tr', timeout: 2000,
                },
              });
              document.dispatchEvent(event);
            }
          };
          sf.instancesController.addInstance(ActionButton.spiralFrameworkName, link, {
            data: action.data(item),
            url: action.url(item),
            method: action.method || 'POST',
            lockType: 'none',
            template: handlebars.compile(action.template(item)),
            beforeSubmitCallback,
            afterSubmitCallback,
          });
        }
        dropdownMenu.appendChild(link);
      }
    });
    if (!hasItems) {
      dropdownButton.setAttribute('disabled', 'disabled');
    }
    return dropdownDiv;
  });
};
