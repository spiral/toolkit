import { DEFAULT_LIMIT, SortDirection } from '../constants';
import type { Datagrid } from './Datagrid';
import { IPaginatorParams } from '../types';

export class DatagridState<Item = any> {
  private state: {
    loading: boolean,
    paginator: IPaginatorParams,
    sortBy?: string,
    sortDir: SortDirection,
    data: Array<Item>,
    error?: string;
    errors?: { [field: string]: string };
    formData: { [formId: string]: { [field: string]: any } };
    urlData?: { [field: string]: any };
    defaultData: { [field: string]: any };
    selection: Set<string>;
    fetchCount: boolean,
  } = {
    loading: false,
    paginator: {
      page: 1,
      limit: DEFAULT_LIMIT,
    },
    defaultData: {},
    fetchCount: false,
    sortDir: SortDirection.ASC,
    data: [],
    formData: {},
    selection: new Set<string>(),
  };

  constructor(public parent: Datagrid) {
    this.state.fetchCount = this.parent.options.fetchCount;
  }

  public isSelected(val: string) {
    return this.state.selection.has(String(val));
  }

  public areAllSelected() {
    return this.data.reduce((hasIt: boolean, item: any) => hasIt
      && !!this.parent.options.selectable
      && this.isSelected(String(item[this.parent.options.selectable.id])), true);
  }

  get selection() {
    return this.state.selection;
  }

  // eslint-disable-next-line
  get isCustomSearch() {
    return !Object.keys(this.state.formData).reduce((isDefault: boolean, formKey: string) => {
      const formData = this.state.formData[formKey];
      const isFDefault = Object.keys(formData).reduce((isD: boolean, field: string) => {
        const fieldValue = formData[field];
        const defaultValue = this.state.defaultData[field];
        if (fieldValue && defaultValue) {
          // eslint-disable-next-line eqeqeq
          return isD && (fieldValue == defaultValue);
        }
        if ((!fieldValue && defaultValue) || (fieldValue && !defaultValue)) {
          return false;
        }
        return isD;
      }, true);
      return isDefault && isFDefault;
    }, true);
  }

  // eslint-disable-next-line
  get listCustomFields() {
    const customFields = new Set<string>();
    Object.keys(this.state.formData).forEach((formKey: string) => {
      const formData = this.state.formData[formKey];
      Object.keys(formData).forEach((field: string) => {
        const fieldValue = formData[field];
        const defaultValue = this.state.defaultData[field];
        if (fieldValue && defaultValue) {
          // eslint-disable-next-line eqeqeq
          if (fieldValue != defaultValue) {
            customFields.add(field);
          }
        }
        if ((!fieldValue && defaultValue) || (fieldValue && !defaultValue)) {
          customFields.add(field);
        }
      });
    });
    return customFields;
  }

  get selectedItems() {
    return this.data.filter((item: any) => !!this.parent.options.selectable && this.isSelected(String(item[this.parent.options.selectable.id])));
  }

  get isLoading() {
    return this.state.loading;
  }

  startLoading() {
    this.state.loading = true;
  }

  get needFetchCount() {
    return this.state.fetchCount;
  }

  resetFetchCount() {
    this.state.fetchCount = this.parent.options.fetchCount;
  }

  onCountFetched() {
    this.state.fetchCount = false;
  }

  stopLoading() {
    this.state.loading = false;
  }

  get data() {
    return this.state.data;
  }

  get paginate() {
    return this.state.paginator;
  }

  get urlData() {
    return this.state.urlData;
  }

  set urlData(data: any) {
    this.state.urlData = data;
  }

  updatePaginator(params: IPaginatorParams & {error?: any, count?: any}) {
    const { error, count, ...rest } = params; // Clean up internal paginator variables, TODO: better way
    this.state.paginator = {
      ...this.state.paginator,
      ...rest,
    };
  }

  set data(data: Array<Item>) {
    this.state.data = data;
  }

  get hasError() {
    return !!this.state.error;
  }

  get errorMessage() {
    return this.state.error;
  }

  get sortBy() {
    return this.state.sortBy;
  }

  get sortDir() {
    return this.state.sortDir;
  }

  setSuccess(data: Array<Item>, pagination: {
    limit: number;
    page: number;
    count?: number; // Present if fetchCount = true;
  }) {
    this.data = data;
    this.state.error = undefined;
    this.state.errors = undefined;
    this.updatePaginator(pagination);
  }

  setError(error: string, errors: { [field: string]: string } = {}, resetData: boolean = false) {
    if (resetData) {
      this.data = [];
    }
    this.state.error = error;
    this.state.errors = errors;
  }

  setSort(field: string, direction: SortDirection) {
    this.state.sortBy = field;
    this.state.sortDir = direction;
  }

  setFormData(formId: string, data: any) {
    this.state.formData[formId] = data;
  }

  getFilter() {
    const forms = Object.keys(this.state.formData).reduce((prev, key) => ({ ...prev, ...this.state.formData[key] }), {});
    return {
      ...this.state.urlData,
      ...forms,
    };
  }

  addToSelection(value: string) {
    this.state.selection.add(String(value));
  }

  removeFromSelection(value: string) {
    this.state.selection.delete(String(value));
  }

  selectSingle(value: string) {
    this.state.selection.clear();
    this.state.selection.add(String(value));
  }

  resetSelection() {
    this.state.selection.clear();
  }

  selectAll() {
    if (this.parent.options.selectable) {
      this.state.selection = new Set(this.data.map((item: any) => String(item[this.parent.options.selectable!.id])));
    }
  }

  mergeDefaultData(data: { [field: string]: any } = {}) {
    this.state.defaultData = {
      ...this.state.defaultData,
      ...data,
    };
  }

  get defaultData() {
    return this.state.defaultData;
  }
}
