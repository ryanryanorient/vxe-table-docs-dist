"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[42773],{42773:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});t(34284);var a=t(66252),r=t(3577),l=(0,a._)("p",{class:"tip"},[(0,a.Uk)("实现简单的级联下拉选项列表"),(0,a._)("span",{class:"red"},"（具体请自行实现，该示例仅供参考）")],-1),o={class:"demo-code"};function i(e,n,t,i,m,u){var d=(0,a.up)("vxe-button"),s=(0,a.up)("vxe-toolbar"),c=(0,a.up)("vxe-column"),p=(0,a.up)("vxe-input"),v=(0,a.up)("vxe-option"),f=(0,a.up)("vxe-select"),x=(0,a.up)("vxe-table"),b=(0,a.up)("pre-code");return(0,a.wg)(),(0,a.iD)("div",null,[l,(0,a.Wm)(s,null,{buttons:(0,a.w5)((function(){return[(0,a.Wm)(d,{onClick:n[0]||(n[0]=function(n){return e.insertEvent()})},{default:(0,a.w5)((function(){return[(0,a.Uk)("新增")]})),_:1})]})),_:1}),(0,a.Wm)(x,{border:"","show-overflow":"",ref:"xTable","max-height":"400","column-config":{resizable:!0},data:e.demo1.tableData,"edit-config":{trigger:"click",mode:"row"},onEditActived:e.editActivedEvent},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{type:"seq",width:"60"}),(0,a.Wm)(c,{field:"name",title:"Name","edit-render":{}},{edit:(0,a.w5)((function(e){var n=e.row;return[(0,a.Wm)(p,{modelValue:n.name,"onUpdate:modelValue":function(e){return n.name=e},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a.Wm)(c,{field:"attr3",title:"Project type","edit-render":{}},{default:(0,a.w5)((function(n){var t=n.row;return[(0,a._)("span",null,(0,r.zw)(e.formatProjectType(t.attr3)),1)]})),edit:(0,a.w5)((function(n){var t=n.row;return[(0,a.Wm)(f,{modelValue:t.attr3,"onUpdate:modelValue":function(e){return t.attr3=e},transfer:"",onChange:function(n){return e.ptypeChangeEvent({row:t})}},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.demo1.ptypeList,(function(e){return(0,a.wg)(),(0,a.j4)(v,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:1}),(0,a.Wm)(c,{field:"attr4",title:"Project name",formatter:e.formatPanmeLabel,"edit-render":{}},{edit:(0,a.w5)((function(n){var t=n.row;return[(0,a.Wm)(f,{modelValue:t.attr4,"onUpdate:modelValue":function(e){return t.attr4=e},transfer:""},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.demo1.pnameList,(function(e){return(0,a.wg)(),(0,a.j4)(v,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1},8,["formatter"]),(0,a.Wm)(c,{field:"date12",title:"Date","edit-render":{}},{edit:(0,a.w5)((function(e){var n=e.row;return[(0,a.Wm)(p,{modelValue:n.date12,"onUpdate:modelValue":function(e){return n.date12=e},type:"date"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["data","onEditActived"]),(0,a._)("p",o,(0,r.zw)(e.$t("app.body.button.showCode")),1),(0,a._)("pre",null,[(0,a.Uk)("      "),(0,a.Wm)(b,{class:"xml"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(e.demoCodes[0]),1)]})),_:1}),(0,a.Uk)("\n      "),(0,a.Wm)(b,{class:"typescript"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(e.demoCodes[1]),1)]})),_:1}),(0,a.Uk)("\n    ")])])}t(25728),t(60228),t(47522),t(77049),t(21694),t(70560),t(34338);var m=t(2262),u=t(38478),d=t.n(u),s=(0,a.aZ)({setup:function(){var e=(0,m.iH)(),n=(0,m.qj)({tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:20,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"}],ptypeList:[{label:"项目1",value:"1"},{label:"项目2",value:"2"},{label:"项目3",value:"3"}],pnameList:[],cachePnameList:[]}),t=function(e){var t=n.ptypeList.find((function(n){return n.value===e}));return t?t.label:e},a=function(){var n=e.value;if(n){var t={};n.insert(t)}},r=function(e){var t=e.cellValue,a=e.row,r=a.attr3,l=n.cachePnameList.find((function(e){return e.ptype===r}));if(l&&l.pnameList){var o=l.pnameList.find((function(e){return e.value===t}));if(o)return o.label}return""},l=function(e){var t=e.attr3,a=[];if(t){var r=n.cachePnameList.find((function(e){return e.ptype===t}));r?a=r.pnameList:(Array.from(new Array(d().random(3,8))).forEach((function(e,n){a.push({label:"".concat(t,"-名称").concat(n),value:"".concat(t,"_").concat(n)})})),n.cachePnameList.push({ptype:t,pnameList:a}))}n.pnameList=a},o=function(e){var n=e.row;n.attr4="",l(n)},i=function(e){var n=e.row;l(n)};return{xTable:e,demo1:n,formatProjectType:t,insertEvent:a,formatPanmeLabel:r,ptypeChangeEvent:o,editActivedEvent:i,demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="insertEvent()">新增</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          show-overflow\n          ref="xTable"\n          max-height="400"\n          :column-config="{resizable: true}"\n          :data="demo1.tableData"\n          :edit-config="{trigger: \'click\', mode: \'row\'}"\n          @edit-actived="editActivedEvent">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.name" type="text"></vxe-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="attr3" title="Project type" :edit-render="{}">\n            <template #default="{ row }">\n              <span>{{ formatProjectType(row.attr3) }}</span>\n            </template>\n            <template #edit="{ row }">\n              <vxe-select v-model="row.attr3" transfer @change="ptypeChangeEvent({ row })">\n                <vxe-option v-for="item in demo1.ptypeList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n              </vxe-select>\n            </template>\n          </vxe-column>\n          <vxe-column field="attr4" title="Project name" :formatter="formatPanmeLabel" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-select v-model="row.attr4" transfer>\n                <vxe-option v-for="item in demo1.pnameList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>\n              </vxe-select>\n            </template>\n          </vxe-column>\n          <vxe-column field="date12" title="Date" :edit-render="{}">\n            <template #edit="{ row }">\n              <vxe-input v-model="row.date12" type="date"></vxe-input>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VxeTableInstance, VxeColumnPropTypes, VxeTableEvents } from 'vxe-table'\n        import XEUtils from 'xe-utils'\n\n        export default defineComponent({\n          setup () {\n            const xTable = ref<VxeTableInstance>()\n\n            const demo1 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }\n              ],\n              ptypeList: [\n                { label: '项目1', value: '1' },\n                { label: '项目2', value: '2' },\n                { label: '项目3', value: '3' }\n              ],\n              pnameList: [] as any[],\n              cachePnameList: [] as any[]\n            })\n\n            const formatProjectType = (value: any) => {\n              const item = demo1.ptypeList.find(item => item.value === value)\n              return item ? item.label : value\n            }\n\n            const insertEvent = () => {\n              const $table = xTable.value\n              const record = {}\n              $table.insert(record)\n            }\n\n            // 格式化显示名称\n            const formatPanmeLabel: VxeColumnPropTypes.Formatter = ({ cellValue, row }) => {\n              const ptype = row.attr3\n              const cacheItem = demo1.cachePnameList.find(item => item.ptype === ptype)\n              if (cacheItem && cacheItem.pnameList) {\n                const pnameItem = cacheItem.pnameList.find((item: any) => item.value === cellValue)\n                if (pnameItem) {\n                  return pnameItem.label\n                }\n              }\n              return ''\n            }\n\n            // 更新级联选项列表\n            const updatePnameList = (row: any) => {\n              const ptype = row.attr3\n              let pnameList: any[] = []\n              if (ptype) {\n                const item = demo1.cachePnameList.find(item => item.ptype === ptype)\n                if (item) {\n                  pnameList = item.pnameList\n                } else {\n                  // 模拟后台数据\n                  Array.from(new Array(XEUtils.random(3, 8))).forEach((item, index) => {\n                    pnameList.push({\n                      label: `${ptype}-名称${index}`,\n                      value: `${ptype}_${index}`\n                    })\n                  })\n                  demo1.cachePnameList.push({ ptype, pnameList })\n                }\n              }\n              demo1.pnameList = pnameList\n            }\n\n            const ptypeChangeEvent = ({ row }: any) => {\n              // 类型切换时更新级联的下拉数据\n              row.attr4 = ''\n              updatePnameList(row)\n            }\n\n            const editActivedEvent: VxeTableEvents.EditActived = ({ row }) => {\n              updatePnameList(row)\n            }\n\n            return {\n              xTable,\n              demo1,\n              formatProjectType,\n              insertEvent,\n              formatPanmeLabel,\n              ptypeChangeEvent,\n              editActivedEvent\n            }\n          }\n        })\n        "]}}}),c=t(83744);const p=(0,c.Z)(s,[["render",i]]);var v=p}}]);