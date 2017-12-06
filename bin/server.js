#!/usr/bin/env node

'use strict';

global.Promise = require('bluebird');

const utils = require('../src/utils');

const args = utils.parseArg();
console.log('args', args);
const config = global.config = require('../src/config')(args);
console.log('config', config);

require('../src/app').app.listen(config.site.port);
