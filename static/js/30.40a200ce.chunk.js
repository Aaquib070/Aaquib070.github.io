(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[30],{1101:function(e,t,a){"use strict";a.r(t);var s=a(11),n=a(12),o=a(14),i=a(13),r=a(0),c=a.n(r),l=a(901),p=a(169),d=a(550),u=a(1086),h=a(1087),m=a(39),k=a.n(m),b=a(171),f=a(321),g=a(404),T=a(318),v=a(245),E=a(419),N=a(24),S=a(75),y=a.n(S),C=a(121),w=a(38),x=a.n(w),O=a(30),U=function(e){return function(){var t=Object(C.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("api/apps/todo",{params:e}).then((function(t){a({type:"GET_TODOS",todos:t.data,routeParams:e})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(t){t({type:"COMPLETE_TASK",id:e.id,value:e.isCompleted})}},P=function(e){return function(t){Promise.all([t({type:"STAR_TASK",id:e.id,value:e.isStarred})])}},z=function(e){return function(t){Promise.all([t({type:"IMPORTANT_TASK",id:e.id,value:e.isImportant})])}},W=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"sidebar-close-icon",onClick:function(){return e.props.mainSidebar(!1)}},c.a.createElement(b.a,{size:15})),c.a.createElement("div",{className:"todo-app-menu"},c.a.createElement("div",{className:"add-task"},c.a.createElement(d.a.Ripple,{block:!0,className:"btn-block my-1",color:"primary",onClick:function(){e.props.addTask("open"),e.props.mainSidebar(!1)}},"Add Note")),c.a.createElement(k.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1}},c.a.createElement(u.a,{className:"font-medium-1"},c.a.createElement(h.a,{className:"border-0 pt-0",action:!0,onClick:function(){e.props.changeFilter("all")},active:"/todo/all"===this.props.routerProps.location.pathname},c.a.createElement(f.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"All"))),c.a.createElement("hr",null),c.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Filters"),c.a.createElement(u.a,{className:"font-medium-1"},c.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("starred")},active:"/todo/starred"===this.props.routerProps.location.pathname},c.a.createElement(g.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Starred")),c.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("important")},active:"/todo/important"===this.props.routerProps.location.pathname},c.a.createElement(T.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Important")),c.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("completed")},active:"/todo/completed"===this.props.routerProps.location.pathname},c.a.createElement(v.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Completed")),c.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("trashed")},active:"/todo/trashed"===this.props.routerProps.location.pathname},c.a.createElement(E.a,{size:22}),c.a.createElement("span",{className:"align-middle ml-1"},"Trashed"))),c.a.createElement("hr",null),c.a.createElement("h5",{className:"mt-2 mb-1 pt-25"},"Labels"),c.a.createElement(u.a,{className:"font-medium-1"},c.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("frontend")},active:"/todo/frontend"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-primary align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Frontend")),c.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("backend")},active:"/todo/backend"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-warning align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Backend")),c.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("doc")},active:"/todo/doc"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-success align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Doc")),c.a.createElement(h.a,{className:"border-0",onClick:function(){e.props.changeFilter("bug")},active:"/todo/bug"===this.props.routerProps.location.pathname},c.a.createElement("span",{className:"bullet bullet-danger align-middle"}),c.a.createElement("span",{className:"align-middle ml-1"},"Bug"))))))}}]),a}(c.a.Component),X=Object(N.b)(null,{changeFilter:function(e){return function(t){t({type:"CHANGE_FILTER",filter:e}),O.a.push("/diary/".concat(e)),t(U({filter:e}))}}})(W),A=a(871),I=a(857),R=a(336),D=a(385),M=a(809),F=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],handleUpdateTask:null,currentLocation:e.props.routerProps.location.pathname,value:""},e.handleOnChange=function(t){e.setState({value:t.target.value}),e.props.searchTask(t.target.value)},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getTodos(this.props.routerProps.match.params);case 2:this.setState({todos:this.props.app.todo.todos,handleUpdateTask:this.props.handleUpdateTask});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.todos,s=t.handleUpdateTask,n=t.value,o=this.props.routerProps.match.params.filter,i=n.length?this.props.app.todo.filteredTodos:a,r=i.length>0?i.map((function(t,a){return c.a.createElement("li",{className:"todo-item ".concat(t.isCompleted?"completed":""),key:a,onClick:function(){s(t)}},c.a.createElement("div",{className:"todo-title-wrapper d-flex justify-content-between mb-50"},c.a.createElement("div",{className:"todo-title-area d-flex align-items-center"},c.a.createElement("div",{className:"title-wrapper d-flex"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"",checked:t.isCompleted,size:"sm",onClick:function(a){a.stopPropagation(),e.props.completeTask(t)},onChange:function(e){return e.stopPropagation()}}),c.a.createElement("h6",{className:"todo-title mt-50 mx-50"},t.title)),t.tags.length>0?c.a.createElement("div",{className:"chip-wrapper"},t.tags.map((function(e,t){return c.a.createElement("div",{className:"chip mb-0",key:t},c.a.createElement("div",{className:"chip-body"},c.a.createElement("span",{className:"chip-text"},c.a.createElement("span",{className:"bullet bullet-".concat("backend"===e?"warning":"doc"===e?"success":"bug"===e?"danger":"primary"," bullet-xs")}),c.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))):null),c.a.createElement("div",{className:"todo-item-action d-flex ".concat("trashed"===o?"justify-content-end":"")},c.a.createElement("div",{className:"todo-item-info d-inline-block ".concat("trashed"===o?"mr-1":"mr-1 mr-sm-0"),onClick:function(a){a.stopPropagation(),e.props.importantTask(t)}},c.a.createElement(T.a,{size:17,className:"".concat(t.isImportant?"text-success":"")})),c.a.createElement("div",{className:"todo-item-favorite d-inline-block mr-1 mr-sm-0",onClick:function(a){a.stopPropagation(),e.props.starTask(t)}},c.a.createElement(g.a,{size:17,className:"".concat(t.isStarred?"text-warning":"")})),"trashed"!==o?c.a.createElement("div",{className:"todo-item-delete d-inline-block mr-1 mr-sm-0",onClick:function(a){a.stopPropagation(),e.props.trashTask(t.id)}},c.a.createElement(E.a,{size:17})):null)),t.desc.length>0?c.a.createElement("p",{className:"todo-desc truncate mb-0"},t.desc):"")})):c.a.createElement("p",{className:"p-1 text-center mt-2 font-medium-3 text-bold-500"},"No tasks at this time");return c.a.createElement("div",{className:"content-right"},c.a.createElement("div",{className:"todo-app-area"},c.a.createElement("div",{className:"todo-app-list-wrapper"},c.a.createElement("div",{className:"todo-app-list"},c.a.createElement("div",{className:"app-fixed-search"},c.a.createElement("div",{className:"sidebar-toggle d-inline-block d-lg-none",onClick:function(){return e.props.mainSidebar(!0)}},c.a.createElement(R.a,{size:24})),c.a.createElement(A.a,{className:"position-relative has-icon-left m-0 d-inline-block d-lg-block"},c.a.createElement(I.a,{type:"text",placeholder:"Search...",onChange:function(t){return e.handleOnChange(t)},value:n}),c.a.createElement("div",{className:"form-control-position"},c.a.createElement(D.a,{size:15})))),c.a.createElement(k.a,{className:"todo-task-list",options:{wheelPropagation:!1}},c.a.createElement("ul",{className:"todo-task-list-wrapper"},r))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.app.todo.routeParam!==t.currentLocation?{todos:e.app.todo.todos}:null}}]),a}(c.a.Component),L=Object(N.b)((function(e){return{app:e.todoApp}}),{getTodos:U,completeTask:j,starTask:P,importantTask:z,trashTask:function(e){return function(t,a){var s=a().todoApp.todo.routeParam;x.a.post("/api/app/todo/trash-todo",e).then((function(a){return t({type:"TRASH_TASK",id:e})})).then(t(U(s)))}},searchTask:function(e){return function(t){t({type:"SEARCH_TASK",val:e})}}})(F),_=a(2),K=a(801),H=a(807),B=a(802),Q=a(800),q=a(410),G=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={taskToUpdate:null,taskTitle:"",taskDesc:"",taskStatus:!1,taskStarred:!1,taskImportant:!1,newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}},e.handleNewTaskTags=function(t){var a=e.state.newTask.tags;a.includes(t)?a.splice(a.indexOf(t),1):a.push(t),e.setState(Object(_.a)(Object(_.a)({},e.state.newTask),{},{tags:t}))},e.renderTags=function(e){return e.map((function(e,t){return c.a.createElement("div",{className:"chip mb-0 mr-50",key:t},c.a.createElement("div",{className:"chip-body"},c.a.createElement("span",{className:"chip-text"},c.a.createElement("span",{className:"bullet bullet-".concat("backend"===e?"warning":"doc"===e?"success":"bug"===e?"danger":"primary"," bullet-xs")}),c.a.createElement("span",{className:"text-capitalize ml-25"},e))))}))},e}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(e,t){(null!==this.props.taskToUpdate&&this.state.taskToUpdate!==this.props.taskToUpdate||null!==this.props.taskToUpdate&&this.state.taskStatus!==this.props.taskToUpdate.isCompleted||null!==this.props.taskToUpdate&&this.state.taskStarred!==this.props.taskToUpdate.isStarred||null!==this.props.taskToUpdate&&this.state.taskImportant!==this.props.taskToUpdate.isImportant)&&this.setState({taskToUpdate:this.props.taskToUpdate,taskTitle:this.props.taskToUpdate.title,taskDesc:this.props.taskToUpdate.desc,taskStatus:this.props.taskToUpdate.isCompleted,taskStarred:this.props.taskToUpdate.isStarred,taskImportant:this.props.taskToUpdate.isImportant})}},{key:"render",value:function(){var e=this,t=this.state,a=t.taskToUpdate,s=t.taskTitle,n=t.taskDesc,o=t.newTask,i=t.taskStatus;return c.a.createElement("div",{className:"task-sidebar ".concat(!0===this.props.addTaskState?"show":"")},c.a.createElement("div",{className:"task-header"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",{className:"task-type-title text-bold-600"},c.a.createElement("h3",null,this.props.taskToUpdate&&this.props.taskToUpdate.id?"Update Note":"Add Note")),c.a.createElement("div",{className:"close-icon"},c.a.createElement(b.a,{className:"cursor-pointer",size:20,onClick:function(){return e.props.addTask("close")}})))),c.a.createElement(k.a,null,c.a.createElement("div",{className:"task-body"},c.a.createElement("div",{className:"d-flex justify-content-between mb-2"},c.a.createElement("div",{className:"mark-complete"},this.props.taskToUpdate&&this.props.taskToUpdate.id&&c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:15}),label:"",checked:i,onChange:function(t){e.props.completeTask(e.props.taskToUpdate)}})),c.a.createElement("div",{className:"task-actions"},c.a.createElement(T.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskImportant||o.isImportant?"text-success":""),onClick:function(){null!==e.props.taskToUpdate?e.props.importantTask(e.props.taskToUpdate):e.setState({newTask:Object(_.a)(Object(_.a)({},e.state.newTask),{},{isImportant:!e.state.newTask.isImportant})})}}),c.a.createElement(g.a,{size:20,className:"mr-50 ".concat(null!==this.props.taskToUpdate&&this.state.taskStarred||o.isStarred?"text-warning":""),onClick:function(){null!==e.props.taskToUpdate?e.props.starTask(e.props.taskToUpdate):e.setState({newTask:Object(_.a)(Object(_.a)({},e.state.newTask),{},{isStarred:!e.state.newTask.isStarred})})}}),c.a.createElement(K.a,{className:"d-inline-block"},c.a.createElement(H.a,{tag:"span"},c.a.createElement(q.a,{className:"mr-50",size:20})),c.a.createElement(B.a,{tag:"ul",right:!0},c.a.createElement(Q.a,{tag:"li"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"Frontend",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("frontend")||o.tags.includes("frontend")),size:"sm",onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"frontend"):e.handleNewTaskTags("frontend")}})),c.a.createElement(Q.a,{tag:"li"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"Backend",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("backend")||o.tags.includes("backend")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"backend"):e.handleNewTaskTags("backend")}})),c.a.createElement(Q.a,{tag:"li"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"Doc",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("doc")||o.tags.includes("doc")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"doc"):e.handleNewTaskTags("doc")}})),c.a.createElement(Q.a,{tag:"li"},c.a.createElement(M.a,{color:"primary",className:"user-checkbox",icon:c.a.createElement(v.a,{className:"vx-icon",size:12}),label:"Bug",checked:!!(null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags.includes("bug")||o.tags.includes("bug")),size:"sm",onClick:function(e){return e.stopPropagation()},onChange:function(t){t.stopPropagation(),null!==e.props.taskToUpdate?e.props.updateLabel(a.id,"bug"):e.handleNewTaskTags("bug")}})))))),c.a.createElement(A.a,null,c.a.createElement(I.a,{type:"text",placeholder:"Title",value:null!==this.props.taskToUpdate?s:o.title,onChange:function(t){null!==e.props.taskToUpdate?e.setState({taskTitle:t.target.value}):e.setState({newTask:Object(_.a)(Object(_.a)({},e.state.newTask),{},{title:t.target.value})})}})),c.a.createElement(A.a,null,c.a.createElement(I.a,{type:"textarea",placeholder:"Description",rows:"5",value:null!==this.props.taskToUpdate?n:o.desc,onChange:function(t){null!==e.props.taskToUpdate?e.setState({taskDesc:t.target.value}):e.setState({newTask:Object(_.a)(Object(_.a)({},e.state.newTask),{},{desc:t.target.value})})}})),c.a.createElement("div",{className:"chip-wrapper my-1 d-flex flex-wrap"},null!==this.props.taskToUpdate&&this.props.taskToUpdate.tags&&this.props.taskToUpdate.tags.length>0?this.renderTags(this.props.taskToUpdate.tags):null),c.a.createElement("hr",{className:"my-2"}),c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement(d.a.Ripple,{className:"mr-50",color:"primary",onClick:function(){null!==e.props.taskToUpdate?e.props.updateTask(a.id,s,n):e.props.addNewTask(e.state.newTask),e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})},disabled:!(s.length>0||o.title.length>0)},a&&a.id&&null!==this.props.taskToUpdate?"Update":"Add"),c.a.createElement(d.a.Ripple,{color:"light",outline:!0,onClick:function(){e.props.addTask("close"),e.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})}},"Cancel")))))}}]),a}(c.a.Component),J=Object(N.b)((function(e){return{app:e.todoApp}}),{completeTask:j,importantTask:z,starTask:P,updateTask:function(e,t,a){return function(s){s({type:"UPDATE_TASK",id:e,title:t,desc:a})}},updateLabel:function(e,t){return function(a,s){a({type:"UPDATE_LABEL",label:t,id:e})}},addNewTask:function(e){return function(t,a){var s=a().todoApp.todo.routeParam;x.a.post("/api/apps/todo/new-task",{task:e}).then((function(a){t({type:"ADD_TASK",task:e}),t(U(s))}))}}})(G),Y=(a(903),window.matchMedia("(min-width: 992px)")),V=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={addTask:!1,sidebarDocked:Y.matches,sidebarOpen:!1,taskToUpdate:null,prevState:null},e.onSetSidebarOpen=function(t){e.setState({sidebarOpen:t})},e.mediaQueryChanged=function(){e.setState({sidebarDocked:Y.matches,sidebarOpen:!1})},e.handleAddTask=function(t){"open"===t?e.setState({addTask:!0}):e.setState({addTask:!1,taskToUpdate:null})},e.handleUpdateTask=function(t){void 0!==t?e.setState({addTask:!0,taskToUpdate:t}):e.setState({taskToUpdate:null})},e.handleUndoChanges=function(t){e.setState({prevState:t})},e}return Object(n.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){Y.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){Y.removeListener(this.mediaQueryChanged)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"todo-application position-relative"},c.a.createElement("div",{className:"app-content-overlay ".concat(this.state.addTask||this.state.sidebarOpen?"show":""),onClick:function(){e.handleAddTask("close"),e.onSetSidebarOpen(!1)}}),c.a.createElement(p.a.Consumer,null,(function(t){return c.a.createElement(l.a,{sidebar:c.a.createElement(X,{routerProps:e.props,addTask:e.handleAddTask,mainSidebar:e.onSetSidebarOpen}),docked:e.state.sidebarDocked,open:e.state.sidebarOpen,sidebarClassName:"sidebar-content todo-sidebar d-flex",touch:!1,contentClassName:"sidebar-children d-none",pullRight:"rtl"===t.state.direction},'""')})),c.a.createElement(L,{routerProps:this.props,handleUpdateTask:this.handleUpdateTask,mainSidebar:this.onSetSidebarOpen,prevState:this.state.prevState}),c.a.createElement(J,{addTask:this.handleAddTask,addTaskState:this.state.addTask,taskToUpdate:this.state.taskToUpdate,newTask:this.state.newTask,mainSidebar:this.onSetSidebarOpen,handleUndoChanges:this.handleUndoChanges}))}}]),a}(c.a.Component);t.default=V},809:function(e,t,a){"use strict";var s=a(11),n=a(12),o=a(14),i=a(13),r=a(0),c=a.n(r),l=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),a}(c.a.Component);t.a=l},857:function(e,t,a){"use strict";var s=a(5),n=a(8),o=a(10),i=a(15),r=a(0),c=a.n(r),l=a(1),p=a.n(l),d=a(3),u=a.n(d),h=a(4),m={children:p.a.node,type:p.a.string,size:p.a.string,bsSize:p.a.string,valid:p.a.bool,invalid:p.a.bool,tag:h.q,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),plaintext:p.a.bool,addon:p.a.bool,className:p.a.string,cssModule:p.a.object},k=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,r=e.valid,l=e.invalid,p=e.tag,d=e.addon,m=e.plaintext,k=e.innerRef,b=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),f=["radio","checkbox"].indexOf(o)>-1,g=new RegExp("\\D","g"),T=p||("select"===o||"textarea"===o?o:"input"),v="form-control";m?(v+="-plaintext",T=p||"input"):"file"===o?v+="-file":"range"===o?v+="-range":f&&(v=d?null:"form-check-input"),b.size&&g.test(b.size)&&(Object(h.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var E=Object(h.m)(u()(t,l&&"is-invalid",r&&"is-valid",!!i&&"form-control-"+i,v),a);return("input"===T||p&&"function"===typeof p)&&(b.type=o),b.children&&!m&&"select"!==o&&"string"===typeof T&&"select"!==T&&(Object(h.t)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(T,Object(s.a)({},b,{ref:k,className:E,"aria-invalid":l}))},t}(c.a.Component);k.propTypes=m,k.defaultProps={type:"text"},t.a=k},871:function(e,t,a){"use strict";var s=a(5),n=a(8),o=a(0),i=a.n(o),r=a(1),c=a.n(r),l=a(3),p=a.n(l),d=a(4),u={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.q,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.row,r=e.disabled,c=e.check,l=e.inline,u=e.tag,h=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.m)(p()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!r)&&"disabled"),a);return"fieldset"===u&&(h.disabled=r),i.a.createElement(u,Object(s.a)({},h,{className:m}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},901:function(e,t,a){"use strict";var s=a(902),n=a.n(s),o=a(46),i=a.n(o),r=a(19),c=a.n(r),l=a(0),p=a.n(l),d=(a(1),{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),u={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},h={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},m={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},k={zIndex:1,position:"fixed",top:0,bottom:0},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},a.overlayClicked=a.overlayClicked.bind(c()(c()(a))),a.onTouchStart=a.onTouchStart.bind(c()(c()(a))),a.onTouchMove=a.onTouchMove.bind(c()(c()(a))),a.onTouchEnd=a.onTouchEnd.bind(c()(c()(a))),a.onScroll=a.onScroll.bind(c()(c()(a))),a.saveSidebarRef=a.saveSidebarRef.bind(c()(c()(a))),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:"object"===typeof window&&"ontouchstart"in window&&!e}),this.saveSidebarWidth()},a.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},a.onTouchStart=function(e){if(!this.isTouching()){var t=e.targetTouches[0];this.setState({touchIdentifier:t.identifier,touchStartX:t.clientX,touchCurrentX:t.clientX})}},a.onTouchMove=function(e){if(this.isTouching())for(var t=0;t<e.targetTouches.length;t++)if(e.targetTouches[t].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:e.targetTouches[t].clientX});break}},a.onTouchEnd=function(){if(this.isTouching()){var e=this.touchSidebarWidth();(this.props.open&&e<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&e>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},a.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},a.inCancelDistanceOnScroll=function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20},a.isTouching=function(){return null!==this.state.touchIdentifier},a.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},a.saveSidebarWidth=function(){var e=this.sidebar.offsetWidth;e!==this.state.sidebarWidth&&this.setState({sidebarWidth:e})},a.saveSidebarRef=function(e){this.sidebar=e},a.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},a.render=function(){var e,t=n()({},u,this.props.styles.sidebar),a=n()({},h,this.props.styles.content),s=n()({},m,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,i=this.isTouching(),r={className:this.props.rootClassName,style:n()({},d,this.props.styles.root),role:"navigation",id:this.props.rootId},c=this.props.shadow&&(i||this.props.open||this.props.docked);if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",c&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",c&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),s.opacity=l,s.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?a.right=this.state.sidebarWidth+"px":a.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",s.opacity=1,s.visibility="visible");if(!i&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",a.transition="none",s.transition="none"),o)if(this.props.open)r.onTouchStart=this.onTouchStart,r.onTouchMove=this.onTouchMove,r.onTouchEnd=this.onTouchEnd,r.onTouchCancel=this.onTouchEnd,r.onScroll=this.onScroll;else{var b=n()({},k,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,e=p.a.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return p.a.createElement("div",r,p.a.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),p.a.createElement("div",{className:this.props.overlayClassName,style:s,onClick:this.overlayClicked,id:this.props.overlayId}),p.a.createElement("div",{className:this.props.contentClassName,style:a,id:this.props.contentId},e,this.props.children))},t}(l.Component);b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},t.a=b},902:function(e,t,a){var s=a(20);e.exports=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e}},903:function(e,t,a){}}]);
//# sourceMappingURL=30.40a200ce.chunk.js.map