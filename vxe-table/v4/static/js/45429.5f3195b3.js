"use strict";(self["webpackChunkvxe_table_v4"]=self["webpackChunkvxe_table_v4"]||[]).push([[45429],{45429:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var o=t(66252),u=t(3577),s=(0,o._)("p",{class:"tip"},[(0,o.Uk)(" 方式1：如果您使用了 vite，借助插件 "),(0,o._)("a",{class:"link",href:"https://www.npmjs.com/package/vite-plugin-style-import",target:"_blank"},"vite-plugin-style-import"),(0,o.Uk)(" 可以实现按需加载模块，减少文件体积。 ")],-1),l=(0,o._)("div",null,"修改文件 vite.config.ts",-1),r=(0,o._)("div",null,"最后这样按需引入模块，就可以减小体积了",-1),a=(0,o._)("p",{class:"tip"},[(0,o.Uk)(" 方式2：如果您使用了 webpack，借助插件 "),(0,o._)("a",{class:"link",href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank"},"babel-plugin-import"),(0,o.Uk)(" 可以实现按需加载模块，减少文件体积。 ")],-1),p=(0,o._)("div",null,"修改文件 .babelrc 或 babel.config.js",-1),i=(0,o._)("div",null,"最后这样按需引入模块，就可以减小体积了",-1);function c(n,e){var t=(0,o.up)("pre-code");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h2",null,(0,u.zw)(n.$t("app.aside.nav.use")),1),s,(0,o._)("pre",null,[(0,o.Uk)("      "),(0,o.Wm)(t,{class:"shell"},{default:(0,o.w5)((function(){return[(0,o.Uk)("\n        npm install vite-plugin-style-import -D\n      ")]})),_:1}),(0,o.Uk)("\n      "),l,(0,o.Uk)("\n      "),(0,o.Wm)(t,{class:"typescript"},{default:(0,o.w5)((function(){return[(0,o.Uk)("\n        import { defineConfig } from 'vite'\n        import vue from '@vitejs/plugin-vue'\n        import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import'\n\n        export default defineConfig({\n          plugins: [\n            // ...,\n            createStyleImportPlugin({\n              resolves: [\n                VxeTableResolve()\n              ],\n            })\n          ]\n        })\n      ")]})),_:1}),(0,o.Uk)("\n      "),r,(0,o.Uk)("\n      "),(0,o.Wm)(t,{class:"typescript"},{default:(0,o.w5)((function(){return[(0,o.Uk)("\n        import { App, createApp } from 'vue'\n        import XEUtils from 'xe-utils'\n        import {\n          // 全局对象\n          VXETable,\n\n          // 表格功能\n          // Filter,\n          // Edit,\n          // Menu,\n          // Export,\n          // Keyboard,\n          // Validator,\n\n          // 可选组件\n          Icon,\n          Column,\n          // Colgroup,\n          // Grid,\n          // Tooltip,\n          // Toolbar,\n          // Pager,\n          // Form,\n          // FormItem,\n          // FormGather,\n          // Checkbox,\n          // CheckboxGroup,\n          // Radio,\n          // RadioGroup,\n          // RadioButton,\n          // Switch,\n          // Input,\n          // Select,\n          // Optgroup,\n          // Option,\n          // Textarea,\n          // Button,\n          // Modal,\n          // List,\n          // Pulldown,\n\n          // 表格\n          Table\n        } from 'vxe-table'\n        import zhCN from 'vxe-table/es/locale/lang/zh-CN'\n        import 'vxe-table/styles/variable.scss'\n        import 'vxe-table/styles/cssvar.scss'\n\n        // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：\n        VXETable.setup({\n          i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)\n        })\n\n        function useTable (app: App) {\n          // 表格功能\n          // app.use(Filter)\n          // .use(Edit)\n          // .use(Menu)\n          // .use(Export)\n          // .use(Keyboard)\n          // .use(Validator)\n\n          // 可选组件\n          app.use(Icon)\n          .use(Column)\n          // .use(Colgroup)\n          // .use(Grid)\n          // .use(Tooltip)\n          // .use(Toolbar)\n          // .use(Pager)\n          // .use(Form)\n          // .use(FormItem)\n          // .use(FormGather)\n          // .use(Checkbox)\n          // .use(CheckboxGroup)\n          // .use(Radio)\n          // .use(RadioGroup)\n          // .use(RadioButton)\n          // .use(Switch)\n          // .use(Input)\n          // .use(Select)\n          // .use(Optgroup)\n          // .use(Option)\n          // .use(Textarea)\n          // .use(Button)\n          // .use(Modal)\n          // .use(List)\n          // .use(Pulldown)\n\n          // 安装表格\n          .use(Table)\n        }\n\n        createApp(App).use(useTable).mount('#app')\n      ")]})),_:1}),(0,o.Uk)("\n    ")]),a,(0,o._)("pre",null,[(0,o.Uk)("      "),(0,o.Wm)(t,{class:"shell"},{default:(0,o.w5)((function(){return[(0,o.Uk)("\n        npm install babel-plugin-import -D\n      ")]})),_:1}),(0,o.Uk)("\n      "),p,(0,o.Uk)("\n      "),(0,o.Wm)(t,{class:"typescript"},{default:(0,o.w5)((function(){return[(0,o.Uk)('\n        {\n          "plugins": [\n            [\n              "import",\n              {\n                "libraryName": "vxe-table",\n                "style": true // 样式是否也按需加载\n              }\n            ]\n          ]\n        }\n      ')]})),_:1}),(0,o.Uk)("\n      "),i,(0,o.Uk)("\n      "),(0,o.Wm)(t,{class:"typescript"},{default:(0,o.w5)((function(){return[(0,o.Uk)("\n        import { App, createApp } = 'vue'\n        import XEUtils from 'xe-utils'\n        import {\n          // 核心\n          VXETable,\n\n          // 表格功能\n          // Filter,\n          // Edit,\n          // Menu,\n          // Export,\n          // Keyboard,\n          // Validator,\n\n          // 可选组件\n          Icon,\n          Column,\n          // Colgroup,\n          // Grid,\n          // Tooltip,\n          // Toolbar,\n          // Pager,\n          // Form,\n          // FormItem,\n          // FormGather,\n          // Checkbox,\n          // CheckboxGroup,\n          // Radio,\n          // RadioGroup,\n          // RadioButton,\n          // Switch,\n          // Input,\n          // Select,\n          // Optgroup,\n          // Option,\n          // Textarea,\n          // Button,\n          // Modal,\n          // List,\n          // Pulldown,\n\n          // 表格\n          Table\n        } from 'vxe-table'\n        import zhCN from 'vxe-table/lib/locale/lang/zh-CN'\n        import 'vxe-table/styles/variable.scss'\n        import 'vxe-table/styles/cssvar.scss'\n\n        // 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：\n        VXETable.setup({\n          i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)\n        })\n\n        function useTable (app: App) {\n          // 表格功能\n          // app.use(Filter)\n          // .use(Edit)\n          // .use(Menu)\n          // .use(Export)\n          // .use(Keyboard)\n          // .use(Validator)\n\n          // 可选组件\n          app.use(Icon)\n          .use(Column)\n          // .use(Colgroup)\n          // .use(Grid)\n          // .use(Tooltip)\n          // .use(Toolbar)\n          // .use(Pager)\n          // .use(Form)\n          // .use(FormItem)\n          // .use(FormGather)\n          // .use(Checkbox)\n          // .use(CheckboxGroup)\n          // .use(Radio)\n          // .use(RadioGroup)\n          // .use(RadioButton)\n          // .use(Switch)\n          // .use(Input)\n          // .use(Select)\n          // .use(Optgroup)\n          // .use(Option)\n          // .use(Textarea)\n          // .use(Button)\n          // .use(Modal)\n          // .use(List)\n          // .use(Pulldown)\n\n          // 安装表格\n          .use(Table)\n        }\n\n        createApp(App).use(useTable).mount('#app')\n      ")]})),_:1}),(0,o.Uk)("\n    ")])])}var m=t(83744);const b={},d=(0,m.Z)(b,[["render",c]]);var k=d}}]);