<template>
  <div class="form-edit">
    <header>
      <span class="title">表单控件</span>
      <el-popover
        placement="bottom"
        title="选择控件类型"
        width="310"
        trigger="hover"
      >
        <el-button type="primary" size="mini" slot="reference">
          增加控件
        </el-button>
        <div>
          <el-button @click="addItem('text')" size="mini">文本框</el-button>
          <el-button @click="addItem('switch')" size="mini">开关项</el-button>
          <el-button @click="addItem('radio')" size="mini">单选项</el-button>
          <el-button @click="addItem('checkbox')" size="mini">多选项</el-button>
        </div>
      </el-popover>
    </header>
    <div v-for="(item, index) in form" :key="index" class="form-item">
      <span class="label">{{ getLabel(item) }}</span>
      <span class="operation">
        <i class="el-icon-edit-outline" @click="editItem(index)"></i>
        <i class="el-icon-remove-outline" @click="removeItem(index)"></i>
      </span>
    </div>
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
  name: "FormEdit",
  props: {
    form: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addItem(type) {
      this.form.push({
        label: typeMap[type],
        value: "",
        type
      });
    },
    removeItem(idx) {
      this.form.splice(idx, 1);
    },
    editItem(idx) {
      this.form.splice(idx, 0);
    },
    getLabel(formItem) {
      const type = typeMap[formItem.type];
      const label = formItem.label;
      return `【${type}】${label}`;
    }
  }
};
</script>
<style scoped lang="scss">
.form-edit {
  width: 100%;
  header {
    margin: 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 600;
    }
  }
  .form-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    .operation {
      & i {
        margin-left: 10px;
        display: inline-block;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>
