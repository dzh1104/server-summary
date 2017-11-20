const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const usersSchema = require('../schemas/users');
const { db } = require('../src/app');

module.exports = db.model('Users', usersSchema);