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
    if (!instancesController) {
        console.error("You should provide instancesController  for DOM Mutation. Because DOM Mutation  should known all classes and");
        return;
    }
    if (!this.constructor) {
        console.error("Please call DomMutations with new  - 'new DomMutations()' ");
        return;
    }
    this.instancesController = instancesController;
    var config = {// config for MutationObserver
            attributes: true,
            childList: true,
            characterData: true,
            characterDataOldValue: true,
            subtree: true,
            attributeOldValue: true,
            attributeFilter: ["class"]
        };
    var that = this;

    this.observer = new MutationObserver(function () {// call function when dom mutated.
        // eslint-disable-next-line
        that.onDomMutate.apply(that, arguments);
    });
    this.observer.observe(document, config);// start observer
};

/**
 * When dom mutated this function id executed.
 * @param {Array} mutations array of mutations
 * @return {boolean}
 */
DomMutations.prototype.onDomMutate = function (mutations) {
    var classArray = this.instancesController.getClasses();// get all registered classes
    var classSelector = "." + classArray.join(",.");// convert for querySelectorAll()
    if (classSelector.length === 1) {// if not registered any instanceTypes
        return false;
    }
    mutations.forEach(function (mutation) {// loop over mutation array
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
    var currentClasses = mutation.target.className.split(" ");
    var oldClasses = (mutation.oldValue) ? mutation.oldValue.split(" ") : [];
    var addedClasses = currentClasses.filter(function (val) {
        return (oldClasses.indexOf(val) === -1);
    });
    var removedClasses = oldClasses.filter(function (val) {
        return (currentClasses.indexOf(val) === -1);
    });
    var addedRegisteredClasses = addedClasses.filter(function (val) {
        return (classArray.indexOf(val) !== -1);
    });
    var removedRegisteredClasses = removedClasses.filter(function (val) {
        return (classArray.indexOf(val) !== -1);
    });
    removedRegisteredClasses.forEach(function (val) {
        that.instancesController.removeInstance(that.instancesController.getInstanceNameByCssClass(val), mutation.target);
    });
    addedRegisteredClasses.forEach(function (val) {
        that.instancesController.addInstance(that.instancesController.getInstanceNameByCssClass(val), mutation.target);
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
    var that = this;

    /**
     * Internal function for checking node class
     * @param {Object} node dom node
     */
    function checkNode(node) {
        classArray.forEach(function (className) {// loop over registered classes
            if (node.classList.contains(className)) {// if class match try to add or remove instance for this node
                that.instancesController[action](that.instancesController.getInstanceNameByCssClass(className), node);
            }
        });
    }

    [].forEach.call(nodesList, function (val) {// loop over mutation nodes
        if (val.nodeType !== 1 || val.nodeName === "SCRIPT" || val.nodeName === "LINK") {// do not process other nodes then ELEMENT_NODE https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType also ignore SCRIPT and LINK tag
            return false;
        }
        checkNode(val);// check mutation node
        [].forEach.call(val.querySelectorAll(classSelector), checkNode);// query all nodes with required classes and check it
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
