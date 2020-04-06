import {SortDirection} from './constants';
import Datagrid from './Datagrid';
import {IPaginatorParams} from './Paginator';

export const DEFAULT_LIMIT = 25;

export class DatagridState<Item = any> {
    private state: {
        loading: boolean,
        paginator: IPaginatorParams,
        sortBy?: string,
        sortDir: SortDirection,
        data: Array<Item>,
        error?: string;
        errors?: { [field: string]: string };
        formData: {[formId: string]: any};
        urlData?: any;
    } = {
        loading: false,
        paginator: {
            page: 1,
            limit: DEFAULT_LIMIT,
        },
        sortDir: SortDirection.ASC,
        data: [],
        formData: {},
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

    get paginate() {
        return this.state.paginator;
    }

    get urlData() {
        return this.state.urlData;
    }

    set urlData(data: any) {
        this.state.urlData = data;
    }

    updatePaginator(params: IPaginatorParams) {
        this.state.paginator = {
            ...this.state.paginator,
            ...params,
        };
    }

    set data(data: Array<Item>) {
        this.state.data = data;
    }

    get hasError() {
        return !!this.state.error;
    }

    get errorMessage() {
        return this.state.error;
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
        this.updatePaginator(pagination);
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

    setFormData(formId: string, data: any) {
        this.state.formData[formId] = data;
    }

    getFilter() {
        const forms = Object.keys(this.state.formData).reduce((prev, key)=>{
            return {...prev, ...this.state.formData[key]}
        }, {});
        return {
            ...this.state.urlData,
            ...forms,
        };
    }
}