#sf.js Spiral Frontend micro-framework (alpha)

[![Build Status](https://travis-ci.org/sfjs/sf.js.svg?branch=master)](https://travis-ci.org/sfjs/sf.js)
[![devDependency Status](https://david-dm.org/sfjs/sf.js/dev-status.svg)](https://david-dm.org/sfjs/sf.js#info=devDependencies)



sf.js has been made to auto init javascript modules/components/plugins.

Based on [DOM Mutations](https://developer.mozilla.org/en/docs/Web/API/MutationObserver)

## API
### Instances

-- **sf.createModulePrototype()** - creates prototype of new instance

-- **sf.registerInstanceType(constructorFunction, cssClassName, isSkipInitialization)** - register new instance type
 * @param {Function} constructorFunction - constructor function of instance
 * @param {String} [cssClassName] - css class name of instance. If class not provided that it can't be automatically controlled by DomMutation. But you still can use it from JS.
 * @param {Boolean} [isSkipInitialization=false]  - skip component initialization, just adding, no init nodes.

-- **sf.addInstance(instanceName, node, options)** - add instance
 * @param {String} instanceName - name of instance
 * @param {Object} node - dom node
 * @param {Object} [options] all options for send to the constructor
 * @returns {boolean}
 
-- **sf.removeInstance(instanceName, node)** - remove instance
 * @param {String} instanceName - name of instance class
 * @param {Object|String} node - dom node ID
 * @returns {boolean}
 
-- **sf.getInstance(instanceName, node)** - get instance. Return instance object of this dom node
 * @param {String} instanceName - name of instance
 * @param {Object|String} node - dom node o dome node ID
 * @param {boolean} [isReturnObject] - return object or instance
 * @returns {boolean}
 
-- **sf.getInstances(instanceName)** - get instances. Return array of instances objects
 * @param {String} instanceName - name of instance
 * @returns {array|boolean}
 
### Helpers
-- **sf.closest(elem, selectors)** - found first parent node with matched selector(s)
 * @param {Object} elem - dom node
 * @param {String|Array} selectors - selector or array of selectors
 * @returns {Object| Boolean} - node or false

#Examples:
## sf.js includes ajax-form module by default
```html
    <script src="sf.min.js"></script>
    <form class="js-sf-form" action="/someAPI">
        <label class="item-form">
            <span class="item-label">Email</span>
            <input type="text" name="email" class="item-input"/>
        </label>
        <label class="item-form">
            <span class="item-label">Password</span>
            <input type="text" name="password" class="item-input"/>
        </label>
        <button>Send</button>
    </form>
```

## Custom module example (image cropper library)
```html
    <script src="sf.min.js"></script>
    <script src="crop.sf.js"></script>
    <form class="js-sf-form" action="/someAPI">
        <input type="file" class="js-sf-crop"> 
        <button>Send</button>
    </form>
```

#How it works (in short)
Each module is a constructor function and should be registered in sf.js
```javascript
var Crop = function (sf, node, options) {
    this._construct(sf, node, options);
};
Crop.prototype = Object.create(sf.modules.core.BaseDOMConstructor.prototype);
...
sf.instancesController.registerInstanceType(Crop,"js-sf-crop");
```

Then, instancesController looks at DOM, and initialize new instance of module for each matched DOM node.  
Also it will init new instances if DOM node will be added later.

#todo documentation #14

## License

Copyright (c) 2015-2016 Andrew Logunov and contributors. Released under an MIT license.
