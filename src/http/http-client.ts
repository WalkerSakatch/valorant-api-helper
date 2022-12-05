import axios from "axios";

export class HttpClient {
    async get(url: string) {
        const response = axios.get(url)
            .then(res => {
                return res.data;
            });
        
        return response;
    }
}