<template>
  <img class="bv-qrcode" :src="this.base64" />
</template>

<script>
import QRCode from "qrcode";
import { debounce } from "lodash";
export default {
  name: "BvQrcode",
  props: {
    config: {
      type: Object,
      default: () => ({
        url: "https://www.baidu.com"
      })
    }
  },
  data() {
    return {
      base64: null
    };
  },
  watch: {
    "config.url": {
      immediate: true,
      handler(val) {
        this.generateQR(val);
      }
    }
  },
  created() {
    this.generateQR = debounce(this.generateQR, 1000); // 防抖处理
    this.generateQR(this.config.url);
  },
  methods: {
    /**
     * 生成二维码
     * @param {string} data 需要转化为二维码的数据
     */
    async generateQR(data) {
      if (!data) data = " ";
      try {
        this.base64 = await QRCode.toDataURL(data);
      } catch (err) {
        this.$message.error("二维码生成失败");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-qrcode {
  display: block;
  margin: 0 auto;
  height: 100%;
}
</style>
