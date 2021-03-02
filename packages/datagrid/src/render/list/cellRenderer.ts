import sf from '@spiral-toolkit/core';
import { CellRenderAdvanced } from '../../types';

export const defaultCellElCreator = () => document.createElement('td');

export const defaultTemplate = sf.helpers.template.compile('{{value}}');

export const cellRenderer: CellRenderAdvanced = {
  createEl: defaultCellElCreator,
  render: (value) => (typeof value === 'undefined' ? '' : defaultTemplate({ value })),
};
