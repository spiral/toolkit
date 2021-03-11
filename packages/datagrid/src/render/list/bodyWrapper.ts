import { IBodyWrapperRenderer } from '../../types';

export const bodyWrapper: IBodyWrapperRenderer = (node, options, state, messages) => {
  const el = document.createElement('div');
  node.appendChild(el);
  if (state.hasError && !options.dontRenderError) {
    const errorTd = document.createElement('tr');
    errorTd.innerText = state.errorMessage || messages.getMessage('error', {});
    errorTd.classList.add('sf-table__error');
    el.appendChild(errorTd);
  } else if (state.data.length === 0) {
    const emptyTd = document.createElement('tr');
    emptyTd.innerHTML = state.isCustomSearch ? messages.getMessage('noResults', {}) : messages.getMessage('noData', {});
    emptyTd.classList.add('sf-table__empty');
    el.appendChild(emptyTd);
  }
  return el;
};
