const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.get('/action', controller.UpdateAccountBalance)

module.exports = Router