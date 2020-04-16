import type DomMutations from './core/DomMutations';
import type { Events } from './core/Events';
import type { Ajax } from './core/Ajax';
import type InstancesController from './core/InstancesController';
import type { tools } from './sf';
import type BaseDOMConstructor from './core/BaseDOMConstructor';
import type DOMEvents from './helpers/DOMEvents';
import type domTools from './helpers/domTools';

export interface ISFCore {
  Ajax: typeof Ajax,
  BaseDOMConstructor: typeof BaseDOMConstructor,
  DomMutations: typeof DomMutations,
  Events: typeof Events,
  InstancesController: typeof InstancesController,
}

export interface ISFHelpers {
  DOMEvents: typeof DOMEvents,
  domTools: typeof domTools,
}

export interface IInstancesController {
  /**
   * Register new instance type
   * @param {Function} constructorFunction - constructor function of instance
   * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
   * controlled by DomMutation. But you still can use it from JS.
   * @param {boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
   */
  registerInstanceType: (constructorFunction: ISFInstanceConstructor, cssClassName?: string, isSkipInitialization?: boolean) => void;
  addInstance: (instanceType: string, node: Element, options: any) => ISFInstance | undefined;
  removeInstance: (instanceType: string, node: Element) => boolean;
  getInstances: (instanceType: string) => Array<{ node: Element, instance: ISFInstance }>;
  getInstance: (instanceName: string, node: Element | string, isReturnObject?: boolean) => { node: Element, instance: ISFInstance } | undefined;
}

export interface ISpiralFramework extends IInstancesController {
  ajax: Ajax,
  core: ISFCore,
  helpers: ISFHelpers,
  tools: typeof tools;
  registerTool: (toolName: string, tool: any) => void;
  events: Events,
  createModulePrototype: Function,
  instancesController: InstancesController;
  closest: typeof domTools.closest;
  resolveKeyPath: typeof tools.resolveKeyPath;
  domMutation: any;
  options: { instances: { [id: string]: any } }
}

export interface IOptionToGrab {
  value?: any,
  domAttr?: string,
  processor?: Function,
}

export interface ISFInstanceClass<Options = any> {
  name: string,
  sf: ISpiralFramework;
  node: Element;
  options: Options;
  die?: () => void,
}

export interface ISFInstanceConstructor {
  spiralFrameworkName?: string,

  new(sf: ISpiralFramework, node: Element, options?: any): ISFInstanceClass,
}

export type ISFInstance = ISFInstanceClass;
