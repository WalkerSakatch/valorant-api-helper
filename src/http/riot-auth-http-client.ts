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
        let url = 'https://auth.riotgames.com/api/v1/authorization';
        let body = {
            'client_id': 'play-valorant-web-prod',
            'nonce':  '1',
            'redirect_uri': 'https://playvalorant.com/opt_in',
            'response_type': 'token id_token',
        };

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
        let url = 'https://auth.riotgames.com/api/v1/authorization';
        let body = {
            'type': 'auth',
            'username':  username,
            'password': password,
            'remember': true,
            'language': 'en_US'
        };

        let userAgent = `RiotClient/${riotClientBuild} rso-auth (Windows; 10;;Professional, x64)`;
        let headers = {
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'Cookie': cookie
        };

        let config: AxiosRequestConfig = {
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
        let url = 'https://auth.riotgames.com/api/v1/authorization';
        let body = {
            'type': 'multifactor',
            'code': code,
            'rememberDevice': true,
        };
        let userAgent = `RiotClient/${riotClientBuild} rso-auth (Windows; 10;;Professional, x64)`;
        let headers = {
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'Cookie': cookie
        };
        let config: AxiosRequestConfig = {
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
        let url = 'https://entitlements.auth.riotgames.com/api/token/v1';
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        };
        let config: AxiosRequestConfig = {
            headers: headers
        };
        const response = axios.post(url, {}, config)
            .then(res => {
                return res;
            });
            
        return response;
    }

}