(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[19],{1e3:function(e,a,t){"use strict";t.r(a);var n=t(11),i=t(12),s=t(14),r=t(13),o=t(0),c=t.n(o),l=t(789),p=t(790),d=t(518),m=t.n(d),u=t(573),h=t.n(u),g=t(560),b=t.n(g),f=t(561),w=t.n(f),x=t(562),E=t.n(x),y=t(563),v=t.n(y),N=(t(695),t(574),t(600),t(696),t(697),{spaceBetween:200,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),k=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m.a,N,c.a.createElement("div",null,c.a.createElement("img",{src:h.a,alt:"swiper 1",className:"img-fluid",style:{minHeight:"215px",marginBottom:"10px"}})),c.a.createElement("div",null,c.a.createElement("img",{src:b.a,alt:"swiper 2",className:"img-fluid",style:{minHeight:"230px"}})),c.a.createElement("div",null,c.a.createElement("img",{src:w.a,alt:"swiper 3",className:"img-fluid",style:{minHeight:"230px"}})),c.a.createElement("div",null,c.a.createElement("img",{src:E.a,alt:"swiper 4",className:"img-fluid",style:{minHeight:"230px"}})),c.a.createElement("div",null,c.a.createElement("img",{src:v.a,alt:"swiper 5",className:"img-fluid",style:{minHeight:"230px"}}))))}}]),t}(c.a.Component),z=t(698),j=t.n(z),C=(t(699),t(700)),O=t.n(C),S=t(701),L=t.n(S),D=t(702),H=t.n(D),T=t(703),B=t.n(T),I=t(704),R=t.n(I),A=t(705),P=t.n(A),W=t(706),_=t.n(W),G=t(707),M=t.n(G),U=(t(528),t(458)),V=t(455),F=t(457),J=t(451),q=t(452),K=t(453),Q=t(456),X=t(454),Y=t(459),Z=(t(524),t(708),t(523)),$=(t(557),t(526),t(18)),ee=t(791),ae=t(794),te=t(588),ne=t.n(te),ie=t(448),se=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(ee.a,{style:{backgroundImage:this.props.cardb?"url(".concat(this.props.cardb,")"):null,backgroundPosition:"center",backgroundColor:"#434346",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:this.props.size<=400?"125px":"300",minHeight:this.props.size<=400?"150px":"170px",marginLeft:"5px",marginRight:"5px",margin:"15px 5px",boxShadow:"rgb(110, 110, 110) 0px 0px 0px 5px, rgb(117, 117, 117) 0px 0px 0px 0px"}},c.a.createElement(ae.a,{className:"".concat(this.props.className?this.props.className:"stats-card-body"," d-flex ").concat(this.props.iconRight||this.props.hideChart?this.props.iconRight?"justify-content-between flex-row-reverse align-items-center":this.props.hideChart&&!this.props.iconRight?"justify-content-center flex-column text-center":null:"flex-column align-items-start"," ").concat(this.props.hideChart?"pb-2":"pb-0"," pt-2"),style:{paddingRight:"0px",paddingLeft:"0px"}},c.a.createElement("div",{className:"icon-section"},c.a.createElement("div",{className:"avatar avatar-stats p-50 m-0 ".concat(this.props.iconBg?"bg-rgba-".concat(this.props.iconBg):"bg-rgba-primary")},c.a.createElement("div",{className:"avatar-content"},this.props.icon))),c.a.createElement("div",{className:"title-section"},c.a.createElement("h2",{style:{color:"white",fontSize:this.props.size<500?"1.32rem":"26px",fontWeight:"bolder"},className:"text-bold-900 mt-1 mb-25"},c.a.createElement(ie.a,{id:this.props.stat})),c.a.createElement("p",{className:"mb-0",style:{color:"white"}},this.props.statTitle))),!this.props.hideChart&&c.a.createElement(ne.a,{options:this.props.options,series:this.props.series,type:this.props.type,height:this.props.height?this.props.height:100}))}}]),t}(c.a.Component),re=t(22),oe=t(25),ce=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={width:window.innerWidth,messages:e.props.messages,columns:[{label:"Daily Spends",icon:c.a.createElement(U.a,{color:"#ff7d00",className:"danger",size:"auto"}),path:"/spends"},{label:"Password Vault",icon:c.a.createElement(V.a,{color:"#ff7d00",className:"warning",size:"auto"}),path:"/vault/password"},{label:"Secret Diary",icon:c.a.createElement(F.a,{color:"#ff7d00",className:"success",size:"auto"}),path:"/diary"},{label:"Assets",icon:c.a.createElement(J.a,{color:"#ff7d00",className:"primary",size:"auto"}),path:"/assets/add"},{label:"Liabilities",icon:c.a.createElement(q.a,{color:"#ff7d00",className:"danger",size:"auto"}),path:"/liability/add"},{label:"Nominee",icon:c.a.createElement(K.a,{color:"#ff7d00",className:"warning",size:"auto"}),path:"/nominee/list"},{label:"Documents",icon:c.a.createElement(Q.a,{color:"#ff7d00",className:"primary",size:"auto"}),path:"/vault/document"},{label:"Portflio",icon:c.a.createElement(X.a,{color:"#ff7d00",className:"success",size:"auto"}),path:"/portfolio"},{label:"Sender",icon:c.a.createElement(Y.a,{color:"#ff7d00",className:"success",size:"auto"}),path:"/contactUs"}],rowOne:[{label:"Assets",description:"Bank details, FD, RD, Insurance, Properties etc.",background:j.a,icon:c.a.createElement(J.a,{color:"white",className:"primary",size:"auto"}),path:"/assets/add"},{label:"Liabilities",description:"Loan, EMI, Cash borrowed etc with collateral details",background:O.a,icon:c.a.createElement(q.a,{color:"white",className:"danger",size:"auto"}),path:"/liability/add"},{label:"Password Vault",description:"Save your passwords like cards, credentials in vault.",background:L.a,icon:c.a.createElement(V.a,{color:"white",className:"warning",size:"auto"}),path:"/vault/password"}],rowTwo:[{label:"Nominee",description:"Manage your nominees for your assets & liabities",background:H.a,icon:c.a.createElement(K.a,{color:"white",className:"warning",size:"auto"}),path:"/nominee/list"},{label:"Daily Spends",description:"Log your thoughts and analyze your daily spends.",background:R.a,icon:c.a.createElement(U.a,{color:"white",className:"danger",size:"auto"}),path:"/spends"},{label:"Documents",description:"Upload you documents, pics in your own secret vault",background:P.a,icon:c.a.createElement(Q.a,{color:"white",className:"primary",size:"auto"}),path:"/vault/document"}],rowThree:[{label:"Secret Diary",description:"Log your thoughts and secrets in a personal space",background:_.a,icon:c.a.createElement(F.a,{color:"white",className:"success",size:"auto"}),path:"/diary"},{label:"Portflio",description:"View & analyze portfolio of saved assets and liabilties",background:M.a,icon:c.a.createElement(X.a,{color:"white",className:"success",size:"auto"}),path:"/portfolio"},{label:"Sender",description:"Give feedback and get all your queries resolved",background:B.a,icon:c.a.createElement(Y.a,{color:"white",className:"success",size:"auto"}),path:"/contactUs"}]},e.updateWidthAndHeight=function(){e.setState({width:window.innerWidth})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;return localStorage.getItem("logInGreeting")&&(Z.b.success("Good to see you back !!!!!!!!"),localStorage.removeItem("logInGreeting")),window.addEventListener("resize",this.updateWidthAndHeight),function(){return window.removeEventListener("resize",e.updateWidthAndHeight)}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"mobile_content"},c.a.createElement(Z.a,null),c.a.createElement("div",{style:{width:"100%",marginLeft:this.state.width<=500?"0px":"-2px"}},c.a.createElement(k,null)),this.state.width<=500&&c.a.createElement("div",{className:"menu_content"},this.state.columns.map((function(a,t){return c.a.createElement("div",{className:"menu_options",key:t,onClick:function(){e.props.history.push(a.path)},style:{borderLeft:(0===t||3===t||6===t)&&"0px",borderTop:(0===t||1===t||2===t)&&"0px",boxShadow:"dark"===$.a.theme?"0px 0px 19px -10px #ff7d00":"0px 0px 25px -10px #ff7d00"}},c.a.createElement("div",{className:"menu_icon"},a.icon),c.a.createElement("label",{className:"menu_label"},a.label))}))),this.state.width>500&&c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null,this.state.rowOne.map((function(a,t){return c.a.createElement(p.a,{md:"4",sm:"12",key:t},c.a.createElement("div",{onClick:function(){e.props.history.push(a.path)},className:"pointerCursor"},c.a.createElement(se,{size:e.state.width,icon:a.icon,cardb:a.background,iconBg:"white",stat:a.label,statTitle:a.description,hideChart:!0})))}))),c.a.createElement(l.a,null,this.state.rowTwo.map((function(a,t){return c.a.createElement(p.a,{md:"4",sm:"12",key:t},c.a.createElement("div",{onClick:function(){e.props.history.push(a.path)},className:"pointerCursor"},c.a.createElement(se,{size:e.state.width,icon:a.icon,cardb:a.background,iconBg:"white",stat:a.label,statTitle:a.description,hideChart:!0})))}))),c.a.createElement(l.a,null,this.state.rowThree.map((function(a,t){return c.a.createElement(p.a,{md:"4",sm:"12",key:t},c.a.createElement("div",{onClick:function(){e.props.history.push(a.path)},className:"pointerCursor"},c.a.createElement(se,{size:e.state.width,icon:a.icon,cardb:a.background,iconBg:"white",stat:a.label,statTitle:a.description,hideChart:!0})))})))))}}]),t}(c.a.Component);a.default=Object(re.b)((function(e){var a,t,n=(null===e||void 0===e?void 0:e.customizer).customizer;return{messages:null===n||void 0===n||null===(a=n.language)||void 0===a?void 0:a.Dashboard,sender:null===n||void 0===n||null===(t=n.language)||void 0===t?void 0:t.Sender}}),{changeLanguage:oe.b})(ce)},524:function(e,a,t){},526:function(e,a,t){},560:function(e,a,t){e.exports=t.p+"static/media/banner-2.e6244c2a.jpg"},561:function(e,a,t){e.exports=t.p+"static/media/banner-3.bf5bb3db.jpg"},562:function(e,a,t){e.exports=t.p+"static/media/banner-4.9f527fa0.jpg"},563:function(e,a,t){e.exports=t.p+"static/media/banner-5.e373069d.jpg"},573:function(e,a,t){e.exports=t.p+"static/media/banner-1.4a4c2806.jpg"},574:function(e,a,t){e.exports=t.p+"static/media/banner-7.2b57003e.jpg"},600:function(e,a,t){e.exports=t.p+"static/media/banner-8.4d8cd617.jpg"},695:function(e,a,t){e.exports=t.p+"static/media/banner-6.8e3bf2b9.jpg"},696:function(e,a,t){e.exports=t.p+"static/media/banner-9.72553850.jpg"},697:function(e,a,t){e.exports=t.p+"static/media/banner-10.91ab966f.jpg"},698:function(e,a,t){e.exports=t.p+"static/media/card4.eb634a68.png"},699:function(e,a,t){e.exports=t.p+"static/media/card41.c7eeff6d.png"},700:function(e,a,t){e.exports=t.p+"static/media/card5.9f1656f6.png"},701:function(e,a,t){e.exports=t.p+"static/media/card6.ba53331a.png"},702:function(e,a,t){e.exports=t.p+"static/media/card7.603ce0f1.png"},703:function(e,a,t){e.exports=t.p+"static/media/card120.2213c5b2.png"},704:function(e,a,t){e.exports=t.p+"static/media/card8.055c71d7.png"},705:function(e,a,t){e.exports=t.p+"static/media/card9.76b3a948.png"},706:function(e,a,t){e.exports=t.p+"static/media/card10.e03c1991.png"},707:function(e,a,t){e.exports=t.p+"static/media/card12.145d1492.png"},708:function(e,a,t){}}]);
//# sourceMappingURL=19.b88043f0.chunk.js.map