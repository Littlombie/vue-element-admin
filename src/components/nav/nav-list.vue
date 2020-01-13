<template>
  <el-menu-item-group class="el-nav-item">
    <template v-for="item in menuData">
      <el-menu-item
        :index="item.router"
        :key="item.router"
        v-if="!item.sub || !item.sub.length"
        @click="to(item.router)"
      >
        <i :class="[item.icon && 'iconfont', item.icon]"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
      <el-submenu :index="item.router"  v-else :key="item.index" >
        <template class="submenu-title" slot="title">
          <i :class="[item.icon && 'iconfont', item.icon]"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <nav-list :menuData="item.sub"></nav-list>
      </el-submenu>
    </template>
  </el-menu-item-group>
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
    .el-menu  {
      .el-menu-item, &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

