(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UtPH:function(e,t,n){"use strict";var a={props:{form:{type:Object,required:!0}},computed:{sections:{get:function(){return this.$parent.sections},set:function(e){this.$parent.sections=e}}}},r=n("KHd+"),s=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container"},[n("form",{on:{submit:function(e){e.preventDefault()}}},[n("p-pane",{scopedSlots:e._u([{key:"side",fn:function(){return[n("p-pane-title",[e._v("General Information")])]},proxy:!0}])},[e._v(" "),n("p-input",{attrs:{name:"name",label:"Name",help:"What this fieldset will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the fieldset's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1),e._v(" "),n("section-builder",{staticClass:"mt-6",on:{input:e.$parent.sectionsChanged},model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),n("portal",{attrs:{to:"actions"}},[n("router-link",{staticClass:"button mr-3",attrs:{to:{name:"fieldsets"}}},[e._v("Go Back")]),e._v(" "),n("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)],1)])}),[],!1,null,null,null);t.a=s.exports},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},ke3Z:function(e,t,n){"use strict";n("WjD0");function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,n,r;return t=e,(n=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&a(t.prototype,n),r&&a(t,r),e}(),s=n("5fFP");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.d(t,"a",(function(){return u}));var u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i(this,e),this.errors=new r,this.originalData=t,this.hasChanges=!1,this.preventNavigation=n;var a=this;for(var s in this.__data={},t)this[s]=t[s],a.__data[s]=a[s],function(e){Object.defineProperty(a,e,{get:function(){return a.__data[e]},set:function(t){a.__data[e]=t,a.hasChanges||a.onFirstChange()}})}(s)}var t,n,a;return t=e,(n=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var n=this;return new Promise((function(a,r){axios[e](t,n.data()).then((function(e){n.onSuccess(e.data),s.a.commit("form/setPreventNavigation",!1),a(e.data)})).catch((function(e){n.onFailure(e.response.data),r(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&s.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(e){this.hasChanges=!1,this.preventNavigation&&s.a.commit("form/setPreventNavigation",!1)}}])&&o(t.prototype,n),a&&o(t,a),e}()},uPdR:function(e,t,n){"use strict";n.r(t);var a=n("ke3Z"),r={head:{title:function(){return{inner:this.form.name||"Loading..."}}},data:function(){return{id:null,sections:[],originalSections:[],loaded:!1,form:new a.a({name:"",handle:""},!0)}},components:{"shared-form":n("UtPH").a},methods:{submit:function(){var e=this;this.form.patch("/api/fieldsets/"+this.id).then((function(t){var n={};n.sections=e.sections,axios.post("/api/fieldsets/".concat(e.id,"/sections"),n).then((function(t){toast("Fieldset successfully updated","success"),e.$router.push("/fieldsets")}))})).catch((function(e){toast(e.response.data.message,"failed")}))},sectionsChanged:function(e){this.loaded&&!this.form.hasChanges&&(_.isEqual(this.originalSections,e)||this.form.onFirstChange())}},beforeRouteEnter:function(e,t,n){axios.all([axios.get("/api/fieldsets/"+e.params.fieldset)]).then(axios.spread((function(e){n((function(t){t.id=e.data.data.id,t.sections=e.data.data.sections,t.originalSections=_.cloneDeep(t.sections),t.form.name=e.data.data.name,t.form.handle=e.data.data.handle,t.loaded=!0,t.$emit("updateHead"),t.form.resetChangeListener()}))}))).catch((function(e){n("/fieldsets"),toast("The requested fieldset could not be found","warning")}))}},s=n("KHd+"),i=Object(s.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"list"}},[this._v("Edit Fieldset")])],1),this._v(" "),t("div",{staticClass:"row"},[t("shared-form",{attrs:{form:this.form}})],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);