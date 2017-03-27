"use strict";
import sf from "sf-core"; //resolved in webpack's "externals"
import Input from "./input";

sf.instancesController.registerInstanceType(Input, "sf-js-input");
module.exports = Input;   // ES6 default export will not expose us as global