/**
 * bind .getReqData for ctx
 * 在controller中使用 ctx.getReqData() query直接使用 ctx.query
 */
const getReqData = () => {
    return async(ctx, next) => {
        if (ctx.request.body) {

            ctx.getReqData = () => {
                return ctx.request.body.data;
            }

            //不利用箭头函数，可以不用传递参数ctx
            // ctx.getReqData = function() {
            //   return this.request.body.data;
            // };

        }
        await next();
    }
};

module.exports = getReqData;