(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[24],{475:function(e,a,t){},479:function(e,a,t){"use strict";t.d(a,"e",(function(){return m})),t.d(a,"f",(function(){return p})),t.d(a,"d",(function(){return b})),t.d(a,"b",(function(){return h})),t.d(a,"c",(function(){return g})),t.d(a,"a",(function(){return f})),t.d(a,"g",(function(){return v}));var n=t(36),r=t.n(n),l=t(55),o=t(486),c=t(31),i=t.n(c),s=t(471),d=t(32);i.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var u=function(e){var a,t=Object(o.a)(null===e||void 0===e?void 0:e.data);try{for(t.s();!(a=t.n()).done;){var n=a.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(d.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(d.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(d.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(d.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(d.a)(null===n||void 0===n?void 0:n.desc))}}catch(r){t.e(r)}finally{t.f()}return e},m=function(e){return function(){var a=Object(l.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a.next=3,i.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"GET_ALL_DATA_LOADING",data:!1});var n,r=Object(o.a)(null===a||void 0===a?void 0:a.data);try{for(r.s();!(n=r.n()).done;){var l=n.value;l.nomineeId=(null===l||void 0===l?void 0:l.nomineeId)&&Object(d.a)(l.nomineeId,!0),l.name=(null===l||void 0===l?void 0:l.name)&&Object(d.a)(l.name,!0),l.relation=(null===l||void 0===l?void 0:l.relation)&&Object(d.a)(l.relation,!0),l.email=(null===l||void 0===l?void 0:l.email)&&Object(d.a)(l.email,!0),l.primaryContact=(null===l||void 0===l?void 0:l.primaryContact)&&Object(d.a)(l.primaryContact,!0),l.secondaryContact=(null===l||void 0===l?void 0:l.secondaryContact)&&Object(d.a)(l.secondaryContact,!0),l.address=(null===l||void 0===l?void 0:l.address)&&Object(d.a)(l.address,!0)}}catch(c){r.e(c)}finally{r.f()}t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(){var a=Object(l.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t({type:"GET_SPEND_DATA_LOADING",data:!0}),a.next=4,i.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){var n;console.log("getSpendData"),t({type:"GET_SPEND_DATA_LOADING",data:!1}),t({type:"GET_DATA",data:null===(n=u(a))||void 0===n?void 0:n.data,totalPages:a.length,params:e})})).catch((function(e){console.log(e),t({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(a){return a({type:"FILTER_DATA",value:e})}},h=function(e){return function(a){console.log("DELETE DATA :"),i.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},g=function(e){return function(a){console.log("DELETE DATA :"),i.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},f=function(e){var a={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0),usage:"Unused"};return"others"===e.relation&&e.relation1&&(a.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/backendapi/nominee/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Added Successfully"),t(m())}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},v=function(e){var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t={_id:e._id,usage:e.usage?e.usage:"Unused",userId:a._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/backendapi/nominee/update",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Updated Successfully"),a(m())}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}},480:function(e,a,t){},489:function(e,a,t){"use strict";var n=t(18),r=t(0),l=t.n(r),o=t(420),c=t(421),i=t(422),s=t(228),d=t(393),u=t(104),m=t.n(u),p=t(5),b=t.n(p),h=t(19);a.a=function(e){var a=Object(r.useState)("Collegue"),t=Object(n.a)(a,2),u=t[0],p=t[1],g=Object(r.useState)("Collegue"),f=Object(n.a)(g,2),v=f[0],E=f[1],O=Object(r.useState)(""),j=Object(n.a)(O,2),N=j[0],w=j[1],y=Object(r.useState)(""),D=Object(n.a)(y,2),k=D[0],S=D[1],x=Object(r.useState)(""),C=Object(n.a)(x,2),A=C[0],I=C[1],L=Object(r.useState)(""),_=Object(n.a)(L,2),T=_[0],F=_[1],U=Object(r.useState)(""),R=Object(n.a)(U,2),z=R[0],P=R[1],B=Object(r.useState)(""),G=Object(n.a)(B,2),W=G[0],H=G[1],J=Object(r.useState)(""),V=Object(n.a)(J,2),Z=V[0],M=V[1],$=Object(r.useState)(!1),Y=Object(n.a)($,2),q=Y[0],K=Y[1],Q=Object(r.useState)(!1),X=Object(n.a)(Q,2),ee=X[0],ae=X[1],te=Object(r.useState)(!1),ne=Object(n.a)(te,2),re=ne[0],le=ne[1],oe=Object(r.useState)(!1),ce=Object(n.a)(oe,2),ie=ce[0],se=ce[1],de=Object(r.useState)(!1),ue=Object(n.a)(de,2),me=ue[0],pe=ue[1],be=Object(r.useState)(!1),he=Object(n.a)(be,2),ge=he[0],fe=he[1],ve=Object(r.useState)(!1),Ee=Object(n.a)(ve,2),Oe=Ee[0],je=Ee[1];Object(r.useEffect)((function(){if(e.data){var a=e.data,t=a.id,n=a.name,r=a.relation,l=a.address,o=a.email,c=a.primaryContact,i=a.secondaryContact;H(t),M(n),p(r),"Collegue"!==r&&"Cousin"!==r&&"Daughter"!==r&&"Daughter-in-law"!==r&&"Friend"!==r&&"Husband"!==r&&"Son"!==r&&"Son-in-law"!==r&&"Wife"!==r&&(p("others"),E(r)),S(l),w(o),I(c),F(i)}else(null===e.data||q)&&De();K(!1)}),[e.data]);var Ne=function(e){switch(e){case"name":0===Z.length&&""===Z?je(!0):je(!1);break;case"email":""===N?le(!0):""!==N&&"undefined"!==typeof N&&(N.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/)?le(!1):le(!0));break;case"address":se(!k);break;case"contact1":0===A.length?pe(!0):0!==A.length&&"undefined"!==typeof A&&(10!==A.length?pe(!0):pe(!1));break;case"contact2":0===T.length||0!==T.length&&10===T.length?fe(!1):fe(!0);break;case"relation":"others"===u&&0===v.length?ae(!0):ae(!1)}},we=function(e,a){switch(e){case"name":M(a),a.length?je(""):je("Enter Valid Name");break;case"email":w(a),""===a?le(!0):""!==a&&"undefined"!==typeof a&&(a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/)?le(!1):le(!0));break;case"address":S(a.replace(/[\n\r]/g,", ")),se(!a);break;case"contact1":I(a),a.length?0!==a.length&&"undefined"!==typeof a&&(10!==a.length?pe(!0):pe(!1)):pe(!0);break;case"contact2":F(a),a.length?0!==a.length&&10===a.length?fe(!1):fe(!0):fe(!1);break;case"relation":p(a),"others"!==a&&0===a.length?ae(!0):ae(!1);break;case"relation1":E(a),0===a.length?ae(!0):ae(!1)}},ye=function(e){switch(e){case"name":je(!1);break;case"email":le(!1);break;case"address":se(!1);break;case"contact1":pe(!1);break;case"contact2":fe(!1);break;case"relation":ae(!1)}},De=function(){M(""),p(""),E(""),w(""),S(""),I(""),F(""),je(!1),se(!1),pe(!1),fe(!1),le(!1),ae(!1)},ke=e.show,Se=e.handleSidebar,xe=e.data;return l.a.createElement("div",{className:b()("data-list-sidebar",{show:ke})},l.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},l.a.createElement("h4",{style:{color:"var(--warning)"}},null!==xe?"UPDATE NOMINEE":"ADD NEW NOMINEE"),l.a.createElement(d.a,{size:20,onClick:function(){Se(!1,!0),De()}})),l.a.createElement(m.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},l.a.createElement(o.a,{className:"form-label-group mb-2"},l.a.createElement(c.a,{className:"input-label",type:"text",value:Z,placeholder:"Nominee Name",onChange:function(e){we("name",e.target.value),ye("name")},onBlur:function(){return Ne("name")},id:"data-name",style:{borderColor:Oe?"red":""}}),Oe&&l.a.createElement("span",{className:"dark"===h.a.theme?"dark-label":"light-label"},Oe),l.a.createElement(i.a,{className:"dark"===h.a.theme?"dark-label":"light-label",for:"data-name"},"Name")),l.a.createElement(o.a,null,l.a.createElement(c.a,{type:"select",id:"data-category",value:u,onChange:function(e){we("relation",e.target.value)}},l.a.createElement("option",null,"Collegue"),l.a.createElement("option",null,"Cousin"),l.a.createElement("option",null,"Daughter"),l.a.createElement("option",null,"Daughter-in-law"),l.a.createElement("option",null,"Friend"),l.a.createElement("option",null,"Husband"),l.a.createElement("option",null,"Son"),l.a.createElement("option",null,"Son-in-law"),l.a.createElement("option",null,"Wife"),l.a.createElement("option",null,"others")),l.a.createElement(i.a,{className:"dark"===h.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation")),"others"===u&&l.a.createElement(o.a,{className:"form-label-group mb-2"},l.a.createElement(c.a,{type:"text",value:v,placeholder:"Relation Name",onChange:function(e){we("relation1",e.target.value),ye("relation")},onBlur:function(){return Ne("relation")},id:"data-Relation",style:{borderColor:ee?"red":""}})),l.a.createElement(o.a,{className:"form-label-group mb-2"},l.a.createElement(c.a,{className:"input-label",type:"email",value:N,placeholder:"Enter nominee email",onChange:function(e){we("email",e.target.value),ye("email")},onBlur:function(){return Ne("email")},id:"data-email",style:{borderColor:re?"red":""}}),l.a.createElement(i.a,{className:"dark"===h.a.theme?"dark-label":"light-label",for:"data-email"},"Nominee Email")),l.a.createElement(o.a,{className:"form-label-group mb-2"},l.a.createElement(c.a,{className:"input-label",type:"number",value:A,onChange:function(e){we("contact1",e.target.value),ye("contact1")},onBlur:function(){return Ne("contact1")},id:"data-price",placeholder:"Enter primary contact No",style:{borderColor:me?"red":""}}),l.a.createElement(i.a,{className:"dark"===h.a.theme?"dark-label":"light-label",for:"data-price"},"Primary Contact")),l.a.createElement(o.a,{className:"form-label-group mb-2"},l.a.createElement(c.a,{className:"input-label",type:"number",value:T,onChange:function(e){we("contact2",e.target.value),ye("contact2")},onBlur:function(){return Ne("contact2")},id:"data-price",placeholder:"Enter secondry contact No",style:{borderColor:ge?"red":""}}),l.a.createElement(i.a,{className:"dark"===h.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact")),l.a.createElement(o.a,{className:"form-label-group mb-2"},l.a.createElement(c.a,{className:"input-label ",style:{height:"115px",borderColor:ie?"red":""},type:"textarea",value:k,placeholder:"Address",onChange:function(e){we("address",e.target.value),ye("address")},onBlur:function(){return Ne("address")},id:"data-Address"}),l.a.createElement(i.a,{className:"dark"===h.a.theme?"dark-label":"light-label",for:"data-Address"},"Address *")),e.thumbView&&z.length<=0?l.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",l.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(e){return P(URL.createObjectURL(e.target.files[0]))}})):null),l.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},l.a.createElement(s.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){De()}},"Reset"),l.a.createElement(s.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return function(){if(!(ee||me||ie||ge||re||Oe)){var a={relation:u,relation1:v,email:N,address:k,contact1:A,contact2:T,id:W,name:Z};null!==e.data?(a._id=e.data._id,a.usage=e.data.usage,e.updateData(a)):(K(!0),e.addData(a))}}()}},null!==xe?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))}},667:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(496),o=t(497),c=t(36),i=t.n(c),s=t(55),d=t(18),u=t(228),m=t(421),p=t(469),b=t(426),h=t(603),g=t(145),f=t(471),v=t(498),E=t.n(v),O=t(5),j=t.n(O),N=t(48),w=t(500),y=t(447),D=t(448),k=t(467),S=t(22),x=t(479),C=(t(474),t(475),t(489)),A=t(31),I=t.n(A),L=t(14),_=t(15),T=t(17),F=t(16),U=t(393),R=function(e){Object(T.a)(t,e);var a=Object(F.a)(t);function t(){var e;Object(L.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(_.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},r.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?r.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},r.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,r.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?r.a.createElement("div",{className:"chip-closable",onClick:function(a){return e.closeChip(a)}},this.props.closableIcon?this.props.closableIcon:r.a.createElement(U.a,null)):null))}}]),t}(r.a.Component);t(480),t(234);I.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var z={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},P=function(e){var a;return r.a.createElement("div",{className:"data-list-action"},r.a.createElement(w.a,{style:{cursor:"Unused"===(null===e||void 0===e||null===(a=e.row)||void 0===a?void 0:a.usage)?"pointer":"no-drop"},size:window.screen.width<500?13:20,onClick:function(){var a;"Unused"===(null===e||void 0===e||null===(a=e.row)||void 0===a?void 0:a.usage)&&e.setRow()}}))},B=function(e){return r.a.createElement("div",{className:"data-list-action"},window.screen.width>500?r.a.createElement(y.a,{className:"cursor-pointer mr-1",size:"13",onClick:function(){return e.currentData(e.row)}}):r.a.createElement(D.a,{className:"cursor-pointer mr-1",size:"20",onClick:function(){return e.currentData(e.row)}}))},G=function(e){return r.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},r.a.createElement("div",{className:"actions-left d-flex"},r.a.createElement(u.a.Ripple,{color:"white",className:"sort-dropdown mx-50",style:{height:"75%",backgroundColor:"var(--warning)",fontWeight:"bold"},outline:!0,onClick:function(){return e.handleSidebar(!0,!0)}},r.a.createElement("span",{className:"align-middle"},"Add"))),r.a.createElement("div",{className:"actions-right d-flex flex-wrap"},r.a.createElement("div",{className:"filter-section"},r.a.createElement(m.a,{type:"text",style:{height:"75%",borderRadius:"5rem",fontSize:"1rem"},onChange:function(a){return e.handleFilter(a)},placeholder:"Find Nominee",className:"placeholder"}))),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"data-list-rows-dropdown mr-1 d-none"},r.a.createElement(u.a.Ripple,{color:"",className:"sort-dropdown",style:{height:"75%"}},r.a.createElement("span",{className:"align-middle mx-50"},"Count : ",e.total)))))},W=Object(S.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),(function(e){return{deleteData:function(a){return e(Object(x.b)(a))},updateData:function(a){return e(Object(x.g)(a))},addData:function(a){return e(Object(x.a)(a))},getData:function(a){return e(Object(x.e)(a))},filterData:function(a){return e(Object(x.d)({data:a}))},dataTest:function(){return e({type:"GET_ALL_DATA_LOADING",data:!0})}}}))((function(e){var a=[{name:"Edit",sortable:!1,width:"80px",cell:function(a){return r.a.createElement(B,{row:a,getData:e.getData,parsedFilter:e.parsedFilter,currentData:ke})}},{name:"Name",selector:"name",sortable:!0,minWidth:"200px",cell:function(e){return r.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",sortable:!0,width:"170px",cell:function(e){return r.a.createElement("p",{title:null===e||void 0===e?void 0:e.relation,className:"text-truncate text-bold-500 mb-0"},"others"===(null===e||void 0===e?void 0:e.relation)?null===e||void 0===e?void 0:e.relation1:null===e||void 0===e?void 0:e.relation)}},{name:"Email",minWidth:"200px",selector:"email",sortable:!0},{name:"Contact",selector:"primaryContact",minWidth:"150px",sortable:!0},{name:"Status",width:"120px",selector:"unused",sortable:!0,cell:function(e){return r.a.createElement(R,{className:"m-0",color:"Unused"!==e.usage&&e.usage?"success":"primary",text:"Unused"!==e.usage&&e.usage?"Used":"Unused"})}},{name:"Delete",sortable:!1,width:"110px",cell:function(a){return r.a.createElement(P,{row:a,setRow:function(){T(!0),A(a)},getData:e.getData,parsedFilter:e.parsedFilter,deleteRow:we})}}],t=[{name:"Info",sortable:!0,width:"50px",cell:function(a){return r.a.createElement(B,{row:a,getData:e.getData,parsedFilter:e.parsedFilter,currentData:ke})}},{name:"Name",selector:"name",sortable:!0,minWidth:"50px",cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",maxWidth:"50px",sortable:!0,cell:function(e){return r.a.createElement("p",{title:null===e||void 0===e?void 0:e.relation,className:"text-truncate text-bold-500 mb-0"},"others"===(null===e||void 0===e?void 0:e.relation)?null===e||void 0===e?void 0:e.relation1:null===e||void 0===e?void 0:e.relation)}},{name:"Trash",sortable:!0,width:"50px",cell:function(a){return r.a.createElement(P,{row:a,getData:e.getData,parsedFilter:e.parsedFilter,currentData:ke,deleteRow:we})}}],l=Object(n.useState)([]),o=Object(d.a)(l,2),c=o[0],m=o[1],v=Object(n.useState)(0),O=Object(d.a)(v,2),w=O[0],y=O[1],D=Object(n.useState)(null),S=Object(d.a)(D,2),x=S[0],A=S[1],I=Object(n.useState)(!1),L=Object(d.a)(I,2),_=L[0],T=L[1],F=Object(n.useState)([]),U=Object(d.a)(F,2),W=U[0],H=U[1],J=Object(n.useState)(""),V=Object(d.a)(J,2),Z=V[0],M=V[1],$=Object(n.useState)(4),Y=Object(d.a)($,2),q=Y[0],K=Y[1],Q=Object(n.useState)(!1),X=Object(d.a)(Q,2),ee=X[0],ae=X[1],te=Object(n.useState)(null),ne=Object(d.a)(te,2),re=ne[0],le=ne[1],oe=Object(n.useState)(0),ce=Object(d.a)(oe,2),ie=ce[0],se=ce[1],de=Object(n.useState)([]),ue=Object(d.a)(de,2),me=ue[0],pe=ue[1],be=Object(n.useState)(""),he=Object(d.a)(be,2),ge=he[0],fe=he[1],ve=Object(n.useState)(!1),Ee=Object(d.a)(ve,2),Oe=Ee[0],je=Ee[1];Object(n.useEffect)((function(){var a,t,n;e.dataList.data.length===c.length&&w===(null===(a=e.parsedFilter)||void 0===a?void 0:a.page)||(m(e.dataList.data),H(e.dataList.filteredData),y(parseInt(null===(t=e.parsedFilter)||void 0===t?void 0:t.page)-1),K(parseInt(null===(n=e.parsedFilter)||void 0===n?void 0:n.perPage)),se(e.dataList.totalRecords),pe(e.dataList.sortIndex))}),[e.dataList]),Object(n.useEffect)((function(){e.getData(),e.dataTest()}),[]);var Ne=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ae(e),!0===a&&(le(null),fe(a))},we=function(a){if(e.deleteData(a),c.length-1===0){var t,n=e.thumbView?"/data-list/thumb-view/":"/#/nominee/list/";N.a.push("".concat(n,"list-view?page=").concat(parseInt((null===(t=e.parsedFilter)||void 0===t?void 0:t.page)-1),"&perPage=").concat(e.parsedFilter.perPage))}},ye=function(){var a=Object(s.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return je(!0),a.prev=1,a.next=4,e.addData(t);case 4:je(!1),Ne(!1,!0),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),je(!1),f.b.error("Add Nominee Failed! Please contact admin");case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),De=function(){var a=Object(s.a)(i.a.mark((function a(t){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==t.name&&""!==t.relation&&""!==t.email&&""!==t.contact1&&""!==t.address){a.next=4;break}f.b.error("Please Fill All Mandatory Details"),a.next=16;break;case 4:return je(!0),a.prev=5,a.next=8,e.updateData(t);case 8:je(!1),Ne(!1,!0),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(5),je(!1),f.b.error("Unable to update! Please try again");case 16:case"end":return a.stop()}}),a,null,[[5,12]])})));return function(e){return a.apply(this,arguments)}}(),ke=function(e){le(e),Ne(!0)};return e.listLoading?r.a.createElement("div",{className:"fallback-spinner vh-100"},r.a.createElement(g.a,{color:"danger",size:"sm"})):r.a.createElement("div",{className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},r.a.createElement(p.a,{isOpen:_,className:"modal-dialog-centered",backdrop:"static"},r.a.createElement(b.a,null,"Are you sure you want to delete this record?"),r.a.createElement(h.a,null,r.a.createElement(u.a,{color:"primary",onClick:function(){return T(!1)},className:"button-label"},"Cancel"),r.a.createElement(u.a,{color:"danger",onClick:function(){we(x),T(!1)},className:"button-label"},"Delete"))),r.a.createElement(E.a,{width:"200",columns:window.screen.width<600?t:a,data:Z.length?W:c,noHeader:!0,subHeader:!0,selectableRows:(window.screen.width,!1),responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,customStyles:z,subHeaderComponent:r.a.createElement(G,{className:"data-table",handleSidebar:Ne,handleFilter:function(a){M(a.target.value),e.filterData(a.target.value)},handleRowsPerPage:function(a){var t=e.parsedFilter,n=e.getData,r=void 0!==(null===t||void 0===t?void 0:t.page)?null===t||void 0===t?void 0:t.page:1;N.a.push("/nominee/list?page=".concat(r,"&perPage=").concat(a)),K(a),n({page:null===t||void 0===t?void 0:t.page,perPage:a})},rowsPerPage:q,total:ie,index:me}),sortIcon:r.a.createElement(k.a,null)}),r.a.createElement(C.a,{show:ee,data:re,updateData:De,addData:ye,isLoading:Oe,handleSidebar:Ne,thumbView:e.thumbView,getData:e.getData,dataParams:e.parsedFilter,addNew:ge}),r.a.createElement("div",{className:j()("data-list-overlay",{show:ee}),onClick:function(){return Ne(!1,!0)}}))})),H=t(578),J=t.n(H);a.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"warning spacing nodisplay"},"Nominees"),r.a.createElement(l.a,null,r.a.createElement(f.a,null),r.a.createElement(o.a,{sm:"12"},r.a.createElement(W,{parsedFilter:J.a.parse(e.location.search)}))))}}}]);
//# sourceMappingURL=24.1cfb8dad.chunk.js.map