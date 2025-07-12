import axios, { AxiosError, AxiosRequestConfig } from "axios";

export interface IResponse<T = any> {
  data: T;
  message: string;
  statusCode: number;
  success: boolean;
}

export interface IError {
  message: string;
  statusCode: number;
  success: boolean;
}

interface RetryRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let isRefreshing = false;

let requestQueue: {
  resolve: () => void;
  reject: (err: any) => void;
}[] = [];

function processQueue(error: any) {
  requestQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve();
  });
  requestQueue = [];
}

api.interceptors.response.use(
  (res) => res.data, // ✅ Clean response unwrapping
  async (error) => {
    const status = error.response?.status;
    const code = error.response?.data?.code;
    const originalRequest = error.config as RetryRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (status === 401 && code === "INVALID_REFRESH_TOKEN") {
        // 🔒 No retries — refresh token is invalid
        return Promise.reject(error.response.data as IError);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          requestQueue.push({
            resolve: () => resolve(api(originalRequest)),
            reject: (err) => reject(err),
          });
        });
      }

      isRefreshing = true;

      try {
        await axios.post(
          "/auth/refresh",
          {},
          {
            baseURL: api.defaults.baseURL,
            withCredentials: true,
          }
        );

        processQueue(null); // only after successful refresh
        return api(originalRequest);
      } catch (err) {
        processQueue(err);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error.response.data as IError);
  }
);
