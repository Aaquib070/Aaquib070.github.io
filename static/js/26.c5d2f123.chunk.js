(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[26],{1104:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),s=t(14),o=t(13),l=t(0),i=t.n(l),c=t(1080),p=t(1081),d=t(550),u=t(857),m=t(801),h=t(807),g=t(929),f=t(811),b=t(932),v=t.n(b),E=t(3),w=t.n(E),y=(t(933),t(30)),D=t(286),N=t(419),S=t(372),x=t(246),C=t(245),I=t(24),k=t(827),P=(t(833),t(813),t(871)),A=t(845),L=t(171),F=t(39),O=t.n(F),j=t(895),R=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={isLoading:e.props.isLoading,relation:"Son",relation1:"Son",email:"",address:"",contact1:"",contact2:"",id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}},e.addNew=!1,e.handleSubmit=function(a){null!==e.props.data?(a._id=e.props.data._id,a.usage=e.props.data.usage,e.props.updateData(a)):(e.addNew=!0,e.props.addData(a));Object.keys(e.props.dataParams).length&&e.props.dataParams},e}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,a){console.log("aaaaaaaaaaaaaaaaa",this.props.isLoading),null!==this.props.data&&null===e.data&&(this.props.data.id!==a.id&&this.setState({id:this.props.data.id}),this.props.data.name!==a.name&&this.setState({name:this.props.data.name}),this.props.data.relation!==a.relation&&this.setState({relation:this.props.data.relation}),this.props.data.relation!==a.relation1&&this.setState({relation1:this.props.data.relation}),this.props.data.address!==a.address&&this.setState({address:this.props.data.address}),this.props.data.email!==a.email&&this.setState({email:this.props.data.email}),console.log("hhhhhhhhhhhhhhhhhhhhh",this.props.data,a),this.props.data.primaryContact!==a.contact1&&this.setState({contact1:this.props.data.primaryContact}),this.props.data.secondaryContact!==a.contact2&&this.setState({contact2:this.props.data.secondaryContact}),this.props.data.order_status!==a.order_status&&this.setState({order_status:this.props.data.order_status}),this.props.data.price!==a.price&&this.setState({price:this.props.data.price}),this.props.data.img!==a.img&&this.setState({img:this.props.data.img})),null===this.props.data&&null!==e.data&&this.setState({id:"",name:"",category:"Son",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew&&this.setState({id:"",name:"",category:"Son",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew=!1}},{key:"render",value:function(){var e=this,a=this.props,t=a.show,n=a.handleSidebar,r=a.data,s=this.state,o=s.name,l=s.relation,c=s.img;return i.a.createElement("div",{className:w()("data-list-sidebar",{show:t})},i.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},i.a.createElement("h4",null,null!==r?"UPDATE NOMINEE DETAILS":"ADD NEW NOMINEE"),i.a.createElement(L.a,{size:20,onClick:function(){return n(!1,!0)}})),i.a.createElement(O.a,{className:"data-list-fields px-2 mt-3",options:{wheelPropagation:!1}},this.props.thumbView&&c.length?i.a.createElement(P.a,{className:"text-center"},i.a.createElement("img",{className:"img-fluid",src:c,alt:o}),i.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mt-2"},i.a.createElement("label",{className:"btn btn-flat-primary",htmlFor:"update-image",color:"primary"},"Upload Image",i.a.createElement("input",{type:"file",id:"update-image",hidden:!0,onChange:function(a){return e.setState({img:URL.createObjectURL(a.target.files[0])})}})),i.a.createElement(d.a,{color:"flat-danger",onClick:function(){return e.setState({img:""})}},"Remove Image"))):null,i.a.createElement(P.a,null,i.a.createElement(A.a,{for:"data-name"},"Name *"),i.a.createElement(u.a,{type:"text",value:o,placeholder:"Nominee Name",onChange:function(a){return e.setState({name:a.target.value})},id:"data-name"})),i.a.createElement(P.a,null,i.a.createElement(A.a,{for:"data-category"},"Relation *"),i.a.createElement(u.a,{type:"select",id:"data-category",value:l,onChange:function(a){return e.setState({relation:a.target.value,relation1:a.target.value})}},i.a.createElement("option",null,"Son"),i.a.createElement("option",null,"Daughter"),i.a.createElement("option",null,"Husband"),i.a.createElement("option",null,"Wide"),i.a.createElement("option",null,"Son-in-law"),i.a.createElement("option",null,"Daughter-in-law"),i.a.createElement("option",null,"Cousin"),i.a.createElement("option",null,"Friend"),i.a.createElement("option",null,"Colluege"),i.a.createElement("option",null,"others"))),"others"===l&&i.a.createElement(P.a,null,i.a.createElement(u.a,{type:"text",value:this.state.relation1,placeholder:"Relation Name",onChange:function(a){return e.setState({relation1:a.target.value})},id:"data-name"})),i.a.createElement(P.a,null,i.a.createElement(A.a,{for:"data-name"},"Email *"),i.a.createElement(u.a,{type:"text",value:this.state.email,placeholder:"Enter nominee email",onChange:function(a){return e.setState({email:a.target.value})},id:"data-name"})),i.a.createElement(P.a,null,i.a.createElement(A.a,{for:"data-price"},"Contact No *"),i.a.createElement(u.a,{type:"number",value:this.state.contact1,onChange:function(a){return e.setState({contact1:a.target.value})},id:"data-price",placeholder:"Enter primary contact No"})),i.a.createElement(P.a,null,i.a.createElement(A.a,{for:"data-price"},"Secondary Contact No"),i.a.createElement(u.a,{type:"number",value:this.state.contact2,onChange:function(a){return e.setState({contact2:a.target.value})},id:"data-price",placeholder:"Enter secondry contact No"})),i.a.createElement(P.a,null,i.a.createElement(A.a,{for:"data-name"},"Address *"),i.a.createElement(u.a,{type:"textarea",value:this.state.address,placeholder:"Adress",onChange:function(a){return e.setState({address:a.target.value})},id:"data-name"})),this.props.thumbView&&c.length<=0?i.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",i.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(a){return e.setState({img:URL.createObjectURL(a.target.files[0])})}})):null),i.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},i.a.createElement(d.a.Ripple,{className:"mb-1",color:"secondary",outline:!0,onClick:function(){return n(!1,!0)}},"Cancel"),i.a.createElement(d.a.Ripple,{color:"warning",type:"reset",className:"ml-1 mr-1 mb-1",onClick:function(){return e.handleSubmit(e.state)}},this.props.isLoading&&i.a.createElement(j.a,{color:"danger",size:"sm"})," ",null!==r?this.props.isLoading?"Updating...":"Update":this.props.isLoading?"Adding...":"Add")))}}]),t}(l.Component),U=t(38),_=t.n(U),T=t(897),z=t(809);t(898),t(899),t(560);_.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var V={"on hold":"warning",delivered:"success",pending:"primary",canceled:"danger"},q={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},W=function(e){return i.a.createElement("div",{className:"data-list-action"},i.a.createElement(D.a,{className:"cursor-pointer mr-1",size:window.screen.width<600?13:20,onClick:function(){return e.currentData(e.row)}}),window.screen.width>600&&i.a.createElement(N.a,{className:"cursor-pointer",size:window.screen.width<600?13:20,onClick:function(){e.deleteRow(e.row)}}))},J=function(e){return i.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},i.a.createElement("div",{className:"actions-left d-flex flex-wrap"},i.a.createElement(d.a,{className:"add-new-btn",color:"primary",style:{marginTop:"5px"},onClick:function(){return e.handleSidebar(!0,!0)},outline:!0},i.a.createElement(S.a,{size:15}),i.a.createElement("span",{className:"align-middle"},"Add New Nominee"))),i.a.createElement("div",{className:"actions-right"},i.a.createElement("div",{className:"filter-section mt-sm-0 mt-4"},i.a.createElement(u.a,{type:"text",style:{marginTop:"5px",width:""},onChange:function(a){return e.handleFilter(a)},placeholder:"Find Documents"}))),i.a.createElement("div",{className:"actions-right d-flex flex-wrap mt-sm-0 mt-2"},i.a.createElement(m.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none",style:{marginTop:"5px"}},i.a.createElement(h.a,{color:"",className:"sort-dropdown"},i.a.createElement("span",{className:"align-middle mx-50"},"Total count : ",e.total)))))},H=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Name",selector:"name",sortable:!0,minWidth:"200px",cell:function(e){return i.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",sortable:!0},{name:"Email",minWidth:"200px",selector:"email",sortable:!0},{name:"Contact",selector:"primaryContact",minWidth:"150px",sortable:!0},{name:" ",selector:"usage",sortable:!0,cell:function(e){return i.a.createElement(T.a,{className:"m-0",color:"Unused"!==e.usage&&e.usage?"success":"primary",text:e.usage?e.usage:"Unused"})}},{name:"Actions",sortable:!1,cell:function(a){return i.a.createElement(W,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],mobilecolumns:[{name:"Name",selector:"name",sortable:!0,minWidth:"50px",cell:function(e){return i.a.createElement("p",{style:{fontSize:"10px"},title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",maxWidth:"50px",sortable:!0,cell:function(e){return i.a.createElement("p",{style:{fontSize:"10px"},title:e.relation,className:"text-truncate text-bold-500 mb-0"},e.relation)}},{name:"",sortable:!0,width:"50px",cell:function(a){return i.a.createElement(W,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:4,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:"",isLoading:!1,dataLoading:!0},e.thumbView=e.props.thumbView,e.handleFilter=function(a){e.setState({value:a.target.value}),e.props.filterData(a.target.value)},e.handleRowsPerPage=function(a){var t=e.props,n=t.parsedFilter,r=t.getData,s=void 0!==n.page?n.page:1;y.a.push("/nominee/list?page=".concat(s,"&perPage=").concat(a)),e.setState({rowsPerPage:a}),r({page:n.page,perPage:a})},e.handleSidebar=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({sidebar:a}),!0===t&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(a){if(e.props.deleteData(a),e.props.getData(e.props.parsedFilter),e.state.data.length-1===0){var t=e.props.thumbView?"/data-list/thumb-view/":"/#/nominee/list/";y.a.push("".concat(t,"list-view?page=").concat(parseInt(e.props.parsedFilter.page-1),"&perPage=").concat(e.props.parsedFilter.perPage)),e.props.getData({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage})}},e.addData=function(a){if(""===a.name||""===a.relation1||""===a.email||""===a.contact1||""===a.address)f.b.error("Please Fill All Mandatory Details");else{e.setState({isLoading:!0}),console.log("aaquib",a);var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:a.name,relation:a.relation1,email:a.email,primaryContact:a.contact1,secondaryContact:a.contact2,address:a.address,usage:"Unused"};_.a.post("/backendapi/nominee/add",t).then((function(a){e.setState({isLoading:!1}),f.b.success("Nominee Added Successfully"),e.handleSidebar(!1,!0),e.props.getData(e.props.parsedFilter)})).catch((function(a){e.setState({isLoading:!1}),f.b.error("Add Nominee Failed! Please contact admin")})),console.log("aaquib",t)}},e.updateData=function(a){if(""===a.name||""===a.relation1||""===a.email||""===a.contact1||""===a.address)f.b.error("Please Fill All Mandatory Details");else{e.setState({isLoading:!0}),console.log("aaquib",a);var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},n={_id:a._id,usage:a.usage?a.usage:"Unused",userId:t._id,name:a.name,relation:a.relation1,email:a.email,primaryContact:a.contact1,secondaryContact:a.contact2,address:a.address};_.a.post("/backendapi/nominee/update",n).then((function(a){e.setState({isLoading:!1}),f.b.success("Nominee Updated Successfully"),e.handleSidebar(!1,!0),e.props.getData(e.props.parsedFilter)})).catch((function(a){e.setState({isLoading:!1}),f.b.error("Add Nominee Failed! Please contact admin")})),console.log("aaquib",n)}},e.handleCurrentData=function(a){e.setState({currentData:a}),e.handleSidebar(!0)},e.handlePagination=function(a){var t=e.props,n=t.parsedFilter,r=t.getData,s=void 0!==n.perPage?n.perPage:4,o=(e.props.thumbView,"/#/nominee/list/");y.a.push("".concat(o,"list-view?page=").concat(a.selected+1,"&perPage=").concat(s)),r({page:a.selected+1,perPage:s}),e.setState({currentPage:a.selected})},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getData(this.props.parsedFilter),this.props.getInitialData()}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(this.thumbView){this.thumbView=!1;var n=[{name:"Image",selector:"img",minWidth:"220px",cell:function(e){return i.a.createElement("img",{src:e.img,height:"100",alt:e.name})}},{name:"Name",selector:"name",sortable:!0,minWidth:"250px",cell:function(e){return i.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return i.a.createElement(g.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return i.a.createElement(T.a,{className:"m-0",color:V[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(e){return i.a.createElement(W,{row:e,getData:t.props.getData,parsedFilter:t.props.parsedFilter,currentData:t.handleCurrentData,deleteRow:t.handleDelete})}}];this.setState({columns:n})}}},{key:"render",value:function(){var e=this,a=this.state,t=(a.dataLoading,a.columns),n=a.data,r=a.allData,s=(a.totalPages,a.value),o=a.rowsPerPage,l=a.currentData,c=a.sidebar,p=a.totalRecords,d=a.sortIndex;return 0===n.length&&0===r.length?i.a.createElement("div",{className:"fallback-spinner vh-100"},i.a.createElement("div",{className:"loading"},i.a.createElement("div",{className:"effect-1 effects"}),i.a.createElement("div",{className:"effect-2 effects"}),i.a.createElement("div",{className:"effect-3 effects"}))):i.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},i.a.createElement(v.a,{width:"200",columns:window.screen.width<600?this.state.mobilecolumns:t,data:s.length?r:n,noHeader:!0,subHeader:!0,selectableRows:!(window.screen.width<600),responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(a){return e.setState({selected:a.selectedRows})},customStyles:q,subHeaderComponent:i.a.createElement(J,{handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:o,total:p,index:d}),sortIcon:i.a.createElement(x.a,null),selectableRowsComponent:z.a,selectableRowsComponentProps:{color:"primary",icon:i.a.createElement(C.a,{className:"vx-icon",size:12}),label:"",size:"sm"}}),i.a.createElement(R,{show:c,data:l,updateData:this.updateData,addData:this.addData,isLoading:this.state.isLoading,handleSidebar:this.handleSidebar,thumbView:this.props.thumbView,getData:this.props.getData,dataParams:this.props.parsedFilter,addNew:this.state.addNew}),i.a.createElement("div",{className:w()("data-list-overlay",{show:c}),onClick:function(){return e.handleSidebar(!1,!0)}}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.dataList.data.length!==a.data.length||a.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.data.length/5,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex,dataLoading:!1}:null}}]),t}(l.Component),M=Object(I.b)((function(e){return{dataList:e.dataList}}),{getData:k.d,deleteData:k.b,updateData:k.h,addData:k.a,getInitialData:k.e,filterData:k.c})(H),G=t(934),Y=t.n(G),$=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"warning"},"Manage Nominees"),i.a.createElement(c.a,null,i.a.createElement(f.a,null),i.a.createElement(p.a,{sm:"12"},i.a.createElement(M,{parsedFilter:Y.a.parse(this.props.location.search)}))))}}]),t}(i.a.Component);a.default=$},809:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(14),o=t(13),l=t(0),i=t.n(l),c=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),t}(i.a.Component);a.a=c},813:function(e,a,t){},827:function(e,a,t){"use strict";t.d(a,"d",(function(){return i})),t.d(a,"f",(function(){return c})),t.d(a,"e",(function(){return p})),t.d(a,"g",(function(){return d})),t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return m})),t.d(a,"h",(function(){return h})),t.d(a,"a",(function(){return g}));var n=t(75),r=t.n(n),s=t(121),o=t(38),l=t.n(o);l.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var i=function(e){return function(){var a=Object(s.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a.next=3,l.a.get("/backendapi/nominee/list/"+n._id,e).then((function(a){console.log("aaquib  123",a.data),console.log("aaquib  123",e),t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},c=function(e){return function(){var a=Object(s.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a.next=3,l.a.get("/backendapi/spend/list/"+n._id,e).then((function(a){console.log("aaquib  123",a.data),console.log("aaquib  123",e),t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var a=Object(s.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.get("/backendapi/nominee/list/"+e._id).then((function(e){t({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var a=Object(s.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.get("/backendapi/spend/list/"+e._id).then((function(e){t({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(a){return a({type:"FILTER_DATA",value:e})}},m=function(e){return function(a){console.log("DELETE DATA :",e),l.a.post("/backendapi/nominee/delete",e).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},h=function(e){return console.log("Aaquib 123",e),function(a,t){l.a.post("/api/datalist/update-data",{obj:e}).then((function(t){a({type:"UPDATE_DATA",obj:e})}))}},g=function(e){return function(a,t){var n=t().dataList.params;l.a.post("/api/datalist/add-data",{obj:e}).then((function(t){a({type:"ADD_DATA",obj:e}),a(i(n))}))}}},897:function(e,a,t){"use strict";var n=t(11),r=t(12),s=t(14),o=t(13),l=t(0),i=t.n(l),c=t(171),p=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},i.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?i.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},i.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,i.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?i.a.createElement("div",{className:"chip-closable",onClick:function(a){return e.closeChip(a)}},this.props.closableIcon?this.props.closableIcon:i.a.createElement(c.a,null)):null))}}]),t}(i.a.Component);a.a=p},898:function(e,a,t){},899:function(e,a,t){}}]);
//# sourceMappingURL=26.c5d2f123.chunk.js.map