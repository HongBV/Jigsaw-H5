<template>
  <div class="simulation-phone">
    <div class="viewport">
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
      page: state => state.editor.page
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
    width: 325px;
    height: 600px;
    border: solid 1px #dddddd;
    background-color: rgb(250, 250, 250);
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
