import axios, { AxiosResponse } from "axios";
import { AuthDto } from "./dtos/auth-dto";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") ?? "";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
  patch: (url: string, body: {}) => axios.patch(url, body).then(responseBody),
};

const Auth = {
  login: (form: AuthDto) => requests.post("api/token/", form),
};

const agent = { Auth };

export default agent;
