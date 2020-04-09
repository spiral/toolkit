import { IBodyWrapperRenderer } from '../types';

export const defaultBodyWrapper: IBodyWrapperRenderer = (node, options, state) => {
  const el = document.createElement('tbody');
  node.appendChild(el);
  if (state.hasError && !options.dontRenderError) {
    const errorTr = document.createElement('tr');
    const errorTd = document.createElement('td');
    errorTd.colSpan = options.columns.length;
    errorTd.innerText = state.errorMessage || 'Unknown Error';
    errorTd.classList.add('sf-table__error');
    errorTr.appendChild(errorTd);
    el.appendChild(errorTr);
  } else
  if (state.data.length === 0) {
    const emptyTr = document.createElement('tr');
    const emptyTd = document.createElement('td');
    emptyTd.colSpan = options.columns.length;
    emptyTd.innerHTML = 'No Data';
    emptyTd.classList.add('sf-table__empty');
    emptyTr.appendChild(emptyTd);
    el.appendChild(emptyTr);
  }
  return el;
};
