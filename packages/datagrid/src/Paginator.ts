import sf, {ISpiralFramework} from '@spiral-toolkit/core';
import {CURSOR_ID_FIELD, LAST_ID_FIELD} from './constants';
// import * as assert from 'assert';
import {DEFAULT_LIMIT} from './DatagridState';
import {
    IDataGridOptions,
} from './types';

// import './styles.css';

export enum PaginatorType {
    pages = 'pages',
    infinite = 'infinite',
}

export interface IPaginatorOptions {
    id: string,
    type: PaginatorType,
    fetchCount: boolean;
    fetchCountOnce: boolean;
    onPageChange?: (params: IPaginatorParams) => void,
    lockType: string,
    className?: string,
    limitOptions: Array<number>,
}

export interface IPaginatorParams {
    page?: number,
    limit?: number,
    fetchCount?: boolean,
    /**
     * Optional 'last id' parameter
     */
    lid?: string,
    /**
     * Optional 'cursor id' parameter
     */
    cid?: string;
}

export class Paginator extends sf.core.BaseDOMConstructor {
    static spiralFrameworkName: string = 'datagrid-paginator';
    static defaultOptions: IPaginatorOptions = {
        id: '',
        lockType: 'none',
        fetchCount: true,
        fetchCountOnce: true,
        type: PaginatorType.pages,
        className: 'row no-gutters align-items-center m-3',
        limitOptions: [10, 25, 50, 100],
    };

    el?: Element;

    protected optionsToGrab = {
        id: {
            value: Paginator.defaultOptions.id,
            domAttr: 'id',
        },
        type: {
            value: Paginator.defaultOptions.type,
            domAttr: 'data-type',
        },
        fetchCount: {
            value: Paginator.defaultOptions.fetchCount,
            domAttr: 'data-fetch-count',
        },
        fetchCountOnce: {
            value: Paginator.defaultOptions.fetchCountOnce,
            domAttr: 'data-fetch-count-once',
        }
    };

    options: IPaginatorOptions = {...Paginator.defaultOptions};
    sf!: ISpiralFramework;

    state: {
        fetching: boolean,
        count?: number,
    } & IPaginatorParams = {
        fetching: false,
        limit: DEFAULT_LIMIT,
    };

    constructor(sf: ISpiralFramework, node: Element, options: IDataGridOptions) {
        super();
        this.init(sf, node, options);
        this.options = {
            ...Paginator.defaultOptions,
            ...this.options,
        };
        this.render();
    }

    public unlock() {
        if (!this.options.lockType || this.options.lockType === 'none') {
            return;
        }
        if (!this.sf.removeInstance('lock', this.node)) {
            console.warn('You try to remove \'lock\' instance, but it is not available or not started');
        }
        return;
    }

    public lock() {
        if (!this.options.lockType || this.options.lockType === 'none') {
            return;
        }
        const lock = this.sf.addInstance('lock', this.node, {type: this.options.lockType});
        if (!lock) {
            console.warn('You try to add \'lock\' instance, but it is not available or already started');
            return;
        }
    }

    public setParams(params: IPaginatorParams) {
        this.state = {
            ...this.state,
            ...params,
        };
        this.render();
    }

    private hasPages() {
        return typeof this.state.page !== 'undefined' && typeof this.state.limit !== 'undefined';
    }

    private hasTotal() {
        return typeof this.state.count !== 'undefined';
    }

    private hasLimitOptions() {
        return typeof this.options.limitOptions !== 'undefined';
    }

    private generatePageList() {
        const extendCurrent = 1;
        const page = this.state.page!;
        const pagesCount = this.hasTotal() ? Math.ceil(this.state.count! / this.state.limit!) : page;
        const hasNext = this.hasTotal() ? (page < pagesCount) : true;
        const hasPrevious = page > 1;
        const currentRange = [Math.max(page - extendCurrent, 1), Math.min(page + extendCurrent, pagesCount)];
        const startRange = [1, Math.min(extendCurrent + 1, pagesCount)];
        const endRange = [Math.max(pagesCount - extendCurrent, 1), pagesCount];

        const pages = [];
        let i = 1;
        do {
            pages.push({
                page: i,
                text: `${i}`,
                active: page === i,
            });
            if (i >= startRange[1]) {
                // we reached last page for start range
                if (i + 1 < currentRange[0]) {
                    // If page is more than 1 page further from next page in range, add ellipsis and jump
                    pages.push({
                        page: undefined,
                        text: `...`,
                        active: false,
                    });
                    // eslint-disable-next-line prefer-destructuring
                    i = currentRange[0];
                    // eslint-disable-next-line no-continue
                    continue;
                }
            }
            if (i >= currentRange[1]) {
                // we reached last page for current page range
                if (i + 1 < endRange[0]) {
                    // If page is more than 1 page further from next page in range, add ellipsis and jump
                    pages.push({
                        page: undefined,
                        text: `...`,
                        active: false,
                    });
                    // eslint-disable-next-line prefer-destructuring
                    i = endRange[0];
                    // eslint-disable-next-line no-continue
                    continue;
                }
            }
            i += 1;
        } while (i <= pagesCount);

        return {
            pages,
            hasNext,
            hasPrevious,
        }
    }

