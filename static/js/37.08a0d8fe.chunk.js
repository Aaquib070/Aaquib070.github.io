(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[37],{511:function(e,t,a){},522:function(e,t,a){e.exports=a.p+"static/media/banner-31.d54fc4be.jpg"},526:function(e,t,a){e.exports=a.p+"static/media/banner-25.a47593fc.jpg"},537:function(e,t,a){e.exports=a.p+"static/media/banner-22.702fed4d.jpg"},538:function(e,t,a){e.exports=a.p+"static/media/banner-23.b74d240c.jpg"},539:function(e,t,a){e.exports=a.p+"static/media/banner-24.d3fb51a8.jpg"},796:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(11),s=a(12),o=a(14),i=a(13),c=a(0),d=a.n(c),r=a(559),u=a(560),p=(a(518),a(511),a(522)),m=a.n(p),g=a(537),h=a.n(g),b=a(538),k=a.n(b),v=a(539),f=a.n(v),T=a(526),E=a.n(T),S=a(509),w=a.n(S),y=a(514),x=a(627),C=a.n(x),U=a(650),j=(a(656),a(554)),A=a(571),N=a(249),I={effect:"cube",grabCursor:!0,autoplay:{delay:2e3,disableOnInteraction:!0},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}},O=[{value:"Text",label:"Text",color:"#00B8D9",isFixed:!0},{value:"Attachment",label:"Attachment",color:"#00B8D9",isFixed:!0},{value:"Voice",label:"Voice",color:"#0052CC",isFixed:!0},{value:"Video",label:"Video",color:"#0052CC",isFixed:!0}],R=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={addTask:"",taskStatus:"",isCompleted:"",taskImportant:"",importantTask:"",taskStarred:"",starTask:"",newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1},updateLabel:"",selectAssetRef:"",ptype:"",audioDetails:{url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}},taskToUpdate:""},e.completeTask=function(t){e.setState({isCompleted:t})},e.handleAudioStop=function(t){console.log(t),e.setState({audioDetails:t})},e.handleAudioUpload=function(e){console.log(e)},e.handleRest=function(){e.setState({audioDetails:{url:null,blob:null,chunks:null,duration:{h:0,m:0,s:0}}})},e}return Object(s.a)(a,[{key:"render",value:function(){var e,t,a,l,s=this,o=this.state,i=o.newTask,c=o.taskTitle,p=o.taskDesc,g=o.taskToUpdate;return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",{className:"warning spacing"},"Sender"),d.a.createElement(r.a,null,d.a.createElement(u.a,{lg:"8",md:"6",sm:"12"},d.a.createElement(r.a,{className:"match-height"},d.a.createElement(u.a,{md:"12"},d.a.createElement(j.a,{className:"form-label-group"},d.a.createElement(y.a,{className:"React",classNamePrefix:"select",ref:this.state.selectAssetRef,name:"color",options:O,isClearable:!0,placeholder:"Select Message Type...",onChange:function(e){s.setState({ptype:e?e.value:""})}})),d.a.createElement(j.a,null,d.a.createElement(A.a,{type:"text",placeholder:"Title",value:null!==this.state.taskToUpdate?c:i.title,onChange:function(e){null!==s.state.taskToUpdate?s.setState({taskTitle:e.target.value}):s.setState({newTask:Object(n.a)(Object(n.a)({},s.state.newTask),{},{title:e.target.value})})}})),"Video"===this.state.ptype&&d.a.createElement("div",{className:"video-recorder"},d.a.createElement(C.a,{onRecordingComplete:function(e){console.log("videoBlob",e)}})),"Voice"===this.state.ptype&&d.a.createElement("div",{className:"voice-recorder"},d.a.createElement(U.a,{record:!0,title:"New recording",audioURL:this.state.audioDetails.url,showUIAudio:!0,handleAudioStop:function(e){return s.handleAudioStop(e)},handleAudioUpload:function(e){return s.handleAudioUpload(e)},handleReset:function(){return s.handleRest()}})),d.a.createElement(j.a,null,d.a.createElement(A.a,{type:"textarea",placeholder:"Description",rows:"5",value:null!==this.state.taskToUpdate?p:i.desc,onChange:function(e){null!==s.state.taskToUpdate?s.setState({taskDesc:e.target.value}):s.setState({newTask:Object(n.a)(Object(n.a)({},s.state.newTask),{},{desc:e.target.value})})}})),d.a.createElement("div",{className:"chip-wrapper my-1 d-flex flex-wrap"},null!==this.state.taskToUpdate&&(null===(e=this.state.taskToUpdate)||void 0===e?void 0:e.tags)&&(null===(t=this.state.taskToUpdate)||void 0===t?void 0:t.tags.length)>0?this.renderTags(null===(a=this.state.taskToUpdate)||void 0===a?void 0:a.tags):null),d.a.createElement("div",{className:"d-flex justify-content-end",style:{textAlign:"right"}},d.a.createElement(N.a.Ripple,{outline:!0,className:"mr-1 mb-1 button-label",color:"secondary",onClick:function(){s.state.addTask("close"),s.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})}},"Cancel")," ",d.a.createElement(N.a.Ripple,{className:"mb-1 button-label",color:"warning",onClick:function(){console.log("taskToUpdate",g);var e=g.isCompleted,t=g.isImportant,a=g.isStarred,n=g.tags;null!==s.state.taskToUpdate?s.state.updateTask(null===g||void 0===g?void 0:g._id,c,p,g,e,t,a,n):s.state.addNewTask(s.state.newTask),s.state.addTask("close"),s.setState({newTask:{title:"",desc:"",tags:[],isCompleted:!1,isImportant:!1,isStarred:!1}})},disabled:!((null===c||void 0===c?void 0:c.length)>0||(null===i||void 0===i||null===(l=i.title)||void 0===l?void 0:l.length)>0)},g&&(null===g||void 0===g?void 0:g.id)&&null!==this.state.taskToUpdate?"Update":"Add"))))),d.a.createElement(u.a,{lg:"4",md:"6",sm:"12"},d.a.createElement("div",{className:"swipermobile"},d.a.createElement(w.a,I,d.a.createElement("div",{style:{backgroundImage:"url(".concat(m.a,")"),backgroundSize:"contain"}}),d.a.createElement("div",{style:{backgroundImage:"url(".concat(h.a,")"),backgroundSize:"contain"}}),d.a.createElement("div",{style:{backgroundImage:"url(".concat(k.a,")"),backgroundSize:"contain"}}),d.a.createElement("div",{style:{backgroundImage:"url(".concat(f.a,")"),backgroundSize:"contain"}}),d.a.createElement("div",{style:{backgroundImage:"url(".concat(E.a,")"),backgroundSize:"contain"}}))))))}}]),a}(d.a.Component);t.default=R}}]);
//# sourceMappingURL=37.08a0d8fe.chunk.js.map