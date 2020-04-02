<template>
  <el-row type="flex" :gutter="20" class="row-bg" justify="space-between">
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
            if (res.code === 200) {
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
  padding: 10px;
  // background-color: #f9fafc;
  .el-col {
    position: relative;
    width: 19%;
    overflow: hidden;
    border: 1px solid  #f9f9f9;
    background-color: #fff;
    box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
    border-radius: 4px;
    &:before {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
    }
    &:nth-child(1) {
      &:before {
        background: #a894f6;
      }
    }
    &:nth-child(2) {
      &:before {
        background: #f4cdca;
      }
    }
    &:nth-child(3) {
      &:before {
        background: #009eff;
      }
    }
    &:nth-child(4) {
      &:before {
        background: #ffe8a7;
      }
    }
    &:nth-child(5) {
      &:before {
        background: #fcf9a6;
      }
    }
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