import axios, { AxiosResponse } from 'axios'

function serverUrl(apiName: string): string {
    return apiName
    // return `/api${apiName}`;
}
// const serverPre = ajax.serverUrl;
const serverName = '/ms-base-server/'

export class UserLog {
    static async logoutApi(): Promise<AxiosResponse<any>> {
        return axios.post(serverUrl(`${serverName}jwt/logout`))
    }
    static async loginApi(user: any): Promise<AxiosResponse<any>> {
        return axios.post(serverUrl(`${serverName}jwt/token`), user)
    }
    static async getRole(user: any): Promise<AxiosResponse<any>> {
        return axios.post(serverUrl(`${serverName}jwt/role`), user)
    }
    static async getTokenMenu(role: any): Promise<AxiosResponse<any>> {
        return axios.get(serverUrl(`${serverName}tokenMenu?role=${role}`))
    }
}
