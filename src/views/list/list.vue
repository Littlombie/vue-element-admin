<template>
  <div>
    <h3>列表展示</h3>
    <div class="controll">
      <v-search @search="searchList"></v-search>
      <v-add-info @addInfo="add"></v-add-info>
    </div>
    <div class="list-table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
        @selection-change="handleSelectionChange"
        border
        align="center"
        header-align="center"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip min-width="200">
          <template slot-scope="scope">
            <p>{{scope.row.address}} {{scope.row.addDetail}}</p>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="addDetail" label="详细地址" show-overflow-tooltip></el-table-column> -->
        <el-table-column  label="类型" show-overflow-tooltip >
          <template slot-scope="scope">
            {{scope.row.type | types}}
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <v-pagination :totalCount="totalCount" @changeList="changeList" ></v-pagination>
    <v-aliterdetail :detail="detail" :showDetail="showDetail" @hideDetail="hideDetail" @showEdit="showedit"></v-aliterdetail>
    <v-editform :showEditDialog="dialogFormVisible" :formData="formData" @hideEditDialog="hideEdit" @subChange="changeInfo"></v-editform>
  </div>
</template>

<script>
import searchInput from "../../components/element-components/search-input";
import pagination from "../../components/element-components/pagination";
import alterDetail from  '../../components/form/alterDetail';
import editForm from '../../components/form/editForm'
import addInfo from '../../components/form/addInfo'

export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      totalCount: 1,
      pageSize: 10,
      detail:[],
      showDetail: false,
      dialogFormVisible: false,
      formData: {},
      loading: true,
    };
  },
  created () {
    this.getList()
  },
  filters: {
    types (val) {
      let typeArr = ['未开始', '进行中', '已完成', '已销毁'];
      return typeArr[val] || '其他'
    },
  },
  methods: {
    getList() {
      this.$http
        .tabList()
        .then(resp => {
          if (resp) { 
            if (resp.code == 200) {
              this.tableData = resp.data;
              this.totalCount = resp.data.length * 10;
              setTimeout(() => {
                this.loading = false;
              }, 1000)
            }
          }
        })
        .catch(err => {
          console.error(err);
          this.$alert("请求超时，刷新重试！");
        });
    },
    changeList (index) {
      this.getList();
    },
    searchList (val) {
      this.tableData = this.tableData.filter((item)=> {
        return item.name == val
      })
      // console.log(this.tableData);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      this.showDetail = true;
      this.detail.push(row);
      // console.log(this.detail.length);
      // this.$store.dispatch('detailsActions', true);
    },
    hideDetail () {
      this.showDetail = false;
      setTimeout(() => {
        this.detail.splice(0, this.detail.length)
      }, 200)
    },
    add () {
      for (let k of Object.keys(this.formData)) {
        this.formData.k = ''
      }
      console.log(this.formData);
      this.dialogFormVisible = true;
    },
    edit (row) {
      // console.log(row);
      this.formData = row
      this.dialogFormVisible = true;
    },
    showedit (row) {
      if (this.showDetail ) {
        this.hideDetail ()
      }
      this.edit()
    },
    hideEdit () {
      this.dialogFormVisible = false;
    },
    changeInfo (info) {
      // console.log(info);
      if (info.aid !== null) {
        this.tableData.forEach((item) => {
          if (item.id === info.aid) {
            item = {
              id: info.aid,
              date: info.infoDate,
              name: info.infoName,
              address: info.addText,
              addDetail: info.detailAddress
            }
            // console.log('sss',item);
            this.tableData.splice(item.id, 1, item)
          }
        })
      } else {
        let newObj = {
          id: this.tableData.length,
          date: info.infoDate,
          name: info.infoName,
          address: info.addText,
          addDetail: info.detailAddress
        }
        console.log(newObj);
        this.tableData.push(newObj)
      }
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  components: {
    "v-search": searchInput,
    "v-pagination": pagination,
    "v-aliterdetail": alterDetail,
    "v-editform": editForm,
    "v-add-info": addInfo
  }
};
</script>

<style lang="scss" scoped>
.controll {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  .add-info {
    margin-left: 20px;
  }
}
.list-table {
  margin-top: 20px;
}
</style>