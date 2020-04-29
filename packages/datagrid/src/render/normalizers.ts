import { isRenderFuncGenerator, tools } from '../tools';
import {
  CellRenderAdvanced, CellRenderFunction, CellRenderWithTool, HeaderCellRenderAdvanced, HeaderCellRenderFunction,
} from '../types';
import { defaultCellElCreator, defaultCellRenderer } from './defaultCellRenderer';
import { defaultHeaderCellElCreator, defaultHeaderCellRenderer } from './defaultHeaderCellRenderer';

export function isCellAdvanced(render: CellRenderFunction | CellRenderAdvanced | CellRenderWithTool): render is CellRenderAdvanced {
  return (typeof render !== 'function') && (render as CellRenderAdvanced).render !== undefined;
}

export function isCellByTool(render: CellRenderFunction | CellRenderAdvanced | CellRenderWithTool): render is CellRenderWithTool {
  return (typeof render !== 'function') && (render as CellRenderWithTool).name !== undefined;
}

export function isHeaderCellAdvanced(render: HeaderCellRenderFunction | HeaderCellRenderAdvanced): render is HeaderCellRenderAdvanced {
  return (typeof render !== 'function') && (render as HeaderCellRenderAdvanced).render !== undefined;
}

export const normalizedCellRenderer = (render: CellRenderFunction | CellRenderAdvanced | CellRenderWithTool | undefined) => {
  if (!render) {
    return defaultCellRenderer;
  }
  if (!isCellAdvanced(render)) {
    if (isCellByTool(render)) {
      const tool = tools[render.name];
      if (tool && isRenderFuncGenerator(tool)) {
        return {
          createEl: defaultCellElCreator,
          render: tool(...render.arguments),
        };
      }
      throw new Error(`'${render.name}' is unknown renderer`);
    }
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
