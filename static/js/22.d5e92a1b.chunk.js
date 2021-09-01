(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[22],{474:function(e,t,a){},484:function(e,t,a){},488:function(e,t,a){"use strict";a.d(t,"f",(function(){return m})),a.d(t,"g",(function(){return b})),a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return v})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return f})),a.d(t,"h",(function(){return E}));var n=a(36),r=a.n(n),l=a(55),o=a(500),i=a(28),c=a.n(i),d=a(471),s=a(34);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var u=function(e){var t,a=Object(o.a)(null===e||void 0===e?void 0:e.data);try{for(a.s();!(t=a.n()).done;){var n=t.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(s.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(s.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(s.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(s.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(s.a)(null===n||void 0===n?void 0:n.desc))}}catch(r){a.e(r)}finally{a.f()}return e},m=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_ALL_DATA_LOADING",data:!0}),t.next=4,c.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"GET_ALL_DATA_LOADING",data:!1});var n,r=Object(o.a)(null===t||void 0===t?void 0:t.data);try{for(r.s();!(n=r.n()).done;){var l=n.value;l.nomineeId=(null===l||void 0===l?void 0:l.nomineeId)&&Object(s.a)(l.nomineeId,!0),l.name=(null===l||void 0===l?void 0:l.name)&&Object(s.a)(l.name,!0),l.relation=(null===l||void 0===l?void 0:l.relation)&&Object(s.a)(l.relation,!0),l.email=(null===l||void 0===l?void 0:l.email)&&Object(s.a)(l.email,!0),l.primaryContact=(null===l||void 0===l?void 0:l.primaryContact)&&Object(s.a)(l.primaryContact,!0),l.secondaryContact=(null===l||void 0===l?void 0:l.secondaryContact)&&Object(s.a)(l.secondaryContact,!0),l.address=(null===l||void 0===l?void 0:l.address)&&Object(s.a)(l.address,!0)}}catch(i){r.e(i)}finally{r.f()}a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_SPEND_DATA_LOADING",data:!0}),t.next=4,c.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){var n;console.log("getSpendData"),a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===(n=u(t))||void 0===n?void 0:n.data,totalPages:t.length,params:e})})).catch((function(e){console.log(e),a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(t){return t({type:"FILTER_SPEND_DATA",value:e})}},v=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},g=function(e){return function(t){console.log("DELETE DATA :"),c.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},h=function(e){return function(t){console.log("DELETE DATA :"),c.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},f=function(e){var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(s.b)(e.name,!0),relation:Object(s.b)(e.relation,!0),email:Object(s.b)(e.email,!0),primaryContact:Object(s.b)(e.contact1,!0),secondaryContact:Object(s.b)(e.contact2,!0),address:Object(s.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(s.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){d.b.success("Nominee Added Successfully"),a(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a={_id:e._id,usage:e.usage?e.usage:"Unused",userId:t._id,name:Object(s.b)(e.name,!0),relation:Object(s.b)(e.relation,!0),email:Object(s.b)(e.email,!0),primaryContact:Object(s.b)(e.contact1,!0),secondaryContact:Object(s.b)(e.contact2,!0),address:Object(s.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(s.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/update",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){d.b.success("Nominee Updated Successfully"),t(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},541:function(e,t,a){},669:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(493),o=a(494),i=a(7),c=a(34),d=a(470),s=a(421),u=a(492),m=a(471),b=a(499),p=a.n(b),v=a(5),g=a.n(v),h=a(447),f=a(448),E=a(517),O=a(467),j=a(18),S=a(145),D=a(488),y=(a(486),a(474),a(420)),w=a(422),N=a(230),k=a(393),I=a(104),A=a.n(I),x=a(424),C=a(15),L=function(e){var t=Object(n.useState)("Cigretes"),a=Object(i.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)("other"),d=Object(i.a)(c,2),u=d[0],b=d[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),h=v[0],f=v[1],E=Object(n.useState)(""),O=Object(i.a)(E,2),j=O[0],S=O[1],D=Object(n.useState)(""),I=Object(i.a)(D,2),L=I[0],_=I[1],F=Object(n.useState)(""),T=Object(i.a)(F,2),z=T[0],P=T[1],U=Object(n.useState)(""),R=Object(i.a)(U,2),B=R[0],G=R[1],V=Object(n.useState)(!1),J=Object(i.a)(V,2),W=J[0],H=J[1],M=Object(n.useState)(""),q=Object(i.a)(M,2),K=q[0],Y=q[1],Q=Object(n.useState)(""),X=Object(i.a)(Q,2),Z=X[0],$=X[1],ee=Object(n.useState)(""),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),le=Object(i.a)(re,2),oe=le[0],ie=le[1],ce=Object(n.useState)(""),de=Object(i.a)(ce,2),se=de[0],ue=de[1],me=Object(n.useState)(""),be=Object(i.a)(me,2),pe=be[0],ve=be[1],ge=function(){P(""),G(""),o("Cigretes"),b(""),f(""),S(""),_("")},he=function(){ue(""),ne(""),ie(""),Y(""),ve("")};Object(n.useEffect)((function(){if(e.data){var t=e.data,a=t.id,n=t.name,r=t.relation,l=t.address,i=t.date,c=t.primaryContact;he(),P(a),G(n),o(r),"Cigretes"!==r&&"Drink"!==r&&"Fees"!==r&&"Fuel"!==r&&"Groceries"!==r&&"Party"!==r&&"Rent"!==r&&"Snacks"!==r&&"Travel"!==r&&(o("others"),b(r)),S(l),f(i),_(c)}e.data&&!W||(ge(),he()),H(!1)}),[e.data]);var fe=function(){return ue("Enter Valid Item")},Ee=function(){return ne("Enter Valid Description")},Oe=function(){return ie("Enter Valid Price")},je=function(){return $("Enter Valid Label")},Se=function(){return Y("Enter Valid Label")},De=function(){return ve("Enter Valid date")},ye=function(e){var t=e.target.name,a=e.target.value;switch(t){case"item":G(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ue("");break;case"desc":S(a),a&&a.trim()&&ne("");break;case"date":f(a),a&&a.trim()&&ve("");break;case"price":_(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ie("");break;case"label":o(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&$("");break;case"otherLabel":b(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&Y("")}},we=function(e){var t=e.target.name,a=e.target.value;switch(t){case"item":(null===a||void 0===a?void 0:a.length)&&a.trim()?ue(""):fe();break;case"desc":a&&a.trim()?ne(""):Ee();break;case"price":(null===a||void 0===a?void 0:a.length)&&a.trim()?ie(""):Oe();break;case"date":(null===a||void 0===a?void 0:a.length)&&a.trim()?ve(""):De();break;case"label":(null===a||void 0===a?void 0:a.length)&&a.trim()?$(""):je();break;case"otherLabel":(null===a||void 0===a?void 0:a.length)&&a.trim()?Y(""):Se()}},Ne=function(){if(!(null===B||void 0===B?void 0:B.length)&&fe(),!(null===h||void 0===h?void 0:h.length)&&De(),!(null===j||void 0===j?void 0:j.length)&&Ee(),!(null===L||void 0===L?void 0:L.length)&&Oe(),!(null===l||void 0===l?void 0:l.length)&&je(),"others"===l&&!(null===u||void 0===u?void 0:u.length)&&Se(),se||!(null===B||void 0===B?void 0:B.length)||Z||!(null===l||void 0===l?void 0:l.length)||K||"others"===l&&!(null===u||void 0===u?void 0:u.length)||ae||!(null===j||void 0===j?void 0:j.length)||oe||!(null===L||void 0===L?void 0:L.length)||pe||!(null===h||void 0===h?void 0:h.length))m.b.error("Kindly Fill Mandatory fields");else if(e.isLoading)null!==e.data?m.b.warning("Updating still in process"):m.b.warning("Adding Spend in process");else{var t={relation:null===l||void 0===l?void 0:l.trim(),relation1:null===u||void 0===u?void 0:u.trim(),date:null===h||void 0===h?void 0:h.trim(),address:null===j||void 0===j?void 0:j.trim(),contact1:null===L||void 0===L?void 0:L.trim(),_id:null===z||void 0===z?void 0:z.trim(),name:null===B||void 0===B?void 0:B.trim()};null!==e.data?(t._id=e.data._id,t.usage=e.data.usage,e.updateData(t)):(H(!0),e.addData(t),ge(),he())}},ke=e.show,Ie=e.handleSidebar,Ae=e.data;return r.a.createElement("div",{className:g()("data-list-sidebar",{show:ke})},r.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},r.a.createElement("h4",null,null!==Ae?"UPDATE SPEND DETAILS":"ADD NEW SPEND"),r.a.createElement(k.a,{size:20,onClick:function(){Ie(!1,!0),ge(),he()}})),r.a.createElement(A.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},r.a.createElement(y.a,{className:"form-label-group"},r.a.createElement(s.a,{className:"input-label",type:"text",name:"item",value:B,placeholder:"Item",id:"data-name",onChange:ye,onBlur:we,style:{borderColor:se?"red":""}}),r.a.createElement(w.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Item"),se&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},se)),r.a.createElement(y.a,null,r.a.createElement(s.a,{type:"select",id:"data-category",value:l,name:"label",onChange:ye,onBlur:we},r.a.createElement("option",null,"Cigretes"),r.a.createElement("option",null,"Drink"),r.a.createElement("option",null,"Fees"),r.a.createElement("option",null,"Fuel"),r.a.createElement("option",null,"Groceries"),r.a.createElement("option",null,"Party"),r.a.createElement("option",null,"Rent"),r.a.createElement("option",null,"Snacks"),r.a.createElement("option",null,"Travel"),r.a.createElement("option",null,"others")),r.a.createElement(w.a,{className:"dark"===C.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Label *")),"others"===l&&r.a.createElement(y.a,null,r.a.createElement(s.a,{className:"input-label",type:"text",value:u,name:"otherLabel",placeholder:"Label Name",id:"data-name",onChange:ye,onBlur:we,style:{borderColor:K?"red":""}}),K&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},K)),r.a.createElement(y.a,{className:"form-label-group"},r.a.createElement(s.a,{className:"input-label",type:"date",value:h,name:"date",placeholder:"Enter Date",id:"data-name",onChange:ye,onBlur:we,style:{borderColor:pe?"red":""}}),r.a.createElement(w.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Date *"),pe&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},pe)),r.a.createElement(y.a,{className:"form-label-group"},r.a.createElement(s.a,{className:"input-label",type:"number",value:L,id:"data-price",name:"price",placeholder:"Enter spend amount",onChange:ye,onBlur:we,style:{borderColor:oe?"red":""}}),r.a.createElement(w.a,{for:"data-price",className:"dark"===C.a.theme?"dark-label":"light-label"},"Amount *"),oe&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},oe)),r.a.createElement(y.a,{className:"form-label-group"},r.a.createElement(s.a,{className:"input-label ",type:"textarea",value:j,name:"desc",placeholder:"Description",id:"data-name",onChange:ye,onBlur:we,style:{borderColor:ae?"red":"",height:"115px"}}),r.a.createElement(w.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Description *"),ae&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ae))),r.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},r.a.createElement(N.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Ie(!1,!0),ge(),he()}},"Cancel"),r.a.createElement(N.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return Ne()}},e.isLoading&&r.a.createElement(x.a,{color:"danger",size:"sm"})," ",null!==Ae?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))},_=a(28),F=a.n(_);a(541),a(484);F.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var T={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},z=function(e){return r.a.createElement("div",{className:"data-list-action"},window.screen.width>500?r.a.createElement(h.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){return e.currentData(e.row)}}):r.a.createElement(f.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){return e.currentData(e.row)}}))},P=function(e){return r.a.createElement("div",{className:"data-list-action"},r.a.createElement(E.a,{style:{cursor:"pointer"},size:window.screen.width<500?13:20,onClick:function(){return e.setRow()}}))},U=function(e){return r.a.createElement("div",{className:"data-list-header d-flex justify-content-between"},r.a.createElement("div",{className:"actions-left d-flex"},r.a.createElement(d.a,{color:"white",className:"sort-dropdown mx-50",style:{height:"75%",backgroundColor:"var(--warning)",fontWeight:"bold"},outline:!0,onClick:function(){return e.handleSidebar(!0,!0)}},r.a.createElement("span",{className:"align-middle"},"Add"))),r.a.createElement("div",{className:"actions-right d-flex"},r.a.createElement("div",{className:"filter-section"},r.a.createElement(s.a,{type:"text",style:{height:"75%",borderRadius:"5rem",fontSize:"1rem"},onChange:function(t){return e.handleFilter(t)},placeholder:"Find",className:"placeholder"}))))},R=[{when:function(e){return new Date(e.date)<new Date},style:{backgroundColor:"#adadad",color:""}}],B=Object(j.b)((function(e){var t=e.dataList.data;return t.map((function(e){var t,a=null===e||void 0===e||null===(t=e.date)||void 0===t?void 0:t.split("T");return e.date=null===a||void 0===a?void 0:a[0],e})),{dataList:e.dataList,listLoading:e.dataList.spendLoading,data:t}}),(function(e){return{deleteSpendData:function(t){return e(Object(D.c)(t))},getSpendData:function(t){return e(Object(D.g)(t))},addData:function(t){return e(Object(D.a)(t))},updateData:function(t){return e(Object(D.h)(t))},filterSpendData:function(t){return e(Object(D.e)(t))}}}))((function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],d=Object(n.useState)(!1),s=Object(i.a)(d,2),b=s[0],v=s[1],h=Object(n.useState)(""),f=Object(i.a)(h,2),E=f[0],j=f[1],D=Object(n.useState)([]),y=Object(i.a)(D,2),w=y[0],N=y[1],k=Object(n.useState)(""),I=Object(i.a)(k,2),A=I[0],x=I[1],C=Object(n.useState)(4),_=Object(i.a)(C,2),B=_[0],G=_[1],V=Object(n.useState)(!1),J=Object(i.a)(V,2),W=J[0],H=J[1],M=Object(n.useState)(null),q=Object(i.a)(M,2),K=q[0],Y=q[1],Q=Object(n.useState)(0),X=Object(i.a)(Q,2),Z=X[0],$=X[1],ee=Object(n.useState)([]),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),le=Object(i.a)(re,2),oe=le[0],ie=le[1],ce=Object(n.useState)(!1),de=Object(i.a)(ce,2),se=de[0],ue=de[1],me=[{name:"Edit",cell:function(t){return r.a.createElement(z,{row:t,getSpendData:e.getSpendData,parsedFilter:e.parsedFilter,currentData:ve})}},{name:"Item",selector:"item",sortable:!0,minWidth:"200px",cell:function(e){return r.a.createElement("p",{title:e.item,className:"text-truncate text-bold-500 mb-0"},e.item)}},{name:"Description",selector:"desc",minWidth:"150px",sortable:!0},{name:"Label",selector:"label",sortable:!0},{name:"Date",minWidth:"200px",selector:"date",sortable:!0},{name:"Amount",selector:"amount",minWidth:"150px",sortable:!0},{name:"Delete",cell:function(t){return r.a.createElement(P,{row:t,setRow:function(){j(t),v(!0)},getSpendData:e.getSpendData,parsedFilter:e.parsedFilter})}}],be=[{name:"Info",width:"50px",cell:function(t){return r.a.createElement(z,{row:t,getData:e.getSpendData,parsedFilter:e.parsedFilter,currentData:ve})}},{name:"Item",selector:"item",sortable:!0,minWidth:"50px",cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.item,className:"text-truncate text-bold-500 mb-0"},e.item)}},{name:"Amount",selector:"amount",maxWidth:"50px",sortable:!0,cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.amount,className:"text-truncate text-bold-500 mb-0"},e.amount)}},{name:"Trash",width:"50px",cell:function(t){return r.a.createElement(P,{row:t,getSpendData:e.getSpendData,parsedFilter:e.parsedFilter,setRow:function(){v(!0),j(t)}})}}];Object(n.useEffect)((function(){var t;(null===e||void 0===e?void 0:e.data)&&(o(null===e||void 0===e?void 0:e.data),N(e.dataList.allData),G(parseInt(null===(t=e.parsedFilter)||void 0===t?void 0:t.perPage)),$(e.dataList.totalRecords),ne(e.dataList.sortIndex))}),[e.data]),Object(n.useEffect)((function(){e.getSpendData(e.parsedFilter)}),[]);var pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];H(e),!0===t&&(Y(null),ie(!0))},ve=function(e){e.name=e.item,e.relation1=e.label,e.relation=e.label,e.address=e.desc,e.primaryContact=e.amount,Y(e),pe(!0)};return e.listLoading?r.a.createElement("div",{className:"fallback-spinner vh-100"},r.a.createElement(S.a,{color:"danger",size:"sm"})):r.a.createElement("div",{className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},r.a.createElement(u.a,{handleConfirm:function(){e.deleteSpendData(E),e.getSpendData(e.parsedFilter),v(!1)},isOpen:b,closeModal:function(){return v(!1)}}),r.a.createElement(p.a,{width:"200",columns:window.screen.width<500?be:me,data:A.length?l:w,noHeader:!0,subHeader:!0,selectableRows:(window.screen.width,!1),responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,conditionalRowStyles:R,customStyles:T,subHeaderComponent:r.a.createElement(U,{handleSidebar:pe,handleFilter:function(t){x(t.target.value),e.filterSpendData(t.target.value)},handleRowsPerPage:function(e){},rowsPerPage:B,total:Z,index:ae}),sortIcon:r.a.createElement(O.a,null)}),r.a.createElement(L,{show:W,data:K,updateData:function(t){if(""===t.name||""===t.relation1&&"others"===t.relation||""===t.relation||""===t.email||""===t.date||""===t.contact1||""===t.address)m.b.error("Please Fill All Mandatory Details");else{ue(!0),console.log("aaquib",t);var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},n={_id:t._id,userId:a._id,item:Object(c.b)(t.name),label:Object(c.b)(t.relation1),date:t.date,amount:Object(c.b)(t.contact1),desc:Object(c.b)(t.address)};F.a.post("/backendapi/spend/update",n,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){ue(!1),m.b.success("Spend Updated Successfully"),pe(!1,!0),e.getSpendData(e.parsedFilter)})).catch((function(e){ue(!1),m.b.error("Add Nominee Failed! Please contact admin")})),console.log("aaquib",n)}},addData:function(t){if(""===t.name||""===t.relation1&&"others"===t.relation||""===t.relation||""===t.email||""===t.date||""===t.contact1||""===t.address)m.b.error("Please Fill All Mandatory Details");else{ue(!0),console.log("aaquib",t);var a={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,item:Object(c.b)(t.name),label:Object(c.b)(t.relation),date:t.date,amount:Object(c.b)(t.contact1),desc:Object(c.b)(t.address)};"others"===t.relation&&t.relation1&&(a.relation=Object(c.b)(t.relation1,!0)),F.a.post("/backendapi/spend/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){ue(!1),m.b.success("Spend Added Successfully"),pe(!1,!0),e.getSpendData(e.parsedFilter)})).catch((function(e){ue(!1),m.b.error("Add Spend Failed! Please contact admin")}))}},isLoading:se,handleSidebar:pe,thumbView:e.thumbView,getSpendData:e.getSpendData,dataParams:e.parsedFilter,addNew:oe}),r.a.createElement("div",{className:g()("data-list-overlay",{show:W}),onClick:function(){return pe(!1,!0)}}))})),G=a(607),V=a.n(G);t.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"warning spacing nodisplay"},"Daily Spends"),r.a.createElement(l.a,null,r.a.createElement(m.a,null),r.a.createElement(o.a,{sm:"12"},r.a.createElement(B,{parsedFilter:V.a.parse(e.location.search)}))))}}}]);
//# sourceMappingURL=22.d5e92a1b.chunk.js.map