import sf, { ISpiralFramework } from '@spiral-toolkit/core';
import { IDataGridOptions } from './types';
export declare enum PaginatorType {
    pages = "pages",
    infinite = "infinite"
}
export interface IPaginatorOptions {
    id: string;
    type: PaginatorType;
    fetchCount: boolean;
    fetchCountOnce: boolean;
    onPageChange?: (params: IPaginatorParams) => void;
    lockType: string;
    className?: string;
    limitOptions: Array<number>;
}
export interface IPaginatorParams {
    page?: number;
    limit?: number;
    fetchCount?: boolean;
    /**
     * Optional 'last id' parameter
     */
    lid?: string;
    /**
     * Optional 'cursor id' parameter
     */
    cid?: string;
}
export declare class Paginator extends sf.core.BaseDOMConstructor {
    static spiralFrameworkName: string;
    static defaultOptions: IPaginatorOptions;
    el?: Element;
    protected optionsToGrab: {
        id: {
            value: string;
            domAttr: string;
        };
        type: {
            value: PaginatorType;
            domAttr: string;
        };
        fetchCount: {
            value: boolean;
            domAttr: string;
        };
        fetchCountOnce: {
            value: boolean;
            domAttr: string;
        };
    };
    options: IPaginatorOptions;
    sf: ISpiralFramework;
    state: {
        fetching: boolean;
        count?: number;
    } & IPaginatorParams;
    constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions);
    unlock(): void;
    lock(): void;
    setParams(params: IPaginatorParams): void;
    private hasPages;
    private hasTotal;
    private hasLimitOptions;
    private generatePageList;
    setLimit(limit: number): void;
    setPage(page: number): void;
    render(): void;
}
export default Paginator;
