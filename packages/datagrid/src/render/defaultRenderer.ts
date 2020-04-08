import { IGridRenderOptions } from '../types';

export const defaultRenderer: IGridRenderOptions = {
  columns: [],
  sortable: [],
  /**
   * Basic class/attribute properties
   */
  ui: {
    wrapperClassName: 'table-responsive',
    tableClassName: 'table table-striped',
    cellClassName: {},
    rowClassName: '',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cellAttributes: (cellMeta) => ({}),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rowAttributes: (rowMeta) => ({}),
  },
};
