import { RequestMethod, SortDirection } from "./constants";

export interface IRowMeta<T = any> {
  id: string;
  selected: boolean;
  rowData: T;
}

export interface ICellMeta<T = any> {
  columnName: string;
  cellData: T;
}

export interface IDataGridUIOptions<RowData = any, CellData = any> {
  tableClassName: string;
  rowClassName: ((rowMeta: IRowMeta<RowData>) => string) | string,
  rowAttributes: ((rowMeta: IRowMeta<RowData>) => { [attr: string]: string }) | { [attr: string]: string },
  cellClassName: ((cellMeta: ICellMeta<CellData>) => string) | string,
  cellAttributes: ((cellMeta: ICellMeta<CellData>) => { [attr: string]: string }) | { [attr: string]: string },
}

export type IColumnDescriptor = string | {
  /**
   * Field id to use
   */
  id: string;
  /**
   * Human readable title
   * for accessibility reasons should not have any markup
   */
  title?: string;
  /**
   * If present, makes column sortable
   * Defines default sort direction
   * Default sort direction
   */
  sortDir?: SortDirection;
}

/**
 * Specifies field id or field id + default sort direction
 */
export type ISortDescriptor = string | {
  field: string;
  direction: SortDirection;
}

export type IHeaderRenderer = string | ((cell: ICellMeta, node: Element)=>Element);
export type ICellRenderer = string | ((cell: ICellMeta, node: Element)=>Element);
export type IRowRenderer = (row: IRowMeta, node: Element) => Element;

export interface IGridRenderOptions<RowData = any, CellData = any> {
  /**
   * Basic class/attribute properties
   */
  ui: IDataGridUIOptions<RowData, CellData>;
  headerRow?: IHeaderRenderer[];
  row?: IRowRenderer;
  cells?: ICellRenderer[];
}

export interface IDataGridOptions<RowData = any, CellData = any> {
  id: string;
  /**
   * Id of forms or paginators to attach to and use their data in requests
   */
  captureForms: string[];
  /**
   * Data url to grab data from
   */
  url: string;
  /**
   * Method used to grab data
   */
  method: RequestMethod;
  /**
   * Headers to attach to request
   */
  headers: { [id: string]: string }

  /**
   * Basic class/attribute properties
   */
  ui: IDataGridUIOptions<RowData, CellData>;

  columns: IColumnDescriptor[];

  sortable: ISortDescriptor[];

  renderers: IGridRenderOptions | IGridRenderOptions[];
}