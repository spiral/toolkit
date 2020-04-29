import sf, { IOptionToGrab, ISpiralFramework } from '@spiral-toolkit/core';
import { autobind } from '../autobind';
import { FILTER_TOGGLE_CLASS_NAME } from '../constants';
import type Datagrid from '../datagrid/Datagrid';

const { handlebars, assert } = sf.helpers;

const BUTTON_CLASS = '.sf-filter-toggle-button';
const PANEL_CLASS = '.sf-filter-toggle-panel';

export interface IFilterToggleOptions {
  id: string;
  trackFields?: string[];
}

export class FilterToggle<Item = any> extends sf.core.BaseDOMConstructor {
  static readonly spiralFrameworkName: string = 'datagrid-filter-wrapper';

  static readonly spiralFrameworkCss: string = FILTER_TOGGLE_CLASS_NAME;

  public readonly name = FilterToggle.spiralFrameworkName;

  static defaultOptions: IFilterToggleOptions = {
    id: '',
  };

  el?: HTMLDivElement;

  toggleButton: HTMLElement;

  togglePanel: HTMLElement;

  toggleOptions: {
    emptyClass: string,
    fullClass: string,
    template: Function,
  } = {
    emptyClass: '',
    fullClass: '',
    template: handlebars.compile('<i class="fas fa-filter"></i>'),
  };

  panelOptions: {
    openClass: string,
    closedClass: string,
  } = {
    openClass: '',
    closedClass: 'd-none',
  };


  datagrid?: Datagrid;

  public readonly optionsToGrab: { [option: string]: IOptionToGrab } = {
    id: {
      value: FilterToggle.defaultOptions.id,
      domAttr: 'data-id',
    },
    trackFields: {
      value: FilterToggle.defaultOptions.trackFields,
      domAttr: 'data-track-fields',
      processor(node: Element, val: any) {
        if (val === undefined || val == null) return this.value;
        return val.split(',');
      },
    },
  };

  options: IFilterToggleOptions = { ...FilterToggle.defaultOptions };

  sf!: ISpiralFramework;

  state: {
    hasFilter: boolean,
    isOpen: boolean,
  } = {
    hasFilter: false,
    isOpen: false,
  };

  constructor(ssf: ISpiralFramework, node: Element, options: IFilterToggleOptions) {
    super();
    this.init(ssf, node, options, FilterToggle.defaultOptions);

    this.toggleButton = node.querySelector(BUTTON_CLASS) as HTMLElement;
    assert.ok(this.toggleButton, 'Cant find button that toggles filter panel, ensure you have element with `sf-filter-toggle-button` class');

    this.togglePanel = node.querySelector(PANEL_CLASS) as HTMLElement;
    assert.ok(this.toggleButton, 'Cant find toggle panel, ensure you have element with `sf-filter-toggle-button` class');

    if (this.toggleButton.hasAttribute('data-class-emptyfilter')) {
      this.toggleOptions.emptyClass = this.toggleButton.getAttribute('data-class-emptyfilter') || '';
    }
    if (this.toggleButton.hasAttribute('data-class-hasfilter')) {
      this.toggleOptions.fullClass = this.toggleButton.getAttribute('data-class-hasfilter') || '';
    }
    if (this.toggleButton.hasAttribute('data-template')) {
      this.toggleOptions.template = handlebars.compile(this.toggleButton.getAttribute('data-template') || '');
    }

    if (this.togglePanel.hasAttribute('data-class-open')) {
      this.panelOptions.openClass = this.togglePanel.getAttribute('data-class-open') || '';
    }
    if (this.togglePanel.hasAttribute('data-class-closed')) {
      this.panelOptions.closedClass = this.togglePanel.getAttribute('data-class-closed') || '';
    }

    this.bind();
    this.update();
  }

  public update() {
    if (this.state.isOpen) {
      if (this.panelOptions.closedClass) {
        this.togglePanel.classList.remove(this.panelOptions.closedClass);
      }
      if (this.panelOptions.openClass) {
        this.togglePanel.classList.add(this.panelOptions.openClass);
      }
    } else {
      if (this.panelOptions.openClass) {
        this.togglePanel.classList.remove(this.panelOptions.openClass);
      }
      if (this.panelOptions.closedClass) {
        this.togglePanel.classList.add(this.panelOptions.closedClass);
      }
    }
    if (this.state.hasFilter) {
      if (this.toggleOptions.emptyClass) {
        this.toggleButton.classList.remove(this.toggleOptions.emptyClass);
      }
      if (this.toggleOptions.fullClass) {
        this.toggleButton.classList.add(this.toggleOptions.fullClass);
      }
    } else {
      if (this.toggleOptions.fullClass) {
        this.toggleButton.classList.remove(this.toggleOptions.fullClass);
      }
      if (this.toggleOptions.emptyClass) {
        this.toggleButton.classList.add(this.toggleOptions.emptyClass);
      }
    }
    if (this.toggleOptions.template) {
      this.toggleButton.innerHTML = this.toggleOptions.template({ isEmpty: !this.state.hasFilter });
    }
  }

  public bind() {
    document.addEventListener('click', this.toggleClick);
    this.node.addEventListener('submit', this.onForm);
    this.node.addEventListener('reset', this.onForm);
  }

  public die() {
    document.removeEventListener('click', this.toggleClick);
    this.node.addEventListener('submit', this.onForm);
    this.node.addEventListener('reset', this.onForm);
  }

  @autobind
  public onForm(e: Event) {
    console.log(e, e.type);
    this.closePanel();
  }

  @autobind
  public toggleClick(e: Event) {
    const node = e.target as Element;
    const isInsidePanel: boolean = !!sf.helpers.domTools.closest(node, PANEL_CLASS);
    const isInsideButton: boolean = node === this.toggleButton || !!sf.helpers.domTools.closest(node, BUTTON_CLASS);

    if (this.state.isOpen) {
      if (!isInsidePanel) {
        this.closePanel();
      }
    } else if (isInsideButton) {
      this.openPanel();
    }
  }

  public closePanel() {
    this.state.isOpen = false;
    this.update();
  }

  public openPanel() {
    this.state.isOpen = true;
    this.update();
  }

  setHasFilter(fields: Set<string>) {
    console.log(fields, this.options.trackFields);
    if (!this.options.trackFields) {
      this.state.hasFilter = !!fields.size;
    } else {
      this.state.hasFilter = false;
      this.options.trackFields.forEach((f) => {
        if (fields.has(f)) {
          this.state.hasFilter = true;
        }
      });
    }
    this.update();
  }
}

export default FilterToggle;
