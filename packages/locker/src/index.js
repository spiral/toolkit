
const sf = require('@spiral-toolkit/core').default;
const Lock = require('./Lock').default;

sf.registerInstanceType(Lock);

module.exports = Lock; // ES6 default export will not expose us as global
