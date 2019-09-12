/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */

/**
 * Helper to manipulate DOM Events. It's a simple wrapper around "addEventListener" but it's store all functions and allow us to remove it all.
 * It's very helpful for die() method of instances
 * @TODO add to many nodes
 * @TODO new method like addEventListener  DOMEvents.on(node(s),event,callback,useCapture);
 * @constructor
 */
const DOMEvents = function () {
  /**
     * Internal storage for events
     * @property {Array.<Object>} DOMEvents - dom events array
     * @property {Object} DOMEvents.DOMNode -   DOM node
     * @property {String} DOMEvents.eventType -   Event type
     * @property {Function} DOMEvents.eventFunction -   Function
     * @property {Boolean} DOMEvents.useCapture=false -   useCapture
     * @property {Object} ... -   another object
     * @private
     */
  this._DOMEventsStorage = [];
};
/**
 * Add event(s) to node(s).
 * @TODO add to many nodes
 * @param {Array.<Object>|Object} eventArray - event array or event itself
 * @param {Object} eventArray.DOMNode -   DOM node
 * @param {String} eventArray.eventType -   Event type
 * @param {Function} eventArray.eventFunction -   Function
 * @param {Boolean} [eventArray.useCapture=false] -   useCapture
 * @example
 * var DOMEventsInstance = new DOMEvents();
 * var eventOne = {
 *      DOMNode: document.getElementById("example"),
 *      eventType: "click",
 *      eventFunction: function (e) {
 *          console.log("Hi there. Native  DOM events is:",e);
 *      }
 * }
 *  var eventTwo = {
 *      DOMNode: document.getElementById("example2"),
 *      eventType: "mousedown",
 *      eventFunction: function (e) {
 *          console.log("Hi there. mousedown event. Native  DOM events is:",e);
 *      }
 * }
 *  DOMEventsInstance.add([eventOne,eventTwo]);
 */
DOMEvents.prototype.add = function (eventArray) {
  if (Object.prototype.toString.call([]) !== '[object Array]') {
    eventArray = [eventArray];
  }
  eventArray.forEach(function (val) {
    val.useCapture = !!(val.useCapture);
    val.DOMNode.addEventListener(val.eventType, val.eventFunction, val.useCapture);
    this._DOMEventsStorage.push(val);
  }, this);
};

/**
 * Remove events
 * @param {Array.<Object>} eventArray - event array
 * @param {Object} eventArray.DOMNode -   DOM node
 * @param {String} eventArray.eventType -   Event type
 * @param {Function} eventArray.eventFunction -   Function
 * @param {Boolean} [eventArray.useCapture=false] -   useCapture
 */
DOMEvents.prototype.remove = function (/* eventArray */) {
  // TODO IMPLEMENT
  // TODO не уверен что этот метод необходим. если надо часто убирать какието обработчики, то лучше поставить обработчки на родителя
  console.warn('TODO IMPLEMENT');
};

/**
 * Remove all dom events registered with this instance (added by method add)
 * @example
 * //look at add method as first part of this code
 * DOMEventsInstance.removeAll();
 */
DOMEvents.prototype.removeAll = function () {
  this._DOMEventsStorage.forEach((val) => {
    val.DOMNode.removeEventListener(val.eventType, val.eventFunction, val.useCapture);
  });
  this._DOMEventsStorage = [];
};

module.exports = DOMEvents;
