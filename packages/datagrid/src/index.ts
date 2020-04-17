import sf from '@spiral-toolkit/core';
import ActionPanel from './actionpanel/ActionPanel';
import { ACTION_PANEL_CLASS_NAME, PAGINATOR_CLASS_NAME } from './constants';
import DataGrid from './datagrid/Datagrid';
import Paginator from './paginator/Paginator';

export const tools = {
  date: (value: string) => (value ? (new Date()).toDateString() : ''),
  serialize: (value: string, item: any) => JSON.stringify(item),
};

sf.registerTool('datagrid', tools);

sf.registerInstanceType(DataGrid, 'js-sf-datagrid');
sf.registerInstanceType(Paginator, PAGINATOR_CLASS_NAME);
sf.registerInstanceType(ActionPanel, ACTION_PANEL_CLASS_NAME);

export default DataGrid; // ES6 default export will not expose us as global
