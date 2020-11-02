<template>
  <div class="info">
    <el-dialog
  title="个人信息"
  :visible.sync="showInfoDia"
  width="30%"
  :before-close="handleClose" 
  center>

    <img :src="getInfo.avatar" alt="" class="avatar">
    <h4>{{getInfo.name}}</h4>
    <p><span>Tel: <i>{{getInfo.tel}}</i></span></p>
    <p><span>{{getInfo.address}}</span></p>
    <p><span>{{getInfo.desc}}</span></p>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="handleClose">确 定</el-button>
  </span>
</el-dialog>
    <!-- <img :src="getInfo.avatar" alt="">
    <h4>{{getInfo.name}}</h4>
    <p><span>Tel: <i>13000000002</i></span></p>
    <p><span>{{getInfo.address}}</span></p>
    <p><span>{{getInfo.desc}}</span></p> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        imgUrl: require('../../assets/images/favicon.png'),
        // dialogVisible: false
      }
    },
    computed: {
      ...mapState ({
        getInfo: state => state.user.userInfo,
        showInfoDia: state => state.init.showInfoDia
      }),
      ...mapGetters ({
        getInfo: 'GET_USER_INFO'
      })
    },
    created () {
      console.log(this.getInfo);
      this.getInfo.address = this.getInfo.address && this.getInfo.address.replace(/\s*/g,"");
    },
     methods: {
      handleClose() {
        this.$store.dispatch("changeInfoDia", false);
      }
    }
  }
</script>

<style lang="scss">

  .info {
    text-align: center;
     .el-dialog {
      min-width: 500px;
      border-radius: 10px;
    }
    .el-dialog__body {
    text-align: center !important;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50px;
      &.avatar {
        margin-bottom: 20px;
      }
    }
  }
</style>