"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2728],{12728:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(34284);var r=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("调用 "),t("table-api-link",{attrs:{prop:"remove"}}),e._v(" 删除指定行数据"),t("br"),t("span",{staticClass:"red"},[e._v("（当移除行元素后由于 vue 缓存造成事件错乱，应该使用 "),t("table-api-link",{attrs:{prop:"row-key "}}),e._v("来避免该问题）")],1)],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:function(t){return e.insertEvent()}}},[e._v("在第1行插入")]),t("vxe-button",{on:{click:function(t){return e.removeEvent(e.tableData[1])}}},[e._v("删除第2行")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTable.removeCheckboxRow()}}},[e._v("删除选中")]),t("vxe-button",{on:{click:e.getRemoveEvent}},[e._v("获取删除")]),t("vxe-button",{on:{click:e.getSelectionEvent}},[e._v("获取选中")]),t("vxe-button",{attrs:{icon:"vxe-icon-save"},on:{click:e.saveEvent}},[e._v("保存")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"",data:e.tableData,"edit-config":{trigger:"click",mode:"cell"}}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{autofocus:".vxe-input--inner"}},scopedSlots:e._u([{key:"edit",fn:function(n){var r=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:r.name,callback:function(t){e.$set(r,"name",t)},expression:"row.name"}})]}}])}),t("vxe-column",{attrs:{field:"sex",title:"Sex","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var r=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:r.sex,callback:function(t){e.$set(r,"sex",t)},expression:"row.sex"}})]}}])}),t("vxe-column",{attrs:{field:"age",title:"Age","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var r=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:r.age,callback:function(t){e.$set(r,"age",t)},expression:"row.age"}})]}}])})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},o=[],a=n(51907),i=n(85617),c=(n(34338),n(69851)),s=n.n(c),l={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,address:"test abc"}],demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="insertEvent()">在第1行插入</vxe-button>\n            <vxe-button @click="removeEvent(tableData[1])">删除第2行</vxe-button>\n            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>\n            <vxe-button @click="getSelectionEvent">获取选中</vxe-button>\n            <vxe-button icon="vxe-icon-save" @click="saveEvent">保存</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          ref="xTable"\n          border\n          show-overflow\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{autofocus: \'.vxe-input--inner\'}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.sex" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="age" title="Age" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.age" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            async insertEvent (row) {\n              const $table = this.$refs.xTable\n              const record = {\n                sex: '1'\n              }\n              const { row: newRow } = await $table.insertAt(record, row)\n              await $table.setActiveCell(newRow, 'sex')\n            },\n            async removeEvent (row) {\n              const type = await VXETable.modal.confirm('您确定要删除该数据?')\n              const $table = this.$refs.xTable\n              if (type === 'confirm') {\n                $table.remove(row)\n              }\n            },\n            getRemoveEvent () {\n              const $table = this.$refs.xTable\n              const removeRecords = $table.getRemoveRecords()\n              VXETable.modal.alert(removeRecords.length)\n            },\n            getSelectionEvent () {\n              const $table = this.$refs.xTable\n              const selectRecords = $table.getCheckboxRecords()\n              VXETable.modal.alert(selectRecords.length)\n            },\n            saveEvent () {\n              const $table = this.$refs.xTable\n              const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()\n              VXETable.modal.alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)\n            }\n          }\n        }\n        "]}},methods:{insertEvent:function(e){var t=this;return(0,i.Z)((0,a.Z)().mark((function n(){var r,o,i,c;return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.$refs.xTable,o={sex:"1"},n.next=4,r.insertAt(o,e);case 4:return i=n.sent,c=i.row,n.next=8,r.setActiveCell(c,"sex");case 8:case"end":return n.stop()}}),n)})))()},removeEvent:function(e){var t=this;return(0,i.Z)((0,a.Z)().mark((function n(){var r,o;return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s().modal.confirm("您确定要删除该数据?");case 2:r=n.sent,o=t.$refs.xTable,"confirm"===r&&o.remove(e);case 5:case"end":return n.stop()}}),n)})))()},getRemoveEvent:function(){var e=this.$refs.xTable,t=e.getRemoveRecords();s().modal.alert(t.length)},getSelectionEvent:function(){var e=this.$refs.xTable,t=e.getCheckboxRecords();s().modal.alert(t.length)},saveEvent:function(){var e=this.$refs.xTable,t=e.getRecordset(),n=t.insertRecords,r=t.removeRecords,o=t.updateRecords;s().modal.alert("insertRecords=".concat(n.length," removeRecords=").concat(r.length," updateRecords=").concat(o.length))}}},u=l,v=n(1001),f=(0,v.Z)(u,r,o,!1,null,null,null),d=f.exports},7629:function(e,t,n){var r=n(19037),o=n(55997);o(r.JSON,"JSON",!0)},77509:function(e,t,n){var r=n(55997);r(Math,"Math",!0)},88052:function(e,t,n){var r=n(79989),o=n(3689),a=n(90690),i=n(61868),c=n(81748),s=o((function(){i(1)}));r({target:"Object",stat:!0,forced:s,sham:!c},{getPrototypeOf:function(e){return i(a(e))}})},58373:function(e,t,n){var r=n(35405);r("asyncIterator")},66793:function(e,t,n){var r=n(76058),o=n(35405),a=n(55997);o("toStringTag"),a(r("Symbol"),"Symbol")},85617:function(e,t,n){n.d(t,{Z:function(){return o}});n(60228);function r(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,s,"next",e)}function s(e){r(i,o,a,c,s,"throw",e)}c(void 0)}))}}},51907:function(e,t,n){n.d(t,{Z:function(){return o}});n(59749),n(86544),n(60228),n(84254),n(21694),n(76265),n(58373),n(66793),n(7629),n(77509),n(88052),n(21057),n(70560),n(47522),n(34284),n(89730);var r=n(2434);function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var e,t={},n=Object.prototype,a=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function v(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{v({},"")}catch(e){v=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),c=new j(r||[]);return i(a,"_invoke",{value:L(e,n,c)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",m="executing",x="completed",g={};function b(){}function y(){}function w(){}var E={};v(E,s,(function(){return this}));var k=Object.getPrototypeOf,_=k&&k(k(D([])));_&&_!==n&&a.call(_,s)&&(E=_);var T=w.prototype=b.prototype=Object.create(E);function R(e){["next","throw","return"].forEach((function(t){v(e,t,(function(e){return this._invoke(t,e)}))}))}function $(e,t){function n(o,i,c,s){var l=d(e[o],e,i);if("throw"!==l.type){var u=l.arg,v=u.value;return v&&"object"==(0,r.Z)(v)&&a.call(v,"__await")?t.resolve(v.__await).then((function(e){n("next",e,c,s)}),(function(e){n("throw",e,c,s)})):t.resolve(v).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,s)}))}s(l.arg)}var o;i(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}})}function L(t,n,r){var o=h;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===x){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=S(c,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var l=d(t,n,r);if("normal"===l.type){if(o=r.done?x:p,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=x,r.method="throw",r.arg=l.arg)}}}function S(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=d(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function D(t){if(t||""===t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError((0,r.Z)(t)+" is not iterable")}return y.prototype=w,i(T,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:y,configurable:!0}),y.displayName=v(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,v(e,u,"GeneratorFunction")),e.prototype=Object.create(T),e},t.awrap=function(e){return{__await:e}},R($.prototype),v($.prototype,l,(function(){return this})),t.AsyncIterator=$,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new $(f(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},R(T),v(T,u,"Generator"),v(T,s,(function(){return this})),v(T,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=D,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:D(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}}}]);