//非rest api的路由路径前缀，例如MVC等请求，可后端配置相应的前缀(/mvc等)
const notRestApiPathPrefix = ['/mvc'];

/**
 * 根据路径判断一个请求是否是rest api
 * @param {String} path 
 * @returns {Boolean} 
 */
function isRestApi(path) {
    return !notRestApiPathPrefix.some(item => {
        return path.startsWith(item);
    });
}

/**
 * 根据path来判断当前请求是否是一个REST请求，如果是，才绑定rest()方法
 * @param {String} pathPrefix
 */
const restify = (pathPrefix = '') => {
    return async(ctx, next) => {
        if (isRestApi(ctx.request.path)) {
            //绑定rest()方法
            ctx.rest = data => {
                ctx.type = 'application/json';
                ctx.body = data;
            };
            try {
                await next();
            } catch (e) {
                //返回错误
                ctx.type = 'application/json';
                ctx.body = {
                    code: e.code,
                    zhmsg: e.zhmsg,
                    enmsg: e.enmsg
                };
            }
        } else {
            await next();
        }
    };
};

exports.restify = restify;

// http://mp.weixin.qq.com/s/reM-jWRkp1tHVYzNpTqcDA