<template>
  <div class="form-edit">
    <header>
      <span class="title">表单控件</span>
      <el-popover
        placement="left"
        width="310"
        trigger="hover"
        popper-class="add-field"
      >
        <el-button type="primary" size="mini" slot="reference">
          增加控件
        </el-button>
        <div class="add-field__btns">
          <el-tag @click="addItem('text')">文本框</el-tag>
          <el-tag @click="addItem('switch')">开关项</el-tag>
          <el-tag @click="addItem('radio')">单选项</el-tag>
          <el-tag @click="addItem('checkbox')">多选项</el-tag>
          <el-tag @click="addItem('stepper')">步进器</el-tag>
          <el-tag @click="addItem('rate')">评分项</el-tag>
          <el-tag @click="addItem('picker')">选择器</el-tag>
          <el-tag @click="addItem('datetimePicker')">时间选择器</el-tag>
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
      const defaultConfig = {
        text: {
          label: "文本框",
          value: "",
          type: "text",
          typeName: "文本框"
        },
        switch: {
          label: "开关项",
          value: "",
          type: "switch",
          typeName: "开关项"
        },
        radio: {
          label: "单选框",
          value: "",
          type: "radio",
          typeName: "单选框",
          options: ["选项1", "选项2"]
        },
        checkbox: {
          label: "复选框",
          value: [],
          type: "checkbox",
          typeName: "复选框",
          options: ["选项1", "选项2"]
        },
        stepper: {
          label: "步进器",
          value: 1,
          type: "stepper",
          typeName: "步进器"
        },
        rate: {
          label: "评分项",
          value: 1,
          type: "rate",
          typeName: "评分项"
        },
        picker: {
          label: "选择器",
          value: "",
          type: "picker",
          typeName: "选择器",
          options: ["选项1", "选项2"]
        },
        datetimePicker: {
          label: "时间选择器",
          value: "",
          type: "datetimePicker",
          typeName: "时间选择器"
        }
      };
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
<style lang="scss">
.add-field {
  &__btns {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 5px;
    grid-column-gap: 5px;
    .el-tag {
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
