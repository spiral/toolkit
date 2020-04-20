import sf, {
  ICustomInput,
  IOptionToGrab,
  ISpiralFramework,
} from '@spiral-toolkit/core';
import assert from 'assert';
import Handlebars from 'handlebars';
import { autobind } from './autobind';
import { AutocompleteDataSource } from './AutocompleteDataSource';
import { AutocompleteDropdown } from './AutocompleteDropdown';
import { AutocompleteTags } from './AutocompleteTags';
import {
  IAutocompleteOptions,
  IAutocompleteData,
  IAutocompleteDataItem,
} from './types';

const { CUSTOM_INPUT_ATTR, CUSTOM_INPUT_TARGET_ATTR } = sf.constants;

export class Autocomplete extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'autocomplete';

  public readonly name = Autocomplete.spiralFrameworkName;

  static defaultOptions: IAutocompleteOptions = {
    id: '',
    name: '',
    valueKey: 'id',
    searchKey: 'name',
  };

  el?: HTMLDivElement;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    id: {
      value: Autocomplete.defaultOptions.id,
      domAttr: 'id',
    },
    name: {
      value: Autocomplete.defaultOptions.name,
      domAttr: 'data-name',
    },
  };

  options: IAutocompleteOptions = { ...Autocomplete.defaultOptions };

  sf!: ISpiralFramework;

  /* Elements */
  textInput: HTMLInputElement;

  textInputWrapper: HTMLDivElement;

  hiddenInput: HTMLInputElement;

  dataSource?: AutocompleteDataSource;

  dropdown?: AutocompleteDropdown;

  tags?: AutocompleteTags;

  /* Data */
  currentTextValue?: string;

  currentDataItem?: IAutocompleteDataItem;

  suggestTemplate?: Function;

  inputTemplate?: Function;

  /* Misc */
  isInnerClick?: boolean;

  isInnerFocus?: boolean;

  constructor(ssf: ISpiralFramework, node: Element, options: IAutocompleteOptions) {
    super();

    assert.ok(node.hasAttribute(CUSTOM_INPUT_ATTR), 'Node has custom form attribute');
    assert.ok(node.querySelector('input[data-sf="autocomplete-input"]'), 'Node has input for inputting text');
    assert.ok(node.querySelector('div[data-sf="autocomplete-input-wrapper"]'), 'Node has input wrapper');
    assert.ok(!(node.querySelector('input[data-sf="autocomplete-input"]')?.getAttribute('name')), 'Node has input for inputting text without name');
    assert.ok(node.querySelector(`input[${CUSTOM_INPUT_TARGET_ATTR}]`), 'Node has input to serialize values');

    this.textInput = (node.querySelector('input[data-sf="autocomplete-input"]') as HTMLInputElement)!;
    this.textInputWrapper = (node.querySelector('div[data-sf="autocomplete-input-wrapper"]') as HTMLDivElement)!;
    this.hiddenInput = (node.querySelector(`input[${CUSTOM_INPUT_TARGET_ATTR}]`) as HTMLInputElement)!;

    this.init(ssf, node, options, Autocomplete.defaultOptions);

    this.initDataSource();
    this.initTemplates();
    this.initDropdown();
    this.initTags();

    this.setExternalValue(this.hiddenInput.value);

    this.bind();
  }

  initDataSource() {
    const {
      data,
      valueKey,
      url,
      dataField,
      method,
      headers,
    } = this.options;

    assert.ok(data || url, 'Data or URL provided');

    this.dataSource = new AutocompleteDataSource({
      data,
      url,
      valueKey: valueKey as string,
      dataField: dataField as string,
      method,
      headers,
      onRestoreDataItem: this.handleRestoreDataItem,
      onSuccessResponse: this.handleSuccessDataSourceResponse,
      onErrorResponse: this.handleErrorDataSourceResponse,
    });
  }

  initTemplates() {
    const {
      searchKey,
      suggestTemplate,
      inputTemplate,
    } = this.options;

    this.options.suggestTemplate = suggestTemplate || `{{${searchKey}}}`;
    this.options.inputTemplate = inputTemplate || `{{${searchKey}}}`;

    this.suggestTemplate = Handlebars.compile(this.options.suggestTemplate);
    this.inputTemplate = Handlebars.compile(this.options.inputTemplate);
  }

  initDropdown() {
    if (this.node.classList.contains('dropdown')) return; // TODO: do we need a flag?

    this.dropdown = new AutocompleteDropdown({
      suggestTemplate: this.suggestTemplate!,
      inputTemplate: this.inputTemplate!,
      onSelectItem: this.handleSelectDropdownItem,
      onBlur: this.handleBlurDropdown,
    });

    this.node.classList.add('dropdown');
    this.node.appendChild(this.dropdown!.node);
  }

  initTags() {
    if (!this.options.isMultiple) return;

    this.tags = new AutocompleteTags({
      valueKey: this.options.valueKey as string,
      inputTemplate: this.inputTemplate!,
      onRemoveTag: this.handleRemoveTag,
    });
    this.textInputWrapper.insertBefore(this.tags.node, this.textInput);
  }

  setDataItem(dataItem: IAutocompleteDataItem, isSave?: boolean) {
    const value = dataItem[this.options.valueKey! as keyof IAutocompleteDataItem]!;
    this.textInput.value = this.inputTemplate!(dataItem);
    this.hiddenInput.value = value;

    if (isSave) {
      this.currentDataItem = dataItem;
    }
  }

  clearDataItem() {
    this.currentDataItem = undefined;
    this.textInput.value = this.currentTextValue || '';
    this.hiddenInput.value = '';
  }

  resetDataItem() {
    if (this.currentDataItem) {
      this.setDataItem(this.currentDataItem);
    } else {
      this.clearDataItem();
    }
  }

  focusInput() {
    // only for single value
    this.resetDataItem();

    this.isInnerFocus = true;
    this.textInput.focus();
  }

  clearSuggestions() {
    this.dropdown!.setData([]);
  }

  getSuggestions(value: string) {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.getData(value);
    // TODO: loading
  }

  @autobind
  handleSuccessDataSourceResponse(search: string, suggestions: IAutocompleteData) {
    if (!suggestions.length) {
      // TODO: show 'no entries found' ?
      this.dropdown!.hide();
      return;
    }

    this.dropdown!.show();
    this.dropdown!.setData(suggestions);
    this.dropdown!.suggest(search);
  }

  @autobind
  handleErrorDataSourceResponse(/* search: string */) {
    // TODO
    this.dropdown!.hide();
  }

  @autobind handleRestoreDataItem(dataItem?: IAutocompleteDataItem) {
    // this.clearSuggestions();

    if (!dataItem) {
      this.hiddenInput.value = '';
      return;
    }

    // for single value
    this.setDataItem(dataItem, true);
    this.currentTextValue = this.textInput.value;

    this.dropdown!.setData([dataItem]);
  }

  @autobind
  setExternalValue(value?: string) {
    if (!this.dataSource) {
      this.hiddenInput.value = ''; // ?
      return;
    }

    this.hiddenInput.value = value ?? '';

    this.clearSuggestions();

    if (!value) {
      return;
    }

    this.dataSource.restoreDataItem(value);
  }

  @autobind
  handleFocus() {
    if (this.isInnerFocus) {
      this.isInnerFocus = false;
      return;
    }

    // for single value
    this.resetDataItem();

    // for single value
    if (this.textInput.value) {
      if (!this.dropdown!.suggest(this.textInput.value)) {
        this.clearDataItem();
      }
      this.dropdown!.show();
    }

    this.textInputWrapper.classList.add('focus');
  }

  @autobind
  handleBlur() {
    this.textInputWrapper.classList.remove('focus');
  }

  @autobind
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.dropdown!.selectIndex(-1);
      return;
    }
    if (event.key === 'ArrowDown') {
      this.dropdown!.selectIndex(0);
      return;
    }
    if (event.key === 'Escape') {
      this.dropdown!.hide();
      this.textInput.blur();
    }
  }

  @autobind
  handleInput(/* event: KeyboardEvent */) {
    // const value = (event.target as HTMLInputElement).value;
    const value = this.textInput.value ?? '';

    this.currentTextValue = value;

    // this.clearSuggestions();

    if (!value) {
      this.dropdown!.hide();
      return;
    }

    this.getSuggestions(value);
  }

  @autobind
  handleSelectDropdownItem(dataItem: IAutocompleteDataItem, isSave?: boolean) {
    console.log('Select', dataItem.id)
    if (!this.options.isMultiple) {
      // single value
      this.setDataItem(dataItem, isSave);
      return;
    }

    // multiple value: add to array
    if (isSave) {
      this.tags!.addTag(dataItem);
      this.textInput.value = '';
      this.currentTextValue = '';
    }
  }

  @autobind
  handleFocusDropdownItem(dataItem: IAutocompleteDataItem) {
    // only for single value
    this.setDataItem(dataItem);
  }

  @autobind
  handleBlurDropdown() {
    this.focusInput();
  }

  @autobind
  handleRemoveTag(dataItem: IAutocompleteDataItem) {

  }

  @autobind
  handleInsideClick() {
    this.isInnerClick = true;
  }

  @autobind
  handleOutsideClick() {
    if (!this.isInnerClick) {
      if (this.dropdown!.hide()) {
        // only for single value
        this.resetDataItem();
      }
    }
    this.isInnerClick = false;
  }

  bind() {
    (this.hiddenInput as unknown as ICustomInput).sfSetValue = this.setExternalValue;

    this.textInput.addEventListener('focus', this.handleFocus);
    this.textInput.addEventListener('blur', this.handleBlur);
    this.textInput.addEventListener('keyup', this.handleKeyUp);
    this.textInput.addEventListener('input', this.handleInput);

    this.node.addEventListener('click', this.handleInsideClick);
    document.addEventListener('click', this.handleOutsideClick);
  }

  die() {
    this.textInput.removeEventListener('focus', this.handleFocus);
    this.textInput.removeEventListener('blur', this.handleBlur);
    this.textInput.removeEventListener('keyup', this.handleKeyUp);
    this.textInput.removeEventListener('input', this.handleInput);

    this.node.removeEventListener('click', this.handleInsideClick);
    document.removeEventListener('click', this.handleOutsideClick);
  }
}

export default Autocomplete;
