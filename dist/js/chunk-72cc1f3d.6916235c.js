(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72cc1f3d"],{"0028":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"detail",attrs:{id:"notebook-list"}},[e("header",[e("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.onCreate.apply(null,arguments)}}},[e("i",{staticClass:"iconfont icon-plus"}),t._v(" 新建笔记本")])]),e("main",[e("div",{staticClass:"layout"},[e("h3",[t._v("笔记本列表("+t._s(t.notebooks&&t.notebooks.length)+")")]),e("div",{staticClass:"book-list"},t._l(t.notebooks,(function(o){return e("router-link",{key:o.id,staticClass:"notebook",attrs:{to:"/note?notebookId="+o.id}},[e("div",[e("span",{staticClass:"iconfont icon-notebook"}),t._v(" "+t._s(o.title)+" "),e("span",[t._v(t._s(o.noteCounts))]),e("span",{staticClass:"action",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onEdit(o)}}},[t._v("编辑")]),e("span",{staticClass:"action",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onDelete(o)}}},[t._v("删除")]),e("span",{staticClass:"date"},[t._v(t._s(o.createdAtFriendly))])])])})),1)])])])},i=[],s=e("5530"),a=(e("d3b7"),e("2f62")),c={data:function(){return{}},computed:Object(s["a"])({},Object(a["c"])(["notebooks"])),created:function(){this.checkLogin({path:"/login"}),this.getNotebooks()},methods:Object(s["a"])(Object(s["a"])({},Object(a["b"])(["getNotebooks","addNotebook","updateNotebook","deleteNotebook","checkLogin"])),{},{onCreate:function(){var t=this;this.$prompt("输入新笔记本标题","创建笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputErrorMessage:"标题不能为空，且不超过30个字符"}).then((function(o){t.addNotebook({title:o.value})}),(function(o){return t.$message.error("用户取消输入"),Promise.resolve(o)}))},onEdit:function(t){var o=this;this.$prompt("输入笔记本新标题","修改笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputErrorMessage:"标题不能为空，且不超过30个字符",inputValue:t.title}).then((function(e){o.updateNotebook({notebookId:t.id,title:e.value})}),(function(t){return o.$message.error("用户取消输入"),Promise.resolve(t)}))},onDelete:function(t){var o=this;this.$confirm("确认要删除笔记本吗","删除笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.deleteNotebook({notebookId:t.id})}))}})},r=c,u=(e("f0c5"),e("2877")),l=Object(u["a"])(r,n,i,!1,null,"6f730d94",null);o["default"]=l.exports},"1e79":function(t,o,e){},f0c5:function(t,o,e){"use strict";e("1e79")}}]);
//# sourceMappingURL=chunk-72cc1f3d.6916235c.js.map