import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { IDataGridOptions, IPaginatorOptions, IPaginatorParams } from '../types';
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
    constructor(ssf: ISpiralFramework, node: Element, options: IDataGridOptions);
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
