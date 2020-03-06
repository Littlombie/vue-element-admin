<template>
  <!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)"> -->
  <div class="side-menu">
    <!-- default-active="1-4-1" -->

    <el-menu
      default-active="1-1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isNavMenuOpen"
      unique-opened
    >
      <!-- <li class="menu-wrapper"> -->
      <nav-list :menuData="menuList"></nav-list>
      <!-- </li> -->
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
  <!-- </el-aside> -->
</template>

<script>
import { mapState } from "vuex";
import menuDatas from "@/libs/menu";
import navList from "@/components/nav/nav-list";
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    ...mapState({
      isNavMenuOpen: state => state.init.isNavMenuOpen
    })
  },
  created() {
    this.menuList = menuDatas;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    "nav-list": navList
  }
};
</script>

<style lang="less">
.side-menu {
  text-align: left;
}
.el-menu-vertical-demo {
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  &.el-menu--collapse {
    .el-submenu__title{
    // text-align: center;
      .title {
        display: none;
      }
    }
    .el-submenu__icon-arrow {
      display: none;
    }
  }
  .el-nav-item {
    .el-menu-item {
      margin-left: 10px;
    }
  }
}
</style>