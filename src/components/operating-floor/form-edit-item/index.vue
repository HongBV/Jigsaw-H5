<template>
  <div class="form-edit-item">
    <template v-if="!editable">
      <span>{{ formItem.type | filterType }}</span>
      <span>{{ formItem.label }}</span>
      <span class="operation">
        <i class="el-icon-edit-outline" @click="edit()"></i>
        <i class="el-icon-remove-outline" @click="remove(idx)"></i>
      </span>
    </template>
    <template v-else>
      <div>
        <p>字段名</p>
        <p v-if="showSelect">选项</p>
      </div>
      <div v-show="editable" class="input">
        <el-input v-model="formItem.label" size="mini" />
        <el-select
          v-if="showSelect"
          v-model="formItem.options"
          size="mini"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请输入选项"
        >
          <el-option
            v-for="item in formItem.options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </div>
      <span class="operation">
        <i class="el-icon-circle-check" @click="saveEdit()"></i>
        <i class="el-icon-circle-close" @click="cancelEdit()"></i>
      </span>
    </template>
  </div>
</template>

<script>
const typeMap = {
  text: "文本框",
  switch: "开关项",
  radio: "单选项",
  checkbox: "多选项"
};

export default {
  name: "FormEditItem",
  props: {
    form: {
      type: Array,
      required: true,
      default: () => []
    },
    formItem: {
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
      originalName: null,
      originalOptions: null
    };
  },
  computed: {
    showSelect() {
      return ["checkbox", "radio"].includes(this.formItem.type);
    }
  },
  filters: {
    filterType(type) {
      return `【${typeMap[type]}】`;
    }
  },
  methods: {
    /**
     * 删除一项
     * @param {number} idx
     */
    remove(idx) {
      this.editable = false;
      this.form.splice(idx, 1);
    },
    /**
     * 进入编辑模式
     */
    edit() {
      this.editable = true;
      this.originalName = this.formItem.label;
      if (!this.showSelect) return;
      this.originalOptions = JSON.parse(JSON.stringify(this.formItem.options));
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
      this.formItem.label = this.originalName;
      if (!this.showSelect) return;
      this.formItem.options = JSON.parse(JSON.stringify(this.originalOptions));
    }
  }
};
</script>
<style scoped lang="scss">
.form-edit-item {
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
      cursor: pointer;
    }
  }
  .input {
    width: calc(100% - 140px);
  }
  .el-input {
    margin: 5px 0;
    width: 100%;
  }
}
</style>
