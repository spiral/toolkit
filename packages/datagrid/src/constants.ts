export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

export const CURSOR_ID_FIELD = 'cid';
export const LAST_ID_FIELD = 'lid';

export const pageParams = ['page', 'limit', CURSOR_ID_FIELD, LAST_ID_FIELD];
export const sortParams = ['sortBy', 'sortDir'];
