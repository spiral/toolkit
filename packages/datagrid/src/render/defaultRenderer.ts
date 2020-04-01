import { IGridRenderOptions } from "../types";

export const defaultRenderer: IGridRenderOptions = {
  columns: [],
  sortable: [],
  /**
   * Basic class/attribute properties
   */
  ui: {
    wrapperClassName: 'table-responsive',
    tableClassName: 'table table-striped',
    cellClassName: {},
    rowClassName: '',
    cellAttributes: cellMeta => {
      return {};
    },
    rowAttributes: rowlMeta => {
      return {};
    }
  },
}
