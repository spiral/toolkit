"use strict";
var sf = require('@spiral-toolkit/core');
var Form = require('./Form').default;

sf.registerInstanceType(Form, "js-sf-form");

module.exports = Form; // ES6 default export will not expose us as global
