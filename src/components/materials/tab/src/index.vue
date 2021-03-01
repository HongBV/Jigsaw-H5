<template>
  <van-tabs
    ref="bvTab"
    class="bv-tab"
    v-model="active"
    :type="config.type"
    :animated="config.animated"
    :color="config.color"
    :background="config.navBgColor"
    :border="config.border"
    :style="{
      borderRadius: `${config.topBorderRadius}px ${config.topBorderRadius}px ${config.bottomBorderRadius}px ${config.bottomBorderRadius}px`
    }"
  >
    <van-tab
      v-for="(tab, idx) in config.tabs"
      :key="tab.title + idx"
      :dot="tab.dot"
      :badge="tab.badge"
      :disabled="tab.disabled"
    >
      <div slot="title">{{ tab.title }}</div>
      <div class="content" :style="{ background: config.contentBgColor }">
        {{ tab.content }}
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: "BvTab",
  props: {
    config: {
      type: Object,
      default: () => ({
        topBorderRadius: 0,
        bottomBorderRadius: 0,
        color: "#ee0a24",
        navBgColor: "#ffffff",
        contentBgColor: "#ffffff",
        border: true,
        animated: true,
        tabs: [
          {
            title: "标签1",
            content: "内容1",
            badge: "",
            dot: false,
            disabled: false
          },
          {
            title: "标签2",
            content: "内容2",
            badge: "",
            dot: false,
            disabled: false
          }
        ]
      })
    }
  },
  data() {
    return {
      active: 0
    };
  },
  watch: {
    config: {
      deep: true,
      handler() {
        this.resize();
      }
    }
  },
  mounted() {
    setTimeout(this.resize, 0);
  },
  methods: {
    resize() {
      this.$refs.bvTab.resize();
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-tab {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .content {
    padding: 24px 20px;
    word-break: break-all;
  }
}
</style>
