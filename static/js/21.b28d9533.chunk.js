(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[21],{505:function(e,a,t){e.exports=t.p+"static/media/banner-25.a47593fc.jpg"},506:function(e,a,t){},633:function(e,a,t){"use strict";t.r(a);var l=t(8),n=t(0),c=t.n(n),r=t(448),m=t(449),o=t(514),i=t(521),s=t(518),u=t(549),d=t(446),p=t(525),b=t(526),E=t(450),f=t(447),g=t(451),h=t(254),N=t(41),y=t(497),k=t(7),O=t.n(k),v=t(626),j=t(505),x=t.n(j),D=(t(506),t(17)),M=t(24),w=t.n(M);function C(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),r=t[0],m=t[1],o=Object(v.a)({noClick:!0,noKeyboard:!0,onDrop:function(a){e.setfilesOndrop(a),m(a.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),i=o.getRootProps,s=o.getInputProps,u=o.open,d=r.map((function(e){return c.a.createElement("div",{className:"dz-thumb",key:e.name},c.a.createElement("div",{className:"dz-thumb-inner"},c.a.createElement("img",{src:e.preview,className:"dz-img",onError:function(e){return e.target.src=x.a},alt:e.name}),c.a.createElement("br",null),c.a.createElement("span",null," ",e.name)))}));return Object(n.useEffect)((function(){return function(){r.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[r]),Object(n.useEffect)((function(){e.resetDropzone&&m([])}),[e.resetDropzone]),c.a.createElement("section",null,c.a.createElement("div",i({className:"dropzone"}),c.a.createElement("input",s()),c.a.createElement("p",{className:"mx-1",onClick:u},"Drag 'n' drop some files here, or Click to Select files")),d.length?c.a.createElement("aside",{className:"thumb-container-documents"},d):c.a.createElement("div",i({className:"dropzone-dummy"}),c.a.createElement("p",{className:"mx-1"},"Preview Selected files")))}w.a.defaults.baseURL="https://lastarzi2.herokuapp.com";var A=JSON.parse(localStorage.getItem("logInUserData"));a.default=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],k=a[1],v=Object(n.useState)(!1),j=Object(l.a)(v,2),x=j[0],M=j[1],I=Object(n.useState)(),z=Object(l.a)(I,2),R=z[0],S=z[1],F=Object(n.useState)(""),U=Object(l.a)(F,2),L=U[0],B=U[1],J=Object(n.useState)("Closed"),P=Object(l.a)(J,2),G=P[0],T=P[1],H=Object(n.useState)([{id:1,title:"10th Marksheet",content:c.a.createElement("div",null,c.a.createElement(r.a,null,c.a.createElement(m.a,{md:"6",sm:"12"},">Hey 1"),c.a.createElement(m.a,{md:"6",sm:"12"},">Hey 2")))},{id:2,title:"Girlfiends pics",content:"Jelly-o brownie marshmallow souffl\xe9 I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."},{id:3,title:"Driving License",content:"Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."},{id:4,title:"Mutual Fund",content:"Brownie sweet carrot cake drag\xe9e caramels fruitcake. Gummi bears tootsie roll croissant gingerbread drag\xe9e tootsie roll."}]),_=Object(l.a)(H,2),K=_[0],V=_[1];Object(n.useEffect)((function(){w.a.get("/backendapi/documents/"+A._id,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){for(var a=e.data,t=0;t<a.length;t+=1)a[t].desc=Object(N.a)(a[t].desc),a[t].attname=Object(N.a)(a[t].attname),a[t].alias=Object(N.a)(a[t].alias),a[t].blobName=Object(N.a)(a[t].blobName),a[t].filename=Object(N.a)(a[t].filename);V(a)})).catch()}),[]);var q=function(e){M(!1),k(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))},Q=function(){M(!0)},W=function(){console.log("files",t);var e=new FormData;e.append("file",t[0]),w.a.post("/upload/api",e,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){var a=e.data;a.user=A._id,a.type="Vault",a.expiry=Object(N.b)(a.expiry),a.desc=Object(N.b)(a.desc),a.attname=Object(N.b)(a.attname),a.alias=Object(N.b)(R),a.blobName=Object(N.b)(a.blobName),a.filename=Object(N.b)(a.filename),w.a.post("/backendapi/documents/add",a,{headers:{Authorization:"Bearer "+localStorage.getItem("authtoken")}}).then((function(e){console.log("eeeeeeeeeeeeeeeeeeeee",e.data)})).catch()})).catch()},X=K.map((function(e,a){return c.a.createElement("div",{className:"collapse-margin",key:e.id},c.a.createElement(o.a,{onClick:function(){return a=e.id,void B(L!==a?L:"");var a},className:O()({"collapse-collapsed":"Closed"===G&&L===e.id,"collapse-shown":"Opened"===G&&L===e.id,closing:"Closing..."===G&&L===e.id,opening:"Opening..."===G&&L===e.id})},c.a.createElement(i.a,null,c.a.createElement(s.a,{className:"lead collapse-title collapsed"},e.title),c.a.createElement(y.a,{size:15,className:"collapse-icon"})),c.a.createElement(u.a,{isOpen:e.id===L,onEntering:function(){e.id===L&&T("Opening...")},onEntered:function(){e.id===L&&T("Opened")},onExiting:function(){e.id===L&&T("Closing...")},onExited:function(){e.id===L&&T("Closed")}},c.a.createElement(d.a,null,e.content))))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"warning spacing nodisplay"},"My Documents"),c.a.createElement("div",{key:Math.random()}),c.a.createElement(r.a,null,c.a.createElement(m.a,{sm:"12"},c.a.createElement(p.a,{activeTab:"2"},c.a.createElement(b.a,{tabId:"1"},c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Upload any file, scans, documents")),c.a.createElement(d.a,null,c.a.createElement(r.a,null,c.a.createElement(m.a,{md:"6",sm:"12"},c.a.createElement(E.a,{className:"form-label-group"},c.a.createElement(f.a,{type:"text",name:"name",id:"nameMultiname",placeholder:"Attachment Name / Alias",onChange:function(e){S(e.target.value)}}),c.a.createElement(g.a,{className:"dark"===D.a.theme?"dark-label":"light-label",for:"nameMultiname"},"Attachment Name / Alias")),c.a.createElement(E.a,{className:"form-label-group"},c.a.createElement(f.a,{className:"input-label",type:"text",name:"name",id:"nameMultiFile",placeholder:"File Name"}),c.a.createElement(g.a,{className:"dark"===D.a.theme?"dark-label":"light-label",for:"nameMultiFile"},"File Name")),c.a.createElement(E.a,{className:"form-label-group"},c.a.createElement(f.a,{className:"input-label",type:"Date",name:"name",id:"nameMultiExpiry",placeholder:"Expiry Date"}),c.a.createElement(g.a,{className:"dark"===D.a.theme?"dark-label":"light-label",for:"nameMultiExpiry"},"Expiry Date")),c.a.createElement(E.a,{className:"form-label-group"},c.a.createElement(f.a,{className:"input-label",type:"textarea",name:"name",id:"nameMultiDescription",placeholder:"Description"}),c.a.createElement(g.a,{className:"dark"===D.a.theme?"dark-label":"light-label",for:"nameMultiDescription"},"Description")),c.a.createElement(E.a,{className:"form-label-group last-row-form",style:{textAlign:"right"}},c.a.createElement(h.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){Q()}},"Reset")," ",c.a.createElement(h.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(e){W()}},"  Add  "))),c.a.createElement(m.a,{md:"6",sm:"12"},c.a.createElement(C,{setfilesOndrop:q,resetDropzone:x}))),c.a.createElement(r.a,null,c.a.createElement(m.a,{sm:"12"},c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement(s.a,null,"My Documents")),c.a.createElement(d.a,null,c.a.createElement(p.a,{activeTab:"1"},c.a.createElement(b.a,{tabId:"1"},c.a.createElement("div",{className:"vx-collapse"},X)),c.a.createElement(b.a,{className:"component-code",tabId:"2"},"hey"))))))))),c.a.createElement(b.a,{tabId:"2"},c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement(s.a,null,"Upload any file, scans, documents")),c.a.createElement(d.a,null,c.a.createElement(r.a,null,c.a.createElement(m.a,{md:"6",sm:"12"},c.a.createElement(E.a,{className:"form-label-group"},c.a.createElement(f.a,{type:"text",name:"name",id:"nameMultiname",placeholder:"Attachment Name / Alias",onChange:function(e){return S(e.target.value)}}),c.a.createElement(g.a,{className:"dark"===D.a.theme?"dark-label":"light-label",for:"nameMultiname"},"Attachment Name / Alias")),c.a.createElement(E.a,{className:"form-label-group"},c.a.createElement(f.a,{className:"input-label",type:"text",name:"name",id:"nameMultiFile",placeholder:"File Name"}),c.a.createElement(g.a,{className:"dark"===D.a.theme?"dark-label":"light-label",for:"nameMultiFile"},"File Name")),c.a.createElement(E.a,{className:"form-label-group"},c.a.createElement(f.a,{className:"input-label",type:"Date",name:"name",id:"nameMultiExpiry",placeholder:"Expiry Date"}),c.a.createElement(g.a,{className:"dark"===D.a.theme?"dark-label":"light-label",for:"nameMultiExpiry"},"Expiry Date")),c.a.createElement(E.a,{className:"form-label-group"},c.a.createElement(f.a,{className:"input-label",type:"textarea",name:"name",id:"nameMultiDescription",placeholder:"Description"}),c.a.createElement(g.a,{className:"dark"===D.a.theme?"dark-label":"light-label",for:"nameMultiDescription"},"Description")),c.a.createElement(E.a,{className:"form-label-group last-row-form",style:{textAlign:"right"}},c.a.createElement(h.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){Q()}},"Reset")," ",c.a.createElement(h.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(e){W()}},"  Add  "))),c.a.createElement(m.a,{md:"6",sm:"12"},c.a.createElement(C,{setfilesOndrop:q,resetDropzone:x}))),c.a.createElement(r.a,null,c.a.createElement(m.a,{sm:"12"},c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement(s.a,null,"My Documents")),c.a.createElement(d.a,null,c.a.createElement(p.a,{activeTab:"1"},c.a.createElement(b.a,{tabId:"1"},c.a.createElement("div",{className:"vx-collapse"},X)),c.a.createElement(b.a,{className:"component-code",tabId:"2"},"hey"))))))))),c.a.createElement(b.a,{tabId:"3"},"Coming soon .......!")))))}}}]);