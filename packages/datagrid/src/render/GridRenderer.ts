import Datagrid from '../Datagrid';
import {DatagridState} from '../DatagridState';
import { IGridRenderOptions } from '../types';
import {INormalizedColumnDescriptor, normalizeColumns} from '../utils';
import {defaultBodyWrapper} from './defaultBodyWrapper';
import {defaultFooterWrapper} from './defaultFooterWrapper';
import {defaultHeaderCellRenderer} from './defaultHeaderCellRenderer';
import {defaultHeaderWrapper} from './defaultHeaderWrapper';
import {defaultRowCellRenderer} from './defaultRowRenderer';
import {defaultRowWrapper} from './defaultRowWrapper';
import {defaultTableWrapper} from './defaultTableWrapper';

export class GridRenderer {
  private wrapper!: Element;
  private tableEl!: Element;
  private headerEl?: Element;
  private footerEl?: Element;
  private bodyEl?: Element;
  private columnInfo: INormalizedColumnDescriptor[];

  constructor(private options: IGridRenderOptions, private root: Datagrid) {
    this.columnInfo = normalizeColumns(this.options.columns, this.options.sortable);
    console.log(this.columnInfo);
      this.create();
  }

  private create() {
    this.wrapper = document.createElement('div');
    this.wrapper.setAttribute('role', 'sf-datagrid-wrapper');
    this.wrapper.setAttribute('class', this.options.ui.wrapperClassName || '');

    this.root.node.innerHTML = '';
    this.root.node.appendChild(this.wrapper);

    const tableRenderer = this.options.tableWrapper || defaultTableWrapper;
    this.tableEl = tableRenderer(this.wrapper, this.options);
  }

  render(state: DatagridState) {
    // Render header
    const headerRenderer = this.options.headerWrapper || defaultHeaderWrapper;
    if(this.headerEl) {
      this.tableEl.removeChild(this.headerEl);
    }
    this.headerEl = headerRenderer(this.tableEl, this.options, state);
    if(this.headerEl) {
      this.tableEl.appendChild(this.headerEl);
      // TODO: Render header cells
      if(this.columnInfo.length) {
        this.columnInfo.forEach((cI, index) => {
          const headerCellRenderer = (this.options.headerList || {})[cI.id] || defaultHeaderCellRenderer;
          this.headerEl!.appendChild(headerCellRenderer(cI, this.options, state));
        })
      }
    }

    // Render body
    if(this.bodyEl) {
      this.tableEl.removeChild(this.bodyEl);
    }
    const bodyRenderer = this.options.bodyWrapper || defaultBodyWrapper;
    this.bodyEl = bodyRenderer(this.tableEl, this.options, state);
    if(this.bodyEl) {
      this.tableEl.appendChild(this.bodyEl);
      const row = this.options.rowWrapper || defaultRowWrapper;
      state.data.forEach((item: any, index)=>{
        const el = row(this.bodyEl!, this.options, state, index);

        this.columnInfo.forEach((cI) => {
          const rowCellRenderer = (this.options.cells || {})[cI.id] || defaultRowCellRenderer;
          el.appendChild(rowCellRenderer(cI, this.options, state, index));
        })
      });

    }

    // Render footer
    if(this.footerEl) {
      this.tableEl.removeChild(this.footerEl);
    }
    const footerRenderer = this.options.footerWrapper || defaultFooterWrapper;
    this.footerEl = footerRenderer(this.tableEl, this.options, state);
    if(this.footerEl) {
      this.tableEl.appendChild(this.footerEl);
      // We assume footer render handles all data so no additional renders here
    }
  }
}