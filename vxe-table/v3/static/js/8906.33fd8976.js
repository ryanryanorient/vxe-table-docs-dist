"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[8906],{48906:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v(" 通过表尾来实现合计功能"),n("br"),n("span",{staticClass:"red"},[e._v("（注："),n("table-api-link",{attrs:{prop:"footer-method"}}),e._v(" 表尾的数据都是自行生成的，该示例仅供参考）")],1)]),n("vxe-grid",e._b({},"vxe-grid",e.gridOptions,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},r=[],s=(t(60228),t(47522),t(79288),{data:function(){return{gridOptions:{border:!0,stripe:!0,resizable:!0,showOverflow:!0,showFooter:!0,height:500,exportConfig:{},toolbarConfig:{export:!0,zoom:!0},footerMethod:this.footerMethod,columns:[{type:"seq",width:60},{field:"name",title:"app.body.label.name"},{field:"sex",title:"app.body.label.sex"},{field:"age",title:"Age",sortable:!0},{field:"rate",title:"Rate"}],data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,rate:6,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,rate:5,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,rate:4,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,rate:1,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,rate:5,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,rate:2,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,rate:7,address:"Shenzhen"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,rate:5,address:"Shenzhen"}]},footerData:[["和值","666","","1",""],["平均","","xx","","666"]],demoCodes:['\n        <vxe-grid v-bind="gridOptions"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions: {\n                border: true,\n                stripe: true,\n                resizable: true,\n                showOverflow: true,\n                showFooter: true,\n                height: 500,\n                exportConfig: {},\n                toolbarConfig: {\n                  export: true,\n                  zoom: true\n                },\n                footerMethod: this.footerMethod,\n                columns: [\n                  { type: 'seq', width: 60 },\n                  { field: 'name', title: 'app.body.label.name' },\n                  { field: 'sex', title: 'app.body.label.sex' },\n                  { field: 'age', title: 'Age', sortable: true },\n                  { field: 'rate', title: 'Rate' }\n                ],\n                data: [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, rate: 6, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, rate: 5, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, rate: 4, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, rate: 1, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, rate: 5, address: 'Shanghai' },\n                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, rate: 2, address: 'Shenzhen' },\n                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, rate: 7, address: 'Shenzhen' },\n                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, rate: 5, address: 'Shenzhen' }\n                ]\n              },\n              footerData: [\n                ['和值', '666', '', '1', ''],\n                ['平均', '', 'xx', '', '666']\n              ]\n            }\n          },\n          methods: {\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod () {\n              // 接收二维数组\n              return this.footerData\n            }\n          }\n        }\n        "]}},methods:{meanNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t/e.length},sumNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},footerMethod:function(){return this.footerData}}}),o=s,i=t(1001),d=(0,i.Z)(o,a,r,!1,null,null,null),l=d.exports}}]);