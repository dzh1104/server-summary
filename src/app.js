const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const DB_URL = 'mongodb://localhost:27017/test';

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

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Data.now() - start;
  console.log(`${ctx.methods} ${ctx.url} - ${ms} ms`);
});

const db = mongoose.connection;

const app = new Koa();

const controller = require('../controller');

app.use(bodyParser()); //ctx.request.body.data取得数据

app.use(serve(path.resolve(__dirname, '../../client-summary/dist')));

app.use(controller());

exports.app = app;
exports.db = db;
