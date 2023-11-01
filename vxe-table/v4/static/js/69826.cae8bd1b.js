"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[69826],{69826:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(66252),l=t(3577),o=(0,a._)("p",{class:"tip"},[(0,a.Uk)(" 将工具栏按钮或数据代理中常用的指令注册成全局可复用"),(0,a._)("br"),(0,a._)("span",{class:"red"},"（注：高级功能难度较高，不适合非前端和初级前端使用）")],-1),i=(0,a._)("h2",null,"示例",-1);function s(e,n,t,s,d,r){var m=(0,a.up)("vxe-column"),u=(0,a.up)("vxe-table"),p=(0,a.up)("pre-code");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("h1",null,(0,l.zw)(e.$t("app.aside.nav.commands")),1),o,(0,a.Wm)(u,{"row-config":{isCurrent:!0,isHover:!0},"column-config":{resizable:!0,isCurrent:!0},data:e.tableData},{default:(0,a.w5)((function(){return[(0,a.Wm)(m,{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}),(0,a.Wm)(m,{field:"desc",title:"app.api.title.desc","min-width":"200"}),(0,a.Wm)(m,{field:"type",title:"app.api.title.type","min-width":"140"}),(0,a.Wm)(m,{field:"enum",title:"app.api.title.enum","min-width":"150"}),(0,a.Wm)(m,{field:"defVal",title:"app.api.title.defVal","min-width":"160"})]})),_:1},8,["data"]),i,(0,a._)("pre",null,[(0,a.Uk)("      "),(0,a.Wm)(p,{class:"typescript"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,l.zw)(e.demoCodes[0]),1)]})),_:1}),(0,a.Uk)("\n      "),(0,a.Wm)(p,{class:"html"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,l.zw)(e.demoCodes[1]),1)]})),_:1}),(0,a.Uk)("\n      "),(0,a.Wm)(p,{class:"typescript"},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,l.zw)(e.demoCodes[2]),1)]})),_:1}),(0,a.Uk)("\n    ")])])}var d=t(2262),r=(0,a.aZ)({setup:function(){var e=(0,d.iH)([{name:"add(code, callback)",desc:"添加一个",version:"",type:"",enum:"",defVal:"code: string, callback: (params) => any",list:[]},{name:"mixin(options)",desc:"添加多个",version:"",type:"",enum:"",defVal:"options: { [code: string]: (params) => any }",list:[]},{name:"delete(code)",desc:"删除",version:"",type:"",enum:"",defVal:"code: string",list:[]}]);return{tableData:e,demoCodes:["\n        import VXETable from 'vxe-table'\n\n        VXETable.commands.add('exportBtn', (params) => {\n          const { $table, code, button } = params\n          $table.exportData()\n        })\n        ",'\n        <vxe-toolbar :buttons="toolbarButtons"></vxe-toolbar>\n\n        <vxe-table\n          border\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, ref } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const toolbarButtons = ref([\n              { code: 'exportBtn', name: '导出.csv' }\n            ])\n            const tableData = ref([\n              { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n              { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n              { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n              { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }\n            ])\n            return {\n              toolbarButtons,\n              tableData\n            }\n          }\n        })\n        "]}}}),m=t(83744);const u=(0,m.Z)(r,[["render",s]]);var p=u}}]);