import { RiotAuthHttpClient } from "../../http/riot-auth-http-client.js";
import { AuthorizationResponse } from "./definitions/AuthorizationResponse.js";

export async function getEntitlementsToken(accessToken: string): Promise<AuthorizationResponse> {
    const client = new RiotAuthHttpClient();
    let {status, headers, data} = await client.postEntitlementsToken(accessToken);
    return {
        status: status,
        data: data,
        cookies: headers['set-cookie']!
    }
}