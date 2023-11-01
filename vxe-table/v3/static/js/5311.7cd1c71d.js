"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[5311],{55311:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("自定义筛选，可以通过设置选项状态和调用 "),t("table-api-link",{attrs:{prop:"updateData"}}),e._v(" 方法更新筛选条件")],1),t("vxe-table",{ref:"xTable",attrs:{border:"",height:"400","filter-config":{showIcon:!1},loading:e.loading,data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-colgroup",{attrs:{title:"文本"}},[t("vxe-column",{attrs:{field:"name",filters:[{data:""}],"filter-method":e.customStringFilterMethod},scopedSlots:e._u([{key:"header",fn:function(n){var a=n.column;return e._l(a.filters,(function(n,a){return t("vxe-input",{key:a,attrs:{type:"text",placeholder:"请输入",clearable:""},on:{change:function(t){return e.filterEvent(n)}},model:{value:n.data,callback:function(t){e.$set(n,"data",t)},expression:"option.data"}})}))}}])})],1),t("vxe-colgroup",{attrs:{title:"日期"}},[t("vxe-column",{attrs:{field:"date",filters:[{data:""}],"filter-method":e.customDateFilterMethod},scopedSlots:e._u([{key:"header",fn:function(n){var a=n.column;return e._l(a.filters,(function(n,a){return t("vxe-input",{key:a,attrs:{type:"date",placeholder:"请选择",clearable:"",transfer:""},on:{change:function(t){return e.filterEvent(n)}},model:{value:n.data,callback:function(t){e.$set(n,"data",t)},expression:"option.data"}})}))}}])})],1),t("vxe-colgroup",{attrs:{title:"下拉框"}},[t("vxe-column",{attrs:{field:"sex",filters:[{data:""}],"filter-method":e.customEqualFilterMethod,formatter:e.formatterSex},scopedSlots:e._u([{key:"header",fn:function(n){var a=n.column;return e._l(a.filters,(function(n,a){return t("vxe-select",{key:a,attrs:{options:e.sexList,placeholder:"请选择",clearable:"",transfer:""},on:{change:function(t){return e.filterEvent(n)}},model:{value:n.data,callback:function(t){e.$set(n,"data",t)},expression:"option.data"}})}))}}])})],1),t("vxe-column",{attrs:{field:"address",title:"Address",sortable:""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},o=[],r=(n(60228),n(25728),n(38478)),l=n.n(r),s={data:function(){return{loading:!1,tableData:[],sexList:[{label:"女",value:"0"},{label:"男",value:"1"}],demoCodes:['\n        <vxe-table\n          border\n          ref="xTable"\n          height="400"\n          :filter-config="{showIcon: false}"\n          :loading="loading"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-colgroup title="文本">\n            <vxe-column field="name" :filters="[{data: \'\'}]" :filter-method="customStringFilterMethod">\n              <template #header="{ column }">\n                <vxe-input type="text" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @change="filterEvent(option)" placeholder="请输入" clearable></vxe-input>\n              </template>\n            </vxe-column>\n          </vxe-colgroup>\n          <vxe-colgroup title="日期">\n            <vxe-column field="date" :filters="[{data: \'\'}]" :filter-method="customDateFilterMethod">\n              <template #header="{ column }">\n                <vxe-input type="date" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @change="filterEvent(option)" placeholder="请选择" clearable transfer></vxe-input>\n              </template>\n            </vxe-column>\n          </vxe-colgroup>\n          <vxe-colgroup title="下拉框">\n            <vxe-column field="sex" :filters="[{data: \'\'}]" :filter-method="customEqualFilterMethod" :formatter="formatterSex">\n              <template #header="{ column }">\n                <vxe-select v-for="(option, index) in column.filters" :key="index" v-model="option.data" :options="sexList" @change="filterEvent(option)" placeholder="请选择" clearable transfer></vxe-select>\n              </template>\n            </vxe-column>\n          </vxe-colgroup>\n          <vxe-column field="address" title="Address" sortable></vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              sexList: [\n                { label: '女', value: '0' },\n                { label: '男', value: '1' }\n              ]\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  this.tableData = [\n                    { id: 10001, name: 'Test10', role: 'Develop', sex: '0', date: '2021-11-14', age: 28, amount: 888, address: 'test abc' },\n                    { id: 10002, name: 'Test12', role: 'Test', sex: '1', date: '2021-01-20', age: 22, amount: 666, address: 'Guangzhou' },\n                    { id: 10003, name: 'Test34', role: 'PM', sex: '1', date: '2020-09-17', age: 32, amount: 89, address: 'Shanghai' },\n                    { id: 10004, name: 'Test24', role: 'Designer', sex: '0', date: '2020-10-25', age: 23, amount: 1000, address: 'test abc' },\n                    { id: 10005, name: 'Test15', role: 'Develop', sex: '0', date: '2020-12-12', age: 30, amount: 999, address: 'Shanghai' },\n                    { id: 10006, name: 'Test36', role: 'Designer', sex: '0', date: '2020-08-21', age: 21, amount: 998, address: 'test abc' },\n                    { id: 10007, name: 'Test27', role: 'Test', sex: '1', date: '2021-01-01', age: 29, amount: 2000, address: 'test abc' },\n                    { id: 10008, name: 'Test48', role: 'Develop', sex: '1', date: '2021-02-06', age: 35, amount: 999, address: 'test abc' }\n                  ]\n                  this.loading = false\n                  resolve()\n                }, 300)\n              })\n            },\n            formatterSex ({ cellValue }) {\n              const item = this.sexList.find(item => item.value === cellValue)\n              return item ? item.label : ''\n            },\n            customStringFilterMethod ({ option, row, column }) {\n              if (option.data) {\n                return XEUtils.toValueString(row[column.property]).toLowerCase().indexOf(option.data) > -1\n              }\n              return true\n            },\n            customDateFilterMethod ({ option, row, column }) {\n              if (option.data) {\n                return XEUtils.isDateSame(row[column.property], option.data, 'yyyy-MM-dd')\n              }\n              return true\n            },\n            customEqualFilterMethod ({ option, row, column }) {\n              if (option.data) {\n                return row[column.property] === option.data\n              }\n              return true\n            },\n            filterEvent (option) {\n              const xTable = this.$refs.xTable\n              // 设置为选中状态\n              option.checked = true\n              // 修改条件之后，需要手动调用 updateData 处理表格数据\n              xTable.updateData()\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},methods:{findList:function(){var e=this;return this.loading=!0,new Promise((function(t){setTimeout((function(){e.tableData=[{id:10001,name:"Test10",role:"Develop",sex:"0",date:"2021-11-14",age:28,amount:888,address:"test abc"},{id:10002,name:"Test12",role:"Test",sex:"1",date:"2021-01-20",age:22,amount:666,address:"Guangzhou"},{id:10003,name:"Test34",role:"PM",sex:"1",date:"2020-09-17",age:32,amount:89,address:"Shanghai"},{id:10004,name:"Test24",role:"Designer",sex:"0",date:"2020-10-25",age:23,amount:1e3,address:"test abc"},{id:10005,name:"Test15",role:"Develop",sex:"0",date:"2020-12-12",age:30,amount:999,address:"Shanghai"},{id:10006,name:"Test36",role:"Designer",sex:"0",date:"2020-08-21",age:21,amount:998,address:"test abc"},{id:10007,name:"Test27",role:"Test",sex:"1",date:"2021-01-01",age:29,amount:2e3,address:"test abc"},{id:10008,name:"Test48",role:"Develop",sex:"1",date:"2021-02-06",age:35,amount:999,address:"test abc"}],e.loading=!1,t()}),300)}))},formatterSex:function(e){var t=e.cellValue,n=this.sexList.find((function(e){return e.value===t}));return n?n.label:""},customStringFilterMethod:function(e){var t=e.option,n=e.row,a=e.column;return!t.data||l().toValueString(n[a.property]).toLowerCase().indexOf(t.data)>-1},customDateFilterMethod:function(e){var t=e.option,n=e.row,a=e.column;return!t.data||l().isDateSame(n[a.property],t.data,"yyyy-MM-dd")},customEqualFilterMethod:function(e){var t=e.option,n=e.row,a=e.column;return!t.data||n[a.property]===t.data},filterEvent:function(e){var t=this.$refs.xTable;e.checked=!0,t.updateData()}}},i=s,d=n(1001),u=(0,d.Z)(i,a,o,!1,null,null,null),c=u.exports}}]);