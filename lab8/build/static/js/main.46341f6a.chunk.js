(this.webpackJsonplab8=this.webpackJsonplab8||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(6),r=n.n(i),a=(n(12),n(7)),u=n(2),s=n(0);var d=function(e){var t=e.createTodo,n=c.a.useState(""),o=Object(u.a)(n,2),i=o[0],r=o[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim()&&(t(i),r(""))},children:[Object(s.jsx)("input",{value:i,onChange:function(e){return r(e.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"})]})};var j=function(e){var t=e.todo,n=(e.index,e.onChange),o=e.removeTodo,i=[];t.completed&&i.push("completed"),console.log(t);var r=c.a.useState(t.title),a=Object(u.a)(r,2),d=a[0],j=a[1];return Object(s.jsxs)("li",{className:"item",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("input",{type:"checkbox",onChange:function(){return n(t.id)},checked:t.completed}),Object(s.jsx)("span",{children:" "}),Object(s.jsx)("input",{id:"todo-input",className:i.join(" "),type:"text",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(s.jsx)("button",{className:"delete",onClick:function(){return o(t.id)},children:"\xd7"})]})};var l=function(e){return Object(s.jsx)("ul",{children:e.todos.map((function(t,n){return Object(s.jsx)(j,{todo:t,index:n,onChange:e.onChange,removeTodo:e.removeTodo},t.id)}))})};var b=function(){var e=c.a.useState([]),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"}),Object(s.jsx)(l,{todos:n,onChange:function(e){o(n.map((function(t){return e===t.id&&(t.completed=!t.completed),t})))},removeTodo:function(e){o(n.filter((function(t){return e!==t.id})))}}),Object(s.jsx)(d,{createTodo:function(e){o([].concat(Object(a.a)(n),[{id:Date.now(),completed:!1,title:e}]))}})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.46341f6a.chunk.js.map