"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[13610],{13610:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(66252),o=t(2262),c=(0,a.aZ)({__name:"Demo4",setup:function(e){var n=(0,o.iH)(),t=(0,o.iH)([{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc",checked:!1},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou",checked:!1},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai",checked:!1},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc",checked:!1},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai",checked:!1}]),c=function(e){var t=n.value;t&&t.toggleCheckboxRow(e)},r=function(e,t){var a=n.value;a&&a.setCheckboxRow(e,t)},u=function(){var e=n.value;e&&e.setAllCheckboxRow(!0)},l=function(){var e=n.value;e&&e.clearCheckboxRow()};return function(e,o){var i=(0,a.up)("vxe-button"),d=(0,a.up)("vxe-column"),s=(0,a.up)("vxe-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null,[(0,a.Wm)(i,{onClick:o[0]||(o[0]=function(e){return c(t.value[1])})},{default:(0,a.w5)((function(){return[(0,a.Uk)("切换第二行选中")]})),_:1}),(0,a.Wm)(i,{onClick:o[1]||(o[1]=function(e){return r([t.value[2],t.value[3]],!0)})},{default:(0,a.w5)((function(){return[(0,a.Uk)("设置第三、四行选中")]})),_:1}),(0,a.Wm)(i,{onClick:u},{default:(0,a.w5)((function(){return[(0,a.Uk)("设置所有行选中")]})),_:1}),(0,a.Wm)(i,{onClick:l},{default:(0,a.w5)((function(){return[(0,a.Uk)("清除所有行选中")]})),_:1})]),(0,a.Wm)(s,{border:"",class:"checkbox-table",ref_key:"tableRef",ref:n,"row-config":{isHover:!0},data:t.value,"checkbox-config":{checkField:"checked",trigger:"row"}},{default:(0,a.w5)((function(){return[(0,a.Wm)(d,{type:"checkbox",width:"60"}),(0,a.Wm)(d,{field:"name",title:"Name"}),(0,a.Wm)(d,{field:"sex",title:"Sex"}),(0,a.Wm)(d,{field:"age",title:"Age"}),(0,a.Wm)(d,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data"])])}}});const r=c;var u=r}}]);