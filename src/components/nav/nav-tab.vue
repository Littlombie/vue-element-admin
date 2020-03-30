<template>
  <div class="tab-list">
    <div class="tag-controller" :style="tabWidth">
      <div class="arrow-controller arrow-left" @click="turnLeft">
        <i class="iconfont el-icon-caret-left" :class="{}"></i>
      </div>
      <div class="tag-list" ref="scrollTags">
        <el-tag 
          v-for="(tag, index) in routerTags" 
          :key="index"  
          :closable="closable"
          :type="tag.current ? '' : 'info'" 
          :class="{current:$route.name == tag.routerName}" 
          :disable-transitions="true"
          @click="to(tag)"
          @close="close(tag, index)">
          {{tag.name}}
        </el-tag>
      </div>
      <div class="arrow-controller arrow-right" @click="turnRight">
        <i class="iconfont el-icon-caret-right" :class="{}"></i>
      </div>
    </div>
    <div class="tag-menu">

    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        currentTag: null,
        closable: false,
        tabWidth: {},
        scrollX:null
      }
    },
    watch: {
      routerTags: {
        handler(newVal, oldVal) {
          if(newVal.length == 1){
            this.closable = false
          }else {
            this.closable = true
          }
        },
        deep: true,
        immediate: true 
      },
      $route (to, from) {
        // console.log(to);
        const currentTag = {
          routerName: to.name,
          name: to.meta.title,
          query: to.query
        }
        this.setRouterTags(currentTag);
        this.setCurrentTag(currentTag);
      },
      scrollX: {
        handler(newVal, oldVal) {
          // console.log(newVal);
        }
      },
    },
    created () {
      this.init()
    },
    mounted (){
      this.$nextTick(()=> {
        // console.log(this.$refs, this.$refs.scrollTags.scrollLeft);
        this.scrollX = this.$refs.scrollTags.scrollLeft;
      })
    },
    computed: {
      // ...mapState({
      //   getRouterTags: state => state.tabs.tags
      // }),
      ...mapGetters({
        routerTags: 'GET_ROUTERTAGS'
      })
    },
    methods: {
      init() {
        const currentTag = {
          name: this.$route.meta.title,
          routerName: this.$route.name,
          query: this.$route.query
        }
        this.setRouterTags(currentTag);
        this.setCurrentTag(currentTag);
      },
      to(route) {
        this.$router.push({
          name: route.routerName, 
          query: route.query
        })
      },
      turnLeft() {

      },
      turnRight() {
        
      },
      close(route, index) {
        if (this.routerTags.length === 1) {
          return;
        }
        if (this.$route.name === route.routerName) {
          const witch = index - 1 < 0 ? (index) : (index - 1);
          this.$router.push({
            name: this.routerTags[witch].routerName,
            query: this.routerTags[witch].query
          });
        }
        console.log(route, index);
        this.closeRouterTag(route)
      },
      setCurrentTag (tag) {
        // console.log(tag);
      },
      ...mapActions({
        setRouterTags: 'SET_ROUTERTAGS',
        closeRouterTag: 'CLOSE_ROUTERTAG'
      })
    }
  }
</script>

<style lang="less" scoped>
  .tab-list {
    display: flex;
    justify-content: flex-start;
    // position: absolute;
    // top: 60px;
    height: 40px;
    width: 100%;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
    .tag-controller {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 40px;
      // overflow-x: scroll;
      .tag-list {
        width: ~'calc(100% - 60px)';
        height: 40px;
        padding: 4px 0;
        overflow-x: auto;
        display: flex;
        justify-content: flex-start;
        .el-tag {
          margin: 0 2px;
          color: #909399;
          cursor: pointer;
          background-color: #fff;
          &:before {
            display: inline-block;
            margin-right: 2px;
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 8px;
            background: #f0f0f0;
          }
          .el-icon-close {
            color: #909399;
          }
          &.current {
            // color: #3a8ee6;
            color: #409eff;
            &:before {
              background: #409eff;
            }
            .el-icon-close {
              color: #409eff;
              &:hover {
                color: #FFF;
                background-color: #409eff;
              }
            }
          }
        }
      }
      .iconfont {
        width: 20px;
        height: 40px;
        line-height: 40px;
        background: #fff;
        cursor: pointer;
      }
    }
  }
</style>