'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportFacebook = require('passport-facebook');

var _passportFacebook2 = _interopRequireDefault(_passportFacebook);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

_passport2.default.use(new _passportFacebook2.default({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:7500/auth/facebook/callback"
}, function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}));

var server = (0, _express2.default)();

server.set('views', _path2.default.join(__dirname + '/views'));
server.set('view engine', 'ejs');

//middleware
server.use((0, _morgan2.default)('dev'));
server.use(_express2.default.static(_path2.default.join(__dirname + '/public')));
server.use(_bodyParser2.default.urlencoded({ extended: true }));

//routes
server.use('/', _index2.default);

server.listen(process.env.PORT || 7500);

module.exports = server;