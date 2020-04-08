import { IHeaderWrapperRenderer } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const defaultHeaderWrapper: IHeaderWrapperRenderer = (node, options, state) => {
  const el = document.createElement('thead');
  node.appendChild(el);
  const tr = document.createElement('tr');
  el.appendChild(tr);
  return el;
};
