(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[24],{514:function(e,a,t){"use strict";var n=t(4),r=t(9),o=t(0),s=t.n(o),c=t(1),i=t.n(c),l=t(7),u=t.n(l),d=t(3),m={tag:d.o,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,i=e.inverse,l=e.outline,m=e.tag,b=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.k)(u()(a,"card",!!i&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),t);return s.a.createElement(m,Object(n.a)({},f,{className:p,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},634:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(0),o=t.n(r),s=t(24),c=t.n(s),i=t(448),l=t(449),u=t(514),d=t(446),m=t(254);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";a.default=function(e){var a=Object(r.useState)(!1),t=Object(n.a)(a,2),s=t[0],b=t[1],f=Object(r.useState)(!1),p=Object(n.a)(f,2),h=p[0],g=p[1];return Object(r.useEffect)((function(){var a=e.match.params.userkey;""!==a&&c.a.post("/backendapi/users/verify",{key:a},{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){b(!0),g(!1)})).catch((function(e){b(!1),g(!0)}))}),[]),o.a.createElement(i.a,{className:"m-0"},o.a.createElement(l.a,{sm:"12"},o.a.createElement(u.a,{className:"auth-card bg-transparent shadow-none rounded-0 mb-0 w-100"},o.a.createElement(d.a,{className:"text-center"},o.a.createElement("h1",{className:"font-large-2 my-1",style:{color:s?"lightgreen":h?"red":"white"}},s?"Your email is successfully verified ! You can login now":h?"Link Expired !!!!!!!!!!!!!!!":"Please wait while we confirm your email ..."),o.a.createElement(m.a.Ripple,{tag:"p",onClick:function(){e.history.push("/login")},color:"primary",size:"lg",className:"mt-2",disabled:!s||h},s?"Go to Login":h?"Link Expired !":"Checking ...")))))}}}]);