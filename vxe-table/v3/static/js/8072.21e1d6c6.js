"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[8072],{48072:function(e,n,r){r.r(n),r.d(n,{default:function(){return i}});var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v(" 可编辑渲染 "),n("table-column-api-link",{attrs:{prop:"edit-render"}}),e._v("，查看 "),n("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/plugins/table/renderer",target:"_blank"}},[e._v("示例的源码")]),n("span",{staticClass:"red"},[e._v("（具体请自行实现，该示例仅供参考）")]),n("br"),e._v(" 配置参数："),n("br"),e._v(" autofocus 自动聚焦的类名"),n("br"),e._v(" renderHeader (h, renderOpts, params: { column, columnIndex, columnIndex, $rowIndex, $table }) 表头单元格显示内容"),n("br"),e._v(" renderEdit (h, renderOpts, params: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $table }) 单元格-编辑内容"),n("br"),e._v(" renderCell (h, renderOpts, params: { row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $table }) 单元格-显示内容"),n("br"),e._v(" renderFooter (h, renderOpts, params: { column, columnIndex, $columnIndex, $rowIndex, _columnIndex, items, $table }) 表尾单元格显示内容"),n("br"),e._v(" exportMethod (params: { row, column }) 单元格导出函数"),n("br"),e._v(" footerExportMethod (params: { items, _columnIndex }) 表尾单元格导出函数"),n("br")],1),n("vxe-table",{attrs:{border:"","show-overflow":"",data:e.tableData,"edit-config":{trigger:"click",mode:"row"}}},[n("vxe-column",{attrs:{type:"seq",width:"60"}}),n("vxe-column",{attrs:{field:"name",title:"简单输入框","edit-render":{name:"MyInput"}}}),n("vxe-column",{attrs:{field:"role",title:"下拉表格","edit-render":{name:"EditDownTable"}}}),n("vxe-column",{attrs:{field:"sex",title:"弹窗表格","edit-render":{name:"EditPopupModal"}}}),n("vxe-column",{attrs:{field:"address",title:"复杂渲染","edit-render":{name:"EditDownModal"}}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},t=[],d={data:function(){return{tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"Shenzhen"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"}],demoCodes:["\n        // 创建一个简单输入框渲染\n        VXETable.renderer.add('MyInput', {\n          // 可编辑激活模板\n          renderEdit (h, renderOpts, { row, column }) {\n            return <input class=\"my-cell\" text=\"text\" v-model={ row[column.property] } />\n          },\n          // 可编辑显示模板\n          renderCell (h, renderOpts, { row, column }) {\n            return [\n              <span>{ row[column.property] }</span>\n            ]\n          },\n          // 导出模板，例如导出插槽中自定义的内容\n          exportMethod (params) {\n            const { row, column } = params\n            return '自定义内容'\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          show-overflow\n          :data="tableData"\n          :edit-config="{trigger: \'click\', mode: \'row\'}">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="简单输入框" :edit-render="{name: \'MyInput\'}"></vxe-column>\n          <vxe-column field="role" title="下拉表格" :edit-render="{name: \'EditDownTable\'}"></vxe-column>\n          <vxe-column field="sex" title="弹窗表格" :edit-render="{name: \'EditPopupModal\'}"></vxe-column>\n          <vxe-column field="address" title="复杂渲染" :edit-render="{name: \'EditDownModal\'}"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }\n              ]\n            }\n          }\n        }\n        "]}}},s=d,o=r(1001),l=(0,o.Z)(s,a,t,!1,null,null,null),i=l.exports}}]);