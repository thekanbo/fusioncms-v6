(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{TJJd:function(t,i,a){"use strict";(function(t){i.a={head:{title:function(){return{inner:"Dashboard"}}},data:function(){return{matrices:[],activities:[],feed:[],icon:""}},computed:{quicklinks:function(){if(this.matrices)return _.filter(this.matrices,(function(t){return 1==t.quicklink}))}},beforeRouteEnter:function(i,a,e){axios.all([axios.get("/api/matrices"),axios.get("/api/activity"),axios.get(t.env.MIX_NEWS_FEED||"https://beta.getfusioncms.com/blog.json").catch((function(){return{data:{items:[]}}}))]).then(axios.spread((function(t,i,a){e((function(e){e.matrices=t.data.data,e.activities=i.data.data,e.feed=a.data.items}))})))}}}).call(this,a("8oxB"))},mFyt:function(t,i,a){"use strict";a.r(i);var e=a("TJJd").a,s=a("KHd+"),n=Object(s.a)(e,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"grip-horizontal"}},[t._v("Dashboard")])],1),t._v(" "),a("quicklinks",{attrs:{links:t.quicklinks}}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col mb-6 md:w-full"},[a("analytics-overview")],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full lg:w-2/3"},[a("recent-activity",{attrs:{activities:t.activities}})],1),t._v(" "),a("div",{staticClass:"col w-full lg:w-1/3"},[a("recent-news",{attrs:{feed:t.feed}})],1)])],1)}),[],!1,null,null,null);i.default=n.exports}}]);