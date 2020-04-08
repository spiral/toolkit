export interface IEventDescription {
    DOMNode: Element;
    eventType: string;
    eventFunction: (this: Element, ev: any) => any;
    useCapture?: boolean;
}
/**
 * Helper to manipulate DOM Events. It's a simple wrapper around "addEventListener" but it's store all functions and allow us to remove it all.
 * It's very helpful for die() method of instances
 * @TODO this class is used in one place, consider dropping it
 * @constructor
 */
export declare class DOMEvents {
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
    private DOMEventsStorage;
    /**
     * Add event(s) to node(s).
     * @param {Array.<Object>|Object} events - event array or event itself
     * @param {Object} events.DOMNode -   DOM node
     * @param {String} events.eventType -   Event type
     * @param {Function} events.eventFunction -   Function
     * @param {Boolean} [events.useCapture=false] -   useCapture
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
    add(events: IEventDescription | IEventDescription[]): void;
    /**
     * Remove all dom events registered with this instance (added by method add)
     * @example
     * //look at add method as first part of this code
     * DOMEventsInstance.removeAll();
     */
    removeAll(): void;
}
export default DOMEvents;
