const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const mongoose = require('mongoose');
const controller = require('../controller');
const bodyParser = require('koa-bodyparser');
const {
  restify
} = require('../middlewares/rest');
const {
  getReqData
} = require('../middlewares/getReqData');

const DB_URL = 'mongodb://localhost:27017/test';
//使用bluebird mongoose支持promise
global.Promise = require('bluebird');
mongoose.Promise = global.Promise;

// mongoose.connect(DB_URL, {
//   useMongoClient: true
// }, err => {
//   if (err) {
//     console.log('数据库连接失败');
//   } else {
//     console.log('数据库连接成功');
//   }
// });

//promise语法
mongoose.connect(DB_URL, {
  useMongoClient: true
}).then(res => {
  console.log('数据库连接成功');
}).catch(err => {
  console.log('数据库连接失败');
});
const db = mongoose.connection;

const app = new Koa();

app.use(async(ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms} ms`);
});

app.use(bodyParser()); // ctx.request.body.data取得数据

//这个要在bodyParser后面，然后才能利用tx.request.body去判断是否绑定getReqData
app.use(getReqData()); // bind .getReqData for ctx

app.use(restify()); // bind .rest() for ctx

app.use(serve(path.resolve(__dirname, '../../client-summary/dist')));

app.use(controller());

exports.app = app;
exports.db = db;