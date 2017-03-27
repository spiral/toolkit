"use strict";
import sf from "sf-core";
import Datetime from "./datetime";

sf.instancesController.registerInstanceType(Datetime, "sf-js-datetime");
module.exports = Datetime;   // ES6 default export will not expose us as global
