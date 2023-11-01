"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[1458],{1458:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"tip"},[e._v(" 基于树表格实现分组汇总 ")]),n("vxe-table",{attrs:{resizable:"",loading:e.loading,"tree-config":e.tableTreeConfig,data:e.tableData}},[n("vxe-column",{attrs:{field:"name",title:"名称","tree-node":"",formatter:e.formatName}}),n("vxe-column",{attrs:{field:"level",title:"级别"}}),n("vxe-column",{attrs:{field:"age",title:"年龄"}}),n("vxe-column",{attrs:{field:"rate",title:"分数"}})],1),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},l=[],r=(t(60228),t(34338),t(34284),t(47522),t(79288),t(38478)),i=t.n(r),m={data:function(){return{loading:!1,tableData:[],tableTreeConfig:{children:"children",accordion:!0,expandAll:!1},demoCodes:['\n        <vxe-table\n          resizable\n          :loading="loading"\n          :tree-config="tableTreeConfig"\n          :data="tableData">\n          <vxe-column field="name" title="名称" tree-node :formatter="formatName"></vxe-column>\n          <vxe-column field="level" title="级别"></vxe-column>\n          <vxe-column field="age" title="年龄"></vxe-column>\n          <vxe-column field="rate" title="分数"></vxe-column>\n        </vxe-table>\n        ',"\n        import XEUtils from 'xe-utils'\n        \n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tableTreeConfig: {\n                children: 'children',\n                accordion: true, // 一层只允许展开一个节点\n                expandAll: false // 默认是否全部展开\n              }\n            }\n          },\n          created () {\n            this.loading = true\n            this.findList().then(data => {\n              this.tableData = this.getGroupSummary(data)\n              this.loading = false\n            })\n          },\n          methods: {\n            findList () {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  let list = [\n                    {\n                      name: '一班',\n                      level: '',\n                      age: '',\n                      rate: '',\n                      children: [\n                        { name: 'test7', rate: 9, age: 24, level: 1 },\n                        { name: 'test6', rate: 14, age: 20, level: 3 },\n                        {\n                          name: '第一组',\n                          level: '',\n                          age: '',\n                          rate: '',\n                          children: [\n                            { name: 'test85', rate: 13, age: 32, level: 1 },\n                            { name: 'test37', rate: 9, age: 29, level: 4 },\n                            { name: 'test93', rate: 22, age: 28, level: 5 },\n                            { name: 'test90', rate: 55, age: 26, level: 2 }\n                          ]\n                        },\n                        { name: 'test32', rate: 11, age: 21, level: 1 }\n                      ]\n                    },\n                    {\n                      name: '二班',\n                      level: '',\n                      age: '',\n                      rate: '',\n                      children: [\n                        { name: 'test15', rate: 13, age: 32, level: 1 },\n                        { name: 'test44', rate: 9, age: 29, level: 4 },\n                        {\n                          name: '第一组',\n                          level: '',\n                          age: '',\n                          rate: '',\n                          children: [\n                            { name: 'test37', rate: 9, age: 29, level: 4 },\n                            { name: 'test93', rate: 22, age: 28, level: 5 }\n                          ]\n                        },\n                        {\n                          name: '第二组',\n                          level: '',\n                          age: '',\n                          rate: '',\n                          children: [\n                            { name: 'test74', rate: 11, age: 32, level: 5 },\n                            { name: 'test99', rate: 23, age: 18, level: 4 },\n                            {\n                              name: '第一排',\n                              level: '',\n                              age: '',\n                              rate: '',\n                              children: [\n                                { name: 'test48', rate: 77, age: 29, level: 4 },\n                                { name: 'test38', rate: 34, age: 21, level: 2 }\n                              ]\n                            },\n                            { name: 'test16', rate: 22, age: 26, level: 5 }\n                          ]\n                        },\n                        { name: 'test91', rate: 16, age: 27, level: 5 },\n                        {\n                          name: '第三组',\n                          level: '',\n                          age: '',\n                          rate: '',\n                          children: [\n                            { name: 'test77', rate: 11, age: 35, level: 1 },\n                            { name: 'test89', rate: 40, age: 18, level: 4 },\n                            { name: 'test10', rate: 22, age: 20, level: 2 }\n                          ]\n                        }\n                      ]\n                    },\n                    {\n                      name: '三班',\n                      level: '',\n                      age: '',\n                      rate: '',\n                      children: [\n                        { name: 'test6', rate: 3, age: 22, level: 2 },\n                        { name: 'test2', rate: 5, age: 25, level: 3 },\n                        { name: 'test42', rate: 17, age: 35, level: 4 }\n                      ]\n                    }\n                  ]\n                  resolve(list)\n                }, 300)\n              })\n            },\n            formatName ({ row }) {\n              return row.children && row.children.length ? `${row.name} (${row.num}人)` : row.name\n            },\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            // 计算逻辑\n            handleSummary  (children) {\n              return {\n                num: this.sumNum(children, 'num'),\n                level: Math.floor(this.sumNum(children, 'level')),\n                age: parseInt(this.meanNum(children, 'age')),\n                rate: this.sumNum(children, 'rate')\n              }\n            },\n            getGroupSummary (data) {\n              XEUtils.eachTree(data, (row, index, items, path, parent, nodes) => {\n                let children = row.children\n                if (children && children.length) {\n                  // 合计子节点\n                  Object.assign(row, this.handleSummary(children))\n                } else {\n                  row.num = 1\n                  if (index === items.length - 1) {\n                    // 全量汇总\n                    for (let len = nodes.length - 2; len >= 0; len--) {\n                      Object.assign(nodes[len], this.handleSummary(nodes[len].children))\n                    }\n                  }\n                }\n              }, this.tableTreeConfig)\n              return data\n            }\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,this.findList().then((function(n){e.tableData=e.getGroupSummary(n),e.loading=!1}))},methods:{findList:function(){return new Promise((function(e){setTimeout((function(){var n=[{name:"一班",level:"",age:"",rate:"",children:[{name:"test7",rate:9,age:24,level:1},{name:"test6",rate:14,age:20,level:3},{name:"第一组",level:"",age:"",rate:"",children:[{name:"test85",rate:13,age:32,level:1},{name:"test37",rate:9,age:29,level:4},{name:"test93",rate:22,age:28,level:5},{name:"test90",rate:55,age:26,level:2}]},{name:"test32",rate:11,age:21,level:1}]},{name:"二班",level:"",age:"",rate:"",children:[{name:"test15",rate:13,age:32,level:1},{name:"test44",rate:9,age:29,level:4},{name:"第一组",level:"",age:"",rate:"",children:[{name:"test37",rate:9,age:29,level:4},{name:"test93",rate:22,age:28,level:5}]},{name:"第二组",level:"",age:"",rate:"",children:[{name:"test74",rate:11,age:32,level:5},{name:"test99",rate:23,age:18,level:4},{name:"第一排",level:"",age:"",rate:"",children:[{name:"test48",rate:77,age:29,level:4},{name:"test38",rate:34,age:21,level:2}]},{name:"test16",rate:22,age:26,level:5}]},{name:"test91",rate:16,age:27,level:5},{name:"第三组",level:"",age:"",rate:"",children:[{name:"test77",rate:11,age:35,level:1},{name:"test89",rate:40,age:18,level:4},{name:"test10",rate:22,age:20,level:2}]}]},{name:"三班",level:"",age:"",rate:"",children:[{name:"test6",rate:3,age:22,level:2},{name:"test2",rate:5,age:25,level:3},{name:"test42",rate:17,age:35,level:4}]}];e(n)}),300)}))},formatName:function(e){var n=e.row;return n.children&&n.children.length?"".concat(n.name," (").concat(n.num,"人)"):n.name},meanNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t/e.length},sumNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},handleSummary:function(e){return{num:this.sumNum(e,"num"),level:Math.floor(this.sumNum(e,"level")),age:parseInt(this.meanNum(e,"age")),rate:this.sumNum(e,"rate")}},getGroupSummary:function(e){var n=this;return i().eachTree(e,(function(e,t,a,l,r,i){var m=e.children;if(m&&m.length)Object.assign(e,n.handleSummary(m));else if(e.num=1,t===a.length-1)for(var s=i.length-2;s>=0;s--)Object.assign(i[s],n.handleSummary(i[s].children))}),this.tableTreeConfig),e}}},s=m,o=t(1001),u=(0,o.Z)(s,a,l,!1,null,null,null),d=u.exports}}]);