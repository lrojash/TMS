const Router = require('express').Router()
const TellerRouter = require('./TellerRouter')

Router.use('/teller', TellerRouter)

module.exports = Router