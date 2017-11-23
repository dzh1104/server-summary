const {
    ApiError
} = require('../errorCode');

module.exports = {
    'post /auth/login': async(ctx, next) => {
        let body = ctx.getReqData();
        console.log('post /user/login body', body);
        let username = body.username;
        let password = body.password;

        if (username === '') {
            throw new ApiError(1001);
        }

        if (password === '') {
            throw new ApiError(1002);
        }

        const User = require('../models/User');

        await User.findOne({
            username
        }).then(userInfo => {
            if (!userInfo) {
                throw new ApiError(1003);
            }
            if (password !== userInfo.password) {
                throw new ApiError(1004);
            } else {
                ctx.rest({
                    message: '登录成功'
                })
            }
        })
    }
};