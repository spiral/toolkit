import type { DatagridState } from '../DatagridState';
import { IGridRenderOptions, INormalizedColumnDescriptor } from '../types';
export declare const defaultHeaderCellRenderer: (column: INormalizedColumnDescriptor, options: IGridRenderOptions<any>, state: DatagridState<any>) => HTMLTableHeaderCellElement;
