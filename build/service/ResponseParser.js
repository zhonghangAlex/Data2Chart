"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
/**
 * 服务出口对象统一映射类
 */
class ResponseParser {
    constructor() {
        //公共返回码， 成功 0
        this.SUCCESS = 0;
        this.NORMAL_FAIL = 1;
        this.SERVER_ERROR = 990000;
        this.AUTH_ERROR = 990001;
        this.codeMap = {};
    }
    parse(data, router) {
        if (data.code == 0)
            return data;
        //若报错有自己的message，保留，能让错误更清晰
        let messageTemp = data.message || '';
        let codeObj = this.codeMap[router] ? this.codeMap[router][data.code] : null;
        if (!codeObj) {
            data.message = 'server internal unknow error';
            data.code = this.SERVER_ERROR;
        }
        else {
            Object.assign(data, codeObj);
        }
        if (messageTemp)
            data.message = messageTemp;
        return data;
    }
    authFail() {
        return { 'code': this.AUTH_ERROR, 'message': 'authorization error' };
    }
}
exports.parser = new ResponseParser();
