import { RegionResponse } from "./RegionResponse";
import { RiotAuthorization } from "./RiotAutorization";

export interface AuthorizationResponse {
    status: number
    cookies: Array<string>
    data: RiotAuthorization
}