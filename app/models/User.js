const {
  mongoose,
  db
} = require('../mongo');

//用户模型
// module.exprts = new mongoose.Schema({ // 错误无处不在，这个导致后来新建出来的对象没有username password信息
const usersSchema = new mongoose.Schema({
  username: String,
  password: String
});

usersSchema.methods = {
  test() {
    console.log('schema methods test');
  }
};

module.exports = db.model('Users', usersSchema);