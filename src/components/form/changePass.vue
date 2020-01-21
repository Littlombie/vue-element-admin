<template>
  <el-dialog
    title="修改密码"
    :visible.sync="changePassDialog"
    :before-close="hidePassDialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="35%"
  >
    <el-form status-icon :model="form" :rules="rules"  ref="ruleForm" :label-position="labelPosition">
      <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
        <el-input placeholder="请输入用户名" v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" prop="pass">
        <el-input placeholder="请输入密码" v-model="form.pass" maxlength="16" show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" :label-width="formLabelWidth" prop="checkPass">
        <el-input placeholder="请输入密码" v-model="form.checkPass" maxlength="16" show-password autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="clearPassDialog('ruleForm')">取 消</el-button>
      <el-button @click="resetForm('ruleForm')">重 置</el-button>
      <el-button type="primary" @click="submitForm('ruleForm') ">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
     var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
         console.log(value.length)
          if (value.length > 10 || value.length < 2) {
            callback(new Error('请输入正确的账号'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      // changePassDialog:false,
      labelPosition: 'right',
      form: {
        name: "",
        pass: "",
        checkPass: ""
      },
      rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
      },
      formLabelWidth: "80px"
    };
  },
  computed: {
    ...mapState ({
      changePassDialog: (state) => state.form.changePassDialog
    })
  },
  methods: {
    hidePassDialog () {
      this.$store.dispatch('changeChangePass', false);
    },
    clearPassDialog (formName) {
      this.$store.dispatch('changeChangePass', false);
      // 重置
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit', this.form);
          setTimeout(() => {
            this.$store.dispatch('changeChangePass', false);
            this.$refs[formName].resetFields();
          }, 1000)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>