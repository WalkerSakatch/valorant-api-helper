import { WeaponStats } from "./WeaponStats"
import { ShopData } from "./ShopData"
import { Skin } from "./Skin"

export interface Weapon {
    uuid: string
    displayName: string
    category: string
    defaultSkinUuid: string
    displayIcon: string
    killStreamIcon: string
    assetPath: string
    weaponStats: WeaponStats
    shopData: ShopData
    skins: Array<Skin>
}