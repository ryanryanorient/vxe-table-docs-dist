"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[6161],{56161:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var n=function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"tip"},[e._v("改变图标，通过设置 "),a("table-api-link",{attrs:{prop:"filter-config"}}),e._v("={"),a("table-api-link",{attrs:{prop:"iconMatch"}}),e._v(", "),a("table-api-link",{attrs:{prop:"iconMatch"}}),e._v("} 局部替换默认的图标")],1),a("vxe-table",{attrs:{border:"",height:"400","row-config":{isHover:!0},"filter-config":{iconNone:"vxe-icon-fixed",iconMatch:"vxe-icon-fixed-fill"},loading:e.loading,data:e.tableData}},[a("vxe-column",{attrs:{type:"seq",width:"60"}}),a("vxe-column",{attrs:{field:"name",title:"Name"}}),a("vxe-column",{attrs:{field:"role",title:"Role",filters:[{label:"前端",value:"前端"},{label:"后端",value:"后端"}]}}),a("vxe-column",{attrs:{field:"sex",title:"Sex",sortable:"","filter-multiple":!1,filters:[{label:"Man",value:"1"},{label:"Woman",value:"0"}]}}),a("vxe-column",{attrs:{field:"age",title:"Age"}}),a("vxe-column",{attrs:{field:"address",title:"Address",sortable:""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},s=[],l=(t(60228),{data:function(){return{loading:!1,tableData:[],demoCodes:['\n        <vxe-table\n          border\n          height="400"\n          :row-config="{isHover: true}"\n          :filter-config="{iconNone: \'vxe-icon-fixed\', iconMatch: \'vxe-icon-fixed-fill\'}"\n          :loading="loading"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="role" title="Role" :filters="[{label: \'前端\', value: \'前端\'}, {label: \'后端\', value: \'后端\'}]"></vxe-column>\n          <vxe-column field="sex" title="Sex" sortable :filter-multiple="false" :filters="[{label: \'Man\', value: \'1\'}, {label: \'Woman\', value: \'0\'}]"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" sortable></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: []\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  this.tableData = [\n                    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                    { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },\n                    { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },\n                    { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },\n                    { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },\n                    { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },\n                    { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }\n                  ]\n                  this.loading = false\n                  resolve()\n                }, 300)\n              })\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},methods:{findList:function(){var e=this;return this.loading=!0,new Promise((function(a){setTimeout((function(){e.tableData=[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"0",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"0",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"0",age:21,amount:998,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"1",age:29,amount:2e3,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"1",age:35,amount:999,address:"test abc"}],e.loading=!1,a()}),300)}))}}}),o=l,i=t(1001),d=(0,i.Z)(o,n,s,!1,null,null,null),r=d.exports}}]);