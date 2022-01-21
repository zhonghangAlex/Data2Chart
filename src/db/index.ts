import {Sequelize} from 'sequelize-typescript';

class Db{
    private _seq?:Sequelize | null
    public constructor(){
        this._seq = null;
    }

    public get sequelize(){
        return this._seq;
    }

    public reconnect(config:any){
        let offset = 0 - new Date().getTimezoneOffset();
        //获取当前时区并做转换
        const timezone = (offset >= 0 ? '+' : '-') + (Math.abs(offset/60) + '').padStart(2, '0') + ':00';
        console.warn('timezone in db:', timezone, ' dialect:', config.dialect);
        this._seq = new Sequelize(config.db, config.user, config.password, {
            'host': config.host,
            'port': config.port,
            'dialect': config.dialect || 'mysql',
            'pool': config.pool,
            'models': [__dirname + '/model'],
            'dialectOptions':{
                'maxPreparedStatements': config.maxPreparedStatements || 16000
            },
            'timezone': timezone
        });
    }
}

export const DbIns = new Db();