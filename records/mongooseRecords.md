本地开发开启mongodb服务
  windows mongod --dbpath=D:\mongodb\db --port=27017

mongodb的shell(在指定路径下)
  在终端输入指令mongo

在入口文件连接已开启的mongodb服务
  const mongoose = require('mongoose');
  #mongodb协议 + 地址
  mongoose.connect('mongodb://localhost:27017', err => {
    if (err) {
      console.log('数据库连接失败');
    } else {
      console.log('数据库连接成功');
    }
  });
通过Schema(模型)定义设计数据库存储结构