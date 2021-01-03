<template>
  <div class="layout-item" @click="editMaterial">
    <div class="mask"></div>
    <component :is="material.component" :config="material.config"></component>
  </div>
</template>

<script>
import { _register_components_object } from "@/materials/index.js";
import { mapMutations } from "vuex";
export default {
  name: "LayoutItem",
  components: {
    ..._register_components_object
  },
  props: {
    material: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["updateCurrentMaterial"]),
    editMaterial() {
      this.updateCurrentMaterial(this.material);
    }
  }
};
</script>

<style scoped lang="scss">
.layout-item {
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 1;
  }
}
</style>
