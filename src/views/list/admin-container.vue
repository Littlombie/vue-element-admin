<template>
  <div class="main-page admin-container">
    <v-overview></v-overview>
    <v-panel :title="'标题'" :dropMenu="menuOptions" :width="500">
      <template v-slot:panelContent>
      </template>
    </v-panel>
    <el-container style="height: 500px">
      <el-main>
        <div class="dropdown">
          <el-dropdown>
            <el-button>
              <i class="el-icon-s-operation"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span :plain="true" @click="open2">成功</span> </el-dropdown-item>
              <el-dropdown-item><span :plain="true" @click="open3">警告</span></el-dropdown-item>
              <el-dropdown-item><span :plain="true" @click="open1">消息</span></el-dropdown-item>
              <el-dropdown-item><span :plain="true" @click="open4">错误</span></el-dropdown-item>  
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-main>
      <div id="myChart" :style="{width: '500px', height: '500px'}" ref="myChart"></div>
    </el-container>
  </div>
</template>

<script>
import Overview from '../../components/element-components/overview'
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      menuOptions: [{
        name: 'aaa'
      }]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart);
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["增值"]
        },
        xAxis: {
          data: ["AA", "BB", "CC", "DD", "EE", "FF"]
        },
        yAxis: {},
        series: [
          {
            name: "增值",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  components: {
    'v-overview': Overview
  }
};
</script>

<style lang="scss">
.admin-container {
  background-color: #f8f9fc;
  .el-header {
    // background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-container {
    margin-top: 20px;
  }
  .el-main {
    position: relative;
    margin-right: 20px;
    border: 1px solid #eee;
    .dropdown {
      position: absolute;
      right: 10px;
      top: 10px;
      .el-button {
        padding: 10px;
        font-size: 16px;
      }
    }
    .el-table {
      height: calc(100% - 40px);
      margin-top: 40px;
      overflow: scroll;
    }
  }
  .el-main,
  #myChart {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #eee;
  }
}
</style>