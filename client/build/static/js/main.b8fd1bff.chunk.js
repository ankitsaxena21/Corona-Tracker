(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{186:function(e,t,a){e.exports=a(397)},191:function(e,t,a){},192:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(54),o=a.n(c),i=(a(191),a(192),a(11)),l=a.n(i),s=a(21),u=a(34),d=a(22),m=function(e,t){switch(t.type){case"STATE_DATA":return Object(d.a)(Object(d.a)({},e),{},{Transactions:t.payload[0],State:t.payload[1]});case"ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});case"BUTTON-CLICKED":return Object(d.a)(Object(d.a)({},e),{},{buttonclicked:!0,State:t.payload});default:return e}},f=a(38),v=a.n(f),p={Transactions:{},buttonclicked:!1,State:null},E=Object(n.createContext)(p),h=function(e){var t=e.children,a=Object(n.useReducer)(m,p),c=Object(u.a)(a,2),o=c[0],i=c[1];function d(){return(d=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/v1/data");case 3:a=e.sent,i({type:"STATE_DATA",payload:[a.data,t]}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i({type:"ERROR",payload:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return r.a.createElement(E.Provider,{value:{GetData:function(e){return d.apply(this,arguments)},Buttonclick:function(e){try{return i({type:"BUTTON-CLICKED",payload:e}),o.buttonclicked}catch(t){i({type:"ERROR",payload:t})}},isbutton:o.buttonclicked,statedata:o.Transactions,stateentered:o.State}},t)},b=a(145),g=a.n(b),S=function(){var e,t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),d=Object(u.a)(i,2),m=d[0],f=d[1],p=Object(n.useContext)(E),h=(p.GetData,p.Buttonclick),b=(p.isbutton,Object(n.useState)([])),S=Object(u.a)(b,2),y=S[0],O=S[1];function j(){return(j=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},y.map((function(e){a[Object.values(e)[0]]=!0})),!a.hasOwnProperty(t)){e.next=5;break}return e.next=5,h(t);case 5:o("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){(function(){var t=Object(s.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("https://api.covid19india.org/state_district_wise.json");case 2:a=t.sent,e=Object.keys(a.data),(n=e.map((function(e){return{name:e}}))).shift(),O(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var k={placeholder:"Search for a State or City",value:c,onChange:function(e,t){var a=t.newValue;o(a)}};return r.a.createElement("div",{id:"Search"},r.a.createElement("div",{id:"Search-container"},r.a.createElement(g.a,{suggestions:m,onSuggestionsFetchRequested:function(e){var t=function(e){var t=e.trim().toLowerCase(),a=t.length;return 0===a?[]:y.filter((function(e){return e.name.toLowerCase().slice(0,a)===t}))}(e.value);f(t)},onSuggestionsClearRequested:function(){f([])},getSuggestionValue:function(e){return e.name},renderSuggestion:function(e){return r.a.createElement("div",null,e.name)},inputProps:k,onSuggestionSelected:function(e,t){var a=t.suggestion;t.suggestionValue,t.suggestionIndex,t.sectionIndex,t.method;o(a.name)}})),r.a.createElement("div",{id:"Button"},r.a.createElement("button",{id:"button1",onClick:function(){!function(e){j.apply(this,arguments)}(c)}},"Submit")))},y=a(146),O=a.n(y),j=function(){var e=Object(n.useContext)(E),t=(e.statedata,e.isbutton,e.GetData,e.stateentered);e.buttonclicked;return t?r.a.createElement(S,null):r.a.createElement("div",null,r.a.createElement(O.a,{type:"spin",color:"#c9c9c9",height:"100%",width:"100%"}))},k=a(18),C=(a(99),a(10)),x=[],w=function(e){var t=Object(n.useContext)(E),a=t.statedata,c=t.stateentered,o=0;x=Object(k.a)(a).reverse().map((function(e){if(o%2==0)for(var t in e.States[c].total)if("confirmed"==t)return{pv:parseInt(e.States[c].total[t])};o++}));var i=function(){for(var e in a[0].States[c].total)if("confirmed"==e)return parseInt(a[0].States[c].total[e])}(),l=function(){for(var e in a[1].States[c].total)if("confirmed"==e)return parseInt(a[1].States[c].total[e])}();return r.a.createElement("div",{id:"Confirmed"},r.a.createElement("div",{id:"confirmed-text"},r.a.createElement("h2",{style:{color:"#E61C1C"}},"Confirmed")),r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"#E61C1C"}},"\u2191 ",(i-l).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"#E61C1C"}},i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(C.b,{width:200,height:100,data:x},r.a.createElement(C.a,{type:"monotone",dataKey:"pv",stroke:"#db0000",strokeWidth:2,dot:!1})))},T=[],I=function(){var e=Object(n.useContext)(E),t=e.statedata,a=e.stateentered,c=0;T=Object(k.a)(t).reverse().map((function(e){if(c%2===0)for(var t in e.States[a].total)if("deceased"===t)return{pv:parseInt(e.States[a].total[t])};c++}));var o=function(){for(var e in t[0].States[a].total)if("deceased"==e)return parseInt(t[0].States[a].total[e])}(),i=function(){for(var e in t[1].States[a].total)if("deceased"==e)return parseInt(t[1].States[a].total[e])}();return r.a.createElement("div",{id:"Deaths"},r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"#474747"}},"Deaths")),r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"#474747"}},"\u2191 ",(o-i).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"#474747"}},o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(C.b,{width:200,height:100,data:T},r.a.createElement(C.a,{type:"monotone",dataKey:"pv",stroke:"#8884d8",strokeWidth:2,dot:!1})))},B=[],D=function(){var e=Object(n.useContext)(E),t=e.statedata,a=e.stateentered,c=0;B=Object(k.a)(t).reverse().map((function(e){if(c%2==0)for(var t in e.States[a].total)if("recovered"==t)return{pv:parseInt(e.States[a].total[t])};c++}));var o=function(){for(var e in t[0].States[a].total)if("recovered"==e)return parseInt(t[0].States[a].total[e])}(),i=function(){for(var e in t[1].States[a].total)if("recovered"==e)return parseInt(t[1].States[a].total[e])}();return r.a.createElement("div",{id:"Recovered"},r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"#00821D"}},"Recovered")),r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"#00821D"}},"\u2191 ",Math.abs(i-o).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"#00821D"}},o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(C.b,{width:200,height:100,data:B},r.a.createElement(C.a,{type:"monotone",dataKey:"pv",stroke:"#3ab546",strokeWidth:2,dot:!1})))},R=[],A=function(e){var t=Object(n.useContext)(E),a=t.statedata,c=t.stateentered,o=0;R=Object(k.a)(a).reverse().map((function(e){if(o%2==0)for(var t in e.States[c].total)if("tested"==t)return{pv:parseInt(e.States[c].total[t])};o++}));var i=function(){for(var e in a[0].States[c].total)if("tested"==e)return parseInt(a[0].States[c].total[e])}(),l=function(){for(var e in a[1].States[c].total)if("tested"==e)return parseInt(a[1].States[c].total[e])}();return r.a.createElement("div",{id:"Tested"},r.a.createElement("div",{id:"tested-text"},r.a.createElement("h2",{style:{color:"#A100FF"}},"Tested")),r.a.createElement("div",null,r.a.createElement("h4",{style:{color:"#A100FF"}},"\u2191 ",(i-l).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"#A100FF"}},i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),r.a.createElement(C.b,{width:200,height:100,data:R},r.a.createElement(C.a,{type:"monotone",dataKey:"pv",stroke:"#A100FF",strokeWidth:2,dot:!1})))},F=function(){var e=Object(n.useContext)(E),t=(e.statedata,e.isbutton),a=e.GetData,c=e.stateentered;e.buttonclicked;return r.a.createElement("div",null,1==t?r.a.createElement("div",{id:"graph"},r.a.createElement(w,null),r.a.createElement(I,null),r.a.createElement(D,null),r.a.createElement(A,null)):("Total"!=c&&0==t&&function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()("Total"),"Total"==c?r.a.createElement("div",{id:"graph"},r.a.createElement(w,null),r.a.createElement(I,null),r.a.createElement(D,null),r.a.createElement(A,null)):void 0))},_=(a(396),a(155)),K=a.n(_),M=function(){var e=Object(n.useContext)(E),t=e.statedata,a=e.isbutton,c=(e.GetData,e.stateentered),o=(e.buttonclicked,e.Buttonclick);return r.a.createElement("div",{id:"Header"},r.a.createElement("a",{href:"https://dryicons.com/free-icons/arrow-icons"}),r.a.createElement("img",{id:"icon1",src:"https://img.icons8.com/wired/64/000000/coronavirus.png"}),r.a.createElement("h2",null,"Covid-19 Tracker"),null!=c?r.a.createElement("div",{id:"lastupdated"},r.a.createElement("div",{id:"last_updated"},r.a.createElement("h6",null,"Last updated at ",K()(t[0].createdAt).format("MMMM Do YYYY, h:mm:ss A")))):r.a.createElement("div",{id:"lastupdated"},r.a.createElement("div",{id:"last_updated"})),function(){if(1==a&&"Total"!=c)return r.a.createElement("button",{onClick:function(){return o("Total")},id:"back-button"},r.a.createElement("img",{id:"back-button-img",src:"https://img.icons8.com/ios/50/000000/back--v1.png"}))}())},G=function(){var e=Object(n.useContext)(E),t=e.stateentered;e.statedata;return"Total"==t?r.a.createElement("div",{id:"stateinfo"},r.a.createElement("div",{id:"statename"},r.a.createElement("div",{id:"state_name"}," ",r.a.createElement("h4",null,"India")))):r.a.createElement("div",{id:"stateinfo"},r.a.createElement("div",{id:"statename"},r.a.createElement("div",{id:"state_name"}," ",r.a.createElement("h4",null,t))))};var L=function(){return r.a.createElement(h,null,r.a.createElement("div",{id:"Main-container"},r.a.createElement(M,null),r.a.createElement(j,null),r.a.createElement(G,null),r.a.createElement(F,null)))};o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.b8fd1bff.chunk.js.map