<template>
  <div class="views-box">
    <test-md>
      <el-button type="primary">default</el-button>
      <template v-slot:footer>
        <el-button type="success">footer</el-button>
      </template>
    </test-md>
  </div>
</template>

<script>
import testMd from "../../components/markdown/test.md"; 

export default {
  components: {
    "test-md": testMd
  }
};
</script>

<style lang="less" scoped>
</style>