(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[15,25],{504:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),l=t.n(n).a.createContext({})},511:function(e,a,t){},515:function(e,a,t){"use strict";var n=t(4),l=t(9),r=t(0),c=t.n(r),o=t(1),i=t.n(o),s=t(8),d=t.n(s),m=t(3),u={tag:m.o,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},v=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,i=e.inverse,s=e.outline,u=e.tag,v=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(m.k)(d()(a,"card",!!i&&"text-white",!!o&&"card-body",!!r&&(s?"border":"bg")+"-"+r),t);return c.a.createElement(u,Object(n.a)({},p,{className:b,ref:v}))};v.propTypes=u,v.defaultProps={tag:"div"},a.a=v},518:function(e,a,t){"use strict";var n=t(4),l=t(9),r=t(0),c=t.n(r),o=t(1),i=t.n(o),s=t(8),d=t.n(s),m=t(3),u={tag:m.o,className:i.a.string,cssModule:i.a.object},v=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),i=Object(m.k)(d()(a,"card-title"),t);return c.a.createElement(r,Object(n.a)({},o,{className:i}))};v.propTypes=u,v.defaultProps={tag:"div"},a.a=v},521:function(e,a,t){"use strict";var n=t(4),l=t(9),r=t(0),c=t.n(r),o=t(1),i=t.n(o),s=t(8),d=t.n(s),m=t(3),u={tag:m.o,className:i.a.string,cssModule:i.a.object},v=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(l.a)(e,["className","cssModule","tag"]),i=Object(m.k)(d()(a,"card-header"),t);return c.a.createElement(r,Object(n.a)({},o,{className:i}))};v.propTypes=u,v.defaultProps={tag:"div"},a.a=v},525:function(e,a,t){"use strict";var n=t(4),l=t(15),r=t(0),c=t.n(r),o=t(1),i=t.n(o),s=t(8),d=t.n(s),m=t(504),u=t(3),v={tag:u.o,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,r=Object(u.l)(this.props,Object.keys(v)),o=Object(u.k)(d()("tab-content",a),t);return c.a.createElement(m.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(l,Object(n.a)({},r,{className:o})))},a}(r.Component);a.a=p,p.propTypes=v,p.defaultProps={tag:"div"}},526:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(4),l=t(9),r=t(0),c=t.n(r),o=t(1),i=t.n(o),s=t(8),d=t.n(s),m=t(504),u=t(3),v={tag:u.o,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function p(e){var a=e.className,t=e.cssModule,r=e.tabId,o=e.tag,i=Object(l.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return Object(u.k)(d()("tab-pane",a,{active:r===e}),t)};return c.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return c.a.createElement(o,Object(n.a)({},i,{className:s(a)}))}))}p.propTypes=v,p.defaultProps={tag:"div"}},561:function(e,a,t){"use strict";var n=t(4),l=t(9),r=t(0),c=t.n(r),o=t(1),i=t.n(o),s=t(8),d=t.n(s),m=t(3),u={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:m.o,responsiveTag:m.o,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},v=function(e){var a=e.className,t=e.cssModule,r=e.size,o=e.bordered,i=e.borderless,s=e.striped,u=e.dark,v=e.hover,p=e.responsive,b=e.tag,f=e.responsiveTag,h=e.innerRef,E=Object(l.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),g=Object(m.k)(d()(a,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!i&&"table-borderless",!!s&&"table-striped",!!u&&"table-dark",!!v&&"table-hover"),t),w=c.a.createElement(b,Object(n.a)({},E,{ref:h,className:g}));if(p){var y=Object(m.k)(!0===p?"table-responsive":"table-responsive-"+p,t);return c.a.createElement(f,{className:y},w)}return w};v.propTypes=u,v.defaultProps={tag:"table",responsiveTag:"div"},a.a=v},562:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t.n(n),r=t(40),c=t(7),o=t(0),i=t.n(o),s=t(31),d=t.n(s),m=t(254),u=t(561),v=t(521),p=t(518),b=function(e){var a=e.setplan,t=e.plan,n=function(e){return i.a.createElement(u.a,null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Assets"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited")),i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Liabilities"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited")),i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Secret Diary"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited")),i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Daily Spends"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited")),i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Password Vault"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited")),i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Document Locker"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited")),i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Declare Nominees"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited")),i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Record Audio/Video messages"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited")),i.a.createElement("tr",null,i.a.createElement("th",{scope:"row",style:{padding:"0.4rem"}},"Get legal help for will generation"),i.a.createElement("td",{style:{padding:"0.4rem"}},(null===e||void 0===e?void 0:e.b)?10:(null===e||void 0===e?void 0:e.a)?50:"Unlimited"))))};return i.a.createElement("div",{className:window.screen.width<=500?"d-block justify-content-around mt-0 col":"d-flex justify-content-around mt-0 row"},i.a.createElement("div",{className:window.screen.width<=500?"row":"col",style:{border:399===t?"3px solid #ff9f43":"3px solid #e3e3e3",cursor:"pointer ",borderRadius:"15px",padding:"10px",maxWidth:"350px"},onClick:function(){a(399)}},i.a.createElement(v.a,{style:{justifyContent:"center",padding:"3px",borderRadius:"10px"}},i.a.createElement(p.a,{style:{color:399===t?"#ff9f43":"#b8c2cc"}},"Basic Plan")),n({b:"b"})),i.a.createElement("div",{className:window.screen.width<=500?"mt-0 row":"col",style:{border:999===t?"3px solid #ff9f43":"3px solid #e3e3e3",cursor:"pointer ",borderRadius:"15px",padding:"10px",maxWidth:"350px"},onClick:function(){a(999)}},i.a.createElement(v.a,{style:{justifyContent:"center",padding:"3px",borderRadius:"10px"}},i.a.createElement(p.a,{style:{color:999===t?"#ff9f43":"#b8c2cc"}},"Premium Plan")),n()),i.a.createElement("div",{className:window.screen.width<=500?"mt-0 row":"col",style:{border:699===t?"3px solid #ff9f43":"3px solid #e3e3e3",cursor:"pointer ",borderRadius:"15px",padding:"10px",maxWidth:"350px"},onClick:function(){a(699)}},i.a.createElement(v.a,{style:{justifyContent:"center",background:699===t?"#ff9f43":"#b8c2cc",padding:"3px",borderRadius:"10px"}},i.a.createElement(p.a,{style:{color:699===t?"#ff9f43":"#b8c2cc"}},"Advanced Plan")),n({a:"a"})))},f=t(166),h=t.n(f),E=function(e){return new Promise((function(a){var t=document.createElement("script");t.src=e,document.body.appendChild(t),t.onload=function(){a(!0)},t.onerror=function(){a(!1)}}))};a.default=function(e){var a=Object(o.useState)(999),t=Object(c.a)(a,2),n=t[0],s=t[1],u="lastarzi.com"===document.domain,v=e.loc,p=function(){var e=Object(r.a)(l.a.mark((function e(a){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.amount,n=a.id,e.next=3,E("https://checkout.razorpay.com/v1/checkout.js");case 3:if(e.sent){e.next=6;break}return e.abrupt("return",alert("Loading Failed"));case 6:r={key:u?"unavailable":"rzp_test_ppuCw11USIQQym",amount:null===t||void 0===t?void 0:t.toString(),currency:"INR",name:"LastArzi",description:"Pay Dev",image:h.a,order_id:n,callback_url:"https://eneqd3r9zrjok.x.pipedream.net/",prefill:{name:"Vipin Kumar",email:"vksforum@gmail.com",contact:"9458706129"},notes:{address:"LastArzi Corporate Office"},theme:{color:"#FF9F43"}},new window.Razorpay(r).open();case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={method:"post",url:"/backendapi/createorder",data:{amount:n?100*n:100,currency:"INR",receipt:"Receipt no. 1",payment_capture:1,notes:{notes_key_1:"Tea, Earl Grey, Hot",notes_key_2:"Tea, Earl Grey\u2026 decaf."}}},d()(a).then((function(e){console.log("response createOrderRazorpay",e),p(e.data)})).catch((function(){alert("Failed api")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{plan:n,setplan:s}),i.a.createElement("div",{className:"d-flex justify-content-center flex-wrap mt-2"},!v&&i.a.createElement(m.a.Ripple,{color:"warning",onClick:function(e){f()}},"Pay Now ",i.a.createElement("b",null,"Rs. ",n))))}},625:function(e,a,t){},641:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t(0),r=t.n(l),c=t(515),o=t(446),i=t(447),s=t(448),d=t(458),m=t(459),u=t(4),v=t(9),p=t(2),b=t(15),f=t(1),h=t.n(f),E=t(8),g=t.n(E),w=t(3),y={tag:w.o,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),disabled:h.a.bool,active:h.a.bool,className:h.a.string,cssModule:h.a.object,onClick:h.a.func,href:h.a.any},O=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(p.a)(t)),t}Object(b.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.active,l=e.tag,c=e.innerRef,o=Object(v.a)(e,["className","cssModule","active","tag","innerRef"]),i=Object(w.k)(g()(a,"nav-link",{disabled:o.disabled,active:n}),t);return r.a.createElement(l,Object(u.a)({},o,{ref:c,onClick:this.onClick,className:i}))},a}(r.a.Component);O.propTypes=y,O.defaultProps={tag:"a"};var j=O,x=t(525),N=t(526),k=t(478),C=t(437),S=t(438),M=t(439),R=t(499),T=t(456),P=t(449),z=t(451),D=t(450),F=t(632),I=t(254),L=t(452),U={body:h.a.bool,bottom:h.a.bool,children:h.a.node,className:h.a.string,cssModule:h.a.object,heading:h.a.bool,left:h.a.bool,list:h.a.bool,middle:h.a.bool,object:h.a.bool,right:h.a.bool,tag:w.o,top:h.a.bool},H=function(e){var a,t=e.body,n=e.bottom,l=e.className,c=e.cssModule,o=e.heading,i=e.left,s=e.list,d=e.middle,m=e.object,p=e.right,b=e.tag,f=e.top,h=Object(v.a)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);a=o?"h4":h.href?"a":h.src||m?"img":s?"ul":"div";var E=b||a,y=Object(w.k)(g()(l,{"media-body":t,"media-heading":o,"media-left":i,"media-right":p,"media-top":f,"media-bottom":n,"media-middle":d,"media-object":m,"media-list":s,media:!t&&!o&&!i&&!p&&!f&&!n&&!d&&!m&&!s}),c);return r.a.createElement(E,Object(u.a)({},h,{className:y}))};H.propTypes=U;var _=H,A=t(164),B=function(e){return r.a.createElement("div",{className:g()("vx-radio-con ".concat(e.className," vx-radio-").concat(e.color))},r.a.createElement("input",{type:"radio",defaultChecked:e.defaultChecked,value:e.value,disabled:e.disabled,name:e.name,onClick:e.onClick,onChange:e.onChange,ref:e.ref,checked:e.checked}),r.a.createElement("span",{className:g()("vx-radio",{"vx-radio-sm":"sm"===e.size,"vx-radio-lg":"lg"===e.size})},r.a.createElement("span",{className:"vx-radio--border"}),r.a.createElement("span",{className:"vx-radio--circle"})),r.a.createElement("span",null,e.label))},V=t(454),W=t(441);function q(){return(q=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function J(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var G=Object(l.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,l=e.size,c=void 0===l?24:l,o=J(e,["color","size"]);return r.a.createElement("svg",q({ref:a,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.a.createElement("polyline",{points:"14 2 14 8 20 8"}),r.a.createElement("line",{x1:"12",y1:"18",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"9",y1:"15",x2:"15",y2:"15"}))}));G.propTypes={color:h.a.string,size:h.a.oneOfType([h.a.string,h.a.number])},G.displayName="FilePlus";var Y=G,Q=t(477),K=t(106),X=t.n(K),Z=t(107),$=t.n(Z),ee=t(161),ae=t(31),te=t.n(ae),ne=(t(50),t(150)),le=t(35),re=t(25),ce=t(26),oe=t(27),ie=t(28),se=t(29),de=t(5),me=(t(10),t(33),t(80),t(21)),ue=t(77),ve=(t(54),t(148),t(149),t(248)),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,t=String(e).toLowerCase(),n=String(a.value).toLowerCase(),l=String(a.label).toLowerCase();return n===t||l===t},be={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,a,t){return!(!e||a.some((function(a){return pe(e,a)}))||t.some((function(a){return pe(e,a)})))},getNewOptionData:function(e,a){return{label:a,value:e,__isNew__:!0}}},fe=Object(le.a)({allowCreateWhileLoading:!1,createOptionPosition:"last"},be),he=function(e){var a,t;return t=a=function(a){function t(e){var a;Object(re.a)(this,t),a=Object(oe.a)(this,Object(ie.a)(t).call(this,e)),Object(de.a)(Object(p.a)(Object(p.a)(a)),"select",void 0),Object(de.a)(Object(p.a)(Object(p.a)(a)),"onChange",(function(e,t){var n=a.props,l=n.getNewOptionData,r=n.inputValue,c=n.isMulti,o=n.onChange,i=n.onCreateOption,s=n.value,d=n.name;if("select-option"!==t.action)return o(e,t);var m=a.state.newOption,u=Array.isArray(e)?e:[e];if(u[u.length-1]!==m)o(e,t);else if(i)i(r);else{var v=l(r,r),p={action:"create-option",name:d};o(c?[].concat(Object(ne.a)(Object(me.f)(s)),[v]):v,p)}}));var n=e.options||[];return a.state={newOption:void 0,options:n},a}return Object(se.a)(t,a),Object(ce.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var a=e.allowCreateWhileLoading,t=e.createOptionPosition,n=e.formatCreateLabel,l=e.getNewOptionData,r=e.inputValue,c=e.isLoading,o=e.isValidNewOption,i=e.value,s=e.options||[],d=this.state.newOption;d=o(r,Object(me.f)(i),s)?l(r,n(r)):void 0,this.setState({newOption:d,options:!a&&c||!d?s:"first"===t?[d].concat(Object(ne.a)(s)):[].concat(Object(ne.a)(s),[d])})}},{key:"focus",value:function(){this.select.focus()}},{key:"blur",value:function(){this.select.blur()}},{key:"render",value:function(){var a=this,t=this.state.options;return r.a.createElement(e,Object(u.a)({},this.props,{ref:function(e){a.select=e},options:t,onChange:this.onChange}))}}]),t}(l.Component),Object(de.a)(a,"defaultProps",fe),t}(ue.a),Ee=Object(ve.a)(he),ge=[{value:"english",label:"English",color:"#7367f0"},{value:"french",label:"French",color:"#7367f0"},{value:"german",label:"German",color:"#7367f0"},{value:"portuguese",label:"Portuguese",color:"#7367f0"},{value:"arabi",label:"Arabi",color:"#7367f0"},{value:"chinese",label:"Chinese",color:"#7367f0"},{value:"hindi",label:"Hindi",color:"#7367f0"},{value:"russian",label:"Russian",color:"#7367f0"},{value:"spanish",label:"Spanish",color:"#7367f0"},{value:"urdu",label:"Urdu",color:"#7367f0"}],we=[{value:"Mr",label:"Mr",isFixed:!1},{value:"Miss",label:"Miss",isFixed:!0},{value:"Mrs",label:"Mrs",isFixed:!0},{value:"Dr",label:"Dr",isFixed:!1}],ye=JSON.parse(localStorage.getItem("logInUserData")),Oe=function(){var e=ye.address,a=Object(l.useState)("Save Changes"),t=Object(n.a)(a,2),c=t[0],o=t[1],d=Object(l.useState)(null===ye||void 0===ye?void 0:ye.dob),m=Object(n.a)(d,2),u=m[0],v=m[1],p=Object(l.useState)(null===ye||void 0===ye?void 0:ye.secondarymobile),b=Object(n.a)(p,2),f=b[0],h=b[1],E=Object(l.useState)(null===ye||void 0===ye?void 0:ye.secondaryemail),g=Object(n.a)(E,2),w=g[0],y=g[1],O=Object(l.useState)(null===ye||void 0===ye?void 0:ye.language),j=Object(n.a)(O,2),x=j[0],N=j[1],k=Object(l.useState)(null===ye||void 0===ye?void 0:ye.pwdtime),C=Object(n.a)(k,2),S=C[0],M=C[1],U=Object(l.useState)(null===e||void 0===e?void 0:e.postalCode),H=Object(n.a)(U,2),q=H[0],J=H[1],G=Object(l.useState)(null===e||void 0===e?void 0:e.address1),K=Object(n.a)(G,2),Z=K[0],ae=K[1],ne=Object(l.useState)(null===e||void 0===e?void 0:e.address2),le=Object(n.a)(ne,2),re=le[0],ce=le[1],oe=Object(l.useState)(null===e||void 0===e?void 0:e.city),ie=Object(n.a)(oe,2),se=ie[0],de=ie[1],me=Object(l.useState)(null===e||void 0===e?void 0:e.state),ue=Object(n.a)(me,2),ve=ue[0],pe=ue[1],be=Object(l.useState)(null===e||void 0===e?void 0:e.country),fe=Object(n.a)(be,2),he=fe[0],Oe=fe[1],je=Object(l.useState)(""),xe=Object(n.a)(je,2),Ne=xe[0],ke=xe[1],Ce=Object(l.useState)(),Se=Object(n.a)(Ce,2),Me=Se[0],Re=Se[1],Te=Object(l.useState)(),Pe=Object(n.a)(Te,2),ze=Pe[0],De=Pe[1],Fe=Object(l.useState)(),Ie=Object(n.a)(Fe,2),Le=Ie[0],Ue=Ie[1],He=Object(l.useState)(null===ye||void 0===ye?void 0:ye.salutation),_e=Object(n.a)(He,2),Ae=_e[0],Be=_e[1],Ve=Object(l.useState)(null===ye||void 0===ye?void 0:ye.mobile),We=Object(n.a)(Ve,2),qe=We[0],Je=We[1],Ge=Object(l.useState)(!0),Ye=Object(n.a)(Ge,2),Qe=Ye[0],Ke=Ye[1],Xe=Object(l.useState)(!1),Ze=Object(n.a)(Xe,2),$e=Ze[0],ea=Ze[1],aa=Object(l.useState)(null===ye||void 0===ye?void 0:ye.theme),ta=Object(n.a)(aa,2),na=ta[0],la=ta[1],ra=Object(l.useState)(!1),ca=Object(n.a)(ra,2),oa=ca[0],ia=ca[1];Object(l.useEffect)((function(){var e,a,t,n,l,r,c=(null===ye||void 0===ye?void 0:ye.name)?null===ye||void 0===ye?void 0:ye.name.split(" "):null===ye||void 0===ye?void 0:ye.username.split(" "),o="",i="",s="";if(1===(null===c||void 0===c?void 0:c.length)?o=c[0]:2===(null===c||void 0===c?void 0:c.length)&&(o=c[0],s=c[1]),3===(null===c||void 0===c?void 0:c.length)&&(o=c[0],s=c[2],i=c[1]),(null===c||void 0===c?void 0:c.length)>3){o=c[0];for(var d=1;d<(null===c||void 0===c?void 0:c.length)-1;d+=1)i=i+" "+c[d];s=c[2],i=c[(null===c||void 0===c?void 0:c.length)-1]}ke(o),Re(i),De(s),Ue(null===ye||void 0===ye?void 0:ye.email),Je(null===ye||void 0===ye?void 0:ye.secondaryemail),(null===ye||void 0===ye||null===(e=ye.address)||void 0===e?void 0:e.address1)&&(null===ye||void 0===ye||null===(a=ye.address)||void 0===a?void 0:a.address2)&&(null===ye||void 0===ye||null===(t=ye.address)||void 0===t?void 0:t.city)&&(null===ye||void 0===ye||null===(n=ye.address)||void 0===n?void 0:n.country)&&(null===ye||void 0===ye||null===(l=ye.address)||void 0===l?void 0:l.postalCode)&&(null===ye||void 0===ye||null===(r=ye.address)||void 0===r?void 0:r.state)&&(null===ye||void 0===ye?void 0:ye.language)&&(null===ye||void 0===ye?void 0:ye.theme)&&(null===ye||void 0===ye?void 0:ye.pwdtime)&&(null===ye||void 0===ye?void 0:ye.communication.length)>0&&ea(!0)}),[]);var sa=function(e,a){M(a)},da=function(e){ia(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{isOpen:oa,className:"modal-dialog-centered",fade:!0,toggle:function(){return da(!1)},style:{maxWidth:"800px"},backdrop:"static"},r.a.createElement(T.a,null,r.a.createElement(s.a,{sm:"12",className:window.screen.width<=500?"d-block":"d-flex"},r.a.createElement(s.a,{md:window.screen.width<=500?"12":"6"},r.a.createElement(i.a,{xs:"1"},r.a.createElement(P.a,null,r.a.createElement(z.a,{for:"address1"},"Address Line 1"),r.a.createElement(D.a,{type:"text",id:"address1",value:Z,onChange:function(e){return ae(e.target.value)}}))),r.a.createElement(i.a,{xs:"1"},r.a.createElement(P.a,null,r.a.createElement(z.a,{for:"address1"},"Address Line 2"),r.a.createElement(D.a,{type:"text",id:"address1",value:re,onChange:function(e){return ce(e.target.value)}}))),r.a.createElement(i.a,{xs:"1"},r.a.createElement(P.a,null,r.a.createElement(z.a,{for:"pincode"},"Pincode"),r.a.createElement(D.a,{type:"number",id:"pincode",value:q,onChange:function(e){return J(e.target.value)}}))),r.a.createElement(i.a,{xs:"1"},r.a.createElement(P.a,null,r.a.createElement(z.a,{for:"city"},"City"),r.a.createElement(D.a,{type:"text",id:"city",value:se,onChange:function(e){return de(e.target.value)}}))),r.a.createElement(i.a,{xs:"1"},r.a.createElement(P.a,null,r.a.createElement(z.a,{for:"State"},"State"),r.a.createElement(D.a,{type:"text",id:"State",value:ve,onChange:function(e){return pe(e.target.value)}}))),r.a.createElement(i.a,{xs:"1"},r.a.createElement(P.a,null,r.a.createElement(z.a,{for:"Country"},"Country"),r.a.createElement(D.a,{type:"text",id:"Country",value:he,onChange:function(e){return Oe(e.target.value)}})))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":"6",sm:{size:"auto",offset:1}},r.a.createElement(i.a,null,r.a.createElement(P.a,{style:{marginBottom:"1rem"}},r.a.createElement(z.a,{className:"d-block mb-50",for:"communication"},"Communication"),r.a.createElement("div",{className:"d-inline-block mr-1"},r.a.createElement(A.a,{color:"primary",icon:r.a.createElement(V.a,{className:"vx-icon",size:16}),label:"Email",disabled:!0,defaultChecked:!0})),r.a.createElement("br",null)," ",r.a.createElement("div",{className:"d-inline-block mr-1"},r.a.createElement(A.a,{color:"primary",icon:r.a.createElement(V.a,{className:"vx-icon",size:16}),label:"SMS",disabled:!0,defaultChecked:!0})),r.a.createElement("br",null),r.a.createElement("div",{className:"d-inline-block"},r.a.createElement(A.a,{color:"primary",icon:r.a.createElement(V.a,{className:"vx-icon",size:16}),label:"Phone",disabled:!0,defaultChecked:!0})))),r.a.createElement(i.a,null,r.a.createElement(P.a,{style:{marginBottom:"1rem"}},r.a.createElement(z.a,{className:"d-block mb-50"},"Theme"),r.a.createElement("div",{className:"d-inline-block mr-1"},r.a.createElement(B,{label:"Dark",color:"primary",defaultChecked:"dark"===(null===ye||void 0===ye?void 0:ye.theme),name:"theme",onChange:function(e){return la("dark")}})),r.a.createElement("br",null),r.a.createElement("div",{className:"d-inline-block mr-1"},r.a.createElement(B,{label:"Light",color:"primary",defaultChecked:"dark"!==(null===ye||void 0===ye?void 0:ye.theme),name:"theme",onChange:function(e){return la("light")}})))),r.a.createElement(i.a,null,r.a.createElement(P.a,{style:{marginBottom:"1rem"}},r.a.createElement(z.a,{className:"d-block mb-50"},"Gender"),r.a.createElement("div",{className:"d-inline-block mr-1"},r.a.createElement(B,{label:"Male",color:"primary",defaultChecked:"Mr"===(null===ye||void 0===ye?void 0:ye.salutation),name:"gender",disabled:!0})),r.a.createElement("br",null),r.a.createElement("div",{className:"d-inline-block mr-1"},r.a.createElement(B,{label:"Female",color:"primary",defaultChecked:"Mr"!==(null===ye||void 0===ye?void 0:ye.salutation),name:"gender",disabled:!0})),r.a.createElement("br",null),r.a.createElement("div",{className:"d-inline-block"},r.a.createElement(B,{label:"Others",color:"primary",defaultChecked:!1,name:"gender",disabled:!0})))),r.a.createElement(i.a,null,r.a.createElement(P.a,{style:{marginBottom:"1rem"}},r.a.createElement(z.a,{className:"d-block mb-50"},"Password Show Time in Password Vault"),r.a.createElement("div",{className:"d-inline-block mr-1"},r.a.createElement(B,{label:"3 Seconds",color:"primary",defaultChecked:3===S||!S,name:"pwd",onChange:function(e){sa(0,3)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"d-inline-block mr-1"},r.a.createElement(B,{label:"5 Seconds",color:"primary",defaultChecked:5===S,name:"pwd",onChange:function(e){sa(0,5)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"d-inline-block"},r.a.createElement(B,{label:"10 Seconds",color:"primary",defaultChecked:10===S,name:"pwd",onChange:function(e){sa(0,10)}}))))))),r.a.createElement(F.a,{className:"justify-content-center"},r.a.createElement(I.a,{color:"warning",onClick:function(){return da(!1)}},"OK"))),r.a.createElement(L.a,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(s.a,{className:"mt-1"},r.a.createElement(i.a,{className:"mt-1",sm:"12"},r.a.createElement(_,{className:"mb-2 ml-1"},r.a.createElement(_,{className:"mr-2 my-25",left:!0,href:"#"},r.a.createElement(_,{className:"users-avatar-shadow rounded",object:!0,src:ye&&"Mr"===ye.salutation?$.a:X.a,alt:"user profile image",height:"84",width:"84"})),r.a.createElement(_,{className:"mt-2",body:!0},r.a.createElement(_,{className:"font-medium-1 text-bold-600",tag:"p",heading:!0},null===ye||void 0===ye?void 0:ye.name)))),r.a.createElement(i.a,{sm:""},r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"2"},r.a.createElement(P.a,null,r.a.createElement(z.a,null,"Salutaion"),r.a.createElement(Ee,{isMulti:!1,isClearable:!1,options:we,className:"React",classNamePrefix:"select",value:{value:Ae,label:Ae,isFixed:!1},onChange:function(e){return Be(e&&e.value?e.value:null)}}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"2"},r.a.createElement(P.a,null,r.a.createElement(z.a,null,"First Name"),r.a.createElement(D.a,{type:"text",required:!0,value:Ne,onChange:function(e){return ke(e.target.value)}}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"2"},r.a.createElement(P.a,null,r.a.createElement(z.a,null,"Middle Name"),r.a.createElement(D.a,{type:"text",value:Me,onChange:function(e){return Re(e.target.value)}}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"2"},r.a.createElement(P.a,null,r.a.createElement(z.a,null,"Last Name"),r.a.createElement(D.a,{type:"text",required:!0,value:ze,onChange:function(e){return De(e.target.value)}}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"2"},r.a.createElement(P.a,null,r.a.createElement(z.a,{for:"languages"},"Languages"),r.a.createElement(ee.a,{languages:!0,defaultValue:ge.filter((function(e){return e.value===x})),isClearable:!0,options:ge,className:"React",classNamePrefix:"select",id:"languages",onChange:function(e){return N(e?e.value:void 0)}}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"2"},r.a.createElement(P.a,null,r.a.createElement(z.a,null,"Date of birth"),r.a.createElement(D.a,{type:"Date",name:"dob",onChange:function(e){return a=e.target.value,void v(a);var a}}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"4"},r.a.createElement(P.a,null,r.a.createElement(z.a,null,"Primary Email"),r.a.createElement(D.a,{type:"email",required:!0,disabled:!0,value:Le}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"4"},r.a.createElement(P.a,null,r.a.createElement(z.a,null," Secondary Email"),r.a.createElement(D.a,{type:"email",required:!0,value:w,onChange:function(e){return y(e.target.value)}}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"2"},r.a.createElement(P.a,null,r.a.createElement(z.a,null," Primary Contact"),r.a.createElement(D.a,{type:"emailSecondary",required:!0,value:qe,onChange:function(e){return Je(e.target.value)}}))),r.a.createElement(s.a,{md:window.screen.width<=500?"12":window.screen.width>=768&&window.screen.width<=1024?"3":"2"},r.a.createElement(P.a,null,r.a.createElement(z.a,null," Secondary Contact"),r.a.createElement(D.a,{type:"number",required:!0,value:f,onChange:function(e){return h(e.target.value)}})))),r.a.createElement(i.a,{sm:"12",className:"d-flex justify-content-between flex-wrap",style:{position:"relative",bottom:"-5rem"}},r.a.createElement(s.a,{md:"4",className:"d-flex"},r.a.createElement(I.a,{className:"add-button",color:"warning",onMouseEnter:function(){Ke(!Qe)},style:{height:"45px",width:"45px"}},r.a.createElement(W.a,{size:"25",style:{margin:"8px"}})),r.a.createElement("div",{className:"add-info-div",style:{width:$e?"110px":"85px"}},r.a.createElement("div",{className:Qe?"no-display":"button-text"},$e?r.a.createElement(Q.a,{size:"18"}):r.a.createElement(Y,{size:"18"}),r.a.createElement("label",{onClick:function(){return da(!0)},style:{fontSize:"14px",fontWeight:"600",position:"relative",top:"3px",cursor:"pointer"}},$e?"Update Info":"Add Info")))),r.a.createElement(s.a,{className:"d-flex justify-content-end flex-wrap",md:"8"},r.a.createElement(I.a.Ripple,{color:"flat-warning",style:{width:"max-content"}},"Reset"),r.a.createElement(I.a.Ripple,{className:"",color:"primary",onClick:function(e){!function(e){e.preventDefault(),o("Saving ..."),ye.dob=u,ye.pwdtime=S,ye.theme=na,ye.secondarymobile=f,ye.secondaryemail=w,ye.language=x,ye.salutation=Ae,ye.name=Ne+" "+Me+" "+ze,ye.mobile=qe;var a={address1:Z,address2:re,postalCode:q,city:se,state:ve,country:he};ye.address=a,localStorage.setItem("logInUserData",JSON.stringify(ye)),localStorage.setItem("theme",na),te.a.post("/backendapi/adddetails",{_id:ye._id,user:ye},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){o("Save Changes"),window.location.reload()})).catch()}(e)},style:{width:"max-content"}},c))))))},je=t(562),xe=t(70),Ne=t(523),ke=t.n(Ne),Ce=(t(511),{rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}}),Se=function(){var e=[{title:"title",selector:"title",sortable:!1},{name:"check",sortable:!1,width:"50px",cell:function(e){return r.a.createElement("div",{className:"data-list-action"},r.a.createElement(V.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){i(e)}}))}}],a=Object(l.useState)([]),t=Object(n.a)(a,2),c=t[0],o=t[1];Object(l.useEffect)((function(){var e=[],a={title:"test title 1",status:0,id:"testid",description:"THis is test description",createdOn:new Date};e.push(a);var t={title:"test title 1",status:0,id:"testid",description:"THis is test description",createdOn:new Date};e.push(t);var n={title:"test title 1",status:0,id:"testid",description:"THis is test description",createdOn:new Date};e.push(n),o(e)}),[]);var i=function(e){if(null!==e.id){var a=Object(xe.a)(c),t=a.findIndex((function(a){return a.key===e.id}));a.splice(t,1),o(a)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{title:"Updates",width:"200",columns:e,data:c,noTableHead:!0,selectableRows:!1,responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(e){return null},customStyles:Ce}))},Me=[{value:"Query",label:"Query",color:"#00B8D9",isFixed:!0},{value:"Complain",label:"Complain",color:"#00B8D9",isFixed:!0},{value:"Feedback",label:"Feedback",color:"#00B8D9",isFixed:!0}],Re=JSON.parse(localStorage.getItem("logInUserData")),Te=function(e){var a=Object(l.useState)("Save"),t=Object(n.a)(a,2),c=t[0],o=t[1],d=Object(l.useState)(""),m=Object(n.a)(d,2),u=m[0],v=m[1],p=Object(l.useState)(""),b=Object(n.a)(p,2),f=b[0],h=b[1],E=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{xs:"1"},r.a.createElement(z.a,{for:"optionSelect"},"Select a topic *:"),r.a.createElement(ee.a,{id:"optionSelect",className:"React mt-50",classNamePrefix:"select",ref:E,name:"color",options:Me,isClearable:!0,placeholder:"Select a topic...",onChange:function(e){return v(e?e.value:"")}})),r.a.createElement(i.a,null,r.a.createElement(z.a,{for:"description",className:"mt-2"},"Description *"),r.a.createElement(D.a,{className:"mt-50",type:"textarea",placeholder:"Description",rows:"5",id:"description",onChange:function(e){return h(e.target.value)}})),r.a.createElement(i.a,null,r.a.createElement(z.a,{for:"attachment",className:"mt-2"},"Attachments"),r.a.createElement(D.a,{className:"mt-50",type:"File",placeholder:"Attachments",rows:"5",id:"attachment"})),r.a.createElement(s.a,{className:"d-flex justify-content-end flex-wrap mt-2",sm:"12"},r.a.createElement(I.a.Ripple,{color:"warning",disabled:!(f.length&&u.length),className:"button-label",onClick:function(e){return function(e){e.preventDefault(),o("Saving ..."),localStorage.setItem("logInUserData",JSON.stringify(Re)),te.a.post("/backendapi/adddetails",Re,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){window.location.reload()})).catch()}(e)}},c)))};t(625),a.default=function(e){var a=Object(l.useState)("1"),t=Object(n.a)(a,2),u=t[0],v=t[1],p=Object(l.useState)(!0),b=Object(n.a)(p,2),f=b[0],h=b[1],E=Object(l.useState)(!0),w=Object(n.a)(E,2),y=w[0],O=w[1],R=Object(l.useState)(!0),T=Object(n.a)(R,2),P=T[0],z=T[1],D=Object(l.useState)(!0),F=Object(n.a)(D,2),I=F[0],L=F[1],U=e.location.pathname,H=window.screen.width,_=function(e){v(e)};return Object(l.useEffect)((function(){"/user/Upgrade"===U?(v("4"),H<500&&(h(!0),O(!1),z(!1),L(!1))):"/user/feed"===U?(v("5"),H<500&&(h(!1),O(!0),z(!1),L(!1))):"/user/notify"===U?(v("6"),H<500&&(h(!1),O(!1),z(!0),L(!1))):"/user/profile"===U&&(v("2"),H<500&&(h(!1),O(!1),z(!1),L(!0)))}),[H]),r.a.createElement(c.a,{style:{maxHeight:"calc(100vh - 130px)",marginBottom:"0px"}},r.a.createElement(o.a,{className:"pt-2"},r.a.createElement(i.a,null,r.a.createElement(s.a,{sm:"12",className:"d-flex justify-content-start flex-wrap"},r.a.createElement(o.a,{style:{padding:"0px"}},r.a.createElement(d.a,{tabs:!0},I&&r.a.createElement(m.a,{className:"mr-5"},r.a.createElement(j,{className:g()({active:"2"===u}),onClick:function(){_("2")}},r.a.createElement(k.a,{size:16}),r.a.createElement("span",{className:"align-middle ml-50"},"Information"))),f&&r.a.createElement(m.a,{className:"mr-5"},r.a.createElement(j,{className:g()({active:"4"===u}),onClick:function(){_("4")}},r.a.createElement(C.a,{size:16}),r.a.createElement("span",{className:"align-middle ml-50"},"Subscription"))),y&&r.a.createElement(m.a,{className:"mr-5"},r.a.createElement(j,{className:g()({active:"5"===u}),onClick:function(){_("5")}},r.a.createElement(S.a,{size:16}),r.a.createElement("span",{className:"align-middle ml-50"},"Contact Us"))),P&&r.a.createElement(m.a,{className:"mr-5"},r.a.createElement(j,{className:g()({active:"6"===u}),onClick:function(){_("6")}},r.a.createElement(M.a,{size:16}),r.a.createElement("span",{className:"align-middle ml-50"},"Notifications")))),r.a.createElement(x.a,{activeTab:u},r.a.createElement(N.a,{className:"card_body",tabId:"2",style:{maxHeight:window.screen.width<=500?"calc(100vh - 270px)":"calc(100vh - 210px)",minHeight:window.screen.width<=500?"calc(100vh - 270px)":"calc(100vh - 210px)",overflowY:"overlay"}},r.a.createElement(Oe,null)),r.a.createElement(N.a,{className:"card_body",tabId:"4",style:{maxHeight:window.screen.width<=500?"calc(100vh - 270px)":"calc(100vh - 210px)",minHeight:window.screen.width<=500?"calc(100vh - 270px)":"calc(100vh - 210px)",overflowY:"overlay"}},r.a.createElement(je.default,null)),r.a.createElement(N.a,{className:"card_body",tabId:"5",style:{maxHeight:window.screen.width<=500?"calc(100vh - 270px)":"calc(100vh - 210px)",minHeight:window.screen.width<=500?"calc(100vh - 270px)":"calc(100vh - 210px)",overflowY:"overlay"}},r.a.createElement(Te,null)),r.a.createElement(N.a,{className:"",tabId:"6",style:{maxHeight:window.screen.width<=500?"calc(100vh - 270px)":"calc(100vh - 210px)",minHeight:window.screen.width<=500?"calc(100vh - 270px)":"calc(100vh - 210px)",overflowY:"overlay"}},r.a.createElement(Se,null))))))))}}}]);