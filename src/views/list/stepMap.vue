<template>
  <div class="views-box">
    <div class="views-container">
      <div class="canvas" ref="canvas"></div>
      <bpmn-panel :modeler="bpmnModeler"></bpmn-panel>
    </div>
    <!-- <div ref='myDiagramDiv' style="min-width:500px; width: 100%;height:350px"></div> -->
  </div>
</template>

<script type="text/javascript">
import BpmnModeler from "bpmn-js/lib/Modeler"; // 引入 bpmn-js
import bpmnPanel from '../../components/bpmn/bpmnPanel' //@/components/bpmn/bpmnPanel
export default {
  name: "",
  data() {
    return {
      bpmnModeler: null,
      bpmnXmlStr: `<?xml version="1.0" encoding="UTF-8"?>
        <bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
          <bpmn2:process id="myProcess" isExecutable="true"></bpmn2:process>
          <bpmndi:BPMNDiagram>
            <bpmndi:BPMNPlane></bpmndi:BPMNPlane>
          </bpmndi:BPMNDiagram>
        </bpmn2:definitions>`,
    };
  },
  components: {
    bpmnPanel
  },
  created() {},
  mounted() {
    const canvas = this.$refs.canvas;
    // 生成实例
    this.bpmnModeler = new BpmnModeler({
      container: canvas
    })
    this.createNewDiagram();// 新增流程定义
  },
  methods: {
    createNewDiagram() {
      // 将字符串转换成图显示出来
      this.bpmnModeler.importXML(this.bpmnXmlStr, err => {
        if (err) {
          console.error(err);
        }
      });
    },
  }
};
</script>

<style lang="less" scoped>
  @import '~bpmn-js/dist/assets/diagram-js.css';
  @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
  @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
  @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

  .views-box{
    position: relative;
    min-height: 78vh;
    padding: 0;
    .views-container {
      position: absolute;
      background-color: #ffffff;
      width: 100%;
      height: 100%;
      .canvas{
        width: 100%;
        height: 100%;
      }
      .bjs-powered-by {
        display: none;
      }
    }
  }
</style>
