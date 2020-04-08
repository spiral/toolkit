import sf from '@spiral-toolkit/core';
import type { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import * as assert from 'assert';
import { RequestMethod, SortDirection } from './constants';
import { DatagridState } from './DatagridState';
import Paginator, { IPaginatorParams } from './Paginator';
import { defaultRenderer } from './render/defaultRenderer';
import { GridRenderer } from './render/GridRenderer';
import {
  IDatagridErrorResponse,
  IDataGridOptions,
  IDatagridRequest,
  IDatagridResponse,
  IGridRenderOptions,
} from './types';
import { INormalizedColumnDescriptor, normalizeColumns } from './utils';

// import './styles.css';

export class Datagrid<Item = any> extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'datagrid';

  public readonly name = Datagrid.spiralFrameworkName;

  static defaultOptions: IDataGridOptions = {
    id: '',
    lockType: 'default',
    resetOnError: false,
    captureForms: [],
    columns: [],
    headers: {},
    method: RequestMethod.POST,
    sortable: [],
    url: '',
    ui: {
      cellAttributes: {},
      rowAttributes: {},
      rowClassName: '',
      cellClassName: {},
      tableClassName: 'table table-stripped',
      wrapperClassName: 'table-responsive',
    },
    renderers: defaultRenderer,
  };

  public readonly optionsToGrab: {[option: string]: IOptionToGrab} = {
    id: {
      value: Datagrid.defaultOptions.id,
      domAttr: 'id',
    },
    url: {
      value: Datagrid.defaultOptions.url,
      domAttr: 'data-url',
    },
  };

  options: IDataGridOptions<Item> = { ...Datagrid.defaultOptions };

  grids: GridRenderer[] = [];

  sf!: ISpiralFramework;

  state: DatagridState<Item> = new DatagridState<Item>(this);

  capturedForms: Array<any> = []; // TODO: type as sf.Form instance array

  capturedPaginators: Array<any> = []; // TODO: type as sf.Paginator instance array

  private columnInfo: INormalizedColumnDescriptor[];

  constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions<Item>) {
    super();
    this.init(sf, node, options);
    this.options = {
      ...Datagrid.defaultOptions,
      ...this.options,
    };
    const additionalOptionsEl = node.querySelector('script[role="sf-options"]');
    if (additionalOptionsEl) {
      try {
        const one = Function(`"use strict";return ${additionalOptionsEl.innerHTML.trim()}`);
        // console.log('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + '');
        const overrides = one()();
        this.options = {
          ...this.options,
          ...overrides,
        };
      } catch (e) {
        console.error('Could not parse options inside script, ensure script inside is an anonymous function returning IDataGridOptions object');
        throw e;
      }
    }
    assert.notEqual(this.options.id, '', 'id should be not empty');
    assert.notEqual(this.options.url, '', 'url should be not empty');


    // Process options

    // TODO: we can override columns and sort options inside renderers but it might produce situation of triggering unexisting sort
    // Think about that, or ignore
    this.columnInfo = normalizeColumns(this.options.columns, this.options.sortable);

    // Set default sort if present
    if (this.options.sort) {
      if (typeof this.options.sort === 'string') {
        this.state.setSort(this.options.sort, SortDirection.ASC);
      } else {
        this.state.setSort(this.options.sort.field, this.options.sort.direction || SortDirection.ASC);
      }
    }

    this.createRenderers();
    this.captureForms();
    this.request();
  }

  private registerFormInstance(formInstance: any) {
    if (formInstance.options && formInstance.options.id && this.options.captureForms.indexOf(formInstance.options.url) >= 0) {
      this.capturedForms.push(formInstance);
      formInstance.options.jsonOnly = true;
      formInstance.options.beforeSubmitCallback = (options: any) => {
        this.resetPaginator();
        this.state.setFormData(formInstance.options.id, options.data);
        this.request(); // TODO: better way
        return false;
      };
    }
  }

  private registerPaginatorInstance(formInstance: any) {
    if (formInstance.options && formInstance.options.id && this.options.captureForms.indexOf(formInstance.options.id) >= 0) {
      this.capturedPaginators.push(formInstance);
      formInstance.options.onPageChange = (options: IPaginatorParams) => {
        this.state.updatePaginator(options);
        this.request(); // TODO: better way
        return false;
      };
    }
  }

  captureForms() {
    const forms = this.sf.getInstances('form') || [];
    forms.forEach((f) => {
      this.registerFormInstance(f.instance);
    });

    const paginators = this.sf.getInstances(Paginator.spiralFrameworkName) || [];
    paginators.forEach((f) => {
      this.registerFormInstance(f.instance);
    });

    this.sf.instancesController.events.on('onAddInstance', ({ instance, type }: { instance: any, type: string }) => {
      if (type === 'form') {
        this.registerFormInstance(instance);
      }
      if (type === Paginator.spiralFrameworkName) {
        this.registerPaginatorInstance(instance);
      }
    });
  }

  /**
     * Sets sort for this field if not yet, or changes direction if already same
     * @param fieldId
     */
  triggerSort(fieldId: string) {
    if (this.state.sortBy === fieldId) {
      if (this.state.sortDir === SortDirection.ASC) {
        this.state.setSort(fieldId, SortDirection.DESC);
      } else {
        this.state.setSort(fieldId, SortDirection.ASC);
      }
    } else {
      const field = this.columnInfo.find((cI) => cI.id === fieldId);
      if (field) {
        this.state.setSort(field.id, field.direction);
      } else {
        console.warn(`Trying to sort by unsortable field ${fieldId}`);
      }
    }
    this.resetPaginator();
    this.request();
  }

  private resetPaginator() {
    // TODO: depending on paginator type perform different reset type
    this.state.updatePaginator({ page: 1 });
    this.capturedPaginators.forEach((f) => {
      if (f.setParams) {
        f.setParams(this.state.paginate);
      }
    });
  }

  private formRequest() {
    const request: IDatagridRequest = {
      fetchCount: true,
      filter: this.state.getFilter(),
      paginate: this.state.paginate,
      sort: this.state.sortBy ? { [this.state.sortBy]: this.state.sortDir } : {},
    };

    return request;
  }

  private unlock() {
    if (!this.sf.removeInstance('lock', this.node)) {
      console.warn('You try to remove \'lock\' instance, but it is not available or not started');
    }
    this.capturedForms.forEach((f) => {
      if (f.unlock) {
        f.unlock();
      }
    });
    this.capturedPaginators.forEach((f) => {
      if (f.unlock) {
        f.unlock();
      }
    });
  }

  private lock() {
    if (!this.options.lockType || this.options.lockType === 'none') {
      return;
    }
    const lock = this.sf.addInstance('lock', this.node, { type: this.options.lockType });
    if (!lock) {
      console.warn('You try to add \'lock\' instance, but it is not available or already started');
      return;
    }
    this.capturedForms.forEach((f) => {
      if (f.lock) {
        f.lock();
      }
    });
    this.capturedPaginators.forEach((f) => {
      if (f.lock) {
        f.lock();
      }
    });
  }

  private handleSuccess({ data }: { data: IDatagridResponse<Item> }) {
    console.log('Success', data);
    this.state.setSuccess(data.data, data.pagination);
    this.render();
    this.capturedPaginators.forEach((f) => {
      if (f.setParams) {
        f.setParams(this.state.paginate);
      }
    });
  }

  private beforeSubmit() {
    this.capturedForms.forEach((f) => {
      if (f.removeMessages) {
        f.removeMessages();
      }
    });
  }

  private handleError({ data, status, statusText }: { data: IDatagridErrorResponse, status: number, statusText: string }) {
    console.log('Error', data);
    this.state.setError(data.error, data.errors, this.options.resetOnError);
    this.capturedForms.forEach((f) => {
      if (f.processAnswer) {
        f.processAnswer({ data, status, statusText });
      }
    });
    this.capturedPaginators.forEach((f) => {
      if (f.processAnswer) {
        f.processAnswer({ data, status, statusText }); // TODO: might be different API
      }
    });
    this.render();
    // TODO: set error status
    // TODO: remove data and display error
    // TODO: send validation errors to other forms
  }

  async request() {
    if (this.state.isLoading) {
      console.warn('Cant start new request');
      return;
    }
    this.state.startLoading();
    this.beforeSubmit();
    this.lock();
    const data = this.formRequest();
    const request = this.sf.ajax.send<{ data: IDatagridResponse }>({
      url: this.options.url,
      method: this.options.method,
      headers: this.options.headers,
      data,
    });
    try {
      const response: { data: IDatagridResponse } = await request;
      this.handleSuccess(response);
    } catch (e) {
      if (e.isSFAjaxError) {
        this.handleError(e);
      } else {
        this.handleError({
          data: {
            error: e.toString(),
            originalError: e,
          },
          status: 1000,
          statusText: e.toString(),
        });
      }
    } finally {
      this.unlock();
      this.state.stopLoading();
    }
  }

  createRenderers() {
    assert.deepEqual(this.grids, [], 'Grids are already initialized');
    const renderList: IGridRenderOptions[] = Array.isArray(this.options.renderers) ? this.options.renderers : [this.options.renderers];
    renderList.forEach((renderOption: IGridRenderOptions) => {
      this.grids.push(new GridRenderer({
        ...renderOption, // TODO: we want to be able to override ui option too
        columns: (renderOption.columns && renderOption.columns.length) ? renderOption.columns : this.options.columns,
        sortable: (renderOption.sortable && renderOption.sortable.length) ? renderOption.sortable : this.options.sortable,
      }, this));
    });
  }

  render() {
    this.grids.forEach((grid) => {
      grid.render(this.state);
    });
  }
}

export default Datagrid;
