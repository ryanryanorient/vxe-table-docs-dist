"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[33027],{33027:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(50124),a=n(48534),o=(n(60228),n(34338),n(66252)),i=n(2262),u=n(72896),c=(0,o.aZ)({__name:"Demo1",setup:function(t){var e=(0,i.iH)(!1),n=(0,i.iH)([]),c=(0,i.iH)(),l=(0,i.iH)(),s=function(){return e.value=!0,new Promise((function(t){setTimeout((function(){n.value=[{id:1e4,parentId:null,name:"vxe-table test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:0,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"vxe-table test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"vxe-table test abc96",type:"avi",size:0,date:"2021-04-01"},{id:24330,parentId:10053,name:"vxe-table test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"vxe-table test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}],e.value=!1,t(null)}),300)}))},f=function(){var t=c.value;return t?(t.clearAll(),s()):Promise.resolve()},d=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,o,i,u,l,s,f,d,p,h,v;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=c.value,!a){t.next=35;break}if(o=new Date,"current"!==n){t.next=13;break}return i={name:"新数据",id:Date.now(),parentId:e.parentId,date:"".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate())},t.next=7,a.insertAt(i,e);case 7:return u=t.sent,l=u.row,t.next=11,a.setEditRow(l);case 11:t.next=35;break;case 13:if("top"!==n){t.next=25;break}return s={name:"新数据",id:Date.now(),parentId:e.id,date:"".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate())},t.next=17,a.insert(s);case 17:return f=t.sent,d=f.row,t.next=21,a.setTreeExpand(e,!0);case 21:return t.next=23,a.setEditRow(d);case 23:t.next=35;break;case 25:if("bottom"!==n){t.next=35;break}return p={name:"新数据",id:Date.now(),parentId:e.id,date:"".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate())},t.next=29,a.insertAt(p,-1);case 29:return h=t.sent,v=h.row,t.next=33,a.setTreeExpand(e,!0);case 33:return t.next=35,a.setEditRow(v);case 35:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=c.value,!n){t.next=4;break}return t.next=4,n.remove(e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n,a,o,i;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=c.value,!e){t.next=10;break}return n=new Date,a={name:"新数据",id:Date.now(),parentId:null,date:"".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate())},t.next=6,e.insert(a);case 6:return o=t.sent,i=o.row,t.next=10,e.setEditRow(i);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=c.value;if(t){var e=t.getInsertRecords();u.s7.modal.alert("新增：".concat(e.length))}},m=function(){var t=c.value;if(t){var e=t.getRemoveRecords();u.s7.modal.alert(e.length)}},y=function(){var t=c.value;if(t){var e=t.getUpdateRecords();u.s7.modal.alert("更新：".concat(e.length))}};return(0,o.Y3)((function(){var t=c.value,e=l.value;t&&e&&t.connect(e),s()})),function(t,r){var a=(0,o.up)("vxe-button"),i=(0,o.up)("vxe-toolbar"),u=(0,o.up)("vxe-column"),s=(0,o.up)("vxe-input"),w=(0,o.up)("vxe-table");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{ref_key:"xToolbar",ref:l,refresh:{queryMethod:f},export:"",print:"",custom:""},{buttons:(0,o.w5)((function(){return[(0,o.Wm)(a,{onClick:h},{default:(0,o.w5)((function(){return[(0,o.Uk)("新增")]})),_:1}),(0,o.Wm)(a,{onClick:v},{default:(0,o.w5)((function(){return[(0,o.Uk)("获取新增")]})),_:1}),(0,o.Wm)(a,{onClick:m},{default:(0,o.w5)((function(){return[(0,o.Uk)("获取删除")]})),_:1}),(0,o.Wm)(a,{onClick:y},{default:(0,o.w5)((function(){return[(0,o.Uk)("获取修改")]})),_:1})]})),_:1},8,["refresh"]),(0,o.Wm)(w,{"show-overflow":"","keep-source":"",ref_key:"tableRef",ref:c,"row-config":{keyField:"id"},"column-config":{resizable:!0},"print-config":{},"export-config":{},loading:e.value,"tree-config":{transform:!0,rowField:"id",parentField:"parentId"},"edit-config":{trigger:"click",mode:"row",showStatus:!0},data:n.value},{default:(0,o.w5)((function(){return[(0,o.Wm)(u,{type:"checkbox",width:"60"}),(0,o.Wm)(u,{field:"name",title:"Name","tree-node":""}),(0,o.Wm)(u,{field:"size",title:"Size","edit-render":{}},{edit:(0,o.w5)((function(t){var e=t.row;return[(0,o.Wm)(s,{modelValue:e.size,"onUpdate:modelValue":function(t){return e.size=t},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,o.Wm)(u,{field:"type",title:"Type","edit-render":{}},{edit:(0,o.w5)((function(t){var e=t.row;return[(0,o.Wm)(s,{modelValue:e.type,"onUpdate:modelValue":function(t){return e.type=t},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,o.Wm)(u,{field:"date",title:"Date","edit-render":{}},{edit:(0,o.w5)((function(t){var e=t.row;return[(0,o.Wm)(s,{modelValue:e.date,"onUpdate:modelValue":function(t){return e.date=t},type:"date",transfer:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,o.Wm)(u,{title:"操作",width:"500"},{default:(0,o.w5)((function(t){var e=t.row;return[(0,o.Wm)(a,{type:"text",status:"primary",onClick:function(t){return d(e,"current")}},{default:(0,o.w5)((function(){return[(0,o.Uk)("插入节点")]})),_:2},1032,["onClick"]),(0,o.Wm)(a,{type:"text",status:"primary",onClick:function(t){return d(e,"top")}},{default:(0,o.w5)((function(){return[(0,o.Uk)("顶部插入节点")]})),_:2},1032,["onClick"]),(0,o.Wm)(a,{type:"text",status:"primary",onClick:function(t){return d(e,"bottom")}},{default:(0,o.w5)((function(){return[(0,o.Uk)("尾部插入子节点")]})),_:2},1032,["onClick"]),(0,o.Wm)(a,{type:"text",status:"primary",onClick:function(t){return p(e)}},{default:(0,o.w5)((function(){return[(0,o.Uk)("删除节点")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["loading","data"])])}}});const l=c;var s=l},7629:function(t,e,n){var r=n(19037),a=n(55997);a(r.JSON,"JSON",!0)},77509:function(t,e,n){var r=n(55997);r(Math,"Math",!0)},88052:function(t,e,n){var r=n(79989),a=n(3689),o=n(90690),i=n(61868),u=n(81748),c=a((function(){i(1)}));r({target:"Object",stat:!0,forced:c,sham:!u},{getPrototypeOf:function(t){return i(o(t))}})},58373:function(t,e,n){var r=n(35405);r("asyncIterator")},66793:function(t,e,n){var r=n(76058),a=n(35405),o=n(55997);a("toStringTag"),o(r("Symbol"),"Symbol")},48534:function(t,e,n){n.d(e,{Z:function(){return a}});n(60228);function r(t,e,n,r,a,o,i){try{var u=t[o](i),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function u(t){r(i,a,o,u,c,"next",t)}function c(t){r(i,a,o,u,c,"throw",t)}u(void 0)}))}}},50124:function(t,e,n){n.d(e,{Z:function(){return a}});n(59749),n(86544),n(60228),n(84254),n(21694),n(76265),n(58373),n(66793),n(7629),n(77509),n(88052),n(21057),n(70560),n(47522),n(34284),n(89730);var r=n(3336);function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),u=new U(r||[]);return i(o,"_invoke",{value:j(t,n,u)}),o}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",v="suspendedYield",m="executing",y="completed",w={};function g(){}function x(){}function b(){}var k={};f(k,c,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(C([])));E&&E!==n&&o.call(E,c)&&(k=E);var I=b.prototype=g.prototype=Object.create(k);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(a,i,u,c){var l=p(t[a],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==(0,r.Z)(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}})}function j(e,n,r){var a=h;return function(o,i){if(a===m)throw new Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:t,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var c=z(u,r);if(c){if(c===w)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===h)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var l=p(e,n,r);if("normal"===l.type){if(a=r.done?y:v,l.arg===w)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=y,r.method="throw",r.arg=l.arg)}}}function z(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator["return"]&&(n.method="return",n.arg=t,z(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),w;var o=p(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,w;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,w):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,w)}function W(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(W,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(o.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError((0,r.Z)(e)+" is not iterable")}return x.prototype=b,i(I,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,s,"GeneratorFunction")),t.prototype=Object.create(I),t},e.awrap=function(t){return{__await:t}},L(T.prototype),f(T.prototype,l,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new T(d(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(I),f(I,s,"Generator"),f(I,c,(function(){return this})),f(I,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return u.type="throw",u.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),w}},e}}}]);