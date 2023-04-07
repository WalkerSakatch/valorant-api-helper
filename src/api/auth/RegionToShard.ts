export function RegionToShard(region: string) {
    if(region === 'latam' || region === 'br') {
        return 'na';
    }
     return region;
}