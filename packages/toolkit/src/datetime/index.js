"use strict";
var sf = require("@spiral-toolkit/core");
var Datetime = require("./datetime").default;

sf.instancesController.registerInstanceType(Datetime, "sf-js-datetime");
module.exports = Datetime;   // ES6 default export will not expose us as global
