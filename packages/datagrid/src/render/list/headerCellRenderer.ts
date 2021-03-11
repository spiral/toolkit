import {
  HeaderCellRenderAdvanced,
} from '../../types';

export const defaultHeaderCellElCreator = () => undefined;

export const defaultHeaderCellRendererInner = () => '';

export const headerCellRenderer: HeaderCellRenderAdvanced = {
  createEl: defaultHeaderCellElCreator,
  render: defaultHeaderCellRendererInner,
};
