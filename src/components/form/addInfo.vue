<template>
  <el-row>
    <el-button class="add-info" type="primary" icon="el-icon-plus" @click="addInfo">添加信息</el-button>
  </el-row>
</template>

<script>
  export default {
    methods: {
      addInfo () {
        this.$emit('addInfo')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>