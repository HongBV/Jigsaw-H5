import axios from "axios";
export const getAllPages = () => axios.get(`/api/page`);
export const getAllDeletedPages = () => axios.get(`/api/page/del`);
export const getPageById = id => axios.get(`/api/page/${id}`);
export const createPage = params => axios.post("/api/page", params);
export const updatePage = (id, params) => axios.put(`/api/page/${id}`, params);
export const deletePage = id => axios.delete(`/api/page/${id}`);
