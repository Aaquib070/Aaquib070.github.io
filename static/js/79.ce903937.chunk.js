(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[79],{2011:function(e,a,t){e.exports=t.p+"static/media/reset-password.01a139f9.png"},2049:function(e,a,t){"use strict";t.r(a);var n=t(11),s=t(12),r=t(14),l=t(13),o=t(0),c=t.n(o),i=t(1268),u=t(1269),m=t(1270),p=t(1271),d=t(1272),f=t(1273),b=t(826),g=t(817),h=t(812),y=t(822),j=t(175),v=t(22),E=t(2011),N=t.n(E),O=(t(869),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(i.a,{className:"m-0 justify-content-center"},c.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},c.a.createElement(m.a,{className:"bg-authentication rounded-0 mb-0 w-100"},c.a.createElement(i.a,{className:"m-0"},c.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-5"},c.a.createElement("img",{className:"px-5 mx-2",src:N.a,alt:"resetImg"})),c.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},c.a.createElement(m.a,{className:"rounded-0 mb-0 px-2 py-50"},c.a.createElement(p.a,{className:"pb-1 pt-1"},c.a.createElement(d.a,null,c.a.createElement("h4",{className:"mb-0"},"Reset Password"))),c.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and new password to continue."),c.a.createElement(f.a,{className:"pt-1"},c.a.createElement(b.a,null,c.a.createElement(g.a,{className:"form-label-group"},c.a.createElement(h.a,{type:"email",placeholder:"Email",required:!0}),c.a.createElement(y.a,null,"Email")),c.a.createElement(g.a,{className:"form-label-group"},c.a.createElement(h.a,{type:"password",placeholder:"Password",required:!0}),c.a.createElement(y.a,null,"Password")),c.a.createElement(g.a,{className:"form-label-group"},c.a.createElement(h.a,{type:"password",placeholder:"Confirm Password",required:!0}),c.a.createElement(y.a,null,"Confirm Password")),c.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-sm-row flex-column"},c.a.createElement(j.a.Ripple,{block:!0,className:"btn-block",color:"primary",outline:!0,onClick:function(e){e.preventDefault(),v.a.push("/pages/login")}},"Go Back to Login"),c.a.createElement(j.a.Ripple,{block:!0,color:"primary",type:"submit",className:"btn-block mt-1 mt-sm-0",onClick:function(e){return e.preventDefault()}},"Reset"))))))))))}}]),t}(c.a.Component));a.default=O},812:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(10),l=t(15),o=t(0),c=t.n(o),i=t(1),u=t.n(i),m=t(3),p=t.n(m),d=t(4),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,m=e.addon,f=e.plaintext,b=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),j=u||("select"===r||"textarea"===r?r:"input"),v="form-control";f?(v+="-plaintext",j=u||"input"):"file"===r?v+="-file":"range"===r?v+="-range":h&&(v=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var E=Object(d.mapToCssModules)(p()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,v),t);return("input"===j||u&&"function"===typeof u)&&(g.type=r),g.children&&!f&&"select"!==r&&"string"===typeof j&&"select"!==j&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(j,Object(n.a)({},g,{ref:b,className:E,"aria-invalid":i}))},a}(c.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},817:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(3),u=t.n(i),m=t(4),p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,c=e.check,i=e.inline,p=e.tag,d=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(m.mapToCssModules)(u()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===p&&(d.disabled=o),l.a.createElement(p,Object(n.a)({},d,{className:f}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},822:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(3),u=t.n(i),m=t(4),p=c.a.oneOfType([c.a.number,c.a.string]),d=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,d=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];o.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var r,l=!n;if(Object(m.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(m.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=g(l,a,s),b.push(r)}}));var h=Object(m.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:d},f,{className:h}))};h.propTypes=f,h.defaultProps=b,a.a=h},826:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(10),l=t(15),o=t(0),c=t.n(o),i=t(1),u=t.n(i),m=t(3),p=t.n(m),d=t(4),f={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(d.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},a}(o.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},869:function(e,a,t){}}]);
//# sourceMappingURL=79.ce903937.chunk.js.map