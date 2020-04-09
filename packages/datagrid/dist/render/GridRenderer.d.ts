import type { Datagrid } from '../Datagrid';
import { DatagridState } from '../DatagridState';
import { IGridRenderOptions } from '../types';
export declare class GridRenderer {
    private root;
    private instance;
    private wrapper;
    private tableEl;
    private headerEl?;
    private footerEl?;
    private bodyEl?;
    private paginatorEl?;
    private columnInfo;
    private options;
    constructor(partialOptions: Partial<IGridRenderOptions>, root: Datagrid);
    private create;
    private createDefaultPaginator;
    private applyAdditionalCellAttributes;
    private applyAdditionalHeaderCellAttributes;
    render(state: DatagridState): void;
}
