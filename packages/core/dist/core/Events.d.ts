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
export declare type IEventCallback = (data?: any) => any;
export declare class Events {
    private allowedEvents?;
    private storage;
    constructor(allowedEvents?: string[] | undefined);
    on(events: string, callback: IEventCallback): void;
    /**
     * @deprecated
     */
    registerAction(events: string, callback: IEventCallback): void;
    off(events: string, callback: IEventCallback): void;
    trigger(event: string, data?: any): void;
    /**
     * @deprecated
     */
    performAction(event: string, data?: any): void;
}
