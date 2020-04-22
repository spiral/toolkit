import { IAutocompleteDataItem } from './types';

export function getValue(dataItem: IAutocompleteDataItem, valueKey?: string) {
  if (!valueKey) return '';
  const val = dataItem[valueKey! as keyof IAutocompleteDataItem];
  return val ? `${val}` : '';
}
