<template>
  <div class="tab-edit-item">
    <!-- 展示 -->
    <template v-if="!editable">
      <el-tag type="info" :disable-transitions="true">{{ tab.title }}</el-tag>
      <span class="content">{{ tab.content }}</span>
      <span class="operation">
        <i class="el-icon-edit-outline" @click="edit()"></i>
        <i class="el-icon-remove-outline" @click="remove(idx)"></i>
      </span>
    </template>
    <!-- 编辑 -->
    <template v-else>
      <div class="editor">
        <div class="editor__item">
          <el-tag size="medium">标签</el-tag>
          <el-input
            v-model="newTab.title"
            size="mini"
            maxlength="5"
            show-word-limit
          />
        </div>
        <div class="editor__item">
          <el-tag size="medium">内容</el-tag>
          <el-input
            v-model="newTab.content"
            resize="none"
            type="textarea"
            :rows="3"
          />
        </div>
        <div class="editor__item">
          <el-tag size="medium">徽标</el-tag>
          <el-input
            v-model="newTab.badge"
            size="mini"
            maxlength="5"
            show-word-limit
          />
        </div>
        <div class="editor__item">
          <el-tag size="medium">红点</el-tag>
          <el-switch
            v-model="newTab.dot"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </div>
        <div class="editor__item">
          <el-tag size="medium">禁用</el-tag>
          <el-switch
            v-model="newTab.disabled"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </div>
      </div>
      <span class="operation">
        <i class="el-icon-circle-check" @click="saveEdit()"></i>
        <i class="el-icon-circle-close" @click="cancelEdit()"></i>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: "TabEditItem",
  props: {
    tab: {
      type: Object,
      required: true,
      default: () => ({})
    },
    idx: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      editable: false,
      newTab: {}
    };
  },
  methods: {
    /**
     * 删除一项
     * @param {number} idx
     */
    remove(idx) {
      this.editable = false;
      this.$emit("remove", idx);
    },
    /**
     * 进入编辑模式
     */
    edit() {
      this.editable = true;
      this.newTab = { ...this.tab };
    },
    /**
     * 保存编辑
     */
    saveEdit() {
      this.editable = false;
      const { title, content, badge, dot, disabled } = this.newTab;
      this.tab.title = title;
      this.tab.content = content;
      this.tab.badge = badge;
      this.tab.dot = dot;
      this.tab.disabled = disabled;
    },
    /**
     * 取消编辑
     */
    cancelEdit() {
      this.editable = false;
    }
  }
};
</script>
<style scoped lang="scss">
.tab-edit-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  font-size: 14px;
  .content {
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .operation {
    & i {
      margin-left: 5px;
      display: inline-block;
      font-size: 18px;
      color: #909399;
      cursor: pointer;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  .editor {
    width: calc(100% - 50px);
    &__item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      &:nth-child(1) {
        margin-top: 5px;
      }
      .el-input,
      .el-switch,
      .el-textarea {
        margin: 0;
        margin-left: 10px;
      }
      .el-tag {
        margin: 0;
        max-width: 60px;
        text-align: center;
      }
      .el-switch {
        height: 28px;
      }
      .el-textarea {
        font-size: 12px;
        word-break: break-all;
      }
    }
  }
}
</style>
