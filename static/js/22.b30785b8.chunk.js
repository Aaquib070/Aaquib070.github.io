(this.webpackJsonplastArzi=this.webpackJsonplastArzi||[]).push([[22],{457:function(e,a,t){},461:function(e,a,t){e.exports=t.p+"static/media/banner-25.a47593fc.jpg"},590:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t(0),r=t.n(l),c=t(442),i=t(405),o=t(463),m=t(476),s=t(477),u=t(441),d=t(147),p=t(148),b=t(246),f=t(79),E=t(80),h=t(16),v=t(437),g=t(581),O=t(461),j=t.n(O),N=(t(457),t(17)),y=t(23),k=t.n(y),D=sessionStorage.getItem("authtoken"),x=function(e){var a=Object(l.useState)([]),t=Object(n.a)(a,2),c=t[0],i=t[1],o=Object(g.a)({noClick:!0,noKeyboard:!0,onDrop:function(a){e.setfilesOndrop(a),i(a.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),m=o.getRootProps,s=o.getInputProps,u=o.open,d=c.map((function(e){return r.a.createElement("div",{className:"dz-thumb",key:e.name},r.a.createElement("div",{className:"dz-thumb-inner"},r.a.createElement("img",{src:e.preview,className:"dz-img",onError:function(e){return e.target.src=j.a},alt:e.name}),r.a.createElement("br",null),r.a.createElement("span",null," ",e.name)))}));return Object(l.useEffect)((function(){return function(){c.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[c]),r.a.createElement("section",null,r.a.createElement("div",m({className:"dropzone"}),r.a.createElement("input",s()),r.a.createElement("p",{className:"mx-1",onClick:u},"Drag `n` drop some files here, or Click to Select files")),d.length?r.a.createElement("aside",{className:"thumb-container-documents"},d):r.a.createElement("div",m({className:"dropzone-dummy"}),r.a.createElement("p",{className:"mx-1"},"Preview Selected files")))},w=JSON.parse(sessionStorage.getItem("logInUserData"));a.default=function(){var e=Object(l.useState)([]),a=Object(n.a)(e,2),t=a[0],g=a[1],O=Object(l.useState)(!1),j=Object(n.a)(O,2),y=j[0],S=j[1],A=Object(l.useState)(),R=Object(n.a)(A,2),z=R[0],M=R[1],U=Object(l.useState)(),C=Object(n.a)(U,2),F=C[0],L=C[1],I=Object(l.useState)(),P=Object(n.a)(I,2),J=P[0],_=P[1],B=Object(l.useState)([]),K=Object(n.a)(B,2),T=K[0],V=K[1],q=function(){k.a.get("/backendapi/documents/".concat(w._id),{headers:{Authorization:"Bearer ".concat(D)}}).then((function(e){for(var a=e.data,t=0;t<a.length;t+=1)a[t].desc=Object(h.a)(a[t].desc),a[t].id=t+1,a[t].expiry=Object(h.a)(a[t].expiry),a[t].alias=Object(h.a)(a[t].alias),a[t].attachment=Object(h.a)(a[t].attachment),a[t].filename=Object(h.a)(a[t].filename);V(a)})).catch((function(e){console.log("err get docs",e)}))};Object(l.useEffect)((function(){q()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"warning spacing nodisplay"},"My Documents"),r.a.createElement("div",{key:Math.random()}),r.a.createElement(c.a,null,r.a.createElement(i.a,{sm:"12"},r.a.createElement(o.a,null,r.a.createElement(m.a,null,r.a.createElement(s.a,null,"Upload any file, scans, documents")),r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,{md:"6",sm:"12"},r.a.createElement(d.a,{className:"form-label-group"},r.a.createElement(p.a,{type:"text",name:"name",id:"nameMultiname",placeholder:"Attachment Name / Alias",onChange:function(e){return M(e.target.value)}}),r.a.createElement(b.a,{className:"dark"===N.a.theme?"dark-label":"light-label",for:"nameMultiname"},"Attachment Name / Alias")),r.a.createElement(d.a,{className:"form-label-group"},r.a.createElement(p.a,{className:"input-label",type:"text",name:"name",id:"nameMultiFile",placeholder:"File Name"}),r.a.createElement(b.a,{className:"dark"===N.a.theme?"dark-label":"light-label",for:"nameMultiFile"},"File Name")),r.a.createElement(d.a,{className:"form-label-group"},r.a.createElement(p.a,{className:"input-label",type:"Date",name:"name",id:"nameMultiExpiry",placeholder:"Expiry Date",onChange:function(e){return L(e)}}),r.a.createElement(b.a,{className:"dark"===N.a.theme?"dark-label":"light-label",for:"nameMultiExpiry"},"Expiry Date")),r.a.createElement(d.a,{className:"form-label-group"},r.a.createElement(p.a,{className:"input-label",type:"textarea",name:"name",id:"nameMultiDescription",placeholder:"Description",onChange:function(e){var a;return _(null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value)}}),r.a.createElement(b.a,{className:"dark"===N.a.theme?"dark-label":"light-label",for:"nameMultiDescription"},"Description")),r.a.createElement(d.a,{className:"form-label-group last-row-form",style:{textAlign:"right"}},r.a.createElement(f.a.Ripple,{outline:!0,color:"secondary",type:"reset",className:"button-label",onClick:function(e){e.preventDefault(),S(!0)}},"Reset")," ",r.a.createElement(f.a.Ripple,{color:"warning",type:"reset",className:"button-label",onClick:function(e){var a;(e.preventDefault(),t.length)?(a=t[0],new Promise((function(e,t){var n=new FileReader;n.readAsDataURL(a),n.onload=function(){return e(n.result)},n.onerror=function(e){return t(e)}}))).then((function(e){var a={};a.user=w._id,a.type="Vault",a.alias=Object(h.b)(z),a.filename=Object(h.b)(t[0].name),a.attachment=Object(h.b)(e),a.desc=Object(h.b)(J),a.expiry=Object(h.b)(F),k.a.post("/backendapi/documents/add",a,{headers:{Authorization:"Bearer ".concat(D)}}).then((function(e){q()})).catch((function(e){console.log("err docs",e)}))})).catch():E.b.error("No File Selected")},disable:function(){return!(null===t||void 0===t?void 0:t.length)||!F}?"true":"false"},"Add"))),r.a.createElement(i.a,{md:"6",sm:"12"},r.a.createElement(x,{setfilesOndrop:function(e){S(!1),g(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))},resetDropzone:y}))),r.a.createElement(c.a,null,r.a.createElement(i.a,{sm:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Download Documents"),r.a.createElement(u.a,null,r.a.createElement("div",{className:"vx-collapse"},T.map((function(e){var a,t;return r.a.createElement(m.a,{key:e.id},r.a.createElement(i.a,null,null===e||void 0===e?void 0:e.alias),r.a.createElement(i.a,null,null===e||void 0===e?void 0:e.filename),r.a.createElement(i.a,null,null===e||void 0===e||null===(a=e.createdAt)||void 0===a||null===(t=a.split("T"))||void 0===t?void 0:t[0]),r.a.createElement(i.a,null,null===e||void 0===e?void 0:e.type),r.a.createElement(s.a,null,r.a.createElement("a",{href:e.attachment,download:null===e||void 0===e?void 0:e.filename,tabIndex:"_balnk"},r.a.createElement(v.a,{size:15,className:"collapse-icon"}))))}))))))))))))}}}]);