'use strict';

const fs = require('fs');
const path = require('path');

function addMapping(router, mapping) {
    for (let url in mapping) {
        const urlMethod = new Map([
            ['get', 0],
            ['post', 1],
            ['put', 2],
            ['delete', 3]
        ]);
        const urlArr = url.split(' ');
        if (urlMethod.has(urlArr[0])) {
            router[urlArr[0]](urlArr[1], mapping[url]);
        } else {
            console.warn(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router, dir) {
    console.log('__dirname', __dirname);
    fs.readdirSync(path.resolve(__dirname, '../../app/' + dir)).filter(f => {
        return f.endsWith('.js');
    }).forEach(f => {
        console.log(`process controller: ${f}...`);
        let mapping = require(path.resolve(__dirname, '../../app/' + dir + f));
        addMapping(router, mapping);
    });
}

module.exports = function _router(dir = '') {
    let controllers_dir = dir + '/controllers/';
    let router = require('koa-router')();
    console.log('controllers_dir', controllers_dir);
    addControllers(router, controllers_dir);
    return router.routes();
};