(this["webpackJsonpreact-auction"]=this["webpackJsonpreact-auction"]||[]).push([[0],{33:function(e,t,n){e.exports=n(65)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(30),l=n.n(r),i=(n(38),n(9)),o=(n(39),n(7)),u=n(6),m=(n(40),n(11)),s=n.n(m),p=(n(58),function(e){return c.a.createElement("div",{className:"Card",onClick:e.clicked},c.a.createElement("h2",null,e.name),c.a.createElement("img",{className:"Image",src:e.image,alt:"frame"}))}),E=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],l=n[1];return Object(a.useEffect)((function(){s.a.get("https://react-auction-server.herokuapp.com/sell").then((function(e){l(e.data)})).catch((function(e){return console.error(e)}))}),[]),r.map((function(e){return c.a.createElement(o.b,{key:e._id,to:"/items/"+e._id},c.a.createElement(p,{name:e.name,image:e.image}))}))},d=n(12),f=n(13),h=n(15),b=n(14),g=n(16),v=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Signup"))}}]),t}(a.Component),j=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Login"))}}]),t}(a.Component),O=(n(64),function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],l=n[1];return Object(a.useEffect)((function(){s.a.get("https://react-auction-server.herokuapp.com/getitem?_id="+e.match.params.id).then((function(e){e.data.map((function(e){return l(e)}))})).catch((function(e){return console.error(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("h1",null,r.name),c.a.createElement("img",{className:"Image",src:r.image,alt:"frame"}),c.a.createElement("p",null,"By ",r.mail),c.a.createElement("p",null,"Category: ",c.a.createElement("b",null,r.category)),c.a.createElement("p",null,"Initial Price: ",r.initialprice,"\u20b9"),c.a.createElement("p",null,"Present Bid Price: ",r.bidprice,"\u20b9 (By ",r.bidder,")"),c.a.createElement("p",{className:"Description"},"About: ",r.description))});var k=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0];return t[1],c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("nav",null,c.a.createElement(o.b,{to:"/"},"Home"),c.a.createElement("ul",null,n?c.a.createElement("li",null,c.a.createElement(o.b,{to:"/login"},"Login")):null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/signup"},"Signup"))),c.a.createElement("div",{className:"container"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))),c.a.createElement(u.a,{path:"/",exact:!0,component:E}),c.a.createElement(u.a,{path:"/login",exact:!0,component:j}),c.a.createElement(u.a,{path:"/signup",exact:!0,component:v}),c.a.createElement(u.a,{path:"/items/:id",exact:!0,component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.83affd0a.chunk.js.map