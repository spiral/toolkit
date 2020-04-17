import sf from '@spiral-toolkit/core';
import ActionPanel from './actionpanel/ActionPanel';
import { ACTION_PANEL_CLASS_NAME, PAGINATOR_CLASS_NAME } from './constants';
import DataGrid from './datagrid/Datagrid';
import Paginator from './paginator/Paginator';

export const tools = {
  date: (value: string) => (value ? (new Date()).toDateString() : ''),
  dateFormat: (format: string, sourceFormat?: string) => ((value: string) => {
    if (!value) {
      return '';
    }
    try {
      if (sourceFormat) {
        return sf.helpers.luxon.DateTime.fromFormat(value, sourceFormat).toFormat(format);
      }
      return sf.helpers.luxon.DateTime.fromJSDate(new Date(value)).toFormat(format);
    } catch (e) {
      return '';
    }
  }),
  concat: (fields: string[], separator = ' ') => ((value: string, item: any) => fields.map(f => item[f]).join(separator)),
  serialize: (value: string, item: any) => JSON.stringify(item),
};

sf.registerTool('datagrid', tools);

// TODO: Figure out how to make it less insane
// Currently its needed for use cases when this module is required in bundle used, so SFToolkit is not fully initialized in window by time this code is executed
// NOTE: Potentially this will be just deprecated as we plan to use webpack build, not JS bundles based
if ((window as any).SFToolkit && !(window as any).SFToolkit.tools) {
  (window as any).SFToolkit.tools = {_datagrid: tools};
}

sf.registerInstanceType(DataGrid, 'js-sf-datagrid');
sf.registerInstanceType(Paginator, PAGINATOR_CLASS_NAME);
sf.registerInstanceType(ActionPanel, ACTION_PANEL_CLASS_NAME);

export default DataGrid; // ES6 default export will not expose us as global
