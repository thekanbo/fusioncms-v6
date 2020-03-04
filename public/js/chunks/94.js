(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{Byip:function(e,t,s){"use strict";s.r(t);var a=s("ke3Z"),o=s("5fFP"),r={head:{title:function(){return{inner:"Create a Taxonomy"}}},data:function(){return{fieldsets:[],creatingFieldset:!1,form:new a.a({name:"",handle:"",description:"",fieldset:null,sidebar:"1",icon:"",route:"",template:"",status:"1"},!0)}},methods:{submit:function(){var e=this;this.form.post("/api/taxonomies").then((function(t){o.a.dispatch("navigation/fetchAdminNavigation"),toast("Taxonomy successfully created","success"),e.$router.push("/taxonomies")})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,t,s){axios.all([axios.get("/api/fieldsets")]).then(axios.spread((function(e){s((function(t){t.fieldsets=_.map(e.data.data,(function(e){return{label:e.name,value:e.id}})),t.fieldsets.unshift({label:"None",value:null}),t.$nextTick((function(){t.form.resetChangeListener()}))}))})))}},i=s("KHd+"),l=Object(i.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"sitemap"}},[e._v("Create Taxonomy")])],1),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},"~input":function(t){return e.form.onFirstChange(t)}}},[s("p-card",[s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("General")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("What will this taxonomy be called and what will it organize?")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("p-input",{attrs:{name:"name",label:"Name",help:"What this taxonomy will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),s("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the taxonomy's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),s("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this taxonomy will organize and store.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),s("div",{staticClass:"flex"},[e.creatingFieldset?s("p-input",{staticClass:"flex-grow",attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to create? Don't forget to configure it afterwards.","has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}}):s("p-select",{staticClass:"flex-grow",attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to attach?",options:e.fieldsets,"has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}}),e._v(" "),s("div",{staticClass:"form__group ml-2"},[s("label",{staticClass:"form__label",attrs:{for:"create_fieldset"}},[e._v(" ")]),e._v(" "),e.creatingFieldset?e._e():s("p-button",{staticClass:"form__select-button font-mono",on:{click:function(t){e.creatingFieldset=!0}}},[e._v("+")]),e._v(" "),e.creatingFieldset?s("div",{staticClass:"flex"},[s("p-button",{staticClass:"form__select-button mr-1",attrs:{theme:"primary"},on:{click:function(e){e.preventDefault()}}},[e._v("Create")]),e._v(" "),s("p-button",{staticClass:"form__select-button",on:{click:function(t){e.creatingFieldset=!1}}},[e._v("Cancel")])],1):e._e()],1)],1)],1)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("Customize")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Customize how your taxonomy will be found and displayed within the admin control panel.")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full xxl:w-1/2"},[s("p-select",{attrs:{name:"sidebar",label:"Show in Sidebar",help:"Do you want this taxonomy to be shown in the sidebar?",options:[{label:"Show",value:"1"},{label:"Hide",value:"0"}],"has-error":e.form.errors.has("sidebar"),"error-message":e.form.errors.get("sidebar")},model:{value:e.form.sidebar,callback:function(t){e.$set(e.form,"sidebar",t)},expression:"form.sidebar"}})],1),e._v(" "),s("div",{staticClass:"col w-full xxl:w-1/2"},[s("icon-picker",{attrs:{name:"icon",label:"Icon",placeholder:"Search icons...",help:"Choose an icon that best represents your taxonomy.","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon"),required:""},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1)])])]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[s("h3",[e._v("Route")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("If your taxonomy will be accessible from the frontend, you may define its route and template here.")])])]),e._v(" "),s("div",{staticClass:"content-container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full xxl:w-1/2"},[s("p-input",{attrs:{name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route",t)},expression:"form.route"}})],1),e._v(" "),s("div",{staticClass:"col w-full xxl:w-1/2"},[s("p-input",{attrs:{name:"template",label:"Template",help:"Render this template",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template")},model:{value:e.form.template,callback:function(t){e.$set(e.form,"template",t)},expression:"form.template"}})],1)])])])]),e._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button mr-3",attrs:{to:{name:"taxonomies"}}},[e._v("Go Back")]),e._v(" "),s("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Taxonomy")])],1)],1)])])],1)}),[],!1,null,null,null);t.default=l.exports}}]);