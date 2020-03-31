import {SortDirection} from '../constants';
import {DatagridState} from '../DatagridState';
import {IGridRenderOptions} from '../types';
import {applyAttrributes, INormalizedColumnDescriptor} from '../utils';

export const defaultHeaderCellRenderer = (column: INormalizedColumnDescriptor, options: IGridRenderOptions, state: DatagridState)=>{
    const el = document.createElement('th');
    const classes=[];
    if(column.sortable) {
        classes.push('sf-table__sort');
        el.addEventListener('click', ()=>{
            state.parent.triggerSort(column.id);
        });
    }
    if(state.sortBy===column.id) {
        if(state.sortDir === SortDirection.ASC) {
            classes.push('sf-table__sort_asc');
        } else {
            classes.push('sf-table__sort_desc');
        }
    }
    el.innerHTML = `<div class="${classes.join(' ')}">${column.title}</div>`;

    const cellMeta = {
        id: column.id,
        column: column,
        index: 0,
        rowSelected: false,
        state: state,
        item: null,
    };

    if(options.ui.headerCellClassName) {
        if(typeof options.ui.headerCellClassName === 'function') {
            el.classList.add(options.ui.headerCellClassName(cellMeta));
        } else {
            const specific = options.ui.headerCellClassName[column.id];
            if(specific) {
                if(typeof specific === 'string') {
                    el.classList.add(specific);
                } else {
                    el.classList.add(specific(cellMeta));
                }
            }
        }
    }
    if(options.ui.headerCellAttributes) {
        if(typeof options.ui.headerCellAttributes === 'function') {
            applyAttrributes(el, options.ui.headerCellAttributes(cellMeta));
        } else {
            const specific = options.ui.headerCellAttributes[column.id];
            if(specific) {
                if(typeof specific === 'function') {
                    applyAttrributes(el, specific(cellMeta));
                } else {
                    applyAttrributes(el, specific);
                }
            }
        }
    }
    return el;
}
