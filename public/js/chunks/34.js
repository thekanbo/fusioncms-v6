(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{EACl:function(e,t,i){"use strict";i.r(t),t.default={props:{value:{required:!0}},watch:{value:{deep:!0,handler:function(e){this.$emit("input",e)}}}}},UN3v:function(e,t,i){"use strict";i.r(t);var l={name:"asset-fieldtype-settings",mixins:[i("EACl").default],data:function(){return{filetypes:{image:"Images",video:"Videos",audio:"Audio",document:"Documents"},directories:[]}},created:function(){var e=this;axios.get("/api/directories").then((function(t){e.directories=_.map(t.data.data,(function(e){return{label:e.name,value:e.id}})),e.directories.unshift({label:"None",value:null})}))}},s=i("KHd+"),a=Object(s.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col w-1/2"},[i("p-number",{attrs:{name:"settings.limit",label:"Limit",help:"Limit the number of assets selected; leave blank if no limit is desired.",placeholder:""},model:{value:e.value.limit,callback:function(t){e.$set(e.value,"limit",t)},expression:"value.limit"}}),e._v(" "),i("p-checkbox-group",{attrs:{label:"File type restrictions",help:"Restrict which file types are selectable for this field; leave blank if no retriction is desired."}},e._l(e.filetypes,(function(t,l){return i("p-checkbox",{key:l,attrs:{name:"filetype_restrictions",id:l,"native-value":l},model:{value:e.value.filetype_restrictions,callback:function(t){e.$set(e.value,"filetype_restrictions",t)},expression:"value.filetype_restrictions"}},[e._v("\n\t\t\t\t\t"+e._s(t)+"\n\t\t\t\t")])})),1)],1),e._v(" "),i("div",{staticClass:"col w-1/2"},[i("p-select",{attrs:{name:"root_directory",label:"Root directory",help:"Select root folder for this field; default root will be used if None selected.",options:e.directories},model:{value:e.value.root_directory,callback:function(t){e.$set(e.value,"root_directory",t)},expression:"value.root_directory"}})],1)])}),[],!1,null,null,null);t.default=a.exports}}]);