import {IRowMeta, IRowWrapperRenderer} from '../types';
import {applyAttrributes} from '../utils';

export const defaultRowWrapper: IRowWrapperRenderer = (node, options, state, index) => {
    const el = document.createElement('tr');
    node.appendChild(el);
    const rowMeta: IRowMeta = {
        id: '1', // TODO: generate id based on field declared as id
        index,
        // rowSelected: (state as any).isSelected(index),
        selected: false, // TODO: fetch selection status from state
        state: state,
        item: state.data[index],
    };
    if(options.ui.rowClassName) {
        if(typeof options.ui.rowClassName === 'function') {
            el.classList.add(options.ui.rowClassName(rowMeta));
        } else {
            el.classList.add(options.ui.rowClassName);
        }
    }
    if(options.ui.rowAttributes) {
        if(typeof options.ui.rowAttributes === 'function') {
            applyAttrributes(el, options.ui.rowAttributes(rowMeta));
        } else {
            applyAttrributes(el, options.ui.rowAttributes);
        }
    }
    return el;
};