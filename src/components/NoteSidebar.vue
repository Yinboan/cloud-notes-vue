<template>
  <div class="note-sidebar">
    <span v-if="curBook.id" class="btn add-note" @click="onAddNote"
      >添加笔记</span
    >
    <span v-if="!curBook.id" class="notebook-title">无笔记本</span>
    <el-dropdown
      v-if="curBook.id"
      class="notebook-title"
      @command="handleCommand"
      placement="bottom"
    >
      <span class="el-dropdown-link">
      <i class="iconfont icon-down"></i>
      {{ curBook.title }}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="notebook in notebooks"
          :command="notebook.id"
          :key="notebook.id"
          >{{ notebook.title }}</el-dropdown-item
        >
        <el-dropdown-item command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes" :key="note.id">
        <router-link :to="`/note?noteId=${note.id}&notebookId=${curBook.id}`">
          <span class="date">{{ note.updatedAtFriendly }}</span>
          <span class="title">{{ note.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["notebooks", "notes", "curBook", "curNote"]),
  },
  created() {
    this.getNotebooks() // 获取笔记本列表
      .then(() => {
        this.setCurBook({ curBookId: this.$route.query.notebookId }); // 设置当前笔记本
        if (this.curBook.id)
          return this.getNotes({ notebookId: this.curBook.id });
      })
      .then(() => {
        this.setCurNote({ curNoteId: this.$route.query.noteId });
        if (this.$route.query.noteId == this.curNote.id) return;
        this.$router.replace({
          path: "/note",
          query: {
            noteId: this.curNote.id,
            notebookId: this.curBook.id,
          },
        });
      });
  },
  methods: {
    ...mapMutations(["setCurBook", "setCurNote"]),

    ...mapActions(["getNotebooks", "getNotes", "addNote"]),

    onAddNote() {
      this.addNote({ notebookId: this.curBook.id });
    },
    handleCommand(notebookId) {
      // 笔记本改变，笔记集合改变
      if (notebookId == "trash") {
        return this.$router.push({ path: "/trash" });
      }
      // 设置选中笔记本
      this.setCurBook({ curBookId: notebookId });
      // 获取选中笔记本列表
      this.getNotes({ notebookId }).then(() => {
        this.setCurNote();

        // 没有query query一样时不替换
        // this.$router.query === undefined
        // this.$router.query.noteId != this.curNote.id
        if (this.$route.query.noteId == this.curNote.id) return;

        this.$router.replace({
          path: "/note",
          query: {
            noteId: this.curNote.id,
            notebookId: this.curBook.id,
          },
        });
      });
    },
  },
};
</script>
<style lang='less' scoped>
@import url(../assets/css/note-sidebar.less);
</style>