(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),i=(n(17),n(2)),s=n(11),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){u(e.target.value)}})})})};d.protTypes={setCategories:o.a.func.isRequired};var l=n(12),p=n(9),f=n(6),b=n.n(f),O=n(10),h=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,r,c,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=UTPdZzV5KAGcmIX4xVOLlwnI1S83QYBj&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("p",{children:t})]})},g=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(p.useEffect)((function(){h(e).then((function(e){setTimeout((function(){console.log(e),a({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,a=n.loading;return console.log(a),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:t}),a&&Object(j.jsx)("p",{children:"Loading..."}),Object(j.jsx)("div",{className:"cardGrid",children:c.map((function(e){return Object(j.jsx)(x,Object(l.a)({},e),e.id)}))})]})},m=function(){var e=Object(r.useState)(["Surfing"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:c}),Object(j.jsx)("ul",{children:n.map((function(e){return Object(j.jsx)(g,{category:e},e)}))})]})},v=document.querySelector("#root");a.a.render(Object(j.jsx)(m,{}),v)}},[[22,1,2]]]);
//# sourceMappingURL=main.6a014752.chunk.js.map