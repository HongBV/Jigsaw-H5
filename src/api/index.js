import axios from "axios";
// 每次请求携带cookies信息
const service = axios.create({
  baseURL: "http://106.14.90.39:7001",
  timeout: 5000 // 请求超时时间
});
export default service;
