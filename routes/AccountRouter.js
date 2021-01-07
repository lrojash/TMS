const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.put('/withdraw', controller.UpdateAccountBalance)

module.exports = Router