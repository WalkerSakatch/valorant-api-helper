export function regionToShard(region: string) {
    if(region === 'latam' || region === 'br') {
        return 'na';
    }
     return region;
}