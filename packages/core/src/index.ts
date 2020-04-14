import { attachDefaultActions } from './core/ajax/baseActions';
import { registerBaseEvents } from './core/events/baseEvents';
import { core, tools, helpers } from './sf';
import type { ISpiralFramework } from './types';

const options = { instances: {} };

const sfWrapper: Partial<ISpiralFramework> = {
  core,
  helpers,
  tools,
  options,
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

export * from './formInput';
