!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@spiral-toolkit/core")):"function"==typeof define&&define.amd?define("@spiral-toolkit/form",["@spiral-toolkit/core"],t):"object"==typeof exports?exports["@spiral-toolkit/form"]=t(require("@spiral-toolkit/core")):e["@spiral-toolkit/form"]=t(e["@spiral-toolkit/core"])}(window,(function(__WEBPACK_EXTERNAL_MODULE__0__){return function(e){var t={};function s(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=e,s.c=t,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=2)}([function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE__0__},function(e,t){var s=function(e){return!!e&&(this.formRef=e,this.keyRegex=/[^\[\]]+/g,this.$form=null,this.$formElements=[],this.formObj={},!!this.setForm()&&(!!this.setFormElements()&&this.setFormObj()))};s.prototype.setForm=function(){switch(typeof this.formRef){case"string":this.$form=document.getElementById(this.formRef);break;case"object":this.isDomNode(this.formRef)&&(this.$form=this.formRef)}return this.$form},s.prototype.setFormElements=function(){return this.$formElements=this.$form.querySelectorAll("input, textarea, select"),this.$formElements.length},s.prototype.isDomNode=function(e){return"object"==typeof e&&"nodeType"in e&&1===e.nodeType},s.prototype.forEach=function(e,t){if([].forEach)return[].forEach.call(e,t);var s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(e,e[s])},s.prototype.addChild=function(e,t,s,o){if(1===s.length){if("INPUT"===t.nodeName&&"radio"===t.type)return t.checked?e[s]=o:void 0;if("INPUT"===t.nodeName&&"checkbox"===t.type)return t.checked?(e[s]||(e[s]=[]),e[s].push(o)):void 0;if("SELECT"===t.nodeName&&"select-multiple"===t.type){e[s]=[];var r=t.querySelectorAll("option[selected]");return void(r&&this.forEach(r,(function(t){e[s].push(t.value)})))}e[s]=o}return s.length>1?(e[s[0]]||(e[s[0]]={}),this.addChild(e[s[0]],t,s.splice(1,s.length),o)):e},s.prototype.setFormObj=function(){var e,t=0;for(t=0;t<this.$formElements.length;t++)this.$formElements[t].name&&!this.$formElements[t].disabled&&(e=this.$formElements[t].name.match(this.keyRegex),this.addChild(this.formObj,this.$formElements[t],e,this.$formElements[t].value));return this.formObj},e.exports=s},function(e,t,s){e.exports=s(3)},function(e,t,s){"use strict";var o=s(0),r=s(4).default;o.registerInstanceType(r,"js-sf-form"),e.exports=r},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0__),_formToObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_formToObject__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_formToObject__WEBPACK_IMPORTED_MODULE_1__),formMessages=__webpack_require__(5),iterateInputs=__webpack_require__(6),Form=function(e,t,s){this._construct(e,t,s)};Form.prototype=_spiral_toolkit_core__WEBPACK_IMPORTED_MODULE_0___default.a.createModulePrototype(),Form.prototype.name="form",Form.prototype._construct=function(e,t,s){this.init(e,t,s),this.mixMessagesOptions(),this.DOMEvents=new this.sf.helpers.DOMEvents,this.addEvents(),this.events=new this.sf.core.Events(["beforeSend","success","error","always"]),e.iterateInputs=iterateInputs},Form.prototype.optionsToGrab={context:{processor:function(e,t){return e}},self:{processor:function(e,t){return this}},url:{domAttr:"action",value:"/"},method:{domAttr:"method",value:"POST"},lockType:{value:"default",domAttr:"data-lockType"},messagesType:{value:"spiral",domAttr:"data-messagesType"},messages:{value:"",domAttr:"data-messages",processor:function(e,t,s){if(!t)return this.value;if("string"==typeof t)try{t=JSON.parse(t)}catch(e){console.error("Form JSON.parse error: ",e)}return Object.assign(s.value,t)}},useAjax:{value:!0,domAttr:"data-useAjax",processor:function(e,t){return"boolean"==typeof t?t:("false"===(t=null!=t?t.toLowerCase():"")?t=!1:"true"===t&&(t=!0),t)}},ajaxCallback:{value:!1,domAttr:"data-callback"},beforeSubmitCallback:{value:!1,domAttr:"data-before-submit"},afterSubmitCallback:{value:!1,domAttr:"data-after-submit"},headers:{value:{Accept:"application/json"},domAttr:"data-headers",processor:function(e,t,s){if(void 0===t||null==t)return this.value;if("string"==typeof t)try{t=JSON.parse(t)}catch(e){console.error("Form JSON.parse error: ",e)}return Object.assign(s.value,t)}}},Form.prototype.mixMessagesOptions=function(){var e=this.sf.options.instances.form;this.options.messages=Object.assign({},formMessages.defaults,e&&e.messages&&e.messages[this.options.messagesType],this.options.messages)},Form.prototype.onSubmit=function(e){if(this.sf.getInstance("lock",this.node))return e.preventDefault(),void e.stopPropagation();this.removeMessages(),this.options.data=this.getFormData(),window.FormData||0===this.options.context.querySelectorAll("input[type='file']").length||(this.options.useAjax=!1),this.events.trigger("beforeSend",this.options),this.options.useAjax&&(this.send(this.options),e.preventDefault(),e.stopPropagation())},Form.prototype.lock=function(e){this.options.lockType&&"none"!==this.options.lockType&&(e?this.sf.removeInstance("lock",this.node)||console.warn("You try to remove 'lock' instance, but it is not available or not started"):this.sf.addInstance("lock",this.node,{type:this.options.lockType})||console.warn("You try to add 'lock' instance, but it is not available or already started"))},Form.prototype.showFormMessage=formMessages.showFormMessage,Form.prototype.showFieldMessage=formMessages.showFieldMessage,Form.prototype.showFieldsMessages=formMessages.showFieldsMessages,Form.prototype.showMessages=formMessages.showMessages,Form.prototype.removeMessages=formMessages.removeMessages,Form.prototype.removeMessage=formMessages.removeMessage,Form.prototype.processAnswer=function(e){this.options.messagesType&&this.showMessages(e)},Form.prototype.send=function(sendOptions){var that=this;if(this.lock(),sendOptions.beforeSubmitCallback){var fn=eval(sendOptions.beforeSubmitCallback);"function"==typeof fn&&fn.call(sendOptions)}this.sf.ajax.send(sendOptions).then((function(e){return that.events.trigger("success",sendOptions),e}),(function(e){return that.events.trigger("error",sendOptions),e})).then((function(e){that.lock(!0),that.processAnswer(e),that.events.trigger("always",sendOptions)}))},Form.prototype.getFormData=function(){return window.FormData?new FormData(this.options.context):(console.log("Form `"+this.options.context+"` were processed without FormData."),new _formToObject__WEBPACK_IMPORTED_MODULE_1___default.a(this.options.context))},Form.prototype.setOptions=function(e){this.options=Object.assign(this.options,e)},Form.prototype.addEvents=function(){var e=this;this.DOMEvents.add([{DOMNode:this.options.context,eventType:"submit",eventFunction:function(t){e.onSubmit.call(e,t)}}])},Form.prototype.die=function(){this.DOMEvents.removeAll()},__webpack_exports__.default=Form},function(e,t,s){"use strict";var o={template:'<div class="alert form-msg ${type}"><button class="btn-close">×</button><p class="msg">${text}</p></div>',close:".btn-close",place:"bottom",levels:{success:"success",info:"info",warning:"warning",error:"error"},field:".item-form",fieldTemplate:'<div class="alert form-msg ${type}"><p class="msg">${text}</p></div>',fieldClose:".btn-close",fieldPlace:"bottom",fieldPrefix:""};function r(e,t){return"[object Object]"!==Object.prototype.toString.call(e)&&(e={text:e,type:t}),e.text=e.text||e.message||e,e.type=e.type||t,e}o.levels.message=o.levels.success,o.levels.debug=o.levels.success,o.levels.info=o.levels.notice=o.levels.info,o.levels.danger=o.levels.critical=o.levels.alert=o.levels.emergency=o.levels.error,e.exports={defaults:o,showMessages:function(e){if(e){var t=!1,s=this;for(var o in this.options.messages.levels)e[o]&&(this.showFormMessage(e[o],this.options.messages.levels[o]),t=!0);if(e.messages&&(this.showFieldsMessages(e.messages,"success"),t=!0),e.errors&&(this.showFieldsMessages(e.errors,"error"),t=!0),e.warnings&&(this.showFieldsMessages(e.warnings,"warning"),t=!0),!t&&e.status>300){var r=e.status?e.status+" ":"";r+=e.statusText?e.statusText:"",r+=e.data&&!e.statusText?e.data:"",r+=0===r.length?e:"",this.showFormMessage(r,"error")}this._messages.forEach((function(e){e.close&&(e.closeHandler=s.removeMessage.bind(s,e),e.close.addEventListener("click",e.closeHandler))}))}},removeMessage:function(e,t){e.close&&e.close.removeEventListener("click",e.closeHandler),e.el.parentNode.removeChild(e.el),e.field&&e.field.classList.remove(this.options.messages.fieldPrefix+e.type),t&&(t.preventDefault&&t.preventDefault(),this._messages.splice(this._messages.indexOf(e),1))},removeMessages:function(){var e=this;this._messages&&this._messages.forEach((function(t){e.removeMessage(t,!1)})),e._messages=[]},showFormMessage:function(e,t){var s,o=this.options.messages.template,i=new DOMParser;for(var n in e=r(e,t)){if(!e.hasOwnProperty(n))return;o=o.replace("${"+n+"}",e[n])}s=i.parseFromString(o,"text/html").firstChild.lastChild.firstChild,"bottom"===this.options.messages.place?this.node.appendChild(s):"top"===this.options.messages.place?this.node.insertBefore(s,this.node.firstChild):document.querySelector(this.options.messages.place).appendChild(s),this._messages.push({el:s,close:s.querySelector(this.options.messages.close)})},showFieldMessage:function(e,t,s,o){var i,n=o?e:sf.helpers.domTools.closest(e,this.options.messages.field),a=this.options.messages.fieldTemplate;if(n){var l=new DOMParser;for(var c in t=r(t,s),n.classList.add(this.options.messages.fieldPrefix+s),t){if(!t.hasOwnProperty(c))return;a=a.replace("${"+c+"}",t[c])}i=l.parseFromString(a,"text/html").firstChild.lastChild.firstChild,"bottom"===this.options.messages.fieldPlace?n.appendChild(i):"top"===this.options.messages.fieldPlace?n.insertBefore(i,n.firstChild):(n=n.querySelector(this.options.messages.fieldPlace)).appendChild(i),this._messages.push({el:i,close:i.querySelector(this.options.messages.fieldClose),field:n,type:s})}},showFieldsMessages:function(e,t){var s=this;sf.iterateInputs(this.node,e,(function(e,o){s.showFieldMessage(e,o,t)})).forEach((function(e){Object.keys(e).forEach((function(o){var r=s.node.querySelector('[data-message-placeholder="'+o+'"]');r&&s.showFieldMessage(r,e[o],t,!0)}))}))}}},function(e,t,s){"use strict";var o=[];e.exports=function(e,t,s,r){return o=[],function e(t,s,r,i){for(var n in s)if(s.hasOwnProperty(n)){var a=i?i+"["+n+"]":n,l=Object.prototype.toString.call(s[n]),c="[name='"+a+"']";switch(l){case"[object Object]":e(t,s[n],r,a);break;case"[object Array]":s[n].forEach((function(e){var s="[name='"+a+"[]'][value='"+e+"']",i=t.querySelectorAll(s);0===i.length&&o.push(s);for(var n=0,l=i.length;n<l;n++)r(i[n],!0)}));break;case"[object String]":case"[object Number]":var p=t.querySelectorAll(c);if(0===p.length){var f={};f[a]=s[n],o.push(f)}for(var u=0,m=p.length;u<m;u++)r(p[u],s[n]);break;default:console.error("unknown type -",l," and message",s[n])}}}(e,t,s,r),0!==o.length&&console.log("Some element not found in form",o),o}}])}));
//# sourceMappingURL=form.js.map