const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const usersSchema = require('../schemas/users');

module.exports = mongoose.model('Users', usersSchema);