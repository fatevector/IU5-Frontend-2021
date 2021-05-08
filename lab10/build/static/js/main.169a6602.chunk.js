(this.webpackJsonplab10=this.webpackJsonplab10||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchData",(function(){return h}));var c={};n.r(c),n.d(c,"cleanSearch",(function(){return E})),n.d(c,"updateSearch",(function(){return p}));var r,l=n(14),s=n.n(l),o=(n(26),n(10)),i=n(0),u=n(11),d=n(8),j=n(12);!function(e){e.FETCH_USER="FETCH_USER",e.FETCH_USER_SUCCESS="FETCH_USER_SUCCESS",e.FETCH_USER_ERROR="FETCH_USER_ERROR"}(r||(r={}));var b,h=function(e){return function(t){t({type:r.FETCH_USER});fetch("https://api.github.com/users/".concat(e)).then((function(e){if(e.status>=200&&e.status<300)return e;throw new Error(e.statusText)})).then((function(e){return e.json()})).then((function(e){t({type:r.FETCH_USER_SUCCESS,payload:e})})).catch((function(e){return t({type:r.FETCH_USER_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}))}};!function(e){e.SEARCH_CLEAN="SEARCH_CLEAN",e.SEARCH_UPDATE="SEARCH_UPDATE"}(b||(b={}));var E=function(){return{type:b.SEARCH_CLEAN}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:b.SEARCH_UPDATE,payload:e}},O=Object(j.a)(Object(j.a)({},a),c),f=function(){var e=Object(u.b)();return Object(d.bindActionCreators)(O,e)},S=u.c,C=n(1),_=function(){var e=S((function(e){return e.user})),t=e.data,n=e.error,a=e.loading,c=S((function(e){return e.search})).search,r=f(),l=r.fetchData,s=r.cleanSearch;return Object(i.useEffect)((function(){l(c)}),[]),a?Object(C.jsx)("div",{className:"content",children:Object(C.jsx)("div",{className:"loading",children:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):n?Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("div",{className:"error",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),Object(C.jsx)(o.b,{to:"/lab10/build/",children:Object(C.jsx)("button",{className:"button",onClick:s,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})]}):Object(C.jsxs)("div",{className:"content",children:[null!==t?Object(C.jsxs)("div",{className:"usercard",children:[Object(C.jsx)("img",{src:t.avatar_url,alt:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430",className:"avatar"}),Object(C.jsx)("h1",{className:"login",children:t.login}),Object(C.jsxs)("h3",{children:[t.public_repos," repositories"]}),Object(C.jsxs)("h3",{children:[t.followers," followers"]}),Object(C.jsxs)("h3",{children:[t.following," following"]}),Object(C.jsxs)("div",{children:["Created at ",t.updated_at]})]}):Object(C.jsx)("div",{}),Object(C.jsx)(o.b,{to:"/lab10/build/",children:Object(C.jsx)("button",{className:"button",onClick:s,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})]})},x=n(3),v=function(){var e=S((function(e){return e.search})).search,t=f().updateSearch,n=Object(x.f)();return Object(C.jsx)("div",{className:"content",children:Object(C.jsxs)("div",{className:"search-form",children:[Object(C.jsx)("h2",{children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(C.jsxs)("div",{className:"input-form",children:[Object(C.jsx)("input",{className:"input",type:"text",placeholder:"  \u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",onChange:function(e){return t(e.target.value)},onKeyPress:function(t){"enter"===t.code.toLowerCase()&&""!==e&&n.push("/lab10/build/user")}}),Object(C.jsx)("button",{className:"button",onClick:function(){""!==e&&n.push("/lab10/build/user")},children:"\u041f\u043e\u0438\u0441\u043a"})]})]})})},R=function(){return Object(C.jsx)(o.a,{children:Object(C.jsx)("div",{children:Object(C.jsxs)(x.c,{children:[Object(C.jsx)(x.a,{exact:!0,path:"/lab10/build/",children:Object(C.jsx)(v,{})}),Object(C.jsx)(x.a,{path:"/lab10/build/user",children:Object(C.jsx)(_,{})})]})})})},g=n(20),m={data:null,loading:!1,error:null},y={search:""},H=Object(d.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.FETCH_USER:return{loading:!0,error:null,data:null};case r.FETCH_USER_SUCCESS:return{loading:!1,error:null,data:Object(j.a)(Object(j.a)({},e.data),{},{avatar_url:t.payload.avatar_url,login:t.payload.login,followers:t.payload.followers.toString(),following:t.payload.following.toString(),created_at:t.payload.created_at,updated_at:t.payload.updated_at,public_repos:t.payload.public_repos.toString()})};case r.FETCH_USER_ERROR:return{loading:!1,error:t.payload,data:null};default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SEARCH_CLEAN:return{search:""};case b.SEARCH_UPDATE:return{search:t.payload};default:return e}}}),U=n(21),N=Object(d.createStore)(H,Object(U.composeWithDevTools)(Object(d.applyMiddleware)(g.a)));s.a.render(Object(C.jsx)(u.a,{store:N,children:Object(C.jsx)(R,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.169a6602.chunk.js.map