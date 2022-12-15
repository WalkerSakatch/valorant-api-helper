import { HttpClient } from "../../http/http-client.js";
import { VersionResponse } from "./definitions/VersionResponse";

export async function getVersion(): Promise<VersionResponse> {

    const client = new HttpClient();
    const url = 'https://valorant-api.com/v1/version';
    let {status, data} = await client.get(url);
    
    let retVal: VersionResponse = {
        status: status, 
        data: data
    };

    return retVal;
}