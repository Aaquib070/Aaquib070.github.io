(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[36],{1061:function(e,a,t){},1099:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),c=t(14),r=t(13),m=t(0),s=t.n(m),o=t(1077),i=t(798),u=t(799),d=t(1082),E=t(1085),p=t(861),b=t(862),f=t(3),h=t.n(f),v=t(170),g=t(176),w=t(318),N=t(319),y=t(325),k=t(232),j=t(804),C=t(550),O=t(857),x=t(852),R=t(1080),S=t(1081),A=t(871),F=t(845),P=t(880),T=t(94),D=t.n(T),I=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={visible:!0},e.dismissAlert=function(){e.setState({visible:!1})},e}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,null,s.a.createElement(j.a,{className:"mr-1",left:!0,href:"#"},s.a.createElement(j.a,{className:"rounded-circle",object:!0,src:D.a,alt:"User",height:"64",width:"64"})),s.a.createElement(j.a,{className:"mt-25",body:!0},s.a.createElement("div",{className:"d-flex flex-sm-row flex-column justify-content-start px-0"},s.a.createElement(C.a.Ripple,{tag:"label",className:"mr-50 cursor-pointer",color:"primary",outline:!0},"Upload Photo",s.a.createElement(O.a,{type:"file",name:"file",id:"uploadImg",hidden:!0})),s.a.createElement(C.a.Ripple,{color:"flat-danger"},"Remove")),s.a.createElement("p",{className:"text-muted mt-50"},s.a.createElement("small",null,"Allowed JPG, GIF or PNG. Max size of 800kB")))),s.a.createElement(x.a,{className:"mt-2",onSubmit:function(e){return e.preventDefault()}},s.a.createElement(R.a,null,s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"userName"},"Username"),s.a.createElement(O.a,{id:"userName",defaultValue:"johny_01"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"name"},"Name"),s.a.createElement(O.a,{id:"name",defaultValue:"John Doe"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"email"},"Email"),s.a.createElement(O.a,{id:"email",defaultValue:"john@admin.com"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(P.a,{className:"mb-2",color:"warning",isOpen:this.state.visible,toggle:this.dismissAlert},s.a.createElement("p",{className:"mb-0"},"Your email is not confirmed. Please check your inbox.",s.a.createElement("span",{className:"text-primary"}," Resend Confirmation")))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"company"},"Company"),s.a.createElement(O.a,{id:"company",defaultValue:"SnowMash Technologies Pvt Ltd"}))),s.a.createElement(S.a,{className:"d-flex justify-content-start flex-wrap",sm:"12"},s.a.createElement(C.a.Ripple,{className:"mr-50",type:"submit",color:"primary"},"Save Changes"),s.a.createElement(C.a.Ripple,{type:"submit",color:"danger"},"Cancel")))))}}]),t}(s.a.Component),L=t(1072),V=t(1071),W=V.a().shape({oldpass:V.c().required("Required"),newpass:V.c().required("Required"),confirmpass:V.c().oneOf([V.b("newpass"),null],"Passwords must match").required("Required")}),z=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(R.a,{className:"pt-1"},s.a.createElement(S.a,{sm:"12"},s.a.createElement(L.c,{initialValues:{oldpass:"",newpass:"",confirmpass:""},validationSchema:W},(function(e){var a=e.errors,t=e.touched;return s.a.createElement(L.b,null,s.a.createElement(A.a,null,s.a.createElement(L.a,{name:"oldpass",id:"oldpass",className:"form-control ".concat(a.oldpass&&t.oldpass&&"is-invalid"),placeholder:"Old Password"}),a.oldpass&&t.oldpass?s.a.createElement("div",{className:"text-danger"},a.oldpass):null),s.a.createElement(A.a,null,s.a.createElement(L.a,{name:"newpass",placeholder:"New Password",id:"newpass",className:"form-control ".concat(a.newpass&&t.newpass&&"is-invalid")}),a.newpass&&t.newpass?s.a.createElement("div",{className:"text-danger"},a.newpass):null),s.a.createElement(A.a,null,s.a.createElement(L.a,{name:"confirmpass",id:"confirmpass",className:"form-control ".concat(a.confirmpass&&t.confirmpass&&"is-invalid"),placeholder:"Confirm Password"}),a.confirmpass&&t.confirmpass?s.a.createElement("div",{className:"text-danger"},a.confirmpass):null),s.a.createElement("div",{className:"d-flex justify-content-start flex-wrap"},s.a.createElement(C.a.Ripple,{className:"mr-1 mb-1",color:"primary",type:"submit"},"Save Changes"),s.a.createElement(C.a.Ripple,{className:"mb-1",color:"danger",type:"reset",outline:!0},"Cancel")))})))))}}]),t}(s.a.Component),q=t(2),U=t(816),G=t(953),M=t.n(G),J=t(34),Y=t(904),B=t.n(Y),K=(t(905),t(873),[{value:"english",label:"English",color:"#7367f0"},{value:"french",label:"French",color:"#7367f0"},{value:"spanish",label:"Spanish",color:"#7367f0"},{value:"russian",label:"Russian",color:"#7367f0"},{value:"italian",label:"Italian",color:"#7367f0"}]),Q={control:function(e){return Object(q.a)(Object(q.a)({},e),{},{backgroundColor:"white"})},option:function(e,a){var t=a.data,l=a.isDisabled,n=a.isFocused,c=a.isSelected,r=t.color?M()(t.color):"#7367f0";return Object(q.a)(Object(q.a)({},e),{},{backgroundColor:l?null:c?t.color:n?r.alpha(.1).css():null,color:l?"#ccc":c?M.a.contrast(r,"white")>2?"white":"black":t.color,cursor:l?"not-allowed":"default",":active":Object(q.a)(Object(q.a)({},e[":active"]),{},{backgroundColor:!l&&(c?t.color:"#7367f0")})})},multiValue:function(e,a){var t=a.data,l=t.color?M()(t.color):"#7367f0";return Object(q.a)(Object(q.a)({},e),{},{backgroundColor:l.alpha(.1).css()})},multiValueLabel:function(e,a){var t=a.data;return Object(q.a)(Object(q.a)({},e),{},{color:t.color?t.color:"#7367f0"})},multiValueRemove:function(e,a){var t=a.data;return Object(q.a)(Object(q.a)({},e),{},{color:t.color,":hover":{backgroundColor:t.color?t.color:"#7367f0",color:"white"}})}},_=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={dob:new Date},e.handleDob=function(a){e.setState({dob:a})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{onSubmit:function(e){return e.preventDefault()}},s.a.createElement(R.a,null,s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"bio"},"Bio"),s.a.createElement(O.a,{type:"textarea",name:"bio",id:"bio",rows:"3",placeholder:"Your bio data here..."}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{className:"d-block",for:"date"},"Date"),s.a.createElement(B.a,{className:"form-control",options:{dateFormat:"M \\ d \\, Y"},value:this.state.dob,onChange:function(a){return e.handleDob(a)}}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"country"},"Country"),s.a.createElement(O.a,{type:"select",name:"country",id:"country"},s.a.createElement("option",null,"US"),s.a.createElement("option",null,"UK"),s.a.createElement("option",null,"France")))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"languages"},"Favourite Languages"),s.a.createElement(U.a,{isMulti:!0,defaultValue:[K[0],K[1]],isClearable:!0,styles:Q,options:K,className:"React",classNamePrefix:"select",id:"languages"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"number"},"Phone Number"),s.a.createElement(O.a,{type:"number",name:"number",id:"number",placeholder:"Phone Number"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"url"},"Website URL"),s.a.createElement(O.a,{type:"url",name:"url",id:"url",placeholder:"Website URL"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement("div",{className:"d-inline-block mr-1"},s.a.createElement(J.a,{label:"Male",defaultChecked:!0,name:"gender"})),s.a.createElement("div",{className:"d-inline-block mr-1"},s.a.createElement(J.a,{label:"Female",defaultChecked:!1,name:"gender"})),s.a.createElement("div",{className:"d-inline-block"},s.a.createElement(J.a,{label:"Other",defaultChecked:!1,name:"gender"})))),s.a.createElement(S.a,{className:"d-flex justify-content-start flex-wrap",sm:"12"},s.a.createElement(C.a.Ripple,{className:"mr-50",type:"submit",color:"primary"},"Save Changes"),s.a.createElement(C.a.Ripple,{type:"submit",color:"danger"},"Cancel")))))}}]),t}(s.a.Component),H=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{onSubmit:function(e){return e.preventDefault()}},s.a.createElement(R.a,null,s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"twitter"},"Twitter"),s.a.createElement(O.a,{id:"twitter",defaultValue:"https://www.twitter.com"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"facebook"},"Facebook"),s.a.createElement(O.a,{id:"facebook",placeholder:"Add Link"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"google"},"Google+"),s.a.createElement(O.a,{id:"google",placeholder:"Add Link"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"linkedin"},"Linkedin"),s.a.createElement(O.a,{id:"linkedin",defaultValue:"https://www.linkedin.com"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"instagram"},"Instagram"),s.a.createElement(O.a,{id:"instagram",placeholder:"Add Link"}))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(A.a,null,s.a.createElement(F.a,{for:"quora"},"Quora"),s.a.createElement(O.a,{id:"quora",placeholder:"Add Link"}))),s.a.createElement(S.a,{className:"d-flex justify-content-start flex-wrap",sm:"12"},s.a.createElement(C.a.Ripple,{className:"mr-50",type:"submit",color:"primary"},"Save Changes"),s.a.createElement(C.a.Ripple,{type:"submit",color:"danger"},"Cancel")))))}}]),t}(s.a.Component),X=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(R.a,null,s.a.createElement(S.a,{sm:"12"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3"},s.a.createElement("div",{className:"social-media"},s.a.createElement("p",{className:"mb-0"},"Account is connected with Google."),s.a.createElement("p",{className:"text-bold-500"},"john@gmail.com")),s.a.createElement("div",{className:"disconnect"},s.a.createElement(C.a.Ripple,{color:"danger",outline:!0},"Disconnect")))),s.a.createElement(S.a,{sm:"12"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3"},s.a.createElement("div",{className:"social-media"},s.a.createElement("p",{className:"mb-0"},"Account is connected with Facebook."),s.a.createElement("p",{className:"text-bold-500"},"@pixinvents")),s.a.createElement("div",{className:"disconnect"},s.a.createElement(C.a.Ripple,{color:"danger",outline:!0},"Disconnect")))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(C.a.Ripple,{color:"info"},"Connect to Twitter")),s.a.createElement(S.a,{sm:"12"},s.a.createElement(C.a.Ripple,{className:"mt-2",color:"primary"},"Connect to Instagram"))))}}]),t}(s.a.Component),Z=t(805),$=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(R.a,null,s.a.createElement(S.a,{sm:"12"},s.a.createElement("h6",{className:"mb-1"},"Activity"),s.a.createElement(Z.a,{type:"switch",className:"d-block mb-2",id:"article",name:"article",inline:!0},s.a.createElement("span",{className:"mb-0 ml-sm-0 switch-label"},"Email me when someone comments on my article")),s.a.createElement(Z.a,{type:"switch",className:"d-block mb-2",id:"form",name:"form",inline:!0},s.a.createElement("span",{className:"mb-0 switch-label"},"Email me when someone answers on my form")),s.a.createElement(Z.a,{type:"switch",className:"d-block mb-2",id:"follow",name:"follow",inline:!0},s.a.createElement("span",{className:"mb-0 switch-label"},"Email me when someone follows me"))),s.a.createElement(S.a,{className:"mt-1",sm:"12"},s.a.createElement("h6",{className:"mb-1"},"Application"),s.a.createElement(Z.a,{type:"switch",className:"d-block mb-2",id:"news",name:"news",inline:!0},s.a.createElement("span",{className:"mb-0 switch-label"},"News and announcements")),s.a.createElement(Z.a,{type:"switch",className:"d-block mb-2",id:"update",name:"update",inline:!0},s.a.createElement("span",{className:"mb-0 switch-label"},"Weekly product updates")),s.a.createElement(Z.a,{type:"switch",className:"d-block mb-2",id:"blog",name:"blog",inline:!0},s.a.createElement("span",{className:"mb-0 switch-label"},"Weekly blog digest"))),s.a.createElement(S.a,{sm:"12"},s.a.createElement(C.a.Ripple,{className:"mr-1",color:"primary"},"Save Changes"),s.a.createElement(C.a.Ripple,{color:"danger",outline:!0},"Cancel"))))}}]),t}(s.a.Component),ee=t(820),ae=(t(1061),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1",windowWidth:null},e.toggle=function(a){e.setState({activeTab:a})},e.updateWidth=function(){e.setState({windowWidth:window.innerWidth})},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){void 0!==window&&(this.updateWidth(),window.addEventListener("resize",this.updateWidth))}},{key:"render",value:function(){var e=this,a=this.state.windowWidth;return s.a.createElement(s.a.Fragment,null,s.a.createElement(ee.a,{breadCrumbTitle:"Account Settings",breadCrumbParent:"Pages",breadCrumbActive:"Account Settings"}),s.a.createElement("div",{className:"".concat(a>=769?"nav-vertical":"account-setting-wrapper")},s.a.createElement(o.a,{className:"account-settings-tab nav-left mr-0 mr-sm-3",tabs:!0},s.a.createElement(i.a,null,s.a.createElement(u.a,{className:h()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},s.a.createElement(v.a,{size:16}),s.a.createElement("span",{className:"d-md-inline-block d-none align-middle ml-1"},"General"))),s.a.createElement(i.a,null,s.a.createElement(u.a,{className:h()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},s.a.createElement(g.a,{size:16}),s.a.createElement("span",{className:"d-md-inline-block d-none align-middle ml-1"},"Change Password"))),s.a.createElement(i.a,null,s.a.createElement(u.a,{className:h()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},s.a.createElement(w.a,{size:16}),s.a.createElement("span",{className:"d-md-inline-block d-none align-middle ml-1"},"Info"))),s.a.createElement(i.a,null,s.a.createElement(u.a,{className:h()({active:"4"===this.state.activeTab}),onClick:function(){e.toggle("4")}},s.a.createElement(N.a,{size:16}),s.a.createElement("span",{className:"d-md-inline-block d-none align-middle ml-1"},"Social Links"))),s.a.createElement(i.a,null,s.a.createElement(u.a,{className:h()({active:"5"===this.state.activeTab}),onClick:function(){e.toggle("5")}},s.a.createElement(y.a,{size:16}),s.a.createElement("span",{className:"d-md-inline-block d-none align-middle ml-1"},"Connections"))),s.a.createElement(i.a,null,s.a.createElement(u.a,{className:h()({active:"6"===this.state.activeTab}),onClick:function(){e.toggle("6")}},s.a.createElement(k.a,{size:16}),s.a.createElement("span",{className:"d-md-inline-block d-none align-middle ml-1"},"Notifications")))),s.a.createElement(d.a,null,s.a.createElement(E.a,null,s.a.createElement(p.a,{activeTab:this.state.activeTab},s.a.createElement(b.a,{tabId:"1"},s.a.createElement(I,null)),s.a.createElement(b.a,{tabId:"2"},s.a.createElement(z,null)),s.a.createElement(b.a,{tabId:"3"},s.a.createElement(_,null)),s.a.createElement(b.a,{tabId:"4"},s.a.createElement(H,null)),s.a.createElement(b.a,{tabId:"5"},s.a.createElement(X,null)),s.a.createElement(b.a,{tabId:"6"},s.a.createElement($,null)))))))}}]),t}(s.a.Component));a.default=ae},873:function(e,a,t){}}]);
//# sourceMappingURL=36.68e3fb3f.chunk.js.map