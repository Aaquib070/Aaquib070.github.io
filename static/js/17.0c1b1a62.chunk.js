(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[17],{456:function(e,a,t){},458:function(e,a,t){e.exports=t.p+"static/media/banner-25.a47593fc.jpg"},460:function(e,a,t){"use strict";t.d(a,"f",(function(){return m})),t.d(a,"g",(function(){return b})),t.d(a,"e",(function(){return g})),t.d(a,"d",(function(){return p})),t.d(a,"b",(function(){return v})),t.d(a,"c",(function(){return h})),t.d(a,"a",(function(){return f})),t.d(a,"h",(function(){return E}));var n=t(19),l=t.n(n),r=t(26),o=t(469),c=t(16),i=t.n(c),s=t(85),d=t(17);i.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var u=function(e){var a,t=Object(o.a)(null===e||void 0===e?void 0:e.data);try{for(t.s();!(a=t.n()).done;){var n=a.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(d.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(d.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(d.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(d.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(d.a)(null===n||void 0===n?void 0:n.desc))}}catch(l){t.e(l)}finally{t.f()}return e},m=function(e){return function(){var a=Object(r.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t({type:"GET_ALL_DATA_LOADING",data:!0}),a.next=4,i.a.get("/backendapi/nominee/list/".concat(n._id),{params:e,headers:{Authorization:"Bearer ".concat(localStorage.getItem("authtoken"))}}).then((function(a){if(t({type:"GET_ALL_DATA_LOADING",data:!1}),console.log("err response response",a),null===a||void 0===a?void 0:a.data){var n,l=Object(o.a)(null===a||void 0===a?void 0:a.data);try{for(l.s();!(n=l.n()).done;){var r=n.value;r.nomineeId=(null===r||void 0===r?void 0:r.nomineeId)&&Object(d.a)(r.nomineeId,!0),r.name=(null===r||void 0===r?void 0:r.name)&&Object(d.a)(r.name,!0),r.relation=(null===r||void 0===r?void 0:r.relation)&&Object(d.a)(r.relation,!0),r.email=(null===r||void 0===r?void 0:r.email)&&Object(d.a)(r.email,!0),r.primaryContact=(null===r||void 0===r?void 0:r.primaryContact)&&Object(d.a)(r.primaryContact,!0),r.secondaryContact=(null===r||void 0===r?void 0:r.secondaryContact)&&Object(d.a)(r.secondaryContact,!0),r.address=(null===r||void 0===r?void 0:r.address)&&Object(d.a)(r.address,!0)}}catch(c){l.e(c)}finally{l.f()}t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}})).catch((function(e){console.log(e),t({type:"GET_ALL_DATA_LOADING",data:!1})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var a=Object(r.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t({type:"GET_SPEND_DATA_LOADING",data:!0}),a.next=4,i.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){var n;console.log("getSpendData"),t({type:"GET_SPEND_DATA_LOADING",data:!1}),t({type:"GET_DATA",data:null===(n=u(a))||void 0===n?void 0:n.data,totalPages:a.length,params:e})})).catch((function(e){console.log(e),t({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},g=function(e){return function(a){return a({type:"FILTER_SPEND_DATA",value:e})}},p=function(e){return function(a){return a({type:"FILTER_DATA",value:e})}},v=function(e){return function(a){console.log("DELETE DATA :"),i.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("authtoken"))}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},h=function(e){return function(a){console.log("DELETE DATA :"),i.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},f=function(e){var a={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/backendapi/nominee/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Added Successfully"),t(m())}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},E=function(e){var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t={_id:e._id,usage:e.usage?e.usage:"Unused",userId:a._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(r.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/backendapi/nominee/update",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Updated Successfully")}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}},461:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(405),o=(t(108),t(464)),c=t.n(o),i=t(465),s=t.n(i),d=t(466),u=t.n(d),m=t(467),b=t.n(m),g=t(458),p=t.n(g),v=(t(110),t(472)),h=t.n(v),f={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}};a.a=function(){return l.a.createElement(r.a,{lg:"4",md:"6",sm:"12"},l.a.createElement("div",{className:"swipermobile"},l.a.createElement(h.a,f,l.a.createElement("div",{style:{backgroundImage:"url(".concat(c.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(s.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(u.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(b.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(p.a,")"),backgroundSize:"contain"}}))))}},464:function(e,a,t){e.exports=t.p+"static/media/banner-31.d54fc4be.jpg"},465:function(e,a,t){e.exports=t.p+"static/media/banner-22.702fed4d.jpg"},466:function(e,a,t){e.exports=t.p+"static/media/banner-23.b74d240c.jpg"},467:function(e,a,t){e.exports=t.p+"static/media/banner-24.d3fb51a8.jpg"},470:function(e,a,t){"use strict";var n=t(7),l=t(0),r=t.n(l),o=t(148),c=t(149),i=t(246),s=t(84),d=t(414),u=t(109),m=t.n(u),b=t(8),g=t.n(b),p=t(18),v=t(85),h=t(150);a.a=function(e){var a=Object(l.useState)("Collegue"),t=Object(n.a)(a,2),u=t[0],b=t[1],f=Object(l.useState)("Collegue"),E=Object(n.a)(f,2),O=E[0],j=E[1],y=Object(l.useState)(""),N=Object(n.a)(y,2),S=N[0],k=N[1],A=Object(l.useState)(""),D=Object(n.a)(A,2),C=D[0],I=D[1],w=Object(l.useState)(""),x=Object(n.a)(w,2),_=x[0],T=x[1],L=Object(l.useState)(""),z=Object(n.a)(L,2),R=z[0],U=z[1],B=Object(l.useState)(""),M=Object(n.a)(B,2),F=M[0],G=M[1],P=Object(l.useState)(""),V=Object(n.a)(P,2),J=V[0],H=V[1],Z=Object(l.useState)(""),K=Object(n.a)(Z,2),W=K[0],$=K[1],q=Object(l.useState)(!1),Q=Object(n.a)(q,2),X=Q[0],Y=Q[1],ee=Object(l.useState)(""),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],le=Object(l.useState)(""),re=Object(n.a)(le,2),oe=re[0],ce=re[1],ie=Object(l.useState)(""),se=Object(n.a)(ie,2),de=se[0],ue=se[1],me=Object(l.useState)(""),be=Object(n.a)(me,2),ge=be[0],pe=be[1],ve=Object(l.useState)(""),he=Object(n.a)(ve,2),fe=he[0],Ee=he[1],Oe=Object(l.useState)(""),je=Object(n.a)(Oe,2),ye=je[0],Ne=je[1],Se=Object(l.useState)(""),ke=Object(n.a)(Se,2),Ae=ke[0],De=ke[1];Object(l.useEffect)((function(){if(e.data){var a=e.data,t=a.id,n=a.name,l=a.relation,r=a.address,o=a.email,c=a.primaryContact,i=a.secondaryContact;Be(),H(t),$(n),b(l),"Collegue"!==l&&"Cousin"!==l&&"Daughter"!==l&&"Daughter-in-law"!==l&&"Friend"!==l&&"Husband"!==l&&"Son"!==l&&"Son-in-law"!==l&&"Wife"!==l&&(b("others"),j(l)),I(r),k(o),T(c),U(i)}else(null===e.data||X)&&(Ue(),Be());Y(!1)}),[e.data]);var Ce=function(){return De("Enter Valid Name")},Ie=function(){return ue("Enter Valid Email")},we=function(){return pe("Enter Valid Address")},xe=function(){return Ee("Enter Valid Primary No.")},_e=function(){return ce("Enter Valid Relation")},Te=function(){return ne("Enter Valid Relation")},Le=function(e){var a=e.target.name,t=e.target.value;switch(a){case"name":$(t),(null===t||void 0===t?void 0:t.length)&&t.trim()&&De("");break;case"email":k(t);var n=t.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);t&&n&&t.trim()&&ue("");break;case"address":I(t.replace(/[\n\r]/g,", ")),t&&t.trim()&&pe("");break;case"phone":T(t),(null===t||void 0===t?void 0:t.length)&&10===t.length&&t.trim()&&Ee("");break;case"phoneC":U(t),10===t.length&&t.trim()&&Ne(""),!(null===t||void 0===t?void 0:t.length)&&Ne("");break;case"relation":b(t),"others"!==t&&ne(""),(null===t||void 0===t?void 0:t.length)&&t.trim()&&ce("");break;case"relation1":j(t),(null===t||void 0===t?void 0:t.length)&&t.trim()&&ne("")}},ze=function(e){var a=e.target.name,t=e.target.value;switch(a){case"name":(null===t||void 0===t?void 0:t.length)&&t.trim()?De(""):Ce();break;case"email":var n=t.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);t&&n&&t.trim()?ue(""):Ie();break;case"address":I(t.replace(/[\n\r]/g,", ")),t&&t.trim()?pe(""):we();break;case"phone":(null===t||void 0===t?void 0:t.length)&&10===t.length&&t.trim()?Ee(""):xe();break;case"phoneC":10===t.length&&t.trim()?Ne(""):Ne("Enter Valid Secondary No."),!(null===t||void 0===t?void 0:t.length)&&Ne("");break;case"relation":(null===t||void 0===t?void 0:t.length)&&t.trim()?ce(""):_e();break;case"relation1":(null===t||void 0===t?void 0:t.length)&&t.trim()?ne(""):Te()}},Re=function(){if(!(null===W||void 0===W?void 0:W.length)&&Ce(),!(null===S||void 0===S?void 0:S.length)&&Ie(),!(null===C||void 0===C?void 0:C.length)&&we(),!(null===_||void 0===_?void 0:_.length)&&xe(),!(null===R||void 0===R?void 0:R.length)&&xe(),!(null===u||void 0===u?void 0:u.length)&&_e(),"others"===u&&!(null===O||void 0===O?void 0:O.length)&&Te(),"others"!==u&&ne(""),Ae||!(null===W||void 0===W?void 0:W.length)||oe||!(null===u||void 0===u?void 0:u.length)||te||"others"===u&&!(null===O||void 0===O?void 0:O.length)||de||!(null===S||void 0===S?void 0:S.length)||ge||!(null===C||void 0===C?void 0:C.length)||fe||!(null===_||void 0===_?void 0:_.length)||ye)v.b.error("Kindly Fill Mandatory fields");else if(e.isLoading)null!==e.data?v.b.warning("Updating still in process"):v.b.warning("Adding nominee in process");else{var a={relation:null===u||void 0===u?void 0:u.trim(),relation1:null===O||void 0===O?void 0:O.trim(),email:null===S||void 0===S?void 0:S.trim(),address:null===C||void 0===C?void 0:C.trim(),contact1:null===_||void 0===_?void 0:_.trim(),contact2:null===R||void 0===R?void 0:R.trim(),id:null===J||void 0===J?void 0:J.trim(),name:null===W||void 0===W?void 0:W.trim()};null!==e.data?(a._id=e.data._id,a.usage=e.data.usage,e.updateData(a)):(Y(!0),e.addData(a),Ue(),Be())}},Ue=function(){$(""),b("Collegue"),j(""),k(""),I(""),T(""),U("")},Be=function(){De(""),pe(""),Ee(""),Ne(""),ue(""),ne("")},Me=e.show,Fe=e.handleSidebar,Ge=e.data;return r.a.createElement("div",{className:g()("data-list-sidebar",{show:Me})},r.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},r.a.createElement("h4",{style:{color:"var(--warning)"}},null!==Ge?"UPDATE NOMINEE":"ADD NEW NOMINEE"),r.a.createElement(d.a,{size:20,onClick:function(){Fe(!1,!0),Ue(),Be()}})),r.a.createElement(m.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},r.a.createElement(o.a,{className:"form-label-group mb-0"},r.a.createElement(c.a,{className:"input-label",type:"text",name:"name",value:W,placeholder:"Nominee Name*",onChange:Le,onBlur:ze,id:"data-name",style:{borderColor:Ae?"red":""}}),r.a.createElement(i.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-name"},"Name*")),Ae&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},Ae),r.a.createElement(o.a,{className:"mt-2 mb-0"},r.a.createElement(c.a,{type:"select",id:"data-category",name:"relation",value:u,onChange:Le,onBlur:ze},r.a.createElement("option",null,"Collegue"),r.a.createElement("option",null,"Cousin"),r.a.createElement("option",null,"Daughter"),r.a.createElement("option",null,"Daughter-in-law"),r.a.createElement("option",null,"Friend"),r.a.createElement("option",null,"Husband"),r.a.createElement("option",null,"Son"),r.a.createElement("option",null,"Son-in-law"),r.a.createElement("option",null,"Wife"),r.a.createElement("option",null,"others")),r.a.createElement(i.a,{className:"dark"===p.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation*")),"others"===u&&r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{type:"text",name:"relation1",value:O,placeholder:"Relation Name*",onChange:Le,onBlur:ze,id:"data-Relation",style:{borderColor:te?"red":""}})),te&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},te),r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{className:"input-label",type:"email",name:"email",value:S,placeholder:"Enter nominee email*",onChange:Le,onBlur:ze,id:"data-email",style:{borderColor:de?"red":""}}),r.a.createElement(i.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-email"},"Nominee Email*")),de&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},de),r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{className:"input-label",type:"type",maxLength:10,value:_,name:"phone",onChange:Le,onBlur:ze,onKeyPress:function(e){return Object(h.a)(e)},id:"data-price1",placeholder:"Enter primary contact No*",style:{borderColor:fe?"red":""}}),r.a.createElement(i.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-price1"},"Primary Contact")),fe&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},fe),r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{className:"input-label",type:"text",maxLength:10,value:R,name:"phoneC",onChange:Le,onBlur:ze,onKeyPress:function(e){return Object(h.a)(e)},id:"data-price",placeholder:"Enter secondry contact No",style:{borderColor:ye?"red":""}}),r.a.createElement(i.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact")),ye&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ye),r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{className:"input-label ",style:{height:"115px",borderColor:ge?"red":""},type:"textarea",value:C,name:"address",placeholder:"Enter Address*",onChange:Le,onBlur:ze,id:"data-Address"}),r.a.createElement(i.a,{className:"dark"===p.a.theme?"dark-label":"light-label",for:"data-Address"},"Address *")),ge&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ge),e.thumbView&&F.length<=0?r.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",r.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(e){return G(URL.createObjectURL(e.target.files[0]))}})):null),r.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},r.a.createElement(s.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Ue(),Be()}},"Reset"),r.a.createElement(s.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return Re()}},null!==Ge?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))}},611:function(e,a,t){"use strict";t.r(a);var n=t(19),l=t.n(n),r=t(26),o=t(7),c=t(0),i=t.n(c),s=t(463),d=t(501),u=t(497),m=t(441),b=t(442),g=t(405),p=t(461),v=t(601),h=t(602),f=t(502),E=t(503),O=t(16),j=t.n(O),y=t(468),N=t(8),S=t.n(N),k=t(85),A=(t(453),t(529)),D=t(475),C=t(494),I=function(e){var a,t=Object(c.useState)(""),n=Object(o.a)(t,2),l=n[0],r=n[1],p=Object(c.useState)("Closed"),O=Object(o.a)(p,2),N=O[0],I=O[1],w=Object(c.useState)(""),x=Object(o.a)(w,2),_=x[0],T=x[1],L=Object(c.useState)(""),z=Object(o.a)(L,2),R=z[0],U=z[1],B=(null===(a=e.collapseItems)||void 0===a?void 0:a.length)>0?e.collapseItems.map((function(a){return i.a.createElement("div",{className:"collapse-margin",key:a._id},i.a.createElement(y.a,{handleConfirm:function(){var e;e=R,j.a.delete("/backendapi/sender/deletebyid/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("authtoken"))}}).then((function(e){k.b.success("Message deleted successfully!")})).catch(),T(!1)},isOpen:_,closeModal:function(){return T(!1)}}),i.a.createElement(s.a,{onClick:function(){return e=a._id,void r(l!==e?e:"");var e},className:S()({"collapse-collapsed":"Closed"===N&&l===a._id,"collapse-shown":"Opened"===N&&l===a._id,closing:"Closing..."===N&&l===a._id,opening:"Opening..."===N&&l===a._id})},i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"lead collapse-title collapsed"},function(a){var t;return(null===(t=e.colorOption)||void 0===t?void 0:t[a])?e.colorOption[a]:a}(a.title)),i.a.createElement(C.a,{size:15,className:"collapse-icon"})),i.a.createElement(h.a,{isOpen:a._id===l,onEntering:function(){a._id===l&&I("Opening...")},onEntered:function(){a._id===l&&I("Opened")},onExiting:function(){a._id===l&&I("Closing...")},onExited:function(){a._id===l&&I("Closed")}},i.a.createElement(m.a,null,function(a){var t,n,l="";return(null===a||void 0===a||null===(t=a.nominees)||void 0===t?void 0:t.length)&&a.nominees.forEach((function(e,t){t===a.nominees.length-1?l+=null===e||void 0===e?void 0:e.name:l="".concat(l+(null===e||void 0===e?void 0:e.name),", ")})),i.a.createElement("div",null,i.a.createElement(b.a,null,i.a.createElement(g.a,{md:"5",sm:"12"},i.a.createElement(v.a,null,i.a.createElement("b",null," Type : ")," ",a.type,i.a.createElement("br",null),i.a.createElement("b",null," Description : ")," ",a.desc,i.a.createElement("br",null),i.a.createElement("b",null," Date : ")," ",null===a||void 0===a||null===(n=a.date)||void 0===n?void 0:n.split("T")[0],i.a.createElement("b",null," Time : ")," ",null===a||void 0===a?void 0:a.time)),i.a.createElement(g.a,{md:"5",sm:"12"},i.a.createElement(v.a,null,i.a.createElement("b",null,"Status :")," ",0===a.status?i.a.createElement("span",{style:{color:"orange"}},"Pending"):i.a.createElement("span",{style:{color:"green"}},"Delivered")," ",i.a.createElement("br",null),i.a.createElement("b",null,"Nominees :")," ",l)),i.a.createElement(g.a,{md:"2",sm:"12"},i.a.createElement(v.a,null,i.a.createElement("b",null," ",i.a.createElement(A.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){e.editItem(a)}})),i.a.createElement("br",null),i.a.createElement("b",null,i.a.createElement(D.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){U(a._id),T(!0)}}))))))}(a)))))})):i.a.createElement("span",{style:{fontSize:"12px",marginTop:"-10px"}},"No Messages Found");return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,null),i.a.createElement(s.a,{style:{paddingBottom:"1.5rem",paddingRight:"0.5rem",marginBottom:"portfolio"===e.page?"2.2rem":"1rem"}},i.a.createElement(d.a,null,i.a.createElement(u.a,null,e.heading)),i.a.createElement(m.a,{className:"card_body",style:{maxHeight:"portfolio"===e.page?"260px":" calc(100vh - 435px)"}},i.a.createElement(f.a,{activeTab:"1"},i.a.createElement(E.a,{tabId:"1"},i.a.createElement("div",{className:"vx-collapse"},B)),i.a.createElement(E.a,{className:"component-code",tabId:"2"},"hey")))))},w=t(15),x=t(62),_=t(504),T=t.n(_),L=t(509),z=(t(510),t(498));j.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var R=localStorage.getItem("authtoken"),U=function(){if(JSON.parse(localStorage.getItem("logInUserData"))){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var a=Object(r.a)(l.a.mark((function a(t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"LOAD_MSG"}),a.next=3,j.a.get("/backendapi/sender/getlist/".concat(e._id),{headers:{Authorization:"Bearer ".concat(R)}}).then((function(e){t({type:"GET_MSG",getmesssages:e.data})})).catch((function(e){console.log(e),t({type:"ERR_MSG"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},B=t(460),M=t(148),F=t(246),G=t(149),P=t(84),V=(t(456),t(247),t(470)),J=t(18),H=[{value:"Attachment",label:"Attachment",color:"#00B8D9",isFixed:!0},{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"Voice",label:"Voice",color:"#0052CC",isFixed:!0},{value:"Video",label:"Video",color:"#0052CC",isFixed:!0}],Z=new Date;Z.setHours(Z.getHours()+1);a.default=Object(w.b)((function(e){var a,t=e.dataList,n=e.sender,l=(null===n||void 0===n||null===(a=n.getmesssages)||void 0===a?void 0:a.length)?n.getmesssages.reverse():[];return{dataList:t,listLoading:t.totalRecordsLoading,messages:l,loadingmsg:n.loadingmsg}}),{scheduleNewMessage:function(e){return function(a){var t=JSON.parse(localStorage.getItem("logInUserData"))._id;e.user=t,j.a.post("/backendapi/sender/schedulenew",e,{headers:{Authorization:"Bearer ".concat(R)}}).then((function(t){console.log("response msg",t),a({type:"ADD_MSG",getmesssages:e}),a(U()),k.b.success("Message Scheduled Successfully!!")})).catch((function(e){return console.log(e)}))}},getData:B.f,editMessage:function(e){return function(a){j.a.post("/backendapi/sender/update",e,{headers:{Authorization:"Bearer ".concat(R)}}).then((function(t){console.log("response msg",t),a({type:"ADD_MSG",getmesssages:[e]}),a(U()),k.b.success("Message Updated Successfully!!")})).catch((function(e){return console.log(e)}))}},addData:B.a,getScheduledMessages:U})((function(e){var a,t=i.a.createRef(),n=i.a.createRef(),v=Object(c.useState)(Z.toISOString().substr(0,10)),h=Object(o.a)(v,2),f=h[0],E=h[1],O=Object(c.useState)(Z.toTimeString().split(" ")[0]),j=Object(o.a)(O,2),y=j[0],N=j[1],A=Object(c.useState)(""),D=Object(o.a)(A,2),C=D[0],w=D[1],_=Object(c.useState)(""),R=Object(o.a)(_,2),U=R[0],B=R[1],K=Object(c.useState)(!1),W=Object(o.a)(K,2),$=W[0],q=W[1],Q=Object(c.useState)(null),X=Object(o.a)(Q,2),Y=X[0],ee=X[1],ae=Object(c.useState)(""),te=Object(o.a)(ae,2),ne=te[0],le=te[1],re=Object(c.useState)(!1),oe=Object(o.a)(re,2),ce=oe[0],ie=oe[1],se=Object(c.useState)(""),de=Object(o.a)(se,2),ue=de[0],me=de[1],be=Object(c.useState)(!1),ge=Object(o.a)(be,2),pe=ge[0],ve=ge[1],he=Object(c.useState)(null),fe=Object(o.a)(he,2),Ee=fe[0],Oe=fe[1],je=Object(c.useState)(!1),ye=Object(o.a)(je,2),Ne=ye[0],Se=ye[1],ke=Object(c.useState)([]),Ae=Object(o.a)(ke,2),De=Ae[0],Ce=Ae[1],Ie=Object(c.useState)({url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}}),we=Object(o.a)(Ie,2),xe=we[0],_e=we[1],Te=Object(c.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Le=Object(o.a)(Te,2),ze=Le[0],Re=Le[1];Object(c.useEffect)((function(){e.getScheduledMessages(),!e.listLoading&&e.getData()}),[]);var Ue=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ie(e),a&&(Oe(null),ve(!0))};Object(c.useEffect)((function(){if(e.dataList.data.length){var a=ze;e.dataList.data.forEach((function(e){var t={value:e._id,label:"".concat(e.name," - ").concat(e.relation),color:"#00B8D9",isFixed:!1};a.push(t)})),Re(a)}}),[e.dataList.data]);var Be=function(){var a=Object(r.a)(l.a.mark((function a(t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return Se(!0),a.prev=1,a.next=4,e.addData(t);case 4:Se(!1),Ue(!1,!0),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),Se(!1),k.b.error("Add Nominee Failed! Please contact admin");case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return i.a.createElement("div",{className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},i.a.createElement(V.a,{show:ce,data:Ee,updateData:e.addData,addData:Be,isLoading:Ne,handleSidebar:Ue,thumbView:e.thumbView,getData:e.getData,dataParams:e.parsedFilter,addNew:pe}),i.a.createElement("div",{className:S()("data-list-overlay",{show:ce}),onClick:function(){return Ue(!1,!0)}}),i.a.createElement("h2",{className:"warning spacing nodisplay"},"Sender"),i.a.createElement(s.a,null,i.a.createElement(d.a,null,i.a.createElement(u.a,null,"Schedule a Message")),i.a.createElement(m.a,null,i.a.createElement(b.a,null,i.a.createElement(g.a,{lg:"8",md:"6",sm:"12"},i.a.createElement(b.a,{className:"match-height"},i.a.createElement(g.a,{md:"12"},i.a.createElement(b.a,null,i.a.createElement(g.a,{sm:""},i.a.createElement(M.a,{className:"form-label-group"},i.a.createElement(x.a,{className:"React",classNamePrefix:"select",name:"color",options:H,ref:n,isClearable:!0,isDisabled:$,placeholder:$?U:"Select Message Type...",onChange:function(e){var a=e?e.value:"";B(a)}}))),i.a.createElement(g.a,{sm:""},i.a.createElement(M.a,{className:"form-label-group"},i.a.createElement(x.a,{isMulti:!0,name:"nominee",options:ze,value:De.map((function(e){return{value:e.id,label:e.name}})),ref:t,className:"React",classNamePrefix:"select",placeholder:"Select Nominee",id:"nominee",onChange:function(e){var a=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?ie(!0):a.push({id:e.value,name:e.label})})),Ce(a)}}),i.a.createElement(F.a,null,"Select Nominee")))),i.a.createElement(b.a,null,i.a.createElement(g.a,null,i.a.createElement(M.a,{className:"form-label-group"},i.a.createElement(G.a,{type:"text",id:"title",className:"input-label",placeholder:"Title",value:ue,onChange:function(e){me(e.target.value)}}),i.a.createElement(F.a,{for:"title",className:"dark"===J.a.theme?"dark-label":"light-label"},"Title")))),i.a.createElement(b.a,null,i.a.createElement(g.a,{className:"d-flex "},i.a.createElement(M.a,{className:"form-label-group",style:{width:"50%"}},i.a.createElement(G.a,{type:"date",className:"input-label",name:"date",id:"exampleDate",placeholder:"Enter Date",maxLength:10,onChange:function(e){return E(e.target.value)},value:f}),i.a.createElement(F.a,{for:"exampleDate",className:"dark"===J.a.theme?"dark-label":"light-label"},"Date *")),i.a.createElement(M.a,{className:"form-label-group",style:{width:"49%",marginLeft:"1%"}},i.a.createElement(G.a,{type:"time",className:"input-label",name:"time",id:"exampleTime",placeholder:"Time",onChange:function(e){return N(e.target.value)},value:y}),i.a.createElement(F.a,{for:"exampleTime",className:"dark"===J.a.theme?"dark-label":"light-label"},"Time *")))),"Attachment"===U&&i.a.createElement(M.a,{className:"form-label-group"},i.a.createElement(G.a,{type:"file",name:"file",id:"exampleFile",className:"input-label form-control",placeholder:"File",onChange:function(e){return le(e.target.value)},value:ne}),i.a.createElement(F.a,{for:"exampleFile",className:"dark"===J.a.theme?"dark-label":"light-label"},"File *")),"Video"===U&&i.a.createElement("div",{className:"video-recorder"},i.a.createElement(T.a,{onRecordingComplete:function(e){console.log("videoBlob",e)}})),"Voice"===U&&i.a.createElement("div",{className:"voice-recorder"},i.a.createElement(L.a,{record:!0,title:"New recording",audioURL:xe.url,showUIAudio:!0,handleAudioStop:function(e){return function(e){_e(e)}(e)},handleAudioUpload:function(e){return a=e,void console.log(a);var a},handleReset:function(){_e({url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}})}})),i.a.createElement(M.a,{className:"form-label-group"},i.a.createElement(G.a,{type:"textarea",placeholder:"Description",className:"input-label",rows:"5",id:"description",value:C,onChange:function(e){w(e.target.value)}}),i.a.createElement(F.a,{for:"description",className:"dark"===J.a.theme?"dark-label":"light-label"},"Description")),i.a.createElement("div",{className:"d-flex justify-content-end",style:{textAlign:"right"}},i.a.createElement(P.a.Ripple,{outline:!0,className:"button-label",color:"secondary",onClick:function(){me(""),q(!1),B(""),w(""),E(""),N(""),Ce([])}},$?"Cancel":"Reset"),i.a.createElement(P.a.Ripple,{className:"button-label",color:"warning",onClick:function(){$?e.editMessage({_id:Y,desc:C,type:U,title:ue,date:f,time:y,nominees:De}):e.scheduleNewMessage({desc:C,type:U,title:ue,date:f,time:y,nominees:De}),me(""),B(""),w(""),E(""),N("")},disabled:!C.trim().length||!U.trim().length||!ue.trim().length||!f.trim().length||!y.trim().length||!De.length},$?"Update":"Add")))),i.a.createElement(b.a,null,i.a.createElement(k.a,null),i.a.createElement(g.a,null,console.log("props",e),e.loadingmsg&&null===e.messages?i.a.createElement(z.a,{color:"danger",size:"sm"}):i.a.createElement(I,{heading:"Messages History",collapseItems:null===e||void 0===e?void 0:e.messages,colorOption:null===e||void 0===e||null===(a=e.messages)||void 0===a?void 0:a.colorOption,editItem:function(e){console.log("editItem",e);var a=e.date,t=e.desc,n=e.nominees,l=e.time,r=e.title,o=e.type,c=e._id;q(!0),ee(c),E(a.split("T")[0]),w(t),Ce(n),N(l),me(r),B(o)}})))),i.a.createElement(p.a,null)))))}))}}]);