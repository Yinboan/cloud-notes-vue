<template>
  <div id="note" class="detail">
    <note-sidebar @update:notes="(val) => (notes = val)"></note-sidebar>
    <div class="note-detail">
      <div class="note-empty" v-show="!curNote.id">请选择笔记</div>
      <div class="note-detail-ct" v-show="curNote.id">
        <div class="note-bar">
          <span> 创建日期: {{ curNote.createdAtFriendly }}</span>
          <span> 更新日期: {{ curNote.updatedAtFriendly }}</span>
          <span> {{ statusText }}</span>
          <span class="iconfont icon-delete" @click="onDeleteNote"></span>
          <span
            class="iconfont" :class="!isShowPreview?'icon-edit':'icon-eye'"
            @click="isShowPreview = !isShowPreview"
          > </span>
        </div>
        <div class="note-title">
          <input
            type="text"
            v-model:value="curNote.title"
            @input="onUpdateNote"
            @keydown="statusText = '正在输入...'"
            placeholder="输入标题"
          />
        </div>
       <div class="editor">
          <textarea v-show="!isShowPreview"  v-model:value="curNote.content" @input.lazy="onUpdateNote" @keydown="statusText='正在输入...'" placeholder="输入内容, 支持 markdown 语法"></textarea>
          <div class="preview markdown-body" v-html="previewContent" v-show="isShowPreview">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters,  mapActions, mapMutations } from 'vuex'
import NotesideBar from '@/components/NoteSidebar'
import _ from 'lodash'
import MarkdownIt from 'markdown-it'

let md = new MarkdownIt();

export default {
  data() {
    return {
      statusText: "笔记未改动",
      isShowPreview: false,
    };
  },
  components: {
    "note-sidebar": NotesideBar,
  },
  created() {
        this.checkLogin({ path: '/login' })
  },
  methods: {
        ...mapMutations([
      'setCurNote'
      ]),

    ...mapActions([
      'updateNote',
      'deleteNote',
      'checkLogin'
      ]),
    onUpdateNote: _.debounce(function() {
      this.updateNote({ noteId: this.curNote.id, title: this.curNote.title, content: this.curNote.content })
        .then(data => {
          this.statusText = '已保存'
        }).catch(data => {
          this.statusText = '保存出错'
        })
    }, 300),

    onDeleteNote() {
      this.deleteNote({ noteId: this.curNote.id }).then((data) => {
        this.$router.replace({ path: "/note" });
      });
    },
  },

  beforeRouteUpdate(to, from, next) {
    this.setCurNote({curNoteId: to.query.noteId})
    next();
  },
  computed: {
    ...mapGetters([
      'notes',
      'curNote',
      'curBook'
      ]),
    previewContent() {
      return md.render(this.curNote.content||'')
    }
  },
};
</script>
<style lang="less">
@import url(../assets/css/note-detail.less);

#note {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;
}
</style>
