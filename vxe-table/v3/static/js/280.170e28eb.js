"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[280],{70280:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 局部自定义 "),t("table-column-api-link",{attrs:{prop:"formatter"}}),e._v(" 格式化内容"),t("br"),t("span",{staticClass:"red"},[e._v("（注："),t("table-column-api-link",{attrs:{prop:"formatter"}}),e._v(" 只会在指定的 "),t("table-column-api-link",{attrs:{prop:"field"}}),e._v(" 值发生改变时触发格式化，如果想要多字段关联变化请使用"),t("router-link",{staticClass:"nav-link",attrs:{to:{name:"TableTemplate"}}},[e._v("自定义模板")]),e._v("）")],1)],1),t("vxe-table",{attrs:{border:"",data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),t("vxe-column",{attrs:{field:"num",title:"Num",formatter:e.formatterNum,sortable:""}}),t("vxe-column",{attrs:{field:"sex",title:"Sex",formatter:e.formatterSex,sortable:""}}),t("vxe-column",{attrs:{field:"time",title:"Time",formatter:e.formatTime}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v(" 全局格式化内容，使用 "),t("router-link",{staticClass:"link",attrs:{to:{name:"FormatsAPI"}}},[e._v("formats")]),e._v(" 添加格式函数，单元格会在渲染的时候自动调用"),t("br"),t("span",{staticClass:"green"},[e._v("（用于实现业务中统一的格式化处理，这对于很多场景非常有用，减少很多不必要的重复代码）")])],1),t("vxe-table",{attrs:{border:"",data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"date",title:"转日期",width:"180",formatter:"formatDate"}}),t("vxe-column",{attrs:{field:"time",title:"转日期格式",width:"140",formatter:["formatDate","yyyy-MM-dd"]}}),t("vxe-column",{attrs:{field:"amount",title:"格式化金额",formatter:"formatAmount"}}),t("vxe-column",{attrs:{field:"bankCard",title:"银行卡",width:"180",formatter:"formatBankcard"}}),t("vxe-column",{attrs:{field:"num7",title:"数值"}}),t("vxe-column",{attrs:{field:"num8",title:"截取2位数",formatter:"formatCutNumber"}}),t("vxe-column",{attrs:{field:"num9",title:"四舍五入2位数",formatter:"formatFixedNumber"}}),t("vxe-column",{attrs:{field:"sex",title:"格式化性别",formatter:"formatSex"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n  ")],1)],1)},m=[],u=(n(25728),n(60228),n(38478)),l=n.n(u),r={data:function(){return{tableData:[{id:10001,name:"Test1",bankCard:"6222525678789432",sex:"0",time:1599320111520,date:"2020-11-14T07:14:41.000Z",amount:998.3,num:863.345,num7:863.345,num8:863.345,num9:863.345},{id:10002,name:"Test2",bankCard:"6222525675674564",sex:"1",time:1590820967410,date:"2022-10-24T08:14:18.000Z",amount:777776536.3,num:854.7789,num7:854.7789,num8:854.7789,num9:854.7789},{id:10003,name:"Test3",bankCard:"6222525477686963",sex:"0",time:1599390785410,date:"2020-09-04T06:08:25.000Z",amount:253.486,num:963.1456,num7:963.1456,num8:963.1456,num9:963.1456},{id:10004,name:"Test4",bankCard:"6222525678678946",sex:"1",time:1597385230710,date:"2019-10-20T20:40:20.000Z",amount:9990000.66,num:963.9856,num7:963.9856,num8:963.9856,num9:963.9856},{id:10005,name:"Test5",bankCard:"6222525478909009",sex:"0",time:1591627586920,date:"2020-09-17T11:14:18.000Z",amount:10000.35,num:99.845632,num7:99.845632,num8:99.845632,num9:99.845632},{id:10006,name:"Test6",bankCard:"6222525789898793",sex:"1",time:1599728569710,date:"2021-01-04T10:12:18.000Z",amount:999,num:698.3689,num7:698.3689,num8:698.3689,num9:698.3689},{id:10007,name:"Test7",bankCard:"6222525476534534",sex:"1",time:1590740052710,date:"2020-08-10T08:14:18.000Z",amount:458666.3,num:1000.3658,num7:1000.3658,num8:1000.3658,num9:1000.3658},{id:10008,name:"Test8",bankCard:"6222525445554231",sex:"0",time:1599320425610,date:"2020-05-04T07:17:30.000Z",amount:79999935.6,num:600053.32845,num7:600053.32845,num8:600053.32845,num9:600053.32845}],sexList:[{label:"女",value:"0"},{label:"男",value:"1"}],demoCodes:['\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="num" title="Num" :formatter="formatterNum" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex" :formatter="formatterSex" sortable></vxe-column>\n          <vxe-column field="time" title="Time" :formatter="formatTime"></vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', bankCard: '6222525678789432', sex: '0', time: 1599320111520, date: '2020-11-14T07:14:41.000Z', amount: 998.3, num: 863.345, num7: 863.345, num8: 863.345, num9: 863.345 },\n                { id: 10002, name: 'Test2', bankCard: '6222525675674564', sex: '1', time: 1590820967410, date: '2022-10-24T08:14:18.000Z', amount: 777776536.3, num: 854.7789, num7: 854.7789, num8: 854.7789, num9: 854.7789 },\n                { id: 10003, name: 'Test3', bankCard: '6222525477686963', sex: '0', time: 1599390785410, date: '2020-09-04T06:08:25.000Z', amount: 253.486, num: 963.1456, num7: 963.1456, num8: 963.1456, num9: 963.1456 },\n                { id: 10004, name: 'Test4', bankCard: '6222525678678946', sex: '1', time: 1597385230710, date: '2019-10-20T20:40:20.000Z', amount: 9990000.66, num: 963.9856, num7: 963.9856, num8: 963.9856, num9: 963.9856 },\n                { id: 10005, name: 'Test5', bankCard: '6222525478909009', sex: '0', time: 1591627586920, date: '2020-09-17T11:14:18.000Z', amount: 10000.35, num: 99.845632, num7: 99.845632, num8: 99.845632, num9: 99.845632 },\n                { id: 10006, name: 'Test6', bankCard: '6222525789898793', sex: '1', time: 1599728569710, date: '2021-01-04T10:12:18.000Z', amount: 999, num: 698.3689, num7: 698.3689, num8: 698.3689, num9: 698.3689 },\n                { id: 10007, name: 'Test7', bankCard: '6222525476534534', sex: '1', time: 1590740052710, date: '2020-08-10T08:14:18.000Z', amount: 458666.3, num: 1000.3658, num7: 1000.3658, num8: 1000.3658, num9: 1000.3658 },\n                { id: 10008, name: 'Test8', bankCard: '6222525445554231', sex: '0', time: 1599320425610, date: '2020-05-04T07:17:30.000Z', amount: 79999935.6, num: 600053.32845, num7: 600053.32845, num8: 600053.32845, num9: 600053.32845 }\n              ],\n              sexList: [\n                {\n                  label: '女',\n                  value: '0'\n                },\n                {\n                  label: '男',\n                  value: '1'\n                }\n              ]\n            }\n          },\n          methods: {\n            formatterNum ({ cellValue }) {\n              return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits: 2 })\n            },\n            formatterSex ({ cellValue }) {\n              let item = this.sexList.find(item => item.value === cellValue)\n              return item ? item.label : ''\n            },\n            formatTime ({ cellValue, row, column }) {\n              return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')\n            }\n          }\n        }\n        ","\n        // 自定义全局的格式化处理函数\n        VXETable.formats.mixin({\n          // 格式化性别\n          formatSex ({ cellValue }) {\n            return cellValue ? (cellValue === '1' ? '男' : '女') : ''\n          },\n          // 格式化下拉选项\n          formatSelect ({ cellValue }, list) {\n            const item = list.find(item => item.value === cellValue)\n            return item ? item.label : ''\n          },\n          // 格式化日期，默认 yyyy-MM-dd HH:mm:ss\n          formatDate ({ cellValue }, format) {\n            return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')\n          },\n          // 四舍五入金额，每隔3位逗号分隔，默认2位数\n          formatAmount ({ cellValue }, digits = 2) {\n            return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits })\n          },\n          // 格式化银行卡，默认每4位空格隔开\n          formatBankcard ({ cellValue }) {\n            return XEUtils.commafy(XEUtils.toValueString(cellValue), { spaceNumber: 4, separator: ' ' })\n          },\n          // 四舍五入,默认两位数\n          formatFixedNumber ({ cellValue }, digits = 2) {\n            return XEUtils.toFixed(XEUtils.round(cellValue, digits), digits)\n          },\n          // 向下舍入,默认两位数\n          formatCutNumber ({ cellValue }, digits = 2) {\n            return XEUtils.toFixed(XEUtils.floor(cellValue, digits), digits)\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="date" title="转日期" width="180" formatter="formatDate"></vxe-column>\n          <vxe-column field="time" title="转日期格式" width="140" :formatter="[\'formatDate\', \'yyyy-MM-dd\']"></vxe-column>\n          <vxe-column field="amount" title="格式化金额" formatter="formatAmount"></vxe-column>\n          <vxe-column field="bankCard" title="银行卡" width="180" formatter="formatBankcard"></vxe-column>\n          <vxe-column field="num7" title="数值"></vxe-column>\n          <vxe-column field="num8" title="截取2位数" formatter="formatCutNumber"></vxe-column>\n          <vxe-column field="num9" title="四舍五入2位数" formatter="formatFixedNumber"></vxe-column>\n          <vxe-column field="sex" title="格式化性别" formatter="formatSex"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', bankCard: '6222525678789432', sex: '0', time: 1599320111520, date: '2020-11-14T07:14:41.000Z', amount: 998.3, num: 863.345, num7: 863.345, num8: 863.345, num9: 863.345 },\n                { id: 10002, name: 'Test2', bankCard: '6222525675674564', sex: '1', time: 1590820967410, date: '2022-10-24T08:14:18.000Z', amount: 777776536.3, num: 854.7789, num7: 854.7789, num8: 854.7789, num9: 854.7789 },\n                { id: 10003, name: 'Test3', bankCard: '6222525477686963', sex: '0', time: 1599390785410, date: '2020-09-04T06:08:25.000Z', amount: 253.486, num: 963.1456, num7: 963.1456, num8: 963.1456, num9: 963.1456 },\n                { id: 10004, name: 'Test4', bankCard: '6222525678678946', sex: '1', time: 1597385230710, date: '2019-10-20T20:40:20.000Z', amount: 9990000.66, num: 963.9856, num7: 963.9856, num8: 963.9856, num9: 963.9856 },\n                { id: 10005, name: 'Test5', bankCard: '6222525478909009', sex: '0', time: 1591627586920, date: '2020-09-17T11:14:18.000Z', amount: 10000.35, num: 99.845632, num7: 99.845632, num8: 99.845632, num9: 99.845632 },\n                { id: 10006, name: 'Test6', bankCard: '6222525789898793', sex: '1', time: 1599728569710, date: '2021-01-04T10:12:18.000Z', amount: 999, num: 698.3689, num7: 698.3689, num8: 698.3689, num9: 698.3689 },\n                { id: 10007, name: 'Test7', bankCard: '6222525476534534', sex: '1', time: 1590740052710, date: '2020-08-10T08:14:18.000Z', amount: 458666.3, num: 1000.3658, num7: 1000.3658, num8: 1000.3658, num9: 1000.3658 },\n                { id: 10008, name: 'Test8', bankCard: '6222525445554231', sex: '0', time: 1599320425610, date: '2020-05-04T07:17:30.000Z', amount: 79999935.6, num: 600053.32845, num7: 600053.32845, num8: 600053.32845, num9: 600053.32845 }\n              ]\n            }\n          }\n        }\n        "]}},methods:{formatterNum:function(e){var t=e.cellValue;return l().commafy(l().toNumber(t),{digits:2})},formatterSex:function(e){var t=e.cellValue,n=this.sexList.find((function(e){return e.value===t}));return n?n.label:""},formatTime:function(e){var t=e.cellValue;return l().toDateString(t,"yyyy-MM-dd HH:ss:mm")}}},i=r,o=n(1001),s=(0,o.Z)(i,a,m,!1,null,null,null),d=s.exports}}]);