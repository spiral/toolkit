import { SortDirection } from './constants';
import { IColumnDescriptor, ISortDescriptor } from './types';
export interface INormalizedColumnDescriptor {
    id: string;
    title: string;
    sortable: boolean;
    direction: SortDirection;
}
export declare const normalizeColumns: (columns: IColumnDescriptor[], sortable: ISortDescriptor[]) => {
    id: string;
    title: string;
    sortable: boolean;
    direction: SortDirection;
}[];
export declare const applyAttrributes: (node: Element, attrs: {
    [name: string]: string;
}) => void;
