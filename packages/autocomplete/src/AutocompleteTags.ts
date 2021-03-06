import { autobind } from './autobind';
import { getValue } from './getValue';
import { IAutocompleteTagsOptions, IAutocompleteData, IAutocompleteDataItem } from './types';

export class AutocompleteTags {
  options: IAutocompleteTagsOptions;

  data: IAutocompleteData;

  items: HTMLDivElement[];

  parentNode: Element;

  isDisabled: boolean;

  constructor(options: IAutocompleteTagsOptions) {
    // this.node = document.createElement('div');

    this.options = options;

    this.data = [];
    this.items = [];

    this.parentNode = this.options.inputNode.parentNode as Element;

    this.isDisabled = this.options.isDisabled;
  }

  appendTag(item: HTMLDivElement | DocumentFragment) {
    // this.node.appendChild(item);

    this.parentNode.insertBefore(item, this.options.inputNode);
  }

  public enable() {
    if (!this.isDisabled) return;
    this.isDisabled = false;
    this.renderTags();
  }

  public disable() {
    if (this.isDisabled) return;
    this.isDisabled = true;
    this.renderTags();
  }

  public addTag(dataItem: IAutocompleteDataItem) {
    this.data.push(dataItem);

    const item = this.renderTag(dataItem);
    this.appendTag(item);
    this.items.push(item);
  }

  public removeTag(dataItem: IAutocompleteDataItem) {
    const { valueKey } = this.options;
    const value = getValue(dataItem, valueKey);

    const index = this.data.findIndex((item: IAutocompleteDataItem) => getValue(item, valueKey) === value);

    if (index !== -1) {
      const node = this.items[index];
      this.parentNode.removeChild(node);
      this.data.splice(index, 1);
      this.items.splice(index, 1);
    }
  }

  public setTags(data: IAutocompleteData) {
    this.data = data.slice();
    this.renderTags();
  }

  // bind() {
  //   this.node.addEventListener('click', this.handleClickNode);
  // }

  clearTags() {
    this.items.forEach((item: HTMLDivElement) => this.parentNode.removeChild(item));
  }

  renderTags() {
    this.clearTags();

    this.items = this.data.map((dataItem: IAutocompleteDataItem) => this.renderTag(dataItem));

    const fragment = document.createDocumentFragment();

    this.items.forEach((item: HTMLDivElement) => fragment.appendChild(item));

    this.appendTag(fragment);
  }

  renderTag(dataItem: IAutocompleteDataItem): HTMLDivElement {
    const { valueKey } = this.options;

    const item: HTMLDivElement = document.createElement('div');
    item.classList.add('badge', 'badge-primary', 'sf-tag');

    const itemText = document.createElement('span');
    itemText.innerHTML = this.options.inputTemplate(dataItem);
    item.appendChild(itemText);

    if (!this.isDisabled) {
      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.setAttribute('aria-label', 'Close');
      deleteButton.classList.add('close');
      deleteButton.innerHTML = '<span aria-hidden="true">×</span>';
      deleteButton.dataset.value = getValue(dataItem, valueKey);
      item.appendChild(deleteButton);

      deleteButton.addEventListener('click', this.handleRemoveTag);
    }
    return item;
  }

  @autobind
  handleRemoveTag(event: MouseEvent) {
    if (this.isDisabled) return;

    event.preventDefault();

    const button = event.target as HTMLButtonElement;
    const { value } = button.dataset;

    if (value === undefined) return;

    const { valueKey } = this.options;
    const dataItem: IAutocompleteDataItem | undefined = this.data.find((item: IAutocompleteDataItem) => getValue(item, valueKey) === value);

    if (!dataItem) return;

    this.removeTag(dataItem);
    this.options.onRemoveTag(dataItem);
  }
}
