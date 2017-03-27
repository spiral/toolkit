"use strict";
import sf from "sf-core"; //resolved in webpack's "externals"
import FileInput from "./fileinput";

sf.instancesController.registerInstanceType(FileInput, "sf-js-file-input");
module.exports = FileInput;   // ES6 default export will not expose us as global