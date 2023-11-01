"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[3718],{83718:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"tip"},[e._v("当数据为空时，通过 "),t("table-api-link",{attrs:{prop:"empty-text"}}),e._v(" 设置空数据提示文本，可以使用 "),t("router-link",{staticClass:"link",attrs:{to:{name:"RendererEmpty"}}},[e._v("渲染器")]),e._v(" 实现全局复用")],1),t("vxe-table",{attrs:{"empty-text":"没有更多数据了！",data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name"}}),t("vxe-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-column",{attrs:{field:"age",title:"Age"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("可以通过 slot="),t("table-api-link",{attrs:{prop:"empty"}}),e._v(" 自定义提示语")],1),t("vxe-table",{attrs:{border:"",loading:e.loading,data:e.tableData},scopedSlots:e._u([{key:"empty",fn:function(){return[t("span",{staticStyle:{color:"red"}},[t("img",{attrs:{src:"https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif"}}),t("p",[e._v("没有更多数据了！")])])]},proxy:!0}])},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name"}}),t("vxe-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-column",{attrs:{field:"age",title:"Age"}}),t("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("出现滚动条")]),t("vxe-table",{attrs:{border:"",height:"300",loading:e.loading,data:e.tableData},scopedSlots:e._u([{key:"empty",fn:function(){return[t("span",{staticStyle:{color:"red"}},[t("img",{attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}}),t("p",[e._v("不用再看了，没有更多数据了！")])])]},proxy:!0}])},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name",width:"300"}}),t("vxe-column",{attrs:{field:"sex",title:"Sex",width:"300"}}),t("vxe-column",{attrs:{field:"age",title:"Age",width:"300"}}),t("vxe-column",{attrs:{field:"date12",title:"Date",width:"300"}}),t("vxe-column",{attrs:{field:"address",title:"Address",width:"300","show-overflow":""}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")],1)],1)},l=[],s={data:function(){return{loading:!1,tableData:[],tableData2:[],demoCodes:['\n        <vxe-table\n          empty-text="没有更多数据了！"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            setTimeout(() => {\n              this.tableData = []\n            }, 1000)\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          :loading="loading"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n          <template #empty>\n            <span style="color: red;">\n              <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">\n              <p>没有更多数据了！</p>\n            </span>\n          </template>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = []\n              this.loading = false\n            }, 1000)\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          height="300"\n          :loading="loading"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" width="300"></vxe-column>\n          <vxe-column field="sex" title="Sex" width="300"></vxe-column>\n          <vxe-column field="age" title="Age" width="300"></vxe-column>\n          <vxe-column field="date12" title="Date" width="300"></vxe-column>\n          <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>\n          <template #empty>\n            <span style="color: red;">\n              <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif">\n              <p>不用再看了，没有更多数据了！</p>\n            </span>\n          </template>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = []\n              this.loading = false\n            }, 1000)\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,setTimeout((function(){e.tableData=[],e.loading=!1}),1e3)}},o=s,i=n(1001),d=(0,i.Z)(o,a,l,!1,null,null,null),c=d.exports}}]);