import axios from "axios";

console.log("mode : ", import.meta.mode);

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === "development"
      ? "http://localhost:4000/api"
      : "https://backend-wr1y.onrender.com/api",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
