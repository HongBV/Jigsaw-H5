import axios from "axios";
export const getPageById = id => axios.get(`/api/page/${id}`);
export const createPage = params => axios.post("/api/page", params);
