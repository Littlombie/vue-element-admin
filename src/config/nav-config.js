// const NAV = 'nav'

export default [{
  name: 'components',
  meta: {
    title: '组件',
    icon: 'el-icon-s-grid'
  },
  sub: [{
    name: 'Basic',
    meta: {
      index: '/',
      title: '',
      type: 'menu',
      active: false
    }
  }]
},
]


[{
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
      children: [
        {
          path: 'admin-container',
          name: 'AdminContainer',
          meta: {
            title: 'AdminContainer',
          },
          component: AdminContainer
        },{
        path: 'list',
        name: 'list',
        meta: {
          title: 'List',
        },
        component: List
      },{
        path: 'tab',
        name: 'tab',
        meta: {
          title: 'Tab',
        },
        component: Tab
      }]
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
      },
      {
        path: 'formList',
        name: 'form-list',
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
    }
  ]
}
]