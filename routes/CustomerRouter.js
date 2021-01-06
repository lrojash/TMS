const Router = require('express').Router()
const controller = require('../controllers/CustomerController')

Router.post('/', controller.GetCustomer)

module.exports = Router