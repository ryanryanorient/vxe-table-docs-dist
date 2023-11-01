"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[5975],{55975:function(o,n,l){l.r(n),l.d(n,{default:function(){return p}});var e=function(){var o=this,n=o._self._c;return n("div",[n("p",{staticClass:"tip"},[o._v(" 单元格与表尾数据合并，可以通过绑定参数 "),n("table-api-link",{attrs:{prop:"merge-cells"}}),o._v(" 或调用函数 "),n("table-api-link",{attrs:{prop:"setMergeCells"}}),o._v("、"),n("table-api-link",{attrs:{prop:"setMergeCells"}}),o._v(" 来控制单元格的临时合并状态"),n("br"),n("span",{staticClass:"red"},[o._v("（注意：合并数据属于临时行为，例如：操作数据源、显示隐藏列、固定列...等操作都会导致合并状态被取消）")])],1),n("vxe-toolbar",{ref:"xToolbar",attrs:{print:""}}),n("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","show-footer":"",height:"800",align:"center","print-config":{},"column-config":{width:90},"merge-cells":o.mergeCells,"merge-footer-items":o.mergeFooterItems,"footer-method":o.footerMethod,data:o.tableData}},[n("vxe-column",{attrs:{field:"a",title:"名称"}}),n("vxe-colgroup",{attrs:{field:"b",title:"教育经费投入"}},[n("vxe-column",{attrs:{field:"c",title:"总计"}}),n("vxe-colgroup",{attrs:{title:"基本投入"}},[n("vxe-colgroup",{attrs:{title:"合计"}},[n("vxe-column",{attrs:{field:"d",title:"合计"}}),n("vxe-column",{attrs:{field:"e",title:"比上年增长"}})],1),n("vxe-column",{attrs:{field:"f",title:"人员经费"}}),n("vxe-column",{attrs:{field:"g",title:"公用经费"}}),n("vxe-colgroup",{attrs:{title:"其他经费"}},[n("vxe-column",{attrs:{field:"w",title:"合计"}}),n("vxe-colgroup",{attrs:{title:"其中"}},[n("vxe-column",{attrs:{field:"h",title:"标准化建设"}}),n("vxe-column",{attrs:{field:"i",title:"信息化建设"}})],1)],1)],1),n("vxe-column",{attrs:{field:"j",title:"附加信息"}})],1),n("vxe-colgroup",{attrs:{title:"其他投入"}},[n("vxe-colgroup",{attrs:{title:"投入"}},[n("vxe-column",{attrs:{field:"k",title:"合计"}}),n("vxe-colgroup",{attrs:{title:"其中"}},[n("vxe-column",{attrs:{field:"l",title:"人员经费"}}),n("vxe-column",{attrs:{field:"m",title:"教育经费"}}),n("vxe-column",{attrs:{field:"n",title:"项目经费"}}),n("vxe-column",{attrs:{field:"o",title:"基建投入"}})],1)],1),n("vxe-colgroup",{attrs:{title:"社会捐款"}},[n("vxe-column",{attrs:{field:"p",title:"合计"}}),n("vxe-colgroup",{attrs:{title:"其中"}},[n("vxe-column",{attrs:{field:"q",title:"项目经费"}}),n("vxe-column",{attrs:{field:"r",title:"基建投入"}})],1)],1)],1),n("vxe-colgroup",{attrs:{title:"补充资料"}},[n("vxe-colgroup",{attrs:{title:"信息化建设"}},[n("vxe-column",{attrs:{field:"s",title:"本年投入金额"}}),n("vxe-colgroup",{attrs:{title:"其中"}},[n("vxe-column",{attrs:{field:"t",title:"合计"}}),n("vxe-column",{attrs:{field:"u",title:"建设数"}})],1),n("vxe-column",{attrs:{field:"v",title:"备注"}})],1)],1)],1),n("p",{staticClass:"demo-code"},[o._v(o._s(o.$t("app.body.button.showCode")))]),n("pre",[o._v("    "),n("pre-code",{staticClass:"xml"},[o._v(o._s(o.demoCodes[0]))]),o._v("\n    "),n("pre-code",{staticClass:"javascript"},[o._v(o._s(o.demoCodes[1]))]),o._v("\n  ")],1)],1)},r=[],t=(l(70560),l(50886),{data:function(){return{tableData:[],mergeCells:[],mergeFooterItems:[],demoCodes:['\n        <vxe-toolbar ref="xToolbar" print></vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          show-footer\n          ref="xTable"\n          height="800"\n          align="center"\n          :print-config="{}"\n          :column-config="{width: 90}"\n          :merge-cells="mergeCells"\n          :merge-footer-items="mergeFooterItems"\n          :footer-method="footerMethod"\n          :data="tableData">\n          <vxe-column field="a" title="名称"></vxe-column>\n          <vxe-colgroup field="b" title="教育经费投入">\n            <vxe-column field="c" title="总计"></vxe-column>\n            <vxe-colgroup title="基本投入">\n              <vxe-colgroup title="合计">\n                <vxe-column field="d" title="合计"></vxe-column>\n                <vxe-column field="e" title="比上年增长"></vxe-column>\n              </vxe-colgroup>\n              <vxe-column field="f" title="人员经费"></vxe-column>\n              <vxe-column field="g" title="公用经费"></vxe-column>\n              <vxe-colgroup title="其他经费">\n                <vxe-column field="w" title="合计"></vxe-column>\n                <vxe-colgroup title="其中">\n                  <vxe-column field="h" title="标准化建设"></vxe-column>\n                  <vxe-column field="i" title="信息化建设"></vxe-column>\n                </vxe-colgroup>\n              </vxe-colgroup>\n            </vxe-colgroup>\n            <vxe-column field="j" title="附加信息"></vxe-column>\n          </vxe-colgroup>\n          <vxe-colgroup title="其他投入">\n            <vxe-colgroup title="投入">\n              <vxe-column field="k" title="合计"></vxe-column>\n              <vxe-colgroup title="其中">\n                <vxe-column field="l" title="人员经费"></vxe-column>\n                <vxe-column field="m" title="教育经费"></vxe-column>\n                <vxe-column field="n" title="项目经费"></vxe-column>\n                <vxe-column field="o" title="基建投入"></vxe-column>\n              </vxe-colgroup>\n            </vxe-colgroup>\n            <vxe-colgroup title="社会捐款">\n              <vxe-column field="p" title="合计"></vxe-column>\n              <vxe-colgroup title="其中">\n                <vxe-column field="q" title="项目经费"></vxe-column>\n                <vxe-column field="r" title="基建投入"></vxe-column>\n              </vxe-colgroup>\n            </vxe-colgroup>\n          </vxe-colgroup>\n          <vxe-colgroup title="补充资料">\n            <vxe-colgroup title="信息化建设">\n              <vxe-column field="s" title="本年投入金额"></vxe-column>\n              <vxe-colgroup title="其中">\n                <vxe-column field="t" title="合计"></vxe-column>\n                <vxe-column field="u" title="建设数"></vxe-column>\n              </vxe-colgroup>\n              <vxe-column field="v" title="备注"></vxe-column>\n            </vxe-colgroup>\n          </vxe-colgroup>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              mergeCells: [],\n              mergeFooterItems: []\n            }\n          },\n          created () {\n            this.$nextTick(() => {\n              // 手动将表格和工具栏进行关联\n              this.$refs.xTable.connect(this.$refs.xToolbar)\n            })\n            this.loadList()\n          },\n          methods: {\n            loadList () {\n              const list = []\n              for (let index = 0; index < 15; index++) {\n                list.push({\n                  a: 'a' + index,\n                  b: 'b' + index,\n                  c: 'c' + index,\n                  d: 'd' + index,\n                  e: 'e' + index,\n                  f: 'f' + index,\n                  g: 'g' + index,\n                  h: 'h' + index,\n                  i: 'i' + index,\n                  j: 'j' + index,\n                  k: 'k' + index,\n                  l: 'l' + index,\n                  m: 'm' + index,\n                  n: 'n' + index,\n                  o: 'o' + index,\n                  p: 'p' + index,\n                  q: 'q' + index,\n                  r: 'r' + index,\n                  s: 's' + index,\n                  t: 't' + index,\n                  u: 'u' + index,\n                  v: 'v' + index,\n                  w: 'w' + index\n                })\n              }\n              this.tableData = list\n              this.handleMerge()\n            },\n            handleMerge () {\n              // 根据行数据计算合并规则\n              const mergeCells = [\n                { row: 0, col: 0, rowspan: 2, colspan: 1 },\n                { row: 0, col: 1, rowspan: 2, colspan: 1 },\n                { row: 0, col: 2, rowspan: 2, colspan: 1 },\n                { row: 0, col: 3, rowspan: 2, colspan: 1 },\n                { row: 0, col: 4, rowspan: 2, colspan: 1 },\n                { row: 0, col: 5, rowspan: 2, colspan: 1 },\n                { row: 0, col: 6, rowspan: 2, colspan: 1 },\n                { row: 0, col: 7, rowspan: 2, colspan: 1 },\n                { row: 0, col: 8, rowspan: 2, colspan: 1 },\n                { row: 0, col: 9, rowspan: 2, colspan: 1 },\n                { row: 0, col: 15, rowspan: 10, colspan: 1 },\n                { row: 0, col: 16, rowspan: 10, colspan: 1 },\n                { row: 0, col: 18, rowspan: 2, colspan: 1 },\n                { row: 0, col: 19, rowspan: 2, colspan: 1 },\n                { row: 0, col: 20, rowspan: 2, colspan: 1 },\n                { row: 0, col: 21, rowspan: 2, colspan: 1 },\n                { row: 1, col: 11, rowspan: 1, colspan: 4 },\n\n                { row: 2, col: 0, rowspan: 4, colspan: 2 },\n                { row: 2, col: 2, rowspan: 4, colspan: 1 },\n                { row: 2, col: 3, rowspan: 4, colspan: 1 },\n                { row: 2, col: 6, rowspan: 4, colspan: 1 },\n                { row: 2, col: 7, rowspan: 4, colspan: 1 },\n                { row: 2, col: 8, rowspan: 4, colspan: 1 },\n                { row: 2, col: 9, rowspan: 4, colspan: 1 },\n                { row: 2, col: 17, rowspan: 4, colspan: 1 },\n                { row: 2, col: 18, rowspan: 3, colspan: 1 },\n                { row: 2, col: 19, rowspan: 3, colspan: 1 },\n                { row: 2, col: 20, rowspan: 3, colspan: 2 },\n                { row: 3, col: 4, rowspan: 2, colspan: 2 },\n                { row: 4, col: 11, rowspan: 2, colspan: 4 },\n                { row: 5, col: 18, rowspan: 1, colspan: 4 },\n\n                { row: 6, col: 0, rowspan: 3, colspan: 1 },\n                { row: 6, col: 1, rowspan: 3, colspan: 1 },\n                { row: 6, col: 4, rowspan: 3, colspan: 1 },\n                { row: 6, col: 5, rowspan: 3, colspan: 1 },\n                { row: 6, col: 6, rowspan: 3, colspan: 1 },\n                { row: 6, col: 7, rowspan: 3, colspan: 1 },\n                { row: 6, col: 8, rowspan: 3, colspan: 1 },\n                { row: 6, col: 9, rowspan: 3, colspan: 1 },\n                { row: 6, col: 18, rowspan: 3, colspan: 1 },\n                { row: 6, col: 19, rowspan: 3, colspan: 1 },\n                { row: 6, col: 20, rowspan: 3, colspan: 1 },\n                { row: 6, col: 21, rowspan: 3, colspan: 1 },\n                { row: 6, col: 2, rowspan: 1, colspan: 2 },\n                { row: 8, col: 2, rowspan: 1, colspan: 2 },\n                { row: 9, col: 0, rowspan: 1, colspan: 15 },\n\n                { row: 11, col: 5, rowspan: 4, colspan: 12 }\n              ]\n              // 根据行数据计算表尾合并规则\n              const mergeFooterItems = [\n                { row: 0, col: 1, rowspan: 1, colspan: 2 },\n                { row: 0, col: 6, rowspan: 1, colspan: 2 },\n                { row: 0, col: 14, rowspan: 2, colspan: 5 },\n                { row: 1, col: 4, rowspan: 1, colspan: 8 }\n              ]\n              this.mergeCells = mergeCells\n              this.mergeFooterItems = mergeFooterItems\n            },\n            footerMethod ({ columns }) {\n              return [\n                columns.map((column, index) => index),\n                columns.map((column, index) => 1000 + index)\n              ]\n            }\n          }\n        }\n        "]}},created:function(){var o=this;this.$nextTick((function(){o.$refs.xTable.connect(o.$refs.xToolbar)})),this.loadList()},methods:{loadList:function(){for(var o=[],n=0;n<15;n++)o.push({a:"a"+n,b:"b"+n,c:"c"+n,d:"d"+n,e:"e"+n,f:"f"+n,g:"g"+n,h:"h"+n,i:"i"+n,j:"j"+n,k:"k"+n,l:"l"+n,m:"m"+n,n:"n"+n,o:"o"+n,p:"p"+n,q:"q"+n,r:"r"+n,s:"s"+n,t:"t"+n,u:"u"+n,v:"v"+n,w:"w"+n});this.tableData=o,this.handleMerge()},handleMerge:function(){var o=[{row:0,col:0,rowspan:2,colspan:1},{row:0,col:1,rowspan:2,colspan:1},{row:0,col:2,rowspan:2,colspan:1},{row:0,col:3,rowspan:2,colspan:1},{row:0,col:4,rowspan:2,colspan:1},{row:0,col:5,rowspan:2,colspan:1},{row:0,col:6,rowspan:2,colspan:1},{row:0,col:7,rowspan:2,colspan:1},{row:0,col:8,rowspan:2,colspan:1},{row:0,col:9,rowspan:2,colspan:1},{row:0,col:15,rowspan:10,colspan:1},{row:0,col:16,rowspan:10,colspan:1},{row:0,col:18,rowspan:2,colspan:1},{row:0,col:19,rowspan:2,colspan:1},{row:0,col:20,rowspan:2,colspan:1},{row:0,col:21,rowspan:2,colspan:1},{row:1,col:11,rowspan:1,colspan:4},{row:2,col:0,rowspan:4,colspan:2},{row:2,col:2,rowspan:4,colspan:1},{row:2,col:3,rowspan:4,colspan:1},{row:2,col:6,rowspan:4,colspan:1},{row:2,col:7,rowspan:4,colspan:1},{row:2,col:8,rowspan:4,colspan:1},{row:2,col:9,rowspan:4,colspan:1},{row:2,col:17,rowspan:4,colspan:1},{row:2,col:18,rowspan:3,colspan:1},{row:2,col:19,rowspan:3,colspan:1},{row:2,col:20,rowspan:3,colspan:2},{row:3,col:4,rowspan:2,colspan:2},{row:4,col:11,rowspan:2,colspan:4},{row:5,col:18,rowspan:1,colspan:4},{row:6,col:0,rowspan:3,colspan:1},{row:6,col:1,rowspan:3,colspan:1},{row:6,col:4,rowspan:3,colspan:1},{row:6,col:5,rowspan:3,colspan:1},{row:6,col:6,rowspan:3,colspan:1},{row:6,col:7,rowspan:3,colspan:1},{row:6,col:8,rowspan:3,colspan:1},{row:6,col:9,rowspan:3,colspan:1},{row:6,col:18,rowspan:3,colspan:1},{row:6,col:19,rowspan:3,colspan:1},{row:6,col:20,rowspan:3,colspan:1},{row:6,col:21,rowspan:3,colspan:1},{row:6,col:2,rowspan:1,colspan:2},{row:8,col:2,rowspan:1,colspan:2},{row:9,col:0,rowspan:1,colspan:15},{row:11,col:5,rowspan:4,colspan:12}],n=[{row:0,col:1,rowspan:1,colspan:2},{row:0,col:6,rowspan:1,colspan:2},{row:0,col:14,rowspan:2,colspan:5},{row:1,col:4,rowspan:1,colspan:8}];this.mergeCells=o,this.mergeFooterItems=n},footerMethod:function(o){var n=o.columns;return[n.map((function(o,n){return n})),n.map((function(o,n){return 1e3+n}))]}}}),c=t,s=l(1001),a=(0,s.Z)(c,e,r,!1,null,null,null),p=a.exports}}]);