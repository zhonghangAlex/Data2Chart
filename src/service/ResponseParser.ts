export interface SysResponse {
    code: number;
    message: string;
    [property: string]: any;
}

/**
 * 服务出口对象统一映射类
 */
class ResponseParser {
    //公共返回码， 成功 0
    private SUCCESS = 0
    private NORMAL_FAIL = 1
    private SERVER_ERROR = 990000
    private AUTH_ERROR = 990001
    private codeMap: any;
    public constructor() {
        this.codeMap = {};
    }
    public parse(data: SysResponse, router: string): SysResponse {
        if (data.code == 0) return data;
        //若报错有自己的message，保留，能让错误更清晰
        let messageTemp = data.message || '';
        let codeObj = this.codeMap[router] ? this.codeMap[router][data.code] : null;
        if (!codeObj) {
            data.message = 'server internal unknow error';
            data.code = this.SERVER_ERROR;
        } else {
            Object.assign(data, codeObj);
        }
        if (messageTemp) data.message = messageTemp;
        return data;
    }
    public authFail() {
        return { 'code': this.AUTH_ERROR, 'message': 'authorization error' };
    }
}

export const parser = new ResponseParser();