"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[36015],{36015:function(e,l,t){t.r(l),t.d(l,{default:function(){return m}});t(34284);var a=t(66252),n=t(2262),u=t(72896),o=(0,a._)("div",{style:{color:"red"}},"使用自定义布局",-1),i={style:{border:"1px dashed green",padding:"10px"}},d=(0,a._)("span",{style:{color:"red"}},"标题",-1),r=(0,a.aZ)({__name:"Demo3",setup:function(e){var l=(0,n.iH)(!0),t=(0,n.qj)({name:"",nickname:"",sex:"",age:30,status:"1",date:"",active:!1,flagList:[]}),r=(0,n.qj)({name:[{required:!0,message:"请输入"}],nickname:[{required:!0,message:"请输入"}]}),c=function(){u.s7.modal.message({content:"查询事件",status:"info"})},m=function(){u.s7.modal.message({content:"重置事件",status:"info"})};return function(e,n){var u=(0,a.up)("vxe-input"),f=(0,a.up)("vxe-form-item"),s=(0,a.up)("vxe-option"),p=(0,a.up)("vxe-select"),v=(0,a.up)("vxe-switch"),V=(0,a.up)("vxe-checkbox"),x=(0,a.up)("vxe-checkbox-group"),g=(0,a.up)("vxe-button"),W=(0,a.up)("vxe-form");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(W,{collapseStatus:l.value,"onUpdate:collapseStatus":n[1]||(n[1]=function(e){return l.value=e}),data:t,rules:r,"title-align":"right","title-width":"100","prevent-submit":"","title-colon":"","custom-layout":""},{default:(0,a.w5)((function(){return[o,(0,a.Wm)(f,{title:"名称",field:"name","item-render":{}},{default:(0,a.w5)((function(e){var l=e.data;return[(0,a.Wm)(u,{modelValue:l.name,"onUpdate:modelValue":function(e){return l.name=e},placeholder:"请输入名称",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a._)("div",i,[(0,a.Wm)(f,{title:"昵称",field:"nickname","item-render":{},"title-prefix":{message:"左边图标",icon:"vxe-icon-question-circle-fill"}},{default:(0,a.w5)((function(e){var l=e.data;return[(0,a.Wm)(u,{modelValue:l.nickname,"onUpdate:modelValue":function(e){return l.nickname=e},placeholder:"请输入昵称",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a.Wm)(f,{title:"性别",field:"sex","item-render":{},"title-prefix":{message:"左边图标",icon:"vxe-icon-question-circle-fill"},"title-suffix":{message:"右边图标",icon:"vxe-icon-question-circle-fill"}},{title:(0,a.w5)((function(){return[d]})),default:(0,a.w5)((function(e){var l=e.data;return[(0,a.Wm)(p,{modelValue:l.sex,"onUpdate:modelValue":function(e){return l.sex=e},placeholder:"请选择性别",clearable:""},{default:(0,a.w5)((function(){return[(0,a.Wm)(s,{value:"1",label:"女"}),(0,a.Wm)(s,{value:"2",label:"男"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a.Wm)(f,{title:"年龄",field:"age","item-render":{},"title-suffix":{message:"右边图标",icon:"vxe-icon-question-circle-fill"}},{default:(0,a.w5)((function(e){var l=e.data;return[(0,a.Wm)(u,{modelValue:l.age,"onUpdate:modelValue":function(e){return l.age=e},type:"integer",placeholder:"请输入年龄",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a.Wm)(f,{title:"是否禁用",field:"active","item-render":{}},{default:(0,a.w5)((function(e){var l=e.data;return[(0,a.Wm)(v,{modelValue:l.active,"onUpdate:modelValue":function(e){return l.active=e},"open-label":"是","close-label":"否"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a._)("div",null,[(0,a.Wm)(V,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return l.value=e}),content:"查看更多","checked-value":!1,"unchecked-value":!0},null,8,["modelValue"])]),(0,a.Wm)(f,{title:"日期",field:"date","item-render":{},folding:""},{default:(0,a.w5)((function(e){var l=e.data;return[(0,a.Wm)(u,{modelValue:l.date,"onUpdate:modelValue":function(e){return l.date=e},type:"date",placeholder:"请选择日期",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a.Wm)(f,{title:"兴趣爱好",field:"flagList","item-render":{},folding:""},{default:(0,a.w5)((function(e){var l=e.data;return[(0,a.Wm)(x,{modelValue:l.flagList,"onUpdate:modelValue":function(e){return l.flagList=e}},{default:(0,a.w5)((function(){return[(0,a.Wm)(V,{label:"1",content:"爬山"}),(0,a.Wm)(V,{label:"2",content:"跑步"}),(0,a.Wm)(V,{label:"3",content:"听歌"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,a._)("div",null,[(0,a.Wm)(f,{align:"center","collapse-node":""},{default:(0,a.w5)((function(){return[(0,a.Wm)(g,{status:"primary",content:"手动提交方式",onClick:c}),(0,a.Wm)(g,{content:"重置",onClick:m})]})),_:1})])])]})),_:1},8,["collapseStatus","data","rules"])])}}});const c=r;var m=c}}]);