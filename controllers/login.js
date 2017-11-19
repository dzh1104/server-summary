//统一返回格式
const resp = {
    code: 0,
    message: ''
};

//引入数据库的model
const User = require('../models/User');

module.exports = {
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
    'post /login/register': async (ctx, next) => {
        console.log('进入/login/register');
        const body = ctx.request.body.data;
        const username = body.username;
        const password = body.password;
        const repassword = body.repassword;

        //判断是否为空
        if (username === '') {
            resp.code = 1;
            resp.message = '用户名不能为空';
            ctx.body = resp;
            return;
        }
        //密码不能为空
        if (password === '') {
            resp.code = 1;
            resp.message = '密码不能为空';
            ctx.body = resp;
            return;
        }
        //两次输入的密码不一致
        if (password !== repassword) {
            resp.code = 1;
            resp.message = '两次输入的密码不一致';
            ctx.body = resp;
            return;
        }

        //用户名已被注册(数据库查询)
        User.findOne({
            username
        }).then(userInfo => {
            console.log('userInfo1', userInfo);
            if (userInfo) {
                //表示数据库中有该记录
                resp.code = 1;
                resp.message = '用户名已被注册';
                ctx.body = resp;
                return;
            }
            //保存用户注册的信息到数据库中
            const user = new User({
                username,
                password
            });
            console.log('user', user);
            return user.save();
        }).then(newUserInfo => {
            resp.message = '注册成功';
            ctx.body = resp;
            console.log('newUserInfo2', newUserInfo);
            return;
        })
    }
};