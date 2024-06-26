import axios, { AxiosResponse } from "axios";
import { AuthDto } from "./dtos/auth-dto";
import { ActivityInformation } from "../workers/models/activity-information";
import { mapAssignUsersToActivity } from "./utils/mapper";
import { apiUrl } from "./config/envs";

axios.defaults.baseURL = apiUrl;
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
  list: () => requests.get("api/workers/?limit=100"),
  listByAptitude: (aptitudeId: number) =>
    requests.get(`api/workers/competence/${aptitudeId}/`),
  assignUsersToActivity: (
    activityInfo: ActivityInformation,
    workersRuts: string[]
  ) =>
    requests.post(`api/create_intervention/`, {
      ...mapAssignUsersToActivity(activityInfo, workersRuts),
    }),
  detail: (rut: string) => requests.get(`api/workers/${rut}/`),
};

const Activities = {
  list: () => requests.get("api/interventions/?limit=100"),
  findOne: (id: number) => requests.get(`api/interventions/${id}/`),
  complete: (activityId: number, files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("documents", file));
    return requests.post(`api/interventions/${activityId}/complete/`, formData);
  },
};

const Dashboard = {
  areaStatistics: () => requests.get("api/dashboard/area/"),
  companyStatistics: () => requests.get("api/dashboard/company/"),
  adminStatistics: () => requests.get("api/dashboard/admin/"),
  adminCompaniesStatistics: () =>
    requests.get("api/dashboard/admin/companies/"),
};

const Chatbot = {
  sendMessage: (prompt: string) => requests.post("api/chatbot/", { prompt }),
};

const agent = { Auth, UsersWorkers, Activities, Dashboard, Chatbot };

export default agent;
