<template>
  <div class="side-menu" width="200px">
    <el-menu
      :default-active="$route.meta.parentName || $route.name"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isNavMenuOpen"
      unique-opened
    >
      <nav-list :menuData="menuList"></nav-list>
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
      isCollapse: false,
      defaultUrl: 'admin-container'
    };
  },
  watch: {
    '$route': 'getPath'
  },
  computed: {
    ...mapState({
      isNavMenuOpen: state => state.init.isNavMenuOpen
    })
  },
  created() {
    this.menuList = menuDatas;
  },
  mounted () {
    let href = this.$route.name
    this.defaultUrl = href
  },
  methods: {
    getPath () {
      this.defaultUrl = this.$route.name
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
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
      span {
        padding-left: 10px;
      }
    }
  }
}
</style>