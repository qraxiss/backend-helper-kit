import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class SessionAxios {
    Cookie: string;
    axiosInstance: AxiosInstance;
    constructor(axiosConfig: AxiosRequestConfig);
    request(config: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
