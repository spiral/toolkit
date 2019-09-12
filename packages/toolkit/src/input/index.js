
const sf = require('@spiral-toolkit/core');
const Input = require('./input').default;

sf.instancesController.registerInstanceType(Input, 'sf-js-input');
module.exports = Input; // ES6 default export will not expose us as global
