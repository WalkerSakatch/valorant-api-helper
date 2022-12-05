import { HttpClient } from "../../http/http-client.js";
import { MapResponse } from "./defintions/MapResponse";

export async function getMaps() {
    const client = new HttpClient();
    const url = 'https://valorant-api.com/v1/maps'
    let {status, data} = await client.get(url);

    let retVal: MapResponse = {
        status: status,
        data: data
    };

    return retVal
}