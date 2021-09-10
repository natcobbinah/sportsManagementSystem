import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const axiosinstance = axios.create({
  baseURL: "http://localhost:3008",
  headers: headers,
});

export default axiosinstance;
