import sf, { ISpiralFramework } from '@spiral-toolkit/core';
import { DatagridState } from './DatagridState';
import { GridRenderer } from './render/GridRenderer';
import { IDataGridOptions } from './types';
export declare class Datagrid<Item = any> extends sf.core.BaseDOMConstructor {
    static spiralFrameworkName: string;
    static defaultOptions: IDataGridOptions;
    protected optionsToGrab: {
        id: {
            value: string;
            domAttr: string;
        };
        url: {
            value: string;
            domAttr: string;
        };
    };
    options: IDataGridOptions<Item>;
    grids: GridRenderer[];
    sf: ISpiralFramework;
    state: DatagridState<Item>;
    private columnInfo;
    constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions<Item>);
    captureForms(): void;
    /**
     * Sets sort for this field if not yet, or changes direction if already same
     * @param fieldId
     */
    triggerSort(fieldId: string): void;
    private formRequest;
    private unlock;
    private lock;
    private handleSuccess;
    private handleError;
    request(): Promise<void>;
    createRenderers(): void;
    render(): void;
}
export default Datagrid;
