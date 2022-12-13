import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();
//DataDragon Equiv:
//https://valorant.dyn.riotcdn.net/x/content-catalog/PublicContentCatalog-release-XX.XX.zip
import { getMaps } from "./api/maps/getMaps.js";
import { getVersion } from "./api/version/getVersion.js";
import { getWeapons } from "./api/weapons/getWeapons.js";

let app = express();

let versionData = await getVersion();
// console.log(versionData.data.version);

let mapsData = await getMaps();
// console.log(mapsData.data[0].mapUrl);

let weaponData = await getWeapons('63e6c2b6-4a8e-869c-3d4c-e38355226584');
// console.log(weaponData.data[0].skins[14])
// console.log(weaponData.data[0].skins);


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.BEES}`)
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