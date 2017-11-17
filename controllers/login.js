module.exports = {
    'post /login': async (ctx, next) => {
        ctx.body = {
            message: 'success'
        }
    }
};