import axios from 'axios';
import appConfig from '../config';

const baseURL = appConfig.apiUrl || '10.0.2.2';

const api = axios.create({baseURL, timeout: 6000});

api.interceptors.request.use(
  (config) => {
    config.params = {
      exclude: appConfig.exclude,
      appid: appConfig.weatherApiKey,
      units: appConfig.weatherUnit,
      ...config.params,
    };
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
