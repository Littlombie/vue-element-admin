export default [{
    icon: 'el-icon-cpu',
    title: '组件',
    code: 1,
    router: 'temp',
    sub: [{
      icon: '',
      title: '概况',
      router: 'overview',
      sub: [],
    }, {
      icon: '',
      title: '控制中心',
      router: 'adminContainer',
      sub: [],
    }, {
      icon: '',
      title: '列表',
      router: 'list',
      sub: [],
    }, {
      icon: '',
      title: 'tab',
      router: 'tab',
      sub: [],
    }, {
      icon: '',
      title: '流程图',
      router: 'stepMap',
      sub: [],
    }, {
      icon: '',
      title: 'demo练习',
      router: 'parctice',
      sub: []
    }],
  },
  {
    icon: 'el-icon-document',
    title: '表单',
    router: 'forms',
    code: 2,
    sub: [ {
      icon: '',
      title: '表单验证',
      router: 'formList',
      sub: [],
    }, {
      icon: '',
      title: '表单联动校验',
      router: 'formValid',
      sub: [],
    }, {
      icon: '',
      title: '地址三联选',
      router: 'addressSelect',
      sub: [],
    }]
  },
  {
    icon: 'el-icon-ice-drink',
    title: '其他',
    router: 'others',
    code: 3,
    sub: [{
      icon: '',
      title: 'markdown',
      router: 'markdown',
      sub: [],
    },{
      icon: '',
      title: 'emoji转换',
      router: 'umoji',
      sub: [],
    }
  ]
  }
// {
//   icon: 'el-icon-document',
//   title: '菜单3',
//   router: 'forms',
//   code: 3,
//   sub: []
// }
]
