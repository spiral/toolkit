import {ISpiralFramework} from '@spiral-toolkit/core';
import sf from '@spiral-toolkit/core';
import {GridRenderer} from './render/GridRenderer';
import {RequestMethod} from './constants';
import {defaultRenderer} from './render/defaultRenderer';
import {IDataGridOptions, IGridRenderOptions} from './types';
import * as assert from 'assert';

// import './styles.css';

export class Datagrid extends sf.core.BaseDOMConstructor {
    static spiralFrameworkName: string = 'datagrid';
    static defaultOptions: IDataGridOptions = {
        id: '',
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
            tableClassName: '',
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

    constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions) {
        super();
        this.init(sf, node, options);
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
        // console.log('Intialized with', this.options);
        this.createRenderers();
    }

    createRenderers() {
        assert.deepEqual(this.grids, [], 'Grids are already initialized');
        const renderList: IGridRenderOptions[] = Array.isArray(this.options.renderers) ? this.options.renderers : [this.options.renderers];
        renderList.forEach((renderOption: IGridRenderOptions) => {
            new GridRenderer(renderOption, this);
        });
    }

    render(data: any[][]) {
        const renderList: IGridRenderOptions[] = Array.isArray(this.options.renderers) ? this.options.renderers : [this.options.renderers];
        renderList.forEach((renderOption: IGridRenderOptions) => {
            console.log(renderOption);
        });
    }
}

export default Datagrid;
