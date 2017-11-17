module.exports = {
    'post /login': async (ctx, next) => {
        let body = ctx.request.body;
        ctx.body = {
            message: 'success',
            body
        }
    }
};