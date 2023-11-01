"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[838],{90838:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 完整功能：服务端排序代理、服务端筛选代理、服务端分页代理、服务端增删改查、服务端导入导出"),t("br"),e._v(" 还可以通过配置 "),t("grid-api-link",{attrs:{prop:"form-config"}}),e._v(" 实现动态表单，还可以通过 "),t("grid-api-link",{attrs:{prop:"titlePrefix"}}),e._v(" 或 "),t("grid-api-link",{attrs:{prop:"titleSuffix"}}),e._v(" 设置标题提示信息"),t("br"),e._v(" 对于分页场景下，如果想要保留选中状态，可以通过设置 "),t("table-api-link",{attrs:{prop:"checkbox-config"}}),e._v(" 的 "),t("table-api-link",{attrs:{prop:"reserve"}}),e._v(" 属性"),t("br"),e._v(" 还可以通过 "),t("table-api-link",{attrs:{prop:"checkMethod"}}),e._v(" 设置个性化列禁止勾选"),t("br"),e._v(" 由 "),t("grid-api-link",{attrs:{name:"vxe-grid"}}),e._v(" 代理数据转换，只需要配置好数据源即可；非常简单就可以渲染一个表格，从重复写冗余的代码中解放出来 ")],1),t("vxe-grid",e._b({ref:"xGrid",on:{"proxy-query":e.proxyQueryEvent,"proxy-delete":e.proxyDeleteEvent,"proxy-save":e.proxySaveEvent}},"vxe-grid",e.gridOptions,!1)),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},i=[],o=n(44452),a=(n(65137),n(60228),n(47522),n(76265),n(6203),n(34338),n(48324),n(76801),n(50886),n(20629)),s=n(38478),l=n.n(s),p=n(69851),d=n.n(p),c={data:function(){var e=this;return{gridOptions:{border:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,id:"full_edit_1",height:600,rowId:"id",rowConfig:{isHover:!0},columnConfig:{resizable:!0},customConfig:{storage:!0,checkMethod:this.checkColumnMethod},printConfig:{columns:[{field:"name"},{field:"email"},{field:"nickname"},{field:"age"},{field:"amount"}]},sortConfig:{trigger:"cell",remote:!0},filterConfig:{remote:!0},pagerConfig:{pageSize:10,pageSizes:[5,10,15,20,50,100,200,500,1e3]},formConfig:{titleWidth:100,titleAlign:"right",items:[{field:"name",title:"app.body.label.name",span:8,titlePrefix:{message:"app.body.valid.rName",icon:"vxe-icon-info-circle-fill"},itemRender:{name:"$input",props:{placeholder:"请输入名称"}}},{field:"email",title:"邮件",span:8,titlePrefix:{useHTML:!0,message:'点击链接：<a class="link" href="https://vxetable.cn" target="_blank">vxe-table官网</a>',icon:"vxe-icon-question-circle-fill"},itemRender:{name:"$input",props:{placeholder:"请输入邮件"}}},{field:"nickname",title:"昵称",span:8,itemRender:{name:"$input",props:{placeholder:"请输入昵称"}}},{field:"role",title:"角色",span:8,folding:!0,itemRender:{name:"$input",props:{placeholder:"请输入角色"}}},{field:"sex",title:"性别",span:8,folding:!0,titleSuffix:{message:"注意，必填信息！",icon:"vxe-icon-info-circle-fill"},itemRender:{name:"$select",options:[]}},{field:"age",title:"年龄",span:8,folding:!0,itemRender:{name:"$input",props:{type:"number",min:1,max:120,placeholder:"请输入年龄"}}},{span:24,align:"center",collapseNode:!0,itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"app.body.label.search",status:"primary"}},{props:{type:"reset",content:"app.body.label.reset"}}]}}]},toolbarConfig:{buttons:[{code:"insert_actived",name:"新增",icon:"vxe-icon-square-plus"},{code:"delete",name:"直接删除",icon:"vxe-icon-delete"},{code:"mark_cancel",name:"删除/取消",icon:"vxe-icon-delete"},{code:"save",name:"app.body.button.save",icon:"vxe-icon-save",status:"success"}],refresh:!0,import:!0,export:!0,print:!0,zoom:!0,custom:!0},proxyConfig:{seq:!0,sort:!0,filter:!0,form:!0,props:{result:"result",total:"page.total"},ajax:{query:function(t){var n=t.page,r=t.sorts,i=t.filters,o=t.form,a=Object.assign({},o),s=r[0];return s&&(a.sort=s.property,a.order=s.order),i.forEach((function(e){var t=e.property,n=e.values;a[t]=n.join(",")})),fetch("".concat(e.serveApiUrl,"/api/pub/page/list/").concat(n.pageSize,"/").concat(n.currentPage),a).then((function(e){return e.json()}))},delete:function(t){var n=t.body;return fetch("".concat(e.serveApiUrl,"/api/pub/save"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))},save:function(t){var n=t.body;return fetch("".concat(e.serveApiUrl,"/api/pub/save"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))}}},columns:[{type:"checkbox",title:"ID",width:120},{field:"name",title:"Name",sortable:!0,titlePrefix:{message:"名称必须填写！"},editRender:{name:"input",attrs:{placeholder:"请输入名称"}}},{field:"role",title:"Role",sortable:!0,titlePrefix:{useHTML:!0,content:'点击链接：<a class="link" href="https://vxetable.cn" target="_blank">vxe-table官网</a>'},filters:[{label:"前端开发",value:"前端"},{label:"后端开发",value:"后端"},{label:"测试",value:"测试"},{label:"程序员鼓励师",value:"程序员鼓励师"}],filterMultiple:!1,editRender:{name:"input",attrs:{placeholder:"请输入角色"}}},{field:"email",title:"Email",width:160,editRender:{name:"$input",props:{placeholder:"请输入邮件"}}},{field:"nickname",title:"Nickname",editRender:{name:"input",attrs:{placeholder:"请输入昵称"}}},{field:"sex",title:"Sex",filters:[{label:"男",value:"1"},{label:"女",value:"0"}],editRender:{name:"$select",options:[],props:{placeholder:"请选择性别"}}},{field:"age",title:"Age",visible:!1,sortable:!0,editRender:{name:"$input",props:{type:"number",min:1,max:120}}},{field:"amount",title:"Amount",formatter:this.formatAmount,editRender:{name:"$input",props:{type:"float",digits:2,placeholder:"请输入数值"}}},{field:"updateDate",title:"Update Date",width:160,visible:!1,sortable:!0,formatter:this.formatDate},{field:"createDate",title:"Create Date",width:160,visible:!1,sortable:!0,formatter:this.formatDate}],importConfig:{remote:!0,importMethod:this.importMethod,types:["xlsx"],modes:["insert"]},exportConfig:{remote:!0,exportMethod:this.exportMethod,types:["xlsx"],modes:["current","selected","all"]},checkboxConfig:{labelField:"id",reserve:!0,highlight:!0,range:!0},editRules:{name:[{required:!0,message:"app.body.valid.rName"},{min:3,max:50,message:"名称长度在 3 到 50 个字符"}],email:[{required:!0,message:"邮件必须填写"}],role:[{required:!0,message:"角色必须填写"}]},editConfig:{trigger:"click",mode:"row",showStatus:!0}},demoCodes:['\n        <vxe-grid\n          ref=\'xGrid\'\n          v-bind="gridOptions"\n          @proxy-query="proxyQueryEvent"\n          @proxy-delete="proxyDeleteEvent"\n          @proxy-save="proxySaveEvent">\n        </vxe-grid>\n        ',"\n        import { mapState } from 'vuex'\n        import XEUtils from 'xe-utils'\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              gridOptions: {\n                border: true,\n                showHeaderOverflow: true,\n                showOverflow: true,\n                keepSource: true,\n                id: 'full_edit_1',\n                height: 600,\n                rowId: 'id',\n                rowConfig: {\n                  isHover: true\n                },\n                columnConfig: {\n                  resizable: true\n                },\n                customConfig: {\n                  storage: true,\n                  checkMethod: this.checkColumnMethod\n                },\n                printConfig: {\n                  columns: [\n                    { field: 'name' },\n                    { field: 'email' },\n                    { field: 'nickname' },\n                    { field: 'age' },\n                    { field: 'amount' }\n                  ]\n                },\n                sortConfig: {\n                  trigger: 'cell',\n                  remote: true\n                },\n                filterConfig: {\n                  remote: true\n                },\n                pagerConfig: {\n                  pageSize: 10,\n                  pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000]\n                },\n                formConfig: {\n                  titleWidth: 100,\n                  titleAlign: 'right',\n                  items: [\n                    { field: 'name', title: 'app.body.label.name', span: 8, titlePrefix: { message: 'app.body.valid.rName', icon: 'vxe-icon-info-circle-fill' }, itemRender: { name: '$input', props: { placeholder: '请输入名称' } } },\n                    { field: 'email', title: '邮件', span: 8, titlePrefix: { useHTML: true, message: '点击链接：<a class=\"link\" href=\"https://vxetable.cn\" target=\"_blank\">vxe-table官网</a>', icon: 'vxe-icon-question-circle-fill' }, itemRender: { name: '$input', props: { placeholder: '请输入邮件' } } },\n                    { field: 'nickname', title: '昵称', span: 8, itemRender: { name: '$input', props: { placeholder: '请输入昵称' } } },\n                    { field: 'role', title: '角色', span: 8, folding: true, itemRender: { name: '$input', props: { placeholder: '请输入角色' } } },\n                    { field: 'sex', title: '性别', span: 8, folding: true, titleSuffix: { message: '注意，必填信息！', icon: 'vxe-icon-info-circle-fill' }, itemRender: { name: '$select', options: [] } },\n                    { field: 'age', title: '年龄', span: 8, folding: true, itemRender: { name: '$input', props: { type: 'number', min: 1, max: 120, placeholder: '请输入年龄' } } },\n                    { span: 24, align: 'center', collapseNode: true, itemRender: { name: '$buttons', children: [{ props: { type: 'submit', content: 'app.body.label.search', status: 'primary' } }, { props: { type: 'reset', content: 'app.body.label.reset' } }] } }\n                  ]\n                },\n                toolbarConfig: {\n                  buttons: [\n                    { code: 'insert_actived', name: '新增', icon: 'vxe-icon-square-plus' },\n                    { code: 'delete', name: '直接删除', icon: 'vxe-icon-delete' },\n                    { code: 'mark_cancel', name: '删除/取消', icon: 'vxe-icon-delete' },\n                    { code: 'save', name: 'app.body.button.save', icon: 'vxe-icon-save', status: 'success' }\n                  ],\n                  refresh: true,\n                  import: true,\n                  export: true,\n                  print: true,\n                  zoom: true,\n                  custom: true\n                },\n                proxyConfig: {\n                  seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化\n                  sort: true, // 启用排序代理，当点击排序时会自动触发 query 行为\n                  filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为\n                  form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为\n                  // 对应响应结果 { result: [], page: { total: 100 } }\n                  props: {\n                    result: 'result', // 配置响应结果列表字段\n                    total: 'page.total' // 配置响应结果总页数字段\n                  },\n                  // 只接收Promise，具体实现自由发挥\n                  ajax: {\n                    // 当点击工具栏查询按钮或者手动提交指令 query或reload 时会被触发\n                    query: ({ page, sorts, filters, form }) => {\n                      const queryParams = Object.assign({}, form)\n                      // 处理排序条件\n                      const firstSort = sorts[0]\n                      if (firstSort) {\n                        queryParams.sort = firstSort.property\n                        queryParams.order = firstSort.order\n                      }\n                      // 处理筛选条件\n                      filters.forEach(({ property, values }) => {\n                        queryParams[property] = values.join(',')\n                      })\n                      return fetch(`${this.serveApiUrl}/api/pub/page/list/${page.pageSize}/${page.currentPage}`, queryParams).then(response => response.json())\n                    },\n                    // 当点击工具栏删除按钮或者手动提交指令 delete 时会被触发\n                    delete: ({ body }) => {\n                      return fetch(`${this.serveApiUrl}/api/pub/save`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(response => response.json())\n                    },\n                    // 当点击工具栏保存按钮或者手动提交指令 save 时会被触发\n                    save: ({ body }) => {\n                      return fetch(`${this.serveApiUrl}/api/pub/save`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(response => response.json())\n                    }\n                  }\n                },\n                columns: [\n                  { type: 'checkbox', title: 'ID', width: 120 },\n                  { field: 'name', title: 'Name', sortable: true, titlePrefix: { message: '名称必须填写！' }, editRender: { name: 'input', attrs: { placeholder: '请输入名称' } } },\n                  {\n                    field: 'role',\n                    title: 'Role',\n                    sortable: true,\n                    titlePrefix: { useHTML: true, content: '点击链接：<a class=\"link\" href=\"https://vxetable.cn\" target=\"_blank\">vxe-table官网</a>' },\n                    filters: [\n                      { label: '前端开发', value: '前端' },\n                      { label: '后端开发', value: '后端' },\n                      { label: '测试', value: '测试' },\n                      { label: '程序员鼓励师', value: '程序员鼓励师' }\n                    ],\n                    filterMultiple: false,\n                    editRender: { name: 'input', attrs: { placeholder: '请输入角色' } }\n                  },\n                  { field: 'email', title: 'Email', width: 160, editRender: { name: '$input', props: { placeholder: '请输入邮件' } } },\n                  { field: 'nickname', title: 'Nickname', editRender: { name: 'input', attrs: { placeholder: '请输入昵称' } } },\n                  {\n                    field: 'sex',\n                    title: 'Sex',\n                    filters: [\n                      { label: '男', value: '1' },\n                      { label: '女', value: '0' }\n                    ],\n                    editRender: { name: '$select', options: [], props: { placeholder: '请选择性别' } }\n                  },\n                  { field: 'age', title: 'Age', visible: false, sortable: true, editRender: { name: '$input', props: { type: 'number', min: 1, max: 120 } } },\n                  { field: 'amount', title: 'Amount', formatter: this.formatAmount, editRender: { name: '$input', props: { type: 'float', digits: 2, placeholder: '请输入数值' } } },\n                  { field: 'updateDate', title: 'Update Date', width: 160, visible: false, sortable: true, formatter: this.formatDate },\n                  { field: 'createDate', title: 'Create Date', width: 160, visible: false, sortable: true, formatter: this.formatDate }\n                ],\n                importConfig: {\n                  remote: true,\n                  importMethod: this.importMethod,\n                  types: ['xlsx'],\n                  modes: ['insert']\n                },\n                exportConfig: {\n                  remote: true,\n                  exportMethod: this.exportMethod,\n                  types: ['xlsx'],\n                  modes: ['current', 'selected', 'all']\n                },\n                checkboxConfig: {\n                  labelField: 'id',\n                  reserve: true,\n                  highlight: true,\n                  range: true\n                },\n                editRules: {\n                  name: [\n                    { required: true, message: 'app.body.valid.rName' },\n                    { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }\n                  ],\n                  email: [\n                    { required: true, message: '邮件必须填写' }\n                  ],\n                  role: [\n                    { required: true, message: '角色必须填写' }\n                  ]\n                },\n                editConfig: {\n                  trigger: 'click',\n                  mode: 'row',\n                  showStatus: true\n                }\n              }\n            }\n          },\n          computed: {\n            ...mapState([\n              'serveApiUrl'\n            ])\n          },\n          created () {\n            this.findSexList()\n          },\n          methods: {\n            findSexList () {\n              setTimeout(() => {\n                const sexList = [\n                  { label: '', value: '' },\n                  { label: '男', value: '1' },\n                  { label: '女', value: '0' }\n                ]\n                // 异步更新下拉选项\n                this.sexList = sexList\n                const $grid = this.$refs.xGrid\n                if ($grid) {\n                  const sexColumn = $grid.getColumnByField('sex')\n                  sexColumn.editRender.options = sexList\n                  const sexItem = $grid.getFormItems(4)\n                  sexItem.itemRender.options = sexList\n                }\n              }, 100)\n            },\n            formatAmount ({ cellValue }) {\n              return cellValue ? `￥${XEUtils.commafy(XEUtils.toNumber(cellValue), { digits: 2 })}` : ''\n            },\n            formatDate ({ cellValue }) {\n              return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')\n            },\n            checkColumnMethod ({ column }) {\n              if (['nickname', 'role'].includes(column.property)) {\n                return false\n              }\n              return true\n            },\n            // 自定义服务端导入\n            importMethod ({ file }) {\n              // 处理表单\n              const formBody = new FormData()\n              formBody.append('file', file)\n              // 上传文件\n              return fetch(`${this.serveApiUrl}/api/pub/import`, { method: 'POST', body: formBody }).then(response => response.join()).then(data => {\n                const $grid = this.$refs.xGrid\n                VXETable.modal.message({ content: `成功导入 ${data.result.insertRows} 条记录！`, status: 'success' })\n                // 导入完成，刷新表格\n                $grid.commitProxy('query')\n              }).catch(() => {\n                VXETable.modal.message({ content: '导入失败，请检查数据是否正确！', status: 'error' })\n              })\n            },\n            // 自定义服务端导出\n            exportMethod ({ options }) {\n              const $grid = this.$refs.xGrid\n              const proxyInfo = $grid.getProxyInfo()\n              // 传给服务端的参数\n              const body = {\n                filename: options.filename,\n                sheetName: options.sheetName,\n                isHeader: options.isHeader,\n                original: options.original,\n                mode: options.mode,\n                pager: proxyInfo.pager,\n                ids: options.mode === 'selected' ? options.data.map(item => item.id) : [],\n                fields: options.columns.map(column => {\n                  return {\n                    field: column.property,\n                    title: column.title\n                  }\n                })\n              }\n              // 开始服务端导出\n              return fetch(`${this.serveApiUrl}/api/pub/export`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(response => response.json()).then(data => {\n                if (data.id) {\n                  VXETable.modal.message({ content: '导出成功，开始下载', status: 'success' })\n                  // 读取路径，请求文件\n                  fetch(`${this.serveApiUrl}/api/pub/export/download/${data.id}`)\n                    .then(response => response.blob())\n                    .then(blob => {\n                      // 开始下载\n                      VXETable.saveFile({ filename: '导出数据', type: 'xlsx', content: blob })\n                    })\n                }\n              }).catch(() => {\n                VXETable.modal.message({ content: '导出失败！', status: 'error' })\n              })\n            }\n          }\n        }\n        "]}},computed:(0,o.Z)({},(0,a.rn)(["serveApiUrl"])),created:function(){this.findSexList()},methods:{findSexList:function(){var e=this;setTimeout((function(){var t=[{label:"",value:""},{label:"男",value:"1"},{label:"女",value:"0"}];e.sexList=t;var n=e.$refs.xGrid;if(n){var r=n.getColumnByField("sex");r.editRender.options=t;var i=n.getFormItems(4);i.itemRender.options=t}}),100)},formatAmount:function(e){var t=e.cellValue;return t?"￥".concat(l().commafy(l().toNumber(t),{digits:2})):""},formatDate:function(e){var t=e.cellValue;return l().toDateString(t,"yyyy-MM-dd HH:ss:mm")},checkColumnMethod:function(e){var t=e.column;return!["nickname","role"].includes(t.property)},proxyQueryEvent:function(){console.log("数据代理查询事件")},proxyDeleteEvent:function(){console.log("数据代理删除事件")},proxySaveEvent:function(){console.log("数据代理保存事件")},importMethod:function(e){var t=this,n=e.file,r=new FormData;return r.append("file",n),fetch("".concat(this.serveApiUrl,"/api/pub/import"),{method:"POST",body:r}).then((function(e){return e.join()})).then((function(e){var n=t.$refs.xGrid;d().modal.message({content:"成功导入 ".concat(e.result.insertRows," 条记录！"),status:"success"}),n.commitProxy("query")})).catch((function(){d().modal.message({content:"导入失败，请检查数据是否正确！",status:"error"})}))},exportMethod:function(e){var t=this,n=e.options,r=this.$refs.xGrid,i=r.getProxyInfo(),o={filename:n.filename,sheetName:n.sheetName,isHeader:n.isHeader,original:n.original,mode:n.mode,pager:i.pager,ids:"selected"===n.mode?n.data.map((function(e){return e.id})):[],fields:n.columns.map((function(e){return{field:e.property,title:e.title}}))};return fetch("".concat(this.serveApiUrl,"/api/pub/export"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){e.id&&(d().modal.message({content:"导出成功，开始下载",status:"success"}),fetch("".concat(t.serveApiUrl,"/api/pub/export/download/").concat(e.id)).then((function(e){return e.blob()})).then((function(e){d().saveFile({filename:"导出数据",type:"xlsx",content:e})})))})).catch((function(){d().modal.message({content:"导出失败！",status:"error"})}))}}},u=c,m=n(1001),f=(0,m.Z)(u,r,i,!1,null,null,null),h=f.exports},50382:function(e,t,n){var r=n(9015),i=Math.floor,o=function(e,t){var n=e.length,l=i(n/2);return n<8?a(e,t):s(e,o(r(e,0,l),t),o(r(e,l),t),t)},a=function(e,t){var n,r,i=e.length,o=1;while(o<i){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},s=function(e,t,n,r){var i=t.length,o=n.length,a=0,s=0;while(a<i||s<o)e[a+s]=a<i&&s<o?r(t[a],n[s])<=0?t[a++]:n[s++]:a<i?t[a++]:n[s++];return e};e.exports=o},97365:function(e,t,n){var r=n(30071),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},37298:function(e,t,n){var r=n(30071);e.exports=/MSIE|Trident/.test(r)},27922:function(e,t,n){var r=n(30071),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},6203:function(e,t,n){var r=n(79989),i=n(68844),o=n(94413),a=n(65290),s=n(16834),l=i([].join),p=o!==Object,d=p||!s("join",",");r({target:"Array",proto:!0,forced:d},{join:function(e){return l(a(this),void 0===e?",":e)}})},65137:function(e,t,n){var r=n(79989),i=n(68844),o=n(10509),a=n(90690),s=n(6310),l=n(98494),p=n(34327),d=n(3689),c=n(50382),u=n(16834),m=n(97365),f=n(37298),h=n(3615),v=n(27922),g=[],b=i(g.sort),x=i(g.push),y=d((function(){g.sort(void 0)})),C=d((function(){g.sort(null)})),k=u("sort"),$=!d((function(){if(h)return h<70;if(!(m&&m>3)){if(f)return!0;if(v)return v<603;var e,t,n,r,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)g.push({k:t+r,v:n})}for(g.sort((function(e,t){return t.v-e.v})),r=0;r<g.length;r++)t=g[r].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),S=y||!C||!k||!$,_=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:p(t)>p(n)?1:-1}};r({target:"Array",proto:!0,forced:S},{sort:function(e){void 0!==e&&o(e);var t=a(this);if($)return void 0===e?b(t):b(t,e);var n,r,i=[],p=s(t);for(r=0;r<p;r++)r in t&&x(i,t[r]);c(i,_(e)),n=s(i),r=0;while(r<n)t[r]=i[r++];while(r<p)l(t,r++);return t}})}}]);