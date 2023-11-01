"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[8656],{78656:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var s=function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"tip"},[e._v("通过设置 "),a("table-api-link",{attrs:{prop:"loading"}}),e._v(" 属性可以使用自带的加载效果")],1),a("vxe-table",{attrs:{border:"",loading:"",height:"300",data:e.tableData}},[a("vxe-column",{attrs:{type:"seq",width:"60"}}),a("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),a("vxe-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}}),a("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),a("p",{staticClass:"tip"},[e._v("修改加载中图标")]),a("vxe-table",{attrs:{border:"",height:"300",loading:e.loading,data:e.tableData,"loading-config":{icon:"vxe-icon-indicator roll",text:"正在拼命加载中..."}}},[a("vxe-column",{attrs:{type:"seq",width:"60"}}),a("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),a("vxe-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}}),a("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1),a("p",{staticClass:"tip"},[e._v("自定义插槽")]),a("vxe-table",{attrs:{border:"",height:"300",loading:e.loading,data:e.tableData},scopedSlots:e._u([{key:"loading",fn:function(){return[a("img",{staticStyle:{width:"100px"},attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}})]},proxy:!0}])},[a("vxe-column",{attrs:{type:"seq",width:"60"}}),a("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),a("vxe-column",{attrs:{field:"sex",title:"Sex"}}),a("vxe-column",{attrs:{field:"age",title:"Age"}}),a("vxe-column",{attrs:{field:"address",title:"Address","show-overflow":""}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),a("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")],1)],1)},n=[],d={data:function(){return{loading:!1,tableData:[],demoCodes:['\n        <vxe-table\n          border\n          loading\n          height="300"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            setTimeout(() => {\n              this.tableData = [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            }, 8000)\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          height="300"\n          :loading="loading"\n          :data="tableData"\n          :loading-config="{icon: \'vxe-icon-indicator roll\', text: \'正在拼命加载中...\'}">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n              this.loading = false\n            }, 8000)\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          height="300"\n          :loading="loading"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n\n          <template #loading>\n            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="width: 100px;">\n          </template>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.tableData = [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n              this.loading = false\n            }, 8000)\n          }\n        }\n        "]}},created:function(){var e=this;this.loading=!0,setTimeout((function(){e.tableData=[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}],e.loading=!1}),8e3)}},l=d,o=t(1001),i=(0,o.Z)(l,s,n,!1,null,null,null),r=i.exports}}]);