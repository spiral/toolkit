"use strict";
import sf from "sf-core";
import Date from "./date";

require("style!css?minimize!../../node_modules/pikaday/css/pikaday.css");

sf.instancesController.registerInstanceType(Date, "sf-js-date");
module.exports = Date;   // ES6 default export will not expose us as global