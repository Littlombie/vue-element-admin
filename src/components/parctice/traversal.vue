<template>
  <div id="demo">
    <div v-for="(c, i) in category" :key="i">
      {{c.name}}
      <input v-for="(item, index) in c.items" v-model="item.value" :key="index" />
    </div>
    <!-- <div v-for="(item, n) in items" :key="n">
      <input v-model="item.value" />
    </div> -->
    <div v-for="(item, x) in category | get_items" :key="x">
      <input v-model="item.value" />
    </div>
    {{category | json}}

  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        { name: "cate0", items: [ { value: "请输入" } ] },
        { name: "cate1", items: [ { value: "请输入" } ] }
      ]
    };
  },
  computed: {
    items() {
      return this.$eval("category | get_items");
      //var arr = []
      //this.category.forEach(c => c.items.forEach(t => arr.push(t)))
      //return arr
    }
  },
  filters: {
    get_items: function(category) {
      var arr = [];
      category.forEach(c => c.items.forEach(t => arr.push(t)));
      return arr;
    }
  }
};
</script>

<style lang="less" scoped>
</style>