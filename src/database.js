const databaseName = 'party-chat'
//uses string interpolation to access variables such as USER and databaseName
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const db = pgp(connectionString)

// const User = {
//   create: createUser,
//   find: findUser
// }

const User = {
  create: ({email, username, password, avatar}) => db.oneOrNone(
    "INSERT INTO users (email, username, password, avatar) VALUES ($1, $2, $3, $4) RETURNING *",
    [email, username, password, avatar]
  ),
  find: () => db.any
}

module.exports = { User }