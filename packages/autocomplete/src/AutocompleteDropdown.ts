import { autobind } from './autobind';
import { IAutocompleteDropdownOptions, IDataOption } from './types';

export class AutocompleteDropdown {
  public node: HTMLDivElement;

  options: IAutocompleteDropdownOptions;

  selectedIndex: number;

  items?: HTMLDivElement[];

  constructor(options: IAutocompleteDropdownOptions) {
    const node: HTMLDivElement = document.createElement('div');
    node.classList.add('sf-autocomplete__dropdown', 'dropdown-menu');

    this.node = node;

    this.options = options;
    this.selectedIndex = -1;
  }

  public show() {
    this.node.classList.add('show');
  }

  public hide() {
    this.node.classList.remove('show');
  }

  public clear() {
    // const clone: Node = this.node.cloneNode(false);
    // this.node.parentNode!.replaceChild(clone, this.node);
    // this.node = clone as HTMLDivElement;
    this.node.innerHTML = '';
  }

  public render(options: IDataOption[]) {
    this.clear();

    this.items = options.map((option: IDataOption, index: number) => this.renderItem(index, option));

    // this.dropdown.innerHTML = items.join('');
    this.items.forEach((item: HTMLDivElement) => this.node.appendChild(item));
  }

  redrawItems() {
    this.items!.forEach((item: HTMLDivElement, i: number) => item.classList.toggle('active', i === this.selectedIndex));
  }

  renderItem(index: number, { value, label }: IDataOption): HTMLDivElement {
    // TODO: template
    // return `<div class="dropdown-item">${label ?? value}</div>`;
    const item: HTMLDivElement = document.createElement('div');
    item.classList.add('dropdown-item');
    item.tabIndex = 0;
    item.dataset.index = index.toString();
    item.innerHTML = label ?? value;
    item.addEventListener('click', this.handleClickItem);
    item.addEventListener('focus', this.handleFocusItem);
    item.addEventListener('keyup', this.handleKeyUpItem);
    return item;
  }

  public selectItem(index: number) {
    const len = this.items?.length;
    if (!len) return;

    this.selectedIndex = (index > len - 1 || index < 0) ? len - 1 : index;
    this.focusItem(this.selectedIndex);

    this.redrawItems();

    this.options.onFocusItem(this.selectedIndex);
  }

  focusItem(index: number) {
    if (index === -1) return;
    this.items![index].focus();
  }

  @autobind
  handleClickItem(event: MouseEvent) {
    const item = event.target as HTMLDivElement;
    const { index } = item.dataset;

    this.selectedIndex = index === undefined ? -1 : parseInt(index, 10);

    this.redrawItems();

    this.focusItem(this.selectedIndex);

    this.options.onClickItem(this.selectedIndex);
  }

  @autobind
  handleFocusItem(event: FocusEvent) {
    const item = event.target as HTMLDivElement;
    const { index } = item.dataset;

    this.selectedIndex = index === undefined ? -1 : parseInt(index, 10);

    this.redrawItems();

    this.options.onFocusItem(this.selectedIndex);
  }

  @autobind
  handleKeyUpItem(event: KeyboardEvent) {
    const len = this.items?.length;
    if (!len) return;

    if (event.key === 'ArrowUp') {
      if (this.selectedIndex === 0) {
        this.options.onBlur();
        return;
      }
      this.selectItem(this.selectedIndex - 1);
      return;
    }
    if (event.key === 'ArrowDown') {
      if (this.selectedIndex === len - 1) {
        this.options.onBlur();
        return;
      }
      this.selectItem(this.selectedIndex + 1);
      return;
    }
    if (event.key === 'Enter') {
      this.options.onClickItem(this.selectedIndex);
    }
  }
}
