(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[11],{503:function(e,t,a){},508:function(e,t,a){},516:function(e,t,a){"use strict";a.d(t,"f",(function(){return f})),a.d(t,"g",(function(){return p})),a.d(t,"e",(function(){return b})),a.d(t,"d",(function(){return v})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return y})),a.d(t,"h",(function(){return j}));var n=a(31),r=a.n(n),o=a(50),i=a(96);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(i.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw r}}}}var c=a(24),s=a.n(c),u=a(501),d=a(41);s.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var m=function(e){var t,a=l(null===e||void 0===e?void 0:e.data);try{for(a.s();!(t=a.n()).done;){var n=t.value;(null===n||void 0===n?void 0:n.spendId)&&(n.spendId=Object(d.a)(null===n||void 0===n?void 0:n.spendId)),(null===n||void 0===n?void 0:n.item)&&(n.item=Object(d.a)(null===n||void 0===n?void 0:n.item)),(null===n||void 0===n?void 0:n.label)&&(n.label=Object(d.a)(null===n||void 0===n?void 0:n.label)),(null===n||void 0===n?void 0:n.amount)&&(n.amount=Object(d.a)(null===n||void 0===n?void 0:n.amount)),(null===n||void 0===n?void 0:n.desc)&&(n.desc=Object(d.a)(null===n||void 0===n?void 0:n.desc))}}catch(r){a.e(r)}finally{a.f()}return e},f=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_ALL_DATA_LOADING",data:!0}),t.next=4,s.a.get("/backendapi/nominee/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"GET_ALL_DATA_LOADING",data:!1});var n,r=l(null===t||void 0===t?void 0:t.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.nomineeId=(null===o||void 0===o?void 0:o.nomineeId)&&Object(d.a)(o.nomineeId,!0),o.name=(null===o||void 0===o?void 0:o.name)&&Object(d.a)(o.name,!0),o.relation=(null===o||void 0===o?void 0:o.relation)&&Object(d.a)(o.relation,!0),o.email=(null===o||void 0===o?void 0:o.email)&&Object(d.a)(o.email,!0),o.primaryContact=(null===o||void 0===o?void 0:o.primaryContact)&&Object(d.a)(o.primaryContact,!0),o.secondaryContact=(null===o||void 0===o?void 0:o.secondaryContact)&&Object(d.a)(o.secondaryContact,!0),o.address=(null===o||void 0===o?void 0:o.address)&&Object(d.a)(o.address,!0)}}catch(i){r.e(i)}finally{r.f()}a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a({type:"GET_SPEND_DATA_LOADING",data:!0}),t.next=4,s.a.get("/backendapi/spend/list/"+n._id,{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){var n;console.log("getSpendData"),a({type:"GET_SPEND_DATA_LOADING",data:!1}),a({type:"GET_DATA",data:null===(n=m(t))||void 0===n?void 0:n.data,totalPages:t.length,params:e})})).catch((function(e){console.log(e),a({type:"GET_SPEND_DATA_LOADING",data:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(t){return t({type:"FILTER_SPEND_DATA",value:e})}},v=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},g=function(e){return function(t){console.log("DELETE DATA :"),s.a.post("/backendapi/nominee/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},h=function(e){return function(t){console.log("DELETE DATA :"),s.a.post("/backendapi/spend/delete",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},y=function(e){var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(t.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/backendapi/nominee/add",t,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){u.b.success("Nominee Added Successfully"),a(f())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a={_id:e._id,usage:e.usage?e.usage:"Unused",userId:t._id,name:Object(d.b)(e.name,!0),relation:Object(d.b)(e.relation,!0),email:Object(d.b)(e.email,!0),primaryContact:Object(d.b)(e.contact1,!0),secondaryContact:Object(d.b)(e.contact2,!0),address:Object(d.b)(e.address,!0)};return"others"===e.relation&&e.relation1&&(a.relation=Object(d.b)(e.relation1,!0)),function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/backendapi/nominee/update",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){u.b.success("Nominee Updated Successfully")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},524:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,o=e.size,i=void 0===o?24:o,s=c(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("polyline",{points:"3 6 5 6 21 6"}),r.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Trash",t.a=s},545:function(e,t,a){},546:function(e,t,a){var n=a(548);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},548:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},576:function(e,t,a){"use strict";var n=a(577),r=a(581),o=a(582),i=a(586),l=a(587),c=a(588),s=a(589);function u(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function m(e,t){return t.decode?l(e):e}function f(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){var t=(e=f(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function v(e,t){u((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};case"comma":case"separator":return function(t,a,n){var r="string"===typeof a&&a.includes(e.arrayFormatSeparator),o="string"===typeof a&&!r&&m(a,e).includes(e.arrayFormatSeparator);a=o?m(a,e):a;var i=r||o?a.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===a?a:m(a,e);n[t]=i};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t),o=Object.create(null);if("string"!==typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;var i,l=r(e.split("&"));try{for(l.s();!(i=l.n()).done;){var s=i.value;if(""!==s){var d=c(t.decode?s.replace(/\+/g," "):s,"="),f=n(d,2),p=f[0],v=f[1];v=void 0===v?null:["comma","separator"].includes(t.arrayFormat)?v:m(v,t),a(m(p,t),v,o)}}}catch(w){l.e(w)}finally{l.f()}for(var g=0,h=Object.keys(o);g<h.length;g++){var y=h[g],j=o[y];if("object"===typeof j&&null!==j)for(var O=0,E=Object.keys(j);O<E.length;O++){var S=E[O];j[S]=b(j[S],t)}else o[y]=b(j,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var a=o[t];return Boolean(a)&&"object"===typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"===typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))}t.extract=p,t.parse=v,t.stringify=function(e,t){if(!e)return"";u((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var a=function(a){return t.skipNull&&(null===(n=e[a])||void 0===n)||t.skipEmptyString&&""===e[a];var n},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(a,n){var r=a.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:[].concat(o(a),null===n?[[d(t,e),"[",r,"]"].join("")]:[[d(t,e),"[",d(r,e),"]=",d(n,e)].join("")])}};case"bracket":return function(t){return function(a,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:[].concat(o(a),null===n?[[d(t,e),"[]"].join("")]:[[d(t,e),"[]=",d(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(a,n){return null===n||void 0===n||0===n.length?a:0===a.length?[[d(t,e),"=",d(n,e)].join("")]:[[a,d(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(a,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?a:[].concat(o(a),null===n?[d(t,e)]:[[d(t,e),"=",d(n,e)].join("")])}}}}(t),r={},i=0,l=Object.keys(e);i<l.length;i++){var c=l[i];a(c)||(r[c]=e[c])}var s=Object.keys(r);return!1!==t.sort&&s.sort(t.sort),s.map((function(a){var r=e[a];return void 0===r?"":null===r?d(a,t):Array.isArray(r)?r.reduce(n(a),[]).join("&"):d(a,t)+"="+d(r,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var a=c(e,"#"),r=n(a,2),o=r[0],i=r[1];return Object.assign({url:o.split("?")[0]||"",query:v(p(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,a){a=Object.assign({encode:!0,strict:!0},a);var n=f(e.url).split("?")[0]||"",r=t.extract(e.url),o=t.parse(r,{sort:!1}),i=Object.assign(o,e.query),l=t.stringify(i,a);l&&(l="?".concat(l));var c=function(e){var t="",a=e.indexOf("#");return-1!==a&&(t=e.slice(a)),t}(e.url);return e.fragmentIdentifier&&(c="#".concat(d(e.fragmentIdentifier,a))),"".concat(n).concat(l).concat(c)},t.pick=function(e,a,n){n=Object.assign({parseFragmentIdentifier:!0},n);var r=t.parseUrl(e,n),o=r.url,i=r.query,l=r.fragmentIdentifier;return t.stringifyUrl({url:o,query:s(i,a),fragmentIdentifier:l},n)},t.exclude=function(e,a,n){var r=Array.isArray(a)?function(e){return!a.includes(e)}:function(e,t){return!a(e,t)};return t.pick(e,r,n)}},577:function(e,t,a){var n=a(578),r=a(579),o=a(546),i=a(580);e.exports=function(e,t){return n(e)||r(e,t)||o(e,t)||i()}},578:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},579:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}}},580:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},581:function(e,t,a){var n=a(546);e.exports=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}},582:function(e,t,a){var n=a(583),r=a(584),o=a(546),i=a(585);e.exports=function(e){return n(e)||r(e)||o(e)||i()}},583:function(e,t,a){var n=a(548);e.exports=function(e){if(Array.isArray(e))return n(e)}},584:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},585:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},586:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},587:function(e,t,a){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(r){}if(1===e.length)return e;t=t||1;var a=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(a),o(n))}function i(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(n),a=1;a<t.length;a++)t=(e=o(t,a).join("")).match(n);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var a={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=r.exec(e);n;){try{a[n[0]]=decodeURIComponent(n[0])}catch(t){var o=i(n[0]);o!==n[0]&&(a[n[0]]=o)}n=r.exec(e)}a["%C2"]="\ufffd";for(var l=Object.keys(a),c=0;c<l.length;c++){var s=l[c];e=e.replace(new RegExp(s,"g"),a[s])}return e}(e)}}},588:function(e,t,a){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var a=e.indexOf(t);return-1===a?[e]:[e.slice(0,a),e.slice(a+t.length)]}},589:function(e,t,a){"use strict";e.exports=function(e,t){for(var a={},n=Object.keys(e),r=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],l=e[i];(r?-1!==t.indexOf(i):t(i,l,e))&&(a[i]=l)}return a}},644:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(448),i=a(449),l=a(8),c=a(41),s=a(500),u=a(447),d=a(515),m=a(501),f=a(523),p=a.n(f),b=a(7),v=a.n(b),g=a(477),h=a(478),y=a(524),j=a(497),O=a(20),E=a(165),S=a(516),w=(a(513),a(503),a(450)),D=a(451),x=a(254),k=a(421),I=a(117),A=a.n(I),N=a(454),C=a(17),F=a(162),L=function(e){var t=Object(n.useState)("Cigretes"),a=Object(l.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)("other"),s=Object(l.a)(c,2),d=s[0],f=s[1],p=Object(n.useState)(""),b=Object(l.a)(p,2),g=b[0],h=b[1],y=Object(n.useState)(""),j=Object(l.a)(y,2),O=j[0],E=j[1],S=Object(n.useState)(""),I=Object(l.a)(S,2),L=I[0],T=I[1],_=Object(n.useState)(""),U=Object(l.a)(_,2),R=U[0],z=U[1],P=Object(n.useState)(""),B=Object(l.a)(P,2),G=B[0],V=B[1],W=Object(n.useState)(!1),J=Object(l.a)(W,2),q=J[0],H=J[1],M=Object(n.useState)(""),$=Object(l.a)(M,2),K=$[0],Y=$[1],Q=Object(n.useState)(""),X=Object(l.a)(Q,2),Z=X[0],ee=X[1],te=Object(n.useState)(""),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],oe=Object(n.useState)(""),ie=Object(l.a)(oe,2),le=ie[0],ce=ie[1],se=Object(n.useState)(""),ue=Object(l.a)(se,2),de=ue[0],me=ue[1],fe=Object(n.useState)(""),pe=Object(l.a)(fe,2),be=pe[0],ve=pe[1],ge=function(){z(""),V(""),i("Cigretes"),f(""),h(""),E(""),T("")},he=function(){me(""),re(""),ce(""),Y(""),ve("")};Object(n.useEffect)((function(){if(e.data){var t=e.data,a=t.id,n=t.name,r=t.relation,o=t.address,l=t.date,c=t.primaryContact;he(),z(a),V(n),i(r),"Cigretes"!==r&&"Drink"!==r&&"Fees"!==r&&"Fuel"!==r&&"Groceries"!==r&&"Party"!==r&&"Rent"!==r&&"Snacks"!==r&&"Travel"!==r&&(i("others"),f(r)),E(o),h(l),T(c)}e.data&&!q||(ge(),he()),H(!1)}),[e.data]);var ye=function(){return me("Enter Valid Item")},je=function(){return re("Enter Valid Description")},Oe=function(){return ce("Enter Valid Price")},Ee=function(){return ee("Enter Valid Label")},Se=function(){return Y("Enter Valid Label")},we=function(){return ve("Enter Valid date")},De=function(e){var t=e.target.name,a=e.target.value;switch(t){case"item":V(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&me("");break;case"desc":E(a),a&&a.trim()&&re("");break;case"date":h(a),a&&a.trim()&&ve("");break;case"price":T(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ce("");break;case"label":i(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&ee("");break;case"otherLabel":f(a),(null===a||void 0===a?void 0:a.length)&&a.trim()&&Y("")}},xe=function(e){var t=e.target.name,a=e.target.value;switch(t){case"item":(null===a||void 0===a?void 0:a.length)&&a.trim()?me(""):ye();break;case"desc":a&&a.trim()?re(""):je();break;case"price":(null===a||void 0===a?void 0:a.length)&&a.trim()?ce(""):Oe();break;case"date":(null===a||void 0===a?void 0:a.length)&&a.trim()?ve(""):we();break;case"label":(null===a||void 0===a?void 0:a.length)&&a.trim()?ee(""):Ee();break;case"otherLabel":(null===a||void 0===a?void 0:a.length)&&a.trim()?Y(""):Se()}},ke=function(){if(!(null===G||void 0===G?void 0:G.length)&&ye(),!(null===g||void 0===g?void 0:g.length)&&we(),!(null===O||void 0===O?void 0:O.length)&&je(),!(null===L||void 0===L?void 0:L.length)&&Oe(),!(null===o||void 0===o?void 0:o.length)&&Ee(),"others"===o&&!(null===d||void 0===d?void 0:d.length)&&Se(),de||!(null===G||void 0===G?void 0:G.length)||Z||!(null===o||void 0===o?void 0:o.length)||K||"others"===o&&!(null===d||void 0===d?void 0:d.length)||ne||!(null===O||void 0===O?void 0:O.length)||le||!(null===L||void 0===L?void 0:L.length)||be||!(null===g||void 0===g?void 0:g.length))m.b.error("Kindly Fill Mandatory fields");else if(e.isLoading)null!==e.data?m.b.warning("Updating still in process"):m.b.warning("Adding Spend in process");else{var t={relation:null===o||void 0===o?void 0:o.trim(),relation1:null===d||void 0===d?void 0:d.trim(),date:null===g||void 0===g?void 0:g.trim(),address:null===O||void 0===O?void 0:O.trim(),contact1:null===L||void 0===L?void 0:L.trim(),_id:null===R||void 0===R?void 0:R.trim(),name:null===G||void 0===G?void 0:G.trim()};null!==e.data?(t._id=e.data._id,t.usage=e.data.usage,e.updateData(t)):(H(!0),e.addData(t),ge(),he())}},Ie=e.show,Ae=e.handleSidebar,Ne=e.data;return r.a.createElement("div",{className:v()("data-list-sidebar",{show:Ie})},r.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},r.a.createElement("h4",null,null!==Ne?"UPDATE SPEND DETAILS":"ADD NEW SPEND"),r.a.createElement(k.a,{size:20,onClick:function(){Ae(!1,!0),ge(),he()}})),r.a.createElement(A.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},r.a.createElement(w.a,{className:"form-label-group"},r.a.createElement(u.a,{className:"input-label",type:"text",name:"item",value:G,placeholder:"Item",id:"data-name",onChange:De,onBlur:xe,style:{borderColor:de?"red":""}}),r.a.createElement(D.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Item"),de&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},de)),r.a.createElement(w.a,null,r.a.createElement(u.a,{type:"select",id:"data-category",value:o,name:"label",onChange:De,onBlur:xe},r.a.createElement("option",null,"Cigretes"),r.a.createElement("option",null,"Drink"),r.a.createElement("option",null,"Fees"),r.a.createElement("option",null,"Fuel"),r.a.createElement("option",null,"Groceries"),r.a.createElement("option",null,"Party"),r.a.createElement("option",null,"Rent"),r.a.createElement("option",null,"Snacks"),r.a.createElement("option",null,"Travel"),r.a.createElement("option",null,"others")),r.a.createElement(D.a,{className:"dark"===C.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Label *")),"others"===o&&r.a.createElement(w.a,null,r.a.createElement(u.a,{className:"input-label",type:"text",value:d,name:"otherLabel",placeholder:"Label Name",id:"data-name",onChange:De,onBlur:xe,style:{borderColor:K?"red":""}}),K&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},K)),r.a.createElement(w.a,{className:"form-label-group"},r.a.createElement(u.a,{className:"input-label",type:"date",value:g,name:"date",placeholder:"Enter Date",id:"data-name",onChange:De,onBlur:xe,style:{borderColor:be?"red":""}}),r.a.createElement(D.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Date *"),be&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},be)),r.a.createElement(w.a,{className:"form-label-group"},r.a.createElement(u.a,{className:"input-label",type:"number",onKeyPress:function(e){return Object(F.a)(e)},value:L,id:"data-price",name:"price",placeholder:"Enter spend amount",onChange:De,onBlur:xe,style:{borderColor:le?"red":""}}),r.a.createElement(D.a,{for:"data-price",className:"dark"===C.a.theme?"dark-label":"light-label"},"Amount *"),le&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},le)),r.a.createElement(w.a,{className:"form-label-group"},r.a.createElement(u.a,{className:"input-label ",type:"textarea",value:O,name:"desc",placeholder:"Description",id:"data-name",onChange:De,onBlur:xe,style:{borderColor:ne?"red":"",height:"115px"}}),r.a.createElement(D.a,{className:"dark"===C.a.theme?"dark-label":"light-label",for:"data-name"},"Description *"),ne&&r.a.createElement("span",{style:{color:"red",fontSize:"0.8rem"}},ne))),r.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},r.a.createElement(x.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){Ae(!1,!0),ge(),he()}},"Cancel"),r.a.createElement(x.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return ke()}},e.isLoading&&r.a.createElement(N.a,{color:"danger",size:"sm"})," ",null!==Ne?e.isLoading?"Updating...":"Update":e.isLoading?"Adding...":"Add")))},T=a(24),_=a.n(T);a(545),a(508);_.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var U={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},R=function(e){return r.a.createElement("div",{className:"data-list-action"},window.screen.width>500?r.a.createElement(g.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){return e.currentData(e.row)}}):r.a.createElement(h.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){return e.currentData(e.row)}}))},z=function(e){return r.a.createElement("div",{className:"data-list-action"},r.a.createElement(y.a,{style:{cursor:"pointer"},size:window.screen.width<500?13:20,onClick:function(){return e.setRow()}}))},P=function(e){return r.a.createElement("div",{className:"data-list-header d-flex justify-content-between"},r.a.createElement("div",{className:"actions-left d-flex"},r.a.createElement(s.a,{color:"white",className:"sort-dropdown mx-50",style:{height:"75%",backgroundColor:"var(--warning)",fontWeight:"bold"},outline:!0,onClick:function(){return e.handleSidebar(!0,!0)}},r.a.createElement("span",{className:"align-middle"},"Add"))),r.a.createElement("div",{className:"actions-right d-flex"},r.a.createElement("div",{className:"filter-section"},r.a.createElement(u.a,{type:"text",style:{height:"75%",borderRadius:"5rem",fontSize:"1rem"},onChange:function(t){return e.handleFilter(t)},placeholder:"Find",className:"placeholder"}))))},B=[{when:function(e){return new Date(e.date)<new Date},style:{backgroundColor:"#adadad",color:""}}],G=Object(O.b)((function(e){var t=e.dataList.data;return t.map((function(e){var t,a=null===e||void 0===e||null===(t=e.date)||void 0===t?void 0:t.split("T");return e.date=null===a||void 0===a?void 0:a[0],e})),{dataList:e.dataList,listLoading:e.dataList.spendLoading,data:t}}),(function(e){return{deleteSpendData:function(t){return e(Object(S.c)(t))},getSpendData:function(t){return e(Object(S.g)(t))},addData:function(t){return e(Object(S.a)(t))},updateData:function(t){return e(Object(S.h)(t))},filterSpendData:function(t){return e(Object(S.e)(t))}}}))((function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(!1),u=Object(l.a)(s,2),f=u[0],b=u[1],g=Object(n.useState)(""),h=Object(l.a)(g,2),y=h[0],O=h[1],S=Object(n.useState)([]),w=Object(l.a)(S,2),D=w[0],x=w[1],k=Object(n.useState)(""),I=Object(l.a)(k,2),A=I[0],N=I[1],C=Object(n.useState)(4),F=Object(l.a)(C,2),T=F[0],G=F[1],V=Object(n.useState)(!1),W=Object(l.a)(V,2),J=W[0],q=W[1],H=Object(n.useState)(null),M=Object(l.a)(H,2),$=M[0],K=M[1],Y=Object(n.useState)(0),Q=Object(l.a)(Y,2),X=Q[0],Z=Q[1],ee=Object(n.useState)([]),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),oe=Object(l.a)(re,2),ie=oe[0],le=oe[1],ce=Object(n.useState)(!1),se=Object(l.a)(ce,2),ue=se[0],de=se[1],me=[{name:"Edit",cell:function(t){return r.a.createElement(R,{row:t,getSpendData:e.getSpendData,parsedFilter:e.parsedFilter,currentData:be})}},{name:"Item",selector:"item",sortable:!0,minWidth:"200px",cell:function(e){return r.a.createElement("p",{title:e.item,className:"text-truncate text-bold-500 mb-0"},e.item)}},{name:"Description",selector:"desc",minWidth:"150px",sortable:!0},{name:"Label",selector:"label",sortable:!0},{name:"Date",minWidth:"200px",selector:"date",sortable:!0},{name:"Amount",selector:"amount",minWidth:"150px",sortable:!0},{name:"Delete",cell:function(t){return r.a.createElement(z,{row:t,setRow:function(){O(t),b(!0)},getSpendData:e.getSpendData,parsedFilter:e.parsedFilter})}}],fe=[{name:"Info",width:"50px",cell:function(t){return r.a.createElement(R,{row:t,getData:e.getSpendData,parsedFilter:e.parsedFilter,currentData:be})}},{name:"Item",selector:"item",sortable:!0,minWidth:"50px",cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.item,className:"text-truncate text-bold-500 mb-0"},e.item)}},{name:"Amount",selector:"amount",maxWidth:"50px",sortable:!0,cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.amount,className:"text-truncate text-bold-500 mb-0"},e.amount)}},{name:"Trash",width:"50px",cell:function(t){return r.a.createElement(z,{row:t,getSpendData:e.getSpendData,parsedFilter:e.parsedFilter,setRow:function(){b(!0),O(t)}})}}];Object(n.useEffect)((function(){var t;(null===e||void 0===e?void 0:e.data)&&(i(null===e||void 0===e?void 0:e.data),x(e.dataList.allData),G(parseInt(null===(t=e.parsedFilter)||void 0===t?void 0:t.perPage)),Z(e.dataList.totalRecords),ne(e.dataList.sortIndex))}),[e.data]),Object(n.useEffect)((function(){e.getSpendData(e.parsedFilter)}),[]);var pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];q(e),!0===t&&(K(null),le(!0))},be=function(e){e.name=e.item,e.relation1=e.label,e.relation=e.label,e.address=e.desc,e.primaryContact=e.amount,K(e),pe(!0)};return e.listLoading?r.a.createElement("div",{className:"fallback-spinner vh-100"},r.a.createElement(E.a,{color:"danger",size:"sm"})):r.a.createElement("div",{className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},r.a.createElement(d.a,{handleConfirm:function(){e.deleteSpendData(y),e.getSpendData(e.parsedFilter),b(!1)},isOpen:f,closeModal:function(){return b(!1)}}),r.a.createElement(p.a,{width:"200",columns:window.screen.width<500?fe:me,data:A.length?o:D,noHeader:!0,subHeader:!0,selectableRows:(window.screen.width,!1),responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,conditionalRowStyles:B,customStyles:U,subHeaderComponent:r.a.createElement(P,{handleSidebar:pe,handleFilter:function(t){N(t.target.value),e.filterSpendData(t.target.value)},handleRowsPerPage:function(e){},rowsPerPage:T,total:X,index:ae}),sortIcon:r.a.createElement(j.a,null)}),r.a.createElement(L,{show:J,data:$,updateData:function(t){if(""===t.name||""===t.relation1&&"others"===t.relation||""===t.relation||""===t.email||""===t.date||""===t.contact1||""===t.address)m.b.error("Please Fill All Mandatory Details");else{de(!0),console.log("aaquib",t);var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},n={_id:t._id,userId:a._id,item:Object(c.b)(t.name),label:Object(c.b)(t.relation1),date:t.date,amount:Object(c.b)(t.contact1),desc:Object(c.b)(t.address)};_.a.post("/backendapi/spend/update",n,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){de(!1),m.b.success("Spend Updated Successfully"),pe(!1,!0),e.getSpendData(e.parsedFilter)})).catch((function(e){de(!1),m.b.error("Add Nominee Failed! Please contact admin")})),console.log("aaquib",n)}},addData:function(t){if(""===t.name||""===t.relation1&&"others"===t.relation||""===t.relation||""===t.email||""===t.date||""===t.contact1||""===t.address)m.b.error("Please Fill All Mandatory Details");else{de(!0),console.log("aaquib",t);var a={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,item:Object(c.b)(t.name),label:Object(c.b)(t.relation),date:t.date,amount:Object(c.b)(t.contact1),desc:Object(c.b)(t.address)};"others"===t.relation&&t.relation1&&(a.relation=Object(c.b)(t.relation1,!0)),_.a.post("/backendapi/spend/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){de(!1),m.b.success("Spend Added Successfully"),pe(!1,!0),e.getSpendData(e.parsedFilter)})).catch((function(e){de(!1),m.b.error("Add Spend Failed! Please contact admin")}))}},isLoading:ue,handleSidebar:pe,thumbView:e.thumbView,getSpendData:e.getSpendData,dataParams:e.parsedFilter,addNew:ie}),r.a.createElement("div",{className:v()("data-list-overlay",{show:J}),onClick:function(){return pe(!1,!0)}}))})),V=a(576),W=a.n(V);t.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"warning spacing nodisplay"},"Daily Spends"),r.a.createElement(o.a,null,r.a.createElement(m.a,null),r.a.createElement(i.a,{sm:"12"},r.a.createElement(G,{parsedFilter:W.a.parse(e.location.search)}))))}}}]);