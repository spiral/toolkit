import {INormalizedColumnDescriptor} from '../dist/utils';
import { RequestMethod, SortDirection } from "./constants";
import {DatagridState} from './DatagridState';
import {IPaginatorParams} from './Paginator';

export interface IRowMeta<T = any> {
  id: string;
  index: number;
  selected: boolean;
  item: T;
  state: DatagridState;
}

export interface ICellMeta<T = any> {
  id: string;
  index: number;
  rowSelected: boolean;
  column: INormalizedColumnDescriptor;
  item: T;
  state: DatagridState;
}

export interface IDataGridUIOptions<Item = any> {
  tableClassName?: string;
  wrapperClassName?: string;
  headerCellClassName?:
      ((cellMeta: ICellMeta<Item>) => string) |
      {[fieldId: string]: string | ((cellMeta: ICellMeta<Item>) => string)},
  headerCellAttributes?:
      ((cellMeta: ICellMeta<Item>) => { [attr: string]: string })
      | {[fieldId: string]: { [attr: string]: string } | ((cellMeta: ICellMeta<Item>) => { [attr: string]: string })},
  rowClassName?: ((rowMeta: IRowMeta<Item>) => string) | string,
  rowAttributes?: ((rowMeta: IRowMeta<Item>) => { [attr: string]: string }) | { [attr: string]: string },
  cellClassName?:
      ((cellMeta: ICellMeta<Item>) => string) |
      {[fieldId: string]: string | ((cellMeta: ICellMeta<Item>) => string)},
  cellAttributes?:
      ((cellMeta: ICellMeta<Item>) => { [attr: string]: string })
      | {[fieldId: string]: { [attr: string]: string } | ((cellMeta: ICellMeta<Item>) => { [attr: string]: string })},
}

export type IColumnDescriptor = string | {
  /**
   * Field id to use
   */
  id: string;
  /**
   * Human readable title
   * for accessibility reasons should not have any markup
   */
  title?: string;
  /**
   * If present, makes column sortable
   * Defines default sort direction
   * Default sort direction
   */
  sortDir?: SortDirection;
}

/**
 * Specifies field id or field id + default sort direction
 */
export type ISortDescriptor = string | {
  field: string;
  direction: SortDirection;
}

export type IHeaderCellRenderer = ((column: INormalizedColumnDescriptor, options: IGridRenderOptions, state: DatagridState)=>Element);
export type IHeaderWrapperRenderer = ((parent: Element, options: IGridRenderOptions, state: DatagridState)=>Element | undefined);
export type ITableWrapperRenderer = ((parent: Element, options: IGridRenderOptions)=>Element);
export type IBodyWrapperRenderer = ((parent: Element, options: IGridRenderOptions, state: DatagridState)=>Element | undefined);
export type IFooterWrapperRenderer = ((parent: Element, options: IGridRenderOptions, state: DatagridState)=>Element | undefined);
export type IRowCellRenderer = ((column: INormalizedColumnDescriptor, options: IGridRenderOptions, state: DatagridState, rowIndex: number)=>Element);
export type IRowWrapperRenderer =((parent: Element, options: IGridRenderOptions, state: DatagridState, index: number)=>Element);

export interface ITableMeta<Item = any> {
  columns: IColumnDescriptor[];
  sortable: ISortDescriptor[];
  ui: IDataGridUIOptions<Item>;
}

export interface IGridRenderOptions<Item = any> extends ITableMeta<Item> {
  /**
   * Basic class/attribute properties
   */
  tableWrapper?: ITableWrapperRenderer;
  headerWrapper?: IHeaderWrapperRenderer;
  bodyWrapper?: IBodyWrapperRenderer;
  headerList?: {[columnId: string]: IHeaderCellRenderer};
  rowWrapper?: IRowWrapperRenderer;
  footerWrapper?: IFooterWrapperRenderer;
  cells?: {[columnId: string]: IRowCellRenderer};
}

export interface IDataGridOptions<Item = any> extends ITableMeta<Item> {
  id: string;
  /**
   * Id of forms or paginators to attach to and use their data in requests
   */
  captureForms: string[];
  /**
   * lock type to use on grids
   */
  lockType: string;
  /**
   * reset data to empty array upon getting error response from server
   * default to false
   */
  resetOnError: boolean;
  /**
   * Data url to grab data from
   */
  url: string;
  /**
   * Method used to grab data
   */
  method: RequestMethod;
  /**
   * Headers to attach to request
   */
  headers: { [id: string]: string };

  /**
   * Default/starting sorting
   */
  sort?: ISortDescriptor;

  renderers: IGridRenderOptions | IGridRenderOptions[];
}

export interface IDatagridResponse<Item = any> {
    pagination: {
      limit: number;
      page: number;
      count?: number; // Present if fetchCount = true;
    },
    data: Array<Item>
}
export interface IDatagridErrorResponse {
    originalError?: any;
    error: string;
    errors?: {[fieldName: string]: string}
}

export interface IDatagridRequest {
  fetchCount: boolean;
  paginate: IPaginatorParams,
  filter: {[filterField: string]: string},
  sort: {[sortField: string]: SortDirection},
}
