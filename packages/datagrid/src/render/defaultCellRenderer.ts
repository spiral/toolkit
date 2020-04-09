import { CellRenderAdvanced } from '../types';

export const defaultCellElCreator = () => document.createElement('td');

export const defaultCellRenderer: CellRenderAdvanced = {
  createEl: defaultCellElCreator,
  render: (value) => typeof value === 'undefined' ? '' : String(value),
};
