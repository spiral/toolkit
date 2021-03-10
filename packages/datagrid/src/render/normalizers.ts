import { isRenderFuncGenerator, tools } from '../tools';
import {
  CellRenderAdvanced, CellRenderFunction, CellRenderWithTool, HeaderCellRenderAdvanced, HeaderCellRenderFunction,
} from '../types';
import { defaultCellElCreator as tableCellElCreator, cellRenderer as tableCellRenderer } from './table/cellRenderer';
import { defaultHeaderCellElCreator as tableHeaderCellElCreator, headerCellRenderer as tableHeaderCellRenderer } from './table/headerCellRenderer';

import { defaultCellElCreator as listCellElCreator, cellRenderer as listCellRenderer } from './list/cellRenderer';
import { defaultHeaderCellElCreator as listHeaderCellElCreator, headerCellRenderer as listHeaderCellRenderer } from './list/headerCellRenderer';

export function isCellAdvanced(render: CellRenderFunction | CellRenderAdvanced | CellRenderWithTool): render is CellRenderAdvanced {
  return (typeof render !== 'function') && (render as CellRenderAdvanced).render !== undefined;
}

export function isCellByTool(render: CellRenderFunction | CellRenderAdvanced | CellRenderWithTool): render is CellRenderWithTool {
  return (typeof render !== 'function') && (render as CellRenderWithTool).name !== undefined;
}

export function isHeaderCellAdvanced(render: HeaderCellRenderFunction | HeaderCellRenderAdvanced): render is HeaderCellRenderAdvanced {
  return (typeof render !== 'function') && (render as HeaderCellRenderAdvanced).render !== undefined;
}

export const normalizedCellRenderer = (render: CellRenderFunction | CellRenderAdvanced | CellRenderWithTool | undefined, useListDefaults: boolean) => {
  if (!render) {
    return useListDefaults ? listCellRenderer : tableCellRenderer;
  }
  if (!isCellAdvanced(render)) {
    if (isCellByTool(render)) {
      const tool = tools[render.name];
      if (tool && isRenderFuncGenerator(tool)) {
        return {
          createEl: useListDefaults ? listCellElCreator : tableCellElCreator,
          render: tool(...render.arguments),
        };
      }
      throw new Error(`'${render.name}' is unknown renderer`);
    }
    return {
      createEl: useListDefaults ? listCellElCreator : tableCellElCreator,
      render,
    };
  }
  return render;
};

export const normalizedHeaderCellRenderer = (render: HeaderCellRenderFunction | HeaderCellRenderAdvanced | undefined, useListDefaults: boolean) => {
  if (!render) {
    return useListDefaults ? listHeaderCellRenderer : tableHeaderCellRenderer;
  }
  if (!isHeaderCellAdvanced(render)) {
    return {
      createEl: useListDefaults ? listHeaderCellElCreator : tableHeaderCellElCreator,
      render,
    };
  }
  return render;
};
