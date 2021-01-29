<template>
  <div>
    <van-field
      readonly
      clickable
      :name="formItem.label"
      :label="formItem.label"
      :value="formItem.value"
      placeholder="点击进行选择"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom" get-container="#viewport">
      <van-picker
        show-toolbar
        :columns="formItem.options"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "FormPicker",
  props: {
    formItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showPicker: false
    };
  },
  methods: {
    onConfirm(value) {
      this.formItem.value = value;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
