import type { Datagrid } from '../datagrid/Datagrid';
import { DatagridState } from '../datagrid/DatagridState';
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
    private actionPanelEl?;
    private columnInfo;
    private options;
    constructor(partialOptions: Partial<IGridRenderOptions>, root: Datagrid);
    private create;
    private createDefaultPaginator;
    private createDefaultActions;
    private applyAdditionalCellAttributes;
    private applyAdditionalHeaderCellAttributes;
    render(state: DatagridState): void;
    updateCheckboxes(state: DatagridState): void;
}
