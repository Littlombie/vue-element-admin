<template>
  <div class="page-module login-container backgroundCover flex width_100 height_100">
    <div class="login-panel">
      <div class="bg-cover"></div>
      <h3 class="head-text">请登录</h3>
      <el-form class="login-form" size="medium" :model="form" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input placeholder="请输入账户名："  prefix-icon="el-icon-user" autofocus v-model.trim="form.username"  @keyup.enter="onSubmit"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入账户密码：" v-model.trim="form.password" @keyup.enter.native="onSubmit" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="width_100"
            @click="onSubmit"
            :loading="submitLoad"
          >登录</el-button> 
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'login',
  data() {
    return {
      form: {
        username: null,
        password: null
      },
      rules: {
        username: [{required: true, message: '请输入账户名！', trigger: 'blur'}],
        password: [{required: true, message: '请输入账户密码！', trigger: 'blur'}]
      },
      submitLoad: false
    };
  },
  methods: {
    ...mapActions ({
      setUserInfo: 'SET_USER_INFO'
    }),
    onSubmit() {
      this.$refs.form.validate( valid => {
        if (valid) {
          const { username, password} = this.form;
          const data = {
            username,
            password,
          };
          this.submitLoad = true;
          let loginStatus = '';
          const _this = this;
          (async (data) => {
            let res = await this.$http.login(data);
            console.log(res);
            if (res && res.code ===200) {
              _this.setUserInfo(res.data)
              _this.$router.push({name: 'adminContainer'});
              loginStatus = 'success'
            } else {
              _this.submitLoad = false;
              loginStatus = 'error'
              _this.showTips();
            }
            _this.$message[loginStatus](res.msg);
          })(data)
        } else {
          _this.submitLoad = false;
          this.showTips();
        }
      })
    },
    showTips() {
      const h = this.$createElement;

      this.$notify({
        title: '温馨提示',
        message: h('i', { style: 'color: teal'}, '账号：admin 密码：123456')
      });
    }
  }
};
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
.login-container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right bottom,
#02c7fd 0%, #ff0202 100%);

  .login-panel {
    padding: 25px 30px;
    width: 30%;
    max-width: 350px;
    border-radius: 5px;
      background-color: #fff;
    &:after {
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }

  .head-text {
    margin-bottom: 25px;
  }
}
</style>