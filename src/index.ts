import express from "express";
import { DBClient } from "./http/db-client.js";

//DataDragon Equiv:
//https://valorant.dyn.riotcdn.net/x/content-catalog/PublicContentCatalog-release-XX.XX.zip
import { getMaps } from "./api/maps/getMaps.js";
import { getVersion } from "./api/version/getVersion.js";
import { getWeapons } from "./api/weapons/getWeapons.js";

let app = express();
const dbClient = new DBClient();


let versionData = await getVersion();
// console.log(versionData.data);

let mapsData = await getMaps();
// console.log(mapsData.data[0].mapUrl);

let weaponData = await getWeapons('63e6c2b6-4a8e-869c-3d4c-e38355226584');
// console.log(weaponData.data[0].skins[14])
// console.log(weaponData.data[0].skins);

var dbVersion = await dbClient.getVersion();

if(dbVersion.length > 0) {
    console.log(dbVersion[0]);
}
else {
    //else
}

versionData.data.manifestId = 'zaaazaa';
await dbClient.setVersion(versionData.data)

















app.listen(12347, () => {
    console.log("Port 12347")
});

app.get('/version', async (req, res) => {
    let data = await getVersion();
    res.statusCode = 404;
    res.send(data.data, );
});

app.get('/weapons', async (req, res) => {
    let data = await getWeapons();
    res.send(data);
});
