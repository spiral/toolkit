import { ISpiralFramework } from '@spiral-toolkit/core';
import sf from '@spiral-toolkit/core';
import { GridRenderer } from './render/GridRenderer';
import { IDataGridOptions } from './types';
export declare class Datagrid extends sf.core.BaseDOMConstructor {
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
    options: IDataGridOptions;
    grids: GridRenderer[];
    constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions);
    createRenderers(): void;
    render(data: any[][]): void;
}
export default Datagrid;
