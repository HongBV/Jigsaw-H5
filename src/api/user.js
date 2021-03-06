import axios from "./index";
export const login = params => axios.post("/api/user/login", params);
export const register = params => axios.post("/api/user", params);
export const updateUser = (id, params) => axios.put(`/api/user/${id}`, params);
