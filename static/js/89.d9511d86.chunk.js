(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[89],{1028:function(e,t,a){},2045:function(e,t,a){"use strict";a.r(t);var n=a(79),l=a.n(n),r=a(124),i=a(11),s=a(12),o=a(14),c=a(13),d=a(0),m=a.n(d),u=a(1268),p=a(1269),f=a(1270),h=a(1271),g=a(1272),E=a(849),v=a(1273),b=a(901),N=a(817),S=a(822),y=a(812),w=a(799),C=a(803),O=a(800),x=a(798),T=a(1267),k=a(38),A=a.n(k),j=a(173),z=a(1381),D=a(219),M=a(437),R=a(289),P=a(404),F=a(186),V=a(297),G=a(398),I=a(324),L=a(3),Q=a.n(L),U=a(19),B=(a(1383),a(1028),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={rowData:null,pageSize:20,isVisible:!0,reload:!1,collapse:!0,status:"Opened",role:"All",selectStatus:"All",verified:"All",department:"All",defaultColDef:{sortable:!0},searchVal:"",columnDefs:[{headerName:"ID",field:"id",width:150,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Username",field:"username",filter:!0,width:250,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer",onClick:function(){return U.a.push("/app/user/edit")}},m.a.createElement("img",{className:"rounded-circle mr-50",src:e.data.avatar,alt:"user avatar",height:"30",width:"30"}),m.a.createElement("span",null,e.data.name))}},{headerName:"Email",field:"email",filter:!0,width:250},{headerName:"Name",field:"name",filter:!0,width:200},{headerName:"Country",field:"country",filter:!0,width:200},{headerName:"Role",field:"role",filter:!0,width:150},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"active"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-light-success"},e.value):"blocked"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-light-danger"},e.value):"deactivated"===e.value?m.a.createElement("div",{className:"badge badge-pill badge-light-warning"},e.value):null}},{headerName:"Verified",field:"is_verified",filter:!0,width:125,cellRendererFramework:function(e){return!0===e.value?m.a.createElement("div",{className:"bullet bullet-sm bullet-primary"}):!1===e.value?m.a.createElement("div",{className:"bullet bullet-sm bullet-secondary"}):null}},{headerName:"Department",field:"department",filter:!0,width:160},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(t){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(D.a,{className:"mr-50",size:15,onClick:function(){return U.a.push("/app/user/edit")}}),m.a.createElement(M.a,{size:15,onClick:function(){var t=e.gridApi.getSelectedRows();e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi},e.filterData=function(t,a){var n=null;"all"!==a&&(n={type:"equals",filter:a}),e.gridApi.getFilterInstance(t).setModel(n),e.gridApi.onFilterChanged()},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({pageSize:t}))},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t),e.setState({searchVal:t})},e.refreshCard=function(){e.setState({reload:!0}),setTimeout((function(){e.setState({reload:!1,role:"All",selectStatus:"All",verified:"All",department:"All"})}),500)},e.toggleCollapse=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.onEntered=function(){e.setState({status:"Opened"})},e.onEntering=function(){e.setState({status:"Opening..."})},e.onEntered=function(){e.setState({status:"Opened"})},e.onExiting=function(){e.setState({status:"Closing..."})},e.onExited=function(){e.setState({status:"Closed"})},e.removeCard=function(){e.setState({isVisible:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("api/users/list").then((function(e){var a=e.data;t.setState({rowData:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,l=t.defaultColDef,r=t.pageSize;return m.a.createElement(u.a,{className:"app-user-list"},m.a.createElement(p.a,{sm:"12"},m.a.createElement(f.a,{className:Q()("card-action card-reload",{"d-none":!1===this.state.isVisible,"card-collapsed":"Closed"===this.state.status,closing:"Closing..."===this.state.status,opening:"Opening..."===this.state.status,refreshing:this.state.reload})},m.a.createElement(h.a,null,m.a.createElement(g.a,null,"Filters"),m.a.createElement("div",{className:"actions"},m.a.createElement(R.a,{className:"collapse-icon mr-50",size:15,onClick:this.toggleCollapse}),m.a.createElement(P.a,{className:"mr-50",size:15,onClick:function(){e.refreshCard(),e.gridApi.setFilterModel(null)}}),m.a.createElement(F.a,{size:15,onClick:this.removeCard}))),m.a.createElement(E.a,{isOpen:this.state.collapse,onExited:this.onExited,onEntered:this.onEntered,onExiting:this.onExiting,onEntering:this.onEntering},m.a.createElement(v.a,null,this.state.reload?m.a.createElement(b.a,{color:"primary",className:"reload-spinner"}):"",m.a.createElement(u.a,null,m.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},m.a.createElement(N.a,{className:"mb-0"},m.a.createElement(S.a,{for:"role"},"Role"),m.a.createElement(y.a,{type:"select",name:"role",id:"role",value:this.state.role,onChange:function(t){e.setState({role:t.target.value},(function(){return e.filterData("role",e.state.role.toLowerCase())}))}},m.a.createElement("option",{value:"All"},"All"),m.a.createElement("option",{value:"User"},"User"),m.a.createElement("option",{value:"Staff"},"Staff"),m.a.createElement("option",{value:"Admin"},"Admin")))),m.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},m.a.createElement(N.a,{className:"mb-0"},m.a.createElement(S.a,{for:"status"},"Status"),m.a.createElement(y.a,{type:"select",name:"status",id:"status",value:this.state.selectStatus,onChange:function(t){e.setState({selectStatus:t.target.value},(function(){return e.filterData("status",e.state.selectStatus.toLowerCase())}))}},m.a.createElement("option",{value:"All"},"All"),m.a.createElement("option",{value:"Active"},"Active"),m.a.createElement("option",{value:"Blocked"},"Blocked"),m.a.createElement("option",{value:"Deactivated"},"Deactivated")))),m.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},m.a.createElement(N.a,{className:"mb-0"},m.a.createElement(S.a,{for:"verified"},"Verified"),m.a.createElement(y.a,{type:"select",name:"verified",id:"verified",value:this.state.verified,onChange:function(t){e.setState({verified:t.target.value},(function(){return e.filterData("is_verified",e.state.verified.toLowerCase())}))}},m.a.createElement("option",{value:"All"},"All"),m.a.createElement("option",{value:"True"},"True"),m.a.createElement("option",{value:"False"},"False")))),m.a.createElement(p.a,{lg:"3",md:"6",sm:"12"},m.a.createElement(N.a,{className:"mb-0"},m.a.createElement(S.a,{for:"department"},"Department"),m.a.createElement(y.a,{type:"select",name:"department",id:"department",value:this.state.department,onChange:function(t){e.setState({department:t.target.value},(function(){return e.filterData("department",e.state.department.toLowerCase())}))}},m.a.createElement("option",{value:"All"},"All"),m.a.createElement("option",{value:"Sales"},"Sales"),m.a.createElement("option",{value:"Development"},"Development"),m.a.createElement("option",{value:"Management"},"Management"))))))))),m.a.createElement(p.a,{sm:"12"},m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement("div",{className:"ag-theme-material ag-grid-table"},m.a.createElement("div",{className:"ag-grid-actions d-flex justify-content-between flex-wrap mb-1"},m.a.createElement("div",{className:"sort-dropdown"},m.a.createElement(w.a,{className:"ag-dropdown p-1"},m.a.createElement(C.a,{tag:"div"},"1 - ",r," of 150",m.a.createElement(R.a,{className:"ml-50",size:15})),m.a.createElement(O.a,{right:!0},m.a.createElement(x.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(x.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(x.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(x.a,{tag:"div",onClick:function(){return e.filterSize(150)}},"150")))),m.a.createElement("div",{className:"filter-actions d-flex"},m.a.createElement(y.a,{className:"w-50 mr-1 mb-1 mb-sm-0",type:"text",placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.searchVal}),m.a.createElement("div",{className:"dropdown actions-dropdown"},m.a.createElement(T.a,null,m.a.createElement(C.a,{className:"px-2 py-75",color:"white"},"Actions",m.a.createElement(R.a,{className:"ml-50",size:15})),m.a.createElement(O.a,{right:!0},m.a.createElement(x.a,{tag:"a"},m.a.createElement(M.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"Delete")),m.a.createElement(x.a,{tag:"a"},m.a.createElement(V.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"Archive")),m.a.createElement(x.a,{tag:"a"},m.a.createElement(G.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"Print")),m.a.createElement(x.a,{tag:"a"},m.a.createElement(I.a,{size:15}),m.a.createElement("span",{className:"align-middle ml-50"},"CSV"))))))),null!==this.state.rowData?m.a.createElement(j.a.Consumer,null,(function(t){return m.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:l,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,pivotPanelShow:"always",paginationPageSize:r,resizable:!0,enableRtl:"rtl"===t.state.direction})})):null)))))}}]),a}(m.a.Component));t.default=B},817:function(e,t,a){"use strict";var n=a(5),l=a(8),r=a(0),i=a.n(r),s=a(1),o=a.n(s),c=a(3),d=a.n(c),m=a(4),u={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.row,s=e.disabled,o=e.check,c=e.inline,u=e.tag,p=Object(l.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(m.mapToCssModules)(d()(t,!!r&&"row",o?"form-check":"form-group",!(!o||!c)&&"form-check-inline",!(!o||!s)&&"disabled"),a);return"fieldset"===u&&(p.disabled=s),i.a.createElement(u,Object(n.a)({},p,{className:f}))};p.propTypes=u,p.defaultProps={tag:"div"},t.a=p},822:function(e,t,a){"use strict";var n=a(5),l=a(8),r=a(0),i=a.n(r),s=a(1),o=a.n(s),c=a(3),d=a.n(c),m=a(4),u=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:u,order:u,offset:u})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,r=e.hidden,s=e.widths,o=e.tag,c=e.check,u=e.size,p=e.for,f=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];s.forEach((function(t,n){var l=e[t];if(delete f[t],l||""===l){var r,i=!n;if(Object(m.isObject)(l)){var s,o=i?"-":"-"+t+"-";r=g(i,t,l.size),h.push(Object(m.mapToCssModules)(d()(((s={})[r]=l.size||""===l.size,s["order"+o+l.order]=l.order||0===l.order,s["offset"+o+l.offset]=l.offset||0===l.offset,s))),a)}else r=g(i,t,l),h.push(r)}}));var E=Object(m.mapToCssModules)(d()(t,!!r&&"sr-only",!!c&&"form-check-label",!!u&&"col-form-label-"+u,h,!!h.length&&"col-form-label"),a);return i.a.createElement(o,Object(n.a)({htmlFor:p},f,{className:E}))};E.propTypes=f,E.defaultProps=h,t.a=E},849:function(e,t,a){"use strict";var n,l=a(5),r=a(8),i=a(10),s=a(15),o=a(30),c=a(0),d=a.n(c),m=a(1),u=a.n(m),p=a(3),f=a.n(p),h=a(95),g=a(4),E=Object(o.a)({},h.Transition.propTypes,{isOpen:u.a.bool,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),tag:g.tagPropType,className:u.a.node,navbar:u.a.bool,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.func,u.a.string,u.a.object])}),v=Object(o.a)({},h.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.TransitionTimeouts.Collapse}),b=((n={})[g.TransitionStatuses.ENTERING]="collapsing",n[g.TransitionStatuses.ENTERED]="collapse show",n[g.TransitionStatuses.EXITING]="collapsing",n[g.TransitionStatuses.EXITED]="collapse",n);function N(e){return e.scrollHeight}var S=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(i.a)(a))})),a}Object(s.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:N(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:N(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,i=t.className,s=t.navbar,c=t.cssModule,m=t.children,u=(t.innerRef,Object(r.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,E=Object(g.pick)(u,g.TransitionPropTypeKeys),v=Object(g.omit)(u,g.TransitionPropTypeKeys);return d.a.createElement(h.Transition,Object(l.a)({},E,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return b[e]||"collapse"}(t),r=Object(g.mapToCssModules)(f()(i,n,s&&"navbar-collapse"),c),u=null===p?null:{height:p};return d.a.createElement(a,Object(l.a)({},v,{style:Object(o.a)({},v.style,{},u),className:r,ref:e.props.innerRef}),m)}))},t}(c.Component);S.propTypes=E,S.defaultProps=v,t.a=S},901:function(e,t,a){"use strict";var n=a(5),l=a(8),r=a(0),i=a.n(r),s=a(1),o=a.n(s),c=a(3),d=a.n(c),m=a(4),u={tag:m.tagPropType,type:o.a.string,size:o.a.string,color:o.a.string,className:o.a.string,cssModule:o.a.object,children:o.a.string},p=function(e){var t=e.className,a=e.cssModule,r=e.type,s=e.size,o=e.color,c=e.children,u=e.tag,p=Object(l.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(m.mapToCssModules)(d()(t,!!s&&"spinner-"+r+"-"+s,"spinner-"+r,!!o&&"text-"+o),a);return i.a.createElement(u,Object(n.a)({role:"status"},p,{className:f}),c&&i.a.createElement("span",{className:Object(m.mapToCssModules)("sr-only",a)},c))};p.propTypes=u,p.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=p}}]);
//# sourceMappingURL=89.d9511d86.chunk.js.map