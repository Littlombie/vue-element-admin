import axios from "axios";

let baseURL;

switch (process.env.VUE_APP_MODE) {
  // 生产环境
  case "production":
      baseURL = axios.defaults.baseURL = "https://www.easy-mock.com/mock/5d8dbd3cc57d672775597f4f/";
      break;
  // 开发环境
  case "development":
      // baseURL = axios.defaults.baseURL = "https://www.easy-mock.com/mock/5d8dbd3cc57d672775597f4f/";
      baseURL = axios.defaults.baseURL = "";
      break;
  // 测试环境
  case "test":
      baseURL = axios.defaults.baseURL = ""; // 119.136.27.9:28081/bms/api  //10.6.0.203:8081/bms/api
      break;
  default:
      baseURL = axios.defaults.baseURL = "";
}
// console.log('url', baseURL);
export default {
  method: 'post',
  // 基础url前缀
  baseURL: baseURL,
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 跨域携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}