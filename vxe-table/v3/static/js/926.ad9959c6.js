"use strict";(self["webpackChunkvxe_table_v3"]=self["webpackChunkvxe_table_v3"]||[]).push([[926],{30926:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var o=function(){var t=this,n=t._self._c;return n("div",[n("p",[n("vxe-button",{attrs:{content:"默认消息框"},on:{click:function(n){return t.openMessage({content:"消息提示"})}}}),n("vxe-button",{attrs:{content:"info"},on:{click:function(n){return t.openMessage({content:"info 消息提示",status:"info"})}}}),n("vxe-button",{attrs:{content:"warning"},on:{click:function(n){return t.openMessage({content:"warning 消息提示",status:"warning"})}}}),n("vxe-button",{attrs:{content:"question"},on:{click:function(n){return t.openMessage({content:"question 消息提示",status:"question"})}}}),n("vxe-button",{attrs:{content:"success"},on:{click:function(n){return t.openMessage({content:"success 消息提示",status:"success"})}}}),n("vxe-button",{attrs:{content:"error"},on:{click:function(n){return t.openMessage({content:"error 消息提示",status:"error"})}}}),n("vxe-button",{attrs:{content:"loading"},on:{click:function(n){return t.openMessage({content:"loading 消息提示",status:"loading"})}}})],1),n("p",[n("vxe-button",{attrs:{content:"自定义图标"},on:{click:function(n){return t.openMessage({content:"iconStatus 自定义图标",status:"success",iconStatus:"vxe-icon-question-circle-fill"})}}}),n("vxe-button",{attrs:{content:"不允许重复点击"},on:{click:function(n){return t.openMessage({content:"不允许重复点击",id:"unique1"})}}})],1),n("p",[n("vxe-button",{attrs:{content:"打开不自动关闭"},on:{click:function(n){return t.openMessage({id:"myMsg1",content:"如果需要手动关闭，通过传id来实现",status:"loading",duration:-1})}}}),n("vxe-button",{attrs:{content:"手动关闭"},on:{click:function(n){return t.closeMessage("myMsg1")}}})],1)])},s=[],c=e(69851),u={methods:{openMessage:function(t){c.VXETable.modal.message(t)},closeMessage:function(t){c.VXETable.modal.close(t)}}},r=u,a=e(1001),i=(0,a.Z)(r,o,s,!1,null,null,null),l=i.exports}}]);