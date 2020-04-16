import sf, {
  CUSTOM_INPUT_ATTR,
  CUSTOM_INPUT_TARGET_ATTR,
  ICustomInput,
  IOptionToGrab,
  ISpiralFramework
} from '@spiral-toolkit/core';
import assert from 'assert';
import { autobind } from './autobind';
import { IAutoCompleteOptions, IOption } from './types';

export class Autocomplete extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'autocomplete';

  public readonly name = Autocomplete.spiralFrameworkName;

  static defaultOptions: IAutoCompleteOptions = {
    id: '',
    name: '',
    options: [
      { value: 1, label: 'Aspen, CO' },
      { value: 2, label: 'Boston, MA' },
      { value: 3, label: 'Chicago, IL' },
      { value: 4, label: 'Dallas, TX' },
      { value: 5, label: 'Houston, TX' },
      { value: 6, label: 'Los Angeles, CA' },
      { value: 7, label: 'Miami, FL' },
      { value: 8, label: 'Nashville, TN' },
      { value: 9, label: 'New York, NY' },
      { value: 10, label: 'San Francisco, CA' },
    ],
    url: '',
  };

  el?: HTMLDivElement;

  public readonly optionsToGrab: {[option: string]: IOptionToGrab} = {
    id: {
      value: Autocomplete.defaultOptions.id,
      domAttr: 'id',
    },
    name: {
      value: Autocomplete.defaultOptions.name,
      domAttr: 'data-name',
    },
  };

  options: IAutoCompleteOptions = { ...Autocomplete.defaultOptions };

  sf!: ISpiralFramework;

  textInput: HTMLInputElement;

  hiddenInput: HTMLInputElement;

  dropdown?: HTMLDivElement;

  isInnerClick?: boolean;

  constructor(ssf: ISpiralFramework, node: Element, options: IAutoCompleteOptions) {
    super();

    assert.ok(node.hasAttribute(CUSTOM_INPUT_ATTR), 'Node has custom form attribute');
    assert.ok(node.querySelector('input[data-sf="autocomplete-input"]'), 'Node has input for inputting text');
    assert.ok(!(node.querySelector('input[data-sf="autocomplete-input"]')?.getAttribute('name')), 'Node has input for inputting text without name');
    assert.ok(node.querySelector(`input[data-sf="autocomplete-value"][${CUSTOM_INPUT_TARGET_ATTR}]`), 'Node has input to serialize values');

    this.textInput = (node.querySelector('input[data-sf="autocomplete-input"]') as HTMLInputElement)!
    this.hiddenInput = (node.querySelector(`input[data-sf="autocomplete-value"][${CUSTOM_INPUT_TARGET_ATTR}]`) as HTMLInputElement)!

    this.init(ssf, node, options);
    this.options = {
      ...Autocomplete.defaultOptions,
      ...this.options,
    };

    this.initDropdown();

    this.bind();
    this.setValue(this.hiddenInput.value);
  }

  initDropdown() {
    if (this.dropdown) return;

    console.log('HERE');

    this.node.classList.add('dropdown'); // just in case
    this.dropdown = document.createElement('div');
    this.dropdown.classList.add('sf-autocomplete__dropdown', 'dropdown-menu');
    this.node.appendChild(this.dropdown);
  }

  showDropdown() {
    this.dropdown?.classList.add('show');
  }

  hideDropdown() {
    this.dropdown?.classList.remove('show');
  }

  static renderDropdownItem({ value, label }: IOption): string {
    // TODO: template
    return `<div class="dropdown-item">${label ?? value}</div>`;
  }

  showSuggestions(query: string) {
    const results = this.options.options.filter(({ value, label }: IOption) => ((label ?? value.toString()).startsWith(query)));

    const items: string[] = results.map((option: IOption) => Autocomplete.renderDropdownItem((option)));

    if (this.dropdown) this.dropdown.innerHTML = items.join('');
    this.showDropdown();
  }

  @autobind
  handleFocus() {
    // temp
    if (this.textInput.value) {
      this.showDropdown();
    }
  }

  @autobind
  handleKeyUp(/* event: KeyboardEvent */) {
    // const value = (event.target as HTMLInputElement).value;
    const value = this.textInput.value ?? '';
    this.hiddenInput.value = value;

    if (!value) {
      this.hideDropdown();
      return;
    }

    this.showSuggestions(value);
  }

  @autobind
  setValue(val: string) {
    this.hiddenInput.value = val ?? '';
    if (val) {
      this.textInput.value = val;
    }
  }

  @autobind
  handleInsideClick() {
    this.isInnerClick = true;
  }

  @autobind
  handleOutsideClick() {
    if (!this.isInnerClick) {
      this.hideDropdown();
    }
    this.isInnerClick = false;
  }

  bind() {
    (this.hiddenInput as unknown as ICustomInput).sfSetValue = this.setValue;

    this.textInput.addEventListener('focus', this.handleFocus);
    this.textInput.addEventListener('keyup', this.handleKeyUp);

    this.dropdown?.addEventListener('click', this.handleInsideClick);
    this.textInput.addEventListener('click', this.handleInsideClick);
    document.addEventListener('click', this.handleOutsideClick);
  }

  die() {
    this.textInput.removeEventListener('keyup', this.handleKeyUp);
  }
}

export default Autocomplete;
