"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[45722],{45722:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});t(6203),t(50886),t(34284);var l=t(66252),a=t(3577),u=t(2262),r=(0,l.aZ)({__name:"Demo1",setup:function(e){var n=(0,u.iH)([{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex2:["0"],num1:40,age:28,address:"Shenzhen",date12:"",date13:""},{id:10002,name:"Test2",nickname:"T2",role:"Designer",sex:"1",sex2:["0","1"],num1:20,age:22,address:"Guangzhou",date12:"",date13:"2020-08-20"},{id:10003,name:"Test3",nickname:"T3",role:"Test",sex:"0",sex2:["1"],num1:200,age:32,address:"Shanghai",date12:"2020-09-10",date13:""},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"1",sex2:["1"],num1:30,age:23,address:"Shenzhen",date12:"",date13:"2020-12-04"}]),t=(0,u.iH)([{label:"",value:""},{label:"男",value:"1"},{label:"女",value:"0"}]),r=function(e){return"1"===e?"男":"0"===e?"女":""},d=function(e){return e?e.map((function(e){return r(e)})).join(","):""};return function(e,u){var o=(0,l.up)("vxe-column"),i=(0,l.up)("vxe-input"),m=(0,l.up)("vxe-option"),s=(0,l.up)("vxe-select"),f=(0,l.up)("vxe-table");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(f,{border:"","show-overflow":"",data:n.value,"column-config":{resizable:!0},"edit-config":{trigger:"click",mode:"cell"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(o,{type:"seq",width:"60"}),(0,l.Wm)(o,{field:"name",title:"Name","edit-render":{autofocus:".vxe-input--inner"}},{edit:(0,l.w5)((function(e){var n=e.row;return[(0,l.Wm)(i,{modelValue:n.name,"onUpdate:modelValue":function(e){return n.name=e},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1},8,["edit-render"]),(0,l.Wm)(o,{field:"role",title:"Role","edit-render":{}},{edit:(0,l.w5)((function(e){var n=e.row;return[(0,l.Wm)(i,{modelValue:n.role,"onUpdate:modelValue":function(e){return n.role=e},type:"text",placeholder:"请输入昵称"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,l.Wm)(o,{field:"sex",title:"Sex","edit-render":{}},{default:(0,l.w5)((function(e){var n=e.row;return[(0,l._)("span",null,(0,a.zw)(r(n.sex)),1)]})),edit:(0,l.w5)((function(e){var n=e.row;return[(0,l.Wm)(s,{modelValue:n.sex,"onUpdate:modelValue":function(e){return n.sex=e},transfer:""},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value,(function(e){return(0,l.wg)(),(0,l.j4)(m,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,l.Wm)(o,{field:"sex2",title:"多选下拉","edit-render":{}},{default:(0,l.w5)((function(e){var n=e.row;return[(0,l._)("span",null,(0,a.zw)(d(n.sex2)),1)]})),edit:(0,l.w5)((function(e){var n=e.row;return[(0,l.Wm)(s,{modelValue:n.sex2,"onUpdate:modelValue":function(e){return n.sex2=e},multiple:"",transfer:""},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value,(function(e){return(0,l.wg)(),(0,l.j4)(m,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,l.Wm)(o,{field:"num6",title:"Number","edit-render":{}},{edit:(0,l.w5)((function(e){var n=e.row;return[(0,l.Wm)(i,{modelValue:n.num6,"onUpdate:modelValue":function(e){return n.num6=e},type:"number",placeholder:"请输入数值"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,l.Wm)(o,{field:"date12",title:"Date","edit-render":{}},{edit:(0,l.w5)((function(e){var n=e.row;return[(0,l.Wm)(i,{modelValue:n.date12,"onUpdate:modelValue":function(e){return n.date12=e},type:"date",placeholder:"请选择日期",transfer:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,l.Wm)(o,{field:"date13",title:"Week","edit-render":{}},{edit:(0,l.w5)((function(e){var n=e.row;return[(0,l.Wm)(i,{modelValue:n.date13,"onUpdate:modelValue":function(e){return n.date13=e},type:"week",placeholder:"请选择日期",transfer:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,l.Wm)(o,{field:"address",title:"Address","edit-render":{}},{edit:(0,l.w5)((function(e){var n=e.row;return[(0,l.Wm)(i,{modelValue:n.address,"onUpdate:modelValue":function(e){return n.address=e},type:"text"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["data"])])}}});const d=r;var o=d},6203:function(e,n,t){var l=t(79989),a=t(68844),u=t(94413),r=t(65290),d=t(16834),o=a([].join),i=u!==Object,m=i||!d("join",",");l({target:"Array",proto:!0,forced:m},{join:function(e){return o(r(this),void 0===e?",":e)}})}}]);