<template>
  <div class="layout-item" @click.stop="editMaterial">
    <component :is="material.component" :config="material.config"></component>
    <div class="mask" v-if="!preview"></div>
  </div>
</template>

<script>
import { _register_components_object } from "@/components/materials/index.js";
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
    },
    preview: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setCurrentMaterial"]),
    editMaterial() {
      this.setCurrentMaterial(this.material);
    }
  }
};
</script>

<style scoped lang="scss">
.layout-item {
  height: 100%;
  text-align: center;
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
  }
}
</style>
