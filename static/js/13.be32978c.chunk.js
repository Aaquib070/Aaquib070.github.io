(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[13],{473:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),l=t.n(n).a.createContext({})},474:function(e,a,t){},475:function(e,a,t){e.exports=t.p+"static/media/banner-25.a47593fc.jpg"},477:function(e,a,t){},478:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(495),o=(t(142),t(143),t(479)),r=t.n(o),c=t(480),s=t.n(c),u=t(481),d=t.n(u),m=t(482),b=t.n(m),p=t(475),v=t.n(p),g=t(487),f=t.n(g),y={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}};a.a=function(e){return l.a.createElement(i.a,{lg:"4",md:"6",sm:"12"},l.a.createElement("div",{className:"swipermobile"},l.a.createElement(f.a,y,l.a.createElement("div",{style:{backgroundImage:"url(".concat(r.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(s.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(d.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(b.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{style:{backgroundImage:"url(".concat(v.a,")"),backgroundSize:"contain"}}))))}},479:function(e,a,t){e.exports=t.p+"static/media/banner-31.d54fc4be.jpg"},480:function(e,a,t){e.exports=t.p+"static/media/banner-22.702fed4d.jpg"},481:function(e,a,t){e.exports=t.p+"static/media/banner-23.b74d240c.jpg"},482:function(e,a,t){e.exports=t.p+"static/media/banner-24.d3fb51a8.jpg"},483:function(e,a,t){"use strict";var n=t(6),l=t(9),i=t(0),o=t.n(i),r=t(1),c=t.n(r),s=t(5),u=t.n(s),d=t(2),m={tag:d.o,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,i=e.color,r=e.body,c=e.inverse,s=e.outline,m=e.tag,b=e.innerRef,p=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),v=Object(d.k)(u()(a,"card",!!c&&"text-white",!!r&&"card-body",!!i&&(s?"border":"bg")+"-"+i),t);return o.a.createElement(m,Object(n.a)({},p,{className:v,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},490:function(e,a,t){"use strict";var n=t(6),l=t(9),i=t(0),o=t.n(i),r=t(1),c=t.n(r),s=t(5),u=t.n(s),d=t(2),m={tag:d.o,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,i=e.tag,r=Object(l.a)(e,["className","cssModule","tag"]),c=Object(d.k)(u()(a,"card-header"),t);return o.a.createElement(i,Object(n.a)({},r,{className:c}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},491:function(e,a,t){"use strict";var n=t(6),l=t(9),i=t(0),o=t.n(i),r=t(1),c=t.n(r),s=t(5),u=t.n(s),d=t(2),m={tag:d.o,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,i=e.tag,r=Object(l.a)(e,["className","cssModule","tag"]),c=Object(d.k)(u()(a,"card-title"),t);return o.a.createElement(i,Object(n.a)({},r,{className:c}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},497:function(e,a,t){"use strict";var n=t(6),l=t(14),i=t(0),o=t.n(i),r=t(1),c=t.n(r),s=t(5),u=t.n(s),d=t(473),m=t(2),b={tag:m.o,activeTab:c.a.any,className:c.a.string,cssModule:c.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,i=Object(m.l)(this.props,Object.keys(b)),r=Object(m.k)(u()("tab-content",a),t);return o.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},o.a.createElement(l,Object(n.a)({},i,{className:r})))},a}(i.Component);a.a=p,p.propTypes=b,p.defaultProps={tag:"div"}},498:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(6),l=t(9),i=t(0),o=t.n(i),r=t(1),c=t.n(r),s=t(5),u=t.n(s),d=t(473),m=t(2),b={tag:m.o,className:c.a.string,cssModule:c.a.object,tabId:c.a.any};function p(e){var a=e.className,t=e.cssModule,i=e.tabId,r=e.tag,c=Object(l.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return Object(m.k)(u()("tab-pane",a,{active:i===e}),t)};return o.a.createElement(d.a.Consumer,null,(function(e){var a=e.activeTabId;return o.a.createElement(r,Object(n.a)({},c,{className:s(a)}))}))}p.propTypes=b,p.defaultProps={tag:"div"}},513:function(e,a){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var l=new Array(16);e.exports=function(){for(var e,a=0;a<16;a++)0===(3&a)&&(e=4294967296*Math.random()),l[a]=e>>>((3&a)<<3)&255;return l}}},514:function(e,a){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,a){var n=a||0,l=t;return[l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]]].join("")}},544:function(e,a,t){"use strict";var n,l=t(6),i=t(9),o=t(13),r=t(14),c=t(38),s=t(0),u=t.n(s),d=t(1),m=t.n(d),b=t(5),p=t.n(b),v=t(86),g=t(2);function f(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?f(Object(t),!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var E=y(y({},v.Transition.propTypes),{},{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:g.o,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),h=y(y({},v.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.c.Collapse}),O=((n={})[g.b.ENTERING]="collapsing",n[g.b.ENTERED]="collapse show",n[g.b.EXITING]="collapsing",n[g.b.EXITED]="collapse",n);function j(e){return e.scrollHeight}var N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind(Object(o.a)(t))})),t}Object(r.a)(a,e);var t=a.prototype;return t.onEntering=function(e,a){this.setState({height:j(e)}),this.props.onEntering(e,a)},t.onEntered=function(e,a){this.setState({height:null}),this.props.onEntered(e,a)},t.onExit=function(e){this.setState({height:j(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,a=this.props,t=a.tag,n=a.isOpen,o=a.className,r=a.navbar,c=a.cssModule,s=a.children,d=(a.innerRef,Object(i.a)(a,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),m=this.state.height,b=Object(g.m)(d,g.a),f=Object(g.l)(d,g.a);return u.a.createElement(v.Transition,Object(l.a)({},b,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(a){var n=function(e){return O[e]||"collapse"}(a),i=Object(g.k)(p()(o,n,r&&"navbar-collapse"),c),d=null===m?null:{height:m};return u.a.createElement(t,Object(l.a)({},f,{style:y(y({},f.style),d),className:i,ref:e.props.innerRef}),s)}))},a}(s.Component);N.propTypes=E,N.defaultProps=h,a.a=N},577:function(e,a,t){var n=t(578),l=t(579),i=l;i.v1=n,i.v4=l,e.exports=i},578:function(e,a,t){var n,l,i=t(513),o=t(514),r=0,c=0;e.exports=function(e,a,t){var s=a&&t||0,u=a||[],d=(e=e||{}).node||n,m=void 0!==e.clockseq?e.clockseq:l;if(null==d||null==m){var b=i();null==d&&(d=n=[1|b[0],b[1],b[2],b[3],b[4],b[5]]),null==m&&(m=l=16383&(b[6]<<8|b[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,g=p-r+(v-c)/1e4;if(g<0&&void 0===e.clockseq&&(m=m+1&16383),(g<0||p>r)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");r=p,c=v,l=m;var f=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;u[s++]=f>>>24&255,u[s++]=f>>>16&255,u[s++]=f>>>8&255,u[s++]=255&f;var y=p/4294967296*1e4&268435455;u[s++]=y>>>8&255,u[s++]=255&y,u[s++]=y>>>24&15|16,u[s++]=y>>>16&255,u[s++]=m>>>8|128,u[s++]=255&m;for(var E=0;E<6;++E)u[s+E]=d[E];return a||o(u)}},579:function(e,a,t){var n=t(513),l=t(514);e.exports=function(e,a,t){var i=a&&t||0;"string"==typeof e&&(a="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,a)for(var r=0;r<16;++r)a[i+r]=o[r];return a||l(o)}},580:function(e,a,t){"use strict";var n=t(7),l=t(0),i=t.n(l),o=t(483),r=t(490),c=t(491),s=t(544),u=t(418),d=t(497),m=t(498),b=t(5),p=t.n(b),v=t(467);a.a=function(e){var a=Object(l.useState)(""),t=Object(n.a)(a,2),b=t[0],g=t[1],f=Object(l.useState)("Closed"),y=Object(n.a)(f,2),E=y[0],h=y[1],O=e.collapseItems,j=e.colorOption,N=O.length>0?O.map((function(e){return i.a.createElement("div",{className:"collapse-margin",key:e.id},i.a.createElement(o.a,{onClick:function(){return a=e.id,void g(b!==a?a:"");var a},className:p()({"collapse-collapsed":"Closed"===E&&b===e.id,"collapse-shown":"Opened"===E&&b===e.id,closing:"Closing..."===E&&b===e.id,opening:"Opening..."===E&&b===e.id})},i.a.createElement(r.a,null,i.a.createElement(c.a,{className:"lead collapse-title collapsed"},(a=e.title,(null===j||void 0===j?void 0:j[a])?j[a]:a)),i.a.createElement(v.a,{size:15,className:"collapse-icon"})),i.a.createElement(s.a,{isOpen:e.id===b,onEntering:function(){e.id===b&&h("Opening...")},onEntered:function(){e.id===b&&h("Opened")},onExiting:function(){e.id===b&&h("Closing...")},onExited:function(){e.id===b&&h("Closed")}},i.a.createElement(u.a,null,e.content))));var a})):i.a.createElement("span",{style:{fontSize:"12px",marginTop:"-10px"}},"No Asset Found");return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{style:{paddingBottom:"1.5rem",paddingRight:"0.5rem",marginBottom:"portfolio"===e.page?"2.2rem":"1rem"}},i.a.createElement(r.a,null,i.a.createElement(c.a,null,e.heading)),i.a.createElement(u.a,{className:"card_body",style:{maxHeight:"portfolio"===e.page?"260px":" calc(100vh - 435px)"}},i.a.createElement(d.a,{activeTab:"1"},i.a.createElement(m.a,{tabId:"1"},i.a.createElement("div",{className:"vx-collapse"},N)),i.a.createElement(m.a,{className:"component-code",tabId:"2"},"hey")))))}},587:function(e,a,t){"use strict";var n=t(6),l=t(9),i=t(0),o=t.n(i),r=t(1),c=t.n(r),s=t(5),u=t.n(s),d=t(2),m={tag:d.o,wrapTag:d.o,toggle:c.a.func,className:c.a.string,cssModule:c.a.object,children:c.a.node,closeAriaLabel:c.a.string,charCode:c.a.oneOfType([c.a.string,c.a.number]),close:c.a.object},b=function(e){var a,t=e.className,i=e.cssModule,r=e.children,c=e.toggle,s=e.tag,m=e.wrapTag,b=e.closeAriaLabel,p=e.charCode,v=e.close,g=Object(l.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(d.k)(u()(t,"modal-header"),i);if(!v&&c){var y="number"===typeof p?String.fromCharCode(p):p;a=o.a.createElement("button",{type:"button",onClick:c,className:Object(d.k)("close",i),"aria-label":b},o.a.createElement("span",{"aria-hidden":"true"},y))}return o.a.createElement(m,Object(n.a)({},g,{className:f}),o.a.createElement(s,{className:Object(d.k)("modal-title",i)},r),v||a)};b.propTypes=m,b.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},a.a=b},590:function(e,a,t){"use strict";var n=t(6),l=t(9),i=t(0),o=t.n(i),r=t(1),c=t.n(r),s=t(5),u=t.n(s),d=t(2),m={children:c.a.node,inline:c.a.bool,tag:d.o,color:c.a.string,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,i=e.inline,r=e.color,c=e.tag,s=Object(l.a)(e,["className","cssModule","inline","color","tag"]),m=Object(d.k)(u()(a,!i&&"form-text",!!r&&"text-"+r),t);return o.a.createElement(c,Object(n.a)({},s,{className:m}))};b.propTypes=m,b.defaultProps={tag:"small",color:"muted"},a.a=b},627:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(1),o=t.n(i);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,o=void 0===i?24:i,s=c(e,["color","size"]);return l.a.createElement("svg",r({ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),l.a.createElement("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),l.a.createElement("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),l.a.createElement("line",{x1:"12",y1:"9",x2:"18",y2:"15"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="Delete",a.a=s},672:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(18),o=t(494),r=t(495),c=t(497),s=t(498),u=t(36),d=t.n(u),m=t(55),b=t(7),p=t(577),v=t(34),g=t(590),f=t(483),y=t(490),E=t(491),h=t(418),O=t(419),j=t(420),N=t(422),x=t(421),k=t(230),C=t(469),w=t(587),S=t(426),T=t(650),I=t(5),D=t.n(I),L=t(478),A=t(493),P=t(580),F={Custom:[{key:"Liability Name",val:"",type:"Text"}],"Credit Card":[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Card Limit",val:"",type:"Number"}],Insurance:[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Policy Number *",val:"",type:"Number",mandatory:!0},{key:"Policy Amount *",val:"",type:"Number",mandatory:!0}],"Loan Amount":[{key:"Bank Name *",val:"",type:"Text",mandatory:!0},{key:"Loan Account Number *",val:"",type:"Number",mandatory:!0},{key:"Loan Amount *",val:"",type:"Number",mandatory:!0}],Notes:[{key:"Notes *",val:"",type:"textarea",mandatory:!0},{key:"Expiry Date",val:"",type:"Date"}],Ponzi:[{key:"Description *",val:"",type:"Text",mandatory:!0},{key:"Return Period *",val:"",type:"Text",mandatory:!0},{key:"Amount *",val:"",type:"Number",mandatory:!0}],Receipt:[{key:"Object Name *",val:"",type:"Text",mandatory:!0},{key:"Description *",val:"",type:"Text",mandatory:!0},{key:"Expiry",val:"",type:"Date"}],Warranty:[{key:"Object Name *",val:"",type:"Text",mandatory:!0},{key:"Warranty Period *",val:"",type:"Text",mandatory:!0},{key:"Bill Amount *",val:"",type:"Number",mandatory:!0}]},M=t(28),R=t.n(M),B=t(471),z=(t(486),t(474),t(477),t(488)),J=t(485),V=t(15),U=t(447),_=t(518),H=t(627),W=(t(484),t(236),t(502)),q=t(489),G=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0},{value:"File",label:"File",color:"#0052CC",isFixed:!0}],X=Object(i.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),{getData:z.f,addData:z.a})((function(e){var a,t,i,u,I,M,z,X,K,Q,Y,Z,$,ee,ae,te,ne,le,ie,oe,re,ce,se,ue,de,me,be,pe,ve,ge,fe,ye,Ee,he,Oe=[{value:"Credit Card",label:(null===(a=e.messages)||void 0===a||null===(t=a.colorOption)||void 0===t?void 0:t["Credit Card"])?null===(i=e.messages)||void 0===i||null===(u=i.colorOption)||void 0===u?void 0:u["Credit Card"]:"Credit Card",color:"#0052CC",isFixed:!0},{value:"Insurance",label:(null===(I=e.messages)||void 0===I||null===(M=I.colorOption)||void 0===M?void 0:M.Insurance)?null===(z=e.messages)||void 0===z||null===(X=z.colorOption)||void 0===X?void 0:X.Insurance:"Insurance",color:"#0052CC",isFixed:!0},{value:"Loan Amount",label:(null===(K=e.messages)||void 0===K||null===(Q=K.colorOption)||void 0===Q?void 0:Q["Loan Amount"])?null===(Y=e.messages)||void 0===Y||null===(Z=Y.colorOption)||void 0===Z?void 0:Z["Loan Amount"]:"Loan Amount",color:"#00B8D9",isFixed:!0},{value:"Notes",label:(null===($=e.messages)||void 0===$||null===(ee=$.colorOption)||void 0===ee?void 0:ee.Notes)?null===(ae=e.messages)||void 0===ae||null===(te=ae.colorOption)||void 0===te?void 0:te.Notes:"Notes",color:"#0052CC",isFixed:!0},{value:"Ponzi",label:(null===(ne=e.messages)||void 0===ne||null===(le=ne.colorOption)||void 0===le?void 0:le.Ponzi)?null===(ie=e.messages)||void 0===ie||null===(oe=ie.colorOption)||void 0===oe?void 0:oe.Ponzi:"Ponzi",color:"#0052CC",isFixed:!0},{value:"Receipt",label:(null===(re=e.messages)||void 0===re||null===(ce=re.colorOption)||void 0===ce?void 0:ce.Receipt)?null===(se=e.messages)||void 0===se||null===(ue=se.colorOption)||void 0===ue?void 0:ue.Receipt:"Receipt",color:"#0052CC",isFixed:!0},{value:"Warranty",label:(null===(de=e.messages)||void 0===de||null===(me=de.colorOption)||void 0===me?void 0:me.Warranty)?null===(be=e.messages)||void 0===be||null===(pe=be.colorOption)||void 0===pe?void 0:pe.Warranty:"Warranty",color:"#0052CC",isFixed:!0},{value:"Custom",label:(null===(ve=e.messages)||void 0===ve||null===(ge=ve.colorOption)||void 0===ge?void 0:ge.Custom)?null===(fe=e.messages)||void 0===fe||null===(ye=fe.colorOption)||void 0===ye?void 0:ye.Custom:"Custom",color:"#0052CC",isFixed:!0}],je=(null===(Ee=e.messages)||void 0===Ee?void 0:Ee.liabilityOption)?null===(he=e.messages)||void 0===he?void 0:he.liabilityOption:JSON.parse(JSON.stringify(F)),Ne=l.a.createRef(),xe=l.a.createRef(),ke=l.a.createRef(),Ce=Object(n.useState)(!1),we=Object(b.a)(Ce,2),Se=we[0],Te=we[1],Ie=Object(n.useState)(!1),De=Object(b.a)(Ie,2),Le=De[0],Ae=De[1],Pe=Object(n.useState)(null),Fe=Object(b.a)(Pe,2),Me=Fe[0],Re=Fe[1],Be=Object(n.useState)(""),ze=Object(b.a)(Be,2),Je=ze[0],Ve=ze[1],Ue=Object(n.useState)(""),_e=Object(b.a)(Ue,2),He=_e[0],We=_e[1],qe=Object(n.useState)(!0),Ge=Object(b.a)(qe,2),Xe=Ge[0],Ke=Ge[1],Qe=Object(n.useState)([]),Ye=Object(b.a)(Qe,2),Ze=Ye[0],$e=Ye[1],ea=Object(n.useState)(""),aa=Object(b.a)(ea,2),ta=aa[0],na=aa[1],la=Object(n.useState)(!1),ia=Object(b.a)(la,2),oa=ia[0],ra=ia[1],ca=Object(n.useState)(!1),sa=Object(b.a)(ca,2),ua=sa[0],da=sa[1],ma=Object(n.useState)(null),ba=Object(b.a)(ma,2),pa=ba[0],va=ba[1],ga=Object(n.useState)(!1),fa=Object(b.a)(ga,2),ya=fa[0],Ea=fa[1],ha=Object(n.useState)([]),Oa=Object(b.a)(ha,2),ja=Oa[0],Na=Oa[1],xa=Object(n.useState)(!1),ka=Object(b.a)(xa,2),Ca=ka[0],wa=ka[1],Sa=Object(n.useState)([]),Ta=Object(b.a)(Sa,2),Ia=Ta[0],Da=Ta[1],La=Object(n.useState)(!1),Aa=Object(b.a)(La,2),Pa=Aa[0],Fa=Aa[1],Ma=Object(n.useState)(""),Ra=Object(b.a)(Ma,2),Ba=Ra[0],za=Ra[1],Ja=Object(n.useState)(!0),Va=Object(b.a)(Ja,2),Ua=Va[0],_a=Va[1],Ha=Object(n.useState)([{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}]),Wa=Object(b.a)(Ha,2),qa=Wa[0],Ga=Wa[1];Object(n.useEffect)((function(){if(e.dataList.data.length){var a=[{value:"Add Nominee",label:"Add Nominee",color:"#00B8D9",isFixed:!1}];e.dataList.data.forEach((function(e){var t={value:e._id,label:e.name+" - "+e.relation,color:"#00B8D9",isFixed:!1};a.push(t)})),Ga(a)}}),[e.dataList]),Object(n.useEffect)((function(){!e.listLoading&&e.getData(),Qa()}),[]);var Xa=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ra(e),!0===a&&(va(null),da(!0))},Ka=function(){var a=Object(m.a)(d.a.mark((function a(t){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return Ea(!0),a.prev=1,a.next=4,e.addData(t);case 4:Ea(!1),Xa(!1,!0),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),Ea(!1),B.b.error("Add Nominee Failed! Please contact admin");case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}(),Qa=function(){var e=JSON.parse(localStorage.getItem("logInUserData"));R.a.get("/backendapi/user/liabilities/"+e._id,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){var t,n=a?a.data:[];n.splice(0,n.length),(null===e||void 0===e||null===(t=e.liabilities)||void 0===t?void 0:t.length)&&e.liabilities.forEach((function(e,a){if(e.id){var t="";e.nominees.forEach((function(a,n){n===e.nominees.length-1?t+=a.name:t=t+a.name+", "}));var i=l.a.createElement("div",null,l.a.createElement(o.a,null,e.liabilityDetails.map((function(e,a){return""!==e.val?l.a.createElement(r.a,{md:"5",sm:"12",key:a+e.key},l.a.createElement(g.a,null,l.a.createElement("b",null,e.key," :")," ",Xe?e.val:"***********")):""})),l.a.createElement(r.a,{md:"5",sm:"12"},l.a.createElement(g.a,null,l.a.createElement("b",null,"Nominees :")," ",Xe?t:"*******************")),l.a.createElement(r.a,{md:"2",sm:"12"},l.a.createElement(g.a,null,l.a.createElement("b",null,l.a.createElement(U.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){at(e)}})),l.a.createElement("b",null,l.a.createElement(_.a,{className:"cursor-pointer",size:window.screen.width<500?13:20,onClick:function(){console.log("event",e),Re(e.id),Te(!0)}})))))),c={id:a+1,title:e.liabilityType,content:i};n.push(c)}})),$e(null===n||void 0===n?void 0:n.reverse())}))},Ya=function(){wa(!Ca)},Za=function(e,a){var t=Ia,n=t.findIndex((function(e){return e.key===a.key}));e.length<50&&(t[n].val=e,Da(t),function(){var e=!1;Ia.forEach((function(a){a.mandatory&&!a.val&&(e=!0)})),_a(e)}(),Ae(!Le))},$a=function(){Ne.current.select.clearValue(),xe.current.select.clearValue(),na(""),Da([]),Na([]),Pa&&_a(!0)},et=function(){Ve(""),We(""),ke.current&&ke.current.select.clearValue()},at=function(e){var a=e.liabilityDetails,t=e.liabilityType,n=e.nominees;na(t),Fa(!0),za(e.id),Da(a),Na(n)},tt=function(e){e?(document.getElementById("buttonLabel").classList.remove("no-display"),document.getElementById("buttonLabel").classList.add("button-text")):(document.getElementById("buttonLabel").classList.add("no-display"),document.getElementById("buttonLabel").classList.remove("button-text"))},nt=e.messages,lt=e.thumbView,it=e.getData,ot=e.parsedFilter;return l.a.createElement("div",{className:"data-list ".concat(lt?"thumb-view":"list-view")},l.a.createElement(A.a,{modalMessage:"Are you sure you want to delete this record?",handleConfirm:function(){!function(a){var t=JSON.parse(localStorage.getItem("logInUserData")),n=t.liabilities.findIndex((function(e){return e.id===a}));n>=0&&(t.liabilities.splice(n,1),R.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(v.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){e.getData(e.parsedFilter),Qa()})).catch(),localStorage.setItem("logInUserData",JSON.stringify(t)),B.b.warning("Liability deleted successfully!"),$a(),et(),_a(!0))}(Me),Te(!1)},isOpen:Se,closeModal:function(){return Te(!1)}}),l.a.createElement(W.a,{show:oa,data:pa,updateData:e.updateData,addData:Ka,isLoading:ya,handleSidebar:Xa,thumbView:lt,getData:it,dataParams:ot,addNew:ua}),l.a.createElement("div",{className:D()("data-list-overlay",{show:oa}),onClick:function(){return Xa(!1,!0)}}),l.a.createElement(o.a,null,l.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},l.a.createElement("div",{style:{width:window.screen.width<500?"100%":"150%"}},l.a.createElement(o.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(c.a,{activeTab:"1"},l.a.createElement(s.a,{tabId:"1"},l.a.createElement(o.a,null,l.a.createElement(B.a,null),l.a.createElement(r.a,{lg:"8",md:"6",sm:"12"},l.a.createElement(f.a,null,l.a.createElement(y.a,null,l.a.createElement(E.a,null,(null===nt||void 0===nt?void 0:nt.subHeading)?nt.subHeading:Pa?"Edit Liability Details":"Add New Liability")),l.a.createElement(h.a,null,l.a.createElement(O.a,null,l.a.createElement(o.a,null,l.a.createElement(r.a,{md:"6",sm:"12"},l.a.createElement(j.a,{className:"form-label-group"},l.a.createElement(J.a,{className:"React",classNamePrefix:"select",ref:Ne,name:"color",options:Oe,isClearable:!0,isDisabled:Pa,value:Oe.filter((function(e){return e.value===ta})),placeholder:(null===nt||void 0===nt?void 0:nt.liabilityOptionText)?null===nt||void 0===nt?void 0:nt.liabilityOptionText:"Select Liability Type...",onChange:function(e){!function(e){_a(!0),Ve(""),We(""),na(e?e.value:void 0),Da(e?je[e.value]:{})}(e)}}),l.a.createElement(N.a,{for:"nameMulti"},"Liability Type"))),l.a.createElement(r.a,{md:"6",sm:"12"},l.a.createElement(j.a,{className:"form-label-group"},l.a.createElement(J.a,{isMulti:!0,name:"nominee",options:qa,value:ja.map((function(e){return{value:e.id,label:e.name}})),ref:xe,className:"React",classNamePrefix:"select",placeholder:(null===nt||void 0===nt?void 0:nt.nomineeOption)?null===nt||void 0===nt?void 0:nt.nomineeOption:"Select Nominees...",id:"nominee",onChange:function(e){!function(e){Pa&&_a(!1);var a=[];(null===e||void 0===e?void 0:e.length)&&e.forEach((function(e){"Add Nominee"===e.value?ra(!0):a.push({id:e.value,name:e.label})})),!e&&_a(!0),Na(a)}(e)}}),l.a.createElement(N.a,null,"Nominee")))),l.a.createElement(o.a,null,Object.keys(je).includes(ta)&&Ia.length&&Ia.map((function(e,a){return l.a.createElement(r.a,{md:"6",sm:"12",key:a},l.a.createElement(j.a,{className:"form-label-group"},e.deletable&&l.a.createElement(H.a,{style:{position:"absolute",right:"-5px",top:"-7px"},className:"primary",size:15,onClick:function(){!function(e){Pa&&_a(!1);var a=Ia.filter((function(a){return e.key!==a.key}));Da(a)}(e)}}),l.a.createElement(x.a,{type:e.type,onKeyPress:function(a){return"number"===e.type&&Object(q.a)(a)},name:e.key,id:e.id,className:"input-label",placeholder:e.key,value:e.val,onChange:function(a){Za(a.target?a.target.value:a.value,e)}}),l.a.createElement(N.a,{for:e.id,className:"dark"===V.a.theme?"dark-label":"light-label"},e.key)))}))),l.a.createElement(o.a,{style:{marginTop:"15px"}},l.a.createElement(r.a,{md:"6",sm:"12",style:{display:"flex"}},ta&&l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{color:"white",outline:!0,onClick:Ya,className:"add-button",id:"addButton",onMouseEnter:function(){return tt(!0)},onMouseLeave:function(){return tt(!1)},style:{backgroundColor:"var(--warning)"}},"+"),l.a.createElement("div",{className:"label-div"},l.a.createElement("span",{id:"buttonLabel",className:"no-display"},"Add a Custom Field")))),l.a.createElement(r.a,{sm:"6"},l.a.createElement(j.a,{className:"action-right",style:{textAlign:"right",marginBottom:"0px"}},l.a.createElement(k.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){Fa(!1),$a()}},Pa?"Cancel":(null===nt||void 0===nt?void 0:nt.resetButton)?null===nt||void 0===nt?void 0:nt.resetButton:"Reset"),l.a.createElement(k.a.Ripple,{color:"warning",type:"submit",className:"button-label",disabled:0===ja.length||!ta||Ua,onClick:function(a){Pa?function(a){a.preventDefault(),Fa(!1);var t=JSON.parse(localStorage.getItem("logInUserData")),n={liabilityType:ta,liabilityDetails:Ia,nominees:ja,id:Ba},l=t.liabilities.findIndex((function(e){return e.id===Ba}));l>=0&&(t.liabilities.splice(l,1),t.liabilities.push(n),localStorage.setItem("logInUserData",JSON.stringify(t)),R.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(v.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){B.b.success("Edited successfully!"),e.getData(e.parsedFilter),Qa()})).catch(),$a(),et(),_a(!0))}(a):function(a){a.preventDefault();var t=JSON.parse(localStorage.getItem("logInUserData")),n={liabilityType:ta,liabilityDetails:Ia,nominees:ja,id:Object(p.v4)()};t.liabilities.push(n),R.a.post("/backendapi/adddetails",{_id:t._id,liabilities:Object(v.b)(JSON.stringify(t.liabilities))},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){e.getData(e.parsedFilter),Qa()})).catch(),localStorage.setItem("logInUserData",JSON.stringify(t)),B.b.success("Liability addedd successfully!"),$a(),et(),_a(!0)}(a)}},Pa?"Update":(null===nt||void 0===nt?void 0:nt.submitButton)?null===nt||void 0===nt?void 0:nt.submitButton:"Add"))))))))),l.a.createElement(o.a,null,l.a.createElement(B.a,null),l.a.createElement(r.a,{md:"8"},l.a.createElement(P.a,{heading:(null===nt||void 0===nt?void 0:nt.subHeading)?nt.subHeading:"Liabilities List",collapseItems:Ze,show:function(){Ke(!Xe),Qa()},assetShow:Xe}))))))))),l.a.createElement(L.a,null)," "),l.a.createElement(o.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(C.a,{isOpen:Ca,toggle:Ya,className:"modal-dialog-centered"},l.a.createElement(w.a,{toggle:Ya},"Add Custom Field"),l.a.createElement(S.a,null,l.a.createElement(j.a,{className:"form-label-group"},l.a.createElement(x.a,{type:"email",name:"Email",disabled:""===ta,id:"EmailMulti",value:Je,placeholder:"Enter Field Name",onChange:function(e){Ve(e.target.value)}}),l.a.createElement(N.a,{for:"EmailMulti"},"Enter Field Name")),l.a.createElement(j.a,{className:"form-label-group",disabled:void 0===ta},l.a.createElement(J.a,{className:"React",ref:ke,disabled:void 0===ta,classNamePrefix:"select",isClearable:!0,name:"color",options:G,placeholder:"Select Field Type...",onChange:function(e){return We(e?e.value:" ")}}),l.a.createElement(N.a,{for:"nameMulti"},"Field Type"))),l.a.createElement(T.a,null,l.a.createElement(j.a,{className:"form-label-group"},l.a.createElement(k.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"mb-1 button-label",disabled:void 0===ta,onClick:function(e){et()}},"Reset")," ",l.a.createElement(k.a.Ripple,{color:"warning",disabled:void 0===ta,type:"submit",className:"button-label",onClick:function(e){return function(){if(""!==ta){var e=Ia,a=e.length,t="";if(e.findIndex((function(e){return e.key===Je+He}))>=0)return void B.b.error("Field Already Exist! Please add new field");"Attachments"===Ia[a-1].key?(t=e[a-1],e[a-1]={key:Je+He,val:"",type:He,deletable:!0},e.push(t),Da(e),Ve(""),We("")):(e.push({key:Je+He,val:"",type:He,deletable:!0}),Da(e),Ve(""),We("")),Ya()}}()}},"Add")))))))}));a.default=Object(i.b)((function(e){var a,t=(null===e||void 0===e?void 0:e.customizer).customizer;return{messages:null===t||void 0===t||null===(a=t.language)||void 0===a?void 0:a.Liability}}))((function(e){var a=e.messages;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"warning spacing nodisplay"},(null===a||void 0===a?void 0:a.heading)?a.heading:"Liabilties"),l.a.createElement(o.a,null,l.a.createElement(r.a,{sm:"12"},l.a.createElement(c.a,{activeTab:"1"},l.a.createElement(s.a,{tabId:"1"},l.a.createElement(X,{messages:a}))))))}))}}]);
//# sourceMappingURL=13.be32978c.chunk.js.map