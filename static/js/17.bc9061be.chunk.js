(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[17],{518:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(501),l=n(458),c=n(634),i=n(254),u=n(18),s=n(59);t.a=Object(u.b)(null,(function(e){return{logout:function(){return e((function(e){e({type:"LOGOUT_WITH_JWT",payload:{}}),s.a.push("/pages/login")}))}}}))((function(e){var t=e.modalMessage,n=e.handleConfirm,a=e.isOpen,u=e.closeModal,s=e.confirmText,m=void 0===s?"Delete":s,p=e.cancelText,d=void 0===p?"Cancel":p,f=e.warning,h=void 0===f?"":f,b=t||"Are you sure you want to delete this record?";return r.a.createElement("div",null,r.a.createElement(o.a,{isOpen:a,className:"modal-dialog-centered",backdrop:"static"},r.a.createElement(l.a,null," ",b),r.a.createElement(c.a,null,!h&&r.a.createElement(i.a,{color:"primary",onClick:u,className:"button-label"},d),r.a.createElement(i.a,{color:"danger",onClick:n,className:"button-label"},h?"Ok":m))))}))},549:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(260);t.a=function(e){return r.a.createElement("div",{className:"fallback-spinner"},r.a.createElement("div",{className:"loading component-loader"},r.a.createElement("div",{className:"effect-1 effects"}),r.a.createElement("div",{className:"effect-2 effects"}),r.a.createElement("div",{className:"effect-3 effects"})))}},565:function(e,t,n){},566:function(e,t,n){},634:function(e,t,n){"use strict";var a=n(4),r=n(9),o=n(0),l=n.n(o),c=n(1),i=n.n(c),u=n(8),s=n.n(u),m=n(3),p={tag:m.o,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(m.k)(s()(t,"modal-footer"),n);return l.a.createElement(o,Object(a.a)({},c,{className:i}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},645:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),o=n.n(r),l=n(32),c=n(62),i=n(168),u=n(18),s=n(549),m=n(167),p=["component","fullLayout"],d=Object(u.b)((function(e){return{user:e.auth.login.userRole}}))((function(e){var t=e.component,n=e.fullLayout,a=Object(i.a)(e,p);return o.a.createElement(c.b,Object.assign({},a,{render:function(e){var a=localStorage.getItem("logInUserData"),l=e.location,i=(l=void 0===l?{}:l).pathname,u=void 0===i?"":i,p=(null===u||void 0===u?void 0:u.includes("home"))||(null===u||void 0===u?void 0:u.includes("privacy"))||(null===u||void 0===u?void 0:u.includes("license"))||(null===u||void 0===u?void 0:u.includes("terms_conditions"));return null!==a||p?o.a.createElement(m.a.Consumer,null,(function(a){var l=!0===n?a.fullLayout:"horizontal"===a.state.activeLayout?a.horizontalLayout:a.VerticalLayout;return o.a.createElement(l,Object.assign({},e,{permission:e.user}),o.a.createElement(r.Suspense,{fallback:o.a.createElement(s.a,null)},o.a.createElement(t,e)))})):o.a.createElement(c.a,{to:"/home"})}}))})),f=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,636))})),h=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,650))})),b=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,637))})),y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,646))})),v=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(24)]).then(n.bind(null,651))})),E=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,647))})),g=Object(r.lazy)((function(){return Promise.all([n.e(16),n.e(23)]).then(n.bind(null,638))})),O=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,652))})),j=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(5),n.e(22)]).then(n.bind(null,642))})),P=Object(r.lazy)((function(){return n.e(26).then(n.bind(null,639))})),w=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,640))})),k=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(14)]).then(n.bind(null,648))})),z=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(6),n.e(28)]).then(n.bind(null,649))})),C=Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(15)]).then(n.bind(null,643))})),N=Object(r.lazy)((function(){return n.e(25).then(n.bind(null,564))})),x=Object(r.lazy)((function(){return n.e(12).then(n.bind(null,644))})),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(6),n.e(27)]).then(n.bind(null,653))})),_=function(e){return o.a.createElement(l.a,{basename:"/#"},o.a.createElement(c.d,null,o.a.createElement(d,{path:"/terms_conditions",component:b}),o.a.createElement(d,{path:"/license",component:h}),o.a.createElement(d,{path:"/privacy",component:f}),o.a.createElement(d,{exact:!0,path:"/dashboard",component:y}),o.a.createElement(d,{path:"/nominee/list",component:v}),o.a.createElement(d,{path:"/spends",component:E}),o.a.createElement(d,{path:"/assets/add",component:S}),o.a.createElement(d,{path:"/vault/document",component:g}),o.a.createElement(d,{path:"/vault/password",component:O}),o.a.createElement(d,{path:"/emailconfirmation/:userkey",component:P,fullLayout:!0}),o.a.createElement(d,{path:"/diary",component:j}),o.a.createElement(d,{path:"/diary/:filter",component:j}),o.a.createElement(d,{path:"/diary",exact:!0,component:function(){return o.a.createElement(c.a,{to:"/diary"})}}),o.a.createElement(d,{path:"/portfolio",component:w}),o.a.createElement(d,{path:"/contactUs",component:k}),o.a.createElement(d,{path:"/liability/add",component:z}),o.a.createElement(d,{exact:!0,path:"/user/profile",component:function(e){return o.a.createElement(C,e)}}),o.a.createElement(d,{exact:!0,path:"/user/feed",component:function(e){return o.a.createElement(C,e)}}),o.a.createElement(d,{exact:!0,path:"/user/notify",component:function(e){return o.a.createElement(C,e)}}),o.a.createElement(d,{exact:!0,path:"/user/upgrade",component:function(e){return o.a.createElement(C,e)}}),o.a.createElement(d,{path:"/pages/subscription",component:N,fullLayout:!0}),o.a.createElement(d,{path:"/home",component:x}),o.a.createElement(d,{path:"/home/session",component:x}),o.a.createElement(d,{path:"/",component:x})))},T=n(254),L=n(1),M=n.n(L),I=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),R=function(){return(R=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},U=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},D={position:"relative",display:"inline-flex",overflow:"hidden"},J=function(){return(J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},W=function(e){return function(t){return o.a.createElement(e,J({},t))}}(function(e){var t;return void 0===e&&(e={}),(t=function(e){function t(t){var n=e.call(this,t)||this;return n.timer=0,n.onClick=function(e){var t=n.props,a=t.during,r=t.onClick,o=t.color;e.stopPropagation();var l=e.pageX,c=e.pageY,i=e.currentTarget.getBoundingClientRect(),u=l-(i.left+window.scrollX),s=c-(i.top+window.scrollY),m=Math.max(i.width,i.height);n.setState((function(e){return{rippleStyle:R({},e.rippleStyle,{left:u,top:s,opacity:1,transform:"translate(-50%, -50%)",transition:"initial",backgroundColor:o})}}),(function(){n.timer=setTimeout((function(){n.setState((function(e){return{rippleStyle:R({},e.rippleStyle,{opacity:0,transform:"scale("+m/9+")",transition:"all "+a+"ms"})}}))}),50)})),r&&r(e)},n.state={rippleStyle:{position:"absolute",borderRadius:"50%",opacity:0,width:35,height:35,transform:"translate(-50%, -50%)",pointerEvents:"none"}},n}return I(t,e),t.prototype.componentWillUnmount=function(){clearTimeout(this.timer)},t.prototype.render=function(){var e=this.props,t=e.children,n=(e.during,e.color,e.onClick,e.className),a=U(e,["children","during","color","onClick","className"]),r=this.state.rippleStyle;return o.a.createElement("div",R({},a,{className:("react-ripples "+n).trim(),style:D,onClick:this.onClick}),t,o.a.createElement("s",{style:r}))},t}(o.a.PureComponent)).displayName="Ripples",t.propTypes={during:M.a.number,color:M.a.string,onClick:M.a.func,className:M.a.string},t.defaultProps=R({during:600,color:"rgba(0, 0, 0, .3)",className:"",onClick:function(){}},e),t}()),Y=["rippleColor","during","block"];T.a.Ripple=function(e){var t=e.rippleColor,n=e.during,a=e.block,r=Object(i.a)(e,Y);return o.a.createElement(W,{color:t||"rgba(255, 255, 255, .5)",during:n,className:"".concat(a?"d-block":"")},o.a.createElement(T.a,r))};n(565),n(566);var A=n(30),X=n.n(A),B=n(518);t.default=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],l=t[1];X.a.interceptors.response.use((function(e){return e}),(function(e){return 401===(null===e||void 0===e?void 0:e.response).status?l(!0):Promise.reject(e)}));return o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(B.a,{modalMessage:"Your Session has expired, kindly login!!",handleConfirm:function(){localStorage.removeItem("logInUserData"),l(!1),window.location.href="/#/#/home/session",window.location.reload()},warning:!0,isOpen:n}),o.a.createElement(_,null))}}}]);