declare module '@spiral-toolkit/core' {

  class BaseDOMConstructor {
    static optionsToGrab: {[key: string]: any};
    public sf: ISpiralFramework;
    public node: Element;
    public options: Object;

    public init(sf: ISpiralFramework, node: Element, options: any): void;
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

  export interface ISpiralFramework {
    core: ISFCore,
    helpers: ISFHelpers,
    tools: any;
    /**
     * Register new instance type
     * @param {Function} constructorFunction - constructor function of instance
     * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
     * controlled by DomMutation. But you still can use it from JS.
     * @param {boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
     */
    registerInstanceType: (constructorFunction: Function, cssClassName?: string, isSkipInitialization?: boolean) => void;
  }

  const framework: ISpiralFramework;

  export default framework;
}