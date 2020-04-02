<template>
  <div class="admin">
    <!--https://source.unsplash.com/user/erondu/1920x1080  https://api.ixiaowai.cn/gqapi/gqapi.php -->
  <div class="cover"  style="background: url(https://api.ixiaowai.cn/api/api.php)">

  </div>
    <div class="box" :class="{translate: translate}">
      <div class="into_box" >
        <div class="avator">
          <img :src="img" alt="">
        </div>
        <h1>Element UI Demo</h1>
        <el-link :underline="false" @click="inTo">进 入</el-link>
      </div>
      <div class="login_box">
        <div class="avator">
          <img :src="img" alt="">
        </div>
        <login-panel></login-panel>
      </div>
    </div>
  </div>
</template>

<script>
import Grade from 'grade-js'
import loginPanel from '@/components/form/login'
export default {
  data() {
    return {
      img: require('@/assets/images/favicon.png'),
      translate: false
    }
  },
  components: {
    'login-panel': loginPanel
  },
  created() {
    this.$nextTick(() =>{
      window.addEventListener('load', function(){
        Grade(document.querySelectorAll('.avator'))
     })
    })
  },
  methods:{
    inTo() {
      this.translate = true
    }
  }
};
</script>

<style lang="scss" scoped>
.admin {
  height: 100%;
  .box {
    display: inline-block;
    vertical-align: middle;
    height: 300px;
    width: 400px;
    transform-style:preserve-3d;
    &>.into_box,&>.login_box {
      position: absolute;
    }
    &>.into_box {
      transition: all .2s .1s linear;
      visibility: visible;
    }
    &>.login_box {
      transition: all .2s .1s linear;
      visibility: hidden;
      transform: rotateY(-180deg);
    }
    &.translate {
      transform: rotateY(180deg);
      transition: all .4s linear;
      &>.login_box {
        visibility: visible;
        padding: 20px 40px;
        ::v-deep .el-form {
          width: 100%;
          margin-top: 40px;
        }
      }
      &>.into_box {
        visibility: hidden;
      }
    }
  }
  &:after {
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    content: '';
    height: 100%;
  }
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    filter: blur(25px);
  }
}
.inTo {
  margin-top: 20px;
}
.into_box,.login_box {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  background: rgb(255, 255, 255, 0.6);
  border-radius: 10px;
  width: 400px;
  height: 300px;
  h1 {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  .avator {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    /* -webkit-writing-mode: vertical-rl; */
    align-content: center;
    position: absolute;
    top: -50px;
    padding: 10px;
    background: #ccc;
    &>img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 50%;
    } 
  }
  a {
    padding-top: 20px;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>