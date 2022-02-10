"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const path_1 = __importDefault(require("path"));
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_static_1 = __importDefault(require("koa-static"));
const db_1 = require("./db");
const config_1 = require("./config");
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const cms_1 = require("./router/cms");
const login_1 = require("./router/login");
const notFoundRouter_1 = require("./router/notFoundRouter");
const koa_jwt_1 = __importDefault(require("koa-jwt"));
const koa_mount_1 = __importDefault(require("koa-mount"));
const t_sysuser_model_1 = __importDefault(require("./db/model/t_sysuser.model"));
const t_project_model_1 = __importDefault(require("./db/model/t_project.model"));
const t_chartpic_model_1 = __importDefault(require("./db/model/t_chartpic.model"));
const t_charttype_model_1 = __importDefault(require("./db/model/t_charttype.model"));
class App {
    constructor() {
        this.app = new koa_1.default();
        this.config = new config_1.Config();
        this.IP = process.env.IP || '115.159.194.82';
        this.PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080;
    }
    /**
     * 启动服务
     */
    async start() {
        await this.prepare();
        this.addSysMidware();
        this.addRouter();
        this.addErrorHandler();
        return new Promise((resolve, reject) => {
            this.server = this.app.listen(this.PORT, this.IP, () => {
                console.log(`Server listening on port ${this.IP}:${this.PORT}`);
                resolve();
            });
            this.server.timeout = 3 * 60 * 1000;
        });
    }
    /**
     * 停止服务
     */
    stop() {
        this.server.close();
        console.log(`Server stop listening on port ${this.IP}:${this.PORT}`);
    }
    /**
     * step1.加载配置文件，链接数据库，初始化数据表
     */
    async prepare() {
        //加载服务基础配置
        await this.config.load();
        //初始化db连接
        db_1.DbIns.reconnect(this.config.config.db);
        // 初始化表（项目初始化时候使用，不要轻易打开）
        t_sysuser_model_1.default.sync();
        t_project_model_1.default.sync();
        t_chartpic_model_1.default.sync();
        t_charttype_model_1.default.sync();
    }
    /**
     * step2.添加系统中间件，各种前置的parser等
     */
    addSysMidware() {
        this.app.use((0, koa2_cors_1.default)());
        this.app.use(notFoundRouter_1.notFoundRouter);
        //body parser
        this.app.use((0, koa_bodyparser_1.default)({ 'formLimit': '20mb', 'jsonLimit': '20mb' }));
    }
    /**
     * step3.添加业务路由
     */
    addRouter() {
        //koa-static未处理协商缓存，在这里处理一下
        this.app.use(async (ctx, next) => {
            await next();
            if (ctx.fresh) {
                ctx.status = 304;
            }
        });
        let staticPath = path_1.default.resolve(__dirname, '../client/dist');
        let publicPath = path_1.default.resolve(__dirname, '../public');
        this.app.use((0, koa_jwt_1.default)({ 'secret': this.config.config.jwt.secretKey, 'key': 'jwt', 'cookie': 'jwt_token' }).unless({ 'path': [/^\/(index|dist|login|js|img|css|png|font|images|public)/] }));
        this.app.use((0, koa_static_1.default)(staticPath, { 'index': 'index.html', 'maxage': 24 * 3600 * 1000, 'defer': true }));
        // 挂载多个静态目录
        this.app.use((0, koa_mount_1.default)('/public', (0, koa_static_1.default)(publicPath)));
        // 挂载内容系统路由
        this.app.use(cms_1.cms.routes());
        // 挂载登录权限路由
        this.app.use(login_1.login.routes());
    }
    /**
     * step4.添加进程异常处理、路由异常处理
     */
    addErrorHandler() {
        this.app.on('error', (err, ctx) => {
            //如果为未登录状态
            if (err.status == 401) {
                //如果是ajax请求，那么抛401给前端处理
                if (ctx.request.get('x-requested-with') == 'XMLHttpRequest') {
                    ctx.status = err.status;
                    ctx.body = {
                        'error': err.originalError ? err.originalError.message : err.message
                    };
                }
                //如果不是ajax请求，则重定向至login页面
                else {
                    ctx.redirect('/index.html');
                }
            }
            else {
                ctx.status = err.status || 500;
                ctx.body = `Server Error: ${ctx.status}`;
                console.error('koa router error:', err);
            }
        });
        process.on('unhandledRejection', (msg, pid) => {
            console.error('Unhandled Rejection at:', pid, 'msg:', msg);
        });
        process.on('uncaughtException', (e) => {
            console.error('uncaughtException:', e);
        });
    }
}
exports.App = App;
