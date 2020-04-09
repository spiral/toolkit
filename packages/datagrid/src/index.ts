import sf from '@spiral-toolkit/core';
import { PAGINATOR_CLASS_NAME } from './constants';
import DataGrid from './Datagrid';
import Paginator from './Paginator';

sf.registerInstanceType(DataGrid, 'sf-js-datagrid');
sf.registerInstanceType(Paginator, PAGINATOR_CLASS_NAME);

export default DataGrid; // ES6 default export will not expose us as global
