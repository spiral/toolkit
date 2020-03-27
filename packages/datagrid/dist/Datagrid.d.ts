import { ISpiralFramework } from "@spiral-toolkit/core";
import sf from '@spiral-toolkit/core';
import { GridRenderer } from './render/GridRenderer';
import { IDataGridOptions } from "./types";
export declare class Datagrid extends sf.core.BaseDOMConstructor {
    static spiralFrameworkName: string;
    static optionsToGrab: IDataGridOptions;
    options: IDataGridOptions;
    grids: GridRenderer[];
    constructor(sf: ISpiralFramework, node: Element, options: any);
    createRenderers(): void;
    render(data: any[][]): void;
}
export default Datagrid;
