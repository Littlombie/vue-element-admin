<template>
  <div class="property-panel" ref="propertyPanel">
    <el-form :inline="true" :model="form" label-width="80px" label-position="right">
      <h4 class="title">节点名称</h4>
      <el-form-item label="节点ID">
        <el-input v-model="form.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="节点名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "",
  props: {
    modeler: {
      type: Object
    }
  },
  data() {
   return {
    form: {
      id: null,
      name:null
    }
   }
  },
 components: {
 },
 mounted() {
  this.$nextTick(() => {
    console.log(this.modeler.get('eventBus'));
    this.handleModeler();
  })
 },
 methods: {
    handleModeler() {
      const eventBus = this.modeler.get('eventBus');
      eventBus.on(['element.click', 'autoPlace.end'], evt => {
        // console.log(evt);
        const element = evt.element || evt.shape;
        console.log(element);
      })
      // 监听节点选择变化
      this.modeler.on('selection.changed', (e) => {
          const element = e.newSelection[0]
          // console.log(element) 
      })

      //  监听节点属性变化
      this.modeler.on('element.changed', (e) => {
          const { element } = e
          // console.log(element) 
      })
    },
 },
}
</script>

<style lang="less" scoped>
  .property-panel {
    position: absolute;
    z-index: 99;
    top: 20px;
    right: 10px;
    border: 1px solid #ddd;
    background: #fff;
    .el-form {
      .title {
        margin-bottom: 20px;
        line-height: 3;
        text-indent: 20px;
        border-bottom: 1px solid #ddd;
      }
      .el-form-item {
        display: block;
        /deep/ .el-form-item__content {
          width: 200px;
          .el-input  {
            height: 30px;
            line-height: 30px;
            input {
              height: 30px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
</style>
