const mongoose = require('mongoose');

//用户模型
module.exprts = new mongoose.Schema({
  username: String,
  password: String
});