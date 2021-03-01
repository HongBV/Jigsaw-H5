<template>
  <div class="bv-audio">
    <audio
      :src="config.audio"
      :controls="config.controls"
      :preload="config.preload"
      :autoplay="config.autoplay"
      :loop="config.loop"
      :muted="config.muted"
    >
      {{ config.unsupported }}
    </audio>
  </div>
</template>

<script>
export default {
  name: "BvAudio",
  props: {
    config: {
      type: Object,
      default: () => ({
        audio: "http://h5.dooring.cn/audio.mp3",
        unsupported: "您的浏览器不支持audio标签。",
        preload: "auto",
        controls: true,
        autoplay: false,
        loop: false,
        muted: false
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bv-audio {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  audio {
    width: 100%;
    height: 32px;
    outline: none;
  }
}
</style>
