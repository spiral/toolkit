import { SortDirection } from '../constants';
import { DatagridState } from '../DatagridState';
import { IGridRenderOptions } from '../types';
import { INormalizedColumnDescriptor } from '../utils';

export const defaultHeaderCellRenderer = (column: INormalizedColumnDescriptor, options: IGridRenderOptions, state: DatagridState) => {
  const el = document.createElement('th');
  const classes = [];
  if (column.sortable) {
    classes.push('sf-table__sort');
    el.addEventListener('click', () => {
      state.parent.triggerSort(column.id);
    });
  }
  if (state.sortBy === column.id) {
    if (state.sortDir === SortDirection.ASC) {
      classes.push('sf-table__sort_asc');
    } else {
      classes.push('sf-table__sort_desc');
    }
  }
  el.innerHTML = `<div class="${classes.join(' ')}">${column.title}</div>`;
  return el;
};
