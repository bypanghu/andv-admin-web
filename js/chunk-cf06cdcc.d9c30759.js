(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf06cdcc"],{"2f3a":function(a,t,s){"use strict";s.r(t);for(var r=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("a-row",{attrs:{gutter:24}},[s("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[s("chart-card",{attrs:{loading:a.loading,title:a.$t("dashboard.analysis.total-sales"),total:"￥126,560"}},[s("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[s("a-icon",{attrs:{type:"info-circle-o"}})],1),s("div",[s("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"up"}},[s("span",{attrs:{slot:"term"},slot:"term"},[a._v(a._s(a.$t("dashboard.analysis.week")))]),a._v(" 12% ")]),s("trend",{attrs:{flag:"down"}},[s("span",{attrs:{slot:"term"},slot:"term"},[a._v(a._s(a.$t("dashboard.analysis.day")))]),a._v(" 11% ")])],1),s("template",{slot:"footer"},[a._v(a._s(a.$t("dashboard.analysis.day-sales"))),s("span",[a._v("￥ 234.56")])])],2)],1),s("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[s("chart-card",{attrs:{loading:a.loading,title:a.$t("dashboard.analysis.visits"),total:a._f("NumberFormat")(8846)}},[s("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[s("a-icon",{attrs:{type:"info-circle-o"}})],1),s("div",[s("mini-area")],1),s("template",{slot:"footer"},[a._v(a._s(a.$t("dashboard.analysis.day-visits"))),s("span",[a._v(" "+a._s(a._f("NumberFormat")("1234")))])])],2)],1),s("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[s("chart-card",{attrs:{loading:a.loading,title:a.$t("dashboard.analysis.payments"),total:a._f("NumberFormat")(6560)}},[s("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[s("a-icon",{attrs:{type:"info-circle-o"}})],1),s("div",[s("mini-bar")],1),s("template",{slot:"footer"},[a._v(a._s(a.$t("dashboard.analysis.conversion-rate"))+" "),s("span",[a._v("60%")])])],2)],1),s("a-col",{style:{marginBottom:"24px"},attrs:{sm:24,md:12,xl:6}},[s("chart-card",{attrs:{loading:a.loading,title:a.$t("dashboard.analysis.operational-effect"),total:"78%"}},[s("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[s("a-icon",{attrs:{type:"info-circle-o"}})],1),s("div",[s("mini-progress",{attrs:{color:"rgb(19, 194, 194)",target:80,percentage:78,height:"8px"}})],1),s("template",{slot:"footer"},[s("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down"}},[s("span",{attrs:{slot:"term"},slot:"term"},[a._v(a._s(a.$t("dashboard.analysis.week")))]),a._v(" 12% ")]),s("trend",{attrs:{flag:"up"}},[s("span",{attrs:{slot:"term"},slot:"term"},[a._v(a._s(a.$t("dashboard.analysis.day")))]),a._v(" 80% ")])],1)],2)],1)],1),s("a-card",{attrs:{loading:a.loading,bordered:!1,"body-style":{padding:"0"}}},[s("div",{staticClass:"salesCard"},[s("a-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[s("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[s("div",{staticClass:"extra-item"},[s("a",[a._v(a._s(a.$t("dashboard.analysis.all-day")))]),s("a",[a._v(a._s(a.$t("dashboard.analysis.all-week")))]),s("a",[a._v(a._s(a.$t("dashboard.analysis.all-month")))]),s("a",[a._v(a._s(a.$t("dashboard.analysis.all-year")))])]),s("a-range-picker",{style:{width:"256px"}})],1),s("a-tab-pane",{key:"1",attrs:{loading:"true",tab:a.$t("dashboard.analysis.sales")}},[s("a-row",[s("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[s("bar",{attrs:{data:a.barData,title:a.$t("dashboard.analysis.sales-trend")}})],1),s("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[s("rank-list",{attrs:{title:a.$t("dashboard.analysis.sales-ranking"),list:a.rankList}})],1)],1)],1),s("a-tab-pane",{key:"2",attrs:{tab:a.$t("dashboard.analysis.visits")}},[s("a-row",[s("a-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[s("bar",{attrs:{data:a.barData2,title:a.$t("dashboard.analysis.visits-trend")}})],1),s("a-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[s("rank-list",{attrs:{title:a.$t("dashboard.analysis.visits-ranking"),list:a.rankList}})],1)],1)],1)],1)],1)]),s("div",{staticClass:"antd-pro-pages-dashboard-analysis-twoColLayout",class:!a.isMobile&&"desktop"},[s("a-row",{style:{marginTop:"24px"},attrs:{gutter:24,type:"flex"}},[s("a-col",{attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[s("a-card",{style:{height:"100%"},attrs:{loading:a.loading,bordered:!1,title:a.$t("dashboard.analysis.online-top-search")}},[s("a-dropdown",{attrs:{slot:"extra",trigger:["click"],placement:"bottomLeft"},slot:"extra"},[s("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[s("a-icon",{attrs:{type:"ellipsis"}})],1),s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.$t("dashboard.analysis.dropdown-option-one")))])]),s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.$t("dashboard.analysis.dropdown-option-two")))])])],1)],1),s("a-row",{attrs:{gutter:68}},[s("a-col",{style:{marginBottom:" 24px"},attrs:{xs:24,sm:12}},[s("number-info",{attrs:{total:12321,"sub-total":17.1}},[s("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[s("span",[a._v(a._s(a.$t("dashboard.analysis.search-users")))]),s("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[s("a-icon",{style:{marginLeft:"8px"},attrs:{type:"info-circle-o"}})],1)],1)]),s("div",[s("mini-smooth-area",{style:{height:"45px"},attrs:{dataSource:a.searchUserData,scale:a.searchUserScale}})],1)],1),s("a-col",{style:{marginBottom:" 24px"},attrs:{xs:24,sm:12}},[s("number-info",{attrs:{total:2.7,"sub-total":26.2,status:"down"}},[s("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[s("span",[a._v(a._s(a.$t("dashboard.analysis.per-capita-search")))]),s("a-tooltip",{attrs:{slot:"action",title:a.$t("dashboard.analysis.introduce")},slot:"action"},[s("a-icon",{style:{marginLeft:"8px"},attrs:{type:"info-circle-o"}})],1)],1)]),s("div",[s("mini-smooth-area",{style:{height:"45px"},attrs:{dataSource:a.searchUserData,scale:a.searchUserScale}})],1)],1)],1),s("div",{staticClass:"ant-table-wrapper"},[s("a-table",{attrs:{"row-key":"index",size:"small",columns:a.searchTableColumns,dataSource:a.searchData,pagination:{pageSize:5}},scopedSlots:a._u([{key:"range",fn:function(t,r){return s("span",{},[s("trend",{attrs:{flag:0===r.status?"up":"down"}},[a._v(" "+a._s(t)+"% ")])],1)}}])})],1)],1)],1),s("a-col",{attrs:{xl:12,lg:24,md:24,sm:24,xs:24}},[s("a-card",{staticClass:"antd-pro-pages-dashboard-analysis-salesCard",style:{height:"100%"},attrs:{loading:a.loading,bordered:!1,title:a.$t("dashboard.analysis.the-proportion-of-sales")}},[s("div",{staticStyle:{height:"inherit"},attrs:{slot:"extra"},slot:"extra"},[s("span",{staticClass:"dashboard-analysis-iconGroup"},[s("a-dropdown",{attrs:{trigger:["click"],placement:"bottomLeft"}},[s("a-icon",{staticClass:"ant-dropdown-link",attrs:{type:"ellipsis"}}),s("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.$t("dashboard.analysis.dropdown-option-one")))])]),s("a-menu-item",[s("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.$t("dashboard.analysis.dropdown-option-two")))])])],1)],1)],1),s("div",{staticClass:"analysis-salesTypeRadio"},[s("a-radio-group",{attrs:{defaultValue:"a"}},[s("a-radio-button",{attrs:{value:"a"}},[a._v(a._s(a.$t("dashboard.analysis.channel.all")))]),s("a-radio-button",{attrs:{value:"b"}},[a._v(a._s(a.$t("dashboard.analysis.channel.online")))]),s("a-radio-button",{attrs:{value:"c"}},[a._v(a._s(a.$t("dashboard.analysis.channel.stores")))])],1)],1)]),s("h4",[a._v(a._s(a.$t("dashboard.analysis.sales")))]),s("div",[s("div",[s("v-chart",{attrs:{"force-fit":!0,height:405,data:a.pieData,scale:a.pieScale}},[s("v-tooltip",{attrs:{showTitle:!1,dataKey:"item*percent"}}),s("v-axis"),s("v-legend",{attrs:{dataKey:"item"}}),s("v-pie",{attrs:{position:"percent",color:"item",vStyle:a.pieStyle}}),s("v-coord",{attrs:{type:"theta",radius:.75,innerRadius:.6}})],1)],1)])])],1)],1)],1)],1)},e=[],o=s("c1df"),i=s.n(o),n=s("2af9"),l=s("432b"),d=[],c=[],p=0;p<12;p+=1)d.push({x:"".concat(p+1,"月"),y:Math.floor(1e3*Math.random())+200}),c.push({x:"".concat(p+1,"月"),y:Math.floor(1e3*Math.random())+200});for(var u=[],h=0;h<7;h++)u.push({name:"白鹭岛 "+(h+1)+" 号店",total:1234.56-100*h});for(var m=[],y=0;y<7;y++)m.push({x:i()().add(y,"days").format("YYYY-MM-DD"),y:Math.ceil(10*Math.random())});for(var b=[{dataKey:"x",alias:"时间"},{dataKey:"y",alias:"用户数",min:0,max:10}],f=[],g=0;g<50;g+=1)f.push({index:g+1,keyword:"搜索关键词-".concat(g),count:Math.floor(1e3*Math.random()),range:Math.floor(100*Math.random()),status:Math.floor(10*Math.random()%2)});var v=s("7104"),x=[{item:"家用电器",count:32.2},{item:"食用酒水",count:21},{item:"个护健康",count:17},{item:"服饰箱包",count:13},{item:"母婴产品",count:9},{item:"其他",count:7.8}],_=[{dataKey:"percent",min:0,formatter:".0%"}],$=(new v.View).source(x);$.transform({type:"percent",field:"count",dimension:"item",as:"percent"});var w=$.rows,k={name:"Analysis",mixins:[l["a"]],components:{ChartCard:n["d"],MiniArea:n["f"],MiniBar:n["g"],MiniProgress:n["h"],RankList:n["m"],Bar:n["c"],Trend:n["r"],NumberInfo:n["k"],MiniSmoothArea:n["i"]},data:function(){return{loading:!0,rankList:u,searchUserData:m,searchUserScale:b,searchData:f,barData:d,barData2:c,pieScale:_,pieData:w,sourceData:x,pieStyle:{stroke:"#fff",lineWidth:1}}},computed:{searchTableColumns:function(){return[{dataIndex:"index",title:this.$t("dashboard.analysis.table.rank"),width:90},{dataIndex:"keyword",title:this.$t("dashboard.analysis.table.search-keyword")},{dataIndex:"count",title:this.$t("dashboard.analysis.table.users")},{dataIndex:"range",title:this.$t("dashboard.analysis.table.weekly-range"),align:"right",sorter:function(a,t){return a.range-t.range},scopedSlots:{customRender:"range"}}]}},created:function(){var a=this;setTimeout((function(){a.loading=!a.loading}),1e3)}},M=k,C=(s("3691"),s("0c7c")),S=Object(C["a"])(M,r,e,!1,null,"c41b386a",null);t["default"]=S.exports},3691:function(a,t,s){"use strict";var r=s("46df"),e=s.n(r);e.a},"432b":function(a,t,s){"use strict";s.d(t,"a",(function(){return o}));var r=s("5530"),e=s("5880"),o={computed:Object(r["a"])(Object(r["a"])({},Object(e["mapState"])({layout:function(a){return a.app.layout},navTheme:function(a){return a.app.theme},primaryColor:function(a){return a.app.color},colorWeak:function(a){return a.app.weak},fixedHeader:function(a){return a.app.fixedHeader},fixedSidebar:function(a){return a.app.fixedSidebar},contentWidth:function(a){return a.app.contentWidth},autoHideHeader:function(a){return a.app.autoHideHeader},isMobile:function(a){return a.app.isMobile},sideCollapsed:function(a){return a.app.sideCollapsed},multiTab:function(a){return a.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}},"46df":function(a,t,s){}}]);