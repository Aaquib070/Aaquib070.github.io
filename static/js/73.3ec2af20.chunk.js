(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[73],{1021:function(e,a,t){},1202:function(e,a,t){"use strict";t.d(a,"d",(function(){return i})),t.d(a,"e",(function(){return c})),t.d(a,"c",(function(){return p})),t.d(a,"b",(function(){return d})),t.d(a,"f",(function(){return u})),t.d(a,"a",(function(){return m}));var n=t(79),r=t.n(n),l=t(124),o=t(38),s=t.n(o),i=function(e){return function(){var a=Object(l.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.get("/api/datalist/data",e).then((function(a){t({type:"GET_DATA",data:a.data.data,totalPages:a.data.totalPages,params:e})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},c=function(){return function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/datalist/initial-data").then((function(e){a({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},p=function(e){return function(a){return a({type:"FILTER_DATA",value:e})}},d=function(e){return function(a){s.a.post("/api/datalist/delete-data",{obj:e}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},u=function(e){return function(a,t){s.a.post("/api/datalist/update-data",{obj:e}).then((function(t){a({type:"UPDATE_DATA",obj:e})}))}},m=function(e){return function(a,t){var n=t().dataList.params;s.a.post("/api/datalist/add-data",{obj:e}).then((function(t){a({type:"ADD_DATA",obj:e}),a(i(n))}))}}},1203:function(e,a,t){},2130:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),l=t(14),o=t(13),s=t(0),i=t.n(s),c=t(1268),p=t(1269),d=t(806),u=t(799),m=t(803),h=t(800),g=t(798),f=t(175),b=t(812),v=t(871),E=t(887),w=t.n(E),y=t(3),N=t.n(y),x=t(850),D=t.n(x),C=t(19),P=t(219),S=t(438),k=t(289),j=t(395),A=t(290),O=t(229),F=t(288),I=t(24),R=t(1202),L=t(2),_=t(817),V=t(822),T=t(186),z=t(37),U=t.n(z),H=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={relation:"",id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}},e.addNew=!1,e.handleSubmit=function(a){null!==e.props.data?e.props.updateData(a):(e.addNew=!0,e.props.addData(a));var t=Object.keys(e.props.dataParams).length?e.props.dataParams:{page:1,perPage:4};e.props.handleSidebar(!1,!0),e.props.getData(t)},e}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,a){null!==this.props.data&&null===e.data&&(this.props.data.id!==a.id&&this.setState({id:this.props.data.id}),this.props.data.name!==a.name&&this.setState({name:this.props.data.name}),this.props.data.relation!==a.relation&&this.setState({relation:this.props.data.relation}),this.props.data.popularity.popValue!==a.popularity&&this.setState({popularity:Object(L.a)(Object(L.a)({},this.state.popularity),{},{popValue:this.props.data.popularity.popValue})}),this.props.data.order_status!==a.order_status&&this.setState({order_status:this.props.data.order_status}),this.props.data.price!==a.price&&this.setState({price:this.props.data.price}),this.props.data.img!==a.img&&this.setState({img:this.props.data.img})),null===this.props.data&&null!==e.data&&this.setState({id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew&&this.setState({id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew=!1}},{key:"render",value:function(){var e=this,a=this.props,t=a.show,n=a.handleSidebar,r=a.data,l=this.state,o=l.name,s=l.relation,c=(l.category,l.order_status,l.price,l.popularity,l.img);return i.a.createElement("div",{className:N()("data-list-sidebar",{show:t})},i.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},i.a.createElement("h4",null,null!==r?"UPDATE NOMINEE DETAILS":"ADD NEW NOMINEE"),i.a.createElement(T.a,{size:20,onClick:function(){return n(!1,!0)}})),i.a.createElement(U.a,{className:"data-list-fields px-2 mt-3",options:{wheelPropagation:!1}},this.props.thumbView&&c.length?i.a.createElement(_.a,{className:"text-center"},i.a.createElement("img",{className:"img-fluid",src:c,alt:o}),i.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mt-2"},i.a.createElement("label",{className:"btn btn-flat-primary",htmlFor:"update-image",color:"primary"},"Upload Image",i.a.createElement("input",{type:"file",id:"update-image",hidden:!0,onChange:function(a){return e.setState({img:URL.createObjectURL(a.target.files[0])})}})),i.a.createElement(f.a,{color:"flat-danger",onClick:function(){return e.setState({img:""})}},"Remove Image"))):null,i.a.createElement(_.a,null,i.a.createElement(V.a,{for:"data-name"},"Name"),i.a.createElement(b.a,{type:"text",value:o,placeholder:"Nominee Name",onChange:function(a){return e.setState({name:a.target.value})},id:"data-name"})),i.a.createElement(_.a,null,i.a.createElement(V.a,{for:"data-category"},"Relation"),i.a.createElement(b.a,{type:"select",id:"data-category",value:s,onChange:function(a){return e.setState({relation:a.target.value})}},i.a.createElement("option",null,"Son"),i.a.createElement("option",null,"Daughter"),i.a.createElement("option",null,"Husband"),i.a.createElement("option",null,"Wide"),i.a.createElement("option",null,"Son-in-law"),i.a.createElement("option",null,"Daughter-in-law"),i.a.createElement("option",null,"Cousin"),i.a.createElement("option",null,"Friend"),i.a.createElement("option",null,"Colluege"),i.a.createElement("option",null,"others"))),"others"===s&&i.a.createElement(_.a,null,i.a.createElement(b.a,{type:"text",value:this.state.relation1,placeholder:"Relation Name",onChange:function(a){return e.setState({relation1:a.target.value})},id:"data-name"})),i.a.createElement(_.a,null,i.a.createElement(V.a,{for:"data-name"},"Email "),i.a.createElement(b.a,{type:"text",value:this.state.email,placeholder:"Enter nominee email",onChange:function(a){return e.setState({email:a.target.value})},id:"data-name"})),i.a.createElement(_.a,null,i.a.createElement(V.a,{for:"data-price"},"Contact No"),i.a.createElement(b.a,{type:"number",value:this.state.conatct1,onChange:function(a){return e.setState({conatct1:a.target.value})},id:"data-price",placeholder:"Enter primary contact No"})),i.a.createElement(_.a,null,i.a.createElement(V.a,{for:"data-price"},"Secondary Contact No"),i.a.createElement(b.a,{type:"number",value:this.state.conatct2,onChange:function(a){return e.setState({conatct2:a.target.value})},id:"data-price",placeholder:"Enter secondry contact No"})),i.a.createElement(_.a,null,i.a.createElement(V.a,{for:"data-name"},"Address "),i.a.createElement(b.a,{type:"textarea",value:this.state.address,placeholder:"Adress",onChange:function(a){return e.setState({address:a.target.value})},id:"data-name"})),this.props.thumbView&&c.length<=0?i.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",i.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(a){return e.setState({img:URL.createObjectURL(a.target.files[0])})}})):null),i.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},i.a.createElement(f.a,{color:"primary",onClick:function(){return e.handleSubmit(e.state)}},null!==r?"Update":"Submit"),i.a.createElement(f.a,{className:"ml-1",color:"danger",outline:!0,onClick:function(){return n(!1,!0)}},"Cancel")))}}]),t}(s.Component),W=t(879),M=t(807),G=(t(1021),t(1203),{"on hold":"warning",delivered:"success",pending:"primary",canceled:"danger"}),J={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},Y=function(e){return i.a.createElement("div",{className:"data-list-action"},i.a.createElement(P.a,{className:"cursor-pointer mr-1",size:20,onClick:function(){return e.currentData(e.row)}}),i.a.createElement(S.a,{className:"cursor-pointer",size:20,onClick:function(){e.deleteRow(e.row)}}))},$=function(e){return i.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},i.a.createElement("div",{className:"actions-left d-flex flex-wrap"},i.a.createElement(u.a,{className:"data-list-dropdown mr-1"},i.a.createElement(m.a,{className:"p-1",color:"primary"},i.a.createElement("span",{className:"align-middle mr-1"},"Actions"),i.a.createElement(k.a,{size:15})),i.a.createElement(h.a,{tag:"div",right:!0},i.a.createElement(g.a,{tag:"a"},"Delete"),i.a.createElement(g.a,{tag:"a"},"Archive"),i.a.createElement(g.a,{tag:"a"},"Print"),i.a.createElement(g.a,{tag:"a"},"Export"))),i.a.createElement(f.a,{className:"add-new-btn",color:"primary",onClick:function(){return e.handleSidebar(!0,!0)},outline:!0},i.a.createElement(j.a,{size:15}),i.a.createElement("span",{className:"align-middle"},"Add New Nominee"))),i.a.createElement("div",{className:"actions-right d-flex flex-wrap mt-sm-0 mt-2"},i.a.createElement(u.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none"},i.a.createElement(m.a,{color:"",className:"sort-dropdown"},i.a.createElement("span",{className:"align-middle mx-50"},"".concat(e.index[0]," - ").concat(e.index[1]," of ").concat(e.total)),i.a.createElement(k.a,{size:15})),i.a.createElement(h.a,{tag:"div",right:!0},i.a.createElement(g.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(4)}},"4"),i.a.createElement(g.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(10)}},"10"),i.a.createElement(g.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(15)}},"15"),i.a.createElement(g.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(20)}},"20"))),i.a.createElement("div",{className:"filter-section"},i.a.createElement(b.a,{type:"text",onChange:function(a){return e.handleFilter(a)}}))))},q=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Name",selector:"name",sortable:!0,minWidth:"200px",cell:function(e){return i.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"category",sortable:!0},{name:"Email",minWidth:"200px",selector:"popularity",sortable:!0},{name:"Contact",selector:"price",minWidth:"150px",sortable:!0},{name:" ",selector:"order_status",sortable:!0,cell:function(e){return i.a.createElement(W.a,{className:"m-0",color:"Unused"===e.order_status?"primary":"success",text:e.order_status})}},{name:"Actions",sortable:!0,cell:function(a){return i.a.createElement(Y,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:4,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:""},e.thumbView=e.props.thumbView,e.handleFilter=function(a){e.setState({value:a.target.value}),e.props.filterData(a.target.value)},e.handleRowsPerPage=function(a){var t=e.props,n=t.parsedFilter,r=t.getData,l=void 0!==n.page?n.page:1;C.a.push("/data-list/list-view?page=".concat(l,"&perPage=").concat(a)),e.setState({rowsPerPage:a}),r({page:n.page,perPage:a})},e.handleSidebar=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({sidebar:a}),!0===t&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(a){if(e.props.deleteData(a),e.props.getData(e.props.parsedFilter),e.state.data.length-1===0){var t=e.props.thumbView?"/data-list/thumb-view/":"/data-list/list-view/";C.a.push("".concat(t,"list-view?page=").concat(parseInt(e.props.parsedFilter.page-1),"&perPage=").concat(e.props.parsedFilter.perPage)),e.props.getData({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage})}},e.handleCurrentData=function(a){e.setState({currentData:a}),e.handleSidebar(!0)},e.handlePagination=function(a){var t=e.props,n=t.parsedFilter,r=t.getData,l=void 0!==n.perPage?n.perPage:4,o=e.props.thumbView?"/data-list/thumb-view/":"/data-list/list-view/";C.a.push("".concat(o,"list-view?page=").concat(a.selected+1,"&perPage=").concat(l)),r({page:a.selected+1,perPage:l}),e.setState({currentPage:a.selected})},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getData(this.props.parsedFilter),this.props.getInitialData()}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(this.thumbView){this.thumbView=!1;var n=[{name:"Image",selector:"img",minWidth:"220px",cell:function(e){return i.a.createElement("img",{src:e.img,height:"100",alt:e.name})}},{name:"Name",selector:"name",sortable:!0,minWidth:"250px",cell:function(e){return i.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return i.a.createElement(v.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return i.a.createElement(W.a,{className:"m-0",color:G[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(e){return i.a.createElement(Y,{row:e,getData:t.props.getData,parsedFilter:t.props.parsedFilter,currentData:t.handleCurrentData,deleteRow:t.handleDelete})}}];this.setState({columns:n})}}},{key:"render",value:function(){var e=this,a=this.state,t=a.columns,n=a.data,r=a.allData,l=a.totalPages,o=a.value,s=a.rowsPerPage,c=a.currentData,p=a.sidebar,d=a.totalRecords,u=a.sortIndex;return i.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},i.a.createElement(w.a,{columns:t,data:o.length?r:n,pagination:!0,paginationServer:!0,paginationComponent:function(){return i.a.createElement(D.a,{previousLabel:i.a.createElement(A.a,{size:15}),nextLabel:i.a.createElement(O.a,{size:15}),breakLabel:"...",breakClassName:"break-me",pageCount:l,containerClassName:"vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2",activeClassName:"active",forcePage:e.props.parsedFilter.page?parseInt(e.props.parsedFilter.page-1):0,onPageChange:function(a){return e.handlePagination(a)}})},noHeader:!0,subHeader:!0,selectableRows:!0,responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(a){return e.setState({selected:a.selectedRows})},customStyles:J,subHeaderComponent:i.a.createElement($,{handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:s,total:d,index:u}),sortIcon:i.a.createElement(k.a,null),selectableRowsComponent:M.a,selectableRowsComponentProps:{color:"primary",icon:i.a.createElement(F.a,{className:"vx-icon",size:12}),label:"",size:"sm"}}),i.a.createElement(H,{show:p,data:c,updateData:this.props.updateData,addData:this.props.addData,handleSidebar:this.handleSidebar,thumbView:this.props.thumbView,getData:this.props.getData,dataParams:this.props.parsedFilter,addNew:this.state.addNew}),i.a.createElement("div",{className:N()("data-list-overlay",{show:p}),onClick:function(){return e.handleSidebar(!1,!0)}}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.dataList.data.length!==a.data.length||a.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.totalPages,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex}:null}}]),t}(s.Component),B=Object(I.b)((function(e){return{dataList:e.dataList}}),{getData:R.d,deleteData:R.b,updateData:R.f,addData:R.a,getInitialData:R.e,filterData:R.c})(q),K=t(1204),Q=t.n(K),X=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{breadCrumbTitle:"Manage Nominees",breadCrumbParent:"Nominee",breadCrumbActive:"List"}),i.a.createElement(c.a,null,i.a.createElement(p.a,{sm:"12"},i.a.createElement(B,{parsedFilter:Q.a.parse(this.props.location.search)}))))}}]),t}(i.a.Component);a.default=X},807:function(e,a,t){"use strict";var n=t(11),r=t(12),l=t(14),o=t(13),s=t(0),i=t.n(s),c=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),t}(i.a.Component);a.a=c},879:function(e,a,t){"use strict";var n=t(11),r=t(12),l=t(14),o=t(13),s=t(0),i=t.n(s),c=t(186),p=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},i.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?i.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},i.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,i.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?i.a.createElement("div",{className:"chip-closable",onClick:function(a){return e.closeChip(a)}},this.props.closableIcon?this.props.closableIcon:i.a.createElement(c.a,null)):null))}}]),t}(i.a.Component);a.a=p}}]);
//# sourceMappingURL=73.3ec2af20.chunk.js.map