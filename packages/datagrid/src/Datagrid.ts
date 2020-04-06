import sf, {ISpiralFramework} from '@spiral-toolkit/core';
import * as assert from 'assert';
import {pageParams, RequestMethod, SortDirection, sortParams} from './constants';
import {DatagridState, DEFAULT_LIMIT} from './DatagridState';
import Paginator, {IPaginatorParams} from './Paginator';
import {defaultRenderer} from './render/defaultRenderer';
import {GridRenderer} from './render/GridRenderer';
import {
    IDatagridErrorResponse,
    IDataGridOptions,
    IDatagridRequest,
    IDatagridResponse,
    IGridRenderOptions
} from './types';
import {INormalizedColumnDescriptor, normalizeColumns} from './utils';

import {parse, stringifyUrl} from 'query-string';

// import './styles.css';

export class Datagrid<Item = any> extends sf.core.BaseDOMConstructor {
    static spiralFrameworkName: string = 'datagrid';
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
        serialize: true,
        ui: {
            cellAttributes: {},
            rowAttributes: {},
            rowClassName: '',
            cellClassName: {},
            tableClassName: 'table table-stripped',
            wrapperClassName: 'table-responsive'
        },
        renderers: defaultRenderer,
    };

    protected optionsToGrab = {
        id: {
            value: Datagrid.defaultOptions.id,
            domAttr: 'id',
        },
        url: {
            value: Datagrid.defaultOptions.url,
            domAttr: 'data-url',
        }
    };

    options: IDataGridOptions<Item> = {...Datagrid.defaultOptions};
    grids: GridRenderer[] = [];
    sf!: ISpiralFramework;
    state: DatagridState<Item> = new DatagridState<Item>(this);
    capturedForms: { [id: string]: { instance: any, fields: Array<string> } } = {}; // TODO: type as sf.Form instance array
    capturedPaginators: Array<any> = []; // TODO: type as sf.Paginator instance array
    private defaults: IPaginatorParams & { sortBy?: string, sortDir?: SortDirection } = {
        page: 1, // TODO: different defaults depending on paginator type
        limit: DEFAULT_LIMIT,
    };

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
                const one = Function('"use strict";return ' + additionalOptionsEl.innerHTML.trim() + '');
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
                this.defaults.sortBy = this.options.sort;
                this.defaults.sortDir = SortDirection.ASC;
            } else {
                this.defaults.sortBy = this.options.sort.field;
                this.defaults.sortDir = this.options.sort.direction || SortDirection.ASC;
            }
            this.state.setSort(this.defaults.sortBy, this.defaults.sortDir);
        }

        this.createRenderers();
        this.initFromUrl();
        this.captureForms();
        this.request();
    }

    private registerFormInstance(formInstance: any) {
        if (formInstance.options && formInstance.options.id && this.options.captureForms.indexOf(formInstance.options.url) >= 0) {
            const id = formInstance.options.id;
            const fields = formInstance.enumerateFieldNames();

            this.capturedForms[id] = {
                instance: formInstance,
                fields,
            };

            const urlDataForForm = this.state.urlData ? Object.keys(this.state.urlData).filter((key) => fields.indexOf(key) >= 0).reduce((map, key) => ({
                ...map,
                [key]: this.state.urlData[key],
            }), {}) : undefined;

            if (urlDataForForm) {
                formInstance.setFieldValues(urlDataForForm);
            }

            formInstance.options.jsonOnly = true;
            formInstance.options.beforeSubmitCallback = (options: any) => {
                this.resetPaginator();
                this.state.setFormData(id, options.data);
                this.capturedForms[id].fields = [...new Set([...Object.keys(options.data), ...this.capturedForms[id].fields])]; // Merge new fields if any
                this.request(); // TODO: better way
                return false;
            }
        }
    }

    private registerPaginatorInstance(formInstance: any) {
        if (formInstance.options && formInstance.options.id && this.options.captureForms.indexOf(formInstance.options.id) >= 0) {
            this.capturedPaginators.push(formInstance);
            formInstance.options.onPageChange = (options: IPaginatorParams) => {
                this.state.updatePaginator(options);
                this.request(); // TODO: better way
                return false;
            }
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

        this.sf.instancesController.events.on('onAddInstance', ({instance, type}: { instance: any, type: string }) => {
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
            const field = this.columnInfo.find(cI => cI.id === fieldId);
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
        this.state.updatePaginator({page: 1});
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
            sort: this.state.sortBy ? {[this.state.sortBy]: this.state.sortDir} : {}
        };

        return request;
    }

    private unlock() {
        if (!this.sf.removeInstance('lock', this.node)) {
            console.warn('You try to remove \'lock\' instance, but it is not available or not started');
        }
        Object.keys(this.capturedForms).forEach((fKey) => {
            const f = this.capturedForms[fKey].instance;
            if (f.unlock) {
                f.unlock();
            }
        });
        this.capturedPaginators.forEach((f) => {
            if (f.unlock) {
                f.unlock();
            }
        });
        return;
    }

    private lock() {
        if (!this.options.lockType || this.options.lockType === 'none') {
            return;
        }
        const lock = this.sf.addInstance('lock', this.node, {type: this.options.lockType});
        if (!lock) {
            console.warn('You try to add \'lock\' instance, but it is not available or already started');
            return;
        }
        Object.keys(this.capturedForms).forEach((fKey) => {
            const f = this.capturedForms[fKey].instance;
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

    private handleSuccess({data}: { data: IDatagridResponse<Item> }) {
        this.state.setSuccess(data.data, data.pagination);
        this.render();
        this.capturedPaginators.forEach((f) => {
            if (f.setParams) {
                f.setParams(this.state.paginate);
            }
        });
    }

    private beforeSubmit() {
        Object.keys(this.capturedForms).forEach((fKey) => {
            const f = this.capturedForms[fKey].instance;
            if (f.removeMessages) {
                f.removeMessages();
            }
        });
    }

    private handleError({data, status, statusText}: { data: IDatagridErrorResponse, status: number, statusText: string }) {
        this.state.setError(data.error, data.errors, this.options.resetOnError);
        Object.keys(this.capturedForms).forEach((fKey) => {
            const f = this.capturedForms[fKey].instance;
            if (f.processAnswer) {
                f.processAnswer({data, status, statusText}, false); // false stands for 'dont display errors unrelated to form inputs'
            }
        });
        this.capturedPaginators.forEach((f) => {
            if (f.processAnswer) {
                f.processAnswer({data, status, statusText}); // TODO: might be different API
            }
        });
        this.render();
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
        this.updateUrl();
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

    private serialize() {
        const custom = this.state.getFilter();
        const pagination = Object.keys(this.state.paginate)
            .filter((k) => pageParams.indexOf(k) >= 0)
            .reduce((map: any, key) => ({
                ...map,
                [key]: (this.state.paginate as any)[key],
            }), {});
        const sortOptions = this.state.sortBy ? {sortBy: this.state.sortBy, sortDir: this.state.sortDir} : {};

        return {
            ...custom,
            ...pagination,
            ...sortOptions,
        };
    }

    private deserialize(values: { [value: string]: string }) {
        const {page, limit, cid, lid} = values;
        this.state.updatePaginator({page: +page, limit: +limit, cid, lid}); // TODO: skip invalid page/limit values

        const {sortBy, sortDir} = values;
        if (sortBy) {
            this.state.setSort(sortBy, sortDir as any || SortDirection.ASC); // TODO: skip
        }
        [...pageParams, ...sortParams].forEach((p) => delete values[p]);
        this.state.urlData = values;
    }

    private initFromUrl() {
        if (this.options.serialize) {
            if (window.location.search) {
                const urlData = this.getObjectFromUrl(this.defaults, typeof this.options.serialize === 'string' ? this.options.serialize : '');
                if (Object.keys(urlData).length) {
                    this.deserialize(urlData);
                }
            }
        }
    }

    private updateUrl() {
        if (this.options.serialize) {
            const data = this.serialize();
            this.putObjectToUrl(data, this.defaults, typeof this.options.serialize === 'string' ? this.options.serialize : '');
        }
    }

    private getObjectFromUrl(defaults: any, prefix = '') {
        const obj = parse(window.location.search, {parseNumbers: true, parseBooleans: true});
        const result = Object.keys(obj).reduce((map, oK) => {
            if (!prefix || oK.indexOf(prefix) === 0) {
                return {
                    ...map,
                    [oK.substr(prefix.length)]: (typeof obj[oK] !== 'undefined') ? obj[oK] : defaults[oK.substr(prefix.length)],
                }
            }
            return map;
        }, {});
        return result;
    }

    private putObjectToUrl(obj: any, defaults: any, prefix = '') {
        if (!window.history) {
            console.warn('Cant update URL without reload, skipping');
            return;
        }
        const query = Object.keys(obj).reduce((map, oK) => {
            if (obj[oK] && obj[oK] != defaults[oK]) {
                return {...map, [`${prefix}${oK}`]: obj[oK]}
            }
            return map;
        }, {});
        history.pushState({}, document.title, stringifyUrl({
            url: window.location.protocol + '//' + window.location.host + window.location.pathname,
            query
        })); // TODO: merge with existing?
    }
}

export default Datagrid;
