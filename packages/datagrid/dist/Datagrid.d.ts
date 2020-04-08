import sf from '@spiral-toolkit/core';
import type { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { DatagridState } from './DatagridState';
import { GridRenderer } from './render/GridRenderer';
import { IDataGridOptions } from './types';
export declare class Datagrid<Item = any> extends sf.core.BaseDOMConstructor {
    static readonly spiralFrameworkName: string;
    readonly name: string;
    static defaultOptions: IDataGridOptions;
    readonly optionsToGrab: {
        [option: string]: IOptionToGrab;
    };
    options: IDataGridOptions<Item>;
    grids: GridRenderer[];
    sf: ISpiralFramework;
    state: DatagridState<Item>;
    capturedForms: {
        [id: string]: {
            instance: any;
            fields: Array<string>;
        };
    };
    capturedPaginators: Array<any>;
    private defaults;
    private columnInfo;
    constructor(ssf: ISpiralFramework, node: Element, options: IDataGridOptions<Item>);
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
    private serialize;
    private deserialize;
    private initFromUrl;
    private updateUrl;
    private getObjectFromUrl;
    private putObjectToUrl;
}
export default Datagrid;
