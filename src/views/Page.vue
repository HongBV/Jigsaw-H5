<template>
  <div class="page" v-if="page">
    <div v-if="isPC">仅支持移动端访问</div>
    <renderer v-else :page="page"></renderer>
  </div>
</template>

<script>
import Renderer from "@/components/page/renderer";

export default {
  name: "Page",
  components: {
    Renderer
  },
  data() {
    return {
      ua: null,
      page: null
    };
  },
  computed: {
    isPC() {
      return this.ua === "pc";
    }
  },
  methods: {
    /**
     * 获取用户浏览器环境
     */
    getUA() {
      const userAgentInfo = navigator.userAgent;
      const mobileReg = new RegExp(
        /(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/g
      );
      return userAgentInfo.match(mobileReg) ? "mobile" : "pc";
    },
    /**
     * 获取页面数据
     * @todo 待后端接口实现后补充
     */
    async fetchPage() {}
  },
  created() {
    this.ua = this.getUA();
    this.getPage();
  }
};
</script>
<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
}
</style>
