import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", 
  withCredentials: true, 
});

export const login = (email, password) => API.post("/login", { email, password }); // post api với email và password
export const signup = (username, email, password) => API.post("/signup", { username, email, password });
export const forgotPassword = (email) => API.post("/forgot-password", { email });
export const resetPassword = (email, otp, password) => API.post("/reset-password", { email, otp, password });

export const googleAuth = async () => {
  return new Promise((resolve, reject) => {
    const googleLoginWindow = window.open("http://localhost:8000/google", "_blank", "width=500,height=600");

    const messageListener = (event) => {
      // Ensure the message comes from your backend
      if (event.origin !== "http://localhost:8000") return;

      // Check if the message contains the required data
      if (event.data?.token) {
        window.removeEventListener("message", messageListener);
        googleLoginWindow.close();
        resolve(event.data); // Resolve with the received data
      } else {
        window.removeEventListener("message", messageListener);
        googleLoginWindow.close();
        reject(new Error("Google login failed or data missing"));
      }
    };

    window.addEventListener("message", messageListener);
  });
};
export const checkAuth = () => API.get("/isAuthenticated");