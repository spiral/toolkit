/**
 * Dom mutation. Listening to the DOM and add or remove instances based on classes.
 * @param {Object} instancesController  spiral instancesController.
 * @param {Function} instancesController.getClasses  get all registered modules classes.
 * @param {Function} instancesController.addInstance  add instance method.
 * @param {Function} instancesController.removeInstance  remove instance method
 * @constructor
 */
import type { InstancesController } from "./InstancesController";
export declare class DomMutations {
    instancesController: InstancesController;
    observer: MutationObserver;
    constructor(instancesController: InstancesController);
    /**
     * When dom mutated this function id executed.
     * @param {Array} mutations array of mutations
     * @return {boolean}
     */
    onDomMutate(mutations: MutationRecord[]): boolean;
    processMutationAttributes(mutation: MutationRecord, classArray: string[]): void;
    /**
     * Process mutation on ChildList
     * @param {NodeList} nodesList array with nodes
     * @param {String} action action to call (add or remove nodes)
     * @param {String} classSelector - string selector for querySelectorAll
     * @param {Array} classArray - array of all registered classes
     */
    processMutationChildList(nodesList: NodeList, action: 'addInstance' | 'removeInstance', classSelector: string, classArray: string[]): void;
    /**
     * Stop listening the dom changes
     */
    stopObserve(): void;
}
export default DomMutations;
