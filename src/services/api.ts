import axios, { AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import { API_URL, REQUEST_TIMEOUT } from '../components/constants/api/api.tsx';
import { getToken } from './token.ts';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  return api;
};

