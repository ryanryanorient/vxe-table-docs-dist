"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[3066],{73066:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 通过调用 "),t("table-api-link",{attrs:{prop:"exportData"}}),e._v(" 函数指定 type='csv' 可以直接将表格导出为 CSV/HTML/XML/TXT 格式的文件；"),t("br"),e._v(" 默认会排除 field 为空和 type 相关的功能列（除 seq、checkbox、radio 之外），可以通过自定义 "),t("table-api-link",{attrs:{prop:"columnFilterMethod"}}),e._v(" 列过滤方法"),t("br"),e._v(" 对于 csv 等特殊类型，可以通过设置 "),t("table-column-api-link",{attrs:{prop:"cell-type"}}),e._v(" 将数值类型转为字符串类型"),t("br"),e._v(" 如果是服务端导出，通过设置 "),t("table-api-link",{attrs:{prop:"remote"}}),e._v(" 和 "),t("table-api-link",{attrs:{prop:"exportMethod"}}),e._v(" 开启服务端自定义导出"),t("br"),t("span",{staticClass:"red"},[e._v("（注：树结构和虚拟滚动只允许导出数据源，前端导出的数据量有限，建议使用后端导出）")]),t("span",{staticClass:"red"},[e._v("（注：导出多级表头合并列，需要将导出格式设置为 html/xlsx 格式）")])],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:function(t){e.showOverflow1=!e.showOverflow1}}},[e._v("单元格是否换行")]),t("vxe-button",{on:{click:e.exportDataEvent}},[e._v("默认导出")]),t("vxe-button",{on:{click:e.exportSelectEvent}},[e._v("导出选中")]),t("vxe-button",{on:{click:e.openExportEvent}},[e._v("高级导出")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable1",attrs:{height:"300","row-config":{isHover:!0},"show-overflow":e.showOverflow1,"export-config":{},data:e.tableData1}},[t("vxe-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-colgroup",{attrs:{title:"Group1"}},[t("vxe-column",{attrs:{field:"name",title:"Name"}})],1),t("vxe-colgroup",{attrs:{title:"Group2"}},[t("vxe-column",{attrs:{field:"attr1",title:"自动转换"}}),t("vxe-column",{attrs:{field:"amount",title:"导出数值","cell-type":"number"}}),t("vxe-column",{attrs:{field:"num",title:"导出字符串","cell-type":"string",sortable:""}})],1)],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("配置 "),t("table-api-link",{attrs:{prop:"columnFilterMethod"}}),e._v(" 参数过滤指定列")],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:e.exportDataEvent2}},[e._v("导出指定列 [name,sex]")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable2",attrs:{height:"300","row-config":{isHover:!0},data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name"}}),t("vxe-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-column",{attrs:{field:"age",title:"Age",sortable:""}}),t("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("配置 "),t("table-api-link",{attrs:{prop:"dataFilterMethod"}}),e._v(" 参数过滤指定行")],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:e.exportDataEvent3}},[e._v("导出 sex=1 的行")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable3",attrs:{"show-footer":"",height:"300","row-config":{isHover:!0},"footer-method":e.footerMethod,data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name"}}),t("vxe-column",{attrs:{field:"sex",title:"Sex",formatter:e.formatterSex}}),t("vxe-column",{attrs:{field:"age",title:"Age",sortable:""}}),t("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("不导出表头，指定文件名，导出源数据,格式化数据")]),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:e.exportCurrDataEvent4}},[e._v("导出当前页")]),t("vxe-button",{on:{click:e.exportDataEvent4}},[e._v("自定义数据导出")]),t("vxe-button",{on:{click:e.exportAllDataEvent4}},[e._v("全量导出后台数据")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable4",attrs:{border:"","show-footer":"",height:"300","row-config":{isHover:!0},loading:e.loading,"footer-method":e.footerMethod,data:e.tableData4}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name"}}),t("vxe-column",{attrs:{field:"sex",title:"Sex",formatter:e.formatterSex}}),t("vxe-column",{attrs:{field:"age",title:"Age"}}),t("vxe-column",{attrs:{type:"html",field:"html1",title:"Html片段"}})],1),t("vxe-pager",{attrs:{loading:e.loading,"current-page":e.tablePage4.currentPage,"page-size":e.tablePage4.pageSize,total:e.tablePage4.totalResult,layouts:["PrevPage","JumpNumber","NextPage","FullJump","Sizes","Total"]},on:{"page-change":e.handlePageChange}}),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[6]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[7]))]),e._v("\n  ")],1)],1)},s=[],o=(n(60228),n(47522),n(79288),n(50886),n(76801),{data:function(){return{loading:!1,tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"test abc"}],showOverflow1:!1,tableData1:[{name:"test1",attr1:"test1",amount:"12953.6985",num:1259326},{name:"tesfg t1",attr1:"154645623546345",amount:"45646464888888654654",num:4564566456645},{name:"sdf sgfd fdg",attr1:1231242,amount:"4564564545646.6985",num:0},{name:"test1",attr1:!0,amount:"12953.6985",num:54646646},{name:"aaa\n换行bb\n换行gg",attr1:"0",amount:"0",num:"645645645665567645234326456"},{name:"te st1",attr1:!1,amount:"1231231213123.456",num:"45645645645646456"},{name:"tesf \n换行g t6",attr1:"test2",amount:"99999.08",num:9999.88}],tableData4:[],tablePage4:{currentPage:1,pageSize:10,totalResult:0},demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="showOverflow1 = !showOverflow1">单元格是否换行</vxe-button>\n            <vxe-button @click="exportDataEvent">默认导出</vxe-button>\n            <vxe-button @click="exportSelectEvent">导出选中</vxe-button>\n            <vxe-button @click="openExportEvent">高级导出</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          ref="xTable1"\n          height="300"\n          :row-config="{isHover: true}"\n          :show-overflow="showOverflow1"\n          :export-config="{}"\n          :data="tableData1">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-colgroup title="Group1">\n            <vxe-column field="name" title="Name"></vxe-column>\n          </vxe-colgroup>\n          <vxe-colgroup title="Group2">\n            <vxe-column field="attr1" title="自动转换"></vxe-column>\n            <vxe-column field="amount" title="导出数值" cell-type="number"></vxe-column>\n            <vxe-column field="num" title="导出字符串" cell-type="string" sortable></vxe-column>\n          </vxe-colgroup>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              showOverflow1: false,\n              tableData1: [\n                { name: 'test1', attr1: 'test1', amount: '12953.6985', num: 1259326 },\n                { name: 'tesfg t1', attr1: '154645623546345', amount: '45646464888888654654', num: 4564566456645 },\n                { name: 'sdf sgfd fdg', attr1: 1231242, amount: '4564564545646.6985', num: 0 },\n                { name: 'test1', attr1: true, amount: '12953.6985', num: 54646646 },\n                { name: 'aaa\n换行bb\n换行gg', attr1: '0', amount: '0', num: '645645645665567645234326456' },\n                { name: 'te st1', attr1: false, amount: '1231231213123.456', num: '45645645645646456' },\n                { name: 'tesf \n换行g t6', attr1: 'test2', amount: '99999.08', num: 9999.88 }\n              ]\n            }\n          },\n          methods: {\n            exportDataEvent () {\n              this.$refs.xTable1.exportData({ type: 'csv' })\n            },\n            exportSelectEvent () {\n              this.$refs.xTable1.exportData({\n                data: this.$refs.xTable1.getCheckboxRecords()\n              })\n            },\n            openExportEvent () {\n              this.$refs.xTable1.openExport()\n            }\n          }\n        }\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="exportDataEvent2">导出指定列 [name,sex]</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          ref="xTable2"\n          height="300"\n          :row-config="{isHover: true}"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age" sortable></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            exportDataEvent2 () {\n              this.$refs.xTable2.exportData({\n                type: 'csv',\n                columnFilterMethod ({ column }) {\n                  return ['name', 'sex'].includes(column.property)\n                }\n              })\n            }\n          }\n        }\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="exportDataEvent3">导出指定第10-20行</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          show-footer\n          height="300"\n          ref="xTable3"\n          :row-config="{isHover: true}"\n          :footer-method="footerMethod"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>\n          <vxe-column field="age" title="Age" sortable></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            formatterSex ({ cellValue }) {\n              if (cellValue === '1') {\n                return '男'\n              } else if (cellValue === '0') {\n                return '女'\n              }\n              return cellValue\n            },\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            footerMethod ({ columns, data }) {\n              const footerData = [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age'].includes(column.property)) {\n                    return this.meanNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n              return footerData\n            },\n            exportDataEvent3 () {\n              this.$refs.xTable3.exportData({\n                type: 'csv',\n                dataFilterMethod ({ row }) {\n                  return row.sex === '1'\n                }\n              })\n            }\n          }\n        }\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="exportCurrDataEvent4">导出当前页</vxe-button>\n            <vxe-button @click="exportDataEvent4">自定义数据导出</vxe-button>\n            <vxe-button @click="exportAllDataEvent4">全量导出后台数据</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-footer\n          ref="xTable4"\n          height="300"\n          :row-config="{isHover: true}"\n          :loading="loading"\n          :footer-method="footerMethod"\n          :data="tableData4">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column type="html" field="html1" title="Html片段"></vxe-column>\n        </vxe-table>\n\n        <vxe-pager\n          :loading="loading"\n          :current-page="tablePage4.currentPage"\n          :page-size="tablePage4.pageSize"\n          :total="tablePage4.totalResult"\n          :layouts="[\'PrevPage\', \'JumpNumber\', \'NextPage\', \'FullJump\', \'Sizes\', \'Total\']"\n          @page-change="handlePageChange">\n        </vxe-pager>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData4: [],\n              tablePage4: {\n                currentPage: 1,\n                pageSize: 10,\n                totalResult: 0\n              }\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              setTimeout(() => {\n                const list = [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', html1: '<span>111</span>' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', html1: '<span>111</span>' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', html1: '<span>456</span>' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', html1: '<span>111</span>' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', html1: '<span>456</span>' },\n                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', html1: '<span>56</span>' },\n                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', html1: '<span>768</span>' },\n                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', html1: '<span>789</span>' }\n                ]\n                this.tableData4 = list\n                this.tablePage4.totalResult = 20\n                this.loading = false\n              }, 100)\n            },\n            handlePageChange ({ currentPage, pageSize }) {\n              this.tablePage4.currentPage = currentPage\n              this.tablePage4.pageSize = pageSize\n              this.findList()\n            },\n            formatterSex ({ cellValue }) {\n              if (cellValue === '1') {\n                return '男'\n              } else if (cellValue === '0') {\n                return '女'\n              }\n              return cellValue\n            },\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            footerMethod ({ columns, data }) {\n              const footerData = [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age'].includes(column.property)) {\n                    return this.meanNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n              return footerData\n            },\n            exportCurrDataEvent4 () {\n              this.$refs.xTable4.exportData({\n                filename: '自定义文件名',\n                type: 'html',\n                isHeader: true,\n                isFooter: true\n              })\n            },\n            exportDataEvent4 () {\n              this.$refs.xTable4.exportData({\n                filename: '自定义文件名',\n                type: 'html',\n                isHeader: true,\n                isFooter: true,\n                // 自定义导出的数据源\n                data: [\n                  { name: 'Name1', sex: '男', age: 26, role: '前端', html1: '<a>xxx1</a>' },\n                  { name: 'Name2', sex: '女', age: 20, role: '测试', html1: '<a>xxx2</a>' },\n                  { name: 'Name4', sex: '女', age: 22, role: '设计师', html1: '<a>xxx3</a>' }\n                ]\n              })\n            },\n            exportAllDataEvent4 () {\n              this.loading = true\n              setTimeout(() => {\n                const list = [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', html1: '<span>111</span>' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', html1: '<span>111</span>' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', html1: '<span>456</span>' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', html1: '<span>111</span>' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', html1: '<span>456</span>' },\n                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', html1: '<span>56</span>' },\n                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', html1: '<span>768</span>' },\n                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', html1: '<span>789</span>' }\n                ]\n                this.$refs.xTable4.exportData({\n                  filename: '自定义文件名',\n                  type: 'csv',\n                  isHeader: true,\n                  isFooter: true,\n                  data: list\n                })\n                this.loading = false\n              }, 100)\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},methods:{findList:function(){var e=this;this.loading=!0,setTimeout((function(){var t=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"test abc",html1:"<span>111</span>"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou",html1:"<span>111</span>"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai",html1:"<span>456</span>"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"test abc",html1:"<span>111</span>"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai",html1:"<span>456</span>"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"test abc",html1:"<span>56</span>"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc",html1:"<span>768</span>"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"test abc",html1:"<span>789</span>"}];e.tableData4=t,e.tablePage4.totalResult=20,e.loading=!1}),100)},handlePageChange:function(e){var t=e.currentPage,n=e.pageSize;this.tablePage4.currentPage=t,this.tablePage4.pageSize=n,this.findList()},formatterSex:function(e){var t=e.cellValue;return"1"===t?"男":"0"===t?"女":t},meanNum:function(e,t){var n=0;return e.forEach((function(e){n+=Number(e[t])})),n/e.length},footerMethod:function(e){var t=this,n=e.columns,a=e.data,s=[n.map((function(e,n){return 0===n?"平均":["age"].includes(e.property)?t.meanNum(a,e.property):null}))];return s},exportDataEvent:function(){this.$refs.xTable1.exportData({type:"csv"})},exportSelectEvent:function(){this.$refs.xTable1.exportData({data:this.$refs.xTable1.getCheckboxRecords()})},openExportEvent:function(){this.$refs.xTable1.openExport()},exportDataEvent2:function(){this.$refs.xTable2.exportData({type:"csv",columnFilterMethod:function(e){var t=e.column;return["name","sex"].includes(t.property)}})},exportDataEvent3:function(){this.$refs.xTable3.exportData({type:"csv",dataFilterMethod:function(e){var t=e.row;return"1"===t.sex}})},exportCurrDataEvent4:function(){this.$refs.xTable4.exportData({filename:"自定义文件名",type:"html",isHeader:!0,isFooter:!0})},exportDataEvent4:function(){this.$refs.xTable4.exportData({filename:"自定义文件名",type:"html",isHeader:!0,isFooter:!0,data:[{name:"Name1",sex:"男",age:26,role:"前端",html1:"<a>xxx1</a>"},{name:"Name2",sex:"女",age:20,role:"测试",html1:"<a>xxx2</a>"},{name:"Name4",sex:"女",age:22,role:"设计师",html1:"<a>xxx3</a>"}]})},exportAllDataEvent4:function(){var e=this;this.loading=!0,setTimeout((function(){var t=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"test abc",html1:"<span>111</span>"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou",html1:"<span>111</span>"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai",html1:"<span>456</span>"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"test abc",html1:"<span>111</span>"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai",html1:"<span>456</span>"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"test abc",html1:"<span>56</span>"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc",html1:"<span>768</span>"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"test abc",html1:"<span>789</span>"}];e.$refs.xTable4.exportData({filename:"自定义文件名",type:"csv",isHeader:!0,isFooter:!0,data:t}),e.loading=!1}),100)}}}),l=o,r=n(1001),i=(0,r.Z)(l,a,s,!1,null,null,null),m=i.exports}}]);