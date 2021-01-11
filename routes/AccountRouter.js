const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.put('/action', controller.UpdateAccountBalance)
Router.post('/type', controller.GetAccount)

module.exports = Router