export interface IDataOption {
  value: string;
  label?: string;
}
export interface IAutoCompleteOptions {
  id: string;
  name: string;
  options: Array<string | IDataOption>;
  url: string;
}
