"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[9069],{9069:function(t,e,l){l.r(e),l.d(e,{default:function(){return v}});var o=function(){var t=this,e=t._self._c;return e("div",[e("p",[e("vxe-button",{attrs:{content:"允许拖动范围超出屏幕"},on:{click:function(e){return t.openAlert({content:"允许拖动范围超出屏幕",marginSize:-500})}}})],1),e("p",[e("vxe-button",{attrs:{content:"窗口初始位置"},on:{click:function(e){t.val1=!0}}}),e("vxe-modal",{attrs:{width:"600",position:{top:200,left:200}},scopedSlots:t._u([{key:"default",fn:function(){return[e("vxe-table",{attrs:{"show-overflow":"",height:"300","sync-resize":t.val1,data:t.tableData}},[e("vxe-column",{attrs:{type:"seq",width:"60"}}),e("vxe-column",{attrs:{field:"name",title:"Name"}}),e("vxe-column",{attrs:{field:"sex",title:"Sex"}}),e("vxe-column",{attrs:{field:"age",title:"Age"}})],1)]},proxy:!0}]),model:{value:t.val1,callback:function(e){t.val1=e},expression:"val1"}})],1),e("p",[e("vxe-button",{attrs:{content:"拖动窗口调整大小"},on:{click:function(e){t.val2=!0}}}),e("vxe-modal",{attrs:{"show-zoom":"",resize:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticStyle:{color:"red"}},[t._v("按住头部移动！！！！！！！！！！！！！！！")]),e("div",{staticStyle:{color:"blue"}},[t._v("按住左边距拖动！！！！！！！！！！！！！！！")]),e("div",{staticStyle:{color:"red"}},[t._v("按住右边距拖动！！！！！！！！！！！！！！！")]),e("div",{staticStyle:{color:"blue"}},[t._v("按住底边距拖动！！！！！！！！！！！！！！！")]),e("div",{staticStyle:{color:"blue"}},[t._v("按住左下角拖动 ！！！！！！！！！！！！！！！")]),e("div",{staticStyle:{color:"blue"}},[t._v("按住右下角拖动！！！！！！！！！！！！！！！")])]},proxy:!0}]),model:{value:t.val2,callback:function(e){t.val2=e},expression:"val2"}})],1)])},n=[],a=l(69851),c={data:function(){return{val1:!1,val2:!1,tableData:[]}},methods:{openAlert:function(t){a.VXETable.modal.alert(t)}}},i=c,r=l(1001),u=(0,r.Z)(i,o,n,!1,null,null,null),v=u.exports}}]);