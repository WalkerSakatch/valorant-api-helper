import { AuthorizationResponse } from "./definitions/AuthorizationResponse";
import { getAuthCookies } from "./getAuthCookies.js";
import { makeAuthRequest } from "./makeAuthRequest.js";

export async function login(riotClientBuild: string, username: string, password: string): Promise<AuthorizationResponse> {

    let authForCookies = await getAuthCookies(riotClientBuild);
    let cookies = authForCookies.cookies;

    let loginAuthResponse = await makeAuthRequest(username, password, riotClientBuild, cookies);
    cookies = loginAuthResponse.cookies;
    return loginAuthResponse
}