import sf from '@spiral-toolkit/core';
import { INormalizedColumnDescriptor } from '../types';
import type { CellRenderFunction } from '../types';

const { assert } = sf.helpers;

export const REGISTER_CMD_NAME = 'register';

export type RenderFuncGenerator = (...data: any[]) => CellRenderFunction;
export type RegisterFunction = (toolName: string, func: RenderFuncGenerator) => void;

export const applyValues = (template: string, obj: { [key: string]: any }) => Object.keys(obj)
  .reduce((prevStr, key: string) => prevStr.split(`{${key}}`).join(obj[key]), template);

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
  map: (map: { [key: string]: string }, defaultValue: string = '') => (value: string) => map[value] || defaultValue,
  concat: (fields: string[], separator = ' ') => ((value: string, item: any) => fields.map((f) => item[f]).join(separator)),
  link: ({
    href, title, body, className,
  }: { href: string, body?: string, title?: string, className?: string }) => ((value: string, item: any, colDef: INormalizedColumnDescriptor) => {
    const templates = {
      href,
      title: title || colDef.title,
      body: body || colDef.title,
    };
    const values = {
      href: applyValues(templates.href, item),
      title: applyValues(templates.title, item),
      body: applyValues(templates.body, item),
    };
    return `<a href="${values.href}" title="${values.title}" class="${className || ''}">${values.body}</a>`;
  }),
  image: ({
    href, title, className,
  }: { href: string, title?: string, className?: string }) => ((value: string, item: any, colDef: INormalizedColumnDescriptor) => {
    const templates = {
      href,
      title: title || colDef.title,
    };
    const values = {
      href: applyValues(templates.href, item),
      title: applyValues(templates.title, item),
    };
    return `<img src="${values.href}" title="${values.title}"  alt="${values.title}" class="${className || ''}"/>`;
  }),
  serialize: () => (value: string, item: any) => JSON.stringify(item),
};

export function isRenderFuncGenerator(func: RenderFuncGenerator | RegisterFunction): func is RenderFuncGenerator {
  return func !== tools.register;
}
