"use strict";

/**
 * Instance controller
 * @param {*} spiral
 * @constructor
 */
var InstancesController = function (spiral) {
    this.spiral = spiral;
    if (!this.constructor) {
        console.error("Please call InstancesController with new  - 'new InstancesController()' ");
        return;
    }
    this._storage = {
        instancesConstructors: {
            cssClasses: {},
            jsConstructors: {}
        },
        addons: {},
        instances: {}
    };

    // todo decide if we need this
    // ["onAddInstance", "onRemoveInstance"]
    // this.events = new spiral.modules.core.Events();
};

/**
 * Register new instance type
 * @param {Function} constructorFunction - constructor function of instance
 * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically
 * controlled by DomMutation. But you still can use it from JS.
 * @param {Boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
 */
InstancesController.prototype.registerInstanceType = function (constructorFunction, cssClassName, isSkipInitialization) {
    var instanceName = constructorFunction.prototype.name;

    if (!instanceName) {
        console.error("Instance constructor should have name inside it");
    }

    if (this._storage.instancesConstructors.jsConstructors.hasOwnProperty(instanceName)) {
        console.error("Instance Constructor for type '%s' already added. Skipping", instanceName);
        return;
    }

    if (cssClassName) {// add link (cssClassName->instanceName)
        this._storage.instancesConstructors.cssClasses[cssClassName] = instanceName;
    }

    this._storage.instancesConstructors.jsConstructors[instanceName] = constructorFunction;

    // if (this._storage.instancesConstructors.hasOwnProperty(className)){
    //    console.error("Instance Constructor for type %s already added. Skipping",constructorFunction.prototype.name);
    //    return;
    // }
    // this._storage.instancesConstructors[className] = {//init storage fields
    //    "typeName": constructorFunction.prototype.name,
    //    "constructor": constructorFunction
    // };
    this._storage.instances[instanceName] = [];
    if (!isSkipInitialization) {
        var nodes = document.getElementsByClassName(cssClassName);// init add nodes with this class
        for (var i = 0, max = nodes.length; i < max; i++) {
            this.addInstance(instanceName, nodes[i]);
        }
    }
};

/**
 * Old method to register instance type
 * @param {*} className
 * @param {*} constructorFunction
 * @param {*} isSkipInitialization
 * @return {*}
 * @deprecated
 */
InstancesController.prototype.addInstanceType = function (className, constructorFunction, isSkipInitialization) {
    console.warn("addInstanceType is deprecated. Please use registerInstanceType instead");
    return this.registerInstanceType(constructorFunction, isSkipInitialization);
};


/**
 * Add instance
 * @param {String} instanceName - name of instance
 * @param {Object} node - dom node
 * @param {Object} [options] all options for send to the constructor
 * @return {boolean}
 */
InstancesController.prototype.addInstance = function (instanceName, node, options) {
    var InstanceConstructor = this._storage.instancesConstructors.jsConstructors[instanceName];
    var isAlreadyAdded = this.getInstance(instanceName, node);

    if (!InstanceConstructor || isAlreadyAdded) {// if not found this type  or already added - return
        return false;
    }

    var instance = new InstanceConstructor(this.spiral, node, options);
    this._storage.instances[instanceName].push({// add new instance of this type
        "node": node,
        "instance": instance
    });

    // this.events.trigger("onAddInstance", instance);

    return instance;
};

/**
 * Remove instance.
 * @param {String} instanceName - name of instance class
 * @param {Object|String} node - dom node ID
 * @return {boolean}
 */
InstancesController.prototype.removeInstance = function (instanceName, node) {
    var instanceObj = this.getInstance(instanceName, node, true);
    var key;

    if (!instanceObj) {
        return false;
    }
    instanceObj.instance.die();// avoid memory leak
    key = this._storage.instances[instanceName].indexOf(instanceObj);
    if (key !== -1) {// remove key
        this._storage.instances[instanceName].splice(key, 1);
    }
    return true;
};

/**
 * Get instance. Return instance object of this dom node
 * @param {String} instanceName - name of instance
 * @param {Object|String} node - dom node o dome node ID
 * @param {boolean} [isReturnObject] - return object or instance
 * @return {boolean}
 */
InstancesController.prototype.getInstance = function (instanceName, node, isReturnObject) {
    // TODO isReturnObject not needed. Refactor and remove

    var typeArr = this._storage.instances[instanceName];
    var ret = false;
    if (!typeArr) {
        return false;
    }
    node = (node instanceof HTMLElement) ? node : document.getElementById(node);
    if (!node) {
        return false;
    }
    for (var key = 0, l = typeArr.length; key < l; key++) {// iterate storage and try to find instance
        if (typeArr[key].node === node) {
            ret = (isReturnObject) ? typeArr[key] : typeArr[key].instance;
            break;
        }
    }
    return ret;
};

/**
 * Get instances. Return array of instances objects
 * @param {String} instanceName - name of instance
 * @return {array|boolean}
 */
InstancesController.prototype.getInstances = function (instanceName) {
    return this._storage.instances[instanceName] || false;
};


/**
 * Register addon for instance
 * @param {Function|Object} addon
 * @param {String} instanceName name of instance to register addon
 * @param {String} addonType type of addon (message,fill,etc)
 * @param {String} addonName name of addon (spiral, bootstrap,etc)
 */
InstancesController.prototype.registerAddon = function (addon, instanceName, addonType, addonName) {
    if (!this._storage.addons.hasOwnProperty(instanceName)) {
        this._storage.addons[instanceName] = {};
    }
    if (!this._storage.addons[instanceName].hasOwnProperty(addonType)) {
        this._storage.addons[instanceName][addonType] = {};
    }
    if (this._storage.addons[instanceName][addonType].hasOwnProperty(addonName)) {
        console.error("The %s addon type %s already registered for instance %s! Skipping registration.", addonName, addonType, instanceName);
        return;
    }
    this._storage.addons[instanceName][addonType][addonName] = addon;
};

/**
 * Get registered addon
 * @param {String} instanceName name of instance to register addon
 * @param {String} addonType type of addon (message,fill,etc)
 * @param {String} addonName name of addon (spiral, bootstrap,etc)
 * @return {*}
 */
InstancesController.prototype.getInstanceAddon = function (instanceName, addonType, addonName) {
    if(!this._storage.addons.hasOwnProperty(instanceName)
        || !this._storage.addons[instanceName].hasOwnProperty(addonType)
        || !this._storage.addons[instanceName][addonType].hasOwnProperty(addonName)) {
        return false;
    }
    return this._storage.addons[instanceName][addonType][addonName];
};


/**
 * Get all registered classes
 * @return {Array}
 */
InstancesController.prototype.getClasses = function () {
    return Object.keys(this._storage.instancesConstructors.cssClasses);
};

/**
 * For given cssClass return name of instance
 * @param {String} cssClass
 * @return {*}
 */
InstancesController.prototype.getInstanceNameByCssClass = function (cssClass) {
    return this._storage.instancesConstructors.cssClasses[cssClass];
};

/**
 * Get constructor by name or class name
 * @param {*} name
 */
InstancesController.prototype.getInstanceConstructors = function (name) {
    // TODO
};

module.exports = InstancesController;
