import axios from "axios";

const api = axios.create({
  baseURL: `http://ec2-13-209-14-10.ap-northeast-2.compute.amazonaws.com:8080/api/`,
});

export default api;