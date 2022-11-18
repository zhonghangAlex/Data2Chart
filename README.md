# Data2Chart
一个可以在线导入数据并且可视化配置图表的网站
- 项目主站： [https://data2chart.all1024.com](https://data2chart.all1024.com)
- 项目前端Github：https://github.com/Merlin218/Youth-Training-Project
- 测试账号：admin
- 测试密码：123456

## 1. 快速开始

### 1.1 开发

```bash
$ cnpm install
$ npm run dev
$ open http://0.0.0.0:8080/
```

### 1.2 部署

```bash
$ npm run build
```

## 2. 基本技术栈

- `Koa2` +  `TypeScript4`
- `腾讯MySQL云数据库` + `Sequelize ORM` 
- `JWT` + `svg验证码`
- `COS服务`
- `Nginx` + `PM2` 应用部署
- `nodemon` 开发进程管理

## 3. 重点文件或目录

> koa应用比较灵活，因此对目录和文件结构进行了较多自定义的调整

### 3.1 一级目录
- `build` 存放的是后端TS编译后的文件目录（用于部署）
- `client/dist` 存放的是前端打包好的静态文件 
- `docs` 文档存放
- `public` 在后端存储或者后端依赖的静态资源（和dist为2个目录，因此需要开启双静态资源目录）
- `sql` 存放SQL文件
- `src` 存放源代码

### 3.2 src目录
- `db/model` 数据表模型
- `db/dao` 数据表操作
- `controller` 控制层
- `middleware` 中间件
- `router/cms` 系统路由
- `router/login` 登录及权限路由
- `service` 服务方法封装
- `utils` 工具方法
- `index.ts` 入口文件
- `app.ts` koa初始化文件
- `config.ts` 配置加载文件
- `Data2ChartConfig` 配置json（内含敏感数据，小项目就不上传到加密平台了）

## 4. 其他注意事项
1. 前端登录验证通过 （用户名、密码、随机验证码）实现登录。
2. 绝大多数业务请求的返回规定为：
```json
{
  "code": 0, // 0为成功 1为失败 ，其他特殊代码不列举
  "message": "登录成功", // 业务消息提示
  "result": {} // 具体返回结果、数据
}
```
3. 数据库动态修改，等业务细节确定后进一步补齐。
4. 登录成功后的`JWT`存储于`Cookie`中，字段名为`jwt_token`。
5. `Cookie`中还会存储一个字段`user`，用于记录`用户名`，方面前端提取使用。
6. `Chart图片`应该需要借助`cos对象存储服务`，由前端直接上传，数据库只存链接。
7. 源数据Excel表以`BLOB`格式存储于数据库.
8. 数据库密码就不传在Github上了，可以私聊问我要。