    setLimit(limit: number) {
        this.state.limit = limit;
        this.options.onPageChange ? this.options.onPageChange(this.state) : 1;
        this.render();
    }

    setPage(page: number) {
        this.state.page = page;
        this.options.onPageChange ? this.options.onPageChange(this.state) : 1;
        this.render();
    }

    render() {
        const counterDiv = document.createElement('div');
        counterDiv.className = 'col-12 col-lg-4';
        if (this.hasPages()) {
            if (this.hasTotal()) {
                counterDiv.innerHTML = `Showing ${(this.state.page! - 1) * this.state.limit! + 1} to ${this.state.page! * this.state.limit!} of ${this.state.count!} entries`;
            } else {
                counterDiv.innerHTML = `Showing ${(this.state.page! - 1) * this.state.limit! + 1} to ${this.state.page! * this.state.limit!} entries`;
            }
        }

        const limitDiv = document.createElement('div');
        limitDiv.className = 'col-4 col-md-2 col-lg-2';
        if (this.hasLimitOptions()) {
            limitDiv.innerHTML = `<div class="form-group row mb-0">
                    <label class="col-form-label-sm col-auto">Show</label>
                    <select name="limit" class="custom-select custom-select-sm col-6">
                    </select>
                  </div>`;
            const select = limitDiv.querySelector('select')!;
            this.options.limitOptions.forEach((opt: number) => {
                const option = document.createElement('option');
                option.value = `${opt}`;
                option.innerHTML = `${opt}`;
                if (opt === this.state.limit) {
                    option.setAttribute('checked', 'checked');
                }
                select.appendChild(option);
            });
            select.value = `${this.state.limit}`;
            select.addEventListener('change', (e) => {
                this.setLimit(+select.value);
            });
        } else {
        }

        const pagesDiv = document.createElement('div');
        pagesDiv.className = 'col-8 col-md-10 col-lg-6';
        if (this.hasPages()) {
            pagesDiv.innerHTML = `<ul class="pagination pagination-sm justify-content-end mb-0">`;
            const ul = pagesDiv.querySelector('ul')!;
            const pageInfo = this.generatePageList();

            {
                const li = document.createElement('li');
                li.className = pageInfo.hasPrevious ? 'page-item previous' : 'page-item previous disabled';
                if (pageInfo.hasPrevious) {
                    li.addEventListener('click', () => this.setPage(this.state.page! - 1));
                }
                li.innerHTML = `<a href="#" tabindex="0" class="page-link">«</a>`;
                ul.appendChild(li);
            }

            pageInfo.pages.forEach((p) => {
                const li = document.createElement('li');
                li.className = p.active ? 'page-item active' : 'page-item';
                if (p.page) {
                    li.addEventListener('click', () => this.setPage(p.page));
                    li.innerHTML = `<a href="#" tabindex="0" class="page-link">${p.text}</a>`;
                } else {
                    li.innerHTML = `<a tabindex="0" class="page-link">${p.text}</a>`;
                }

                ul.appendChild(li);
            });

            {
                const li = document.createElement('li');
                li.className = pageInfo.hasNext ? 'page-item next' : 'page-item next disabled';
                if (pageInfo.hasNext) {
                    li.addEventListener('click', () => this.setPage(this.state.page! + 1));
                }
                li.innerHTML = `<a href="#" tabindex="0" class="page-link">»</a>`;
                ul.appendChild(li);
            }
        }

        if (!this.el) {
            this.el = document.createElement('div');
            this.node.appendChild(this.el);
        } else {
            this.el.innerHTML = ''; // TODO: dont rerender
        }
        const el = this.el;
        el.className = this.options.className || '';

        el.appendChild(counterDiv);
        el.appendChild(limitDiv);
        el.appendChild(pagesDiv);
    }
}

export default Paginator;
