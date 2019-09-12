"use strict";
var sf = require("@spiral-toolkit/core");
var Input = require("./input").default;

sf.instancesController.registerInstanceType(Input, "sf-js-input");
module.exports = Input; // ES6 default export will not expose us as global
