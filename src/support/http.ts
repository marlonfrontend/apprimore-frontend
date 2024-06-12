import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

export const http: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error),
)

http.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data)
  },
)
