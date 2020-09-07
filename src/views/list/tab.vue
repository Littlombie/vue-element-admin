<template>
  <div class="tab-page">
    <div class="add-contorll" style="margin-bottom: 20px;">
      <el-input v-focus placeholder="自定义指令---tab名称" v-model="tabTitle" size="small"></el-input>
      <el-button size="small" @click="addTab(editableTabsValue)">add tab</el-button>
    </div>
    <el-button type="text" @click="formData.isVisible = true">父子双向绑定 Dialog</el-button>
     {{formData.text}}
    
    <div class="add-list"> 
      <div class="list-01">
        <p v-for="item in datas" :key="item.id" @click="addData(item)">{{item.id}}--{{item.name}}  </p> 
      </div>
      <div class="list-02">
        <p v-for="(item, index) in list" :key="item.id">{{item.id}}--{{item.name}} <i @click="toDelete(index)">×</i></p>
      </div>
    </div>
    <p ></p>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >{{item.content}}</el-tab-pane>
    </el-tabs>
    <dialog-form :formDatas.sync="formData"></dialog-form>
  </div>
</template>

<script>
import dialog from '../../components/element-components/dialog' //@/components/element-components/dialog
export default {
  data() {
    return {
      editableTabsValue: "2",
      tabTitle: '',
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2,
      index: 2,
      formData: {
        isVisible: false,
        text: '默认的值'
      },
      datas: [{
        id: 1,
        name: '张三',
      },{
        id: 2,
        name: '李四',
      },{
        id: 3,
        name: '王五',
      },{
        id: 4,
        name: '赵留',
      }],
      list: []
    };
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  components: {
    'dialog-form': dialog
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab - " + this.tabTitle,
        name: newTabName,
        content: "New Tab content - " + this.tabIndex
      });
      this.editableTabsValue = newTabName;
      this.tabTitle = '';
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
    addData (item) {
      if (!this.list.length) {
        this.list.push(item)
      } else {
        for(let i = 0; i < this.list.length; i++) {
          if (this.list.indexOf(item) == -1) {
            this.list.push(item)
          }
        }
      }
      console.log(this.list);
    },
    toDelete (index) {
      this.list.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.add-contorll {
  .el-input {
    width: 300px;
    margin-right: 20px;
  }
}
.tab-page {
  min-height: 500px;
  padding: 20px;
  background: #fff;
}
.add-list {
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &>div {
    margin: 0 30px;
    p {
      cursor: pointer;
    }
  }
}
</style>