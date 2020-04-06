import Datagrid from '../Datagrid';
import { DatagridState } from '../DatagridState';
import { IGridRenderOptions } from '../types';
export declare class GridRenderer {
    private options;
    private root;
    private wrapper;
    private tableEl;
    private headerEl?;
    private footerEl?;
    private bodyEl?;
    private columnInfo;
    constructor(options: IGridRenderOptions, root: Datagrid);
    private create;
    private applyAdditionalCellAttributes;
    private applyAdditionalHeaderCellAttributes;
    render(state: DatagridState): void;
}
