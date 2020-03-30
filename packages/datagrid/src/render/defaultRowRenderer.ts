import { IRowRenderer } from "../types";

export const defaultRowRenderer: IRowRenderer = (row, node) => {
  const el = document.createElement('td');
  el.innerText = (row.rowData || '').toString();
  node.appendChild(el);
  return el;
};