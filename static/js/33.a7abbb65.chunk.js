(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[33],{1100:function(e,a,t){"use strict";t.r(a);var s=t(11),n=t(12),o=t(14),r=t(13),l=t(0),c=t.n(l),i=t(901),p=t(169),d=t(550),m=t(1086),u=t(1087),h=t(39),k=t.n(h),f=t(171),b=t(321),T=t(404),E=t(318),g=t(245),v=t(419),N=t(24),y=t(75),S=t.n(y),U=t(121),C=t(38),w=t.n(C),x=t(30),O=t(811);w.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var A=function(e){var a=JSON.parse(localStorage.getItem("logInUserData"))._id;return e.user=a,function(){var a=Object(U.a)(S.a.mark((function a(t){return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.get("backendapi/diary/list",{params:e}).then((function(a){console.log("qqqqqqqqqqqqqqqq",e),console.log("qqqqqqqqqqqqqqqq",a.data),t({type:"GET_TODOS",todos:a.data,routeParams:e})})).catch((function(e){return console.log(e)}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},P=function(e){return function(a){a({type:"COMPLETE_TASK",id:e.id,value:e.isCompleted})}},j=function(e){return function(a){Promise.all([a({type:"STAR_TASK",id:e.id,value:e.isStarred})])}},q=function(e){return function(a){Promise.all([a({type:"IMPORTANT_TASK",id:e.id,value:e.isImportant})])}},z=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return e.props.mainSidebar(!1)}},c.a.createElement(f.a,{size:15})),c.a.createElement("div",{className:"todo-app-menu"},c.a.createElement("div",{className:"add-task"},c.a.createElement(d.a.Ripple,{block:!0,className:"btn-block my-1",color:"primary",onClick:function(){e.props.addTask("open"),e.props.mainSidebar(!1)}},"Add Notes")),c.a.createElement(k.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1}},c.a.createElement(m.a,{className:"font-medium-1"},c.a.createElement(u.a,{className:"border-0 pt-0",action:!0,onClick:function(){e.props.changeFilter("all")},active:"/diary"===this.props.routerProps.location.pathname},c.a.createElement(b.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"All"))),c.a.createElement("hr",null),c.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Filters"),c.a.createElement(m.a,{className:"font-medium-1"},c.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("starred")},active:"/diary/starred"===this.props.routerProps.location.pathname},c.a.createElement(T.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Starred")),c.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("important")},active:"/diary/important"===this.props.routerProps.location.pathname},c.a.createElement(E.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Important")),c.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("completed")},active:"/diary/completed"===this.props.routerProps.location.pathname},c.a.createElement(g.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Completed")),c.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("trashed")},active:"/diary/trashed"===this.props.routerProps.location.pathname},c.a.createElement(v.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Trashed"))),c.a.createElement("hr",null),c.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Labels"),c.a.createElement(m.a,{className:"font-medium-1"},c.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("personal")},active:"/diary/personal"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-primary align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Personal")),c.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("professional")},active:"/diary/professional"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-warning align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Professional")),c.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("others")},active:"/diary/others"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-success align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Others")),c.a.createElement(u.a,{className:"border-0",onClick:function(){e.props.changeFilter("todo")},active:"/diary/todo"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-danger align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"TO DO List"))))))}}]),t}(c.a.Component),D=Object(N.b)(null,{changeFilter:function(e){return function(a){a({type:"CHANGE_FILTER",filter:e}),x.a.push("/#/diary/".concat(e)),a(A({filter:e}))}}})(z),I=t(880),F=t(871),L=t(857),R=t(336),_=t(385),K=t(809),B=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={todos:[],handleUpdateTask:null,currentLocation:e.props.routerProps.location.pathname,value:""},e.handleOnChange=function(a){e.setState({value:a.target.value}),e.props.searchTask(a.target.value)},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=Object(U.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getTodos(this.props.routerProps.match.params);case 2:this.setState({todos:this.props.app.todo.todos,handleUpdateTask:this.props.handleUpdateTask});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.todos,s=a.handleUpdateTask,n=a.value,o=this.props.routerProps.match.params.filter,r=n.length?this.props.app.todo.filteredTodos:t;if(void 0===r||0===r.length)return c.a.createElement("div",{className:"fallback-spinner vh-100"},c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"effect-1 effects"}),c.a.createElement("div",{className:"effect-2 effects"}),c.a.createElement("div",{className:"effect-3 effects"})));var l=r.length>0?r.map((function(a,t){var n=new Date(a.createdAt);return c.a.createElement("li",{style:{border:"none",padding:"0 1.6rem"},className:"todo-item ".concat(a.isCompleted?"completed":""),key:t,onClick:function(){s(a)}},c.a.createElement(I.a,{className:"mt-1",color:a.isImportant?"danger":"primary"},c.a.createElement("div",{className:"todo-title-wrapper d-flex justify-content-between mb-50"},c.a.createElement("div",{className:"todo-title-area d-flex align-items-center"},c.a.createElement("div",{className:"title-wrapper d-flex"},c.a.createElement("h6",{className:"todo-title mt-50 mx-50"},a.title)),a.tags.length>0?c.a.createElement("div",{className:"chip-wrapper"},a.tags.map((function(e,a){return c.a.createElement("div",{className:"chip mb-0",key:a},c.a.createElement("div",{className:"chip-body"},c.a.createElement("span",{className:"chip-text"},c.a.createElement("span",{className:"bullet bullet-".concat("backend"===e?"warning":"doc"===e?"success":"bug"===e?"danger":"primary"," bullet-xs")}),c.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))):null),c.a.createElement("div",{className:"todo-item-action d-flex ".concat("trashed"===o?"justify-content-end":"")},c.a.createElement("div",{className:"todo-item-info d-inline-block ".concat("trashed"===o?"mr-1":"mr-1 mr-sm-0"),onClick:function(t){t.stopPropagation(),e.props.importantTask(a)}},c.a.createElement(E.a,{size:17,className:"".concat(a.isImportant?"text-danger":"")})),c.a.createElement("div",{className:"todo-item-favorite d-inline-block mr-1 mr-sm-0",onClick:function(t){t.stopPropagation(),e.props.starTask(a)}},c.a.createElement(T.a,{size:17,className:"".concat(a.isStarred?"text-warning":"")})),"trashed"!==o?c.a.createElement("div",{className:"todo-item-delete d-inline-block mr-1 mr-sm-0",onClick:function(t){t.stopPropagation(),e.props.trashTask(a.id)}},c.a.createElement(v.a,{size:17})):null)),c.a.createElement("p",{style:{fontSize:"8px"}},n.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),a.desc.length>0?c.a.createElement("p",{className:"todo-desc mb-0",style:{wordBreak:"break-all",whiteSpace:"normal"}},a.desc):""))})):c.a.createElement("p",{className:"p-1 text-center mt-2 font-medium-3 text-bold-500"},"No tasks at this time");return c.a.createElement("div",{className:"content-right"},c.a.createElement("div",{className:"todo-app-area"},c.a.createElement("div",{className:"todo-app-list-wrapper"},c.a.createElement("div",{className:"todo-app-list"},c.a.createElement("div",{className:"app-fixed-search"},c.a.createElement("div",{className:"sidebar-toggle d-inline-block d-lg-none",onClick:function(){return e.props.mainSidebar(!0)}},c.a.createElement(R.a,{size:24})),c.a.createElement(F.a,{style:{display:"flex",margin:"auto",justifyContent:"center"},className:"position-relative has-icon-left"},c.a.createElement("div",{style:{borderRadius:"1.428rem"}},c.a.createElement("div",{className:"form-control-position"},c.a.createElement(_.a,{size:15})),c.a.createElement(L.a,{style:{width:"100%"},type:"text",placeholder:"Search...",onChange:function(a){return e.handleOnChange(a)},value:n})))),c.a.createElement(k.a,{className:"todo-task-list",options:{wheelPropagation:!1}},c.a.createElement("ul",{className:"todo-task-list-wrapper"},l))))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.app.todo.routeParam!==a.currentLocation?{todos:e.app.todo.todos}:null}}]),t}(c.a.Component),M=Object(N.b)((function(e){return{app:e.todoApp}}),{getTodos:A,completeTask:P,starTask:j,importantTask:q,trashTask:function(e){return function(a,t){var s=t().todoApp.todo.routeParam;w.a.post("/api/app/todo/trash-todo",e).then((function(t){return a({type:"TRASH_TASK",id:e})})).then(a(A(s)))}},searchTask:function(e){return function(a){a({type:"SEARCH_TASK",val:e})}}})(B),V=t(2),J=t(801),H=t(807),Q=t(802),G=t(800),W=t(816),X=t(410),Y=t(1001),Z=t.n(Y),$=t(1024),ee=(t(1030),[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"Scribble",label:"Scribble",color:"#00B8D9",isFixed:!0},{value:"Attachment",label:"Attachment",color:"#00B8D9",isFixed:!0},{value:"Voice",label:"Voice",color:"#0052CC",isFixed:!0},{value:"Video",label:"Video",color:"#0052CC",isFixed:!0}]),ae=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={audioDetails:{url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}},ptype:"",taskToUpdate:null,taskTitle:"",taskDesc:"",taskStatus:!1,taskStarred:!1,taskImportant:!1,newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}},e.handleAudioStop=function(a){console.log(a),e.setState({audioDetails:a})},e.handleAudioUpload=function(e){console.log(e)},e.handleRest=function(){e.setState({audioDetails:{url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}}})},e.handleNewTaskTags=function(a){var t=e.state.newTask.tags;t.includes(a)?t.splice(t.indexOf(a),1):t.push(a),e.setState(Object(V.a)(Object(V.a)({},e.state.newTask),{},{tags:a}))},e.renderTags=function(e){return e.map((function(e,a){return c.a.createElement("div",{className:"chip mb-0 mr-50",key:a},c.a.createElement("div",{className:"chip-body"},c.a.createElement("span",{className:"chip-text"},c.a.createElement("span",{className:"bullet bullet-".concat("professional"===e?"warning":"others"===e?"success":"todo"===e?"danger":"primary"," bullet-xs")}),c.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))},e}return Object(n.a)(t,[{key:"componentDidUpdate",value:function(e,a){(null!==this.props.taskToUpdate&&this.state.taskToUpdate!==this.props.taskToUpdate||null!==this.props.taskToUpdate&&this.state.taskStatus!==this.props.taskToUpdate.isCompleted||null!==this.props.taskToUpdate&&this.state.taskStarred!==this.props.taskToUpdate.isStarred||null!==this.props.taskToUpdate&&this.state.taskImportant!==this.props.taskToUpdate.isImportant)&&this.setState({taskToUpdate:this.props.taskToUpdate,taskTitle:this.props.taskToUpdate.title,taskDesc:this.props.taskToUpdate.desc,taskStatus:this.props.taskToUpdate.isCompleted,taskStarred:this.props.taskToUpdate.isStarred,taskImportant:this.props.taskToUpdate.isImportant})}},{key:"render",value:function(){var e=this,a=this.state,t=a.taskToUpdate,s=a.taskTitle,n=a.taskDesc,o=a.newTask,r=a.taskStatus;return c.a.createElement("div",{className:"task-sidebar ".concat(!0===this.props.addTaskState?"show":"")},c.a.createElement("div",{className:"task-header"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"task-type-title text-bold-600"},c.a.createElement("h3",null,this.props.taskToUpdate&&this.props.taskToUpdate.id?"Update Note":"Add Note")),c.a.createElement("div",{className:"close-icon"},c.a.createElement(f.a,{className:"cursor-pointer",size:20,onClick:function(){e.props.addTask("close")}})))),c.a.createElement(k.a,null,c.a.createElement("div",{className:"task-body"},c.a.createElement("div",{className:"d-flex justify-content-between mb-2"},c.a.createElement("div",{className:"mark-complete"},this.props.taskToUpdate&&this.props.taskToUpdate.id&&c.a.createElement(K.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(g.a,{className:"vx-icon",size:15}),label:"",checked:r,onChange:function(a){e.props.completeTask(e.props.taskToUpdate)}})),c.a.createElement("div",{className:"task-actions"},c.a.createElement(E.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskImportant||o.isImportant?"text-success":""),onClick:function(){null!==e.props.taskToUpdate?e.props.importantTask(e.props.taskToUpdate):e.setState({newTask:Object(V.a)(Object(V.a)({},e.state.newTask),{},{isImportant:!e.state.newTask.isImportant})})}}),c.a.createElement(T.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskStarred||o.isStarred?"text-warning":""),onClick:function(){null!==e.props.taskToUpdate?e.props.starTask(e.props.taskToUpdate):e.setState({newTask:Object(V.a)(Object(V.a)({},e.state.newTask),{},{isStarred:!e.state.newTask.isStarred})})}}),c.a.createElement(J.a,{className:"d-inline-block"},c.a.createElement(H.a,{tag:"span"},c.a.createElement(X.a,{className:"mr-50",size:20})),c.a.createElement(Q.a,{tag:"ul",right:!0},c.a.createElement(G.a,{tag:"li"},c.a.createElement(K.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(g.a,{className:"vx-icon",size:12}),label:"Personal",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("personal")||o.tags.includes("personal")),size:"sm",onChange:function(a){a.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(t.id,"personal"):e.handleNewTaskTags("personal")}})),c.a.createElement(G.a,{tag:"li"},c.a.createElement(K.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(g.a,{className:"vx-icon",size:12}),label:"Professional",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("professional")||o.tags.includes("professional")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(a){a.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(t.id,"professional"):e.handleNewTaskTags("professional")}})),c.a.createElement(G.a,{tag:"li"},c.a.createElement(K.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(g.a,{className:"vx-icon",size:12}),label:"Others",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("others")||o.tags.includes("others")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(a){a.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(t.id,"others"):e.handleNewTaskTags("others")}})),c.a.createElement(G.a,{tag:"li"},c.a.createElement(K.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(g.a,{className:"vx-icon",size:12}),label:"TO DO List",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("todo")||o.tags.includes("todo")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(a){a.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(t.id,"todo"):e.handleNewTaskTags("todo")}})))))),c.a.createElement(F.a,{className:"form-label-group"},c.a.createElement(W.a,{className:"React",classNamePrefix:"select",ref:this.state.selectAssetRef,name:"color",options:ee,isClearable:!0,placeholder:"Select Message Type...",onChange:function(a){e.setState({ptype:a?a.value:""})}})),c.a.createElement(F.a,null,c.a.createElement(L.a,{type:"text",placeholder:"Title",value:null!==this.props.taskToUpdate?s:o.title,onChange:function(a){null!==e.props.taskToUpdate?e.setState({taskTitle:a.target.value}):e.setState({newTask:Object(V.a)(Object(V.a)({},e.state.newTask),{},{title:a.target.value})})}})),"Video"===this.state.ptype&&c.a.createElement(Z.a,{onRecordingComplete:function(e){console.log("videoBlob",e)}}),"Voice"===this.state.ptype&&c.a.createElement($.a,{record:!0,title:"New recording",audioURL:this.state.audioDetails.url,showUIAudio:!0,handleAudioStop:function(a){return e.handleAudioStop(a)},handleAudioUpload:function(a){return e.handleAudioUpload(a)},handleRest:function(){return e.handleRest()}}),c.a.createElement(F.a,null,c.a.createElement(L.a,{type:"textarea",placeholder:"Description",rows:"5",value:null!==this.props.taskToUpdate?n:o.desc,onChange:function(a){null!==e.props.taskToUpdate?e.setState({taskDesc:a.target.value}):e.setState({newTask:Object(V.a)(Object(V.a)({},e.state.newTask),{},{desc:a.target.value})})}})),c.a.createElement("div",{className:"chip-wrapper my-1 d-flex flex-wrap"},null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags&&this.props.taskToUpdate.tags.length>0?this.renderTags(this.props.taskToUpdate.tags):null),c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement(d.a.Ripple,{outline:!0,className:"mr-1 mb-1",color:"secondary",onClick:function(){e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})}},"Cancel")," ",c.a.createElement(d.a.Ripple,{className:"mb-1",color:"warning",onClick:function(){console.log("taskToUpdate",t),null!==e.props.taskToUpdate?e.props.updateTask(t._id,s,n):e.props.addNewTask(e.state.newTask),e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})},disabled:!(s.length>0||o.title.length>0)},t&&t.id&&null!==this.props.taskToUpdate?"Update":"Add")))))}}]),t}(c.a.Component),te=Object(N.b)((function(e){return{app:e.todoApp}}),{completeTask:P,importantTask:q,starTask:j,updateTask:function(e,a,t){var s={_id:e,title:a,desc:t};w.a.post("/backendapi/diary/update",s);return function(s){s({type:"UPDATE_TASK",id:e,title:a,desc:t})}},updateLabel:function(e,a){return function(t,s){t({type:"UPDATE_LABEL",label:a,id:e})}},addNewTask:function(e){return function(a,t){var s=t().todoApp.todo.routeParam,n=JSON.parse(localStorage.getItem("logInUserData"))._id;e.user=n,w.a.post("/backendapi/diary/add",e).then((function(t){a({type:"ADD_TASK",task:e}),a(A(s)),O.b.success("Note Added Successfully!!")}))}}})(ae),se=(t(833),t(813),t(903),window.matchMedia("(min-width: 992px)")),ne=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={addTask:!1,sidebarDocked:se.matches,sidebarOpen:!1,taskToUpdate:null,prevState:null},e.onSetSidebarOpen=function(a){e.setState({sidebarOpen:a})},e.mediaQueryChanged=function(){e.setState({sidebarDocked:se.matches,sidebarOpen:!1})},e.handleAddTask=function(a){"open"===a?e.setState({addTask:!0}):e.setState({addTask:!1,taskToUpdate:null})},e.handleUpdateTask=function(a){void 0!==a?e.setState({addTask:!0,taskToUpdate:a}):e.setState({taskToUpdate:null})},e.handleUndoChanges=function(a){e.setState({prevState:a})},e}return Object(n.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){se.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){se.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(O.a,null),c.a.createElement("h2",{className:"warning"},"Secret Diary"),c.a.createElement("div",{className:"todo-application position-relative"},c.a.createElement("div",{className:"app-content-overlay ".concat(this.state.addTask||this.state.sidebarOpen?"show":""),onClick:function(){e.handleAddTask("close"),e.onSetSidebarOpen(!1)}}),c.a.createElement(p.a.Consumer,null,(function(a){return c.a.createElement(i.a,{sidebar:c.a.createElement(D,{routerProps:e.props,addTask:e.handleAddTask,mainSidebar:e.onSetSidebarOpen}),docked:e.state.sidebarDocked,open:e.state.sidebarOpen,sidebarClassName:"sidebar-content todo-sidebar d-flex",touch:!1,contentClassName:"sidebar-children d-none",pullRight:"rtl"===a.state.direction},'""')})),c.a.createElement(M,{routerProps:this.props,handleUpdateTask:this.handleUpdateTask,mainSidebar:this.onSetSidebarOpen,prevState:this.state.prevState}),c.a.createElement(te,{addTask:this.handleAddTask,addTaskState:this.state.addTask,taskToUpdate:this.state.taskToUpdate,newTask:this.state.newTask,mainSidebar:this.onSetSidebarOpen,handleUndoChanges:this.handleUndoChanges})))}}]),t}(c.a.Component);a.default=ne},809:function(e,a,t){"use strict";var s=t(11),n=t(12),o=t(14),r=t(13),l=t(0),c=t.n(l),i=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),t}(c.a.Component);a.a=i},813:function(e,a,t){},903:function(e,a,t){}}]);
//# sourceMappingURL=33.a7abbb65.chunk.js.map