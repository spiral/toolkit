import { IRowCellRenderer } from '../../types';

export const simpleCellFormatter = (formatFunction: (value: any, item: any) => string = (v) => (v ? v.toString() : ''), tagName = 'td') => {
  const renderer: IRowCellRenderer = (column, options, state, index) => {
    const el = document.createElement(tagName);
    el.innerHTML = formatFunction(state.data[index][column.id], state.data[index]);
    return el;
  };
  return renderer;
};
