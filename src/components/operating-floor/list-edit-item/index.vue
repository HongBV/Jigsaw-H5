<template>
  <div class="list-edit-item">
    <template v-if="!editable">
      <el-tag type="info" :disable-transitions="true">
        图片 {{ idx + 1 }}
      </el-tag>
      <span class="operation">
        <i class="el-icon-edit-outline" @click="edit()"></i>
        <i class="el-icon-remove-outline" @click="remove(idx)"></i>
      </span>
    </template>
    <template v-else>
      <div v-show="editable" class="input">
        <el-input v-model="list[idx]" size="mini" />
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
  name: "ListEditItem",
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    idx: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      editable: false,
      originalName: null
    };
  },
  methods: {
    /**
     * 删除一项
     * @param {number} idx
     */
    remove(idx) {
      this.editable = false;
      this.list.splice(idx, 1);
    },
    /**
     * 进入编辑模式
     */
    edit() {
      this.editable = true;
      this.originalName = this.list[this.idx];
    },
    /**
     * 保存编辑
     */
    saveEdit() {
      this.editable = false;
    },
    /**
     * 取消编辑
     */
    cancelEdit() {
      this.editable = false;
      this.list[this.idx] = this.originalName;
    }
  }
};
</script>
<style scoped lang="scss">
.list-edit-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  font-size: 14px;
  .operation {
    & i {
      margin-left: 10px;
      display: inline-block;
      font-size: 18px;
      color: #909399;
      cursor: pointer;
    }
  }
  .input {
    width: calc(100% - 60px);
  }
  .el-input {
    display: block;
    margin: 5px 0;
    width: 100%;
  }
  .el-tag {
    display: block;
    margin: 5px 0;
  }
}
</style>
