import { autobind } from './autobind';
import { IAutocompleteDropdownOptions, IAutocompleteData, IAutocompleteDataItem } from './types';

export class AutocompleteDropdown {
  public node: HTMLDivElement;

  options: IAutocompleteDropdownOptions;

  items: HTMLDivElement[] = [];

  loadingElem?: HTMLDivElement;

  data?: IAutocompleteData;

  selectedIndex: number;

  isDisabled: boolean;

  isLoading: boolean;

  isInnerFocus?: boolean;

  query: string = '';

  constructor(options: IAutocompleteDropdownOptions) {
    this.node = document.createElement('div');
    this.node.classList.add('sf-autocomplete__dropdown', 'dropdown-menu');

    this.options = options;

    this.selectedIndex = -1;

    this.isDisabled = this.options.isDisabled;

    this.prependLoadingElem();
    this.isLoading = false;
  }

  prependLoadingElem() {
    const elem = document.createElement('div');
    elem.classList.add('dropdown-item');
    elem.innerHTML = this.options.loadingTemplate
      ? this.options.loadingTemplate({ query: this.query })
      : '<span class="sf-autocomplete__loader">Loading...</span>';
    elem.style.display = 'none';

    this.node.insertBefore(elem, this.node.firstChild);
    this.loadingElem = elem;
  }

  appendNoResults() {
    const elem = document.createElement('div');
    elem.classList.add('dropdown-item');
    elem.innerHTML = this.options.noResultsTemplate
      ? this.options.noResultsTemplate({ query: this.query })
      : '<span class="sf-autocomplete__noresults">No results</span>';

    this.node.appendChild(elem);
  }

  public show() {
    if (this.isDisabled) return;

    this.node.classList.add('show');
  }

  public hide() {
    if (!this.node.classList.contains('show')) return false;
    this.node.classList.remove('show');
    this.clearIndex();

    return true;
  }

  public clear() {
    const clone: Node = this.node.cloneNode(false);
    this.node.parentNode!.replaceChild(clone, this.node);
    this.node = clone as HTMLDivElement;
    // this.node.innerHTML = '';

    this.prependLoadingElem();
  }

  public enable() {
    this.isDisabled = false;
  }

  public disable() {
    this.isDisabled = true;
  }

  toggleLoading(isLoading: boolean) {
    if (this.isDisabled) return;
    if (this.isLoading === isLoading) return;

    this.isLoading = isLoading;

    if (this.loadingElem) this.loadingElem.style.display = isLoading ? 'block' : 'none';
  }

  public setData(data: IAutocompleteData) {
    this.data = data;

    // this.toggleLoading(false);

    this.clear();

    this.render();
  }

  public setNoResults() {
    this.clear();
    this.appendNoResults();
  }

  public suggest(query: string) {
    this.query = query;
    if (this.data && query) {
      const index = this.data.findIndex((item: IAutocompleteDataItem) => (
        query === this.options.inputTemplate(item)
      ));
      if (index !== -1) {
        this.selectedIndex = index;
        this.redrawItems();
        this.options.onSelectItem(this.data[index], true);
        return true;
      }
    }

    return false;
  }

  render() {
    if (!this.data || !this.data.length) return;

    this.items = this.data.map((dataItem: IAutocompleteDataItem, index: number) => this.renderItem(index, dataItem));

    const fragment = document.createDocumentFragment();

    this.items.forEach((item: HTMLDivElement) => fragment.appendChild(item));

    this.node.appendChild(fragment);
  }

  redrawItems() {
    this.items.forEach((item: HTMLDivElement, i: number) => item.classList.toggle('active', i === this.selectedIndex));
  }

  renderItem(index: number, dataItem: IAutocompleteDataItem): HTMLDivElement {
    const item: HTMLDivElement = document.createElement('div');
    item.classList.add('dropdown-item', 'js-sf-dropdown-item');
    item.tabIndex = 0;
    item.dataset.index = index.toString();
    item.innerHTML = this.options.suggestTemplate(dataItem);
    item.addEventListener('click', this.handleClickItem);
    item.addEventListener('focus', this.handleFocusItem);
    item.addEventListener('keydown', this.handleKeyDownItem);
    return item;
  }

  focusSelectedItem() {
    if (this.selectedIndex === -1) return;
    this.isInnerFocus = true;
    this.items[this.selectedIndex]?.focus();
  }

  public selectIndex(index: number) {
    const len = this.data?.length;
    if (!len) return;

    this.selectedIndex = (index > len || index < 0) ? len - 1 : index;

    this.redrawItems();

    if (this.selectedIndex === -1) return;

    this.focusSelectedItem();

    this.options.onSelectItem(this.data![this.selectedIndex]);
  }

  clearIndex() {
    this.selectedIndex = -1;

    this.redrawItems();
  }

  @autobind
  handleClickItem(event: MouseEvent) {
    let item: HTMLDivElement | null = event.target as HTMLDivElement;

    if (!item.classList.contains('js-sf-dropdown-item')) {
      item = item.closest('.js-sf-dropdown-item');
    }

    if (!item) return;

    const { index } = item.dataset;

    this.selectedIndex = index === undefined ? -1 : parseInt(index, 10);

    this.redrawItems();

    this.isInnerFocus = true;
    this.focusSelectedItem();

    this.options.onSelectItem(this.data![this.selectedIndex], true);

    this.hide();
  }

  @autobind
  handleFocusItem(event: FocusEvent) {
    if (this.isInnerFocus) {
      this.isInnerFocus = false;
      return;
    }

    const item = event.target as HTMLDivElement;
    const { index } = item.dataset;

    this.selectedIndex = index === undefined ? -1 : parseInt(index, 10);

    this.redrawItems();

    this.options.onSelectItem(this.data![this.selectedIndex]);
  }

  @autobind
  handleKeyDownItem(event: KeyboardEvent) {
    const len = this.items.length;
    if (!len) return;

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.selectedIndex === 0) {
        this.clearIndex();
        this.options.onBlur();
        return;
      }
      this.selectIndex(this.selectedIndex - 1);
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.selectedIndex === len - 1) {
        this.clearIndex();
        this.options.onBlur();
        return;
      }
      this.selectIndex(this.selectedIndex + 1);
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      this.options.onSelectItem(this.data![this.selectedIndex], true);
      this.hide();
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      this.clearIndex();
      this.hide();
      this.options.onBlur();
    }
  }
}
