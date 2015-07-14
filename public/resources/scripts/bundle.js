(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//Add console shim for old IE
require ("./lib/shim/console");


var InstancesController = require ("./lib/core/InstancesController");
var DomMutations = require ("./lib/core/DomMutations");

debugger





},{"./lib/core/DomMutations":2,"./lib/core/InstancesController":3,"./lib/shim/console":4}],2:[function(require,module,exports){
"use strict";
/**
 * Dom mutation. Listening to the DOM and add or remove instances based on classes.
 * @param {Object} instancesController  spiral instancesController.
 * @param {Function} instancesController.getClasses  get all registered modules classes.
 * @param {Function} instancesController.addInstance  add instance method.
 * @param {Function} instancesController.removeInstance  remove instance method
 * @constructor
 */
var DomMutations = function (instancesController) {
    if (!instancesController){
        console.error("You should provide instancesController  for DOM Mutation. Because DOM Mutation  should known all classes and");
        return;
    }
    if (!this.constructor){
        console.error("Please call DomMutations with new  - 'new DomMutations()' ");
        return;
    }
    this.instancesController = instancesController;
    var config = {//config for MutationObserver
            attributes: true,
            childList: true,
            characterData: true,
            characterDataOldValue: true,
            subtree: true,
            attributeOldValue: true,
            attributeFilter: ["class"]
        },
        that = this;
    this.observer = new MutationObserver(function () {//call function when dom mutated.
        that.onDomMutate.apply(that, arguments)
    });
    this.observer.observe(document, config);//start observer

};
/**
 * When dom mutated this function id executed.
 * @param {Array} mutations array of mutations
 * @returns {boolean}
 */
DomMutations.prototype.onDomMutate = function (mutations) {
    var classArray = this.instancesController.getClasses();//get all registered classes
    var classSelector = "." + classArray.join(",.");//convert for querySelectorAll()
    if (classSelector.length === 1) {//if not registered any instanceTypes
        return false;
    }
    mutations.forEach(function (mutation) {//loop over mutation array
        switch (mutation.type) {
            case "attributes":
                this.processMutationAttributes(mutation, classArray);
                break;

            case "characterData":

                break;

            case "childList":
                this.processMutationChildList(mutation.addedNodes, "addInstance", classSelector, classArray);
                this.processMutationChildList(mutation.removedNodes, "removeInstance", classSelector, classArray);
                break;

            case "default":
                console.error("Something wrong. Contact tech support");
        }
    }, this);
    return true;
};



DomMutations.prototype.processMutationAttributes = function (mutation, classArray) {
    var that = this;
    var currentClasses = mutation.target.className.split(" "),
        oldClasses = (mutation.oldValue)?mutation.oldValue.split(" "):[],
        addedClasses = currentClasses.filter(function (val) {
            return (oldClasses.indexOf(val) === -1);
        }),
        removedClasses = oldClasses.filter(function (val) {
            return (currentClasses.indexOf(val) === -1);
        }),
        addedRegisteredClasses = addedClasses.filter(function (val) {
            return (classArray.indexOf(val) !== -1);
        }),
        removedRegisteredClasses = removedClasses.filter(function (val) {
            return (classArray.indexOf(val) !== -1);
        });
    removedRegisteredClasses.forEach(function (val) {
        that.instancesController.removeInstance(val, mutation.target);
    });
    addedRegisteredClasses.forEach(function (val) {
        that.instancesController.addInstance(val, mutation.target);
    });

};
/**
 * Process mutation on ChildList
 * @param {NodeList} nodesList array with nodes
 * @param {String} action action to call (add or remove nodes)
 * @param {String} classSelector - string selector for querySelectorAll
 * @param {Array} classArray - array of all registered classes
 */
DomMutations.prototype.processMutationChildList = function (nodesList, action, classSelector, classArray) {
    var that =this;
    /**
     * Internal function for checking node class
     * @param {Object} node dom node
     */
    function checkNode(node) {
        classArray.forEach(function (className) {//loop over registered classes
            if (node.classList.contains(className)) {//if class match try to add or remove instance for this node
                that.instancesController[action](className, node);
            }
        });
    }

    [].forEach.call(nodesList, function (val) {//loop over mutation nodes
        if (val.nodeType !== 1 || val.nodeName === "SCRIPT" || val.nodeName === "LINK") {//do not process other nodes then ELEMENT_NODE https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType also ignore SCRIPT and LINK tag
            return false;
        }
        checkNode(val);//check mutation node
        [].forEach.call(val.querySelectorAll(classSelector), checkNode);//query all nodes with required classes and check it
        return true;
    });

};

/**
 * Stop listening the dom changes
 */
DomMutations.prototype.stopObserve = function () {
    this.observer.disconnect();
};

module.exports = DomMutations;



},{}],3:[function(require,module,exports){
"use strict";
/**
 * Instance controller
 * @constructor
 */
var InstancesController = function () {
    if (!this.constructor){
        console.error("Please call InstancesController with new  - 'new InstancesController()' ");
        return;
    }
    this._storage = {
        settings: {},
        instances: {}
    };
};
/**
 * Add new instance type
 * @param {String} typeName - type of instance
 * @param {String} className - class name of instance
 * TODO class name = NULL (disable dom mutation);
 * @param {Function} constructorFunction - constructor function of instance
 * @param {Boolean} [isSkipInitialization]  - skip component initialization, just adding, no init nodes.
 */
InstancesController.prototype.addInstanceType = function (typeName, className, constructorFunction,isSkipInitialization) {
    if (this._storage.settings.hasOwnProperty(className)){
        console.error("Instance Constructor for type %s already added. Skipping",typeName);
        return;
    }

    this._storage.settings[className] = {//init storage fields
        "typeName": typeName,
        "constructor": constructorFunction
    };
    this._storage.instances[typeName] = [];
    if (!isSkipInitialization){
        var nodes = document.getElementsByClassName(className);//init add nodes with this class
        for (var i = 0, max = nodes.length; i < max; i++) {
            this.addInstance(className, nodes[i]);
        }
    }

};

/**
 * Add instance
 * @param {String} className - name of inited class
 * @param {Object} node - dom node
 * @param {Object} [options] all options for send to the constructor
 * @returns {boolean}
 */
InstancesController.prototype.addInstance = function (className, node, options) {
    var setting = this._storage.settings[className],
        isAlreadyAdded = this.getInstance(setting.typeName,node);
    if (!setting || isAlreadyAdded) {//if not found this type  or already added - return
        return false;
    }
//    console.log("Adding instance for type -",setting.typeName,". Node - ",node);
    this._storage.instances[setting.typeName].push({//add new instance of this type
        "node": node,
        "instance": new setting.constructor(node, options)
    });
    return true;
};
/**
 * Remove instance.
 * @param {String} className - name of inited class
 * @param {Object|String} node - dom node o dome node ID
 * @returns {boolean}
 */
InstancesController.prototype.removeInstance = function (className, node) {
    var setting = this._storage.settings[className],
        instanceObj = this.getInstance(setting.typeName, node,true),
        key;
    if (!instanceObj) {
        return false;
    }
    instanceObj.instance.die();//avoid memory leak
    key = this._storage.instances[setting.typeName].indexOf(instanceObj);
    if (key !== -1){//remove key
        this._storage.instances[setting.typeName].splice(key, 1);
    }
    return true;
};
/**
 * Get instance. Return instance object of this dom node
 * @param {String} typeName - type of instance
 * @param {Object|String} node - dom node o dome node ID
 * @param {boolean} [isReturnObject] - return object or instance
 * @returns {boolean}
 */
InstancesController.prototype.getInstance = function (typeName, node, isReturnObject) {
    var typeArr = this._storage.instances[typeName],
        ret = false;
    if (!typeArr) {
        return false;
    }
    node = (node instanceof HTMLElement) ? node : document.getElementById(node);
    if (!node) {
        return false;
    }
    for (var key = 0, l = typeArr.length; key < l; key++) {//iterate storage and try to find instance
        if (typeArr[key].node === node) {
            ret = (isReturnObject) ? typeArr[key] : typeArr[key].instance;
            break;
        }
    }
    return ret;
};

/**
 * Get all registered classes
 * @returns {Array}
 */
InstancesController.prototype.getClasses = function (){
    return Object.keys(this._storage.settings);
};

module.exports = InstancesController;




},{}],4:[function(require,module,exports){
/**
 * Avoid `console` errors in browsers that lack a console.
 */
(function () {
    var method, noop = function () {
        },
        methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ],
        length = methods.length,
        console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

},{}]},{},[1])
//# sourceMappingURL=bundle.js.map
