<template>
  <div class>
    <h3 style="margin: 20px 0">联动校验</h3>
    <el-form :model="forms" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="selectType" label="类型">
        <el-select v-model="forms.selectType" placeholder="请选择类型">
          <el-option
            v-for="(item, index) in typeArr"
            :key="index"
            :label="item.label"
            :value="item.value"
            @click.native="changeSelectType(item)"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="rule-content">
      <rule-form ref="ruleForm" :type="type" @ruleData="ruleData"></rule-form>
    </div>
    <div class="btn-wraps">
      <el-button size="medium" type="primary"  @click="submit">确 定</el-button>
      <el-button size="medium" @click="cancel">取 消</el-button>
    </div>
    <el-form :model="submitDatas" label-width="100px" >
      <el-form-item label="提交数据">
        <el-input v-model="submitDatas.data" type="textarea"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/javascript">
import ruleForm from "./components/ruleForm";
export default {
  name: "formValid2",
  data() {
    return {
      forms: {
        selectType: null,
        ruleDatas: []
      },
      rules: {
        selectType: [
          { required: true, message: "请选择类型", trigger: ["change", "blur"] }
        ]
      },
      submitDatas: {
        data: null
      },
      type: null,
      typeArr: [
        {
          label: "量变",
          value: 1
        },
        {
          label: "质变",
          value: 2
        }
      ]
    };
  },
  components: {
    "rule-form": ruleForm
  },
  methods: {
    changeSelectType(item) {
      console.log(item.value);
      this.type = item.value;
    },
    ruleData(data) {
      this.$set(this.forms, 'ruleDatas', data)

    },
    submit() {
      console.log(this.$refs['ruleForm'].validateForm());
      let flag = this.$refs['ruleForm'].validateForm();
      this.$refs.form.validate(async valid => {
        if (valid && flag) {
          console.log('校验通过', this.forms);
          this.$set(this.submitDatas, 'data', JSON.stringify(this.forms));
        } else {
          console.log('校验不通过');
        }
      });
      
    },
    cancel () {
      console.log('取消');
    }
  }
};
</script>

<style lang="less" scoped>
  .btn-wraps {
    margin: 40px 100px;
  }
</style>
