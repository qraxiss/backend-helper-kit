import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export class SessionAxios {
    Cookie: string = ''
    axiosInstance: AxiosInstance

    constructor(axiosConfig: AxiosRequestConfig) {
        this.axiosInstance = axios.create(axiosConfig)
        this.axiosInstance.defaults.withCredentials = true
    }

    public async request(config: AxiosRequestConfig) {
        if (!config.headers) {
            config.headers = {
                Cookie: this.Cookie
            }
        } else {
            config.headers.Cookie = this.Cookie
        }

        const response = await this.axiosInstance.request(config)

        if (response.headers['set-cookie']) {
            this.Cookie = response.headers['set-cookie'][0]
        }

        return response
    }
}
