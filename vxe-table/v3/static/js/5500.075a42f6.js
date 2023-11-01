"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[5500],{65500:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 实现子孙表格懒加载 ")]),t("vxe-table",{attrs:{border:"",resizable:"","tree-config":{transform:!0},"expand-config":{lazy:!0,loadMethod:e.loadContentMethod},data:e.tableData}},[t("vxe-column",{attrs:{field:"name",title:"Name","tree-node":""}}),t("vxe-column",{attrs:{type:"expand",width:"80"},scopedSlots:e._u([{key:"content",fn:function(e){var n=e.row;return[t("div",{staticClass:"expand-wrapper"},[t("vxe-grid",{attrs:{columns:n.childCols,data:n.childData}})],1)]}}])}),t("vxe-column",{attrs:{field:"size",title:"Size"}}),t("vxe-column",{attrs:{field:"type",title:"Type"}}),t("vxe-column",{attrs:{field:"date",title:"Date"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),t("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},d=[],s=(n(60228),n(38478)),l=n.n(s),i={data:function(){return{tableData:[{id:1e4,parentId:null,name:"Test1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"Test4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"Test5",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"Test6",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test7",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test8",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test9",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test10",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test11",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test12",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test13",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test14",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test15",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"Test16",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test17",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test18",type:"js",size:1024,date:"2021-06-01"}],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          :tree-config="{transform: true}"\n          :expand-config="{lazy: true, loadMethod: loadContentMethod}"\n          :data="tableData">\n          <vxe-column field="name" title="Name" tree-node></vxe-column>\n          <vxe-column type="expand" width="80">\n            <template #content="{ row }">\n              <div class="expand-wrapper">\n                <vxe-grid :columns="row.childCols" :data="row.childData"></vxe-grid>\n              </div>\n            </template>\n          </vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test13', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          },\n          methods: {\n            loadContentMethod  ({ row }) {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  let childCols = XEUtils.sample([\n                    { type: 'seq', title: 'Sequence' },\n                    { field: 'name', title: 'Name' },\n                    { field: 'role', title: 'Role' },\n                    { field: 'age', title: 'Age' },\n                    { field: 'sex', title: 'Sex' }\n                  ], XEUtils.random(3, 5))\n                  let childData = XEUtils.sample([\n                    { name: 'TEST1', role: 'Develop', age: 20, sex: '女' },\n                    { name: 'TEST2', role: 'Develop', age: 22, sex: '女' },\n                    { name: 'TEST3', role: 'Develop', age: 24, sex: '男' },\n                    { name: 'TEST4', role: 'Develop', age: 26, sex: '女' },\n                    { name: 'TEST5', role: 'Develop', age: 28, sex: '男' },\n                    { name: 'TEST6', role: 'Develop', age: 30, sex: '男' }\n                  ], XEUtils.random(1, 5))\n                  row.childCols = childCols\n                  row.childData = childData\n                  resolve()\n                }, 500)\n              })\n            }\n          }\n        }\n        ","\n        .expand-wrapper {\n          padding: 20px;\n        }\n        "]}},methods:{loadContentMethod:function(e){var t=e.row;return new Promise((function(e){setTimeout((function(){var n=l().sample([{type:"seq",title:"Sequence"},{field:"name",title:"Name"},{field:"role",title:"Role"},{field:"age",title:"Age"},{field:"sex",title:"Sex"}],l().random(3,5)),a=l().sample([{name:"TEST1",role:"Develop",age:20,sex:"女"},{name:"TEST2",role:"Develop",age:22,sex:"女"},{name:"TEST3",role:"Develop",age:24,sex:"男"},{name:"TEST4",role:"Develop",age:26,sex:"女"},{name:"TEST5",role:"Develop",age:28,sex:"男"},{name:"TEST6",role:"Develop",age:30,sex:"男"}],l().random(1,5));t.childCols=n,t.childData=a,e()}),500)}))}}},p=i,o=n(1001),r=(0,o.Z)(p,a,d,!1,null,"b0b46b3c",null),m=r.exports}}]);