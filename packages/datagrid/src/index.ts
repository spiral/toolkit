import sf from '@spiral-toolkit/core';
import DataGrid from './Datagrid';

sf.registerInstanceType(DataGrid, 'sf-js-datagrid');

export default DataGrid; // ES6 default export will not expose us as global