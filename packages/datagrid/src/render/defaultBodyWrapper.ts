import {IBodyWrapperRenderer} from '../types';

export const defaultBodyWrapper: IBodyWrapperRenderer = (node, options, state) => {
    const el = document.createElement('tbody');
    node.appendChild(el);
    return el;
};