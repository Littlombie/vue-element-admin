
<template>
  <div class="panel shadow" :class="className" :style="`width:${width}px` ">
    <div class="panel-hd">
      <p class="panel-title" :class="themeMode">{{title}}</p>
      <div class="panel-handle">
        <p v-if="canStretch" class="panel-handle-stretch" @click="toogleStretch">
          <span>{{handleStretch}}</span>
          <i class="iconfont" :class="showPanel ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
        </p>
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
    </div>
    <div class="panel-bd">
      <el-collapse-transition>
        <div class="panel-bd-content" v-show="showPanel">
          <slot name="panelContent"></slot>
        </div>
      </el-collapse-transition>
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
    },
    canStretch: {
      type: Boolean,
      default: true
    },
    isOpen: {
      type: Boolean,
      default: true
    }
  },
  data() {
   return {
     handleStretch: '收缩',
     showPanel: false
   }
  },
  watch: {
    isOpen: {
      handler(val) {
        this.showPanel = val;
      },
      immediate: true
    }
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
   toogleStretch () {
     this.showPanel = !this.showPanel;
     this.handleStretch = this.showPanel  ? '收缩' : '展开'
   }
 },
}
</script>

<style lang="less" scoped>
  .panel {
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
      .panel-title {
        color: #515b6d;
        font-size: 16px;
        font-weight: 600;
      }
      .panel-handle {
        .panel-handle-stretch {
          display: inline-block;
          cursor: pointer;
          &>span {
            font-size: 14px;
            margin-right: 5px;
          }
          *>.iconfont {
            font-size: 12px;
          }
        }
        .el-dropdown {
          margin-left: 20px;
          cursor: pointer;
          .iconfont {
            height: 20px;
            font-size: 20px;
            transform: rotate(90deg);
          }
        }
      }
    }
    .panel-bd {
      .panel-bd-content {
        margin: 20px;
      }
    }
  }
</style>
