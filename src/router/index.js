import Vue from 'vue'
import Router from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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
import tableDragger from '@/views/list/table-dragger'

import Form from '@/views/form/form'
import FormList from '@/views/form/form-list'
import addressSelect from '@/views/form/address'
import formValid from '@/views/form/formValid2'

import Others from '@/views/othersPage/others'
import Markdowm from '@/views/othersPage/markdown'
import Umoji from '@/views/othersPage/umoji'


import Notes from '@/views/notes/notes'
import NotesCss from '@/views/notes/notes-css'
import NotesCssVar from '@/views/notes/notes-css/css-var'
import NotesJs from '@/views/notes/notes-js'
import NotesJsDemo1 from '@/views/notes/notes-js/notes-demo1'
import NotesOthers from '@/views/notes/notes-others'
import NotesOther1 from '@/views/notes/notes-others/notes-others'


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
                title: '监控中心',
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
              path: 'table-dragger',
              name: 'tableDragger',
              meta: {
                title: '列表拖拽',
              },
              component: tableDragger
            },{
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
        },
        {
          path: '/notes',
          name: 'notes',
          meta: {
            title: '笔记'
          },
          component: Notes,
          children: [{
            path: 'notes-css',
            name: 'notesCss',
            meta: {
              title: 'css笔记',
            },
            component: NotesCss,
            children: [
              { 
                path: 'css-var',
                name: 'notesCssVar',
                meta: {
                  title: 'css-var学习',
                },
                component: NotesCssVar
              }
            ]
          },{
            path: 'notes-js',
            name: 'motesJs',
            meta: {
              title: 'js-笔记',
            },
            component: NotesJs,
            children: [
              {
                path: 'notes-demo1',
                name: 'notesJsDemo1',
                meta: {
                  title: 'js-demo1',
                },
                component: NotesJsDemo1,
              }
            ]
          },{
            path: 'notes-others',
            name: 'notesOthers',
            meta: {
              title: '其他',
            },
            component: NotesOthers,
            children: [
              {
                path: 'notesOther1',
                name: 'notesOther1',
                meta: {
                  title: '其他',
                },
                component: NotesOther1
              }
            ]
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

// 加载调的配置

NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})


var routerList = [];
vueRouter.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  if (to.path == '/admin' || to.path == '/login') {
    next();
  } else {
    if (window.sessionStorage.getItem('adming_storage_user_info')) {
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
    } else {
      next('/admin');
    }
  }
 
})
vueRouter.afterEach((to, from, next) => {
  // 跳到每个页面的时候 让页面滑动到最顶端
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

export default vueRouter