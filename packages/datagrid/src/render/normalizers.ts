import {
  CellRenderAdvanced, CellRenderFunction, HeaderCellRenderAdvanced, HeaderCellRenderFunction,
} from '../types';
import { defaultCellElCreator, defaultCellRenderer } from './defaultCellRenderer';
import { defaultHeaderCellElCreator, defaultHeaderCellRenderer } from './defaultHeaderCellRenderer';

export function isCellAdvanced(render: CellRenderFunction | CellRenderAdvanced): render is CellRenderAdvanced {
  return (render as CellRenderAdvanced).createEl !== undefined;
}

export function isHeaderCellAdvanced(render: HeaderCellRenderFunction | HeaderCellRenderAdvanced): render is HeaderCellRenderAdvanced {
  return (render as HeaderCellRenderAdvanced).createEl !== undefined;
}

export const normalizedCellRenderer = (render: CellRenderFunction | CellRenderAdvanced | undefined) => {
  if (!render) {
    return defaultCellRenderer;
  }
  if (!isCellAdvanced(render)) {
    return {
      createEl: defaultCellElCreator,
      render,
    };
  }
  return render;
};

export const normalizedHeaderCellRenderer = (render: HeaderCellRenderFunction | HeaderCellRenderAdvanced | undefined) => {
  if (!render) {
    return defaultHeaderCellRenderer;
  }
  if (!isHeaderCellAdvanced(render)) {
    return {
      createEl: defaultHeaderCellElCreator,
      render,
    };
  }
  return render;
};
