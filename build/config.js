"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configIns = exports.Config = void 0;
const events_1 = require("events");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class Config extends events_1.EventEmitter {
    constructor() {
        super();
        this._sConfigFileName = 'Data2ChartConfig.json';
    }
    get config() {
        return Config._config;
    }
    load() {
        return this._loadLocalConfig();
    }
    /**
     * 拉取本地开发配置
     */
    async _loadLocalConfig() {
        let data = await new Promise((resolve, reject) => {
            fs_1.default.readFile(path_1.default.resolve(__dirname, this._sConfigFileName), function (err, data) {
                if (err) {
                    reject(data);
                }
                else {
                    resolve(data);
                }
            });
        });
        Config._config = JSON.parse(data);
    }
}
exports.Config = Config;
Config._config = {};
async function test() {
    let configObj = new Config();
    await configObj.load();
    console.log(configObj.config);
}
//test()
exports.configIns = new Config();
