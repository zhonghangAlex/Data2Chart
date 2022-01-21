"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundRouter = void 0;
async function router(ctx, next) {
    try {
        await next();
        if (ctx.status == 404) {
            ctx.status = 404; //这里需要再赋值一次， 不然给客户端的响应是200
            ctx.body = `Server Error: ${ctx.status}`;
        }
    }
    catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}
exports.notFoundRouter = router;
