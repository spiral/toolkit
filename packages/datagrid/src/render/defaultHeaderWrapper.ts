import { DATAGRID_CHECK_SELECT_ALL_ATTR, SelectionType } from '../constants';
import { IHeaderWrapperRenderer } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const defaultHeaderWrapper: IHeaderWrapperRenderer = (node, options, state) => {
  const el = document.createElement('thead');

  const tr = document.createElement('tr');

  if (options.selectable) {
    const td = document.createElement('th');
    td.classList.add('sf-table__select');
    if (options.selectable.type === SelectionType.MULTIPLE) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute(DATAGRID_CHECK_SELECT_ALL_ATTR, '');
      checkbox.addEventListener('change', () => {
        state.parent.toggleSelectionAll(checkbox.checked);
      });
      td.appendChild(checkbox);
    }
    tr.appendChild(td);
  }
  el.appendChild(tr);
  node.appendChild(el);
  return { outer: el, inner: tr };
};
