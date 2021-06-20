(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[28],{517:function(e,t,a){"use strict";var s=a(11),n=a(12),o=a(14),r=a(13),i=a(0),l=a.n(i),c=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",{style:{color:this.props.labelColor}},this.props.label))}}]),a}(l.a.Component);t.a=c},554:function(e,t,a){"use strict";var s=a(5),n=a(10),o=a(0),r=a.n(o),i=a(1),l=a.n(i),c=a(3),p=a.n(c),d=a(4),u={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.q,className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.row,i=e.disabled,l=e.check,c=e.inline,u=e.tag,h=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.m)(p()(t,!!o&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!i)&&"disabled"),a);return"fieldset"===u&&(h.disabled=i),r.a.createElement(u,Object(s.a)({},h,{className:m}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},564:function(e,t,a){"use strict";var s=a(0),n=a.n(s),o=a(1),r=a.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=Object(s.forwardRef)((function(e,t){var a=e.color,s=void 0===a?"currentColor":a,o=e.size,r=void 0===o?24:o,c=l(e,["color","size"]);return n.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));c.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},c.displayName="Check",t.a=c},572:function(e,t,a){"use strict";var s=a(5),n=a(10),o=a(20),r=a(15),i=a(0),l=a.n(i),c=a(1),p=a.n(c),d=a(3),u=a.n(d),h=a(4),m={children:p.a.node,type:p.a.string,size:p.a.oneOfType([p.a.number,p.a.string]),bsSize:p.a.string,valid:p.a.bool,invalid:p.a.bool,tag:h.q,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),plaintext:p.a.bool,addon:p.a.bool,className:p.a.string,cssModule:p.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,r=e.bsSize,i=e.valid,c=e.invalid,p=e.tag,d=e.addon,m=e.plaintext,f=e.innerRef,b=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),k=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),v=p||("select"===o||"textarea"===o?o:"input"),T="form-control";m?(T+="-plaintext",v=p||"input"):"file"===o?T+="-file":"range"===o?T+="-range":k&&(T=d?null:"form-check-input"),b.size&&g.test(b.size)&&(Object(h.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var E=Object(h.m)(u()(t,c&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,T),a);return("input"===v||p&&"function"===typeof p)&&(b.type=o),b.children&&!m&&"select"!==o&&"string"===typeof v&&"select"!==v&&(Object(h.t)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(v,Object(s.a)({},b,{ref:f,className:E,"aria-invalid":c}))},t}(l.a.Component);f.propTypes=m,f.defaultProps={type:"text"},t.a=f},588:function(e,t,a){"use strict";var s=a(0),n=a.n(s),o=a(1),r=a.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=Object(s.forwardRef)((function(e,t){var a=e.color,s=void 0===a?"currentColor":a,o=e.size,r=void 0===o?24:o,c=l(e,["color","size"]);return n.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("polyline",{points:"3 6 5 6 21 6"}),n.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));c.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},c.displayName="Trash",t.a=c},611:function(e,t,a){"use strict";var s=a(612),n=a.n(s),o=a(60),r=a.n(o),i=a(9),l=a.n(i),c=a(0),p=a.n(c),d=(a(1),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),u={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},h={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},m={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},f={zIndex:1,position:"fixed",top:0,bottom:0},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},a.overlayClicked=a.overlayClicked.bind(l()(l()(a))),a.onTouchStart=a.onTouchStart.bind(l()(l()(a))),a.onTouchMove=a.onTouchMove.bind(l()(l()(a))),a.onTouchEnd=a.onTouchEnd.bind(l()(l()(a))),a.onScroll=a.onScroll.bind(l()(l()(a))),a.saveSidebarRef=a.saveSidebarRef.bind(l()(l()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!e}),this.saveSidebarWidth()},a.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},a.onTouchStart=function(e){if(!this.isTouching()){var t=e.targetTouches[0];this.setState({touchIdentifier:t.identifier,touchStartX:t.clientX,touchCurrentX:t.clientX})}},a.onTouchMove=function(e){if(this.isTouching())for(var t=0;t<e.targetTouches.length;t++)if(e.targetTouches[t].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:e.targetTouches[t].clientX});break}},a.onTouchEnd=function(){if(this.isTouching()){var e=this.touchSidebarWidth();(this.props.open&&e<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&e>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},a.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},a.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},a.isTouching=function(){return null!==this.state.touchIdentifier},a.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},a.saveSidebarWidth=function(){var e=this.sidebar.offsetWidth;e!==this.state.sidebarWidth&&this.setState({sidebarWidth:e})},a.saveSidebarRef=function(e){this.sidebar=e},a.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},a.render=function(){var e,t=n()({},u,this.props.styles.sidebar),a=n()({},h,this.props.styles.content),s=n()({},m,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,r=this.isTouching(),i={className:this.props.rootClassName,style:n()({},d,this.props.styles.root),role:"navigation",id:this.props.rootId},l=this.props.shadow&&(r||this.props.open||this.props.docked);if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",l&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",l&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),r){var c=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-c)+"%)",t.WebkitTransform="translateX("+100*(1-c)+"%)"):(t.transform="translateX(-"+100*(1-c)+"%)",t.WebkitTransform="translateX(-"+100*(1-c)+"%)"),s.opacity=c,s.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?a.right=this.state.sidebarWidth+"px":a.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",s.opacity=1,s.visibility="visible");if(!r&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",a.transition="none",s.transition="none"),o)if(this.props.open)i.onTouchStart=this.onTouchStart,i.onTouchMove=this.onTouchMove,i.onTouchEnd=this.onTouchEnd,i.onTouchCancel=this.onTouchEnd,i.onScroll=this.onScroll;else{var b=n()({},f,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,e=p.a.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return p.a.createElement("div",i,p.a.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),p.a.createElement("div",{className:this.props.overlayClassName,style:s,onClick:this.overlayClicked,id:this.props.overlayId}),p.a.createElement("div",{className:this.props.contentClassName,style:a,id:this.props.contentId},e,this.props.children))},t}(c.Component);b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},t.a=b},612:function(e,t,a){var s=a(16);e.exports=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},613:function(e,t,a){"use strict";var s=a(0),n=a.n(s),o=a(1),r=a.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=Object(s.forwardRef)((function(e,t){var a=e.color,s=void 0===a?"currentColor":a,o=e.size,r=void 0===o?24:o,c=l(e,["color","size"]);return n.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}));c.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},c.displayName="Star",t.a=c},644:function(e,t,a){},676:function(e,t,a){"use strict";var s=a(0),n=a.n(s),o=a(1),r=a.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=Object(s.forwardRef)((function(e,t){var a=e.color,s=void 0===a?"currentColor":a,o=e.size,r=void 0===o?24:o,c=l(e,["color","size"]);return n.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),n.a.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}))}));c.propTypes={color:r.a.string,size:r.a.oneOfType([r.a.string,r.a.number])},c.displayName="Tag",t.a=c},999:function(e,t,a){"use strict";a.r(t);var s=a(11),n=a(12),o=a(14),r=a(13),i=a(0),l=a.n(i),c=a(611),p=a(157),d=a(251),u=a(795),h=a(796),m=a(58),f=a.n(m),b=a(443),k=a(476),g=a(613),v=a(489),T=a(564),E=a(588),y=a(24),S=a(66),N=a.n(S),O=a(109),w=a(42),C=a.n(w),x=a(44),j=function(e){return function(){var t=Object(O.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("api/apps/todo",{params:e}).then((function(t){a({type:"GET_TODOS",todos:t.data,routeParams:e})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(t){t({type:"COMPLETE_TASK",id:e.id,value:e.isCompleted})}},P=function(e){return function(t){Promise.all([t({type:"STAR_TASK",id:e.id,value:e.isStarred})])}},z=function(e){return function(t){Promise.all([t({type:"IMPORTANT_TASK",id:e.id,value:e.isImportant})])}},W=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return e.props.mainSidebar(!1)}},l.a.createElement(b.a,{size:15})),l.a.createElement("div",{className:"todo-app-menu"},l.a.createElement("div",{className:"add-task"},l.a.createElement(d.a.Ripple,{block:!0,className:"btn-block my-1",color:"primary",onClick:function(){e.props.addTask("open"),e.props.mainSidebar(!1)}},"Add Note")),l.a.createElement(f.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1}},l.a.createElement(u.a,{className:"font-medium-1"},l.a.createElement(h.a,{className:"border-0 pt-0",action:!0,onClick:function(){e.props.changeFilter("all")},active:"/todo/all"===this.props.routerProps.location.pathname},l.a.createElement(k.a,{size:22}),l.a.createElement("span",{className:"align-middle ml-1"},"All"))),l.a.createElement("hr",null),l.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Filters"),l.a.createElement(u.a,{className:"font-medium-1"},l.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("starred")},active:"/todo/starred"===this.props.routerProps.location.pathname},l.a.createElement(g.a,{size:22}),l.a.createElement("span",{className:"align-middle ml-1"},"Starred")),l.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("important")},active:"/todo/important"===this.props.routerProps.location.pathname},l.a.createElement(v.a,{size:22}),l.a.createElement("span",{className:"align-middle ml-1"},"Important")),l.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("completed")},active:"/todo/completed"===this.props.routerProps.location.pathname},l.a.createElement(T.a,{size:22}),l.a.createElement("span",{className:"align-middle ml-1"},"Completed")),l.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("trashed")},active:"/todo/trashed"===this.props.routerProps.location.pathname},l.a.createElement(E.a,{size:22}),l.a.createElement("span",{className:"align-middle ml-1"},"Trashed"))),l.a.createElement("hr",null),l.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Labels"),l.a.createElement(u.a,{className:"font-medium-1"},l.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("frontend")},active:"/todo/frontend"===this.props.routerProps.location.pathname},l.a.createElement("span",{className:"bullet bullet-primary align-middle"}),l.a.createElement("span",{className:"align-middle ml-1"},"Frontend")),l.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("backend")},active:"/todo/backend"===this.props.routerProps.location.pathname},l.a.createElement("span",{className:"bullet bullet-warning align-middle"}),l.a.createElement("span",{className:"align-middle ml-1"},"Backend")),l.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("doc")},active:"/todo/doc"===this.props.routerProps.location.pathname},l.a.createElement("span",{className:"bullet bullet-success align-middle"}),l.a.createElement("span",{className:"align-middle ml-1"},"Doc")),l.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("bug")},active:"/todo/bug"===this.props.routerProps.location.pathname},l.a.createElement("span",{className:"bullet bullet-danger align-middle"}),l.a.createElement("span",{className:"align-middle ml-1"},"Bug"))))))}}]),a}(l.a.Component),X=Object(y.b)(null,{changeFilter:function(e){return function(t){t({type:"CHANGE_FILTER",filter:e}),x.a.push("/diary/".concat(e)),t(j({filter:e}))}}})(W),I=a(554),A=a(572),R=a(491),D=a(502),M=a(517),L=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],handleUpdateTask:null,currentLocation:e.props.routerProps.location.pathname,value:""},e.handleOnChange=function(t){e.setState({value:t.target.value}),e.props.searchTask(t.target.value)},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getTodos(this.props.routerProps.match.params);case 2:this.setState({todos:this.props.app.todo.todos,handleUpdateTask:this.props.handleUpdateTask});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.todos,s=t.handleUpdateTask,n=t.value,o=this.props.routerProps.match.params.filter,r=n.length?this.props.app.todo.filteredTodos:a,i=r.length>0?r.map((function(t,a){return l.a.createElement("li",{className:"todo-item ".concat(t.isCompleted?"completed":""),key:a,onClick:function(){s(t)}},l.a.createElement("div",{className:"todo-title-wrapper d-flex justify-content-between mb-50"},l.a.createElement("div",{className:"todo-title-area d-flex align-items-center"},l.a.createElement("div",{className:"title-wrapper d-flex"},l.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:l.a.createElement(T.a,{className:"vx-icon",size:12}),label:"",checked:t.isCompleted,size:"sm",onClick:function(a){a.stopPropagation(),e.props.completeTask(t)},onChange:function(e){return e.stopPropagation()}}),l.a.createElement("h6",{className:"todo-title mt-50 mx-50"},t.title)),t.tags.length>0?l.a.createElement("div",{className:"chip-wrapper"},t.tags.map((function(e,t){return l.a.createElement("div",{className:"chip mb-0",key:t},l.a.createElement("div",{className:"chip-body"},l.a.createElement("span",{className:"chip-text"},l.a.createElement("span",{className:"bullet bullet-".concat("backend"===e?"warning":"doc"===e?"success":"bug"===e?"danger":"primary"," bullet-xs")}),l.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))):null),l.a.createElement("div",{className:"todo-item-action d-flex ".concat("trashed"===o?"justify-content-end":"")},l.a.createElement("div",{className:"todo-item-info d-inline-block ".concat("trashed"===o?"mr-1":"mr-1 mr-sm-0"),onClick:function(a){a.stopPropagation(),e.props.importantTask(t)}},l.a.createElement(v.a,{size:17,className:"".concat(t.isImportant?"text-success":"")})),l.a.createElement("div",{className:"todo-item-favorite d-inline-block mr-1 mr-sm-0",onClick:function(a){a.stopPropagation(),e.props.starTask(t)}},l.a.createElement(g.a,{size:17,className:"".concat(t.isStarred?"text-warning":"")})),"trashed"!==o?l.a.createElement("div",{className:"todo-item-delete d-inline-block mr-1 mr-sm-0",onClick:function(a){a.stopPropagation(),e.props.trashTask(t.id)}},l.a.createElement(E.a,{size:17})):null)),t.desc.length>0?l.a.createElement("p",{className:"todo-desc truncate mb-0"},t.desc):"")})):l.a.createElement("p",{className:"p-1 text-center mt-2 font-medium-3 text-bold-500"},"No tasks at this time");return l.a.createElement("div",{className:"content-right"},l.a.createElement("div",{className:"todo-app-area"},l.a.createElement("div",{className:"todo-app-list-wrapper"},l.a.createElement("div",{className:"todo-app-list"},l.a.createElement("div",{className:"app-fixed-search"},l.a.createElement("div",{className:"sidebar-toggle d-inline-block d-lg-none",onClick:function(){return e.props.mainSidebar(!0)}},l.a.createElement(R.a,{size:24})),l.a.createElement(I.a,{className:"position-relative has-icon-left m-0 d-inline-block d-lg-block"},l.a.createElement(A.a,{type:"text",placeholder:"Search...",onChange:function(t){return e.handleOnChange(t)},value:n}),l.a.createElement("div",{className:"form-control-position"},l.a.createElement(D.a,{size:15})))),l.a.createElement(f.a,{className:"todo-task-list",options:{wheelPropagation:!1}},l.a.createElement("ul",{className:"todo-task-list-wrapper"},i))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.app.todo.routeParam!==t.currentLocation?{todos:e.app.todo.todos}:null}}]),a}(l.a.Component),F=Object(y.b)((function(e){return{app:e.todoApp}}),{getTodos:j,completeTask:U,starTask:P,importantTask:z,trashTask:function(e){return function(t,a){var s=a().todoApp.todo.routeParam;C.a.post("/api/app/todo/trash-todo",e).then((function(a){return t({type:"TRASH_TASK",id:e})})).then(t(j(s)))}},searchTask:function(e){return function(t){t({type:"SEARCH_TASK",val:e})}}})(L),_=a(2),B=a(468),H=a(512),K=a(459),V=a(460),Q=a(676),q=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={taskToUpdate:null,taskTitle:"",taskDesc:"",taskStatus:!1,taskStarred:!1,taskImportant:!1,newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}},e.handleNewTaskTags=function(t){var a=e.state.newTask.tags;a.includes(t)?a.splice(a.indexOf(t),1):a.push(t),e.setState(Object(_.a)(Object(_.a)({},e.state.newTask),{},{tags:t}))},e.renderTags=function(e){return e.map((function(e,t){return l.a.createElement("div",{className:"chip mb-0 mr-50",key:t},l.a.createElement("div",{className:"chip-body"},l.a.createElement("span",{className:"chip-text"},l.a.createElement("span",{className:"bullet bullet-".concat("backend"===e?"warning":"doc"===e?"success":"bug"===e?"danger":"primary"," bullet-xs")}),l.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))},e}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(e,t){(null!==this.props.taskToUpdate&&this.state.taskToUpdate!==this.props.taskToUpdate||null!==this.props.taskToUpdate&&this.state.taskStatus!==this.props.taskToUpdate.isCompleted||null!==this.props.taskToUpdate&&this.state.taskStarred!==this.props.taskToUpdate.isStarred||null!==this.props.taskToUpdate&&this.state.taskImportant!==this.props.taskToUpdate.isImportant)&&this.setState({taskToUpdate:this.props.taskToUpdate,taskTitle:this.props.taskToUpdate.title,taskDesc:this.props.taskToUpdate.desc,taskStatus:this.props.taskToUpdate.isCompleted,taskStarred:this.props.taskToUpdate.isStarred,taskImportant:this.props.taskToUpdate.isImportant})}},{key:"render",value:function(){var e=this,t=this.state,a=t.taskToUpdate,s=t.taskTitle,n=t.taskDesc,o=t.newTask,r=t.taskStatus;return l.a.createElement("div",{className:"task-sidebar ".concat(!0===this.props.addTaskState?"show":"")},l.a.createElement("div",{className:"task-header"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"task-type-title text-bold-600"},l.a.createElement("h3",null,this.props.taskToUpdate&&this.props.taskToUpdate.id?"Update Note":"Add Note")),l.a.createElement("div",{className:"close-icon"},l.a.createElement(b.a,{className:"cursor-pointer",size:20,onClick:function(){return e.props.addTask("close")}})))),l.a.createElement(f.a,null,l.a.createElement("div",{className:"task-body"},l.a.createElement("div",{className:"d-flex justify-content-between mb-2"},l.a.createElement("div",{className:"mark-complete"},this.props.taskToUpdate&&this.props.taskToUpdate.id&&l.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:l.a.createElement(T.a,{className:"vx-icon",size:15}),label:"",checked:r,onChange:function(t){e.props.completeTask(e.props.taskToUpdate)}})),l.a.createElement("div",{className:"task-actions"},l.a.createElement(v.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskImportant||o.isImportant?"text-success":""),onClick:function(){null!==e.props.taskToUpdate?e.props.importantTask(e.props.taskToUpdate):e.setState({newTask:Object(_.a)(Object(_.a)({},e.state.newTask),{},{isImportant:!e.state.newTask.isImportant})})}}),l.a.createElement(g.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskStarred||o.isStarred?"text-warning":""),onClick:function(){null!==e.props.taskToUpdate?e.props.starTask(e.props.taskToUpdate):e.setState({newTask:Object(_.a)(Object(_.a)({},e.state.newTask),{},{isStarred:!e.state.newTask.isStarred})})}}),l.a.createElement(B.a,{className:"d-inline-block"},l.a.createElement(H.a,{tag:"span"},l.a.createElement(Q.a,{className:"mr-50",size:20})),l.a.createElement(K.a,{tag:"ul",right:!0},l.a.createElement(V.a,{tag:"li"},l.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:l.a.createElement(T.a,{className:"vx-icon",size:12}),label:"Frontend",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("frontend")||o.tags.includes("frontend")),size:"sm",onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"frontend"):e.handleNewTaskTags("frontend")}})),l.a.createElement(V.a,{tag:"li"},l.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:l.a.createElement(T.a,{className:"vx-icon",size:12}),label:"Backend",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("backend")||o.tags.includes("backend")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"backend"):e.handleNewTaskTags("backend")}})),l.a.createElement(V.a,{tag:"li"},l.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:l.a.createElement(T.a,{className:"vx-icon",size:12}),label:"Doc",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("doc")||o.tags.includes("doc")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"doc"):e.handleNewTaskTags("doc")}})),l.a.createElement(V.a,{tag:"li"},l.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:l.a.createElement(T.a,{className:"vx-icon",size:12}),label:"Bug",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("bug")||o.tags.includes("bug")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"bug"):e.handleNewTaskTags("bug")}})))))),l.a.createElement(I.a,null,l.a.createElement(A.a,{type:"text",placeholder:"Title",value:null!==this.props.taskToUpdate?s:o.title,onChange:function(t){null!==e.props.taskToUpdate?e.setState({taskTitle:t.target.value}):e.setState({newTask:Object(_.a)(Object(_.a)({},e.state.newTask),{},{title:t.target.value})})}})),l.a.createElement(I.a,null,l.a.createElement(A.a,{type:"textarea",placeholder:"Description",rows:"5",value:null!==this.props.taskToUpdate?n:o.desc,onChange:function(t){null!==e.props.taskToUpdate?e.setState({taskDesc:t.target.value}):e.setState({newTask:Object(_.a)(Object(_.a)({},e.state.newTask),{},{desc:t.target.value})})}})),l.a.createElement("div",{className:"chip-wrapper my-1 d-flex flex-wrap"},null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags&&this.props.taskToUpdate.tags.length>0?this.renderTags(this.props.taskToUpdate.tags):null),l.a.createElement("hr",{className:"my-2"}),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement(d.a.Ripple,{className:"mr-50",color:"primary",onClick:function(){null!==e.props.taskToUpdate?e.props.updateTask(a.id,s,n):e.props.addNewTask(e.state.newTask),e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})},disabled:!(s.length>0||o.title.length>0)},a&&a.id&&null!==this.props.taskToUpdate?"Update":"Add"),l.a.createElement(d.a.Ripple,{color:"light",outline:!0,onClick:function(){e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})}},"Cancel")))))}}]),a}(l.a.Component),G=Object(y.b)((function(e){return{app:e.todoApp}}),{completeTask:U,importantTask:z,starTask:P,updateTask:function(e,t,a){return function(s){s({type:"UPDATE_TASK",id:e,title:t,desc:a})}},updateLabel:function(e,t){return function(a,s){a({type:"UPDATE_LABEL",label:t,id:e})}},addNewTask:function(e){return function(t,a){var s=a().todoApp.todo.routeParam;C.a.post("/api/apps/todo/new-task",{task:e}).then((function(a){t({type:"ADD_TASK",task:e}),t(j(s))}))}}})(q),J=(a(644),window.matchMedia("(min-width: 992px)")),Y=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={addTask:!1,sidebarDocked:J.matches,sidebarOpen:!1,taskToUpdate:null,prevState:null},e.onSetSidebarOpen=function(t){e.setState({sidebarOpen:t})},e.mediaQueryChanged=function(){e.setState({sidebarDocked:J.matches,sidebarOpen:!1})},e.handleAddTask=function(t){"open"===t?e.setState({addTask:!0}):e.setState({addTask:!1,taskToUpdate:null})},e.handleUpdateTask=function(t){void 0!==t?e.setState({addTask:!0,taskToUpdate:t}):e.setState({taskToUpdate:null})},e.handleUndoChanges=function(t){e.setState({prevState:t})},e}return Object(n.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){J.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){J.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"todo-application position-relative"},l.a.createElement("div",{className:"app-content-overlay ".concat(this.state.addTask||this.state.sidebarOpen?"show":""),onClick:function(){e.handleAddTask("close"),e.onSetSidebarOpen(!1)}}),l.a.createElement(p.a.Consumer,null,(function(t){return l.a.createElement(c.a,{sidebar:l.a.createElement(X,{routerProps:e.props,addTask:e.handleAddTask,mainSidebar:e.onSetSidebarOpen}),docked:e.state.sidebarDocked,open:e.state.sidebarOpen,sidebarClassName:"sidebar-content todo-sidebar d-flex",touch:!1,contentClassName:"sidebar-children d-none",pullRight:"rtl"===t.state.direction},'""')})),l.a.createElement(F,{routerProps:this.props,handleUpdateTask:this.handleUpdateTask,mainSidebar:this.onSetSidebarOpen,prevState:this.state.prevState}),l.a.createElement(G,{addTask:this.handleAddTask,addTaskState:this.state.addTask,taskToUpdate:this.state.taskToUpdate,newTask:this.state.newTask,mainSidebar:this.onSetSidebarOpen,handleUndoChanges:this.handleUndoChanges}))}}]),a}(l.a.Component);t.default=Y}}]);
//# sourceMappingURL=28.20408279.chunk.js.map