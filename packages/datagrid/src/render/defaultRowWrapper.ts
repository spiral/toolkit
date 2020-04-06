import {IRowMeta, IRowWrapperRenderer} from '../types';
import {applyAttrributes} from '../utils';

export const defaultRowWrapper: IRowWrapperRenderer = (node, options, state, index) => {
    const el = document.createElement('tr');
    node.appendChild(el);
    return el;
};