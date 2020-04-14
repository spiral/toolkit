import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import ActionPanel from '../actionpanel/ActionPanel';
import { DatagridState } from './DatagridState';
import Paginator from '../paginator/Paginator';
import { GridRenderer } from '../render/GridRenderer';
import { IDataGridOptions } from '../types';
export declare class Datagrid<Item = any> extends sf.core.BaseDOMConstructor {
    static readonly spiralFrameworkName: string;
    readonly name: string;
    static defaultOptions: IDataGridOptions;
    readonly optionsToGrab: {
        [option: string]: IOptionToGrab;
    };
    readonly options: IDataGridOptions<Item>;
    readonly sf: ISpiralFramework;
    readonly node: Element;
    grids: GridRenderer[];
    state: DatagridState<Item>;
    capturedForms: {
        [id: string]: {
            instance: any;
            fields: Array<string>;
        };
    };
    capturedPaginators: Array<Paginator>;
    capturedActionPanels: Array<ActionPanel>;
    private defaults;
    private columnInfo;
    constructor(ssf: ISpiralFramework, node: Element, options: IDataGridOptions<Item>);
    private registerFormInstance;
    registerPaginatorInstance(formInstance: any): void;
    registerActionPanelInstance(formInstance: any): void;
    captureForms(): void;
    /**
     * Sets sort for this field if not yet, or changes direction if already same
     * @param fieldId
     */
    triggerSort(fieldId: string): void;
    private setAllPaginators;
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
    private updateCheckboxes;
    toggleSelectionAll(checked: boolean): void;
    toggleSelection(value: string, checked: boolean): void;
    private serialize;
    private deserialize;
    private usePrefix;
    private getPrefix;
    private initFromUrl;
    private updateUrl;
    private getObjectFromUrl;
    private putObjectToUrl;
    private getDefaults;
    private allFormsAttached;
}
export default Datagrid;
