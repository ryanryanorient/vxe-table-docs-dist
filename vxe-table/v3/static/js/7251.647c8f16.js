"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[7251],{77251:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var o=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("文件上传，可以通过调用 "),t("table-api-link",{attrs:{prop:"readFile"}}),e._v(" 读取本地文件"),t("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")])],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{attrs:{status:"primary"},on:{click:function(t){return e.insertEvent()}}},[e._v("选择文件")]),t("vxe-button",{attrs:{status:"primary"},on:{click:function(t){return e.insertEvent({multiple:!0})}}},[e._v("选择多个")]),t("vxe-button",{on:{click:function(t){return e.$refs.xTable.removeCheckboxRow()}}},[e._v("删除选中")]),t("vxe-button",{on:{click:e.getInsertEvent}},[e._v("保存")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable",attrs:{border:"","show-overflow":"",height:"400",data:e.tableData}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name"}}),t("vxe-column",{attrs:{field:"type",title:"Type"}}),t("vxe-column",{attrs:{field:"size",title:"Size"}}),t("vxe-column",{attrs:{field:"date",title:"Date"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},a=[],r=(n(50886),n(77049),n(21694),n(34284),n(6203),n(89730),n(38478)),s=n.n(r),l=n(69851),i=n.n(l),c={data:function(){return{tableData:[],demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button status="primary" @click="insertEvent()">选择文件</vxe-button>\n            <vxe-button status="primary" @click="insertEvent({ multiple : true })">选择多个</vxe-button>\n            <vxe-button @click="$refs.xTable.removeCheckboxRow()">删除选中</vxe-button>\n            <vxe-button @click="getInsertEvent">保存</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          ref="xTable"\n          height="400"\n          :data="tableData">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          methods: {\n            insertEvent (opts) {\n              const $table = this.$refs.xTable\n              $table.readFile(opts).then(params => {\n                const { files } = params\n                const records = Array.from(files).map(file => {\n                  const ns = file.name.split('.')\n                  const name = ns.slice(0, ns.length - 1).join('')\n                  const type = ns[ns.length - 1]\n                  return {\n                    name: name,\n                    size: file.size,\n                    type: type,\n                    date: XEUtils.toDateString(new Date())\n                  }\n                })\n                $table.insert(records)\n              })\n            },\n            getInsertEvent () {\n              const $table = this.$refs.xTable\n              const insertRecords = $table.getInsertRecords()\n              VXETable.modal.alert(insertRecords.length)\n            }\n          }\n        }\n        "]}},methods:{insertEvent:function(e){var t=this.$refs.xTable;t.readFile(e).then((function(e){var n=e.files,o=Array.from(n).map((function(e){var t=e.name.split("."),n=t.slice(0,t.length-1).join(""),o=t[t.length-1];return{name:n,size:e.size,type:o,date:s().toDateString(new Date)}}));t.insert(o)}))},getInsertEvent:function(){var e=this.$refs.xTable,t=e.getInsertRecords();i().modal.alert(t.length)}}},v=c,u=n(1001),m=(0,u.Z)(v,o,a,!1,null,null,null),x=m.exports},6203:function(e,t,n){var o=n(79989),a=n(68844),r=n(94413),s=n(65290),l=n(16834),i=a([].join),c=r!==Object,v=c||!l("join",",");o({target:"Array",proto:!0,forced:v},{join:function(e){return i(s(this),void 0===e?",":e)}})}}]);