(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[18],{475:function(e,a,t){},476:function(e,a,t){e.exports=t.p+"static/media/banner-25.a47593fc.jpg"},478:function(e,a,t){},479:function(e,a,t){"use strict";t.d(a,"e",(function(){return m})),t.d(a,"f",(function(){return b})),t.d(a,"d",(function(){return p})),t.d(a,"b",(function(){return v})),t.d(a,"c",(function(){return g})),t.d(a,"a",(function(){return f})),t.d(a,"g",(function(){return y}));var n=t(36),l=t.n(n),o=t(55),i=t(486),r=t(31),c=t.n(r),s=t(471),d=t(32);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var u=function(e){var a,t=Object(i.a)(null===e||void 0===e?void 0:e.data);try{for(t.s();!(a=t.n()).done;){var n=a.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(d.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(d.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(d.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(d.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(d.a)(null===n||void 0===n?void 0:n.desc))}}catch(l){t.e(l)}finally{t.f()}return e},m=function(e){return function(){var a=Object(o.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a.next=3,c.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"GET_ALL_DATA_LOADING",data:!1});var n,l=Object(i.a)(null===a||void 0===a?void 0:a.data);try{for(l.s();!(n=l.n()).done;){var o=n.value;o.nomineeId=(null===o||void 0===o?void 0:o.nomineeId)&&Object(d.a)(o.nomineeId,!0),o.name=(null===o||void 0===o?void 0:o.name)&&Object(d.a)(o.name,!0),o.relation=(null===o||void 0===o?void 0:o.relation)&&Object(d.a)(o.relation,!0),o.email=(null===o||void 0===o?void 0:o.email)&&Object(d.a)(o.email,!0),o.primaryContact=(null===o||void 0===o?void 0:o.primaryContact)&&Object(d.a)(o.primaryContact,!0),o.secondaryContact=(null===o||void 0===o?void 0:o.secondaryContact)&&Object(d.a)(o.secondaryContact,!0),o.address=(null===o||void 0===o?void 0:o.address)&&Object(d.a)(o.address,!0)}}catch(r){l.e(r)}finally{l.f()}t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var a=Object(o.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t({type:"GET_SPEND_DATA_LOADING",data:!0}),a.next=4,c.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){var n;console.log("getSpendData"),t({type:"GET_SPEND_DATA_LOADING",data:!1}),t({type:"GET_DATA",data:null===(n=u(a))||void 0===n?void 0:n.data,totalPages:a.length,params:e})})).catch((function(e){console.log(e),t({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(a){return a({type:"FILTER_DATA",value:e})}},v=function(e){return function(a){console.log("DELETE DATA :"),c.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},g=function(e){return function(a){console.log("DELETE DATA :"),c.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},f=function(e){var a={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0),usage:"Unused"};return"others"===e.relation&&e.relation1&&(a.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Added Successfully"),t(m())}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},y=function(e){var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t={_id:e._id,usage:e.usage?e.usage:"Unused",userId:a._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(o.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/update",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Updated Successfully"),a(m())}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}},480:function(e,a,t){},481:function(e,a,t){e.exports=t.p+"static/media/banner-31.d54fc4be.jpg"},482:function(e,a,t){e.exports=t.p+"static/media/banner-22.702fed4d.jpg"},483:function(e,a,t){e.exports=t.p+"static/media/banner-23.b74d240c.jpg"},484:function(e,a,t){e.exports=t.p+"static/media/banner-24.d3fb51a8.jpg"},489:function(e,a,t){"use strict";var n=t(18),l=t(0),o=t.n(l),i=t(420),r=t(421),c=t(422),s=t(228),d=t(393),u=t(104),m=t.n(u),b=t(5),p=t.n(b),v=t(19);a.a=function(e){var a=Object(l.useState)("Collegue"),t=Object(n.a)(a,2),u=t[0],b=t[1],g=Object(l.useState)("Collegue"),f=Object(n.a)(g,2),y=f[0],E=f[1],h=Object(l.useState)(""),O=Object(n.a)(h,2),N=O[0],j=O[1],k=Object(l.useState)(""),C=Object(n.a)(k,2),S=C[0],I=C[1],D=Object(l.useState)(""),x=Object(n.a)(D,2),A=x[0],w=x[1],T=Object(l.useState)(""),L=Object(n.a)(T,2),F=L[0],_=L[1],B=Object(l.useState)(""),z=Object(n.a)(B,2),R=z[0],U=z[1],P=Object(l.useState)(""),J=Object(n.a)(P,2),G=J[0],M=J[1],W=Object(l.useState)(""),H=Object(n.a)(W,2),V=H[0],Z=H[1],$=Object(l.useState)(!1),q=Object(n.a)($,2),K=q[0],Q=q[1],X=Object(l.useState)(!1),Y=Object(n.a)(X,2),ee=Y[0],ae=Y[1],te=Object(l.useState)(!1),ne=Object(n.a)(te,2),le=ne[0],oe=ne[1],ie=Object(l.useState)(!1),re=Object(n.a)(ie,2),ce=re[0],se=re[1],de=Object(l.useState)(!1),ue=Object(n.a)(de,2),me=ue[0],be=ue[1],pe=Object(l.useState)(!1),ve=Object(n.a)(pe,2),ge=ve[0],fe=ve[1],ye=Object(l.useState)(!1),Ee=Object(n.a)(ye,2),he=Ee[0],Oe=Ee[1];Object(l.useEffect)((function(){if(e.data){var a=e.data,t=a.id,n=a.name,l=a.relation,o=a.address,i=a.email,r=a.primaryContact,c=a.secondaryContact;M(t),Z(n),b(l),"Collegue"!==l&&"Cousin"!==l&&"Daughter"!==l&&"Daughter-in-law"!==l&&"Friend"!==l&&"Husband"!==l&&"Son"!==l&&"Son-in-law"!==l&&"Wife"!==l&&(b("others"),E(l)),I(o),j(i),w(r),_(c)}else(null===e.data||K)&&Ce();Q(!1)}),[e.data]);var Ne=function(e){switch(e){case"name":0===V.length&&""===V?Oe(!0):Oe(!1);break;case"email":""===N?oe(!0):""!==N&&"undefined"!==typeof N&&(N.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/)?oe(!1):oe(!0));break;case"address":se(!S);break;case"contact1":0===A.length?be(!0):0!==A.length&&"undefined"!==typeof A&&(10!==A.length?be(!0):be(!1));break;case"contact2":0===F.length||0!==F.length&&10===F.length?fe(!1):fe(!0);break;case"relation":"others"===u&&0===y.length?ae(!0):ae(!1)}},je=function(e,a){switch(e){case"name":Z(a),a.length?Oe(""):Oe("Enter Valid Name");break;case"email":j(a),""===a?oe(!0):""!==a&&"undefined"!==typeof a&&(a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/)?oe(!1):oe(!0));break;case"address":I(a.replace(/[\n\r]/g,", ")),se(!a);break;case"contact1":w(a),a.length?0!==a.length&&"undefined"!==typeof a&&(10!==a.length?be(!0):be(!1)):be(!0);break;case"contact2":_(a),a.length?0!==a.length&&10===a.length?fe(!1):fe(!0):fe(!1);break;case"relation":b(a),"others"!==a&&0===a.length?ae(!0):ae(!1);break;case"relation1":E(a),0===a.length?ae(!0):ae(!1)}},ke=function(e){switch(e){case"name":Oe(!1);break;case"email":oe(!1);break;case"address":se(!1);break;case"contact1":be(!1);break;case"contact2":fe(!1);break;case"relation":ae(!1)}},Ce=function(){Z(""),b(""),E(""),j(""),I(""),w(""),_(""),Oe(!1),se(!1),be(!1),fe(!1),oe(!1),ae(!1)},Se=e.show,Ie=e.handleSidebar,De=e.data;return o.a.createElement("div",{className:p()("data-list-sidebar",{show:Se})},o.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},o.a.createElement("h4",{style:{color:"var(--warning)"}},null!==De?"UPDATE NOMINEE":"ADD NEW NOMINEE"),o.a.createElement(d.a,{size:20,onClick:function(){Ie(!1,!0),Ce()}})),o.a.createElement(m.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},o.a.createElement(i.a,{className:"form-label-group mb-2"},o.a.createElement(r.a,{className:"input-label",type:"text",value:V,placeholder:"Nominee Name",onChange:function(e){je("name",e.target.value),ke("name")},onBlur:function(){return Ne("name")},id:"data-name",style:{borderColor:he?"red":""}}),he&&o.a.createElement("span",{className:"dark"===v.a.theme?"dark-label":"light-label"},he),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-name"},"Name")),o.a.createElement(i.a,null,o.a.createElement(r.a,{type:"select",id:"data-category",value:u,onChange:function(e){je("relation",e.target.value)}},o.a.createElement("option",null,"Collegue"),o.a.createElement("option",null,"Cousin"),o.a.createElement("option",null,"Daughter"),o.a.createElement("option",null,"Daughter-in-law"),o.a.createElement("option",null,"Friend"),o.a.createElement("option",null,"Husband"),o.a.createElement("option",null,"Son"),o.a.createElement("option",null,"Son-in-law"),o.a.createElement("option",null,"Wife"),o.a.createElement("option",null,"others")),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation")),"others"===u&&o.a.createElement(i.a,{className:"form-label-group mb-2"},o.a.createElement(r.a,{type:"text",value:y,placeholder:"Relation Name",onChange:function(e){je("relation1",e.target.value),ke("relation")},onBlur:function(){return Ne("relation")},id:"data-Relation",style:{borderColor:ee?"red":""}})),o.a.createElement(i.a,{className:"form-label-group mb-2"},o.a.createElement(r.a,{className:"input-label",type:"email",value:N,placeholder:"Enter nominee email",onChange:function(e){je("email",e.target.value),ke("email")},onBlur:function(){return Ne("email")},id:"data-email",style:{borderColor:le?"red":""}}),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-email"},"Nominee Email")),o.a.createElement(i.a,{className:"form-label-group mb-2"},o.a.createElement(r.a,{className:"input-label",type:"number",value:A,onChange:function(e){je("contact1",e.target.value),ke("contact1")},onBlur:function(){return Ne("contact1")},id:"data-price",placeholder:"Enter primary contact No",style:{borderColor:me?"red":""}}),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-price"},"Primary Contact")),o.a.createElement(i.a,{className:"form-label-group mb-2"},o.a.createElement(r.a,{className:"input-label",type:"number",value:F,onChange:function(e){je("contact2",e.target.value),ke("contact2")},onBlur:function(){return Ne("contact2")},id:"data-price",placeholder:"Enter secondry contact No",style:{borderColor:ge?"red":""}}),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact")),o.a.createElement(i.a,{className:"form-label-group mb-2"},o.a.createElement(r.a,{className:"input-label ",style:{height:"115px",borderColor:ce?"red":""},type:"textarea",value:S,placeholder:"Address",onChange:function(e){je("address",e.target.value),ke("address")},onBlur:function(){return Ne("address")},id:"data-Address"}),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-Address"},"Address *")),e.thumbView&&R.length<=0?o.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",o.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(e){return U(URL.createObjectURL(e.target.files[0]))}})):null),o.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},o.a.createElement(s.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Ce()}},"Reset"),o.a.createElement(s.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return function(){if(!(ee||me||ce||ge||le||he)){var a={relation:u,relation1:y,email:N,address:S,contact1:A,contact2:F,id:G,name:V};null!==e.data?(a._id=e.data._id,a.usage=e.data.usage,e.updateData(a)):(Q(!0),e.addData(a))}}()}},null!==De?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))}},511:function(e,a,t){"use strict";var n=t(14),l=t(15),o=t(17),i=t(16),r=t(0),c=t.n(r),s=t(485),d=t(490),u=t(491),m=t(540),b=t(418),p=t(493),v=t(494),g=t(5),f=t.n(g),y=t(467),E=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",collapseID:"",status:"Closed",collapseItems:e.props.collapseItems,colorOption:e.props.colorOption},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleCollapse=function(a){e.setState((function(e){return{collapseID:e.collapseID!==a?a:""}}))},e.onEntered=function(a){a===e.state.collapseID&&e.setState({status:"Opened"})},e.onEntering=function(a){a===e.state.collapseID&&e.setState({status:"Opening..."})},e.onExited=function(a){a===e.state.collapseID&&e.setState({status:"Closed"})},e.onExiting=function(a){a===e.state.collapseID&&e.setState({status:"Closing..."})},e.formatme=function(a){var t,n;return(null===(t=e.state)||void 0===t||null===(n=t.colorOption)||void 0===n?void 0:n[a])?e.state.colorOption[a]:a},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state.collapseItems.length>0?this.state.collapseItems.map((function(a){return c.a.createElement("div",{className:"collapse-margin",key:a.id},c.a.createElement(s.a,{onClick:function(){return e.toggleCollapse(a.id)},className:f()({"collapse-collapsed":"Closed"===e.state.status&&e.state.collapseID===a.id,"collapse-shown":"Opened"===e.state.status&&e.state.collapseID===a.id,closing:"Closing..."===e.state.status&&e.state.collapseID===a.id,opening:"Opening..."===e.state.status&&e.state.collapseID===a.id})},c.a.createElement(d.a,null,c.a.createElement(u.a,{className:"lead collapse-title collapsed"},e.formatme(a.title)),c.a.createElement(y.a,{size:15,className:"collapse-icon"})),c.a.createElement(m.a,{isOpen:a.id===e.state.collapseID,onEntering:function(){return e.onEntering(a.id)},onEntered:function(){return e.onEntered(a.id)},onExiting:function(){return e.onExiting(a.id)},onExited:function(){return e.onExited(a.id)}},c.a.createElement(b.a,null,a.content))))})):c.a.createElement("span",{style:{fontSize:"12px",marginTop:"-10px"}},"No Asset Found");return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{style:{paddingBottom:"1.5rem",paddingRight:"0.5rem",marginBottom:"portfolio"===this.props.page?"2.2rem":"1rem"}},c.a.createElement(d.a,null,c.a.createElement(u.a,null,this.props.heading)),c.a.createElement(b.a,{className:"card_body",style:{maxHeight:"portfolio"===this.props.page?"260px":" calc(100vh - 435px)"}},c.a.createElement(p.a,{activeTab:this.state.activeTab},c.a.createElement(v.a,{tabId:"1"},c.a.createElement("div",{className:"vx-collapse"},a)),c.a.createElement(v.a,{className:"component-code",tabId:"2"},"hey")))))}}]),t}(c.a.Component);a.a=E},671:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(22),i=t(496),r=t(497),c=t(493),s=t(494),d=t(36),u=t.n(d),m=t(55),b=t(18),p=t(583),v=t(32),g=t(582),f=t(469),y=t(426),E=t(603),h=t(228),O=t(485),N=t(490),j=t(491),k=t(418),C=t(419),S=t(420),I=t(422),D=t(421),x=t(618),A=t(488),w=t.n(A),T=t(5),L=t.n(T),F=(t(141),t(511)),_={Custom:[{key:"Liability Name",val:"",type:"Text"}],"Credit Card":[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Card Limit",val:"",type:"Number"}],Insurance:[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Policy Number *",val:"",type:"Number",mandatory:!0},{key:"Policy Amount *",val:"",type:"Number",mandatory:!0}],"Loan Amount":[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Loan Account Number *",val:"",type:"Number",mandatory:!0},{key:"Loan Amount *",val:"",type:"Number",mandatory:!0}],Notes:[{key:"Notes *",val:"",type:"textarea",mandatory:!0},{key:"Expiry Date",val:"",type:"Date"}],Ponzi:[{key:"Description *",val:"",type:"Text",mandatory:!0},{key:"Return Period *",val:"",type:"Text",mandatory:!0},{key:"Amount *",val:"",type:"Number",mandatory:!0}],Receipt:[{key:"Object Name *",val:"",type:"Text",mandatory:!0},{key:"Description *",val:"",type:"Text",mandatory:!0},{key:"Expiry",val:"",type:"Date"}],Warranty:[{key:"Object Name *",val:"",type:"Text",mandatory:!0},{key:"Warranty Period *",val:"",type:"Text",mandatory:!0},{key:"Bill Amount *",val:"",type:"Number",mandatory:!0}]},B=(t(142),t(481)),z=t.n(B),R=t(482),U=t.n(R),P=t(483),J=t.n(P),G=t(484),M=t.n(G),W=t(476),H=t.n(W),V=t(31),Z=t.n(V),$=t(471),q=(t(474),t(475),t(478),t(479)),K=t(487),Q=t(19),X=t(447),Y=t(500),ee=t(656),ae=(t(480),t(234),t(489)),te={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}},ne=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0},{value:"File",label:"File",color:"#0052CC",isFixed:!0}],le=Object(o.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),{getData:q.e,addData:q.a})((function(e){var a,t,o,d,A,T,B,R,P,G,W,V,q,le,oe,ie,re,ce,se,de,ue,me,be,pe,ve,ge,fe,ye,Ee,he,Oe,Ne,je,ke,Ce=[{value:"Credit Card",label:(null===(a=e.messages)||void 0===a||null===(t=a.colorOption)||void 0===t?void 0:t["Credit Card"])?null===(o=e.messages)||void 0===o||null===(d=o.colorOption)||void 0===d?void 0:d["Credit Card"]:"Credit Card",color:"#0052CC",isFixed:!0},{value:"Insurance",label:(null===(A=e.messages)||void 0===A||null===(T=A.colorOption)||void 0===T?void 0:T.Insurance)?null===(B=e.messages)||void 0===B||null===(R=B.colorOption)||void 0===R?void 0:R.Insurance:"Insurance",color:"#0052CC",isFixed:!0},{value:"Loan Amount",label:(null===(P=e.messages)||void 0===P||null===(G=P.colorOption)||void 0===G?void 0:G["Loan Amount"])?null===(W=e.messages)||void 0===W||null===(V=W.colorOption)||void 0===V?void 0:V["Loan Amount"]:"Loan Amount",color:"#00B8D9",isFixed:!0},{value:"Notes",label:(null===(q=e.messages)||void 0===q||null===(le=q.colorOption)||void 0===le?void 0:le.Notes)?null===(oe=e.messages)||void 0===oe||null===(ie=oe.colorOption)||void 0===ie?void 0:ie.Notes:"Notes",color:"#0052CC",isFixed:!0},{value:"Ponzi",label:(null===(re=e.messages)||void 0===re||null===(ce=re.colorOption)||void 0===ce?void 0:ce.Ponzi)?null===(se=e.messages)||void 0===se||null===(de=se.colorOption)||void 0===de?void 0:de.Ponzi:"Ponzi",color:"#0052CC",isFixed:!0},{value:"Receipt",label:(null===(ue=e.messages)||void 0===ue||null===(me=ue.colorOption)||void 0===me?void 0:me.Receipt)?null===(be=e.messages)||void 0===be||null===(pe=be.colorOption)||void 0===pe?void 0:pe.Receipt:"Receipt",color:"#0052CC",isFixed:!0},{value:"Warranty",label:(null===(ve=e.messages)||void 0===ve||null===(ge=ve.colorOption)||void 0===ge?void 0:ge.Warranty)?null===(fe=e.messages)||void 0===fe||null===(ye=fe.colorOption)||void 0===ye?void 0:ye.Warranty:"Warranty",color:"#0052CC",isFixed:!0},{value:"Custom",label:(null===(Ee=e.messages)||void 0===Ee||null===(he=Ee.colorOption)||void 0===he?void 0:he.Custom)?null===(Oe=e.messages)||void 0===Oe||null===(Ne=Oe.colorOption)||void 0===Ne?void 0:Ne.Custom:"Custom",color:"#0052CC",isFixed:!0}],Se=(null===(je=e.messages)||void 0===je?void 0:je.liabilityOption)?null===(ke=e.messages)||void 0===ke?void 0:ke.liabilityOption:_,Ie=l.a.createRef(),De=l.a.createRef(),xe=l.a.createRef(),Ae=Object(n.useState)(!1),we=Object(b.a)(Ae,2),Te=we[0],Le=we[1],Fe=Object(n.useState)(!1),_e=Object(b.a)(Fe,2),Be=_e[0],ze=_e[1],Re=Object(n.useState)(null),Ue=Object(b.a)(Re,2),Pe=Ue[0],Je=Ue[1],Ge=Object(n.useState)(""),Me=Object(b.a)(Ge,2),We=Me[0],He=Me[1],Ve=Object(n.useState)(""),Ze=Object(b.a)(Ve,2),$e=Ze[0],qe=Ze[1],Ke=Object(n.useState)(!0),Qe=Object(b.a)(Ke,2),Xe=Qe[0],Ye=Qe[1],ea=Object(n.useState)([]),aa=Object(b.a)(ea,2),ta=aa[0],na=aa[1],la=Object(n.useState)(""),oa=Object(b.a)(la,2),ia=oa[0],ra=oa[1],ca=Object(n.useState)(!1),sa=Object(b.a)(ca,2),da=sa[0],ua=sa[1],ma=Object(n.useState)(!1),ba=Object(b.a)(ma,2),pa=ba[0],va=ba[1],ga=Object(n.useState)(null),fa=Object(b.a)(ga,2),ya=fa[0],Ea=fa[1],ha=Object(n.useState)(!1),Oa=Object(b.a)(ha,2),Na=Oa[0],ja=Oa[1],ka=Object(n.useState)([]),Ca=Object(b.a)(ka,2),Sa=Ca[0],Ia=Ca[1],Da=Object(n.useState)(!1),xa=Object(b.a)(Da,2),Aa=xa[0],wa=xa[1],Ta=Object(n.useState)([]),La=Object(b.a)(Ta,2),Fa=La[0],_a=La[1],Ba=Object(n.useState)(!1),za=Object(b.a)(Ba,2),Ra=za[0],Ua=za[1],Pa=Object(n.useState)(""),Ja=Object(b.a)(Pa,2),Ga=Ja[0],Ma=Ja[1],Wa=Object(n.useState)(!0),Ha=Object(b.a)(Wa,2),Va=Ha[0],Za=Ha[1],$a=Object(n.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),qa=Object(b.a)($a,2),Ka=qa[0],Qa=qa[1];Object(n.useEffect)((function(){if(e.dataList.data.length){var a=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];e.dataList.data.forEach((function(e){var t={value:e._id,label:e.name+" - "+e.relation,color:"#00B8D9",isFixed:!1};a.push(t)})),Qa(a)}}),[e.dataList]),Object(n.useEffect)((function(){!e.listLoading&&e.getData(),et()}),[]);var Xa=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ua(e),!0===a&&(Ea(null),va(!0))},Ya=function(){var a=Object(m.a)(u.a.mark((function a(t){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return ja(!0),a.prev=1,a.next=4,e.addData(t);case 4:ja(!1),Xa(!1,!0),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),ja(!1),$.b.error("Add Nominee Failed! Please contact admin");case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),et=function(){var e,a=JSON.parse(localStorage.getItem("logInUserData"));ta.splice(0,ta.length),(null===a||void 0===a||null===(e=a.liabilities)||void 0===e?void 0:e.length)&&a.liabilities.forEach((function(e,a){if(e.id){var t="";e.nominees.forEach((function(a,n){n===e.nominees.length-1?t+=a.name:t=t+a.name+", "}));var n=l.a.createElement("div",null,l.a.createElement(i.a,null,e.liabilityDetails.map((function(e,a){return""!==e.val?l.a.createElement(r.a,{md:"5",sm:"12",key:a+e.key},l.a.createElement(g.a,null,l.a.createElement("b",null,e.key," :")," ",Xe?e.val:"***********")):""})),l.a.createElement(r.a,{md:"5",sm:"12"},l.a.createElement(g.a,null,l.a.createElement("b",null,"Nominees :")," ",Xe?t:"*******************")),l.a.createElement(r.a,{md:"2",sm:"12"},l.a.createElement(g.a,null,l.a.createElement("b",null,l.a.createElement(X.a,{className:"cursor-pointer mr-1",size:window.screen.width<600?13:20,onClick:function(){ot(e)}})),l.a.createElement("b",null,l.a.createElement(Y.a,{className:"cursor-pointer",size:window.screen.width<600?13:20,onClick:function(){console.log("event",e),Je(e.id),Le(!0)}})))))),o={id:a+1,title:e.liabilityType,content:n};ta.push(o)}})),na(null===ta||void 0===ta?void 0:ta.reverse())},at=function(){wa(!Aa)},tt=function(e,a){var t=Fa,n=t.findIndex((function(e){return e.key===a.key}));e.length<50&&(t[n].val=e,_a(t),function(){var e=!1;Fa.forEach((function(a){a.mandatory&&!a.val&&(e=!0)})),Za(e)}(),ze(!Be))},nt=function(){Ie.current.select.clearValue(),De.current.select.clearValue(),ra(""),_a([]),Ia([]),Ra&&Za(!0)},lt=function(){He(""),qe(""),xe.current&&xe.current.select.clearValue()},ot=function(e){var a=e.liabilityDetails,t=e.liabilityType,n=e.nominees;ra(t),Ua(!0),Ma(e.id),_a(a),Ia(n)},it=function(e){e?(document.getElementById("buttonLabel").classList.remove("no-display"),document.getElementById("buttonLabel").classList.add("button-text")):(document.getElementById("buttonLabel").classList.add("no-display"),document.getElementById("buttonLabel").classList.remove("button-text"))},rt=e.messages,ct=e.thumbView,st=e.getData,dt=e.parsedFilter;return l.a.createElement("div",{className:"data-list ".concat(ct?"thumb-view":"list-view")},l.a.createElement(f.a,{isOpen:Te,className:"modal-dialog-centered",backdrop:"static"},l.a.createElement(y.a,null,"Are you sure you want to delete this record?"),l.a.createElement(E.a,null,l.a.createElement(h.a,{color:"primary",onClick:function(){return Le(!1)},className:"button-label"},"Cancel"),l.a.createElement(h.a,{color:"danger",onClick:function(){!function(a){var t=JSON.parse(localStorage.getItem("logInUserData")),n=t.liabilities.findIndex((function(e){return e.id===a}));n>=0&&(t.liabilities.splice(n,1),Z.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(v.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){e.getData(e.parsedFilter),et()})).catch(),localStorage.setItem("logInUserData",JSON.stringify(t)),$.b.warning("Liability deleted successfully!"),nt(),lt(),Za(!0))}(Pe),Le(!1)},className:"button-label"},"Delete"))),l.a.createElement(ae.a,{show:da,data:ya,updateData:e.updateData,addData:Ya,isLoading:Na,handleSidebar:Xa,thumbView:ct,getData:st,dataParams:dt,addNew:pa}),l.a.createElement("div",{className:L()("data-list-overlay",{show:da}),onClick:function(){return Xa(!1,!0)}}),l.a.createElement(i.a,null,l.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},l.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},l.a.createElement(i.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(c.a,{activeTab:"1"},l.a.createElement(s.a,{tabId:"1"},l.a.createElement(i.a,null,l.a.createElement($.a,null),l.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},l.a.createElement(O.a,null,l.a.createElement(N.a,null,l.a.createElement(j.a,null,(null===rt||void 0===rt?void 0:rt.subHeading)?rt.subHeading:Ra?"Edit Liability Details":"Add New Liability")),l.a.createElement(k.a,null,l.a.createElement(C.a,null,l.a.createElement(i.a,null,l.a.createElement(r.a,{md:"6",sm:"12"},l.a.createElement(S.a,{className:"form-label-group"},l.a.createElement(K.a,{className:"React",classNamePrefix:"select",ref:Ie,name:"color",options:Ce,isClearable:!0,isDisabled:Ra,value:Ce.filter((function(e){return e.value===ia})),placeholder:(null===rt||void 0===rt?void 0:rt.liabilityOptionText)?null===rt||void 0===rt?void 0:rt.liabilityOptionText:"Select Liability Type...",onChange:function(e){!function(e){Za(!0),He(""),qe(""),ra(e?e.value:void 0),_a(e?Se[e.value]:{})}(e)}}),l.a.createElement(I.a,{for:"nameMulti"},"Liability Type"))),l.a.createElement(r.a,{md:"6",sm:"12"},l.a.createElement(S.a,{className:"form-label-group"},l.a.createElement(K.a,{isMulti:!0,name:"nominee",options:Ka,value:Sa.map((function(e){return{value:e.id,label:e.name}})),ref:De,className:"React",classNamePrefix:"select",placeholder:(null===rt||void 0===rt?void 0:rt.nomineeOption)?null===rt||void 0===rt?void 0:rt.nomineeOption:"Select Nominees...",id:"nominee",onChange:function(e){!function(e){Ra&&Za(!1);var a=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?ua(!0):a.push({id:e.value,name:e.label})})),!e&&Za(!0),Ia(a)}(e)}}),l.a.createElement(I.a,null,"Nominee")))),l.a.createElement(i.a,null,Object.keys(Se).includes(ia)&&Fa.length&&Fa.map((function(e,a){return l.a.createElement(r.a,{md:"6",sm:"12",key:a},l.a.createElement(S.a,{className:"form-label-group"},e.deletable&&l.a.createElement(ee.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){!function(e){Ra&&Za(!1);var a=Fa.filter((function(a){return e.key!==a.key}));_a(a)}(e)}}),l.a.createElement(D.a,{type:e.type,name:e.key,id:e.id,className:"input-label",placeholder:e.key,value:e.val,onChange:function(a){tt(a.target?a.target.value:a.value,e)}}),l.a.createElement(I.a,{for:e.id,className:"dark"===Q.a.theme?"dark-label":"light-label"},e.key)))}))),l.a.createElement(i.a,{style:{marginTop:"15px"}},l.a.createElement(r.a,{md:"6",sm:"12",style:{display:"flex"}},ia&&l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{color:"white",outline:!0,onClick:at,className:"add-button",id:"addButton",onMouseEnter:function(){return it(!0)},onMouseLeave:function(){return it(!1)},style:{backgroundColor:"var(--warning)"}},"+"),l.a.createElement("div",{className:"label-div"},l.a.createElement("span",{id:"buttonLabel",className:"no-display"},"Add a Custom Field")))),l.a.createElement(r.a,{sm:"6"},l.a.createElement(S.a,{className:"action-right",style:{textAlign:"right",marginBottom:"0px"}},l.a.createElement(h.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){Ua(!1),nt()}},Ra?"Cancel":(null===rt||void 0===rt?void 0:rt.resetButton)?null===rt||void 0===rt?void 0:rt.resetButton:"Reset"),l.a.createElement(h.a.Ripple,{color:"warning",type:"submit",className:"button-label",disabled:0===Sa.length||!ia||Va,onClick:function(a){Ra?function(a){a.preventDefault(),Ua(!1);var t=JSON.parse(localStorage.getItem("logInUserData")),n={liabilityType:ia,liabilityDetails:Fa,nominees:Sa,id:Ga},l=t.liabilities.findIndex((function(e){return e.id===Ga}));l>=0&&(t.liabilities.splice(l,1),t.liabilities.push(n),localStorage.setItem("logInUserData",JSON.stringify(t)),Z.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(v.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){$.b.success("Edited successfully!"),e.getData(e.parsedFilter),et()})).catch(),nt(),lt(),Za(!0))}(a):function(a){a.preventDefault();var t=JSON.parse(localStorage.getItem("logInUserData")),n={liabilityType:ia,liabilityDetails:Fa,nominees:Sa,id:Object(p.v4)()};t.liabilities.push(n),Z.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(v.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){e.getData(e.parsedFilter),et()})).catch(),localStorage.setItem("logInUserData",JSON.stringify(t)),$.b.success("Liability addedd successfully!"),nt(),lt(),Za(!0)}(a)}},Ra?"Update":(null===rt||void 0===rt?void 0:rt.submitButton)?null===rt||void 0===rt?void 0:rt.submitButton:"Add"))))))))),l.a.createElement(i.a,null,l.a.createElement($.a,null),l.a.createElement(r.a,{md:"8"},l.a.createElement(F.a,{heading:(null===rt||void 0===rt?void 0:rt.subHeading)?rt.subHeading:"Liabilities List",collapseItems:ta,show:function(){Ye(!Xe),et()},assetShow:Xe}))))))))),l.a.createElement(r.a,{lg:"4",md:"6",sm:"12"},l.a.createElement("div",{className:"swipermobile"},l.a.createElement(w.a,te,l.a.createElement("div",{style:{backgroundImage:"url(".concat(z.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(U.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(J.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(M.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(H.a,")"),backgroundSize:"contain"}}))))),l.a.createElement(i.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(f.a,{isOpen:Aa,toggle:at,className:"modal-dialog-centered"},l.a.createElement(x.a,{toggle:at},"Add Custom Field"),l.a.createElement(y.a,null,l.a.createElement(S.a,{className:"form-label-group"},l.a.createElement(D.a,{type:"email",name:"Email",disabled:""===ia,id:"EmailMulti",value:We,placeholder:"Enter Field Name",onChange:function(e){He(e.target.value)}}),l.a.createElement(I.a,{for:"EmailMulti"},"Enter Field Name")),l.a.createElement(S.a,{className:"form-label-group",disabled:void 0===ia},l.a.createElement(K.a,{className:"React",ref:xe,disabled:void 0===ia,classNamePrefix:"select",isClearable:!0,name:"color",options:ne,placeholder:"Select Field Type...",onChange:function(e){return qe(e?e.value:" ")}}),l.a.createElement(I.a,{for:"nameMulti"},"Field Type"))),l.a.createElement(E.a,null,l.a.createElement(S.a,{className:"form-label-group"},l.a.createElement(h.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"mb-1 button-label",disabled:void 0===ia,onClick:function(e){lt()}},"Reset")," ",l.a.createElement(h.a.Ripple,{color:"warning",disabled:void 0===ia,type:"submit",className:"button-label",onClick:function(e){return function(){if(""!==ia){var e=Fa,a=e.length,t="";if(e.findIndex((function(e){return e.key===We+$e}))>=0)return void $.b.error("Field Already Exist! Please add new field");"Attachments"===Fa[a-1].key?(t=e[a-1],e[a-1]={key:We+$e,val:"",type:$e,deletable:!0},e.push(t),_a(e),He(""),qe("")):(e.push({key:We+$e,val:"",type:$e,deletable:!0}),_a(e),He(""),qe("")),at()}}()}},"Add")))))))}));a.default=Object(o.b)((function(e){var a,t=(null===e||void 0===e?void 0:e.customizer).customizer;return{messages:null===t||void 0===t||null===(a=t.language)||void 0===a?void 0:a.Liability}}))((function(e){var a=e.messages;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"warning spacing nodisplay"},(null===a||void 0===a?void 0:a.heading)?a.heading:"Liabilties"),l.a.createElement(i.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(c.a,{activeTab:"1"},l.a.createElement(s.a,{tabId:"1"},l.a.createElement(le,{messages:a}))))))}))}}]);
//# sourceMappingURL=18.79ca3f21.chunk.js.map