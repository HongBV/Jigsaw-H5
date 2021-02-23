<template>
  <div class="materials-store">
    <header class="header">素材仓库</header>
    <div class="materials-list">
      <div
        v-for="material in materialsList"
        :key="material.name"
        class="material-card"
        draggable="true"
        @dragstart="onDragstart($event, material)"
      >
        <div class="material-card__preview" draggable="false">
          <div class="material-card__mask"></div>
          <component :is="material.component"></component>
        </div>
        <p class="material-card__name">{{ material.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import materialsList from "@/config/material-config.js";
import { _register_components_object } from "@/components/materials/index.js";
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
  padding: 0 20px;
  .header {
    margin: 0;
    padding: 16px 0;
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }
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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        height: 70px;
        overflow: hidden;
      }
      &__mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      &__name {
        margin: 0;
        padding: 5px;
        text-align: center;
        font-size: 14px;
        color: #666666;
        background-color: #fafafa;
      }
    }
  }
}
</style>
