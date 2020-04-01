declare module '@spiral-toolkit/core' {
  class BaseDOMConstructor {
    static optionsToGrab: {[key: string]: any};
    public sf: ISpiralFramework;
    public node: Element;
    public options: Object;

    public init(sf: ISpiralFramework, node: Element, options: any): void;
  }

  export interface IAjaxOptions {
    url: string;
    data?: any;
    headers?: {[header: string]: string};
    method?: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH';
  }

  class IAjax {
    currentRequests: number;
    headers: {[header: string]: string};
    events: any[];
    cancel: any;
    send<ResponseData = any>(options: IAjaxOptions): Promise<ResponseData>;
    constructor(options: {headers: {[header: string]: string}});
  }

  export interface ISFCore {
    Ajax: any,
    BaseDOMConstructor: typeof BaseDOMConstructor,
    DomMutations: any,
    Events: any,
    InstancesController: any,
  }

  const core: ISFCore;

  export interface ISFHelpers {
    DOMEvents: any,
    domTools: any,
  }

  const helpers: ISFHelpers;

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
    getInstances: (instanceType: string) => Array<{node: Element, instance: any}>;

    events: {
      on: (eventName: string, callback: Function)=>void,
      off: (eventName: string, callback: Function)=>void,
    },
  }

  export interface ISpiralFramework {
    ajax: IAjax,
    core: ISFCore,
    helpers: ISFHelpers,
    tools: any;
    instancesController: IInstancesController;
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
    getInstances: (instanceType: string) => Array<{node: Element, instance: any}>;
  }

  const framework: ISpiralFramework;

  export default framework;
}