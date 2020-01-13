<template>
  <div class="views-box">
    <div class="component-box">
      <v-btns></v-btns>
    </div>
    <div class="component-box">
      <v-traversal></v-traversal>
    </div>
    <div class="component-box">
      <table-row></table-row>
    </div>
  </div>
</template>

<script>
import traversal from "../../components/parctice/traversal";
import vBtns from "../../components/element-components/btns";
import tableRow from '../../components/element-components/tableRow'
export default {
  components: {
    "v-traversal": traversal,
    "v-btns": vBtns,
    tableRow
  }
};
</script>

<style lang="less" scoped>
</style>