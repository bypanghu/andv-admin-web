(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02bd05fe"],{"1f27":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return n}));var s=a("b775");function o(t){return Object(s["b"])({url:"menu/list",method:"get",params:t})}function i(t){return Object(s["b"])({url:"admin/menu",method:"put",data:t})}function n(t){return Object(s["b"])({url:"admin/menu",method:"post",data:t})}},2928:function(t,e,a){"use strict";var s=a("cf76"),o=a.n(s);o.a},b705:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("model",{attrs:{title:t.titleList[t.model],visible:t.visible},on:{close:t.handelColse,submit:t.submit}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("a-form",[a("a-row",[a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("路由名称：")]),a("a-input",{staticClass:"form_input",attrs:{value:t.form.name,"default-value":t.form.name,placeholder:"请输入路由名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("路由path：")]),a("a-input",{staticClass:"form_input",attrs:{value:t.form.path,"default-value":t.form.path,placeholder:"请输入路由path"},model:{value:t.form.path,callback:function(e){t.$set(t.form,"path",e)},expression:"form.path"}})],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("请选择icon")]),a("a-popover",{attrs:{trigger:"click"}},[a("template",{slot:"content"},[a("icon-selector",{staticStyle:{width:"500px"},on:{change:t.handelChangeIcon},model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}})],1),a("a-input",{staticClass:"form_input",attrs:{value:t.form.icon,"default-value":t.form.icon,placeholder:"请选择图标"},model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}})],2)],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("上级路由：")]),a("a-select",{staticStyle:{width:"60%"},attrs:{"show-search":"",placeholder:"请选择上级路由","default-value":t.form.parentId,"show-arrow":!1,"not-found-content":null},on:{change:t.handleRouterChange}},t._l(t.tabledata,(function(e,s){return a("a-select-option",{key:s,attrs:{value:e.id}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))])])})),1)],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("指向文件：")]),a("a-input",{staticClass:"form_input",attrs:{value:t.form.component,"default-value":t.form.component,placeholder:"请输入路由的指向路径"},model:{value:t.form.component,callback:function(e){t.$set(t.form,"component",e)},expression:"form.component"}})],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("是否显示：")]),a("a-switch",{attrs:{value:t.form.status},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("路由排序：")]),a("a-input",{staticClass:"form_input",attrs:{value:t.form.sort,"default-value":t.form.sort,placeholder:"数字越小越靠上"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1)]),a("a-col",{attrs:{span:24}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("备注：")]),a("a-input",{staticClass:"form_textarea",attrs:{"default-value":t.form.describe,value:t.form.describe,type:"textarea",placeholder:"请输入名称"},model:{value:t.form.describe,callback:function(e){t.$set(t.form,"describe",e)},expression:"form.describe"}})],1)])],1)],1)],1)])},o=[],i=(a("b0c0"),a("a9e3"),a("2af9")),n=a("1f27"),r=a("5e81"),c={props:{visible:{type:Boolean,required:!0},model:{type:Number,default:function(){return 0}},formData:{type:[String,Object],default:function(){}}},watch:{visible:{handler:function(t){t&&this.getMenuListInit()}}},data:function(){return{titleList:["新建","编辑"],form:{id:0,name:"",parentId:0,icon:"",component:"",describe:"",sort:"",status:!0,path:""},tabledata:[],modelWidth:this.$store.getters.modelWidth}},created:function(){this.getMenuListInit()},components:{IconSelector:r["a"],Model:i["j"]},activated:function(){},methods:{setData:function(t){var e=JSON.parse(t);this.form.id=e.id,this.form.name=e.name,this.form.parentId=e.parentId,this.form.icon=e.icon,this.form.component=e.components,this.form.path=e.path,this.form.sort=e.sort,this.form.describe=e.describe,0===e.status?this.form.status=!0:this.form.status=!1},handelColse:function(){this.form={id:0,name:"",parentId:0,icon:"",component:"",describe:"",sort:"",status:!0,path:""},this.$emit("cancel")},getMenuListInit:function(){var t=this;Object(n["b"])({page:1,pageSize:10}).then((function(e){if(200===e.code){var a=[{name:"根菜单",id:0}];if(e.data.list.length>0)for(var s in e.data.list)a.push({name:e.data.list[s].name,id:e.data.list[s].id});t.tabledata=a}}))},submit:function(){var t=this,e=this.form.status?0:1;0===this.model?Object(n["a"])({name:this.form.name,parentId:this.form.parentId,icon:this.form.icon,url:this.form.component,path:this.form.path,sort:this.form.sort,describe:this.form.describe,status:e}).then((function(e){t.handelColse(),200===e.code?(t.$message.success("添加成功"),t.getMenuListInit()):t.$message.error("添加失败")})):Object(n["c"])({id:this.form.id,name:this.form.name,parentId:this.form.parentId,icon:this.form.icon,url:this.form.component,path:this.form.path,sort:this.form.sort,describe:this.form.describe,status:e}).then((function(e){t.handelColse(),200===e.code?(t.$message.success("编辑成功"),t.getMenuListInit()):t.$message.error("编辑失败")}))},handleChange:function(t){this.form.icon=t},handleRouterChange:function(t){this.form.parentId=t},handelChangeIcon:function(t){this.form.icon=t}}},l=c,m=(a("2928"),a("0c7c")),f=Object(m["a"])(l,s,o,!1,null,"ef394bbe",null);e["default"]=f.exports},cf76:function(t,e,a){}}]);