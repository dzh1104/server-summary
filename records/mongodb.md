## 服务端安装Mongodb
  下载mongodb
    wget 
  对压缩包进行解压
    tar -zxvf mongodb-linux-x86_64-amazon-3.4.10.tgz
  建立软连接
    在/use/local路径
    ln -s mongodb-linux-x86_64-amazon-3.4.10 mongodb
  将mongodb解压到/usr/local下
    mongodb-linux-x86_64-amazon-3.4.10.tgz -C /usr/local
  启动mongodb(执行设置的配置文件)
    进入到/usr/local/mongodb/bin
    ./mongod -f /root/mongodb/etc/mongo.conf
  
## 相关指令
  pwd 查看当前路径
  ls 查看目录文件
  ls -la 查看linux下当前目录下的所有文件和文件夹，包括隐藏文件
  ln -s 建立软连接
  -C, --directory=DIR
    change to directory DIR
  rm -rf DIR 删除文件夹
  netstat -tnlp 查看当前服务状态
  export PATH=$PATH:/usr/local/mongodb-linux-x86_64-amazon-3.4.10/bin 等同于同时完成下面

## mongodb的设置和配置
  http://www.jianshu.com/p/f2a407cbd612

## 利用Xftp本地远程上传文件
  安装Xftp，输入用户名、密码、IP 

## 可视化
  robomongo
  https://github.com/magicdict/MongoCola

## /root/mongodb/etc/mongo.conf 配置文件
  是否后台运行
    fork=true
  
## 建立软连接(全局)
  ln -s /usr/local/mongodb-linux-x86_64-amazon-3.4.10/bin/mongo /usr/local/bin/mongo
  ln -s /usr/local/mongodb-linux-x86_64-amazon-3.4.10/bin/mongod /usr/local/bin/mongod

## 如何关闭已开启的可后台运行的mongodb
  kill PID 1209(PID可通过双击当前会话标签页再开一个 然后输入netstat -tnlp查看)

## Mac上如何上传下载文件到远程服务器
  上传  scp ./.js root@101.132.163.194:/root
  下载  scp -r root@101.132.163.194:/root/app.js /dingzhaohua/server-summary/src

## Mac上安装mongodb和使用
  brew update
  brew install mongodb
  启动mongodb : 
  mongod --config /usr/local/etc/mongod.conf(在~ dingzhaohua这个路径下)

## 本地开发开启mongodb服务
  windows 
    启动
    mongod --dbpath=D:\mongodb\db --port=27017
  使用配置启动
    mongod --config mongo.config(这个文件在mongod程序同一目录)

## mongodb错误集合
  1、Access control is not enabled for the database
  解决：http://blog.csdn.net/q1056843325/article/details/70941697
  实现：创建一个安全的数据库，必须要进行验证 
        user admin
        db.createUser({ 
          user: 'dzh',
          pwd: '333333',
          roles: [
            {
              role: 'userAdminAnyDatabase',
              db: 'mongosesample'
            }
          ]
        })
        重启mongodb服务器
        mongod --auth --port 27017 --dbpath=D:\mongodb\db

        shell客户端连接并认证
        mongo --port 27017 -u 'dzh' -p '333333' --authenticationDatabase 'mongoosesample'

        mongoose连接
        mongoose.createConnection('localhost', 'mongoosesample', 27107, {
          user: 'dzh',
          pass: '333333'
        })