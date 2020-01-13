<template>
  <el-row type="flex" :gutter="20" class="row-bg" justify="space-around">
    <el-col v-for="(item, index) in list" :key="index" :span="4">
      <div class="grid-content bg-purple">
        <img :src="item.img" alt class="overview-img" />
        <div class="overview-info">
          <h2><v-number-add :value="item.number"></v-number-add></h2>
          <p>{{item.name}}</p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>

import numberAdd from '../../components/element-components/numberAdd'
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getPress();
  },
  methods: {
    getPress() {
      this.$http
        .getProcess()
        .then(res => {
          if (res) {
            res = JSON.parse(res);
            if (res.status === 200) {
              console.log('...', res);
              this.list = res.data;
            }
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    "v-number-add": numberAdd
  }
};
</script>

<style lang="scss" scoped>
.row-bg {
  padding: 10px 0;
  // background-color: #f9fafc;
  .el-col {
    border: 1px solid rgba(235, 235, 235, 1);
    background-color: #f9fafc;
    &.el-col-4 {
      padding: 20px !important;
    }
    .grid-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .overview-img {
        width: 80px;
        border-radius: 50px;
      }
      .overview-info {
        flex: 1;
        margin-left: 20px;
        * {
          display: block;
        }
        h2 {
          font-weight: bold;
          font-size: 36px;
          padding-bottom: 10px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>