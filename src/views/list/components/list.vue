
<template>
  <div class="main-list">
    <el-table :data="tableData">
      <el-table-column type="index"  label="序号" width="100"></el-table-column>
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="gender" label="性别" width="120"></el-table-column>
      <el-table-column prop="cellPhone" label="移动电话" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "list",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      gender: "男",
      cellPhone: "13098493920",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  components: {},
  methods: {}
};
</script>

<style lang="less" scoped>
  .main-list {
    position: relative;
    .el-table {
      height: 400px;
      overflow: scroll;
    }
  }
</style>
