<template>
  <div id="demo">
    <div v-for="(c, i) in category" :key="i">
      {{c.name}}
      <input v-for="(item, index) in c.items" v-model="item.value" :placeholder="c.placeholder" :key="index" />
    </div>
      <!-- <div v-for="(item, x) in items" :key="x">
        {{item}}
        <input v-model="item.value" />
      </div> -->

    {{category | get_items}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: [
        { name: "cate0", items: [{ value: "" }],placeholder:'请输入' },
        { name: "cate1", items: [{ value: "" }],placeholder:'请输入' }
      ]
    };
  },
  computed: {
    items() {
      return this.$eval("category | get_items");
    }
  },
  created() {
    const aa = { bb: { cc: "xxx" } };
    const xx = aa && aa.bb && aa.bb.cc;
    console.log(xx);
    this.eventLoop();
  },
  filters: {
    get_items: function(category) {
      var arr = [];
      category.forEach(c => c.items.forEach(t => arr.push(t)));
      console.log(arr);
      return arr;
    }
  },
  methods: {
    // 流程 练习
    eventLoop() {
      console.log('开始');
      console.log("1");

      setTimeout(function() {
        console.log("2");
        process.nextTick(function() {
          console.log("3");
        });
        new Promise(function(resolve) {
          console.log("4");
          resolve();
        }).then(function() {
          console.log("5");
        });
      });
      process.nextTick(function() {
        console.log("6");
      });
      new Promise(function(resolve) {
        console.log("7");
        resolve();
      }).then(function() {
        console.log("8");
      });

      setTimeout(function() {
        console.log("9");
        process.nextTick(function() {
          console.log("10");
        });
        new Promise(function(resolve) {
          console.log("11");
          resolve();
        }).then(function() {
          console.log("12");
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>