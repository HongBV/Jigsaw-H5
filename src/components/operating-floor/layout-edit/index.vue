<template>
  <div class="layout-edit">
    <div class="viewport" @drop="onDrop($event)" @dragover="onDragover($event)">
      <grid-layout
        :layout.sync="layout"
        :col-num="24"
        :row-height="1"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[3, 3]"
        :use-css-transforms="true"
      >
        <grid-item
          class="item"
          v-for="item in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
        >
          <layout-item :material="item" />
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import LayoutItem from "@/components/operating-floor/layout-item";
export default {
  name: "LayoutEdit",
  components: {
    GridLayout,
    GridItem,
    LayoutItem
  },
  data() {
    return {
      layout: []
    };
  },
  methods: {
    onDragover(e) {
      e.preventDefault();
    },
    onDrop(e) {
      e.preventDefault();
      const material = JSON.parse(e.dataTransfer.getData("material"));
      this.addComponent(material);
    },
    // 添加组件
    addComponent(material) {
      const { component, config, editData } = material;
      this.layout.push({
        x: 0,
        y: 0,
        w: 24,
        h: 10,
        i: this.layout.length,
        component,
        config,
        editData
      });
    },
    // 删除组件
    deleteComponent(id) {
      this.layout = this.layout.filter(item => item.id === id);
    }
  }
};
</script>

<style scoped lang="scss">
.layout-edit {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  .viewport {
    width: 375px;
    height: 667px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    .item {
      position: relative;
      overflow: hidden;
      &:hover {
        margin: -2px;
        border: 2px solid #006aff;
      }
      .mask {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
      }
    }
  }
}
</style>
