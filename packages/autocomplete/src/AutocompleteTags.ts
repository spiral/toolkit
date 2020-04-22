import { autobind } from './autobind';
import { getValue } from './getValue';
import { IAutocompleteTagsOptions, IAutocompleteData, IAutocompleteDataItem } from './types';

export class AutocompleteTags {
  public node: HTMLDivElement;

  options: IAutocompleteTagsOptions;

  data: IAutocompleteData;

  items: HTMLDivElement[];

  constructor(options: IAutocompleteTagsOptions) {
    this.node = document.createElement('div');
    this.node.classList.add('sf-autocomplete__tags');

    this.options = options;

    this.data = [];
    this.items = [];
  }

  public addTag(dataItem: IAutocompleteDataItem) {
    this.data.push(dataItem);

    const item = this.renderTag(dataItem);
    this.node.appendChild(item);
    this.items.push(item);
  }

  public removeTag(dataItem: IAutocompleteDataItem) {
    const { valueKey } = this.options;
    const value = getValue(dataItem, valueKey);

    const index = this.data.findIndex((item: IAutocompleteDataItem) => getValue(item, valueKey) === value);

    if (index !== -1) {
      const node = this.items[index];
      this.node.removeChild(node);
      this.data.splice(index, 1);
      this.items.splice(index, 1);
    }
  }

  public setTags(data: IAutocompleteData) {
    this.data = data.slice();
    this.renderTags();
  }

  renderTags() {
    this.items = this.data.map((dataItem: IAutocompleteDataItem) => this.renderTag(dataItem));

    const fragment = document.createDocumentFragment();

    this.items.forEach((item: HTMLDivElement) => fragment.appendChild(item));
    this.node.querySelectorAll('.sf-tag').forEach((oldTag) => this.node.removeChild(oldTag));
    this.node.appendChild(fragment);
  }

  renderTag(dataItem: IAutocompleteDataItem): HTMLDivElement {
    const { valueKey } = this.options;

    const item: HTMLDivElement = document.createElement('div');
    item.classList.add('badge', 'badge-primary', 'sf-tag');

    const itemText = document.createElement('span');
    itemText.innerHTML = this.options.inputTemplate(dataItem);
    item.appendChild(itemText);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.setAttribute('aria-label', 'Close');
    deleteButton.classList.add('close');
    deleteButton.innerHTML = '<span aria-hidden="true">×</span>';
    deleteButton.dataset.value = getValue(dataItem, valueKey);
    item.appendChild(deleteButton);

    deleteButton.addEventListener('click', this.handleClickTag);
    return item;
  }

  @autobind
  handleClickTag(event: MouseEvent) {
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
