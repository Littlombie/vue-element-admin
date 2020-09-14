import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

let apiJRSC = 'https://v2.jinrishici.com/one.json?client=npm-sdk/1.0&X-User-Token=291pXLrffr6GkbK7aas0MQ66Nak1qY17';

// 根据需要进行  
export default {
  tabList: (data = {}) => axios({ url: 'api/tabList', method: 'get', data }),
  login: data => axios({ url: 'api/login', method: 'post', data }),
  logout:(data = {}) => axios({ url: 'api/loginOut', method: 'post', data }),
  processed: (data = {}) => axios({ url: 'api/getProcess', method: 'get', data }),
  getJRSC: () => axios({ url: '', baseURL: apiJRSC, method: 'get' })
}

// export default {
//   tabList: (params = {}) => axios.get('api/tabList', params),
//   login: (params) => axios.post('api/login', params),
//   logout: (params = {}) => axios.post('api/loginOut', params),
//   getProcess: (params = {}) => axios.get('/json/getProcess.json', params)
// }