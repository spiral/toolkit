import sf, { ISpiralFramework } from '@spiral-toolkit/core';
import { SortDirection } from './constants';
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
    capturedForms: Array<any>;
    capturedPaginators: Array<any>;
    private columnInfo;
    constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions<Item>);
    private registerFormInstance;
    private registerPaginatorInstance;
    captureForms(): void;
    /**
     * Sets sort for this field if not yet, or changes direction if already same
     * @param fieldId
     */
    triggerSort(fieldId: string): void;
    private resetPaginator;
    private formRequest;
    private unlock;
    private lock;
    private handleSuccess;
    private beforeSubmit;
    private handleError;
    request(): Promise<void>;
    createRenderers(): void;
    render(): void;
    serialize(): {
        sortBy: string;
        sortDir: SortDirection;
        page?: number | undefined;
        limit?: number | undefined;
        fetchCount?: boolean | undefined;
        lid?: string | undefined;
        cid?: string | undefined;
    } | {
        sortBy?: undefined;
        sortDir?: undefined;
        page?: number | undefined;
        limit?: number | undefined;
        fetchCount?: boolean | undefined;
        lid?: string | undefined;
        cid?: string | undefined;
    };
    deserialize(values: {
        [value: string]: string;
    }): void;
    getObjectFromUrl(prefix?: string): void;
}
export default Datagrid;
