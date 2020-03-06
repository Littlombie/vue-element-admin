<!--
 * @Author: Littlombie
 * @Date: 2020-03-06 15:27:09
 * @lastEditors: Littlombie
 * @LastEditTime: 2020-03-06 17:28:59
 -->
<template>
  <span class="changeLangs" @click="changeLangs(langs)">
    <i :class="langs == 'cn' ? 'isActive' : ''">中</i> /
    <i :class="langs == 'en' ? 'isActive' : ''">En</i>
  </span>
</template>

<script type="text/javascript">
export default {
  name: "",
  data() {
    return {
      langs: 'cn'
    };
  },
  components: {},
  created() {
    let _this = this;
    _this.$nextTick(() => {
    _this.langs = _this.$storage.get('lang') == undefined? 'cn' : _this.$storage.get('lang');
    console.log(_this.langs,'--', _this.$storage.get('lang'));
    })
  },
  methods: {
    changeLangs(langs) {
      // console.log('change langs', langs);
      let nowLangs = langs == 'en' ?  'cn' : 'en';
      this.langs = nowLangs;
      
      this.$storage.set('lang', nowLangs);
      this.$i18n.locale = nowLangs;
    }
  }
};
</script>

<style lang="less" scoped>
  .changeLangs {
    margin-right: 0;
    cursor: pointer;
    i {
      font-style: normal;
      &.isActive {
        color: #409EFF;
      }
    }
  }
</style>


