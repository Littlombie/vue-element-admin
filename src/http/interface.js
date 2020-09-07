import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独倒出
// export const tabList = params =>  axios({ url: 'api/tabList', method: 'get', params })
// export const login = data =>  axios({ url: 'api/login', method: 'post', data })
// export const logout = () =>  axios({ url: 'api/loginOut', method: 'post' })
// export const getProcess = () =>  axios({ url: '/json/getProcess.json', method: 'get' })

let apiJRSC = 'https://v2.jinrishici.com/one.json?client=npm-sdk/1.0&X-User-Token=291pXLrffr6GkbK7aas0MQ66Nak1qY17';

// 根据需要进行  
export default {
  tabList: options => axios({ url: 'api/tabList', method: 'get', options }),
  login: data => axios({ url: 'api/login', method: 'post', data }),
  logout: () => axios({ url: 'api/loginOut', method: 'post' }),
  getProcess: () => axios({ url: 'api/getProcess', method: 'get' }),
  getJRSC: () => axios({ url: '', baseURL: apiJRSC, method: 'get' })
}

// export default {
//   tabList: (params = {}) => axios.get('api/tabList', params),
//   login: (params) => axios.post('api/login', params),
//   logout: (params = {}) => axios.post('api/loginOut', params),
//   getProcess: (params = {}) => axios.get('/json/getProcess.json', params)
// }