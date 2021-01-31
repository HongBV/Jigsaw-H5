<template>
  <div class="bv-form">
    <h3>{{ config.title }}</h3>
    <van-form @submit="onSubmit">
      <template v-for="(item, index) in config.form">
        <!-- 文本框 -->
        <van-field
          v-if="item.type === 'text'"
          :key="index"
          :name="item.label"
          :label="item.label"
          v-model="item.value"
          placeholder="请输入"
        />
        <!-- 开关 -->
        <van-field
          v-if="item.type === 'switch'"
          :key="index"
          :name="item.label"
          :label="item.label"
        >
          <template #input>
            <van-switch v-model="item.value" size="20" />
          </template>
        </van-field>
        <!-- 单选项 -->
        <van-field
          v-if="item.type === 'radio'"
          :key="index"
          :label="item.label"
          :name="item.label"
        >
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio
                v-for="option in item.options"
                :key="option"
                :name="option"
              >
                {{ option }}
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <!-- 多选项 -->
        <van-field
          v-if="item.type === 'checkbox'"
          :key="index"
          :name="item.label"
          :label="item.label"
        >
          <template #input>
            <van-checkbox-group v-model="item.value" direction="horizontal">
              <van-checkbox
                v-for="option in item.options"
                :key="option"
                :name="option"
                shape="square"
              >
                {{ option }}
              </van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <!-- 步进器 -->
        <van-field
          v-if="item.type === 'stepper'"
          :key="index"
          :name="item.label"
          :label="item.label"
        >
          <template #input>
            <van-stepper v-model="item.value" />
          </template>
        </van-field>
        <!-- 评分 -->
        <van-field
          v-if="item.type === 'rate'"
          :key="index"
          :name="item.label"
          :label="item.label"
        >
          <template #input>
            <van-rate v-model="item.value" />
          </template>
        </van-field>
        <!-- 选择器 -->
        <form-picker
          v-if="item.type === 'picker'"
          :key="index"
          :formItem="item"
        />
        <!-- 时间选择器 -->
        <form-datetime-picker
          v-if="item.type === 'datetimePicker'"
          :key="index"
          :formItem="item"
        />
      </template>
      <van-button round block type="info" native-type="submit">
        {{ config.btnText }}
      </van-button>
    </van-form>
  </div>
</template>

<script>
import FormPicker from "./components/picker";
import FormDatetimePicker from "./components/datetime-picker";
export default {
  name: "BvForm",
  components: { FormPicker, FormDatetimePicker },
  props: {
    config: {
      type: Object,
      default: () => ({
        title: "表单示例",
        btnText: "提交",
        targetHost: "",
        form: [
          {
            type: "text",
            typeName: "文本框",
            label: "姓名",
            value: ""
          },
          {
            type: "text",
            typeName: "文本框",
            label: "爱好",
            value: ""
          }
        ]
      })
    }
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-form {
  margin: 10px;
  padding: 0 15px;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px #f0f0f0;
  .van-button {
    margin: 20px 16px 10px;
    width: calc(100% - 32px);
  }
  ::v-deep {
    .van-checkbox,
    .van-radio {
      margin: 0 0 5px;
      min-width: 50%;
      overflow: auto;
    }
    .van-radio-group,
    .van-checkbox-group {
      width: 100%;
    }
  }
}
</style>
