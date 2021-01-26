(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[94],{2078:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),c=t(14),l=t(13),s=t(0),o=t.n(s),i=t(1269),m=t(1270),u=t(806),p=t(1271),g=t(1272),v=t(1273),b=t(811),d=t(795),E=t(796),f=t(1274),h=t(813),T=t(814),N=t(3),j=t.n(N),y=t(304),A=t(276),x=t(323),C=t(794),O=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:j()("avatar ".concat(this.props.color?"bg-".concat(this.props.color):null,"  ").concat(this.props.className),{"avatar-sm":this.props.size&&"sm"===this.props.size,"avatar-lg":this.props.size&&"lg"===this.props.size,"avatar-xl":this.props.size&&"xl"===this.props.size})},!1===this.props.img||void 0===this.props.img?o.a.createElement("span",{className:j()("avatar-content",{"position-relative":this.props.badgeUp})},this.props.content?this.props.content:null,this.props.icon?o.a.createElement("div",{className:"avatar-icon"},this.props.icon):null,this.props.badgeUp?o.a.createElement(C.a,{color:this.props.badgeColor?this.props.badgeColor:"primary",className:"badge-sm badge-up",pill:!0},this.props.badgeText?this.props.badgeText:"0"):null):o.a.createElement("img",{src:this.props.img,alt:"avatarImg",height:this.props.imgHeight&&!this.props.size?this.props.imgHeight:32,width:this.props.imgWidth&&!this.props.size?this.props.imgWidth:32}),this.props.status?o.a.createElement("span",{className:"avatar-status-".concat(this.props.status)}):null)}}]),t}(o.a.Component),z=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarDefault extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" icon={<GitHub />} />\n      <Avatar className="mr-1" content="LD" />\n      <Avatar className="mr-1" content="Luisd" />\n      <Avatar img={avatarImg} />\n    )}}\n\nexport default AvatarDefault\n')),w=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarSizes extends React.Component {\n\n  render() {\n    return(\n        <Avatar className="mr-1" icon={<GitHub />} size="sm" />\n        <Avatar className="mr-1" content="LD" />\n        <Avatar className="mr-1" img={avatarImg} size="lg" />\n        <Avatar img={avatarImg} size="xl" />\n    )}\n}\nexport default AvatarSizes\n')),k=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nclass AvatarColors extends React.Component {\n\n  render() {\n    return(\n      <Avatar color="primary" className="mr-1" content="R" />\n      <Avatar color="success" className="mr-1" content="E" />\n      <Avatar color="danger" className="mr-1" content="A" />\n      <Avatar color="info" className="mr-1" content="C" />\n      <Avatar color="warning" className="mr-1" content="T" />\n      <Avatar color="dark" content="X" />\n    )}\n}\nexport default AvatarColors\n')),I=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { Badge } from "reactstrap"\nimport { Facebook, Instagram, Twitter } from "react-feather"\n\nclass AvatarBadge extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" color="primary" icon={<Facebook />} badgeText="7" badgeColor="danger" badgeUp />\n      <Avatar className="mr-1" icon={<Twitter />} color="info" badgeText="6" badgeColor="danger" badgeUp />\n      <Avatar icon={<Instagram />} color="success" badgeText="6" badgeColor="danger" badgeUp />\n    )}\n}\nexport default AvatarBadge\n')),S=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport {\n  Eye,\n  Code,\n  GitHub,\n  Calendar,\n  Inbox,\n  Camera,\n  Award\n} from "react-feather"\n\nclass AvatarIcons extends React.Component {\n\n  render() {\n    return(\n      <Avatar color="primary" className="mr-1" icon={<GitHub />} />\n      <Avatar color="success" className="mr-1" icon={<Calendar />} />\n      <Avatar color="danger" className="mr-1" icon={<Inbox />} />\n      <Avatar color="info" className="mr-1" icon={<Camera />} />\n      <Avatar color="warning" icon={<Award />} />\n    )}\n}\nexport default AvatarIcons\n')),U=o.a.createElement("pre",null,o.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport Avatar from "./Avatar"\nimport { GitHub } from "react-feather"\nimport avatarImg from "../../../assets/img/portrait/small/avatar-s-20.jpg"\n\nclass AvatarStatus extends React.Component {\n\n  render() {\n    return(\n      <Avatar className="mr-1" icon={<GitHub />} status="online" />\n      <Avatar className="mr-1" content="LD" status="offline" />\n      <Avatar className="mr-1" content="Luisd" status="away" />\n      <Avatar className="mr-1" img={avatarImg} status="busy" />\n    )\n  }\n}\nexport default AvatarStatus\n')),R=t(98),M=t.n(R),B=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Default"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(y.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(A.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use Vuexy's Avatar component and pass ",o.a.createElement("code",null,"icon")," or"," ",o.a.createElement("code",null,"content")," or ",o.a.createElement("code",null,"img")," to create an avatar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{className:"mr-1",icon:o.a.createElement(x.a,null)}),o.a.createElement(O,{className:"mr-1",content:"LD"}),o.a.createElement(O,{className:"mr-1",content:"Luisd"}),o.a.createElement(O,{img:M.a})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(o.a.Component),D=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Sizes"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(y.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(A.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,"size=[sm | lg | xl]")," prop to change avatar's size."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{className:"mr-1",icon:o.a.createElement(x.a,null),size:"sm"}),o.a.createElement(O,{className:"mr-1",content:"LD"}),o.a.createElement(O,{className:"mr-1",img:M.a,size:"lg"}),o.a.createElement(O,{img:M.a,size:"xl"})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(o.a.Component),F=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Colors"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(y.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(A.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use prop"," ",o.a.createElement("code",null,"color=[primary | success | danger | info | warning | dark]")," ","to change background color of your avatar."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{color:"primary",className:"mr-1",content:"V"}),o.a.createElement(O,{color:"success",className:"mr-1",content:"U"}),o.a.createElement(O,{color:"danger",className:"mr-1",content:"E"}),o.a.createElement(O,{color:"info",className:"mr-1",content:"X"}),o.a.createElement(O,{color:"warning",className:"mr-1",content:"Y"}),o.a.createElement(O,{color:"dark",content:"X"})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},k)))))}}]),t}(o.a.Component),H=t(305),L=t(441),P=t(335),$=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Badge"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(y.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(A.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"You can add notification label to avatar by passing"," ",o.a.createElement("code",null,"badgeUp"),"prop as true and ",o.a.createElement("code",null,"badgeText"),","," ",o.a.createElement("code",null,"badgeColor=[primary | success | danger | info | warning | dark]"),"."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{className:"mr-1",color:"primary",icon:o.a.createElement(H.a,null),badgeText:"7",badgeColor:"danger",badgeUp:!0}),o.a.createElement(O,{className:"mr-1",color:"info",icon:o.a.createElement(L.a,null),badgeText:"6",badgeColor:"danger",badgeUp:!0}),o.a.createElement(O,{icon:o.a.createElement(P.a,null),color:"success",badgeText:"6",badgeColor:"danger",badgeUp:!0})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},I)))))}}]),t}(o.a.Component),G=t(253),_=t(333),X=t(255),J=t(239),V=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Icons"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(y.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(A.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"Use prop ",o.a.createElement("code",null,"icon")," to create avatar with icon."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{color:"primary",className:"mr-1",icon:o.a.createElement(x.a,null)}),o.a.createElement(O,{color:"success",className:"mr-1",icon:o.a.createElement(G.a,null)}),o.a.createElement(O,{color:"danger",className:"mr-1",icon:o.a.createElement(_.a,null)}),o.a.createElement(O,{color:"info",className:"mr-1",icon:o.a.createElement(X.a,null)}),o.a.createElement(O,{color:"warning",icon:o.a.createElement(J.a,null)})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(o.a.Component),W=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,"Status"),o.a.createElement("div",{className:"views"},o.a.createElement(b.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},o.a.createElement(y.a,{size:15}))),o.a.createElement(d.a,null,o.a.createElement(E.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},o.a.createElement(A.a,{size:15})))))),o.a.createElement(f.a,null,o.a.createElement("p",null,"use prop",o.a.createElement("code",null,"status=[online | offline | away | busy]")," to create avatar with status."),o.a.createElement(h.a,{activeTab:this.state.activeTab},o.a.createElement(T.a,{tabId:"1"},o.a.createElement(O,{className:"mr-1",icon:o.a.createElement(x.a,null),status:"online"}),o.a.createElement(O,{className:"mr-1",content:"LD",status:"offline"}),o.a.createElement(O,{className:"mr-1",content:"Luisd",status:"away"}),o.a.createElement(O,{className:"mr-1",img:M.a,status:"busy"})),o.a.createElement(T.a,{className:"component-code",tabId:"2"},U)))))}}]),t}(o.a.Component),Y=t(809),Z=t.n(Y),q=(t(808),function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){Z.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{breadCrumbTitle:"Avatar",breadCrumbParent:"Extra Components",breadCrumbActive:"Avatar"}),o.a.createElement(i.a,{className:"match-height"},o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(B,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(D,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(F,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement($,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(V,null)),o.a.createElement(m.a,{xl:"6",lg:"12"},o.a.createElement(W,null))))}}]),t}(o.a.Component));a.default=q},805:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},808:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(n){for(var r=[],c=0;c<n.length;c++){var l=n[c],s=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?0<r.length&&r[r.length-1].tagName===t(l.content[0].content[1])&&r.pop():"/>"===l.content[l.content.length-1].content||r.push({tagName:t(l.content[0].content[1]),openedBraces:0}):0<r.length&&"punctuation"===l.type&&"{"===l.content?r[r.length-1].openedBraces++:0<r.length&&0<r[r.length-1].openedBraces&&"punctuation"===l.type&&"}"===l.content?r[r.length-1].openedBraces--:s=!0),(s||"string"==typeof l)&&0<r.length&&0===r[r.length-1].openedBraces){var o=t(l);c<n.length-1&&("string"==typeof n[c+1]||"plain-text"===n[c+1].type)&&(o+=t(n[c+1]),n.splice(c+1,1)),0<c&&("string"==typeof n[c-1]||"plain-text"===n[c-1].type)&&(o=t(n[c-1])+o,n.splice(c-1,1),c--),n[c]=new e.Token("plain-text",o,null,o)}l.content&&"string"!=typeof l.content&&a(l.content)}}(a.tokens)}))}(Prism)},811:function(e,a,t){"use strict";var n=t(5),r=t(8),c=t(0),l=t.n(c),s=t(1),o=t.n(s),i=t(3),m=t.n(i),u=t(4),p={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},g=function(e){var a=e.className,t=e.cssModule,c=e.tabs,s=e.pills,o=e.vertical,i=e.horizontal,p=e.justified,g=e.fill,v=e.navbar,b=e.card,d=e.tag,E=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),f=Object(u.mapToCssModules)(m()(a,v?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":c,"card-header-tabs":b&&c,"nav-pills":s,"card-header-pills":b&&s,"nav-justified":p,"nav-fill":g}),t);return l.a.createElement(d,Object(n.a)({},E,{className:f}))};g.propTypes=p,g.defaultProps={tag:"ul",vertical:!1},a.a=g},813:function(e,a,t){"use strict";var n=t(5),r=t(15),c=t(0),l=t.n(c),s=t(1),o=t.n(s),i=t(3),m=t.n(i),u=t(805),p=t(4),g={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,c=Object(p.omit)(this.props,Object.keys(g)),s=Object(p.mapToCssModules)(m()("tab-content",a),t);return l.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(r,Object(n.a)({},c,{className:s})))},a}(c.Component);a.a=v,v.propTypes=g,v.defaultProps={tag:"div"}},814:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var n=t(5),r=t(8),c=t(0),l=t.n(c),s=t(1),o=t.n(s),i=t(3),m=t.n(i),u=t(805),p=t(4),g={tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function v(e){var a=e.className,t=e.cssModule,c=e.tabId,s=e.tag,o=Object(r.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(p.mapToCssModules)(m()("tab-pane",a,{active:c===e}),t)};return l.a.createElement(u.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(s,Object(n.a)({},o,{className:i(a)}))}))}v.propTypes=g,v.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=94.53af1384.chunk.js.map