import { Weapon } from "./Weapon";

export interface WeaponResponse {
    status: number
    data: Array<Weapon>
}