(window.webpackJsonpbrew_find=window.webpackJsonpbrew_find||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/Beer icon.e4889093.svg"},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),i=(a(39),a(40),a(7)),o=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{id:"beer-icon",src:a(41),alt:""}),r.a.createElement("h1",{id:"title"},"BREW FIND")),r.a.createElement("div",{className:"nav-links"},r.a.createElement(i.b,{to:"/home"},"Home"),r.a.createElement(i.b,{to:"/search"},"Search")))},s=a(18),m=a.n(s),u=a(32),h=a(10),w=a(11),d=a(13),b=a(12),E=a(14),p=a(33),f=a.n(p),v=a(6),y=function(){return r.a.createElement("div",{className:"welcome-wrapper"},r.a.createElement("div",{className:"welcome-container"},r.a.createElement("div",{className:"welcome-messages"},r.a.createElement("h1",{id:"welcome1"},"Got Beer?"),r.a.createElement("h1",{id:"welcome2"},"Check out your local breweries"))))},k=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={brewery:{},clicked:!1},a.handleClick=function(e){a.setState({currentBrewery:e,clicked:!0})},a}return Object(E.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.breweries);var t=this.props.breweries.map(function(t,a){return r.a.createElement("p",{key:a,onClick:function(){return e.handleClick(t)}},t.name)}),a=this.state.clicked?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,this.state.currentBrewery.name),r.a.createElement("p",null,this.state.currentBrewery.city),r.a.createElement("p",null,this.state.currentBrewery.street),r.a.createElement("a",{target:"_blank",href:this.state.currentBrewery.website_url},"Website")):null;return r.a.createElement("div",{id:"breweryContainer"},r.a.createElement("div",{id:"breweryList"},t),r.a.createElement("div",{id:"breweryDetails"},a))}}]),t}(r.a.Component),g=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).makeAPICall=Object(u.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:f.a.get("https://api.openbrewerydb.org/breweries?by_state=new_york").then(function(t){e.setState({breweries:t.data}),console.log("this is allData",t.data)}).catch(function(e){console.log(e)});case 1:case"end":return t.stop()}},t)})),e.state={breweries:[]},e}return Object(E.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.makeAPICall()}},{key:"render",value:function(){var e=this;return console.log(this.state.breweries),r.a.createElement("main",{className:"main"},r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/search",render:function(t){return r.a.createElement(k,Object.assign({},t,{breweries:e.state.breweries}))}}),r.a.createElement(v.b,{exact:!0,path:"/home",component:y}),r.a.createElement(v.a,{from:"/",to:"home"})))}}]),t}(r.a.Component),O=function(){return r.a.createElement("nav",{className:"footer"},r.a.createElement("p",null,"CREATED BY J.C. DORR"))},j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(g,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.3349076f.chunk.js.map