(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[25],{626:function(e){e.exports=JSON.parse('{"Bank Details":[{"key":"Account No *","val":"","type":"Number","mandatory":true},{"key":"Bank Name *","val":"","type":"Text","mandatory":true},{"key":"Branch *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"Textarea"},{"key":"Attachments","val":"","type":"File"}],"Custom":[{"key":"Asset Name","val":"","type":"Text","mandatory":true}],"Fixed Deposit":[{"key":"FD Account No *","val":"","type":"Number","mandatory":true},{"key":"FD Amount *","val":"","type":"Number","mandatory":true},{"key":"Bank Name *","val":"","type":"Text","mandatory":true},{"key":"FD Maturity Date","val":"","type":"Date"},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Gratuity":[{"key":"Gratuity No *","val":"","type":"Number","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Policy":[{"key":"Policy Number *","val":"","type":"number","mandatory":true},{"key":"Policy Name *","val":"","type":"text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Property":[{"key":"Property Type *","val":"","type":"Text","mandatory":true},{"key":"Property Location *","val":"","type":"Text","mandatory":true},{"key":"Property Area *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Provident Fund":[{"key":"EPF No *","val":"","type":"Number","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Mutual Fund":[{"key":"Portfolio No *","val":"","type":"Number","mandatory":true},{"key":"Value *","val":"","type":"Number","mandatory":true},{"key":"Type *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Receipt / Bill":[{"key":"Bill Name *","val":"","type":"Text","mandatory":true},{"key":"Bill Date","val":"","type":"Date"},{"key":"Bill Amount *","val":"","type":"Number","mandatory":true},{"key":"Expiry Date","val":"","type":"Date"},{"key":"Warraty Period (if applicable)","val":"","type":"Text"},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}]}')},649:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(447),i=a(448),s=a(525),r=a(526),c=a(24),u=a.n(c),d=a(40),m=a(7),v=a(557),p=a(622),y=a(514),b=a(521),f=a(518),g=a(446),E=a(452),h=a(449),O=a(451),k=a(450),x=a(254),N=a(499),D=a(592),F=a(456),j=a(632),S=a(515),C=a(507),B=a(626),A=a(560),T=a(31),w=a.n(T),I=a(8),P=a.n(I),L=a(18),R=a(501),M=(a(513),a(503),a(506),a(516)),J=a(161),z=a(477),_=a(524),U=a(638),G=a(16),V=a(43),H=(a(508),a(260),a(520)),K=a(162),W=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0},{value:"File",label:"File",color:"#0052CC",isFixed:!0}],q=Object(L.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),{getData:M.f,addData:M.a})((function(e){var t,a,c,T,I,L,M,q,Q,X,Y,Z,$,ee,te,ae,le,ne,oe,ie,se,re,ce,ue,de,me,ve,pe,ye,be,fe,ge,Ee,he,Oe,ke,xe,Ne,De=n.a.createRef(),Fe=n.a.createRef(),je=n.a.createRef(),Se=(null===(t=e.messages)||void 0===t?void 0:t.assetOption)?null===(a=e.messages)||void 0===a?void 0:a.assetOption:JSON.parse(JSON.stringify(B)),Ce=[{value:"Bank Details",label:(null===(c=e.messages)||void 0===c||null===(T=c.colorOption)||void 0===T?void 0:T["Bank Details"])?null===(I=e.messages)||void 0===I||null===(L=I.colorOption)||void 0===L?void 0:L["Bank Details"]:"Bank Details",color:"#00B8D9",isFixed:!0},{value:"Fixed Deposit",label:(null===(M=e.messages)||void 0===M||null===(q=M.colorOption)||void 0===q?void 0:q["Fixed Deposit"])?null===(Q=e.messages)||void 0===Q||null===(X=Q.colorOption)||void 0===X?void 0:X["Fixed Deposit"]:"Fixed Deposit",color:"#0052CC",isFixed:!0},{value:"Policy",label:(null===(Y=e.messages)||void 0===Y||null===(Z=Y.colorOption1)||void 0===Z?void 0:Z.Policy)?null===($=e.messages)||void 0===$||null===(ee=$.colorOption1)||void 0===ee?void 0:ee.Policy:"Policy",color:"#00B8D9",isFixed:!0},{value:"Property",label:(null===(te=e.messages)||void 0===te||null===(ae=te.colorOption)||void 0===ae?void 0:ae.Property)?null===(le=e.messages)||void 0===le||null===(ne=le.colorOption)||void 0===ne?void 0:ne.Property:"Property",color:"#00B8D9",isFixed:!0},{value:"Mutual Fund",label:(null===(oe=e.messages)||void 0===oe||null===(ie=oe.colorOption)||void 0===ie?void 0:ie["Mutual Fund"])?null===(se=e.messages)||void 0===se||null===(re=se.colorOption)||void 0===re?void 0:re["Mutual Fund"]:"Mutual Fund",color:"#00B8D9",isFixed:!0},{value:"Provident Fund",label:(null===(ce=e.messages)||void 0===ce||null===(ue=ce.colorOption)||void 0===ue?void 0:ue["Provident Fund"])?null===(de=e.messages)||void 0===de||null===(me=de.colorOption)||void 0===me?void 0:me["Provident Fund"]:"Provident Fund",color:"#00B8D9",isFixed:!0},{value:"Gratuity",label:(null===(ve=e.messages)||void 0===ve||null===(pe=ve.colorOption)||void 0===pe?void 0:pe.Gratuity)?null===(ye=e.messages)||void 0===ye||null===(be=ye.colorOption)||void 0===be?void 0:be.Gratuity:"Gratuity",color:"#00B8D9",isFixed:!0},{value:"Receipt / Bill",label:(null===(fe=e.messages)||void 0===fe||null===(ge=fe.colorOption)||void 0===ge?void 0:ge["Receipt / Bill"])?null===(Ee=e.messages)||void 0===Ee||null===(he=Ee.colorOption)||void 0===he?void 0:he["Receipt / Bill"]:"Receipt / Bill",color:"#00B8D9",isFixed:!0},{value:"Custom",label:(null===(Oe=e.messages)||void 0===Oe||null===(ke=Oe.colorOption)||void 0===ke?void 0:ke.Custom)?null===(xe=e.messages)||void 0===xe||null===(Ne=xe.colorOption)||void 0===Ne?void 0:Ne.Custom:"Custom",color:"#0052CC",isFixed:!0}],Be=Object(l.useState)(""),Ae=Object(m.a)(Be,2),Te=Ae[0],we=Ae[1],Ie=Object(l.useState)(null),Pe=Object(m.a)(Ie,2),Le=Pe[0],Re=Pe[1],Me=Object(l.useState)(!1),Je=Object(m.a)(Me,2),ze=Je[0],_e=Je[1],Ue=Object(l.useState)(!1),Ge=Object(m.a)(Ue,2),Ve=Ge[0],He=Ge[1],Ke=Object(l.useState)(!1),We=Object(m.a)(Ke,2),qe=We[0],Qe=We[1],Xe=Object(l.useState)(null),Ye=Object(m.a)(Xe,2),Ze=Ye[0],$e=Ye[1],et=Object(l.useState)(""),tt=Object(m.a)(et,2),at=tt[0],lt=tt[1],nt=Object(l.useState)(""),ot=Object(m.a)(nt,2),it=ot[0],st=ot[1],rt=Object(l.useState)([]),ct=Object(m.a)(rt,2),ut=ct[0],dt=ct[1],mt=Object(l.useState)(""),vt=Object(m.a)(mt,2),pt=vt[0],yt=vt[1],bt=Object(l.useState)(""),ft=Object(m.a)(bt,2),gt=ft[0],Et=ft[1],ht=Object(l.useState)(!1),Ot=Object(m.a)(ht,2),kt=Ot[0],xt=Ot[1],Nt=Object(l.useState)(null),Dt=Object(m.a)(Nt,2),Ft=Dt[0],jt=Dt[1],St=Object(l.useState)(!1),Ct=Object(m.a)(St,2),Bt=Ct[0],At=Ct[1],Tt=Object(l.useState)([]),wt=Object(m.a)(Tt,2),It=wt[0],Pt=wt[1],Lt=Object(l.useState)(!1),Rt=Object(m.a)(Lt,2),Mt=Rt[0],Jt=Rt[1],zt=Object(l.useState)([]),_t=Object(m.a)(zt,2),Ut=_t[0],Gt=_t[1],Vt=Object(l.useState)(!0),Ht=Object(m.a)(Vt,2),Kt=Ht[0],Wt=Ht[1],qt=Object(l.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Qt=Object(m.a)(qt,2),Xt=Qt[0],Yt=Qt[1];Object(l.useEffect)((function(){!e.listLoading&&e.getData(),Zt()}),[]),Object(l.useEffect)((function(){if(e.dataList.data.length){var t=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];e.dataList.data.forEach((function(e){var a={value:e._id,label:e.name+" - "+e.relation,color:"#00B8D9",isFixed:!1};t.push(a)})),Yt(t),Zt()}}),[e.dataList]);var Zt=function(){console.log("nomineeOption",Xt);var t=JSON.parse(localStorage.getItem("logInUserData"));w.a.get("/backendapi/user/assets/".concat(t._id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("authtoken"))}}).then((function(a){var l,s=a?a.data:[];s.splice(0,s.length),(null===t||void 0===t||null===(l=t.assets)||void 0===l?void 0:l.length)&&t.assets.forEach((function(t,a){if(t.id){var l,r,c="";(null===t||void 0===t||null===(l=t.nominees)||void 0===l?void 0:l.length)&&t.nominees.forEach((function(a,l){var n=e.dataList.data.filter((function(e){return e._id===a.id}));n.length&&(l===t.nominees.length-1?c+=n[0].name:c=c+n[0].name+", ")}));var u=n.a.createElement("div",null,n.a.createElement(o.a,null,null===t||void 0===t||null===(r=t.assetDetails)||void 0===r?void 0:r.map((function(e,t){return""!==e.val?n.a.createElement(i.a,{md:"5",sm:"12",key:t+e.key},n.a.createElement(p.a,null,n.a.createElement("b",null,e.key," :")," ",e.val)):""})),n.a.createElement(i.a,{md:"5",sm:"12"},n.a.createElement(p.a,null,n.a.createElement("b",null,"Nominees :")," ",c)),n.a.createElement(i.a,{md:"2",sm:"12"},n.a.createElement(p.a,null,n.a.createElement("b",null,n.a.createElement(z.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){oa(t)}})),n.a.createElement("b",null,n.a.createElement(_.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){console.log("event",t),$e(t.id),Qe(!0)}})))))),d={id:a+1,title:t.assetType,content:u};s.push(d)}})),dt(null===s||void 0===s?void 0:s.reverse())}))},$t=function(){Mt&&na(),Jt(!Mt)},ea=function(){var e=!1;Ut.forEach((function(t){t.mandatory&&!t.val.trim()&&(e=!0)})),Wt(e)},ta=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];xt(e),!0===t&&(jt(null),He(!0))},aa=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return At(!0),t.prev=1,t.next=4,e.addData(a);case 4:At(!1),ta(!1,!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),At(!1),R.b.error("Failed to add Nominee! Please retry");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),la=function(){De.current&&De.current.select.clearValue(),Fe.current&&Fe.current.select.clearValue(),Et(""),Gt([]),Pt([]),pt&&Wt(!0)},na=function(){lt(""),st(""),je.current&&je.current.select.clearValue()},oa=function(e){Wt(!0);var t=e.assetDetails,a=e.assetType,l=e.nominees;Et(a),yt(!0),we(e.id),Re(e),Gt(t),Pt(l)},ia=function(e){e?(document.getElementById("buttonLabel").classList.remove("no-display"),document.getElementById("buttonLabel").classList.add("button-text")):(document.getElementById("buttonLabel").classList.add("no-display"),document.getElementById("buttonLabel").classList.remove("button-text"))},sa=e.messages,ra=e.thumbView,ca=e.getData,ua=e.parsedFilter;return n.a.createElement("div",{className:"data-list ".concat(ra?"thumb-view":"list-view")},n.a.createElement(S.a,{handleConfirm:function(){!function(t){var a=JSON.parse(localStorage.getItem("logInUserData")),l=a.assets.findIndex((function(e){return e.id===t})),n=[];l>=0&&(a.assets[l].nominees.forEach((function(e){e.objectid=a.assets[l].id,n.push(e)})),a.assets.splice(l,1),localStorage.setItem("logInUserData",JSON.stringify(a)),w.a.post("/backendapi/adddetails",{_id:a._id,assets:Object(V.b)(JSON.stringify(a.assets)),deletednominee:n},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){R.b.warning("Deleted successfully!"),e.getData(e.parsedFilter),Zt()})).catch(),la(),na(),Wt(!0))}(Ze),Qe(!1)},isOpen:qe,closeModal:function(){return Qe(!1)}}),n.a.createElement(H.a,{show:kt,data:Ft,updateData:e.updateData,addData:aa,isLoading:Bt,handleSidebar:ta,thumbView:ra,getData:ca,dataParams:ua,addNew:Ve}),n.a.createElement("div",{className:P()("data-list-overlay",{show:kt}),onClick:function(){return ta(!1,!0)}}),n.a.createElement(o.a,null,n.a.createElement(i.a,{lg:"8",md:"6",sm:"12"},n.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},n.a.createElement(o.a,null,n.a.createElement(i.a,{sm:"12"},n.a.createElement(s.a,{activeTab:"1"},n.a.createElement(r.a,{tabId:"1"},n.a.createElement(o.a,null,n.a.createElement(R.a,null),n.a.createElement(i.a,{lg:"8",md:"6",sm:"12"},n.a.createElement(y.a,null,n.a.createElement(b.a,null,n.a.createElement(f.a,null,(null===sa||void 0===sa?void 0:sa.subHeading)?sa.subHeading:pt?"Edit Asset Details":"Add New Asset")),n.a.createElement(g.a,null,n.a.createElement(E.a,null,n.a.createElement(o.a,null,n.a.createElement(i.a,{md:"6",sm:"12"},n.a.createElement(h.a,{className:"form-label-group"},n.a.createElement(J.a,{className:"React",classNamePrefix:"select",ref:De,isDisabled:pt,value:Ce.filter((function(e){return e.value===gt})),name:"color",options:Ce,isClearable:!0,placeholder:(null===sa||void 0===sa?void 0:sa.assetOptionText)?sa.assetOptionText:"Select Asset Type",onChange:function(e){Wt(!0),lt(""),st(""),Et(e?e.value:void 0),Gt(e?Se[e.value]:{})}}),n.a.createElement(O.a,{for:"nameMulti"},(null===sa||void 0===sa?void 0:sa.assetOptionText)?sa.assetOptionText:"Select Asset Type"))),n.a.createElement(i.a,{md:"6",sm:"12"},n.a.createElement(h.a,{className:"form-label-group"},n.a.createElement(J.a,{isMulti:!0,name:"nominee",options:Xt,value:It.map((function(e){var t=Xt.filter((function(t){return t.value===e.id}));return{value:t[0].value,label:t[0].label}})),ref:Fe,className:"React",classNamePrefix:"select",placeholder:(null===sa||void 0===sa?void 0:sa.nomineeOption)?sa.nomineeOption:"Select Nominees",id:"nominee",onChange:function(e){!function(e){pt&&Wt(!1);var t=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?xt(!0):t.push({id:e.value,name:e.label,objectid:Te})})),!e&&Wt(!0),Pt(t)}(e)}}),n.a.createElement(O.a,null,(null===sa||void 0===sa?void 0:sa.nomineeOption)?sa.nomineeOption:"Select Nominees")))),n.a.createElement(o.a,null,Object.keys(Se).includes(gt)&&Ut.map((function(e,t){return n.a.createElement(i.a,{md:"6",sm:"12",key:t},n.a.createElement(h.a,{className:"form-label-group"},e.deletable&&n.a.createElement(U.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){!function(e){pt&&Wt(!1);var t=Ut.filter((function(t){return e.key!==t.key}));Gt(t)}(e)}}),n.a.createElement(k.a,{type:e.type,onKeyPress:function(t){return"number"===e.type.toLowerCase()&&Object(K.a)(t)},name:"city",id:"cityMulti",className:"input-label",placeholder:e.key,value:e.val,onChange:function(t){!function(e,t){var a=Ut,l=Ut.findIndex((function(e){return e.key===t.key}));e.length<50&&(a[l].val=e,Gt(a),_e(!ze),ea())}(t.target?t.target.value:t.value,e)}}),n.a.createElement(O.a,{for:"cityMulti",className:"dark"===G.a.theme?"dark-label":"light-label"},e.key)))}))),n.a.createElement(o.a,{style:{marginTop:"15px"}},n.a.createElement(i.a,{md:"6",sm:"12",style:{display:"flex"}},gt&&n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{color:"white",outline:!0,onClick:$t,className:"add-button",id:"addButton",onMouseEnter:function(){return ia(!0)},onMouseLeave:function(){return ia(!1)},style:{backgroundColor:"var(--warning)"}},"+"),n.a.createElement("div",{className:"label-div"},n.a.createElement("span",{id:"buttonLabel",className:"no-display"},"Add a Custom Field")))),n.a.createElement(i.a,{sm:"6"},n.a.createElement(h.a,{style:{textAlign:"right",marginBottom:"0px"}},n.a.createElement(x.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){yt(!1),la()}},pt?"Cancel":(null===sa||void 0===sa?void 0:sa.resetButton)?null===sa||void 0===sa?void 0:sa.resetButton:"Reset"),n.a.createElement(x.a.Ripple,{color:"warning",disabled:0===It.length||!gt||Kt,type:"reset",className:"button-label",onClick:function(t){pt?function(t){t.preventDefault(),yt(!1);var a=JSON.parse(localStorage.getItem("logInUserData")),l={assetType:gt,assetDetails:Ut,nominees:It,id:Te},n=a.assets.findIndex((function(e){return e.id===Te}));if(n>=0){a.assets.splice(n,1),a.assets.push(l),localStorage.setItem("logInUserData",JSON.stringify(a)),console.log("editObject",Le);var o=[];It.forEach((function(e){e.objectid=Te})),Le.nominees.forEach((function(e){-1===It.findIndex((function(t){return t.id===e.id}))&&(e.objectid=Te,o.push(e))})),console.log(o),w.a.post("/backendapi/adddetails",{_id:a._id,assets:Object(V.b)(JSON.stringify(a.assets)),nominees:It,deletednominee:o},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){R.b.success("Edited successfully!"),e.getData(e.parsedFilter),Zt()})).catch(),la(),na(),Wt(!0)}}(t):function(t){t.preventDefault();var a=JSON.parse(localStorage.getItem("logInUserData")),l={assetType:gt,assetDetails:Ut,nominees:It,id:Object(v.v4)()};It.forEach((function(e){e.objectid=l.id})),a.assets.push(l),localStorage.setItem("logInUserData",JSON.stringify(a)),w.a.post("/backendapi/adddetails",{_id:a._id,assets:Object(V.b)(JSON.stringify(a.assets)),nominees:It},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){R.b.success("Asset addedd successfully!"),la(),e.getData(e.parsedFilter),Zt()})).catch(),na(),Wt(!0)}(t)}},pt?"Update":(null===sa||void 0===sa?void 0:sa.submitButton)?null===sa||void 0===sa?void 0:sa.submitButton:"Add"))))))))),n.a.createElement(o.a,null,n.a.createElement(R.a,null),n.a.createElement(i.a,{md:"8"},n.a.createElement(A.a,{heading:(null===sa||void 0===sa?void 0:sa.textList)?null===sa||void 0===sa?void 0:sa.textList:"Assets List",collapseItems:ut,colorOption:null===sa||void 0===sa?void 0:sa.colorOption}))))))))),n.a.createElement(C.a,null)),n.a.createElement(o.a,null,n.a.createElement(i.a,{sm:"12"},n.a.createElement(N.a,{isOpen:Mt,toggle:$t,className:"modal-dialog-centered"},n.a.createElement(D.a,{toggle:$t},"Add Custum Field"),n.a.createElement(F.a,null,n.a.createElement(h.a,{className:"form-label-group"},n.a.createElement(k.a,{type:"email",name:"Email",disabled:""===gt,id:"EmailMulti",value:at,placeholder:"Enter Field Name",onChange:function(e){lt(e.target.value)}}),n.a.createElement(O.a,{for:"EmailMulti"},"Enter Field Name")),n.a.createElement(h.a,{className:"form-label-group",disabled:void 0===gt},n.a.createElement(J.a,{className:"React",ref:je,disabled:void 0===gt,classNamePrefix:"select",isClearable:!0,name:"color",options:W,placeholder:"Select Field Type...",onChange:function(e){return st(e?e.value:"")}}),n.a.createElement(O.a,{for:"nameMulti"},"Field Type"))),n.a.createElement(j.a,null,n.a.createElement(h.a,{className:"form-label-group",style:{textAlign:"right"}},n.a.createElement(x.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"mb-1 button-label",onClick:function(e){na()}},(null===sa||void 0===sa?void 0:sa.resetButton)?null===sa||void 0===sa?void 0:sa.resetButton:"Reset"),n.a.createElement(x.a.Ripple,{color:"warning",disabled:""===at||""===it,type:"reset",className:"button-label",onClick:function(e){return function(){var e=Ut,t=e.length,a="";e.findIndex((function(e){return e.key===at+it}))>=0?R.b.error("Field Already Exist! Please add new field"):("Attachments"===e[t-1].key?(a=e[t-1],e[t-1]={key:at+it,val:"",type:it,deletable:!0},e.push(a),Gt(e),lt(""),st("")):(e.push({key:at+it,val:"",type:it,deletable:!0}),Gt(e),lt(""),st("")),$t())}()}},(null===sa||void 0===sa?void 0:sa.submitButton)?null===sa||void 0===sa?void 0:sa.submitButton:"Add")))))))}));t.default=Object(L.b)((function(e){var t,a=(null===e||void 0===e?void 0:e.customizer).customizer;return{messages:null===a||void 0===a||null===(t=a.language)||void 0===t?void 0:t.Asset}}))((function(e){var t=e.messages;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"warning spacing nodisplay"},(null===t||void 0===t?void 0:t.heading)?t.heading:"Assets"),n.a.createElement(o.a,null,n.a.createElement(i.a,{sm:"12"},n.a.createElement(s.a,{activeTab:"1"},n.a.createElement(r.a,{tabId:"1"},n.a.createElement(q,{messages:t}))))))}))}}]);