(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-105effa0"],{1906:function(t,e,a){},3786:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o})),a.d(e,"d",(function(){return n}));var s=a("b775");function r(t){return Object(s["b"])({url:"admin/rule",method:"get",params:t})}function i(t){return Object(s["b"])({url:"admin/rule",method:"delete",data:t})}function o(t){return Object(s["b"])({url:"admin/rule",method:"put",data:t})}function n(t){return Object(s["b"])({url:"admin/rule",method:"post",data:t})}},4836:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{width:t.modelWidth,visible:t.visible,okText:t.titleList[t.model],cancelText:"取消","destroy-on-close":!0},on:{ok:t.submit,cancel:t.handelColse}},[a("div",[a("div",{staticClass:"model_title"},[t._v(" "+t._s(t.titleList[t.model])+" ")]),a("a-form",[a("a-row",[a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("api名称：")]),a("a-input",{staticClass:"form_input",attrs:{value:t.form.name,"default-value":t.form.name,placeholder:"请输入部门名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("请求地址：")]),a("a-input",{staticClass:"form_input",attrs:{value:t.form.url,"default-value":t.form.url,placeholder:"请输入部门名称"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("请求方式：")]),a("a-select",{staticStyle:{width:"60%"},attrs:{"show-search":"",value:t.form.method,"show-arrow":!1,"not-found-content":null},on:{change:t.handleChange}},t._l(t.serchClickList,(function(e){return a("a-select-option",{key:e.value,staticStyle:{"border-radius":"0"},attrs:{value:e.value}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("父极：")]),a("a-select",{staticStyle:{width:"60%"},attrs:{"show-search":"",placeholder:"请选择上级路由","default-value":t.form.parentId,"show-arrow":!1,"not-found-content":null},on:{change:t.handleParentChange}},t._l(t.tabledata,(function(e,s){return a("a-select-option",{key:s,attrs:{value:e.id}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))])])})),1)],1)]),a("a-col",{attrs:{span:12}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("状态：")]),a("a-switch",{attrs:{value:t.form.status},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)]),a("a-col",{attrs:{span:24}},[a("div",{staticClass:"form_item"},[a("div",{staticClass:"form_title"},[t._v("api备注：")]),a("a-input",{staticClass:"form_textarea",attrs:{"default-value":t.form.describe,value:t.form.describe,type:"textarea",placeholder:"请输入名称"},model:{value:t.form.describe,callback:function(e){t.$set(t.form,"describe",e)},expression:"form.describe"}})],1)])],1)],1)],1)])},r=[],i=(a("b0c0"),a("a9e3"),a("3786")),o=a("13bb"),n=[{title:"get",value:"get"},{title:"post",value:"post"},{title:"put",value:"put"},{title:"delete",value:"delete"}],l={props:{visible:{type:Boolean,required:!0},model:{type:Number,default:function(){return 0}},formData:{type:[String,Object],default:function(){}}},data:function(){return{titleList:["新建","编辑"],form:{id:0,name:"",describe:"",method:"",status:!0,parentId:0},serchClickList:n,tabledata:[],modelWidth:this.$store.getters.modelWidth}},components:{IconSelector:o["a"]},created:function(){this.getAuthListInit()},methods:{setData:function(t){this.form.id=t.id,this.form.name=t.name,this.form.describe=t.describe,this.form.url=t.url,this.form.method=t.method,this.form.parentId=t.parentId,0===t.status?this.form.status=!0:this.form.status=!1},getAuthListInit:function(){var t=this;Object(i["c"])({page:1,pageSize:10}).then((function(e){if(200===e.code){var a=[];if(e.data.list.length>0)for(var s in e.data.list)a.push({name:e.data.list[s].name,id:e.data.list[s].id});t.tabledata=a}}))},handelColse:function(){this.form={id:0,name:"",describe:"",method:"",status:!0,parentId:0},this.$emit("cancel")},handleChange:function(t){this.form.method=t},handleParentChange:function(t){this.form.parentId=t},submit:function(){var t=this,e=this.form.status?0:1;0===this.model?Object(i["a"])({name:this.form.name,describe:this.form.describe,method:this.form.method,parentId:this.form.parentId,url:this.form.url,status:e}).then((function(e){200===e.code?(t.$message.success("添加成功"),t.handelColse()):t.$message.error("添加失败")})):Object(i["d"])({id:this.form.id,name:this.form.name,describe:this.form.describe,method:this.form.method,parentId:this.form.parentId,url:this.form.url,status:e}).then((function(e){200===e.code?(t.$message.success("修改成功"),t.handelColse()):t.$message.error("修改失败")}))}}},c=l,d=(a("eaab"),a("0c7c")),u=Object(d["a"])(c,s,r,!1,null,"5f21c070",null);e["default"]=u.exports},eaab:function(t,e,a){"use strict";var s=a("1906"),r=a.n(s);r.a}}]);