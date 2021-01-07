const Router = require('express').Router()
const TellerRouter = require('./TellerRouter')
const CustomerRouter = require('./CustomerRouter')
const AccountRouter = require('./AccountRouter')

// Customer Routers
Router.use('/teller', TellerRouter)
Router.use('/customer', CustomerRouter)

// Account Routers

Router.use('/account', AccountRouter)

module.exports = Router