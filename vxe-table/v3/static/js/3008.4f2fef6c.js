"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[3008],{52059:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var a=function(){var e=this,n=e._self._c;return n("div",[n("h1",[e._v(e._s(e.$t("app.aside.nav.menus")))]),e._m(0),n("vxe-table",{attrs:{resizable:"","row-config":{isCurrent:!0,isHover:!0},"column-config":{isCurrent:!0},data:e.tableData}},[n("vxe-column",{attrs:{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}}),n("vxe-column",{attrs:{field:"desc",title:"app.api.title.desc","min-width":"200"}}),n("vxe-column",{attrs:{field:"type",title:"app.api.title.type","min-width":"140"}}),n("vxe-column",{attrs:{field:"enum",title:"app.api.title.enum","min-width":"150"}}),n("vxe-column",{attrs:{field:"defVal",title:"app.api.title.defVal","min-width":"160"}})],1),n("h2",[e._v("示例")]),n("pre",[e._v("    "),n("pre-code",{staticClass:"html"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},l=[function(){var e=this,n=e._self._c;return n("p",{staticClass:"tip"},[e._v(" 将右键菜单注册成全局可复用的"),n("br"),n("span",{staticClass:"red"},[e._v("（注：高级功能难度较高，不适合非前端和初级前端使用）")])])}],s={data:function(){return{tableData:[{name:"add(code, callback)",desc:"添加一个",type:"",enum:"",defVal:"code: string, callback: (params, event) => any",list:[]},{name:"mixin(options)",desc:"添加多个",type:"",enum:"",defVal:"options: { [code: string]: (params, event) => any }",list:[]},{name:"delete(code)",desc:"删除",type:"",enum:"",defVal:"code: string",list:[]}],demoCodes:['\n        <vxe-table\n          border\n          :menu-config="tableMenu"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        VXETable.menus.add('exportData', (params, event) => {\n          let { $table } = params\n          $table.exportData()\n        })\n\n        VXETable.menus.add('insert', (params, event) => {\n          let { $table, menu } = params\n          // 读取自定义的参数\n          $table.insert(menu.record)\n        })\n\n        export default {\n          data () {\n            return {\n              tableMenu: {\n                body: {\n                  options: [\n                    [\n                      { code: 'exportData', name: '导出.csv' },\n                      { code: 'insert', name: '新增', record: { name: '默认名称' } }\n                    ]\n                  ]\n                }\n              },\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }\n              ]\n            }\n          }\n        }\n        "]}}},i=s,d=t(1001),r=(0,d.Z)(i,a,l,!1,null,null,null),o=r.exports}}]);