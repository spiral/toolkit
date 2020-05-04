import sf from '@spiral-toolkit/core';
import { ActionButton } from '../actionbutton/ActionButton';
import { INormalizedColumnDescriptor } from '../types';
import type { CellRenderFunction } from '../types';

const { assert, handlebars } = sf.helpers;

export const REGISTER_CMD_NAME = 'register';

export type RenderFuncGenerator = (...data: any[]) => CellRenderFunction;
export type RegisterFunction = (toolName: string, func: RenderFuncGenerator) => void;

export interface IActionDeclaration {
  type: 'href' | 'action';
  template?: string;
  label?: string;
  icon?: string;
  url: string;
  data?: {} | string;
  method?: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT';
  condition?: string;
}

export interface IActionDeclarationCompiled {
  template: (item: any) => string;
  url: (item: any) => string;
  data: (item: any) => any;
  method?: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT';
  type: 'href' | 'action';
  condition: (item: any) => boolean;
  confirm?: {
    title: (item: any) => string,
    body: (item: any) => string,
    confirm?: (item: any) => string,
    cancel?: (item: any) => string,
  },
}

export interface IActionDropdownDeclatations {
  kind: string;
  className: string;
  template?: string;
  label?: string;
  icon?: string;
  confirm?: {
    title: string,
    body: string,
    confirm?: string,
    cancel?: string,
  },
  actions: IActionDeclaration[];
}

const compileAction = (declaration: IActionDeclaration) => {
  const template = declaration.template
    ? handlebars.compile(declaration.template)
    : handlebars.compile(`${declaration.icon
      ? `<i class="fas fa-${declaration.icon}"></i>`
      : ''}${declaration.label
      ? ` ${declaration.label}`
      : ''}`);
  const url = handlebars.compile(declaration.url);
  const dataTemplate = (typeof declaration.data === 'string') ? handlebars.compile(declaration.data) : undefined;
  const data = (typeof declaration.data === 'string') ? (
    (item: any) => JSON.parse(dataTemplate!(item))
  ) : (() => (declaration.data || {}));
  const { type, method } = declaration;
  const conditionTemplate = (typeof declaration.condition === 'string') ? handlebars.compile(declaration.condition) : undefined;
  const condition = conditionTemplate ? ((item: any) => !!conditionTemplate(item)) : () => true;
  return {
    template,
    url,
    data,
    type,
    method,
    condition,
  };
};

export const tools: {
  register: (toolName: string, func: RenderFuncGenerator) => void,
  [key: string]: RenderFuncGenerator | RegisterFunction,
} = {
  register: (toolName: string, func: RenderFuncGenerator) => {
    assert.notStrictEqual(toolName, REGISTER_CMD_NAME, 'Cant override register command');
    if (tools[toolName]) {
      assert.strictEqual(tools[toolName], func, 'Cant override already registered function');
    }
    tools[toolName] = func;
  },
  date: () => (value: string) => (value ? (new Date()).toDateString() : ''),
  dateFormat: (format: string, sourceFormat?: string) => ((value: string) => {
    if (!value) {
      return '';
    }
    try {
      if (sourceFormat) {
        return sf.helpers.luxon.DateTime.fromFormat(value, sourceFormat).toFormat(format);
      }
      return sf.helpers.luxon.DateTime.fromJSDate(new Date(value)).toFormat(format);
    } catch (e) {
      return '';
    }
  }),
  actions: (actionsDeclaration: IActionDropdownDeclatations) => {
    const template = actionsDeclaration.template
      ? handlebars.compile(actionsDeclaration.template)
      : handlebars.compile(`${actionsDeclaration.icon
        ? `<i class="fas fa-${actionsDeclaration.icon}"></i>`
        : ''}${actionsDeclaration.label
        ? ` ${actionsDeclaration.label}`
        : ''}`);
    const actions: IActionDeclarationCompiled[] = actionsDeclaration.actions.map((ad) => compileAction(ad));

    return ((value: string, item: any) => {
      const dropdownDiv = document.createElement('div');
      dropdownDiv.className = 'dropdown';
      if (actionsDeclaration.className) {
        dropdownDiv.classList.add(...actionsDeclaration.className.split(' '));
      }
      dropdownDiv.setAttribute('data-sf', 'dropdown');

      const dropdownButton = document.createElement('button');
      dropdownButton.className = 'btn dropdown-toggle';
      dropdownButton.classList.add(`btn-${actionsDeclaration.kind || 'secondary'}`);
      dropdownButton.setAttribute('type', 'button');
      dropdownButton.setAttribute('data-toggle', 'dropdown');
      dropdownButton.setAttribute('aria-haspopup', 'true');
      dropdownButton.setAttribute('aria-expanded', 'false');
      dropdownButton.innerHTML = template((item));

      const dropdownMenu = document.createElement('div');
      dropdownMenu.className = 'dropdown-menu';
      dropdownMenu.setAttribute('data-sf', 'dropdown-menu');

      dropdownDiv.appendChild(dropdownButton);
      dropdownDiv.appendChild(dropdownMenu);

      actions.forEach((action) => {
        if (action.condition(item)) {
          const link = document.createElement('a');
          link.setAttribute('href', action.url(item));
          if (action.type === 'href') {
            link.setAttribute('target', '_blank');
          } else {
            new ActionButton(sf, link, {
              data: action.data(item),
              url: action.url(item),
              method: action.method || 'POST',
              lockType: 'none',
              template: handlebars.compile(action.template(item)),
            });
            link.classList.add(ActionButton.spiralFrameworkCssClass); // Ensure it self destroys
          }
          dropdownMenu.appendChild(link);
        }
      });

      return dropdownDiv;
    });
  },
  map: (map: { [key: string]: string }, defaultValue: string = '') => (value: string) => map[value] || defaultValue,
  concat: (fields: string[], separator = ' ') => ((value: string, item: any) => fields.map((f) => item[f]).join(separator)),
  template: (template: string) => {
    const compiled = handlebars.compile(template);
    return ((value: string, item: any) => compiled(item));
  },
  link: ({
    href, title, body, className,
  }: { href: string, body?: string, title?: string, className?: string }) => ((value: string, item: any, colDef: INormalizedColumnDescriptor) => {
    const templates = {
      href: handlebars.compile(href || ''),
      title: handlebars.compile(title || colDef.title),
      body: handlebars.compile(body || colDef.title),
    };
    const values = {
      href: templates.href(item),
      title: templates.title(item),
      body: templates.body(item),
    };
    return `<a href="${values.href}" title="${values.title}" class="${className || ''}">${values.body}</a>`;
  }),
  image: ({
    href, title, className,
  }: { href: string, title?: string, className?: string }) => ((value: string, item: any, colDef: INormalizedColumnDescriptor) => {
    const templates = {
      href: handlebars.compile(href || ''),
      title: handlebars.compile(title || colDef.title),
    };
    const values = {
      href: templates.href(item),
      title: templates.title(item),
    };
    return `<img src="${values.href}" title="${values.title}"  alt="${values.title}" class="${className || ''}"/>`;
  }),
  serialize: () => (value: string, item: any) => JSON.stringify(item),
};

export function isRenderFuncGenerator(func: RenderFuncGenerator | RegisterFunction): func is RenderFuncGenerator {
  return func !== tools.register;
}
