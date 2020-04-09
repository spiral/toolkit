import { PaginatorType, RequestMethod, SortDirection } from './constants';
import type { DatagridState } from './DatagridState';

export interface IRowMeta<T = any> {
  id: string;
  index: number;
  selected: boolean;
  item: T;
  state: DatagridState;
}

export interface INormalizedColumnDescriptor {
  id: string,
  title: string,
  sortable: boolean;
  direction: SortDirection;
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
  { [fieldId: string]: string | ((cellMeta: ICellMeta<Item>) => string) },
  headerCellAttributes?:
  ((cellMeta: ICellMeta<Item>) => { [attr: string]: string })
  | { [fieldId: string]: { [attr: string]: string } | ((cellMeta: ICellMeta<Item>) => { [attr: string]: string }) },
  rowClassName?: ((rowMeta: IRowMeta<Item>) => string) | string,
  rowAttributes?: ((rowMeta: IRowMeta<Item>) => { [attr: string]: string }) | { [attr: string]: string },
  cellClassName?:
  ((cellMeta: ICellMeta<Item>) => string) |
  { [fieldId: string]: string | ((cellMeta: ICellMeta<Item>) => string) },
  cellAttributes?:
  ((cellMeta: ICellMeta<Item>) => { [attr: string]: string })
  | { [fieldId: string]: { [attr: string]: string } | ((cellMeta: ICellMeta<Item>) => { [attr: string]: string }) },
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
};

/**
 * Specifies field id or field id + default sort direction
 */
export type ISortDescriptor = string | {
  field: string;
  direction: SortDirection;
};


export type CellRenderFunction =
  ((
    cellValue: any, // Cell value if column id matches dataset, undefined for custom columns
    rowItem: any, // Row item, can be used for custom render of cross-dependent fields
    column: INormalizedColumnDescriptor, // Column meta
    options: IGridRenderOptions,
    rowIndex: number,
    state: DatagridState,
  )
  => Element | string | undefined);

/**
 * Allows to create custom element or no element
 */
export type CellRenderAdvanced = {
  render: CellRenderFunction,
  createEl: ()=>Element | undefined,
};

export type HeaderCellRenderFunction =
  ((
    column: INormalizedColumnDescriptor, // Column meta
    options: IGridRenderOptions,
    state: DatagridState,
  )
  => Element | string | undefined);

export type HeaderCellRenderAdvanced = {
  render: HeaderCellRenderFunction,
  createEl: ()=>Element | undefined,
};

export type IHeaderCellRenderer = HeaderCellRenderFunction | HeaderCellRenderAdvanced;

export type IRowCellRenderer = CellRenderFunction | CellRenderAdvanced;

export type IHeaderWrapperRenderer = ((parent: Element, options: IGridRenderOptions, state: DatagridState) => Element | undefined);
export type ITableWrapperRenderer = ((parent: Element, options: IGridRenderOptions) => Element);
export type IBodyWrapperRenderer = ((parent: Element, options: IGridRenderOptions, state: DatagridState) => Element | undefined);
export type IFooterWrapperRenderer = ((parent: Element, options: IGridRenderOptions, state: DatagridState) => Element | undefined);

export type IRowWrapperRenderer = ((parent: Element, options: IGridRenderOptions, state: DatagridState, index: number) => Element);

export interface ITableMeta<Item = any> {
  columns: IColumnDescriptor[];
  sortable: ISortDescriptor[];
}

export interface IGridRenderOptions<Item = any> extends ITableMeta<Item> {
  /**
   * Basic class/attribute properties
   */
  tableWrapper?: ITableWrapperRenderer;
  headerWrapper?: IHeaderWrapperRenderer;
  bodyWrapper?: IBodyWrapperRenderer;
  headerList?: { [columnId: string]: IHeaderCellRenderer };
  rowWrapper?: IRowWrapperRenderer;
  footerWrapper?: IFooterWrapperRenderer;
  cells?: { [columnId: string]: IRowCellRenderer };
  /**
   * Add default paginator
   */
  paginator?: boolean;
  ui: Partial<IDataGridUIOptions<Item>>;
  dontRenderError?: boolean;
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
   * By default error is displayed inside table, define errorMessageTarget to target specific form that will be responsible for displaying error message
   */
  errorMessageTarget?: string;

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

  /**
   * If to use URL serialization
   * pass true to use it
   * pass string to have grid use specific prefix to params in url
   * pass false to not use it
   */
  serialize: boolean;

  /**
   * When using several datagrids that you want to be serialized in URL specify namespace that will be used as a prefix for URL params
   * Not non-namespaced datagrids will consume ALL url query params.
   */
  namespace?: string;

  /**
   * Add default paginator below the table
   * @default true
   */
  paginator: boolean;

  ui?: Partial<IDataGridUIOptions<Item>>;
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
  errors?: { [fieldName: string]: string }
}

export interface IPaginatorOptions {
  id: string,
  type: PaginatorType,
  fetchCount: boolean;
  fetchCountOnce: boolean;
  serialize: string | boolean;
  onPageChange?: (params: IPaginatorParams) => void,
  lockType: string,
  className?: string,
  limitOptions: Array<number>,
}

export interface IPaginatorParams {
  page?: number,
  limit?: number,
  fetchCount?: boolean,
  /**
   * Optional 'last id' parameter
   */
  lid?: string,
  /**
   * Optional 'cursor id' parameter
   */
  cid?: string;
}

export interface IDatagridRequest {
  fetchCount: boolean;
  paginate: IPaginatorParams,
  filter: { [filterField: string]: string },
  sort: { [sortField: string]: SortDirection },
}
