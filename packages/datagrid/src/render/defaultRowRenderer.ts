import {IRowCellRenderer} from '../types';

export const defaultRowCellRenderer: IRowCellRenderer = (column, options, state, index) => {
    const el = document.createElement('td');
    el.innerText = state.data[index][column.id];
    return el;
};