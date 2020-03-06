<template>
  <el-header style="text-align: right; font-size: 12px">
    <el-row>
      <el-col
        :span="2"
        class="header-nav-controll"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
      >
        <el-button class="no-b toogle-buttons" @click="toggleMenuOpen">
          <svg
            v-if="iconName"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            class="hamburger is-active"
          >
            <path
              data-v-49e15297
              d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
            />
          </svg>
          <!-- <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="hamburger is-active"><path data-v-49e15297="" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path></svg> -->
          <svg
            v-else
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            class="hamburger"
          >
            <path
              data-v-49e15297
              d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
            />
          </svg>
        </el-button>

      </el-col>
      <el-col :span="6" style="text-align:left;">
        <span>{{$t('message.Text')}}</span>
      </el-col>
      <el-col :span="7" :offset="9">
        <div class="header-conroll">
          <change-langs></change-langs>
          <el-badge class="item">
            <i class="iconfont icon-smile"></i>
          </el-badge>
          <el-badge :value="msgView" class="item" :hidden="msgView==0" @click="sayMsg">
            <i class="msgViews" :class="this.msgIcon ? 'el-icon-message-solid' : 'el-icon-bell'"></i>
          </el-badge>
          <div class="header-wrap text-r">
            <el-dropdown>
              <el-button class="no-b">
                <!-- <i class="el-icon-user-solid"  aria-hidden="true"></i> -->
                <img :src="getInfo.avatar" class="el-icon-user-solid" alt />
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="openInfo">
                    <i class="el-icon-user"></i>
                    {{$t('message.Info')}}
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div class="changePass" @click="showChange">
                    <i class="el-icon-key"></i>
                    {{$t('message.LoginpPass')}}
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div @click="loginOut">
                    <i class="el-icon-switch-button"></i>
                    {{$t('message.SignOut')}}
                  </div>
                  <!-- <router-link to="/admin" tag="div">
                  </router-link>-->
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
      <!-- <el-col :span="5" :offset="15">
      </el-col>
      <el-col :span="2" >
      </el-col>-->
    </el-row>
  </el-header>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import changeLangs from '@/components/element-components/chnageLangs'

import { log } from "util";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      msgView: 8,
      msgIcon: true
    };
  },
  methods: {
    ...mapActions({
      setUserInfo: "SET_USER_INFO"
    }),
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleMenuOpen() {
      this.$store.commit("toggleMenuOpen");
    },
    openInfo() {
      this.$store.dispatch("changeInfoDia", true);

      // this.$alert(<Info></Info>, "个人信息", {
      //   confirmButtonText: "",
      //   center: true
      // });
    },
    showChange() {
      this.$store.dispatch("changeChangePass", true);
    },
    sayMsg() {
      if (this.msgIcon) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });

            this.msgView = 0;
            this.msgIcon = false;
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    async loginOut() {
      const { $confirm, $http, $message, $router, setUserInfo } = this;

      try {
        await $confirm("此操作将退出登录, 是否继续?", "提示", {
          type: "warning"
        });
        const res = await $http.logout();
        console.log(res);
        await $message.success(res.msg);
        setUserInfo(null);
        $router.replace("/admin");
      } catch (err) {
        err && $message.warn(err.msg);
      }
    }
  },
  mounted() {},
  computed: {
    ...mapState({
      isNavMenuOpen: state => state.init.isNavMenuOpen
    }),
    ...mapGetters({
      getInfo: "GET_USER_INFO"
    }),
    iconName() {
      return this.isNavMenuOpen;
    }
  },
  components: {
    // 'Info': Info
    'change-langs': changeLangs
  }
};
</script>
<style lang="scss">
.toogle-buttons {
  .el-icon-s-fold,
  .el-icon-s-unfold {
    font-size: 20px;
  }
}
</style>
<style lang="scss" scoped>
.el-header {
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
}
.header-wrap {
  display: inline-block;
  vertical-align: middle;
  padding-left: 20px;
}
.header-nav-controll {
  text-align: left;
}
.no-b {
  border: none !important;
}
.text-r {
  text-align: right;
}

.head-wrap {
  height: 40px;
  border-bottom: 1px solid #eee;
}
.item {
  margin: 5px 10px;
  line-height: 0%;
  &:last-of-type {
    // margin-right: 30px;
  }
}
.msgViews {
  font-size: 20px;
  cursor: pointer;
}

.el-button {
  padding: 6px 10px;
  & > span {
    height: 20px;
  }
  .is-active {
    transform: rotate(180deg);
  }
}
.el-icon-user-solid {
  display: inline-block;
  vertical-align: text-bottom;
  width: 20px;
  height: 20px;
  padding: 2px;
  background: #ccc;
  border-radius: 30px;
}
.el-message-box__title {
  text-align: center;
}
.el-message-box__btns {
  text-align: center;
}
</style>