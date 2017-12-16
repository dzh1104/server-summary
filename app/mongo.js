const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/mongo';
mongoose.Promise = global.Promise;

/**
 * 连接
 */
mongoose.connect(DB_URL, {
    useMongoClient: true
}).then(res => {
    console.log('数据库连接成功');
}).catch(err => {
    console.log('数据库连接失败原因', err);
    console.log('数据库连接失败');
});

const db = mongoose.connection;

/**
 * 连接异常
 */
db.on('error', (err) => {
    mongoose.connection.close(); // 关闭数据库
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
db.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});

exports.db = db;
exports.mongoose = mongoose;
