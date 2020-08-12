// @ts-ignore
const sf = require('@spiral-toolkit/core').default;
const Input = require('./input').default;

sf.instancesController.registerInstanceType(Input, 'js-sf-input');
module.exports = Input; // ES6 default export will not expose us as global
