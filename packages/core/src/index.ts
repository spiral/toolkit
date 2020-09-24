import { attachDefaultActions } from './core/ajax/baseActions';
import { registerBaseEvents } from './core/events/baseEvents';
import {
  core, tools, helpers, registerTool,
} from './sf';
import type { ISpiralFramework } from './types';
import * as constants from './constants';

const options = { instances: {} };

// Includes version and time in bundle
export const version = `Version ${process.env.VERSION}, built at ${process.env.BUILD_TIME}`;

const sfWrapper: Partial<ISpiralFramework> = {
  core,
  helpers,
  registerTool,
  constants,
  tools,
  options,
  version,
};


sfWrapper.instancesController = new core.InstancesController(sfWrapper as ISpiralFramework);
sfWrapper.domMutation = new core.DomMutations(sfWrapper.instancesController!);

// Events system
sfWrapper.events = new core.Events();
registerBaseEvents(sfWrapper.events!);

// AJAX
sfWrapper.ajax = new core.Ajax(window && (window as any).csrfToken ? {
  // TODO move to spiral bindings
  headers: {
    'X-CSRF-Token': (window as any).csrfToken,
  },
} : undefined);

// ACTIONS
attachDefaultActions(sfWrapper.ajax!, sfWrapper.events!);

// API
sfWrapper.createModulePrototype = function () {
  return Object.create(core.BaseDOMConstructor.prototype);
};

sfWrapper.registerInstanceType = sfWrapper.instancesController!.registerInstanceType.bind(sfWrapper.instancesController);
sfWrapper.addInstance = sfWrapper.instancesController!.addInstance.bind(sfWrapper.instancesController);
sfWrapper.removeInstance = sfWrapper.instancesController!.removeInstance.bind(sfWrapper.instancesController);
sfWrapper.getInstance = sfWrapper.instancesController!.getInstance.bind(sfWrapper.instancesController);
sfWrapper.getInstances = sfWrapper.instancesController!.getInstances.bind(sfWrapper.instancesController);

sfWrapper.closest = helpers.domTools.closest;
sfWrapper.resolveKeyPath = tools.resolveKeyPath;

export default (sfWrapper as ISpiralFramework);

export * from './types';
