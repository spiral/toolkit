import { stringifyUrl } from 'query-string';
import { IDatagridRequest } from './types';

export function makeUrl(url: string, data: IDatagridRequest) {
  const result: {[field: string]: any} = {};
  if (data.fetchCount) {
    result.fetchCount = true;
  }
  if (data.filter) {
    Object.keys(data.filter).forEach((field) => {
      result[`filter[${field}]`] = data.filter![field];
    });
  }
  if (data.paginate) {
    Object.keys(data.paginate).forEach((field) => {
      result[`paginate[${field}]`] = (data.paginate as any)[field];
    });
  }
  if (data.sort) {
    Object.keys(data.sort).forEach((field) => {
      result[`sort[${field}]`] = data.sort![field];
    });
  }
  return stringifyUrl({ url, query: result });
}
