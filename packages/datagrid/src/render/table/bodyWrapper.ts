import { IBodyWrapperRenderer } from '../../types';

export const bodyWrapper: IBodyWrapperRenderer = (node, options, state, messages) => {
  const el = document.createElement('tbody');
  node.appendChild(el);
  if (state.hasError && !options.dontRenderError) {
    const errorTr = document.createElement('tr');
    const errorTd = document.createElement('td');
    errorTd.colSpan = options.columns.length + (options.selectable ? 1 : 0);
    errorTd.innerText = state.errorMessage || messages.getMessage('error', {});
    errorTd.classList.add('sf-table__error');
    errorTr.appendChild(errorTd);
    el.appendChild(errorTr);
  } else if (state.data.length === 0) {
    const emptyTr = document.createElement('tr');
    const emptyTd = document.createElement('td');
    emptyTd.colSpan = options.columns.length + (options.selectable ? 1 : 0);
    emptyTd.innerHTML = state.isCustomSearch ? messages.getMessage('noResults', {}) : messages.getMessage('noData', {});
    emptyTd.classList.add('sf-table__empty');
    emptyTr.appendChild(emptyTd);
    el.appendChild(emptyTr);
  }
  return el;
};
