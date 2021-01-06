const Router = require('express').Router()
const TellerRouter = require('./TellerRouter')
const CustomerRouter = require('./CustomerRouter')

Router.use('/teller', TellerRouter)
Router.use('/customer', CustomerRouter)

module.exports = Router