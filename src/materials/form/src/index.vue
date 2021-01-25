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
        >
          <template #input>
            <van-radio-group v-model="item.value" direction="horizontal">
              <van-radio name="1">单选框 1</van-radio>
              <van-radio name="2">单选框 2</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </template>
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "BvForm",
  props: {
    config: {
      type: Object,
      default: () => ({
        title: "表单示例",
        form: [
          {
            type: "text",
            label: "姓名",
            value: ""
          },
          {
            type: "text",
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
}
</style>
