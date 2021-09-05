import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://localhost:3008",
});

export default axiosinstance;
