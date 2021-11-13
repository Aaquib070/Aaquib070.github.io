(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[25],{578:function(e){e.exports=JSON.parse('{"Bank Details":[{"key":"Account No *","val":"","type":"Number","mandatory":true},{"key":"Bank Name *","val":"","type":"Text","mandatory":true},{"key":"Branch *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"Textarea"},{"key":"Attachments","val":"","type":"File"}],"Custom":[{"key":"Asset Name","val":"","type":"Text","mandatory":true}],"Fixed Deposit":[{"key":"FD Account No *","val":"","type":"Number","mandatory":true},{"key":"FD Amount *","val":"","type":"Number","mandatory":true},{"key":"Bank Name *","val":"","type":"Text","mandatory":true},{"key":"FD Maturity Date","val":"","type":"Date"},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Gratuity":[{"key":"Gratuity No *","val":"","type":"Number","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Policy":[{"key":"Policy Number *","val":"","type":"number","mandatory":true},{"key":"Policy Name *","val":"","type":"text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Property":[{"key":"Property Type *","val":"","type":"Text","mandatory":true},{"key":"Property Location *","val":"","type":"Text","mandatory":true},{"key":"Property Area *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Provident Fund":[{"key":"EPF No *","val":"","type":"Number","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Mutual Fund":[{"key":"Portfolio No *","val":"","type":"Number","mandatory":true},{"key":"Value *","val":"","type":"Number","mandatory":true},{"key":"Type *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Receipt / Bill":[{"key":"Bill Name *","val":"","type":"Text","mandatory":true},{"key":"Bill Date","val":"","type":"Date"},{"key":"Bill Amount *","val":"","type":"Number","mandatory":true},{"key":"Expiry Date","val":"","type":"Date"},{"key":"Warraty Period (if applicable)","val":"","type":"Text"},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}]}')},604:function(e,t,a){"use strict";a.r(t);var l=a(19),n=a.n(l),o=a(26),i=a(7),s=a(0),r=a.n(s),c=a(511),u=a(442),d=a(405),m=a(601),v=a(502),p=a(503),y=a(463),b=a(501),f=a(497),g=a(441),E=a(408),h=a(148),O=a(246),k=a(149),N=a(84),x=a(451),D=a(434),F=a(435),j=a(582),S=a(468),C=a(461),B=a(578),A=a(514),w=a(16),P=a.n(w),T=a(8),I=a.n(T),L=a(15),R=a(85),M=(a(453),a(454),a(457),a(460)),J=a(62),z=a(529),_=a(475),U=a(603),G=a(18),V=a(17),H=(a(456),a(247),a(470)),K=a(150),W=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0},{value:"File",label:"File",color:"#0052CC",isFixed:!0}];t.default=Object(L.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),{getData:M.f,addData:M.a})((function(e){var t,a,l,w,T,L,M,q,Q,X,Y,Z,$,ee,te,ae,le,ne,oe,ie,se,re,ce,ue,de,me,ve,pe,ye,be,fe,ge,Ee,he,Oe,ke,Ne,xe,De=r.a.createRef(),Fe=r.a.createRef(),je=r.a.createRef(),Se=(null===(t=e.messages)||void 0===t?void 0:t.assetOption)?null===(a=e.messages)||void 0===a?void 0:a.assetOption:JSON.parse(JSON.stringify(B)),Ce=[{value:"Bank Details",label:(null===(l=e.messages)||void 0===l||null===(w=l.colorOption)||void 0===w?void 0:w["Bank Details"])?null===(T=e.messages)||void 0===T||null===(L=T.colorOption)||void 0===L?void 0:L["Bank Details"]:"Bank Details",color:"#00B8D9",isFixed:!0},{value:"Fixed Deposit",label:(null===(M=e.messages)||void 0===M||null===(q=M.colorOption)||void 0===q?void 0:q["Fixed Deposit"])?null===(Q=e.messages)||void 0===Q||null===(X=Q.colorOption)||void 0===X?void 0:X["Fixed Deposit"]:"Fixed Deposit",color:"#0052CC",isFixed:!0},{value:"Policy",label:(null===(Y=e.messages)||void 0===Y||null===(Z=Y.colorOption1)||void 0===Z?void 0:Z.Policy)?null===($=e.messages)||void 0===$||null===(ee=$.colorOption1)||void 0===ee?void 0:ee.Policy:"Policy",color:"#00B8D9",isFixed:!0},{value:"Property",label:(null===(te=e.messages)||void 0===te||null===(ae=te.colorOption)||void 0===ae?void 0:ae.Property)?null===(le=e.messages)||void 0===le||null===(ne=le.colorOption)||void 0===ne?void 0:ne.Property:"Property",color:"#00B8D9",isFixed:!0},{value:"Mutual Fund",label:(null===(oe=e.messages)||void 0===oe||null===(ie=oe.colorOption)||void 0===ie?void 0:ie["Mutual Fund"])?null===(se=e.messages)||void 0===se||null===(re=se.colorOption)||void 0===re?void 0:re["Mutual Fund"]:"Mutual Fund",color:"#00B8D9",isFixed:!0},{value:"Provident Fund",label:(null===(ce=e.messages)||void 0===ce||null===(ue=ce.colorOption)||void 0===ue?void 0:ue["Provident Fund"])?null===(de=e.messages)||void 0===de||null===(me=de.colorOption)||void 0===me?void 0:me["Provident Fund"]:"Provident Fund",color:"#00B8D9",isFixed:!0},{value:"Gratuity",label:(null===(ve=e.messages)||void 0===ve||null===(pe=ve.colorOption)||void 0===pe?void 0:pe.Gratuity)?null===(ye=e.messages)||void 0===ye||null===(be=ye.colorOption)||void 0===be?void 0:be.Gratuity:"Gratuity",color:"#00B8D9",isFixed:!0},{value:"Receipt / Bill",label:(null===(fe=e.messages)||void 0===fe||null===(ge=fe.colorOption)||void 0===ge?void 0:ge["Receipt / Bill"])?null===(Ee=e.messages)||void 0===Ee||null===(he=Ee.colorOption)||void 0===he?void 0:he["Receipt / Bill"]:"Receipt / Bill",color:"#00B8D9",isFixed:!0},{value:"Custom",label:(null===(Oe=e.messages)||void 0===Oe||null===(ke=Oe.colorOption)||void 0===ke?void 0:ke.Custom)?null===(Ne=e.messages)||void 0===Ne||null===(xe=Ne.colorOption)||void 0===xe?void 0:xe.Custom:"Custom",color:"#0052CC",isFixed:!0}],Be=Object(s.useState)(""),Ae=Object(i.a)(Be,2),we=Ae[0],Pe=Ae[1],Te=Object(s.useState)(null),Ie=Object(i.a)(Te,2),Le=Ie[0],Re=Ie[1],Me=Object(s.useState)(!1),Je=Object(i.a)(Me,2),ze=Je[0],_e=Je[1],Ue=Object(s.useState)(!1),Ge=Object(i.a)(Ue,2),Ve=Ge[0],He=Ge[1],Ke=Object(s.useState)(!1),We=Object(i.a)(Ke,2),qe=We[0],Qe=We[1],Xe=Object(s.useState)(null),Ye=Object(i.a)(Xe,2),Ze=Ye[0],$e=Ye[1],et=Object(s.useState)(""),tt=Object(i.a)(et,2),at=tt[0],lt=tt[1],nt=Object(s.useState)(""),ot=Object(i.a)(nt,2),it=ot[0],st=ot[1],rt=Object(s.useState)([]),ct=Object(i.a)(rt,2),ut=ct[0],dt=ct[1],mt=Object(s.useState)(""),vt=Object(i.a)(mt,2),pt=vt[0],yt=vt[1],bt=Object(s.useState)(""),ft=Object(i.a)(bt,2),gt=ft[0],Et=ft[1],ht=Object(s.useState)(!1),Ot=Object(i.a)(ht,2),kt=Ot[0],Nt=Ot[1],xt=Object(s.useState)(null),Dt=Object(i.a)(xt,2),Ft=Dt[0],jt=Dt[1],St=Object(s.useState)(!1),Ct=Object(i.a)(St,2),Bt=Ct[0],At=Ct[1],wt=Object(s.useState)([]),Pt=Object(i.a)(wt,2),Tt=Pt[0],It=Pt[1],Lt=Object(s.useState)(!1),Rt=Object(i.a)(Lt,2),Mt=Rt[0],Jt=Rt[1],zt=Object(s.useState)([]),_t=Object(i.a)(zt,2),Ut=_t[0],Gt=_t[1],Vt=Object(s.useState)(!0),Ht=Object(i.a)(Vt,2),Kt=Ht[0],Wt=Ht[1],qt=Object(s.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Qt=Object(i.a)(qt,2),Xt=Qt[0],Yt=Qt[1];Object(s.useEffect)((function(){!e.listLoading&&e.getData(),Zt()}),[]),Object(s.useEffect)((function(){if(e.dataList.data.length){var t=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];e.dataList.data.forEach((function(e){var a={value:e._id,label:e.name+" - "+e.relation,color:"#00B8D9",isFixed:!1};t.push(a)})),Yt(t),Zt()}}),[e.dataList]);var Zt=function(){console.log("nomineeOption",Xt);var t=JSON.parse(localStorage.getItem("logInUserData"));P.a.get("/backendapi/user/assets/".concat(t._id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("authtoken"))}}).then((function(a){var l,n=a?a.data:[];n.splice(0,n.length),(null===t||void 0===t||null===(l=t.assets)||void 0===l?void 0:l.length)&&t.assets.forEach((function(t,a){if(t.id){var l,o,i="";(null===t||void 0===t||null===(l=t.nominees)||void 0===l?void 0:l.length)&&t.nominees.forEach((function(a,l){var n=e.dataList.data.filter((function(e){return e._id===a.id}));n.length&&(l===t.nominees.length-1?i+=n[0].name:i=i+n[0].name+", ")}));var s=r.a.createElement("div",null,r.a.createElement(u.a,null,null===t||void 0===t||null===(o=t.assetDetails)||void 0===o?void 0:o.map((function(e,t){return""!==e.val?r.a.createElement(d.a,{md:"5",sm:"12",key:t+e.key},r.a.createElement(m.a,null,r.a.createElement("b",null,e.key," :")," ",e.val)):""})),r.a.createElement(d.a,{md:"5",sm:"12"},r.a.createElement(m.a,null,r.a.createElement("b",null,"Nominees :")," ",i)),r.a.createElement(d.a,{md:"2",sm:"12"},r.a.createElement(m.a,null,r.a.createElement("b",null,r.a.createElement(z.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){oa(t)}})),r.a.createElement("b",null,r.a.createElement(_.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){console.log("event",t),$e(t.id),Qe(!0)}})))))),c={id:a+1,title:t.assetType,content:s};n.push(c)}})),dt(null===n||void 0===n?void 0:n.reverse())}))},$t=function(){Mt&&na(),Jt(!Mt)},ea=function(){var e=!1;Ut.forEach((function(t){t.mandatory&&!t.val.trim()&&(e=!0)})),Wt(e)},ta=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Nt(e),!0===t&&(jt(null),He(!0))},aa=function(){var t=Object(o.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return At(!0),t.prev=1,t.next=4,e.addData(a);case 4:At(!1),ta(!1,!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),At(!1),R.b.error("Failed to add Nominee! Please retry");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),la=function(){De.current&&De.current.select.clearValue(),Fe.current&&Fe.current.select.clearValue(),Et(""),Gt([]),It([]),pt&&Wt(!0)},na=function(){lt(""),st(""),je.current&&je.current.select.clearValue()},oa=function(e){Wt(!0);var t=e.assetDetails,a=e.assetType,l=e.nominees;Et(a),yt(!0),Pe(e.id),Re(e),Gt(t),It(l)},ia=function(e){e?(document.getElementById("buttonLabel").classList.remove("no-display"),document.getElementById("buttonLabel").classList.add("button-text")):(document.getElementById("buttonLabel").classList.add("no-display"),document.getElementById("buttonLabel").classList.remove("button-text"))},sa=e.messages,ra=e.thumbView,ca=e.getData,ua=e.parsedFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"warning spacing nodisplay"},(null===sa||void 0===sa?void 0:sa.heading)?sa.heading:"Assets"),r.a.createElement(u.a,null,r.a.createElement(d.a,{sm:"12"},r.a.createElement("div",{className:"data-list ".concat(ra?"thumb-view":"list-view")},r.a.createElement(S.a,{handleConfirm:function(){!function(t){var a=JSON.parse(localStorage.getItem("logInUserData")),l=a.assets.findIndex((function(e){return e.id===t})),n=[];l>=0&&(a.assets[l].nominees.forEach((function(e){e.objectid=a.assets[l].id,n.push(e)})),a.assets.splice(l,1),localStorage.setItem("logInUserData",JSON.stringify(a)),P.a.post("/backendapi/adddetails",{_id:a._id,assets:Object(V.b)(JSON.stringify(a.assets)),deletednominee:n},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){R.b.warning("Deleted successfully!"),e.getData(e.parsedFilter),Zt()})).catch(),la(),na(),Wt(!0))}(Ze),Qe(!1)},isOpen:qe,closeModal:function(){return Qe(!1)}}),r.a.createElement(H.a,{show:kt,data:Ft,updateData:e.updateData,addData:aa,isLoading:Bt,handleSidebar:ta,thumbView:ra,getData:ca,dataParams:ua,addNew:Ve}),r.a.createElement("div",{className:I()("data-list-overlay",{show:kt}),onClick:function(){return ta(!1,!0)}}),r.a.createElement(u.a,null,r.a.createElement(d.a,{lg:"8",md:"6",sm:"12"},r.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{sm:"12"},r.a.createElement(v.a,{activeTab:"1"},r.a.createElement(p.a,{tabId:"1"},r.a.createElement(u.a,null,r.a.createElement(R.a,null),r.a.createElement(d.a,{lg:"8",md:"6",sm:"12"},r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,null,(null===sa||void 0===sa?void 0:sa.subHeading)?sa.subHeading:pt?"Edit Asset Details":"Add New Asset")),r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{md:"6",sm:"12"},r.a.createElement(h.a,{className:"form-label-group"},r.a.createElement(J.a,{className:"React",classNamePrefix:"select",ref:De,isDisabled:pt,value:Ce.filter((function(e){return e.value===gt})),name:"color",options:Ce,isClearable:!0,placeholder:(null===sa||void 0===sa?void 0:sa.assetOptionText)?sa.assetOptionText:"Select Asset Type",onChange:function(e){Wt(!0),lt(""),st(""),Et(e?e.value:void 0),Gt(e?Se[e.value]:{})}}),r.a.createElement(O.a,{for:"nameMulti"},(null===sa||void 0===sa?void 0:sa.assetOptionText)?sa.assetOptionText:"Select Asset Type"))),r.a.createElement(d.a,{md:"6",sm:"12"},r.a.createElement(h.a,{className:"form-label-group"},r.a.createElement(J.a,{isMulti:!0,name:"nominee",options:Xt,value:Tt.map((function(e){var t=Xt.filter((function(t){return t.value===e.id}));return{value:t[0].value,label:t[0].label}})),ref:Fe,className:"React",classNamePrefix:"select",placeholder:(null===sa||void 0===sa?void 0:sa.nomineeOption)?sa.nomineeOption:"Select Nominees",id:"nominee",onChange:function(e){!function(e){pt&&Wt(!1);var t=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?Nt(!0):t.push({id:e.value,name:e.label,objectid:we})})),!e&&Wt(!0),It(t)}(e)}}),r.a.createElement(O.a,null,(null===sa||void 0===sa?void 0:sa.nomineeOption)?sa.nomineeOption:"Select Nominees")))),r.a.createElement(u.a,null,Object.keys(Se).includes(gt)&&Ut.map((function(e,t){return r.a.createElement(d.a,{md:"6",sm:"12",key:t},r.a.createElement(h.a,{className:"form-label-group"},e.deletable&&r.a.createElement(U.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){!function(e){pt&&Wt(!1);var t=Ut.filter((function(t){return e.key!==t.key}));Gt(t)}(e)}}),r.a.createElement(k.a,{type:e.type,onKeyPress:function(t){return"number"===e.type.toLowerCase()&&Object(K.a)(t)},name:"city",id:"cityMulti",className:"input-label",placeholder:e.key,value:e.val,onChange:function(t){!function(e,t){var a=Ut,l=Ut.findIndex((function(e){return e.key===t.key}));e.length<50&&(a[l].val=e,Gt(a),_e(!ze),ea())}(t.target?t.target.value:t.value,e)}}),r.a.createElement(O.a,{for:"cityMulti",className:"dark"===G.a.theme?"dark-label":"light-label"},e.key)))}))),r.a.createElement(u.a,{style:{marginTop:"15px"}},r.a.createElement(d.a,{md:"6",sm:"12",style:{display:"flex"}},gt&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{color:"white",outline:!0,onClick:$t,className:"add-button",id:"addButton",onMouseEnter:function(){return ia(!0)},onMouseLeave:function(){return ia(!1)},style:{backgroundColor:"var(--warning)"}},"+"),r.a.createElement("div",{className:"label-div"},r.a.createElement("span",{id:"buttonLabel",className:"no-display"},"Add a Custom Field")))),r.a.createElement(d.a,{sm:"6"},r.a.createElement(h.a,{style:{textAlign:"right",marginBottom:"0px"}},r.a.createElement(N.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){yt(!1),la()}},pt?"Cancel":(null===sa||void 0===sa?void 0:sa.resetButton)?null===sa||void 0===sa?void 0:sa.resetButton:"Reset"),r.a.createElement(N.a.Ripple,{color:"warning",disabled:0===Tt.length||!gt||Kt,type:"reset",className:"button-label",onClick:function(t){pt?function(t){t.preventDefault(),yt(!1);var a=JSON.parse(localStorage.getItem("logInUserData")),l={assetType:gt,assetDetails:Ut,nominees:Tt,id:we},n=a.assets.findIndex((function(e){return e.id===we}));if(n>=0){a.assets.splice(n,1),a.assets.push(l),localStorage.setItem("logInUserData",JSON.stringify(a)),console.log("editObject",Le);var o=[];Tt.forEach((function(e){e.objectid=we})),Le.nominees.forEach((function(e){-1===Tt.findIndex((function(t){return t.id===e.id}))&&(e.objectid=we,o.push(e))})),console.log(o),P.a.post("/backendapi/adddetails",{_id:a._id,assets:Object(V.b)(JSON.stringify(a.assets)),nominees:Tt,deletednominee:o},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){R.b.success("Edited successfully!"),e.getData(e.parsedFilter),Zt()})).catch(),la(),na(),Wt(!0)}}(t):function(t){t.preventDefault();var a=JSON.parse(localStorage.getItem("logInUserData")),l={assetType:gt,assetDetails:Ut,nominees:Tt,id:Object(c.v4)()};Tt.forEach((function(e){e.objectid=l.id})),a.assets.push(l),localStorage.setItem("logInUserData",JSON.stringify(a)),P.a.post("/backendapi/adddetails",{_id:a._id,assets:Object(V.b)(JSON.stringify(a.assets)),nominees:Tt},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){R.b.success("Asset addedd successfully!"),la(),e.getData(e.parsedFilter),Zt()})).catch(),na(),Wt(!0)}(t)}},pt?"Update":(null===sa||void 0===sa?void 0:sa.submitButton)?null===sa||void 0===sa?void 0:sa.submitButton:"Add"))))))))),r.a.createElement(u.a,null,r.a.createElement(R.a,null),r.a.createElement(d.a,{md:"8"},r.a.createElement(A.a,{heading:(null===sa||void 0===sa?void 0:sa.textList)?null===sa||void 0===sa?void 0:sa.textList:"Assets List",collapseItems:ut,colorOption:null===sa||void 0===sa?void 0:sa.colorOption}))))))))),r.a.createElement(C.a,null)),r.a.createElement(u.a,null,r.a.createElement(d.a,{sm:"12"},r.a.createElement(x.a,{isOpen:Mt,toggle:$t,className:"modal-dialog-centered"},r.a.createElement(D.a,{toggle:$t},"Add Custum Field"),r.a.createElement(F.a,null,r.a.createElement(h.a,{className:"form-label-group"},r.a.createElement(k.a,{type:"email",name:"Email",disabled:""===gt,id:"EmailMulti",value:at,placeholder:"Enter Field Name",onChange:function(e){lt(e.target.value)}}),r.a.createElement(O.a,{for:"EmailMulti"},"Enter Field Name")),r.a.createElement(h.a,{className:"form-label-group",disabled:void 0===gt},r.a.createElement(J.a,{id:"optionSelect",className:"React",ref:je,disabled:void 0===gt,classNamePrefix:"select",isClearable:!0,options:W,placeholder:"Select Field Type...",onChange:function(e){return st(e?e.value:"")}}),r.a.createElement(O.a,{for:"nameMulti"},"Field Type"))),r.a.createElement(j.a,null,r.a.createElement(h.a,{className:"form-label-group",style:{textAlign:"right"}},r.a.createElement(N.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"mb-1 button-label",onClick:function(e){na()}},(null===sa||void 0===sa?void 0:sa.resetButton)?null===sa||void 0===sa?void 0:sa.resetButton:"Reset"),r.a.createElement(N.a.Ripple,{color:"warning",disabled:""===at||""===it,type:"reset",className:"button-label",onClick:function(e){return function(){var e=Ut,t=e.length,a="";e.findIndex((function(e){return e.key===at+it}))>=0?R.b.error("Field Already Exist! Please add new field"):("Attachments"===e[t-1].key?(a=e[t-1],e[t-1]={key:at+it,val:"",type:it,deletable:!0},e.push(a),Gt(e),lt(""),st("")):(e.push({key:at+it,val:"",type:it,deletable:!0}),Gt(e),lt(""),st("")),$t())}()}},(null===sa||void 0===sa?void 0:sa.submitButton)?null===sa||void 0===sa?void 0:sa.submitButton:"Add"))))))))))}))}}]);