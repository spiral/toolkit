"use strict";
var sf = require("sf-core");
var FileInput = require("./fileinput").default;

sf.instancesController.registerInstanceType(FileInput, "sf-js-file-input");
module.exports = FileInput;   // ES6 default export will not expose us as global
