<template>
  <div id="trash" class="detail">
    <div class="note-sidebar">
      <h3 class="notebook-title">回收站</h3>
      <div class="menu">
        <div>更新时间</div>
        <div>标题</div>
      </div>
      <ul class="notes">
        <li v-for="note in trashNotes">
          <router-link :to="`/trash?noteId=${note.id}`">
            <span class="date">{{ note.updatedAtFriendly }}</span>
            <span class="title">{{ note.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="note-detail">
      <div class="note-bar" v-if="true">
        <span> 创建日期: {{ curTrashNote.createdAtFriendly }}</span>
        <span> | </span>
        <span> 更新日期: {{ curTrashNote.updatedAtFriendly }}</span>
        <span> | </span>
        <span> 所属笔记本: {{ belongTo }}</span>

        <a class="btn action" @click="onRevert">恢复</a>
        <a class="btn action" @click="onDelete">彻底删除</a>
      </div>
      <div class="note-title">
        <span>{{ curTrashNote.title }}</span>
      </div>
      <div class="editor">
        <div class="preview markdown-body" v-html="compiledMarkdown"></div>
      </div>
    </div>
  </div>
</template>
<script>
import MarkdownIt from "markdown-it";
import { mapGetters, mapMutations, mapActions } from "vuex";

let md = new MarkdownIt();
export default {
  data() {
    return {};
  },
  created() {
    this.checkLogin({ path: "/login" });
    this.getNotebooks();
    this.getTrashNotes().then(() => {
      this.setCurTrashNote({ curTrashNoteId: this.$route.query.noteId });
      if (this.$route.query.noteId == this.curTrashNote.id) return;
      this.$router.replace({
        path: "/trash",
        query: { noteId: this.curTrashNote.id },
      });
    });
  },
  computed: {
    ...mapGetters(["trashNotes", "curTrashNote", "belongTo"]),
    compiledMarkdown() {
      return md.render(this.curTrashNote.content || "");
    },
  },
  methods: {
    ...mapMutations(["setCurTrashNote"]),

    ...mapActions([
      "checkLogin",
      "deleteTrashNote",
      "revertTrashNote",
      "getTrashNotes",
      "getNotebooks",
    ]),

    onDelete() {
      console.log({ noteId: this.curTrashNote.id });
      this.deleteTrashNote({ noteId: this.curTrashNote.id });
    },

    onRevert() {
      this.revertTrashNote({ noteId: this.curTrashNote.id });
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.setCurTrashNote({ curTrashNoteId: to.query.noteId });
    next();
  },
};
</script>
<style lang='less' scoped>
@import url(../assets/css/note-sidebar.less);
@import url(../assets/css/note-detail.less);

#trash {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;

  .note-bar {
    .action {
      float: right;
      margin-left: 10px;
      padding: 2px 4px;
      font-size: 12px;
    }
  }
}
</style>
