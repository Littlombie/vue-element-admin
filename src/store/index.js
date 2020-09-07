import Vue from 'vue'
import Vuex from 'vuex'
import Init from '../store/init' //@/store/init.js
import Form from '../store/form.js'
import User from '../store/user.js'
import Tabs from '../store/tabs.js'
import ChangeTheme from '../store/changeTheme.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    init: Init,
    form: Form,
    user: User,
    tabs: Tabs,
    changeTheme: ChangeTheme
  }
})