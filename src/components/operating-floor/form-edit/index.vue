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
    <form-edit-item
      v-for="(item, idx) in form"
      :key="idx"
      :form="form"
      :formItem="item"
      :idx="idx"
    >
    </form-edit-item>
  </div>
</template>

<script>
import FormEditItem from "@/components/operating-floor/form-edit-item";
// 各表单项默认配置
const defaultConfig = {
  text: {
    label: "文本框",
    value: "",
    type: "text"
  },
  switch: {
    label: "开关项",
    value: "",
    type: "switch"
  },
  radio: {
    label: "单选项",
    value: "",
    type: "radio",
    options: ["选项1", "选项2"]
  },
  checkbox: {
    label: "多选项",
    value: [],
    type: "checkbox",
    options: ["选项1", "选项2"]
  }
};

export default {
  name: "FormEdit",
  components: {
    FormEditItem
  },
  props: {
    form: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     * 添加一项表单项
     * @param {string} type
     */
    addItem(type) {
      this.form.push(defaultConfig[type]);
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
  .form-edit-item {
    border-top: 1px solid #cccccc;
    &:nth-last-child(1) {
      border-bottom: 1px solid #cccccc;
    }
  }
}
</style>
