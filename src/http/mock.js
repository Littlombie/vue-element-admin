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
            'avatar': '@image("100x100", "#02adea")',
            'name': '@cname()',
            'desc': '@csentence()',
            'tel': '@natural(13000000000, 18999999999)'
          }
      })
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