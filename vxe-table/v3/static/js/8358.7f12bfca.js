"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[8358],{28358:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 实现树结构深层查找 ")]),t("vxe-table",{attrs:{height:"400",data:e.tableData,"tree-config":{transform:!0}}},[t("vxe-column",{attrs:{type:"seq",width:"140","tree-node":""}}),t("vxe-column",{attrs:{field:"name",title:"名称"}}),t("vxe-column",{attrs:{field:"size",title:"大小",width:"140"}}),t("vxe-column",{attrs:{field:"type",title:"类型",width:"140",filters:[{label:"js",value:"js"},{label:"mp3",value:"mp3"},{label:"avi",value:"avi"}]}}),t("vxe-column",{attrs:{field:"date",title:"修改日期",width:"260"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},d=[],i={data:function(){return{tableData:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"mp3",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test73",type:"mp3",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test722",type:"avi",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test71",type:"mp3",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test754",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test75",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test78",type:"avi",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test763",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test799",type:"mp4",size:1024,date:"2021-06-01"},{id:24571,parentId:24577,name:"Test734",type:"mp4",size:1024,date:"2021-06-01"},{id:24572,parentId:24577,name:"Test711",type:"avi",size:1024,date:"2021-06-01"},{id:24573,parentId:24577,name:"Test788",type:"mp4",size:1024,date:"2021-06-01"}],demoCodes:['\n        <vxe-table\n          height="400"\n          :data="tableData"\n          :tree-config="{transform: true}">\n          <vxe-column type="seq" width="140" tree-node></vxe-column>\n          <vxe-column field="name" title="名称"></vxe-column>\n          <vxe-column field="size" title="大小" width="140"></vxe-column>\n          <vxe-column field="type" title="类型" width="140" :filters="[{label: \'js\', value: \'js\'}, {label: \'mp3\', value: \'mp3\'}, {label: \'avi\', value: \'avi\'}]"></vxe-column>\n          <vxe-column field="date" title="修改日期" width="260"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'mp3', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test73', type: 'mp3', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test722', type: 'avi', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test71', type: 'mp3', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test754', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test75', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test78', type: 'avi', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test763', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test799', type: 'mp4', size: 1024, date: '2021-06-01' },\n                { id: 24571, parentId: 24577, name: 'Test734', type: 'mp4', size: 1024, date: '2021-06-01' },\n                { id: 24572, parentId: 24577, name: 'Test711', type: 'avi', size: 1024, date: '2021-06-01' },\n                { id: 24573, parentId: 24577, name: 'Test788', type: 'mp4', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          }\n        }"]}}},s=i,p=a(1001),l=(0,p.Z)(s,n,d,!1,null,null,null),m=l.exports}}]);