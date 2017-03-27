"use strict";
import sf from "sf-core";
import FileInput from "./fileinput";

sf.instancesController.registerInstanceType(FileInput, "sf-js-file-input");
module.exports = FileInput;   // ES6 default export will not expose us as global
