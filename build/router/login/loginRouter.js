"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const Captcha_1 = require("../../middleware/auth/Captcha");
const crypto_1 = require("crypto");
const config_1 = require("../../config");
const UserDao_1 = __importDefault(require("../../db/dao/UserDao"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = new koa_router_1.default();
exports.loginRouter = router;
router.get('/getcaptcha', Captcha_1.CreateCaptcha, async (ctx) => {
    ctx.type = 'image/svg+xml';
    ctx.body = ctx.state.captcha_svg;
});
router.post('/validateUsr', Captcha_1.ValidCaptcha, async (ctx) => {
    if (!ctx.state.captcha_valid) {
        ctx.body = { 'code': 1, 'message': '验证码错误!', result: null };
        return;
    }
    let user_name = ctx.request.body.user_name, password = ctx.request.body.password;
    // 请求校验
    if (!user_name || !password) {
        ctx.body = { 'code': 1, 'message': '请求内容或请求参数错误!', result: null };
        return;
    }
    const password_client = (0, crypto_1.createHmac)('sha256', config_1.configIns.config.password.secretKey).update(password).digest('base64');
    let user = await UserDao_1.default.findUserByName(user_name);
    if (!user) {
        ctx.body = { 'code': 1, 'message': '用户不存在!', result: null };
        return;
    }
    let password_server = user.password;
    if (password_server !== password_client) {
        ctx.body = { 'code': 1, 'message': '密码不正确!', result: null };
        // console.log(password_client, "client=======");
        // console.log(password_server, "server=======");
        return;
    }
    let jwtToken = jsonwebtoken_1.default.sign({
        'userId': user.id,
        'userName': user.user_name,
    }, config_1.configIns.config.jwt.secretKey, { 'expiresIn': config_1.configIns.config.jwt.expiresIn });
    ctx.cookies.set('jwt_token', jwtToken, {
        'maxAge': config_1.configIns.config.jwt.expiresIn,
        'httpOnly': true,
    });
    ctx.cookies.set('user', user.user_name, {
        'maxAge': config_1.configIns.config.jwt.expiresIn,
        'httpOnly': false,
    });
    ctx.body = { 'code': 0, 'message': '登录成功', result: { user_name: user.user_name } };
});
router.post('/logout', async (ctx) => {
    ctx.cookies.set('jwt_token', '', { 'maxAge': 0 });
    ctx.throw(401);
    ctx.body = { 'code': 0, 'message': '退出登录成功', result: null };
});
