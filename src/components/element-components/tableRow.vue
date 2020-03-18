<template>
  <div class="vlt-card">
    <h4>表格单元格合并</h4>
    <el-table :data="tableData6" :span-method="arraySpanMethod" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
      <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
      <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
      <el-table-column prop="amount4" sortable label="数值 4"></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "",
  data() {
    return {
      tableData6: [
        { id: "12987122", name: "王小虎", amount1: "11", amount2: "3.2", amount3: 10, amount4: 88 },
        { id: "12987123", name: "王小虎", amount1: "11", amount2: "3.2", amount3: 12, amount4: 88 },
        { id: "12987124", name: "王小虎", amount1: "11", amount2: "3.2", amount3: 12, amount4: 88 },
        { id: "12987125", name: "王小虎", amount1: "11", amount2: "3.2", amount3: 12, amount4: 88 },
        { id: "12987126", name: "王小虎", amount1: "539", amount2: "3.2", amount3: 12, amount4: 88 }
      ]
    };
  },
  components: {},
  methods: {
    /*
     * 表格合并
     * @param {*} param0
     * row 表格每一行的数据
     * column 表格每一列的数据
     * rowIndex 表格的行索引,不包括表头,从0开始
     * columnIndex 表格的列索引,从0开始
     */
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log(row, column, rowIndex, columnIndex)
      // 打印出的数据就是表格当前行的数据,当前列的数据,索引
      if (rowIndex === 1) {
        // 合并第二行
        if (columnIndex === 1) {
          // 从第二列开始
          return [1, 3];
          // 这里返回的是行和列的合并数量,可以返回一个数组,也可以返回一个对象,效果一样
          // 这里rowspan为1是行有一行合并,colspan为3是列有3列合并,你要合并几行几列就写上相应的数字
          // return {
          //    rowspan: 1,
          //    colspan: 3
          //  }
          // 这里要写一个else的判断,不然被合并列的原始数据会填充到合并之后的表格里
          // 这个判断是把合并的第3列,第4列的值省略,在合并的表格右边直接填原先第5列的值,合并了几列,就省略几列的值
        } else if (columnIndex === 2 || columnIndex === 3) {
          return [0, 0];
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>
