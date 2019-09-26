/* eslint-disable global-require */

const core = {
  Ajax: require('./core/Ajax'),
  BaseDOMConstructor: require('./core/BaseDOMConstructor'),
  DomMutations: require('./core/DomMutations'),
  Events: require('./core/Events'),
  InstancesController: require('./core/InstancesController'),
};

const helpers = {
  DOMEvents: require('./helpers/DOMEvents'),
  domTools: require('./helpers/domTools'),
  // LikeFormData: require('./helpers/LikeFormData'),
  // tools: require('./helpers/tools'),
};

const sf = {
  core,
  helpers,
  tools: require('./helpers/tools'),
};

module.exports = sf;
