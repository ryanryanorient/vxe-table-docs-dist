"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[98343],{98343:function(e,a,n){n.r(a),n.d(a,{default:function(){return l}});var t=n(66252),r=n(3577),i=n(2262),s=(0,t.aZ)({__name:"Demo1",setup:function(e){var a=(0,i.qj)({total:0,currentPage:1,pageSize:10}),n=(0,i.qj)({border:!0,height:530,loading:!1,columnConfig:{resizable:!0},data:[],columns:[{type:"seq",width:60},{type:"checkbox",width:50},{field:"name",title:"Name"},{field:"nickname",title:"Nickname"},{field:"role",title:"Role"},{field:"address",title:"Address",showOverflow:!0}]}),s=function(){n.loading=!0,setTimeout((function(){n.loading=!1,a.total=10,n.data=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"1",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"0",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"1",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Develop",sex:"0",age:27,address:"Shanghai"},{id:10007,name:"Test7",nickname:"T7",role:"Develop",sex:"1",age:29,address:"Shenzhen"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"0",age:32,address:"Shanghai"},{id:10009,name:"Test9",nickname:"T9",role:"Develop",sex:"1",age:30,address:"Shenzhen"},{id:10010,name:"Test10",nickname:"T10",role:"Develop",sex:"0",age:34,address:"Shanghai"}]}),300)},o=function(){a.currentPage=1,s()},l=function(e){var n=e.currentPage,t=e.pageSize;a.currentPage=n,a.pageSize=t,s()};return s(),function(e,i){var s=(0,t.up)("vxe-button"),d=(0,t.up)("vxe-pager"),u=(0,t.up)("vxe-grid");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(s,{onClick:o},{default:(0,t.w5)((function(){return[(0,t.Uk)("刷新")]})),_:1}),(0,t.Wm)(u,(0,r.vs)((0,t.F4)(n)),{pager:(0,t.w5)((function(){return[(0,t.Wm)(d,{layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],"current-page":a.currentPage,"onUpdate:currentPage":i[0]||(i[0]=function(e){return a.currentPage=e}),"page-size":a.pageSize,"onUpdate:pageSize":i[1]||(i[1]=function(e){return a.pageSize=e}),total:a.total,onPageChange:l},null,8,["current-page","page-size","total"])]})),_:1},16)])}}});const o=s;var l=o}}]);