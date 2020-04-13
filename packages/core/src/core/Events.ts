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
export type IEventCallback = (data?: any) => any;

export class Events {
  private storage: { [eventName: string]: Array<IEventCallback> } = {};

  constructor(private allowedEvents?: string[]) {
  }

  on(events: string, callback: IEventCallback) {
    const eventArr = events.replace(/\s{2,}/g, ' ').split(' ');
    eventArr.forEach((event) => {
      // event not inside allowed events
      if (this.allowedEvents && this.allowedEvents.indexOf(event) === -1) {
        console.warn('Events. Try to register event %s, but event is not allowed', event);
        return;
      }
      if (!this.storage[events]) {
        this.storage[event] = [];
      }
      this.storage[event].push(callback);
    });
  }

  /**
     * @deprecated
     */
  registerAction(events: string, callback: IEventCallback) {
    return this.on(events, callback);
  }


  off(events: string, callback: IEventCallback) {
    const eventArr = events.replace(/\s{2,}/g, ' ').split(' ');
    eventArr.forEach((event) => {
      // event not inside allowed events
      if (this.allowedEvents && this.allowedEvents.indexOf(event) === -1) {
        console.warn('Events. Try to deregister event %s, but event is not allowed', event);
        return;
      }
      if (this.storage[event]) {
        this.storage[event] = this.storage[event].filter((cb) => cb !== callback);
      }
    });
  }

  trigger(event: string, data?: any) {
    // event not inside allowed events
    if (this.allowedEvents && this.allowedEvents.indexOf(event) === -1) {
      console.warn('Events. Try to trigger event %s, but event is not allowed', event);
      return;
    }
    if (this.storage[event]) {
      this.storage[event].forEach((cb) => cb(data));
    }
  }

  /**
     * @deprecated
     */
  performAction(event: string, data?: any) {
    return this.trigger(event, data);
  }
}
