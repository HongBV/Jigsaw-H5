<template>
  <div class="bv-form">
    <h3>{{ config.title }}</h3>
    <van-form @submit="onSubmit">
      <van-field
        v-for="(item, index) in config.form"
        :key="index"
        v-model="item.value"
        :name="item.label"
        :label="item.label"
        placeholder="请输入"
      />
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
            label: "姓名",
            value: ""
          },
          {
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
