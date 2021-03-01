<template>
  <div class="layout-edit">
    <i class="el-icon-back go-back" @click="linkTo('Dashboard')"></i>
    <el-backtop target=".viewport-wrapper" :right="320"></el-backtop>
    <toolbar />
    <div
      class="viewport-wrapper no-scrollbar"
      id="viewport-wrapper"
      @click="resetCurrentMaterial"
    >
      <div
        id="viewport"
        class="viewport"
        :style="{
          width: viewportWidth + 'px',
          minHeight: viewportHeight + 'px'
        }"
        @click.stop
        @drop="onDrop($event)"
        @dragover="onDragover($event)"
      >
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
            <layout-item :material="item" :preview="false" />
          </grid-item>
        </grid-layout>
      </div>
    </div>
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import LayoutItem from "@/components/operating-floor/layout-item";
import Toolbar from "@/components/operating-floor/toolbar";
import { getPageById } from "@/api/page";
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
      page: state => state.editor.page,
      viewportWidth: state => state.editor.viewportWidth,
      viewportHeight: state => state.editor.viewportHeight
    })
  },
  created() {
    this.fetchPage();
  },
  methods: {
    ...mapMutations([
      "addMaterial",
      "setPage",
      "setPageId",
      "resetCurrentMaterial"
    ]),
    /**
     * 获取页面数据
     */
    async fetchPage() {
      const id = this.$route.query.id;
      if (!id) return;
      const { data } = await getPageById(id);
      this.setPage(JSON.parse(data.page));
      this.setPageId(id);
    },
    /**
     * 路由跳转
     * @param {string} routerName
     */
    linkTo(routerName) {
      this.$router.push(routerName);
    },
    /**
     * 拖拽进入viewport的钩子函数
     * @param {object} e
     */
    onDragover(e) {
      e.preventDefault();
    },
    /**
     * 放置在viewport的钩子函数
     * @param {object} e
     */
    onDrop(e) {
      e.preventDefault();
      const material = JSON.parse(e.dataTransfer.getData("material"));
      this.addMaterial(material);
    }
  }
};
</script>

<style scoped lang="scss">
.layout-edit {
  position: relative;
  height: 100%;
  background-color: #fafafa;
  .go-back {
    position: absolute;
    left: 20px;
    top: 10px;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    z-index: 10;
    &:hover {
      color: rgb(47, 84, 235);
    }
  }
  .el-backtop {
    color: #000000;
  }
  .viewport-wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;
    .viewport {
      margin: 70px auto;
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
      }
    }
  }
  .no-scrollbar {
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
}
</style>
