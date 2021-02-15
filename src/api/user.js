import axios from "axios";
export const login = params => axios.post("/api/user/login", params);
export const register = params => axios.post("/api/user", params);
