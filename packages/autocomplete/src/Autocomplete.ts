import sf, {
  ICustomInput,
  IOptionToGrab,
  ISpiralFramework,
} from '@spiral-toolkit/core';
import assert from 'assert';
import { autobind } from './autobind';
import { IAutoCompleteOptions } from './types';

const { CUSTOM_INPUT_ATTR, CUSTOM_INPUT_TARGET_ATTR } = sf.constants;

export class Autocomplete extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'autocomplete';

  public readonly name = Autocomplete.spiralFrameworkName;

  static defaultOptions: IAutoCompleteOptions = {
    id: '',
    name: '',
    options: [
      { value: '1', label: 'New York' },
      { value: '2', label: 'Minsk' },
    ],
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

  options: IAutoCompleteOptions = { ...Autocomplete.defaultOptions };

  sf!: ISpiralFramework;

  textInput: HTMLInputElement;

  hiddenInput: HTMLInputElement;

  dropdown: HTMLDivElement;

  constructor(ssf: ISpiralFramework, node: Element, options: IAutoCompleteOptions) {
    super();

    assert.ok(node.hasAttribute(CUSTOM_INPUT_ATTR), 'Node has custom form attribute');
    assert.ok(node.querySelector('input[data-sf="autocomplete-input"]'), 'Node has input for inputting text');
    assert.ok(!(node.querySelector('input[data-sf="autocomplete-input"]')?.getAttribute('name')), 'Node has input for inputting text without name');
    assert.ok(node.querySelector(`input[data-sf="autocomplete-value"][${CUSTOM_INPUT_TARGET_ATTR}]`), 'Node has input to serialize values');

    this.textInput = (node.querySelector('input[data-sf="autocomplete-input"]') as HTMLInputElement)!;
    this.hiddenInput = (node.querySelector(`input[data-sf="autocomplete-value"][${CUSTOM_INPUT_TARGET_ATTR}]`) as HTMLInputElement)!;

    this.dropdown = document.createElement('div');
    this.dropdown.classList.add('dropdown-menu');
    node.appendChild(this.dropdown);

    this.init(ssf, node, options);
    this.options = {
      ...Autocomplete.defaultOptions,
      ...this.options,
    };

    this.bind();
  }

  @autobind
  onKeyUp() {
    // const value = (event.target as HTMLInputElement).value;
    this.hiddenInput.value = this.textInput.value ?? '';
    console.log('Update hidden input value to', this.hiddenInput.value);

    this.dropdown.innerHTML = `<div class="dropdown-item">${this.textInput.value}</div>`;
    this.dropdown.classList.add('show');
  }

  @autobind
  setValue(val: string) {
    console.log('Set input value to', val);
    this.hiddenInput.value = val ?? '';
    if (val) {
      this.textInput.value = val;
    }
  }

  bind() {
    (this.hiddenInput as unknown as ICustomInput).sfSetValue = this.setValue;
    this.textInput.addEventListener('keyup', this.onKeyUp);
    this.setValue(this.hiddenInput.value);
  }

  die() {
    this.textInput.removeEventListener('keyup', this.onKeyUp);
  }
}

export default Autocomplete;
