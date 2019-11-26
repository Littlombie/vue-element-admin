<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in routerList" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerList: []
    }
  },
  created () {
    // console.log(this.$route.meta.routerList);
    this.routerList = this.$route.meta.routerList
    
  },
  watch: {
    $route:function(newVal,oldVal){
      this.routerList = newVal.meta.routeList 
    }
  }
};
</script>

<style lang="scss" scoped>
</style>