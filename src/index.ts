//THIS WORKS
// import { HttpClient } from "./http/http-client.js";

// const client = new HttpClient();
// let versionData = await client.get('https://valorant-api.com/v1/version');
// console.log(versionData);

import { getMaps } from "./api/maps/getMaps.js";
import { getVersion } from "./api/version/getVersion.js";

let versionData = await getVersion();
// console.log(versionData.data.version);

let mapData = await getMaps();
console.log(mapData);