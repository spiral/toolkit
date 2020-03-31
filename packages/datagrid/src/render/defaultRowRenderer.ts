import {IRowCellRenderer} from '../types';
import {applyAttrributes} from '../utils';

export const defaultRowCellRenderer: IRowCellRenderer = (column, options, state, index) => {
    const el = document.createElement('td');
    el.innerText = state.data[index][column.id];

    const cellMeta = {
        id: column.id,
        column: column,
        index,
        // rowSelected: (state as any).isSelected(index),
        rowSelected: false, // TODO: fetch selection status from state
        state: state,
        item: state.data[index],
    };

    if(options.ui.cellClassName) {
        if(typeof options.ui.cellClassName === 'function') {
            el.classList.add(options.ui.cellClassName(cellMeta));
        } else {
            const specific = options.ui.cellClassName[column.id];
            if(specific) {
                if(typeof specific === 'string') {
                    el.classList.add(specific);
                } else {
                    el.classList.add(specific(cellMeta));
                }
            }
        }
    }
    if(options.ui.cellAttributes) {
        if(typeof options.ui.cellAttributes === 'function') {
            applyAttrributes(el, options.ui.cellAttributes(cellMeta));
        } else {
            const specific = options.ui.cellAttributes[column.id];
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
};