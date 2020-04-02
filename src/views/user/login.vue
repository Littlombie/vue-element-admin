<template>
  <div class="page-module login-container backgroundCover flex width_100 height_100">
    <div class="login-panel">
      <div class="bg-cover"></div>
      <h3 class="head-text">请登录</h3>
        <login-panel></login-panel>
    </div>
  </div>
</template>

<script>
import loginPanel from '@/components/form/login'
export default {
  components: {
    'login-panel': loginPanel
  }
}
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