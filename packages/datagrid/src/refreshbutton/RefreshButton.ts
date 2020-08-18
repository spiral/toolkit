import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';

export interface IRefreshButtonOptions {
  gridId: string;
}

export class RefreshButton extends sf.core.BaseDOMConstructor {
  static spiralFrameworkName: string = 'grid-refresh';

  static spiralFrameworkCssClass: string = 'js-sf-grid-refresh';

  static registerInSf = () => {
    sf.registerInstanceType(RefreshButton, RefreshButton.spiralFrameworkCssClass);
  };

  static defaultOptions: IRefreshButtonOptions = {
    gridId: '',
  };

  optionsToGrab: { [option: string]: IOptionToGrab } = {
    /**
     * Lock type when form sending <b>Default: "default"</b> @see sf.lock
     */
    gridId: {
      value: RefreshButton.defaultOptions.gridId,
      domAttr: 'data-grid-id',
    },
  };

  options: IRefreshButtonOptions = { ...RefreshButton.defaultOptions };

  node!: Element;

  /**
   *
   * @param ssf
   * @param node HTMLElement
   * @param options
   */
  constructor(ssf: ISpiralFramework, node: Element, options: Partial<IRefreshButtonOptions>) {
    super();
    this.init(ssf, node, options, RefreshButton.defaultOptions);
    this.onClick = this.onClick.bind(this);
    (this.node as HTMLElement).addEventListener('click', this.onClick);
  }

  onClick(e: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    const event = new CustomEvent('datagrid:refresh', { detail: { gridId: this.options.gridId } });
    document.dispatchEvent(event);
  }

  die() {
    super.die();
    (this.node as HTMLElement).removeEventListener('click', this.onClick);
  }
}
