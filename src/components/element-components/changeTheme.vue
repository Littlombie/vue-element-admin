
<template>
  <div class="position-box">
    <span class="slide-btn shadow">
      <i class="iconfont el-icon-setting"></i>
    </span>
    <div class="change-box shadow">
      <span class="change_title">{{$t('changeTheme')}}</span> 
      <ul class="change-list">
        <li v-for="(item, index) in themeList" :key="index" @click="change(item.name)" :class="item.active ? 'active': ''">
          <span :style="{background: item.color}"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import {mapGetters, mapActions } from 'vuex'
export default {
  name: "changeColor",
  data() {
   return {
     themeList: [
       {name: 'themeBlue', color: '#409eff', active: true},
       {name: 'themeOrange', color: '#ffaf00', active: false},
       {name: 'themeGreen', color: '#00c292', active: false},
       {name: 'themePurple', color: '#e14eca', active: false}
     ]
   }
  },
 components: {},
 watch: {},
 computed: {
   ...mapGetters({
     themeMode: 'THEME_MODE'
   })
 },
 created() {
   let activeColor = this.themeMode;
   this.change(activeColor);
 },
 methods: {
   change(name) {
     this.themeList.forEach(item => {
       item.active = false;
       if (item.name == name) {
         item.active = true;
       }
     })
    this.changeTheme(name);
   },
   ...mapActions({
     changeTheme: 'CHANGE_THEME'
    })
 },
}
</script>

<style lang="less" scoped>
  .position-box {
    position: fixed;
    right: 0;
    top: 150px;
    z-index: 9;
    transform: translate(80px, 0);
    transition: all .4s linear;
    &:hover {
    transform: translate(0, 0);
    }
    .slide-btn {
      display: block;
      position: absolute;
      left: -30px;
      width: 30px;
      height: 30px;
      border-radius: 4px 0 0 4px;
      background: #fff;
      text-align: center;
      i.iconfont {
        font-size: 18px;
        line-height: 30px;
        cursor: pointer;
      }
    }
    .change-box {
      width: 80px;
      height: 180px;
      padding: 10px;
      background: #fff;
      .change_title {
        font-size: 14px;
      }
      .change-list {
        margin-top: 20px;
        text-align: center;
        li {
          span {
            display: block;
            width: 20px;
            height: 20px;
            margin: 10px auto 0;
            border: 2px solid #fff;
            cursor: pointer;
          }
          &.active {
            span {
              border-color: #000;
            }
          }
        }
      }
    }
  }
</style>
