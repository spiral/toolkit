import type { DatagridState } from '../datagrid/DatagridState';
import { HeaderCellRenderAdvanced, IGridRenderOptions, INormalizedColumnDescriptor } from '../types';
export declare const defaultHeaderCellElCreator: () => HTMLTableHeaderCellElement;
export declare const defaultHeaderCellRendererInner: (column: INormalizedColumnDescriptor, options: IGridRenderOptions<any>, state: DatagridState<any>) => HTMLDivElement;
export declare const defaultHeaderCellRenderer: HeaderCellRenderAdvanced;
