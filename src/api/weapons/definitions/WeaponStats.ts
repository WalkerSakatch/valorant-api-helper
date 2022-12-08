import { AdsStats } from "./AdsStats"
import { AltShotgunStats } from "./AltShotgunStats"
import { AirBurstStats } from "./AirBurstStats"
import { DamageRange } from "./DamageRange"

export interface WeaponStats {
    fireRate: number
    magazineSize: number
    runSpeedMultiplier: number
    equipTimeSeconds: number
    reloadTimeSeconds: number
    firstBulletAccuracy: number
    shotgunPelletCount: number
    wallPenetration: string
    feature: string
    fireMode: string
    altFireType: string
    adsStats: AdsStats
    altShotgunStats: AltShotgunStats
    airBurstStats: AirBurstStats
    damageRanges: DamageRange
}