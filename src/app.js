const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const DB_URL = 'mongodb://localhost:27017/mongosesample';

global.Promise = require('bluebird');

mongoose.connect(DB_URL, {
  useMongoClient: true
}, err => {
  if (err) {
    console.log('数据库连接失败');
  } else {
    console.log('数据库连接成功');
  }
});

const app = new Koa();

const controller = require('../controller');

app.use(bodyParser()); //ctx.request.body.data取得数据

app.use(serve(path.resolve(__dirname, '../../client-summary/dist')));

app.use(controller());

module.exports = app;