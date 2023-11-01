"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[449],{40449:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});t(34284);var o=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v("通过 "),n("table-column-api-link",{attrs:{prop:"events"}}),e._v(" 自定义目标组件的事件"),n("br"),n("span",{staticClass:"red"},[e._v("（注：具体请查看目标组件所支持的事件）")])],1),n("vxe-grid",e._b({scopedSlots:e._u([{key:"name_edit",fn:function(t){var o=t.row,l=t.column;return[n("vxe-input",{on:{change:function(n){return e.nameChangeEvent({column:l})}},model:{value:o.name,callback:function(n){e.$set(o,"name",n)},expression:"row.name"}})]}},{key:"role_edit",fn:function(t){var o=t.row,l=t.column;return[n("vxe-input",{on:{change:function(n){return e.roleChangeEvent({column:l})}},model:{value:o.role,callback:function(n){e.$set(o,"role",n)},expression:"row.role"}})]}},{key:"age_edit",fn:function(t){var o=t.row,l=t.column;return[n("vxe-input",{on:{focus:function(n){return e.ageFocusEvent({column:l})}},model:{value:o.age,callback:function(n){e.$set(o,"age",n)},expression:"row.age"}})]}},{key:"age_filter",fn:function(t){var o=t.column,l=t.$panel;return e._l(o.filters,(function(t,a){return n("input",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"option.data"}],key:a,attrs:{type:"type"},domProps:{value:t.data},on:{input:[function(n){n.target.composing||e.$set(t,"data",n.target.value)},function(e){return l.changeOption(e,!!t.data,t)}],keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.enterFilterEvent({column:o,$panel:l})}}})}))}},{key:"sex_default",fn:function(t){var o=t.row;return[n("span",[e._v(e._s(e.formatSex(o.sex)))])]}},{key:"sex_edit",fn:function(t){var o=t.row,l=t.column;return[n("vxe-select",{attrs:{transfer:""},on:{change:function(n){return e.sexChangeEvent({column:l})}},model:{value:o.sex,callback:function(n){e.$set(o,"sex",n)},expression:"row.sex"}},[n("vxe-option",{attrs:{value:"1",label:"男"}}),n("vxe-option",{attrs:{value:"0",label:"女"}})],1)]}},{key:"date_edit",fn:function(t){var o=t.row,l=t.column;return[n("vxe-input",{attrs:{type:"date",transfer:""},on:{change:function(n){return e.dateChangeEvent({column:l})}},model:{value:o.date,callback:function(n){e.$set(o,"date",n)},expression:"row.date"}})]}}])},"vxe-grid",e.gridOptions,!1)),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},l=[],a={data:function(){return{gridOptions:{border:!0,resizable:!0,showOverflow:!0,editConfig:{trigger:"click",mode:"cell"},columns:[{type:"seq",width:60},{field:"name",title:"Name",editRender:{},slots:{edit:"name_edit"}},{field:"role",title:"Role",editRender:{},slots:{edit:"role_edit"}},{field:"age",title:"Age",filters:[{data:""}],editRender:{},slots:{filter:"age_filter",edit:"age_edit"}},{field:"sex",title:"Sex",editRender:{},slots:{default:"sex_default",edit:"sex_edit"}},{field:"date",title:"Date",editRender:{},slots:{edit:"date_edit"}}],data:[{id:10001,name:"Test1",role:"Develop",sex:"0",age:28,date:"2021-03-13"},{id:10002,name:"Test2",role:"Test",sex:"1",age:22,date:"2021-01-05"},{id:10003,name:"Test3",role:"PM",sex:"0",age:32,date:"2021-04-13"},{id:10004,name:"Test4",role:"Designer",sex:"1",age:23,date:"2021-09-13"},{id:10005,name:"Test5",role:"Develop",sex:"1",age:30,date:"2021-10-13"},{id:10006,name:"Test6",role:"Designer",sex:"1",age:21,date:"2021-01-33"}]},demoCodes:['\n        <vxe-grid v-bind="gridOptions">\n          <template #name_edit="{ row, column }">\n            <vxe-input v-model="row.name" @change="nameChangeEvent({ column })"></vxe-input>\n          </template>\n          <template #role_edit="{ row, column }">\n            <vxe-input v-model="row.role" @change="roleChangeEvent({ column })"></vxe-input>\n          </template>\n          <template #age_edit="{ row, column }">\n            <vxe-input v-model="row.age" @focus="ageFocusEvent({ column })"></vxe-input>\n          </template>\n          <template #age_filter="{ column, $panel }">\n            <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)" @keyup.enter="enterFilterEvent({ column, $panel })">\n          </template>\n          <template #sex_default="{ row }">\n            <span>{{ formatSex(row.sex) }}</span>\n          </template>\n          <template #sex_edit="{ row, column }">\n            <vxe-select v-model="row.sex" transfer @change="sexChangeEvent({ column })">\n              <vxe-option value="1" label="男"></vxe-option>\n              <vxe-option value="0" label="女"></vxe-option>\n            </vxe-select>\n          </template>\n          <template #date_edit="{ row, column }">\n            <vxe-input v-model="row.date" type="date" transfer @change="dateChangeEvent({ column })"></vxe-input>\n          </template>\n        </vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              gridOptions: {\n                border: true,\n                resizable: true,\n                showOverflow: true,\n                editConfig: {\n                  trigger: 'click',\n                  mode: 'cell'\n                },\n                columns: [\n                  { type: 'seq', width: 60 },\n                  { field: 'name', title: 'Name', editRender: {}, slots: { edit: 'name_edit' } },\n                  { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } },\n                  { field: 'age', title: 'Age', filters: [{ data: '' }], editRender: {}, slots: { filter: 'age_filter', edit: 'age_edit' } },\n                  { field: 'sex', title: 'Sex', editRender: {}, slots: { default: 'sex_default', edit: 'sex_edit' } },\n                  { field: 'date', title: 'Date', editRender: {}, slots: { edit: 'date_edit' } }\n                ],\n                data: [\n                  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, date: '2021-03-13' },\n                  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, date: '2021-01-05' },\n                  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, date: '2021-04-13' },\n                  { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, date: '2021-09-13' },\n                  { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, date: '2021-10-13' },\n                  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, date: '2021-01-33' }\n                ]\n              }\n            }\n          },\n          methods: {\n            enterFilterEvent ({ $panel, column }, event) {\n              if (event.keyCode === 13) {\n                console.log('筛选回车事件')\n                $panel.confirmFilter()\n              }\n            },\n            nameChangeEvent ({ column }) {\n              console.log(`${column.title} 触发 input 事件`)\n            },\n            roleChangeEvent ({ column }) {\n              console.log(`${column.title} 触发 input 事件`)\n            },\n            ageFocusEvent ({ column }) {\n              console.log(`${column.title} 触发 focus 事件`)\n            },\n            sexChangeEvent ({ column }) {\n              console.log(`${column.title} 触发 change 事件`)\n            },\n            dateChangeEvent ({ column }) {\n              console.log(`${column.title} 触发 change 事件`)\n            }\n          }\n        }\n        "]}},methods:{formatSex:function(e){return"1"===e?"男":"0"===e?"女":""},enterFilterEvent:function(e){var n=e.$panel;console.log("筛选回车事件"),n.confirmFilter()},nameChangeEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 input 事件"))},roleChangeEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 input 事件"))},ageFocusEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 focus 事件"))},sexChangeEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 change 事件"))},dateChangeEvent:function(e){var n=e.column;console.log("".concat(n.title," 触发 change 事件"))}}},i=a,r=t(1001),s=(0,r.Z)(i,o,l,!1,null,null,null),d=s.exports}}]);