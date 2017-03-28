"use strict";
import sf from "sf-core";
import Input from "./input";

var sf2 = require('sf-core');
import * as sf3 from 'sf-core';

console.log(sf, sf2, sf3);

debugger;

sf.instancesController.registerInstanceType(Input, "sf-js-input");
module.exports = Input; // ES6 default export will not expose us as global
