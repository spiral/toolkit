import sf, {ISpiralFramework} from '@spiral-toolkit/core';
import * as assert from 'assert';
import {RequestMethod, SortDirection} from './constants';
import {DatagridState} from './DatagridState';
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
        method: RequestMethod.GET,
        sortable: [],
        url: '',
        ui: {
            cellAttributes: {},
            rowAttributes: {},
            rowClassName: '',
            cellClassName: '',
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

    options: IDataGridOptions = {...Datagrid.defaultOptions};
    grids: GridRenderer[] = [];
    sf!: ISpiralFramework;
    state: DatagridState<Item> = new DatagridState<Item>(this);
    private columnInfo: INormalizedColumnDescriptor[];

    constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions) {
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
        if(this.options.sort) {
            if(typeof this.options.sort === 'string') {
                this.state.setSort(this.options.sort, SortDirection.ASC);
            } else {
                this.state.setSort(this.options.sort.field, this.options.sort.direction || SortDirection.ASC);
            }
        }

        this.createRenderers();
        this.request();
    }

    /**
     * Sets sort for this field if not yet, or changes direction if already same
     * @param fieldId
     */
    triggerSort(fieldId: string) {
        if(this.state.sortBy === fieldId) {
            if(this.state.sortDir === SortDirection.ASC) {
                this.state.setSort(fieldId, SortDirection.DESC);
            } else {
                this.state.setSort(fieldId, SortDirection.ASC);
            }
        } else {
            const field = this.columnInfo.find(cI=>cI.id===fieldId);
            if(field) {
                this.state.setSort(field.id, field.direction);
            } else {
                console.warn(`Trying to sort by unsortable field ${fieldId}`);
            }
        }
        this.request();
    }

    private formRequest() {
        // TODO: 1. Collect data from forms
        // TODO: 2. Collect data from state
        const request: IDatagridRequest = {
            fetchCount: true,
            filter: {},
            sort: {},
            paginate: {
                limit: 25,
                page: 1,
            }
        };

        return request;
    }

    private unlock() {
        if (!this.sf.removeInstance('lock', this.node)) {
            console.warn('You try to remove \'lock\' instance, but it is not available or not started');
        }
        // TODO: trigger unlocks of dependent forms
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
        // TODO: trigger locks of dependent forms
    }

    private handleSuccess({data}: { data: IDatagridResponse<Item> }) {
        console.log('Success', data);
        this.state.setSuccess(data.data, data.pagination); // TODO: set success status
        this.render();
        // TODO: rerender data
    }

    private handleError({data}: { data: IDatagridErrorResponse }) {
        console.log('Error', data);
        this.state.setError(data.error, data.errors, this.options.resetOnError);
        this.render();
        // TODO: set error status
        // TODO: remove data and display error
        // TODO: send validation errors to other forms
    }

    async request() {
        if(this.state.isLoading) {
            console.warn('Cant start new request');
            return;
        }
        this.state.startLoading();
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
                    }
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
