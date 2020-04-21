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

export class AutocompleteDataSource {
  options: IAutocompleteDataSourceOptions;

  isDynamic: boolean;

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
      .send(this.getRequestParams({ paginate: { limit: 1 }, filter: { [valueKey]: values } }))
      .then((response: AxiosResponse<any>) => {
        const rawData = response.data[this.options.dataField || 'data'];

        const results: IAutocompleteDataItem[] = rawData.map((item: IAutocompleteCustomDataItem) => ({
          ...item,
          [valueKey]: item[valueKey].toString(),
        }));

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

    const sortedResults: IAutocompleteDataItem[] = values.map((value: string) => hash[value]);

    this.options.onRestoreDataItem(sortedResults);
  }

  getResultsFromData(search: string) {
    const searchLC = search.toLocaleLowerCase();

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

    this.options.onSuccessResponse(search, results);
  }

  getResultsByURL(search: string) {
    const { valueKey } = this.options;

    sf.ajax
      .send(this.getRequestParams({ paginate: { limit: 10 }, filter: { search } }))
      .then((response: AxiosResponse<any>) => {
        const rawData = response.data[this.options.dataField || 'data'];

        const results: IAutocompleteData = rawData.map((item: IAutocompleteCustomDataItem) => ({
          ...item,
          [valueKey]: item[valueKey].toString(),
        }));

        this.options.onSuccessResponse(search, results);
      })
      .catch(() => {
        this.options.onErrorResponse(search);
      });
  }

  getRequestParams(data: IDatagridRequest) {
    const {
      method,
      headers,
      url,
    } = this.options;

    return {
      method: method || 'GET',
      headers: headers || {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      url: makeUrl(url!, data),
    };
  }
}
