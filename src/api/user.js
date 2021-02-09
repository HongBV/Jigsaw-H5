import axios from "axios";
export const login = params => axios.post("/api/login", params);
