'use strict';

const Koa = require('koa');
const path = require('path');
// 定义在middleware文件夹中
const Middles = require('../middlewares');
// 数据库连接
require('./mongo');

const app = new Koa();

app.use(async(ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms} ms`);
});

app.use(Middles.bodyParser()); // ctx.request.body.data取得数据

//这个要在bodyParser后面，然后才能利用tx.request.body去判断是否绑定getReqData
app.use(Middles.getReqData()); // bind .getReqData for ctx

app.use(Middles.rest()); // bind .rest() for ctx

app.use(Middles.static(path.resolve(__dirname, '../../client-summary/dist')))

app.use(Middles.router());

module.exports = app;