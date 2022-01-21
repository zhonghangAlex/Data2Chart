import Koa from 'koa';
import svgCaptcha from 'svg-captcha';
import { configIns } from '../../config';
import crypto from 'crypto';

export const CreateCaptcha = async function(ctx:Koa.Context, next:Function){
    const {data, text} = svgCaptcha.create({
        'size': 4,
        'noise': 5,
        'color': true,
        'ignoreChars': '0o1il',
        'background': '#cc9966',
        'width':120,
        'height':40
    });
    const hmac = crypto.createHmac('sha256', configIns.config.captcha.secretKey);
    hmac.update(text.toLowerCase(), 'utf8');
    let hmac_text = hmac.digest('base64');
    ctx.cookies.set('captcha_server', hmac_text, {
        //secure: true,
        'httpOnly': true,
        'maxAge': configIns.config.captcha.expiresIn
    });
    ctx.state.captcha_svg = data;

    await next();
};

export const ValidCaptcha = async function(ctx:Koa.Context, next:Function){
    ctx.state.captcha_valid = false;
    let captcha_client = ctx.cookies.get('captcha_client'),
        captcha_server = ctx.cookies.get('captcha_server');
    if(captcha_client && captcha_server){
        const hmac = crypto.createHmac('sha256', configIns.config.captcha.secretKey);
        hmac.update(captcha_client.toLowerCase(), 'utf8');
        let hmac_text_client = hmac.digest('base64');
        if (captcha_server === hmac_text_client){
            ctx.state.captcha_valid = true;
        }
    }
    ctx.cookies.set('captcha_client', '', {'maxAge':0});
    ctx.cookies.set('captcha_server', '', {'maxAge':0});
    await next();
};