import sf from '@spiral-toolkit/core';
import DataGrid from './Datagrid';
import {simpleCellFormatter} from './render/premade/simpleCellFormatter';

export const renders = {
  simpleCellFormatter,
};

(window as any).SFDatagridTools = renders; // TODO: How to export that properly?

sf.registerInstanceType(DataGrid, 'sf-js-datagrid');


export default DataGrid; // ES6 default export will not expose us as global