(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[31],{1003:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(12),s=a(14),r=a(13),c=a(25),o=a(0),i=a.n(o),m=a(559),u=a(560),p=a(519),d=a(545),f=a(542),b=a(589),E=a(520),g=a(563),h=a(564),v=a(554),y=a(571),N=a(561),k=a(249),x=a(524),D=a(505),C=(a(556),a(3)),O=a.n(C),A=a(562),I=a(51),T=a.n(I),j=a(23),S=a(515),w=(a(558),a(517),a(555)),R=a(496),F=(a(578),a(514)),L=(a(513),a(590)),z=[{value:"Bank Details",label:"Bank Details",color:"#00B8D9",isFixed:!0},{value:"Fixed Deposit",label:"Fixed Deposit",color:"#0052CC",isFixed:!0},{value:"Notes",label:"Notes",color:"#0052CC",isFixed:!0},{value:"Custom",label:"Custom",color:"#0052CC",isFixed:!0}],M=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"textarea",label:"Text Area",color:"#0052CC",isFixed:!0},{value:"Date",label:"Date",color:"#0052CC",isFixed:!0},{value:"Number",label:"Number",color:"#0052CC",isFixed:!0},{value:"File",label:"File",color:"#0052CC",isFixed:!0}],U=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={assetType:"",selectAssetRef:i.a.createRef(),selectNomineeRef:i.a.createRef(),selectCustomRef:i.a.createRef(),nomineeOption:[],nominees:[],nomineeList:[],selectedTemplate:[],template:{Custom:[{key:"Asset Name",val:"",type:"Text"}],Notes:[{key:"Notes",val:"",type:"textarea"},{key:"Notes End Date",val:"",type:"date"}],"Fixed Deposit":[{key:"Asset Name / Alias",val:"",type:"Text"},{key:"Bank Accrount No",val:"",type:"Number"},{key:"IFSC",val:"",type:"text"},{key:"Amount",val:"",type:"Number"},{key:"FD Nominee Registered at Bank",val:"",type:"text"},{key:"FD Maturity Date",val:"",type:"Date"},{key:"Attachments",val:"",type:"File"}]}},e.changeValue=function(t,a){var n=e.state.selectedTemplate,l=n.findIndex((function(e){return e.key===a.key}));console.log("ZZZZZZZZZZZ",t,l),n[l].val=t,e.setState({selectedTemplate:n})},e.callAddAsset=function(t){t.preventDefault(),console.log(e.state.selectedTemplate);var a=JSON.parse(localStorage.getItem("logInUserData"));console.log("sssssssssssssssss",e.state.nominee);var n={assetType:e.state.assetType,assetDetails:e.state.selectedTemplate,nominees:e.state.nominees};a.assets.push(n),localStorage.setItem("logInUserData",JSON.stringify(a)),S.b.success("Asset addedd successfully!"),e.clearAsset(),e.clearCustomField(),T.a.post("/backendapi/adddetails",{_id:a._id,assets:a.assets}).then((function(e){})).catch()},e.addfield=function(){var t=e.state.selectedTemplate;t.push({key:e.state.fname,val:"",type:e.state.ftype,deletable:!0}),console.log("selectedTemplate",t),e.setState({selectedTemplate:t,fname:"",ftype:""})},e.changeNominee=function(t){var a=e.state.nominees;t.forEach((function(e){a.push({id:e.value,name:e.label}),console.log("ssssssssssssssssssssss2",e)})),e.setState({nominees:a})},e.clearAsset=function(){e.state.selectAssetRef.current.select.clearValue(),e.state.selectNomineeRef.current.select.clearValue(),e.setState({assetType:"",selectedTemplate:[],nominees:[]})},e.clearCustomField=function(){e.setState({fname:"",ftype:""}),e.state.selectCustomRef.current.select.clearValue()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getData(this.props.parsedFilter)}},{key:"render",value:function(){var e=this;return i.a.createElement(m.a,null,i.a.createElement(S.a,null),i.a.createElement(u.a,{lg:"8",md:"6",sm:"12"},i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,"Add New Asset")),i.a.createElement(E.a,null,i.a.createElement(A.a,{className:"mt-2"},i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(F.a,{className:"React",classNamePrefix:"select",ref:this.state.selectAssetRef,name:"color",options:z,isClearable:!0,placeholder:"Select Investment Type...",onChange:function(t){e.setState({fname:"",ftype:"",assetType:t?t.value:void 0,selectedTemplate:t?e.state.template[t.value]:{}})}}),i.a.createElement(N.a,{for:"nameMulti"},"Asset Type"))),i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(F.a,{isMulti:!0,name:"nominee",options:this.state.nomineeOption,ref:this.state.selectNomineeRef,className:"React",classNamePrefix:"select",placeholder:"Select Nominees...",id:"nominee",onChange:this.changeNominee}),i.a.createElement(N.a,null,"Nominee"))),Object.keys(this.state.template).includes(this.state.assetType)&&this.state.template[this.state.assetType].map((function(t){return i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement(v.a,{className:"form-label-group"},t.deletable&&i.a.createElement(L.a,{style:{zIndex:999,float:"right",marginBottom:"-8px",marginRight:"-5px"},className:"primary",size:15}),i.a.createElement(y.a,{type:t.type,name:"city",id:"cityMulti",placeholder:t.key,onChange:function(a){e.changeValue(a.target?a.target.value:a.value,t)}}),i.a.createElement(N.a,{for:"cityMulti"},t.key)))})),i.a.createElement(u.a,{sm:"12"},i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(k.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1",disabled:0===this.state.nominees.length,onClick:function(t){e.callAddAsset(t)}},"Submit"),i.a.createElement(k.a.Ripple,{outline:!0,color:"warning",type:"reset",className:"mb-1",onClick:function(t){e.clearAsset()}},"Reset")))))))),i.a.createElement(u.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,"Add Custum Field"),i.a.createElement(R.a,{size:20,className:"cursor-pointer text-muted"})),i.a.createElement(E.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{sm:"12"},i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(y.a,{type:"email",name:"Email",disabled:""===this.state.assetType,id:"EmailMulti",value:this.state.fname,placeholder:"Enter Field Name",onChange:function(t){e.setState({fname:t.target.value})}}),i.a.createElement(N.a,{for:"EmailMulti"},"Enter Field Name"))),i.a.createElement(u.a,{sm:"12"},i.a.createElement(v.a,{className:"form-label-group",disabled:void 0===this.state.assetType},i.a.createElement(F.a,{className:"React",ref:this.state.selectCustomRef,disabled:void 0===this.state.assetType,classNamePrefix:"select",isClearable:!0,name:"color",options:M,placeholder:"Select Field Type...",onChange:function(t){return e.setState({ftype:t?t.value:" "})}}),i.a.createElement(N.a,{for:"nameMulti"},"Field Type"))),i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(k.a.Ripple,{color:"primary",disabled:void 0===this.state.assetType,type:"submit",className:"mr-1 mb-1",onClick:function(t){return e.addfield()}},"<- Add"))),i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(k.a.Ripple,{outline:!0,color:"warning",type:"reset",className:"mb-1",disabled:void 0===this.state.assetType,onClick:function(t){e.clearCustomField()}},"Reset"))))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.dataList.data.length!==t.nomineeList.length){var a=t.nomineeOption;return e.dataList.data.forEach((function(e){var t={value:e._id,label:e.name+" - "+e.relation,color:"#00B8D9",isFixed:!1};a.push(t)})),{nomineeList:e.dataList.data,nomineeOption:a}}return null}}]),a}(i.a.Component),_=(Object(j.b)((function(e){return{dataList:e.dataList}}),{getData:w.d})(U),a(673)),P=a(526),Z=a.n(P),J=(a(547),a(16));T.a.defaults.baseURL="http://localhost:5000";function B(e){var t=Object(o.useState)([]),a=Object(c.a)(t,2),n=a[0],l=a[1],s=Object(_.a)({noClick:!0,noKeyboard:!0,onDrop:function(t){e.setfilesOndrop(t),l(t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),r=s.getRootProps,m=s.getInputProps,u=s.open,p=n.map((function(e){return i.a.createElement("div",{className:"dz-thumb",key:e.name},i.a.createElement("div",{className:"dz-thumb-inner"},i.a.createElement("img",{src:e.preview,className:"dz-img",onError:function(e){e.target.src=Z.a},alt:e.name}),i.a.createElement("br",null),i.a.createElement("span",null," ",e.name)))}));return Object(o.useEffect)((function(){return function(){n.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[n]),Object(o.useEffect)((function(){e.resetDropzone&&l([])}),[e.resetDropzone]),i.a.createElement("section",null,i.a.createElement("div",r({className:"dropzone"}),i.a.createElement("input",m()),i.a.createElement("p",{className:"mx-1",onClick:u},"Drag 'n' drop some files here, or Click to Select files")),p.length?i.a.createElement("aside",{className:"thumb-container-documents"},p):i.a.createElement("div",r({className:"dropzone-dummy"}),i.a.createElement("p",{className:"mx-1"},"Preview Selected files")))}var G=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:JSON.parse(localStorage.getItem("logInUserData")),active:"2",files:[],reset:!1,activeTab:"1",collapseID:"",status:"Closed",collapseItems:[{id:1,title:"10th Marksheet",content:i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"6",sm:"12"},">Hey 1"),i.a.createElement(u.a,{md:"6",sm:"12"},">Hey 2")))},{id:2,title:"Girlfiends pics",content:"Jelly-o brownie marshmallow souffl\xe9 I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."},{id:3,title:"Driving License",content:"Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."},{id:4,title:"Mutual Fund",content:"Brownie sweet carrot cake drag\xe9e caramels fruitcake. Gummi bears tootsie roll croissant gingerbread drag\xe9e tootsie roll."}]},e.componentWillMount=function(){T.a.get("/backendapi/documents/"+e.state.user._id).then((function(t){console.log("eeeeeeeeeeeeeeeeeeeee",t.data);for(var a=t.data,n=0;n<a.length>0;n+=1)a[n].desc=Object(x.a)(a[n].desc),a[n].attname=Object(x.a)(a[n].attname),a[n].alias=Object(x.a)(a[n].alias),a[n].blobName=Object(x.a)(a[n].blobName),a[n].filename=Object(x.a)(a[n].filename);e.setState({collapseItems:a})})).catch()},e.showDocument=function(t){var a=e.state.collapseItems;a[t].show=!0,e.setState({collapseItems:a})},e.toggle=function(t){e.state.active!==t&&e.setState({active:t})},e.toggleCollapse=function(t){e.setState((function(e){return{collapseID:e.collapseID!==t?t:""}}))},e.setfilesOndrop=function(t){e.setState({reset:!1}),e.setState({files:t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))})},e.resetDropzone=function(){e.setState({reset:!0})},e.onError=function(e){console.log(e,"error in file-viewer")},e.submitDropzone=function(){console.log("files",e.state.files);var t=new FormData;t.append("file",e.state.files[0]),T.a.post("/upload/api",t).then((function(t){console.log("eeeeeeeeeeeeeeeeeeeee",t.data);var a=t.data;console.log("state1111111",e.state),a.user=e.state.user._id,a.type="Vault",a.expiry=e.state.expiry,a.desc=Object(x.b)(e.state.desc),a.attname=Object(x.b)(e.state.attname),a.alias=Object(x.b)(e.state.alias),a.blobName=Object(x.b)(a.blobName),a.filename=Object(x.b)(a.filename),T.a.post("/backendapi/documents/add",a).then((function(e){console.log("eeeeeeeeeeeeeeeeeeeee",e.data)})).catch()})).catch()},e.onEntered=function(t){t===e.state.collapseID&&e.setState({status:"Opened"})},e.onEntering=function(t){t===e.state.collapseID&&e.setState({status:"Opening..."})},e.onExited=function(t){t===e.state.collapseID&&e.setState({status:"Closed"})},e.onExiting=function(t){t===e.state.collapseID&&e.setState({status:"Closing..."})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.collapseItems.map((function(t,a){return i.a.createElement("div",{className:"collapse-margin",key:t.id},i.a.createElement(p.a,{onClick:function(){return e.toggleCollapse(t.id)},className:O()({"collapse-collapsed":"Closed"===e.state.status&&e.state.collapseID===t.id,"collapse-shown":"Opened"===e.state.status&&e.state.collapseID===t.id,closing:"Closing..."===e.state.status&&e.state.collapseID===t.id,opening:"Opening..."===e.state.status&&e.state.collapseID===t.id})},i.a.createElement(d.a,null,i.a.createElement(f.a,{className:"lead collapse-title collapsed"},t.title),i.a.createElement(D.a,{size:15,className:"collapse-icon"})),i.a.createElement(b.a,{isOpen:t.id===e.state.collapseID,onEntering:function(){return e.onEntering(t.id)},onEntered:function(){return e.onEntered(t.id)},onExiting:function(){return e.onExiting(t.id)},onExited:function(){return e.onExited(t.id)}},i.a.createElement(E.a,null,t.content))))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"warning"},"My Documents"),i.a.createElement("div",{key:Math.random()}),i.a.createElement(m.a,null,i.a.createElement(u.a,{sm:"12"},i.a.createElement(g.a,{activeTab:this.state.active},i.a.createElement(h.a,{tabId:"1"}),i.a.createElement(h.a,{tabId:"2"},i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,"Upload any file, scans, documents")),i.a.createElement(E.a,null,i.a.createElement(m.a,null,i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(y.a,{type:"text",name:"name",id:"nameMulti",placeholder:"Attachment Name / Alias",onChange:function(t){e.setState({alias:t.target.value})}}),i.a.createElement(N.a,{className:"dark"===J.a.theme?"dark-label":"light-label",for:"nameMulti"},"Attachment Name / Alias")),i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(y.a,{className:"input-label",type:"text",name:"name",id:"nameMulti",placeholder:"File Name"}),i.a.createElement(N.a,{className:"dark"===J.a.theme?"dark-label":"light-label",for:"nameMulti"},"File Name")),i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(y.a,{className:"input-label",type:"Date",name:"name",id:"nameMulti",placeholder:"Expiry Date"}),i.a.createElement(N.a,{className:"dark"===J.a.theme?"dark-label":"light-label",for:"nameMulti"},"Expiry Date")),i.a.createElement(v.a,{className:"form-label-group"},i.a.createElement(y.a,{className:"input-label",type:"textarea",name:"name",id:"nameMulti",placeholder:"Description"}),i.a.createElement(N.a,{className:"dark"===J.a.theme?"dark-label":"light-label",for:"nameMulti"},"Description")),i.a.createElement(v.a,{className:"form-label-group last-row-form",style:{textAlign:"right"}},i.a.createElement(k.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(t){e.resetDropzone()}},"Reset")," ",i.a.createElement(k.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(t){e.submitDropzone(t)}},"  Add  "))),i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement(B,{setfilesOndrop:this.setfilesOndrop,resetDropzone:this.state.reset}))),i.a.createElement(m.a,null,i.a.createElement(u.a,{sm:"12"},i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,"My Documents")),i.a.createElement(E.a,null,i.a.createElement(g.a,{activeTab:this.state.activeTab},i.a.createElement(h.a,{tabId:"1"},i.a.createElement("div",{className:"vx-collapse"},t)),i.a.createElement(h.a,{className:"component-code",tabId:"2"},"hey"))))))))),i.a.createElement(h.a,{tabId:"3"},"Coming soon .......!")))))}}]),a}(i.a.Component);t.default=G},513:function(e,t,a){"use strict";var n=a(11),l=a(12),s=a(14),r=a(13),c=a(0),o=a.n(c),i=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",{style:{color:this.props.labelColor}},this.props.label))}}]),a}(o.a.Component);t.a=i},517:function(e,t,a){},524:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return r}));var n=a(527),l=a.n(n),s=function(e,t,a){var n=t?"l@st@rz!":localStorage.getItem("secretkey");return e&&e.length>0?l.a.encrypt(a||n,e):e},r=function(e,t){var a=t?"l@st@rz!":localStorage.getItem("secretkey");return e&&e.length>0?l.a.decrypt(a,e):e}},526:function(e,t,a){e.exports=a.p+"static/media/banner-25.a47593fc.jpg"},547:function(e,t,a){},555:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return m})),a.d(t,"g",(function(){return u})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return f})),a.d(t,"a",(function(){return b}));var n=a(70),l=a.n(n),s=a(114),r=a(51),c=a.n(r);c.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var o=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t.next=3,c.a.get("/backendapi/nominee/list/"+n._id,e).then((function(t){console.log("aaquib  123",t.data),console.log("aaquib  123",e),a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},i=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{},t.next=3,c.a.get("/backendapi/spend/list/"+n._id,e).then((function(t){console.log("aaquib  123",t.data),console.log("aaquib  123",e),a({type:"GET_DATA",data:t.data,totalPages:t.length,params:e})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/backendapi/nominee/list/"+e._id).then((function(e){a({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(){var e=localStorage.getItem("logInUserData")?JSON.parse(localStorage.getItem("logInUserData")):{};return function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/backendapi/spend/list/"+e._id).then((function(e){a({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(t){return t({type:"FILTER_DATA",value:e})}},d=function(e){return function(t){console.log("DELETE DATA :",e),c.a.post("/backendapi/nominee/delete",e).then((function(a){t({type:"DELETE_DATA",obj:e})}))}},f=function(e){return console.log("Aaquib 123",e),function(t,a){c.a.post("/api/datalist/update-data",{obj:e}).then((function(a){t({type:"UPDATE_DATA",obj:e})}))}},b=function(e){return function(t,a){var n=a().dataList.params;c.a.post("/api/datalist/add-data",{obj:e}).then((function(a){t({type:"ADD_DATA",obj:e}),t(o(n))}))}}},556:function(e,t,a){"use strict";var n=a(11),l=a(12),s=a(14),r=a(13),c=a(0),o=a.n(c),i=a(620),m=a(621),u=a(674),p=a(507),d=a(452),f=a(453),b=a(451),E=a(435),g=a(27),h=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"content-header row"},o.a.createElement("div",{className:"content-header-left col-md-9 col-12 mb-2"},o.a.createElement("div",{className:"row breadcrumbs-top"},o.a.createElement("div",{className:"col-12"},this.props.breadCrumbTitle?o.a.createElement("h2",{className:"content-header-title float-left mb-0"},this.props.breadCrumbTitle):"",o.a.createElement("div",{className:"breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12"},o.a.createElement(i.a,{tag:"ol"},o.a.createElement(m.a,{tag:"li"},o.a.createElement(g.c,{to:"/"},o.a.createElement(b.a,{className:"align-top",size:15}))),o.a.createElement(m.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent),this.props.breadCrumbParent2?o.a.createElement(m.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent2):"",this.props.breadCrumbParent3?o.a.createElement(m.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent3):"",o.a.createElement(m.a,{tag:"li",active:!0},this.props.breadCrumbActive)))))),o.a.createElement("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"},o.a.createElement("div",{className:"form-group breadcrum-right dropdown"},o.a.createElement(u.a,null,o.a.createElement(p.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle"},o.a.createElement(E.a,{size:14,style:{left:0}})),o.a.createElement(d.a,{tag:"ul",right:!0},o.a.createElement(f.a,{tag:"li"},o.a.createElement(g.c,{className:"text-dark w-100",to:"/#/portfolio"},"View Porfolio")),o.a.createElement(f.a,{tag:"li"},o.a.createElement(g.c,{className:"text-dark w-100",to:"/#/assets/add"},"Add Assets")),o.a.createElement(f.a,{tag:"li"},o.a.createElement(g.c,{className:"text-dark w-100",to:"/#/liability/add"},"Add Libilties")),o.a.createElement(f.a,{tag:"li"},o.a.createElement(g.c,{className:"text-dark w-100",to:"/#/nominee/list"},"Manage Nominees")))))))}}]),a}(o.a.Component);t.a=h},578:function(e,t,a){"use strict";var n=a(11),l=a(12),s=a(14),r=a(13),c=a(0),o=a.n(c),i=a(519),m=a(545),u=a(542),p=a(520),d=a(622),f=a.n(d),b=a(496);o.a.Component}}]);
//# sourceMappingURL=31.11f923a6.chunk.js.map