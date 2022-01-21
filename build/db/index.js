"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbIns = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
class Db {
    constructor() {
        this._seq = null;
    }
    get sequelize() {
        return this._seq;
    }
    reconnect(config) {
        let offset = 0 - new Date().getTimezoneOffset();
        //获取当前时区并做转换
        const timezone = (offset >= 0 ? '+' : '-') + (Math.abs(offset / 60) + '').padStart(2, '0') + ':00';
        console.warn('timezone in db:', timezone, ' dialect:', config.dialect);
        this._seq = new sequelize_typescript_1.Sequelize(config.db, config.user, config.password, {
            'host': config.host,
            'port': config.port,
            'dialect': config.dialect || 'mysql',
            'pool': config.pool,
            'models': [__dirname + '/model'],
            'dialectOptions': {
                'maxPreparedStatements': config.maxPreparedStatements || 16000
            },
            'timezone': timezone
        });
    }
}
exports.DbIns = new Db();
