<template>
    <el-form class="login-form" size="medium" :model="form" :rules="rules" ref="form">
      <el-form-item prop="username">
        <el-input placeholder="请输入账户名"  prefix-icon="el-icon-user" autofocus v-model.trim="form.username"  @keyup.enter="onSubmit"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入账户密码" v-model.trim="form.password" @keyup.enter.native="onSubmit" />
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
</template>

<script type="text/javascript">
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
  watch: {
    $route (to, from) {
      console.log(to)
      const currentTag = {
        routerName: to.name,
        name: to.meta.title,
        query: to.query
      }
      this.setRouterTag(currentTag)
    },
  },
  methods: {
    ...mapActions ({
      setUserInfo: 'SET_USER_INFO',
      setRouterTag:'SET_ROUTERTAGS', 
    }),
    onSubmit() {
      const _this = this;
      this.$refs.form.validate( valid => {
        if (valid) {
          const { username, password} = this.form;
          const data = {
            username,
            password,
          };
          this.submitLoad = true;
          let loginStatus = '';
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

<style lang="less" scoped>
.login-form {
  /deep/.el-form-item__content {
    width: 100%;
  }
}
</style>
