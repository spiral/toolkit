import sf from '@spiral-toolkit/core';
import type { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
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
    serialize: string | boolean;
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
    static readonly spiralFrameworkName: string;
    readonly name: string;
    static defaultOptions: IPaginatorOptions;
    el?: HTMLDivElement;
    readonly optionsToGrab: {
        [option: string]: IOptionToGrab;
    };
    options: IPaginatorOptions;
    sf: ISpiralFramework;
    state: {
        error: boolean;
        count?: number;
    } & IPaginatorParams;
    constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions);
    unlock(): void;
    lock(): void;
    setParams(params: IPaginatorParams & {
        fetching?: boolean;
        error?: boolean;
    }, serialize: string | boolean): void;
    private hasPages;
    private hasTotal;
    private hasLimitOptions;
    private generatePageList;
    setLimit(limit: number): void;
    setPage(page: number): void;
    render(): void;
}
export default Paginator;
