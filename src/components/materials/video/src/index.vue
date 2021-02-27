<template>
  <video-player
    class="video-player-box"
    ref="videoPlayer"
    :options="playerOptions"
    :playsinline="true"
  >
  </video-player>
</template>

<script>
// https://gossv.vcg.com/cmsUploadVideo/creative/1移轴/7月移轴.mp4
// require styles
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";

export default {
  name: "BvVideo",
  components: {
    videoPlayer
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        url:
          "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
        muted: true,
        autoplay: false,
        loop: false,
        fluid: false,
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        poster: "https://img01.yzcdn.cn/vant/apple-3.jpg"
      })
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    playerOptions() {
      return {
        muted: this.config.muted, // 静音
        autoplay: this.config.autoplay, // 自动播放
        loop: this.config.loop, // 循环播放
        fluid: this.config.fluid, // 窗口自适应
        notSupportedMessage: this.config.notSupportedMessage, // Video.js无法播放媒体源时显示的默认信息。
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 可选的播放速度
        poster: this.config.poster,
        sources: [
          {
            type: "video/mp4",
            src: this.config.url
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.video-player-box {
  width: 100%;
  height: 100%;
  ::v-deep.video-js {
    width: 100%;
    height: 100%;
    .vjs-big-play-button {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .vjs-poster {
      background-size: cover;
    }
  }
}
</style>
