## 网站无法正常工作的原因总结：
    * ECS安全组配置，相应的端口不被允许
    * 服务端代码并非最新的(拉取代码失败，导致线上和本地的代码不一致，本地可以运行，线上不可以)
    * 一些语法错误(module.exports module.exprts)
    * koa语法async/await异步解决方案
    * 端口冲突(netstat -tnlp / kill pid / pm2 kill)