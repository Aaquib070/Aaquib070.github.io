(this.webpackJsonplastarzi=this.webpackJsonplastarzi||[]).push([[47],{1114:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1274),d=t(1269),p=t(1270),u=t(175),E=t(799),b=t(803),h=t(800),g=t(798),f=t(872),y=t(810),N=t.n(y),v=t(265),x=t(260),w=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:[e.props.labelColor,e.props.labelColor,e.props.primary,e.props.labelColor,e.props.labelColor,e.props.labelColor],grid:{show:!1,padding:{left:0,right:0}},dataLabels:{enabled:!1},plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}},xaxis:{type:"numeric"}},series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,{className:"pb-50"},o.a.createElement(p.a,{lg:{size:6,order:1},sm:{size:12,order:2},xs:{order:2},className:"d-flex justify-content-between flex-column mt-lg-0 mt-2"},o.a.createElement("div",{className:"session-info"},o.a.createElement("h2",{className:"text-bold-600 mb-25"},"2.7K"),o.a.createElement("p",{className:"text-bold-500 mb-75"},"Avg Sessions"),o.a.createElement("h5",{className:"font-medium-2"},o.a.createElement("span",{className:"text-success"},"+5.2% "),o.a.createElement("span",null,"vs last 7 days"))),o.a.createElement(u.a.Ripple,{className:"btn-block shadow",color:"primary"},"View Details ",o.a.createElement(v.a,{size:15}))),o.a.createElement(p.a,{lg:{size:6,order:2},sm:{size:12,order:1},xs:{order:1},className:"d-flex justify-content-between flex-column text-right"},o.a.createElement(E.a,null,o.a.createElement(b.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",o.a.createElement(x.a,{size:10})),o.a.createElement(h.a,{right:!0},o.a.createElement(g.a,null,"Last 28 days"),o.a.createElement(g.a,null,"Last Month"),o.a.createElement(g.a,null,"Last Year"))),o.a.createElement(N.a,{options:this.state.options,series:this.state.series,type:"bar",height:200}))),o.a.createElement("hr",null),o.a.createElement(d.a,{className:"pt-50"},o.a.createElement(p.a,{md:"6",sm:"12"},o.a.createElement("p",{className:"mb-0"},"Goal: $100000"),o.a.createElement(f.a,{className:"mt-25",value:"50"})),o.a.createElement(p.a,{md:"6",sm:"12"},o.a.createElement("p",{className:"mb-0"},"Users: 100K"),o.a.createElement(f.a,{className:"mt-25",color:"warning",value:"60"})),o.a.createElement(p.a,{md:"6",sm:"12"},o.a.createElement("p",{className:"mb-0"},"Retention: 90%"),o.a.createElement(f.a,{className:"mt-25",color:"danger",value:"70"})),o.a.createElement(p.a,{md:"6",sm:"12"},o.a.createElement("p",{className:"mb-0"},"Duration: 1yr"),o.a.createElement(f.a,{className:"mt-25",color:"success",value:"80"})))))}}]),t}(o.a.Component);a.a=w},1115:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(799),u=t(803),E=t(800),b=t(798),h=t(1274),g=t(1269),f=t(1270),y=t(810),N=t.n(y),v=t(260),x=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{},plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:e.props.white,strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:[e.props.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.props.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{dashArray:8},labels:["Completed Tickets"]},series:[83]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Support Tracker"),o.a.createElement(p.a,null,o.a.createElement(u.a,{className:"cursor-pointer",tag:"small"},"Last 7 days ",o.a.createElement(v.a,{size:10})),o.a.createElement(E.a,{right:!0},o.a.createElement(b.a,null,"Last 28 days"),o.a.createElement(b.a,null,"Last Month"),o.a.createElement(b.a,null,"Last Year")))),o.a.createElement(h.a,{className:"pt-0"},o.a.createElement(g.a,null,o.a.createElement(f.a,{sm:"2",className:"d-flex flex-column flex-wrap text-center"},o.a.createElement("h1",{className:"font-large-2 text-bold-600 mt-2 mb-0"},"163"),o.a.createElement("small",null,"Tickets")),o.a.createElement(f.a,{sm:"10",className:"d-flex justify-content-center"},o.a.createElement(N.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:350,className:"support-tracker-card"}))),o.a.createElement("div",{className:"chart-info d-flex justify-content-between"},o.a.createElement("div",{className:"text-center"},o.a.createElement("p",{className:"mb-50"},"New Tickets"),o.a.createElement("span",{className:"font-large-1"},"29")),o.a.createElement("div",{className:"text-center"},o.a.createElement("p",{className:"mb-50"},"Open Tickets"),o.a.createElement("span",{className:"font-large-1"},"63")),o.a.createElement("div",{className:"text-center"},o.a.createElement("p",{className:"mb-50"},"Response Time"),o.a.createElement("span",{className:"font-large-1"},"1d")))))}}]),t}(o.a.Component);a.a=x},1116:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(799),u=t(803),E=t(800),b=t(798),h=t(1274),g=t(810),f=t.n(g),y=t(260),N=t(188),v=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{colors:[e.props.primary,e.props.warning,e.props.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:[e.props.primaryLight,e.props.warningLight,e.props.dangerLight],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{name:{fontSize:"18px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},labels:["Finished","Pending","Rejected"]},series:[70,52,26]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Product Orders"),o.a.createElement(p.a,null,o.a.createElement(u.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",o.a.createElement(y.a,{size:10})),o.a.createElement(E.a,{right:!0},o.a.createElement(b.a,null,"Last 28 days"),o.a.createElement(b.a,null,"Last Month"),o.a.createElement(b.a,null,"Last Year")))),o.a.createElement(h.a,null,o.a.createElement(f.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:350,className:"mb-3"}),o.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1"},o.a.createElement("div",{className:"series-info d-flex align-items-center"},o.a.createElement(N.a,{strokeWidth:5,size:"12",className:"primary"}),o.a.createElement("span",{className:"text-bold-600 ml-50"},"Finished")),o.a.createElement("div",{className:"series-result"},o.a.createElement("span",{className:"align-middle"},"23043"))),o.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1"},o.a.createElement("div",{className:"series-info d-flex align-items-center"},o.a.createElement(N.a,{strokeWidth:5,size:"12",className:"warning"}),o.a.createElement("span",{className:"text-bold-600 ml-50"},"Pending")),o.a.createElement("div",{className:"series-result"},o.a.createElement("span",{className:"align-middle"},"14658"))),o.a.createElement("div",{className:"chart-info d-flex justify-content-between"},o.a.createElement("div",{className:"series-info d-flex align-items-center"},o.a.createElement(N.a,{strokeWidth:5,size:"12",className:"danger"}),o.a.createElement("span",{className:"text-bold-600 ml-50"},"Rejected")),o.a.createElement("div",{className:"series-result"},o.a.createElement("span",{className:"align-middle"},"4758")))))}}]),t}(o.a.Component);a.a=v},1117:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(1274),u=t(810),E=t.n(u),b=t(366),h=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:[e.props.primary,e.props.info],plotOptions:{radar:{polygons:{strokeColors:[e.props.strokeColor,"transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#9f8ed7",e.props.infoLight],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0},legend:{show:!1},labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:[e.props.strokeColor,e.props.strokeColor,e.props.strokeColor,e.props.strokeColor,e.props.strokeColor,e.props.strokeColor]}},yaxis:{show:!1},grid:{show:!1}},series:[{name:"Sales",data:[90,50,86,40,100,20]},{name:"Visit",data:[70,75,70,76,20,85]}]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"title"},o.a.createElement(d.a,null,"Sales"),o.a.createElement("p",{className:"text-muted mb-0"},"Last 6 months")),o.a.createElement(b.a,{className:"cursor-pointer",size:20})),o.a.createElement(p.a,null,o.a.createElement("div",{className:"item-info d-inline-block mr-2"},o.a.createElement("div",{className:"bg-primary",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",marginRight:"5px"}}),o.a.createElement("span",null,"Sales")),o.a.createElement("div",{className:"item-info d-inline-block"},o.a.createElement("div",{className:"bg-info",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",marginRight:"5px"}}),o.a.createElement("span",null,"Visits")),o.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:"radar",height:400})))}}]),t}(o.a.Component);a.a=h},1718:function(e,a,t){},2122:function(e,a,t){"use strict";t.r(a);var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1269),m=t(1270),d=t(806),p=t(972),u=t(1116),E=t(973),b=t(1117),h=t(1115),g=t(969),f=t(860),y=t(1114),N=t(1271),v=t(1272),x=t(872),w=t(1275),k=t(1276),C=t(175),j=t(259),O=t(299),z=t(435),L=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={isVisible:!1},e.handleHover=function(){e.setState({isVisible:!e.state.isVisible})},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(N.a,null,o.a.createElement(v.a,{className:"border-bottom pb-1"},o.a.createElement("div",{className:"tasks-info"},o.a.createElement("p",{className:"mb-75"},o.a.createElement("strong",null,"2 task completed "),"out of 10"),o.a.createElement(x.a,{value:"20"})),o.a.createElement("p",null,"Sat, 16, Feb")),o.a.createElement(w.a,{className:"analytics-list"},o.a.createElement(k.a,{className:"d-lg-flex justify-content-between align-items-center py-1 border-0",onMouseEnter:this.handleHover,onMouseLeave:this.handleHover},o.a.createElement("div",{className:"float-left"},o.a.createElement("p",{className:"text-bold-600 font-medium-2 mb-0 mt-25"},"Refactor button component"),o.a.createElement("small",null,"16 Feb 2020 - 2 hrs")),o.a.createElement("div",{className:"float-right"},o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(j.a,null)),o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(O.a,null)),o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(z.a,null)))),o.a.createElement(k.a,{className:"d-lg-flex justify-content-between align-items-center py-1 border-0",onMouseEnter:this.handleHover,onMouseLeave:this.handleHover},o.a.createElement("div",{className:"float-left"},o.a.createElement("p",{className:"text-bold-600 font-medium-2 mb-0 mt-25"},"Submit report to admin"),o.a.createElement("small",null,"16 Feb 2020 - 2 hrs")),o.a.createElement("div",{className:"float-right"},o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(j.a,null)),o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(O.a,null)),o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(z.a,null)))),o.a.createElement(k.a,{className:"d-lg-flex justify-content-between align-items-center py-1 border-0",onMouseEnter:this.handleHover,onMouseLeave:this.handleHover},o.a.createElement("div",{className:"float-left"},o.a.createElement("p",{className:"text-bold-600 font-medium-2 mb-0 mt-25"},"Prepare presentation"),o.a.createElement("small",null,"16 Feb 2020 - 2 hrs")),o.a.createElement("div",{className:"float-right"},o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(j.a,null)),o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(O.a,null)),o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(z.a,null)))),o.a.createElement(k.a,{className:"d-lg-flex justify-content-between align-items-center py-1 border-0",onMouseEnter:this.handleHover,onMouseLeave:this.handleHover},o.a.createElement("div",{className:"float-left"},o.a.createElement("p",{className:"text-bold-600 font-medium-2 mb-0 mt-25"},"Calculate monthly income"),o.a.createElement("small",null,"16 Feb 2020 - 2 hrs")),o.a.createElement("div",{className:"float-right"},o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(j.a,null)),o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(O.a,null)),o.a.createElement(C.a,{color:"primary",outline:!0,className:"btn-icon rounded-circle mr-50",size:"sm"},o.a.createElement(z.a,null))))))}}]),t}(o.a.Component),F=t(1273),A=t(1274),T=t(810),M=t.n(T),S=t(185),R=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2},toolbar:{show:!1}},stroke:{curve:"smooth",width:4},grid:{borderColor:e.props.labelColor},legend:{show:!1},colors:[e.props.purple],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[e.props.primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:e.props.strokeColor}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{color:e.props.strokeColor},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}},series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(N.a,null,o.a.createElement(v.a,null,o.a.createElement("div",{className:"title"},o.a.createElement(F.a,null,"Sales")),o.a.createElement(S.a,{className:"text-muted cursor-pointer",size:20})),o.a.createElement(A.a,null,o.a.createElement(M.a,{options:this.state.options,series:this.state.series,type:"line",height:270})))}}]),t}(o.a.Component),B=t(265),J=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(N.a,null,o.a.createElement(A.a,null,o.a.createElement("h1",{className:"mb-0"},o.a.createElement("sup",{className:"font-medium-3 mr-50"},"$"),"23,597"),o.a.createElement("small",null,o.a.createElement("span",{className:"text-muted"},"Deposits: "),"$20,065"),o.a.createElement("h5",{className:"mt-1"},o.a.createElement("span",{className:"text-success"},"+5.2% ($956)")),o.a.createElement(C.a.Ripple,{block:!0,color:"primary",className:"w-100 box-shadow-1 mt-2"},"Add Funds ",o.a.createElement(B.a,{size:15})),o.a.createElement("hr",{className:"my-2"}),o.a.createElement("small",null,"Earned: $56,156"),o.a.createElement(x.a,{className:"mt-1 mb-2",color:"success",value:"50"}),o.a.createElement("small",null,"Duration: 2y"),o.a.createElement(x.a,{className:"mt-1",color:"warning",value:"50"})))}}]),t}(o.a.Component),P=t(970),D=t(971),H=(t(1718),function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{breadCrumbTitle:"Analytics Cards",breadCrumbParent:"Card",breadCrumbActive:"Analytics Cards"}),o.a.createElement(i.a,null,o.a.createElement(m.a,{lg:"4",sm:"12"},o.a.createElement(p.a,{primary:"#7367F0",warning:"#FF9F43",danger:"#EA5455",primaryLight:"#9c8cfc",warningLight:"#FFC085",dangerLight:"#f29292"})),o.a.createElement(m.a,{lg:"4",sm:"12"},o.a.createElement(u.a,{primary:"#7367F0",warning:"#FF9F43",danger:"#EA5455",primaryLight:"#9c8cfc",warningLight:"#FFC085",dangerLight:"#f29292"})),o.a.createElement(m.a,{lg:"4",sm:"12"},o.a.createElement(E.a,{primary:"#7367F0",warning:"#FF9F43",danger:"#EA5455",primaryLight:"#9c8cfc",warningLight:"#FFC085",dangerLight:"#f29292"})),o.a.createElement(m.a,{lg:"6",sm:"12"},o.a.createElement(b.a,{strokeColor:"#b9c3cd",infoLight:"#1edec5",primary:"#7367F0",info:"#00cfe8"})),o.a.createElement(m.a,{lg:"6",sm:"12"},o.a.createElement(h.a,{primary:"#7367F0",danger:"#EA5455",white:"#fff"})),o.a.createElement(m.a,{lg:"8",sm:"12"},o.a.createElement(g.a,{primary:"#7367F0",dangerLight:"#f29292",strokeColor:"#b9c3cd",labelColor:"#e7eef7"})),o.a.createElement(m.a,{lg:"4",sm:"12"},o.a.createElement(f.a,{strokeColor:"#b9c3cd",success:"#28C76F"})),o.a.createElement(m.a,{lg:"6",sm:"12"},o.a.createElement(y.a,{labelColor:"#e7eef7",primary:"#7367F0"})),o.a.createElement(m.a,{lg:"6",sm:"12"},o.a.createElement(L,null)),o.a.createElement(m.a,{lg:"9",md:"12",sm:"12"},o.a.createElement(R,{strokeColor:"#b9c3cd",primary:"#7367F0",purple:"#df87f2",labelColor:"#e7eef7"})),o.a.createElement(m.a,{lg:"3",md:"12",sm:"12"},o.a.createElement(J,null)),o.a.createElement(m.a,{lg:"4",md:"12"},o.a.createElement(P.a,null)),o.a.createElement(m.a,{lg:"8",md:"12"},o.a.createElement(D.a,{strokeColor:"#b9c3cd",primary:"#7367F0",danger:"#EA5455",labelColor:"#e7eef7"}))))}}]),t}(o.a.Component));a.default=H},860:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(1274),u=t(810),E=t.n(u),b=t(331),h=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:[e.props.success],plotOptions:{radialBar:{size:110,startAngle:-140,endAngle:150,hollow:{size:"77%"},track:{background:e.props.strokeColor,strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:e.props.strokeColor,fontSize:"4rem"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"}},series:[83]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Goal Overview"),o.a.createElement(b.a,{size:20,className:"cursor-pointer text-muted"})),o.a.createElement(p.a,null,o.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:260})),o.a.createElement("div",{className:"d-flex mt-2"},o.a.createElement("div",{className:"completed border-top border-right text-center w-50 py-1"},o.a.createElement("p",{className:"mb-50"},"Completed"),o.a.createElement("p",{className:"font-large-1 text-bold-600 mb-50"},"786,617")),o.a.createElement("div",{className:"in-progress border-top border-right text-center w-50 py-1"},o.a.createElement("p",{className:"mb-50"},"In Progress"),o.a.createElement("p",{className:"font-large-1 text-bold-600 mb-50"},"13,561"))))}}]),t}(o.a.Component);a.a=h},872:function(e,a,t){"use strict";var l=t(5),r=t(30),n=t(8),s=t(0),c=t.n(s),o=t(1),i=t.n(o),m=t(3),d=t.n(m),p=t(4),u={children:i.a.node,bar:i.a.bool,multi:i.a.bool,tag:p.tagPropType,value:i.a.oneOfType([i.a.string,i.a.number]),min:i.a.oneOfType([i.a.string,i.a.number]),max:i.a.oneOfType([i.a.string,i.a.number]),animated:i.a.bool,striped:i.a.bool,color:i.a.string,className:i.a.string,barClassName:i.a.string,cssModule:i.a.object,style:i.a.object,barAriaValueText:i.a.string,barAriaLabelledBy:i.a.string},E=function(e){var a=e.children,t=e.className,s=e.barClassName,o=e.cssModule,i=e.value,m=e.min,u=e.max,E=e.animated,b=e.striped,h=e.color,g=e.bar,f=e.multi,y=e.tag,N=e.style,v=e.barAriaValueText,x=e.barAriaLabelledBy,w=Object(n.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),k=Object(p.toNumber)(i)/Object(p.toNumber)(u)*100,C=Object(p.mapToCssModules)(d()(t,"progress"),o),j=Object(p.mapToCssModules)(d()("progress-bar",g&&t||s,E?"progress-bar-animated":null,h?"bg-"+h:null,b||E?"progress-bar-striped":null),o),O=f?a:c.a.createElement("div",{className:j,style:Object(r.a)({},N,{width:k+"%"}),role:"progressbar","aria-valuenow":i,"aria-valuemin":m,"aria-valuemax":u,"aria-valuetext":v,"aria-labelledby":x,children:a});return g?O:c.a.createElement(y,Object(l.a)({},w,{className:C,children:O}))};E.propTypes=u,E.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},a.a=E},969:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(1274),u=t(810),E=t.n(u),b=t(185),h=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{toolbar:{show:!1},animations:{enabled:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:e.props.labelColor},legend:{show:!1},colors:[e.props.dangerLight,e.props.strokeColor],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[e.props.primary,e.props.strokeColor],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:e.props.strokeColor}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{color:e.props.strokeColor},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}},series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Revenue"),o.a.createElement(b.a,{size:20,className:"cursor-pointer text-muted"})),o.a.createElement(p.a,null,o.a.createElement("div",{className:"d-flex justify-content-start mb-1"},o.a.createElement("div",{className:"mr-2"},o.a.createElement("p",{className:"mb-50 text-bold-600"},"This Month"),o.a.createElement("h2",{className:"text-bold-400"},o.a.createElement("sup",{className:"font-medium-1 mr-50"},"$"),o.a.createElement("span",{className:"text-success"},"86,589"))),o.a.createElement("div",null,o.a.createElement("p",{className:"mb-50 text-bold-600"},"Last Month"),o.a.createElement("h2",{className:"text-bold-400"},o.a.createElement("sup",{className:"font-medium-1 mr-50"},"$"),o.a.createElement("span",null,"73,683")))),o.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:"line",height:260})))}}]),t}(o.a.Component);a.a=h},970:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(1274),u=t(872),E=t(237),b=t(229),h=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Browser Statistics")),o.a.createElement(p.a,null,o.a.createElement("div",{className:"d-flex justify-content-between mb-25"},o.a.createElement("div",{className:"browser-info"},o.a.createElement("p",{className:"mb-25"},"Google Chrome"),o.a.createElement("h4",null,"73%")),o.a.createElement("div",{className:"stastics-info text-right"},o.a.createElement("span",null,"800 ",o.a.createElement(E.a,{size:15,className:"text-success"})),o.a.createElement("span",{className:"text-muted d-block"},"13:16"))),o.a.createElement(u.a,{className:"mb-2",value:"73"}),o.a.createElement("div",{className:"d-flex justify-content-between mb-25"},o.a.createElement("div",{className:"browser-info"},o.a.createElement("p",{className:"mb-25"},"Opera"),o.a.createElement("h4",null,"8%")),o.a.createElement("div",{className:"stastics-info text-right"},o.a.createElement("span",null,"-200 ",o.a.createElement(b.a,{size:15,className:"text-danger"})),o.a.createElement("span",{className:"text-muted d-block"},"13:16"))),o.a.createElement(u.a,{className:"mb-2",value:"8"}),o.a.createElement("div",{className:"d-flex justify-content-between mb-25"},o.a.createElement("div",{className:"browser-info"},o.a.createElement("p",{className:"mb-25"},"Firefox"),o.a.createElement("h4",null,"19%")),o.a.createElement("div",{className:"stastics-info text-right"},o.a.createElement("span",null,"100 ",o.a.createElement(E.a,{size:15,className:"text-success"})),o.a.createElement("span",{className:"text-muted d-block"},"13:16"))),o.a.createElement(u.a,{className:"mb-2",value:"19"}),o.a.createElement("div",{className:"d-flex justify-content-between mb-25"},o.a.createElement("div",{className:"browser-info"},o.a.createElement("p",{className:"mb-25"},"Internet Explorer"),o.a.createElement("h4",null,"27%")),o.a.createElement("div",{className:"stastics-info text-right"},o.a.createElement("span",null,"-450 ",o.a.createElement(b.a,{size:15,className:"text-danger"})),o.a.createElement("span",{className:"text-muted d-block"},"13:16"))),o.a.createElement(u.a,{className:"mb-2",value:"27"})))}}]),t}(o.a.Component);a.a=h},971:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(1274),u=t(810),E=t.n(u),b=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"10%"}},colors:[e.props.primary,e.props.danger],dataLabels:{enabled:!1},grid:{borderColor:e.props.labelColor,padding:{left:0,right:0}},legend:{show:!0,position:"top",horizontalAlign:"left",offsetX:0,fontSize:"14px",markers:{radius:50,width:10,height:10}},xaxis:{labels:{style:{colors:e.props.strokeColor}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{color:e.props.strokeColor}}},tooltip:{x:{show:!1}}},series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Client Retention")),o.a.createElement(p.a,null,o.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:"bar",height:290,id:"client-retention-chart"})))}}]),t}(o.a.Component);a.a=b},972:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(799),u=t(803),E=t(800),b=t(798),h=t(1274),g=t(810),f=t.n(g),y=t(260),N=t(363),v=t(237),x=t(416),w=t(425),k=t(229),C=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["Desktop","Mobile","Tablet"],stroke:{width:0},colors:[e.props.primary,e.props.warning,e.props.danger],fill:{type:"gradient",gradient:{gradientToColors:[e.props.primaryLight,e.props.warningLight,e.props.dangerLight]}}},series:[58.6,34.9,6.5]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Session By Device"),o.a.createElement(p.a,null,o.a.createElement(u.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",o.a.createElement(y.a,{size:10})),o.a.createElement(E.a,{right:!0},o.a.createElement(b.a,null,"Last 28 days"),o.a.createElement(b.a,null,"Last Month"),o.a.createElement(b.a,null,"Last Year")))),o.a.createElement(h.a,{className:"pt-0"},o.a.createElement(f.a,{options:this.state.options,series:this.state.series,type:"donut",height:290}),o.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1 mt-2"},o.a.createElement("div",{className:"series-info d-flex align-items-center"},o.a.createElement(N.a,{size:"18",className:"primary"}),o.a.createElement("span",{className:"text-bold-600 mx-50"},"Desktop"),o.a.createElement("span",{className:"align-middle"}," - 58.6%")),o.a.createElement("div",{className:"series-result"},o.a.createElement("span",{className:"align-middle"},"2%"),o.a.createElement(v.a,{size:"15",className:"success"}))),o.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1 mt-1"},o.a.createElement("div",{className:"series-info d-flex align-items-center"},o.a.createElement(x.a,{size:"18",className:"warning"}),o.a.createElement("span",{className:"text-bold-600 mx-50"},"Mobile"),o.a.createElement("span",{className:"align-middle"}," - 34.9%")),o.a.createElement("div",{className:"series-result"},o.a.createElement("span",{className:"align-middle"},"8%"),o.a.createElement(v.a,{size:"15",className:"success"}))),o.a.createElement("div",{className:"chart-info d-flex justify-content-between mt-1"},o.a.createElement("div",{className:"series-info d-flex align-items-center"},o.a.createElement(w.a,{size:"18",className:"danger"}),o.a.createElement("span",{className:"text-bold-600 mx-50"},"Tablet"),o.a.createElement("span",{className:"align-middle"}," - 6.5%")),o.a.createElement("div",{className:"series-result"},o.a.createElement("span",{className:"align-middle"},"-5%"),o.a.createElement(k.a,{size:"15",className:"danger"})))))}}]),t}(o.a.Component);a.a=C},973:function(e,a,t){"use strict";var l=t(11),r=t(12),n=t(14),s=t(13),c=t(0),o=t.n(c),i=t(1271),m=t(1272),d=t(1273),p=t(799),u=t(803),E=t(800),b=t(798),h=t(1274),g=t(1275),f=t(1276),y=t(260),N=t(810),v=t.n(N),x=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},colors:[e.props.primary,e.props.warning,e.props.danger],fill:{type:"gradient",gradient:{gradientToColors:[e.props.primaryLight,e.props.warningLight,e.props.dangerLight]}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:5},labels:["New","Returning","Referrals"]},series:[690,258,149]},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,null,"Customers"),o.a.createElement(p.a,null,o.a.createElement(u.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",o.a.createElement(y.a,{size:10})),o.a.createElement(E.a,{right:!0},o.a.createElement(b.a,null,"Last 28 days"),o.a.createElement(b.a,null,"Last Month"),o.a.createElement(b.a,null,"Last Year")))),o.a.createElement(h.a,{className:"pt-0"},o.a.createElement(v.a,{options:this.state.options,series:this.state.series,type:"pie",height:290})),o.a.createElement(g.a,{flush:!0},o.a.createElement(f.a,{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"item-info"},o.a.createElement("div",{className:"bg-primary",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),o.a.createElement("span",{className:"text-bold-600"},"New")),o.a.createElement("div",{className:"product-result"},o.a.createElement("span",null,"690"))),o.a.createElement(f.a,{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"item-info"},o.a.createElement("div",{className:"bg-warning",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),o.a.createElement("span",{className:"text-bold-600"},"Returning")),o.a.createElement("div",{className:"product-result"},o.a.createElement("span",null,"258"))),o.a.createElement(f.a,{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"item-info"},o.a.createElement("div",{className:"bg-danger",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",margin:"0 5px"}}),o.a.createElement("span",{className:"text-bold-600"},"Referrals")),o.a.createElement("div",{className:"product-result"},o.a.createElement("span",null,"149")))))}}]),t}(o.a.Component);a.a=x}}]);
//# sourceMappingURL=47.185b7c7c.chunk.js.map