import { EventEmitter } from 'events';

import fs from 'fs';
import path from 'path';

interface ConfigObj {
    [propName: string]: any
}

export class Config extends EventEmitter {
    private static _config: ConfigObj = {}
    private _sConfigFileName = 'Data2ChartConfig.json'

    public constructor() {
        super();
    }

    public get config(): ConfigObj {
        return Config._config;
    }
    public load() {
        return this._loadLocalConfig();
    }

    /**
     * 拉取本地开发配置
     */
    private async _loadLocalConfig() {
        let data = await new Promise((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, this._sConfigFileName), function (err, data) {
                if (err) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
        Config._config = JSON.parse(data as string);
    }
}

async function test() {
    let configObj = new Config();
    await configObj.load();
    console.log(configObj.config);
}
//test()

export const configIns = new Config();
