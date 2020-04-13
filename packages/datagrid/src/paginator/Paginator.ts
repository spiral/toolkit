import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { stringifyUrl } from 'query-string';
import { DEFAULT_LIMIT, defaultPaginatorMessages, PaginatorType } from '../constants';
import { Messages } from '../messages';
import { IPaginatorMessages, IPaginatorOptions, IPaginatorParams } from '../types';

export class Paginator extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'datagrid-paginator';

  public readonly name = Paginator.spiralFrameworkName;

  static defaultOptions: IPaginatorOptions = {
    id: '',
    lockType: 'none',
    willFetchCount: true,
    serialize: true,
    type: PaginatorType.pages,
    className: 'row no-gutters align-items-center m-3',
    limitOptions: [10, 25, 50, 100],
  };

  el?: HTMLDivElement;

  public readonly optionsToGrab: {[option: string]: IOptionToGrab} = {
    id: {
      value: Paginator.defaultOptions.id,
      domAttr: 'id',
    },
    type: {
      value: Paginator.defaultOptions.type,
      domAttr: 'data-type',
    },
    willFetchCount: {
      value: Paginator.defaultOptions.willFetchCount,
      domAttr: 'data-fetch-count',
    },
  };

  options: IPaginatorOptions = { ...Paginator.defaultOptions };

  sf!: ISpiralFramework;

  state: {
    error: boolean,
    count?: number,
  } & IPaginatorParams = {
    error: false,
    limit: DEFAULT_LIMIT,
  };

  messages: Messages<IPaginatorMessages>;

  constructor(ssf: ISpiralFramework, node: Element, options: IPaginatorOptions) {
    super();
    this.init(ssf, node, options);
    this.options = {
      ...Paginator.defaultOptions,
      ...this.options,
    };

    const additionalOptionsEl = node.querySelector('script[role="sf-options"]');
    if (additionalOptionsEl) {
      try {
        // eslint-disable-next-line
        const one = Function(`"use strict";return ${additionalOptionsEl.innerHTML.trim()}`);
        const overrides = one()();
        this.options = {
          ...this.options,
          ...overrides,
        };
      } catch (e) {
        console.error('Could not parse options inside script, ensure script inside is an anonymous function returning IDataGridOptions object');
        throw e;
      }
    }
    this.messages = new Messages<IPaginatorMessages>(this.options.messages || {}, defaultPaginatorMessages);
    this.render();
  }

  public unlock() {
    if (!this.options.lockType || this.options.lockType === 'none') {
      return;
    }
    if (!this.sf.removeInstance('lock', this.node)) {
      console.warn('You try to remove \'lock\' instance, but it is not available or not started');
    }
  }

  public lock() {
    if (!this.options.lockType || this.options.lockType === 'none') {
      return;
    }
    const lock = this.sf.addInstance('lock', this.node, { type: this.options.lockType });
    if (!lock) {
      console.warn('You try to add \'lock\' instance, but it is not available or already started');
    }
  }

  public setParams(params: IPaginatorParams & {
    fetching?: boolean,
    error?: boolean
  }, serialize: string | boolean) {
    this.options.serialize = serialize;
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
    return this.options.willFetchCount && typeof this.state.count !== 'undefined';
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
            text: this.messages.getMessage('ellipsis'),
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
            text: this.messages.getMessage('ellipsis'),
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
    };
  }

  setLimit(limit: number) {
    this.state.limit = limit;
    if (this.options.onPageChange) {
      this.options.onPageChange(this.state);
    }
    this.render();
  }

  setPage(page: number) {
    this.state.page = page;
    if (this.options.onPageChange) {
      this.options.onPageChange(this.state);
    }
    this.render();
  }

  render() {
    const counterDiv = document.createElement('div');
    counterDiv.className = 'col-12 col-lg-4';
    if (this.hasPages()) {
      if (this.hasTotal()) {
        counterDiv.innerHTML = this.messages.getMessage('currentPage', {
              total: this.state.count,
              page: this.state.page,
              limit: this.state.limit,
              from: (this.state.page! - 1) * this.state.limit! + 1,
              to: this.state.page! * this.state.limit!,
          });
      } else {
        counterDiv.innerHTML = this.messages.getMessage('currentPageNoTotal', {
          total: this.state.count,
          page: this.state.page,
          limit: this.state.limit,
          from: (this.state.page! - 1) * this.state.limit! + 1,
          to: this.state.page! * this.state.limit!,
        });
      }
    }
    if (this.state.error) {
      counterDiv.innerHTML = this.messages.getMessage('error', {
        total: this.state.count,
        page: this.state.page,
        limit: this.state.limit,
        from: (this.state.page! - 1) * this.state.limit! + 1,
        to: this.state.page! * this.state.limit!,
      });
    }

    const limitDiv = document.createElement('div');
    limitDiv.className = 'col-4 col-md-2 col-lg-2';
    if (this.hasLimitOptions()) {
      limitDiv.innerHTML = `<div class="form-group row mb-0">
                    <label class="col-form-label-sm col-auto">${this.messages.getMessage('limitLabel')}</label>
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
      select.addEventListener('change', () => {
        this.setLimit(+select.value);
      });
    }

    const pagesDiv = document.createElement('div');
    pagesDiv.className = 'col-8 col-md-10 col-lg-6';
    if (this.hasPages()) {
      pagesDiv.innerHTML = '<ul class="pagination pagination-sm justify-content-end mb-0">';
      const ul = pagesDiv.querySelector('ul')!;
      const pageInfo = this.generatePageList();

      const addLi = (className: string, text: string, url?: string, onClick?: (e: MouseEvent) => any) => {
        const li = document.createElement('li');
        li.className = className;
        if (onClick) {
          li.addEventListener('click', onClick);
        }
        li.innerHTML = `<a href="${url || '#'}" tabindex="0" class="page-link">${text}</a>`;
        ul.appendChild(li);
      };

      const urlForPage = (page: number) => {
        if (!this.options.serialize) {
          return undefined;
        }
        return stringifyUrl({
          url: window.location.href,
          query: {
            [this.options.serialize === true ? 'page' : `${this.options.serialize}page`]: page.toString(),
          },
        });
      };

      const clickForPage = (page: number) => (e: MouseEvent) => {
        this.setPage(page);
        e.preventDefault();
        return false;
      };

      addLi(
        pageInfo.hasPrevious ? 'page-item previous' : 'page-item previous disabled',
        this.messages.getMessage('prevPage'),
        pageInfo.hasPrevious ? urlForPage(this.state.page! - 1) : undefined,
        pageInfo.hasPrevious ? clickForPage(this.state.page! - 1) : undefined,
      );

      pageInfo.pages.forEach((p) => {
        addLi(
          p.active ? 'page-item active' : 'page-item',
          p.text,
          p.page ? urlForPage(p.page) : undefined,
          p.page ? clickForPage(p.page) : undefined,
        );
      });

      addLi(
        pageInfo.hasNext ? 'page-item next' : 'page-item next disabled',
        this.messages.getMessage('nextPage'),
        pageInfo.hasNext ? urlForPage(this.state.page! + 1) : undefined,
        pageInfo.hasNext ? clickForPage(this.state.page! + 1) : undefined,
      );
    }

    if (!this.el) {
      this.el = document.createElement('div');
      this.node.appendChild(this.el);
    } else {
      this.el.innerHTML = ''; // TODO: dont rerender
    }
    const { el } = this;
    el.className = this.options.className || '';

    el.appendChild(counterDiv);
    el.appendChild(limitDiv);
    el.appendChild(pagesDiv);

    if (this.state.error) {
      el?.classList.add('sf-paginator__error');
    } else {
      el?.classList.remove('sf-paginator__error');
    }
  }
}

export default Paginator;
