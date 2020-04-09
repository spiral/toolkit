import sf from '@spiral-toolkit/core';
import { PAGINATOR_CLASS_NAME } from './constants';
import DataGrid from './Datagrid';
import Paginator from './Paginator';

sf.registerInstanceType(DataGrid as any, 'sf-js-datagrid'); // TODO: Type instance
sf.registerInstanceType(Paginator as any, PAGINATOR_CLASS_NAME); // TODO: Type instance

export default DataGrid; // ES6 default export will not expose us as global
