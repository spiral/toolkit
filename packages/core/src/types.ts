import type {Events} from 'core/Events';
import type {Ajax} from 'core/Ajax';
import type BaseDOMConstructor from './core/BaseDOMConstructor';
import type DOMEvents from './helpers/DOMEvents';
import type domTools from './helpers/domTools';
import type { tools } from 'sf';

export interface ISFCore {
    Ajax: typeof Ajax,
    BaseDOMConstructor: typeof BaseDOMConstructor,
    DomMutations: any,
    Events: typeof Events,
    InstancesController: any,
}

export interface ISFHelpers {
    DOMEvents: typeof DOMEvents,
    domTools: typeof domTools,
}

export type ISFInstance = any & {name: string};

export interface IInstancesController {
    /**
     * Register new instance type
     * @param {Function} constructorFunction - constructor function of instance
     * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
     * controlled by DomMutation. But you still can use it from JS.
     * @param {boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
     */
    registerInstanceType: (constructorFunction: Function, cssClassName?: string, isSkipInitialization?: boolean) => void;
    addInstance: (instanceType: string, node: Element, options: any) => ISFInstance;
    removeInstance: (instanceType: string, node: Element) => ISFInstance;
    getInstances: (instanceType: string) => Array<{ node: Element, instance: ISFInstance }>;
    getInstance: (instanceName: string) => Array<{ node: Element, instance: ISFInstance }>;

    events: Events,
}

export interface ISpiralFramework {
    ajax: Ajax,
    core: ISFCore,
    helpers: ISFHelpers,
    tools: typeof tools;
    events: Events,
    createModulePrototype: Function,
    instancesController: IInstancesController;
    closest: typeof domTools.closest;
    resolveKeyPath: typeof tools.resolveKeyPath;
    domMutation: any;
    options: { instances: { [id: string]: ISFInstance } }
    /**
     * Register new instance type
     * @param {Function} constructorFunction - constructor function of instance
     * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
     * controlled by DomMutation. But you still can use it from JS.
     * @param {boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
     */
    registerInstanceType: (constructorFunction: Function, cssClassName?: string, isSkipInitialization?: boolean) => void;
    addInstance: (instanceType: string, node: Element, options: any) => ISFInstance;
    removeInstance: (instanceType: string, node: Element) => ISFInstance;
    getInstances: (instanceType: string) => Array<{ node: Element, instance: ISFInstance }>;
    getInstance: (instanceName: string) => ISFInstance;
}

export interface IOptionToGrab {
    value?: any,
    domAttr?: string,
    processor?: Function,
}
