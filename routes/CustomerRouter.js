const Router = require('express').Router()
const controller = require('../controllers/CustomerController')

Router.get('/', controller.GetCustomer)

module.exports = Router