import sf from '@spiral-toolkit/core';
import type { CellRenderFunction } from '../types';
import { INormalizedColumnDescriptor } from '../types';
import { actionsHelper } from './actions';

const { assert } = sf.helpers;

export const REGISTER_CMD_NAME = 'register';
export const GLOBAL_NAME_TO_IMPORT = 'SFToolkit_tools_datagrid';

export type RenderFuncGenerator = (...data: any[]) => CellRenderFunction;
export type RegisterFunction = (toolName: string, func: RenderFuncGenerator) => void;

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
  actions: actionsHelper,
  map: (map: { [key: string]: string }, defaultValue: string = '') => (value: string) => map[value] || defaultValue,
  concat: (fields: string[], separator = ' ') => ((value: string, item: any) => fields.map((f) => item[f]).join(separator)),
  template: (template: string) => {
    const compiled = sf.helpers.template.compile(template);
    return ((value: string, item: any) => compiled(item));
  },
  link: ({
    href,
    title,
    body,
    className,
    target,
    omitEmptyHref,
  }: {
    href: string,
    body?: string,
    title?: string,
    className?: string,
    target?: string,
    omitEmptyHref?: boolean
  }) => ((value: string, item: any, colDef: INormalizedColumnDescriptor) => {
    const templates = {
      target: sf.helpers.template.compile(target || '_self'),
      href: sf.helpers.template.compile(href || ''),
      title: sf.helpers.template.compile(title || colDef.title),
      body: sf.helpers.template.compile(body || colDef.title),
    };
    const values = {
      target: templates.target(item),
      href: templates.href(item),
      title: templates.title(item),
      body: templates.body(item),
    };
    if (omitEmptyHref && !href) {
      return values.body;
    }
    return `<a target="${values.target}" href="${values.href}" title="${values.title}" class="${className || ''}">${values.body}</a>`;
  }),
  image: ({
    href, title, className,
  }: { href: string, title?: string, className?: string }) => ((value: string, item: any, colDef: INormalizedColumnDescriptor) => {
    const templates = {
      href: sf.helpers.template.compile(href || ''),
      title: sf.helpers.template.compile(title || colDef.title),
    };
    const values = {
      href: templates.href(item),
      title: templates.title(item),
    };
    return `<img src="${values.href}" title="${values.title}"  alt="${values.title}" class="${className || ''}"/>`;
  }),
  serialize: () => (value: string, item: any) => JSON.stringify(item),
};

if ((window as any)[GLOBAL_NAME_TO_IMPORT]) {
  const toolsToImport = (window as any)[GLOBAL_NAME_TO_IMPORT] as {[key: string]: RenderFuncGenerator};
  Object.keys(toolsToImport).forEach((fnKey:string) => {
    const fn = toolsToImport[fnKey];
    if (typeof fn === 'function') {
      try {
        tools.register(fnKey, fn);
      } catch (e) {
        console.error(e);
      }
    }
  });
}

export function isRenderFuncGenerator(func: RenderFuncGenerator | RegisterFunction): func is RenderFuncGenerator {
  return func !== tools.register;
}
