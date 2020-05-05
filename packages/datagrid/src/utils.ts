import { SortDirection } from './constants';
import { IColumnDescriptor, ISortDescriptor } from './types';

export const normalizeColumns = (columns: IColumnDescriptor[], sortables: ISortDescriptor[]) => {
  const sList = sortables.map((s: ISortDescriptor) => {
    if (typeof s === 'string') {
      return { field: s, direction: undefined };
    }
    return s;
  });
  return columns.map((c: IColumnDescriptor) => {
    let id: string;
    let title: string;
    let sortDir: SortDirection;
    let sortable = false;
    if (typeof c === 'string') {
      id = c;
      title = c;
      sortDir = SortDirection.ASC;
    } else {
      id = c.id;
      title = c.title || c.id;
      sortDir = c.sortDir || SortDirection.ASC;
      sortable = !!c.sortDir;
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
      sortable,
      direction: sortDir,
    };
  });
};

export const applyAttrributes = (node: Element, attrs: {[name: string]: string}) => {
  Object.keys(attrs).forEach((name) => {
    node.setAttribute(name, attrs[name]);
  });
};

export function isString(something: any): something is string {
  return typeof something === 'string';
}

export function addClasses(el: Element, classes: string | undefined) {
  const classNames = ((classes || '').split(' ')).map((c) => c.trim()).filter((c) => !!c);
  if (classNames.length) {
    el.classList.add(...classNames);
  }
}
