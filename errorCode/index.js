const mapErrorCode = new Map([
    //系统模块
    [2000, {
        zhmsg: '应用未指定错误码',
        enmsg: ''
    }],
    //用户模块
    [1000, {
        zhmsg: '用户已注册',
        enmsg: ''
    }],
    [1001, {
        zhmsg: '用户名为空',
        enmsg: ''
    }],
    [1002, {
        zhmsg: '密码为空',
        enmsg: ''
    }],
    [1003, {
        zhmsg: '用户不存在',
        enmsg: ''
    }],
    [1004, {
        zhmsg: '密码错误',
        enmsg: ''
    }],
    [1005, {
        zhmsg: '两次输入密码不一致',
        enmsg: ''
    }]
]);

/**
 * 根据code，返回对应的中英文错误信息
 * @param {Number} code
 * @returns {Object} 中英文错误信息
 */
const getMsgByCode = code => {
    return {
        zhmsg: mapErrorCode.get(code).zhmsg || '系统未设置的错误信息',
        enmsg: mapErrorCode.get(code).enmsg || 'internal:unknown_error'
    }
};

/**
 * rest api业务逻辑错误构造函数，在controller中throw new ApiError(1000)，会在restify中间件中catch到
 * @param {Number} code 
 */
function ApiError(code) {
    this.code = code || 2000;
    this.zhmsg = getMsgByCode(code).zhmsg;
    this.enmsg = getMsgByCode(code).enmsg;
};

exports.ApiError = ApiError;