import { CellRenderAdvanced, CellRenderFunction, HeaderCellRenderAdvanced, HeaderCellRenderFunction } from '../types';
export declare function isCellAdvanced(render: CellRenderFunction | CellRenderAdvanced): render is CellRenderAdvanced;
export declare function isHeaderCellAdvanced(render: HeaderCellRenderFunction | HeaderCellRenderAdvanced): render is HeaderCellRenderAdvanced;
export declare const normalizedCellRenderer: (render: CellRenderFunction | CellRenderAdvanced | undefined) => CellRenderAdvanced;
export declare const normalizedHeaderCellRenderer: (render: HeaderCellRenderFunction | HeaderCellRenderAdvanced | undefined) => HeaderCellRenderAdvanced;
