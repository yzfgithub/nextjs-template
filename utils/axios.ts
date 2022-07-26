import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

const axiosInstance = axios.create({
    baseURL: '/'
})


axiosInstance.defaults.timeout=10000

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

axiosInstance.interceptors.request.use(
  (    config: any) => {
        return config;
    },
  (    error: any) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
  (    response: any) => {
        const result = {...response}
        return result
    },
  (    error: { response: any; }) => {
        return Promise.reject(error.response)
    }
)

export function getRequest(config: AxiosRequestConfig<any>): AxiosPromise {
    return axiosInstance(config).catch(function(res: any){
        return res;
    })
}

export function postRequest(config: AxiosRequestConfig<any>): AxiosPromise {
    if (config.data) {
        config.data = [config.data];
    }
    if (!config.transformResponse) {
        config.transformResponse = [];
    }

    Array.isArray(config.transformResponse) &&
    config.transformResponse.push((data: any) => {
      return {
        ...JSON.parse(data || '{}')
      };
    });
    return axiosInstance(config).catch(function(res: any){
        return res;
    })
}