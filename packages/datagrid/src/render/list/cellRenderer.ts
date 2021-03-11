import sf from '@spiral-toolkit/core';
import { CellRenderAdvanced, IGridRenderOptions, INormalizedColumnDescriptor } from '../../types';

export const defaultCellElCreator = (cI: INormalizedColumnDescriptor, options: IGridRenderOptions) => {
  if (options.exclude?.length) {
    if (options.exclude.includes(cI.id)) {
      return undefined;
    }
  }
  const el = document.createElement('li');
  el.className = 'sf-table__listrow list-group-item';
  const definition = document.createElement('div');
  definition.className = 'sf-table__definition col-5';
  const declaration = document.createElement('div');
  declaration.className = 'sf-table__declaration col-7';
  definition.innerHTML = cI.title;
  el.appendChild(definition);
  el.appendChild(declaration);
  return { container: el, el: declaration };
};

export const defaultTemplate = sf.helpers.template.compile('{{value}}');

export const cellRenderer: CellRenderAdvanced = {
  createEl: defaultCellElCreator,
  render: (value) => (typeof value === 'undefined' ? '' : defaultTemplate({ value })),
};
