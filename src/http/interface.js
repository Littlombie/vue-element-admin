import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独倒出
export const tabList = params => {
  return axios({
    url: 'api/tabList',
    method: 'get',
    params
  })
}

export const login = data => {
  return axios({
    url: 'api/login',
    method: 'post',
    data
  })
}
export const logout = () => {
  return axios({
    url: 'api/loginOut',
    method: 'post'
  })
}

export const getProcess = () => {
  return axios({
    url: '/json/getProcess.json',
    method: 'get'
  })
}

// 根据需要进行  
export default {
  tabList,
  login,
  logout,
  getProcess
}