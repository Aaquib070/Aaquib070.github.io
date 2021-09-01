(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[4],{484:function(e,t,a){},488:function(e,t,a){"use strict";a.d(t,"f",(function(){return m})),a.d(t,"g",(function(){return b})),a.d(t,"e",(function(){return v})),a.d(t,"d",(function(){return p})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return g})),a.d(t,"h",(function(){return y}));var n=a(36),r=a.n(n),o=a(55),l=a(500),i=a(28),c=a.n(i),d=a(471),u=a(34);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var s=function(e){var t,a=Object(l.a)(null===e||void 0===e?void 0:e.data);try{for(a.s();!(t=a.n()).done;){var n=t.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(u.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(u.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(u.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(u.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(u.a)(null===n||void 0===n?void 0:n.desc))}}catch(r){a.e(r)}finally{a.f()}return e},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_ALL_DATA_LOADING",data:!0}),t.next=4,c.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"GET_ALL_DATA_LOADING",data:!1});var n,r=Object(l.a)(null===t||void 0===t?void 0:t.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.nomineeId=(null===o||void 0===o?void 0:o.nomineeId)&&Object(u.a)(o.nomineeId,!0),o.name=(null===o||void 0===o?void 0:o.name)&&Object(u.a)(o.name,!0),o.relation=(null===o||void 0===o?void 0:o.relation)&&Object(u.a)(o.relation,!0),o.email=(null===o||void 0===o?void 0:o.email)&&Object(u.a)(o.email,!0),o.primaryContact=(null===o||void 0===o?void 0:o.primaryContact)&&Object(u.a)(o.primaryContact,!0),o.secondaryContact=(null===o||void 0===o?void 0:o.secondaryContact)&&Object(u.a)(o.secondaryContact,!0),o.address=(null===o||void 0===o?void 0:o.address)&&Object(u.a)(o.address,!0)}}catch(i){r.e(i)}finally{r.f()}a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_SPEND_DATA_LOADING",data:!0}),t.next=4,c.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){var n;console.log("getSpendData"),a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===(n=s(t))||void 0===n?void 0:n.data,totalPages:t.length,params:e})})).catch((function(e){console.log(e),a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(t){return t({type:"FILTER_SPEND_DATA",value:e})}},p=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},f=function(e){return function(t){console.log("DELETE DATA :"),c.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},h=function(e){return function(t){console.log("DELETE DATA :"),c.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},g=function(e){var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(u.b)(e.name,!0),relation:Object(u.b)(e.relation,!0),email:Object(u.b)(e.email,!0),primaryContact:Object(u.b)(e.contact1,!0),secondaryContact:Object(u.b)(e.contact2,!0),address:Object(u.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(u.b)(e.relation1,!0)),function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){d.b.success("Nominee Added Successfully"),a(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a={_id:e._id,usage:e.usage?e.usage:"Unused",userId:t._id,name:Object(u.b)(e.name,!0),relation:Object(u.b)(e.relation,!0),email:Object(u.b)(e.email,!0),primaryContact:Object(u.b)(e.contact1,!0),secondaryContact:Object(u.b)(e.contact2,!0),address:Object(u.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(u.b)(e.relation1,!0)),function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/update",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){d.b.success("Nominee Updated Successfully"),t(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},500:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(85);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw o}}}}},501:function(e,t,a){"use strict";var n=a(7),r=a(0),o=a.n(r),l=a(420),i=a(421),c=a(422),d=a(230),u=a(393),s=a(104),m=a.n(s),b=a(5),v=a.n(b),p=a(15),f=a(471);t.a=function(e){var t=Object(r.useState)("Collegue"),a=Object(n.a)(t,2),s=a[0],b=a[1],h=Object(r.useState)("Collegue"),g=Object(n.a)(h,2),y=g[0],E=g[1],O=Object(r.useState)(""),j=Object(n.a)(O,2),S=j[0],A=j[1],N=Object(r.useState)(""),k=Object(n.a)(N,2),C=k[0],D=k[1],I=Object(r.useState)(""),w=Object(n.a)(I,2),_=w[0],T=w[1],x=Object(r.useState)(""),L=Object(n.a)(x,2),z=L[0],U=L[1],P=Object(r.useState)(""),B=Object(n.a)(P,2),R=B[0],G=B[1],V=Object(r.useState)(""),F=Object(n.a)(V,2),J=F[0],Z=F[1],M=Object(r.useState)(""),W=Object(n.a)(M,2),H=W[0],K=W[1],$=Object(r.useState)(!1),q=Object(n.a)($,2),Q=q[0],X=q[1],Y=Object(r.useState)(""),ee=Object(n.a)(Y,2),te=ee[0],ae=ee[1],ne=Object(r.useState)(""),re=Object(n.a)(ne,2),oe=re[0],le=re[1],ie=Object(r.useState)(""),ce=Object(n.a)(ie,2),de=ce[0],ue=ce[1],se=Object(r.useState)(""),me=Object(n.a)(se,2),be=me[0],ve=me[1],pe=Object(r.useState)(""),fe=Object(n.a)(pe,2),he=fe[0],ge=fe[1],ye=Object(r.useState)(""),Ee=Object(n.a)(ye,2),Oe=Ee[0],je=Ee[1],Se=Object(r.useState)(""),Ae=Object(n.a)(Se,2),Ne=Ae[0],ke=Ae[1];Object(r.useEffect)((function(){if(e.data){var t=e.data,a=t.id,n=t.name,r=t.relation,o=t.address,l=t.email,i=t.primaryContact,c=t.secondaryContact;Pe(),Z(a),K(n),b(r),"Collegue"!==r&&"Cousin"!==r&&"Daughter"!==r&&"Daughter-in-law"!==r&&"Friend"!==r&&"Husband"!==r&&"Son"!==r&&"Son-in-law"!==r&&"Wife"!==r&&(b("others"),E(r)),D(o),A(l),T(i),U(c)}else(null===e.data||Q)&&(Ue(),Pe());X(!1)}),[e.data]);var Ce=function(){return ke("Enter Valid Name")},De=function(){return ue("Enter Valid Email")},Ie=function(){return ve("Enter Valid Address")},we=function(){return ge("Enter Valid Primary No.")},_e=function(){return le("Enter Valid Relation")},Te=function(){return ae("Enter Valid Relation")},xe=function(e){var t=e.target.name,a=e.target.value;switch(t){case"name":K(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ke("");break;case"email":A(a);var n=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&n&&a.trim()&&ue("");break;case"address":D(a.replace(/[\n\r]/g,", ")),a&&a.trim()&&ve("");break;case"phone":T(a),(null===a||void 0===a?void 0:a.length)&&10===a.length&&a.trim()&&ge("");break;case"phoneC":U(a),10===a.length&&a.trim()&&je(""),!(null===a||void 0===a?void 0:a.length)&&je("");break;case"relation":b(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&le("");break;case"relation1":E(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ae("")}},Le=function(e){var t=e.target.name,a=e.target.value;switch(t){case"name":(null===a||void 0===a?void 0:a.length)&&a.trim()?ke(""):Ce();break;case"email":var n=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&n&&a.trim()?ue(""):De();break;case"address":D(a.replace(/[\n\r]/g,", ")),a&&a.trim()?ve(""):Ie();break;case"phone":(null===a||void 0===a?void 0:a.length)&&10===a.length&&a.trim()?ge(""):we();break;case"phoneC":10===a.length&&a.trim()?je(""):je("Enter Valid Secondary No."),!(null===a||void 0===a?void 0:a.length)&&je("");break;case"relation":(null===a||void 0===a?void 0:a.length)&&a.trim()?le(""):_e();break;case"relation1":(null===a||void 0===a?void 0:a.length)&&a.trim()?ae(""):Te()}},ze=function(){if(!(null===H||void 0===H?void 0:H.length)&&Ce(),!(null===S||void 0===S?void 0:S.length)&&De(),!(null===C||void 0===C?void 0:C.length)&&Ie(),!(null===_||void 0===_?void 0:_.length)&&we(),!(null===s||void 0===s?void 0:s.length)&&_e(),"others"===s&&!(null===y||void 0===y?void 0:y.length)&&Te(),Ne||!(null===H||void 0===H?void 0:H.length)||oe||!(null===s||void 0===s?void 0:s.length)||te||"others"===s&&!(null===y||void 0===y?void 0:y.length)||de||!(null===S||void 0===S?void 0:S.length)||be||!(null===C||void 0===C?void 0:C.length)||he||!(null===_||void 0===_?void 0:_.length))f.b.error("Kindly Fill Mandatory fields");else if(e.isLoading)null!==e.data?f.b.warning("Updating still in process"):f.b.warning("Adding nominee in process");else{var t={relation:null===s||void 0===s?void 0:s.trim(),relation1:null===y||void 0===y?void 0:y.trim(),email:null===S||void 0===S?void 0:S.trim(),address:null===C||void 0===C?void 0:C.trim(),contact1:null===_||void 0===_?void 0:_.trim(),contact2:null===z||void 0===z?void 0:z.trim(),id:null===J||void 0===J?void 0:J.trim(),name:null===H||void 0===H?void 0:H.trim()};null!==e.data?(t._id=e.data._id,t.usage=e.data.usage,e.updateData(t)):(X(!0),e.addData(t),Ue(),Pe())}},Ue=function(){K(""),b("Collegue"),E(""),A(""),D(""),T(""),U("")},Pe=function(){ke(""),ve(""),ge(""),je(""),ue(""),ae("")};function Be(e){var t=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which);t=String.fromCharCode(t);if(!/^[0-9]*$/.test(t))return e.preventDefault(),!1}var Re=e.show,Ge=e.handleSidebar,Ve=e.data;return o.a.createElement("div",{className:v()("data-list-sidebar",{show:Re})},o.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},o.a.createElement("h4",{style:{color:"var(--warning)"}},null!==Ve?"UPDATE NOMINEE":"ADD NEW NOMINEE"),o.a.createElement(u.a,{size:20,onClick:function(){Ge(!1,!0),Ue(),Pe()}})),o.a.createElement(m.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},o.a.createElement(l.a,{className:"form-label-group mb-0"},o.a.createElement(i.a,{className:"input-label",type:"text",name:"name",value:H,placeholder:"Nominee Name*",onChange:xe,onBlur:Le,id:"data-name",style:{borderColor:Ne?"red":""}}),o.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-name"},"Name*")),Ne&&o.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},Ne),o.a.createElement(l.a,{className:"mt-2 mb-0"},o.a.createElement(i.a,{type:"select",id:"data-category",name:"relation",value:s,onChange:xe,onBlur:Le},o.a.createElement("option",null,"Collegue"),o.a.createElement("option",null,"Cousin"),o.a.createElement("option",null,"Daughter"),o.a.createElement("option",null,"Daughter-in-law"),o.a.createElement("option",null,"Friend"),o.a.createElement("option",null,"Husband"),o.a.createElement("option",null,"Son"),o.a.createElement("option",null,"Son-in-law"),o.a.createElement("option",null,"Wife"),o.a.createElement("option",null,"others")),o.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation*")),"others"===s&&o.a.createElement(l.a,{className:"form-label-group mt-2 mb-0"},o.a.createElement(i.a,{type:"text",name:"relation1",value:y,placeholder:"Relation Name*",onChange:xe,onBlur:Le,id:"data-Relation",style:{borderColor:te?"red":""}})),te&&o.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},te),o.a.createElement(l.a,{className:"form-label-group mt-2 mb-0"},o.a.createElement(i.a,{className:"input-label",type:"email",name:"email",value:S,placeholder:"Enter nominee email*",onChange:xe,onBlur:Le,id:"data-email",style:{borderColor:de?"red":""}}),o.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-email"},"Nominee Email*")),de&&o.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},de),o.a.createElement(l.a,{className:"form-label-group mt-2 mb-0"},o.a.createElement(i.a,{className:"input-label",type:"type",maxLength:10,value:_,name:"phone",onChange:xe,onBlur:Le,onKeyPress:function(e){return Be(e)},id:"data-price1",placeholder:"Enter primary contact No*",style:{borderColor:he?"red":""}}),o.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-price1"},"Primary Contact")),he&&o.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},he),o.a.createElement(l.a,{className:"form-label-group mt-2 mb-0"},o.a.createElement(i.a,{className:"input-label",type:"text",maxLength:10,value:z,name:"phoneC",onChange:xe,onBlur:Le,onKeyPress:function(e){return Be(e)},id:"data-price",placeholder:"Enter secondry contact No",style:{borderColor:Oe?"red":""}}),o.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact")),Oe&&o.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},Oe),o.a.createElement(l.a,{className:"form-label-group mt-2 mb-0"},o.a.createElement(i.a,{className:"input-label ",style:{height:"115px",borderColor:be?"red":""},type:"textarea",value:C,name:"address",placeholder:"Enter Address*",onChange:xe,onBlur:Le,id:"data-Address"}),o.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-Address"},"Address *")),be&&o.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},be),e.thumbView&&R.length<=0?o.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",o.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(e){return G(URL.createObjectURL(e.target.files[0]))}})):null),o.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},o.a.createElement(d.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Ue(),Pe()}},"Reset"),o.a.createElement(d.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return ze()}},null!==Ve?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))}},517:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),l=a.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,l=void 0===o?24:o,d=c(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),r.a.createElement("polyline",{points:"3 6 5 6 21 6"}),r.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));d.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},d.displayName="Trash",t.a=d}}]);
//# sourceMappingURL=4.3a311076.chunk.js.map