import { HttpClient } from "../../http/http-client.js";
import { AgentResponse } from "./definitions/AgentResponse.js";

export async function getAgents(uuid?: string): Promise<AgentResponse> {
    const client = new HttpClient();
    const url = uuid ? `https://valorant-api.com/v1/agents/${uuid}` : 'https://valorant-api.com/v1/agents';
    let {status, data} = await client.get(url);

    if(Array.isArray(data)) {
        return {
            status: status,
            data: data
        };
    } else {
        return {
            status: status,
            data: [data]
        }
    }
}