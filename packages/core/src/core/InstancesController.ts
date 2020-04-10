import type {
  ISFInstance, ISpiralFramework, ISFInstanceConstructor, IInstancesController,
} from '../types';
import { Events } from './Events';

export class InstancesController implements IInstancesController {
  private storage: {
    instancesConstructors: {
      cssClasses: { [key: string]: string },
      jsConstructors: { [key: string]: ISFInstanceConstructor },
    },
    addons: { [key: string]: any },
    instances: {
      [key: string]: Array<{
        node: Element,
        instance: ISFInstance,
      }>
    },
  } = {
    instancesConstructors: {
      cssClasses: {},
      jsConstructors: {},
    },
    addons: {},
    instances: {},
  };

  public events = new Events(['onRemoveInstance', 'onAddInstance']);

  constructor(public spiral: ISpiralFramework) {
  }


  /**
     * Register new instance type
     * @param {Function} constructorFunction - constructor function of instance
     * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
     * controlled by DomMutation. But you still can use it from JS.
     * @param {Boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
     */
  registerInstanceType(constructorFunction: ISFInstanceConstructor, cssClassName?: string, isSkipInitialization?: boolean) {
    const instanceName = constructorFunction.spiralFrameworkName || constructorFunction.prototype.name;

    if (!instanceName) {
      console.error('Instance constructor should have name inside it');
    }

    if (this.storage.instancesConstructors.jsConstructors[instanceName]) {
      console.error('Instance Constructor for type \'%s\' already added. Skipping', instanceName);
      return;
    }

    if (cssClassName) { // add link (cssClassName->instanceName)
      this.storage.instancesConstructors.cssClasses[cssClassName] = instanceName;
    }

    this.storage.instancesConstructors.jsConstructors[instanceName] = constructorFunction;

    // if (this._storage.instancesConstructors.hasOwnProperty(className)){
    //    console.error("Instance Constructor for type %s already added. Skipping",constructorFunction.prototype.name);
    //    return;
    // }
    // this._storage.instancesConstructors[className] = {//init storage fields
    //    "typeName": constructorFunction.prototype.name,
    //    "constructor": constructorFunction
    // };
    this.storage.instances[instanceName] = [];
    if (!isSkipInitialization && cssClassName) {
      const nodes = document.getElementsByClassName(cssClassName);// init add nodes with this class
      for (let i = 0, max = nodes.length; i < max; i += 1) {
        this.addInstance(instanceName, nodes[i]);
      }
    }
  }


  /**
     * Old method to register instance type
     * @param {*} className
     * @param {*} constructorFunction
     * @param {*} isSkipInitialization
     * @return {*}
     * @deprecated
     */
  addInstanceType(className: string, constructorFunction: ISFInstanceConstructor, isSkipInitialization?: boolean) {
    console.warn('addInstanceType is deprecated. Please use registerInstanceType instead');
    return this.registerInstanceType(constructorFunction, className, isSkipInitialization);
  }

  /**
     * Add instance
     * @param {String} instanceName - name of instance
     * @param {Object} node - dom node
     * @param {Object} [options] all options for send to the constructor
     * @return {boolean}
     */
  addInstance(instanceName: string, node: Element, options: any = undefined) {
    const InstanceConstructor = this.storage.instancesConstructors.jsConstructors[instanceName];
    const isAlreadyAdded: boolean = !!this.getInstance(instanceName, node);

    if (!InstanceConstructor || isAlreadyAdded) { // if not found this type  or already added - return
      return undefined;
    }

    const instance = new InstanceConstructor(this.spiral, node, options);
    this.storage.instances[instanceName].push({ // add new instance of this type
      node,
      instance,
    });

    this.events.trigger('onAddInstance', { instance, type: instanceName });

    return instance;
  }


  /**
     * Remove instance.
     * @param {String} instanceName - name of instance class
     * @param {Object|String} node - dom node ID
     * @return {boolean}
     */
  removeInstance(instanceName: string, node: Element) {
    const instanceObj: {node: Element, instance: ISFInstance} | undefined = this.getInstance(instanceName, node);

    if (!instanceObj) {
      return false;
    }
    if (instanceObj.instance.die) {
      instanceObj.instance.die(); // avoid memory leak
    }
    const key = this.storage.instances[instanceName].indexOf(instanceObj);
    if (key !== -1) { // remove key
      this.storage.instances[instanceName].splice(key, 1);
    }
    this.events.trigger('onRemoveInstance', { instance: instanceObj, type: instanceName });
    return true;
  }


  /**
   * Get instance. Return instance object of this dom node
   * @param {String} instanceName - name of instance
   * @param {Object|String} node - dom node o dome node ID
   * @return {boolean}
   */
  getInstance(instanceName: string, node: Element | string) {
    const typeArr = this.storage.instances[instanceName];
    let ret: {node: Element, instance: ISFInstance} | undefined;
    if (!typeArr) {
      return undefined;
    }
    const el = (node instanceof HTMLElement) ? node : document.getElementById(node.toString());
    if (!el) {
      return undefined;
    }
    for (let key = 0, l = typeArr.length; key < l; key += 1) { // iterate storage and try to find instance
      if (typeArr[key].node === el) {
        ret = typeArr[key];
        break;
      }
    }
    return ret;
  }

  /**
   * Get instances. Return array of instances objects
   * @param {String} instanceName - name of instance
   * @return {array|boolean}
   */
  getInstances(instanceName: string) {
    return this.storage.instances[instanceName] || false;
  }


  /**
   * Register addon for instance
   * @param {Function|Object} addon
   * @param {String} instanceName name of instance to register addon
   * @param {String} addonType type of addon (message,fill,etc)
   * @param {String} addonName name of addon (spiral, bootstrap,etc)
   */
  registerAddon(addon: any, instanceName: string, addonType: string, addonName: string) {
    if (!this.storage.addons[instanceName]) {
      this.storage.addons[instanceName] = {};
    }
    if (!this.storage.addons[instanceName][addonType]) {
      this.storage.addons[instanceName][addonType] = {};
    }
    if (this.storage.addons[instanceName][addonType][addonName]) {
      console.error('The %s addon type %s already registered for instance %s! Skipping registration.', addonName, addonType, instanceName);
      return;
    }
    this.storage.addons[instanceName][addonType][addonName] = addon;
  }

  /**
   * Get registered addon
   * @param {String} instanceName name of instance to register addon
   * @param {String} addonType type of addon (message,fill,etc)
   * @param {String} addonName name of addon (spiral, bootstrap,etc)
   * @return {*}
   */
  getInstanceAddon(instanceName: string, addonType: string, addonName: string) {
    if (!this.storage.addons[instanceName]
        || !this.storage.addons[instanceName][addonType]
        || !this.storage.addons[instanceName][addonType][addonName]) {
      return false;
    }
    return this.storage.addons[instanceName][addonType][addonName];
  }


  /**
   * Get all registered classes
   * @return {Array}
   */
  getClasses() {
    return Object.keys(this.storage.instancesConstructors.cssClasses);
  }

  /**
   * For given cssClass return name of instance
   * @param {String} cssClass
   * @return {*}
   */
  getInstanceNameByCssClass(cssClass: string) {
    return this.storage.instancesConstructors.cssClasses[cssClass];
  }
}

export default InstancesController;
