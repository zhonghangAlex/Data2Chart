import path from 'path';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaStatic from 'koa-static';
import { DbIns } from './db';
import { Config } from './config';
import { Server } from 'http';
import cors from 'koa2-cors';
import { cms } from './router/cms';
import {login} from './router/login';
import { notFoundRouter } from './router/notFoundRouter';
import koaJwt from 'koa-jwt';
import koaMount from 'koa-mount';
import User from './db/model/t_sysuser.model';
import Project from './db/model/t_project.model';
import ChartPic from './db/model/t_chartpic.model';
import ChartType from './db/model/t_charttype.model';


export class App {
    public app: Koa
    private server!: Server
    private config: Config
    private IP: string;
    private PORT: number
    public constructor() {
        this.app = new Koa();
        this.config = new Config();
        this.IP = process.env.IP || '0.0.0.0';
        this.PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080;
    }

    /**
     * 启动服务
     */
    public async start(): Promise<void> {
        await this.prepare();
        this.addSysMidware();
        this.addRouter();
        this.addErrorHandler();

        return new Promise((resolve, reject) => {
            this.server = this.app.listen(this.PORT, this.IP, () => {
                console.log(`Server listening on port ${this.IP}:${this.PORT}`);
                resolve();
            });
            this.server.timeout = 3*60*1000;
        });
    }

    /**
     * 停止服务
     */
    public stop() {
        this.server.close();
        console.log(`Server stop listening on port ${this.IP}:${this.PORT}`);
    }

    /**
     * step1.加载配置文件，链接数据库，初始化数据表
     */
    private async prepare() {
        //加载服务基础配置
        await this.config.load();
        //初始化db连接
        DbIns.reconnect(this.config.config.db);
        // 初始化表（项目初始化时候使用，不要轻易打开）
        User.sync();
        Project.sync();
        ChartPic.sync();
        ChartType.sync();
    }

    /**
     * step2.添加系统中间件，各种前置的parser等
     */
    private addSysMidware() {
        this.app.use(cors());
        this.app.use(notFoundRouter);
        //body parser
        this.app.use(bodyParser({ 'formLimit': '20mb', 'jsonLimit': '20mb' }));
    }
    /**
     * step3.添加业务路由
     */
    private addRouter() {
        //koa-static未处理协商缓存，在这里处理一下
        this.app.use(async (ctx, next) => {
            await next();
            if (ctx.fresh) {
                ctx.status = 304;
            }
        });
        
        let staticPath = path.resolve(__dirname, '../client/dist');
        let publicPath = path.resolve(__dirname, '../public');
        this.app.use(koaJwt({'secret':this.config.config.jwt.secretKey, 'key':'jwt', 'cookie': 'jwt_token'}).unless({ 'path': [/^\/(index|login|js|img|css|font|images|public)/] }));
        this.app.use(koaStatic(staticPath, { 'index': 'index.html', 'maxage': 24 * 3600 * 1000, 'defer': true }));
        // 挂载多个静态目录
        this.app.use(koaMount('/public', koaStatic(publicPath)));
        // 挂载内容系统路由
        this.app.use(cms.routes());
        // 挂载登录权限路由
        this.app.use(login.routes());
    }
    /**
     * step4.添加进程异常处理、路由异常处理
     */
    private addErrorHandler() {
        this.app.on('error', (err, ctx) => {
            //如果为未登录状态
            if(err.status == 401){
                //如果是ajax请求，那么抛401给前端处理
                if (ctx.request.get('x-requested-with') == 'XMLHttpRequest'){
                    ctx.status = err.status;
                    ctx.body = {
                        'error': err.originalError ? err.originalError.message : err.message
                    };
                }
                //如果不是ajax请求，则重定向至login页面
                else {
                    ctx.redirect('/index.html');
                }
            } else {
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