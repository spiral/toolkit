export interface IAutocompleteStaticDataItem {
  id?: string;
  name: string;
}

export type IAutocompleteCustomDataItem = { [key: string]: string }; // TODO
export type IAutocompleteDataItem = IAutocompleteStaticDataItem | IAutocompleteCustomDataItem;
export type IAutocompleteData = IAutocompleteDataItem[];

export interface IAutocompleteOptions {
  id: string;
  name: string;
  isMultiple?: boolean;
  data?: IAutocompleteStaticDataItem[] | string[];
  inputTemplate?: string;
  suggestTemplate?: string;
  valueKey?: string;
  searchKey?: string;
  separator?: string;
  url?: string;
  dataField?: string;
  method?: 'GET' | 'POST';
  headers?: { [key: string]: string };
}

export interface IAutocompleteDataSourceOptions {
  data?: IAutocompleteStaticDataItem[] | string[];
  url?: string;
  valueKey: string;
  dataField: string;
  method?: 'GET' | 'POST';
  headers?: { [key: string]: string };
  onRestoreDataItem: (dataItems: IAutocompleteDataItem[]) => void;
  onSuccessResponse: (search: string, results: IAutocompleteData) => void;
  onErrorResponse: (search: string) => void;
}

export interface IAutocompleteDropdownOptions {
  inputTemplate: Function;
  suggestTemplate: Function;
  onSelectItem: (dataItem: IAutocompleteDataItem, isSave?: boolean) => void;
  onBlur: () => void;
}

export interface IAutocompleteTagsOptions {
  valueKey: string;
  inputTemplate: Function;
  onRemoveTag: (dataItem: IAutocompleteDataItem) => void;
}

export interface IDatagridRequest {
  fetchCount?: boolean;
  paginate?: { limit?: number };
  filter?: { [filterField: string]: string | string[] };
  sort?: { [sortField: string]: 'asc' | 'desc' };
}
