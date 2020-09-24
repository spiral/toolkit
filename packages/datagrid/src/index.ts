import sf from '@spiral-toolkit/core';
import { ActionButton } from './actionbutton/ActionButton';
import ActionPanel from './actionpanel/ActionPanel';
import DataGrid from './datagrid/Datagrid';
import { RefreshButton } from './refreshbutton/RefreshButton';
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

DataGrid.registerInSf();
Paginator.registerInSf();
ActionButton.registerInSf();
ActionPanel.registerInSf();
FilterToggle.registerInSf();
RefreshButton.registerInSf();

export default {
  DataGrid,
  ActionPanel,
  Paginator,
  ActionButton,
  FilterToggle,
};

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`
