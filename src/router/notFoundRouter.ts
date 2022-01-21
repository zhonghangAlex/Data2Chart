async function router(ctx: any, next: any) {
    try {
        await next();
        if (ctx.status == 404) {
            ctx.status = 404; //这里需要再赋值一次， 不然给客户端的响应是200
            ctx.body = `Server Error: ${ctx.status}`;
        }
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}
export { router as notFoundRouter };