(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[98],{2071:function(e,a,t){"use strict";t.r(a);var n=t(11),l=t(12),c=t(14),r=t(13),s=t(0),i=t.n(s),o=t(1268),m=t(1269),g=t(806),u=t(1270),d=t(1271),p=t(1272),b=t(811),E=t(795),v=t(796),f=t(1273),h=t(813),N=t(814),B=t(794),T=t(3),y=t.n(T),j=t(304),k=t(276),w=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgePillsLight extends React.Component {\n\n  render() {\n    return(\n      <Badge pill color="light-primary">Primary</Badge>\n      <Badge pill color="light-success">Success</Badge>\n      <Badge pill color="light-info">Info</Badge>\n      <Badge pill color="light-danger">Danger</Badge>\n      <Badge pill color="light-warning">Warning</Badge>\n    )\n  }\n}\nexport default BadgePillsLight\n')),x=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgeGlow extends React.Component {\n\n  render() {\n    return(\n      <Badge pill className="badge-glow" color="primary">Primary</Badge>\n      <Badge pill className="badge-glow" color="success">Success</Badge>\n      <Badge pill className="badge-glow" color="info">Info</Badge>\n      <Badge pill className="badge-glow" color="danger">Danger</Badge>\n      <Badge pill className="badge-glow" color="warning">Warning</Badge>\n      <Badge pill className="badge-glow" color="dark">Dark</Badge>\n    )\n  }\n}\nexport default BadgeGlow\n')),O=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgeContextual extends React.Component {\n\n  render() {\n    return(\n      <Badge pill color="primary">Primary</Badge>\n      <Badge pill color="success">Success</Badge>\n      <Badge pill color="info">Info</Badge>\n      <Badge pill color="danger">Danger</Badge>\n      <Badge pill color="warning">Warning</Badge>\n      <Badge pill color="dark">Dark</Badge>\n    )\n  }\n}\nexport default BadgeContextual\n')),z=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\nimport {\n  Facebook,\n  Instagram,\n  GitHub,\n  Twitter,\n  Sun\n} from "react-feather"\n\nclass BadgePillIcons extends React.Component {\n\n  render() {\n    return(\n      <Badge pill color="primary" className="mr-1 mb-1">\n        <Facebook size={12} />\n      </Badge>\n      <Badge pill color="success" className="mr-1 mb-1">\n        <Instagram size={12} />\n      </Badge>\n      <Badge pill color="info" className="mr-1 mb-1">\n        <Twitter size={12} />\n      </Badge>\n      <Badge pill color="danger" className="mr-1 mb-1">\n        <GitHub size={12} />\n      </Badge>\n      <Badge pill color="warning" className="mr-1 mb-1">\n        <Sun size={12} />\n      </Badge>\n    )\n  }\n}\nexport default BadgePillIcons\n')),C=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\nimport {\n  Facebook,\n  Instagram,\n  Twitter,\n} from "react-feather"\n\nclass BadgeNotification extends React.Component {\n\n  render() {\n    return(\n      <div className="d-inline-block position-relative mr-2">\n        <Badge pill color="primary" className="badge-up">\n          <Facebook size={12} />\n        </Badge>\n    </div>\n    <div className="d-inline-block position-relative mr-2">\n      <Badge pill color="success" className="badge-up">\n        <Instagram size={12} />\n      </Badge>\n    </div>\n    <div className="d-inline-block position-relative">\n      <Badge pill color="info" className="badge-up">\n        <Twitter size={12} />\n      </Badge>\n    </div>\n    )\n  }\n}\nexport default BadgeNotification\n')),I=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\nimport {\n  Link\n} from "react-feather"\n\nclass BadgePillLink extends React.Component {\n\n  render() {\n    return(\n      <Badge pill href="#" color="primary">\n        <Link size={12} />\n        Link Badge\n      </Badge>\n    )\n  }\n}\nexport default BadgePillLink\n')),P=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgePillBlock extends React.Component {\n\n  render() {\n    return(\n      <Badge color="primary" pill className="block">\n        Block Badge Pill\n      </Badge>\n    )\n  }\n}\nexport default BadgePillBlock\n')),S=i.a.createElement("pre",null,i.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {Badge} from "reactstrap"\n\nclass BadgePillSizes extends React.Component {\n\n  render() {\n    return(\n      <Badge color="primary" pill className="badge-xl">\n        <span>Extra Large</span>\n      </Badge>\n      <Badge color="primary" pill className="badge-lg">\n        <span>Large</span>\n      </Badge>\n      <Badge color="primary" pill className="badge-md">\n        <span>Medium</span>\n      </Badge>\n      <Badge color="primary" pill className="badge-sm">\n        <span>Small</span>\n      </Badge>\n    )\n  }\n}\nexport default BadgePillSizes\n')),R=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Contextual variations"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(j.a,{size:15}))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(k.a,{size:15})))))),i.a.createElement(f.a,null,i.a.createElement("p",null,"Use attribute ",i.a.createElement("code",null,"pill")," with ",i.a.createElement("code",null,"Badge")," tag to create badge pill."),i.a.createElement(h.a,{activeTab:this.state.activeTab},i.a.createElement(N.a,{tabId:"1"},i.a.createElement(B.a,{color:"primary",pill:!0,className:"mr-1 mb-1"},"Primary"),i.a.createElement(B.a,{color:"success",pill:!0,className:"mr-1 mb-1"},"Success"),i.a.createElement(B.a,{color:"info",pill:!0,className:"mr-1 mb-1"},"Info"),i.a.createElement(B.a,{color:"danger",pill:!0,className:"mr-1 mb-1"},"Danger"),i.a.createElement(B.a,{color:"warning",pill:!0,className:"mr-1 mb-1"},"Warning"),i.a.createElement(B.a,{color:"dark",pill:!0,className:"mr-1 mb-1"},"Dark")),i.a.createElement(N.a,{className:"component-code",tabId:"2"},O)))))}}]),t}(i.a.Component),L=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Glow variations"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(j.a,{size:15}))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(k.a,{size:15})))))),i.a.createElement(f.a,null,i.a.createElement("p",null,"Use class ",i.a.createElement("code",null,".badge-glow")," with ",i.a.createElement("code",null,"Badge")," tag to add glow effect to your badge."),i.a.createElement(h.a,{activeTab:this.state.activeTab},i.a.createElement(N.a,{tabId:"1"},i.a.createElement(B.a,{color:"primary",pill:!0,className:"badge-glow mr-1 mb-1"},"Primary"),i.a.createElement(B.a,{color:"success",pill:!0,className:"badge-glow mr-1 mb-1"},"Success"),i.a.createElement(B.a,{color:"info",pill:!0,className:"badge-glow mr-1 mb-1"},"Info"),i.a.createElement(B.a,{color:"danger",pill:!0,className:"badge-glow mr-1 mb-1"},"Danger"),i.a.createElement(B.a,{color:"warning",pill:!0,className:"badge-glow mr-1 mb-1"},"Warning"),i.a.createElement(B.a,{color:"dark",pill:!0,className:"badge-glow mr-1 mb-1"},"Dark")),i.a.createElement(N.a,{className:"component-code",tabId:"2"},x)))))}}]),t}(i.a.Component),M=t(305),F=t(335),A=t(441),D=t(323),$=t(422),U=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Icons"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(j.a,{size:15}))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(k.a,{size:15})))))),i.a.createElement(f.a,null,i.a.createElement(h.a,{activeTab:this.state.activeTab},i.a.createElement(N.a,{tabId:"1"},i.a.createElement(B.a,{pill:!0,color:"primary",className:"mr-1 mb-1"},i.a.createElement(M.a,{size:12})),i.a.createElement(B.a,{pill:!0,color:"success",className:"mr-1 mb-1"},i.a.createElement(F.a,{size:12})),i.a.createElement(B.a,{pill:!0,color:"info",className:"mr-1 mb-1"},i.a.createElement(A.a,{size:12})),i.a.createElement(B.a,{pill:!0,color:"danger",className:"mr-1 mb-1"},i.a.createElement(D.a,{size:12})),i.a.createElement(B.a,{pill:!0,color:"warning",className:"mr-1 mb-1"},i.a.createElement($.a,{size:12}))),i.a.createElement(N.a,{className:"component-code",tabId:"2"},z)))))}}]),t}(i.a.Component),W=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Notification"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(j.a,{size:15}))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(k.a,{size:15})))))),i.a.createElement(f.a,null,i.a.createElement("p",{className:"mb-2"},"Use ",i.a.createElement("code",null,".badge-up")," to set pill badge to higher than other text. So that it can work with notifications also."),i.a.createElement(h.a,{activeTab:this.state.activeTab},i.a.createElement(N.a,{tabId:"1"},i.a.createElement("div",{className:"d-inline-block position-relative mr-2"},i.a.createElement(B.a,{pill:!0,color:"primary",className:"badge-up"},"4"),i.a.createElement(M.a,{className:"font-medium-5 text-primary",size:22})),i.a.createElement("div",{className:"d-inline-block position-relative mr-2"},i.a.createElement(B.a,{pill:!0,color:"danger",className:"badge-up"},"5"),i.a.createElement(F.a,{className:"font-medium-5 text-danger",size:22})),i.a.createElement("div",{className:"d-inline-block position-relative"},i.a.createElement(B.a,{pill:!0,color:"info",className:"badge-up"},"6"),i.a.createElement(A.a,{className:"font-medium-5 text-info",size:22}))),i.a.createElement(N.a,{className:"component-code",tabId:"2"},C)))))}}]),t}(i.a.Component),G=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Block Badge Pill"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(j.a,{size:15}))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(k.a,{size:15})))))),i.a.createElement(f.a,null,i.a.createElement("p",null,"Use ",i.a.createElement("code",null,".block")," class to make badge display as block."),i.a.createElement(h.a,{activeTab:this.state.activeTab},i.a.createElement(N.a,{tabId:"1",className:"d-flex justify-content-center w-100"},i.a.createElement(B.a,{pill:!0,color:"primary",className:"block"},i.a.createElement("span",null,"Block Badge Pill"))),i.a.createElement(N.a,{className:"component-code",tabId:"2"},P)))))}}]),t}(i.a.Component),_=t(341),H=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Link Badge Pill"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(j.a,{size:15}))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(k.a,{size:15})))))),i.a.createElement(f.a,null,i.a.createElement("p",null,"Use ",i.a.createElement("code",null,'href="#"')," attribute to use badge as a link."),i.a.createElement(h.a,{activeTab:this.state.activeTab},i.a.createElement(N.a,{tabId:"1",className:"d-flex justify-content-center"},i.a.createElement(B.a,{color:"primary",pill:!0,href:"#",className:"mr-1 mb-1"},i.a.createElement(_.a,{size:12}),i.a.createElement("span",null,"Link Badge Pill"))),i.a.createElement(N.a,{className:"component-code",tabId:"2"},I)))))}}]),t}(i.a.Component),J=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Sizes"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(j.a,{size:15}))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(k.a,{size:15})))))),i.a.createElement(f.a,null,i.a.createElement("p",null,"Use ",i.a.createElement("code",null,".badge-[sm/md/lg/xl]")," class to change badge pill size."),i.a.createElement(h.a,{activeTab:this.state.activeTab},i.a.createElement(N.a,{tabId:"1"},i.a.createElement(B.a,{color:"primary",pill:!0,className:"badge-xl mr-1 mb-1"},i.a.createElement("span",null,"Extra Large")),i.a.createElement(B.a,{color:"primary",pill:!0,className:"badge-lg mr-1 mb-1"},i.a.createElement("span",null,"Large")),i.a.createElement(B.a,{color:"primary",pill:!0,className:"badge-md mr-1 mb-1"},i.a.createElement("span",null,"Medium")),i.a.createElement(B.a,{color:"primary",pill:!0,className:"badge-sm mr-1 mb-1"},i.a.createElement("span",null,"Small"))),i.a.createElement(N.a,{className:"component-code",tabId:"2"},S)))))}}]),t}(i.a.Component),Z=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,"Light Badges"),i.a.createElement("div",{className:"views"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},i.a.createElement(j.a,{size:15}))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:y()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},i.a.createElement(k.a,{size:15})))))),i.a.createElement(f.a,null,i.a.createElement("p",null,"Use attribute ",i.a.createElement("code",null,"pill")," and"," ",i.a.createElement("code",null,'color="light-COLOR_NAME"')," with ",i.a.createElement("code",null,"Badge")," tag to create a light badge pill."),i.a.createElement(h.a,{activeTab:this.state.activeTab},i.a.createElement(N.a,{tabId:"1"},i.a.createElement(B.a,{color:"light-primary",pill:!0,className:"mr-1 mb-1"},"Primary"),i.a.createElement(B.a,{color:"light-success",pill:!0,className:"mr-1 mb-1"},"Success"),i.a.createElement(B.a,{color:"light-info",pill:!0,className:"mr-1 mb-1"},"Info"),i.a.createElement(B.a,{color:"light-danger",pill:!0,className:"mr-1 mb-1"},"Danger"),i.a.createElement(B.a,{color:"light-warning",pill:!0,className:"mr-1 mb-1"},"Warning")),i.a.createElement(N.a,{className:"component-code",tabId:"2"},w)))))}}]),t}(i.a.Component),q=t(809),K=t.n(q),Q=(t(808),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){K.a.highlightAll()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{breadCrumbTitle:"Pill Badges",breadCrumbParent:"Components",breadCrumbActive:"Pill Badges"}),i.a.createElement(o.a,null,i.a.createElement(m.a,{sm:"12"},i.a.createElement(R,null)),i.a.createElement(m.a,{sm:"12"},i.a.createElement(L,null)),i.a.createElement(m.a,{sm:"12"},i.a.createElement(Z,null)),i.a.createElement(m.a,{sm:"12"},i.a.createElement(U,null)),i.a.createElement(m.a,{sm:"12"},i.a.createElement(W,null))),i.a.createElement(o.a,null,i.a.createElement(m.a,{md:"6",sm:"12"},i.a.createElement(H,null)),i.a.createElement(m.a,{md:"6",sm:"12"},i.a.createElement(G,null))),i.a.createElement(o.a,null,i.a.createElement(m.a,{sm:"12"},i.a.createElement(J,null))))}}]),t}(i.a.Component));a.default=Q},805:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),l=t.n(n).a.createContext({})},808:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(n){for(var l=[],c=0;c<n.length;c++){var r=n[c],s=!1;if("string"!=typeof r&&("tag"===r.type&&r.content[0]&&"tag"===r.content[0].type?"</"===r.content[0].content[0].content?0<l.length&&l[l.length-1].tagName===t(r.content[0].content[1])&&l.pop():"/>"===r.content[r.content.length-1].content||l.push({tagName:t(r.content[0].content[1]),openedBraces:0}):0<l.length&&"punctuation"===r.type&&"{"===r.content?l[l.length-1].openedBraces++:0<l.length&&0<l[l.length-1].openedBraces&&"punctuation"===r.type&&"}"===r.content?l[l.length-1].openedBraces--:s=!0),(s||"string"==typeof r)&&0<l.length&&0===l[l.length-1].openedBraces){var i=t(r);c<n.length-1&&("string"==typeof n[c+1]||"plain-text"===n[c+1].type)&&(i+=t(n[c+1]),n.splice(c+1,1)),0<c&&("string"==typeof n[c-1]||"plain-text"===n[c-1].type)&&(i=t(n[c-1])+i,n.splice(c-1,1),c--),n[c]=new e.Token("plain-text",i,null,i)}r.content&&"string"!=typeof r.content&&a(r.content)}}(a.tokens)}))}(Prism)},811:function(e,a,t){"use strict";var n=t(5),l=t(8),c=t(0),r=t.n(c),s=t(1),i=t.n(s),o=t(3),m=t.n(o),g=t(4),u={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:g.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var a=e.className,t=e.cssModule,c=e.tabs,s=e.pills,i=e.vertical,o=e.horizontal,u=e.justified,d=e.fill,p=e.navbar,b=e.card,E=e.tag,v=Object(l.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),f=Object(g.mapToCssModules)(m()(a,p?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":c,"card-header-tabs":b&&c,"nav-pills":s,"card-header-pills":b&&s,"nav-justified":u,"nav-fill":d}),t);return r.a.createElement(E,Object(n.a)({},v,{className:f}))};d.propTypes=u,d.defaultProps={tag:"ul",vertical:!1},a.a=d},813:function(e,a,t){"use strict";var n=t(5),l=t(15),c=t(0),r=t.n(c),s=t(1),i=t.n(s),o=t(3),m=t.n(o),g=t(805),u=t(4),d={tag:u.tagPropType,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,c=Object(u.omit)(this.props,Object.keys(d)),s=Object(u.mapToCssModules)(m()("tab-content",a),t);return r.a.createElement(g.a.Provider,{value:{activeTabId:this.state.activeTab}},r.a.createElement(l,Object(n.a)({},c,{className:s})))},a}(c.Component);a.a=p,p.propTypes=d,p.defaultProps={tag:"div"}},814:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(5),l=t(8),c=t(0),r=t.n(c),s=t(1),i=t.n(s),o=t(3),m=t.n(o),g=t(805),u=t(4),d={tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function p(e){var a=e.className,t=e.cssModule,c=e.tabId,s=e.tag,i=Object(l.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(u.mapToCssModules)(m()("tab-pane",a,{active:c===e}),t)};return r.a.createElement(g.a.Consumer,null,(function(e){var a=e.activeTabId;return r.a.createElement(s,Object(n.a)({},i,{className:o(a)}))}))}p.propTypes=d,p.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=98.7084bfc5.chunk.js.map