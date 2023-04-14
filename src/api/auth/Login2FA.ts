import { AuthorizationResponse } from "./definitions/AuthorizationResponse";
import { makeMultiFactorRequest } from "./makeMultiFactorRequest.js";

export async function login2FA(code: string, riotClientBuild: string, cookies: string[]): Promise<AuthorizationResponse> {

    let mfaResponse = await makeMultiFactorRequest(code, riotClientBuild, cookies);
    return mfaResponse;
}