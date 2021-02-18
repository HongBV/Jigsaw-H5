import axios from "axios";
export const getAllPages = () => axios.get(`/api/page`);
export const getPageById = id => axios.get(`/api/page/${id}`);
export const createPage = params => axios.post("/api/page", params);
