
<template>
  <div class="v-panel shadow" :class="className" :style="`width:${width}px` ">
    <div class="panel-hd">
      <p class="title" :class="themeMode">{{title}}</p>
      <el-dropdown  @click="handleClick" trigger="click"  v-if="dropMenu.length">
        <span class="el-dropdown-link">
          <i class="iconfont el-icon-more" :class="themeMode"></i>
        </span>
        <el-dropdown-menu slot="dropdown" icon="el-icon-more">
          <el-dropdown-item v-for="(item, index) in dropMenu" :key="index">
            <p @click="handleClick(item)"><i class="iconfont" :class="item.icon"></i> {{item.name}}</p>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="panel-bd">
      <slot name="panelContent"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex';
export default {
  name: "",
  props: {
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    dropMenu: {
      type: Array,
      default: []
    },
    width: {
      type: Number
    }
  },
  data() {
   return {

   }
  },
  watch: {
  },
  computed: {
    ...mapGetters({
      themeMode: 'THEME_MODE'
    })
  },
 components: {
 },
 methods: {
   handleClick (item) {
     this.$emit('optionEvent', item)
   },
 },
}
</script>

<style lang="less" scoped>
  .v-panel {
    // margin-top: 20px;
    min-width: 400px;
    border: 1px solid #eee;
    border-radius: 4px;
    background: #fff;
    .panel-hd {    
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      width: 100%;
      height: 52px;
      line-height: 52px;
      background: #f8f9fc;
      border-bottom: 1px solid #eee;
      .title {
        color: #515b6d;
        font-size: 16px;
        font-weight: 600;
      }
      .el-dropdown {
        cursor: pointer;
        .iconfont {
          height: 20px;
          font-size: 20px;
          transform: rotate(90deg);
        }
      }
    }
    .panel-bd {
      padding: 20px;
    }
  }
</style>
