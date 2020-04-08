import type { ISpiralFramework, ISpiralInstanceClass } from '../types';
import { Events } from './Events';
export declare class InstancesController {
    spiral: ISpiralFramework;
    private storage;
    events: Events;
    constructor(spiral: ISpiralFramework);
    /**
     * Register new instance type
     * @param {Function} constructorFunction - constructor function of instance
     * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
     * controlled by DomMutation. But you still can use it from JS.
     * @param {Boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
     */
    registerInstanceType(constructorFunction: ISpiralInstanceClass, cssClassName?: string, isSkipInitialization?: boolean): void;
    /**
     * Old method to register instance type
     * @param {*} className
     * @param {*} constructorFunction
     * @param {*} isSkipInitialization
     * @return {*}
     * @deprecated
     */
    addInstanceType(className: string, constructorFunction: ISpiralInstanceClass, isSkipInitialization?: boolean): void;
    /**
     * Add instance
     * @param {String} instanceName - name of instance
     * @param {Object} node - dom node
     * @param {Object} [options] all options for send to the constructor
     * @return {boolean}
     */
    addInstance(instanceName: string, node: Element, options?: any): false | ISpiralInstanceClass;
    /**
     * Remove instance.
     * @param {String} instanceName - name of instance class
     * @param {Object|String} node - dom node ID
     * @return {boolean}
     */
    removeInstance(instanceName: string, node: Element): boolean;
    /**
     * Get instance. Return instance object of this dom node
     * @param {String} instanceName - name of instance
     * @param {Object|String} node - dom node o dome node ID
     * @param {boolean} [isReturnObject] - return object or instance
     * @return {boolean}
     */
    getInstance(instanceName: string, node: Element | string, isReturnObject?: boolean): any;
    /**
     * Get instances. Return array of instances objects
     * @param {String} instanceName - name of instance
     * @return {array|boolean}
     */
    getInstances(instanceName: string): {
        node: Element;
        instance: any;
    }[];
    /**
     * Register addon for instance
     * @param {Function|Object} addon
     * @param {String} instanceName name of instance to register addon
     * @param {String} addonType type of addon (message,fill,etc)
     * @param {String} addonName name of addon (spiral, bootstrap,etc)
     */
    registerAddon(addon: any, instanceName: string, addonType: string, addonName: string): void;
    /**
     * Get registered addon
     * @param {String} instanceName name of instance to register addon
     * @param {String} addonType type of addon (message,fill,etc)
     * @param {String} addonName name of addon (spiral, bootstrap,etc)
     * @return {*}
     */
    getInstanceAddon(instanceName: string, addonType: string, addonName: string): any;
    /**
     * Get all registered classes
     * @return {Array}
     */
    getClasses(): string[];
    /**
     * For given cssClass return name of instance
     * @param {String} cssClass
     * @return {*}
     */
    getInstanceNameByCssClass(cssClass: string): string;
}
export default InstancesController;
