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
        muted: true
      })
    }
  },
  mounted() {
    console.log("this is current player instance object", this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    playerOptions() {
      return {
        muted: this.config.muted,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: this.config.url
          }
        ],
        poster: "/static/images/author.jpg"
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
  }
}
</style>
