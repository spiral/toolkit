import sf from '@spiral-toolkit/core';
import { CellRenderAdvanced, IGridRenderOptions, INormalizedColumnDescriptor } from '../../types';

export const defaultCellElCreator = (cI: INormalizedColumnDescriptor, options: IGridRenderOptions) => {
  if (options.exclude?.length) {
    if (options.exclude.includes(cI.id)) {
      return undefined;
    }
  }
  const el = document.createElement('td');
  return { container: el, el };
};

export const defaultTemplate = sf.helpers.template.compile('{{value}}');

export const cellRenderer: CellRenderAdvanced = {
  createEl: defaultCellElCreator,
  render: (value) => (typeof value === 'undefined' ? '' : defaultTemplate({ value })),
};
