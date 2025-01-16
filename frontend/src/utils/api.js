import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", 
  withCredentials: true, 
});

export const login = (email, password) => API.post("/login", { email, password }); // post api với email và password
export const signup = (username, email, password) => API.post("/signup", { username, email, password });
export const googleAuth = () => {
  window.open("http://localhost:8000/google", "_self");
};
export const checkAuth = () => API.get("/isAuthenticated");