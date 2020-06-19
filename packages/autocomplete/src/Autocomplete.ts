import sf, {
  ICustomInput,
  IOptionToGrab,
  ISpiralFramework,
} from '@spiral-toolkit/core';
import assert from 'assert';
import Handlebars from 'handlebars';
import { autobind } from './autobind';
import { getValue } from './getValue';
import { debounce } from './debounce';
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
    separator: ',',
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

  // single
  currentDataItem?: IAutocompleteDataItem;

  // multiple
  currentDataItems?: IAutocompleteDataItem[];

  suggestTemplate?: Function;

  inputTemplate?: Function;

  loadingTemplate?: string;

  /* Misc */
  observer: MutationObserver;

  isDisabled: boolean;

  isInnerClick?: boolean;

  isInnerFocus?: boolean;

  debouncedKeyDownListener: any;

  debouncedInputListener: any;

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

    this.isDisabled = this.textInput.disabled;

    this.initDataSource();
    this.initTemplates();
    this.initDropdown();
    this.initTags();

    this.setExternalValue(this.hiddenInput.value);

    this.observer = new MutationObserver((mutations) => {
      mutations.forEach(this.handleMutation);
    });

    const debounceTimeout = this.options.debounce || 0;
    this.debouncedKeyDownListener = debounce(this.handleKeyDown, debounceTimeout);
    this.debouncedInputListener = debounce(this.handleInput, debounceTimeout);

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
      loadingTemplate,
    } = this.options;

    this.options.suggestTemplate = suggestTemplate || `{{${searchKey}}}`;
    this.options.inputTemplate = inputTemplate || `{{${searchKey}}}`;

    this.suggestTemplate = Handlebars.compile(this.options.suggestTemplate);
    this.inputTemplate = Handlebars.compile(this.options.inputTemplate);

    this.loadingTemplate = loadingTemplate;
  }

  initDropdown() {
    if (this.node.classList.contains('dropdown')) return; // TODO: do we need a flag?

    this.dropdown = new AutocompleteDropdown({
      isDisabled: this.isDisabled,
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
      isDisabled: this.isDisabled,
      inputNode: this.textInput,
      valueKey: this.options.valueKey as string,
      inputTemplate: this.inputTemplate!,
      onRemoveTag: this.handleRemoveTag,
    });
    // this.textInputWrapper.insertBefore(this.tags.node, this.textInput);

    this.currentDataItems = [];
  }

  changeHiddenInput(value: string) {
    if (this.hiddenInput.value !== value) {
      this.hiddenInput.value = value;
      this.hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  setDataItem(dataItem: IAutocompleteDataItem, isSave?: boolean) {
    const value = getValue(dataItem, this.options.valueKey);
    this.textInput.value = this.inputTemplate!(dataItem);
    this.changeHiddenInput(value);

    if (isSave) {
      this.currentDataItem = dataItem;
    }
  }

  clearDataItem() {
    this.currentDataItem = undefined;
    this.textInput.value = this.currentTextValue || '';
    this.changeHiddenInput('');
  }

  resetDataItem() {
    if (this.currentDataItem) {
      this.setDataItem(this.currentDataItem);
    } else {
      this.clearDataItem();
    }
  }

  focusInput() {
    if (!this.options.isMultiple) {
      this.resetDataItem();
    }

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

    this.dropdown!.setLoading(this.loadingTemplate);
    this.dataSource.getData(value);
  }

  resetHiddenInputValue() {
    // only for multiple
    if (!this.options.isMultiple) {
      return;
    }

    const { valueKey, separator } = this.options;

    const values: string[] = this.currentDataItems!.map((item: IAutocompleteDataItem) => getValue(item, valueKey));
    this.changeHiddenInput(values.filter((v: string) => v !== '').join(separator));
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

  @autobind
  handleRestoreDataItem(dataItems: IAutocompleteDataItem[]) {
    // this.clearSuggestions();

    if (!dataItems || !dataItems.length) {
      this.changeHiddenInput('');
      return;
    }

    if (!this.options.isMultiple) {
      // for single value
      const dataItem: IAutocompleteDataItem = dataItems[0];

      this.setDataItem(dataItem, true);
      this.currentTextValue = this.textInput.value;

      this.dropdown!.setData([dataItem]);
    } else {
      // for multiple
      this.tags!.setTags(dataItems);
      this.currentDataItems = dataItems.slice();
    }
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

    const { isMultiple, separator } = this.options;
    let values: string[] = [];

    if (isMultiple) {
      values = value.split(separator!);
    } else {
      values.push(value);
    }

    this.dataSource.restoreDataItem(values);
  }

  @autobind
  handleFocus() {
    this.textInputWrapper.classList.add('focus');
    if (this.isInnerFocus) {
      this.isInnerFocus = false;
      return;
    }

    if (!this.options.isMultiple) {
      this.resetDataItem();

      if (this.textInput.value) {
        if (!this.dropdown!.suggest(this.textInput.value)) {
          this.clearDataItem();
        }
        this.dropdown!.show();
      }
    }
  }

  @autobind
  handleBlur() {
    this.textInputWrapper.classList.remove('focus');
  }

  @autobind
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.dropdown!.selectIndex(-1);
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.dropdown!.selectIndex(0);
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
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
      this.clearDataItem();
      return;
    }

    this.getSuggestions(value);
  }

  @autobind
  handleSelectDropdownItem(dataItem: IAutocompleteDataItem, isSave?: boolean) {
    if (!this.options.isMultiple) {
      // single value
      this.setDataItem(dataItem, isSave);
      return;
    }

    // multiple value: add to array
    if (isSave) {
      this.tags!.addTag(dataItem);
      this.handleAddTag(dataItem);
    }
  }

  @autobind
  handleFocusDropdownItem(dataItem: IAutocompleteDataItem) {
    // only for single value
    if (!this.options.isMultiple) {
      this.setDataItem(dataItem);
    }
  }

  @autobind
  handleBlurDropdown() {
    this.focusInput();
  }

  @autobind
  handleAddTag(dataItem: IAutocompleteDataItem) {
    this.textInput.value = '';
    this.currentTextValue = '';
    this.currentDataItems!.push(dataItem);
    this.resetHiddenInputValue();
  }

  @autobind
  handleRemoveTag(dataItem: IAutocompleteDataItem) {
    const { valueKey } = this.options;
    const value = getValue(dataItem, valueKey);

    this.currentDataItems = this.currentDataItems?.filter((item: IAutocompleteDataItem) => getValue(item, valueKey) !== value);
    this.resetHiddenInputValue();
  }

  @autobind
  handleInsideClick() {
    this.isInnerClick = true;

    if (this.options.isMultiple) {
      this.focusInput();
    }
  }

  @autobind
  handleOutsideClick() {
    if (!this.isInnerClick) {
      if (this.dropdown!.hide()) {
        if (!this.options.isMultiple) {
          // only for single value
          this.resetDataItem();
        }
      }
    }
    this.isInnerClick = false;
  }

  @autobind
  handleMutation(mutation: MutationRecord) {
    if (mutation.type === 'attributes') {
      this.isDisabled = this.textInput.disabled;
      if (this.isDisabled) {
        this.dropdown?.disable();
        this.tags?.disable();
      } else {
        this.dropdown?.enable();
        this.tags?.enable();
      }
    }
  }

  bind() {
    (this.hiddenInput as unknown as ICustomInput).sfSetValue = this.setExternalValue;

    this.textInput.addEventListener('focus', this.handleFocus);
    this.textInput.addEventListener('blur', this.handleBlur);
    this.textInput.addEventListener('keydown', this.debouncedKeyDownListener);
    this.textInput.addEventListener('input', this.debouncedInputListener);

    this.node.addEventListener('click', this.handleInsideClick);
    document.addEventListener('click', this.handleOutsideClick);

    this.observer.observe(this.textInput, {
      attributes: true,
    });
  }

  die() {
    this.textInput.removeEventListener('focus', this.handleFocus);
    this.textInput.removeEventListener('blur', this.handleBlur);
    this.textInput.removeEventListener('keydown', this.debouncedKeyDownListener);
    this.textInput.removeEventListener('input', this.debouncedInputListener);

    this.node.removeEventListener('click', this.handleInsideClick);
    document.removeEventListener('click', this.handleOutsideClick);

    this.observer.disconnect();
  }
}

export default Autocomplete;
