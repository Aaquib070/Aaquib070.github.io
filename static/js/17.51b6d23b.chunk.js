(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[17],{475:function(e,a,t){},476:function(e,a,t){e.exports=t.p+"static/media/banner-25.a47593fc.jpg"},478:function(e,a,t){},479:function(e,a,t){"use strict";t.d(a,"e",(function(){return m})),t.d(a,"f",(function(){return p})),t.d(a,"d",(function(){return b})),t.d(a,"b",(function(){return v})),t.d(a,"c",(function(){return g})),t.d(a,"a",(function(){return y})),t.d(a,"g",(function(){return f}));var n=t(36),l=t.n(n),o=t(55),r=t(486),i=t(31),c=t.n(i),s=t(471),u=t(32);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var d=function(e){var a,t=Object(r.a)(null===e||void 0===e?void 0:e.data);try{for(t.s();!(a=t.n()).done;){var n=a.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(u.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(u.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(u.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(u.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(u.a)(null===n||void 0===n?void 0:n.desc))}}catch(l){t.e(l)}finally{t.f()}return e},m=function(e){return function(){var a=Object(o.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a.next=3,c.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"GET_ALL_DATA_LOADING",data:!1});var n,l=Object(r.a)(null===a||void 0===a?void 0:a.data);try{for(l.s();!(n=l.n()).done;){var o=n.value;o.nomineeId=(null===o||void 0===o?void 0:o.nomineeId)&&Object(u.a)(o.nomineeId,!0),o.name=(null===o||void 0===o?void 0:o.name)&&Object(u.a)(o.name,!0),o.relation=(null===o||void 0===o?void 0:o.relation)&&Object(u.a)(o.relation,!0),o.email=(null===o||void 0===o?void 0:o.email)&&Object(u.a)(o.email,!0),o.primaryContact=(null===o||void 0===o?void 0:o.primaryContact)&&Object(u.a)(o.primaryContact,!0),o.secondaryContact=(null===o||void 0===o?void 0:o.secondaryContact)&&Object(u.a)(o.secondaryContact,!0),o.address=(null===o||void 0===o?void 0:o.address)&&Object(u.a)(o.address,!0)}}catch(i){l.e(i)}finally{l.f()}t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(){var a=Object(o.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t({type:"GET_SPEND_DATA_LOADING",data:!0}),a.next=4,c.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){var n;console.log("getSpendData"),t({type:"GET_SPEND_DATA_LOADING",data:!1}),t({type:"GET_DATA",data:null===(n=d(a))||void 0===n?void 0:n.data,totalPages:a.length,params:e})})).catch((function(e){console.log(e),t({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(a){return a({type:"FILTER_DATA",value:e})}},v=function(e){return function(a){console.log("DELETE DATA :"),c.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},g=function(e){return function(a){console.log("DELETE DATA :"),c.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},y=function(e){var a={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(u.b)(e.name,!0),relation:Object(u.b)(e.relation,!0),email:Object(u.b)(e.email,!0),primaryContact:Object(u.b)(e.contact1,!0),secondaryContact:Object(u.b)(e.contact2,!0),address:Object(u.b)(e.address,!0),usage:"Unused"};return"others"===e.relation&&e.relation1&&(a.relation=Object(u.b)(e.relation1,!0)),function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Added Successfully"),t(m())}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},f=function(e){var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t={_id:e._id,usage:e.usage?e.usage:"Unused",userId:a._id,name:Object(u.b)(e.name,!0),relation:Object(u.b)(e.relation1,!0),email:Object(u.b)(e.email,!0),primaryContact:Object(u.b)(e.contact1,!0),secondaryContact:Object(u.b)(e.contact2,!0),address:Object(u.b)(e.address,!0)};return function(){var e=Object(o.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.post("/backendapi/nominee/update",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Added Successfully"),a(m())}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}},480:function(e,a,t){},481:function(e,a,t){e.exports=t.p+"static/media/banner-31.d54fc4be.jpg"},482:function(e,a,t){e.exports=t.p+"static/media/banner-22.702fed4d.jpg"},483:function(e,a,t){e.exports=t.p+"static/media/banner-23.b74d240c.jpg"},484:function(e,a,t){e.exports=t.p+"static/media/banner-24.d3fb51a8.jpg"},489:function(e,a,t){"use strict";var n=t(18),l=t(0),o=t.n(l),r=t(420),i=t(421),c=t(422),s=t(228),u=t(393),d=t(104),m=t.n(d),p=t(5),b=t.n(p),v=t(19);a.a=function(e){var a=Object(l.useState)("Collegue"),t=Object(n.a)(a,2),d=t[0],p=t[1],g=Object(l.useState)("Collegue"),y=Object(n.a)(g,2),f=y[0],E=y[1],h=Object(l.useState)(""),O=Object(n.a)(h,2),k=O[0],N=O[1],j=Object(l.useState)(""),D=Object(n.a)(j,2),x=D[0],S=D[1],A=Object(l.useState)(""),C=Object(n.a)(A,2),I=C[0],F=C[1],T=Object(l.useState)(""),w=Object(n.a)(T,2),B=w[0],L=w[1],P=Object(l.useState)(""),R=Object(n.a)(P,2),_=R[0],z=R[1],U=Object(l.useState)(""),M=Object(n.a)(U,2),J=M[0],G=M[1],V=Object(l.useState)(""),Z=Object(n.a)(V,2),H=Z[0],W=Z[1],$=Object(l.useState)(!1),q=Object(n.a)($,2),K=q[0],Q=q[1],X=Object(l.useState)(!1),Y=Object(n.a)(X,2),ee=Y[0],ae=Y[1],te=Object(l.useState)(!1),ne=Object(n.a)(te,2),le=ne[0],oe=ne[1],re=Object(l.useState)(!1),ie=Object(n.a)(re,2),ce=ie[0],se=ie[1],ue=Object(l.useState)(!1),de=Object(n.a)(ue,2),me=de[0],pe=de[1],be=Object(l.useState)(!1),ve=Object(n.a)(be,2),ge=ve[0],ye=ve[1],fe=Object(l.useState)(!1),Ee=Object(n.a)(fe,2),he=Ee[0],Oe=Ee[1];Object(l.useEffect)((function(){if(console.log("ADD NEW NOMINEE",e.isLoading),e.data){var a=e.data,t=a.id,n=a.name,l=a.relation,o=a.address,r=a.email,i=a.primaryContact,c=a.secondaryContact;G(t),W(n),p(l),E(l),S(o),N(r),F(i),L(c)}else(null===e.data||K)&&De();Q(!1)}),[e.data]);var ke=function(e){switch(e){case"name":0===H.length&&""===H?Oe(!0):Oe(!1);break;case"email":""===k?oe(!0):""!==k&&"undefined"!==typeof k&&(k.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/)?oe(!1):oe(!0));break;case"address":se(!x);break;case"contact1":0===I.length?pe(!0):0!==I.length&&"undefined"!==typeof I&&(10!==I.length?pe(!0):pe(!1));break;case"contact2":0===B.length||0!==B.length&&10===B.length?ye(!1):ye(!0);break;case"relation":"others"===d&&0===f.length?ae(!0):ae(!1)}},Ne=function(e,a){switch(e){case"name":W(a),a.length?Oe(""):Oe("Enter Valid Name");break;case"email":N(a),""===a?oe(!0):""!==a&&"undefined"!==typeof a&&(a.match(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/)?oe(!1):oe(!0));break;case"address":S(a.replace(/[\n\r]/g,", ")),se(!a);break;case"contact1":F(a),a.length?0!==a.length&&"undefined"!==typeof a&&(10!==a.length?pe(!0):pe(!1)):pe(!0);break;case"contact2":L(a),a.length?0!==a.length&&10===a.length?ye(!1):ye(!0):ye(!1);break;case"relation":p(a),E(a),"others"!==a&&0===a.length?ae(!0):ae(!1);break;case"relation1":E(a),"others"===d&&0===a.length?ae(!0):ae(!1)}},je=function(e){switch(e){case"name":Oe(!1);break;case"email":oe(!1);break;case"address":se(!1);break;case"contact1":pe(!1);break;case"contact2":ye(!1);break;case"relation":ae(!1)}},De=function(){W(""),p(""),E(""),N(""),S(""),F(""),L(""),Oe(!1),se(!1),pe(!1),ye(!1),oe(!1),ae(!1)},xe=e.show,Se=e.handleSidebar,Ae=e.data;return o.a.createElement("div",{className:b()("data-list-sidebar",{show:xe})},o.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},o.a.createElement("h4",{style:{color:"var(--warning)"}},null!==Ae?"UPDATE NOMINEE":"ADD NEW NOMINEE"),o.a.createElement(u.a,{size:20,onClick:function(){Se(!1,!0),De()}})),o.a.createElement(m.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},o.a.createElement(r.a,{className:"form-label-group mb-2"},o.a.createElement(i.a,{className:"input-label",type:"text",value:H,placeholder:"Nominee Name",onChange:function(e){Ne("name",e.target.value),je("name")},onBlur:function(){return ke("name")},id:"data-name",style:{borderColor:he?"red":""}}),he&&o.a.createElement("span",{className:"dark"===v.a.theme?"dark-label":"light-label"},he),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-name"},"Name")),o.a.createElement(r.a,null,o.a.createElement(i.a,{type:"select",id:"data-category",value:d,onChange:function(e){Ne("relation",e.target.value)}},o.a.createElement("option",null,"Collegue"),o.a.createElement("option",null,"Cousin"),o.a.createElement("option",null,"Daughter"),o.a.createElement("option",null,"Daughter-in-law"),o.a.createElement("option",null,"Friend"),o.a.createElement("option",null,"Husband"),o.a.createElement("option",null,"Son"),o.a.createElement("option",null,"Son-in-law"),o.a.createElement("option",null,"Wife"),o.a.createElement("option",null,"others")),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation")),"others"===d&&o.a.createElement(r.a,{className:"form-label-group mb-2"},o.a.createElement(i.a,{type:"text",value:f,placeholder:"Relation Name",onChange:function(e){Ne("relation1",e.target.value),je("relation")},onBlur:function(){return ke("relation")},id:"data-Relation",style:{borderColor:ee?"red":""}})),o.a.createElement(r.a,{className:"form-label-group mb-2"},o.a.createElement(i.a,{className:"input-label",type:"email",value:k,placeholder:"Enter nominee email",onChange:function(e){Ne("email",e.target.value),je("email")},onBlur:function(){return ke("email")},id:"data-email",style:{borderColor:le?"red":""}}),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-email"},"Nominee Email")),o.a.createElement(r.a,{className:"form-label-group mb-2"},o.a.createElement(i.a,{className:"input-label",type:"number",value:I,onChange:function(e){Ne("contact1",e.target.value),je("contact1")},onBlur:function(){return ke("contact1")},id:"data-price",placeholder:"Enter primary contact No",style:{borderColor:me?"red":""}}),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-price"},"Primary Contact")),o.a.createElement(r.a,{className:"form-label-group mb-2"},o.a.createElement(i.a,{className:"input-label",type:"number",value:B,onChange:function(e){Ne("contact2",e.target.value),je("contact2")},onBlur:function(){return ke("contact2")},id:"data-price",placeholder:"Enter secondry contact No",style:{borderColor:ge?"red":""}}),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact")),o.a.createElement(r.a,{className:"form-label-group mb-2"},o.a.createElement(i.a,{className:"input-label ",style:{height:"115px",borderColor:ce?"red":""},type:"textarea",value:x,placeholder:"Address",onChange:function(e){Ne("address",e.target.value),je("address")},onBlur:function(){return ke("address")},id:"data-Address"}),o.a.createElement(c.a,{className:"dark"===v.a.theme?"dark-label":"light-label",for:"data-Address"},"Address *")),e.thumbView&&_.length<=0?o.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",o.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(e){return z(URL.createObjectURL(e.target.files[0]))}})):null),o.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},o.a.createElement(s.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){De()}},"Reset"),o.a.createElement(s.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return function(){if(!(ee||me||ce||ge||le||he)){var a={relation:d,email:k,address:x,contact1:I,contact2:B,id:J,name:H};null!==e.data?(a._id=e.data._id,a.usage=e.data.usage,e.updateData(a)):(Q(!0),e.addData(a))}}()}},null!==Ae?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))}},511:function(e,a,t){"use strict";var n=t(14),l=t(15),o=t(17),r=t(16),i=t(0),c=t.n(i),s=t(485),u=t(490),d=t(491),m=t(540),p=t(418),b=t(493),v=t(494),g=t(5),y=t.n(g),f=t(467),E=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),r=0;r<l;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",collapseID:"",status:"Closed",collapseItems:e.props.collapseItems,colorOption:e.props.colorOption},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.toggleCollapse=function(a){e.setState((function(e){return{collapseID:e.collapseID!==a?a:""}}))},e.onEntered=function(a){a===e.state.collapseID&&e.setState({status:"Opened"})},e.onEntering=function(a){a===e.state.collapseID&&e.setState({status:"Opening..."})},e.onExited=function(a){a===e.state.collapseID&&e.setState({status:"Closed"})},e.onExiting=function(a){a===e.state.collapseID&&e.setState({status:"Closing..."})},e.formatme=function(a){var t,n;return(null===(t=e.state)||void 0===t||null===(n=t.colorOption)||void 0===n?void 0:n[a])?e.state.colorOption[a]:a},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state.collapseItems.length>0?this.state.collapseItems.map((function(a){return c.a.createElement("div",{className:"collapse-margin",key:a.id},c.a.createElement(s.a,{onClick:function(){return e.toggleCollapse(a.id)},className:y()({"collapse-collapsed":"Closed"===e.state.status&&e.state.collapseID===a.id,"collapse-shown":"Opened"===e.state.status&&e.state.collapseID===a.id,closing:"Closing..."===e.state.status&&e.state.collapseID===a.id,opening:"Opening..."===e.state.status&&e.state.collapseID===a.id})},c.a.createElement(u.a,null,c.a.createElement(d.a,{className:"lead collapse-title collapsed"},e.formatme(a.title)),c.a.createElement(f.a,{size:15,className:"collapse-icon"})),c.a.createElement(m.a,{isOpen:a.id===e.state.collapseID,onEntering:function(){return e.onEntering(a.id)},onEntered:function(){return e.onEntered(a.id)},onExiting:function(){return e.onExiting(a.id)},onExited:function(){return e.onExited(a.id)}},c.a.createElement(p.a,null,a.content))))})):c.a.createElement("span",{style:{fontSize:"12px",marginTop:"-10px"}},"No Asset Found");return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{style:{paddingBottom:"1.5rem",paddingRight:"0.5rem",marginBottom:"portfolio"===this.props.page?"2.2rem":"1rem"}},c.a.createElement(u.a,null,c.a.createElement(d.a,null,this.props.heading)),c.a.createElement(p.a,{className:"card_body",style:{maxHeight:"portfolio"===this.props.page?"260px":" calc(100vh - 435px)"}},c.a.createElement(b.a,{activeTab:this.state.activeTab},c.a.createElement(v.a,{tabId:"1"},c.a.createElement("div",{className:"vx-collapse"},a)),c.a.createElement(v.a,{className:"component-code",tabId:"2"},"hey")))))}}]),t}(c.a.Component);a.a=E},640:function(e){e.exports=JSON.parse('{"Bank Details":[{"key":"Account No *","val":"","type":"Number","mandatory":true},{"key":"Bank Name *","val":"","type":"Text","mandatory":true},{"key":"Branch *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"Textarea"},{"key":"Attachments","val":"","type":"File"}],"Custom":[{"key":"Asset Name","val":"","type":"Text","mandatory":true}],"Fixed Deposit":[{"key":"FD Account No *","val":"","type":"Number","mandatory":true},{"key":"FD Amount *","val":"","type":"Number","mandatory":true},{"key":"Bank Name *","val":"","type":"Text","mandatory":true},{"key":"FD Maturity Date","val":"","type":"Date"},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Gratuity":[{"key":"Gratuity No *","val":"","type":"Number","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Policy":[{"key":"Policy Number *","val":"","type":"number","mandatory":true},{"key":"Policy Name *","val":"","type":"text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Property":[{"key":"Property Type *","val":"","type":"Text","mandatory":true},{"key":"Property Location *","val":"","type":"Text","mandatory":true},{"key":"Property Area *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Provident Fund":[{"key":"EPF No *","val":"","type":"Number","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Mutual Fund":[{"key":"Portfolio No *","val":"","type":"Number","mandatory":true},{"key":"Value *","val":"","type":"Number","mandatory":true},{"key":"Type *","val":"","type":"Text","mandatory":true},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}],"Receipt / Bill":[{"key":"Bill Name *","val":"","type":"Text","mandatory":true},{"key":"Bill Date","val":"","type":"Date"},{"key":"Bill Amount *","val":"","type":"Number","mandatory":true},{"key":"Expiry Date","val":"","type":"Date"},{"key":"Warraty Period (if applicable)","val":"","type":"Text"},{"key":"Comments/ Remarks","val":"","type":"textarea"},{"key":"Attachments","val":"","type":"File"}]}')},672:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(496),r=t(497),i=t(493),c=t(494),s=t(36),u=t.n(s),d=t(55),m=t(18),p=t(583),b=t(582),v=t(469),g=t(426),y=t(603),f=t(228),E=t(485),h=t(490),O=t(491),k=t(418),N=t(419),j=t(420),D=t(422),x=t(421),S=t(618),A=t(488),C=t.n(A),I=(t(141),t(640)),F=t(511),T=(t(142),t(481)),w=t.n(T),B=t(482),L=t.n(B),P=t(483),R=t.n(P),_=t(484),z=t.n(_),U=t(476),M=t.n(U),J=t(31),G=t.n(J),V=t(5),Z=t.n(V),H=t(22),W=t(471),$=(t(474),t(475),t(478),t(479)),q=t(487),K=t(447),Q=t(500),X=t(656),Y=t(19),ee=t(32),ae=(t(480),t(234),t(489)),te={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}},ne=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0},{value:"File",label:"File",color:"#0052CC",isFixed:!0}],le=Object(H.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),{getData:$.e,addData:$.a})((function(e){var a,t,s,A,T,B,P,_,U,J,V,H,$,le,oe,re,ie,ce,se,ue,de,me,pe,be,ve,ge,ye,fe,Ee,he,Oe,ke,Ne,je,De,xe,Se,Ae,Ce=l.a.createRef(),Ie=l.a.createRef(),Fe=l.a.createRef(),Te=(null===(a=e.messages)||void 0===a?void 0:a.assetOption)?null===(t=e.messages)||void 0===t?void 0:t.assetOption:I,we=[{value:"Bank Details",label:(null===(s=e.messages)||void 0===s||null===(A=s.colorOption)||void 0===A?void 0:A["Bank Details"])?null===(T=e.messages)||void 0===T||null===(B=T.colorOption)||void 0===B?void 0:B["Bank Details"]:"Bank Details",color:"#00B8D9",isFixed:!0},{value:"Fixed Deposit",label:(null===(P=e.messages)||void 0===P||null===(_=P.colorOption)||void 0===_?void 0:_["Fixed Deposit"])?null===(U=e.messages)||void 0===U||null===(J=U.colorOption)||void 0===J?void 0:J["Fixed Deposit"]:"Fixed Deposit",color:"#0052CC",isFixed:!0},{value:"Policy",label:(null===(V=e.messages)||void 0===V||null===(H=V.colorOption1)||void 0===H?void 0:H.Policy)?null===($=e.messages)||void 0===$||null===(le=$.colorOption1)||void 0===le?void 0:le.Policy:"Policy",color:"#00B8D9",isFixed:!0},{value:"Property",label:(null===(oe=e.messages)||void 0===oe||null===(re=oe.colorOption)||void 0===re?void 0:re.Property)?null===(ie=e.messages)||void 0===ie||null===(ce=ie.colorOption)||void 0===ce?void 0:ce.Property:"Property",color:"#00B8D9",isFixed:!0},{value:"Mutual Fund",label:(null===(se=e.messages)||void 0===se||null===(ue=se.colorOption)||void 0===ue?void 0:ue["Mutual Fund"])?null===(de=e.messages)||void 0===de||null===(me=de.colorOption)||void 0===me?void 0:me["Mutual Fund"]:"Mutual Fund",color:"#00B8D9",isFixed:!0},{value:"Provident Fund",label:(null===(pe=e.messages)||void 0===pe||null===(be=pe.colorOption)||void 0===be?void 0:be["Provident Fund"])?null===(ve=e.messages)||void 0===ve||null===(ge=ve.colorOption)||void 0===ge?void 0:ge["Provident Fund"]:"Provident Fund",color:"#00B8D9",isFixed:!0},{value:"Gratuity",label:(null===(ye=e.messages)||void 0===ye||null===(fe=ye.colorOption)||void 0===fe?void 0:fe.Gratuity)?null===(Ee=e.messages)||void 0===Ee||null===(he=Ee.colorOption)||void 0===he?void 0:he.Gratuity:"Gratuity",color:"#00B8D9",isFixed:!0},{value:"Receipt / Bill",label:(null===(Oe=e.messages)||void 0===Oe||null===(ke=Oe.colorOption)||void 0===ke?void 0:ke["Receipt / Bill"])?null===(Ne=e.messages)||void 0===Ne||null===(je=Ne.colorOption)||void 0===je?void 0:je["Receipt / Bill"]:"Receipt / Bill",color:"#00B8D9",isFixed:!0},{value:"Custom",label:(null===(De=e.messages)||void 0===De||null===(xe=De.colorOption)||void 0===xe?void 0:xe.Custom)?null===(Se=e.messages)||void 0===Se||null===(Ae=Se.colorOption)||void 0===Ae?void 0:Ae.Custom:"Custom",color:"#0052CC",isFixed:!0}],Be=Object(n.useState)(""),Le=Object(m.a)(Be,2),Pe=Le[0],Re=Le[1],_e=Object(n.useState)(!1),ze=Object(m.a)(_e,2),Ue=ze[0],Me=ze[1],Je=Object(n.useState)(!1),Ge=Object(m.a)(Je,2),Ve=Ge[0],Ze=Ge[1],He=Object(n.useState)(!1),We=Object(m.a)(He,2),$e=We[0],qe=We[1],Ke=Object(n.useState)(null),Qe=Object(m.a)(Ke,2),Xe=Qe[0],Ye=Qe[1],ea=Object(n.useState)(""),aa=Object(m.a)(ea,2),ta=aa[0],na=aa[1],la=Object(n.useState)(""),oa=Object(m.a)(la,2),ra=oa[0],ia=oa[1],ca=Object(n.useState)([]),sa=Object(m.a)(ca,2),ua=sa[0],da=sa[1],ma=Object(n.useState)(""),pa=Object(m.a)(ma,2),ba=pa[0],va=pa[1],ga=Object(n.useState)(""),ya=Object(m.a)(ga,2),fa=ya[0],Ea=ya[1],ha=Object(n.useState)(!1),Oa=Object(m.a)(ha,2),ka=Oa[0],Na=Oa[1],ja=Object(n.useState)(null),Da=Object(m.a)(ja,2),xa=Da[0],Sa=Da[1],Aa=Object(n.useState)(!1),Ca=Object(m.a)(Aa,2),Ia=Ca[0],Fa=Ca[1],Ta=Object(n.useState)([]),wa=Object(m.a)(Ta,2),Ba=wa[0],La=wa[1],Pa=Object(n.useState)(!1),Ra=Object(m.a)(Pa,2),_a=Ra[0],za=Ra[1],Ua=Object(n.useState)([]),Ma=Object(m.a)(Ua,2),Ja=Ma[0],Ga=Ma[1],Va=Object(n.useState)(!0),Za=Object(m.a)(Va,2),Ha=Za[0],Wa=Za[1],$a=Object(n.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),qa=Object(m.a)($a,2),Ka=qa[0],Qa=qa[1];Object(n.useEffect)((function(){!e.listLoading&&e.getData(),Xa()}),[]),Object(n.useEffect)((function(){if(e.dataList.data.length){var a=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];e.dataList.data.forEach((function(e){var t={value:e._id,label:e.name+" - "+e.relation,color:"#00B8D9",isFixed:!1};a.push(t)})),Qa(a)}}),[e.dataList]);var Xa=function(){var e,a=JSON.parse(localStorage.getItem("logInUserData"));ua.splice(0,ua.length),(null===a||void 0===a||null===(e=a.assets)||void 0===e?void 0:e.length)&&a.assets.forEach((function(e,a){if(e.id){var t,n,i="";(null===e||void 0===e||null===(t=e.nominees)||void 0===t?void 0:t.length)&&e.nominees.forEach((function(a,t){t===e.nominees.length-1?i+=a.name:i=i+a.name+", "}));var c=l.a.createElement("div",null,l.a.createElement(o.a,null,null===e||void 0===e||null===(n=e.assetDetails)||void 0===n?void 0:n.map((function(e,a){return""!==e.val?l.a.createElement(r.a,{md:"5",sm:"12",key:a+e.key},l.a.createElement(b.a,null,l.a.createElement("b",null,e.key," :")," ",e.val)):""})),l.a.createElement(r.a,{md:"5",sm:"12"},l.a.createElement(b.a,null,l.a.createElement("b",null,"Nominees :")," ",i)),l.a.createElement(r.a,{md:"2",sm:"12"},l.a.createElement(b.a,null,l.a.createElement("b",null,l.a.createElement(K.a,{className:"cursor-pointer mr-1",size:window.screen.width<600?13:20,onClick:function(){ot(e)}})),l.a.createElement("b",null,l.a.createElement(Q.a,{className:"cursor-pointer",size:window.screen.width<600?13:20,onClick:function(){console.log("event",e),Ye(e.id),qe(!0)}})))))),s={id:a+1,title:e.assetType,content:c};ua.push(s)}})),da(null===ua||void 0===ua?void 0:ua.reverse())},Ya=function(){_a&&lt(),za(!_a)},et=function(){var e=!1;Ja.forEach((function(a){a.mandatory&&!a.val&&(e=!0)})),Wa(e)},at=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Na(e),!0===a&&(Sa(null),Ze(!0))},tt=function(){var a=Object(d.a)(u.a.mark((function a(t){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return Fa(!0),a.prev=1,a.next=4,e.addData(t);case 4:Fa(!1),at(!1,!0),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),Fa(!1),W.b.error("Failed to add Nominee! Please retry");case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),nt=function(){Ce.current.select.clearValue(),Ie.current.select.clearValue(),Ea(""),Ga([]),La([]),ba&&Wa(!0)},lt=function(){na(""),ia(""),Fe.current&&Fe.current.select.clearValue()},ot=function(e){var a=e.assetDetails,t=e.assetType,n=e.nominees;Ea(t),va(!0),Re(e.id),Ga(a),La(n)},rt=function(e){e?(document.getElementById("buttonLabel").classList.remove("no-display"),document.getElementById("buttonLabel").classList.add("button-text")):(document.getElementById("buttonLabel").classList.add("no-display"),document.getElementById("buttonLabel").classList.remove("button-text"))},it=e.messages,ct=e.thumbView,st=e.getData,ut=e.parsedFilter;return l.a.createElement("div",{className:"data-list ".concat(ct?"thumb-view":"list-view")},l.a.createElement(v.a,{isOpen:$e,className:"modal-dialog-centered",backdrop:"static"},l.a.createElement(g.a,null,"Are you sure you want to delete this record?"),l.a.createElement(y.a,null,l.a.createElement(f.a,{color:"primary",onClick:function(){return qe(!1)},className:"button-label"},"Cancel"),l.a.createElement(f.a,{color:"danger",onClick:function(){!function(a){var t=JSON.parse(localStorage.getItem("logInUserData")),n=t.assets.findIndex((function(e){return e.id===a}));n>=0&&(t.assets.splice(n,1),localStorage.setItem("logInUserData",JSON.stringify(t)),W.b.warning("Deleted successfully!"),G.a.post("/backendapi/adddetails",{_id:t._id,assets:Object(ee.b)(JSON.stringify(t.assets))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){e.getData(e.parsedFilter),Xa()})).catch(),nt(),lt(),Wa(!0))}(Xe),qe(!1)},className:"button-label"},"Delete"))),l.a.createElement(ae.a,{show:ka,data:xa,updateData:e.updateData,addData:tt,isLoading:Ia,handleSidebar:at,thumbView:ct,getData:st,dataParams:ut,addNew:Ve}),l.a.createElement("div",{className:Z()("data-list-overlay",{show:ka}),onClick:function(){return at(!1,!0)}}),l.a.createElement(o.a,null,l.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},l.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},l.a.createElement(o.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(i.a,{activeTab:"1"},l.a.createElement(c.a,{tabId:"1"},l.a.createElement(o.a,null,l.a.createElement(W.a,null),l.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},l.a.createElement(E.a,null,l.a.createElement(h.a,null,l.a.createElement(O.a,null,(null===it||void 0===it?void 0:it.subHeading)?it.subHeading:ba?"Edit Asset Details":"Add New Asset")),l.a.createElement(k.a,null,l.a.createElement(N.a,null,l.a.createElement(o.a,null,l.a.createElement(r.a,{md:"6",sm:"12"},l.a.createElement(j.a,{className:"form-label-group"},l.a.createElement(q.a,{className:"React",classNamePrefix:"select",ref:Ce,isDisabled:ba,value:we.filter((function(e){return e.value===fa})),name:"color",options:we,isClearable:!0,placeholder:(null===it||void 0===it?void 0:it.assetOptionText)?it.assetOptionText:"Select Asset Type",onChange:function(e){Wa(!0),na(""),ia(""),Ea(e?e.value:void 0),Ga(e?Te[e.value]:{})}}),l.a.createElement(D.a,{for:"nameMulti"},(null===it||void 0===it?void 0:it.assetOptionText)?it.assetOptionText:"Select Asset Type"))),l.a.createElement(r.a,{md:"6",sm:"12"},l.a.createElement(j.a,{className:"form-label-group"},l.a.createElement(q.a,{isMulti:!0,name:"nominee",options:Ka,value:Ba.map((function(e){return{value:e.id,label:e.name}})),ref:Ie,className:"React",classNamePrefix:"select",placeholder:(null===it||void 0===it?void 0:it.nomineeOption)?it.nomineeOption:"Select Nominees",id:"nominee",onChange:function(e){!function(e){console.log(e),ba&&Wa(!1);var a=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?Na(!0):a.push({id:e.value,name:e.label})})),!e&&Wa(!0),La(a)}(e)}}),l.a.createElement(D.a,null,(null===it||void 0===it?void 0:it.nomineeOption)?it.nomineeOption:"Select Nominees")))),l.a.createElement(o.a,null,Object.keys(Te).includes(fa)&&Ja.map((function(e,a){return l.a.createElement(r.a,{md:"6",sm:"12",key:a},l.a.createElement(j.a,{className:"form-label-group"},e.deletable&&l.a.createElement(X.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){!function(e){ba&&Wa(!1);var a=Ja.filter((function(a){return e.key!==a.key}));Ga(a)}(e)}}),l.a.createElement(x.a,{type:e.type,name:"city",id:"cityMulti",className:"input-label",placeholder:e.key,value:e.val,onChange:function(a){!function(e,a){var t=Ja,n=Ja.findIndex((function(e){return e.key===a.key}));e.length<50&&(t[n].val=e,Ga(t),Me(!Ue),et())}(a.target?a.target.value:a.value,e)}}),l.a.createElement(D.a,{for:"cityMulti",className:"dark"===Y.a.theme?"dark-label":"light-label"},e.key)))}))),l.a.createElement(o.a,{style:{marginTop:"15px"}},l.a.createElement(r.a,{md:"6",sm:"12",style:{display:"flex"}},fa&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{color:"white",outline:!0,onClick:Ya,className:"add-button",id:"addButton",onMouseEnter:function(){return rt(!0)},onMouseLeave:function(){return rt(!1)},style:{backgroundColor:"var(--warning)"}},"+"),l.a.createElement("div",{className:"label-div"},l.a.createElement("span",{id:"buttonLabel",className:"no-display"},"Add a Custom Field")))),l.a.createElement(r.a,{sm:"6"},l.a.createElement(j.a,{style:{textAlign:"right",marginBottom:"0px"}},l.a.createElement(f.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){va(!1),nt()}},ba?"Cancel":(null===it||void 0===it?void 0:it.resetButton)?null===it||void 0===it?void 0:it.resetButton:"Reset"),l.a.createElement(f.a.Ripple,{color:"warning",disabled:0===Ba.length||!fa||Ha,type:"reset",className:"button-label",onClick:function(a){ba?function(a){a.preventDefault(),va(!1);var t=JSON.parse(localStorage.getItem("logInUserData")),n={assetType:fa,assetDetails:Ja,nominees:Ba,id:Pe},l=t.assets.findIndex((function(e){return e.id===Pe}));l>=0&&(t.assets.splice(l,1),t.assets.push(n),localStorage.setItem("logInUserData",JSON.stringify(t)),G.a.post("/backendapi/adddetails",{_id:t._id,assets:Object(ee.b)(JSON.stringify(t.assets)),nominees:Ba},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){W.b.success("Edited successfully!"),e.getData(e.parsedFilter),Xa()})).catch(),nt(),lt(),Wa(!0))}(a):function(a){a.preventDefault();var t=JSON.parse(localStorage.getItem("logInUserData")),n={assetType:fa,assetDetails:Ja,nominees:Ba,id:Object(p.v4)()};t.assets.push(n),localStorage.setItem("logInUserData",JSON.stringify(t)),W.b.success("Asset addedd successfully!"),G.a.post("/backendapi/adddetails",{_id:t._id,assets:Object(ee.b)(JSON.stringify(t.assets)),nominees:Ba},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){e.getData(e.parsedFilter),Xa()})).catch(),nt(),lt(),Wa(!0)}(a)}},ba?"Update":(null===it||void 0===it?void 0:it.submitButton)?null===it||void 0===it?void 0:it.submitButton:"Add"))))))))),l.a.createElement(o.a,null,l.a.createElement(W.a,null),l.a.createElement(r.a,{md:"8"},l.a.createElement(F.a,{heading:(null===it||void 0===it?void 0:it.textList)?null===it||void 0===it?void 0:it.textList:"Assets List",collapseItems:ua,colorOption:null===it||void 0===it?void 0:it.colorOption}))))))))),l.a.createElement(r.a,{lg:"4",md:"6",sm:"12"},l.a.createElement("div",{className:"swipermobile"},l.a.createElement(C.a,te,l.a.createElement("div",{style:{backgroundImage:"url(".concat(w.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(L.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(R.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(z.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(M.a,")"),backgroundSize:"contain"}}))))),l.a.createElement(o.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(v.a,{isOpen:_a,toggle:Ya,className:"modal-dialog-centered"},l.a.createElement(S.a,{toggle:Ya},"Add Custum Field"),l.a.createElement(g.a,null,l.a.createElement(j.a,{className:"form-label-group"},l.a.createElement(x.a,{type:"email",name:"Email",disabled:""===fa,id:"EmailMulti",value:ta,placeholder:"Enter Field Name",onChange:function(e){na(e.target.value)}}),l.a.createElement(D.a,{for:"EmailMulti"},"Enter Field Name")),l.a.createElement(j.a,{className:"form-label-group",disabled:void 0===fa},l.a.createElement(q.a,{className:"React",ref:Fe,disabled:void 0===fa,classNamePrefix:"select",isClearable:!0,name:"color",options:ne,placeholder:"Select Field Type...",onChange:function(e){return ia(e?e.value:"")}}),l.a.createElement(D.a,{for:"nameMulti"},"Field Type"))),l.a.createElement(y.a,null,l.a.createElement(j.a,{className:"form-label-group",style:{textAlign:"right"}},l.a.createElement(f.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"mb-1 button-label",onClick:function(e){lt()}},(null===it||void 0===it?void 0:it.resetButton)?null===it||void 0===it?void 0:it.resetButton:"Reset"),l.a.createElement(f.a.Ripple,{color:"warning",disabled:""===ta||""===ra,type:"reset",className:"button-label",onClick:function(e){return function(){var e=Ja,a=e.length,t="";e.findIndex((function(e){return e.key===ta+ra}))>=0?W.b.error("Field Already Exist! Please add new field"):("Attachments"===e[a-1].key?(t=e[a-1],e[a-1]={key:ta+ra,val:"",type:ra,deletable:!0},e.push(t),Ga(e),na(""),ia("")):(e.push({key:ta+ra,val:"",type:ra,deletable:!0}),Ga(e),na(""),ia("")),Ya())}()}},(null===it||void 0===it?void 0:it.submitButton)?null===it||void 0===it?void 0:it.submitButton:"Add")))))))}));a.default=Object(H.b)((function(e){var a,t=(null===e||void 0===e?void 0:e.customizer).customizer;return{messages:null===t||void 0===t||null===(a=t.language)||void 0===a?void 0:a.Asset}}))((function(e){var a=e.messages;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"warning spacing nodisplay"},(null===a||void 0===a?void 0:a.heading)?a.heading:"Assets"),l.a.createElement(o.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(i.a,{activeTab:"1"},l.a.createElement(c.a,{tabId:"1"},l.a.createElement(le,{messages:a}))))))}))}}]);
//# sourceMappingURL=17.51b6d23b.chunk.js.map