(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[14,4],{504:function(e,a,t){e.exports=t.p+"static/media/banner-25.a47593fc.jpg"},505:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(448),o=(t(159),t(507)),c=t.n(o),i=t(508),s=t.n(i),u=t(509),d=t.n(u),m=t(510),p=t.n(m),b=t(504),g=t.n(b),f=(t(160),t(515)),h=t.n(f),v={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}};a.a=function(){return l.a.createElement(r.a,{lg:"4",md:"6",sm:"12"},l.a.createElement("div",{className:"swipermobile"},l.a.createElement(h.a,v,l.a.createElement("div",{style:{backgroundImage:"url(".concat(c.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(s.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(d.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(p.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(g.a,")"),backgroundSize:"contain"}}))))}},506:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),l=t.n(n).a.createContext({})},507:function(e,a,t){e.exports=t.p+"static/media/banner-31.d54fc4be.jpg"},508:function(e,a,t){e.exports=t.p+"static/media/banner-22.702fed4d.jpg"},509:function(e,a,t){e.exports=t.p+"static/media/banner-23.b74d240c.jpg"},510:function(e,a,t){e.exports=t.p+"static/media/banner-24.d3fb51a8.jpg"},514:function(e,a,t){},519:function(e,a,t){"use strict";t.d(a,"f",(function(){return p})),t.d(a,"g",(function(){return b})),t.d(a,"e",(function(){return g})),t.d(a,"d",(function(){return f})),t.d(a,"b",(function(){return h})),t.d(a,"c",(function(){return v})),t.d(a,"a",(function(){return E})),t.d(a,"h",(function(){return O}));var n=t(31),l=t.n(n),r=t(51),o=t(96);function c(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(o.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l,r=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){c=!0,l=e},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw l}}}}var i=t(30),s=t.n(i),u=t(503),d=t(42);s.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var m=function(e){var a,t=c(null===e||void 0===e?void 0:e.data);try{for(t.s();!(a=t.n()).done;){var n=a.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(d.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(d.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(d.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(d.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(d.a)(null===n||void 0===n?void 0:n.desc))}}catch(l){t.e(l)}finally{t.f()}return e},p=function(e){return function(){var a=Object(r.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t({type:"GET_ALL_DATA_LOADING",data:!0}),a.next=4,s.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"GET_ALL_DATA_LOADING",data:!1});var n,l=c(null===a||void 0===a?void 0:a.data);try{for(l.s();!(n=l.n()).done;){var r=n.value;r.nomineeId=(null===r||void 0===r?void 0:r.nomineeId)&&Object(d.a)(r.nomineeId,!0),r.name=(null===r||void 0===r?void 0:r.name)&&Object(d.a)(r.name,!0),r.relation=(null===r||void 0===r?void 0:r.relation)&&Object(d.a)(r.relation,!0),r.email=(null===r||void 0===r?void 0:r.email)&&Object(d.a)(r.email,!0),r.primaryContact=(null===r||void 0===r?void 0:r.primaryContact)&&Object(d.a)(r.primaryContact,!0),r.secondaryContact=(null===r||void 0===r?void 0:r.secondaryContact)&&Object(d.a)(r.secondaryContact,!0),r.address=(null===r||void 0===r?void 0:r.address)&&Object(d.a)(r.address,!0)}}catch(o){l.e(o)}finally{l.f()}t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var a=Object(r.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t({type:"GET_SPEND_DATA_LOADING",data:!0}),a.next=4,s.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){var n;console.log("getSpendData"),t({type:"GET_SPEND_DATA_LOADING",data:!1}),t({type:"GET_DATA",data:null===(n=m(a))||void 0===n?void 0:n.data,totalPages:a.length,params:e})})).catch((function(e){console.log(e),t({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},g=function(e){return function(a){return a({type:"FILTER_SPEND_DATA",value:e})}},f=function(e){return function(a){return a({type:"FILTER_DATA",value:e})}},h=function(e){return function(a){console.log("DELETE DATA :"),s.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},v=function(e){return function(a){console.log("DELETE DATA :"),s.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},E=function(e){var a={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/backendapi/nominee/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){u.b.success("Nominee Added Successfully"),t(p())}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},O=function(e){var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t={_id:e._id,usage:e.usage?e.usage:"Unused",userId:a._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(r.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/backendapi/nominee/update",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){u.b.success("Nominee Updated Successfully")}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}},520:function(e,a,t){"use strict";var n=t(4),l=t(9),r=t(0),o=t.n(r),c=t(1),i=t.n(c),s=t(8),u=t.n(s),d=t(3),m={tag:d.o,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),i=Object(d.k)(u()(a,"card-title"),t);return o.a.createElement(r,Object(n.a)({},c,{className:i}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},522:function(e,a,t){"use strict";var n=t(7),l=t(0),r=t.n(l),o=t(449),c=t(450),i=t(451),s=t(254),u=t(421),d=t(118),m=t.n(d),p=t(8),b=t.n(p),g=t(16),f=t(503),h=t(162);a.a=function(e){var a=Object(l.useState)("Collegue"),t=Object(n.a)(a,2),d=t[0],p=t[1],v=Object(l.useState)("Collegue"),E=Object(n.a)(v,2),O=E[0],j=E[1],y=Object(l.useState)(""),N=Object(n.a)(y,2),S=N[0],k=N[1],D=Object(l.useState)(""),x=Object(n.a)(D,2),A=x[0],I=x[1],C=Object(l.useState)(""),w=Object(n.a)(C,2),T=w[0],_=w[1],M=Object(l.useState)(""),L=Object(n.a)(M,2),z=L[0],P=L[1],R=Object(l.useState)(""),U=Object(n.a)(R,2),B=U[0],F=U[1],G=Object(l.useState)(""),V=Object(n.a)(G,2),J=V[0],H=V[1],Z=Object(l.useState)(""),K=Object(n.a)(Z,2),W=K[0],X=K[1],$=Object(l.useState)(!1),q=Object(n.a)($,2),Q=q[0],Y=q[1],ee=Object(l.useState)(""),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],le=Object(l.useState)(""),re=Object(n.a)(le,2),oe=re[0],ce=re[1],ie=Object(l.useState)(""),se=Object(n.a)(ie,2),ue=se[0],de=se[1],me=Object(l.useState)(""),pe=Object(n.a)(me,2),be=pe[0],ge=pe[1],fe=Object(l.useState)(""),he=Object(n.a)(fe,2),ve=he[0],Ee=he[1],Oe=Object(l.useState)(""),je=Object(n.a)(Oe,2),ye=je[0],Ne=je[1],Se=Object(l.useState)(""),ke=Object(n.a)(Se,2),De=ke[0],xe=ke[1];Object(l.useEffect)((function(){if(e.data){var a=e.data,t=a.id,n=a.name,l=a.relation,r=a.address,o=a.email,c=a.primaryContact,i=a.secondaryContact;Re(),H(t),X(n),p(l),"Collegue"!==l&&"Cousin"!==l&&"Daughter"!==l&&"Daughter-in-law"!==l&&"Friend"!==l&&"Husband"!==l&&"Son"!==l&&"Son-in-law"!==l&&"Wife"!==l&&(p("others"),j(l)),I(r),k(o),_(c),P(i)}else(null===e.data||Q)&&(Pe(),Re());Y(!1)}),[e.data]);var Ae=function(){return xe("Enter Valid Name")},Ie=function(){return de("Enter Valid Email")},Ce=function(){return ge("Enter Valid Address")},we=function(){return Ee("Enter Valid Primary No.")},Te=function(){return ce("Enter Valid Relation")},_e=function(){return ne("Enter Valid Relation")},Me=function(e){var a=e.target.name,t=e.target.value;switch(a){case"name":X(t),(null===t||void 0===t?void 0:t.length)&&t.trim()&&xe("");break;case"email":k(t);var n=t.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);t&&n&&t.trim()&&de("");break;case"address":I(t.replace(/[\n\r]/g,", ")),t&&t.trim()&&ge("");break;case"phone":_(t),(null===t||void 0===t?void 0:t.length)&&10===t.length&&t.trim()&&Ee("");break;case"phoneC":P(t),10===t.length&&t.trim()&&Ne(""),!(null===t||void 0===t?void 0:t.length)&&Ne("");break;case"relation":p(t),"others"!==t&&ne(""),(null===t||void 0===t?void 0:t.length)&&t.trim()&&ce("");break;case"relation1":j(t),(null===t||void 0===t?void 0:t.length)&&t.trim()&&ne("")}},Le=function(e){var a=e.target.name,t=e.target.value;switch(a){case"name":(null===t||void 0===t?void 0:t.length)&&t.trim()?xe(""):Ae();break;case"email":var n=t.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);t&&n&&t.trim()?de(""):Ie();break;case"address":I(t.replace(/[\n\r]/g,", ")),t&&t.trim()?ge(""):Ce();break;case"phone":(null===t||void 0===t?void 0:t.length)&&10===t.length&&t.trim()?Ee(""):we();break;case"phoneC":10===t.length&&t.trim()?Ne(""):Ne("Enter Valid Secondary No."),!(null===t||void 0===t?void 0:t.length)&&Ne("");break;case"relation":(null===t||void 0===t?void 0:t.length)&&t.trim()?ce(""):Te();break;case"relation1":(null===t||void 0===t?void 0:t.length)&&t.trim()?ne(""):_e()}},ze=function(){if(!(null===W||void 0===W?void 0:W.length)&&Ae(),!(null===S||void 0===S?void 0:S.length)&&Ie(),!(null===A||void 0===A?void 0:A.length)&&Ce(),!(null===T||void 0===T?void 0:T.length)&&we(),!(null===z||void 0===z?void 0:z.length)&&we(),!(null===d||void 0===d?void 0:d.length)&&Te(),"others"===d&&!(null===O||void 0===O?void 0:O.length)&&_e(),"others"!==d&&ne(""),De||!(null===W||void 0===W?void 0:W.length)||oe||!(null===d||void 0===d?void 0:d.length)||te||"others"===d&&!(null===O||void 0===O?void 0:O.length)||ue||!(null===S||void 0===S?void 0:S.length)||be||!(null===A||void 0===A?void 0:A.length)||ve||!(null===T||void 0===T?void 0:T.length)||ye)f.b.error("Kindly Fill Mandatory fields");else if(e.isLoading)null!==e.data?f.b.warning("Updating still in process"):f.b.warning("Adding nominee in process");else{var a={relation:null===d||void 0===d?void 0:d.trim(),relation1:null===O||void 0===O?void 0:O.trim(),email:null===S||void 0===S?void 0:S.trim(),address:null===A||void 0===A?void 0:A.trim(),contact1:null===T||void 0===T?void 0:T.trim(),contact2:null===z||void 0===z?void 0:z.trim(),id:null===J||void 0===J?void 0:J.trim(),name:null===W||void 0===W?void 0:W.trim()};null!==e.data?(a._id=e.data._id,a.usage=e.data.usage,e.updateData(a)):(Y(!0),e.addData(a),Pe(),Re())}},Pe=function(){X(""),p("Collegue"),j(""),k(""),I(""),_(""),P("")},Re=function(){xe(""),ge(""),Ee(""),Ne(""),de(""),ne("")},Ue=e.show,Be=e.handleSidebar,Fe=e.data;return r.a.createElement("div",{className:b()("data-list-sidebar",{show:Ue})},r.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},r.a.createElement("h4",{style:{color:"var(--warning)"}},null!==Fe?"UPDATE NOMINEE":"ADD NEW NOMINEE"),r.a.createElement(u.a,{size:20,onClick:function(){Be(!1,!0),Pe(),Re()}})),r.a.createElement(m.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},r.a.createElement(o.a,{className:"form-label-group mb-0"},r.a.createElement(c.a,{className:"input-label",type:"text",name:"name",value:W,placeholder:"Nominee Name*",onChange:Me,onBlur:Le,id:"data-name",style:{borderColor:De?"red":""}}),r.a.createElement(i.a,{className:"dark"===g.a.theme?"dark-label":"light-label",for:"data-name"},"Name*")),De&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},De),r.a.createElement(o.a,{className:"mt-2 mb-0"},r.a.createElement(c.a,{type:"select",id:"data-category",name:"relation",value:d,onChange:Me,onBlur:Le},r.a.createElement("option",null,"Collegue"),r.a.createElement("option",null,"Cousin"),r.a.createElement("option",null,"Daughter"),r.a.createElement("option",null,"Daughter-in-law"),r.a.createElement("option",null,"Friend"),r.a.createElement("option",null,"Husband"),r.a.createElement("option",null,"Son"),r.a.createElement("option",null,"Son-in-law"),r.a.createElement("option",null,"Wife"),r.a.createElement("option",null,"others")),r.a.createElement(i.a,{className:"dark"===g.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation*")),"others"===d&&r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{type:"text",name:"relation1",value:O,placeholder:"Relation Name*",onChange:Me,onBlur:Le,id:"data-Relation",style:{borderColor:te?"red":""}})),te&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},te),r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{className:"input-label",type:"email",name:"email",value:S,placeholder:"Enter nominee email*",onChange:Me,onBlur:Le,id:"data-email",style:{borderColor:ue?"red":""}}),r.a.createElement(i.a,{className:"dark"===g.a.theme?"dark-label":"light-label",for:"data-email"},"Nominee Email*")),ue&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ue),r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{className:"input-label",type:"type",maxLength:10,value:T,name:"phone",onChange:Me,onBlur:Le,onKeyPress:function(e){return Object(h.a)(e)},id:"data-price1",placeholder:"Enter primary contact No*",style:{borderColor:ve?"red":""}}),r.a.createElement(i.a,{className:"dark"===g.a.theme?"dark-label":"light-label",for:"data-price1"},"Primary Contact")),ve&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ve),r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{className:"input-label",type:"text",maxLength:10,value:z,name:"phoneC",onChange:Me,onBlur:Le,onKeyPress:function(e){return Object(h.a)(e)},id:"data-price",placeholder:"Enter secondry contact No",style:{borderColor:ye?"red":""}}),r.a.createElement(i.a,{className:"dark"===g.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact")),ye&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ye),r.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},r.a.createElement(c.a,{className:"input-label ",style:{height:"115px",borderColor:be?"red":""},type:"textarea",value:A,name:"address",placeholder:"Enter Address*",onChange:Me,onBlur:Le,id:"data-Address"}),r.a.createElement(i.a,{className:"dark"===g.a.theme?"dark-label":"light-label",for:"data-Address"},"Address *")),be&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},be),e.thumbView&&B.length<=0?r.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",r.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(e){return F(URL.createObjectURL(e.target.files[0]))}})):null),r.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},r.a.createElement(s.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Pe(),Re()}},"Reset"),r.a.createElement(s.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return ze()}},null!==Fe?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))}},523:function(e,a,t){"use strict";var n=t(4),l=t(9),r=t(0),o=t.n(r),c=t(1),i=t.n(c),s=t(8),u=t.n(s),d=t(3),m={tag:d.o,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),i=Object(d.k)(u()(a,"card-header"),t);return o.a.createElement(r,Object(n.a)({},c,{className:i}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},527:function(e,a,t){"use strict";var n=t(4),l=t(15),r=t(0),o=t.n(r),c=t(1),i=t.n(c),s=t(8),u=t.n(s),d=t(506),m=t(3),p={tag:m.o,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,r=Object(m.l)(this.props,Object.keys(p)),c=Object(m.k)(u()("tab-content",a),t);return o.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},o.a.createElement(l,Object(n.a)({},r,{className:c})))},a}(r.Component);a.a=b,b.propTypes=p,b.defaultProps={tag:"div"}},528:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(4),l=t(9),r=t(0),o=t.n(r),c=t(1),i=t.n(c),s=t(8),u=t.n(s),d=t(506),m=t(3),p={tag:m.o,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function b(e){var a=e.className,t=e.cssModule,r=e.tabId,c=e.tag,i=Object(l.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return Object(m.k)(u()("tab-pane",a,{active:r===e}),t)};return o.a.createElement(d.a.Consumer,null,(function(e){var a=e.activeTabId;return o.a.createElement(c,Object(n.a)({},i,{className:s(a)}))}))}b.propTypes=p,b.defaultProps={tag:"div"}},551:function(e,a,t){"use strict";var n,l=t(4),r=t(9),o=t(2),c=t(15),i=t(5),s=t(0),u=t.n(s),d=t(1),m=t.n(d),p=t(8),b=t.n(p),g=t(99),f=t(3);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){Object(i.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var E=v(v({},g.Transition.propTypes),{},{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:f.o,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),O=v(v({},g.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:f.c.Collapse}),j=((n={})[f.b.ENTERING]="collapsing",n[f.b.ENTERED]="collapse show",n[f.b.EXITING]="collapsing",n[f.b.EXITED]="collapse",n);function y(e){return e.scrollHeight}var N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind(Object(o.a)(t))})),t}Object(c.a)(a,e);var t=a.prototype;return t.onEntering=function(e,a){this.setState({height:y(e)}),this.props.onEntering(e,a)},t.onEntered=function(e,a){this.setState({height:null}),this.props.onEntered(e,a)},t.onExit=function(e){this.setState({height:y(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,a=this.props,t=a.tag,n=a.isOpen,o=a.className,c=a.navbar,i=a.cssModule,s=a.children,d=(a.innerRef,Object(r.a)(a,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),m=this.state.height,p=Object(f.m)(d,f.a),h=Object(f.l)(d,f.a);return u.a.createElement(g.Transition,Object(l.a)({},p,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(a){var n=function(e){return j[e]||"collapse"}(a),r=Object(f.k)(b()(o,n,c&&"navbar-collapse"),i),d=null===m?null:{height:m};return u.a.createElement(t,Object(l.a)({},h,{style:v(v({},h.style),d),className:r,ref:e.props.innerRef}),s)}))},a}(s.Component);N.propTypes=E,N.defaultProps=O,a.a=N},624:function(e,a,t){"use strict";var n=t(4),l=t(9),r=t(0),o=t.n(r),c=t(1),i=t.n(c),s=t(8),u=t.n(s),d=t(3),m={children:i.a.node,inline:i.a.bool,tag:d.o,color:i.a.string,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.inline,c=e.color,i=e.tag,s=Object(l.a)(e,["className","cssModule","inline","color","tag"]),m=Object(d.k)(u()(a,!r&&"form-text",!!c&&"text-"+c),t);return o.a.createElement(i,Object(n.a)({},s,{className:m}))};p.propTypes=m,p.defaultProps={tag:"small",color:"muted"},a.a=p},648:function(e,a,t){"use strict";t.r(a);var n=t(31),l=t.n(n),r=t(51),o=t(7),c=t(0),i=t.n(c),s=t(517),u=t(523),d=t(520),m=t(446),p=t(447),b=t(448),g=t(505),f=t(624),h=t(551),v=t(527),E=t(528),O=t(30),j=t.n(O),y=t(518),N=t(8),S=t.n(N),k=t(503),D=(t(516),t(479)),x=t(526),A=t(499),I=function(e){var a,t=Object(c.useState)(""),n=Object(o.a)(t,2),l=n[0],r=n[1],g=Object(c.useState)("Closed"),O=Object(o.a)(g,2),N=O[0],I=O[1],C=Object(c.useState)(""),w=Object(o.a)(C,2),T=w[0],_=w[1],M=Object(c.useState)(""),L=Object(o.a)(M,2),z=L[0],P=L[1],R=(null===(a=e.collapseItems)||void 0===a?void 0:a.length)>0?e.collapseItems.map((function(a){return i.a.createElement("div",{className:"collapse-margin",key:a._id},i.a.createElement(y.a,{handleConfirm:function(){var e;e=z,j.a.delete("/backendapi/sender/deletebyid/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("authtoken"))}}).then((function(e){k.b.success("Message deleted successfully!")})).catch(),_(!1)},isOpen:T,closeModal:function(){return _(!1)}}),i.a.createElement(s.a,{onClick:function(){return e=a._id,void r(l!==e?e:"");var e},className:S()({"collapse-collapsed":"Closed"===N&&l===a._id,"collapse-shown":"Opened"===N&&l===a._id,closing:"Closing..."===N&&l===a._id,opening:"Opening..."===N&&l===a._id})},i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"lead collapse-title collapsed"},function(a){var t;return(null===(t=e.colorOption)||void 0===t?void 0:t[a])?e.colorOption[a]:a}(a.title)),i.a.createElement(A.a,{size:15,className:"collapse-icon"})),i.a.createElement(h.a,{isOpen:a._id===l,onEntering:function(){a._id===l&&I("Opening...")},onEntered:function(){a._id===l&&I("Opened")},onExiting:function(){a._id===l&&I("Closing...")},onExited:function(){a._id===l&&I("Closed")}},i.a.createElement(m.a,null,function(a){var t,n,l="";return(null===a||void 0===a||null===(t=a.nominees)||void 0===t?void 0:t.length)&&a.nominees.forEach((function(e,t){t===a.nominees.length-1?l+=null===e||void 0===e?void 0:e.name:l="".concat(l+(null===e||void 0===e?void 0:e.name),", ")})),i.a.createElement("div",null,i.a.createElement(p.a,null,i.a.createElement(b.a,{md:"5",sm:"12"},i.a.createElement(f.a,null,i.a.createElement("b",null," Type : ")," ",a.type,i.a.createElement("br",null),i.a.createElement("b",null," Description : ")," ",a.desc,i.a.createElement("br",null),i.a.createElement("b",null," Date : ")," ",null===a||void 0===a||null===(n=a.date)||void 0===n?void 0:n.split("T")[0],i.a.createElement("b",null," Time : ")," ",null===a||void 0===a?void 0:a.time)),i.a.createElement(b.a,{md:"5",sm:"12"},i.a.createElement(f.a,null,i.a.createElement("b",null,"Status :")," ",0===a.status?i.a.createElement("span",{style:{color:"orange"}},"Pending"):i.a.createElement("span",{style:{color:"green"}},"Delivered")," ",i.a.createElement("br",null),i.a.createElement("b",null,"Nominees :")," ",l)),i.a.createElement(b.a,{md:"2",sm:"12"},i.a.createElement(f.a,null,i.a.createElement("b",null," ",i.a.createElement(D.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){e.editItem(a)}})),i.a.createElement("br",null),i.a.createElement("b",null,i.a.createElement(x.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){P(a._id),_(!0)}}))))))}(a)))))})):i.a.createElement("span",{style:{fontSize:"12px",marginTop:"-10px"}},"No Messages Found");return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,null),i.a.createElement(s.a,{style:{paddingBottom:"1.5rem",paddingRight:"0.5rem",marginBottom:"portfolio"===e.page?"2.2rem":"1rem"}},i.a.createElement(u.a,null,i.a.createElement(d.a,null,e.heading)),i.a.createElement(m.a,{className:"card_body",style:{maxHeight:"portfolio"===e.page?"260px":" calc(100vh - 435px)"}},i.a.createElement(v.a,{activeTab:"1"},i.a.createElement(E.a,{tabId:"1"},i.a.createElement("div",{className:"vx-collapse"},R)),i.a.createElement(E.a,{className:"component-code",tabId:"2"},"hey")))))},C=t(18),w=t(161),T=t(552),_=t.n(T),M=t(557),L=(t(558),t(549));j.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var z=localStorage.getItem("authtoken"),P=function(){if(JSON.parse(localStorage.getItem("logInUserData"))){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var a=Object(r.a)(l.a.mark((function a(t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"LOAD_MSG"}),a.next=3,j.a.get("/backendapi/sender/getlist/".concat(e._id),{headers:{Authorization:"Bearer ".concat(z)}}).then((function(e){t({type:"GET_MSG",getmesssages:e.data})})).catch((function(e){console.log(e),t({type:"ERR_MSG"})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},R=t(519),U=t(449),B=t(451),F=t(450),G=t(254),V=(t(514),t(260),t(522)),J=t(16),H=[{value:"Attachment",label:"Attachment",color:"#00B8D9",isFixed:!0},{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"Voice",label:"Voice",color:"#0052CC",isFixed:!0},{value:"Video",label:"Video",color:"#0052CC",isFixed:!0}],Z=new Date;Z.setHours(Z.getHours()+1);a.default=Object(C.b)((function(e){var a,t=e.dataList,n=e.sender,l=(null===n||void 0===n||null===(a=n.getmesssages)||void 0===a?void 0:a.length)?n.getmesssages.reverse():[];return{dataList:t,listLoading:t.totalRecordsLoading,messages:l,loadingmsg:n.loadingmsg}}),{scheduleNewMessage:function(e){return function(a){var t=JSON.parse(localStorage.getItem("logInUserData"))._id;e.user=t,j.a.post("/backendapi/sender/schedulenew",e,{headers:{Authorization:"Bearer ".concat(z)}}).then((function(t){console.log("response msg",t),a({type:"ADD_MSG",getmesssages:e}),a(P()),k.b.success("Message Scheduled Successfully!!")})).catch((function(e){return console.log(e)}))}},getData:R.f,editMessage:function(e){return function(a){j.a.post("/backendapi/sender/update",e,{headers:{Authorization:"Bearer ".concat(z)}}).then((function(t){console.log("response msg",t),a({type:"ADD_MSG",getmesssages:[e]}),a(P()),k.b.success("Message Updated Successfully!!")})).catch((function(e){return console.log(e)}))}},addData:R.a,getScheduledMessages:P})((function(e){var a,t=i.a.createRef(),n=i.a.createRef(),f=Object(c.useState)(Z.toISOString().substr(0,10)),h=Object(o.a)(f,2),v=h[0],E=h[1],O=Object(c.useState)(Z.toTimeString().split(" ")[0]),j=Object(o.a)(O,2),y=j[0],N=j[1],D=Object(c.useState)(""),x=Object(o.a)(D,2),A=x[0],C=x[1],T=Object(c.useState)(""),z=Object(o.a)(T,2),P=z[0],R=z[1],K=Object(c.useState)(!1),W=Object(o.a)(K,2),X=W[0],$=W[1],q=Object(c.useState)(null),Q=Object(o.a)(q,2),Y=Q[0],ee=Q[1],ae=Object(c.useState)(""),te=Object(o.a)(ae,2),ne=te[0],le=te[1],re=Object(c.useState)(!1),oe=Object(o.a)(re,2),ce=oe[0],ie=oe[1],se=Object(c.useState)(""),ue=Object(o.a)(se,2),de=ue[0],me=ue[1],pe=Object(c.useState)(!1),be=Object(o.a)(pe,2),ge=be[0],fe=be[1],he=Object(c.useState)(null),ve=Object(o.a)(he,2),Ee=ve[0],Oe=ve[1],je=Object(c.useState)(!1),ye=Object(o.a)(je,2),Ne=ye[0],Se=ye[1],ke=Object(c.useState)([]),De=Object(o.a)(ke,2),xe=De[0],Ae=De[1],Ie=Object(c.useState)({url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}}),Ce=Object(o.a)(Ie,2),we=Ce[0],Te=Ce[1],_e=Object(c.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Me=Object(o.a)(_e,2),Le=Me[0],ze=Me[1];Object(c.useEffect)((function(){e.getScheduledMessages(),!e.listLoading&&e.getData()}),[]);var Pe=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ie(e),a&&(Oe(null),fe(!0))};Object(c.useEffect)((function(){if(e.dataList.data.length){var a=Le;e.dataList.data.forEach((function(e){var t={value:e._id,label:"".concat(e.name," - ").concat(e.relation),color:"#00B8D9",isFixed:!1};a.push(t)})),ze(a)}}),[e.dataList.data]);var Re=function(){var a=Object(r.a)(l.a.mark((function a(t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return Se(!0),a.prev=1,a.next=4,e.addData(t);case 4:Se(!1),Pe(!1,!0),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),Se(!1),k.b.error("Add Nominee Failed! Please contact admin");case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return i.a.createElement("div",{className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},i.a.createElement(V.a,{show:ce,data:Ee,updateData:e.addData,addData:Re,isLoading:Ne,handleSidebar:Pe,thumbView:e.thumbView,getData:e.getData,dataParams:e.parsedFilter,addNew:ge}),i.a.createElement("div",{className:S()("data-list-overlay",{show:ce}),onClick:function(){return Pe(!1,!0)}}),i.a.createElement("h2",{className:"warning spacing nodisplay"},"Sender"),i.a.createElement(s.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,"Schedule a Message")),i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement(b.a,{lg:"8",md:"6",sm:"12"},i.a.createElement(p.a,{className:"match-height"},i.a.createElement(b.a,{md:"12"},i.a.createElement(p.a,null,i.a.createElement(b.a,{sm:""},i.a.createElement(U.a,{className:"form-label-group"},i.a.createElement(w.a,{className:"React",classNamePrefix:"select",name:"color",options:H,ref:n,isClearable:!0,isDisabled:X,placeholder:X?P:"Select Message Type...",onChange:function(e){var a=e?e.value:"";R(a)}}))),i.a.createElement(b.a,{sm:""},i.a.createElement(U.a,{className:"form-label-group"},i.a.createElement(w.a,{isMulti:!0,name:"nominee",options:Le,value:xe.map((function(e){return{value:e.id,label:e.name}})),ref:t,className:"React",classNamePrefix:"select",placeholder:"Select Nominee",id:"nominee",onChange:function(e){var a=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?ie(!0):a.push({id:e.value,name:e.label})})),Ae(a)}}),i.a.createElement(B.a,null,"Select Nominee")))),i.a.createElement(p.a,null,i.a.createElement(b.a,null,i.a.createElement(U.a,{className:"form-label-group"},i.a.createElement(F.a,{type:"text",id:"title",className:"input-label",placeholder:"Title",value:de,onChange:function(e){me(e.target.value)}}),i.a.createElement(B.a,{for:"title",className:"dark"===J.a.theme?"dark-label":"light-label"},"Title"))),i.a.createElement(b.a,{className:"d-flex "},i.a.createElement(U.a,{className:"form-label-group",style:{width:"50%"}},i.a.createElement(F.a,{type:"date",className:"input-label",name:"date",id:"exampleDate",placeholder:"Enter Date",maxLength:10,onChange:function(e){return E(e.target.value)},value:v}),i.a.createElement(B.a,{for:"exampleDate",className:"dark"===J.a.theme?"dark-label":"light-label"},"Date *")),i.a.createElement(U.a,{className:"form-label-group",style:{width:"49%",marginLeft:"1%"}},i.a.createElement(F.a,{type:"time",className:"input-label",name:"time",id:"exampleTime",placeholder:"Time",onChange:function(e){return N(e.target.value)},value:y}),i.a.createElement(B.a,{for:"exampleTime",className:"dark"===J.a.theme?"dark-label":"light-label"},"Time *")))),"Attachment"===P&&i.a.createElement(U.a,{className:"form-label-group"},i.a.createElement(F.a,{type:"file",name:"file",id:"exampleFile",className:"input-label form-control",placeholder:"File",onChange:function(e){return le(e.target.value)},value:ne}),i.a.createElement(B.a,{for:"exampleFile",className:"dark"===J.a.theme?"dark-label":"light-label"},"File *")),"Video"===P&&i.a.createElement("div",{className:"video-recorder"},i.a.createElement(_.a,{onRecordingComplete:function(e){console.log("videoBlob",e)}})),"Voice"===P&&i.a.createElement("div",{className:"voice-recorder"},i.a.createElement(M.a,{record:!0,title:"New recording",audioURL:we.url,showUIAudio:!0,handleAudioStop:function(e){return function(e){Te(e)}(e)},handleAudioUpload:function(e){return a=e,void console.log(a);var a},handleReset:function(){Te({url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}})}})),i.a.createElement(U.a,{className:"form-label-group"},i.a.createElement(F.a,{type:"textarea",placeholder:"Description",className:"input-label",rows:"5",id:"description",value:A,onChange:function(e){C(e.target.value)}}),i.a.createElement(B.a,{for:"description",className:"dark"===J.a.theme?"dark-label":"light-label"},"Description")),i.a.createElement("div",{className:"d-flex justify-content-end",style:{textAlign:"right"}},i.a.createElement(G.a.Ripple,{outline:!0,className:"button-label",color:"secondary",onClick:function(){me(""),$(!1),R(""),C(""),E(""),N(""),Ae([])}},X?"Cancel":"Reset"),i.a.createElement(G.a.Ripple,{className:"button-label",color:"warning",onClick:function(){X?e.editMessage({_id:Y,desc:A,type:P,title:de,date:v,time:y,nominees:xe}):e.scheduleNewMessage({desc:A,type:P,title:de,date:v,time:y,nominees:xe}),me(""),R(""),C(""),E(""),N("")},disabled:!A.trim().length||!P.trim().length||!de.trim().length||!v.trim().length||!y.trim().length||!xe.length},X?"Update":"Add")))),i.a.createElement(p.a,null,i.a.createElement(k.a,null),i.a.createElement(b.a,null,console.log("props",e),e.loadingmsg&&null===e.messages?i.a.createElement(L.a,{color:"danger",size:"sm"}):i.a.createElement(I,{heading:"Messages History",collapseItems:null===e||void 0===e?void 0:e.messages,colorOption:null===e||void 0===e||null===(a=e.messages)||void 0===a?void 0:a.colorOption,editItem:function(e){console.log("editItem",e);var a=e.date,t=e.desc,n=e.nominees,l=e.time,r=e.title,o=e.type,c=e._id;$(!0),ee(c),E(a.split("T")[0]),C(t),Ae(n),N(l),me(r),R(o)}})))),i.a.createElement(g.a,null)))))}))}}]);