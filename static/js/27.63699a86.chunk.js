(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[27],{475:function(e,a,t){},624:function(e,a,t){},668:function(e,a,t){"use strict";t.r(a);var s=t(14),n=t(15),o=t(17),r=t(16),l=t(0),i=t.n(l),c=t(622),p=t(145),d=t(228),m=t(651),u=t(652),h=t(104),k=t.n(h),f=t(393),b=t(435),g=t(653),T=t(654),E=t(423),v=t(500),N=t(22),S=t(36),y=t.n(S),U=t(55),C=t(31),w=t.n(C),x=t(48),O=t(471);w.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var A=function(e){if(JSON.parse(localStorage.getItem("logInUserData"))){var a=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var t=Object(U.a)(y.a.mark((function t(s){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("backendapi/diary/list?user=".concat(a._id),{params:e,headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(a){s({type:"GET_TODOS",todos:a.data,routeParams:e})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},P=function(e){return function(a){a({type:"COMPLETE_TASK",id:e.id,value:e.isCompleted})}},j=function(e){return function(a){Promise.all([a({type:"STAR_TASK",id:e.id,value:e.isStarred})])}},D=function(e){return function(a){Promise.all([a({type:"IMPORTANT_TASK",id:e.id,value:e.isImportant})])}},I=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return e.props.mainSidebar(!1)}},i.a.createElement(f.a,{size:15})),i.a.createElement("div",{className:"todo-app-menu"},i.a.createElement("div",{className:"add-task"},i.a.createElement(d.a.Ripple,{block:!0,className:"btn-block",color:"warning",onClick:function(){e.props.addTask("open"),e.props.mainSidebar(!1)}},"Add Notes")),i.a.createElement(k.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1}},i.a.createElement(m.a,{className:"font-medium-1"},i.a.createElement(u.a,{className:"border-0 pt-0",action:!0,onClick:function(){e.props.changeFilter("all")},active:"/diary"===this.props.routerProps.location.pathname},i.a.createElement(b.a,{size:22}),i.a.createElement("span",{className:"align-middle ml-1"},"All"))),i.a.createElement("hr",null),i.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Filters"),i.a.createElement(m.a,{className:"font-medium-1"},i.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("important")},active:"/diary/important"===this.props.routerProps.location.pathname},i.a.createElement(g.a,{size:22}),i.a.createElement("span",{className:"align-middle ml-1"},"Important")),i.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("starred")},active:"/diary/starred"===this.props.routerProps.location.pathname},i.a.createElement(T.a,{size:22}),i.a.createElement("span",{className:"align-middle ml-1"},"Bookmark")),i.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("completed")},active:"/diary/completed"===this.props.routerProps.location.pathname},i.a.createElement(E.a,{size:22}),i.a.createElement("span",{className:"align-middle ml-1"},"Completed")),i.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("trashed")},active:"/diary/trashed"===this.props.routerProps.location.pathname},i.a.createElement(v.a,{size:22}),i.a.createElement("span",{className:"align-middle ml-1"},"Trashed"))),i.a.createElement("hr",null),i.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Labels"),i.a.createElement(m.a,{className:"font-medium-1"},i.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("personal")},active:"/diary/personal"===this.props.routerProps.location.pathname},i.a.createElement("span",{className:"bullet bullet-primary align-middle"}),i.a.createElement("span",{className:"align-middle ml-1"},"Personal")),i.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("professional")},active:"/diary/professional"===this.props.routerProps.location.pathname},i.a.createElement("span",{className:"bullet bullet-warning align-middle"}),i.a.createElement("span",{className:"align-middle ml-1"},"Professional")),i.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("others")},active:"/diary/others"===this.props.routerProps.location.pathname},i.a.createElement("span",{className:"bullet bullet-success align-middle"}),i.a.createElement("span",{className:"align-middle ml-1"},"Others")),i.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("todo")},active:"/diary/todo"===this.props.routerProps.location.pathname},i.a.createElement("span",{className:"bullet bullet-danger align-middle"}),i.a.createElement("span",{className:"align-middle ml-1"},"TO DO List"))))))}}]),t}(i.a.Component),z=Object(N.b)(null,{changeFilter:function(e){return function(a){a({type:"CHANGE_FILTER",filter:e}),x.a.push("/#/diary/".concat(e)),a(A({filter:e}))}}})(I),L=t(469),F=t(426),R=t(501),_=t(620),B=t(420),K=t(421),V=t(430),J=t(459),M=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e,n,o,r;Object(s.a)(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(r=a.call.apply(a,[this].concat(i))).state={open:!1,id:null,todos:[],handleUpdateTask:null,currentLocation:null===(e=r.props)||void 0===e||null===(n=e.routerProps)||void 0===n||null===(o=n.location)||void 0===o?void 0:o.pathname,value:""},r.getdiaryLIst=Object(U.a)(y.a.mark((function e(){var a,t,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.state.currentLocation){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.props.getTodos(r.state.currentLocation);case 4:r.setState({todos:null===(a=r.props)||void 0===a||null===(t=a.app)||void 0===t||null===(s=t.todo)||void 0===s?void 0:s.todos,handleUpdateTask:r.props.handleUpdateTask});case 5:case"end":return e.stop()}}),e)}))),r.handleOnChange=function(e){r.setState({value:e.target.value}),r.props.searchTask(e.target.value)},r}return Object(n.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.prevState&&(this.setState({todos:e.app.todo.todos}),this.props.clearPrevState())}},{key:"componentDidMount",value:function(){this.getdiaryLIst()}},{key:"render",value:function(){var e=this,a=this.state,t=a.todos,s=a.handleUpdateTask,n=a.value,o=this.props.routerProps.match.params.filter,r=n.length?this.props.app.todo.filteredTodos:t;if(void 0===r)return i.a.createElement("div",{className:"fallback-spinner vh-100"},i.a.createElement("div",{className:"loading"},i.a.createElement("div",{className:"effect-1 effects"}),i.a.createElement("div",{className:"effect-2 effects"}),i.a.createElement("div",{className:"effect-3 effects"})));var l=r.length>0?r.map((function(a,t){var n=new Date(a.createdAt);return i.a.createElement("li",{style:{border:"none",padding:"0 1.6rem"},className:"todo-item ".concat(a.isCompleted?"completed":""),key:t,onClick:function(){s(a)}},i.a.createElement(L.a,{isOpen:e.state.open,className:"modal-dialog-centered",backdrop:"static"},i.a.createElement(F.a,null,"Are you sure you want to delete this record?"),i.a.createElement(R.a,null,i.a.createElement(d.a,{color:"primary",className:"button-label",onClick:function(){e.setState({open:!1})}},"Cancel"),i.a.createElement(d.a,{color:"danger",onClick:function(){e.setState({open:!1}),e.props.trashTask(e.state.id)},className:"button-label"},"Delete"))),i.a.createElement(_.a,{className:"mt-1",color:a.isImportant?"danger":"primary"},i.a.createElement("div",{className:"todo-title-wrapper d-flex justify-content-between mb-50"},i.a.createElement("div",{className:"todo-title-area d-flex align-items-center"},i.a.createElement("div",{className:"title-wrapper d-flex"},i.a.createElement("h6",{className:"todo-title mt-50 mx-50"},a.title)),a.tags.length>0?i.a.createElement("div",{className:"chip-wrapper"},a.tags.map((function(e,a){return i.a.createElement("div",{className:"chip mb-0",key:a},i.a.createElement("div",{className:"chip-body"},i.a.createElement("span",{className:"chip-text"},i.a.createElement("span",{className:"bullet bullet-".concat("backend"===e?"warning":"doc"===e?"success":"bug"===e?"danger":"primary"," bullet-xs")}),i.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))):null),i.a.createElement("div",{className:"todo-item-action d-flex ".concat("trashed"===o?"justify-content-end":"")},i.a.createElement("div",{className:"todo-item-info d-inline-block ".concat("trashed"===o?"mr-1":"mr-1 mr-sm-0"),onClick:function(t){t.stopPropagation(),e.props.importantTask(a)}},i.a.createElement(g.a,{size:17,className:"".concat(a.isImportant?"text-danger":"")})),i.a.createElement("div",{className:"todo-item-favorite d-inline-block mr-1 mr-sm-0",onClick:function(t){t.stopPropagation(),e.props.starTask(a)}},i.a.createElement(T.a,{size:17,className:"".concat(a.isStarred?"text-warning":"")})),"trashed"!==o?i.a.createElement("div",{className:"todo-item-delete d-inline-block mr-1 mr-sm-0"},i.a.createElement(v.a,{size:17,onClick:function(t){t.stopPropagation(),e.setState({id:a.id,open:!0})}})):null)),i.a.createElement("p",{style:{fontSize:"8px"}},n.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),a.desc.length>0?i.a.createElement("p",{className:"todo-desc mb-0",style:{wordBreak:"break-all",whiteSpace:"normal"}},a.desc):""))})):i.a.createElement("p",{className:"p-1 text-center mt-2 font-medium-3 text-bold-500"},"No tasks at this time");return i.a.createElement("div",{className:"content-right"},i.a.createElement("div",{className:"todo-app-area"},i.a.createElement("div",{className:"todo-app-list-wrapper"},i.a.createElement("div",{className:"todo-app-list"},i.a.createElement("div",{className:"app-fixed-search"},i.a.createElement("div",{className:"sidebar-toggle d-inline-block d-lg-none",onClick:function(){return e.props.mainSidebar(!0)}},i.a.createElement(V.a,{size:24})),i.a.createElement(B.a,{style:{display:"flex",margin:"auto",justifyContent:"center"},className:"position-relative has-icon-left"},i.a.createElement("div",{style:{borderRadius:"1.428rem"}},i.a.createElement("div",{className:"form-control-position"},i.a.createElement(J.a,{size:15})),i.a.createElement(K.a,{style:{width:"100%"},type:"text",placeholder:"Search...",onChange:function(a){return e.handleOnChange(a)},value:n})))),i.a.createElement(k.a,{className:"todo-task-list",options:{wheelPropagation:!1}},i.a.createElement("ul",{className:"todo-task-list-wrapper"},l))))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.app.todo.routeParam!==a.currentLocation?{todos:e.app.todo.todos}:null}}]),t}(i.a.Component),H=Object(N.b)((function(e){return{app:e.todoApp}}),{getTodos:A,completeTask:P,starTask:j,importantTask:D,trashTask:function(e){return function(a,t){var s=t().todoApp.todo.routeParam;w.a.post("/api/app/todo/trash-todo",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){return a({type:"TRASH_TASK",id:e})})).then(a(A(s)))}},searchTask:function(e){return function(a){a({type:"SEARCH_TASK",val:e})}}})(M),G=t(4),Q=t(417),W=t(470),q=t(468),X=t(407),Y=t(486),Z=t(655),$=t(144),ee=t(545),ae=t.n(ee),te=t(568),se=(t(574),[{value:"Attachment",label:"Attachment",color:"#00B8D9",isFixed:!0},{value:"Scribble",label:"Scribble",color:"#00B8D9",isFixed:!0},{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"Video",label:"Video",color:"#0052CC",isFixed:!0},{value:"Voice",label:"Voice",color:"#0052CC",isFixed:!0}]),ne=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={audioDetails:{url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}},ptype:"",taskToUpdate:null,taskTitle:"",taskDesc:"",taskStatus:!1,taskStarred:!1,taskImportant:!1,newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}},e.handleAudioStop=function(a){console.log(a),e.setState({audioDetails:a})},e.handleAudioUpload=function(e){console.log(e)},e.handleRest=function(){e.setState({audioDetails:{url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}}})},e.handleNewTaskTags=function(a){var t=e.state.newTask.tags;t.includes(a)?t.splice(t.indexOf(a),1):t.push(a),e.setState(Object(G.a)(Object(G.a)({},e.state.newTask),{},{tags:a}))},e.renderTags=function(e){return e.map((function(e,a){return i.a.createElement("div",{className:"chip mb-0 mr-50",key:a},i.a.createElement("div",{className:"chip-body"},i.a.createElement("span",{className:"chip-text"},i.a.createElement("span",{className:"bullet bullet-".concat("professional"===e?"warning":"others"===e?"success":"todo"===e?"danger":"primary"," bullet-xs")}),i.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))},e}return Object(n.a)(t,[{key:"componentDidUpdate",value:function(e,a){(null!==this.props.taskToUpdate&&this.state.taskToUpdate!==this.props.taskToUpdate||null!==this.props.taskToUpdate&&this.state.taskStatus!==this.props.taskToUpdate.isCompleted||null!==this.props.taskToUpdate&&this.state.taskStarred!==this.props.taskToUpdate.isStarred||null!==this.props.taskToUpdate&&this.state.taskImportant!==this.props.taskToUpdate.isImportant)&&this.setState({taskToUpdate:this.props.taskToUpdate,taskTitle:this.props.taskToUpdate.title,taskDesc:this.props.taskToUpdate.desc,taskStatus:this.props.taskToUpdate.isCompleted,taskStarred:this.props.taskToUpdate.isStarred,taskImportant:this.props.taskToUpdate.isImportant})}},{key:"render",value:function(){var e=this,a=this.state,t=a.taskToUpdate,s=a.taskTitle,n=a.taskDesc,o=a.newTask,r=a.taskStatus;return i.a.createElement("div",{className:"task-sidebar ".concat(!0===this.props.addTaskState?"show":"")},i.a.createElement("div",{className:"task-header"},i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("div",{className:"task-type-title text-bold-600"},i.a.createElement("h3",{style:{color:"var(--warning)"}},this.props.taskToUpdate&&this.props.taskToUpdate.id?"Update Details":"Enter Details")),i.a.createElement("div",{className:"close-icon"},i.a.createElement(f.a,{className:"cursor-pointer",size:20,onClick:function(){e.props.addTask("close")}})))),i.a.createElement(k.a,null,i.a.createElement("div",{className:"task-body"},i.a.createElement("div",{className:"d-flex justify-content-between mb-2"},i.a.createElement("div",{className:"mark-complete"},this.props.taskToUpdate&&this.props.taskToUpdate.id&&i.a.createElement($.a,{color:"primary",className:"user-checkbox",icon:i.a.createElement(E.a,{className:"vx-icon",size:15}),label:"",checked:r,onChange:function(a){e.props.completeTask(e.props.taskToUpdate)}})),i.a.createElement("div",{className:"task-actions"},i.a.createElement(g.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskImportant||o.isImportant?"text-success":""),onClick:function(){null!==e.props.taskToUpdate?e.props.importantTask(e.props.taskToUpdate):e.setState({newTask:Object(G.a)(Object(G.a)({},e.state.newTask),{},{isImportant:!e.state.newTask.isImportant})})}}),i.a.createElement(T.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskStarred||o.isStarred?"text-warning":""),onClick:function(){null!==e.props.taskToUpdate?e.props.starTask(e.props.taskToUpdate):e.setState({newTask:Object(G.a)(Object(G.a)({},e.state.newTask),{},{isStarred:!e.state.newTask.isStarred})})}}),i.a.createElement(Q.a,{className:"d-inline-block"},i.a.createElement(W.a,{tag:"span"},i.a.createElement(Z.a,{className:"mr-50",size:20})),i.a.createElement(q.a,{tag:"ul",right:!0},i.a.createElement(X.a,{tag:"li"},i.a.createElement($.a,{color:"primary",className:"user-checkbox",icon:i.a.createElement(E.a,{className:"vx-icon",size:12}),label:"Personal",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("personal")||o.tags.includes("personal")),size:"sm",onChange:function(a){a.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(t.id,"personal"):e.handleNewTaskTags("personal")}})),i.a.createElement(X.a,{tag:"li"},i.a.createElement($.a,{color:"primary",labelColor:"#ff9f43",className:"user-checkbox",icon:i.a.createElement(E.a,{className:"vx-icon",size:12}),label:"Professional",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("professional")||o.tags.includes("professional")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(a){a.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(t.id,"professional"):e.handleNewTaskTags("professional")}})),i.a.createElement(X.a,{tag:"li"},i.a.createElement($.a,{color:"primary",className:"user-checkbox",icon:i.a.createElement(E.a,{className:"vx-icon",size:12}),label:"Others",labelColor:"#25af63",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("others")||o.tags.includes("others")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(a){a.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(t.id,"others"):e.handleNewTaskTags("others")}})),i.a.createElement(X.a,{tag:"li"},i.a.createElement($.a,{color:"primary",className:"user-checkbox",labelColor:"#ea5455",icon:i.a.createElement(E.a,{className:"vx-icon",size:12}),label:"TO DO List",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("todo")||o.tags.includes("todo")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(a){a.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(t.id,"todo"):e.handleNewTaskTags("todo")}})))))),i.a.createElement(B.a,{className:"form-label-group"},i.a.createElement(Y.a,{className:"React",classNamePrefix:"select",ref:this.state.selectAssetRef,name:"color",options:se,isClearable:!0,placeholder:"Select Message Type...",onChange:function(a){e.setState({ptype:a?a.value:""})}})),i.a.createElement(B.a,null,i.a.createElement(K.a,{type:"text",placeholder:"Title",value:null!==this.props.taskToUpdate?s:o.title,onChange:function(a){null!==e.props.taskToUpdate?e.setState({taskTitle:a.target.value}):e.setState({newTask:Object(G.a)(Object(G.a)({},e.state.newTask),{},{title:a.target.value})})}})),i.a.createElement(B.a,null,"Video"===this.state.ptype&&i.a.createElement(ae.a,{onRecordingComplete:function(e){console.log("videoBlob",e)}}),"Voice"===this.state.ptype&&i.a.createElement(te.a,{record:!0,title:"New recording",audioURL:this.state.audioDetails.url,showUIAudio:!0,handleAudioStop:function(a){return e.handleAudioStop(a)},handleAudioUpload:function(a){return e.handleAudioUpload(a)},handleRest:function(){return e.handleRest()}})),i.a.createElement(B.a,null,i.a.createElement(K.a,{type:"textarea",placeholder:"Description",rows:"5",value:null!==this.props.taskToUpdate?n:o.desc,onChange:function(a){null!==e.props.taskToUpdate?e.setState({taskDesc:a.target.value}):e.setState({newTask:Object(G.a)(Object(G.a)({},e.state.newTask),{},{desc:a.target.value})})}})),i.a.createElement("div",{className:"chip-wrapper my-1 d-flex flex-wrap"},null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags&&this.props.taskToUpdate.tags.length>0?this.renderTags(this.props.taskToUpdate.tags):null),i.a.createElement("div",{className:"d-flex justify-content-end",style:{textAlign:"right"}},i.a.createElement(d.a.Ripple,{outline:!0,className:"mr-1 mb-1 button-label",color:"secondary",onClick:function(){e.props.addTask("close"),e.props.handleUndoChanges(),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})}},"Cancel")," ",i.a.createElement(d.a.Ripple,{className:"mb-1 button-label",color:"warning",onClick:function(){if(console.log("taskToUpdate",t),null!==e.props.taskToUpdate){var a=t.isCompleted,o=t.isImportant,r=t.isStarred,l=t.tags;e.props.updateTask(t._id,s,n,t,a,o,r,l)}else e.props.addNewTask(e.state.newTask);e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})},disabled:!(s.length>0||o.title.length>0)},t&&t.id&&null!==this.props.taskToUpdate?"Update":"Add")))))}}]),t}(i.a.Component),oe=Object(N.b)((function(e){return{app:e.todoApp}}),{completeTask:P,importantTask:D,starTask:j,updateTask:function(e,a,t,s,n,o,r,l){var i={_id:e,title:a,desc:t,taskToUpdate:s,isCompleted:n,isImportant:o,isStarred:r,tags:l},c=w.a.post("/backendapi/diary/update",i,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}});return function(e,a){var t=a().todoApp.todo.routeParam;c.then((function(a){Promise.all([e({type:"UPDATE_TASK",ans:i})]).then((function(){return e(A(t))}))}))}},updateLabel:function(e,a){return function(t,s){t({type:"UPDATE_LABEL",label:a,id:e})}},addNewTask:function(e){return function(a,t){var s=t().todoApp.todo.routeParam,n=JSON.parse(localStorage.getItem("logInUserData"))._id;e.user=n,w.a.post("/backendapi/diary/add",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(t){a({type:"ADD_TASK",task:e}),a(A(s)),O.b.success("Note Added Successfully!!")}))}}})(ne),re=(t(474),t(475),t(624),window.matchMedia("(min-width: 992px)")),le=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={addTask:!1,sidebarDocked:re.matches,sidebarOpen:!1,taskToUpdate:null,prevState:null},e.onSetSidebarOpen=function(a){e.setState({sidebarOpen:a})},e.mediaQueryChanged=function(){e.setState({sidebarDocked:re.matches,sidebarOpen:!1})},e.handleAddTask=function(a){"open"===a?e.setState({addTask:!0}):e.setState({addTask:!1,taskToUpdate:null})},e.handleUpdateTask=function(a){void 0!==a?e.setState({addTask:!0,taskToUpdate:a}):e.setState({taskToUpdate:null})},e.handleUndoChanges=function(){console.log("arrrrrrrrrrrrr"),e.setState({prevState:!0})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(O.a,null),i.a.createElement("h2",{className:"warning spacing nodisplay"},"Secret Diary"),i.a.createElement("div",{className:"todo-application position-relative"},i.a.createElement("div",{className:"app-content-overlay ".concat(this.state.addTask||this.state.sidebarOpen?"show":""),onClick:function(){e.handleAddTask("close"),e.onSetSidebarOpen(!1)}}),i.a.createElement(p.a.Consumer,null,(function(a){return i.a.createElement(c.a,{sidebar:i.a.createElement(z,{routerProps:e.props,addTask:e.handleAddTask,mainSidebar:e.onSetSidebarOpen}),docked:e.state.sidebarDocked,open:e.state.sidebarOpen,sidebarClassName:"sidebar-content todo-sidebar d-flex",touch:!1,contentClassName:"sidebar-children d-none",pullRight:"rtl"===a.state.direction},'""')})),i.a.createElement(H,{routerProps:this.props,handleUpdateTask:this.handleUpdateTask,mainSidebar:this.onSetSidebarOpen,prevState:this.state.prevState,clearPrevState:function(){e.setState({prevState:!1})}}),i.a.createElement(oe,{addTask:this.handleAddTask,addTaskState:this.state.addTask,taskToUpdate:this.state.taskToUpdate,newTask:this.state.newTask,mainSidebar:this.onSetSidebarOpen,handleUndoChanges:this.handleUndoChanges})))}}]),t}(i.a.Component);a.default=le}}]);
//# sourceMappingURL=27.63699a86.chunk.js.map