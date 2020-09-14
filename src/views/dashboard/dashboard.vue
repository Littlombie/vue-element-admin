<template>
  <el-container>
    <v-aside></v-aside>
    <el-container style="position: relative">
      <div class="container-header">
        <v-header @openJRSC="dataJRSC"></v-header>
        <v-tab-nav></v-tab-nav>
      </div>
      <el-main>
        <router-view :class="{'admin-container': adminClass}" />
      </el-main>
    </el-container>
  <v-changepass ></v-changepass>
  <v-info></v-info>
  <v-change-theme></v-change-theme>
  <el-dialog title="每日一言" :visible.sync="showSCPanel" width="50%" :before-close="handleClose">
     <sc-panel :dataSc="dataSC"></sc-panel>
  </el-dialog>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
import header from '../../components/element-components/header'
import aside from '../../components/nav/navMenu'
import chanPass from '../../components/form/changePass'
import tabNav from '../../components/nav/nav-tab'
import Info from "../../components/element-components/info"
import numberAdd from '../../components/element-components/numberAdd'
import changeTheme from '../../components/element-components/changeTheme'
import scPanel from '../../components/element-components/sc-panel'
export default {
  data () {
    return {
      showChangePass: false,
      adminClass: false,
      showSCPanel: false,
      dataSC: {}
    }
  },
  computed: {
    ...mapGetters({
      themeMode : 'THEME_MODE'
    }),
  },
  watch: {
    $route: {
      handler (newVal) {
        console.log(newVal);
        if (newVal.name == 'adminContainer') {
          this.adminClass = true;
        } else {
          this.adminClass = false;
        }
      },
      deep: true,
      immediate: true
    }
  },
  components: {
    "v-aside": aside,
    "v-header": header,
    "v-changepass": chanPass,
    "v-info": Info,
    "v-number-add": numberAdd,
    "v-tab-nav": tabNav,
    "v-change-theme": changeTheme,
    scPanel
  },
  created(){

  },
  methods: {
    resize () {

    },
    dataJRSC() {
      (async () => {
        const res = await this.$http.getJRSC();
        if (res) {
          this.showSCPanel = true;
          this.dataSC = JSON.parse(JSON.stringify(res.data));
        }
      })()
    },
    handleClose() {
      this.showSCPanel = false;
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
  padding: 10px;
  // line-height: 160px;
  &>div {
    min-height: 780px;
    padding: 20px;
    background: #fff;
    &.admin-container{
      background: #f8f9fc;
    }
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