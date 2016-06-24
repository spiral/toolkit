"use strict";
import sf from 'sf';//resolved in webpack's "externals"
import Datetime from './datetime';

require("style!css?minimize!../../node_modules/pikaday/css/pikaday.css");

sf.instancesController.registerInstanceType(Datetime, "sf-js-datetime");
module.exports = Datetime;   // ES6 default export will not expose us as global