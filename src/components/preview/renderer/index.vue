<template>
  <grid-layout
    id="page"
    class="page"
    :layout.sync="page"
    :col-num="24"
    :row-height="1"
    :is-draggable="false"
    :is-resizable="false"
    :is-mirrored="false"
    :vertical-compact="false"
    :margin="[0, 0]"
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
  props: {
    page: {
      type: Array,
      require: true
    }
  }
};
</script>

<style scoped lang="scss">
.page {
  min-height: 100%;
  background-color: rgb(250, 250, 250);
  .item {
    position: relative;
    overflow: hidden;
  }
}
</style>
