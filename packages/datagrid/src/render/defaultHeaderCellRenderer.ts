import { SortDirection } from '../constants';
import type { DatagridState } from '../datagrid/DatagridState';
import {
  HeaderCellRenderAdvanced,
  IGridRenderOptions,
  INormalizedColumnDescriptor,
} from '../types';

export const defaultHeaderCellElCreator = () => document.createElement('th');

export const defaultHeaderCellRendererInner = (column: INormalizedColumnDescriptor, options: IGridRenderOptions, state: DatagridState) => {
  const el = document.createElement('div');
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
  el.className = classes.join(' ');
  el.innerText = column.title;
  return el;
};

export const defaultHeaderCellRenderer: HeaderCellRenderAdvanced = {
  createEl: defaultHeaderCellElCreator,
  render: defaultHeaderCellRendererInner,
};
