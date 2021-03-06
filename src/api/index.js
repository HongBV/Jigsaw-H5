import axios from "axios";
// 每次请求携带cookies信息
// axios.defaults.withCredentials = true;
// 创建axios实例
const service = axios.create({
  baseURL: "http://localhost:7001", // api的base_url
  timeout: 5000 // 请求超时时间
});
export default service;
