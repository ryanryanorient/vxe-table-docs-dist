"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[22760],{22760:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});n(60228),n(47522),n(79288),n(50886),n(76801);var t=n(66252),r=n(2262),s=(0,t.aZ)({__name:"Demo3",setup:function(e){var a=(0,r.iH)([{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"test abc"}]),n=(0,r.iH)(),s=function(e){var a=e.cellValue;return"1"===a?"男":"0"===a?"女":a},i=function(e,a){var n=0;return e.forEach((function(e){n+=Number(e[a])})),n/e.length},o=function(e){var a=e.columns,n=e.data,t=[a.map((function(e,a){return 0===a?"平均":["age"].includes(e.field)?i(n,e.field):null}))];return t},l=function(){var e=n.value;e&&e.exportData({type:"csv",dataFilterMethod:function(e){var a=e.row;return"1"===a.sex}})};return function(e,r){var i=(0,t.up)("vxe-button"),d=(0,t.up)("vxe-column"),u=(0,t.up)("vxe-table");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",null,[(0,t.Wm)(i,{onClick:l},{default:(0,t.w5)((function(){return[(0,t.Uk)("导出 sex=1 的行")]})),_:1})]),(0,t.Wm)(u,{"show-footer":"",height:"300",ref_key:"tableRef",ref:n,"row-config":{isHover:!0},"footer-method":o,data:a.value},{default:(0,t.w5)((function(){return[(0,t.Wm)(d,{type:"seq",width:"60"}),(0,t.Wm)(d,{field:"name",title:"Name"}),(0,t.Wm)(d,{field:"sex",title:"Sex",formatter:s}),(0,t.Wm)(d,{field:"age",title:"Age",sortable:""}),(0,t.Wm)(d,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data"])])}}});const i=s;var o=i}}]);