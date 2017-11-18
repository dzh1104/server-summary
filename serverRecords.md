服务端安装Mongodb
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
  

相关指令
  pwd 查看当前路径
  ls 查看目录文件
  ls -la 查看linux下当前目录下的所有文件和文件夹，包括隐藏文件
  ln -s 建立软连接
  -C, --directory=DIR
    change to directory DIR
  rm -rf DIR 删除文件夹
  netstat -tnlp 查看当前服务状态

mongodb的设置和配置
  http://www.jianshu.com/p/f2a407cbd612

利用Xftp本地远程上传文件
  安装Xftp，输入用户名、密码、IP 

可视化
  robomongo
  https://github.com/magicdict/MongoCola

/root/mongodb/etc/mongo.conf 配置文件
  是否后台运行
    fork=true
  
建立软连接(全局)
  ln -s /usr/local/mongodb-linux-x86_64-amazon-3.4.10/bin/mongo /usr/local/bin/mongo
  ln -s /usr/local/mongodb-linux-x86_64-amazon-3.4.10/bin/mongod /usr/local/bin/mongod

如何关闭已开启的可后台运行的mongodb
  kill PID 1209(PID可通过双击当前会话标签页再开一个 然后输入netstat -tnlp查看)
