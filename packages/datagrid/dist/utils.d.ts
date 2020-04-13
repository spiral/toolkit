import { SortDirection } from './constants';
import { IColumnDescriptor, ISortDescriptor } from './types';
export declare const normalizeColumns: (columns: IColumnDescriptor[], sortables: ISortDescriptor[]) => {
    id: string;
    title: string;
    sortable: boolean;
    direction: SortDirection;
}[];
export declare const applyAttrributes: (node: Element, attrs: {
    [name: string]: string;
}) => void;
export declare function isString(something: any): something is string;
