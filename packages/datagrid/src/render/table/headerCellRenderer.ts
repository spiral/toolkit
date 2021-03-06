import { SortDirection } from '../../constants';
import type { DatagridState } from '../../datagrid/DatagridState';
import {
  HeaderCellRenderAdvanced,
  IGridRenderOptions,
  INormalizedColumnDescriptor,
} from '../../types';

export const defaultHeaderCellElCreator = (cI: INormalizedColumnDescriptor, options: IGridRenderOptions) => {
  if (options.exclude?.length) {
    if (options.exclude.includes(cI.id)) {
      return undefined;
    }
  }
  const el = document.createElement('th');
  return { container: el, el };
};

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

export const headerCellRenderer: HeaderCellRenderAdvanced = {
  createEl: defaultHeaderCellElCreator,
  render: defaultHeaderCellRendererInner,
};
