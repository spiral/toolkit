import { DATAGRID_CHECK_SELECT_ALL_ATTR, SelectionType } from '../../constants';
import { IHeaderWrapperRenderer, INormalizedColumnDescriptor } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const headerWrapper: IHeaderWrapperRenderer = (node, options, state, messages, columns: INormalizedColumnDescriptor[]) => {
  const wrap = document.createElement('div');
  const el = document.createElement('div');
  el.className = 'bg-primary text-white';
  let col = 12;
  if (options.selectable) {
    col = 6;
    const td = document.createElement('div');
    td.classList.add('sf-table__selectall col-6 px-4 py-2 d-flex');
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
    td.className = `sf-table__sortselect col-${col} px-4 py-2 d-flex`;
    const text = document.createElement('div');
    text.innerHTML = 'Sort&nbsp;by:&nbsp;';
    td.appendChild(text);
    const select = document.createElement('select');
    select.className = 'custom-select custom-select-sm';
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
    td.appendChild(select);
    el.appendChild(td);
  }
  node.appendChild(wrap);
  const tel = document.createElement('div');
  wrap.appendChild(el);
  wrap.appendChild(tel);
  return { outer: wrap, inner: tel };
};
