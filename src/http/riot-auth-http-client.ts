import axios, { AxiosRequestConfig } from "axios";
import * as https from "https";

export class RiotAuthHttpClient {

    readonly ciphers = [
        'TLS_CHACHA20_POLY1305_SHA256',
        'TLS_AES_128_GCM_SHA256',
        'TLS_AES_256_GCM_SHA384',
        'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256'
    ];

    readonly agent = new https.Agent(
        {
            ciphers: this.ciphers.join(':'), 
            honorCipherOrder: true, 
            minVersion: 'TLSv1.2'
        });

    async postAuthCookies(riotClientBuild: string) {
        const url = 'https://auth.riotgames.com/api/v1/authorization';
        const body = {
            'client_id': 'play-valorant-web-prod',
            'nonce':  '1',
            'redirect_uri': 'https://playvalorant.com/opt_in',
            'response_type': 'token id_token',
            'scope': 'account openid'
        };

        // let body = {
            
        //     "client_id": "riot-client",
        //     "nonce": "1",
        //     "redirect_uri": "http://localhost/redirect",
        //     "response_type": "token id_token",
        //     "scope": "account openid lol id offline"
              
        // }
        let userAgent = `RiotClient/${riotClientBuild} rso-auth (Windows; 10;;Professional, x64)`;
        let headers = {
            'Content-Type': 'application/json',
            'User-Agent': userAgent
        };

        let config: AxiosRequestConfig = {
            headers: headers,
            httpsAgent: this.agent
        };

        let response = axios.post(url, body, config)
            .then(res => {
                return res;
            });
        return response;
    }

    async putAuthRequest(username: string, password: string, riotClientBuild: string, cookie: string[]) {
        const url = 'https://auth.riotgames.com/api/v1/authorization';
        const body = {
            'type': 'auth',
            'username':  username,
            'password': password,
            'remember': true,
            'language': 'en_US'
        };

        const userAgent = `RiotClient/${riotClientBuild} rso-auth (Windows; 10;;Professional, x64)`;
        const headers = {
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'Cookie': cookie
        };

        const config: AxiosRequestConfig = {
            headers: headers,
            httpsAgent: this.agent
        };

        const response = axios.put(url, body, config)
            .then(res => {
                return res;
            });

        return response;
    }

    async putMultiFactorAuth(code: string, riotClientBuild: string, cookie: string[]) {
        const url = 'https://auth.riotgames.com/api/v1/authorization';
        const body = {
            'type': 'multifactor',
            'code': code,
            'rememberDevice': true,
        };
        const userAgent = `RiotClient/${riotClientBuild} rso-auth (Windows; 10;;Professional, x64)`;
        const headers = {
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'Cookie': cookie
        };
        const config: AxiosRequestConfig = {
            headers: headers,
            httpsAgent: this.agent
        };
        const response = axios.put(url, body, config)
            .then(res => {
                return res;
            });

        return response;
    }

    async postEntitlementsToken(accessToken: string) {
        const url = 'https://entitlements.auth.riotgames.com/api/token/v1';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        };
        const config: AxiosRequestConfig = {
            headers: headers
        };
        const response = axios.post(url, {}, config)
            .then(res => {
                return res;
            });
            
        return response;
    }

    async putAccountRegion(accessToken: string, idToken: string) {
        const url = 'https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        };
        const body = {
            'id_token': idToken,
        };
        const config: AxiosRequestConfig = {
            headers: headers
        };
        const response = axios.put(url, body, config)
            .then(res => {
                return res;
            });
            
        return response;
    }

    // async getPlayerLoadout(accessToken: string, entitlementToken: string, shard: string, puuid: string) {

    // }

}