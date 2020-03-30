<template>
  <div class="admin">
    <div class="box">
      <h1>Element UI Demo</h1>
      <router-link to="/login" tag="el-link" type="primary" class="inTo">进入</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.admin {
  height: 100%;
  .box {
    display: inline-block;
    vertical-align: middle;
  }
  &:after {
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    content: '';
    height: 100%;
  }
}
.inTo {
  margin-top: 20px;
}
</style>