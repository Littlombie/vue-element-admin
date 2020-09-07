<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  mounted() {
    window.addEventListener("beforeunload", e => 
      this.beforeunloadHandler(e)
    );
    window.addEventListener("unload", e => this.unloadHandler(e));
  },
  destroyed() {
    window.removeEventListener("beforeunload", e =>
      this.beforeunloadHandler(e)
    );
    window.removeEventListener("unload", e => this.unloadHandler(e)); 
  },
  methods: {
    beforeunloadHandler() {
        this._beforeUnload_time = new Date().getTime();
    },
    unloadHandler(e) {
      this._gap_time = new Date().getTime() - this._beforeUnload_time;
      // debugger;
      //判断是窗口关闭还是刷新
      if (this._gap_time <= 5) {
        //如果是登录状态，关闭窗口前，移除用户
        if (!this.showLoginButton) {
          $.ajax({
            url: "/pictureweb/user/remove",
            type: "get",
            async: false //或false,是否异步
          });
        }
      }
    }
  }
};
</script>

<style>
#app {
  height: 100%;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
