(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[24],{475:function(e,t,a){},479:function(e,t,a){"use strict";a.d(t,"f",(function(){return m})),a.d(t,"g",(function(){return b})),a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return v})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return f})),a.d(t,"h",(function(){return E}));var n=a(36),r=a.n(n),l=a(55),o=a(486),i=a(31),c=a.n(i),d=a(471),s=a(32);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var u=function(e){var t,a=Object(o.a)(null===e||void 0===e?void 0:e.data);try{for(a.s();!(t=a.n()).done;){var n=t.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(s.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(s.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(s.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(s.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(s.a)(null===n||void 0===n?void 0:n.desc))}}catch(r){a.e(r)}finally{a.f()}return e},m=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t.next=3,c.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"GET_ALL_DATA_LOADING",data:!1});var n,r=Object(o.a)(null===t||void 0===t?void 0:t.data);try{for(r.s();!(n=r.n()).done;){var l=n.value;l.nomineeId=(null===l||void 0===l?void 0:l.nomineeId)&&Object(s.a)(l.nomineeId,!0),l.name=(null===l||void 0===l?void 0:l.name)&&Object(s.a)(l.name,!0),l.relation=(null===l||void 0===l?void 0:l.relation)&&Object(s.a)(l.relation,!0),l.email=(null===l||void 0===l?void 0:l.email)&&Object(s.a)(l.email,!0),l.primaryContact=(null===l||void 0===l?void 0:l.primaryContact)&&Object(s.a)(l.primaryContact,!0),l.secondaryContact=(null===l||void 0===l?void 0:l.secondaryContact)&&Object(s.a)(l.secondaryContact,!0),l.address=(null===l||void 0===l?void 0:l.address)&&Object(s.a)(l.address,!0)}}catch(i){r.e(i)}finally{r.f()}a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(l.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_SPEND_DATA_LOADING",data:!0}),t.next=4,c.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){var n;console.log("getSpendData"),a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===(n=u(t))||void 0===n?void 0:n.data,totalPages:t.length,params:e})})).catch((function(e){console.log(e),a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(t){return t({type:"FILTER_SPEND_DATA",value:e})}},v=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},g=function(e){return function(t){console.log("DELETE DATA :"),c.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},h=function(e){return function(t){console.log("DELETE DATA :"),c.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},f=function(e){var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(s.b)(e.name,!0),relation:Object(s.b)(e.relation,!0),email:Object(s.b)(e.email,!0),primaryContact:Object(s.b)(e.contact1,!0),secondaryContact:Object(s.b)(e.contact2,!0),address:Object(s.b)(e.address,!0),usage:"Unused"};return"others"===e.relation&&e.relation1&&(t.relation=Object(s.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){d.b.success("Nominee Added Successfully"),a(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a={_id:e._id,usage:e.usage?e.usage:"Unused",userId:t._id,name:Object(s.b)(e.name,!0),relation:Object(s.b)(e.relation,!0),email:Object(s.b)(e.email,!0),primaryContact:Object(s.b)(e.contact1,!0),secondaryContact:Object(s.b)(e.contact2,!0),address:Object(s.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(s.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/update",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){d.b.success("Nominee Updated Successfully"),t(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},480:function(e,t,a){},489:function(e,t,a){"use strict";var n=a(7),r=a(0),l=a.n(r),o=a(420),i=a(421),c=a(422),d=a(228),s=a(393),u=a(104),m=a.n(u),b=a(5),p=a.n(b),v=a(15),g=a(471);t.a=function(e){var t=Object(r.useState)("Collegue"),a=Object(n.a)(t,2),u=a[0],b=a[1],h=Object(r.useState)("Collegue"),f=Object(n.a)(h,2),E=f[0],O=f[1],j=Object(r.useState)(""),y=Object(n.a)(j,2),N=y[0],w=y[1],S=Object(r.useState)(""),D=Object(n.a)(S,2),x=D[0],k=D[1],A=Object(r.useState)(""),C=Object(n.a)(A,2),I=C[0],L=C[1],_=Object(r.useState)(""),F=Object(n.a)(_,2),T=F[0],R=F[1],U=Object(r.useState)(""),z=Object(n.a)(U,2),P=z[0],G=z[1],V=Object(r.useState)(""),W=Object(n.a)(V,2),H=W[0],B=W[1],J=Object(r.useState)(""),M=Object(n.a)(J,2),Z=M[0],K=M[1],Y=Object(r.useState)(!1),$=Object(n.a)(Y,2),q=$[0],Q=$[1],X=Object(r.useState)(""),ee=Object(n.a)(X,2),te=ee[0],ae=ee[1],ne=Object(r.useState)(""),re=Object(n.a)(ne,2),le=re[0],oe=re[1],ie=Object(r.useState)(""),ce=Object(n.a)(ie,2),de=ce[0],se=ce[1],ue=Object(r.useState)(""),me=Object(n.a)(ue,2),be=me[0],pe=me[1],ve=Object(r.useState)(""),ge=Object(n.a)(ve,2),he=ge[0],fe=ge[1],Ee=Object(r.useState)(""),Oe=Object(n.a)(Ee,2),je=Oe[0],ye=Oe[1],Ne=Object(r.useState)(""),we=Object(n.a)(Ne,2),Se=we[0],De=we[1];Object(r.useEffect)((function(){if(e.data){var t=e.data,a=t.id,n=t.name,r=t.relation,l=t.address,o=t.email,i=t.primaryContact,c=t.secondaryContact;Re(),B(a),K(n),b(r),"Collegue"!==r&&"Cousin"!==r&&"Daughter"!==r&&"Daughter-in-law"!==r&&"Friend"!==r&&"Husband"!==r&&"Son"!==r&&"Son-in-law"!==r&&"Wife"!==r&&(b("others"),O(r)),k(l),w(o),L(i),R(c)}else(null===e.data||q)&&(Te(),Re());Q(!1)}),[e.data]);var xe=function(){return De("Enter Valid Name")},ke=function(){return se("Enter Valid Email")},Ae=function(){return pe("Enter Valid Address")},Ce=function(){return fe("Enter Valid Primary No.")},Ie=function(){return oe("Enter Valid Relation")},Le=function(){return ae("Enter Valid Relation")},_e=function(e){var t=e.target.name,a=e.target.value;switch(t){case"name":K(a),(null===a||void 0===a?void 0:a.length)&&a.trim()?De(""):xe();break;case"email":w(a);var n=a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/);a&&n&&a.trim()?se(""):ke();break;case"address":k(a.replace(/[\n\r]/g,", ")),a&&a.trim()?pe(""):Ae();break;case"contact1":L(a),(null===a||void 0===a?void 0:a.length)&&10===a.length&&a.trim()?fe(""):Ce();break;case"contact2":R(a),10===a.length&&a.trim()?ye(""):ye("Enter Valid Secondary No."),!(null===a||void 0===a?void 0:a.length)&&ye("");break;case"relation":b(a),(null===a||void 0===a?void 0:a.length)&&a.trim()?oe(""):Ie();break;case"relation1":O(a),(null===a||void 0===a?void 0:a.length)&&a.trim()?ae(""):Le()}},Fe=function(){if(!(null===Z||void 0===Z?void 0:Z.length)&&xe(),!(null===N||void 0===N?void 0:N.length)&&ke(),!(null===x||void 0===x?void 0:x.length)&&Ae(),!(null===I||void 0===I?void 0:I.length)&&Ce(),!(null===u||void 0===u?void 0:u.length)&&Ie(),"others"===u&&!(null===E||void 0===E?void 0:E.length)&&Le(),Se||!(null===Z||void 0===Z?void 0:Z.length)||le||!(null===u||void 0===u?void 0:u.length)||te||"others"===u&&!(null===E||void 0===E?void 0:E.length)||de||!(null===N||void 0===N?void 0:N.length)||be||!(null===x||void 0===x?void 0:x.length)||he||!(null===I||void 0===I?void 0:I.length))g.b.error("Kindly Fill Mandatory fields");else if(e.isLoading)null!==e.data?g.b.warning("Updating still in process"):g.b.warning("Adding nominee in process");else{var t={relation:null===u||void 0===u?void 0:u.trim(),relation1:null===E||void 0===E?void 0:E.trim(),email:null===N||void 0===N?void 0:N.trim(),address:null===x||void 0===x?void 0:x.trim(),contact1:null===I||void 0===I?void 0:I.trim(),contact2:null===T||void 0===T?void 0:T.trim(),id:null===H||void 0===H?void 0:H.trim(),name:null===Z||void 0===Z?void 0:Z.trim()};null!==e.data?(t._id=e.data._id,t.usage=e.data.usage,e.updateData(t)):(Q(!0),e.addData(t),Te(),Re())}},Te=function(){K(""),b("Collegue"),O(""),w(""),k(""),L(""),R("")},Re=function(){De(""),pe(""),fe(""),ye(""),se(""),ae("")},Ue=e.show,ze=e.handleSidebar,Pe=e.data;return l.a.createElement("div",{className:p()("data-list-sidebar",{show:Ue})},l.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},l.a.createElement("h4",{style:{color:"var(--warning)"}},null!==Pe?"UPDATE NOMINEE":"ADD NEW NOMINEE"),l.a.createElement(s.a,{size:20,onClick:function(){ze(!1,!0),Te(),Re()}})),l.a.createElement(m.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},l.a.createElement("div",null,l.a.createElement(o.a,{className:"form-label-group mb-0"},l.a.createElement(i.a,{className:"input-label",type:"text",name:"name",value:Z,placeholder:"Nominee Name*",onChange:_e,id:"data-name",style:{borderColor:Se?"red":""}}),l.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-name"},"Name*")),Se&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},Se)),l.a.createElement(o.a,{className:"mt-2 mb-0"},l.a.createElement(i.a,{type:"select",id:"data-category",name:"relation",value:u,onChange:_e},l.a.createElement("option",null,"Collegue"),l.a.createElement("option",null,"Cousin"),l.a.createElement("option",null,"Daughter"),l.a.createElement("option",null,"Daughter-in-law"),l.a.createElement("option",null,"Friend"),l.a.createElement("option",null,"Husband"),l.a.createElement("option",null,"Son"),l.a.createElement("option",null,"Son-in-law"),l.a.createElement("option",null,"Wife"),l.a.createElement("option",null,"others")),l.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation*")),"others"===u&&l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{type:"text",name:"relation1",value:E,placeholder:"Relation Name*",onChange:_e,id:"data-Relation",style:{borderColor:te?"red":""}})),te&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},te),l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{className:"input-label",type:"email",name:"email",value:N,placeholder:"Enter nominee email*",onChange:_e,id:"data-email",style:{borderColor:de?"red":""}}),l.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-email"},"Nominee Email*")),de&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},de),l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{className:"input-label",type:"number",max:"10",value:I,name:"contact1",onChange:_e,id:"data-price",placeholder:"Enter primary contact No*",style:{borderColor:he?"red":""}}),l.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-price"},"Primary Contact")),he&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},he),l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{className:"input-label",type:"number",max:"10",value:T,name:"contact2",onChange:_e,id:"data-price",placeholder:"Enter secondry contact No",style:{borderColor:je?"red":""}}),l.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact")),je&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},je),l.a.createElement(o.a,{className:"form-label-group mt-2 mb-0"},l.a.createElement(i.a,{className:"input-label ",style:{height:"115px",borderColor:be?"red":""},type:"textarea",value:x,name:"address",placeholder:"Enter Address*",onChange:_e,id:"data-Address"}),l.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-Address"},"Address *")),be&&l.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},be),e.thumbView&&P.length<=0?l.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",l.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(e){return G(URL.createObjectURL(e.target.files[0]))}})):null),l.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},l.a.createElement(d.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Te(),Re()}},"Reset"),l.a.createElement(d.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return Fe()}},null!==Pe?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))}},670:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(496),o=a(497),i=a(36),c=a.n(i),d=a(55),s=a(7),u=a(470),m=a(421),b=a(228),p=a(469),v=a(426),g=a(603),h=a(144),f=a(471),E=a(498),O=a.n(E),j=a(5),y=a.n(j),N=a(47),w=a(500),S=a(447),D=a(448),x=a(467),k=a(18),A=a(479),C=(a(474),a(475),a(489)),I=a(31),L=a.n(I);a(480),a(234);L.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var _={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},F=function(e){var t;return r.a.createElement("div",{className:"data-list-action"},r.a.createElement(w.a,{style:{cursor:"Unused"===(null===e||void 0===e||null===(t=e.row)||void 0===t?void 0:t.usage)?"pointer":"no-drop"},size:window.screen.width<500?13:20,onClick:function(){var t;"Unused"===(null===e||void 0===e||null===(t=e.row)||void 0===t?void 0:t.usage)&&e.setRow()}}))},T=function(e){return r.a.createElement("div",{className:"data-list-action"},window.screen.width>500?r.a.createElement(S.a,{className:"cursor-pointer mr-1",size:"13",onClick:function(){return e.currentData(e.row)}}):r.a.createElement(D.a,{className:"cursor-pointer mr-1",size:"20",onClick:function(){return e.currentData(e.row)}}))},R=function(e){return r.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},r.a.createElement("div",{className:"actions-left d-flex"},r.a.createElement(u.a,{color:"white",className:"sort-dropdown mx-50",style:{height:"75%",backgroundColor:"var(--warning)",fontWeight:"bold"},outline:!0,onClick:function(){return e.handleSidebar(!0,!0)}},r.a.createElement("span",{className:"align-middle"},"Add"))),r.a.createElement("div",{className:"actions-right d-flex"},r.a.createElement("div",{className:"filter-section"},r.a.createElement(m.a,{type:"text",style:{height:"75%",borderRadius:"5rem",fontSize:"1rem"},onChange:function(t){return e.handleFilter(t)},placeholder:"Find",className:"placeholder"}))),r.a.createElement("div",{className:"d-none"},r.a.createElement("div",{className:"data-list-rows-dropdown mr-1 d-none"},r.a.createElement(b.a.Ripple,{color:"",className:"sort-dropdown",style:{height:"75%"}},r.a.createElement("span",{className:"align-middle mx-50"},"Count : ",e.total)))))},U=Object(k.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),(function(e){return{deleteData:function(t){return e(Object(A.b)(t))},updateData:function(t){return e(Object(A.h)(t))},addData:function(t){return e(Object(A.a)(t))},getData:function(t){return e(Object(A.f)(t))},filterData:function(t){return e(Object(A.d)(t))},dataTest:function(){return e({type:"GET_ALL_DATA_LOADING",data:!0})}}}))((function(e){var t=[{name:"Edit",sortable:!1,width:"80px",cell:function(t){return r.a.createElement(T,{row:t,getData:e.getData,parsedFilter:e.parsedFilter,currentData:Se})}},{name:"Name",selector:"name",sortable:!0,minWidth:"200px",cell:function(e){return r.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",sortable:!0,width:"170px",cell:function(e){return r.a.createElement("p",{title:null===e||void 0===e?void 0:e.relation,className:"text-truncate text-bold-500 mb-0"},null===e||void 0===e?void 0:e.relation)}},{name:"Email",minWidth:"200px",selector:"email",sortable:!0},{name:"Contact",selector:"primaryContact",minWidth:"150px",sortable:!0},{name:"Status",width:"120px",selector:"unused",sortable:!0,cell:function(e){return r.a.createElement("span",{className:"Unused"!==e.usage&&e.usage?"chipused":"chipunused"},"Unused"!==e.usage&&e.usage?"Used":"Unused")}},{name:"Delete",sortable:!1,width:"110px",cell:function(t){return r.a.createElement(F,{row:t,setRow:function(){z(!0),A(t)},getData:e.getData,parsedFilter:e.parsedFilter,deleteRow:ye})}}],a=[{name:"Info",sortable:!0,width:"50px",cell:function(t){return r.a.createElement(T,{row:t,getData:e.getData,parsedFilter:e.parsedFilter,currentData:Se})}},{name:"Name",selector:"name",sortable:!0,minWidth:"50px",cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",maxWidth:"50px",sortable:!0,cell:function(e){return r.a.createElement("p",{title:null===e||void 0===e?void 0:e.relation,className:"text-truncate text-bold-500 mb-0"},"others"===(null===e||void 0===e?void 0:e.relation)?null===e||void 0===e?void 0:e.relation1:null===e||void 0===e?void 0:e.relation)}},{name:"Trash",sortable:!0,width:"50px",cell:function(t){return r.a.createElement(F,{row:t,getData:e.getData,parsedFilter:e.parsedFilter,currentData:Se,deleteRow:ye})}}],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(0),E=Object(s.a)(m,2),j=E[0],w=E[1],S=Object(n.useState)(null),D=Object(s.a)(S,2),k=D[0],A=D[1],I=Object(n.useState)(!1),L=Object(s.a)(I,2),U=L[0],z=L[1],P=Object(n.useState)([]),G=Object(s.a)(P,2),V=G[0],W=G[1],H=Object(n.useState)(""),B=Object(s.a)(H,2),J=B[0],M=B[1],Z=Object(n.useState)(4),K=Object(s.a)(Z,2),Y=K[0],$=K[1],q=Object(n.useState)(!1),Q=Object(s.a)(q,2),X=Q[0],ee=Q[1],te=Object(n.useState)(null),ae=Object(s.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(0),oe=Object(s.a)(le,2),ie=oe[0],ce=oe[1],de=Object(n.useState)([]),se=Object(s.a)(de,2),ue=se[0],me=se[1],be=Object(n.useState)(""),pe=Object(s.a)(be,2),ve=pe[0],ge=pe[1],he=Object(n.useState)(!1),fe=Object(s.a)(he,2),Ee=fe[0],Oe=fe[1];Object(n.useEffect)((function(){var t,a,n;e.dataList.data.length===i.length&&j===(null===(t=e.parsedFilter)||void 0===t?void 0:t.page)||(u(e.dataList.data),W(e.dataList.filteredData),w(parseInt(null===(a=e.parsedFilter)||void 0===a?void 0:a.page)-1),$(parseInt(null===(n=e.parsedFilter)||void 0===n?void 0:n.perPage)),ce(e.dataList.totalRecords),me(e.dataList.sortIndex))}),[e.dataList]),Object(n.useEffect)((function(){e.getData(),e.dataTest()}),[]);var je=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ee(e),!0===t&&(re(null),ge(t))},ye=function(t){if(e.deleteData(t),i.length-1===0){var a,n=e.thumbView?"/data-list/thumb-view/":"/#/nominee/list/";N.a.push("".concat(n,"list-view?page=").concat(parseInt((null===(a=e.parsedFilter)||void 0===a?void 0:a.page)-1),"&perPage=").concat(e.parsedFilter.perPage))}},Ne=function(){var t=Object(d.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Oe(!0),t.prev=1,t.next=4,e.addData(a);case 4:Oe(!1),je(!1,!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),Oe(!1),f.b.error("Add Nominee Failed! Please contact admin");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),we=function(){var t=Object(d.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==a.name&&""!==a.relation&&""!==a.email&&""!==a.contact1&&""!==a.address){t.next=4;break}f.b.error("Please Fill All Mandatory Details"),t.next=16;break;case 4:return Oe(!0),t.prev=5,t.next=8,e.updateData(a);case 8:Oe(!1),je(!1,!0),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),Oe(!1),f.b.error("Unable to update! Please try again");case 16:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}(),Se=function(e){re(e),je(!0)};return e.listLoading?r.a.createElement("div",{className:"fallback-spinner vh-100"},r.a.createElement(h.a,{color:"danger",size:"sm"})):r.a.createElement("div",{className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},r.a.createElement(p.a,{isOpen:U,className:"modal-dialog-centered",backdrop:"static"},r.a.createElement(v.a,null,"Are you sure you want to delete this record?"),r.a.createElement(g.a,null,r.a.createElement(b.a,{color:"primary",onClick:function(){return z(!1)},className:"button-label"},"Cancel"),r.a.createElement(b.a,{color:"danger",onClick:function(){ye(k),z(!1)},className:"button-label"},"Delete"))),r.a.createElement(O.a,{width:"200",columns:window.screen.width<600?a:t,data:J.length?V:i,noHeader:!0,subHeader:!0,selectableRows:(window.screen.width,!1),responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,customStyles:_,subHeaderComponent:r.a.createElement(R,{className:"data-table",handleSidebar:je,handleFilter:function(t){M(t.target.value),e.filterData(t.target.value)},handleRowsPerPage:function(t){var a=e.parsedFilter,n=e.getData,r=void 0!==(null===a||void 0===a?void 0:a.page)?null===a||void 0===a?void 0:a.page:1;N.a.push("/nominee/list?page=".concat(r,"&perPage=").concat(t)),$(t),n({page:null===a||void 0===a?void 0:a.page,perPage:t})},rowsPerPage:Y,total:ie,index:ue}),sortIcon:r.a.createElement(x.a,null)}),r.a.createElement(C.a,{show:X,data:ne,updateData:we,addData:Ne,isLoading:Ee,handleSidebar:je,thumbView:e.thumbView,getData:e.getData,dataParams:e.parsedFilter,addNew:ve}),r.a.createElement("div",{className:y()("data-list-overlay",{show:X}),onClick:function(){return je(!1,!0)}}))})),z=a(578),P=a.n(z);t.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"warning spacing nodisplay"},"Nominees"),r.a.createElement(l.a,null,r.a.createElement(f.a,null),r.a.createElement(o.a,{sm:"12"},r.a.createElement(U,{parsedFilter:P.a.parse(e.location.search)}))))}}}]);
//# sourceMappingURL=24.f91004d7.chunk.js.map