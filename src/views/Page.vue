<template>
  <div class="page" v-if="page">
    <div v-if="isPC">仅支持移动端访问</div>
    <renderer v-else :page="page"></renderer>
  </div>
</template>

<script>
import { getPageById } from "@/api/page";
import Renderer from "@/components/preview/renderer";

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
     */
    async fetchPage() {
      const id = this.$route.query.id;
      if (!id) return;
      const { data } = await getPageById(id);
      this.page = JSON.parse(data.page);
    }
  },
  created() {
    this.ua = this.getUA();
    this.fetchPage();
  }
};
</script>
<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
}
</style>
