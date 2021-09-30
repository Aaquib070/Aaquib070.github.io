(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[26],{646:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(20),o=t(448),r=t(449),s=t(525),c=t(526),d=t(31),u=t.n(d),m=t(50),b=t(8),v=t(557),p=t(41),y=t(622),g=t(514),f=t(521),E=t(518),h=t(446),O=t(452),N=t(450),k=t(451),C=t(447),x=t(254),j=t(499),S=t(592),L=t(456),D=t(632),I=t(7),w=t.n(I),F=t(507),A=t(515),T=t(560),B={Custom:[{key:"Liability Name",val:"",type:"Text"}],"Credit Card":[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Card Limit",val:"",type:"Number"}],Insurance:[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Policy Number *",val:"",type:"Number",mandatory:!0},{key:"Policy Amount *",val:"",type:"Number",mandatory:!0}],"Loan Amount":[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Loan Account Number *",val:"",type:"Number",mandatory:!0},{key:"Loan Amount *",val:"",type:"Number",mandatory:!0}],Notes:[{key:"Notes *",val:"",type:"textarea",mandatory:!0},{key:"Expiry Date",val:"",type:"Date"}],Ponzi:[{key:"Description *",val:"",type:"Text",mandatory:!0},{key:"Return Period *",val:"",type:"Text",mandatory:!0},{key:"Amount *",val:"",type:"Number",mandatory:!0}],Receipt:[{key:"Object Name *",val:"",type:"Text",mandatory:!0},{key:"Description *",val:"",type:"Text",mandatory:!0},{key:"Expiry",val:"",type:"Date"}],Warranty:[{key:"Object Name *",val:"",type:"Text",mandatory:!0},{key:"Warranty Period *",val:"",type:"Text",mandatory:!0},{key:"Bill Amount *",val:"",type:"Number",mandatory:!0}]},R=t(24),P=t.n(R),z=t(501),J=(t(513),t(503),t(506),t(516)),M=t(161),_=t(17),U=t(477),W=t(524),V=t(638),H=(t(508),t(260),t(520)),K=t(162),q=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0},{value:"File",label:"File",color:"#0052CC",isFixed:!0}],G=Object(i.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),{getData:J.f,addData:J.a})((function(e){var a,t,i,d,I,R,J,G,Q,X,Y,Z,$,ee,ae,te,le,ne,ie,oe,re,se,ce,de,ue,me,be,ve,pe,ye,ge,fe,Ee,he,Oe=[{value:"Credit Card",label:(null===(a=e.messages)||void 0===a||null===(t=a.colorOption)||void 0===t?void 0:t["Credit Card"])?null===(i=e.messages)||void 0===i||null===(d=i.colorOption)||void 0===d?void 0:d["Credit Card"]:"Credit Card",color:"#0052CC",isFixed:!0},{value:"Insurance",label:(null===(I=e.messages)||void 0===I||null===(R=I.colorOption)||void 0===R?void 0:R.Insurance)?null===(J=e.messages)||void 0===J||null===(G=J.colorOption)||void 0===G?void 0:G.Insurance:"Insurance",color:"#0052CC",isFixed:!0},{value:"Loan Amount",label:(null===(Q=e.messages)||void 0===Q||null===(X=Q.colorOption)||void 0===X?void 0:X["Loan Amount"])?null===(Y=e.messages)||void 0===Y||null===(Z=Y.colorOption)||void 0===Z?void 0:Z["Loan Amount"]:"Loan Amount",color:"#00B8D9",isFixed:!0},{value:"Notes",label:(null===($=e.messages)||void 0===$||null===(ee=$.colorOption)||void 0===ee?void 0:ee.Notes)?null===(ae=e.messages)||void 0===ae||null===(te=ae.colorOption)||void 0===te?void 0:te.Notes:"Notes",color:"#0052CC",isFixed:!0},{value:"Ponzi",label:(null===(le=e.messages)||void 0===le||null===(ne=le.colorOption)||void 0===ne?void 0:ne.Ponzi)?null===(ie=e.messages)||void 0===ie||null===(oe=ie.colorOption)||void 0===oe?void 0:oe.Ponzi:"Ponzi",color:"#0052CC",isFixed:!0},{value:"Receipt",label:(null===(re=e.messages)||void 0===re||null===(se=re.colorOption)||void 0===se?void 0:se.Receipt)?null===(ce=e.messages)||void 0===ce||null===(de=ce.colorOption)||void 0===de?void 0:de.Receipt:"Receipt",color:"#0052CC",isFixed:!0},{value:"Warranty",label:(null===(ue=e.messages)||void 0===ue||null===(me=ue.colorOption)||void 0===me?void 0:me.Warranty)?null===(be=e.messages)||void 0===be||null===(ve=be.colorOption)||void 0===ve?void 0:ve.Warranty:"Warranty",color:"#0052CC",isFixed:!0},{value:"Custom",label:(null===(pe=e.messages)||void 0===pe||null===(ye=pe.colorOption)||void 0===ye?void 0:ye.Custom)?null===(ge=e.messages)||void 0===ge||null===(fe=ge.colorOption)||void 0===fe?void 0:fe.Custom:"Custom",color:"#0052CC",isFixed:!0}],Ne=(null===(Ee=e.messages)||void 0===Ee?void 0:Ee.liabilityOption)?null===(he=e.messages)||void 0===he?void 0:he.liabilityOption:JSON.parse(JSON.stringify(B)),ke=n.a.createRef(),Ce=n.a.createRef(),xe=n.a.createRef(),je=Object(l.useState)(!1),Se=Object(b.a)(je,2),Le=Se[0],De=Se[1],Ie=Object(l.useState)(!1),we=Object(b.a)(Ie,2),Fe=we[0],Ae=we[1],Te=Object(l.useState)(null),Be=Object(b.a)(Te,2),Re=Be[0],Pe=Be[1],ze=Object(l.useState)(""),Je=Object(b.a)(ze,2),Me=Je[0],_e=Je[1],Ue=Object(l.useState)(""),We=Object(b.a)(Ue,2),Ve=We[0],He=We[1],Ke=Object(l.useState)(!0),qe=Object(b.a)(Ke,2),Ge=qe[0],Qe=qe[1],Xe=Object(l.useState)([]),Ye=Object(b.a)(Xe,2),Ze=Ye[0],$e=Ye[1],ea=Object(l.useState)(""),aa=Object(b.a)(ea,2),ta=aa[0],la=aa[1],na=Object(l.useState)(!1),ia=Object(b.a)(na,2),oa=ia[0],ra=ia[1],sa=Object(l.useState)(!1),ca=Object(b.a)(sa,2),da=ca[0],ua=ca[1],ma=Object(l.useState)(null),ba=Object(b.a)(ma,2),va=ba[0],pa=ba[1],ya=Object(l.useState)(!1),ga=Object(b.a)(ya,2),fa=ga[0],Ea=ga[1],ha=Object(l.useState)([]),Oa=Object(b.a)(ha,2),Na=Oa[0],ka=Oa[1],Ca=Object(l.useState)(!1),xa=Object(b.a)(Ca,2),ja=xa[0],Sa=xa[1],La=Object(l.useState)([]),Da=Object(b.a)(La,2),Ia=Da[0],wa=Da[1],Fa=Object(l.useState)(!1),Aa=Object(b.a)(Fa,2),Ta=Aa[0],Ba=Aa[1],Ra=Object(l.useState)(""),Pa=Object(b.a)(Ra,2),za=Pa[0],Ja=Pa[1],Ma=Object(l.useState)(!0),_a=Object(b.a)(Ma,2),Ua=_a[0],Wa=_a[1],Va=Object(l.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Ha=Object(b.a)(Va,2),Ka=Ha[0],qa=Ha[1];Object(l.useEffect)((function(){if(e.dataList.data.length){var a=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];e.dataList.data.forEach((function(e){var t={value:e._id,label:e.name+" - "+e.relation,color:"#00B8D9",isFixed:!1};a.push(t)})),qa(a),Xa()}}),[e.dataList]),Object(l.useEffect)((function(){!e.listLoading&&e.getData(),Xa()}),[]);var Ga=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ra(e),!0===a&&(pa(null),ua(!0))},Qa=function(){var a=Object(m.a)(u.a.mark((function a(t){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return Ea(!0),a.prev=1,a.next=4,e.addData(t);case 4:Ea(!1),Ga(!1,!0),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),Ea(!1),z.b.error("Add Nominee Failed! Please contact admin");case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),Xa=function(){var a=JSON.parse(localStorage.getItem("logInUserData"));P.a.get("/backendapi/user/liabilities/"+a._id,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){var l,i=t?t.data:[];i.splice(0,i.length),(null===a||void 0===a||null===(l=a.liabilities)||void 0===l?void 0:l.length)&&a.liabilities.forEach((function(a,t){if(a.id){var l,s="";(null===a||void 0===a||null===(l=a.nominees)||void 0===l?void 0:l.length)&&a.nominees.forEach((function(t,l){var n=e.dataList.data.filter((function(e){return e._id===t.id}));n.length&&(l===a.nominees.length-1?s+=n[0].name:s=s+n[0].name+", ")}));var c=n.a.createElement("div",null,n.a.createElement(o.a,null,a.liabilityDetails.map((function(e,a){return""!==e.val?n.a.createElement(r.a,{md:"5",sm:"12",key:a+e.key},n.a.createElement(y.a,null,n.a.createElement("b",null,e.key," :")," ",Ge?e.val:"***********")):""})),n.a.createElement(r.a,{md:"5",sm:"12"},n.a.createElement(y.a,null,n.a.createElement("b",null,"Nominees :")," ",Ge?s:"*******************")),n.a.createElement(r.a,{md:"2",sm:"12"},n.a.createElement(y.a,null,n.a.createElement("b",null,n.a.createElement(U.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){at(a)}})),n.a.createElement("b",null,n.a.createElement(W.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){console.log("event",a),Pe(a.id),De(!0)}})))))),d={id:t+1,title:a.liabilityType,content:c};i.push(d)}})),$e(null===i||void 0===i?void 0:i.reverse())}))},Ya=function(){Sa(!ja)},Za=function(e,a){var t=Ia,l=t.findIndex((function(e){return e.key===a.key}));e.length<50&&(t[l].val=e,wa(t),function(){var e=!1;Ia.forEach((function(a){a.mandatory&&!a.val&&(e=!0)})),Wa(e)}(),Ae(!Fe))},$a=function(){ke.current.select.clearValue(),Ce.current.select.clearValue(),la(""),wa([]),ka([]),Ta&&Wa(!0)},et=function(){_e(""),He(""),xe.current&&xe.current.select.clearValue()},at=function(e){var a=e.liabilityDetails,t=e.liabilityType,l=e.nominees;la(t),Ba(!0),Ja(e.id),wa(a),ka(l)},tt=function(e){e?(document.getElementById("buttonLabel").classList.remove("no-display"),document.getElementById("buttonLabel").classList.add("button-text")):(document.getElementById("buttonLabel").classList.add("no-display"),document.getElementById("buttonLabel").classList.remove("button-text"))},lt=e.messages,nt=e.thumbView,it=e.getData,ot=e.parsedFilter;return n.a.createElement("div",{className:"data-list ".concat(nt?"thumb-view":"list-view")},n.a.createElement(A.a,{modalMessage:"Are you sure you want to delete this record?",handleConfirm:function(){!function(a){var t=JSON.parse(localStorage.getItem("logInUserData")),l=t.liabilities.findIndex((function(e){return e.id===a})),n=[];l>=0&&(t.liabilities[l].nominees.forEach((function(e){e.objectid=t.liabilities[l].id,n.push(e)})),t.liabilities.splice(l,1),P.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(p.b)(JSON.stringify(t.liabilities)),deletednominee:n},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){e.getData(e.parsedFilter),Xa()})).catch(),localStorage.setItem("logInUserData",JSON.stringify(t)),z.b.warning("Liability deleted successfully!"),$a(),et(),Wa(!0))}(Re),De(!1)},isOpen:Le,closeModal:function(){return De(!1)}}),n.a.createElement(H.a,{show:oa,data:va,updateData:e.updateData,addData:Qa,isLoading:fa,handleSidebar:Ga,thumbView:nt,getData:it,dataParams:ot,addNew:da}),n.a.createElement("div",{className:w()("data-list-overlay",{show:oa}),onClick:function(){return Ga(!1,!0)}}),n.a.createElement(o.a,null,n.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},n.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},n.a.createElement(o.a,null,n.a.createElement(r.a,{sm:"12"},n.a.createElement(s.a,{activeTab:"1"},n.a.createElement(c.a,{tabId:"1"},n.a.createElement(o.a,null,n.a.createElement(z.a,null),n.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},n.a.createElement(g.a,null,n.a.createElement(f.a,null,n.a.createElement(E.a,null,(null===lt||void 0===lt?void 0:lt.subHeading)?lt.subHeading:Ta?"Edit Liability Details":"Add New Liability")),n.a.createElement(h.a,null,n.a.createElement(O.a,null,n.a.createElement(o.a,null,n.a.createElement(r.a,{md:"6",sm:"12"},n.a.createElement(N.a,{className:"form-label-group"},n.a.createElement(M.a,{className:"React",classNamePrefix:"select",ref:ke,name:"color",options:Oe,isClearable:!0,isDisabled:Ta,value:Oe.filter((function(e){return e.value===ta})),placeholder:(null===lt||void 0===lt?void 0:lt.liabilityOptionText)?null===lt||void 0===lt?void 0:lt.liabilityOptionText:"Select Liability Type...",onChange:function(e){!function(e){Wa(!0),_e(""),He(""),la(e?e.value:void 0),wa(e?Ne[e.value]:{})}(e)}}),n.a.createElement(k.a,{for:"nameMulti"},"Liability Type"))),n.a.createElement(r.a,{md:"6",sm:"12"},n.a.createElement(N.a,{className:"form-label-group"},n.a.createElement(M.a,{isMulti:!0,name:"nominee",options:Ka,value:Na.map((function(e){var a=Ka.filter((function(a){return a.value===e.id}));return{value:a[0].value,label:a[0].label}})),ref:Ce,className:"React",classNamePrefix:"select",placeholder:(null===lt||void 0===lt?void 0:lt.nomineeOption)?null===lt||void 0===lt?void 0:lt.nomineeOption:"Select Nominees...",id:"nominee",onChange:function(e){!function(e){Ta&&Wa(!1);var a=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?ra(!0):a.push({id:e.value,name:e.label})})),!e&&Wa(!0),ka(a)}(e)}}),n.a.createElement(k.a,null,"Nominee")))),n.a.createElement(o.a,null,Object.keys(Ne).includes(ta)&&Ia.length&&Ia.map((function(e,a){return n.a.createElement(r.a,{md:"6",sm:"12",key:a},n.a.createElement(N.a,{className:"form-label-group"},e.deletable&&n.a.createElement(V.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){!function(e){Ta&&Wa(!1);var a=Ia.filter((function(a){return e.key!==a.key}));wa(a)}(e)}}),n.a.createElement(C.a,{type:e.type,onKeyPress:function(a){return"number"===e.type&&Object(K.a)(a)},name:e.key,id:e.id,className:"input-label",placeholder:e.key,value:e.val,onChange:function(a){Za(a.target?a.target.value:a.value,e)}}),n.a.createElement(k.a,{for:e.id,className:"dark"===_.a.theme?"dark-label":"light-label"},e.key)))}))),n.a.createElement(o.a,{style:{marginTop:"15px"}},n.a.createElement(r.a,{md:"6",sm:"12",style:{display:"flex"}},ta&&n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{color:"white",outline:!0,onClick:Ya,className:"add-button",id:"addButton",onMouseEnter:function(){return tt(!0)},onMouseLeave:function(){return tt(!1)},style:{backgroundColor:"var(--warning)"}},"+"),n.a.createElement("div",{className:"label-div"},n.a.createElement("span",{id:"buttonLabel",className:"no-display"},"Add a Custom Field")))),n.a.createElement(r.a,{sm:"6"},n.a.createElement(N.a,{className:"action-right",style:{textAlign:"right",marginBottom:"0px"}},n.a.createElement(x.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){Ba(!1),$a()}},Ta?"Cancel":(null===lt||void 0===lt?void 0:lt.resetButton)?null===lt||void 0===lt?void 0:lt.resetButton:"Reset"),n.a.createElement(x.a.Ripple,{color:"warning",type:"submit",className:"button-label",disabled:0===Na.length||!ta||Ua,onClick:function(a){Ta?function(a){a.preventDefault(),Ba(!1);var t=JSON.parse(localStorage.getItem("logInUserData")),l={liabilityType:ta,liabilityDetails:Ia,nominees:Na,id:za},n=t.liabilities.findIndex((function(e){return e.id===za}));n>=0&&(t.liabilities.splice(n,1),t.liabilities.push(l),localStorage.setItem("logInUserData",JSON.stringify(t)),P.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(p.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){z.b.success("Edited successfully!"),e.getData(e.parsedFilter),Xa()})).catch(),$a(),et(),Wa(!0))}(a):function(a){a.preventDefault();var t=JSON.parse(localStorage.getItem("logInUserData")),l={liabilityType:ta,liabilityDetails:Ia,nominees:Na,id:Object(v.v4)()};Na.forEach((function(e){e.objectid=l.id})),t.liabilities.push(l),P.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(p.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){e.getData(e.parsedFilter),Xa()})).catch(),localStorage.setItem("logInUserData",JSON.stringify(t)),z.b.success("Liability addedd successfully!"),$a(),et(),Wa(!0)}(a)}},Ta?"Update":(null===lt||void 0===lt?void 0:lt.submitButton)?null===lt||void 0===lt?void 0:lt.submitButton:"Add"))))))))),n.a.createElement(o.a,null,n.a.createElement(z.a,null),n.a.createElement(r.a,{md:"8"},n.a.createElement(T.a,{heading:(null===lt||void 0===lt?void 0:lt.subHeading)?lt.subHeading:"Liabilities List",collapseItems:Ze,show:function(){Qe(!Ge),Xa()},assetShow:Ge}))))))))),n.a.createElement(F.a,null)," "),n.a.createElement(o.a,null,n.a.createElement(r.a,{sm:"12"},n.a.createElement(j.a,{isOpen:ja,toggle:Ya,className:"modal-dialog-centered"},n.a.createElement(S.a,{toggle:Ya},"Add Custom Field"),n.a.createElement(L.a,null,n.a.createElement(N.a,{className:"form-label-group"},n.a.createElement(C.a,{type:"email",name:"Email",disabled:""===ta,id:"EmailMulti",value:Me,placeholder:"Enter Field Name",onChange:function(e){_e(e.target.value)}}),n.a.createElement(k.a,{for:"EmailMulti"},"Enter Field Name")),n.a.createElement(N.a,{className:"form-label-group",disabled:void 0===ta},n.a.createElement(M.a,{className:"React",ref:xe,disabled:void 0===ta,classNamePrefix:"select",isClearable:!0,name:"color",options:q,placeholder:"Select Field Type...",onChange:function(e){return He(e?e.value:" ")}}),n.a.createElement(k.a,{for:"nameMulti"},"Field Type"))),n.a.createElement(D.a,null,n.a.createElement(N.a,{className:"form-label-group"},n.a.createElement(x.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"mb-1 button-label",disabled:void 0===ta,onClick:function(e){et()}},"Reset")," ",n.a.createElement(x.a.Ripple,{color:"warning",disabled:void 0===ta,type:"submit",className:"button-label",onClick:function(e){return function(){if(""!==ta){var e=Ia,a=e.length,t="";if(e.findIndex((function(e){return e.key===Me+Ve}))>=0)return void z.b.error("Field Already Exist! Please add new field");"Attachments"===Ia[a-1].key?(t=e[a-1],e[a-1]={key:Me+Ve,val:"",type:Ve,deletable:!0},e.push(t),wa(e),_e(""),He("")):(e.push({key:Me+Ve,val:"",type:Ve,deletable:!0}),wa(e),_e(""),He("")),Ya()}}()}},"Add")))))))}));a.default=Object(i.b)((function(e){var a,t=(null===e||void 0===e?void 0:e.customizer).customizer;return{messages:null===t||void 0===t||null===(a=t.language)||void 0===a?void 0:a.Liability}}))((function(e){var a=e.messages;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"warning spacing nodisplay"},(null===a||void 0===a?void 0:a.heading)?a.heading:"Liabilties"),n.a.createElement(o.a,null,n.a.createElement(r.a,{sm:"12"},n.a.createElement(s.a,{activeTab:"1"},n.a.createElement(c.a,{tabId:"1"},n.a.createElement(G,{messages:a}))))))}))}}]);