(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[29],{501:function(e,a,t){"use strict";var s=t(6),o=t(10),r=t(0),n=t.n(r),c=t(1),l=t.n(c),i=t(5),u=t.n(i),d=t(2),m={tag:d.o,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.body,l=e.inverse,i=e.outline,m=e.tag,f=e.innerRef,b=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.k)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return n.a.createElement(m,Object(s.a)({},b,{className:p,ref:f}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},512:function(e,a,t){"use strict";var s=t(6),o=t(10),r=t(0),n=t.n(r),c=t(1),l=t.n(c),i=t(5),u=t.n(i),d=t(2),m=l.a.oneOfType([l.a.number,l.a.string]),f={tag:d.o,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,l=e.form,i=e.widths,m=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var s=e[a];if(delete m[a],s){var o=!t;f.push(o?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var b=Object(d.k)(u()(a,r?"no-gutters":null,l?"form-row":"row",f),t);return n.a.createElement(c,Object(s.a)({},m,{className:b}))};p.propTypes=f,p.defaultProps=b,a.a=p},513:function(e,a,t){"use strict";var s=t(6),o=t(10),r=t(0),n=t.n(r),c=t(1),l=t.n(c),i=t(5),u=t.n(i),d=t(2),m=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),b={tag:d.o,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,s){var o=e[a];if(delete l[a],o||""===o){var r=!s;if(Object(d.i)(o)){var n,c=r?"-":"-"+a+"-",m=g(r,a,o.size);i.push(Object(d.k)(u()(((n={})[m]=o.size||""===o.size,n["order"+c+o.order]=o.order||0===o.order,n["offset"+c+o.offset]=o.offset||0===o.offset,n)),t))}else{var f=g(r,a,o);i.push(f)}}})),i.length||i.push("col");var m=Object(d.k)(u()(a,i),t);return n.a.createElement(c,Object(s.a)({},l,{className:m}))};h.propTypes=b,h.defaultProps=p,a.a=h},675:function(e,a,t){"use strict";t.r(a);var s=t(7),o=t(0),r=t.n(o),n=t(28),c=t.n(n),l=t(512),i=t(513),u=t(501),d=t(436),m=t(238);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";a.default=function(e){var a=Object(o.useState)(!1),t=Object(s.a)(a,2),n=t[0],f=t[1],b=Object(o.useState)(!1),p=Object(s.a)(b,2),g=p[0],h=p[1];return Object(o.useEffect)((function(){var a=e.match.params.userkey;""!==a&&c.a.post("/backendapi/users/verify",{key:a},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){f(!0),h(!1)})).catch((function(e){f(!1),h(!0)}))}),[]),r.a.createElement(l.a,{className:"m-0"},r.a.createElement(i.a,{sm:"12"},r.a.createElement(u.a,{className:"auth-card bg-transparent shadow-none rounded-0 mb-0 w-100"},r.a.createElement(d.a,{className:"text-center"},r.a.createElement("h1",{className:"font-large-2 my-1",style:{color:n?"lightgreen":g?"red":"white"}},n?"Your email is successfully verified ! You can login now":g?"Link Expired !!!!!!!!!!!!!!!":"Please wait while we confirm your email ..."),r.a.createElement(m.a.Ripple,{tag:"p",onClick:function(){e.history.push("/login")},color:"primary",size:"lg",className:"mt-2",disabled:!n||g},n?"Go to Login":g?"Link Expired !":"Checking ...")))))}}}]);
//# sourceMappingURL=29.9db6a511.chunk.js.map