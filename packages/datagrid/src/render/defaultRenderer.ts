import { RequestMethod } from '../constants';
import {
  ICellMeta, IDataGridOptions, IGridRenderOptions, IRowMeta,
} from '../types';

export const defaultGridUiOptions = {
  wrapperClassName: 'table-responsive',
  tableClassName: 'table table-striped',
  cellClassName: {},
  rowClassName: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cellAttributes: (cellMeta: ICellMeta) => ({}),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rowAttributes: (rowMeta: IRowMeta) => ({}),
};

export const defaultRenderer: IGridRenderOptions = {
  columns: [],
  sortable: [],
  /**
   * Basic class/attribute properties
   */
  ui: defaultGridUiOptions,
};

export const defaultGridOptions: IDataGridOptions = {
  id: '',
  lockType: 'default',
  resetOnError: false,
  captureForms: [],
  columns: [],
  headers: {},
  method: RequestMethod.POST,
  sortable: [],
  url: '',
  serialize: true,
  paginator: true,
  ui: defaultGridUiOptions,
  renderers: defaultRenderer,
};
