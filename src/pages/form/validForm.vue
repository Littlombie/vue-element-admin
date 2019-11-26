<template>
  <div class="views-box">
    <el-row>
      <el-col :span="8">
        <div v-for="(item,index) in Data" :key="index">
          <el-form :model="item" :ref="'ValidateForm'" class="demo-ruleForm" :rules="rules"  size="small">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="item.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="item.checkPass" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <el-button type="primary" @click="submitForms('ValidateForm')">提交</el-button>
        <el-form :model="Data[0]" :ref="'ValidateForm'" class="demo-ruleForm" :rules="rules" size="small">
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="Data[0].pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="Data[0].checkPass" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm('ValidateForm')">提交</el-button>
        <el-form  size="small" @change="changeForm" :model="dynamicValidateForm" ref="dynamicValidateForm">
          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'输入框' + index"
            :key="domain.key"
            :prop="'domains.' +index+ '.value'"
            :rules="{ required: true, message: '不能为空', trigger: 'blur' }"
          >
            <el-input v-model="domain.value"  :name="domain.value"></el-input>
            <el-button @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
          <el-button @click="addDomain">新增域名</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.Data[this.SelectedIndex].pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dynamicValidateForm: {
      domains: [
        {
          value: ""
        }
      ]
      },
      Data: [
        {
          pass: "",
          checkPass: ""
        },
        {
          pass: "",
          checkPass: ""
        },
        {
          pass: "",
          checkPass: ""
        }
      ],
      rules: {
        checkPass: [{ validator: validatePass, trigger: "blur" }]
      },
      SelectedIndex: 0
    };
  },
  methods: {
    changeForm(val){
      console.log(val);
    },
    submitForms(formName) {
      for (var i = 0; i < this.Data.length; i++) {
        this.SelectedIndex = i;
        this.$refs[formName].validate(valid => {
          if (valid) {
            console.log("验证成功！");
          } else {
            console.log("error submit!!");
          }
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("验证成功！");
        } else {
          console.log("error submit!!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    }
  }
};
</script>