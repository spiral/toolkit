import {IRowWrapperRenderer} from '../types';

export const defaultRowWrapper: IRowWrapperRenderer = (node, options, state, index) => {
    const el = document.createElement('tr');
    node.appendChild(el);
    return el;
};