import { RiotAuthHttpClient } from "../../http/riot-auth-http-client.js";
import { RegionResponse } from "./definitions/RegionResponse.js";

export async function getRegion(accessToken: string, idToken: string): Promise<RegionResponse> {
    const client = new RiotAuthHttpClient();
    const {status, data} = await client.putAccountRegion(accessToken, idToken);
    return {
        status: status,
        data: data
    }
}