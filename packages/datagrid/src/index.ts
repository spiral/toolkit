import sf from '@spiral-toolkit/core';
import ActionPanel from './actionpanel/ActionPanel';
import DataGrid from './datagrid/Datagrid';
import FilterToggle from './filter-toggle/FilterToggle';
import Paginator from './paginator/Paginator';
import { tools } from './tools';


sf.registerTool('datagrid', tools);

// TODO: Figure out how to make it less insane
// Currently its needed for use cases when this module is required in bundle used, so SFToolkit is not fully initialized in window by time this code is executed
// NOTE: Potentially this will be just deprecated as we plan to use webpack build, not JS bundles based
if ((window as any).SFToolkit && !(window as any).SFToolkit.tools) {
  (window as any).SFToolkit.tools = { _datagrid: tools };
}

sf.registerInstanceType(DataGrid, DataGrid.spiralFrameworkCss);
sf.registerInstanceType(Paginator, Paginator.spiralFrameworkCss);
sf.registerInstanceType(ActionPanel, ActionPanel.spiralFrameworkCss);
sf.registerInstanceType(FilterToggle, FilterToggle.spiralFrameworkCss);

export default DataGrid; // ES6 default export will not expose us as global
