(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var tools = require("../helpers/tools");
var Events = require("../core/Events");
var LikeFormData = require("../helpers/LikeFormData");
/**
 * This is an Ajax transport.
 * Supports  XDomainRequest for old IE
 * @param {Object} [options]
 * @param {Object} [options.headers] Headers to add to the instance
 * @fires beforeSend event that will be performed before request is send. Event called with one parameter "options", that contains all variables for Ajax
 * @constructor
 */
var Ajax = function (options) {
    this.currentRequests = 0;
    this.events = new Events(["beforeSend", 'load']);

    if (options && options.headers) {
        this.headers = tools.extend(this.headers, options.headers);
    }
};

/**
 * Default headers. You can overwrite it. Look at the event beforeSend
 * Please note that on XDomainRequest  we can't send any headers.
 * @type Object
 */
Ajax.prototype.headers = {
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Send ajax request to server
 * Will return promise or array with promise and XMLHttpRequest : {window.Promise|[window.Promise,XMLHttpRequest]}
 * @since 0.4.0
 * @param {Object} options object with options
 * @param {String} options.url url to send data
 * @param {Object|String} [options.data] data to send
 * @param {String} [options.method]
 * @param {Object} [options.headers] headers to add to the request
 * @param {Function} [options.onProgress] callback function on progress. Two callback options: current bytes sent,totalBytes
 * @param {Function} [options.isReturnXHRToo===false] should method return array instead of Promise. Some times is needed to control ajax (abort, etc). If tree then  [window.Promise,XMLHttpRequest ] will be returned
 * @returns {Promise|Array}
 */
Ajax.prototype.send = function (options) {
    var that = this;

    //TODO why we check here if data === null then reassign to null again?
    if (options.data === null || options.data === void 0 || options.data === 'undefined') {
        options.data = null;
    }
    if (!options.method) {
        options.method = "POST"
    }

    options.headers = options.headers ? tools.extend(this.headers, options.headers) : this.headers;
    var xhr;
    var ajaxPromise =  new Promise(function (resolve, reject) {    // Return a new promise.
        if (!options.url) {
            console.error("You should provide url");
            reject("You should provide url");
        }
        that.currentRequests++;

        var oldIE = false;

        if ((typeof window !== 'undefined') && window.XDomainRequest && (window.XMLHttpRequest && new XMLHttpRequest().responseType === undefined) && (url.indexOf("http") === 0)) {//old IE CORS
            //TODO maybe we should use XDomainRequest only for cross domain requests? But  Spiral for now works great with XDomainRequest (based on IEJSON)
            xhr = new XDomainRequest();
            //http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
            oldIE = true;
            //http://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment
            xhr.onprogress = function (e) {
                //TODO adjust options
                options.onProgress && options.onProgress(e);
            };
        } else {
            xhr = new XMLHttpRequest();
            if (options.onProgress) {
                xhr.upload.addEventListener("progress", function (event) {
                    if (event.lengthComputable) {
                        options.onProgress(event.loaded, event.total);
                    }
                }, false);
            }

        }


        xhr.open(options.method, options.url);

        xhr.onload = function () {//On loaded
            that.currentRequests--;
            var ans = that._parseJSON(xhr);
            if (ans.status) {
                if (ans.status > 199 && ans.status < 300) {//200-299
                    resolve(ans);
                } else if (ans.status > 399 && ans.status < 600) {//400-599
                    reject(ans);
                } else {
                    console.error("unknown status %d. Rejecting", ans.status);
                    reject(ans);
                }

            } else if (oldIE) {
                resolve(ans);//OLD IE + downloading file is producing  no status.
            } else {
                reject(ans);//reject with the status text
            }
            options.response = ans;
            that.events.trigger("load", options);//for example - used to handle actions
        };
        xhr.onerror = function () {// Handle network errors
            that.currentRequests--;
            reject(Error("Network Error"), xhr);
        };

        that.events.trigger("beforeSend", options);//you can modify "options" object inside event (like adding you headers,data,etc)

        var dataToSend;
        if (options.data !== null) {//if data to send is not empty
            if (!oldIE) {
                if (options.data.toString().indexOf("FormData") !== -1) {//if form data
                    dataToSend = options.data;
                } else {
                    dataToSend = new LikeFormData(options.data);
                    options.headers["content-type"] = dataToSend.getContentTypeHeader();
                }
                that._setHeaders(xhr, options.headers);

            } else {
                dataToSend = "IEJSON" + JSON.stringify(options.data);
            }
        } else {//else send empty data
            dataToSend = null;
        }


//        if (!oldIE) {
//            //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//            dataToSend = new spiral.LikeFormData(data, xhr, oldIE);
//        } else {
//            if (data !==null && data !== void 0 && data !== 'undefined'){
//                dataToSend = "IEJSON"+JSON.stringify(data);
//            } else {
//                 dataToSend =data;
//            }
//
//        }


        try {//working around FF bug
            xhr.send(dataToSend);// Make the request
        } catch (e) {
            //console.error("error sending trying another method");
            xhr.send(dataToSend.toString());
        }

        return xhr;
    });

    if (options.isReturnXHRToo){//return xhr too
        return [ajaxPromise,xhr]
    }
    return ajaxPromise;
};


/**
 * Please use send instead of sendRequest
 * @deprecated 3.0.0
 * @remove 3.1.0
 * //TODO remove in ver 3.1.0
 */
Ajax.prototype.sendRequest = Ajax.prototype.send;


/**
 * Iterate over headers object and call xhr.setRequestHeader
 * @param {XMLHttpRequest} xhr
 * @param {Object} headers object with headers to set
 */
Ajax.prototype._setHeaders = function (xhr, headers) {
    for (var header in headers) {
        xhr.setRequestHeader(header, headers[header]);
    }

};
/**
 * Try to parse and normalize answer
 * @param xhr
 * @returns {*}
 * @private
 */
Ajax.prototype._parseJSON = function (xhr) {
    if (!xhr.response) {
        xhr.response = xhr.responseText;
    }
    var ret = {};
    var contentType = false;
    if (xhr.getResponseHeader) {
        contentType = xhr.getResponseHeader("Content-Type");
    }

    if (!contentType || contentType.toLowerCase() === 'application/json' || contentType.toLowerCase() === 'text/json' || contentType.toLowerCase() === 'inode/symlink') {//application/json or inode/symlink  (AmazonS3 bug? )
        try {
            ret = JSON.parse(xhr.response);
        } catch (e) {
            console.error("Not a JSON!", xhr.response);
            ret = {data: xhr.response};
        }
    } else {
        ret = {data: xhr.response};
    }

    if (!ret.status) {
        ret.status = xhr.status;
    }
    //Some servers can answer status in JSON as "HTTP/1.1 200 OK"  but we need a status number
    if (typeof ret.status === 'string' && ret.status.indexOf("HTTP/") === 0 && ret.status.match( / (\d\d\d)/ )) {
        ret.status = parseInt(ret.status.match( / (\d\d\d)/ )[1]);//TODO check this code
    }


    if (!ret.statusText) {
        ret.statusText = xhr.statusText;
    }
    if (xhr.status && xhr.status != ret.status) {
        console.warn("Status from request %d, but response contains status %d", xhr.status, ret.status)
    }

    return ret;

};


module.exports = Ajax;

},{"../core/Events":4,"../helpers/LikeFormData":9,"../helpers/tools":11}],2:[function(require,module,exports){
"use strict";

/**
 * This a base constructor (class) for any DOM based instance.
 * This constructor just grab all node attributes and generates options. All processed options stored at this.options
 * @example
 * We have html like this:
 * <div data-test="testValue" data-value="value123">.....</div>
 * this.options will be:
 * {
 *  test:"testValue",
 *  value:"value"
 * }
 * Note: data-test and data-value should be described in attributesToGrab
 * @constructor
 */
var BaseDOMConstructor = function () {
};
/**
 * Init method. Call after construct instance
 * @param {Object} sf
 * @param {Object} node  DomNode of form
 * @param {Object} [options] all options to override default
 */
BaseDOMConstructor.prototype.init = function (sf, node, options) {
    //TODO data-spiral-JSON
    this.sf = sf;
    this.node = node;
    //if (sf.options && sf.options.instances && sf.options.instances[this.name]) {
    //    options = Object.assign(options || {}, sf.options.instances[this.name]);
    //}
    this.options = Object.assign(this.grabOptions(node), options);
};

/**
 * This is a options to generate.
 * You should provide processor or value.
 * @type {Object}
 * @property {Object} propertyKey - object of property
 * @property {String} propertyKey.value - default value to return
 * @property {String} [propertyKey.domAttr] - dom attribute to grab data
 * @property {Function} [propertyKey.processor] -  processor to process data before return
 * @property {Object}  ... - Another object of one property
 * @type {{}}
 *  @example
 * "someAttribute": {// key
 *      value: true, //default Value
 *      domAttr: "data-some-attribute", // attribute from node to grab
 *      processor: function (node,val,self) { //processor to process values before return
 *          //some calculations
 *      return someValue;
 *      }
 *  },
 *  "anotherAttribute":{...},
 *  "..."
 *
 *  @example
 *  //return node as value
 *  "context": {
 *      "processor": function (node,val,key) { //processor
 *          return node;
 *      }
 *  },
 *  "Another-key":{...},
 *  "..."
 * @example
 * //Grab attribute "data-attribute" as "MyAttribute" if attribute not provided return "DefaultValue"
 * // Dom node <div data-attribute="someValue"></div>
 * "MyAttribute": {
 *      value: "DefaultValue",
 *      domAttr: "data-attribute"
 *  }
 *  //after processing we should have
 *  {"MyAttribute":"someValue"}
 *
 *  @example
 * //Grab attribute "data-attribute" as "MyAttribute" and return some value instead
 * //Dom node  <div data-attribute="someValue"></div>
 * "MyAttribute": {
 *      domAttr: "data-attribute",
 *      processor: function (node,val,self) {
 *          return val+"SomeCalculation";
 *      }
 *  }
 *  //after processing we should have
 *  {"MyAttribute":"someValueSomeCalculation"}
 *
 * @example
 * //return function as value
 * processAnswer: {
 *      "value": function (options) {
 *         return "someVal";
 *      }
 *  //after processing we should have
 *  {"processAnswer":function (options) {
 *         return "someVal";
 *      }
 *   }
 *
 * @example
 * //return init time as value
 * initTime: {
 *      "processor": function (node,val,self) {
 *         return new Date().getTime;
 *      }
 *  //after processing we should have
 *  {"initTime":1429808977404}
 * @example
 * //return other value instead of real one
 * processAnswer: {
 *      "processor": function (node,val,self) {
 *         return "someVal";
 *      }
 *  //after processing we should have
 *  {"processAnswer":"someVal"}
 */
BaseDOMConstructor.prototype.optionsToGrab = {};

/**
 * Grab all options that described in optionsToGrab
 * @param {Object} node domNode
 * @return {Object}
 */
BaseDOMConstructor.prototype.grabOptions = function (node) {
    var options = {};
    var currentOptionValue;
    var currentOption;
    for (var option in this.optionsToGrab) {
        currentOptionValue = null;
        if (this.optionsToGrab.hasOwnProperty(option)) {//if this is own option
            currentOption = this.optionsToGrab[option];
            if (currentOption.hasOwnProperty("value")) {//we have default option. Let's grab it for first
                currentOptionValue = currentOption.value;
            }

            if (this.sf.options.instances[this.name] && this.sf.options.instances[this.name].hasOwnProperty(option)) {
                currentOptionValue = this.sf.options.instances[this.name][option]
            }

            if (currentOption.hasOwnProperty("domAttr") && node.attributes.hasOwnProperty(currentOption.domAttr)) {//we can grab the attribute of node
                currentOptionValue = node.attributes[currentOption.domAttr].value;
            }

            if (currentOption.hasOwnProperty("processor")) {//we have processor. Let's execute it
                currentOptionValue = currentOption.processor.call(this, node, currentOptionValue, currentOption);
            }

            if (currentOptionValue !== null) {
                options[option] = currentOptionValue;
            }

        }
    }
    return options;
};

/**
 * Get addon for instance
 * @param {String} addonType type of addon (message,fill,etc)
 * @param {String} addonName name of addon
 */
BaseDOMConstructor.prototype.getAddon = function (addonType, addonName) {
    return this.spiral.instancesController.getInstanceAddon(this.name, addonType, addonName);
};

module.exports = BaseDOMConstructor;

},{}],3:[function(require,module,exports){
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
    var that =this;
    /**
     * Internal function for checking node class
     * @param {Object} node dom node
     */
    function checkNode(node) {
        classArray.forEach(function (className) {//loop over registered classes
            if (node.classList.contains(className)) {//if class match try to add or remove instance for this node
                that.instancesController[action](that.instancesController.getInstanceNameByCssClass(className), node);
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



},{}],4:[function(require,module,exports){
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
    eventArr.forEach(function(event){
        if (this._allowedEvents  && this._allowedEvents.indexOf(event) === -1){// event not inside allowed events
            console.warn("Events. Try to register event %s, but event is not allowed",event);
            return;
        }
        if (!this._storage.hasOwnProperty(events)) {
            this._storage[event] = [];
        }
        this._storage[event].push(callback);
    },this)

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
    //TODO
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
    if (this._allowedEvents  && this._allowedEvents.indexOf(event) === -1){// event not inside allowed events
        console.warn("Events. Try to trigger event %s, but event is not allowed",event);
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
},{}],5:[function(require,module,exports){
"use strict";

/**
 * Instance controller
 * @param spiral
 * @constructor
 */
var InstancesController = function (spiral) {
    this.spiral = spiral;
    if (!this.constructor){
        console.error("Please call InstancesController with new  - 'new InstancesController()' ");
        return;
    }
    this._storage = {
        instancesConstructors: {
            cssClasses:{},
            jsConstructors:{}
        },
        addons: {},
        instances: {}
    };

    //todo decide if we need this
    //["onAddInstance", "onRemoveInstance"]
    //this.events = new spiral.modules.core.Events();
};
/**
 * Register new instance type
 * @param {Function} constructorFunction - constructor function of instance
 * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically controlled by DomMutation. But you still can use it from JS.
 * @param {Boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.
 */
InstancesController.prototype.registerInstanceType = function (constructorFunction, cssClassName, isSkipInitialization) {
    var instanceName = constructorFunction.prototype.name;

    if (!instanceName){
        console.error("Instance constructor should have name inside it");
    }

    if (this._storage.instancesConstructors.jsConstructors.hasOwnProperty(instanceName)){
        console.error("Instance Constructor for type '%s' already added. Skipping",instanceName);
        return;
    }

    if (cssClassName){//add link (cssClassName->instanceName)
        this._storage.instancesConstructors.cssClasses[cssClassName] = instanceName;
    }

    this._storage.instancesConstructors.jsConstructors[instanceName] = constructorFunction;



    // if (this._storage.instancesConstructors.hasOwnProperty(className)){
    //    console.error("Instance Constructor for type %s already added. Skipping",constructorFunction.prototype.name);
    //    return;
    //}
    //this._storage.instancesConstructors[className] = {//init storage fields
    //    "typeName": constructorFunction.prototype.name,
    //    "constructor": constructorFunction
    //};
    this._storage.instances[instanceName] = [];
    if (!isSkipInitialization){
        var nodes = document.getElementsByClassName(cssClassName);//init add nodes with this class
        for (var i = 0, max = nodes.length; i < max; i++) {
            this.addInstance(instanceName, nodes[i]);
        }
    }

};

/**
 * Old method to register instance type
 * @param className
 * @param constructorFunction
 * @param isSkipInitialization
 * @deprecated
 */
InstancesController.prototype.addInstanceType =function(className,constructorFunction, isSkipInitialization){
    console.warn("addInstanceType is deprecated. Please use registerInstanceType instead");
    return this.registerInstanceType(constructorFunction, isSkipInitialization);
};


/**
 * Add instance
 * @param {String} instanceName - name of instance
 * @param {Object} node - dom node
 * @param {Object} [options] all options for send to the constructor
 * @returns {boolean}
 */
InstancesController.prototype.addInstance = function (instanceName, node, options) {
    var instanceConstructor = this._storage.instancesConstructors.jsConstructors[instanceName],
        isAlreadyAdded = this.getInstance(instanceName,node);
    if (!instanceConstructor || isAlreadyAdded) {//if not found this type  or already added - return
        return false;
    }
//    console.log("Adding instance for type -",instanceName,". Node - ",node);
    var instance = new instanceConstructor(this.spiral,node, options);
    this._storage.instances[instanceName].push({//add new instance of this type
        "node": node,
        "instance": instance
    });

    //this.events.trigger("onAddInstance", instance);

    return instance;
};
/**
 * Remove instance.
 * @param {String} instanceName - name of instance class
 * @param {Object|String} node - dom node ID
 * @returns {boolean}
 */
InstancesController.prototype.removeInstance = function (instanceName, node) {
    var instanceObj = this.getInstance(instanceName, node,true),
        key;
    if (!instanceObj) {
        return false;
    }
    instanceObj.instance.die();//avoid memory leak
    key = this._storage.instances[instanceName].indexOf(instanceObj);
    if (key !== -1){//remove key
        this._storage.instances[instanceName].splice(key, 1);
    }
    return true;
};
/**
 * Get instance. Return instance object of this dom node
 * @param {String} instanceName - name of instance
 * @param {Object|String} node - dom node o dome node ID
 * @param {boolean} [isReturnObject] - return object or instance
 * @returns {boolean}
 */
InstancesController.prototype.getInstance = function (instanceName, node, isReturnObject) {//TODO isReturnObject not needed. Refactor and remove
    var typeArr = this._storage.instances[instanceName],
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
 * Get instances. Return array of instances objects
 * @param {String} instanceName - name of instance
 * @returns {array|boolean}
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
InstancesController.prototype.registerAddon = function(addon, instanceName, addonType, addonName){
    if (!this._storage.addons.hasOwnProperty(instanceName)){
        this._storage.addons[instanceName] = {};
    }
    if (!this._storage.addons[instanceName].hasOwnProperty(addonType)){
        this._storage.addons[instanceName][addonType] = {};
    }
    if (this._storage.addons[instanceName][addonType].hasOwnProperty(addonName)){
        console.error("The %s addon type %s already registered for instance %s! Skipping registration.",addonName,addonType,instanceName);
        return;
    }
    this._storage.addons[instanceName][addonType][addonName]= addon;

};

/**
 * Get registered addon
 * @param {String} instanceName name of instance to register addon
 * @param {String} addonType type of addon (message,fill,etc)
 * @param {String} addonName name of addon (spiral, bootstrap,etc)
 */
InstancesController.prototype.getInstanceAddon =function(instanceName, addonType, addonName){
    if (!this._storage.addons.hasOwnProperty(instanceName) || !this._storage.addons[instanceName].hasOwnProperty(addonType) || !this._storage.addons[instanceName][addonType].hasOwnProperty(addonName)){
        return false;
    }
    return this._storage.addons[instanceName][addonType][addonName];
};


/**
 * Get all registered classes
 * @returns {Array}
 */
InstancesController.prototype.getClasses = function (){
    return Object.keys(this._storage.instancesConstructors.cssClasses);
};

/**
 * For given cssClass return name of instance
 * @param {String} cssClass
 * @return {*}
 */
InstancesController.prototype.getInstanceNameByCssClass = function(cssClass){
    return this._storage.instancesConstructors.cssClasses[cssClass];
};

/**
 * Get constructor by name or class name
 */
InstancesController.prototype.getInstanceConstructors = function (name){

   //TODO
};

module.exports = InstancesController;

},{}],6:[function(require,module,exports){
"use strict";

/**
 * This plugin adds ability to perform actions from the server.
 * "action":"reload"
 * "action":{"redirect":"/account"}
 * "action":{"redirect":"/account","delay":3000}
 * "action":{"name":"redirect","url":"/account","delay":3000}
 */
module.exports = function (sf) {
    sf.ajax.events.on('load', function (options) {
        var response = options.response;
        if (response.hasOwnProperty('action')) {
            if (typeof response.action === 'string') {//"action":"reload"
                sf.events.trigger(response.action);
            } else if (typeof response.action === 'object') {
                var keys = Object.keys(response.action);
                if (keys.indexOf('flash') !== -1){
                    var flash = response.action['flash'],
                        timestamp = Date.now(),
                        sfFlashMessage = {};
                    if (typeof response.action['flash'] === 'object'){
                        sfFlashMessage = flash;
                        sfFlashMessage.timestamp = timestamp;
                    } else {
                        sfFlashMessage = {
                            message: flash,
                            timestamp: timestamp
                        }
                    }
                    sessionStorage.setItem('sfFlashMessage', JSON.stringify(sfFlashMessage));
                }
                if (keys.indexOf('redirect') !== -1){
                    setTimeout(function () {
                        sf.events.trigger('redirect', response.action['redirect'], options);
                    }, +response.action.delay|0);
                } else if (keys.indexOf('name') !== -1) {
                    setTimeout(function () {
                        sf.events.trigger(response.action.name, response.action.url);
                    }, +response.action.delay || 0);
                }
                //if (keys.length === 1) {//"action":{"redirect":"/account"}
                //    sf.events.trigger(keys[0], response.action[keys[0]], options);
                //} else if (keys.length === 2 && response.action.delay) {//"action":{"redirect":"/account","delay":3000}
                //    setTimeout(function () {
                //        var action = keys.filter(function (value) {
                //            return value !== 'delay';
                //        })[0];
                //        sf.events.trigger(action, response.action[action], options);
                //    }, +response.action.delay);
                //} else if (keys.length > 1) {//"action":{"name":"redirect","url":"/account","delay":3000}
                //    setTimeout(function () {
                //        sf.events.trigger(response.action.name, response.action, options);
                //    }, +response.action.delay || 0);
                //} else {
                //    console.error("Action from server. Object doesn't have keys. ", response.action);
                //}
            } else {
                console.error("Action from server. Something wrong. ", response.action);
            }
        }
    });
    (function (sfFlashMessage) {
        if (!sfFlashMessage) return;
        var message  = JSON.parse(sfFlashMessage),
            timestamp = Date.now(),
            node,
            nodeWrapper,
            flashClass;
        if (timestamp - message.timestamp > 10000) return;
        if (message.type === 'debug' || message.type === 'success'){
            flashClass = 'debug'
        } else if (message.type === 'info' || !message.type || message.type === 'notice'){
            flashClass = 'info'
        } else {
            flashClass = 'danger'
        }
        node = document.createElement('div');
        nodeWrapper = document.createElement('div');
        nodeWrapper.classList.add('flash-wrapper');
        node.classList.add('flash', flashClass);
        node.innerHTML = message.message;
        document.body.appendChild(nodeWrapper);
        nodeWrapper.appendChild(node);
        setTimeout(function(){nodeWrapper.classList.add('show');}, 1);
        setTimeout(function(){nodeWrapper.classList.remove('show')}, message.timeout||5000);

        sessionStorage.removeItem('sfFlashMessage');
    }(sessionStorage.getItem('sfFlashMessage')))
};
},{}],7:[function(require,module,exports){
module.exports = function(events){
    events.on("redirect", function (event) {
        var url = Object.prototype.toString.call(event) === "[object String]" ? event : event.url;
        //http://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative
        window.location[/^(?:[a-z]+:)?\/\//i.test(url) ? 'href' : 'pathname'] = url;
    });

    events.on('reload', function () {
        location.reload();
    });

    events.on('refresh', function () {
        events.trigger('reload');
    });

    events.on('close', function () {
        window.close();
    });
};
},{}],8:[function(require,module,exports){
"use strict";
/**
 * Helper to manipulate DOM Events. It's a simple wrapper around "addEventListener" but it's store all functions and allow us to remove it all.
 * It's very helpful for die() method of instances
 * @TODO add to many nodes
 * @TODO new method like addEventListener  DOMEvents.on(node(s),event,callback,useCapture);
 * @constructor
 */
var DOMEvents = function(){
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
DOMEvents.prototype.add = function(eventArray){
    if (Object.prototype.toString.call([]) !== "[object Array]"){
        eventArray = [eventArray];
    }
    eventArray.forEach(function(val){
        val.useCapture=!!(val.useCapture);
        val.DOMNode.addEventListener(val.eventType,val.eventFunction,val.useCapture);
        this._DOMEventsStorage.push(val);
    },this)
};
/**
 * Remove events
 * @param {Array.<Object>} eventArray - event array
 * @param {Object} eventArray.DOMNode -   DOM node
 * @param {String} eventArray.eventType -   Event type
 * @param {Function} eventArray.eventFunction -   Function
 * @param {Boolean} [eventArray.useCapture=false] -   useCapture
 */
DOMEvents.prototype.remove = function(eventArray){
//TODO IMPLEMENT
    // TODO не уверен что этот метод необходим. если надо часто убирать какието обработчики, то лучше поставить обработчки на родителя
    console.warn("TODO IMPLEMENT");

};
/**
 * Remove all dom events registered with this instance (added by method add)
 * @example
 * //look at add method as first part of this code
 * DOMEventsInstance.removeAll();
 */
DOMEvents.prototype.removeAll = function(){
    this._DOMEventsStorage.forEach(function(val){
        val.DOMNode.removeEventListener(val.eventType,val.eventFunction,val.useCapture);
    });
    this._DOMEventsStorage=[];
};

module.exports = DOMEvents;
},{}],9:[function(require,module,exports){
"use strict";

/**
 * This object try to be easy as FormData.
 * Please note this is not(!) a shim for Form data, because it's impossible (you should set headers for Ajax by hands)
 * It take object and can convert it string like FormData do. Then you can send this string by Ajax or do some other staff.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/FormData
 * @param {Object} [data] object with data (supports nested objects)
 * @param {String} [boundary] boundary  for Form Data
 * @constructor
 * @example
 * var formData = new LikeFormData({testKey:"testValue"},"testBoundary");
 * formData.toString();
 * // Returns:
 * //"--testBoundary
 * //Content-Disposition: form-data; name=testKey
 * //
 * // testValue
 * //--testBoundary--
 * //"
 *
 * @example
 * var formData = new LikeFormData({testKey:"testValue"});
 * formData.toString();
 * // Returns:
 * //"--SpiralFormData-4935309085994959
 * //Content-Disposition: form-data; name=testKey
 * //
 * // testValue
 * //--SpiralFormData-4935309085994959--
 * //"
 *
 * @example
 * var formData = new LikeFormData({testKey:"testValue"});
 * formData.append("key2","val2");
 * formData.toString();
 * // Returns:
 * //--SpiralFormData-988681384595111
 * //Content-Disposition: form-data; name=testKey
 * //
 * //testValue
 * //--SpiralFormData-988681384595111
 * //Content-Disposition: form-data; name=key2
 * //
 * //val2
 * //--SpiralFormData-988681384595111--
 * //"
 */
var LikeFormData = function (data, boundary) {
    this.data = {};
    if (data) {
        if (Object.prototype.toString.call(data) !== "[object Object]") {//non object/ Alert developer
            console.warn("LikeFormData can't accept non Object. Please reefer to documentation. Problem parameter is:", data);
        } else {
            this.data = data;
        }
    }
    this.boundary = (boundary) ? boundary : ("SpiralFormData-" + Math.random().toString().substr(2));


    //if (!isOldIE) {
    //    this.boundary = "SpiralAjax-" + Math.random().toString().substr(2);
    //    //xhr.setRequestHeader("content-type", "multipart/form-data; charset=utf-8; boundary=" + this.boundary);
    //} else {
    //    this.boundary = "SpiralAjax-oldIE9876gsloiHGldowu";
    //}

};
/**
 * Append data to storage. Like standart FormData do.
 * @param {String} key
 * @param {String} val
 * @example
 * var formData = new FormData();
 * formData.append("key2","val2");
 */
LikeFormData.prototype.append = function (key, val) {
    //https://developer.mozilla.org/en-US/docs/Web/API/FormData
    //TODO ***Appends a new value**** onto an existing key inside a FormData object, or adds the key if it does not already exist.
    this.data[key] = val;
};

/**
 * convert to string
 * @example
 * var formData = new LikeFormData({testKey:"testValue"});
 * formData.toString();
 * // Returns:
 * //"--SpiralFormData-4935309085994959
 * //Content-Disposition: form-data; name=testKey
 * //
 * // testValue
 * //--SpiralFormData-4935309085994959--
 * //"
 */
LikeFormData.prototype.toString = function () {
    var retString = "";
    var boundary = this.boundary;
    var iterate = function (data, partOfKey) {
        for (var key in data) {
            if (data.hasOwnProperty(key) && (typeof data[key] !== "undefined" )) {
                if (typeof data[key] === "object") {
                    iterate(data[key], ((partOfKey.length === 0) ? key : (partOfKey + "[" + key + "]")));
                } else {
                    retString += "--" + boundary
                        + "\r\nContent-Disposition: form-data; name=" + ((partOfKey.length === 0) ? key : (partOfKey + "[" + key + "]"))
                        + "\r\n\r\n" + data[key] + "\r\n";
                }
            }
        }
    };
    if (typeof this.data !== "object") {
        this.data = {
            data: this.data
        }
    }
    iterate(this.data, "");


    retString += "--" + this.boundary + "--\r\n";
    return retString;
};

/**
 * The delete() method of the FormData interface deletes a key/value pair from a FormData object.
 * @param key
 */
LikeFormData.prototype.delete = function (key) {
    return delete(this.data[key]);
};


/**
 *The get() method of the FormData interface returns the first value associated with a given key from within a FormData object.
 * @param key
 */
LikeFormData.prototype.get = function (key) {
    return this.data[key];
};
/**
 *The getAll() method of the FormData interface returns the first value associated with a given key from within a FormData object.
 */
LikeFormData.prototype.getAll = function () {
    return this.data;
};

/**
 * The has() method of the FormData interface returns a boolean stating whether a FormData object contains a certain key/value pair.
 * @param key
 */
LikeFormData.prototype.has = function(key){
    return this.data.hasOwnProperty(key);
};

/**
 * The difference between set() and FormData.append is that if the specified header does already exist, set() will overwrite the existing value with the new one, whereas FormData.append will append the new value onto the end of the set of values.
 * @param val
 */
LikeFormData.prototype.set = function(val){
    this.data[key] = val;
};

/**
 * Get content header to set for Ajax. Not a part of standart FormData object. But for sending Like FormData over Ajax you should know header.
 * @return {string}
 * @example
 * var formData = new LikeFormData();
 * formData.getContentTypeHeader(); //return "multipart/form-data; charset=utf-8; boundary=SpiralFormData-988681384595111"
 * @example
 * var formData = new LikeFormData({key:"val2"},"testBoundary");
 * formData.getContentTypeHeader(); //return "multipart/form-data; charset=utf-8; boundary=testBoundary"
 */
LikeFormData.prototype.getContentTypeHeader = function () {
    return "multipart/form-data; charset=utf-8; boundary=" + this.boundary;

};


module.exports = LikeFormData;
},{}],10:[function(require,module,exports){
/**
 This is a collection of useful DOM tools.
 */

module.exports = {

    /**
     * Found first parent node with matched selector(s)
     * @param {Object} elem - dom node
     * @param {String|Array} selectors - selector or array of selectors
     * @returns {Object| Boolean} - node or false
     */

    closest: function (elem, selectors) {
        selectors = (typeof selectors === 'string') ? [selectors] : selectors;
        var key,
            l = selectors.length,
            matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
        while (elem && elem.parentNode) {
            for (key = 0; key < l; key++) {
                if (matchesSelector.call(elem, selectors[key])) {
                    return elem;
                }
            }
            elem = elem.parentNode;
        }
        return false;
    },
    /**
     * Found first parent node with matched className(s).
     * TODO Why this? Because old IE....
     * TODO It's not good, because it's a copy of closest @see closest. Refactor
     * @param {Object} elem - dom node
     * @param {String|Array} className - className or array of classNames
     * @returns {Object| Boolean} - node or false
     */

    closestByClassName: function (elem, className) {
        className = (typeof className === 'string') ? [className] : className;
        var key,
            l = className.length;
        //,matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
        while (elem && elem.parentNode) {
            for (key = 0; key < l; key++) {
                var reg = new RegExp("(\\s|^)" + className[key] + "(\\s|$)");
                if (elem.className.match(reg)) {
                    return elem;
                }
            }
            elem = elem.parentNode;
        }
        return false;
    }
};
},{}],11:[function(require,module,exports){
"use strict";

/**
 * @module tools
 * @namespace
 */
var tools = {
    /**
     * Merge multiple object into one object. Method will iterate over arguments and on conflict (key already exist in object) key will be overwrite
     * @param {Array} arguments
     * @param {Object} arguments.0 first object to merge
     * @param {Object} arguments.1 second object to merge
     * @param {Object} arguments.n n object to merge
     * @returns {Object}
     * @example
     * var obj1 = {
     *      key1:1
     * }
     * var obj2 = {
     *      key2:2
     * }
     * extend(obj1,obj2);  //return object {key1:1,key2:2}
     * @example
     * var obj1 = {
     *      key:1
     * }
     * var obj2 = {
     *      key:2
     * }
     * extend(obj1,obj2);  //return object {key:2}
     * @example
     * var obj1 = {
     *      key:1
     * }
     * var obj2 = {
     *      key:2
     * }
     * var obj3 = {
     *      key3:3
     * }
     * extend(obj1,obj2,obj3);  //return object {key:2,key3:3}
     *
     */
    extend: function () {
        var retObj = {};
        var attribute;
        for (var n = 0; n < arguments.length; n++) {
            if (Object.prototype.toString.call(arguments[n]) !== "[object Object]") {
                console.warn("Merging allowed only for objects. Passed value:", arguments[n]);
                continue;
            }
            for (attribute in arguments[n]) {
                retObj[attribute] = arguments[n][attribute];
            }
        }
        return retObj;
    }

};

module.exports = tools;
},{}],12:[function(require,module,exports){
"use strict";
//https://github.com/spiral/sf.js

//Add console shim for old IE
require("./shim/console");
require("./shim/Object.assign");

var _sf;

if (typeof sf !== 'undefined' && Object.prototype.toString.call(sf) === "[object Object]") {
    _sf = Object.assign(sf, require("./sf"));
} else {
    _sf = require("./sf");
}

if (!_sf.hasOwnProperty('options')) _sf.options = {instances:{}};
if (!_sf.options.hasOwnProperty('instances')) _sf.options.instances = {};

//todo delete this in future
if (!window.hasOwnProperty("sf")) {//bind only if  window.sf is empty to avoid conflicts with other libs
    window.sf = _sf;
}

_sf.instancesController = new _sf.core.InstancesController(sf);
_sf.domMutation = new _sf.core.DomMutations(_sf.instancesController);

//Events system
_sf.events = new _sf.core.Events();
require("./core/events/baseEvents.js")(_sf.events);

//AJAX
_sf.ajax = new _sf.core.Ajax(window.csrfToken ? {//TODO move to spiral bindings
    headers: {
        "X-CSRF-Token": window.csrfToken
    }
} : null);
require("./core/ajax/baseActions.js")(_sf);

//API
_sf.createModulePrototype = function() { return Object.create(sf.modules.core.BaseDOMConstructor.prototype)};
_sf.registerInstanceType = _sf.instancesController.registerInstanceType.bind(_sf.instancesController);
_sf.addInstance = _sf.instancesController.addInstance.bind(_sf.instancesController);
_sf.removeInstance = _sf.instancesController.removeInstance.bind(_sf.instancesController);
_sf.getInstance = _sf.instancesController.getInstance.bind(_sf.instancesController);
_sf.getInstances = _sf.instancesController.getInstances.bind(_sf.instancesController);

_sf.closest = sf.helpers.domTools.closest;

if (typeof exports === "object" && exports) {
    module.exports = _sf;
}
},{"./core/ajax/baseActions.js":6,"./core/events/baseEvents.js":7,"./sf":13,"./shim/Object.assign":14,"./shim/console":15}],13:[function(require,module,exports){
var core = {
    Ajax: require("./core/Ajax"),
    BaseDOMConstructor: require("./core/BaseDOMConstructor"),
    DomMutations: require("./core/DomMutations"),
    Events: require("./core/Events"),
    InstancesController: require("./core/InstancesController")
};

var helpers = {
    DOMEvents: require("./helpers/DOMEvents"),
    domTools: require("./helpers/domTools"),
    LikeFormData: require("./helpers/LikeFormData"),
    tools: require("./helpers/tools")
};

var sf = {
    core: core,
    helpers: helpers,
    tools: helpers.tools,
    modules: {//todo remove this when removed in dependencies
        'WILL_BE_DEPRECATED': true,
        core: core,
        helpers: helpers
    }
};

module.exports = sf;
},{"./core/Ajax":1,"./core/BaseDOMConstructor":2,"./core/DomMutations":3,"./core/Events":4,"./core/InstancesController":5,"./helpers/DOMEvents":8,"./helpers/LikeFormData":9,"./helpers/domTools":10,"./helpers/tools":11}],14:[function(require,module,exports){
/**
 * Object.assign polyfill
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
if (typeof Object.assign != 'function') {
    (function () {
        Object.assign = function (target) {
            'use strict';
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && source !== null) {
                    for (var nextKey in source) {
                        if (source.hasOwnProperty(nextKey)) {
                            output[nextKey] = source[nextKey];
                        }
                    }
                }
            }
            return output;
        };
    })();
}
},{}],15:[function(require,module,exports){
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

},{}]},{},[12])


//# sourceMappingURL=sf.js.map
