import { IDataGridMessages } from './types';

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

export enum SelectionType {
  SINGLE = 'single',
  MULTIPLE = 'multiple'
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

export const PAGINATOR_CLASS_NAME = 'sf-js-datagrid-paginator';
export const ACTION_PANEL_CLASS_NAME = 'sf-js-datagrid-actionpanel';
export const CURSOR_ID_FIELD = 'cid';
export const LAST_ID_FIELD = 'lid';

export const pageParams = ['page', 'limit', CURSOR_ID_FIELD, LAST_ID_FIELD];
export const sortParams = ['sortBy', 'sortDir'];
export const DEFAULT_LIMIT = 25;

export const defaultGridMessages: IDataGridMessages = {
  noData: "No Data",
  noResults: "No data matches your search criteria",
  error: "Unknown error"
}

export enum PaginatorType {
  pages = 'pages',
  infinite = 'infinite',
}

export const DATAGRID_CHECK_SELECT_ATTR = 'data-datagrid-select';
export const DATAGRID_CHECK_SELECT_ALL_ATTR = 'data-datagrid-select-all';
