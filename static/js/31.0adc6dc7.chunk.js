(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[31],{1002:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),l=t(14),s=t(13),o=t(0),i=t.n(o),c=t(789),d=t(790),p=t(516),u=t(576),m=t(470),h=t(715),g=t(523),b=t(572),f=t.n(b),v=t(3),E=t.n(v),w=(t(671),t(44)),N=t(531),D=t(592),y=t(493),S=t(494),x=t(514),k=t(21),C=t(555),I=(t(557),t(526),t(558)),O=t(253),P=t(559),j=t(445),A=t(58),F=t.n(A),L=t(606),R=t(17),U=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={isLoading:e.props.isLoading,relation:"Son",relation1:"",email:"",address:"",contact1:"",contact2:"",id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}},e.addNew=!1,e.handleSubmit=function(a){null!==e.props.data?(a._id=e.props.data._id,a.usage=e.props.data.usage,e.props.updateData(a)):(e.addNew=!0,e.props.addData(a));Object.keys(e.props.dataParams).length&&e.props.dataParams},e.nullData=function(){e.setState({name:"",relation:"",relation1:"",email:"",address:"",contact1:"",contact2:""})},e}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,a){console.log("aaaaaaaaaaaaaaaaa",this.props.isLoading),null!==this.props.data&&null===e.data&&(this.props.data.id!==a.id&&this.setState({id:this.props.data.id}),this.props.data.name!==a.name&&this.setState({name:this.props.data.name}),this.props.data.relation!==a.relation&&this.setState({relation:this.props.data.relation}),this.props.data.relation!==a.relation1&&this.setState({relation1:this.props.data.relation}),this.props.data.address!==a.address&&this.setState({address:this.props.data.address}),this.props.data.email!==a.email&&this.setState({email:this.props.data.email}),console.log("hhhhhhhhhhhhhhhhhhhhh",this.props.data,a),this.props.data.primaryContact!==a.contact1&&this.setState({contact1:this.props.data.primaryContact}),this.props.data.secondaryContact!==a.contact2&&this.setState({contact2:this.props.data.secondaryContact}),this.props.data.order_status!==a.order_status&&this.setState({order_status:this.props.data.order_status}),this.props.data.price!==a.price&&this.setState({price:this.props.data.price}),this.props.data.img!==a.img&&this.setState({img:this.props.data.img})),null===this.props.data&&null!==e.data&&this.setState({id:"",name:"",relation:"",relation1:"",email:"",address:"",contact1:"",contact2:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew&&this.setState({id:"",name:"",relation:"",relation1:"",email:"",address:"",contact1:"",contact2:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew=!1}},{key:"render",value:function(){var e=this,a=this.props,t=a.show,n=a.handleSidebar,r=a.data,l=this.state,s=l.name,o=l.relation,c=l.img;return i.a.createElement("div",{className:E()("data-list-sidebar",{show:t})},i.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},i.a.createElement("h4",{style:{color:"var(--warning)"}},null!==r?"UPDATE NOMINEE DETAILS":"ADD NEW NOMINEE"),i.a.createElement(j.a,{size:20,onClick:function(){n(!1,!0),e.nullData()}})),i.a.createElement(F.a,{className:"data-list-fields px-2 pt-2",options:{wheelPropagation:!1}},this.props.thumbView&&c.length?i.a.createElement(I.a,{className:"text-center"},i.a.createElement("img",{className:"img-fluid",src:c,alt:s}),i.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mt-2"},i.a.createElement("label",{className:"btn btn-flat-primary",htmlFor:"update-image",color:"primary"},"Upload Image",i.a.createElement("input",{type:"file",id:"update-image",hidden:!0,onChange:function(a){return e.setState({img:URL.createObjectURL(a.target.files[0])})}})),i.a.createElement(O.a,{color:"flat-danger",onClick:function(){return e.setState({img:""})}},"Remove Image"))):null,i.a.createElement(I.a,{className:"form-label-group mb-2"},i.a.createElement(u.a,{className:"input-label",type:"text",value:s,placeholder:"Nominee Name",onChange:function(a){return e.setState({name:a.target.value})},id:"data-name"}),i.a.createElement(P.a,{className:"dark"===R.a.theme?"dark-label":"light-label",for:"data-name"},"Name *")),i.a.createElement(I.a,null,i.a.createElement(u.a,{type:"select",id:"data-category",value:o,onChange:function(a){return e.setState({relation:a.target.value})}},i.a.createElement("option",null,"Son"),i.a.createElement("option",null,"Daughter"),i.a.createElement("option",null,"Husband"),i.a.createElement("option",null,"Wife"),i.a.createElement("option",null,"Son-in-law"),i.a.createElement("option",null,"Daughter-in-law"),i.a.createElement("option",null,"Cousin"),i.a.createElement("option",null,"Friend"),i.a.createElement("option",null,"Colluege"),i.a.createElement("option",null,"others")),i.a.createElement(P.a,{className:"dark"===R.a.theme?"dark-label select-label":"light-label select-label",for:"data-category"},"Relation *")),"others"===o&&i.a.createElement(I.a,{className:"form-label-group mb-2"},i.a.createElement(u.a,{type:"text",value:this.state.relation1,placeholder:"Relation Name",onChange:function(a){return e.setState({relation1:a.target.value})},id:"data-name"})),i.a.createElement(I.a,{className:"form-label-group mb-2"},i.a.createElement(u.a,{className:"input-label",type:"text",value:this.state.email,placeholder:"Enter nominee email",onChange:function(a){return e.setState({email:a.target.value})},id:"data-name"}),i.a.createElement(P.a,{className:"dark"===R.a.theme?"dark-label":"light-label",for:"data-name"},"Email *")),i.a.createElement(I.a,{className:"form-label-group mb-2"},i.a.createElement(u.a,{className:"input-label",type:"number",value:this.state.contact1,onChange:function(a){return e.setState({contact1:a.target.value})},id:"data-price",placeholder:"Enter primary contact No"}),i.a.createElement(P.a,{className:"dark"===R.a.theme?"dark-label":"light-label",for:"data-price"},"Contact No *")),i.a.createElement(I.a,{className:"form-label-group mb-2"},i.a.createElement(u.a,{className:"input-label",type:"number",value:this.state.contact2,onChange:function(a){return e.setState({contact2:a.target.value})},id:"data-price",placeholder:"Enter secondry contact No"}),i.a.createElement(P.a,{className:"dark"===R.a.theme?"dark-label":"light-label",for:"data-price"},"Secondary Contact No")),i.a.createElement(I.a,{className:"form-label-group mb-2"},i.a.createElement(u.a,{className:"input-label",type:"textarea",value:this.state.address,placeholder:"Address",onChange:function(a){return e.setState({address:a.target.value})},id:"data-name"}),i.a.createElement(P.a,{className:"dark"===R.a.theme?"dark-label":"light-label",for:"data-name"},"Address *")),this.props.thumbView&&c.length<=0?i.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",i.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(a){return e.setState({img:URL.createObjectURL(a.target.files[0])})}})):null),i.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},i.a.createElement(O.a.Ripple,{className:"button-label",color:"secondary",outline:!0,onClick:function(){e.nullData()}},"Reset"),i.a.createElement(O.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(){return e.handleSubmit(e.state)}},this.props.isLoading&&i.a.createElement(L.a,{color:"danger",size:"sm"}),null!==r?this.props.isLoading?"Updating...":"Update":this.props.isLoading?"Adding...":"Add")))}}]),t}(o.Component),_=t(43),T=t.n(_),z=t(611);t(521),t(577),t(578),t(269);T.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var V={"on hold":"warning",delivered:"success",pending:"primary",canceled:"danger"},W={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},q=function(e){return i.a.createElement("div",{className:"data-list-action"},i.a.createElement(D.a,{className:"cursor-pointer",size:window.screen.width<600?13:20,onClick:function(){e.deleteRow(e.row)}}))},J=function(e){return i.a.createElement("div",{className:"data-list-action"},i.a.createElement(y.a,{className:"cursor-pointer mr-1",size:window.screen.width<600?13:20,onClick:function(){return e.currentData(e.row)}}),window.screen.width>600&&i.a.createElement(D.a,{className:"cursor-pointer",size:window.screen.width<600?13:20,onClick:function(){e.deleteRow(e.row)}}))},H=function(e){return i.a.createElement("div",{className:"data-list-action"},window.screen.width>600?i.a.createElement(y.a,{className:"cursor-pointer mr-1",size:"13",onClick:function(){return e.currentData(e.row)}}):i.a.createElement(S.a,{className:"cursor-pointer mr-1",size:"20",onClick:function(){return e.currentData(e.row)}}))},M=function(e){return i.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},i.a.createElement("div",{className:"actions-left d-flex flex-wrap"},i.a.createElement(p.a,{color:"white",className:"sort-dropdown",style:{height:"75%",backgroundColor:"var(--warning)",fontWeight:"bold"},outline:!0,onClick:function(){return e.handleSidebar(!0,!0)}},i.a.createElement("span",{className:"align-middle"},"Add"))),i.a.createElement("div",{className:"actions-right d-flex flex-wrap"},i.a.createElement("div",{className:"filter-section"},i.a.createElement(u.a,{type:"text",style:{height:"75%",borderRadius:"5rem",fontSize:"1rem"},onChange:function(a){return e.handleFilter(a)},placeholder:"Find Nominee",className:"placeholder"}))),i.a.createElement("div",{className:"actions-right d-flex flex-wrap"},i.a.createElement(m.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none"},i.a.createElement(p.a,{color:"",className:"sort-dropdown",style:{height:"75%"}},i.a.createElement("span",{className:"align-middle mx-50"},"Count : ",e.total)))))},G=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Edit",sortable:!1,width:"80px",cell:function(a){return i.a.createElement(H,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData})}},{name:"Name",selector:"name",sortable:!0,minWidth:"200px",cell:function(e){return i.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",sortable:!0,width:"170px"},{name:"Email",minWidth:"200px",selector:"email",sortable:!0},{name:"Contact",selector:"primaryContact",minWidth:"150px",sortable:!0},{name:"Status",width:"120px",selector:"unused",sortable:!0,cell:function(e){return i.a.createElement(z.a,{className:"m-0",color:"Unused"!==e.usage&&e.usage?"success":"primary",text:e.usage?e.usage:"Unused"})}},{name:"Delete",sortable:!1,width:"110px",cell:function(a){return i.a.createElement(q,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,deleteRow:e.handleDelete})}}],mobilecolumns:[{name:"Info",sortable:!0,width:"50px",cell:function(a){return i.a.createElement(H,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}},{name:"Name",selector:"name",sortable:!0,minWidth:"50px",cell:function(e){return i.a.createElement("p",{style:{fontSize:"10px"},title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",maxWidth:"50px",sortable:!0,cell:function(e){return i.a.createElement("p",{style:{fontSize:"10px"},title:e.relation,className:"text-truncate text-bold-500 mb-0"},e.relation)}},{name:"Trash",sortable:!0,width:"50px",cell:function(a){return i.a.createElement(q,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:4,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:"",isLoading:!1,dataLoading:!0},e.thumbView=e.props.thumbView,e.handleFilter=function(a){e.setState({value:a.target.value}),e.props.filterData(a.target.value)},e.handleRowsPerPage=function(a){var t=e.props,n=t.parsedFilter,r=t.getData,l=void 0!==n.page?n.page:1;w.a.push("/nominee/list?page=".concat(l,"&perPage=").concat(a)),e.setState({rowsPerPage:a}),r({page:n.page,perPage:a})},e.handleSidebar=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({sidebar:a}),!0===t&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(a){if(e.props.deleteData(a),e.props.getData(e.props.parsedFilter),e.state.data.length-1===0){var t=e.props.thumbView?"/data-list/thumb-view/":"/#/nominee/list/";w.a.push("".concat(t,"list-view?page=").concat(parseInt(e.props.parsedFilter.page-1),"&perPage=").concat(e.props.parsedFilter.perPage)),e.props.getData({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage})}},e.addData=function(a){if(""===a.name||""===a.relation1||""===a.email||""===a.contact1||""===a.address)g.b.error("Please Fill All Mandatory Details");else{e.setState({isLoading:!0}),console.log("aaquib",a);var t={userId:(localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{})._id,name:Object(N.b)(a.name,!0),relation:Object(N.b)(a.relation1,!0),email:Object(N.b)(a.email,!0),primaryContact:Object(N.b)(a.contact1,!0),secondaryContact:Object(N.b)(a.contact2,!0),address:Object(N.b)(a.address,!0),usage:"Unused"};T.a.post("/backendapi/nominee/add",t).then((function(a){e.setState({isLoading:!1}),g.b.success("Nominee Added Successfully"),e.handleSidebar(!1,!0),e.props.getData(e.props.parsedFilter)})).catch((function(a){e.setState({isLoading:!1}),g.b.error("Add Nominee Failed! Please contact admin")})),console.log("aaquib",t)}},e.updateData=function(a){if(""===a.name||""===a.relation1||""===a.email||""===a.contact1||""===a.address)g.b.error("Please Fill All Mandatory Details");else{e.setState({isLoading:!0}),console.log("aaquib",a);var t=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},n={_id:a._id,usage:a.usage?a.usage:"Unused",userId:t._id,name:Object(N.b)(a.name,!0),relation:Object(N.b)(a.relation1,!0),email:Object(N.b)(a.email,!0),primaryContact:Object(N.b)(a.contact1,!0),secondaryContact:Object(N.b)(a.contact2,!0),address:Object(N.b)(a.address,!0)};T.a.post("/backendapi/nominee/update",n).then((function(a){e.setState({isLoading:!1}),g.b.success("Nominee Updated Successfully"),e.handleSidebar(!1,!0),e.props.getData(e.props.parsedFilter)})).catch((function(a){e.setState({isLoading:!1}),g.b.error("Add Nominee Failed! Please contact admin")})),console.log("aaquib",n)}},e.handleCurrentData=function(a){e.setState({currentData:a}),e.handleSidebar(!0)},e.handlePagination=function(a){var t=e.props,n=t.parsedFilter,r=t.getData,l=void 0!==n.perPage?n.perPage:4,s=(e.props.thumbView,"/#/nominee/list/");w.a.push("".concat(s,"list-view?page=").concat(a.selected+1,"&perPage=").concat(l)),r({page:a.selected+1,perPage:l}),e.setState({currentPage:a.selected})},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getData(this.props.parsedFilter),this.props.getInitialData()}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(this.thumbView){this.thumbView=!1;var n=[{name:"Image",selector:"img",minWidth:"220px",cell:function(e){return i.a.createElement("img",{src:e.img,height:"100",alt:e.name})}},{name:"Name",selector:"name",sortable:!0,minWidth:"250px",cell:function(e){return i.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return i.a.createElement(h.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return i.a.createElement(z.a,{className:"m-0",color:V[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(e){return i.a.createElement(J,{row:e,getData:t.props.getData,parsedFilter:t.props.parsedFilter,currentData:t.handleCurrentData,deleteRow:t.handleDelete})}}];this.setState({columns:n})}}},{key:"render",value:function(){var e=this,a=this.state,t=(a.dataLoading,a.columns),n=a.data,r=a.allData,l=(a.totalPages,a.value),s=a.rowsPerPage,o=a.currentData,c=a.sidebar,d=a.totalRecords,p=a.sortIndex;return 0===n.length&&0===r.length?i.a.createElement("div",{className:"fallback-spinner vh-100"},i.a.createElement("div",{className:"loading"},i.a.createElement("div",{className:"effect-1 effects"}),i.a.createElement("div",{className:"effect-2 effects"}),i.a.createElement("div",{className:"effect-3 effects"}))):i.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},i.a.createElement(f.a,{width:"200",columns:window.screen.width<600?this.state.mobilecolumns:t,data:l.length?r:n,noHeader:!0,subHeader:!0,selectableRows:(window.screen.width,!1),responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(a){return e.setState({selected:a.selectedRows})},customStyles:W,subHeaderComponent:i.a.createElement(M,{className:"data-table",handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:s,total:d,index:p}),sortIcon:i.a.createElement(x.a,null)}),i.a.createElement(U,{show:c,data:o,updateData:this.updateData,addData:this.addData,isLoading:this.state.isLoading,handleSidebar:this.handleSidebar,thumbView:this.props.thumbView,getData:this.props.getData,dataParams:this.props.parsedFilter,addNew:this.state.addNew}),i.a.createElement("div",{className:E()("data-list-overlay",{show:c}),onClick:function(){return e.handleSidebar(!1,!0)}}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.dataList.data.length!==a.data.length||a.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.data.length/5,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex,dataLoading:!1}:null}}]),t}(o.Component),Y=Object(k.b)((function(e){return{dataList:e.dataList}}),{getData:C.d,deleteData:C.b,updateData:C.h,addData:C.a,getInitialData:C.e,filterData:C.c})(G),$=t(672),B=t.n($),K=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"warning spacing"},"Nominees"),i.a.createElement(c.a,null,i.a.createElement(g.a,null),i.a.createElement(d.a,{sm:"12"},i.a.createElement(Y,{parsedFilter:B.a.parse(this.props.location.search)}))))}}]),t}(i.a.Component);a.default=K},521:function(e,a,t){"use strict";var n=t(11),r=t(12),l=t(14),s=t(13),o=t(0),i=t.n(o),c=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",{style:{color:this.props.labelColor}},this.props.label))}}]),t}(i.a.Component);a.a=c},526:function(e,a,t){},531:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return s}));var n=t(534),r=t.n(n),l=function(e,a,t){var n=a?"l@st@rz!":localStorage.getItem("secretkey");return e&&e.length>0?r.a.encrypt(t||n,e):e},s=function(e,a){var t=a?"l@st@rz!":localStorage.getItem("secretkey");return e&&e.length>0?r.a.decrypt(t,e):e}},555:function(e,a,t){"use strict";t.d(a,"d",(function(){return i})),t.d(a,"f",(function(){return c})),t.d(a,"e",(function(){return d})),t.d(a,"g",(function(){return p})),t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return m})),t.d(a,"h",(function(){return h})),t.d(a,"a",(function(){return g}));var n=t(66),r=t.n(n),l=t(111),s=t(43),o=t.n(s);o.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var i=function(e){return function(){var a=Object(l.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a.next=3,o.a.get("/backendapi/nominee/list/"+n._id,e).then((function(a){console.log("aaquib  123",a.data),console.log("aaquib  123",e),t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},c=function(e){return function(){var a=Object(l.a)(r.a.mark((function a(t){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},a.next=3,o.a.get("/backendapi/spend/list/"+n._id,e).then((function(a){console.log("aaquib  123",a.data),console.log("aaquib  123",e),t({type:"GET_DATA",data:a.data,totalPages:a.length,params:e})}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},d=function(){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var a=Object(l.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.get("/backendapi/nominee/list/"+e._id).then((function(e){t({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var a=Object(l.a)(r.a.mark((function a(t){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.get("/backendapi/spend/list/"+e._id).then((function(e){t({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(a){return a({type:"FILTER_DATA",value:e})}},m=function(e){return function(a){console.log("DELETE DATA :",e),o.a.post("/backendapi/nominee/delete",e).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},h=function(e){return console.log("Aaquib 123",e),function(a,t){o.a.post("/api/datalist/update-data",{obj:e}).then((function(t){a({type:"UPDATE_DATA",obj:e})}))}},g=function(e){return function(a,t){var n=t().dataList.params;o.a.post("/api/datalist/add-data",{obj:e}).then((function(t){a({type:"ADD_DATA",obj:e}),a(i(n))}))}}},577:function(e,a,t){},578:function(e,a,t){},611:function(e,a,t){"use strict";var n=t(11),r=t(12),l=t(14),s=t(13),o=t(0),i=t.n(o),c=t(445),d=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},i.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?i.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},i.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,i.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?i.a.createElement("div",{className:"chip-closable",onClick:function(a){return e.closeChip(a)}},this.props.closableIcon?this.props.closableIcon:i.a.createElement(c.a,null)):null))}}]),t}(i.a.Component);a.a=d}}]);
//# sourceMappingURL=31.0adc6dc7.chunk.js.map