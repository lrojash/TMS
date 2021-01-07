const Router = require('express').Router()
const controller = require('../controllers/CustomerController')

Router.post('/', controller.GetCustomer)
Router.post('/account', controller.GetCustomerAccount)

module.exports = Router