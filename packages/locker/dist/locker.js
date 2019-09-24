!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@spiral-toolkit/core")):"function"==typeof define&&define.amd?define("@spiral-toolkit/locker",["@spiral-toolkit/core"],e):"object"==typeof exports?exports["@spiral-toolkit/locker"]=e(require("@spiral-toolkit/core")):t["@spiral-toolkit/locker"]=e(t["@spiral-toolkit/core"])}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){t.exports=n(2)},function(t,e,n){const r=n(0),o=n(3).default;r.registerInstanceType(o),t.exports=o},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);n(4);const s=function(t,e,n){this._construct(t,e,n)};(s.prototype=o.a.createModulePrototype()).name="lock",s.prototype._construct=function(t,e,n){this.init(t,e,n),this.add(this.options.type,this.node)},s.prototype.add=function(t,e){if(!this.types.hasOwnProperty(t))return!1;const n=document.createElement("div");return n.classList.add(this.types[t].className||"js-sf-lock"),n.classList.add("locker"),n.innerHTML=this.types[t].html,e.appendChild(n),e.classList.add("locked"),this.types[t].progress},s.prototype.die=function(){this.remove()},s.prototype.remove=function(){this.node.classList.remove("locked");const t=this.node.querySelector(".js-sf-lock");return t&&this.node.removeChild(t),!0},s.prototype.types={spinner:{html:'<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'},progress:{html:'<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"></div></div>',progress(t,e){this.context.getElementsByClassName("progress-bar")[0].style.width=`${t/e*100}%`}}},s.prototype.types.default=s.prototype.types.spinner,e.default=s},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(7)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!0)).push([t.i,".locked .form-content {\n  pointer-events: none;\n  filter: blur(3px);\n  opacity: .7;\n}\n\n.locker {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  text-align: center;\n}\n","",{version:3,sources:["styles.css"],names:[],mappings:"AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,UAAU;EACV,kBAAkB;AACpB",file:"styles.css",sourcesContent:[".locked .form-content {\n  pointer-events: none;\n  filter: blur(3px);\n  opacity: .7;\n}\n\n.locker {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  text-align: center;\n}\n"]}])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),s=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(s).concat([o]).join("\n")}var i,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){"use strict";var r,o={},s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],s=o[r.id],i=0;if(s){for(s.refs++;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(y(r.parts[i],e))}else{for(var a=[];i<r.parts.length;i++)a.push(y(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,p=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var s=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function d(t,e,n){var r=n.css,o=n.media,s=n.sourceMap;if(o&&t.setAttribute("media",o),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,v=0;function y(t,e){var n,r,o;if(e.singleton){var s=v++;n=h||(h=l(e)),r=f.bind(null,n,s,!1),o=f.bind(null,n,s,!0)}else n=l(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=a(t,e);return c(n,e),function(t){for(var r=[],s=0;s<n.length;s++){var i=n[s],l=o[i.id];l&&(l.refs--,r.push(l))}t&&c(a(t,e),e);for(var u=0;u<r.length;u++){var p=r[u];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete o[p.id]}}}}}])}));
//# sourceMappingURL=locker.js.map