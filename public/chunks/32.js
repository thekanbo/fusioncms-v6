(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{zN65:function(e,t,a){"use strict";a.r(t);var s=a("ke3Z"),r={data:function(){return{fieldsets:[],creatingFieldset:!1,form:new s.a({name:"",handle:"",description:"",type:"collection",fieldset:null,sidebar:"1",quicklink:"1",icon:"",route:"",template:"",categorizable:"1",creditable:"1",publishable:"1",revision_control:"1",seoable:"1",status:"1"})}},methods:{submit:function(){var e=this;this.form.post("/api/matrices").then(function(t){toast("Matrix successfully created","success"),e.$router.push("/matrices")}).catch(function(e){toast(e.message,"failed")})}},beforeRouteEnter:function(e,t,a){axios.all([axios.get("/api/fieldsets")]).then(axios.spread(function(e){a(function(t){t.fieldsets=_.map(e.data.data,function(e){return{label:e.name,value:e.id}}),t.fieldsets.unshift({label:"None",value:null})})}))}},l=a("KHd+"),o=Object(l.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"chart-network"}},[e._v("Create Matrix")])],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[a("div",{staticClass:"xxl:mr-10"},[a("h3",[e._v("General")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("What will this matrix be called and what will it manage?")])])]),e._v(" "),a("div",{staticClass:"col w-full xxl:w-2/3"},[a("p-input",{attrs:{name:"name",label:"Name",help:"What this matrix will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the matrix's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),a("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this matrix will manage and store.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),a("p-select",{attrs:{name:"type",label:"Type",help:"What type of matrix will this be?",options:[{label:"Collection",value:"collection"},{label:"Page",value:"page"}],"has-error":e.form.errors.has("type"),"error-message":e.form.errors.get("type")},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}}),e._v(" "),a("div",{staticClass:"flex"},[e.creatingFieldset?a("p-input",{staticClass:"flex-grow",attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to create? Don't forget to configure it afterwards.","has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}}):a("p-select",{staticClass:"flex-grow",attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to attach?",options:e.fieldsets,"has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}}),e._v(" "),a("div",{staticClass:"form__group ml-2"},[a("label",{staticClass:"form__label",attrs:{for:"create_fieldset"}},[e._v(" ")]),e._v(" "),e.creatingFieldset?e._e():a("p-button",{staticClass:"form__select-button font-mono",on:{click:function(t){e.creatingFieldset=!0}}},[e._v("+")]),e._v(" "),e.creatingFieldset?a("div",{staticClass:"flex"},[a("p-button",{staticClass:"form__select-button mr-1",attrs:{theme:"primary"},on:{click:function(e){e.preventDefault()}}},[e._v("Create")]),e._v(" "),a("p-button",{staticClass:"form__select-button",on:{click:function(t){e.creatingFieldset=!1}}},[e._v("Cancel")])],1):e._e()],1)],1)],1)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[a("div",{staticClass:"xxl:mr-10"},[a("h3",[e._v("Customize")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Customize how your matrix will be found and displayed within the admin control panel.")])])]),e._v(" "),a("div",{staticClass:"col w-full xxl:w-2/3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-select",{attrs:{name:"sidebar",label:"Show in Sidebar",help:"Do you want this matrix to be shown in the sidebar?",options:[{label:"Show",value:"1"},{label:"Hide",value:"0"}],"has-error":e.form.errors.has("sidebar"),"error-message":e.form.errors.get("sidebar")},model:{value:e.form.sidebar,callback:function(t){e.$set(e.form,"sidebar",t)},expression:"form.sidebar"}})],1),e._v(" "),a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-select",{attrs:{name:"quicklink",label:"Show as Quicklink",help:"Do you want this matrix to be shown as a quicklink on the dashboard?",options:[{label:"Show",value:"1"},{label:"Hide",value:"0"}],"has-error":e.form.errors.has("quicklink"),"error-message":e.form.errors.get("quicklink")},model:{value:e.form.quicklink,callback:function(t){e.$set(e.form,"quicklink",t)},expression:"form.quicklink"}})],1),e._v(" "),a("div",{staticClass:"col w-full"},[a("p-input",{attrs:{name:"icon",label:"Icon",placeholder:"pencil",help:"Choose an icon that best represents your matrix.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon")},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1)])])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[a("div",{staticClass:"xxl:mr-10"},[a("h3",[e._v("Route")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("If your matrix will be accessible from the frontend, you may define its route and template here.")])])]),e._v(" "),a("div",{staticClass:"col w-full xxl:w-2/3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-input",{attrs:{name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route",t)},expression:"form.route"}})],1),e._v(" "),a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-input",{attrs:{name:"template",label:"Template",help:"Specify the template to be loaded",autocomplete:"off","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template"),autofocus:"",required:""},model:{value:e.form.template,callback:function(t){e.$set(e.form,"template",t)},expression:"form.template"}})],1)])])])])],1)]),e._v(" "),a("div",{staticClass:"side-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:"1"},{label:"Disabled",value:"0"}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)]),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"matrices"}}},[e._v("Go Back")]),e._v(" "),a("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Matrix")])],1)],1)],1)])])],1)},[],!1,null,null,null);t.default=o.exports}}]);