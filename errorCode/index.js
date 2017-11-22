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
    }]
]);

/**
 * 根据code，返回对应的中英文错误信息
 * @param {Number} code
 */
const getMsgByCode = code => {
    return {
        zhmsg: mapErrorCode.get(code).zhmsg || '系统未设置的错误信息',
        enmsg: mapErrorCode.get(code).enmsg || 'internal:unknown_error'
    }
};

const ApiError = code => {
    this.code = code || 2000;
    this.zhmsg = getMsgByCode(code).zhmsg;
    this.enmsg = getMsgByCode(code).enmsg;
}
exports.getMsgByCode = getMsgByCode;
exports.ApiError = ApiError;