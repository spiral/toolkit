import {SortDirection} from './constants';
import Datagrid from './Datagrid';

export const DEFAULT_LIMIT = 25;

export class DatagridState<Item = any> {
    private state: {
        loading: boolean,
        page: number,
        limit: number,
        count?: number,
        sortBy?: string,
        sortDir: SortDirection,
        data: Array<Item>,
        error?: string;
        errors?: { [field: string]: string };
    } = {
        loading: false,
        page: 1,
        sortDir: SortDirection.ASC,
        limit: DEFAULT_LIMIT,
        data: [],
    };

    constructor(public parent: Datagrid) {

    }

    get isLoading() {
        return this.state.loading;
    }

    startLoading() {
        this.state.loading = true;
    }

    stopLoading() {
        this.state.loading = false;
    }

    get data() {
        return this.state.data;
    }

    set data(data: Array<Item>) {
        this.state.data = data;
    }

    get hasError() {
        return !!this.state.error;
    }

    get sortBy() {
        return this.state.sortBy;
    }

    get sortDir() {
        return this.state.sortDir;
    }

    setSuccess(data: Array<Item>, pagination: {
        limit: number;
        page: number;
        count?: number; // Present if fetchCount = true;
    }) {
        this.data = data;
        this.state.error = undefined;
        this.state.errors = undefined;
        this.state.page = pagination.page;
        this.state.limit = pagination.limit;
        this.state.count = (typeof pagination.count !== 'undefined') ? pagination.count : this.state.count;
    }

    setError(error: string, errors: { [field: string]: string } = {}, resetData: boolean = false) {
        if (resetData) {
            this.data = [];
        }
        this.state.error = error;
        this.state.errors = errors;
    }

    setSort(field: string, direction: SortDirection) {
        this.state.sortBy = field;
        this.state.sortDir = direction;
    }
}