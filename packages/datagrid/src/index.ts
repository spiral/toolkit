import sf from '@spiral-toolkit/core';
import {PAGINATOR_CLASS_NAME} from './constants';
import DataGrid from './Datagrid';
import Paginator from './Paginator';
import {simpleCellFormatter} from './render/premade/simpleCellFormatter';

export const renders = {
  simpleCellFormatter,
};

(window as any).SFDatagridTools = renders; // TODO: How to export that properly?

sf.registerInstanceType(DataGrid, 'sf-js-datagrid');
sf.registerInstanceType(Paginator, PAGINATOR_CLASS_NAME);


export default DataGrid; // ES6 default export will not expose us as global