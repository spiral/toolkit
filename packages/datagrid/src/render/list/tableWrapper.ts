import { ITableWrapperRenderer } from '../../types';

export const tableWrapper: ITableWrapperRenderer = (node, options) => {
  const el = document.createElement('div');
  el.className = options.ui.tableClassName || '';
  el.classList.add('sf-responsive-table-list');
  node.appendChild(el);
  return el;
};
