import express from 'express'

const router = express.Router()

router.get( '/', (request, response, next) => {
  response.render('index')
})

module.exports = router
