import Router from 'koa-router';
import { CreateCaptcha, ValidCaptcha } from '../../middleware/auth/Captcha';
import { createHmac } from 'crypto';
import { configIns } from '../../config';
import UserDao from '../../db/dao/UserDao';
import jwt from 'jsonwebtoken';

const router = new Router();

router.get('/getcaptcha', CreateCaptcha, async (ctx) => {
    ctx.type = 'image/svg+xml';
    ctx.body = ctx.state.captcha_svg;
});

router.post('/validateUsr', ValidCaptcha, async (ctx) => {
    if (!ctx.state.captcha_valid) {
        ctx.body = { 'code': -1, 'message': '验证码错误!' };
        return;
    }
    let user_name = ctx.request.body.user_name,
        password = ctx.request.body.password;

    const password_client = createHmac(
        'sha256',
        configIns.config.password.secretKey
    ).update(password).digest('base64');
    let user = await UserDao.findUserByName(user_name);

    if (!user) {
        ctx.body = { 'code': -2, 'message': '用户不存在!' };
        return;
    }
    let password_server = user!.password;

    if (password_server !== password_client) {
        ctx.body = { 'code': -3, 'message': '密码不正确!' };
        // console.log(password_client, "client=======");
        // console.log(password_server, "server=======");
        return;
    }

    let jwtToken = jwt.sign(
        {
            'userId': user.id,
            'userName': user.user_name,
        },
        configIns.config.jwt.secretKey,
        { 'expiresIn': configIns.config.jwt.expiresIn }
    );
    ctx.cookies.set('jwt_token', jwtToken, {
        'maxAge': configIns.config.jwt.expiresIn,
        'httpOnly': true,
    });
    ctx.cookies.set('user', user.user_name, {
        'maxAge': configIns.config.jwt.expiresIn,
        'httpOnly':false,
    });

    ctx.body = { 'code': 0, 'message': '登录成功' };
});

router.post('/logout', async (ctx) => {
    ctx.cookies.set('jwt_token', '', {'maxAge':0});
    ctx.throw(401);
});



export { router as loginRouter };
