import { PlayerLoadoutGun } from "./PlayerLoadoutGun"
import { PlayerLoadoutIdentity } from "./PlayerLoadoutIdentity"
import { PlayerLoadoutSpray } from "./PlayerLoadoutSpray"

export interface PlayerLoadoutResponse {
    Subject: string
    Version: number
    Guns: Array<PlayerLoadoutGun>
    Sprays: Array<PlayerLoadoutSpray>
    Identity: PlayerLoadoutIdentity
    Incognito: boolean
}