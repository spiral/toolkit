"use strict";
var sf = require('@spiral-toolkit/core');
var Lock = require('./Lock').default;

sf.registerInstanceType(Lock);

module.exports = Lock; // ES6 default export will not expose us as global
