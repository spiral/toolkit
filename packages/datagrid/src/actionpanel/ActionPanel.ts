import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { SelectionType } from '../constants';
import type { IActionDescriptor, IActionPanelOptions, IActionPanelState } from '../types';

export type FlexibleRenderDefinition = string | Element | ((state: IActionPanelState) => string | Element);

export class ActionPanel<Item = any> extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'datagrid-actions';

  public readonly name = ActionPanel.spiralFrameworkName;

  static defaultOptions: IActionPanelOptions = {
    id: '',
    lockType: 'none',
    actionClassName: 'btn',
    selectionType: SelectionType.SINGLE,
    className: 'row no-gutters align-items-center',
    actions: {},
  };

  el?: HTMLDivElement;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    id: {
      value: ActionPanel.defaultOptions.id,
      domAttr: 'id',
    },
    type: {
      value: ActionPanel.defaultOptions.selectionType,
      domAttr: 'data-selection-type',
    },
    className: {
      value: ActionPanel.defaultOptions.className,
      domAttr: 'data-class',
    },
  };

  options: IActionPanelOptions = { ...ActionPanel.defaultOptions };

  sf!: ISpiralFramework;

  state: IActionPanelState<Item> = {
    hasSelection: false,
    selectedCount: 0,
    selectedItems: [],
    selectedKeys: new Set<string>(),
    selectionType: this.options.selectionType,
  };

  constructor(ssf: ISpiralFramework, node: Element, options: IActionPanelOptions) {
    super();
    this.init(ssf, node, options, ActionPanel.defaultOptions);
    this.render();
  }

  public reconfigure(options: Partial<IActionPanelOptions>) {
    this.options = {
      ...this.options,
      ...options,
    };
    this.state = {
      hasSelection: false,
      selectedCount: 0,
      selectedItems: [],
      selectedKeys: new Set<string>(),
      selectionType: this.options.selectionType,
    };
    this.render();
  }

  public unlock() {
    if (!this.options.lockType || this.options.lockType === 'none') {
      return;
    }
    if (!this.sf.removeInstance('lock', this.node)) {
      console.warn('You try to remove \'lock\' instance, but it is not available or not started');
    }
  }

  public lock() {
    if (!this.options.lockType || this.options.lockType === 'none') {
      return;
    }
    const lock = this.sf.addInstance('lock', this.node, { type: this.options.lockType });
    if (!lock) {
      console.warn('You try to add \'lock\' instance, but it is not available or already started');
    }
  }

  public setSelection(selectedKeys: Set<string>, selectedItems: Array<Item>) {
    this.state = {
      ...this.state,
      selectedKeys,
      selectedItems,
      selectedCount: selectedKeys.size,
      hasSelection: !!selectedKeys.size,
    };
    this.render();
  }

  renderAs(el: Element, definition: FlexibleRenderDefinition) {
    if (typeof definition === 'string') {
      // eslint-disable-next-line no-param-reassign
      el.innerHTML = definition;
    } else if (typeof definition === 'function') {
      const rendered = definition(this.state);
      if (typeof rendered === 'string') {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = rendered;
      } else {
        el.appendChild(rendered);
      }
    } else {
      el.appendChild(definition);
    }
  }

  renderAction(actionId: string, action: IActionDescriptor, options: IActionPanelOptions) {
    const el = document.createElement('div');
    if (options.actionClassName) {
      if (typeof options.actionClassName === 'string') {
        el.className = options.actionClassName;
      } else if (typeof options.actionClassName === 'function') {
        el.className = options.actionClassName(actionId, this.state);
      } else {
        el.className = options.actionClassName[actionId] || '';
      }
    }
    if (action.className) {
      if (typeof action.className === 'string') {
        el.classList.add(...action.className.split(' '));
      } else {
        el.classList.add(...action.className(this.state).split(' '));
      }
    }
    el.addEventListener('click', (e) => action.onClick(this.state, this, e));
    this.renderAs(el, action.renderAs);
    return el;
  }

  render() {
    if (!this.el) {
      this.el = document.createElement('div');
      this.node.appendChild(this.el);
    } else {
      this.el.innerHTML = ''; // TODO: dont rerender
    }
    const el = this.el!;
    if (this.options.className) {
      el.className = '';
      if (typeof this.options.className === 'string') {
        el.classList.add(...this.options.className.split(' '));
      } else {
        el.classList.add(...this.options.className(this.state).split(' '));
      }
    }
    if (this.options.noSelection && !this.state.hasSelection) {
      if (typeof this.options.noSelection === 'string') {
        el.innerHTML = this.options.noSelection;
      } else {
        el.appendChild(this.options.noSelection);
      }
      return;
    }
    if (this.options.selectionLabel) {
      this.renderAs(el, this.options.selectionLabel);
    }
    Object.keys(this.options.actions).forEach((actionId: string) => {
      el.appendChild(this.renderAction(actionId, this.options.actions[actionId], this.options));
    });
  }
}

export default ActionPanel;
