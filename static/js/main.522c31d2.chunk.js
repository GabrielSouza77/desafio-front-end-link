(this["webpackJsonpdesafio-front"]=this["webpackJsonpdesafio-front"]||[]).push([[0],{64:function(e,t,a){e.exports=a(75)},69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(69),a(13)),l=a(57),m=a(30),f=a(108),u=a(113),s=a(111),d=a(56),v=a(112),h=(a(70),a(114)),p=a(77),b=a(54),E=a.n(b),O=a(116);var g=function(e){var t=e.adicionarTarefa,a=Object(n.useState)({id:"",tarefa:"",completa:!1}),o=Object(m.a)(a,2),c=o[0],l=o[1];return r.a.createElement("form",{className:"form-todo",onSubmit:function(e){e.preventDefault(),c.tarefa.trim()&&(t(Object(i.a)(Object(i.a)({},c),{},{id:Object(O.a)()})),l(Object(i.a)(Object(i.a)({},c),{},{tarefa:""})))}},r.a.createElement(h.a,{color:"secondary",id:"outlined-secundary",label:"A fazer",name:"tarefa",type:"text",variant:"outlined",value:c.tarefa,onChange:function(e){l(Object(i.a)(Object(i.a)({},c),{},{tarefa:e.target.value}))}}),r.a.createElement(p.a,{color:"inherit",type:"submit"},r.a.createElement(E.a,null)))},j=a(109),y=a(110),k=a(115),w=a(55),S=a.n(w);var C=function(e){var t=e.todo,a=e.ativarCompleta,n=e.removerTarefa;return r.a.createElement(y.a,{style:{display:"flex"}},r.a.createElement(k.a,{checked:t.completa,onClick:function(){a(t.id)}}),r.a.createElement(s.a,{variant:"body1",style:{textDecoration:t.completa?"line-through":null}},t.tarefa),r.a.createElement(p.a,{color:"inherit",onClick:function(){n(t.id)}},r.a.createElement(S.a,null)))};var T=function(e){var t=e.todos,a=e.ativarCompleta,n=e.removerTarefa;return r.a.createElement(j.a,null,t.map((function(e){return r.a.createElement(C,{key:e.id,todo:e,ativarCompleta:a,removerTarefa:n})})))};var x=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(d.a)({palette:{type:a?"dark":"light"}}),h=Object(d.a)({palette:{type:a?"light":"dark"}}),p=Object(n.useState)([]),b=Object(m.a)(p,2),E=b[0],O=b[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("desafio-front-todos"));e&&O(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("desafio-front-todos",JSON.stringify(E))}),[E]),r.a.createElement(v.a,{theme:c},r.a.createElement(f.a,{style:{minHeight:"120vh"}},r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{checked:a,onChange:function(){return o(!a)}}),r.a.createElement(s.a,{style:{marginBottom:200,marginTop:50},variant:"h2"},"Todo List"),r.a.createElement(v.a,{theme:h},r.a.createElement(f.a,{style:{height:"10vh",width:"50vh",padding:30}},r.a.createElement(g,{adicionarTarefa:function(e){O([e].concat(Object(l.a)(E)))}}))),r.a.createElement(T,{todos:E,ativarCompleta:function(e){O(E.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{completa:!t.completa}):t})))},removerTarefa:function(e){O(E.filter((function(t){return t.id!==e})))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.522c31d2.chunk.js.map