"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[4153],{35918:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var s=function(){var e=this,a=e._self._c;return a("div",[e._m(0),a("vxe-table",{attrs:{border:"",resizable:"",height:"500","row-config":{isCurrent:!0,isHover:!0},data:e.tableData},on:{"cell-click":e.cellClickEvent}},[a("vxe-column",{attrs:{type:"seq",width:"60"}}),a("vxe-column",{attrs:{field:"name",title:"Name"}}),a("vxe-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}}),a("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),a("vxe-modal",{attrs:{title:"查看详情",width:"600",height:"400",mask:!1,"lock-view":!1,resize:""},scopedSlots:e._u([{key:"default",fn:function(){return[a("vxe-table",{attrs:{border:"inner","auto-resize":"","show-overflow":"",height:"auto","row-config":{isHover:!0},"show-header":!1,"sync-resize":e.showDetails,data:e.detailData}},[a("vxe-column",{attrs:{field:"label",width:"40%"}}),a("vxe-column",{attrs:{field:"value"}})],1)]},proxy:!0}]),model:{value:e.showDetails,callback:function(a){e.showDetails=a},expression:"showDetails"}}),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},n=[function(){var e=this,a=e._self._c;return a("p",{staticClass:"tip"},[e._v("实现点击行弹出窗口并显示详情信息"),a("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])])}],l=(t(50886),{data:function(){return{showDetails:!1,detailData:[],tableData:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,amount:888,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"1",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"0",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"0",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"0",age:21,amount:998,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"1",age:29,amount:2e3,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"1",age:35,amount:999,address:"test abc"},{id:10009,name:"Test9",role:"Test",sex:"1",age:26,amount:2e3,address:"test abc"},{id:100010,name:"Test10",role:"Develop",sex:"1",age:21,amount:666,address:"test abc"}],demoCodes:['\n        <vxe-table\n          border\n          resizable\n          height="500"\n          :row-config="{isCurrent: true, isHover: true}"\n          :data="tableData"\n          @cell-click="cellClickEvent">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n\n        <vxe-modal v-model="showDetails" title="查看详情" width="600" height="400" :mask="false" :lock-view="false" resize>\n          <template #default>\n            <vxe-table\n              border="inner"\n              auto-resize\n              show-overflow\n              height="auto"\n              :row-config="{isHover: true}"\n              :show-header="false"\n              :sync-resize="showDetails"\n              :data="detailData">\n              <vxe-column field="label" width="40%"></vxe-column>\n              <vxe-column field="value"></vxe-column>\n            </vxe-table>\n          </template>\n        </vxe-modal>\n        ',"\n        export default {\n          data () {\n            return {\n              showDetails: false,\n              detailData: [],\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' },\n                { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 26, amount: 2000, address: 'test abc' },\n                { id: 100010, name: 'Test10', role: 'Develop', sex: '1', age: 21, amount: 666, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            cellClickEvent ({ row }) {\n              this.detailData = ['name', 'nickname', 'role', 'sex', 'age', 'amount', 'address'].map(field => {\n                return { label: field, value: row[field] }\n              })\n              this.showDetails = true\n            }\n          }\n        }\n        "]}},methods:{cellClickEvent:function(e){var a=e.row;this.detailData=["name","nickname","role","sex","age","amount","address"].map((function(e){return{label:e,value:a[e]}})),this.showDetails=!0}}}),o=l,d=t(1001),i=(0,d.Z)(o,s,n,!1,null,null,null),r=i.exports}}]);