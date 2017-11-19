const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//用户模型
module.exprts = new mongoose.Schema({
  username: String,
  password: String
});