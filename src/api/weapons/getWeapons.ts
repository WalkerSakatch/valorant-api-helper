import { HttpClient } from "../../http/http-client.js";
import { WeaponResponse } from "./definitions/WeaponResponse.js";

export async function getWeapons(uuid?: string): Promise<WeaponResponse> {
    const client = new HttpClient();
    const url = uuid ? `https://valorant-api.com/v1/weapons/${uuid}` : 'https://valorant-api.com/v1/weapons'
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