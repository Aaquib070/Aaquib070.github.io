(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[33],{1002:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=n(16),c=n(20),i=n(19),u=n(131),p=n(62),s=n(37),m=(n(304),n(312),n(29)),f=(n(305),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"fallback-spinner"},r.a.createElement("div",{className:"loading component-loader"},r.a.createElement("div",{className:"effect-1 effects"}),r.a.createElement("div",{className:"effect-2 effects"}),r.a.createElement("div",{className:"effect-3 effects"})))}}]),n}(r.a.Component)),h=n(195),b=["component","fullLayout"],d=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,1012))})),y=Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,293))})),E=Object(a.lazy)((function(){return Promise.resolve().then(n.bind(null,302))})),O=(Object(a.lazy)((function(){return n.e(39).then(n.bind(null,806))})),Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(29)]).then(n.bind(null,1007))}))),j=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(30)]).then(n.bind(null,1008))})),g=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(21),n.e(23)]).then(n.bind(null,1013))})),v=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(25)]).then(n.bind(null,1014))})),z=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(17)]).then(n.bind(null,1015))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(27),n.e(37)]).then(n.bind(null,1003))})),k=Object(a.lazy)((function(){return n.e(40).then(n.bind(null,807))})),w=Object(a.lazy)((function(){return n.e(20).then(n.bind(null,808))})),x=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(31)]).then(n.bind(null,809))})),C=Object(a.lazy)((function(){return n.e(43).then(n.bind(null,810))})),L=Object(a.lazy)((function(){return n.e(32).then(n.bind(null,811))})),N=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(22),n.e(26)]).then(n.bind(null,1009))})),S=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(8),n.e(24)]).then(n.bind(null,1005))})),_=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(44)]).then(n.bind(null,813))})),R=Object(a.lazy)((function(){return n.e(28).then(n.bind(null,1004))})),T=Object(a.lazy)((function(){return Promise.all([n.e(12),n.e(45)]).then(n.bind(null,814))})),I=Object(a.lazy)((function(){return Promise.all([n.e(7),n.e(36)]).then(n.bind(null,999))})),U=Object(a.lazy)((function(){return Promise.all([n.e(7),n.e(42)]).then(n.bind(null,1e3))})),J=Object(a.lazy)((function(){return Promise.all([n.e(18),n.e(16)]).then(n.bind(null,1001))})),X=(Object(a.lazy)((function(){return n.e(41).then(n.bind(null,995))})),Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(35),n.e(14)]).then(n.bind(null,1010))}))),Y=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,998))})),A=Object(a.lazy)((function(){return Promise.all([n.e(8),n.e(19),n.e(38)]).then(n.bind(null,1006))})),B=Object(a.lazy)((function(){return n.e(34).then(n.bind(null,1011))})),D=Object(m.b)((function(e){return{user:e.auth.login.userRole}}))((function(e){var t=e.component,n=e.fullLayout,o=Object(u.a)(e,b);return r.a.createElement(p.b,Object.assign({},o,{render:function(e){return console.log("redirect if not logged in",e),null!==localStorage.getItem("logInUserData")||e.location.pathname.includes("login")||e.location.pathname.includes("home")||e.location.pathname.includes("register")?r.a.createElement(h.a.Consumer,null,(function(o){var l=!0===n?o.fullLayout:"horizontal"===o.state.activeLayout?o.horizontalLayout:o.VerticalLayout;return r.a.createElement(l,Object.assign({},e,{permission:e.user}),r.a.createElement(a.Suspense,{fallback:r.a.createElement(f,null)},r.a.createElement(t,e)))})):r.a.createElement(p.a,{to:"/home"})}}))})),M=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(s.a,{basename:"/#"},r.a.createElement(p.d,null,r.a.createElement(D,{exact:!0,path:"/dashboard",component:d}),r.a.createElement(D,{exact:!0,path:"/register",component:E,fullLayout:!0}),r.a.createElement(D,{exact:!0,path:"/login",component:y,fullLayout:!0}),r.a.createElement(D,{exact:!0,path:"/",component:y,fullLayout:!0}),r.a.createElement(D,{path:"/nominee/list",component:O}),r.a.createElement(D,{path:"/spends",component:j}),r.a.createElement(D,{path:"/assets/add",component:g}),r.a.createElement(D,{path:"/vault/document",component:v}),r.a.createElement(D,{path:"/vault/password",component:z}),r.a.createElement(D,{path:"/emailconfirmation/:userkey",component:k,fullLayout:!0}),r.a.createElement(D,{path:"/diary",component:P}),r.a.createElement(D,{path:"/diary/:filter",component:P}),r.a.createElement(D,{path:"/diary",exact:!0,component:function(){return r.a.createElement(p.a,{to:"/diary"})}}),r.a.createElement(D,{path:"/portfolio",component:w}),r.a.createElement(D,{path:"/admin",component:C}),r.a.createElement(D,{path:"/contactUs",component:x}),r.a.createElement(D,{path:"/privacyTerms",component:L}),r.a.createElement(D,{path:"/liability/add",component:N}),r.a.createElement(D,{path:"/pages/profile",component:J}),r.a.createElement(D,{exact:!0,path:"/user/profile",component:function(e){return r.a.createElement(S,e)}}),r.a.createElement(D,{exact:!0,path:"/user/feed",component:function(e){return r.a.createElement(S,e)}}),r.a.createElement(D,{exact:!0,path:"/user/notify",component:function(e){return r.a.createElement(S,e)}}),r.a.createElement(D,{exact:!0,path:"/user/upgrade",component:function(e){return r.a.createElement(S,e)}}),r.a.createElement(D,{path:"/pages/register",component:B,fullLayout:!0}),r.a.createElement(D,{path:"/pages/subscription",component:_,fullLayout:!0}),r.a.createElement(D,{path:"/extensions/swiper",component:Y}),r.a.createElement(D,{path:"/app/user/edit",component:A}),r.a.createElement(D,{path:"/icons/reactfeather",component:T}),r.a.createElement(D,{path:"/components/popovers",component:U}),r.a.createElement(D,{path:"/components/modals",component:I}),r.a.createElement(D,{path:"/todo",exact:!0,component:function(){return r.a.createElement(p.a,{to:"/todo/all"})}}),r.a.createElement(D,{path:"/todo/:filter",component:R}),r.a.createElement(D,{path:"/home",component:X}),r.a.createElement(D,{path:"/",component:X})))}}]),n}(r.a.Component),V=n(292),W=n(1),q=n.n(W),F=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),G=function(){return(G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},H=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},K={position:"relative",display:"inline-flex",overflow:"hidden"},Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Z=function(e){return function(t){return r.a.createElement(e,Q({},t))}}(function(e){var t;return void 0===e&&(e={}),(t=function(e){function t(t){var n=e.call(this,t)||this;return n.timer=0,n.onClick=function(e){var t=n.props,a=t.during,r=t.onClick,o=t.color;e.stopPropagation();var l=e.pageX,c=e.pageY,i=e.currentTarget.getBoundingClientRect(),u=l-(i.left+window.scrollX),p=c-(i.top+window.scrollY),s=Math.max(i.width,i.height);n.setState((function(e){return{rippleStyle:G({},e.rippleStyle,{left:u,top:p,opacity:1,transform:"translate(-50%, -50%)",transition:"initial",backgroundColor:o})}}),(function(){n.timer=setTimeout((function(){n.setState((function(e){return{rippleStyle:G({},e.rippleStyle,{opacity:0,transform:"scale("+s/9+")",transition:"all "+a+"ms"})}}))}),50)})),r&&r(e)},n.state={rippleStyle:{position:"absolute",borderRadius:"50%",opacity:0,width:35,height:35,transform:"translate(-50%, -50%)",pointerEvents:"none"}},n}return F(t,e),t.prototype.componentWillUnmount=function(){clearTimeout(this.timer)},t.prototype.render=function(){var e=this.props,t=e.children,n=(e.during,e.color,e.onClick,e.className),a=H(e,["children","during","color","onClick","className"]),o=this.state.rippleStyle;return r.a.createElement("div",G({},a,{className:("react-ripples "+n).trim(),style:K,onClick:this.onClick}),t,r.a.createElement("s",{style:o}))},t}(r.a.PureComponent)).displayName="Ripples",t.propTypes={during:q.a.number,color:q.a.string,onClick:q.a.func,className:q.a.string},t.defaultProps=G({during:600,color:"rgba(0, 0, 0, .3)",className:"",onClick:function(){}},e),t}()),$=["rippleColor","during","block"];V.a.Ripple=function(e){var t=e.rippleColor,n=e.during,a=e.block,o=Object(u.a)(e,$);return r.a.createElement(Z,{color:t||"rgba(255, 255, 255, .5)",during:n,className:"".concat(a?"d-block":"")},r.a.createElement(V.a,o))};n(688),n(689),n(690),t.default=function(e){return r.a.createElement(M,null)}},688:function(e,t,n){},689:function(e,t,n){},690:function(e,t,n){}}]);
//# sourceMappingURL=33.ff3a9804.chunk.js.map