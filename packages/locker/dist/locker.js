!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@spiral-toolkit/core")):"function"==typeof define&&define.amd?define("@spiral-toolkit/locker",["@spiral-toolkit/core"],t):"object"==typeof exports?exports["@spiral-toolkit/locker"]=t(require("@spiral-toolkit/core")):e["@spiral-toolkit/locker"]=t(e["@spiral-toolkit/core"])}(window,(function(e){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=1)}([function(t,o){t.exports=e},function(e,t,o){e.exports=o(2)},function(e,t,o){const r=o(0),n=o(3).default;r.registerInstanceType(n),e.exports=n},function(e,t,o){"use strict";o.r(t);var r=o(0);const n=function(e,t,o){this._construct(e,t,o)};(n.prototype=o.n(r).a.createModulePrototype()).name="lock",n.prototype._construct=function(e,t,o){this.init(e,t,o),this.add(this.options.type,this.node)},n.prototype.add=function(e,t){if(!this.types.hasOwnProperty(e))return!1;const o=document.createElement("div");return o.className=this.types[e].className||"js-sf-lock",o.innerHTML=this.types[e].html,t.appendChild(o),t.classList.add("locked"),this.types[e].progress},n.prototype.die=function(){this.remove()},n.prototype.remove=function(){this.node.classList.remove("locked");const e=this.node.querySelector(".js-sf-lock");return e&&this.node.removeChild(e),!0},n.prototype.types={spinner:{html:'<div class="sf-spinner"></div>'},progress:{html:'<div class="sf-progress"><div class="progress-line"></div></div>',progress(e,t){this.context.getElementsByClassName("progress-line")[0].style.width=`${e/t*100}%`}}},n.prototype.types.default=n.prototype.types.spinner,t.default=n}])}));
//# sourceMappingURL=locker.js.map