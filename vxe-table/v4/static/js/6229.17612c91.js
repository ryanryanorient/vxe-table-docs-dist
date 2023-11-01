"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[6229],{6229:function(e,n,a){a.r(n),a.d(n,{default:function(){return z}});var l=a(66252),t=a(3577),r={class:"tip"},s=(0,l._)("a",{class:"link",href:"https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/plugins/table/renderer",target:"_blank"},"示例的源码",-1),o=(0,l._)("span",{class:"red"},"（具体请自行实现，该示例仅供参考）",-1),i=(0,l._)("br",null,null,-1),d=(0,l._)("br",null,null,-1),u=(0,l._)("br",null,null,-1),m=(0,l._)("br",null,null,-1),p=(0,l._)("br",null,null,-1),f=(0,l._)("br",null,null,-1),c=(0,l._)("br",null,null,-1),h=(0,l._)("br",null,null,-1),v=(0,l._)("br",null,null,-1),g=(0,l._)("span",{class:"orange"},"changeOption(event: Event | null, checked: boolean, option) 更新选项的状态",-1),x=(0,l._)("br",null,null,-1),b=(0,l._)("span",{class:"orange"},"confirmFilter(event?: Event) 确认筛选",-1),k=(0,l._)("br",null,null,-1),_=(0,l._)("span",{class:"orange"},"resetFilter(event?: Event) 清除筛选条件",-1),T={class:"demo-code"};function O(e,n,a,O,M,U){var w=(0,l.up)("table-column-api-link"),W=(0,l.up)("vxe-column"),z=(0,l.up)("vxe-table"),D=(0,l.up)("pre-code");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("p",r,[(0,l.Uk)(" 筛选渲染 "),(0,l.Wm)(w,{prop:"filter-render"}),(0,l.Uk)("，查看 "),s,o,i,(0,l.Uk)(" 配置参数："),d,(0,l.Uk)(" filterClassName: string | (params: { column, $table }) => string 筛选容器className"),u,(0,l.Uk)(" showFilterFooter: 是否显示底部按钮"),m,(0,l.Uk)(" renderFilter (params: { column, columnIndex, columnIndex, $panel }) 内容"),p,(0,l.Uk)(" filterMethod (params: { value, option, cellValue, row, column, $table }) 筛选数据函数"),f,(0,l.Uk)(" filterResetMethod (params: { options, column }) 筛选重置函数"),c,(0,l.Uk)(" filterRecoverMethod (params: { option, column }) 筛选复原函数"),h,(0,l.Uk)(" $panel 对象:"),v,(0,l.Uk)("   "),g,x,(0,l.Uk)("   "),b,k,(0,l.Uk)("   "),_]),(0,l.Wm)(z,{border:"",height:"400",data:e.tableData},{default:(0,l.w5)((function(){return[(0,l.Wm)(W,{type:"seq",width:"60"}),(0,l.Wm)(W,{field:"name",title:"文本筛选",filters:e.nameOptions,"filter-render":{name:"FilterInput"}},null,8,["filters"]),(0,l.Wm)(W,{field:"role",title:"实现条件的筛选",filters:e.roleOptions,"filter-render":{name:"FilterComplex"}},null,8,["filters"]),(0,l.Wm)(W,{field:"age",title:"实现内容的筛选",filters:e.ageOptions,"filter-render":{name:"FilterContent"}},null,8,["filters"]),(0,l.Wm)(W,{field:"address",title:"实现复杂的筛选",sortable:"",filters:e.addressOptions,"filter-render":{name:"FilterExtend"}},null,8,["filters"])]})),_:1},8,["data"]),(0,l._)("p",T,(0,t.zw)(e.$t("app.body.button.showCode")),1),(0,l._)("pre",null,[(0,l.Uk)("      "),(0,l.Wm)(D,{class:"typescript"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,t.zw)(e.demoCodes[0]),1)]})),_:1}),(0,l.Uk)("\n      "),(0,l.Wm)(D,{class:"xml"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,t.zw)(e.demoCodes[1]),1)]})),_:1}),(0,l.Uk)("\n      "),(0,l.Wm)(D,{class:"typescript"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,t.zw)(e.demoCodes[2]),1)]})),_:1}),(0,l.Uk)("\n    ")])])}var M=a(2262),U=(0,l.aZ)({setup:function(){var e=(0,M.iH)([{id:10001,name:"Test1",role:"Develop",sex:"Man",age:"28",address:"Shenzhen"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:"22",address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:"32",address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:"23",address:"Shenzhen"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:"30",address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:"21",address:"Shenzhen"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:"29",address:"Shenzhen"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:"35",address:"Shenzhen"}]),n=(0,M.iH)([{data:null}]),a=(0,M.iH)([{data:{type:"has",name:""}}]),l=(0,M.iH)([{data:{vals:[],sVal:""}}]),t=(0,M.iH)([{data:{vals:[],sVal:"",fMenu:"",f1Type:"",f1Val:"",fMode:"and",f2Type:"",f2Val:""}}]);return{tableData:e,nameOptions:n,roleOptions:a,ageOptions:l,addressOptions:t,demoCodes:["\n        import VXETable from 'vxe-table'\n\n        // 创建一个简单的输入框筛选\n        VXETable.renderer.add('FilterInput', {\n          // 筛选模板\n          renderFilter (renderOpts, params) {\n            return <filter-input params={ params }></filter-input>\n          },\n          // 重置数据方法\n          filterResetMethod (params) {\n            const { options } = params\n            options.forEach((option) => {\n              option.data = ''\n            })\n          },\n          // 重置筛选复原方法（当未点击确认时，该选项将被恢复为默认值）\n          filterRecoverMethod ({ option }) {\n            option.data = ''\n          },\n          // 筛选方法\n          filterMethod (params) {\n            const { option, row, column } = params\n            const { data } = option\n            const cellValue = row[column.field]\n            if (cellValue) {\n              return cellValue.indexOf(data) > -1\n            }\n            return false\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="400"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="文本筛选" :filters="nameOptions" :filter-render="{name: \'FilterInput\'}"></vxe-column>\n          <vxe-column field="role" title="实现条件的筛选" :filters="roleOptions" :filter-render="{name: \'FilterComplex\'}"></vxe-column>\n          <vxe-column field="age" title="实现内容的筛选" :filters="ageOptions" :filter-render="{name: \'FilterContent\'}"></vxe-column>\n          <vxe-column field="address" title="实现复杂的筛选" sortable :filters="addressOptions" :filter-render="{name: \'FilterExtend\'}"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, ref } from 'vue'\n\n        export default defineComponent({\n          setup  () {\n            const tableData = ref([\n              { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: '28', address: 'Shenzhen' },\n              { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: '22', address: 'Guangzhou' },\n              { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: '32', address: 'Shanghai' },\n              { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: '23', address: 'Shenzhen' },\n              { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: '30', address: 'Shanghai' },\n              { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: '21', address: 'Shenzhen' },\n              { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: '29', address: 'Shenzhen' },\n              { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: '35', address: 'Shenzhen' }\n            ])\n\n            const nameOptions = ref([\n              { data: null }\n            ])\n\n            const roleOptions = ref([\n              { data: { type: 'has', name: '' } }\n            ])\n\n            const ageOptions = ref([\n              { data: { vals: [], sVal: '' } }\n            ])\n\n            const addressOptions = ref([\n              { data: { vals: [], sVal: '', fMenu: '', f1Type: '', f1Val: '', fMode: 'and', f2Type: '', f2Val: '' } }\n            ])\n\n            return {\n              tableData,\n              nameOptions,\n              roleOptions,\n              ageOptions,\n              addressOptions\n            }\n          }\n        })\n        "]}}}),w=a(83744);const W=(0,w.Z)(U,[["render",O]]);var z=W}}]);