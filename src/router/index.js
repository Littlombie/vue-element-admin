import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/views/user/login'
import Admin from '@/views/admin/admin'
import Dashboard from '@/views/dashboard/dashboard'
import ComponentList from '@/views/components/components'
import Overview from '@/views/overview/overview'
import List from '@/views/list/list'
import AdminContainer from '@/views/list/admin-container'
import Tab from '@/views/list/tab'
import stepMap from '@/views/list/stepMap'
import parctice from '@/views/list/parctice'

import Form from '@/views/form/form'
import FormList from '@/views/form/form-list'
import addressSelect from '@/views/form/address'
import formValid from '@/views/form/formValid2'

import Others from '@/views/othersPage/others'
import Markdowm from '@/views/othersPage/markdown'
import Umoji from '@/views/othersPage/umoji'


// 重写路由方法
const [routerPush, routerReplace] = [Router.prototype.push, Router.prototype.replace];
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
};

Router.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error);
}

const vueRouter = new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        title: 'Admin'
      },
      component: Admin
    },
    {
      path: '/login',
      name: 'logn',
      meta: {
        title: '登录'
      },
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: '仪表板'
      },
      component: Dashboard,
      children: [{
          path: '/components',
          name: 'components',
          meta: {
            title: '组件'
          },
          component: ComponentList,
          children: [{
              path: 'overview',
              name: 'overview',
              meta: {
                title: '概况'
              },
              component: Overview
            },
            {
              path: 'admin-container',
              name: 'adminContainer',
              meta: {
                title: '控制中心',
              },
              component: AdminContainer
            }, {
              path: 'list',
              name: 'list',
              meta: {
                title: '列表',
              },
              component: List
            }, {
              path: 'tab',
              name: 'tab',
              meta: {
                title: '选项卡',
              },
              component: Tab
            }, {
              path: 'stepMap',
              name: 'stepMap',
              meta: {
                title: '流程图',
              },
              component: stepMap
            },{
              path: 'parctice',
              name: 'parctice',
              meta: {
                title: '测试',
              },
              component: parctice
            }
          ]
        },
        {
          path: '/form',
          name: 'form',
          meta: {
            title: 'Form'
          },
          component: Form,
          children: [
            {
              path: 'formList',
              name: 'formList',
              meta: {
                title: '表单验证',
              },
              component: FormList
            },
            {
              path: 'formValid',
              name: 'formValid',
              meta: {
                title: '表单联动校验'
              },
              component: formValid
            },
            {
              path: 'addressSelect',
              name: 'addressSelect',
              meta: {
                title: '地址三联选'
              },
              component: addressSelect
            }
          ]
        },
        {
          path: '/others',
          name: 'others',
          meta: {
            title: 'others'
          },
          component: Others,
          children: [{
            path: 'markdown',
            name: 'markdown',
            meta: {
              title: 'markdown',
            },
            component: Markdowm
          },{
            path: 'umoji',
            name: 'umoji',
            meta: {
              title: 'emoji相互转换',
            },
            component: Umoji
          }
        ]
        }
      ]
    }
  ],
  scrollBehavior: (to, from, savedPosition) => ({
    x: 0,
    y: 0
  })
})

var routerList = [];
vueRouter.beforeEach((to, from, next) => {

  let index = -1;
  for (let i = 0; i < routerList.length; i++) {
    //   判断路由之前是否存在，并返回位置
    if (routerList[i].name == to.name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    //   如果存在，则回到重复路由的之前位置
    routerList.splice(index + 1, routerList.length - index - 1);
  } else {
    //   不存在则加入循环数组内 
    routerList.push({
      name: to.name,
      path: to.path
    });
  }
  to.meta.routerList = routerList;

  // console.log('路由', routerList);

  if (to.meta.title) {
    document.title = to.meta.title;
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  next()
})
vueRouter.afterEach((to, from, next) => {
  // 跳到每个页面的时候 让页面滑动到最顶端
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

export default vueRouter