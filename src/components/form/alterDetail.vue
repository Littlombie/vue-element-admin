<template>
  <el-dialog
    title="修改密码"
    :visible.sync="showDetail"
    :before-close="hidePassDialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="50%"
  >
    <el-table :data="detail">
      <el-table-column property="id" label="ID" width="40"></el-table-column>
      <el-table-column property="date" label="日期" width="100"></el-table-column>
      <el-table-column property="name" label="姓名" width="80"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
      <el-table-column property="addDetail" label="详细地址"></el-table-column>
      <el-table-column fixed="right" label="操作" visiable="hidden">
        <template slot-scope="scope">
            <el-button @click="editForm(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div slot="footer" class="dialog-footer">
      <!-- <el-button @click="clearPassDialog('ruleForm')">取 消</el-button> -->
      <!-- <el-button @click="editForm">编辑</el-button> -->
      <el-button type="primary" @click="hidePassDialog ">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapGetters} from "vuex";

export default {
  props: {
    detail: Array,
    showDetail: Boolean
  },
  data () {
    return {
      details: []
    }
  },
  created () {
  },
  mounted () {

  },
  computed: {

    // details () {
    //   return this.detail
    // }
    // ...mapState({
    //   // showDetails: state => state.form.showDetails
    // })
  },
  methods: {
    hidePassDialog () {
      this.$emit('hideDetail')
      // this.$store.dispatch('detailsActions', false)
    },
    editForm (row) {
      console.log( row);
      this.$emit('showEdit', row);
      // this.$store.dispatch('detailsActions', false)
    }
  }

};
</script>

<style lang="scss" scoped>
</style>