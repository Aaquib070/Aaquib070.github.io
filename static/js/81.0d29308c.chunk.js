(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[81],{1549:function(e,t,a){},2106:function(e,t,a){"use strict";a.r(t);var n=a(11),s=a(12),i=a(14),r=a(13),c=a(0),o=a.n(c),l=a(911),h=a(173),u=a(77),d=a.n(u),p=a(123),m=a(794),f=a(1271),v=a(817),b=a(812),g=a(186),S=a(401),E=a(42),y=a.n(E),N=a(24),C=a(38),w=a.n(C),k=function(){return function(e){w.a.get("api/app/chat/chats").then((function(t){e({type:"GET_CONTACTS",contacts:t.data.contacts,chats:t.data.chats})})).catch((function(e){return console.log(e)}))}},T=a(79),O=a.n(T),x=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={chatsContacts:[],contacts:[],messages:[],status:null,value:""},e.getChatContents=function(){e.props.getChats(),e.props.getContactChats()},e.handleOnChange=function(t){e.setState({value:t.target.value}),e.props.searchContacts(t.target.value)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getChatContents();case 2:this.setState({chatsContacts:this.props.chat.chatContacts,contacts:this.props.chat.contacts,chats:this.props.chat.chats,status:this.props.chat.status});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.contacts,n=t.chatsContacts,s=t.chats,i=t.status,r=t.value,c=r.length?this.props.chat.filteredContacts:a,l=r.length?this.props.chat.filteredChats:n,h=c.length>0?c.map((function(t){return o.a.createElement("li",{key:t.uid,onClick:function(){e.props.handleActiveChat(t.uid,t,s[t.uid]),e.props.markSeenAllMessages(t.uid),e.props.mainSidebar(!1)}},o.a.createElement("div",{className:"pr-1"},o.a.createElement("span",{className:"avatar avatar-md m-0"},o.a.createElement("img",{src:t.photoURL,alt:t.displayName,height:"38",width:"38"}))),o.a.createElement("div",{className:"user-chat-info"},o.a.createElement("div",{className:"contact-info"},o.a.createElement("h5",{className:"text-bold-600 mb-0"},t.displayName),o.a.createElement("p",{className:"truncate"},t.about))))})):null,u=l&&Array.isArray(l)?l.map((function(t){var a=s[t.uid]&&s[t.uid].msg?s[t.uid].msg.slice(-1)[0]:null,n=new Date(a&&a.time?a.time:null),i=n.toLocaleString("default",{month:"short"}),r=n.getDate(),c=s[t.uid]&&s[t.uid].msg?s[t.uid].msg.filter((function(e){return!1===e.isSeen&&!0!==e.isSent})).length:null,l=void 0!==s[t.uid]?s[t.uid]:null;return o.a.createElement("li",{key:t.uid,onClick:function(){e.props.handleActiveChat(t.uid,t,l),e.props.mainSidebar(!1),e.props.markSeenAllMessages(t.uid)},className:"".concat(e.props.activeChatID===t.uid?"active":"")},o.a.createElement("div",{className:"pr-1"},o.a.createElement("span",{className:"avatar avatar-md m-0"},o.a.createElement("img",{src:t.photoURL,alt:t.displayName,height:"38",width:"38"}))),o.a.createElement("div",{className:"user-chat-info"},o.a.createElement("div",{className:"contact-info"},o.a.createElement("h5",{className:"text-bold-600 mb-0"},t.displayName),o.a.createElement("p",{className:"truncate"},a?a.textContent:t.about)),o.a.createElement("div",{className:"contact-meta d-flex- flex-column"},o.a.createElement("span",{className:"float-right mb-25"},i+" "+r),c>0?o.a.createElement("div",{className:"unseen-msg"},o.a.createElement(m.a,{className:"badge-md float-right",color:"primary",pill:!0},c)):null)))})):null;return o.a.createElement(f.a,{className:"sidebar-content h-100"},o.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return e.props.mainSidebar(!1)}},o.a.createElement(g.a,{size:15})),o.a.createElement("div",{className:"chat-fixed-search"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("div",{className:"sidebar-profile-toggle position-relative d-inline-flex"},o.a.createElement("div",{className:"avatar",onClick:function(){return e.props.handleUserSidebar("open")}},o.a.createElement("img",{src:O.a,alt:"User Profile",height:"40",width:"40"}),o.a.createElement("span",{className:"dnd"===i?"avatar-status-busy":"away"===i?"avatar-status-away":"offline"===i?"avatar-status-offline":"avatar-status-online"}))),o.a.createElement(v.a,{className:"position-relative has-icon-left mx-1 my-0 w-100"},o.a.createElement(b.a,{className:"round",type:"text",placeholder:"Search contact or start a new chat",onChange:function(t){return e.handleOnChange(t)},value:r}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(S.a,{size:15}))))),o.a.createElement(y.a,{className:"chat-user-list list-group",options:{wheelPropagation:!1}},o.a.createElement("h3",{className:"primary p-1 mb-0"},"Chats"),o.a.createElement("ul",{className:"chat-users-list-wrapper media-list"},u),o.a.createElement("h3",{className:"primary p-1 mb-0"},"Contacts"),o.a.createElement("ul",{className:"chat-users-list-wrapper media-list"},h)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.chat.chatContacts.length!==t.chatContacts||e.chat.contacts.length!==t.contacts||e.chat.chats.length!==t.chats||e.chat.status!==t.status?{chatsContacts:e.chat.chatContacts,contacts:e.chat.contacts,chats:e.chat.chats,status:e.chat.status}:null}}]),a}(o.a.Component),j=Object(N.b)((function(e){return{chat:e.chatApp.chats}}),{getChats:k,getContactChats:function(){return function(e){w.a.get("api/app/chat/chat-contacts").then((function(t){e({type:"GET_CHAT_CONTACTS",chats:t.data})})).catch((function(e){return console.log(e)}))}},searchContacts:function(e){return function(t){t({type:"SEARCH_CONTACTS",query:e})}},markSeenAllMessages:function(e){return function(t){w.a.post("/api/apps/chat/mark-all-seen/",{contactId:e}).then((function(a){t({type:"MARK_AS_SEEN",id:e})})).catch((function(e){return console.log(e)}))}}})(x),D=a(29),P=a.n(D),A=a(175),W=a(355),X=a(353),U=a(420),R=a(402),M=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={msg:"",activeUser:null,activeChat:null},e.handleSendMessage=function(t,a,n){n.length>0&&(e.props.sendMessage(t,a,n),e.setState({msg:""}))},e.handleTime=function(e,t){var a=new Date(Date.parse(e)),n=new Date(Date.parse(t));return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()&&a.getDate()===n.getDate()},e.scrollToBottom=function(){var t=P.a.findDOMNode(e.chatArea);t.scrollTop=t.scrollHeight},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.state.activeUser,a=t&&t.uid?t.uid:null,n=t&&t.uid?this.props.chat.chats[a]:null,s=n&&void 0!==n&&n.msg?n.msg.map((function(a,s){return o.a.createElement(o.a.Fragment,{key:s},function(){if(s>0&&!e.handleTime(a.time,n.msg[s-1].time))return o.a.createElement("div",{className:"divider"},o.a.createElement("div",{className:"divider-text"},(new Date).getDate()+" "+(new Date).toLocaleString("default",{month:"short"})))}(),o.a.createElement("div",{className:"chat ".concat(!0!==a.isSent?"chat-left":"chat-right")},s>0?!0===a.isSent&&!0!==n.msg[s-1].isSent?o.a.createElement("div",{className:"chat-avatar"},o.a.createElement("div",{className:"avatar m-0"},o.a.createElement("img",{src:O.a,alt:"chat avatar",height:"40",width:"40"}))):!0!==a.isSent?o.a.createElement("div",{className:"chat-avatar"},o.a.createElement("div",{className:"avatar m-0"},o.a.createElement("img",{src:t.photoURL,alt:"chat avatar",height:"40",width:"40"}))):"":o.a.createElement("div",{className:"chat-avatar"},o.a.createElement("div",{className:"avatar m-0"},o.a.createElement("img",{src:a.isSent?O.a:t.photoURL,alt:"chat avatar",height:"40",width:"40"}))),o.a.createElement("div",{className:"chat-body"},o.a.createElement("div",{className:"chat-content"},a.textContent))))})):null;return o.a.createElement("div",{className:"content-right"},o.a.createElement("div",{className:"chat-app-window"},o.a.createElement("div",{className:"start-chat-area ".concat(null!==t?"d-none":"d-flex")},o.a.createElement("span",{className:"mb-1 start-chat-icon"},o.a.createElement(W.a,{size:50})),o.a.createElement("h4",{className:"py-50 px-1 sidebar-toggle start-chat-text",onClick:function(){if(!1!==e.props.mql.matches)return null;e.props.mainSidebar(!0)}},"Start Conversation")),o.a.createElement("div",{className:"active-chat ".concat(null===t?"d-none":"d-block")},o.a.createElement("div",{className:"chat_navbar"},o.a.createElement("header",{className:"chat_header d-flex justify-content-between align-items-center p-1"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("div",{className:"sidebar-toggle d-block d-lg-none mr-1",onClick:function(){return e.props.mainSidebar(!0)}},o.a.createElement(X.a,{size:24})),o.a.createElement("div",{className:"avatar user-profile-toggle m-0 m-0 mr-1",onClick:function(){return e.props.handleReceiverSidebar("open")}},o.a.createElement("img",{src:null!==t?t.photoURL:"",alt:null!==t?t.displayName:"",height:"40",width:"40"}),o.a.createElement("span",{className:"\n                    ".concat(null!==t&&"do not disturb"===t.status?"avatar-status-busy":null!==t&&"away"===t.status?"avatar-status-away":null!==t&&"offline"===t.status?"avatar-status-offline":"avatar-status-online","\n                    ")})),o.a.createElement("h6",{className:"mb-0"},null!==t?t.displayName:"")),o.a.createElement("span",{className:"favorite",onClick:function(){n&&e.props.togglePinned(t.uid,!n.isPinned)}},o.a.createElement(U.a,{size:22,stroke:n&&!0===n.isPinned?"#FF9F43":"#626262"})))),o.a.createElement(y.a,{className:"user-chats",options:{wheelPropagation:!1},ref:function(t){e.chatArea=t}},o.a.createElement("div",{className:"chats"},s)),o.a.createElement("div",{className:"chat-app-form"},o.a.createElement("form",{className:"chat-app-input d-flex align-items-center",onSubmit:function(a){a.preventDefault(),e.handleSendMessage(t.uid,!1,e.state.msg,t)}},o.a.createElement(b.a,{type:"text",className:"message mr-1 ml-50",placeholder:"Type your message",value:this.state.msg,onChange:function(t){t.preventDefault(),e.setState({msg:t.target.value})}}),o.a.createElement(A.a,{color:"primary"},o.a.createElement(R.a,{className:"d-lg-none",size:15}),o.a.createElement("span",{className:"d-lg-block d-none"},"Send")))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.activeUser!==t.activeChat||e.activeChat!==t.activeChat?{activeUser:e.activeUser,activeChat:e.activeChat}:null}}]),a}(o.a.Component),z=Object(N.b)((function(e){return{chat:e.chatApp.chats}}),{togglePinned:function(e,t){return function(a){w.a.post("/api/apps/chat/set-pinned/",{contactId:e,value:t}).then((function(n){a({type:"SET_PINNED",id:e,value:t})})).catch((function(e){return console.log(e)}))}},sendMessage:function(e,t,a){return a.length>0?function(n){var s={textContent:a,isSent:!0,isSeen:!1,time:(new Date).toString()};w.a.post("/api/app/chat/send-message",{contactId:e,message:s,isPinned:t}).then((function(i){n({type:"SEND_MESSAGE",msg:s,id:e,isPinned:t,text:a}),n(k())})).catch((function(e){return console.log(e)}))}:void 0}})(M),I=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activeUser:null},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.activeUser;return o.a.createElement("div",{className:"user-profile-sidebar ".concat(this.props.receiverProfile?"show":null)},o.a.createElement("header",{className:"user-profile-header"},o.a.createElement("span",{className:"close-icon",onClick:function(){return e.props.handleReceiverSidebar("close")}},o.a.createElement(g.a,{size:24})),o.a.createElement("div",{className:"header-profile-sidebar"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:null!==t?t.photoURL:null,alt:null!==t?t.displayName:null,height:"66",width:"66"}),o.a.createElement("span",{className:"".concat(null!==t&&"do not disturb"===t.status?"avatar-status-busy":null!==t&&"away"===t.status?"avatar-status-away":null!==t&&"offline"===t.status?"avatar-status-offline":"avatar-status-online"," avatar-status-lg")})),o.a.createElement("h4",{className:"chat-user-name"},null!==t?t.displayName:null))),o.a.createElement(y.a,{className:"user-profile-sidebar-area p-2",options:{wheelPropagation:!1}},o.a.createElement("h6",null,"About"),o.a.createElement("p",null,null!==t?t.about:null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.activeUser!==t.activeUser?{activeUser:e.activeUser}:null}}]),a}(o.a.Component),F=a(31),_=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={value:"Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",status:null},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.status;return o.a.createElement("div",{className:"chat-profile-sidebar ".concat(this.props.userProfile?"show":null)},o.a.createElement("header",{className:"chat-profile-header"},o.a.createElement("div",{className:"close-icon",onClick:function(){return e.props.handleUserSidebar("close")}},o.a.createElement(g.a,{size:24})),o.a.createElement("div",{className:"header-profile-sidebar"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{src:O.a,alt:"User Profile",height:"66",width:"66"}),o.a.createElement("span",{className:"".concat("offline"===t?"avatar-status-offline":"dnd"===t?"avatar-status-busy":"away"===t?"avatar-status-away":"avatar-status-online"," avatar-status-lg")})),o.a.createElement("h4",{className:"chat-user-name"},"Aaquib Faridi"))),o.a.createElement("div",{className:"profile-sidebar-area"},o.a.createElement(y.a,{className:"scroll-area",options:{wheelPropagation:!1}},o.a.createElement("h6",null,"About"),o.a.createElement("div",{className:"about-user"},o.a.createElement(b.a,{type:"textarea",name:"text",id:"userAbout",rows:"5",value:this.state.value,maxLength:"120",onChange:function(t){return e.setState({value:t.target.value})}}),o.a.createElement("small",{className:"counter-value float-right"},"".concat(this.state.value.length," / 120"))),o.a.createElement("h3",{className:"mt-3"},"Status"),o.a.createElement("ul",{className:"list-unstyled user-status mb-0"},o.a.createElement("li",{className:"pb-50"},o.a.createElement(F.a,{label:"Active",color:"success",defaultChecked:!0,name:"userStatus",onClick:function(){return e.props.changeStatus("active")}})),o.a.createElement("li",{className:"pb-50"},o.a.createElement(F.a,{label:"Do Not Disturb",color:"danger",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("dnd")}})),o.a.createElement("li",{className:"pb-50"},o.a.createElement(F.a,{label:"Away",color:"warning",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("away")}})),o.a.createElement("li",{className:"pb-50"},o.a.createElement(F.a,{label:"Offline",color:"secondary",defaultChecked:!1,name:"userStatus",onClick:function(){return e.props.changeStatus("offline")}}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.chat.status!==t.status?{status:e.chat.status}:null}}]),a}(o.a.Component),L=Object(N.b)((function(e){return{chat:e.chatApp.chats}}),{changeStatus:function(e){return function(t){t({type:"CHANGE_STATUS",status:e})}}})(_),H=(a(1549),window.matchMedia("(min-width: 992px)")),q=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={userProfile:!1,sidebarDocked:H.matches,sidebarOpen:!1,activeChatID:null,activeChat:null,activeUser:null,receiverProfile:!1,userSidebar:!1},e.handleUserSidebar=function(t){"open"===t?e.setState({userProfile:!0}):e.setState({userProfile:!1})},e.handleActiveChat=function(t,a,n){e.setState({activeChatID:t,activeUser:a,activeChat:n})},e.onSetSidebarOpen=function(t){e.setState({sidebarOpen:t})},e.mediaQueryChanged=function(){e.setState({sidebarDocked:H.matches,sidebarOpen:!1})},e.handleReceiverSidebar=function(t){"open"===t?e.setState({receiverProfile:!0}):e.setState({receiverProfile:!1})},e.handleUserSidebar=function(t){"open"===t?e.setState({userSidebar:!0}):e.setState({userSidebar:!1})},e}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){H.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){H.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"chat-application position-relative"},o.a.createElement("div",{className:"chat-overlay ".concat(this.state.receiverProfile||this.state.userSidebar||this.state.sidebarOpen?"show":"d-none"),onClick:function(){e.handleReceiverSidebar("close"),e.handleUserSidebar("close"),e.onSetSidebarOpen(!1)}}),o.a.createElement(h.a.Consumer,null,(function(t){return o.a.createElement(l.a,{sidebar:o.a.createElement(j,{activeChatID:e.state.activeChatID,handleActiveChat:e.handleActiveChat,handleUserSidebar:e.handleUserSidebar,mainSidebar:e.onSetSidebarOpen}),docked:e.state.sidebarDocked,open:e.state.sidebarOpen,touch:!1,sidebarClassName:"chat-sidebar",contentClassName:"sidebar-children d-none",pullRight:"rtl"===t.state.direction},'""')})),o.a.createElement(L,{userProfile:this.state.userSidebar,handleUserSidebar:this.handleUserSidebar}),o.a.createElement(z,{activeChat:this.state.activeChat,activeUser:this.state.activeUser,handleReceiverSidebar:this.handleReceiverSidebar,mainSidebar:this.onSetSidebarOpen,mql:H,handleActiveChat:this.handleActiveChat}),o.a.createElement(I,{activeUser:this.state.activeUser,receiverProfile:this.state.receiverProfile,handleReceiverSidebar:this.handleReceiverSidebar}))}}]),a}(o.a.Component);t.default=q},812:function(e,t,a){"use strict";var n=a(5),s=a(8),i=a(10),r=a(15),c=a(0),o=a.n(c),l=a(1),h=a.n(l),u=a(3),d=a.n(u),p=a(4),m={children:h.a.node,type:h.a.string,size:h.a.string,bsSize:h.a.string,valid:h.a.bool,invalid:h.a.bool,tag:p.tagPropType,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),plaintext:h.a.bool,addon:h.a.bool,className:h.a.string,cssModule:h.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,r=e.bsSize,c=e.valid,l=e.invalid,h=e.tag,u=e.addon,m=e.plaintext,f=e.innerRef,v=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(i)>-1,g=new RegExp("\\D","g"),S=h||("select"===i||"textarea"===i?i:"input"),E="form-control";m?(E+="-plaintext",S=h||"input"):"file"===i?E+="-file":"range"===i?E+="-range":b&&(E=u?null:"form-check-input"),v.size&&g.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=v.size,delete v.size);var y=Object(p.mapToCssModules)(d()(t,l&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,E),a);return("input"===S||h&&"function"===typeof h)&&(v.type=i),v.children&&!m&&"select"!==i&&"string"===typeof S&&"select"!==S&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(S,Object(n.a)({},v,{ref:f,className:y,"aria-invalid":l}))},t}(o.a.Component);f.propTypes=m,f.defaultProps={type:"text"},t.a=f},817:function(e,t,a){"use strict";var n=a(5),s=a(8),i=a(0),r=a.n(i),c=a(1),o=a.n(c),l=a(3),h=a.n(l),u=a(4),d={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.row,c=e.disabled,o=e.check,l=e.inline,d=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(u.mapToCssModules)(h()(t,!!i&&"row",o?"form-check":"form-group",!(!o||!l)&&"form-check-inline",!(!o||!c)&&"disabled"),a);return"fieldset"===d&&(p.disabled=c),r.a.createElement(d,Object(n.a)({},p,{className:m}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},911:function(e,t,a){"use strict";var n=a(912),s=a.n(n),i=a(44),r=a.n(i),c=a(19),o=a.n(c),l=a(0),h=a.n(l),u=(a(1),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),d={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},p={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},m={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},f={zIndex:1,position:"fixed",top:0,bottom:0},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},a.overlayClicked=a.overlayClicked.bind(o()(o()(a))),a.onTouchStart=a.onTouchStart.bind(o()(o()(a))),a.onTouchMove=a.onTouchMove.bind(o()(o()(a))),a.onTouchEnd=a.onTouchEnd.bind(o()(o()(a))),a.onScroll=a.onScroll.bind(o()(o()(a))),a.saveSidebarRef=a.saveSidebarRef.bind(o()(o()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!e}),this.saveSidebarWidth()},a.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},a.onTouchStart=function(e){if(!this.isTouching()){var t=e.targetTouches[0];this.setState({touchIdentifier:t.identifier,touchStartX:t.clientX,touchCurrentX:t.clientX})}},a.onTouchMove=function(e){if(this.isTouching())for(var t=0;t<e.targetTouches.length;t++)if(e.targetTouches[t].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:e.targetTouches[t].clientX});break}},a.onTouchEnd=function(){if(this.isTouching()){var e=this.touchSidebarWidth();(this.props.open&&e<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&e>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},a.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},a.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},a.isTouching=function(){return null!==this.state.touchIdentifier},a.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},a.saveSidebarWidth=function(){var e=this.sidebar.offsetWidth;e!==this.state.sidebarWidth&&this.setState({sidebarWidth:e})},a.saveSidebarRef=function(e){this.sidebar=e},a.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},a.render=function(){var e,t=s()({},d,this.props.styles.sidebar),a=s()({},p,this.props.styles.content),n=s()({},m,this.props.styles.overlay),i=this.state.dragSupported&&this.props.touch,r=this.isTouching(),c={className:this.props.rootClassName,style:s()({},u,this.props.styles.root),role:"navigation",id:this.props.rootId},o=this.props.shadow&&(r||this.props.open||this.props.docked);if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",o&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",o&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),r){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),n.opacity=l,n.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?a.right=this.state.sidebarWidth+"px":a.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",n.opacity=1,n.visibility="visible");if(!r&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",a.transition="none",n.transition="none"),i)if(this.props.open)c.onTouchStart=this.onTouchStart,c.onTouchMove=this.onTouchMove,c.onTouchEnd=this.onTouchEnd,c.onTouchCancel=this.onTouchEnd,c.onScroll=this.onScroll;else{var v=s()({},f,this.props.styles.dragHandle);v.width=this.props.touchHandleWidth,this.props.pullRight?v.right=0:v.left=0,e=h.a.createElement("div",{style:v,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return h.a.createElement("div",c,h.a.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),h.a.createElement("div",{className:this.props.overlayClassName,style:n,onClick:this.overlayClicked,id:this.props.overlayId}),h.a.createElement("div",{className:this.props.contentClassName,style:a,id:this.props.contentId},e,this.props.children))},t}(l.Component);v.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},t.a=v},912:function(e,t,a){var n=a(20);e.exports=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){n(e,t,a[t])}))}return e}}}]);
//# sourceMappingURL=81.0d29308c.chunk.js.map