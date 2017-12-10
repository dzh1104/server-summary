#!/usr/bin/env node

'use strict';

// 在启动文件 设置全局的promise
global.Promise = require('bluebird'); 

require('../src/app').app.listen(3000, () => {
    console.log('server is running at post 3000...');
});
