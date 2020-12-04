<template>
  <li class="el-nav-item">
    <label v-for="item in menuData" :key="item.code">
      <el-menu-item
        :index="item.router"
        v-if="!item.sub || !item.sub.length"
        :key="item.router"
        @click="to(item.router)"
      >
      <!-- 
        :class="item.router == $route.name ? 'is-active' : ''" -->
        <i :class="[item.icon && 'iconfont', item.icon]"></i>
        <span class="title" slot="title">{{item.title}}</span>
      </el-menu-item>
      <el-submenu :index="item.router" v-else :key="item.index">
        <template class="submenu-title" slot="title">
          <i :class="[item.icon && 'iconfont', item.icon]"></i>
          <span class="title" slot="title">{{item.title}}</span>
        </template>
        <nav-list :menuData="item.sub"></nav-list>
      </el-submenu>
    </label>
  </li>
</template>

<script>
export default {
  props: ["menuData"],
  name: "navList",
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    to(url) {
      console.log(url);
      this.$router.push({
        name: url
      });
    }
  }
};
</script>
<style lang="less" scoped>
.el-nav-item {
  .el-submenu {
    .iconfont {
      width: 24px;
      margin-right: 5px;
      font-size: 18px;
    }
    // .el-submenu__title {
    //   margin-left: 10px;
    // }
    .el-menu {
      .el-menu-item,
      &:hover {
        cursor: pointer;
      }
      .is-active {
        background: #009eff29;
      }
    }
  }
}
</style>

