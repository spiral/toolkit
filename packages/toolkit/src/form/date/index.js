
const sf = require('@spiral-toolkit/core').default;
const Date = require('./date').default;

sf.instancesController.registerInstanceType(Date, 'js-sf-date');
module.exports = sf; // This index file is entry point, so should re-export sf
