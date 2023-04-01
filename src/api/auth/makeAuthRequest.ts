import { RiotAuthHttpClient } from "../../http/riot-auth-http-client.js";
import { AuthorizationResponse } from "./definitions/AuthorizationResponse.js";

export async function makeAuthRequest(username: string, password: string, riotClientBuild: string, cookie: string[]): Promise<AuthorizationResponse> {
    const client = new RiotAuthHttpClient();
    const {status, headers, data} = await client.putAuthRequest(username, password, riotClientBuild, cookie)
    return {
        status: status,
        data: data,
        cookies: headers['set-cookie']!
    }
}