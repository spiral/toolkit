import type { Events } from "core/Events";
import type { Ajax } from "core/Ajax";

export interface IBaseDOMConstructor {
    optionsToGrab: { [key: string]: any };
    sf: ISpiralFramework;
    node: Element;
    options: Object;

    init(sf: ISpiralFramework, node: Element, options: any): void;
}

export interface ISFCore {
    Ajax: typeof Ajax,
    BaseDOMConstructor: any,
    DomMutations: any,
    Events: typeof Events,
    InstancesController: any,
}

export interface ISFHelpers {
    DOMEvents: any,
    domTools: any,
}

export type ISFInstance = any;

export interface IInstancesController {
    /**
     * Register new instance type
     * @param {Function} constructorFunction - constructor function of instance
     * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
     * controlled by DomMutation. But you still can use it from JS.
     * @param {boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
     */
    registerInstanceType: (constructorFunction: Function, cssClassName?: string, isSkipInitialization?: boolean) => void;
    addInstance: (instanceType: string, node: Element, options: any) => any;
    removeInstance: (instanceType: string, node: Element) => any;
    getInstances: (instanceType: string) => Array<{ node: Element, instance: any }>;
    getInstance: (instanceName: string) => Array<{ node: Element, instance: any }>;

    events: Events,
}

export interface ISpiralFramework {
    ajax: Ajax,
    core: ISFCore,
    helpers: ISFHelpers,
    tools: any;
    events: Events,
    createModulePrototype: Function,
    instancesController: IInstancesController;
    closest: any;
    resolveKeyPath: any;
    domMutation: any;
    options: { instances: {[id: string]: ISFInstance} }
    /**
     * Register new instance type
     * @param {Function} constructorFunction - constructor function of instance
     * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
     * controlled by DomMutation. But you still can use it from JS.
     * @param {boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
     */
    registerInstanceType: (constructorFunction: Function, cssClassName?: string, isSkipInitialization?: boolean) => void;
    addInstance: (instanceType: string, node: Element, options: any) => ISFInstance;
    removeInstance: (instanceType: string, node: Element) => any;
    getInstances: (instanceType: string) => Array<{ node: Element, instance: ISFInstance }>;
    getInstance: (instanceName: string) => ISFInstance;
}
