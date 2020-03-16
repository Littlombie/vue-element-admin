<template>
  <el-container>
      <v-aside></v-aside>
    <el-container style="position: relative">
      <div class="container-header">
        <v-header></v-header>
        <v-tab-nav></v-tab-nav>
      </div>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  <v-changepass ></v-changepass>
  <v-info></v-info>
  </el-container>
</template>

<script>
import header from '../../components/element-components/header'
import aside from '../../components/nav/navMenu'
import chanPass from '../../components/form/changePass'
import tabNav from '../../components/nav/nav-tab'
import Info from "../../components/element-components/info"
import numberAdd from '../../components/element-components/numberAdd'
export default {
  data () {
    return {
      showChangePass: false
    }
  },
  components: {
    "v-aside": aside,
    "v-header": header,
    "v-changepass": chanPass,
    "v-info": Info,
    "v-number-add": numberAdd,
    "v-tab-nav": tabNav
  },
  created(){

  },
  methods: {
    resize () {

    }
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.container-header {
  position: absolute;
  width: 100%;
  z-index: 9;
  top: 0;
  left: 0;
}
.el-header,
.el-footer {
  background-color: rgb(81, 90, 110);
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  position: relative;
  // padding-top: 80px;
  margin-top: 100px;
  // background-color: #e9eef3;
  color: #333;
  text-align: left;
  // line-height: 160px;
  &>div {
    min-height: 780px;
    padding: 20px;
    background: #fff;
  }
}
body > .el-container {
  margin-bottom: 40px;
}
.el-aside {
  height: 100%;
}
.side-menu {
  border-right: 1px solid rgba(255,255,255,0);
  background: #f7f7f7;
  ::v-deep .el-menu {
    border-right: 0;
    background: #f7f7f7;
  }
}
.nav-list {
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-list li {
  padding: 0 20px;
}
</style>