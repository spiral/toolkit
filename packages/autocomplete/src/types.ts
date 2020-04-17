export interface IDataOption {
  value: string;
  label?: string;
}

export interface IAutocompleteOptions {
  id: string;
  name: string;
  options: Array<string | IDataOption>;
  url: string;
}

export interface IAutocompleteDropdownOptions {
  onClickItem: (index: number) => void;
  onFocusItem: (index: number) => void;
  onBlur: () => void;
}
