"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[161],{36568:function(t){function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e,n=1;n<arguments.length;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.apply(this,arguments)}var n=["attrs","props","domProps"],o=["class","style","directives"],s=["on","nativeOn"],r=function(t){return t.reduce((function(t,r){for(var i in r)if(t[i])if(-1!==n.indexOf(i))t[i]=e({},t[i],r[i]);else if(-1!==o.indexOf(i)){var l=t[i]instanceof Array?t[i]:[t[i]],d=r[i]instanceof Array?r[i]:[r[i]];t[i]=[].concat(l,d)}else if(-1!==s.indexOf(i))for(var c in r[i])if(t[i][c]){var u=t[i][c]instanceof Array?t[i][c]:[t[i][c]],f=r[i][c]instanceof Array?r[i][c]:[r[i][c]];t[i][c]=[].concat(u,f)}else t[i][c]=r[i][c];else if("hook"===i)for(var p in r[i])t[i][p]=t[i][p]?a(t[i][p],r[i][p]):r[i][p];else t[i]=r[i];else t[i]=r[i];return t}),{})},a=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=r},20161:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});n(34284);var o=function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"tip"},[t._v(" 使用自定义模板渲染，通过 "),e("table-column-api-link",{attrs:{prop:"slots"}}),t._v(" 属性编写 "),e("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#JSX",target:"_blank"}},[t._v("JSX")]),t._v(" 模板或 "),e("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#%E8%99%9A%E6%8B%9F-DOM",target:"_blank"}},[t._v("VNode")]),e("br")],1),e("vxe-grid",{ref:"xGrid",staticClass:"my-grid88",attrs:{border:"",resizable:"","show-overflow":"",height:"400",loading:t.loading,"toolbar-config":t.tableToolbar,columns:t.tableColumn,"edit-config":{trigger:"click",mode:"cell"}},scopedSlots:t._u([{key:"name_header",fn:function(){return[e("div",{staticClass:"first-col"},[e("div",{staticClass:"first-col-top"},[t._v("名称")]),e("div",{staticClass:"first-col-bottom"},[t._v("类型")])])]},proxy:!0},{key:"default_name",fn:function(n){var o=n.row,s=n.column;return[e("span",{staticStyle:{color:"red"}},[t._v(t._s(o.name))]),t._v(", "),e("button",{on:{click:function(e){return t.showDetailEvent(o,s)}}},[t._v("弹框")])]}}])}),e("vxe-modal",{attrs:{title:"查看详情",width:"800",height:"400",resize:""},scopedSlots:t._u([{key:"default",fn:function(){return[t.selectRow?e("div",{domProps:{innerHTML:t._s(t.selectRow.address)}}):t._e()]},proxy:!0}]),model:{value:t.showDetails,callback:function(e){t.showDetails=e},expression:"showDetails"}}),e("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),e("pre",[t._v("    "),e("pre-code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[0]))]),t._v("\n    "),e("pre-code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[1]))]),t._v("\n    "),e("pre-code",{staticClass:"css"},[t._v(t._s(t.demoCodes[2]))]),t._v("\n  ")],1)],1)},s=[],r=n(36568),a=n.n(r),i=(n(50886),n(60228),n(70560),n(69851)),l=n.n(i),d={data:function(){var t=this,e=this.$createElement;return{loading:!1,showDetails:!1,selectRow:null,tableColumn:[{type:"seq",width:50},{field:"name",title:"Name",width:200,resizable:!1,slots:{header:"name_header",default:"default_name"}},{field:"sex",title:"Sex",showHeaderOverflow:!0,filters:[{data:""}],filterMethod:this.filterSexMethod,editRender:{},slots:{default:function(t){var n=t.row;return[e("a",{class:"link",attrs:{href:"https://x-extends.github.io/vxe-table/"}},["我是超链接：",n.sex])]},header:function(n){var o=n.column;return[e("span",[e("i",["@"]),e("span",{style:"color: red;",on:{click:t.headerClickEvent}},[o.title])])]},filter:function(n){var o=n.column,s=n.$panel;return o.filters.map((function(n){return e("input",a()([{on:{input:[function(e){e.target.composing||t.$set(n,"data",e.target.value)},function(e){return t.changeFilterEvent(e,n,s)}]},attrs:{type:"type"},domProps:{value:n.data}},{directives:[{name:"model",value:n.data,modifiers:{}}]}]))}))},edit:function(n){var o=n.row;return[e("input",a()([{on:{input:function(e){e.target.composing||t.$set(o,"sex",e.target.value)}},attrs:{type:"text"},domProps:{value:o.sex}},{directives:[{name:"model",value:o.sex,modifiers:{}}]}]))]}}},{field:"address",title:"Address",slots:{default:function(n){var o=n.row;return[e("span",{style:"color: blue",on:{click:function(){return t.addressClickEvent(o)}}},[o.address])]}}},{field:"html2",title:"Html片段",slots:{default:function(t){var n=t.row;return[e("span",{domProps:{innerHTML:n.html2}})]}}},{field:"img1",title:"图片路径",slots:{default:function(t){var n=t.row;return[n.img1?e("img",{attrs:{src:n.img1},style:"height: 40px;"}):e("span",["无"])]}}}],tableToolbar:{custom:!0,slots:{buttons:function(){return[e("button",["按钮"]),e("input",{attrs:{type:"text"}}),e("vxe-button",["按钮1"]),e("vxe-button",["按钮2"])]}}},demoCodes:['\n        <vxe-grid\n          border\n          resizable\n          show-overflow\n          class="my-grid88"\n          ref="xGrid"\n          height="400"\n          :loading="loading"\n          :toolbar-config="tableToolbar"\n          :columns="tableColumn"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <template #name_header>\n            <div class="first-col">\n              <div class="first-col-top">名称</div>\n              <div class="first-col-bottom">类型</div>\n            </div>\n          </template>\n\n          <template #default_name="{ row, column }">\n            <span style="color: red;">{{ row.name }}</span>,\n            <button @click="showDetailEvent(row, column)">弹框</button>\n          </template>\n        </vxe-grid>\n\n        <vxe-modal v-model="showDetails" title="查看详情" width="800" height="400" resize>\n          <template #default>\n            <div v-if="selectRow" v-html="selectRow.address"></div>\n          </template>\n        </vxe-modal>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              loading: false,\n              showDetails: false,\n              selectRow: null,\n              tableColumn: [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'Name', width: 200, resizable: false, slots: { header: 'name_header', default: 'default_name' } },\n                {\n                  field: 'sex',\n                  title: 'Sex',\n                  showHeaderOverflow: true,\n                  filters: [{ data: '' }],\n                  filterMethod: this.filterSexMethod,\n                  editRender: {},\n                  slots: {\n                    default: ({ row, column }) => {\n                      return [\n                        <a class=\"link\" href=\"https://x-extends.github.io/vxe-table/\">我是超链接：{ row.sex }</a>\n                      ]\n                    },\n                    header: ({ column }) => {\n                      return [\n                        <span>\n                          <i>@</i>\n                          <span style=\"color: red;\" onClick={ this.headerClickEvent }>{ column.title }</span>\n                        </span>\n                      ]\n                    },\n                    filter: ({ column, $panel }) => {\n                      return column.filters.map(option => {\n                        return <input type=\"type\" v-model={ option.data } onInput={ event => this.changeFilterEvent(event, option, $panel) }/>\n                      })\n                    },\n                    edit: ({ row }) => {\n                      return [\n                        <input type=\"text\" v-model={ row.sex } />\n                      ]\n                    }\n                  }\n                },\n                {\n                  field: 'address',\n                  title: 'Address',\n                  slots: {\n                    default: ({ row }) => {\n                      return [\n                        <span style=\"color: blue\" onClick={ () => this.addressClickEvent(row) }>{ row.address }</span>\n                      ]\n                    }\n                  }\n                },\n                {\n                  field: 'html2',\n                  title: 'Html片段',\n                  slots: {\n                    default: ({ row }, h) => {\n                      return [\n                        <span domPropsInnerHTML={ row.html2 }></span>\n                      ]\n                    }\n                  }\n                },\n                {\n                  field: 'img1',\n                  title: '图片路径',\n                  slots: {\n                    default: ({ row }, h) => {\n                      return [\n                        row.img1 ? <img src={ row.img1 } style=\"width: 100px;\"/> : <span>无</span>\n                      ]\n                    }\n                  }\n                }\n              ],\n              tableToolbar: {\n                custom: true,\n                slots: {\n                  buttons: () => {\n                    return [\n                      <button>按钮</button>,\n                      <input type=\"text\"/>,\n                      <vxe-button>按钮1</vxe-button>,\n                      <vxe-button>按钮2</vxe-button>\n                    ]\n                  }\n                }\n              },\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.mockList(400).then(data => {\n                // 使用函数式加载\n                if (this.$refs.xGrid) {\n                  this.$refs.xGrid.loadData(data)\n                }\n                this.loading = false\n              })\n            }, 500)\n          },\n          methods: {\n            mockList (size) {\n              return new Promise(resolve => {\n                const list = []\n                for (let index = 0; index < size; index++) {\n                  list.push({\n                    name: `名称${index}`,\n                    sex: '0',\n                    num: 123,\n                    age: 18,\n                    num2: 234,\n                    rate: 3,\n                    img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif',\n                    html2: `<span style=\"color:red\">HTML标签${index}</span>`,\n                    address: `test abc系列${index}`\n                  })\n                }\n                resolve(list)\n              })\n            },\n            showDetailEvent (row) {\n              this.selectRow = row\n              this.showDetails = true\n            },\n            headerClickEvent () {\n              VXETable.modal.alert('头部点击事件')\n            },\n            addressClickEvent (row) {\n              VXETable.modal.alert(`address点击事件：${row.address}`)\n            },\n            filterSexMethod ({ option, row }) {\n              return row.sex === option.data\n            },\n            changeFilterEvent (event, option, $panel) {\n              $panel.changeOption(event, !!option.data, option)\n            }\n          }\n        }\n        ",'\n        .my-grid88 .first-col {\n          position: relative;\n          height: 20px;\n        }\n        .my-grid88 .first-col:before {\n          content: "";\n          position: absolute;\n          left: -14px;\n          top: 10px;\n          width: 204px;\n          height: 1px;\n          transform: rotate(13deg);\n          background-color: #e8eaec;\n        }\n        .my-grid88 .first-col .first-col-top {\n          position: absolute;\n          right: 4px;\n          top: -10px;\n        }\n        .my-grid88 .first-col .first-col-bottom {\n          position: absolute;\n          left: 4px;\n          bottom: -10px;\n        }\n        ']}},created:function(){var t=this;this.loading=!0,setTimeout((function(){t.mockList(400).then((function(e){t.$refs.xGrid&&t.$refs.xGrid.loadData(e),t.loading=!1}))}),500)},methods:{mockList:function(t){return new Promise((function(e){for(var n=[],o=0;o<t;o++)n.push({name:"名称".concat(o),sex:"0",num:123,age:18,num2:234,rate:3,img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif",html2:'<span style="color:red">HTML标签'.concat(o,"</span>"),address:"test abc系列".concat(o)});e(n)}))},showDetailEvent:function(t){this.selectRow=t,this.showDetails=!0},headerClickEvent:function(){l().modal.alert("头部点击事件")},addressClickEvent:function(t){l().modal.alert("address点击事件：".concat(t.address))},filterSexMethod:function(t){var e=t.option,n=t.row;return n.sex===e.data},changeFilterEvent:function(t,e,n){n.changeOption(t,!!e.data,e)}}},c=d,u=n(1001),f=(0,u.Z)(c,o,s,!1,null,"7ab9f758",null),p=f.exports}}]);