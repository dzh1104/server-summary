const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//用户模型
// module.exprts = new mongoose.Schema({ //错误无处不在，这个导致后来新建出来的对象没有username password信息
module.exports = new mongoose.Schema({
  username: String,
  password: String
});