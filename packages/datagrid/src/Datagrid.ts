import { ISpiralFramework } from "@spiral-toolkit/core";
import sf from '@spiral-toolkit/core';
import {GridRenderer} from './render/GridRenderer';
import { RequestMethod } from './constants';
import { defaultRenderer } from './render/defaultRenderer';
import { IDataGridOptions, IGridRenderer } from "./types";
import * as assert from 'assert';

// import './styles.css';

export class Datagrid extends sf.core.BaseDOMConstructor {
  static spiralFrameworkName: string = 'datagrid';
  static optionsToGrab: IDataGridOptions = {
    captureForms: [],
    columns: [],
    headers: {},
    method: RequestMethod.GET,
    sortable: [],
    url: '',
    ui: {
      cellAttributes: {},
      rowAttributes: {},
      rowClassName: '',
      cellClassName: '',
      tableClassName: '',
    },
    renderers: defaultRenderer,
  };

  options: IDataGridOptions = Datagrid.optionsToGrab;
  grids: GridRenderer[] = [];

  constructor(sf: ISpiralFramework, node: Element, options: any) {
    super();
    this.init(sf, node, options);
    this.createRenderers();
  }

  createRenderers() {
    assert.deepEqual(this.grids, [], 'Grids are already initialized');
    const renderList: IGridRenderer[] = Array.isArray(this.options.renderers)?this.options.renderers:[this.options.renderers];
    renderList.forEach((renderOption: IGridRenderer)=>{
      new GridRenderer(renderOption, this);
    });
  }

  render(data: any[][]) {
    const renderList: IGridRenderer[] = Array.isArray(this.options.renderers)?this.options.renderers:[this.options.renderers];
    renderList.forEach((renderOption: IGridRenderer)=>{
      console.log(renderOption);
    });
  }
}

export default Datagrid;
