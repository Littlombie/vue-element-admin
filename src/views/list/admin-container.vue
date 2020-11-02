<template>
  <div class="main-page admin-container">
    <v-overview></v-overview>
    <el-container style="height: 500px">
      <v-panel :title="'折线图'" :class="'panel-chart chart-curve'" :dropMenu="menuOptions2" @optionEvent="optionEvent" :canStretch="false">
        <template v-slot:panelContent>
          <div class="curve" id="curve"></div>
        </template>
      </v-panel>
      <v-panel :title="panel2" :class="'panel-chart ml20'" :dropMenu="menuOptions2" @optionEvent="optionEvent" :canStretch="false">
        <template v-slot:panelContent>
          <div id="myChart" ref="myChart"></div>
        </template>
      </v-panel>

    </el-container>

    <el-container>
      <v-panel :title="'水滴图'" :class="'panel-chart chart-liquidfill'" :dropMenu="menuOptions2" @optionEvent="optionEvent" :canStretch="false">
        <template v-slot:panelContent>
          <div class="topSales" id="topSales"></div>
          <div class="topSales" id="topSales2"></div>
        </template>
      </v-panel>
      <v-panel :title="panel1" :class="'panel-table'" :dropMenu="menuOptions" @optionEvent="optionEvent" >
        <template v-slot:panelContent>
          <v-list></v-list>
        </template>
      </v-panel>
    </el-container>
  </div>
</template>

<script>
import echartsLiquidfill from "echarts-liquidfill";
import Overview from '../../components/element-components/overview'
import list from './components/list'
export default {
  data() {
    return {
      panel1: '列表',
      panel2: '图表',
      menuOptions: [
        { name: '成功', icon: ''},
        { name: '警告', icon: ''},
        { name: '消息', icon: ''},
        { name: '错误', icon: ''}
      ],
      menuOptions2: []
    }
  },
  components: {
    'v-overview': Overview,
    'v-list': list
  },
  mounted() {
    this.drawLine();
    this.salesLiquidFill1("topSales","降水量", "#76e675" );
    this.salesLiquidFill1("topSales2","降水量2", "#67e1e4" );
    this.drawCurve();
  },
  methods: {
    optionEvent (val) {
      console.log(val);
      switch(val.name) {
        case '消息':
          this.$message('这是一条消息提示');
          break;
        case '成功':
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
          break;
        case '警告':
          this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning'
          });
          break;
        case '错误':
          this.$message.error('错了哦，这是一条错误消息');
          break;
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart);
      // 指定图表的配置项和数据
      let option = {
        angleAxis: {},
        grid: {
          top: 100,
          bottom: 40
        },
        toolbox: {
          right: 40,
          feature: {
            saveAsImage: {}
          }
        },
        radiusAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四'],
            z: 10
        },
        polar: {
        },
        //  color: ['#56a1d5', '#62c3e5', '#87dde1', '#aee4bb', '#f9dc71', '#f2a384', '#e97993', '#d16aab', '#da95ce', '#e0bfef', '#9c96ef', '#817ae3', '#9ebffa'],
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a',
            itemStyle: {
              color: ['#37a2da'],
              shadowColor: 'rgba(0, 0, 0, 0)',
              shadowBlur: 1
            }
        }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a',
            itemStyle: {
              color: [ '#67e1e4'],
              shadowColor: 'rgba(0, 0, 0, 0)',
              shadowBlur: 1
            }
        }, {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a',
            itemStyle: {
              color: ['#fedb5c'],
              shadowColor: 'rgba(0, 0, 0, 0)',
              shadowBlur: 1
            }
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //水球图1
    salesLiquidFill1(id, text, color) {
      this.size = document.body.clientWidth / 3840;
      this.myChart1 = this.$echarts.init(document.getElementById(id));
      var value = 0.5;
      var data = [value, value, value, value, value];
      var option = {
        graphic: [
          {
            type: "group",
            left: "center",
            bottom: "20%",
            children: [
              {
                type: "text",
                z: 100,
                // left: "10",
                // top: "middle",
                top: 0,
                style: {
                  fill: color,
                  text: text,
                  font: "16px Microsoft YaHei",
                  color: "#fff"
                }
              }
            ]
          }
        ],
        series: [
          {
            outline: {
              show: false, //是否显示轮廓 布尔值
              borderDistance: 0, //外部轮廓与图表的距离 数字
              itemStyle: {
                //borderColor:'rgba(255,0,0,0.09)', //边框的颜色
                borderWidth: 0 //边框的宽度
                //shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                //shadowColor: '#000' //外部轮廓的阴影颜色
              }
            },
            color: [color], //水波的颜色 对应的是data里面值
            type: "liquidFill",
            radius: "70%",
            center: ["50%", "40%"],
            data: data,
            backgroundStyle: {
              borderWidth: 5,
              borderColor: color,
              color: "#fff"
            },
            itemStyle: {
              opacity: 0.5, //波浪的透明度
              shadowBlur: 10 //波浪的阴影范围
              // shadowColor:'#f60'//阴影颜色
            },
            label: {
              normal: {
                formatter: value * 100 + "%",
                textStyle: {
                  fontSize: 50*this.size
                }
              }
            }
          }
        ]
      };
      this.myChart1.setOption(option, true);
      window.addEventListener("resize", () => {
        this.myChart1.resize();
      });
    },
    // 曲线图
    drawCurve () {
      let myChart = this.$echarts.init(document.getElementById('curve'));
      let option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        // grid: {top: '55%'},
        series: [
            {type: 'line', color: '#62c3e5', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', color: '#87dde1', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', color: '#aee4bb', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', color: '#f9dc71', smooth: true, seriesLayoutBy: 'row'},
            // {
            //     type: 'pie',
            //     id: 'pie',
            //     radius: '30%',
            //     center: ['50%', '25%'],
            //     label: {
            //         formatter: '{b}: {@2012} ({d}%)'
            //     },
            //     encode: {
            //         itemName: 'product',
            //         value: '2012',
            //         tooltip: '2012'
            //     }
            // }
        ]
      };
      // myChart.on('updateAxisPointer', function (event) {
      //     var xAxisInfo = event.axesInfo[0];
      //     if (xAxisInfo) {
      //         var dimension = xAxisInfo.value + 1;
      //         myChart.setOption({
      //             series: {
      //                 id: 'pie',
      //                 label: {
      //                     formatter: '{b}: {@[' + dimension + ']} ({d}%)'
      //                 },
      //                 encode: {
      //                     value: dimension,
      //                     tooltip: dimension
      //                 }
      //             }
      //         });
      //     }
      // });
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      })
    }
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
  .panel-table {
    flex: 1;
    margin-left: 20px;
  }
  .el-main,
  #myChart {
    box-sizing: border-box;
    // border: 1px solid #eee;
  }
  .panel-chart {
    width: 500px;
    min-height: 300px;
    &.ml20 {
      margin-left: 20px;
    }
    #myChart {
      height: 400px;
    }
    &.chart-liquidfill {
      width: 400px;
      height: 300px;
      .topSales {
        display: inline-block;
        width: 50%;
        height: 250px;
      }
    }
    &.chart-curve {
      flex: 1;
      min-height: 500px;
      .curve {
        height: 400px;
      }
    }
  }
}
</style>