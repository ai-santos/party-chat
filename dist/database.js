'use strict';

var databaseName = 'party-chat';
//uses string interpolation to access variables such as USER and databaseName
var connectionString = process.env.DATABASE_URL || 'postgres://' + process.env.USER + '@localhost:5432/' + databaseName;
var pgp = require('pg-promise')();
var db = pgp(connectionString);

// const User = {
//   create: createUser,
//   find: findUser
// }

var User = {
  create: function create(_ref) {
    var email = _ref.email,
        username = _ref.username,
        password = _ref.password,
        avatar = _ref.avatar;
    return db.oneOrNone("INSERT INTO users (email, username, password, avatar) VALUES ($1, $2, $3, $4) RETURNING *", [email, username, password, avatar]);
  },
  find: function find() {
    return db.any;
  }
};

module.exports = { User: User };