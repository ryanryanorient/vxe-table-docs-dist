"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[98693],{98693:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(66252),d=a(2262),i=a(72896),r=(0,n.aZ)({__name:"Demo1",setup:function(e){var t=(0,d.iH)(),a=(0,d.iH)([{id:1e4,parentId:null,name:"Test1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:0,date:"2021-04-01"},{id:24300,parentId:10050,name:"Test3",type:"avi",size:1024,date:"2020-03-01"},{id:20045,parentId:24300,name:"Test4",type:"html",size:600,date:"2021-04-01"},{id:10053,parentId:24300,name:"Test5",type:"avi",size:0,date:"2021-04-01"},{id:24330,parentId:10053,name:"Test6",type:"txt",size:25,date:"2021-10-01"},{id:21011,parentId:10053,name:"Test7",type:"pdf",size:512,date:"2020-01-01"},{id:22200,parentId:10053,name:"Test8",type:"js",size:1024,date:"2021-06-01"},{id:23666,parentId:null,name:"Test9",type:"xlsx",size:2048,date:"2020-11-01"},{id:23677,parentId:23666,name:"Test10",type:"js",size:1024,date:"2021-06-01"},{id:23671,parentId:23677,name:"Test11",type:"js",size:1024,date:"2021-06-01"},{id:23672,parentId:23677,name:"Test12",type:"js",size:1024,date:"2021-06-01"},{id:23688,parentId:23666,name:"Test13",type:"js",size:1024,date:"2021-06-01"},{id:23681,parentId:23688,name:"Test14",type:"js",size:1024,date:"2021-06-01"},{id:23682,parentId:23688,name:"Test15",type:"js",size:1024,date:"2021-06-01"},{id:24555,parentId:null,name:"Test16",type:"avi",size:224,date:"2020-10-01"},{id:24566,parentId:24555,name:"Test17",type:"js",size:1024,date:"2021-06-01"},{id:24577,parentId:24555,name:"Test18",type:"js",size:1024,date:"2021-06-01"}]),r=function(e){var a=t.value;if(a){var n=e.row,d=e.expanded;console.log("节点展开事件",d,"获取父节点：",a.getParentRow(n))}},s=function(){var e=t.value;if(e){var a=e.getTreeExpandRecords();i.s7.modal.alert(a.length)}},p=function(){var e=t.value;e&&e.setAllTreeExpand(!0)},l=function(){var e=t.value;e&&e.clearTreeExpand()};return function(e,d){var i=(0,n.up)("vxe-button"),u=(0,n.up)("vxe-column"),m=(0,n.up)("vxe-table");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("p",null,[(0,n.Wm)(i,{onClick:s},{default:(0,n.w5)((function(){return[(0,n.Uk)("获取已展开")]})),_:1}),(0,n.Wm)(i,{onClick:p},{default:(0,n.w5)((function(){return[(0,n.Uk)("展开所有")]})),_:1}),(0,n.Wm)(i,{onClick:l},{default:(0,n.w5)((function(){return[(0,n.Uk)("关闭所有")]})),_:1})]),(0,n.Wm)(m,{border:"inner",ref_key:"xTreeRef",ref:t,"column-config":{resizable:!0},"tree-config":{transform:!0,rowField:"id",parentField:"parentId"},data:a.value,onToggleTreeExpand:r},{default:(0,n.w5)((function(){return[(0,n.Wm)(u,{field:"name",title:"app.body.label.name","tree-node":""}),(0,n.Wm)(u,{field:"size",title:"Size"}),(0,n.Wm)(u,{field:"type",title:"Type"}),(0,n.Wm)(u,{field:"date",title:"Date"})]})),_:1},8,["data"])])}}});const s=r;var p=s}}]);