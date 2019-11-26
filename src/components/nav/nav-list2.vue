<template>
  <el-row class="tac" style="background-color: rgb(84, 92, 100)">
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isNavMenuOpen"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >

        <el-submenu v-for="(item, index) in menuList" :key="index" :index="item.index">
          <template slot="title" style="text-align: left;">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <!--  :index="(Number(item.index) + 1)+'-'+(Number(x) + 1)" -->
          <el-menu-item-group v-for="(i, x) in item.children" :key="x">
            <el-menu-item>
              <router-link to="/components/overview">
                <el-button type="text">{{i.title}}</el-button>
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="1">
          <template slot="title" style="text-align: left;">
            <i class="el-icon-location"></i>
            <span>组件</span>
          </template>
          <el-menu-item-group>
            <template slot="title" v-if="false">分组一</template>
            <el-menu-item index="1-1">
              <router-link to="/components/overview">
                <el-button type="text">概况</el-button>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/components/admin-container">
                <el-button type="text">组件</el-button>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/components/list">
                <el-button type="text">列表</el-button>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link to="/components/tab">
                <el-button type="text">Tab</el-button>
              </router-link>
            </el-menu-item>

            <el-menu-item index="1-5">
              <router-link to="/components/stepMap">
                <el-button type="text">流程图</el-button>
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>表单</span>
          </template>
          <el-menu-item-group>
            <template slot="title" v-if="false" style="diaplay:none; padding:0;">分组一</template>
            <el-menu-item index="1-1">
              <router-link to="/form/check">
                <el-button type="text">表单</el-button>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/form/validForm">
                <el-button type="text">表单验证</el-button>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/form/formList">
                <el-button type="text">表单2</el-button>
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link to="/form/addressSelect">
                <el-button type="text">地址三联选</el-button>
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
import menu from '@/libs/menu.js';
export default {
  data() {
    return {
      elSubMenuTitle: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        menuList: []
      }
    };
  },
  computed: {
    ...mapState({
      isNavMenuOpen: state => state.init.isNavMenuOpen
    }),
    toggleNavMenu() {
      return this.isNavMenuOpen ? this.handleOpen() : this.handleClose();
    }
  },
  created(){
    this.menuList = menu;
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
  .el-menu-item-group .el-menu-item-group__title {
  display: none;
}
</style>
<style lang="scss" scoped>
.el-menu {
  background: rgb(84, 92, 100);
  border-right: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  li {
    text-align: left;
  }
}
.el-submenu__title {
  text-align: left;
}
.el-submenu__title-2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .el-icon-s-grid,
  .el-icon-menu {
    margin-right: 30px;
  }
}
.el-icon-s-grid {
  margin-right: 30px;
}
.el-menu-item {
  a {
    display: block;
    width: 100%;
  }
}
</style>