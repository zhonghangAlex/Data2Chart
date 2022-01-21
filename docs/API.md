# 项目API文档

> 项目统一域名: [https://datavis.all1024.com](https://datavis.all1024.com)

### 登录与权鉴——获取验证码svg接口
- `Method`: GET
- `Path`: /login/getcaptcha
- `Params`: 
v : float 随机数
- `Notice`: 前端请求需要拼接为`/login/getcaptcha?v=xxx`, xxx为随机数用于消除缓存, 可以直接通过img的src标签获取。
- `Case`: svg图片，可以直接点击[https://datavis.all1024.com/login/getcaptcha?v=xxx](https://datavis.all1024.com/login/getcaptcha?v=xxx)查看。

### 登录与权鉴——登录验证接口
- `Method`: POST
- `Path`: /login/validateUsr
- `Params`: 
username : string 用户名
password : string 密码
- `Cookie`: 
captcha_client : string 用户输入的验证码 
- `Notice`: 将用户输入的验证码写入到Cookie中。
- `Case`:
```json
{
  "code": 0,
  "message": "登录成功/",
  "result": {}
}
```
```json
{
  "code": 1,
  "message": "用户不存在/密码错误/验证码错误",
  "result": {}
}
```

### 未完待续~