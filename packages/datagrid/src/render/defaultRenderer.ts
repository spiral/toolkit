import { defaultRowRenderer } from "./defaultRowRenderer";
import { ICellRenderer, IDataGridUIOptions, IGridRenderOptions, IHeaderRenderer, IRowRenderer } from "../types";

export const defaultRenderer: IGridRenderOptions = {
  /**
   * Basic class/attribute properties
   */
  ui: {
    tableClassName: 'table table-striped',
    cellClassName: '',
    rowClassName: '',
    cellAttributes: cellMeta => {
      return {};
    },
    rowAttributes: rowlMeta => {
      return {};
    }
  },
  row: defaultRowRenderer,
}
