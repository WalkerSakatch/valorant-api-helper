//DataDragon Equiv:
//https://valorant.dyn.riotcdn.net/x/content-catalog/PublicContentCatalog-release-XX.XX.zip

import { getMaps } from "./api/maps/getMaps.js";
import { getVersion } from "./api/version/getVersion.js";
import { Weapon } from "./api/weapons/definitions/Weapon.js";
import { getWeapons } from "./api/weapons/getWeapons.js";

let versionData = await getVersion();
// console.log(versionData.data.version);

let mapsData = await getMaps();
console.log(mapsData.data[0].mapUrl);

let weaponData = await getWeapons('63e6c2b6-4a8e-869c-3d4c-e38355226584');
// console.log(weaponData.data[0].skins[14])
// console.log(weaponData.data[0].skins);