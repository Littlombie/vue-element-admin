<template>
  <div class="sc-panel">
    <h3>{{infoData.content}}</h3>
    <div class="data-origin">
      <h5>{{infoData.origin.title}}</h5>
      <span>  ---- {{infoData.origin.author}}【{{infoData.origin.dynasty}}】</span>
    </div>
    <p class="data-date">{{chcheAt}}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "scPanel",
  props: {
    dataSc: {
      type: Object
    }
  },
  data() {
   return {
     infoData: {},
     chcheAt: ''
   }
  },
  watch: {
    dataSc: {
      handler(newVal) {
        if (newVal) {
          this.infoData = newVal;
          this.chcheAt = this.$dayjs(newVal.cacheAt).format('YYYY-MM-DD HH:mm:ss');
        }
      },
      deep: true,
      immediate: true
    },
  },
 components: {
 },
 methods: {
 },
}
</script>

<style lang="less" scoped>
.sc-panel {
  h3 {
    font-size: 28px;
    font-family: 'FZXiJinLJW';
  }
  .data-origin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    h5 {
      font-size: 20px;
      padding-right: 5px;
    }
  }
  .data-date {
    margin-top: 50px;
    // padding-right: 50px;
    text-align: center;
  }

}
</style>
