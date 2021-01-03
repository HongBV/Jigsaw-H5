<template>
  <el-row class="operating-floor" type="flex">
    <el-col :span="5">
      <materials-store />
    </el-col>
    <el-col :span="14">
      <layout-edit />
    </el-col>
    <el-col :span="5">
      <props-edit />
    </el-col>
  </el-row>
</template>

<script>
import LayoutEdit from "@/components/operating-floor/layout-edit";
import MaterialsStore from "@/components/operating-floor/materials-store";
import PropsEdit from "@/components/operating-floor/props-edit";

export default {
  name: "OperatingFloor",
  components: {
    MaterialsStore,
    LayoutEdit,
    PropsEdit
  }
};
</script>
<style scoped lang="scss">
.operating-floor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-col {
    height: 100%;
  }
}
</style>
