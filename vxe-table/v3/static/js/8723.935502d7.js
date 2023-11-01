"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[8723],{78723:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});n(34284);var a=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:function(t){return e.$refs.xTree.toggleTreeExpand(e.tableData[1],!0)}}},[e._v("切换第一个")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTree.setTreeExpand(e.tableData[8],!0)}}},[e._v("展开第三个")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTree.setAllTreeExpand(!0)}}},[e._v("展开所有")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTree.clearTreeExpand()}}},[e._v("关闭所有")])]},proxy:!0}])}),t("vxe-table",{ref:"xTree",attrs:{resizable:"","show-overflow":"","tree-config":{transform:!0},"edit-config":{trigger:"click",mode:"row"},"checkbox-config":{labelField:"id"},data:e.tableData}},[t("vxe-column",{attrs:{type:"checkbox",title:"ID","tree-node":""}}),t("vxe-column",{attrs:{field:"name",title:"Name","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"row.name"}})]}}])}),t("vxe-column",{attrs:{field:"size",title:"Size","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.size,callback:function(t){e.$set(a,"size",t)},expression:"row.size"}})]}}])}),t("vxe-column",{attrs:{field:"type",title:"Type","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"text"},model:{value:a.type,callback:function(t){e.$set(a,"type",t)},expression:"row.type"}})]}}])}),t("vxe-column",{attrs:{field:"date",title:"Date","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(n){var a=n.row;return[t("vxe-input",{attrs:{type:"date",transfer:""},model:{value:a.date,callback:function(t){e.$set(a,"date",t)},expression:"row.date"}})]}}])})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},d=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"tip"},[e._v(" 可编辑树表格，还可以通过手动调用展开收起"),t("br")])}],i={data:function(){return{tableData:[{id:1e4,parentId:null,name:"Test1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"Test4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"Test5",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"Test6",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test7",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test8",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test9",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test10",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test11",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test12",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test13",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test14",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test15",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"Test16",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test17",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test18",type:"js",size:1024,date:"2021-06-01"}],demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="$refs.xTree.toggleTreeExpand(tableData[1], true)">切换第一个</vxe-button>\n            <vxe-button @click="$refs.xTree.setTreeExpand(tableData[8], true)">展开第三个</vxe-button>\n            <vxe-button @click="$refs.xTree.setAllTreeExpand(true)">展开所有</vxe-button>\n            <vxe-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          resizable\n          show-overflow\n          ref="xTree"\n          :tree-config="{transform: true}"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          :checkbox-config="{labelField: \'id\'}"\n          :data="tableData">\n          <vxe-column field="name" title="Name" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="size" title="Size" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.size" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="type" title="Type" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.type" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="date" title="Date" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.date" type="date" transfer></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test13', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          }\n        }\n        "]}}},r=i,s=n(1001),l=(0,s.Z)(r,a,d,!1,null,null,null),p=l.exports}}]);