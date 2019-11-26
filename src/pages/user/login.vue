<template>
  <div class="page-module login-container backgroundCover flex width_100 height_100">
    <div class="login-panel">
      <div class="bg-cover"></div>
      <p class="head-text">请登录</p>
      <el-form class="login-form" size="medium" :model="form" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input placeholder="请输入账户名：" autofocus v-model="form.username" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入账户密码：" v-model="form.password" />
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
      this.$http.login({
        username: 'admin',
        password: 'admin'
      }).then(resp => {
        if (resp) {
          resp = JSON.parse(resp);
          this.setUserInfo(resp.data)
          this.$router.replace('/components/admin-container')
        }
      }).catch(err => {
        throw new Error(err);
      })

      this.submitLoad = true;
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
    padding: 25px 15px;
    width: 350px;
    border-radius: 3px;
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