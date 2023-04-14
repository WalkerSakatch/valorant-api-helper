import axios, { AxiosRequestConfig } from "axios";

export class HttpClient {
    async get(url: string, headers?: any) {
        const config: AxiosRequestConfig = {
            headers: headers
        }
        const response = axios.get(url, config)
            .then(res => {
                return res.data;
            });
        
        return response;
    }
}