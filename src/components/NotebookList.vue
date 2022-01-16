<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click.prevent="onCreate"
        ><i class="iconfont icon-plus"></i> 新建笔记本</a
      >
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{ notebooks && notebooks.length }})</h3>
        <div class="book-list">
          <router-link
            v-for="notebook in notebooks"
            :to="`/note?notebookId=${notebook.id}`"
            class="notebook"
            :key="notebook.id"
          >
            <div>
              <span class="iconfont icon-notebook"></span> {{ notebook.title }}
              <span>{{ notebook.noteCounts }}</span>
              <span class="action" @click.stop.prevent="onEdit(notebook)"
                >编辑</span
              >
              <span class="action" @click.stop.prevent="onDelete(notebook)"
                >删除</span
              >
              <span class="date">{{ notebook.createdAtFriendly }}</span>
              <!-- <span class="date">{{ notebook }}</span> -->
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["notebooks"]),
  },
  created() {
    this.checkLogin({ path: "/login" });
    this.getNotebooks();
  },
  methods: {
    ...mapActions([
      "getNotebooks",
      "addNotebook",
      "updateNotebook",
      "deleteNotebook",
      "checkLogin",
    ]),
    onCreate() {
      this.$prompt("输入新笔记本标题", "创建笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: "标题不能为空，且不超过30个字符",
      }).then(
        (res) => {
          this.addNotebook({ title: res.value });
        },
        (res) => {
          this.$message.error("用户取消输入");
          return Promise.resolve(res);
        }
      );
    },
    onEdit(el) {
      this.$prompt("输入笔记本新标题", "修改笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.{1,30}$/,
        inputErrorMessage: "标题不能为空，且不超过30个字符",
        inputValue: el.title,
      }).then(
        (res) => {
          //拿到新标题
          this.updateNotebook({ notebookId: el.id, title: res.value });
        },
        (res) => {
          //没拿到新标题
          this.$message.error("用户取消输入");
          return Promise.resolve(res);
        }
      );
    },
    onDelete(el) {
      this.$confirm("确认要删除笔记本吗", "删除笔记本", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.deleteNotebook({ notebookId: el.id });
      });
    },
  },
};
</script>
<style lang='less' scoped>
@import url(../assets/css/notebook-list.less);
</style>