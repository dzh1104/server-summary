const fs = require('fs');

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
  console.log(__dirname);
  fs.readdirSync(__dirname + '/' + dir).filter(f => {
    return f.endsWith('.js');
  }).forEach(f => {
    console.log(`process controller: ${f}...`);
    let mapping = require(__dirname + '/' + dir + '/' + f);
    addMapping(router, mapping);
  });
}

module.exports = function (dir) {
  let controllers_dir = dir || 'controllers';
  let router = require('koa-router')();
  addControllers(router, controllers_dir);
  return router.routes();
};