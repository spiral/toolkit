import sf from '@spiral-toolkit/core';
import DataGrid from './Datagrid';
import Paginator from './Paginator';
import { simpleCellFormatter } from './render/premade/simpleCellFormatter';

export const renders = {
  simpleCellFormatter,
};

(window as any).SFDatagridTools = renders; // TODO: How to export that properly?

sf.registerInstanceType(DataGrid as any, 'sf-js-datagrid'); // TODO: needs better typing for instance class
sf.registerInstanceType(Paginator as any, 'sf-js-datagrid-paginator'); // TODO: needs better typing for instance class

export default DataGrid; // ES6 default export will not expose us as global
