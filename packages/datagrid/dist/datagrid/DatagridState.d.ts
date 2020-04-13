import { SortDirection } from '../constants';
import type { Datagrid } from './Datagrid';
import { IPaginatorParams } from '../types';
export declare class DatagridState<Item = any> {
    parent: Datagrid;
    private state;
    constructor(parent: Datagrid);
    isSelected(val: string): boolean;
    areAllSelected(): boolean;
    get selection(): Set<string>;
    get isCustomSearch(): boolean;
    get selectedItems(): Item[];
    get isLoading(): boolean;
    startLoading(): void;
    get needFetchCount(): boolean;
    resetFetchCount(): void;
    onCountFetched(): void;
    stopLoading(): void;
    get data(): Array<Item>;
    get paginate(): IPaginatorParams;
    get urlData(): any;
    set urlData(data: any);
    updatePaginator(params: IPaginatorParams): void;
    set data(data: Array<Item>);
    get hasError(): boolean;
    get errorMessage(): string | undefined;
    get sortBy(): string | undefined;
    get sortDir(): SortDirection;
    setSuccess(data: Array<Item>, pagination: {
        limit: number;
        page: number;
        count?: number;
    }): void;
    setError(error: string, errors?: {
        [field: string]: string;
    }, resetData?: boolean): void;
    setSort(field: string, direction: SortDirection): void;
    setFormData(formId: string, data: any): void;
    getFilter(): any;
    addToSelection(value: string): void;
    removeFromSelection(value: string): void;
    selectSingle(value: string): void;
    resetSelection(): void;
    selectAll(): void;
}
