<template>
  <div class="preview">
    <div class="simulation-phone">
      <renderer :page="page"></renderer>
    </div>
  </div>
</template>

<script>
import Renderer from "@/components/page/renderer";
import { mapState } from "vuex";

export default {
  name: "Preview",
  components: {
    Renderer
  },
  computed: {
    ...mapState({
      page: state => state.editor.page
    })
  }
};
</script>
<style scoped lang="scss">
.preview {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f7f8fa;
  .simulation-phone {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 375px;
    height: 667px;
    border-radius: 12px;
    box-sizing: content-box;
    background: #ffffff;
    overflow: auto;
    box-shadow: #ebedf0 0 4px 12px;
    transform: translate(-50%, -50%);
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
