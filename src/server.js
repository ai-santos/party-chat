import express from 'express'
import index from './routes/index'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'
import FacebookStrategy from 'passport-facebook'
// import db from './database'

require('dotenv').config()

const fbOption = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:7500/auth/facebook/callback",
  profileFields: ['emails']
}

const fbCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile)
}

passport.use(new FacebookStrategy(fbOption, fbCallback))

const server = express()

server.set('views', path.join(__dirname + '/views'))
server.set('view engine', 'ejs')

//middleware
server.use(logger('dev'))
server.use(express.static(path.join(__dirname + '/public')))
server.use(bodyParser.urlencoded({extended: true}))

//routes
server.use('/', index)

server.get('/login', passport.authenticate('facebook'))

server.get('/auth/facebook/callback', passport.authenticate('facebook', (err, user, info) => {
  console.log(err, user, info)
}))


server.listen(process.env.PORT || 7500)

module.exports = server