(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[10],{934:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var r=n(0),i=n.n(r),o=n(1),a=n.n(o),c=n(101),u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function l(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=u.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var s=[".DS_Store","Thumbs.db"];function f(e){return c.__awaiter(this,void 0,void 0,(function(){return c.__generator(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?d(e.dataTransfer,e.type):p(e))];var n}))}))}function p(e){return(null!==e.target&&e.target.files?v(e.target.files):[]).map((function(e){return l(e)}))}function d(e,t){return c.__awaiter(this,void 0,void 0,(function(){var n;return c.__generator(this,(function(r){switch(r.label){case 0:return e.items?(n=v(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(b))]):[3,2];case 1:return[2,g(y(r.sent()))];case 2:return[2,g(v(e.files).map((function(e){return l(e)})))]}}))}))}function g(e){return e.filter((function(e){return-1===s.indexOf(e.name)}))}function v(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function b(e){if("function"!==typeof e.webkitGetAsEntry)return m(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?h(t):m(e)}function y(e){return e.reduce((function(e,t){return c.__spread(e,Array.isArray(t)?y(t):[t])}),[])}function m(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=l(t);return Promise.resolve(n)}function D(e){return c.__awaiter(this,void 0,void 0,(function(){return c.__generator(this,(function(t){return[2,e.isDirectory?h(e):O(e)]}))}))}function h(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function i(){var o=this;t.readEntries((function(t){return c.__awaiter(o,void 0,void 0,(function(){var o,a,u;return c.__generator(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return o=c.sent(),e(o),[3,4];case 3:return a=c.sent(),n(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(D)),r.push(u),i(),c.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function O(e){return c.__awaiter(this,void 0,void 0,(function(){return c.__generator(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=l(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}function j(e,t){return"application/x-moz-file"===e.type||function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",i=e.type||"",o=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim();return"."===t.charAt(0)?r.toLowerCase().endsWith(t.toLowerCase()):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t)}function w(e,t,n){if(F(e.size)){if(F(t)&&F(n))return e.size>=t&&e.size<=n;if(F(t))return e.size>=t;if(F(n))return e.size<=n}return!0}function F(e){return void 0!==e&&null!==e}function A(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize;return!(!e.multiple&&t.length>1)&&t.every((function(e){return j(e,n)&&w(e,r,i)}))}function k(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function E(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function P(e){e.preventDefault()}function C(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function _(e){return-1!==e.indexOf("Edge/")}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return C(e)||_(e)}function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!k(e)&&t&&t.apply(void 0,[e].concat(r)),k(e)}))}}function z(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var B=Object(r.forwardRef)((function(e,t){var n=e.children,o=q(K(e,["children"])),a=o.open,c=K(o,["open"]);return Object(r.useImperativeHandle)(t,(function(){return{open:a}}),[a]),i.a.createElement(r.Fragment,null,n(R({},c,{open:a})))}));B.displayName="Dropzone",B.propTypes={children:a.a.func,accept:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),multiple:a.a.bool,preventDropOnDocument:a.a.bool,noClick:a.a.bool,noKeyboard:a.a.bool,noDrag:a.a.bool,noDragEventsBubbling:a.a.bool,minSize:a.a.number,maxSize:a.a.number,disabled:a.a.bool,getFilesFromEvent:a.a.func,onFileDialogCancel:a.a.func,onDragEnter:a.a.func,onDragLeave:a.a.func,onDragOver:a.a.func,onDrop:a.a.func,onDropAccepted:a.a.func,onDropRejected:a.a.func};var M={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]};function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accept,n=e.disabled,i=void 0!==n&&n,o=e.getFilesFromEvent,a=void 0===o?f:o,c=e.maxSize,u=void 0===c?1/0:c,l=e.minSize,s=void 0===l?0:l,p=e.multiple,d=void 0===p||p,g=e.onDragEnter,v=e.onDragLeave,b=e.onDragOver,y=e.onDrop,m=e.onDropAccepted,D=e.onDropRejected,h=e.onFileDialogCancel,O=e.preventDropOnDocument,F=void 0===O||O,C=e.noClick,_=void 0!==C&&C,L=e.noKeyboard,B=void 0!==L&&L,q=e.noDrag,J=void 0!==q&&q,N=e.noDragEventsBubbling,W=void 0!==N&&N,$=Object(r.useRef)(null),H=Object(r.useRef)(null),Q=Object(r.useReducer)(G,M),U=T(Q,2),V=U[0],X=U[1],Y=V.isFocused,Z=V.isFileDialogActive,ee=V.draggedFiles,te=Object(r.useCallback)((function(){H.current&&(X({type:"openDialog"}),H.current.value=null,H.current.click())}),[X]),ne=function(){Z&&setTimeout((function(){H.current&&(H.current.files.length||(X({type:"closeDialog"}),"function"===typeof h&&h()))}),300)};Object(r.useEffect)((function(){return window.addEventListener("focus",ne,!1),function(){window.removeEventListener("focus",ne,!1)}}),[H,Z,h]);var re=Object(r.useCallback)((function(e){$.current&&$.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),te()))}),[$,H]),ie=Object(r.useCallback)((function(){X({type:"focus"})}),[]),oe=Object(r.useCallback)((function(){X({type:"blur"})}),[]),ae=Object(r.useCallback)((function(){_||(S()?setTimeout(te,0):te())}),[H,_]),ce=Object(r.useRef)([]),ue=function(e){$.current&&$.current.contains(e.target)||(e.preventDefault(),ce.current=[])};Object(r.useEffect)((function(){return F&&(document.addEventListener("dragover",P,!1),document.addEventListener("drop",ue,!1)),function(){F&&(document.removeEventListener("dragover",P),document.removeEventListener("drop",ue))}}),[$,F]);var le=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e),-1===ce.current.indexOf(e.target)&&(ce.current=[].concat(z(ce.current),[e.target])),E(e)&&Promise.resolve(a(e)).then((function(t){k(e)&&!W||(X({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),g&&g(e))}))}),[a,g,W]),se=Object(r.useCallback)((function(e){if(e.preventDefault(),e.persist(),be(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return E(e)&&b&&b(e),!1}),[b,W]),fe=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e);var t=ce.current.filter((function(t){return t!==e.target&&$.current&&$.current.contains(t)}));ce.current=t,t.length>0||(X({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),E(e)&&v&&v(e))}),[$,v,W]),pe=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e),ce.current=[],E(e)&&Promise.resolve(a(e)).then((function(n){if(!k(e)||W){var r=[],i=[];n.forEach((function(e){j(e,t)&&w(e,s,u)?r.push(e):i.push(e)})),!d&&r.length>1&&i.push.apply(i,z(r.splice(0))),X({acceptedFiles:r,rejectedFiles:i,type:"setFiles"}),y&&y(r,i,e),i.length>0&&D&&D(i,e),r.length>0&&m&&m(r,e)}})),X({type:"reset"})}),[d,t,s,u,a,y,m,D,W]),de=function(e){return i?null:e},ge=function(e){return B?null:de(e)},ve=function(e){return J?null:de(e)},be=function(e){W&&e.stopPropagation()},ye=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onKeyDown,o=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=K(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return R(I({onKeyDown:ge(x(r,re)),onFocus:ge(x(o,ie)),onBlur:ge(x(a,oe)),onClick:de(x(c,ae)),onDragEnter:ve(x(u,le)),onDragOver:ve(x(l,se)),onDragLeave:ve(x(s,fe)),onDrop:ve(x(f,pe))},n,$),i||B?{}:{tabIndex:0},{},p)}}),[$,re,ie,oe,ae,le,se,fe,pe,B,J,i]),me=Object(r.useCallback)((function(e){e.stopPropagation()}),[]),De=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,i=e.onChange,o=e.onClick,a=K(e,["refKey","onChange","onClick"]),c=I({accept:t,multiple:d,type:"file",style:{display:"none"},onChange:de(x(i,pe)),onClick:de(x(o,me)),autoComplete:"off",tabIndex:-1},r,H);return R({},c,{},a)}}),[H,t,d,pe,i]),he=ee.length,Oe=he>0&&A({files:ee,accept:t,minSize:s,maxSize:u,multiple:d}),je=he>0&&!Oe;return R({},V,{isDragAccept:Oe,isDragReject:je,isFocused:Y&&!i,getRootProps:ye,getInputProps:De,rootRef:$,inputRef:H,open:de(te)})}function G(e,t){switch(t.type){case"focus":return R({},e,{isFocused:!0});case"blur":return R({},e,{isFocused:!1});case"openDialog":return R({},e,{isFileDialogActive:!0});case"closeDialog":return R({},e,{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive;return R({},e,{draggedFiles:t.draggedFiles,isDragActive:n});case"setFiles":return R({},e,{acceptedFiles:t.acceptedFiles,rejectedFiles:t.rejectedFiles});case"reset":return R({},e,{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]});default:return e}}}}]);
//# sourceMappingURL=10.19029e27.chunk.js.map