(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[16],{502:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),o=n.n(r).a.createContext({})},514:function(e,t,n){"use strict";var r=n(4),o=n(9),a=n(0),i=n.n(a),c=n(1),u=n.n(c),s=n(7),l=n.n(s),f=n(3),p={tag:f.o,inverse:u.a.bool,color:u.a.string,body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},d=function(e){var t=e.className,n=e.cssModule,a=e.color,c=e.body,u=e.inverse,s=e.outline,p=e.tag,d=e.innerRef,g=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(f.k)(l()(t,"card",!!u&&"text-white",!!c&&"card-body",!!a&&(s?"border":"bg")+"-"+a),n);return i.a.createElement(p,Object(r.a)({},g,{className:b,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},518:function(e,t,n){"use strict";var r=n(4),o=n(9),a=n(0),i=n.n(a),c=n(1),u=n.n(c),s=n(7),l=n.n(s),f=n(3),p={tag:f.o,className:u.a.string,cssModule:u.a.object},d=function(e){var t=e.className,n=e.cssModule,a=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),u=Object(f.k)(l()(t,"card-title"),n);return i.a.createElement(a,Object(r.a)({},c,{className:u}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},521:function(e,t,n){"use strict";var r=n(4),o=n(9),a=n(0),i=n.n(a),c=n(1),u=n.n(c),s=n(7),l=n.n(s),f=n(3),p={tag:f.o,className:u.a.string,cssModule:u.a.object},d=function(e){var t=e.className,n=e.cssModule,a=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),u=Object(f.k)(l()(t,"card-header"),n);return i.a.createElement(a,Object(r.a)({},c,{className:u}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},525:function(e,t,n){"use strict";var r=n(4),o=n(15),a=n(0),i=n.n(a),c=n(1),u=n.n(c),s=n(7),l=n.n(s),f=n(502),p=n(3),d={tag:p.o,activeTab:u.a.any,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeTab:n.props.activeTab},n}return Object(o.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.tag,a=Object(p.l)(this.props,Object.keys(d)),c=Object(p.k)(l()("tab-content",t),n);return i.a.createElement(f.a.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(o,Object(r.a)({},a,{className:c})))},t}(a.Component);t.a=g,g.propTypes=d,g.defaultProps={tag:"div"}},526:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(4),o=n(9),a=n(0),i=n.n(a),c=n(1),u=n.n(c),s=n(7),l=n.n(s),f=n(502),p=n(3),d={tag:p.o,className:u.a.string,cssModule:u.a.object,tabId:u.a.any};function g(e){var t=e.className,n=e.cssModule,a=e.tabId,c=e.tag,u=Object(o.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return Object(p.k)(l()("tab-pane",t,{active:a===e}),n)};return i.a.createElement(f.a.Consumer,null,(function(e){var t=e.activeTabId;return i.a.createElement(c,Object(r.a)({},u,{className:s(t)}))}))}g.propTypes=d,g.defaultProps={tag:"div"}},549:function(e,t,n){"use strict";var r,o=n(4),a=n(9),i=n(2),c=n(15),u=n(5),s=n(0),l=n.n(s),f=n(1),p=n.n(f),d=n(7),g=n.n(d),b=n(98),v=n(3);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=h(h({},b.Transition.propTypes),{},{isOpen:p.a.bool,children:p.a.oneOfType([p.a.arrayOf(p.a.node),p.a.node]),tag:v.o,className:p.a.node,navbar:p.a.bool,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.func,p.a.string,p.a.object])}),O=h(h({},b.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:v.c.Collapse}),j=((r={})[v.b.ENTERING]="collapsing",r[v.b.ENTERED]="collapse show",r[v.b.EXITING]="collapsing",r[v.b.EXITED]="collapse",r);function D(e){return e.scrollHeight}var E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind(Object(i.a)(n))})),n}Object(c.a)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:D(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:D(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,r=t.isOpen,i=t.className,c=t.navbar,u=t.cssModule,s=t.children,f=(t.innerRef,Object(a.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,d=Object(v.m)(f,v.a),y=Object(v.l)(f,v.a);return l.a.createElement(b.Transition,Object(o.a)({},d,{in:r,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var r=function(e){return j[e]||"collapse"}(t),a=Object(v.k)(g()(i,r,c&&"navbar-collapse"),u),f=null===p?null:{height:p};return l.a.createElement(n,Object(o.a)({},y,{style:h(h({},y.style),f),className:a,ref:e.props.innerRef}),s)}))},t}(s.Component);E.propTypes=m,E.defaultProps=O,t.a=E},590:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),a=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?a===t.replace(/\/.*$/,""):o===t}))}return!0}},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var r=n(0),o=n.n(r),a=n(1),i=n.n(a);function c(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(t){a(t)}}function c(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}Object.create;function s(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}Object.create;var l=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function f(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=l.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var p=[".DS_Store","Thumbs.db"];function d(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?b(e.dataTransfer,e.type):g(e))];var n}))}))}function g(e){return(null!==e.target&&e.target.files?y(e.target.files):[]).map((function(e){return f(e)}))}function b(e,t){return c(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return e.items?(n=y(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(h))]):[3,2];case 1:return[2,v(m(r.sent()))];case 2:return[2,v(y(e.files).map((function(e){return f(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===p.indexOf(e.name)}))}function y(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function h(e){if("function"!==typeof e.webkitGetAsEntry)return O(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?D(t):O(e)}function m(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}(e,Array.isArray(t)?m(t):[t])}),[])}function O(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=f(t);return Promise.resolve(n)}function j(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,e.isDirectory?D(e):E(e)]}))}))}function D(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var a=this;t.readEntries((function(t){return c(a,void 0,void 0,(function(){var a,i,c;return u(this,(function(u){switch(u.label){case 0:if(t.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return a=u.sent(),e(a),[3,4];case 3:return i=u.sent(),n(i),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(j)),r.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function E(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=f(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var w=n(590),P=n.n(w);function x(e,t){return"application/x-moz-file"===e.type||P()(e,t)}function F(e,t,n){if(k(e.size)){if(k(t)&&k(n))return e.size>=t&&e.size<=n;if(k(t))return e.size>=t;if(k(n))return e.size<=n}return!0}function k(e){return void 0!==e&&null!==e}function T(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize;return!(!e.multiple&&t.length>1)&&t.every((function(e){return x(e,n)&&F(e,r,o)}))}function A(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function C(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function S(e){e.preventDefault()}function N(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function R(e){return-1!==e.indexOf("Edge/")}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return N(e)||R(e)}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!A(e)&&t&&t.apply(void 0,[e].concat(r)),A(e)}))}}function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=Object(r.forwardRef)((function(e,t){var n=e.children,a=J(H(e,["children"])),i=a.open,c=H(a,["open"]);return Object(r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),o.a.createElement(r.Fragment,null,n(B({},c,{open:i})))}));_.displayName="Dropzone",_.propTypes={children:i.a.func,accept:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),multiple:i.a.bool,preventDropOnDocument:i.a.bool,noClick:i.a.bool,noKeyboard:i.a.bool,noDrag:i.a.bool,noDragEventsBubbling:i.a.bool,minSize:i.a.number,maxSize:i.a.number,disabled:i.a.bool,getFilesFromEvent:i.a.func,onFileDialogCancel:i.a.func,onDragEnter:i.a.func,onDragLeave:i.a.func,onDragOver:i.a.func,onDrop:i.a.func,onDropAccepted:i.a.func,onDropRejected:i.a.func};var q={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]};function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accept,n=e.disabled,o=void 0!==n&&n,a=e.getFilesFromEvent,i=void 0===a?d:a,c=e.maxSize,u=void 0===c?1/0:c,s=e.minSize,l=void 0===s?0:s,f=e.multiple,p=void 0===f||f,g=e.onDragEnter,b=e.onDragLeave,v=e.onDragOver,y=e.onDrop,h=e.onDropAccepted,m=e.onDropRejected,O=e.onFileDialogCancel,j=e.preventDropOnDocument,D=void 0===j||j,E=e.noClick,w=void 0!==E&&E,P=e.noKeyboard,k=void 0!==P&&P,N=e.noDrag,R=void 0!==N&&N,K=e.noDragEventsBubbling,_=void 0!==K&&K,J=Object(r.useRef)(null),X=Object(r.useRef)(null),$=Object(r.useReducer)(W,q),Q=L($,2),U=Q[0],V=Q[1],Y=U.isFocused,Z=U.isFileDialogActive,ee=U.draggedFiles,te=Object(r.useCallback)((function(){X.current&&(V({type:"openDialog"}),X.current.value=null,X.current.click())}),[V]),ne=function(){Z&&setTimeout((function(){X.current&&(X.current.files.length||(V({type:"closeDialog"}),"function"===typeof O&&O()))}),300)};Object(r.useEffect)((function(){return window.addEventListener("focus",ne,!1),function(){window.removeEventListener("focus",ne,!1)}}),[X,Z,O]);var re=Object(r.useCallback)((function(e){J.current&&J.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),te()))}),[J,X]),oe=Object(r.useCallback)((function(){V({type:"focus"})}),[]),ae=Object(r.useCallback)((function(){V({type:"blur"})}),[]),ie=Object(r.useCallback)((function(){w||(M()?setTimeout(te,0):te())}),[X,w]),ce=Object(r.useRef)([]),ue=function(e){J.current&&J.current.contains(e.target)||(e.preventDefault(),ce.current=[])};Object(r.useEffect)((function(){return D&&(document.addEventListener("dragover",S,!1),document.addEventListener("drop",ue,!1)),function(){D&&(document.removeEventListener("dragover",S),document.removeEventListener("drop",ue))}}),[J,D]);var se=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),ve(e),-1===ce.current.indexOf(e.target)&&(ce.current=[].concat(I(ce.current),[e.target])),C(e)&&Promise.resolve(i(e)).then((function(t){A(e)&&!_||(V({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),g&&g(e))}))}),[i,g,_]),le=Object(r.useCallback)((function(e){if(e.preventDefault(),e.persist(),ve(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return C(e)&&v&&v(e),!1}),[v,_]),fe=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),ve(e);var t=ce.current.filter((function(t){return t!==e.target&&J.current&&J.current.contains(t)}));ce.current=t,t.length>0||(V({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),C(e)&&b&&b(e))}),[J,b,_]),pe=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),ve(e),ce.current=[],C(e)&&Promise.resolve(i(e)).then((function(n){if(!A(e)||_){var r=[],o=[];n.forEach((function(e){x(e,t)&&F(e,l,u)?r.push(e):o.push(e)})),!p&&r.length>1&&o.push.apply(o,I(r.splice(0))),V({acceptedFiles:r,rejectedFiles:o,type:"setFiles"}),y&&y(r,o,e),o.length>0&&m&&m(o,e),r.length>0&&h&&h(r,e)}})),V({type:"reset"})}),[p,t,l,u,i,y,h,m,_]),de=function(e){return o?null:e},ge=function(e){return k?null:de(e)},be=function(e){return R?null:de(e)},ve=function(e){_&&e.stopPropagation()},ye=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onKeyDown,a=e.onFocus,i=e.onBlur,c=e.onClick,u=e.onDragEnter,s=e.onDragOver,l=e.onDragLeave,f=e.onDrop,p=H(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return B(G({onKeyDown:ge(z(r,re)),onFocus:ge(z(a,oe)),onBlur:ge(z(i,ae)),onClick:de(z(c,ie)),onDragEnter:be(z(u,se)),onDragOver:be(z(s,le)),onDragLeave:be(z(l,fe)),onDrop:be(z(f,pe))},n,J),o||k?{}:{tabIndex:0},{},p)}}),[J,re,oe,ae,ie,se,le,fe,pe,k,R,o]),he=Object(r.useCallback)((function(e){e.stopPropagation()}),[]),me=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,o=e.onChange,a=e.onClick,i=H(e,["refKey","onChange","onClick"]),c=G({accept:t,multiple:p,type:"file",style:{display:"none"},onChange:de(z(o,pe)),onClick:de(z(a,he)),autoComplete:"off",tabIndex:-1},r,X);return B({},c,{},i)}}),[X,t,p,pe,o]),Oe=ee.length,je=Oe>0&&T({files:ee,accept:t,minSize:l,maxSize:u,multiple:p}),De=Oe>0&&!je;return B({},U,{isDragAccept:je,isDragReject:De,isFocused:Y&&!o,getRootProps:ye,getInputProps:me,rootRef:J,inputRef:X,open:de(te)})}function W(e,t){switch(t.type){case"focus":return B({},e,{isFocused:!0});case"blur":return B({},e,{isFocused:!1});case"openDialog":return B({},e,{isFileDialogActive:!0});case"closeDialog":return B({},e,{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive;return B({},e,{draggedFiles:t.draggedFiles,isDragActive:n});case"setFiles":return B({},e,{acceptedFiles:t.acceptedFiles,rejectedFiles:t.rejectedFiles});case"reset":return B({},e,{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]});default:return e}}}}]);