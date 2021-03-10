import sf from '@spiral-toolkit/core';
import { CellRenderAdvanced } from '../../types';

export const defaultCellElCreator = () => {
  const el = document.createElement('td');
  return { container: el, el };
};

export const defaultTemplate = sf.helpers.template.compile('{{value}}');

export const cellRenderer: CellRenderAdvanced = {
  createEl: defaultCellElCreator,
  render: (value) => (typeof value === 'undefined' ? '' : defaultTemplate({ value })),
};
