import { AccessTokenResponse } from "./definitions/AccessTokenResponse";

export function getTokenResponseFromUri(uri: string): AccessTokenResponse {
    const url = new URL(uri);
    const params = new URLSearchParams(url.hash.substring(1));
    const access_token: string = params.get('access_token')!;
    const id_token: string = params.get('id_token')!;
    const expires_in: string = params.get('expires_in')!;

    return {
        access_token: access_token, 
        id_token: id_token, 
        expires_in: expires_in
    }
}