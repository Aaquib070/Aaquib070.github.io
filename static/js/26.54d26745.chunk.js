(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[26],{1009:function(e,t,a){"use strict";a.r(t);var n=a(18),l=a(0),i=a.n(l),o=a(29),s=a(581),r=a(582),c=a(602),u=a(603),d=a(15),m=a(16),p=a(20),g=a(19),b=a(50),y=a(665),v=a(523),f=a(598),h=a(599),E=a(494),k=a(524),A=a(525),N=a(527),T=a(526),C=a(292),x=a(577),S=a(644),I=a(531),O=a(617),D=a(110),L=a.n(D),w=(a(188),a(610)),F={Custom:[{key:"Liability Name",val:"",type:"Text"}],Notes:[{key:"Notes *",val:"",type:"textarea",mandatory:!0},{key:"Expiry Date",val:"",type:"Date"}],"Credit Card":[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Card Limit",val:"",type:"Number"}],"Loan Amount":[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Loan Account Number *",val:"",type:"Number",mandatory:!0},{key:"Loan Amount *",val:"",type:"Number",mandatory:!0}],Insurance:[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Policy Number *",val:"",type:"Number",mandatory:!0},{key:"Policy Amount *",val:"",type:"Number",mandatory:!0}],Warranty:[{key:"Object Name *",val:"",type:"Text",mandatory:!0},{key:"Warranty Period *",val:"",type:"Text",mandatory:!0},{key:"Bill Amount *",val:"",type:"Number",mandatory:!0}],Ponzi:[{key:"Description *",val:"",type:"Text",mandatory:!0},{key:"Return Period *",val:"",type:"Text",mandatory:!0},{key:"Amount *",val:"",type:"Number",mandatory:!0}],Receipt:[{key:"Object Name *",val:"",type:"Text",mandatory:!0},{key:"Description *",val:"",type:"Text",mandatory:!0},{key:"Expiry",val:"",type:"Date"}]},B=(a(190),a(584)),R=a.n(B),j=a(587),z=a.n(j),_=a(588),M=a.n(_),P=a(589),U=a.n(P),J=a(585),V=a.n(J),W=a(39),q=a.n(W),H=a(579),G=(a(586),a(583),a(590),a(596)),K=a(578),Q=a(22),X=a(643),Y={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}},Z=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0},{value:"File",label:"File",color:"#0052CC",isFixed:!0}],$=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e,n,l,o,c,u,m,p,g,v,f,h,E,k,A,N,T,C,x,S,I,O,D,L,w,B,R,j,z,_,M,P,U,J,V;Object(d.a)(this,a);for(var W=arguments.length,G=new Array(W),K=0;K<W;K++)G[K]=arguments[K];return(V=t.call.apply(t,[this].concat(G))).state={messages:V.props.messages,fname:"",ftype:"",liabilityShow:!0,liabilityList:[],liabilityType:"",active:"1",selectAssetRef:i.a.createRef(),selectNomineeRef:i.a.createRef(),selectCustomRef:i.a.createRef(),nomineeOption:[],nominees:[],nomineeList:[],modal:!1,selectedTemplate:[],isAddAssetButtonDisabled:!0,template:(null===(e=V.props.messages)||void 0===e?void 0:e.liabilityOption)?null===(n=V.props.messages)||void 0===n?void 0:n.liabilityOption:F,colourOptions1:[{value:"Loan Amount",label:(null===(l=V.props.messages)||void 0===l||null===(o=l.colorOption)||void 0===o?void 0:o["Loan Amount"])?null===(c=V.props.messages)||void 0===c||null===(u=c.colorOption)||void 0===u?void 0:u["Loan Amount"]:"Loan Amount",color:"#00B8D9",isFixed:!0},{value:"Credit Card",label:(null===(m=V.props.messages)||void 0===m||null===(p=m.colorOption)||void 0===p?void 0:p["Credit Card"])?null===(g=V.props.messages)||void 0===g||null===(v=g.colorOption)||void 0===v?void 0:v["Credit Card"]:"Credit Card",color:"#0052CC",isFixed:!0},{value:"Insurance",label:(null===(f=V.props.messages)||void 0===f||null===(h=f.colorOption)||void 0===h?void 0:h.Insurance)?null===(E=V.props.messages)||void 0===E||null===(k=E.colorOption)||void 0===k?void 0:k.Insurance:"Insurance",color:"#0052CC",isFixed:!0},{value:"Warranty",label:(null===(A=V.props.messages)||void 0===A||null===(N=A.colorOption)||void 0===N?void 0:N.Warranty)?null===(T=V.props.messages)||void 0===T||null===(C=T.colorOption)||void 0===C?void 0:C.Warranty:"Warranty",color:"#0052CC",isFixed:!0},{value:"Ponzi",label:(null===(x=V.props.messages)||void 0===x||null===(S=x.colorOption)||void 0===S?void 0:S.Ponzi)?null===(I=V.props.messages)||void 0===I||null===(O=I.colorOption)||void 0===O?void 0:O.Ponzi:"Ponzi",color:"#0052CC",isFixed:!0},{value:"Receipt",label:(null===(D=V.props.messages)||void 0===D||null===(L=D.colorOption)||void 0===L?void 0:L.Receipt)?null===(w=V.props.messages)||void 0===w||null===(B=w.colorOption)||void 0===B?void 0:B.Receipt:"Receipt",color:"#0052CC",isFixed:!0},{value:"Notes",label:(null===(R=V.props.messages)||void 0===R||null===(j=R.colorOption)||void 0===j?void 0:j.Notes)?null===(z=V.props.messages)||void 0===z||null===(_=z.colorOption)||void 0===_?void 0:_.Notes:"Notes",color:"#0052CC",isFixed:!0},{value:"Custom",label:(null===(M=V.props.messages)||void 0===M||null===(P=M.colorOption)||void 0===P?void 0:P.Custom)?null===(U=V.props.messages)||void 0===U||null===(J=U.colorOption)||void 0===J?void 0:J.Custom:"Custom",color:"#0052CC",isFixed:!0}]},V.deletecus=function(e){var t=V.state.selectedTemplate.filter((function(t){return e.key!==t.key}));V.setState({selectedTemplate:t})},V.getAssets=function(){var e,t=JSON.parse(localStorage.getItem("logInUserData")),a=V.state.liabilityList;a.splice(0,a.length),(null===t||void 0===t||null===(e=t.liabilities)||void 0===e?void 0:e.length)&&t.liabilities.forEach((function(e,t){var n="";e.nominees.forEach((function(t,a){a===e.nominees.length-1?n+=t.name:n=n+t.name+", "}));var l=i.a.createElement("div",null,i.a.createElement(s.a,null,e.liabilityDetails.map((function(e){if(""!==e.val)return i.a.createElement(r.a,{md:"6",sm:"12"},i.a.createElement(y.a,null,i.a.createElement("b",null,e.key," :")," ",V.state.liabilityShow?e.val:"***********"))})),i.a.createElement(r.a,{md:"6",sm:"12"},i.a.createElement(y.a,null,i.a.createElement("b",null,"Nominees :")," ",V.state.liabilityShow?n:"*******************")))),o={id:t+1,title:e.liabilityType,content:l};a.push(o)})),V.setState({liabilityList:null===a||void 0===a?void 0:a.reverse()})},V.toggleModal=function(){V.setState((function(e){return{modal:!e.modal}}))},V.changeValue=function(e,t){var a=V.state.selectedTemplate,n=a.findIndex((function(e){return e.key===t.key}));e.length<50&&(a[n].val=e,V.setState({selectedTemplate:a},V.addAssetsButtonValidation))},V.addAssetsButtonValidation=function(){var e=!1;V.state.selectedTemplate.forEach((function(t){t.mandatory&&!t.val&&(e=!0)})),V.setState({isAddAssetButtonDisabled:e})},V.callAddLiability=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("logInUserData")),a={liabilityType:V.state.liabilityType,liabilityDetails:V.state.selectedTemplate,nominees:V.state.nominees};t.liabilities.push(a),q.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(b.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){V.props.getData(V.props.parsedFilter),V.getAssets()})).catch(),localStorage.setItem("logInUserData",JSON.stringify(t)),H.b.success("Liability addedd successfully!"),V.clearLiability(),V.clearCustomField(),V.setState({isAddAssetButtonDisabled:!0})},V.addfield=function(){if(""!==V.state.liabilityType){var e,t=V.state.selectedTemplate,a="";if("Attachments"===t[V.state.selectedTemplate.length-1].key)a=V.state.selectedTemplate.length&&t.splice((null===(e=V.state.selectedTemplate)||void 0===e?void 0:e.length)-1,0,{key:V.state.fname,val:"",type:V.state.ftype,deletable:!0}),V.setState({temp:a,fname:"",ftype:""});else t.push({key:V.state.fname,val:"",type:V.state.ftype,deletable:!0}),V.setState({selectedTemplate:t,fname:"",ftype:""});V.toggleModal()}},V.changeNominee=function(e){var t=[];e&&e.forEach((function(e){t.push({id:e.value,name:e.label})})),!e&&V.setState({isAddAssetButtonDisabled:!0}),V.setState({nominees:t})},V.clearLiability=function(){V.state.selectAssetRef.current.select.clearValue(),V.state.selectNomineeRef.current.select.clearValue(),V.setState({liabilityType:"",selectedTemplate:[],nominees:[]})},V.clearCustomField=function(){V.setState({fname:"",ftype:""}),V.state.selectCustomRef.current&&V.state.selectCustomRef.current.select.clearValue()},V.handleChange=function(e){V.setState({isAddAssetButtonDisabled:!0,fname:"",ftype:"",liabilityType:e?e.value:void 0,selectedTemplate:e?V.state.template[e.value]:{}})},V.animateLabel=function(e){e?(document.getElementById("buttonLabel").classList.remove("no-display"),document.getElementById("buttonLabel").classList.add("button-text")):(document.getElementById("buttonLabel").classList.add("no-display"),document.getElementById("buttonLabel").classList.remove("button-text"))},V}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getAssets()}},{key:"componentDidMount",value:function(){this.props.getData(this.props.parsedFilter),this.getAssets()}},{key:"render",value:function(){var e=this,t=this.props.messages;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},i.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},i.a.createElement(s.a,null,i.a.createElement(r.a,{sm:"12"},i.a.createElement(c.a,{activeTab:this.state.active},i.a.createElement(u.a,{tabId:"1"},i.a.createElement(s.a,null,i.a.createElement(H.a,null),i.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},i.a.createElement(v.a,null,i.a.createElement(f.a,null,i.a.createElement(h.a,null,(null===t||void 0===t?void 0:t.subHeading)?t.subHeading:"Add New Liability")),i.a.createElement(E.a,null,i.a.createElement(k.a,null,i.a.createElement(s.a,null,i.a.createElement(r.a,{md:"6",sm:"12"},i.a.createElement(A.a,{className:"form-label-group"},i.a.createElement(K.a,{className:"React",classNamePrefix:"select",ref:this.state.selectAssetRef,name:"color",options:this.state.colourOptions1,isClearable:!0,placeholder:(null===t||void 0===t?void 0:t.liabilityOptionText)?null===t||void 0===t?void 0:t.liabilityOptionText:"Select Liability Type...",onChange:function(t){e.handleChange(t)}}),i.a.createElement(N.a,{for:"nameMulti"},"Liability Type"))),i.a.createElement(r.a,{md:"6",sm:"12"},i.a.createElement(A.a,{className:"form-label-group"},i.a.createElement(K.a,{isMulti:!0,name:"nominee",options:this.state.nomineeOption,ref:this.state.selectNomineeRef,className:"React",classNamePrefix:"select",placeholder:(null===t||void 0===t?void 0:t.nomineeOption)?null===t||void 0===t?void 0:t.nomineeOption:"Select Nominees...",id:"nominee",onChange:this.changeNominee}),i.a.createElement(N.a,null,"Nominee")))),i.a.createElement(s.a,null,Object.keys(this.state.template).includes(this.state.liabilityType)&&this.state.selectedTemplate.map((function(t,a){return i.a.createElement(r.a,{md:"6",sm:"12",key:a},i.a.createElement(A.a,{className:"form-label-group"},t.deletable&&i.a.createElement(X.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){e.deletecus(t)}}),i.a.createElement(T.a,{type:t.type,name:"city",id:"cityMulti",className:"input-label",placeholder:t.key,value:t.val,onChange:function(a){e.changeValue(a.target?a.target.value:a.value,t)}}),i.a.createElement(N.a,{for:"cityMulti",className:"dark"===Q.a.theme?"dark-label":"light-label"},t.key)))}))),i.a.createElement(s.a,{style:{marginTop:"15px"}},i.a.createElement(r.a,{md:"6",sm:"12",style:{display:"flex"}},this.state.liabilityType&&i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{color:"white",outline:!0,onClick:this.toggleModal,className:"add-button",id:"addButton",onMouseEnter:function(){return e.animateLabel(!0)},onMouseLeave:function(){return e.animateLabel(!1)},style:{backgroundColor:"var(--warning)"}},"+"),i.a.createElement("div",{className:"label-div"},i.a.createElement("span",{id:"buttonLabel",className:"no-display"},"Add a Custom Field")))),i.a.createElement(r.a,{sm:"6"},i.a.createElement(A.a,{className:"action-right",style:{textAlign:"right",marginBottom:"0px"}},i.a.createElement(C.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(t){e.clearLiability()}},"Reset")," ",i.a.createElement(C.a.Ripple,{color:"warning",type:"submit",className:"button-label",disabled:0===this.state.nominees.length||!this.state.liabilityType||this.state.isAddAssetButtonDisabled,onClick:function(t){e.callAddLiability(t)}},"Add"))))))))),i.a.createElement(s.a,null,i.a.createElement(H.a,null),i.a.createElement(r.a,{md:"8"},i.a.createElement(w.a,{heading:(null===t||void 0===t?void 0:t.subHeading)?t.subHeading:"Liabilities List",collapseItems:this.state.liabilityList,show:function(){e.setState({liabilityShow:!e.state.liabilityShow}),e.state.liabilityShow=!e.state.liabilityShow,e.getAssets()},assetShow:this.state.liabilityShow}))))))))),i.a.createElement(r.a,{lg:"4",md:"6",sm:"12"},i.a.createElement("div",{className:"swipermobile"},i.a.createElement(L.a,Y,i.a.createElement("div",{style:{backgroundImage:"url(".concat(R.a,")"),backgroundSize:"contain"}}),i.a.createElement("div",{style:{backgroundImage:"url(".concat(z.a,")"),backgroundSize:"contain"}}),i.a.createElement("div",{style:{backgroundImage:"url(".concat(M.a,")"),backgroundSize:"contain"}}),i.a.createElement("div",{style:{backgroundImage:"url(".concat(U.a,")"),backgroundSize:"contain"}}),i.a.createElement("div",{style:{backgroundImage:"url(".concat(V.a,")"),backgroundSize:"contain"}}))))),i.a.createElement(s.a,null,i.a.createElement(r.a,{sm:"12"},i.a.createElement(x.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},i.a.createElement(S.a,{toggle:this.toggleModal},"Add Custom Field"),i.a.createElement(I.a,null,i.a.createElement(A.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"email",name:"Email",disabled:""===this.state.liabilityType,id:"EmailMulti",value:this.state.fname,placeholder:"Enter Field Name",onChange:function(t){e.setState({fname:t.target.value})}}),i.a.createElement(N.a,{for:"EmailMulti"},"Enter Field Name")),i.a.createElement(A.a,{className:"form-label-group",disabled:void 0===this.state.liabilityType},i.a.createElement(K.a,{className:"React",ref:this.state.selectCustomRef,disabled:void 0===this.state.liabilityType,classNamePrefix:"select",isClearable:!0,name:"color",options:Z,placeholder:"Select Field Type...",onChange:function(t){return e.setState({ftype:t?t.value:" "})}}),i.a.createElement(N.a,{for:"nameMulti"},"Field Type"))),i.a.createElement(O.a,null,i.a.createElement(A.a,{className:"form-label-group"},i.a.createElement(C.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"mb-1 button-label",disabled:void 0===this.state.liabilityType,onClick:function(t){e.clearCustomField()}},"Reset")," ",i.a.createElement(C.a.Ripple,{color:"warning",disabled:void 0===this.state.liabilityType,type:"submit",className:"button-label",onClick:function(t){return e.addfield()}},"Add")))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.dataList.data.length!==t.nomineeList.length){var a=t.nomineeOption;return e.dataList.data.forEach((function(e){var t={value:e._id,label:e.name+" - "+e.relation,color:"#00B8D9",isFixed:!1};a.push(t)})),{nomineeList:e.dataList.data,nomineeOption:a}}return null}}]),a}(i.a.Component),ee=Object(o.b)((function(e){return{dataList:e.dataList}}),{getData:G.d})($);t.default=Object(o.b)((function(e){var t,a=(null===e||void 0===e?void 0:e.customizer).customizer;return{messages:null===a||void 0===a||null===(t=a.language)||void 0===t?void 0:t.Liability}}))((function(e){var t=Object(l.useState)("1"),a=Object(n.a)(t,2),o=a[0],d=(a[1],e.messages);return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"warning spacing"},(null===d||void 0===d?void 0:d.heading)?d.heading:"Liabilties"),i.a.createElement(s.a,null,i.a.createElement(r.a,{sm:"12"},i.a.createElement(c.a,{activeTab:o},i.a.createElement(u.a,{tabId:"1"},i.a.createElement(ee,{messages:d}))))))}))},583:function(e,t,a){},584:function(e,t,a){e.exports=a.p+"static/media/banner-31.d54fc4be.jpg"},585:function(e,t,a){e.exports=a.p+"static/media/banner-25.a47593fc.jpg"},587:function(e,t,a){e.exports=a.p+"static/media/banner-22.702fed4d.jpg"},588:function(e,t,a){e.exports=a.p+"static/media/banner-23.b74d240c.jpg"},589:function(e,t,a){e.exports=a.p+"static/media/banner-24.d3fb51a8.jpg"},590:function(e,t,a){},596:function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"h",(function(){return g})),a.d(t,"a",(function(){return b}));var n=a(53),l=a.n(n),i=a(72),o=a(39),s=a.n(o);s.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var r=function(e){return function(){var t=Object(i.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t.next=3,s.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){console.log("aaquib  123",t.data),console.log("aaquib  123",e),a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},c=function(e){return function(){var t=Object(i.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t.next=3,s.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){console.log("aaquib  123",t.data),console.log("aaquib  123",e),a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/backendapi/nominee/list/"+e._id,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){a({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/backendapi/spend/list/"+e._id,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){a({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},p=function(e){return function(t){console.log("DELETE DATA :",e),s.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},g=function(e){return console.log("Aaquib 123",e),function(t,a){s.a.post("/api/datalist/update-data",{obj:e},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"UPDATE_DATA",obj:e})}))}},b=function(e){return function(t,a){var n=a().dataList.params;s.a.post("/api/datalist/add-data",{obj:e},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"ADD_DATA",obj:e}),t(r(n))}))}}},610:function(e,t,a){"use strict";var n=a(15),l=a(16),i=a(20),o=a(19),s=a(0),r=a.n(s),c=a(523),u=a(598),d=a(599),m=a(616),p=a(494),g=a(602),b=a(603),y=a(8),v=a.n(y),f=a(574),h=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,i=new Array(l),o=0;o<l;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={activeTab:"1",collapseID:"",status:"Closed",collapseItems:e.props.collapseItems,colorOption:e.props.colorOption},e.toggleTab=function(t){e.state.activeTab!==t&&e.setState({activeTab:t})},e.toggleCollapse=function(t){e.setState((function(e){return{collapseID:e.collapseID!==t?t:""}}))},e.onEntered=function(t){t===e.state.collapseID&&e.setState({status:"Opened"})},e.onEntering=function(t){t===e.state.collapseID&&e.setState({status:"Opening..."})},e.onExited=function(t){t===e.state.collapseID&&e.setState({status:"Closed"})},e.onExiting=function(t){t===e.state.collapseID&&e.setState({status:"Closing..."})},e.formatme=function(t){var a,n;return(null===(a=e.state)||void 0===a||null===(n=a.colorOption)||void 0===n?void 0:n[t])?e.state.colorOption[t]:t},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.collapseItems.length>0?this.state.collapseItems.map((function(t){return r.a.createElement("div",{className:"collapse-margin",key:t.id},r.a.createElement(c.a,{onClick:function(){return e.toggleCollapse(t.id)},className:v()({"collapse-collapsed":"Closed"===e.state.status&&e.state.collapseID===t.id,"collapse-shown":"Opened"===e.state.status&&e.state.collapseID===t.id,closing:"Closing..."===e.state.status&&e.state.collapseID===t.id,opening:"Opening..."===e.state.status&&e.state.collapseID===t.id})},r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"lead collapse-title collapsed"},e.formatme(t.title)),r.a.createElement(f.a,{size:15,className:"collapse-icon"})),r.a.createElement(m.a,{isOpen:t.id===e.state.collapseID,onEntering:function(){return e.onEntering(t.id)},onEntered:function(){return e.onEntered(t.id)},onExiting:function(){return e.onExiting(t.id)},onExited:function(){return e.onExited(t.id)}},r.a.createElement(p.a,null,t.content))))})):r.a.createElement("span",{style:{fontSize:"12px",marginTop:"-10px"}},"No Asset Found");return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{style:{paddingBottom:"1.5rem",paddingRight:"0.5rem",marginBottom:"portfolio"===this.props.page?"2.2rem":"1rem"}},r.a.createElement(u.a,null,r.a.createElement(d.a,null,this.props.heading)),r.a.createElement(p.a,{className:"card_body",style:{maxHeight:"portfolio"===this.props.page?"260px":" calc(100vh - 435px)"}},r.a.createElement(g.a,{activeTab:this.state.activeTab},r.a.createElement(b.a,{tabId:"1"},r.a.createElement("div",{className:"vx-collapse"},t)),r.a.createElement(b.a,{className:"component-code",tabId:"2"},"hey")))))}}]),a}(r.a.Component);t.a=h}}]);
//# sourceMappingURL=26.54d26745.chunk.js.map