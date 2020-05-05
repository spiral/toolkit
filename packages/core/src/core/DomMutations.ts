/**
 * Dom mutation. Listening to the DOM and add or remove instances based on classes.
 * @param {Object} instancesController  spiral instancesController.
 * @param {Function} instancesController.getClasses  get all registered modules classes.
 * @param {Function} instancesController.addInstance  add instance method.
 * @param {Function} instancesController.removeInstance  remove instance method
 * @constructor
 */
import type { InstancesController } from './InstancesController';
import { SF_UNIVERSAL_CLASS } from './constants';
let eventId = 1;

export class DomMutations {
  observer: MutationObserver;

  constructor(public instancesController: InstancesController) {
    const config = { // config for MutationObserver
      attributes: true,
      childList: true,
      characterData: true,
      characterDataOldValue: true,
      subtree: true,
      attributeOldValue: true,
      attributeFilter: ['class'],
    };
    this.observer = new MutationObserver((mutations: MutationRecord[]) => { // call function when dom mutated.
      this.onDomMutate(mutations);
    });
    this.observer.observe(document, config);// start observer
  }


  /**
   * When dom mutated this function id executed.
   * @param {Array} mutations array of mutations
   * @return {boolean}
   */
  onDomMutate(mutations: MutationRecord[]) {
    const classArray = this.instancesController.getClasses();// get all registered classes
    const classSelector = `.${SF_UNIVERSAL_CLASS},.${classArray.join(',.')}`;// convert for querySelectorAll()
    if (classSelector.length === 1) { // if not registered any instanceTypes
      return false;
    }

    mutations.forEach((mutation) => { // loop over mutation array
      switch (mutation.type) {
        case 'attributes':
          this.processMutationAttributes(mutation, classArray);
          break;

        case 'characterData':

          break;

        case 'childList':
          this.processMutationChildList(mutation.addedNodes, 'addInstance', classSelector, classArray);
          this.processMutationChildList(mutation.removedNodes, 'removeInstance', classSelector, classArray);
          break;

        default:
          console.error('Something wrong. Contact tech support');
      }
    }, this);
    return true;
  }


  processMutationAttributes(mutation: MutationRecord, classArray: string[]) {
    const target: Element = mutation.target as any;
    const currentClasses = target.className.split(' ');
    const oldClasses = (mutation.oldValue) ? mutation.oldValue.split(' ') : [];
    const addedClasses = currentClasses.filter((val) => (oldClasses.indexOf(val) === -1));
    const removedClasses = oldClasses.filter((val) => (currentClasses.indexOf(val) === -1));
    const addedRegisteredClasses = addedClasses.filter((val) => (classArray.indexOf(val) !== -1));
    const removedRegisteredClasses = removedClasses.filter((val) => (classArray.indexOf(val) !== -1));
    removedRegisteredClasses.forEach((val) => {
      this.instancesController.removeInstance(this.instancesController.getInstanceNameByCssClass(val), target);
    });
    addedRegisteredClasses.forEach((val) => {
      this.instancesController.addInstance(this.instancesController.getInstanceNameByCssClass(val), target);
    });
  }

  /**
   * Process mutation on ChildList
   * @param {NodeList} nodesList array with nodes
   * @param {String} action action to call (add or remove nodes)
   * @param {String} classSelector - string selector for querySelectorAll
   * @param {Array} classArray - array of all registered classes
   */
  processMutationChildList(nodesList: NodeList, action: 'addInstance' | 'removeInstance', classSelector: string, classArray: string[]) {
    /**
     * Internal function for checking node class
     * @param {Object} node dom node
     */
    const checkNode = (node: Element) => {
      classArray.forEach((className) => { // loop over registered classes
        if (node.classList.contains(className)) { // if class match try to add or remove instance for this node
          this.instancesController[action](this.instancesController.getInstanceNameByCssClass(className), node);
        }
      });
      if (node.classList.contains(SF_UNIVERSAL_CLASS) && action === 'removeInstance') {
        // console.log(action, href, node.className, document.body.contains(node));
        this.instancesController.removeInstancesFromNode(node);
      }
      if (node.classList.contains(SF_UNIVERSAL_CLASS) && action === 'addInstance') {
        // console.log(action, href, node.className, document.body.contains(node));
        this.instancesController.cancelRemoveInstancesFromNode(node);
      }
    };

    [].forEach.call(nodesList, (val: Element) => { // loop over mutation nodes
      // do not process other nodes then ELEMENT_NODE https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType also ignore SCRIPT and LINK tag
      if (val.nodeType !== 1 || val.nodeName === 'LINK') {
        return false;
      }
      checkNode(val);// check mutation node
      [].forEach.call(val.querySelectorAll(classSelector), checkNode);// query all nodes with required classes and check it
      return true;
    });
  }

  /**
   * Stop listening the dom changes
   */
  stopObserve() {
    this.observer.disconnect();
  }
}

export default DomMutations;
