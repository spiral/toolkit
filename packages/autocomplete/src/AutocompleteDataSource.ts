import sf from '@spiral-toolkit/core';
import type { AxiosResponse } from 'axios';
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

  public restoreDataItem(value: string) {
    if (this.isDynamic) {
      this.restoreDataItemByUrl(value);
      return;
    }

    this.restoreDataItemFromData(value);
  }

  restoreDataItemFromData(value: string) {
    let result: IAutocompleteDataItem | undefined;
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

      if (id === value) {
        result = { id, name };
      }
    });

    this.options.onRestoreDataItem(result);
  }

  // TODO: use array to support multiple value in future
  restoreDataItemByUrl(value: string) {
    const {
      valueKey,
    } = this.options;

    sf.ajax
      .send(this.getRequestParams({ paginate: { limit: 1 }, filter: { [valueKey]: [value] } }))
      .then((response: AxiosResponse<any>) => {
        const results: IAutocompleteData = response.data[this.options.dataField || 'data'];

        const result: IAutocompleteCustomDataItem | undefined = (!results || !results.length) ? undefined : results[0] as IAutocompleteCustomDataItem;

        this.options.onRestoreDataItem(result);
      })
      .catch(() => {
        //
      });
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
    sf.ajax
      .send(this.getRequestParams({ paginate: { limit: 10 }, filter: { search } }))
      .then((response: AxiosResponse<any>) => {
        const results: IAutocompleteData = response.data[this.options.dataField || 'data'];

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
