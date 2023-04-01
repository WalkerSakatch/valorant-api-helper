import { RiotAuthHttpClient } from "../../http/riot-auth-http-client.js";
import { AuthorizationResponse } from "./definitions/AuthorizationResponse.js";

export async function makeMultiFactorRequest(code: string, riotClientBuild: string, cookie: string[]): Promise<AuthorizationResponse> {
    const client = new RiotAuthHttpClient();
    const {status, headers, data} = await client.putMultiFactorAuth(code, riotClientBuild, cookie)
    
    return {
        status: status,
        data: data,
        cookies: headers['set-cookie']!
    }
}