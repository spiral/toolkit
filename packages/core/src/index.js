/* eslint-disable global-require */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */

/**
 * Provides a spiral-specific sf bundle
 * TODO: This wrapping looks very fishy, why we need it? Move to toolkit may be?
 */
const sf = require('./sf');

const sfWrapper = {
  core: sf.core,
  helpers: sf.helpers,
  tools: sf.tools,
};

// Add console shim for old IE
require('./shim/console');
require('./shim/Object.assign');

// if (typeof Promise !== 'function') {
//   // eslint-disable-next-line no-unused-vars
//   const { Promise } = require('es6-promise');
// }

if (!sfWrapper.hasOwnProperty('options')) sfWrapper.options = { instances: {} };
if (!sfWrapper.options.hasOwnProperty('instances')) sfWrapper.options.instances = {};

// TODO delete this in future
if (window && !window.hasOwnProperty('sf')) { // bind only if  window.sf is empty to avoid conflicts with other libs
  window.sf = sfWrapper;
}

sfWrapper.instancesController = new sfWrapper.core.InstancesController(sfWrapper);
sfWrapper.domMutation = new sfWrapper.core.DomMutations(sfWrapper.instancesController);

// Events system
sfWrapper.events = new sfWrapper.core.Events();
require('./core/events/baseEvents.js')(sfWrapper.events);

// AJAX
sfWrapper.ajax = new sfWrapper.core.Ajax(window && window.csrfToken ? {
  // TODO move to spiral bindings
  headers: {
    'X-CSRF-Token': window.csrfToken,
  },
} : null);

// ACTIONS
require('./core/ajax/baseActions.js')(sfWrapper);

// API
sfWrapper.createModulePrototype = function () {
  return Object.create(sfWrapper.core.BaseDOMConstructor.prototype);
};

sfWrapper.registerInstanceType = sfWrapper.instancesController.registerInstanceType.bind(sfWrapper.instancesController);
sfWrapper.addInstance = sfWrapper.instancesController.addInstance.bind(sfWrapper.instancesController);
sfWrapper.removeInstance = sfWrapper.instancesController.removeInstance.bind(sfWrapper.instancesController);
sfWrapper.getInstance = sfWrapper.instancesController.getInstance.bind(sfWrapper.instancesController);
sfWrapper.getInstances = sfWrapper.instancesController.getInstances.bind(sfWrapper.instancesController);

sfWrapper.closest = sf.helpers.domTools.closest;
sfWrapper.resolveKeyPath = sf.tools.resolveKeyPath;

module.exports = sfWrapper;
