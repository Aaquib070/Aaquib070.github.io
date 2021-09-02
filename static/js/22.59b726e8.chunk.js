(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[22],{492:function(e,t,a){},502:function(e,t,a){},506:function(e,t,a){"use strict";a.d(t,"f",(function(){return m})),a.d(t,"g",(function(){return b})),a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return v})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return g})),a.d(t,"a",(function(){return h})),a.d(t,"h",(function(){return E}));var n=a(36),r=a.n(n),l=a(55),o=a(519),i=a(28),c=a.n(i),d=a(489),s=a(34);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var u=function(e){var t,a=Object(o.a)(null===e||void 0===e?void 0:e.data);try{for(a.s();!(t=a.n()).done;){var n=t.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(s.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(s.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(s.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(s.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(s.a)(null===n||void 0===n?void 0:n.desc))}}catch(r){a.e(r)}finally{a.f()}return e},m=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_ALL_DATA_LOADING",data:!0}),t.next=4,c.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"GET_ALL_DATA_LOADING",data:!1});var n,r=Object(o.a)(null===t||void 0===t?void 0:t.data);try{for(r.s();!(n=r.n()).done;){var l=n.value;l.nomineeId=(null===l||void 0===l?void 0:l.nomineeId)&&Object(s.a)(l.nomineeId,!0),l.name=(null===l||void 0===l?void 0:l.name)&&Object(s.a)(l.name,!0),l.relation=(null===l||void 0===l?void 0:l.relation)&&Object(s.a)(l.relation,!0),l.email=(null===l||void 0===l?void 0:l.email)&&Object(s.a)(l.email,!0),l.primaryContact=(null===l||void 0===l?void 0:l.primaryContact)&&Object(s.a)(l.primaryContact,!0),l.secondaryContact=(null===l||void 0===l?void 0:l.secondaryContact)&&Object(s.a)(l.secondaryContact,!0),l.address=(null===l||void 0===l?void 0:l.address)&&Object(s.a)(l.address,!0)}}catch(i){r.e(i)}finally{r.f()}a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_SPEND_DATA_LOADING",data:!0}),t.next=4,c.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){var n;console.log("getSpendData"),a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===(n=u(t))||void 0===n?void 0:n.data,totalPages:t.length,params:e})})).catch((function(e){console.log(e),a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(t){return t({type:"FILTER_SPEND_DATA",value:e})}},v=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},f=function(e){return function(t){console.log("DELETE DATA :"),c.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},g=function(e){return function(t){console.log("DELETE DATA :"),c.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},h=function(e){var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(s.b)(e.name,!0),relation:Object(s.b)(e.relation,!0),email:Object(s.b)(e.email,!0),primaryContact:Object(s.b)(e.contact1,!0),secondaryContact:Object(s.b)(e.contact2,!0),address:Object(s.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(s.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){d.b.success("Nominee Added Successfully"),a(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a={_id:e._id,usage:e.usage?e.usage:"Unused",userId:t._id,name:Object(s.b)(e.name,!0),relation:Object(s.b)(e.relation,!0),email:Object(s.b)(e.email,!0),primaryContact:Object(s.b)(e.contact1,!0),secondaryContact:Object(s.b)(e.contact2,!0),address:Object(s.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(s.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/update",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){d.b.success("Nominee Updated Successfully")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},507:function(e,t,a){"use strict";a(0),a(438),a(439),a(440),a(15);function n(e){var t=(null===e||void 0===e?void 0:e.keyCode)||(null===e||void 0===e?void 0:e.which);t=String.fromCharCode(t);if(!/^[0-9]*$/.test(t))return e.preventDefault(),!1}t.a=n},560:function(e,t,a){},688:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(512),o=a(513),i=a(7),c=a(34),d=a(488),s=a(439),u=a(511),m=a(489),b=a(518),p=a.n(b),v=a(5),f=a.n(v),g=a(465),h=a(466),E=a(536),O=a(485),j=a(21),S=a(149),D=a(506),y=(a(504),a(492),a(438)),w=a(440),k=a(238),N=a(411),I=a(106),A=a.n(I),x=a(442),C=a(15),L=a(507),_=function(e){var t=Object(n.useState)("Cigretes"),a=Object(i.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)("other"),d=Object(i.a)(c,2),u=d[0],b=d[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),g=v[0],h=v[1],E=Object(n.useState)(""),O=Object(i.a)(E,2),j=O[0],S=O[1],D=Object(n.useState)(""),I=Object(i.a)(D,2),_=I[0],F=I[1],T=Object(n.useState)(""),z=Object(i.a)(T,2),P=z[0],U=z[1],R=Object(n.useState)(""),B=Object(i.a)(R,2),G=B[0],V=B[1],J=Object(n.useState)(!1),W=Object(i.a)(J,2),H=W[0],M=W[1],q=Object(n.useState)(""),K=Object(i.a)(q,2),Y=K[0],$=K[1],Q=Object(n.useState)(""),X=Object(i.a)(Q,2),Z=X[0],ee=X[1],te=Object(n.useState)(""),ae=Object(i.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(""),oe=Object(i.a)(le,2),ie=oe[0],ce=oe[1],de=Object(n.useState)(""),se=Object(i.a)(de,2),ue=se[0],me=se[1],be=Object(n.useState)(""),pe=Object(i.a)(be,2),ve=pe[0],fe=pe[1],ge=function(){U(""),V(""),o("Cigretes"),b(""),h(""),S(""),F("")},he=function(){me(""),re(""),ce(""),$(""),fe("")};Object(n.useEffect)((function(){if(e.data){var t=e.data,a=t.id,n=t.name,r=t.relation,l=t.address,i=t.date,c=t.primaryContact;he(),U(a),V(n),o(r),"Cigretes"!==r&&"Drink"!==r&&"Fees"!==r&&"Fuel"!==r&&"Groceries"!==r&&"Party"!==r&&"Rent"!==r&&"Snacks"!==r&&"Travel"!==r&&(o("others"),b(r)),S(l),h(i),F(c)}e.data&&!H||(ge(),he()),M(!1)}),[e.data]);var Ee=function(){return me("Enter Valid Item")},Oe=function(){return re("Enter Valid Description")},je=function(){return ce("Enter Valid Price")},Se=function(){return ee("Enter Valid Label")},De=function(){return $("Enter Valid Label")},ye=function(){return fe("Enter Valid date")},we=function(e){var t=e.target.name,a=e.target.value;switch(t){case"item":V(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&me("");break;case"desc":S(a),a&&a.trim()&&re("");break;case"date":h(a),a&&a.trim()&&fe("");break;case"price":F(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ce("");break;case"label":o(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ee("");break;case"otherLabel":b(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&$("")}},ke=function(e){var t=e.target.name,a=e.target.value;switch(t){case"item":(null===a||void 0===a?void 0:a.length)&&a.trim()?me(""):Ee();break;case"desc":a&&a.trim()?re(""):Oe();break;case"price":(null===a||void 0===a?void 0:a.length)&&a.trim()?ce(""):je();break;case"date":(null===a||void 0===a?void 0:a.length)&&a.trim()?fe(""):ye();break;case"label":(null===a||void 0===a?void 0:a.length)&&a.trim()?ee(""):Se();break;case"otherLabel":(null===a||void 0===a?void 0:a.length)&&a.trim()?$(""):De()}},Ne=function(){if(!(null===G||void 0===G?void 0:G.length)&&Ee(),!(null===g||void 0===g?void 0:g.length)&&ye(),!(null===j||void 0===j?void 0:j.length)&&Oe(),!(null===_||void 0===_?void 0:_.length)&&je(),!(null===l||void 0===l?void 0:l.length)&&Se(),"others"===l&&!(null===u||void 0===u?void 0:u.length)&&De(),ue||!(null===G||void 0===G?void 0:G.length)||Z||!(null===l||void 0===l?void 0:l.length)||Y||"others"===l&&!(null===u||void 0===u?void 0:u.length)||ne||!(null===j||void 0===j?void 0:j.length)||ie||!(null===_||void 0===_?void 0:_.length)||ve||!(null===g||void 0===g?void 0:g.length))m.b.error("Kindly Fill Mandatory fields");else if(e.isLoading)null!==e.data?m.b.warning("Updating still in process"):m.b.warning("Adding Spend in process");else{var t={relation:null===l||void 0===l?void 0:l.trim(),relation1:null===u||void 0===u?void 0:u.trim(),date:null===g||void 0===g?void 0:g.trim(),address:null===j||void 0===j?void 0:j.trim(),contact1:null===_||void 0===_?void 0:_.trim(),_id:null===P||void 0===P?void 0:P.trim(),name:null===G||void 0===G?void 0:G.trim()};null!==e.data?(t._id=e.data._id,t.usage=e.data.usage,e.updateData(t)):(M(!0),e.addData(t),ge(),he())}},Ie=e.show,Ae=e.handleSidebar,xe=e.data;return r.a.createElement("div",{className:f()("data-list-sidebar",{show:Ie})},r.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},r.a.createElement("h4",null,null!==xe?"UPDATE SPEND DETAILS":"ADD NEW SPEND"),r.a.createElement(N.a,{size:20,onClick:function(){Ae(!1,!0),ge(),he()}})),r.a.createElement(A.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},r.a.createElement(y.a,{className:"form-label-group"},r.a.createElement(s.a,{className:"input-label",type:"text",name:"item",value:G,placeholder:"Item",id:"data-name",onChange:we,onBlur:ke,style:{borderColor:ue?"red":""}}),r.a.createElement(w.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Item"),ue&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ue)),r.a.createElement(y.a,null,r.a.createElement(s.a,{type:"select",id:"data-category",value:l,name:"label",onChange:we,onBlur:ke},r.a.createElement("option",null,"Cigretes"),r.a.createElement("option",null,"Drink"),r.a.createElement("option",null,"Fees"),r.a.createElement("option",null,"Fuel"),r.a.createElement("option",null,"Groceries"),r.a.createElement("option",null,"Party"),r.a.createElement("option",null,"Rent"),r.a.createElement("option",null,"Snacks"),r.a.createElement("option",null,"Travel"),r.a.createElement("option",null,"others")),r.a.createElement(w.a,{className:"dark"===C.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Label *")),"others"===l&&r.a.createElement(y.a,null,r.a.createElement(s.a,{className:"input-label",type:"text",value:u,name:"otherLabel",placeholder:"Label Name",id:"data-name",onChange:we,onBlur:ke,style:{borderColor:Y?"red":""}}),Y&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},Y)),r.a.createElement(y.a,{className:"form-label-group"},r.a.createElement(s.a,{className:"input-label",type:"date",value:g,name:"date",placeholder:"Enter Date",id:"data-name",onChange:we,onBlur:ke,style:{borderColor:ve?"red":""}}),r.a.createElement(w.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Date *"),ve&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ve)),r.a.createElement(y.a,{className:"form-label-group"},r.a.createElement(s.a,{className:"input-label",type:"number",onKeyPress:function(e){return Object(L.a)(e)},value:_,id:"data-price",name:"price",placeholder:"Enter spend amount",onChange:we,onBlur:ke,style:{borderColor:ie?"red":""}}),r.a.createElement(w.a,{for:"data-price",className:"dark"===C.a.theme?"dark-label":"light-label"},"Amount *"),ie&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ie)),r.a.createElement(y.a,{className:"form-label-group"},r.a.createElement(s.a,{className:"input-label ",type:"textarea",value:j,name:"desc",placeholder:"Description",id:"data-name",onChange:we,onBlur:ke,style:{borderColor:ne?"red":"",height:"115px"}}),r.a.createElement(w.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Description *"),ne&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ne))),r.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},r.a.createElement(k.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Ae(!1,!0),ge(),he()}},"Cancel"),r.a.createElement(k.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return Ne()}},e.isLoading&&r.a.createElement(x.a,{color:"danger",size:"sm"})," ",null!==xe?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))},F=a(28),T=a.n(F);a(560),a(502);T.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var z={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},P=function(e){return r.a.createElement("div",{className:"data-list-action"},window.screen.width>500?r.a.createElement(g.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){return e.currentData(e.row)}}):r.a.createElement(h.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){return e.currentData(e.row)}}))},U=function(e){return r.a.createElement("div",{className:"data-list-action"},r.a.createElement(E.a,{style:{cursor:"pointer"},size:window.screen.width<500?13:20,onClick:function(){return e.setRow()}}))},R=function(e){return r.a.createElement("div",{className:"data-list-header d-flex justify-content-between"},r.a.createElement("div",{className:"actions-left d-flex"},r.a.createElement(d.a,{color:"white",className:"sort-dropdown mx-50",style:{height:"75%",backgroundColor:"var(--warning)",fontWeight:"bold"},outline:!0,onClick:function(){return e.handleSidebar(!0,!0)}},r.a.createElement("span",{className:"align-middle"},"Add"))),r.a.createElement("div",{className:"actions-right d-flex"},r.a.createElement("div",{className:"filter-section"},r.a.createElement(s.a,{type:"text",style:{height:"75%",borderRadius:"5rem",fontSize:"1rem"},onChange:function(t){return e.handleFilter(t)},placeholder:"Find",className:"placeholder"}))))},B=[{when:function(e){return new Date(e.date)<new Date},style:{backgroundColor:"#adadad",color:""}}],G=Object(j.b)((function(e){var t=e.dataList.data;return t.map((function(e){var t,a=null===e||void 0===e||null===(t=e.date)||void 0===t?void 0:t.split("T");return e.date=null===a||void 0===a?void 0:a[0],e})),{dataList:e.dataList,listLoading:e.dataList.spendLoading,data:t}}),(function(e){return{deleteSpendData:function(t){return e(Object(D.c)(t))},getSpendData:function(t){return e(Object(D.g)(t))},addData:function(t){return e(Object(D.a)(t))},updateData:function(t){return e(Object(D.h)(t))},filterSpendData:function(t){return e(Object(D.e)(t))}}}))((function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],o=a[1],d=Object(n.useState)(!1),s=Object(i.a)(d,2),b=s[0],v=s[1],g=Object(n.useState)(""),h=Object(i.a)(g,2),E=h[0],j=h[1],D=Object(n.useState)([]),y=Object(i.a)(D,2),w=y[0],k=y[1],N=Object(n.useState)(""),I=Object(i.a)(N,2),A=I[0],x=I[1],C=Object(n.useState)(4),L=Object(i.a)(C,2),F=L[0],G=L[1],V=Object(n.useState)(!1),J=Object(i.a)(V,2),W=J[0],H=J[1],M=Object(n.useState)(null),q=Object(i.a)(M,2),K=q[0],Y=q[1],$=Object(n.useState)(0),Q=Object(i.a)($,2),X=Q[0],Z=Q[1],ee=Object(n.useState)([]),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),le=Object(i.a)(re,2),oe=le[0],ie=le[1],ce=Object(n.useState)(!1),de=Object(i.a)(ce,2),se=de[0],ue=de[1],me=[{name:"Edit",cell:function(t){return r.a.createElement(P,{row:t,getSpendData:e.getSpendData,parsedFilter:e.parsedFilter,currentData:ve})}},{name:"Item",selector:"item",sortable:!0,minWidth:"200px",cell:function(e){return r.a.createElement("p",{title:e.item,className:"text-truncate text-bold-500 mb-0"},e.item)}},{name:"Description",selector:"desc",minWidth:"150px",sortable:!0},{name:"Label",selector:"label",sortable:!0},{name:"Date",minWidth:"200px",selector:"date",sortable:!0},{name:"Amount",selector:"amount",minWidth:"150px",sortable:!0},{name:"Delete",cell:function(t){return r.a.createElement(U,{row:t,setRow:function(){j(t),v(!0)},getSpendData:e.getSpendData,parsedFilter:e.parsedFilter})}}],be=[{name:"Info",width:"50px",cell:function(t){return r.a.createElement(P,{row:t,getData:e.getSpendData,parsedFilter:e.parsedFilter,currentData:ve})}},{name:"Item",selector:"item",sortable:!0,minWidth:"50px",cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.item,className:"text-truncate text-bold-500 mb-0"},e.item)}},{name:"Amount",selector:"amount",maxWidth:"50px",sortable:!0,cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.amount,className:"text-truncate text-bold-500 mb-0"},e.amount)}},{name:"Trash",width:"50px",cell:function(t){return r.a.createElement(U,{row:t,getSpendData:e.getSpendData,parsedFilter:e.parsedFilter,setRow:function(){v(!0),j(t)}})}}];Object(n.useEffect)((function(){var t;(null===e||void 0===e?void 0:e.data)&&(o(null===e||void 0===e?void 0:e.data),k(e.dataList.allData),G(parseInt(null===(t=e.parsedFilter)||void 0===t?void 0:t.perPage)),Z(e.dataList.totalRecords),ne(e.dataList.sortIndex))}),[e.data]),Object(n.useEffect)((function(){e.getSpendData(e.parsedFilter)}),[]);var pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];H(e),!0===t&&(Y(null),ie(!0))},ve=function(e){e.name=e.item,e.relation1=e.label,e.relation=e.label,e.address=e.desc,e.primaryContact=e.amount,Y(e),pe(!0)};return e.listLoading?r.a.createElement("div",{className:"fallback-spinner vh-100"},r.a.createElement(S.a,{color:"danger",size:"sm"})):r.a.createElement("div",{className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},r.a.createElement(u.a,{handleConfirm:function(){e.deleteSpendData(E),e.getSpendData(e.parsedFilter),v(!1)},isOpen:b,closeModal:function(){return v(!1)}}),r.a.createElement(p.a,{width:"200",columns:window.screen.width<500?be:me,data:A.length?l:w,noHeader:!0,subHeader:!0,selectableRows:(window.screen.width,!1),responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,conditionalRowStyles:B,customStyles:z,subHeaderComponent:r.a.createElement(R,{handleSidebar:pe,handleFilter:function(t){x(t.target.value),e.filterSpendData(t.target.value)},handleRowsPerPage:function(e){},rowsPerPage:F,total:X,index:ae}),sortIcon:r.a.createElement(O.a,null)}),r.a.createElement(_,{show:W,data:K,updateData:function(t){if(""===t.name||""===t.relation1&&"others"===t.relation||""===t.relation||""===t.email||""===t.date||""===t.contact1||""===t.address)m.b.error("Please Fill All Mandatory Details");else{ue(!0),console.log("aaquib",t);var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},n={_id:t._id,userId:a._id,item:Object(c.b)(t.name),label:Object(c.b)(t.relation1),date:t.date,amount:Object(c.b)(t.contact1),desc:Object(c.b)(t.address)};T.a.post("/backendapi/spend/update",n,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){ue(!1),m.b.success("Spend Updated Successfully"),pe(!1,!0),e.getSpendData(e.parsedFilter)})).catch((function(e){ue(!1),m.b.error("Add Nominee Failed! Please contact admin")})),console.log("aaquib",n)}},addData:function(t){if(""===t.name||""===t.relation1&&"others"===t.relation||""===t.relation||""===t.email||""===t.date||""===t.contact1||""===t.address)m.b.error("Please Fill All Mandatory Details");else{ue(!0),console.log("aaquib",t);var a={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,item:Object(c.b)(t.name),label:Object(c.b)(t.relation),date:t.date,amount:Object(c.b)(t.contact1),desc:Object(c.b)(t.address)};"others"===t.relation&&t.relation1&&(a.relation=Object(c.b)(t.relation1,!0)),T.a.post("/backendapi/spend/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){ue(!1),m.b.success("Spend Added Successfully"),pe(!1,!0),e.getSpendData(e.parsedFilter)})).catch((function(e){ue(!1),m.b.error("Add Spend Failed! Please contact admin")}))}},isLoading:se,handleSidebar:pe,thumbView:e.thumbView,getSpendData:e.getSpendData,dataParams:e.parsedFilter,addNew:oe}),r.a.createElement("div",{className:f()("data-list-overlay",{show:W}),onClick:function(){return pe(!1,!0)}}))})),V=a(626),J=a.n(V);t.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"warning spacing nodisplay"},"Daily Spends"),r.a.createElement(l.a,null,r.a.createElement(m.a,null),r.a.createElement(o.a,{sm:"12"},r.a.createElement(G,{parsedFilter:J.a.parse(e.location.search)}))))}}}]);
//# sourceMappingURL=22.59b726e8.chunk.js.map