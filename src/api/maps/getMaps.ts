import { HttpClient } from "../../http/http-client.js";
import { MapResponse } from "./definitions/MapResponse";

export async function getMaps(uuid?: string): Promise<MapResponse> {
    const client = new HttpClient();
    const url = uuid ? `https://valorant-api.com/v1/maps/${uuid}` : 'https://valorant-api.com/v1/maps';
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