(function(t){function e(e){for(var o,r,c=e[0],i=e[1],s=e[2],d=0,l=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a={app:0},u=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-19e85808":"ca0e2c14","chunk-46e425d2":"8e72a51e","chunk-2b9f26e0":"122d0c81","chunk-3d47ae45":"bdbef3ea","chunk-72cc1f3d":"6916235c"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-19e85808":1,"chunk-2b9f26e0":1,"chunk-3d47ae45":1,"chunk-72cc1f3d":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-19e85808":"b64e0def","chunk-46e425d2":"31d6cfe0","chunk-2b9f26e0":"da349bce","chunk-3d47ae45":"ce357f9c","chunk-72cc1f3d":"ef72ea63"}[t]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===a))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===o||d===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[t],f.parentNode.removeChild(f),n(u)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var u=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"2b95":function(t,e){t.exports={baseURL:"//note-server.hunger-valley.com"}},"54d5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("sidebar"),n("router-view")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("avatar"),n("div",{staticClass:"icons"},[n("router-link",{attrs:{to:"/note",title:"笔记"}},[n("i",{staticClass:"iconfont icon-note"})]),n("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[n("i",{staticClass:"iconfont icon-notebook"})]),n("router-link",{attrs:{to:"/trash",title:"回收站"}},[n("i",{staticClass:"iconfont icon-trash"})])],1),n("div",{staticClass:"logout",on:{click:t.onLogout}},[n("i",{staticClass:"iconfont icon-logout"})])],1)},c=[],i=n("5530"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{title:t.username}},[t._v(t._s(t.slug))])},d=[],l=n("2f62"),f={data:function(){return{}},methods:Object(i["a"])({},Object(l["b"])({setUser:"checkLogin"})),computed:Object(i["a"])({},Object(l["c"])(["username","slug"])),created:function(){this.setUser()}},h=f,p=(n("5cbd"),n("2877")),b=Object(p["a"])(h,s,d,!1,null,"856983b0",null),m=b.exports,k={components:{avatar:m},methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["logout"])),{},{onLogout:function(){this.logout({path:"/login"})}})},v=k,g=(n("c801"),Object(p["a"])(v,u,c,!1,null,"5c1c6632",null)),N=g.exports,I={components:{sidebar:N}},T=I,E=(n("034f"),Object(p["a"])(T,r,a,!1,null,null,null)),A=E.exports,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["default"].use(w["a"]);var y=w["a"].prototype.push;w["a"].prototype.push=function(t){return y.call(this,t).catch((function(t){return t}))};var O=[{path:"/login",component:function(){return n.e("chunk-19e85808").then(n.bind(null,"578a"))}},{path:"/",alias:"/notebooks",component:function(){return n.e("chunk-72cc1f3d").then(n.bind(null,"0028"))}},{path:"/note",component:function(){return Promise.all([n.e("chunk-46e425d2"),n.e("chunk-3d47ae45")]).then(n.bind(null,"128e"))}},{path:"/trash",component:function(){return Promise.all([n.e("chunk-46e425d2"),n.e("chunk-2b9f26e0")]).then(n.bind(null,"137e"))}}],P=new w["a"]({routes:O}),L=(n("7db0"),n("4de4"),n("4e82"),n("159b"),n("ac1f"),n("5319"),n("bc3a")),D=n.n(L),j=n("2b95"),C=n("5c96"),_=n.n(C);function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,r){var a={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?a.params=n:a.data=n,D()(a).then((function(t){var e=a.method.toLowerCase(),n="get"!==e&&"patch"!==e;200===t.status?(n&&C["Message"].success(t.data.msg),o(t.data)):(n&&C["Message"].error(t.data.msg),r(t.data))})).catch((function(t){C["Message"].error("网络异常"),r({msg:"网络异常"})}))}))}D.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",D.a.defaults.baseURL=j["baseURL"],D.a.defaults.withCredentials=!0;var U=n("53ca");function G(t){var e="object"===Object(U["a"])(t)?t:new Date(t),n=e.getTime(),o=Date.now(),r=o-n,a="";switch(!0){case r<6e4:a="刚刚";break;case r<36e5:a=Math.floor(r/6e4)+"分钟前";break;case r<864e5:a=Math.floor(r/36e5)+"小时前";break;default:a=Math.floor(r/864e5)+"天前"}return a}var F={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},x={getAll:function(){return new Promise((function(t,e){S(F.GET).then((function(e){e.data=e.data.sort((function(t,e){return t.createdAt<e.createdAt?1:-1})),e.data.forEach((function(t){t.createdAtFriendly=G(t.createdAt),t.updatedAtFriendly=G(t.updatedAt)})),t(e)})).catch((function(t){e(t)}))}))},updateNotebook:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""},n=e.title,o=void 0===n?"":n;return S(F.UPDATE.replace(":id",t),"PATCH",{title:o})},deleteNotebook:function(t){return S(F.DELETE.replace(":id",t),"DELETE")},addNotebook:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},e=t.title,n=void 0===e?"":e;return new Promise((function(t,e){S(F.ADD,"POST",{title:n}).then((function(e){e.data.createdAtFriendly=G(e.data.createdAt),e.data.updatedAtFriendly=G(e.data.updatedAt),t(e)})).catch((function(t){e(t)}))}))}},M={notebooks:null,curBookId:null},R={notebooks:function(t){return t.notebooks||[]},curBook:function(t){return Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find((function(e){return e.id==t.curBookId}))||{}:t.notebooks[0]||{}:{}}},B={setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){var n=t.notebooks.find((function(t){return t.id===e.notebookId}))||{};n.title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter((function(t){return t.id!==e.notebookId}))},setCurBook:function(t,e){t.curBookId=e.curBookId}},$={getNotebooks:function(t){var e=t.commit,n=t.state;return null!==n.notebooks?Promise.resolve():x.getAll().then((function(t){e("setNotebooks",{notebooks:t.data})}))},addNotebook:function(t,e){var n=t.commit;x.addNotebook({title:e.title}).then((function(t){n("addNotebook",{notebook:t.data})}))},updateNotebook:function(t,e){var n=t.commit;x.updateNotebook(e.notebookId,{title:e.title}).then((function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title})}))},deleteNotebook:function(t,e){var n=t.commit,o=e.notebookId;return x.deleteNotebook(o).then((function(t){n("deleteNotebook",{notebookId:o})}))}},H={state:M,getters:R,mutations:B,actions:$},V=(n("d81d"),{GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"}),q={getAll:function(t){var e=t.notebookId;return new Promise((function(t,n){S(V.GET.replace(":notebookId",e)).then((function(e){e.data=e.data.map((function(t){return t.createdAtFriendly=G(t.createdAt),t.updatedAtFriendly=G(t.updatedAt),t})).sort((function(t,e){return t.updatedAt<e.updatedAt})),t(e)})).catch((function(t){n(t)}))}))},updateNote:function(t,e){var n=t.noteId,o=e.title,r=e.content;return S(V.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},deleteNote:function(t){var e=t.noteId;return S(V.DELETE.replace(":noteId",e),"DELETE")},addNote:function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,a=n.content,u=void 0===a?"":a;return new Promise((function(t,n){S(V.ADD.replace(":notebookId",e),"POST",{title:r,content:u}).then((function(e){e.data.createdAtFriendly=G(e.data.createdAt),e.data.updatedAtFriendly=G(e.data.updatedAt),t(e)})).catch((function(t){n(t)}))}))}},J={notes:null,curNoteId:null},K={notes:function(t){return t.notes||[]},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find((function(e){return e.id==t.curNoteId}))||{}:t.notes[0]||{}:{}}},z={setNote:function(t,e){t.notes=e.notes},addNote:function(t,e){t.notes.unshift(e.note)},updateNote:function(t,e){var n=t.notes.find((function(t){return t.id===e.noteId}))||{};n.title=e.title,n.content=e.content},deleteNote:function(t,e){t.notes=t.notes.filter((function(t){return t.id!==e.noteId}))},setCurNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curNoteId=e.curNoteId}},Q={getNotes:function(t,e){var n=t.commit,o=e.notebookId;return q.getAll({notebookId:o}).then((function(t){n("setNote",{notes:t.data})}))},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return console.log(o,r,a),q.addNote({notebookId:o},{title:r,content:a}).then((function(t){console.log("add success...",t),n("addNote",{note:t.data})}))},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return q.updateNote({noteId:o},{title:r,content:a}).then((function(t){n("updateNote",{noteId:o,title:r,content:a})}))},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return console.log("del ac"),q.deleteNote({noteId:o}).then((function(t){n("deleteNote",{noteId:o})}))}},W={state:J,getters:K,mutations:z,actions:Q},X={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},Y={getAll:function(){return new Promise((function(t,e){S(X.GET).then((function(e){e.data=e.data.sort((function(t,e){return t.createdAt<e.createdAt})),e.data.forEach((function(t){t.createdAtFriendly=G(t.createdAt),t.updatedAtFriendly=G(t.updatedAt)})),t(e)})).catch((function(t){e(t)}))}))},deleteNote:function(t){var e=t.noteId;return S(X.DELETE.replace(":noteId",e),"DELETE")},revertNote:function(t){var e=t.noteId;return S(X.REVERT.replace(":noteId",e),"PATCH")}},Z={trashNotes:null,curTrashNoteId:null},tt={trashNotes:function(t){return t.trashNotes||[]},curTrashNote:function(t,e){return t.curTrashNoteId?t.trashNotes.find((function(e){return e.id==t.curTrashNoteId}))||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){var r=o.notebooks.find((function(t){return t.id==e.curTrashNote.notebookId}))||{};return r.title||""}},et={setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},addTrashNote:function(t,e){setTrashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter((function(t){return t.id!=e.noteId}))},setCurTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curTrashNoteId=e.curTrashNoteId}},nt={getTrashNotes:function(t){var e=t.commit;return Y.getAll().then((function(t){e("setTrashNotes",{trashNotes:t.data})}))},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Y.deleteNote({noteId:o}).then((function(t){n("deleteTrashNote",{noteId:o})}))},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return Y.revertNote({noteId:o}).then((function(t){n("deleteTrashNote",{noteId:o}),C["Message"].success(t.msg)}))}},ot={state:Z,getters:tt,mutations:et,actions:nt},rt={REGISTER:"/auth/register",LOGIN:"/auth/login",LOGOUT:"/auth/logout",GET_INFO:"/auth"},at={register:function(t){var e=t.username,n=t.password;return S(rt.REGISTER,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return S(rt.LOGIN,"POST",{username:e,password:n})},logout:function(){return S(rt.LOGOUT)},getInfo:function(){return S(rt.GET_INFO)}};window.router=P;var ut={user:null},ct={username:function(t){return null===t.user?"未登录":t.user.username},slug:function(t){return null===t.user?"未":t.user.username.charAt(0)}},it={setUser:function(t,e){t.user=e.user}},st={login:function(t,e){var n=t.commit,o=e.username,r=e.password;return at.login({username:o,password:r}).then((function(t){n("setUser",{user:t.data})}))},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return at.register({username:o,password:r}).then((function(t){n("setUser",{user:t.data})}))},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/login"};return at.logout().then((function(t){e("setUser",{user:null}),console.log(n),P.push(n)}))},checkLogin:function(t,e){var n=t.commit;return at.getInfo().then((function(t){t.isLogin?n("setUser",{user:t.data}):(console.log("jump"),"/login"!==P.currentRoute.path&&P.push("/login"))}))}},dt={state:ut,getters:ct,mutations:it,actions:st};o["default"].use(l["a"]);var lt=new l["a"].Store({modules:{notebook:H,note:W,trash:ot,user:dt}});n("a83d");o["default"].config.productionTip=!1,o["default"].use(_.a),window.$VM=new o["default"]({router:P,store:lt,render:function(t){return t(A)}}).$mount("#app")},"5cbd":function(t,e,n){"use strict";n("cb24")},"85ec":function(t,e,n){},a83d:function(t,e,n){},c801:function(t,e,n){"use strict";n("54d5")},cb24:function(t,e,n){}});
//# sourceMappingURL=app.c334c7d0.js.map