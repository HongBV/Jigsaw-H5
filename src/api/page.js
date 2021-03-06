import axios from "./index";
export const getAllPages = userId => axios.get(`/api/page?userId=${userId}`);
export const getAllDeletedPages = userId =>
  axios.get(`/api/page/del?userId=${userId}`);
export const getPageById = id => axios.get(`/api/page/${id}`);
export const createPage = params => axios.post("/api/page", params);
export const updatePage = (id, params) => axios.put(`/api/page/${id}`, params);
export const deletePage = id => axios.delete(`/api/page/${id}`);
