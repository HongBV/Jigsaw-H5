<template>
  <div class="layout-edit">
    <toolbar />
    <div class="viewport" @drop="onDrop($event)" @dragover="onDragover($event)">
      <grid-layout
        :layout.sync="page"
        :col-num="24"
        :row-height="1"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[0, 0]"
        :use-css-transforms="true"
      >
        <grid-item
          class="item"
          v-for="item in page"
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
import Toolbar from "@/components/operating-floor/toolbar";
import { mapState, mapMutations } from "vuex";
export default {
  name: "LayoutEdit",
  components: {
    GridLayout,
    GridItem,
    LayoutItem,
    Toolbar
  },
  computed: {
    ...mapState({
      page: state => state.editor.page
    }),
    maxHeight() {
      if (!this.page.length) return 0;
      return Math.max(...this.page.map(item => item.y + item.h));
    }
  },
  methods: {
    ...mapMutations(["addMaterial"]),
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
      const { component, config, editData, layout, name } = material;
      this.addMaterial({
        i: this.page.length,
        x: 0,
        y: this.maxHeight,
        w: 24,
        h: layout.h || 20,
        component,
        name,
        config,
        editData
      });
    }
  }
};
</script>

<style scoped lang="scss">
.layout-edit {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  .viewport {
    width: 375px;
    min-height: 667px;
    background-color: #fafafa;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    .item {
      position: relative;
      overflow: hidden;
      touch-action: none;
      box-sizing: border-box;
      border: 2px solid transparent;
      &:hover {
        padding: 0;
        border: 2px solid #006aff;
        z-index: 1;
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
