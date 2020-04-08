import { SortDirection } from './constants';
import { IColumnDescriptor, ISortDescriptor } from './types';

export interface INormalizedColumnDescriptor {
  id: string,
  title: string,
  sortable: boolean;
  direction: SortDirection;
}

export const normalizeColumns = (columns: IColumnDescriptor[], sortable: ISortDescriptor[]) => {
  const sList = sortable.map((s: ISortDescriptor) => {
    if (typeof s === 'string') {
      return { field: s, direction: undefined };
    }
    return s;
  });
  return columns.map((c: IColumnDescriptor) => {
    let id: string;
    let title: string;
    let sortDir: SortDirection;
    if (typeof c === 'string') {
      id = c;
      title = c;
      sortDir = SortDirection.ASC;
    } else {
      id = c.id;
      title = c.title || c.id;
      sortDir = c.sortDir || SortDirection.ASC;
    }
    const sort = sList.find((s) => (s.field === id));
    if (sort) {
      return {
        id,
        title,
        sortable: true,
        direction: sort.direction || sortDir,
      };
    }
    return {
      id,
      title,
      sortable: false,
      direction: SortDirection.ASC,
    };
  });
};

export const applyAttrributes = (node: Element, attrs: {[name: string]: string}) => {
  Object.keys(attrs).forEach((name) => {
    node.setAttribute(name, attrs[name]);
  });
};
