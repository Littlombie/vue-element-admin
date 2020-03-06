<template>
  <el-container>
    <el-container>
      <v-aside></v-aside>
      <el-main class="main-body">
        <v-header></v-header>
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
import Info from "../../components/element-components/info";
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
    "v-number-add": numberAdd
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
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
  padding-top: 80px;
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  // line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-aside {
  height: 100%;
  border-right: 1px solid #cccccc;
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