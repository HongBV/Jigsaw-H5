<template>
  <div class="page">
    <div v-if="isPC" class="empty">
      <van-empty image="error" description="仅支持移动端访问" image-size="300">
        <el-button round @click="linkTo('Welcome')">返回官网</el-button>
      </van-empty>
    </div>
    <div v-else-if="!page" class="empty">
      <van-empty description="页面已失效" />
    </div>
    <renderer v-else :page="page" />
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
     * @param {number} id
     */
    async fetchPage(id) {
      const { data } = await getPageById(id);
      if (!data) return;
      this.page = JSON.parse(data.page);
    },
    /**
     * 跳转
     * @param {string} routerName
     */
    linkTo(routerName) {
      this.$router.push({ name: routerName });
    }
  },
  created() {
    this.ua = this.getUA();
    const id = this.$route.query.id;
    id && this.fetchPage(id);
  }
};
</script>
<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  .empty {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
