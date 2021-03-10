import sf from '@spiral-toolkit/core';
import { CellRenderAdvanced, INormalizedColumnDescriptor } from '../../types';

export const defaultCellElCreator = (cI: INormalizedColumnDescriptor) => {
  const el = document.createElement('li');
  const definition = document.createElement('div.sf-table__definition');
  const declaration = document.createElement('div.sf-table__definition');
  definition.innerHTML = cI.title;
  return { container: el, el: declaration };
};

export const defaultTemplate = sf.helpers.template.compile('{{value}}');

export const cellRenderer: CellRenderAdvanced = {
  createEl: defaultCellElCreator,
  render: (value) => (typeof value === 'undefined' ? '' : defaultTemplate({ value })),
};
