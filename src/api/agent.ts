import axios, { AxiosResponse } from "axios";
import { AuthDto } from "./dtos/auth-dto";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const tokenStrJson = localStorage.getItem("rehaviour-storage") ?? "";
  const tokenObj = JSON.parse(tokenStrJson);
  const token = tokenObj?.state?.token as string;
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

const UsersWorkers = {
  list: () => requests.get("api/workers/"),
  listByAptitude: (aptitudeId: number) =>
    requests.get(`api/workers/competence/${aptitudeId}/`),
  assignUsersToActivity: (
    activityId: number,
    activityInfo: any,
    workersRuts: string[]
  ) =>
    requests.post(`api/workers/assign/${activityId}/`, {
      ...activityInfo,
      workers_ruts: workersRuts,
    }),
};

const agent = { Auth, UsersWorkers };

export default agent;
