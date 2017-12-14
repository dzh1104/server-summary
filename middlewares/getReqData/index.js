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

// middles的开发 返回一个async函数 app.use(configMiddle())

// 可以让异步逻辑用同步写法实现
// 最底层的await返回需要是Promise对象
// 可以通过多层 async function 的同步写法代替传统的callback嵌套