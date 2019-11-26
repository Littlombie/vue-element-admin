import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/pages/user/login'
import Admin from '@/pages/admin/admin'
import Dashboard from '@/pages/dashboard/dashboard'
import ComponentList from '@/pages/components/components'
import Overview from '@/pages/overview/overview'
import List from '@/pages/list/list'
import AdminContainer from '@/pages/list/admin-container'
import Tab from '@/pages/list/tab'
import stepMap from '@/pages/list/stepMap'

import Form from '@/pages/form/form'
import Check from '@/pages/form/check'
import FormList from '@/pages/form/form-list'
import addressSelect from '@/pages/form/address'
import validForm from '@/pages/form/validForm'

import Others from '@/pages/othersPage/others'
import Markdowm from '@/pages/othersPage/markdown'

const vueRouter = new Router({
  mode: 'history',
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
        title: 'Login'
      },
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: 'Dashboard'
      },
      component: Dashboard,
      children: [{
          path: '/components',
          name: 'components',
          meta: {
            title: 'Components'
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
                title: 'AdminContainer',
              },
              component: AdminContainer
            }, {
              path: 'list',
              name: 'list',
              meta: {
                title: 'List',
              },
              component: List
            }, {
              path: 'tab',
              name: 'tab',
              meta: {
                title: 'Tab',
              },
              component: Tab
            }, {
              path: 'stepMap',
              name: 'stepMap',
              meta: {
                title: 'stepMap',
              },
              component: stepMap
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
          children: [{
              path: 'check',
              name: 'check',
              meta: {
                title: 'Check',
              },
              component: Check
            }, {
              path: 'validForm',
              name: 'validForm',
              meta: {
                title: 'validForm'
              },
              component: validForm
            },
            {
              path: 'formList',
              name: 'formList',
              meta: {
                title: 'form-list',
              },
              component: FormList
            },
            {
              path: 'addressSelect',
              name: 'addressSelect',
              meta: {
                title: 'address-select'
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
          }]
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