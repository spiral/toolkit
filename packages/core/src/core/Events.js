"use strict";

/**
 * Events system.
 * @param {Array} allowedEvents array of allowed events.
 * @constructs Events
 * @example
 * //allow to work with all events
 * var events = new Events();
 * events.on("myBestEvent",function(e){console.log(e)});
 * @example
 * //Allow to serve only limited events
 *  var events = new Events(["beforeSubmit","onDataReady"]);
 *  events.on("myBestEvent",function(e){console.log(e)});//will not works
 *  events.on("beforeSubmit",function(e){console.log(e)});//will work
 */
var Events = function (allowedEvents) {
    this._storage = {};
    this._allowedEvents = allowedEvents;
};

/**
 * Add event(s)
 * @param {String} events event or space separated event list
 * @param {Function} callback callback function
 * @example
 * var events = new Events();
 * events.on("myBestEvent myBestEvent2 myBestEvent3",function(e){console.log(e)});
 * events.on("myBestEvent",function(e){console.log(e)});
 */
Events.prototype.on = function (events, callback) {
    var eventArr = events.replace(/\s{2,}/g, " ").split(" ");
    eventArr.forEach(function (event) {
        if (this._allowedEvents && this._allowedEvents.indexOf(event) === -1) {// event not inside allowed events
            console.warn("Events. Try to register event %s, but event is not allowed", event);
            return;
        }
        if (!this._storage.hasOwnProperty(events)) {
            this._storage[event] = [];
        }
        this._storage[event].push(callback);
    }, this);
};

/**
 * Add action
 * @param {String} action
 * @param {Function} func
 * @deprecated  use "on" instead
 */
Events.prototype.registerAction = Events.prototype.on;


/**
 * remove event
 * @param {String} event
 * @param {Function} callback
 */
Events.prototype.off = function (event, callback) {
    alert("You try to remove action. This part is incomplete");
    // TODO
};

/**
 * Trigger event.
 * @param {String} event event name
 * @param {Object} [options] options to pass to the callback
 * @example
 * var events = new Events();
 * events.on("myBestEvent",function(e){console.log(e.bestKey)});
 * events.trigger("myBestEvent",{bestKey:42}); //will show in log
 */
Events.prototype.trigger = function (event, options) {
    if (this._allowedEvents && this._allowedEvents.indexOf(event) === -1) {// event not inside allowed events
        console.warn("Events. Try to trigger event %s, but event is not allowed", event);
        return;
    }
    if (this._storage.hasOwnProperty(event)) {
        for (var n = 0, l = this._storage[event].length; n < l; n++) {
            this._storage[event][n](options);
        }
    }
};

/**
 * Perform action
 * @param {String} action
 * @param {Object} [actionParams] object with all action data from server
 * @param {Object} [options] ajax options
 * @deprecated use "trigger" instead
 */
Events.prototype.performAction = Events.prototype.trigger;

module.exports = Events;
