<template>
  <div
    class="countdown"
    :style="{
      fontSize: config.fontSize + 'px',
      fontWeight: config.fontWeight,
      color: config.color
    }"
  >
    <span v-if="pastDue">已过期</span>
    <span>{{ formatTime(remaining) }}</span>
  </div>
</template>

<script>
const s = 1000;
const m = 60 * s;
const h = 60 * m;
const d = 24 * h;

export default {
  name: "BvCountdown",
  props: {
    config: {
      type: Object,
      default: () => ({
        endTime: new Date().getTime() + 24 * 3600 * 1000, // 默认结束时间为一天后
        fontSize: 13,
        fontWeight: 400,
        color: "#000000",
        showDay: false,
        showHour: true,
        showMin: true,
        showSec: true
      })
    }
  },
  data() {
    return {
      remaining: 0,
      interval: null,
      pastDue: false
    };
  },
  mounted() {
    this.refreshTime();
    this.interval = setInterval(() => {
      this.refreshTime();
    }, 1000);
  },
  beforeDestroy() {
    // 销毁组件前清除计时器避免内存泄漏
    clearInterval(this.interval);
  },
  methods: {
    /**
     * 格式化时间
     * @param {number} time
     */
    formatTime(time) {
      const { showDay, showHour, showMin, showSec } = this.config;
      let formatTime = "";
      if (showDay) {
        formatTime += Math.floor(time / d) + "天";
        time = time % d;
      }
      if (showHour) {
        formatTime += Math.floor(time / h) + "小时";
        time = time % h;
      }
      if (showMin) {
        formatTime += Math.floor(time / m) + "分";
        time = time % m;
      }
      if (showSec) {
        formatTime += Math.floor(time / s) + "秒";
      }
      return formatTime;
    },
    /**
     * 刷新时间
     */
    refreshTime() {
      const { endTime } = this.config;
      this.remaining = new Date(endTime).getTime() - new Date().getTime();
      this.pastDue = false;
      if (this.remaining < 0) {
        this.remaining = -this.remaining;
        this.pastDue = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.countdown {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
