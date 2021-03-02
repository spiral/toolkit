import { ITableWrapperRenderer } from '../../types';

export const tableWrapper: ITableWrapperRenderer = (node, options) => {
  const el = document.createElement('table');
  el.className = options.ui.tableClassName || '';
  node.appendChild(el);
  return el;
};
