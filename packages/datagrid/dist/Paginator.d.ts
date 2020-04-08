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
    onPageChange?: (params: IPaginatorParams) => void;
    lockType: string;
    className?: string;
    limitOptions: Array<number>;
}
export interface IPaginatorParams {
    page?: number;
    limit?: number;
    fetchCount?: boolean;
    lastId?: string;
    cursorId?: string;
}
export declare class Paginator extends sf.core.BaseDOMConstructor {
    static readonly spiralFrameworkName: string;
    readonly name: string;
    static defaultOptions: IPaginatorOptions;
    el?: Element;
    readonly optionsToGrab: {
        [option: string]: IOptionToGrab;
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
