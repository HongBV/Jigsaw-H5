<template>
  <img class="bv-qrcode" :src="base64" />
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
        text: "https://www.baidu.com",
        dark: "#000000",
        light: "#ffffff"
      })
    }
  },
  data() {
    return {
      base64: null
    };
  },
  watch: {
    config: {
      deep: true,
      immediate: true,
      handler(val) {
        this.generateQR(val);
      }
    }
  },
  created() {
    this.generateQR = debounce(this.generateQR, 1000); // 防抖处理
  },
  methods: {
    /**
     * 生成二维码
     * @param {string} data 需要转化为二维码的数据
     */
    async generateQR(data) {
      const { text = " ", dark, light } = data;
      try {
        this.base64 = await QRCode.toDataURL(text, {
          color: {
            dark,
            light
          }
        });
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
