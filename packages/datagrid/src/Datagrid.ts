import { ISpiralFramework } from "@spiral-toolkit/core";
import sf from '@spiral-toolkit/core';

// import './styles.css';

export class Datagrid extends sf.core.BaseDOMConstructor {
  static spiralFrameworkName: string = 'datagrid';

  constructor(sf: ISpiralFramework, node: Element, options: any) {
    super();
    this.init(sf, node, options);
  }
}

export default Datagrid;
