(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"media/logo.5d5d9eef.svg"},15:function(e,t,a){e.exports=a(31)},20:function(e,t,a){},22:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),s=(a(20),a(3)),l=a(4),i=a(6),m=a(5),u=a(7),d=a(12),p=a.n(d),h=(a(22),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"Welcome to landing page")),r.a.createElement("p",{className:"App-intro"},"A react app with django as a backend."))}}]),t}(n.Component)),g=a(14),f=a(9),b=a.n(f),v=function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t},E=function(){var e=Math.random();return{firstName:b.a.generate({words:1,numbers:0}),lastName:b.a.generate({words:1,numbers:0}),age:Math.floor(30*Math.random()),visits:Math.floor(100*Math.random()),progress:Math.floor(100*Math.random()),status:e>.66?"relationship":e>.33?"complicated":"single"}};var w=function(){return r.a.createElement("div",{style:{margin:"1rem auto",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}},"For more examples, visit ","",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/react-tools/react-table"},r.a.createElement("img",{src:"https://github.com/react-tools/media/raw/master/logo-react-table.png",style:{width:"150px",margin:".5em auto .3em"}})))},N=function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("em",null,"Tip: Hold shift when sorting to multi-sort!"))},j=a(13),y=(a(29),r.a.Component,function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5553;return v(e).map(function(e){return Object(g.a)({},E(),{children:v(10).map(E)})})}()},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",null,r.a.createElement(j.a,{data:e,columns:[{Header:"Name",columns:[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",id:"lastName",accessor:function(e){return e.lastName}}]},{Header:"Info",columns:[{Header:"Age",accessor:"age"},{Header:"Status",accessor:"status"}]},{Header:"Stats",columns:[{Header:"Visits",accessor:"visits"}]}],defaultPageSize:10,className:"-striped -highlight"}),r.a.createElement("br",null),r.a.createElement(N,null),r.a.createElement(w,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),c.a.render(r.a.createElement(y,null),document.getElementById("calendar")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.f399bba3.chunk.js.map