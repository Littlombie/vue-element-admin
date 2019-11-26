<template>
  <el-pagination
    background
    layout="total, sizes, prev, pager, next, jumper"
    :current-page.sync="tableList.pageIndex"
    :total="totalCount"
    :page-sizes="[5, 10]"
    :page-size="pagesize" 
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  ></el-pagination>
</template>

<script>
export default {
  props: {
    totalCount: Number
  },
  data() {
    return {
      tableList: {
        pageIndex: 1
      },
      pagesize: 10,
      currpage: 1
    };
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
      this.$emit('changeList', cpage)
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-pagination {
  margin-top: 20px;
  text-align: center;
}
</style>