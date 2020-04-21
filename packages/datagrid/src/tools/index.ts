import sf from '@spiral-toolkit/core';
import assert from 'assert';
import type { CellRenderFunction } from '../types';

export const REGISTER_CMD_NAME = 'register';

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
  concat: (fields: string[], separator = ' ') => ((value: string, item: any) => fields.map((f) => item[f]).join(separator)),
  serialize: () => (value: string, item: any) => JSON.stringify(item),
};

export function isRenderFuncGenerator(func: RenderFuncGenerator | RegisterFunction): func is RenderFuncGenerator {
  return func !== tools.register;
}
