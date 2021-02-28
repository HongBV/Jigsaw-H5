<template>
  <div class="simulation-phone">
    <div
      class="viewport"
      id="viewport"
      :style="{
        width: viewportWidth + 'px',
        height: viewportHeight + 'px'
      }"
    >
      <renderer :page="page"></renderer>
    </div>
  </div>
</template>

<script>
import Renderer from "@/components/preview/renderer";
import { mapState } from "vuex";

export default {
  name: "SimulationPhone",
  components: {
    Renderer
  },
  computed: {
    ...mapState({
      page: state => state.editor.page,
      viewportWidth: state => state.editor.viewportWidth,
      viewportHeight: state => state.editor.viewportHeight
    })
  }
};
</script>
<style scoped lang="scss">
.simulation-phone {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 40px;
  background: #ffffff;
  box-shadow: #ebedf0 0 4px 12px;
  transform: translate(-50%, -50%);
  .viewport {
    margin: 30px 15px 60px;
    border: solid 1px #dddddd;
    background-color: rgb(250, 250, 250);
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
