import { PAGINATOR_CLASS_NAME } from '../constants';
import type { Datagrid } from '../Datagrid';
import { DatagridState } from '../DatagridState';
import { ICellMeta, IGridRenderOptions, INormalizedColumnDescriptor } from '../types';
import { applyAttrributes, normalizeColumns } from '../utils';
import { defaultBodyWrapper } from './defaultBodyWrapper';
import { defaultFooterWrapper } from './defaultFooterWrapper';
import { defaultHeaderWrapper } from './defaultHeaderWrapper';
import { defaultRowWrapper } from './defaultRowWrapper';
import { defaultTableWrapper } from './defaultTableWrapper';
import { normalizedCellRenderer, normalizedHeaderCellRenderer } from './normalizers';

let instanceCounter = 1;

export class GridRenderer {
  // eslint-disable-next-line
  private instance = instanceCounter++;

  private wrapper!: Element;

  private tableEl!: Element;

  private headerEl?: Element;

  private footerEl?: Element;

  private bodyEl?: Element;

  private paginatorEl?: Element;

  private columnInfo: INormalizedColumnDescriptor[];

  constructor(private options: IGridRenderOptions, private root: Datagrid) {
    this.columnInfo = normalizeColumns(this.options.columns, this.options.sortable);
    this.create();
  }

  private create() {
    this.wrapper = document.createElement('div');
    this.wrapper.setAttribute('role', 'sf-datagrid-wrapper');
    this.wrapper.setAttribute('class', this.options.ui.wrapperClassName || '');

    this.root.node.innerHTML = '';
    this.root.node.appendChild(this.wrapper);

    if (this.options.paginator) {
      this.createDefaultPaginator();
    }

    const tableRenderer = this.options.tableWrapper || defaultTableWrapper;
    this.tableEl = tableRenderer(this.wrapper, this.options);
  }

  private createDefaultPaginator() {
    const id = `${Date.now()}${this.instance}`;
    this.root.options.captureForms.push(id);
    this.paginatorEl = document.createElement('div');
    this.paginatorEl.className = PAGINATOR_CLASS_NAME;
    this.paginatorEl.id = id;
    this.root.node.appendChild(this.paginatorEl);
  }


  // eslint-disable-next-line class-methods-use-this
  private applyAdditionalCellAttributes(el: Element, column: INormalizedColumnDescriptor, options: IGridRenderOptions, state: DatagridState, index: number) {
    const cellMeta: ICellMeta = {
      id: column.id,
      column,
      index,
      // rowSelected: (state as any).isSelected(index),
      rowSelected: false, // TODO: fetch selection status from state
      state,
      item: state.data[index],
    };

    if (options.ui.cellClassName) {
      if (typeof options.ui.cellClassName === 'function') {
        el.classList.add(options.ui.cellClassName(cellMeta));
      } else {
        const specific = options.ui.cellClassName[column.id];
        if (specific) {
          if (typeof specific === 'string') {
            el.classList.add(specific);
          } else {
            el.classList.add(specific(cellMeta));
          }
        }
      }
    }
    if (options.ui.cellAttributes) {
      if (typeof options.ui.cellAttributes === 'function') {
        applyAttrributes(el, options.ui.cellAttributes(cellMeta));
      } else {
        const specific = options.ui.cellAttributes[column.id];
        if (specific) {
          if (typeof specific === 'function') {
            applyAttrributes(el, specific(cellMeta));
          } else {
            applyAttrributes(el, specific);
          }
        }
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private applyAdditionalHeaderCellAttributes(el: Element, column: INormalizedColumnDescriptor, options: IGridRenderOptions, state: DatagridState) {
    const cellMeta = {
      id: column.id,
      column,
      index: 0,
      rowSelected: false,
      state,
      item: null,
    };

    if (options.ui.headerCellClassName) {
      if (typeof options.ui.headerCellClassName === 'function') {
        el.classList.add(options.ui.headerCellClassName(cellMeta));
      } else {
        const specific = options.ui.headerCellClassName[column.id];
        if (specific) {
          if (typeof specific === 'string') {
            el.classList.add(specific);
          } else {
            el.classList.add(specific(cellMeta));
          }
        }
      }
    }
    if (options.ui.headerCellAttributes) {
      if (typeof options.ui.headerCellAttributes === 'function') {
        applyAttrributes(el, options.ui.headerCellAttributes(cellMeta));
      } else {
        const specific = options.ui.headerCellAttributes[column.id];
        if (specific) {
          if (typeof specific === 'function') {
            applyAttrributes(el, specific(cellMeta));
          } else {
            applyAttrributes(el, specific);
          }
        }
      }
    }
  }

  render(state: DatagridState) {
    // Render header
    const headerRenderer = this.options.headerWrapper || defaultHeaderWrapper;
    if (this.headerEl) {
      this.tableEl.removeChild(this.headerEl);
    }
    this.headerEl = headerRenderer(this.tableEl, this.options, state);
    if (this.headerEl) {
      this.tableEl.appendChild(this.headerEl);
      if (this.columnInfo.length) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.columnInfo.forEach((cI, index) => {
          const headerCellRenderer = normalizedHeaderCellRenderer((this.options.headerList || {})[cI.id]);
          const node = headerCellRenderer.createEl();
          if (node) {
            const rendered = headerCellRenderer.render(cI, this.options, state);
            if (rendered) {
              if (typeof rendered === 'string') {
                node.innerHTML = rendered;
              } else {
                node.appendChild(rendered);
              }
              this.applyAdditionalHeaderCellAttributes(node, cI, this.options, state);
              this.headerEl!.appendChild(node);
            }
          }
        });
      }
    }

    // Render body
    if (this.bodyEl) {
      this.tableEl.removeChild(this.bodyEl);
    }
    const bodyRenderer = this.options.bodyWrapper || defaultBodyWrapper;
    this.bodyEl = bodyRenderer(this.tableEl, this.options, state);
    if (this.bodyEl) {
      this.tableEl.appendChild(this.bodyEl);
      const row = this.options.rowWrapper || defaultRowWrapper;
      state.data.forEach((item: any, index) => {
        const el = row(this.bodyEl!, this.options, state, index);
        this.columnInfo.forEach((cI) => {
          const value = item[cI.id];
          const rowCellRenderer = normalizedCellRenderer((this.options.cells || {})[cI.id]);
          const node = rowCellRenderer.createEl();
          if (node) { // If no node generated, skip it, that might be custom tr render or colspan
            const rendered = rowCellRenderer.render(value, item, cI, this.options, index, state);
            if (rendered) { // If no content generated, skip it, that might be custom tr render or colspan
              if (typeof rendered === 'string') {
                node.innerHTML = rendered;
              } else {
                node.appendChild(rendered);
              }
              this.applyAdditionalCellAttributes(node, cI, this.options, state, index);
              el.appendChild(node);
            }
          }
        });
      });
    }

    // Render footer
    if (this.footerEl) {
      this.tableEl.removeChild(this.footerEl);
    }
    const footerRenderer = this.options.footerWrapper || defaultFooterWrapper;
    this.footerEl = footerRenderer(this.tableEl, this.options, state);
    if (this.footerEl) {
      this.tableEl.appendChild(this.footerEl);
      // We assume footer render handles all data so no additional renders here
    }
  }
}
