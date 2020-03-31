import { DatagridState } from '../DatagridState';
import { IGridRenderOptions } from '../types';
import { INormalizedColumnDescriptor } from '../utils';
export declare const defaultHeaderCellRenderer: (column: INormalizedColumnDescriptor, options: IGridRenderOptions<any, any>, state: DatagridState<any>) => HTMLTableHeaderCellElement;
