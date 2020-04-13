import type { IRowWrapperRenderer } from '../types';
import { DATAGRID_CHECK_SELECT_ATTR, SelectionType } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const defaultRowWrapper: IRowWrapperRenderer = (node, options, state, index) => {
  const el = document.createElement('tr');
  node.appendChild(el);
  if (options.selectable) {
    const td = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.setAttribute(DATAGRID_CHECK_SELECT_ATTR, '');
    checkbox.type = options.selectable.type === SelectionType.MULTIPLE ? 'checkbox' : 'radio';
    checkbox.value = state.data[index][options.selectable.id];
    checkbox.checked = state.isSelected(checkbox.value);
    checkbox.addEventListener('change', () => {
      state.parent.toggleSelection(checkbox.value, checkbox.checked);
    });
    td.classList.add('sf-table__select');
    td.appendChild(checkbox);
    el.appendChild(td);
  }
  return el;
};
