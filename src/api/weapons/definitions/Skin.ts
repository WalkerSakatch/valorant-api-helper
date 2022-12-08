import { Chroma } from "./Chroma"
import { Level } from "./Level"

export interface Skin {
    uuid: string
    displayName: string
    themeUuid: string
    contentTierUuid: string
    displayIcon: string
    wallpaper: string
    assetPath: string
    chromas: Chroma
    levels: Level
}