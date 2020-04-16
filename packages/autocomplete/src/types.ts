export interface IOption {
  value: string | number;
  label?: string;
}
export interface IAutoCompleteOptions {
  id: string;
  name: string;
  options: IOption[];
  url: string;
}
