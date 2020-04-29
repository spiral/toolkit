import type { ActionPanel, FlexibleRenderDefinition } from './actionpanel/ActionPanel';
import {
  PaginatorType, RequestMethod, SelectionType, SortDirection,
} from './constants';
import type Datagrid from './datagrid/Datagrid';
import type { DatagridState } from './datagrid/DatagridState';
import { Messages } from './messages';

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
  createEl: () => Element | undefined,
};

export type CellRenderWithTool = { name: string, arguments: any[] };

export type HeaderCellRenderFunction =
  ((
    column: INormalizedColumnDescriptor, // Column meta
    options: IGridRenderOptions,
    state: DatagridState,
  )
  => Element | string | undefined);

export type HeaderCellRenderAdvanced = {
  render: HeaderCellRenderFunction,
  createEl: () => Element | undefined,
};

export type IHeaderCellRenderer = HeaderCellRenderFunction | HeaderCellRenderAdvanced;

export type IRowCellRenderer = CellRenderFunction | CellRenderAdvanced | CellRenderWithTool;

export type IHeaderWrapperRenderer = ((
  parent: Element,
  options: IGridRenderOptions,
  state: DatagridState,
  messages: Messages,
) => { outer: Element, inner: Element } | undefined);
export type ITableWrapperRenderer = ((
  parent: Element,
  options: IGridRenderOptions) => Element);
export type IBodyWrapperRenderer = ((
  parent: Element,
  options: IGridRenderOptions,
  state: DatagridState,
  messages: Messages) => Element | undefined);
export type IFooterWrapperRenderer = ((
  parent: Element,
  options:
  IGridRenderOptions,
  state: DatagridState,
  messages: Messages
) => Element | undefined);

export type IRowWrapperRenderer = ((
  parent: Element,
  options: IGridRenderOptions,
  state: DatagridState,
  index: number) => Element);

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
  paginator?: Partial<IPaginatorOptions> | true;
  ui: Partial<IDataGridUIOptions<Item>>;
  dontRenderError?: boolean;
  /**
   * Mark column as selectable
   * Define 'multiple' or 'single' to enable multiple items selection or single row selection
   */
  selectable?: {
    type: SelectionType,
    id: string,
  },
  /**
   * Render default action bar, expected to work with selections only
   */
  actions?: {
    [action: string]: IActionDescriptor,
  }

  messages?: Partial<IDataGridMessages>,
}

export interface IDataGridMessages extends Object {
  noData: string;
  noResults: string;
  error: string;
}

export interface IPaginatorMessages extends Object {
  limitLabel: string;
  currentPage: string;
  currentPageNoTotal: string;
  ellipsis: string;
  error: string;
  prevPage: string;
  nextPage: string;
}

export interface IDataGridOptions<Item = any> extends ITableMeta<Item> {
  id: string;
  /**
   * Url(for legacy compatibility) forms or paginators ids to attach to and use their data in requests
   */
  captureForms: string[];
  /**
   * Ids of actions panels to connect to
   */
  captureActionPanels?: string[];
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

  messages?: Partial<IDataGridMessages>,

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
   * If to fetch count of items on this table
   * @default true
   */
  fetchCount: boolean;

  /**
   * When using several datagrids that you want to be serialized in URL specify namespace that will be used as a prefix for URL params
   * Not non-namespaced datagrids will consume ALL url query params.
   */
  namespace?: string;

  /**
   * Add default paginator below the table
   * @default true
   */
  paginator?: Partial<IPaginatorOptions> | true;

  /**
   * Mark column as selectable
   * Define 'multiple' or 'single' to enable multiple items selection or single row selection
   */
  selectable?: {
    type: SelectionType,
    id: string,
  },

  ui?: Partial<IDataGridUIOptions<Item>>;

  /**
   * Specify what response field to use for data array
   */
  dataField?: string;

  /**
   * Specify custom response processor to be used for both success and error responses
   */
  responseProcessor?: (response: any) => {
    data: IDatagridResponse | IDatagridErrorResponse, status: number, statusText: string
  }
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
  willFetchCount: boolean;
  serialize: string | boolean;
  onPageChange?: (params: IPaginatorParams) => void,
  lockType: string,
  className?: string,
  messages?: Partial<IPaginatorMessages>,
  limitOptions: Array<number>,
}

export interface IPaginatorParams {
  page?: number,
  limit?: number,
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

export interface IActionPanelState<Item = any> {
  hasSelection: boolean,
  selectedCount: number,
  selectionType: SelectionType,
  selectedItems: Array<Item>,
  selectedKeys: Set<string>,
}

export interface IActionDescriptor {
  renderAs: FlexibleRenderDefinition,
  className?: string | ((state: IActionPanelState) => string),
  onClick: (state: IActionPanelState, grid: Datagrid | undefined, root: ActionPanel, e: MouseEvent) => any,
}

export interface IActionPanelOptions {
  id: string,
  lockType: string,
  noSelection?: string | Element;
  selectionLabel?: FlexibleRenderDefinition;
  className?: string | ((state: IActionPanelState) => string),
  actionClassName?: string | ((actionId: string, state: IActionPanelState) => string) | { [actionId: string]: string },
  selectionType: SelectionType,
  actions: {
    [action: string]: IActionDescriptor,
  }
}
