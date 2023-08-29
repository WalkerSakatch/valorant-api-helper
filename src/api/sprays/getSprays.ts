import { HttpClient } from "../../http/http-client.js";
import { SprayResponse } from "./definitions/SprayResponse.js";

export async function getSprays(uuid?: string): Promise<SprayResponse> {
    const client = new HttpClient();
    const url = uuid ? `https://valorant-api.com/v1/sprays/${uuid}` : 'https://valorant-api.com/v1/sprays';
    let {status, data} = await client.get(url);

    if(Array.isArray(data)) {
        return {
            status: status,
            data: data
        };
    } else {
        return {
            status: status,
            data: [data]
        }
    }
}