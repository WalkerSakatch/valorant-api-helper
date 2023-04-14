import { Affinities } from "./Affinities"
import { PlayerInfoPW } from "./PlayerInfoPW"
import { PlayerInfoAcct } from "./PlayerInfoAcct"

export interface PlayerInfoResponse {
    country: string
    sub: string
    email_verified: boolean
    player_plocale: string
    country_at: any
    pw: PlayerInfoPW
    phone_number_verified: boolean
    account_verified: boolean
    ppid: any
    player_locale: string
    acct: PlayerInfoAcct
    age: number
    jti: string
    affinity: Affinities
}