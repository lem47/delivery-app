(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),i=a(6),l=a.n(i),r=(a(13),a(14),a(7)),n=a(2);var d=function(e){var t=e.delivery;return Object(c.jsx)("div",{className:"list-group",style:{width:"80%"},children:Object(c.jsxs)("div",{className:"list-group-item list-group-item-action",children:[Object(c.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(c.jsx)("h5",{className:"mb-3",children:"ROUTE: ".concat(t.cityFrom," - ").concat(t.cityTo)}),Object(c.jsx)("small",{className:"text-muted",children:"EDIT"})]}),Object(c.jsx)("p",{className:"mb-2",children:"PARCEL TYPE: ".concat(t.parcelType)}),Object(c.jsx)("p",{className:"mb-",children:"PARCEL DESCRIPTION: ".concat(t.parcelDescription)}),Object(c.jsx)("small",{className:"text-muted",children:"DATE OF DISPATCH: ".concat(t.dateOfDispatch)})]})})};d.defaultProps={delivery:{}};var o=function(e){var t=e.addDelivery,a=Object(s.useState)(""),i=Object(n.a)(a,2),l=i[0],r=i[1],d=Object(s.useState)(""),o=Object(n.a)(d,2),j=o[0],b=o[1],u=Object(s.useState)(""),m=Object(n.a)(u,2),O=m[0],h=m[1],p=Object(s.useState)(""),x=Object(n.a)(p,2),v=x[0],f=x[1],N=Object(s.useState)(""),y=Object(n.a)(N,2),g=y[0],D=y[1];return Object(c.jsxs)("form",{onSubmit:function(){t(l,j,O,v,g),r(""),b(""),h(""),f(""),D("")},children:[Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsx)("label",{htmlFor:"cityFrom",className:"form-label",children:"Deliver from..."}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"cityFrom",placeholder:"City",defaultValue:l,onChange:function(e){r(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsx)("label",{htmlFor:"cityTo",className:"form-label",children:"Deliver to..."}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"cityTo",placeholder:"City",value:j,onChange:function(e){b(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"mb-4",children:[Object(c.jsx)("label",{htmlFor:"dateOfDispatch",className:"form-label",children:"Choose date of dispatch"}),Object(c.jsx)("input",{type:"date",className:"form-control",id:"dateOfDispatch",min:"2022-08-01",max:"2022-12-31",onChange:function(e){f(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"input-group mb-4",children:[Object(c.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect01",children:"Parcel type"}),Object(c.jsxs)("select",{className:"form-select",id:"inputGroupSelect01",value:O,onChange:function(e){h(e.target.value)},required:!0,children:[Object(c.jsx)("option",{value:"",disabled:!0,children:"Choose..."}),Object(c.jsx)("option",{value:"Gadgets",children:"Gadgets"}),Object(c.jsx)("option",{value:"Drinks",children:"Drinks"}),Object(c.jsx)("option",{value:"Clothes",children:"Clothes"}),Object(c.jsx)("option",{value:"Medicines",children:"Medicines"}),Object(c.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(c.jsxs)("div",{className:"input-group mb-4",children:[Object(c.jsx)("span",{className:"input-group-text",children:"Parcel description"}),Object(c.jsx)("textarea",{className:"form-control","aria-label":"With textarea",value:g,onChange:function(e){D(e.target.value)},required:!0})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-outline-success",style:{width:"100%"},children:"Apply"})]})};o.defaultProps={addDelivery:function(){}};var j=function(e){var t=e.addDelivery;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{type:"button",className:"btn btn-outline-success","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",style:{width:"80%"},children:"ADD NEW DELIVERY"}),Object(c.jsx)("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(c.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"New delivery"}),Object(c.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsx)(o,{addDelivery:t})})]})})})]})};j.defaultProps={addDelivery:function(){}};a(15);var b=function(){return Object(c.jsxs)("div",{className:"loading-container",children:[Object(c.jsx)("div",{className:"spinner"}),Object(c.jsx)("div",{className:"spinner-center"}),Object(c.jsx)("div",{className:"loading-text",children:"Loading..."})]})},u=(a(16),function(){var e=function(e,t){var a=Object(s.useState)((function(){var a=localStorage.getItem(t);return a?JSON.parse(a):e})),c=Object(n.a)(a,2),i=c[0],l=c[1];return Object(s.useEffect)((function(){localStorage.setItem(t,JSON.stringify(i))}),[i]),[i,l]}([],"deliveries"),t=Object(n.a)(e,2),a=t[0],i=t[1];return Object(c.jsxs)("div",{className:"Container",children:[Object(c.jsx)("h2",{className:"Container__title",children:"My deliveries"}),Object(c.jsx)(j,{addDelivery:function(e,t,c,s,l){var n={id:a.length+1,cityFrom:e,cityTo:t,parcelType:c,dateOfDispatch:s,parcelDescription:l};i([n].concat(Object(r.a)(a)))}}),a?a.map((function(e){return Object(c.jsx)(d,{delivery:e},e.id)})):Object(c.jsx)(b,{})]})}),m=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{className:"App__title",children:"Delivery App"}),Object(c.jsx)(u,{})]})};l.a.render(Object(c.jsx)(m,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.cc6b9481.chunk.js.map