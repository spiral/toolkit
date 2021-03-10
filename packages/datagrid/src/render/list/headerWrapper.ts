import { DATAGRID_CHECK_SELECT_ALL_ATTR, SelectionType } from '../../constants';
import { IHeaderWrapperRenderer, INormalizedColumnDescriptor } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const headerWrapper: IHeaderWrapperRenderer = (node, options, state, messages, columns: INormalizedColumnDescriptor[]) => {
  const el = document.createElement('div');

  if (options.selectable) {
    const td = document.createElement('div');
    td.classList.add('sf-table__select');
    const label = document.createElement('label');
    td.appendChild(label);
    label.innerHTML = 'Select/Deselect All';

    if (options.selectable.type === SelectionType.MULTIPLE) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute(DATAGRID_CHECK_SELECT_ALL_ATTR, '');
      checkbox.addEventListener('change', () => {
        state.parent.toggleSelectionAll(checkbox.checked);
      });
      label.prepend(checkbox);
      el.appendChild(td);
    }
  }

  const sortByColumns = columns.filter((cI) => cI.sortable);
  // eslint-disable-next-line no-empty
  if (sortByColumns.length) {
    const td = document.createElement('div');
    td.classList.add('sf-table__sort');
    td.innerHTML = 'Sort by: ';
    const select = document.createElement('select');
    sortByColumns.forEach((cI) => {
      const option = document.createElement('option');
      option.innerHTML = cI.title;
      option.value = cI.id;
      option.selected = cI.id === state.sortBy;
      select.appendChild(option);
    });
    if (state.sortBy) {
      select.value = state.sortBy;
    }
    select.addEventListener('change', () => {
      state.parent.triggerSort(select.value);
    });
  }
  node.appendChild(el);
  return { outer: el, inner: el };
};
