import { IAutocompleteDataItem } from './types';

export function getValue(dataItem: IAutocompleteDataItem, valueKey?: string) {
  if (!valueKey) return '';
  return dataItem[valueKey! as keyof IAutocompleteDataItem] || '';
}
