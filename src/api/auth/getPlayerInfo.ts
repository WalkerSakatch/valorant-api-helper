import { HttpClient } from "../../http/http-client.js";
import { PlayerInfoResponse } from "./definitions/PlayerInfoResponse.js";

export async function getPlayerInfo(accessToken: string): Promise<PlayerInfoResponse> {

    const client = new HttpClient();
    const url = 'https://auth.riotgames.com/userinfo';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    };
    let retVal: PlayerInfoResponse = await client.get(url, headers)
    return retVal;
}