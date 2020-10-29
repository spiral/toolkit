import sf from '@spiral-toolkit/core';
import type { AxiosResponse } from 'axios';
import { getValue } from './getValue';
import { makeUrl } from './makeUrl';
import {
  IAutocompleteDataSourceOptions,
  IAutocompleteData,
  IAutocompleteStaticDataItem,
  IAutocompleteCustomDataItem,
  IAutocompleteDataItem,
  IDatagridRequest,
} from './types';

export const LIMIT = 10;

export class AutocompleteDataSource {
  options: IAutocompleteDataSourceOptions;

  isDynamic: boolean;

  lastSearchKeyword?: string;

  constructor(options: IAutocompleteDataSourceOptions) {
    this.options = options;

    this.isDynamic = !!this.options.url;
  }

  public getData(search: string) {
    if (this.isDynamic) {
      this.getResultsByURL(search);
      return;
    }

    this.getResultsFromData(search);
  }

  public restoreDataItem(values: string[]) {
    if (this.isDynamic) {
      this.restoreDataItemByUrl(values);
      return;
    }

    this.restoreDataItemFromData(values);
  }

  restoreDataItemFromData(values: string[]) {
    const results: IAutocompleteDataItem[] = [];
    this.options.data!.forEach((item: string | IAutocompleteStaticDataItem) => {
      let id: string | undefined;
      let name: string | undefined = '';
      if (typeof item !== 'string') {
        id = item.id;
        name = item.name;
      } else {
        id = item;
        name = item;
      }

      if (values.includes(id!)) {
        results.push({ id, name });
      }
    });

    this.handleRestoreSuccess(values, results);
  }

  // TODO: use array to support multiple value in future
  restoreDataItemByUrl(values: string[]) {
    const { valueKey } = this.options;

    sf.ajax
      .send(this.getRequestParams({ paginate: { limit: values.length }, filter: { [valueKey]: values } }))
      .then((response: AxiosResponse<any>) => {
        const rawData = response.data[this.options.dataField || 'data'];

        const results: IAutocompleteDataItem[] = rawData
          .map((item: IAutocompleteCustomDataItem) => ({
            ...item,
            [valueKey]: item[valueKey].toString(),
          }))
          .slice(0, values.length);

        this.handleRestoreSuccess(values, results);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }

  handleRestoreSuccess(values: string[], results: IAutocompleteDataItem[]) {
    // sort
    const { valueKey } = this.options;
    const hash: { [key: string]: IAutocompleteDataItem } = {};
    results.forEach((dataItem: IAutocompleteDataItem) => {
      hash[getValue(dataItem, valueKey)] = dataItem;
    });

    const sortedResults: IAutocompleteDataItem[] = values.map(
      (value: string) => {
        if (!hash[value]) {
          console.warn('Could not recover autocomplete element with id ', value);
        }
        return hash[value];
      },
    ).filter(
      (v) => !!v,
    );

    this.options.onRestoreDataItem(sortedResults);
  }

  handleSuccessResponse(search: string, results: IAutocompleteData) {
    if (this.lastSearchKeyword !== search) return; // old request

    this.options.onSuccessResponse(search, results);
  }

  handleErrorResponse(search: string) {
    if (this.lastSearchKeyword !== search) return; // old request

    this.options.onErrorResponse(search);
  }

  getResultsFromData(search: string) {
    const searchLC = search.toLocaleLowerCase();

    this.lastSearchKeyword = search;

    const results: IAutocompleteData = [];

    this.options.data!.forEach((item: string | IAutocompleteStaticDataItem) => {
      let id: string | undefined;
      let name: string | undefined = '';
      if (typeof item !== 'string') {
        id = item.id;
        name = item.name;
      } else {
        id = item;
        name = item;
      }

      if (name.toLocaleLowerCase().startsWith(searchLC)) {
        results.push({ id, name });
      }
    });

    this.handleSuccessResponse(search, results);
  }

  getResultsByURL(search: string) {
    const { valueKey } = this.options;

    this.lastSearchKeyword = search;

    sf.ajax
      .send(this.getRequestParams({ paginate: { limit: LIMIT }, filter: { search } }))
      .then((response: AxiosResponse<any>) => {
        const rawData = response.data[this.options.dataField || 'data'];

        const results: IAutocompleteData = rawData
          .map((item: IAutocompleteCustomDataItem) => ({
            ...item,
            [valueKey]: item[valueKey].toString(),
          }))
          .slice(0, LIMIT);

        this.handleSuccessResponse(search, results);
      })
      .catch(() => {
        this.handleErrorResponse(search);
      });
  }

  getRequestParams(data: IDatagridRequest) {
    const {
      method,
      headers,
      url,
    } = this.options;

    const finalMethod: 'GET' | 'POST' = ((method || 'GET').toUpperCase() as any);
    const query: {
      data?: any,
      method: 'GET' | 'POST' | 'PATCH' | 'get' | 'post' | 'patch' | 'PUT' | 'put' | 'DELETE' | 'delete',
      headers?: { [key: string]: string },
      url: string,
      onProgress?: (total: number, progress: number) => any,
      response?: any
    } = {
      method: finalMethod,
      headers: headers || {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      url: url!,
      data: undefined,
    };

    if (finalMethod === 'GET') {
      query.url = makeUrl(url!, data);
    } else {
      query.data = data;
    }
    return query;
  }
}
