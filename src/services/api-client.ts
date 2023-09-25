import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../types";

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '11e466a1b4d74788b3598f58fc20e622',
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  }

  get(id: number | string) {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then(res => res.data);
  }
}

export default APIClient;