import { HttpClient } from "../../http/http-client.js";
import { PlayerLoadoutResponse } from "./definitions/PlayerLoadoutResponse.js";

export async function getPlayerLoadout(accessToken: string, entitlementToken: string, shard: string, puuid: string): Promise<PlayerLoadoutResponse> {

    const client = new HttpClient();
    const url = `https://pd.${shard}.a.pvp.net/personalization/v2/players/${puuid}/playerloadout`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'X-Riot-Entitlements-JWT': entitlementToken
    };
    let retVal = await client.get(url, headers)
    return retVal;
}