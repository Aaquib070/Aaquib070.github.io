(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[4],{508:function(e,t,a){},516:function(e,t,a){"use strict";a.d(t,"f",(function(){return b})),a.d(t,"g",(function(){return v})),a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return h})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return f})),a.d(t,"a",(function(){return E})),a.d(t,"h",(function(){return y}));var n=a(31),r=a.n(n),l=a(50),o=a(96);function i(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(o.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,l=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw r}}}}var c=a(24),d=a.n(c),u=a(501),s=a(41);d.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var m=function(e){var t,a=i(null===e||void 0===e?void 0:e.data);try{for(a.s();!(t=a.n()).done;){var n=t.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(s.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(s.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(s.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(s.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(s.a)(null===n||void 0===n?void 0:n.desc))}}catch(r){a.e(r)}finally{a.f()}return e},b=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_ALL_DATA_LOADING",data:!0}),t.next=4,d.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"GET_ALL_DATA_LOADING",data:!1});var n,r=i(null===t||void 0===t?void 0:t.data);try{for(r.s();!(n=r.n()).done;){var l=n.value;l.nomineeId=(null===l||void 0===l?void 0:l.nomineeId)&&Object(s.a)(l.nomineeId,!0),l.name=(null===l||void 0===l?void 0:l.name)&&Object(s.a)(l.name,!0),l.relation=(null===l||void 0===l?void 0:l.relation)&&Object(s.a)(l.relation,!0),l.email=(null===l||void 0===l?void 0:l.email)&&Object(s.a)(l.email,!0),l.primaryContact=(null===l||void 0===l?void 0:l.primaryContact)&&Object(s.a)(l.primaryContact,!0),l.secondaryContact=(null===l||void 0===l?void 0:l.secondaryContact)&&Object(s.a)(l.secondaryContact,!0),l.address=(null===l||void 0===l?void 0:l.address)&&Object(s.a)(l.address,!0)}}catch(o){r.e(o)}finally{r.f()}a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_SPEND_DATA_LOADING",data:!0}),t.next=4,d.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){var n;console.log("getSpendData"),a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===(n=m(t))||void 0===n?void 0:n.data,totalPages:t.length,params:e})})).catch((function(e){console.log(e),a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(t){return t({type:"FILTER_SPEND_DATA",value:e})}},h=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},g=function(e){return function(t){console.log("DELETE DATA :"),d.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},f=function(e){return function(t){console.log("DELETE DATA :"),d.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},E=function(e){var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(s.b)(e.name,!0),relation:Object(s.b)(e.relation,!0),email:Object(s.b)(e.email,!0),primaryContact:Object(s.b)(e.contact1,!0),secondaryContact:Object(s.b)(e.contact2,!0),address:Object(s.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(s.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){u.b.success("Nominee Added Successfully"),a(b())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a={_id:e._id,usage:e.usage?e.usage:"Unused",userId:t._id,name:Object(s.b)(e.name,!0),relation:Object(s.b)(e.relation,!0),email:Object(s.b)(e.email,!0),primaryContact:Object(s.b)(e.contact1,!0),secondaryContact:Object(s.b)(e.contact2,!0),address:Object(s.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(s.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/backendapi/nominee/update",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){u.b.success("Nominee Updated Successfully")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},520:function(e,t,a){"use strict";var n=a(8),r=a(0),l=a.n(r),o=a(450),i=a(447),c=a(451),d=a(254),u=a(421),s=a(117),m=a.n(s),b=a(7),v=a.n(b),p=a(17),h=a(501),g=a(162);t.a=function(e){var t=Object(r.useState)("Collegue"),a=Object(n.a)(t,2),s=a[0],b=a[1],f=Object(r.useState)("Collegue"),E=Object(n.a)(f,2),y=E[0],O=E[1],j=Object(r.useState)(""),S=Object(n.a)(j,2),A=S[0],N=S[1],k=Object(r.useState)(""),D=Object(n.a)(k,2),I=D[0],C=D[1],_=Object(r.useState)(""),w=Object(n.a)(_,2),T=w[0],x=w[1],L=Object(r.useState)(""),z=Object(n.a)(L,2),U=z[0],B=z[1],R=Object(r.useState)(""),G=Object(n.a)(R,2),P=G[0],V=G[1],F=Object(r.useState)(""),J=Object(n.a)(F,2),Z=J[0],K=J[1],M=Object(r.useState)(""),W=Object(n.a)(M,2),H=W[0],$=W[1],q=Object(r.useState)(!1),Q=Object(n.a)(q,2),X=Q[0],Y=Q[1],ee=Object(r.useState)(""),te=Object(n.a)(ee,2),ae=te[0],ne=te[1],re=Object(r.useState)(""),le=Object(n.a)(re,2),oe=le[0],ie=le[1],ce=Object(r.useState)(""),de=Object(n.a)(ce,2),ue=de[0],se=de[1],me=Object(r.useState)(""),be=Object(n.a)(me,2),ve=be[0],pe=be[1],he=Object(r.useState)(""),ge=Object(n.a)(he,2),fe=ge[0],Ee=ge[1],ye=Object(r.useState)(""),Oe=Object(n.a)(ye,2),je=Oe[0],Se=Oe[1],Ae=Object(r.useState)(""),Ne=Object(n.a)(Ae,2),ke=Ne[0],De=Ne[1];Object(r.useEffect)((function(){if(e.data){var t=e.data,a=t.id,n=t.name,r=t.relation,l=t.address,o=t.email,i=t.primaryContact,c=t.secondaryContact;Re(),K(a),$(n),b(r),"Collegue"!==r&&"Cousin"!==r&&"Daughter"!==r&&"Daughter-in-law"!==r&&"Friend"!==r&&"Husband"!==r&&"Son"!==r&&"Son-in-law"!==r&&"Wife"!==r&&(b("others"),O(r)),C(l),N(o),x(i),B(c)}else(null===e.data||X)&&(Be(),Re());Y(!1)}),[e.data]);var Ie=function(){return De("Enter Valid Name")},Ce=function(){return se("Enter Valid Email")},_e=function(){return pe("Enter Valid Address")},we=function(){return Ee("Enter Valid Primary No.")},Te=function(){return ie("Enter Valid Relation")},xe=function(){return ne("Enter Valid Relation")},Le=function(e){var t=e.target.name,a=e.target.value;switch(t){case"name":$(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&De("");break;case"email":N(a);var n=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&n&&a.trim()&&se("");break;case"address":C(a.replace(/[\n\r]/g,", ")),a&&a.trim()&&pe("");break;case"phone":x(a),(null===a||void 0===a?void 0:a.length)&&10===a.length&&a.trim()&&Ee("");break;case"phoneC":B(a),10===a.length&&a.trim()&&Se(""),!(null===a||void 0===a?void 0:a.length)&&Se("");break;case"relation":b(a),"others"!==a&&ne(""),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ie("");break;case"relation1":O(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ne("")}},ze=function(e){var t=e.target.name,a=e.target.value;switch(t){case"name":(null===a||void 0===a?void 0:a.length)&&a.trim()?De(""):Ie();break;case"email":var n=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&n&&a.trim()?se(""):Ce();break;case"address":C(a.replace(/[\n\r]/g,", ")),a&&a.trim()?pe(""):_e();break;case"phone":(null===a||void 0===a?void 0:a.length)&&10===a.length&&a.trim()?Ee(""):we();break;case"phoneC":10===a.length&&a.trim()?Se(""):Se("Enter Valid Secondary No."),!(null===a||void 0===a?void 0:a.length)&&Se("");break;case"relation":(null===a||void 0===a?void 0:a.length)&&a.trim()?ie(""):Te();break;case"relation1":(null===a||void 0===a?void 0:a.length)&&a.trim()?ne(""):xe()}},Ue=function(){if(!(null===H||void 0===H?void 0:H.length)&&Ie(),!(null===A||void 0===A?void 0:A.length)&&Ce(),!(null===I||void 0===I?void 0:I.length)&&_e(),!(null===T||void 0===T?void 0:T.length)&&we(),!(null===U||void 0===U?void 0:U.length)&&we(),!(null===s||void 0===s?void 0:s.length)&&Te(),"others"===s&&!(null===y||void 0===y?void 0:y.length)&&xe(),"others"!==s&&ne(""),ke||!(null===H||void 0===H?void 0:H.length)||oe||!(null===s||void 0===s?void 0:s.length)||ae||"others"===s&&!(null===y||void 0===y?void 0:y.length)||ue||!(null===A||void 0===A?void 0:A.length)||ve||!(null===I||void 0===I?void 0:I.length)||fe||!(null===T||void 0===T?void 0:T.length)||je)h.b.error("Kindly Fill Mandatory fields");else if(e.isLoading)null!==e.data?h.b.warning("Updating still in process"):h.b.warning("Adding nominee in process");else{var t={relation:null===s||void 0===s?void 0:s.trim(),relation1:null===y||void 0===y?void 0:y.trim(),email:null===A||void 0===A?void 0:A.trim(),address:null===I||void 0===I?void 0:I.trim(),contact1:null===T||void 0===T?void 0:T.trim(),contact2:null===U||void 0===U?void 0:U.trim(),id:null===Z||void 0===Z?void 0:Z.trim(),name:null===H||void 0===H?void 0:H.trim()};null!==e.data?(t._id=e.data._id,t.usage=e.data.usage,e.updateData(t)):(Y(!0),e.addData(t),Be(),Re())}},Be=function(){$(""),b("Collegue"),O(""),N(""),C(""),x(""),B("")},Re=function(){De(""),pe(""),Ee(""),Se(""),se(""),ne("")},Ge=e.show,Pe=e.handleSidebar,Ve=e.data;return l.a.createElement("div",{className:v()("data-list-sidebar",{show:Ge})},l.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},l.a.createElement("h4",{style:{color:"var(--warning)"}},null!==Ve?"UPDATE NOMINEE":"ADD NEW NOMINEE"),l.a.createElement(u.a,{size:20,onClick:function(){Pe(!1,!0),Be(),Re()}})),l.a.createElement(m.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},l.a.createElement(o.a,{className:"form-label-group mb-0"},l.a.createElement(i.a,{className:"input-label",type:"text",name:"name",value:H,placeholder:"Nominee Name*",onChange:Le,onBlur:ze,id:"data-name",style:{borderColor:ke?"red":""}}),l.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-name"},"Name*")),ke&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ke),l.a.createElement(o.a,{className:"mt-2 mb-0"},l.a.createElement(i.a,{type:"select",id:"data-category",name:"relation",value:s,onChange:Le,onBlur:ze},l.a.createElement("option",null,"Collegue"),l.a.createElement("option",null,"Cousin"),l.a.createElement("option",null,"Daughter"),l.a.createElement("option",null,"Daughter-in-law"),l.a.createElement("option",null,"Friend"),l.a.createElement("option",null,"Husband"),l.a.createElement("option",null,"Son"),l.a.createElement("option",null,"Son-in-law"),l.a.createElement("option",null,"Wife"),l.a.createElement("option",null,"others")),l.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation*")),"others"===s&&l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{type:"text",name:"relation1",value:y,placeholder:"Relation Name*",onChange:Le,onBlur:ze,id:"data-Relation",style:{borderColor:ae?"red":""}})),ae&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ae),l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{className:"input-label",type:"email",name:"email",value:A,placeholder:"Enter nominee email*",onChange:Le,onBlur:ze,id:"data-email",style:{borderColor:ue?"red":""}}),l.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-email"},"Nominee Email*")),ue&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ue),l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{className:"input-label",type:"type",maxLength:10,value:T,name:"phone",onChange:Le,onBlur:ze,onKeyPress:function(e){return Object(g.a)(e)},id:"data-price1",placeholder:"Enter primary contact No*",style:{borderColor:fe?"red":""}}),l.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-price1"},"Primary Contact")),fe&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},fe),l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{className:"input-label",type:"text",maxLength:10,value:U,name:"phoneC",onChange:Le,onBlur:ze,onKeyPress:function(e){return Object(g.a)(e)},id:"data-price",placeholder:"Enter secondry contact No",style:{borderColor:je?"red":""}}),l.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact")),je&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},je),l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{className:"input-label ",style:{height:"115px",borderColor:ve?"red":""},type:"textarea",value:I,name:"address",placeholder:"Enter Address*",onChange:Le,onBlur:ze,id:"data-Address"}),l.a.createElement(c.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-Address"},"Address *")),ve&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ve),e.thumbView&&P.length<=0?l.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",l.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(e){return V(URL.createObjectURL(e.target.files[0]))}})):null),l.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},l.a.createElement(d.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Be(),Re()}},"Reset"),l.a.createElement(d.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return Ue()}},null!==Ve?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))}}}]);