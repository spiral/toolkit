import type { IRowWrapperRenderer } from '../../types';
import { DATAGRID_CHECK_SELECT_ATTR, SelectionType } from '../../constants';
import { normalizedCellRenderer } from '../normalizers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const rowWrapper: IRowWrapperRenderer = (node, options, state, index, columns) => {
  const el = document.createElement('ul');
  el.className = 'list-group list-group-flush sf-table__collapsed sf-table__collapsable border-bottom';
  const elHeader = document.createElement('li');
  const elHeaderRow = document.createElement('div');
  elHeaderRow.className = 'row';
  elHeader.className = 'list-group-item bg-light sf-table__group';

  node.appendChild(el);

  let col = 12;

  if (options.selectable) {
    col = 11;
    const td = document.createElement('div');
    td.className = 'col-1';
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
    elHeaderRow.appendChild(td);
  }

  const data = state.data[index];
  if (options.renderAsList) {
    const { summaryColumn } = options.renderAsList;
    const d = document.createElement('div');
    d.className = `col-${col}`;
    const cI = columns.find((c) => c.id === summaryColumn)!;
    const cell = data[summaryColumn];
    const renderer = normalizedCellRenderer((options.cells || {})[summaryColumn], true);
    const r = renderer.render(cell, data, cI, options, index, state);
    if (r) {
      if (typeof r === 'string') {
        d.innerHTML = r;
      } else {
        d.appendChild(r);
      }
    }
    elHeaderRow.appendChild(d);
  }
  elHeader.addEventListener('click', () => {
    el.classList.toggle('sf-table__collapsed');
  });
  elHeader.appendChild(elHeaderRow);
  el.appendChild(elHeader);
  return el;
};
