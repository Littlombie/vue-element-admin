import Mock from 'mockjs'


export const tabList =  Mock.mock('api/tabList', (req, res) => {
  return Mock.mock({
    'code': 200,
    'data|10': [
      {
        'id|+1': 0,
        'date': '@date()',
        'address': '@county(true)',
        'name': '@cname()',
        'addDetail': '@cparagraph(1)',
        'type': '@natural(1, 4)',
      }
    ]
  })
})

export const login =  Mock.mock('api/login', (req, res) => {
  console.log(req)
  if (req) {
    let data = req.body.split('&');
    let username = data[0].split('=')[1];
    let password = data[1].split('=')[1];
    console.log(username, password);
    if (username === 'admin' && password === '123456') {
      return Mock.mock({
        'code': 200,
        'msg': '登录成功',
        'data': {
            'date': '@date()',
            'address': '@county(true)',
            'avatar': '@dataImage("100x100", "Admin")',
            // '@dataImage("200x100", "@cname()")'
            'name': '@cname()',
            'desc': '@csentence()',
            'tel': '@natural(13000000000, 18999999999)'
          }
      })
      // {
      //   'code': 200,
      //   'msg': '登录成功',
      //   'data': function({
      //     _req
      //   }) {
      //     if (_req.body.username == 'admin' && _req.body.password == '123456') {
      //       return {
      //         'date': Random.date('@date()'),
      //         'address': Random.county( true ),
      //         'avatar': Random.dataImage('200x100', 'Admin'),
      //         // '@dataImage("200x100", "@cname()")'
      //         'name': Random.cname(),
      //         'desc': Random.csentence(),
      //         'tel': Random.natural('@natural(13000000000, 18999999999)')
      //       }
      //     }
      //   }
      // }
    } else {
      return {
        code: 402,
        msg: '请输入正确的账号密码',
        data: null
      };
    }
  } else {
   console.log('登录失败');
  }
})

export const loginOut = Mock.mock('api/loginOut', (req, res) => {
  // debugger
  return ({
    'code': 200,
    'msg': '退出成功',
    'data': []
  })
})
let path = process.env.NODE_ENV === 'production' ? './' : '../';
export const processed = Mock.mock('api/getProcess', (req, res) => {
  return Mock.mock (
    {
      "code": 200,
      "data": [{
          "id": 0,
          "name": "总流程数",
          'number|1-1000': 100,
          "img": `${path}images/u86.png`
        },
    
        {
          "id": 1,
          "name": "待审核",
          'number|1-1000': 1,
          "img": `${path}images/u7253.jpg`
        },
        {
          "id": 2,
          "name": "已审核",
          'number|1-1000': 1,
          "img": `${path}images/u25820.png`
        },
        {
          "id": 3,
          "name": "已申请",
          'number|1-1000': 1,
          "img": `${path}images/u61055.jpg`
        },
        {
          "id": 4,
          "name": "待阅读",
          'number|1-1000': 1,
          "img": `${path}images/u61074.png`
        }
      ]
    }
  )
})