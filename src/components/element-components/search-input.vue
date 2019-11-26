<template>
  <div class="search-label">
    <el-input placeholder="请输入姓名" v-model="input" clearables></el-input>
    <el-button type="primary" @click="search(input)">查询</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    search (val) {
      this.$emit('search', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-label {
  display: flex;
  justify-content: flex-start;
  width: 50%;
  max-width: 500px;
  margin-top: 20px;
  .el-input {
    // width: 40%;
    flex: 1;
  }
  .el-button {
    margin-left: 20px;
  }
}
</style>