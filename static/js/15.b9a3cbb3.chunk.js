(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[15],{473:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=a.n(n).a.createContext({})},476:function(e,t,a){e.exports=a.p+"static/media/banner-25.a47593fc.jpg"},479:function(e,t,a){"use strict";a.d(t,"f",(function(){return m})),a.d(t,"g",(function(){return p})),a.d(t,"e",(function(){return b})),a.d(t,"d",(function(){return f})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return v})),a.d(t,"a",(function(){return h})),a.d(t,"h",(function(){return E}));var n=a(36),r=a.n(n),o=a(55),c=a(486),i=a(31),l=a.n(i),s=a(471),u=a(32);l.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var d=function(e){var t,a=Object(c.a)(null===e||void 0===e?void 0:e.data);try{for(a.s();!(t=a.n()).done;){var n=t.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(u.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(u.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(u.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(u.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(u.a)(null===n||void 0===n?void 0:n.desc))}}catch(r){a.e(r)}finally{a.f()}return e},m=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t.next=3,l.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"GET_ALL_DATA_LOADING",data:!1});var n,r=Object(c.a)(null===t||void 0===t?void 0:t.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.nomineeId=(null===o||void 0===o?void 0:o.nomineeId)&&Object(u.a)(o.nomineeId,!0),o.name=(null===o||void 0===o?void 0:o.name)&&Object(u.a)(o.name,!0),o.relation=(null===o||void 0===o?void 0:o.relation)&&Object(u.a)(o.relation,!0),o.email=(null===o||void 0===o?void 0:o.email)&&Object(u.a)(o.email,!0),o.primaryContact=(null===o||void 0===o?void 0:o.primaryContact)&&Object(u.a)(o.primaryContact,!0),o.secondaryContact=(null===o||void 0===o?void 0:o.secondaryContact)&&Object(u.a)(o.secondaryContact,!0),o.address=(null===o||void 0===o?void 0:o.address)&&Object(u.a)(o.address,!0)}}catch(i){r.e(i)}finally{r.f()}a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_SPEND_DATA_LOADING",data:!0}),t.next=4,l.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){var n;console.log("getSpendData"),a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===(n=d(t))||void 0===n?void 0:n.data,totalPages:t.length,params:e})})).catch((function(e){console.log(e),a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(t){return t({type:"FILTER_SPEND_DATA",value:e})}},f=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},g=function(e){return function(t){console.log("DELETE DATA :"),l.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},v=function(e){return function(t){console.log("DELETE DATA :"),l.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},h=function(e){var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(u.b)(e.name,!0),relation:Object(u.b)(e.relation,!0),email:Object(u.b)(e.email,!0),primaryContact:Object(u.b)(e.contact1,!0),secondaryContact:Object(u.b)(e.contact2,!0),address:Object(u.b)(e.address,!0),usage:"Unused"};return"others"===e.relation&&e.relation1&&(t.relation=Object(u.b)(e.relation1,!0)),function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Added Successfully"),a(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a={_id:e._id,usage:e.usage?e.usage:"Unused",userId:t._id,name:Object(u.b)(e.name,!0),relation:Object(u.b)(e.relation,!0),email:Object(u.b)(e.email,!0),primaryContact:Object(u.b)(e.contact1,!0),secondaryContact:Object(u.b)(e.contact2,!0),address:Object(u.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(u.b)(e.relation1,!0)),function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/backendapi/nominee/update",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){s.b.success("Nominee Updated Successfully"),t(m())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},481:function(e,t,a){e.exports=a.p+"static/media/banner-31.d54fc4be.jpg"},482:function(e,t,a){e.exports=a.p+"static/media/banner-22.702fed4d.jpg"},483:function(e,t,a){e.exports=a.p+"static/media/banner-23.b74d240c.jpg"},484:function(e,t,a){e.exports=a.p+"static/media/banner-24.d3fb51a8.jpg"},485:function(e,t,a){"use strict";var n=a(6),r=a(9),o=a(0),c=a.n(o),i=a(1),l=a.n(i),s=a(5),u=a.n(s),d=a(2),m={tag:d.o,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.body,l=e.inverse,s=e.outline,m=e.tag,p=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.k)(u()(t,"card",!!l&&"text-white",!!i&&"card-body",!!o&&(s?"border":"bg")+"-"+o),a);return c.a.createElement(m,Object(n.a)({},b,{className:f,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},486:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(85);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}},490:function(e,t,a){"use strict";var n=a(6),r=a(9),o=a(0),c=a.n(o),i=a(1),l=a.n(i),s=a(5),u=a.n(s),d=a(2),m={tag:d.o,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.k)(u()(t,"card-header"),a);return c.a.createElement(o,Object(n.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},491:function(e,t,a){"use strict";var n=a(6),r=a(9),o=a(0),c=a.n(o),i=a(1),l=a.n(i),s=a(5),u=a.n(s),d=a(2),m={tag:d.o,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.k)(u()(t,"card-title"),a);return c.a.createElement(o,Object(n.a)({},i,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},493:function(e,t,a){"use strict";var n=a(6),r=a(14),o=a(0),c=a.n(o),i=a(1),l=a.n(i),s=a(5),u=a.n(s),d=a(473),m=a(2),p={tag:m.o,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.tag,o=Object(m.l)(this.props,Object.keys(p)),i=Object(m.k)(u()("tab-content",t),a);return c.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(r,Object(n.a)({},o,{className:i})))},t}(o.Component);t.a=b,b.propTypes=p,b.defaultProps={tag:"div"}},494:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(6),r=a(9),o=a(0),c=a.n(o),i=a(1),l=a.n(i),s=a(5),u=a.n(s),d=a(473),m=a(2),p={tag:m.o,className:l.a.string,cssModule:l.a.object,tabId:l.a.any};function b(e){var t=e.className,a=e.cssModule,o=e.tabId,i=e.tag,l=Object(r.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return Object(m.k)(u()("tab-pane",t,{active:o===e}),a)};return c.a.createElement(d.a.Consumer,null,(function(e){var t=e.activeTabId;return c.a.createElement(i,Object(n.a)({},l,{className:s(t)}))}))}b.propTypes=p,b.defaultProps={tag:"div"}},500:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),c=a.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,c=void 0===o?24:o,s=l(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("polyline",{points:"3 6 5 6 21 6"}),r.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Trash",t.a=s},511:function(e,t,a){"use strict";var n=a(7),r=a(0),o=a.n(r),c=a(485),i=a(490),l=a(491),s=a(540),u=a(418),d=a(493),m=a(494),p=a(5),b=a.n(p),f=a(467);t.a=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),p=a[0],g=a[1],v=Object(r.useState)("Closed"),h=Object(n.a)(v,2),E=h[0],O=h[1],y=e.collapseItems,j=e.colorOption,N=y.length>0?y.map((function(e){return o.a.createElement("div",{className:"collapse-margin",key:e.id},o.a.createElement(c.a,{onClick:function(){return t=e.id,void g(p!==t?t:"");var t},className:b()({"collapse-collapsed":"Closed"===E&&p===e.id,"collapse-shown":"Opened"===E&&p===e.id,closing:"Closing..."===E&&p===e.id,opening:"Opening..."===E&&p===e.id})},o.a.createElement(i.a,null,o.a.createElement(l.a,{className:"lead collapse-title collapsed"},(t=e.title,(null===j||void 0===j?void 0:j[t])?j[t]:t)),o.a.createElement(f.a,{size:15,className:"collapse-icon"})),o.a.createElement(s.a,{isOpen:e.id===p,onEntering:function(){e.id===p&&O("Opening...")},onEntered:function(){e.id===p&&O("Opened")},onExiting:function(){e.id===p&&O("Closing...")},onExited:function(){e.id===p&&O("Closed")}},o.a.createElement(u.a,null,e.content))));var t})):o.a.createElement("span",{style:{fontSize:"12px",marginTop:"-10px"}},"No Asset Found");return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{style:{paddingBottom:"1.5rem",paddingRight:"0.5rem",marginBottom:"portfolio"===e.page?"2.2rem":"1rem"}},o.a.createElement(i.a,null,o.a.createElement(l.a,null,e.heading)),o.a.createElement(u.a,{className:"card_body",style:{maxHeight:"portfolio"===e.page?"260px":" calc(100vh - 435px)"}},o.a.createElement(d.a,{activeTab:"1"},o.a.createElement(m.a,{tabId:"1"},o.a.createElement("div",{className:"vx-collapse"},N)),o.a.createElement(m.a,{className:"component-code",tabId:"2"},"hey")))))}},540:function(e,t,a){"use strict";var n,r=a(6),o=a(9),c=a(13),i=a(14),l=a(38),s=a(0),u=a.n(s),d=a(1),m=a.n(d),p=a(5),b=a.n(p),f=a(86),g=a(2);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=h(h({},f.Transition.propTypes),{},{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:g.o,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),O=h(h({},f.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.c.Collapse}),y=((n={})[g.b.ENTERING]="collapsing",n[g.b.ENTERED]="collapse show",n[g.b.EXITING]="collapsing",n[g.b.EXITED]="collapse",n);function j(e){return e.scrollHeight}var N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(c.a)(a))})),a}Object(i.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:j(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:j(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,c=t.className,i=t.navbar,l=t.cssModule,s=t.children,d=(t.innerRef,Object(o.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),m=this.state.height,p=Object(g.m)(d,g.a),v=Object(g.l)(d,g.a);return u.a.createElement(f.Transition,Object(r.a)({},p,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return y[e]||"collapse"}(t),o=Object(g.k)(b()(c,n,i&&"navbar-collapse"),l),d=null===m?null:{height:m};return u.a.createElement(a,Object(r.a)({},v,{style:h(h({},v.style),d),className:o,ref:e.props.innerRef}),s)}))},t}(s.Component);N.propTypes=E,N.defaultProps=O,t.a=N},582:function(e,t,a){"use strict";var n=a(6),r=a(9),o=a(0),c=a.n(o),i=a(1),l=a.n(i),s=a(5),u=a.n(s),d=a(2),m={children:l.a.node,inline:l.a.bool,tag:d.o,color:l.a.string,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.inline,i=e.color,l=e.tag,s=Object(r.a)(e,["className","cssModule","inline","color","tag"]),m=Object(d.k)(u()(t,!o&&"form-text",!!i&&"text-"+i),a);return c.a.createElement(l,Object(n.a)({},s,{className:m}))};p.propTypes=m,p.defaultProps={tag:"small",color:"muted"},t.a=p},654:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(0),o=a.n(r),c=a(511),i=a(496),l=a(497),s=a(582),u=a(447),d=a(500),m=(a(141),a(142),a(481)),p=a.n(m),b=a(482),f=a.n(b),g=a(483),v=a.n(g),h=a(484),E=a.n(h),O=a(476),y=a.n(O),j=a(488),N=a.n(j),I=a(479),T=a(18),S={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}};t.default=Object(T.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),{getData:I.f})((function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),m=a[0],b=a[1],g=Object(r.useState)(!1),h=Object(n.a)(g,2),O=h[0],j=h[1],I=Object(r.useState)([]),T=Object(n.a)(I,2),w=T[0],k=T[1],x=Object(r.useState)([]),D=Object(n.a)(x,2),A=D[0],P=D[1];Object(r.useEffect)((function(){e.getData()}),[]),Object(r.useEffect)((function(){C()}),[e.dataList]);var C=function(){var e,t,a=JSON.parse(localStorage.getItem("logInUserData"));w.splice(0,w.length),A.splice(0,A.length),(null===a||void 0===a||null===(e=a.assets)||void 0===e?void 0:e.length)&&a.assets.forEach((function(e,t){var a,n,r="";(null===e||void 0===e||null===(a=e.nominees)||void 0===a?void 0:a.length)&&e.nominees.forEach((function(t,a){a===e.nominees.length-1?r+=t.name:r=r+t.name+", "}));var c=o.a.createElement("div",null,o.a.createElement(i.a,null,null===e||void 0===e||null===(n=e.assetDetails)||void 0===n?void 0:n.map((function(e,t){return""!==e.val?o.a.createElement(l.a,{md:"5",sm:"12",key:t+e.key},o.a.createElement(s.a,null,o.a.createElement("b",null,e.key," :")," ",m?e.val:"***********")):""})),o.a.createElement(l.a,{md:"5",sm:"12"},o.a.createElement(s.a,null,o.a.createElement("b",null,"Nominees :")," ",m?r:"*******************")),o.a.createElement(l.a,{md:"2",sm:"12"},o.a.createElement(s.a,null,o.a.createElement("b",null," ",o.a.createElement(u.a,{className:"cursor-pointer mr-1",size:window.screen.width<600?13:20,onClick:function(){console.log("event",e)}})),o.a.createElement("br",null),o.a.createElement("b",null,o.a.createElement(d.a,{className:"cursor-pointer",size:window.screen.width<600?13:20,onClick:function(){console.log("event",e)}})))))),p={id:t+1,title:e.assetType,content:c};w.push(p)})),(null===a||void 0===a||null===(t=a.liabilities)||void 0===t?void 0:t.length)&&a.liabilities.forEach((function(e,t){var a="";e.nominees.forEach((function(t,n){n===e.nominees.length-1?a+=t.name:a=a+t.name+", "}));var n=o.a.createElement("div",null,o.a.createElement(i.a,null,e.liabilityDetails.map((function(e,t){return""!==e.val?o.a.createElement(l.a,{md:"6",sm:"12",key:t+e.key},o.a.createElement(s.a,null,o.a.createElement("b",null,e.key," :")," ",O?e.val:"***********")):""})),o.a.createElement(l.a,{md:"6",sm:"12"},o.a.createElement(s.a,null,o.a.createElement("b",null,"Nominees :")," ",O?a:"*******************")),o.a.createElement(l.a,{md:"6",sm:"12"},o.a.createElement(s.a,null,o.a.createElement("b",null,"Nominees :")," ",m?a:"*******************"),o.a.createElement(l.a,{md:"2",sm:"12"},o.a.createElement(s.a,null,o.a.createElement("b",null," ",o.a.createElement(u.a,{className:"cursor-pointer mr-1",size:window.screen.width<600?13:20,onClick:function(){console.log("event",e)}})),o.a.createElement("br",null),o.a.createElement("b",null,o.a.createElement(d.a,{className:"cursor-pointer",size:window.screen.width<600?13:20,onClick:function(){console.log("event",e)}}))))))),r={id:t+1,title:e.liabilityType,content:n};A.push(r)})),k(null===w||void 0===w?void 0:w.reverse()),P(null===A||void 0===A?void 0:A.reverse())};return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"warning spacing nodisplay"},"Portfolio"),o.a.createElement(i.a,null,o.a.createElement(l.a,{lg:"8",md:"6",sm:"12"},o.a.createElement(i.a,{className:"match-height"},o.a.createElement(l.a,{md:"12"},o.a.createElement(c.a,{heading:"Assets List",collapseItems:w,show:function(){b(!m),C()},assetShow:m,page:"portfolio"}))),o.a.createElement(i.a,{className:"match-height"},o.a.createElement(l.a,{md:"12"},o.a.createElement(c.a,{heading:"Liabilities List",collapseItems:A,show:function(){j(!O),C()},assetShow:O,page:"portfolio"})))),o.a.createElement(l.a,{lg:"4",md:"6",sm:"12"},o.a.createElement("div",{className:"swipermobile"},o.a.createElement(N.a,S,o.a.createElement("div",{style:{backgroundImage:"url(".concat(p.a,")"),backgroundSize:"contain"}}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(f.a,")"),backgroundSize:"contain"}}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(v.a,")"),backgroundSize:"contain"}}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(E.a,")"),backgroundSize:"contain"}}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(y.a,")"),backgroundSize:"contain"}}))))))}))}}]);
//# sourceMappingURL=15.b9a3cbb3.chunk.js.map