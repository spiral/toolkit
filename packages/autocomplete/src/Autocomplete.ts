import sf, {
  ICustomInput,
  IOptionToGrab,
  ISpiralFramework,
  // AxiosResponse,
} from '@spiral-toolkit/core';
import assert from 'assert';
import { autobind } from './autobind';
import { extractOptions } from './extractOptions';
import { AutocompleteDropdown } from './AutocompleteDropdown';
import { IAutocompleteOptions, IDataOption } from './types';

const { CUSTOM_INPUT_ATTR, CUSTOM_INPUT_TARGET_ATTR } = sf.constants;

export class Autocomplete extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'autocomplete';

  public readonly name = Autocomplete.spiralFrameworkName;

  static defaultOptions: IAutocompleteOptions = {
    id: '',
    name: '',
    options: [],
    url: '',
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

  hiddenInput: HTMLInputElement;

  dropdown: AutocompleteDropdown;

  /* Data */
  data: IDataOption[];

  suggestions: IDataOption[];

  currentValue?: IDataOption;

  /* Misc */
  isInnerClick?: boolean;

  constructor(ssf: ISpiralFramework, node: Element, options: IAutocompleteOptions) {
    super();

    assert.ok(node.hasAttribute(CUSTOM_INPUT_ATTR), 'Node has custom form attribute');
    assert.ok(node.querySelector('input[data-sf="autocomplete-input"]'), 'Node has input for inputting text');
    assert.ok(!(node.querySelector('input[data-sf="autocomplete-input"]')?.getAttribute('name')), 'Node has input for inputting text without name');
    assert.ok(node.querySelector(`input[data-sf="autocomplete-value"][${CUSTOM_INPUT_TARGET_ATTR}]`), 'Node has input to serialize values');

    this.textInput = (node.querySelector('input[data-sf="autocomplete-input"]') as HTMLInputElement)!;
    this.hiddenInput = (node.querySelector(`input[data-sf="autocomplete-value"][${CUSTOM_INPUT_TARGET_ATTR}]`) as HTMLInputElement)!;

    this.init(ssf, node, options);
    this.options = {
      ...Autocomplete.defaultOptions,
      ...this.options,
      ...extractOptions(node),
    };

    this.data = Autocomplete.parseData(this.options.options);
    this.suggestions = [];

    this.dropdown = new AutocompleteDropdown({
      onClickItem: this.handleClickDropdownItem,
      onFocusItem: this.handleFocusDropdownItem,
      onBlur: this.handleBlurDropdown,
    });
    this.initDropdown();

    this.bind();
    this.setExternalValue(this.hiddenInput.value);

    console.log('Autocomplete is ready');
  }

  static parseData(data: Array<string | IDataOption>) {
    return data.map((item: string | IDataOption) => {
      if (typeof item !== 'string') {
        const { value, label } = item;
        return { value, label };
      }
      return {
        value: item,
      };
    });
  }

  initDropdown() {
    if (this.node.classList.contains('dropdown')) return;

    this.node.classList.add('dropdown');
    this.node.appendChild(this.dropdown!.node);
  }

  getSuggestions(query: string) {
    const lcQuery = query.toLocaleLowerCase();

    if (!this.options.url) {
      this.suggestions = this.data.filter(({ value, label }: IDataOption) => (
        (label ?? value).toLocaleLowerCase().startsWith(lcQuery)
      ));

      this.showSuggestions();

      return;
    }

    sf.ajax.send({
      method: 'GET',
      url: `${this.options.url}${lcQuery}`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {},
    }).then((response: any/* AxiosResponse<any> */) => {
      this.suggestions = response.data.data.map((item: any) => ({
        value: item.id,
        label: `${item.firstName} ${item.lastName}`,
      }));

      this.showSuggestions();
    });
  }

  showSuggestions() {
    if (!this.dropdown) return;

    if (!this.suggestions.length) {
      this.dropdown.hide();
      return;
    }

    this.dropdown.render(this.suggestions);

    this.dropdown.show();
  }

  setValue(value: string, label?: string, isSave?: boolean) {
    this.textInput.value = label ?? value;
    this.hiddenInput.value = value;

    if (isSave) {
      this.currentValue = {
        value,
        label: label ?? value,
      };
    }
  }

  resetValue() {
    if (this.currentValue) {
      const { value, label } = this.currentValue;
      this.setValue(value, label);
    }
  }

  focusInput() {
    this.resetValue();

    this.textInput.focus();
  }

  @autobind
  setExternalValue(value?: string) {
    this.hiddenInput.value = value ?? '';
    if (!value) {
      this.textInput.value = '';
      return;
    }
    const option: IDataOption | undefined = this.data.find((o: IDataOption) => o.value === value);
    this.textInput.value = option?.label ?? option?.value ?? '';
  }

  @autobind
  handleFocus() {
    this.resetValue();

    // TODO?
    if (this.textInput.value) {
      this.dropdown.show();
    }
  }

  @autobind
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.dropdown.selectItem(-1);
      return;
    }
    if (event.key === 'ArrowDown') {
      this.dropdown.selectItem(0);
      // return;
    }
  }

  @autobind
  handleInput(/* event: KeyboardEvent */) {
    // const value = (event.target as HTMLInputElement).value;
    const query = this.textInput.value ?? '';

    let value = '';
    if (query) {
      const option: IDataOption | undefined = this.suggestions.find((o: IDataOption) => query === (o.label ?? o.value));
      if (option) value = option.value;
    }

    this.setValue(value, query, true);

    if (!query) {
      this.dropdown.hide();
      return;
    }

    this.getSuggestions(query);
  }

  @autobind
  handleClickDropdownItem(index: number) {
    const { value, label } = this.suggestions[index];

    this.setValue(value, label, true);

    this.isInnerClick = true;

    // ?
    this.dropdown.hide();
  }

  @autobind
  handleFocusDropdownItem(index: number) {
    const { value, label } = this.suggestions[index];

    this.setValue(value, label);
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
      this.dropdown.hide();
    }
    this.isInnerClick = false;
  }

  bind() {
    (this.hiddenInput as unknown as ICustomInput).sfSetValue = this.setExternalValue;

    this.textInput.addEventListener('focus', this.handleFocus);
    this.textInput.addEventListener('keyup', this.handleKeyUp);
    this.textInput.addEventListener('input', this.handleInput);

    this.dropdown.node.addEventListener('click', this.handleInsideClick);
    this.textInput.addEventListener('click', this.handleInsideClick);
    document.addEventListener('click', this.handleOutsideClick);
  }

  die() {
    this.textInput.removeEventListener('focus', this.handleFocus);
    this.textInput.removeEventListener('keyup', this.handleKeyUp);
    this.textInput.removeEventListener('input', this.handleInput);

    this.dropdown.node.removeEventListener('click', this.handleInsideClick);
    this.textInput.removeEventListener('click', this.handleInsideClick);
    document.removeEventListener('click', this.handleOutsideClick);
  }
}

export default Autocomplete;
