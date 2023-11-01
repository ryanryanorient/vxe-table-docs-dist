"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[9974],{79974:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-input",{attrs:{size:"small",placeholder:"搜索"}})]},proxy:!0},{key:"tools",fn:function(){return[t("vxe-button",{attrs:{status:"primary"}},[e._v("操作1")]),t("vxe-button",{attrs:{status:"primary"}},[e._v("操作2")]),t("vxe-button",{attrs:{status:"primary"}},[e._v("操作3")])]},proxy:!0}])}),t("vxe-table",{attrs:{border:"",resizable:"","tree-config":{transform:!0,rowField:"id",parentField:"parentId"},data:e.tableData}},[t("vxe-column",{attrs:{field:"name",title:"app.body.label.name"}}),t("vxe-column",{attrs:{field:"size",title:"Size"}}),t("vxe-column",{attrs:{field:"type",title:"Type"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("span",[e._v(e._s("类型：".concat(n.type||"无")))])]}}])}),t("vxe-column",{attrs:{field:"attr3",title:"Image","tree-node":""},scopedSlots:e._u([{key:"default",fn:function(){return[t("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif",height:"50"}})]},proxy:!0}])}),t("vxe-column",{attrs:{field:"date",title:"Date"},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("span",[e._v(e._s(e.formatDate(n.date)))])]}}])})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"tip"},[e._v(" 使用自定义模板渲染"),t("br")])}],d=a(38478),i=a.n(d),p={data:function(){return{tableData:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}],demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-input size="small" placeholder="搜索"></vxe-input>\n          </template>\n          <template #tools>\n            <vxe-button status="primary">操作1</vxe-button>\n            <vxe-button status="primary">操作2</vxe-button>\n            <vxe-button status="primary">操作3</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          :tree-config="{transform: true, rowField: \'id\', parentField: \'parentId\'}"\n          :data="tableData">\n          <vxe-column field="name" title="app.body.label.name"></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type">\n            <template #default="{ row }">\n              <span>{{ `类型：${row.type || \'无\'}` }}</span>\n            </template>\n          </vxe-column>\n          <vxe-column field="attr3" title="Image" tree-node>\n            <template #default>\n              <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" height="50">\n            </template>\n          </vxe-column>\n          <vxe-column field="date" title="Date">\n            <template #default="{ row }">\n              <span>{{ formatDate(row.date) }}</span>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          },\n          methods: {\n            formatDate (value) {\n              return XEUtils.toDateString(value, 'yyyy-MM-dd HH:mm:ss.S')\n            }\n          }\n        }\n        "]}},methods:{formatDate:function(e){return i().toDateString(e,"yyyy-MM-dd HH:mm:ss.S")}}},r=p,l=a(1001),m=(0,l.Z)(r,n,s,!1,null,null,null),o=m.exports}}]);