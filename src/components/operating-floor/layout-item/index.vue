<template>
  <div class="layout-item" @click.stop="editMaterial">
    <component :is="material.component" :config="material.config"></component>
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
}
</style>
