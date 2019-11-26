<template>
  <el-row class="tac" style="background-color: rgb(84, 92, 100)">
    <el-col :span="24">
      <el-menu
        :default-active="$route.meta.parentName || $route.name"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isNavMenuOpen"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        default-openeds='1'
      >
        <nav-list :menuData="menuList"></nav-list>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from "vuex";
import menuDatas from "@/libs/menu";
import navList from "@/components/nav/nav-list";
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
  created() {
    this.menuList = menuDatas;
  },
  methods: {
    // async getList() {
    //   const _this = this;

    // },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    select(index, indexPath) {}
  },
  components: {
    "nav-list": navList
  }
};
</script>
<style lang="less" scoped>
// .el-menu {
//   background: rgb(84, 92, 100);
//   border-right: 0;
// }
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
//   li {
//     text-align: left;
//     padding-left: 10px;
//   }
// }
// .el-submenu__title {
//   text-align: left;
// }
// .el-submenu__title-2 {
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   .el-icon-s-grid,
//   .el-icon-menu {
//     margin-right: 30px;
//   }
// }
// .el-icon-s-grid {
//   margin-right: 30px;
// }
// .el-menu-item {
//   a {
//     display: block;
//     width: 100%;
//   }
// }
</style>
<style lang="less">
.el-nav-item  {
  .el-menu {
    .el-menu-item {
     &.is-active {
        background: #46505e !important;
      }
    }
  }
}
</style>