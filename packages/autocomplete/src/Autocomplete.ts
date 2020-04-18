import sf, {
  ICustomInput,
  IOptionToGrab,
  ISpiralFramework,
} from '@spiral-toolkit/core';
import assert from 'assert';
import type { AxiosResponse } from 'axios';
import Handlebars from 'handlebars';
import { autobind } from './autobind';
import { AutocompleteDropdown } from './AutocompleteDropdown';
import { makeUrl } from './makeUrl';
import {
  IAutocompleteOptions,
  IAutocompleteData,
  IAutocompleteStaticDataItem,
  IAutocompleteDataItem,
} from './types';

const { CUSTOM_INPUT_ATTR, CUSTOM_INPUT_TARGET_ATTR } = sf.constants;

export class Autocomplete extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'autocomplete';

  public readonly name = Autocomplete.spiralFrameworkName;

  static defaultOptions: IAutocompleteOptions = {
    id: '',
    name: '',
    data: [],
    valueKey: 'id',
    searchKey: 'name',
    url: '',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

  dropdown?: AutocompleteDropdown;

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

    this.initDropdown();

    this.setExternalValue(this.hiddenInput.value);

    this.bind();

    console.log('Autocomplete is ready');
  }

  initDropdown() {
    if (this.node.classList.contains('dropdown')) return; // TODO: do we need a flag?

    this.options.suggestTemplate = this.options.suggestTemplate || `{{${this.options.searchKey}}}`;
    this.options.inputTemplate = this.options.inputTemplate || `{{${this.options.searchKey}}}`;

    this.suggestTemplate = Handlebars.compile(this.options.suggestTemplate);
    this.inputTemplate = Handlebars.compile(this.options.inputTemplate);

    this.dropdown = new AutocompleteDropdown({
      suggestTemplate: this.suggestTemplate!,
      inputTemplate: this.inputTemplate!,
      onSelectItem: this.handleSelectDropdownItem,
      onClickItem: this.handleClickDropdownItem,
      onBlur: this.handleBlurDropdown,
    });

    this.node.classList.add('dropdown');
    this.node.appendChild(this.dropdown!.node);
  }

  getSuggestions(search: string) {
    this.clearSuggestions();

    if (this.options.url) {
      this.getSuggestionsByURL(search);
      return;
    }

    if (this.options.data) {
      this.getSuggestionsFromData(search);
    }
  }

  getSuggestionsFromData(search: string) {
    const searchLC = search.toLocaleLowerCase();

    const suggestions: IAutocompleteData = [];

    this.options.data!.forEach((item: string | IAutocompleteStaticDataItem) => {
      let id: string | undefined;
      let name: string | undefined = '';
      if (typeof item !== 'string') {
        id = item.id;
        name = item.name;
      } else {
        id = item;
        name = item;
      }

      if (name.toLocaleLowerCase().startsWith(searchLC)) {
        suggestions.push({ id, name });
      }
    });

    this.showSuggestions(suggestions, search);
  }

  getSuggestionsByURL(search: string) {
    const {
      method = 'GET',
      headers,
      url,
    } = this.options;

    sf.ajax.send({
      method,
      headers,
      url: makeUrl(url!, { paginate: { limit: 10 }, filter: { search } }),
    }).then((response: AxiosResponse<any>) => {
      const suggestions: IAutocompleteData = response.data.data;

      this.showSuggestions(suggestions, search);
    });
  }

  showSuggestions(suggestions: IAutocompleteData, search: string) {
    if (!suggestions.length) {
      // TODO: show 'no entries found' ?
      this.dropdown!.hide();
      return;
    }

    this.dropdown!.setData(suggestions);
    this.dropdown!.suggest(search);

    this.dropdown!.show();
  }

  clearSuggestions() {
    this.dropdown!.setData([]);
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
    this.resetDataItem();

    this.isInnerFocus = true;
    this.textInput.focus();
  }

  @autobind
  setExternalValue(value?: string) {
    if (!value) {
      return;
    }

    this.getSuggestions(value);
  }

  @autobind
  handleFocus() {
    if (this.isInnerFocus) {
      this.isInnerFocus = false;
      return;
    }

    this.resetDataItem();

    // TODO?
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
    console.log(this.options.name, value);

    this.currentTextValue = value;

    if (!value) {
      this.dropdown!.hide();
      return;
    }

    this.getSuggestions(value);
  }

  @autobind
  handleSelectDropdownItem(option: IAutocompleteDataItem, isSave?: boolean) {
    this.setDataItem(option, isSave);
  }

  @autobind
  handleClickDropdownItem() {
    this.dropdown!.hide();
  }

  @autobind
  handleFocusDropdownItem(option: IAutocompleteDataItem) {
    this.setDataItem(option);
  }

  @autobind
  handleBlurDropdown() {
    this.focusInput();
  }

  @autobind
  handleInsideClick() {
    this.isInnerClick = true;
  }

  @autobind
  handleOutsideClick() {
    if (!this.isInnerClick) {
      if (this.dropdown!.hide()) {
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
