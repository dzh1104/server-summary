'use strict';

const serve = require('koa-static');

module.exports = function _static(path, options = {}) {
    return serve(path, options);
}