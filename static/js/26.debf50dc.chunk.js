(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[26],{520:function(e,t,a){},527:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));var n=a(530),r=a.n(n),s=function(e,t,a){var n=t?"l@st@rz!":localStorage.getItem("secretkey");return e&&e.length>0?r.a.encrypt(a||n,e):e},o=function(e,t){var a=t?"l@st@rz!":localStorage.getItem("secretkey");return e&&e.length>0?r.a.decrypt(a,e):e}},530:function(e,t,a){(function(t){var n=a(264),r={encrypt:function(e,a){if("string"!==typeof e||!e)throw new TypeError('Provided "key" must be a non-empty string');var r="string"===typeof a,s=t.isBuffer(a);if(!r&&!s||r&&!a||s&&!t.byteLength(a))throw new TypeError('Provided "input" must be a non-empty string or buffer');var o=n.createHash("sha256");o.update(e);var i=n.randomBytes(16),l=n.createCipheriv("aes-256-ctr",o.digest(),i),c=a;r&&(c=t.from(a));var d=l.update(c),u=t.concat([i,d,l.final()]);return r&&(u=u.toString("base64")),u},decrypt:function(e,a){if("string"!==typeof e||!e)throw new TypeError('Provided "key" must be a non-empty string');var r="string"===typeof a,s=t.isBuffer(a);if(!r&&!s||r&&!a||s&&!t.byteLength(a))throw new TypeError('Provided "encrypted" must be a non-empty string or buffer');var o=n.createHash("sha256");o.update(e);var i=a;if(r){if((i=t.from(a,"base64")).length<17)throw new TypeError('Provided "encrypted" must decrypt to a non-empty string or buffer')}else if(t.byteLength(a)<17)throw new TypeError('Provided "encrypted" must decrypt to a non-empty string or buffer');var l=i.slice(0,16),c=n.createDecipheriv("aes-256-ctr",o.digest(),l),d=i.slice(16);return r?c.update(d)+c.final():t.concat([c.update(d),c.final()])}};function s(e){if("string"!==typeof e||!e)throw new TypeError('Provided "key" must be a non-empty string');Object.defineProperty(this,"key",{value:e})}s.prototype.encrypt=function(e){return r.encrypt(this.key,e)},s.prototype.decrypt=function(e){return r.decrypt(this.key,e)},r.createCipher=function(e){return new s(e)},e.exports=r}).call(this,a(17).Buffer)},565:function(e,t,a){e.exports=a.p+"static/media/banner-26.054f5af8.jpg"},566:function(e,t,a){e.exports=a.p+"static/media/banner-39.ea478cf3.jpg"},567:function(e,t,a){e.exports=a.p+"static/media/banner-28.2f885a80.jpg"},571:function(e,t,a){},598:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAApCAIAAAAu6TfbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ/SURBVFhH7ZdN63FREMC9K5KFKGFjqbtQbGRrqSwtyAeQkoWllQ2fQolSvoSFsiHFAiV2ykIpl/L+H3dO13N7Lvdcb/+eHr+NmTnXnTFznDmjPJ/PCo7FYsGyrFqtRvWtgNP9fu92u4kOgAkJh8PE9CmIYw4VsSkUZrOZSL/BtS7xeLxarYJgt9tNJpPRaFQqlZC91WqFDzwPvHC73c5mM1R51xe4rFyIxWJoGQ6HoObz+VwuV6vVcPVVTKdT9AIQE4dIPnq9Xr1ehzjQjg8wDLPb7VSqax3pORwOTqez0WiA3Ol0/H4/2nnXFy7BcPD56Ha7lUoFZYfDAUvH4xHVZ0Av7Xab6MJ8iP++0+mEAibgsTTIQkM+6Uin05lMZr1eE/0uWq12MBhEIhGi34fkRViXcrmMssvlwlVUC4UCqpSMx2P8IoAWeXW5hdyNAlubSFK8vfCUfOMQ8m/GAQ2CSHTQPy8vDjgSiESHXq8nkhTy4shms/AT6RHcdO7y3adC5PWXZDKZSqXo+8toNIpGo0S/Dznf6fpLsVhElZJ39Re40RCJjm9/eZRvHEL+jzj4+7YkVHHwr4PxDgVKrFYrkaSgigPmhmAw6PV6DQYDMdFhs9lYlp3P53BSEdMNJOLgJ5dmswnnLPRbVOmBORmiIcptROZK8Nfv9xOJBMgWi6VUKi2XS+6RB4FTGPpDKBQCWd5cyfeXVxEIBNCLvP6y2WyI9CIkBx/xusCWbLVaOp0Ol54E/mU+nw/vlDBpejwetPOuAZE4YIJlGAZudWh/CRAK7BKNRjOZTODygMY/4xDZHx+DOOa47g/6s+8dXOPA+sGB8QH+Lvp1f/wmCsUPfd5t0k04CEkAAAAASUVORK5CYII="},599:function(e,t,a){"use strict";var n=a(11),r=a(12),s=a(14),o=a(13),i=a(0),l=a.n(i),c=a(791),d=a(794),u=a(514),g=a.n(u),p=a(565),m=a.n(p),h=a(566),f=a.n(h),b=a(567),y=a.n(b),w=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).onSlideChange=function(){e.state.firstLoad?console.log("slide changed",e.state,e.swiperRef3,e.swiperRef2,e.swiperRef1,e.swiperRef):e.setState({firstLoad:!0})},e.swiperRef=l.a.createRef(),e.swiperRef1=l.a.createRef(),e.swiperRef2=l.a.createRef(),e.swiperRef3=l.a.createRef(),e.state={firstLoad:!1,plantext:" ",actKey:"1",params:{on:{slideChange:e.onSlideChange},spaceBetween:2,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:3,coverflowEffect:{rotate:80,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination"}}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){console.log("hhhhhhhhhhhhhh",this.swiperRef)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.a,{style:{background:"#eff2f7"}},l.a.createElement(d.a,{style:{padding:"0.5rem"}},l.a.createElement(g.a,Object.assign({},this.state.params,{activeSlideKey:this.state.actKey}),l.a.createElement("div",{key:0,ref:this.swiperRef1,style:{height:"106px",backgroundImage:"url(".concat(m.a,")"),backgroundSize:"contain"}}," ",console.log("heeeeeeeeeeey",this.props)),l.a.createElement("div",{key:1,ref:this.swiperRef2,style:{height:"106px",backgroundImage:"url(".concat(f.a,")"),backgroundSize:"contain"}}),l.a.createElement("div",{key:2,ref:this.swiperRef3,style:{height:"106px",backgroundImage:"url(".concat(y.a,")"),backgroundSize:"contain"}})),l.a.createElement("div",null,l.a.createElement("h2",{style:{color:"black"}},this.state.plantext)))),l.a.createElement("div",{className:"mb-0",style:{color:"Black",textAlign:"left",marginTop:"10px"}},"1"===this.state.actKey&&l.a.createElement("ul",null,l.a.createElement("li",null,"Assets "),l.a.createElement("li",null,"Liabilities"),l.a.createElement("li",null,"Secret Diary"),l.a.createElement("li",null,"Daily Spends"),l.a.createElement("li",null,"Password Vault"),l.a.createElement("li",null,"Document Locker"),l.a.createElement("li",null,"Declare Nominees "),l.a.createElement("li",null,"Record Audio/Video messages"),l.a.createElement("li",null,"Get legal help for will generation"))))}}]),a}(l.a.Component);t.a=w},600:function(e,t,a){},707:function(e,t,a){},799:function(e,t,a){"use strict";a.r(t);var n=a(66),r=a.n(n),s=a(109),o=a(11),i=a(12),l=a(67),c=a(14),d=a(13),u=a(0),g=a.n(u),p=a(789),m=a(790),h=a(791),f=a(793),b=a(794),y=(a(707),a(598)),w=a.n(y),v=(a(524),a(520),a(599)),E=a(264),S=a.n(E),A=(a(571),a(265),a(685),a(42)),x=a.n(A),k=a(527);a(600);x.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var P=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).hashPassword2=function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0e09ca7a4644c68c6c002ed1338bb40b",e.next=3,S.a.pbkdf2Sync(t,"0e09ca7a4644c68c6c002ed1338bb40b",1e3,20,"sha512").toString("hex");case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n._handleKeyDownLogin=function(e){13!==e.which&&13!==e.keyCode||n._isMounted&&n.handleSubmit()},n.state={password:"",mobileNo:"",isLoading:!1,isError:!1,responseData:{},errorMsg:"",status:"",token:"",showPasswordFlag:!0,isSubmit:!1,loginText:"Sign In"},n._isMounted=!1,n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.showPassword=n.showPassword.bind(Object(l.a)(n)),n.hidePassword=n.hidePassword.bind(Object(l.a)(n)),n.goToForgotPassword=n.goToForgotPassword.bind(Object(l.a)(n)),n.handleChangeUsername=n.handleChangeUsername.bind(Object(l.a)(n)),n.handleChangePassword=n.handleChangePassword.bind(Object(l.a)(n)),n.subscribe=n.subscribe.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"handleChangeUsername",value:function(e){this.setState({mobileNo:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"goToForgotPassword",value:function(){this.props.history.push("/forgotpassword")}},{key:"showPassword",value:function(){this.setState({showPasswordFlag:!0})}},{key:"hidePassword",value:function(){this.setState({showPasswordFlag:!1})}},{key:"subscribe",value:function(e){console.log("###############################start");try{x.a.post("/backendapi/subscribe",{token:localStorage.getItem("fcmtoken"),topic:e}).then((function(e){}))}catch(t){console.log("###############################star4",t)}}},{key:"handleSubmit",value:function(e){var t=this;this.setState({errorMsg:""}),this.setState({isSubmit:!0,loginText:"Signing In..."}),""===this.state.mobileNo||""===this.state.password?this.setState({errorMsg:"Invalid Credentials !"}):this.hashPassword2(this.state.password.trim()).then((function(e){x.a.post("/backendapi/user/login",{user:t.state.mobileNo.trim(),password:e}).then((function(a){if(console.log("Aaquib sss",a),a.data.length>0&&"emailNotConfirmed"!==a.data[0].status){var n=a.data[0];localStorage.setItem("secretkey",e),n.name=Object(k.a)(n.name),n.mobile=Object(k.a)(n.mobile),n.dob=Object(k.a)(n.dob),n.secondarymobile=Object(k.a)(n.secondarymobile),n.address=Object(k.a)(n.address),n.assets=n.assets.length>0?JSON.parse(Object(k.a)(n.assets[0])):[],n.liabilities=n.liabilities.length>0?JSON.parse(Object(k.a)(n.liabilities[0])):[],n.docs=Object(k.a)(n.docs),t.setState({errorMsg:"",loggedIn:!0}),console.log("################# login",n.toString()),(s=new Date(n.attendanceDt)).setHours(0,0,0,0),(o=new Date).setHours(0,0,0,0),console.log("################# login",s,o);s.getTime()===o.getTime()&&!0,localStorage.setItem("logInUserData",JSON.stringify(n)),localStorage.setItem("logInGreeting",!0),localStorage.setItem("theme",n.theme?n.theme:"light"),t.subscribe(n.email),t.props.history.push("/dashboard"),window.location.reload()}else if("emailNotConfirmed"===a.data[0].status){console.log("here1");var r=t.props.routerProps&&t.props.routerProps.match.params.userkey;if(a.data[0].status===r){var s,o,i=a.data[0];t.setState({errorMsg:"",loggedIn:!0}),console.log("################# login",i.toString()),(s=new Date(i.attendanceDt)).setHours(0,0,0,0),(o=new Date).setHours(0,0,0,0),console.log("################# login",s,o);s.getTime()===o.getTime()&&!0,localStorage.setItem("logInUserData",JSON.stringify(i)),localStorage.setItem("logInGreeting",!0),t.subscribe(i.email),t.props.history.push("/dashboard"),x.a.post("/backendapi/update/login",a.data[0]).then((function(e){})),window.location.reload()}else t.setState({errorMsg:"Please confirm your email for log in !! ",loginText:"Sign In"})}else t.setState({errorMsg:"Inavlid Credentials",loginText:"Sign In"})})).catch((function(e){e.response&&401===e.response.status?t.setState({errorMsg:"Inavlid Credentials",loginText:"Sign In"}):(console.log("Aaquib"),t.setState({errorMsg:"Something went Wrong ! Contact Your admin",loginText:"Sign In"}))}))}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDownLogin),this._isMounted=!0}},{key:"render",value:function(){var e=this;""!==localStorage.getItem("logInUserData")&&null!==localStorage.getItem("logInUserData")&&(null!==JSON.parse(localStorage.getItem("logInUserData"))&&this.props.history.push("/dashboard"));this.props.isLoading;var t=this.props.isError,a=this.props.status,n=this.props.responseData;return t||200!==a?t&&401===a?n.fault.businessMessage:t&&(200!==a&&401!==a||""===a)&&"Some error occurred. Please try again later !":"",g.a.createElement("div",null,g.a.createElement("div",null,g.a.createElement("br",null),g.a.createElement(p.a,{className:"m-0 justify-content-center"},g.a.createElement(m.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},g.a.createElement(h.a,{className:"bg-authentication rounded-0 mb-0 w-100"},g.a.createElement(p.a,{className:"m-0",style:{padding:"20px"}},g.a.createElement(m.a,{lg:"6"},g.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",background:"white",height:"80px"}},g.a.createElement("img",{style:{height:"50px",margin:"5px",marginTop:"20px",paddingBottom:"2px"},alt:"Logo",src:w.a,className:"logo12"})," ",g.a.createElement("h2",{style:{color:"#2c2c2c",fontWeight:"700",marginTop:"28px",textAlign:"center",width:"70%"}},"Last Arzi")),g.a.createElement(v.a,null)),g.a.createElement(m.a,{lg:"6",md:"12",className:"p-0"},window.screen.width<600&&g.a.createElement("div",{style:{marginTop:"10px",textAlign:"center",display:"flex",width:"100%",flexDirection:"row",background:"white",borderBottom:"1px solid grey"}},g.a.createElement("img",{style:{height:"50px",marginTop:"20px",marginLeft:"20px"},src:w.a,alt:"Logo",className:"logo12"})," ",g.a.createElement("h2",{style:{color:"#2c2c2c",fontWeight:"700",marginTop:"28px",width:"70%"}}," ","Last Arzi")),g.a.createElement(h.a,{className:"rounded-0 mb-0 pt-1",style:{background:"#ffffff"}},g.a.createElement("div",{className:"pb-1 pt-50"},g.a.createElement(f.a,{style:{background:"#ffffff",width:"100%"}},g.a.createElement("h2",{className:"mb-0",style:{color:"#2c2c2c",fontWeight:"700",marginTop:"7px",textAlign:"center"}},"Log In"))),g.a.createElement(b.a,{className:"pt-1"},g.a.createElement("div",{className:"form"},g.a.createElement("h5",{style:{color:"red"}},this.state.errorMsg),g.a.createElement("div",null,g.a.createElement("input",{style:{textAlign:"center",border:"1px solid grey",borderRadius:"5.5px"},type:"text",name:"user",placeholder:"Username",onChange:this.handleChangeUsername}),g.a.createElement("input",{style:{textAlign:"center",border:"1px solid grey",borderRadius:"5.5px"},type:"password",name:"password",placeholder:"Password",onChange:this.handleChangePassword}),g.a.createElement("br",null),g.a.createElement("br",null),g.a.createElement("button",{onClick:this.handleSubmit,style:{border:"1px solid grey",borderRadius:"5.5px"}},this.state.loginText),g.a.createElement("br",null),g.a.createElement("br",null),g.a.createElement("br",null),g.a.createElement("div",{onClick:function(){e.props.history.push("/register")},style:{color:"#4CAF50"}},g.a.createElement("div",null,"Need a new account ?"),g.a.createElement("u",null,"Please Register")))))))))),window.screen.width<600&&g.a.createElement(m.a,{lg:"6",md:"12",className:"p-0"},g.a.createElement(h.a,{className:"bg-authentication rounded-0 mb-0 w-100"},g.a.createElement(b.a,{className:"pt-1 pb-50"},g.a.createElement("div",{style:{width:"300px"}},g.a.createElement(v.a,null))))))))}}]),a}(g.a.Component);t.default=P}}]);
//# sourceMappingURL=26.debf50dc.chunk.js.map