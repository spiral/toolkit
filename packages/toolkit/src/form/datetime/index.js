
const sf = require('@spiral-toolkit/core').default;
const Datetime = require('./datetime').default;

sf.instancesController.registerInstanceType(Datetime, 'js-sf-datetime');
module.exports = Datetime; // ES6 default export will not expose us as global
