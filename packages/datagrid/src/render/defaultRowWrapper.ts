import { IRowWrapperRenderer } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const defaultRowWrapper: IRowWrapperRenderer = (node, options, state, index) => {
  const el = document.createElement('tr');
  node.appendChild(el);
  return el;
};
