(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[13],{1012:function(e,a,t){"use strict";t.r(a);var s=t(15),o=t(16),n=t(20),i=t(19),r=t(0),l=t.n(r),c=t(581),d=t(582),p=t(619),u=t(623),m=t.n(u),v=t(624),g=t.n(v),f=t(625),b=t.n(f),h=t(626),x=t.n(h),y=t(627),E=t.n(y),w=t(628),k=t.n(w),N=t(629),j=t.n(N),O=t(630),z=t.n(O),T=t(631),S=t.n(T),L=t(632),I=t.n(L),D=t(633),B=t.n(D),C=t(634),M=t.n(C),H=t(635),P=t.n(H),A=t(636),W=t.n(A),_=t(637),G=t.n(_),V=t(638),R=t.n(V),U=t(639),q=t.n(U),F=t(640),J=t.n(F),K=(t(188),t(510)),Q=t(507),X=t(509),Y=t(503),Z=t(504),$=t(505),ee=t(508),ae=t(506),te=t(511),se=(t(190),t(691),t(579)),oe=(t(586),t(583),t(22)),ne=t(523),ie=t(692),re=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a="dark"===oe.a.theme;return l.a.createElement(ne.a,{className:"whole-card",onMouseEnter:function(){document.getElementById("back-image-".concat(e.props.index)).classList.add("back-image-scale"),document.getElementById("card-title-".concat(e.props.index)).classList.add("card-title-div-up"),document.getElementById("description-div-".concat(e.props.index)).classList.add("description-div-up"),document.getElementById("card-title-no-".concat(e.props.index)).style.color="white"},onMouseLeave:function(){document.getElementById("back-image-".concat(e.props.index)).classList.remove("back-image-scale"),document.getElementById("card-title-".concat(e.props.index)).classList.remove("card-title-div-up"),document.getElementById("description-div-".concat(e.props.index)).classList.remove("description-div-up"),document.getElementById("card-title-no-".concat(e.props.index)).style.color=a?"white":"black"}},l.a.createElement("div",{id:"back-image-".concat(this.props.index),className:a?"back-image-dark back-image-dark-normal":"back-image back-image-normal",style:{backgroundImage:"url(".concat(this.props.background,")"),backgroundSize:"Assets"===e.props.stat||"Vault"===e.props.stat?"220px":"Nominees"===e.props.stat||"Daily Spends"===e.props.stat?"185px":"Documents"===e.props.stat?"210px":"Sender"===e.props.stat?"250px":void 0,backgroundPosition:"Vault"===e.props.stat?"125px":"Nominees"===e.props.stat?"165px":"Daily Spends"===e.props.stat?"175px":"Secret Diary"===e.props.stat?"165px":"Sender"===e.props.stat?"110px":"Assets"===e.props.stat?"125px":void 0}}),l.a.createElement("div",{className:"card-title-div",id:"card-title-".concat(this.props.index)},l.a.createElement("span",{id:"card-title-no-".concat(this.props.index),style:{color:a?"white":"black"},className:"card_title"},this.props.stat)),l.a.createElement("div",{className:"description-div d-flex justify-content-between",id:"description-div-".concat(this.props.index),style:{backgroundColor:"lightgrey"}},l.a.createElement("div",null,l.a.createElement("h2",{className:"card_description",style:{color:"black"}},this.props.statTitle)),l.a.createElement("div",{style:{padding:"15px"}},l.a.createElement(ie.a,{style:{height:"2.5rem",width:"2.5rem"}}))))}}]),t}(l.a.Component),le=t(29),ce=t(28),de="dark"===oe.a.theme?"#757488":"white",pe="dark"===oe.a.theme?I.a:m.a,ue="dark"===oe.a.theme?B.a:g.a,me="dark"===oe.a.theme?M.a:b.a,ve="dark"===oe.a.theme?P.a:x.a,ge="dark"===oe.a.theme?W.a:E.a,fe="dark"===oe.a.theme?G.a:k.a,be="dark"===oe.a.theme?R.a:j.a,he="dark"===oe.a.theme?q.a:z.a,xe="dark"===oe.a.theme?J.a:S.a,ye=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){var e,o,n,i,r,c,d,p,u,m,v,g,f,b,h,x,y,E,w,k,N,j,O,z,T,S,L,I,D,B,C,M,H,P,A,W,_,G,V,R,U,q,F,J,se,oe,ne,ie,re,le,ce,ye,Ee,we,ke,Ne,je,Oe,ze,Te,Se;Object(s.a)(this,t);for(var Le=arguments.length,Ie=new Array(Le),De=0;De<Le;De++)Ie[De]=arguments[De];return(Se=a.call.apply(a,[this].concat(Ie))).state={width:window.innerWidth,messages:Se.props.messages,columns:[{label:(null===(e=Se.props.messages)||void 0===e?void 0:e.spends)?null===(o=Se.props.messages)||void 0===o?void 0:o.spends:"Daily Spends",icon:l.a.createElement(K.a,{color:"#ff7d00",className:"danger",size:"auto"}),path:"/spends"},{label:(null===(n=Se.props.messages)||void 0===n?void 0:n.vault)?null===(i=Se.props.messages)||void 0===i?void 0:i.vault:"Password Vault",icon:l.a.createElement(Q.a,{color:"#ff7d00",className:"warning",size:"auto"}),path:"/vault/password"},{label:(null===(r=Se.props.messages)||void 0===r?void 0:r.diary)?null===(c=Se.props.messages)||void 0===c?void 0:c.diary:"Secret Diary",icon:l.a.createElement(X.a,{color:"#ff7d00",className:"success",size:"auto"}),path:"/diary"},{label:(null===(d=Se.props.messages)||void 0===d?void 0:d.asset)?null===(p=Se.props.messages)||void 0===p?void 0:p.asset:"Assets",icon:l.a.createElement(Y.a,{color:"#ff7d00",className:"primary",size:"auto"}),path:"/assets/add"},{label:(null===(u=Se.props.messages)||void 0===u?void 0:u.liability)?null===(m=Se.props.messages)||void 0===m?void 0:m.liability:"Liabilties",icon:l.a.createElement(Z.a,{color:"#ff7d00",className:"danger",size:"auto"}),path:"/liability/add"},{label:(null===(v=Se.props.messages)||void 0===v?void 0:v.nominees)?null===(g=Se.props.messages)||void 0===g?void 0:g.nominees:"Nominees",icon:l.a.createElement($.a,{color:"#ff7d00",className:"warning",size:"auto"}),path:"/nominee/list"},{label:(null===(f=Se.props.messages)||void 0===f?void 0:f.documents)?null===(b=Se.props.messages)||void 0===b?void 0:b.documents:"Documents",icon:l.a.createElement(ee.a,{color:"#ff7d00",className:"primary",size:"auto"}),path:"/vault/document"},{label:(null===(h=Se.props.messages)||void 0===h?void 0:h.portfolio)?null===(x=Se.props.messages)||void 0===x?void 0:x.portfolio:"Portfolio",icon:l.a.createElement(ae.a,{color:"#ff7d00",className:"success",size:"auto"}),path:"/portfolio"},{label:(null===(y=Se.props)||void 0===y||null===(E=y.sender)||void 0===E?void 0:E.heading)?null===(w=Se.props)||void 0===w||null===(k=w.sender)||void 0===k?void 0:k.heading:"Sender",icon:l.a.createElement(te.a,{color:"#ff7d00",className:"success",size:"auto"}),path:"/contactUs"}],dashboard:[{label:(null===(N=Se.props.messages)||void 0===N?void 0:N.asset)?null===(j=Se.props.messages)||void 0===j?void 0:j.asset:"Assets",description:(null===(O=Se.props.messages)||void 0===O?void 0:O.assetText)?null===(z=Se.props.messages)||void 0===z?void 0:z.assetText:"Bank details, FD, RD, Insurance, Properties etc.",background:pe,icon:l.a.createElement(Y.a,{color:de,className:"primary",size:"auto"}),path:"/assets/add"},{label:(null===(T=Se.props.messages)||void 0===T?void 0:T.liability)?null===(S=Se.props.messages)||void 0===S?void 0:S.liability:"Liabilties",description:(null===(L=Se.props.messages)||void 0===L?void 0:L.liabilityText)?null===(I=Se.props.messages)||void 0===I?void 0:I.liabilityText:"Loan, EMI, Cash borrowed etc with collateral details",background:ve,icon:l.a.createElement(Z.a,{color:de,className:"danger",size:"auto"}),path:"/liability/add"},{label:(null===(D=Se.props.messages)||void 0===D?void 0:D.vault)?null===(B=Se.props.messages)||void 0===B?void 0:B.vault:"Vault",description:(null===(C=Se.props.messages)||void 0===C?void 0:C.vaultText)?null===(M=Se.props.messages)||void 0===M?void 0:M.vaultText:"Save your passwords like cards, credentials in vault.",background:xe,icon:l.a.createElement(Q.a,{color:de,className:"warning",size:"auto"}),path:"/vault/password"},{label:(null===(H=Se.props.messages)||void 0===H?void 0:H.nominees)?null===(P=Se.props.messages)||void 0===P?void 0:P.nominees:"Nominees",description:(null===(A=Se.props.messages)||void 0===A?void 0:A.nomineesText)?null===(W=Se.props.messages)||void 0===W?void 0:W.nomineesText:"Manage your nominees for your assets & liabities",background:ge,icon:l.a.createElement($.a,{color:de,className:"warning",size:"auto"}),path:"/nominee/list"},{label:(null===(_=Se.props.messages)||void 0===_?void 0:_.spends)?null===(G=Se.props.messages)||void 0===G?void 0:G.spends:"Daily Spends",description:(null===(V=Se.props.messages)||void 0===V?void 0:V.spendsText)?null===(R=Se.props.messages)||void 0===R?void 0:R.spendsText:"Log your thoughts and analyze your daily spends.",background:he,icon:l.a.createElement(K.a,{color:de,className:"danger",size:"auto"}),path:"/spends"},{label:(null===(U=Se.props.messages)||void 0===U?void 0:U.documents)?null===(q=Se.props.messages)||void 0===q?void 0:q.documents:"Documents",description:(null===(F=Se.props.messages)||void 0===F?void 0:F.documentsText)?null===(J=Se.props.messages)||void 0===J?void 0:J.documentsText:"Upload you documents, pics in your own secret vault",background:me,icon:l.a.createElement(ee.a,{color:de,className:"primary",size:"auto"}),path:"/vault/document"},{label:(null===(se=Se.props.messages)||void 0===se?void 0:se.diary)?null===(oe=Se.props.messages)||void 0===oe?void 0:oe.diary:"Secret Diary",description:(null===(ne=Se.props.messages)||void 0===ne?void 0:ne.diaryText)?null===(ie=Se.props.messages)||void 0===ie?void 0:ie.diaryText:"Log your thoughts and secrets in a personal space",background:ue,icon:l.a.createElement(X.a,{color:de,className:"success",size:"auto"}),path:"/diary"},{label:(null===(re=Se.props.messages)||void 0===re?void 0:re.portfolio)?null===(le=Se.props.messages)||void 0===le?void 0:le.portfolio:"Portfolio",description:(null===(ce=Se.props.messages)||void 0===ce?void 0:ce.portfolioText)?null===(ye=Se.props.messages)||void 0===ye?void 0:ye.portfolioText:"View & analyze portfolio of saved assets and liabilties",background:fe,icon:l.a.createElement(ae.a,{color:de,className:"success",size:"auto"}),path:"/portfolio"},{label:(null===(Ee=Se.props)||void 0===Ee||null===(we=Ee.sender)||void 0===we?void 0:we.heading)?null===(ke=Se.props)||void 0===ke||null===(Ne=ke.sender)||void 0===Ne?void 0:Ne.heading:"Sender",description:(null===(je=Se.props)||void 0===je||null===(Oe=je.sender)||void 0===Oe?void 0:Oe.subHeading)?null===(ze=Se.props)||void 0===ze||null===(Te=ze.sender)||void 0===Te?void 0:Te.subHeading:"Save, schedule, send text, audio, video messages",background:be,icon:l.a.createElement(te.a,{color:de,className:"success",size:"auto"}),path:"/contactUs"}]},Se.updateWidthAndHeight=function(){Se.setState({width:window.innerWidth})},Se.calcWidth=function(){return Se.state.width>1100?"4":Se.state.width>900&&Se.state.width<=1100?"6":"12"},Se}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;return localStorage.getItem("logInGreeting")&&(se.b.success("Good to see you back !!!!!!!!"),localStorage.removeItem("logInGreeting")),window.addEventListener("resize",this.updateWidthAndHeight),function(){return window.removeEventListener("resize",e.updateWidthAndHeight)}}},{key:"render",value:function(){var e=this,a=this.props.loc;return l.a.createElement("div",{className:"mobile_content"},!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(se.a,null),l.a.createElement("div",{style:{width:"100%",marginLeft:this.state.width<=500?"0px":"-2px"}},l.a.createElement(p.a,null))),this.state.width<=500&&l.a.createElement("div",{className:"menu_content"},this.state.columns.map((function(a,t){return l.a.createElement("div",{className:"menu_options",key:t,onClick:function(){e.props.history.push(a.path)},style:{borderLeft:(0===t||3===t||6===t)&&"0px",borderTop:(0===t||1===t||2===t)&&"0px",boxShadow:"dark"===oe.a.theme?"0px 0px 19px -10px #ff7d00":"0px 0px 25px -10px #ff7d00"}},l.a.createElement("div",{className:"menu_icon"},a.icon),l.a.createElement("label",{className:"menu_label"},a.label))}))),this.state.width>500&&l.a.createElement(c.a,{className:"mt-2 px-2"},this.state.dashboard.map((function(a,t){return l.a.createElement(d.a,{md:e.calcWidth(),sm:"12",key:t},l.a.createElement("div",{onClick:function(){e.props.history.push(a.path)},className:"pointerCursor"},l.a.createElement(re,{size:e.state.width,icon:a.icon,background:a.background,iconBg:de,stat:a.label,statTitle:a.description,hideChart:!0,index:t})))}))))}}]),t}(l.a.Component);a.default=Object(le.b)((function(e){var a,t,s=(null===e||void 0===e?void 0:e.customizer).customizer;return{messages:null===s||void 0===s||null===(a=s.language)||void 0===a?void 0:a.Dashboard,sender:null===s||void 0===s||null===(t=s.language)||void 0===t?void 0:t.Sender}}),{changeLanguage:ce.b})(ye)},581:function(e,a,t){"use strict";var s=t(5),o=t(9),n=t(0),i=t.n(n),r=t(1),l=t.n(r),c=t(8),d=t.n(c),p=t(4),u=l.a.oneOfType([l.a.number,l.a.string]),m={tag:p.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},v={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,r=e.tag,l=e.form,c=e.widths,u=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];c.forEach((function(a,t){var s=e[a];if(delete u[a],s){var o=!t;m.push(o?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var v=Object(p.m)(d()(a,n?"no-gutters":null,l?"form-row":"row",m),t);return i.a.createElement(r,Object(s.a)({},u,{className:v}))};g.propTypes=m,g.defaultProps=v,a.a=g},582:function(e,a,t){"use strict";var s=t(5),o=t(9),n=t(0),i=t.n(n),r=t(1),l=t.n(r),c=t(8),d=t.n(c),p=t(4),u=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),v={tag:p.q,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,n=e.widths,r=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),c=[];n.forEach((function(a,s){var o=e[a];if(delete l[a],o||""===o){var n=!s;if(Object(p.k)(o)){var i,r=n?"-":"-"+a+"-",u=f(n,a,o.size);c.push(Object(p.m)(d()(((i={})[u]=o.size||""===o.size,i["order"+r+o.order]=o.order||0===o.order,i["offset"+r+o.offset]=o.offset||0===o.offset,i)),t))}else{var m=f(n,a,o);c.push(m)}}})),c.length||c.push("col");var u=Object(p.m)(d()(a,c),t);return i.a.createElement(r,Object(s.a)({},l,{className:u}))};b.propTypes=v,b.defaultProps=g,a.a=b},583:function(e,a,t){},586:function(e,a,t){},591:function(e,a,t){e.exports=t.p+"static/media/banner-2.e6244c2a.jpg"},592:function(e,a,t){e.exports=t.p+"static/media/banner-3.bf5bb3db.jpg"},593:function(e,a,t){e.exports=t.p+"static/media/banner-4.9f527fa0.jpg"},594:function(e,a,t){e.exports=t.p+"static/media/banner-5.e373069d.jpg"},600:function(e,a,t){e.exports=t.p+"static/media/banner-1.4a4c2806.jpg"},601:function(e,a,t){e.exports=t.p+"static/media/banner-7.2b57003e.jpg"},607:function(e,a,t){e.exports=t.p+"static/media/banner-8.4d8cd617.jpg"},619:function(e,a,t){"use strict";var s=t(15),o=t(16),n=t(20),i=t(19),r=t(0),l=t.n(r),c=t(110),d=t.n(c),p=t(600),u=t.n(p),m=t(591),v=t.n(m),g=t(592),f=t.n(g),b=t(593),h=t.n(b),x=t(594),y=t.n(x),E=(t(620),t(601),t(607),t(621),t(622),{spaceBetween:200,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),w=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,E,l.a.createElement("div",null,l.a.createElement("img",{src:u.a,alt:"swiper 1",className:"img-fluid",style:{minHeight:"215px",marginBottom:"10px"}})),l.a.createElement("div",null,l.a.createElement("img",{src:v.a,alt:"swiper 2",className:"img-fluid",style:{minHeight:"230px"}})),l.a.createElement("div",null,l.a.createElement("img",{src:f.a,alt:"swiper 3",className:"img-fluid",style:{minHeight:"230px"}})),l.a.createElement("div",null,l.a.createElement("img",{src:h.a,alt:"swiper 4",className:"img-fluid",style:{minHeight:"230px"}})),l.a.createElement("div",null,l.a.createElement("img",{src:y.a,alt:"swiper 5",className:"img-fluid",style:{minHeight:"230px"}}))))}}]),t}(l.a.Component);a.a=w},620:function(e,a,t){e.exports=t.p+"static/media/banner-6.8e3bf2b9.jpg"},621:function(e,a,t){e.exports=t.p+"static/media/banner-9.72553850.jpg"},622:function(e,a,t){e.exports=t.p+"static/media/banner-10.91ab966f.jpg"},623:function(e,a,t){e.exports=t.p+"static/media/1.26e2ba97.png"},624:function(e,a,t){e.exports=t.p+"static/media/1.1fb34da0.png"},625:function(e,a,t){e.exports=t.p+"static/media/1.be0c1997.png"},626:function(e,a,t){e.exports=t.p+"static/media/1.ddb4fc24.png"},627:function(e,a,t){e.exports=t.p+"static/media/1.87f2b6a1.png"},628:function(e,a,t){e.exports=t.p+"static/media/1.5148d560.png"},629:function(e,a,t){e.exports=t.p+"static/media/1.8beacfdc.png"},630:function(e,a,t){e.exports=t.p+"static/media/1.c72859d1.png"},631:function(e,a,t){e.exports=t.p+"static/media/1.1b519eb4.png"},632:function(e,a,t){e.exports=t.p+"static/media/2.9a7aca8e.png"},633:function(e,a,t){e.exports=t.p+"static/media/2.fb070983.png"},634:function(e,a,t){e.exports=t.p+"static/media/2.bd78b133.png"},635:function(e,a,t){e.exports=t.p+"static/media/2.ad64180f.png"},636:function(e,a,t){e.exports=t.p+"static/media/2.5840bc8e.png"},637:function(e,a,t){e.exports=t.p+"static/media/2.a3502f05.png"},638:function(e,a,t){e.exports=t.p+"static/media/2.b449ddb7.png"},639:function(e,a,t){e.exports=t.p+"static/media/2.e00ce177.png"},640:function(e,a,t){e.exports=t.p+"static/media/2.139e4743.png"},691:function(e,a,t){},692:function(e,a,t){"use strict";var s=t(0),o=t.n(s),n=t(1),i=t.n(n);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var t,s,o=function(e,a){if(null==e)return{};var t,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=Object(s.forwardRef)((function(e,a){var t=e.color,s=void 0===t?"currentColor":t,n=e.size,i=void 0===n?24:n,c=l(e,["color","size"]);return o.a.createElement("svg",r({ref:a,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("polyline",{points:"12 16 16 12 12 8"}),o.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="ArrowRightCircle",a.a=c}}]);
//# sourceMappingURL=13.3aa24548.chunk.js.map