const {ApiError} = require('../error/index');

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
        console.log('User', User);
        console.log('User.test', new User().test);

        await User
            .findOne({username})
            .then(userInfo => {
                if (!userInfo) {
                    throw new ApiError(1003);
                }
                if (password !== userInfo.password) {
                    throw new ApiError(1004);
                } else {
                    ctx.rest({message: '登录成功'})
                }
            })
    },

    /**
     * @description
     *  用户注册逻辑
     *  非数据库规则判断
     *  1.用户名不能为空
     *  2.密码不能为空
     *  3.两次输入密码必须一致
     *
     *  数据库查询
     *  用户名是否被注册
     *
     */
    'post /auth/regist': async(ctx, next) => {
        const body = ctx.getReqData();
        const username = body.username;
        const password = body.password;
        const repassword = body.repassword;

        //判断用户名是否为空
        if (username === '') {
            throw new ApiError(1001);
        }
        //密码不能为空
        if (password === '') {
            throw new ApiError(1002);
        }
        //两次输入的密码不一致
        if (password !== repassword) {
            throw new ApiError(1005);
        }

        //引入数据库的model，不可以在进入这个接口之前引入，会报错，db是undefined
        const User = require('../models/User');

        //用户名已被注册(数据库查询)
        await User
            .findOne({username})
            .then(userInfo => {
                if (userInfo) {
                    //表示数据库中有该记录
                    throw new ApiError(1000);
                }
                //保存用户注册的信息到数据库中
                const user = new User({username, password});
                let newUserInfo = user.save();
                return newUserInfo;
            })
            .then(newUserInfo => {
                if (newUserInfo) {
                    ctx.rest({message: '注册成功'})
                }
            })
    },

    'get /auth/info': async(ctx, next) => {
        ctx.rest({roles: ['admin'], introduction: '我是超级管理员', avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', username: 'Super Admin'})
    }
};