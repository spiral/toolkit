import sf, {
  CUSTOM_INPUT_ATTR,
  CUSTOM_INPUT_TARGET_ATTR,
  ICustomInput,
  IOptionToGrab,
  ISpiralFramework,
} from '@spiral-toolkit/core';
import assert from 'assert';
import { autobind } from './autobind';
import { IAutoCompleteOptions, IDataOption } from './types';

export class Autocomplete extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'autocomplete';

  public readonly name = Autocomplete.spiralFrameworkName;

  static defaultOptions: IAutoCompleteOptions = {
    id: '',
    name: '',
    options: [],
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

  /* Elements */
  textInput: HTMLInputElement;

  hiddenInput: HTMLInputElement;

  dropdown?: HTMLDivElement;

  dropdownItems?: HTMLDivElement[];

  /* Data */
  data: IDataOption[];

  suggestions: IDataOption[];

  selectedIndex: number;

  currentValue?: IDataOption;

  /* Misc */
  isInnerClick?: boolean;

  constructor(ssf: ISpiralFramework, node: Element, options: IAutoCompleteOptions) {
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
    };

    this.data = Autocomplete.parseData(this.options.options);
    this.suggestions = [];
    this.selectedIndex = -1;

    this.initDropdown();

    this.bind();
    this.setExternalValue(this.hiddenInput.value);

    console.log('Autocomplete is ready');
  }

  static parseData(rawData: Array<string | IDataOption>) {
    if (!rawData.length) {
      return [
        { value: '1', label: 'Aspen, CO' },
        { value: '2', label: 'Boston, MA' },
        { value: '3', label: 'Chicago, IL' },
        { value: '4', label: 'Dallas, TX' },
        { value: '5', label: 'Houston, TX' },
        { value: '6', label: 'Los Angeles, CA' },
        { value: '7', label: 'Miami, FL' },
        { value: '8', label: 'Nashville, TN' },
        { value: '9', label: 'New York, NY' },
        { value: '10', label: 'San Francisco, CA' },
      ];
    }

    return rawData.map((item: string | IDataOption) => {
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
    if (this.dropdown) return;

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

  clearDropdown() {
    if (!this.dropdown) return;

    const clone: Node = this.dropdown.cloneNode(false);
    this.node.replaceChild(clone, this.dropdown);
    this.dropdown = clone as HTMLDivElement;
  }

  renderDropdownItem({ value, label }: IDataOption): HTMLDivElement {
    // TODO: template
    // return `<div class="dropdown-item">${label ?? value}</div>`;
    const item: HTMLDivElement = document.createElement('div');
    item.classList.add('dropdown-item');
    item.tabIndex = 0;
    item.dataset.value = value;
    item.innerHTML = label ?? value;
    item.addEventListener('click', this.handleClickItem);
    item.addEventListener('focus', this.handleFocusItem);
    item.addEventListener('keyup', this.handleKeyUpItem);
    return item;
  }

  getSuggestions(query: string) {
    const lcQuery = query.toLocaleLowerCase();
    this.suggestions = this.data.filter(({ value, label }: IDataOption) => (
      (label ?? value).toLocaleLowerCase().startsWith(lcQuery)
    ));
  }

  showSuggestions() {
    if (!this.dropdown) return;

    if (!this.suggestions.length) {
      this.hideDropdown();
      return;
    }

    this.clearDropdown();

    this.dropdownItems = this.suggestions.map((option: IDataOption) => this.renderDropdownItem((option)));

    // this.dropdown.innerHTML = items.join('');
    this.dropdownItems.forEach((item: HTMLDivElement) => this.dropdown!.appendChild(item));

    this.showDropdown();
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

  moveToInput() {
    this.selectedIndex = -1;

    if (this.currentValue) {
      const { value, label } = this.currentValue;
      this.setValue(value, label);
    }

    this.textInput.focus();
  }

  moveToSuggestion(index: number) {
    const len = this.suggestions.length;
    if (!len) return;

    this.selectedIndex = (index > len - 1 || index < 0) ? len - 1 : index;

    this.selectSuggestion();
  }

  selectSuggestion(isReset?: boolean) {
    const { value, label } = this.suggestions[this.selectedIndex];

    this.dropdownItems!.forEach((item: HTMLDivElement, i: number) => item.classList.toggle('active', i === this.selectedIndex));
    this.dropdownItems![this.selectedIndex].focus();

    this.setValue(value, label, isReset);
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
  handleClickItem(event: MouseEvent) {
    const item = event.target as HTMLDivElement;
    const { value } = item.dataset;

    this.selectedIndex = this.suggestions.findIndex((o: IDataOption) => o.value === value);

    this.selectSuggestion(true);
  }

  @autobind
  handleFocusItem(event: FocusEvent) {
    const item = event.target as HTMLDivElement;
    const { value } = item.dataset;

    this.selectedIndex = this.suggestions.findIndex((o: IDataOption) => o.value === value);

    this.selectSuggestion();
  }

  @autobind
  handleKeyUpItem(event: KeyboardEvent) {
    const len = this.suggestions.length;
    if (!len) return;

    if (event.key === 'ArrowUp') {
      if (this.selectedIndex === 0) {
        this.moveToInput();
        return;
      }
      this.moveToSuggestion(this.selectedIndex - 1);
      return;
    }
    if (event.key === 'ArrowDown') {
      if (this.selectedIndex === len - 1) {
        this.moveToInput();
        return;
      }
      this.moveToSuggestion(this.selectedIndex + 1);
    }
  }

  @autobind
  handleFocus() {
    this.selectedIndex = -1;

    if (this.currentValue) {
      const { value, label } = this.currentValue;
      this.setValue(value, label);
    }

    // TODO?
    if (this.textInput.value) {
      this.showDropdown();
    }
  }

  @autobind
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.moveToSuggestion(-1);
      return;
    }
    if (event.key === 'ArrowDown') {
      this.moveToSuggestion(0);
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
      this.hideDropdown();
      return;
    }

    this.getSuggestions(query);

    this.showSuggestions();
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
    (this.hiddenInput as unknown as ICustomInput).sfSetValue = this.setExternalValue;

    this.textInput.addEventListener('focus', this.handleFocus);
    this.textInput.addEventListener('keyup', this.handleKeyUp);
    this.textInput.addEventListener('input', this.handleInput);

    this.dropdown?.addEventListener('click', this.handleInsideClick);
    this.textInput.addEventListener('click', this.handleInsideClick);
    document.addEventListener('click', this.handleOutsideClick);
  }

  die() {
    this.textInput.removeEventListener('keyup', this.handleKeyUp);
  }
}

export default Autocomplete;
