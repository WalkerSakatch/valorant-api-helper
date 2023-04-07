import { RiotAuthHttpClient } from "../../http/riot-auth-http-client.js";
import { AuthorizationResponse } from "./definitions/AuthorizationResponse.js";
import { RegionResponse } from "./definitions/RegionResponse.js";

export async function getRegion(accessToken: string, idToken: string) {
    const client = new RiotAuthHttpClient();
    const {status, data} = await client.putAccountRegion(accessToken, idToken);
    return {
        status: status,
        data: data
    }
}