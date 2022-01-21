"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidCaptcha = exports.CreateCaptcha = void 0;
const svg_captcha_1 = __importDefault(require("svg-captcha"));
const config_1 = require("../../config");
const crypto_1 = __importDefault(require("crypto"));
const CreateCaptcha = async function (ctx, next) {
    const { data, text } = svg_captcha_1.default.create({
        'size': 4,
        'noise': 5,
        'color': true,
        'ignoreChars': '0o1il',
        'background': '#cc9966',
        'width': 120,
        'height': 40
    });
    const hmac = crypto_1.default.createHmac('sha256', config_1.configIns.config.captcha.secretKey);
    hmac.update(text.toLowerCase(), 'utf8');
    let hmac_text = hmac.digest('base64');
    ctx.cookies.set('captcha_server', hmac_text, {
        //secure: true,
        'httpOnly': true,
        'maxAge': config_1.configIns.config.captcha.expiresIn
    });
    ctx.state.captcha_svg = data;
    await next();
};
exports.CreateCaptcha = CreateCaptcha;
const ValidCaptcha = async function (ctx, next) {
    ctx.state.captcha_valid = false;
    let captcha_client = ctx.cookies.get('captcha_client'), captcha_server = ctx.cookies.get('captcha_server');
    if (captcha_client && captcha_server) {
        const hmac = crypto_1.default.createHmac('sha256', config_1.configIns.config.captcha.secretKey);
        hmac.update(captcha_client.toLowerCase(), 'utf8');
        let hmac_text_client = hmac.digest('base64');
        if (captcha_server === hmac_text_client) {
            ctx.state.captcha_valid = true;
        }
    }
    ctx.cookies.set('captcha_client', '', { 'maxAge': 0 });
    ctx.cookies.set('captcha_server', '', { 'maxAge': 0 });
    await next();
};
exports.ValidCaptcha = ValidCaptcha;
