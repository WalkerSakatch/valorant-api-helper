import { InternalResponse } from "./InternalResponse"
import { MultifactorResponse } from "./MultifactorResponse"

export interface RiotAuthorization {
    type: string
    response: InternalResponse
    multifactor: MultifactorResponse
    error: string
    country: string
    securityProfile: string
}