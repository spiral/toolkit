import { ICellMeta, IDataGridOptions, IGridRenderOptions, IRowMeta } from '../types';
export declare const defaultGridUiOptions: {
    wrapperClassName: string;
    tableClassName: string;
    cellClassName: {};
    rowClassName: string;
    cellAttributes: (cellMeta: ICellMeta<any>) => {};
    rowAttributes: (rowMeta: IRowMeta<any>) => {};
};
export declare const defaultRenderer: IGridRenderOptions;
export declare const defaultGridOptions: IDataGridOptions;
