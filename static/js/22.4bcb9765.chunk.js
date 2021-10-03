(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[22],{503:function(e,t,a){},524:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),o=a.n(l);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,o=void 0===l?24:l,s=c(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("polyline",{points:"3 6 5 6 21 6"}),r.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.displayName="Trash",t.a=s},647:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(451),o=a(452),i=a(24),c=a.n(i),s=a(40),u=a(7),d=a(500),m=a(449),b=a(515),f=a(165),h=a(501),p=a(523),v=a.n(p),w=a(8),g=a.n(w),x=a(524),O=a(477),E=a(478),j=a(497),y=a(17),N=a(516),D=(a(513),a(503),a(520)),S=(a(508),a(260),{rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}}),k=function(e){var t;return r.a.createElement("div",{className:"data-list-action"},r.a.createElement(x.a,{style:{cursor:(null===(t=e.row.usage)||void 0===t?void 0:t.length)?"no-drop":"pointer"},size:window.screen.width<500?13:20,onClick:function(){var t;!(null===(t=e.row.usage)||void 0===t?void 0:t.length)&&e.setRow()}}))},L=function(e){return r.a.createElement("div",{className:"data-list-action"},window.screen.width>500?r.a.createElement(O.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){return e.currentData(e.row)}}):r.a.createElement(E.a,{className:"cursor-pointer mr-1",size:window.screen.width<500?13:20,onClick:function(){return e.currentData(e.row)}}))},C=function(e){return r.a.createElement("div",{className:"data-list-header d-flex justify-content-between"},r.a.createElement("div",{className:"actions-left d-flex"},r.a.createElement(d.a,{color:"white",className:"sort-dropdown mx-50",style:{height:"75%",backgroundColor:"var(--warning)",fontWeight:"bold"},outline:!0,onClick:function(){return e.handleSidebar(!0,!0)}},r.a.createElement("span",{className:"align-middle"},"Add"))),r.a.createElement("div",{className:"actions-right d-flex"},r.a.createElement("div",{className:"filter-section"},r.a.createElement(m.a,{type:"text",style:{height:"75%",borderRadius:"5rem",fontSize:"1rem"},onChange:function(t){return e.handleFilter(t)},placeholder:"Find",className:"placeholder"}))))},R=Object(y.b)((function(e){return{dataList:e.dataList,listLoading:e.dataList.totalRecordsLoading}}),(function(e){return{deleteData:function(t){return e(Object(N.b)(t))},updateData:function(t){return e(Object(N.h)(t))},addData:function(t){return e(Object(N.a)(t))},getData:function(t){return e(Object(N.f)(t))},filterData:function(t){return e(Object(N.d)(t))},dataTest:function(){return e({type:"GET_ALL_DATA_LOADING",data:!0})}}}))((function(e){var t=[{name:"Edit",sortable:!1,minWidth:"110px",cell:function(e){return r.a.createElement(L,{row:e,currentData:be})}},{name:"Name",selector:"name",sortable:!0,maxWidth:"240px",cell:function(e){return r.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",sortable:!0,width:"170px",cell:function(e){return r.a.createElement("p",{title:null===e||void 0===e?void 0:e.relation,className:"text-truncate text-bold-500 mb-0"},null===e||void 0===e?void 0:e.relation)}},{name:"Contact",selector:"primaryContact",maxWidth:"170px",sortable:!0},{name:"Email",maxWidth:"235px",selector:"email",sortable:!0},{name:"Status",maxWidth:"120px",selector:"unused",sortable:!0,cell:function(e){var t,a;return r.a.createElement("span",{className:(null===(t=e.usage)||void 0===t?void 0:t.length)?"chipused":"chipunused"},console.log(e,"row data"),(null===(a=e.usage)||void 0===a?void 0:a.length)?"Used":"Unused")}},{name:"",sortable:!1,width:"110px",cell:function(e){return r.a.createElement(k,{row:e,setRow:function(){N(!0),x(e)},deleteRow:ue})}}],a=[{name:"Info",sortable:!0,width:"50px",cell:function(e){return r.a.createElement(L,{row:e,currentData:be})}},{name:"Name",selector:"name",sortable:!0,minWidth:"50px",cell:function(e){return r.a.createElement("p",{style:{fontSize:"10px"},title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Relation",selector:"relation",maxWidth:"50px",sortable:!0,cell:function(e){return r.a.createElement("p",{title:null===e||void 0===e?void 0:e.relation,className:"text-truncate text-bold-500 mb-0"},"others"===(null===e||void 0===e?void 0:e.relation)?null===e||void 0===e?void 0:e.relation1:null===e||void 0===e?void 0:e.relation)}},{name:"Trash",sortable:!0,width:"50px",cell:function(e){return r.a.createElement(k,{row:e,currentData:be,deleteRow:ue})}}],l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],d=o[1],m=Object(n.useState)(null),p=Object(u.a)(m,2),w=p[0],x=p[1],O=Object(n.useState)(!1),E=Object(u.a)(O,2),y=E[0],N=E[1],R=Object(n.useState)([]),z=Object(u.a)(R,2),F=z[0],P=z[1],W=Object(n.useState)(""),T=Object(u.a)(W,2),A=T[0],H=T[1],I=Object(n.useState)(!1),V=Object(u.a)(I,2),M=V[0],U=V[1],_=Object(n.useState)(null),G=Object(u.a)(_,2),J=G[0],B=G[1],Y=Object(n.useState)(0),q=Object(u.a)(Y,2),K=q[0],Q=q[1],X=Object(n.useState)([]),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ae=Object(u.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(!1),oe=Object(u.a)(le,2),ie=oe[0],ce=oe[1];Object(n.useEffect)((function(){e.dataList.data.length!==i.length&&(d(e.dataList.data),P(e.dataList.filteredData),Q(e.dataList.totalRecords),ee(e.dataList.sortIndex))}),[e.dataList]),Object(n.useEffect)((function(){e.getData(),e.dataTest()}),[]);var se=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];U(e),!0===t&&(B(null),re(t))},ue=function(t){e.deleteData(t),e.getData()},de=function(){var t=Object(s.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ce(!0),t.prev=1,t.next=4,e.addData(a);case 4:ce(!1),se(!1,!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),ce(!1),h.b.error("Add Nominee Failed! Please contact admin");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),me=function(){var t=Object(s.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==a.name&&""!==a.relation&&""!==a.email&&""!==a.contact1&&""!==a.address){t.next=4;break}h.b.error("Please Fill All Mandatory Details"),t.next=17;break;case 4:return ce(!0),t.prev=5,t.next=8,e.updateData(a);case 8:e.getData(),ce(!1),se(!1,!0),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(5),ce(!1),h.b.error("Unable to update! Please try again");case 17:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e){return t.apply(this,arguments)}}(),be=function(e){B(e),se(!0)};return e.listLoading?r.a.createElement("div",{className:"fallback-spinner vh-100"},r.a.createElement(f.a,{color:"danger",size:"sm"})):r.a.createElement("div",{className:"data-list ".concat(e.thumbView?"thumb-view":"list-view")},r.a.createElement(b.a,{handleConfirm:function(){ue(w),N(!1)},isOpen:y,closeModal:function(){return N(!1)}}),r.a.createElement(v.a,{width:"200",columns:window.screen.width<500?a:t,data:A.length?F:i,noHeader:!0,subHeader:!0,selectableRows:(window.screen.width,!1),responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,customStyles:S,subHeaderComponent:r.a.createElement(C,{className:"data-table",handleSidebar:se,handleFilter:function(t){H(t.target.value),e.filterData(t.target.value)},handleRowsPerPage:function(e){},total:K,index:$}),sortIcon:r.a.createElement(j.a,null)}),r.a.createElement(D.a,{show:M,data:J,updateData:me,addData:de,isLoading:ie,handleSidebar:se,thumbView:e.thumbView,getData:e.getData,dataParams:e.parsedFilter,addNew:ne}),r.a.createElement("div",{className:g()("data-list-overlay",{show:M}),onClick:function(){return se(!1,!0)}}))}));t.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"warning spacing nodisplay"},"Nominees"),r.a.createElement(l.a,null,r.a.createElement(h.a,null),r.a.createElement(o.a,{sm:"12"},r.a.createElement(R,null))))}}}]);