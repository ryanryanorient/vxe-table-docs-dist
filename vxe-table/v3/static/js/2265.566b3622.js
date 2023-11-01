"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2265],{12265:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("使用 "),t("table-api-link",{attrs:{prop:"row-config"}}),e._v("."),t("table-api-link",{attrs:{prop:"isCurrent"}}),e._v(" 显示高亮行，当前行是唯一的；用户操作点击选项时会触发事件 "),t("table-api-link",{attrs:{prop:"current-change"}})],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:function(t){return e.$refs.xTable.setCurrentRow(e.tableData[1])}}},[e._v("设置第二行选中")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTable.clearCurrentRow()}}},[e._v("取消选中")]),t("vxe-button",{on:{click:e.getCurrentEvent}},[e._v("获取高亮行")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{border:"",height:"300",data:e.tableData,"row-config":{isCurrent:!0,isHover:!0}},on:{"current-change":e.currentChangeEvent}},[t("vxe-column",{attrs:{field:"name",title:"Name"}}),t("vxe-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-column",{attrs:{field:"age",title:"Age"}}),t("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},r=[],o=(n(48324),n(69851)),s=n.n(o),l={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:24,address:"Shanghai"}],demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="$refs.xTable.setCurrentRow(tableData[1])">设置第二行选中</vxe-button>\n            <vxe-button @click="$refs.xTable.clearCurrentRow()">取消选中</vxe-button>\n            <vxe-button @click="getCurrentEvent">获取高亮行</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          ref="xTable"\n          height="300"\n          :row-config="{isCurrent: true, isHover: true}"\n          :data="tableData"\n          @current-change="currentChangeEvent">\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }\n              ]\n            }\n          },\n          methods: {\n            currentChangeEvent ({ row }) {\n              console.log('行选中事件')\n            },\n            getCurrentEvent () {\n              VXETable.modal.alert(JSON.stringify(this.$refs.xTable.getCurrentRecord()))\n            }\n          }\n        }\n        "]}},methods:{currentChangeEvent:function(e){var t=e.rowIndex;console.log("行选中事件 ".concat(t))},getCurrentEvent:function(){s().modal.alert(JSON.stringify(this.$refs.xTable.getCurrentRecord()))}}},i=l,u=n(1001),d=(0,u.Z)(i,a,r,!1,null,null,null),c=d.exports}}]);