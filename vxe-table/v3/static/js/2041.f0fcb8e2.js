"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[2041],{62041:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});a(34284);var n=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v(" 树表格，通过配置 "),t("table-api-link",{attrs:{prop:"tree-config"}}),e._v("={"),t("table-api-link",{attrs:{prop:"line"}}),e._v(": true} 属性来开启树节点连接线"),t("br"),t("span",{staticClass:"red"},[e._v("（注：连接线不支持虚拟滚动）")])],1),t("vxe-table",{attrs:{resizable:"","show-overflow":"","row-key":"","row-config":{isHover:!0},"tree-config":{transform:!0,rowField:"id",parentField:"parentId",line:!0},data:e.tableData1,"scroll-y":{enabled:!1}}},[t("vxe-column",{attrs:{field:"name",title:"Name","tree-node":""}}),t("vxe-column",{attrs:{field:"size",title:"Size"}}),t("vxe-column",{attrs:{field:"type",title:"Type"}}),t("vxe-column",{attrs:{field:"date",title:"Date"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("复选框")]),t("vxe-table",{attrs:{resizable:"","show-overflow":"","row-key":"",size:"medium","row-config":{isCurrent:!0,isHover:!0},"tree-config":{transform:!0,accordion:!0,line:!0,iconOpen:"vxe-icon-caret-right rotate45",iconClose:"vxe-icon-caret-right"},"checkbox-config":{labelField:"name"},data:e.tableData2,"scroll-y":{enabled:!1}}},[t("vxe-column",{attrs:{type:"checkbox",title:"Name",width:"280","tree-node":""}}),t("vxe-column",{attrs:{field:"size",title:"Size"}}),t("vxe-column",{attrs:{field:"type",title:"Type"}}),t("vxe-column",{attrs:{field:"date",title:"Date"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("自定义图标，通过设置 "),t("table-api-link",{attrs:{prop:"tree-config"}}),e._v("={"),t("table-api-link",{attrs:{prop:"iconOpen"}}),e._v(", "),t("table-api-link",{attrs:{prop:"iconClose"}}),e._v("} 局部替换默认的图标")],1),t("vxe-table",{attrs:{resizable:"","show-overflow":"","row-key":"",size:"small","row-config":{isHover:!0},"radio-config":{labelField:"name"},"tree-config":{transform:!0,accordion:!0,line:!0,iconOpen:"vxe-icon-square-minus-fill",iconClose:"vxe-icon-square-plus-fill"},data:e.tableData3,"scroll-y":{enabled:!1}}},[t("vxe-column",{attrs:{type:"radio",title:"Name","tree-node":""}}),t("vxe-column",{attrs:{field:"size",title:"Size"}}),t("vxe-column",{attrs:{field:"type",title:"Type"}}),t("vxe-column",{attrs:{field:"date",title:"Date"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("更多自定义")]),t("vxe-table",{ref:"xTree",attrs:{resizable:"","show-overflow":"","row-key":"",size:"mini","row-config":{isHover:!0},"checkbox-config":{labelField:"name"},"tree-config":{transform:!0,accordion:!0,line:!0,iconOpen:"vxe-icon-square-minus",iconClose:"vxe-icon-square-plus"},data:e.tableData4,"scroll-y":{enabled:!1}}},[t("vxe-column",{attrs:{type:"checkbox",title:"Name","tree-node":""},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.row;return[t("span",[n.children&&n.children.length?[t("i",{staticClass:"tree-node-icon",class:e.$refs.xTree.isTreeExpandByRow(n)?"vxe-icon-folder-open":"vxe-icon-folder"})]:[t("i",{staticClass:"tree-node-icon vxe-icon-file-txt"})],t("span",[e._v(e._s(n.name))])],2)]}}])}),t("vxe-column",{attrs:{field:"size",title:"Size"}}),t("vxe-column",{attrs:{field:"type",title:"Type"}}),t("vxe-column",{attrs:{field:"date",title:"Date"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[6]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[7]))]),e._v("\n    "),t("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[8]))]),e._v("\n  ")],1)],1)},d=[],s={data:function(){return{tableData1:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}],tableData2:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}],tableData3:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}],tableData4:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"test abc4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"test abc96",type:"avi",size:null,date:"2021-04-01"},{id:24330,parentId:10053,name:"test abc5",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test6",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test8",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test7",type:"js",size:1024,date:"2021-06-01"}],demoCodes:['\n        <vxe-table\n          resizable\n          show-overflow\n          row-key\n          :row-config="{isHover: true}"\n          :tree-config="{transform: true, rowField: \'id\', parentField: \'parentId\', line: true}"\n          :data="tableData1"\n          :scroll-y="{enabled: false}">\n          <vxe-column field="name" title="Name" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData1: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          resizable\n          show-overflow\n          row-key\n          size="medium"\n          :row-config="{isCurrent: true, isHover: true}"\n          :tree-config="{transform: true, accordion: true, line: true, iconOpen: \'vxe-icon-caret-right rotate45\', iconClose: \'vxe-icon-caret-right\'}"\n          :checkbox-config="{labelField: \'name\'}"\n          :data="tableData2"\n          :scroll-y="{enabled: false}">\n          <vxe-column type="checkbox" title="Name" width="280" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData2: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          resizable\n          show-overflow\n          row-key\n          size="small"\n          :row-config="{isHover: true}"\n          :radio-config="{labelField: \'name\'}"\n          :tree-config="{transform: true, accordion: true, line: true, iconOpen: \'vxe-icon-square-minus-fill\', iconClose: \'vxe-icon-square-plus-fill\'}"\n          :data="tableData3"\n          :scroll-y="{enabled: false}">\n          <vxe-column type="radio" title="Name" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData3: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          resizable\n          show-overflow\n          row-key\n          ref="xTree"\n          size="mini"\n          :row-config="{isHover: true}"\n          :tree-config="{transform: true, accordion: true, line: true, iconOpen: \'vxe-icon-square-minus\', iconClose: \'vxe-icon-square-plus\'}"\n          :data="tableData4"\n          :scroll-y="{enabled: false}">\n          <vxe-column field="name" title="Name" tree-node>\n            <template #default="{ row }">\n              <span>\n                <template v-if="row.children && row.children.length">\n                  <i class="tree-node-icon" :class="$refs.xTree.isTreeExpandByRow(row) ? \'vxe-icon-folder-open\' : \'vxe-icon-folder\'"></i>\n                </template>\n                <template v-else>\n                  <i class="tree-node-icon vxe-icon-file-txt"></i>\n                </template>\n                <span>{{ row.name }}</span>\n              </span>\n            </template>\n          </vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData4: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },\n                { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },\n                { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },\n                { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },\n                { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },\n                { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },\n                { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },\n                { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },\n                { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },\n                { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }\n              ]\n            }\n          }\n        }\n        ","\n        .tree-node-icon {\n          width: 16px;\n          text-align: center;\n        }\n        "]}}},i=s,p=a(1001),l=(0,p.Z)(i,n,d,!1,null,"a4a85778",null),r=l.exports}}]);