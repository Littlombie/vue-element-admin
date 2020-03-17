<template>
  <div class="tab-list">
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.current ? '' : 'info'" :class="tag.current ? 'current' : '' " >
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        tags: [
          { name: '标签一',  current: false},
          { name: '标签二',  current: true},
          { name: '标签三',  current: false},
          { name: '标签四',  current: false},
          { name: '标签五',  current: false}
        ]
      }
    },
    watch: {
      $route (to, from) {
        const currentTag = {
          name: to.name,
          title: to.meta.title,
          query: to.query
        }
        this.setRouterTags(currentTag);
        this.setCurrentTag(currentTag);
      },
    },
    created () {
      
    },
    computed: {
      ...mapGetters({
        getRouterTags: 'GET_ROUTERTAGS'
      })
    },
    methods: {
      setCurrentTag (tag) {
        console.log(tag);
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
    width: 100%;
    height: 40px;
    padding: 4px 0;
    line-height: 40px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
    .el-tag {
      margin: 0 4px;
      color: #909399;
      cursor: pointer;
      &:before {
        display: inline-block;
        margin-right: 2px;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 8px;
        background: #909399;
      }
      .el-icon-close {
        color: #909399;
      }
      &.current {
        // color: #3a8ee6;
        color: #409eff;
        background-color: #fff;
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
</style>