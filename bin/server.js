#!/usr/bin/env node

'use strict';
const config = require('../app/config');

// 在启动文件 设置全局的promise
global.Promise = require('bluebird'); 

require('../app/index').listen(config.port, () => {
    console.log(`server is running at port ${config.port}...`);
});
