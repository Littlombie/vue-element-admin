<template>
  <div class="tab-list">
    <div class="tag-controller" :style="tabWidth">
      <div class="arrow-controller arrow-left">
        <i class="iconfont el-icon-caret-left" :class="{}"></i>
      </div>
      <div class="tag-list">
        <el-tag 
          v-for="(tag, index) in getRouterTags" 
          :key="index" closable 
          :type="tag.current ? '' : 'info'" 
          :class="{current:$route.name == tag.routerName}" 
          @click="to(tag)"
          @close="close(tag, index)">
          {{tag.name}}
        </el-tag>
      </div>
      <div class="arrow-controller arrow-right">
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
        tabWidth: {
          // width: 0
        }
      }
    },
    watch: {
      $route (to, from) {
        const currentTag = {
          routerName: to.name,
          name: to.meta.title,
          query: to.query
        }
        this.setRouterTags(currentTag);
        this.setCurrentTag(currentTag);
      },
    },
    created () {
      
    },
    computed: {
      // ...mapState({
      //   getRouterTags: state => state.tabs.tags
      // }),
      ...mapGetters({
        getRouterTags: 'GET_ROUTERTAGS'
      })
    },
    methods: {
      to(route) {
        this.$router.push({
          name: route.routerName, 
          query: route.query
        })
      },
      close(route, index) {
        console.log(route, index);
      },
      setCurrentTag (tag) {
        console.log(tag);
        // this.getRouterTags = this.getRouterTags.map(item => {
        //   item.currentTag = false;
        //   if (item.name == tag.name) {
        //     item.currentTag = true
        //   }
        //   return item;
        // });
      },
      ...mapActions({
        setRouterTags: 'SET_ROUTERTAGS'
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
      height: 40px;
      .tag-list {
        width: 100%;
        height: 40px;
        padding: 4px 0;
        overflow: hidden;
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