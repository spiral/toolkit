
const sf = require('@spiral-toolkit/core');
const Lock = require('./Lock').default;

sf.registerInstanceType(Lock);

module.exports = Lock; // ES6 default export will not expose us as global
