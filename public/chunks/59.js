(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"6OuU":function(e,t,n){"use strict";n.r(t);var a={name:"us_state-fieldtype",props:{field:{type:Object,required:!0},value:{required:!1,default:null}},computed:{states:function(){return Object.values(this.field.type.data)}},created:function(){var e=_.findIndex(this.states,(function(e){return 1==e.checked}));-1===e||this.states||this.$emit("input",this.states[e].value)}},l=n("KHd+"),i=Object(l.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p-select",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,value:e.value,options:e.states,placeholder:"Select a state..."},on:{input:function(t){return e.$emit("input",t)}}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);