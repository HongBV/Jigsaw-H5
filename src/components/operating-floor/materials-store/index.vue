<template>
  <div class="materials-store">
    <p>素材仓库</p>
    <div class="materials-list">
      <div
        v-for="material in materialsList"
        :key="material.name"
        class="material-card"
        draggable="true"
        @dragstart="onDragstart($event, material)"
      >
        <div class="material-card__preview">
          <component :is="material.component"></component>
        </div>
        <p class="material-card__name">{{ material.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import materialsList from "@/config/material-config.js";
import { _register_components_object } from "@/materials/index.js";
export default {
  name: "MaterialsStore",
  components: { ..._register_components_object },
  data() {
    return {
      materialsList
    };
  },
  methods: {
    onDragstart(e, material) {
      e.dataTransfer.setData("material", JSON.stringify(material));
    }
  }
};
</script>
<style scoped lang="scss">
.materials-store {
  height: 100%;
  padding: 10px;
  .materials-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    .material-card {
      border: 2px solid #f0f0f0;
      border-radius: 5px;
      overflow: hidden;
      &:hover {
        border-color: #006aff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
      &__preview {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
      }
      &__name {
        margin: 0;
        text-align: center;
        background-color: #fafafa;
      }
    }
  }
}
</style>
