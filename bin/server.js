#!/usr/bin/env node

'use strict';

global.Promise = require('bluebird');

const utils = require('../src/utils');

const args = utils.parseArg();
const config = global.config = require('../src/config')(args);
console.log('config', config);

// require('../src/app').app.listen(3000, () => {
//     console.log('Server is running at port 3000 ...');
// });

require('../src/app').app.listen(config.site.port);